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
    "3HAYVFkUE3vzFttWfAUnCg6YPVwDEMPMcYAKWfYE2ZT5dSf5F27HBikNAyucs6zxQcF2hczZ8RovJTMhRzPuC7Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUB5BpHCUjR3TkXNb221wbvCuVatVCD3SF19HcP5fH8ntrwqWD3FLQZzURvZdg3mMUXSLgMx2EDoFoZRGGnVPAM",
  "key1": "64DYTz68pt42ey5RfySc2Na8ikSSbk8mrWFqVdQSBYGXDaNgJQJ4B7vFuugqk8wuotKXq3z8ebPCvELPjBrCsGqD",
  "key2": "3gMZzp9Pv5Vq1Ae8Xy1GmPXA4CRnwDJRBxVZYw86QLAwMP9WNTBf2gBEA4hu2it8K6DUr1nL1xgfwUCrTp5VB3f7",
  "key3": "2JxfVchpcCL44v7qHRqz9mXQE5ctjBR8KQErjvfy1WsiTUUhyu6tNmSAtewtvvTgs1PgGUozN8RgUZYvd7J4S9ft",
  "key4": "vAKMnqc2QpBheTxComAAJcASh4ifhrDr5KMmyBKHPNUarCPJQC7MyFLKYADLf4DGEj3MVyov5m6zLt9DvwRk2Gu",
  "key5": "2L6bPCYpxvdA6wybqdFjqMQjsXTvP44UPQw6N76ow8fVhrVxrgQkmhevqUfGTiTuKnzrubdzsdL8q1uhEUf7BzQd",
  "key6": "3eNwwM19M9ouJsuS1UJKH6dKHpJof3eZYnkEQQP7ssmGZUchM8V6KGnhsyEHGRPgaAjq6VxDEpKJgDP4deBwsg3b",
  "key7": "67DN7qXE94iLc5pd4sKyunLnzKK3vQx6vQLVy2qZBuW7s4wLe9TmNZVR8BmSgdVN8Z3AjWFj6FhjWCskNcBivvRn",
  "key8": "FvLwLSYCC6jZMKjgod9eW6i9ck1evWq4f1u5YciLo5Yod8Np3WbhczPkXRa6yuu36Fsoek33J8RcZmbCP4ZZJxB",
  "key9": "j2awaBKE7rZSim4WcGaLuU5xSXyNNcAPS6MxL8mtr316A4A5Hon2xSuHCSvRhc2jG2sBiHnpQBnMtUsS9W8q3mg",
  "key10": "5mq6sWd8ngnFPFr5cPkLyoqTs4SFQuf22GxFpiqnhJYEgqKqkdsYVYiyCJrPC5rm5XPTs76KcNsJxGqKaEHoy8bz",
  "key11": "4HHpNtrERdY64snxXxDXatDBNVyRQD9W3nVNngtXBsDGvKwZC69G4wPybBC28RdRPEWxP6Kc5MAoGxVCakE9T6ou",
  "key12": "4kmjjm3QQZdttEBoree4gpB3f5pkATr4pcVMA9kpe4oiz3WZwu3eKwYtccj68dUHcu19oQbrBwWrN5VyYDMvH9Lw",
  "key13": "2nZdcVVcbVAtmGqdiuVNLp8gNyspBt68tH2J38cUjkUMLUdGZacFvbz68TupPZ8YrKid3Qxf4szBTTMJmWysVMbh",
  "key14": "wJAtoDuVQ1i2uJSVuTFBfjaArBaCDrDGWWDBvKFvtphSFEm6sJJKquvYp9ppbJp2FSbiRyNuNJ9A9c3FUd9LJv8",
  "key15": "BmAWHxuGyY5fbbrFF73iMP25rp1ZDJ1QYVJWg8XQ6yzScBFoKGEUdAvQfrYczm5D3KGA4z8U8HGpJtULnSgmUwG",
  "key16": "5cKhsEeAyJWMiXKms7nmwptwrS3n1GhiTxWxcePqYzRvj4rauqU3M6DYzCk1ewAX4BznyrDh39xx4wuPeWxiZu4F",
  "key17": "4SjTVS8tLoSjWqGRRxxE4t5JMERnXo4yBo4NMCodonx1GCWXqoJebx6e8qXu62vyP25dh9BisB7X1yURpvMTS9EH",
  "key18": "5Khy74AeuWXdyxkciMkCq1FFEtVfwMC6rsrJ8oEDsycMLAWagCsjV3LEZLGyyvXVVkhpSuUn7RuETLEzGYCqSBDx",
  "key19": "4gW6QkE7jCRhZMHTdDgpG6oSdde4iBxkXKkQ4RBhMEtgGeYd8PpuD9ZWt3cZy25cQk4ANtWERki8n6xwh27m2NuH",
  "key20": "4BCm5FzYzePLvBvt4AhTa7N2hfYjuCHvmQzouCWuCJ38fygz19pt4a3cLHgLddbGUKNdfd6jVbdHDwvW4UVx4HoA",
  "key21": "4s1xLYRLmxicF3XZjNYi1LGcBb4RQA6yhwx7CUxcX2HSzsAjQv66phfPcJbmYbEN8LFycR6SWkfMm65mJz5x5eiD",
  "key22": "5EuDiLXdFXz5CHHZ4xuRUt7hMJszqY3zQbqGH5qMQ6AefSZ2jdijuzK8ezH99GWVZsaDzDwt97QnLVG7Ybc6W9ZA",
  "key23": "3vac8P7d4f355je3MctBsdKvZpMTiBDGaf2CxQgCPRJ9nRbiadALkdPReqWmyVkBJgTE3nnCXA3VjjHi6LdsQHsA",
  "key24": "57DJeHfVVWaAsSHypmfXnBpBvtkFyAqrcoL6RZbTWCDbYUpnykrJMV9BgrgMfyeiDkWBpPRLJfDUsd7AcobyqZTY"
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
