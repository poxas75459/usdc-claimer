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
    "4akvjnj1rtBb2EAEG4DuqaNVjBMFAzrJngxGYy3iRbZec3Zior5Jy7691NUo1EhkRJCKyhopv63reocekthgqJJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bSEvuEugLzB4XnqZ5CthbLZSKa1fJRk3ZX1Rh5pjY9e7cPYyA5TQ1MgwB1LfRujr62BeUkgKq2mrXxVWPdDR8Ru",
  "key1": "3JyiEzT1Gtzs5xV7DdATcdSzg5uQ9xDeG39qcnZ9423pNzLMvwqH8pFzg19jBB9iYguLVUKvHX5ufcrRf7y67k5E",
  "key2": "cXKP5vMHKXDjJBjPmFMCYKgopL1YPLmDxXJXz7UwrbgVSjFrzj2Knke9kgmsEmoE62jZ1kBBcEsw8iUurNGcB3D",
  "key3": "67Gcehqy4B3ieVoLUYwwfgGAiyLT1cNiiwyMisyvUqEr4sbeRMpQspeecS6BaHHzpJwfzFfy8eqGp46ET1rgJF6z",
  "key4": "EW6wqkZbyVYSGkQcrpEndW9EFGtxT7AxWPu12vcnpWYwZUBK5SxZHhKS3WGMXxZvMYsRLUfHtqFM5iPRoxbToMS",
  "key5": "enjEeexrfdMrFsvuimXJJt6AEaAi9t3zDgugLEfbNMMNMHEiAiTzCxqL1bwhrhAhvjYdS8js7kSbwAoapCdsvgf",
  "key6": "3BHRkkuG6vBNQhPYBHDZKP3GfXwGC8RBmtx7sdaPUpwTdCSwETDNfsh46P8Hy9hbasgLmFw1ie4eA8pHKyCx4LHf",
  "key7": "9nDaNpZCXjVzHqU3MHiFLiKQHmnXknx2ju2gHMvmcqco7Va1u2EHRy1Y8j6EMQkTtq37RuFgu8xDbQTG3ErAxb3",
  "key8": "gn2kTej65cF1AEdZmdGDhpXZRxu3QLZEYRy5MrG3V8u5ymuKQpFA7aarx3GBTE64twcJZ7YKzgjp1or48ZkFksy",
  "key9": "qhkBRJ4wRH8ZyBLXwkf4eXe4CUTbqgzxEpwwwvfYxj15e8E4X3TaeebMZDPrs6kW3KNBkrm8XkRcKbEMu92i2Up",
  "key10": "4FY7iGWhVatLZcJfzBD585jfxQPRzNdNAfMUjmnnB2Q4haYqUgFSbtUSabfcsjxMeQGQs533iA22ziDLEevpX4Vd",
  "key11": "2n9jQ3H5qu3o5PnGXCF1NvJzPvG7awqSrdoMY2ZRixgvGbkEwzzbHvxsaVPCGgXoHwZujfeBMS2gnxLbSnrn8iMK",
  "key12": "3bKVrxW3zhf7hJfKhxBktaYTH9QB58nWjKc5dnPiVwQKTSYEMdfz5QtsjfUdpdE6TdK1dCe9dAgTHCQbuPR9koPx",
  "key13": "2heYH5rpxWJYFHFgtWfr7orcyJrHaJ1xLKHRVCEz215uqpson8FN9xShW8bD7oMWdxdEBei2PdqZZRkH7bP8Khd9",
  "key14": "38bbG8hUqAn5hHChhHWLAfwBxKBaxbdHVXFZhDtiUf4AnpgcDLxKNQhevZxKtBqYTJih4Jw6im9tJqiNkhB54ARc",
  "key15": "3Q4taaiyG73aZEQ8XXriNtr5hcReNVV8pBHt31kqVfcs2Tm1orege2mLkUMUMHm7tMSKdpccxywxdrufPcz9hv9S",
  "key16": "BPF4YkTBmaskyoJ2yCemo6qJYu3XukK43f43Nxp4VcH7aGFG3TbsLh54V5Up7bHbfZ639P2SnkR31XuBfHpxBBy",
  "key17": "62XWMjk7iQsrQPczDMNMy9aRvBmJ7AZhob96o98jnfhMk7ibnfmb9R8gzxgsZ4TQnt39NgkRG4o6RmqAeRHVV8Ss",
  "key18": "57t2iXGKyT6FKBjgyohEREmb2gVuAnNcWFnN8jMVVrPrGAzpLUzfyTUDbeAQxNAEc2mbLVzR1PyjYgUPFCvYijNN",
  "key19": "3abwP8goBq8fKHAeCnHojvij2WUMQRZbBEguQrdFR5mknqLJhLaXq9kkqa1Ryx9MXsybDocNzitZGGwX8svFkC1j",
  "key20": "3nrF8DugudWYaaCrkAa2twpkYo8xcvhoZkL9m4MsWJt7uGwsGdRvstTxx1eBJN926EFTfcU35xsWRYcX8gPb9jXQ",
  "key21": "58FHCHSELK9P8wqxS4bwk7XK2VpdgUeXFFnhaKbnTBQQod6Cuvs1ijKW9a5u13XokEaqsVUdCm9qewNXbZ1fP5Ha",
  "key22": "5xhRk4ves7j4Q2JkvsoVi8wPdDjPshsW8j6KhikkCx6BDoGo65cK4E5KCwZ4Y47gUkQML2TTgfbANCUMVsFSjUau",
  "key23": "5A6KqM8gy5vDRemRVAan2FiNN1uGwrh3nHmqdGEWEjMDXWcjqkqS7is6w4jtPDbVXsSVUyvC5ntHhuh9sLeyxUzH",
  "key24": "33gtqpoMYEwvoesUwxsHEUGGgZ149L5G3KvcEihdw7zjkhGTfK95thqACQoaNqBcNbpyH8rgo88fx9SJope7DUBL",
  "key25": "3iauRPspir8vWoo3SNNdsxdcFCbAcJs7mE2GVD7GxFjFV9zbx7vjfDTtmuQgMQf13csjehZkCeTVcjJzcivmQCbK",
  "key26": "x8DpAdr4woKm4oBVbsvVCiHkgJRwNphriAn24pMg4y2BR1jnf8MtpaHhvYCQaBSACn8XigtVddA4XZmZEoSfTrK",
  "key27": "4j9GxbQKt8R4UNnW1CFjXVqQnDuGsAj86nTzcF5WmgFbxWJsHjWyBafGTdqFNkVCLyofnXAxnqyf7rgGmGDDR8qQ",
  "key28": "5HVAq6ozZMMT5c75dqyKxi4zDEYgUV39zLD5GkHgQsBbxiMzRBz9jwsojN95S7NmnXsrVSwphriopsyXkmkzggT1"
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
