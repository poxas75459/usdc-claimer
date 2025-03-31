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
    "5KyjWZSFDhf9iB4UVyHL4F5waFbpjY7AtMX3tLyFYhBf3Bzrm3K8ZLwsWs7ibtrj8E9qwQQRaDdbds5nYH5YuTWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6U839DPjPCWHEoYvVHzT93KUdgodAnHLnLXGZM7d6gcPBtcbMZeiehdJNGFLqmBs88kBUeMuex1h3q3WrqAWdh",
  "key1": "RHSKc2sTxu6jJieJcmf9eYej7vxzTFyP9wtkyyyGX53e4dVfnwUvX8GzBtCpfss5mrnLqAbrbqkFChLLGBv7hXA",
  "key2": "5SqNk31Vaqhi52rmvpWFxcs2frigHBnwxqjjpc3JLdmrzY2vFKgYmLZcPa5n1zJpzjMaTgNn6p2XepUwCDAY1GCt",
  "key3": "5br8GwcLARSJTBGeKdgHu3gXAKAp4buV8urQbrFK8Jbu6gHtayZdZEF2s1tgsCf7oZyEA3rHa6uE8BR9gr7vNEiB",
  "key4": "34b3VbuJLFaQtjH2FDj5tuvFjDHi3xoFpujMhCEx7VdupSHQHn1eLPuPcr5pAUh5j3KEdHymwhfeJYgzEZK25jsc",
  "key5": "5R6Yghdg7Vy61S97miyEFDHvQqCxQxpC99KXi4SqPMbNhUFg1fCEWg2ED4E92oLmUXofS9zjX7P2S1W2uHpwbG16",
  "key6": "2vXfkLwQPyqPQkvRCuRDGDjNU3dseR7ADqo8xdPZABshyyzMhartNpcf6aPREcvnRVNiVKU9aKHwNMBpZJvwDFSR",
  "key7": "4Q3xPPG5oia7V8jPGu24sWFfFeD53W3PX2u6biokjaBEGTmFA1DibyvsqsrTAt6AFRGLY19gsYt3GMuuej1xaUKT",
  "key8": "4xpKdyrgdPxYbMqq2UrNuUmHo6ih1Yk92LuUWYRkeKzJspsSM7qNMU64iwoaAxbFusHiZcDt4WjCDWZUCK2Sf3pE",
  "key9": "2idftg4LQhGxhD8buBgTj3J2kt7o1fcjxpigNfYoj8TgYK9virfhRn1tNF351exDt7gHBLgmbXzDWfXxrcKmmD8s",
  "key10": "25P7C79oNiP3k8utdbQf6L8MnaDCoKj3h7qYcVDmD6DdMxyL4NUWvvuf7PVkiuygVrckKWTQN6vwoYkszVwP9mv4",
  "key11": "4DGabkdmrZGK1gAALZXq4MNehsGeNuHhpCRdYDNWkDRMYzwCB1L9SmLUeRnYPxcV5oexiCVjS1NPG8wTJbb7mxK5",
  "key12": "3ztQbNd5nUw3a7C7HQWtij6DMRPCEXUctEvBe9rurkEPkt9c43U1srRYbK3LAYia4PMq8MV7tffuCfUSdWkAhr86",
  "key13": "5F22njscVRei14T4Q3HtRfUgyguXPJ5oyHJ9CWsxerE65RHXCcnKhRwZsregKg82LSxf2doQrjq9g2dNFE7sKduw",
  "key14": "3MyyVHgHugwd94Bz1sqyAQewpiYmcuZp9UEaB7stfP7xUox97jrX7Q3mTB96PUtHPfGN2Tykr76DcRaxBwkfH4FE",
  "key15": "4uxqDhnaNLsD9NpZmqiTUZb9BqRALdDSvuc9ddfcPN5wFyiTTvSbya2jcnfFQZ2LhaWu4AgbMvMd1fEod6GnGrsS",
  "key16": "2R1HV4GDMLAFNDADmAikd45xAsx7LizxceSSFSh3BAAZUPkuJvY1FFyXwksEx4DswfvtCKsiLSJ8zoy5bHVf7ZEx",
  "key17": "4rVzQ5NGe5ZC7t8Rb1Whyx6H8BDcY1JiPv9Jok29SGYPrwxYsGHMfe5rVRLugHKtodQQPjWcPanoMy2zSGZYJB7W",
  "key18": "KQtqzEXJ554igg6s8iyfaPt4kD9za2gXKN7YzbWrNxbrpP6yDQMHftYnwfumQQWGiKygAwuTHFXgWruKt7H69wZ",
  "key19": "3MUJA8tJVXaVwM5VETxxNcDC5XXhVfTuNSLvWiLzMJEe3BbTUoGsQYSyLLfsB34q9xChGSh59AYfsqgpwLFpqHLN",
  "key20": "3WiFRKmGFP4Y5wQ3kLtQ9Y5di9um3aqRwAocQ4vfuZcGMMroCFdtwNbCfGp28B4ubp4RLdNWj4WX1UtLeTffJuHr",
  "key21": "59s3kuK8k7hiqLuvhrmXQ3kaBNWmF14NVwR3g9UdASYqjrVG7LaByD9mdtNvU5zZnCsQgtjZxccmwUCHpF5PVLor",
  "key22": "xdKurFLvcKinD6w2D4dYmDZmRwtHmzPRnugh2qySQZdhRRauJnzogcwZh1ry3uZwPwWA33Ep8qzNs7iE9eQa5Ho",
  "key23": "2BFApsA5MDuz2JyaXttqsvUZAW9MCvWWtyZa3GRacDfRCX5En9nsfShvZdMgEkhiLisyaxzU9Gsb16rNLkwGTwCN",
  "key24": "2iYxrtF6JrFzYDRkMCSQvNevtmWoSWUx3x4xGPVGvtHuowk9dQYHTujeW97Rk4w6ALTN9wf7KSgE7RWGqm4Bsfua",
  "key25": "yjG5MWAAkKFDEXT1ACfLUeDFrYW3LoiT9vH2EUQVsd2dTbHwTmvmA2nH8HCqBieTNF31xXNs5r7UrsTGPn8WUPg",
  "key26": "4CMoJJKkJ4RbW3RVNsB9WEneWCfkmguMNwZfExdH8eApWx6bwAMRegY2rmXffSX6ERMNtKq284j85muVJm62b1tX",
  "key27": "64C36G2qVmgnzjXxRQVJBz7VQVPAeoAfZVzN2v7X2s5jA4GCFzYierdKStjkf2hwCyyu1sTgXXBRheDZ8kXSEFvk",
  "key28": "23Kz1A918MPXjFufNnMver3tCLcVehBoM3uC2Ban5xuH7tmcyD5iUFUidz9GmEwnVy7poZozLqU9nNA8fNwtRGwG",
  "key29": "67ou7FuY93C658rRC1yUz5ofGsaYQ7x7mrKs6VZmroXwThfJm4wD14ydnGQBzpf8wpcyjLQEC2xmKaCaim3TP5dv",
  "key30": "5rYhpr6X6Pab3aXPa3hM1kaDapwnPKoKwt5oWAv3vGGgCbPtHRcdLi6pm5PfJtRgxcwtDW7RAzBiaYJ7LWrPbXuE",
  "key31": "5CjezrnzUJsUhBmggQmbtJaB9KomD9dwhKsg31U3EZXt3DFqqHtHPSYeTDXSKC16i3ysCoxwtqPpKQgV613r6p5f",
  "key32": "4m96m59VkuK4nEU3jiNe82QKoGXHSKWZGZNykUTzudygENywn3TesPfPRQEdwv48aYHg35xcNPFyi8TB3U2dVMpS",
  "key33": "3e7b3nyo7BBwnVSEAwD96Fz2LJoUrs9Nj94rxSxLSqJqjqTGbTXaYxUsusoEQuL5M3JWmM1MQXM7G7FqNGAz7F29"
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
