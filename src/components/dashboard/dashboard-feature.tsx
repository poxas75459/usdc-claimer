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
    "5LBvvf6gVnKqCiVhjBx8mW6EgaGzAJr8XqA5wpPLtNYkdzKxpp1LXuK42HmkhEmk9rXkQMPty7WKkzRMAoZfZsxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRkEzdBvzxpwpLoeBcVHqqa491NjCr6RmDttk6GpTuujVGz8qfcWeXqYaXYbLzoUh67C8RiwyhoqmHnHNgGrSf6",
  "key1": "3VVdqov6FqLF2pAbZZXUkj5WbJZV7mnogq1qWeyQyTwJL2q83iRMv5TdeTmBuSEcLvX2M2VM5uxshRbeKBqk66D7",
  "key2": "2nJJbutYtm7vexEKdBeEkHZqKyUKVQUXiZoiHYCPdBMZ4dWqCdCxNj7F79HunK47Gj1axvQXNRdfgbYpN6Bh2rzG",
  "key3": "4W5ERcSEE5kPij4BcH3dMXjU5ABJWERqWo84hn419b55BifoAdNDM7FihVZ4da8h1SW8aSygnSoxb18rLJMq2uDD",
  "key4": "Uif6E1amFwroMbTDBu8WJETv9j9jsY32UmP1VkzUieSDcSw6AczWWYY7kaDLZJwy2eExnmq5wsqA6C4B2NTaVCu",
  "key5": "2ZyBws9HeEX425po9fP9BTnnqEGh7K3V8SyNWu8UQSYqcBpiq3UPHZZP7S4Zr6xsmTByKGMeC6x6XSa8R8hDopmt",
  "key6": "3Eb4HZTh65QbdibqpBfWUvMZkuvrnCLHpVxF9encqtEmfk6RNtDAvERNsn8Xf5cNcH965Q8rmg6UQR6sciBBPKBo",
  "key7": "nb16Sq64M41SX4zHu3scJQoULfiezvh62qnY9xDqx824fEh4LCLvTrvvEVP4Q7smHPW9Hg2RaXkuCPqWPsE8q4J",
  "key8": "tjw7tqW377j9gPp8NiVZi2rAQ24RDLXcK42PooBXdKiVvwwCXfT5BaYJ6w3AZGXycAABkU56jfTPGUANNTvmSEA",
  "key9": "25W2HP9Gk95JPQJkkkRDCJ1wiMqrjwKgLNT5n6r5dcGDgmQQZ6q8TN2B3foGZuR2ouCznm3hwVLztWdr8NKBhEfV",
  "key10": "4nyf2byPME4VyuL8mv2Kc6rxeiudz723rsK4S5kVe7LVCUsJn6oHXMmadhBkrpPdPwBr4KAxv4bzuJWwand6ZfRx",
  "key11": "59nYWqoVmTNE8ubnFY3Uo3WGPc1DC4qfmgy8aHp7wKcWEuRTvNgLFS3LL2FpZ61ZtkBZRtobUubmfPiyte855j7T",
  "key12": "23xYisbNocCRvGfgjsBDUbKcmsekSeovJsfVhQXcnpaWTE9E1dRrvnHRr9z2eoPZbzqS4XpcZNpyqZTcRYN9hVoh",
  "key13": "23BDTjHh8xheQzNN22sdZRmTumzaz33zRhizfXgsgyJJHjLpFTUPrUGjyz5UGorhuPbjpQTmCeu87zoFgWS3T5Pm",
  "key14": "5MWtyKZeG2vbYmfQmy3RPHgXN1wpsFvw6wpYQfeLz69isPLQRdDVdfZNQJPwnKGSMeVLJsvPWLn89NamLxaicT82",
  "key15": "5fAWLD4iGxLYFSKrdjkE8XyB3qB9xpNuQg9oMXNQR45D8bobWTusFEbUtVJEXpyFKNK1U51ZXyeKgjtP4y4LbiPT",
  "key16": "rUWkDSzdLUYvfx2bqyv42XK5STPTq87YqZvB5kEUZNa3uGZYfkqrLZagCpqtVQ4jp2bc6nRu9Cakk89ptGvRznt",
  "key17": "2q6H5DiBRtwC2Bo7eqN8SqHtYzpq5EzSHoja2eAKB8QJK9kThvBxfyU11RbCYVkciVrebkEr7TWRV2pCXrXivm2z",
  "key18": "JpLR9DAWBmaFv33LTvpGYNRn49b3cBG2SGZtRUHcrp5P48Y4YsVSbe4K7vGbxNs7MC8bs29W9fukq2CxHaybUb7",
  "key19": "uJLvst6Mki124jrgWD8epgrEpzkw8dhx89uizwwLcPokNmWgNhKhkapYVfKk6t68j7KXFsMFqGtDpkp9T6TV7oR",
  "key20": "e5Ksz5wA2qHscwGcrpGFKBgmkxGpucYnZux8xReX2Grsmpv1UYRtJSuG9P43RsfUw7G8zNRrAbWR4brhJ7YD7pa",
  "key21": "298iydobpP8WtaGfT7PaAHuSgLiwdrk6spFMb1Xjoj8SWdcvsBL6N7tQ3TPDTMLWg9VwSQsJJ9PwAQf4wxgZhcwY",
  "key22": "72esRYn2Tp34bmNBech4zkVyEHbPy3rr3RR2u4UzTHakn29LHv9a3EWVw29wgjzThn9AucChRL5Y7B5Kp4rNqAf",
  "key23": "5MkbDyCfA8Ri78o91dzbircaH95v1f5TnfKVtSuxznos3J4hxNyzrELVCWQ5oRddEqexkhnjZx2NJV4suw4UjETQ",
  "key24": "5sqimuhsr39RzPwqHS2KdXGNw9FxpWxFYNnVsLceZnuyDEmq8AVAHCfX1KpRVywcCeNhe9Z2SHTsM4KNmX9DM67C",
  "key25": "3hdEtKPmUzcTee8jSJ6T4VZ2GMpW1UAQpXSc9o9kWFjCmgVbzzKYFwzGkbzBvd5257WPcowCrdqXhfBoaxLE1QkU",
  "key26": "4DTW91Frh9PUApKDjG9vyiv7omnXqNJax56yLF89LxMriJp43bnxByU627Ff8nrqg6UTtSUSP5xhA3mGzXCqLHnG",
  "key27": "665iVFFipn3xatkm15i68Uu2jpjVy74bmbrXhJUZ13t2sasxVuB6MDYH2b17DdbigDShytkfHdyPrvFXxGWpugeo",
  "key28": "3EcWD1vfGyjcR5c3q3SRmoWaUKNLxSiCGwzC9PT35yE1mSCgEDYiMAzgdCHVZ3rgVDad2sM6Sj4Xcp1wqqMo9bNo",
  "key29": "51dugRRYPYtmyy15woX2i3UhB9MorYffzHToHWEjmVaf2JtSWrCHNHum8yN6ZjwW6AXNJ1wsRBSHBinxHgFVHi4A",
  "key30": "38PBLMEs6cmFJxwFKryv3zym22E8NKBasxwJ9JSbWjSjasadBFJwL2qRAynmRsajigB7cELYjPXssF8Ewqb69Gpa",
  "key31": "4DHL2MJPJhVstECqcg899FaCRQRcNKPQ6ys442y48fzcqVep42E7vzkB5Mxcz1WkWfHtwmwmvdbjvyBr9kxF5vt8",
  "key32": "5PFAKqaUysjFhRq4WPAkjZwUDptK9QKFDva9WYdeq8cWVVHbyP2j8FxLnpP7Zz6ytSn2sLd3acBVJ4SHH195tSk4",
  "key33": "2pKMChTNUVEkorsQc9wzCPzRhySQRD8wVUhguweQS6YbidVfGiEaDssqa4eZxMrYZKUsTQYFeHkWKMJTiZhsg3mT",
  "key34": "5ydH35T2qeZC7TGkZqRt89uosVpy4NhfAcebipynKfUTeK2wda6afCLqHsYY5J6FJgH5sxfeY5tgQtUaEy2EhW79",
  "key35": "XTVjkcPWwYtTBYUiWEZFivQs3BTie6EsgV9JJkU8UQd6NBtvUj8FxRQRgbsm15BA1bi2aj4fuQjjndTd6EpwwMv",
  "key36": "59XCQTkjXibMxs2b7Q8ZeBEBoqbgNZN4dLwb2FsAynYw5ujBNVjD8tT73PeiXKLeXmJVdbfUeEkQ5Mod72fEdjC",
  "key37": "3NEQ8yG6cbLSKGUsjAB82a8ueUk6jJtpPvkUsaRD7SpFSMT6DqevkjNkU3DzAZTB4EKsNCWoz24jCWVPej1AT2n3",
  "key38": "4rmXTMpf2xUPaKdC5zQbQPyaNSAqubkfK9NDoXCDW7MHGEdUesKUYKehj2a3jAYRmaG7haDUfNxkf1CY2wFxhoHU",
  "key39": "2qS85VUmadb6dFPreSQdVu4NoJTuH6sjxESFo3bwjtnJefjKbSJ6j6gEqcHjWKuiP4pQdQyDXJf1nrCVKSK6BbgS",
  "key40": "5MqXk4P4v7QkWfMSFBwyJszBKaGt49QrkS7NvNiPH9GDvkchpdMN1B6VRkzqUjow256Arh38BP3Kdyfpo7uk75sC",
  "key41": "2QeGgoi91m76a6NStVPsMS8wNpZ6wst9xonjwwCGEBWkmjpNXRNHNxjMtCNWzFgKnpuTJcd8huNLXa1Km1pF6q9y",
  "key42": "3NxoUGDHZ4RZ5ENPPDSKTEDWnda5PghM6Tio5JYn7eUN9MbCjwro8jfmiyX5Ec6hJTVVAENsZqd6ZfQavk47eX9W",
  "key43": "2K27ePELB7UjxTUmay3hLb2dmoeU63ohk492jmb8bB6xFi4H55MtU9LycQaxMsKk2gHvf4b58dm7rzd1VPPpjR9X",
  "key44": "3JSZgs5fT7SSgXE35R1e1t55Xg9GZddQAD5hHYfGEFoPr4CKoA3B1SWxpGtUnRe4r1bE2Lf54NBCnQJJHBp2dnTF"
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
