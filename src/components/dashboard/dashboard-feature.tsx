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
    "2DFsxBW81wqWFCUm3VhAVT25W93RUkx2V5fDDRLJwRPsyejM8hhcqBzNCxiAvTMCfYB5oXkAvLZYFsroJmyRaak1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TfrWVSSk5rSG5PaZnfRxZpJkSH1FEqW17Sj6Q81kvsVCFr6ZD1eZgZCBFjvn7ziThiu3JLg2j2see5HzijQdtC",
  "key1": "3VKxNfA1vN8Wyno5q1xcqrAH3AzMNMB29qYP4hR4o5nWtbxjo1Zuez5d8WU4Vi8CfbzNXpACKsMwE8TxZNMrssdY",
  "key2": "2dywiAyjHj325uRyeuu7BcfjK7WteuhBtg6PFzSZPmVirvRKPYjyYfeMzA7A4EkbknzwdXn43Jj8LxhFQvSYDvkZ",
  "key3": "2pWMSzUtqnqS89uAk7EHGjDap5EnY92TEEZsUNHCzbEE9rXCDoxNFpNRnYh7isPwBe71iRgZXPj3U6h3LKSJL9d8",
  "key4": "49Ncrm26XLLAQkhBvG1h5pac91wRZcWiAc6jnYeoAs8mnA5odgovSUsB6iTgETmD6QfoZeiU9mkPGs4aCz6rsJCN",
  "key5": "2FDwBKou94WNy3fZv7vKb9kx2KNJr6HHnTwCLnqx7ZPt1dD5thtPwzk9U5bpQyrGxFbdNYnjCykqnTu5z4CMgJy",
  "key6": "62senT574iuTQ5G1PKuV5XNMWWU7crb2jkB9tb8YLzQLunAmrwRbBe6HxPeiZCa2SyFmbMFmYgbiLDJhH8eDF1i6",
  "key7": "ZFfKgb6X9CieZC17sMEVZHGTYmxgnyDXHiPENVjFw8pftSBzNNrnssgUf8dEYrdsaCHvDLgo61Y97grvmog8y84",
  "key8": "2hRA6xe38NFk1dEPnivieE43wwiNSuSCWtboBzXUefnny2gXkQMBNxVKQiDGUmjpmQNXfQzxg4FNd8zYVniH5ndP",
  "key9": "36ZLEDz2krK4xFf8vdeGchPagoejKKNYyFpdkMaq1ahYLwZgzoMKyr276kWq3wVFdm4JcZz9v7upmnn9i9Xexpoi",
  "key10": "5AfLVhD2qNVRK4sVzd3hFTrrxK2UBX73Evh6VyR8xvzjnEYHLebifCiG5PQZBpVgrs5CbmFmxw3yeodRHtHVyvcs",
  "key11": "4ZvDEVh91Jx8V2PC5LrwsQFUbUf7gEsK2B5RagoCGg3riNJyXvCCt4ahGNza2rXDpLXYWS9R2dfeSPmbJnmJ6pG3",
  "key12": "33TMrffzRAG3i9k43BvHzg6vMtdUXewYHbpZvMxPugn3fA1W6QqychiLhCNSGvowwARtpX3QdwTZZNcstE7SZNJ6",
  "key13": "54eYKV8Ba2XUMueoduLcuu7zRmBceWNb9fPtqdaNZ1vGpqU5YtRMnh8k5C8Q3ZTyNCreHiU9W11WGgtAHS8X5b5X",
  "key14": "2dHUTVvd2tkvbxNb675LwuSRNwWL257acsbXNkZe5iEu7WtQY1trSvVC4biQhnUjHqJ55RVcpHHgvKx9gkmGAc4L",
  "key15": "3jTP8LmTXW9x9UoJH86EUf1TkcoeX1znHAdg4XsbTHEbpvx9tmBLWiCaW4X81ghLFLpkcLXfCYvmhx8hkiTrLgf8",
  "key16": "4JgGi81HtZ8BDXBcuVswkWL8XZj2oLBSnYiBphBXuKNfE5jhM2zbW8Yhpsefr8pCFhdKbksFuKzuu5TktnsxwAv7",
  "key17": "4EuTNjGupwpEmMoFR4MhbXwug4gN6gZoqHJPjTzXYvBETpieUepBcRHCEvKVqyLkqYn4Gjb7N1k6BXhz6yZdtdLP",
  "key18": "24Cbg7JVjpP3KpMck6EpRY83cczc3hNyS5XzVTqPon1LQAaufd4TczHRhcnCw27u6yzstVErL76htN2en1nfWczv",
  "key19": "hWzoapz75g4Kd8Cvf4W1BanKAYHa8QzLzUexm9XAkB3JtpWT7YpZ1MpEqWxnyD1NkeT5e3Zbnx9DNjtT2BaozMG",
  "key20": "QB2M8GxcshKnVGeV1ojbZAJ3RFPQN9GpyeYiM6g5GHjWZYeM3xznw4PsqRmYg2f1Dn7Hn38NB8y3y8i8h4vBtty",
  "key21": "3oHUoEUBD7o4EHVWdE2tTGnduXS5L2MG9JUPPozjWvZPTbH23zVWkTU9bJWcHwyo1s4ChPj7g2YxohkmTf5eaXn9",
  "key22": "51FFDyr6ZReiJJzomUrZZntSSdxL59VyF9fzBRvVgw9s65w762bvJ96dun7Pen2pwsvZFPsRQM4kKeSjz7bQWbvX",
  "key23": "4KZE9mgn7rEmxfCS6a97QfVTyN21Tu3pq8gg9sVtoW6r7DSczBSUAE4hcFUATErja7v1V8gJ79LsqwnjRQrHV9cA",
  "key24": "qf3BiMKvPCpk5kv4fDxxJgZJ896iz1fFQRsKQ63sdz4DwELRhaeHmwTJaa63SPXcwwn5mNad7cQbNrQ5KZzjTSn",
  "key25": "3c5D8p9mUdmioHQhtc8uZRE4CN64tx22TfN1nzEB1wzG88CXF195PKhyi9qDoNkc8nwZqaEtpvYtL8DCvfgcKzQ",
  "key26": "5GZzh5DwqVX8sHAZbxZPyKSNcD4dUxopQg3aFTbEwKkBvaLeqeRDAn8BPU7gJ9tayBN3ghYDcx2sHenHVkok7Ft1",
  "key27": "KjMDKSxgfn3tKaFcufG1cqFbxpxehauB45AKUECx2pvGgTh97RyTiR53v9HbntjyRPaQbc5N61DhWqWLqsq4N1k",
  "key28": "wLR7g9cmhGh46mkTMWqZ6Rtm79yRRBdAKf2b5wqhvm2W1D1NdHtyX8fKiwid6pPm9jDitE6mezwUjktSvwXpUGi",
  "key29": "5EdARRRczRiiAg1EXuRt3qcJLwDTiUxJgKzaVHaWgPnZf31YEXpcG2Z6QzTKP7bPX3agcGzwzMsq9X4e3RpUvXtM"
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
