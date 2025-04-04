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
    "5etDn7eJyc2uFyab6hye1FuTDfQzQMsLDoS5L1PS2ZH3w9kp9CNV5Bk2yKJjNn8BU8eUY5cZZNMW7QVp88JhoWk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMSh1NZjHYKWjjvWocNAYdafMCMsSvzZXZEzb39NMS5jHnwNACK8AkB1uWP6T5ejfhj49afaNUMZXFKZj7jRhSL",
  "key1": "2jz75U3TfMNcxUsxzxNdaL7oHMAsFwEsxyB2txW7fgHpRtygcXhhk1zewq1vxBtsBkZ76zUzo43jUbEqHdEAbWdy",
  "key2": "4Yxrg2xkDjx7zEvm4Q2MKTG6WsiYRxFVzGik2299Q1vWwQiky1Sg1heSa8NXVBJ6NmBriNxQ5M3SwshcBsHxfPxV",
  "key3": "2aExtm6vviapxS6rbmzQ15Urf3r1owFRiz85vnbDFMYSShntF7pvKQFWtam3xGajn45wcFF9LnPe12r54cNaLhgt",
  "key4": "2Sr5YFVwc1zVBS5zJ4t8MuqkkpS92zAyLXo2i3YSaBHbvPrSctnsb2iZRo6aEYPpwL9dLUbsEbnYd9urLxa7dguX",
  "key5": "5LTLt7RSttry571NR8LNi3syR2aTfTDDEiMkNHfmZJQ48ZpFNr3d78FjnTAT6JmL8rVJaCLUWyNbHZrn1iAuYD9Y",
  "key6": "3YoBgWpWyFmsCdiZGrbUNCRFK7ggKmDgzEw1nehPT4nqF29NNNa7Ja7uTcAzkYjBD5FpwHXuAyWA2CHE7NKMKHKW",
  "key7": "2UMqMMFr8cZitSSXgtYPnCU3senoLg2RGQHLGxXqGKmqh4fJXueP94X2KpUsxfTzwpkRM5w37DHotu7jLekfCjNW",
  "key8": "4Y41c7HSwbyHLJ9rQ1zefxTpGVR2cgcp9efM7XVyLpTsTiFpHfYXyeeL2VfCDAyJ72egvDm6vwcHPtpFKG7vfpJK",
  "key9": "2M41XtGjTAoDFeebCjRDvrPdsi8PNujjYh9kPBWYLvsBYAZp18M9ZwJNDyKNwvCEiSiipEK2sRtHED7r9xbKzJvM",
  "key10": "Z2Si9DvsjzdiMjHoriYzruiQq4YPEZqRCHVN2RjqZYnfNWRAdkyYiA1jUwzC9uDiBg5WU1iPGsy1pByPRa62nrb",
  "key11": "4rynFXNeJALKtft7UtGMmzMbWx5YuKNFEnhqcACWdMckhXERt7eYHbPDxEgBevh25XAspj1o4ueFVwoTSpX6r2dC",
  "key12": "64CoR1DfAuZp5uJnuyu54J4hHZeReHsYjcaT8QxhET1K8Bqm26xD3bZriTmjVnQhGs2K18MQAtqKqxeHEqEeX5tb",
  "key13": "UTSyJaL9n4AM2BvizHJCM3cKJQNZ8RTkSUeXmacFfsSJWLXaEFftSPV9r8T6kySgseAGzSzmzYu7aFUSecA7VgX",
  "key14": "5Mhsn28KxMks9e72Ak6eAtjWM2G2CXoEijJzsrQJR9Y665auM1vSNzz3vMbJNtvFcfjij9RLkSMK2yYWkyxohG1Z",
  "key15": "5D9es6mdT3sRYEQrEq1BFFGC4Kure3o1Zb6UPU8p1ro8HWmqapP9JXAHdGdUxpzxBhqZZ21aGw2tjAJGdNN6ccZF",
  "key16": "5oeVnbGQuSAVaAzWtN8o5LtLr3DxpWFYCeTzuk5Rm3WV8EQMYB6LKPS1oX1EWTdpNN4xpm9taTwB6D14fQCLstYn",
  "key17": "4inUnd7qRK8FW9fJ5M4fZodrqRZrMPCyaVys3j9yBLWpDkZy2ZxV4tvwJzWvhsctuas1FntgGpZmHix7z54Sja7S",
  "key18": "gZzvQNSX4WQMM6RnJV8qMSacnrVzcG84LccztyeqhXUssuSKFZWBiehHbbfm8UGjMCmUkrNvu3rMk648DYcwwJg",
  "key19": "W7MHstwYT2Bg6iaHGf3EitDN2YyVVBpAwpM1rimp6rXy7gAX5SnrFsZCL4yZ8rGKDRAMEkgafuVNfn2Tr2jAY8Q",
  "key20": "2B293BhayGRN5naRpsy2rp2c9cJJwrf8wPqDRbDUiWy6RwviksjBZdHsz97suHhZcztPCcsYVwpimitc1bNBctDK",
  "key21": "2rGQUAca2cufMmZ7rfiFJZAqKGbS7Tnm6cwCPWXPXU9i44s129834LzKEe7vsxFjnX5c8UAuU81Vi4jHCWWJcCSU",
  "key22": "3KqniVAQoxou7ErtiNGxGejLAVcVyitKDkDwgugSzSdG8bAaqmbGHpJnYCqnuSdjvpB1CD9Rm7M7e8aZ849Hu3jf",
  "key23": "2mfcis3XxifYSwrbqDZatNudx64Y4gMYqVocUfh76TnL3eJJEinSuJkF99NkWVWCh7GuL8h3D1bbBdwt1mBu89eb",
  "key24": "2MFcJ2XrVfV3aCcFxXTW5eTu35jyd7ZD3DsGPHjoDR85gwqxEYTuJcKFbsH3pJAm7xHTLhsBiYiXxGfP5A3rfHJT",
  "key25": "2cHGykU9UpfmJz7ouT6PbKCekaCe5MQhpVUBTGN69XBEFVX8cht3offgUd2ehBfd5tVhx94TweuSTWhhRj6hnmqz",
  "key26": "5FcsG5MfX4tzHyKtJWBX33C6ijGt8KhEAEwqnySs16VhmwA8w2rDYg2XihN96vNQCkj1GS7PqeGyVSZ5eubn5cuh",
  "key27": "23B5iwmHXZXLU5TXxMUujRNkMkqjushQe598ebhT9SU7BHtRi76wq2LcchqYGzjKC8xec3uFGNjtfro2dbkE2RB9",
  "key28": "2FcPXApNfcjtemHFPyNUd4xbcUYrbzLaaoy4VrhyqVe261k9RusFBgHgbCdJ7gQW4xyMYFk1uXzwDp1ZxbM9ckji",
  "key29": "27x7bdW3ruiWhWKPfz7WtMmCPbYKhLUDReW1w4G2bUBCQQQ3xCroitHpeYTG2TFkuV1xi1UCYiT5DJTNKwZWcBig",
  "key30": "2JxSMNPqr8HgR4F8KXU3JUhbUpgMVnZ3BH8TpdRJc6xYXc3714Zg5U4GcHeKK13GzYrpLudFETJwqLgYBJPuKCpP",
  "key31": "5oyaHxZJeH6bDUjrpXi8nJfCT5SyrpHsQYj2acxRjDrfNTNTcgj1oKe9SrkbGp9XkXAqcu2qFRpn7aVdTSb7D7iW",
  "key32": "FmJJtm594eztaCPD6TsNkd19uTrXENpWbz2tQp29pzinLjzAc5bWjBzjPGKs5nRB8GyMc4hwNwf2mxcozm3w4p1",
  "key33": "4ev6k4FgkGUYcSsU6NjkJ6PJToQBK3E6Rbfs6rQuECAMCcJ3gB7KftKF6wDmFVgpm8aicrmxGmiQKvLFiPuVFXi",
  "key34": "3wAyLYgkTWoWAhLfcWdDcQxznq3LvzP7Cb9ZkMmrW3iyVmagspithVFwkvzW95sZzyUNdCpzXUZPrgWcQ6KuNyzF"
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
