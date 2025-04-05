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
    "5NDaG8fV1aGNqMobGrsDdNsCjXMWhkKkybZnstAcX3k7euQ1E95vDWvN9UGTEhwn8tdY62CtwvRZdrLJtvzQ8AwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yon96T4vo7bM9jnvacY3uELpsUkeVa6d9Rff5y7bcZnrKq2iy4CEMZ2uG4B2E42cG4UJm2FRUQ1zBzp3LFhbzdD",
  "key1": "32mzPc7nbkEAZ58JBwLY2JAcFWvPJ1ofkSVGXWn2GUbLFULfzXEQ7rCG5W1f26irUmF3Ei4Vd6UKs2VviuXo9vw9",
  "key2": "3q3EQdcA9ddkZPS2XDHK8vjVruBZxWh33VHyR3WUyKTV4yTZLwWkykXcbaQMF9SWWYzzgaxCap3cRNp3GwbHyfpb",
  "key3": "3HRRE3HE16PUv62FTiEEcniQ3sMxTpPnr8CK8k3ECuQkq3Qk1TJT1J92A5JmKjn1B3URpku7bEwjqnLq1mk3Qnvq",
  "key4": "616C31bayBsQo7fbXxJYpfUSYqJ4abd8t3sb51cYfyFbpmuyAJxrJFPPWxhwn38MRtRQ2p4CT51hX2kYB64Xnyqv",
  "key5": "45EmYkGPT3ZnNwZi335ujhq2Y5D13197PmV2ueESA4GUfECS66qWajW39FNCMyY1L7a6qbtisFD3DAVgHobLiR56",
  "key6": "3uWF9PeGbvEoELeeJz18YWrJ2TxRxZiXUXDUNL51ab3CsAHDvEuwKE5QkxRT7WhZdU7tVqKLq6CLhvdKHSHMv44i",
  "key7": "3FV1JE3AQAxpsj4pJAv819xDeeiWUZ4DffyBz6xAXWhbPkb9kjaMRnW2FHXCfEGhCt3oFFgRyJdBQ9Er1Zm79hH5",
  "key8": "214bP4eYiEpXTtSkJs1rnUbgNt7RY5MYe3AQMaJYdZLzdi9iEEz8V8Z2a3sJaishnkbXm9LVgc46k1Cact5RmrJq",
  "key9": "4si56wPb21e2Gyf4NDemMvL4cFBshG4jDCbz42TpgYdB87FawBJaku619W1BJjoskSq2aaxbHvsAttgoxu4wWMvi",
  "key10": "4SR2UzrEH6771KBHBLuNEZoRmNT9BLue2HMM8ByHqnAt2L7rHvrnEDUu5m71Pdq8NhLVnD5rDwPqjvFi3dNCdGYw",
  "key11": "5aiBPjU7iTFjck6dVepWej2jtGbcMaJNeJp6TMfj5u2TdWaqh7rebJbJDBmDB5i1RtKGE2R4jWxsrBEkFUGs1AVs",
  "key12": "4n62QAuvDWWrWKJcvva9b7LLJJESSnLMADuJQUC2hT31Gh3oYZfSqyYXy4WL4sRMbgHwmfL7vHE3ttHgNdsDRY4q",
  "key13": "dfJfQZp6yQXDSYofitcea9xr8S1PEveen4rVqCnmTkkhkP6ekrziHjmQf38Coo4v2Adn93S4yQQfPHCSMSMdWC6",
  "key14": "4bMMZtW9jLehRcfCRH8B9BKEYbVzmJosbwr9yxZHuyswPD2G3A9qwX7KuFrxS4sxT3N8nkFZHPBNECmaVYMMCGXY",
  "key15": "3SCXf2u3MwxgDHqMNji2eNs7REvu7VEvjkqZyXrm9y85KJi8gnJ3reTvvMFVScH9MoMmbaNx9qmHbq5hhjorj2Aj",
  "key16": "4pMgWYACXAb1X7J1FcgAMohDTTXL64ucxsXcF1MiY9wdcKT2DWggxZkwCfYyaYvnq2C9nqEZMF1gmXQAyes4TF9W",
  "key17": "4nxqgFNS6LsdN1AsRAaizaNYm5ecfBLuwKVt66sHS8tHm5RUV2cZLH99T2r7GGjYCgC6fxCHs6hJqc6oMv55SGL6",
  "key18": "5E4yHn7UGKsco8xttEXfFJRtZStC3aMhXAjEC6B16eZiwAbuH9Nz6MFJ9mQNvmztSTJBSHDD7BXESURys4HwEMpN",
  "key19": "3cqXuUYraXhcZDDvAMh2N5upndgYJsNqi5Hy4SCr1EXMTPqtoRNzdaEpoTBx9BimkX1Mo3SpA66fe5Zwav1QNLpm",
  "key20": "3cwhumTWJp8Y68gaCmZRG1ywLmNE5eZyUmYy2a9UZ7sg8SFSkmRXpu9PjLQkwzyfGZET762k1h6zwM4e9KNKkuh8",
  "key21": "3RCEGKeMPGN3zXaN233BjZCqHNdoY5pvQXVrey5cGG1TVbXbQcrvJGDh34zqApCiC4AAYEYpRaVb1Ey8xq3nmhfd",
  "key22": "4ULCCR2u49twRNJZjfNGy1i9W7NYwRZbeGy17EVDcEnztK5uPkjF4aaMvPg9quv5TRUMQ8oieAoypRdvTsDcX6ed",
  "key23": "gw7UdXtnNVuriLMM8iLityoiWpL6DCVC2YiTLXsuAP6ibS7jMzocuF9kCDbxLbU5GNpACHpf1ZSPccVhmjc4qKH",
  "key24": "5apRALhDC545YRSwEPJy4MAkex77fZSUJDHsxmfowKamRMWM9dwAh34MLAgaLKdhAPVPoygtCiRSUzLs8FVeyRTz",
  "key25": "28qxW6FNcn4bu7oiaZcS9wae7gCYAEdpfD2iywoUR7qGydogDu3b9Y7vr4xpUebzpAMyBz2jd43doMdwAaahkJNj"
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
