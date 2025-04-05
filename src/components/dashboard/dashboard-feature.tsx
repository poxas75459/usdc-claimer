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
    "2HQtLub7SfGXgUJLuzs1irPhXHhj6HDyxLKuUQF5qXqFyRE7RfYo5upoPNGiY38tqsvF6ZpXZ9RqUFdbawAzSpm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNpVCpRu5EfUTHS1U1o15Gbk5ubEwxCVVxCXMuDon1Rpqj4T4HdNw9we3Mdn2KwWqgj1XEP5zrjj6by9CA7mMWx",
  "key1": "2wpx3u8Z55RUoYdHuc4xovxLuAkT6ZjrUFd5JdxEvcwiqNthagc3dNBETUSgvZYzRPWfDRALrpyYUvG4p1TroYy1",
  "key2": "3CSFri8fh5CpXU4zbZEpvXXQAXRVCCexTZbr6mU7BQDELhLxktRKaGKp9PcxNZHSf1m19CPvjYnqimNec3Hufqi2",
  "key3": "2YcZLcVhti2VDP7syxuY5JpGUQYfq6b8Spgmcbds6GzYG176e54SbHxPSjus2Si4gz7yrQyfGP42jmazPVDHmNo2",
  "key4": "3qTEBYmJLuAjki1U3YcvGBp7CSrpoEB5mCqLN5kQFkrZ7bKoRLkWHoarTQkpr6FPkRdrMvA9Q3344fxeAWWPxz8v",
  "key5": "8hXzj3QSCqQ73AxT12F4Eu2mHxxZeYq6L9kRWXmYCJzFF5oQVKAnWazZkbSTvQZSqatHAN2XkNFMe6r6736TzGm",
  "key6": "4kZYKn92TmyhRMvaMWCwDMya8smZ9Pm7y5TTVyLK8a4nYVY9z7npU2zKYfjfuLHrfGg5jQdgTLYtk2oHMJ9LY4Go",
  "key7": "a9yGjoffSw1Lrzet3oNFVqZdy2Eim75Yj23CsTTPoqFNFZRRrit3o19YwszwufSQqKA8EHjtXrWe3WVXDZNwoVc",
  "key8": "4qebTVF21MmoAkeqpbuUTzVSf4BRDx9YpVwdxzoXJDVLph1kytLHUjX85T8R71wa2XyYiuKfn3vH8fPtELzXkA6w",
  "key9": "4XPLyzwXamJDXeEpwL9f8o1bn1Rio5z6bNSo8L819L8SaL1vDUMQfTuLiL2bjBoc8scjYts9ox7bQb5fuSjtst4F",
  "key10": "2ZEjKjNyC3ARiGavJGTGb8PX8j58gzyazHBrk3RVoeL8WRsoFqK5ejAUtT9J1249CSQcm88jKWSKsoaJZNad7Jox",
  "key11": "44sGR3iLFpCHqvmpPf2ZfMBSyd5xxTAkoBBZ3sDwmu4c9kKEix87cGYugJxETT1b8eqGwgbvNE1brXVRFrDvztwJ",
  "key12": "5f87PJghMXPKmr6vAwvD4e5WnHnaAGqfb4DRJ42w7UUqgaNfZRuSMj52coNzgZkskRLyeUENUf3npcGDd8fWJeBw",
  "key13": "4fSqvFJg7uEYPL6LFeysZaRQHBNApC2Q3GwVSKTSzDiUqob3zopkvaKiHk49wjsPzadzF56UNNwvQ6WMArzcnZc",
  "key14": "3ggas6ooEvEHS9anKx4sqtpSzNmhWXf7MtgSAagmxg1VwmABeaXRErJF3pfbDfjapCWmbpa4gE2Mmzk7FqJcQTVZ",
  "key15": "5kHrki7ZgQptCx49tVrvMusR4DNMtRyPUfgB3pRprsLZtAQXqskuwmaRiQRB5iMSb1kfN7y3dikpWL7h3ffeuxL5",
  "key16": "3jAkCV4i3WBfp6FvchfysCvNJLsfu2sctXusdSu1jU4h8Zkkw4ssDYLi4wggguViDvny44u4xrp3n38WDfnRzSYz",
  "key17": "38ANfJDQDsNGiism3CRxAjjoYC5TMr6gpCTG2mkP7p1hEjBtEKwAF673Qr71xLnMHcKTJyv3btUwfubKMrT3EWFT",
  "key18": "25gQQuihCU8hKa7unoTUE5PhEzQgVQggucTnrTdZBxHZx9hpYFpU8qurEUt7KKk5PtW9NaJjxJKEMzbVqTAZKhrm",
  "key19": "5fSFLuirSD5ypBFc693XreoVjXxZ547SyYBr5g9xA4dk6uuhquG7oTmkwehuL8QEW2kbBsJ7SoP1VeTTvv3N5Axg",
  "key20": "59xNG8sH9UAmyVDbvnAxYpasQ13HjJKjYLJLtoc762Ji8Hxfbnfs7EyoJ8e1njLW6iJpGQKCYgXHZh4Ry6kPMUdm",
  "key21": "5h4C3gc7TYRn5h4cyNnGnGZFrf2q3e7YUm9wjJuuuu68VUQcg1CME5GzzLT5VentS3y7zJv5MLDMAjmJwFrxutdx",
  "key22": "2n5HGhEzoWzYUoqNsrfH6jt6HW2zbdrPfZhxioF23ZC4cftNRRMgJcERTnRpEwXq7RFeHL6CocPEdQqEHCnreHMB",
  "key23": "5v1PLnoH1wjf4JeHrrp8E9wYaw7CaRLWnugR2G7yiJdkbV9V13S82HfsyTSv5XJ3oT4MnaxWPXCsdC1Dg9qMQhKY",
  "key24": "3aoGrqyCeMeyNBkVYQ6Mf7brXzSjC8macRvzZ7buoDPraN67ppfmGkAdgt5feEJYV76krxgp32sweyT815cw2x3J",
  "key25": "4LhnvE3nR5tKCBjVbZ5s5dTBxdJ5CYzWc2d8V4djRiy9htgNE14Rqh4tbkV5huM4fCAjtYXWneCoLjGefSSp8gyk",
  "key26": "LL9Mp7iYJvhecaYGci1GQSeJxy2j3i134pYWhAZr5aPwPdT1YcYmXBvZFwtsjFE6MSGBUYV9gjr9qb6VosDdrfb",
  "key27": "5nos6b7gAUvuv3noFUTVKDsLnwc7E4hhkpV4AKNmG65JPuFqVWqW3KS3Ueji2YTH73TgXdPNRSYtQge2Ju2HA5Tz",
  "key28": "3hNPZwzBFES97P6ofU1i6FjuA9fEDYLQsCihNKRe71GrwuDSeuUvXwueokmWhpniePg3DbnZmd3qRk5ritRbmFJc",
  "key29": "4oEhzXzEBsjtTEMN31f7gFfAw5VkQHfNt37y4a8rT2PB58GNxwPHErwCTa8aMePnHR1bdvNWtX7uQRucMjYSxAVs",
  "key30": "2vb6g2SFYdkkkodLK5y7v6yHrDGALs8fUHoAVbHH3K8Vs1paihop654vNztSuxr8NFoq2p8RC9sc91eSnVKfvPvD",
  "key31": "5NbMdqinReGYtNeQXmqcYQN1F2uYw9FX9k1niDGQAbP8jDXsACgxFV6xodgCbJ8Vk1m62xVQ2VDpe8JsbDnAA6Nd",
  "key32": "47Xr41tkYLEfdf2cyRkhDmkXeKmq5Ugbk6EAsEW66u7avVrDURX6ntgUYraGFSi5xJMKwYRKvoZYo6w5WCMaPdA"
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
