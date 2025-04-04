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
    "3oCaNy879DobJgNL68MQ7zmFb645qYtmWubxqgUHNf4chxkSgTw4PAxtTm9xaPwovxAj33fjEykwZgyNQMSYQ69a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGh25W7fZSTvUjYtpmYMytnvDqFJTx3322xsy5sWumw12wUsASVgd9XnwQZAjDx3T13KgFNcGLohTqVkF83Ec35",
  "key1": "Bp9xALNfxjhUWKLvSxN5gRQmctqsvdp2wf43Rx13wVXaLB138Bk3RNpXDaX9zJqE7yQRZrPpGjJ7PqSDvw3ob14",
  "key2": "5UyficLu3xsbp8uvGMgwrVaCm1zEybFtuwbFow6UgV4JsdQDfS234gP16cUXvonE7EwgzSjz2H5Lou3AjKMLaQQL",
  "key3": "3G9rJ6WuZrXnJcHXvMh78U7o1KZmSimTy2sC2tbSzgqKVQZZp67qoBYBanmdCdsSE6g8K3qTHvTGFYARphMdK8Yb",
  "key4": "66dYtrximEfPWYG9LfqakUANA3u2SfLAkxCwm5vdTmAGP4f5iEARZQbqf8xrYobVHwGyxyZwhL4T6NDjMhpn5sNU",
  "key5": "8wsH7uzexX7W3pDjYAzB2tumpcET47PZwUwZhWJadT9hSgUJDr8B2f87CHKXWLsds4zmN8nLSvhn4mAvYojnaGR",
  "key6": "2Wrj7NWqKLp6urrk6vowPZGVeEq1QnaFmWftE4iH2ezTunDqTANiRCj37oxMX6XBSKR23dQDPv4j4k4aYmkVZvrB",
  "key7": "5gYJHE7gzKkT4R7uNaSXu4HPSiudBDhYTrpytqjjSxNwffUKz4A4A3zmqZtCTMtHtZWaP12vdrKYxPYYmy5Gh2EW",
  "key8": "5wbNYZKhtjuVh2usPHDFrsPvBH2sikos2oKGKJBBVbDQnTPgCX6g1NWFYQzDsRoiMt6dQaGSqxLhX729q1JLJ26d",
  "key9": "5BgCR9f6q4WEDxfWEzJ1vCeMXys1Nebyj4VgozxJTQLwZm5cVMxMiLhxxPjULotaoQ2TFKXVGi1BWugtGVqvEiEc",
  "key10": "X5a77zWXkAwJQRuBJzoqe3e6SgP3pr2ogsQ2nYwYDEdRCW9zk2oVB18hxcP4RsRaTRQmtFFxdu7HsyokW7bWvh7",
  "key11": "5Covt4aoshYvUP8iThW8rpHnbdZjw3rNpaXaoChpPwFKHhWdtNg9SD8B2b8t89z4jo31XMJTAZYvMNjdLEirYx1K",
  "key12": "Sn358B5m8HwYovLFMdfyTCcCs153Av3NM2Q8ERYaES8yTtohuNYyUamix9mUZveSUKqGHopqVtctAz3TM862Njg",
  "key13": "2QFqkznoJSQ2JwwuT6WnAqmnR1JPcr4ozMNLtaPCtFCi44YaEV6i6sr32ExHNt47bVsZ4HC8Noc3UL3mTDtyCui4",
  "key14": "5fHWy6PU83qs91fgZBQCgSZDsaaR1MSVv1C1gNF58v2cA2bLvDAS58yvmvaqreN9Z7wQmqYzTBDrP8jKmLRXPot3",
  "key15": "5uwRNCbW6LCsV2Gec1BJT2jB73WNvsNMBPhmcmVXH77A1vkNenXcYyu7Vg57HJZcShrwoxTrPAMSZuEQVLMJWHxu",
  "key16": "3i3tP4pce79iWa1KXKjmgheoodR7jcz6U4jyzY2f1JccgCCtHsY7rfk27rpr5n56NidnT9s7aZ7z56Lo59LDmo8H",
  "key17": "5jzj5BXChxhjr7VERv3yKjgxA1DmaZJGc2MvWbixwqfhyHCVkUCCHZ3AGG6FArAfva6BsbiteazjHPe6KGks2ukc",
  "key18": "62QpxuG7TzgZRVuhZWNou3zEAx1NX2nwPjrRw5BZcdgvYvJkYSv8BkHrUZFpiLrZr5RFY7XnyUo3WxwKW1ktVbUJ",
  "key19": "5u6BjfJfBSjV29hoyzopL23q3GL8KCmM1ic3Aw25tFJdznNSUNUGgD93ht6T16SpJNH3Tup1HwoFrW8Qh92nGz32",
  "key20": "8Znyw2j9ccYUzG8Jc7GyXds6mBDp46KXnd9YZ28WZzHdiKhYV5Yr2sAvFTW7yD3ktiBoMuEe9WzSmQaybmbm9ti",
  "key21": "5CmcBdD8XnEbxScr2eBf9xsG937WdHfjh6AXFwZRsxniUEkFstkYKmvpxWwBYo218UeK9KUn4kY1vFqGPHcPXEJR",
  "key22": "fveVvvvgnfwtrmb8YeEHqLn75p6wo2X9U7S6Pkge58FnEvD5uk71khohBveNi4XQKgzDvxdc5RF8u2HcfxfBzNm",
  "key23": "3siTAchFZC52v6VgmUpTzk96xEAz8rB7pR97JQmHPm3mrYN4xCxU1foCipjPZi159gfxVtRRhmB9Zsy52XUatVtG",
  "key24": "5ks7qFeF55dXY647vmfwiG7tDcePQTb8FudKJSw25qSHE6b1VopNqqpix2TFccPgwQWrdX1Zd1KG5AB3GkKqSu2z",
  "key25": "3nsVmhz5t4T4juW6okoWv4KmnmSxk5gvYZLCQMp7dXQebygSGmycADf5DN5w46ZgLkyHZaS2XjaEFcGMctzauJ4n",
  "key26": "7DCZGTBm41ENDA7Qch1uBFA1JpBWB1WjMW5G9rbBowqtgWZieb2qv2kPD2Jd2nifvLfevU2mGdx9gbzfifGgtJj",
  "key27": "fmeFwo34R5MqruDMVwaufyr8qYmtUonZm1n1ko76fevtQTY9LoeRjGf5sghz8DAAKULxS1Z55B7h8dUmUuSdB3y",
  "key28": "5jEwfjX4Bo6hbyPLF9cuKHUF6gQ2jqHsXEGmT1QT3vBLBuN185Qg6ZRavQNQbS7tvad5ENes9cnHhFJxzWvkbaG1",
  "key29": "3U6coC4kXMCxhYYqyGgk9bpXa3RY3ePfpkTJ7His5J1CseVS3f7rGdiyHAVaf2YfEtT6gLS84qbxhqHaBXxLK1bp",
  "key30": "3MW2gc9viD2A3xWJgUvHydX2U2QuKPkmUR417oKF3LKPXNNzNb1H4yopytmNfh5CeSvaGWEkdDdLtbBQh2Zf8YKm",
  "key31": "4ZnmJPEo2rgQnQErbNoWFgkUqSFVSt1R7fVmiJEAUCxdAHSCdbdr3gJ2qe6XKAiDGPy2GB8PbfdeJ5Fju5ubSt6t",
  "key32": "5MKpAbCASs41dpojDK5uuTLRsUdr9qq7LayepJ2eRLPMqCLKQe1kYeRU2YyCZSB83A83M38mFFZwfkHEm2rz3b1Y",
  "key33": "CGDCnNi8xAUvRQUyzFuxenJ6qskGYzgh5NT8MCwwqy5NhJfQcAxmGmWyDJhsmaMbR1ip3uDhBKjfPJsVC9CZyKq",
  "key34": "4JRTFcyUHYQ4W8SJaSg85uxkVYfD52WnReEeBUsaoFoynLzswj9NxxY1gQqAvrtqbyoNaeDXNUB6r1t7FqWknA8W",
  "key35": "4inaEcvtGRbQSMeuuMRofAFouNZCUvmNXGpmAiff1745122NaPze1YKwhz6qscWcFinJaXUY39SP87iEt4G69bib",
  "key36": "5bhi8juHYSguGha9BvBX52Wbw74zH961siDxsCAuvrTqm72jLmWoWXdxJYuv64cUxC9XsBsp6nomU4yvQZxmKKe4",
  "key37": "2a5gAZJps6hVsMvVhZtLsuaB6Bky7n3qsfVB9wLd5AdDcPTvQUrFD8B1wFujSPLAGraLGjPygUmfYLtkvdWTVPbp",
  "key38": "4AP3jTTFMQgUkDWqDiiFHoKyjptHRt5ZFQGSZhvZbKs3XrHqKhi7AaaLWC3a6jKjwAFR5TpSvmbjK84eqdRFnmRH"
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
