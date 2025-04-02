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
    "5SeNeTUT9xV6tXmYpmsBV4XwtE6CEouGnY8QrBk4gLPFkYHqjUtTRcd1QqW4JtG2hbcUKnfKHQVhUsGSctbsARjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UetS8UvLUkdhnu1UNFMC1HnF6UnQqmzAd4xa39wLnVmCC6HjJcW8Pp9cyAQMjHBZn9ZiECZaXbtvG5wV1hELCAM",
  "key1": "2M4CZXBqeu65n8fGfgvwAAisd6se6MAEnc7mKyFaNJYiwESYnRxe3vhJSCM6JXgGPz4PmoQgu1sEpZwPDSnmSdkF",
  "key2": "EDNojhT1ERrzBNy3hNcTdDSPDZover9PRJFGcStznbGDJYZ7JzmpEmhaRXcpCRsixQMuGsqQjRjk4HMtUDqA1zQ",
  "key3": "67ZLywHaVv9hq75sgyg1eTJXPQ2qXmNM4iZykwfCWfGkBeTrfjntZk9nyZTpgDgkYZWvk3avXNim6cWnPaj9JQay",
  "key4": "24NCssX9FxvsGMXBAousXPbh35kbdcqNcM5FoQoXAUyGWnTa7FitMt1MiahmHdzjkvd17HxF7SVj9pcczp47Ymz5",
  "key5": "5zhUKaqqHHVKF47MGDRTmhutVpUEiTb9CrUt11RwT7PYJQvywbn29dh3PELtaxxTCnyRuvLEHdg7xhNJubnidiyQ",
  "key6": "29Raq9q58pUaC3aKMuf2YgXye4GstYdPSrYpAUVqATKyFmgxrXtHZai6nAyqLbz6cr3P84a1DdVQTttdxNX7nmHM",
  "key7": "6DtmZHTzi1Px78ofp6Loeq7HQepAhXcoD488ng3Hxu4y5BqMmCeytRLVRrWyeJDWPmM5T7Kok6BnMuTfrcrYMfb",
  "key8": "wNzbkZvhdiv11v4cYggHaJnvvCGuc843ZW3owaaRJ5kEbMAfEehWjhcZ1Uve4YQSRBSNPGNGxuH5ALa9UUivQKc",
  "key9": "rjsjwwV8huDpbJGKaioDWYdhtLtJTgUNDWz8gSkUrR9tJnKxHAbKiKT3WG4R7STPt19o2pNWigaabZe5PuFzrgU",
  "key10": "66EJ1wZncXkrUt4i9zzwCUXAU5mo9efwPMY2fet737f9oVpxi9Y11eJXVaJsU1SZCxoS3q3Cr6uh311shpEqnjyd",
  "key11": "4sTysPwkpcqqgSn6J1eSS4zymDtHbtSL99Y8DYJymfeXG75TGgW5QcSn6RNEFf6rRXFk8KdLn9JVtZfDgrv9RqJE",
  "key12": "5nfY949KEhzUbqJteKx9p6crQR4h7ey92k1x9UDf2E7ZZbhir9ZGgk4J7RfipGfoc5Vdagat1XfWT5Yj6TiZps9i",
  "key13": "123FHrwbe7hNYyNkFvNHaU5S9SSrUsXd1pnYzrZZzVU6xztEWt6RgK4LuqsqSVBSWk8mr25vWfJx7Yj1BWbmh7dE",
  "key14": "3fiLW25dhCEptfw71Ke5VaheFdKtjnGjXPGMNLw7HNsvXe4yEt1cK9m9VBJcYf7WxsFALqWXakMFdFGaoCGiQAg3",
  "key15": "5Ln8rvPZFGHzay13jZNiazBR58JSyoL3Z5ifAJzfd7mWU53hKyAENThGjVUR7SNB8xPgezjjppFa2BnwF6HH33be",
  "key16": "3nLzQJUJnmuStAUSgyKmFHYw8vwuoBcAYPP9gXcstPRLPX8dBbNqCQUEw7socw9Lg3FHi1vQorXNqDg1V5MFVVmU",
  "key17": "3tuNkcn6rjybdkUk4jNPbZDcEJpBYCvtG8MugAL6BUBeXqpXwNpF6dyQ6ycigRXkxEL8hFr1jU9fcoTpzj8uMFFL",
  "key18": "3N5EzrQAbYBTnkRqQSGaEMLbj7XwS18ohPgWAtXKeZ4dVFrWWJVH44X3GieydYJ2EGaB36qS6jPUQDUEnSr1o7RB",
  "key19": "5xtTtzvwLLjeFmud6ytiEan3tWPNQvY5bYnECFH1qbbx33a4amFAYUKN6FHftAS4vW1bLjDhJGgYoH82TR9Qkkw3",
  "key20": "G4iHHXJpJFRWMk1P9DZt1YiUwniUXRJUfg2QKqNxpT8nuuGQcxp7eGL4wNsDhFycBDQ6UCiT99GK62XqygZgZMy",
  "key21": "4zKBnUb7YKJ7Bdpq3DR1vU84PGoJy6XzyWRsHNvNfKjEU4ZsYGtgntsunHUukZRvJ9tyh9UYGyRCKymW7a3KLnPJ",
  "key22": "5owRBeaatoU8vX2cBRKJnNiHqKbrXAX9DAxsKUz8EvctxxVv8mhat43KsobR8NBdkJFjcRc1E5Fo2tpP4gByysEh",
  "key23": "466vnBW38PB48REonWdxQLo4hLo1zvxSZ5rGajuHrvbFReHy1C7wZuijucpw5d1gmn97fjtNajXbBouVBp4v86de",
  "key24": "5pnQyiiHP6zmv517GH29hfucYzucpPyDK62ZqevPsZsfWyZ56z2S87je7UVS5XRMbrDJLunELK1ZmQQChyPsdjLc",
  "key25": "5fTH9aUwNDhjgyfcMXH1u73gbUeiQNtwSozB9j3XMSeM416c9nVHhZANo6cVwKZxVbBt1XwUcWau4ce3HLQjTQAt",
  "key26": "2f3vE6B7FXYJA15CapiutLg8iqePBkekxQm13JLGUzk9BbJQUv8e2eQdCG2ynXZENjw87VfpcomdjDbuTUHPwen8",
  "key27": "2AVqJtUtcp8Wg5zcC5XCzedLXnJCCHq98x7QsBHj1p4TC85M2yzFaLHYVT5Q3AtiZHF6AfcibZZXBLbUCsDyoXVt",
  "key28": "2pw9HjCdBZ7JxLu7ihN44KFpttKp5MfEoxDyeLgRtkP8WDuLAZ5JVoortN97WgJdpKeWd9icPJm7SL6EnjDnzG5d",
  "key29": "Q1SRfunpz32RSj1Xry3kSDJwYZoCkbeBgGe5unioeRH8TQxMKMaAzufaiQmFdxPrqC5638EyeMUph3cV2Q8ZCZk",
  "key30": "auiNULHbiU4sHXMh1FWicnApPcJvpDgePKbwJfmVVn931yx6td8fBEjLi3nMr8R57BxkiAAig2Jwvi45qMvBzqy",
  "key31": "5UCeZEBQrAWrqt6H9Rb3KmGDSJCu93hmwt2y4zD4kXdx8joFe4QSNEdYtq42RLpVf7gdUn6a7TqmUAMuGBXyr6Ny",
  "key32": "YxKDCxxacz8MYTqVz9wFJoHbkEfqS5HFZgckW23RqFYQXy2WJWvw4tkjRqDi7rYZajbQpoYqN7ZXjD25ju6Rjau",
  "key33": "24KFAkYYj6NXTnRQGzJHkUQCc61u1YMnyV2rai4sEpg41xFZWMbNoCZZYzeHsWTtuBQkFtdJVHVpmmrApED7sZch",
  "key34": "2NhcHpCZeA4k8g2TS5Upp6qvFniZpsdG2dosp5SXd1q1JZEBHW94j7Jdx4naox4RFSFnTnGQAXEa7tLXjje44ZcR",
  "key35": "5MX9Ds6DsYMUmei8yaENfDs6qAxNSfC1qF4qY4XBkFqxab1AUf3Ety5gDEwzorEis1pA8JJgZNBXvqL9QgTcJ4M4",
  "key36": "2Bgnj9jW1sH5WkAN5hyzkDCWwrTtiC3ujjJvdxGVUCCAXfQUHqYq9SUkxbWkYJsMvAxPViKhAo2pvwCP4cW4JWKb",
  "key37": "3QQb53L4k2CTag2MUhdGkizkvVy4HqdzaLgzKRkq8AbXqJmHQso1QE7pY3fd9hCj14RVRUCiK19CYD2rKEugT1CR",
  "key38": "4oHMXGi7pqt6oTtwunN1rBejkTLCvchaeprjFvXUWNafDp4sy3LxZzjfKr6nD2Gk1mvjo8eEd6sNAgyKTUrQ3bT1",
  "key39": "39o3cTaXLU6Q2j58EmGQpQXnSAM1HCKwkcHU9uWdZKLpyyi7ofRjYQw4Htcr59NdrKE3cypnqRJCtYMeFmZU225u",
  "key40": "mGEP6W8HmkxT6nVULrd1Q9Dhtytduhfze1WzWCDPyjQcPS6h5RSUtEM3n5kaG57PDuxCsxoqJYf7UrK1rWyv2gn",
  "key41": "3T6oxHTA2Tkaet1YYKR3stCoPLDMrCasfhe2QuKW5auQv8svGuGVEVoHheQh2GqTcWst6RBcTjrtPvmqdvp6ZYp4",
  "key42": "64WZHhdjmSgjMvNaQoHgcuDz6S7gK3hikCBQ6Eh1fseRVopqCmnN1qYur49FBCYCLZjEGcbif599i6BSz2XSBu2K",
  "key43": "5WvzEJH2LeABMvpCMVTNu9nB96D1QKGRj2E2PMJvXmjXYNo6wvzmvnCHYjKzpAZ9fZLYDijioGs3xcjrGDVg4XjB",
  "key44": "3LjXWx7H3U74oCTpiGkUazARqRTjmWZTuLXqkm34UiV5wXDeREjmHXNn5rB1wBZEin83A9qFRBuShoYjQxCptqQ7",
  "key45": "4DJzgJ5ey4EvaksnjgF9ZHeTYbnXjJkk7Vd7BPTXBKFCmKk6LevzvFbfGMA5gwB7gmDqhkQTPDXxMbSk5W6mn2HR",
  "key46": "2JXDvEeKhjWUJH7TD7YRP5Jx3wT1RR5P8jEXR8n2fRPR3i8gaKxrwQwutWNSgFxdvPx9bN9vjMq5yjkBtxEDDyHQ",
  "key47": "3HEk5pkx8sk9kMfwPLuvRpYmFGVKd4G5BarnHGN5AenRLnkb8D5XofhBwtAjueaAo2C7xbjaa2ciojbKrtXQPAvy",
  "key48": "2qHpQToJk8UKD6QceRvqKPXXkMS9Wx7oqWCJ4E2RhFwxar8vRMmdpyZpjPcDFhUyfqV9pY6WiopRF7uqHkJ6ds3G"
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
