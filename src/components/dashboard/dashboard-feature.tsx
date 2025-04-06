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
    "3E6Ti1t3smmhkJESdHDUVzAX1HKYN7Q3ytaaZTaVfums6i5sDguLKvYuXjiCDYsWQFaLrf7ZRbwvJBKrnQMRV4w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbENkhBsWMP8yyHCKpQRsaDoCMkGAzzSdZYcYDKUezSTf4EFuhRnvr5sX4j5qKS4ExmnV9ATBx7FNW5J2UQRQKW",
  "key1": "5WvJTkgRMoHUkyEaTmAirWoRx4UJs7PG6T1WrN61kUJy65Q4vXwZEeJKJBkWdgmCQM3AEReaGevWQvZWgNPZ4WiX",
  "key2": "4jPNHnLD3qn1u3M2ysrCC4TUMi4GQgcVGfYwj5EY7Z27R1j4gUSM6MHUtESjDwUynHwN6C3jaMMTF5FREWXz3osp",
  "key3": "hC21jrbSaxZtThVV4gZTDw8JxVEoiKBeQTVFJz5uEJDxcVLswrxphN9pUks2tCJT86QLHrvQCd4tn5stFEZACaB",
  "key4": "4ZcfcEGa6VKdYyCkiFw8WwdvhKKkHyS3HgSm6ZF6T8aHrLtVmDbcNAT9qg1uYeTgThnVCAd9wiiAnGEqkXFFUmim",
  "key5": "KXHvAF4WFTsq7RbAuQZWBpMo5v6zCNLeUvNkbb7dJ21db9epGETUyUQtbkmXhUzCD256XqpXikkyN4Fd8giNQvn",
  "key6": "4jCgcUfwQsG1THW9WuDRhBYcmNokKeDgFbNHH9TXqygiBFMpCVuyq42Qv5EJBGMEWMPKPNNGt5fJJMABsc2uiNjX",
  "key7": "5un6R747Httb6HG76SGNsy1iJym6Hn495sYPRYgGtPTYQcvyQQTAJBaTNcaCpH6rQEKHdojKKnLHKjiBwrweLK4p",
  "key8": "2WJLTZmHbTXqCCHxi5ViDtRNZsjxF8v1gD34rrAL4h8meK3RvNXDgUy95suvdpmPxuwoJny6BbVZxnoRumEK1Yst",
  "key9": "58mLHAjPYRuGRSSevz5AFvSWRvLMuvUK2VPyeFBCLvKyyg9tVV1K4LtAvWuZ8xnrZDmja9qCCQCsVWb84NonGk2K",
  "key10": "5o31kFpoVgyWwVQwMgu2RYQbfZuzR7vgK4HEmdUbrvsSM6p4PimBdXqbgq98mVMxCzEBiAWQR73mk2CKQtyJ9TCj",
  "key11": "3gq3dvoAFH8hTWp1wwfCSHpDQHw7oywAuRtmzmLLsrNDaqWKt89t2GHpMEXiA9NAF9HeRETX8P1rJhwxB5SeeAcG",
  "key12": "5P7BdE7fCoJYu1zqiYE9Wx5Hb5KVZk15DSWzx4QoyP9jAFgzpXygtRkyR119VW8k4VcchhEfLYj1AuDHwCQfbRgH",
  "key13": "3LmroVWjg7gcnwdKwWnSkPt96cYUjJFsnXwViSa583VQoB6SNGnNSucofMKE7VzfTBUubpAcNK5mH4H3tDfpd3YT",
  "key14": "3Zxgg4Jw6igea6vT3rjTcnEyKMbBX8WqFDdkKgYztc5QwHKAMuaETD6zXaDx4hLQxZ9SzQeCTmm58pxHKs6P2LfL",
  "key15": "R1QtSBRaSKVjJF2t9SfvFwTKi7tZA44XsxvASxbrejcc9ARosXYRYk4s5VAoLVtKAGzzVFMutGKeRZEvW1hxdc6",
  "key16": "3DupzuJm2PhsijrZ9orVP3rVvbWLAMsA6B2hW5omWmnNNaAtVKUNsdr3czAQCtrpRHM9wU1a869GJPQiCzK4aorD",
  "key17": "oFV5fshJ3Pv7TMigeCtWSgnRfmN1uGZg1NR3LgXtyk5ZZmTTvHfVqkxHL6y1HiobSH4Yxr3DD3SEP7hnPG3K842",
  "key18": "3sR3HL4PdxRnzw74rD2Ccc1rA3Vf7VxfELbs4tJ4LmfubF558Ux9dqMPLdMFrMPmFkv3yDEJXkPKzxwmY9PcDwbA",
  "key19": "41cdk6baBnknK5JQoNV4azkpZXYUAckHkj2sGHZTV6JHmsZPo3EwBfKAyXLH3sfpNUp84Kp7prDqno2ARgkcUKc2",
  "key20": "2P3fPCG2ZFRVVPx12XYHcpYeYA3azVP4kMMR2KDimaWDyXmLF1NVyhxY2gR6jYTFW2egFDm6b2K56e3bPq1ktmu5",
  "key21": "59YWKQJg1Y2vawvtxmQtcdzmG8UPmZQMyW4ozh7GuV3oETe9SLVLJwNG3NKz62bJ9nQkjnqBPvmTveu9YXxFFN6c",
  "key22": "QnnsNB5pbXU58SB1QvNcE67Cv399sCp5V7i9by4GyWRDKSULJr5VvhCoFmsFJVnXtdm3k2ej96DrZGpstu7Ft2m",
  "key23": "51bXXtBd9YtEWRRqCLzmfDCQXSEJJJLJpkni9GwkkNQnkHvuemgLaZs3hcn5E6EHpHJZSmzCo4VBLoUdZ6fiMh8H",
  "key24": "2N8RD6xxxHTeh5h2CGAKiC7yVY9yXRKc6YVbKFithiC4nhbRMQXmYsVQMBk8MKhACNZTHtfiLt8zH7PPXJWFA9fM"
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
