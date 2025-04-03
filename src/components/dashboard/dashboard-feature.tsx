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
    "5hopDgnm1QcZBSzxiJHbazqZRjxieXg6Eb1vsFpppoUZzHdK5zJncAszbcY549QG97g39d3XhFByY1nQyhTnkfax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msX9eVBt1kaXzNSyMGeDwZh6ZHNv74YLh8kK5XRRuFvN6wtS4cnPa4XTVnwrda1XWaV1LateHDzsKocqcay2atc",
  "key1": "3wg5B91iPuNmaKBx32SsA6eVaB34zwpvRiAo7uWJm7jTQEonm17EEk3qmeWB3cPKb4m8HHHU7BGqqYvYbraFBHr4",
  "key2": "3bmYx3bFb7HcJZSMCs6jgZaDA5y9qonC4HoTsuLeHu9PXj7aiJZtwnzqe7wxfgBbJ2dpJUwHTssgXoNvKQyyHYvW",
  "key3": "2Dw8i7azrxpPLSc6MaWqbWaw7DuYcosPZx6pDbbpdHYNSox7huhL5PR174D7ix7y6w5VuHZTN5Vu87aTGECNPvaJ",
  "key4": "2hBh6pTKJcAvv3YDV97BZbK1LkVwFHZZmgcgxsmxCy6pqReHNfEK93HiFJaUwb4FQPEjZ6ePyUiNMZoS8oxQnm3S",
  "key5": "5M4QMVvH8rb1sx7gYtsK45tAY67Vi2vquELHkCb7wLHsMTMjfPWnznsggwuwoN7pyF4UB7rL3stt7w4v4AtDMyVi",
  "key6": "4osSZC8diXaFLrpGuA9j6RCWudskuE8qzZ9hiNYjQ9bTupPk9APXvWSie4JdcbiVVNYTaRhpNsLbwZUZ3zzkaRs",
  "key7": "36XhKwLXVXUQKWbjRZYUx1CZBVFRgs8RdkHze8ccWyoAaBartzvP5f6jqTFymBPSuzKW1ypuxpJM7ZGnm1Fp9Rqn",
  "key8": "42pvZEmEdaDVVNarXRqskBJ34uRiWHXKvnhf9rcSSTrHtBdsk8qV6TxQEzBfqmPmh1iFickVWNkrmjyyFjX5XgrJ",
  "key9": "4ndqiQLYBTHdtCbSFBnjEcs4vTmiKo2kZan3EUTYpTGm3KG94VCDmz3PBp7D46S4a19tc6pPNDBXdE3mES3h12ZP",
  "key10": "3KkAawQGBDC4ofmJ6uwgpGx7gtfrK3yRDo4o1nCE2GcP6N8L1yYEhwyxArk7Z7hSBVcCU5cWvJf5C1A8jiWVCbuD",
  "key11": "4DxKjBnYozz1KhapBfoAd2bDTXJF4d8ZLFh1q4WfyJV4KuoWo7KreFb74UjN17ryFGMfnhb6hA9Fk5yZU6drscdT",
  "key12": "3PMnLVueqeNGiV34vaBXJapvqcm7F8rKNSaQVLSj1TYETbLLzC8jjo5G3ictUVVuQNfbYMDnzrmp65Qr6e74y16v",
  "key13": "46tjjcJAQvJD1iDQb9iSqxb3xzq4uX7zzZ3WYDm2S72Va9vxTVGuyQmhxRpXSpqtVqWXzfgGP92pYyXUvqZywudD",
  "key14": "s9LYqXq9NPh3GSDpPzV7HP7PWuZ7zUA52BhiD7Fn4rjH5bF3E4PEPGPhB9z1Nt6MwitDCEWsFr2BK34vh81Yc8B",
  "key15": "5pZ7jRT41XgNuo1zVNxDkiUNFDGLPDVkgu1KvtP9zfFsWV891ARtrNiXP6KLM3GZz4UVFJ2x4y8chAHCZXmqjBSR",
  "key16": "ALwtMMPhg1p6eoYh9CodeWwbCiNupML6DjecaKDtLm1idYsY2Dce7oA2641gHMQQEqU2Fr2iR1udzQuqo4d2tdV",
  "key17": "GdotMphuzEJGRr89VP2LJKqUH9syuoaUhd5C9xmUKKTSTtygH2M5xDEKYTjQJDRPr8UgcfgYnzFV5sPcT6pV2EP",
  "key18": "4oDCRKRYFhBce3AGwT9oxWQED5pkT4VP3dMhP4nZMmMV6P7JadTSrGfsGn6XsPnKdFJTpV4gApBrVHvYoEVWQgbd",
  "key19": "53T4kNyAYXWAAFcDPbR3BPUT81RUUU3XncqtN2iu4ZuEp9HeM89RbBgeqbJmbF6EzTxMng2k1pTenLQfNHvfh1o3",
  "key20": "dz87x1n9YvYct5DhkV9GsNJ5GUj3rXxQKiuxfGhYYJGLSrwXCqHsMk1itRKhHuz5e32uHUPp1mr42u2oLuZBr6U",
  "key21": "AoNwgNghLz3J9WopqTzrWT6Zn4Dy8tLmfVxGhPGwAvFQKFy2gg8RGyQz4DFd27pzNkKMpurnB1A9ohb8ePTAcZG",
  "key22": "2ZS7XrEPbmtP7VHopYVNBpoyVLdn4FnzQhkNkAGBTfb1betPMDFAMcxtmRcVp3BnBNZJoCM6QHMwC92AtvUR2N7J",
  "key23": "3yWdNmDJS6bZmjBCUXyWeFJ7wxjRYQUdZjnBCzRM3E61gWJRhHKoMM1aJcvjGtTgxUbsHVdAY3MdGGd9EVSBY12C",
  "key24": "4ppXukR9SauYq6JkRkcU3Xt8ThTDpDveYfs3aatGDzZ8gW8nCfwZJpaoNPygEpawrFdeuv7v1D5RkbhaumH3cAzi",
  "key25": "bp6tTWSmMwa3zeSoK2LLTzVP7qDGLzjcQXFNMVNhoGMNbognno4paq9xYWEPQwHZ1pQ9cFKnPfUu55Yp9iZEJcg",
  "key26": "4BSDUMzN8hZaoL23zbP2orZgBA3PQvHJu7DxcNvBNmfyRwjF2GZpUUvxvoNEE136Tvs1nPghUQ17KizWmGKZyq7B",
  "key27": "4Zbz2UwQ5CR1VXQsXSpu4eKyGSFocxSijFSx1CR1FgHdAcUjsvKrXxpuncwmGUMygNoVCmGJqkv21HQndbNXtwvt",
  "key28": "4AfpcKKSXLSzPZbzfNhEc1dfKFwgnujfLYra69Pkchkbq4g4sSAqyTebyB7BBzybf4Pvq24t3ZmvGJy1KyZEp7Gh",
  "key29": "4hL4nrGzHFBV7b5Fe4UqT9fYKKvXuCyLnytgYuh3ue8keNzUw5YQJNgdu4XNndmDvsSTzkuNitcDXi3dg5ojRGdZ",
  "key30": "BipcJu845SSYyf56738gLnqtxi2cjrThqwMgfiHwNy4dTAHCwv2HhfE9LvXPNtNeRExPRzWcehbVJn42Hqq2KEb",
  "key31": "5j8kSC6bPgxp6zFMyyXcWWTJLYySh14i2Smqk9fkBbNHTTZa9iY78Q2CLJemGrjbj2jm2G4r3PY5Er72DsuDA3ZH",
  "key32": "49iUV2RoLoSJKjFyhoMv6mYVYgz5ikcExCQmYww9XogG621xpGjdWLTgk44fGv3mzNC4DPLGCvJESjjhv3x45Lvz",
  "key33": "2tJ6tjcSUmhY5tgtu49avXQjbyTPa1bngn9fSzMg8AxNhQEyEvgUGXbEBPw1pQiwRKGC7C2fSKJjqMpjKo5hGgvw",
  "key34": "3xeZrxH8mTojWwsm3K85jfHFWrVxH6gJDo5Ydc8b29sHD7weuZ4cFdXZHqsU8AimApaE1xHKnVsCkRHNQh3XXGCu",
  "key35": "5JDEd9FnAjLSqv3jGs4KbU1PqHxXULZwZ5WWEUeYW9NRGqiqccwS1WdLGuBdmMR4R85P3aM2WBJGrVJGNgpFU4sb",
  "key36": "4VEGxaMegZbUiTeDeoP8xUZiz87ThruUAJKCag9ArektbFZHh1n9av47bRTeH6E9QVHbzYucEMTdjaSZ3wpbtwsF",
  "key37": "4TJF76ng8M3JjmTdhB2kA7oCiYbCnnJB3bex7RyFWpdyGep87ca4MTfKhxmWb9crfuYpt7RPvLVLNby4or6HJE6R",
  "key38": "5fNyJy8L3snNPMkZbsgukhMNbLrikwK3KuqRqdAzrFTLmp7SjyHnn3nuXe7xbX9ZjEPft2HukyBwuERi38kc1UX2",
  "key39": "xZzy65EcGEK1NjoEqwaZAnhHjwGxJ31hMyapYefc3YDPZkYmSZynT7tunNu8uB2JF2ZeMioHqENcVEdvAXSyah3",
  "key40": "67LcSFS7ZF77GFom7Wwrf8TitqZG6G65vw2Fa97gBDczEGNXCqu8NbxCyBxLhZyv1vYVeHjkCSGqTuWJzL1wfoTc",
  "key41": "58tpNmymUdqjYaYoxDkStHm1BkyfLfKDyePESpbdDiEKuaQJ156whtU6rjV5sk5zyETbEc92PyHZ3MAjaZuGbvdx",
  "key42": "uM9Y9eiRUKFsWzi8cpoqmKYuuUfjk5NBpd6brProMjYzDp1S6GLtibfgGQ7yrJjMDtVxPAcoVxFtZRWpEGeNPNz"
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
