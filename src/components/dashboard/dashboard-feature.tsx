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
    "5J1VC6QtwQUPZgjZHdTQbhSUuc7LXB2EaC9nPPPLZU9BXVkD3q4czgE91B9CQUd92Uy6ZdhTXJi1rSHtUBbR5b65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtGQcHaNsLh91yCZQTW9P5kkdKZq13EVS5r8i4mzEtj1F2hkb8DAp8eeiQMfcYx1bLYKR6tMLHzrXtY46KosY7e",
  "key1": "2PmNpLXL4BN4QyXegTUULwhGukRnFoFbu7FxKoZbJ6ouDoFynaTzdgDEAdSdQ7ukwFKnZo98VFGF2PGFCHU2tZaU",
  "key2": "3p2iNUEQaKteuQNZy79REETyQxqA1T5dCXmSMEufP5WJtTxxS7BcK3T5Ww4CB4dLcxc3fmu5Lp3icxuHLsavrcpb",
  "key3": "5KKaC98BMtBKofyy3Aduf9x4B6FjMZeHQrSGwDBMVfgvpfsa2h5Y8HBpEPmAH9Mus9mzeZMK8zj2epMbUqewXsLg",
  "key4": "3s5zRUP9WHELi5RLdcoMN7S3qpn8hFVohj7zVDWPNxrjfEmNkhDqfY9GwGu5iAvG9pzrm3Mpesz9QTrUXa3MJ2dm",
  "key5": "5kyF4gxD845gh7pgJtKnY8Gvco5g6sGDgF3d1dP4e5CP1u4dZ4NyhZd2xH4UW5LeppNoHcjmCe8qScPPV4Jpw9cL",
  "key6": "5euNwVi2pugpB2bzgEmzm4En8rroncZw9g5ZYzw5HNmNd5adpsw4JK7VzrNt7yxEha4fXKyLPrsfisfMFHnbt82B",
  "key7": "2UkEAgZjUKwzqUJsihu7LXc3nn83pYtJeoDmRZsoHd48Jn7iK3RCjBy46mJchrafSWKRUALEb1oj1o6nGEEhfm6N",
  "key8": "4bT859A1YnVQxfr9TdaqA92f1uAmLmAxn4RDqCjYUhyu7n44DTB1d7KuRbj3NX2BycML935nkN61uETnD4PR32Gt",
  "key9": "4gHrXDo57zSPcGwmno891BgM8ho5BTuLjHEdTRNam29UbfobEphZgWY73VFE6SfPZva3twzqpukYkXzzkRTCbMCG",
  "key10": "483SrCEVUcDvzVo9AG3tLLngCVsrFWvtTkKVe2GhU8iAKi6wf8pNpbU2dJmH7Lz4SYeS397gGoTPafosTQKfX8ux",
  "key11": "31JbZqaXcMYBmaGDQ6Vd1c6qwQ9kHexrnApud5dzoJKQn4VRdSaXDXH1Uo2nV2XUShX4LnMSbLDTjVbpmRuTr2iq",
  "key12": "4Et4dqFStiWWJ85cF7p4j5FKwJ2ZgZ3SVVWhZyH1mcJyNDjEw4oL3N2NgKK8BCDxrBqCSHCjJHYKwUgSR8jRTQZv",
  "key13": "2jLJou4wgZJWqX7tWFzUgjN5Yj7f4rL7DQSnh3PvLYx2wEkk4PGPhhoKzZq4bxHkeJArkrzGoh2LGGrTZ75vSTgp",
  "key14": "27KXixe2yrzpxFPnfJFqcXzpw1zPDZYN4GiebaEz6gGCciuCZpXqYpcAXi1b5WKqRmLes5J3Y4XTm88C5dh5CtHZ",
  "key15": "2qKhjhvKRqbDKeZFAfz24DrqCce45ABLVnB9YsFpRKucd673S1ZDPqJ7YkSQKqQmkeEZjBb66hJ2oN9Sh2BKSUZy",
  "key16": "339yRDKhkvkV6coZJzhncH7JCk9PZt2X45wrhgV3eTDsQyr5v6LKU2JSfjSjpSnJwJ9Ti1wt3k93pwrfgiTrTayG",
  "key17": "5XcVkgVvC3DKKWjhuvJs9Hn4iXRQGBReVb6JABoY6UyjYvnzb91c8fUgRomgSXi2d2iEoZH7m49mpN21vSc56gsN",
  "key18": "2VJz1GU3yupD3DzGe3VKund22KTuPnDpW7qqmHenp3F8oV1GMLNqL168BkiNQAwn6qiAVpwyweE2mSLGWucDViuE",
  "key19": "58p2kCkbTJ3fiBdgucTVZtfGCV2YxQZoysX1XFzTxzWZ6NxFY62Tu1FFJQ441yyyJUMLoq75A9MhHdBX71sdjGsE",
  "key20": "3kyBpfW59qv8WkF4zJ6Err4ch6QSo5ecZgJVx4tySePPQVHGV5Hr2AWxpAsSm58NJWkZKs4ou8nXUtdTSsetRNMA",
  "key21": "2c61AEFkXN2vBmbZw9hkYRfYVhD43byUFb1kM9AmzLNr5gvb1YesjA64HAkSHMs4jnQPLMPdQuiijpAxcdEDRipq",
  "key22": "3adzEyBqGCY1wBjBJvgtXDKKQW2vajDyZYXgGDttTd4zqU5565jMXHSUVhvSEnqbB5MBUdtbo2eTxVkiTb7mtHN6",
  "key23": "5gfK9mBBW9uqUPU6Z3U2EtHDqhAk31eQoQ9LsyK4U9kggsE8obV3F5r2t4ipHZb6212ZDFyKKJN1bBnUE3zbQPxu",
  "key24": "FedfPcskt3WzV9EwrhqnyA4zdWoc7PfmkQ34x98E21A2vQMizT7PNV4TUtRCLN17Eqk73nyRM571xFjgEDzBuHj",
  "key25": "2M6nrZe4GqiTYjmtpApEtw8gQT4nsuQQegNpGCkZVW33Dgik4QWz5ZzDwZRZJFiVzpjA1wXQN9VGFDcFKVMSU9YD",
  "key26": "5EB86As7vzZW6SrouVF1Rjk4FjcAs4myMTx5cp6a1RSppceZirbVAJ1sY8FQtKR3dFQUPsUqXikoPHsj4En6KvmW",
  "key27": "3AneSBfeWxbaxLAEEzRg5Zv7Cp8h2Wnie65zTyQuE6YtMCqx1VsKPDDfqjcheyywsvu7Bf9ihSoU9dfKE5qxbx3b",
  "key28": "3sawmuUwGKjLPQoFCUafCithg7i9jk9ynSTkUSxpEBPnqLqRB8XRDVVFci4XH47n8z8ss9npJUtazp7B2L3AThvM",
  "key29": "2tzYyiFENBYBGHkPNcpkTs934wLw2mkFAL1va1NgLF2zBy5UP8KsqeYjVvqGi6CbEbuVhC6qJjtuPDc8LPuYmcD5",
  "key30": "67dgkBQ6nz8wmnZjd7H3ACukfRpYkpRtz2eSTgM7tvPfif6uEZKszJLQjTFEjFxzRu2zDPPxKaZgarW3CXqJXNPr",
  "key31": "vyNfDJ14j2kojzuTXQHn91ZvZMgHUYGG4Razhk9y1jb5nvM8RKT2DXxMFPrrpx7LJbftK8RuBzLP8ymj9SzVoBg",
  "key32": "2CgPDgM51zDQ7Afd4wrHGynVg3sKXm4atQCSVNq3pF4176o3PUmacpaBqaAECzfEr9AwCy4vZ9v3Eg8cYyLsE3FJ",
  "key33": "4n2ypPj8du2aefE154gaVjfG27PhTbHgfBJGnaZrnUqS1mBRo6SN5F1bfRMykTDfssEH1QKKKuNQmHVxmkpSs9BN",
  "key34": "27fNxk3KLxN6xAkwRtVYs7fyrqi9WxxJnMZXUNvxCzSnSusXYiox1BWfqrnbfRNUUNA5GDaAt4armtmzq3BCF6Zq",
  "key35": "2dZBHV2AYNzWsdmnvYpaBGr1j5QugPTKa7aGYqfyAMqYUtBusWZb8iLv7KF1DAGSw4xtM5XDkZJsayFz2sfZgucX",
  "key36": "35NkEZBM9mhR7ax16ST1QronNKYYGZ635chDxzGyQt6z9ESFfADZh5en2C3WGb8JYhXNzseDfrcpJSojMNkQqisN",
  "key37": "4fPSyTwJywm6Pf5dvxCKzwwi9BAUCsfjBZR3gQQkkgF6GREuxG5zN6e7UbthegqBh1EcUjCBH7Dtd6stSWgCkipJ",
  "key38": "3omVWo18gjjEmwXg7T8P8bvY8pR3b4mY5Efd7AVtH3jLJoYm73uoSe7NiAyJ5X4oDhhHRvDPfcsm46b6Z4fVgrqF",
  "key39": "5tYeWXvne2KzkhDf46VzVaB6gj2VgioohAqes8GMWpYR77F2WRoP25iexwvv8HHfp9kLWjpd2nav1vVqTKukwLLB",
  "key40": "3TDFW8WLwfERNiEAbb64PmTUMNHrk7ScKWWQWooJY7BkU2GC9pM7eQGtM1DiNkGoLJaTYizBwjNseoByaTVi1Xb3"
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
