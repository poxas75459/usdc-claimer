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
    "3XwGPXDVcWyyV5x1EiE5UijamZumNSMPcj7EPR8eEJGxZx7sZDvVZupjEw6CDu7J5uGysAy8A6ZVMMQCP5rQm4vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59NYQFXhefpcLTCxQ9fFBN5rKbTBFezrQ2vG41qVCqcj3zTHNcDHsKjr2WGXGHiPC5hd7qu22FiqxmMUANCztMcx",
  "key1": "4vTRnMULEd8z5kn3ixgHmg2kLgTMo5Ex9pcZsjNQaaNZDdTSMfi8SnyPi2XeMpaVEyXGjhYwcJTpMoYLdcQd7crK",
  "key2": "2n8WHsMzrZNkHKYQYvtr3cjLwB6aE8LADfqJ4pK2vtFfQHLtiKQmwsGsYTafSG3QXdBwkHC7qu8fPPCkNn7JrNZQ",
  "key3": "35L9yd2P7Ssmdv9sdfpafyBFehVXeMpa4aT36zGK7gQKi91ArH64LsKXZKfdfqxD6vmACXWwBMQYhe4C3HDA4wLx",
  "key4": "5XisUe63YtXxQfJ7Gw1aV6AUaj4G6RW4ZQCSZu3Fku2RhoQLTutAUo8XyTfTCkD51BnXxfhbVHUraSuxT1LC9bFw",
  "key5": "wq2UXCz2iyE8DYidAg2RaB73ESdKsX95ARD1TPQPNMnarmKUkUy1F8FZVFP142rASfSo9Ch5EcXfymBcPxJr8od",
  "key6": "4Dd6hL7CstwdzAH443McaCi5fV7Zc6dxKge3BatGWo9voHeXA2yzcMfJ1Tua5ssKK596Qa63r6d2ip9WQZ4HbWok",
  "key7": "7bLPzAZMB9PzosLiYQbiQUdMGiLESJv9SQeoVubvwpR2pWeZfevPnGPeo5RxAZ318esWh3tapaeVzStAN8KHrka",
  "key8": "2dKaWTek3YTwes8YJettdLrudQU9XFituvyeJBBPfWsbNJDYUZGCtjesowHqDpaDgLWMpZeLAxW3iXiEvbFZqBVT",
  "key9": "2QfwqTtGwZseDmmQq4PJrS1qbgSr7Fa53F1p9fnG3H3PHirA5rep41nNHW9HQAasoAjTU895TxiWGzKcoQnprcSi",
  "key10": "2ruwsRu5VRhrAbi1a3fbKY8LBTQw5s22RjiZbzJZvGq9jkKqYCXieYnyMjsy1oADj2UHBU295TgoN1bMqtqvhMhU",
  "key11": "KyiQMA8doCCyvE9CSziZ1GsNukJd5NxQvNG85jBuDh9mJDgNuJjAyTdx9zswbnHWR8KX14PHwzL3i5qkt3RkVNM",
  "key12": "333mWrhqjkc37fGNURrsAphVZNFtt2vu1DUVbjSDgoKURhPUubad3UWR3q65pVwM1TpMjnn1sdAtWPCPA57yr1RY",
  "key13": "31Wd51RaxkcZnRJzXi4e6Sab3SKi151Mv1CaZSLzGLzfUCMWFWFgTf93psqTzkWXUdY5f5E3XXMuhUHTNkDfyVKD",
  "key14": "63PtZANhdXiH1mPZWwQjxy9iKPnK9vreUEHnb9Ugg27Y4CFb8uPFUHeRqANsSnEqdzYjWkiUS7QCBJLhQks2h9dU",
  "key15": "5HecBsXCSof5bSv66awizyYyhTDWH5fCF5SLaiEEu89h9hTFVw299i7VMFpPEZbXsMtQAenhdXadhND6MieeAPMG",
  "key16": "63BMNgXWyLF3SmjUDB6BB1rJKqKK3yx7mUKGrSuDZPmJfTGrz4He1uDcpHLkswocRE7qaaFjWq6D3Ddo6itQbYiM",
  "key17": "2TjwxBnowQeG36J6Gd4iVwFCd2Z4QdHVn67F3j2McvYSoocXyBB1DWaeVAoerT5xH64aqkvEF394mLv4ZyBU9TAX",
  "key18": "2fC66iLH1rgJ9YryTFFz2ferf3JRU2jwSgA149LJM5eD2UpAUa3ZYkLAk568G82XB1ibyvbYyGkAc5ZbyGgi8h96",
  "key19": "KSnqMM3d3RebiSbsXvrD1rpgYxGjJJgiCx5Rswrr95harTf7Sno9wAz9AnuxAZKyAzZa3jc3TpMpEgTtvTZLadj",
  "key20": "5WnkoSDDupvso2p1Qh8R45G2PSFS16F9n5CZJZjJiPWefRos9SCGWcnAYLPwdkcsbdD8iQa3aF14pXkSPjLi2sDq",
  "key21": "4As6dStYNk78dFouaaKVyrCm1Fqx5CDCE5HWMxV2AavxDSaf7icPbxae5zVTczDjan4az5AfEKdgk3z5DrJa8wVa",
  "key22": "65PEtH6UioJRpreFEsuQ2p52tG5kngTH94qcQsZhPYGX3Q55XzXsNa8Ae42uncK95GZ9basCzSn8h8WBkrU6B2CQ",
  "key23": "2693QrV2Tm1BQbEkVcvL6La3ioyEthdR6qqQRGoQBVtQE4x2UsZCDCfZAip8HvqiNnT8apYXAtc5qgYB656cUaSv",
  "key24": "5GLuPrvuQcZ6huxAnTzRu6e533nzVMaBRD7HrjWA6zcYxyvsW42CumcnwQGqW6nEg68DiUM1MqULazF9DRpUMREo",
  "key25": "5rXsLCe2R9VSgCRw1q5f9ZBHXF2sNzbS2AEGskeqA8utGfUrCxZRWoZKKza7DxoxjTHNtyUNQbXraSTRkPBeyque",
  "key26": "xx9ZpHULayYnbAPfnX8F7EgDijy6hLj4HxkEyjAC7HmUgcYtho6o66TZ6x9WgBmcFuJ7Mjtwq9LrwMbe8kAZtRE",
  "key27": "45spGb4uCrbneoWcyMK3gdNRftE3Gdgw4kgG3c2MtShxiwHvmL13TNdo92ypGWn3bEkrbs4Evf3T7ew3hn9hWcnz",
  "key28": "4HMAjn6RTYCvq4VPiqLC1XXGucTCWHaftjN2cfEaeBdTEf13gwZkxrexUc71jL4SseNy2KknXJCGKBZzb8jd8dST",
  "key29": "5G8pGELv9mf6zK8df3YGRjBQhX7ieNS7Zq2C5umEB1WkCXdMHao4PkMTKkEapyu1mk55km2rYRxAGWM6HnJnVRXU",
  "key30": "3vVHrdcS52zGVVUb5YUVk6uAH8dGXBaC9APhjJTEXVgkm9X95urv5LpGSD66j3ncmYCo83fHUgWAwdQqsLDXUWuV",
  "key31": "66y7Y2g37b4pnivvwroum17ZqrTLEHv5CnqwzHDwTUKZsivhNC4DVQM7SeFsctXkSACoSZ1RFT5vzYC5S1toQt3c",
  "key32": "5PyR6SUawGD3iA9iNt46eVWUngKpiK2iYgXGUr4BaXTBMcPgJWowpy4Ces9RxKvAEXtBvpVvNQbQprHxiyqdrnjA",
  "key33": "NxHoyBSm18n4vuzFPDG3XSEbbsgkJch4TCguGyfcBdPmUWZkUfa7MDx5iD3r8zsNsUigrzLQT68Efdbpfr5XxSr",
  "key34": "2TAr1xMYBvPpBL6KtuqwUBFovgCNudqfic2AK8rnqX4JEGNSEVZSwhfB8eK9LnePT6cJzKx8V8hfHbtnrSFMpy6t",
  "key35": "4xGWiFnQPfauhF2NhuEdqTQESstD9mhMKWGGzGaFZJ484NwzCmtFJMwJ3xJMvgnRBBLU3MFCZWkz2rkvPS3WcUps",
  "key36": "3gAcwmBU2myp9wCAdQCnBFums3qSpHNXKWcDtUsju9UHAVSNLNbWRsia1rBynwjwAqJdn9E9xKCunTDgczK49ZXt"
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
