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
    "66iskcAXEGMNyDDxtA5nu4g95R9FAsgbzDztue7rKmvAxf7w3SKr8J9dNfqeRqmmdMBX4ZKWpM8s9wTubZcnRYVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HeXCaeMHExVcGecTMHQ4WE58EAhHNqNsPm4mPBB5scsEEG5VQD4qw1FsjujiaJ3fY9mFVtkZR9jqXnczk8qfEUp",
  "key1": "5k5cvVyGydVCMKNd6FXt3dJZh5nYc5H5k8UcB1ogmRnky7P1RBCSpJ2emSqHhX6uSBJBM2vWi9UERzGHNrPDG5LP",
  "key2": "4wVZopScfB1pLXypu5bnENvKR5s8pFHefogx8hGrKfYbfd2jKR7yFcsdjuK9pD8nDz77AwdTUxg9N8xQKm1aSJDo",
  "key3": "3SzyMJRLE1nB9GAXcRNyjGSZbC347v6CqHq7odQDFq4i2DmEoVjyGV9dCMa7zSojNtu23yk4hvjcfKeVCy4sJUtc",
  "key4": "3mSCPFBkHfNmcX1VKixtmmwkWyQB2mGbruFnbsHkgDhX8iatUCtAb4SQVKwP86CAQXZgnA7BRD2qh7d1L1fXeSV3",
  "key5": "28xsY1qQdWdpr8h9ydwB664nu64sb1DRTs2zj8PfHJikMTQmT6QwUk5EicpDRMziqepUcWpxsdqKT9mSAxX1Ykuu",
  "key6": "47FyxGB7LTTpjnLWbbgnSvMDXkgq7UKanVC3SAzuXCwpuFpoaHPLRpsjsw4zBF4e3hiqMytemcgfkRRcyhXB4MWZ",
  "key7": "48cDsKhtEEe7cq6qqiPDgG3v23vvNVwFyX87Wt1uSdr3NqRHtKHNM2wW1PTpRTRBznLWFq5qRVSe8SyKNXZcHxAX",
  "key8": "58kbw2egHkE4NKpFSE1EkBpHupHVorzQcT1gyi93JHNxScxPhsCTMQpmy6Ae3rb3c3BLVpuiufihacxZ92TUf7zJ",
  "key9": "5onjCNYHxABMP5FgXysFDXBiVQ3ioUekECLSeBBuCHwTJojU2Pcv8Tvc5aadrvGnkezQiNm4BfRGY1arxGeYSn2",
  "key10": "27ibQ5LSK44tJA5ujxU3f1rcpETc2itWBRFJjCkEyUz5THtPQ1VwGSASTd75pdFtc8S289bLiFsgkpdPANUJ8UKd",
  "key11": "5MwjvgA3zd53WJa1Q4tskgrHFZfmRdiGFQN7mhZ3Bhktu62hZ1idXyx56qm4UUPhpSA9EUUz485rJ8MnBHQEbvuJ",
  "key12": "2VcqRuWptabPABaukWD3yJwpAaWsczFXRpBepVMbpQ7CiwtsF5b9Z4Ugf1pAEzhFATCVkAVGQd16dqTS26n1cNhj",
  "key13": "24Co7UEjpMSe2ojVZooWwvJppbPUnTm9dft8ugtygmMELS6khhAarRvkiJqA5nJtsQ8F6ojjPAjGKkHW7D7W53FF",
  "key14": "42mfdfRTB9PeGG717NDQUmpq4FeK3bvreSura5KDWRJbXJzT4XPxQpTM9ytQnxBW9vrthiSJbQfNSDLG5Vu2BHj9",
  "key15": "5uDxZx6WPpE7TrtRyzeerDhhNRfiwv4TDysfJPxsVLLaVVJjyjc4gzCWN2JxEJPG3QADVNZJTiJD38MrVBJMWDts",
  "key16": "2BiuJtfT5eJPB9H9JM9XWrfsbZ9yBMSdpXmAvQmhzW9BiFZS4mRP5vATu62Ubh93taJYZJi71kSboWeUW3pG7bfj",
  "key17": "3oMn2Yg9296ijQ45N6wdEsCk3ScKNtepKySx3giF7mk8uv89xLFK6pf46n8HkXswWHwRqX8Et4TPZbWzD4Z3nnML",
  "key18": "vcWbdN9KSTKa5efF5qUWTDfY6b9RAMk2wQzrJ5w9oE7dqurhRqpeiUwDTYkXBXgcvBaDxzdFxZf8VfDLJ6PQJyo",
  "key19": "UGrM2TYUURGREqHmS2JRjmopUJjGxEXLaNkmzXtNcGpssh2SHadu5YvDkKrTJrufDeFsPBTW5rWQAPSx3arhPe6",
  "key20": "3kWMCEULmUWjkvp7jBED8d5NouCpe1fiQDoSKTHmabM11ThRsMNbVXk5tjS3atFHZQ1Btu3JA6EDty1bkX2Fvj3R",
  "key21": "5hNN1aoHdogmoinbtXD63s3utgEdJjBDfyxr2dXguGiyd78up9ksRyoPq42ee9pP7cMn4HVXjTQkKuGKehqH5AkE",
  "key22": "2wh9wssVHEDAuz4SYe7jKgGRxHXMjPpxFrf8kbpwBfFRwoT4bhrWEorLBWzxiVaT1NdgLh4hhBCVR5qsmy7jgjbU",
  "key23": "ZAzkvw7CPwVQbbP1JrQKv8e6QAq9jJy12ZSdUjc4ppbHn9uqqyLnkNpGjE17gvmoCpoDs4qNPPQUiSGUQZUE1mR",
  "key24": "5nuw2p85ASs9SNveaDKnn3wLAoEWgyvqjj7vakRPVbqGqhX8aRAfabxYPkfw7bvyQrgSQgyxS1PUfXEot2ijFTKV",
  "key25": "5dek2P8agRisTTKwbR1JbPUtxnRRWGRF5gTnFVguMaFBrDfc4sREmTAUUya984erZ6LjeJBUAbU3gEgEjEdLseAU",
  "key26": "3VRoAbxyHCab2RkmYqzHKriDyHt88C78ik3w3VJnTGriuaZX9LxhmLU1xtiR6R1jWpY4b5Y18v7xfpSuHALtKGTV"
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
