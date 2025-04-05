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
    "5aDXaj46pXz8NxQso6JiV77S3KTSabXjCwTNghMp44JManF9HQUGUeCsXxGVGBVtXmxunbHT22ecmnGig9ZEn8hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "87jo2RiRQKTN4ePP6gEcA8qcAQqzg47N8VY3VomEqCW3JQwox2rBjxWea6B6biU8tJESMZtfVnwSLKSBjJE51wX",
  "key1": "3APNs1JkYQeFcGu8nPW835aFw6EW9ffeX9u881Jej2et6hKxd2ECKY1yfEeggg6L27o7MaY3twmQXo1KDDTNuker",
  "key2": "4Vp23dbL6YNyYPUByMyYDcbX42DcFbWd1C1yhAdAkHVeX3PGQDXwZ7nmTxdz7Loki3GXMVhWxomXiNGrWKuauNYW",
  "key3": "5SV7PsDyJGyHLz7VNPHAaaDLi2GMPPtfr3fKB3Mo7mXoxvqsnAGZR54EjWSUh2PedBLyd65muRixZAN5vVCaR64x",
  "key4": "5FnhR4mCdBtHpQxYyByXXhTFxVxh3mccRVXntFokSs2F6Ug5zX6MVJnNDsJSZioG8C1sgZPjr7MMX4bWcCqRA23r",
  "key5": "5UpdQgi9f3cxjpxE9mPV2h6xk8dfhsoXDKK2PjMS5XQZGgLtFXbpDFdpXtRYWEM4p6WSbayYrtbrogeuappkYmoZ",
  "key6": "4o7AUQKGntSaYe1d3dePDnyg5N8G7Cs64HUPd1uLb699bD91sUpatkRAzrfNutcq5qL1nFKhCxKniGAbfsn2ycYP",
  "key7": "2rN9yB3D6qe3bFww2tNwFzJpHkmR97243cQceVP6LuPk8mSTgrJcWTGLDRn3qbJB7JN6ctfzxT6k9R9sVTctLoLk",
  "key8": "5VqiijL6xBpL3sVyYZpAK5aLD2srLpC9E6TXJJN7EoMdTZgLK7nSZAoD4yzF9J6H6arubAh8dzuuN6DJczqSRV8s",
  "key9": "3qwWj1cMFNXoR3puZpXTv23buzix8xjE4t96bj8oKkFC7xQCofMZ2oXCYJRyLZ9uTCHPPMjWtwQxAENZkDZZffNp",
  "key10": "2Bur5M7jD4B3AKzPJZWkvDKKaqKB5FFitbhH3QEusPN5FmFXBuWf1ZGcWgXRFfJDGqfRJdRx4YmrVZuzSUH6NYEV",
  "key11": "4JpJQXBjRBnCv9LDJbFaAcfrrrU9eM3q6xXgxfRTH95afjk6g4hZkYRkV5BSbjn8w9unvkUsNQZS27ymKnk93Y1Q",
  "key12": "5QDnHs3ycYysDu86M3yH3DzoN78z7PR4bgVfmZUxn4EW1GmLjoMtYhCVdx3nFgwtScWNLiCQMJ9unz8XdRjxUZF1",
  "key13": "4HUTaGx8Wrj87zdNdx1NVTs4qPFXuHA1FN4PJjFWUFyG8gbcttrcfFjatY9NuF23oatQo5xi72Ups9vF2EoZ9Ev6",
  "key14": "6FEcj43pxyq8buVhdFQRnNVnuADSp693Lz2UVhyVii47ubknetVFPsu6Pym6FoqDtSbXNbC8aJwHVW4E8FLGBt3",
  "key15": "5xeFsZ8ku2B82dLFyWgDD2AX48zrNeEp6c1A4S58uXjKxSHb8RT4y1pE94KRbZhHx7QEppVWEWG4GXt8yyAg5Arx",
  "key16": "3Y3oZu3YKADum4s7P16rmMNesLwp68CnBqAf5nC1EosJ4V21G84tqPwLBB2o89dAHJgvo8aPufg7Rq8nU3oKau7v",
  "key17": "AMGpUu9Pf8EwXmsW55vMaRj1q1KaME3t9sANFF1afYQ5tWmTQp21x4WY7dxPwme5B4p7sW9PnpkZsamG7AoYH6R",
  "key18": "8uhfNzR4htHkGc2owszBZVp43hXaCfNsFBxdpckeoqpcZSHCUTYgA6idouBPrDzwb3CkmTZmMuCtEAHjssSUoMY",
  "key19": "5KpoSxCX92muEJB8qSS6WADwf7JkKB2WRYYgWwiWqJjdxLyuEbVxfrqgCM2s332oU7zXGCfWKQRy2dvydZJEsd7k",
  "key20": "2vssHnA49ZQwKM3EgPfBLSGtsH5NxY4RMgendrpam2o5WeuGHFnLLGVeHU1sJZx5bRWMAX9N9GxtGDfaPVoJgAP",
  "key21": "5148B4PkhFw5d7A4khrhAC2r3SP5FjyXqtYfbonqx4HjpLKdoxHxiJdqRto7uCKnDL1xEbeBN5HwJu7RfohL8VCa",
  "key22": "4N5EWmNFXpsJR9cHKC1txNaGUA9qJUSyQbi5XV497xEsxfZ2GUsRb54Nt1Jdwc6Kx1TqbzrqBp1PyufYZDn5ea6N",
  "key23": "24KPfC3e4CzpnnN3Mafimti3FQspGcpNsxH2yKViNxxVtwadHNDe9qq2vqWntkL2smLTTphHP1e5ijZX3DMVthU4",
  "key24": "4Mp6RpAa1zVLeJPDqrpdpv39BTXWMdiT4yDNLHkiH8hktaegMFYTZ3d7ATMJTcL9Cm8htAdk8dRkm3gEqxudeyKh",
  "key25": "uNPMrZcUnpu3oQqfhPzyr6YrkVGzh4TprsxXb7SXmg4tABdri1ZzTpEeVt5Qz4WWSgdHxiwNyMVwa7guBYP7NUn",
  "key26": "52dwxXAEvG8b7xhd6N4Zrvq7kuDsquvwLKumJnyEh4AyzRNnHKQtaStP2VcboUneQmGGksdyFNgdY5jcpK4Lymtz",
  "key27": "2fF72muNSAeZXmJJ76WE8cKfGNSjoaWKBxKkGk2WYDaRguL7snpwX6ZC22xza65LjjF1p4koheyH7PpGCDF9Uxgj",
  "key28": "56QCnT3FbKicwEm5RaSt9YPeqzNm4E1SgBLeU9rEUNjxDQzYwBFt7VRYkgtbCcCgsVpUJRvLeJvV6uCE41nX35fj",
  "key29": "314f3mqbBpJGmbV19LB1QiFtanadsNKrtNZZKe3bS4wxZWg3EPxTtt1EhVynEre7mmtxB3TBFZ5xG3Y5UwZSsTy6",
  "key30": "3cKBnuCFiiNzWaGhD5YHmKjP5g7zVpyYdtWMhLE7iUovJv9sGgdtCsuPQ9Gd8PviiwRrGAmW8QjNa135VCj49z4a"
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
