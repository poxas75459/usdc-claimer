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
    "48E8zrNXCMXomc34kbXHA2ZtgsCS2h7FZwPtyGtiqnV35vCi6eYW5jsZFWx2QGVV4cZnqRH6YMAwB9SsBzyuJqj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4EMXqrnMc9J54QYEBJMJzC7c8SPQxZD8Tn7zaqYv4Y5W1nRGdMbVwzGBiy1gykthQnSQtjY59Vkb32yfDe31Xu",
  "key1": "498ng6Ffv7Y1vfcaJZwZW1HSLTW3Zwapef15hiiwRMnZqPs4juSkUXCb9LRPUnMxUB9nCXic4e81WqBMfBngwvhQ",
  "key2": "2FwsM3ydFF2rmfoYYFaEbwtpf85ATFYvsGjwDXddnvFRHkEV9Zf3iQZ96roKU5MLypxKozQ6cHSsi7e2uk9Z2Euu",
  "key3": "4DrU9egrci3fHiXVfSywU8SvU3AUiGikj1hzWZsMcKMt4y8A1A1bXgHe7L43Ctn7G1GjM48rejGvNNmcbaWhCzAw",
  "key4": "2pMQHXR6rmBMFjR2KHxKpHJbp14KzLJajrsHFUCxucckjnK4VvXvprCEd59qTcb1jvTSt1aN21fE6mBXXivfmZA1",
  "key5": "5makhGRhsunEMa5znv5zaND6QVEpHTPuGk4z8VQqHyL5vMnWELpdPM2VnffcoowjoZVSCyDxUYoM578FJM6Zkdgr",
  "key6": "2fgmcs3dhkEkQ73djKJfNn3uZBpWmcYbrJpNh8ce2i4U18NZG7Vm3Gvcuhj8AjjebpiyYEvmhMeYzur6mvCCFuV1",
  "key7": "41zezoWeK5YE5DSLHXjGXERnYdfDFo99vgVYqC1JyXcyf5NzArxTShnPB3Z3MknKfXiT9YAzg7hYKpf4VwszyUpt",
  "key8": "3bCqqymESVpb2oGQTZF6qt3muSoNxEpvNv8AJbku9AtNLxBraCgead4midDAjV4xN8mnK9WmB1ro6rcRSBDsCndv",
  "key9": "jSFajC143PkF7JYa8bxXWG6hcSw63hf7jGaJg23yEM8sPvhNrXTqe1D9raWu63MWiS2ja43XNRGPvQk643C4hDt",
  "key10": "4HHBjbpGSAdmsQFmRVGvZVjxp9zhxwfUrXvqzFFXvmUP96yf6d1HQHMG1DaHHXRCeJs3baP8sQnGZXg8WMrsaUNy",
  "key11": "2rkyHQswbA7atrFvHCfkHq9oRdDjUNtrydLmYudGTCTV7X9qCC5obJyJM3jGdZv9i4ZcaGQQmNjV8N6y3ikFHSVZ",
  "key12": "2W6JBphXiBZRAKkBujJCf4Nuqg9bTwbAw2Bv42WZQvLwCvJ7YhSyxqxrqtxRSLKrsJf9otF2RKMEEQkpThXsuQN9",
  "key13": "3uCjYGbNaQEehva5hRUFE6BeZZGVcUiJQMUd8Rv1SPSYGNSpFTM5nNX3ap1tm7nGFbdzH4HoQP6JVxhbG2SgR5cr",
  "key14": "3sPG5sY3o85jdUPAbKeoDLXv6YBGXHBmHuqyw6e9CoBrFvb9FM2WYhyTFRLFtfyfzPsxiu2b9THxBizxNHCXonpD",
  "key15": "4RoE3p4o8cew3jBy4wfsbEtLia7org5injRfUjwiAjZSpYXLRXpN5xdhWupPXYXAmNL1wvmcatn1KEkeBKYf6Lvq",
  "key16": "41jeckSSdGKbo5VJKcTsRM5JS8Ahvu4nxXnRgRMuBdd3CRmtGLMm1dZGRpaBeHnoG5q7vU7N8Yqpbtoeqc7jzuGX",
  "key17": "2x6Lj5s46RkUewmaCtqV5tvMAZKhAtzHGmSxH3DSnSym42ntyzEjr8z8b4AM9cfpnfd7r5MkK14Y2dmCreE8Bx2c",
  "key18": "3hHx7V9u8XbbmkpzDdoti1eRzHNdQiSat1BpDV635po5hWkW28qVgtJeaqsRgZqiwdvfxup3orN8QH3D1Y8TPrWK",
  "key19": "5XGDUeARmoTKp3NhRHmDDUeSSxCyr2aA2T8eeqy1LhXqi7feXxKQJ9AvT1CoANCvdSYEui9DNshnbiDEJDCwuBGg",
  "key20": "3rMk6KfLhgA3TBys1E9onFd4iogoeeVYTcWj5qptETAtMkXeZKUybWg7DVwQ87cRuRJjxE4CGKtaVDLNZ9jtgEfY",
  "key21": "4s6y8mYgR6df5es8rxfKC56g27hUEEfT24trHPnZVrZaP41n8D8TRUmppQ5d2rnnXSpCpH1bKWen2uh4sv457xWi",
  "key22": "3ikXfiCUxXud42K3FbyAqHfjszdWgtUdTLvWbysXpozM9AH8PjnPSmtRJ6XupbHTc1hhEQSHGmcTZp1mVcLRBZt1",
  "key23": "5FVHGo4i3QRWRJFwyk1pN5Cz2jEucULJYeRa85acqHUAsk3WXJ7tk2afH1TJA6TvvXQXzanzj7vbrk4WotocETfD",
  "key24": "3SoESkHL1f2K9N46H9jX1Zvd57Ntap2brLah37pZovfRgLJSEBphi3dSJemyGwssuq6PQSQPqcd2d7H7p9QWD53y",
  "key25": "fE2pbhVeMQPaCHZzVoizM8xSmWu6guG6gWkKfDxi59EqotUdAEP2aeq7qL932YFMGDFckTCxQ6HcXbWAnYTrHXz",
  "key26": "zLf333kwJCYRAa8Bu37UFsvDa4CkDFCDXBhKfsiwxdrQsXexsvW2q6JdsDEuP75AYSWCYcNivyM9nXxPt1KfMLh",
  "key27": "jZw2R39xYqT8ozfiYwDd6E9Ss6gjvhurE46wDCs1FVTcoh6H7hVMBdtuts1Ff8QngTXWo9NhvCqJSvofsw5JsWp",
  "key28": "62ydzFPdE13Xm8A5Q1MNqukvnA6giit76hBPhKQNzuzQocPbvZ2iJMyVDzVmdTdZLFWEgZrQ9AetPjAZhLBwJsGr",
  "key29": "oxRFKs2Pxx3uM1xiY3KBXnELEQhXK5bFKvjfGuLsjd3dM3R4nPkkmKEv8CZPYzTA5ZfCY31YLKZqRqKHP3GMyCW",
  "key30": "2NRDF1wg1xbJRJCh672p1ZjCu3xBTAdR9HQh9LQ3cQYYbNwCzxW4EzQe6BrNyN4UGEhmrmsrqL1E69DwJem85f1r",
  "key31": "5P2KFCzHCheAuSW5o2sgxdYthg4KaALkp4c175gxDjoHQhzdx9R9qoL4UJcAPu6kjRGQkENhZ6HBMFGMRUGMMLW",
  "key32": "5K6hB3WQLf38PFeattfswvay5DKjw6cDFHETUht9oEvmsf4XNr3dQmLT8wEvQPGAgqorrzNpeJVU2F7c3eFdr8U9",
  "key33": "Vb2itFw3jGLvHCJQZQNxye5agQsGenvHWVb8Mc5C3ve3AjbCskKvdwQuJoCWnGbBte1fBSU3Wts4eW6WDBJfRYg",
  "key34": "5hZ9uPRxe4EHp4pQvVZfmzy43ZZwkHj8vVN6891YCs8qEyGAEa4x2qXDNu2tPtQ7rhDGnW4Cw9gpFWeL9qLc6rJS",
  "key35": "3HhMn5G6Jbh1WWScdxYp8ymc8yG94abFDoLcJei8iGAR7CaNgxcekyStGw742eZSLbqSUsf8aicSqtWCAE67hGtp",
  "key36": "CF3C2izphvtP2uhrj4EtqqBSi7NrQzgY9EYNaAFam5eQz6T4CPn4Eor4NFcoHGoPucv9vt6BjTKHs2jfASusmcC",
  "key37": "657FwXWKB2EVcPrshNbnnLwXfysjbDZArhpxaeMRXxPi88ha3cx3KTJhGEoy6p4mxKHjgfsZuxbUftHX5TnoFJFU",
  "key38": "218EjDHSKte8DuYxtKS2ETucE7f8M87WrshEMGNBswzxwPK7EgoqYmHfuZh2MkuWWcqDdJ1RdLQjvMFzubDBBr2d",
  "key39": "4zNLeAzdgGfJmCkvRb9HzHTADWE3a1myXcZxXVZaQGkJigSwRi9uTzhaXcdATcLVSAtso9cga8wrS9XJdAMnpqBX",
  "key40": "5aiv2A8puQYLoMJQ74QwuPuw1oGStNJDn4XmzuaPe5uMv3AWuxZk7rjMz6Lv2Ae7NJvZeLtdFbgM33AtfnPfaZrp",
  "key41": "2n4MKfQAJakzUUr55KusT9Ro8LqHFhRzD8e4fdzyqtKe8hZg63WUnjRSai5krA8XEqBZrU6wk5sTwTCEoQr3pZWd",
  "key42": "4fS95PB6abP6iDEQHcXTpZTMS2uy8eDm6zT97MkFnUpXjwXRHtNyaF7y8ARUrEb43Uo4qbaZjcPm9trtJ2o5sPQp",
  "key43": "3MVyNTdPe674NyZNTjp6i7jsLH9x6F9axqbidWzMCZfqEhDzzPTH2iFUiGZWvHx45vpEhkbXDripAEq8tfWfAVFK",
  "key44": "h7ztxZs2WGWVrykJXiadbr7MG1xoxMBoZj7JnQifnnsbGCQs7GSEt2xMZchPUmSqQNVQHR57ivWgwzg2n4Mh57Z"
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
