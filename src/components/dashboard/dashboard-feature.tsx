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
    "45JWiYgusSY21NBiQwUweV4TUGeaQa8LHEiKbsToMxR95w6wr7badmdwMcF8kcAun9ZakuSR8xehCdKvUDAWhQVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eT3TLyuWBNq7rSoUU62rBgZbx2jeaC8iSsLrwEU8qHqTo7D8oSpD1bqdRnTM3Sz1vF7CyZ6keFx1ez7E8KoaVs8",
  "key1": "2TR2RJQvHBUBxVrVGM84ZhXzS1NCmkB54zazXeAhn9ovrMFuKBbs8jorJ8Jp2hKFfzvhTjTefGBJi5uJLyA99Yau",
  "key2": "2L2NGHbVT78qoqLZfHmoL3zj2ohnKsWZaHUaiJncsVE9HL5o2WZVMfiujMC1YBTAmRM23zFtg137mrmcYo2psjGf",
  "key3": "DEV2Qyfy88mYTBK33F9jBFVAfMYaRyKpSqsmSbdxWdh72GMFSs1trMG9YndbqB2w2BmKpKMPTBakUdngXVxkMhc",
  "key4": "tkLzNmxKYpAm8qynCbWggz4iVk9Er76fHc9K4SE7ftfxmgjXmvT4VBgs1GXceMS94zP4BD9VFruKy5t1GviViow",
  "key5": "48oGr88EAyf2csyKQSkn1LvoFD5rERFE1KnYo99gWVvk3tPS67rk54Kg7NUdPf9xdo6ho5qrajv8iiBLQmQzvMjJ",
  "key6": "2AjKYNQcji51iSLaU9HUS1qyW5d5mw9rBCsWSZhWGP5zRdPdUwhGWPVowmnuNjGyFUDU42gvDYd7DhdND9BKj1ki",
  "key7": "2h3W52VVpyMM9VPaF1U8iG8uxGKbw2ZRQ4CJ6RcBJ8wFCaobsopSYshYsRyKWHzUFCjqL9mCQ5TdG4D4PKhXtwYs",
  "key8": "2hovMsdoA8n7Z1EeAfpUZVPjYQEZicQpMVWrkFJEhdZHzi2ApCv4xYBekL5M8FN6eP3Xf6R2BNZSPUq7F8MPCWoS",
  "key9": "ULYEs4wQxGgTPgBwA8avpcV2TKKhfDkd5mhR9Gh6utAr89RqZ44jsJud5PNPqdLPUDWnjkemBepnpGZMSQHYCbS",
  "key10": "63bt1hoeE1X5Bb7dzFfjhMoC2dAxH8LfiDXriiFbcaAakEcn6r5wWqzNtUuTU5xGX7mNte5DS6KN5fg7knjMei87",
  "key11": "4PSaGPyRcoPExrjSGWUhj4Pgb5oHNrgEodm3CHtfitTzTnBqnr637Bp2SExqSLPH6nQX3QH5LWjDUiCjzddq8oxq",
  "key12": "2NutedPyvdH1DnDyuWkhytvMgRM7ByfXHcEuvzJ5MNut9wkjLrx654wZKQVZmbhnj2ov64ooFuwzqW37F1zvMLFe",
  "key13": "5HWMZ5ZsNMN9P7VJD4JZnMMYgNHWGF5tmusqaSMSuHrUwWUARYyPUnauZtVCxnUW95iDkA3KwivQ5cJpmiFW1dLp",
  "key14": "5k4g9ewxrFiQ5FbNB44hKVm4M3UVQRGm1Wr2bZXX3T4g8q2FzxQvVFmZbeHoTRWSnRM6q4EQLKhZBUMDG7UfC5dT",
  "key15": "4ABuWSPxvJPymRc4wYYAcSScfi2DrK1inrDmNQStaDqdoondYa7UB1fCVSqivhe2MHuB1pdRxhC4WhVikAqh1tb4",
  "key16": "2i51GgaBB4YSF9BMEg26yhoZagJVFkMLzbMaDcpPPpMBrA3VKGh7B255ecgDE1odpSM3p1raup9nCVxkwhtcoc28",
  "key17": "51zGFmHKbuL3nSDePfjmP6jVCTcj9jSy2CTvuAFhBnbqL3BK6zCaRpehNLq51JUCmu5iBskSxNzfXueMsy8KJjMX",
  "key18": "41xJN8V8oK9Varuy8JVVcBL4AoX3i7a4BPeBUR5cm6qTw1sQVXsRXw56BYNmBUZa73g5W9MaGcLWfyea92sPHfBL",
  "key19": "2MgCsgXGwauLfMBk4AqqwqhUmxGSjfhkd1jhM6wzmKy5ZnNxfG8wEv3KD6pVaJReaXNW2LMtK5ub42w9FLYYYS2G",
  "key20": "rkBx7xUAQkt1XiTVY5Y93exsMCjiWKKVAGecRaZ7sD2x3nxQcojM6SuBsB74GoiosVkrsXKsmM8wUdPPJ7LubzT",
  "key21": "WZmZAL7oivuqdXzLdys6UAkNtbvnUPsnKS5jw8KtbYUVvLKwSQtowZZYeaTdBfCVaactkV1CmQeTkjfViKG4YPV",
  "key22": "3ZD6QUaVU3ySkJtheydNt2BYgZGSEoKKffvSzCsZvdDBmVmZTULdKeKq99CocJKEFdzdsRhoUj5L1t39PmtGNzDg",
  "key23": "2pQfqKMzeWhVSnapQw73hBbDXFTcMtGnjqUL1yhyraEeHZ1BABozJLnTB32Dj5WeuzWP4pH8r62Tyn3QmqMtwbpD",
  "key24": "3za5FXEZysdbUfo7ZSecUcD7m7JraD6eAjhbiUHXK4ubWu7geWJQmDKUSuJFw4cV6iV673K9BycqnFdApgJev63n",
  "key25": "4ni7tLaK84uV4RMKftVKzBFRzGqfe7MkXzXAqFYjoAmtXX8TZdstCGw48qaYmZTxqXbhnXMCqMvw4tv65LV1w2iK",
  "key26": "4mcUL9fGTTspuUv7dpwXoVaBzJGy6JimfCjQ7QM8ZRNrFguQXN9mqfaPwdiRT9FnWEonCTz424vaUN4u6wnPw7We",
  "key27": "oEUJufpi8DGZtqgwZ4WkTT3Dw5GuzwnYsaBfjqjJk5tfhKkUxYUCh3oYd9Ph3u1UhRZiD9MpY7BTV4UAcJq3SrT",
  "key28": "3eCyMMiMuxBXnCN9j91bZgbDRzzqnJgtcjb2BggkT43Q8GV4Xn5qw5NC93ok7AA8n8DTbArZR74ZDNvRXSLwScd6",
  "key29": "ortxRppXJHajbDP8QBDEdApg4cGdFWfAx3yoCPyJivVECuvTxFDwR7seXZj27Bp9x3YrVxpgghX5BxZ4o2cs6aR",
  "key30": "WcdC7NhmzdsUxsCoyxgwmZSvPe9YaQkBMExX8q8qLUjJfkxAu8VQ4PAmJiDJQRDLGCezGmRXJB6w3QQykNYkRtZ",
  "key31": "Wkg3LTTERhZoX9iCKJ2YDZ72EUS3KydYbAkSXQRgxoFTTfnPBSAUSgXEGRxZMR62YM3PZiZtgcUPNc5LbGSwuE6",
  "key32": "45buKsGdjUazKUrwdc9qhZbTLWLNZGr2zTdW6GfB8bxjmSJwdcJVeD1k7GrT3MTFdoPgGMCZRERm3eDy7kh8zAag",
  "key33": "4XVHUbZZ9UZqL4CZs9RHHBwcCeLA1nZcArJszvNMjn5hgWSdYYW6iLdu4Lwn1ETBcnQRKu2TJa9qVt6HVcxCxk6x",
  "key34": "5XjnE6XYHb4dsPaAinUcDQ7Nu45G2XjTUeSsFfbgfLaEoTrc4RnFqoSeSzLR2Q7eLCgtzQoKbAjDdjsdzQo2rSfi",
  "key35": "FchxAnpMpE4fcu4xYjdxfymbn6M6QEXS5BrGMA7MxcDRY1MLmh3aFFHLWj9Gvjj3nPKkZqwmqXasqde38NMS4rr",
  "key36": "4NxugZPK4kvJYwfbB2y6TMa7AVpMndz46RGhBYZGyuzcsjBK7vY9RFc89UiJ69TyaaPiz4pyd57WVSDqppfgyAwg",
  "key37": "3LTXppa18ZKWt19DiCTECiYWc4qjWeQrixFfGMt9tZDs1iS5yDn4rBz3itTsi5fiPqLq6SbT3woScJVaptHYC6oU",
  "key38": "2V2F79MHxbTy5PRLJRFqCjZhteabyus8JxR6o3gmmzjygKjp7GUiaznjZTUmSZWAgxyRWQnmtdeJubfPd49cCqyp",
  "key39": "46V6U1uBbN7L1dBJVBhqBeevJHTVapu2dJGumcefJjrf9xJvkac9QiXAS6YQrvKMpZ5bzyBcHfce44No7PMkb9Zr",
  "key40": "2C5MoXeJNipPQjVGcChYWimsJDboTZTuXLRNmwRVAkd4KsjxyrP2FN368EKhJpb3RyuGgTHKCUQ4sGnUFcbYa57g",
  "key41": "5aGjBd9bP22bsh64wu5DMTmm4N67tTXQGH1tFH5VBHD6vg4rUpiidxJdxeQbN7dvng9bbQADpHA8Bg9ou6GVeJpG"
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
