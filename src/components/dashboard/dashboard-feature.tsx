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
    "4DEep1AzS4gS3LboWiHSQw5FHW8sadVoAxX5xaSiduu9k5zdxeSNaj62S4Le9UPDB1wML86Dmf3Du4pJiA4ZyFSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQbhcgbixA6eMg8SaiKnbUa9eBq11sSBkhrb8FXfJ26Fi3gq3bLtLHtQDFijwfT3nUAmAPFEuKdbmpVfUyWDeyY",
  "key1": "5TvFobDspqyAZ7vE8arBruwkNxJD1vCMxy8SLfBCQpBm8c3aBHqsmQqWiPJjC5ELxAtZSLDbUqogPJqgtARvvNaV",
  "key2": "2j7Jo1imKGJb1j24Ztq9M2jLY2j1QEnwuGPVTEJB9WGK8LPWYAgdFkdfvAweMPuJsRJm1X6DNXckvMySBGH3jx8U",
  "key3": "5PDu2MaJ5Nnt6Ld8uZXmSvN6QBEQx1c73rhNyQD6hPdzZWK3x3pnPjjkM5ajAVmYuRHCRJ1MMrLnphPa3sWGCVVY",
  "key4": "57sbZA2rjnW7FvUaQuL8VKivxBKFHbbnKPUijHf7MR5GzwdBsiqnDxvfFugGy2zNTSoHgS9SZ9BcQ84BEu4HA54x",
  "key5": "5QhxvwqQgq3BjegjWFpT8pSJdg1wS5b1t8niozW6VWU7LiuHy8XwkgJdKwmpHbUHrWkyvqkWqzqQ1kGUjqj68sDD",
  "key6": "5VvwEi9ZNYgdMYqKauQHen6Jq2EAKT5YxGCRTLrHogkHmaR6QEUJfdhsheosgjpWxo4xWPsiAhUm2A8jYEMNBV2c",
  "key7": "2pQNmnYCowCwVXXWmZH3By5NQ5koo8o1TQNnL7QbjXwKthDkYEjvkAEmPvHYDE5HVngrtHCn7PT8dGrTTRv4q9ut",
  "key8": "53H5dWVr1V8YJxteXkFEqreJ3sx3XpchDAdZNPL1kMribKnxjNrb3Fp7Zkq21UXSsuG8j19xaYahdc6A3dm94zCL",
  "key9": "5KCn1un9GrvDyPubQyTBeFiTAsrdrmvctDiGHW5GjwUezNqDAvDLJpqkXBjsVvujg8QjVfEepMm6yxcu4RLkuav8",
  "key10": "4DysVxkcr34mo72wT6wEtFzuHWxTuoHrUt6SbqZpCwVZRuHPGQrnouRGaeMVd1yy8HdWuXBVhSG648o9DoL62ZuR",
  "key11": "D36LVt4Kzsa8BuiVCtNX56GbBwb5zGMkwG7TDnZk3QvuAmtmM9YjXJvRmQmkzDYURjCRLjK73p2MxK3p6rK4sJB",
  "key12": "35FhHa9VNwU8xERa6GWBVnceLYBeGgf57EU2hA2KJQupCBToLuyjFAvCKMm3YoLnVkA5cK5pNfgYPoFdGujRKSP4",
  "key13": "1wdWsSEVYBYtrVBDY4ytQKV8vfMU6gX9UMo8fTGvV4VmzeoZ9gXA4JpqSnCESRmPQHW43JxT8ecjS4jcXBX8eCc",
  "key14": "5m4anxKfpk61qfhDUJM4FTmDnV5ZA3fLGxZu4MSc7XM226tTninhHbm6K5Z1mk8GfN65kkjnbonXjBuBaetJ9eBW",
  "key15": "5Nko7KRKm7YdDo2p7RaWUApzgQQJtJ69VyJ7ud4y6yxpGqUQaevBAB8hkN9kVtTUMDy58oSpS4DaJxEnqvZ4eDH4",
  "key16": "3ps3jR6AkV44M2Kjz9GSx43chS7CLprXL29EdgcBEWHASiaTWspDpwJX1ZbipEbdLN4ooxjuNp1dWbNzeFESHP1j",
  "key17": "NmmYPHA2ScCbzc49DGnSYJ9y56NqukNPxeV1pLoCLy6JUUwURaPcLs2noACKu1D4WEvL2WxbFL8EAciLbSabo3h",
  "key18": "5gjZ6JR3uf19oLJK6xJJLtxTdKWAawCHh3AgQsfFBfAes5kf7nLjM578wAG7Jhp1wj7oLQmychwWom5wCa2quo69",
  "key19": "DppivZYXZizB9fyDNPawbEhTyDrmU2MFtMP19ae64RfUXGeQhPzfJsTvwGxUMSjSzBkT9v5DRQ1bQUJyn59fb3W",
  "key20": "4v4y6iw8DAumrLmsBpyNe7mvdrs1QXKuLLWphdAVK2Cgqox6kr84PG87EmdwAAvGeej2B1eHQ745XZZRFnvdeXUB",
  "key21": "E9ZtSSUc4XA1G84bQsBmCySjidmiUT1QLfDjt4idiVKtxovzh3gLYuRSb5WC9Ti3pjwogYzEbd7nmjTWbYDugjX",
  "key22": "2FLWxPwg1s8JdRqTocTfLmBgHXJyzkqKAvSK9pjAGWCEXBYVGrVvvxcnUrZmYamQKm1xLphAwJi1NV3PiKx1789f",
  "key23": "rrHpm2Ys9NXHB89qAL5UtTf9msCy6n4QfXsHqmDY5vj9AoUfgNGdDymKVEWXztHQvyXxGaNzyirQD4FTgUjrMWE",
  "key24": "458d2DPSeBPtkgRFN5R51HD1Z2mbmz7HwtSBEJQZndAA2CYwU8SAERgUo5C5d12WMv7ehgqpgDjPrJACkCBqPjw",
  "key25": "4XyETgMmFHAj2UFJf4JPReiCzv8z5dBGQefdE7LiCFJvu8cGSQF3aZS3upWoEGB3rn5RSJqBzJ6A5cE78YuQLchj",
  "key26": "5ucERRdDPkuTaFKwZdohRVWm4CVFnDFZ68oKTPduv1UE9auWrk6oaxFrTmHENUDsSJZVjJjxMGcTsKifo9pXDg6U",
  "key27": "31pjWKA9fxqWFHHJPWHbbnGNdmE19z5WKPMq7VTtCpQxXovT4d81MSzxA65icsjno2QHA5NNdiA9MGaoCjcyCCwM",
  "key28": "5QsaEff4zjmitZ1FFL53HRHeZCyPSpHYEWqLhVC5ogoR2ziwkU4UsRPo7QM78KK7VJgiky9FxmR6EyaTRWDmUBvb",
  "key29": "3JfT1KnMLMSxWPa2kAsmRWimAtFtXmSRtpwDxHX3nr4TwdGWtSzxpD15aTSZCa5s5eZSFrRNV7J8wxSg1T8upErS",
  "key30": "5VASx8kgAaVgcX97jB1yxggVjmhXmY4VjefxDXb2SLujBifpsdQrQtCaAUr8WnNCWzPmXuJqdKquR2BgeF9bqsxk",
  "key31": "4qDSXVRBBuzLy939jfocGkrJkJRBDw93znZjzcDhtEuLDHjLBbTMT3GUNPKdoKTGA8u54WjAFk4Pfj6UoS6veKUR",
  "key32": "vrzz5j29LzkmKbCKcmR8sATb9Jtkxt5wV7hCzeCfRYuAM8F4DAxpc8Y3WT44oen2m12EcYpByXoGS3S7XFwzDTK",
  "key33": "57EiXzvf7L3jV4dg8bcF4uSkwfULh3R6V2Xv6NKuW5DFzX7SKuh3q69PdLamt7JLDzBuomF5BpLLnsXHffHALdaP",
  "key34": "2cPSVoPutjZjpvojfMUkmi64Vq2Hs214GLbmRax4SNzB59MvRgt3Db4VPft9Bg6XBLhRVFsYSLsd4oi7q3GkMUWm",
  "key35": "2kECVvudQ7JZ4VzXybhwRcui8DSLcmDMaYQLkTj9XRwqbKWjgRysgevns1ikQPbicNFGvdapmH6gnarHrFaFtBia",
  "key36": "tqeajRjEKQsvcvaHu1fWT5A4212LuVWrhBzCNy2bq6sizq5rnap8dE6Btaq2ff9uUpS1ECZ57bK6GL6TwZNvt46",
  "key37": "3FgFydQnCPJhXv7munLE1377K6uzg1FWvdtMBYnK2DnMJdthEoo1q7E3PeYiqGfiejQauJVYsuMRaNQnwhVq9KuE",
  "key38": "41dvcEWqkH4nFFoyxGngXXNx7CVPd4CM26zvtijUftTcDn45QM1vjLULYsoEBAgjTdrSQRz6NxxpZbWKShvsefLq",
  "key39": "28hkGKGw975LiTgNofNUNN7BBEP9YjfLuzUPcsDC5MgwLEyyq4aPxPtGT44jGvNRP9yDxh2pduWTRN4FTFNaQtWB",
  "key40": "kBTnKoxSx4PGaKs6qCjPzQRC4fGYR8FptjJBoBukF5eWpR5ZRk3Je4YoeQVggovzpj7YU8VMzV4FN9JTa9B9ihT",
  "key41": "4cWEXrjeQbPa7ycQMemoB2dYkYVkNViQBrhpxeofQC8D41Kwkop9fvpCfkaRSrXF7HD3iwT3pQMbeCK8y4FvfG7C",
  "key42": "4hxCPiG99m6gE2RopCQsQfQuNqCPwX24bzkjsdjVV15cCytQ3KxwKMn9vk9QBhicFNWntcTnj9HCxi9B7hDpgeHv",
  "key43": "675pgmu1KNdQExMkSLVXARiUEunPFncCA92tUzTda5QPot2achkN6pmgc9td4TyCMazZNkNXEw973RKBu8cHpa9u",
  "key44": "ovY7CbKKaTgsKqUuRMFTWVUmc97xyt4YU2XcFSKos394tfQNSRtgwJZqsDxvgXGwoMBiskXbV6WWtS7W1awsUa8",
  "key45": "2SEsnAmu7wUbGw5rj76g5ztzUrXzDtR2PbzwvFNXzBiV31TC8Js865hTvETJMNf3Xx1tVhuWdUdTyob2UU4SPUNj",
  "key46": "56qwE4ZJpEKCZRxKBMUQN4XSqvZRG5Ay4Ph6aPs3TwQrXHFvUKMWD6zBPAE8soucbx4t3Tc6JuWQ4Vh8HApEpJTG",
  "key47": "5TdSGng5mSYqhmmkJuHKZqirJt8fRSEK4HrYyW9mEgCUv613J9jP5jXwLnycFicDjueih2EKW1YYZeL7e3nCzUCG",
  "key48": "4iL82JCexo7TUNKJKshGtrZ1k6ixPsdftV6b1qiC44A2z43z11KUMUgcDH9yRRD8qzFD5DYoRsdfMQneFxN36h1o"
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
