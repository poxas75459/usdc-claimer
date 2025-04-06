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
    "2K9yigYRq9mYjZ5Wv54XSciUJyzVMhigevNEd2Z7DRByJKNn6Z4TKkXPTmXgRHPG5UVDpra5RckhiXJRsRbCpSSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhHwzhqMemQmLsHsu9dcMiSogjCfB4Rkriv3DpP7CrtREWrGkaLxwaey7pmwrreghGZDvwtufrpe7fT78w4SKWC",
  "key1": "QpAVrbmcPmzd3h45VjzV8AQfMHk4gKv6iSYxuntdJ5fi8Z7nHPessVE2KWeqr3em3BroL8TkH3pZBFuP85eq4Sx",
  "key2": "bAPXjaSh8nsxkkY3t9TEvg8ycwjCgGfJ4hVPavxWUmx9XyrjX1iMFpgg2qFhBuUcpMFYNowzQWKnvoRJt64ZnHY",
  "key3": "41DWtASbJYdumSZ3oTYLeFT861CAhJWx6BJN5EFi6QrdxDppvC6pxrBFam4Z6DFoeNi4SEdkWDzLMSFkn4HZkJvw",
  "key4": "35JWhFGWPPPADqQBanfZrLWv8iJkbpL3XRdrmGuJ75VhpPExrwn8jA75ghurpNimjGbrkYXCzxjBaCCJK58r9BXD",
  "key5": "2yEMFgnbM5ckKe3eRePkU5ncNDxqhvXchomAomSzYFAmYqNo62oRqAwasj55AexCdSQz2M9WBH8Zj294rouYat39",
  "key6": "vUabuCWdy4CJiAjxxEQQ82aarGQddi9c9bZdH9qiDqKjY1rPorpzGzyS1DHoGCMC7sUrR85Di7y1SJyehB4SDhx",
  "key7": "5RVoh2xCGEHN9EZCVan8oEywbSAFogsYGi9DHz3YbNeC8q8LgN5fodibh6e4bqgbnYHh7FxsNBgxdna7m8p3D7LZ",
  "key8": "4b3tq1TnpVceiwhM57L8Yzyh47xKSjrDGa52hbMF3HvySkFPqybT9DQA2rkvtPmGYVXgfyB8V7yh6kLTSV9XsJcZ",
  "key9": "2NBSfuUd3zLF1SwNsE47KkXGmAATL1eXbsCCvBUFnCHmYQRP5fmYJczdU4HUFxGBHgXPbTcZ7eR2UJzJXgBAiyXo",
  "key10": "uAPZMWRFJYecTf4QJqeSdsrhfaQ7wr5uFXM7QbE9YjvX5FHvNvHTLpZbhu4L1hVYVAZRwxH4ViKCfUfsjnDurVV",
  "key11": "2fgcxGxr9tzxM2mgMN9NGa1MzPRFRuBjVxEYXcJ4byD6VeMhNKCzoPxnm7dvXztrzLyWhqPsTWcs5c46cnC3R5bJ",
  "key12": "2843yw5VVjqDm9eJ23bc5mnXdr3awsXBFvN7JAwugn9Gh6Ed3BW3Lt2dvU27gQcCHrWujq76JnZfEfefix6pDiUv",
  "key13": "4Zgr2JfHwg52FcpyEsyTfTfusLSS1iMLJhMELVsf9Hoi3YHg4DhQpjNujHs4he1N8Zs26FLRJJNjWGnKdrNrxaAq",
  "key14": "2iXeXknUEWvZjV1Y2Gcj2ChiNA53m6DAGp8eWxLHcpZAeyiP2siz2NqWn5feQtT5vBDSVvWL6nB7QkuNpCmKBznQ",
  "key15": "61uCP7Z3cKQDMM9Hgc9wc3jwUKg9J34PY9pLeySDvBGAF7KkXccGw6Et1H8o6Snm4HSKua3QkiU7azJk5EVrh5Ue",
  "key16": "s7QUJp2CfamjafWv3hs2eHwEYEt8W35B4E5Xwzcyc6e94bDNZq34kNDoa2Nr79zS42w36e8TtJHMbxEz9XWHnU4",
  "key17": "34BqH6KGHKWiv7dJoWvB5deSPJ7Pudurhs5g7WcCoZq8WszEs3FpmBMmazC8GQAExqQ6FWcRbD2vAywM5gmvykYJ",
  "key18": "4n4quf9eqB9RMMSuK1Q5Q18Cc7KGVS1C3TMZFHVcUYaVAeuyNesdRSKBLo4Pp2H3cfRCBJLcwgndYBmRQZz4fZQA",
  "key19": "5gwEpGKuX3GgUEZexi7AYWoVc1XqJ4ipCZhsh1Rx6L3tZ1pVyCGhfVZc27n3mwJxcnZLJNYwwV8RPky7MKuJXBoi",
  "key20": "5U1V1fT4ieVEGYHP3dUQNt8WYRZcJnK1ivHXrKr6rUvZkgB9vopbG8SVTnP812RMjjWYTB8LcgwDfn9XRk3vhHMr",
  "key21": "4QsAFpskdzgJ2Rg7a7C6fbEah4ugcJFfuXP6LfarwXQuMXi1sTRbmXexGS5TBb7eieWhoJCBmW211afHoo9FBUNm",
  "key22": "4Y9wG4FPcz7eUhctCPDYpUPSoewmps6HvHkdLxtydngHwDG3ErCv2g9zqLezuEDQHvTQeUNznyFvgSxDhg6oxzfE",
  "key23": "5fcQdjGL4fHkxXDYBjxSBXN5DHFzGRqHLYe91Arh3B2pu7EaZ3VnUEd8qMoxjsziVWkNcXWp4bss25RkfYmhxwWm",
  "key24": "67KUXpqoNftU5K17Fb13paAsezeibMo5FuoPRAwqEXVMQXxW1yqkEaH55od1fGHiGXSqgENCG6pXBgxRXECz3xBX",
  "key25": "5kUECpCMUEN52J6nHfqHqNN8oFfjsvnALfdMQK4wSkjJDFdLGNJwq643JVNNW2H3bHb7bmUufSbrtDPBS88JW9xA",
  "key26": "67XLztRNKSLd6bGWTkQt9nNaY9JDXgycyugeyD5QSspawswks21nz4PXTXrncuDHhNX3YoFQZ8rVHRjf3ZntRLxn",
  "key27": "3t4XL1hQLwbRnDZ6YgsWvDDSSc6VuuMr6cN6Za6abV9hrhTns9LjhgPQJbBbYoL2nAZtVHhLDELuXXHfRR6bQLpf",
  "key28": "2Rxu1rgvmDfvBfj6sYQuaxp8FhNFyPqm6nmoN2oTHGMytS7UCVR2vpeTtsjuhtNyFx5hG1fmiu2up9fVAW4PZ6Aq",
  "key29": "557SoLaZXfpsJDXKjpWK6YoHCCzXiwyubCKKpmc4Kcupu1rAckNLXviQmoutJYdw74upGcsD45fRuBu31SvZ3Z2H",
  "key30": "4ssRz9fAtbvZt2CTaZ3wYDPxVDn7JQBmPWB4DrKGkMC55CBb89njbxnhmMMhMig8kULwfXiGBUsLw1RkTSSseLTf"
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
