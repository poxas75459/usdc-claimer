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
    "58swYGY4Ld73uG45f6xZen6k5UCvzkpZt5WyQKmSwbBCavWGJwZvTwowhmfKhMdV7xThQgKMWudytfJppE2kNH9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbT4Fx9R1t9xuygy68xScmTEec1W1UmoGDn7KEgXyhsaBQvDsaC99qyS3Y9JjEUgQ9QoswEkNAdmVMj13YbNkK4",
  "key1": "3g9Tze6HAHaNjzBHzxQc3J7rRwDqRwbq89AsnD2o4XsPpnmfGNjpPaBPeohbZCN8C36TM6fEoWWrDuq22BGfLeH1",
  "key2": "26ji1qMKPknv9ND9XWbTVUBcuDHv9LAuYETXFpd8P2RZC98jUufRiRKWRfJshNAuyzkXpHaY79JNTvP1jWcS3FwB",
  "key3": "3Cp1hFmUGizv8nTaDR7EFpnz9SbokHXzYCFFUgXtNpiZzsTuUqmEz4G2K6sg9TkeTm6FsJhxQBg3hbX6ttVhRe4Y",
  "key4": "2p1iVVKRiJJvw5K3nUKPY3CumTXUB3P8iXcL2XEQ3Bm3f6agzbpz4nFzkg145dnEysd2wFjRjLbcsxBwhSp74XWP",
  "key5": "2syTY3FtT6XyjH8UqyMcwXTZRdqaS8tPN3xDFhH8nkpvsZTrJ91xjtbUDV3epu5RsD42XqUs2Um3BxC4KFgZEjG4",
  "key6": "5nrSY3ShaLv5yP2GasDpRq7UbmbDbLGcJ7nxQFyNgiTY82WBXjUNeL4ZYxvduUZiGj2UykR2UvjLHxPdwwUvSNyB",
  "key7": "2q8wJq13QDZh5pZhiTSZT7vz5mPbukqtYdKUViUktLvwrkvv2awbwphgJX1uyod3DRAQLDupGW15PwYhQfJdfzN3",
  "key8": "3ogqPKVmT2qNRtGz8Cz7KAwtbhHzJeUcwUe3UJ6Z5YJBo1xR8hc3tFH9gwriEmN5Vmc6d7NitHtwaLFKxzdD934f",
  "key9": "82b6BqmFPwWvvhwvqQTu9bpPFJ3ohwfGZZC8LC12RpZMAyVzy4iKwXH3qont7cx6FgKSHpTW63MPHCtuPco8pRC",
  "key10": "4isbMYvg7EKZbCqNHtSsSthufM1bqcxzuHCYZTMujTP45HzWt6GDH2ME1iUHofyNuaRrJzH7aEmqoNHEfxw5zp55",
  "key11": "7pR6dtBer1U6xhVhsTRGf9abvooNKorLvRS62xXDRgkMJjxncB79bGwf1QhoGNdcrBqQqWpGQnVFgo8qPjLcikT",
  "key12": "4TTaBGM5zvU9BPAXRfKjWSjdDQDbhLTVrNer9H27mzYwF32JYN7ntGhtp15Z3rGX29122rgoN6njemhrTAd8KPrk",
  "key13": "2TyauuwUnmPLHZCT1JV1XhDsv3EQwyF2qekgrdKnU2QcCYPcXn1DqkAQu4ASgAdvhTYqwkyoi8KcvKmc2NpPozW1",
  "key14": "4LztSRbBot1VAFxmdm41N9cskv3rfiotkKtSKQU77ok78hRSCFhwCPhMryevki8Hq5C4xj9FY7jAfeT68YeH2Sjz",
  "key15": "3XqXCUocFh7fLz9xtQMvie6tWqZGmuKw71P1v6kGcPH7vU2SoZZKPusVS4k7kuT9RaiySy2hyPV4jaBPAwNqU2zs",
  "key16": "4CskBSGAADFRRP5KdBhU7cW2MaEeDPTyyKXNdwR8HMXCErtMrxQupyac1Dc1Noxim8ZZLrLkcJz5AiUiHZV7YcGc",
  "key17": "2jnVoNvT164AwVCGNNMi8i5ExCaN43PdQxhicoYN4nmgJujL5MkBiq37ntjpNkke3ppHH9RSBDV5xkU3CAUacP3F",
  "key18": "3h2C8ef7EJXLtdBDU53paQruQJuNGLU5aT1tMm8EYRXxcC131hwcFn9pkTzVem13cfpRF7F11GTeAfqG4b639M9Y",
  "key19": "679kxNLx84awdZVLScPfmP9FDdAaKb6KUWnw3HnSZubTdFLMEfepJoQ2dSnBpGXcqH7bEpSzoFyiyiN5cTKUfyYj",
  "key20": "2E8BrgnjQ1T12ad6WzxkMhTQ5ayjXKqgZffxcsz71waqNfWixzsgA7DyF5wEkTEYF8ZwY5Nma3JYY1Bdxd55GGi7",
  "key21": "Hhcbou1D7GH79WSdgCgzvFYWGGjkXh9nWBH4EerjqpFfjqtZ9draAxJkm67wij2UQqE2VNZNcDNskjj28jTjzZN",
  "key22": "29kuqCM72Ham7Um14RGWVdtd7zjjaYZMq4mEjAMNY6mZ1stL9NP48fsKQQxceGErZ4Emmid76Hcjo23sMFkReQ5v",
  "key23": "DcsAF7YsQij6q6kQ7ygtAWz2JdTVoa8EwsfdPkanmFU73XL6R6viWMJ7gD6rWpA8t2kLmEBJ9XcRynSVCzQiSeC",
  "key24": "4i8CvDwJ5Bvr8BzeEjM8fFiwYzWJHyfdq4mUuWTNFMR6WpKdoV5ErqenTSQvRb8G72SnAiaaCMBYAaUrpfCC5Zw7",
  "key25": "hcMJhZtiXvcMP6ZR69x6FMaRfjTKP4V7VEtSbXxxvHKxAmr2RpRMTAJTQNqmvqm9wU9atrbeKpYvUjWTKaz7rqZ",
  "key26": "hAqW11ruugHBa2t8y75dYykrbRJXD4fdaKVVgZ6w5ber32THSCxPh47su6J7BRKTDJzhPt1d8E5bDgvQn8waRfa",
  "key27": "PYbTypYJ5nCZeJdHJZwRcduGA6a3B1nqEYg7fAsoFJ6JuB93TEAsVbPUZtGP4ERuRmzjHPHE7w4TKtafJEpjVWW",
  "key28": "2yz5RWmJGfbYzBKCiAgNZdeoZU5wfhmpSKCubBzbgQwkxhVcKDip6Xz9s2uURDQzrHjn5rPVvHVpExZgKQZwKfqn",
  "key29": "4Tx6bwLUPBvbCpL71eQCM4TV3NqQjfT8LoPkkVeLmR5MLMmPdkF55sfG1pZ3qPoCcGg4em6PNhozFEGmf8jT4ERk",
  "key30": "53SyMrEFZoCWdrwSczrUZ9sVbfuTmUbRLCwYx1ZWHuzMfstGrkN5z2CoPBQMN6cn5JM2vVpPYWxQ7wGiMKYskFhg",
  "key31": "2r7mpQSYm1RdA3g1r3ZCKBAHvajbCqbfYGgsKzzZDhVB4pdRdRPkGWd69NSdrLxiEBvGXp7iMTm7bLe1WKYFZoab",
  "key32": "CNSdA7jn563rycY7GSFBN5nMLQEQD4yYPh58L4gRV4e9JtacYe5nUgh4tGggwpYxDfH7aikVuTnG1418utQ1HWd",
  "key33": "4TxqNZyeyke3vJP7wXa27PygyX6kgWVxHo8of4Wj5BV3UP222g5ruENG3hzX2GYdpvW4aRMSKmytf1dS2jk4qUwF",
  "key34": "ScSwJzpPuzBHURTULkbjky5MTmgo6ZtGyfhJf8a8nms8wNLMfGC4UBA2PrMXL9ox4fqgRdiPWzCzg129AC1tBAj",
  "key35": "5YBAtZPH8kjeEa8FSrzrmEThbEZr1z5WR9KLjoPWdjtmRvFo85sGFM1kLkLCBdi8xsD5PCLYia3L8Y6RBaQhmLqx"
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
