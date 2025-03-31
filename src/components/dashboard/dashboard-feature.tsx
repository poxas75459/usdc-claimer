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
    "Dt9AS2T3fZZAhQXj3v3VaFoVymxfiuyPHDgJJMViHSZhsagRDCz3iKhLZqU5fC96ymzV4vgAYgswHSaBqxb2N6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kk8sP1ckqumY42j41TyxvbPLhyDpjecdUw8CcDZDAZSZhd6E6ua5oXE1CssCBix5G2hycrkMYQW9mCQcTSJPXgG",
  "key1": "3zTeC8Q3656M8WxQ96mHzrisiQHDga4v3Hj2jqZZJvd8oYxDZQtdGKZMF81q6rzq8ytPR4expGfWHRi8DJgkCSSH",
  "key2": "5X87NE3hYZbY95XUFZyPnn4f9LiBrV7GcwVfySr135LXASungt2HyC1nUAgkDCza3SekQosB9CB12BREVRVy2MAm",
  "key3": "3zaMBvzTJNU6HT4UARByGG67evViPy1fBWyZr4bm67Jz7Caw5ukXrBPZxL31EJVACrb4Nwmr8odxAyqLUZ5AnjaW",
  "key4": "zKMHCh41MBGYx6PTJkkaRRBZbaV48Eo1zpUtp9KDdmupVgnARHU59HJq6PiePvhGiPt5rURPNwQmPJdDoDp1Cpk",
  "key5": "5mdmRrpHJY55s5se2YUA3wns49a6m5Uceu8bkE9roEcnu6jF5L4NsEzY6qaA6BgySCZQdVtArSLUbK5w3SFRciWL",
  "key6": "4HPN4Hi8iDSASFRJj8mLNcecStENTTKUiTmsBPuAkkeLNr5gbhKfoTQqsB9peTeAKvpPCbz3qufVgiQf6Nx9Sjjf",
  "key7": "5Rm1PaTgjBMEr4DTU8MQhEvRbWCuMQhHR4gMk4RqPom27LeXdLMGdDFKbixhJfmT5BgyfzcQqqkXjxrjEXyWZYtC",
  "key8": "461BwnyNLcSAh4uK1Fh7KayWZxEf7wk9votcdaJ7zbxjAG6MnwQScxD7wS2k8Y2yMexyVNMPoY8MLbCPEupYF7Pn",
  "key9": "4PYQzoTmHsnt6KykHnPPoemb4REBRo6AYGek8KWmd2GQjtWH6bXNAVjMxjbAoka54UN8ercBErCR32LfXyRuHum6",
  "key10": "3ryRCPUmzwayZWHRTQaCv1D4J38uQGXZPVWzEocKDwrzt86J3RG6pHHwqZ5chrUHN9WnYAQLsFSiow3n7MEky3bx",
  "key11": "2kJanpJhgPKbb2YiakFzs9tf4UXCcZKHdubsnQg9CVzT6iXLv6BHw851shtBHqM4SNDZ9v7XMjeRgBhE3Nux2p9k",
  "key12": "sVbV33EUuhVve8xhCQkWaQs77dWnt5WoJcjkSRzuSYpBo7m9AFsB5Y1T9gKtWStDE5eheVu6DejZngmAXVnpbDb",
  "key13": "HewKQNtU82XN4gcPjZ5A9BvAQvuZA21PiHcHAM7j7SVvC4MjA4rfr5TTmswDdDi5Gjhh2ZkFDtSobW14Qg9cUkW",
  "key14": "jiVsg6xQiG5dgmsBZ1yiwHTzhSWVrcbHxLsYixbpzQfVZ32zu7CUsZjCRd4vptBrmni4t7Lwga46z3o6R2K2Z5g",
  "key15": "2AXVrhys8ryyZNDoJDxGMY62KuFV9HNiDitM18icpwgWNuBgxTCzdXwpQCDigz4XYerDSZvinvWmKqdAiMQ5zsH7",
  "key16": "2zGzivqRQg5iirj9TVdrbhBVcFeC6WnoAsg9WaYVoKTNfDVRwRfzbqF2uWvYUmhUdak4QrUvPwFk85ps9sja42UU",
  "key17": "3SDgVg61wq25ntwok6Wdh6yBQTEeGYEtUfmcsCgWr6i9tXn956TFeesjFpjtKU5pV2kfP4os3bNzarXWM7HGa2vq",
  "key18": "49enCCcqf2csCScR1iKLhctvVZ87UaDfmgp5dNm2rq5HQHH9MnMKNnMFEyXdksBCg9YMJAWXA7AskssCfPfoK2Ug",
  "key19": "2Sx1EhVsd12Jg5n5r592g9WVmoec2mSZBAWheK55yistP7dLayhS7SLt7XFYKgnQWcw6i7NYkC4qiX4Zz9D3p3eS",
  "key20": "EunskmZKV2849pfA6Lz14To5WCoD2mmN2v5ixp8DVBZXX1z6gPfZWYmMoV1gjmcvWNj18H2dmdne5gkQsdLHPZ6",
  "key21": "Z2dvGwfe27uPMFMSdkCQoAPZ347QPrYoDHBQRn3UiDdiEr7XJQ821yrBKGAmUfpVrBbt9CCnf9e4hBCJujFBxiu",
  "key22": "2cgiv1FM62xLQemkCdQUWt98Yi9Go6Rgt5nm4sU8m5pxu92FYwhGBJ2pJWpFmrAsFKJ5MuYTTJhC7B3ik285bWSJ",
  "key23": "2gHjQoEhTyWN77sgPrss1ejN1aC5PDN8NSrLKrUi3YzwG2ZGoX2Aaw2wQsaqDZ9Ej69jTsMmVUb3x1RXorBQr4rf",
  "key24": "k1wyRjXfjnBdjBdhP4F11CmtcXWUSfHLwrapfinUPgZ7fwMtiEKdXMJNxMzxyy3U8NxVRCmNCTjp5TNbf5aYQ9w",
  "key25": "4sbXGBjch7qK41fWJcD5HMTn2pJFT9c14Ljc4QvEEFX5VMzdq6HZBGBHKVxtHGus3g9hEf2TfJkE15oecrEjdeLn",
  "key26": "5RwT5Gcv4Tjjb2DbVZqTrbPppGDG7a8WQq4s4qbcmhkq2njyJm8VjGqZkN75jRAh4NNyJAk9cHZ1HmZX9McW9Zsa",
  "key27": "4JHDRcPDYB7C2HxK4s9mqN6EEgHTJy8jEyAJFnLxyt1ANTsQQqe7qoJ4AndrJb1qdbcGzrLpkWtmCh9LTyt8nPRF",
  "key28": "41DZda4BWvo1jW2m8QqDLa17SzuY6vDfHxiyfmc5nKv84AZhrmwMpkLsnfmJRjNvwAe4jpzYA9duUopAfXgmU2Rz",
  "key29": "3birRGQxTJ5Rp24RnC7gM4MnWJegde8Z4Wgaz3U7S8tZvCXkatHYimbvdEdvCcGUh8wpt7LbwJuKvwExfCqydHKW",
  "key30": "3b3N7XQemZbH38To3rnXG6w5xPtnXr5D4YZtZBttJG5YZCeuSBihcqvw1z8cWQrZbx16sMXK19ZPVQV3EeAVbkcS",
  "key31": "2NK7Y8BQ22kGsBK8jPWvdaXNFM282dscBZ9UZVecMzEHUMf3vfp7fvP4KxkFUiwYS7PgBiFWhT6BLhr2v9wSzZ3e",
  "key32": "po2hQqdVBgmnGhgzcNMd1AAUL3kfLkW7GCBobxpTRT8zbXGDr8g7YQacPW42XDC81ZKF3eLXxzcF4H92e2BzRkM"
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
