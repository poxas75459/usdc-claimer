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
    "5ApbNeSBDm9Q4FmQ7ZQpcWKBPyhS7Pfamqdksb6hrovDJbzkxzEcreiw2tmt3DhDeFwQsMMvzGp8psgY1G2ZZuv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dX2j8S8fhwdUp6UQPFxEoaN7ejNf45DiDXdfBMomwrcKLaJF6fXuJC3yqHA4HP7MxFLuukJRq3wCStdV3tBRCMZ",
  "key1": "2QgpEQZH9cijmMARNtEjiMaG5LApExVpKMTQq8dHZ97R7qv7futH2fp4s1Z1Et1KveHVq5MqsvUDNagd43JoKTnn",
  "key2": "3yhYt5uN6pthVDPDJBBxVU124KkwfQuz4MfAPbVgipmssRB4jofDJzVQHFBZfF7HhqsMXw2W8BSS8hkufRTek13q",
  "key3": "3Q8dd9BNzYsJoVKB5odU2pTpSm46zZsZnFUk6cMfN6GQvCX15tGWqVLkvz33eG2tyU8WHcG9Bxh4dfYt9SZwcQ4x",
  "key4": "3ic4SzFVYNeRtyjaeVDasxnc9GjVetUyM8qDFqCVGMFyv5gNJHNrEYi1qGUPxHEVm5iWhryPGKBuFhAR1R5BhYpw",
  "key5": "gxW8ZttkjaDmaj5KUzSqq3FSqVuxaeEBkVEa6aEy7Aktt28u1K6PNVZdX6r2d96dnzeMrrxPJmyK4nTe9GeHmEG",
  "key6": "67P6AikV3HDikMZJ4QHKuQqBYtommn8CiGBCW8iEscgY4VW6ejH8xcBE6nAv5sKpQTVibvpiz6KtRA3dk5rT5rPP",
  "key7": "4ddWXeDnSzdVy625Vet9YinHkuSMhWkVCmbcZXsoNs2qYkP7Gm1qG2JCUBMXyPB9E4ZR2ucxoQ2fLP44M86VNR8d",
  "key8": "2YVcVQ8mocqhKdCwtHrWXbxcWSvzr9WXbbVuQjynkS8fFFXtZ6rDoN8Q4igMMHJ3EFeum9mS6bzx1tP2i2mHpxPq",
  "key9": "5hxAc89TDV5ufsAR7zsnchFKuLUppTUDapdEAJionZxS8k2CDA8UDYgGks3yRXsnVfcpSvkvuG8NTxe6SAYtKycq",
  "key10": "2nv8LkUgm8rCB8X3h9MpdHx8tjwheahuZa4fhyLFdN6Wt7jnv1ejtn8GcGWkjP1UhDA7mCEgXKA8LwN8ZE379s1u",
  "key11": "1H2j4PoTh6TbRc1uL91sb7GkRKeG7gJE4YxbutX3GpndxBiXiJ3amoyyxPBMBYqqTE7EWxRGcQK66fQ2xsHttDs",
  "key12": "515YvTBsMz68L4vzkXnr4kKaKxQ8VB5Un9vr4jigndr6amA4uLYqYSwg7yWZKP9qi5nyCGRZdx3GkLjCDJNgBzA7",
  "key13": "9zzrAbQv29wjfhgcSQ5Gm4vmfiPmiXuutyWsqVHey52DoBjVkmNLCeBDkK4Dna5b9nPaoa4DXwAqfyf56y8jCdk",
  "key14": "3K7p8WrG3uY2CQ8WyxrRMoUDnCQKzSaSbsCqEnr1CFDUtfHapPZkChhAqPLRxCkAKBxEYLPKDFNHFP49EHyskwoM",
  "key15": "cjK7VdTyfCibHJErBwb1aCJuKaZ42nd1hC9MFmV1sgfoEcXdr5GQLRjTk9mQCr4BSFCMKgsJoQPxjqAjyhFCa96",
  "key16": "ac2RWPVzoMaCkGzQ2BWN8iezs6XTJ42Q8cRv7eWLmvp8LysEb4LXWDqjdcGzC9KvyEB1ACfMXSrwXxDSgaPn4B6",
  "key17": "4VLzJqyxDbsiGfCGkUMk12HGkGAebWAEwXVR7pg9zt9Jo3AbiT9gQXs6sGtT8mcojbP2HSM5FAAxWNsbhWH5XWmT",
  "key18": "3zZHe4jFDFGSunYxhf4rX1LL3wmjpfKWC8x7RLkQfTZ2sC6VZ2g6GK3XZaZQQw8feNUH611oES4FGjWVJN42Aq5h",
  "key19": "33wJFeDZ5JXzDxfHcRf9jgcha1AVRiyYWcJ6MxachBLiCou9AWr6k4uAc5UTGZzMZEvuvNKeNQ8Dx4UYbvQbCu4i",
  "key20": "5mqPwUUe4vcqENgyUKQCpN7sAy5dyj1WK4tUvjwEdnaTAQ3yyWuDvYgBpdrqEJdgfdiXyWLPdZFjV74q6oeEyfss",
  "key21": "3UPMLrJQZSkjz7mf9o39zmqq6ccpKywsAWZTQdNGc8ny5yGENjb9btd1BcBEUbjrcHwEUyyG8NWFkZNoMEGDvX87",
  "key22": "4w2P4fyVFym8ihyg2CTRMGPvaHH89E66rA3ZxvGETVAoHKYcZuPWkwxJXdPnQKR37mLcfiY3VE9qZNMAQFVDxjSw",
  "key23": "5WiYjT7dgpXaWw5zRffZAtjJmrdTPdhKEJFdFb79YqvZTSzrfibhNj1FJ5Dw2VNKQh3fuPFbcBTJJRCLnvNsZ7KH",
  "key24": "4N5jbSZkVQAeEdsa8qRJawZtzJsQFUSQGvVYQNaBAVQ9APh3h9XFBTvftL8r3gWhPbxYz1aQAXzzM7zNBSjVZwit",
  "key25": "3fbXY3zk8jZcMxzRUm8KKzgVeFaPb8YHPkoYfJKSRxrCCnqajkGNdwzzPhUiq6WD6f2D1PZdn5HN11tGXX3PHwBT",
  "key26": "4uFxVnUBdNbL5ezGkTVN6b3CGP7aLKPEXuqHp6TdvTxV25WcihQmDSqQhAmSCZJJ8VrrCPsCSRCULSt7HZHrYpDp",
  "key27": "3UvYxaGCvSDm4EqziVxuPeYLFY8gWBJsAWh97kQfMDGC9HzaVHQUhi2dzFtNyWfWUmGQ6tuCvVwzyV32AfFGu5E6",
  "key28": "3GM7fA3t6dB9KPSY89EinNEraXF8ALAUSyZmi74WuKt65sQQQmY5WGMYnfAQXTMTM4tAKZSAMUSD7o5hbjTaTn1V",
  "key29": "2pknUmpmoiF2rhUQ6oys6q6BWUAjY8ey3MRdvmFSdMEEAAonxsAgjbfNf3HNgpZdgMM61Fd1ja2ZkmLbgNtkQ5zJ",
  "key30": "3sNjGU8PVQ82C58dgnQxs6fEQFaAyNy2aFiVskrPGyey7fKbTiuLyezwrbFa7LhYXHzNwr3LL9WJwLr1urvBzfpu",
  "key31": "5kz6XJkZGHGRnvBQRNeH8gVJmD1UC7q8MajNFvXL2JLbtkXZzVzD68YMFNtHzqwJzFjVRPdaN9ofS4xbLdKpbQGb",
  "key32": "3dZf1XdDcXxpwtt9dpwNxScF3o9gyncnr8Ubt2z2xkFv7SGj8sDqcjnTev9jSEN7TytNTUJm3Fsiwpk62gqGV2yY",
  "key33": "4T9BgJnBJDd6Y4L9nAokyRqxCsW46uwR9CH8SWTD7WoRqVSiGhtTik3YHkHue8eFT5tpHigJ9djjoDRJKgktNNDj",
  "key34": "4JCdod9Wawxsgm6vMHEgqUsrZXxy3QjZMXnRrDw5Nhn7T9faaF7RK6dVBSX1kaetTsnGBcn1pQNPd52a26smNqTz",
  "key35": "2A9aCgozCCtxW1p6iHrx9U3aY8bArqATstmLxZEkjqgKnRSzUc9csnkAD4bFBxfe3yddabNkAH1XMYLHkEcdjAGU"
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
