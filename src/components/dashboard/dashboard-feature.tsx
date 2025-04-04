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
    "5rpRoi9JTwuSGhUguHLHzabhccDkPjSvTNtqfFkKS3rNPKf5fqK2D6CUcz9Y3UWgDwiTVQ7mGgCoEqw94yQLXD8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cCs1v4xfhq4HrkdhgUYnoY2EYQRWa4513wBxfSPUQKA8iH9ChWDSZvkkr3uqbdtMZrbeMXtB3a251CniMpgeVp",
  "key1": "5nESmUfdUtSXfbMUSKgBtfnDdhJUjGSdLZvikwXNKLLmhSREdTtKhMaFWCqMDVs6aeszxiTPRc9rmz5MS2TtZ2AM",
  "key2": "4VgtGqedMai4zYYhUrkHSbmQPKLH7hZ6w4JQySyG29ZHQsdDA618xZhpgBwf1S1vaASLGYuEaod4GbD8XeWS88B7",
  "key3": "36gP3igkbKrJQiWUQgd3gv4EPWM1HYJoaFMwixVsmMfEjuBHCiuQjyqfkFRQ1dcJeyBPRugKE4JC6dufwJ6x5XaH",
  "key4": "EvnHJw9cBJ3baqp8zREpCoWHoxmgM42YqDAziSFTaZjGxLZsrqacgHokX5fcgu47YbUXoT7cu34ewuVkYbiGf7Z",
  "key5": "G7rFpp7GYrXXxcGDu2R89idyvJap1Jk1PooJwxUC7N6spSLNvG8zrS8GTFscmDgGXaettoiSD2MxQGqRiM1NtmL",
  "key6": "PjD1Ebr4GubD3R9BXnqYTww8FQtaVtKbaZzNfezuCoHDd8GjgB8ozrKmpXZEnbeysqfmrYNdM1Kqj1yqqNhyr7a",
  "key7": "ZfXm4aVvZojchjhhydRvG7iepLeDH94PvGDJQRpXgksVsR4KikTK3GaaZDtuo23zw5b6Sdd6Q3QEKAk6XuZ7kM8",
  "key8": "2HGvA4KdKMUZa3n4Hdhz5Cn7nMJf78PyxL6P9KvoWNWDLCNHV6X3YvsooCdumrPTNp4o5yLvvboES4ZETar7HKCf",
  "key9": "4kD3FJyTb9A2VS7qVaPmFWtvgCiKUniMs9EQtVtHHHxcUhAaNqqFs5nhXBpnXwXArKrXHWUY3TvYE7XEL9LVnmYE",
  "key10": "3WFvStdg9JS5RJ47bmUNyeF4AjaCXPKmtuiuS89hzfgnfURXMGh7nxdiLnPsd55pNJ3KMYVcadzxc3vqURk1ExKJ",
  "key11": "5JkbtyA39TjDHpqbgQjPWBwZcYrT8LaxDkZRk4hPi58fED8r3THAo4WgdA4kpxXN6xvpDfyAPNogi9Brr6LYms2G",
  "key12": "4k6qUUt5mhrGDKB2VNeqAygaCGspMimzmi73AMdezqRcWGAo9vXTwPLyaizwBpzGKEAnaphaxkM3xC4cPea1gQVc",
  "key13": "2CPjs1XUGspnHyTA7PK5tEvrfcUwbww9MSHkZRMhAsvsevpQFxjLsZPcDWKUdAJUacxqSUtk3TJk6AbXzm4GmhyS",
  "key14": "5PTzjozo6Xnm4j4thxuUBRkxG4iqB3rdfYmoYp4sWC37nqd9BqdL4jSXFoFBJukCr3nTQVT6P9VXV86352unyd88",
  "key15": "3qSSirp2PYavTjD3BbpmS2hQVvExrybaCE5LzYykDXLjBzjmNBcKokBFs6sGDxopojGfdYhpFZuuWUSwH6s5nn4S",
  "key16": "52gDL57vNb7jNLaMpfGWbtLvoSWD3fpAVhwqddXavMKpw9HPqRTb7L9aVNezK9DzJVdSoLhm2RD8S7KCnJ9DgJ3d",
  "key17": "2jJpYMXqhkXkNM6WZb2EXCt52jkVUVrEYjbxAqBYTx2Z2JmMBJi51VSUDXXM2FQYANWtccnQBYteGhXJ5WsSS4vM",
  "key18": "4i5q4dZStRyrutnm4DAnUHnXSx5KGQHYMx3kxrpXiMUFsjucHjZyEqacwJQ4cYTwRuusTT4ZufobdtmVXGWJi2M2",
  "key19": "52pRy9TqhxfqJkB8H4DJWN8p1rgmuA8D9Dpnu8oXfR5v25Q8kfLmp74Argd6Dt7uremo3E6kKTK85JBm28XBHyms",
  "key20": "3GoX74yLsfSc8S6cvkmwweRWjAULWHjvhZ8ENo9qb1vWGx2aAZrrd2K3YzMtYYVK54tpXcJTtc2yJGPdyRMqNu3y",
  "key21": "5E1qosZE5JupTX44MzT6D3vkp9pHPhAx6yCK9rsWdNjVSpf3iFqXNYo1PGk3nJaWhrD2P9xf4pgnpsLPkfo9nyp9",
  "key22": "5RSxgHyy9CU8YbDG4hz22BZK9q1Mb8mRmKadmWmyTJCY4NYqTKgBea96CRbTgTz7vVVnfGgR8WWNz5XFzRiFnwEP",
  "key23": "5hTCaN3PDWT9BtMKA4FeSLgaStnnSBxZCxpHBoTkcV7Xh1VmvTSkyM27S6xS5o5psCtygdF2uEjS5s6jG4ev1JUz",
  "key24": "KvJKrCh18v5k877X4Hm7DtBamgBSt92tbJBDNLAn48VdGyusNkdkGhAqcWtXq3VDxbzdTbsnsJrBC6P8tUA5Yfd",
  "key25": "5WhcR3dvuT3k4ykJf8itUF32ZFwraJzxWVhBtL6bjxqyJ71DuYjJTJmfwSsUTuM9tZYMzSXLBEFyDQ8doEh7J7Bt",
  "key26": "4Vkr8QAAJGyuqxg3PQt9sCnVQ6FP3gYjQPZugiFqaNF5mTe38LrKVN8PLu4G3w7B7puwLipvKFugKWuAsxbVNtGK",
  "key27": "4WJ4VaFBLwPbLCKhaQMsjR3m2pjj7BHw2zSnVEDSrMMtuBFRD6F9Jt7w1BJiGLAPRPGjRyGv7HUKQR4QVNdmcwgc",
  "key28": "3Av7Mw6yMnpKmNq1UW3F3sFiEMsDAfTJnTpmDrLKT2C2f4Qi7XRqSYUsMEbSK3TyvYcd64KbUTN8DtwwpCe5a8fU",
  "key29": "4Uo2UHZfAMtpT2WU6n6o4qTyJYqMYmGqFFefsQRkAMkNgyGAigxrdwMt5b9AeNKzJvcwuRw37jdnEC8VSBDbKdEM",
  "key30": "nGqf8JfHs32XJwWTqJ6XfGWR1cboYgbrdf5rsrTFminm9UGHKoXVgVvVd8JRmt2HV55DKZvgc7FBpAzVJaGNQTE",
  "key31": "2tXAAhuDTh36WXcKWAKSL6Dxu1LcuSrPZaZ4z7uvagg1QwwDfGLXjjymmuPdadXZYKwiUgaX73R4swkMT8kK89ii",
  "key32": "51F4fKHTTYgnEsUsYK4sGv5yKzY3h4MHNyUFWmGmo81puF8kWJTGCZAkqSbfDRso7BdxwNZyiZ6Hw5ZpuaakEKMc"
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
