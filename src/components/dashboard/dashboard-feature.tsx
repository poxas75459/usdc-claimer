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
    "4i859KDCpSm5GTGTvPmTQh5gX5xARrcwZkEXDjJJuT5EeC3uDSFHLdeLcr2H4sB25ifdv7Zmz1B7ih7BJXQ7bGDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vf9QL5M8P2GAkxsJgbvTToMhELyXNLSxXbqjXTKkg8QXYPE9QQjZR1NnYpvdmYMY2nEDrAoQpqBB7r7NsEc3yi",
  "key1": "2xR7WQzwe8kPxoR6Ek1kN3BBHbMFq4mDwyL7mn1K7NrVKQaCKCh384WD3rNLviq9uE846n2DB11Res74VLa1aBqr",
  "key2": "2AM84tixDXnT77ELiKHctdUszJFJ4sCmeXCJngyPPX4jWGEFMEJ9xaoEegRpQt2oo2eeCenCyZMWy69vLCrQJpmA",
  "key3": "5c4ygk68sSKoEVKbj7ucY8zSHzP6CuYwS8nJbBoPtmxzH3h6V4ekbHmnykwpFG5ZLWDHehK9rmbqLt5yPhowjpU",
  "key4": "4vERufxFymQdddvutdMPMg1N1RnujNcEbG7N1zagSt8yYez7cqkkrEqPcB1HjoET9CNNAqKSqYadmH7wRtwFxruu",
  "key5": "3aYttj5dt9UMfNqThqnxpSLpSy7mGaKnQ3pdAF4DfsC118vmaFNPyCeX46F71Sv8MtyusvFSuLbDuAjnzme7E8KT",
  "key6": "549C1KjQQUyxiYffSed33bDygNcQGz75tnjbLNfL3L642LydpfD9nneNmUjhh2kRAzxURNzYgT4XXkDF18xZaiX5",
  "key7": "2VjAn4H1n22GJdbvZfG6LRDx6UZtQYAaqD8i97bm9wdX8Zr244pFFRLpG3AiuntcQMMS74dxktSo9PKYv7zKbSza",
  "key8": "3xjcgDzHeDCeHPGQerkpV4tu4pqeGRcyBdTWMqFKsW4oMrsCpS6ndpUtTghpLsBeaPKmvyHk37gfzz86iEGWDCux",
  "key9": "4xPj1BuftjEMaWcgiesJaMZLL4rXCBhKNQtJJRoHtFdCMAFJfEZp7eY1mJskhpWTAdxAvFMF4iCBZbkR9AHhha9P",
  "key10": "62vC7GnuqiJNkakWPequsAnLHkq8P1pUwWRswc2Qy8ftRu1WDizfxms3WPGcT1RVT6T3punS7J7ZDem89LJ5aP4P",
  "key11": "25tbfo21VFv2JZ2ns5xnMQZWHuoP72Cr7YVzHRLkAbdvJbTCbH4B5cxazCjRD5WJnvjqy4cAT8vnrQESahDjmFa2",
  "key12": "2sVdAprarrM4WkPBV34PJFMSasY2iwurFdvj1qqkhAwfrzQf5a8cwwAotxoZhQ1otib86itbN7oYEAfPFMkFzsjP",
  "key13": "3upbr893xpvor5v8QPCmwyywskXZGjs2GFKP9zU81pnzDZ58RcoEuhjUMZ9xamCT39jeuCJQwUK2vCjnKiaVa4pd",
  "key14": "2ZkB1dmv1LmUF67nm6CrELNSxCJb4yb76B1eHZnDvv4eay5MscHDbG3jQ698dZHFSCZNdJKttmwzTJnMDF24nBgN",
  "key15": "4nHpRb3pn5sPBZ1Y4fTmVZiFL1GMUruTDvJng25c39eUTpNpEi4mFk11Ekjxeyhc3ifGkGWVkwRq8XasykjoByRy",
  "key16": "RyTv2BGkqFPAEJ1n7pZMzZdVy5YNQ9Pu6dWTAPq4pQ1cEdPLjVPS7fc5uxS4JzyZaVMn2CPEPvVqrSD53hYeTq1",
  "key17": "CEU4RdxbEXtG6TELUjp4aVXYAhuHAkUDfvBw4cCnPaNpUgt3arzEpWLhjScGNR7B6NfF6SrgCLE6hLx1sTEZYTp",
  "key18": "21NUs4xDSj8yvem88Pqw7BGstgYUpG9C8QMrshRzXRtVZUnGEDpVKZffCMqM63i26ejjr5kLcoN9PGhvqhqndWj5",
  "key19": "3e7qoZoYZMxKmtymJzqbje1CtA3AYETMs6HdEfRuPjUEksMitxnDsZZMjHrFe7pfGdfqK4sYXEkoHdb5cmxNTSpf",
  "key20": "43sPTzAbxqtDQAqcb6ThY2gKnEjcCKRYhQ9qFbgEWJGdQGpjvZJc4pxHT58YWrsUBA51taHwWgyrwfzf4gYMVtUw",
  "key21": "62o4BrygBEDmmPb2HAijbb7PXXExTGVAcMeuohUyRnkjSWKLLdkKL6zceeiSd3fnFf95JUie5p1DawMve8Bv9k7h",
  "key22": "61im2CR9FG36EYwkXnG3sofiQjewJgx8oqsHufPH5uSjejje5r3vyZ9rnJohqCsbc6YZ53HSDJHChu4he4vZxTtp",
  "key23": "5Mxg3sHEY9Vex3UKRv869gu16jgrvwrrArjUdScvx7buYuWZBxUgZvVpLKs7vGYvecDPKHUgGM99awPsG11arswo",
  "key24": "4Z8cEtR29JSoaGFffsKaaL5DdBzXrXWJRsuGkkEmmpFEQKe7eVhjVBdBvAXUPpz5FJ3865Ln2p74nKkF9yhvSihE",
  "key25": "5Knd7fjTUp6CnNp64AcXXU9xeK8rPsbDkfbC5UCKSPvMi75TWAArwgBa4YELADZ3nVhK8kQSesg1qdUKsGTPS9U",
  "key26": "5EFBPADoHAHMnKtf1TC76RNscxbeHWA3sxoKTtgTVFaKtk3cYKkcfjtSvzbxdegQeV1Q8bxYeAXVuiS37cKdyAvT",
  "key27": "4Z33KYh3voSugEqRZEg4SF9aXRwCbPPi1pLrfepwktCm6nuoEvPrmWDhkqTGwjvv4CKSPBuuiNAHxc7YyyRvYzTB",
  "key28": "yQJvsWc2hmD5nPLjTgUeYWYYtGv1X7i8iMzxpQWBiLmXa9p56LvK31aztbuHyDEG2fq5TQMeHirnBPNdHziqHdD",
  "key29": "2GPWMkdX3rKEBZJxeV3U9PVMrAT1pdbwf4PPgJ5tDK6AiNTvkptCi813MURzno26M3MK8R1LvetABh7SWEVT3tEi",
  "key30": "4UaW9BRQtxbBMKjoNpouQdVTmqGmo7B5QPGAmhskiM5Z4qsPq8gRTeDrU1uZ9rXQ5xxsL4D7s6uBBHgqE361qhhM",
  "key31": "4yNjoHgJdtExYJAwdHU21rzbn2qsjWQ2JCtvfMXeHED7NhmokpGmXUr4SQLDDrAjJFvapeVseR8taWnR9mFazSKf",
  "key32": "22cWtBFHnhRHFpx1s6PpYE21KdgxKDkK2prJpnD1FWf82363DWgmDb79836TqiiAeEktzBYv6oReuTo8MriYYLTZ",
  "key33": "2DzbdMCDAfQbjd72dShE5MCpxChm9uj3MYbf3UYdUvjq2W1Q4e8yLrH3t4tAqDAztix93sH9BoT1Xdhvaw6z98pu",
  "key34": "qMEWQLj9h8GFGfbhub75q9MiCX5PVdwT6oW5WgmfR3bSBAUDARZeYQq2f4sHqYqog76uSexBgLcmMrVaZSTC54D",
  "key35": "3sthdrwJMEogDcvR3BAdh4uEX5thAVyJHvxE2kkaZdyuPwvgBgPcuPGyiLHYDQfNJkBXKieFXi8WW8tF6KLt1duF",
  "key36": "2NKQipyeNHSSyW4RzAytvx2cAy9jjqz8CkkvaWswFoUTstW7qAhP3MAhpnkvJuHmYoBK7tBR2mqnzc5YVpuy2Fa8",
  "key37": "4Btd25o9vNA2TWmrDEgUcdynwPJ5BwygBRjrojgENJCe6AAFMhd8819yzWUgj8NoEBZV9EVcPgUvxxYvFS4KXWkv",
  "key38": "5WukNL3LHmSwGer3qgkUTjY4aHNcTQVeSgLmfv1WtguPBPmH53w9NvZ63vBb1uc5fGNHayUuGXcD8hzJUq1bPpaY",
  "key39": "4PMhGciTfCY3V2BqyS9ZcBRHmC4vBYShXEPeiKNScvwVZEfBaAydNzhiaeGMPNyiJiQq2kWtW3mfQ6tDASNJKmfG",
  "key40": "4zQCzzKvjJHZYUnY7kumKGQRNqE5hEjy2f76TFxUrmqzzpi2PCXqKXoBzGDXAXmw6jADayU8ZaobXvnzGLJWbJcw"
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
