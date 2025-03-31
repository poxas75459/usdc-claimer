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
    "5QVXpo4YC9ZNzxXtUTd3cHoSdWA7x2rBoKM4LNmpYSiBcDpKnJ3nVvYLuWGWR4k1CDksBBGMdgFTtqhFjMG679m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8TMWEqzwGVJAWPtVDqyyWTHnEfWnyTJpDor3BsExqSTypy1hTdZ8B8VNCAYmkWtnNozj7twRuVMJb4FeS88x91",
  "key1": "64pUasSDS7AnFudEKFrSkuhCdtXH8jXwNEDNpCFEEvdEn6D5MptowhkowWHuCiDZs3BY1QdirCDRJFpYpzz5Pq18",
  "key2": "27gwCyfToaSX6173ptpU5J6T7MRuR5g9hTbTbCaDJcKhzkGMbiGj9KSSURDPthxddiwGrSutZShN2c1CcSEvgBrC",
  "key3": "ga31oLMwa2UvWiNSUEJdaH9aC37eug8u41iA1AkZEavVmpHK21eyX6rAfk3PBYzFvXeHy3BFtfeT2vjjpDwS8V8",
  "key4": "5WfyZDkgq2hRT1CiaBgQ1mXaouc3TGtrUpmB8oZRajENSeNLnkf3zagFbM9EUaXcFSmRBipbhmmHKDGTHfjMP3ep",
  "key5": "42yAfWdxQ5ULgemKBxQMu4Qt6X4zdnZPnL3uasBd6CvD4PonjNwwuGbcDqKbxe6eRPtzkZL73KndRAx8ABk4nzvz",
  "key6": "3oBf2hvpaoP7od5iYM56aj2Bx1w1HokXBfSndqQi43xf5n575dWQtqbeZx7p1sxPUmdmSs8LfrrMtRfHN4eyXSNc",
  "key7": "2uremR1Kvy6HwudwEwgG77ZvEQ5DYPXWUj661x1TemaDsLMh9pYFAuEyyzsuo3taNdhDNSaHJH1yiXnLY35NSGEp",
  "key8": "3o8aJQQTyubWDhVooNFBaZN5aQJdJ3RRfpEapm3yV4ZB6pf5wh581A5sv1pN5N75z3Ap5UW2pfkEVNMRVM8vWUgt",
  "key9": "3YWvCtt9RiLsMcQa1gcAZqELR2W8rLwiGCRtJCoeAZpF89ykgv6Kbta9nBqEUvQixEHLkkiXxh8G17UZysRTCrz1",
  "key10": "5whocJi3ynYxgLPfVSKbhP46mNWVXKgh8PGCe2r61nsDXsMBn18VGHBMjUEbBZpZseZxc6aM34Z6FbbZhDayTBXg",
  "key11": "xWAxZn6jobXxTEfmjPNt9PCNciD8Y8wdWCSePYrYTJbAA8TqfutU6hjP86T1WegLYsBrAknge4JFJPpmzJECDeM",
  "key12": "Ukfo6hgN7nKL5BepH5ttuhvYsr37aaKP3bamChrU7NJNLZD55fq6ydq635DFvoh2x9LYWLqAQacyM8gFHq8xs2U",
  "key13": "67orwytXbQXEwDteXqRMTNkhJsYKQeKxmjPDnJpCW4vSV6DubTajw573bKW2VXiyK4zmysEcFsoYkCdK8NiHC7tc",
  "key14": "X1biSnsxUZDSMXmsdugWQ2QK2a23jZzKTz21V2Kr3aX2FHBeWoujweD8yQBHqH1ZxKMDojLBr7bcAuqsr9cuHZJ",
  "key15": "5xZ5W7erKz6a2GHQhpBHAP4TkoUkwG7bmKWSsM5o17HuiByQAW7yaHFTGMvYjNZHzb4cAsis9VTbZWem1emeAyAe",
  "key16": "2LZvWpmoUGmANvHBCcWBZ5fhu1jQctEyCz1EqaN6Ywd3bNogqYWRPDdTuaDLzC1AiqhXwvaTAkcT83tMzaJomWtv",
  "key17": "2Q8kE4zKyx6FkCXo1zdhmL8SjwG6LVndz5hiRRoSnrDhDyq1Hi2NxVo3297x6SffQ2i1zyGDDBU9hc11dxBe4vBv",
  "key18": "3qL2W7A7GMj8efh3JVrBoWBaeh1T96X7ERKf76vLeVfUnjSFiuTEbsF8fFqiqdQzSKre6u7nnB6hQAZQi48sDPAE",
  "key19": "3tKnxC5K284vQGBkovTJFx3GwHKfeRYz56QRCktEsasBNZybt6vNzfTLm8AiW5iWEpRyyk9BwHb4ZzmmMGZ3qUrz",
  "key20": "5EBgmKn9S7tmd4feQWxurDe82rwDFTFNCqgo6Lqew38j8DcMk4XLtf5bcj2bBMT69KEvHg21D5WTYi36xowWstti",
  "key21": "2WwBg7AzkUpdAytseTVCLGa3PQvF8Rgz7riPgxQ3ftCdA83e3DfjWEJQLxDE2AWVa22Lhn33jXu4mTZ1u7E7sSeo",
  "key22": "5oPbFgKZRvM2YksaNyJCfonrEgBACLY92KXxm5RAoEzDsdMu5kVx6A9h54NgaaX3sq5csbiwL9yhvogMLjPAuYza",
  "key23": "52DzaULekax7jSgjoLpkm6AYCDrcM34bRNw9zV9j8ZZqmhJfSQPNUgGWFJUy1WrA1KJNEgvJvUdt8cJoj2GdiBH5",
  "key24": "ccftvb6mqxxUorzSg9cTtAxVghUzAfa5HiBHpR6rK5JGUwn3KZMcsG9gLS3zg5KZpxuJun1ge4vUTGrow9Br8i4",
  "key25": "3gHkXQr1hVLthfX9MDTRPqqjbcRV14D6vE4hQVx5ihbX4hSpJX4q62Qytv7yddxzeU9oCxU9mhP47FHQXGWaphkh",
  "key26": "3G1sGugCRhoCLyAQdWR5QjCACrAAvUKaJVtqJFXRjgBbcMvMTRdeXvvTn8RM1zTejoNd3Q9MuH5kTqx8d8QNn32D",
  "key27": "2qPpiR9EvRRkDuDdocZG7AM5pMrCXEjCiGn5nhGApX5Vow1GWHMvkutiV7ZZYLDc5uBT5N95QiQrbCaWXpPtyCfu",
  "key28": "65hRXY9K4nThc2rUXaRz5WhRp9vtDSyrGgcGHyNdu4g1FaoxyPuD71zUBYXgX7RDdvQF6WDGRTDu2e4HivA1rzfn",
  "key29": "5VAKJxH8c4wx6oSMEoT8g5qri5XssEmi7UD2uLc47WxLhmvnNSsoeWzL3BsHye1YrYLcafBmJphknJSB32UiUkFm",
  "key30": "51grws5T1e2QTLCumzoAMq2xj9sdNu7GrDKZdWHLcH2Rr6jiaz3cfg5dusYhRvfvRoXxkaAqrE32SmTmQNfnijiE",
  "key31": "psHXHyhbeYduaVnGNLVwYRFQx7t5WkGs9hdcrJDwioApN8rWiLS8JN5DYDFDGyDo2iQqtw1TmGXg4JamwTB1aVB",
  "key32": "5VJUeXobHTbfJQMnzffNMybK74F9a55FEkLdDd6qCRaKtFsqJQbqqQHw5k8RFqaLtg3ZV7TDncBV9Vkj7dfynoMq",
  "key33": "336tfjnsYXe3uNqiAMiKHyf8AaDmGMMLrHGtkBUtvwJh9F5Y1XmZs8Kp2k3vwzpdjYoWSHC5LiDo28LYY3FboYHg",
  "key34": "3bQ5rHu4UxGDoo9jjaQErXKq2PNiPuSxfQ52pYNpz2ubZYx2Yajr2DCoYKi7BEHM4o9kP81eiZADY7228v7VbG1A",
  "key35": "2aeuj3fcUys6SCd5HTFTUgU4fBvRT31WctKxUostmD6nxUoGagBkdZ9n1WcM3pbqbuk7E6taGf6zeTdSN2irB6oS"
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
