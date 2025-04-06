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
    "4jzv2ckEcuX1xP87QVSat8azNX9Mhi1GoHiiHZRpMAcg1tFW1MY8kJG63sWZX9yYcXBaHKT3jdWy411QCJL8x53Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HLi4kGamDuybfx3tz9suyUnG1LUGZwMGarYyL98ZjYBxBsmFXyFbPXQjQcJe16NpiZmKfYKSNVfk57uvnnAmaY",
  "key1": "3LdSgvFCRx5T72SkH48U8sgdqZc8QLRQcA6Fuu44oq4EnFtzVq2j5bgNEZuyL42i4moyzCzCPGd7eSerV526P5XH",
  "key2": "4LH5ELHEt71xd1MeiJuxFzBsxQxjHHWzqqfhffABCifPMeoLyiuRLK9dV3YFi2dBoHdYbZ6aZA1verqZtz51JgGv",
  "key3": "2uoNcnq3f1jgvdQ3J3BVRMEvCg7WP11dsBGf3zc4xqYfuAJWPVh2cgnUx2kfbnQwenizbcyAmDCBfYTrMpJ9tzRn",
  "key4": "3hFwLNe4yLhbrkHsKMyUJxpEAt1M8yu9eNRSBKKwETbeiHGpdRt23P6jbb8L6mQCuEFhbennq9aikHp5ezs8DqJZ",
  "key5": "67kn35LmyUnNQ1djTdqL8Wz3G96QDjgsmytdgCQBhXcdGs247GXmtuFrvGJNBL3gxsgk1eFbeMVB8zz7RGpX5r85",
  "key6": "2P5PoHNCG4kX4xtqCvVWUsqK7sgYosgexCrgRnZzHfFSkxzjabVAibkSxPuYvSw6MnH8sx8NqVRXviHsqchBuFcm",
  "key7": "2unodNMhkCnUQcx3jNexjswXnxrtsoorJi1wx4dDyeSiSWpWQRLErGNEXMcD5bzPd1iJKkCgy3G2oPgmfNcGKWAx",
  "key8": "4Dm9e9btp8DfZc12gD3Kb2Hfh1SEx2u9FY871zd5RQGbhSx9ABjp41ZNQ6HKic91Egc5phpUYpjoopVMWa3GxRhw",
  "key9": "XNMTHdzQjkCv5GvR4hzryH3ncgYywV4PTRabr5aTsAk29KL9BaPTtbmm7N18vCeBPYNDmMMbibRZ4R9DhohpykP",
  "key10": "2iHuwrPoT8tjEqgVfkJjkwfwVoSqw3eJh1B9JMZUBsp4ZgSyE9WPeAeF4mG3t7KSM1uUhCgyc6XfCCtHJWE5xb6T",
  "key11": "2iirwtCbKbTJYv7qcGXDgYkWgDeC1GGvDwXuxexN2R2HSsAg8uEzSfUNhPYLfHq7DW3oAAvUerrrZt2kCzZ6ssTX",
  "key12": "5WpKvsptBh5uAXxoBBcjQi8aYyowVpceGK3Ah96FxnmE1mGRPwG6pkM4ux6B3yffF4rZ13Nb1ptquEVjwFUJtgCQ",
  "key13": "34rBV7ruMu4f9pgNPEMtgCXxF7WvBxF8BDrmxX6pne4XS3C2EgBTX2wGbxF7MTU8tPYAh72iD15AHuzDcnJ2QB7k",
  "key14": "2jdKtVek5qGErVRDDhi73ay5xq6c7WefQmzVNxMzNJbaneDRfvRoioMoBoPq8f1F7PVQB2FgkRUAXQoWbruAUcbB",
  "key15": "5dBX2R3SZW68ojjVQxZ8DNQNLNiVCcNGZFxxJAgTXw3rpqgMZBF1syJC4zor2VTsjrAV1v8JfSBSZ9LUqKQ494Pw",
  "key16": "2T1D2TbcV9pjmzjVxjTPs6WPyET7oqm1k6awvadtSa2FPriVnVevVUPvTeQ9CTn2xzY26hZRyK5rj3zbDqHsmEMh",
  "key17": "3qvmELXeJnQZ8Hf3691es8V7sHuimnsXrkYmeyjunV6twtHdZpRCA79TcXA1cE1r5AY6mGwjAT5aJbts8wyNUo3c",
  "key18": "5h4PqdxZefcZeNwjB11ipkeJofaGpw6qmfa64saDFjqJkrQY8h7cqR9Tx5dPPUwuZ6etuPTTaZB28e6QPCwSufqn",
  "key19": "5sdrW2SKi8LtCchzb8tQP6KcGS6Af51Yexu7bnDkFkn68xhqiwCTAPdgeJQ1A1quNyB9tF3YesSoK2UnpEr5B8LV",
  "key20": "3sHpYC4mWz4vpoS5MN3vG5AgvPS3zvZdSfyoSvvtHAFSJKfJrVk1wfWQKvxPuo5pBkhsNKu8tiJeiocwQvXZeKbM",
  "key21": "5WDYMA7kniYi3pdwYTPvzBrMVCMbUJuj6P7hdprucL38c5CLgxxzmLBhtfMPJj8YyEVMB6bfFJcmFwSzjrcUgdnc",
  "key22": "Wqcdy5VUGEvEYUE7WQC6rjn3iKHcL77HWi13EyMi4gLdLYV24WQ7iB4nfh7gpC1LEqg96UM5Jdo35xX92MSFTxS",
  "key23": "2YsYS451aYHXyg4LxZG2jvmw3LHXFxBZNuQ1b7RWLkbWyqeAjvhiDvStT9idm6LcqLaWBwHwoCZeyewpVorwU8H5",
  "key24": "cADZBwF1u2iDxL1x3NAdw38cLvZNnSvg4pEL9wA311VFJighEoaPpsFCqtEcTC8nrAkL9gneuY1TymwCFxR4Wbd",
  "key25": "YxrurXgLy3qWYuWbxpXZcD14DfoMiLHZpSeVsfAKKksjrKELWHKBr5EsNBb8CsVyFt7qZeSuCnY2mN7cWK1vCSd",
  "key26": "2wPFAQTSFWnkoLoPjwwxMWQaujc3LU4XZKfXAu4uKRgZfPA5MVVVqWHy5WWyKR4DC9PVy1wtnJdwDhhEJkUV3Rv6",
  "key27": "3LRKmfs5paBuHvk1CAWoYXhqEvWJ3qFuYb5tVPWsASwwsvuZmo4LZXCbCLTxXBLqLy3pNmyUeD8Jphgc4HPLFqFL",
  "key28": "2Z62DYHBwSAi7veGkWgX4krjbVqwx1PDzp6ce1BaYNXcw9y1p6dPH5rUsmvKcMeBrpMZjDuAAmHAAxr7CVm1Lc95"
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
