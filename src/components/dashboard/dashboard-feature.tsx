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
    "3stqNrHcqGuYwMZJSAQ9tsy3G2f2ecxHFoUfMvkU1xBRW38j7KVTAWC8jGvTXRg7SuoK9fk9HzfprKH1x22CH6Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ND62KEZnw79NPZcD9YhGnaro2rZTvntfLwjbMWUpMZMcmm5Car1ZgvjV972pbvXLGG3yTAqczzpr8Kn4xCiZoyT",
  "key1": "3fCXBq59LCQ99ghhUz3u78vH34AgMbQAXRxNu24eoXFgjRZ2Y6vzFPZjQBfv99vj9NSyXogbYgvpV87c1LfpKbVR",
  "key2": "37GUhFj8a7k9EsikqPKcp5PRVC2gZYdwK2QgvPUfupQukHcA6WucV8oqxWr3RgMWzmQNEHE1N4JpZoqhDNr6WMzv",
  "key3": "36MzQQWLrguw4pXHLD5kz2iwM1XPmyzUH6mumifff4N2DtDZmp1zbZixyfNSkm3bffGNFiRdRdrkqyH8zRWNL1Gb",
  "key4": "2opFNehLfBc2kxPs8JxWm3cjLjETZ6tTtG4CZo9WTgnYMBQQibKRbg36ckNan8B4gGNvdB8umSMXFSzMDJBhJfKq",
  "key5": "qhZavoMvc27NqbazYdw25YE5uGVag2vNdxGo3C58cMs3yCAgXozQWHwDtNED3xqE4HjnuYFzfFBoR7dXciiNSDv",
  "key6": "27qfEuG9K5G46VuXYQ6mjwjBxEPcsQ6ZKRFKc4sM6bYMV6FSPr14BJHU1VHgKmRVUgou42CzpdaYF9qf8GLZwGc5",
  "key7": "5EGVqxpPSzwMgVc3gTt1sXaQJYtzbHhfFX75Xn36bBgbR29y3UZn5Qpb1vA7GPfMBrLdkUWzNXRUzHLyFBCyTgEL",
  "key8": "4gMTSWoeXwZpB4Dz6fWyQ1D8K33MscnTRs58L5LvRt1Dd9dXRBrBaBeRE2z8DfVPwruDbwDk1eLwabPF3B3GyDf8",
  "key9": "49ZygyyfC6Ug8WXGooYJ6uLkzjr9HzLKWMqMSw5eT46o4vUkLG8Vd5Bycmhrn9iLpgyJwhf67hhCoz6x3TkHNmrd",
  "key10": "2yQFLruXpmZxA23fP4aB6tzN9opTDP8kjrBY4NepSaLJ3tBHXXwxZpmJLcnfmH7cxRzmmndZL5nfjGT4yZnJ54jn",
  "key11": "4TwAGrAi7yRRjuUQt846mnNmNcybfra9VKT1v9o9bMqYiJ5vKydAMZgYAdSFKAjPjH3Lh4WXrs7Xbk6YbEXKcqEx",
  "key12": "5G8LepcEdsoVpQxrKW423kyTh81US4vgrYj4UXm2LoHPY6QkkXZKQEFYmrWDgAtXTj1JCoSka8UPGAZZFJanMBXV",
  "key13": "2Tb6uBaBjiaKojfLLrsUr5kT3KVfyZT5PhYb4UACZCjdozJuU6wwYSuthd3sctENmVdYqPijUy2ybzn41SpeM5Fm",
  "key14": "5Q3HunYbuCuG64dL8cNnmP2zPcSKtJSKvBL3TsfNC9g5MYHbDGxbtYCeCwT2jaHnWFsW4VSmTgyfK9S7575wVQKD",
  "key15": "3MjoWV86rVBtovkX17RmHRkKqRDujARHbfCYj2ePenWVZyzWWhng1PBPfzDRSUaT4XRfuzM6QbGgNJVX9uTwfVoA",
  "key16": "2FExSLrQKB5n8sbNxu6u6dmu5CtPXGh8mZXtaD6YwCcyK9XjFHS18reqNbaXbVnbU6x6w6CYj4K1aWLvQkZfJXvr",
  "key17": "58MH3jXbRVPmiwPy7vwEhF7r2wvhucXqcMg25NkKcunJY3RK7Gr5fvgQk58viFrMmrL8zTHoUpZKAbAVpUKoWBrr",
  "key18": "2BBb1eoVsKgsSJC3y2nQuyZZgmALkHyzuGyr94wtQVoguhsRHCxTNBJTxt29QpCYCesJwD4uVacNvmiTzhxVzknX",
  "key19": "4siFAhTkARYR2iNoUcFNziFbuFGQTfpFaWXhFNp3yzw1YcZ7dAboda4FP18YMMR6WpBejaqrPncC5xmzpoFyKiGg",
  "key20": "65Q8zF642qdU8VAxVgjL7V1gaTZpBNRbTAK1JL73F2Y5fgz9B2BiNjpEfhzzwu8EbyA7or9GrAgUxbQ3GgwDRL3w",
  "key21": "3JgWdLpdW3xdd7fEfi5dpEZEj9CG6iXN9JhtcdoXrDNog37JZAhSxYMDhZL7aTFjJDhroci4pzdUDdh3VWxrUPND",
  "key22": "yvhpn3sL7zFcWMYgAdpoQek1Kyrvak3QkqKNG7bunA5eecDzytpDRWr25Gf6hfzpXjt3BpS3QTDGMWjkEp6tGdJ",
  "key23": "55nosMVbhZPMp5WpKZqreoGvYignVAcZuzvwKbMKsZXkfdTfE2jFfq5FxTQMMTyZkPxfNCy29xNTxsSByCfJgwN5",
  "key24": "2DGZS2zZFPLiiBBv5Cb4Mgi9jYHxR7M6KUWYjhcGWawkLXq9EUAtotnVqWeCrPsm91PPrYeBTYCxM1sF9feUgqZ3",
  "key25": "2NQ4VwMbag8jAwHD4daaTqKk79MWUwf25M9A3pBHQ91zJ48DqkqTTtBVeMnpw7dDdyLxVyH5W52rTHakAyV3oKZ7",
  "key26": "xBwrmfepTVVN5khYNxcNbKB6YsCpqxJHc5vYyT84MXBpom3EMUTACiwVQEMKmVunNEq4X9rbe6UL4VcgWb2SDSs",
  "key27": "4ohS59P3BGgdRDMswyLzreHfd39bwC5bVbqUutoYdV6b8nZFPBdH3vCM3RBcQLwuTvSjTPNLmeK2Z1cduK4xvorz",
  "key28": "5NxPDmb9eRHkGxDH23qcup9T7WjiixvkLeX5kEw2e7bCNeb9VjjFSAtxRBZ564Mv6bjWDuc8HBah2cVvbVZRs7T8",
  "key29": "4iqC82uXjz2geUaQeLfY5QxyQkJG9s5dcPvLxn8noxQp9unCM2bCqawnZyJvWf12hSgv9royhT3u29tC2jK5AFxo",
  "key30": "5L89qJYYKWtVdwCoCsKgTzwzSsRxHkqrxa8FM2i2W5Ek73TGKiu3hM55L7By6xEcvbYngRSk8SEanjDcgRJyQBgj",
  "key31": "3WCtkL1EBqrmc7pzaBsmMp8dSbELcCKE1kkSNwMafrTNZVq5vTgftK3PeNREmCe8H3SPxSC11fHacS8XrFqSQA8J",
  "key32": "21V8j338xpbs7fqFbbKEX5VmicsGZG7C9rczkACp3EFNyrkXFHLYTNuofHYFSRUpDeUgRCSscJ4dPWsSmqvHBP3Y",
  "key33": "3WaY5EpWtDsRiCaCLTtQA8bno3DRrs9b6q7MMcCiYt9x9NiL2iBVVEhKZ7krm1r7nq2zDWiF7ekoo1zmgMDVx4fn",
  "key34": "2dUZKJvGGqKXz2rjHXSaBE3WRKRH1Kc3WRQKsXMUJUB21v1vpB6oUESxhEjo7JHit8MYH1Lv5qWAjPFvtF6JFaxh",
  "key35": "3ZvLFvQ6QZm5uAFvDf7YpS6NeqrBtgNZ6V2gr1K7QMh7EWpspzvRVvLfM91ZT8EWXrhNm9dVBEhRcjBntCh6XLb2",
  "key36": "2B7fqy3emPpwLRpFvg1Vc1k7Eo4tHsRTn3vUMmSp5EYu42N9dVJCMqeoHiYoh5joRk5Dvp3WuFJAHN4gfZWxMEjG",
  "key37": "4zb4NqeS2BHrwuSGfiSTjWuAcfRrKACHr3NRajUceKa2f8sMP7Vz3PCagmsheuviBeLF9LBoZR9ySbMjYSpaRcBQ",
  "key38": "35FjoYHfGdpGr1z7gCzQYgMMKJYRE8oLHR1SxAG4AEAdxFN3REWsquXn47siPGFebZLfg5CF7hFKtfWJkfdVKNNK",
  "key39": "5gWUARShuyK75ESi1dtuNG4mmk3ahLQ95fc3SV1DB69tD8GATwXQdf6dTGrfhSdTmkUXJUnDYn9bTTcdufwZqoAP",
  "key40": "3MmcnFLQdLPfgDVKMgDGBaTAf4CxRcWkaTvuJQiCiCRNpWfTEifK4dhU349cusZnKgipgTNJkRhNWGp3UNGAfEWB",
  "key41": "n7191wf858u8CWuDKHD4ue55rkoLKK1WNcPe7jhj6n5cLBq1iCWnQhahGLT7WCzv72mTf7RE4McCRzsXQWSPbWf",
  "key42": "6sXPn4BpNJ8kemVhTK3gH1aCtdZDF8Dkxz4x9RvLxePW2bxaGrvSqrJKywMNFvyeM8VvtJgWTkndifjWWFaABep",
  "key43": "3sesBkAu3Xw9HAWLqsTMTyPHNZimAenj8iJe9EoBowcXryqYXdwJRA9zCk6FUdkua5FLYbbdsBTHLLWPJyANWPd5",
  "key44": "2LbS5GXPLKf4V7MGbS8cMteDzKwWkoMfxzW2gtNfpffT15cZibbJfac2YsZLBcpooA7rkPKTyeLZu3onfsn2SCSk",
  "key45": "6v3hGwTa14HaEWSUhJ279zfibfuLWryuv2QiUvpkjs47wBSnbTVLrptiVuUaVZSYLz85Nbn999etZJRUQ611mWH",
  "key46": "4UgK5S6b1jpDM2r5tRhAeX8Rs6BNzkuGQU2bQhMCXooU23dcp4X7LBySWth62BoQrYi51ucfdyM78XX4yQMoU7Hd"
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
