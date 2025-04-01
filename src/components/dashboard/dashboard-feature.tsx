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
    "3Lu8oQXYjxkj3yE5cMy9RMkPyVMHAqgk4Rdk36nHKQTC6ijEg37buta2DWxiR5jP7FPFiTkeCn4AGrFvVBL4qaDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNK2dqCteXyPi2r5aML1pEMrrT7k1rcgnveopg3YSt2SMhCb8z9Vs5EM8wLNPQE5uLK9AAKasCnXMiFJNN7ci5M",
  "key1": "4qVFnS3kZcfBWgZiFFtAxMUs8oU1qgaQXrpsnELNX1J3GACwHMh8cM5s8kZ1ULnb8wScKEQ24M5HNj5HsPCQSgK9",
  "key2": "5k2aFz9AZKY5SguETB6RZZBvBzJb1RV9YShkZ8WkD8xzkBc9vfrGURUwW45tQWfpbBzXPQNyBWK2VCNXscoX3vB6",
  "key3": "2MW8NwgA5Tm3SNahvqpSkdFLdTx3xh84hCVw1S3hvZfZcPR5feiV78eWobHK6CCHfeazr9Xm4663thFUWw8VjHKi",
  "key4": "55eh1iC1vj2SbY4qNRud9n8Qid459W3BJ41q1QADSfAP7BWodAhwxPrGQGp5dEd4EVFWimu5hd4bVFv7sDZbsw9q",
  "key5": "4EhBwnQY6Tmz2vdcuqfzmnVtmSZCgCSmEqYXdJoDU9H6n4mCsR8H76aBjtx4afuqXshFUBxKkiJZo4byiGPgrVve",
  "key6": "5WWJzPfnX4YRkH4795foDbav2eHMaRWEmEuUn6TYKiJDzHZrKCi5eDwvCGScW4mrN76BwryTUpXRcyhG8VaVzfdv",
  "key7": "5KcJKaW3kVqTXMnrTM4YTkRGLFGQc2rbJ5SsfP8rkKZ74EQEBJnCiL2omKW1ZFw4rg4fYzSuhkT6DsHpnBZ1rrYX",
  "key8": "xJyFSqfs4CXwpoebRkJkJtMgy56CiLjChF4Du85C4vPok959Hk98NsQcc78Z2EWMbo6yfaBAWhHGqeSDXrUKM4Q",
  "key9": "5oipZRHkVcfCKZRGVrmaJwdi4WJ5dYkZ2MCPPJP8Tf2Arn98wesHaczTvK2MG21gcRdpcQH5hKxgLSJYHfikfbSb",
  "key10": "4RwU19pvtdZAjUCcQdywKFWqyTGY47Dy4vk4uB7MmCcYcdkh6Xbzg1vyFg3BNU3zcMbpmfERi7ujRxwudCttCFFF",
  "key11": "4nzhY5WYeY31S9wT29EsRLFp3WsetycSqB6GsTfj1Jyxu5sVaycVpxkCG13gjgVYTSpmw8GaBiAfahJaw925xxsM",
  "key12": "3fRzQQxmXHwL3tTgAUNkHgx7RLuVUYkQ4nPYG8vXrngn3N5mKBj9QQ4kYB24grET9FJ5rcThkFCeTR25JQj59hTD",
  "key13": "2RLo2wUwN7xWYPTCGer7BtZWT4QTVfDcT2tKCE7DMcbbP2KCX5Gs93YJ1tnjJoLMBXCuUNicAE2C7PE7SHf8yF5C",
  "key14": "1fpmBNsBmhAAY29o3H5jDLcH9VsWu61ZEr3oyG9LiDixxcy6AGjFfM6Yu9rGgc7sJvo92giTcjXcJ37U2Qj51xF",
  "key15": "5TPbdvAcNpv8rmUD1ZRP7jaypfxUjF2oiRLkzb33ksVtBE4tkjBxonKxx8e8bitS75tUoXnhRZKCg4aXhDdVNTjh",
  "key16": "51wqFSnMZ7FLeFkHErV8No7bf4gHchvR7nrMLnYx8N5777PjYagUuCVq3ayj6MktzQCfaEccqqh3EYk7qoPRDs8k",
  "key17": "w6CdV155VpHZrDhQetcGHQJWcURchvEHnjM9vhBZFT8Fhu67huz2JQyGU5kR8N9irNBKDozqxfhSfoH8ZJ7tEQF",
  "key18": "2Ab8WbeyfmX8o9gfTHfa6i1RTdd9hdgELzUovj7rmsSG8V5gCf8ZMedqm6hw1N7YoGHVmarn36aztUvNPF5Hg3Ya",
  "key19": "2tZHmwnMxFiM9wjqDqxZdczaEjmXK9ntYxvJ9RjqJFPnou1FDNv1aHnMMQJGmYKSz27Ejy4nEA8DguTURa8Gzkzg",
  "key20": "2L4Tw4SvcxUvDjj6YCqu3MeYJGDfg2G1dR5GuNUzzv6QrYXXcJzo53ywr24ehcG7jLDnarwGNor8T1DJ6SwwHdYK",
  "key21": "5P8vibH8xp899Fchjd3v2CnRPdf6XN2sSvDGHUSEZbSoK2aHaYpQnCLMyY38aJgRn7xV37j3dFchCVJSyzLCXEfC",
  "key22": "23677kuLeBjQ9U2bRfjHBsSHWtz2hYojKpvzRy1bQhFkMmGqcjbj6ZDV3Tt8tNvmokqRKxiyRecDWMDbKU1NiGyc",
  "key23": "4pKCJ3U657cjLCqfqAERy3tUHCQ8Y5YcFNqwVuQKaGNEPCyYG7zy45WrRgCskiJ3jLbgzp2yZ6fsTMFDFFHDgS1T",
  "key24": "3ehbmZnZU1ze5uoZJXPn9jRDRmSxYKPGifi2crkTPKuH1ZhrScqNwT6pCTDXdVh5BxmjQhZcmBUVexGMiAsQsiW4",
  "key25": "4LP2u6sytSeiFWbBwdSouS7vpP7hPU9MMwquHSyiDFMpNQUkKVvfUAm9g4uQHL4EACnYmVro2uGCk9PL4FCdgRM9",
  "key26": "3k3g6brsmuMDNkgt5DfDuohRDuKTYVVm77EUErQksaXJTENzSDGeM2XQxo6xfpVrmaM3DjaLXPYX6e55KfmY1ENG",
  "key27": "37SYkpnPiGpXMvNDjKjrXELvjqRKk35jFw2pATmz74HxogG38DKVMMERTRDkQmNU76DN4BTAnLYxMZxKaWFfrgsP"
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
