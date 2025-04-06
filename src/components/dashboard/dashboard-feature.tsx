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
    "4mfT3pS7GZf2BYGpam7LirvgaQrqu5fYBP8mc5icKPQ8jsNZbzZfobt4CH73vMUNsp7pPdjyaMoJDbjinuBngNQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2Aev5Mi9MvcW8ioZYh3Zimpcc6gTqqGNCfcTrc2eUWP4i2MwqBgNZ4CAXZ6Z61KbUchgYp6VSQrH9hNB9G98Ko",
  "key1": "2jH59jJEB8ubJY2FYoz7yEPm2SqHkogd1bxtgeJ2K26vASTTYTyStCvLmfUx8R4yXmd5AuA37x281TsmRZXEoS9J",
  "key2": "4BBG91T5JY1hQBthrDrWWcUzNnWGvD4ZrtYyByENEfuUoUz7pKQLyVm9JG5F4yvyiDiCRumzWL2bVEn8PpMopjFD",
  "key3": "45yDbGTpFyzpkB6UR7PPdotzTNWWfwFgB6J5j4RAn3KgsfKhQD3CX2Qf77gT1XtK5bBHY2TegJeD4FU8oTK1xo2w",
  "key4": "2Aw3TBnDy3tZ6Vqtb8zycuT6PMgKX6h7HnUAGPPavELpm8vt3G6ZcGjxBpaydTAqeo5ufWXjs4XXfH423qwzwjn5",
  "key5": "mViKVoPiZJUFUuKmaHG2PppU3D7T2bRXXFSM4EWQGTr8WWrWrhwgvpot17KVBbjAS75DKY3YJDeZd6g15RNjJFi",
  "key6": "2kEsjDVVayh4jjWFZqtokwoZyFaM7RCY3cSyXRqYNadSfjixwhnFadZ7ZSLaSYCktPRWveqbNWape5oVjnmMGLhQ",
  "key7": "7JvMn4syX8SPFjYj9R5rxYbv1eEiMrgd7FQqWJdgewwBuLR5C1R4gDjoBTeqmufXQUNqPvDkvpe7jEjZB5eohqQ",
  "key8": "3Hr9LjgdC1RgxfHFAe8WdLk6eS1W216BgK4DRrczp6ACtMRyZD5fuqfXsQZ173YPsTKvchnajRTVBjPPzgMv2Hfe",
  "key9": "r6CrsTrg23KPeHtBXsVjLKnmwFYPXqWvQqBC7NyRDoPwDG6BDQ6tSn7uNG6bcxf4KJFrNucdzz1jjeo6o2c6evU",
  "key10": "3e92GM8A65aL7JCUxpJy3sZss6tZq1bvNMSAZ9qyLN7MRNughiG2doxyMQYbNU4THLpv55gAdYo5XYRKCaXqNop4",
  "key11": "64nk5sQ3soecW194FVPnmM8XsZsq7RcRHEWiVRs5v86bsnuNDzW9pBopZbgo8UbgpmPdPNs5Nfh4hdwgFqrnx895",
  "key12": "aVhmfNqTSdRDWqheopC31dBUPfUsiAVTBSFyAaAkcNQJe1fDx8WdB75gbRvTd6FYv4Q4h43KvqJKuGTMMU7Suys",
  "key13": "3GznSeq1b83cA2k4oFiiRAG6QcJKqLuPZKTJdxJYdquVG2Vpk2qcHD56ohRV2XaCUJivv1jWWZ1cNJEKGjzmGVfw",
  "key14": "2QpBaMXZcfzkjKhuc9s6LP9sTxRtmVS6uibaqyqssxpCnjf9GFgsAL7fDARgU5TzjigsrS4GCfTsHDWgR1jansAn",
  "key15": "5EHxRVaAwndp1C9T2kpcrgadzXd7eMSSRVbPpLjMfMLNmYzPzeYQXtuohtA7fJPCftnJ6gXeRXdquEqFTyMGYCFm",
  "key16": "31kvpjXxnVEAEqn32mYfomX5LxkQB75gAbfEUDYtexjr43ZKTzY4t2sVn9RknomZ9tprXVPfrmXdb1vTiYoe1dQ5",
  "key17": "2ErdyPD84sYLUAR9NBxxPT5Vcbt5DGnHyxV7XvyM4fwfTCyXngvbhKdAc3c3G1cf51pdqfoMiCoac7E8Uv5pruz1",
  "key18": "3g6eyNUmd9XRzNcvuQo5Dtn2KPnevp5XUHLkRzxRTYNhy77whUXxnvdoSPKCQUEDxxik4wBVLyVtWC1xYHtcdH5B",
  "key19": "4wGhDir46kdXQEVrvqhFnsdLLt43P462w28ZboEXGnHYJWE4pRNJMMYtbSNaoqWPQNcE28P4guNRE79mf5owRRPu",
  "key20": "2USywgCtPuCzuQyt7ZfEnvQP8HqSr6GTL33jtN6NUsw3TF8iVqZ6jcqhbCbRtBEyGgvrjJGmPvBC5eNnMqdRRTGA",
  "key21": "2dNpemQppAo3d9wGoEFb8PdFKXFZiW7bSR9WZnLy3re9RyjpZtLvhZhRWF579E3ScVGPTSAF9jDScCZzbs5AJhZb",
  "key22": "2J8jECA83CyyyJb7Df3bpbP9fwaj2qVymkw2rj5bPmQMb5DmWgEEYUidFR1Rk4P7UpMEaMNjw3Cch5MpSrTnE4qb",
  "key23": "4y8JmK4oWLTZDUgzh3isrLNe5HCJ4H4hKpKD5yJ1zxmRBJDGQjqNnUsNf39ypKrqmvnu7wo8fdJ5JnG4BNf5gW1M",
  "key24": "1J4BZDqNRbUZMyuXsfGT7CVSbqmMWVYsYwRf8k9uMHjeYrmBKsv4T5D59CHAWoVWt2RHb3Sw2hsfbD1oosBjRpX",
  "key25": "5RHbyf7u7eihDXSqTzK5FSunQKzKCBMeecD2XRYpdBpw8HqLb5MJ8RgDtff3oDBXVHwdqg11S23yEMpZxuz5582A",
  "key26": "5XLF15tZ99xcSthJCjAVFaAJ2WprYyMyfYTJM7MezzweY8crhXx2URaQD4D4DsS7CWX7gJJb4LwdeYpGbCSApT8J",
  "key27": "o8MnbddUJQWNsFBbe9N7yxR3JRHSHtWSdmtGvKuAZoB2sxyVMhj1XfuHhEmuDsouBAihaLcLDDYtHY8jCsL9JAd",
  "key28": "5GiZ6w5Rwdc3wzJ4AjZoQDUgqXGEaXzFoh5vBdWvr7cC9hs5SAnXayJsUzEGshsmFydAJxb4EAUQgcrKJiyoJrDm",
  "key29": "67igehkeaHZoWDZCWshP8khGEge7se6N9anoGtA3UECyXgZtQuxGaEtyJZcusDFJWqtAt3tdgem4mKYqQ5hX6PJQ",
  "key30": "Hq9aeUUvYZBrEaK7f34hiaFCCuhjYgLzYnsZAv4zV7AkfuRcoTqQotewyzsj86afnJomcxPFmdfMisJgWa8kn7n",
  "key31": "33fFSHjAPhaFLgUFEhvwQJhsga81M7V9N58QVovUj3Lc7d7rybecZzbcgfs51uX6HfbUhHKnqv6dQiXdU6NstZhD",
  "key32": "2QBWWgcJmDZCwPWKvD9bGAggsVeAFo6VtWqC72hitX87m3SeRcDerJeRsUASYYBvckS3sjAsJ4ZyPcx7p9QLmhMv"
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
