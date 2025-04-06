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
    "4mvhT1zGBSJtGHUQSACEBTSU4T7kVDsNKSqyWcHkaq2uEPP6eHEZMhK6tifmBidpSvWz7WxxjWXrW7PSEHUxuxcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vK2vaQgjrVWdMTVsRjJCGTy7h7sQqqgGwBWKy4NahKJ47WSwkXVzmyge1nTBa83kzHhDrFfwQkhS5qbEipFxf1",
  "key1": "5eWsQPoSyQuS1FUv4EvCLz35JGngDjAHQeCi5KopfxVw3pZwJfjEp3b5JL9HsCp7aL6kUbkV2oA5ZHCDPMb8WEZR",
  "key2": "4HgRJvVPnjKFX3KMRrvnBkgcPbuYW13T3r6CxSbi87E7Madwza9poUFNuMjYUUfSLP4wyeppFXs8VGK9ZsMRcJEx",
  "key3": "2YwzBT9vTVqen63Qi9vJFdbw8KWdp49rhoTbAqPH7qBYLuYv31HcUaLLe1QH2uiRpMPA3f4FodBDAiSqmHrAkcmp",
  "key4": "5XA4z1BCHBie77rpvjFZqSgntAK8TXux9ASo2DN8r9MFBUhNi7d65rgEMHkk5GrHkENniHQrXhH13bX1Azch7Vok",
  "key5": "4s5G8DyYzoc8K2GnUZP2o9ENpxNeu3RFNEupkwfvvvGat9zpTuQqBey6gZRVvGR8o9UjVcP4XqMiCyM9j4m5yg1V",
  "key6": "2vwY1JLLfSVjrjiuejPtSpLfrKxTcUuCS6aoUCu9begQTDbtkTHaoB2kbmhoPmPYz85okwvHnXuPKZQfmrVG5hZx",
  "key7": "3W7hpaFHGFcaqAmPtpTMcVNHr9iso4KFD23tVJte3qA6Zay4C2Gsng9h4PbGFyWrGQiHYtP9gEqi4hwfp9gFmmHK",
  "key8": "8MgUJDqSXwmy36oUXsLmj2jt5rjzGZH6XmyemGzvaBU9skS2txuanpRssWEjAucJMMb99kixxzvN22TJPCjrsZL",
  "key9": "3PngDdht5g1tih59gMwiouAVandxBuniqJbkEYJLmoRmFxugTVspvNV53dtifVknnKbEUX121bVTUoGoFfpYnen6",
  "key10": "3QeHbTEy65xnNJ52sXNw9QPCKoU3oAg6aTz3mcgYNC5HtFSUXZMm3iG5UKsoMb1RaA13gDecZQcnHz5j9MgtL46S",
  "key11": "3juEFAPHQAseMwKYqdmrwwmujSXWa5iCxhq4bfHEtgfUi5fx4qSifRR31DVCszoCYkimLCEZ4k6MUaZGh9rNMfjJ",
  "key12": "3EKJP7TW6nRvmhiCKHoVEPHyQgWw3YiLFBtTaamJ9GiP7XRkspGJnPbDWEFcMeHLwGfKkvi5QSPH6XVYnhWSut4E",
  "key13": "b1CwuNWAt6A3cS1adWr6bF66ZT95oudo7y3KBeMo7CoMfgsigwMpN25n15kcxX7LkQUy9bkG8MV6kJhqyvy6iG6",
  "key14": "NWRSgRbYryWBM5r719Yc6mKzXnvwzCXMt7bawevbQt3mkRhqX6f2RyACb5UHnPJPYvfr7yYkyK8DFbPDNwQuGKY",
  "key15": "4nSfy865ftGkyHcJPKwuNCuYciJrjoetAsvRRshzCV59qCBi69AAVvuUuG2SVG8Ajy3cEiJNspvSFTADvRNPmZ7e",
  "key16": "2m18wGh1vqEZfzsEWAMD2kyyXNugTvCTiSh2ULeaqgHHu4UzVrydrtdWxGXnsuVU7y4j283VgvpgqnSHu3f45sKs",
  "key17": "3djjBbHjpSFbSB5dwPRX7ucc5qvAgEMMAjnw8QaeyKGvpapEzFoHe4XtaXxkbB6Zq36zAMtr5StLtrKeSU1pKo6H",
  "key18": "22bpoHKWZKRy4Drmk8J2jSMg6VaGAAPfAXDacSyBFhSdLsjoVsRzif5h9dLZwkUQQ7ymKDwjaT82X84h57hfp9Rh",
  "key19": "2acus2PTZp4Nv8vPh72E4K21DuY87LtnBkrP6op634irHiirKtunQM8i79WvZceASqy1rSTBXALE41Qi7EW5f3kw",
  "key20": "61m33MEM71N1i9AhEWsuUt1QYuLJ5ZJjtuM5X44yjbnRUddcWTZiJd8h8gSa2miTdCRBTor9pfNCHvtAokLU1GBe",
  "key21": "s8j4Ez6h9XWok45gEkGBvW1uJjX3GGT4CEFLQUF4Nj23uNe3KJ2XzAXqGjwDFXEsg7q3PdEjtA9Ra4ZRrTPv4Mj",
  "key22": "2w3hVn6t73Mf8GUntJMGchQYmxDP9wa2eZmBWLQuhFCcUM97FkLTYmLXBAeawn5YVqsJebE1q7jSc48XCUz6k8JR",
  "key23": "67ciEz9qAu9arQFuy2QYKsJsqRSE1YjVmbV32WNNEZeuQKarhRTjEH7vxXBuWhjj3VgXka61qm799yxpQbMuRHYX",
  "key24": "535aDWMuGAPW5ieQZ7uLDZ8B51bVuzynvhvaizbYBXXMeJ6Br2qdXvStTDaGrBCenVDDY3YgKamb6ZW5YegQw4EU",
  "key25": "ti2rhAVKWM8DQQZerDfiN12RMVyt1GS7BP79w1uAiskJ7L36ykrzhU97Tn78FjzgMmMvJkfMAm5i3zSkBWsq4ib",
  "key26": "65ZhkAAbMDk3EQcekhJ4SVRbeExae6ZgsyTcy7f5NS2fqq5a4W8CuKodZeW1oivvfr4dEBGn145hSFhiDrGQUqvN",
  "key27": "62C3PBM2KmWQPmQPpSC7k5WEceSxCorKksWK9AgVPzdpwbjp77nQrvcQaHAAByqfxEy79vWVHGJju6fC61xJLNvN",
  "key28": "2PjyhByqVyxbso8urZi7EZHUzNYUHJ42YGKbTVYFRymi3fasQTPgxJCeG4SWqwq5i7DA4V3HPCsCUME1zf7gyHvi",
  "key29": "3uC5jNzkcwwSM5sJpGRjGpAYhs3KTwLrwZvy2tKhaGGBxTWRvQPJfLJinqCKPrCMjzu9xYPnFPdm8NoSmB9Ub5EF",
  "key30": "4cFqunZXBVCXPHvsYy86xKPSdQPMgx93bGgFjFWCa3im6DTekE4T2p2Hn1L8kTRsNFRsgS8zixeXS9573W3BjoGP",
  "key31": "2dxmEtbzj9CqpBPEK6jGcRcu8rHEhnVDiPD2cvSThyBBJhYGwcRzxXR6PJBVZtKTYBUH5sGFd1GYS9nLdcAxFy4i",
  "key32": "5yKtUG55sJBMUs8V9VfDHBNsycGKuMSHFuYsL645bbXeYc3NCqYgWhaDYrTNPGXCncvenYW1bzKomUSwnG5zt9zt",
  "key33": "5DT7aWtE1ZXrSKLMK1TY95kLst2Ex5UmcciiC7Bgb3MFaUfXKYZeYBnvELntK5G4B1PqU9k9entGzX9hLB1vmADQ",
  "key34": "2b3wJ4mbV3VDVaFHv9ByLxa9Yhk7gr2rCksusyVNL5PNUm3tyGdz9yHk8N6y2hmh7Enu8JFhnSMUxXhLMTgbFb3d",
  "key35": "63N1LxiQQ3sCGesQDnuLgDeJCq7nVZJmN3p9L7FqTuZ3ZsbcQZ71PVDPsCcATbRHL2dzZtqfaUwToyNo1HfiSGAJ",
  "key36": "4pGuZJUgqaK7niBVoKm1fS5iXf8kxBqbnNCovjuH9WbDZj8H2BR3FT8PT6Fi6J22Vn4ECL9c2dFJNg82LavLxEoi",
  "key37": "5UdMb6eYSM8pGaDerwW8ZfqfpR7JM1tJzVGYSK3swKskzXVrzC3yxy9ovM7j1KcuMbGryAwe5kCBxCNsab5aEYTv",
  "key38": "46dxb4QY8cazBWzAWiVCq7WsQPWMDuJ25qejPK4Lt1z8V5hX458pVbhEUX84vRaxMix54HhHvyV7JMVst6WVdyyc",
  "key39": "cgDG4RcRjNyns6eRuZvz2mZNGuLncyJmbuxQag3qmAPgHzJ1hkD7AcxDrwxWKhTt8zcpXnMQfFS2EmgHNFJAuy1",
  "key40": "3jaYkDTDkjQTkK7GYTZ12oUQS64nSqKFYJbsKcFBHSRcr3VhZPwLpK8V4snsE3yvBGRd71dyyUndCNF3RYbYeyyE",
  "key41": "4gYspxXmNyRiZP5EcRt2K2g7sd6WXByK6nLDMdE1X71y5yAHRRLv82wDt8MqXB8HwqpgnB9rduDKW1VYy5J8smCZ"
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
