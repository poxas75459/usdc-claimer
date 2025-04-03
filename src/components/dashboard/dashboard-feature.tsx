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
    "3NhVGXCwjxLGYLJDYahLHA4bSp5FsCWNLvKgQMuvUdbd5TBRvCqgnJzyRYwMwohgBCT5wg43NgmW42SCT6xnaMDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zYhp7qcDzpbPrNE4WUovvSTm1anfLYXQGxQaSvRXUoGkssBTX3DKNXJzj61S4Vb7zQbYohWfHDwExMCnyVas2E",
  "key1": "3HrpPs1t1Jwk5rqNefvBDAK9y3rznP4Ebh27dMARrK6QqT38L36TwxpZ2HAgmzcuuskt6i6V2D8wYtkZQwJ5UicA",
  "key2": "4R75QmkyvHGLfv85Pq6eEKHADgYfHDHJxLohE3tUzXwmWtNiJnEPUtf7zjbHnn8WCKkYMYCi4P3p37QtqXvtTCU9",
  "key3": "2pqZNAksNpEeYMnJxXW8BicNMNwTkvRgMvevgVnGj3UqrG63jY6fdrNXAqM6yQ2FQD2CeXEExx1H2bK62yGnD2p4",
  "key4": "59d1krWMMxQLuebz3XoCuC5UQ1FRxyyfEzHbmZHZSR5bpWnSjAjrt4qdEoDpA6N3YYmZeFUL58XLEF2Ggh8ZAfBD",
  "key5": "NSCJUkdSBUkcRFb9W9Pa62xnHU9Ke4N7HWt9LrGuRnMSSRVJp9XKaDfzqAbDeihMWYKrpt3qisLtnu5UF92DJJJ",
  "key6": "xY3wH9j5X8gqx5JbycP1EaE3bWjWNfJ5LE8HRzuF7PUvhe7Czm2wzPipP5QhQaTqBgVDZw8KVhZ61XiLZByDYAt",
  "key7": "fFFgJJ9rkujderEGnXUy1ZGo9TUyXUt5D92kg1KYSsG8YnZmm7TSn2wzqFDW5JoacEP7pDuihCKxNsxGgVxhhgU",
  "key8": "3G8fuFF38xh3mRAczuUQophw8GYAnqQHm38W1LsvGN5oMFhbDpDCnPHK7K8V5PZwcVNFkqZWQde8ooT3xtjsNjeF",
  "key9": "zGQEZhMsg5drtCBbwLwzz8R8Sq4yFVHL6ENEycSZ8QoPRGzoU2gZLBU3AmTjoTMY9ENVRPgNssj2FFRbRJ69ieY",
  "key10": "5EDEzTxSkfZ54WH56sZK7btRjcZrsVbejKV8hTiyeF4jCpRLuyEvfEXALEoz5nyoCLYDHUPhWMnGw5zbZoF5ctKc",
  "key11": "vaLqC9Q1WAH1RKFMV5PUrXe7YCcp4dBbjj2phzY8zKE8HLZqKeodJ3Ef5zEMVtrcf8wvn4uNbrXEapSVY4HSvAF",
  "key12": "5ic8yt7xWsFJ9VTvMdkzChgw75QJypnJop4JKEdyWrU4ESFoARnvBM6TE1k1RuJQSGu1S1G9hVHrMtfj9cEZfuyX",
  "key13": "9t4VWBumEag2mTgpeVaMHNanbzt19uURUx1zeX7xRju45qNwvezEojHJQZkwLotSFLdrGDeW9Hw8xgGqdK4RA5t",
  "key14": "3rvLGxGUYvK4kE8XrAceJWkE3gXCEyeSkmCaey3jo9MNJ9qEqmoU7sQKZ2Ls46LSx19Y1FMU6rfDZVJfqBSSPwVC",
  "key15": "28RZC71v87n2E8uwawe544PUtE4MEpfhZZGSNmKNhkY441knJLM2qJhx5V5zC8TaY1rsAtfcu8EsnerMKt7tMVrM",
  "key16": "4pYuEUwCtFCcBEhAeEQ2G2YiugJFWwi4AdTKrP69oruyetfeRj6iRugGTHY9GTL3wZ1tS2a2sDTuKir5N1LYLBjY",
  "key17": "3NmM9c6vod8Bst4xKRS6a1xkUcCiuPHRuTMYqTjhYVyPrytPbDwrL5MKaQYE9Q8BMDcqLhFnc5vQndNrYuY7Gtw5",
  "key18": "bbi1XFEztU9q8D8PaGvhyocZcL374N2iEHu7HDVLqpwwcLkt4kDSn9vNfUWBc2xzYQjQHM3ntMdTHuhxoZ3GG4a",
  "key19": "4mrqHaGZBrnykaPRWciq9CSj2L4CVKEKYzrAsBD1q1jnc5Cp7s8JPRwU7pmDotbBFgVdFLGnKLz9UFGs9nNFfwVP",
  "key20": "37QakrAUj9NY6BXiA8sumvBjrPL1Ns791NFJDY9aYdNLZqChF7GWE4MfEZKbSHVT5gAEdRRdJszDYfUVnrXbYPUH",
  "key21": "TpW6YVvkFECKnxE6yc3KrwNuMpDr2NmKUiNVNPazUvsnLRoXaUpKWXfpXdh8fBX9AK5nwEawHmyk4f1cTkDeDot",
  "key22": "2S7wZfwjFHasfNYwyHenA3nxsXyXZmFaaqjyhPqS2eqxGuSRAoJip9KwLYE5jG54c3A6KczVkgZTmjDHMCcaEKhF",
  "key23": "5KFwGdgYNCZ5DVo4GBvAZkMByuSVp6W1qLMqaN8canK2D4Kus25AQ12mk7huHVpC4TV27UabU5i56DkdocyhRRWv",
  "key24": "5H2fBcQ74waaSKHPwja2XbLoBtVndHoSfGRb3xRzm5MgLyLLZXuCNGdLyJUditJYcRka5EdSoKhEvSzGCL6QoqZe",
  "key25": "2jPBwP7BD8t5G1gEYwxB7QsjinzdDWLe5jpNk2gJ9pThDxMfx6AD6oCUj7oBuijGX8MLMng6khkmYD4UEu7DhS8B",
  "key26": "35coVDAuCPacL3dW4AJ8xgwSdfarYiLg4Nyi4vA4HpbwwZjBMw8CN7dQDbhMH6gV8dENHLprdRPZH7DLiHrvTvmx",
  "key27": "5jn9ywe4GJXseFHD8u9ubWPSR3E4phUGdf5a3x2hQE5h3CiiUqtmGgugE6EN8J6UnNjK3V6a9LjLmrLkMScJPag7",
  "key28": "Ac3QeVLXNHDiE4S1VzsuiKfqvAZz24ToMjtH4FQLhbPPpxoP2v3Q51JioP6mZRjStesKfD7A2H4KH1ywhZnZSfm",
  "key29": "5HPFVpExCoy547gpwrPdsGF8PViX8qeWB6LnkyN7ArSjUyJavcxFsXozjmHkofu3aKokG47Uu6vseieQWXrBZEpi",
  "key30": "2DBoVUiopho5g7REJ3tDxfFcBFPs5QZCoew43LRdAE37tnj52EEQZEcDNLSanXuKhuhzvHcsQicCtacocA12ntUH",
  "key31": "ZoqKYtjqjTjChZje5Gfh8WgrrLE8qEoV1T34xR3bCQ6dETaDxEB29H7XD7p2TubtfhPZEK7Dbzfr1JmcAamRMG9",
  "key32": "32QrgBzxo4nJbMDNCZumToEsdrKm6wBLE9kVcZ2UUbdBrS24HeN9UVBKAoSCKXs14LpHh9PTDaFR4GXC44nqWP73",
  "key33": "8UHFB2tMcos2fpxg4mRXVznm1ykvQtsbvwLXSYt9qTQ8jTqm9pVE6xYBKRPhG6cCAgnqVkfMXTzCuH8PdDS5DZo",
  "key34": "38DEHXbo4heDLnRAt5Rgzb8Hw2atPLw3zhBfMC9xoS1JwMKs3KkHfHgxTZSHUWduLGB8YMRHZdkonXuyK89AhG15",
  "key35": "2bWxvg1j4At86kJoXFj3QcoUTUEgU8q42F6481iJ5NnBptf4xX4cjRtJVRyVxE9RDdvAUFLQETAQ1btWiNnAmTEw",
  "key36": "tpjot22fknKDs66Xm4ByVvVyg3aVXS5kgB5scofBcY2J8Kdcv6gSnfFHtjMxqLn29mh1nftx7NmRqRoxtw188he"
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
