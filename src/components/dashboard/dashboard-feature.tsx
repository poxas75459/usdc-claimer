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
    "SytjJY8MZ6wr7EG6az7HSWNFFrB5qkQFY2VV1kCgeKV3CmmJu68vaxJfYQv9xvQW37WsvFikAUveqWRrtKnkdWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTRXHQrrXm7SqbzjQQPo56Jc5Xj8BqAuCrFEiuKMaZqfFN4ihMCK3QW73zCUyQPkXo3HsqAaZ9dvs7K8Ye2JzMn",
  "key1": "3ziLu1SabLq56Tmt2u5JuunBnpns2CXquVrciPnxbprMnfXZf2ki9RAwMDfbJgwuHBCb6QqUBfWUjVaPU5ozzXEx",
  "key2": "WCEMdhFYG978UjSHqWFLw1EiuEEBWodWuH1xGP4h61mUqRJ3FK3y8dTRvigPJPPJGz8i7ta2fL9oa2s2CBLu2j8",
  "key3": "ciq4J27jzcLhV4WFKc2neqaEhKq7iUWE5DbExA5oPo5cSAjwQXDs2SKvMpwirb7wMQSLP8pQUT7NK5eShgfYGoG",
  "key4": "5MRh6id8qGZYqWBqv4UkJXRbc3guyrKgq4qFF3xRgLfm4LSd1zZnxZtNiEE3gvaR6qxCcGvSS7PCqAc6HfQpVoQn",
  "key5": "2JXGqHS6d6UQr3UGEPx6jo2jHzFrsND5kAb6hyhfZttpJCm5RLq9EhBAZeyTweXRdDc3yD4nNuyXnCaAtNcbzhWG",
  "key6": "2MPhuJ5cGVETjCJKB52Zv784gAzQW1EExmJ2QrnN668Ke8gNEtZRYpeYy8bgkDNfHhZkDGvuTBaCd7oJUuKs2d69",
  "key7": "3E82v1hwjuFSTSxhVThJaazY2i6dKrAZfLz86UedoZqezcRRpXmkBtoWpmJk8eGh9fKBgakFuQRdibeVsWPXJKrW",
  "key8": "TYBtWR8yjAfZZx1cAWuXkcaBnKDmf36DHBxMM1N5pUXUbB61r7kdaKraRZGGnqEDxrk3wNdhCXfM6FEUYSFoms5",
  "key9": "HYFRv1zZSwEGN6TrUkJYUGm6pQqxP8XXrPUz8oHkGqXgaDm191vQekKHD23MQd7bRv1Xwq7cQzQttv8sMytXP5Z",
  "key10": "4rHtkZAbGeiL3hRC8uH8aUE5AXxT1R4tB3VyeWUK7YaRiT7iX3C5ZaegrSMHtgixzLwuNnPoRabyi5dYteK5LnHE",
  "key11": "4G5rj4ehukfeNxzY4weRqoMQoVY6Y6zxzMngyXoktB4d3qQ7rGpft6HsM3LvPpTJmcmUQ5E6aGupubsn12Hj4a8B",
  "key12": "3CXtH4UybzWkXq6qcJ6GWW8eYgDkg5Md9fuJqXXWUn2TZZ1BzgLasATETisAsqy3448gX6YT6eZW7TQCkeQc46cG",
  "key13": "4nARcRWjfvFZpXcUGMnD9PgbSobBNfnCo6oCwaVvk79g4uzrhyuz6eUcYK76HQ7aKzVo5NaquSkhRnzVfEdzUqyP",
  "key14": "4926RM91awgWF4MwLPW3CLN7fyWGiN6M6JwAD61CibV6VQrEedrKSbkquNycupVWhiAFaCznJXbNLr7LUjZfuSyY",
  "key15": "3nPGkRu2LQz9ckaZuuiNZgTiFQrjcxsEuA6kBUFg3CvAbd6dfUnaVq3QoN4UQJu3hAcXXqxJUeBPb7peBxcZACvL",
  "key16": "3aGJypSiVhBiCMFraUWBEz9zkW2VExxLWBoREBkZApYcp2rV6Ry8uiqWcaNuV6Xi2buNRJBp5JkVLEUnERNs8Uvw",
  "key17": "4jRKJEA4eQneK8WF78qtKDPfZXbPkoVXqdrjqC3Y75Bfz3x5WV689xgt8AqXPQmTx2Yiy4zwnkF6qoZ6fUBc325F",
  "key18": "FoSENGwAXtGWCwkk8R7Avr3qK2y2TcJLifWM1QApHHXqhLGbDa11SjwiaagrqeGcASP4tXyEDgHPrDYoiKNgLrf",
  "key19": "5fExpkZro5Sm87S5rgS1KQRSYMWtVrso7zSbvCZv7vkPxHZnfuPputBtcQSJCR7t89f2b2sz1bMxyXY3coSgdp6H",
  "key20": "53u4FfSQvqjN1crswTpve7LPyTca5PFCPP4Fw8nD3RFX4jnP2687kCrLLtiM9K148yRm8eBCpkbP29XXun5btCTi",
  "key21": "66Ta7ENQvR3pRF5hpKyXENqGJDafTwYfSYaytNFRpEH38pbrpgeHZpBKPgb7nU98CzpVpF9FhnqAA7j5e3XuyAdT",
  "key22": "336rS15fv45ZxKSxumGt8VesK1iTYELvPKtpBBkU4iTKZutrtS7ErfRKEVa5QHjtXmvUb6mnukfKnrB6vAjo9Egh",
  "key23": "3bYpdpdBCpHFwZwerhWmghKX7vhPKtCkWofCubxVonxEcXu8UsifkCjUngE6Jzj55yuRdH7mwia5oDxV2sw5nR1D",
  "key24": "3rY7BiJhDkxTTpBvW2yArWNDhoAQiTLdyFBJtTZ4kKMwtNQZuUDgSYLxAvRsd2t6YmR7DUEuZLgngxPvH4PYMVPy",
  "key25": "PsWThJ6w97SVknx6D8Ap9YTWbecbQZrF6i5U1EiMnH64FBrsbwrDyJk59e1Hwnc1YHzu14VnpnH2qDwYgX6LgXT",
  "key26": "3d7zZi9cYHvXwjZqHpwVMFvEppygnE4iJ5oHt8jbr76hUCZJ7jfiLymBvkpaT5aX7AUERZpTajSjQtztXfG4Cytq",
  "key27": "47deGkMCGS5W1K6Gdbmdghshq9nJebZznyRqMXRcRxFPxcGRHVnbAnCM8vaT8GF4xx71ZkLNTPXcT11zsxmSRuxh",
  "key28": "4XgitURpMbFptQiez1qV7k5cuDMPFtiSnDMpHMRyry7SfwVMhVWDxchuFCxD3rZzcC1Gqv5phLK6nwUs1TS3m7B7",
  "key29": "GzvBFHxjJpnPhjmv82SVc8YnfEZ7yMsP49RfXbaAqLCdJeFikcMAuBNQudAY9g4JiC3fCeFzAfAZSksHhrFBjTU"
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
