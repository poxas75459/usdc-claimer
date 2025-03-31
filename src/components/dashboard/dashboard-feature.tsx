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
    "fTDP4vNoaaCk1pvzJ2B6EfD6ftAq9wnfLctwV1gZ3YwyHngmXncofQuXp2kLadrMc9QeWGtpv1ALEWQMqFEDPdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyfXxft6PYjx3ygNwHsdvGM2X9JkTr5LGb9J2QEMbqWMWZNWP5uyJgqhZjJ5c9yUSYvBfM2SE3NRrsF6dY4jLMj",
  "key1": "4yNg8pPTovCX4bdotyE2M2kCRZQRFomPKFbcBhfiFWUG9CsT2xaBWELtmkdqfinK1kAkRk2TFQrvtAhMu3Wv8zgL",
  "key2": "VVREc2dYMhAQAnyZBJosRdCDeSWLyMVMNZfhRwcoGEno1nftFCTycRc7qwhuUzhiMDUt3NEJ8M88ZDNqva5m5JK",
  "key3": "46ZJ31uZy97vg8A9YNA2aGPeps9HDagCTTkEWLtwiiaWdsbSnJ5yVybHaujCzxBFidYcdj7LXQFDr6m9aZbGpdzb",
  "key4": "3tSf1gwtxCjFy1NGFTWNmv4svPfAj1uV2Tt4bwGN5KXyQQMXD8edhCj2iTgbRxLiwavzV2pkbTEWLmdUtwxvH6R9",
  "key5": "4ezh3n6u9XaW8kmXPuGe9z9cfyMnxBh9c9wwLDFRkgF1SafJ7gFqK2uFuHv2fnyVQDu74bWjLGsVRoPwQb2Fag4X",
  "key6": "2xWtiBUVMEsQ2mm9UpsH6AF4r346bzyFSAR6WRq5iNALk6vnKPtid2B3SpaZHWL63p4Uuk6YUeCbYN1qj4Q42Vz7",
  "key7": "5mL3YYq4Y2cdA42iFpLk7DNTRnRoWsHUzVptrayn1VTjczbk5T39H45rrXSwpLzHxMNhSUWzbWY81ugBHcCxVQmd",
  "key8": "wwn7HFqej3Kmi6BQJT7EzdNbqSNiDBYqL8mg4gdVDQv8TSVm8ozPpVCX4Ejgq7apU1vhUBj1X86YXAmeRvhpiBm",
  "key9": "3cNvDKHESDXM8evNmVxFuTxxcN7q5gCxBQNHB5BRg7ZYcmGnbPp2bC8AqyyqeWdwy41t6mLD4zfmZ6SkovuNMGgf",
  "key10": "37gPDg3sQhQLCZXyXNcJhCVcaAepn5pnj1HFiBe9Moxt5U8AurtiNhJqAou4iJ1Ph49PXbD5svEm8rzXrwaAkaMn",
  "key11": "Tva4zba7aJMqnna42jp6ttsCTsX6YxACuXUg8rLr8ebZAKbsM8YexdJ8j7tabhKRkGPE3TffydgFQ6ynaZ5zZSv",
  "key12": "5vfD3nzDPVR4rLNWB2BJAW6YPK6QNSD1vYZS1HSH4xLGMctGvcxsRDDbz6bE5Lj7G68JuJ6zDVM9Yqu18jkDXQ9Q",
  "key13": "4JsUgrCKGWa3VW5Mn6HcxwsWYXBAE1foSoDv4zX4Zph8yAiS7LW1uUquHRacTu5vJwHLKoty8kves8vCaMNAnzfj",
  "key14": "4HAbaBhBrWB2zvwXJ4twYaiKcrSZkg6GdDozGcpaMCXCmX4ZcG57G27jLA8AfLB8cN7kW32KehH3nn2kRVcLC9jN",
  "key15": "2zBVhChqYT7LcEW3umafm6KYsgqh3fxonFwPfqh8Szu4NwRhzN1pFE4ztgMFWL882WextC6CYV3Px1BJzthoXJcM",
  "key16": "i9WNUntc9HmRyjXWjb4HyvjshNkV8eGUssg1TKoybU5CA73aRzq2H4ab4UZopKfGAVLTa2oWsPRbXcHHMQEmmr2",
  "key17": "5a7c5rAi91gTAVUquLgGE6q3jG8EhKXnWq53VdhoUrWbPsnRF9ug9QogD4cQpAD6dEBt3jzeGxnyh4o4HAQ6H6Ji",
  "key18": "wJh8pbbWtcDtD8yrZh77GfEWALhBe8DMg3Nerbuy7eDHmWrXBgQ9YnMkUjSyni51hk6VSXLARwpLPDF3Ag991WV",
  "key19": "2NfhVxXXygsC9WdnPs3VcxQCnsQu4uqFa1YfQqyRkHusDc5B85E9Goj7qcZ3SKj1pasLL4TmGUpEhY8B4P8ubxoA",
  "key20": "5Am8pvpNoShgmhkhx4Fgm1zWjbAjUuXnoRrZXNKC3mm7R88UDy1iWyChLo5ppFhGUwPXR3dmGRE7b5kNYqK8bMZH",
  "key21": "4acES2Zy1Y96Tzj5mQ1WiugqGZKE9eDVf7Jmwfp5CHx6VgdgpRdrVXeXsJdksGDFj3k6C4h6pfbDeAJxNKArVbZp",
  "key22": "4iV4fvn3M4Hfza6nHwagTqSBbPJs2uCzFfKJ2VNHQ4Fp8sCrzdWdj6dwiQzQcxWTX9U3AWtMuLu5bxpE4PoQnZpN",
  "key23": "spFeyw9fqBvbnvN8AgWLFUrD6SRpFPTy6C5p8RqQBsnDXjB6eNjmELuHb6KcUKKp9c4g4r476JV6bkD25VHjV6w",
  "key24": "5XbpEQgfyuAaBby35dxeTF3sPr9eciJxbvhd7LuLtoZExbn1kWFcNNJLohz59EkybPKi1AZSMQdsnAmqDKWBFbbW",
  "key25": "4kgYiY83UnBPfci9LcCwDx8pTwt2M7TLnay7RyspESVzwNjbRaHcGHKcH6nsb5GBTHtmZn3TQuYexUbYyX2JXpFX",
  "key26": "2dkq5QznTRPWAGH9qJFQFPxzN7Ubd1b3HHiyM8yC7obXLx6PuEsjVvcktz1KA1G7j3dyC4ti67wyHbcwm2F5qRz9",
  "key27": "3NrbXbvArm5kPKHJgWv247Pr2YUYXLa19sFrYyq6r8azu5bXFshR74jvJfrfTVyHAgzZyeR2VBrG7gDA1fdJqF9m",
  "key28": "57iczXWTkJCaVTHuB1uhJdZLJvgmHELochAvtuU4oV5tifh2HfXnsvr1Ws24hKXjBZveUPJfidsoR5iuDgoa9Z7H",
  "key29": "3FdfFQBvj8Rxu2Y8s36rdpC5oyA6ge9hgRd3A1rjo8PUsjvBccJb4sDFof2pqz8RQr2LQWortkkm2iS5wCCMnSha",
  "key30": "4Hf1HMmSwd71JzttzTQB1JEta99QAibySCn9Qt1p3UHkAU4wYoHPR9yySsurLanA2XPjcNaggDBbDmhYb3xMRBkR",
  "key31": "5QVBk3gxhb4JPX32MoX1bW5RKk4yyKV2JptQrPXEYjmM48vsspgGrvTxqTCMsH8HvYXF8PJhS5tFypqUCAGfyHEr",
  "key32": "2i2BjvSj7fRGH9fJLa4GWpWfaMooYCQLw2SzskjcU7PSZE85Qmbq6gf7DRmc3gXMDS9teEvwYrgkWf3CxfdTvnZZ",
  "key33": "u7ayAurAn9vjTw8rjcW4yuffH2iHuMC65P67kG8Vori4zSAr2NQ1LdPZyUDYdbEXjFjbiZ2JjiPrFCRb5SczAi1",
  "key34": "3mMt7WwqFYHu2xfC9ZUcpkqWBkf7pGXoXMp4BBqddN6xADCrLwnqUhJUraptBVD5AjpBNJtRHaUgzrLThQYakr4M",
  "key35": "3izZdz3FPC1ZxoHRykeZWNAmZMPjTAPoRJn9Nz2nJDzXphiW29BvehXeHLxp2QdjgBNALt2gFNiVZiF9AKkaMJUA",
  "key36": "3Ecyytc4V16Twz83cKWLQ6pEMdTQXD6FpXzBMgvjLV1F28r9x3xnngCNNZZen6fJQRy12w7hKGx6wpJGwqNB66Vd",
  "key37": "52r2EReYsXd2fE57AQb7c7z8KHJTSXfz6VVXDhi2wawiXoYSo64cRUKZerxFUEF8jNNJGzXZmGUuoQPT8kqRWBuQ",
  "key38": "21joLdQ8jkLWLFzBah5dhPKiCgdRzfmHTx6MqoATfuGYk5Py6rqffjBr9LWkYaA18FKEEsyog8V1fmLFzabLVChP",
  "key39": "4U32H9aKSKjoBZqGzKWnSWvFVSF2gC15rfGSuHUrAhJKFMQwvB8BT9LDeYp9y3VmQFiDK6QmHPGPFj4CRd8uJaVE",
  "key40": "4KWiA64Q3YLZELdyyxCqZc8rW9kWWpev8BQv7PQvVgTgGVXLNeaaKZdcbuTPf5GG3maGxCSKy4NUYjsrnFjbpSFW",
  "key41": "4xTfuYcGUvQ1QuyRT64KnK9GnK4n2U2pHdP65SsjzBZbGTkC2ckKuQ7Wm4GL51yRbrfSQuAkjmM73p1j4me1sKv2",
  "key42": "5taAYQ5BeaWonrGEKjgH1iGipKxeL9QxfCAvBomCsvZwovP7FxYK7V37gbHzy4wzTFvhJFSDwuJXBBuG37LHaAdm",
  "key43": "5phhM75TQYZ5vyMme24M1SgV9rg34chycHkcQUPuefyiAp2GLLZtccCrXzjsbN37jZiYM4YDXR5vmTFkMngWaSkM",
  "key44": "c9GsMDxXnxVS6j43wyUeKRoiNshuP3GRReVimJhucMGz24dx62dHGaZCAGLWeyBLy54bpJqjhjCDiEmvpQCBAcC"
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
