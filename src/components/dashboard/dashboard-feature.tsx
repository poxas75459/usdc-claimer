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
    "5PLtWid2av8dAEE8cv7p54fH8Ur1hgxQS245uXJMrRRekRLJiZjHzrLoj3e4zC64uv1nUkR5SdoYcXqRAchfnqRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYQhzFdL6ietSsYT7pKasZq6Lnia9VT3opAK14QzupcBRyEu5ehsAEwNJDzcLrj7HF4VE2AYrbwocw2yGpS3bzW",
  "key1": "3nYQDJURTH3ffUBL4pcMWTTBzXTwxLkqEC4DmB4tGtd5xRyru41LgP5f7PsGfTsFymYdM4LtWCM7hypLc46MxLod",
  "key2": "5rMket62WvfGKjF1gxz2cVk48pNngtxUv41M9Pu4auHjx6LGKbXFeqtMpVu99chWH8veLKFPsMYxt5Eqm4sNzZo",
  "key3": "495ox9KnmkgQ3gaGPUBRSN47rkQK62tWoB4cZJspgyjygz4v2mj1zSETpDQYbsUCh1KdMXMSDieB82wXnCYoCJq9",
  "key4": "2PhRZ87b9BTsUVXuKYyGrvhwyr58fRt5uAFWXLSrhnikgVWoyaw6Vacxsd2tri1AmmNBnCYYaSRANUBupmtF9h7A",
  "key5": "2Rnu4MSrAFQXyavKvLKQStWbHwcRnm7yrxVG4nLTuHcFkAwXnQ2s74c6ornmn1mEEjTBsfLnz2wjsudmLjG3Sfrb",
  "key6": "3KhoLq3qZ5RGwtihTFCnFYgqn1UaFZ2x3MqYbko82zZLM2pqLf9ShUKQBWVudPY1b39aLyot16gkDFXWYJo5w3df",
  "key7": "2x5wZNzbrBc795sWu3xQgbm3A2YtkHxVUnpTzE4aaGjhCKmSTSS2gSK4AF6av5DaiiraxynhT7URMeiaUEruJmig",
  "key8": "3Y5MSvyPnkFghY6FeE9Xz3VnC6b5PguT4spkKax4Re1cDzVhTgMpCAWSi5Fw8uHDaWLVd2JNfoqyysknzA6zmskP",
  "key9": "t4HfpGwnFr1htCbnPUYW64t5md8HC37DVYg21aAo7hhZAnVppfeBhpRsj33jop6KmiUWkwNnWmQ8RQgKiuNaUL8",
  "key10": "2rLZVt5MnfqMYg3kttfBg9bq9T4LBezG1sTG76ArKhHgFbGLR83S7tQYWN93yMoo6pPMWg3Myku4kgWaTHGXT8xf",
  "key11": "j4qTz2YS22X8yBZXSCpYhmAh5ftwoH4pSrZzaWiu5V9GCBKQfwGNCVS4fSQABYfMRPLExe5mC1Mieon7WZAqrFr",
  "key12": "4UrRFm9sKoDawccwgRrdmaBvEGXU2qHcfkGbF1Vik9nxHjTcvQf5KLe53LeSBcTk67EbnGoMCF37mkUmyRRF13Ah",
  "key13": "2y5zf7423r58oTQsVuQoqJMcXwNnRXzvbdoKGXMLeKDeZZhpAy7WcdnqU1huR6y2HeoaMwVNLeQrMuCCwH7dahh5",
  "key14": "5usff8R1JTgfNYEDtobVXVppNtvReccfgyDd8skPrWzqFXzKLHP8VrYSUwEwy9jgDUr9Tdas61K7wTKLHAcMEaY5",
  "key15": "2dv79Bk4UC5RZhc61TtnZaXeWWd9czisj6SSmyYYDLx69sW7FZr9NcMW1Su9NwZ62TEgKLRQiAuhDRLr1eXUBe84",
  "key16": "xVFUpGQxya6wHu3MvpPWwGQKojHAsWVEPcWXq2NAqqQ1JCzA4aGQyr7Z28nTsJWhP1nN1kdEmd7fm6FQkcE6oub",
  "key17": "51DgntRHyon4V3XeUvP8CLD2WWrcRyBjeN4WjFZoafpG5kymgmdrGaLBBE2fxfBPL8EiAz8HtooDx3hjEaEDpn26",
  "key18": "4evQTDNbZ7RmzLh1ieti3HjyoXTUUFevS8ZFAAJVMgWpsTxMxVDepmFEDDM6nmtRqxxHN3feEJTvZ1YATkmuY2NS",
  "key19": "3SEkgAimAeF94ec1YNpxv2cuFh36nWvvQgj9Wd416oVZUZb3sNK7kVZQjwzoUCwX2M8QKTgqtpo7qw5vUb1xv5fz",
  "key20": "5RCxbu5C6rnfxvzCW1c6ZEwebg79RTPD86cTUspfFfG1Aw4Wfr2AhBNRJvLHKkebN7EECtw2MimkSvo4KLDHsgT8",
  "key21": "2sehtZL8qqnEmzE2LsoTyhWoiPnTa28mcehaCR9rSwMaNDnXqsHW6gEmmjKemqzo49HfyYLghKBMLTFkBzbBPrJB",
  "key22": "5CRrR8ze6nWvs24K9CdwKNaopQJgFgdiTcLksoEu54oWWarwXTnLUDBpxeEbjK9gjai8ZcEcNAmasqFxGWdXKk3w",
  "key23": "8eibKuszX7DDBJmTbJSYUVW41pzk2a4fTz6apLsjK4rgSJX7MdoL1Qxc5NSvYD6Gd7srn1kSqyBQPDitfLZZMZA",
  "key24": "xtiguKALcqMKY5nZu2DuVXP2tJVPZv7JbyCC3DVRRsU4FJgrpNzByQZ45xowTYjdyee5YGz9XimxZXkvtptQPCy",
  "key25": "4EciML2Re8Beae321AZM6K92TvX5MQm8ayGPNWB1YU3qFR471qfS6u1z6unLZCYqxrYJyPbiispWZvnDmnpQB2N4",
  "key26": "KsmAdPazc4SryTj6RgxMy2hc7Timda77sK7VP3ExjrkxBqy2o6mKHQXjmg2617ZACLkoY72rASC5jVVLmn5FsPD",
  "key27": "2sZ6SdiRp8cGZt6nnmqZPRiWP3LDe8fa7jfDvzdJYRX1PVhTnbDwC5Y43Goemc3aKcw7DCJPyTMgoB6VNUotRax",
  "key28": "3gULwoarw1V4H2osLnP5UwLWrke8cjBKGvTx2tswMNimUENNy2H6fNTkrz7CLthRs44oSHjJNNxaCmHQ9hgkK28k",
  "key29": "4uMNL132qPSyhZzb5XcEfSQbiAXeL27jY7r65hYXMTMyhDGfmp9zc6SF5LSyvzj6BdNQxWZGtT4RTUUj5mrWcM1V",
  "key30": "5TsggaWTStW9s8JMt74FdPNpbyTw22C7vU9yUGZ9CbpC6F25YPAXPHbPrfc6G5xTwWpZ7y6iJJNJudrZFTMyDx6A",
  "key31": "4aTEsUzQevhmLjCeVqLEXqFGJoC29Ei28JfpThqbYCb35Rw8KeetJyyrjuu3WK9WPgCmirzJ1sC3ckaoxboerJmp",
  "key32": "36EW9iwjvvNLWBXfmHMLRFjAin9QiSmgGmY1Ur99REQHtNJ5ymLbKXu1gzke5Ux9YGLT5J7uLavgNUQBuZ8U1zsJ",
  "key33": "3F3Q2kM7Nk885LgTmCZVnX1cxpyLUyGVyvet9ZTVGELt3Uz9uhZC9PuweMVtqXn2s6sNXSTHSCWa5Ad3SUCnLbkh"
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
