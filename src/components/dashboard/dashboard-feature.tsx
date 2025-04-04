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
    "5iHtPD9Tgm2E3xHG1tZ5g64z8ipENejdsqs1eTYuo1Km4qo6G4ZcF6J4j3J5NLSarojkRUvL82XqUBRbkz6n9Cdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6yqmaUv1HCpUSQgoLWkNWkqQvCTTLPwF86TZs7iUM9cb9noTRvBP4WMKMp1frZz7owtod4uias6XpeNAs11As7",
  "key1": "4ELEMwwxSmi2vwUpMoNrnGdrZQtxJkt4NwCcNrysuovhTyKaoRFXjh3HuZhpt8RbvjwAKRkhBgkyDEwZYdjDT4Zh",
  "key2": "4LZKpQcV8W5GupGfbYUEgswwaEhLnXXsUbnuaKBKFBBgTQZVZsqWM3r6seQkfshhbAesyFecznyaUhLP86piS6in",
  "key3": "213FptkLYmt1ifnVWdEucRHHGTsUbzhBDm7SUjPQCHkUmp76XRk9L3iTXwhgScCiWSHnTQdZJyGREqKeTaCzoA4k",
  "key4": "45SuFWHX4TX2ipBY2JvYiycNJkbBYNxzmmkfL9c7VhAzrfAtpBS4KhsD9yedCsX7S4UgGv2pbpg6unyXzvSYRYxv",
  "key5": "5NxFAskJyaBgYPTd3LiLn9dU7RzZdirTkJfzwMtGhk1SnNUs5qeYDG3MFGvb2bpzHokum5zS6HAYNxFuRhukA1SY",
  "key6": "539kXs7664kXtgx33WaWaTLzg9FUPWr5hLRBqSu8pgpj8poYTdARF7EmZQi8VB7hBtVo7akgJ4qMkBZmH4gQg3iB",
  "key7": "58dmhVJeNF1y71eVPt6CuYhZTCX8FTv5GTFJP2ozuLxLsTrGeAMtM9YmK2onvubeZoaaRq1xhTZ8X3zjTCs9Pywf",
  "key8": "28BtsiHjyj8FEd2i9ob47TVjYM4HQ7VfHnvaHetYznBJqPoKm4KfyNMeiRQWsiimuC8jECfJrtHdNK6ygahY6gJi",
  "key9": "52WnmygKzBnmavemVdNuY1vepZCNGTWk5ER7HhhKyn5dHX8ojDEmeQAva8xXGre4QhqvVC9n1onndEGEYtuY8AdY",
  "key10": "2E68ztZFFwKzgFjUxXWQ4PLm46nhPAzHAZtwUb7LAoXQ15jRLgdR9Lew2WftZqRNGrWpwintbirkzKmJ6wvpYfCt",
  "key11": "3tUwujDtV4FXQrigeWRZRY5hi3mroEd762GwEvKkemCG6pLGv6Uu7dmW5ADYRSk8V4L9v8KH8EZWNQ8G9PEUX84i",
  "key12": "dRZTwSyWCY7okq1R7iss2VD1cSFbTKLi9A5tPrT2tCLjoNApYSbfeosYr2Qd3g649KnC33piEkYdiMnv1QtGrRK",
  "key13": "65btVSdE37uyKmrhUBo1ufAu4LS1FePrUS6pMZwrFRq1gcbJzH2p1gXiWcDTMLbT3NBPoJyUt5riSGtQfYZ98if7",
  "key14": "4qv1NHRydTwyZkSqkFjCPvtg8tk1Xr2T5tvabfbxFbxdgVMj7UXotmN3sk6A5YzqFXddr9GQ15XrpF1cBow746wU",
  "key15": "5UbrTP3qngPDMTKFWkQuKti3QPRr5qbNq2G9q8AvH6EGVtTPe4gmgdRjg7gdvusarC6FgdpFtj7MaKMvECVK45so",
  "key16": "4MMvsNfqD9nfGTWLYZdFxABZZhEZYaxPn9Yr9h4a1U8x96LwVw4UHKfAL5JZvVPHsNHcbAd4ZY51JDzF9JzGQk81",
  "key17": "8P3Bw3H2NErAjnGdeXA4t1Lodq8kUJ3FvLPZd37qnGXS1YJDV3WCzhWfYZRgvLc8QCt2GjYKP8zdbvjKT2QCjx6",
  "key18": "3hk2xkQcPVjpgxLnuLoX6jxLzGoSc6Dve3hie4bLVQz61eSkR7aKPWUnDXKXZ3voetjL2iixS5ZUCKhuNBBQL8zS",
  "key19": "s9twa2VqKMLDoBvS1ikzvLbauJ3XqaHHxRNFUAa4LGXP5H2HaHDu6hu57vrgAm7yWSk6WqJL9gfk6mFExTuFr3H",
  "key20": "3uyM3nWd8EUE7usRvDWKRtt6VUCmoCdBsejzfek5AoWQMbFkVj3oLqaWmvEkXqnyw4Ft2q31RthiGFxNpTQheP64",
  "key21": "33nxzYHj2YnagaCUkQzvRA4EDubQ7US3NgwtmEhZzQ1VZ6B2Yr5UTqpBZh4MjjdFB1955h6z1t6XMJE3tt7SxRQy",
  "key22": "2xb61gLKY2nMxQKhSF7nodGFgoCV77zFrigWzjLCVSTWiB2kRiRFHZDHk2YpyJaSZQsFfREmbd3YN2XK7RNbHSXj",
  "key23": "9T6XzP5VF4cPh22ti3kZzzyfzCo6TZgrrrmctnPBpcWhByURGjMwwUSrHfoGo5RQnr8m2F4j6NpD5quRuqBhGqX",
  "key24": "23qHwZpQRc8Si4huKj444PDPBhD5eqxhxj8Xet3x259N1j6fks2gA51Vy8Rqz1h14LeXVCGHbUHCUyvxCUh4Z4q4",
  "key25": "3ZCxApaCqq1CzsmVsTEFcthf2cBCJTgJ3oKKsJpeg4jQiwcEshuZYKFc1p2SRyF4ntTrum35uy4Bb9VYiKQRPNe4",
  "key26": "phBuX5rPc8uJGnfjWbshB3cUQPFByCZiAyp3Np59sMDt42rkxqjxcXyMeJaFAMUBwYJfHkTD5SnWukb6p6FDUd1",
  "key27": "3phcWAGAq1KFhsrSTzQX1PeDec51aak3yByDLT6T9h5b7pxpuxo5AVyKrNZLRiWNnsgoaFjCjPDqD8PuGNCv6guv",
  "key28": "2WvMReqnezGHcVnfEG6uzyVJVK7gczwMLjkb1mUCDq9jaeJuHGJpcRnmawY8oMJpERApWBMj5X46m1dSYz2AG5jf",
  "key29": "3yBfmcqHQFURvnxjfEg5uDX6iTKBvNFcLKJuBAMXfWWvbtoWNdJLRDtvhxdNZdgiwiho7DVUTCn4CBrhm8nvvu4q",
  "key30": "5UgifoHM4DgV5nYNvn8oFNZKLAfWSJaR9QYvvvK5ZJg252aVYc1tc9B4AXZsbwQ5LxQ7GYScxmCzyTRuW6CHKw1n",
  "key31": "23Gg55eY7joT7Yihq4hbq54i2nDweJ3DdoMctSjaWAUFdfYxmoWxgD423Josbqr8EpopdraKYPzg2PBRcHn5kHg9",
  "key32": "LsxRuiH482dD4H1T1tmZSC5TvAYLYxg9PLGYfvD6tctcUr6VNkqV47SCgP53EkuXjkKZgeTCbwNH7aNsf3gd37X",
  "key33": "4bqEe7CGPqaQQYcpETpZJC8BSj8cttZF58uYAPj1uqUgv4ern1edi6s2qb8qu3TTWfoMdThFNwkP5LAN6Q6x9Tiu",
  "key34": "4eAmiEyTb15SRPjbiExMLEZEMwcvWZy7dk3qoVMstu5KibxPLzhEtuE55jLTebGFYZLXKFrih3D7k6EE5g26dKBb",
  "key35": "46u6mxaCi67UY4kw8Fnrh1DsgiQWK6GPGXYEvbJvpQ6LXAukd5R5eM6gLLp9orbq8ocirxiGrQ2uvb5hAL3BCWzP",
  "key36": "4pccfqa3E4PZqxUxCagRgk5Nt4bADnwn1AWjUuGC7fEa346B3ukpXgyfy9kQkVhEGNy6VmM39jaSuwvt58d5JK5W"
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
