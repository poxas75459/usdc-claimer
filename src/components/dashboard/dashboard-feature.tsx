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
    "4t16tH8V94vGzkuT8Gpi1iW2chbd3XhEAtJYpRPT48DKc3gvATRVuVYnFZAsaNe9G193sEu28rS8sRpzyLkMoJaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UUuSRRJ3CbvZ8w8gcDVmf9RDwqWueA5atjN9ha8GcqrWWdhY6AunSk3xUK3R4HhfbK2MsydouaM6pabrxDJu96",
  "key1": "2b9Jj7Gx6dr1s38rqNYFQMmp1DRtgxmKffqxeH77PYJYGhqRskgU3W2MfmDF6dvNXuZY8RNMK9eLHv9YLoQCfDZA",
  "key2": "2rHqtLLBHDKA9reEbRTK93qsLXeypHZTv8fRkhLG2Haayk19uiFEYaSCm7M8VRaxSdZT4d7AV6F4H6tVAzR8eBEc",
  "key3": "46DeX11BStyLhn4mWLVvn97tfkuE1JN47aLL4spXFCZVuVwWc8UrU8RomTrNSZUazEeQvy84sDCaes4ubjQPWSQP",
  "key4": "CvVDD9LQf8M366djNTGRNPwZ8ZVx74sb3G7DRFY9V1cEioqZRbpRAVmCHeV2kLhydcyAuYc7nPYCTTcXncumwFm",
  "key5": "5q94FvU2x1iuEbiKRmEoAJK6dzFpHb3RGkQhi7KAxicTmhZpbbJi5MvExhJTeru83mzM3tVeJeWHP9G648PNmSc4",
  "key6": "55ndBLqAc9Umf6yQrxQ6t1d3deDotWDiHt5GkYgeegWNyFt8ac4SU12CTZyojM5yXtiZsi8VvUbSSQoR7GCH8NZx",
  "key7": "2Gwxmm3k9Ct8JDUQdVF83Y2GrPa8bQwyr4SFKNKeZx7bVFA2v8UiLWNqbPcTCgcp2xuFR26VaJ6Um75b8S4yjakH",
  "key8": "GRNfK2bhGucDWTfKUejoi3BaMkvfQUA5u9vZU9apBxg6gG36nF76HwTqQKyKbHUWX4JkJHpyWviBne4LvFUH96w",
  "key9": "2c2pFqLSqjsdfpKcz2mZhaZZRp1itseYSgxsUiaNKG4KRMCNvhbHosDYnUxtxkBayycK6B3vaZwLF98x4pHCxNKi",
  "key10": "YJDvAGFKKoX4n4snBXaRAso3TXRhFBiJbeZ4fGBb5mpurZAPFE6SFzph8VxZ77FGbeQdqnxaN3aKzAe6EjnEZaQ",
  "key11": "8325nfzQtogR5JTPb5HH4ZUCMAvgsa32WS9YDKrEVxVnH5gHKNxAJPuKCQY9ns8z5BotpMCKeGKFeFmaZeYrNvd",
  "key12": "4ieohomSqCBm8jwL5SBkeMxXshcYWucTFmvbVxpFQmACoJnDW2PaFt3FrHxA29w6euJRpxQu1KSwcuCU815hteqq",
  "key13": "Sre4a2THnPQjFMGF8p7CxBsWyL9GaCw3mDsHNF2KscaFuUcqLCAmk5tNjbpUzS4ohmnPuH7kPxv3BkhzkKRxUvg",
  "key14": "5bjbzsLU2bDC7nKyKPPDj77CzjVrKyi729g2xKu2CdysXev7DmiiFyAgqzjx1HBz1mKCQBa8dKnpPGZq8QURt3Ch",
  "key15": "2vepWBpkfqMpib5PofDtDE4vcj5X65TtuCA9CavcYH9g6izt3a3cL2nNQ2SttbU64hoMMBVJyKWFg8yLqnrP6qwp",
  "key16": "4eHw2y5xiV84xKqEJSJAViaNAHuchwFFeekQbjJ7kYFpsQkDLkH8f71x51JSNt8A9HBeZAqzz54hTzJ863AeAm9k",
  "key17": "3cnxTPbA4iAYhyhVBPur3zJXyv8hGSDo1uXzx2UiC7H6ghNR7fXNwAFX9h62fNZdadNwqFgXGCJT2UPhrJ6aqXiX",
  "key18": "2otMwCsry7pFt952n3AVNmdM5RrSuyaPrDvaLeUwUiAba3cKG9tJxHaFV7B8G8VFKHF2THXuMXYDd8oUVhVWKv75",
  "key19": "j9aiEQ1TckT69fy8v1nNEF9Rf8wBBXhVgQtu3ofVqWdfdnvhSvmBTM8e3kRTd8NLUFtwGfEucLfAyaaMERVEyqs",
  "key20": "2GF4Ntt6pX9SXtFL3qMhztsBMWV6Ljcxp9sXkUUdRZNdsxsUgXr6AFir5DZmYcKecChkiSsQkaR9CuSbjqcTFepv",
  "key21": "4Ns76QWS8Ze4yH9yP2BD6BmT6k6ac2PA59pmRAxEYCYSGuajDRDuNSR33gLFTfQo8ApJhS7zNNRcQC1t1jnJihZD",
  "key22": "3gS2C4iaiZjxU82bVcBmmjW5SKgAMs8VNy3tJaDF66tx1FeSDdGrBeSWQRCpptZEEof8juSMKxu9Wb77V2yshUWQ",
  "key23": "26SWXdGQmuviBZobHptnpGTJUAtb3h9Pb1Lzvxs27fUBD9rTa9FVkCFdWcagNDfuuCpLfE2S2myanJeneHxR2KYa",
  "key24": "3GiwEpP1XHCmxsy8iQCiyzkdMSJwo2JQ8FhtMxmsjCyC2aEwQCvf7eBUMq8jN27uvaKcL7orBqeUWYpaVX3TSZ8D",
  "key25": "2akxhqYGgw4fnN5aSr7uXXDyhueGEoxkoAN47rkWw5G3Dk1de2NMCKmUJwJenbfSDdzZVnzdzwaz1nBMBGYCnHNa",
  "key26": "2VfAceKjhHxBsmbPxWiNy1kDBTfSXG6ChZXk8nN4178mtg8BRpsqGJuwuPbSG2RrpmYZZpQsu8sxL1qJHXLTcVRd",
  "key27": "4py8GRuT9Bvze1Waw7PadbZcwoAB8wdPXG6dbhoVTCgcyQYGaSD7KuCE3b3s9Gx6kMqFaqizCdMhdt7aD7584pgC",
  "key28": "3AHdujjZudR9iPEyR72RU2BH6yEouGpdRvvYdrgrGWynjY2tnDtgK8fuDhnSUcRQjECrK4xmzqYo7kE6ao7PhCgg",
  "key29": "ydpUfqdXxY5ZRwn1jEwkmwPcgFNG67FSXRsJ2Wtt7EeKT6wjF4HDXht2c62pmJuchzYhtLq7DeM9naZa8t9NMNU",
  "key30": "4Mmmzy6iE2XpToktuGRQRimmeCvy4onBfS39svvnv9aeuTiWhatcRwdH2BVJCHEQwXwm3CXu4z2ixSVeim4pVbSX",
  "key31": "7RaaQFy2iCzD1weL8U4N7HJ1Rehrwj9aHyoAGNn2pEzKrhMyETLEeruFmhARVjMiyafM4G7UqeXtLLzcNYyZWzX",
  "key32": "4TTo1KASWAVkSeofGrk9gWtevoLgtGUDxKYcdMuYFocj1FF7ekzNTDXHEKUyTestiL6xMS2ffh9gPNfKh4GbDMBf",
  "key33": "2s2qhumAK7aGDmzqXkBhUcptv4B3Ko3BdtZJTc2LpVvMXro6Hs1r1ZEEToXLai21DNzQ656PVNGLZ6JoeTJTua7g",
  "key34": "32YSZ1y46pxrJmKWdZpispT7QuLKRCDfeZatT89S8NC3dWtQXXiVZjL5dMQFzDxxEc94fXjNzj4JnHkkfzLp8NuD",
  "key35": "5BwLq1MBmsdhw3qqsDohjWy6n7pefhvVQYzr1njpqYQRJBb9vSZ7DJktZiZb8NVshigyLRcq9NSsQpJ1FNFArse1",
  "key36": "333HnHhbUumMY1NjnzV6DdpdUDTDP8No8mommnEkqyiN4iADAi2kyCZxp8CUvFJJAu27apXhk7dSk3VmsHDGWoc8",
  "key37": "5zSWUYmZ76vEvrxmZYenhMahtcE44RJ4SJFdEnezJ8djfueSbpBwAwsZViHg1Xcddq2XZfDXhvFzgPyTLQKixwFZ",
  "key38": "3Um1c8cSZeqKFgHdW5QgTNm3f24FXt6WpJid9RBnyWbWnuBxyViL6LPTsygRHPMeDBCff4TimH6ueReQPVqcbRwg",
  "key39": "3WXsr5DQ9DVKrfLogEPoJ9L1nADos68QAQWC1tXPudzV9RH3MuzzktuULyBxP5WNuLPgkdwn5MvZ7oeYED5YDGgj",
  "key40": "4YLvh4EjNuqkYpEL61Gi3FqEmMoTARdL9Q2bAKZpKHg8s2NNCwKPqFuwC4xEMn4Ey6nQMrYcZkV4f5hmsFE4CJwj",
  "key41": "5NuuM5vEdKihbzK9mQ4xzd5mq8Vtk56XJCJzf77tGNxgpFqFenbtyddNP68PFF4o3E1mUubp2kw4eVgFpHCWw3Fq",
  "key42": "FyM9n4eWGCpPqkKGvCYCgktKzrQEr91LGutstqdoT72vMGLPoqeBRpvevHrgzd8eZ4gN64rLcp8r4gndSJtD8y2",
  "key43": "9pSW3WRXQ8q6mUzFdhyidarkZXGfRG8f1i8AKZE1KMfgbeTfX1FFQnF4gEmewCSWGFt3ed7qmAxy3yUyp88FZR8",
  "key44": "4SXDmagzo8W1UEr2ZgMpbU4y5T6TMzPFbBesX2ttbUQqmitAjSMd61znj8ehnmqu9jqtoyR42b5nYeC5AE2hnWf3",
  "key45": "3Rf94J9XhxWGL8f5ikRdfgkMcqw73Pjrh5YUUdzyUpo8aFqWaAhHh8DD5aDwTJTbRyUienK2NnqKP1QiMRgM4mWS",
  "key46": "5D6NYmTTAtsm9nJAmyuBDqkMdXaEsbdsdForw41dREqbPSsTYaTgZNzp9BjgMQgTfc1irVmXBLJByR2sUZJ5Ni82",
  "key47": "315YSPZdrGShigHe4JHJYQj7sennKawJ8kGpGF65HouxcgkFpc7MJSVztHpTgXsS2yxeUS5BQsZU99ku68ihwu7Y",
  "key48": "3ER3MiL3i6sH7P35AvLvL84xmhGXz1R1SJnnLGVzqTEMD52DZpvqnKT6xhyHzAHhKQRkqACeBH9qdiyGHVPo8VXm"
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
