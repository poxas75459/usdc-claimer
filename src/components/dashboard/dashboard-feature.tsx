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
    "4LWwdjnri9zz8yv6whjGfgQCj8DMa62rmM1BtrjSAJzutG6M6VqB9MJBGa87NUNT1BRA39tYNgwU5Q2GSFKtwX8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pphCxqoAJF78R8eKzWdec6zy3zmauHdeKDP7KvSnQFJjap1KUspRUa7JMbj9vV6wz6e9eL7PiDgdadwhehLHDBB",
  "key1": "3b6aJFS4FUHzc8w6CJKz3Xy3ow1kQ8xJ4V4GL4EewyGgaNCgXiHg9CmgNDuhwcymJQVCL8piPfwd9UZKcWBMstGQ",
  "key2": "5aAnDLfvoHgcgScURPwyuzsW4DEYWttZqTZ7sVGDySPvDr5vFT9PrR9XVY35kYbaCkvhjMQaLWXiWCx9q9pZqjci",
  "key3": "59MXU2KsVWW7BJDqzkfQQV5sGFG2AFGeYkctm1KAVyWj9Qh5FsrSHV3reVfykzJCEh5WwvSSrw8ee7WP3Vq33Zr9",
  "key4": "2F1MdfGtizarjzpGGnaCurdake731axosAM1HnUevGXhbik6MY8BDyQGaF72X128Mk3NaZYuwaGmzBHGjmcZbVB2",
  "key5": "XPVtDsGn13rkLNCnWFmTdpNdb1736BnUDUtnXC1b4RWsPZFC4RmWw1SqWD8Q1cqF1XLvXrZr9kQ7GEdidWVmpMe",
  "key6": "5b3hP8cKtyp7ZmFj1YVd9juUZvAppurqQiPyNw4Cgop5RnjgAPzm1PSZoioWpg4S3bjrajnPhkDy3eUKJ5jJqoKW",
  "key7": "4AsgGJoB1idRY3M9Egd3ibSB9yShtmhfc33PqQ26s1L6eFKnCFuyXGJDAjrdrnnNJ96ckSS8ytkELEnhAWmhD2jn",
  "key8": "VQvmXF5x6vrm4WgNftKpSywfFz1AkLHRQLA6hBCzrpb8cgkYqrocajNnysQL4oUpL8BsH2bi7cu1Xhp1EyabdEz",
  "key9": "3hHVvUjdUis421SNqpD5oawZdxDCBP7XFQ9Mk2J7L5DATLZfDC5okkDHAoTLHkYkyjMytjKponUcqSJhyvPQuNZp",
  "key10": "4R1EHgBuSFvhPNVQo6HE1gvPzSchhqCZFZbWBCUWgD76GCUkMvpVzML9P4ATLt6p3e8m4furQp3YLSbq3g1yQWsm",
  "key11": "43s5tdkrSWG1sqSWdeimzi7XNFyA4jVF6A9bMwA3seizTuMz3rPPmT4txDVg7FNNChnVEcuBhxSWvdtxXiFCSsA9",
  "key12": "3rR3WybNy5idsfRX2uJ2nftBz5ujEjgBqxKqeg5nPPwj5qNJKka9cnD3bMqPRYVWbH954KF55k3ckvni45gKEQDn",
  "key13": "2diEDecsRPBjhZ4mxxDxx2x3KrZBm9QCZaJ45U6bFStAsE9d1PmFbqrdxgGyugcQ9EDG5GFQV7xm1AxJdHL42L8e",
  "key14": "5urt52KBhKemfNKhJAizN1WzdGPo2npUWeh6o1LHv8vGH4kYrT8vE4uqZ8UaesJLy21zLMHdyuwwwuQZDGp8cbnV",
  "key15": "5SFHu8unxba2q4awWqv9Qk8B159NRgH5LLyLC5hvUhq77kFQiYbX64P8ZAF6gXjN9Z6Ye2qGguX8P8kXmRLmGixU",
  "key16": "5Vfn3ppfazjWpn7c9mufdJyCxD9kFPFHh4n7eZkgv2YzSBZCSJ2z2VGgQZwebNFAzN3yAiR7D9KbWu5c6Aoxw2r9",
  "key17": "CLp7npeyiJnjMGLD4jGXvkBzDUeMB4mYNABsbGjZT2mjQf1Bj1tViTDh6qzir6ivk3hshYKJiY8eobMmjHAuM7P",
  "key18": "BLhNtp4qeVKAESjmDxCoGTrKcA5e7uW6AyaQhLandoBcoaBVGXki5dyGpJg8jpYKjvUQts6gKBge8czfuoqqiVb",
  "key19": "31JWvnEay6mCMiyxPgy1su3P5VK7xKAHFFfC3168THBPbZwU6bvuQsgkT5qohBck1ZX81y5mWafX7mLxazUPuvtk",
  "key20": "wETCBKui4qH3T2LYtMUNMQa97nZ1dWDtGDeAgbFi1hadSKura3CyUiG4vwVCsbAJFhuUNNkdN6qSCjkJzEAoKiA",
  "key21": "3dnpbEhJWgNBP8UoEz1prLxprtpHJx4XtRfr1VhHq4Z9Z8asmDJ8PRrgVotRhwhExXBuPuni929ebZUT1xniB4bc",
  "key22": "3edewg5sLMSUjzFkVWWkhSTHyvJVRazmnJgZppkYSCgUKpFiSyjp7j2ihw3FRT9UYiiM7saTRwotXEbW9DuNysZi",
  "key23": "3EzwLADfR5fZTw6ovpXYUm1hvazP8yRpX2d16hyS6wnxm6EGaHfbz3Wc3K3xeSWkeC8BCqATbynUD8oAUjoWXBt5",
  "key24": "vjHpJmSRDMnnaDDXhJ3vqakcdgcHgEh9RKkaJqFmEVTBasYgEt1ikESTo2J2yyPzYL7CGb5BnBatHC7hyFuzoEa",
  "key25": "3rZ3SChEQbNSWZdGjwnXKpms3WSeB7Zu7XLLPDi9LYazZyKDMsLGYnGwhJc2zRaUikfLgsHgc2jpDnyHAoYdDQgn",
  "key26": "35ALCMoP8s4F5WLnnfGhBZevkx8v3QmWxVf6Xb7SzoVACdHJZz4fsTzhYKv4N9d6Sgn88fsjcUz2zR9aHs17zrEA",
  "key27": "4pZp4bYepm8AWsDfo9sYKoM8HK9AtiGVvaGMuovHbbwQ2ohoMELd85YdNdMyBt6c9yJ5syVSKyfXDHQ8x6Xp6mCR",
  "key28": "4EqBXQaKZmL5yK5qFU7qpX25zQLeFEDfJ2EyC4SwsAaxGLAD2DmvBCTqNp5Bh5gLjQ395CpqyPg4mS7HuEXfTpVo",
  "key29": "yyCxyDacA8UFtGKiWqqMjdCpbnRKEPXaoyGyAkJ4jkCucMHobADGso9bcqg5MgEgbeiWsNZ1GDrA2o8cS1bvhAC",
  "key30": "2gZKkTwtYDvqUnnLJ57t8A6JExQ8Hoya5P27gJjRcJbG3CNqFpMkYznAeHZLykAd4tzMNaT7Ht14NisNZAhMcBgT",
  "key31": "3dyNFFKsfhhZ8S15CE8DXTR1vTLxUYPmLAWDgTX1bUdcipMygSDzvztBhnDieA979LA68d9k9QwpKD2id2s8mQ1b"
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
