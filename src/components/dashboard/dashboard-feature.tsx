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
    "3uw8hK5xwxRWMc4mvtXnHHCccSmYKDWjo6qWYDfZmK96UcidHP8etopqawgPY9idjEKhxa57oZYoXev9EMQDsGEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWDL3QCu3P53bsM9Bg3kzek2kAU4cX2veQTfA3bx1y3ASLBGAcZ71U1LGxrZ4Akx21o7ubnnJ2cyPMyJT9z2Saw",
  "key1": "49fwm9U9LnZoMCd8Us52zST7k7Mq2vmPaxfXmotHXoe1Z3KwJxz1XcK3kuNUTY8XMrLYgps1nU5nEMqk9yH2TGBo",
  "key2": "3dG7TL6mLf6yEmCWQMFAPiBSvDE9eeRoJshDzEQDiuRytCDQkMs3tXJ7ixWZTRMqNtmGoLGmEDtp5SxWMmDNNwLf",
  "key3": "4Kn8omxTBPh9X5jqZS3mxtDwnf3zwGWyqmy2fRdTxitmawAfwsqtpBnyQfmYaYoD5NAycYujJrWk1mYrsSd2Jcmu",
  "key4": "3L3xEjrbWYeZCfpLt9tdCjH6yTHHE2EKvXva4uVHYLiQT4JsFaY1Nf7Mufzhm9VUyWoh5FkbqtFKzejSowgB5BqU",
  "key5": "5VeXKvXox2peLkszTjaQto8inXWHq1PLqE8dcz2QvJye2AzsNE3aZDMJtArx7giLHTJGStyvEEAeFwkgkrRdhqV4",
  "key6": "3zYeYxp1dgLPbxKv8MkvX21BFTzmHnmBD6baQfzJTiSSw7zFcYqLrPgcdBSSd22vkLvu3aFGV48GsNKR3u4pQGJ5",
  "key7": "5ysZ7buJnaTmeGNk2DqfEwb8YQLBvfcGGYBeshBe9N91QPt4hsgM7r4SotaH7Ys3WdkVukvqCdvpHGFfSwVs9dTq",
  "key8": "5Vy16w1YvZQRJyK6411YBn6fN2uZhLMLG5neG7P1mpZ1wumdD6YaBuWbVU8E94zzA8ACHghGPH6gMANB2gt4yrqf",
  "key9": "3PE1BkjTJGDZgn5qZHvwPHUjzb4SPkzaFcq9eVn7NKZJSNpd3K3ftr8sZojJUgTuiFEqF7wQd9fFDXYQYGYzgGqj",
  "key10": "uHS2cboUegsDJsxpMXwyGQLBw3oBjmtkgQWGdSU3KzDTrBhDqo7guteh7SPxqUzG9REHVBydhocNzZVPSFwqXWF",
  "key11": "CUtVNW3TRVqMpo9b57M26PoTZ7pMPbPThvJhfPHLGZCNYUVmdvG5pbTxa9MZRwn7sQAeWxkqsSLxcxuWBffmeT3",
  "key12": "BnKrdKouRYVTNAbZGhDsBYySWbGPs2gNA1kcqy8iVExcARBk2iNUY7ftURtT7ucvaxbsGm8vpiCdfWyEYdVL66k",
  "key13": "4rPYQHBxBKwXEwxg9VG6ka26zH879qWYoi5mFRSg5UPHJGcV3ec1DGewPUSdGWrJGV4bGuJQD2rUQEZmdZnHT7eb",
  "key14": "6XXHEmrT2PzuTJA3rXtLzCKXX9myHRApCV4LRqEZjQwkxQdZpdY1kXfP5S49NEr8W9qC9NJisqXMQNhjg99cv8n",
  "key15": "3oPitM6AvqxNBu3aDEbmUqWm1ovcVRcoRrdg41wbsCNpJ6zuNtmbDWp4jwKnG3buJeYkz3Pn9zKXKTE45SLQQWw8",
  "key16": "3k7kBzbdgbAT1JhSLnVxzRx4nZwHd51c8j7YCmz8GeHas2cwn7Sud8dPYRJ9fnzuj7CXFdHSyHq7Xu3DUU4xpeVr",
  "key17": "3z5zmYWT2YPCbSSRymhd4C2Ukaz9vW2UwP3pfj3s3jbBCdWyPbE2Gbg7Y9S4gEEqMXXeHydCA8cYuBhCTz51Gf8U",
  "key18": "4vpK2ddoxxKtaeavWpou1AwBxbuxyqMsnZQGLwwE5KYAdN4oKAURPeD91dQ37TLF7QiitRLFGEG2nfNWzyieWFfZ",
  "key19": "vmLJzpiCncmyPbdyf3nx7YrWpzXA4w78aGKJUiXiRtHPrisgoAJhd1zqX2qcEHwQvgVjmPvYTuiXCbZcSQMdNKu",
  "key20": "5UBwdnni5ueNT1d4FtsiMUDncbRHtyVMeFNWrcnQbiyXGc6UcKBh5FtqWSwo7qovrsjJnDrcBrnjtdSsJFsrUbuU",
  "key21": "5bw8SEbT7fYwfNkDyAqvNUUK873H4Wt7RC1JVLCeRWLnxDjMYhq49pEndevweVr3G1Gkid8nREeE41mXod4rzWyX",
  "key22": "3edUQhtotD7wRxzVf6HRnYvY4cQ8GPAHhyMaE7CTmfXac3oJi5Qo8LwSdz16CrLKGo8NVzVuRq3FZMPRdT3x9ayE",
  "key23": "3E2heNRFe9JrePMxMmpqTECe45Tqpzhf6Lsdk63nwkGoiEPEce2J49q6SLi4ZYqfJ43bEttUorf8W3ViRwFDbnyx",
  "key24": "4YbB1yMWw4FZPgX5m4EFHMg8d1o3aAmph4V1VFPjXqpjYfP4zaMmSveocxnSdaWTs8snVRPwPjzXE5gNB9aprLN9",
  "key25": "5ktejnkBvSJA35GF2fZtGX8jLy749DMec6QhEp7dhD4biPtE8TbK8FusbHt8jkMLBhdy35Wm2sTCf5NvTvdhZTrA",
  "key26": "3Gmd9CRi6tigVJFbx5SRFGmSexrzCxK7rTLiDoQgQAGNsiVkuNZPnkEHHUD4VQnL2jxfRyNtWTPj4vH2zNmeoXJo",
  "key27": "Yp5dDzpq7GhtMkaqwf8yx7Y2yHA8ugLzbiErwDgrANVPsZBHfhfg6A7Hs7cJBAemq24okB328D51n1TUjx18wBa",
  "key28": "zGn43ugoqQDAyL6akLX3LSo4uH7K2YJnmntfKXGqWNE9EX4xjVEhKBiUkbxhF5oCDJajBVqKrnTC5dbGpRSXotQ",
  "key29": "3TKyPLGaUm9NoYDN6ikXFr3Q5wWcV5Tbqondqkbu49etD51DATNrkcMxCqPBorc3hxi5mGgUHLZEF2JbxH62HSCE",
  "key30": "2ghQndhq9UcNLUh9PYh6Br1vAFHEcFbDV3XTvvKFy3C3zJYZHpz2JUugmhoqrsTV197nGaPMHfjDquqQ8ZEZMXwH",
  "key31": "59i5iv2sdGLvme4EBz52QQ2L3jSaoVidMsa7mujhgtPEuvS3EkwF17KyxhWHWJNBx9oyy4oBBcRD2J5W65ddfnrS",
  "key32": "25DYQXeAvdXJitPpxUPR1pHRVZVdjMZcAKqxZDaDKEdeoMQTf8ukuap6iaucxcMv14Gb2N9xXmaUG9CKpmzR5UgM",
  "key33": "5xzku2PpgAm7YJUQgVYdUc38RevKq7mcexFfZZLtudYjv9rn8Gah3weoEcyDUUkaNsrN67EJJvavfuuiAYF7VcA7",
  "key34": "3RaXnLNjV4a9hhf6oUhVDBVWTMpyE26yr8DCkU9MiSPLWdjumRxrTGK9vqFGv9aV65DPo5DyErcjbzREbST1qH3q",
  "key35": "RNKYHTLMLbAYinuSctcpK5yLo5nAC7b1o6DQD1tW5efcN2pL9qpQ5vKpn4xkvFztExjd2bcXNNhUKwqAm3c4Yqn",
  "key36": "dZh676qFwZDpDxfFvqrz6pmyTNhVy2xzcWruLDWQhPYxEqzeDutANFEZv6Hx7aKFPE2VvGpqNNqLPf1ncEo9zck"
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
