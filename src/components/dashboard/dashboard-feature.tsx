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
    "Bc1kiDmBw9j4t3wcdMZDDN2Y7D7VLskNsiF1iSq7t4YGtLkP7Z7AKHbLX1LrEGAEmMsDu9hQGSYYy1PCrHZyMMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRcMXrH2xD5YUSQgtvYVe8fhPoGPkeeZsQinza4mvzZXkpN7x2VWcU5M6hLthS6M23ikHnHzk6do2VhFVuDoRFP",
  "key1": "2ukabeRtfZsuUdpXgRhpeg228aBSE3tonfz9K9PBDUjRvDYBsQ4JNX29qbL2yPw2176eGaJY9KG8earUBJ4nA4hs",
  "key2": "5YHcqFFChPHmqxjUHpkM94atFAvmKeNcYqXQDURFEQpiqBQ74jxf9R5TCU9LSaMv2Q3G42EFLyArjxcodXNZN4W2",
  "key3": "51j3vC9eANG5Fv8VjJradQoRWckSGLxrncpKg8TABDYk2GbEVShFqzf1sTunpukcEpckgjaqXezMEEiZMebA1r5X",
  "key4": "4ig8CgPZ2F22YnsHSzkE28NPzvaiAGxZvobFSmgeKPvmP54aYs5UyzvMfGJXX7U3f5WS9pk18dcVFevRGWgHLEpd",
  "key5": "2SHFCWWpsDmfQeGVsFV2Bd4Uja9c4q3hPz9yHQz88KR82786FHAAh8MfvLxsLEkKn4cfLeXFFG2Ps37HPuZGzG7g",
  "key6": "5RdfSj1W1UFnn3HLqbR2ZdCT42o41u4okZW9VmaBDdvYPdyFdKGkuy6bZTn5pY9kyi2iKt95gKXtVZ4mV7iRahNc",
  "key7": "irKdVuSaS2amDtHL3ofjNsT9LyyMaLLERvNjoLxy6wsciWvHUt1zqutNPNRoa7NgdRRUXa2VUy1d2x9h9APQERW",
  "key8": "55hGLHeEAXjiuBVxK8BNVPFG9fAHEcyqKXH3LouUhLZpn8iS1WY3gE7EnL8B4rpLM2RpDd71BCjK7c4F7upqfmNq",
  "key9": "5H6wkxxoR8gHAJyVRmujVjucw9jyLQAaqEdufWfkDGe6Vd3fmWRQBkWyxS8H1XtzrRqQR2uKAPNb74tgM9sUPE1",
  "key10": "4uSDb8Vf6b9RZq9XEf31AqvdSb8oACUuGgGUBmaeRHWd7WkVwRA5TcNFsMmDHjDe3X5xD2quLM8KJc1K7KYXXDtN",
  "key11": "4U5pUdkzXk1y3mRGiiTonx1L49CHzRKP1vh5ju9uFSvn8zn4Cph8gimsVifVPLvDyiZ4GogwZmQmoxkCESzCsuWj",
  "key12": "4McP9kpKupkFSaiLzoRYzHU3QrXzFjyjxG5Zxmcq2btydvZdR2mWihYAF5KxTYbyCLhcTxm9i3EncQDPQEU2WQfc",
  "key13": "4i9Qvi6EZiiVkFV867oD65GV19NKiMTMm9mVqVvZiPnm9z7NrRNaZiYNKZWkTzzfEkFZkssNGQwhRmJnMbGEhHkf",
  "key14": "4K2DH39BqFgxf633zza6BZ7ccrRPkceoCqMUynBF9ce6RocYKxzZ8aCsws6qwZ2pbBVubptqXEW1qmZBp1qTPKF6",
  "key15": "2qwjmq7MFZsonGQHtTPghAK7X9yqj5r5c73MUo9sXyS18zMvZ3qRa9ZixYJT7eos1FgyiFbK1MF8RX7uWqMtTPxc",
  "key16": "5JPtcK1ajXMsBxpmMvZxs4XammkXtz6r9t9XHNC95sxUi1xNxbK3PbBSsoRGW3jw6mk1NnQjq6xqbusMhwwDR1uc",
  "key17": "5BkRZvzfADX7bLsfYQUyf9RAVJcsz7LskFbrDgBAMErj55v9fxWzVkGh8V8DLDQH8FxcQ1uBcCETzqdtaq1eE4to",
  "key18": "2f2knobKik5VH7GeTrgTHQ21Xf1v1f7QadVCEN864c5bamJoFk2wGVARtEtduBq6yboy1dPLVXAHMW7Sh6pPJg1Z",
  "key19": "4297D1yV2AJRE7QG3vxxCybtp5WNs1A4GHsjSMWBmT3VLjJSv3JuS49yZ3du3pab338zadcbktW7vjqYHx5wkhBz",
  "key20": "FFuHdcbh9oqxGgRaUCQ33TyqTtJ9xuAP93WuyQiyBHdxFVw1vteWLMasuKxrDhy8deA8Ykw8fUkWeQuvQzKPwqj",
  "key21": "3Ko9UBhpHoumctEmE5danRcVdUMeSqEgYjcAM2qfVwPKuNCShaibdQyaBedweno6wpiVajPZbTRWqLKAWzwdEhTo",
  "key22": "296ayxhjcg7Y1iPzUrUBTyYbACZaaeUQya8jp5BtQ4PvZQE3XuMDa9kPDJak18qTTTBzDmkyKoMUjiLZCbuWUSba",
  "key23": "2Mm6gzVz5whBymijrdD6bKLBfLpKatPYQUKYy3peDrgyj7Fj77ZeK4TuZeS8v53P4DqbaU1gYQsFBEZ5KrroXHdb",
  "key24": "3N8ooJSsLVWQbW4bcVrBgSWHg6Wwvzdg42AmWiyySn2qTC5BUfDLYUrX7RpabMrZJyVRkk8r1vWYnPKBin8Zhd1F",
  "key25": "4LkBnTHALxErxZMNRixFdNprwNFjujYawSToUsVrodz1Y4BfjB5zgLDeFvrsNKbGhQc2Fw8hEtUb7JjrsgNPYPL6",
  "key26": "NxDojp6CCF8tVBWdC5fyA7YQ1trTPCT44CVddz1EViEVTGdv5TfDfFKn9uJRTrqCUeECS9ZtMJF5v3d2KHWZx7f"
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
