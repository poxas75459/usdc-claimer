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
    "5yf8NhzgiuTtF3e3xWpR3tVUgjb67aG2ncWHuegi19p2BttZwasvxveAYLVK8vErVrcPJMZgQoC1jNNC9AjhGxjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKUDKzChN9mvFE4EQfSHke88mVtuJhxguxVZRZpLygTMgcJtmgy5WQPJ1PACz2bfkowsWygXujFnpcWnpG16TkS",
  "key1": "5YB2D1dpDW6y9E7fJoQZaFLcMZyC9C8xZLn7rxQfdw7ZXC2ULsFBGC6WsHRCTof8ckP5DH8G8YL5obZWuVwPfrmy",
  "key2": "2DRmtQiFtnNKeniGFH9nMJuehdNLmaBoBdGex8ZcZPeYLFn4qM7rFMjPmqAPEGfSkEYPUYH15UsaeN5kPMXiPSBb",
  "key3": "2ZvUvNoTXTaFDnt8pFTQW1tQT8s3srrrczLw7ycpSG3JYsHgdoTV8tp1WVZomQ5Bj3uZxvugJ3sJyYpvMEb536ap",
  "key4": "5YqqFrUnp8SHFqMnSzg6AywgKJV7rbdQEhuPnqdvRfePRbmFanZg15VJRkbtqdPibqkFgjdoWsGyGfBFLhmSSkXE",
  "key5": "7r9Awk7RLeQjbxKQquQCM9iCLYwfbM2tyvHxL4Cz34uELDB8zMLESaFjnBRaTfrMe7M8pe7rwMp6mgqJcfpert1",
  "key6": "5KEYnkfSeJcK8qYbaZoAx4mEquzn69zswZr3z5ar9NifArcFVMUwmbe3o2Drim2urVSqAjathAukQzodWuwASn6N",
  "key7": "5eDCcWhDN5Mvnr4bHFWJ2zMVAxUBhn8iJfMokTGQ6tKcKezv8bvCJ139bnyFhquMcRyN1r25izkjtMbx8nApSAQm",
  "key8": "29cbAZtzyZTkxorTjDMtruigaJdY4uWAPSs1YLNRbx6mPAArXFmdK9DphkQmxsTkG9xH3LKXJE5oVjyw2fqRhov6",
  "key9": "2foaazc5LZnAWY9ryvoTVhCE3ifMWDXoMV4ktKQunhWgaHuMZ1suC5CXWjToxeCnsfxb79Pp6DELrKMHyN8VcjRU",
  "key10": "4YP8AzpSTzNfaFzWx2bCLZPP3FyAH7F6fiiJURRRmtuEA7Udc4PuPsEqJRuQYm6tVn5VFd8fB37wNqkydmWwLpJZ",
  "key11": "tJFLCitJGytTR86idn1Ej3YtYoK6UdFdQgG3DWcJZzkMvHrcR4NN9eLjdZgrNVL8PmUWzYCLK4ybb2dsuHL7518",
  "key12": "5Xqe7e5t2qLYx3woYm7ktr5tCx8KZuhYPTNvvfPMHirFko1Pj97H84HDateVPerL3egM5zjpeDfGQZ2DZnadCbKP",
  "key13": "5CbMFZtpR7DJz67N6ZcKKB1kuUkhzmb9AhccPcUNjGf2Zu1UEguUHTwneLinZeyGgPDtrCpVE6QPB3yYbT6P9pM8",
  "key14": "2woobVqEjq5K576cjSTheXMA3ZUfrvkhJ876CQLiSG3Ay7DZF2Gvn1yQmSZfofzpn8WPQyx9PsZmptrkYmQ9S1PY",
  "key15": "3pbsnYoD2RHbSzhat8scBx6kcZgJuVfN2St6Hm6GcDodusogE6DHuRdrZDK1Lrdh8BhcYuBp4B2trb66ispwRNSU",
  "key16": "66BCKkGMHCXFgNLGZB64cdgGtSdgtckyti8sUGVsY6HpfQUzgMHcPKXzaLvbVA3QNmH4K2ar5mjBeANjG52mVE9M",
  "key17": "2fgVJiY2t8z2E2Jh2ZpqZTgaWk4kNizYQq42jcfDMW9yQAigBcrwa5n5X5NDhGjbUbtkMyzqbAFEdxPBr5ZMcbY6",
  "key18": "2M7wKMdtrwxgnpF6S4vSxwZUADsJvReN8YrJF7r4wY6vEVNwB28YSwVe4msZT7Ua8EPGPxuKjWL8tUQLKfbg8H9i",
  "key19": "4YUwEPA6a9GGyn42MEyHSU6DY3zas62nU7ty42XdhZaMe3CAvuTnBobEifcrCrzk1kfxNRUXic3j3bt4ezXg6Jfm",
  "key20": "3H2AzmX3V6EF7oDmPGeA3fZEegyDXyKYXCa55VZfNnW4AfdEPpLzXVVoNCGBU8zPnTnxBM9by2K69CVfGixD9uvf",
  "key21": "7MVN89L5HaaQMgtREos4Gq8WDsEh6GSE62WoLYxnNKs4ZgWf7q36L4v7TNA6dSFSqJ25nirQFwCydnakBBANEdF",
  "key22": "3bFVAj7ZBTtxTHdGNL6UT22swjMPYyxe7Y7DfQ1TAKEbyKew5G7z3MNEkBemnMMnoYmRvGu9KqBpFUXLduqssmTj",
  "key23": "mt8zzQoZCxyT1ang1pRueya6zYd3H9kuojXyiHgspx8TE95PEF3keno95MGEtfhHfrvdfXy6B3ytjVdUvDk6LSg",
  "key24": "TowNWgqGnDTX6dSpGK1jK4UJG7kxsp6nzCugzBME1cwJB76tucn9WGEfrmyArJYtLJtY855rthEYMNQFQa3LZvj",
  "key25": "3afQ6cTkdPEexg8CenfY4cWTSQJ9T2zp7ha3pxdM8428iJQZLft43ambZcBgJfeZGUnn25V4XgxzzdgRpJv8UL2w",
  "key26": "2XHxLEBdishn4bkAVpaH1aYZZzMbc3KRcRT6iYL34YgNnZVASMWW3sU5Wbq5oYAXPv2J3Lor4Hqq3xHShDPGD6U6",
  "key27": "2vtpJs6yd9eWuCM1TeEoj5A4QYcBjDitNwTawEjhDi9L7CZ3KE2qa78FGJMD6cgHGarnhG6F4GHAzLnqVTJFQYmW",
  "key28": "43ZMKLuCVby36WyPdCaWUsjHj6B5L4A6BHwSrfKbyNjsLHETkqJ8biGeXoa59x8qicGCZL37JHVmswuPJmVJm1GX",
  "key29": "2aXFEkyX6tgWRj6KRXmGMsBwMFKcRDuCJX7kE4oRmsuZvHLqWu9GCLPg76m1mY1GnBzrMbgr4zALFMwQupGutX1e",
  "key30": "3MFQ3WzB9jJkKLKYZX1ABaVs1HwJQJixVHuhHUztmfkgE5mspuMuMCSXS6HXoX3EF8cJ6B4M5gQZXVy9Sf3XpuFr",
  "key31": "3tLpu6qKfJ6h2t3SR8F8RbuPT9KLoccKzdvqHDSpZcL5tE3W3fcuBPSwKegMGzZbVprLxKbta3mzx2UiAaCM7Bp9",
  "key32": "yRu5v4gcZpyKtqw472hQ9ywgkU5wMjZS8cFqgKs3bMQv9ixpAhgJVeEdWcwdZQdHfQAVNRr99jhJdrWwCe6g4eT",
  "key33": "2A8tgFdEvVEeLs46GSoU8zx5gjBs7v3kKjSuwFskPzoKB1StUg1jxXBBEVMKCve4YpSfwYfwZpxxWtFxVzqde83Y",
  "key34": "uXMfdjZg1PZmRSbfmXoMXpWViBZPoHBFrKQkwNeDQHEt3iqkdSgTKvvBy5usD4egGWNGQPS198VKqFctAPusHeG"
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
