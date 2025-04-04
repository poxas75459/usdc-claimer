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
    "2r4mdzp4BxqVoJh2mjDqjYqLVhus1ECFTm5r2BX7PSnbYkTA24ytei7pbvQujcySdTGYQRsoHj1fXXAyM6KwDBLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qshSkHyb1Zhhhu25YmTSo99ibrTnEJwr3CwjmuoEL2y7FJ8D3fKBzso43GtcvTYZUpb5ZkmiaQNMXTtRTRqR8S",
  "key1": "WQZqMuWsNYfdvBcPyQnX5XmaxnBbhHeR7vEgc4AXkUtNbfgqUoKp8qhncjYBoGcaH5cwjX6niyUnAsEeb7WKcSK",
  "key2": "4Cnst2VSJsAsV5iCAt95MLyLg97N3X1MWthLSJaftjUmZFoFSLE8EKvNcrt9BHjCH96BYP8WPKkXdC4L8GezKbCp",
  "key3": "29FZVYr4GSYnnUwzjWH5cUXLAfkyWdCP8pqkCB5irtPnq22nm1tHqAvkaKkAe4DhJ4fE6ErD6GC33wegcsEV8ahU",
  "key4": "2MBBoKaYZGZ1ggavUNe5NwB3Hxgnw7WYxnPzp7qTqFmVYsZrKdMbNxXoPxdjgiRrnzApEW9h9rJ513E4rYm49PBP",
  "key5": "64gahUoNkzW1hJE3JtnXnED2ubT7NSHAuYrwkj7c7AWAKhQZctPyde9aj94oQ9KHkmvNg8iQLQyHh7Qa1rAvg3iV",
  "key6": "5rkvkkZodHjDVoJezKg3bxqq2EhrVLVnTtoNYg3Dk9f68nrh5nHgCG1dyvBPLWTLCg8TnwzwbKQwRAjp6fK7MBWn",
  "key7": "nUd4Jfq4zBDnUX8rvAp1h7VHTTs4XUUdEvqE95ckBjRdLWTyRDSf4Do6PgK1ovb6BovXBC6UHjL2e55FVhmmst2",
  "key8": "3VHzr95CKnqgfhqFHVWUcoq4Ln7vsxBgiJzUEUD9iNZ6kZqpbey7tu4CiG5ufyj5t8SvqNN8U1A4iRnGRBPv1yay",
  "key9": "3j3t2gZZGUUp3HJ1b5me8qKcVUGMnmTD344draj7mi6gTwW8LoG3Vjeng2PsSyPY9JN9GsJ3BiwKoyQVt5Ayvv32",
  "key10": "3fYuuX7Y8VpqmP6YVKjyhVtCtbQ36bHsv9by9HC9FX5ZRMFSGk5y3uG1E1VQTmABkMKGDCXgW5pH2gL2nvrWufN9",
  "key11": "4HGPTMf6tjx3BiDar84fNg3BtKRwq31a8EbMKGTFRs7S6j5KaC1nxQLDoEAvhBsAwECMmXCaPxek7HnYiWXfkNJJ",
  "key12": "3vkeavwG7bQ1ZuiBk5nVW529fUM9Q2GGtXm8CmYXxRJNQXoPZzobWMJoPre1XHCqygapctVgz9jEF9Ws9CZGVAt9",
  "key13": "2Te3zTbEoCww8Ye978ZhdSnuHiry5Taoqqe1emY9UFumPPJ2rQVMf8FZ3Jn2MyBUYCzne7wiFYLjnQcst36cwPmw",
  "key14": "7sXQRaSH4CjWXgZvWLzWkv8SWE6ncXeV9BECdLvGsvNM4ZSLZxdDagj3BNas3KGgCDZXnj2YfgYGLrCPKvkc9Lr",
  "key15": "4KrGnMRWeDuGYMLLR89dXuxMLrwYR4jcFAkBy4QdkdqoiL9P5F1ZWBXthz6bdsd6axEuYK3PCccF7aGgV4zmN2Be",
  "key16": "61vZpwsGfS2SPsDkjadBjHg1pFxo2qMSYQRRUENXHmu2npNpbanPX7RkpYWMF1stpgYssJCm3yw6YHW5CAEfRUS1",
  "key17": "4yqXDNPnD9MLTGqLLnEbKw9Yr5yMdwiKBQpm4mzR6dVpUfAPnHb3LdyWiw2E1d5vovcCS27MoE1WHdv71uVtYf2T",
  "key18": "2cHCmhTYiaEaSHBd41zYaqnW438iB4CLSvBDkzpVDiUoNyoKsQ1QEobK1G9AqVSgR57BHnRwhjXv5DggbCpXtYCs",
  "key19": "3LgKDtZo1ToPnkKWETfA8t67EAUSiHHJsT2DxiKg9jSDF8pxqpPqpTBUNrpbecZW3etqKseLSdmaVFnSoEC3CYSG",
  "key20": "2tQpZoQEX7osXGkYeFciqRfGJJTsEfArTXZug3DPJjU9z4m1sonj8XFeFnpvvb5rasLnxfnbZJmS2GAWbtHcTNeb",
  "key21": "5MxS8JU5fUf1U94MvZCAPrDehf16B3WiWZ4r9QhDjYAtMZDnxf4PkCurDdPHB7AMe6aiwH2nw3vjwtcMATAEYf8q",
  "key22": "i1WSKCXyzVSq9gZfC8SeR5rk2PmEDXw8WdK9VKVZtjrKXFKVjPoDb5zXfW2jN33hC15CSeZ8eecT8WmcMMccMQY",
  "key23": "wzegSMe9svNBdqtKDpSzDxBfr1NF6q4L3WyQr6kRse3nVVSocCdHSwpGfV3N1FWBj5UZUv4VEtmscryhfr3yoR3",
  "key24": "3drPrSo585cscpeckMJqCwSHPHc6xR7FkDuxzC5eff7NUoMnJPexXk2A36RYoN8Vrddtv4gBpLeXmD8AJAky7Lif",
  "key25": "22p7QFTAWgyE8RAGXHpDCTf1xWG6vByrHtMxqMF7oKUD7Pr8Pt9A8HREVEPjCZKxGTiwnQXvsYUd1WGk8kgdT39x"
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
