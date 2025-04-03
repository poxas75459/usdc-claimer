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
    "5rr3ASHGidpf6WmJPCSpbNW2err474ngPm32NwC4oa7eHZq6tPPmZPjNcpxhRW64HgXx3NEJVKcRagRKQW24gLRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eRQVEiTuVTGrKSfUcHWhDjQoVAFiLA8Wyne43pXdFgZ2q6dunTgArygXnC8U2aC1JgF5KAXdEacAuGTkiS14mYQ",
  "key1": "3mqHtUsktPtUPko94VfEsiMea6WR4EDJfGiomtPB7EB89rtqUwpxjfaeBX2Snh9J2HR9QfzG5ba9VRsq5tCjUB8a",
  "key2": "3dW7agt4FvAYdPRfvFqcUkf2fqBpq25PS3sPdUae6vKczww5wCZFWtyrM249usMUmYvpXFreExzoBa6AJ9nFXJsX",
  "key3": "2xmZtPJ9tmQK8oCoTc5gspoo6tU4cNmz43Vt2bL56zpJRsZe9XRukrkpECdgWbLjQoG3ENqLQtnnqvQxXD6hFsVM",
  "key4": "3yr6oGJkwz5Fqg5rRS8hEBVwBSWVpf9eSS7CFEr884HMUySG1NCdt4bge36ZHa6AeB4Mwp5zHchLdtNyaREDiM5o",
  "key5": "3CfX85T9v6gJ2bZsJW89BjfhaDBr2KBfuEGRLypFk1LdUyjHXSbY8VRgfTNowypV5CXMtAUAtELE7hThZ7jXMAzs",
  "key6": "3PVYHhbytCc9WF48fXFY6PRBNRjCaDLjq8Q3j94VkvDi3bYUFcMLcKHwhXk7Vt3AyiescfTWWeo8kQgWGvTJmYJg",
  "key7": "5dLAGC6g7HA4vfkYSg5LwWafe8YxjL1xBodn1XmdwQmK3Hm7ADWSbcHMpeqigBrhsaSzgFHySwcZ6ws3DRbH1fQn",
  "key8": "2zQLKCgvAHbFFq8XX1GqvgbzPgY2oXLN2GHax6Wmm1Mjc33n4h3ziQ7Ykp7qVMbKYACJZhnxhHA2qLBRRV1jRxC6",
  "key9": "5vM46CgvtptHrsFZpnA8YiQtpDzKSnPN981nTma5CCBZSWSpZP54LdzG22uwLTgmWwc33nb94ZVW9TGw3DF9NsnQ",
  "key10": "WcrmtjMPyYTGcNCa1trN6E1Zm8qMjc4uBAGmNTtLjj4bPMUDZYd2AoGMpKM4TdWDYxqHmr1VM79FWRiHkPqU8Wz",
  "key11": "DNy3Bvz9AVQ6DKCvFCw9LSi7RZi21ATU7wsnFprVC7A3Aj51LuUzr4GFECiuNa3n12Sf53csHt9eUik6CkTBnEg",
  "key12": "2tj9Tu6BX6CYvEaiqSZLvbbqiPT9asmiw953vYr6UuuryE6YTi4pBgGfAjfzhwPvhiFB76ccRtGC3ZWfrc7eHuJH",
  "key13": "LQU9dDE3iFT17x3wticAg9NMAanauhmi6FBLztPrr5V6PMHh5oSNq4LDguTfL2nW3YNJuCsifWBVpJevar99zet",
  "key14": "uFSgEyexguD9Ai4KtXDH6xxpSp5uktWMVZzEHaWUZxY68oPAz7vyYpVwsktZtmJiwHF5xtRTT9NEUGfMTtQtY4L",
  "key15": "3Y6fyXRrcJawTnPDn3f2SBmqWvnA88mmvKAAaDaU1Tz9Leeq9TsgzLmFYYJNaBp9shHp9e8syJwCkjgp94CiEMeW",
  "key16": "V4xKRCe9yHsxyVn5HjmHy2Tdj4LyaPk4x4rBYbPKkeXDDdEGAzi7MjEvLhqXLvafmGaWXFnhrag1jZZb3L4QjNo",
  "key17": "kr8HhKgF5qUPvJmeN7wKeoTeBBBwaBVdqLBqeHPrLkFNF6ieDNZEcgEf9kmDLoXmqbpDE8juh3aFE17r1uiYaSe",
  "key18": "4VawEUXeEduPayGVc2vizkntCBzhJysxc2o2UqfeV4p6dHXYEKwFfSZ3Ntc6imJuh5fVWpc27qZ4aFu7Z2uJvEuK",
  "key19": "EHZMb2x7H3S5VjpZRZNPb6z8omTMjF7pyLbaPabQDtE2AbXU8w2ioghddqqf8Zchobtaew5kfYZTQ4evkEMNeVY",
  "key20": "3DCEAC8afmSSw3tTo6JyAt4n9aDrJF9sLMP1iY91dGRzh5Q1AQ5VPvzWWi9kybhsiBwWaTUaDS37JMTJsVbgjUDS",
  "key21": "2VXutE2skdSwTNfbUgbXBsCpQX371wVJUVUvpmuLxoLxfeoHrudy6za1kZERcF8tCWvCfxCzXMGYqsJ8qxWeNPtC",
  "key22": "52wjEoETuEshK3u5qtLAWYPXjikWGRSuUv2bPiyHH445vo1EjxSixyEMqqaGYmsiKyDeorBp2hTrBYCcGfECN1e6",
  "key23": "5yjxexNdnKeiwBKeUpN58CPSamiH3rNjv2se9c29SD8x5Atq8UfBYagqb5r8ThqxuRZbbG55osFYmRjbFiNxY2da",
  "key24": "4EPbBA2h1TvxcftGnNRHZjWaVBgesLcUB8tqaTHCmoUGxGcZrepaGXVSzkwCsL4LEqPpjShSp8fFZEBEkaBEXmvQ",
  "key25": "4dnFh8xWTraJxBegq968sCPvBNWJ9eBXM6M42Q6VZ1YVGSJRFcETAHrsxSPFrdfg24hv5u7PhiAfaeh2vSowaQBs",
  "key26": "2WK5m6hSmFT2qrwNTfsm86B3HQM38NggzPiEeo5tzg12Bm9tVPdua8sc1VuaQvvYndN3XkueeBp5qNBsBx9Kia6N",
  "key27": "2smDU6NBDVkraHAQwDiKpVWVCYzmHFsh8xFp2JyPj1rsjEW69Vfj34WJyKcMyzTeqM5gvqLvFVPWKMrtEmURxMSp",
  "key28": "4jFXDKwEFqD62qjTPuZ7tS4Z7utenKpLBqWRJcYhwxZKwfDLfS3kfMY4Yuuf1UGpGMvc163DDotyz7bqdBSYbWuf",
  "key29": "22AeXAHUpfj6MjEGjVNP9QqhyQfNefzv2arY4BzdxmxnCVhMVQxoyNTtEptnH2T49h5WgTgfxmbMYRzo4Kcs9jfY",
  "key30": "36EAWm5MGitJYTt16rv1xc8DgSvNKzZjr4qZVXcvAdxFgEPJCCexUTqhwbKTHezXzA9UKMaCy5Moe1hoRc4HkT6G"
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
