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
    "TgmaopmyxJgPyAxtA84RZXvtgrc7tFVc1XkH94Hg5RfxhfdpmeTocA9mWEA6WMm3TWXRr3xCYmaUKEMzCq5vHig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDvP9VRaZ5zzutC4RP4bDx4tHRzpHJKMLJ267t9qxAG4Uz1mgfjxegfuTcA9MSZuap5VWVtekEPcY7Vte3LVC7p",
  "key1": "4L8b5AkW91aJYN4AGnrj8MuSXVYfX4XABFhbUYRXQRbwYTax9ukmB99qdc4FZxj7cze94L84edPp79ms783ziWEb",
  "key2": "22116pCcpTZpVMQUzkHHTkuUVLkjZp2XzbcKW3L5xi3Leh37RMnFuLvsmGGdapXvYDdDMp2zT8obYmtiinJGcPD3",
  "key3": "29QLpxBYyDxQY8onStHZHgP8kK3aQyAcweXBhGtN8ZCwEB1T98GFDdAsMBTwssm4SNhkyWwqpZw3PEv2Bm2bT6Dk",
  "key4": "63s74H2oxD6D2qUeaQtjco3VLMNH9WRU12WV9CYuH4ZiEcPSszzVq9gYdBfavTPqrdrPsUpZtwFEewtbE4Pyxbdw",
  "key5": "7seqaGeftubVgKSfeTiN7qF5h53fzHCAu7DRJrtyiZCSfdTtVsfCQsnPBw4uUW1v8h1PrTg9NFxdCHfnBe16Qbq",
  "key6": "3hz7kE32T5dzUsmPzDmG76dUTR6DKjBsDRmYoNuKiCxT9LU79wFZphKTATn4enLgfwUyCByA2uhsbYWdkajdBTis",
  "key7": "5yL7ZqnCxwfchozqw9TV3iX1e1BLEqxnmGvpyVGbD62KUkgsUXREBjcdwcGXLF2Vu5VD1FmcKQCJ2SJWaYMtY3RP",
  "key8": "2HEy6SmLuQUVRUCtuEhTL2uFeUn5XNHXfQCQNBfibQXGp2Y5wHg3MTGHmrDk2bytzUv2KSiYdwdpLFtQjBLW7ok5",
  "key9": "3uMvptXFpHSWtt6pobcdpAK5sNNmqMxY6to6wryhJSydSRjtjZj6c1p6nrLLk4J3YnTpGD3oF4dHZggjb5AiXuqM",
  "key10": "5Fe7ksukrRZV9Dgfj5jkynCNETcyEZHJdnrR2G8Tn4C7K5GNynyD73RLpB6LSPjPMYvJ2TqRGPx33PPDAp91Yp7k",
  "key11": "4erWZCmXNmvTj45GQuqHArwC1fcNSSqjWzM986CJTxbfnoBeCh49cHo8mHHvFgQR8sht9v2Ax6Eq2b4NoSoEcUPc",
  "key12": "L6QFzbibrdrWHdsTgYRkyLz7LAdhcGUNQJDfFtjicKR1sUqu8ZPPyJAS9Wzvy4KtGpjD81jGuxZaTDEtqjTHq2S",
  "key13": "4vzmcBt73LXUwBnYeiViR7wZGtNKHva4nkPY6ucysxvzxzSVrhWeeJ8Tk1HpWoBYpkuP8PvSGuUaGf5qCuCmJ56p",
  "key14": "33GFadRh6Y1craE6TMnUWeUYuP2bhkiA576uxrUT5sqakDVMaM1cqhtuoRNma2yf7k3cKdUERVfH8WfHCsjoRiuJ",
  "key15": "3wsjznUyQjCBxmCx2TRvwVeABDhA1FLzSvXNgjbLswzFcMfXV54kiXsGTrviYjS4Gr4gRTxWJPQeNRnyDLG5ohHW",
  "key16": "4Ca38zjyjbBvXbm8Y5vxd2YXiqRPQ6kPTK62TMoZYmJ6bz1xR7QtChYMTq5H2LT87TzEao1ZMUUnRdAURiNvqiUh",
  "key17": "42PjBwAv8SacjMJU56271zicCMmBvEoj2sBAgDE4MFZRQV8t8MZkCcXfdGQAbNomb5r9dsrwPuVd218cJ2rMd5Md",
  "key18": "5Jx5JBTgixr4B9YL9mTfySvr1hDwcSCxeci5oZ1egevkGxxd1v88u2WALuMkqKEUuxXJeeb5vH87ofB8DXgaAx8h",
  "key19": "51Bbz1ymHE857rUaFkQf8pAeCVkrNcR3EQWEJG2k3W8MgCfY1szS7G4f14JrFdvnYPnmwCXEnPFCJMUy2eZkmLZA",
  "key20": "2k9G7MHJWqVxnUUsJT7pa5W14J6XctowqV2FewKyszpa9q72R4iZdQv5bYTyYo4dCGHZAmvdbbHPvTuujRYqoFJy",
  "key21": "4zrSrc9r2rtpNSH55skatyF1d6UdPjNwG4QvTpnejnG1JkvGcMVtGVVdyhnSViCLtT6TosnB4jTd2fb8P1HQEiZ4",
  "key22": "PEWhQsjZC16eFkGFjBXzKugVQzPCa8KqqobvTJHWhPv7NpENfuJSpVJaZXrvyBUcZLjrWpB1Ks8AYk2JS3sWFGz",
  "key23": "4NjdxHqRNREA22P2eEkiUxXrwst7fdqjviLJJ46S29dVvJeYXXBHEhrahQqaL7urKNpThZ38WekrtT7EUFQnZ6qT",
  "key24": "4MMVeFRViQGS9fhXh9fPesSqcumXSpsPQHRV2L5pWLWmmwzbELnS4KNFwmEKahf4ddnAiCzhhhBrvDG6geE6APjc",
  "key25": "EYdbqUa8nhkmsTuUiXHFALbMpAyviJHfnKg8MMYgQU8BfuvhMuRkt3nsPktnuxQ77aM1HguukH3KYzMMnMkQ3Yo",
  "key26": "4Jn8NnCNWNjCq9g2HVKsoT143Z3mVJLxmszkHiXJafKEMP81TWW1kvxz7dppqK6rxJCLKAzgjDYGr9wW2CxJ2EKy",
  "key27": "2wpfwHKkAoWUH9fS5EfsF6KMvb9NdBDPPR5gSnCEAKBKcZWahwbyCGgJ8k83r2abx1qFoYZCmAAXrFVSDzKsdW8A",
  "key28": "2svKxb3vMRLfqh1uCT11nzY25eTY8WJ8RZfnUc7CpsoBmPw6qoAJ2sZf6F1m7Epg9QvRBzY66JnrJSqsdCcFVH6W"
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
