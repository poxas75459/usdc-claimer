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
    "4zQ8EpmRgGRbv8nETCXEJ9WKdgxiqCpugiLtjtwstJhP2ePkVh8azZKYT4hMdsVDnHScT4V3fNMX8PCzgkyncGo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqtjAfiFDZqF4GhiPCjKX79BYD3zFy7ce2KdYKwCEdRP3RCoKSttvEfBXR783tpp4wigQwiAkRPL6WsV281g2zN",
  "key1": "5BVvw6vjbXWttbww9VaDEFth3HG7xRRJoPkGLTeVZQuNGbNCySNJq9LDJAEw8UjEiYV9cv79fdVPyND5cvj7hQSd",
  "key2": "4fxS4DXrMtQKBYW763zqi1gCNGvwWkMTqS8YfSzy2JXgS6GVMeWBBn3wh9nmMstCTpDjEMgjLL658dWSnM9ESqhz",
  "key3": "3FouL3u618zTfQR7rhQrivhJSA4zYZ1yzUgwPBBF1qhZvDbTUSE4FvC6Bmv8zMCfFAeATQthcoEfZT8oTuGzQ4DA",
  "key4": "TFJipa7VVj31VLZeX2vBSu9A6zuBu4A9FucYtVdyufDikGk3gPzGUFJmwzTnPJTUNPtW4pHuJjaGAHVh8xjWgjz",
  "key5": "4HU7nd3VTr4myz988qtSxiJx8SZUpJrk6R1fN7uV6x4fooAAgvaGDLT4xbH4RfRwa9bxUUiRLhvyn4UwaQEcJEny",
  "key6": "4DJmjRFp2jyngy76LTpPZdKjeo3J8byhmNtt5k4myBj95WcwgjbEwJvhjyHjtraEtX2Z3vjD57Bi4YsUCMSKcPBc",
  "key7": "2pNyM9ugLNTxw3XXLTapmYcQuu1GsFrtWV1aHRTUFzb6dgXr5kr4UeAsFovrmPnWnVhHVySyFE61GZWfkDkfekAD",
  "key8": "2uL6y9KPvg3GPEFuYNbicefTn6wnjp1Fsc2p7ViaGLkv5xHZeAsJKkMgRNYsPe7XpobPsJj6r2e6V5gszjWeogXe",
  "key9": "VF6Rm79ZpXhNxLzwzij7e1snL8r1oXu5qhMftnBthjNfaBeXbZkqS9VHdAsp88EXUh3qZP52MwzNrjmxvqvDFqe",
  "key10": "32LvVGDqD9SPLMCXSwm4b2v6Lyw4gxaaunjELUk6HWa5DH81dEgTCgpwsaEoEnccCuY7nvptvG8MsjTHUmv9gESe",
  "key11": "3MKQek2yVHbkSwTPo3yJXuJoCmzVF5DURGKas3tQYYJes1gkogxGBWaXwVPjKHBfc9ojiBKgtoaME1npxDHzXASE",
  "key12": "2pGoFMXpHjHtMR4cZrR4S5u7cMouMGvUrjrT8DRz9ipqdUfHQJ7gmVLoHp9dh5ptQdDPsjr2wEVkxDAkAvTkjD9w",
  "key13": "4Qv5HiPjh1G482ixv579ERn5rrMkvPiFzEty9uPFFJeWccx9Q7HUuvaQmh7G1XztgGBwxKdbBmC1H2fFYC4iUQMN",
  "key14": "2CjCDTMGXMNrCceTqBv4Bh48frFuaRADWaAAFVg774HG3x5eyLJvrn9tDdwFrCch97fZYfwWhmjfYYrePUPuBLrn",
  "key15": "5EGwzEJTdJ2mJP7UbLGYCfDRMV9LeTbfiyFYCJm99VfDAtw2NWWZgSWDvAk5NhvXZav4neW8vhfeCNJWaeHLetrw",
  "key16": "5vatymV14YmuiTPUZteQteyZenQ39PPTri2Jtr1axi88i2RxYyv4TTpVnbJDEZViMpvHS66LF5eY1oPcb295vfVd",
  "key17": "4qKxKwAmzmUsePeCfagkqq13dd6VQdp8RuQ3orHmzdfbarzgDeekDLxHhZH9BZiAaJnsPQhndzithAMBN9bAHYqW",
  "key18": "37fMyNvo11PEYpvxRBBXNPjWS6rCR3uE6so1GvJJFxAAshry79arfAygGQcQqug7nY4UxSEcrVxsgskp1UB4qvwY",
  "key19": "4uLnBy1MR3pGCUSyFXYaKpFKnQzwTjx9p2jeXcsrQ1BtZjpTJRHjR8KyxEKduTDLRmQ1CJmQVwtr7PZXaZ8oDE2f",
  "key20": "5ZHgGJTv7vrVYJ9ccZCdX2Npn7K7xQ2bkugN8aegzfsfmauEL35dY6NsZvMf6yViYKfaZKUPcwxvqprwmrL7AwZW",
  "key21": "z3Cx8UKP6ssM7kSWpLWjgcb5aaSKT24fvK4AJ6owyPfnMeRwfQnaez3yHr49FWnmrwcdYrJzN1XhMCBacRZXe5R",
  "key22": "3Q1vDodtXQjtmQwfShWpjmuX16DsFMiW9nddSu8K6UYxNfyUdd61ALqr5uWyPRrtA1QPeLJYL7q4bhfz9ySPeWm8",
  "key23": "28Rm3UcBXgyJcTXEWvm6RGLTpETJsPHUyq1u3q4rXiXG3q89gVQwoogFZ7QS2UVVmeaBdmoD8rxFHN33MT2wQzRU",
  "key24": "C9bCk7R9Uo3RG4dsKw9YcqMDTvZpyso1waF5dVuBf71TXPK25cw8vLT12uR4ZLFbVeKbo68vVZj6cLdNGixt7US",
  "key25": "27g12kDSywDuzDG4RmeFwApt85YFMZfrJMmw4Yk7WTx5w5j7WLRoPRvH2iyDCG7osbJdrENdsZRGLJvLeQChSz1u",
  "key26": "3PjCTqaZuMpwuUkHC5hXpex6qRB3QjRTtHWkMvzv1TitYiKb3i7n2n355qiEvYDEyTq68zLFt2f7EAKLUWnXoVp1",
  "key27": "55s3ndJgsvQTEnZ6Kdg3xfo6DUwcotvTrzWdBke5CBBy5LXE1Zyqvha1ZwQ8yq8oc4yFuvV77pVbFAo9RpSyJLer",
  "key28": "21gi5oaeq4Z6GdjRoRLTa178e9DzuxkRDeSZ1jdabJpRUSuFc6dt4qeKhXiesMRvzDuX5tcRVUCc9hthZo3fUWrf",
  "key29": "3HBefCKhuzpL7o9DrJDYNMaQKDSGBU6Za4dpScfT6Jatq6ZGAwTnJdu9cynsGNi1xtt1sVyyLR5wvjd9agczYYMX",
  "key30": "QzSiYtCg9kgKFPeQehoChGcv65e5JujtdR3dvTua9hT1cKYyj6CcYw1AasoKmaqyoRcVFdikusrrgJK18Ax6TiM",
  "key31": "5Dvwbb8LASYwtRJuwP1qTq27diq7uTiaJffhyLEAjtZ3A9Zco5TutM8vS7tZodrMpkbtK2ZgRCZSv5KfMBcwL2Hp",
  "key32": "327XoXSQ9SWXvSZ5sYGJP3pHGnD4BuqQo8k3XuvLQwyJeBmwWUi7jxwbGzy56JQCWUkHFxDzs7SfHtkiyDqyG1YF",
  "key33": "3ugkGFMA3u7YeDdBDHSamAF4GPJqJmxjf9zb9v9vYM9bmiqK9Wp2CLQWq78X7QYTi2gnqcNr9VV4zuYVnsSgUWif"
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
