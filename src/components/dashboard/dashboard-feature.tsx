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
    "ZS2icFB6hab7PtFvXcASR983Ej5FF22WRpgCTWbAJTKqHcMRr3VJW77uGEX3ScSrtELwetxJ4A256RwDNQmY39G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5BhLY6KYnxWijRWD4PCyYD1D3CpSb9U4uoYNDat1KtwoZLZjgJbJQWGKkBgK6hApgGt8fm3uJWUtaJqcm7F7TX",
  "key1": "2jF6UFsnE9Ln7AaHYRbUsAWAPWoXanV3m2UScvDGVbkeY79mNnWefQPhP13pHHnBP1TzsFVR4UQmzkbRUMt3vcRY",
  "key2": "2KzaFm6Ab93WzyaUiQZtxia5EjxHRvBuPR72219d7WGWc2h5AspgCE3zpsYg3JcuJs9wh9K9NXTHKUgdc7DkoJkC",
  "key3": "2jn1oSRUvRvrUKJ12p5z5ZqZJ1oo9BUhJs5nvU1Tuy7HjPzA8wmzkhJjqtnjTQAXHrsjdjQBiWgGpUjWEo6RuM2L",
  "key4": "KbEJUKwhjFRKbsgU3URtBG2Lrcs6r9f5uRbQ5DeAWBaR9G7nADHdLftxtSu48iyXMXX3wAnTjtpv8nRcZWVzYXu",
  "key5": "nRerdYJsaSN67vHzs2R3PwuG2BB7Hs88x5Nxdwht38Y9hUoxuMm1G2Yw5nUtPMgUheinsA3LcBHQNpGDuLChy1Z",
  "key6": "5o94HsqQADn6Cbicq4UdWpUgARqCikTiofc94aVbNvRAf6oJnomyFwWaYQBaa8j2g4zav8FVVAifSu9YEHQGxWNG",
  "key7": "3FCcSCir2U6ZHD1ePbgK4vdMvwdzcxbXJnZTciJcT7fYocSiFwE1Cv2j8BsdkNzFmNpekhP9LQ9vZ7MDdWMEzL7k",
  "key8": "BTRX6XGyiHarsyNaVyH6yqaJUSrsfnYcZAT9UKh8knJzTDgV3GmpywLtRSwXqSdR19HN8GmRn3TiDjpuApEJbKv",
  "key9": "2NWCJLwUiHg1V3MJsmZpAvRxvgn4SFGEAz1mMDJgFmDKk5yZfqEsiHYxygXtRYfikfummkKJGJDmhQTbuTLk58iz",
  "key10": "32Hw5UMzh9LgV8bgqjmDtn2eTdN9Px8tDiBiBmBgwWozEWbtrZGJ41QHS4rmXKmiKNEfYthg1s2kf6ZNFN6SxAe3",
  "key11": "4QULkyYCs41ojNag6rZgNijQr7QCGy9h48Y1siv5XNnsQvEkoQoumFwR3UkyrjVLbczqtBDusA5EouweT8YTKkM9",
  "key12": "Xv6mtWU2khy7uoReBqjKV6xFh1TzBbVfRTW1oifgP3JG6dS8sKkiBSn2KmCR3TbMdJwGGJEU2TKVpHjbRbfzZpJ",
  "key13": "4wvVc6Gq7GrdGp8eKyMimoecjtMPxJenYLfVM8reJEzQUBVEHA5x5jALz6EG6vLLeBHvYGvr5HaYqVACey9GWbgn",
  "key14": "CTD5wCHtYUfbEQyd1GRERihYpQxh8PcEZDtv6fFFkznqyqKW86HL3UtyF8SrmDLjSZwcMc3ejRZradSkyXeti5B",
  "key15": "4j8KiGEhxv2CooDw8DnvXLZaDhLyymMbcYeuwN98TNFRd2mjCcpop8gYDSqQwiGSH7XrUMnNtbrPzrYfW2b1fcG",
  "key16": "3jMTKhXA69xmVa2AGBDYWTFK8A1YmeB6SpbYQxmzKo4jEpTPqr13wd5PPiBMux6KjfB1ueyBjrgducbEnMbR3gbT",
  "key17": "4369BMCJqPFNyGRtjPGU3n56FjLuM49yg7asnvkJ3rYGrPyJTFe5vM5hscG2U8tJFmB1BHVjDCRv8qtCWVamv7VS",
  "key18": "4psScptqVq4MrKhLfZyZ66RcQwEjA3tCqDkrrvZJBCCJcAkqFfSg4SRZcu1baHGzyJbxPavktANF8K8hcFGLZBUc",
  "key19": "5nj1aeUJWN5LhRC2QVCAkN76VPMk6Xc35NNtzxWUMU1Vq437AAq46yv8V3LVyQGvNk4xQ5rak6z7LC5aQ9kU7xMt",
  "key20": "3BaGFkvVd8pSea1bbUzuHnJDXfZ2kgFrvDh6fSmgeWDisdsq8D7LbtTo6KnEgxtXbvXfiVNsaQXiKc3RxFeaGbgX",
  "key21": "5JsA99cwRW6hk5P6U5qpRTihceYHs4spABPDmqG1bvtzWs6NR6hCXFKzrpQGKAhgAvT4cGjh6U5orYhPYPFmz99q",
  "key22": "3jK3jvYz4dxMFmp4oaNmQ7HTyGHbpVtn7zZZ2ozjjpsQ4qHzLKfkJiXFCzt3zzn1FtVycCGsHMkMhpfueqD9vDSg",
  "key23": "5VqLT7oaUQvfAJg4zX8DbPaZud8f6UP5251GBmZj2KU3qKREUXm3ZR7hGsR8QkHhNXGqXkcokDdcQj2yewwEmUVH",
  "key24": "2jRs9LmbXjZiNfnQGEpKVMeEfiXtHVphL7w3kUNLEW6GWcWK3VbGHZeji6eLBNEtjfrYYkyJNBH9Xju3gKLLfUWi",
  "key25": "4ZkqEdMZfd1cc4h1bNvZJNvCkHRwUokmQ9iiHZkoSRTkvptQFEeLe5Tj3ErLZdYzR8vUjVeJFckfnBDaXgj2uQ6v",
  "key26": "27tZeqPhRvaFnDVJodHRdwSF3pwJkZkLofZp2GazcTExSQDH1vVs6d2fgoEavYHeN5X8UxQqzWSy6PtCBsRxDStv",
  "key27": "24Y2qydF9BpiCmRe8DBTEgsdKHDarBzvGkQM1v9bAQvi8t4VUeXseYSfyrbjVUNVfZWP1YUuNdxaG9eaFZbVTerW",
  "key28": "5V9RxYZvd9x3sja9kkW3Z2q29coGjuWK6MSFcpK5BFRHnvqGbXy6GBwhPAAPd9Qhf5Ky98enJKfkbTFsPMXhUxDX",
  "key29": "2MxTdm3ABr7ou9w7x5qRfBnnbs8xbT7rjG5pkiDb1sstmuDKePguX6AJUtu2sdoRJr9FzVWAkGu3haG2cZ76ioiz",
  "key30": "7CYpjEjPsGMkPRgvPwGYz7rXwuyzHvb2hJcqrLDSrDcu8skNuFZvny7wHCERvWqJRwucY9eeDQVijxyVsWSy8iD"
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
