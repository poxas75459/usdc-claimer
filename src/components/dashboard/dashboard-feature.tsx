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
    "4ZRm9hqP7cAKghFx1tWc1aqvtT5xQaFgSv1knM5im3ACv9FNHC6McaKKgFFCgCDTnC1HQuojEyJxXceS6ce2sjkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqNFsfUc8EetN6U1KRqE5CSUBPAwN4magRMwsYYE6sUpAimEHrcVofF7sC9rAW2GieWQb6nRiHveGBYtzAKhrT1",
  "key1": "3Epd1nq48TmF2oFWo8ipyCZNsF1tC8jsE7HJyQ9GJka3yAG8J9fXgnuq4E9hd1yvqJ55NN2sxB5DubasCDfmcnJc",
  "key2": "zr7V6N3pDX77LMutiHe98HcNUFfEzTBNRQ2Mc6pYfNg7FEXd5FHDkrhfFfKs1yUMcVThkswtZn7obsomQC9E2bd",
  "key3": "Q2F3iSPB77PmooQp1XKsuGJFwMdXUbgJGBKUyYcRDaDgNtzwntbvJXXo2pPb69YxzD4Q1hUdETKrP6DJKEPndFn",
  "key4": "29Pi8xgeFQjYrMEXWE74boppznczXvZfWqz3YSnoFPnNLzpLD8M2G5nrQNFb3poLRdL5FDNEDxNTJttEBEumuL2V",
  "key5": "Vtjd7rDxFCzrvBdxz3VKeBVVz1HERK8xJMLs2AV3ACqmjudskjQ52sutnqfTvQThhTzT3X24Mreh223cWfttVXk",
  "key6": "4pdKA17o2TatXXx22EPhoxYRLb6rezw9eqwyfveAU9dsMzwtxoBQg1rM2Vq1HQf1vLXCNmPN6zvpX54KdsCsBSMa",
  "key7": "4EHF2wY9BXpb5d7f1P7sCKGyWYtiM65wijkL5oWvRZz7GFYHLcbkAZRX3Gv8cwQseqqRdLQQEwhHEnFJUPAVNbqE",
  "key8": "4txprGbsUwdN4a2p8i82zb3G7gtLu3GgbVJ1a9fz4jsNe9xzUtQ7fJqF3PASTci22RaUbnjvxkGitkATJDBeJrHj",
  "key9": "64zaHPhUjVSobyiM4xj8ZaawQS8fd8HD5WojEmQZrxEfXdAvnx48xVZMhLeiRuTXfqLB9JGcsWPKeXX5LueR5vfi",
  "key10": "5EMX3GS4ydaHR6Tiwh88CZYnP8k5quv3B3wX2dNUeHe6Q2TsSuEYwmec9P2kjonTJj1CMAv6uG14JV6CNSTmZuM8",
  "key11": "5G5ox8SQUicvgap4i8jBKBhSb9xqkSmhBFyz3LSpkJqMVkP1x1wt8UxWCUDJBCoMiigPkRGeoL8nmTaXFKjiJK2U",
  "key12": "62BXdCDK3u9Kp7AX2pVhxutbc7m3C15TkphM1d9skZcxbT72mTjHmrnmRFRTRPW5SYMESEGksAmcz8PSQVy5wTuQ",
  "key13": "gfQr5YsgJTDKFiKXzMJjFPZbnB9d5v8rWyqf8Dv1daawoXhNtju6XG5XD1tyUQ8mK1uj3MzvSWeAyA3ki6s5tiw",
  "key14": "5AMjtu1yzW5xRGCQqa9my8QTaEYfPPqBVihX1Bz5VaBDWzoFAxagNsStfAUPy3DY1bdqLtdWHGmLzxe5N2nuz5yt",
  "key15": "4cfqkCZ2AH2uadGEDUafaruBbA7hZMfinvKzhHEctqdMb7PLGv9wR8hU1JouYdANNcqMrSEdUJxrsX2BJTt27qTZ",
  "key16": "RsUyEpQbg3BipN2RAsXeY7HoqWM6bbJhjpn9inSzcnBe8DQEMeE9wuFPotQ5hwbAMKAsKpmRZAMuGVe7WhYEusZ",
  "key17": "4Nbws9L44jbh2vQVyq1Wjbc42jmiXq1pA9GUwYHpmG45zHKTUrpf36m2ZMzJVpQNuwtoV5XkgLmjqoXrviHHKPxo",
  "key18": "5XVjq8VwKU9MdWDiczGn9kBo6DwdxxsqgHuXR6E5qE4EkXN1xbh19p9f5fPk7vVyMYhsf7W6AvzFrJZTMesM3mhd",
  "key19": "Wi7D66nPViG4b55zCJ3x5D5bjm5ooH3AJqV7dJVp33kTVZoKd49dWQVKLkWsZHDAzAHzfDu8Awu4YNaouHakmrd",
  "key20": "4hzFGmAdgjZeM6WxXGPWT7zSkktp5wZLd668UPgHTSxQBQxPf1w9DwkuMbX1WBZTKwmvJ7qV5QNKFh8cX9Bu9AaP",
  "key21": "5Tq2MruCQ3TXqBs1JFVvRfmpPtWFVcXWSToi2aJ8UaLxiXBqJR1vpiQArirdyrBkbm45tHioWfhcmZ6psV8qfKB8",
  "key22": "3fj2DiFNfS2fehbpgk4ASym7HdW4tGtE1BRJtGngt7QZ4m1yXbfRMcq8wCnJKgDcEyEjRHTjw88ZbMvcVXuxP41o",
  "key23": "7kJwtc8gVbiyhjQYBaZ4MhvL4cu7u4aoWXtyxfSqLwqtNm8giQhVYz1EfiYYghYfiqK5oKh7LwWt5k4Bh8kQC5m",
  "key24": "4EwRfFXA4nXYYi7HKxZGVBwDCg6PQeq5WLnaaeis1cMfMP8Va3hz6SL9XoG68PYwZzcH9F33Hzj9vnjFL6RPiP5N",
  "key25": "5pH2hDAtX2y5fkLueN1dNxnvRag5fmbU8vPvK7N92BamJ6hkQxTuFK2LW214EEGDACQhyGEphgPr1ygdmNLrBfRF"
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
