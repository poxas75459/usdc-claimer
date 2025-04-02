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
    "3uxbw1ttB88vDfcqWexLWeUfjMjuMPTMd5SrkpMFD3C1QunX4F8aXvwoHNsJKYcthMe3Dd9Vo4osjYu9W7JtyfCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMkNJ1ASWwKurnSt6PJMnFRW8cFPntNqxkS6gNwtWtany54BtDvGKYHFTcjxUVx1onrBCUihoB4NWFd9eJ8C8kB",
  "key1": "47EC9ucB9sAFWgU1GXjWj9VH2ArAjeBXnN4ZieKhGdkKNeF2tnKFiJePHLvYk8qtsqVF827mwmv9KkzAAGD31F1S",
  "key2": "3KTfbNv8K8ui3VEykEoKHhn8uiBXFkPpigfScKtBgaran67RGkymE6ghBPDywAGeYskuc6tt833gSo636hDspEnv",
  "key3": "4sesv8njBdr1qXgDbxqYuXKRd5N4FeaEfwySLjhqpdgV7u4XDcB8Bo3FbTaX8JmoSHhZpH56ohGxy4S9bV5JXnMc",
  "key4": "4SfVoDT3p6boJxSVxawg87nvD7YtEXoyR8TiaaUai7p5r58gKxorNV373pFeK3i6JT5DHKQEcv7EaNcaNjoSqcLo",
  "key5": "58BtkvB9FZb3oFLiroNsDqWJt7zeJUsmV6wJvUo4grniV65CoNjzh69KHjRchuh4A65Yma3dg9kx1At7ScBfpCqC",
  "key6": "5E76Dh7UGVVLGTkniLzYRZBojrRwyyn7FEZuAQNUbnn639BXHXvFa3SucWJzSydiE9CCTUPiFYzGTur5aUZUJ2Gs",
  "key7": "KcaD1ZHkdBUd7QvuDGA1Kfgkj6hq5EnMVZwuwLZcw597xpNTHQ3CVFTvN1H2AmC86NZhqKXHSif2sFPNtyiFx4m",
  "key8": "2WA7U98QnsvcPsmCCm9r8tCPaki5xg67aV8phimvWC16MbFMiRSAe9rH8CudTcYQVqbAoLMqmvHqP8ZcLndgACmD",
  "key9": "5PKEWa4Wy41JLw2zEqCxu9pLCMDZm9EqzmKuWS74NHgMF4LWwei4wtq8iGhr2ShoD4oj5R9DeNfGCF6tZ6Btk1ns",
  "key10": "4eop1Ezbj51AsjGyWVpHkCFRuAfh8HJzLkHo47Vrd5S1s8R2CZW9FSKednjMupaTr1osQNgVYEgRzbzt8tCy94WL",
  "key11": "4rU5dD2MXGHMUYpPuz7BwLZ8PRNF3e5iQHG1JSxMFr3UZpYAtDTxPjmjfszWxXBi4pKTwNGUQ5kTb9AUkuCwY9Tw",
  "key12": "3wncWNi5j9a36NUXx3bE3yCPKMhzEGE6Wb3zv3HwvQwSCVBcifjtpVimc7camvMHWFTEQ4rFF2hE89ZtWqqyxjxR",
  "key13": "Z96nscByvkoUC6142MUusMZ6xWU8tKF7YZy5XQnz66UwquSZnWtVpsqozSnHWXMMSsurorKGB6bPiC8cB7sL57G",
  "key14": "eSLPWDxWESXg1CNUfg5edZ2Rs747j6e1ZjAD3yqivHEPeqWFmTuZatVCFpDZNM1LRJdHPVcG41tPCm7WfvtmQyL",
  "key15": "3DEP11udSAkqV9KaVzN3BUkWnF9ZT1MDiGRz9KHy5a7B8fz3DdCUtwK15kpGhzfqMJ9FNnqKAt4jzgfnNeYmHVgc",
  "key16": "3EZvw5WY5nnXmLMjUxmvXhdNQrj77jmvf7UW8UWoj1S55XXLkHYpsiSHY48YswuFcTfgVhACFp8rxoFp6oFcje8d",
  "key17": "3fqoEgc4EujDgiJ2LnpuffsRFCpMDoJcUFpDaTCaoTAHQkxdiEZyj9B8LZsQcBACv4XLu8bTdBizAv4fMMbDD8d",
  "key18": "5L8v9ZpwRt1e4b14X7Y6f4YnNRrzjeXTsSj9Sp3jdr1niWuu17cC5RfboANnXoaw33z2eZHnVcWgRXSQVtwZ7vJy",
  "key19": "5A439QPHtaJcM25iLj92co9oPS1SqnbGezu7i7FaopH7K215c6B68tx7znXBT52b7THB7mUzTjTDQfZ9WhN8jbXG",
  "key20": "2s7JXXVRwcSnkd41JREw2ED72j7AYsKMqpWeeYBo3shwEfvtjoQE1A5bAWsZqRKwEExV9iThmqAa63dRfy6EE92A",
  "key21": "33VAvRDiHPSBgVuwRaTHsikM9ybTmbZ1zHuyPL37J1xS9ybamCunYEHazo5WLJxbF8f3oqpnmwBXxDwiZgGHiALR",
  "key22": "44LrBB3EAynCBcon7Sx8tYyy1RjTCTgB6VYBqcZdWvTtUDRkBoE7UnyKay7No3znr3PphmuGQfr3BjpNwRkpKM72",
  "key23": "3cWbaWT73SiW8B7nNgvE3wq4fgddZ9MgCdgQ2TNkXtRbqCwyv3QopdCXGcpxgZyxUSU4orrpKAVkXPmBoibL8LFA",
  "key24": "3UHN35nUZBsWSWFBWSn2BtfUzGGHDnFAcGCamubR5yjKWUGoRzGFMuyZ9sB6YgckxQx9vzX93W55qd4MPhad4mKv",
  "key25": "XmQz7Ha4WAHnGGTQHLUf9yG6v3wNkXbka1DHqZrj6pvDWzRcPb3BjhkctuaYKvAQkJdLBbFQtoM3tjwsBk5Buvd",
  "key26": "5exWcVWmmQspULXxJeyW5WFz4N8QiMUCQRorpvkiXXg6QDL55ZK34XrzSMDn3wCCBP77WhqixS7USVeR7iMEbwsi",
  "key27": "5WuCGoxTBdKnK9gWom4e9gYvMwwAJDjJooTTsqhk7sBeQWCDme6Yq5Tsv2D8qc7xURjCKZoWA841hPajMRmTSAWt",
  "key28": "3V5yN2GC9dPUs2EzZRu7TjX92sgHH5XrZEZ6JAVcycryYUJMAtijMNF3h7EfJhB9neFH9mL9KKtTX8zvqsMEQNFb",
  "key29": "KJ9jn3PoY2QtTZrN9gcD9zt49Cc1osj7zDLwBEzA3jhbceVuWgya2to34W8W5hyuwNxzcwqDXKLYqhjmYfu1jn7",
  "key30": "2AqmngCC1AtDt8htepifcZCRXLHQQqCFNv8jdWofN1v7jzxXiK1qaaW41d91ath6NNtHCnzBdULuRTrPMJbTHaga",
  "key31": "52yMRmf37eNKbcs7N2PZh9Nj3SuB58env9n3GBvktVzveNnRnVutvZByySr1kDaY4S64qeqQLERQ6JmZJGvpUxp9",
  "key32": "54e1UGE86PzgoVNKbeokELNs6eC5JEgwM1fRaQBDd4EDmtbT26FPag8jAe5DL8zcBQEYPdT26iS5t66GUjJmLLZf",
  "key33": "3nJ9E3Kh2e5xttNp7juFRJjSvshG4qLaAzA99DT8rUrGgAPCxiH8A4tjcTMfZ6PVW6Hp5aNdz8KtyNPbN4U3uMJT",
  "key34": "Ne44BU2mGGMBiPqSJPyros4Sm5ov2v3pMioXnq88QZK9uzUrR647SZS6M7n5ayHqfwejHh2EjSZy8hDeoEqrJUA",
  "key35": "43CaVnFVBhuXqzVLGnwAH47RZG2W6WsA5NGYvtvR9L98itVn7tDvYj67A3Edtbptuuc464s1XyFYKSbRwC3isTSi",
  "key36": "4Hyp4akKWtneLZHdi2SV1VPkEmBov1Y9PRuGiG1q3PGxzsepbmmT23Rp3hR7n7vjs1xjgSe2QFFud8VeovLEcuTq",
  "key37": "46kCBicJxX9cj7oCe9Q4aB8h5GXMzEFvzpSZpYnLLuFhNfED5gZemA5C2UbiKPhCTekzZAgi5tXFfdN5tazhWVn5",
  "key38": "5vmMiwEb5Vi5cqcxx38T4HWuhLxYcqzqxuQGc1weuqbgZMBeFqbc2aHjazto5ZJuEaKpNPRQhU2LciMbJzL1NXZt",
  "key39": "21WyE7eHnpQYAT9BqEnpDXbsuTfQJam4pBQzmCJWnejkWxxC6FWEDL4NTS1BXthKdjMsL6nmWp7G72DdL4gYCdnr",
  "key40": "epijQUBjJ36xUbzrCnx8E4T1bE3HsFzoU7eAZTNGPkyie67jL883x8aus8tz3wQ7JtLUEDBKs2SS5VBEs3LBW5V",
  "key41": "4Pu4NBX6xVV7h9q74Pw9RfvtM6sEcX7Dy9ua4PeKawsqiHgggMeE5kWGa6HksHDjymj4yu5KyRbphKThyzbDsyoa",
  "key42": "5vFWnXYTxUTTYiiwWJMkdSsnz3HmwZJrxkbfJ3UgWCjELBcqqyESTtLcutgvKUGqoLHqDiK2tt2tewMutdSxMNfR",
  "key43": "25Zv5FPHaNn2KHJ7st9fxJ36FazCxH9Fd9CyZb8RP5446q6AGNAAVst3sUjag9paw7MNEvJL8KcoH9faMzs7pAGL",
  "key44": "3N9TznM2jWg2zfPv9k4oDCQzNt1dtrAGHxTjjgPRTRifzDKn3wrehs1rKeDmmyiKZVAkHBDBQZvQ6ZfgLQr9C7yM"
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
