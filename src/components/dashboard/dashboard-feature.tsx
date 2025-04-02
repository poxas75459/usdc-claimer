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
    "43tWoTXsTX3Wn1n3zBR18m29DfXTLwXuhBxG8cnNHPCLEmmzu2EWwZ2oNDL1BZhrrDaMvbJo4DJ1vMqK5LkAk678"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jj1BMLJyqrMua72T1QKHGBjSTNKKZxb42fNPV88AEQLPKQLG69yoQHKNF9G5A1spJfDYfGjQYaNpFynumSRjgNi",
  "key1": "3kDeinvX5i85SxtDnM6Eq3AjpoY8SNjbhwp9tRjsYbN95SbojrqninfzRxBuYGqVGK61J5F3bHJb7UBF3rEh6VuZ",
  "key2": "2fJcGzrAKpYKEAYWzPzgS5b1TUgtdmjA4MpNyBAXascWRAwbguLcJfS1iK9CgrgYDPbykkdX4mZjPJ4sX6K33YDY",
  "key3": "599yCi1MDVBxajR51uZfEGqrvNAqnENRwAawXSqkwUNyEQ8mLUrA8311zBShGweiaZ9qz5HYPkjDfmnmGLC7Cwtg",
  "key4": "3wM4epLn1frN4mzKd2NkAPXAob7bnBt6HLk7uvsH6kgoCBL4uqtDZmwsTbK7op4UdnspEEU5b7GyauiboJ6U5KQ",
  "key5": "4RJm5gHnjE4nMbbfSBWyE78dM7VEHrLFx4wHV3NHz4orQQJYZCRraTAVkmS5uPnUHEBabF9mnrdPu23Mh9XncyGw",
  "key6": "4f1Gfvbt6GStcKctxtfZybQz7oXyExKVvyx71c8rhnwT6qVsDizsoUEqUM6gM6Y8JK1QVmxuRkWJgaY8QiEoVdcD",
  "key7": "9HQYwQWAcJs8vWNF2NS3c4AedsY4fXCzQ42hm3X4rce1rpApDW5tcHNzGMdjyQum6zCiCyRSNiUXZD8oVTTET4y",
  "key8": "5JG8dRjtkTZAUkwbVeVG6HUkUirv7i4eLFfPGdVNjTNTFKGm7vYyjs81qPBDY4aTJj5fUo6dkYivZ199XXsErsfk",
  "key9": "3QPBQZk8rXrLpwZxhsSSXsmCpvHJRjLwWZmW3KPeVgMLDbW8RhKpDWUCbiQwdQ9ikf9CjwGh7UAxZYyctAqACaAd",
  "key10": "35jhghmDEC9rhxygmh1nfhxim2JdBSA8RKP6BpVyJUmttQQ67o5MLgB6WfXa2GfcC6mxNyn8NLq83T6B65dXpS7U",
  "key11": "5bXADvSVaWEghXUPthdoHW34c8E6A2u6ZpPZqKdTSXp6oBT3EVpjuaR4BYnc7w37onRvw2fpfU2qcYF4pFVnXfLW",
  "key12": "5PqMg5JGCBrzedWQ4HDSi4h6vaoeAaU9E299gypiPz2pge9KSyKEkXMUhrMCcVQBykA7R8Cb4GtYwLVHh6RsB3pK",
  "key13": "64U5GBwyiR5yjmWYC6otypwD4QGzX2ot9Jmi8VSpZjDpUbJRUvYHGpMgjHJqTyzPheZDbiHexqFx99KWQSEtJkoR",
  "key14": "33p5MX2XgQeitn2obSTzieitPtG5nxraws2CgSRrVnX7jqNCPxxeK8kVjrixshTGsZeTrqE8N3QCiWGSo8tQSHWL",
  "key15": "2dBMnGmfiQqTAWxUk6yT4fXHoNiq9brMbWGLVYkREE8zsig8z8SfkDbbEZvAMujCQWq1Ev48cYsKTccaGocfnfoB",
  "key16": "FmgjKVXqrC5qZ9DtfLaLYCAViKzb9ierop37q713NCpJmQ21ooz2jM7vsAwpVzvSvv857mDk67YBx3mNS1mkxpM",
  "key17": "4GN53ZCmBVGzLPXoRPEk9fgxtTx5H6vX6wcoifxwDgxc8TtHpNhEiiSGh9Zz1R2BZph9yYXGb4jiB7c6wS8yu4XG",
  "key18": "qQ9yWLTrrkovNw2yE9LXFpQxtESM6qsbkvJmLnzy8GETY6FddgMY1aZdqao1mW53yUhVBGQdGLHzDrHbd98tN8L",
  "key19": "2qwtYEp61oGgXcVyiXbfeCCb6N87S9Yhxo62m2yo1WwWsHAtyuLeJBRot4QuztU9D2qJXotY57M8XFXjE9As1ZaB",
  "key20": "5JykuVNTDaRmjPi1Dp7BD5LX4K72unMCLqHJ4dMn2YBDNgfAG2zUH5BrJWkAAvoG5TjRGm9oZDc1r2UBsWZUQEQ5",
  "key21": "5RhPHg8wKu82a3wEYCeLWpiPZsHDatMNZAmqkXxLbZuD6nqS2s6rU3ceuWzT62YeRTuhpGC1zTVAwF5thF3wt9pU",
  "key22": "2VRzGa2PUNysAaeQRKkn3NSEaLJ4rhCsk96JChtNRnN7qDW8MPDB6TbCGap3EgoSyqtxDN6VARSHsY6rovLp2Lc9",
  "key23": "7E8tBvjQHPWnhzkZWGN3veYA94xkcNs4k63jUpgDHwL8wmuC2E5LinpumCUogRPABECjp2Nk8ypeDb2zWsyn34B",
  "key24": "4aWGuqmYtTcTcY7XsKUhCpz9JGeoEj7u7rgAxQa5DjHE9ki37FUrczN8RHfA9qVbVZjYtQ7KfBhpf62xnWx2V41a",
  "key25": "2B56hK8WktMcqb9EewEBZPv1KKxPcSBBAb4vU7BL6KmKrDknNA1SibrX3b2s6PWMjy3ddS7iZWWhnzFJP8vamWvx",
  "key26": "3L6cSAX25nHezn3Y3fFck9yTF6hgLwT7e5os1pvsx3MGZCHkkZqE3wzxGGxPzaw3jL24QMbXr5vzt34DNZkxpaJi",
  "key27": "2kuyFd2arF7ZwwTpHT6uFhgz7GX74ntgXUqJ8sNYamzYXGd8nmGnJCKa9NiFLqNi3LAhHFPVDZPK75wtRey1HQQC",
  "key28": "3RNhgj4rWe5nufSCv8c8xKxdDmgmcrZGLuvE6j8wnnxGCUQoUe14RF4P5Nvad93yNpJur54JnC18oSppmNrXh7jm",
  "key29": "2YLsiDJ6j9QNvLVkyKoC9tS258eCZu3g8YSoX1gamMTL7kFugB3U5RktZRvTsUPaK7JcwGzF4BscSHyx5uUSgzLE",
  "key30": "4ELAnJ3WW3TafoF8gZ98seyX7e4R68Jz8i816vRLMtnVmMpBcB74cSh9eKUQqvN6eDLcxSs2biv65V8ZDQjM8Kym",
  "key31": "4tHognJWiUiQkwiJZ5ntcJW3jBgarXwKYQcCmYdQCUH1Lo5KgrpsrSQHydUQFBFPBh8X7QKsa9NRRctcNGwSZFUR",
  "key32": "22Xj8zgbddedKgQmKrcBTQZUE5ZiFC5rmgYjVy8ygKqfL8ctTeiJvMjo6myBd6yZdEsDYFB5GDSXrT8Des6NZrpP",
  "key33": "5S2NXqv7PSBDdZM4qs374qXoG5Spr7MnzGwcutnCm3RAuQMiHc3exKoEVNyakSeDi319qRjrR3Akyo8qZDNj3NX7",
  "key34": "VXoXhUMbFPqoXvPzhUphnoFDc8ACnP3NE3ZoebDSC5FDtToA3QWCh22MkEaVP9CG2snD3ifhX6yPrJXMZoRxbut",
  "key35": "59bHdrJN4dnLkvF8opvpHGbApY3zrDwTgpuPpfYTQeXYymt36kxDHsAFTnx8kYcTESxrnBDRxrsjgtiSz9y4oGH3"
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
