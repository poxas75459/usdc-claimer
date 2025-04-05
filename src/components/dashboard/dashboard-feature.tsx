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
    "3Aa7hFaf1D6gJYpzjKTpcHgiaHtnV6K1WuL5tA4iY22BpXohknCMxryW4zJtUu9GEbeG1EFgtt9Zd7aZpDU7EFUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "214Lg2cuMtCPYyZZCrwMD4Ri3A7qNVnXaRM1NBvGRj2UJMbVb4uyxDsWBKH1BJ3zQUb3kjSCqpJoV1p3t9VuAP6i",
  "key1": "282gaZBenoQuM5LoKCJA9ziJn3qfzaVrxQciS6S5B95RnX7p8xFLMRSVDCfYN2M2Z2WdihGjbVaEwpspsdhTjH6C",
  "key2": "QxfFwXbcuEcPMCrHn6pb4VFhicEGV2ioDBDfwyihqCU2aSqdVqEUJgeRuuFtJN3SjZe7dERtFNmDf11m1GkDKN2",
  "key3": "34ZWvcxAJsds3i6Rmn3C1FVWZ1B7LE1yMXXkycXCAnwBvX7JaoZBivr4NmHqF1z7r8V4B3J8XGJeMxsjWGN5CtNg",
  "key4": "3VnBBt9QfkHin1twDKvNsDGqfLpx1wHasLaXanUgFezLzjmbAw5gxR2XRhyRAaDtMVZha1vW6Qq5fqvchTdUGtwJ",
  "key5": "3Q3ra4dpg8S4dxjMcjF7Fz8TxYawijPP9U7xRR5LzcRHbr98Nj9CUXSdkpU8WLtpXzzrmgYzXZiAr5U5UnKvaAep",
  "key6": "3vNBEs2LhkCSVHpBtsDk6AXeMVi4bVQDR1jHx5XV9jzmT2TS8bS5d8hvMy8cKLqeuvwqmxdDGfasPqmEXwnaGFKq",
  "key7": "53fP4tjYaZBzegcaq7tZsSmGpkMPi3fddG3GVvaJM2LRRJNENHYDuZF7mvbTKxacbuXEuVYar8avaVBWtjbHvbNh",
  "key8": "4YgiWCUyBwHA1Phrhc3mxRkJPqcToj3paSN1NnWpKpVfVbWyvJonETMq7koacLu4N25gf1AWivp726pQF3YatJ6B",
  "key9": "3xEk6DDM6UsHp3qZQgmgBbFGz2UyJrQV1ThyDrvvXfwnXCwwRiWSovWvPRuhRKEyNV2pB2pkSdHbh1rd1zPwttSJ",
  "key10": "5EQqWFoNTuKSaxPKnxxoiXFWSZpTHAyTpw4UNJnGhkGpSBSpsRBXEaqyxzz9ymknKSsMKNooiy33xpo3SmN5EnLh",
  "key11": "22AddiSToKDkKLyxDKnomuihez3v9vpozgGXLCMwApo5VC4LkbKELECBRfWpgy8CcaBgYgtuZRQ32zojZLPmpTTx",
  "key12": "5c28dtivzMeUrixw2EWXggbKdNFV2Esbg1urrfyPytNVeG5J8BtaUHTGkHNNTbThSULpWwR1V7BSv8LpLC8jv8zt",
  "key13": "22dGuBWcPYedLFgCUYick2datnasL9ZECRdRt56zmavxmbMQPgd3Q5HPSzP63ypY8yqHKutVsBKAD32MtWc6ucHw",
  "key14": "b7chrz6xWHYJjepddffhKHoZ4rVUBVSRkLwPUDs64N478jp7iPnft8QNfFHR29akDad8MeocFNiSbfjGyJUVWiZ",
  "key15": "2ENiQ1Tnqhwaf96jfDrdSdtQFs4FiGNv2pu5RqqTAXQdHx75wNUbPdtTHUvSqJYgsuu69BZgg4jWKijnT1Hwy2pS",
  "key16": "3uQH1pRANhHmvCWM4ypUaTBAUiRDWRBgF1oX8ZUeCT4LopHwdLH4zbzerCjmKALbW5niJr7sGJPAFEmQGkdf4yhS",
  "key17": "3CYSEP5QxQY5Nv2XYF5ViGUivwzKupZQz2XH5MwUhw6zg3fsTPcaDNNjoNpLcANgxV7Uc1dvqRhoyxZDCxQVu6nj",
  "key18": "2kqR1CrhVaNNuPmdcXAyCLSWp9hdAPzGrTnTEDbKWMdx1MbGr5rFusAFJpZ9gjAUHqd5HkXrDtymNVtRrxB8Mts1",
  "key19": "2Bh9c9Qi7qaFenVi8oq4c9yBMr35ePEcdYGbdgwTsksk8GpHy6JMLCpzT7q8cJaYGH46wDfQ6SXeubnkV9uYftaK",
  "key20": "J47giyeJ3asEScXaSQ6zHo2kxjBSHzGqTN1xV1TnrAwa5rnezqDBdNrPDkdnogThuw2kY8rDc8hDPaUsu8bm2cy",
  "key21": "4E2GAwzZ4ran8EjnDm5zR3E7ctvLDfF9UrMUfFeV3FEM4N3xHq5FKJE25TadCPbHJB5CHah3rBvm6jYatgXTZNhA",
  "key22": "4hpRpLV6f62YcPenLxk4qyDpLGaSqay4ZxjAN41zWc29UekPn5NwEcnRcfXinyP8W9PUFtRBSsbEQ4NeDYwmLYN2",
  "key23": "2GkZKk8TDkg2F4HMxYEdq3jUbx4y3QN3WYN6GkDCnj24jiizTfJKnguCHTaroVm73a6qNn742CbQGcvFmfqqzHti",
  "key24": "2xpJwmmj3YKyBX3ynibs5sJuCHsxEfy4umfrC7AqiL5SqpX4ABYTYkPeYHULYhm7Hg6eQSNadBeqjMrUNnSipunW",
  "key25": "4tk5D9AveRs2oWHFLPSWFMcco6JBuFVF24TtQEjZtoBoY7bUsPwiayMLpgcpKjnwvnRX34PTm8gDAoysgvu4hQsJ",
  "key26": "34KvLmAwbF85apuhfQ2qAbvWR5xPMiUqReiYsgGSqnM2vAhFuPavoVTFWkdBzPjHz3xKBizPK7D5Tmevkxipt995",
  "key27": "73CkNZ38fADYsTrPUYefWAkPQzHwiyjQmUDVib9xs6RssFQNoTVZ6szfamXzNBT7by1FqxCScJrrh9QehhZMD64",
  "key28": "2mEAa13GUa3UNw8jg8tNNJwtSwuTUnHQWjsDSR7aKRBMXT4RNGrJD5JMwgr7rgMoMYQTgkwuvw9soDMWH6qsrGZ9",
  "key29": "2iUSMoAz9PLvh4kVqamE5AHHKVmQKKUx9wzbYLo2QdRmcALSUfvH8NB7KRgh8Bg8q178qyx7tJc4NNCHL32hmmRH",
  "key30": "5xA13p324E2udfh4J43VuK5vYdYjTizpxaGb7e6g41sv7d5SxcPNHcze8CaNs2DrdxD2VGrHe9Zm57GVgFT6i26G",
  "key31": "2Wry6ukJRScBmRbJJj3QKLzzEEpwkyvZcvfCCL8ad8ajpP4MopSx4CFhDsGaivkE793Ezx9vMW9dLDfY17gjZyd8",
  "key32": "5jRjbBDWbMgq969oqK4qGfN68hUDq1KYLQuHhVFYaKbciZQ61gbfDRjdVztLkXoTy1hYUADjCm1379VyiJjAP2hg",
  "key33": "2TfnJNwCUTtULU6DkcVJguNG1eAuYQz44mqHEkBTpL5PYH8NJuJCiGoPrgwzSsDxjFXnun95uZktUp2XdKB6LPtx",
  "key34": "3QdbKvahuGY4fmwEPgbnsU8R17YuxPwzxSvGCH1iciafdDhbi8RgcQV8yDZLtxSHpU7tzEXGjcHHFn7kCpmz7E7L"
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
