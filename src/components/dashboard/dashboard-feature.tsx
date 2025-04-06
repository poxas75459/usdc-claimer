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
    "5fUarFfmGUap5HJVmTvGRRAd7hgxN42uJRTt3hCStJZX8fqQbCkcmE5TRyfZuV78y5YgKmzDDPBhU7AdF7XoKU7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dt7S9Fjex64kBZrj4zu654WRuQwqN8GywuoAP6K5FWAAPwAFQXUFrtDFsDEE4YrcN6qv28mS6LZyUDVnqYrb8Py",
  "key1": "PKcjFmU71Y9cMRqhefsAcDxPS2KNtWY4DrgfARhafyd6zxkhykQnviDpCBCpky1i12Z9B3tofgBTsARXLnhXKrG",
  "key2": "38atfmeeK3g1pVPAdiceT1pYDHq4XXe3nmbYHd4D56pypuqeoKgnbRATpGc7u4atgEaQmGajirCFkbpTjnqnMZcH",
  "key3": "4wcbcEWzEX7tYnhD5bDWF4GHkdypGiobQzwD4y1L6n5TThoiQnhwZHhMZy8Wz42umvY5fxD9VjTHn5JdV7dUBQeh",
  "key4": "T4L9EtUT7zbLrJfuQZ8ky6vVLUH4Ymh71YqWxFBK3TfzQbuKMBLiUP26beuTz8xexMdU9rF2BYk9qATxea9Mxu9",
  "key5": "5vfDv9sXDgnFnSmswfFVD5myMBaEMQbPbrw7DQaoNYBk5sndG2SfnS5i5nC2krMtTheiG6LitCWLCa9iaRNSMtzN",
  "key6": "4T2Et9c5aP5WYH7jew5gBx5fzquwZG1BstUyheMCbJzCaZhUHhckdbWLyVdtq4JBoHsqhpEdPX8EVVYS3b9Q7MCU",
  "key7": "2zmS1UTbuR2ax6NXZF4cX8Se1yeSDXX1AwP8MiPKAq1QUKsCp3AxYfsGc7LMhQraycQdKpYrEGVh5SrYFqZM1fEa",
  "key8": "2DZHVViEdYfN4GVpNA5F6y1ADhhKfaS88rg4yC9S7op4KPjFopb282JAcvgh3e1WbjtMPQtL3RJbHYXkiA5GHuLw",
  "key9": "2Gwxr9NeKzdYdHfR12L9QchN7ptDL3j1hkwdHQALAbdXLkwfWiCDNk5RWoWNSYPNyCiZCjYi1SEWVE79n84vWaoM",
  "key10": "28jWJXHsXhtWAQsCrZY5gMuopL3QucNGRCi13yEM3H64YAKrCZfw9dXCQVFtrSVE3EF7WtmKmkDymPsK4FZQYT7G",
  "key11": "3L75iPiBbnXAEQTBB5g7snC5WKpAuAXEJGPjvnUU8eqMUEUr7NvNnJvj6rmoAxXpr2Sqxd3t2rqUFCwrvZQB1geL",
  "key12": "2TCZdDborT4fuY8i72PKgTrBn4nA3HGDQpT4TTL9f69beqfJpAw2anivqGqLrx8Tfp3LqQeJbtvwmN89cpQZPRug",
  "key13": "28C9sbp6EBdrHvq9zgrKcvMVwM8iN2isLCuoWUfMSTCWAFUSjc6SKJ4wXqf69b8MCx6K78Puji4PsxV8cfzsdyBy",
  "key14": "3AruPX5oq98kk6DBGEVqMphmh99bVvKmU5AY4sgxD2RfcobKLfVPXS8eBvvSej2ZKti7djMLpE8qcyDx9i96wCf3",
  "key15": "2A4MdcoXZpmtuzMtJ9vJK8E8kJWcYYhtgWkgiX2RBoZWbSPMFkd7hdEsH6X2sLCUHYrLr2u46RLruRFV5dAg7nZL",
  "key16": "514e4seFxeWDPgTLjdVYYuuuzpUQqubHG6ZGr8WGdwNor5JCwddL6AV8snqbKwWuooLJe4cURfbYPHgyCUaZW36u",
  "key17": "5PC6S7tKci66rSbwmk62CUSUSqpnPfwvp4jbfV1sntmNhZHgCwvrFzn6hvfDYpUXjVagsLJrTbyeMm2s2Uce9jM6",
  "key18": "5ke4MAJNaxN58prYiZjHhKUBadTNFFU1RZvyF7mxRpvgDFTRPRhXLjTcrNcaiqZLFcwsuU4ZfyCFYu3j5iLsUZ1V",
  "key19": "4MNKwN2Vp77E1tCiXzZHHdJPm7qVMUUcCU4dcXFWiKwMGMyz3JNC4bHDRoEeneaiRceJgrXhx1R2cxKYivB7zCof",
  "key20": "5wQvmJXcvgFpEsyHMSZ3tfgiubqc7ndbaaKQxYrBPEZAnHM9jv1zHaNSUavdcJkAb5mMUYMVqksZno87hao9cnzg",
  "key21": "4XfASVWUW3Fy1guUsUVFbWDTJti7Fkuk8GTW2r9F47CUVJUnB1goientz7gfCHqmaZB67kYSdPowrZ1EjZEk26Fg",
  "key22": "3E8PoFdjyMt3BJhtXSTU6BvGrT66cceN9pyyQZyxxdKyShv3fsoqKLtTXgkexutne5RLdj9J8cj7aHrAWaDuf9A2",
  "key23": "5vKUzsDon41TPm6pMtosSiz2NHGCTKXKN3JhDQ6T45U5HiXqZJUFev7WwvBha5KoGXMg7qqq5F7Ghm7ddkiSQ48c",
  "key24": "47S8ezG9VwcZ68CawpthKezhzvs5pQpdtn4hAVvGXAaZ6PeB3ix8B4LQdfDi23ST2t9KtUDz4wHiBYLXcHwkKg9d",
  "key25": "26oBj2dtgWuviooVN7dG5gkNUh24MmseqwdH8xX32wfyCjiPG7qN4XUxsbvGYWZ6ZMjHNqbFXjzcVx3og27pu1zw",
  "key26": "PZEnPMozNQ4ua7z7wZKsAGwqoWmXoJJEDZJpcS8sLuYkC5k7hQUkzVf8Y967jtJiXa4ucZS4vLbgv1QgEiSX1co"
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
