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
    "xCqmtWxhmvWWmfSdWJEMVhpeRgLD5twUpHtd949C8ELEkk6sCsANN2ymc5RfqRunTQoBzGy1QbWTeP2QDkySnYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeFjdCuu8BR26gv4ND3zDfe67Cxumn4k7P7QonJjfUURb21Rx2v7WvQgxtA4jjBqmUmdjzvFqK6mJnAgpTREfHv",
  "key1": "ZoZsJtQkd9VDBFR9u2vgzJnJvJT5tUBiNESUC56CCp8pyvSGLJ6TkAoaV7weDYg6sfSuqmBJzX4AA3QUS4XZxbs",
  "key2": "5tNHpGN3wm3q4hmyW32cBtKLS4SdYrWjrS1dog2emHimVhbqqCvLEBoyQFBYJE32D72Psintgz9K1cGbdU4rohJJ",
  "key3": "4vLupCToKzW36L81Fq4i12KMSPqADByG6uNCREHdnYw4uTtZ9KKwE7QNCrWU2ApvtJ3KQgjF8yVb8ZSUaycRghH5",
  "key4": "2U5y97bwuwXY3DADn6yTmJySZsMcL81bpn5yfwWpjBaWjCc4htAvdXYR2dGGVa5X2itLH3jFyA5fyadz7ceiF9Mo",
  "key5": "24teDtWaLaE4CiBesNBji6aZ5683fhHv4BinEJXiCqcxsZDs4qDWbW1VgKQhVU2DTUJvTTZSso7K5F9FrF88exap",
  "key6": "ZDEBA8dQQ1eSo4bBpwXCY9XdKzkhbivsoT8HaTJCz1v9cCtNgjUYN2G4cJ6s4viQMbt4eNJui1XY1jxi4taCUHd",
  "key7": "2xBzfcgt7btu8DdsAs4aA2FriWevBxev3Vq18x2NXKx1wmt6sozCNM1GGH2qzbd5PEeoKKMPgQPYgjYy9Dtcb3as",
  "key8": "w4xWRC9YvgmFh3bH8NS954QZd749kUoGM4xH5MxW4vuAFwCgJVLRRF2WH6XtHzZoxMBojNvGCa4YMT9Z3nFn4EZ",
  "key9": "5MmJnvD12sRppab5uptt51kZ47RHTdJZXeTAosTJnW8bADpJbHF5KDTNEZJQLAKasY3o27rUKPKWQNTNUw4kUUkH",
  "key10": "36M32sN47ghvRFkeV6SKp99C1aWQcnsfSqQdSZFi29jDATp7buHKCVfvx47f7miGQtavKw3tW8qAjiE6HymgraQm",
  "key11": "3ZAWCqwsuKbNV7UoAQWmjwVCCB3DYuq3V7EUnMimXdwiYBaErqsKvHJutMdW9RPt16Y8HofsLJk4BxbQwFaxUqKB",
  "key12": "HGrCSvqjTpSEnRjuGdRchmRgpvCi4T1yUcPGtyHaG4kTXML4eFundsLMekpyPbGbSDQs1FDQS3NZcFpyJByJZ3K",
  "key13": "35yt2oBW8EJ3GvEHpxEJ7Tk7N9pjrivjRXFvoy5YziVdoE4rwNrPnGRFxeZjbYoRrMhL9peJ2p4V2DywvUzYXG99",
  "key14": "4SGk9eYmnB8GBSTPs4UhKwSRwVhg81Z5952vgfjmb5m3U4R5NZ4NFKXK1VLKjXC1KyeMSpjuLzaJRNRWEqTVW1zH",
  "key15": "mrH7e3EzBXHvPFeN6iVoBi3FjB7Gz8Gxp9VFo6Dsnaqy3u9Z8xEt44MKhP1frcWBapii4Rk7B5z9nKexETcC8FR",
  "key16": "2bWJoarTJQeXpywAKEqH6oMv7282SEpGM9niqRKpUtKbmYVDzEgKGvgNuZvVt6PVjgHHxj64fpxZLSYRfJYPENoP",
  "key17": "3vhQAu1aChQvaLTTbMJJqnCUZJk5yRMxpQySHCk2CFpdrS9L8uAMwUwy8DE1RZcqhJNiHEYiCbWmwuv69vfWb5zg",
  "key18": "4oZdY5pQVhfBvhSZAcofFauuVWRBcemQdHu3sqaK5AJK4BW3sBcXTmpHj9FxXHrmPqcAbffwyY9wHtsmG5JJTAcJ",
  "key19": "2KdmD4EJigfutxe1KKtahWTsa27LC8TxuGhnGRirDJnNuLZAj4fAMPDKbLKdaWypZxesgZgnTFW2b3H5EvyJqN84",
  "key20": "2TFtSwbVxQL82pA1CeCu4tR3T1nELCfsJtq3ycUFnS5MSqjkVpXaU49FRMYM4fpFRvAT53HMHWrsiece5PdDXkKb",
  "key21": "QG3En4MVUa1yXPJeaoKpzWXSnGDzLTjGFJoQz7qgebJbEWSRgA1PNWxC6TYfSZU2nZWjdrQsx2ZLTDqKEkefZWj",
  "key22": "mY4zec1Ny8yeTZa7WcTrgM2mhMbEc8LmXEPmex22sAuFeLhYFY3ECczKMKn7rxhiURxws5ehotGEgCHav8GUA4v",
  "key23": "4UhcckUBhDwdt2mf6dmnapr7NFTz4WxArUYKTw4f1DhBWU8eE7kRHSYDDw22Kv6y9NF8P47dAaAcEgZKsCpjedh8",
  "key24": "2677Fbutc8S7zDTrckucNLFNESLnUe6zkRepWXQMnKP7jj9sYGiHspUUMU8JGRW4KJFsRWxW9RdYQGLX32qhVeai",
  "key25": "1RF9ABpp7KSHrBxbKFTfK6e2AyS1gUvgWjcX4uCuhonw4sxSKCwdLCd6jZ1sFqFZT1fDLEWfpDNhjiLBtQYGhR4",
  "key26": "MuJyb4B89BNg5BsrVZ3mBfTMndrvnXzhNpc8b2nowr7pkVYXTkUXEeqMdvR9A7xbbaNFypFu9JAdrUDYEHETepP",
  "key27": "2mYwF3bhpG2KjA9PvGDVfNVNbR8yAFnbS38zNA7MUa4wBntaq2Bxjwn6ZraU3GjJC4vaqaUxk7vVAeS75NY4z8Bd",
  "key28": "38TXukNyzHpyk1NeDj5UW4GYZe17VrBrbWW8hsfNVuT4aYAntcUtCD8YjuD1h5y8WqE9mia1bMnwJQcqbsYkx4wk",
  "key29": "2qkfTAQR1oZq4u5MHJuDX9ZUXaY6Lf3FgtE1Wg2xBt39QZGYvXtJDdKNwL4T4VF7GujqxvTcknrusm1uqeXtQT3P",
  "key30": "5Km54cjDMwsbmSFCLotYfRPMQpvSR8yYPgBWFeiMX1YRnjwu8wSeBt7rDbJnJ2YgDW24hABusd5AV6WgoWAwyPQz",
  "key31": "2bs8KGs3aPFk6kSm4xShJfWD16eECdnENVE9Wegw91DiZJ8DBuRXmKsNabWD7c8WGebtjFgcWaCiRdvhBUyEEfGp",
  "key32": "2EGC3SVkxmYnHVUXWSjc2B7zYT3fNgaPPufmbf27xS6kaYRQ1gXwxkjH7aajDbuxJTxn1h67CLFzNq1ZigY1QZNx",
  "key33": "3m53TXSevtt68i2TkeWDxknEeBo2wMKrUdv7RNZcuNALu3RMBehd6A6YtdR2KNoio3hrPLXatdnXLMP2ermfZ9JD",
  "key34": "4AzSn2z8CiMiuAW3hRJZdBsYX41KgxQvUWvWRSdax5qVDTtqSzYZa9oH5HpZ83orLW2m4N1xvduPhsTqphTrFaM2",
  "key35": "WZGgqd9ipK7z3DEeRTsP94vKLjxq6LYPuRoa5BVh3QNcda7eSPAvyLWWZQtT1DX9Ji32bGzDVu4VZ56FaubvyoG",
  "key36": "3BgEgjWsDhowXteQ3yKXBa8JsR5yGYntwAYSv6K7GN99tN3Q7QhhJA6ZLgkkGw8VRvT5Fh3mkDxb6iSA3mXhSrL7",
  "key37": "4va8t8bcKoACpiasDUXVVzgWuLTDQNC8osxPZLJP8e7rX666bD4D1cDDrrGy6qLRjEquRP2W2wAfqrUSqyYErgDd",
  "key38": "3jwN1GJPLxUwpBvsKrZLpFmmhGoi5LRpdecjEoiaSQcoAuUzihg2GCY9HyBpV7nTpwUgV4i8K9NdMegR9SMzu4Lo",
  "key39": "4u1WAG1BpTkkHba2JaU4JtZqdm2JMzZPLef9NvGk7eKg8M135qad2RZYjsiohs63Ytu8Bi681fBLxUpMC9P5ohCo",
  "key40": "ZnwTHDxnNUMe5ozziAbniWYd9duxFHzLRikZkY7eoto4V6D9U4wZD1SYJh6EeZyhnmwnoQKSH4uxUucMR9yAPVj",
  "key41": "KTUNWmkZoH9U4upweYgVu1zCkbVSUnA8uYeMrtetr6YtaFZ22o6yXeHhy4WN5bu5kJiQoNZvL23tVzRVtDgf8Fo",
  "key42": "4H8ZfwfM5avtpqdvRtKjs4dLjrn6J8YC2gKGntTi6o579sJCXHwkJQu3iBiRGieS5HAtjSuZEQuSiWZz5Tb9wpZz",
  "key43": "3K8SxNBD6xojSo8WoBYK5aac2bRy5n3etMyiUaYC9FZdjeGtXe8EyQkyBGCGdjyoZqVrbGkDRXR2mu6DHRvi16Kp",
  "key44": "2euJJ9Pog6y7jaKQKxBo1fzxVP2BmQWyorLW53McU9swgeRNEKXtABy92kzneYwKnfcHHA4X2UrvWtac35mDYXgs"
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
