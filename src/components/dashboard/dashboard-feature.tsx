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
    "5R2QV1prHjAQZ88x1W8wmnm4h3zpBMQvmAw4QQFRPUFCPHEsFZD7wyHvZoq3BmRNgwKR8pAMNktuZnWmSACcuHux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhwLpr7ERvCy9jYCcgW3QBepojJ8btNMEiJcMK1nrQw9F8D1BtqeUa5osF4pNn5aXuCbrq42rLB3hgGLCfVvvHo",
  "key1": "3ZE9M3jGsR9cuk9cB2AFVcvi89qpp3P3BY7YpJkQyKnzpRDZFZRVEf75JvCe6EduopfA5kPH4v9LkfaB3oTYDZhi",
  "key2": "LZSsES1JyMSuDQoratuZCKQ3aTnnRxKoiEm3aipFZ4UkHCpYkzUywVG3f28Ua5r3MoChFq3WcEd4WH2z3Ezh5uE",
  "key3": "2JQMSCYsae4bNHxMSNvmnbZHem1RpJyWP7Xz4aC1o9aYysfNjjMi6bm6fyXQa8V7kP7SCt8qGYGwB6vgXrhnD2H",
  "key4": "2cWZtAzzDEWCv5Z3sfFy58cDqSypi8zVoq5SPpJ79Ufe9BjmMnoiLZDm8HgisQJq7UNzfAGiTspdCiRUcMvA5HoB",
  "key5": "TqBv7p1Xw173gztiGk6Dz4ADAtiyexQTfUDogqCmp85TsVzDhMyceQvhebWtqBzQd7xkaqjx9AdyEchrwbPn2ed",
  "key6": "5Z5Bps5soNWJFHUDTM1n55uAJSti3cHRnRwgRZs8dHY5FezjTrstnsa4ayTZzznf6DeeVVDm2ozaBiaVNasNtT3R",
  "key7": "53K3tHeGCtV8qCPbwDncGZVUcwvQ8jvLZwQVo1uHXQxXCXo6hfrKtKP8j7M85dRL2uKHio1Eb9pb51TmxmTLP8Hr",
  "key8": "2KxepM7yxA9womSgWnuZ9zKo5NVxxcUjJQE9oFtfX4fcTHRy2om36qo2nHb6HfCyyMUJYv7UL6bEMDDLP6HCmAFE",
  "key9": "3cou2H2dse8vrNtYZqyhrtQbNix8C6J7VHx3TJ2s8rctJ5PfMep47QKiVyVA3eftAwcQzFTUwj3zk4H1gP3ZH7kF",
  "key10": "5vNMRvPevKQrHFNLmax9Tupmj7u1bzcAqn8MmVbxBFHGjQn9wauEutkiUZbCR5sfa86irhoozH9gmj3J7vnBYWwF",
  "key11": "4rHv6sQWE72QvkDPbNs5ssRgxG8LtCz6Efbsyc5nB5V5QSMqKtSpvYa4MNW4eq3zqpB7fS2QyMtTU9jemXfuJiYa",
  "key12": "2WyzNmJzf5b5btghS2yycsskEc7iKYFb5L8hoMCgY4S9vcrTSHiNVP1Na4zRKB6XajYgbnzUPPhsgqaRpwWBHapD",
  "key13": "3Uk461ufefnkHpWtgpS6bU3nG8m5VSCHv45mbmSNFEccgC4qHZ8NnJ72u4oLXcJe1kZUjnTLU7DaLL6wiUzUCpY3",
  "key14": "HTSCAeDZkDoVfR2d7CFmqQ9TfrX9NxX5aLfyvBS3kH13EwRhBUEEiJ33f594pbYP3GaFdDjwUXczbTsxMkTgTFS",
  "key15": "3z5FsUprmdK67VnHEQxajM1pSD1dgdYcjFnkb4XuXg2opcnvFd3TUnXiZcNtXYPbNsAL1nKFwAoYZGbXuh8GbiwP",
  "key16": "5vcFrsL24oHY9TmAGKo1PhxCVq565y8PiZq9iV99VjEBj5Bkgoi4kd7hVPq1LEPojXmCuKDtwtSWiYdMeMUrMuns",
  "key17": "498y56VzxvyLB4jr2Y9ZprSdNXpxNwTUuBLqL95cgtHCsBQfCEqFt3cvMNooJ1nVcnbi5kjcndAuqpAy48Ww7Bj3",
  "key18": "4NhipRZziNuDwKHpbri3xPUbqByBg9tGZNXydo7YkbYNSYLnyeavLmQt4cZW49AAyCVbfHa5HqeTUwubn5Y1ei97",
  "key19": "2Dx6CdCoM7ecuKyVeQiSRFnMfsrSHwGPbuqvFgPz9DEqNsMdQyr59ztqkhYDxUkaixXmgpiXVo7hehYGNxWYpLeC",
  "key20": "2ftcMwYCe9NpkwFDwbh7tqoGe1pshtr14n7jXky1m9BQVinuWggPYjEowNwr8Fz48ZWFaXGU5orF3CceqD2d16Mn",
  "key21": "8955M9sq973YEfPTZ8wXGUzoAvRqmByzwfhwwdWjJVTeP8E6wRLxawPFTEkTQdH68Hv8Ako9tp82TWF8AVr7mtc",
  "key22": "5fUeKUqW6KiivvkiXHZd4A5DB5XiJtJABv6C5prMHNVGn1b5zdAPdFitAv91WQmhV4yKDqDY2spomyNGBYo4Jooo",
  "key23": "9mKgztsCAawUe9yP6y5GtMiLCx6d1ySbqkJ7qkK2r5LeJw6BjMGzegeMj1WD4JcbPo7ZySntz216JXjL3VsUqpA",
  "key24": "4wMrcRS8PWejs7oqtn5dqFk8N8zefAaPqrc4X1nx1whBQmNbSGQQiKubrUJvUiZAP8KdumznEgvzvh8E1M2EWqKd",
  "key25": "JBCpdm9oNdg9Vgw3FgHGb9X3VcRjkfb9gA76E4oDLr5h8QiFbp8g7hN7vLR93YqReX16J9e3BXsbzTYQNt9PVF1",
  "key26": "3a5xkKqiqNxm42oWMsoLRXQhsBWYCtAsmymVak4CTnegTUW3HHwJgAhzGfdre1FRZXfEX7Hhc2rQWT53QQhHW4LE",
  "key27": "3HDRtG2acPYHb5eaHxaS8JwUb6rJdZThKM4WMEt9jLNsBxVd1jVdGnAsw69kLSShDFxpRrusNKqNFMwzdu4D3pGg",
  "key28": "2ChCsKKzf3bCBYjjVhNPSX4AzXcQsiDrf7fmgW7kpzuWwca5G3oR4VEWtBRSbY71WH6ZocGVoFzvzZtFYteHq2Tn",
  "key29": "2i6fHJEeHrVrbh9HPrsDqAM5XpwKpG9gJPJpyqiXG4nBjZqd8CyUebRFtNeUNPXt3iEk9Pg8492A1o8CAQeqe8RB",
  "key30": "4MF3bsN729tC111q2BEnQR36WkQkXEddvMCnv1kaVR8eb96U9oVdW6LEqv6Hw8XYXTpRKbXJYVRqYVoXUxcuefXS",
  "key31": "5rrojQ28SYJ4H4RKxVohtFyBgRykDk26djYj2EGpVSkXPqJzehcjp8aydNztnX8PuGj466AN1xerV8CPowMWVUCE",
  "key32": "5EAJGJFfvey98fuakFo8UoZbAA6pLk7fKfgoRCtiY7JqjiHtKkEECcVdfLUyoyVA4vpBc9pRSWDq63ZPRxufZedy",
  "key33": "djftBcFEowV9EnxQMh9hka9xtk6dw2LgXp1TLtC5GtuNB4FTZH78wsteZqve8kYHnjCKL8VVDiG5Diy12HqKzeX",
  "key34": "4a1PEzMbVMe7Ck4voSqZ6t8nbaFFeo45Bd6BFfk9mkHsiUBvBGe9SkWFkygdAeZ7dEDJe4pn7Pa5xLKihcBTpfhH"
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
