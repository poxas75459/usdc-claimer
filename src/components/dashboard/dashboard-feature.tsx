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
    "25sWquRjNdxzCt3uof8nhFeXgdZyf7smMkzBE4tcdzpUo3ogkbeDKdL6MFab2m2Potu1SDaoELzKs6bbaKyeMp3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKdNy51gidPytcvKiT8dSYYsaeiYbmrwVSHvJU1bnchAREN4AeeUqpZSCvii2PAEyKYHXuSFR2CNc7zMAgLzzvk",
  "key1": "4skWtfweqRHMuFKmHYCXSfScPFFUkkN8JozfkhX6tZX9sktk5AVEtYzWx9TSgtrUTfMBWCRzWRNBi187Sen2KZsg",
  "key2": "347GPiiAVmSZ9dtkiNGESS6BXcWMa81RP6fTHEXg2tcrFTHeHBQUULYAQQQEjqzVDfYdgDDyzDwmqo9WwK4br4co",
  "key3": "MmKDhKwqXHm6GDL86DeHMyZ8yGUNYT2MWsMnazxKraBvN7QreffeYS2bt4M5fkC4b23EZZtqg7yot9eJFtSTH1m",
  "key4": "3fpJM6HjpX21QAZ3syoriP5k6ePnm8R32SoJZxetP4JNbixGApLv6yoETnyUo63LU1K4TPD8ww6qZcGQV6cZ6GV1",
  "key5": "4YB2Byo6K8idmwqNyATfjaJ9th3feaaG9aqMvUzoE1RtAjSxp8My3rZ4b2awaQAtncfaZqZvGpMwbBcSK1XdeYVr",
  "key6": "5ndzs1bvEdyJVu3KVXjyLHQ9HzR8PexNn4nxxsTHT5CVJrV2q68y4yMTjFtaZwnC4D2RFnoBmGYq3coUQZESRwwE",
  "key7": "zdUAhscK4AzNHsTWM6hw6UJBKFH18x1NWWDkWuVgNEGNVAfNY3gMc6pQ598AWZcvj6XVUvHJK4ASge7zTy3Lequ",
  "key8": "2P9T8XLUC2viDopueouM5eiHknJotEhzJaQPc5iz6riGXMyQkQ8jow25eu7m1fbKCjKW2TdgxP8gdr5Qw7LevTnp",
  "key9": "49od6jQ8gX5RGhrvHHrsC4BXSR1DnX5NMBJc8Xy1JxgVxAodb1Mrtu3krPaQnKX9DHsb3idK2W2E4wcUUQ2Qc4JG",
  "key10": "39sSwgZTRK5wD7qEBWWV7Ef5cPtVdtkGWdATRJA6wJVeLoiop9jjKjS9cKH7gZBgh99wuPe2v6MJDNUpfBXjK82A",
  "key11": "5WQdkn3BDnWqjUdnge2gtL4HnwTE5R9bpYxE57RnBJtTFckrug1C9twGFPzfn7a3ZzSUeyM3RgXFwEHcU81a5wVQ",
  "key12": "4mkuzfho3t9jtQbRKGcny5rMJno5ZuNgR24YvMGUycq6Udtd9LsBeiGJmjNBVQfy1RaMtj89LvcS5s1B9Fd6NSGw",
  "key13": "4iVqkVcdSCLbPGARmFECDErzuMBJC25gUTcxMw3anLyEANYHwUheghMTbj7YSZNrseC9MFQDHJtPZgH5qBESRUQ5",
  "key14": "4AAKMSxcMHrS6qWM9ReiJsbDgxJBQ5fB65UsidF7QVmtTDKy9w7qHKKhsdxVotjyZeDSfQQ1e9xXVBUyntqR8mig",
  "key15": "5fg5JHrihZBGzDaXeExdkHKJtoN23XW1WGD2ho9ASdKC1qYfFk9fYh88uBSBe6U6DM1KMFFqkPsra8NvV5kkfLtr",
  "key16": "5M7c3yeHUjJN29zVqhomnJSNBnVpgqhcBqq3xea94dzUzxZaXmx9LhgLW26REBCDuCoDwRyoWDSPZJMEBN2kL5z",
  "key17": "2vczpfTSCfj3aUTgwthFei7CVTy4kiZ4TSefyupiBUG6nbfJJEjV96McpHeH4Capj8T2YdjpuWEUMptm2Vnvg1ux",
  "key18": "5NoQVALFbPybDYBq86vBNmGCPKWz4MoUnDsy5qM4Mx2C973QEPt69NGLpdYUni11qMiopVXZddH33duAJWVi6ro8",
  "key19": "nGS2EvCpTkYvVP8TPep57NYiRBfo3o8xtf6ynmqoQzLRhvagEdiTKkNj3jX2pNzVpk9kaXw3eLcaWc4QZ1t24FZ",
  "key20": "5TpW6jmPD6PXPVT7QoNn7yMk9K1QZFVBPsK6oxFuRJsbUnmebyd3eR8T5EMzx5uaTcMPQuQez7itzBQAZ3VzRAjL",
  "key21": "4gesuCq2hs8YuheYBjqC6zLTwjd8Xx76RRmCoYxE5g62228f8RJ1joVLMDrAVfJ3BQMXJ7bPeJFWqcL8J79B6Z9o",
  "key22": "5M45wMV94PobWd8retckQcqfriNLj9zqtZaB2Q8Ut7boZh25LThWTfNHTMnQbmasn7UXjxNoHHDQ1pz7eAGsAth2",
  "key23": "5KAvY939KnFhdD6o36Kn7nqfTK3fkWGpyf8E9GVG1W9yYALhcKdBMF2xrpySvnXZ94adaZ6faFwK2kaNvcBCSmXz",
  "key24": "2MEv3P8bKVWwR9sVaEG4EEYGueD5PkknbcoB5Qd2MkdrfQJmy7vhhgjtDRUb19AnVx3MSxDCYAoqaGLEmZJE7sT2",
  "key25": "5CmyDmpYMes94JQExuX3VohiCDK7NfTx5AkukoEBcaLTuNgALZb83BVQPcV2urgD7n9RrTxB2N5z7zUCzwmFxZ3t",
  "key26": "2WERcBv5Qx7j7c1L9QPTyVhWbieyLD1NdCK7y4zmrnxtf2gngX2kZRecWmahJcobByPAgiZbPUwPgPoaHeTQxL8C",
  "key27": "5QnbJaUGJ3XQXqsGc7KTGQzFP3xzj2RndbvkEwWmsf9mH5hw8BEpRr5FFLdHPcXDe6shJXbxejPXwLnZ5CcXD8WG"
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
