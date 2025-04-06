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
    "3njCHwpL6sha5K7JnGXL4K6axSQfSn3ozGkRhyU5LLTFSDHskAC9RoZLACanQm3upUP8xeKJ8NRnakZU4dvH4Q9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H61dazEB59AcoiHEjuVeJopLTQKxtzPFfcFmXyCaYJD4NnTHJeLd4z5mTbn5ut35hVSmvgAkRzqUK1wtQoGztzs",
  "key1": "3KMbhEkqxSFidD2RcP4ebqAjzgDUxf22goKAuFydTsY53yr9JCLfXCSN6TPK4NDZR75tihynisGfwsoL1qSSsXfZ",
  "key2": "o5w2g9sURCDyuFztCvAYYT7hHvbknmC3sPmWKT16HSSh6voDCbP6KBsfZCfns5CStUEJCbtbjSTWi5QsAsLfTNG",
  "key3": "tqNMHuCx4Gq91P3iF5jj9YwJN3iSTaf4zHEP4fwjsBDhwp1mvtJV5fvvetZTwhPttVWDT9dy8dYWS4h9o7aivgz",
  "key4": "5kb8rXYKDTnbZiC54YbZyLwG7cGBx6eCR3U1rG1Dwm7zks43sTWjKNcJxQinZkUFV2JA7rgpT6M1sZZkR8DxTsJT",
  "key5": "2Nv1Ecn2ZSR7qVpKHiSaraF3N4DKzN9rkoKkc4ejYxwLyX3NEkinsdNb19GGMBDNXDkyMVHUZDfXP9pE8Gqf7qeM",
  "key6": "26zf2UzyfFpheBf1BL913RBPdDzDHheQdkas4ve7iAwgM3cQJZdvSiS55JH6HthE9HDK2aQhvLFu8hPgbLhMKJmE",
  "key7": "2syRyxgzz6iHDp89R4ARoZZsKr7JUxWEwqtsik5aoVNE6vbnZFDFhTopZLyJ9mpHQ4wYYHqZAuJFEb2FAQEsvNR4",
  "key8": "wLejDmN1Di8T4bvFoWKHje1v8z1vLonxqQRFhrdUCAaDTPMRYJC2PRVyw5GgMCjqbRYvsXohJwNNJJsoFL9PCcy",
  "key9": "5BddSbnvyMjdemWRPRgKY3r2KQ5HkLrwiDPPnqy9pT8hcBYvQHznMCmu9XbPRG51BYhyiEiL4zy3m7KJhSuWw7bJ",
  "key10": "2D7UwTMfTpDeUMYcitdwEEtYFh23hfi8BCrwy7agxEyqJ343YoThnuPFPonsc7WYsQf27Jabtg4DTeaTxrLyzyd6",
  "key11": "252H9DvPog4BSmFkwGhrtfemPdtwTXoJNZ7vr1JRqGktdQt8Pa4EetdrF4F3BPkKvsoMg63znLEwP5sfcXqHJuw5",
  "key12": "2ktYEVjwAK3ymeHcVwhnui1gqtC67nw86HEdgC2tTb5ngLADSyVu3Zrdjhsnf7bq1cV4PQMmQvfECZrKkqezrY86",
  "key13": "5JKeH2odciSBY8D58emDk6f9RY6C8mhJZNivVNWhKSc6ZYnTqGFRNLMCP7EJ7hygmAJbazX8vacMy5NcpRa6XJtr",
  "key14": "5o14h54JWw7GmGFAhvQnF78X3fyP3DE3WoDbMhxMnahc7dQ9D5CwRHYg7RTnCBc1PiKiEMaKP9kucmobE77UMPeP",
  "key15": "YCgREuCYcanQEmLfUCTvoo63dHPqdQLsSt4vMy5fEw6g6WavVsLsD4dGQHiLbSWXsfT1ZVziARy5Q5cSMhsBov8",
  "key16": "5wExeTbko2vAV3h7ujpaAEppYwsCMKYoWUS7S6jnueEnCJ5DVADZwnV43uXZJMjrbnkKCkGDs2eHQScss9DG9oLD",
  "key17": "47HDukcXz6z5hpzd4EX3t1ANNVFBjQ2nkayuv9Ko8tKxmzEH6WxZYn1zqZ362e6VzBfJ3KM6eu2ugCPRTBwjrY7D",
  "key18": "m8kSbDZTvdTCfdjZxtP1W3StY2mWhFgUehwYVKh7rgz8jdJN2H3ZNVzFX6HDHoqKkqFqF9B7RFdpGo4frA6j28Q",
  "key19": "JMbJmSzVPZmgUjbYTaSrEoYNBEDVBBhffA4jXtAe4HfU5E7VD9724kpWbu9UPq6L72b1S8AkXBNcundpAgXFZkR",
  "key20": "5tPCzayeE4Ri5SK5jm7nXF8kjq8v2Sg3g2wv8stPE4sbANYxicjihsbnSKU8nb1sPVLvYLyWiXNBZWZcuwu4uDL8",
  "key21": "2oYBRgZhQUi1wC7efNQbtdGSRe8txE6DHTq4XiZ8wjjg1HfzMhPh7Qz7ym2eBHSpRd6DcFwyrDhG6uwcmCuC4s4P",
  "key22": "5tjLAjCMD69xJTbgQmMDGnj1eRjmuP7uMpMcoCfc5B6RoxpDD641967R6GdbQzSKiE9mpnHmcfwkPgFKkAcCJFm7",
  "key23": "4zVEmx7wiErZZkbBHLf5NVd1Zdx26q4Lszip7C14akBMMkKeb8eU6U49crDNs9PezJhP9oCcTD4XBW2TQBHtq37P",
  "key24": "292E7ocX81NXdNCM6cTmr8sbdVizVKbyUUQ7iJgVDvJoQeEKNaUBFmwPgtF5nN4vK5uYtjNXenzzPB9AYnLLVk3d",
  "key25": "3GDz5brBDtpFEqyKoUhCD4okZiGo2f2zZ3Z96CB8NRX3saSg3kng3PPzqTC1CoS4Lw3P1JxgaptUukyjoVN1GKQ5",
  "key26": "4bCt1dCQLW95i7Abkku6rJidfQStLYWJ8Nd4Wjw71rdbxv2Txwb8dfLWYjo8T4QLGwieKLUr8pBbXXr3p9DpzFfT",
  "key27": "4vo1Ek4UyvZVt2Sf7Tq2XTLwR7GH8Qi2cfJhwehKBvPF4NdxTHYCZBZsywA9Fb2oxmLhRh1rcXJkB3KoLY6JX5YP",
  "key28": "fETwqNMc29ZibKQHwghWkqwF1XfDx14XofJTxys6NdtdktMahL47QDVjPJ29xeYEdBx3WZGDFywR9KzCeEDWQkm",
  "key29": "55C2TXtqiCVJK6uf3BYCEPikTZpEb3HAsPjxLkvEWygxaKwNcqfU3cK34ZNwBtVaBAQ2gUP6zTdMnSZQT3AYj9RF",
  "key30": "3ubiddHKmfxCvXjxUUQWJhHnSwb8VMAxEW1hZ7mb6rPoviEHyrhyqEp4oBZrc7yYmiUNyTSE3tGxdtYgp41MAA4j",
  "key31": "4W5GsmUP8GX3foWQtgtHbrdbQwbVQBcsHqw2qZUde16GF7Uwsg92RCADUGXBGvdNM2fYxNc4DJrqLvp5E566sHB1",
  "key32": "5kSrPDnafVS3fRT1SWLX6KJhkvnaS97m2ZZFjRuVwMGzaTF4EGN68976Kv74aRdedyAFyNK9tXBZG3scXJq5ei9t"
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
