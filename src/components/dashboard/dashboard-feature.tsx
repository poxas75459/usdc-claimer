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
    "3TjawPMEK5q4LiwL3f4W4HxQXLoiihTCMCbeSxyH1ZfjJaMZjr7NX3RuF1YpXVnddkQ3QfhobvqxBxqzQYnV94bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkxpmP9j9RhRpN5JmYm8cUWwMMCRw6n8MgYQMoU2xYf2uRHcnx8dnXpNnUiRMFpBCxDrAkTKnot392r9EVg42dv",
  "key1": "4FZeUoU7TW6Ko4cbVVpA1aRYh2VZ17axoCJJzb9FmQGmEwsW6B5esgSwGAh6569Hz8xL5bmpeBnr2StwRt4dtM5V",
  "key2": "642WRUi4yGVZrinLkjJX5jxQkx6r6vkJGbuCaE12PkTbVBNoQFGrHLzNpF8VZ1S5EwZ5p3gYeNkgBQk8Hbrs3wkC",
  "key3": "AtTtnfW5T2dyXtcWwaUmMqVkyErLJkpc3dosXBXMovthDGwXV5d2paLUFBoc1RGR8LCSJznDX1TgCjXNYTdDFcQ",
  "key4": "2aBz1HRhceBXxabY4spCuXSsUfSXffqjudpdqhgeTpuv2QyBz2LnCDvFXEFnB9URgSDnrAFut8svuSib6GQ2HrRU",
  "key5": "32BhFQeFuVpAPHFWrNDtDRA14vz5f5b7aq99nLdTGzfpWdyrZA3WNK2neShFpmfD2fH6CZAujaNvxYMJkvSeH3as",
  "key6": "9dt1f73WPCb6GVPEDa1ieStt7fKvwqDk7WhoUAmEsJbE9WNTcHc92vmjEcRThHnWDf4ZERnLdxjddnfKjgnFxVb",
  "key7": "391CP2HFN5RGj36Mr14HVB1xLAbGz4iGB4Zrzz18tSHs5PibhoqM2fERjuFBmmM7jqZkXetJuhRKc95MW69UUvJs",
  "key8": "4HMW6tHQ4ou4X9pHwmivToTDRDREEbnEeMJ2HtipYAJNsgcpUtRVsh6v9pAAyFvSSffV7Zgcoj7DwU3mwBPr2j1B",
  "key9": "2iKEgGZTcgHswig5sZ1mcUGJCDbCdWLjNeiPH7num81cZiLm6LjRqaiCf9PX2yw2kY2AcyViFSWYr2Xz6FmBbXaA",
  "key10": "3gXx9jMXXgQiREa1PraGSqrVUVxfDjpt1QYzfqnwaRxsCq5BZdKr3FibL2KKrbqsEDHAL9UqNE8BeUznW7C8wtVe",
  "key11": "55w3DXCWcL7G8QTjgPXFb4UPNmeVCye5Q3SS7JfTbYdm3Xu46vNeUhyP9nQb6ZPjDxFzv9c8mNW4pj9iAMdG8Cso",
  "key12": "2eQcKeeC3Q2q6ZGQNP7ay4joWpApH4NsGKXba3LRd2L6ZQwMC4WBZPx8WKYjT3ZA61sXV5PW1yuADsSLWJyfPvbu",
  "key13": "5yhyChuSnDvgWexGGrNNochEHNUYNjmyWnbZAzDzjXUtgwN38aF2rZiuTa4GBgLxcvSSySSmVUdFWSgSu86CbXmF",
  "key14": "3czp3TgfqAc3NtWeQDJY7hNmvjYoNGRUpxZHfLWy6VUaemdKvPMGbvoEuTXxn1BozAmu2v417gFpD5n2xc7R9n7W",
  "key15": "2iX2yWq4GNZfvrUGvSJnbCuEcpqfQYxyfcy4kz6CdBtVCBqhVXZhnGVxVEqAJ4tNBA5KDdsteF6DKwg8hifHyoGu",
  "key16": "5kMvSFWv4PCsvVrvMEqeXpcLMntrpdA3NztPtoppYNwekCpYPWJx4aqj694B1AT5jy4nkDXy9qH6bXyj32ZBmqy6",
  "key17": "FwDAqpJP1ZrT7P4mhwbyBy7oPAc6Jfu4y89v2vr86wt3iEdMZmmL9dNtiC9uwJB6BuxqPEoAXXCJbZfqh1mxDXE",
  "key18": "4SnduwbpKZ8pFuGCJE43qp8y3fsSxi13y9jvvkrB93aqgv4ayXRpS4JdnMaSXjwZXu9Te13t45osureb1KSbp84i",
  "key19": "2KNxatVd9RSUSPYMocJ86cyRZsHauEWaoWRvG5EKehcFba4A9HjgwNDJvCM77PqeU3bnXkNDT9EnWGApf84hDt9A",
  "key20": "4gPUJAcHQrEsX2vpCqSAwGwpqR3Zm3cpWrfu1Erth7wZgn6oAi9Sn9oAZbmQtTKFBPGrevenamx3bmEFiqU3ikZV",
  "key21": "5nJ3rjfxHqnqQ8cEm8F9MPDRMUZfCH3afaSPRxWHxCSx9CMHRZJcp9kpiwgCzVaGahbm8eraBTuaRi1zmyJCxy7U",
  "key22": "2ExDyaVMXTUjp4bUTeDZNYnaYGidckHauHzDW1PZQC4qR8Xk1i5y6v8DHFTkATYpR6Byn67btnkdDvgeEYwDvosi",
  "key23": "3fZAfTEvuJEuvvukjkmYpQgBawSFmG6oxq3eYXyC7d83HfzrAH3Jvb9nrGBqeGE4QRzL36q3gu6YQ6243ecNEagr",
  "key24": "3R5EL2Aw93BsPz73uk3Nver8JBPRGjRJrfjunwcnV3coTq6WQngjeUrW82mR98UVXp5AYgsFJAZTz4bwwpuKdr4W",
  "key25": "3xmR149iF28FG39HTCbVm73Jy6q61gcsmWPaZT8d29hDiTm4wQAUtBZJyyne518ED6NvCaFCAtZiVT7RbqJizNt7",
  "key26": "3EGw4NUf13ds234DNyAEZ3onEmY1cj7g4LnhiGByCdCY5onf4SuyJLdFb9emLHuEsgjeZjrompwocVYQXR4uFxga",
  "key27": "4n3p9cUyn5Fud2fn99FVYTSiBUt2h8yLA7rDWiPHcJDFfQPx28DGb4777gYpaHvy9u2xHgXWJi7Cb3Gq6uiCP51E",
  "key28": "4sRQw6zX1b6qAF2GBRYRBiGZwQ7aLYx2o6VU9gQqdTdadCJTXsHn8kNGnjkkgoPbKiX1mS3XFMRXoMhC4RGgwiNA",
  "key29": "26uGm8KZrVGFLo3gPkCX4oUYMMDuwfg7ojzQWVC5hovfEhddGpaj5HLYxLnJmx7DACunBhrTp2xx92bUmjUrBXxA",
  "key30": "XFnyrtVUPaAGyNDv5rQsxGyXRK2X8mZewCMDFUCWAFT9BZNd6FdrX3Mx9CyMSZaD1ysKAcMMTtGiFJM3Vm7tGeK",
  "key31": "5HhLsHGYMVgWuja23wyyLmqKpMKr6BYnyZpX9e9tn3z2x3gZJyRTM9Xmd3aPTB9Wo2qLdpYi6779M4CSsY199xK",
  "key32": "4WKSfyoKQ9V5kZ2bvLCu5izSVpFbSoTPzHnszBeyEVEC7gkD5fG1dVQfHuBjCur2w43KtuQibRTpKTkbTBjaboyy",
  "key33": "2KWhmqN85JbLmC7zhE8DcWV2zB617VSMxEns8ZrWe7fYxVdE3USQjef8QeJn1NphtvtRPSSgvCEXm5vkECaxzGo7",
  "key34": "4cQicrFzAXRACSvfkroiXE9NKjwTSUaa2vq5e98viXVKhZrXgGLRf3WD3BrHhVoFKPffABFCJVc8mBt3hjPp73ry",
  "key35": "jvSYb3FTphsZXVtMNewDYNd17ebi4ByC5A4DYwVo8x7RCr1Wf9YR76z7wDDq957aZ8qkAo5hY7HjHLWtRtH5sqp",
  "key36": "4R8KcmcgnyaB2Uyq529N5a4W8W2qNrujMGey4hXwLnuLxCDzxGRo9E3vyjrZ5PkMBuqSCAHfkfQ5D9VMJNxr9xGz",
  "key37": "3nXZsZL7L4pLxcV6Udt66jWZ82NpgfCp1QLRFePe3dGcJLEMq96tPU5c8Ewv6qnVEDKWa1JtiZo5HDmofH3KuFSs",
  "key38": "53xwYeMP4mEqUbBiBGUofBPDSGFcX9KRJQHUG2aj16hqrC6oCth3GemF8YDCuWdcojheMAkULzkV7sYjh1QvoRTo",
  "key39": "5UuXEMCq4WoJym7Ct4FRpeCxmHx45uCCgswwq93KGvHNhrszcswJ1FYrCiQjM9fzvauAMCeDfKSBP5WbvqGX4Pig"
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
