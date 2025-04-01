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
    "LoxctvCNNKXqLeEDh49V1sVgCMFJbzwW7d8v5QQcyFsQxpQGPTFGXymzUZNQEGJyPsSB5XmiuK27PDYbW9YRESe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRuFwdJX8GyzwzTd9ks33tLfRNcxBkncTmeMntAts16YgFDEmLnSeUeDGdjxUSEAo5bGjVhn4GrDV8Mihn2fffF",
  "key1": "dCX5gnBPq8EDNvuJSPro8fhvQLbRq81ctmBvdN1WMvu3nwdTtKtcHxMa4gb3TH4RfZQYZEHfBu5ADnKz5JD9v6L",
  "key2": "23V8axz9cDfdAvXPr5Xgz1Bfifaz86mrnnuBtEizCcXoZu1JJYwxPE31uqNAb5Fyob6JkRSCTJ7zQQmWXTKBmgbq",
  "key3": "4rCNibzmh59KstngS5WPM8Egg1BGWLY1ufVPJfRk2SKA1iQKv5XV9yqVLJjgRa9E7WjVcicERLp5C4bcxqy6gQDA",
  "key4": "Cw5bLxDPLU8d3DPcVBsxm1KYNm9fRmQGH77zCE19xrwJpPgVLGjxo7atLrGW1d1quFfocBH2zpe95baX6st27gq",
  "key5": "ZAyT63PnueHsTpwUBqeM489ZjnxR26niV1oxAXGRhhyhcfmV6i4jpqTDWMkfH3KAoe8yKbRLHK2P9TwEaaGvAZ2",
  "key6": "xeZH9S3e22MECP8RNEQVDt3vj3J6vSoQARDSaw2G8dqyTbUiiBBQBtH6s5h3NYymsZ8TJNnSULSYkE7zQs7rhCg",
  "key7": "5B4kCcc7Z5K5smLFcLKQtFCnrL11ob4TbjTJHu1ur6pEaFPqq3tqdzeq7V3cdsg9mnryebwq5ArGLbUcG9wgKriT",
  "key8": "3oNHP2XLM4Lxthqz6EGWDALviELPLC6ba3auK6xzGoGbx78dkchzbojguWjcBY3F73jynvqSJmwaH3JwevnpFHS2",
  "key9": "5FBuGJgGp6ZSTYtgbwVFiFgdqw4643CA897DLgAmqHbvWKsKjuYvSh2rUANWxiYMiPj6AYxe53sRfNc1b6M5m6q9",
  "key10": "BudaPzyUyA8BqtPEuUxLuMEt6YU7zWB57cTT4dJFjzJC9Pxp7BTWUWiQDxXH77LhdSmKZfFttEMWhYAAqws2RaA",
  "key11": "Uk3gWEbZf3nVMKpWe2NDxyedNac1trp7wXDWBaZ46PaeHgkTTpUwai7pS1k9mAqopkk4BPYvXt66QNw97rE5VFT",
  "key12": "3KfteHKxq8ju2Z4qF8xiLtaFRX16VyK6JucckTzu9Xm8Yzd9T7rCfD8ycGkpYheHPbZmGhmAiysJ3Av1jSLE3Xa2",
  "key13": "54y8vZ5VPgDpYbijNDHcehcaK297qMdS24fAwj4b3FwF552UeNsVtNuKDDt7yosrmKB29ERRe67JB4bRbAKig1gB",
  "key14": "3fYgbiEpRuxhuK5o2NgxfG2wkZvJWQzR8Kxg4EHNp6mCz6BTUHkfEhJ2cJqzd3c7LMHwawfVLNAY31hFB4sArLZa",
  "key15": "2f2BhBdHZsnpRrorHt7Yw5N4gWTgV5prnELfEWHbG9y4XFbaQCc4oLNngVJqj58Gnzhzq4kY7oyjwNTHMmFWbTbS",
  "key16": "5Xq2Jc7QmgPBqQkQV37tUpVN1BmbgXXLvttvgBCCTEjkGjv3okMdiE788KLeywhdjjRCVGu6FijpnSv2bnH5sUa2",
  "key17": "hUBeJJ2nNk11dLpjk9js1qF6K6seTM7DkBArptrp2yuJoYZmTY69Mvk6WPq3kEGYWdkgf7dPh1HEBqvAwEiPVT3",
  "key18": "2RXJnbBLEhpePS8Af9QLyPaBCYvk1EqZhFoUoKvu6inBXZXcnpQnc94jEyyig6HW2a5J5AKTyT2KE1XZQWDPTRdF",
  "key19": "5y4GxJjJ4MvNMHEQrcSUC9s1ZidE17SjjzA8GLHPE5TZSm6aGWG3yF9ZaX1xdD27vii3wnVwvUaZjb7T74hBgqds",
  "key20": "4xch6U5zgNN7xh1rd3NZn92F57VtEshDRfLba4FddncVV79XxLB479GsrWevFDofACLTeRWHyGrA67Lgzoa4AqiJ",
  "key21": "4NTPP9ifa1sXp4pnXzfAcBLDBAUo6brZm2mv5mqpbTiDSQX7oMmRv5vxFHqH9SoCo7Bzcv1U1ZZxfsFxRir1jBGd",
  "key22": "5SyYzCUttdWTztgLc2dkSbsjhSAonHrYvKQ8nCjedyNx8MTJYSR9TQ847j7NnCQf8B6dA7Pa69ErC62EjDkWBDH5",
  "key23": "2bwMoJLuyedmS4eCLYrZsp3ymRhP6cLr5McuJ5N96eZPWNMG3JSDHDyVodeAG1RscTsbwxzX6MZst4FMKsuqp5Lv",
  "key24": "2ux9iWKvDaRUhk5wjivuFiUAEWCuZD6unqTBv8NAB2G4yGRKB51gyqHidxqptgrUttKn5Y6RX1qWWv1ifj6PVQXj",
  "key25": "44kFAXeWpd3iBAoq2ePHfU6Wdj6B4sWJh2Qg9DYBS4YkSYYLaTQkfKQi42AKVoSM9bHy2NEJZwUpbfKPjc9YTzGd",
  "key26": "2ELzSgDkB6PhiheRnTFK54wuxZQq2sbKxaRP31mzSa2pJiHY2R9V1FST5BLQfhYGPhV6qaGWmVhQsvZJ6q2yvjVo",
  "key27": "5A3VTXsNBaymiDqiW9uydUTSBFpmh67Fx7prBu9ugiCdhdECVqMg3pa88XfTnmRvix4UDFTmCYwiG9bhkD2xVQWg",
  "key28": "2UL11r8AdUHZBLP87zhV1BihhTbXBnLpZV354wUdL9PLJamsPYpCF2S2mgUtneiW1s9Q3w7PftidVjJTpLhLRNEn"
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
