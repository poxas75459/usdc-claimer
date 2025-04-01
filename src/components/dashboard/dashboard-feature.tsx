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
    "5DxFCAXyUMiKX9GTPuXnpGrQ4EDFAzsrm5tZa5B2r9s5TVEiqcZQKUutLBhwzvDmWufBsn25Kwt1jdfuVNaCTw3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmuteK8oS8c2u6VnBPgQuZtrGidnhJX6NsVhwRc1DcAth37Ma8fpou1tcMez9VGX4dCxDTCJigQSQ855ewcw98S",
  "key1": "2X1RgjrsSX2KYAynPyoDs4U4m2AQgCvzyekkuKnCq7eNgFj1e8ZRiQmHYLyN67t8YEv16cUC5XUeQ4SBcHVj6sH2",
  "key2": "hRS7AjvC1UBWzGoNZ6gioXAMjQaZxXeNNtiSNwXPXSueWhW457bj9Z5dG23dxGMmvazMcJo9g9ovAUZwfdzBq7k",
  "key3": "To3U99P9TYyFnz5U9KUh6fxJRfjCMxKRdConYpLQ8ZNsvoWPJwVnGCx8sMY2q8D2wjCakFPKsDZo9nPmRmWR4M4",
  "key4": "22QA56sFfcSA73HZ9k2UBNgaAukvUJEioXj9ox5BUqHA3JM4dPR8MGa1GPmZ1hod49ahUC4E9xSG32AfbVxTDgqm",
  "key5": "4n6BYnrD9o5ThtDL9btzkSLDJwfJujDVaVokkQXShGotJZsxtPYgYcFd2LpkurBppshJokKzVgSeMbXhaPK4bhZd",
  "key6": "62F2fGeebqABnEeB1LFaC6ujGnowcK9Wgzke76AtJSakRC789P33L4Hs3rJbjT1mkaz3ApqPpqd3iNTiPdZbnoyh",
  "key7": "3jAQvvCTSfrSSp3AKvqrqPvhaw57JKampXKuyPvXteHceD5S8hhFwqZxBYw11tUDyaDCN22Vqpz9RkHaynA4r97x",
  "key8": "2qZVNDfSgyp3fsm5MvT9goPa1YBmdofmg5QvK3V2XZ5J19CNe8fCgG5rTfQTwqwM4orVNmdUxTMQ8kfE1BeWpXeN",
  "key9": "3dFB2UmNBU4FWX6AkkjRMzuZmPGNZGJ6YySoJxFoEhooxAWApsibLWkUUuccU6XcBE8pLgFBiTRLfkDxpYnXP6X6",
  "key10": "3PjTg9HzHmVpp3BfrsseB25KxPH6V1jQGnoHgEa1C211TuBascqd1HBmJuhhjnmEaoQYbgA6pdR1PQRnigDfLhrN",
  "key11": "2oZixC7rKEB41uXQHmDuHadaMjdfc4JCgLzj78BbVVuw2iCm6fFVohEcioyVdrJNQ5WaWKJBLr7Kv3tfuuTNkzeC",
  "key12": "5kNfqxWSFp2bKSqYPjN5QEmhYFgoK5xy1SPKoZaV1Z3LXkH9tfEqU8cdZKKScGWFawKnUbRojGB6jVQjFf9JkkJB",
  "key13": "297MjPuACSt8EStsYTJ2kLUEfomaoAwozfRnWHR2RQANSKrSxJmx7pzRNT3ppcZLzZRTpPVnWJncvhpdkv4o3EUd",
  "key14": "5PPcP7XNRXw14onD5K3XPnQJLFiCqx8LQ9Gn8FbiERcnxc4xodQRVkSFAZUBKnQk8c5iXGMvipbgogdy9QBdQqSd",
  "key15": "58ETMX94XqE7mrxMs5v3ddnVXwmdGu2x14hGCpPxZbEKeWimEjJHFSNcsz3PRngFiN5bUV5pK6txa2xCCjD5biVr",
  "key16": "5XQbF6GF54RPuBc5STZusC8ErZRziGsjm1xt2aPfCMSX3uYhNWjAbK3cJfyVpwRdw9AhBGgtaB2iL5mRq8f53Edi",
  "key17": "D2BBZUncZovaYUm5UD12NGVJC1yT31DUMnKxhHn1C4WQY3Wvh6rZFVGXye9fcP9AagsMbWH2V2HtcE4Qzwhf6ij",
  "key18": "3ZXd8iaY8e68EtAt5MiN1ApMnrj68pXqXxSEu2Ukxnn1qphZVwYwWKQiYyr5zDcBGVWLxgPwESwajhS9fMyfvUeG",
  "key19": "3DZKTFNP9b7maVNFaMfzGELQrD1Burt57GHDBvGSvvPoDxKZmZXknXo6kQ99iEXtu4gFZQsVTbaitVS8CeY8YztW",
  "key20": "5DcGzjUGqieW14pwxQkDkRCJZbLC1zkEA417FYt7R1sCqKX8wPrJr6Z8yX5oBQkuSYuyA5yzrhbHtMrcXVq87v83",
  "key21": "5W7E4ZtpTW7PEuuNhEC37wpfUjVTKRkVk3rFRAFz4hojMsTeun2zESc7fe8ccugyPeaE3iiiWH3kFgQcfLawjcf2",
  "key22": "3QYrqmw8SexTxZsunNTyCYYDCqR7GbQ1wK2uZGsg4MbQQfga3ksqHydhV8VkD9WqzjLKE9izpUCwE4yeTBsPoLwQ",
  "key23": "58Ei5pkbcAgFpexUdLcuSjEmxJzVz6coBdY3REWLw2jmHfHvDaU91z4mFHgWX7JaNuzVXecwvZQfvPb9sauyakRf",
  "key24": "4pNH1N8NgcyVp6VjY4SqTvEsrYp5Jbvt2hBfejbpineVdcRfKKnroEr7EcyfKYMQZEPHHBDyfboSLDKuiYUjHfoU",
  "key25": "5mAyDbor1tCwUdQ25Aypzub5wK4FLu1Jgjn2SksTyPGsNDaT8h7MNTxyeUBeDQ7cPJQR2Lzc3jMyWusgA7f6nkSV",
  "key26": "5ChjEarFHBGCu2ACkPvxgxtT64QX6fJgzJ3UVCYGdHG7TPpLYAW2TipK3Luf3zqXHpPzk49D1yAwH8eS4Pzd9CMG",
  "key27": "GjwLoXtefaEfHDvN7PR7GzW2HBp3DRAQirm6AiWT7rQiVr4XcXEZhvz4FGCFVLE61Eb6uqRDDAsBrcAjucQca2F",
  "key28": "4MHF2FedvBCzfQd36uZP3SSAj16TssoawHb36Xyix1DsE68mTo2DPJZb8dwKXmFmN6ks3zugoyW5TuEBPdC1K6hS",
  "key29": "psTAu9PUNerppbE21pLuGTFckpapndxqiwju8LtydBF3SAaQUTgDJJuBNNJ798faeLym9XRtrVzSS4E8cb8RxDD",
  "key30": "39GM5tD2xg8fmYtmeFbF7cRjR2DYAhhsP6Ea6XY4kJMu3sS17sHDHzYWokJSmE2VTeMHSgLVN8mnJynn1FaEkzUU",
  "key31": "kmYWP4SsBttyS8WLrW7VbfJwTfFne1HiDCqr522Lh2vjcK7H4YdVXBHBfKWZ5fyeaNZaB2ym4TeWc2PedQzSeVo",
  "key32": "VzMUiWntTVEAbhi1YiRkNUARtANTGqhAi5QgoVu7xJK9qRtycfc3V1ygHu2Kda5LuJ3YBYRR2Lbf2YqPftsdgt3",
  "key33": "mxT6ZA9HjU82BJ9YY8bYrcqKGnZ75gf9SZFA7acjtj4TFB8MmbjMFrWqCzw5FX86fGXsJLtjSkKyMHiv5XEeCCY",
  "key34": "4KY86W92bUVZ982qAAbTXK2kEWnfRU8uVpN4hN15ZhSzDJhvb9MGk5TRgch82MEZK5NaSNVFsr1ZZ7PRaDn5eMDL",
  "key35": "5xCDP65A8yqxNfCiYiocWMKoNvpCn3h4GLW9XD6PzBVQZS8jis6PM7xEqZHWryHoi7jzfYGnjKuEmbr5ahTA3Vg6",
  "key36": "S2GMsXuXAwUiUGRPay7KiJtKx8K4nPoWxW1jjGZN6YuMMEwZXf9kcvWN63FKKKge77rQ4qH3gHXCvo831yyiAZ3",
  "key37": "3gFKDhQX25gkMKvJKpNp9ADaA8HaTawh8Lvf7LLc6dSpJTFWqexFGzQqag5a97MPenNykzVE2WjeuqqjMLXKzDaS",
  "key38": "2LjMwodjgw4MUNkFWAbZ7pf4Q5XQNGFrehHGnFjJECTp1uw9BGsqg9ffEqFx69jdg47mMBCMb3Q7GWgHKChfZds4",
  "key39": "3yXD4uEgp8k214RnGsjzENXLt2CaoNWePpTYCju3uG3vDPkGzZCtdZ5UvvZ7p7zaw2d6WgXdDCym8NFLkP4Sg6ar",
  "key40": "4n2K64TMLb9JX2Py6TAXU7FXJGVrr8T6irsZxmEbSXZCAFdZG6VsFbQtQsn3EyD5WH6LPGwsk5gG9iA5rgzZYhvs",
  "key41": "2YoiKbhyHorvZE9rdvoyJmnEcWb5qVC38y3EMrPts85FRptwGMbS8GBGW3FpCyfYUbHuduupp2Hceeqn3ePnMKaa",
  "key42": "4pS484oNQ7FjMhZjNJMzguefxWU54Co2KYgp7npGTgpeMELcKNERwbF2NU6akP8iHwALCvZeKPFKLGS6Jth6y5cJ",
  "key43": "HnUmd6nfMRijB2HgKGJbG9xqW2yoy2mU2nr1QaQVUrdp3UiBW8zM1iiwnK5Q7paL72EfZzBBxqH9qV5BZngZzFe",
  "key44": "5G8ke4Y2DEkes6ZGDUzw5qAKFKMQbJvf3y5ZrYbSY6aaHiajxCyALZTWuK19PJKQpR6bR1TaJqF7Vb1zGzGbewPb"
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
