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
    "vRqfHa2FhTptSussRAuNJDJK5YRHfhPr7FktbVeDHWog1vQvDEZ51hTDwfNs4inknD7QurbKFLvBmCRA8pYPP7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBV1nivRfZrmREDYzi34nMrRXPoGwdLYX2hMFGeT7mN9Jvr3xMTGqWhPv9YyTyCe49L9jDfb6DXMBNpAx7KSNfK",
  "key1": "5D6xbQE5keXQb9EyHU72YaLaqb4xwqmrdDmtnUkqjZboAg4VqroUnLincYLwuoNs4bdSKTKAK2AdEXofp5ginG39",
  "key2": "4zCrww1xAuZAT1e321kwhhh32bDrs1AufzRNtBmo8WQKq91eaMSHKacMBWTQ867wauQQXW7f5HysMx63z85QzvaY",
  "key3": "2EeV55g3pV4tL9uBCqmiE74WvSpk24ND6Bgj1iu3yp3q3z5Dz3yaVrfvh7YEDr9mhEHdChXUrjbYXY66ebaUJRpX",
  "key4": "3AnJNwPZ97d4ggPfFVVJHAcJwyQ1F7FzVyAw57hh6TDM6v9Me13sehUqjTjJz6sm8oPme2py4GVbysboR9jDHzVt",
  "key5": "4k5eGEi98nFQJXvKqcztipSXUREkcMY5nCka54CC8P9cK9gF5sBcr3nMPg4ECD8HvfKix4vuJ5PDuDj1G4LHSCui",
  "key6": "22m19iForpwHrh4Ry9q8oxzCyxv65asNf1vrkpQVVK53bA411f4AmtSzZGT1yJDM6z2jCfAn1KCRkb8ZVjctPory",
  "key7": "4YJUSnnKQZDQyiuXtwbejxDXQHHoPLbkVNSg6DnFXW6P8bUn8v7CSg78KqPhV6HRXhPgHwDY1NWiEv2JUj6EUg8W",
  "key8": "rUY8WC36h3nqoqmetPzWnrh3VbNwDYnSFBbcGCbrqpghqdWyfGCz5SDxtNqquXCR4Gmwja4Qyh4sbCGk7XnijAU",
  "key9": "44LZuPwZifB4iUqpVYmpyMeTSuQtiQjv17Cvb8rr4kKe87giwjqmcCJuvtvjJmVXsUb4tZ1D7QmYxiTPGFAHoSUU",
  "key10": "49tWxdwdg5xgdcotMEL9hU3xNJnBBYw1F5tgTsS2iAUZ6Wm3cTvkLQhyfFjSPZRaj4hgwHkLFstyD7U5CfBDfSva",
  "key11": "2yApDKuez3Skys8ShATaCihw5onjX7iATg8iRfJfMeZhhFtwc9FhLLT8k1X7FriUD1N1bQ4Euf9Lw9dHbTnk5yWK",
  "key12": "3RBGCDXLdTpJb2br5KCpnZJNx4Kyud2acvt2jMnfK6gUiKRj2Akx241TmNgKB2Uq8X3oszwZemqfRE4mAMD4C21y",
  "key13": "4hpHUT7JybtJFe4fcfYqf6ZcNzu4pZhcCCeL765kcfW9RvYA9bMA4sRrCwryd8T733kEtWVJFKQ4rGfX42ZnqZ8k",
  "key14": "2VhgKMZgKbXLQNcCpTCQ5ZhPbCaNsc6LzTTse6MrYppwiKDG87irwbHZDkqd9fy1mktdtqLpC6tbQSSm2BVjXpqD",
  "key15": "3xv4FU1FTvysVKPjK8hyjrFebkQAzkJGvLPmNsRL1R4qeq2WjNz26AbjLa4qNXYDZWwkaEVWmV3A3dBNSZQqs5oK",
  "key16": "3bnPwjQHsa743o3GQJUpaCn8Sks3hZ8wptcDsretphwvs7jyTzuFiCh9eqboGeyLtzfeTbMEMAfoxc4SPD5eQqws",
  "key17": "e6gwkY3p5zV3wZhV8dSUpVhzWH6JaDXS7N6uPuFtrpsszo13U2BC2ULbS93kYdiHVyWyhDPbY4osUBW7Y4F7Dt2",
  "key18": "2RUWwr1pfEVPHqCVot2BjvGy2mEjro4hVq3SmMpm2NJgRCrrRntTr4taQ3HckFTbWHKpUHxTQjN82hUYCGdjmP4f",
  "key19": "2wHr4HrC5LQ3JxnD2KYjUJaQjQ5SWNL8PjNPbn792rPoBBWz3zA7U7WWwUpULeJ1RiZ3aYvViDdBhyKUdc9Lgy2t",
  "key20": "5NXzKC2eADaRyF851XXirZiaKGS4HpvMDLeY33kKHrW6cNsqH4uQbDEoyV4zfVLM5tgmtsdkPKtvPab1kkN6uLap",
  "key21": "2qeVtTsRubmdPBMbun6iztGzt6EWfGUuUye5i9TJSeC8AdpZLkbhY3cKT9xqKnP4PcjcBq9b5eeTCjfXPBXisnHZ",
  "key22": "GntpdAmrRwDo18HAdZ3QZfXapvD27q24F9JyG2oW5LJqtBHdhfPmyGPXChWg7mxtmkmdZNsDo4Xyx8ijScwwkG7",
  "key23": "5z6P2mGKnRKz6LtS6xjWej8BJu6h9Q2fiu3jX2dbHW32YqLwHgYdxkjMXYwLWRveF6BJpdULmTsn3ATLw51kFVpn",
  "key24": "47A891k8aJDMyRPiucq8SsKwqvh1sMxVRfXCwFvDzcbmcDK7CsyWG2bARWvgpS7FGkqHT1z1s4SZXuMVkdHbGnpc",
  "key25": "42bcSpBz1fdUKpnwqJZ66HzpemQE4Ydy9gJrsGVZTHttyZw5TpHmNe3PuVF3ipBaGhtZ9hSPiTmcRiMsGKAL4gr6",
  "key26": "5VhzZB3WvtvkAUucDyFsQuZUQ9ug3GqaVFqpGxuZnmWDFjj1uLySU1K44tUWMjUaDhqw8qKW9wMaG3oPMB8jNJZz",
  "key27": "2kjXzDhCSahnP7geAPjtC8ywXJw34bVhP5xoLyzpt5mJMzYmxBorZqrq79k2Q8f7MiP2RUuc1ieBrfcSZmmyYRJh",
  "key28": "4kFqPfYn15NfqJhHgK7jyUDmGVknhKqvGyDpArtaezSjTa5AbnZKcvwyjv552DyijLgYPTmqJ8y5iKk3UTA8XjGc",
  "key29": "nmKu9vZovNne3qh5vRqFyc5HeXe6MkQuFXfp3j5MGyR15AhQ19jW93RBaYaF1JwCSQgag4oirpT7hQuJCyRBhpo",
  "key30": "4FPBUyP7DMQustzoPBojmLJrEngVX4NLMWSW8LeFPEXdB4s3BAkg1MuRyGqvNzCnU66FyBYWRzbe1SpUR9ayPhTz",
  "key31": "4dVYcJmVfSY1hSHnFnQ9d26czR2LwsAdUqFwJ5pChADWnFhJ7Uexmyrd7inXioFECsdXZPdXvwcdagEAmEhYTqgC",
  "key32": "2mQWmEztxVVxZeDSmGXeL4DX84cibnjewqqgDzfP5YuUcnshnot3PzjyWK8JU9Teopkk57Q4FeB3TKEYHY4SVzrn",
  "key33": "5x3qqGUxWUiykeiPCugDbidcEAPCHMckqJdeAgLHJpc6DqLXxpDQbFUtfCHLUmZMjZsvcdaNw2zHkBbyDq3aCahp",
  "key34": "2f4RC3z9FFZbSh2VpL3bHfQjTKrawut8Vd3Lrg9yxkQ59jExtGcgwFyMeQxxpSnnmNNUBpeugxvm95EV4L1RYdDi",
  "key35": "7Xi6H3Tf9tNS44jZdM2uyfD8JByPb39dxyQfXreTAz6XtL8Cgj39weSnKjLg2L91rtj6FFWm4tmYyF7P5xpvtyv"
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
