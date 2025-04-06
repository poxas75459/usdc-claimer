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
    "65BB6h92YkYDGjfDfPB2uB8GDUyxo43jUvk6MBafLosDi7ivZVCsSxaYgdFKNLrb86iz3fyGg1DqF7BXZbuP4ESi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RGxcvsHpUWHhPwkFahZe8VLXvM6Rte4bLiunk89aQ3zzgPhk1ccoMexHUC4WM1kytXuoPYYqpu5zKPRYoewSXgu",
  "key1": "5pvrWsPJ1LJ62ULBJMNw5tgLy49sv61nJKnHGosNMAc1FJaUXxPTYpiVrXECqpEddFahvntXRyhues9ce8reeKk2",
  "key2": "2JrPpdHnsHwUrokCmHvPjRSmYKtESCENSyasSnXmwiQ2c6DNzqoRTyW2wpXaUp3tuYMmzAm5cd5zJFQhvimK2iaF",
  "key3": "2qLKc2UsiNCjAw6wBcHyaVAD5LhbCdNTrjZb75BPk2zgyutxih4Fr63vZNmmxdJoRtuCsNBhnKFmx9Goo1SwveX",
  "key4": "5Q8rDMFZy9jsTXCEkq1P8atwZoMKvJL41dtdCQhqxcBEg1djX6uGPzUimHGPCrn7a6mJmsfNBLrqiPbVA463X1Ak",
  "key5": "2p52zSeDwZtXogor9Ygt6myiYbogz1RB16LSwpPB7wvT9ELnSvZ2oQuzYvXDeipgGkqV2uRtXbuTvH982dVhALGT",
  "key6": "mYJ7eE2weCzBMsLCxEAzAxY9qWKb4nLWJb5F7CmXmBx6o1zoeDgdZjFp5TVPnxAoHpZUdTxnc9D6anT3WtiCt2V",
  "key7": "5xy8HnSNCPQcoqvypDAnRCXuVtgDLWTTW2UVgxUqCHo36rJKii5ayJaiC9nLiFqvDpMDi1GMoS7Lb7aaPyrapC6H",
  "key8": "43vwQaYCqwsamXk9Fhy3J6Xf1TaNq7Tjcx9TCwactppETnG6zF6VpdBzijmGnSovCdqGLrFDdrpjkLBoYap6WGbA",
  "key9": "4sVGgkHF8NAALs1c6FVS8KJmDZYAtzjhxTzM95PftpzepxdxTM9jea18D1vgqwWAvGRo2YvbQbTNqvY4P5528pNN",
  "key10": "64wdvYFxpvUiVmD9ajFcdfWsh34tbAXxbwdyUK8cADWstFZvmg75PFtn933XxdjQDyNsHaFqchnfp2wRYL77jg1V",
  "key11": "3TbnUFVxstcBZPVvBkHA1KUu1Zz6A2jMPZcmjYbeE84ZP9dQ4Tj7vFo41t51CPKpK76LXQGQHz9o4TBdFpxghYrn",
  "key12": "pynGpL2CMPfBde74ah6oRqKos3545vZXhr2AHU6v8Dwz2ZPZjAmEvqnheVu76H6mExtFaDJqbV46u4H2aZEiNjj",
  "key13": "5VP9ENmdBKdDMgnxWxBadZTRJmYBf866HvSntXSYjg2kvfYNYdV88drHQGuYmLS7Khxzg2mhP4sbqr8eZhenv7Zz",
  "key14": "LWoGs2kiXdYZZyyS14eU5AqS1QzhZcra13R3FNAui1J9h7pLJSLrmLBWsRZMsPLsbWsvoXoapHSzGV3ND2LmaLt",
  "key15": "53McxVZ5fk766JxdExA7bYAyJyYKyXkNgBpt6ea1Nyw9eJCXRavKr3jYi8kDmyANwUpXuMYZ65Lx9WtdtH4YRD22",
  "key16": "4aV8hHTwbQ3bggeC9med36nu8C8iwtErsSxRwLvfvwZFPHSwL9QD96J7Z7wG8rPF3YvtDiYtwDAwVumS3Q7v5EE1",
  "key17": "5VtBDuhBvefg1TkKMtpvC1Ym1Uk6SVRJ1cKcDbCQd2HJ71TFxK3E7KMMGGvpuiwFRqzNjrwUWnWx2Hi1B3a83DtD",
  "key18": "3PTmvApFrRtr6yBQWJYg1nSZwxBGaHeqTtBdmSjQ7a34GVdqSxZvDTHQquuiXJ6RvsJXKFxBF54AH7hh77GSgi7Y",
  "key19": "2UnbfJpdBC571bRmTNY79YRevxjDiVtTdc6SqBp6Fm4TLVyCVBdkHqpSsMsydVCmp8GF7vBgM9CMTev2kFS5cAuE",
  "key20": "21D2YH7UYrhoJcub3q9LtJnM5BMfVB4ZL8x7cffbDHVeL23nY4h4NwixE7rifMm2k2Tsax9yeqyqFX8YJZnjXcKj",
  "key21": "NaBUJrNk3rtS3DDgQwTbW94PVStHZhtbctA3XQsDKWmEy6rSqSS9SU2EV45SMQWW9HgHCGmCwjoihNfFrAM4bgo",
  "key22": "Xx9XTjDjX6UnS197wYsDacnMGwtEHFQMM1ML6qbqa1KhrQnarL1V8m4Wy29d5Su4r6jrXVbqdfsdrVPBB8DVDCD",
  "key23": "3SkPosF9QRTfE4Ezmrk4Phbkm6P6Kx2fFNpa6muUjUEqCqv58f9qkYy94WZJhZQ2w8twt8grZ8eoszSQFP3EsL6B",
  "key24": "5uUuL4FA2nWoLTy7qKV6VRLMLG5NLHRPW3pc11r8pRBFABpgxA2dtzWrtMBdvkkiWEkzmmGhiwa6G6HnZ7oSavXC",
  "key25": "4e4k1xmwrnbLSRuUza34ESZqN8gYsNCZnC9Tzwek728Lu9JYjUQhbD5g8fwAohUSC58SJLFCL1QjJnmtEB75qFLC",
  "key26": "5BGcFhX8ZugbNnvWcJDpG4EGHFLUVvDw9tMsm2mdLBrU9NoXzBiA1dhqi5SeDweSLyvYADNyx21a7tphbKgGDH7t",
  "key27": "412BsSC2KcENY5jqzb4UBgYzd3VzjpFaPkEMKwkB9HaLMKcefNYpxuh7kQMqSErFwoDWHt5djpqg4U1PKJhx4JsH",
  "key28": "3zFYJbEnnEsTv9xtPzmaM9ao3Niikd6o3keeBMrRpbQQxCTSzgUV9DWf3VYjzgNL5Azkrhy3hShHQEzBHUduUKDv",
  "key29": "3xhKoReXGUWEey9QvDTcD4vxBCutXAobEGUXFr5XpvA1jJ2PScCG3hZpcUuVBRGmzHiEcL4PPxsqGoQ3DdGZhNPL",
  "key30": "3KJpSheJQ5a47SEzDTuxGCWu8DtxeMwLwesEaYtsmnas7S7SV2bDPtPqnFZCAFFFDMVDuQXX6VycBfPhvRmMQo5s",
  "key31": "2rAdMxE1rTcboL9aqexumZJfqfVYX36seySbpXCqGhS88tQxaKuPywvkkuKWyaFbT6EfR4xC6JpXYZrTEgVH7qcg",
  "key32": "2BA1xiQNYDwZR3zGEAqzmGr32s5VTkkAAPuEDDY5BWJ2bcEih2JasiNtxmhpraRhoNka5aiHRuYXJB45qo4gM9Z4",
  "key33": "3kWgV5u6HJutoebS4XiFoP6hmqDTBkPSvt2SwS7eNqXQxJQjE44pXEJjzZnmoZejmFJJ8qeyY9nxNQ9ZCtQjho7b",
  "key34": "2vesNNUQoRaxcoLnYvMq7iAwrkg5aiPunSmSui7Yd2T6aHkpzrzSJ9AE9cxny9KiJKWKSn369JjMjkoznsmbN5cX",
  "key35": "5YE5bypk7s4KmMkdepgQUdtucbKGfDFBvx3q9Z4hWkA96WJEmu7w5AFE2TZ74cHLPzTNEA7tAcwS9aEPXP7BNC4s",
  "key36": "5KdeowrFcn3xkQzezBuqaSpSD1JCGkZHkFwizVubYtkY3akfgEfhAWzQbXGFrRAtYR1RVSzXUDgmsAamiGVETW12",
  "key37": "2SfB1ZTp7B3T8Tmypav6UmW3gM8rq9XfN8aGMjoF1nfTiAjkyN2DBC5YVEXbpfjW6cQ4nW7m7vqJ6FwfhQdY9Qgf",
  "key38": "4ybNjratRrvenbsETsW8u1UKDHiWc8KvLVqBbA4uLGTroaRphPCrSYbCR6V9nypKH1L1X2zkmRVMSW1AtFfca4rG",
  "key39": "2KYDpjEYLruGad9b8nsoStYTQML1GsZvJ1CHaVpj1groqoL4TxoUqxa7WkjuHQdfNMBUvf9pMrqMqsX7axD1nmbK",
  "key40": "5TYQT4b6dwzgdBoeMtfBi1pTTeJ9QtShatNfrbvN3MVtxsDrR25pZX1W4vYpjkuGuneyWqRSmVZGi2BVC6Fxfdev",
  "key41": "4ManvgRXJNh71aVyN2UFwahYeJx2sc8MbnBdVZdZnw5GFar6ZeFaP9NVQcALrGD3J22ohTxrdDyxtjexNATdCtDQ"
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
