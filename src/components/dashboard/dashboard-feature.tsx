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
    "2VYiaKoq35BosNfwXyecg86zuMsj3UwYYMYzBC1iGizY35dqf9Z7uTphzVrvfnuH6VzAeULziwWxDztCUaydGE6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AyP3uZUS6XJS7trBrzvTFjoMF1MYfnocRvSCeM5Yq7gzBBAW6bwZKahsQiygYxS7zqKDDFH6rMfHjTcsx8eevYG",
  "key1": "59N2xKr3q23t2344agwq2NHU55Ud5An4ty6A8FSzaEF7qEpc61VAto8JnZfsaoXdDSmdHRegZ9pnECAMWABk8h5x",
  "key2": "2wHnL4HFdMcXSsdBE56zsYE5YBzF368LviBjhy5oSE6qKdJo4dHfJw5sRsHCirmdseH38BRG6DJnFHoZrJcRkPXX",
  "key3": "41sdbQasEax9kf9CSJsVKSACEAXUgb2RQNQuBSFzXQKJxQB3vSxXPJzfTNVBq1EzBrEAuLBrKAKB6kRPPmDszqtM",
  "key4": "445wCUEJDpd5uczy4NkHQGbN2zsgUUbkgz6E2b221mcYje82kHYDQUS3BSnDX1xBepjoYS4Xfc1giYUHgHm815PB",
  "key5": "4WNwowSNTUd9HbBPmXUtW4UM3QQUkk8oF45UpCHR55LL4eKenM3Q5TYwPDdE9Tbe9BhBPpiWfCn4MPmmyrkHoJz",
  "key6": "5XwsN2YBaFp6xnkWymPSNSWKQb4Zm1ycSbvqvppfgUzUzvkpe954cJBGka3P2WwzFnDyit2wR2v2BzoRGKWVK3cK",
  "key7": "LwsoKjEzgFPEFWytz5k2tB3c9HdYtCsFZzFTLg65A1CVwmYHsUrqvYx93X5TwQKzNr2iPEVjLsSYUx12t1it5mm",
  "key8": "3jdrmX2eUnLXJfCRxhypieCLuUsq3yZZ8rQ65Vvge1ZYwQ9amxU7ZWuEdjez538kgbu3Hxcta9eVXWu5Dmd3uMX1",
  "key9": "4SDcHhZaT8gu9N8rWQQ1j6tXdGbLoueiMCdMed2AzGWXCjsQzCZbmkqyJCUypJXzR6AL8p55wSW15uNB37wZcwgL",
  "key10": "3Pp2kWuNh6adaivpHFP3dSkFRyYpMPvgaSF9zidEPGyqUwxW8akdiZNT4qvVWXjviqNhpSZXbMdHYW3SpoZzLTpy",
  "key11": "5ggUdRYnrcfheQDSfp2XhbEkxt82XyCaPusvoUjz1nzgN1tRhREeKbG4u4Won49CxWy6MxFzSaL5thhn86yM3JWG",
  "key12": "BvmtV3LYNH1nWhZgCz7it3UFDiwbuhiyUzEgyrqfn9AMQiXJ19pmhm7AtveGeigNvYVmm4Ec9VQL2HRYXcpsN7t",
  "key13": "2KCRCaXWhgmRY8scHMVkf1PiBCZygWjNqzSEXSdFVYfzxAPGPKm3gwZzD2vi5aLEUDGyF5dcKRBhQrExLkcKXXHa",
  "key14": "4VtTt41ktj39KmoUYeJKn8GeGnHCBxhcfmhaDnHdxKPtFVVrtNebzqkDnJA1U48twic24carK9FUWMMoK7WG9yaF",
  "key15": "3B2twvQHbWFpENZ9bivpY7vKh5ERFom7YfPr3vT8AwEF1wcczzhJAmTmhpgv7gGz471J94sVo9E1UvQS8UTJ3Mta",
  "key16": "3CwmoHY1B6nEztVck39HZQTAnCHW3c4DPkZ4Y82J93uQfBn1vb69GD37YfQkuJofm1MdDrqK1iPH4FhSebzBadx5",
  "key17": "4NFKYJH8DTTcQDz98Zw6rX7KVmtgTUSPNABaA8DtwShMy17vPG9fvQy2eRfZbnjxUnoKMGriSDetJhMceGDPwKX",
  "key18": "y4eay4y4opfYqprNxCTuBrtTLhqz8ik87yJVMfcQAEccxSFHGk1jcdEns2RT5avZvzvzkvRM3BtbVa36CqkcHfW",
  "key19": "4GVQt9id3UwwqYGUANvqxLAhbdGvyXCY7YFLyn4qYo6T4UsEgrZ13aunvpc7kQvfQBfnB8JAz6B2VxvHBCqbMKY2",
  "key20": "4AKDShBw47mw2WEaXHpCR4GSS7x3mbBUyt97NMqPvwVCLYSA2xG7HZoFnjas5caoxnYr3EUGPKAfRjMoAzz9iGc1",
  "key21": "4VJFHtS3wdsW2axcnwrkvdNZYcVgeUDx2xcHqkZiHA3XadW13rAdNnqF6hbbay3WPdhJUHkUjdiBsLeVt6ZFsQJ3",
  "key22": "5teTDdDFwWhcJutuj3NyGV7AHZDQgaaD59YYM9LcAiomZnYwFA6oQfW1RuY4RmMMpkDQJ9RLTLBsTaGpC9SGB2ys",
  "key23": "4SKhrFei6RsYNEA8hxHiwm8peDK78mzKPcoK9z794hdiPES3SNcTfwpZ9daHc4T57JwUPvGWo2xmXKLR36iG3tkN",
  "key24": "GEDL3Kci7Xb2T5uCPJKwvmmcFBz6vyusv3pzgPyBA3j21DFE5xgg94sjPPV2V4CQPkGDHKva9zatUX34XAnoqgj",
  "key25": "hgwpc8N3inAcDFdGf44Jj4yJHY9uFJS8jZcyKYZUYKi5ENL6oALydCVTAuYpYTd4JpETu6HPkKV9fV5xhkp4vXa",
  "key26": "5B66RMc7votbwc1TWDSknjSbzepJYoPHwtQDiupv9i919MTNodGCAGxioF3MUVP3VJNKH3zcT8yFvcVEN3hq3VN1",
  "key27": "4jwQLvxxEqiEcf5JNGFtnuPijWed3XfZGyLtdgB2opvGkDjMn9fCVMfuUNDVrNQTFS79fp2mxYFxv8JfwE1vyVRE",
  "key28": "FN4iAmYmYz5RWyiEMKRJsBSuZMkexNz4pTVErsb2ZMyJ92w7G5DcHopeBkuCYHNYaQhu9L1hxYjCadxVxnv5oR4"
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
