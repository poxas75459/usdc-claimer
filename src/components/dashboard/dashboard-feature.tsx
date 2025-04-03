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
    "eDgvx3YUbfsA5CQDhgURDF5e1i1oPrrrr1qQjxMXC5BN4h2Kdmu5Wi4HU9BcYiKbQoVQ8oScKC81BHBLsR1onmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5a2R1yd7jcoYE88PTf17ZwBQdt6N2WPAjZzR6xKiXej8aTZSsxVr9xa2Jvojno397ZW1LnSbqyAMnY9r18yUf3",
  "key1": "5iVwfYqQKnEA6n6YZGghDPm15wqxMXRbbTC7sfKwzez2cwmvtsqCt6gpC56AvU1csM7bbw6DcWuZ3z4L84cKgekU",
  "key2": "2meKZP6cdhyCupu7W9L5T9yrvj7QKQdDR3WVWucJUfPavMLB2tqHcmZC7u6aRMHF31LcJRdXFXML9362neqptoNq",
  "key3": "BDzVjZ9X5co11HpDWoJUbx9MqD2AqGeik41jD75HBiLG6fdMvL8w2uKj2TTQdXSuobhKDQYeaLcGJkVHxS4wyqi",
  "key4": "3wSgkxMzQAFhgTxfiq69c7EquSSW6akb359Qg1kWhqhVJkhNgRw2Rdip9GA85HvShuu7QSFWp2u73WZrzV5iMUCd",
  "key5": "gj7u1MwiFojUPCGRMoscZj8SQ277cWGJZxsiHwSviT1fk9iGLBWaF6X1iVG1r2QazQegyQQdduqiTQGWc2r9mi6",
  "key6": "4rm8qGueWbRxxy3ptJimLB68o48eDjXcGcNH2dtfLjd2jQi83DeDkb56EdoxxHs9i6SSVRccx2VyQEPXnDooUwbH",
  "key7": "5HKqYcvqFhxfWLr5ijjdD4B1Vwg4ZAg8B6YrHJLDVARNFXvaF8ZvsQuVTv2WzTpssTcyvsZq4HTgQq7VCXBYGwre",
  "key8": "2xjuQX4ACAJWbmER53mhxECAXtrL12CnbvFRXTLbb7MfjorzHF823wLH4eKWAxscLLv1jnV5cqMweYNqgabqJtjR",
  "key9": "2jrpfdRovAprUW8v884xFsNHWCprR86mVp8hNh2KDCEZ81csmGHBMbJAi4Ys7XtQYcc4fxjeAvB2cbd2g4RSh6AH",
  "key10": "3nbPqqg5F6HxRi7qVMvgFq7Jc83ktteeuiN8K9rEdZ9mLVCiAkHLTt9fdBHFhwmNC9c7TFvRs9YecqZTHVF1okmf",
  "key11": "2EDrXMTVNviz9zgaTbAjuB1BGpBBW582p1n8GYvgSVMp8FNPEhx8k1idersu7yt3w9YnyEhjs6oMhCMFNVgB8MLR",
  "key12": "5hNH1LqRA2pDGWuTGWqTQnzcoHp2wCkSs6TCiGyuSz2aTxt4nELWjk7Rvxv8uyn8XMBzwLgNBdbTDuokRhtt7o7Q",
  "key13": "3VY3yMLifB3Hodnb1T3Dus4GMEiBQqRu5RoTzqAdeDL62bZ79Z3dhwkwCb8GTf3Zvx41es3ptaqDGU5Q7EdmGqkp",
  "key14": "3sb2LmtvY5FzURUzjMprpmXbXY6eKb9HVJ2qxV1Y5ARP7gfZMqP6K34CfNELucUaEhjwpsfxmDVVHHthtnquEX3N",
  "key15": "4dDxkwmQ1wfUTNT4gsWMf4SWSEFLEPMdmvR6mHUL645Rf94CJwdkKNEY2Z8G7XZYthRSKFQm2se8GQaXytgFutrn",
  "key16": "431g8hXdwHRnFNeTd5Td2J6noUSvv77Fv26NHjG2d8BNU85dU7qWZx6QUiCw5E8HKV9qtXvVaRdLC8XXmnkFg6z5",
  "key17": "55MacA2HsTwhsTToEUerv4fBzU7fEsGVbMnet3Wqgbey66dobtJR3atuRkEjvnWR3SckzgQgzf5ngHyu7fk7rckS",
  "key18": "3xyWA1p4GaQLYSdMpvmsm4a53fhzYXNoYNSepTk7mMJeXE4nvR7Rtn2K3yj5cSLDPqyNzosaR7CVMEcMC69m8onm",
  "key19": "4xSKeE1vbc56PqJhXzdA6d8DgVGuewJES5dyLQL76BkfrHAJrL9HbC2szni7gQwBqvXtBsweBCBRgY7wKoJdmYfo",
  "key20": "2VpuaLWAYv9NGAJAjSVTbYxdw688xxFDQ6j94JQJvEc4GP6Guhy7vQDaf7fZ5Q3KP7orGTHrLwjhwDFDT46MaoM6",
  "key21": "5CfS7EzsbFbQrxSMUg4AzQ3D3aKgdwa3qYS9f6rsa1nFgq9nNuTh9XHP1Pm23Sn8Kw5u44Z2heCkLQxQVXY81CMK",
  "key22": "3gT6TyDDiRMWM292YvzBuz9SjpUbJxb4jcwTW2wcWPGnireo7yrWydW6FRm5EDbiWjA9e1b2D3185j1eLdmubwLs",
  "key23": "3X6HL13dKfEduZQwWUzYAwECYz3uv9epMKiHocbM2gRDfWQNCUYkj8XzrynbpXBPeeneJiLFPhh7rKgazS79Z7Uf",
  "key24": "3KznQzNdgNjushVsNYh49DsC5N4j2tTqAphJUbHTiMMJBMP5R1KoCJAhgNfHiBBrgcNUaB2CzeSy6RcrR8Sgghzd",
  "key25": "smj7jYVQ3UC9tGCJr8tCJhTvnkseoPqvLBCeggw6pCs2RFUFskQBbKmVjkmUXiNUS7E1DK55mEix2Nu38PDnCNu",
  "key26": "bFr8UUae4DDCNGBkQ29Vi2sNBHhQ57Kc7QH3YgEFn9rNiWX5P6J5mGRcSAB5gD7dumcphJ125VsQsXZrTZBsES2",
  "key27": "uUvFZgCQf86DHgtr2ynuYmhUiZRvMPES3bEorVdV4gxpYfc7xDzyeAz7ykrz9muqvGu38mwV6mEVS11jLgMZcDm",
  "key28": "4DT4N1kzCYHVDUhbRBWSXTAKLYpdN9uvdmgxGE8k6bN2nwyp2BCF89WSZfiGnTLsrrAzVKfPEGGmt5ZYg9amaiyQ",
  "key29": "32UsdM6yRAEBE4kiDyL69xAQML25yGg5YJbis9K8nU8JK8qFYanr2GMpz8trx9ZtM9y1piNKM351Ro5A9bWM5eLh",
  "key30": "3eEbDepa8hCbFZUFfLHjxKAjiYVGq1Nhue2FurEpTAycAearnSxXqjPB1i2tCDXd5rAdBNfShrtDDZdezRHoiCwn",
  "key31": "2eQbYBtULGEpewoTto8Zyw3frVDG2DX4VNvNf7YSVEoRaxpfKsvo8zCG7cVg7JdwR5yPaVSd7X6RMTjt2KdMCBiq",
  "key32": "xwKrr2cEaetfB4n2hTsXo3Rj7RuwpCzynn1kD5fYnosbY8XHAnTotS8Ryk5yW9zE9hzzhsSrB1czv7AWbZ6Dgwa"
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
