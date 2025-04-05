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
    "3kwM6asvMqRXajDmv5XnGCQtgGPKCbXkQBkiNuNL5oFDYvC9ZwEYwxBMkVb6hRV5BSynxuMVKp9KDFsTxyLnd3kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHKFXvbnSBh12ZMXFCudV1wYcnHxAxNmyt4ECVsm5DtvjJ1mB6ACxoz5Br8tYpogLYCZWisYd6LYNoyY2nhKug2",
  "key1": "22rEXiC1bQR4Qx8shsYfK59MFVGAfibRDitF9YcfzTkZqDhCVBCpVktNx5qAB9dpM4c7cV2ufoFvotPrpxLZsQCs",
  "key2": "ZKtRM11aUg3ayX2VUn6mxu5TuwgcRt9pscZw3CeTXmdbtu6q1LmVPEGGHnJp8oPpmWz4r3bCH1o8x2hu6nqPzsN",
  "key3": "1JBbJw3hi1hGhmznLEMWiKiqMn6kceUVV1tcPMfuJE7SpUMWWK7t1uo9g1Vj8V7qjE8TmVsEF978Yv71dLGUhVz",
  "key4": "2eai2La9xSh1esVDeyo3GDUdG3oDLkRFCP7QYoN6f9bGtJxrzKysC21yvX3jYPtJsX5f1UY9RjSgmqb7eTDTKhbf",
  "key5": "4PNHs65RfsbeGZ6pPFpGLVtvQYhmzxbnvdGAotHupd5jsaAfwYofztrmVAtrAamV2MMrNXhJ4hxjUeteSVkEjYXJ",
  "key6": "4P8PEHkqEbPPoyBxL3iy338o6eebRRSp69GZeP7hUnStH3mL1uPmvLfUPmG9coJw3XVbuoPXgZP6XYBbwVkjNb4k",
  "key7": "3frYMNSGxH2YZ7aHW3ETU6Z4mMKPRPvrQURuF3TaZRSYe7cAknwpwa1pHxCEiRKVpokAYRktaE7pXAFSVJzJqHq4",
  "key8": "5ZFgDTviKPaumBaowQZJR2y1N9ZkkcwyfhJcTC7bjSJdvLFavZoUBC7PHqVfUgErKEiKVE5cdFqbMokX8PMsbTfU",
  "key9": "4Wcfypbsetr5ie2QPcG62aV8Hh77TyFURTbrHTv1A3VNwFVMpMx6eHnjf2wmK1Czcuus5KkWeqENVALKWNVW4Bdk",
  "key10": "2XXngfwZneTncy5koscsGpM5Kx9GMy4JjYxhd2ALjAcFaSx2YzQ1JcfimDY3L6Axts4tBf7uXK7Q23kAxpTvEQuC",
  "key11": "5tQM7cfP5ZcJmUBVSJqH7kyfPYWH4ESGXfPBU6NNyVrjiDgMLzGQf7Ds7Lu9aGjNXRs8Yywpnmicgyph3pF2M2GY",
  "key12": "4FM5fXeLKVTidak1CvJ5k7PbFKrbAcppiRACricjB1eimaZaNCGgNFtNUv34wJASosVnqWpdKasz2rXfiprAPAwi",
  "key13": "5i6KPMsBi9ScJRYdTMzdcFD9p5xMZGFhHWca6iofbgEFTLePnBLCfSGQFQ1T6qmySHeja2i9YMJK8K4wZE5pd7mn",
  "key14": "2afBmgWFuzTiyS9Xhh2KrVFf7oAYG4zukgHWc6vv4LquaGGPg9mp5upXvRdeYhMXqocxBaeBxdUJ5YqQhPBUAdVG",
  "key15": "4PtkbuyqVWW6jb1TXw1CNvfUNZN5YpiKedLt1PAktyHtorWQF6oLBg5pF4WbnJs52CFBNiTQimrNnBqiPVizsYEE",
  "key16": "65jSRgsB2gst7Cigo1T3YuUe3r73G9xrHxhPZNbuvgCEYUktGKSnQqQYT2MrcZ7BNHNZj4z76qp5jRBhDp6csfRp",
  "key17": "5sGtjj2EXso2z3Qnapffeddpz3Uf2VVHeGevjQsPX6K8B7o5jqkbLcnxYyhwNZmGr3yEPwUrJCq381H6yrfYCWxG",
  "key18": "4fik5sei987UkgQTWP6V7edmeLk2oPp853W7w6sbGqvxBUQPLe9ShH8pLDJYTzPufME1jKFYaZ92J2Vo7NKdstAo",
  "key19": "3eAz5Ruf16uZe1EGVBKMDCogRJyH1SRZzZB71B83YmJasBtKKBfu2Z9NTe3LL7Qoz8Yya6XUpEK3CojyLChNic41",
  "key20": "4b93zZeo5YMCjWSAQNmxjNJJzdwcfikDB48YwM3nKPgnsiVdQJB1Ao8E65vbu3TPLDWZ6DGE1s8a9hseTTk2ppsF",
  "key21": "5Bh8njvhieVTTb32EB3FbqH737ux8yC7snkE7byHRKLHwjUVSfnamqqMzmzERPndQtmbkUwh2hDRitwAGSptr4Ci",
  "key22": "35QVngLsH1ydkxsNrQH6jDsXxPQcSUWscAJKeD4efD2MUXLmZJ8faanq9pzqYobDkz8T5jSp5UD3oyFbdeKgNQn6",
  "key23": "3mtq2cCovuEwyLcDW52z8uYngDAXQ9SuJyPx38xPXPz1HmybrMqm56RmV2A55RqaTyfKmVCJ7H71Wc5E8ZmdHf9c",
  "key24": "NrxbQ7T9Da1msHYecijHywfwF3aznBfUEA8sbktpSQqzea5bVhShgPnt1Wxot9X4yjtxvk45wmBwhdWFDmVhsXb",
  "key25": "5eYyrnKP7aTSUDxCR9uvWAExAUNTNku2GdPgXYduHNbBquMzcJWQhn8DncTB2At2fUceQm6KVLcJRGrDmmdVhkrG",
  "key26": "2kK8iYHaCfpmRACji3k7HGRf2R72oT1AyTjw6T8pJ1khJtZWtwtFkC3LcDQFamxejbyzDajcmKnT8gGxvxAtrhJA",
  "key27": "RyqUfdqU5hwNCeirpyCuwFTYCDLqZQzfQRmdKkRBu3ete15fVGhnBs4srQUMwJYdjKUFPac7NxoWMt2fZtqpmyP"
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
