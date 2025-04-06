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
    "3S1taKC1KFd1vpFrpxNFvbHfKkGW8icxLpcT2Xsy8HSEHC3duWjrn7TjQHGHth79ziGWeg6p3FUYxsewEVvS7Z54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21U6xPKU9fMaH5wTEFGa8XaV5YVqmi1ptT65cL6Czrm8uvs16YV62BytG5zdVSpAp77f7XTCmuVhrjhQyymNWzbB",
  "key1": "ZSRrcc7S7FfxToNAzmiDCU9QMDgKRvjLx8DomTo76qmPX6JDEnwV4pHBZtZD9J9wmvi7mYZEH4yAADgQVdEjMUK",
  "key2": "x8fKdfrhasTczyosMnCc4PEVNh1FfaZjEmJ8jaNVsM3qsz8jdpiKyLHuwh6J33y2rnxuDwxe1utAMNAWbwtcioX",
  "key3": "4HLNZADzFDhAHBsEdq2xxAeFLhuT7T2MvckUXJA4B3Wq4M2XoRx8zhhRtjc6kkAGVB3m51MRpNajgzuipFmoZmgf",
  "key4": "5B64vQn8qZRzfzaKre8cg4unr9yHZUibEuUPqa93DmySFKg3Z7CfRhB6TNj5jSs7tMHW4aWqepFB1cHohPm4WgX6",
  "key5": "2A7n8A5Jj1CiQd6trK9LPZyogpwxRCMJSgY4KKwKSDdA51TE49bHdMfbqwwfiUVk4JkM2XT4RWGJAe5yPLBMRN73",
  "key6": "46N5FwP6j5uk3sTsDUaXfFoDL7xq2Qq2sGjR1ZYDuU1aFMcLeUVDv6ib9y7rkxWhdwR4Fsyxjavmqw7H7BehSQBx",
  "key7": "5SbVG18KrcAFQHahAf55EBTJuPTAFCjf4SFE45JgYhaiXH2nAXMjwsgdARgNQrNrgMP3UiadZWfgy18C32ZVubEG",
  "key8": "2HKNAaybKWec5J1ufH6ZCzSzCtP5KuFQTJsv5yKcnmpNv5PzoPUuDzujmQQto5S5CzYwdoZxNLV5ZjytxWFRKWfg",
  "key9": "5L8WoDNxwmCmbCcE71aZHAu4LP75wbsZi4sM5q2QyrjjPtRUNM869QQ3q3imeZFSELyF5PsBX77QUL1kpSrx7kTC",
  "key10": "cgCsN75g3NJfH6iPYpAvPsHVNciMNr7Ywa8KHtFe1sYWkqLAowtEC2LqMfkLaC5rwMhhkzdBehQzLVg7DuyvoGL",
  "key11": "EoteAdwZTAS63f4HyBUYGqjNy9c5G64GZasWTNykeTg6c5qWmgHanL1aExTZ9dkv1GeKhBMbCXr8RP9ah4kVmni",
  "key12": "4R5RiRNW1uRF34vCdUkGNfc1tLwchi4CrKs8XTw41Jg4YTTm4Fur4Lb77qCB5e5xXT3jDgdiSthQPy9yEoGmzk9X",
  "key13": "333nuvBXc7Z33NEupfSL8dF5PjzKUyQkpf4GQT4Rr4XpinYT4F9fP1xYLF9nSHpJCPPTDhm5CD3EjiZ1KgeZsHGu",
  "key14": "3rAjT6Ud67oPQKjEJv8F9jsogzEMX6idktreiFyANHUkyV3FkCsmzC2wzrLcHfyHDdGMiDNvpZfGFZXDH6M4qEab",
  "key15": "4DqBxetZdJqx7RpeE1Mnaej41QzNPKjknEvo41TxUawNmWi4jXrqYcKTZCg5JyZpgjgxXDtU1acw9CJoTXpsJGMM",
  "key16": "cHdd9LU5XCKdE1U322j7NieZtUW3odADfwHHDRqGBCBmY2tLSp1822xMFw4LcQYSdcb1UyQgxWwyTtVFyUkFiDM",
  "key17": "5vngcPRSkZnr5bPTGoLgcLBjTTYt8CzCSrvPpqnimtRKhZmBQLEgctN9bamM8pVQfNDo73hPDVZWqzoMmsnFuvxt",
  "key18": "67b1pNzCrUKB9yauFzQGrLAkwvwpXmdxx4N33SisGTjG8FFE6dgb6y3ujp1rG5CtvMtwuZmVRy9xughWD96L7ZTn",
  "key19": "3dthnQ5Uy62kcB9AiFMainKE2fBiFmp7ZEe21zM4ZUvBtJwfucNFw22hecbkTSp4ceLNytuyvTzETu3HvWG8EvzN",
  "key20": "3kWcAVFAv2wKZwewJWVoc9eLyQGYgms36DboEyYkrpPEA7fYFQWdiFtyeaPCtkex6qEDijADB3WVXV9kHvxEbkXK",
  "key21": "6W4H1CKF2goPN58BrvmiP9duxAGZgYw6VdE6rmZzMDsC58q4YGh4SNLSPYEqCZqHP4MGy9jzssVV1joiikYVraT",
  "key22": "4TbUwr8qRhRMCjMknJfVMMQpP7GtzzU6K51FCFpCL1XquRCNwU8hR64dixMAaVhWMxTH6QiNAUz1WVkML2doKsxq",
  "key23": "5yKxKqwFPVQaW8rZZ6jcuZcA1hKYiGsogh3qFaB2y4WsifAKGjcor8wv1BiK35RYNB4sUpB5KikNbpASbRy9UL6q",
  "key24": "5Hkw7TxhgWidLGmincyzhwpMDSYDAGgEGn7RLMt2RB2R558Jk9TZ96nKYXa7ziLem7fWMWUQDgHJ8LRrt6JYT6Rp",
  "key25": "synXg5BsPkrGPnB1SGMswbXN3bR7STnUEWCgw6WuYYaxKpLVwHwwmYXxEUcDM8wrNV6JA5NWsBb5CBjHqXc8NzB",
  "key26": "4DMwcEfH83m96hB7QH5rjdMTUBXSmFr47eUx1vGNmgwKiHfmMjNUoTCA6tpiJj9nmADnnKXW1KGq4wQaLA83B7UJ",
  "key27": "4UN2Y9ocPbp6WBnSgDTbgsWWF9KuJ9rXERBMududV6GxDU7h7TspAYrTgL4mnYY9CUZEAWK7XLeU9KWZvAngr2ft",
  "key28": "3oiuHM8ks8USkjT9qyndnBbUJBTVSKzL4K3iW2z8BRvLDUM1WHQ8FgHduAnT8ca4aduT25cB1xtGSRTt94CEpUwM",
  "key29": "5rcK8Q6jQFF4ApRcGQqqCWe3RdnB1udv7cJuGA357VXpqeULtqZ7a7B4BQ4rrGYCZVDt11dfdnDVk57VFPXXgThU",
  "key30": "WMyLBkoJkPTZjaZ9MinKX51L89s5zWVMDzEbSy2APy6u9Ms6cfH9qN3ZjWUy9P85u6Gkz2Ms6JbVoSS9JznFuEb"
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
