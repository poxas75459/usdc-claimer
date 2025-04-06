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
    "3BJrVQ8H7uVbT9QYN29aAsg52DFnCXp3TVtYJbt6Ec8un1GP97BFXjoNZPFbMYxGuTgjk7HjcyVHZ7bqaXBbLdwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vKsSZsdcbWDdk3GzKeC72uT1tg7ombUXK233oMg5kezShCmSaidBeBbE2B1Cf2FHLJjcSfBwyHMFX2rG99PnnFF",
  "key1": "3DUA1EQ9fKthjpa8tdKC8vfbPHwZcsKSz6v4LFLLhi8duop5Ao7EdPgd4op6wDDXf3VfSHyoa1VkmwqgFyAZhwos",
  "key2": "3RfLGB31XMig8D2s7oco4HrpfLZBZizERVjJPmkBbEEKubYHfEsFUWhk8sL3J3Un2z4Vd2uFrTTeBe5skVo5BbFP",
  "key3": "2sqCBXde1k9tmDhhuh5scL5zejzyrGVYe4hsUHWsJq8ybn7FQkeVQAd1vyRds3KFJb5dVwAYyayXyrN5SEAKAgxG",
  "key4": "7LkjnW9ArvfjpisiP3FawCA5AqjKvo3UdR4B4TaoRaefWXy5JHqjc6AbjZgD85cumtLouChrc3in63LfKTYG8JR",
  "key5": "2MXxrotu6oD8ZDPi32MpVgg7EDynmCFjhNCzJHkvVEcgeRagXfGBJZfNtKwkTxaGoGBgKpZwVUFr8LkpvwMLsjGN",
  "key6": "353HfoKeHzsq5QQwEY5fUbV1bdErwiY53WUMeCSxHhT7BbGbhTNNbq3YCqt4wHbXSukRWzEfLvgcfnXgeF44MKqn",
  "key7": "bh7TRWKSxHYU9WDY2gXvCN6Wejk3E3zY9s1cU4JwirXyp9XcsTVKvLDwGRYY9v9QW1vz8QgqtD1qVAgvh3rUTAW",
  "key8": "2SjFzsfZvECcrip3v8ztDy7m5HXwu985kedyHEAWEty5bthwxQSyPD2RC8o8yu4gMm4xpzSC6AWYNNegTYfw43C8",
  "key9": "3Aw7aD8uayP1Jt3R21qPYEkAS13Rrm9LxFp4AkrSYkzF7CUJup9sAkVcASCfezYXxDsbs6sioxM5MerWYaYPMRbQ",
  "key10": "4cSdLRbvhWXgaVLxKu3BPAW2bVsdtCvsMYAGwxTiPsmTq4ddbbBw348f8qBkr44Jbnj7BdgqXVtXiWKXtZSkHSMa",
  "key11": "4NwVRSGyYW2BbirxhFWqQ9dF9ggTRYa2QUzNTp53d9eCApc6k63p89Tyj4iohsbkZaik7oY2en7j1XyBnkAjP5eP",
  "key12": "3icJ5XLATA4vcg6VzU3zTSvMFk5mgqtpNJ5W2iv1MhHuTaDen8XxuekPDA1jtRsGfHt9JDwjhz6GvJAAGjE3CQsz",
  "key13": "3AekB5Motv2Ry6V4Krh5cBGMw3kuxsVhgmGk9xiHuJjDjUWCA6AeKhhNs9jXVWpZSEo349SwBrWT7P2bfdgneRaW",
  "key14": "sYUZ22nTEM3b9GKrdPWuaUuZVMyyyzVEE4AM5N1v6LtoDfSsBSd62yaEzV7xogyBxeFyVSDfGSFzFwnmLahrHXp",
  "key15": "2BvXNhPivL1X8WouvQPX2mEgGCFAA1qSi2CLP6gpuicVgE9XgtKftm5tM2p4De4JGuFuJ3eAKv6Bhb83GG7G1aN1",
  "key16": "4kkuRtr7hu1AeHJgojK5w6yu5Rb382xJv82eZDRcv1myLggWRj75AeuWZHLznNa3DEFbbzSGprBHE9otRf8FkVfH",
  "key17": "3qaB4qSp7wjv6NcSChJL11cTtUPoDyhhVguDNmDaGDbbcZ3poJ2kgGk6NtxC5n4shiqnmkpXqweGng4yqjApZHD7",
  "key18": "4vFv6N7LivSNScSgMucJm1Bw7jj5N5pmmv1HWzbfVxcVC2F9NnhghRWV124wudknGcTrprsWNXg8sbA7b8asSkyn",
  "key19": "2u2Htrm8qjAwMuB8J2nmmQNwxqgbhhdxUTat9WVxxWcpbxSfUpRPWcAbjQybLGgjsfBzkUmfNtZ4jQkn8gtM7R7u",
  "key20": "YvBs3tWoNHePVEot18CL1TDD1kh4STHhoPPVxVHLLHQMBV6PbWqwm33xMUMLskoaSRVuY4itN4DYgAhvfaBey5N",
  "key21": "4C9AdxfXdUtGj9kHzjwnsBG1iLWkjhQZpvFQqdGh6Sum7oQngDhN9hn1GfWVSj41Dzfba1My3zbHNVHShUFLV29x",
  "key22": "5FNSteGLkBafDfuGCyFEqH13bPFAsdB8jxBvmfZSeBNG6x2VqKqJdf8FssVwLV1kB9w2fq9WewMw3ubYUdo1TveE",
  "key23": "3T6DR7AVEC4sGNXuUCyrr9QVtDSTiK2en5EhATWpH2CLKrintgbx2gwWkE5cLdb3oKhkzh4bW1THRySxkkazUVh9",
  "key24": "33FnCimeB7ior4HEGeUPcRSDSNaLDPrdRFY3WbHQqDgJPP3HGeFEqPz58wiyLLkEmmaFKmrjrP3sQxnwHRSKifFM",
  "key25": "5owRXpDXd5p3u1Teo1VunuiCE22bGx9zHASWizB9QCUy5sdAFgmjjviteJDxF6Lb6efYDjX2PaJCYc2wxWRqz5y2",
  "key26": "54cCRVMGP7keYMBwNBmY73Z5xbjJG2up7fZbY6GXszXYsSDWdX4uv3rLcdbXGq2y2jUKDFvkvYney5wPuJKmxdMR",
  "key27": "ri8ZqE4kjaJ62iCnQbzhA5VTwSmiHW6Mm92x3xjqdHxB91HemjVobyzZnbF4vXsFZTzdUnGmnyQg2xixc3KVVwM",
  "key28": "TDGUG5vB2hf8igo6kmJ1NrbPzkYifzVbFnAPSwdPkyJJxXgqdrF6pKRyQF4QGGegFKUPgM1trQUT5CUNk7XPpPX",
  "key29": "3BhYmKYnnshHwbVubSgZVWnXCfuiPeWfM8JZY26bR2QfsM8AKp585buv6E8D8dVb5Qz33pcWNuWDLcgZtaLeWs5P"
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
