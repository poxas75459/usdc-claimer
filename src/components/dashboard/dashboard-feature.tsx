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
    "aqr6SPKE8y1FKwomnuk7R5ZH8g6D3LbjBui59jnheFMenYjNY5DCMeCSnQkqDAD3QaY6eRtvYz41k6RDyxbYzbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2Au6EJWqtjw3LMZi7fv3kJShee5DTNQuPy7xr1rc8EbxBKtM51QP6PJPHdQeTD4YuA8H9UPAV4TZv7nQFWKkT7",
  "key1": "4mgW9CdVTWGHxG26GaspG2GdE9XbTNZ2bUb2wPgVYc1NipcNm8VD7zRCi8diyeww9We3u7CbmBBXxjqWCAxjEmoQ",
  "key2": "49JtdLQZLmbxD7Cjt88zjNTT2AALQGLwS3ShPwi6ac4AijsgbRzd4NZkzAR1MbzzQcEkVh7gKpuMdkUu6WJEiYbN",
  "key3": "3WrRWSYVTpjcJ9cPbZA624soCBTgQt51efySJVf9G7qENyjef9CLXsZp5uEodD7dPxCkV9YvzArEE29WNHN9rA4P",
  "key4": "4KEWJyeVxFyywiyNxzuZXLYqgS8BC72vDrsxhMd7UrPfywPb8KpArkmWwC3UeWZ3PMtJwLb4QJ8p3GESWA8Tb6kJ",
  "key5": "2fNruRvUvcYBZRhqHhJLPgjqT3b3u6oyUwrK65t8fUD8hNdSSBQthxo9m2EPqf6Y8fX9T5Wn6PpmGrbkwSBeTiCt",
  "key6": "58rtVdrs5Zwy9wjAUhXKZPDXsF5oG727eGUjJqiMTygVqKEHaM8pk8AvwZpqYM7u3UtFc6qyAnVQXoGHyUysxHCH",
  "key7": "7KvwoKgS9XtdBMKFVjeVDCRkG1Qb4tzoMcxvuL1m3ByLuEtGz6X4nu3PVnVpcjNhmWMbHZzSmK6mpBrdxaCLzRv",
  "key8": "5CqVDEE97LdczAzbcZkUYxZfS83Sd2kj1QAQQin7wPqY28sjDSRxuBocKFUucL8zNkTjdbHhQuiJdV3JmZKsHqAt",
  "key9": "mstz7Cvvf3V96s4PXF2UrVikRuysZQczN8eJpa93AmwZYkxcjUy9aHd4uZPhxe9S9VHe83diVkkTgwnJUtQnaeE",
  "key10": "iKKnJdUW8kBNbnFYgqNGJopAUNLuoYXjrFMqJcRkd2nPwhMFQJkfriuPAidnwVz2vVAeVm7fZHRDZhPhoMzjHLH",
  "key11": "2oZc7ezfhUwobEkWz3r82jJ8adY7tLAY74vKDML9PjHtSoNE93bbqtYoUAuZdHFASuMwzJqRBcrP75u4PzEAn26p",
  "key12": "4iDechyW1qEwKxycLer6U59x7MUzZ6aE99HSMNrqY7seLVyxnKYC9gwYSS2gqNbhqzCaNY3ZrCp9kkVzhaAJ4xyX",
  "key13": "bHjECCoPNVNkSP1XCSKhNZHwJkbUG3Er3HDmdWUbxywYyajq6w3AQYtJLMRzxj2jy1YwPhe5rKqoM6rB7BqftXV",
  "key14": "2MryPNdb4VUBSKWhQ529JoUDckARxvv153GJmBm8EQM3uSurcBmRkYESpz8UDhxxfSLb81ut7BWT239VaBpo3fSp",
  "key15": "3oRcLkf6Vum8Pf4kWacKCjy8HzzPG7SjtEu4JtwyFgW3J9XQj4W4fRgvvx6AmDXZHQCetYrRd29Qh1aKwdqd4sEK",
  "key16": "3VAVXshaPp9kQggKj4zBCtTgYk49EcinDt3xh18qH1zydTHaFNtfn48ip78kbvDmZwFPswLZU6wTdtLKGwQNNYVR",
  "key17": "4bNpCDansp3tdDv1GjpBujpQHaass4hX5RFzAycT7PFuxix4nwb4SnnowHjVLgX4N8HyEhUyFtBaeBMNKkijFA3E",
  "key18": "HPyPu6QDwdxQs2KYwZ5k5vtTcTBFYkBC3vhKqJyBJhFrWjd8r6vam97Y5wWF4tpj1WE1hcnvDMWbGVKifUwyfBY",
  "key19": "33QERqgpoUmg1ZJnNUc313LcKRDj3WBuFamwh4isPB9ByVNu9asDmiPh4CksFGGJ8kAdsSNHJMMHC4ogmvupKyFL",
  "key20": "3RCdg8Z9jJF7Vr5ALw2wv86HFirHjYAN665B8UFT58pF8wN48UDrqb247QnzTKC5Xz7tgRxhFNaxz3oduJpTNPx4",
  "key21": "KbUDfyNNh77eTZ7TSrNGTbz1CuT9umDb6Y5MLhr8asQ9wWc7VnJiqXJ7DwTiaicYK5tRRQJ3x4p8nqNntD3pqEj",
  "key22": "4QyrrQ3Dy5g4NLWssgdRbkzQK5ietRQFq2PmYL8AiyUsWLyT9kJCki5KucZG2iSsD4Kv4k7ueHuHTc5rDV1buSPb",
  "key23": "3mAZEYW2pSL2xT5KwnBZpPeUPoYYyW8KprqhHAdDbzktiWUsbLLD8vqr7kX9aAW3haco3r6hEftyRHvoWQVa88vg",
  "key24": "5qpSHX2y6dAzQCzqB1uMfPBV2dQA3SVvCRMbqngUpMaooWFoXAMzRoVH4qLKTxftYZ3pBNSdg9q7aLWsmaQbFFGC",
  "key25": "3kN2rtdiw5Zc2oGqsthLHf3Xn9G7P82oMcazNHB2nh5iwrwYPY8fKqdG7UTE39KaSDk1rs7ydgodX3Ch4LkNrRy7",
  "key26": "WMPc3HzKe7ffP6CB5eNstSg9dJjFJR4EdATX56eEJSQ6PJGcgNecAZsC2X4C6dww9CpdVnShnEKujn4utf57hJ5",
  "key27": "PdVuTALiMX32LxsaYoVKP7A3tkTYQg3zbCyUGxU1oRztiA6LHk8JzJSu3CRVGYrLcBPKNNtxvsmzdw9LKK1E66x",
  "key28": "5UWAu2LqqTJpESkoZ3Q2rn1GoRTKa9xAQzW3Xs1sig1kn7M8LVCjhJVM4QB123PT11Ahm851sd35th6r7Z9wQ2Wg",
  "key29": "4STCorgDuJsJcAuHMrh37oxiAQUyVuPvyAMgiF3tbfZgLv6mahbxnUQseyXYQ2vVEESYFHL7gap5GNK27xHch9tD"
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
