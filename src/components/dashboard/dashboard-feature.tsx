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
    "3PfTNML3CAygbo4GtabWoKxFFPrYPMQWwnVyAe36N1LCQfCNB8Nb1vXerkZcg87ik3eyep78Ah1w47xuBM8ZeBVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rj1iPe7Lmze4vNyfi5VTwquSR7sTJSzwhWdDzRegMpqaHMuW5PWom6SwK2AkuewyCtomYUYUYcUnHiN6BBMuMTX",
  "key1": "cHdqR1F5mUfeGYnSTLurLwFzEDSK6CZ4a5zRbwZBYdvWtUkmLRKn8FHwr7ruLxDSEEcFPjkdCUy99nnpJjP39Dr",
  "key2": "3Nd2jnH1qD69U78mMduSFidb6h9dU1QZERJUyquwiwPA6nPENJisQ2bQ7GaCnyoDGXAdqAfztKpsdoqUfyxBESdt",
  "key3": "4VsfrPdiVbjV7dMSWgyz6EHeSn4Xmk12Bh9uFpGD8txwiPXwDfTZE8oHg2h3TyUHzvdagMNA3jLzP4etF974PxW3",
  "key4": "67rkYGKP8xdnDup9QL7fRVvgrbQpi1DhzGh5wQV9g5P7TYjuk8g5whJHmq9cZpozRzqFhNoyF14Ekj8su8o2kNhj",
  "key5": "2hcUXE7EwJTDegjHEzk5dZ4ebLvh86Wdj8xYkwLiiqDLphDs1WBSafuWur8i6k3Cz3dM6BUhodF2pEUJTLkx1wZD",
  "key6": "5Ve1nnNe5LfPuu4TLaLh49xfTdYt2XNzf8ZAnFPcC3EhZBWEh27HhH1Wqdf3oe1hhUiAHAxw71AtAz58AAvC178B",
  "key7": "2cY98PAFxeT3vUMZHo71mPbLv9ck6pczEXUXkDki1hMczrDyXKuqbnJQqDHYjNyUqFVfZhEmt26MwHW3QPTRM5AX",
  "key8": "xfjrqcWXA8G9VBURDVAAsuhdFPRkm9XVG9ErKJz7AE7Zpz2CcuKcWf7VuyrvJdKPAcXG2CEqzomUKW4Ggs4RVjH",
  "key9": "4ENWRosgfq9fWaNrXEhGNecjy6jzbm1q1G1BFEHS1TT6tztkGBbeyFPE16kozJiPhNxJAUHdWD8deUdoUCSSqz5d",
  "key10": "ZLGHfifLhiQktpRjWA87Vpf8fY8c2VbSvx27DqwTv77UBCKRm5GJif8N3jpYoGKJsTGTVXYx2s23rKTdH12iQ7u",
  "key11": "3Y6GMyv9pkNubUZcBrtPTXdtKhTqbpVA6uUuMAbotd2nR5mX3GHMuPeWjYTrZiXjcpJAPNXnJrt8KzMDdpCKTExU",
  "key12": "2EJPC48mg8RzYXvFk3nvuavpb43xdwHQYMhTxJTUGaAAyKCBCYm1Q6MJbpjrpmmMV4Rbh8crtW7gFd1xERzR9sDy",
  "key13": "4grCiGaNRwvqRwQ2B7d3phJ85zG2RJVrUYs6jr8F5aBNsRRnmLLMW7o3Ldt2a6EWGZMryfASUZsJAqXy7pjZQWSm",
  "key14": "ccLkoCMRkZvFNQs8eWkXnkvnmQxg3WeaAhZ15D2ZxpC9D9Avje2rJ8zk4aGkCFvFEA7MUJwPhxrGULmhzrXCoCK",
  "key15": "32P3WPNkcnwkdJxbg4mYZ4zXFJHmA1EPjgGZfT79Vw1eSNgWkFzdqp2G5oQe1AxELobSJHVFMSsMTEGS4Xx7ySQD",
  "key16": "5pAMcW8WVfcQtHrU5aKXu451tYiJtSXRdK6hE7RECRj3r412bjCtXo8V282pdDesHffX2PCLV1swUZGse8w4vjp9",
  "key17": "2tuWjG5MspjQcVinaBJL8bKhEgf9tGV6qbnX4vmTfCxNjMfMcP72A82MF22QkUbroWdBjkbUs2NGoCnWHZ7f9NHk",
  "key18": "mDg2UpC2ymMBMQijdjEmTTYjDLXYzqdwJc8zE7icpEEdsBuEx3gRRiRtpYxx8rLyw24vDTsTs2QGFVjWg9tvGgc",
  "key19": "VdkZWX9RiUbNtmhVwvam22Bvt3WfSxApGa5AU86try6vKoqdD28gNt8C2r1ihqfYQEbqm7936Cga1RaKDShzYLd",
  "key20": "cuq37bn5YbLNRyrDqDzoB7e3RAf1BM62HgEBJ55MiYKfYY6jXkPqPKHXfbndsx2L2Db7QLFsEdmwP8bLDrtQrgz",
  "key21": "3QDLcyXdCVHDD9GT66CFaaUmZaHBcb7UWmBfsFBuiFCE3pe1XwtjdD1Nb869qhW55SchzKtyh1EfLrwS3pwcfFr",
  "key22": "2PnGVKBtdCodKciBh92oFBtfoyLAHZkLn5Bz5ZvmmtcLaymtAVedZmQLFLwxsjgZwRwMRKrNKrjmR6ohdZF3rcvq",
  "key23": "2QXiSa9wZZHU7DdjonTCRyp4vxE3y3fg8xHSUHKzmzERyEQLpYnFhGsoFQkerQWfaanbUaVLM6HAmmPYei4myNBT",
  "key24": "u51799ANEKJi5dYkdeQdsS6uRWFSK6eiEVQe6tgJ4woqBQrdhzyWEmtiiim3wPK3TbWLeXnhAq9wZpfset3kVxp",
  "key25": "3mbH83EmrRTLCVRJLtFGnoothHBFN68DKSjQm41a6kRHAQrjuDgU7NkYviVxDu8JBZbV1CdawAPUuAkfH2vCTQYU",
  "key26": "47C58VR6V9vJdoShGMGZhhP4JjNQo6pU5YxozTbvhUEY2Sxk5qY79TnsvBAtjFKewNMHptGbbNEAPzAciexaGnjd",
  "key27": "5f3VUVT8bK3jcbbiiwXNbsj5M5Dxwf7ykofQ7YxGuZGjer293quF5wBXNpXSsadbACXJnfz3sLuSwQGAaehmDemG",
  "key28": "5ntrXNCuybTh9woE3VTsqh5cAK6eWSkuevsqpsNCucuM4oQNe48zfKwoYT12ZdbL9mdPcS5z1eS6C6wBrzAAC3FN",
  "key29": "TFfuszMGZSqcvoePrrvBHHzQCBddTHyGz1cuvtGccokUtr1tY6AxtAA884ACXr19yde2ciYTfo4d21pYfPzKVam",
  "key30": "2NZ5RNQh3inggcExFrtmxrAaeJznm7gQjChjEXWPkZh8Mv9ZMYqyFfzuNnCAy7QguWpcJ51tfxvceGzWHVra39pC",
  "key31": "V9Un85xomPj7o7Qd6YkN5UQ17m4ieRsYDykgt1GcYJGU5cua34zZLrA7izR2A91u9MS3z1nNdzh6PDkmeMzFF8J",
  "key32": "5h8tKQkmwJfHh6QWtpQua8LrGB3847AghsHKrsKaV7qpeR5mvcQjqJQZDoESytFYjRvWNBmboebthChfZrYxp6N6"
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
