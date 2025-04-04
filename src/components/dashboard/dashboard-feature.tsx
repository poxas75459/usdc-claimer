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
    "5QZDJNnAcsS4FhrSwNvQFvWR3crzFH9VKYwjHK1agPyY4NN1YzjrEkuMLzVY5Q7sZAEWQwj6xL9QhkqWmgsDsagE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uKVVtrQAbyKD3gaXiPU1b1ndBx6J4rxCEZudb2f3ZUF4D8AweU6gBty24BokCYVNDUfv82rmFAWegkkfe76wN3",
  "key1": "5213JuE4Y4wa9Wk1M1epd4S24wawSjHZmM2Dxeg9Dsgc2QVDKhhgmM4CK2keYv8P35Ts7ZiaM75wKU39kd1Fpw5Y",
  "key2": "49fCb7EKsBFHU7adaJSWjDPPuf7E7YwsBuwGwMLCxqq4u6xPafZ2rKNPav9dg6gJvht7kd5Kff5C1iqML5CxQQRN",
  "key3": "D9ArarYr3M1GAwKX47seCowYYG4GVdhWMBXoNfDTXKJWLoPAzeDUsxiswDx78ceTxupUjiaozkv8ZtMHxAgwMdQ",
  "key4": "3AQCeyWgqRYLq96qUX3ewznQ8TQmqFeaE5wxRGvCkkY71J2EuXP2YZzu89Zhoo68NUQMvKH1mRnzzPKpoFZqR8x4",
  "key5": "2Qc9s2prxCRgCmpKoaYfYTEejpmDqqSe3tEh5Va5paB8i5vZSzJ8vdcCwg18VAEbtjszq73eMiAohDQhkT5ApSZt",
  "key6": "4cHtSTbUjApUJ2EDvaMuQupCaHjryoirLi7cYny27EqDie6MEBwJgi4fHtcwBFZPpixQJYbEnngKgwPSqGvq4xsB",
  "key7": "4YqFt81s4Yxvj7SCCqguXeBMtupJjrNR9kaBQGdozSSkrhkJQxEHvvwSjr7AaAtZy54WUFgmL2Tcd8eapS8U6txo",
  "key8": "2vmKL8ESjRKXRUvrbimn2hr7bhZZsM61obkududKz8U5CNo4NUiSz8sdnDShr1NXko9nd17ELCJraBMRBnxHeqsZ",
  "key9": "4b6izac7ViMdZUZ9azifpkiZDn55h8BHo3t3RpSKoTbjJkTuMXRfiiJDWxjybEWeyPBCVmpNokhZwrtHqcbfzuhN",
  "key10": "3YjsNqCsbJsbZugYmmbRK71W5i9SqUUHQyma4Apn8kycGwrYy77zWNecrcRCFuDTxQRBNMhM39Bz9NGGZkGFEXPp",
  "key11": "4ooi17ygBcAyknpRjpZBtN6aP6yeNLm3mFgrmVBgQBewsL9Q9dbnYuMLC9NgVH4MKWkgTjXdWgvLqrnKcfu8XZe9",
  "key12": "2zK99cGu1qcNqi2ipVENnJ1eg4AmZY76iurDQw5or4Z2rTcYniNmoXxtmnABu39GVkqj9Cs2DRjXBQm5MuR5AyvH",
  "key13": "3nCTDeB3eNeF5V8cE5zt4y8otWUb7U3xGzhVwuTYYkvkQwo82xFZ8vTfZrSqszENbdm6qmBbDKt5XuG3coTCWdDb",
  "key14": "3WrcZEbGHLQDsJSHirkknTdFhN47Ex8M6JGF2Eeh2UgREhGLb1wB7CL9EopcHSZ4XXTFJb7UJ5WfYX29KUkrdkdp",
  "key15": "5ABZTW1u6i3uVeJ2JLpgsq9EGttcGx9mmqWDR9pdJdfuMc9kqKCGZeSZY2Ztt1kTkhmdTosz7KcPbAeuPFUreSyN",
  "key16": "QzwvUitmhJPYJTvmhg171kNfx2ZqKpoSxLtFF6AKukYWQUUvzTwQW8q75uN926s5RrAmjn4gmYR8kGYQrc3jJ8s",
  "key17": "4fKrCnmVhG9Gwbr1pEr9wye715WbMjGLzTfHEVXQDc9myabsj4f1Z1NAB5itRRNhKsZzQtsRPrfiZnSKVme7TMnm",
  "key18": "kYdnJhE5obuqnSpqVNPkfk7bRDGG5qUvUpUHimKSksFGjvdfBkEh4HgzkaLQHBiYsChpiTW1FqzpLf26zEwwNAz",
  "key19": "49joUioFnCS8mP5dWVma9iYx38tXkbh6t2YosEjWcYsQN3HfCt7qG1NG8BiizGdBHPNdstGBBBhaVGkk6m5vHJDi",
  "key20": "5VZQwxs1REM21mxrUZLQmd2DGyvKbdqZW9XXwQ8iU6GFGB2YxJFNvyLdjGcvjWbPir7oWqq5sYb6ods2HxnjR6yr",
  "key21": "41DaCJiout686b7ggDH5CMKehtkBZgWYiyDGhUY5WC3LKG5SPGA1LvxEssPGySUrQFZTPwHJwRZpaceB5uxZGyYz",
  "key22": "aqznBqUjqpynmxpVB5FcutmuSddNM46CBcuicjWHvx962ndqnUiTPL7X1RsGUT8QBGMZgWpgJbQUBpRetpYN7e2",
  "key23": "22SngbzzrebYLapwWxyX86C8L7zUze9xRty7S7kPEy81oorWKLeSBskpdbYwLNTP6vWZg2FZrLxH9GSQbzgfjG3V",
  "key24": "4UxCK2uApFrFEYWgE85eAvJfokaxeTeFYBgjeUWcN2YwZEESbhrrXb7m1fPZJQU3MkPdnmp6twLEQ4RUMUWV3rpe",
  "key25": "3FGXirLnBX4vMu55HqQoP3TH3E6rpd6YuyG2nG9SW6YUzPR12JE7TtXQfgc5wdhhbT7MUo92DpMgjyZhjQW7Lz1Y",
  "key26": "62ZumjLXfaQTNDPXYEPukXyvTarxLCU5qZzcJ5hUgvnzerBwxAJwg9Qomz6fLVP5CLk3BM7CX6DGT7Rngthn8ZxT"
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
