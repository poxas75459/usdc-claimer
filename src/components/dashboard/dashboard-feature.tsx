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
    "5ZmkLwYx4xgAey2nMBFnAsmFUkEQAW9kk3NNLobQwZNrijyeoDYhmdnjFEoh9HYRcRNCYK9TxW19izjSJ8X4matZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cshDRt3P8LGyVAwqxPkUX9tXXDKMivahwHcfkFSaV9XKDMXP76ZVQSBqwWUd2nvSd4J5JmCFEwjSxSRxW9LQdM",
  "key1": "5hH7eQeHBd8ApLeSuhqMB43bY93VDFLbhXtKAwxuNwgoaFFgMkbw7SsvZQz1cNye1bLoUs1JkAnt6dxNryY6Vv4X",
  "key2": "bTV1h2tjF19gyoudoMgPRGYA6RL3DRKitC6cjr7oqvjpmKCW2yJ3R9CAu8VEKiPDf38z4GWXiakSxKE3jrahyk2",
  "key3": "5GKo4jQzCjQWT79V6UVPoZAUZp2G4yYYFiFgaAKib1tVxwe1aY8zGP6Q2pkVqQVd2U549mbJPFySWn6onHE8RYbk",
  "key4": "2TyUJbRjaqB18gdtBQo42DBHqvmbptNhQuRAeP9MYTXza5HvXiAMa4u2114EjYGjnwbe6ADGRYuko8TbJJgQvPok",
  "key5": "5d1n1pRDp384iCWZWBV6AQJCpQeqWxeJ7t29dcDXjjLQXaxba9X81ZwaPeua8zq4sG95NU4qh6sKi6Zdju5ZPgc7",
  "key6": "4xf6C4HQgy2LN264m2TgonvUeyeijQLzcKawB9Xmf2vSx2yEg35CUw2AV4hXKtukBHN8qFbbwtQari9bKjHkiLjC",
  "key7": "5up1mc4jSoEgb4rbXTuF5W2tA3X3kuFetPRekYM2RK8yhfAivKRxVyEo39AFQG8e38kiNi7AEdoe36kjc4JqDX9p",
  "key8": "3aShDLw4i8rGd7Cp441ZVPvsCCp6gsM8pD5gvKfRF1KQgYkjBZz5CUHkGhjCnNQLxKV7focH3wqxe4uVBoqvtnUc",
  "key9": "XCKTmjnrAn81ZeoLCp848XjLmn4D92ibvnUztxMPo2aEVYvXxen2E3Y5qu2ZgvWmLVUJ7yTBNNNjRmzzxVSAw6W",
  "key10": "5kFLBM5AuxcrEawkKnHjqMibbFc4n6sftjtAvqvW5BjKta3RcPgT9wD9Lf3EgXvSqVj11KJVeobTQNGCzNTUUHkV",
  "key11": "4NQkjHdLmnAnwm6XhckkM66cdoWL6rgVVBke9sztTRrCfQ19DcZS1NHCZx82pYQUozJHyzPqYjLns2vhLHPgPKCs",
  "key12": "JKGECPJTsAJ4Vz5GTG2kuSYMinJdu7xuVmpnUie7ZfhNaTQQz5aHV9rPrhQkqg5kTAbuj6Dkt2v3v4TnL6grsXD",
  "key13": "5VukiwgUaGiCtzTussYbmkeYFWJ6PwFPLfR5jpkdfoyZJPwMyB5hoUZSbCf3QW6HkrpxKR3BtbCtCNxgBo8En2ac",
  "key14": "45y4y5xhxoKveSP8ZGnWyByE86LaonkXdhY4RucGvqpaYuMA9dtoQxZUmajH6XpEjMbrFpByxSETrYkKQm3nMHeY",
  "key15": "bJxd4suLzZnYe3kASYFF6JKjqoTdg6rQ2mAnRE84gTnnM7f29pRHYDcTWLuHrpPPbDtZzJfetgXXe4h2ZYNBvEC",
  "key16": "5KJ1cTEN7qj5EKGwQLKx9sVSJB2DT2YLxomY7EUFFPgBL6szTwgwKktZnkgJNHhgn6BkFxwVDSrymR6b7UL5uKah",
  "key17": "K3FBEduW8JFoUHxhXcHg8YhGgRts13JbBJm4cbL2WHFMaMEKb7NgmfwJNYj8tSWcEDG3AvRxQDEb5rCkfTZrhhd",
  "key18": "3uRnuxrL5WvFY91dZxdDd8UZ4GRmuCRzWLbugMxcHQB3kW4suXTyRYZH6NcCb6wRk8JkSboxqiHFvH2Ao1xyg6MZ",
  "key19": "5cxJq7q6Ft3CmnmSmxPftVgjmptxjQAsyUn5Mfabs53jjkAZ56waEA2DdkRT2akpDYyFnxTdifL1vfa4jdnjxWhM",
  "key20": "3zWaYp8YnF9gvjvGr4iTdKstkCCKXQpNr7ryNhnARcmi7UKWCNddovzNPGaMBrQnStfbr8LvHdJUtcuAkRjSEKeG",
  "key21": "5DNBuXR2CS2TDZrwKJ5KGquzqunArrWXH2iFQvFMq7Eon4RFUUAjeGPtXtzHmSydihVSSH69sFuCT7kFdBps5pao",
  "key22": "3s9cvqyX8vstWxcx5DPKZXniPBwoyZr6pJvmr5aaeTHTbey9ArbWXQ5YsSBYP9ebWuqwNYWeQk2zsJLwqARSQave",
  "key23": "48mUZuc4soj3x9mgMLxkNp4V3BzLnGyq3u7cvsuSUebxttYKxY2QmoYqPo8tUGj6w6VGvpy28FkXpkZu7MnMuKbA",
  "key24": "e3xBx43pEezEePpndR17ZyUQvWKGoSdcuoBKt4ogBzPFweq9wuaSY8n27NPiLa6EqaBLG4fH1juhk885j1kPEXU"
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
