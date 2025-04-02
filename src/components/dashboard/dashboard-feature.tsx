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
    "dLj2P6zDsQEVPpnFMyJzHa5AEkDtMhvbsNvaLJkJoJHJwYTSufaUnp7NhsBaN2mg5ctLaeL55QTX7TWGWJ9ZGkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCz8wtL83roZbH9z4ByCyh1VUyRveGeQeYUR7RobbkPtn7Sw2rXo4HDzbVRjjKTjSdGii7vaYjrpHB4Mku65Ud6",
  "key1": "Dkxbvb71FN3eFwEdP4CE9n9rC6mC8Mnhqo5Wz4gDXitddiDhhUzzqtpQ1woV8E5qBE2721iqf91JKtYnXcZjwj5",
  "key2": "4r7CYyKdYALRd1Qwyda5gHZsW5ZU3W16U3TRKi9RRxtAwKPidGUa41dnJN9ofRSoBAryMCgocRFTcXVzo4JM9hJn",
  "key3": "4qn2Q3bcbnF2MBeotMGSy39pMHQVvT79r1pCqkLBHEATBkVRfaEBEgMUP3b9gBzC7uNEqxSJz8SdcRWC9nCQ69RJ",
  "key4": "47QosmHU4hyzQtpbVBRtgWkPvafPZXxvsrTBJKhjZzqzQzwUmKtUqboBvuHNbfmXbutr5tpyR7nfj8y7swJLDJ4x",
  "key5": "5S4kyq1j5A5nufugQrQgGmDJo7ynxQSQfRVRkRoYoKd8zPeaZwSzKvkFavszuocsQmHLwj5T3gTxY4QqWSTVwcBi",
  "key6": "2a5ZchGdjBXE54px5SJMojUzVLs7EHGTX588N8jLcszKBMWQJY3KuJx6mWS6fPp5RhcqanHC8jjM7PGmj9KBDQRx",
  "key7": "2Dxr6yMrrHskHkZWmrQmJ4u1SJh3n9QKez342rXX1zZhmq9BYULswEyJhtFMU3LKBUtXQQPmFnmgdF2nfNqvZXkE",
  "key8": "2b8pFyMNmVEBnDtPHf337b1R8Y6nXaH5PiByv9Xa93nxqfAz9RTzUfqC6jX6BFSoVDbkRKrSJZUYyWJhjWgNg6Yo",
  "key9": "CC7ukvYbsTXtzn4FLbeaxVsDfQPNkRtZut6yZGFF1QC5bsFn5Rp3fWCLwfoyEW7aUoTJc1hsgJCByyNjc6X1gpb",
  "key10": "27eX421Xd6hy1gc5aZL9xhKuPweaS6HuR1sPgP3B56hUSerrPDinsSWSe23TNMTii6NfTxxQKF9pJcXo3Am1fgwL",
  "key11": "bErEyUaFxGS8ktCjMUUQi8J6yn54BYAi5WxLZKQkMhLPG9pXdK7tygnpFCMBw5uMtJ9ChguBnJPPjZieN3TpdDT",
  "key12": "3BMkKsmd1hvxjxzs17v6CNCd4F8KJJhHKarRcc9XqYLvNatU7EAXkdzKexFCkmoaLJYAnehfEEWRbuZTLYMiq7oV",
  "key13": "5fuhK7hRLNeNAEtdUgNmUUTnNnr6kW9YgEAsun1i7ogAA3ZtTT97vh8aLCjVoU9rTmjiXVC4UDKybPiJokVHWHZ",
  "key14": "5t8RFfw2kfWMCsFTdNJkWzbNne3Sk49wAWs8xqgEcn3ms9kPKh6kY4QDfTMd6wHyg2wXjHT7giWSgYbMxTQKGRAY",
  "key15": "5ujqW75kpGv9g2cMnHfs77G1QUrGuwkCfan7Nx1g33s8VFRLXV2JkYg65t3bb3vq9eHPaNczmp7xi8Umadi8qMmh",
  "key16": "4PKsP3SdUmgMBGdDnQ9WiPzDGhVVWgf3aDDmc8Q8aNyx6i3gExVSFdhBgRndTtWKY9Ug4C15FL14HTM6PiDnSa8H",
  "key17": "NWF77vXhR1wxPrH151t3VhbpQwQY4eKcJiMRigoAXmfmJRDdoJRuspUqY5tLhM2Xa9Pun7dhPXYF5SW2Pz6w7ME",
  "key18": "2TLKzNNQELdHu2uyCbXk2FDGUa2VtbD6aPy6Jp1KcRnDsKsXiVBB8GMuE2vqa2GuRJad8SFnn7nFrrKyPmuRTeBS",
  "key19": "3zSQynC2464GKEpNFAzN6zwrrgGDhnNbwNZo9i4aGf6Xp34DAxhVUGdT3CDRpzo8PeEWFtUwQCZkLrp8FquNeUf9",
  "key20": "3wTze4c9VozGDyXmMBKTPZrU7c3JHr8D8C2yq8tmgSF598hv85K6N95LUjJHLTQpCWBuW2Uw6HudpwJQ34DWY7nQ",
  "key21": "6LumnYyWs4uGnukWwctVzyatQJrj1GZsKpuQyuwQY1huHw1X7fzsmqhzz5bRgsEGGAYBpjHKpa7mAiMC11mvcsQ",
  "key22": "5WcNbuUras92FFMBA2poHuB45mjVbSLh2TQVdPSF9ZKyuD7ELestpAWJkzNRPMhbUUttzpVLwBL6W8dNS9HkQvoC",
  "key23": "4dKHNNQmeLb9jLCo1eNLs5vvVWqnfSCeJAXmwCWhWj367RZasaAYrc1bTAf6eoGUM2SrEb1KVTUgNxKj8LEPK3X4",
  "key24": "3st3w4Wws9GTicetPWJUXi7yzu7fzBr4R3sK32opGh54UA6ECPEs9ZTfTyEJRiTdheaoSzikBNyWzH3vU7NmGnqn",
  "key25": "5kk4AEMuU6XZ4oXA4fEQ4QuKGXu7e1oLuoHVu1yL1eGp8a1kzSxiCPhv3kCdvRHGuZckhm88rwCrScWZGTdA9ivu",
  "key26": "iF4CQQpb7MmK1P7cVcyNv9PWZmHmXjM2mkbuUtBQ8Biea7xgzM5ztkNVjvoYDh8Cqva1Dr8ZGF9UeVTvTJgCzDE",
  "key27": "qx9G9mx4DQCJ4FhtT4vihf5Wn8wAwxFkSFusXyyf97nAD1SNTFqo6oQFL3At63qF4r4jwW3W9E4CabuBM9qZfzF",
  "key28": "4vV1haKPfBLMwyWgrD9S2jAppj9tECxEPWEscqnw5vGWW6AA9r9Ahr348L7Fu4RvKJw6Pjjn9isKSLJfv8N1v6By",
  "key29": "4PMPTwsLK9ASQyxX61JGySboZfeNgcxwR2tfLivUN1ewGjGbGbf2arr4JsMDm1QfPThRMoqNAJVaBCThrDXoWNMb",
  "key30": "iuWRsAHo2HU3ZJD4oeTzVYynibmm6W1Jz5NviNBoxT3Rd9qDoyL1sbN91AS4am9N8dnxRwsoiDEcN3szFUq7Z5q",
  "key31": "4TGWwcuZEvN139ffVJNmhNLn5vVv59LD4TmAc1JpeZpUs92VnJen2v5i2ngKzg5KBLPh6rjm4ipzFfRFpkMQrZgi",
  "key32": "2WEa3m5epTwpHkeNApx45FC7D55Fm8PAkUAu9qQLZBK4jmPuvgM6RExbndLpUFydKa2wtWqdHCEWw7mMQmkyc7ca",
  "key33": "i3Drugw79DiZX81JrK8fQxbyQfAigjGwrj2cKyotzDtZLEZyTji849nYkdrifLnaF4x1uBdYMGatVaTMJYYKbb9",
  "key34": "63cwiqzJwXKuBzrkPsviZfHaBhdTaLzeKR6Z1DBskaxoceA7dTEZNv3uUAkU9bsmAK5yRBvzSBnCQmuVE7ksFa7D",
  "key35": "3Ka7VVF5xU76cH3sBbx3xahDnHfqEVdCnLQE2UDiWcEXbdEmXNkuchNoLpPLbenE4w8wLedTBpqzVWZ1jxRzznMN",
  "key36": "2n9r5fWsqTbd89mwZWVkTqaFom6S5pvXBeBVim7T9skrvcp2G5ZXEn2YBNxJ7tSfAc5RiTWUsSX7oqU36EuKvu5p"
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
