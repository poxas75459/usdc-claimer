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
    "2MsLmz33fPPgzLn31aYXRcL2mowCoTVvXAJchRc4Qd7Enc6rY8VsRpSN27HUUHFxpkXb8oBe1Y3UMBCj3zKi2wr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTF1Y2VZ4oesyrvTXdLNvBKWFEHagXExx9zonc4kHUNRhAyqzqBPiBYsssHNnKbjntEJxrR5KrfEUWhjnzSp54F",
  "key1": "5XXsLakdUDFQTPHY9qVu1US1eVb4jK3GLexixTUhLqqvPtAFhr6USevtBg8DngGceK35jxXoE3TZWa47EHuPTmLC",
  "key2": "2xQDMDaNpx1ZQkaHXDUuo2hr1J5KCrzGDfBgHZAVrEtnGo2mkud2smAeSrVc3zY4DS79JwycZB7iHyEaXX9EJehY",
  "key3": "5jMpGg4c4hYjqKBmRqEb6AYDVeLLGaiSApMaXc82rFNBNFqkfDUBKKyJFMTmM1B2Cp5dBJ3WKcLh5MgkZG1Mcj9Q",
  "key4": "3avmZfr8Zme6HJxwn3paK8wCqEBE9122oymuqpDkv4Ve64s3Accgx7vHzUkRXHmFCcaxJJLx2EZRQYEWyaPA5og3",
  "key5": "2SxDHp8gZqtTYu9LLbSp7Dr9VVsPfVt3o662WMmFM4VLM5Kbci5P6JoNAUUdURrbFCgxFGiWuMJzcT2y9sym4Kmj",
  "key6": "3fkRqt2Stytap6fvfTGAqnQ1475v6CdL77beWpYXMHo5Sb2SQCF5eLrsByrddmaZWur9bXd27WwSfyXN3F5ScGdv",
  "key7": "2zRLWnY9ZQeoj75SRggdqM8mbRCuPRLfpAHSU5YXY5zbNv9cuy3NZLPjrUcZtQxaPGbZ2MjdPqCVabKMzsVJxKGp",
  "key8": "2mT6T37a5HeMgMz6dzFzQccysT7tj65WmHczoR8JRaZvnjX841RCb1XCXPftCwB2PbkkSaEreVFQaeqANLRqtaDd",
  "key9": "2GkvHSfEheGp8UrEpg3Azq6EX2YQDrunhJ5BtUbQ9zmmky8E7pTTiD6WGCNjiueUtjuK2zi1ycJ71G3bfTmQJekj",
  "key10": "2wFbPLucNAzBJj1686y8U7DHfoqtrZA9DJgezNJ4XseJpxppwPnVauZeh3XRUiHz4DiKXSf7CyFCQThn8pNpP84D",
  "key11": "3sTVVuT3pRfEgQ53PDCGaB5wK1c89MGS7ESCFTCdkzXez8rHk9NQXyR15tCin2eDx8Gb71R62fdkTdmyfVTMRwn2",
  "key12": "4onJqhJUkvQyoyK7VFSGtDuVsrRzzzYX3ddNZ2FTSXE2q9fLPA61YFMYv1dBGrb5MQXZPivXGLeui8jxJuAHAp8i",
  "key13": "3D1VdKUu4StdVGCd3FnHxLEHpUhcywBqbRBwkF2psn6ktshvx3Qm2BSrwUpvWtbroAe38MhJp429ff9A73a6q5TN",
  "key14": "3R66G8QYUE6FDWm77vtH5xZ8AoXCZjCFAT4BESv46beuv8F6PNXePsoM6sJCUybuthbVxvD2Qg6L7AgmToUJdkx1",
  "key15": "5EuRQ44cNAz2pMRL6WqnNXY5jyUn7bi8sNJDnKe7N5BHAdKNJheQu12swPecVPusqm5yZMg5dv4ANg5VEn3VtmwH",
  "key16": "3idQoqz1ohds2SLFjThwynaPo6Q1GxxgyqnbyzmvGCVCBD7UGatkr7VBM3zDWdbgMUXBDYMcD3UYRtWb2iZbW4pT",
  "key17": "3ZUZGYTXDxFGEdDDHMxjA5RfLgGAW6vm1fNC4ycCZk2Z2tWz8tFSfroYGgikfdumQujpwS52hhLAZthiYvD3y4EJ",
  "key18": "5hvbRDbBBf5vc8DoYxUUwFkAMZY4JBXFwqohxC1xXrzxxB1eGdNRNyxEVib8ZSNkcaHZiQ8LyaAdESty9DDgmyGk",
  "key19": "4Yt5ckfnfXtZ23VwrfempthqiaKAF6QVaQTHownH9njscx3j1TNDnjCTgyUZLmSjab8tCBKvR9TocHaYfWeBBDSL",
  "key20": "54v3cK4Gt2w5HdF8zNLyHGvNZ3kVKiL5p2yz6W24dd2gSvKYdXEuLEWEs2znEVgCTZEFtyego1G43QnCgqNyLbTi",
  "key21": "3NdqF6HsaTNZoBoBzq3AY9bURTjuVE7wZwdxyGf9kYHBHJtFovoNyXuNeGuf4EQrBp6uusuR8Tc5XL4acxcRnKS7",
  "key22": "28ADuSwzycbnRLyska1jyPDHZhbTAiSZcRyMz7fxs15koeNak5qAJvomVuZAs1uXpZxjt1KFTGSzEumEKQbAoJGw",
  "key23": "5oXDHvxGoqw2WoQ8TiUHicYT5C34QB16sg4AdhwTjWDU56oZAAv4di3NqYWahAnL6ejDA2GXdGTcLLS6S7KktbL7",
  "key24": "33JpsGWERv7haLNKKK3kDxhhfctRSkbMfZqRA8Sarc3vMUikVExjfSojjPWmDGrhnAPEb95CFdsnU4XUcmXoJ8Nj",
  "key25": "5VSEh9zuW5UhQxx8YF6hJM3jKwKe3SDq9MRiPjc29Dy9P12z7FR4Nx2toq3GXPTsnRgXTB6h3iKoXvPUEMdh8Muq",
  "key26": "FE8cB1rg9MYhTPSL9AAP9MdYvtjRkW1iD9Bwy2xSse8ZwdZak93X4ERS1FxPohRNkJaHVrf518W27bJa8HCGHSj",
  "key27": "2UUH71Md9ejw7V1Yoqsqp9dSwh4KEZZEwes2diiebzJArDsnMofkEKLirZJmAAmRN6hXRVWucYy7FYbYUKeRhfph",
  "key28": "3zbBFiH9oSbD36JEp58veAhUXMQiDDLPrGrCC7A2C5PLFo5sjrvLLqpYTxsBkTQdeVdjCZHqVZuLEFMh7SCFhF7L",
  "key29": "5Age7Y8pp4JMsUF1SYa2a9ZaRop8zhivu9zWo2mjghWWhVEvBwqFaut33LQ9695hqwfvuN1sSM7TpFhFHWNbxNJi",
  "key30": "4nnDqYC7ynemDPBi49G6bQah1NzTjxMBtmEBBFRs2ZAsL62RxoDPhr1peDWs36MR4B5agqkfmfLwatRLmpfuGsv8",
  "key31": "5WBdqH3Ktd4zmxqYkic5aHTtvrjKTkVANF1QhFM9TBisPaYMaLwdo43Qt4cxF7YVTWE5gCY4SjmKKvMamPVb3qAj",
  "key32": "4zRgLgKjFsi4gDHnnr6aejdrNZfCYLCC6YudUCy4pp35b9cCvGpQhTUex5ucUt1x1FgLiJzb5zhtzthed84ztDe6",
  "key33": "7Z4qYs4YHu1MLh5x1ytDCHGYqrqdAP3aCyYyTMYLBPgKjmZV1gRn8WyRpjbc4VmzmAUoYqH96txX7X14NSRVWhv",
  "key34": "5tg8oW1odQXNruJpczDjLzFMTWDnaYqqQocjNEbEeAysoafifEaiQLvyDuQforRmnhF1UX3vmLYMaCs3dc4bTLzC",
  "key35": "5qXViq3kUH5Edgm2j3J3zAQipCLEESNAVVtwpHUzo3XdUHiE2SZmqZHsv58KN1kJ36fLHqPoKt4Rfiob3mVqer4",
  "key36": "4Udz3modJG1BoCsVRzFqRz3xTRWDRmCnHDE1Z6SdS2uFgkmZRdvHcMdDPpWEQoUxgxSqC2nc2JQL4EMcBkCJ8WqB",
  "key37": "22X7rYj34c5TFA79MWs8oF7CXvoEFbwPkVbcYLTD8Kk32aLEeQ671pVdLNYi6N2pAp4y1BZqAsaXG28PGu9ccKkb",
  "key38": "4KsELPhPDrTVk8b4DyqrsAcTqEzkZsLeVqV1H9ADi3ugRBBnNjBvVtU2JU1DG8bSGNdfuLfGzwSjgUnFfjyHGHvx",
  "key39": "2nkLZVtHVJBut3fpsENHi6Gvm3xKVKKg6vtktxxsne6WVUcHsWNJDrfWr9b1DABW9386AF844NFbrBj4iLbSx8wf",
  "key40": "5AFmZoYveJ4GTr8nkWqBERP8e5G77DLaXjN1C1HLmL7yen76Wb8NKZZmGzzZbHgkERsfTt4rRATaqrY7wAsTw1MJ",
  "key41": "DWD4NEm1tSosJ4m6ZoEZy18UsdEhSrp9amskgnws4hD2wkeamGW6t6dMKF3nUPvd5ijhDAwk4cVK4Dkqiwa3ofM",
  "key42": "4tiZrBkEEhcTJJV8bhjk9zJHRhoh6sKvZefLpmPse8a3nz23hBNnKMhosP9qVDDA1DEdcDbAHds4c1KgciKKLQTQ",
  "key43": "3xWVhoq5KhYvRJqgaHabnwcrACcP7TqhUK6JzJUB31CbXsqMzfWcY6o8DtQAVWNPNF5WTt3gD6Fby2qKKxPiLZPE",
  "key44": "4QA3rvYTQagZ8yR3XDD6mw6T8iqfmR7M6WxHcCByMT3D9ESuRaZgRfZFwy6mhS4NdMJrmBaiJ6A4MV3mAiPRUcwy",
  "key45": "5g7eo8bGvZcTGKu4ZQdGoYuAgHxy86aKRMkmkrmrZXdBgxusQ71dbJuBjjAJ46pw1ubtNZzKvLopeA9mXaTdT9yj",
  "key46": "mE374xMXFoxzyhEW5GkzuSap6MkPMwrfHAJhAgA4KcUJmCSctx14q32xZYFGn6qN35CbJMr3qAQ5jfQP4GwGYwK"
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
