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
    "65UU8T6sjPnGwLWXaV5eTmkhYijW9HNAj5H4j2crmWSSVLtvH7DkdPEms6h5pWrMXDDipcm2Cwr2A39vKUXZvp8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ni9RWNF7jCVqPWLcfr4MiTXe365gAzJCohPqXpm39CtmdSCDD5yPENCCANrcEzNx9buMkw1DNBamS4Zk1MeuMjQ",
  "key1": "3dQfLFsg34fqGH5rJE71uK9g4aqYq2MhT6zmsC9vF7vcTQMVpk71qbG6JpgiKYuTzufyT7rtbFzScaeWnoS7yYZn",
  "key2": "3HdULQEqY69MdjE6icqxFQd2Snecm96FZpyEgj4HKp8KymxpiF3VBpHZxTE2N5G7gJyRsKHoFExDN2C6oV9so5zz",
  "key3": "4f2SV5wky4P3enYJFMk9i8cRe2AeaeVgGbyYNrszA8WE5uypakAXiDARy5ZnZzN6CVLqA1zEyEKit46kWAHw9TUS",
  "key4": "3aa9qLV6aWPB423PbvdXNZTFddfMAgJWJ9LoWaASuhN2yLF3ubHQdmEfmniq262Q6qKRH2JQht3u45epQ8jF5pBe",
  "key5": "26RqxoD4hJCjYbQTXPHzUAaaDssShrU4QvMcRTQ9rRytL9P122VLkMsFhHdgNh4WyHgfHR6CBibzowB5JeWDmhya",
  "key6": "5Es2vvJavCCCqRTnNESVDpPrjTfUR9HQMQrXqhk1KSegVTcRpQRFE4nX3mvC2vgsuv74dZ2Qh76jCY4sAcq9Uyfw",
  "key7": "42p67qGPamR2JqbUqLqd46PqHGif8H2ETquHkkHwJKfWX8twGjYMqCLbuZbLM6C8JZuyErv7p1xw39tr4CkZWQBE",
  "key8": "hUPoUvkkyBVhYVDNjG3C31a5BF6oGquytYYdVRXur4Yo5mTt5uQMjJmLumVAgBCeiy6F64iZBpQ5J8keQ5zenBU",
  "key9": "4ggfb76HkKV8iEJDShHe4Npso2ZPy5k9Fsga1dLjtHHR4nSPabkR4cnKiNrX1HxQUPmNXSgGXEhiodLczRuRW54C",
  "key10": "r9x6xcFL4jP7dvSQWSkGrrBpwqUjt7wVLobX28QGYuodR3os4mniUeEWWRNwZZ2cVrjYdNNdb1Knbttr6FchsTa",
  "key11": "2VEgHodJ7qDNkd6kyyfwUKtHabx1SdccABAkbGC3DPt4KQsTNzRVad3FGSzy9j5RExsPDjWiwHJ7sFGMKx1YeK8a",
  "key12": "sLBiyvG7Av2KsfFzDvPdpv8HHrzmkAhbQZYAaAETMex3SaTAM2J81Vhx6JgKdWB5Waw6c1yzXJWBwPeTCyP8BUW",
  "key13": "4LyssZEctFKS9Nyj4e5LCHNqJZpD5njyVu3NXqAwDwn6hPb91CtgMVWw9rNoKSv4LNTFFWg9CAKE3MqHwZeLmK1h",
  "key14": "3BjWknBrNig8hGfrq6Rspf7RTjZHXxgTcMAh7uTLsXtkq9fXDGi713NHZZukdYvr91TYuhdHsEkMyohqZLWQDadd",
  "key15": "5ewVPZVCfFM46GLSRpsutSDuMboFirAoagKqb9RQDMyzD3X9tH8foYiRzmoK14b73yCWmyFKoYr5xSo1HzbdkEks",
  "key16": "3r2rZsqFEFxo6hFPKDqA9p1s1CDqd9QUMucPApxVBRfRe3SDeik7L58EZHNt8xd3yTpHWY2XAFvZYfVu5FoGNDnV",
  "key17": "BvNsuLxx7GS7RKbRgVmBNJLKwTfBNvb74eJmULug5rm9rhVxoaygtUoM7GefBSvoMg9WANNmRLqBFnmgsc5MjbY",
  "key18": "4wYazsnENV8LCGgPPjjJ9R6GySVo5D3dUow8eDVfC8Lrjv9zitjbM4PK9KJcnJ6KMHk72R23VD7YXFumFW2sWHxQ",
  "key19": "GAGqXYDD2LySwNAwSgzFyVrkb7wC8bsHzdymrk1wwT2D91581vHfsoUzekGi7GKxZvPnnV661q47DhB3rTnkL98",
  "key20": "56Poyf8ECmTnydwc6PfzucahZ6HpsrYkXPWUCfiXSgxzeKkKTu9McYuhBvbBH31oAG5r4RbzidDZKbGzXGLC2NGE",
  "key21": "3EgTmk4usLrG6HaD3DixGC8hJByR15gnqcuXyANHUCaYrgByUhipo77c64bKS9rX9iAEibxWvTrqPAYt3B6NdC2J",
  "key22": "YGubYXYutcYGWyo9C2KukjcSxgcoNN5nFuz7CCoxetVvjGRG5CTetGusMEwF9hphbFhNwCzVsuTy6RKyhcmDdvP",
  "key23": "4F3N1rTT2nPXQkn6M7ehkBgVc16W9GWRg4yA6RN1saeYnbDPjdpHCfoDQRgvnXL9hjmebDngnFZGSgGXrfESCwDG",
  "key24": "4YeVngDYHh7vJk3hqQQm1hLXFHSeVLtt4ZUqGLLnQ53Mmi22xkKR39UCrTf5YJ5CWAA8rBHoBKzrEMkK4YyecZu8",
  "key25": "3jkg1UZiBREia1NRrCYa5pvhnJgLnqiVMYA2sqFY32352uz7N8PkKutswKGvtyXKUY7D3dWGkAPVgscW4XPusXyu",
  "key26": "4nPmsvzxzX3obJ5kqmrE3H8Kr5FVAYfjhQCMALe9cDibZSBBfbgc5QbELPzATydC2sxU4ujjxo4x4Yg1WvWBWD5t",
  "key27": "3VLWd3VN9qTSijgLh6NBifTsErGNog8p65PaX8MgW6VTeQgTjdeM9BfmrkhpgYMVeck2HKMjZ6najfYc7JPYn65E",
  "key28": "3ycJe6agzazhr7tTjeuBvWdtAHNXugYSEufy3zXxJUyHj8nmpd3kyyU2Jg2L1NfCfqE45Mp6MRnZpDQMpfQXQJd3",
  "key29": "5FnXmt9aG6mKBvyuqhNUMFk6jdhBfM3pwTsdDAXtzWkEzY68bYnbSnSazGZEVE3JSSg44gBbz8HRzexwoWG2nL6e",
  "key30": "2RL9udU2B5x1qTQvo8qvUgDnhqZzPundQWRkqwBQhQxyFiqtcNTgtHy9ok4B2QXnBfq4kvd4ubmHHuHHfG7vAcJi",
  "key31": "3FyLPQgE9FNttGfWKf7rVKDSUCJbCxnEg6fC2mftmR5PXu7nz8cvDw1A3v8jx4JdeR1WYp4kqhNXntcLXPjxDxST",
  "key32": "qhxDqnp43ejFHojkTZ4gwDTLcGb3KrCtGrmuk6xrmNw4v9TKgtrk2qtE8SPQB1gQyZJ9RZaTRkvJ2D9mHzCM2K6"
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
