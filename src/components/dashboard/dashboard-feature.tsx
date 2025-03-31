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
    "5WZzFRfw9st9LjHeQVDsdk9krpYNNnkeGLNwmiNbcC4eCxLhmfxnjGS4ZZXeYoWdYWc2je53aMhFifnZ3AHoCbLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7dWBjDwhEu7khMTfvZPqNL4hqN1Go5ZHTYqcLAS4AG4FtLjRRYez3h8ozHrbUa88NxZGwRcLU8rBzSazUVAhB3",
  "key1": "2REKCQHXpyyQHXiKY5rjepcgSwi58RVhjG8G4xGWK5cs7t2qpPbDiE8nHP13EyiK33vTf1WSCbp7ai1847uG7BcT",
  "key2": "EEu8g4vDLA7xtgFuMCqsuGSuzC62esP1VuYmbFk1deNjcfAjfqqt2V8ByEiWgHSdL4d8mcgH4cMg8VBEW1uKSwX",
  "key3": "22db1LZbtwnsFzAFtkVgkTxttNhcousjCkrq2JRuQNEeJAiH9jezpc1W1upFnkhTmhmXanSWoFt4yDKgefQUfsDw",
  "key4": "2fv1GeNNJfuk3ogbC1jQg256ogXL4jAu3NqjhkCHSYwTBBpsgy9BLjWLmmydowsPhaewDVfk3mj7EHBgCP2r6rKX",
  "key5": "waFoWC2xGjpdeceFDe35Ra7rtSBBwaVfsmX2pgbbDpKnaBmxfcNGxkYUEMx9f1FuxWbAd4fKmkH9MCqGhDfGNof",
  "key6": "G3t9JruoHXFs3nUc5gvjnPaZin4L1rXeAZ5KxXP4MRDErpFw7Z7acqqh6DiY1evGAxCaA3zBT1xnHhaL7vXxx6Q",
  "key7": "3y8FtNcLXyPwre3nV78Rwa9ot29cL4DVBmkD1mEQP7Lp7arPRQig92L7B1btq8fujw2kVxwxaN4ivgMUnZ1GUq49",
  "key8": "2tRsfXFTxX1SubK4xrDbs1X6XBCooQa7xGSbwaRptYkEeDRkH6kCZ1HMjNxFz6NzY3L3aZgzyvLb92kKaiL2bvdh",
  "key9": "4QGdKmp2UHQgxmQPZLifcnMhPwS3HS2gGR4RgiYny1eeT9kv2XCzSbSL7fyEEjQN19fkKVfGtgApw9oQGZvLZ8Dd",
  "key10": "5SDeNAkSqP5pxtoopVgJ7yPMm4WLvS8gEGwp7jQKsnQzkf65rzkPKRRn7bxcrtdk8fP4wGbTnyv2cJsFDqVaZHZM",
  "key11": "2FjnNTaqpc1b2vAksYxDRFKk4bceW8ebLn5Xc7cQ4PnJSg23mjnrE1pNHKfuS7xhJHtQqpiXENQ5HnWp4wLcREqV",
  "key12": "MVSL8LoLMjePSko5XDWuCyzfqBMmmzkjXWKo2h8TTTxdb2eVj9ZKEZAucVi1XX7zK7Rm7JZxNAnZMgvbF68y8Kd",
  "key13": "4EShNvk5cyh4uMqNaBi41ocBqeFXQc1Jk2naPvzi74RQDk9Z2rT3UzekCYe1jq2CVgXPBqmdqsUj6DzcRveLQShH",
  "key14": "3mNmHvoARAbLipjZgxq98CFV6pMxdqYVKBGGw7ihwnVnynqBoFGnYXwqyDkPrWYjBB3jB9q5ZeTJdkxzaSe1WzxY",
  "key15": "4xwe5QendGzDhhGGNUF2LCbE1pWHExk81ufRDnS1ZdK7wgfd3St6YFzGi7KxntJKR39ZGpjgjmKAQpuizeddyeq6",
  "key16": "3B23azUXx6W7ZCj7p84eBJCJZSFq4c3GKKyFZvNySfF1VLRZmryjbADaEFnoQ5WCKYGaAZKY3E2La1jpfi9cQyRR",
  "key17": "3usr7JwCAggGdRwfYBJoU5Yh4NfT1XfhvpL5hf5aoFkMvvjmP6ExgyqNJQoJetPcbNmNQ8U6acfFQ6uiFAkwtnJ2",
  "key18": "waL1hwJ4xuAva6srMdG5ytdbsAAkH5rkanZ3NTpivgXmbkKGKVobPKfepWS8NurXQ3nKL1WDBFZRYKwUm7B1wfd",
  "key19": "5HGwpYzUnrfzp9te48gmvzkE3pNuDmyrQvD2hMgfBkEbfaZGjRZxyryuvYCcc6hVh1eCMkxSZ5YfnCBBKjckUoAY",
  "key20": "KGr82MZQFiXJqNEdmaTzRYdPwVe94S9WLFGHDRbjJPonNwbJrZEFA3VH3S46GoTpLE4ZHe5hbMyq6XmWJXjgZFn",
  "key21": "QSkJ87hrkiajkhcjp9LcKe1c4CotjJJ6Nir8SnSc67w3TS3kumfa4UpMbApvAHpKK4PY5BZevgqU7VG5MECVmBm",
  "key22": "4RsrRqRA4VBoGx2STTGCoeXdus5yvzXqhdUPij9dGomMLYKMv1ogy9GNp8u3pRnwjycyv32nG1LsJruxkkktbD5H",
  "key23": "4ZN5F4i5hLuVhP9XgBZYnW4AZn8AmRkcW5dChMHz1Fu6GPqY4g6FRvsqWu479MevTyATypTLUkN92koQ5eeeCJco",
  "key24": "5LBq3BfZTsN6Z3TiA14YaeBvE7HefmTXizdWEJiQo3779U5HBkMtPtSDY2NqPX26fUrjbU4WPn32zAvxvRhYyqPb",
  "key25": "2mAvdSYNxbkvXkK5rWQoYk6TfrPdde7HPQwkrHmraPyZkABuaiAJaVN5dgFANPwAENtUXk13XxaetCvBPCw7qSYP",
  "key26": "5LVRVBKJBgw3uBtQWA2HZ9VNf6dbSdxanDQHsK2qkYtxZfFTDJADFiCYJRi5M8njkgJ62BPKY2xnrWkua3WwNZm",
  "key27": "maAfK13oSRWSfKuqZbmGeQRRwcNo5Z7mUmXj572FcHSiHtwsdmgtb8ammNPikLJSQqvVk28B9ZrDuh4Gm8q1Z6k",
  "key28": "oKMCBbKBRnuta4B6npGZZv6pB2CkiATzj26pne9eXT3r6bymhZruZWgZ7Wg7zXHnz6JRGt2g3uidggNvfyBEJYw",
  "key29": "2uvQcPJ89NVu6QAncb9Ck4HVS8JRWqVzAhmxN7ZJWmQ8HPbdPf1jKoWgoxi7RyEfJq6GWEJSCCGjRqXn9yHkLCWE",
  "key30": "4EjLcghCU5qjy7fPnigTCr5xa65A1BGNdvQjXRVXkqXkcjruS8AePR7oL16NZvT1tu8UFUKmfCYN2i9TAqj8Dysk",
  "key31": "25K7GF4rHgUp5gKh3n9ycxi9vxzYr6FNSqMJ6kjt4M2euyZ6zjkXiftayNVFYNAq3znEJS6qY31URoTZQXWiS1Sd",
  "key32": "4vVh4npgpcfHoPHdmesaQhqc5Q4UevMGgc1gUBkAXjPRFLsJFrGiPWWTVoYQadsZFzcidaWwbYiC9xYwSHof6rN9",
  "key33": "fNEisGiSVfD2cf4D9ybUhuebWbABL3E9yMCivkuoddaZcXihTABrmu1m9VAH6QWRyHwnBDQCXHEacgSyk8YTvmz",
  "key34": "25GgeS17M7Jq5LdzZ8DzUW9tSWhs4dVoMjAPwkfeXKEyWy2N4CVtJjd9BvoCM6z68nLSoQtZHKgX2X66NecSdzH4",
  "key35": "5bXiJkroFwJUiFL1waGPTyfMnc69NztNyhgLNGHwF2Nd11VV1wMLG8mrVtwmqHBGpVTfpxFhQj8xZ8Jsome9Qoxc",
  "key36": "QP3HshYq9zQmPeFeM5F9gB1bXRRPmK4C81Via2c4zYj5eBqANufcqpsvHzrwm8Mz3daR8cf2vDizVA4bVMhRk5L",
  "key37": "nghUdqWQeaPUBP8XyWtZ62cQtPrdpqGYTuagDFtjHg9LgyRNsYptC2kaMDy2puLfkwAukDoS58XGCdKCh6RwauP",
  "key38": "2NPq4Lx6XAq3AHofYx6u14YcrgPgwMKLVTjH5shQ7HabVG3SvRz82acasj4uHCtLYRrV3hXxXSFuzkJqprQvJUbx",
  "key39": "52FVt5tJPmzzrsnpsodSXFid7H8o2PGuJYVrwzKAhnLb5e7kqiaJZzRf9hJYW5BDp72Pa8i6H2zeYa8nrtua5X3j",
  "key40": "2YkhRpic8MPxKBz59uyijrfh9dNPFnPGrnt7eyzrHsXJR8K8Hk4CzyYTT5wikg7Fdbgf9zdGYygfE1uQuGSVgWS5",
  "key41": "5CiSydXF6cducdKnereHEqhnoVosGAPTC7rSMpEE13UzaWqQiwP8sWLkGyp5aVyuQVFCAVwoZjKfQmouaAtv87cy",
  "key42": "24NPYENiaGfa5mhMbYjBWzSZq59HLeqfyoxYuo3sUZqnJ546CUFDFvT9x1kEA5b99gWD9CDrX5cjZV59Z1iAix6D"
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
