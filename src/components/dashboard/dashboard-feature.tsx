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
    "4sKL7Ntn7zhdX4QdzSixXcKxvjAsyCfn1ZiDmJsNe3vYkrW55kJz2aD5Jf6GhLHSS1MSHc5gje3QFKfnNU7ejihX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wWHtsfLkAB8fYnnVcMD8se1D68MQUpSeZSdkCnFcvwNFVhU9o4YbLSqf5288hArCb614rmZqcG26x8FgHh3USF",
  "key1": "28yo3rHG6E1zqkk9b8Rh8e1hM4mboZEs4xERR9ALJG7WZEBb5VTrdGhmGieGWnDjzWvX66Kk7mBAx25KMpYw21Zc",
  "key2": "2RKuKuffmvmXR6CzHS5VxbxCmPJu9nsnFYvrzHMoFJ4kMX1FSRfDe8EGjcvYz1tm6XaK6P37dWYxQWKDLYBdmMdY",
  "key3": "2wnJMcJ73u2Apg8Lzej2oHW1ATJRn7Futi1yUQfGd86XXtb6CA4ufHUEtD7YvbeTFtwtAo2cuuV7RvLmqexPxgVr",
  "key4": "3yT4B9jQAjBxt7ZtvpcU7ttzubsYyowxTLn8SjUVRQ24Lzc3dVKhXc4UahckZcbntW8ckBXpsBHLCjcoTAamH1Yz",
  "key5": "4MtV1HFj8MAzbMsQrkyygP4eawafJK1jy1s6MVjqqan9ALUipq3FSgaRkg2hwwL3x6otvimzrHZtryLJp1xhDf1C",
  "key6": "3DRodWKJgbR3qy2RxWErFrXCXf7eRGkVYNC3BHXqRdhKtxgGpsGB9FjwgrTQKhA21mdT8UkbMhy32pQbp3CriHCG",
  "key7": "zzq6sDD6t9sVRFTGZkZ1UVumg7TCX7c1ThaxmciUdSFF2poJr6iBb7FreFVqjou2v5ZZ28MTZNepcAgsuy7JMF1",
  "key8": "mbYiiwwp5xkWHtq837atVEk31Enyz9etywQu2wxQh5MLLTB9FuHdiED4CPFkmnHCYyjrMHmrDWzBGJWqhYCCfQN",
  "key9": "7rALxom6XwGj6jzSJbUX7kx8fWMEtqwe7xh5AiQFRdu8FNEr48hnkXcxpxqhupFkL4eW6gQFnuYQfmSdA8gqiGs",
  "key10": "62LANq3ciYte2sAftaAkB4P1PYzpFkvtddc8F821BEpusGiFaHwFVq4ZFd3c7u6HN2PMKn6gPzY36H5QLHGXotTs",
  "key11": "4thVaiH3mSTEdFkdi5vNNaJXz4ByuEkiVuAPEi3ZhRFmdxg8sacUyy7mLC5i2uoruM3r3SFyVRhVzdvyeS2AuMs",
  "key12": "2eoU3fMiDGFFH7tfAzWsSzM4jcFaVBcYFHzp51FDyAapS9Kuo6fBix5D5N7Y9sFXzjMdymSeKNQVG2r3KVm1iiYJ",
  "key13": "5XNdWCyvFXLnp1qFn2aHqGwtVT5RThbV1yfKyiAgQuV7DJb8AeoZPnBsybq9NDQx4yS4X3NAEZKxkaqfgY3Frb8X",
  "key14": "4J8uVaqzMn9Xen87vAmJQZa5fwJEFsFzXHjfrNNQQQ9NXgoUZW9TuKLMJc9jTmXZhnAZUvf9aQnahPX4jnB1aLRV",
  "key15": "4PUXCciZdYDamgQpxnN5rSFZP5KTphLozrzRC7tDPACggSU2GbrpkjgtVt4Pijkx7C3hf9SiLWv3zBTTJ7HJMq6d",
  "key16": "4jQgA3j8UpR2LcaogKavBZJdXbZgLFCT7zw3HrPexa55wKSrwetaTTXm4ZFGPNZa748g9RoYy4Sqsx3rMkEzFg4V",
  "key17": "2phekzCaTCypXCsqx5jETrFrNNhQZ9DjhVzTaoXvpFCs4LcT127FTHMm8w8yqbzcRb4RC89VKsyC7928wkLC7dee",
  "key18": "4ga7sc4LS8XX1bkX4gZ93RrF6gnY4UvHuekj7Vk792obidpc9Ld4MKPPFJaJbb693CpgiXE8HuSN5TV5qEuodQqz",
  "key19": "3Qzc4pakt4RcqoSTEmKv5P2n5VvYC7LmLu5GA1tbCw3PRFvxzwCU4QNhg2u5EpLZGA3XGk8ZCGNPRnpEXTS3WkmA",
  "key20": "2FU9H2jqopxG6aLiy4sq7Fn3cBpNuLPcPngMc6djc3Ubb21Q4b6bXBFmequxYu8zSPJQNVd47wcyK6qWc8qQNETJ",
  "key21": "2JJKpZVgQYzQzuTbuoqEZFZx2LCkhUFcRAQNgiiC92HNzJzXVk9qgdjAeymw3zQx88U5P7SgBfzFGftTtysrF7dw",
  "key22": "yZNZqAZXiXjFkySVHPoXcRk6Rn4fgXKE3rbp32ApeD3MQKXQbViJS5hCJJYipWfZcXzkEnVkW7PgH1XqzCv3Gjy",
  "key23": "345351ZQ5ahLRLg6B3oTMe2wRVBXY1vLhH45NiP9fKK6rCtjSfZYFnyde5CSJhbnQq1hdAbF4KiVWhXFHktBthjT",
  "key24": "5MqU2NTS2Ev2UC9SBsorQY1YVD6yJfU9LT38pxcfgP9MdcZJLTFXC6kRLcRLQpR7vwPktnpriBbQkx8asXosQmLB",
  "key25": "BE8WVPZegaWdatHZqSMh8V2jvGiNLmVd4UeYQ1f4DZqkvUcP3ERo5WvPtMiD3nj1HWnzcF8fXBBiJfi36jHqiZN"
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
