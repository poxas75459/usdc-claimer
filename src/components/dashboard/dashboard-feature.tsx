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
    "V2aQYPtnvQazkkKbjdPfYFc5ebSrP3aZYmzPa5Tj2MsqyTu84SuTi51Hr7fgDNspsRa4jLJFkvsaEcNU6VdG2mB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKsnsuVRQM2iBKpM6GgSB8KRPgGv79MmfsvHvigRqJV1Ys2SGucmJUaqJ19wmqKmRVeSMX5uE3GSiWqxSHgWABm",
  "key1": "2zaeSbjA19jKMQQy3waLHSY9wLp6a8knxTeizejE7TiU2S5H2z4yAmp6sA5pFmbiupKtozZhw5U9FWbpNRhoKkai",
  "key2": "5KStRKscNvt8kvcN93WQhcSo4REknzUY76DjqxGcXicRLG1bf6ntu5QxmdGcVbBUozQhn5xCdFKh2L6dKcuYZA4H",
  "key3": "4wj2joLyw2rDRPKCaR2is3w3RHZ4oP6XK86xYuukUuuc9sqPjaqobjzNjvsdmma1HwXtYXJBKBwpJzaDhJxFCntF",
  "key4": "2JCz9UxY6cSy7ZJgpGiUhxbm2nyc8e3owQ3zFNANvkBewwFxWqQdWkFb7xzRHTTzfYqwvSU71ZUHJVBwfKL22XNV",
  "key5": "3bw35ePS7aYsUrdoQYghADtCP5kkBnuT9MjRZKqq7Nggp6S4RinTtv1wZTcN1igbkWMv9prtsZRsDGrGK5eKuVkX",
  "key6": "4SKCZZ4DuBMC2drThCTJGYkLnTzp1xgfjdbvb1xEXXdGcVrEn9Rza2umBQZn2ZnZQBbLLv8zJGQVGHDUuCUyMP33",
  "key7": "5PMZNtV9ndBXw6QZoLNZi82ozMLDh6KpXsVpfZP2MPURE4SLswBqrcNvU7qtJJMps7w4gPb8w16xju3Ed7zFJgG",
  "key8": "URRqZFfhU99NN24R2wSqE54s54t4MJKCJHQMGPiAMcbY5wRBMydjQwf9MFaeWxmHiDtbtYWBvcVBDHtaErw79ot",
  "key9": "VufY7hM9R3eJAfW3kgiKRHndbtt1LhvSJymeTBHHLhy9mJYhNRKUcip9UsTx1T36q5vH9xwUPTMhumwDUSxJUDY",
  "key10": "2Fuwf4wXAZmXu4EEHnxi9uNJwqAN2XGQTX328rMoo3b6Pp1wcyUm9PYpqS8oS7MonzbBm4vyicFgvhRYyJFDamP1",
  "key11": "3TzGhhYuaow9mUmU2GrjYuVope1P8HUMoNDYZkRN9vcwWtKA4vkFEqyS2XmHQuzGNrBmnP6qzTuHx9qy6Y37Tgu",
  "key12": "2hRpTVm66XdKWHwMi1rTdPY61ERByoXoXAijfFrMtku4PmyrU3y1rUWSjkyuGkrQGujj6ofMMjorr1XM4jThAQyS",
  "key13": "sFhoj6UtMHs3i8UU5EwZDCXhDYoZZzmP4gr6m6JX6LjHPVu33VPLhLkpj9Dc229ac9m68LnTrkXLehMCNsiTV6z",
  "key14": "21pvwZvzHU8geZjfYFK2z1p1uoyoAnEDpVdHvRC3hvXx4pKEHQYS6NFxHJd9xEGvXyHHFABkdjejmXEhC12ZcRQz",
  "key15": "27uam1MS8XGcHthGabkmXkgTiRm2Uk27UatwbtvHkWhAKxpHRTKaR8eq1ezX4bW5PGaCrWNKgqE5p3W5YdCZxxUZ",
  "key16": "5iWwqAz1GnW1WmsLsBQot2E7xHtMDNwkixkcdeoVtx83u6TpUUGZgGqSAL1KJTt5iUK846HL5W7eZ2AMqUzopPCr",
  "key17": "gJGmFFf83dnE8HMyNHWPuqEoGp1ftGGKhrbjsZaJMGdGi1YjauTb9g8QwRCv5Qm7kqabAS412VmHADE1hXJeryY",
  "key18": "3tHwHV5ksoJ7twzMPbY2ZQPuv2GfkW5cWPkAGimsahQYsZ3on3J5mrKhcn3wCAXQrrTx54AED3NUk1Eqv29zckGS",
  "key19": "35SzXp6dgHeg5jUagdzd8pmNwkbe82whYhoUEZDbbLYcRmuyy4kak8fvmdzfMUeHNAj48XRwTku7WrQdccnHwgYj",
  "key20": "53SDosNs3nchUc1swRxY7fT3dA9p1aXuHHngwMk7JDmshiuuyakhgSg3NzfRimx4hX5gQmuqdT95xT2ZgVkg8g1G",
  "key21": "4F8uiao4Urrmpqw7VpKba2tFqFLoMi6Ex1jFM1XqbtQPivpHGGohou6fqYoroqexU3S94Wkfkcv2rSb6sLpjhcmD",
  "key22": "5eDDUmUp7ASELv9RDG6VmQETvp92LTm9Ckwbcu92zpyHGuYFd3mmyLTv6osJkuM6omXEAWFr2WLdqCFyWa3ohk22",
  "key23": "4CFQjHdBriz46Rg2XNcctJqvGvz2QbJjAJ8CG79QepfNfp8Cxjx9QZsaJXpeJmejcnV4HWwVxS8rAoSoRu3179T1",
  "key24": "Yk59DpwaiXFnpRhsyuiJLmR194R222SqPHjivDKrSTNryz1VTbMyaEiWEzS9ffZSzQcAvjBZKVGoDmGpi7NR1Sc",
  "key25": "4DoijU7RjrYEY8v4g91hovfG9xdGFZF8fkvR6sdUyQrn4bCeFb6o7fTiVsQcoNdfgCB4B6Ny3YSzhbZwpLbCNcs7",
  "key26": "4KDPDFm9sCDuEj18v1x9FLW5t9oexoHud2sC1nNjvoYTVSynFNSUwcF8i5dFsmCrftsZtyWaRxtS4QKWH5zWGGwV",
  "key27": "5WX7A3d8aSEeqGtuqiU4ihhQYbFEvHzvaUTR9WkUtojXobPcs5Jx9ik17xCmzGQG7NW7ynhBsemfsFqXWhE2Ltx4",
  "key28": "4Cc8ZpwbM3eQqqdhBgZY2jSqLHea5XBnB9UPcbyn8gzDhY4niytkJXEba1XdpLtaPd7UxHVeM4YAJomtTsgBLHgf",
  "key29": "5KVPuPik3XF9NmgKpXqMy8yyvMkBtJrW1f8xqXzKzEvJeuWuR88UXKaVEy9Gh3qiMk5eSpofjjpX7LEDipVxtEiu",
  "key30": "3xairBkdq6mF1oG5hkjB2rY91JpM7Y9Kx3D5Vp3c3wNL1uCw4kP53rNaTRQrbgahW8T1vvJmrWdnicykPvYP7UM",
  "key31": "XkAGeowuTJBPCc41rL41zFFgyA8icA71o2MDEyd4fqUQygWGyfTj3zJFttn4K8dj3H7gBSF7VcCyGADvcs2ULco",
  "key32": "294B8q2hRWfTWP9fmeDr4Zp4sNKwqCLA2U4dcgEVWfYmZLu6HSfYnztKzkqjeGe71VMGSjrUSp1CTZoN3eGUu26s",
  "key33": "5qDunfBydCEZY5se7sGWn3c4kdamyW1Zvii2x7xsMxScJEqGALQxZycPPXRG7r34borAdtE42G73QQU16QDJF9do"
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
