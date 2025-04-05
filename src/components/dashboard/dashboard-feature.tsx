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
    "5UmArCaUMgVEtbDFXUs5uukqfkjmHvF658nBhB4ToNw377Dn7LuUV1VZC852W7mT5uzstkaPF9mRqGvxfhqL8VMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8XhEr4y72ZguFdE1SQm7sWrGQVCkW6n5JPYqkfWSB8ippPdzuiMy4nyMDc88AeAb2yMu9RC5cuz6QbXgm95jpL",
  "key1": "5HAv1VEFJ3Pneapyuf9mWQ11zDUyQ7zB1mGx4VeMCN5uSLAUfu2VNiWjrtLP85HGieNNAtkFdKgb3U7g1KbtQmPs",
  "key2": "3c8MrCtF5sefxayD3tAoZN2vpMnrFCDWbNB98M7rs2oxLKTqUqK7ZBn8nHA75Tdb31hUvBn97icnDhRUbHuDZTFC",
  "key3": "5ZSpU8cTNoFPbe8Ny8GGtuex3p1x3ppsX2wp2S3kyoN9G7NsB8HpF42o3QAbBUTh9s6n9f19F6UCn79Aw3JJMUT1",
  "key4": "2bbv7veBtXFkLMSJfGWP3vEAKwwau99rRCmHANkCJvsKucBMH277e796rC5YCXn6GgpyP1eirq43Csrr2g2F5LYR",
  "key5": "48eiCtBYb1tfBzoAnMf78bX42YbbzdcWii8rx4DxG1ZGQqFQJC7c8PmBTS1cAoajhTuWwohjbzZYBEt94BRcwApu",
  "key6": "W8a6nTLqs79fwCQrjvQhKFFefu4kNJU3fxCZih8xyX4Xp9MuRozUPpCBrrTnTny1MX9Caqo8n9MJjaqT3XXApiY",
  "key7": "p11Hqcot6iTiYtP3p68GVFFtjFFir6S52JUEp3ybSKUUMZ9B28KP2yn3KPWGraWvjqcG4yXnBorjy5AcpM7uK6V",
  "key8": "4XKyhZU9NUt8rK9jVX6xB79wEGSNtvkU2Sp417A1xgz9NTyudSMLu1U34RVRWmeHB3WXyEfz2tkvpNYtfjQgNeGS",
  "key9": "48tHSxi1HN44x3qQNPegH9rzu5sZxHcP8vL8S2yYtv4s8KutY1ZcPNfDKt3GJaGewGDrykxXwyyamN3Y6Axa8dN",
  "key10": "5i5WEemeDm2n9MYWp3VEdZNLqPij5EWsszdkeUZfRjirrF4RGiZNzyBTZ6H8TW7EmboVePVCuoRVom6qWPYS3dnt",
  "key11": "2XmvqsouitfYQviL6TYqBfFX5voR6g1VwG5t9RQCL8CVvvGqci7GdpUBZyLcZc6NK5GHBsMEK9iuftxtUDcFLytd",
  "key12": "5vWUt5gFDaNvudGgHrvgj68iNKWmsiRXeuMTjii3gct7ei4exsCJpzNm72JdTup5thSHCa9P6k85TFdrNH5tpMLd",
  "key13": "21TBJEGgETCN5xjj7RXKEmGqvFm2wf9LkaqW75NdNvsQP4KCxVL7VeQRetC4AaGdyq9gXiqVsiHzLFZHUE6yJJEi",
  "key14": "o7SNcQBQRoXdRxdtGvAjB8aMxgcARzFqBGcABNpBo5xejNyvatGAiF2rrw7CYtePn1UwyvJZRpQFvaWKosawXrC",
  "key15": "5g27Pd3baS5XEh7vEiRtUDnA24mPc7m4tPwstWJAJ7wJb1AvQ9u9rE42sXdKGvTZzFgzbH7CBvwcFUaaZ8ZiXbXg",
  "key16": "63T4i66CFa1RMLsL86w6oeLRcyu2awqvxg2tDAVzCHsys9gEG2FXNrz5mnbTqqMQAS7fuTfHx9NYMxhMt1fTMjLL",
  "key17": "3fZt3HZfHJZe52ppgvRUQob3QMU7rEDjF6pVuNnZByWLbwrYXxc987SoNJ4Y32UKxdYCBU54ESCVarRhKJeM3psH",
  "key18": "45S4iZVyxG1WKPWTAsn2c6oH4jyaQyvZgeLX5JyaRnxEarX9VjqDno7LW3G1LS3ceaecKELuaVKCoptsoUtAy6Cg",
  "key19": "4UdBZ9kyTeiFDkPUWzs1C1hZDnyJ88m5uwnGq5U6B8CCHkjv4bARtMqHzrs85bva6N9268DYQavBrqxVCoaL88Vk",
  "key20": "VSRiwRumvg4KD7fPQUBdb59x9VA5jLtcj7H1BkQWsicZFJqYBPhj9rQQD7ZWQ7P2eNAe1RonWZKe4Ci253wnJk6",
  "key21": "33sriNQr25j1SnJbS18o3nXqVxCMmVEkZQo75cVPuNRM6yg1uNF4N6Mswk51iEG3Rcip9mNN87EKFrXhY7CPnQxW",
  "key22": "3DSfRG19q5kGZzTvXcb1c3KLY98qWLBphxuS8ZddzhaP4FF7F7Q8RBX4M1opDLwXwvoYzDjgxCAs1L7kkBWrhdwC",
  "key23": "ZDbB3QcTHtXmoxEJURWXbFrdv1QX5ruv6eixb9ioi1Dc2zUkrYyz72ayTUKLFn65fJDT7XVprCpiXrM7WufUXJt",
  "key24": "4VnRmDpELqk1273LKviLgY7ZiFa2aD5W5B4HMiWyLmEGvkH9zxic5RQ6J5r7W6VNg5xPzGQ9vyytTYNEsh9WshQA",
  "key25": "4aFJo7LLwVhWZGndsYf4zq2W1QSoEXgk8nrbx9Wm5Ykmgn1SjpwsDjAn7tVtmXDfC7KvKdZQeDBUwyNAfgaTVW8o",
  "key26": "2JCfrWRMqG82S8DMBr1SbkGr6oRCz2Zd7xTmxVoSuXpYzRck8T5h4wJrykZVq7ecFLz8AYr3h2u8wsqkiHsGFT9Y",
  "key27": "5ybt8vVZ8RJZZoLDsrivS6QSBMuxjvSbrgPiKs9pWrVWFrCcvSRNt1dVYboDGfJPNSDzTNmP2wRCdkigmeGodH5h",
  "key28": "5NcyQQn7Xbx3nz8c2yonQdphAoHrPbnBP8WPyBkXTVxgLGWjXwHi95GC21DMxdH8EUMtdLYiDZKgvkc2ncAwCdDa",
  "key29": "5APf9FmF7V7NtfdbuMjfzeXCDzvr9RdpPwwkRKYAgegNrF1LGLdM8Ebva7PSMeiFMdvZxpz7hYQCEWKqriyd5t6h",
  "key30": "5vwynJFZE9mTaEpzZdmijKsos5jxg8JmtSpZUJKR8wmoR7pTitW8MvQV7rw9dDKst1sFnH4D4ZHvMtbBDxf4AUbC",
  "key31": "4voP5aRZuQm6J4vZCvimT3iE9HCfkmPTQw5pTKCqhge1UWNmxUgPAjmgwRvawkFRxFyL8J6LL91aYQeY61Lo9LiZ",
  "key32": "FtZ9Zz8cejUzGnkQRqezsTiic9ekr8pmMjxg5V6Vij8B5wvBJq7toHjifYGcEcGUM5jhuEt7nrvKQPhpDrBSsBU",
  "key33": "e6M3Z6zCoJxLtaT9snmbQ4VL7ygqodTnXXZ4GWt25vEJNo9QGZB1JwY38WHsnpR7bSTwaiYC2v7tRbhHQUVS2qV",
  "key34": "2vQX4q2R3Yx86Fm5VfWsiFEP5dSEmoKpZQPVQa3g5uNhLtff1UUHUpfRBJKaTxWahbnwkeoYwVBT4gvGb81NCADb",
  "key35": "5BZAFY1SLduPWarA2ESSpTszCN8L35h4pND4jy78U6MQx2AYwgG8dAMk98qaunvdVjrNXJVDB6y6CbgoR8Fr4Cw",
  "key36": "4qQ26Q9kxFNM67fszud5cnUp2JV8G6aTUnsfJUsZLS7aVp39uc7cUM5izgwUTnkcoaCXPshQJJRSXuvqYMUxD6Wj",
  "key37": "3qyvbS2sRYnUXGiUWufJeFCoBh8yCY6nbWM2qqPoR4njCddJJRoCDP91DYqnjSw4ZS5qasKrA8ci9JvhNTfeMLCW",
  "key38": "3fCjKLEd6sYR1y98HPWBrpHXSijKYqJvUCH3X8jJVesNxF1uzVmoe3Szx3rcjeH6UUhj5QsMHJPcY5sFyzi6fYhB",
  "key39": "4wN4BGuH2equq3ovMA9P4J3DiXvgxZ5UcxyDjemXA9c5JZiX9XKmovbVjNsWSrbtu1M7MZcb9zVci9fzoLFCC6wa"
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
