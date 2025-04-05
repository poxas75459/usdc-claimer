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
    "2JoJYcsHeqPvBRsmGmvRZFMUrRCjN9qNbD1KyMnqzebdRBLATUZvuCoAfUwG6BScWRF2AmLnfxM4nJrdyZut3uwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzsuajzJNdVoHtXj5Uyy8udL1xPzbVr5rBbbn6npmgfgpu2yAxoKbD2ao7JrDnboHNzxG5zTMhgDcQPizfvhHm2",
  "key1": "35cxM3Da5ixVJCWWAf5BCthKtxTfkwfFK1bqxuzia8YnPUQYUyqMpvfTewZpsMwHZTEzM6eKBzZAx35EgqhGd9c8",
  "key2": "65rWD9qAP2SpLjjxsTzd5vdXJFJRvhGypup4cSTgvde8APJQDciEwiQvB2HcMMtiTERE1HDLBqn2we8JoaeTbcp",
  "key3": "UBCMgzDXiSJ4TmZXvNNx2QLpHMeVdyYPda443cETu1qk3LMfW1JsJmPUyrv3cdMuP1DJtba6KvEDKUbtjroeJyB",
  "key4": "3mEfCVPSJ9Vfkto1WbBAzskqqa2U8QLVmo56vkNLZP9TzSSaoNMU98E62VtDpB6GpjWrLXyPWnxN8DYFLQpfKoPj",
  "key5": "xC5r3kSNkiYw7Xs7tdAU8UREdzoEm4Ff7x35BEgAr6FcDnMdRUM2npGG1hYEz1qCvwMRqkN9x4w1einWQ4j6yKV",
  "key6": "GZ4WDgSwn5KfkQsFKrRmChTC8YP1dSokvDEtE2mUTpVxYncxkLjrkR3pj3karHe9HKwKd7SZ4sTSUZLtH3xG7Gw",
  "key7": "5F7kW6WFgQyQn1ySK1QE2bC66TjhG9J758Ug6CV5QMUq55qHPh5LKETdX5bkXQuwSAP9nGWDochQJRGZ74M7a1zM",
  "key8": "5n1CPx4D2mgP3Dm5ziyuwgWg6CaPPAm8ZwdmA7YN5bgVA5Rjqj9FHS8Z1efEMpHBkkKe5pgZcbvSMJCHPJEBMrCH",
  "key9": "AQ48pHNqmUGfDtfEG7qHiqGPCP8tgRdYv2n4YrkNVSRCCNpsM4btd9xBcDtbVBCXvVoQsmwAAZ2qsmd9Wf9aqFs",
  "key10": "3KdPJdWXzhYfYWtGuU6kk5ozv35WjNSnA25KnJaQjU9PJQq5NydyPcZsaQBJXhNEw5U1HQ5Lhg8c2fmEuSTmsF6C",
  "key11": "3xswv9bXEFZkoiv4gYkcPU2wEbNJf6MBpLkg8AuzawkdbEWVWVKFPRkRg9ERtxHJVZq8fWcXDSdiNhaokUS5Y728",
  "key12": "4jSNYvLtW8QrcrGPex65k6dKswBFwE6teDuqpPPwH6HqpDrYSk9qibt3XxuEkdrdviXKUprGp2tUyr9gYwFDRdgi",
  "key13": "54SrTkVWgS45EK7RvWP7z8jYCpUCMSigWFLCL1mUvxbZbFuP4Phxp8tTscL5Fhvs76KzHV36mYGKGcSzSp1Z2hYx",
  "key14": "VSNQSo4dqMhevCe3W5EEVzkaZaGLX8A9yNtqQf5dmBrPVRuZ5RVP7RBavaf7LYV1zZoKGeFw3bSWdGcn63t3v8z",
  "key15": "2F5w8qGSNvGbKJHhHzjHrhXyLEThew8ExMGEfdQYanoB3w1eGjvqBTnYgqTMTZzsjQTf5VANdHCMezeiUL5EDr7o",
  "key16": "54fh9c5xAh4raSjTStN62cReay4tWngBFuAV6JsWeQ8qnzkAezyhd6iFkyyRTvftCJQsFE9mXPgGoHPzPkGZGSee",
  "key17": "3f2zyyCpEYpX77U9px6RdMAZd5zw8a2Ks3ADpob6D9JP5qN74KV7cNanh8KmG4kMWTArBVTa2QsWDwTwgVvdFX3t",
  "key18": "2pq98EaoryNgtDxv5zdma71P3nrrLhhGzyKqhzxirAGaSXDxsk4KJZgJF9T7TDGmpk5xhvwsSux2ZSXnPCM2QLmP",
  "key19": "4wfCXWpEXJQKM6zXvk67ZEUU961y9bY71GXsRoohK26w1jAdkfxbmPeXLfU8dHZUdnBSx8fS1UrrTxdhrB6FJBGp",
  "key20": "5aAfakRCqvNRByeScM4fFpKDDBQQYUUUeaFzkfhqzhdUp28eksk6PesUNpdrp3PpSqtrR7H9hHCSeCxVFeRVkBXa",
  "key21": "4DkXfNPKMfwgefJfN588vccN5YgQxfNr5p1EQQ2ibEnwrQAtnPuBMLQwdW1fTsAq9agAdTVw45z3gNmzF5hyWyFY",
  "key22": "65h1YN24ubE3ggyipezZ3UVevwiuTP5VSKEKpqtB7YvYt8yTLwMzkfxVhKuBdT4unxejyg39PqwtsbbJJ4L4hGd9",
  "key23": "2AdN1krCytCCFVsPcNqb1Q1aUj82wjrH7cNBa47aJxNwfrQqp36unwnbdEkpp4DWThj7uqjXqpwXSQyPmGjN1yU7",
  "key24": "3aTKbTMgPiS5rXVcrv9kDhi1GSR3r3UJYmySoV6EyEtvD5XCZ9Em5sCcDWeJPPT8gHs3qQJAyb1AC4FtWjS1o4J7",
  "key25": "x4obd5o8Pj4LN9cpMYSCjv1KWzWPR2MyiSVmaxiD161sDZvKQ55T4BV8T342QyTKHkjE7ZQCPSNtvroJtzoc4gt",
  "key26": "3wVYUTQgFkz9JvvstE5TwXBungDf9SnespJTxvidK2tXojiNDqp9QTVZjahBDoibbWcK4ZwUXGpEBYBhPRKDrhwg",
  "key27": "5YHJpd7U9oS4Mtx9N96oMD6pudCfzezaMvYFoPEyQ7wZ7cn8E1WRhqjEi41rUb6Fi9WxT6zWLd98k7kWnfaXN9yH",
  "key28": "5C9RRBWfWygrMnrMR8dENHYZhjQeH18XiZvNVyFAHVWb12Cs8RE7EYjkt7vm3gxibR4v5g7u9oLNqabtNrHCgnV8",
  "key29": "2KvBwzeyyU2SbqgfqQsHLERCXPkfz7PXjYkZZetajhRkFgrgJayGKzdp9Aq7CY3TKJagTGkUaBQ8c8K56QKzErMN",
  "key30": "3NWWNh1qswsR9GXYixUZeD2TAo7QrzMkiwQWhYxUMdU2TTPntrhctUhW6zYZ7D7nvRBKewgCjPPFFJQ4fRACijPT",
  "key31": "3xcQJ6dUzJ5HzqXqSGjQAcpRxwu5uUnDHMmJBPuDNebTfZw2V3wwb2sgREoR9Z82vqz5qjcaj25pHq5RXMoW1XUD",
  "key32": "5UM7EfRAPQxTQ7cyzs6VWGrofEyK7HKq5SrzuyuV2Cge1UUdiXwNMTWLVbgdiHc6XCZYmUtTcL6yiwvvzqzyQgvJ",
  "key33": "591ZXhEjSv4HfmG8WxMn4xozxMerfd4mDhkVLeUxj7cVV9oNJp9BnenMPuB2gPDxEren5ieagpDtzc3e29M9Kq1b",
  "key34": "3rFopy8wiwUFkBGPxnj9p4UU6WNyNJNMuq9Umeeh8wpaFEZXthNFNDgqyKYr5kejnDaYZ1JgPDreTeoCgkd6bk7M",
  "key35": "6jEgvW9PvPjcazV6VKX8vuPrVxpPQ3QjzFkMP1keQAuuvZ7bgjm23f12EFLgUd3Fr4m6md3BsC1R35MKVhSnG1i",
  "key36": "2fwUKG15dJBFvtLvK1ac77A1xsqHDnRCnPAnTx7bsVH6iTfo8eiNRD63dWJUtqUm9njRuP81FvxWspEPfUi2eSVR",
  "key37": "9mLg7zSR5bXi44F7L7WqsSX6Ay1vwq3k4qNGgsE27tiZHqGsDRfDZUiGeDxqAAGqQYMyAVD89HkhLx6CvggyeRx"
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
