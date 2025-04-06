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
    "5XwBPWUigdEoSzSZb4BnHse8gVSvfsZMaBt6DQM8k8Rgw5UNy3eUnTACTz8GSy9wasbnKxUSPGN1ee23KFEfBeZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5paouVRQGjzsYwjspZL5wPUAdqjtJKaSHkJ75DDzFmVgBqJE2C1z87bScnEVYLjz7i2t3NyJ2bDnmmWZjbu8gJoY",
  "key1": "5UN3oZUkTU1H5fo5MTJ3K1TLdg3apDc1RKvbBtgGLffzV5NPRzxhv9zXSHjmTSfmsh2NYCKWQRX5meEfDHTzzBTD",
  "key2": "4viTdfsUoGnzEYdvMyhgaUEeM4KmuzwBkBJK44qdwQNmTNodya1na5C6PJxNEictfA8DoG1jSBnBfi8wNtUXHcwg",
  "key3": "3Y8X1nNsaBfyJua3U7WpKhfjD83uTXbXGZkqEzzZzexvjAFnYjFKvh3d1brnjbAndpgQdwRBD8E2YiyA4tuaCZLK",
  "key4": "51ZijUFUo6xuK5HWTEEohXPAMVbMgxW6S6HsufwPMZnZnfgbWLNgjL9uwWH9zd5rJ2EjaEoFNp7gyU33S7DKszTs",
  "key5": "3aGckjWog4x5LYz78cX9VGvcv2L5pR72SAgHPw5XrCjdJA6k7dSYwZ3FENxG23Cdv1KhTQqZx4veVx9guxUKy7tx",
  "key6": "5B86Ck4F1YgF4Tprkd46sF2LQDzc9DC4Ho15bj3AVyj5Qvsy9aRpVAQtoD3SQckZXhaXfTeJb4Y2aPAhGpCMR93n",
  "key7": "3oycFXe2zw3uKiMcdgh48b9U1RQCc1BRf3SNRZZc3che9XbAhA7oDxutoY5MEnk3FShe5TCstnzCXjbY2GdQr33g",
  "key8": "5mMnf9vu2QzzNNrqcNa5BsCrop8L2P5SmzeEQ3zWFuzgKBQ6u8aVLvwx5otNc93B2U8s48wxLLW8mV5HcxF9gfHG",
  "key9": "3MN7oequeCNjYL6gyX48mrnrw1FYFuNciKTUVWc4FsJAVawunTnF9RegubbxtfvwmJj261RzCkHJxhgddAjtD7Ne",
  "key10": "eR4EidSts8iTSH1CZRVzEAH3n7Y9WgPsTMpd2sVhBkv4WVP2EMJFj6zxHJYAuTUojW9vaDk7x5YWs1oQ13mFbL5",
  "key11": "2AB6gEVCDjRrAssPy6jT33BYq3ZpvyJitHA5C4eD1UeJdh9BPcMJmNPM7zdL3JQ9QC46FhH6hQuBzPTDSVVdekkB",
  "key12": "2ZS5PgwLLEdioRxqBJM6QJVntSqAWbMJnnfN7AMDqmPxn1BjRKmNxGXDwwg7NdGaibiVDbTJZjzRfVdXSRKRnLne",
  "key13": "31d9vQq6RZF81TDBBsjdQFYHFU9FXgSyQAbLphiu7H8gWdjVjbpX3qy7B6N1ueiw4KVedhSgGG3NH7dLbPaAa9MH",
  "key14": "3oLo2iNxShfZEhCocdemWtWx4XnrWjqaJ8aL3RQ4xGEZgD2vhNxtDovhcToeBjmcXXkSANgn8D96W6rux9926q8b",
  "key15": "63eeL5YRWne7vAQMaGxoRs3C8MMTY4z3tVQNTfscCme5Ew6qGBi5j9QNv1D3zZQWSHUJ88NhsetqrgCH8GoPRScP",
  "key16": "2iAfpRCqAgfDBJgSh2qLmTRFkoBi7DUbXYPq3TE5toCEWXuaXGNcJkrD2Uahdy63xeKrP4bggxnfPVfRBbpfBBGt",
  "key17": "4Jh3ZSh5Bz3GyxQ7mzeWNoKkL2vgMmcSfzoMhRKNyJ1ft8QEDRMTvypXYBNqJq6x9NucDcdF1TEsAzqfzeTbYVwk",
  "key18": "qqEMCRzrvNZ6FTrSQ3Yp3bL8LSScVdDj3bt1hUUF4a11StXtDDYZmjKsyRNUjCeiaW8d7caoFgrPWUWZUtMwVxF",
  "key19": "3EWX4NYyB4rJqASEMQckNFoukzNrfn6EX5te8tdEoCRCZKBmoKSyFCjyydJz2kUaDVjUqdn7yYZUmLUcEJbp9pX1",
  "key20": "64ja75cktAVuiApegpaCVFuHnRLv8UdjHYR4fdznRto9VWo3Q8Ci5C4FPVnTos6M2wwup53FmGBpq8nrgMuucxhr",
  "key21": "mGStEPMKsKtS94XjzdyWAeknF7KaQcV3tyWfnqJoN7C819VDQFYYeDBrfQHXLgziAPnscUrWoeF2SjguAD4inFJ",
  "key22": "62exwrFekW46vVhv7o19bQLvB8NgHKJxRpM3UuCLokGTwYbPbzaJ9fYB7RX9pLR8gckeXGR61ifuEss3sDTtb4UQ",
  "key23": "48Tp5FQusKZvEoaC7ixbsWRjSvMJe1X5cdcWADUEm7habmAt13d6SbKnyCKiFheZuWeiusQ9LN5fSJGcFVPqXQa",
  "key24": "2vcaZobuNPicnsK2APCjZ2j91CeDUkCxwFNhZvJajRh1e1S3s9Nk43x2LmUzc5f7MvbKrLLpFwu37iFXFwaNWcVj",
  "key25": "4dFh2bCU3KbryKUXMheimqUw29iwGWJMeP6zVWbmJ3BUHKAGJowDdUrCpdYyvGztYCTLLumnzAbe5vq9jpFp9gNw",
  "key26": "WW9RQcisesHjdbCeuTnG4gYvwvJAtR1XHYJoXGEAu3UJVckfup3uyX8hC3HCjgv982cKvaHJEv8ZF88j7EmzDHE"
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
