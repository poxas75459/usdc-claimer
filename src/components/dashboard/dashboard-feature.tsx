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
    "4MW9eGx7cNqDSEd2eX1ahS9AEKsrq5F4ieY9eSqcojnZ5VDN6EphVkB6NaayN2Fd5Yf7uTKPd7m3QcUhAmpUS5Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dADr72UZayYPB6i2Y2Yn83PqsbqWEX8nnmLuASWtq89jund496NikRn5XqHQZ4jDS844nSHaWwsFaNCUp1CwLTc",
  "key1": "32TveLzGnHzrYxj5LDfizJJM78PdgvYQ4zzYg7VKhXTviiPx5sKuRKGm6A4zeMM58YM2sukXydTzBd4QcTN5Y6no",
  "key2": "3J24Xkzkmvd1vYaQRb226ckuQXZyPj7qqyb99msrb4De2AE3FkJUBgeCR343C9Piugd29tyRLMrdSrNYVvtDCktk",
  "key3": "4QwyqWcBt89ZNkm1yCCmfHoB35JMou9SSTRpPheBxkG1bUW81LBhgQeAbQ8nhrt4wGfN2wZJFtA16EJLFkKgPG78",
  "key4": "4fsWi4vW8MWWyEAJ6kHtTKAq4meRFqVYZd9jvPo2v9Fgr8uNTdrLtk6rftRVbVqF55NsgwKea3agsEJFn2rSaxCm",
  "key5": "4z16ub272chbdHUc7AhhchHEkwpC8JFAESPukiA4dhBYmLintqrCFk1TRocAN9UGpiiEkDSz9ujiGKydtFEXb8Qj",
  "key6": "2LLj2FhLf5a91VRdziPhxgEh3tTTAEGAzECL4MKinMDaUTVj4sR3XKtYKYvD8zzESqFeoSxL3wiALj5FM5n96mzX",
  "key7": "4aDSMpYUq4HWRA9RLXyX6tmypQfcCWcYfKNQ1rU29ZyQ2McWt5FF8HeiPEY1dQ6LeG8NJWmbHgSarj1XRm4wAyvw",
  "key8": "YQHSArr6ELVYqm2dpTiva2rStBZxwYT7i7Vr38WZuvmxvaUUkpCJWDFREqhFSnMLbyUYvm31gcWygyFaMYZuskU",
  "key9": "55yASSaUkToa3CwF1nYSjvMuPWxzGn9rCrNg5AQMX6EdYGxwfKc4qRR5UkvgS6a7vALjPFCSpfyrN7kB3Zx1qtwE",
  "key10": "34yx2oA1EhHbQdSQCwfWSW9vkm4CtAdMWEBGbQ7raUDmDgyRLgLdHGRctYMcJNSjGEgu51GKAamsSGkzqhrHe8Lk",
  "key11": "2SxLZvzrXR4qXTZjjF5afib1dxwDASQEoMG25nR1zE7VU3xMHYtvaPLUFDAR7UepCVqSUVkCuEhoUU1bj2Q6qHLt",
  "key12": "BbSSAGBwnmdRMgMFvxnJzvn84ibUypbAau1Q76J6WU5sFvrv21hRuryYXYaqRH754UXdFsb89tsRBu46HyJExfH",
  "key13": "63ZcPTw3cuh8q2pfMekVz9ynUgbA3Cefz9vv7soqHp53cKBejjEgMUHwnj2d2HEMv1dVhirwBkzUgsUFQNstTzdn",
  "key14": "1zRDYaubaonzB3PZzDxijM3fjkYGCaqdgY1PEPBLF4gqUNS8BCYt9YaWkdnz3WEc1YePGUqpnYyEYhbhjFpWEWQ",
  "key15": "2LHf16XP97z94Z9mmnFL7i8dHk9JMWowuQUAoZy7gpQDHwLUxfTqc5UrSbA8AXiHFWpjg2iA9SDyLpYbFkuGGS1v",
  "key16": "3BXiHMVH2JEHKgJkv5miUF5rBSuqu9EUMKpSNN3jfmLzUqEh5eEiKiCHoxJufrdhXLCkqcxt8RjEBp5KMqZmtYsg",
  "key17": "5UKEsv3137ct6BXc3WwMn9Sy6GGypUWeAzsoGCPsLX4EdhXCUSNP2BnfS4sN17DTvP1M51FrXVY7Hus4kFXKJnfC",
  "key18": "ARMA3rYFuHAshKGC3dtiL2bXijZjuti4ZRmAWFGvM6CbbZoaBETg2BzE58YmVVMZ4u9bsLkSabwUavaW7ZJ47X4",
  "key19": "5nCNfXdoTP45iCc5mVeEefc6Y4zSWhaZtQ1oU63LQ5rteXB6TfzQgf1FCXujLu2XitHV64ZAsSD3F5sgj6pv4gSv",
  "key20": "3yzucFiWih6yne9jcWeDsLYN84oCbC1MDMaZ6HfkFLYQfhi5RfGdDWiure19Aowo4MaG4kzwqJhAouDykotR6eFD",
  "key21": "5XjBtcj1mq19sUryFvHjfjouGBcyQS2zmQVPRvwxs7F89ShTvp6dtYMs4PUZLgpJwj3izg3DHx3uBTcCyWbQVEUm",
  "key22": "ctVxWNYUGp22rBptwkw9NYgEe5fdsG1XSWKM5cJaUMLEM6gkck5KuCpqM8QznTvsefY59bvvctFGvCdThxa44Mq",
  "key23": "4ihEq2ELd2V9ba1x2U76BiAnpQ8tbDmwFUdZ34QkpHuDU8x9jnyvQeJkg1eBgZUk6rhCuMbdAMizfHF28CPus4oS",
  "key24": "HGFQvd9BniZWdiMDw4npvgGhJxkzzcfC8rkeRMdGK95vdWkF1LQugM9EFYnWU8YK1LwUBVp56rgavF5qTkUqBuu",
  "key25": "L814mEhYBbzhkfHbJweSNZfvaYqy74kj2jcJkYkwpXRYsk69ftv7tXw3rxCFxp1ZC7DhBPjvKgkwJW4F7GMSvzK"
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
