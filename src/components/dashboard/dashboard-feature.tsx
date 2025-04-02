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
    "47vi7dc2xkKZHMgvDosvzLijVvPuCQGM2whgngCf7z8F1FXcXedmfjs6tzNE73XzC5zqrbjMzP39pfPAV8t3B7y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDSWX646ksDfSVYzHHWaGpCt21kRqdzQGB74btzU4idDy1zVstWqBAWv5ZdpPWYdV7CaWHqG5joqM2XZiawYkqt",
  "key1": "4UfgR2XpeQERHHFwFjzma2X3na7npfVfiLDXPoSokegCv47Ek85TbemZGaxKXcVpqqEVFtfSWdT9Fh7VBTqgQBLN",
  "key2": "3HeWPqdkg9MczBRXxZ3s6xAbxWyPJohmhZxvb65dFRT2YuGgtJVapFskJXxnY9GcNGQUk3dooH57vXutVnwNtA4g",
  "key3": "4t3RH3TkGAEqFj5ELVmcnExfkaS8Kot7skVKuXFnrDhN1iKrhonh6Hfs2p7H2jA3RDeK3TaK8FwxfMESot4kbFV7",
  "key4": "2LexUkCbLg94pRna62a1cQZzN9XvKFq2PiZrPmpk5CzntSvsvs1iKPsr2HaQ5XKJzAsAg4FvMpaJLeGSoYZt6WgQ",
  "key5": "3PPiZE2Am7dmzvWiVwxejeuDeZhfGVQbmbJKW1ehcwVsRXKY4N4U1FCoXAevADQ7gD1wbwcfz92KGi1j6gXHn1Lz",
  "key6": "dyhpdHG2QuNBZP4j6rpmgTpD1UTriPAxmvjQFgNJkCsmJS1eSRANoW2ZJ6mngTC6ynaVG9dwyJKDbQaakuncL5L",
  "key7": "2YsRBVXy2hLRWwv1cZf3TCzqYuxziitLQayzsc2A9NR4oSDYrnA3a5KQq8JQrz5UqT9J3CmGB8Rxys5mifywLpGT",
  "key8": "NhErFAjKq9GFQLSTm22ZedRjnMJpcA8u4JrZY31C83iUvS9dsvu8YGPem1AMRJuu7EKGHx2zupd6SEWBijQKDh6",
  "key9": "4w7XJaWv6rBF5XjXBKLGGA917pC7tnaBLFMoqvyR3EutYGsimZ5paZaj1xop6kLwQBJMnUiQEdAEKmVWozG1PkMp",
  "key10": "28PyC7M4bGNEg9eatHejtPNac9yRXNeV3MrF2LyXMu66atwP1JfxjtcGpV78QKs2rrNDd17zpBBxPRosL7mmTgr5",
  "key11": "45PDqDQ9HyhXFE86rth7m8ro9i5jFdNj2maXgoGNz9GmW8npi7XsXeUZDmNGji9Yjxre4byuDViAr64P6jYThexV",
  "key12": "59MyBtoAQXzCxXvstbV4KQmo9Vad7KjdFxcpkc62iMMEqULgufYpRg6mShizBHUebJzzqsiJBhGc8Q5wiBEbPaxY",
  "key13": "4vQtwhkT5F1nYviZqohhJtNB8BnwFUH91ZL77TNtoUBfZTUPU7TFR2mbAuHftKg44QuMnaZBZcWtbRLChdRHHLmF",
  "key14": "3mtPXVkfSJrKoN9Y1J1YQ2SyDhgkD2MoNo9jgA7nKRJuuR5HXtTYqiXTCiPQssVtSQfyPPeNX1d32zQCzcYMKPPw",
  "key15": "3bpzFxV67nUEr6Virqy1TXz9oyn8Mc71KZjGi4fbdjFM7r36fAj2jCeArNzikL5xK7CCw396NUJRRshbrUe4XzMJ",
  "key16": "5J76dywyVqDRhFgARajpJS9kdfdVniHBPGzaeG88LjH9Zp7LxFiGg69RperFsSE3qd2UPBf8jYN1Zsr5arBtrWhr",
  "key17": "5ShJXKwau9FFuxC1btgbwqLssZcuytfHchnHah7jdTzEsgwr1fCCdh1etTd7osSG1JJfaoCqK8siATLQBjkKJtJJ",
  "key18": "3aEUx9P72svN52GWEs6uYqHTBBJ6m4XssMHtiwipz43mLpaLyP4wHrkVgwtwuJPhpzj49mt8E88btHAbCJYUELxd",
  "key19": "97Pexi574UmGG27hMmmZQsVg4bX5QpkcTiyRvxGXQuHRMuHMBdEZSdDdAMSadWvALVfhdqpJDjU7CLTUHJ7b3kr",
  "key20": "3kQecAqc5ubvkGpPMDE4N1HUyjrZmGe7S8uEsNgvHbLrkLK8gqpCiLbo6n7FNuLYUq5SbidZroHganZGogk96PA4",
  "key21": "3b2re3Texir3sPfVEG4VwMvNsNAm9tgGJhUoKbGXStnh3Ry56ovesXg9ELxoG2ni1TdCo2SgyfQescA9cjquPcRy",
  "key22": "4AcvDPWkyRMrKRpxafHVYMvKNfszzpLXEQK7LY6mPK8bfaQeW8jeQf3yPoLRjFnDu2thYf6rLHBJX581FeUV9ppq",
  "key23": "p2YjUHiiBXKeMn3EojKyEKhAjoymAf2RjkX6qgZXN355WTQz683Nbj5PYhk6eM3W8br2J7uKrqXGtSCuibFD19S",
  "key24": "hoJaFzesRN7PEa2SPzwkHcbtELgKCaAEf9jGjkTKGB9rudDTbrES6MB3ZBRB8qjk7U5WYjUN4fxP27omXyBtdPG",
  "key25": "5yJzB8HUJaTrvGJpd96rhWmwDGcJXJTTedCfHYph86tvpNy6Cj5r1KB6w6UqEnNsMyhswajcoLPA5DGsD9CHQZhA",
  "key26": "2QMRXBRJ6bpiv3uPXWywUDNC5o4Ldf3CJ2qDSCx71jgLttUXzn8oSpZ6AnwS46tW1oiauCiVQWYyMeAXPEArZSXB",
  "key27": "3Y3kyc8b5emBiBfSKED7KgbaSLTgDM7EicxZDiggtFjjk1jMx7EBMDmmxkt2BTNXgVkg4RdTx99DHznfm3nMrT9D",
  "key28": "62DbUfE2NvHHrXRdEHp31Nbgu7i2UKiAAV4uMDeP6ecNvuh6UUHWAbDuHWqihchaCt2q8kW3qFpH5reTVWbRYKeg",
  "key29": "4HuTxmZKd954ttUoGseKHS7a7JQwBu1cmP3q9wJkkQTnkvT5e6w4ipwtZo7YiFMbzfYAdMaRGzr9pY7wbZBH9EFN",
  "key30": "4u7YEtdoE4h9T9AMpPzZn3AZpHixLKDunV1uER78ZMp3GAUBb5bRB1KNsjgKkXMgQx1HzaeboHNwhQoYpHs9RBwp",
  "key31": "23Cfrwpgqmv26QS3Hcwk2bAfeFMAYqYKTrBKHDCEZQDQpVXnVBZFtcaCmNg9YPC1YQZGRsocpx57NHx3s81iXDsb",
  "key32": "5HtPpiYT6f8e5fMVKWqyvsVg9R983tfi6nr79BBbTicoGARDBNK5Jxe7tGS7sUeuAZ29sM3koEgqq7augPeycXGk"
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
