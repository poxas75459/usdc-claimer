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
    "5HsPe8grrkawBaAVcsWP4QkCJUQswvB94kXsrqpCthvKq7Gpnn5AvZUfcPNNj4E8b949oyfjmfNfgYgC18wVs1Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjLjv2iV2KqVtrESP3sHNsHs5vyv9cNzRdkFz1mxSsjFrwN9HBeQNkGbmzEnfK3jhfYZBPmJzZRr9uAfw946rDg",
  "key1": "5aGZs6wsTVVgGVjfFShPkmNxi8HEQB9GnDTBsy7TK2KTQ4pbS1aHGEsuaJatW5UfHGuSdSJQNR3293NWUyNFvxfQ",
  "key2": "27uUXuHmhAnyNYNXXtawM2KJ9vNuzQBjWJgqgahWMBmcGyFRYvgBha8NmcAnEKUmnWbwoW3P9mRXnGxaHg48Y8GA",
  "key3": "2mTPbzeuUTMS5EuoiCqzd5TqsiAnyfZZWPeyXYHK5HFrzcLdkmZtCJMBmcrryMs12h1D4NJbfBunZSvRmL4EFEYC",
  "key4": "5bWGyY55xa7scAT5PknnovvqoUfatwUY8En8w6tmxPTv721QU34kKDkD4AB2MUXbDJdaJEBSnHqGfHAJEE2Nv6Q5",
  "key5": "epLRkKbBKmeoDs4s4Z7vfecq5wJQcjaT9cQ9PP4RctERtgJxRcV7pFXZy7JF4ayvXWuskVjcSv1D9wVbGhEq2XX",
  "key6": "4uTXHo2AC6iJpQrbQVjGT33CArsneAooTXD3Q73GvsaTEh3dGBWkeEeVpcJr64aSa3Vf5J27tfoU1DbvDXa9BfaH",
  "key7": "LAU1tBFxBA9GfzY3KQjsspZNUQ8yJDApkY81LYdELKGwt4LEH11izVjPYwomr1vZy89jGwuUrdQyz4fej7dFdMf",
  "key8": "4GywbGW8o6o5L1f4we9TGHH8yooCzkNLB5GkhGtaMGrYakLwECJwK7Mbp7j5yA9EBCawdGBDicsUnit33qVF837R",
  "key9": "23BFC9vrcNfbAAfudiL4ZTL6UojFepeCCrScHZfj4d9y9fZfVMr5LiftfrspnmTaMxf1LTiw2YgMuYuqJg3XB1G7",
  "key10": "3fN6b164r1JFDu3TPjrqApt6dDqV6d3bZLQyJL5oHxCHwERnown4HcUDULb2yGKaVSB7iCUEVZhEbREzdZFyQTba",
  "key11": "49jZyt4pSx18YH3qY1EvfuUfaEx4uLuKrUdikwz5psW5eHjSCxrH2CFgevtWDGnWUat4NGmBLVkGCaVSV7fXcbiY",
  "key12": "5kXzdGMxYEvXprbHPajCN2GqZ8nG7pzRZWJEZqYZxgjdgnuQnuTenNeAUS9r3rnwZs6E6ckgbptRBgdrnQmVmcP9",
  "key13": "4ppUnLcg12hmFtzTR4uWy5P96EaeRnVfBHXfRF69rd77Dx1JNncMHPRmJ1z9Lvr2Af5RhJb5NHuysGZ2xKQiTpst",
  "key14": "7hjiJawUhTjNV9kDtkGtQpx3QxHAPDvN61Z6z38eqF4t75oRae6r6TWQzrojxBkjLHJ9B4e8mVLjkfk8uYxtTc6",
  "key15": "3Lk6w8EEtXN2UkFDTbvyd5Bss5Cdq23hob8bbGd9eakJPiSDYD69qVjXWE3p6n7CSZZ4Jju7vpffdkqybeW8c3hg",
  "key16": "3m1D1LMes7EFG3ivBMT8KzeRdtKerj8MvYbGvPRue399tKtnMu8K3JNYPbi9ftN79eEHZrJBAEnWii5vFhzD4KKx",
  "key17": "n4dujSkaTKTETy8fGnGJ5vcjCpLk9UuGgWRBvU9vepNE8YCrMWmpmDa8M6pbLF6iFdymSmXeeKbqhfL3TRRiTzJ",
  "key18": "4NeeqYKVcj9QSDqgnjAf29WdjEDQv1LQrDjxCYPjCU4cHgetF6HkRVh2J2yap9EqZsKNL1FSoUdDX4FLRRXxPMHc",
  "key19": "3gsjH9QMC2qFUPrcDqNXz5mMdXj1jRKwnPS3u4emVjwMscfAZAeFxyBTLxdBFixbte7cU3Yw5hCdxRVwzuXZ9wjN",
  "key20": "2WpShU4xy2gXDWNPncL954UrhJz93WAWUNPVm7A1MKLjHqTV11xGTZwtuKmECnnaE2yZHTgN6JMuCE27q52c8iDD",
  "key21": "53mRdhwCtwkLe2WTdGpxd29yUwbPzU1PcdxUDfQGjNCicbADV9rDzvXKJDbK9kcQLbpUJRScJAVmp6cqk1mBN5BG",
  "key22": "kvznxzFsVuoL7jLQygDaWkXW1gmaNX5meSHnBXToxC7MFisWbzdGnerXNB2P6VWGwr36bFKADPiUnmLHbAa6HLc",
  "key23": "66wtCoBcq1rxY3dx8mneuStQpMX6C65G43N8ft9ArTQxGu9WkRAwd7PDoqfozrtbukEPcyLfQws2N3j5Tk6wBvbG",
  "key24": "64zmJ6JyLmJnd2sxvzb3zTf5Q6cKrNYeL5wXChtEuSzL6MwZgL2H5T854zVDLHvWs48ESVJJqseK2mfrAgzxC6Bm",
  "key25": "3nPs7UJcFuaLFUALVGZZNbDWZFcJ3DFZMNWBLTq3crKJz1s6YegKizXMQqZQjiyRLP2z47LDqFgBc24D4HZJp9Wq",
  "key26": "3fKi476SHDRb84uPjDz5R8c4iq7oSon8YupnvmPA4G87ZSHnRh4FcEbKUG4N7UXhVSUHEkXitBeaNy3dANK4ErTn",
  "key27": "5K4qJ4VSHnZkB2qJL6F9EG6Jc3RHCfG2wztqbf3q5qxh9T4T8qDRr2bG9NBC3ekyCJVuGwEQFwW1qeKUkpveAn9H",
  "key28": "4CY2tjXPYiio4sMmDZeasSJ1v5e7qthkoXLWfws3VX3ErFJhYwNYketLqajEkXC5J66zQyK2AaKbk5HoxjQM2knw",
  "key29": "2twH6hFZYjAz5VDGUJV2cgyEeqCDdgoXFZVKsJRga57NXnjbny5ehxQ1cuyfcvoiKfW3q1m9gLoDb2Thqt9Pg5Gb"
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
