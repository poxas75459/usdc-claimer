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
    "4dZLx5xfDL8B7V7LJCixGzMpMsFigULWHbqDpks3gDnkE9J1oskHkyUXsUDA5ucab6iMhRgyuxKAyqU3MLNPEqpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KZLo5rAfFoqdsic3WybcB6GAqZzsEUqJRXpVHwduWNPHFeJNJJV8q1D7iEQzix3TSznGCZBox4ZFuuiuhN7G8y",
  "key1": "65FXCE225dHP7J98TvGL6VYQeMb33PR9NdbvDZ5ziMyqMZnzYE5Er6iyMdXbjxrptwrwUW1QMvwW9iXGsggTe16M",
  "key2": "5MqhaqF99PPPmnxLLTh8e4udRmqhF5EisoAhbQkH5KvGSxihNouWUHFtDaGF6Sko8kT73xmgmPMSsdUxsyxKNpzE",
  "key3": "reE1bMAJ4m7SSHtNTSLfrZ3hti3DE65Da5sSLVW9YSpP5p7hzqm32Rf7ESVVWztJpVdGVFaw79bpNrPFNFFSF4t",
  "key4": "64hwyJet1EFk6nZzPRkHVUjhgyWyPaYg73oWwS84U1j1VxTBLzHCWVsWsx6Q1Zi1NTUEwKwsRppTc9uDGfhNrAjy",
  "key5": "4pVAyMtCUB6FUFcXyNCGMUGm9TUURhbpacaaEHgUHBLqFqQuRcPymJoT7ZGpsmdXxHaf3asKNs6KFn9tCdmQpHhu",
  "key6": "3qCTAcmUZS8hDkVDkWaDT2gYokyMbgaZqbmTnwmVKfKtztULYqttFhms6faSVfXWSgpHCWPLmVEWYEK1tYtggXwn",
  "key7": "3sbozjhiHzty65buCYcJDae1iLEvFxFUNCaGsoGGbx8TmpKfnY71Ldz7xn9AC49eF6T7Wo7nScFK6vPZjHdsT9m",
  "key8": "3FjQMXkExG5q2orMLqj824SK3JiBenGsxzDCSbJbfx8iAH572T77wbYEJBMXf4gU147ZEYBMeQzw4vJP8kgAwykT",
  "key9": "3ce22maqCabdf94TVsx23r7DGpw1Y8bqEF6bfH51P1zD6iRXLrJfSZuAP8hvUjutQr74Q1518q49BP7PMbWKFWLq",
  "key10": "5YaLaSfo6kZcHwASc33zCDh2ugAjvaad1mKPxQg1iuoUWpf3YroztRjxctx2MZfJ11g99qaWFn1EqqZNZzxC5M84",
  "key11": "3osfp5KMrxDH7WeLtBLPLGQwpbHquLiHhsc98284XXA4uDUg1FX1CfJVSC9xv5cEJgyhHDEzkfdyDCLWzXrz8BZZ",
  "key12": "35TURaUNVjsQ8z4Xz6CoNdA4SZojJkoWkpUfnDurcsvEfqd1CQr1ny6pHWhYBp55UYNcoFUPcULDnxAGMiGjAqA7",
  "key13": "4jACiFyMiw9QZTYZ4mWedzczxRwuxiv7iDyLx27MFP7cvcfGEGt8oQNUA12xp1iEYvSY5PauzvNdKsk1zQptSjGd",
  "key14": "4jC7Yj1VgHka2TTGXxvoQqS6MQwRmXLHkCEtQpTifnjEpyfzsb5TpwyEFC9DXQRYqkUbBuprHimVD1dEia6VoEoT",
  "key15": "5U3oFEMGyi4LSysbyPfeFZe54iH3v5BwmPv6P68LQN55WFdPECy8r8MvFWGY42UedQ29sEuUh5fXYNkHF5wmwob6",
  "key16": "5b5PGWp9XtzwRu9garHmWBeqm25K9oj567SrQQcWGXJLVSBaf4WhMjCgZZ2XaYNXnY1dEMAS7AmVd2Mv1Qo39ghH",
  "key17": "zNKgjea6bDTjgtJ9jUvoV7zXRkq9bebDAHR954KxFxmDnvPoViwTfxKR9BZPo5MU7WPJi18QArZZJV2UQqhTjLy",
  "key18": "wsyp6AnpxR8nbfC5zrTUqXUSHzpUQG7GfW8xWG95p1c8xbcfKP6JmAaAPkVgz6tBuzWnWy4V4imktBNvMNxDC4t",
  "key19": "34ebANETdQEhBzQ9NAgjoERbGJRA5NeQ4Ysqheqaw8sfq5bJJBDMWJvQyE4fk4iQx3LddA8FRrT9CsdJKokxSAwR",
  "key20": "7aeC9DFi1i1fGbCaEBKYfHNCgeJamFyqo3cTrNtrYpiKJPnN8GdzhT6AC5VnSJkEj5zCmC2yjbaEmNQsia5vZge",
  "key21": "2HmsQJh9FnV9q7wDfpcMsQnytmHbrAqmr54X2ytyohfNsA6YHNFCbGBb3PnhzsD64tcqTU9tke3FUVm1MtRrjBKE",
  "key22": "3egQouq7bEyd92zrFD6NCvjG3XMm5feFxBQ2U7Zp4wjeUfPsHevVU1iXozisE82oAivXNTT8u8zmXhX28Zb6nXMU",
  "key23": "UZnyfgwGUdUCTFWpiHVWpdqWQqQx5dS6BXS8RteaBhsKLrB95qMphB5fuCx5UqCRmmiXZLXiCpULNNa7VEWw6SY",
  "key24": "2ssFLjpMvcCbRsMmxdM3pNHcLsJySxMrTm9agGV8zuWAruZaQj2ipRXZhwdALfr8qy7N5nfYK1RPgx4xovBUPYAg",
  "key25": "3HnBFvL8nEM2FqWn9qYQwB2NjxhCKw1iJGn1qonkUvNEJ14jwbybXPynLVWG556Mi4ayZG69qFDodH1tTRmRMwHa",
  "key26": "59vuJ8zzpB9MLY6i5eRD3U6wqp3Yeta2huCRHUE5k4z26tMNNHswJCtnezXiAujYG7gXBHJsWQ4fhxjBThfVMUbM",
  "key27": "4BeB6Fv3mXH2dQe2wdJhnySbrWtRJi1wrAZ2wMvZDmLGg45ehYJSf7YoatGNoDrHBNN6L8yYbAWJfyei8nJhXGhk",
  "key28": "73ap8fe641iGwidhUHA9zrAyDV9ZzwCXK5YM3E2nCTuEYjvMhKPakGuKyxhKZcczqsN1qe5ikVEvztrY1nA7Xsv",
  "key29": "3sQUCEVWpGf6rN6eoU4GWKoF1HDPLox3e2hKGC8PKRtX5iKEtm7QpAmXBAJEGNTsF3PuSjCX4uYNi26TAeg9REoG",
  "key30": "5gu44iMckhGMTr97Dmv9LLffQM6LYXxmqsTMjMiA8x1dxUdi3xxtzbyQNNAzaEZyEPuBe2vEGzT2vXbScPa4qGvq",
  "key31": "5JMBfMPp66jLgk2SgdLukZ4emf159mWqjBs2pWnSX6cA5CP2Nf5GCuVegXBQWXZ3DZgaTz2tTi677t5fE7nRoCGp",
  "key32": "4XRpfKP8o3eAishLmzQE9SkkRupiDTkNB3k7s6PinB3pv6CdfamtmE9Ry74muMcrw8YrD52VqFSNKDrwmTACtVxc",
  "key33": "4jiEBtKnRuRMH13PWzWJXwfFJD2RZ1TB7cYU9wsji9iva6qgFyJk9vFDBUT88dqL7L4tLBAYzHhv37qvYWwWDgWK",
  "key34": "4pCcApPp3wG6deCvArdCizAWysQuK1ZHnZ6k5ULHDJ2R4RfQTKpZRKDkM8MmDTXEgqraZRJsUXUWNVvbzFHJ4uMq",
  "key35": "2eEmn789RbuLwEuwR1gMimTsFR1mfo5rGokULV4AahX7a1YM4DJFKzp7SaYdjGrVx4BWv2wZk9rhJs9PhasozGji",
  "key36": "5A66QRaXH7oer7zNKMBa4uiDKXkSSk6nJi6w6tH72QdJ29V82jS6uukBKa4yc7JfQwxWjkfh8P4hb1xnjzCSpet4",
  "key37": "2pibH1tQG8nLGsm7tcNBPZACbspijA4UPUryZYvPrf9ee3a7viXopLTJSAtLiwC5ZE9yHJbKPSYtdpoKGQR9J9A1",
  "key38": "2tuLhRSpjWMKizAFapV2GKY9TXPEA4XP9FgZgFZnc57fbgWMaRCe8maMDkjHfgVWZTRXHSRnBtoqr1qyMHCQZe7Z",
  "key39": "415ymRGxmKpsxeoDv1TuEbZVpVDSNakwW2CBu2znwF9kqA8uyXvVQZqkvZMxvgTQyydasQA7DwBg2Z75Egafa5Ub",
  "key40": "4z3MU6KDo9NEj5fY4m1eZDnSfJuhuHFsxBLZ4ShjHHtMj2UFjfEY3xFQ5Cn11jSVFdGu6fELxDZmRChFCGJkpgc1",
  "key41": "4fGnog1MZXvYv6DmEAmKvu3zXQtN8iSC5JnLNdizsaF9B6szBc36Y3wDMsjo1xswB21NG3b2rvNmCabJWy6KfKCE",
  "key42": "36qdpJ7d5j24bVfv3UVeqyyrKRgLgXpAEHDSSRDi4Pry4Gc9qzRFfFcPhn6DZreYs6pVmjJAJitxV1k53PATTwPv",
  "key43": "5B3cTEGKnnvB5KPZNrcz2pBQybmvPqnC2kVX6nubzCGX7TC3Hn2BapfbGxv6PFGVz1qYj3ZeorUEH7ZxJd3jMtH2",
  "key44": "3gw64ofbD9DkdDWJrkXMMXSybfoiczEfYBiqFkWsQGjP6NTw1ZoDjt8ofBi7PjTSCb21e1xYwTjXpq9UCvsPezxF",
  "key45": "5K1hhXwmpVAW7CAuHZMQY87EyLeV4vCj8Sw6DFmLBy25mHS9K2LJdNSXcjn2MAHVZCL6KGcA8iYZAbsowdMPLUBj",
  "key46": "F6poK9CHtq3SnU8BpNe2tyUyT2dbiQvgU7r4F77PgkhitMkvjFjZTpzU7pGE2XWFsiv5H3KiRK9a1M2Pq6fRVWu"
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
