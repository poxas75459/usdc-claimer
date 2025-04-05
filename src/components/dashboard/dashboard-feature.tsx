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
    "2mWBj2g6G3qAmqojBJSJFV64ttFgd5fVEFLdQawvhG1pmwyRVHnn4wNbMTMcJ2EtX9F57HctGZzBEuTRotmTk1YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmpFKnXhMuNGZeBnCg9p6cEucfWNbiCxFZzxsLXefQPh5QFd6apFuK1CeTJypBtnoCZe4HUnpCsXy5kdzCiqVnn",
  "key1": "5UjTptMP5k6ES7Tuy43cNiq2RcksxzMbNrYcDz3r1AwcHPE1CaerF9XTbrrTj8Te6YKVSTTDMjj34deTSYqNeNdw",
  "key2": "DczNwFAcKsFvGS9tHzN1sAfQbWUEdfYvKugtsDU2UvXfD9q638SaEs895gYPzVFVbDLp4R4j8sJKT2fK5cPumP6",
  "key3": "5vMh5B3vPD6VeSyXuHQ4wX7j9ZTqMFHMso9oyUASzVTpyi5SeuvV4uHzjqa5oVyEWiGEpzW3BN227qhNyuSJFyUj",
  "key4": "7HofHztgpNQ7ra9asRUeq6X6CxmMYxXtP7oNJS9UyyGcNSxUSMi6TqcYd4fDDLWHA27rjucwjGKhFcSVmXMfpAj",
  "key5": "2Zwo7wk8URmx7pcBrJYmJQLS6svmhah7yDdpmVF3ZwP3MQ1St6nBLtcCSKE6FkYdged5rWcLnA8pF75nUoPFFjKu",
  "key6": "436TkWA1YfCithi1SbZBmm7QW3sFyQq2w3vq1dYbsLP1MHrLAuWC5UHBwPc6T4xnj4xgq9yNZagvmvQHS8Q5Yy3H",
  "key7": "4xXxRmQ9qMnuHwjfkyt5TzDBDwQyZ2taUbrLWWGd1w1kkeevXkPFqcUUw73L6jNCMaSq2q51QdU3U2DGbu81LavH",
  "key8": "5eBmkJHJ2D95CvsipmcJK9vV1tvvSrRimwVXvxKpzsyYez5dXeeTTgQL8F1vABPT9nnsiyhNoTq6q7sHSVggfwPj",
  "key9": "5zvfNR8xdyny35zLyVSk24p2HxRCJodY1kdUEnmQb2uiVZ5bVsZj3bD54Ssn2oB8tLEwRTniKUywogXUVN4Zt4Dk",
  "key10": "FTPQ1dR2Mh651Dx25CDraYvEBQMTX3qbkVkVkCJ2y5Lo2vrds41Y5SfN794Q1MLTPVhbsfoGsqt22GGN7FoL7go",
  "key11": "2spEew4ojC3YTMS3sPpmay2W39xhsXvAWSNtBnCzyeUPK8GAn7MyWU6YhwZQv28rhLVaApAdYWC3AxFEotUFwCzH",
  "key12": "3X942eVAgqFA8iomdWQS2TPj33APArkGJwoPozcAPjrBTAZFqq5N9hPGzsTEgwY1S7EyQXR3d86dXdZEy8ndmqY5",
  "key13": "4DUb2XhhHtef4JKz52BRsE5dWHH6pT7R8NY6tYEhVVjJ5DVc1Wh4pAddLQmWHa8v3vwSXLLWB7Y1sfFSbfv4dMQP",
  "key14": "4LmiUwzfapuijAXwWK1BgNXpPZW6AoaerkAwpqkSG4RroXRh9dpGGGag28ot2bFxadunuz3gmFFUUayvngRwP2gh",
  "key15": "4uC9ZmkcpJLqoxSKinu5QDbVtZLYtY29LiW5UuR6xC1r6rHkTwyRRSQ9x2LzaDVe1qaf4M5zzG9JLKyhN6cRSWCg",
  "key16": "5TQvpcyxSGTr9MxUnpa3t5ibYSknwHzMhaFMshuR7HZyxx3YYn7K6htiWrhCDQnnUPL5iU2D4ghAJtmDWdkubKon",
  "key17": "LJsgyFEdQkzUgbXdiaXmPPLsKqS6TdP5wYYqWLKBZAshEFAPBoCU6VM8asnpAZZQFEtkHH9L5KDi8R5WLsLCq3q",
  "key18": "3HMtaSQ83coe1vKhtFLMRBS2RNCgbHBHqLLG1LyW6vs7pWxNbQM4wxwJ65MtCerVzqoU15uL6oTWM8LokDAZZTrD",
  "key19": "2GPc4uioQ3t8DFxZc1Kzmhvhib2tcoAwiRSpGhMmnmaZCcjTPRiWVWs9WL8XfSmrjhRfStJhfav18C6LdSEDQe6y",
  "key20": "59DVGvk2e6wjTzJ5sKRLUUpiaxEmFQCrLL81D1tXn1yjRSr3sGyH26how3VknZQugAJq73YcHKeFguNzTzZ3a3zw",
  "key21": "51g2HYS5sMv625J3MxoV8x9XQ5UeLaJugtnTDhbKw44LM8hSGA37QheFcy481NF3DfYXtd66NkZXKc8AAyHRicGC",
  "key22": "2h7s7a57D5NNY71TDaBsFfKbaM2sokMmqaGmyXCD9Ag9LDjkeuUeg1bjYyGyhtUYGgXFCwh3GZyCYSfXf26ynLSs",
  "key23": "55ZLb9Kp2BwpqV1AHwp7EzrFbcoQy1HWYZP55VJ3av6NZgKbWBUFXiTMu85tGTdifWaUSUV6P97ajgq23pEesGua",
  "key24": "65QNS21vXzdkt4DRevbucLSHSMNMJaSqy2SNAUeRQTYr2yotN4q1CpBuifuxt2QoWdUHZyxFMEmrMFy96gTzX4H3",
  "key25": "3U3QUrGyVw8dm6sGMDQ5fbubyG7Zd48zcG4EuBHjDaiELRyHGT1Vk9JiyeuzAuTkDJSBFB3RcqVj34NexWYith3D",
  "key26": "37ixF39vsjRok7DZTQdncNu1kZbRMkZwbUdNuSi93TPvFSUWdBaccAdWZqMsW94gnxifBcH14RUuQpwne5GiB5yL",
  "key27": "536NS68xBvLzWVttm3Tga3Rvqk3WFCBWpDJUiNWTm1BFkxiVKwfw7gM7hE9p2uoXssjjLzVAsPHS3C7RQct8Ln4G",
  "key28": "LWx3RK7cy6FrNsY4iojDgjQJFdGgTUP3B5eTmsKzhggACCZLaun4xvEexj6tbhqjCbM2zkpBoQPJ3ESALQkZwCK",
  "key29": "S89WzmaWGVtKZqqyusCRsnwSGL7vqiTUPrx7MQ1rTpDqg9ciuaMH17gHs23EkcXhgLJAt6ZkCzwPak7PgkofyCf",
  "key30": "295szkbHsm65EB9QK1THBmbxiG8AUkVuoUJYoTQhfCr7T1tdC8huFTK8JVvWjrgFZ7nEnGMw5JgBzQK1spWGsRmC",
  "key31": "64bdzbYx43TUMcokksQpSvnMNnbUSV1GzCTExAupYzyKQeBN8yznWK3mPcbvLoezbUirJzATho9BguNXtDt9j3kC",
  "key32": "3BABr9RbMtNzvVGEU2UECHxJaASMEF4z1DipLsx3EW1gkAsGgfsiVcpdnupNp9oz1UZFuAXtyhut8AZFy9dkXXJ2",
  "key33": "eETT8fTfC6cnFLfYJ4T5dF5uWiRKwxtVPzjzqxniMTXvaNKeVusJABFgV6fjxU3SHJmdvKcvq8e5EFn2gjdvLed",
  "key34": "5LcncuSbVcfubzJgnNzJJreKwzd9b3yRGjaSPTt11ofXG77j77JdFjG3x13ri1ThRYrsAJ26crJGV4Bb3EnqhyZi",
  "key35": "44amoJusrpZ95p8CnFRJH6wWWdJKp5bhqTHu8dLnfjE7s6ia1jRfMnUpDbustRL4BSdxBpkugES35Jm3QHUE54TH",
  "key36": "F6yvNoJabtcs1GJyzJr987EQrh4PKt9Xvh4vkHJZJT1DSFGmzcZ6fNQHXtoG1nCx1ooQK5dGG2Lk5hrmngCF3TM"
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
