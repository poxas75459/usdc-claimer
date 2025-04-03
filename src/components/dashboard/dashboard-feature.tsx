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
    "3JZyfW4HK3Bf5zEXq28yzwVaQTQAN76ESKAjfy44ETVjsbpsaCLwZh79az1dFPmadRTSACc9tRDFRzCEug4RN2oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMo75wPAF4oWFPNmoRhrV1U9muTv4YLh8rnW5iEVadTZFm8K1AVx3YtacYczBy3C9WZBEcSqod2EpzgTYSpRgkF",
  "key1": "J3o3UhPAsmcNHigyoyT7ahPvFoEpqDgrvntBCWxQSFhjqPWbqQDG2wCpfVuFkFdhqLiPkWzN8CSizcNULHUDDT2",
  "key2": "EwavSarv6PfjQDWzMUPQPyrXTQ6dbU5R1bjZZvjnD7nw5551Za26mHGyXvwApUXBh1efWog4cGmUduMC2eM9ZvF",
  "key3": "46tdMvefBFzR1b6MUHrAJrX4vkSSfTfShke7vJrK5xxmowradVpRVzE3VWzL34ueUXNhU99dnse7p6wZCG5BDGxs",
  "key4": "2cDpYPXFrBTgHbtSG6Qn2yWuFn8AuH3SWsLP3rXzuJ8hTpzrNNx8yETgtm7BTvJ21RPhN7Gd8Mu8HRaMUpseJe2c",
  "key5": "2rMAUnqvL3qGaWGsryJN6V5m1QuKuRyErKvcXpa1MXaHDUrxpaY14rTtZzVrFQ2NgvfhB4AZXdHS2aQXiEMGhL8t",
  "key6": "2wEEUTYBzRXbX8ajD98sUtvC2sEQtaBrDu7Au9vc5TLmFLmFtb66d4nxe611rXEzrSw8fmqb2aapdAi2utRZ7ym1",
  "key7": "SPJuV7sAEskeAExL7dQJoxPDkTBZXYpnC2zmZE9J5eDMMUb7PPL25Lfpxz6A5j3o9JThMHBv6JEVpLf53j5hrsp",
  "key8": "2XvF1PwnnqCMzTq5WLMDvrSePDPZYy4WjiHipzzKuer6y79AhTQSVMxSMPN68YYomARq9aBcsi2PvYaHMDQ7Ne6Q",
  "key9": "3GFp77duVoCNud3ZiVsUrhDQrjv3qyfXujMUnUCwgyBdNpY4GJ9qGcxKnjY6TLTJZp4xRE5cN3JMLQstfMPm55bE",
  "key10": "5keCYvDZZTnbSdfHNTMLjWMvHFYoWS9PR2eYYDaLv8KToiDD86DCgkpGUfAk9sDeWKtajCoyK9ere6hUnkT5ne1i",
  "key11": "Azkaq2NYNKNod2E3aFTD7c3dRGQHFtZzApcey2HSmpP3vCnXD9QC1jAcXLmVjTJmtoXwrFJ5UPb68jSdKSkL9q8",
  "key12": "5YgHhhVuSgiiF7JBVZTueqSfJEVrfRtA8zW5FzW4ePnB2WgpKsY7q4BQVza8PTtVtY8U1h6CdPsd65ZFeTyNNvbN",
  "key13": "xj2ZcqGKHWjRu7UBaNChHYznegT9yMNqx4RCBR6Fm96QK3ykrrdMyA2tqXyG8EZbSxwF94XGY8LVZ3McKq2hqzy",
  "key14": "4wRMM3Gm9ecnoxL78b76hwPRQLpbp21ZJzykkRcJYakugztsbgPJrvXNPn8473gBiW96WpgdH3NGPs86LViq5TjF",
  "key15": "3Kbaq4kAey97mev4p8JjiHzPa65j9tF6wRfRjSTiG12Dz6DySQo8Xnpxiw7xoe4E81huBBxnLZTygTUtgXg39spt",
  "key16": "3Rvr6cuLj5Zts8jSaWQVgsSTZ3xbZWeA2Zhhk8U2KnNY4xTbAxRb8z5BS31RqvzzVQfQnqvAJ5GA8AmPDiyXeFzb",
  "key17": "2HiaTZLAe9XipTYqsrwK2QK8Bkk6xJVdTs1g15Xo1y5KHjdQiW9izmmTtBb9ZxnrphA3KuRqN69rYKQ1AfPXBFNT",
  "key18": "2JdYSmJu2UvTWc3wpqgfrbDZiyitTKfUeKnngHV27qkuG8VPEa5x8wjy4YXnwA1BmiQyLJUk5EHLQXe5kQjFEYnX",
  "key19": "4RvJRBcXHJq7GCnwVUrqS5oGZUSUWPJ1zejErYZdSGXw6EVaruXfruytBDTPV2K8Cp3j4cgtC1Lz1BsjcHnnZd4P",
  "key20": "qPa6rU9ks6274dFc8VYi3n1PKiP25KC4nGfC2jpoF3JoLvLVKRKrR3rSf9FbnS7GNzS2uLj9KFHdJx1NbT5kZih",
  "key21": "ZAaFRDHf3rf4WkrLFXQtqEjwzoeyTcDUa5vuz89xk8tTqasRPZdSs9B9vMDkcY5D3LkaszZgohCfrnQaUiGZ98m",
  "key22": "3Xz5F87N5ggRAHw3pZZhzQR4am93vLRoTLbXRkfBLhk3TBXYH8QKao1RM4gQNhbhha26v3cYJboYM46MEXFS2hQx",
  "key23": "ViDw5YQfHPdiguBBryGZYWzgk4JBYExvh6BNwgVLxxKf61r69GDzHrrBihGrGdmorC4qbq37aY3szzivsDPf52Z",
  "key24": "2bE5zRM65J73az84XFqeG77URj6TaaQjsxfBuGt1Wa1e6YMtxdeBkpHRR8wUnnjH23ymYermkF6NGSXq4NQ2dyvx",
  "key25": "2dnhqaFcB8NKXxH4dE1neSNTZ2qq9H6suj3CP6mFuvu1jUSkKYxDZAiJNh71fBT1sJeq7rvTf7zbTHuC2cu1xSWQ",
  "key26": "LhFqBM1EarDwwxzuCfaKewPAsVLnE1hr1H9nNRBTcsn1fxTaFR71nKoXBDKrA7XZzSmX9z9PURdRtoqZYug8Upz",
  "key27": "3bKBTkRzS6fgUSp7tm1RJPDGqUmLc1JiddjPpay4bUrCJHTpxgXavk7bA7kC1n6zdf1HCfv64snpeXWKfK1QqNFG",
  "key28": "2tXfS3mBpTiZtkt7gRNvEKGz63mt6XsM5J23PouECkcVghpEBbY433gSy2AkVtYAezingMyurRB7D8VkS5vuLwWh",
  "key29": "hbZ5aEp19dho4Nyp2yxuEe7RFoqetpKj3RuUcJuHvaaMbwn7yaLrV4vz9eAj1iTSLUk1HGaoRdP95t52MpeVGwz",
  "key30": "4a4pfX2HD1jwgVN1b7ubYuhiDhEX76zeagNzwQv9NW6qA1fJL6R7KjzEGvGS7YkSY3T5Q2m4P1o5kfWiKFz4Z6KY",
  "key31": "JJdWMmDbQ7JmVxY8rQxuqSzRvAAFLBdUy2YR7CBjD3drCSdmmtUKTC31DcDfiFsnrBufjaPfka4fUGSCkD2zkui",
  "key32": "4vX6CZcDKk66D8fUMucxJXvJHTwMnB6foFDswbMEBXhZuMMH5HxaZW47wU7Nq63u5Yeo724sM7ufUZDHURUfyamW",
  "key33": "2k8M23HEMppNFdbLD2JmeK8o49tRe7ZRFFXVPs4vQcK8TrfTXZB6ieeLZrrrmRvs3HmG44jqHF3kJ41fHLHbqo8D",
  "key34": "2RW92gwm2Ayj61TBRttrv9k9eD5N5oRGKecBfAN6yzPPT8XUCUvAQvxqid1ZaJ2hrguGUzZezkysFHP9QFzS1ceX",
  "key35": "4NLwhx14uvbdFWTn5NeMQFN1a7yAvqdWV2TJ8Brj6LXiLHsRPuWHQEGsvYAyMo5FcQ1btLGKboDvZhS9TZzC679E",
  "key36": "4G5v6UPXK9A2HryAbvwkBmFt1SyJiN41HVKyntz8mkajfUhyaaGSU9RfGMuNzbphB9SZhNGobS25ccsAjEs6akzi",
  "key37": "5tV9J7wm381qjp647iRafSJ8w33mekxMn1TwGZeSVtpMAhewSiNM2viSqWHKih2Qio6U6TZmAGguyKsNgiQKTTfm",
  "key38": "RLmXdzUZma7GBT4wFmFiFffkHTxvwwozBL1fjavC7EVEYJS2LSmFJKPa5WLMM4R2KT26KuNnf7PUCS44GWkrcPZ",
  "key39": "64pFwTfmkp9AvhGZ5pyBpzwsg1RujkMiB6BZz2CyAt15cYZhfxkNJstL8qAzQHa4ACNPzWhZFgQaCQupwa7LNa5Y",
  "key40": "4XN5j1AkQoVkQmdnKRnwy9v515yQWoxrjR9qxzwodiUPi62KSo1VN9LRzbosheuf8NLChKBe8D5wW93byfrDaDX3",
  "key41": "P4DbTSe61xZ51SCkTwVjwfchSLBgr2a6h7dzPjKksecQGgKVRDuyPeLZbx41diCNr3pAbq7iVWhEccv3g2RCLJb",
  "key42": "2pFeSvcwPSE1ARYfsiwhhYJxdKMXtBrBVAt2H8hgBdFnUXFXKMQKxqp4qzRT8eY787mJ6y82RaYufou5AtzzBswB"
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
