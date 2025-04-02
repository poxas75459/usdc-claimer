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
    "YPMNN9PDHUovRxgf1ztA9gcb4yaNrqUx56BgnY48JH9XcaRJd82CAQ4KPYsGWMwEe9Q8MAm3Coz3Zy7BEk8GeMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23SEzmbFt85wQTVd8vVk7z2g2Xzp2piZoJcs1TborqKs2wTCNWWHvWbUPdnhBvu5fBY6epyRaS2rtc98DTR9P2xG",
  "key1": "4Tov7L7SbepSebYzEYzDiELpCvc6MB2tm35brDiMCCaM2YpBGZwhMHTESgJqm18KbiCcu5hm395ia76t2C86T4Fp",
  "key2": "MFBJAMBuT69LNdjrWjNjZKcbfsAeR4kYjZwyqUrqF4P2iQ153xaDbfqgcUiMbkC28eiuzPmvQR6xwGSSSet74iY",
  "key3": "3UPFnoEm16CPChjqrUuemZcYAC83X4KkB1QiTsRje4eTkpA4RyyDFqueebW4soE3mHkjUWyDXR6pvE6f9HdYfFH9",
  "key4": "4ewdjxdvAxsycyusVWakBVv86NHAi7Y2ozJvfSRpcwk4LwMMJRE56QnUGx9m1xp3WxT2HUKgPBAC4tUKZNja9rAd",
  "key5": "5Cx2YzFXqMnJsZmy2bY6uzicejSPur8Kaph66PNQNDaD2B3QT6zLQddJcBqW1uiKTuDQfvyeAgsWpiiNAggnYty6",
  "key6": "4bps5QVAupJ3frv3PHwgMTUYcPnDmgZt8CaPdcYyeRLtDNSMAGk3PMpy6SSERaQxLZ924xYHpmoUTzCzT2JB9U5o",
  "key7": "3x9ycHf9dJfycr68EoxsYmd9oSSTy4X8cECVk19BR7sWPBqhnCg1rtF9EkJV7krUN8L9beWTgYgAvrHTgxZEg3vu",
  "key8": "4XvVTb5AAsFEvLNWjKUPMziJmbemqyWw8JiE8TuiUXUxoa826qVV1bzFz2XfCC8EtgEnHRgPppR2kmLbPQdkxs9x",
  "key9": "qpiatCjW4AYYguhzay3HsiWfhrxDK65JCvfNRgiWcKbaAJxPm7uqonaiwsXAGpyZDj4nMFbfYF7VFenfeZ4wf41",
  "key10": "64i6mPBfepspDi2banQkcZZgtvukDpC5rmzcHhxrSyf6uaJztpWhwoAk7bagS4TLB5ZE6SynNKZn6u3RWgSbQq5m",
  "key11": "61VYHCgLArR792aStd73J6ASiNH3ef3TGkScE2rQdbMPHkzvgHngPZyYZYq8m66yCbTge3EwEf24ikkQ63DH21cz",
  "key12": "eZeE92kruTSbfdXNcQcuWN5smACXeyQkBw98MVVxoTiuzdKywpRocZZ16siTHwkZP2qN9w7NExwN8cF1z1ghB7u",
  "key13": "3Ea6srRLSQG7LjWE1yqqp9BjevmDBDvjRgzfHbnbYVTuJuJfWiHkmSHhU6rMVQrzcixT5hwMsxyLrt5Rae5yUErs",
  "key14": "5ry3Uqiat2YZtTC7x2dPK21HsyoyjuTTsiyrL2h1PvzYAvhPU1GzmRPfmTZf1KPHrLMWyBzLHNz9CxU28hooCpFr",
  "key15": "3a7MoSFyJQj4AHrEx87nhFnsZKMZgFD53uvNEb21S1KgorxiKXm9RkKAEmG26BaUWTpTXPx33bj6c1XovJjvHaZm",
  "key16": "cSKNVJoAqGZFSaenWJhPWgj6Zoq65sdd1CSuzQ7QubvYG7icuRMUmyjXHj4HNGLBU8anA7TmB2Qx6wh1KrSRy5U",
  "key17": "4XCiQ7XZJEC9C7DkoJoJSMwQ1AG3VtAHi9GoZQsvoqmw7KND7jv8daiFJW8ZmcHg6LbPSWpgj3Un29Bbx8A9CuJp",
  "key18": "5qJKjUqac7XHqBMUCcaQVtMZwFQu5JSKTDYUabDyz6vwPd9cYq1iPz3B949grnR8gnqkesb2ocYPcTmScCksS7w1",
  "key19": "Gq7FbtgH5DHJRyNKfkEVhvBv6fhVVqVhtLoGCdG1u6Zdu8Ed8fwUuGzvPAwejH3fGoHdcNU98uBodrqZh2y3pA5",
  "key20": "UsstESoT4V196Txg7oj35Mx8Dh8EAzJm8jgtP4YMXjY8bLQmEgT7FPGLSshAnZVxG2ypDARpzPdCAwQ6v5vSjSX",
  "key21": "4mcayRhtv3itgsBVsESainLKp9qhqQU1Q3ocucW73LUwtj1WrBKCjPaSfyYURe1QBFurcGckPbboubja4pVdsh1F",
  "key22": "4Fuy8Sh55rhHZbCujj2WxrQiz5i1CWZEYajFvPZZTdjMtX18cRbZ6qFTnuoJkHehzToYFocbrNGRh4vWxF5nK7bo",
  "key23": "2t5JBDMPYhnsya45PsaujNmVKQJKCE5VqhkrJbYP31fgXY6GQ6n1mjEkT1nUYfiSCWZAK5RGbxDP5JdZBJxQHxCE",
  "key24": "yDA5AmibnQw9pXBbsFi7gRyQbV37cBzwHN8ZZVh3b9koTdMY1ZEMSaUZ9LUupdSvH4f7BCcbQSG6evBjg85NMZf",
  "key25": "57s3QFXP3txC3ij8zPeXG141FbZ3VpKPHi8YjFf3K3Kc8Byof9AcSwALQmur543p3bve357ZD99J5Ve85oQAvjo3",
  "key26": "44GqHZ3QZQ4wxNoHDPRZzFhZ6obJciigj9UhdjNvyV1EfFiMYZMBpHW1sckjttKPZmLtajRqUZ87xXvW4wkJLWdS",
  "key27": "5mMQwFV868JcTW5WMm8cHPia5KC72TWBjzNQRZkxRsJBTSLhC3gq7eBQDyn5yumYse47cYtki4EWrxppz23MiNVy"
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
