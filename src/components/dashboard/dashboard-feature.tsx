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
    "5JamQdHHpKhxKzJkSdaRge7bRTp2dwyKy8U66eeXSYkFFoQk79jifi9YXjfR9EhP7GxmFnNT1tB2y3spnEEYwUG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRdKC73hHCfCJ2nhn7Fddy14jVicKS7AQLVUh4ZtSUJ8zXu8aFfFKqbrVQYrRHtBYyV8WAKm8bH4pBNaEmS19zk",
  "key1": "qhKFerYYwrrgPqyJekxMJTBUkB5YQ1vC7Q3S4kNTdasqNwixszEhat16d6vg5F8sEzc1P8vN6aMk4qtbwsSKDPk",
  "key2": "4peK64v2Abm5yPX8VVyonPDyTv3UbMAekER2FnFZAnoVeeDcBqq1WVEuQxuBNi6j6xoGrxrHpfqj5Ehh9mXRgKdH",
  "key3": "4KHUnqzkeicGWADhcCTuJ2g2wXk31YbgUCZg35gfHyf7unrUP1fKFKexhg4eFPQnfTKAnWgZjKssfjuBbR3dKuHY",
  "key4": "3jKQ9cwhyVcciCX3UggcQ9S6JHtPbdC1Cz3TpagTEwJhKuycpfxisj44yge3UXsutSzhmULNq38fiXNtLwjJ7WWb",
  "key5": "3g4AXas72gUV3FT2fqLr5ejMuKexEqzkw1u3KkGsvwFYVQSjQ4qrkzYdjUK1ZTCenzYigjmbnZiuySqVJ7YvchqU",
  "key6": "3z39EY6KxQjkaWsDZShKMkfMVwHjL87TLXmPX2p4p4K69WCoa8aqfqM8fLrmTV8CnTqtquKGBjBr4esFa5NgcxeM",
  "key7": "3X9aajuWJQzFwPJSUdLkEZfWRyb9ziKirs5VZHC4ZRNmtJTwD8t5QYvrPAQksteXtNNunbsEY3w3sa4YbXi7MD5h",
  "key8": "54iS3Dts5W4Lqi4rVtiwtHZTNPaE1CVGWQX4cNWkRrafoGwS3qdHcdV4QNRxyx6ohfwtEKkz43z5zTBSRmsqei1h",
  "key9": "2cFRN3kWUJRSqSj7YzYUWr6CBe8D9xKAKLdxHg53aueUsAdH3y9Ph8z5EGWJBXe8mPDauSWNh3u3AxbaVbrEuYCd",
  "key10": "2NXTkAAvywqh8pzcpodPWHj8CN67xh7erbrpYhYFFCo9356dp5nZLfxh4QX1pspCk9CNJL92rJA2pSUnGV6mPMk6",
  "key11": "21fDyDkaqDzVA8smrSBGi8959XVC4vyLQPRaN6KC4dspCXTRwMA3wmhs1Ffe12jyqjP6NT6j6vatktSfRX2HsSgY",
  "key12": "5FTdiKbwT9xu17yQ3U55UpmJLEne4ufoAukTpWoznp2X9GXD93fdFLgDKk2rXj56qQ7igZZ5rjmeDxngewnnzANC",
  "key13": "3YAsEUjLT8jY9wc4CC5oxv63kHh7UPZN51dRmFu8cQTDzCJPVrPDrFN6KrtWJbR8tqSRDTJK5yxnKdYKFr8ckWN8",
  "key14": "37ECKrTaEZE7frE1H2bPmhCzzxBsEExxheXYN5wKuvykkqCB6L2LGbhn87RjP5GitXsHwghwbexoB3Na18riTJSK",
  "key15": "5SzaA1SWraRSxxKx6Az1owCzjDMyw57ZHT2DH3kjcYxk7hBUfsuJM4U5zfGoY8B5WTjZiBV7jPGJr6vMhAhv2eRf",
  "key16": "49SU4qSN9M2XjWGkVrpEm5D3jworSjuCrgJsQsiitdkszVmgnpT1UXih9XkXHRrNhRmnvYjmA6Np4Heu3T6jgALi",
  "key17": "CqNZn336oTq2wvjZ5PjRmxYiuL3atM8Fqs3Mh15gvMesMk7ZD59if8F9axcTLxEq7BWpinVf1Eh5obACemukA8h",
  "key18": "3y4LKofA2cWg8ShR2xDhxV5tsrYxe7VUj2ZKv7c5asgJihTbJWF7KdkxuibPPj7rWTbHM1TSLmsYNBtnrko1Axn9",
  "key19": "3whbmHcYMc2mw6sWZ1pKWDvv1CbjaSHQsxQyWCfBSqVMKYCumMFEq45oagiCY1dDC3o5SiKYf1tZ7jMqX75xW6P7",
  "key20": "NNyjNtc92WNmxey11nKnnQaJGvPNzvbYtt16EpyMJmKqkEdWWtctDnmmdkfFXGbU16hzeFH3iH1MBN9sRUnpZck",
  "key21": "5UCMXyhjfevB3wBTegAfYdab9Fk7UyDJrvWGEUTMamnD9cYTSe56RKKQziUN2GqCZnU5z8iVRvcUDw6RbPyxjBGB",
  "key22": "4t48M7Eu9fFAaefWTPiYAFXXH71M1PcmLhayLnhiPFjfk5ZFLBeks2zAuDYNBrQ4VM3Jy2phU8jjJnWBhmu6eVB",
  "key23": "357DrLW4iHSjvQ9jXQC6ocutptADtET8Ws6UpvRnHgCQPPjAc4ozD9T1wMjWjy7unRPQi4CS42NvyNaCxjzR3Y3H",
  "key24": "39RK6uZ59i2gy4rNwQkjmpubHvFK6GHMYCNpgvZicrkWQbyEexG4eU8eMScj4pSg3kTBkr1pGyg2cAUWb17urctP",
  "key25": "2M6vj8c2xJ3iM8caRARSzLJu7KzRdj4RqAW6gZPgVixLeo2wAoZdaquAFfna6wxtcrh4xZBg2teUhqH7A62BMUrQ"
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
