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
    "5B4WFbwhkw9x5zkPvoJqp2tVfUKVAHfMAbss194pdbSG2AAQ2EyyYkrdQWngsr9QdXM5o8Jf52fXVuo7DCCmC6Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h743ASgNWet1eSF5CyM6PeRAPK1fSdmrUTzjWHzzcVNznoKNtaeuJGzWz1sqCSFKX99nayxWfXXavpEN54GXLqM",
  "key1": "3pei5UjDmk4Hq5XCxLjPawvRQgY4WK4WDpNvKR18kR675cZLgPNCKKDbz3LPhArMBPbUrbWx4QWJHomxzcHqW2hu",
  "key2": "57Qkcw8SPsWufLshuCbQk9ExoqxfVNUoV6En4RAc4RcLEvGyCREnYfXT8nrogHzc3XJdLCzYskZHGBBYMo9dN31E",
  "key3": "34yiv99kX4zmPB5Vcrri5VH2rpUv8d6uZM9V9Jksunh6XgD5WZJmQ3o475KCvAYF6tTdoqbsqaZXka5JvataYcDY",
  "key4": "2BGRMZy7e2wy3TbvTR1zx9yA1eqg9j66bvmZypsrzuuXm67KFX1x8pVyqaiUwNohJb8vTYFmcYAFbvygB7B4htDL",
  "key5": "44EfjQU7TEuLoi7eDZqLNTzFUSFyU5jtesE1Pk2iyboQ9DPZB3oucuz6EoM5HzCYT8yieNhtPJ3ZsxrqSVQ2WCN5",
  "key6": "3AGZrfzWVZTtzps9W3qs7Q3fYL9nS8hQy9PARGtJekn6ZjPXhczMxZ8HhRKeb9S3u9XdZQC4bd6Eb3GsdYciENLg",
  "key7": "4g9izMNpwp9zEGaDwixAPN9KAZdFXexR36bao2Xrm9bkVViRWbEwXqRyPKjZeqTASXfSX6QPpKsgETTN9mx2TMyw",
  "key8": "my3ZxggtwWoJc6vxbUFdwc8NPAKTAZ75YW9gZEz4g6Hy9jykQ2s38CSNCKY67CiN4ebKGGcHgbZyGMUUQE1teLB",
  "key9": "5ZphQTdai4rDDGqRpNRUvRnZcg3RdSUydunLfTK2KivjDKytP83N1iYpanLixkJt7iA2F2Kn3Z85JkPzAx8rmiXh",
  "key10": "4qhcf1oBKL1THu299vznBK8PCboSTKSfdqBhySmHJd3xqD8neXrxLEFietW46jt75KmuBqw6zApNHDR7Wy24BiUU",
  "key11": "3DvTLuiFE7YtVQAq8bNUTv4DUP6jmCbFjjG46eGLooc6yXqyS71cB1xejjXaGufNW6VSem7LBxJqLQ8cNwpU5QkM",
  "key12": "ySpbsy4D1AQRYb6d1JvYUJymjhsuDc9EUnZvyduEJXBwcW2FZwoBymQduZNK287ckWbbgPRnPV9WedThmHLyzsp",
  "key13": "5RwVTgSRmrQSLv4ZfsV9QjZwYVBnUemguGGef2yUqHQPVKA991nDcVVSS9mBzZVm9U682454gNBGRUPL7V8YBYTF",
  "key14": "wcNp2228ckyoYeQEh2Eq17dXtgdQGrccQAK8h4P1hvTUD7XhsiQeTKioNK3acMEnZkzVWq85C5xvVNqF3Qg11Kz",
  "key15": "AAsBBAT3WW3cyw1jxYn3fiHLciMcbPRMSrWc9PxjtnhcbT8oXVGYCxENkDr46LwZsK54RpMEXFQToajnZce6Sr8",
  "key16": "2Wsgo2eNzWdE3rX59meooKg54biDKGozdQyedyscz5cSJ2f4r87TgBXB3eoyGjghEWuAAxeoRM4C69id7sdTJdvc",
  "key17": "3PUB5qMFos6TUME8M6oktcZqyP66HbZqDFdJqMSdgKAkWqUm9Gy7ob8NH9MZxDC28VAwJsQxbdcuUWKbHkXuvjbQ",
  "key18": "3upJ5B6Tz5HNfP2sT4Jez5EiBbch8d6Y14skVp8RMovs71r5gydJtaKR1dpC94uzzbVu94V95QToqXKYG8xLEw9h",
  "key19": "36gze1PiGCfd5tF26hpuHC1D8hcCRkjGxswszRwF6RrkVvjGKLfYJxaEdLr6P7bLx6e2dghnnVgeCsE5gUKEZauF",
  "key20": "5N5p8Xt5FUq67quRL3x9AGEeBVq7z9DjJquZadTbxk9kU1P7YvgsATfUTA6zkAYicRCBiEVrYamHjsAtJn2VUaYT",
  "key21": "2pywsHEPpMknunMg7SgyuQdoo2QHSsQ8PRw1BYr49hHxXq96tW2gU2JHskqfd6WzHLNjkbjX65uzHvrYegNZkZ5e",
  "key22": "4b6stTahFLyLaEzAupUHYFfVJDMJjCo3JPvsRteU759D1gtbMwtKAKQxFmiC3cfg4ywaoSwMs6bPrK1TQvdB3JZ1",
  "key23": "2YJFdExs9HkJ9zA2VVC1kGYnYbMwYxpXMA8JBwrUzEANsunxAo2sQw1yeav6QFKDqZVDgLzMtBDepjsFg8i3sXes",
  "key24": "4vEg4r8LHm15A3FaThkqrzb8VBSr5hpjwxJiS41pH6UhufZzC7Tt3uo8XqUX1zSZVV3hg7omdVA3MmFSVvJbXe5t",
  "key25": "5aTSb3hhtsXgo6C8NEBAkFVYvmw7NHcSnUpq6fSo4D6gBou9Zq4uCduc38hLmHdh5Pb7vPmSYocQ5hnZt3qbEpDk",
  "key26": "SqvFWCqRGpXpcSQTEJRjzr46C2qZMYHK5BcdY3gM372b1ZYSyHTvBWSnf4Jk2uTzpS9cSqCHzRRZ4bazzHtd7M7",
  "key27": "4ddzvK7tsmazQet6mjt4kvDM58s6R6dr56gnwPry687dzfMmj9tKumNeENmTz4BD6fPinqPXF9JMh3Wrusu73EDd",
  "key28": "4CFXk7SgYj2iTwpVBvcFnxp2k7EzF4Z3DpgKJPG1WCYcnDtNt5pRnkUW3xfE42jSnU4WRQgPaKpSAd8RrQ1GGZ6u",
  "key29": "3CzdiVEUxvZGko9byyKPr1AxTkJg2SsryGeHFfSNNEeu5SPaxssRVQsfLopNXv6iwQFkHH3vLWpa3NmqiBp5aXEv",
  "key30": "3Z4RMDmmLDmdMPsTNAp1dNKSJ22h1Q9mHMS1aBPFPK1AZPWvhKKAysH443WM4Nqr5Yetkb9C2AtZ5bWAm5L8A6eC",
  "key31": "42Bwz1SoSHG6mTYnKxeHyRc36DX3HZFEFZ2mH2hrdpZ9H8uX3EMjc7dMJvNgDbYPDEFshjbYus777TPbrXa6K58W",
  "key32": "4AVkv94qgYwGbnf4tFHnWvxxYgtwVq7w9ndE7hzSU5pFgfpzQ2QoKZnNYvJhbHxNijdbBPGQYSvt5hPqYfzieehi",
  "key33": "3BT5v9TWJaUPuF56oTWmG5FhyQDMEGyS2tiQhhxYEgCY2MWog4PTovbzZFKh1N94APmrxWPMGQKq28raL9x3UaQ3"
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
