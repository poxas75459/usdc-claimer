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
    "75Q69y2NVepYm5WQiEWae3rQyuuWbHyJmTxeSp2D1223BerF7xZCwezU6kShuihtBHJcYKP5tebAXdBofw6REaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64RYoQ5AKBQptMx89JFsjeqGwwSGuPKyDZ5Z2eemEf1XMG5cHze1j9hU5DUzxELKBGQeceBZU53yirdnWrRukzyo",
  "key1": "5jKBVNKCKPiPVTqRyuf7fbGRLomruPusGwiNQqiL3XPMupgbDP89sKDHnAqf2bZRg9wYmh6oJmm8PDQdzsm6Skin",
  "key2": "2M4QqpSRFZG479LSkFpms87oncFBaJKNV3iB9J3ZL6qUkpLZJiePbZmibV518NxuUpD68aMLo5Lzs5Ya5kVcuR3i",
  "key3": "4bY4b35CYiPcXeAqMLCHLw2tjJ2rZqy7Q6XmV2VPnv1CxVnCtDELHZ6YUhwaBaFm1YJm6DfkkotpohrUfupLpzxL",
  "key4": "5yPcXCaka36yPx1NbginZHap8ekYCqMmcLU8aaLzkMgmNsKnLzUNcUDFbuSFuWGh4aTjTTWsTy1gCwDvWDyNdfh4",
  "key5": "GK7jS3xNZgxLKuRJerdHTFi9yvups8NuJKkfHNRiA1gp8vWB4Q7GTdWg2yjBpN36XCcsu7ckEsyTbowPRhWb1cD",
  "key6": "2iSJtwVM2CP6ZcUvDuk61FbcLTkby2btF9mNyUZSzyefRxH9qMka17Hq9yXafpiEHDwHZiHBeS9o8YdCy2PQWJX7",
  "key7": "5SPNMWcBVcdJAsFVGCBY7vJS7H5ur9vUBioNHJonHAQWoshThHqaUdhAckJEGEmDz8CN4gSiZYa5P71u1zmdpw3L",
  "key8": "2R65hfs71TXAzyQ47cGB7Z7WtZy9WWXeeNg5dSnrN8cUC1fYf5hQZwBNoLKS8TzsvM9QVx1Ynp7996WmeDnGmNz3",
  "key9": "59M5yTqSAFAf4twfN3ZBdmyfmsNKpVMMZCKe97PTXXXYEr2jwsUsXgLZXWB8BPR7teQAupXS2EbeUJEzHAW74V2v",
  "key10": "2yBkxxJK3wCNZW3Zy5bamWpDxNEUWnefvGr4jcNK9g7QPCNJunjk7qBQRaWWpKahhtWnR8zzee7JFgAPpDy2L7Rn",
  "key11": "4rXmaRmq15Y4k59yqtpiHqdiAc5PSXyjd9Ths93wyFCgHABiFVoDVAq4NEZvx34vCUXvPZY8S7ygk6ZrNM9au6er",
  "key12": "5o2dLD9rHfV5DCZsHSdjxqUdAaTDWtgBnttuw6KQ6ysE2pnEeCFunnX8j778pHcFVxPicqoCKHi9fUwbAAnRjVCJ",
  "key13": "3vuJQ5sp7rL4LjxV2LGTFkZr8esHQgw8vCvRcdzuADFXHuKfHbjmX9oY453VBydVMVbVPoMVcdovsCzNxjErNBPV",
  "key14": "3N6YK6uzn3J2B8WwMM3oEdKyDaNgprwpBrCVRwY6z1JKSPdM93pLwPyb9AkJLsm8mp1YdBUpdbutvnnDuuxwY1rG",
  "key15": "48XSYZYZEeUxiHY5dWKdMr8HizkfmnX4qwFEwdXokBFrY8Ge4yY4iZhi9hESxXMouLM3Pf3RKQ39yc6msqXGUdxm",
  "key16": "NFYtLkoMs6toejn3hDG6iUJPVBYjP962dRNWHzqrGrA8Ax71yMvNpzjNodHumnwu7aAiipKDnUsnZG2nNa7Y4T7",
  "key17": "4uNALH2ZrgwP4bJhyjiSmh19rwc6SD2sJRfK6ZSieeayx4hp44KSeyu8GVxMqVmUUaaTi97Avvqr3AeWg1gzvN5t",
  "key18": "48ya2fNqDWWxgaWfdcHR7Z8b7gc6E3kmeezBsBGJSsHSBaoJ7PdgdwfLAotJDBg2Yxrpj4Unz2CVvK3g28ptEJDs",
  "key19": "5Ejz4tsfHstpUiu7E7B78KNJctoo6Xv57TNEfAG4eArPy2xrvQ29dqCn1DXAXc3jmCriMpgyKN9yphJteuUUicL7",
  "key20": "55qLn9vBNtFf6ACwmjvWbfzJpBhrovUTAfECPTFsvZXB1FrHpBA3Hvit1nr3ymrp6M9vnA6dpqJiBxZUtEYDGiE3",
  "key21": "3Dz1YnwDs4cfdpsNrhkXU3RYNanMHGMGM2QBNFtP5BqeNyW1Zv5F46696VzJN1PX4vxnZHhKZ9TwA64sBX5Yff9t",
  "key22": "5nyucnh9pvE8ubqn9UceQhPbQk8U5dRTNYMNfirWGsYYFfiE7xqSK2EQtRKhizZiwfi9N6mgkiikGvivQrL92VbH",
  "key23": "3aLduk2pMrfhYq9xypt4cDSgkrPhTS57m7b4eixBbK2PUbQS5rpvjDqUXYucHYTJh4ZLaQJ66oRkxWHW1AJxU4bx",
  "key24": "3KwJqEi4bhUFdyDreZxdLLZ8AZxwiC5tFxw4EurENoLSGZtVMt9zcnXEL79hwkf4DFBaotcPeVpckaPEV1k8qhU3"
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
