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
    "2y8fCHzF3jUmyAJPBp63eh7yfZFarP3haKMUQib6R4feNk5jH8xAHeRLYsRGpE7aih8VgA4S6CKN1CMdQqzdfeQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDNJF9BnNj1Vwr2QPc4WGdTid2AYfERur8TUmB15BEXYRZ7cdGLqaUmxygApmRwx2tS78QpZeiB4G4a7mVnhjBe",
  "key1": "5oWDmWYuAfvw6TLmfBPBCRbgAuLWqQQFdzErgic3YfmUiEH2rDJpS2b5vAYCX31B3WewYNsijp1LAXww51yLaK2h",
  "key2": "2bHPCSUF6RvMXmK2zeHjo8ikGyPM2fwH8fQ7252Wgso6z4PPHznniPM6SJPdNGdBYmpNJCxunuJGApTcKRXBAzS",
  "key3": "3ivqkNNzvtE51ST5ZiPfuYBKjVB2HyyXG5M9d1Dd6G82fWWcedxbghKe6g2vBny4hQUV4fzyiVDF9RjfU4uMGJA5",
  "key4": "3RxRtagXowffaMAzE1KqytDm9YuPnX5puzs8ijk8PN588A6sZYYWvwADPcK21UYzzWwu9aqc77xhtCQC5yr7nYUe",
  "key5": "4V67TWuKbFv5D3HVbDJKtg4ivDmbUiKUvg8wjcsSzNRRWSd3DhC8cxyhB92QiZvhZRRQBHtkKomZBZoopvbPz78A",
  "key6": "3WBgRz4h5PrUsWeHyduTprYzn42JUW7Po4LJYG2v2DbRYtBsbFBKUPfx3pJA5F4gu3PHk4Khj4hsnLikzC7Xm8us",
  "key7": "wevi7u2MNUmcdEJwYgK6CFupA1uvKYUGgAzSQkDNFuEBZsxerETKuV44gtNqD5xt9tGLX2cHzKZaUNkrCJEW9Mx",
  "key8": "51LNzuN3VQKJoh9mrag1o8KYTESub4Anjkb24kHYEWofCWFwxJGvT2tS7KuijTzweNFk9B3JHrPfAv3EBTcAZJWt",
  "key9": "2Mb5VydKQraTPoBAowUZHbCHiGSHH5ssqBVFh8sHrECi61AvKXmTqNirocqyVzu97tPL79tmGT5LBWCjfbuNccGc",
  "key10": "2CHGAsFrTTf2G1ZPzxCAcZq3QpxpxyifNKeZEGARA2AEbYCv7VuGtNhXCjrqaTBHss4cDjCbcTcDyQuJPW4ut3ex",
  "key11": "3LGi2a35b2gQktXtYecHV92RbnnU7sqX8HdEEcvNKcac5PK9nhTVHLMWy9JuPAwsfQmyG4kdEaFhjZMcWGoiQYdY",
  "key12": "3gQ5KtBy8tPAdvh7PWfGejshaCyeRgxX15jy3gH3pWGPACME952ikB2fkchnwiKLMd5rSzfUjTgzUfamH3PufJVv",
  "key13": "2tGdzFkopNj5D5RpRKtiy1rQCdRbbgaMF9fgtg2wUSmpnn5fwGytUVgwNCSrS3v3ThsTpWZMWL7ggCpW5GbgqG6k",
  "key14": "5dwR5YnLibiaXt9W7uLEdK1auDmkqH2K3MFD81yqkuVDjvoJaK69n4a3w8Nh1f1XFPD6icmMqsMqPrrjN5UJYGUa",
  "key15": "qSQv5LUwXzPhviTJErXgGun1sK78H4ZM7vd36xhpUrhyKBfNyCz1qsSuLaFto7zbHtVZZsFqEeXDq96AEcb4hUt",
  "key16": "XmFiUfDNXtWUNV1nNsLXkc1zaFZqHpkFCpj7cUsj8GFZbkV9PcpuY2HMffNyRSuWh5GGgocSzNDqVoJpUy93rEQ",
  "key17": "3xVAS66A9zfFsvdk1TDJvkEpqMERsVbrqxiEJPixgWLBac5igWtGGNMbQUiH8tQfATKaP44MBuj8zCveKzEPGqK2",
  "key18": "4gjWhVnNtKA8QpXt9Mc6HyB7egtXRzHr8Hzf4Xg17Mp7EWTZcNskQsSySRZDgjSucg6mbThp6HeRchVXi5CBhRcH",
  "key19": "2ZzkzvstCVFNbj2LZcRhCTMdTVuGFwR8vKU8nhEQ2FbJAmpFSinQVLUw1sUqhKw75Nuw3KStBjC1FmexT1kSQVD2",
  "key20": "2EXDZx7DWAHGtmYWhdHLL9zuo1oWPqez3hjHGCMyy9QRLnT8NNAxJ46RuNnSopDXmw9hdhifmR8ibdn3puDs7oQH",
  "key21": "23jYJLoyeXwnGyjYrAcAXzBtfTgHcQgbJ4GcFSt6ttp7hvgKDqkqFmrRDuvCVB7mLjsAGqstnBb7Jh2PJbpuwRqT",
  "key22": "3asSsBTZ79muMZqKCjpbkT7Jdke3pXBdSDjLZ92NZqndqfXGoRz8MMrwbBMpCxjYTvTUt8L7am61f4Pk63h9jgS",
  "key23": "2zjWfEjhbKHv5H3wKnx8TDziBWBD8QcTDeXpragkthFjt3quqa1XTCsJFJVs3mszVetb6Y6FKgNBYg8AKkV3s25p",
  "key24": "jP9GuTAr2aXgiHfK1NhCDrd8gGjHHhqeDRjfV3yocM7AEhyYAQVT72scsST7CSQjDAM1LKAEJSXWiuLfz9X6BwV",
  "key25": "z4et1F5FPtBSu68NZeKox1RFc1eUueRmzrUoLRMKmqPUfDwMpUVEeLa5vwiLp4Pqhm3QxvuPSsYVnRMRAHE4Bkc",
  "key26": "K1b212BNfiajy7KHhdzsyXAVYncuSnwVYpJgRHXSjcip3zBcmg7FS2pRg4H448bdrX7m7yXzVqpbvxahWs119yp",
  "key27": "29FTciyxkVdWADPTt5g7BWrPruR7V8Mx4CZ7L8tRViiD41DF3FjRdPyFwEn7oDv152mh9iA7jEmzf1pzdeMVz33k",
  "key28": "3AeourwLbrBTgJtmEBZeoeqcsczwYwtXPwjoeCke5K8XnFvv7W5iRzfd3RckFK1Xh1y2AUwHLKFmDGkrM3jzVmMR",
  "key29": "53s1Dx7Tc6gjHfgK5QP5FLVAGjdadYf9JnChimCpDFor29B3prMdNHy97b8hYHTDdA2on3DCv5UWAYTByfF1rMYd",
  "key30": "3aAMAhiqM3fcXtkiSkzCN39hHgqJCumTaiJ1gRMg2ARneWS4ySWxE6XzbQKYV4H89jHxRuze5dN6D2kVfsXQGvaa",
  "key31": "VvEoPqtxiJPptgzWkaphBgHAZVaJSUo5N2n2pNTxg4H4b1ojRiwyZCk2pp9L9rphy8ejNabJY8ypsJY8LoHBc6m",
  "key32": "vSQSaFDbSBZLakVq7Gnm8qTLPLNjWi4nm8peTjnFwm7W2vc1CwXFeJnM3L4MKKSxiFDZ8qqkJLUVPdKLTQiS9J6",
  "key33": "59KMV9STfC6hnSPsLCjJQ7CWd8LVSdPRVLVQVEpx7daNUjvawj9QHksvL6fTjFHNKiTXf8zhrrxHpzxaUETtrMue",
  "key34": "4ECGZgtddCJs5bKLNrFxt4VTzR1wbWg9KUPNMvWmfesmCEKvHDHojR6sprv2ZK7KrXtXsD1TLtciAopthhMxjh5X",
  "key35": "3Pjr2iMm93dME2BNrv5JdGnKnvNuAcUkESDFyZ7KFAT6ycJPNeF4Zc5dSp52NHsody4aEjSVMM1uvAqVg11uPj1V",
  "key36": "hRXbrfjyNwmomdEUW6KnyYpTGYBEz3xwibDrnYCVGwdvAHaybqT9W5ewrbWss1ujvcY9baB7FzooFjXpyBPw1a4",
  "key37": "5sLdYFtFmRovFYeAQP8U4Ljd5kEFmfkRgUJahQTjoDWTPPPXFFkqiFoKLxX7u1Ha23qniH6XRXRd8ABQPs7KgkV5",
  "key38": "otnTXfbxmWYnWQqCNkKtihDSr821EkYLd6Lv6xARi5MwabgZtsPxVtJUg5yKESYkshzDxLou191MZoV1mdY1Lne",
  "key39": "gSBZcmFfCAHogt8yukVEXYwLB8SDCBA1jmkXnTrtKM9RD2toNfRqvZt2JRa86QgijpuE3HA4qJyU8ywQ4QpAoWn",
  "key40": "2ju9kTmKnroZiRAQ7EdU7oHik1WkF5UamENs9StDaBMuXm26BkKLSxgKrC6Bt1gEGBPdEDW8XMbhDTc1hpoZiNKZ",
  "key41": "4t3ojQGRubtPTfQ8z25Vv55GQ3Cnpyxj1Yzc5DRC2cXfUGs4AHZktdcN5ANkMbwXyRYHCzw1XU9uhQnaggeDf91A",
  "key42": "5FR9wBTfa2yPECckVLQDYQQxLHkkUquUVT247vhNsfnDGMNpuP4nsBZd2mtg4YmmWubkQqbwsUgGNh9NEfzpzwMG",
  "key43": "krdyx6faeFX5wU99ECexgeLYqfNJsvHVykCG2c191gPXjQfyEzgyhmy2mMJS42saYxib9DGFPhC8Kp5ENgrqRKE",
  "key44": "5GUWeu1WTo44YJagR6ve83sQM1wribcN6PfCEzT96HYHT2DxaRTKCcVT7PDkz1uERC8WwAmc2fRXXsQCzNQCbztB",
  "key45": "41zWLokRybR6Z9GJhJqwhmWe9oPkRn74GwAXXFfZopnv2KDUnL4tVpPyterNucVY2KaxTw4UkY8QEd9pKfLBfVdR",
  "key46": "KeHC77NN32XXk79sMQYNH7R44ji4xiSYZ3yxZWh4p92deMwvFqBMkA6Kr4EACGdcf382sW5Jx8zgCR7CBkx3usz",
  "key47": "4sFA13hjQndZPJqLA9GWFwKAQor9EgCWpdGZenLWgFY9TJqFaGaYFGHhGEL6h7FcbmVayNNrtWdhYLhQ5yW9PAki",
  "key48": "5VM4NV6LPjjdWCNvN9PhiATHnNL6pjXXcqf39dM6z65f8Kh6UR16KCNAHRW4QtMJbCNqBkM9HWMMMddKVp4emgkz"
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
