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
    "36kKg6QmefKhJGKPtaj33zzSNpf7xi6Lwm96JAyzwtGa9H4PLyNBcYdATXUYToFtEkWSTnU2Ut3bg4nmHCrbAHgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LEoSkmDyD3Juckjnap19BdGCLr1Sw7RsCFGsKp5q4hpafdeMg7h5kjTFneW9ogy12yRPvA3TkF5Rx7BRdsyL6cr",
  "key1": "3AxdcgjfBrrzLQgdHTSWsY6Fa3gMWWUaJa4cyDigmdhdHmyzFc2SGpG9pLrFRD6dRpA5EJEjG3DwCtW8rLicVChP",
  "key2": "46GaRZDMCBzReHRJeEB3LAFGMJ2UbZbh8di7hqXQLrX29n55c91ZPAvCE6EkCrHqujebDUjbzwbctk3ZAiktXcSf",
  "key3": "2pazM5Sk4q4Qf5qUw5zFE6ZKhgu2sKJ6wbpTVRTUUSiRhvwqryeRCSVh1nTYRYQCp1gPDh7GVjP4XRNYbe3ZLF3U",
  "key4": "2H88kaAigWGGKHsyFnghv6k8CtuSk3sRpMjnh2V9jhhXKVbg28E4pzYZZ4NswtVkYQfS2z55sRAxYGZnW6UuWko1",
  "key5": "5mQq3C3Rbs6d8f3a4seBaF27qHyYQuyNLaXKPrEDCcxz9DLjUfyc5iqruQmT11Qt7xjjYEuwtCd422ZdgH2gC3rz",
  "key6": "3JFaJQ5HSun8mED1KvgYzW9eeSR66EdrpCVdxqrE87a3VLVFixcP7FRAKmhL7KCzcRgm83Vdz2xAdGQzAe77xCSW",
  "key7": "4LkiHM3roDE8xiekoRR44SmexiExFRJXnZLYQwLVrb5334jcvYSBd6knqcKoEUdCLvyKffSiVdcXVmsYBE6WmdBp",
  "key8": "4J8Mt9SNiRduXYXtCxbLr33Lx1AdqZoA5HHarrBeageJgfFFRvQSm7YHVayVsw439gPhesZR2NrL6is7hkT5gdzj",
  "key9": "7uzQp8NjJvWmosqXrygFdLbPmzggH8GQZdoTGiGs9cyzpuUW6GpQkNtLvLjPkjy15JNRr5YjN5yYEcjWyJuGksx",
  "key10": "2ZuH9eCN2jXupZ3sWfEP3WBX4heZqJVzEhJip17JBjHj3VPe9NoNKSCMVadfmgd9a1akeNqXMZMg84H3GPS9Srks",
  "key11": "3irpN1JZV6pk6sVo5tZu5MwM4F6L1AThdSRr4PkxKBYJH4KM1MAh7PHxWF2Ws9qhrq14i4Ut3QD9q8aWPmMpcJYD",
  "key12": "5FXxX2vCNTL8tSLdw4WBNocaAJRtCSheYEjmKcUgWpT5PR7kWyF6QSP1eHzstYo4xSm8njLBdHnrZhjA7RCwSw2v",
  "key13": "2bpUkwXTaPV7aKyznmBgYmAuH2Q1rQCzZKki7Rz38LYQCpjCVu5spuBXEFT5BPLuKcTZs5zmZ8p6Lk2vib1wHNrF",
  "key14": "3h1zoYdK1rGWncnGKQmmqLnxjU5jP8WoNwPWyJZ45ogRDQyCEqC4n5EcZqRZxPVAjzaNLKDqLdEU3HG18PGQq9QZ",
  "key15": "2XsM8zBAFnGnY12wK5Mr7cXvsuiYiVkdmeHuU4io2ZEP94MDS6yENmt4bk6cQJHHWDLKo6vJcZLZziRQvFziq5jS",
  "key16": "pgMTJToVx821dKaZBtFT5T8pWnLeVp4U18J6j6ACAX8WP4isrgjZdrNAcjqvMzp5pmBRmnTB95R5zJPKxap679P",
  "key17": "3dFhb9iTymSzpX3yEuiMs3ZAsUQ2zuwfTHNcnLH7kqkWTyzgsdBXeL7tF9UuYWfr4TYFmBXY8Yo49tYt9bVuzMU6",
  "key18": "5mQ2trN4jPvpEhrLD8BAMkUrzA2M2jHypUr1gci6uxe5g5k7LZHzPeuLAPmi7jJuCaxVGUwrPqmcNsGLrLTgq9BZ",
  "key19": "hVbmS3PLVcRS6TgzBVPZBJRTh51QBf2rPmmasVda9bs7uY7BDXChgmfAqTNvbcK4gCApbt4kqnrf4nWdm7on2gG",
  "key20": "2xqgf29gZJBh6nDh5BWMYxFq6TdJU6dWY1bottWndFknUU43QrktLs2JyW8dHzrMW9qGMeuHf9vEgt4A4SKphbJn",
  "key21": "SFxTiX85HyGhCKWsfbmGciV7mANUr5fDTp392DaLP4JkCH8NDid3WFHxqF3BNXfWw4wZLAJdBhfEPTmfHyepNeM",
  "key22": "4uz9xH77tMjhnTDDaEUhnxjaY45XjDxYM1cYxGuYZQsmGYGSaB5M5n2kzRMW9MPary5ZGiFR5nZ2YCf3sjFuk3HX",
  "key23": "2fLiAofMGiDgrKJ9d4RKFQAEHPSxJ4DFPz1ADxwvHfX9B9jDJz3eY1Cv1LR4u7HxdsSddaSU5uLYgXKy15apnoXX",
  "key24": "4utocaBfCeUyDpCVYxpT25GMUDwKvbuNp5vGZC4yboWEjpcE1hEFvDog92ZnpS4p9DMazujZipkaDqPY2vYNzmbf",
  "key25": "4y77oi9Lf2xMNiSk2g7bV9k1tXve2UcZUhKuwYBXN5eLFAiUUfFVtba8Jrt5NDs9oH4JKrmsynFb1kWMHaKRCDyk",
  "key26": "2QA5mqBHQgSvzuX2Mqdz2KBeEpUNBZVwKsPdzJRGaCWXgGwLFoHtMcrK79kkdY5Y4Gs7H3dN1JMzG45Hnu75Tr7T",
  "key27": "2fSQCRpLPwPiePdsaFqn9c7tLkmWghX7t7hp489pyh2e7mNwbJs6rQENkXHQMVUZDuFq43uY1aBEwrC2ts7sYDfb",
  "key28": "pfy3z4EwiQF9ea3hA2aAfvMTvTobbfijqwbRwHRsW5fp4SCnEfRWLHeTgmbcAbiEU3Bu73fkxF2EEzf1cC9PyDG",
  "key29": "33NnJmJ4bP3mmSob7fTEPDjwiowLzht2TPUhpAD3Tc4D1LTGSLqmrzW69EUu6wXWrN34p3jZXp4yByaVMHD5TH9X",
  "key30": "4Km4LArSbp1mDYGgNb8Zcv4XX2SLc575qbof1orikQ5RsfTy3H5oFUEiMbTjEG5t8Rroc5Gk2MSwBcuT5u2s7rWU",
  "key31": "2stWEUTWNDA6w8hQnM3osdKMTzfSEkmr45tkcpBHQDmb4iPQevN9ub7RUqJTesW4EvXRHCSzTZrCVeJd2ZFgEdV2",
  "key32": "3WrZMfH8VvKJWCvwfRjGo2Hqo2U1zu7yiNDc6bedzSWNLFedAe7Vg64CpD4dcuhioZ9uxMrYXMqN8xXL7nK4zsDz",
  "key33": "5G4ugtPGBWRTmAovC7PpDMJLcHBCzG8gveMopra6pSQrRhFwbrPVu5sNgpDAfwn6ykBGurGXsUXQiNSJ76iDvq8d",
  "key34": "35W75pvbFi5dtcAscS2aS8Bq2BAuTCADi821wBprWgF7qvSW5tJTzUNbiNm9ozPKSMXkBgvAmsvH5cL1SYYRtYWX",
  "key35": "9dFYRNVJiE5qgjENAUbrnAyarL8PDbTyzEdyMB76U3t59UnChim4HFDWKduwzeUgDY2vAbaxi8QfJULEyUBn8Q4",
  "key36": "2TsehX6xTan1vgNi2YYQL5pWydoQz7tBZmbb4EDufmH5zoLFb9LJjfJn8fHLYwBHLcEiSQXkct84sYZc6d321uM8"
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
