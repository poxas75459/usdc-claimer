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
    "5SJMkGXVJoiT9dN44fGADkCj9ztbcgZFEyVk8HuQ87SvTzizYsr67dYvSdYjffGCTiL7SGnPHimWj5mXdbgPMwJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vexrpWVTi7eJByZ26geeJQS3fnsvN6Vbiou6oKjh8rCN3mmyqhCtEPkctEdGovyazn8ocGsDZsEPgrY8SWoAdBT",
  "key1": "5cFFwKU4FYErc5suMHJxu4pr9LazmmJMfVvwKxHGSa2RXsGHiSJUkfjeRE7hqF7DPQCQd75RrTqDfKdjYHEJ3bdf",
  "key2": "CedKRFGr1HzrDVZdqXWtgGLtCGTBhKa3LozXV7dkagtjeuLjmtDkC7hgi2RRyBNe5NqQFz19ya9LwrcNLeqSQHC",
  "key3": "5tKN7kZeQKz9EQsp6YyX3aKS5w6pqu4nrx5wonTsm2kYvmioRYp11wBPCm24kJGvRt6DB7J63qdcBC7js58a7GEJ",
  "key4": "28cS8QGb9j3bV58j2eJDjGzwJ5Wu8jzt8c6mdj9QqhGwLJ9ABJptRD4V6RrUxoUz72Pf2kr7C56u8L8428aW1279",
  "key5": "4S5DZdJd5nVga5ERkK4Tm7s6YT1U7Gv9G7iRNmfcDseaStJppz218YfwD8YUsyoFt5ohk6FS9HKZVR6SLHZqHF7c",
  "key6": "aTpHbzK6RFSyXsvvT1nJUVLCs4mUVALwfLomkxf89AhsG6EdXbnBqMrKuTxLVEyhwVjy6kKReRkJoi97twHBqvX",
  "key7": "5uyFBFQKtAMb9M2EM6pnBdNoou2U1D3SddYy7LaLmvQqMD1cywgSQwG35Ax5WdUPy2saZozCEgu1HjvreUVHhWPn",
  "key8": "2mR64QUQbadN55wxFuMCUZ3z2PYSJTRGSpyAyrucS6z2ssq5oxCNDTgXmJhPNfJuQqdUVKVxF1V3sLkx7A2FGC56",
  "key9": "5e251bhANJMkqH12DKCpidQYjusu7BgvGVRqSRk4DpbJRU4PR2LcedWodDAidcT3ExzRKZ4Rau32c9zCSjf8pSP3",
  "key10": "5rqne69zgwWv33JoyJGiKWsbYqBm8o9uLHBK41bZs2JcN25ZpnzuCXg6Q39ScAw7s3Q64XL41Umt9ch88jQjCZ3R",
  "key11": "YceWTaWYX1DNPEgfPVDfaLjuzz5rRfgnHmftdpG79w3u5YrBAUcS33E6YP2p7rfvkPTbUQtJDgsk1auqH633BQ3",
  "key12": "A3e62QtFNFL2seQr2ZF7oBCuxZ9k53KgaeY93nQjzUvKwCG7k4rxrhVSui7vNaWbMXTbYKsFvVXme2BrR9b8n86",
  "key13": "5AKEJ8Gh7oT7kZ6pbcVk3F1jsEtdx8JSiLs8w7ubUWoCYgVYJf69QympfBZr85Qfs8kCyGvk9g8uReVmZLg7qwRg",
  "key14": "4U3di5ZzQ6ShSev2355Tr4UmC9N25dCo2oQDJSDwaghnEmZdZJWtnVvMWFES7rFbaXv9peCxV9UFUmJS51rSTtnX",
  "key15": "2pgXiJuPsNpB41Nd3JzwsaGwK46jGFhsMeYgBczz54ETahWqDZBtn1gAeNBzyU1gQZLWkJNU1Eedh2RWkxzT6iSc",
  "key16": "DNyhLQcuQT9g2UNoWbtPiiEY64fQzqdg93jsiUCcEAn5pjTUNRTZpWi9kkNxzTBKvKgXYuK5qnDuV6nYJk3VKW6",
  "key17": "3tEsQjkPJE6oocbGYTjt5Lv1QLxstMhYdDBcGrnq17mGWVhDXn1caZ7z2gk6z3xaVhusREmLYLhRd4XpsVxoUqQJ",
  "key18": "5zfR1b7rtDjT1qRD6Kz6wCRpUAcbjtGfZ51sd8She2PENKXxt1qAHm4P79uzFeMa5SEfsFPJ7msAkySgzDQT85fc",
  "key19": "5psStEJhuxvDfiPUjaxyLEUETjWza6coMJWuRnNnEsXSty7GkXx4rgdBGAguFNoAqH4ev6t6BhxandKZdSpDKMVY",
  "key20": "5oaNkjDJGXb29kWZgWyZsVtbQB2ewgbJ7XxWHmGa5m873dSX67VZnymAjawKwcZcXy1rR9ivHx8jSrNmPPAxZzZq",
  "key21": "47wEzSYRBj92U7gSqqfekXq8zToTAzRhcPpiQpfjoyWahuBp6nB1qNR9xPSPAFGzTHBpzio4Z1RvKUZZQywqD3hZ",
  "key22": "tvf5jvPGM5PZ9HtLu2QoUT4sM9ufsooE5RjwMw3M3uc2LyJWsMu8AQJTPiJcapuGTysFgsXR9UAKX7d9kZRm2L6",
  "key23": "5TeFCBLTrYy6uSAhmx4Tt8U4nW7Q45995rsTw3LkuNbtWwgkPkCgfVxu3fVb2DtCbXv4pDDWVBjYqYBbPFMDMiWn",
  "key24": "hkQUjpJD1gP3wQzyY2t7SgJs3TKEB9wk8gF7EdV9wjNsdeYBgmLLZHXnmZERJj4VsnuNHcNYtNAdXs6hGGTpC3p",
  "key25": "5VExNoYs967yEVDTbxw8RoyN2EPikCGGWcVPBFVwPG5TGWULJUZPqXSJ6X9YR2CH57uDogDaPwGy8ZG5X7coJZxS",
  "key26": "5mjS3d4i2X7SaUqPGy7GhpcnB4XkbDEdu8rksdr3TNaaxP1AJMJsZwGPDHTPtH9HbWgghhoNCJht9eeiSCdYAZTc",
  "key27": "66L7KE1x3CpjGnFNu9RNkkgxpDpnoekVdj9CH1vfiiTvv14N1vM2u4WFKVAbm8QLYSV6EDBQQKd2yLyqdjL4rGT8",
  "key28": "2cCQwaATsTkDN1psGrAe7o2Q9E3mN8gFT7ARdRVri7d8WsEfNSFsMefMQH7hJnMxWjNNMN6tSYuj5yDYss65PLM3",
  "key29": "3RL6e2B7GkjoMhtXfN5574Ajq5KfgUcSmWxvS3ddhVhRAGJus673Pw264GXPE7yd5hYk91GhkAiDerodgKPQnqw2",
  "key30": "2aCNbt9ddcZJn8z6KoPxuqXSed2BKHMdWBJp3GKG5pjBq8kkMF3RcLmhxRzt69brWhVp6WgFyDKzYmUx6M2XTKDA",
  "key31": "5VTLGNwAr1QrV16fyfX85Q5PSFfVY4eMTTiqLSRsyn2z141VJfGNyv6MLeCeuvy87zxvMFrJMyhhcX5QUD9F5rj7",
  "key32": "5vayhyUMFemWWE2ibGhzXpXGkNa44YYtCyAhDVmxSpyT5HiKDRoU4rJe5NXMRKTKWkhs7uNXbbFNHocYAzCF5Ede",
  "key33": "5bcmEHfXE6sr6Jn9jFVATNQwJa7t3gaxKLrsJ1qTr6GX77fzKLrBV395KNFtTaJw2UDUcbdSdyderstzqoFkLnFi",
  "key34": "4SEcZh2rA5Jx6hgM8oWQwhCWrqkWy6NSLXxBuB4wQJVxaZNupcT8cNeqa54rTVSEpd66xoMJjE9FQ5SbwXEwsQKx",
  "key35": "fuSRrzhnkSKk3Wgke7HRVCsU5FBK9hBFAD7rALp6wF3RdkfjHZTnsq56yUGkzLtHdKZVBVwYzRVBUFbqBPByhzj",
  "key36": "5Efo1tgqDtbv8jpPCp4xRgUAwCWeobfuwyNzGs8mTsztkijpVGSNcEXvkfT27bdfiQHwXvjtGDMyqdZASUBG2pDQ",
  "key37": "27MxgHXhKkxgTbfF5Bsuwg26WjKBAs3uTwvDKPUEThLd5koMtjEQJRP8o5jykh1Mv6xjy6pVw3A5NE3ET6pWCJAb",
  "key38": "2YSnid18Ebcp12KayQserMRGvZ3pHyZcSbBzYeJgDa4Jfc1pWdpkuAXz3ieueM9UUNH9RiLHUJASSraY5BEgtY4T",
  "key39": "4ap2Kg7uRwd6xrePsPMHForkgvyPJpWTxkdj9LxRWJFJkB26xCBx4JCYGXFEdVhBwWnEQ7Xm3Wt2hPR7LdJFWFfh",
  "key40": "39T5vpHEqCWn7JDEYA6vzaCh6uy9nnSAqNcZq9p26QYc7C4v3417FQZmE2MfwvB8A7f7Z8edA3ujezRgXVkrwFb3",
  "key41": "5EbQqHQhNAZjpaSiqmK7GkbUmMuFZ3kyxofShqDJ9CdnXy5K9st2R7KR1nDEvEVX2qsTzMtJ2BTsfu5qPr69buvv",
  "key42": "3qdUe19fLqqVGicQecQvHtXpfZM6nPZamiz4AJrjrtrUJgGtzx7iVBDPdH6YFjioP8kYveKVVsALMCgx5nJHDdNo",
  "key43": "2s2y7r51RXqxChXWnbZZvzCmy9gqydVbt7bmHoSYop47WHfWzp5qtwbiAmaagZCAmdxB5MGjfgmQxPMQ4t6wFN5A",
  "key44": "4reahbnUSzJiP2SPToCmwokE6moJowXed5KwFf9HY1PsVVij8BQ9v83AoeEVCLumjvjChqbWF2fpBNz6LFYzDUAz",
  "key45": "3fNZAKRNEQ8miet1gDwRoRtS8xo7tUb5HwGN9P7ZTFMoULf4Dg5Tx8cng7SEoAEkjAkB2LKUvGG2hLoCTAuTPESt",
  "key46": "4Hr5MQUcsqk38n2Lokdxc5nEzjCgAia9uUbqEE3aZGQPZ63v4sz8wQ8o1GkTpdahwQq4uX2N2MA8yXWfAe7eHbF9",
  "key47": "HvLzwHqMTYsci71PL4ah2zhPLqL94TnxM29xUB83bF6uoCCELoyhPhyJABVXbeDvCxc2S97rMxX6a6teG7JPict",
  "key48": "3BebAawbVH9nMzBzjw5xQfM2Ggmqzd1GdxN8s5kRi3jCxgskByoaJfXY5xGABwUuC9WPpuiAY721yCfxYZMoyctN"
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
