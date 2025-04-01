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
    "tmpKejHgAzSwK5vTBFQjU4wmvUpBL5AqJn1rCiRsceyKCt3WVmdqXriAEgu2tDobDzb2emnMBJmJU8FyvCuCunc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFusZmzMxA9tvzynL9RMTaiKigZhPQASbxg3ZETKYY6zU1f4agS9xZvVZ8RpU9sTxhtRPES6AuN2pDpisS2ZdRX",
  "key1": "3TnX9G15MJ5PZyiVw4tbmopViQ1hrF32yrKKKwefyNVmdZPEciocSou3CSYmdVXJagUKmHwb8Mj1drXNNNTUPYvh",
  "key2": "3zmcwUdZSaHRsRvDXE8apCRhq55DZY6FW4VfswCycypvUHUSmfNL9JLqRzDvsBTDtoixcJFhgwKcEowfkhsE6MaU",
  "key3": "4RAUamkatsHrTDiuM23PKf8XczAp6sUpBWidUEitNJotzNXEtN5iThebMvQRDaYXCJcSwiZ9Kn1Zuzmqrxc7vJYi",
  "key4": "3NQ9s947CY4Jb998dUpN8J1XcYgEAGhWArZn22oQD5nHAyY3CWNy7kdW6uK5TCVvBENN7B8HvQLsnUrUtdaAsUqX",
  "key5": "5bUuyQevvcfP1pBcbaAzyj3ZHtuKH84sWPKgEB62HReDQZwL245aQbyKe2ugZranZrtSFzGmfERgNFPnfm79VkZb",
  "key6": "2ixMnGEu2Mjfp9soamYLeddpu89pwXyzJDbqdJrVhqbEvsMMsaQSBBPdCDX6zX17UEgD455pWAQLGPPXjZaXaWdd",
  "key7": "61A2Rjq6u2PP4rGgCHwGfnJn2W135EUPVsYfBuFaesj4p2waGF53apnWfszQiDrD9fLiGNBXqJLQ6QD73K8zvUqa",
  "key8": "3ABM5PCVHKPNfahF22vqMeL7NePGiLedH2zPDJPCwduSbzb3P4aKYgh7x2VWRh6HLM3NihBVb23UKo2vYxCZT4sC",
  "key9": "4mvyjrTYNVeiz7VTuFDcZf7Z6jjAkMPGpz7NU9GLDpZuse4T1A2yjM3UnfrRtbELNbY7d183r3Q1bZRvKqQwxwEi",
  "key10": "Joq5wf7JViXugJDDCGidd1J7SB4Y2apVfaBy4puDwvZMmeQzUvwveWAyLaNSmJCrFyZDJmt2Pgzdbe4uUqdBK8j",
  "key11": "3f6E16qZjhAbbJ8J1gcRTFop5KrfHFQXe5e8NEaRWXVJsDSbk7VBkndYY1YfsagFnJmRmLmsLMQn5tMJ2MpKjVG4",
  "key12": "ZPsszqXbdEU3znbQgQyoGCHASMkZth76jWihvdnGrkSexcjsW6QPYo7q7xe6G92NreEMi3FhuS3bvvVSFFqSjSb",
  "key13": "4cwnwyTwf48fjUzdpJDc4xEa87Ab2LD6D5jUCgbsQoReHHswXp7tiQASNfasiEWDGMGBtutJZZkfESPkCQTJ45hs",
  "key14": "V1vq5occHJ3t4Vj6nt46y317kFbk81oGRAzrUk9Um8KetskSUqj19xBoVDDAPkT1JfgRGrwDFA8mzK6fH8kLSBt",
  "key15": "5yiX8sJYBr2aYpeXY62dCNxaS1k5pDyg2N455VVzdZgskNu6v45a5zj2nYQwUxSGvNWUJgbVDEgt3Ub7AQGQPz6D",
  "key16": "5zEny1acuG2jPvLNknN5cxnsjwiCM6EVnavxY4916z6San2JTiPQhdhPKYpiJ5apH8Bm87NhUYdr3cfySXPezrQc",
  "key17": "3GFcFCsFp6mjHCq1NKc28ot4DoYvjKue6Gc1ZmELbCQgNrJNmAKL6Jy2JQ9wYGrhe9vg6LfeFpWUHSEPH3n95LY1",
  "key18": "4iXRGjczTB7hSKVdpiPsJaoQCB1Cs3Y3QpqSeFX3qHgatvYkTFiDofDv8tSuxyPXapBcq3jEecFqMuKn71xRwuAj",
  "key19": "2SNs9ceEAgPD6C35C4WxuQtsfPe8PmYgXzHBGdBBxVJUVssirqvnWA3Rjqu7izZRcarcNVRjAev5eqGouCdz8F4n",
  "key20": "Ws7xSHa3b4wgLzPeevFULvV48xfsLZpn8X6z3z5BtU8h1Qx4N5j4E8iiUbDLYPQw1bsDGXwJKH2t5P5F9K6er8W",
  "key21": "4Pf5hHQt1H7zYLy1PVUDhEZrEwxwkRM3XsVV8aaRnANPWPYm2jDeW5Ra5cX4c9QBTLbpHUhBGoGLoszS4XZuxsz",
  "key22": "3YoXNaPZdFKojdpUeahVmSK6UN5xKFLHgAVoQBYYyffgTatP7fSCeXxCD1q8Xc4DXRUHWMhgT9kxthewjBL9GG65",
  "key23": "3BeQNnKwzyejV8gsC6gNN5v5LJ6cMLorD4osCBmVBKihfFQhgbUe3wXntkHvt7iAFA7s5eyMfYsidCKignTUWFoc",
  "key24": "3N52R9jUctcPmZWLBHpiUWtpPDuGZE6WCrBYENo7K6W2V9Z4Rzdx8Eb9qUqHToo1DZh6UZC5j3c26Pi53PBsfnjk",
  "key25": "3YHj31QiVmWyHzkZJZFuiVEDWSUwosswZjumEw9UC7isJvtchCNW39NjdTVdY6AV8jWi8pm58QvjAEW3zGwZv7TR",
  "key26": "5YcDj6AnqDh4Ch9M7GUFaRozee3JJLVnKdku7QAaKqNTJyZyJErMvHYPTWhWya7ZogXUTctpyxsbe6WxZBaNoD4b",
  "key27": "4ukW8Tn7y2mYWWhj5GNeCMDJ6THgS9U6KuTPPq28FZbBX3gci7u6ebV8W8L7E9xDe5K8DxxiLRkbRUKiZ3hcUL8F",
  "key28": "3Bz6ZDTFcUPNpYEm8QwiuWdmQ9RBiSuzNttETgs1nL135fSVo5HrtGZygamoaJvM1d3XYM8TirkJRcGQVVxZaZpU",
  "key29": "Grnt9SoUNjnVo5qDdD9gn43HFCNBpMQNncAXyp4CSv9jZuBHxMwxWpLCMpMsS2FmbUZpKkXwVo8WEbT7vsU6Jjg",
  "key30": "5jFmvN6qA1eCuzR2BdqLgybt1zDqXEAdpgPSKPmBuBGpJ1qno5prFrk6TdPfyR4dzr23ri8siZ9jW35smWP7QyVE",
  "key31": "3gTLvoW4pQ3bkjpHtJ747bx8RX57arGca5r568XDwN53FjhgQgDwqeYAu9aWaoFBdqTU2hKLW2b932H8qnRbkFmY",
  "key32": "NY9UbqHuYfxRxUBxCgvXEb2C5ZyzGyB6BfXGcfFeZSQRiKjJ2V5ittungSh7udrzw2P44WC2MZ5SVD7N9AUGGs3",
  "key33": "3XsYwTPdPAKnqrhu4VG6bNyXt7hWqSHC3gX3xq8m9JKqbj3Us6ZYPTAK1hGAahsVmo33noQBHBrqyVrKDr3v5gkg",
  "key34": "5ADznHV1TA6J3WPEpwYqvAkmLcR1qPpwio7j1a57EyLEmfaNxP8vK3iBUMj3Gq7wkz5RRJkGVyYtUongV6pEFR8h",
  "key35": "4q9E2LNiJgnb27tZTR3d3x75zXRscJavW9uiokoAkGp3jKVTLTb4i6nroDuY8m11ytmhswACeLF5nrbDNqpgkZLJ"
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
