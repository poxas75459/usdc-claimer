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
    "4dMmH3yuhtmfRfmq4YNVAX9dbR7nX5gp7CNF5vFXect951FgqQQguKQgzF9TZjtpj8yqSfycEQCLrgmYhiqBBxv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CasA5xbghUZxysWzATDiiUpphtMcae8gzZej4kGLhw88GgyiCY7KWknCxaVPjFAfoyysyMfhVHdPsLGq9ng7s7P",
  "key1": "TbLFTusL2Lh9J35kNUtHeZ8GVESzWc11VvqYbZUoGFEkKWVpxyuFxgdWWBcVQUk2R9aXd8ADVXF1vSrYdPDRJZx",
  "key2": "4xVK9E1Z2qeKaQhP6JDwkS4FJtv8Udpd1PxjtPwoBS42xtDyU5YziYwukbkCwyngCWMDDYRVx4W6jGEumnUN7qYv",
  "key3": "42XVGyZceiCG5ruLF1M1sJb4e14xbrveCuNZ7Gq7ubMJtje3iv6yWQTC7aqqCHDWoCDBPwSDDEUHbM79mxDfwMVU",
  "key4": "5KqwBN2aSFX6J6Y1zjK3ZxouDuixYPt5sjrQei5k24zKwXA8fTnQynmdB4RLCnBnZ1ZKESJPhpPQti1dr84SFjEC",
  "key5": "4PwZ8JC4v3tYQSpSEscxYZy73GVJCKVoYE2xsYxzBothdM6bX4RQxSssUFAsqHaweu66kCTKhTKhjhpfCSCAjz8p",
  "key6": "2n9JNLARrdDcu6pg64q4nga8FEcs9MhfTNMtyJtb7BfyStp2q5ajqMkZN1fyaMMQdtU5TaajSmR4J8EVdFzHdA57",
  "key7": "5gBjYG2tvKBeTZA1eDRXBj7AzijCCpQmeCgtnyqC1FiPhuX89Fm4fsSqV5sGF1G2wnDgz7HVYUo1x6hQEKpdrMyX",
  "key8": "fjt5kSCWKdsELxYAuCiGibmwCPbjbLhTd4pRkZhLaY7seWqFffxzpMy737yR6gWKHz3e9tFuyoZMk9UQfq2xiRk",
  "key9": "41wKurXeSnabsoQABpDeB2D7isyR4iqisKsTq8oRDREphVNW7AGLn2F8Cf2ocP6iQKGQDvZGPiqWDGN4Jsjcyet7",
  "key10": "GMhMiRMjBF1MD1qjumauYiG6kVYiKvx2Z95wwHRnSXnD2Tpmobrj3Mp1nBdNAmA4bz56Rc9LCdE8b3cLuazbZ22",
  "key11": "2GRU7pUvWxiSAupaf68ThbgfesWaGgCjHvmTA5dU3WtPG1zp2GmnQXTAtMvSoWuNYxHoHgf6uP2p7rqPDj9XwY8i",
  "key12": "5pwcrk7RNs1cG94rdoWhwVzFyX7jmxkCV129h38qyLrPPSEmiUrUtJYHdBYQjGjhCU1U4Q8zx1nbtcSBRpy2it6N",
  "key13": "2ZLoZ8vPj64QE6FiB3CydrLjMrgyArHJt4NwKJYFMsaNVWLKrnLX1Tfa7DaCYR4svztLYmcS3P5MYJ873Bqtby6T",
  "key14": "36PFPEFdoxufjpcYjaeWxCsVMKWYWcPidgyY6FCfa53vTwmxZ7FUwzVihisCuMJ5DDB74bSJLPbk7orgcThhmb7r",
  "key15": "GmQpxVEYBBGs7cMQFsfrzjkvHLfb3YwRDRD58P9vX4m6GkB4Gm7RHpCrjpP95pPjnssdjEJbtSb9r5h9T2Ag1J3",
  "key16": "2F2HK3zi3pRhbqy5Y8gbtSBPLS9bBipCh6z6769hvXrzPBwCH7PPEHK7XWkz2jqNZgZDo19xztu1hS6udGL9KYJT",
  "key17": "54fQfehG2qCs4QoSZh9bBRx6PCVXZ98wmsEVDmBPiRa9jvVCfcfzftwhRTwdZTAZHLKpZQJSZSHS7JShk7gp7xFV",
  "key18": "3ZhTDfbyVGqZo1qjQhHuMigo91FwCAfhXV76uRZkshhy4kfQGQ5zqUaHLMXvEQYw9za2C7RUriYNHoGKZvJHDJZG",
  "key19": "21HSEUXvbWz5aZvyBS6KLPNqSwK8DvUMCRZbfg7eQwuVL57AwujNr3rkTBM4QKLiBxqvzXvs5Q8FZMDktTFi4YTP",
  "key20": "3r94EWDKWVnMjYm8BXCaYdTp5DGvMtfgw8GcFSeiecZaWwyZB8g1DVbNUKjtJfEvp1Hg7ygspmG7wqNr4VnEjF68",
  "key21": "3x9XV5K6QbZMCxpZwuB8MxZE3tZNbS24BDDALNBvsVyY9WeeWkHU81vbN9ZCL3aMvhn8uuS4Zp73w666xWitq24Y",
  "key22": "2jFzC14UwSadx657qKjPcehcCAbwWyA1oXaKxSUL3TmNTeVPWqfF4g16WscrS829icKk2aik7WitgPV8RK1KFfC",
  "key23": "446MjZX5RKJP9k3SqKNz9S4HCvNQf3vabxThvpgcPu6vhRA13rRuwyPtNoSVTegyR6ehLRTNKNaJQjAKFYnrMRvk",
  "key24": "58kq33Gyh3KCAjKJJq4vB2G5cN53Fsn5mvV6ZvaZmaeZne9YRPEkgT4M7S3VbhumDEhJdM9jDdvxTtHfWQaFtsis",
  "key25": "33VFSQThqu7npZ22ikEG6dGPBzUk1ai6BK9Aaki2A4UYBpnD9M96vGc2rCv32bzm7YhJFUWeWSbtHBwBm4Q2hGsS",
  "key26": "oNahPvgnVgpcB3Mt4PbtBGzg9em4gpFkkACDmos8ocyoZXNyU27V9nQXTFMj8DRzoLzdjSEEhafHBmgPhzinXF5",
  "key27": "2vw96fVzD2RoaY7BKxbQzphUjiPC9e1dfUDP3BWkdjXuft811hmsKWovzyV5FKwg7AuWAkcTBBnCkuzBKLrA3i6j",
  "key28": "KAryCVGYsB57csbVukGrcZAMGagseNHZhqRsYJfSxjV2icgcSJcRJhYhhzEJEu5Kx51p5jwfx3d4kxQ24oZPfor",
  "key29": "S2h4f83c1rsdVayPBfnc983UoyBtZ3z5GW8VUqtpbph6vxpySwtfuW8UZV5JeTYMm6jR9HGXsnypHroYTdNeyga",
  "key30": "5MWzxqYqNocj3cQHaUL6R73dzSk5jDn7C28PW23TwPfpQtr2dSSKR4wwYBGwt52ymUvH8JbGp36cghLJyVjE4VoA",
  "key31": "4C5BhJHs4uPJzanFuTMSGr42hPJEbbL28tqrZhAqnJjKKk4KA4rxejv478niHoFiCuJRfcoxNSvcxV6KYSYSrnmx",
  "key32": "3K7kaAPKMPdVNcH8iPjgs2KPuXejyFNQG7w4dtiwEHCUpUdTqjUrDMVaXonwVgvTmNWUEjB9QL2Kc4T4vi1LV48V",
  "key33": "3Jado98QZXREzZDL1Jsv86LmBHrepyBED584XpcpFWMd4SSw8dNnd7hMLAdZmivDZuJGhsFo6Pze3F53v2KtKfZh",
  "key34": "3Ru67sZdVMyunC649JoZTc3XGBrSY1F6R4iqtEPyiLYWMLmSjDcYbZaJfmBPwe8BGjiLFt7h8KtUs3CPaqj1MGvY"
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
