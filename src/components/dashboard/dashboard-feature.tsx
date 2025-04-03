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
    "5QMf7famyGEWN2Dzt9teSefgbQVze3vAaLhsjA9zuHFRf5JoXPyy5oPkefiWJuEEX9ZHx5b3LZqNDTdZ3MUbH2NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vunej7N1qLeSXrz76a1nXD4jYKeSbEPHjTTpNoum94ZEY3SkYWhb8Wks64Z7qX2SoKnLnLXTop4rYDUqBm5WKtc",
  "key1": "2HGeLHib5hVbmVhdAAnejbCjHQmifvnFaNnaMV6YMTcjqkSUnMeWoJ3KNKr5PLc3BNEsC7SbNiY6bBz3LiFKrFRu",
  "key2": "32pyk9SFi9cUE379uRpM3tcRS7TGxxea93Z1qzoESh6ZW3bd1Szoi1CYfHhJxpb8Uk6yybZ7UE8AuJAYqfA1ac9S",
  "key3": "3xiVY7ReSAWR4HTmzq2PmMZ7LqfyTpiajP3YVvVnumpq9avrCPZ9tUBiAv26DHXyddaHozcJWQ6M8SawxVyJiQFN",
  "key4": "F3u1u4rP27F6yVfkPoYWtxGesE5fZoQ9zFVeFgrsFEQHAQbcXqe13W82DjgpVgbgZFQQvYoCtsoFAtjEFF7sDmo",
  "key5": "2W3RddM6D7idXmukBbApSwCQCR9jYgcEsVYubviQYChabfwWs2pMoRCpFKnnkxWo7eVwsnKaDo5NYoLDfbUsi1X4",
  "key6": "2dRXQhX1AWRApJfWMxMkHoGkgcmAjN1tSWHgnegcKr6veCN5BBUATb2qGQxwgGtJ6kSL6X7SrMdVsiTHpWVhwUC9",
  "key7": "3YhEJ4NoUdQaJmjKw5sxNapGpvMVEpMnp6cVwpcg89eAgEbJ8r9CKYF5Kvrwmtgpx1ZJTe9UZBAnWmK2snPTcMhy",
  "key8": "5VAimEourUmyWjqVz29SFwVJCYJ4Me4oUdp9SYPjGPy2qv3qNHmkiGVt62vZbC9qQvEB9S4PmTKqEBh1J4iwRNYG",
  "key9": "2dfkLC5ivfTDvApmKgLADbu7b58v2HULC4n1vXpenMbFzfi4ebi6bYoR8kJhVmh7fmJ2a16qpVUFgVT3eUe5e11a",
  "key10": "5PiUuYqr961XCpJvZh2PvpE9LSENiixVoKqR2wpuRrPapscdcGzuqWEvnVHqT6CXGWtVwC1sqe3RvLgGs8BDb66k",
  "key11": "4TAxoskGCPXX4PfE53RSacBgBXqhMxsb7U1fKvHaVwuPZYLqQN43hERyaNyFJvRF6c4pnHvtj2DRPV6Sd3ZsiW9P",
  "key12": "2VasUoXX6gWL2CoNMgKf3j2Ph4k3oTJxwpwQSH7NKfksiA4sJrayKU3p9z4CTXLV7bhyQPkzNiGWfgy5j1Z1JjH9",
  "key13": "4yXmS6HC9tqi2q1wbR8Wt8HEB5YKNgKLzZ4RgWMjqPgdFmbLA3fy5PFC4byr9go9UXqSdAb2zVch4VJ6HLVFos5Y",
  "key14": "fyex2sWTMRws1gXccEtg8T8rcJYdM5taWYLt8auDjA4p4Ps12zReD6NDa7wvYq51kwQe863oE4X9PJqisN5V1qd",
  "key15": "5HJ1tJdkhsFeHiEuiEQiAzCxmBse1fcAZaAECiun8oT5F1Sd851foMKgiuQ5WSpaXSQ2UG5aRKkEqptoQbbVT78a",
  "key16": "48D4sjUyyF79vkGQwbqvsREsfXCFExtuuVL3EL2tass4dQbpx52Ke8WtaZtc8kCaYgHB14aUnRP4d8WtaRU3RriX",
  "key17": "5hhzcFMq3VdVE68RpZbYoBEvWLGBWvbLbRDTm297jf4omMn1nADr3qeFZsXKdDpbSGL3xduy3WgrS7NA5dZbS8hT",
  "key18": "2f4NRu67fugykG9cdhEtKLeN4PszJdt73tukG7ryAdQWzwJK6q5RAfkGVzv4BveiGTZrbYcqNZpysSDeiduYtT7i",
  "key19": "524AU9tAuWtV3PKQpYYRtdK77yDEJ7QVkhoLXJHyxiBjP8G5XdpqJoVVtNt1PmH99AmQfJvQBGk5YWeVsCZZ2CgV",
  "key20": "3MDWmbjB5tPr2SgJt57kXJQ3pGd46K2reXvCaxF2rGHRfmYmAeGCtYBcGat28EVknBnQd4fUpMFvqc7uxmuqfxfF",
  "key21": "2j9gWtPBpCT4LtJYd6x9bSgBvDkTLwK74V7Q2UkGJGte3uV2RyWxJRraXR5ghphvHbudmTpFQRk6P5VFn41aGPnM",
  "key22": "63djARFLVq2v161daCx2JGjQvvhm9JnA8q9QrPih1QvGzhDgbS6zfWQ3FhUYezs6J3w7hm9UnmVr1NFSSiytTQ6g",
  "key23": "3hiKWAgAp6PDkzvFEw8HSVNebaaJRu3DStU9uK76JvNPcWSKKYkeabrckrsxJZAhKEDHFJ2mhLAkXxucux1gp5U9",
  "key24": "37EVpkAXfGbJeh1eVXAxRQN1CB4bP6PjUToMZr2dQ7ikcWtKrGiEP9rxApKwJ9pVLok9FhAwe683n1a7qfEXVGwt",
  "key25": "43Vrp8VozAUwLZuvuaoDNy4f5MyXPZMzLr7vbz4bivP7kPPbbooLbreJazPYVxuccLkA4XQB87DdJhmXdTzym6Mv",
  "key26": "gwM9LDwrz9tCPvgTy5wSzYoLxpLk9osh9Sr1fJnr3b8xrWsJKoQHNv87z9Vp3sgJDuiutWaQ3qenkaMQiEs2dXz",
  "key27": "3qHtKGNa4iYAQMr5vsmRWrQbmrHCNVFqNhST2EvQYnrXvemotwkLddPNQa5FXQGrCYNa3XurY7y8Bpv7YuWP6J1u",
  "key28": "5R8zShdbRqUk3Ue4WhvWSSCTKkRBQn3zkiaDxz2pVrR78BH4RgmfiWk4pNyWy5QYyuDmevLEdw8422gQ1pwhCmSB",
  "key29": "339PKujd4t7jwYPG3aPcA67anMdYCZhJcePfDFejD6kJG6pDQ58iuwK4PWzGffHHWAWkLtBLpeAXADwm1kq2pPN2",
  "key30": "5WPuQj1t847vUooCaSnvmtZ6jSUhthqARK1XsMigx4nndDv5pExshu6Z97nU2RwrmkHx7Eid1VQaxuXaH5WESoVP",
  "key31": "5c12UGKQxoAGzM52gLsxihCDZXkUiNzN4jYqBQCxFfn14qudW57DAWSyUQCKwGZuUnLZo65FrVKBLGsZLaD2gked",
  "key32": "23tJ7oXirw3NLXkQ7duNmVYpVuS2AKp8xfc2HXw9Yef66UesMTVG5pC8qbzseH7K33cWbHZtBdLdtPyVxT9MTS5b",
  "key33": "4f7u215tWaH22NQTM1uXA5htYHk8Fv5K6dQFke4JyUmAtTWtGfEW7MvBuiwkMDVtsZx4HcPodK9U8tVsTHAmtBX5",
  "key34": "5rotAtsADVjW83FojFr2BnPzmp2DHVj8UnioWxS2scnGDWAymd3rBtUHX4UqHQ4BgRmp1wBocQMinmtUErwn9AMe",
  "key35": "2Thq71kqPf6o6EY6HsYd1fV23W13QVnuDs5NBqqfArum11EyRG9kn4ZfcsEhCVneE2EgLSW62Nc8Q33qJjcJzLT7",
  "key36": "2mB9UhKxA2RebSLZUJfEUqvtaHotJybiim9BHMaaKG7SBydiE78GPca7H84SNwRBgoqk2fHRabME7fpxk2pDFHPV",
  "key37": "4UjrE5Fxny2GPXLjgff8Ub87PVZPyTmSEHwWCaEgJ1D6Cc1q5UgRzP3rKdEVcT7tqFCczZsMQaRn7A4PwaZCqzGJ",
  "key38": "22QT7w87geddAdcMstKaLemzmautGKwpBTQfEnt8vShrPxuLRg1rnnYJwDvSDLPuCZk1Ev792v2fTUyu36tyEK6u",
  "key39": "3N17oucNwySBC6Bj4gtDQYUiSur5Nkx3gWCTUaMwE8dnZT9eogvSWv4v6fonepQsMk7rYf7a2WUXsriexNSPunr6",
  "key40": "35jQ8gYix61ogKww2dfGzjQjvVhtoXEdrHhcE6gctJ5cazBQ2BzyJSNGb1GukPiEM4ynEpv7kPnU9uxCxLdEY8vS",
  "key41": "4wWgFfsWHXrMa2e5rE53Q1iecjuCJF8RoD6NVsPQCLtboQ7pKoEBhk6hKxsKtJaGPyr5Z7juhgqMD59r8p5U9LFP"
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
