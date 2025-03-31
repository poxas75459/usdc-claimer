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
    "5eAgPCMYsnEEmMY683ca12oL5nSwet4CgNVjqSRTbNJ1R8WdNBKsktPhX9TDNg5cv4Cka2gZ4zzer19KwAwSzvYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGPSViRGm4ZCRLopfDmnQSMRuHJhj8mNg7xwZSsabuZgNQ3zRqLSA1zvzNPDhCL3fXsJQ4Fa4MxZqfTmC8kyNVN",
  "key1": "4t6q5nYfFw1uj9V1CRok9dKC1g6cS3hS6gdbQwZK2heYb1rwgnJaSEvG8umtYCVLfa6jVMc2HPwZhdfAKVxyJXKU",
  "key2": "2qah5nQi9qBZ8wWAU1HTq2p6urqvehqJPjRt7rMZKCrkTmFvrzn7TdF9CwApj9DDKsRHaaHZtEkybJWXMQoLchYC",
  "key3": "3nZcirha92xPpKAAyNQ8i4z3m3yhv1tPi4wVnBn3LPxMfsP9D7ztmowKhFvVUJqLnYo9TZvkgGtYmF3BMxxaEZg3",
  "key4": "39gSXtPNYi6Rmb2M8Pgai2qMKHTQ8Nxh56khSksBBrvuNzomtqhd7pbwVdE65RPf3qxcUQzRmaTPY5J3nTRgCQPA",
  "key5": "5DbkRNoV8w11TN1yYVvUijN9smSCYYfdKDMkQniusDAk91iyVSB1V9yKmbsSLK61moAmsyg2Dsg9ZPVdqtU5BXF3",
  "key6": "3WocyYAk2YQZ7nj5csqCMptVenrb7pJe7Yz8fb8wvpTCpXBX2C7AGjnn1SNZG2rWFVp9pUQQSEMEzLbf6SHXbrwc",
  "key7": "2rnn5RpGSpdzDaZUra8S4t7U42BE6WtXRra7UsYWvubJ7SeRyNScVwYDcwi46G9Z5qpC1sXFjxCKTPUYUn4i5kF",
  "key8": "67ZamibJcWhZdW7ggT21hK3bfuHXfiz1DP48JnxRnXtBjFMmnJapY3A79dVQHCnsN3FsoAfZCZmzfyqzU2GvVpVc",
  "key9": "5bJEMiBRtNFwaUQtr6HMoMTQdtMA94yD4m3N6wVtZzT9MnQYtkQPP45cg4yE6JZLgu1tbK9fzcuaoS4wtsEgZXx7",
  "key10": "f9xTVNskeawPSkg5pDvrF2ab5v1ruQbAJ7n1JegjL62RfcYB2LPvcj4orwUeUoAas6v7CpKg3zuEXqjX3uy9tG2",
  "key11": "4UCQ7UzkuhCMvtmw4mMbDkBJU6C1QMaNTSph3aWDLHiGm9z34Xsinsrs4D2FUmwedoJHDDqzS51RXB4UYjCG2cZv",
  "key12": "aXcUMw9otBXZPwtvNNqmpKbnSKkDfyXr1A9XiTQCj37kcHDJ82nMfuWtt9wvMKwxDujhNJsSYn6wcLDKZhYs2u7",
  "key13": "5d9vAJguKyq9PjjCXruTfvVK4z7xuYGdsTvoFFoNmYNUpDHZFn5UUFQMcpKHS8UK14EVM7gb7mUQZUuaL8ir2gsw",
  "key14": "BpMc5SpuYNzDZGKBid9ZaGfp5e1USHhLmAEmS38YEuJ3gx2EEjPTSNqZ5SWgArW46K5EKNSnot7UQtnywaL4mFv",
  "key15": "2abgqbsomS3Fe2RA1jhn4mtzgDecmAFydFf81e3yDE8aSnqWUyvRhqpQMjZx8ufhtdLExaSxyWhehg1NaosxfHM",
  "key16": "2bXhJf2qdtEiP8RQzDEoeSUEhisU8SQqXMZjbBPbd9DUbGhRAUCNXym4RUabqbH9QJfrioNJMxWjoC9RAAzrzYky",
  "key17": "2NayGpwnhxXzpJkYiy72xZPuz3YpQydq2XwepT1tdqHa4oqtB7oUh2jgBbeNqfBWZxnPikDQRXmzGfzYWzACzdRK",
  "key18": "5JjBRVPDAUi5m4ZbTKC8Pu1pu57WvcRkYaUu8QdseoX74Z7miisXXAKAvxxQNV3UWpFKiT1SucMmtnCMjdWvzKA2",
  "key19": "5hgiAxsKYrf7w8q9sLhqM3D2jCCcFiEQAomwFDhhy9v1bPLXy74ziM2sr8q41e4RfFRNERibFeRhi7H6hB8G1Pis",
  "key20": "2rEkhT1Bp7vGf721yEqnLeAwV3e799fHTLTFFzSzh1z1tQomqSSfo3Whf3K5m3HYnU7DJq9AWjQYJVP2NuYtc1Fn",
  "key21": "2BZKojR2ZUTE8hCLX66a2RZ25BdEoYfQHtKftcw3JRPUTfNaQcTier3qg6Pa8ngab7tBAQRYkkvKQH8Cc5ACLmUh",
  "key22": "7VYxDz6TWnbVUJtxdSaE6mJXyTnNsywLtxEz3U2Nd7zg1tYTwZ9VvAeXHe9vvcjgw7Q7QrT6LA5WjKsnKRSZRzz",
  "key23": "5RVHP2zJxW8hUU2F3KmvVgTeCGJg5ZHG3fctfvsTXaAKiEWhG72eXMDSX5khU5oF3BteP6SPsH8s8nTcmQb5qJBi",
  "key24": "46VrCfnuPhUirvPafVbjTiPonAXvaPTVUQoriN7WAHkkMwXYbxPzXHtWgw6tTFz4q8wP2WwnHj4hAvXVakPbd12p",
  "key25": "244LqBwKYyPgySuhyjpPaMn8dmUcnM6dvbkBCaa1ScEL5tZQgUKxHWfXYHVbPmN1PnGPsbAjuYonGwhUdzpbVJP5",
  "key26": "AekMXnACLmsBfQujNZfYqoUU2nJFdwLKFsmWDa4pHV8yC5WfRTJogDMRjv1YcqZ5G2xKRVw2GfgyYaZXCASXm6H",
  "key27": "41r5jYAYTKp4XwB2qk3sURTHLqUVc95sqxzBbeZZaR1VrmBMvEmB3pqoY5GSKcbDbhzsBFFcFoA1ApJ6vghv9jF",
  "key28": "4Rt6J2ika4nyzn5PiP5rQFwdiui2miu9mqR3Rruvhzb6txTR47HcV2dkKJqbPTchPN44A4vgmJr9gi7JawvvH2ht"
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
