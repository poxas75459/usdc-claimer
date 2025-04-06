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
    "5Tsqku4p513dvC3B2P7VuVGA4BmogTvLvxCxwFyMeCYY21nyW62MTdkcqLyNUrbCcMbmoacie35CgGiLgvWxLKH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bfkaedS3fd4mZn5cLWny8L4ubSu67vd6PNGasAgfEkNY2TWkjJG5T4e7KHHHBVKceVfZnhcYEKFu7TkyCW3Ej7",
  "key1": "5euJpZdDqoEYXnaXKCRTdBE2yJn1xmXHmDBpdj2QJHKxFA6HnQ6bPC2mZtpBRe5Pwj6v26vT6kANCFpgGhra3dAG",
  "key2": "5zZiyqAdcRFJzPNB8SPpa4VMVY9FSKbE9xS6qxfo2FfmDPJJTZiAqjJwcxAPZkwcjh5mPacLmfRdaZ1wshYA8fNd",
  "key3": "2CqQeSRbRrojUqoByNYNh2zuGZ5YkzifCYff4qxi1w2cRyLtuZhMgAmF2bP45XB9KdMp8cuWUMgjGbpMoPLHgNp8",
  "key4": "3iiQmvJUxQCeEqbskAarR7xGWFdeYzZLZEEKmQ2Gvb7Wwv3GXxfQtpnt5vSZMeRJUgyMTtz5w6wXunzv3qLTZc7u",
  "key5": "47SPpStwqXMNttK8FAkH7A1T1XRLxaRMGRA3oUCzxJvmSjWcjjv6psbRZtFdAYnqjtukM7D95fsHAgJ93FHqmPS8",
  "key6": "4G57tMEsmH1hebXPXp7gKizzWPxmxH52f6WdoexQxZhnU1e7XGhyxbtRQR79tw4sTz85N7u8Dw9WttUgudPwxgy2",
  "key7": "2bmR6ysKdEZPNaufGW9FKKq5G9Wd1vcUyPSjmpKiXgbi8oNPEasPM4cCDQe14yDVminCEK6sqTJSE5A94bbFtJqS",
  "key8": "4AZQqCefzoQLRqwNHYeXVdX6euLxa6jRnxWc1NJB1VjemdXS5g7muQS7qQ81TGM7YeuKU39ZGLk8z4UXwoL2wZRv",
  "key9": "67Qqa597LEszQqG2PPjmuH2CeBjjZShpQU3tfoiZmcwjF224bd3PLPV4UZdHZt4p3urfLZ5MJVkG27A7UCmBJkXj",
  "key10": "43gr6uwV4XgRwpHfMe1Y9RRHD1jChN3u8NVJhw5v7SmmgNyuqRbnhhcseuCm3T83K2Gsw1NAyE8izjZK2PK6bLcm",
  "key11": "9kCgfYiiqSihHCorECsW7pjifQSMdyzunggreS3UQPdt81g8pu9duAmmJyogoD6uG5HFsR4NEwrokRvfZXbYDno",
  "key12": "pPY9f6i57BiUT5RUQb3nb1cMdEXrujjJYrhUKyk9Cto5uhevZEFYEkrQ1uDXmxUn3xJkYCBpeJd3zdtvzsX9Lci",
  "key13": "63FhJJixUxEA2ixh8MfWyQKqoSk9c4NJiroihEUsKhvr6wgwNBLJZ6ETr3G3mKwcd2A84KEfKAdcHHCZDhVqcras",
  "key14": "64RgCGszM9EJQt6xEfqxRCpupSLj2snFECCJVeXLyfYASzTthLoknZg43UwDE9CZsVoSHs6MU4wzvDGxgspDSHXX",
  "key15": "wbtQdeSMJ8WJV4Q2kGnWUaoDDEf7RfeBJ1ABcjRfv5GFqeoKTLCpZ2ck3ek6JmPsdtp39BRo4MgWqLwAvVTwaKU",
  "key16": "3MgqgZyYrRXNfRr8CUc6aSd7gknrFTBRG6MGuePVxStqo81LKXUhs5w3U5hc8AGt5GGUncaGJji7gUKRwqdHmh31",
  "key17": "4Njuk3zpXXtu4NjBP3ExFAR6yktJtmZTPc4WNZotZz2YLniPqnJ6jZ4YBxhbssKbbp9oLt6gdVVpsAhdHBneD1Mt",
  "key18": "2AGLq4eXpYEKAHhsYtABcimqtXWnYmpZGcCvaVJBtUCvSoeuK23TQyoWZnbvG9yNpP38PKYH7Pm3gBnLwcx8JvLQ",
  "key19": "tAWaHXJ8LUaUqnXsFJ5erCSFPKhbSRiXqBWAn7BxGJqXQXzAWQbSEb8VBXwUGqT7ZpzPiUfFdwFpkaeaMKfsRst",
  "key20": "5wGY1t2wwi4yngYmtz62kMg7KDgdxRpNHyvo79MnnACZko8N5K6o1Kx14SHT37x4KJ5LPquQDSF4NyqpsABcv8gi",
  "key21": "5WQ9dtoa8BgVHnfx6x7Vfsd9pjMpzvL4k7yJDmBo8CH4CqqafNWKaD1UAeXvqUZTQVZQkkWdN7beZifc7UHCMMvC",
  "key22": "eWP9XE564iGg1sBGsd1U4VyC8NhLFUdZdzZ6D5bRTh6D8SkphxDmNcueGs27LXVM7Cb7sCQQEbNFFtDhiWTmrh4",
  "key23": "356G9vctXhzA1A7TyuAVA3m5qrcumEri881bZA2YhQMT7dfPJwbgQUGHAmr3AH3SJwWQd3sokvjhtnGrrsH71n9F",
  "key24": "3GiAm4vgqcqbbjfmCYhXdBpauJwJa4YyxQfAcd4trR5u2C1jsyoTA5q4r4oZyJ5TumLvF4xacYqkXXYxd1Kwtrp9",
  "key25": "3kHQMdQjr5atHt9hdEMfDERxv7Qk595PS4kbn2wPQS9CYH3XLZR8uAjaMaNjw1RZaUyaVuxvqjnRUjnTsgGr4mD2",
  "key26": "4gsEfD655wsG5TP5D8e5URk2YR6MfoqXLSP7azYsXDDru5YPgEoSEUGAW3bTL5NpG48mfvWBPTMm6BA2m8aot5Na",
  "key27": "5E5HubBiXzBhJ7C2NsfJ7DFGdkDaZiRVtxFaykUBNXp2pjRVuMnbAjwtY4p8rRLqNBiemvpPRd3ng4Kgya4m6dUx",
  "key28": "5nKwehBxD3HRzhfrpdy2hPsNaAUp2MoEvmXRikvC45yj3eo5dZspzYZSYYeuXEzWnppBXyoLJXYfYX76chBEQYrZ",
  "key29": "5maEDfXVuTXHgE7zBxpNh7LEY7ULGh7USmMbhhA6EBRPYvNFMitcYRHyXdFnTtuJ6K2C6Y2uVzF5Se3xFVb7uGbH",
  "key30": "4hcr8rx7QwMdzN1CNwBHBbS8fQ6Nq1qvR4tw9WM3XhHS5iwtxwuCdYEmgFUehJvJ4Grp7u36ZBhQjuVgFfQre1yg",
  "key31": "3XnKChzqs53y8GxvGLZYauat9nkYNHy6Dd9pf77PZsLarbh9puQ2xL4UCAQQrq3NJXmQRFTKcDwsxoJzjdh5h3dh",
  "key32": "x45tXpsycHgqK5NJa4DiFyRh7DqWBaUCv8qxYE82CjPkqrVWCKMgHDoNjAFS3q17dMqopinXiWZY6EPh4KZXoSV",
  "key33": "551K6yPuu8mQAAtczyCgHB5Era2PL7DXVRh3EeJM48gTUcWeHnJW4FFfrGZDRS4juPZ1iE5aiPatYZZUfEFoJ3gt",
  "key34": "64pb31d8j7HdvDsLaa6SZhhLMgf19qnhKiepX7LdYUGKfKF8AMyiaqjb9QtYpceogvSZTBghVcjGge12d1ahV3Jk",
  "key35": "2WLSkbHYMZFU6jL1NWYF3PWDo6Y5iGQuGJESPtWNcLxZCuapY8hsGzQScRtPDfyPD5vWRRbdGg9qwfr6vvUy3jJ3",
  "key36": "4YUrnwE16jgEL1SCebA9vvYh81CUuwbKB7WHm4CFie18VLuWiibpWTmgqyfXHsxi6LWSYT2ynzTMYWR45S8nKQT5",
  "key37": "3DwC6Qxz4hBJmcNaPh3bNA2BQqv7mYhjYyw68MG3Z9vJCx1DhensAsUFbTveNeDC4BKh1VCURcRzz69P2XiZsCcy",
  "key38": "3tcqoSpvVukcaTyq7N1KftExQTLbXu7C3rTbFuhUUJpRTmssDw3xtcUCh82oE6KQipGcKzFRQTu97LjxSCMjUrSh",
  "key39": "2Wyw6yiiqEMU39UphbpTJXnP1sR65aexJ8KuM5ZFnELrURNDpqojUaVCtxK44YKxZXZCqpg75dBsCj3tD5mY6N3n",
  "key40": "2vv9nLqDXd8tL2U1uYVu1AXCyceyc7w5c45sVkSg48F5ieLAeNjWY3sPDNrDh8uyrqgXdm2aTkLhZbRd6dkbcqHL",
  "key41": "x4SXQYocxDbDnVvPosgkXqZvh6Qk6LZUUkVZspMh56vTmG8VpmpVDwoABVoeufLD7TVEeWtzt37HRTNgpNFbXZZ",
  "key42": "w5HVffjoo2GqRC6qvccnoEeisfmdJ148TCUEDcs5qWbWmTETMy2T9dpBGREh4sYMiPp3Z93QXY5389ckRbdzfth"
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
