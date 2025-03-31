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
    "5Beo9cTkfij1Br51jTGRivCsdCXaERDBU16xFeBcSC3dF574ZBFmNUfgdPrrhjVwQfkwfae3NDBA7G1zDyJXjb6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCCcdUUPS5DcQYgvigptuSTbGv2Em8cK3kYjfdXRz3T39XXqWfQ5pKZpZjhiKQPzcpwF41E9iPTLynxtMDoPLtc",
  "key1": "3vu7MZ8fPVWLTRaPHzx5Co3oL9ZkA9sZt5H6W6r9uhKAxir8PJrQPiwryGaaezbBJvUoUJoTBMcTdi7D71EAyVi",
  "key2": "3gYoGtz9BhPk3etAZQ8h1rQuVnUFfgYbm2LcP37SDQWB1aaVynvQ4RE7vdQiNQqyWKE66VXu2NcYhAv6MHE23hKF",
  "key3": "5prSFJRic3pyNiXrT71aj7V9DkZ38CQXnSir2u2AYsAX2rEsiA1TbEyVWMu6HBkaM9BwLfeBZ2VviRxxRbV4J4HG",
  "key4": "fBYX4zpmwroKi3xyX4SMxdhQzx4nHpKZCVKYtiGiUAHJr2eBpJ8Wca1jbaPcSZwu8SzUGXhLeo7Ve3NzFGw9V2W",
  "key5": "4WyxWC3Mbg856iqYfy5WoXPprrafaSSSVY4muD4anDUGz4UCED219fgXRi58mGXzUohGiepF6mxyVCh3VabQGhQW",
  "key6": "4ZXh42UqozMSu3ErYWjeo47ki6X9pc39cZeigyzT18peEPKHQ9SCh5mMUD9QvaMCqmQv7q278qhdPPRWL4Dak6Y7",
  "key7": "r6dqu3q57TJUwBBaGfJJNv2QegrtMkmtDEfdYYCxCMm11NBfKCjhNqMVSt7rj7DA51WDmQKD59SP5JyMQbpHM1G",
  "key8": "3wv9gXQgu835dEnfHht28531Q1nyJ3cpDYm4K99BBPSiqyD3yfT2kMqTXZHUTD2yacwJqnHfYEKhhucpHki16jLg",
  "key9": "3qChxUbRJT4LZogY8ccJdkQPZjwRpRxKszPLrkVRgLzEzt7DqtAukfEiaMpYk2obvSys1dJ8j5PzrR3HJuSfvfEA",
  "key10": "5QwmxrMYfdkArPHraPYWofsVBBBHP9q1q4s7FMfJBoF5ZvJo5wbqmyaM5vptFtH73uDFLHrcb4rVq6FdHoiEVCHJ",
  "key11": "u669QdHcQ4xEdo2rBdZ83BaRqGSK1igUFcZo5bZauUHk9sHHnJWtAa9Ze9j2Q8qkCx1BMePi8V7WSkZ4QN487R5",
  "key12": "582oWXywpUnJ5uR1bVWCPTo5RFnh8o11AbSemG1vZbBTp6zPsqGh6xfj4WRvU1snQ1fdwcFFYTgyvhuLAM6m6eCQ",
  "key13": "5WAR9134hdMy1tKimX6FydXKP9aiU7eLPB3Ug24ckdYZbVei5mBYMx1444tcyacVVHqc3rMddeRaAo2T7LQ2hKd",
  "key14": "3AEefXq7K2Q9xDqR7MeF35wn9kBNAQtun487ai1iN5vPZqsb4HpbLkz6a8ZmAifPQngi4twBAqcHfANE8dpCYd1Y",
  "key15": "Qxq4cY6GUPzUDdYG9XhcY6msQVA5evZCT2zgEqiz6EXR58qroKqU2PeUrHTqJbAGrr2PDicnx95jnqgZTHre9vV",
  "key16": "33b7vLJ58MHMrZLfXdQZC7AatWZuPrvefYL6bktJMeVJ3QWnDA6kNvf47ifF8cbLmnFuzYackuSw86xGN4FBcpDL",
  "key17": "3PstxqPzDwrWfYJtVuAi6eAobGLBY6BuHmD2SLaj9xbxnCRtKzFjxyXpyb5s5iyH3SBVa4rvx3CCVC8qPu5iLLig",
  "key18": "Rkhubd32SaFGJvTiUvak25jqANkZZUnkY1BgqsGUsGECyRstwuNptUtZx8st6wjf41aFSgvdoJDb9XQGLpa8BWR",
  "key19": "4czGvPY2wCyVvsby3KAQBsDLNJh6tto49FeBd2AN6e1X2VBXWPMaVzH3pLwdbbXbVW5qoR4z4s938CZeJ7PPc2P2",
  "key20": "2qtHKj96kSbWjt9h6jm5jUkL4cZhfsshiJfYGXDqepDXwqVDMcvevC3fj3p36Mv2ndXTj8XPGNJn7AaqaWg4oMjK",
  "key21": "aTAGC6qzc9vGy9hywq9GEhyB7PDCZwNHht5RkKVvgzdgnwmxLFTfxkAFDXkHZbvbFUjCZ4NEXM8b7wpE5khtJhX",
  "key22": "4C1Q1CVpTJAZLuFUHXaz45QgaZK1KHqet1HVSdnA9nzas7h4jVeCsFhbBpjuhiiYP35TY2UvgdAHfSmLGiYiHGgZ",
  "key23": "zwQzK8HcumgwQnErye8ZkPiga7v5v5gz68kxVw8c4XxKGUcAZrsQtYZJDATv6uspT1KuumC3aVhNpQH7wFpa8c4",
  "key24": "5LrzTThuKXbYRFhGvP4zFvDAatoxXnb4AFYdR1vvXGR2ukmxynnzwxwgV7suA4ygsGaD6FrrCkUQ6toYNeoPiNa3",
  "key25": "31v47YADmVjmSnQNNhLVdMBJRjjXYABpDfJxXkjomHhKAbgSNNdL9cVfRekJTbGTjNHVJi73pm11dbSKQ4Z4vRtd",
  "key26": "4EjMEA3Yi8mG3F9GWQchTmzMpuXp139TRgCVjweLMSd4kEh6jYLcKa2ixtdKNkXXQLBrefw9Jvq79HVY64Kfbr95",
  "key27": "5A5yMe8qrWm6vBoGWsLVx6wf6s3osUTYgXJQs1JUJj5sgvHEXeiv6VhV4LAqBDsjXY7iynKGS4CVgRL7wV9z9rJn",
  "key28": "5idaaWCEd1oEpR5Cn48YjWjKN4DiqxYP51ixTeBf1SZLqvCoBqFrtHb2hg8yJGcXMMXxHqZNd5CKPMYb7xo2VDzy",
  "key29": "2TuXBfjzpEUBiGc7jtwcLVoTjBjbdzKLhoJwc7PNMMiuiGwWcSeEGknjCAYKk7PdZ4fuuLfFWZrjoHybK3nSXQue",
  "key30": "3CDhAoWMoWh7KtKuYGrjWA9CuYKVm8pDeNcTJZkSj5Pi5VepHj5nXADdBBKxYHHgwZZ8tCV8YRtSLWJZ9CLFUrSq",
  "key31": "dkCTrcqQAfFeGu2Z7GigftpjnuduxGLHSxKzcHWW47X1swiHusAwedKotewbXZtmbESUhhCQvyh1w1Phwv95VWi",
  "key32": "5DhLTEsXDHbNKqGro6SiFPPv9f2AevwPfdDgsBCZ2Zw2KfvptFeTA9JNoHzDafYafPUxtuq4p7EUuWG3yN1KfdPv"
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
