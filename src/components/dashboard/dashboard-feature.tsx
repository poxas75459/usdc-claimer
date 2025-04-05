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
    "Vrb2UKG7cyKjCU4i8FRva3NUFuDhZiDYyjwn1oP5Yc3Rqtp7rPjHXetgUQqqHvmdSu8wxspFraZ4hyF7KdupQAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3RYoh6P1ddpMDhZDu9bo8jNGvzwAfVx4LcwDySWQ9q9hXSrcFFff5ErJFmsv8s17Wr258FW4acoCQf2gtYBLxQ",
  "key1": "3THaQQtLb1Joy3ArXo2UsWQDT9iBcmPitCvvdUy5FtnGqEiS3a8BdmpzbwsNT1DKpAdF7C5wd3aXf6Ub7hdonvz9",
  "key2": "3y5KcACAX62HwAFjGSzLYM8gtxd8t5D43hwB7RX6UKfQyHeFvNeaCUUsJ9vJBnZfSb1HjL3b2HkS2nfdbsu7dPLN",
  "key3": "5QqMquda2e5wawGznErXW9zHZ854K85iSrkiRpkenVKLgTZ3J2DHnjSNKW8keFDrmp6EPtVw31gckoB1eWDhWcHH",
  "key4": "3XjgjXAb7Nykpz2TLGwCtbB79etK2Hk3xLohv8DNWZX6TDj7xS4UV7tEPw9aAoX9UDaDK7rv3C7zYepgadY58Qqm",
  "key5": "2jS4jiNBpEL3mdpXNYLGRDrWrUM3WT86nbCrS15HDHPRGPJFNTXDhXbtrHECKwNaTsjjsTHQYyh78zDd93vkoa36",
  "key6": "4zMdZgHn3wArUDQrhHP3oqAiQtsGNekubn3D7Bf4yiH2Zmqjfvk1q6qbspUe2MVtLRE7DaYsYx6dVSPhCX86dRTf",
  "key7": "3t8SmPEfiW1uxSngYHp2RZxZsnzJpWLxSAt2Sc2WqkTG3Gz5orHAPqnkZdLueTpXfJyfTeSRu3SrJf2JnJkxiytM",
  "key8": "3fwttTybzB8gc1KuLtbCQCbAkdCMqasYoQDZrjsRpS8cmhP9mUNk1HpjjW3t6UWje2JLJCR78EVMZM1K6oGFvJiR",
  "key9": "4PbhraDNFggnDBgE65RaCbemyGMwGmkECMLbn5rrHwq8nuzkLH8xDeG2Q5S8dgBze6vbqkh6GoDprmfKN3yYPoC7",
  "key10": "3nHQUYw7xEJ3akJHb37h6Hw5FpfYpra6j623QcguiE7ABzamYRJaABH5CMh6VeDojrkbVYZneBMHCfYcg56wvPb1",
  "key11": "3VrR6m696464y3ChBJXRnaHpR9dW7iBbRPgPf9tKLdWGcuR6WPUZKMMoLuL3tWkBC9NyU7LYziq72Rfekjmk7ZCx",
  "key12": "41SaRu6dbf1Jzj9W6gt3qAriXnNGc65KRKZrpj34YMSm4CeFjixpDadnxEnr3HjdwEF9yRoXRRQFewDYe69UeoHz",
  "key13": "59GLaDfg7NysLYjY2oCcxabMhLz9AXmt5sKnnUYQRemcq1BWHYHpcyPCRrVrGXqJ8HDqeZngsSXNyPYdgwVBW4uz",
  "key14": "ibKr2PS3pi4qEQnKVGatNdFFRnjUH7hFf5H3qaMTFWecGdWGP3kAWictf2RsDk5nPAtNXe32TgYCFtWKB1Zh36G",
  "key15": "31RqoUgq9CXRunCpreGQesvyNRDtmw5n4b4ArUYE9AvLsXmzgAk5RcqgDZ9v8mAY5kbmNqQ7kb5bAZxB9jXwyPXx",
  "key16": "3X8WyL5gxZLQkAzefPRkb9fBVZWLpzG7Xbd3fDXzZy8FJuGxc4qWdkGqWmWj2uRaJ8LHSc5pSTSoeTh72Ey1VNKg",
  "key17": "5GXPZ7otHFJwpTEBG8Z3zJXbXVirW4zELVKy5maB4xVMutS33QEnL7LsoiyPTXRcjvr248TLoBzdmnLDmkCjkVaN",
  "key18": "5tLDjhNfmK8zoWCiRnY79yKVR69C2piD9KU7Yw4rAtN574reFgRCp8bSrKwCXy8665WK94NwgYzEH3FQ5yXPsbg1",
  "key19": "4owLB6qnhpKP1iBfBGKuzLjbuFXYfJbJiHvbiom68h7s84z34sLQiM7DiC81ZxCWzUu7HadsAMYb4por9YAfbnzv",
  "key20": "5DEFjLhCs32G8NUpPE5cXS9cTTBDCrEwkfi9SsanpuQrRpedyzEZo7Z7CfEivSDeXeevzRe9CaV4XABXuoF88mch",
  "key21": "2PGvsiBWfbvpehzsi5gRvTbxmjRpS4Q4qjuvzX89pNu9BQBH53kPAFhCADgc94G7BGarmopiX3tFK77Ca4bvDRKB",
  "key22": "4AHCRZn5XVLwDYCKHEoGvaraKZGoQFJaBVW2qeK2ZprVhriwBZempA2nxRgQQZNeL2qNLzKdq9J4L5Q1kRq1aR6G",
  "key23": "3XnL4me4Giyqn3K4ibJs2cw858zBU2JRWegdE1rtAi3bym1nLnHhsrmLFA4y3ijr2993XWvraRRmQcHrtpdkpYpp",
  "key24": "pLxUzFFmqkT6LR53XhXVeLMfB25bnXs9SPGUZuQRMkAFP7251Ub199jwoaz6aZotGiExSeGvtySjWn23EbbmLHe",
  "key25": "5tmMymgEMxX6dvjTDKBwMaW8qo8AreYEYqF1iaGaLm5vpm7M4pp2Nk6WUwAHj6yVjYyfAeZ1DWDtHyF9NH4EoKVC",
  "key26": "5JHzLjQrvJHCJiLZ2PnTG9C92F6V12J5wWEpaiHPhqsfhBRCoviWd1ATrHSN1yreLJ7hWhnBnE3eXyUhu2CwXZ9M",
  "key27": "P7c3MdRiN37PFgHjmHvTiRGEXjktPnAJ6gKgzhwW5sxNs9T3uzfcuG5Sw7cXz5YAgSGj4EFrvfrdnnyCsmTawPT",
  "key28": "4zQ8Q3Ezz1gH3QLJxuSSCN5h8kupFhHQ8fPb3DJQkYKsE8NsfUSNKAWbnKY3kiVLQAJ76A2ZVKaLHJEi7TNRauhk",
  "key29": "2VHWSWMxUN5xsxxF84W8gVBfgMz2m1AJvZmgwsGX6AUzxB8WLxtAD4N8GfH1EfqPsEsSc7zR93BXpBxCGBN6B3hz",
  "key30": "3DkhyBGiB1Mp3y7ajv2NA6XM7aRkWrNYeXauuYUbr65ZA6sQWGtvSe8Zpf1HrzMT3xLfuJr1DacHMb8ZWjucHtwS",
  "key31": "42YNQqzQ8KyPjso2aRfPD8K3oDfcDWXWGWf6Xuyigg2HNgekSuwWr4hxX4po5qBgV3jwUx7Kywp49cB8KLK7gEVj",
  "key32": "5sGJ5hqyaLJFvAKCp1qJdR5JJtK4Q7EUjwvmiHKTQgZ3VnTzMrasMVebFe7yG3cKWssj6JwcHRACDEwXnfheABNp",
  "key33": "DQa1NFygAcUEPCtkpLskQqTFMJZMr6QuKvmJHX8pUmN1AyTiF7JDvgid7GcCZMyjdb6x3QsVE1GyKe9tTRmvsgi",
  "key34": "1itXxnuDmZsipiyYv4TJgvVXd8kBZ91bYWDLwi8qXRDyeoR3fE1ypNAPoN4e3HtzjyJkeLwCHyskeoW25adB6no",
  "key35": "2QFhGQLur9VBgd36hshgyWA6rodk3x67uvwZEaqQA1R8ixANENnxnARvNP2C6AZ6ve6qDfHrophxz5HKBXrBYNH3",
  "key36": "3CyM1BSkV326RrUk4sC9Tm8QCEcSFQH7buUegLWFojYtsxtaN873R5rBs8oN2hpAePwz92DnejwLaFaUErP2EYL3",
  "key37": "3P6e2ok4VhGiDWojGWpUtv4MFpFADnd9gsd8smbbbKzpXXYbLrKLainDC5qsfm2gGyBDarVUgP6LYZreXbed7b4s",
  "key38": "54USeT1RiRYUMDUzD5JZWMsTtjeKrKYbQ5c2JfsePynBBzBJd7FweSxxWsDiRHM6MxKQMLu8SvcggCZbq6UdGsdz",
  "key39": "2H43qLtTsKeLdh1oLej4dzKdkBQypAUKrRez2ZBWHjfEhoiuB2NKeVB6YFGYJUnoDW6JHz1CYdKEPwurkoA8p7qx",
  "key40": "2DtSNPQ8JevPPu8XXYN1GgdYFXCEPpUgWk7hX7GiKnrAu9Z3WW7BjcMs1GJLphVEN5SwdE8UznQ79Y5z4yo8Gsab"
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
