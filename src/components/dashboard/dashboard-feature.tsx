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
    "3TBv3t9UhbGHWxZVtXqsiTxWftj5V53oD6xg8srz7pFko5NsAqMzLfH97yENxZ2tu9AEpPqX7hGxGtMpTbjtCF2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kSciZLGRPXNniU4watwkUjL6y7E9jicb8aChq8avBADxHGh6dmMPS94wZW2PE5MTAxXdT8GKEC7YRxD2ygkwKSB",
  "key1": "2YWJtgsbdMHvXMDDAPRP1u43PZU7NPaMMmPgcQmXQX7c64a589L7dxYQWZeTYD1GSYYPLcshzvjfFni4Kvwysy3G",
  "key2": "waJ2tLNYjRkhEDeoeizmuYCjR4hQcCN9aaxPsNh74uZyYNBBKRxvHiCiG4obpaNfcThzqjgyKK9HCNACZ25xtyh",
  "key3": "4wGnAh5AbPKiAdMiWC9sr93iXUoJjFxHLtJ7Udd864vZ9VUpJbvyA4rAsjxKoDgcxCGbYfd9LADERRoJjUaHbs4i",
  "key4": "4423uiWWWaenRmmcfzS9dAraxsNPPKQ6be21z5wy78auYv2iymGu1J2VaibR3zPcyrQtq4RPh9YJGnm5mHrNFbe5",
  "key5": "5f3jJM3zmXp3MtcEnAVNL5Y2rfUUaR5P66mxsQVXuViERgAPXrwThUSasrFzBNHhRmmG6reAHqUmtcqLSBvSaCSF",
  "key6": "4WpLjUvhEQVpikSxBTSTi714oBqUSyG51kagrF9fw3C2z41pNzAs8awG2r8gdZMwGYDZwBUcLB89rrtLdorBkEwN",
  "key7": "3wq3iCM4wKdPFkJ61yKxjEvwHeojVu2quzsMbGguvnXqHrkfu39MDA5nmM2x4yUWwMV1MKrdmoPBTcjsHyFcwSyf",
  "key8": "2AH1o9qbxtuHYozquEpjcA4RYHLsAHKnmaLwKQLekBMAoo4nqFuqykT5T5qM9tgiCVW5o7jyeuumwTwVdAmxePqW",
  "key9": "2enm2ACSpTGLW53csA2cXdDsBsxqF5FyZJZ69qELPB6oSgkp66BjzGm5wM8yDWrZN6PbZ2MBzHcLvDG2nGFBWYxt",
  "key10": "5qRhHG8xFEumV5A9gLSW8281CN48ePH52Fe29CjPnzLLjMnwDnapUzzyGkutfsVk7dksggDX6914Eg1aiUjhG97z",
  "key11": "5hHUkSEhuWcR4B3G4ECyiXfrV41eBoYXGqFVs1f46KxSLCrhFa3iwhAghTztnRMepZPVsDv3jmNNhNMf5Jr5b9xf",
  "key12": "Sqapb2guLXYrNidmC2tv2ctPiPcGsQHpZY64xg4MjgjYuXkMq91NLcWLpQvXyJqCTDcFhTrTY16TerD42Ki3zrP",
  "key13": "41Fj2vfgYAPLVv9B4hTyn7Kvhyxd3MjaFmnHSWNJeSkJ6UATpHeu8Jj3TXYWkZNJt5pKzLJbdCQ9VFNFqp9EoTVv",
  "key14": "2DXBEumzSfrYPZp4ed14AoxnN1ayTDvnhNbxXon2L5C9idKAzZUtgTKy2z1oV2jr85x2RxMEr48iprH4htuLsQFR",
  "key15": "4gcusKNk4vJ2eq78ebpUE2N3NArqbw9gSdmpkFZyQLXqPksWJwMcuzKRKR2iixmctVw36Afjxz6zkU1UaBRiSvb1",
  "key16": "5nTztrzniGyLkVcMTmMBrW56LxUc67L9QbW2YQ7358NmZuRxVyRspctwZ26jJGL23SwNtDGbqYcpbwPyV71ZAWYd",
  "key17": "zi7jsdWt94MBiZLVZr3XVAzJqkfsfJeqT945PrE19ZpJUuiZCtAkvbwq3xbWrvf7srVTRdv9ApHhndehSGSf7Fs",
  "key18": "3FAxWFuCkKjamNNG7pjuHohzewMkxAbJF4fFj91tBeYgsX2ZNxTXzPbNwYiESwwJ5dfUJoBi1hdnbiyBDBBrZ1m8",
  "key19": "VERFdjgP5HftDhHkZZiifVmA6PVu3hcnzPAVkHRVvhRm8t1ViUGETyNYumt8e3zzmyk3XbeE6VJgWPgcyBhwokd",
  "key20": "2DEjoRzozVvtr4c5PbDJuwQ3i4XETtu1AqaqzB6oX2ypY3mvjQbQDKK9ZssPGVCCqkY4L5mg74SC51V4Ek4egoRa",
  "key21": "2yiHw2udcpK8gcFSthAAjzhibi9HHH15tQQN3DyZxTyHkDAABLXSMzs4rGfCjFnWBrzZSYSJM4hCDr8FqhtWZhe1",
  "key22": "242hvWJC2WUkXQKtJPoi2GWsWC7TsQbR1w3vZBKJPoV7aTwAuGwp7R7f95EKALB4FkSWydXhVsjdXUGvmEdrVG3E",
  "key23": "4KLaV1Tpw24PTYsrzHzCNHgChzN8YBDD9aFUehx1b8PxLMmZtTjPid43z9UPnEkJnudpGzpWuVBWxzj22jkHwHsL",
  "key24": "466F44CedpMUVGGLR6gjPCqMKNwYv23xWFskhqUqUPe6EnNS6QZeTpCqztYL86rnPzZ7rhoQZ555sQ5Bm2zkfJmv",
  "key25": "2YXugncaM2VGm9LD78BJF7cFKLtJttiirTYUyUX7NJBC1V5vaJ1PtWzQztD9rBYdSkXVrNCcChUniFEyJkeUMF26",
  "key26": "2aLiuFYkmS6b6CTHJAyCZAph4ZzcyrG5e7GhP5S7qf5z1gSdzwqHvTXAUaKn55wGcRGBZzJzPLT7qLV6e2zQE81z",
  "key27": "C3eJ3FWVny6DW75FLxDy25tqD1c3NjJmzswGKuK3nXXXUkitUNryjxzBMusWPteHM34uFi4zA5zr3kHY9mjNhNS",
  "key28": "4sqtEHUtvC7v91UwLT6zdp2CsaUbk7yV6YRjudkrymijSP6ixBD1fa1pjAdY9Gn3vUFkjiYCXtHNmBNgmnjKXUoB",
  "key29": "5YjSBnJyLrGsGGpAvt3fazz36dxrdeunXV8HEaucyYutJkQzjfkUB2YJSXH6Wt8rsALSHjJS3Rfus8CK7iHNAhNN",
  "key30": "JJxGjiEotK2Dd8f89TrjsVYwd5aWjqUdpajSE2jdBS2S5mY129wHV6UNmNiB9qvTL5ZqgPagNLyYhe4cZc3QpHv",
  "key31": "3QG5aMFdzfpJmmqH767Mqx5AbEwGxSD4xnMPhMWLp42NzdBCwbg2fr8TAyvqsXrvkgBbb6jpPhBYXXxoviiHPbGc"
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
