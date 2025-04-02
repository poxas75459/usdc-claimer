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
    "5n3M3aH6uPuDhaQjQawFE3rdgWA8FpAyq2wEzCaCPt9Vcs11JENiK4jXsfzBJ3TcGXD6A6CuZbf8CkaX9LvwzFEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d9D9GDiHe5m4JuovNQjpwsDJSAFeNC88VpiTWXv6QFtg8oTxeb7eRTvBheEmd3nQhxZNfrwHb2krNitf9Y1Zc3S",
  "key1": "4QmMh8xPPeSWNDHU45jqPjFwH5mVE1mHVewrFjS8FwmKy8JHkew7m5j7ZgeQRyy1eo9P8e541cGAJA4B7yNGc2Yt",
  "key2": "4t1XCSsXphboLKvuz1stie23DD9UYrAAbtrH218HRHExapmapTLKV9rkX4UmpCB51LsUxZFxcG7BsXxGfHGJHd91",
  "key3": "4dLVTRogSnVg6YUWQHFmLfJFtH2SPwYGn5Cx1bF3pfyTL4vf5XKpgBm6aBjkaUDhAmF44AzXHS9tV94bpdVf7268",
  "key4": "2ynbRN1nUVJ6TkwMvDQMTGU88nDiP8YAiN8Mr8RHap2LYGZG1tCjbt2K2LGbEHoF1JEr3SPDB7woP9hkDcmHGZ2t",
  "key5": "5HPcS4vXp1jnytttPG7XLqcyHF2soF1x5vc134G4TpWKwvk3wabQ9hHxFDBDNptiC2endJvuMNxo9q7SgttMVKy7",
  "key6": "5TcCmxmHaZtHiWeY7FKLa3LNoRwrxFvNSP2Zz6uQopRACr5uaqEFxgSdX9dBHRdnNMcX3VYBYCH8ViFHVKu1W6b",
  "key7": "3FvYaMEvSSKinYCQH1Fuuj52W9ZBqzM25R2wquSkkzvDWPTtvoZwPMEJjMES7cnuKsC9qovE3H9zQmESKCJ6vTAA",
  "key8": "EeqWXB2vkviM8SadehaXxG8DLcgmwjpY7hKQLSWcMxXBw9Qis1sRm2YcntVkSL5dUs4DS14nxLr8gVjwx23ozUM",
  "key9": "bNjsoGijwaSpZxBSGkHZsrowkfpD7i9hiooaiDDNjkQimtFUhNS3RWkrDfMBZoLgUfkR33pUHJymvrq9t6sAoC8",
  "key10": "JoyFsseKXtfJ52te8CyQRYpNhPQD5HSpbAQzkR2kUdvA2GTmVJNJtytQf3zTFaXcoCmT3ewMobkC6zxEnT4aVfU",
  "key11": "MRfeoW349eB2enpiheMDxjn9XGSdSsdWQPCHB2G8UXhcTrG6JaTTc7fMpiogcPj3rHXUe7kLphLbZmC13bPNbxe",
  "key12": "3p1k4YqgvPA7oqberAWk8PhbY818GB6sQC6zPmeJv9tgbPCKMznkuG34XmGk1g6V1EYGBdNRz2xSReUbXAt7uWqV",
  "key13": "3yhDVQzr5tu43bDKxQrGCoYyY5JmNEyTxV1LFwrnnNux9QBqoMVQjEnMVFNaQNqYc2CCCaMWPtxE6sjU8h2Ckf8w",
  "key14": "3ow5EEhBerKYj4242tHhphgGR9mrYu1j2RvYNYLTyejKpXKaiNSpudswEgzTtoPAajuTLHXnuBYcejMDbEzoJ1or",
  "key15": "kHDssbtHxGUJopw9CJ4hKLYv87u83SFagMP7uqXfDLRESj32tzeJK7kDSiTQNd3Tyz6s7fHsTdfvvScU1LsSiHQ",
  "key16": "xcEvJvst1bvKSbcjbQgTFYbUUGNtcZv15rRfNPxrL1RSeBoVXomaD93P7yJoW11S3874NP9X7Wektk9Yarn33KH",
  "key17": "4H6vhqKxFeThEReeULppa7PgcAH8CLuuaM3P2tAQ7Ca8dT2dJf7Swx7KSsQCmFBLqakwUMU7ZPeSuVHSDLrM65q8",
  "key18": "4G7gEoa4YL51DcTTcHdaqjXUknr4RuqbsSrfNDvjVJnj3Zb7vmiGsK2R3FFrimeMuYM8M4j1HGReNgbqaSoWfdV6",
  "key19": "5wW3cetmuHZoDaLsa2bSeM9CUqkpkyRnRQt8NA5sgK9rYneaoBae4rtNoRQPMwsqSWPKcJMk2rHQSxKKUHafx1ju",
  "key20": "4USjbk4ziMVtrKTpnasAjqZHbQFmS1VcyHkhTMruG5G5fxinFkf1u9dGihjupZRjB6qQeExtvXQm51d4owRkSW9b",
  "key21": "3KD7xgL6qJSgkTqnPK4af6svEG5yAvZ3CtG5ySu3p6Xbr9hodNFi7hb4hvNuM5kk18VZdikWrvKRpzQj4sXAeKRQ",
  "key22": "3ScELctmmfQpfQEejTegCp8aDJKrR6nPpc6ztH7zbmeC5wjh54Cp6H2zKSMP3SN3QbmV4EGLZD6zxm4Bjc1Co83V",
  "key23": "EykvBnBj9QpPwz4LoAvbKmMvxvguMJ5uwzZYUMaXssEveuLhiu35hbDGby5viBXp7fosvs8iwM7ZxXXP5J9udNb",
  "key24": "2roMrd7Z5Xg13gViGo7Vo4DLcMM2FyepvB52uQGxnt8aYApMbfRVvQzvgD3gPeE94i4jJSe5Wp2cSLN6XVpHyzMg",
  "key25": "3c2fxT4mYizcGy2m3VDSyRJw1xRStcJcoKi5YTeidMaHb9Vx1JZZZWi38kPvq1AkBRnozeDjcYiHTjPdqyuzjSCF",
  "key26": "2Zc5AvwUBoP5v2Yu5gtwTqkvgMPCMRz5Vg4MVSG2XCc4qhF1Y5LcJqMufuFzzByyDbQT2AtS7uYe52zG67S22tZw",
  "key27": "mN8o7mHRBtZjjWvBVrvxwNvaLmyu3w7gqRg4xx1VxK8bRGaxqhph6MKizXz3Qy28hzZuqsFdzX1WDQPUqkdfkA8",
  "key28": "3CYpuPdT7sXxGff6xqDuV1GKBJozNPLYx287gP1K3iAHFPzRzF6gEjWDVBi8XjzLJoBPiVburVMDrziQAckRvK34",
  "key29": "2aERW8PzZAZsZR83Mt8xPSsHYjgLY7fHmy8gUEyw35esqQQCbk6uUtDUzvUAYQr9a2MxkF9ug7HHB5FwV8ZjssHD",
  "key30": "59MSGGp2Ab47Z2dK2p1qws8MFzCLNs3q2jeFuqXEx7BjsS2733EqCUqjnogpwDYjgswpSxn1oxhXaS17ZzpgxN7Q",
  "key31": "4hm4a7Xw3YmavPPtP6sha4BAeQCXn4NdSiqqymNj8bYTTL3DSMSvRGEWAUfAa4dfSgVADcjU39giQaWZHbAE1eJ1",
  "key32": "2EzHAvmpMjqU1endj4nVJARs67YbW5pQFwdumgouBgajkycHz7aCAg8eLCTohAwGLDBZcspJimHc1s8CFAg8EG3q",
  "key33": "3ndqvLqJSrHhv7VrQFphfYknQXQPzJAt57X5A8bzxmBRqg7m5XFdTJC3Q4ZFTfEdKK88qw3XMuwZJRKaJyT2zZym",
  "key34": "5LPtYEMwy4pEksnVoV6q9mRZ25RYdVR7xuAD5mX8Pi7ZX2D4pYnrxx7FRnYsbQ2WWERyZp1L1HCmca1j2fZGS1hq",
  "key35": "3FTYYZKoXCn291bD7q5sstKjyY4fGg7tV8ZSKSWSVmnf3wQVmE9w631ZxmKsBgFLJrfKTjRZ16BtAuHix6SFAbmu",
  "key36": "eSTTRTAW1sfRnn51PsKkXQswyj4Udtk9ppVLcx7zNesZEdfN7uKZCfnNTya5wDyxiqzXka7EgWZUHYj7ZtEiC3U",
  "key37": "biqvvaAmAcDNb9sgkWekhbtq9UoburjnLri8MWuesouuthNCcyB3YcK2JoBtPECVsGP2jzpko1er7D4MRkxS44B",
  "key38": "5xXCCN9AVCHEkkWd9NSwmTr7pmwDEgcraxFcjBsgmbT41FJzBQie8WVhuHAbA44B4kRnRpPdJnghVQ16MiX78EEz",
  "key39": "2K5ZWVQREQBM3Xs2G5sEnJVi3RPjuonNnRT3x5wUmD5fp9eoUyFQTTBhMQpxPzKXvwpeb5vocN8PmBDdnnRkZE7B"
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
