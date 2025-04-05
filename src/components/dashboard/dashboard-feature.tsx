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
    "3fWbqEHmCA6ezCAu422MQJ7JLwQDQL3CmUh19yrL3QhrTWWAiTBwvZEQ6sZExGLznwZUsLyW9kahrjB8vzHyZRQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7aTvmSmMQV7yv9JYdX7WrBYRuApnAMDhETmRAuLv6bwSyAW9DxbdwVQtLtewrUjjPsHFDt3KjB7ewofR9dzhQd",
  "key1": "4HfjD3j7F59FappGAKQe2noquDqRWV2e4iXX7PezrA9JWpAjNqKmp7s7czk5BGXVziBJLjmPyjNkPifduBpcXWKd",
  "key2": "5Kj9KbUqeqmMiQnc2L6psjkkCe7ja5ix2Q3RLu7GJVe2uptw8JEGfBzRXE6rYmz4tuDPQjqAXp2i56wrmgU3ZWxL",
  "key3": "6RV9MW1NgzCDds2Xbqg57poP1dYFxQxAjmuEmETgjsDAsHwDB4iLySxtHXXMqSgrNdahKgUASTxBjGpgra6oLT9",
  "key4": "569zWTRxeBnm1hakiyNUgbfj9nuHxG69szJCbEp4UkngPSB26NJJwLYmtGSuUHwyVcUhuqjUHEb5PAJNddgcFAhs",
  "key5": "2rurivXG8pKFyb33ZnjPCTb3RWcWqmBzRmzLRP7X79wzvQeE21zdGtEiBqVsZXgikFGkaDYhPdgSAdmHRuUdwD88",
  "key6": "ZCZQhQQcWUcR2hrRCPWzrX2RSWwvitHMiodqxtBsainRwMnYH5JoKTeEGsCiDBK1Yy8BZZwgfzZfsw3gkX4deaW",
  "key7": "39hBMmdfhkCc5fywSPgNWrgY8Ng4nAMuB5z6aHC1QpNMaszgsprQyTBSBqCUqM67VQhfrJqpkCi6xaedXPfkJRxn",
  "key8": "3FZxgpQt3asermgETGNa8p4FecRe5Vm9DYvzLbxABLbztbB8sYreY9rTFtgeuRbFE4ErjD7vh7YK14VEXtwHdcN",
  "key9": "42pZQZ5HbkJNSAKDjG8hVWaPS1jxEANrXTFPTFZhciaUwbqunPZ8GeDmMYw9kCygkwdchoo1DiPKG83suEuz65WF",
  "key10": "3NckEh5FmRgGi3PxC4LB3i8rdZysDKTMj4hQu36Z9qQP2Q3qf4hvhT7mBo9RoBfRvMbFQzSDrWLadNZ8rvhEsxfX",
  "key11": "5c7mFLcV6JT455xmUPPCis1R8A2ZwCrh1n5FpV7x7ZXfBTKN2Gbpv7vdK1DzXbmyHbddQKHVe1gSctNqXASncgG2",
  "key12": "NVCaXSMC6oqbEAu6TiLGgkaG6NxQUtzkzcafhJe5zQkkPBSriTVRcnmYm9jobvpv4WeqwP5B6mprr4AWNg8j85Q",
  "key13": "2z7D6wv7t7JPMvkfmxkUWidBDNEp2CbMznKStwcJ7btwse2LYtTzCk9MLbXQM8ntyMykefdgsEN1CLuq5Y9dGtAt",
  "key14": "2qhzerJ4wbnLCtAhrK4wyLUudpq5iyzXioaVNy41KmQjGfBu6fS1EeGiJdDLR21uhBYgUxkbKkc1zxZZZ8fmnAHW",
  "key15": "5t8S2Y5EKAYC7avs9JbBo1vk2CpGGjNhi51qZtcUWEoyKjHTFkFvnshwXF2XuMKNQxfZizSjujmWYzZjQkxhFAic",
  "key16": "43udgqcqsbQPzBjamVmob7EVT8qSDqzMXBRosXDwNZE1zp9amk9dCdEzEKL6XbJTEUrPMC2HcYBCDC9EJ6fvH3R4",
  "key17": "4bAiGnHdxMcoMdNUHq5qiYRyEhQNMgHDXNXwF2txfwxdh2Wb6SGrBevt7Ritrw8kS3nw17sVJV9yypi5ZDN4nqCg",
  "key18": "3XpFN53JiJYLgC78ufR1WGDjF87ZBmz5FjijnsXuepWENsc17fHygjMjvrWf3h3vhoHf95qtu1M68LppVhxXtFe3",
  "key19": "42XxCj6qZKwV15eJXs8jst9MHqsLH65y4uufSjoHVyFDDa4Sdjz5NVT1UNqzieWpWAyyAT4PDHKhnVRsKdnERGZF",
  "key20": "25YcFWrcJ2wxdgd2F421zmx8J1g6fSRZRqAjoP4EBPRR8B29X89j3Y7xrNZAtnV8cjYFkk2bQMvn3pyL5c8gH7Vj",
  "key21": "2jeLvbGXSke3EfhMEvnAJr5Kwq2XK6h7gPruzv4Hkrr4mqn184nCbBfdnqYAayvy5UuxoryQCLY3jVviNeu565og",
  "key22": "25Lx9ZBahZ7Zcy2vLHhWGhW9YDyhd6jhABFpt2ywojUDdwAyL1zCGMDtjNoxoJTazzNidise4Rh5Qdq2PYYQcqnY",
  "key23": "36vCKRmQPGcPbud42sDmUxqxnQGb7dBFXyy42zDpbqWdGmT6RVXaJMze6KjEKtht31N5ukMuVjWThyPjX7Lbw1fD",
  "key24": "4MFzJQWdZBjPssez43NEryz6WfbqyEPKdMpef4zVEPXeoCndnEsczKuQdLCo8pMUyAtxNCCHyMuTrgivCyHAJiYM",
  "key25": "4wK8mGyXeDeLaEetgJfPwBjg8wmuQ6c1ua67EWicBPb3UFg6EApCNay9QPfUavLqK3w2p3uhPCpWSsxvfALMAje9",
  "key26": "2F9dUj4yGPwPdpevrTkCL14eVkpaTiEErq5pMwnD49VZxiAqxJayGeHTudzaK3tvY2Z8DGQG9kzrviZt3Mf2mbvN",
  "key27": "4GJ2DXdEpPxKKmK2ibqdGRY9phAPxraHx3dYsGodz5Knsgfe5cH8ZxkzU3zLaSetixAq3DgVmzm5g9iV6YduGMR7",
  "key28": "5JUcFmbQnUadYprd58UpkdhT6EM4peVmYMSbqor5MBFq9z5iSfQbXPpM5FFd8hKnLXhuy3kkLTzVCHEBut9oE5AD",
  "key29": "4qGWEXAd3sDtWhyP9T8y3MQJUzSrCuVjVq4onhtDundzLszKuihtQJY1vDda5GrQFX8e4obiGyLdoH271hwDnytd",
  "key30": "YkqrF14KEWVNu6FdMt5m25k71MjrdB4fsEYKvsZr3Nc2xgoPeDjjEHTG9Y2eJKcrqumToeXdaKc9aWQWzpj3Eu4",
  "key31": "3KmX7HsQvbgxXFbLWXErfufdmXexvr7hwc8jAm5cCRHKiyrDt8PJbUZV3cymJWayoBjdNYVhRz2esxvXqnGNBdR8",
  "key32": "5rG9gaQadVfmoM34yh8iKYK5nDonymQhH2s1iUgN7bkwYzKVLwVzp7DFpaGEWxnWGuXzM1wJMoQ2LZzWqtBwW1H3",
  "key33": "5EnYvUPDHVTxXjNsFJdBfinteRwew9MAjhDJ17QZjDjFdxhZ8gEvnF4AhUa6E2GAWEERHFuCo25Yu9Jyq7cA63N5",
  "key34": "63kz6C5ibek8b9nUosdYdZ56rE31LKsFkzWeALVj4brngnxyzJYSNyMnpPeS5qausb4ZqVxdfcAu6R538L6tLELz"
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
