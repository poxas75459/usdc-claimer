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
    "5rtFcfAFHaCtQM7i5pKdEcrGsDkXAybHdcJX2QyqsbAztR2mFYvme376dQCfGg9ausoYkykFteEr4obLQjSGq5NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQaup3KZZH2AP7wukyGTkiuAenXxBWxYbbrGaJwaDFLy4b8Mt48DCagyg32BJu7EBtnuSbEUZ2PZ9ocLCWRDkUH",
  "key1": "4KeuxNZtRD7nTK312SHXST7VTsSwVDntT8QaBoQKPabxdgQ5AjPFg6vRn8wALTLAkvJa6mQCbB8EP6QSDuQ8N5B8",
  "key2": "2keajimqn8V5i7Mapg2yGBXg4jreh15nTHrhVuWpJfbKJEBm3XdoaYtN3PBdD9Ar4Hr9bz14VyGHijztEqt4sBiC",
  "key3": "2w8B4zL1BoCkhWEQb1r9bxmr6mvhgeEFZNTstrKNMAJzP5EzkJLWoQWtpG1VkLDiWDrN8M2EPMXrdWypySkGnTW5",
  "key4": "32HyaxJthXmZfv9U27g5UJigvscqqB9NbcUAfprC19kFwQbkG2o2mnAMG8qipa8L5kTMjWb36boQy6y23Tj2gLkA",
  "key5": "f4G5oS6HefGjrvX4AMb7LjuffcVrNQdyUBfPpeX5ANAf4VdLopkVPY2QxuTyjfwdPFbLwfh4FAwXVZdRLmZzSkE",
  "key6": "39hj1mqoSy5kTZnyJSVoDDqKWkuBcbaXwt6LbgAGTSdG39bQGa5UD1w3HdfVZGtiQJkbRqzadRmfpzcVfTi9FRvK",
  "key7": "4mE9dmBwEfuum9BgP9kZ9mMy25CYXHLBdyq3ZbeG3UvUwPyoRhDSc8zAyW4sMDG5KqPo6x79prLHy7XQnmbpDLZ",
  "key8": "opiukwhj7YWWRRnouDr8wM3AciccWCBU7SjXALbRp62AsaezXvXXD81fAGh5wAYt4v1yBRwPcjNnB2Sh8bqFGR3",
  "key9": "3Vi3EKZMiCidWMTKKrFcw1jXecAUht4yEirV1EsVeoFCig52mEhroRXKqBKjiG3DeipECufK1eZKSRcwF1MVTQLL",
  "key10": "4AhmX7MDQRXM6yLj6VfJMwBPxJD9x5zvvzpCazZPBbxi7aS8UJ3UZZZzWd23oehr3bFJffZzfJQHLGxYNJim3w2s",
  "key11": "2UEtP6P6MtPtUq5VRoyGwJufEWVhxcpJvneFJmB9QSnRNeZdAXMsrLrW4zRW6KXtxrok8oBBDccV6hKLG2C3nL6U",
  "key12": "5UpfuyJzvWPcyKL4TiD6eEJorjt95JY1UYGdX8hfRDTkNtiWDcCohFLh7EBxW2Eppdwtmxau7Gimua2axLiSwpxM",
  "key13": "4GnGiVDDvdbKn7AeTj5zpqjcrn9tTJrpnApr4HNmVN4yVwHhQrLLMaB3X6sPBFEP4wVZcCJUZkjqV6DXz2CvXxtN",
  "key14": "FENSeXVRbrBcEowcpS9f4PESnAnqzcvVSPG8LZDcPABcPA7qgxhKHKegzAvuYFE6ptCaSseFLM7jWqF7nKY6s4G",
  "key15": "4hLytSREB4jPU2xnj6P1vcQJ2TVUe96kMMw3853doRKKSc3KPbojTqige2AhwfVcwcsQb6Bh1VxuGDy4g9fMuPec",
  "key16": "2wezM2KSKYQ2Ahn8yTnYKkovi4JScyS3dEzpNYQgU8Z28zFksUgsDtXLagMfZNrJyM94mBe4e7NMLtoALCMyjRpf",
  "key17": "55RhFTm4347PXJAPgckqE8MCLZkce9XXhPiAWVzwV56VBnJ7ujFKhLiShxYX13M4P4kZyzWyvESbbYk9GMfaJ72d",
  "key18": "5dVvWGS1KRsBmVHrWj7KYrGvbeixZfCVKEXZimjgQrzjbM8MW4Y2MYzN7QdzFfCTTYZw9LjMDctV5G6UAHBHhD1H",
  "key19": "xFSTtobsWCipoD2LaGbySDtxk8cKoZ1NyUBzFjfJaRGih9RYtYTD8AHd4foqpdV5Qtj4t8JAd8wKoB22KiGvt3b",
  "key20": "427aALR9GbiCKQ8RgRSKKRRKFKkEJzbUxBPjuAGBJWnEFSTWc7GJDe2zn7kVT27uykAC8oSUjV1eLLxaT3PnGvsD",
  "key21": "5VKPxsj1eoyhCeAubYMDtQ3R1bAZWfWZqu9mSicgX2AXcAi49AKcUwPDaFZ7sHaZ4jRuSRuqUufxzY4hFtUxNPfz",
  "key22": "5bFSamiGEsXFkKz4JSyTnNxVWLDWUSFWjGzbdWCucY6K5YE1fkMMZzpSwQ252fB9so3kCQezLebKpYXgGYn4gnJU",
  "key23": "qjX9NqhxruRfu3hMubZYE4c7k1SiFNnBFYwW6mcLuUumugtdEMtCdWKGqLpGLJWSW7WRBLJthEsx6sTbqboFC3n",
  "key24": "5e4YuGatMiAHq6JgJ3ys92LTDv4qvXd2MfyqJC4Aq4qgRQBLe2wrss5gRCH6hqa4QqW5v6yPB2wNZqnxzZW3nMMN",
  "key25": "5gps2Z6swPrY2vcUiNeiLaWJnpACSsFV73qWSxf34PDSYENdG5b7zjqcQuPyJXMhHRhR4n7eN8XsTQXy2FoyT9iH",
  "key26": "3ki565MLrzLqPBggbYX4MVJMmWnTZWFDqzR3kyzWwApN4XZZsALMACGfeZDLeqSJYs6t4uMZdWEugN9A85iBAtF1",
  "key27": "4SQZdnHGNK8M9PrmrKKSbBncX5oyimQDoGGLsBe45YkUHrkwuTH42dEXAfdR6EgLTGah9kHG1odWNeVkNm3wGQRi",
  "key28": "4P7Tko8ZHsoMbmxFZLhtexYJekXQd85d8NPCzUWwreN87dV17w1jThFcNftiibpKsDnerxRcy7M5fgd9b7eSxBHR",
  "key29": "4nss5GaVuYTHQRjwiMnTNYY8uTU5XGME725ei1rkNC7gcsZZuN9kgx8cRnCtQ7c12pGNTt1PiKurLg7D5QxZPUag"
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
