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
    "4J9sJhDG8szABJu32obDmAdxyCdeHN3WXzVGXymqgnRDCcKuizfUWUWochSKTxLVJbtAugB3xK4dRUfHi89krMKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MkXShSVpXiq7kqDoY2y6trs6QBcW4SiQtLFJtXS4hQtv6WSChFzY4ZPu9MpQGqjiNrnLmx8ogqJVMCpXrrbp8G",
  "key1": "A8nzmXHsxFPMrPJNpM4dcD7D1XK6gLgaBAYq2MWJY6mMsHux1sJUfxarQySk2PXt3SCnCE8jwSM5sD4jRiP5Dgc",
  "key2": "3anRmNxevyhCXNZFRTuRr9fLoMnTK5jSk2z3pBxcn3Bfbp2asYGLDsbuXUZahu7YUU9BEwG2YLK12SnrXYfJPbeW",
  "key3": "45EtVmyBxMQAArSt8Z1Kq8xCjaHp6dtLC31uTGijHceeeDs5vAoXjcRDKzrUiL2dkDkZfWjJ52ht1yuXA22CjyFt",
  "key4": "Jj2obUEcHFpTkgyVkgxrU6onhdvLJHVJ1t1QZt2YrSABXFMCzPGGb5vaEjBBFpyxq4tnn1pAP2U2Z2TneDGRAx6",
  "key5": "iRzPbXv7XQ1KCmdckwGFnUj5Fhx1zKGNoA5MyR7TpR7Md2RLaC1HhiQv73pgrSEJdu1LTTaCsBnWXpsvgeWSW5z",
  "key6": "KgtNbJrrsiSaoSrR2ogrtYrxeokmSwkWGLkjy4bggsARpMTn3dGTg8Y3CAmUHKsBN1vZxuxhmoFwgBynyr4syDq",
  "key7": "mX6f5BhPqEW3kaW4yyxbhJshcBuZ3WqpRZKgVwzQjLXdnHrB89Yhbc9X7vfKWV6uKyFVZXSLu2B6SZhachZXjtH",
  "key8": "5jKmNxbygD9PaovRwjnfBK8bEZwZjC85m68d5pPkdJFM5dJug4mTCFD9HfB4Z3Dig7fhiLcEQsed6FZtVev6uqGN",
  "key9": "4hq1XveZ1BXFm67HDmXwyjg62vqP1c7JvfSaTZNkHLtytvJEQ2RQ1FnPsUkjfyH913vjWbKDmybLfNffTb4pMrBL",
  "key10": "3re2kzfZksR9RWum4jSK61tBDBK7f1HEDdQ2XrNYG56qgCYicXPgkmuK52TpwHcWAEwxcza4pVQ8Bko7Mk71CDv1",
  "key11": "5itvv83Yt8ATCVHRiy9VRbgkzJQWbDjzMQPVdi2dhx5DFUg8Wcak3ASFSCTRcZBSqCrS4LdMTrBdyV2kgnFtFGMm",
  "key12": "Nf2LptJrRRGhi4oFK9aMPRZznvSY4drnqU59UBtJargRhfp11q9vihELfwgLteMUAafzTqTRMnKv2rQ34C2m3Qi",
  "key13": "3Mrmjo9o4oG4HQgqq3qXS8s5zzANxpZw9KNmeHoVWTpC3yz3RAt41PwEs2b1bZQtJNfysjrD1GBapFyXihDgWqC4",
  "key14": "59uTCVwXqrKBm7XVJd6S6nLtva3ALV9ihAJfTMUm7W6cnWrFoH2Pt8KERMbzC4TS3tTtrKzBUrw62cpHo7oLFe8T",
  "key15": "2JD5N3VkGDFJpE7GB6tY7kfzyfzmaBrXVKiYWbo8yP3iq13x8B3y3oRwvrEbdah3vR17d2tXVC45y2vCC2K5Hs3y",
  "key16": "338XyCBAG1GrhXy1nnmMCYvP7JhbFEbguC2F7GugEVR9Fn2qQamFeRhKcrukwCR1Mx6tmQsUMUGR8yaSAmk5HGdW",
  "key17": "3z2H3Mry33RdS11MvJHGtayd2pRrHHTkyxVWRdWYrtUg2QA1dntrjv1K8PuzK4N1oapjmnasau6LDX4bgamYpHMz",
  "key18": "4jrwC4PbEa66VwXBX92QpPcw8MsRJzWDPmNVgDXSGEfgnCcaH7v45mLBxVLFLBJ4T3uagrAhqJB55SN1zh5AAREN",
  "key19": "kQnX3GzgS6dKpKAgJWwodWVL2FEYApw6JJyL2orDt9vi5kAbm6m81oqUjeQ7EpTXu49bn31VrCDArahSCnf3CRC",
  "key20": "4ja3nsikqXd9ygsvWt4hKtcEp7YfpFn7A2jLd5fUVcmkfegMfYRnGnzsk3B9d45jLew9NP1VRMUSFQvs2ngeYXnz",
  "key21": "4m24hepRUU6z9EtYQ3MP5Qem89mzkDbyfg5LwpMSkmG9FMEXVD3w13wE5HK1t5N18PBpjmirZM5HNBzhFV3myiGX",
  "key22": "2iPpfDUng26QzTn94PePV3LXQDqFQDnd8yLn3U83DHGjYzeek5VVNHHz4iiFEdkTcV5ixVwdmnArt72gWuxw9NgX",
  "key23": "2J4QXczYreEPCLpfS9PNC8hzwRNhYiRpaejdhvpVy9gzwPvKPPMH2jeJqTBqBPy1cFJ5sfCqbZ3eLSSmNkQN8oEw",
  "key24": "64cAek3zQj218wpv8kLhv8w4sG63nM9kmWoFoSx9VhA7xvojKPvuwP54pj7gXmMgkDwDNDBjd9CWhQRVxuRsiySp",
  "key25": "5hCqQWfeqyDB6adYfiTbkP4NcmXHrGrA8va57VmCGupgbNimDX8pdTNBFMKCPzVUD1TYFPGPJYRuv89e2L2D5rCm",
  "key26": "5oMY3T2Us8CYTTtHRSqnFaHm9jfT5742NcRouM4B1DjxR1K3wXXFYxzccSkuyPUKDwWpUqPm7TVcVckWAoGKyqWS"
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
