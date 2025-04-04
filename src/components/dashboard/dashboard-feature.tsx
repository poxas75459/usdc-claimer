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
    "D8Mys4GuD4PkiMu5d5nt7XXcGyqhVZtF6Sohh7uSRKef57GN7WEkMLwMx5YzwCApRpgTbBBm2rVzkhpYCfY5PM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1qQArwSxvEbui9ZJiTK6pAdc1qpbvBHX7mHRXsPybgabRMGH49ejpk5SNUHpXhgzq1uCErtNePPkx1fndjYxTV",
  "key1": "2rzzofRJcLUAqbboQnyS5VXYt3ggXV2dizTfZaSp7wv96aFG78bHnVy1LuWJpJgXSxsQBpfrphudhqM75GESgVdw",
  "key2": "3G8N5fdAWbMUsJhhJLfaEFYf2tUptaPXz5PZnD1kEiMJoLMd7dAkgNQsB6f5XNfcoVoPz9GwrxKeRAzDJd1khEbX",
  "key3": "21MwCfdSfvyZFbr67vjpRucp5zE1J9kJLiL9CxWTBXGG4K97ySYWQ1ZPWZz1Hs1KCaCZym8dzBfEHN25jAKMt2d7",
  "key4": "5CJhmc6uzCd5zuTvtUUF87bvZrZ4FWNrFJUy5JmEVDGXtVdewVT5aecSns64Qu1V9nLyzGm4AhFij8m84kj7hTbr",
  "key5": "5gpHhCKksNxe9kfk3ruWZCRzMipE8C6ebqADCQtroPp9Sw9n1BgkKdkU46eJxMvs3krzSYYGR6XcDPhrzSk5LZjY",
  "key6": "sEBkiY14a4AZFC96F5Ffq44c7SfHgqscR1iTMZYJpER3fw4dg8HmeH6SAcmTfCPssMQ33q1VTh4ujSLBK3jjo2G",
  "key7": "yTCjTCSjyCegqKKNx4eqiw2S52UCYdbWrYsawJ86cnrcyTadPm4v7gApwDMJ941nwGY4iUnbBkbsXdaSf6Dfu39",
  "key8": "4zDUuo565QfrqCBmDT9PxcpwfHm38yLQ6X5RM8onHYwaCMHoTbhE692pm2JfpSnZ6P9eRvpVt4jvgd1q7Y4V3aKj",
  "key9": "4jbdC2bscXvwUu3s1ec7apgHMfoAKhgWTkF23yTXPywvS4Fc3qDdSNeYNjBFCDh9Zdcc2r8EAndNP6P9oUS1SZKw",
  "key10": "41Dp2Dj3JXSsebMd4Pi7cUvYywYDorr9krQgQQtWgdVUSHCMo3rLcyaLHy5gunwPz3kJrTtsgAdujVpnuKvukBv6",
  "key11": "52Dmru1ausmyqmmztbHKA6qq9Fpv4PVb9gqVcyvdAUxPzUXJdsEA27WbE97jCMVYszKKVUtgy22Pz8tL7ZjWRbT4",
  "key12": "2sMYWcgQu98erwDruyTMGKxwffSuTT5ujwgaR5M5Md62nY8CNhuCBE1YdRcERu4gNE6fHxAVgmwHYEMj5UKbaMuy",
  "key13": "5LXT1imuYkcwKe2vqDiVF6icYQp6kLC7Dx9NmB5HnHVXroLyWV5zvfKCjAUs4fmxgPVBGS3vvKU4mYXi7CU2PXWm",
  "key14": "4oELtobu36Zmm7FnGfVbvoPsqY5BsYBsvGomhZcY12bNe8U1b2TYSbLWfbWMnVaZXUEHE8ANvD1rqiuroa7u2WNT",
  "key15": "2q2yJUS4HjJQK1Qdb9hyxcyzBuWnr4xi9VNbtRkHKvkrkYGNdB9oP6vK1cn5Rri1g6gVdS5fL8DARn7KyPNEQh3R",
  "key16": "32jseZFaa32255yyZsBEaYz8DwLFAW3WcMV8aRFEa4wQXiV3GquFUPE6nCjnzNoGssrQaxBrjmkiXkJEajQTyZrL",
  "key17": "4Q6NfyHtntWU6tQdGRw7RtTrLWy2VeeDxG7gZKPCFiYjhDpYjZyvR3dhPTzxgcpVXibWFMrFpSmTRAWgd3Ynpysv",
  "key18": "363ek5ZE2wCBqrucUhJqN546tTZFUS7VG4wmS6SKapfsvPxtbZL3b7YPJcjVY9yJexFT5SKsmr3kUUG6pXJbJzMT",
  "key19": "2Y5R8wdGSc6ej2YQvpCrLDCgDnbvKCgEraqVToutadQcMTLW8hQ48k1Zku4yLjSSHGMtNxffzyHCdKFRhy8X8wFe",
  "key20": "3AyyC9VuiHrD2Lp6Cdo4Fh3vBRTbgHgP4TBZQmoc7BjaDVTpcSPWkheKdL5AWHAcu38ncN8HbzbAnu1pHJRpi47b",
  "key21": "5w1G3msdHDyDyCYhpLYFbLM6eeTj2fbGauGhqHK1kgH1Dgxy6SG6AJiaRNiyZHWJUdT3wvXCAqpvDcpqWcCUTfzM",
  "key22": "3JGNv7LejoajJ1mb8HMdZaC6wLrKgi3YDSE8piZGJxqyhsWVSH2EZMgVSmoPL1YpR7mPJvmJCzNtEEpwHLDv4wUS",
  "key23": "3LjgTNQSuqQt56ZmupWUXgykcyi72n2dje82yVHvvygXHNAURLc6K1bXDUgEZpFHGtPr5CV6HTHtZn4KvKsn2xSK",
  "key24": "3D3gaBz3vps85CxMnXW1yqPp77upVHQ2hLeUtLD2QLFPGfaKtSSQxqSNgALGBzhegpDV7fzC71Tm9KQ1kbQ4srQC",
  "key25": "3nwgFGkEQKxpePSAAM4WBFRhNRkn64o25ZDVmyMpT7M2kmKFNM9W98LBhVLoyz3yax2K1Rnd7qF6kFPJxqm3S1VR",
  "key26": "2RPqdauUfMCgTUnxcWCSc1hrKXx8jEoMgok9W5AKp7x6nHxZLHqBWwFbcBFTyT9zD3XNH7VkLoYwHdJC8eTZDdco",
  "key27": "i7ninc1118QiX7HWZdVJSMNGYjurqRCrYWtevYTHSKYqJBe6HTXSjaQLFsMwK67w3oD37PpiHwUedsp2tMAJQjQ",
  "key28": "r7kjhFb4ZW412qbxJpmt16vRXmqXWqQv6QfYFmjCjkkh4qu9HNL5f8cWrHkVSiaGJYsPgmo6nZpbMG99nHcsPfb",
  "key29": "rcuXbu3jPS5N1SbgiZmLj1kEPCSKDME2nfyt9LQyv18vUNmZW95qMREsceXsBHLtZdPccdsmjGNn8pnz4MWoRgi",
  "key30": "5goV2kgiGwrB3LXpwBYSga54wedyNbuxYJoWkqfwZgRWFf2a14Hk4PDfUSUGnwi9Mg5jfptkMDus2zwV3vvouBQq",
  "key31": "4MKJddFyrya2pvYrx6R5VG2UzA3SND45JgqY2jH28bLyRgnB1t6FYZAU754FL1tb9FkwMsHWerrUX5oW8dwAbAD3"
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
