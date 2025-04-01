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
    "4S9PoRhHtA7djVLHWTb6yMUXv24Aw22vnbaVWS1gKYMjwWr2HMGGTpMHNbi6MQWoi3zpjsnZAmpR5bwSiMgrjWKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jg6E8ggMkcgGgHPf9mvNTbcMb2eRuurxiriNKZa6grspfzUGGRWRYUW8xHDodoRVWNTEDrarEAhFnW49JXxUXEZ",
  "key1": "5rQNprcDLCpASUxoCn7cqZjMfpfjmPmakkqhTpAVMSvtS4noYNfQjXLqsQKzTpfrjTaGUdTwVKgPVx4Krbgb7YcC",
  "key2": "4imQQ3AY8o8kVrTT3SNXJNEzSAYx9x7GHyxXP5HB4sV86W3mJVprAqbVtVGUBS5D4BL3tMZhBiWEgzmHXGG36Tkr",
  "key3": "5238RqAfPukdNCozjCzyxWZK5TVWuPzDGBuJd6A9ZMtoLCZd5DGwgd4TQakYNTBwToqPQy4HG2qwc4nquNT8egLC",
  "key4": "3nNZ5MbGtXrPQwDeXRB1DfwRkKXxeTPgm22gw22yDB9aNrwic3K2po4ZvuH1pcMWHpeMTL8ksCDKXLLrZWkiFdcn",
  "key5": "5Hab2APX59jbuCgocLUZ5oMH61YMGmShrVZBXiTrqfrgVgvqgH5S44NMMRFieBU5rJWYDBhJVZbvn3ZzAdwRLq24",
  "key6": "2EsZiuszPnKhixZQRXemTj49YYATJRRNThh9a7RxGZ7sCDFzQsyzSXxnyBdsvFzd2kp5DccwVJD9UaEzQwAAvAP5",
  "key7": "53PWuBDdrbrXp33SXg9EowB5SHysRgPtVh7jef6YJffMYnDYMqH4GtQd1DZUPzjTE1zn9UFcNJCBVknGZsN9twRe",
  "key8": "4cnAx2wzyWih25NNemDrRTXP7DKWzihRjqVn1yZaS9XzpgmaR71NuN1ZouzUDxbnj65dZ4UnVTZpeSWh4d3uUJ6k",
  "key9": "2yuHgVAMGAUpso9CVSur8NMmePdm1HgDETxXAX4HPdZQzkZoXCfmSKh2QcnS9rFV2XM7KxMFNMsh7hvwgyUxSXsm",
  "key10": "5QRus9r3reexx8nGTv9b8kPvYTQBYm7aAsir3WuHFN2zoTnVB6CquiV2nWe2VbmySHM2FKSdnbbhig4sWabNLbVM",
  "key11": "4sjbTBiwRMvFoE2ocsbVKdevc8kRqsAgr9gKudERoR98nRL34CmJtdyPnSkmwqTV29bdqKtbWd6F1Qk8CzCmBw1Q",
  "key12": "5DmR7MXwRaH8rVr86AyfXKFaSeJdekDwGrta7LarRcMPn2jcSzRxVFxHapdhKPN41Af6JPibyuWJ3vnA26FdXx8p",
  "key13": "36DdCQAQBPYeUeZHe1GLKMnbAm74ZyDc73D5vRQ1HJx5VxMMTtLnT6ado6WUrrpTtBj7k3cwEQXS9rRJGPQzd7bG",
  "key14": "2dz6Tdsg3iEUgDVSuL4xxL2Mi777MCUJXupitfxqWxcBFH45Bain7nNX5mFwP3mmr6pR5upRyRV1gLkCwfTtJCtM",
  "key15": "3jJHZNQ8uUyzUXYX5qQSNwDZVEmiKTAkY9XFvr499zF7a9qraawAeNxhftDeZdRutrFqxpZ3dnDHdHpntGmErLt",
  "key16": "35N2pNZuEAk8eMNQkAZ5NfppptkrfESdwUQR21QHeXZEbk7YCizRGj55AGCtcK5RFYfYhghr2K7uXuhfwf1147vt",
  "key17": "5RLY8hgqVe3hbYSx6YpL5U2t1m2CTWMfuGPS429hCWsUmqBhLwcspsenmwGvaWHfdykth6m2ea8vSzg1cTZFLF4j",
  "key18": "5TnC6sWSnZ9NL34YrRkM5Z7TVf6Tbxea5KHQZfy1MAqm6F4hx5VVqC6EU28LxqJ39V6tJdumsXRotn74pNXAuS5Y",
  "key19": "4kbDnNrRBSSZK1sTDCbsg2ge7pqqjKAAnFG5YRebxJBhu3Wb2aeb8R46TvnPLQf5zLb7maCzHgSMTNUqxGqUDoWa",
  "key20": "5mdt6LPXqdTmpv9xPtWwRUC5NBR2fxNyrGszPLfR9HDFYSockH56LAeUv8vcVifRhyyTAymM7kyMM6d6ujkFyt4j",
  "key21": "nRzZcb3fUcBb7mmSsUWZSYkPknDFmgRdmCAgUbEGBVW8QeVeGHC9UwXF2fXFriFGaKFtDUK5Hhikz5xhFSA4yZ7",
  "key22": "66SA1YtHw3Mnt5kA6DMQvh3ABL4ZyZWfedwduuSyEC9hi4VuLXyihzSfKyduq7Kk7uE4XGsWoV3y9HWH73GdMEzV",
  "key23": "58AypRdzAkuzRFtjCb54N63hhSMcvZ87EN8YfWuCoHomXvHoCnFWe8Bfs7CoDS8QNmB7k7zUzrJhKkd2r3U8Zi6w",
  "key24": "2CCujVZLuRMPpZpqdQKZJiHxzGpkXvKxZ1LK1uUTYGjpMpSTNVTEm8u2CdpDfEFNmjkuEYuDCTGMfHz5XLQVGcmP",
  "key25": "2QDsLLMAtn7Sgmvs7diWXTPt9tRHZJkhutkWzhAKjNcSx6hnp6MGJPAAezU795MZ3rN82dDyp1bENZ1Pspd67zid",
  "key26": "4rYod84RrdAGAFXHArbrVeisYLYo5mKMyLPg2GJj1LEQMz2kbrmjecTAakWx6kFggB4tHi4Znt39D8P1Hu2kZtGx",
  "key27": "2isNBAQWZ3vHFeJRpCK3jLDTpKtMZLdX7XUbjERzEyzMZwQekZMV744bsFyS7y7buwpGLUotJyQeUtuyzeao1NoT",
  "key28": "4iz92tPRyBHVsYpMzDj9BT6oF45RRMQDDzFytzg4vndjUSrP41GiiCWK3KTE5u8SnzUefWAiamWbcLgf4uPDYDy4"
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
