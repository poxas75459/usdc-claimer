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
    "v9TybtPs8cFiXqe6WSNtRCDbcghdTmGsEPVe64zrtjf56Lu2WEuTe1i5jWaqm6Nqg8ptbgeWHoJKrceo6v1RszG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328ghZxYoQFS3RGPftNrFG4bpansrsXEPxmRnNQoHBhDGCH3fXSmYHjPoJbPX6nHEnd5PSCQaMQVtbgvcqCiec9Y",
  "key1": "aF5WMXH4H2hh9NYWBfPwexaj1giKnVBxHA9LKgvjFF6nUVCDYZ1ThGR7h2m8SytB43rraJA7BqBQLULQamd111Z",
  "key2": "2FCM4gX4MMXrCT4CFinhkG4zmWp2Biw6Z1dXEx3vmaijQ3AGExFAsCB7LuVJpXkjk2WZpZLEgafy7P6tmg3TQboa",
  "key3": "2YdM9ybhq52wqq7PAfrXXhvXDF9o1NaAJWvVjesdaXihYkus43WeT4YkMvhCQHBMkteWgHhXasBpEuJwBppnUyjR",
  "key4": "3PC6fpaq9SwHg5B2rEBVHLv43FgoS7RCTGzbz9k9wN6wcHAbWwRZPLkjd87MeBuAmFzV2eAnJiqTqgQrag6372am",
  "key5": "5YdEx3CYgX3mKz573E7UEGVv56ZdRn2zMQP7PCSLYayXsp8ezLEn9VdEpLmA8L1wMViTXnmTw54rBZyqyZtbYmLV",
  "key6": "2iN3h5EwHMbnXs2p2pWTrVCgrRFPs8DC1x4TA42Chb8oFPw42ToYUEDeWCBDjCkbaRNHL5dnFJ4Pyf4ar42HpHtz",
  "key7": "4jqh8ZQFTRn8QNisUGCmahaw97a6TA599ZLdDUj1ozmLYnRkC38ErSQg8ssb3R2Ux3sXHu3wJqUh3Rv7p76gthK1",
  "key8": "8P2td7HP2vyZDRMkqBjjCT1rUbYBVbzsPWiVbJaLWnP7NeSYjA32ZkA7aJCya8do1ZQEahUvPCBF94eTurvhcXX",
  "key9": "3MYjfiZ4rNifoJBMk51R7DrNLXbvuwBNntKYbqp1xCQhUJTbYqexMxgN9yAU5165v2DKL1VnkvsmtHYjqdV1Hcb",
  "key10": "27XijtAJWLBcVzZTpnfwkTk2yPRCkvvheMuzyjTc5WaHSvWtMgcVBhrucnpf3Z4tmYQwdmiwK2wScsUFDUYZvZPs",
  "key11": "3T9MCL8NJXXxBBn9GvNEFxeQxLBq5ASqKmHcHCw9rivDXhtfD5ysSjRa5wqidxyVPmYmcHtKGkcPK6iEHN6vq2MR",
  "key12": "3nuAWo3VZyU6yESR6si8VvDpf4NU3Mw8t89t8kQ7tHorQaVEapLXinsHSzagNWvpjEAbgKCRpXeEdrXNcKwB56wM",
  "key13": "2Mg9LXSeqY8s8sdsAoZAt1EAeyqNciYZrUgr64MZSFNxMSB8ikPHLo781TAbnE9UeB7HySHPdrb2FFWoxVzWVV7",
  "key14": "5248C2JVDAeDwsanS8MncsLGBzgEFxGmnZwmQctVcbv9Ea44g4wjqKBKc8uExEb1CBjEeprU5mMHaTgxse7kiyG7",
  "key15": "poZkxkiTQmgDEBp6Dd6igmeQsfrAkkh6p6h4TKEgkXtNygUiMYeEMF5YhfifWmTs7RghgeFBFhrvzXB1N36zMoa",
  "key16": "5MLoDHsY8c6G5sjYCKTWWRigNCVM6A79fYtgFveH5d8etkQHJVLm2RHEkGnrT9hGzoubz9XPeTvr6TCMDzpeDwNV",
  "key17": "6En78bfcQ6iUgCfLe85Tj5TidTRQTtWRNQK6SMRAV15128hLBAEKkj7fJShm3YrxMHvmUQataRqT1pD4vR7mndr",
  "key18": "3Mqwzxd8eFBBidjEEFih6mPfyMziQQ8rnBaX7Q35jfUPkueVteVpAPnrULQ9h4ZZuqJfhkX7k4HTZY8brN6Fw2Tc",
  "key19": "5AvfAAqmmmx6xypQLdipZzDxy8CcvuPPiqU8fKwVCoeyCf93wUyNgAUdsCshGixkTtjXDmeryBuyNYDyvBB2UMHa",
  "key20": "Uw1jna8TFW61Xn8sTT7njuNUkLVS2o1G6ccizbeHnzfG1mveV5trXzCDmske6PHrHpAywktdrkgD514SCK5yiyX",
  "key21": "iznKCj9YmCTNJg6sRqB2wYCK7fKq1kXyfXBDtH8ZjkktB3Ee75jBhejszQGWkCEk1iCWpc8jif17yGu8HXbMmow",
  "key22": "34ewE8qBbcMdX36iSakrmLu9oV9SkSgEY4DoNtERz5FhvbsspgGJk9i5jF3XWS46FCvNR4joDgevFPSCVnTPkBCE",
  "key23": "4qJLttke2kAVcagLHmZLn3Xg9xibhT1XGo5e9wSS3fyRkWH3PvFEa926pYGeiq6aWVSp2JyvcL78JkgqVZ6ZevFi",
  "key24": "4psBmQUCphXSV7USqrCpDUDRisyRTCAmiqyu9kHkTQYwCZRTMTvLpKGthAKtn2sdRYh1oQGnjhG7irtcgaubKxz8",
  "key25": "3h8ayszrED34SfSWLUdN9MaNt6QPWZa3DpTp6ANAoxpbCk1oE5cQVHvYNmqQuRX3gQVEKLLmreKsYZ9nFae9Ri94"
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
