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
    "5eHhqMKwZic8cGobfQcSSxnWwJpgDxNyCib1sqZ13DbfSwZB15FrdGsSsWPxUjzDYg1Zzn8hRXE9AfNodavxPGcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHYKP4M2Vp5dAxZeK5EeCtPtq7K5yyoPgNyp9wm9hCt5wLfh3PD8RBQs41YTc4qAefRqiCrKHapWoUU19npeFkV",
  "key1": "2TK833qrinVv8zhUcDZnCC56zKHJim4KbYtHrskuCfhSeXsBksNBFQN43s7a6KAidtbSgnzxNRLhbVLntoUDR7dJ",
  "key2": "5eSmfDTnUUkXbdPGxEhDoyPrXTWUTHy12AtduNvtmViPdM66ryjbZFwjwzUWLoXKizPGhMov2PzyrXErovveWJws",
  "key3": "XUdu4gwchHvhsKEqoGYaBjDNxgw759fsJbA3AwUoyVf4fKzhqhnZN17KSX7LYrTNC1kyfNCPQydUu2Deu2ECzdB",
  "key4": "4kx1nR7WAFutamnDiboeK46XEkCcBs8RGFxUnDeKzVjPHwu52cNhJfMFYPtQWFKw5faduvHuGac9JyjJFkBa5rMo",
  "key5": "2G3DbcRSh7sbM4nsKmN83fMeAcGH1LNpbprvzLcbEMiSkrZqrqLX9TEzV7dvF5DemwXyvVCF4Cv7UBmdfpYtdKXw",
  "key6": "Yz1Y2XqXwyDoEWazT4p5osWFzvZw2xbWA8dvMQmkWH28aN6BABBK6HwAvE6ygBkDR9EaGEuKwvynoD2oBP4bkV4",
  "key7": "5RpY8uJspfbRkrFCq8VFWAkqzzjCTBULYVRBe4ZwMLD7LaUU3V2GvzMaktHpVZjKv8ud6vL9FATdpNNcjDz2r4v8",
  "key8": "2E3L2pA7suFAyREagNNRjLw8fyrRrRiSrNnAuW5Ubd6tc2XM7Foozwt3TbEP5k98CUUBJyunLwrwtA25oQ1qF8nm",
  "key9": "28KUS3wzwHbAmN6FTAQVk6wkJuigc3cKmJh6jq71uiPpu3A3wUwe11cQRXsxgRu24aYSMA4uT1KUFWURU8ep45bH",
  "key10": "2aVxGGSuqxR76iEe4eRcHyGrHi6KMxgXXnJjvcBMSeRqx1AbFffULBr3rUd17kJ7yJHoHDrQoL4DfuUmgkmDfpSc",
  "key11": "xKZ35ZY6QWcJV9ozpNNtCsiLK8x5kP9X9Q2XXYWXWn4hGUAXfjDWh7XrKebTBoAsnbsdLXJmt88qruopHksptwT",
  "key12": "2dGSEy4p3B8szjXL4M2UyWQ7myLYp63Rf38VyDzN9BNtWnzy7sAuKTjGXNCpL8o6qKCa4SuP7kp6Sb7AoRj5BaqF",
  "key13": "2Azh239RsjoE5hXDdvyXmNDeqe2h5LBmdheW1on4BfUeiFp2K7d3VzRYcAoF1iFdFpvqWt5jt2HtnG36kw3p7w67",
  "key14": "RXByDQzxTcLi3s17BemhL962d88Kd1QkvHKb4fMribtdxXbBiwW4YV8P6WX2WsQG6g97CswMSGD9WCPkRgo4EJc",
  "key15": "4KcD73tLKxsRbKEkdxoXdmavv18u9G2hEhPBoNBRoFR9ypfbL344b14MqQCqNcThw5zMcq7yYEJd7AAkfwPURqEv",
  "key16": "4NrySkK8PtQ3fUy3Fr1cradW4Af6Co1FkbwzJcC7AjUg4b3zPs5o92dn69DbHAWDiM2vyUKycMr6fE1qmyHb5k1K",
  "key17": "4vDerCL6eUAz8fT1S6m4uvmGPx3nXKErr9pV2GN3p6EU9xnE5ifXU4zuzahJRCS6NsAPBCA5RvqQ7SDGXPzY8eUA",
  "key18": "3M4bfUHzT2KByNkuLrRKVPh1kk5RFWF7o4S9QAAbUih3mXAnNYABMCXTez6gYPZvidJERmj4F6ifNq4RJ3qWgstY",
  "key19": "WNQyB4sXaVk6uYMmDAC76z1c2QZJHf4GWn4dVGPU6QVwGaZPZRdcJ25fmmNDUtqvgPF2mZLbJE3AZaG6VdFAFZ6",
  "key20": "5ZQDjqmTcdiduxkz3k5LKaaHia4J5xWShAZ3eTS6gEu1N5mJdZHsxJVvim3NvQ5rJHD7HVXnS6HFakQuZK8orMhy",
  "key21": "4ozU7Zg6FXpBH9AAQBg8SxYh2swZ6sYiqfujdypuZmMpnZTgz4MkCx2RAxUbavxPLWSaF3gBc3242Mo4HWzWH6iQ",
  "key22": "pNtspMfbjZmthCXhUYqzJi7DN7KLVjaxvxgG36TLjEc2ipZ2WFDrPQHQvHtz3DycgmMRkURsnW89j1HyKzuJoo4",
  "key23": "3u59d8WDiz6bHhSLZsrcErcvs32DJadJ5BLr9vatiuPN5JQrGk4mf7Y4CmL3uAhcFC9x1UvDauTvG2GoGMhP8Mg8",
  "key24": "5UrbbRf2j6HyZFvCqCx5ya2gSGixzyFg31iHWPdszh1DqiueRhaDauW4MQEy2FDNA3E5pazQRD2Nq8AVtiZBW1gx",
  "key25": "5o4nNXoScXNLzmcyFqE3sWMdfQ7QFUJCYZnvDu6R4U2cv3ByBh16kmD8FHMAHuekySot7auhiY5U4q511oqNnKD5",
  "key26": "36fcHkf8Yws9bChs1BvDmrCnzaSvUMTwdcVFV13f15KqWDrHXHa6XgESCyiZkDYkmSWR2BiNG1RmoPF4ezJLD9ZG",
  "key27": "5yQ6VmkVacdzz7XDe2xki9FN9vpMmNpQ2VPrpMt6FeV7VcHSAVfkgQghC9P3XoU7RyUZEumTPAd4M5gEkpNhcWbb",
  "key28": "KGE494CyYAmK36PCY7hVb69cDUsSV5rqpB9je8L17FDPDEdBBtguqDhn4LAGr6pQgHSymdZxmGmnwPuMQzHjKNm",
  "key29": "HaVMgUNpPYNHNYfN2mUhMAteTLcZV6XkGou3Fx6yPAYo8ByH6673uabFNoK944k1p9TkCfBtwDiv2Dxzq5uiba5",
  "key30": "qv5dmZh9DbGusPuUcB1SFapK9J8rmqVnmrsjPsimZEMovojNj9mz3ZKfVC2cbDvSpGWa32s2nzXRLNojd5Qoedu",
  "key31": "5tE5Se8Un55sV1PnqjS3R1tcZwe9N3fmJsUerUDtFfDxwRcFfavXy2iyyCvqSDvEUPQy6prgshyAgr9WbMapKcoH",
  "key32": "3nYzFrzbM4Y9go5tuB1tHAuXe5koeGWWUzUvePpMcrPP7sTQUwnSkDQHKfrXjxXKoeaYrGTfxkuwUUAjxZWRMR74",
  "key33": "3stvogvcKsLUyHioYa64Qfhx642eVK1f6pfvoHJeSagKRkR8EepE4wn1n9388f2Bp7xmyQLXJSw1Z37J4SDABUEK",
  "key34": "5158bZvL7KMs8UdaZ81dWHzsrrx27qC68xmSVNZ2ZMFENEzpthsRbkncxpWxriaYQh6DzeQdiQcjuP1AGRtfBXY9",
  "key35": "4EzMgy53bswmyCoZFfodW1n2EuziG8Fwhi7bm56Mku26mR1dfvV1zw5vT8irZ6uzSPmDysuBPBhEFfPaEjY7sHTJ",
  "key36": "9KFtQVTsPbEURGwN1NJNFiAqXBhHwFiauNE5B7yBXQZXNp6ZUs6WXqmJddtT73SPFmCuHgBrxQvxYk15JGRgeAK",
  "key37": "67qUDmkW4DQ2inCeYtCX25oxSG9TfooCmYcE9pBn4WEQ54tNC1mxDSxxB6cQku9vi1UHy2BRg7mFHiJ4VSXAmUZG",
  "key38": "3KRWkZm33AfTpvnM6d1RHFT2Nm2Tw6eCoKi4yqCdkCoZnM5HrsU3UTyrw9mdv7RBPtFJnsqRnupNL8eQJSn738gW",
  "key39": "29K2xtEv1rhtxSiT2AvJdwuePYgA4ZoE4fBEL6s8tWtpBLu2C8Xo9gdR19eKPD2qACh2BBBBiUgDbZsnsoBjpvjM",
  "key40": "2Fx5LuKwYxz1oQGdBw2u4dw51gsRNmJA2uyNMTDjUhND4Z6SndRxccJZVoaxzNTNMkD9xZ9zdysXjBa3zGB2LJpT",
  "key41": "n3JuKfPxJSCfPuNFYEmdwNP63992scTZkAjgzv6eG7YUG5kqv7PavU1qHnptEgfq2KzvJr2zFbvZkoEgrLoP5xu",
  "key42": "3ReQfGqFZZnPTK9NNcje592uM1WwATABzZQ8XCWLNw32AZS4f3mK91FM5CcdmpNJz8ZUJkt1QnH8zBV3hjedKAAy",
  "key43": "R8E99mffZoqu4w4Ubn9hgvbMZMhYxJnCtj4iyAvYwxDKy5qJkwb8knA94Ge6D81YkPCzTXLYtpnuPwqHmc1Sg9N",
  "key44": "5kf8jMpBCYRcdV4RUSPhfaKJn8HTv2d8ZpiWMXPZifFaFcm86n19Cp6a4e4AcU511PQCW7Bi8xeVN2LEdPKUfAeh",
  "key45": "5q7EpKpH1iyVfusfqtoK4hWUX9xko8gfeWgdY5T5Lp1egio7wLfbhTAE4e9BLafvC5frj7sBRBaKXdRaH6WbPWHQ",
  "key46": "212EMoWfRZBTZj5ge1o7n4E9nE5o2myxRg4gP16Q8cAwNB6w3L1mCHST82Y2mZ3WQxRt6yEAbxuGn1xf6fFWvrhu",
  "key47": "4bKYvHuqDNeQbXJZKLhr1iLSh6s9rFoy72c1VYNQ3Hv6im1nimpdhgBA863M1u6XiS59581S3ab9654BEfZt62Rs"
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
