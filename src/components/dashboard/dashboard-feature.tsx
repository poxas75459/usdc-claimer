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
    "bXDhZLKTnBFxsGcyzeEyueRgxhYj22WtU1NMfBMVJ9ebpiD9tuQMWD89Lb7mSyXXTd9YGJXY11HsQAnj87FTfWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESgeRGJKK1zcxKJYv1eubV3Bp7cbpDWKgPkmytP3VEYNPYmE15GRhy2NeusU1RmeJrZaXzWDeQfwsEsihTX9JtN",
  "key1": "7NxWRY81gCuoeBnDzvxRmHbN3aBQBiPToRH8XZX6ydYxNzZJ1qPALDmiYq1m5TruAvCStbQRYNSGcRXRaFq9rL6",
  "key2": "3NqnSBS9vNVorTi4NDVtJzhQz78SbTpJf2PCduzMfUprXZg97u7SoHSKfbHHP6xZf7U8MozQSwBcaDyKFdjaDd2y",
  "key3": "3GYEyx8DsMcezhDZn8FYXe2VceCTNy4QpkfT5Dg1PKpUxXYNpVgyQV16sovav6jajzXPi4TQrC1M4F1ZRc8Aw43V",
  "key4": "8rg98UqNkyKpzBfvTHZyxhKEHgkWzzYFjx5CAYtcnTLhuE6ZHGVPxDXuexAPwFvEyDKigUNn6y8WYms7sWoZ5pi",
  "key5": "4gH9fR9XCSv9WoPWSCt3Y2A7KAXeZKQeMnFjdx63N39DDBUnct8pSeA8FYEE8RJv9FVof2s7jfHwnYaqurVVqkCP",
  "key6": "2TYn92kiTq8kjTBgEaRGzt62RMhJngaFbJ7R5nZZFrbmBKMkzCFbTmWGBWrwzDuxkzZKzvU42j7gbihdDYzGuoW9",
  "key7": "2Tif6sSXJiAmVkQRKrU827eGFLwQNte7iXzrfxgnVhbabzGhAJ3KBM9MH7yWWUaqKtLeuDejkTAWCWNBxB16U9bY",
  "key8": "2bHJtB6iKBa2M6NfNaozbxzym7fhVShc2sbHwTVasDd3jx6hHGBQhoWRhTpS2Vxv5F2AaT7M8Rd8CpcUvcoHHYwM",
  "key9": "4pfqaE5RktV7bYeJawvZ3zkZhH2FuwpNQenjveg3jcs4ezpHR4qtbx7U26Jd5dTG6obWnxsAjzcY5drQ49RuZrKX",
  "key10": "35R6JFwrU32M88ZVeKsj99YCR4gY7UbYEMTiGoXw9UJFfx2WqaT8j6GfK6Bon9XLzAZ6euHATWBRs66fPqr7Ynqw",
  "key11": "4kcoQekfsZbVrEBysrnJ8Kj4CErbgeURAiF9oZyVbykudEJEXsPWzRNUxR8yscTYn26U9AnMhwExsvcXaCQPGS3P",
  "key12": "2n4o7SmEpVQaiArT1dZzntgYs2DFchbQtaJJUKsQWu1rYAoMtx7FBXwM3U4iooQDQD2DRbvrdY6sqgzGR1tUsswG",
  "key13": "42YsFC8PyLNbbUCFzhCjSMAF5wtb7KdGoW1UztcXgntFS9kTNKTaRazgQtpqQpi9QKoMV9GATypDUqbtivzfqmyb",
  "key14": "4oJwCwKLCvcRoCm3BKMLtbMyW9wMpPpQ2C5CFmNLx5D65TAL1hrnybR9P1CAS6644JByJ1niupPFiSnFets5Fc9K",
  "key15": "nCbeHVGSZpB5jx13HX9gS5YgAz14wrPykZDj57AVLcy3hiTPnNXXh1ytWWxpyc9zbRDvv2aTZASuZaQpNKG1GbF",
  "key16": "2CokmBGHNxA8AibxG7gyYER5xRPVvnfoZAjaRjKGqvSMyEHh7DbbXiiVkBEKLLqjgvmwvtWyKL9pQ4NYsikVTeKc",
  "key17": "4QTgnUkSX5LSaLG8L7aDscUbX8WzE7QYP4djaKRyCgoKikWxqrTiRfhzrwvJApEv4YivmmfvCystdjnp16qY9Pf4",
  "key18": "34YQMyvPeS2EDR5LfEyYSNpgnAmjEB6pT51d9Fn4sL2NgWeAqCkwhmKPXp7yWVysH7NXm4nfv2ZsHSbRKZMMZhWH",
  "key19": "dNZh89jTXZMW7Sp6LasMzEAqGE2sExCnxQTUZTmmXXrbEyhpNp2yyv1TCdRQNg2AtjjjpgUuhSW1Y37JLb6BKR6",
  "key20": "61G5eD1aamoG4hKLxnmy3kRdgrW46tYKBFcYup2PFgXpgjg1bZ9tGM9PFgMm4MRurbNzVeh5AWA4cpkfBcda1jdX",
  "key21": "YonUvrsXR7PnZezcZqUmU89ugsHYMNaMb2ds3vgzxoUWLRyfyreqJvjp6SQGPYk3A8nq8q973jRLoiGTiTHhmav",
  "key22": "Wd3o3wWUgGG8vao6mfZd1b1JDiHXzgfdiY6ZdUPUnt4G9zQPkJ6tiZWt53aHgukbLhybzvQ1zWGtxLoC2Whutg2",
  "key23": "2Xw7Yq7D3k7WqWz7E8hYjbDMtWYhHv949yLt331B1gazpp2h2kPuXXN5YjkLSVHrHAURZuVuurnF3QPGzbP6e8VQ",
  "key24": "TpZVU8RmC1MHHZRhocv7HfAegmYiSnACLZ2BeKX6aEXqSzXrSLUGM2FSJLxm88abCb8LHFdGCmyN8Gr7UBQTmAJ",
  "key25": "5EfxvrnbksMNt7Er6BXzNqmg57fPe557CW37AgaW7qK1SRyDxqKzJrfQXAhgtBwbZm4H7yHZ4TZvSRC3PHiGhLP5",
  "key26": "5XfU5XefpfcRM4duE84FM3sHru8k7pmRwN6d7NFj4RvkvaoFY3RMv1j5jtayTsTEPMvdDReQMQGcTXn9DfbCkZpu",
  "key27": "37yVQ8mdDsvcrzDeicuyifZG1FkU7UBMpMx1y4Ra8YunE21UZhKufrG4ftYR3Zq3u6VJcTVC4CR1Z97u5FAB4x5b",
  "key28": "3s5bvBUuda4RwPco9WbuUVuPkWntCzoygSDNzzfMpKQtS7K2XVX2jrDcdJbrgyLgNGM9CdEp1KWixBzVCX9YY5Zz",
  "key29": "4ZoKZbbLFCvEaysyYRKX3JSv795FyXGU6G8RtNQZZ7RPkEwwjKiv7ZFvfm6XCanqCkjgXnJAChGkgJs9KiDYdJZd",
  "key30": "2FDGhJWc6szPSCovGKD2gnBjDUcwcj744JsrA1oQEXjbhmwqpGVXakhCAssTHDuwC76M1Kh5vrxT35iPdDgtxZDZ",
  "key31": "3FRX59e33hRfqkoVAnit5tXAFWS2vtYjCVgUTvBKg1FfYdCP8BaEVT54sQ5SUnKHWtqcuq8Vb7s67uvjuSNesG1p",
  "key32": "2iKayzpn6i37tSeRqwDX4Y78xBfyyJ6H5oZuZ2fFDzmmCC4hJ58UYL3kdeh88gz8T57LNNgMeY35GZ3sSguduxMA",
  "key33": "63i4GzS9tiWZ6nakJouaJm1gQp4Bkg7pzwn5N8LMYJEmX5gAubiaUEDtmSsfpVd8py9zSURaVe5LV3UnjQvaJNid",
  "key34": "Kd4pAHexUEwmGt5DLYnqZndTGgETTxtx7NtoButQeLkYrUDqNxmnW9sBYp72NTYPhP8JDCepHV5BybrH4J3x7F5",
  "key35": "8TML5TYL4yYFYjU1gXUVgufopJcJQ87mpLP7PnBNGV43bpYN5RvCHx7xxiDQUEbWAgLQX4oS2SphkqTjFuCmtRH",
  "key36": "3vWsTniDFKgpkdoDDaV6TUcs25fyHJwU2WXmRLNwgugTVQL8MBifuwXtvrsQKtB3hAwNesP3FZuW52AUdJ2nWctE",
  "key37": "51Eon3EMrUj1J13KUqmerhdFG2zDXy4ciQQdH3QtHv5G47Ev7XEti5KLgWe2ujAPXoyXCRmt2112EP55UFJN2pre",
  "key38": "3VRC8DH7U8x2bQWtyiDUr6RMqCsqZAnBPtfyok6bHaDvB3yFzA1sTZQasbftjQAGve9N8PAgZn4fP74VbNpHUNbE",
  "key39": "P91JEocgNVYMbTq7JiBUVREWZdC5mrMiEjZcXqPq54DXiH1GuRoKsRwpsSb7ASz1BKwHxmDEprWSwJBji4qL9N2",
  "key40": "5rw7tC8eAQNKW3WFGLhtGtEYs6kbwuRFfes5K1h1xv4wyLFTrbdoYfWn54UfuSqpZ1rmm2eZtvyWpwtn9XvhnzNd",
  "key41": "2wB9ycpgq1h4zYh1swPa4kEkF7LWTWwvacdQWFN4hNQpRKWaRxJoVCXqh8fkdhJXqn9D9HHwyE4TNZ8VQSSCXUgR"
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
