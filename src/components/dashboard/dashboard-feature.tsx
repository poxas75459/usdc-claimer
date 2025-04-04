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
    "21Cc7RtbBXHvb2pshPVY7WTfYimdjv6mcMcQMUchohyaZVNvdfsCgD1eajNxkNrDzK7LEx47VB1qtMx5tepR8eFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnMoTjvNB1XRsNV4EbYL9h63Da3JSfnCTMEcpeiU9Q1oweprF3bpMNsPZb9dow6AxAFPjEStR4LbW1FgzXuLkY5",
  "key1": "31gm4v8K6LRFNDZ3cj6cizQP39BFMSKPNkfWCRG8ygvcK2ohETEPtFZtdf6CddGFgvj3N4yjBLZD25fgTc6ScL3X",
  "key2": "3skvzRRb1vv2RFGGij6EjWZZV8tXtckkoUPGLVkearodFbJwm8o3c1DfdmsNCNdxpsyanU19qELuM8tTyu3vGNmx",
  "key3": "jS2sRN7Bou2WTbnMynNms5ZXzSqdc8bDb6qXQqXEe7FQ3TkXLLHFzeZSFvhn198QQYHbGUR52kT5gCeCWyFSB6G",
  "key4": "2jnNbJaUBor2DMT7gjs7dU5nNoPTnGbP7B8VYnww3crAjA1wioZVuGMuCQ3opWhDSJmn7ouiLH2PqfVuyVp5esgN",
  "key5": "3LdpghhC9MTkffcsRQpjtsUv4EgsQ2vNyonzN6bjqxJ7tmShH7CjwgQvDGVioXZmRjwYAWNSRbjqJQc8nSZBRb7F",
  "key6": "2skQw6HSXBsEL8vwqqQbHJBcVi7hbzDsa2MRZrVsj9kkXX9oMk59sHUpg89uXuT5AgkJ1xSwp56pUPpt7EF9kKLs",
  "key7": "5oxRtbZLeX7vY5Ry8bHdXA35Ky26NFcdEFecgvs7CNJojYcbDy1QeC83egwMM3w7MF4y6qLutLTXQisfmHpDwEjH",
  "key8": "3WaEWeztYhHybQ3eEyqqwu3QgsT5ag8bz5vECfVH9Vso1PYsKfK84rEsZ25awNoj7RmM3x9ZvE4n2t99ivnqnP5N",
  "key9": "8RUW1Mf8A36RyZ2Q9uB7GvheGi2VepJptr1tWNfCb23FYWgNxa6ncM28zSh9sDRKJqVfCb4K937cDfs2WLfWEbr",
  "key10": "4YwWuPWmDDHWNKYtpJvynyrAWNh44iDWDxoXmXf7wksmhafKh1xHDbeHrtCrVZNU1HJ7zyW6FkAKU6FVSWPALMjA",
  "key11": "4S7KmyncdferhuXy2PLVaVsF9vqsaisu8b5KTNgp6SXZXPtGA5xbaKYzrsozgz9No2za1WT54AiJgkVmxh6itMkS",
  "key12": "34Jp8xoSTVg3WHVKAsA799gWKxT8ZK8M5gG3ap2c4KJ5U4LUnWMycrDaNNsZ4uWKsoiktitrXNQuuKm8cEVLZeow",
  "key13": "495AMa7AaHHbUWgxnQs5BqvghtcVykDL1rGtMHhtSP5dEH1oWuVEX1wkDmfQjNvAFizYLwZYdpocv1bDhGmYqMj",
  "key14": "u8ZsUK44BSxNEaeyxwHiY4fPfK6LBSc7MZuhXRRx865Mcd6P62xLP7QFwDMcQcfo9G7MRiorACFe4PnXxkJ5Pje",
  "key15": "5BgiQoXh8GrKizUmQe55gYTUJv5MrkHG78t6U8q2TXcmf9vxcWVG635T4Z9Qn28G9sJszWdRedQ7umTHcTWhCbDj",
  "key16": "2qUhiArtCU9i2tC6i1sDoLefo64zS43qPnebjcbQhw3FcWTnAsza8TQeQwkBhrNfkL6JWra8zrJh8UnmHDiUfHzN",
  "key17": "358pCsGPYnYEVqurk8YqaRUMM2SAKLpZfrevswHt4LEXS7rrFVGk3yvFqPSfXLVTESpoivRKPry5Q8rqSVC5GsBG",
  "key18": "CKZVyfmV11CEJcJNnDXk1J6vERQgbkyVULkP9vfdLxbmHVWygnLSr29j88yfWEQwrw2CerPYJUc1pwwaBmEiHnJ",
  "key19": "32ZbwK2ETdYh7o2V9svC7N3D73yFsvy2QakWmQ4EV7KGDBpNPg8o21zc5HhVk565n3Bg5otfvQE4Y13ecCPgQCJu",
  "key20": "2w7Yg72qMiExBrEbvypnpYc9VW5EpTx94JpNU7sypg7uHhEHEnZedyFoxHLAv2HrGivT569rryUfx7yDZbrRYwDb",
  "key21": "5c39FBx7NUXWRJFWRhpFEVsb6NnWHjixqCvsgiEHVFaBP4s9JGhvtqy4Gcxzd4cXGSzmCPk1m6Y69QPJUFy58eUb",
  "key22": "5F4Xj98F8xeUHQsdGpddWMasGJVSAMct2eSdx5XWjR4SE5k1nXeUdmzNnNPK4hBiL7cjnP9654suS1ZV1g78ig58",
  "key23": "2vzLfkWSGAC87hbHv2dsx8xhMdaZNVvpyxTSiC5uWkQGZHgt9LGnn462SmSUSLQPR4K7q6duHWmMih6a73JYxqHd",
  "key24": "5CSsmisD8iaJUBYGSMVkQNyc9c993dd55o8LFYhuTttXhhj9NAJDwsRrnNGsk4DqLdXfptgXmzbetjHJgY63Cwh1",
  "key25": "3FfYbSXQ5jdmnjKJyBu9Wej1Eb8iSXDo3QzNsuytekc6aMnNo8ZEEHFY6BQQCaGsoa1CuphZGnEyfyv8L15YwJat",
  "key26": "2yvBXQmwYFZP33mvwx7B3cFjjW8JimckLqAXVsssQGbbWxwNsh6VCMDaNYS6YFR5u5QJfTRQ3bjNbaubVWiefdi9",
  "key27": "2qnthnJHqyULUzihNKwyusF9UcoNTm5HtLeVw1jUxooa3LJmTQRQwg8DRsLdy3fLST2zZ2wXaSuTofdLm9MiHVno",
  "key28": "zTYjLikFtuMm1wfibTvpD5o9tJpoZ5UKBryAREzkFAov8NdXGvpnNyfgdB6oKeJCWNfKfuf17XyCr6KB4N8UZ9s",
  "key29": "2wbdqvrsrxg8Dd7LSu92GWtfYZTVDoQyS5cC8zXsEkjj1VjXS4rWZiR1baZUZzRUpeb3fBQwhwvxAfc1tdKfRz8",
  "key30": "5eegvFd84CVkEEgnyJNEoTn8N6XGj14ivM7kpPA1fMdiSVKiBRJXf22jiJd5GkWuZbtT1A9y5psfPB23jKok385o",
  "key31": "42je3UWoHMhJSVnZtFRtwegswHPRGwFWM92r2RNM3nRR6DuGCG7hm82BLg7RzAjszwUKqEjwo45ugDDz9Ua3oJgd",
  "key32": "3PPkLF5sGM211LYkYAHpzrQ6iYYpaKnFV9jUnrNcSnm3Aa1aYbLwZCDMPurF3Zsv69pCRHxj2JQqnHRBBoqph1wd",
  "key33": "3Njd3V3S1fjQyTrfdw3BGqbAf48r1s2p7TDaVa6zs2CCWEFATgThVpfHhpAZLZirjRCX6kZTddFfnwQRztBwUkXC",
  "key34": "2EnvmAyMMUefE765C7d9tJJFnknGVQ9hqgxsph6z9tRyb42yZoF2f9tWgyFwoMRXRewtVpzWAknsrqoK5e3eX46Z",
  "key35": "FUi1ZXVbzXuaGme5zw7MvqjVoPnvVUdD3nsrb3K9B5Uc4bm1dNNqDE13554fpFbhe1W66exdc4LPez4FNPW3szM",
  "key36": "1Nw9z91cxU7T8C5SfnMcoC6kvJT8Np1q7BMVBYpvk7bhxzmJE3eLZ19cZteJMudRppnHkXniZ9WgGtiEDzvrUAq",
  "key37": "RenyVHCYP1vUWA5u9Qz2U1m2NFPgmBuKDoRoE9ShqH1h8fTEWEcDseMvHZhyvJTQT4dkiMRLZaK7mZbxCLX8tNx",
  "key38": "5udNURiyyTFquwqzafD9zr1qBavZfPRKPNzKaeRZitPC6mUg7ijvk1DKndXRKzTnpqHYptqniGD3KFU9xeb3vPGj",
  "key39": "26H4Z7ghiDERUq6zjStYFG1yycZ8rBAf44tQkt9Fe5JfeGv4U9pQMHUpy6BKuGW397FsBuzgCJpUX7deKFuiEAo5",
  "key40": "2FE87pxJm2cyrVb8AjjqyJfFsZJCuennv6jNvPwc3ov3Y4NwyGyYt1ghG9bJ1FkVNYuz851wVTJU48i33CEm8JWM",
  "key41": "2MkqNDZoND8D9U1qTEerHcDU8ZANWXUBsCD2W1o7CyQtEsGL1SQu9nF5xaCKULjoKLeU6kQvyrq6htD2wwDPBzdp",
  "key42": "2ZEnnQJLRMLm1ZBAwCi7yDTw6TD73S9yiSt4PSHqEFgEspbNzMmpUbxinAnsMq6BCm23TcUVQqWzzrpe4WfHRCM4"
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
