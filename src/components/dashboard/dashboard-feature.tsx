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
    "JC7F8jgMhfyH6e42pAgHpy4znoDDyYtJYk1rgTzxCGQMtB9GJLPjBKhnbZr8PqbBi3w99FCLo1zy8ejRW7ysDNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGS7tPxmt7Fhvjxt8gtPXwJdawybxTyu5qkpjJhmnCs8kMrqCeSfiyrb4sgLTfB5qAfTxcCEDx3ULjGDhKMXntF",
  "key1": "E4CCvxhAZnMrpUbPK7LPmHvzucSNQogPyybyTz8V2dwRvFnqEPnvsCQL4ZGKMSNcxmG82RDSCkrQzkHLyBfLBo9",
  "key2": "3XR1uZZjqHWMoZu8hfzswUhWivXt51fJhz39ejiXFcaT8MQEXbgYZENe8yLJZDFQKNmAcxRakdyk61U44cqvGxFd",
  "key3": "4yVKKhnjHBbFFvnyVwMWSYk1YUzAEaiXeuw67CsfzxPzdnQPuTJ2JkJxPTj9owXKH65deicQJT32Z7vZJVVoy9XT",
  "key4": "21VB78EhKUv849LtU22KnRKY8x93VwYhgctJuhuLmixTWkMGxm2KNezrJuRDHBLUwhANrQQfh4HmaGdEjerfyLkT",
  "key5": "4M8W3P7FDHidL4YoNoB7seWPdMGRTP2FKA49T1wabX7DCeignqVi6kB1ho3mva1J5RTBkmqLphg24tfwmUm93jKy",
  "key6": "kMzL7oBnSnejmivQ2YMRWbMBiGXDk5c5Tgtht6ch8NodwSy5UnrHgXrEaVZdZf6zqe74cgCHbmJfq2V6EHqK1ar",
  "key7": "4MRVRpRFUfHyJcDWs24zoBdFTVm3ht4AkWupuD9abH4t7kTmsonR2VwgrKdK1RKAP1HMZpNBWNcyFv1RpUuU145r",
  "key8": "29dVDUUo9YG9qdeKaHMrSF1WJgrvUqFV58X3RLDzKZnbE3kCcBrGbSgf9a3vofBFQfJ6fjQeiu8rZxai24MrLSdC",
  "key9": "41SZJza9MQuks74T6VuvRnBXhLYV5BA6mxCavF7BEFnQ4Efkpcvfyhbv2XsZm3WhBceqEcd8jtKCRgwDnHLdmvYy",
  "key10": "5wPfk44R24hDREHSpgzUMtAKs4nLxUoXWF3ughB22aXo1G8agypfMv3chgq7eAcaFbijDYVVUaYJX94QrCbNmASH",
  "key11": "bsvYLvJiHJoTT867gBUkmTSCfkUx5KEhsPVrDDCPbkRJqK24MS6Lbai945DHRhL8zLbshSePJnpHAGgL1DyJCkh",
  "key12": "uKzue65crgp4TrWo2A3dSasLQZ51U5SMZPFUm9np6RediNYHgz23nPqcWZog4kcjCsz9FYhgHrwYiNABuWFEejy",
  "key13": "3iBgZa7vdHTyyuXzRdgBuGyVrE9pkd9cJuNUJ5asrdpWQYUHHYSxZGvdcrFeye9KNNinPoGnvTJtf9c2Wk6EiEif",
  "key14": "5CExmB3rmxyMZ9xC7dvQ3DMrYetoFtJ6v53nA1JjppaN6Lr1nT5dHMyfBLidUzp55Z8ZH5d8UVZNToSvMLqLBmNB",
  "key15": "y77LXtPjZvGzzQj3SxkKUJ29Lr1SgjHYTgG2ZTduW1NQpNQVvkBHvPvwptBdka8fsdcRYv6THv5iRbCuLdi6yda",
  "key16": "2R8KKqgpcT6myMvgYF7HzHSyrbLgWPe5yqsYNKTux5ytiNjp4humayRFn98iRwF6G869aE5cG5AkPStcVPwntH9W",
  "key17": "3TQgvxXw9Ms6ZkGsFPQNgf9XrkJofp6qUirQ6Xmh9FHy4jHqH7Bpx2N5cU4mRCyNLEnUKvnE9jsjDHB5h8a93Nx8",
  "key18": "4j9vX71eNsZTGiYVk4Rq4xe19axJNGqrvWMq8jTrhgXc76Wa3CmtSNEnFBopsKLhQJZ65WYUZYEYo6Z56HX9YjV1",
  "key19": "2FNTfcnHvxwrzg8vXLSDJyxXwUXsMB8Wz9b3B1uRKG5W8gQiPaYkzCBRU7kBJjk2APcMrRMDTT7pDfpQc6C8erZW",
  "key20": "4rJBincmePFGpxt8bqHNDozP7qNwwoxMM9Y5vuYkKcpcwLbEukv8efTpPbQ6He42FWkRkz8pKXhSwhK5FPs9VbH6",
  "key21": "3iK1Wc3TWQHNqGoADDPkJ6K2JeUnKVpM4PcavwKqpiJtdrG3aVsXZgkEq374evf9HfHgLUzJ2a65ojmtjfncmLJ7",
  "key22": "JyqpWHfUygPZcNZFbdf1mZHA2iBfPmrEF7YVmsQF5gw8mk5Dq2D95dNGdmHnXo5vznVxrAxFx2aAsDfmw3ikcm9",
  "key23": "CAVqQt5obTFmvmWztd6Bxf2mYzVhZyBq18CD6j2DfYMts7XRyzN8VmRqsrFJJFFVweGHcCiSEdTPXVhJmkheMPD",
  "key24": "3F9VchRxzq1fBM3GksxLQHFgwZXSm814heyr6bsNQHjzAzkgPNfJ6Zs678BZWK6cJHtk7DA5mihRqkNrCo9eQmWJ"
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
