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
    "5twnmFTuQRiEX8xUEZNpd8SvRs5MR5yxKrf5d1QNhmK1LxGNffoHqDBdLQAjgy4qGLNR4drAUhiNRjUWb6gpwzud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnHD5V4EGrS4xG2K3EydFS5F2f1tmRpwN1jFEgeMpZVzjnkVckre83cckCwUPh4AhdciRX1s2QhdLa28C9XCvDF",
  "key1": "4bMVdChCpCHo9wHR6is5Uc7DgqxdTyakLv9e3mf57CX2QgE2roVpfdoHJ57nSixoZrainiDbEw1UkTFxpUT5cAB9",
  "key2": "5gJSpKxQrDwUKBMyjtbJ33BFCzkztAX2UcZ7UyTQhHSGXrtDSHXZdtbJQ9GgueQhmKvecfvF5aT7EQPbKohkwm6L",
  "key3": "jY1czfCxEk6BrXpTvZbp1xQGYXkLFMhDwU13RTa3tacVvh4CmhnYnESxSNxQ3icCmF51rFwR8P8oSL6wr82Zgwu",
  "key4": "34ve45Teb92zg4Z2w898WaEpwxoPYr4SwYuVNxiWXgRKJDtuLnwqxbNC29hJzb3HVMi1Gb8wMrssq8LZuEshjF4K",
  "key5": "4h9J5eqZbVf5g77U9oSY1ncpfYJ8PNPDE6VVKxiqCp4YFgpVWM771F8WPKpP9UtcZLGdE19DUqSQLB7AJpSNH8H3",
  "key6": "jksUBbAC4A4hAxdGSHsRY6yEJjz8ao2JCeC52vd874wZqp3TDpGYLN4BF8QN2YPQ3Yin3XrR3DUdQnNvvS69NCh",
  "key7": "QeRgDhWxVNMc7PTN6qwqXmGKgVjKvj1ZbHmpCowRUCvK2gmv5dxt86sVxVu3APomwdEmSgBM2qcqthMFgwvpSqT",
  "key8": "2EMhLLbsV2dCMsv29eR3mjrDAUBkTinNYcdkHTzFAZ5GCDjy48446bRKDrHyomyaBpwcXF6PmJkRxwHN9WVQG2vm",
  "key9": "JASPDaJT9oMxwPUHtzgxf5851BkTGsEcW2et88ms8hLAZmrkfSsWmoK3Satje3PUoskCxioRshp9GLdHrjua2ZR",
  "key10": "2QyBUaeGfP5dwLWrm5fbB3VnhGj2C3y1F37r87KMXs7mLd5vQeSCi5VR65QAiVFjGsbPCQQ6BfQajxB81NihADiS",
  "key11": "4BEWuLKM5zapuEotBvPEueGXTFs26fyARS91L99AdN8ruQDVhE1huweU6YA9kXgt6fFKXq34Y6cKXXjDUJeiizPd",
  "key12": "3uqL3tA781XZC3CaNy43YpUATKoja4hPRuaQB2QdpqPLHytUCtgATae78tNxjkmKYWZFebQguxaNQkf14WdAPCzf",
  "key13": "2RjdFCZ1jn6LhWHRBNvY9jb7EbXoq4pyKRCuNhZvoVKAhTaGpEo9rLcCh6QVxTMn1m3rmAp2BVupZD9k5yiR9yE7",
  "key14": "FvoRbvkBhxcvMfibx1b2M4wbqtjersiiYWFYarFJaygJ7jyuhSEUqNTwEFf8CpxDJQXiWiY8nKSAagHLjjpKmNY",
  "key15": "33o9LtsBHKjnFqAmqjYS4iKHDjoekA1qf13D5ymQkmQdSUpNag5NqvWooxt7XY4L9rPyB3vTdqpCc1ZnTf11KJkz",
  "key16": "3McG4EUnsCb9XsSW6csQ7NQYXtB1hgP5dyyJUbaptypsYdGPq9saeTEJbKawt32NAgCB4gshEqFhHw81qr48LH8m",
  "key17": "542AZz9FHPFY3VDHdozECj7k6kWngdN3dxrjHu96jEKSQo2MsbsZMopZqfGkcr9dvQ2QnpUP28718pPkav62ZzLt",
  "key18": "3HJQvjcTGJpn8WM1FVnPeFQ9A2ZwYqePVjauKCpFSq3d8y7mkMVabJ9twvLXxDsmmrC8BuFMq1SeMkVQuwse9TL7",
  "key19": "BAwG2sXh5HcuBkhMpcxcdTRinnZwEzLhVf8xfZfp8m3MDv1otd4PMZomHnR9pv2zYMizMtTaQECP2DQ7Wrdhtcf",
  "key20": "3PBWALHoneFYtV2PkHeDDkD1xg7XaXHsq8fnkoMZxRuUBVTCwCuaiEGaaRoh5fSTmuHFzXTonVS9nEi152cAAqWZ",
  "key21": "5MpJJaajnmTG9GFyAQ524SE2XGhcDeT2cK3fXFQiRwqTSWTpdyqnaqLhT8xPCeinryim6qSPVZWD8M5uVsZaYvjy",
  "key22": "2zpKFWTQY4ouF7NDZ4bPVApHeX3jgv2Qe7Q2qncoHCvCSVforgunqkQzWSioAKuwfCbWEFZMphjk3HDqmYv1ydbR",
  "key23": "31V3gqzWzXfg4zKc9e6Vg3UszcyjcKnUEwiSBLTWJfPGrnirhGi6GWfFCvXaBDgcuTioBLXzzkx57ob3ijRaecwN",
  "key24": "ZoGDZhbbYkBGABxfvc54AJJrgoTxUzs3qadtKX5ivV3pNRW3nQtCHYqd69AaE46D4K7zupSGeBueDaGAba12vnR",
  "key25": "BFAr3jAwQCoPanjFUmEM9PJaknDHGveMD13w8moPePdaWxuSGPHH4UzN6S6wLXnPqPVbPQnnUVLNUndRmjV2BY6",
  "key26": "scJbpC9MCb8xTNHf2qDeYoJDhe5ACe4tx9saLNpCvC9wWNViGMeKhcse1X3QWcprAqF6WcndYDfMT44LiQvy1Cg",
  "key27": "LEkXPPcQ8ezzgevv713GQBSpoP5rSnsS5Nkf8vX7yd7FvPdAKZ8TubJE4cqmbMe4CFuaYWhApY4mnU9b3SaTAjq",
  "key28": "4zVpcqfjf7U3x4XAvAkSk8jC9W4paxP5jHnfUDAtmpPSCAXcryq1CEvQsJZ6tNck9PW6rrGyz2KykNWDHLJSy478",
  "key29": "kuFPXaHBQgcWvZxjcyZXuF7Efcbo5Vry1Q4V2HpRjodfTgW75KrLruRm9D7U7gXvJYtWTihTRA8aFyo2LqzWCNn",
  "key30": "5zMDyNfCG1s438XmZ5CRVckJLB3JEwG69Kir27G8S2MFhS9HWiQ9ir7ArV7ZrrygeDaYgL6B3K7RjgTn4GTTjsA4",
  "key31": "2pbBucTyhzr3rfsmnufJnUN68SW45GG4GFpRnrGA42823RWwdR2Zw17c9xwgdukhU9mCpzLEgJkmQm3K68xBNn2r",
  "key32": "2uVPEV5MfCq6fNA4E4g72gVohdKRDuuxvTyodhonm2HTPJP5RfGHx9AaAGvE8fnasqHeDHq42XbfZ1fAvNFJV1rj",
  "key33": "33RPTALaPYP7xoyHGWcsM5yZmnpYdHmoQeJNFXuTFDVm9LYd3bmiiGSNQzbA4x6eLYMB16JGp99gzXWqk9WYnSJQ",
  "key34": "maj2g87GEYHh81ch9xxJNQq2csLgT78Hixm3FXc2smgqdRjXFwxLDxKoMy59cv441FCUqaxg1FtgrpLishmADK8",
  "key35": "3meSbhQhfaQmLPmyXbWq3oSTJSrbNDiZWf4xJfRD2ae94Pk67B9pmnqEFzJNsNsLsDQVzW6sSLtinwpny4KfuZvX",
  "key36": "5PJHr1xe5jyBDyYt5AMw6W3eCdAtHmvmkWGtA1HynhasFH6Z2HdXSQoT6pATyawviQZeTxWkvqCyFbamUqQeTiuY",
  "key37": "57XZFzBZwVsLbebBF6VhiRsi8coZkw3TUMyFu3RPHg9sVdZTMbrm7qjQixHKn85FG2xGsw5sUHf4oW31pQMfvvhv",
  "key38": "3fBWz3bAH1SdR6jQB1fqTi9c42d3YRmGdLcNpyBVWfUmsB3HtZVKQhKj7UhSab5zpGzw9nZAdTVh5XF4hqKhY6fY",
  "key39": "DesrEk5pBvPUXmuJYSBh5TbC9i15NRk7F53yTSaPcMctLjBEyssjYSAKbXq78dtL8EY76feZZ2qE4M2ys7Bc1GZ",
  "key40": "2SvVHEeryZ5YYepf9YkjF89mdjZrSQabyngGzMWoS6U6gLHrQy6gfAiCYNPfE4CdEWKkVsq3mkHzX3EK2Apcxpig",
  "key41": "614yy22A1xQNfZdZkF14GfTLBbhEcSPzr6kkKFvsvwzLFCUTDwzS1TQDuZ4UtMZfxZMUuWWjks6UdsfAmB3GvWdr",
  "key42": "2CmgNNVp5dAzV35Uy9qqqhgWtdnN34K6VVugExunGTSMXJQUn27UKWUPJUdJB5M6iUax5rzoMCue6xHPTKFwipd3",
  "key43": "5YB2fi1LjqwcVUPGNdKJkNrcURd89w61xASRGayXdFrXTZyyryFECs7CLjNYTqEJtpXNoAWFKVjfDc8ivGGoeJii",
  "key44": "3wtpjzPaPLJWZBtmMGoWSiREAQJSyNxLqAA1Eo1SkoH5Eu8yWD6qLAo6J9c5U74m6DBRawvSjurka9VfnNaZm8Zm",
  "key45": "3H884pu5jpS4z9opENEvbZRK39cDZuKuCvYYMT5zUWmwstyzK4kd66SCvzTF7HndmCm66TajnTkB4mp1ja1T4qmM",
  "key46": "68zrFmpqq9gjmA89bR7cbagzdXxVEjC1J3r5thq9SMNSpNjGmTGt44q9TzZ3gBAUr2NGKst9R3cWMsssAJuvGb6"
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
