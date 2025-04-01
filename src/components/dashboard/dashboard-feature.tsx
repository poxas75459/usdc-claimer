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
    "24tyAkGeigj2dBwsFGFaczQRsZQAaHkFtecePz7fjAwc1zQiRiiWhKUMqEPkbmLBDAih4xiWEdfoNm4suDLiCCiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiLkpPPGpLPDCGL7jJHGYrzMxgUyLzJ5X5pp5VPA4RjhhCBsRKYe95CqJKkzbXy74Ho1gQXY7JDFFXLp21ohAv",
  "key1": "2ETFF5gY1D4poaLauuiM9rmJoDSgn9k85gLDg8sPaVXMkwuZY7ZnaQuVkR6fcG28F6K4jQjPGsFbUEsRRrmynhyM",
  "key2": "LJYg1jBtuKxV9BXhRW4m1kUtRniTvyUDgKe4GNkVXbrZqECGTd7owxfLwjaDN4oPz17rX21K2Hjb9TAW2KxAqiJ",
  "key3": "4pdBXWdJEk9RrzJ82R3zwdxbLtdua34UrqvAyKX2737res95M4dMcqCi2p1cAnRFUN55MpR2PkrovCT99kTsL79h",
  "key4": "3o7rNajQ4rfTFQdnNU7VmgwkqzQ4F9tRYSndHgUEE9WthubLNCtGqGqtxxJn4xM6nSswEsgCareVgUaD71BwEKox",
  "key5": "3dATZiNfrezq8V8STaYRtgQEtgW5zuZDzUVQASSm9baZmstADKfzsDQ2Xg91NjY6VGS4EXLu2KNUYVK1A8mvZvmZ",
  "key6": "5FYoBYBTgKVCrBykFZpeaFs3j9RBmTcJMmPhh9E9a6uNM6XwUaWZ7Fi18w7tzJYaGAp73jHTx3yyuPgwigaLKmrz",
  "key7": "3EPn49KKqKTkqqkn9g4jGuJ7ZrRFm6w2YvSios3mHbYC2kBgV7xVon9afpNE5pUh56uqVqo7t5nTWqy3PrBi7tt8",
  "key8": "3knVde2XU8rRwmCciW6F2MpkP1QCHfmrDqQyE7RpMBPNW863dcim2gzn87UQuu2sSA4qMEvY3dwujL7pfzFZRFYP",
  "key9": "4vB8JREsd319uXLYLfFVABFGmwWefL7wMmwQZWKABpCWMiyUq8gSrYDacHrBSwc6viWdRbaBJMNvudqVPGnK4Dwq",
  "key10": "3hBcsNrY1SJGnWHbiZE1RHKkoPFKuTUF8sohNychf88mNG2JPPG84v7Do4ai5iJVPECArSHheKb2LDcaLTRvTJTc",
  "key11": "Znurf2BEqLtcr532DBguKnvhj35K2sUEcr3Gvx3UQ8pSgk7ABxosqA3yyNvvNCeMEaY8mexKGdZA26yrGaWVLzM",
  "key12": "A7CJwyrL3ByatmEauPYkz6CemLri8gz539QnSERN1uTfYyfdHZ17Lid3hAPnAcu4sMi7CojnMtwec23uNHF4Reu",
  "key13": "3GQ2jPjRQZXxoCpk4Yg2BY6SAVfa4CN8kPMQ2cwZJMATYaZD3EcLuqSdfHes3bPughEtVLnPdkM7fpBnqXRsYEyo",
  "key14": "2qmFWivuwTnAYFtQeSxKE6LihJLbggAHAFZoq9zBpAGDU7s1rnqNL6XmFYbpQ1ujv2LisaPsABGym9UuFX4MCAke",
  "key15": "5Z91w3xifHuM3K2CAnXp4MmXTcNpymDPvJEz8GptmPanXKRY3Y2YLTzjZJdaQvCn1GCQduMbwsNbA74khvnHihDP",
  "key16": "3kMxWhfj1P21QuRWzRGDwS3g8fM1nhNDAXafmXC58GYaGzkiV8efztSueNMzDBTGwHi69jeuBNUu32CasVug1hX9",
  "key17": "WXCLMqHK9R6kdXigKzR7cJNSfZSkYWVWEdyaNJmqgVBkczK45WiRcbkExmEWJTaPqFP8wA1zofNfXmaziu2wWha",
  "key18": "4QGafxBW5nwBiuvdFk3wsrNhQo5cRSvVkhHmEy2pyXJwiLawvCu6F678hz6h39cSt19eu4uGq2KY7FYvyUvH6Ji8",
  "key19": "X8LRnoCkXpxP7vFa7T83Ei1MFdGpy9YCeWeXWV5khycMpEmcqyX2U77vkeEQnNFdUsSgahWLk8jY6fASnvh6mqP",
  "key20": "1e1ehBraq5rZqkLWkpoHLnyr16ivz1qwDYbh53QnehAvW256YDtmcvs76hGr1LFQnvWqS9zR9dfH9MG4h4niAVs",
  "key21": "aNcT5hXcfobDPBU7AFUKvWSwH7GmMAUhFxVSEkSMze73uhgnj7YAFkiHfYC1PAbmPZ4sd6sqLzSWziBeKrGGupU",
  "key22": "5vKU3LJTB7F2rWFSgxqjwuWLB6Hd2GoeFefZ5fhcGiDBd71DjefjyX2jeHfhT66wKVE1Zs2xQKXm8mMbASz8xXoh",
  "key23": "5vfUUEcri2g2sKyq7NhokrRzFSS33LrvEPasE1NHaXXT9QeShhFiJVuMHZJ5sKTE3mCwxDa3hM8qj55CpoShEP4f",
  "key24": "5SraawKRfQaBeHbLoWf6GJhQPQZMUqG9jAyaWwUTBZ16vzL6yoTmiVRNs7UPXdiMQiFWPjBYGWjymFkSAdJJXxq9",
  "key25": "29WAHohrcvkgvYrzEnxypMasFGiCqScNdRdPW7hzi4CF57Q1tN4uDUiDj1rK8PSqMi3D6ZbcYw2qEzQGvLM6n9Wr",
  "key26": "2NYuMnEnk9CsB4dbhsqPwfMSt6Hmu4fdfEnAnyt4b1HP7ztwPXsaaYKL31kXavGtaREeFwjoVmkETsy5aPKdPgEM",
  "key27": "57rRGGvWK94WY9hUxcv7xzxMALgXnU1t9HHpTmyr9ksuQPcmdr8w4RPGvYFNE3WZLDc8miNwGFD5CufBz98ah9P8",
  "key28": "5oFrE31MPj4BXvutF1vj94u1CgMmaQq9u2rDtMPo6spgJaExc6tx5V5S32GZJX4VgRUViUFVRdnCf2wdrQHDUvtJ",
  "key29": "5EExuFU8Re7aSandAz3HhLwDcLAyaZndu4UUNJHvy8ZnVoha4xaRrTUMZyMe24RkoVitkeKRPeUidKoNkA88c1A7",
  "key30": "5BrHjjc2va6gdLEUJKzTDyuaVxXR2VitcgPrCqV39Gx2J3oGv1kV43ftYHFjeiTGy7n7WexzP9HAAKTAcWEavuMM",
  "key31": "4gEHEq7p7gzqmFioyQkqJLn4owuig1wGSaYXb8kDBRYgTVhFXM5nKwTyQi1ceo1VrGeewP19rUZ2hgVMrDVZZ3KB"
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
