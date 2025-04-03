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
    "3Usb31WttqvSxD2BBrGYiunA7zSTyTbqvjmWs3ZNiTEhzGDvweTXNZZKavX3NYKQtY8ySqf3UNxzDH3RiTuTyurX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GVoewegqyqyevWyjbbrZYoBrikt7baQGShmuAEchQeD8MsUQi4LZrn1yJige6u9f8Ay4TWXHdgq5gyQjx5JdoG",
  "key1": "4V9Xa9GGRQMMnjQCMVPYFytKzpQdbRsx8t4cY9wu67raHubcGFsJEyWrMCtHFjVdh4qq6vdxErjyeTdG9aJvmEfK",
  "key2": "3fV3aFAnpqyymRtTMWn1ADmCzJzVBd13TCeZu3eKdgu2Dh8zjGkRjpW359cXJscaamDkFR1CroE6WgKbnsgSVUcz",
  "key3": "ELc4mNfoQi2C9hU9KiEuZ4wtnp2gBhD7zULBLmHCDabxw5UUmGS3zZcUSCuErW4JVU1fmGAEanSgiWiU9YxdcPx",
  "key4": "5Zjs54xffCByBNgo3Ar9jVai3ieM5hHff7znGnsTbrH8tNfPp7wF43WtSSuhRnn13e4Bb2b2vcQ3bzVm1UD6oMd2",
  "key5": "3XVr8RBgBjaszGU86vzyoNJ7Y5ytrB62cpTGVUCUfiiLd9R923cAZZ7B1ea6HmEDcpveCvm2QqBiJYHvw81MsAfD",
  "key6": "5BEGTP2p9D6vjWneysvrdJMzjpQ1adVKhAGT86D5ZzHh3XgK549CY9P4LQSXighuXXrrxVyHzqm5QKwHBB6SHYs1",
  "key7": "4MWucQcychYDDCCbGsfeGG7VnWK718vBKUiL4swL6TambaFJgANX5qCmafXbAcj1mZXYNdhA97mwSbVTFJMkJUqJ",
  "key8": "4thQ4yQMJw56hZPW3k5YrSzUFr1pxqT7zGNivPjxXNRYVrvgLKAhurEqee5uqVUg7qdAjF5oMEAEZk4DCqucy5Mz",
  "key9": "31rqETLS8omr4RjbW9GRpfWjQEcv2tctXR9XrSsoocXpHjcTww3tMSsn9XJW99wjiZNv4LDHJrQZN3gUK5rmCFrk",
  "key10": "43nT8cNjkXGpTDv8GauN8rAH8Xii7itRqrHkUk6QuJQdhTyqrHX1HPeBzzcRkjimJEpwu4n9j5vZwixnd7qW5Bsm",
  "key11": "4cjrtTckYc5zgHEWpatDDmG8mPocE4RDheZ9d2syhoD3DvhqshjjLzqeytEM1hxHxhBpswgCVCQnqSgXwp1Zt6Rx",
  "key12": "5hn7jGqiHakXF1uRYYvKXzkH3tdFhdX5m1UM4E31dk4r3TCEzhUA861eBNfJ4pkGAsD8oRo5hCHNZGDjWoSPV8tU",
  "key13": "3JJfZpiLSjrifgJdyZrVkSuK6ntUjpYWvnc2GWggEs4azX3gH9r3bie4yt6Mczo5oP6rNu2TAQuQy2zEnARuGgvj",
  "key14": "57figxFVhEzanquNJcSYqPnQf3xqZ8cpCDRCLLAzeBBeiyd347buX8Lrs9YAU3YuekctbkZuJFxgvkyGy3gZM9gJ",
  "key15": "9bwEyF4sh6YsNn7GMuomHg7JnyyFgWUEeRMu7MKBY4z8uX5oCentjUqExU1KMrbEtSgty7UgeHjyBvdCvPGjwtr",
  "key16": "2rA2ueX7XAFsxUuGkg4Zs5gLdvifaQK7qxtMVg6MGq5v1a2SBGU5QGddyJuuUMjGZEc9GscvqbwzGYUXvJMWCt5d",
  "key17": "2b1XjfeCjRTyGczat1JsP6TAFFZjNtF6y3YXc5fR12HoqS34uh3JXk4gjvhBh6FdMrTen39yYJAe3w2DHJeYANbc",
  "key18": "2oau8yjdCDk2EW9cRsM4NDxJfH1ca2QjVSg8FVBKDKUaQjrDnJv6dTiVCqeW63jF9df6dKTnTqFPwcr2kaB93tyj",
  "key19": "kiTfqwpa3WvW4noTtVy3k6hVjhahukgbVvUE5cLz9nX5H3U2Tej9ugNq6CvY9RLp63gNi96DEj7hHSBgvsnhz2Y",
  "key20": "3GEhoTeSM1wsFbDMGeeQX1Sh6ErZVa4k81WpFbzATqXhfrW1H7uFSnjvUjQetCwfzKKYARyeQTsd9Vj3gGYgPtVK",
  "key21": "4HejY9vQW9GjmVqjQi1HGnpvPiGhCjjcr83QbSp9sYvjpK95DXYneyR1NZGwLwRB2bFdUaozeYraBCSYPsP1Qydb",
  "key22": "3w36yA2d3fS73ynR7TrX9p1zq3mRt4r1PL9RE1Z8CjjjT8g7f8WWWKet8qstB6rxh5GK5y7UpbGrSNxdy5KV8p9c",
  "key23": "5GoEZUyqjzSD7aHqMANriuEsYvjWS754w4zyWhrWdYnUBscwJWAQQZ1HP4JWKNGJMoc1YCDS34sC9KeZDSK7MXyB",
  "key24": "3Qpm6DoAWxybM9zrFWcJADEvFKKUSq56RV6VzPNSeh4a5HbAGnVUgCUMjx2kAZFk9jpGihdeq7fTx2P62KMgrGAx",
  "key25": "2uoSzvxVG1SWRqKTSqR129MqiTkPusTAmTkD2XmWSTRbpnAprv7RV8PKMQe2iRQV3U8Y4H7GceZomevvFTF6ZboH",
  "key26": "59PkuxcXYCNKaqXQAPGDLziXVFjZBzixZg8tjTTj7WaxW13VPsE2sPbPtDyVS7LArDCvFY1BigbWLA3b63dbeUrD",
  "key27": "2JC8tGXoWZAe9vBQzKiqt1jwkTSK8e7zogKrMBoS74fWuFruNDojHpSMPcS8Bk3yH7TuCbhr7R3maUAZhAqrA9oz",
  "key28": "GHpuZoHUQfadrgkm6eyzsxxgCP5NDkkizuEm3r7jDNUWEZcNZY1EJYy7UenJVJ9T6UVC96MWfBH5jVaBz9g8HNX",
  "key29": "4fDQxcx9fNvXUUYfWtDF72P1P2fonUNh7A7chKDEpWuzyQY88cttaSVFUTnmE5MZ5YVZ6Y2iiCsCeS1WbsT7TyUv",
  "key30": "3eYVaoXHrejt5PVjV7ZNzd5uzYC8Lu7NpVetZCjawGAFcPzRvBReT4Cmv24nyEbDKc5CGpyb1d8JyKdfuFwjzYao",
  "key31": "2GY8ynZtfTn87s3Dd4eFNDhr3spX1axS5qd1rt1sUEbn9xcC2gfgVi7hE4rJYzbv2cHoCQtp1m9wNndKPojbbT2Q",
  "key32": "2pubEKnxHiw4xaNNdoCTvWbhyRVfCBX8Ld6qUCeEoTd51QCP1fYUaywYtuXuEyRELG7uk4psZV6WRXaXxP2rnZwM",
  "key33": "2yxdLk7p955UN65HRUhsBjckEKEH7869U4RHpMUBdSHYA4emL7m9TboiCJj7URUgUzsY5795gkGD9r2FcmP3H1qC",
  "key34": "4x7UxJSKu7m5XyXcK6eDStALVmCaXf7bbdp8NYngBETnsLmJNmqj74HT9VCUUhvuGNs1ZziyE5Kmn53BSHACkiJk",
  "key35": "5NdeXefBSMrwKefqWJmoT4wGA8VjbNdYc79boAcvrPrPQbvezDwfe2DBUKZJcSnFypT5AhDxqmVt5qdbN2iVBaKT",
  "key36": "3DbsfGJzMN1N8DMGrhnJ81dMHuuNdD4DS5MpVVcLiPjyDsfFoGfirf1LM1i1cqhzeuJokPBBjzmJcbkxZDk5x7Gj",
  "key37": "5vETiUBiKPgACcYvxRhPra69sgVQtvLTnNdTDy2gfudhzRaZwahnmTojTzGWz7NuMf8Zmb9tWibWTADPdXUw3kjk",
  "key38": "3UdUxtyG83e2NCePEymuHFH7YCEeMnfAomuZt4ur4N5wrM8N3QceHp9qTnBQiKKzwNeJ8upyDUqy4G4VmjVC5Nf7",
  "key39": "38N5ATBBR6fL33SufK67SZNBiCoLQcT3kbagCLuFr74pPoz6XiR7QbB4b8mFd9NdoJVZtJCZmZE5oW8RUYXhSiLa",
  "key40": "3BR53HwrsLyRwGs7Hnctv8i137wCqEHAgEfe8u9UZwNw1RMDDfyWQrqS4sTgyusd3tX7oZ4BkW1VCzPdodLez45L",
  "key41": "DoSham1vDQoMrQwARCSSUD12KWxGEHk6TeZAE3wRFxmGHQYMEen1V9hZKbBFWW8dwNqukRniyqivDnWGqawFicd",
  "key42": "4JH6zFTEMJ8CkukfKZo5XuD6BBGBGMQJAQvY5kG1k7eGPifDXmwUWgP6FzCGX7Hu3HAWKr4rHcHDyy7T7h69rJEt",
  "key43": "4pUDKrRHoUeixYL9FPT3EpqZup6EpX8yjf3FPSMVoEnb3dhYtaoqkE1sP5mgmemNYqG7cRgR2hMkD6viKqKvzZVq"
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
