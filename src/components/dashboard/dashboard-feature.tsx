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
    "5tJHx4tc7EntUZJ8TJqjKGoZkwBSmffTYCUafT1Ly9gLaEKEHD9szSR4W7yWcSsS7Lv9xo3EbS3FBvWnTmESbn2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKGkqJChe6nHpyjWHNrjpsZR749VSo2STAEjvFUM7pqdK2Leq9zdUkUa66y9TZkmS7heaszCzdq1LckEjykB1kA",
  "key1": "3HbJ92ePtzBWmFsg5d2cDd8c5Mw2iS5ucc46SxMsZk2Lo8cm4gDmnjJ9LovFVDhB6vpYCdCn63xCDyzdqB5BmbSN",
  "key2": "32RHYxniBinnWodpMb3zPXLZW9EcqxVpuRP4Vs9jBo3EJDWnfv1Lfg7jPeZUpzwDukdXdhfWmUZRjeYvNz6PtwWi",
  "key3": "3VkAQAayciYEyejmCuomcg23ajUBnsZgwUnNCfq2ZURYvXhShTEpkET669zwf7VpNACjuHMGV4kywvWydVYyVPf6",
  "key4": "5PtsZh3wpVfCEyzoyugr99ELcpWrQvHewXaq9Cvx6uToqa2A9hwrj5t71Zb6XEWUbmUyptHaAHvmTSZbidme8is8",
  "key5": "41RRt1nCAPKjGVcmowCv6NhUHJn9ugJEVvsKgnXrkw4HHgxZ9sDPvxWtGsWMPd8Zz6C8s5ADd4ssLaF35zFkkxJV",
  "key6": "5RtfHK3PEzZqFeP5qWokHtKQ3mRdukv37v74FahkhbcNb5QxCLtBo4s3ZTjEEtU8P88oJNfqFE935KPHTBTpijDQ",
  "key7": "2Wiae7rGEzUVp9u6W2xGeq95FPY4wo6qnUVCQ1MJEBo6T9SDk7vASgYLi7j1sQFE95Nsmy8aUz53yH3bpze3DtXU",
  "key8": "3LxfHhRJc2Qa5sbU2SLJ7UQfCbTkohguoJgtf6QQPX5CYW1PGxJewJ2shSXQGjEKYu3HJLy6r1zwJj13h1zwvxq7",
  "key9": "553wB8ZQpvfADhP6gDb2dibyuPkGVLiUZRJYoiMxpeVC5YAVA97b9Ld2jCWZUJBw3TQeFXmqC3UfrRHxeeZgCJBg",
  "key10": "rp6ESRR5PKT6psd4bqaRDvDnvSSF9Vu2hARbTAvwe6T3cncPzjuFE5Tr2hnbTEwkNKQZHZAW6BxDpyiM4RoeoiY",
  "key11": "TU5AarB2TTiTCadd5Yj5WVgcaMvCLDmvLDtGtQgcczp3SLG5Wpy8GUnqHT6FEHfoaLYbdqRGMfXgc8XJa8NYHxi",
  "key12": "3GHmNYGvCHcWoPBun5zdbgGxJahBfCyMvScsHESk4M7hHZXn28p8PBQDH9gpSKZyKkRpyHwHG5RiRUavJnNvMxAY",
  "key13": "3rFJUpiznvihQUfiqugLsK7M3f5qPWVc6N6uH4fBUePN4M9hDu8be4Ah1k7hYncpjVFkZrmE4B4rXX64UXq3XFin",
  "key14": "FkrQ46txJKWHdX4Kg4znd6TSXCudmf3Bz6r8v9YN6qMdRcxyJrgy5Lc9weZhK6442bU7X5d4EMEPizwXCivjmus",
  "key15": "63jqY6BKCY1rLAKuFFN4goqFYPhNyQM2TwQTxfaeEKdZFR6RvxcFfi9xN8Upnw6Vro5ZEt2Nd47U19FmcTdM6QR5",
  "key16": "5b44655yWJRxp89pcwxq1d6dP7QUb7jg87evDNYftmVHpaK5wvHTrZPMZUfu2Lgq6NeGhrDtEcZx4zSoMy3ZH8Eb",
  "key17": "2F5rcLAyc5pE6ELjWaAQDGcMydx5GDJfb28ZuSLxrYXZAfLj1g7V3xfBFxQTeNKVi3eYk6FUTWsWhKyB2yBAJ8aa",
  "key18": "5XsbJCKr6E8kjnrHeRrJGcw3Li9rJptBm6mD4gkoa7Tq4PR7TTrjvveV49URTRaEbh5CtZSXBPgWhP2BPrJkXeoH",
  "key19": "3hewGGUFoW7a22cotrsPEjLZZcAaKddnTkm3E5kkyYyYCwRXoe9wZUC6teAnqHh28zNEP1xuiGoP1nmJhuBdfz9r",
  "key20": "DGYEFkuq7MAyc42wMjaaUa3sppBfCYYge67UygxhNQCjLq9m8A6TpDG7FV4SbJN2f2XHP1Jjp2TUw3sHw1Rbyon",
  "key21": "5GXzNZqhDziwZe7v1bex8sPyGDsuyXtbkJLLaLP4XzpRKLqZe4xYQ4JNnxcCrXacQLQNjbEsYfVXPsUa23ZzF5cM",
  "key22": "2U579EWSYmcQ3rHREP1xfdVdSjhC7oPX5J8Ez377c9b9xBJDfPKmHp4x3TxRQJkVtVsPYQ5t8UGuWV9JkxBK5Rmy",
  "key23": "62ijs4tnWSXXVHTq8GwzdqnfzSjnrDdUJbiR8SodcF5Mj4brsXXjPwuCD8S3tC1BKeUWhcUJjdRYFwQZBSWPWhun",
  "key24": "3CDiT4iQzKxwDR2m1tQKrSe2PJoCi2VTj9dC8nWeeL52gZDf4UVtMwjfZoX6aU4GmKdmZhaeDAgNhaiTy5PkhdcU",
  "key25": "49Kfc4NijifkwGC8E5Fb9NCBwgCdANN5qK6wYb3ctTa85R45HYaW4xNHv41SaLYWn1haFLovLNMRuykBNEiuCrsQ",
  "key26": "5rvR3Kt4Tf4ByKC3CNhXg5mzdun5y5596yQ8YYYjY9ANr4c1CBYUuHXV5sAwhPnqFnNMTR2m6o1PESu51qdnvnea",
  "key27": "4Rfq1WsRLPfJd1VwsbjLJ4tveLwNZK3XjmsvMsbpSa33PAJ2ctcbXDMmnxf6HFYUbyeXMexnAHWitFSgCTFWjZfK",
  "key28": "FVazrfm6BxGSdFXcY8Lk5AfxXt9Ydg1WfZoCNM4dvG8RZUDREuWgnjmsp1RZUHba1J2Jf9Ya1o2tLSAyMgBdz4Z",
  "key29": "2ZsfH2UZHePkhsnfkmuWGrvQLBxrVywRBDNuRD63negZ3Lin9fnZ7hM7YognwP1Np9tBZatfZuqLAqrCVPTxErpo",
  "key30": "58w8TbEM4Skt35SNLr2E4bwZP6WL9qAyceDswL9u1oGXimx9HwZQp7B5Mqyueg5Aim91WDBypVyBg2ANh8czTtSt",
  "key31": "9PfUH2gPH7ZWjHrWTjYXTyvq2AVhSjhjh8sbp72LfFXAujmuU8Wzjy3uoCe62aaYKtXxUhQruWabtrHjGHJrzdD",
  "key32": "2bRoVuz5Dm6mapunzfh3tNdLrekLaqT665kfBjyN9U54DdubhxgAzEbvmWH5SZyUTGwjBFhSeFRLKKeFNfhhMJrL",
  "key33": "5oZr4SC6Sw878Kn4PD1SkoRoKSHxKGEic9m2VeXim3fPRyXpGs5PbMbCXoNVZ2JhEdAKw8KpQA4LHaTedFffYqvw",
  "key34": "3DhmN5rBJMdZJh1zDoRVAqSsN6fMEG6nhAXmkPHHRupzEKuE5KzPh6fckMb1iwDJh5wj7FWgEEe2unABvNbEDBhg",
  "key35": "5B3qrHvXX8sCi1R6PbM6x3DiRUzs1cw2ew5sgbhzpKvPGaUV1iWqCZY8e2j1HhW7DToYEPutqG7K7m4dFUq4fp1r",
  "key36": "5Jh8x8DPkzzPjncau8RVESVZqrd9XGU9Vrb6pjMgAUWxbRSsGHMGUA28rG3BWdbki3yGBB7fBKZ6p6ZGUgRW9A7a",
  "key37": "4zB3sF3CAPs6woziHwBZVXT9bGyLnESN3h99Cb9kirmsKHVHfBeEFxjBBBbY3imCWpsHYtqD77u6x5ZE6AZSDaX7",
  "key38": "3pVE8aXktrtvosfvDGqy3LzJkknoY4LjixaN1au8f6mGds5XF1LRa41Emf5GyxSvnaSz5W7RSNkPGumUg7yMwmgo",
  "key39": "2DxAnEuKdkD9skuK2KBSWkKwTD2LaDJCLSwqu8fCPkPVK1583fawzGUt3Xuv77JN79P7NBcLGx9hUTZXMqxeNrY7",
  "key40": "3jukrc8YqMVUnwy3qvoEMPDu6YXa2j5hdAaXw3dQP34tYPkoDc6rVrirhrGS3dmGd9uahyUK7GTmfHDXkPFzwMGY",
  "key41": "5SxRRaqPtDvACszeNoSVKXZp9WacfRh19i6SrMaQFWarwFdvMXjjm664mwpd9m2TxqEMVCyQn9qHuUcNo2DHWJFN",
  "key42": "3gZwsWVfAGqJh6euAJcTxwx7AL3UXHqm8h88iEnrPgZSJNLuUCMo4pqHuRY7y6FseYv7XmmFXpWmydZFsHUcfTdc",
  "key43": "5kDFo2ogjortNXKk4QoUeoq58w9dggvzLf4HjDzxzjgDmin4aD4b2HgQKW7YgCnBt7RavToFTJAknyP6EvFy8jhw"
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
