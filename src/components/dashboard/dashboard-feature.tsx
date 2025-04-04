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
    "3oTEuhWCzQZzUJkC2EbkeCrMtiMqySStKKGYQjgmFMFJ8zLKgLxmG3dmXBTgLkBFF2TqqkhZTsaFfpsiWNxHyi6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgvLgMuceYU4eEYjhHyxUGNzdxBLKAjjaycaWS6Uo9mQZTyK5bpUWZpn1Thsx3tdsFjer2dvVMkk8GtSzXgFep5",
  "key1": "2tpkfNPDWzSik2RD2t2rjQeKFRjE8GqqQxSZDzKseNT8YVNrmCeGcNVuTNa3gXUCZ7QRVdqZ889QqUZun1CaonY",
  "key2": "58UTF2CcjCsVKvWTky2hoUkKrPJ3ABD1eZcHMoGczGMUmxufnkQSeFKvKwpLaWLP4AaYywePJBWvtintpx3axhdR",
  "key3": "kmrxYYxJ1mMoe6qUEsjJmk15scfyobqV63y2Gjs4jEKK8r8D3z79igfYUq8fvRcQCfNt8uDMZ6zEesP6zPRjrj8",
  "key4": "2CbaZwvJzZEqu1Cfnr1fSSZ7S1b7EYqMYC5iwtGBqn8JPhNyNLWnd1jx3WViGqdmW4pwLy7VZmEb3HYqojBxdNWf",
  "key5": "wN55iVaVXH243WvgbwvnYZt7477i8V9sWRCLLtT79bHPKhiTr4SvGVi8dbfQp7w87fmDeoamgeBmj3TWLWNdnSQ",
  "key6": "5DspoFDhYngYjAX9yTixDDhkyxzJcjdpvsXqzR9PEnYSMiyxTMGt9Lnb67W9SWDcehP3remi9RCS4NPumTF6fkup",
  "key7": "17Bcfid4zTq6mfyLznpAYX2fgTJQV5XdEeVgdSefB87QPFaMSFKAP3WC6KqRrYyekhpZCGYNMfhHu7Zb8Kwc8tU",
  "key8": "2yj8pQAkUh43FnSrhxpHyBkzhGRaamr4fqEuL2PhvDsihuRXFVKm1R4dFFgZYTori533VJKt9Z8go6rSM5J2fHMy",
  "key9": "isQoH6egetkamxVgsbS1jMwF7aPkAWU1yr2ZH3hQHSb1MQjdiUau8FWjpM9phWMLfLdpEVeA34nhChbcAniiVKm",
  "key10": "57NJxSmMApyR4A2F5UkhTFeMZXFbB1Qeccyi6Yy7nd2NDVLN9nsBHmsh8FagTABwBp8r5CGi2P2zEj6F5swxBSgf",
  "key11": "4nextkziq4pCjiCXh5nezHeBj96hQPN5VPKWbGnr4jt4aKNbDfgy8SCKS7qW73XrTBG25gZcRhDS4aaqw7fLHXSg",
  "key12": "66ELceH3YoBDEGrQ9WEnA1RALMbDXeBHbTbXBGWrTMebHEW1FN8KEDYpaK4HfxfErYpx1pG15eq5p94iSb693z2d",
  "key13": "2r46kbZn3PZua7tx11iKaiP6jtotGfp8hGavReACmqEXkJyJ1hkFCqdc83WzXphkP374dhp6MdxZ1WLmseVKkEvr",
  "key14": "5NaqZBMhfHMTVbZ5fHpzGWrP3Vxx1LReLF7DYfS5vQubrwVcpNCQQWEjWwbDA5Ge6UuZRmxkbCpVToq3RBDpSFBw",
  "key15": "3A6swja5WQEMSd1SRqcUkgwWEG84G3Ry15P5sET35PNAh4ky3xGN2bEbfwVifpGuMdmSJA2a5vekcMtfcaMYFmPY",
  "key16": "4ivHhZs79jYc5ZXEturFHCEYxy6AB37BcSoZJsKCu8JEp7VtMjVkoHhwtsV48GzhJKXtEfKbcF6sSF7xMiFhFYpQ",
  "key17": "4x2myBSP7tyWRTKy7AcAM1KB4Eo6sbNoWa1mVm48pVuntws9yiVQqNFDqPAgHNypD3f6uFfPYB6pL9LtpciDCMG9",
  "key18": "4BDwqudKvsjK9K7dFEPuP9mp26MVKdttx3k41JN9HSaEFjj15XWvmzS3fahHLLHpag56RdvMvMEaLhxEhNYSVvCU",
  "key19": "4RZcUjUkAyNptXeLwtFDny4o5BSPtq7wTyr9GMM2dcdvF2frnYH8nziwrXjg4MxNSiMWVGLgqaxZwt4TFLgQrP3W",
  "key20": "aLkdjYDLhefX7meaVjF64JFdGEpjCyp2kwHq3F7UoimZvt9HYcoMU8JNdyYiMr6FmngthQV17DkLnAmYFH99WHp",
  "key21": "3K8G1CKTH62PN4PvztSowqo3QfhShpXJeG7H799pfrRRj5KNMj6reGEybhJGKAyYA1RzL4PywBwLs1rLC6nSF9PD",
  "key22": "PLG9bG6jDYTFp52SvEnm241MyddzpUYQpgrLoxPXXnEaDLrfqG5ZdnzCfsCtm7z8LSvMJnXgqPfsNu9hRDM3YhM",
  "key23": "2xaEVvrtumsA9PJ261PEivzZDqPTg1yr2xFkwXvKZKafRkbE14zKohxwHV4YgMN2FJ1hPc7mmsV7H6o8Q4qZCw7x",
  "key24": "2nUdn49nTqMA3bFLK35JrwxtWd69gm6f1rCQyL2HUiBxduUuWJh5ukcKjxdYe4RJzvgAWB1WXVmMZEhVpF3SQ7n3",
  "key25": "56PUFZ7eHc9xAKA8ZjR76m1ASHaz4kgtf9wTu2vyjJRJtVcRCmFbxKuHmhM4KoojkSNf3zHjy2wwGEKKZgSZc9XR",
  "key26": "611xjRzoYdBm3uBbEk2ZQ83ZE66XejCQctUi6hYE6xCP3gKaoC7yfxt7wuMQuKWyrfSQEgv7udZ7mUfyL9EiU4gy",
  "key27": "3yXNT1dAmJFzKRDEpC92MJ5gvDQg9B4gAsyyz9tK5WRR3KfNBwEoUrZdzHit2uE86cNS7YrX4EGTHAeg6nZHTU34",
  "key28": "3N56CCDSAHFZbQ2UYW5vTCdKvcCeYKAQ2uWGJNRHyQSjAmwKNgEpwDgrM7Hzw8ayxH5ZbL2JB29LTcWa67FhN3CN",
  "key29": "3FHFbtcBopNiLeyw6AXtzBKiY3DQtPL6aQMwmxbZgVfdRyPK76cdLNTEMrrjrY5Jme54dMEC5wcVP4YcA6CkjLe4",
  "key30": "3WoYhczjy5KonhdPJughRYaaimTPusdQUcGybPBTWTicqQCVsvjxdgjR4wwwTg5Nte81bHdunsvHg7x5jjFXWGFU",
  "key31": "5hZsZuyfyoQYC1it4jCghBtP1j9C6YLU6oMHTDwaB4GqL5Y41mQoENN9JJrT5mXNkk9SX7VCgPDp67CxmpLDTXJ3"
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
