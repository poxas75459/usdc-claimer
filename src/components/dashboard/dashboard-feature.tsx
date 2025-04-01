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
    "4HDr4ehG1w4mRaZ5UsKSK2ATChf6V8pq5dPeHa3XdwvUX4wGTyVNsa7wLsnUgoAb97SvcHTBjvFGwhaabxU9rFuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNWkBoQRXye111iLRXhbBKWFmfPZa3F2us5cJ7DhtQt4pqyLSooMVTKe8d3FGrbUzU2RBeqvRZHKgDjEKjfKfQ5",
  "key1": "54uzATsPf3h8f86VfdrXgYKz3MHiWcUhPFxQYy3uXPuCo93sEsMKoMYDtU9dkULS1aBGBmUD51N8uTh8cwtTWPq5",
  "key2": "5HP9nv7rirhxSyi94gTL3utxNUdu5twnRUtw6ok3YRM7NAegZb9SsFPGGvjKKEZuhxyAReQip2nbkMwPTtMk1RPf",
  "key3": "4Xqn3TNzjPAP919Zz5oHGuxNuuiUbcoi6fcdaZAtDcuX1xhegKhMQBKAtT6J1tRj2cMQLyVUjCqv2CYA2ws6xm4b",
  "key4": "ovnF2n2DrHEt1jYRf8n78BSCsQRifvQ3mSU5yEvcntbLUt5t67JaYCNz9gk3NUzoLhR6q4SXRqzeNEn1kavkfUs",
  "key5": "8buo1gkLkWkq5UVV8HA1cxWuNimrj2dNZ3jpMytAbTkpCH33SzFRvaDeNxiuZLXt6YLgQZMTmwV8hk2JcnpfQ2o",
  "key6": "29TbhGsRyUqy7bWQdvFmbdnhzo2WTgANE7D2mU7ke7QhKyarmLmpaeijt97jz5NyHmKSXXu2e1dGycq6tkN8DoDw",
  "key7": "57nyM9WkhrjY5jZX5PUmDDd8e4DQWCCtJMZ3cdLEtAimazifzunxRZG2nzK8xTfj7pRHXDMtCHMngQUuLxz43QbF",
  "key8": "5MKVTZhXHf9f3nQ6v3DiyVNxBuGXSETMvScXZqDcokK64LMx9VRQkAMai4Gf5GequLYvMqh2c6oRuSfuiRLGS5j3",
  "key9": "53u38gosPtfoLNjvpqVzGeWidQMP66z8EZd5SyPj1gwp7VmFG9Qx4PpYjf8X3LB9h4p3GJEegrjZ2H2Md1ctRecQ",
  "key10": "3Q6Ge4ij7smP8bXgQzBER2vxYLFgumaLCYRBxoZnbBYUQhbhTMNYNMMsqXBuRncs5UC2yasNb2aF1jEMNfMRFzLZ",
  "key11": "4JyEriUK1TTmFwp9xTLRLs5XcuDyxir5jsVFxSAU2vG21rU6uxnrBMfqr4JphoyGsPhKv4rVv51NE98oGi1g8NXC",
  "key12": "3L9uvNMPtj7k2mzcoapnrSMFr32vEELpKVed5pxEgRLP9G9vZjTZFU15Hn6sm6t7Ur9LXpgFRki3vREXGUf6tcx4",
  "key13": "L42xRWeWjbyGz4UBNYM51MeskhtFGv2tZWiFXP3VH6gnAQrmoaWjr3Gaus7qU2HJabpPXesSLhZHtLinS1YipgS",
  "key14": "5cWog8EdV3SEdwXZrtUuw7UMZMVF4BHPZ7h6xqHFJXoGs1Z35GemBqo5KZKZPasqy323zSPrZqVmLaDyvz4JCd6k",
  "key15": "33ZqPn4upS1PhjtQs4DqVfhZ7pRNEEnzjFRwyVQHVKzuvJ4mRbiHSfxFneHsBzh7batFjv6CYm5ArMEf1ctTvSc3",
  "key16": "5RnAMj6TMk4953P9eefnuHuNTyxoc3PkK3UySixsRgpKnN4vkpoS6agzytToNaxeUvctnXRGAoEJWerJ1yth2mfZ",
  "key17": "4ZnV7LHffyj66DNTjjG3hQQZzWq2NsFiYUo7To5YBw43V7DgjG4aXEj1MbDcYMHFUhJuACj1PVVudit4vMZkWwbr",
  "key18": "3txTx3gSxPznpeGjgSJkNMkBRx3jhfdQGcVxHpZqvChoM4Kp2XuvMF1qGQoBTf9Qi48rz5bYuNgtoSnoMPzrq5i8",
  "key19": "2prLwn4ajF3dK6zBMP5eq2viGNvdaDjKNWeU33Ta5gCi6MDHb2uGzzQRDS45H8NTrRjGsrXbx42K4pY1Pk3hm8p5",
  "key20": "4gJVh7C3EQpo3WSxX3ta3oMtNVP5hYTU4q3YaeqTEQJ2DCSPXdKFdn5W7fCbe2KScfvfHfJhWnuCPHfsYX9EXaW",
  "key21": "46ZVET3FEThpD9J4n2e5o3ctopbTjCR4Fpt5WHvWSgMTEHLAihkzCV3DfMDh4kgNQuiA2TVSi4QZRHNdESZgtCf1",
  "key22": "5w2KnAXxMtjVHJ3vEzrJVd6pSVYvGHABxwjzQ51rX34m764Tv8SZMF7KWhEspttMwtn2AFYUVqQVrnRSRd77Q1Xe",
  "key23": "2wedJZRwur36gA27yBom5bBWaHCPc6FejdSZRm6VE8oGf2wCEZQ8wrXBRRXhz3NVrpPDSQJZ8BafLPjwMeDGePmT",
  "key24": "2W5UUPc2b2xG6TdYnX7VU8r67d7e6idnGhZqMabv5foHTBZJcbZfTJpkmXNCCMUV5haDayXdKUhPVi92bWPyLZWU",
  "key25": "3dHMJABLc3xjkmXX7ypjS6jTdWqN2aAjKuyAMapRxerDk2uuWNPxdNhHjQWtVEBzEYA851cGtWfymYdYgtgPJD5b",
  "key26": "3N5SexsPMj24Kt1BzocYLVEx5FDeNQtnoupDamfMoweKFBfXLZvobbDoxbh4kepS44p958k4bD8EDC2dbbmZXtid",
  "key27": "5HBYVQMXDWfH8gRYpfq4wyGBfaovCmLZR69ZrZAf68jho4rsCCwd2777tyMn9HdH1qhLKmWSHVpwdY4x7ZCMhmGe",
  "key28": "2hSEbzduH6ExXwtckLjzDYXEnWmykEiA8P1EtQJj5YKVwuocFBpTmXyAmuTDnb54zorGzRzA827Rt29uuEvGEaaR",
  "key29": "3nAarHY1xPxR2WGcYuFSxT9qExgGCCTXi3rkECzrtJaZYXT6tdoDD1uajSak9VAp9q4zBJLopPK6RsYoUvjYu7kB",
  "key30": "BizmoUxy3d2f9uykRUSJQ71SFW1D4TGi6tLfnd7MuaoDXB9m1E5MAgdpojm5E56G2zz9Veqyz7buXDyde85km5a",
  "key31": "4KHcHXC1it213kK7TTuHBRaUHjUFXzNa3TVtNbCogqFvehxgP3bx3hXFsz9pabNgUT4vtjH1SSpF1fxZLYXuNYa1",
  "key32": "4cU2eJ3Md2Xtgfhf9tn7vN5ynqgm3T9xuKHwGWDoBBG2feZw93mJ3i1jFoVGufhPEUDgFcoMgjJS2jSnNTAJtsYW",
  "key33": "4zFJro57QHcFjtYDdEpdS3TKumtKKZMj6qjXTQKu1NjhGRVHexUSyNMFtrn9mJ97BfQnKtGov6PqjSxSqUD4n84V",
  "key34": "kpv5MGVktjvhgHtRS8sNjNARA44VSB5MKTR4TgxLfzWMi2FcyRkmYPmnpDpKB2XyxZuC9NppivoKHWCYuTKN6c5",
  "key35": "5XXyLtKZGu5qoQorebw8bY9rzFv4QcYhJCdkrnwvTpqzRTboTTWX1QJ4HtTSUKZdnf6H8hTqcafHbZYguzGjNWk7",
  "key36": "bVAGTZwEWcTUPRueQgad89xJubskdc779UtYsi6xRAxCVZcZzzH86US5KmwrxwDtugKuwtS8w2Trwaa7hd3qVcx",
  "key37": "2LJQZB3zSrCkmvGnPKVF6QCn7cdBbCWMphVopeCaNfkNAEEvHCdra5WnkShcMgpKbMJLfG54qFKzUHV85cLppp8c",
  "key38": "4x9UfCFi9QhHLqY5XQMFku1jbKxik8SKtooqTkdFWPKU4eGS69NqGNXdfG6WtU6wxpozWsTjDMpzLdGV3XwGwWMq",
  "key39": "Xoib75YwjFBAWA1cgPCWwegmqfXj1QYeeN62tDRviRjnBSgWFgr8dAnm7SFUG841unT7B4iVuBf64rfhsq8VuE7",
  "key40": "33GMnJ4J6g8V74npFrgpV19ZUw86HHAtSyEhofgXHXxZm9fpLhaBheQoU5foKFfAFC4fUQWGHgePVzc88fsL2yU1",
  "key41": "3j8WA7wiu5S4EeCygs4tNwjug6qkgHo3rfKJ9XW3DxumMPTuhYUeFJrAYjsD1XS5pZPrnHKVFDcc1gor3Vx38zRk",
  "key42": "22VfBcE1PgKedVUgh2ifprZCS3HRzNXrftiRJC8LG6ZEMvJZMfAVYwtLScTi41PqS1vCa1M2FeB13kmNFdfV5EqQ",
  "key43": "4Py2KHiFuy4rkkTHuWENXJYKhNMeJZhLrg2xA3BLWUVLxNvnQQRJj2GFwjKBeokeJBge9L6NTbbyh2eahfFkwzqU",
  "key44": "2FnQKXPbzyFdw5vzYruasKYc9qnWf3BmJeJnj8jDSstrBfXL4bzvMjXMtTSR132cCa2g1g9PCSgxEtexRLiouqB6",
  "key45": "2oGvCPjw7174ePye646BRoM6N8vZCB3DKtN8ZFZFm3WChDG2g9jyo6jK1uL3YWGxavCKPzUrV5qCcURrJZKzp9Eb",
  "key46": "rF6ZUNMdiurZeiWR6bj9ZFNzFaEJJG8B4w2NwRqRQ5zArDM9cBDzTvF12kMYCH1EKSNHgDUdbaGDQTzcWqWTHSD",
  "key47": "4i9EgEutWo6eJH1qo8qXzrvGiaXUU1jiU8GddT3dF2J4zBKyC5YHU2dAtb3Zf5f6CoXS1zfx61FdioXGH8EywSyQ",
  "key48": "5YihVbTsKzoGY7p7ojvB9Lmo9K7Hw1LtwnsvjLKmdd9z9c5emPxWWv98uF7gkEf6VUP43hpAte4WUxqR5xfunyS4"
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
