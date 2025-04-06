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
    "dLN27RJk6omQwBMRUFYFj91gigJff8ghe3Xbk5UcpXcaWMJa4cR7Yecmvo4TytS5ZBuQaAEruRbZ5GRtnhWVXWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvKXPDqfzAKDgoG73k15AtYQ6Kam1yHAoqueETahSeNpRojsVGrVv47jj7A5NSRFUncdUiYqJkp4SEQ3DVgtdAS",
  "key1": "26HCNc3GpgQGjDovsVtr7ATecmGVAsbKwJqcHsc1aVfjjjyAgamfrrYj8dJ2kXe1b5URKVktGqsp2PoGZdddePzH",
  "key2": "51GZhirDAf6pqhR1KKR48NhjFAj1HTitLj4PckxWsTGtjiq9CSuaXHfMRk6MFu9ZKF1K1YLaahdzi6ZNM97HNZGA",
  "key3": "45JudC4cm13HzYsgJq6yGJPkGpf185AYMZzGTnFkMriwg3jtdBq98RzpjEFJgTMNPcZ5h3aSm2uRC4PMGVp1CeVg",
  "key4": "LM519KGZsMCCRWYjtrxxMCN2LVmhRR4uNwLXLKvhHP2deiuVRUiLpqchcoetEjYcaDpKD4ej9bZ1Tr6R9bU1qC6",
  "key5": "3WafLxbMgpXTWEHyqovBZwTSuUF2KRsspAvaN94UTjztKjU3Qjpdj7sW8fKECkQ9PRpNzvzvw3FcBeAvrynQdZEX",
  "key6": "2o8QJf7hU2ycvKj3mJi3g98bEbqfBq85eWY8TNTumvdWpBh4Gff2LyiVmoLe1VBm9GVJfErPLYeA7aXZS2tetY6X",
  "key7": "4HKr1uWLF7Q4u1zJgyemGtMR6iuuPKo38ohREGgeCXt7THMB6cdjhy4tfwJDGHuFCfSqPm6LPkQKztWnBpX922QQ",
  "key8": "5SeidM391p1oZheXULGquD5AjQ2JSeYpkZvCBYaha5NMGY38McUfj4My1fbYtc9huLj9JWcRf1xRM5avVN2Tp2NX",
  "key9": "2CQxScM7VvCWBi1HfugF5r2Nkxb6bUdZe6fjokdLgax29jU6wMq2v5nEFo3ZdC2wPKwQtwX4AebeCMFUBNSczioH",
  "key10": "5KQLir7hLDG4dFN3BPyFX8HEh14iwUZosbVyBYRMVkKBwqa2y6VewM4ses6ow4e4TEt5eFWk2LhKeeXufPzjX2ye",
  "key11": "2DBzUoZ3p6DMFSpZaGm1bRDj41LRVxu67nSDM2qDJawwo9Y28Lv4HZhJbM3UkXWSwZyFEgYQcxa2nqQpMJJw4erU",
  "key12": "4rGjerRqBYDqFRtTLcWZjnM4SsJTCE7ZY5JVRezFts6iYGqTEKohTFdCJz5VDCTPApppa53r1S9CRFE6ZCMMeR8T",
  "key13": "2kLCEsps2jSS37h6ukqUZ9FrxXWPCfE2KLipzmV2KARf2WzZNG15VNXM8LRnr5QG3NziLFWiNHZco6wPv6YkFi5",
  "key14": "443CavmeVGAF1R2Fpotjeq4QE83u3jZLetXsJyA7kRVLyujgFPwxEBXfsig3ZsyrVsvSzN2mscxQDKxnSMjkYrCA",
  "key15": "3VAAqGTFML1ZjPs5kP3bHDmdFurVAFYLoskvQDQX69QehBdQd573hNz8FHbCKzaXwEJQmkJXqhStm3xQ5Qd14znq",
  "key16": "3WJaoFN6tta6bRbj63GTG1DdNRDT5D2BjfrFMpJJ5HKzVcidG5kqTsVhdLdAhSEYJaGsWeScTcDDFFbP3xnPrHvH",
  "key17": "3go3Z7vK3JYi4yW7Zy5KRHDSGWwHdn9HLeJ7SqPWzRj1Kh8TxvqHMW6hA33zARGa7THVMevzuJDC5mXHHLRyMF97",
  "key18": "51kityYQW4ZqtjNmFdiZmaiDMydZrzbvKBrZ3DPvZPawcYnFWcj14ZFijHSpvJo2H7gWMEuiCrSLbZsbFCQXcfsj",
  "key19": "4YHdWCAehwCx9h7CNrjk3GqvoUgXdB1zjcBH1PPRg3oHdm4nzBTFExsnoeqGNFHgZQKf1JQXGJ86DMQaNKNsjGzG",
  "key20": "JwNnhNdxW7GG6Qa7ZAFxd7Aya5bMVyEMiLpGn7BtCtdFbgurGkrs7epLHb6G5BT97BFTPFGGNRunwhLdmmpvRNd",
  "key21": "2Lc7SqWJTDu9WNAPKpSR1Ntk9Vv53jj7S5GtkNxg27irk7XF3hfNHoCaKvpnAs7VpgVRZQjwSCtjCmJMkbDGXiiM",
  "key22": "2DivvHoiAcAaHgsG71mFinATrS6LxcBdRxmBZFozMKupVNrNgoAnvgjRu81wYd9uuzfMsT7jrmAyZdCabxKzsWUg",
  "key23": "EPvDZPVv6cFb6T3tzQ1QftrbXAmDXvnwywVY7c4Mrap9t5K3kgfY7yXbPZperfH2UecSJYruCQJ9LQj44SWM4se",
  "key24": "5tjuochiniaUyKXZ6AxMk3Fxn2GjwkzMXm8SByXqiy1dfpTCmTuDPZ8ZnhBaji5LXzUga5ZVKzAyGc6UsiQ8GB4Y",
  "key25": "33CBGNcQ41Eg8M5jcfq5e5AV6BZQ97RHqDbxVjbo88bns6PXGkS6h2Ahdb23uuC4Jv73XXETLLNuWCbRdkKBP9zW",
  "key26": "5XyTubghFtdq58rEaPG9AKQXF2PVspt1YBy4CirdBGL2dSLu6t56itMcS2oj5BnHc3oRCog8spktzh28JN8qpJZq",
  "key27": "3oLbiotJc9iChxECcoC34UvNhaH2JkHmFVFtTzSTZYvvmJ437eUNuU1fTRtWS8ERaDrr5fZ443QkfGXxEqPh3hxu",
  "key28": "4Lh6Pj8Gan9BSzd97wXGRBApWMsaSSVLiGvvShZkdQ7z2LfYi8dFffk4qfT6wkyBuRe1nepfzwPhCPfVPExZVvP3",
  "key29": "5c5Z7fkTaPCcTQ38euCdvHn2W9UhFEmtb7iLFRyspvUVUxUXAmx1EBGJQi5VyNVPSzdHGkU7Jk4RhgHXw3rrQmZ3",
  "key30": "4xPqi1o3knWSAcCPq1ew6hXA1bqjWfvNZUrXk89XBwj3w8EdqHESiND3YA8wn2PwxqLmxcYo8BPSJXRz3yUtDg1y",
  "key31": "4GiiVsENpUY5H7NXiPbnojfz9YHeDWKuMxv2bfpF3oQJybskrM5YrdYqVzp9wpXqNZF5wPDGTTtGjGMymQ1cxNf2",
  "key32": "VWUDBjk2YjXeQgAbmmUUEn7Z9bN7jvRMFCf6qYcXLF6TCbKUqodSqs3FwUTTYrBRdjoyh6b6EuuBs1pH8wH4MuE",
  "key33": "2fyuiKEr5py8YXHVjh9RAyjFCFKBixV4Joe4GDqPsdGAXa5shKxmBmm7i8tTGrhge4BnRpzqggVcSxtMme4dEV1N",
  "key34": "5ZFnn6w79YirDMbTpN2Ri1whFXPW6LnDpKgQKenpt4QP4sfHsEBF91UzqdsrH6UovvdZrfYhihtfD8mnj6g2MV5g",
  "key35": "3Zp3jiZQ4pCsBPWjVS4nLuHhDZPP8MFYBSNTLFbZRpU1KrLcoKHLQbYsGjQ1Kfzyfu6h2W7uQ7gApgyfeh3PYGsT",
  "key36": "4Suat79YC7AyPQ7usRRsH7fq6RSrNM4po7wbsFzWHyiMhevmTCjeEHMrMFpWjEwAAuYARChVpaa16P7bvsj4kvFS",
  "key37": "5gERK4aQbaMUVBJABBTyafqw4REz5AjQqr7decZ2kdDZWzWrYNihXwpuRfrtLZHtHQBQKkp81dTPKMnMktEoQLWF",
  "key38": "54aBDYBsxbHoX141yeExxooqLwpaNsFhVZKgmDf5f9Jio4nhiibcxq6yQoPyZ53vs7xdzhgth5ptyM6hMYcymn96",
  "key39": "3wzdiyL2EmmCrQKGgVXTTuRCHkUEA4B5aYf5xzfhn4eq6an3ifzKjjdQC2YzRWmT3hbpZuDQVheRSAduDPtgnij4",
  "key40": "4oYxsVX99jcr2vtJqqRm1sVsD16cJsh51QBfdw4tuyYvLHZ1dJ8eUsEZhcLhBq5hWaG5HsbMxVSBYbvK7q8vmt7x"
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
