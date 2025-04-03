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
    "4BzgCrxoMWtqemayd2jMjFHTsNThAuBQHgZit4YASrVbB9TPk6goAStF64A7Q1dkD3uNJ2pDW5oiwSbEwWwxJsZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnxTCeRWN96R76UhThtNDM3XPJ1DDsw2vcRDo3YwwZS9DiakHy3vJ3CUsPsRwbtacoWW8GL5eADdMq9sHF2Azvw",
  "key1": "gBcuCGRH4eGQFNHVS9DTkGjyTCpHBnkndBYmkoxMQ1gvLfP3k4HMrchteKrrZDrv7guBBNynP9n6JPu298e1AqS",
  "key2": "3zQRGAzUTgUZczPZ7vWjN9uLjd1KDkDiGMeuQiHvMuR56Vd4mNZiWK4hJZhWCQZeMmtYXCCL4SmThwBtznTawP8C",
  "key3": "4AzAZi81zat9qaozAah1PB5xnJgRcQswqFXdvFrebP3piNsCDE8U8xPstpD9MqzTse6W8vPvoRgE4heDiGw16YMz",
  "key4": "5U8aZ5AM9LMwQCjmt4BV1bJkCnUMaDBWiuiXZ8qHChaePGDtvD5zgv1YERePQMoGJwcQqunSxYVUDyt7YHE3iu9p",
  "key5": "2PDBkwhGiYMzoPUAC9Brxa4ke355oQxDgjgF5vdTxSr1AHTaRG637Tqv8TFMAsm46ibouAJFzmzTcbh8jTHWnzZ1",
  "key6": "zLL7auK2geX8wxEfBNeethh7dmkQw7YUEMRNxHGt6zPvtD83xSuCsSHbYCqYMGz8G2a6uoeQLczCD4SgPFNmLjR",
  "key7": "5D5cgqqss2aWv23MJnVDKHxfkuQn7DwAUgfeLRRsHd6NCjLaxL8ndxaz2xjpee6WJHN4bQWoM7khobxJVteh8vqu",
  "key8": "4UErMbBNPA62xa12CqUQ2Rf3JSXH97kRfYAZwefYJs4pXbkJcoxmDC9ZzTwnBoHKaYyewRBtBrDynHMkzK4tW8pG",
  "key9": "ehfnb3HkncjFPt1tiwcCiLhfcjeB5UWMV7RZbNxAAdFpxDAZ3U2rry7kraZ2yj64opmmq9GwgVFbh6LfDVQogPa",
  "key10": "5RBnBS7nZ7zuYewbk35wTsosZBegYZoasSjfAADygtxaopbjLo5QWr1g9qz4icRaarpJke9J1eq4TK1Kj37poxqt",
  "key11": "3niRDovDorHAzD6bK6EQEvkuNSmfAnwZYuag3uJZy3tN8oVWh1VVFkE1ovfSW1pUTHtnrp1AG9DpGAZFX1ZLhvPi",
  "key12": "Urr1GqxKNLoJMvYs4ZRbdTYhqw1ey6CqN97tFiNBdtdKSFhKzgybKBznSDcZTqUrKDBZY4cAFuXaPFkmxgxV9Mw",
  "key13": "66DXfP3eUhyPU9fgqDGwFCS9VjF33V3x5MZSm9xJjxphUk8SnMyJsB2k5JWjzwAZLWLZ26wGvdoVrckSHg5YDW1T",
  "key14": "4NsTJFPWFYcobM5oAi9J81f3F5j3bTrWtsBdnFDJ7PeEEe8bNiubyLGB915NwoaggV7Rak1mq47vxgGeCh8seBUm",
  "key15": "33RVRx8vAMLXKUt4YUoQvTDSdA1hG5G1g6XDBJDE99Cw4GwJgXJL8iMXH7JNrzM3ytYayFFtexnXDY61TLEgntn7",
  "key16": "4uQA55a4URfgK6cYXHMBZBNfE4k2WSQYrbtTz9N3VECkhyJcnn1uSbToEFJhoxYHESnVKMZCkQ1Buuewy5UJLJZS",
  "key17": "98DkbAbu5dLHrgp4Wh936Ycfja3TJmJMmPXuPQJ2fCVcNVDPJmKvfB5hxBTcsFQASikvVfzz782xZgbmf63R44G",
  "key18": "kbboHtbcZmc1APAF7b2PMn1nht47XtVF66UXw37oakhQUzztKH5nKwyMCMheFtzfkptJAii5ZVA71DdSXTnfrBM",
  "key19": "4QR4nS85SebK9tspJsN6ey9X9CzKoTXQKUQRA6q45cpeVNEBQFx3LrqX11f6ypUoBW3H9hkf8NkkGveSSFfFnuNK",
  "key20": "xDsMPNQPaohnDshVgcJxZmR5cDSmixPJa7riz16uWcwq9eqc53svH1yigb5ieRrMWARKDDoJwmNpMu26H9ZMJio",
  "key21": "3B63bSCCzyHqfCefPzsX975kMzXhaSTPEibZcSyjiyiejomcofkFCnh3cKUpCqwaHvxXNvNHdVMWY2GrwvrUGtJR",
  "key22": "4JqvAcpkBuvgkT59SBJ2EEWCxKcXXzWV98fkVeMqrJrHFSMwJrJHG9J8KbZZ7kU2Cp9aiCPViXe1VhNbd2fNg8Ck",
  "key23": "4PsWF9fLFGr2YDgkHamHDfDDrMynfq6SpTv9A1WfusYQNZ1MscdesJd2j5etWXUUvR9RrRnXtwGeY7NRoSwrTEee",
  "key24": "FRxXm6MS5Pi4xjvLFHMKEYirf4xg9Mom96711PmQ587QgTtJoA32LA5GjN1TzaePuFaJfujXbseaFPzRZHPKCXx",
  "key25": "4ovbz3xgzwioNa6Zw9rNKcA1X47CsDkwvn1LqfQ6aEKpVAXk56p7MbFRbv3ngX1LAhGHvkAGEsSZcvbRP7o9s9Ya",
  "key26": "5Fk1Jk5wpQfqPvFb3BcHKm2a8qsY4kH6P69cz7FaWu6qpzU1p44egeABrsQVpgg1vABDzsxbMU8rL7aByx2K2dec",
  "key27": "58nP7FCD7MzbhNxnEGDUWk38LeTbshpUgvyBDfcvLMr2CfWz9rqxFwfM8yGL9WPKcf8hP9ep59QvtjWfmSStZ26F",
  "key28": "2xdda7HDDdskecTYd2x7ACdCHsBoCmYQzMv9QMJTAL9zdUELBLYXeL2MSVULfFExuxEiBAHrU8Wo2XPTc4Czpcyz",
  "key29": "42UAtjUUeey4u7TTHimB2obt6MW26MBHVwKYMB3XX8tnp3MUb6KTFy3NkdwTqKdiBHbtkPJG52v2ecpM9ED3hGWH",
  "key30": "4eT7tWRS4fHHwntAgceix6SjnHZ4PnY75HuxVvryArdq3m4RzseERjkMSNEx98ix63aXhCra9QpJMAqaZnU9Yco7",
  "key31": "4kA21LLDaQu4vazPqf93JGz35n1kRBLcLK3NnoFmmk675FfV48dgdgey6U9yoYQyzCZ19fM4PQGSN7AEz2d3dXqQ",
  "key32": "A4p6bhe5kFYgfZKxeSBMnAAJe4754dYgKJAg1ud2M7Xa3GeBfrtMe1YJ5wQ21eGTRxKoVJJ5rr8AdK73N7wYWBG"
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
