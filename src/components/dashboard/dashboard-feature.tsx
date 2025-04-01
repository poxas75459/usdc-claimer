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
    "5J7AwiaAqJj3vE4Z5qGf68w3kJ1aB6mDoWqG5QJDtWEEr5ev7wf2sVJ6UGsihYUyeszjXuNPMeYCH4tszGHj4XfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5Z5NXQGL35Avny8tyDQnmamHoLp71E14gu6GKBBS7RZSSRxrV4xQeRjruPJXi7nXnLTVSCYQYVh3m6bfa42qJf",
  "key1": "2nk1sAcEGo3tVj5opRS5Qe2WWCWU7L6hnjQUVyL7gnGKMabN1atbLrd54fj2NzuT6nBt2yymaqmTgq6L84zDo1UP",
  "key2": "FMsdMUCGxsjmd9xs1TpZPiHdx1sXZ5jHH8BGoCeq1ceDbGxio3pjsm1UnhVnctUrnzNw8wKbBEVFzaKkeA8SPDv",
  "key3": "3BeUJho6cxoby9bm9hwQySE2CXTVqPLBeXzoCdY1N7fST6pwHHiQhBoJ6DUtZn3svntYuTSykngz5e4GRNs4SvJz",
  "key4": "3WUhGysvaVbFrHN7S8J1C5j1USgfhbwnxB3fcEgRA9im2V9hbj4aYVraywbJHVTgh1abNJnqGcxDkZFLqn9kL21F",
  "key5": "3KhDcDGr4KV8GrKdntqkkhCLwYCce67cFVgwXiacuaGC1HgAvNQSiU7pZoErfYAxEE5t8ah89yPdW8gBknhuC5y4",
  "key6": "4GZXzKPyueQZyVhQCjSGxceVaBRkd7uxxUX6Qd8arsCuxkPyRZJChD1GCdYwUP2XDsUSWxS4wy5UwBeFdvzmouNX",
  "key7": "5X3DBX7GRRtzHXaYqDA9YDBnmkXZUjjCZcby3ztbbzckKjDUBbUhebXnCbayCJ5Vb6FQ3RPKx6vdgdUCCGGdokoa",
  "key8": "5fwxforv4w7yY51i9j69G6aXCwkokwVEGZLqKZsVRvUthHwdCPT1dv8QtgyhbxvypCACLpe5MmPqChDVFCVHxLTz",
  "key9": "5gacH7GomfLnFHqa5nhUCGrR125C7GJCdo78fuG9sCvwDbsC5hV9a7UJcnyvaDXDVXUTA3QXXpPBTit1HyRRgEeu",
  "key10": "2mknRWXsJycGAH44k9mLMkY4Y8RmxNhKfJuDARM1iaSYyhyPERKGaF7FcXia6TWUhkLC3i7bouG5p9WDQYo9Qb8e",
  "key11": "XjU1pxxRhayYF46d32ToTGkrNATHvPJ83EW1rqfUqNPEJ7YM2g7qaKgc2zySXFKQzUjEerqhyiqUWbDAWAmNuW7",
  "key12": "2uU8sLnQqSM5mHLYi8n7C5tRxQZVH8wdx6SCaoywqgJ1PX319sF14t1pAp3PBcb7q977NvGq2fnQXc6HvWJf8JkE",
  "key13": "5afkuJXbYpEh8HGRvXmZJqPbnxEAici3YgWVWuwpayw7WCArqNzc5mpbYQiJbRxMzt4mvzkAJKvbCHTwxLLZr7dJ",
  "key14": "4Uv2cr8Q55gncUcupMFDAC5G7oSmNcukcC4C4LN3UfamWEyDcAcQn3QnfyXUMzWZQmZ8BhRNq7bMXSqbAyMahDNR",
  "key15": "CDkbaspBGSDLtQwfqJhes2PebvJHg9dBsY5VMLFkTi2odoMC8a3ty1uZiB5gLrGjGoKfE8jgMnDkuosZYJUiUVb",
  "key16": "2tc3sCjeFu6QXu9TJJYV88SjQhKD2hTibvnEuLwmkqztrVTYuguiH3mDFjhYoTNfa56P1xVg6Y3KnGLXt45bp9ms",
  "key17": "35A6zV5a3CCstfHQaNWhLYua49SRcmTSvDUxspX4etLA9LZErUvLmYeJv9VWU8H1DbhZz43KFauTy9QcXRJZHmZh",
  "key18": "5wqooSaVrfHsZnjXaAMAYBj73PLtv1kpqKbWKCTeS9rDiwprWazyq1gotteo6qqTUAeuvAQPz1wHVmEteeY5FBU8",
  "key19": "KpEnof9R52SSixZ4uPLtryJF6BeSmwGSngfcEXxP3kEqTxiJgJtHng1jR9dprjCLJW4sfHZMdKAcD4FpHg9M1j8",
  "key20": "5VNK5tLMgBk1YRzQVZy4JDuoqNn3aiQtuu4WnXbDEGNNXa3hCzyWsBHPGRECQ7VPSk5Yg2rtsMcyCpQbWq41tgmM",
  "key21": "3S59jNs2K39EYGNHQ1AhALE5RCVXwQusJ8ws5LtgFP1BXwXLwJbsw2vyDXnP7Fy6wE79GMi3mvk6j7w8sr56Vh7N",
  "key22": "4dcJJGrz21FBMNFhZnWw4sWLcogZam6T2zM5eyfGaywdZhSxd1AfVGvqxJqaKbwuQFvbZgMuge9U6gvABQsCipZg",
  "key23": "Nt8ufRyy8W8F9GzJYZfXxMtgzYTNkgsRHcmFCJZ75yqjA6PczJvmVbWS7MbMrAHZT9N9Jc1PVqa1VcbQdKx9yUJ",
  "key24": "5np5PVVzduqAeKGz3h7J26qSqMEYD4jd5wymfp1ddeQ9jZaErYoSQbYkZnwvuy8hzB4uRKAFD6RbAKwz81kET2YC",
  "key25": "5qDtF6eH5R7Gfw8XRjt3JR3vxBBZk8jn7mUqVps9vQgNpUR2GBKVaRhvoc1Kq7cr4sXANGjYEnoLs8Ty6Q7eNem9",
  "key26": "3fzWEQrq7kgzE5C6kBoS1PfHeQZBakaoo1d9mawWUGSH1fbcAmBNkNqSqaAXCjfSFoHtMgPfJhywf125A2tGtNcc",
  "key27": "4wcnRf39dzykQKENPPcAdDiVE27qctRgPUQQ2eP1tADdqNkeqhM4xciLYtf9TyiDUv6sgse6JFYh8BZjWkVUT1L1",
  "key28": "25dgGoc45jtXH4Q4HdPeLRoX5cVLXPLYBapbtgCdEy6FFo1NwBcPqdFiwxfUz9kMj2LTd3evWhti6xU6W6ciaTPp",
  "key29": "tr6VwNyUq4eEBXiKEEL8WCPR9bi1xtpf2Z93MEscuu4RsEkkLkgjzswWmHG4TJt26gRVpnB7tTGEXAh6JmzP4RS",
  "key30": "48BiskPZLxyJUrPw6DwiWa8xBcfvmdizQtUytnS2EkHjWreTctLJGeLy2eARqhv1DykpjiWTiihCWdPedMRam29M",
  "key31": "555FdJAQ4kFFgfst3G9GfVE8JVpqPwoZdeqT4RDW4AJRUf7aMGjTviZNTh1xv3B812G2FMBPuJyUp6a42t4bLuvd",
  "key32": "DDLCQU98FztfpQwU4w7uKJpBzCWX6TdbG1w1DbnmSCBj3rN6tpkkz1HE2CNpyzy2i9zzKT4RywsrzkSzUMNRt3a",
  "key33": "235f1agiiAbuv14wJtp7mt1Ras7i8tiUYGPnMEoV2mfnXKbcrYv3UTPDg3EvFSuqFibrfz4aXRAv6r4TjiQusmDn",
  "key34": "BxxHdSfbyZ4hGuQ7JchymCKzn47Pe5vxXBQtKo7dhdaogb5Ef1n1F6qs3bcKB3dug5SvVtEcm1LRcJ2aUm6ZMo3"
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
