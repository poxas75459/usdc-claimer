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
    "2zxpYBvr5AXE5PEhiCBmLrSoF85y41Y9sS6ATWgDq5r7eggsjpXw8nv8CT9gfekQ3c4ZcpjvLnSnQMztNQeWERBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QH1bpHBj7Y1pEfZLFACW4Eke2qXTFbHfJ8KTHd54FJG2HUfWyJoF4Ji1JUFXp1geEFWoV1hjgdgLP9FkBzCxEwN",
  "key1": "2nLnQwPvJ7XBh7jxyNSD1tptgeN4hgCLqiiT4gsW1f4vAjEPqBcBwJ5YfWaMYjY6nmRocpUQgLnty3XCRAmseyAo",
  "key2": "382eb9UzmRXbdMxa5okeZcBLCVwWMcUauAArFoak8GtcFQrJ5Z6hsqij1VArPY1rFXmDcHdf98gJDHmQnE4crnVt",
  "key3": "rWGuvSiGRRBgVE19C3WrQb2Jm1wVvGsmur8JHVjmbpnnbPCg5o5msYv5HjFxwoRQRLGWBScm2uJRiCHVhEDmLJ4",
  "key4": "4YGGym4gKFZBuABgEoEmLGf8TkeRSw5Ja6Aeqff6Pau9fJuBNk2Gs47cz8aeit1X9ugRKZLa8zvVJtsPpeReuJsj",
  "key5": "rNcv37Dsn9rkU754VjmCxit9NoLi5UfVhQanWihPiqX2LZZrN24dFT14q7RgkpveWT89g44KzkX6cXhgeg4Qu7C",
  "key6": "3cy7Ar47PSDiH5b5YQp34VNSJwUfT3ybnAmu98VACWH8aVEqtyFX5N2NgiSYPDM9PfWCPsH49MmRiPfZxqhAEvpE",
  "key7": "55z75DTTFZ34rDP3gdifkEi9SZXvWLwC5SjaPcZ2MHgTLHNFkpTyXm6gbeWzj3jpBo9SsNM6oJn2ZVsW9DSVtKnj",
  "key8": "3b4PS4J3octAjjEKTm5mvXcKARVYjoJmt5JMGp6xKPrZoJGC5LL88eMqLEFCoyGsEfHm4msiDxoctjJDgsL4BmCi",
  "key9": "67FWn66wiU4CdKkFQtwncKsDvUgt5pZGMJh9BLq9VJsupMcj66tBZc68YZ3y9HG2aLbTxThhtu1qJ4mJBVLavFz4",
  "key10": "oNi9pmSEactJpDyuEvMaEvxsAcZNwG9xqg81Gv6PEYLALdeH8nUdzsKnZWHYuAz9xMs4Tef9qvJZDz8aQ2n1PEN",
  "key11": "5YG6BMX6UuaHt24tM9MP4jEpZBUFoTeE8cX1TyM4iZzL2dhdmM4DjPV4w4AqhndwKjhVpDYgATxUytfsR4qtLvAT",
  "key12": "46jih6PGC9LiQ6EkbW3PJTP5J9yXbaEygaawGPNnZzcrVaDeSSnc5sLXgSWQQRQdw4yhmfoBuiCS7Sm7T8Gmkg9n",
  "key13": "3WugBktFFCyg9RzagPi4JLEcWDcP76Jh4G41er1m6Cacieduh3Fq41pygjVsbn5L1gThQVa33i11cGK1VAAsr7ey",
  "key14": "5CgcaeX1zpSctZ1ynntP974W74GqDjz38Lrh16mUMo6c524tVkVeemJaFdpiTkzRVxPSP5k6ETy9sLChYhNaqmCF",
  "key15": "61yW3s4EJajUN6f5bvsxDFL6ogSQojsRLNtZ9yKcaMEVYTsNEPbmhZpGfYpFbsEUvizqwiSqU6VuQCFdzHH89APb",
  "key16": "61fdjA5pZFzfruWwQkFAb67683BJ7ja5rB4Aqk4Vg9fNko47mD5WAN8qwsdrHqk33RTsDo5AYCgBQqvetnNvbPB5",
  "key17": "47GJpL77H7ocR59i22TRXYxBcNsG3xbHcd5hYa8BC5XU4Tf6Bveqc3BEZMM7uaLVDXyytp9wH1aAfjDA7nN6cq5g",
  "key18": "EDkWyJP8nAdqWH4F2n4hihpy65YoFqQhJP5Q3atCwFsML1fuZbqcLG1AFxcP6DNau9vhZamSAYqvjJRkeLr89oD",
  "key19": "3FaCRqTfyGccjSNCUe8sYk5PY2DHe32bTtndy2JmrRxGSRq2EG5bS1CbNvvoQcYEuuxgWk9jpzmhp3sjWqeFgRW6",
  "key20": "4JQHqjgJummvphBhsS31NwZmn48G8wHJLP6R3beNaexJSDtuLA661S5Siex9WAU75uPVofhbwWab4bjDyju2EGDL",
  "key21": "573Tz8nhqvFaeh2VwQz9LudzbB787RkjrFJxV3HvVLB2YFtGVDJEdwRpxNAfp3ZZWoSD4RN2UaconiQ5hLcsQSos",
  "key22": "bH2X56FsAWryBUETro3NfGtp8pwWF61HXdetfGM6SK997vZZN4E1MmZTWWEKCv3Lh7ySiq11hBo6chQUMVmhjxL",
  "key23": "hHUNDa6hvxKGX1r5xHXrTJWRfrkw48FxsjRUM1hjdAjs5Cf5gS2amK7nkq5PzdMSFd7J1dHASWh6b9dobiVVFC2",
  "key24": "3J2qfTbL2H7cz4nynxcbuo1auUttJULjBCUxx1FNMQWnxaroHzxraPXT8dMge3ss6yeMbDpsVYM9fRbbhV8L9e26",
  "key25": "3JdMNtLG1X7mD5QSxt3CbGAugFayEibzYaY1aDBfrM8vBKkquAFF4KRMkbNPLt7dLmxFsMPr6jyTxnPb8R94MjPY",
  "key26": "4Y8JAoboPKjxzPge5BRCAVaNSozJfVSQLZRG5MHBG7jMpzgjzQNKR1f1Ya1avnKHpDoPNKgMvAeUeThS8UTqdsm7",
  "key27": "58i7ZiRTAibzAVsKSvq13rruAPSpWdNnyXEJQ2mT5Bvmbq4KB5392LwHbErZwFbpZrxRJJWcPzPbQ4UR3MggNAXm",
  "key28": "4w3HQJChJfWBosPkDgYrPQr85nBJTBxm7vBDkKEmqeQZuWc8ewJPMDU8GWXN7tQeHzHnxGpJHgytZmNrEay8q3nC",
  "key29": "5jLvsAbtGrtqABsNPUqoY33GB5RQq7tB5t3gaMxzz1YXzTJuxvnyysZtSBJAbwacrBCDwXgQPBrnbBxHcPVHcXmK",
  "key30": "p1M2UimBdS45BYAsAPVZNgrk3k2maCABeQMtDLaJ5eKhivEBg2Xs6JZYnGfB87FYuFoQbSHkq1Dg5NY3N9Sg3p3",
  "key31": "44Y96vu8h7GU4Cq4zFYPXZGY4ojSNJMBpmS9zX9FGSJrKChAJwGL5jAZbb3iaYWPm79NhssaK3SnpqFsknJhEuDj",
  "key32": "Azju7ypfyewSXUaweD9YfQsz2dSKGGaEF7U6TJEf3ZaPkkL7CjqCEcRarfMA57oMyxQr5DW3rk2j9uCcMKLRziP",
  "key33": "2qsaty6oBwzHcoUcBqZXw4UZBGkwkaYkJhWUFCBaD1chKV7svQA9djDeXXXsZ665yVTBweFZjwUWdR81MwRzB82E",
  "key34": "4MWP79jRQKWEb9ohiHhUGhyxAdXJSPQv2XR4Gkxe5rJiTELGeDuHWvNEd5YQ1nzascKnVcFdUBH4csTGUCAp6kQs",
  "key35": "5nZJjHBtFE3k3aMahtHXPqLx2AQHxNvFDKCfowKxQsQ9zDTsCcWfDj62aeibsdQKQ4YHqQATkLVHNCAdUi8RNaSr",
  "key36": "48L6ntAhocMowiJpmi1bowE8uYF3mtwm2Zvqa6wKTACWNxgSy9hnGsakTLCKj9PLvTGd1a5wmD6ZRV5Cxd2dPCJd",
  "key37": "uyTd35Mn89j93NjkFMUM66oCmJ9j5VAVtAJKJV6msjvuzRnTeL1VmnLyzPNGWBw2m9rbH6ZZzEe7sbfeBuVzUSt",
  "key38": "4d24Lze8owYh5L24KVJT1f9swFztWwxbRXyRyoqvhEeuPpJoPUg8ptZNRAxVuepUDivaMKkQwuuU1mBkvJ6yy2WL",
  "key39": "2evUp1E7EaxB2pjdKGKXqg5JqrpsQJDLSWFBXTUueYc68FpmVPcCx6LGFKHQgWAdcpuuy6jAv19aFpKxVtNzH3jm"
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
