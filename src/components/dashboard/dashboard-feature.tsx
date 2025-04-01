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
    "2rzDVr98vPfxZpTHfWcHXTTuVKb3fVhwFzCgfGMJfq9sKq8NYCxWK7ss6xuARVFHVhcQLBxg4SXNWXie62HDR6SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6Vjskscbwg3GZtYURZQUE2H9ffwjJcHq7uprpSAe4iD9ZgiNW5Wr8etRMFntZL6gobrMgNAFyodoJKK2kNWPZM",
  "key1": "43JUfxCjUZuPg5gz7yDxziuKa6ZxPS6GJvTMAQwWKNJTkPGj3FrjoeduwHuv2rpXM73JnMTqynHX1esThqRT1ngy",
  "key2": "3ZC24ADEnt8xhhL2BwotSkL3FXZpksUE28JLxnPxQgFcD4pgAxRn5SDYPdgb5ZsRWjvFYEGN1ScpF1h2X7abRgK6",
  "key3": "2UNwkDb4SSKZNPZcWTPBBTT6LsGZbaX7mgNj6pKsdPFymvZTpw8MsATt2z8r7nyh7VJ4RhfvezgCfcSff3hAiDNV",
  "key4": "4aK2iQuQoUNsgJh5qoCjd2y9GHwhCVPCqTtTEVB3wvvFphZtQ9Rt5QsNxdRKHcStFv82td3bL9DVfeyPwAyU7Tuq",
  "key5": "3qcWGFbYt1z1Ju5nV7ZMm5FgkH4UixP6Sb4Nwng6RA1zJda4N1DpHkrzCGuFwhSnCA5bVssGHats1o6phPpk38c8",
  "key6": "wyKSRbUjJQKt7WxhQD3fZtyjFzSBzPV9JSko9p5kj2soGSCXxENyC4Wo8pHcFE9hbZgesTFU9TKiu2p924kqhiy",
  "key7": "4E7KepGAYi8LkCMo3zfEJeuSfsQdW467aEgmgsdEkCBY5aKakst4QnKWLjwuseiNwHqPAobapA3vuiHN6RKangUy",
  "key8": "3QjxV1eGMEXpuYzWD9Ju4woSYjfZimXb7isKyByBb7LTyVv216SMWAcsKGfrTCUDUDf6UMVuYdAC5K9cP7TuJ6R7",
  "key9": "47L3AFDj3HRhja4hmbCc4Jp7gHVPWkhFUSwz9QNJsKFZs62BUjhPhV1W7vDdpTYHJZj13dskiUyjDUpHwr8wqXei",
  "key10": "3G6XLBCWtGCgjc9vTw7nwX7asVdVUqrDCSNW2NEXyBBR3uefXNH3achtL57iE835jY8qpWzeMG2y6J2oRqezVavi",
  "key11": "2gjewg42bjsNfgVCW2wCGUtpW6a8rjVU1LVgMDZAbGbqDJa6vReMT8ndkDgjv817bftFHYrfn1Sh7TgxZ4sxX8Ny",
  "key12": "2WmPpprSZPLKP4yvWJsiVZTNXhBNEA1JtHJGsG4A2WLmKrNkTKfmSYugkwWy3Sepnxhmk7LKbUwbAkZGUHmij8br",
  "key13": "ZhjpMXm7JvHQwVBG3hoi1Am7H35TpLkghU6gpFKYvDM2Bsg2VBe1TUEqj4Znq4BUMtk34XkiGZjquJhqhNzmCBW",
  "key14": "s7mRZ9RJ7ofk8qLkC5NKKr1nMzozLDmaVQ1R2mQnZwWAWRkHt9y1dYMg24xryX2iAs41kWdaoEAWoyBc4AVnnWS",
  "key15": "4s8WiNgugtap8iCqo4Mi5CV8aX43mARa5aSzdStPHYpGXc5zGVCDbvbiiMoEuePjRBKkRc5Jrg1bMiQKeNiXYQiS",
  "key16": "4BMr9BRjgw5ztgu8ijpX7hiHP6SU9gMAQDiQyU7P36kHoKkXfMpswEEXFYrot4LPeEezoQCW9uzbyvfSySd3ARtZ",
  "key17": "44fb6DiH2rF29qL854GLRqw4wiqxmNvwVnV2zHZ9XHWbYR5TP3T5oMe64h7hbJtajrwQopSwyzz2sFetoAqi6XFC",
  "key18": "4V5xJyWaXZWmboHpRMWvYP3PNozXy33mZT9pwiwWfLk3LjuasKyP9eXcnc2Gk1NGJtX3Y8nKScr7pgQB68QuXAzF",
  "key19": "4Nux1NNVUu5Faw3W6LJXSKek44ksdNnsVAzrhc9a97ih3pwcRWA4vVEUixpUm7hUP8MYacVz1cKW755jwgdQnGir",
  "key20": "2RtJ1CAH7jrv9oU6LkJyJNs9GHYKawedN3hNn6VuE9fJTV3t5epqufRHWqfsWV7JKUnRqeogd9K7mGCy9Q3MrcPA",
  "key21": "7fchw1Ctttfy2ggxSDpJcKdETst7txcX4pDGDk6r13BKQcbi14CeSTmPY2ffxdiergZrU9Ed1BD4CkiY2DXtALV",
  "key22": "4KKaR2Q2WxJWLLUgzsyJ2pXAmqkdudWLNP18L278JY5bhAwnusCmzGmA8BK5EdRvdJ4CvB7gAbVwHKWipHq9wN9T",
  "key23": "3ktMXFi63s7bz2F6F9eNGV2BtwfEFELHGAMwRXndKkDh9yYewQcib3JuVCgLtYfdR9iofCDHy7jDuubF1WwxU1eo",
  "key24": "tPXvKVHYbBPnctFdopbMKUnz5mDQuobjYyD7pk4HWsoPUS5AzBYMphK9BJMPVaEnNa2uYCXer1AYfjutJpgWrvh",
  "key25": "3TEMhSLJ5zRsCx9k5Yv1zrPRkxPb4qNkhhEuz3shcjDLNKJsw8Dde1eMB562QgnF47gh8J25HvCGRLsVvz7C2eQB",
  "key26": "3cyLe5Cf7oFVD3tUnAVicYsTRoH1AP3oPqD9phD5JP7NdF9L7uMrbgc76PtGUucaBAkfdiArDzgesxnNRq33R1Tw",
  "key27": "3zsofaZEUUgQtaYa9d869GS4LaN2T8yyorCDxLNnYwcHMy8ZSTz9H5c994BqgaVhQzsLNMfWpVMPpozUAugScvUY",
  "key28": "2jsfa6xcPzcqM4PsxLJrkF3ndQ5wnNqDEY1Cd6KBT3fhwgqNgASvpDMS6GKPAZrLykWmYeuU8NDi6tt57NG6fjay",
  "key29": "5dahzhW6Q75u6Tg9idamP7fHjui49B613ABWZzgPt3F2LZe9jTUC22DEPpvnvKfxXrWNmfrCmx855CPSpKeLLNB6",
  "key30": "3nAXzdzujbn1YNFidv45cgKycsk7Lcb15tuUdfHCQ7gR5NCJDMAN3T8GqrGhe5PD7RRNmx52jj59TzamrTWjKAVM",
  "key31": "2uHrRoH5BifNkTBurffjc5d6QfHYJx8qS1qF4mkCVXnBpNLUXVTDgBvc56ruzFdWTVhVjKo4MfVPSr34ZQb26PWG",
  "key32": "5FzV5QRLzYn4fFhkmy6Lkd838dG75WCGyNajaD4TU9qbyDAKcev3frwEyEoZ6cwLAA5drwD5ngk5p26fKg6V8TG7",
  "key33": "41DohzgHKwyQ4RWUFRNhNFr8xVE7yA9HaqzAmBRxcbAzpoHQfjMX8Tkye5BBhWNAWztFJAEeAB6vkiST25b9ZFPh",
  "key34": "411mxXfMq9qSZpNTx6M54BZuEwEgQNpW9RkueLVYyqVTUNcFCtLyftMx4tRvUieoW8wrcDUFq7Qz5BXs2m6evF5h",
  "key35": "3gBcNooubNyNFwTXzuL39wA5fUwM7tuEZSfyAgFoyEeCez6YE8A5BvbjYUHSBRvg6ZDZ3f5TAiAGu51asdXfAa6v",
  "key36": "FK7sXkDwaE6QekZWz9V5Ayn6mVrQsiTjJS7HYbCz4FpyeXiSoPs3eB6dyfZagq4pGm3WU87pf25ycHWNystnAfb",
  "key37": "3DS7i2S224mudQtoNyUFo4JUSy9jn7QVs88qmDnqL1DMxrcB15tNJrYyck4t4pQfnE7Qu6fhffzpDiJDFHseH2bf",
  "key38": "gfERGexGVffiHsmQjBAMHM9sEiVBWdeKeTN1vt1WDsTFqwdyj2aZwWgmVh128NG6YDRmbjSqb8kUTHP4QPShryC",
  "key39": "4RSNeDPGnXJepsS21SZxGZvRmXHxoecBs5n74Bem9KsM2ruBMbF2yzsQRAPDNXtjh3u1gq58KjvZnkUfHwS3tbeV",
  "key40": "5h6TRusRsTyv4NYtesVv4t6pszoMhDgngdV5fA2AtGrf8q3bDq7cD2YRQTNCLdpJsomnD55Cp2x7uqSbc854Fw4T"
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
