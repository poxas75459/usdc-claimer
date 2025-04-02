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
    "2cTp3YcqMBS18JJMTttCHM5MjRC36UGcnPHhQN6C1gfEwY6RWy6HFNvkSymYq3etZVF5VktzjZYFjEFcKi3qBWpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egwUgaRaNUbAUP3cjps4MJheaz7ogb7yNjxEJKeKUz3VMYc2EwQrY79FeAsFgq7zqpeYEs21GY4LRnnwfLSHGLZ",
  "key1": "23sCLFXmpzARgrmNA92XdZcRgRpqhYFyD8W48UdaPuWZw5hUhf25ZP37bQG9ozs1wDR1eY9aokup4J6WYUyaqVeK",
  "key2": "22ArXkMgkiu5g4P2RvGQMwrZg6xU4KJM7HBsETFTYDUzoAjb9pvaNoKVKa2hH5LqhC1cD1hosgX7AjRSgmt9f9bV",
  "key3": "sR12qFDn97m6cbdGLjqoGncGGGGxT2PXRbcRisWVsmuK1E2s9mHpkzddy3aF9d9LPf1owHDmHFKBCSQrksDC4ua",
  "key4": "5k1dx4gdruaEwB4hXNfakdwavexcn5RDeJs8Wo2ncWMMcEJqUUHT1SoTG81hrBbu6V5iqdDDDiHMPsEqAq5Mnjtq",
  "key5": "3q3AMPi3jceXzg7z7AYzWXcpz13y41RZSxnbc2gXK4ruXhu6aMTTCFMkRxJRDXbtPgRpYNwL33Fywffex6etxUhR",
  "key6": "5Y99DqvyVRkhYvpuiyy7iRDST1BA6hBu5E1hnpGACdEAiBLFAWm8Wm2ZqqMTQHAqCZyZ6gebrSGRPPuLUxh4NjWL",
  "key7": "23yFjE26eiH9ApCzveeuhPtNXg7MDcxutGJyDTPMUbzUZAiyi3nB4XrGAhK4LCkASWwVrfLbtWZrMnWcqEeYbX7L",
  "key8": "43uCmTwt61wnSkEZ6S6V6UJdYrNVwhu1ENGmkmH6HjcwsjbbeyDTwgaDSsiBUnPJW9UWnzP5pv91dQTf2CGzGnJU",
  "key9": "4W22Cbcfsy1mhBYpo16VD4NEUETDTSQNPMxRuR86Z69HxzeqtU5qeYyrk6WJpT1RBjoM1AuYx9VFkCucFNwmdgti",
  "key10": "h79k6rzKkUgGn2NanayiAiXx8xnRrHGEYP648fSGpRNZv5Z1iRSnpkciYsdJvrdYe2SHHkfVXmUnpJ2cdNsoHhK",
  "key11": "5JC3oh34jNAHYHwiAiRhbpyLQ7gJdzo6YrV9bAXzt8jkRURX8HRPJua5YVmg3dFDmZyoUYt95Ek7TqhdQ1YP4Avc",
  "key12": "4X3rpyc9TGLRQypSYwGbtbDE3aEo1KDci2UhTY1VzyX19gpZhwpBxmttK8Qn21ECbx9Mj5eze4MLvY9hfKb3bjxn",
  "key13": "3Kr5ZtcVQ3bte7FEj7RXhYvj9KqsWPVBW2ZTddHDQF12tv84RXqPzjLXuUYYBByPfLK6LurW4wBt49KJtefqSzvQ",
  "key14": "4BnwwNjUFaKs9gdhm5wVXZB8EWQUKzpaeGvxYfxgEU7ApXFf67NuYzkmMbstFEGcpuNUzrf2oxEsyKxpdLZyQiMw",
  "key15": "6uzD6Qgii9rsquD2726XqGQQ7YNrSEHGLAHoaxSTAdfzNWLKnBWxPfRGUucRS8L7jcNydpJhEwBHdPMGujdSdjJ",
  "key16": "3Nc8PkHdfFh5WBW6RdqYD889RU7q3Ui3q8c9LChEvKeDP7PnuEsysnRtK2QdiTQ8HSy1373kzp7QirTgvm2svt86",
  "key17": "4zRjW6ENfGukjxAfaZAhkXoRHbNRBxwBrZhCqFKFTdnDjAsJK8t15uuZexLDcMZpg6byvF1MikrGtzUCNtoqAVPA",
  "key18": "Mf9ttd4fhosrS65dkkudWM7XESgPfnYodebQi7VUzv5iw1EKCo4fDKzJUmVeYDtxvRTgdiyanXqWGMTg3wZd5Ht",
  "key19": "AVEY57rLWyaRowK7LqpAVubAJ746AEfKyYUdMvAircB88pS413nYDpcsCi91pDsL2CBTpaw7yWPYvfAYM8AGsKh",
  "key20": "7KyWNipSmUj4Krt7sA9KhmETUyfrxVRPrtCYCpecPM6V27ca9vvbYrfsYWjqbpWrymnERij9d6MgnEm7ByyaRKL",
  "key21": "3i9fdAZkwc9VuBv4mVCBoUB1J8Xe3oZmAnBMjZwUKGMcrrKaL9rrf9rTT62teXKsiko44cEcgt7a59E8tAaRBXVB",
  "key22": "3r3CSYz2KBezFwmSiGGE5C5KWMBRDm6zEfZd49Y7LCtqTGdnP7UjMMDSRwb8Tt62dRfL9tHRAhWJC26XCUjyrgqS",
  "key23": "4FrLr495qjK6cbt3aseBbiCucCwfd4g4kx7wm5ZNGicKKqFjKdWiyQZzrFP5cynGY8P6wFE39SF4oJgUgwb8tRYj",
  "key24": "ZckpGbSim266Ucrntga6wHhu74sQBi6biJU5jVe8wCf1duQestLxvjngCT7ExXJZyg5bkgki1qby2gJADPtCGG9",
  "key25": "a91KZYiU2LefikiHLiTPo62Kh9bCP4vj3erxV32WUz8CFmHzc4F493ErFSSi7oVm63ckpvEvzh8AKj6s2zcf5ct",
  "key26": "2qnbZwPBUs4ik7EH7LPCoAbA7LFJf768KKrbiaaTmcuyY3Z7NfEXzRsWVpL4QS84WMgPoinUrBrJbCbqRMcASMxG",
  "key27": "ChLwrJiGULaAnomLKyb4CK98eLyaCT4BtKCQWBEz7Pz748rG13ZwkjndXym4N8p9Dr8kwrJBqg5H4a8V1MuDAfP",
  "key28": "2Bf3HheTvkRrMVgnB3cfadvqdL4pyeK8LFUkNpwLc7DSwF1TVBJeA7br5nBLeeNrwVcJhf46P5VaKwhtgHWSZzXW",
  "key29": "2YBjX1UYzMTKWLecPwmdAUkFRwv6x8khVqwS1LwrNSWm5cDs3CDG8iwJQ9FX1C1xpsfNkdax34jyDRVXAXpjhjBT",
  "key30": "3P4F7ybKURPdHfXRe3vindpyQ8eviH8mZj8yJeiR9kpv1R5go4ZiikovaihyvpegGkSMFeqPsLudab2zPVk2SRdE",
  "key31": "3L5QdGY4hdEsRQyzFMmbisV7tDKFqjcykKx2Ap4tF3DVjGVdJocHU8jcfSySt3v1Xkpoqhf7AcY4iizdc4sWv2ae",
  "key32": "2iZy3RkbeVfk7pyJFNcvQDCaCZ5o758pCvpUMQmJgkkHzmRx8ucUU7fsbVqBrcaa46Z5Nawj2mHeyfvUeBPZ3HVY",
  "key33": "3XXRnTwjKaEVhgQbQ4o4rr3eagoGA5KhN5gLccdCBNorE4ChGasJpwxzQi1Xdo1J7FYGT5AoNZKuGW8Udyzip1fJ"
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
