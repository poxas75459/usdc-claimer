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
    "xsuKzo2ee1BuhTr3g4Jdcb4UX6wtsposSVJ8s1tDK1AgroDMmddj965ULtMsUXzpQP9rBdRUejfBsYGa88PNP6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VR1Exr4Fb2GfJGKjYpZucZsuPfiSa4z1xSNqPCnnFPiSCyZGPGtxteqkWxLUYAr1sLnYFLqVG5tbciwtQAS13Sa",
  "key1": "3wNBSWZXL84mBVGtehAAgkjVTXCmvnvo2hxtDZY9ayZ8e6BFVz8qjFeZMHabRQCM4Tj5UwE2fLzMHH1nkyqqUngc",
  "key2": "5gxrMYWMtzNKEE2MYpWVuQ98v584gRnhiHUXKozLZTpED7xoDaphqv1Cw9asYTu58xeLtqpbVE2kGMterw5SveCJ",
  "key3": "mXLJQtPGXzLdDpzGdaTGy6iE4a2De1RXX6dtYazKQqfetHHnqds3SrnUngMVZJj3SRM3ShAJ8LN9BttdB9XQA7E",
  "key4": "4iUZ1cAKQTuRVc29HxrGYipvZwchhy2dqbEfzHcNmYKNVyL2ETjLQai463e7AXM9MJyiA6Brk4LZTH9SivFpmzqV",
  "key5": "5j5d5uCGNR1Zxv6Cg2CBX9PSvtUHbGKqUEoNJg6bcmTjbyJvyHNH2t1Pdq8idEYoZGjRuj5gYGC1zBnxoaKe9NR",
  "key6": "NvZYvvRfkM1aECBYqUFxwPrHyBLJW3hrt2oYTkioXDMpGWhJtuRmC5EaNiJLCtaVMh1V8ymN7cmvqvmNGEq12f9",
  "key7": "3dwGda9hEM7Urvi65zgH2wgVQqRzkLtapKdCS9ciMgsGU77BVMAKPet2htRYpKEtdcM9hcDLnwWw1xtRMm9Hgpbt",
  "key8": "4Qm4q5t6Hrfjev9gmJgrNQ4YfceKdHbUzS5n7ZErGgpeThZJaqD6xAkLJnzj15mEsQeyhTiEj7DfWRk5cVfQuC2s",
  "key9": "5oHYxcY2ngDVAtFb2QgHchoqed3CKnsSqwxt8UpAdbNB9meTQ8Ewf9Qv41HMBWdzjMsPDNNE4p447tJVjU6D1y82",
  "key10": "3WWijSxvNuWf7zgMtSVTuAwZp111xBY47vDto89sUkJxbNyNbPoxowTHprdbgZm1dtfJEe6iPz2tXBUa9usVCuFG",
  "key11": "pS1ESCnHZJVnAC9YK2pM2T6kMcjNC4rZu2MqGELSCTMbReLV4WxFKM7aFnU8ZkWaXQeGgf7ysLdoVTYXKoxWdWu",
  "key12": "4eg4udMXxHcC5xKRKanqhCasbMcQ8w9EAAUnZkYU1T1F4oc2gn5tDc4LWvVLMbH665Vkrkao88f8Kzu8qTPUiNVN",
  "key13": "24xVWRM77XugQRi7qpvhYSfWvYUZeX8s5eqTDwhsEBGH9B42HeSq6JzdduuxB8NkzJBfyPiLyELaGcFfzMCzS8cy",
  "key14": "4pNZwhKfJhan212FWauAasmrKLPTRhw5fVvrViCRFGsQgrJLKYNX6QJ8f5X3qAJ6rbEsPXkAD5G5GEaMr2spynfL",
  "key15": "KrAgrtecFM61ve7EEVWegYJM9mMA2oGP7wnWtDdLRsVMps9yCgBXx1fc4rDitoEhefsujmmfffPMYiyMj8UPX9S",
  "key16": "2watbGzwBq8THi9D4iaGCsatret8kVFsCFTxqsCjkLbyQW8MVHDquJxJ6DFQYMqDeiNB37LAPAhFf65L9rggmrHx",
  "key17": "5s5cbQb2uBtQdqV9XBMQFmJfh9tSCG3tSpaR6ukUjG5UwSotZyqMThRsKP6hyNqbFqGdhEQUijguK5vKCTcnDaXg",
  "key18": "4y5vRnsXt8h6X7yFsWTHwCBGh4M6d7azyk92ENi6h7og6CrHpebNSHWUDvRiKNuRLpVnVDTVhbhUzWdaSfC6bALk",
  "key19": "5Wa9WPCLquaLuLUYcJGvmmTbKWYT2JhzLouhLCsKN8zHH9GfhRaxWoa9gJG2j6wgJRALvZmEEbhksYTGCm2LeE56",
  "key20": "4VcBHb2qtrkimMZerUEmSDjFUmknQ7MLyeKnHL7XTiigTap8hpyspvjkwZQuZK32bf6M94ZU1V3WC1Y2DGKrHvY2",
  "key21": "52dj4uoxkYvW3qZt8RLvChGrHGRS9SwKWbxwH6PRWYiM244ufvz1fE7Z6KfqQnskfiRQndUkWojFv9PB3ydDb4qc",
  "key22": "462X2Luo54MvjN1s111kkhWXptT1M8rE2cWKBRRURYUrJ8LWpKDgrbdtVV4n12Loi9nQWMQiTkw4ey8NbUbCz1oQ",
  "key23": "4N84XJkyQFDTLtnYiWMubQipa3Uogentso2GkV6qJu9GiWwCYqUT1WuZGSpwxUkaXXYxRgHGX9wc8etuUhrhYdUX",
  "key24": "4C3cA6YYAMcdt5QhUd1KqRAQdg41T6P8iyHDCPCFG3adYxmH4D72usAVSB1FpTTRDVjPfFJ6usu1tnAzJ7mrmMGK",
  "key25": "2BgTBDZAkigFP8Bdd6TBs1i9wQnR7fYLgDCp99e222NyiJpyp3VWR9zbPZWwtSCE1aQxyRB8pSFheeNGe9EXYdoG",
  "key26": "5SM7i9C2u8ZLuPrvL5rMy3AEyzWuRj6L2WsFxYn1EF1PVU98M4igkUJDcLCFGdKTD28QZTiHBYYvuTs6LjAFxre6",
  "key27": "5ZnPnEoWJchnEtNnj3nGAyZtexT1fNDersck2qPfNTwksCEN9yLKYxbgBKSeJg6HdDDhVwwk9H965gY11wXhzzwd",
  "key28": "5d6nr8DmhnrAoVk1WtUwTLx4CkxicTNwCHQoTz52pbffzFFKq2w4RcTczzH5sUDrYAxrr8RJqhBxDDC1yBnpPSqC",
  "key29": "2AoSZfG7JoFuxUyi1ndSZy6NQMyvukBkXQxECgpMeJVFhdHJhucbTREXjYHmERAjdsT1yRKhUE2YDBZ66EvuXsLQ",
  "key30": "44jcL5cyy3oUUqk8g9RrjPUAR2vftBSRwo4ntRgCprHTd4BE5v1pqpnixVVgPHKGZgFDrCVnCXRTBoNEndMwYK8B",
  "key31": "3MEaREVi3cwcLQbptPtRy1Z6oyKMb7VJDd8Vz5N2Gh7A68yjg3iTUkSArWHxomN6f7iGrTrhrVHLvUGZeqCboQLA",
  "key32": "3JfqUHGtw9ujEhdnKSnkea9PAYMXvtDtbKjT5fz5aVqvgd4xqKpKQBzLPCKrrJF7z5BdLkL5U5WmDmg9wehr6vuW",
  "key33": "4XFSLDJPZrqGT6ivK6YmVaGtAH4Q2Xw6oKYgFzYEbmhN3b12V4TX53JDVeuKS6VXiGT83Ey1xpPKbQsGoR644q4U",
  "key34": "2kpdm4XgxHyiEjZ9UyqBdUbTa7pdX2NcE9nyx6iq81qW13EfVn9MPP58EednV2Bx8m5h65WrFqTJPB9WVMTSEkxq",
  "key35": "3gFeo3r153u5dhXGsBQ2WztFHUWM9VNb5tqwFSm78CmCwpKXeFNRuuaUstYcWxL5b7Xn5935RbJcJBYk3iGjgzUS",
  "key36": "EoXNReRiucLPoMdV4NdEuAMxEKo8VTxds56gk73WBHgYqGjS2v9PAa3s4qCiT5Ee8dcieQpbSaspFUhzXpRGn6M",
  "key37": "4eJe86YfaU2m7hX1A2HtMvoKSHZbQQqEyyvu6DTVcnCTD16SQ3NHTu8eXYKWNDk3VpRDDijCPLZNVpdBXcbk8tFK",
  "key38": "2viaTDx9XRvG3UUDuEmHNCgAJa8yEpy9V44EkeiFCd63hSjRgpKzBeHcTidRaYfACPFfviLPxVCLTuJ6WiDxB31z",
  "key39": "5HF4vAmfUyGNavZhZkCQp9kPLwgAu7prnCYTjFSNdUS5XdMdURFqbGgFeWvKRsjb5yfizoiCzCU3FDscmUf3sgKa",
  "key40": "3atyGubaPtbjQjWFaQ9K2txUy7FpCEqsAKVR5G9keTUcei7Nj5YdPsuxt64YjHr5UkoQnjL7wUJA6sgjzDrR9gXF",
  "key41": "5EkDDZymoEVj7nnoCCZYfDHRVJCyFYXgbDPBzqHLoZG5MBHWC8SUrqHx8Euh2ZHV6wFTQy8aZLTj83TpvaLbMzuT",
  "key42": "5obdSiEiwrSL4YcYQNqG6gTCTu6j9KacsrTAjH5gofgJLxL4w3irtsGMyxzzEs1gnNGvzZrjvRD75ynJfVy3RLtN",
  "key43": "SpXhKcCRGSHc8E6ejSVFq5NqEingbpXZefKaUTE53QdXJFWBQs9v1213rz1iwPzxTw1WyAaA24ZqYtfZ9GmJxFQ",
  "key44": "ZynxbbQGEky3wJGcck6PMmTY3Lr6uaFh1W61PmqSLpEjMZTZXrrD8XRKP8jcRbX1XdvuQV727izn8StEHy5VEab",
  "key45": "2zuP7msWf2THDyygQCdvCoUEyGnfhvAEApem4gT9Wg9VaZ6qB2vEhs9Qg5SnUGUHgZ7CGdcs6MGBm7Sg3ixpCo2s",
  "key46": "YdPQxbVGSXWe7e6RG5MJ9chpfiFN9U6rsM6SfTzGuwQWTehdW6LbWMpaXvBfoH1N1vNMQMKYxi72tCUmikbpJge",
  "key47": "3DgBw6azWaej44tCspFsqAV6zLunYv4D2pWtCSzKzA1Nv9mgsV4DuvRnXRUiAt3Be6sDVosrXjSj8JYBkqj7MGR5"
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
