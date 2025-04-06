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
    "5DHB8uPStu1LU28bLwhYYmzKtwHviRQU6Jrm4dxSF6SRKFNHGuv7sLurgVA5P8HtRucpkBSCMhvwAsCNcHk76EM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDn3ToXW1ypcXp3eJXoZk9ChDvsG1iyoPZ2BW85v5Rtxa2bgycqqq5imyU59hnsM4iQpai8jntxw7BsBeL4Fr12",
  "key1": "5Lyj8C7RujoapGnu33miAzLZN8kP4SEsYh3zfDrAPkDdoa2Z7JC2ZWsMbU6AcB3TxgnAw4L3NjBRi8Z7YN2KC6tU",
  "key2": "h8Y1gEGupDrVooEYFDiD3iusuNxzEttVxXoRHvG3AiJKxE9oQLb1VJdhbUZ5SmzhcMpjZeEJEkcF49crzFjeAao",
  "key3": "5FDafnzinXghkLUtLFBX2WndRtFbvR2PwLPSkAd114tnB5djhqJwx37R4RjNd7Lwjc9eSuRjHfyFCwWD64YBRyFj",
  "key4": "2XvmgWTghM7mPKh6LYgu4URx3khgGQSx9iiBY6wnrn5Dfqt1QdqLUmvZJf1CgwZWhiPd7CJtGCh7dsxuEA6kR2EY",
  "key5": "29Y6QCU9wrcZP9ApUWfHTRqQ94cdXRCFfS5PRcCbJPkvLvxYCr1yUMpCV4WXrR2UYd7iVfdxBiMXXQq5iAfsEQSb",
  "key6": "LipRQsgdtiHBnK5vf9m4wewc3aKi7xbkyUN75ptxH1ZG5GySWRkVeapp4xHqHY1QL4hNLr593ycvfcgNfLpxz8K",
  "key7": "3V8kgvxwndCYgA1GL5xnE5v9dcr2xLbNEhJ9epEzgo3iBwSsyMHTGcoo4TeAemNiYAVgnBZRtdvbNErkJMUrjX6M",
  "key8": "CdFd6PCxrqVWjBAJJQHwfiK8LLci2JwjceN6VRTxfJ6zwiH5T9roo8ZmKRord6HUEMnb9K3sqmbeJR2T7oU7p25",
  "key9": "4eQS6rEf9op1HBPgn4FMVo887mghSFWR1DNygKjFc4hGQQLAAZhjB9apnLGBLBiWnvnDHoA8zUQEhi3ksNTt4vsb",
  "key10": "3qnFx8iA8M2sKyW59jXgwHmQBiPcGYJLA2TSQ6gtevgFNXKypUxFu3W3hhCGEn71hY3udzyvPimYC8sJoX31rr5d",
  "key11": "4LSTruBPXMMbVBFJC2HEXYShFuH5a2DNBRnapyHKKzg6t15iizRG8fucuRmporAq7RQ9PUWXmAy5kVsWru46ejWo",
  "key12": "4XDj3u2dMK7gCLLavYj8pUYUMxLGDiRyVYxvU8B6ukdLzmLB1wEpuNyezx9oyHCeXVvmKCQNzo5U1schvQpf1ymp",
  "key13": "y5xVtifTkchgUjNmUCkrwpn6wCEKr7PgJveZXrKi2CVETs54WAmL4iPWpg5JQHhDygAN92DP5ZzF8Upuv1jWQio",
  "key14": "2GQg5bw3hxBRgoi4njL3V3GFGdGDsjd6T5g7NPKhxT1TmYF3hsg7Qj47kPkLiJ2JjM7LonQC9ZWitYtDUEEsbdvh",
  "key15": "5WbGonkgMzzdSyCwAMR1aC4qnGsAeCDBozncE85L19WgdQAf6H9fD3Z6voi3A8SgPjkCtR7kk6DP5AqSxKPw47zM",
  "key16": "3MNbgBfTQisW8497LyV2gNWr1mYsrZxcFtZiBDWywXnUddLLGoGAsuqW5Je2fonrfpvs47APqpAZoMcAxUCaaac4",
  "key17": "3D2dp65GkFQGVhwVXzHNWiE6HnyCDsgKWQ58QCHz1w3AmTgPw9tuN7hMBtqyMDWHvcDriw8PZYCB5Mb45wFCuKuP",
  "key18": "2zwk7dmRKonXD4iV5FiXrxK4J14Y3DNpxHxpfgvt4o5y48x5bwiwggn6vADcpihrzsnXJPUTWTC97zGADzxHgM5X",
  "key19": "59tRxL8zbVHQXhRJFT6b4DrQc95kfDqPYbuyLks5twVimWu92wzpxCtArn9yd8RXs4GJY3j3gJhfhDf36tyc9p3H",
  "key20": "P2T9Fb8GdPF7fWLWHviv6vX6misFVqDaZVqGMx2hAWicj2NwexpEpkN5f87PLNoYoDoJ2pndGxcTC7ogpHZidKy",
  "key21": "37h8jbFTxE2JLBVGmSRQYteZcaYX6yjafdVotVDXDPJeWuCSCHGLPkWrBE7cN3kJg5sNpMYDhV5L5cWRcoeuWG9y",
  "key22": "39q4dwFJnn5y9brzvQHDispPj13BNzc8Qg4CbcBdU2yyHdAW4S28CAQ1E9Rm3u5TJyXvxrcPRQ4hKgVPTzxAzPUq",
  "key23": "2zyosstWugwo7LqCvm7ueVgGqHritjSeXMyGaNJSFdDijJeMLjmMkHDgKEhFy4iCn4yJm7PKEFrdJXBnQapKvDZx",
  "key24": "5dcbTnDTPiwZGRx3GcMJDWNzTQAZY8JgPADRBCJ3aPp1Y2h9R5EtB8ymbEjX14TB6jpDiafvNyhNxZzi2NR97N7w",
  "key25": "3xa3R1xpYjDwSwbmxqhd2R1WzdVuuLk2xuWSBZA3eo7SxbZHeyj12Rz2SpNV8TGEkUmiUCAVN8yyP5i8NhrkpiiX",
  "key26": "3LAT3myKNXAu97NKXk7VaiAQr5n4412RgJNzhAubNUH4tEkR5YWwoZaqovLkjBSjmcF1UcNEpG5tmwGnBAgVxZW",
  "key27": "3kqzHRiopQgJodaYt9U4jFBK1QH7J65XysKXWUWFxadQff6fU6A2RL4q1B4ZQKwYmPp255NwyeBhRMHnW7tnXn2v",
  "key28": "4tXk2gpjWp42fhuMqnYunntefgoYquR6ssHBCBXyujH72NGcU3rzcEXHzajDZVYyXXCaySQQQqZH8q8bjYzjsWaM",
  "key29": "Jy4e2SP1PHvTQDvgtBrR8xJeQucuuQRcxeYunJo9sbdsiVuVfZRSBiA5Ekj7PvY5QUCP9U9uWgQ5Twc9qyyfaLM",
  "key30": "3SAinGxwA6Yzna4S8nRAZ8RcSvav9WWE5E84Mm5WgYsCHLfAaKTic6w3tJ14C9xqhZtunXLyNpTdVADrb7LXSBHs",
  "key31": "JUTZ2vnX8ACJbesfYFCor2gFbG6eaxzzMSyZMom5WbCSdiYM8so8rAnP99WfjfBxhNvE4qLdj1XVgKg8HJcBXso"
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
