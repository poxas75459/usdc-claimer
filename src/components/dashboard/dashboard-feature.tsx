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
    "35vEGrKVkCr28hyQma1F3uPvf2PK1SifrwxUR7BizsZjD9n5LQ4c4aApxG6ujupEUPabcxGvwMNj2caq6DXhAtUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rheXYDxvAuimz5BLTjBbryYrPNySpsCxtaDvnFnmGr7vqHxvT9iFCLaQKeUSEp8DPqmP3fBzXE9EVLPAvCR9ovh",
  "key1": "2U4gCP4UnTzboMDs8LRPqPcs2bHGNgX2AbhprVqq7yUjZi3nhPFcAJkSPccbncdrETf3mnuMTsoet3eUCs3hdCNW",
  "key2": "5iDLuyDdYEyuLEaNtTNR1zByL2V33x113vNkXfXEes1xSWp7SiHwDUmQDF4Z1jYJdGpdv7zME16EEGQeX1BPvMjo",
  "key3": "61SSf7Q93kmJHohW7q3aRCm5F1VQimnAFw2AnQqtG4TgHzEYx1RUo5s5ENtiJComeMynCTJBp6NKJufPWX58G27A",
  "key4": "5HuGpMNyaZZKHF2aURt1F2g1GpzGJrN8Uy8JzzPCAXiaC9X8efiEMXW1VKC6RjM23DXaxf5GuYrujApQcHJZpVXU",
  "key5": "2QjmWZt9a1pUuinHAgaaxkh4usQogWmsJhWeoNRUEWRmuVzfUdobSnmXGY4r1UqsRLyqusXfcvqkXiaVs6HvvzHU",
  "key6": "29WK1LxBqYDb8dYqeE5oJFYAMNZFdUScp4YqZ4K7EHi6SmYVrN2eQ22m2YaE1R3mSfG8988jRxmxUQK1jAsHBJzP",
  "key7": "G9Rj7sFCDN9A6xaUu4XhQs663RkKHTMse3EgZichxmvVeXc8S7vDXvQZvkfnKrMtTLaVqPrUPqRGrCg6s2o7wdV",
  "key8": "2pnnGJYu93fEgVRwPx2fMXAXqGdi2Vvsmj72jdq6nPfC8xqPmj4diu11YQBUCYHSPhcDDQGuAuUe4smNT6LrEtac",
  "key9": "4GUo3nHG8cTz7RUyWWeBbNs75KFvstKYY2Maysxh66dzfnYgK3HS2TegscysPYowgqPofLigFhgDv5ngV6Lag3eU",
  "key10": "4oxMfe7W5ig6ZAMLHZBkWwm8ycMn94htXGU2kQ11cHruVyBBPfmbESpfmvzKMriZcfe3r7Vtn8hA2LXtreA4q4re",
  "key11": "SovkYfxNj8SGYTnNoLRwtmWeVH1tH35gaMx8oMkmkwi5ad1YQegxNnW9CjFRDeRDBD3aSrbTGP5VFMPm3spmEoB",
  "key12": "msdD4U3RrFzr56XYhdfQBF7Q8tQdaAoWSexFxZbUCHxEQU2266CgRTcnU4f6XWcUx2xUpvdg1kTbv2LCQwPGdKm",
  "key13": "2auZV2KY8xrMLHnmUPLUjEqyCdWdQc5nxY9mayj6s2kVGmoPTiV3wnwHTbcAkN2WJVMBspeLwnxQawKKNQdN7hBG",
  "key14": "5koUbbPkswKDUWP2vrAvZnj6K1HUF9Akh5kk7ZdqXhZMFUbsdzPjY19euieiWNjp52J8VWfKH3MuC3pbXAs1JGGG",
  "key15": "uj8iDCtigR9qME6YPZnZXhkfhsXVGtyV2saVx7NXsa3dA4QrSbkZT6m4dvgUXfSdFuXdCg3mZJqfcSvNFRcsp5V",
  "key16": "2z8GtGuCtuaxro3p8VVZ3joPXVqY96v5kZVLR7G8jdCBYhsRj6pm2HH24VsXRgtcegybJQGgxjR5iQcSEvTsTWN7",
  "key17": "3dCfzivBoo6YQiN39RfYv88MLPcP4MkeY2dKJriBedXwNShHtxB3JPDVSDcY1JK7A6XAvX5iS4z9Cn7nka5XQmgJ",
  "key18": "37rP1NCbdkLJHBBRKt2bXvF4yQS28bpjUbKXhSd2AazcAKhrG5zJ6PxGdiCymPHt2bosFWzghRKTu54eNeMLeK89",
  "key19": "5K4TiBJApdtLqrgGhHdGC4mES651Z5KqNCJYWBJvcxk7rHDZwC6KD2pCSj2GWXj4cYvVwW65kRv4EGDXMMgVVHz2",
  "key20": "3nizY7prhECJ7paUWV5yZtTmvieFwka6GVsKPsaXLongKRdShLq1nFn5uNMmBqTvmXFEdfsQk6uCHASrtAKskkLL",
  "key21": "5H4MAxxQgab34dHFc11TSJci9bk7E17aNNiMREFvDwJ688HbAKehPus9quzc1UqCwb9fcv4ceriPdQyerHb9oCbU",
  "key22": "3unVqDiNk44C9dwsYXCHqPqkoqH2rrqtvwUk6PRAZNi6cWCQtD8pKa8CqmtZp3UKZqXSSKMTTzmTtnwmG9uRVtNY",
  "key23": "3Mo5y1STvPhwAUfDpzHe1HLdne3b3N7q43v7JM3GAS5KNH4nHXovkWNsoPVwDh7icLUgLCEB17PP74QoVJfEJDav",
  "key24": "4zTFkiesLSLSfsTgGZp4dxwhr8XDDKUzdVJ9jogPCDCix6NsbtAZzeJRXyHjktp75NLoYzZ9CuRET7xLh3QF1UiM",
  "key25": "5xQJutUQjJSba7x7M1DWMgqcVgJJb6VqFEjgz66eebojdUAVAS2JiyzrXGMzWEn979Dn46SrbgW2dpW1tXnkTudD",
  "key26": "35hss1SWXexRKUTbEE4r9Rknfr2Accrh1dUqtB8EApArHgAKBtV8TErLKL5UHzCh4ijvDP886q54rwJP8KHD17zW",
  "key27": "ncpjpu7fKkGnczjt6AXB6HPL7nuhGWG8Sd8mknGptp21dURz6uTY2FvgiibEcf5weSfz3Dk58iKQYwwmoDNPkv5",
  "key28": "4RqKzpcux47ESkUNTY367ygGf1H1N1zqwSAEqKJLdGzrZnQAk7J1ggsLKmRb11MtKAXXanQufA1FtivDepyYN6kb",
  "key29": "4Fg1xsGwYcHSd4YFGf8EDMT3CtohM9ZTX6p475oNaGMTAV6cbDH7zi1xkf8BwgME7nJ9SorRVhNsDtPkJpdHZvn1",
  "key30": "2JCGbobaMU9h3L5Vt3GjdJ1T7QDamBYDqphkux9vKBfknt3ybttQoq7Stb9mygsUZeYfHtvcZ5aN5wePju16TXVn",
  "key31": "Q1t8zEWoubFNDj7fDcw5kijy91HA7SmXZgP1CFs6mYTrSsCQ4sATnJ845t2ZtuWZvuoEpR9A71EQBdcVzdf2CVZ",
  "key32": "UAT27Debd1UPjXrj5uxo8sjFxoFYybHjnkPRpDQkspJMokZVuvEbt6dH4TKdWEu33FgK6nkuR3NAFagfqPxREPQ",
  "key33": "2KNx38msZrjjtLVyBUDckSmdnrEyzbWgXgmdbPEZWJZHjgVUK1QQKmwVsTy7nduoDy774HEKyYB7yhuAmKqMvtyK",
  "key34": "4yLcbfUrJDZfBe748xzAgnxswEy4gPHhP4Zeq6raxKPhuMBvRZxupKoTMGstq4dKTK9fwboFNPNLdAuALrNHGnfL",
  "key35": "3WQ1kbFLa7RNPEZv6W6L4z8QD7Ds2irenHynuxzbHUFRS49uXBX37E4iniH5nN3kQdRPggWBG9Cp9E9SEJhY4H6i",
  "key36": "5AchgddbLu2UU3JMhsXkngMmH7uMUyWfrZ3DD1rRz6Bc6jy1xgJwhC5gmUmRjMK1ypjnrnJFXbPjEkUSbrHKEFYv",
  "key37": "njyUwfHvaCNuiCucGCSzY4NhZwB3mMc23zDAUnkNVWVbP2B9dXUnQSLNArG5SRWUYRZxebYyTy6hgGyLhHmevAe",
  "key38": "67L19fQyeoH8iBJsjsCCPwwVFsnAfTnpfLFPYFvwxgGpJbsZ2W78tdAuar18k12U9pndDd7XY231yN7fJYLAkPQb",
  "key39": "3VD96W2o8a2CU1NzDfRSH9Wbi94e1DnV8rKxHBLGr6945HoSD8wjxSPdeM16btUzU3ZzwqoRQ6fX1M9pmFRVQ3nG",
  "key40": "5uaV6USeay1qQyTJ6miimRU6wU76Hr6sKxY6TfcGzvF9WJg86GzW4oWudieq17tXsUbxmt9bkoKWhg8t8A5FwTS6"
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
