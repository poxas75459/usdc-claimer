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
    "3upmVAhREMHP5mRPtnJ1AxSZMK5X8VYFx81jND6HSSbnv7ZMLddfRFeQgwUB27QAkn1Wong41HuEUeULWdYaW5mC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1DCKTg1MY6Jt6qEeDhB11Xp2XpKoGciwrKP17GXbnjV3QYeHsYw5e5gfBVcH1yVeacXjAmSFEpBApXgd8n5MaR",
  "key1": "263cTyFahTK1GayFYSFfJLEk6M7fwdCdjBdUFQZZeEQyfqJ5DMPySX2NtRQYm4Hjd7GRTbaN8tW83M9xL8NuE4hD",
  "key2": "o8K3CHZm8RjGUWFUDnYULMHmrEw6nuT5oFdQBGGRovF6GzBb6K2uiS1i59Gpxg4JwLHZx4KoV6xB4coyMizuFQ6",
  "key3": "W5CXfRa7heupkNX5U8ZUwcMmkL1BnNVQhbr89Kpq4W8gdD67WGrE6oeVAbuC1xPQFXUbHWU7NDUj9YQLKkuFMPW",
  "key4": "36HDFyueCAnaQJrPS6UJEW1yRVnzzA9oQTadCAbzqdyokHRtyX4Ezfjfc6D5gcLyKk86AqMwf9AWz4ZvW9TR89Pm",
  "key5": "3Rwn5UWdigpaqsBhnDoJdv3GKcBwuope9Gu9Q4saa3VSnBRnqtkGTQ78eEtpZsdePWdpWWBuhR11iHAFuNfAFaf5",
  "key6": "3HjnP3a1ft3MuVZSQAWZD5b4CNSgVK7Mai1gG9GraPJ4SX219WhruDXMHeN6o5i9JoeMi8CkgVSYCq4LmofzbxaU",
  "key7": "hLLYo9UWT11DpKEQsGUmwj743CEXBukNPEqy3jvRm8JGtcwDZfrHCg4VyjDWDiQMriuA2QAGrp1BpNfZra4dJuR",
  "key8": "F5pKs4Q2AvDTME9cvS1Hsn5K3FbriJXhLPesTkqfJnRZdviZ21GXjqgu92eJdXrmnMKQ6XCoz7bZ5KDREQKnNEF",
  "key9": "vHYLWSwJmhiMxHaRnbzrsVCAn1QvnBBYBFZUoEx6YfzRt5rK6oNVMSzB1vKDs8DafVC2CpYhE7dUnNY4Y3Xfaya",
  "key10": "3vVYdGoJNSvK1qHAx1aDMNXTV2J1UYQBouB6QQR5iygQ8iWurKboPMFZ7FKobdyAgsmLmK7c8d53eW2v9SrvA5TW",
  "key11": "2667bV8Umu7j2qan3UYzF7dZ3BarUzzoXSyJPV5RbpN6RbR627TnAz9Uo88SDrDPr8p4Va39vVcAx8dg4dhDMAUe",
  "key12": "2aKh5u22wz71rd5eUuxZojDhg96ZsRmDp3cfNSqZP4TBSq2mP4cBkqzEtJaPveyQMRWEF3ogawjUEvsLLAAFNLTg",
  "key13": "2KNAoZvBsQWe6PFn6bx5ozV9xVEBdYifwWcRBCQk6w2gLWJnNWcYwGWXhRXhgb9ECFkyR7H5vuCyqk3c3DkcaTAx",
  "key14": "2HfonRAdQPsiGRS86eDkq3b9tWYoECL7yDVLEHoQjvDKhqNXuf8sPWz3Uadv5h6tU9WiFrdz9Sy3DUU5utUSdyPj",
  "key15": "2DDYauz4aLbyjTLHTgTrJ9K71btmCiiKJeGD1jDrBrKopoh6gPDSFUGcwWEH9vMyPi7p4WMqFQNGHLXHj7QpsUio",
  "key16": "3EN6pjjq34vrDGSRbZsuuX6WH8XL6ZZc1dmmkH5K46RWPYVoSiGL4zGJa5rfLcQjx4wZVAppQJSkAzmiDCqLHGHe",
  "key17": "5ZzrK8MNfDXiwqNuM7i8Gr3ExZv7rvqkzc2UCZ5qssvtesELns1YPStC9oMdGiWRjsWaSK7hS1tBjaSiArzTKjAL",
  "key18": "3eTi4sAXuRAmxHCxq8xL4H9ajjJCb1LnUJUakbu92JRpk7jusYTk4UPZq3g2pyifDtJfFfsbWULV7Dv696wAnv3F",
  "key19": "5EdJZS6yba2Vcb7cdFEc6F81x2Gp8YbkFuA8ZxiuNKzUB4zquh6R1GE8DavNycSwkBXQnBiJGME26LRdCy78po8B",
  "key20": "5BUJJL8VDqspZTubhXhKcML2irRWK2V3jqQbKLni1BUMshpr75Yr6TWMASTAzKLEUeZ2HLcB6g1mVnLXCzHJUJ5",
  "key21": "eQH5SUQjpoW9nUH6KhtXyvaZeJsfQ4uvvZ2sdmg5uS6ARmxajrmQxBjBQdKAEQs8S6NYXRRrLe7U4BjYg2jQTBc",
  "key22": "5DYzidYCWpDbrQhLRjqMT2bRQwb18PcT5UqFtkZNZfmES6YRQosZmXAU9ZDu9FZq1bFf2LBYV8H5Qi24GTVk7yrd",
  "key23": "2VSrmmqndoVpnX5MGVu5hDLSnyFRbMrpXS3ydwHVs3WKh12rbTWLBzx7uhZR1N7fXkTQLZ4dSX9Sodq8JGKPHxgu",
  "key24": "2qrUFyFHGPwbdzyY71zL6pGYuC4n6vaeW8XuMYoxruEvmre8TqK9yq79ptesuffrP4cgk4aFV4z6un8HTy9aMG3Y",
  "key25": "51tdQzkJagKNhqqTST3RnreuhadoxfTchtSZddvJ2UcdsJ59WRU1iA81puienSFxHfAn2mTn9M5K7a7sJZfs872z",
  "key26": "3N2NBDegegMCoBb3PSATv5kZdGUeAKAV8Yvi3CDKgjNHkCDx2gNBftb5ApUD62aoH6riLfKKZTCQAF2wdEnM9kTW",
  "key27": "2SdzLyUKfxs1sFeLMWNvMdXTVU3XyGqjPqy7ZWsownWvvGcFBiAfK2ETqoYjw4ve13rBrpKBoQh6oADHA3jxrU6H",
  "key28": "tQLao3ZeJ2TdX6MyThr47oK5tNTsNiLhgfFXRTCofKdZuEhGCqSdUkNecKG6ka3Um3j344jK4MQdTycaRmkJ27Q",
  "key29": "bC3dDrPyrVhZx1Ggmkyn359yJEnjy8nEYCqGxigEQVTvmpy2BTcnBP2otzr72TutFCT3MDcXtyU2qMhNf6mFpmM",
  "key30": "5k8kKgZu44rm1sQNNU1Yv9CAp9oKhuuf6gYN5AUb5pAnJ7B5MAWebUnv7XV94bGeVUcyCbEUcM5Sq7w6Tcb7UWGS",
  "key31": "Zaxwf32AW72Qo7DkzLYv6P6Xd3jjFS4iMJkbzi7bvZfc8K9ZYuxqupahrXNsz2DaYgJ7BN2hd4fQc7FsPbJFpfX",
  "key32": "3EjCktQ4dGEMx793nhhPpG1B9mrihEhD2DUjaKJS3QnfL3W2EV5oPRuJn3piyFRf8YFJkPsJJktHAETVqSbNtPkk"
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
