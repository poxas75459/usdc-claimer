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
    "4EWK1ZTT5HmDCoDeudsieyeTcb6FVzqjhabsFBmtnN8oahXSGsFFNHZyZGwPVtMtXgjBmp77LwAr926C26ydjBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQpWCATVzaavMvzzv9pMfd56R6PPuxQwdakdDkU7GJzAh67g77z5zwDUm1vPnhLb5fi67ggdL9QxHyDY4NnTFcU",
  "key1": "2MSfJGNcoUsRjyM9FTctsoGeRreVpSXM7iWvEjk2s4K8bPXR7PoMFrKUqFFVseoNmjsgxSqU1ktn3BVTZEKbDHTW",
  "key2": "3DzfEYh91BWUeP8suuVdGnaVfju9k1P1vbXBthKdWKd2b7wSNaHYeN6yFcBd9JRAsuJtUzMpvhutQUF9Fxae9BxJ",
  "key3": "5RgLjSNq4yJzKcs6KJq95ZNfM5up511JWSDsD3KDnv7dJfaECFCB4FnZaAw2bFUNu6fpMzqZH9ctFDT4h1SSyNKx",
  "key4": "4nsqkfz5sQmLophKegPh54XcmwxEFcQxpMeW8LNz9CAqirWtB6RyqGkBZaX1PDTEKFcW3rGPuxPNw9xM3WotDeYs",
  "key5": "EaBnpwwSwEJhLb2MoaocQ8zmzNBUsh2Bn1Z3A3n2gca3iKCxEwwae3AE1ZsFfHDizW4JrFeLuCeaLXsYA7E5cxC",
  "key6": "2dZ8hGbANooUNq2dzyfHP3511E1FsGwQ8ykj4Ezw7Foahnhfn8Uax9zBRVqhFhLBZgjVerJpE1J3nj755uiDYDAt",
  "key7": "xnpTdrxjTrqP7jnqWMo91Ckqn72Y7DGEykvT1c5bXNtcFYFy3SBjmDxDDBkSGRyLZofuHiGeDxMfciwVjLpRiT6",
  "key8": "4MdXX136agyAvzbqreXJ9zFQ9r7se3QmyMuY4yog75RggMnvFufm3bkt3dzhXh5Yw3prwS6TjUQ3u1NvRqTnkAtK",
  "key9": "2eScXn4mqrYFYhBgjPpwc1yBgUXBcBgXW5LffWeNHuReen8v3Lx8K1AZhrGB6XH5GDG59d3RaEtBw1VsD7pGdrEh",
  "key10": "4rHuB4SvZbYnCxeDLuUi2VFoJscx8ET41724XdnNbpV6ymUXBP3DHmkGTcDGBLxNr4LKJcATXnmDvCraztRTLPVx",
  "key11": "RfH1Gksh3Ybui6WCVUBhrqEEScXUUjATVQXXHwWA1rHCB2RqQ7h7ojkiXMi4n8kjS3EzfKJqE2bkUVQH7B4HshJ",
  "key12": "5iAvSBgFqMFCyyPaKzM3pexnRs6kPUZXzaahpK8nFY5mWHT1utyRziYz4FGZqGR8g5GRGCLPcKWWxDBBeB4iExnT",
  "key13": "3poF8kkMLhJpUpbhD24fT1zFjXwpW2KXPU4D2DjU8xANZcepAfX8sQHRyqUBFSP4ATrJ6oToXH6BbwM36DtXF1qZ",
  "key14": "4VStB8kW5o6jmZMqyXDGGr5M9DNPo4yTLS24oZ9GeM5TVbTVevSngzDt6FCXYjSt8S4s1McbjZV146rHhC6ZckBK",
  "key15": "2og9598uGy3JCi1GivTYQ3ZQKhPraAGxnBcBJqDi7LLqKd1PqGnhPtzVEsgwaX6bZsYPML25jCJpjLLZttc2kRcs",
  "key16": "5S4zWVjtVymjGfEZ4sTWGbxHQXdN9HhxVRY8Faz1NNx72EKzMjm5AgWWBDNu5Bfda8PNWomWoutes6jabYaZV3Xn",
  "key17": "63sFP5GVwVAmdNvqHsYDt7U1S7zgTvgiHFEFVk7TU7uEo31wMe4nXvhXpvwc3yxEiAAJpqMYqqFk37h4Q1M928bg",
  "key18": "4xAi4kpQTC7owr6SwgyRtqLiopndS1i8sEr7nBQp9z4XDXEDQ8Hc9yp2ZNcv4kFxskJxbR1J5bHtL4LLTRGH6WVp",
  "key19": "2mWrG9czVRpQw1ZYHuNnK7Wux6Bm7Ttr1Fqpb92r3f7qCp4k2jDn32CibkbiuVpsE2j7mdz7BvQUo74K1ffgo58s",
  "key20": "2mLNbVjWvQAqibcFiUkDXLEUThtDjpYcHG6KBxQvFdWAXJE7aCyGkxajKcGzxU7i9yiuuadSmn8rYvdnH5c2VPB9",
  "key21": "3dDHarZX2nFEyGVQvpBvpANT4PQRE3tQqz1GogwHTe3a4yQqJUF9A5D2bu3wZH1xbSckzzpeTEvSZ7VzfxeLvS5r",
  "key22": "4gz2hmibQ599Am6B2xihMyStepz8iWAvPioLvWgt4SR9hbLZFzZq3E9HYMFKdmCmP5ypSMs9dHKfTTBw6yfTAAKh",
  "key23": "4tWy6MV4fvz2Ec2Z57H9YM1A9h715E6n6C36MdUZMRfUXSYZ5VdEGHPQUYBs4Dda6XTAmqJ2eXsYxcw6fbszWPxD",
  "key24": "uZHon59g2eP3vA5sgn6EG3bstRNS6k5mn9nStdS4qXT6ejip8vsjY4GdQwD5v1q4V1Rc4GBLTZvBvwmkdwLw8LT",
  "key25": "22dv3oCjWCUMQoF8WYQP9cQjpUHbekzdNgUZCdExsY3fLFhnr23dzmmxFBKNHDJcW1hv58PWuh1CVcuUE83wfBNG",
  "key26": "G9Wikei31yrsgTatrPcv8w6TnkNm6W2gFEtP58SGT9dezr6JynawCH77VjZsmVeWSXBpnSy4oDeZ8WTjVg5YT44",
  "key27": "3VenHiE4CqtX4WYgjZbJdYzdhwZu7qKtsCQFqTJCcY96WrKkxUY3fdtroXgQC3uYLca2QArqaYcD7zLo4J2UxKxg",
  "key28": "2oocHKg1tmbhoC3uevMvyCZTyMoQ6pebmPHi4stzxzTnWYY1L8hNtrPfkrDadJ93pnEJmSRXumZLfwYqJ8XtjX6o",
  "key29": "4rh1n2bjY16PQxXh7G3bDM4a8FVnccDd5CFPeUFJJy1wzqZwUWDtRjZXgPJAFC9Jmzw3eggo6z4b2Mu1F2FJSfyc",
  "key30": "2dYL7mtPFtQAa5EBg2dGGXLbuE3stCP5xn4pKPLBUt6LSQpT7w1u2ypZENmRXq2KjfXr2Nkrgqqt7PwZj6DjMGk7",
  "key31": "2dMot2yPGiXtkXC1w3Kf3bcVBm9pQCzCY9Sqbwwp7mFvJiknVZBrHhuhvfoGRiCgte1pdHTH8u95KxTuESSdi8Xt",
  "key32": "2P6yd2hrivnfcFDJU3pWpc19HKW53qqFSSyrazBSxuPq8AVixsvRFBV3ubzivLXpa2MioUbJG6kp9uKEkQWr9cGy",
  "key33": "5ByEZvirCG3uZLVTjF9WYQagUFVR5buDesGfRsiPcdN9TuEq2tCeeSTsitWjqKGmRnqS7wwGnX8FZNnoxYZWvG3h",
  "key34": "3kSKCRSXe7UmvGRQyEQqcodvHDwXy7Nxv6QJ4oSoxf3eCzKgYz8wyLAXJmqY2tscPw6JW6H8fPCRPQpTCjt5XvPW",
  "key35": "5epy76drxHF8XX3BAvN9xi2PP9gjJHheW7gga3dL4A75YZKCiAJgPJ58r81cRLTm6DRF4bMvW1mcTPp3TLRdh7Ja"
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
