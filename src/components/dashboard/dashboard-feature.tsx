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
    "KNupi5HhfSqCviiwocEuVhoRbmbR67hNCLUdYG19rsfhXZRqscpBrh8nfdTCpEMzTrVUK1kPj1V6SJPkGMMNb62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzwjfwzmAuNGRDcTuUidR9smTccdhVhqAKwUfvch3u6Q4wcJuptqZe6VZnYpUrAZChmUVH4ue4m31FuECjpbM8j",
  "key1": "kGhiDCB64i2Bbf9G5eSU1EN2JKLqwq4jTChZhXVWbHzvnBKZXNwxWZ1KEnuC9HAw7CALX5BrgMEP1gf8yhTm6n2",
  "key2": "2xJjPLk6rCzUs83bfoVGB9tKviALANWeQn1XYzSUmEzEdMkSAETU28wYHkgVNiStUscu2GrkSRbnj5jdMyM5oPR7",
  "key3": "3dEtVbqMiRERMdW1s78bxbCojhqCqYYKWmpXDH2bs91hpTo44TcibgcSQt8aNXz8b3FEwtuvEuks9DExBoJaHZAY",
  "key4": "xqeNKfPmxkhUuGtmLupYGfG7KoTYmXtrYucjKyqpKxkBUR65NH7kjTLs3GCSuirisybTfSUjj1BksFZTxAMwc4Z",
  "key5": "4o3d3Hx9hQjVnBVufsDd5yybdjaq7jBmkVxgsWLt99Zvv8TR2Z2d2f5sBrkzB4RC6b4nbQdkpRiLDSheHnA68UcD",
  "key6": "KwmqGdqUoxC7bGzTWYziz97zSUhvQYNyoTbKhQj83Kqtf4JXexQ97nCKWkFTLUEnfYedqsjEaB818rU5oeAUKpy",
  "key7": "5ydz8Fhct6jKCsRfNVN2GmAnwV4EXHGj7wgfHwD7jnUYYvNuJWoHe7J4RTb5XmWF9DG3JmUEMEc2ksveeX7Um2nT",
  "key8": "3hs9SDxJrrcERPhcfoHWx7aU2t3avV284bx1rrG5CfrSWYY9Nok6msMcHesHaYnAuVs54s85NBmQihsEHW7Wh7dn",
  "key9": "5Ru4Ts3FJ5s2cZ9v5vVgcWNqk47sbF4nK5KbUPe2xuEQAt1wgspCcMkpQhyJ3oqwBMFiNY7X5VhATfGf74moG96r",
  "key10": "2mCngF3VhRTMeLdpkUZ2XH6y3rba2grZrDAyF9mQwnpbojYS9AFa6u46rprN6YEDb68ehnroGsgjqTbfUaLGrUiC",
  "key11": "2Zf8yjPr9ZY1wVP1tgfoituBJhYJXxRKeVvLXTiYPgZf8AXdvg71uTr1XPiaycuo7M5QHjfJzjfz3Jri97XwSy7s",
  "key12": "5fAqgpR7ugpcVrMBGKUe9qVhSxkS4m6gYNZtuEeibebMjpKaoNnSnKwETp4ghjipMAmkPzt92vqfH33NdjR7uPBL",
  "key13": "HQ2wgzd7fT55tPKz2XhVvPA1RriozFoTFNUQdeqGqh2vTiraMx6vBGQhfRdbnj56QMUu5xTYmeuNFghkZkvgF44",
  "key14": "3F8cwFhXZUo5w9Hx48QeuLsCAvyds9snZBhWLfJ2CpLoJDM2SM2ufYCqHVBWiYzC85L8detgofXNUS4D51zaYnop",
  "key15": "5fVUExVQXMwmKhHMcmg99qHkLamn9RXF5av2sGvY7JGTQbemASF2aJt9d6yg9a5t5x41YRbn5RqzPkXgj3xZzenq",
  "key16": "57Fg9ZYY3DberNCMyettQE5a7vKGbUq2pMuHhAdATDypwC3BYexEtb1pnfRVpGQ4SE3NP3qACRFdDS95GypXbpy2",
  "key17": "3c5xc3fcP3JeSxRoC9fimHAmFJr6yR6oXgCgGDkYEmADA7BfyWmd1eqLNaXFDM2rCg4bniRfDZD4HwJ7tpUZ5AE5",
  "key18": "2Pn5AtK3V965N7yaVV7NtZHmqRsuM71XoYiGFajtyiHrsEpNdhcNNB5pk81dZsFtAviFdYqgDk3upT6JdNgm9MYx",
  "key19": "3JMDJ9CsrBbvvjw75f9SVNMj8q3dJgZKP84adTnogdxTSs1dNrqEbD9prxtHTuv7KiTjeyvQGBEwHgij1nkTXhWL",
  "key20": "4E9F86tRGBDyNC6o3tixvZrJJG2cgSrWPf4fxKT5JiFRZbYD3QHHcWAza4mRrWJP3VScAd9DBz2rCckpekWeRqP7",
  "key21": "ApfBWBcTjGfm26oJoeA9mw1EbeLWUKoDQESLP3rAYXwj9JEmZLzUuFwLioKPufvvwr8iMTS3D7FVfp6u93hCXQb",
  "key22": "4b8mxH378KLu9qyoDtGSR9ZLRW58w5hYgeaGUJzpX2EGomQrPwgnq7Hwq23894KC2gqAdcDyRCJAMPEwa4UWWEaC",
  "key23": "4Xnot46obGCXodps8ga7QMaqE5At1RPe8McYzk4TugeqteSHsearAdBXeV16GwyqhUjStv2Zso8Eq8Z4zC8KsUdm",
  "key24": "4ATvkRZXGdSG9upGVEindLnsdbEyEJVLrcq9yKpCG23etFMqKTNmwj5TJF9JujyZM3QUZNFLaDaKTrjwvNoSdRd1",
  "key25": "4T93wexLea2b9zKGTtR7T9sXMPtCaHijcUs9qFjb8XmMCyS4amrAEBUeJhmyvpBYqV9A3pPWgqgydh3nYZ7zrJtF",
  "key26": "2hPycYJte4LboSZDnnVwqgqtmzAqN1hGwKhWY4uEVcV98dZuc8gPzmbHonDrWQW7XkN13Hn7G41iamiTzZChUCB6",
  "key27": "4BwhCjo3ZMRgFtLAshxuiFejmUZn6tyhBY2tGuTxxiF45pb2z3Quf1NJnNkeCU4yWpyNjYAf4gNurpyQPyJUNWjN",
  "key28": "37sDLZY3KGhLisAziwh2CJUErVHLTBcx3UP6JXW2oqPNrKCw3ZM3xqUj4QpngMnF8haS7wV7rEdpnZ2Uksq5qyiM"
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
