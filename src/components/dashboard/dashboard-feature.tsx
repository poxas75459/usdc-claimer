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
    "RcAbtvtZ4nutGWBtXGhmotGJ4LBCrAEZAyg4p7PXLXyesLpoNgdPShPPLs8rsJdnztEk8TXbDPmYZT7GucKoyF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YFHtfJpYZx3ik7snRhg9G9ZaTUVvqn2PYnu5WykCtG9vf1C6LFcwzdcbBLDjXv1jFzrUAV1JSFd4noMwUPCAkJc",
  "key1": "4nVEgFsHGRzAWEgqcxNYPEkDzaGZD6F4tvu5dhT1mC4wNZX61cQfb22P8vssXaV2S8Muayybc4CVRkQHNHa35gxa",
  "key2": "3k5SDkVi2dd7UXqGgAWyWTST9idzTVop5cGxVmgGLUXSof4FyCqkxzhD5j7Ec4ogmgo1qDzdvhnyPQm7ZfWMazct",
  "key3": "2mAAD5LuwNTgNMLPe45hupcXLDRhSHmSb5MrhXG7pitC6zAs3mpFNcmRgBbA2dnPihsv3FpgHqp23V4GhaJeHvS6",
  "key4": "2KKvnYFe2d3sUmv2evWXrWotJzQ7JP2ZuTquuvU8DD5BNQ1FhxzDUW9vHdmRzytcZV46mUCjYbisNMLJGB62kiqJ",
  "key5": "4BFcewRMnfyiw9Kvhr6XQrK1bSwdzu63hSCyJWt7xcB1uqV6vrdmfy59FD4PejciPFNG5zQLTeX5Z7Qxj26S97sy",
  "key6": "46JjBmVSEHU93hCf6P8eZTGa9WR9rBZPBQtSLoHXJHcJZsobhBAnoJb5VQEsvBT1QJBGJLk2Zeb8tiJZXd6988G3",
  "key7": "5yppadE5oegpkpNjCb2kBJydMN9HL21XVkWzi1rfBk9e1TxDPD28gLiEAHkRxT6Kv5Ey4pEqP9Sbyq8896kRF1eS",
  "key8": "3GEhFyky1R4qEaf1R4XxJWUv3GkUK8i43MvFBVhW1mBaHkyinhwaegsW7tMH1AWSULCA3cJ2WJ7wFGUkqogod8Z5",
  "key9": "JVb8yiRThsd9ShEqYDfsMkno3XyLhqUZqDnPAVvpDNuxQkpNQv7sDU9ZimAfRvayWGMNseaWaxqaLSjCpUswjb7",
  "key10": "3qWbaqzbVPzKf6DemjqKPmT7bGNJZyLmmdd8K3eHGEsGCfwx7kZi8E5rLCPHQLKF4XULE87YX9RLAqQiVyJRnj8z",
  "key11": "5mrbQcRrEYaLzz4qK6fQDKCUfhbi7FZydRWn1She6FSBr1URjatpxvsBSSKxh3NWL7So8kBYMfM1tnz78jfkxt5L",
  "key12": "36zj1TXZc7kQtUikJgStgTBg9HmW9azUQfvH3mPnn1WX1eQVMnjnf4Q9RHsmbCGVzirjh2jfiTPujLBTAszZZzni",
  "key13": "636t9ejjfJDemyet9UFHc2DcL5BrkssauHxBmvkf6SQG8VCc9gHMjoLhzweb2y35bveEBAyMnUreuwq7mQAfvXaH",
  "key14": "4qWLJw1T8LWhyUVK49xwsYzwUHXkFB9jCnGXwZNMKBRRcSxVzeRVMELToyemkFTsK7yZ171zHt4dPRSd1VsP7tv8",
  "key15": "363VwG1nQQ3hzYNYBgHZepumXaCZrrJT62r2wiFgJDC3NRRan994JKGfbCHe3LQ9bgx4pQTRF2MTBvVryQ4Mpu82",
  "key16": "5AstBUwjeXFgpbCFZcyATXxTRbwWn29i2qrbGDkMx8jMPBBboiq4ibZM1WH5jpoDSoBPYPUqS5Hq7ufNvZkeL78T",
  "key17": "4AvpQZB4rp8X62pJivjb84YshSuFgzrG2jjcW9eTJpYGRdwSYc6vgUDyh9cr5whRhPuqtUY2rRMWH3WkhYvB1DMQ",
  "key18": "4XBpHYQLUvmJK4rgxwzLRQZe46kPDvotoUAH6Yqhit3ky5PyXFCJHm286V6eofaCJYWyw1q6TsJ5VgcRL2ESDixx",
  "key19": "5RcLSCoTmtERYaAaVeGYABMhKDhBcogKZvNjMoKY8CoPJnrakbjj9Nem8neTeYCmU2cfjfD4Yov3dRgzpPfVo1tq",
  "key20": "2b3VD1ivjgMeSreVvKnF9CfUjFoLLFCgDehoqzDb9oFHjuvyqaYo5Wf7EaySKp4fkWJhWrWokJwXbEBs8EstL7Hd",
  "key21": "3gKssnW4u6k8fSFC89SBsvrHTjk2wgTsHBZSSqPvJmC7qVMp4DfN8vq1JWdXa4nFTFXyjXc4ZFpiBunKwc3BtNvy",
  "key22": "4upiyGZJo7rG4skFXxD8jANS1cY5nUDxNbTC8oi3d2fdnMm2YxJaCYgErd7YnReGVGu9jeN7d9Ao1fst37CFYcsf",
  "key23": "5fq7KzyJY2WJ5UgqzQzFAV3ormDRUGsp6gcEf9t5cVHLBMqpeifWnX5X8Ea5NvZ64uNtxDwp7dfWZC7GaVHC98jZ",
  "key24": "47LMyaKpJ54ydy9W7ZiCY9ihVUHD2LTWZSwU8HdCY2rTnYmi8WWQbxm5g6uJvcoHXdvpkKGcPgq8pdFWmsbmmgn7",
  "key25": "3cg5wrR1SuwuVt2UNiLwWsVZ7XLzV8f1QnNC8ipAPpxpbtzUniTzSbE4KdYbqMWY6ckDpq8kSAq2EveMMV9NpNED",
  "key26": "4pNWLuJpCArKLiNfqg5HJTyRbmcSE4KqdLvN1hgHeHTfaruFg1D86mbiL6B2whMMtAivWTDVvwspHEyqMaiRZBjp",
  "key27": "5NGptApASk3BRozL8XVZzRRnwS5SZepjiPYqLzpKugmPVuUj2K4k8AYrashXmGvyPUXQf88nC3hLdPt6pqJ67m5",
  "key28": "4w4HiTxgFkkJkraUBJjU2SALVSdUauAKdKXwC5FdQX6KEpRut9gtZuYpf6n3VCHMSB5RrqmhZSftztvJCVcT3izb",
  "key29": "3o4MRb3iTrV3RjP5zj8KeBV5AEb1dGu4Toj4MgMHwZ9mg4Sj5d8FeruTaxvzicb8eXN3uYGK93r457Utp83VzVTB",
  "key30": "2M5hxopwajwcwLEPRPx9KtN7uPSLMwEWn8qogHRDaEsZtWnByMdo1672Mpi8ANqVCkkuFbBPgumUe89hHzgdikDR",
  "key31": "3VQu7ofCJgDdTSB7zv1hV26HvohykwoJ1bKaqBveGCdvpFKvSgJSJzmR1Bi2gLWq8kRoqzY2eaiZXEerUyb1Vm8",
  "key32": "4crg4CFpAs2h8zgegSNLxLT2gazHsgtYYyCyiYyThDaZB7qj4dnvvVAmrfcbdR35UyAaFg2KfFPG12UYbubBMqA2"
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
