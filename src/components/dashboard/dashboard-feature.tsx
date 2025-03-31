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
    "2UrQo2Qw2VzTkwJVuJ5uJwEcLtc8sfhTUnrSQ9sKkgs3LEVnZoGcrsdSD3cxyHDoHVCRN2QLfLr3uyUnAoBu25NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4Asz6VibghiN2wjcebemLLhyEourxLhPFEvr5XJn8fgapSCNfqgSdw9JGFkedx3KoDFasShGs7yH8i7N5B5PZr",
  "key1": "4bD3bu7ssCJvCwuKzoxSASY2AxYuTyqzaS7Fhw6wSMfKjfCXsDBRsUKvTt126JMt1pEeMHnxuAdJXaGRm1hLn2ud",
  "key2": "2KgBkSBnQT8cNeHf4XLiKzjypaZc4uedYMUuoKvEpgCcRVb9dzfZjeqCXtfaoQ8hdEDXt2BhAFNyZHuPxkgdmbsB",
  "key3": "36HKVrDfSHMUYkMK49KgyEmLcbhjkcf5uJmCLtpM55UvQbZxfCt98SQ1HE48kScxjusfACrLVpBpm16VZRzhTwhD",
  "key4": "37AEXLB64YqYcn221rxfeqwUBqKJ55CUMvAJcSyFF8YZcYBNmHVggzPuZJbY7KsXNNG7VxvxtYxg42if5EjFrerK",
  "key5": "5ygG7PvTbWV8GEpsW13TbqmUCHAW9kwKmVPaChP3weMP3911RSumjp2HJR3gur7auaFtzbjqjrD5CnRbeHmFjpYf",
  "key6": "pDEJqgvT8ZVeNtxjxPhi9LMAU29iA1CWSGAisnVnpJ2LVtdxhNv5VoW9DnfrMYXB6wK7JFM52F8N8CbA7vEm5tF",
  "key7": "5R6JkzDxHA8pg1G3KDd4ARfRyeKFJM4uBxJ8DFLHPd6Uf6zxiVH4X4WSvoDTBHxZ51gTjwkrBA6JhANheaAzekit",
  "key8": "5usW4Na5GG8L5L7TwQPXRwzK8RTUfbjAACnEpHPe3i36RhW36JinCRZbUfiqzMoryrq4afwtcssqDM2K8oA2Z12V",
  "key9": "22FZyRsNj2c9CxaFrTC3MsrgbTFnN2M6xYozTXN5kKhHaLuWHsxVDuqAV7BdiYJ6mndpAMXmxZaHHJmRwHKG49Ci",
  "key10": "415mjLxB3mSTsb6niWdmvQMQeLTqn1EJw51S9Y74Mckf3jsfb46sJjps8VjakSUEp8MGYw46sYXf8RNeQQzE2d64",
  "key11": "4nd1x2xxjzwxA4cd1zuFQFU5mPPjo8dx5pUoBAMvHcHiyfAPebTJUoXc7MFfHqbc6QLARHuePXC5oGs5aDJoE53H",
  "key12": "2GPiEBRXFUibY2nD2ADt3NKXePgqnRG7k6DKgK9yiK96Yv6oic4mnAxAV3GoDL3nQGPiqR6TGAUvNXRt3Bej5DXc",
  "key13": "2hYEnosVdwd4wTZ5CVm43kyHshGQP5MpYk5xKJcKZfmVSiMHpqkLKP1aSx42W3QohYptporvZ6PnKBdcijJ1Vq2Y",
  "key14": "c1TtnXNPXvZox7syY511M4Jt9smn34Dc8nrjRwGD7jotRk1uSJiEa1VnDe1k5u3SbQ4ZXMRES5siH4bAa8ZRV5z",
  "key15": "5CNPiYo2FQbG2NFWmwTF9Vhv1Ge7SHjaVPQAbFJDpucE3HwTz3XnJmoBvkvaua6DFoDvVFe54ArmiFE9Nwk7hLSE",
  "key16": "3ukvdnwxyNMShYsScE7KgAmfgsFKbQbh67qCUT9EnFfeKUa4wpHW67B9rJ7TMshccJ4aTbM6gtfWkoBimfyHnkY1",
  "key17": "282KprFoTjiHPdnQF7Q2S44mApRwZDuu4BMxcZY42h4ZgeBpFs2ZTAoHuBBsJFLe3FshCNrLrGStpzhXc3Q26sjn",
  "key18": "sPW4FFbS9Zymkh1Z9qnV9VvfpnWj8pfToVu9v9Lb1msgtPC1keU7PK7twY99hstf3wB6Y1QZ3pxNFU8RSw6wztU",
  "key19": "5DB2Mi9gCqif2fkvzxqkmXFWFBiYxCAsbdPG8bG6MKz1P74sTPTvCj7VtVnapqPguCDmTDEEbf6xfhraaZCqRmGf",
  "key20": "25qM9vxqfhPebjYeV4JVb7iWZXbHEAb5nismZGR1iDXcPYxthY2G82Lpxzx8XHuxUfryrpDssF2stbu3fQjCU8UV",
  "key21": "3LEwAMb6dDrpfGGWfonxmb22m2444FVA7QR1t5hZcrpctEUV8B51JMEQLzur3M5GpAmdPZtMfFthTNAgDM2B3Lrr",
  "key22": "125JNu1wYTrJ29zC3zW4vbkwP3FAiJC7QyHJfjsUgoKzHruE3GNwV4Eg3yupizghzx9TPYejPHVdTRdjRcTfBkj2",
  "key23": "3aSsjA8y6xRBKdmgQ5aU4u15zgzot2bfBP6fHptPv8or3VwbGNzP6CnFW5NsCYZUqdN6zd5EwWhKZf99AnZeHmUp",
  "key24": "4YzmoaMyhjM8bX1axqLro5XRXBfX4juegfe6CctpdLo1dKZrHfkiAYLJz3rmAxBNgZquabYBmw5sXv3bye8dbEeo",
  "key25": "4jUBKDstG4LMXTUQqoC29DGRHovsxY6NPaELd3BKZrGt5XBsAnoAy7t3oBh6e9E1Y72r7RJLXauAzxV8TKdmqkHn",
  "key26": "4Bdg2EBw3LmZ31pygBR4X4QB6idEShq6ZzdGzipdaFyvChXxqxwxRCJZSnJhLQYPMY828MF2W1YuzmE9fwJPmpZU",
  "key27": "3qKqNCJLypoNZ7hY2NSYzsHS2Ew75nmzRJ5UDBdmehZFKHgZkxgsdpYe4j5R3UpzVVFsnTZpBfTeEbhhXM58rzwt",
  "key28": "27eF3suYiST5cLraf2hJNUAu7wYEn6ySSix5uaUjJ37ZYgTviexzuVwR4Zw9UQnUn238vi6HErXsP4w15NEpaAez",
  "key29": "4thPcrSnpzpBhwxfFT8kjkY5pTgNsum3Soez9DHkXE7qFcNKKbGrwaHJyj7FkAxM4xQF64GCoyHe1WpzQ59Vm1qD",
  "key30": "3YtcJ6X8EMLsyZ34phQpyuFwwaU4Bv8iAKe15wUYkdKZNWQ5e9St29tdEeToo9A3xQB41NSPKdt2kByDQXhcpoXB",
  "key31": "TuNdStF5iwyWJuVmFQKYEHFCTa3A3Xbnybsujz8SNUyqTc2ksNs9yHjWXZGrMPz7NCJZmEpDrJ9VUK77feTsT1L",
  "key32": "5vvVRL6p99oBG2zNfNwTZ4xjNAaL3DHtqNgQgCdgYJeQHdCxZhZ9wRfLXp2NvWjG4se11CdFpeJosdzEdKWNVZLY",
  "key33": "496BvHRHMYUnK2qLsPw6kXYfZ4NVozi3M7ZQsqARWCTVX8Z9cKVPAa2StCZME4Gr92HKqfvobAdNonYmQjuvyGNy"
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
