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
    "3D2XhMjchFnCfihNjS3CU4MSZRgB5fBbvjmrMWF6rmtEXo5rFL3tTqgbYgH2NNjYUK7Nuu28pzR8QpdzaRsb4pJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BM9xKzMjAHEgLssZELBq8Whs82MAPbo7SVuAnWBXaXuJNSnx9AXmP1HAWTBPSnq3Y4rESdN6nCKxt8HAzAppFiY",
  "key1": "4o5BGn5yJQAJ53jfhbHcY3fqv6NT9C7D81BAgjM7btDwW4zPaK4xTDMhfD9KdNNEe4d1j57TTJg1NQpWk4KvrpYu",
  "key2": "3z9gtS4obgJy6dauL2DbeQErLGt47WXebkdb43d2oTtwVA6HuzAbVu9KZMkn558XDdVMN1pkgVqE4LsLfDQE6BiJ",
  "key3": "5EYPenQdJbgdXjmNo2V1XY8nYdtNAabgFuuV4qjjQrz5Dyw3XohUe5jPY5xh7gg9vXFyVhvNxM421q5YLYzxoTzv",
  "key4": "2ymVeVQTMWztpz4GF1ypj7iCr3HK9FAKetu6y7TTtE9Uv4Lobw6qjNkf8Sjb4T4WA4acGcoYTSXCRrjhxPwfCwj8",
  "key5": "9Qrarc4mqzdRQbiEPvbu3bEEvWcB9mSAGgjAFgeZmb3bFFU9S1EQqfTwFooCSn4a7QSvdJLsqswGkEbKhLvm8hi",
  "key6": "ebQodvCa8ctH5huurHsTicHMdTMNvcf7smU1tSA143uGCzgeYvAcoySJdhhGyQuQefgvg4MNqy6K8QQLXNimwPP",
  "key7": "5Lyo2JroocLJdZzWu7g3j6NS2m2VHqSeLgyLKKyt4T5HiqezUhGi4bJmKHGV2xTrQVVfJa82ZjJ3nictwedbqxQn",
  "key8": "4hzZWKGSF9UahALwsVZxW13Pakn5d3HwdbgSBuAoa1NzvGsxXtQ7dBdK2mWw2H4gkaFLBdCSsyQUJrgMQrFUWGdL",
  "key9": "2B3MNKcmrLkcYC5xr6CG8SLnL7KEainkPZbSwN7ARTtvDG5wttVPp6zff76QaEo7bqyo9svrgoLbwrUv7Ns9We9Y",
  "key10": "31eGaQMdXqWy1eVZnfXiUFdNu2kB2s2HuaXYT1R3186hWWE6amjczQ23zVuhp8F5C51jaSaS1eUszcThKZd8ztRR",
  "key11": "f9WQMgwUszQ2ZJgkEPuV9MyjLKf25uDbDcJRSErwJVSS5K5mv3dPmhpmFMMFPsyvBGuUngUfJpCqGJiQbSmkWAn",
  "key12": "BJxf26sZHfpa9faPks2UqgTFJbNNNkqywdjysT9US3HFmSwXGFgVE6dWpTnMQFXTc4Rqo6fSmuZ1zV7ngPAAyyE",
  "key13": "3w6zEfvwWYuHC1yf8HTunna2uwBe9cdJyBmnyWA1MMXg3k7XtAQsh2z2M81qJnneL8pV2AKTULLEoVuGuPfoY7z3",
  "key14": "3jiQhio7787VearozAQUDoiJYLS9WbzX1X584eNia7idBvKHVd2h4AGQomnqcS7rMudn9W27g2DALNEiRSkzBMt6",
  "key15": "2NNTfnYGete6jQoMtWYJjMM21Ne8eoPwX8bKGvVQZKPvQD94Fi2zRARQKzEwDgzDTfZdZhrTEoc6Qb8CQxNsEqaa",
  "key16": "2waVz4zTZWZbEQjSrTQkB7wUZkxdTnDgcnmfqEn3vmqxKgdEQAP19EVHLDTDRMkPBrEVGUeC78WtehAKdgYWUp1K",
  "key17": "JGAqZkV4oxZDA8LbdiHMxNTRZkEj29GS2jM3HwY2iCtZe22nHPK7b9pRAUXvD2nTx9qwNoKzEuqcT3EHpnRSEWT",
  "key18": "3SzcyEpsJCgQjS6SVBWfkhaLYaYZLWR4sAVHzxdyReiGj9cepMmh17RJHsVsu1ZomJRE85JPpLcFq3G87F2Lw8B8",
  "key19": "45SnGMm72BPNQviw8nrQ7UKGuxBW5m2WgzYvbYuPwbEzh6Fu7mi69dcugqrVgucEjPDg7GTivw8zjhpNVywPXtaj",
  "key20": "kHTWivexkXorGqQ6Bh55ozoLrmmQtJjjqMguwmuWnTVSongr2uiyzuCVWLaT1okxuMvKcwegdAp4r2g9EhsQZSC",
  "key21": "3Ag5RU17fFSn6SHhXSHYdiD1GwZDLCfZyynaLqmmwMMJBnTuoE9zp8kFQJF1DsLJ1uw7zx1KjrGUsR3DKLgoYpv9",
  "key22": "4yS8ZFWPZCToi4QKNmPh1gTrr4icqDzpateXZTAHsa1BJMibgYcgcoLMBX4pAnsdDjoV7rs9JDwqq43kDbY2bG7d",
  "key23": "4pSfQmnLMzpVFe5q2ZxZCuLLe1Wrb3a9qhc4VThp3APL69qhSXa5pBjiyxzk8zXh1pBTDV3rKTLA5ncUnip6HBRu",
  "key24": "1277SUntdR9RWxRWhxayrpjfy2WFUQwzajRDiQDU6zRYdnoX9UsTXCpivCpBSiA5puRdge6cSk8BXAvwKm6DHU7j",
  "key25": "66woWUeRqQ1R4rrMpFZpiTVkiUTTnjeeMDbo2me3PNSw8bqLmbTNRPkBNpKF1EdDkqBw2MFpZmTrdNaLfLU959Fx",
  "key26": "4SPiu9oeS6SG1nWTjgWijxNcNSJGczrTkLuZDHTzaFidj7TxLo57MK2YViutzda7XAE5UwcTN1oPQ22QaZgE7HBp",
  "key27": "4jUM8LpS1SiAux2UwCV92y74jiVPut1Lfx4sAL89iu99mGV17THbTLJJA4RV1SCiZshnAgdtpb9f9TfDWgBF9qoZ",
  "key28": "3vJ6QVJJk3SqbfCziJKvghdynd92YFQMz6rBXudow7X98rUF651ebtdzN8R8bY1NZqNRF1SxbEDMMzMViy1KGH6Z",
  "key29": "3a699iaJXHGU3nmZ8oGNxr53SVerGyCT2kJKZ9n5aWZAqi3x286qdk4uevW1XUok2Lzq6kwZhdZ7wFEB9Gu5GFdH",
  "key30": "4XSPMbPDkkZXfihzmk9XHDB6VthoRzVu8sgp4hSakUsGjfogjr4gjW3CzXJ8U4pLvV2RnYWKSC4HnvyLuCw2R8jx",
  "key31": "2iNzj3pFnRSmRZaF3pykJz8NuRDT3KMAzJwjNDsD4ZDzgdyW3yJfifDi2EyAxGqAjgdFYgB96S6CL3gJ6vd9VLrd",
  "key32": "3Rd58SKfECBQtSPsVwids3sCp2UELcUndEB6se1G8uVXqqXbydCnMoH8iCKqUQjTsQ3h7dMWCjyK6th6LZVauUF9",
  "key33": "4fUETWqAATBXBSxfbgqEGaRqWsCkMdiTYXhDNzvSqhcSsy1f4feWRSBdrr4SBdXmJFgAQazKLtk8HCEtLDFCwp9r",
  "key34": "3CKGvqr2t9JhVByXyX8c9YGeNLx9qLebK5nvrt1VgTEfJKZT5y8sj83S3EZ4A5AEgjgygtLAPimWj3KoE2szf5qe",
  "key35": "EeEypkdG8S8VdXDf1MQyeT5X8NxdswiEzx1TuMgAcB3gNT9kV7KX99jTp1nFhGXBSYK7hizX7Qreq1YzQ3Dh4Y6",
  "key36": "27THERNmJXUmE9aFvCEhJ6wKVJ24igBVx7UU3be7mkLPwzDTujRfhJvSKkjboZnSrv47qJju3D59JzXEDKzKgP6X",
  "key37": "3qdbP8ah53Y5FKfYoZNxQzEqGfXbmAKaKRUJCbRyRAKZsgNbJAvuwTYS66SqUqZcwqYwQgXUCdisd62UDcjmMLid",
  "key38": "3AwuCFsouLeKEyd7Nd8NM66oZbyB679z1QMqK4RxF3RU429o48dUus298ehu9L6nEqgQfWsngUFj5bikwMXXcLX",
  "key39": "43NazFNhwKBHfT31SCkgLwM2JPdbr38gpoEAcPDSfS8ULdZEfZ56tjumaAULbUZRFdgoTLv3zAb7z2xBHHuaU3LX",
  "key40": "K8v1EYEVJ6heUfsNsXmeiRDKxAKMakswxe8aBJ28q7iMaeiPv6gnAm2DTW22s8uyxdQvu2QfVCED4GFLW98dCZN"
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
