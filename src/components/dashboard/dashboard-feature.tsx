/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5TnLL17ATfMuFfnTyff4Ro19t9EaJT4qmNbCmrfiEaJtKDEcfmUoVf6onejsJgfxTX84ae84ed8Yn8rtpzAwXVaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rygrCsC6aaKZjWh5CDBVkhd1gANxjyjbj46UtHFSBJux9KGVZM8jeZ96c2KfeECVzyhcHGFiJ7v4v5NJCfFkGry",
  "key1": "4ANwbpyuyTBVp9K6cMD8ik1qFKPuhqKBRtwmnRMNkVNt8E1u4nh6XpjasqfRzu7op9Tsiu5PVjaJcgj88JVoiFnd",
  "key2": "3Hivqsjk9TVjMEBdd4pvsmBUGxsQqiZTCdr9AJ61wkPoEz2N2pWZQjQwCj4iHc5uSq43tV7roBEMyN7sNRx3P1tZ",
  "key3": "4iDZcwLnfRizCULM3BxjqpP14quJcVXy3rTDtKynNcNZDtz9rqMmcaMU22gLCEfQBWh3ZMfS4frX2ixfVi6axxXX",
  "key4": "3mJsdvrppajtJEc7k19WNoR8qGarTmxd69qrY8cyVfmV8ubitwBTCP3zuuUmKkkBcNXvMfrF61eVtrWg7dBGJkni",
  "key5": "4SAjL7jYCRGmpMZnWo29x1yc7NH2q8M3riZkov8vEcKYTUetA3UgCiFguVMMyktvCQVwLZcUHxXcW2bSJGRmG5HV",
  "key6": "2p8fuLzzTscesLTL19spbbJjiWzR77414o1JBoL4Fq1znBDpH7WkqhYCuEthA3qMLrd3njPGJJvogF5y8Vuvgigo",
  "key7": "5MjngFsU24LYouJRFJ2NrQLAyMeue1ARA5T1LpEhPjoVNzEifu2164fdQ9GukL7SyGCokdgPSC6nhyRnqA9PRpc3",
  "key8": "4rNP47L1TBMkSL4Prp4dqF1KmUrcnFzbxRhvsgLfnpkrUdvzKKUgU2EKLVo3Zu5R6X3TuK6ndxS8dJky58NgqZM9",
  "key9": "322xdswxM5tBGKVuphFnyosJwxKGCmH2upA5iRawTy38F56oox45Dk2epvxKurDEzkjBKDGVYH7KEmnbV2CVgqmA",
  "key10": "5rnRtWgVhwu43ypT3DWFKZ13gVDsze1VEs3un5Lr3Ng37NrKkMh3kfU6wKuDQBSRHhU8xcbK4jYygcUxJV8Cjak8",
  "key11": "5ZcnELVkVKdWmRbjRBMkkA6L8eVbWPTRud7PyM1VTmpe8fM3RQmKo3qLr4byVfVFRgqALRSA72aDFkGmMUhHh4pD",
  "key12": "3C4eAXzgRaPuMywfL7CdQiZpZy3fvVo4axSaKPF9QUYeh6izmb8Si2WqiG1g9H59JFLRrqeBEg5h5WHj4eUbPSvB",
  "key13": "4sAQjCB71qnGYXzAvysfDxbobKCVy4RhCENEP6jXvNgM93degYDcLdVksRBRhp61T5pBtDZEYMDye9k7QbSP6AWL",
  "key14": "3sw21R3WetcXCJFASwr8rkAL1sRfv29Uq6miBAf5iuRRKdhMX4n8KBfUtGBvxq5D4veHAsuQBgSeJiX2p6sx4yYs",
  "key15": "yStwWtzJAR8ujC2zXgJyqfTpKQHppcCoYxsmb3eqdb5ALuUVdB1CQPNK1tVjHD3vU7qRxnirqCCqYutpmBp1BpH",
  "key16": "3HyqjUvPzw1jurkBzSrrKS8izQGPDqeLEWWZcE8KhNyPiAuhRU8FshfuzB6WGF7oqU8bAUgYc7zdN7kd9NJMrvs",
  "key17": "4RDTeGA2hnitXLmmncTMp4zFK29tb8iQjWQVRgJtLiBzT2c2BWdtS323ZFkfu2fotycUHdha1Z4yo3BipYjJsxWi",
  "key18": "ZHq3rYwcY3jvfMCbfyGAVHKrxw5Ux2QusBcApLpnGBTkwwPrirPX3eqU57XmzHwszEQ6heo7tjxEgX1jFzK1qSY",
  "key19": "3pd4rH6DVhdwmdk9JvbFtHGqzh5z43NNSetjjTpnRoSKjTtWezTAtuTh1DrMQkXSnzjnsA7xqoTonq8W1oojr4YJ",
  "key20": "53ujYsUAwVPVzxtWFUGY3hjNd6XZSLKoXVhXxQnZt5mGjHUrf1tRyTQhzN29WJedDivsKwdtfKhUFp7eTrs7dtJv",
  "key21": "3eojRKdPR4Zn7zMsMH4uk84L9ybYxSBFQveQnzkmDXiTVbQi5ketmWb8gvBf2S2zxo6jasSyGCyqFKik7TVKySWf",
  "key22": "54C4tXDkZ2dc3N26LtEGhyLrhGD9Wi55rqcWdhYvmBYYftkF2AEY6fsTVgsc19zyygdwcC1gzC9vAT52pVrmenS7",
  "key23": "335WPpYb1Z7bUY8Rz6xbzAVnDDUF371gU34K5y8FowtZ1WkoPjogxAw1zvDbzQrMqCGk8z7YPW1tTngU9R5si3a9",
  "key24": "43Duex9SdKDHgsV8yh1qXTy7bH6BopWfQEkeXAC6uoFhoFWhrD43WtTFzbXiibd5DeHVoQzSCQDjEBNqaM25LXsS",
  "key25": "Na7SyRWigY4A5KFqrhVyDeNPJr3jC1bFivWvh1RHmof79tB6h3qM4GsmEeRLQDGJygmEdMe3usDQPmgJXS4EPkY",
  "key26": "28gYi1nYL2ka2ohruzjwvFSHiGeq7URvVZAXTN6v1eapMqCN9r2PptBXbKahtKnuosUUpCK2Ruk3V7YB6uh5bV57",
  "key27": "34MysGKADDnFvekH9aXEA8mXuhs2prDCYp5hvXYnWGLtBzytRd3xFi8cyzGffQABTPbUkfmirtNtPUChNDQThxHo",
  "key28": "5mhjfz2pfKzG8KtTLnwXio8YTRZXUqRNFmX1Ghuy9cqRFcJYPUnkw3Yv9bDcQMxsvbJJnMryKHn4LcQJpBkCie4Z",
  "key29": "5h8wDYTBhbNfiZ3DqRFVh9ydxT74dcbrqh3VBq1X9TeZjmA8pGBqeQiRzwa7mfjP9ZMMgW7PikdoGLagPhLTJXkP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
