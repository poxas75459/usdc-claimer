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
    "CocnF1sbtBVznszjfDTmxG1fNLEmNGdpbHSpcNayY9dnQXJ8NPfGkrgsNG7fKKszx7sGMF59KyeGqne82iqpdD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijNBuy5CAz3pCoJ2csqpz5Y9NRRYgXbmyuxY2q1Pt66q1WEnsRdwus3zNPyruUmq9Sg74LmAU9ZHk4EbiwwGmHt",
  "key1": "5qCbVzfkzW6W95u6jDdX8JdrNTJ56T7Sjabs2hPwAHukP9gdj8WSc1AyeLSUG68ShVXkt9UTr2hNkb17JpQwkr6u",
  "key2": "31EgizEEUGHd8wTidSJpp5ZsgYb9gN53eEjdBCV1Nt4cu6biGYNVhPwUgYA1Mzkbuef9JQJLpqhD8FGRtM6BdDsb",
  "key3": "3X3QzriUnhGmuBTCoPFALLxcu9PAbfzziRNBprgXTxna4KXEY7wNXLBz4c3msZ3we2foS5US2HevQ9gJuu3g6eJn",
  "key4": "TQEbLfGiYepup8bKn85uuFqz5Wm7nTnYqPa9s167Y6DHqz69LGAdGcM9Gxumb8aSERoMpLkx2Ao6iB6rRE4RHTG",
  "key5": "4TNxbY1BfzHr14sVvAQBieQQkf7DJBxBCywzasJZMrj5be1HhL6ycyTPtRAN5m5tB6UWsQ5XgoFi3wPNPcHU4ZRL",
  "key6": "2ZQbvL7kPryQvuBHap1ew2dg1pJeFLfPTG2q5E3MZgS2CnXHMYf2nDGjNnKSUj6HCZQwzieZRbgpbhN1Ur5N785E",
  "key7": "2a1dHhrmhPhhoCHkbtc4gk49A2qXHbJUBgiwTkwPuytGbLaREZGpWp3vMFyrJ2KWy7RL4CeAPHAzhVDS7nG1xMB5",
  "key8": "2HJBfiTvbox8vubAAa23vgaNSA68cy4FeGJKa8fnxTn3XSS7k4TPU9eobPoHC6mmafgysVAJBh7WPhnpeqCPNp1a",
  "key9": "tci2XWDRTPmw3KKShQHrNghTdmDjSxABaDUfRyAQuYuTjeyErHybtzFKvPuruzCiNpD4SnQ8q8VJ7Yt7aBNJPL5",
  "key10": "54Zn4dWEMaJryAGMQpQ8Z1R2ghFpamX7KpqQyDbcry6A4UpziVSiAxyWNvFwXJavGR2GQUSXzZe2D6HkekMafaSd",
  "key11": "3h2aH5q9WwpwfuYMwWEH6eAJHGrxdzKACmh692TH256fTuQqNYz7bKDBcryC79Bm9fiqchGp8Rfr9NLcxTvLw7Q2",
  "key12": "27Ezca97p71FBAu9LoB1kwdWtFiPBNEzT7gwLFBF1NyHUg84fJsXYRJRZgi4iiiMfHiGYLQuYpvjzgPVQFm35Mt1",
  "key13": "4Upgypj2QZLS9NL7ENXeCBsW8oiqPqZg3EYNwhsgkR8S3cZingiCGdeNv1WNaxvXM34uEcPijDw8PKFUwEGymKzd",
  "key14": "FA96offmcMwX4TfGf6Y6t8VHseXA8mfQjsugct6aTBuQc65MyESTwKN1XTWfWfURaQQyKXzXzYzGQQb7LScYcX1",
  "key15": "39XDu6sjQ2KQNaWxg9MbMyp8vHtgyWeEfE2MdfcbXyWahYjYXd9uubYy5C2Rs4zUYQuqQLZmskQvMhs71G6RxbW4",
  "key16": "42xnZE5jkLGFCvqvo1MgVJUmBepEW4NaWwTjNyCyd5QJLjMp9nPz7CS1mKf1eqAuJbW5Hm98gQey2iVdy1uX1aft",
  "key17": "pC5Gj5Xb6fvFtTtx94o7V82KZa6ZKVrvNWK6zsGtnN1PG6mBro5Qorr7oT74cCqjLatKZ5zLHzmegwvhqTwJymN",
  "key18": "3srqUNg9SQ9P1tDLaQTZ4AAS2ZFcqH9V6pWQec9Qz8fWYHvaJ64G1Q7UWpEKSw4Ekh5H2utgr2XxLMb8usQSjYq7",
  "key19": "69rUmuyUd99vrz24etts5dGc8xp9LHUutB6tMP3jo9kEq19KKjdi55xGmy9CteJwsK3yTjbDZeqedHDva1qRQdV",
  "key20": "36sVKmtvVueSQQx5NbcLmMpSEXoKx6sfbGBxyqZVMRrh1THTJJHaBz2ozA1rorykqPZ1yUxk1u3a6x7KuMve5CMu",
  "key21": "5FYMR25T5tgJr88knEXX4d68mkrborRp9KNnGuKNwoCmiSptizqQCas2eU2kXhpgm8SCb4vDuBUmPktbdmNJYYiV",
  "key22": "3ojssGHBE8TuPBXETfr8jZ6k8EpvkM1KS9rAr2XcRcmnzFAZmX6YBUuSR5nquBGWyF5YHJSM1febuCiAi1MywdLr",
  "key23": "Q6S34MnN8ZMvtpmyCRfzEKU3YNQpyBBiGYWggpdb12wRsKoSxftHiLTGUyJXMY2Cy8srkUKGPufSvjKodLx2okL",
  "key24": "2FV8kseaGXGoZKprhTD3TxXzAdN7ncAYqJJS4WcSf9LVXdrKaoJcaYQLrRuzKscjfQMSQSvMGBZHwboNCQB2bc9J",
  "key25": "2dZ6vcwqUEh9p935SnXvFsJHzCpZpRdMnwfLpKA2zkNdRwBNdSRaMjSetUauwsPjuV6F1UPEfKyD6ZZdLkNVZge9",
  "key26": "4Wts4HkoFEpVYLVzAeSENUxHYVD721XEARuJ5NsGG6V2g1mdZcbpk8ZhdXNts2F9rpm3oiX9xwyT13Uf8fXkUoiE",
  "key27": "5q49RqaaxFBuPpftcsZHBaj3Qwuzg5ryh3AFgQkGXHZ11zGgrW3H9ZNwWfSe1MDQhckdxmyVsgLeLhqJK7z5cMHg",
  "key28": "4HfDJNQKXJ4yxBSbUCvwfJ42Kb97pmJU9mabngpUgcQDvba9zUvr6weD9Lqh5LTr6YEt2cth8VMXj8G5PgucT7VT",
  "key29": "4tMDu9qBH18pgzcKyfmV13xXFgSGR4VtdYUR9RPfpBDBkjqaWSdmaroWjS6XvZQ9pdQekajTxRyGSWazFict6SWz",
  "key30": "NiSuaLeN9X55t9RjoYSCvVqzt5vRYmeDTY8ZxjfSDaRXqCwcKmSinh8m2UW2HWUJF2sFEfaeKaeFSzmTyoRfSET",
  "key31": "1uhQCzRH9sDcTqcZt7BRxoFZrizTYAt8T47Yxd2hZFYSKBpRB94kpu4t5cFjpEBAHJJrntiM3sgdrSBrycWF9R4",
  "key32": "5fot41D6HhtorK1KAmoMKgYx7m6UFRAc3x6x4JquB5ioQF1dVwYmFY5edtazc7dukGg63waGb9fmXG7wsa7eJZMC",
  "key33": "cZy2xB8uevSbWfqvKJy4s2649r2FZb5ai3DSwABX7kUkFCv9JvV4wZXDcwha6ZzXZfSw3HhNVaYckgVVUvtnKgG",
  "key34": "3mM2E6SyQjz3t1cC4CGmGGzFUjHSnMxx4VGvm3p4hc6RTo5yfg1i7hNydDrTiB2LdMdvia9TYnFH6A7Nb8vmCXyk",
  "key35": "4zzTCEHtc4edVaqaB5Fxs8JDrie1xwKZM5xtyWTxbP7LcHVcpYUpkbmkP9KffRuvrKV81XWff7BXiH1qPFHXA3dX",
  "key36": "5ii74RTixKBXdLyrpJV7EeHpGyWbG73WQee1X2TarQjiGa7wWMJ9giaiR4YW2Xa5gyCjEq9534PwcyAWr8Awdmvr",
  "key37": "3anHJc78h2VUegMG9yMdnKrhXZzXx859CCTyCXUspmpJ9YZB2V8HPadyDF1iZoirDiMAhzT3ankRgcGKdNVBKWT9",
  "key38": "2hNvmiHWvpi1vVr3hfNqovUiTiWtb2GErHgoBsFZXqM9JGuTu9eMnUsoy8ApLC9pv6Ht3fNqNFujdRmuRW7YiEV8",
  "key39": "gv9nUkgJHLPScDLjSsYgQKAzVcoR2wDPVG6ixUy2hFp8J9WZvQAdTMFCUQFB1Tu1mdiLzAXSPYCmKgaZ5s5QWRn",
  "key40": "4KEx4NXv2sVzbkqf15ADzeY4bFdACDxZGgN8qQPmxfM8fG64E4F6PKrPDAYCzb4JoM21eyjU9gUhNgdmTfCmS8SG",
  "key41": "63E8Qccdj4UqcjMQJBdNzGmRKzG6rXpSeQbdCHVbuzCAxXocXoL6x5J8FX5oR7AKZaSQxxrspoemTutN7tQqTHzC",
  "key42": "3z3vGQXvbW7Di9UijzZht8R5RHnL9PHFXegiuafAidSwLuRLbcdhVGcNsCEfo89tYDKuFKaYtdw7rH5UG26mKQED",
  "key43": "CPaNFJJTULBHoUMzD2oFmhyvkdhRGeKoMsEeHmQ8WmSyLCvTCr6pbTrHWPUt2GZGoxt3UtzzcBHSYAtL41Y9GDU",
  "key44": "3Dw3pXKAx5JgPehsNrTeksMpA3DozS4sKs4AgXZ4XroCK1LuqkGm2z43cAJ33XfyLxgAtJYXPEwUgmFA85u7CFd5",
  "key45": "bLGnuyyXY2kdGMBzj2U7yfgDbcjXUQBxKYfmYoVcJkejJ2TKuMawF9g1z732AmHR4s8eoKAa9mZwpXabJvywEmS",
  "key46": "2iSqHmiHQUFKSQrTYZPXLm6CHdFT9tvTXKAD8n1XM3eQN5e66PteiKsKttHR2KYS8TQAfj4UFx9C3t6zoepvwnSr",
  "key47": "2mGN7QVTYUmPWBbH5Khvayt3Nv7dS3TYvZa4PQYpBhzctucHhLQssCAcpDKqod5ujKgwtyvSu5ZK8QjptzhVMrbN",
  "key48": "3ogPAFJ5zY47F26gjriJcZVreXsodzUDGvH74ruH5WBamiDuQPPzdUeXbwnKz9BB6SA85usaN5r1oNw1TSAFyYKw",
  "key49": "55V4C3MHeuk4WzJwtGaK63hjKZNiCjL5TXZ34nVfZsux8atiHH2wnEkmJVsk3NoYmv23FTZwLY4NymfNmM6YVrJm"
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
