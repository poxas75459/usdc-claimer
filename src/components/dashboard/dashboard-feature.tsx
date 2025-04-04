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
    "3w2AhXcSUohPQbEu2vA4idovhnS6T84amXD4hehaEsrkHwJZLyY6RZdEsFcrK1BvUvB68wEGmYp43xQyqjtFS4Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZD2ujLa1TYnvAVTpz71Xoxr5owaqw3rciqZmzCiB1yPwgCcjLhtQA3AQnMCwcDLsM8DG23EY51jYW2kGU37aGYS",
  "key1": "3YKiMDfSuqN8nKAeejrjpyc5xwnqqF87DMZTq3iNHo1pFv4hpZnbkzL43pN3p7CxZSrtEJxQYtscB2t1kMFU97rY",
  "key2": "5KNdVMQYvAjsEkVp3PzUs9okEVwtpbpQmqQ3vYNuFDNyAAmEKqCF7cM45d1kUztoisLYgDB7YGLaWMmc7xBD5YMj",
  "key3": "gub1PrHoJ2zLxvgtLtdryDc8MfZqE9NKBW6rxr11xsALDXrVCRQFhun8tazPWvLXGs4Ta2xbov5VCwUrwxTrmWv",
  "key4": "seXZ2Qc53TeHH6KsdGoPYaLJwSMN9GWDv9Aw1Ma3HUUP4NmdKQ1qKSRjNryzsYENekjboqZEqi4phRy5rDy6HD5",
  "key5": "JHKpjo14CAv8nwD7Qzr8nGRsEpF5hZtJKVkkEEXR96yVVzDQKbU5gSHSAoDpxhAM2Q1SSyebs6BnqwQBkrXnfHS",
  "key6": "31GiWwQeiizS4TtVSWkcxQKrJsp8UGPymrGQZf9jQx8afWNNrPJpj3t8SLXN7UHd2zmkNLU2v77g1TkeFCv9P3jQ",
  "key7": "2LXhzWeUcgqvfczxLVbx7fUV8RT49sJmzhN3attZuGDbQfwPxD36s6VD25wKEq5JykY8JmovWka5hSLmLgcWmAV2",
  "key8": "5Tgfpkdabb6nrzDbM2sgeM8NHkkuoNW2dahpn2fkKuAFUquSeoofF68xHrxMPPfJaTxvZFxV1hcNnuhCrit2EwRE",
  "key9": "4QuUThcosCr3Zbjjm6r8MXNy6TSzDo16MarskaBTRw1SF8wsoqtYSqeu8uX7n83Jxj3jXNM1c982TUM2Q4fLGnrP",
  "key10": "5TJUQrd8sPGV683Vwm8vhAiCcpGF15tF1sKQcW7JgConwe1C9bWcnUttMecupJdgVjpZ6m3Np5SvDt6dvyH7hXgM",
  "key11": "2tUmiURGLm58CpiR8TFcFLEtaJbC3v3s8fN5cCUH4JdAN4hMAivgoDecoAZ3QEjs2ifeZ8G2eEypyjXj728Fikv3",
  "key12": "4xLD32PHeW2Mdjkoq7jku1TP269pCo7BgnCLiRur5RqrNNUe6vPbHCe42qEf2fFVxgbaVWriACw9BCYnZscXNwXJ",
  "key13": "376KoTLb2jR3aX2KaW2EZJMKFDdgcHsqZNAQ4v4qQEzbu795RBxCmffkGtTzXUSbmewpzGtxRcaiuN5vkiZMxvBU",
  "key14": "5yNAc13EReH4jmc2iDVyHdkrvEePxgeDvabvVjXu3XNz7LpxMFJuooJeEgtoZCLF9cYmpbyXxPo5F2DWGomAymcQ",
  "key15": "4uAc8GsNp4mf5BndSnAxgPBNzdGaUv28pqXFRn76r9VJMJNv6HMUdFSF6F82dykXQqnFnH268k3wJ3mGZjhrqsu",
  "key16": "58oqe6QkM8PyNcqViHSoEUeZ1LAJxvYb7hrD2xK1o7n6Vfo39BawttJwGmnq3uJeEiLcFprYsFXbvky7qGtchTTM",
  "key17": "2oRFU2EFASuVPDkHXWcQrkcMpA3tFC6dqE33xLXbxcjGai2qC6cdQYdj3nt36PcYChDishgtYaHZD6pbQcx99aBW",
  "key18": "EVBD1A9hopoZn1Ya3EMQpNjm9WuN7JtN7FMxvFj7c2qkxvWaLrczf8asqoBjcokXjoE3SBW3z4hyC9X8EMEYAos",
  "key19": "5rj9qfDtT7WKykZFmQ9ttJFCNsDaNHrrPtpf7ygFeYfHhe6reUeXZjod33FDa8ssi6CufCLqSezP5dKGKx7mRrEK",
  "key20": "467WrFCpSaSg1SUUArabvXtG23BCRfoVYfrKwoDbS8csV1PtV1yBU1xyoebmpmYyXzpnmh76qCqRJaLJpVSBEDBS",
  "key21": "4y43QeD62YUDhW6ekg9Ce2fDcFZynFEPcagYRzD2VNETjDUETP8fSRrxHU6w5ndQcx5e13mMDwMESV9vkBX6e8sr",
  "key22": "5DHihTWXESJCsoFBqxPRxWDF9yBFugyCAJbvGCVezeMbQqzfSj6Qg2bbzM3AAcB9cuGCpnMsTAUVmx6JqciLJ8g7",
  "key23": "5nGjqfuU9FnkaVUpAzgSzEtA7HPNCTZFRgwfeEmL8PKWccuZGKoheMWuW4JPco3ULDfYivZpMWbSh8jGBJHBjY7",
  "key24": "63nkwVHQkfiemcgdPNTkcBd998XXZce1wzKmyT2C5sidUbPN4SxrdqX3DtJguMf7jgSk8fQKjmjhqvCTy6rRcWoE",
  "key25": "4bwhZhX3y7i1QXSXsLEYAmj1FnrnoNsBKmmYqAfshJTawJwyeEzd5QfMXtZeHMYayhRjfhqJitQ5bHw2FQFkYZFB",
  "key26": "2A7cYBwLDHd49D6sjfgGneixpGjJ7iAc8X5hgNWFmyCxkeioeVQVZoNGBaKwhHtWoHb934gZTNrCdKjRXjyXcJHm",
  "key27": "K3z5dBd288RBydM7yQApwU59gWgj7FvGkRijE92B3oZgezZ2jVDmZG9C1K1BrQhodVaKGHTs1TkBus6aBw4oLpA",
  "key28": "2VsbQdQHMyvZMiPX2UCXt87kJM4BSvrnZcNEHYG1rF9tfyghQMqLrf8TzfNJ7VNCZYbTRYnXMazpYy9vFirM6csP",
  "key29": "Dz1NRxHfNNGQmzXPGRQLFujRLsowksyw7vvZhRx8gchM7KLmzTYaJKGVZVbXVXYyi9qbtYy5ziGDhMGYRAgye4F",
  "key30": "63v113XLqLfjDo4gCGZekdYGtegVJzJKfLB1EMMox53wkCWKiPHsi7KTj4NdPYwxNH7x5jWy8ufQSqEkxqf3mGYx",
  "key31": "3qgdYT32an5B54MkQmY12hMthh8ahMYffSvVQK8Exd6jvRuH2cVxBwLwUrDn7vCKWy7xnwjim7gnu2okM2rhAXsX",
  "key32": "81pqd5nT463BgJvTPrsAurRnrvgoZyr93y9tM8FFa3GAaxesvvtrUGAmS4MyKWGbnqXQDjSWDRzMPPqFm42YJa9",
  "key33": "G4g8LKvfgJ2rWwiRoBsaRpDfaPhZyBKGiWxFgLUju1SEtNGrNY9XyXGw2BBgrTWU7X4a6rhpZGbn93Zp3gLrxvx",
  "key34": "BcQrQKKa5nmDKTkeLLamatKvu72S75i4WHQzg51Zmnud2in5D2nsp4Hiz5AFh6qAHBRDzQbLALLw9DfgZCkpL72",
  "key35": "5gejqNETXHZvtVTmP67fusv1cRvEaU8f6CrXqHCJs1YFmMJm8KA4FmWQ4Lh5Ay9hYqsRnxiLksLaPZRj3isPJLE4",
  "key36": "3b2Aj2sD4gyN539iQvgaWphRxrxidMV7eawmYrqETr6RVjhLzBiAYXLhHacottV4w2SGNvc5eUfYaiMLWTuLv7dS",
  "key37": "5MutXaoEeF22qnhPg3ZdxtS1jrWhxmwFgF7agoefUGo8NQxigLanJnCwHfoeGK3byf9NKmeUMJUCnvwAYfm3gwex",
  "key38": "2UnWRcdofhUW6cfdonWW7zEz2tKEajS6khYaegM5788v2xbczaotxFr9fZW235bUuHU8x3RqwKPeXpinwuwQuq6D",
  "key39": "wGaUpvyvB3vx9kNDGMDSnxoFE3bnu8pY9bUNiUxsAjAEeveYZjBHQi6Ehp1SJYYhbTnaAn2VqzixBr673AfPiRH",
  "key40": "3mWA7mmAti9twZvpidEa3ixU16cVs9dFy7caDrcw8iQpWVkxWyQrJoLfpUS6kasjNeuWq5sixBsxtfsNBcyh3uvv",
  "key41": "57HacVVdk1eRzptcri3EwCuSUF8FQScu4oV7MY57xwjtKRNTiiXjATsbksGVgJKowHzFrP3K6ePChjPfysdghptA",
  "key42": "4dR5uvVHdwJbgc7dBysjvrWHsjLsrEswDNmBQt26W8DmA9UPJHiYpiNcxHGdQJcBCtHEs7PDvfRrJJkwXie8qNno",
  "key43": "3WycytRqcqewUP9rxfnHCa9B9J26c4sgxbAF5h7xcSsoeLno6Sxm6QHaRhacLURaB9LJWqDmgSRmFFxCvGfSyp1x",
  "key44": "3sqnDuHroTcAo7EgNV7h1cMH1TkBS7ZKuscAshkFsiefPXsVhPCfShJrDBk9JL4oSD4WAh2WuumFbJgMb3nCjGLL",
  "key45": "2pqyH5KF9e94y2cHRJo9gGTqX2HvDF7oADUbEhEMhiXB4FkjhABZzB9y5b835KbqB4HASiZ9eWaLgag8Nk8Bbitg"
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
