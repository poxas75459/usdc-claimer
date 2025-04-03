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
    "4GDw6MacuTZ2A6DKd6wAsy9i65mSLB8ZRPEhuq596CRADy6r7DFoL73TygXL5FyGADjXy4seoA7kzELGGGohF2b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esssGT6oBoQgrz1NL2KH631w5MSc5FXnNXS2dWDcgYLiVtuC46QXeNimqC9JmeWuRnjnPnsLjMu3wQnSCb3UGsn",
  "key1": "5VATAjgQFzrFEMn51jqNUrdaCdmbs8BLzfi7pmo3kjFzpRe39KP86RxG22NF1QV4UNes1HQ97wi5ZCrsg4u5QN7Z",
  "key2": "zHMvR7pC4eHPJsGjRcwtWzaAkchPVa15StWnfJanns9oQnstPZSxPxDhDyFMA77FC3wFTdEtTerAV2a6iFu6Naa",
  "key3": "5T6AiJ9H96iypPviYGM7kUZ83vPUyBbnjZWHaghobtt3k3Nis2knxUD1fEHgojdKb4UCNUZvP3dKbokLrsJYTgFD",
  "key4": "3qnkzBDLdQ5VQRHZqybinXHoTq2MH2VZqqh3iJpHWW2bScQgFWkm2L9iZQBsY9BK96qcNd42tByvBXvzW5UN4JcB",
  "key5": "2uMZYCDdQfBJnpFaVNfauMv2HzdWvFbh9w4RRygMjkhNytDV6DusbdDSvyw9oMitho3aNkvie8thKk7QYyU2jGDc",
  "key6": "56rCbJru4KoW6CjNSRTVpfRQL48SRSXMCKpf5k1LWiowzo4XY6CFXHJ69mS74yX4cA3EJ5MoM1pm17VuyKgJMYMp",
  "key7": "2b9byoeW5g3AN8xqNd4szVKEpPSUeQ21NGzQQXiWS4og2NWJi3KEzFHB3926gMoiaqT2HWR7GG9Mo2hbZWyU6kCW",
  "key8": "2eNpgWNx4AFjQ7vp7ymgzxtcSn5K5BSt87GxmpDApE2iw7bwiUJUXCZ6hvUKE13d48W92qNTnZge9rFEh35mppYd",
  "key9": "4PUBTJuBLtLkPL1F18CKi1WX3uCd6EXbv1LjQFNJPW9xNZnKJjaLSrPSDfgSBhFf6qbAASMssRsvW4qj19qe5Fxb",
  "key10": "3yzmRTFUxyzLho4b8gzy6SKCLEnymRbvw43U8YjppQvMV5qEQEDuKHkG54Gfo1M4yhEugj3QePTChmK2uUz7LArd",
  "key11": "4hPdLu6mBw3Cxc8sFjCgKVfECrQHYZY7xB2ZtQuszuEXYRHwkUFT6xC8fs79rCtMZ2QW7QrGzh6V4WPK12NpAbXQ",
  "key12": "5DXUmNWeyTkAq9gJ6Xp9EwJVVmvC7hgAq2nc639eQGqAaFoCpdSKkminYUh8WzY9kPvg2z2hXjbffy6cngWo6sj9",
  "key13": "2WPaa3MtVixFuentjU1htUQzyJPWJCBvi9o575BPwMg4m2xJh3bS13VMsgcck3CPeb1BqaNTpbjoEH1rrDC8jSie",
  "key14": "3qUDHMKaLharDSTgzKV1UYKteAx4rGh4ZnNggvjLE31BxGye2LvLSH7i3N2yzNCpA35ckaSLbRoWxJehGBp8mDEb",
  "key15": "5GCSRccxLjN9stG1Z2yVGN5gbweM3vsD6R5dTtFnWiec4H8LCFJLCEEEy9meeSr43SJ2i5r1KidwpcfT1k5HN9AL",
  "key16": "4D1gL3hBi5fzkc4d6W9mmNhVtFzcpBxpLoe8A7hSBWHrZW1bzYgkLACEWGixeyiKRCR5EyNnS5NJdeG65co22nfV",
  "key17": "64nw2PQ4YchyCDNCgXY1vmL4q9funtu4PTHNPqjBVFHh1jR8cZuYxcpEa5YjqQ2PjgmV5k8AE9oV99gH5b9Tv43j",
  "key18": "4SYPK2tCy3mTKoc2kxS4xomfdhz91JtL8dxgFZRf6q86Zf11vFB8EEoDNFx9wDzmnEM4fB72tw1n8MBsiPL4iUkd",
  "key19": "2zndG564SDARZjJa29d7DbQ1wQXCHeQ3H7waq5PgHWaaYYJKMAcsPgsMA4WCn8xbzWfD9BZ2drAe6LCQfEoG7z1t",
  "key20": "VUTiTjMWyngq7kZuW8HTh3aeN1wvSgYJ5qCmW3DfxnrE9WSNHAJmNpPPfzU6K5C2EbY5R38VrTyhB4gNRpmPfsd",
  "key21": "4Cf3rfqHYXSuqQov1YnYS1iPusGGpHS1uR48aZnM764YDvTMBtsHwfrwZ4g6BFK3EZNDBEsuLZad7wwCrp1n2Baa",
  "key22": "5G86TS435bBhcgqQ1NhJ39MP6ZvWy69X15TH3Kfn2KhJjtVHjskSFqnxDQyoDm6BTFNdVzaKW2j1wrxCvpL4AgP4",
  "key23": "2Y9q2U5eeUSNGDgm8H1p5nfEPQU1v4byg4CxyqajueuGAXcvLi2SitfSAvJzwXQ6mGzr1viNgtNX8og35euX6YqG",
  "key24": "3L62Wkh29dZavhDFfAKQ7KWNo9kw43eodw7zWs9BkTobANUgZrJAj4QPWpJhgZP848XKhSV42KhFSJRMN9dEehgx",
  "key25": "2AbCzFTAdyqTLkuk7k3iBtLkDRpmE9kFGGRYHDYeuG4cMqHDjec89PsqbnjMhtGAyhMdn392cYyYgvBkAnUcGcD5",
  "key26": "23f8CcxcwVqKgRiLUxAMTBESgmBe9gcHioYrjrnDmR3tK7bMKAhrnLParLqUBkLENWGn92Af4W2h9V4bRAnvWVyo",
  "key27": "2XanjFUPXox7kTmN6PMRC3Qh2gA41dWCRNXVcGn99bRwkFtYjmUADTDvPscUzgBL3hjHbw4QmTXdmHYs8CXsttDY",
  "key28": "2WCcSiTZDngvWPk7RdvhE91V5uiD7dRqeiSRd2foFwot9v3meLTW4qRkW1UrrWHNGt4mM9NVi61YsWPAADT3MUxP",
  "key29": "4vvRu49Z1MKjki3ML6ShYD7xGdArzB8zsU1EnhnbLdsZKKNDH597GLmzLTxJUAhN1Y7T3qMMBaQBtg45Rb8uDKfC",
  "key30": "4tcBcgNLH27jRVp6BwyEuVFP3kBvHswsGPji83xjdALcmbcchjHiPCm8q1vAYBsnwV3hrgbZqAFipo9qZ3HBxFPK",
  "key31": "3Qh8VcPGyT6z3AaRcWhEd1BMJrSoc1karpjaopKQUDg7rXQUmQaCDYrksMiURveFXquZHPgf7ccPf45uEyaXQ6fZ",
  "key32": "3EADUyT8aTegmWYPP6UJrpCAbks9neyPYHpkRbQjXPxn39icvb9SfgeVqKmp6ZdE8aN89AmfkwHY4bUcHARafuNz",
  "key33": "5XX1dyj5zcGzWbjK9XNZipKeAzJKB7ZKM4VtVdL7VsTq2guJFQ3RAQuNpKHV1EhJWsEwsPxH5auazfLFtCjum3L5",
  "key34": "5dMdFMJqkNMeqjJEo89F9GF3fzBDDZxjknAoyjE1BkigKpjxh2oE9C7PWHX4prcfExFN9hSvCBVfCuwNmYBvvobR",
  "key35": "5EGvzZZ2Ayc3vwoMghzH8KCrWKufTKzNfv8NQXtkZufvuStJqw6yVrmVS9M18cHf5ceCPZwb7rEfCFxFXUKLZad5",
  "key36": "5Pu1pJFJ1j1RwrtZY8ydyiCqxUsco7i94ECiW732gzKZUZbMTCxyiCoQYFKXSZvf4WPBxMEYnZ9iABSmgoYCvEuN"
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
