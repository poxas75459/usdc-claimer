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
    "2LJwUr3yN2Z6z4nw7stJmQ79CQoY3Phm1p7rJuY1EowwHZscgkHET1JkYmn9cp3aSEmZx54czVm3Ve4zaGQ8Ccnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkPJmUEjy9ZWMFZTqgKGwYT99LbP1rgdANaHVwMn4AeJHwnSsCWhfGvx31251ddWPNtz8EbTaEd4o7Ke75jBoqa",
  "key1": "5okST7ayMcLRY5P4mYADcnXZTyyoEZeCqaVqvcU5q13WVgvkKzYNJjrPjpT3EajaNsJb6khAL5c1rqKRKwvL8M53",
  "key2": "2omTRKqEDAL8SXFbN5ivAg2y86359xERJnhaHzYoJqcFgc7SD4nTqmnzPNJAATNujM48XQtDB1zHM3cCDPCWDGJB",
  "key3": "5xyiqZovKcuo1xkyeQWt7Bv77tmn4zHMUSYPz6nN9y8rJPzXJQYH5oufG8cyPYmw9t9p7ZJDj69ddS1apdbEA5NU",
  "key4": "2QaM35rpZdKVzFbYZq5CYu7TSC9LRok5DYSZs8jrcybZ5TVdiyHhXETSrVCKw52Gp1DizBM75bFS6KozhjJyLw8H",
  "key5": "2AYkjuADg8ru7d2ohvv7qpaBGQLSiUdiHJQkK5Wsaaha9caquU2eJXpdtzPD7i4qkYwqcnBq6zLsi4kCfrcAVMfW",
  "key6": "3pZkSmzKiddHADQYT9vNK1sXphz7zpwqTt1hs3UHxcGYjQ7vLVx3BvbTLMtyDR22gRTLG98GAsMEzJNpnsneV74",
  "key7": "5veJ8NHgu6LV2n18kAiFBqDPmeTBJbwoNkiHfQD3W98cK4ormoyg83G5vYD8ZUysDc8h1GR5jfcYPdhqguw5DQSZ",
  "key8": "34N9Hou88r5caMS4cAq1zJMmUXgDc1wf4SXp4mSHmxukt4AzTuvDZkRmLiwPPoJSBSg8tHSN9119YFoMRZtuecmS",
  "key9": "4c727KhVhZtU66ndGWURYdVz65N7N5dX57FuPvw8Yqy81VYwg1KFaWXXZerpFXDWZYa8iqDYEwCLSaEaNwppihrt",
  "key10": "4dsNbFj7M2qdyCDjtrhLiqS2GaM9nxFB21LAwyjJ3DhuevM49YXdUH5tvxuVoSNjsxoZ6xCjPQHfBNCup7yJ7d9a",
  "key11": "mW3eMHEVtz1JHK1dbkoHAcjvFE5ff3W7TBtuVLM5r6dTXGmZJwLnvDHXmtp61dykFC765w7xMr6jSAXhipvFqTw",
  "key12": "4uojce9jjKVajLnzZ8jWfWRfuiYci2gVpPgqpHyL39pTJFzeziqHk4k9fJAD7cipyUagL4MNPmbvDWacMiXFX4Un",
  "key13": "5mjYRe29GMeNo3QrMQWUEJ2crED7GDDGTabdyQxRSSgnkh2wSVg8GDiPyZT8wDkS1sLNRkptKLtXxkYcm2F7dN6S",
  "key14": "5XmhKjov4LrosfBxYZu2XiJaNn2YFPp1BmwDHuDxMdPWrctaBLBNbutSeCZbnAVYG3jx8ZgX4vKq9LnNK1BhVwWV",
  "key15": "2fwWgoEQDNrSK8YqxkEVg4KNpBXMZvYTZ6kcDgL5SPmYXHBadi3e4kzj8JzQXvE3tmHLF6d7anTkfjcLWsJhgXhM",
  "key16": "3BvoymRKZMqqe1tpLRXE6hL6tUeoj1DYnSf8aMoJPwxcetRRyNk5C8dZFw5ey5e3qzXqshEvq64qQKEwMy22CEPN",
  "key17": "3hCc93rFPDXdrpQAAc3ucLF5c35dDaHtVUuD4bPHDTF1DzfdAJvMhTUbpN5q71ztJVmHXiarGmmkmU5GaCVAAFwh",
  "key18": "3hszGRWVVZoWuPvYJ7nuY8E3aZLyuQHBVdRweFL1uvBR8p9RHfdZY4MqYKD1fDKAWFrToUzZkEvns8ehbSU2WgqU",
  "key19": "Ntp83tsJvtc4zSeoUwApViWEmvzxmmVwFqWhCzkookE3vjjCpBumLgsScVRxzHt6VCzqs49jwYdvWBx9TrMGbAK",
  "key20": "3jDYLSFQgH6xu9ku6aobGQQf4azHdm98n1rNHwnhZc73edYy6jE8vECatH1iYnt4BdrRyPRpZuYUQfH8fFvy7Q78",
  "key21": "2vD3rvrNXx4EQwZz6eVoV2ULHMTKiuriEjBRcCsupX4ybKjHKN924fv5SX9LN85RkXEQGLPb8b6VgXGZS3FZHu9",
  "key22": "28v6hzdviZqrcTfsmNLYLRF2L7zzwEfUFG1YLEnEvErYzfUUPH6iVUWM14XCXhBDyNqxsdQktUpZRYqZqDjHDREn",
  "key23": "5wzw8oNwup82XDmnFhzQoR25t2md9B1DydqHNxxFZ744MQM6tCGin9NBraXsfGVYdTkVFAr98pguCckeyp1RxMDs",
  "key24": "2s4J3zEf6aWWDgSvU3ZqWthEuf1JLEhaLbBqUNErRvfva2UJSxbPTfAURixE48Sxt3RcMVpVTt4aXTYMHFpGzdnY",
  "key25": "4WmXNpqmsrxherB7ckwkot6X8qj8MLgpeCB2iSpJPqoTFxiZBk4LysmYdighQCdCfo4pWQBy3R6UgfPsEFjrNyK",
  "key26": "5CqhVDde8N8YD1Sqvtg5h6AymSXu73PvgrjestwZk1kjP5JgXxyAh37mZRYQeEa1a75eZjLXtFvGSvJTFPjuipSL",
  "key27": "QrHjVc6BkHvEphkFXJBB3ZuYUw9wEMAqj9p6GcF2yomNBtqWmTj7NRrXmdVWUxDaxvkg7oV5wh32LFhS9PfgRJq",
  "key28": "3BdG3f5UN39cFCsZuXCa9T1UvHEqPjyjXe2CrekzweRrFv4siQ4XfATZDyWHPBrstfNJo2FgZ5CgDR3hSLs4Pd9K",
  "key29": "3bTWuD1nTA7hWSSZi8Yr7arvdKaZqKA7C8T5fMbPt6CNpHvsnyy7AL1mP7zz8irdTFGC7GwybAFZgse3DpDpy7Rm",
  "key30": "5jS5KExu7jCyqHbqpMfCiM1W15uz2sCN1r1GK3t6yBaanfFvVYQkX8CWfmSQfruiQh5pi3H2NEcod7y7EBrDH9s4",
  "key31": "2cwXiVBPd6tAxUBxaL9fnC5d1tEyu4hLZpz4NCfqd8qL8aFkwqZh6PzxpQnGjVtdonNGppjpT1G3SCW9G5urMEpC",
  "key32": "2Zv7ZqQzSHGpepxanCKBfTsX8i8q4gzyMFHTHSjj4nnxjRpEvrbHbWPMWSKJyY4k2ziFFieAzimjUzKrPTrRMnem",
  "key33": "5wczGakKexRwnLaACT1QehpCCsMn4NcPqRiJhiajqdGHuAqh72h6gkgxYg9yVYZrV5rovNovj6n7L3JggZ4UoUW2",
  "key34": "NrRGR5GRmJCXNJQPCTuA4kK9GY6NzLCv2Mi4UNAfPLWNeuQVqnQ6vHrhmQUKtKg8XiwXLegk89L3S2TSgaEd4wz",
  "key35": "5RhJ5EKrgy6kqrdiQKZjgDhVeNVvcatVD3Spsq6QBUBFwd9Q6LVD1h9WpDtncBuEtjpi11kqbLSyuJwe5T1YGkVR",
  "key36": "42yzCwJcvwb1MD7u8MoMZ7jVKuy7EKyoYhBR9D3MJPY4nBFeESvBAdpp1yi6AJDGhmwVWcqMb5CfHpcoPFuAkmKW",
  "key37": "2ze3ABiWPV91skNX6bjbXcJ1ma48S9FcFC7WJzxaSgcWoN3xxGkPMMhNGGZ3daJJbMmzBKbcBoGjg8JWdSsirSof",
  "key38": "2djLnaoqhpnhdmksmZT3uMsMQUMr3kp63dreB4cR48X7ksMCquujbDSbsEm958cHNA7fEBTWpktv9W6DPfJe1Qjv",
  "key39": "4q8z8aGQELD1H5EzkoWemUce7WbeLquEveH2JtbQ4U8PFypzec1xAWXxSBPFbTvJMByhinvLJZjTp1fHNqxQqvsv",
  "key40": "LqEa9yvwzcxDHgDEBR9zjsQXww31uVSqeipnESjHo983SDbRRgwmbbLh6tJ8k7ddN74hKqTU8NkobzWtYjGLWeV",
  "key41": "3yVcoDFL57P6NNDfiepnQdxkSLCcYjKmRMWqkruVCZXoe6BXiDKhgA7MzSFUvdbJcx93rXirSr6R5iSgpZkbj1oR",
  "key42": "XBCXFvFeEnUCkX54BvHVSgcfpj5T6qaiJTz3gs1E9eHX4jXDpDqQGKeEFQMZxRVjQQPGdtBB7GaKKomcY5rfxZ8",
  "key43": "3Bt2TVUPREbbW8XXQcP5DBPF4oJT8aq6yfqkJCdEDu1matxe72cdzxfHSf4ubgks1NchmURb6ENWHt9Ag9B88n6p"
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
