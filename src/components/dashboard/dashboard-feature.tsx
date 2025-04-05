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
    "5dgTfSWrPsnGfLg7vG6VAEep27xfPVsKCfpwabKACe5egob1p4yDNiioTDnfUQ691iSnSRWwes69HXnYprKCTMPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542FFTLUHKuHS4B9TnNQ2jHWY3fRhyWPVjaynMEopL9P24N1F7T6RG6qkEJCyCGPamTo8SkRpvW5oMK1cGVnwmvX",
  "key1": "5ZSUHFNspS2UktxhhNFtsY99Mhiw8dA7qVD8KrEjfm4phsgk3XW8Rk8Bq2wv6kWrAK8VqihThpxgLhKLP9hDfb3K",
  "key2": "a97Sp61vJ34ubYF8RYcubS9PWa8TdwW1UKu9wYg6k13xt4rVGGeTbah1Fkdy4FEJK9tGgE7w3VjNndv5yWFApJn",
  "key3": "4t4DXhKb74Xj1SJxWQC7HpX1t1CGj6qyxmzkF6N4avf9PYwM73Uz5gc4T21tw7aoho43yA98LCArfPNrb7FKow65",
  "key4": "33h5YJcfbUqGXbZC5aSZVDME4CwUmJPBfTnbQehuYLcx5p4gEC3GT7y2gfgvvP6EWx85NJqf713FsUAGeq67vDnz",
  "key5": "28HMcfkVtufXXFnp4FiSTr3fap6dq86Hd8s6JVC7zG9nxagRdhfvu3CSjdp4NmXZFFftPD65DmDppesqCK6hQZBy",
  "key6": "25jx7zWAVwwPdq2KWbtvaboQSWDFzKP1b4huAZpTaYkfbFWywrJthSN76idVmHyr3D25m3JyFPo1bXzCVkfdcuyi",
  "key7": "3BKpZQjm3VcuHP8hbb9WEPn2HENjquiMC2Bnf5ymDstz3uY6CtPFm8Ewyh3LaVUXnTx4gk4yNCRwDi5R52XyLhvC",
  "key8": "4xKJ5D3Dpq61Us7Tj36ssgS7Cfb5TfjYzDRBEqehtgk5uZj6hmoo1t4sAtC7TCHDup6dFJaNgpGws9NTcA8ou9R6",
  "key9": "2KUkZn7QhaNLWB1T1Ni3s77FNSbgDrwredg7SUCqB2J7nGeDU6tmwA17uyHimw6nWgt5ZL7kt4DqhyvEuCaqifkd",
  "key10": "XibqZwvYzBqHCLPU4aX5zpTmJDEjG3DnuT8uMZ4Tn6XFjNhn3u3sJmFrq1c2474SJYLZMEZvzM29FkbxDzo35gW",
  "key11": "5xP1fkft1iPtR4b5XCshtMZB1tARg1oqYKYJPu9e1JhvkKfrPp3AwLtzPme8XzVFvcujd3CHRr1HERPqGTcugazx",
  "key12": "4Kfw7JYDKXmsozZEN6L9bk5dJo9Yr3x45QjAWsN9LwT4jWRUwd7L5RADmTGwMvT4bigRzfuanZB6b6HXunrN9LzD",
  "key13": "cXS51Z9rK4YvSUF5vQeaGfKDMKTyoZU39ujDGrTmjmcQqGudAXToKi8QGhsryStvzKn2U9y2gBAj2MYdof11whS",
  "key14": "4RgdzXq2ELQoFjq3yJJUGh9MjG927QY7TCaSF8S3RR3BeeDFeBNhhuBhe1F87qsgrPZmxojDCmtPjQaiKR5pQa45",
  "key15": "jcwXhJqYTSUJfgSQtMu6ryUTQw2vCJyTRFNNozgTCL7fxW1dv3v5yWxftpSXfcTRyQKMFGtE7rn6E3a6fwChq1b",
  "key16": "4iApZZJ1NMpuS4gNivE7eW9HhKBzsJV5SV6ztvNaud37BFX5ZNGc3M1oXkqEztdN2DyyVXBRsKbctSesKRCveLrp",
  "key17": "21nHpvBk5VbKZqpRwDv6U4yjP8bsZfbAWPEfJPCTV3szhZNVk5kxxFbJ3abJvEyT8zco3pch51vTvyLj8aBsHNRA",
  "key18": "2kqhAi9mU8r6pZBgKGqjdKcZucoP1U5TGk3aX4Vkva1rbY9tZJSydHkfmzsmpb33obFm4grDPUsvxs43Btat4SvC",
  "key19": "2hP3Ubotok64WRXCqMGbAEorkR7nzaCoidd7fhxpyVgUreTopcDXFEvKa49L6MdKzjQfnj5vJ6336wXz2ob1DA9r",
  "key20": "2JCxaGGm4Ac2Gi9g6TVLAwAyifxyqv9vwRsPHFtd4rTfJ2TNTsGWaQhmi9veQkVvHgJSEsGHi1bJZumaQ1d1p2dB",
  "key21": "3Zg5CTHxYiGQnSkUjW24h7he2hEFpUxGHmrG6qesGddhteBv26jsh4vRSyzbBi5cLgPZtk5WYyBFNgwRPKLy5qJU",
  "key22": "3EzQ9kU2A6GW9JLLFmwJrTor9emjy6emoFy1epMsqrw2a1Uwda7Ce8zWtkrkqQ36Yghf4PphKGtUoVGsh8u7WKdv",
  "key23": "2ahTTwL9qPqGyZUak93t1iUxzAMmKZ7GSd6hAjqoxmRcFEdt8fGuDEhpQXHtePwFEujLsZTTUeDQn7YrdaRnwApk",
  "key24": "2LKAy9eFJxSch2W2m7dHRf5m5LKuGktqRh4f77Bn9GXfi5xHgX5ngCgvQxoYJJNYWJvPEQxXFwCTcox7TNgfMHM9",
  "key25": "35JgdrUsBKPo8FjMrytPMkDQ1qafqMjTzX4hKZtXULWxg8QJuyugUxH2gxtR8V32WqAjY7PXHWbSEXcwGnwfxmB3",
  "key26": "3xnPWHfjpMhepxBzKLaPg8aayppPFEK4ri5AMvcRwa2bZhfgGndHSv2RCWKTHEAX9VcLFVEmDjNm6rgypQNZE6Za",
  "key27": "52Fr4wwSEisV2k4RJEGFJrZzMPf8JN6w1XoZP49F1VwjyyaGnKhWPk67ZKjvdFyahELA2aZTbYMx6PtrANzG2a4",
  "key28": "ZqnF4Dez3bQMP67NvHcbDsk9MXLZE8RrEzgqWUCyWGWxwXR1b1a3R2LjZBBsfKaRpuofEnKNJJxSEmfJKQtRvq7",
  "key29": "2V3h9roNGpt2WRS37Xdmy8SvsjpREi5bTTZCcKThFsbCVvHcKjsArqSXVqqpDY7mxydSjioAGwvLcs8xzWCkV86T",
  "key30": "5EUirgGgxVUCnSEX81rCBk3vXF7uui2nYizxZCWs4eS4s5EqUxhG6YH1RvKDAG6Ugb6vsYx7sALaG2XHnskcchJn",
  "key31": "3G73Xf3W8R8Cp4Yvy8HVZxqUsVDmnFCkhDabfjGUCGBhenffvCVzCZHRA6xXvfuxbt3diLJGRudXWpQgc7Gxiyiv",
  "key32": "3RNpwthD2hHn39XRGQoSRb3x1MG4sE4RqgjXB2HGmwbsD9hM4bSiks8YoT92pvMMmth8PjjNWi5gUYehJV3xCn35",
  "key33": "5ADJknk82VXkNBrkyjYToPvjs2WLke18HZrxDcAcCoHTNsdbYxMf5N6YGUZSqQAYUUm1HoZCqg7xP6U2seqf2De4",
  "key34": "5wGaZNDmGeMNBjKH3Eib1XMXQVqDHoDgXyyffsT8ZEh92cdcrvKATSAQm4zoutoTiypEfxpYdmET1RvEq8XB6qkR"
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
