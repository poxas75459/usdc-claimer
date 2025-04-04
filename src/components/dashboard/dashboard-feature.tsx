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
    "pmEaMR5TQwhgZpqoZbyjSSGYcpvUVbKyiyFtfFQauoTiNjsPrxoqFoZeCWR5KVesPKbxpzxVRjWppERNzUfovhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ekz2u8mifKSLv4k5yyNzbTyhAZYSKHA5AmqoXBc2UwGbSzpzFZPX5pCKQ9tySRzYR3cwo3XiXMzhXKCaSi4XB6",
  "key1": "5MSuEQwYid1sfXiFsGukg3qSq5TztraSpwbgVbjSyqqGhPWPcTBmziQGBJ9AdC83HC6hekJh2rcCEjNhAXkhoWND",
  "key2": "5ZV2bpnSkvfeNNSLwA7zn2rBrLPKRbjAeNukD91NDzknob5JVapZbQYF8eMA8UbyTwB2ynQKYuw8USdTEFV3Hf2B",
  "key3": "2TEtCvk5gjZWYWYHzFdyLiWHdj2h8vzcNoL1czZxxdTc89An6Xjiz6Q8iGZ1odU3wQcov9GQPDnb6zq6uLCUUNgh",
  "key4": "4oYMt9bXkDJvukQqLvNk4sXpzuWbAsX3FCUz7w2bQyn1rvfQinLGJKncdjNRUZNFteNLje4e3znGUpeGJ1zEbwac",
  "key5": "2Z7NcQ6TSQ7398PWSthkqHrND7ga3hnx1HBNAok1KqaZrfETQZVRHqkzxNsWMjME12k7ScHwkhGcSM8G1jyTresR",
  "key6": "5x49fhkNqavGMNio3rG7H44PUGT1oAL2CcjNbceHdrvBkTzia8yUphLvAv29CwNUQpRbQS4CXfNxCCWi2Dnire3a",
  "key7": "4WYbEgDPPN9PAgko7bRv95dRKF8n6yuYWnqnwP4DHaF383SH5yDzGoptDhTfnjxmWtoY1uyYKs3vbcNBQ4KZV8Fw",
  "key8": "4EYasjxfPuwL3A6mcQdRdbUauRmt5DzgjKn7yxXBEA96mYiy7eU6A6z27vGnzVpC7jptRTX9pMb7iqTwuogQyqiw",
  "key9": "5ExmtjAe4witEJmQViz5e15Hrd9Sq1YcaqTK5iV2ZnDDqfKpibWVMW5CJbC7CFj2Z1fxBzXafAcZREmP6seXRAbT",
  "key10": "37Z2JR5fZABtRRMgwdkVUqAnXwswVkFGVxBVQALF5GHf5aQqG5kTcqqVsuBK8ki7jj81e8p4ZDQQuCg92MWHQzGv",
  "key11": "4fsRX2Qs8XRv25U7UzmwkLC4S758b5ZnDvGwvsnaAxdrq2L3S61BbD7q3oNN4ps96ZL6AZHHL4tcfgyiBbrrb5mr",
  "key12": "3mECDENgFhmcvCDh9sJvghWKQ4pRLovtfswDTzy11JavP2WXUC3GRrHCbBaarJq8NDVEr2sSWB8xpTfxcsg4b3fn",
  "key13": "3q5H8aKmUKjpgyHbFpnEYZjFStqkuNmszwEHf8HYh7ev2aP9ihirkAhfsi5Awa47GJ8LbDQY8o7kcjtyntcXQrsC",
  "key14": "2izK4BjnBtun9hXgM1tA4oY9FYAyVtGeZqYP2ZorwYm9QoQA3rQwedBtkSwRDrjnXrp648dLXMDzHqRSsuFe9H2U",
  "key15": "3B16iXgWBSqBdsVHNm2CWRQW5dbfJJKxH1Jab65UYYy7maxJrrxTZQr9ngMcKq5f15U3U89rPJ2hAbmwpwSspmfF",
  "key16": "n36g6CYyw5pX2cTtqek8u1YPu6JcaDCVeD3MNo8r7b95gKvgxcGWHqoBcSLQ5NRJ58PKvVmZhQBh4Xven2GUCTB",
  "key17": "5suCYZ1Bw44DyP3Czy4R3QjY3TvkaKnC9ERxQ4wSeCEpJ2xGpbmuNF7hYUzy7rDS2PdWULjUa1wWBif2ucJPTErK",
  "key18": "42UjoXAY3GeYEA6qp3XzzdJfkTJm5vDJL6o3ZxrDd9C6k9ewFRzGio3RCTRBFJ4zafhwNG5iqFsVGjGKi7V77ikx",
  "key19": "22Jn4sa159uSiPxGHkxqPT1pvUNKnJ3EicY2Y3wy6ZNEPRHiGuuMLTX7LTUR5JhBQMw5VZJAL6qjRRd54UTz5RCC",
  "key20": "5s6G7K9jU5YvyvyzrNvuuYwkfaT9EGDU9Ukws6o6SGNG6Q33UhuwK72MpUsfMWUBvzMXKQho6zq6oUCuVFk19Vvg",
  "key21": "56TAEE6ShqUT7LuitT9sU5FLQgsQ3T519aHjS7M9PAZkK6eVHNKYBy61TVbAn9ADF8vfduBU8bLcAqQvKCF2RjBR",
  "key22": "jM2C7vh6i55W3G9zZp3u11MGsJWyjhnUtc4t6qPJZ4EQ4n9zavPjgcYjSkQ3f2EQfTstemmw6tEZFF8K4gnuuRf",
  "key23": "3pV5FTrZBuu6pRD6sVhuXtKMANSLF8xtHSe6uY5mE3pp5mAj9cN7wn2z8QijnaXbZzNCPm5egxwsAbiJ3ub8XD9X",
  "key24": "3T5jKbWqFPo5yJP44Ys6KcUwk96suAmtcxP8gqu4VXUvHke1f8YqXraMHSwCuTJyUDQMHKDkaspyCHfzuSxPQB5a",
  "key25": "3tic3wtHZ57DLzDY9EYu3bMWn8aAGxCd3B6ETeK6oL7daXC5PVzYKAj9TZ8TXPJ2FQe1vAbZefG4XvaKzeRUTNrC",
  "key26": "GbbVkYBprdY8wpRmPc6tA2EeKjpg9MWeBksHHkJuNoJxg6cytas1azWc1hZsU8M87fCqgZqQR2QUuXrRGMWi7xo",
  "key27": "672FmwethgyRJSFg91sgqxiSVQ7iHE63gHDowHxfkTep4Ps1PFtYwUSDAW1DHVM3HyFJrQGhJd4Fu9ipYtToye9k",
  "key28": "4oDBGVVdHKb1GgQvCuXLuSSwCvhAAv1p5uwvrNLQK6AxTeywgxRj3xbvQvP5tL1eoi5iCyWs5MsZMcPJZxrbGLwH",
  "key29": "2iNM6wfT8krK6Xermh1TARs8m11xo24kUUe9dchyQzdxKY9ghAgxby8tkykWG7G1gQFecMx8oumD6qUEj6vMe46C",
  "key30": "2Zmk3pxx2BeeirwbEwMJbVKkPCyFzGb3ovmRFE8mZHCHRZoMk3XpDph91VPVe6qpNas6PGoc5K6wPNtCu1VbamoM",
  "key31": "LVgJEueE2FAXgp5bZsU88aVUj5LVUKkwFMTVvhZT4KRpzv4z2mWQxTuBvDUpURfvD1X36owcNfQcnAvKVi8Yh9F",
  "key32": "5VntRDaC9dbx399hEkZmhtRA276b7ECWjRYNb1Ns45QsVLLfbBYSgD66XuFGkCZRyrj1o6chgFfidWYRMGQ7pcJM"
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
