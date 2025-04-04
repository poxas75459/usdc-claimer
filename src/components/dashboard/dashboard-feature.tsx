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
    "2PARMQhJZdoNzrukCQ1L92XRKwejpbHHW7W7ju1RihGUhXiLgXDaUEqwqxB4tp3KtBe4cufu2qxVUQjCy2uAX4K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CssnrJy5DNqjq3EdbTB6WRw7dapup2WBN32Fj9P62sit3Uxdrd5ESp4UGhr67ofciUeaJKdfWB7is34iP7hCGgK",
  "key1": "4fWLtqDadtxbbsjAoY8Bt1hvSQBRpMBFwrYfP3oJ8V86NLZAzNSrqFwT4zQ7sYXUrPN2GfKnuKx977J3ECbK9E4n",
  "key2": "Cb3yxiUEC9Lrae2kveEnLnNoPVqayfDVNNn5WorWiQKNNME27GmAWTBSeroFdr3pB1VX1VYNFkiNZuo7BNAYt4a",
  "key3": "5iZWyb1BpuZndVMujLnEyMaMGauUhBm3pNrPyLXSg6VW8xfBAGdfBCG2u8UcodmBuiqyWadgJm7VTXqJb5t6xKse",
  "key4": "5D6ZXngAgyZSQmojchoKizw3jojhorLWoi9EqUt7rRUfYnGBZyjNEuy7e1aZjNWjpgP5rbTYRkxWUFwBm6CX2uip",
  "key5": "3qcjYDmAKAzMp5NygqTdy5U4iYP5W4JDWhdkV38aLrQab4BWrYbPW3g5kjvkc5m7teNFSwjiBnzjXNdPBkGfn366",
  "key6": "2mWPDT7AU4yPdqP35eVcvRpCCBA53p8NARDxXPVdM2GUwhQkpJb6t7iRTfFuGMeJmMoYM5fca5BhLtwdYyEneYf7",
  "key7": "3GP3xNEvNrEJEFCLfxcCvsqKZcU1cHoSDeGNDrjJFAMjj5vauDGAfBbdej7jQvaQNZbdxukcf5H5EvR3G4ppZbKt",
  "key8": "35HjLH2mAxi72nKst6SNVzavyMxrDXbSq7Ub8E4E4Jno1ZU19Kv6nLVXSwb6HtmBuXkjN1TEw9fXbnyeLFdhZabf",
  "key9": "5RQgVTMHcoS4KYhH4oqNH7zjaiCMxUFVyMipB6rSTs6etL4iee6DTdUCn2ZK5zLzuDdXaQtgx13dL2BexcvYX7HX",
  "key10": "zvdzQuAfFhowFWrpGQg467RUMadchtKauHEtyR2Pn8rDgFPH4Km4SnmuTeTe2KeAmm3RiYwaHFVw8Jo64vBEWXm",
  "key11": "5i11ga8CQ2DDPMqe29yp2bQr56WGgsHHdmGGxQMCovxAT4bBZ1V51dva1dps16aXk5Y71nTG5vjwSiNE3AJ41YMD",
  "key12": "4YUbbM4M2JaMSGj3eofPYbRxwJs1vKqxxBLyyKWh9oRcrAekEM7EiBRv7hdMhwXNHTCmjVtBSGWUmZ7EFKWd45oW",
  "key13": "4QvXJ6ocPtqsVEdVC9VsyUmvkU7joDojaF8f2zsMzMF37xHixVwNQKDDQCRfePBY5QDkoqpoKpyb6jCkyaLcJr4c",
  "key14": "58FBgphwq4rSAspxXDbqKyWps9Re9CJq2d9va77Rh4sXsnkYuG4kEjMqoqHJFyttrZeHyHMDWBZey293nejrK2PD",
  "key15": "PZRg8Hu3sUFAhVvv3FATQQ8swQJaufbQw8Az5osuveMPzAVEoXDicVYBvU4nSTHLg1G52fctnhLzsGfyTMkr9Ww",
  "key16": "aWgUYzm2BfMx38qb1LYc1yViwwNPFmUBWXfSNA3zkHPUVQd6quh63VuN7ZAdSbgh6EJYnENbsmNmNm6hGhFBPwY",
  "key17": "41hmBhJhbE3jdEocPCmikC8K1LtR5wLMgeYbHsBmesDLaAFWnPehnHRUEpyuvg3KgmqLphLsiKYiJBMtJneNtPsD",
  "key18": "5q38qTq6hLqxh1r5LTcWPBgYB199uCkPD4yY9WEf4xtRS4NnvVaaALpfUvrUWatwt14vLRBDqXxA6TfDh5Mv3L3c",
  "key19": "4exBsf9jC9MQDyAzAM54586LpoFLgLkeKKHNs9HqyeoK1tmQRxo1XPxpqna5nPZFzurtB1Er8jRFiF1nJ2LXP3Bb",
  "key20": "B7at5x6GCs6v8W1qvcSqat3QpDHr9McLuu6R3qSy25S6DfgQURmeh4eUfdMpqcCKuNscUnyh7a61KqBzSJhBCNB",
  "key21": "42NchN2wsKUuxdtZwGgfnmPVWbV45F7GwLDqjaVGa8oJ2FfZmXR3E8ro8sQ9Ey58Ah7n7vptLpa2FnRxbvp5C9on",
  "key22": "4U7yiDT5hdPD7MqMkqLyqjf1m9gDxB1C2yjaeNV56m1M3wEiSFwdqu2oxBhYFfM5kECAcxFEFjFRGx5newKxiymZ",
  "key23": "8X5FxycRtPzoxwCgjmcNi5N4LG247KuB5aV8yakmQRTEjhFxbfJ9ce8WZTPcmwzxDTZKnffihPkSrbAcvUmMTP6",
  "key24": "FW4bWLvYFoVfYDMNk6qcouwvnuN3TJ63KMDyfrWSmdcHM5DCw9nqtukCDU1uJVwjAoAz9fCxy2bEHaynz6uPGz6",
  "key25": "5Tqic9Dq6Yr72tt8tWEKGYZEyLjtbaUY7hJCMwTPHt7fHTKkEo9pza7h3x94FHRaJKHo9bBdYj2fy2cxEhK71pku"
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
