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
    "ZaR8zJeACWNeHGikufwmfqizwbfgdsFWso3g9iS4pCGXZZdA8MCb8Eoz1KeRuNsqSjHoeFf5f8yeko64RA6uQ7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBXBmPiJeq3hF14E2U9sYDoG3RwnjezAC4npykokfZxAYheQJoPWYbFku5YSQN5fhJ2kMVZGB54TPKhmz8sUs3B",
  "key1": "5ncu5tFgZHhLABqR2VrdMZddbcXR5vpPKdP7HiXC7zxPFnLcx2q5omjMhqNswv17ag7axhTuaCCKgpVxa1fMqEn1",
  "key2": "v44SPUaCkeE24GJCdWy9xA4ajcVX1Q8xmMmG9ameW55HAaTbAZzvNnxPHHBBmDthSK9rn1ixc8RzTkfn6oQKx7R",
  "key3": "3aGWeuGmpiyHvEGvEXomGwL6zxqyw41ZjqUNCDLvZafuoCQiP52gpnXYqB6rnCiN8G3RqMVURhBFc2GoGTM9qYt7",
  "key4": "2AjUKtcCPqiVwfWPH76xazTT7EUH4CVyvF6z48sghpNWJxLPu3GGkbLZAckbHPQmPXjxJAuRqB9cfxVT4L2DYjDP",
  "key5": "5s9NMX22soxXJXJtnwe8KKyhWiQvYsEy475i51Cf6HqZ9rEjbcq7JJViL1Qd7NXaiCHVUkHsxd4mgc7sb7vDy9ms",
  "key6": "1EoA2roqzNaPSPtcyYmnZJQitszWsNE7ZCre3BiwhyCyMBtwTDxiJeaH3NrdvefLWtBhrSDu1zTP9ZGCu5KkmjA",
  "key7": "jYghVg4CQ5QhRr2XCNffMALkGHcok2Ym5MFYHurEX4jun19ZqYH5yqeHaG5tXjd3Z9cZftnP8LTLpoRWBYaM86j",
  "key8": "3B2VEMT8C7eBeAteVfy3rD55oYaomdyVPhZ9g2G99qehyxSpAVKckzHx4zsT5xJNC2EUp2Y64TWqwyzW88aq3iBX",
  "key9": "3M4kK5AgGbDmDSQPBghwGdsSAJVS3utemrDUgcfFKi1pQRHyvk4gDwmDaWiKPsZDUyAaRudid9KDU5rKVrKiJffE",
  "key10": "nnmrM2F7tg1xQoF5z5eBNz37nfHimruFvERZyytgn4HFwPMvtDy1jk2qWLYTCJRXpieEuE3Uw9GZkSyzWeZxEdR",
  "key11": "5YW5DX1kcmwvc9zAuKMFAhKxPtvLPVGpwvtvgYutmC1JP1tojNap9vj5cKQADWgVCyCSnirQgT7P5BbJGM13ykE",
  "key12": "4cc4PV7BdjZq8ktMK2CeiobtMdyN3tUvxrrfrQ1ypRD6Zvf8gQXnoV2M6RtTyPwtUjW3NUJ24cXLhNHbwVnbyUYJ",
  "key13": "jQKDWdrC7hGNf5fUigD6pgyuATE8r8ZNefejdubkGGyWWRffDw96gaZb9VTXxWV4sw91bKhM5UQgCSC9AH7V2M1",
  "key14": "4SRxRb8zTnFSvbc7KnZAffmMnSmeFLiMnuuihw1HHx5AfUW9w7rYctM3ESWvU9TgRMqFMjvTPNZgXT8SdnTKa2qi",
  "key15": "3qiLerCnyX4cRXZWRRnEchMx9hjS2DKwzJqKzvwk2wfwbK9XNfA6sc17nNMYtW5HzJjHQLMBAsnWhb7fgQ8ahauP",
  "key16": "526TqVTwxCXhkgxhQVnoyHa5Dfew8VUztEnRbENUsddppabKHMbUyQAxTdX3WXoxxv54SJmhQQpcU3ZsYiJjWWd9",
  "key17": "3fzwpfY2H2TbNGX4TH6A6nr8EHn1WiNtEkcSEffzgdAZLEzb43zNjhk9xckUV8jwnvmQzULNtt68NFZwH94oS7ot",
  "key18": "5JA77bbuPvyDvsSfhLZunZ6WjGmwaquVMZJrrXk84jdAJ1PYkgvpFq7fvzecXaFLfkxPXMeUxb88ZbSwP8iaUFv2",
  "key19": "3yZDPtBuXccUTAg2GuyBQrfraRHaZHe6wnbrjyMJWA73oMuQj5cjRNx8reWVWX2X3DfVNQDMthTcbQZXasnaahDc",
  "key20": "sZtwFvqm6vFHMsJsmAw158Uc5cTg2LefVwAKRRauxAUjKo8i13v7nZeeQifAGn8uD7oTQHHYEt668YbJwpfon5C",
  "key21": "4NuVCg1MNbUMFCVWiTxFqA99hgQvNyWooVDBh6MEPqyiWH2X92HhqpSyGa4iCWiCoXv5uSdDPyjaDCJ3pvxNAeEm",
  "key22": "5AwUpTV8CW5GH9WoAQBAWLiNk87QZVH3f1fGdd8wVsBTjXxwrgqx1j8ERAvbBA9cTpTAXHG13LzqFQMKt182tGBC",
  "key23": "5ZScfTNQuWXKeQfKhHS4VHTiR21S34Nnjc3dFzeCzK8qhaBbJHbeNCpGWia1THJjx6ZCPjdfbJPtrJppwYduRbky",
  "key24": "4DF7fJN1QXPwAoRHqUQPJfWTaZ8RvPE48esKZ1jxESNna7FXbtniGMNQoq7d3EXGSffkfxjND1ey787pX2FRoi7",
  "key25": "gGHKH2vWZNVfP64u1DRDcPXNEPdfZDTFPHyiDDT1jPv2NTPSuGVNzStfwAa3cnsgBPLGjJsj3Y8zmLnpBafQy2f",
  "key26": "5jmQYdtQFgg7VNYgDvjaZQoAcHtWxJE4jo1hcXueELYJg3CEd4XcFsG8crjZxr3XmNGZd8i3et3sYmRYQokcit3C",
  "key27": "3L7ahEMWe7o2bEP47j3CXEPnN9CAS6aTGvPxVrYhtDibNSkcwcMMYoqV9dNg5PR446zkg1gKDM7sGunvnSsDbj5s",
  "key28": "EtjUT72nQ29Ry3oFh9AAvh3yKEZgdiu2AA1LD5Dw92wVsUR2LFWpp34gkBL5RAnD4F3JWPCQne8m27prXjEtRYe",
  "key29": "4qeD7aC3Ak83rDm3pbtbFFvz6yULEDHiPWAdoqdgVDVxdDtPGbjLeCxZH99pnkmXjgJH9ow9eQ51sLLebXaLrSjd",
  "key30": "3DwapbAyAcwxGFk48NF9BwpxKsw2qNJQRF9EAFVr3AGeKrZtp2CexgXsTmCyqNqUyF3CMr7faTrmqYi4UteGdZ3s",
  "key31": "3ASAL1rZW1MkAQim2BUKpjsS1q3PD5z1GH2zmzTSLLUfxDSY9QRYFjYGTQ5MghSGWJXqZng8NriekatMHyR68owk",
  "key32": "4uKBYP2sqdJkDcWJ3V3m5ju9MghaC6VfCPPD5fnrj8kJ12f9Bu6qkHtNGCq8vUHpWaUfMPu3VnEnJPHFs18g5ULD",
  "key33": "4mXEdpxsLwWJSEXe3gTqqKko8JHob6ed3t73piA2Kp35jGQE2iSPnHztv1o78KZ3thNVi3AkHw3FHZM2CqRubs9b",
  "key34": "9WMzH7ZJz4PgxAmqnScJGcbep8CwqrYJXAtuME5pz8rxKbKmtkbZP377bbXE6uZiKRUVmYNoDqwrdEkumSg8uGq",
  "key35": "4TLfQzXLEwya1pp6arxF7TKyKBGjq3WDAsowska1g2QjS61WXQFFutiTLfgRmWV9NrLpFVFmS6Bz26VCc59Zf5Ts",
  "key36": "3u9yoh3DYKQ9sRtQjqWRJSRdQNQ5RGAwcEFqkXb6DyHX5pJajNLXDms1SeWBFxHBHMTdFSGr86Y6FAW1YJHUyvXu",
  "key37": "3NjVxwcSgZJ4PLFRggUFqePok4zRHPHFZEJxnbi5zmv5A138qrvSDcGCirXLZFXsGSUDLEsmGXiYq7C67YoehFqa"
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
