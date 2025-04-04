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
    "3WWHHt5QiqeqQ1pZ5z3jcH8EXDvCoFquRXhZQeUTesF6X8PDayRSFR6w7wakJtux5MhAmX6EMEPowamDD6n5fBVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZyUGvzLqac3bHCY2DxkUpybzahvPRL1D4sw6qA6R88swHN11L7GiyusdVcRgwWNL1soFXqnhUQEEe4KrwrK7GA",
  "key1": "5xeWPf1KhWdGTiGW24Pb8899YdjDXfX4ejsDqujUMGLqL7iVURf4nBTy9LgWhjd5ZeWM4BonC9h5k7m2Qg9gD6RA",
  "key2": "37bEUWr7DBwrBLV4DUGt2SDA1Cw1zxoZwTNvqB7V4WZULhf9DtLuUHJrxJvAq6QS7sCNtYeFrG91BdznFpJWx4Qr",
  "key3": "JAEMQkkJcr8Vmn2Crr5N8SGob1A9qZxQzfuYEr6p1zFUpVhLWNmK8Wx7J8MrTYzavVH3V4H91482qo7Uj4UXxSW",
  "key4": "3kmEagaywSifVTYbYabTin4Y18oUzFC1T8m9LfNEhsi7L5CKW7M3p6rNbNca1kzCeasy6LjS1hjY4SpJsM81L1qy",
  "key5": "3X5CEXMdNNWibKb5sWkZGvHhEif8r3LdiR9ELp3BdjnDkA7TqxEXGWRGxAKCZXMrfww86d7BvbVxRU6ygFz91NJK",
  "key6": "25j8L2F2un93QgvRxeRWkTgHqJKL5yr5YqE5jfsnBb8ctNboFfnC8HbZgcw7BARoWW4jQ5uRGckPmF8GVVWq58LD",
  "key7": "4ZCs7ZVEY7aGq7Z8q3kVPLyuNHw7XpKiBrDGdwr1Q2VTfAQtLFwDDBJTTyZ6WSwRXbTbaH8XeoMKeUbgiEppmAv3",
  "key8": "4nzvnWpYqor5JiauA5Hc2wN3DKgQQBgXiTK4dUFgB1nkqxvTr5zzDDCxS9h2TdMaWpimPxykEYf4u2FcEdimUQwR",
  "key9": "5PXxHQywANhVgxgpr82Pm9jY9kFDwATXfWFvUPrECAcCNwYPufVu1pFHgMFPta3jyUix1W9rxVoysV4MBKZpbKa6",
  "key10": "2RTZBMeD4Q3gWd3BUFrXVqgrGAQkga7AA5wymaNeSaLJj1JiFYy9q2roub7LAKxiCsoXdm5HkSh6kd8URUrqhaWm",
  "key11": "54a9mkPzh8bcon8QZ1AKdQ4EDcdvanBqiQuWYF13fqs9amn5rb7Fb5eoJWPDdDa1XCFCcLckci8MM2ecK9UgXWUy",
  "key12": "56R96cYeKvUKvqLAyuiZVLQpAJeuAiyXMDjRHPuXGDCfybCNPe75qpXd864dGTuYsXgzybkNCc1jw6XSvMqjCyJF",
  "key13": "4hGb4BpV1MphSBafXZqCC5YEy5fJH4e8Zdqf53dZp48C2UJpKXswYeKuaoosVj7S7WLR188srwTijZusf7bo3Wz1",
  "key14": "iXCFg7UxcgCtjKiW21oGJ7Hw8X9EnjemcAbSNK98wW37KEegGWvKFCvnjb2WvAW5qanRaJzUhaHNAQnPSmcvGvf",
  "key15": "1Xgv8Gbc1aF3uzbEy9MctGju3CvArTs8EVEs8je9eL7X7U2j32VMHkyhfK9pCj5xcFg8jwrusgo6i6eHK4g8eFr",
  "key16": "3KbzrDizAAVjfgu74CBYbHhnDn1NBzA6WefDYJQpQPh5uXZfgmaWgNisncwEVwdYYAig1bRYPU8rQAPPFgeTJhoB",
  "key17": "DNzoVhFNPP51jHj3EAAFFce1qRSLsDafMc1yVoR26GXWxfV3HEWn64BWibTA1FoWLipNvJ3y9jyhh1t4nQpvrN6",
  "key18": "4s8V8y3Co1hgL3MzMXjCcXQxupiAcWtyf1ryHrodSjY3KYtwjBQ93yVqaPgF7HCydbZ8QWsrw2BSQjXhXptxJR1N",
  "key19": "18gKZbRVBLFQPuBVG5VKXccyaKR1RLaB6UHXgtKiwAdbUTTEp6Abaoff1cHKAaV6FPx9AsFwde6c9shWxu7mxFs",
  "key20": "2afBSSfzKwpXv1rbkXirDKLitYsg2vetCPKemgb53eS9KrFP6NAxQNg9d2HcMwYehTn9oCtHrpQBHke7z2aMzEQ3",
  "key21": "5v8kF8QfjHTBXXAYRDuQQ7zDd2ZRcw1kzLamc3yLEB1ybYvvXUz1eyNxHwtboNDQvw74nBJ6Muvz7Z16cMNfecGH",
  "key22": "3gzaLa7LVsoprEJkibKY5ALVzd4u4u9NQa4jD6uG1o7bbuRaqKCfja17HusDWXR6GPTMTYMLUYpKf8oYmi2dG2qr",
  "key23": "3r6msgEZxBcsgLn8iWqxdU6w3HVjwLawvXyE6fFjEbgN5e2ut7QG2CkpY78xkH3hZZv25yQbgN5iL76BsvarcsJx",
  "key24": "2qCj67ZEcDCDskEQAzDYegM3e7JQaVyyQLM9pNjTtoHUDfo26Ji3EMoJcSUo6qMuLpuVRrGuGmjVbEXZMN3k5QKp",
  "key25": "37mcxofNkEpWpVNxL6PaVJn7dABsngD9f4uWWNYaKFvQ8dtm7x9r54Vt1ZKyoZRock575xbRaBxjyRjNCmwMi3G7",
  "key26": "4S6M6Fz4bGeoWcKtBDXvqfnyjNhbFH2R8jyLgFYCzMvGkrbDn1UT48H8Y9jPuP4BW8dJ7r2GVAjx9oDMrMzHjqMY",
  "key27": "3P4QDAicwkucr4mDbqPfd4BUEnCWY3m3mQnRHnrSLZB7UpsD8DEU2CPXx8WFU7VtAT5RgQsKENduH1rxBf4zNApY",
  "key28": "3XGmpEGyNJLpwVzhRqFeGWgoqtoBjGmWbP8tc6e2ARvhSkNgAc6BPjbscyFu7vY7s9pBj84pMgbtFE8fKMm11g8Z",
  "key29": "2vcGYkbSHGoZSnvrKaa4mMJyhzn6M5MEeVw6HiTEN4hVhrcmmLacMhcXTsAsPW6bp9dG4VV43Hx2oho1wgNN7PNJ",
  "key30": "4BunHxhWbX89NX1caHbNCdKgtXzxLpkrV3RUBowR8FjFBp2oSDVAV16BRp2n7gjLU4EpkxFJnSHsLZhedcejwCbV",
  "key31": "2vhhV3sDwshih5x8JVShn3iuR3PMyGvXacu3QrHXY8i8ZTEEkCq96TAW5vEoKNViMZEvNQowd4ApjgyJXzQ96aRF",
  "key32": "4MeYLd3HcbgBM6AFd6jDtQPcYb2uF1JQt9qToGywxN2YQvs91CDg6RRAE6q12FoPdsdgYHyRAz8f85tJKMNNZDHo",
  "key33": "4X96WSr8qrgpnpkSWFMa1uBPomewmATVKMLsEb9kZzc2RAJPHGxiNyniKzCJ3jiyFHj6f9uNEt62hZR6Ry6kEm7k",
  "key34": "3aqS7ecnkHWCuqNMmTx35g1EVoKeCbGJqRGAjX1aFPvD9W9CzPKHoXgXDDP9fN9mSMq7KYCMfMm6AE2tW7oE1sCx",
  "key35": "r5oLcDkgtUckkutdrF9VJziQ6bWnDvMkRusbqmdSPzX7t3EmPJ4rHH12DZwz29SAtDuczDCsaM4eQ1gkdrA8UHz",
  "key36": "5rEtWwECLGbEBv5EVc1SY1PpHcfYyX2jAvphpGG1NgsWG79dMm91win93x7FA9CHNvyDKYmMsrC8936mnkC85WMW",
  "key37": "4wzp3xCJeWBqn75UNPv5MMkN7mNVGxQ2a2jFMYvoAdfXbNFVcSkawk8yVS4ywytsVvnBkkmDz2ym28dfsAkbGWs8",
  "key38": "5pzQ9spZrEfShXq3YcV2yBC2ZoDXRwxtJMnENvv8SFhatmz5qfPyHnpSh6VxmgDfgdg4YRMqbwcnS8revZy5dUph",
  "key39": "5MqnMHPVTxVt4sVsusbie7z8eVFiPT4NGCZ7fDd9X8zvnioay5f2meaZDrJ6sCkaqEZtEZHXXYKKnD2W6KcPMEVi",
  "key40": "TUaRxe5Tp7AcPL7EworMWutwA563J7XFeHW1g2Fv8StggtNEC9NksPEBurYTBMcmGwpCmezq1N2RAtheW2e7d6E"
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
