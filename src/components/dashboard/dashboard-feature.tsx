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
    "5JLfFKLuPnAFRpMnPSh6WyAMEcX8N2yVGPMSRv8K1YnvLJu8s8eBiXNdqdzjPTMeAFshpybRjQv2KRwUojqC7SQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2QUTWUcT5P6youPtk7dxSJAwmCKcQft1MZuoXc9urhU4n7XrkU2eC6miBWX637dGAmf326tUERQoSVoorKhaiY",
  "key1": "EyM6HGVTDu1F4erq6gYf8VDFNZN2rXWzB68dMoi5FdLtERp8oEpE76C9y1e1fQHgbBKDZw2zqqs8dGpCU9RA5p3",
  "key2": "4CTavNVMp5ZSoUFrRykBdrj1iQfiDhiLs7gC3UvgNZUmbzvVBDpRQgZwY9qsiTpiTaHUFgfSQttdPsatVyqqujsb",
  "key3": "3d6PvmgmjUUhNV61awyvyGYfL9UJkkv5Gt7ik1ero7wojFxTgZJMZTJhZWVaYFzVakEg6NZw9qkT78aSfVVXG7oT",
  "key4": "3jtYT3JKdU2CCroxpuS7N3GSGfpyc2W7uXR4PCJxQg2GxLTe9d822PADkg8UnEzCdoJHpWS1aipFnyD7ikFwb6BH",
  "key5": "3iLyadtBMwz3k7HbPVZfFz2JSu73fLjUgivsVuEbyWArBU1RxZheZWg14HHBiR9gGSchHpAaWRg8KTQwR171HAqT",
  "key6": "291zmu925fUPtENvGR7GX5QxjxMTuM9JVwfS8qYGEvQL2JLyGErLDkx7sPc1ZsNUQwiScyNsdzidKdUQZX8j7U5w",
  "key7": "4ZZKKRk3YUYMULua16LzqELq3WSRtrxkcrwZo4TkFAqkjtGK4Khfa7Nj7sSQ3uTWpX9g3M64nGjd8qMNXm5QZUg4",
  "key8": "4yCsVDpwPwizSduYFxYcWBECMehpWPCdTeZDU4Tn5tbJRiT89PtvbrFS2GfYGWGmym2e2nZQaFznA3WDGcCz3xRG",
  "key9": "4pxAoHKY4w8KCj7umhKGqStFFrngpCVxiv9G5JsKXKUe83xaKNMZauCvCud2NZrKAq8FQg1VRYT86a1PVyqSqwEh",
  "key10": "4TdCLUmCpVYEZC4xfAo5fQwEkUrKkomcWjT2YVp7RUesgEbAeSuh6oSj8bBtuGSCfruSLYjMMoMtWTa5BBnK8GSY",
  "key11": "2RifViojTAGjt8QDTkH1nb4Vt1BeHsWiW9taPgeLEVGQGFfb8iu8eUbAFkAYHsBmqhhbcX32dgXcx1JrDhdVmPNw",
  "key12": "5JGFxYdhJhcWmX27oF3zHKUCdVMoN1VXnNzdnXVVwv4MSEZ1d4ukrftedZgJCxZrZFKw6mpKy7ygBqSygXfNG21F",
  "key13": "3QMJSzkqJvwDPTTQao8nZGvZdZ2M5YAqgfjvHUzHFgDGgVx56Xhmn5PCzFjQB5HbVi4EzcbVRtoF88upbZcqnKGY",
  "key14": "3FBKbHbgqkEQNSAzNiyEQ8AXifc9pvNzszdBYCEVpSg8tRysR1YZGr8BjDiUHtDcHbASAx69ZfU82p3Vi3y1BVCG",
  "key15": "4WaySa555ZsRJAZvxfhRNw2apk8N35zfXPzLXah6MJDnVJwqQk8FoK51gGKCoijinebe3Bz8QepCsatbnRksaykW",
  "key16": "5dtFjawZDpJoW7m5NKy94vBu5iXLXuJSLBisttPzFoZhRYLV21Pp4oBHoYCWPBQB59xFfhbEVSGa8gHmTSJWoH62",
  "key17": "d7RDLw1QkuZQUyZZMGgJztyo7PcezSGDrV6LDevVYxsnZ458vQWoTWQpzWRt24DrYAikuK7cxJX9WXyJBCBxoxF",
  "key18": "38dgccwyJW1B8BHZYiTL8M2oY9UBshDWNhjnBsLdRvbC5wwJK2WcS3NMjL9UAcU57fM5JLVrBxRJp6xLrdg9qD8c",
  "key19": "64e1srYMfJqtMmxi621EY2JyXddEvigx7aEqPYaSKDXJ4zd6iCpFBeoVdvvDmW6Pd5s4UVszA6SfKkGjWDhaFwQr",
  "key20": "bRFK25EZYHnFXjResbT6FSXQJ8e3YRyQRQuHKiAdprafCRfpzTQtkVEAkRPCY8TsxPcD7ZUwV5KWus9gJZhngTr",
  "key21": "5CzWbajdT6Z9YLwhq91kx1Cukyf7bLXddHseTr6ihLdnJ3jqmtpzbJipFd885aJoaSvi88Au5v3tcdYmqghNVotL",
  "key22": "4vtmGjhGzhGBfJzgtRv1udG69MCv9ZwMGgd9jahLzzmeTM9AZ4amkkttyHxeqrYzd5hExvJYM2G1e7JHko1kzE3g",
  "key23": "Ecxatyh4m6FQjT47SV1KVgfdMHUCvT1AEbv28Pt6v6gWeVQBZpkCe6iviAQLd1txXRkocGs7P1nqrKRi6Gi6cGg",
  "key24": "2cU2WkYJLou52RYM7nMkssPxdenVw2FDgRDpfzzFtWVKYGEjtkded4jW8QwxnTo8qS2JF3g1Rf3TicEQ6JozVLai",
  "key25": "5N62rJhtax99s2cQupBQFLtprWTdvbBWtWX5bzmghSeJzrhRS6XksKfuK8f4S93wuTjQnrBGEyb52gUfHdRHKqfH",
  "key26": "h6bQzDjqme5uUqcR6EZCHt8sJwtYfrkjSWGYxNGsyP9VktfghS8gPxxKiyEw5bS5Ffem38pndLKaA4tK2VgUBE1",
  "key27": "3W9kPa9JRqyNmbfHRFvXt2STvgrHtYeMERQQ78r7H3gP9aRoWEpVdKE4inQeY1Pty7TxLdnpPWge9gjw7q4MSBei",
  "key28": "5tzkgTu3fUwLNgKXnz5y2mvPciw2ZH6193T9DsWQnWK4WqWoSYmYZt9EbG5GZADDSk3EUfDdQ5YK7U9SRuUMrhUg",
  "key29": "3mnJ8exxn32hYrNcXJvMGrMLtgzy5fLhX5kHicGWsafwt41by4MqVkLa4zGbN6PJX6QcQQ77pRM93ESs8rZovzem",
  "key30": "2X2Vpe4CayN7JXJm4NKdS6yiT97q6aZWKpCBCC5jGxkxsTjtDVLKKPg5PtTwKn7mFgwguPbaD7TtNxFAb6hasfoa",
  "key31": "3QuQLQPFfu5gn4eUa2qQJoBpKJT5F1BMcp1gVgStvMHQ5L9mGYiAFxMJB7rVJBRbeKCBVGE8dpFMK95sdQ328FS",
  "key32": "3B8WDVVbFLsDq1YNMACo4G6hzxPT9tBpPj78533TGqyKNLTbApj3cKSbiT74iUEsuaJWUf1QAJuso7d2uXcEMqth",
  "key33": "2S1eMkz2v6b9ZuHUJTpdkFJQSa3b4jG8S6MTbqykv7aNtQKYzAVZ1vGuQVh4Zzm3hoaZcmKJEUZDavaw4H9ZL3Eq",
  "key34": "c8djWYcfDfbFpoyLEpfJi1iXXgX8NeDAXbxLymengxVdquzsNuVP2Z7vXZPhyU813uyqK4QDzaPonQo2i5g3to4",
  "key35": "2n3PRkVS4kDB5AFkGYjkLouEpqUSCjzcsMSZGeJ3ncsJYiaivuMvV5AR6meQc5bZYuoBoUZSotaoouwNuiDdENfF",
  "key36": "yMoiH5uRHergtPLPJYWE9ntMrY5nwif5p9Qwwb9BgDRxPFg43Jkqz3FgesmvWMaR377HCP9njM8BhmecsHFKytR",
  "key37": "3XUp52wYGjQENpqR3gRdLpsuzje7kpfFU3wLNFWz1uKHPuqC6aKmmH6p3gstw9wpRUk6VMz7z5ue6CnAh8p6mZ4t",
  "key38": "T3wanePT7yi13cuieA1xgS5BdayP72bbeoTRSEgKqhgGSojtA3cfPVHjk6C8H1jNzk7ZXxu57ZA2Zvx6CjdxAmK",
  "key39": "jJgRxSEJ37U6LDQ79zCAoXaBY9Ze2gKaboFiQtsT1KD2vQtBGuwAJsjx4sboDvecTY1PLwjgZurix7EycYjCNZV",
  "key40": "2eD3jZCX4iM7R6hZUoLDxWSEnxASsHtrK31jFpnP3VyezedEwQzpcjo4iwBdtmPDdGUpqcZSg222BMwmqNCB4Rjf",
  "key41": "58NEDCjXyUuu734nvpGt7Mn47xMMXEUsaykVjKBW4WsibKpQQsJ9N4ajY3frnmaZPaApMJirggivU1WQzvogqLpc",
  "key42": "5Ecu3CiX989cuTgL2Rerx82SnehqCySNYSLRkQu3wXR8k2E1NKoR1HDckpRGocnyL4fngpV5toJhrdEFg7Ho76Cs",
  "key43": "28b5mNhw7kqBTzwGo1FYnjwMV1JN9pY9ScRBy6snLwiXreoRBWZs5fEDcJzaenPXLnt5PmyFAHf1sFeDzkqF21VF",
  "key44": "4qo2rtvuZw6dVcDnFUSgvrLAoXJtpWW7fp39dm2MNaBThZToRRXsWA51UEbEu2pJbmuSwmFFnZfwY96w3Pyhjpd8",
  "key45": "3diZFh8DJFVKwY6KG863zWxAYzoEQ8uVXFRe49661vwAQjcnYU4SqVFhYLALtbjTjYJEKaiDV7j4CdY6ELdy3SxR",
  "key46": "2LkWHTMVutjYMTTKKVUH9tB6HotFzvasWJrnrkskG7hvzSh4m7ey66nvkfzhpdRKNasmhveeBpgYLQtnc3VMxuFL",
  "key47": "5xQ3giNeYa897QuaQNDKJtBwoPPVZgPgdVBzCUsA2eY8zn7z1KFCk4dbFpaq71TSBXidtm7Qv7rDbN4X8PjAy3zC"
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
