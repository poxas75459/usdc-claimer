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
    "31MS6jYXCFmUkkMTenLd3s3UfD5EWBVZu7frr2PxiDkzmPQ2W8o5PiG1dAtMMcixcr4qHD1gRx86C8KNRnMKzqHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyRKVWrocXeCTTKNpsviiw6dsBkxat4SYUmRLa5wLgwgYuot1SVuWjSdZn3ghz6yYXhBejwUHu951Q8ciCAu1A9",
  "key1": "31xr8uVVL5W5yjD7t4NftJQ21o6fqNp8M2ArXN8M7X1ojwHHmgt6V1XmJmsgqzZxRVNZD8J7z5CZ6UYKeSJHoguV",
  "key2": "2Cb1Sau4QTynLdwhUTN7i9vVCkFBp5f4G3Kwa37FEcpAD58xs7PSvAHHCsB1gjb8MLZYJ5QZcS8ziYsCdcCqRFi6",
  "key3": "JC9HddeUQoM55HWGVkhPJPkN5n9BDr5F3fnPjobS7baVxwzTtHC631HQ5LxKHNfwaKtMiokeFjZz5XNeFF1d15x",
  "key4": "57hm2wKWaAHtPM2ppgDGAMYaGTzmUwro99fL18erUpfgpWjv9NjoENaigH7vptvKjtY76CWkTxX8VzZeRmnCYpnh",
  "key5": "f9YEpscrdZj1qpfxKC3zVDHTM3wVT2hyFCmeVuDoj4nVsHqRqMC6rKzAM8LNZqBCTWZMeJsLNUAfpMu44f2tp1w",
  "key6": "2PEi4v4UhgyvuVLLRo3A3F22E8C6AYwCyBhsyZBjonptwfoLNB6ZZFbWnr3v45Yn6TPTF5Z5oM8kw6Y6527cncXd",
  "key7": "3zAnzfPkyvRdp1W9SxKCfSgJ2xVhCFfk5P4ABEaBMUq1Gm2ijXuTH43izqGoFDU2yb3224VDXyE7vsoZZeCX8jLV",
  "key8": "5GNT8et3b3TNHbf1JGP5r8CaWMBQU8bKuoY8P2DsS4iAU5574UTGoDVsYFDHNUAQuvUGd1L2nRkntd8USUh7VJLy",
  "key9": "4dguDRmEQbiCraFzk9pVUffaW5PHq6n4iHXF2D8iV6iCtxRsfwWApuv7RtjpYVbaLZdJPgQ9o994GrZeHz5z3VE8",
  "key10": "3DPnv5TLHhvmpuzA17zN2cHSSQyeuG4X8NXFyFjG65tskbgyT8Pnx5iLurQ17VBX83MwCTydkiNRhshudsu8tsjM",
  "key11": "48M3fmDyqwFcbpSsGqSRGqG3rmGjjzQyxfkHZ9eriKaRfJkf9eNwzmS19iBViVMoDakdufN3LFfoAHuH4GsrxBnJ",
  "key12": "4hsjVUk5vtUbZQYqwovcieKXuT5GVa4zbEnRCwQcvd5jGhPgQJdYsnFQLsKkehcuFKPuZaxAaKdoFKMJGdGqVpLk",
  "key13": "ZiTW7EtdiUGxAmEqaeG39q8sU5DDiBWwuGQEvpTGev7DwxJi1E7gYRu5mnY4nQKNJ3h8UefmBYKS5ycGfj8RvqC",
  "key14": "3YZvg3TZN1PYjoha9BN3zXngFPLsXHDkYu5CsWv5etXpjxrD3Qq7dxjgdt3As9RWFqCVqQGLk5TAHFhbajiryC9s",
  "key15": "4iT77HqVot5jyoCNs8XVXWX6VUWwrXVjkfXgm9DjNpsptZLNE1ZuYZ6huayhh6zyzSMZyQheyoLec7MsDS85uyEU",
  "key16": "2YzLWw7PJKH4efDaXDKaxVML2qk7QGtNVw8DnWVDdScMuSCYUxvnMmd3C6QToV1N8QmPp14fhGwqpVVaJJ9Y3fVi",
  "key17": "5HBnKdgMywYJCWoZTyS66vqHhD3QTt1Y8vPjejV1sYnwibmN7uhXXigfEo79RxPcZ4NBw3oJ3NbkPVbNbvgBhYVa",
  "key18": "GpYk4jWLjsG3kjZpP6Q3NGHdszJWGudr8xu9VXDjucNdtYaUwsPbHfp7EQtiJL2goYV7To6gTKkEueCRUVo5L5T",
  "key19": "5D8242kw9oYkmDp8w1KT9L4avJiHybBuVsjz4W9wtod87qQtfjTVwJztQxj5yerzDrQJY1gsSatYR6rzF98Kfxkg",
  "key20": "5TgeKYNrksTyziCZJLQkgWCuJvER9cNGj43v82tgg1URrPNY41kqZi2YA8YaEBqpNXMSFjCESSGCFLAfyWKk2rtK",
  "key21": "2B9pyqaEAQVRyB4nuuhVRQYbqxbL2s2KXxAVcuMWdp6qNwNjn8eBbyRRBxTJhEz75BRFESYt37xVraGLSdNphhDW",
  "key22": "64SssPef3oTDKqdQxh3BwTymk8PioHfkHGdEKmHZFpoR3PqZmWaDQiptHTB4apnLa5mntr7A7cWjnZP1QqVjWRVd",
  "key23": "4eRY2kgLQwY4vYqnkMXFkdwESokxSxg9yywduuHspBAiGP4i1eLFpaLXKveDuaJ2JUVRGFh8Sk6ZSJE26NwWLrpY",
  "key24": "hVBbTv1Sh2F5irRNL9BXDcLwFyBJLr2mLmsPTp5irbdA1EGfEhEJrA7yFyeW1VjMYMHzvLJBounX2dvNbgFwMND",
  "key25": "3wdrMtdCqdpwCWYKM4fdrmBfjGT7V9FxH5xFvn5HXvK4u2srj4Nq8Nkhq8NpANnexQ2grFGnVAbXZF7bBykBPgSv",
  "key26": "4mkmY9wgQ28RYx6uwhQUpxMuFiMPXXh5PPiPVjNpefQTvx9pzx7Avo9aDsDk4q1CMsLTsD9T3Ye2z2rLkQUMHRAE",
  "key27": "4HJ7P2ijXV6fagtTjRsVkVEgEk785FdToRH47Becccz1kJah9diYAquBXRrBd9HCeBPaDwB4yocx3nUyuTRqqRQv",
  "key28": "2nrXjr7gSAMCzbNmj1bYYrxt5sCrXVapheMoXVtgU1HoH3KGW4DyF5S7FQUGqYRoh2SWJzmvcgKVp1hnV3UiHSch",
  "key29": "4VN71K74t9ZtMKkKme3t1WWgD1xWXiGimjJ8XCzWFxqRPnGd78QyNQKRqX69pUpzGrJbuBdFeTsAuiGuqCj8dE9e",
  "key30": "4bkEKwRuDexudwFF12dcxXrdWNPK8WXFHXx2ivvPRAcf8RZvAPz18NPoVDmh67HDPwQJErKJGk7QuT4E8GHjFdKd",
  "key31": "ui7QtwYUUGbFzaVFjcfwhjB6SC2TSTW2jRLHL9uFwn2tkDsvtwCGm3UJZvG26mhUPVqGzbH66TtzJytfgoYaPSk",
  "key32": "4XjQJYqoMTYxsytqmoW9brBF4GzDTiq1brrqryoMHpUP54ehy3CJeBot2zN65fcRnKeR8Z6CNJBxRkUi5v7XhccZ",
  "key33": "sX7qcepBQNAw11hScqZZ7AzNpMSbGyCousFPFH583B9rs3PB5upfSKY9cMQUGGKsXVHjA5Ykv1gACwz1ZVWayD1",
  "key34": "21xrMQr5LmNsxdUcqKs52DkeUyjgMAK7mXYdty6AQvpsn2QbU5go1WxNhQdzhxoe6uNco2nUdsWtdppPTEGtWLgP",
  "key35": "SCsPidg7CX9kMG3hPFHzfqweB72dbLepuj7PoWMzdqwPzQLuJB13jYGexEDceh5VQkn8BpMqKEYoEHfhCCzFmcL",
  "key36": "732QkY3WjfmMGF3q5MGMqkDbX3Njkrj2jvVUss27FbVKYeZLYMuENq5uhS3p1YTSwc2Gu9429WHg2LucbmjwZGF",
  "key37": "43kmosVTDi3UTbMQJ2fKKDYe4dh2bRvFTSd3nPTVv3vESWBKKs7eYq3a228zM4iGEn3KrYhVoQUbRSwAvAFGxjGN"
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
