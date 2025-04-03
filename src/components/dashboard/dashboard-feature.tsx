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
    "2SD8XZTEbXmGw8VCiQ16eGg1SNmwmSwMPkpLaE5K8cAUyDnwq2erMiox2P2EEE3hj49gD11gyjRhdYqBk7FEgT34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyWq2MKzY2qsJeQHLe1CtdJghNJn9LHgRHUyCCBwQmiARVpZXGvWikUvXcEpAWzGz3QPWsA7urg3u1ZRYqedsG3",
  "key1": "YDiQMFtMFRn8euaaq4LWzenJrcA8qCPRs6Uwg5ZHGcnDP11Dq2UvanEW72fTCYJzXyWSgnBfG5gLX16UDv7TYu9",
  "key2": "5j2PZEkLyknYswv1DWdMkLXasadcrdpKwUVAKXeR8GUdaQied9zJZ72baRQKjrFKTNc2rapTbsHmMH5v9tixwM4M",
  "key3": "2Ppb6rtP5R9gWmqRRvKLcmZYoktw3p7rbS8seMQa8FGb8bu5Wd4ja35s13RQYHCVZLUYSh9Xbs8TMiBbKkc8TqZF",
  "key4": "3i7yR5FaWnHAFxnpGXrgrqhg2nMTJFSfz6kHG21skZyQ4cn58o3DM4VLRPhBemzkQoEnd1tedyBUmqJE544pQ5PM",
  "key5": "K8v7bdxwTNMEhrEMXXosfHa28m2S6SX4BcE8kLEXwoZfUhs4NQ8ge5pWHbnLar5qQwPWZ16T2kQZTAfgsgeEhUK",
  "key6": "8dJKiU5G6w9Xytgocr7ozeZFXH6rhkFzukEDteV75TXHzF1hLcXdhXwREB4eDWcLVivsSp7zouhDJNiD45WDAmy",
  "key7": "qqwMNhd14af5cQvTAb7F9mLKBqZ3sxi8pbvbiHa8CSXR7LkRH9uSDyy5p81iNtovRXrc73YFNC9sdRBXdgGnvay",
  "key8": "4RfMgXBCT6bt6tvTfmH1sFX3GFPy14rMgWyQwfhaAADkQ1hvQJZL2mtnwKgbBUM3uZgPt2kYEnXzvPAUB8fQQ6yJ",
  "key9": "3aQFKaHpsz2TSU6CF2PNGBtAYn4yDBJ56P27goESmPwhC5df3oJj67CXhjsUg5pQTwewgWZB16brxTXZ4cSNxozD",
  "key10": "5GE2hrtwXCH9yehizUZD4JqHdjFgcDfNVswj3cPY7RxLJz7WJunbpt2UuCgRh6QzjPri44vGmKnrEe1XxTeK1UaF",
  "key11": "KFXZoBUEpn7rVRxvBgABmZMbKzwHNoVGxvHLeCREPbXHV75ndiWJCL7eaccPajbAKLGcKi7GmbBEbgsCM31LsqV",
  "key12": "4fMGadw6RQkvND7MGfMgphBLHVMRJmHxa6EWjWoutuFtZz2sQuiJgZja9Cavm9NeSFCTtEoi1cU5Q8KMXGsegLbJ",
  "key13": "5fRhhJh7cryQYtaZiTmS4PXo3C5G6mmZ1GGtXmpoteDcLhUbWTJ7MKDyRQntztPDjLaHcQNqSojsyTqM95fUb1ar",
  "key14": "4ok2gAJ9fHkt5nmP2HG7mQjG1V9tSzBm4wCFXNtCnbrqK6P8FdWiPFVVax3LM3cfdqBti338eMMqQRBZSk9NFf6a",
  "key15": "33qsKbtjjUK2Ajp3Sdfaq1qPKrXQy6PyBMSwgYA7Jsnahij5oMh6SX4a9XHZmopN7XEf6wSixtiTSDkLjjFWgX1B",
  "key16": "38X6DGtVCaohA38vErhwzBK3KxRYesUzes5SQjyBv4bMRdnELNZ1wcG1B8LLdTjAkbmq6cronoEvRP4QUpTwFYnc",
  "key17": "3uCmoeAsoRcQTtzcexXdWjaREBdTsUG9weVXoSodnzSttYzBgtiZKnhWd3szYaMyNisQAQttxYHC7pRRCBT7v7no",
  "key18": "23wxGM2hFL9r5Qg5Diy1MNpWfP4WMV1gmGPx643ckj8om65j6MuhiJzmNfUmdrxnN6zXDTJk5NT5Akk52YHSRwL4",
  "key19": "4gdvysyijYxAA5qNfdVP6Bd36EUGZmBWX6tL3Jhpe5GHA9peLRSQztiDfYodTkNiqiBN5pPcSGiciYB3YfdnsyVe",
  "key20": "2vzev2r4e3paM7jVAom6ikCcUCJH4iRG9TgruvgzgT2fXF5b4NnUvvBu8dkU9LQ8vRC8C61ACCccsQhvmuWbk9pg",
  "key21": "62CQCfvt43Gd1vD7qmT98ZiuWbpNZc7PcfgadrRSXzSt2zxykozkcah83Rpp6n1JmtQJHiWvnhDCHmqc8D9nJ7FK",
  "key22": "4BSDxEksy6FbJDFmXnKAK6AZBrpQK35oKammGLLoRYUNhXHJSMmhxDJnRvyfkVLJk6eNdu2mUEBKZF4HuTud28fk",
  "key23": "4PXqEJ8g762gH6G3tABbPVNo5gRrigBjtdFfqTjbD4cuMGe7gHxm7nMD8huGJjVoQazvxRNMbwdyg37ktFmf1RF",
  "key24": "2H7XwaCnWbnGNpomXQJ3wddZgLNj3LEpdXdHn3tQU2CBcU7bAuw5WpULFiUsgw3M4sJp8HP4v6siJhahJUMMR2Ar",
  "key25": "4xjfpGe3ogNsEHQvHPbyzZcbACtUaspLxFmEHPtTAS4t9C5xqho8v2cweny1rb8yeJpyHswtjiaY5Sp5aMT6466m",
  "key26": "UtYVh4o7gjADXPg8eG32mP9Ghcn4Tq7MXqPcC1eiV6q5XjPpDVGpU8qo8aa64MGytQB2VfBaj6tfyifB6RcSwhr",
  "key27": "46ccQmKSE1eG8GvSW4X3RQXtatFWxACZSyL8aC41Y3ApDnBhPKNQYadGzvFvuVmZfcm8tJP8JtWyCZxWwxzkAoKd",
  "key28": "2Sjr2A6UaP8rJrHRLd5sEjciuZyvz25bHgmydyo1kHGYnLpxCEiweNWqJih4CVUfUFXkVBtvpT5FSg7HJN8LGpjr",
  "key29": "67EuB4v6YEp4VvJ2T4AoGcM66JefVwhzAESDjurzLq4k1HgUkYY21zE6a4KsPqhKzgNh2ytGofiq3r3FXZW23YHN",
  "key30": "3Fg5kiBn7XejKnvnaXbVdm4u2uT5oRhzuhMuyGTfGJ79fuC6sjkUn76TNmhYJ8HLtrWKr3FDSTuf4uxZqRoNVhUw",
  "key31": "2eiNnK2ytjyjmG8ThYKfyFSnd1F7WQ9r3ZBVmW6rK4CpM3AcxpVanvGs13eSzCPeXpK94JM9gujdWf2rBqYFeXPo",
  "key32": "2drDUS8qXFxqS9G95fnK2xxHVJTgoos9EScBenZfn3L7ZX4vUkxHnp6P7eTCGaV6d5QtkK9fxDHYxYcxnKkNf5wi",
  "key33": "B34NPLyNRQf5XTiepJ655gHDgoJSQ6qdn9w5ooZQ963m462bAz4UV3jNprSB6uXoGWMqq7yojLop26wzU7BtgHG",
  "key34": "EeHbns4V4ASwcGopjqeMbmXSmH1v6cGNFjQBHKvRMaetf2ibvHwPEJmXJyPPToi8CfhCLuJCztSYp62yHMr8isa",
  "key35": "56Aez88uJ61qmvBJNSncmaZjfvMxnxkkD9EK3ptJoYXn72zau64CCPUU5zae4DNANgsBDs1NBsQfFF3uy5AioFym",
  "key36": "i6Xt9fpFaCrrd6GtaNpPhY47DJtVUaLMXXHaAMfeZ8HCDghB5PWheHWnEVNGxPiHEoye1hvrMgvkNQmvWHSDees",
  "key37": "5DVBtwj3XWxpb7SCcGDjPkKqPFBHyi693kqGwoTmRCSQLzmgBSdHMeBSEfkUYf4zB13C13eDY2XnDADAM6xCbxHc",
  "key38": "3C2GMpD2Z8pJBE49B86K1iZDP7P6EL8mS9Eh228aWZu7a6MoSK42Ujexja6VfHLYS6ZxNeaF6qnY91eeZpGkpDFa",
  "key39": "3HGW8NvGixKWhQrkoYmRFzctT6dNt2AEffkr1EMwPodHvukgdYN27fizqRJf3PPtHfAPDD96mkfuQ8dA2BWbPioy",
  "key40": "5azYBkyJPRjdbCrJpQzjCC6r5FL78PssFYGteG2Jp9wS97Yj9rLUQobAJoyhVRDi9p89Lqc7fzXqjGF1kN9nVrRc",
  "key41": "4ZSJoCZxzPC2eD4bHjC9WzZZLZrTDoefsRWkYALRQL2uprCkUQmY8rrixB6Byj24pWNQwPJFMWD5Eh4MZHs7gcdw"
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
