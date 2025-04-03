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
    "4q5aeNYLnSaEFKj2y4F1JubSX4hBUcXt9Zw1y8o1EkhAbMhb78aHE2WatFaneDy8wixNsrLUh8GftfVsDMwwmhz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdfLxW5vUpfhrBX5kbnE53LMdccc19btA5w6vEafBRPPHwzYoqYpUprYUBsRowMLpZYVQkACfwwQwUCHKjXy9rH",
  "key1": "2oGWzkT7J8XzMs8xLyJrebeGHZw2AG3fVdnd3Lg1FZrt6EbDnnkVJNcDnJR81DxXj4er7KE8bj5VkNJj3cnfj3Ha",
  "key2": "2rZVQekGjG7AXahyYfKiwvhsehwU7Qii9jTid8AZub81bbyqtDJsuBJewXPtdqFurfPtmq5Shc6oeHBFVbQpcG1L",
  "key3": "5TG8oJ1yD1JYqLvwiBwZUcgNaZLqTWAVA3WBY6Das3UpvyPRrQfSmGafuooYHV734zsVZcn7DyyS24iivvLv7Yxi",
  "key4": "3oNULpoY8Aqki9FUQLhZNHGLJTe7HACe48vgkwxAnPMYj1nMLZAiKBC1eaHugDDrVAXPoT7ZgC6U6s2L3KebmZ5x",
  "key5": "7n12Zs74EPKxiWt68XpeXDCsXjnjaDdpHbsMLpS48TB5eeoLbtx5GS1hmQF2jx5pxm9qobWks5NqCdeQEwYGrny",
  "key6": "59tz9j5a1j4bksWpmY6d5FZHfUBPxqY9oAzBLGkwypKRkS5hZ26imgBSjhB1ZG6PyT1LJFP6ro5KPZGYAN2R6et4",
  "key7": "648jkS1Fvkft1yYepKmkr61jTPPiwDepbBEc5sja6FDuTbYGvVWgJq8LY4pj96BYzbQLMUYYAJK8tHfoLtiEny9V",
  "key8": "3xW5hiVMVZiW6LaHVrbKKtiigB1oUBat4WhEgzNcgEk6Pvk39gxT6gogWKEP3FXQnVFU7y9yR3tzgSY7P2sqrgZS",
  "key9": "3D4C55gE2pfNQUFY15en23NdFM32PKzTD2oTXypLDfVeCfuuDS2N5R5VqX7hPiRUVYbGbLditR1DaSeVbDNiNSvG",
  "key10": "4Y2aqAuR2xqiA7qToWdt7A8ujAj1GtAFRCcqHjVgozXzdzw6xJWuKmK95Ehy21XkbLMywutUHrimN38fyzgueGYs",
  "key11": "Gk8RutM48vW13Uj25RXQBxgqVgmtCfFWkEtDphxhJn6jDm2hZBTeEXF7uwJArHCJLmo285Kzz3eAhF8C7Fa36dJ",
  "key12": "2NrMoYYM9wD4AeU9xT7a2Ma3sQ6ENvTqxR3Wkg79SwVgkHKNJsxQFqqfgr8c4GMKXW93Jrhp8nCtfYGjSE8Lm9kK",
  "key13": "4ER7Ly6p1UDoV6xfzToZ6zLUgWYKaPbXU8uw76gdSPxSazHR9R1RLkZ2cv4QDjer7Qyha1QrjkkgafHQvetx1zD8",
  "key14": "5tbMjjPJEKhziirJNyCt354dBDXjBtdr3AjVhud9hExx4cmTfHoQ5fGjaemy3JvyY3s4H6iqPSgRKEi6yem2qiJT",
  "key15": "2W9az8eSdGuGT1MVPY9oR93j3d37dKFjoQZN9ot5gmKsb18VbB3wno2zYo1HumrFf84Tx1VwCEXJRz1n4h8SviGB",
  "key16": "3maUBJbZqCybUZEHLMiAsDhM784w4fPwmx3wLy9GCsb95oAtmkG2yhZyixV82TA617VhWw1Yc8awhrBHpR8hdAn8",
  "key17": "3Rm5q6hjFMmmDPWkw7Z7zfACCZbbwFSxmvoQtPBtVmHoxcmUUuqWfzWSB83z3tdKnVQCBEFgWZgeZMChWLymyavs",
  "key18": "4QLcx8NZiwNTNAfgdc7zw9P3GXfXyA8dR7HUqTNx5Hdg674JToSivGPqMmkGzNxp3Z6zowSpfFGLJ68HpmoCHJmZ",
  "key19": "27HSdVbZGVCWD6Tvhq4iVQc9K1o66iR6q95FZmFYFmcBii54ZSFmHpeydGFj2kS7SwXGr849eHGydXg6YXMRjBEg",
  "key20": "jUESgVBzjEMvy4XLdzvp3GLH6xcZCJxdp391CkiNmX18XwRze9je7egvmXwg7YzMgXvMyubLtyqsSGBaHvtg8yN",
  "key21": "5X7qeymXL7WcV8uTeTbfNZDpayBp7qV2r2Qrj5kRU1bhdPs1BffbARvLgVQa2LBCXC31ZfJ2a8eyy5QyLKe7GDkW",
  "key22": "35PLLBVKbp5WCPXJDcNM5xSB246Zgi8ep3jt9PFdg75DqYXfhgoUqgiZEvkqw5Cw9phV4dxvMsWcoLoVS75MWemu",
  "key23": "5LhF3bTbUTsrPxKzHeXU5Nh3xMEjYrrdGYnUrMxAFsFuBcM72VdJuPX7ma1s8eYNL9FicKjynWTfd5f3Hj5wR8qr",
  "key24": "47v5qSXogG4HoatC2HazkVbcS7t4Mq6KarZLPG7GumaZnE6aYfCWXLd9wMV5yMsaYqDKaa562VXZ5z73XBvApBgc",
  "key25": "NfeiChSBjaQ9YH9ps8R1twRAqMbQseFpnQWG5Yu7UXQbUUu9YFa3UqZdBANkpr3hyACfqzvT5yq5a9UicLUQymt",
  "key26": "dDZMLrRugiXuPU89hSqZTsC8ik86ddvAFVPzdjJBwy5oYjj4NkXPAPFhW82pNto9SEi381RCy2xoUmLX2dm71jf",
  "key27": "317McMpodY9DMtpPr5VXQ62FvKg35ate8e1URnFuJh26KGTey5PbkJXBhXsnqtyzquWjApnatS6Gd136SUf2dEz3",
  "key28": "231xzdBVqzYAduC3zuw316m3TyzpvzL2ur1ZyLu4ZiqJBnTTYpCrTNUqoaxX9v6kotUMzJkKwyocVnLAyVcMPSEw",
  "key29": "5L24UQ85EuwU3znNie9MGmNByPPANQWfcfGLDXjKJeg2bF56FH3dNoz93i5JYCUr1Wce1qemUpbJoWTRLWR4Fwmu",
  "key30": "LyTVtuA2tCyoH66w5YmeX1acDveVTUwTQkE1Sne5Yw6RVZitnikg4ciakWFiRp3gY6aAiE989hzyTWHko1AUNkT",
  "key31": "4BhNgwk38m4ppBVoXC94w65eAjYhHopXxR7V2XhgLgUbxB1rjLDKrXqs32ZK9QNKVDNPzKfzH1fXp4nLeyZ9Y8jr",
  "key32": "2dGq4fGmn22Gh4uX34xVn7iRH4VoPREKCWqcdPG68rpZBa8w27w9W6TfqveARFXUaEpV7AGcgewZSn6T45V3RRej",
  "key33": "55g5hLqh4utQSnXwr8cknGU2afhcbRa5xEZMYinocrJ2r5C1pH4BB89ffxNsaxtQdNh8HEF17bncRo62oNQXhV4m",
  "key34": "52je3tih347CYHGjjBub2abeiibKhFwEfz3fhi85PHaAB2rD7EZRPhbh6cc94YEyymiB1Rc4VY3pHbuFXSe4VSsZ",
  "key35": "5PVcx2FMYikexRYBBkfNUuoUUdr57GxpvsxKTvcfuvSGk16oC1b822yQero6VCj5NnAF2MWtbv3qSFLH1iTaLKNS",
  "key36": "26bgTzEjhnt6JGXEa6mmmMw3h1BXLJQtBNLuZL8ntdmsobrVtVpWktL6UNti6QSobaNSyMb8cgAQUK19fFVydaqQ",
  "key37": "Nqe5RHXfJBZ9DdJyBKwsYt85sfK78XkwBXN2CwnF7utLxoGJramSBeVdbjcyAYQ6ZHLrQjSBc6eEtJRhUWb17A5",
  "key38": "3H1gpZ5WdfLJhPT5rXoQ4MhbAcjpwTn5Jsji3hy22kAgttU9KEZKBZHxwL2CJtCEZSxUtgY58qWEWQR16nKvuY6S",
  "key39": "Prrm2uB1ZY4VLPkWerPCLdEMbfJvRx1L8hssY3uCgNUGqmnG2J63eHZvjm7GY3FXc9Jzdwi8X4EfyKbaSUtwSPL",
  "key40": "2k5fJfaByg1cs5Ky6KNdjrSt1RiGyGqNwY7JpMAqD4aw8omku17gcyvAhwPZLWB85fHbpZrMLDyRPMeNvjp8d3QR",
  "key41": "3qKiqnm6m9jYVNxwFD8B1YPiug5kXRixmHJe89ky56hXU8GdBrArKSTDNs8AW2Mutynxd2rn9a7chTaoPxvDVJXn",
  "key42": "ZhHTz5xcvC5zUmwE9sZgg2md8Ra2gPfj4Jyw2XRLowDwgNhZxLfi7k2H3bxgPMPTA7nvWyg4Vy6u58rAMTJCCcW",
  "key43": "4ztYSa39wU9bucDYTJapSxgL9SVcUT3v9poc7FfXjx3Lp1LoPNhUBkgtxYrP1Bjz8bGVyy3a2d7PnXeR1SNpMzcf",
  "key44": "2MgQ4oK9agfuWrAgCVKecDJWtTXbshPHhTjU3cgrxHgkWgBLYu8QECkqVKYkqSYUHHnnoPF8ifWznH51F6exEvKV",
  "key45": "2ETGMAamXBYrp4AN2gbTtPzmUHEx1BhxG7gfvHTphE4L3qeMY3Nxge3k1fQdEu5uVPX5BLaw3HGnj9TFZnnBQ7Cs",
  "key46": "22PTUy1tXVCANutDC7V8Xanz4JB2EH5oozpyVy4ZZ82hEHLp8GP6SMFPBHtWcL1tyriLACydb1qTUSkC3vxBMgdJ"
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
