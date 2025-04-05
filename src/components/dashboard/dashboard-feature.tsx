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
    "3GVoNPKeapJwcJZTPd1j1ZpthZ7bWqSsFfzQjJxrDmu66LbjpE7jFAqdmsFvK1CHKwWCkTCHESLbDW7Jv5xsWETJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "214S6rYHoFZpy5avUgAG12C64bjRypvNT7xJ1LsUeFkBnSoLVAZFAYd6DX61ehC1K1KmDgX4H9odj5E9KqiH19Hu",
  "key1": "67Qm4GQY4CkGGy7FXzGb94yjsEYYpH2ZKLv8oPZpzYPEBuMUoFzzY93HaaNpReaAcZtMmyLwsbsSkNBuPTCx4FZP",
  "key2": "5XGCQ7FstuEgohCTMKM893SJHSBWE8sfKrmpw4NAw7dR12ZgEN4gHF6Qr8Arg4uVw8g3U29M9XGizR4yy4ZkRXgh",
  "key3": "2Ho8VXCnvfi2JEgzWraWbnzRygfUdDaXsELXUb1DHPFeMPCz1MKgCXfXXyXwzZGQCJ5nfEqfV1UcpocK1fy2Mcxr",
  "key4": "3JJQ29SYKmGLXmcvkH5EXBtkDUPUN6nFphMK9Py7QLY28aZSXY7b7xhn9nV6LhRrq4xbZSejB9DbaKufm7hPxtsE",
  "key5": "5Up2uVjscsoyjQqXhB8uRPTKe6iajzb3aDt6Ruy55ifFB7KdyMWQzLrHXMgHxJYTpb18h9JU7cdrxjvrXrjGZCCQ",
  "key6": "3G2fSbYXNurnG7bV3tzHJqx9ddqQGhBYMmDsrBt9dcDtgJdC93JBFFtuQt9gsM669JkMmvURuiBkPUmgFxL3aoy2",
  "key7": "5XWNfDwXCrygCESHfkBpR42h967n7CZp7eEZ6JPYo68kfjeczQGfttZgnM5tES3GQMfnpwMmhSSTXdatJArn8acq",
  "key8": "SfPdDrMdX3iQvi9JLJuzDQ6bPfMpCMopr2PPLaUxcQx8oDqkFLnkpzet79R9HhEQF7cukUvw4FmG4CMYgr15Yaq",
  "key9": "c6eJyFj2J9UqQXf6Y1fofz8b9dGMXuNNfrZx6Dfg1xV7eS4zvjokw1Y8J4jvXssCGyqstqZx7g6bc7djyLrjYPT",
  "key10": "2P2oRfWg2fCteUrEEMKw7mdaJW4hijZbz7Mk36ptRiUcuXRL3hokzc9ia72wY6uB6rqdQskoMRVo6yuSGzah1Asr",
  "key11": "4rxNVVGeu1GqoWoyorxJj1DEpvpy4oP4QLkRaNQafgvbyxYTfFDP1sZK4LQDoTbw9qJR3EeiRRyZuSpVpEFJRgsz",
  "key12": "3fq28pfPwpXRxr3JbQnkUPt5RnhpXMJwDM3LyZCB9gjVi4dsuTmxCvEYTTUoh1g992pca56h5bTcsKDhr5CutazM",
  "key13": "xwZymEPYGngLUDLip1gx3aH4JgocrjeadDth5ib8HeJEKHanAPng2bwf88bmi5s3JPakmbZ7tAJM6GNqEZ1XVhv",
  "key14": "4Xjcd6jT7DugE9SEcu7vWVhX2xqSz5Ah5DwypznRgWvLp88nvuachXsR75XsaPrtEHg3FKaetLhAKLj3GXHoJzaD",
  "key15": "XAnD4T3vJYKaDfDW6Q5CNaZZUnMWDNxwqPun2wKmHLGhMZxEkNHDo1KYa9kP2ECVSqXcY9WePFioHdXKgE1pPJW",
  "key16": "4L9kU9bU2myEbQR4r1aXog4a5yD54kopttHwHR6AbHmco39s7jaCM1x1wdksJW1NAfx8NajpesN2pGLwKgQdPqLC",
  "key17": "5efzn8r8Wiu1tpnQexYqgAdVPCSCb1VT2wf168x8bF9bLQBje3V5bnsSZvGAp1ZkHRpP4XudZo9T9vJwHfTNA88g",
  "key18": "2aU3neAD25V1cuZmEAAmvw1TbvLTEKjjcJUZo4PPYxeto52FE6vkZyz9UnvyZgxGdEMv6R1nczHEkVg6rQeqU9Sq",
  "key19": "3iKA2oNrTe5QBgQrXVC8Lousakm7mjrWJKDFyBj6NHvmVBTa6Dnew9E2uAy68tJjEm35v9eTWnGoQemkpcU8QZGK",
  "key20": "YK23nogqGzyAH37fRR7cBL1T8W4NhkGNxfsPzd2Bg6ay5rfg7bYwaer7JZhbEYSTazz6JECx38ivpFTVfzJK5Uz",
  "key21": "5GajxCPArDGM4RRHEutWqwTEuDxdFCyLcfTuwpoqSp34V9iapMHepS73ijXPSzG7fawASE7A6rN2oK2LA4JcQ66e",
  "key22": "5DHKCX3Eh6JtAKJ6ZzzZX1dCH2Hp7XuVKgq2MLn3PPTLxN9ugJCkRZ39Q5fiS5ZeQZMSBqdcF6mymYTzByyqZySf",
  "key23": "3rhkfBgLPFUHPtjNG2J6GjQhB6RZKiJjSe2PQsWsPnPY6rHz75zj73ZpJfqFasm5m6D8vaVTore5UMUK4tyyi4zM",
  "key24": "DbButzUvdfMbjBRoRHh5mhgxVVtGabbevUjE7E3PdVMAex1eDMuYzTQdSuovkuTCPLU6LXaqh3jh2TUk9uzsLuk",
  "key25": "63Dbf17oZv8y634MnFhy2yKwPQrgEGrGthnoNgRuDR1unX3ghFMzWjUqDfHM6szJsseA8YH9qgfkhfMYw8LHfTkr",
  "key26": "2ySuVXsV7vhbUNUjuR9vG6UiHVJXBtrjus2KaoPhECXSvVTVBFMHqkvbbUuDhYrm6QuunWtRXdG1rJ8d9c6e72NY",
  "key27": "3fHpwpeVsFArEuD6sBBXPFL3HeTCoReExZNHFr6QZ4PcWJFvEu5DoYsDdEqa5FjYNYufGcRXtbihn8ioq4P29rBN",
  "key28": "66GLiDeTRHKkrj4vU8fGx6H3YTBMUk6YWANa5F7R6TP9gqUFEb2T9xPwFhBKWFjKLVGKipTDhPVvnkZhch8HBKPP",
  "key29": "3kFShq38yE7YzqmEVeF6Zoq57P9PUmouu5syYAQ4W5zniQuxaz4M2vSQRuiLPfwFwH4kgzwzMZzKWjb9WC63qzMX",
  "key30": "5Eqg4GiqfsjXfSeBiLEYgke5CLU5JfnpZ19QN7kXERPcFWbX3AQw7Zj5pnDB8y576Lbdrd1CLk99J3Nn7ZDwcXX4",
  "key31": "YQBdW1y9zUxEuXMqrUyMTJ4DaunQ9PdkKCuGLtyuDgg8pHQb5bvuWXDaG1ouhXdM4LpvhNVoHiysf5hoCNHLxZv",
  "key32": "oqYayoU1vsfjwb23qK2ZsdFHcfpCdmUVDyaHPwDPBtiMYab5dyx4dtfAd4tegb7gw5btTkXXrdSFeNSjhsJoc4T",
  "key33": "4ovJjP8sAjSKGkuZZaPyiAmkCRtq59SNkQkkhCnYg14AKAwrvx2Htsmcs6YsV3d3xtrUdvBmXKAxb5C38Qw8xa1q",
  "key34": "5U4sqtCimrpvhzzG71X3PLJzhYAUZxS5tdcsZikdrEMkWuQYrNZSqgELR55wZP973jkruSTkHVKb8LaDi3EoSNut",
  "key35": "3eHjJVFknWg4UYxGvLMPKMqKabp1zwRn8nXcwXLS1LTwTG6Jdb2A7MsYVeb9ycdfBLf7yAQPzxbScdAdEbdX5SWY",
  "key36": "2dUJTTarqPxHzXgzGpdcgczzjSn4HEsht45bH2WEN7a4xLiJJhWDYcH9eqVgm9futZcvbyciEJ3Zh86aP8epZTeU",
  "key37": "43J1S4DiAqCRLRJNqFxnze6iJguJtyPpJaG9uUdCMsPTidPY8qwS8rwQnZn4kpeEM37ack76XVug8Bv74KaoaziL",
  "key38": "C9Pjnhuz2sXLhk7npk8CfakdE54hLg4XEQaiT7WYEqRGw1KS4Vp2HEeuTD6gydf2ZS3qdbxiC19h48Cn7LjrYDN",
  "key39": "4t8FzrkoCqcgnkcdJimwPuHvdm8go2c9hKnswGf8rm5jHGpNsEDB2HUzaB4dAyqqAVoWogNKRAR5ATNqFSnhZmvu",
  "key40": "2iWC1hbk1FjdRMooo8cqCcdr4upwyG5mV5qi8SU6KxTD4pj4W7L7DpmUeAnNLr25zMhL1sirSFDS9tvyj3wtgday",
  "key41": "4fp7Ri5NEqGGhtpv8cQpqKtT1DnNxRiMP17QECA8HcQrL1snEBf586Uvwr1MNtW6zrJrwT8h9dGkxVGR2bQTxtvy",
  "key42": "23tCjZZKztyfCNHSEebZzgZ25v5NQdUpZm4JmtRCkdv6jx6jsKJsuKuyxHmv7aTr5MWNE69zrSNaFEfLsunrJ6mf",
  "key43": "3TgGKuv1L3SYTv9e3mTujNRdmFWemAwWaQHUwoviYupRnByZH2z2yX15HziksBUVMeAMZaLbbcffzqdAve4TMxKq",
  "key44": "2h8Yk2HPtoYLzzXV9sUfvFzgGgG443VE6JDgHnNK138HrwAurMaiZz72FUR3rZe2sCKtT1mSTk4yoXsB3cEvFyVK",
  "key45": "2C2j5vTNFnmpWmZQwZRGYAuMMPsTj1zBrCYt4MXAGEPikBaAUKVu3jAHjuU4MkbiEtVKjVCd58Hynfw6XvCkFcMt",
  "key46": "5VBKKe5sDtoPwBN87yQEY5SrAovTkdMr3mt2cofSrGjJc9x5nEGQkdzGg3K8NVCSTyd9F7pU1JiaNS3q2PA6WPtX",
  "key47": "5Cf6oTLCtjtnJxsVe5W5eCD9SMNo9tcjAtfzy4c3S9UcRgQtz3v2f1UyS1KdQygR9AvX3BSVwXzB9J6otsR2smDV",
  "key48": "48ioKrA63RUbXs1GhHNQxUMqsDUjvvdvWq1R2EsMrivArye7rd9qX9ScWLnqtkPu3kC4m7hnUbT5nGgwrYAySJ6N",
  "key49": "5s1aPLWH3vxuzCSs9dhiFQhnjC26G66w7MvY1CyNjsJqp9kCy9TUkDf25fMuA1Upjz9haMfXWzqu8PkP3d4M1e5G"
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
