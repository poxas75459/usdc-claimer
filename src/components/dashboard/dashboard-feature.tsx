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
    "2oDtsc1ZcGziisF17coqU1MQgyF7aqpMCjaF3TDAj9MnmPjfGwLxD4zWb18QpoGvtgbvJX5eAryuhgabjcrtSsbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62H7QkJGb4gfz1j2UGotEnfN3fhZNyAmvygo3crjajptFQY5JxmcRkBQo4aamt8uaA5pWG9NBRYuc4XaMBgds4GJ",
  "key1": "4xzKFjfUNZs7pUdFzFWhyVKrvnVsNAdzGY8EVUmSxw8Bz2eik94BELmbFLNKRLtm2RiSSWZaavht4VkuoaLWGDrr",
  "key2": "4r8dUNbyWfZA2YHVxMV7yneHgVQmwSkfPW9yMaFRrXBMDe1NTKdFCPPQZY2WGtsSgUwMdsNeke27vt4dR6MkRS6E",
  "key3": "4dsSJnfU2266wJFQm1NCKiigVmqQKMb4y85b4sxpfEUv5RqWuZxfJK6wnL2WNR1EiuV1brDitk2ZNBEU8mDMorj1",
  "key4": "5RFBCdPce1CZwb5Xsie18miqqKaMU1BHhBQcxP4uhfkSrDZxrU5oeLTeKJ6sW92msxa4xHg4Qa4rCuMKUtwvd3Eb",
  "key5": "fEhhTyXx1xVZemFMBDW28EKaZeugti9Jhau46sR24AuzYEuKFgWCLnh1EpE9rB6wSvN86K9hujeoeoTVur1fSpM",
  "key6": "63sDFnTAre4xzShbM5rtGYETUEDEJSftu4DQBokZ6HWzDz2EQds78Sq1nUBxpbBU93unstg44TgsxDtjZvmWdM6B",
  "key7": "3FSsus11DPb5CAn5a4vfxtFq9BoRvmx4kuCMf8A9Vcaoc8WRyWcDRzZ1aZDCbZSkxDgqA4JnsUh28wv9EEgJJMo9",
  "key8": "3XfcLKHrpPdFBrSfX7bKvXaQQTu9qTC5XhMRvsa1tn25mykKq6SmfEQQcMh81GQ2wQ4WguMh1CpdigzkRPqjJMUM",
  "key9": "5XHDbceGzxEbHyJKPexrWSVY7L62k1ioAUvZpvWoPDLm8mf3c6Ea7ygk2z756AxR5VQNuDLaLmPJzNXBVEUybVhm",
  "key10": "4dpy7EeE79ux5TYWa6eecX6KVwVvHyFPQtmvp4zjQDVZ2cYB7zL5Ki4hLSicrxVSKCJ2M83cCN9UmMgL5Y7USzdZ",
  "key11": "5hkNZ9MUuWiBTeNo9fUUpvDJeSoVrzyyeSwLT6g4gZ2GPy6bPDKQAewMXGAvqGW7W5mD2JRy55pCG8Svj31kUrbn",
  "key12": "2XDLmLN3TgoPywgLhupkWbffthLwF2JTrVdRjZsxcK5sVvVoSTt6pqedigLZdbyDiTzop5gcz1BZuJJcNmGNT3jU",
  "key13": "61A45PhddnnYec7h3t2QBqX3BNvrT52w2EFqSW9EhgPdw7iSoXJd6KZuJmG6h7RNGZFNeSe8FsD4NZ8cqWWKfwXU",
  "key14": "4ZbKDXSCDb8BSF7SMkKWu8noyjdWeLjuoMHRyNUwkGk3LSZR76h4hjpDPsDwcsyhxpCKDastS2rmF3cgz9eAmsmg",
  "key15": "4De6orExahHLzZZpus86bz72iH3fyV14dGdvyydchWZaQKxqPzJnLJYhtfqdy6Gi8QJYb7vvdiKAfL5kctPZq5ur",
  "key16": "5ejQkHcQ1RHZ4tQae5UFXi5XXVzg2iWuv8MaXnfHwTLYMgwWsfDJMmKx897uA3uGEK5NEq9vRxsQ5fospdPAct2e",
  "key17": "3zsGgTB6TZQwbZbeBGHi6PstYMdYf5jVwMtSyfAhbCU5no4UsRb7yJkTAGryvqjA1ccs2q1gZkWLEP8sdmz7P3hr",
  "key18": "vZiyoR3hZX7uaoqx7KKRHTwmc163m4gnetiCwJiwEjwjM9scBvi8B72Vm93LZTVWWnFXkV3hveByrtGfD3E9GNV",
  "key19": "4aZ49cN18z6WAeALa3RGnUv2Mfu8kCzwZnRUuMrNJgGCu1zyp1dvHpWHx5RqhiQ1crpjAacygQcRsKgEqBTkoSsM",
  "key20": "5Aii9NukFDHQC6quAYgiuHuYGAoxr6mEP2yvUV2r4K97hMSvj7if7ppHjrYfbup93KpJhjiD7cPDG4Fmnmdtt7b2",
  "key21": "63fwH6z1DvMTXrhgnY4PgQJcYmifCFyLZdaBeiUhTEtKbXAbkqeBMX7kcZ8P339xgctXUcEiH2wQvSuGc5RHq3ym",
  "key22": "5qdcHqF3ufX7s26V13ReD4Yw3f1T7DWGJdVpWrUzc9bQhcf7w32JNzQZRTzgAditwszrgo2RhyVKcCD2L88UDnaJ",
  "key23": "48EJbYdLnvzWNSosMfMifxg54K2CzBhXHcFfQV7CK95NxZhAj44NqzUUFUa9zpZmKhMqGxDsMoBjXK3JPDa8Vod5",
  "key24": "2ZvAdEp5UrocCsvLpUhzttBWaSceLXaAtvWPvU9GCKoyW7SLzY817RcaUnGZo9RiNoeMHSGhVTZTDkwJkE1qtinm",
  "key25": "34qNejR2NCC5d9VsEHystVH2AV1VpGcY7UakxJsfRNTxzxXqnDri3PYVbKteVhL8aZkodZPkFJJYaNZxquiShyXt",
  "key26": "5BJ5WkvoGwWg8ffbak2QpnnnjrkPf7D2T2ZU2P7M9JGMiuTTfZD7A1mxubsW37U8svQYeBm2cA4FN7nPb8CS8JfT",
  "key27": "3nfMi33d89Ag1tM4vXiSbe3KHqwVeVbCdugkQe1ghzaj2Fau6R7NcZct57kVRVLWGawixUjoTPLNVY2uB23j6u2j",
  "key28": "4wgKig1NVNpQ42xerZvbJE37MRByEHcS7y6s1tRU8veLxj9yZW6qa6Lh7cghe7DYcGwsfHzDPRYz6Epzdnv5rWSM",
  "key29": "4cQ2MXtgdJ5GeB84TCVLXSR5eJi9osYTwBuFhA65z6jexkRmaSvtBvxpAm6zfDrcxmuzA3wxFdCoQyGAbVviVTA1",
  "key30": "5mLSr8Com3AAk82z8ck6WWZNpTtRbtaSfxzq2FQkYaWQ2AigzjTndEE2eHiKbqdFEhSY1neRdfjdBr762CwREpzv",
  "key31": "4WuXoEV6npMUk3pSrGGqkSa1EtWwSZbegtNGXQr1FAMPpR3dqvfTtQSwGKzX1wBsqAdAUaScMNuNZwhCwBAwYtEy",
  "key32": "GW3yAhsRmD8U7MmYbTotoCsvVbAXbh8BJvLEBoVZs9XzgTxpBJhzKTjWT2prWYEN6Bza2wfoShptRck1dfF3xSv",
  "key33": "4YLJUqV8hXpGsoTyxsDjW8RAcB69be4w7H6JYfR4UKPLsuv8kK65opY77ZdquZWppLZbE6o8ZJbpExfnuLQTABD9",
  "key34": "5Yqy8HhHyfyAABLRu7T23xG1d6qXJc3TUJaan998CmExbJvKgwgtxYR3gcbSRHVESuJtcAkdPponfY2cYSoAdBUe",
  "key35": "481x9hTesVKayAGV3DJWa4Ui6kTHiqbWWBUGvbXc9qRo1FHW22PHYJCJ32cfawvqMuKhLetAHb98k14eaXHPYD7K",
  "key36": "5Db1GqPkuP6Ptvd1prBVWcvSaMazVE8CvQ3AsnoNomETuxekR2MzTGrJENUZdroQFiqerkjy12Vp1eZ3yCSBf2LL",
  "key37": "5xNitsbwTh48L9ia4LnR54omZtHV9x7pXiBbn5LZgxr91sy1MhXby63Do5JEiY8zD6crsQnY5ufQL9RQSLBLRyaH",
  "key38": "GW6LB7w4cYwGf2sWaMGoMM3SRdqMPKYDUH8S4pxcq9abihLFTctf4jxyM538egb76zU7uBKyRUjLLCc4UAqPhXa",
  "key39": "5LvcdCFEQJ4f2g6msAQsCURTabL9tRbmzKXz9VmqjHwkexSc2aiAv7WE9KzvQcMm2CmeUkfSNu5m9MKGc3QBURvM",
  "key40": "ZdcCvZ7CrpceAo5QpmsaaNB2aAxNttK82FKHmU1dWiqj31i4719jVjLvfrTvfWiqirpmKkR9nFPsSTzHi3ac5bu",
  "key41": "54JeoBXsq5MGvCh5uBz5mmW7QcxETXsamCwWH7nbMNXHC5or7q1pmXcLo3gUWFZEnEA1cTSEwXfDjHaPAd6a8hrc",
  "key42": "49EAPbnFpLRPzmHERngMqtJTpZhBMcwp1sxGhupyKZQJN6R1DxPn7RZRDGYXTfT6N6GYCESK3aGRXp6py2MXK1ri",
  "key43": "j6U6cygwmEWHty44AKSrQCsboHQZxZiVSzAiqRquMdydv3gw72zM55rEiUo3e8Q7xGfHZraD366N87hEKwKDU2u",
  "key44": "4vAGcea9JQc1nBsEznHrDWjxwBh7GSeznejk9otJ6vcWEZW3c3b4JQWd3zsxJAFXTtRrv5dETVDM12g6sAYUUawa",
  "key45": "3BLnh58RCqDEuM4gENT3peVLqGpAx9pjNkr1zCZp5WvFByTpBuqXNB57B1waBThyd7WrRbYRQamMQAH18HR8FBb4",
  "key46": "3f6V3Ww7MqHiyu7LF3DMqDK748HJyR5atWm6VahVSUSpzjnjJ3F9LL5gf3rNgLgQrrrogCKyibLybZ6hRU6NNUuD",
  "key47": "Rre8fD8adXZjvtcMsygr6FJ8AcosUHZgdzPaoeFoTepTQNTYKqTUa5ZMfoCPTZQsmuS5hffof4mcNb4huE4PrZ1",
  "key48": "4c3TJhZjdXfXoNbk9pJnU3Ttv2fG9XvCtSmpBPS2kUmEVYRenAsouT48KnZqJ3URGEmvkkRhKaNftruPq9EGzwdV",
  "key49": "3GfuK7qoVomvdSNYCS7UYAdK6Txs37KoNzzCXocSmiPiBahCMuL7nWfnjajTWtt7snGGGgUZw7inZtLM7bzBsAMD"
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
