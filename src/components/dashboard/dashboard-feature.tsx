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
    "5td2mgjFEuvSfiHfyXSESGF21V8qd8fh1fmiWhpeGXV9drjn7XZ5F1bAXidXo7RH2LaNXGbY57f3hZWswaNKy5p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWLa6y4KacGXqEBFKjN7vLMMXCMncqiHRKH1SpK39W21RqebYphtYzDeVkG2uAaqaBNrxanZoY5pa58Ab9vunqX",
  "key1": "5JeH43yXgbcSqqpTdZfSvR8ZmDkfkTv2m8eG3pv9qiKWMuQ2MZ1wsL8aur4Cj2XeXPEYbSsrqknuJHCDRGu6BxJ8",
  "key2": "6MxAonA8Whe2ZExRCiUH6Agb8Jmf2T1vXeV4zd5V3N3gnTBrSaRn1oGvJnde9CVSLWqXvSDg2BbvqqY9GnDgXBo",
  "key3": "4fyzDND3A5j44ZLoc4qynF2EkMtMSyo29JVAJ3n2qHFuu4HrneViNmVea8bGCvw2En3iVMybBmS6QWgvB2h3yssm",
  "key4": "41dmuj9xB1bKfS7H2tdARrY7yQNky8yTzMxKHTTFrncUiJyAN2CxhRkuPcKA7Q31CahM2AiSQE5SXg4yUTzUGA99",
  "key5": "xwBZFxZHcTDVHkj2RJXLHtKdirUzU21Tv2VTjaV19U1SXLamSPH5pCxJona2b8GradCvX9RJrDQ8NJjr69RpqjL",
  "key6": "3WozRR5W3e5PB7F764smma1qTWU46oaaKmMmMMHsyr1NFSLg3LRyD28gTG4BGDmfGCr3395yBL5bHw6TinfX4sHu",
  "key7": "QKHbqk55zjseJRZbAZL3g7A6pa2XCzLga9JxrUwfeVV5NWMLCyeyxwjG8sYsJ15GqDoQ4UusR9tW5Uqb4f7bfCT",
  "key8": "5cn7X5oH3T3W3aaXXrLCgyRKD3HW7Hi98YtnpPTVxBeYricWtyDNcL66ea4C1dWSvGKYLooba8mabq7hPMhTPCHd",
  "key9": "5kD2nCJQ3j54C71mDP5K9g5WpLNMP83BiUCvvKUpmDmrhYaEBPsR64s82xq2VR6Py27sAXYeSuspKyAt7QCWAQRW",
  "key10": "2u8ca93At6t9yGNS5XDgDVwpopqiUTqkFarxsFGN2qFry4XtiLRR7G6npMscNVMYMPW5nJoFgUX9mSjLpADt93KU",
  "key11": "4wNeDPqbeSgwut97ttyQHVc2nSi37ZVW4SBP2B8ZUkLqU2CmWg8Bgic7nqXxiogUKEXyAsxCUnza1hZ5JdfZS8JF",
  "key12": "4my6rgCUDJBPv17Mr29WYH4vhwR4y8EWcHdhxrXmNe3QFzZgmJp9Ki9nLm47nWEJBZXVF3HmSEVohW2BAW5FAVms",
  "key13": "2NEnn14NXmfiCErkwjpuX3F1V5bx6jSXVQHeH9jwvE8e5JAWgD9wpy5TbuBdg7ZA57XPbv6gMz2yYuLXArziQDxM",
  "key14": "4WbrHoADQapt31FnT11yaDDqMAMWf94dCThYg5sDhPbYcsr2BitiGT9CsBgWQkgVctHPYyyeVh169N49kg5UBodU",
  "key15": "4vY9kyVcZQnETZsxLps2de9jgsvxRi531Bq4BZbf1eePor4ksULxk7KRj6vm3ywuBDfY2RdxbqvTLY4trA6uXitR",
  "key16": "2HEwerB8ifD8NE4gJBdoaZaN1XVEXsDideTM6MUNFrpyNHBTDz4iJChbwrasfpvxfxeLm35to9nWWsBkqwenUbKq",
  "key17": "5ptLBTSbq77eJ3SAWEqHJTeAPPTwnTAeZfe3M6gFwhencpLRdrSDNUfUKTLry2ueiJTYAF2smozb2uyPMKqC7b2t",
  "key18": "QANQxpLQNnuaWmejYgAgwF3UD2pjfZ7ZZFH3cj1QNAL3RkkiVZLAVhPnxUhcuthFufP74YUXjR5T819ZtM5DRCM",
  "key19": "5jgWk9Bt3cSAeuCY9eECHu4uX3aqCzos5XDpKZTgp26mVkhb35osTPdW5sGhcGDrQbKLMnyRaRZXUyMAXtM2RXHm",
  "key20": "35QrGyzPPTQGPyCn9pdfyS3oDsjuCf3dvrJB6YSG2RufsooWBcThA414VMsexuxqBZ1q6C1AUoapGKYBBFKVsUB2",
  "key21": "KqD5Saefv143RipnSUz4q1JViCoaKTrYY2d2JkTPbaRhieEvX3ZFQ1NoZZS7jWXTUQs5S5s7aRyqbqKtsdqRGY1",
  "key22": "4nL3FF7V1fjuxbW8sFPL95QXga4XNQG98J9PLmedRujSWnrkoFEaZxNubgyrRn6RR1xprhxCQyeUp1y9F1QUcqQe",
  "key23": "5NRnLFtKis2vgzUS3z2TyHdzC3vyQC7dioJjE7ULnr2hK2EAY79jkihu8YAqfAwgHroFzkrcwzQ7cRFkiWaaH2AL",
  "key24": "W161CcmM8TT8PWMenbWHGZpnHeLaGoXcjAb5seFRvRpug8ZN5L4EAWW3RQGAeQxhJiCwXvxHGS9q6nddmAvNqo1",
  "key25": "5gBAUUtgVj5xAUKJc2uY1CJv6aVSe2PtsmQWJmzUYPz7x5JqqJskFFbzbT8EogywVGtse6ZubXMBVQsAepb2wgjA",
  "key26": "5f7wf62huWFtY9M4FsksJ87KcZMtkx2JaUgsEFnkmbKvTp5TVe1RHaAP4jJW3etcct4WMSY5WxqU9UZho4v6hoDf",
  "key27": "4YSvqZ6XKdwzVZQVzasBV29dMJ1L1PUreEcQ2vYmaz2DJSVWziPLK6HG4nGj4VygPmros2qMtSwZJdUQeBDmxj6z",
  "key28": "4RqgSgdByaju1tCzvhGsyP8mQsyqFivMccvBvQpyRN2LKu815t5cZdnYLNwLckb3oMHCuCLpo1fAPtkQewuVvwKf",
  "key29": "4ED9iRayhPKax6KEoAkEw6ofoXgieA5Eq7KjKMLuzyofVxbWS4ziFFQGwHHWxfhjAaGqtPAUw75gmKjFgVDHwwdZ",
  "key30": "3Vqu12DsGTP4tLo9uXttvhzCcUh9Dpu4QqPAEFhQ6B5J7LxH1hDsta7YNfyynyNDrpmBgCA8rUJVcyZqonGhCc2Z",
  "key31": "5bp8iFGwfNvo94ryYo8AWpprpEvQaJNqyyn2RjCFTbeEJWUQJcGDB1YV9rgf8u32gcoJ25CWJ5xR15733idBzKTC",
  "key32": "3RtXUwy16SmbesJ3VJTjHN8Fqbm24YS39jGjH5PAbKhq1ChdNVqGyzhBtaarMXX5nbTrmqVxPEuGgVKTzWGcfcRQ",
  "key33": "48MzubtEcwTY3kcRenhvFnqzYfeeN8JuvLm8XifTTc1Uw3CXHK1Wda2WWDETrgQsbt4RCadQkDrTcWUDVfHD1Vzv",
  "key34": "2Lck1wdJs2R5LFu2SPMMUN1cgghxrNN8PXHVQyo6sSqJaRB4upnrakzwWsZDLyHKECuWMAFZFi3iEcb8FRVcJ315",
  "key35": "44PXJHCv1aqZWgtV1GRNo9GWkhy2kBSiubt17nnto6HT6FSZmvtmcynSqmGWe5N4MTuWr2Ws1YsCvPix92qEifTM",
  "key36": "4MGbL7unrXueCEQTPAns2Y3UnagwjR1ZX93HTWTBuLoVgvuiaGN9pExNJLXgQabHWxd3FJisvWt1EgwX68S5sYyG",
  "key37": "2zSJh8pnBywJJNQzADqAP3SD66Y2o8ZCELEEkZHmXGaiwKmJjvz8DrvGHiYFx2WyaN8FNwHEyufD67ce54LuMfaq",
  "key38": "2Hux9PbyHBcu5ZLRi9N8FR8awauHeWfoMEDXnwCCpqCcv7M4mhRk2n24isSLz6GeEqjYWCXYurBkYPZV6YABXL2c",
  "key39": "35tSeW8McuHDGuNFKydyidXpWB9h5woEPzUcQVipcXXnV5r1473qMjQeWUBh5CACFhsWgkHY3fAXumJDHCCmpF92",
  "key40": "2VcBJCoxoEPXiEaTW8JFp4jUVWcFkCuk9htit6gBYaLmVYeaTnqYfNW6YcPxiSi8KN3BHSFVfkJbgU1E7smpp6RE",
  "key41": "qbG8Vy3oAtSE7vgPH4K2EhTfUUBVDT2cFBKvR24J5hkWHGHoFbMhDNAQqS7q8tKffCMbRLppjUo2Jsp49QRRtNi",
  "key42": "5xRHmf7Ysq4RV51nm6N75ymRJyQNge5MpixKQuJ7W3uj6Gv1aky2hmu1F9ijT7cSonf9aLcmaPTTeziFLAmqFgNP",
  "key43": "5fyrwk3qAQKzicvBVHUK8KjQzzSun6ZS3PBjXC7X3id2BgN2YwKK59LB8EgSJmix2nQm9mcVR1KiR1XEWSVNzjnB",
  "key44": "ha4aq7iWqNnXGDCuR9uu6YpUM7dWnYfz1vaBzKsKc3HvbqtzpUUG2DpYcvw6kXTfAV3CaTjtD9GzHioNFPgwAPz",
  "key45": "9A54ruhuipBGmStgZVudNg1uVCe4AKASDa7UskTMJQzCt5WViESeGzEjFLPrS3vr6qrzpaRQGZbmZ67dLtm2MaG",
  "key46": "54meDCMw469pNyZi2K3EfSigX8pzoTbL5ptz42UeGGn747s1vpmvyEMVjLwMNigZuKFP7dy9UvET935V1vbcodKp",
  "key47": "27LodNau7sERTsckeLLSuEbYGPHZKsqtxEdikgAC5rpbjRUuJQEWmWMYC8rFv2i1XGdoHPHtCAG5n59xt8TyxyyT",
  "key48": "5sdrfb5VYNDzcwbL5XYMjzctxRsDWrW7UrMdPF1qvL8y6NXwRZT5ujVSUVuyB8QsqyFntqc4fzTZ1cRS952mwoFQ"
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
