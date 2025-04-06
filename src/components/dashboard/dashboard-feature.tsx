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
    "3JRoAJd25dst42cjVx6EHbkZEDSKhDsZhz2Mra8atmkhpGJ2nnHsGHT3BMDih86h81su9XrEvJ7sanBvuCUYgzry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hiVJsrbLhagoXhGov9AXh9sZqUVUwaozsV9XPtij6VxEFtaq24ywPpeKqkJph7AzZ1B19H2RELLcacAp8jkoF5t",
  "key1": "2yYEBuupWzWC9Ente3LJp3jD8m8kXrnNcwaUSazqAWvXyb5qHNbgH2nfy5m8jD1AqFDvR1fbqiY66cWLZiqtddcF",
  "key2": "5wKidFN9jebKuCAqLMYdx64VaiTuQnodwB9gg1Tgb8jmmpamBPDXfHLrvbWW6WQqFnXoA1ZnypuLa1czbdH3NCFx",
  "key3": "4TEJoySfFXsJ1PKpgARHKDpDNsTJziZ1ZgzqjZwthWJhyc9SnwwEXuLRay9kV8o2cMsfLuwfYv1xKkTwEcS9mKUE",
  "key4": "XDSCsnGMuQhobporm3wGdn59SMzmWDkUXg5mpU4EjQdibjYFAHYHtLtatWUREdnNBueoKy3WhECWtSvGQaqBNnF",
  "key5": "2Xf1UQcfCBfMgrCgNBWJnDPSYVAPH4YAMqyNX5muAgkPuPax9AsTMPknDvRv9HwzPqrgp2vQ5EYEBwDCVoWGqd7H",
  "key6": "346maWSd4S8XSEyCmpAfMF1FcgTbumisJ6J9z5sk9DruiyNtzPqaJPNnXaBhScVTrhMazGUbpfsDkUGy49V7yJsN",
  "key7": "4oBVM8WWqiemNcwG69UkTtUjLoHEzRFH5Zvms4921rADESXD9YF15YHbzLL1tmFgb5hbVPw9oGuW98zuTU1RBunH",
  "key8": "2buo2Wmkxehvtpm9SDLogpoNxEDwHxKKLGStSr7TbHJHVxT9tezdPsESaLGA13TQV2HysFLvDpuuSFxRTQaTCRmz",
  "key9": "5QoXfNiPnsqYRx8eHGhLjFh3uacK8CYMJUACxNmqXMmLhWgwa7xFcgQb8exAauSksQEvFKti1EUEkJbBtZWbZFjN",
  "key10": "4RuxAMCdZCNRh8UXJUu58r2fe2g7KUDBJHDfy94akAkBc6JhZ7V5gLmshjBNsHYwW1i8iRNSjKqXQhGQ5SMrLGrx",
  "key11": "5HfRUz12RmGk1cFmqiVnWmriW4P8hY9P5GkiWkRraEy8D8EzCSwrXAbhUsUKTJnjeVNPuc3hAicggH1iKwhBkQtA",
  "key12": "5GJE9V8z57SecFjhYZsLRjT1fhuTuqbvvYy3faEbz7PkpFVzX7XuYMpVtWfuNuHr3e7dA4eGW5CBWcnp54vxkB78",
  "key13": "3AR3K9ZvJ122L3fj5LwAVkuzuDpFdETTTXAWwVGNwX7F95G6FhMkFZiDFV9WBWEhNgqGY77abUCmdMyyjLzoLb7W",
  "key14": "3M6GL3jgzB7uJxv6C1vZQWm6PaBsuQfUWbCTk4ox5XLwzx3dxVYM8rtk2HBxdsucLCGLHDyGtYfGYhwN84TbBcqH",
  "key15": "4ygZDP3fAc7JK2LH9o6qabC4Bp1LwwC1cHHBE7TiEWCpXCn3udPtSLVxyFy7FFhGuj7wN9eTUcYAEqDbWY2qd9ac",
  "key16": "3V7VSmSFS8JVXSQW8K3kZhK7gV5jvCnNhd7SJFjomLBrNC8WHBPJSV8M3ABiEiiYyqPCgkq1g98ap6MCPohwCS51",
  "key17": "3YrKk9ciVHGLmQTe11S6Z8xvyVXuasdEUcJb5aXGPaJ2byYn2hSHev5rzUgT8hLy2ntAX3StcbUSxQAfHkmQBsSF",
  "key18": "UXsqfVsjpEFB3J3rx41y5hfiJFhrWmyRKURS95PeUrk8YVPw7tb3knPN1bCTcm364axuzg4DkTJM9DShcJnPrgx",
  "key19": "3VEPKALak8ch55ed8X5ENwxM8ZwDpML3BLdSqzHYuQEKvVvgPU11bFgYiTKr1QEQv174YqZ9gbXAQGBjiWcFF7gU",
  "key20": "2xtVipMF3iLvL2XFXd3SqpEgBQsN2fdgzuZXrDkbLK5pSjhvxRBfUr1oVvVxpizkZB4LDYQLigZqcHshs3w3ijCn",
  "key21": "24QHYJt4n29Pa8G35weSQnHMq9rtffPWvtzUieAfLBn3zVsF6NnViP4sAt7JD5ypUdB7fYVaVWqHeTB1BXYyzbNb",
  "key22": "41XwKrZamoUX5VUMsTNB1Gu2XVheZqFuc2acrKRJjF3SB5kcEstUuEnQgSXmcGHboDr1ayTA4a876ZG2TPMwGiMY",
  "key23": "EgLNp4xiTfXm2QTAJCENQfWac3iEsb7bngX2HPVr51jKdJY1y4mez7q1vvTjDGNYfMVNHkxH2b43nrj2tC9kPpJ",
  "key24": "4akbyuRnLL7aiHB58bYZZ2QU8gtbkpr5WAWTajz8QkeaZ2bpJ6HB9Z1qFZ71brtxWLWz1UCBp8KEHCJwjRkTfD1c"
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
