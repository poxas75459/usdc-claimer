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
    "MhjeWbxYgYn3QMuUmVm7iYjVvZWgePTT2qZv4ajmKHPHnnz6ACKpdgjpwNZdAe7MRnXdfeeJt95buQKQnoggoGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DV5rDrgsiphZWBS7h7hNubyuzefw5qPTXvVf1jYqEvwASEadkggwSEPR1FzRx73Vh3uuY59mVrf8EDPfdtgvV7j",
  "key1": "3s4Ry9tNvhd7FFeKkxfFkZqxwAL7PxD3tkafMxgUBmZDCGzR3gvFCkUVQGESE3ff9N4Pg7q4xDxfF3QASB5ozxEk",
  "key2": "5tH6WUg3tRVmqKmCmawoXiw8faAcFd2JsVjpcDNjeo82u1ffcZyzHnJ7hWvHqAuCLiJwXjEdSNt8q87fCZssHQ5b",
  "key3": "2hRJdJk2EasA9Mhd8HGVvSA8uG5W4bzJcuFojtaNBeAHgpzDiarDPvCweVhuxk8u8ATDFBmvqJWekTHiy9GmqgDV",
  "key4": "3QF27wKmzwmKenuSY7oheVJyU7hqUdrE8rbCXNeqcJXBkqtNiTwJqhHhMfDFHn58pLbcYiAziNghB4sh2m2YR2dA",
  "key5": "3Byx6ZbpxdcTi4QDE1tD1uFuJW7GGz6Y3wcHEZkHqWvzPBjsqMwnn5FwvzHMFq4WrZi6QviPeAiDXbpgaLVW1MUJ",
  "key6": "5KXfBCVpDQEzMKx6NW925rVkvsFLRwU5p7NSeNeH2AvgjHoHY2hdrXGZmY5a7LtJdNps33L1bXsB7suVgm9v5YK5",
  "key7": "22jxyhABAdWmRGtuc4FZjsgvoQHYxSFVFLeNYRaAEreWfFxNJJghmKnmhZUCozgSWMFsQ2qASBUoVAUcJeJPwkfT",
  "key8": "6325WVJHKppTpw2zBg7Yk9Z6tPxL9dQ6o1waNF8eciwkvvaX7pSoE1Vf1bZQaZFcKpECM53UFvFFBqtWxaiV1igC",
  "key9": "Txyy5PxSkaboWEhMMcPhLom3rJNMK98Fvti4uaeXAiP91vQgrPrYd9ruJJdY9u2GCv477MMPqYj8hVYRzpuGDDE",
  "key10": "3QqTqzhq9XhKu8r1KqKker8o5bdnQhZ3sQcuytNqjdFMgdhvvkDePEGK7exNcD7E9bbCW52HpyoyVKBfpqw9m5xt",
  "key11": "39vas65QMi1sivYa668nCPNWEMNBEXyNsxJs4RQAdeaHXGy1gXvLdJojsZQQFAhHXdiFgiQLcYTwubcAfJqLn5fJ",
  "key12": "32KAbVKLeLUS4kJhEPDw9uhEa9FhjkWmhWjYpVYXsy2Vj1S7Pv69jq5U1mbv7ifcqrz6Geu1tLnBNW2is5GxKw4b",
  "key13": "3WFzpFPXRGJeN5zPz18bWc9mzb47Hx7bNFBy6Dz5VpGvH6H8JqiuwXJAmN64gwHtUKRULbHd8htciaxaJcYxrEkk",
  "key14": "m49JkwHDgr1LsydKpdkrSUJz8N38sTykoyqqZUXCWzb4BjXnrAyNYn6Dh7XxjechnjMRZCST8NzdYRLVTkK1wzE",
  "key15": "5sttdZNqueosd4QDj9Kn8HN4WyXC3hkCz9dvMnoxEusVN1iUEAEA57BJP7sgWe2bAhAgyatKLPQDLNNvTYJUMdTS",
  "key16": "5caqhG5wLKRQSYYW34dSkcKhRECNfxVyeG55bLBuZ2VYbxtHovW1iR42V4YywZozBPi6ZqdFdpB9P5rnwCvgmw4q",
  "key17": "2NjoS3j92SzYx8PLbzvDnb8Pp4aGjLWQ2HJaMcBxw9SehvcnpZfidGK9D7RCSL1S1KJazwtiWBz2FtT3S1j6bn1x",
  "key18": "52Mzak61oY11TeEbqvznZB2WbPDqTEfmeVigcEvfF9tpryNRQrKoY5f5Ejp1kruocyTPprCk5cNHd3aUEEwycRtu",
  "key19": "2kmeNy9nx6DnUScTucwagptxLkJ5TVvVfU37K2PTypH33ec8uX5WubJXz9FYtwCygCRv67FmGbG8eKgSNegXnhYq",
  "key20": "5zJbQe2rFJ8auguF3QMErTbEKWQB38NGJ7Txxc4PcfGqHQ3jo44yceQYqeyjGeRZtKYSiJ4JKQ9BP3JDbd7VwkAa",
  "key21": "4SiFJ4bDu269aTh2yXJAGjsJkw8saGneE3KsYwW3GUBjsT7yEzx8rJRVdNYQFu3ikX62GFiLPivhXWXBW1pvkwvC",
  "key22": "5j8qxaVE7EcmoJv6jye3zbVwroQ48uh9uLfeyoPGMPBJrxSPkZDBLgoh32yF6fg2jNZwGu4nifc5pNgPD9v3JLwE",
  "key23": "5KbCcEYHFZ9K1BFshUDYUC8C7Rp8Fg2Jv3ECDkUtYW5a299XJgeyvRg9tgouqHovAXUXma6sZFeVNeokqTdvx6j9",
  "key24": "28ih9atKoygEsnWtYiouDhUdWXCqbDAryS99EP9yG6bfC6Yvo9NmdDkStyboZLvrLS13G9UKPMMVzBmrEttm68qg",
  "key25": "5doTUjfzFGvMhFp3tBud6JsXMrKqjWxCx4opJ9RDzsj7xCjxLG8cpvZH6hgFBvDHtZ4PoTDLGHvFwN9e79r1AXKS",
  "key26": "4buDviieR4nuKWM1qZpqfApuc5PYDYRTXa7mHxT9PBd4epoFCeptpEpEmp9tghqicM9pcp2WrUCXRFeK52C6WXCx",
  "key27": "4AJH1dvJYXyCpqpqZZPBWjsjDejB5hwHLWDuGMrBdmmp9cW3LD6bQxDNojBgn7QNZcTWbDgYgr2u5ffwXr5jMHtH",
  "key28": "GEB9PHo6XwDDNcaSM1YxW2biSLtMtm8BF3EGoua5PJQEJfcpSWihcTfUs2qxSirpPpbiZLfuDjrZnnjMGHfg9CL",
  "key29": "48MSJvodsiHx1VZYuamHdfkfw22wieqajWSN9AwVP7gft9e173NgGb9EqQvmQYznHpfx2bD7kcCgdjM4xKv5qkEp",
  "key30": "2LYnuVw5PnH49s5FxgqQ16Bc6MqzD8rxzQgjGS4mBCLdxDNXKQiJsNMWef37NqWmg5cXwPkXwY39T34u9mKy8HWZ",
  "key31": "3mrCwcUUL4SiarTqHv2BX4tF9Lyys3cY6S8wHAWiqbXGbM1ViKMnZytNnyS2vGS2MC2LBvpeevAXi5CVRcw4SLMh",
  "key32": "4pXuadmGbJra6ADtaEQN5CWGuunY2TfUtQLeBJWArb6iuJG8RBgGLtFWnovUg7xM6vfJvmTiag3UmJBbP5B8b4wU",
  "key33": "5cCxTu6sMXThBdrrcLwvYaiE88rMdMDmoTwZcbiRxNba3qpDow1oVHwC12h6UtgfZZ7rCc9hjSgpq3PhSwezXYTp",
  "key34": "5G4NBtERvzwgMfDseUT1ahBtbX3Tu7YgzWYF3AC8pC66WaAAfPFYtbiBYmz2V8XLZXo4D6NSYYoS2v7T41xNYBo1"
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
