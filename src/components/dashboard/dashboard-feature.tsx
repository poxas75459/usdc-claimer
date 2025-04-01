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
    "3U3xCmTp8RrWFgZZtHRBgGPKShKreXRFovEB1wH5HZHWqwtt7wKTw9swS6Ynk9USpcrkGLw7KeNMuQQ6EZYLsU2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BanGHonBRBwTwT1E92QN5jdmSGy4yDV37Zj8Va5SByacxjozrTjaP2UELb6THZk78Ehc4Yaok9CJ2sBUrfk6Hso",
  "key1": "vUEzkjSYThezApD8RgpMT6YHs2NpDP5918boRzkUCtLHQn3ZGGTE2Hie8hwXZRYQJQLSCDFGvWuuzoxz2cjTdTR",
  "key2": "4vEyXVm44fAviqhAR6E56EosT5E3q9DqsTtmnXw78RCViL8DJwK8npWGQTEx5Yk9nnkU7ojufqZXLFSKzoPNYScg",
  "key3": "Ey5BoE8kUQtMc61viDCJMXeqSnvfHqwi3khcgQk9zKUcZyDyu95vwxLyG7PVmuzeKMEgUGuxhUbuUQzGekZUaG4",
  "key4": "2oZBDwiw86XSjQd55s94J1ThXt9ftd9zCs7oWzcBjALVYbtmL74HSCDsziQunEbiR8YmuFzBfL9L4WQLC3G2c9Eg",
  "key5": "3HojqkLvCsx7wwYnVHrs55ccDNCxSjogz22yt143pNnTyYUMvF6FYWXqLbxQxmxrhr8cCtDREWcVwB2PpWMGpKuX",
  "key6": "2FnJ4d4baa5etWeyJiQnPVfQCQtUohMweGH6M2Z36pFSHX72eM7sB5PvLTrxYoTZfL2nkx3KaRQo42bqfwPonL8A",
  "key7": "2t3rfpKVWphSgUXiEPd6h9f8NDxu9wZT1TzeUygVtvvKHX8cF7euMBuxgYqpK54spqWFs42rRkQCjqS5AnJLwCE5",
  "key8": "2KtmA4rm7RBPhNJqR6FgUGLv4zFPszWEDkNA5YMCheS2NCJQaBn3CbvSf9MpEJQu8QP5eX7q7mRyRdysSG9esekN",
  "key9": "63EURup1vJJsi3KLmHu5D6RqcsLspqHKLZYGC41thSCNkGUYC5zZiDAQzFYdCoPXjn8Mch2n2WPRoGSKdas3XGV6",
  "key10": "2iz22BBCsP7TJLSpTf4iJVnbHsbwBYC7gPhmRh55stA6Azsbp3nw2kDgUPNBNCozzcxuQp93ASumPn3kh43hRiR7",
  "key11": "XSLH3tn5v4hrd7ZduBwna3Je52APpt95iFnhhFReDtAL3zFjs7tkwBccz6ZF1pHe4hfZNUFD4khZGJHWTr2BxZw",
  "key12": "2basKpCYYAyhLAPGdeJAFLuGTMMvUeVRASsDC3Dzd1F7NQLZAhkNmm2qvYzdqvVAQqmyuU8BSnnj7bkpXtRLZYPd",
  "key13": "5YurdraY84ubuAmqyeThj1JLf2u29hTLQW7W7ybjqTvb4dPFWSCDNertgKSVqH6Ma2JrgjoYBMJQRctsk48hiB5a",
  "key14": "4LinUoKSbNbhHAuz1NPiHLALM1YPH1ydYMrms4v3cUB7ggddchQwC6x47pPVS7kH8pjRVjwpa1zungHKbbmjYvPB",
  "key15": "2AEThiHY5o58SPsh9iVq8EL1noGfSGL15mBQQPpJG11p7dT1iDP25dnk3NB7xAFhPqxarkjGEx15Bew44KM6br7b",
  "key16": "WxxgPMFbVP3vMEYp7J5PVKELYiDj73u4N9LR5W97SE3fYUTvCB5fKTw8gxnksGDZHxdrUWTP6vufPP95hHnHi8u",
  "key17": "4bq5odRddZcawKGGZ76WUf1yp2gJvTYc6XJUEDYSKQiQCW9gnhishoWpCFqW4zvMZiEtemnA6oEbYzNfdai86V6X",
  "key18": "2BkDex8zkuVHRaQeZ5wXTRoVEW8STH1kFKY5ckFXzm4UAdqUSCasah8z4Yw3pscMJ5ak2HhBSowM76M7k7Sfkd6P",
  "key19": "5zhgQU2bPFPyLY39DzuiSReT823TX34MA2JX78a91PDSx93r8MSAeruWZtEmoHW2c8scBJWRGVvx7nSZnjZsxHCS",
  "key20": "3qxhLZdsHUMtVfiA5N3LgdFTBMBHu1oz3hFxMKCrKVYVHBUwkBmnw98mVNXbgGkTKoX9ysQTQ257zpRUxp7rhcmp",
  "key21": "Ut1h9f5eX7vjQhLfQTVNEZSduF57AuEBj8dxCHQi6Az7fekPuHypmYgtzHRCG4yhLQ29fvNjE2R4gNPYLNQPSGf",
  "key22": "41p5ENc4o2xq99vPMFczSSNcnpaXt6XwDDN4SvZa97b9abWifMSeKNYYcxBr8k5VHJxJG3caLqZaQx1MMapcdeiy",
  "key23": "E78RJ5kPrAQqUey8Yj9JsC1cconuDXhxXXn1VbRQkrxkUhLsuiwS924cyXNGk8soqecpSBjSeEYpUyfww54Nme6",
  "key24": "5oyqjkVg3Hk77mHdnkphpjsdV7pqYv2uKpsHUxjWokEb76X1QLRhVW8pna4jyUDYwTg4iMee7cCVsESUmkoeQFvv",
  "key25": "5E5FqvYErvVXoW86rnnQqMFXrAz7epNC6ALqsAuZFJADyKvm4yj3xy8JwKy4g2AxPWm2rK2D9poGXw1bHDxXVABi",
  "key26": "5U65L2QrAHY9SRmrYC5Dj4VTdUUD2mSNapuNuQsENkpMCdxrELkjmf8g4H1D53Vvxgr1VKfs15L4smNrkzV2wfFc",
  "key27": "2KzPmMMhHNKwxYpKYkLotcqbzvGn4UT1m2zzBGEav5k4DZRqVRe32sPpCwMtH92Ai4WCf31bMCoJoNDACkhFmwj8",
  "key28": "5xSvsxmifVTYLXXizRrVMwmiwQ4mD7oNGyJHw2Wnc8StzQAUfx2WFKtmBVfvHfBZ9pf8TxrRebHrbRQqnkPo83dk",
  "key29": "2chaRhAbHKMFNYVTbQVJ7yFodNVwVHNQ3QJgBwVJ43Q7LhxoH9pQuqfvK2egqn1Yr69gySdv9QMWxvvGhujT26pu",
  "key30": "4j2UWdhkws8LNfhQaei8VRi18hqeVSenD8hTVub2bygPi1dWxLLsSHshGGH9cd7KCifTf9aN2Ta6SxCKggm1dSwW",
  "key31": "5C4rZyy3AMLmUVsNz4dGpnH6XjaoGV8PUdXuKqtooTaZnU3QJVBsLEEeAvrRJJQZ931hqp2zDAskgDo57u2Jtsx2",
  "key32": "5CSpWzcCRKdvEyjjHboxUiLD87RD1DMaesgbZyFZJEbif2v3Y1AEhK5nKp9dhMDR7fg9onj2mqWZopNENfKVDgLg",
  "key33": "3k1AWWwpppswguMPKpTebubjCcyidoWEvKtNxUCXnnNdKuqb2nL98UNnU39pqGrk73MRxcb7MMrVwJrjotZ1a2xR",
  "key34": "2gJ6gS3eMoYhuSZ3B43AWETmBgodp81j9d8HQYSHNngYsqH7vzmxbQoGraSNsQAtKW1pbdHARPP8TUW91JayDAay",
  "key35": "2h8uUkfs5B6Kn2eK4njYni3iC5Ju1BEciVLrkRDRZpucGXYLFgTberR8df6dJeJxY7y5ctAewfKQYv1b73DGqfqj",
  "key36": "3HvaG7hfP5fZ2fwsUhJ1GLSU7ynDfy1SPvjHHd8pTP2anW3J12Uy1aVu3KPbASgXF4cywGRod2DBvp53GA4J8f3p",
  "key37": "4usRYGHwmx1fVoKjVN1WUFeVkueC9MjxgSkEF2Qh8nwTT6kfRh8WNzNP1Sb9L5PJ3qXSAiDvpfhnKQ67TsfHpzjv",
  "key38": "2HD1PAL9TTyiX9Spnh9v2pQe5BuG2TXpKjzt64HzRuP52c8H7WbHAFrmhguUH7E2NBkfeZXNDc3cbzdmh6DhQhjD",
  "key39": "5tee4bBTDL8Fud29cjH6KAQRb52RALSADAPtKi3dkPa3XCsNPRBLAHSpQBf31t6PUztJst94qtkwFjZ7vQy3jA6S",
  "key40": "BdZZHA8mudh8AP46xsRQdk2UsttqRdXLBRnhCsUpSwugQZWFpM3ZqiGwQNueiT83snDTzTuPupz5DNi8uR1ymN3",
  "key41": "4xPwoyKNPzRZJsd7rCABPqNgr9VWfKzWgg98Wu8YMAF1sK1Hq1WCNv8JfG7nK5RwRZqkhW4oeMWTnxMcoLxU7o7J",
  "key42": "2tLV8Qc9RXdPbozqG7XgcXXeYfiCUG7CByee5at18jYWJH47dHNwPepWuGondP4M2rfjMrogn7dptcovnZ1gJHhy",
  "key43": "66AJxbV4Qzp18UFXmEK7D2QhfvMx2uyD3dQQ9XxrCnipJpRj1ThG3zuUpaoL63PeppLkhcgXpsPgfTK8LG1zq4nc",
  "key44": "57sbcCjUEybwmURqnHzqrWQVqvqeqybDzJeLr3r55WRh6Vo523TrSWVcJjuWFP7NLxowteuXTRE9BurouJT7p6i5",
  "key45": "5oQYBn3yziZ5CHnyZwivNBzF1yU68wzaaSaRMNVtG9WUwLopyz2f1HyR9FeYWGDkHoZ3a7EsC4q2MZ4MJ1JLSoL7",
  "key46": "5tJxr3oCpefwCe8NtP1yjKh5KS4znGBKQgnhhHXw2bHJKUsjTLNWiJVqtuwoECwGz3SFin5fsaoJhYYdiZgNrGpR",
  "key47": "43JK9kEAhGj9gMaU3eVHaxqW3tyvVFm7dSa34NFRFRiqBsCApggZNJdw4A99E2brYfDwfk6AF6mSz4igPpkWmHEN",
  "key48": "4CK9CCHDxFXafmBjFnUuZrzR187tJF9LAH6xZGnpK2KmnG3hYKtSFE2A6xN5gG993RFTqbjYNx1tRx1zXJDAZRvU",
  "key49": "KUN4PEQW4BoryHf4tcYoiXVMpu69HTHxMXXc8PTxAnYvmy5SsJqkWxrYubfNTKupXM7JFw2cRmsrLQTHPM3GBdA"
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
