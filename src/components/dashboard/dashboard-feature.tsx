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
    "4weXgqfVaNhqnEWWnhZDBfykXxjMyCnimcJpLCMc5BR14SNM5d5tvriGRaYUqWvCc64VGqXw15336FhY6JyZ18VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6i8K2Efusd6hefBt649i8KRSiGemjnpihEDGBUqQK1X6uTSNeazjF4SFebCoYYEwSWz6Z3ifB2xmvBcXqxsyJ1",
  "key1": "4R9msYheZ47JGwC6xNomqym7YuGuXp7n6Qnd6PBWBYYsQ5oP4As1zVjpLucJpLQmvADv162kgLs3aDmZ5udLBPQe",
  "key2": "22fsVjhyo5VXqySATpGfwnkwQc3BNdPLmRVkA5d8RLwDRptVn2JKztzt4PzjrkmfWkuuvEa4EakP4U9G7GEFVqGp",
  "key3": "4mZ2r6mgQGVi3KrE6wQ9ShD6QpkPxBCGwinxxDKZyTinphrJWC7UEJ3ZKxLQxTTqjHfR2ktMmoGDwD8YTFsb9DYa",
  "key4": "3yy5mVTzCoj6zXuTNefXBH1JTCbATQacp6j6K9bULUazPAKbPQ2p918hfCaPCKDSoBXbpTon3ksCJTVeuDj5v9Pt",
  "key5": "3Eymdbc8XywyyXYe24RmGnhYPLXXP5zRara869dcFswFQPkCpvbCXhSBryMn5LhZ4PrPR1MnMZZ6yAMVXGVDFkoD",
  "key6": "3aT5bX6T2AkCxTwUH9vDjADgfZHSMy3eSqLpktxXiNhrtidPbEHwMQ3YJC8XEakpsxj1poPnxj5rYp7pFziAM84y",
  "key7": "3t3Cjzrx3fdvxG4MMraWHFZ7WDqLkgwD2UQK5a6A6xevtNvKAPitQVg9FQEGjCU9dzpskG4JzT2eNecRubZpf1rR",
  "key8": "4JhbKv49JkF3cbqKaxGxqTJVXkmRpscmYE9pokWsEgYHL5yCcsqFMUgKfbp3RfR9Q179WhvqrVELLBoKe26BZYHS",
  "key9": "3VVwU6YLHMVmyCLGVNxUM341aBujnrqqQDYxSZ1m9vKU6WkHDWj1V3j1JSceVgKkgyytpo6aSH6ZMdAC2UsSL5tx",
  "key10": "zpb2S1YZ2bMwstbpePQDMxFZScg61U4bRK5KPCfB4p3sx7hsgJtkGcMwKVwRuCgjnUpLBKwWUuLt6UGvh3iDW9n",
  "key11": "35ZGL2xhULf9mmxeii8VBbxgQNE7K9q48QxWseGG2AAcwxYp7ZXmzu9cnXeGZvpsyDJz5oDRyiVoFGGMErR518PA",
  "key12": "5fvYibfS5TEvoatVjv7Ah9SYvDPdujXuDAoRnQ2sXzM8KKmgiSQzZY7kJvQbKodza2UjrwuqG9udZjHfeBqzWYdD",
  "key13": "56Emq3cvcTUL3bacxtyo4FaDLVVNyUEYoTgxqqgC72SuCRVELvbADaFA3QKkmvUCbYV5JYifZgbn5WLwdznNy7Hp",
  "key14": "3yUX6DgHLXUK7DiwAyQLVe26ZQHMcknJ7tj6aJFAjptAMUhgPcpwoBErXmJbhyQaw3eoEJ5QzuqxZpEZy6P1UC2a",
  "key15": "4WA1U433qdCzxbXSXNLCVQukabvZK4WMsJ5sCAiZxkKAaxLhWPZ5HtQXwFzEofezRgMFkV1v1YB24cJdZG8aWDSh",
  "key16": "3bPmxdQCGF9uN2gsUvFehMPuTs17FvoWt4Ty23jXYvouidvT3AMTYcoEEp9wR3SLwd9AVegmwE29CrEvvqdez2bQ",
  "key17": "5GrgyMKmyi8kpF5qz8G4kyJF4qbFwy8B7dPM1RfnoudHzGN79TqJtXG9gvWKCESDAYqJSeW27UUwKfnStrpuhEAD",
  "key18": "4Vgnk5pBtiYspFGTExNyV2TuSaGWZxhnMuf7Wa1SK8cHphA9uynxTsWG4cgXQ7K9eiSo9MsVkJquhZ8ytrkm8DLq",
  "key19": "23cWPo2ceZSznPtkjEUkbH1bo7goy8akSZXRvP9GxVEoagoJwXxfNWZAW3SB9CJe5MGudYJyAHM39hJWrBaovvdj",
  "key20": "DWzf9ocFxVC7wJ5qH5yoEVJUpPE49EAqr4osQQ1DACgJJ7byTfKvHgSZoZF9mmDBnmDu9zmCjCfczyBiTS1B4bF",
  "key21": "3y5Pfz9WNiGAEtY6QqJRbcm6CV5jEVGNRWM7HhGJ1YYAV5jY1SqmtZgq9AbY81Z4V6bKJhJUe9cTt1YFExzPKB8e",
  "key22": "4trVSP5pHgxo5QLCHMGXZ8g7W1BdCQ3x9e2mGZw2XGqfYSeEeiik3Xp9xUvfVsFC7QP8nsx3XcggPj3SwF52FkhL",
  "key23": "2TPpGQLmJuHWbhoB27iDbyE51H36qZPuacrmcP9h4kaP1WYXQih4uGRhxwV8XMjsKFcj5R8Qq8kWZkmjFnic645U",
  "key24": "47v3E3xWDqkgtR2Qdi2GuNxWbpYzZUvY4kC6aeHY83YiDwVgUGPWw6nr7emoChXWW8BTNRk7DbF2o1EU1vETGCbG",
  "key25": "3wrVAWeF2iYDX31zirfkqiFKqDQmFisiEwbCkCvrrP3CCyRNosJyyk774boNyKS6N89S7DWAu4fQjFZKZzbG8Xyk",
  "key26": "4f4GyfRBYzUf2odbFWPDViqFci2r3XnyQNaMioH4Zv9cvANsdUXHYC8fpT979zFqgJAD7i9gtyST51VQBGuYmDzb",
  "key27": "41J44VryJgjndsx2nxC177i7eLqn8tGVPP4yNet75sDXDSJTavNnQFts4ffWKVFJcjVcTZyzLTHfDPt5kFP9JXt9",
  "key28": "pt9S9HHt9J5RHFwpWweLVLstgP8xWN4qbCTSjyg8Yh627tMQD2ce7o63MXSzWYKx5u7jkJUQFU2JYrLRkWZhV6d",
  "key29": "2pg5eDWzkAf2YRVGyBJLdCs4BShWTb5aghSffgTNLa4xkb36Z2tRjb5SWdRsND69uz5EfrSNx7U3tfonkqn3PEZc",
  "key30": "ZGw88q95kbkUM6QS1Ad9r3ZwVkthEn7JrV6FvGtXdgPi2SPRH1PQCyCoy4qmH2v53rp9cMerSoUuhXGyZ1SFq4t"
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
