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
    "PLr6ZhzYEJWt1CLvEe6V49PqzGU6XKbVSgnBW8m7VXRRUj7MuDLLUcXcfyX27qpvRDWgKnzUpDntuHmgZc2xipR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVE4rQUxkLoqaxq8oaoL3j3fPXi5k1fCrWQjC8buRbS321yN7dqfhgpM2ADaMjJsbYQZgQMhtNcgL7ECmAduNCK",
  "key1": "JDMf7tfHnocZYmqqLtbDf6Fmj18FL18pgJaZG5jkmxudPWma39FtJGMX9ysLcaJJpE5M51iJZGH8TchLpV5WS7q",
  "key2": "BDNu1GnFUtkx3P6BJKb1hsG64tNSF4YrfpMcAMv7REnoPotUGGebWWWoKni4ikUq9ZJrgSiDr3S4MJQUAt1h8WT",
  "key3": "4VxtS4jNm26VsPQMWY62iY4frym2qC8mELHBrdRP5d4Kyspy5JSP1g1pZqUfEKLR6cdwx56rqLZ77tu6QfadeBEH",
  "key4": "iST2C5MewmteXTzFZBQNkx2HVc39rvmb37j6EwJ6N5tMc8z2UhqGvEamxgNgidYwnFWv1LzC481EU5w8hR7K7mR",
  "key5": "2PpXE4pg3tjF5WDnSiPBjCHeBQ3LqUhRYKiQZcPy62BRhgh1oeMiNouZvJhnESWijEKi1cqzB13U9jedxqhBdUvG",
  "key6": "5H2xWpDuUuCsVKfLci1cSDT9hVCi8GVbxWn15iN5JDvQ3u22JWBRhn9rZSvJdnXVx77dKg4oJGycNTnpokQovn5m",
  "key7": "5HkEyskiR6oDT6b8QyZee1dgcdsvquaC89jJTnu6E9LrHgMbR9n9PvzXRS4iProDkbsTPoVPoYV96RVYx8TMGMZ1",
  "key8": "4TXxRFygijvs1dCSoNi2TZ3ovpxG4NDihahEXh2DT5a1kAPwr6CJpSeK5FB5mqz7AX3hTfaWtGvphMT5w38LAz4o",
  "key9": "5Yj83WZtkfBY427RtjHd4c8EReFPu7Xkwk76LZLGq5GvDw1Bfuhfgf2oiAzG9EMwNb5uXBr7rQTgMAFehuCKiCC6",
  "key10": "Em9wsCtAQKajn7SMQemZHFZEmyCByC6nr3ZW75kxuZ3PFevDKTzCgi4UKQQC3mgiQdiKjhtQpvTeLhd2736oc6r",
  "key11": "64VpGqaQnJSu14yv1mdGsbyxrkRZWrCmLW8FkbSGUvgx8rdJ5JvwzXDKawaFZxtS488cPsrbtnyyEXRgEs9K7VL4",
  "key12": "4yL8nPVUrvR97YvY5mrDSoxwBrTJq4nVzeYZYVubSUD5ePPwc59vTQ2DKTSTSiXt5v8hNyuUCVFRFzgUGLHm8BTL",
  "key13": "bsMDHiKuFxMojw9s1nU56QkpYGgNBjwxhjmF8VqKdb4Pt8x7RxwS4dd7DUkMjBbN6FAkhbRHZ1aroUVDC8WXqtY",
  "key14": "EnsmgbMUtpDg9AYPaWE4Wu8VfBdyxvb54zcafiTRyZBKg5fh6FwC8R1M6Dj8SxjvU2eEoB5opTAua2gs3R2PUgX",
  "key15": "TkvQwetV8EA8sfbwUwkGh1e9TeszrroTiQ8rhNWjxSNtP3j6gMLDNCtBEe1PPJMqEwWJBxsyEmRHX7ZHuofm7nJ",
  "key16": "5s4T7AAkQ2PPZJ3fzf8k3Wv5DFapQzQk8jaA1yZfiJur63dE8Uc8TQVJ8NF2BeBLAREMnSHaXdn4v1CLcND17TyU",
  "key17": "2NsMGge3H1a3KZsVYvV992KQViXmBrxBiATphcAKbhsfouE9sDruF67vbLDrt8SzcgQFc5ndeFsm9u19o3LgyAh1",
  "key18": "4SgFWcBT52joYuAMcyHvwhiSXGKuMfQY3Fc3XWD7ZDG3E59wJaWRotGBJWwumTT2Wvq39qMps6eBRFVLJFkwYRCU",
  "key19": "4xCfAnwgkwMpiopEZz86qG7eSxw7vQotng3HEKAUs9pstBp4MeMTf8CSSgcP5jtfs4w46gQT1vkXBoqR1knHzWsY",
  "key20": "3uX9BzhGuu5BdBCgWU259W1avgF11PUb3KfmrgHzszGhvGJf9ZxZHvYsS5FdDEHrFxPcUeZ1T5uUrCUz9haqgNjZ",
  "key21": "4dyRTNRfQdGmbySAx67Ea2AFry7GZMPmbXnctHr32kogLhXYCzATwhAf6KLQhsH7UrKNSb82NrY1ztqDxBzev4hJ",
  "key22": "2xdqUrG9K1CYhMytZzxyhu7rF7QaZKuLFkyznQKWsvdDs1gB1ZLAUcvVemANzcCNSvgCA9igUtKCRshzTg6zffcA",
  "key23": "3H4KaFqhhczJDczKDimLoifmRZGZpkTLLmi1xZVjV7JGVcgfk3UHQMYCjyHhVtS1S7YqyoR82fGThMjzN8PWsW8W",
  "key24": "3CLJH2h8N6MRWSPVryyJGjAX5VeEbNgjCSGvqf8N5ZTszZfgc8Bj2szLhvG2DD4WHsDG4sj4PdrQfADZaqGRH1Z2",
  "key25": "tkGfUgFJwbfjkVRiRAQqwYUyeSCm9xqUT7TtNPuSWpkEspXRwPSEFxHRUpPHDsD2wYrGRZ8cj1VG2BzfP2FZx88",
  "key26": "33LcXbWNZFbnCyNqTau8W9158R8bUwU9THSTEWVTtGzGYUWATQhjirgk9EksMgTB1xy6ZKGrPpXjaChwHb7eaHzH",
  "key27": "5rNW3UsqCJZuqyJTm1WSxLDV3WVbh7DS1Gf5uuHr5C9XFkZGj5fXvWfuXcJGkysZwShab14hi9cZSmqozSEoEee",
  "key28": "4LS2KSNxb8ZdT5epnZKk8oriCVEsot4U2x2aJFJMjuZ8aPcF689CiGHgXfThnue9m8Yp9UGW9gq8S9rJ5Gj8g9tE",
  "key29": "4QLzkvNSbZ5r1ebPA8J3NDSxCD25o65obJkSVcamBFy3AQa1N1wzRAqX9gvwN9oB4ki8y17LUCDZMZuqf7NnCSM3",
  "key30": "3fnd9wnzCZ6z5kGg8ih7q7LyGvG4ZvgK6oBdJccJuhrd46kVJh9DMvbVvNdiv4ubPbGgp9whztoJrsnEQ1rngVG3",
  "key31": "Cs586aomD3EiUhXPb4isQ8G66CiThkSqCUrDYh65i6mpsmEAkdbp3ZZrTot6pALF98mFjdTAtCdTXFFz33cQDme"
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
