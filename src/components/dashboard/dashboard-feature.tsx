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
    "3Y71w4AZkDoLE937W8qhxACAXMLzykGhpJfhZJj1amseXPmk3M6Y2RKfMW36StpSTpCCHLjYm3FpXKHpAMY1uPw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3XvX5BM5YoCLvWYqQNRYHg1Qn8FbCtZ8CzJcdSeAHEkcj2e9oQ8u7ub55XJ5w3iJhqZ5H8iN5oi3bMEcyz1NsN",
  "key1": "P28h661RfB8iZ6dAAn3ibGrACpJQSr3GaVXk6wuMxnfYEroFpKX5Azcq4RHBUbqHFVwpjiB42KQCod12vUVcB9N",
  "key2": "5BhBPjejrDKXuh3HHD9b876Ab4FxBAhva2BfVWP8vHW4Hp6bheqEHB9h4iTjJytBx7ab3J9Q5sAK5hcZaw8J3K2c",
  "key3": "3pqfEb5gx4nRvptsrK1dFtJweLet6qH2CERQMj7BehT6bFjaU236114Ro2eWWHL4CvqND2qiXr1A1XFJHRcXpGB9",
  "key4": "4rBSBhHU97MbWJkB3ymuKX3iDBTdxRKnKY8Nak8mpHiRLCdTDTWWb4FBJXm69wh25FDMEunofHn8M1U8aR1dTZTg",
  "key5": "2ZeNdEmQddyJide7kFt8mrZPeRVoEnjUUSjybXBVsTSBhWVBqpWq8K5FVd7Wsg1aeDzuKDnUoeSAKQ3tSrvvE1tH",
  "key6": "23kgbdnwr5VRdV3Qem69W5FUu9BQPmzcCFoW5QrbJ2sL7P59UwXfx1FzEv3ZMX36URfM9ySxoEYANVkBqfLXoCAJ",
  "key7": "4aiKcZVQmgFgP5vKyWiuQNrMbMjr8m5xRrYY6CvMb9NChbQMT8PnVvv6gxL3wxqS8AwpYmz2Lbu8yJrGfrNYUzs4",
  "key8": "2Zb4TDXaLoLTtL9hVKg7KPd47dFtz9JfVooq6pbxNa7dQQKkGpL9cMunGazLc3fgZiWfTcbTpfXgQdaRQFpAzt87",
  "key9": "2JcfrkSn7S8H7tiP7v33jN38AesjYRC5h63F5e3xjGZXTyotQWqqgGFm4GnsgohtLJ4bwEQpCK9H4xUUNyUqYq67",
  "key10": "8TAUJgP9YjVpSYUphSKfM4E9wyoNGVHaKiozY1EKK4ER64ZuFR8qcTJar3vdzprhnxmSMGBcvTG9nuDPdWgQt9E",
  "key11": "5yisz4MwmRaG3uyseMqvTeGNiQSpJrCJ56qWAuMYCsVhf5oQVZNmbnkpS4PUYBxsLsJ5sUbpk3xZHKx2s83KoQRF",
  "key12": "5NKUzP9JZrpNy5TSBVZhSPtEfic54CyeVsFZKkNTuE3XLprEk1aVmN9r1ySMZNqMww7qfTAQmn7AU36v72skoskH",
  "key13": "4mZmaAykzeZwnyGTGwWNzxd3igpFv2WadrYnuaZJzAP26XMvKN2gfmXHidzAcjTS1ZRp9BCTSAnrg6ayRKEP5jnn",
  "key14": "3PmRtTGnZQB8nSX66SBii83fi8Fb7EBieZsP6JMt9dg4DRqQ2mrpezgvgx3johWh7JbLCxq2f8MzsMvRuHaK7Lcr",
  "key15": "4KBUiNxPBWPwcAKgXsreRnvLjmWz6kcEdiyjqwjojehbuqhb8kGApWEojGyuS9Kxru8ZXwK69HyUrjjwzeKJiTCa",
  "key16": "VQXFBfURCAzGX17sG7LkhTjDBq72wQcVvgXEWoJ5hbaTtar29uddQUjB7y5j4uKgwtKzcGLnwXviYwRCZAsAQPN",
  "key17": "iRYdrnkJYf82vPEAKgtTHrKAFDesCCZwsoVdWpCUXU5tLkL13wtQPJPK1Yz6bEGfxfSGXvWwip8YqSPzQpU98Tc",
  "key18": "5pkeot5r2DGHTVMgMaxfxcvSHkC3JrJ7mK4qXHoyFqPKUAhGszrK9Db4Mb5oExyya9RVMkx357t53tiUtVo7iBiZ",
  "key19": "vU6P67RpHW6mPdchrR63JGihtVEotbRe3P3o77SNwDj8QT8dkEpybBmCbXzfqd85CF899q2CZ9je2kEzdyZAXGz",
  "key20": "2Ug4cDfnN2Zz4q4QgdvDPPnemf8G2h51LvA6YiiQQxcYJD4gSiS2ZPZjUVq3A6SFNDwj667oQAA7hQez2k9A358a",
  "key21": "aJ6NtsazeWYYxwyttABEXgnVL9V6p44oNDRJ3esDSAm2eGP2JDjj5CTyfhnW1NisWuNCas3nJT5ZxSvccfsFS8H",
  "key22": "3S3sU1XmAdWmLQrbs1jHWcrLV1a3nX3UMcyCv5EUXuTu1CevsSHeQgRz1qgTykTQALVfLNdHxESa1NANC6obK2La",
  "key23": "2qze8z3YHCvLWgH62SWAmYyRpgQ4qMhSazDNHibFwCc2TH7qyEa8bqZTqeumHvJfT8JEXnzKXehCTmEjqtz4P16F",
  "key24": "shd9NXy5xdQyBVSmswmqyth3Si71SaCcX9FBixNFLVDh9YoHyibtAvFqbLrNWmsHkVtkN2K7U3RWrtxK6c1ECt4",
  "key25": "43gNVFLMsSS62gqLC8neEg32h8pJQWpYDhw4basnZNZusFyNfp23BvsoGhMTUJzQeEiKC7sauuGrhM4eTpyMLQY6",
  "key26": "k22HcTM5FeGCS8z47aRwR79szcdkHu7FwfZvnRLsaqfwMxk4kQVPTBqJp9XGv3hmDt77t6uQFxTBB87R94rVbbK",
  "key27": "5zGf8ausZe4wxDejbsFzt1zMDT757cwWVgRogPH2TyzYBPnJC2FR1WE1AdavSooRjjchhHBBNZ9FLFWS6BfJivgK",
  "key28": "4M1uGoHpPyURPiry9dYKkLjVodARbgs77W2KwdFgvnMVoarq1STi5jK3MjbPb6VDunq4o135yKHzDgJtEybUjMWL",
  "key29": "4X9p82VNaqrAvMviVJKhK9ErYP9g6G337GvQjReYt1DQHDgWuGwg21uk1ioT7iGPUbHs2rxysECkXND8x8udxDyE",
  "key30": "4c6Gh8ZaUhGaSdsMgoVhnGKubKPq1fGfbRwzgSXK6EiR4ZAS6F9gD37yCoCrZNnnTs94nRm2jZZ9TeQSEmppSQRq",
  "key31": "pWjzj2mpqrBSsrG18U66a8peYYrT8xA7wroP7Mfi1ayaSCqDo9RpZXgXCFQgGFosQ69Mr4rw6icVYLWNywX3WSD",
  "key32": "25CRa7cYJALSsEsvtUq4LUwyYLBDrjrv2QKzJeoTQKPvKUfjGavnfvcEZNzS2MRoLuKXvr9kkgRRw27a6Y3aNtXR",
  "key33": "24rj9ihVAvn48utyHp1LGusdbBx9sTi1ggmNCmAGrSvM6Da4FfshFwxd4gjhbQJPMJjTgV47eXr8GrcU9HVZTzdv",
  "key34": "5S3syaQFFHr8gVdMxm76mYEdNdv4q6nM3hnfhffjjk7NMjBAf8Zr9vcqiHRaR2NQTY6GFBCiqtbSZgsKdak6UUkq",
  "key35": "2dtudUifQTewFySLDr1uR3x1HToHyQjBNJXrPa5poWFFZ5LXcHd3Gc9GKL5G48F5QoeGVDqtZpWJkA4HweM2vE11",
  "key36": "4k5rfyYuMioPMmcz6PsciZi9zBQ2ScmpD15FLq3RsSKk2kcq6GuViEi4J4Lh58ZxBcQuXYKFrKznJmCw3TLxYsi3",
  "key37": "2nM6DoWCka1y6Y3HyAamaWuVajQnJSTAVqB9oG4msyp2Vz6bTMDWCQcELnvDQeUTiYdU7q7PD44Jkzm7YNVywnra",
  "key38": "363wckGkhTLo8V3c8PqPJHV9oymb4E2zJ9RYx9FSg729ZSc6u3M7GK7Rg2Z9wNyPZBVJS92QDS2topoA2DxWD24W",
  "key39": "67AbEBogFpxdKc1bn5Ucknzwhke1shdHwjyFNudcSDkttRHgMrtNyBQqkygypvgM1EJNCkcXzBWzGGHhudcTyVHA",
  "key40": "56NJH7fRpX8qzbZubZzwc5x9UGhSaBgc1uthMwo67kq9UdvbjA53oPaKgKazS1DVUA1toLDCZRCruSbFebJ2NLw4",
  "key41": "NJwHPCKK6tSePwjC2WDoPCPASGS2byVWVbDnuPbMVZofroTnhJGQUdrKB4p6rAT6zTrkJ6wzfqr8Mo9kmzpwwGe",
  "key42": "4q65bdMmpTtfTQcyFmbQR8V7JWcBFDvQuUSHQ2HkoqkWq8Mw8JKy8gRE474VUqATS7PsdXYU7jGFZ1xk3RFsPqPf",
  "key43": "5caiznoAzdRwcpx9oHSAqWXsN2Knp7VQXr3D4pS2a9VetmfkhtqxfdY3xQSM4YZaAQFVNiS4zszrzbGcuStjXEf8",
  "key44": "658xScGGh2t2H3kSXbr7pvuCH15NZEaeooy2jR4mmbSifWEYPURAnV51wNxWNGjLWa33zsmKecPbWgeYdiuHaFmu",
  "key45": "4t6kBy9sWhhugxJjRoH1tho7n2bEA4mddspRn16znLKPWQnwHN1vDjFGKvzfbeCZFTmju22aTKzn8FhEsrHdBb3R",
  "key46": "hybvndjnm8hzBiNu9ZTzXtJLs9jTeUbP8XFaVxoLsc482882j5q4QmKVw4uVG9FtWdWWQ85xQM77YjpdrNbQ1a6",
  "key47": "3igzt2i9j7VrMuk6pV1NoQdfep9rwATKYSzBRgx7AFiDz85T6NUBmUKJc23Vz1QwH8Gd4f4vy6VHQYUhS6X7SrPx",
  "key48": "4NVcEZaF755qo26qjFpM7SKP2kn2oU51JnVJYExbPoQsezjLfrTNFCbaFfGPHLDqsaHf6ZBhgvCK8oaoi8f9JM9k"
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
