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
    "4tk8dx6NwQhaKxzQvRo7x5CjLLjnke2sT2Hdd7L5hF8vAcKHJHdacC2xYryT6Dwx3UHNowqPQYcpfbbMij2Gz86E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HggsgyzDF97jtmF9oo3NiMefQo4dGyEFp9iso4dsTcbNg5aPgF2a2ieEkhKfx6ZDDAstvdRJ62xfbEsgXDb8QMK",
  "key1": "nb3szGtfLS13Ky3vGgqdT9YVMHkEkZ7Z7ARg6nCoezxvYv8yyebaUc7VTJAfXR5qaGbGzf3sxH7WuB52gpPp5uB",
  "key2": "3uTfkxJ5PUbFBhcM3qvTM1k1LZJrUkWaYcLAXQPaw56a572dVriLPSZ7CdkCAereJ67roZwcvAzYkHEEtJzg9QYE",
  "key3": "3HBEXixMgzEN2g3RzCY51Ziq49TQFfWH4r2eU2fcB5MkAJ9seHZ3WQkMMdcvzLSR1G6EQAMZwvgkmQrzM8fjLwws",
  "key4": "37nnupSvhgWwpVnzEq8vy5zER5wNUaz58WrRGZdxXeNGp9r25LtpFNUyu4BuFRBQruB3GKpEt1yM9mRtyJCan83o",
  "key5": "2X1mQczdn4LJLFCP8Ljd8Bq8DeWFAXGgd6hEDMSbLG67NrptTnrBuH2ZvopS8CNcVANMAcN7dZxtbDQuQMpgx5K3",
  "key6": "5ApRUdM9Dxnho48ybi8bBiznj6ZzAhm49ekXmPWNZsaEkCZjnphCAiP2cYFHHV2sbdk9qFnQX7jRZAskW1TzUsgP",
  "key7": "4hQSQEFmNWYkop4B1rrTCUnvEP9PaafCk8LqpAshxPVXQWaZhqCLwDp5wWqjR38SpyY5TckSrUE5WjVFErEMX7Xk",
  "key8": "4tBigdRw57G9uFugBCWpVh2etS9aT7kQ7yDXhv4ULG95LeyjB2UvMRED9akgECDRMf3qSNtRqMxMCm5xJTAkdsoP",
  "key9": "3zrahhyb5LnpGWWjYWQML3ZofAwxmTqYicmWsPQLHvaAoDyX6bvPssYi26LQvJ1QSBcxtg1V17sJkDw2GTpphXQf",
  "key10": "5HY4e1fNFBQk3QPeqzZgRyRwx5Ee9KG7Nw9fYEzusEHHnGQMkJxVUbW47LynQzVBYbPityK62vEm2obLB6nhQeS",
  "key11": "3xkU94jKwmWDuvzkXQUEqTFaqvPzTC2PgxoDn4HuAX5baa13UagtxaYky2a3mRmZEoxb2nMkmGqb6JtF4wivLvJD",
  "key12": "5dKCgWoHobsXih5NYaStz98AEqtczJv8cUGa1kBHMhnJRryQrbLBSREoogDSG4XWZZuYptCVHxL4sT8H8XVJZcHG",
  "key13": "5CmnXh8bHsDhxvf3ax9YF1JGNr7bkWuRhQEZfgSqPL55XnuuzLv7TwxnemCwhWCedAtm8nASyrX8kkMrKuhk3RHL",
  "key14": "uhvvLfiTFnZ5nC9W18mB3SEZsMxNaPv4cVVJ3xffppKp7oZyr6ZYbXxjMHZLbDXVRJoRAJyWP86om3GKJEwXPZA",
  "key15": "2baLvKXRHQSTsDkoFiynNUzVoWzKm2DaqHez6EJA3T29ezxmtN4Chd5GFbwYrvVu28B4euEXWueR8rUSpecjR2Nw",
  "key16": "5Jnf8MmTTiph4GMMC3uDfZx3QrJZnBEEP86mtZawQzVS3tsUruQp8Jdd1T22jtVj11ykpefPi46TMTZJxae8yyP7",
  "key17": "2WzMkzRwqJrVmUWzS3m4pUnsSwykN3qbdhfkBGg66co7igyBxp29BwvrsgB6RCimvprzyAe4CvTinKWaya2kmMez",
  "key18": "3Hqu745HKkQKFnbtAhyZ2fSAu7f2jtRGbwE8BUzvnhtM7LnSZ4NTWxvq5ti69bfQZjGdvNEug4MZHmiBhczpfiwU",
  "key19": "2Lqhbhx9kvXTy39hpDYiWSWyPiJRp96bD6d6o5zuqDPoi7jEej845v7TkJGWQRP8jsP7u92n1NqTPH8xguQm2H6R",
  "key20": "47MKvyShEVYAPUR1YbMXLEWjqXZ9FYCLnD1EHe7nvSFgD59ugKfrbbhebvfaaHXizuwEop4VckctST13pdPu72w5",
  "key21": "uLi5NrngHRxZLr6p4J3fCjNFBza5G7e3fNj5BqN9BJYChVGpyaGZf5kSfHi82n5gBW9JZxXmnBBbJtVkeXfxu3L",
  "key22": "3wZWcwcEDHaRdS36LLy11jYswnhQ7usWaVWLRTxBinaALPM3bU4guERoNF29i5XjpmmtdR4Mu2q6p2GRpxtckH8x",
  "key23": "3wnpfhNq7d9X4cNSK5QcBjBwrRCUrYKKwe2Fda4usnjtj5ycRM2aNSe7DCA5hXNjhTyeMgfNyyJ9LUy7hNc3QFw",
  "key24": "61wAWbDbQy3hythzxL4xVndGyG5j2KBuLgnwZtHsjuF6pT7T8fY1MWzLTheztFPVC8D72NvEPFiV858bvjLkKDT1",
  "key25": "2aYJpRNg4K1FD7hTD9LWcZxRd3PyR5QAft49MHpW4R5GHr2kj9mWaDJhzGpJq9Md2skVprimygbX9CehatDXS6Wb",
  "key26": "n1F8yMMpz3fDuco3usWWxYuo6fepsxLDSsHWJ96EFy3Dh91LhdaWwKrAeEaKgp6iyD7SyZ2cuLKbWM2ZBu3q63Y",
  "key27": "5CX4iHYEMUQMjc1dLTtqxz34hjCGhC6msQcTBYU36xct1Z76vyFBYqi2ePQpBgyLzrKds7KFEhQBNBjyef23rFKh",
  "key28": "5HRnGo2uVw9z6rENxPjC1LjTvTh4j6XPESLDg29iRfxTV6HBdt8ub2XAKEMD5RCqt9hBLztNwiWKQfNjnE1ymHsg",
  "key29": "2eZDfPnvBXEUhSQZHhNaiRz8z1YVLKuS7mneWj5DUbH4dA6ru3pSvmBMMuqz4S6Gi9QgC7VWLv3SXL9S6K3xQfNw",
  "key30": "3xYvtmQDCQ99bduJmbWQJHNG44rkCSVzGCqQ6CDq1jbtjYH8cJpto4Zdi7aaEUJk3sVM4Qk88hXsUyf4ftFjE8TA",
  "key31": "3S451VgUE5bsuyKF7H6H6D5U4DEc2EQpo5c8wjhUhTSxJAxnJ1MaNmZkDNKnYvwSXB61Qu4NLCe6vtHryj7mMMF7",
  "key32": "4n9vy8KG9CDnbz3q7EBXibD4291QZ79h5BpnyQq8mk5Kaeiaf85HDy9hAr6uYEQfv54MLnuSEUKQWMumG2wrd4Rj",
  "key33": "2KHNbYC26Lg4frPmS9uL8BFLzs56KSSjrjMroeAZg94cDCLCBb3Y243XNYDFhSZX1C3rH4n11xpApSJ9RvBUw3Ze",
  "key34": "8a2oUKR8mUynvMoMpmFm4GvzYa5JbmLvHFGswtpXs4AgGo4HQppZxv13EcsPiEJC7npmGszjo89bXJQSzeAFSQM",
  "key35": "26qgeqBGLWpKdLuNkp1uvZxjzskGo3aXLK92Gz76aqEPk83oSC6hMwZwzPE7yQ5MD3G1Ss6PwdaFr8ga3ZAvT7ek",
  "key36": "WjFmp2o36uddFA4DFmBvvcg6Ur8jxMxRPe4meK1Sesq8BmSGXEUVgiVQJ2XTS4mQJg2wRLKqrwhPtVaf4T3hmSQ",
  "key37": "2ryTdWsxCvsB5GRyw2dFtuNCPgbq8N2bsGn3hHBUx9uwm9cffyjvY1ztw5eh7bwmazfGo9dcRa1y859QAKHVsts6"
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
