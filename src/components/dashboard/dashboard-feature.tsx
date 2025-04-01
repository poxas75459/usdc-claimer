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
    "kv4YqmP515E8JxT39mo5sxaqkfaKPDXTMr6LYwAZZtanmp1SXVzGMajJct8XZ2SWrbs2yY76wrBZ8G4bRqACsXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNcTGn6Dnzxfnonm7R55wdyu5unLhFRywvU7e84VmLJNCxPNuC6mVWhS1Nqz4BeHzCreggyj81sLY4a1Axiymcn",
  "key1": "7ALJyFEadYvrAeqqEjZzssxfiiw5LQsnNWxEdQTQW1MiqqQ3wSSVWtGK9oyh1L62CimN33YLBmYrBYVdVQNp7cw",
  "key2": "y2woVva58CgpmotcNQw3NPMCvxMsehjfu7ER8rKr57PaDN9ewKsEpUtphuSUpHYC6EDGQmzfm5q5kFVw4T45fSE",
  "key3": "3ySTTt7cnpriwcJXYq8Gamb15a9yMek14xT78CS5gDRUA7H1pQXBTmHzUwUuARsJhqggzfSbwPAPR9JUHEniFQ8p",
  "key4": "53zhGesKokFY3P8RovAQbpgQoHyvMb2o9K81Bxb7xyMRBgPbwdLFT9NR2DikPdszzLxnHhn19SCpaR4eCadGY2t3",
  "key5": "3JVksvUVrehtEsPYq5FaMYSAy7sCrxGZb9CqFg6n23EBgkgk99BTu4rDxtAqSBARedzbVCh3hESUyxXqBEhVc1MB",
  "key6": "4WVUbwZYjqRAZV3A3WyJ2of5uAXGkt3ckfg2RAkEVamjiMDuauFfoHUxwM4fH35vhZWeRe6znr7uiPAwEWTgGqJW",
  "key7": "3RG3UpzTK5j8KQ4p4H4yuc95rAKr1j5TUvsaD2WN6UbZp6j1vgF3hSnwACDAgvbUPBowcR7uLNrRZnN2Q5VViTfs",
  "key8": "4EbcMXifUTW125RVdn97nUUc8fe6xxhT43RUPCCQ9gkL4Xv2BMYbQwMe5GFcQ7o9866iTJhwP8X7SFuZCtpNyqaQ",
  "key9": "AhQC4UpzoAogLULxdDfHLFG3vVD8m2qp43BpaU6vwq4sWVHPBB82xdEQyQH5ym1MQAfF2ZrXcS7xJgERLBLbD4e",
  "key10": "364f5hDu8zS8donwmuDydv4qzEmonD73zShcMsBqKfjbamV6WugWRWLd1s32BNC6bNwjjJNS9Ba26pwmtza1Jayv",
  "key11": "2e9jnfi4eyMx4V7bFLvzaVQbcnB9Ej5P7aUDJZEBWqVjiNrMNKPs65viH33CzeccdwVo5eZL5cxw6m6w8MW12z32",
  "key12": "5iujKe71hTw2GJHJdTG3e9LtcfAxwz3ZJfu5Thz1bN2UyJbbJTuphkfNdLThJpaMSH28VMUoDLNuHuX5YoRTb5fj",
  "key13": "5RtvsjAxGqRvG7QDB8HQzG7TfcLpmXCbVLRbZKiiELTTknRfoPLZyndq3vcdzC3bWTLyrb9oX3mVBSC9PVR4k6Au",
  "key14": "5LGBmbob3TGeaBLz7G191zfozUpKnMe4Jzg6GNzorsG1xN7RzRpoHkv2S6kr1ZPWL2idY2rFVTVG4ZZhyUa7trMF",
  "key15": "J3p26cb8N7htY5nnTz6TdtRBnic2k5HDVDuM7yJzUgAbzyX3NYjCHek77Pc6zpKQcCSHd5rGSh1L1LsMBqxQUgf",
  "key16": "5PKN2mAB8uZKhQope5uotkFXJt2zM5H4JEDHqEoavQyBCF1kf53pDUUG89s44mgiDcJFRfJu64QAb69eBCNhoGYA",
  "key17": "5bX9LEvrqhbRJLWy36kLufqFXeyp2ucv92qh9tRCLPegPiBBKsYy3kqkkEiqSqtRqZuNeFWVqqnyoYYWqBknJL3C",
  "key18": "Ju1965HeLN58nsXiiKGB69AQAQtmtjhbw84jCiZZ1PVDAknXevX8kYpo3KmxwLEegzR2DxhWarRPs8PSGCHLew4",
  "key19": "2xHBBb8U1iVJxmopnZHBbA4J5TpQV5YxRjQDW93qp9kNgN3vqZ9g4Fc4f1Xg4iM5JS2K7MXsswjSS8RSyzknnhfg",
  "key20": "54GRtCdaituFHWHb1myLc1As9sq6moK9kGrdpMt6YYdbw8ztr7KLk9S4NGF4kPE93U7rv3q6M4qRnAckpEUGdgMt",
  "key21": "4wkjn6eB5tcaWcm3FmeyZT2vBrYLHpCcbb3c9TqZgzERz32sERQrRYJsLAwR5o4LCMNR9Zj5rKSfo2WjdQmDGvzj",
  "key22": "5qGYEmPVPjY6JTBgyVaStGZSfxFBU4VfnZoEZ1R9Krbjo4TeTVUy2EVUcQL3cnUBtYNjmzKBf48MkjRELqdGbPxK",
  "key23": "2YbAjfoLB1zqvBi92KbdggYBjuZA5BD8yjgadR5rnHM7bP7wsGxHvm6HDD9GDBtinCmcXDA4R82inoxqNhvvpoxu",
  "key24": "3RUR1Fj7Troq5AR5V5gQXVF79syMu9e6aFBSD1Bayd86PUKpbk3wAibNHvxTsXJnt3MPdHEPyn2UuF46tG2bxQtR",
  "key25": "4WTbRUh59bd8ub7xkJY7S5eDMFSpSUTwmN1h6gy3HkgAncMZjqz2Jc4JijdeQs1hL9cU73YrV8pPAMyJJxaKy5go"
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
