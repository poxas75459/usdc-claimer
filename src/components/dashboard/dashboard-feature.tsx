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
    "3AcsGTByoTkgRkD6TKkKkqGbdQZLDyAE4BkYwg8AYxdc31W9Qus4JT7YSUZhM2ixGwsSauYWb7GixBb6P91r2U1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pccNNZpowAAY5NJKshpVDQoDiskdpGugwvbdhcafjAwX8eE4VFfxnFRyJvDHbSLgtpbo1Ge9hyBSn5okD9FpBC3",
  "key1": "5wDkXbCuFbxvg8api4xAy1yFN8cFUhwLUGspzxiCV3pLDyRPNzHvXs4gxk22fFXf8swNpiMmP3gqsvyNjABEMwFq",
  "key2": "2tnZZqw1S2BBQW766gHtDogC63Wu77ZA61Pi8PQ8qg3sPAZTyCwpcCy461LV3AUFG6qinsaqZinPCnxM6cQG63wt",
  "key3": "5MofsuApYPvbzw8QmUKSnUVu9U4aqRnDjPBNSWv6jj3P3bEH3dTArRq92pJHAyFNkQnPh2h82gad5tJSJtsCEVFs",
  "key4": "22kryjWzGZqbUx3SNQvcV5DH8uw285FKHeYwTno3omyFjtdLg1iuyScbYbbfEDb2XewHvjKVv7smkFPCTsjcDnNm",
  "key5": "ixToSyM6yMriCUbfsR6xjGEgS6LGyCjBy8uhnyPcNC9f2vrcQTvExMYa3xPJC6o4mcgeKbGac3tPMtT83X5saxD",
  "key6": "3cKpmLLaSB2dCZtVffmZ23sKKTxYM3zRY9QoeUR7HPPmgub2FqVFudvNAZnkqsH6Ec5ss2aZB7QLDwkVdm4252mb",
  "key7": "3i1XWeA3g52QZGS3VvbBApiXbqSEW3sEAtFRdPB3W2iAgpT4dta43k5y6efL5zsudHdb88Zwn1TcMxzcWuGv6nJN",
  "key8": "2G8UM8tsZaVuZ5mGNfHMk9SSCJv5Prd3QkRNGvgnVJGP9YLLUkAHsKmQ7nbV42cgk63vPYhk3nVYUqHUAynqnf8z",
  "key9": "3Cmq1xK2H7y1QLoXrRUTjuMavZFYNMRC6Q2eb81XjSo4rrFXf1NPwEKdX4c9FDwEMPaFwAPBwGGFgWDUnyrcGNZw",
  "key10": "4wNW24CHBiAM3fDaAmyAMkqucKvzSUcRtdcs836Xn2mZMgxfVFtoCinVSjmuEV8mUyaEUbdXaankEiqyASCwSeCs",
  "key11": "bJFsxJkye2RD666Sx3GMQoDh3TedQk7uLhT8partVV5b4WgoykhetsSsyRX2EuD3yoqpRzUXFmQGfbmgZE4eBZ1",
  "key12": "4qocL5rRvvKrHAhZW4LfhvJrEg3vmYvxceHyQ1stSD6Rru8EFNE3LycvTAiTBihZUB9GBgdzaaV8WLp47ztiNPhM",
  "key13": "4XzpCmBihESiZUiBzvy7f5vRxoYdxxcz1mV1gaDn6tdvuz76S6QScHAm8ndiQVWY1KooJptpickeBGnE7vFbGXBr",
  "key14": "FVQE7fMyHpEuPzvcVTK5SnaS8oyU6sXMJNMU32NRTVmF7QdEs9vHfPJD7wdR32nhH1cRMaUSQGdTqiBbrdfVJzd",
  "key15": "5342tsMuvNnqxJAFYT5ZF4F2QKj6d5RPjtFUhe5SkoVoLPKWymENBLuMpNgfZ4yhiRWCPA4YRgL4UaTSwegJYnR3",
  "key16": "3NVhWBLGA2AMVsx82D4y8JFsCyGRgv7cU1eiSVfmyumiaU5K5gW19rmbG4w9M2keYm6RhbJ9Z2MxnXVFj4zWzaER",
  "key17": "3gqQDJxAZK1d5UnewNjdLe8JKTbai7Z8eRAah1MSv5oz1g2eQKbcmYjR8W8SiM6h8ZhP3fywVoCSw4mgEaC54Wz3",
  "key18": "5a1enNjDEzvi8B9K86on4sYQKPrhMbi4kwj2RFUWZBqtuE1X8fDKgyY634Lsp3dMaAMNazhqFa6MMQnhALn7HPyh",
  "key19": "39YAe4t2sRCtZcZPQxbjYA96NBDNBoQjscx3ZkueyAz9VCUvktt1EpBMUCZsMuZ7AndFGn542vJGYs3LCxiuBYXh",
  "key20": "HsBLnEDAAsSMtyn3ntRbhvqzT1JbNhBcSwgepeytwUsMwsUx7EY9a8jUA7Myc2sMgyF1bjbCYTENhp5vCRvGLkC",
  "key21": "3PTmLEgiTd2AWjYj115zE5rKQ52TqFPp69JdSR8QX6G3tGPEJP19L875cw2CPMu2z3r3XMqhazfHBc4a8H5E83kE",
  "key22": "2JL76HrTLJJzDB2bXuTtx93qiXGExtXED6jWmNjGPfnfdmCzJo7bnTudaXKmYdV3mT6m7v77aWd4ZUfyRxd339rz",
  "key23": "5AMvetSGp9VvHE7QX48JBdzA7oNEkBvUMeyBSaEGNYTK8QoqSojCJecDF6BQnG2oH48X84bUgKEtXPt5Ljzt6LWS",
  "key24": "4jvPr65Xw534VR2EMKcetcP5PFhn6erxGhKb1AmGAPNdtbMg9T3YmFVadsb81TqBMzquScAo8EcvHaT7crVA3psg",
  "key25": "2k4RMJxna37BJfx98T6omAQyv8rJz8cwWVVsYWjzpKjbX6JfEfM6FkGT1fg9CUhisrNT922dQv6qJHPXu9cmiUbL",
  "key26": "2FMfLNyoGxwsraiyTvRs9SmRv5uxSaz5iLKQaDXw62EXTkBNysbe3xMA3Rr49ccNwxodrLLDnE7XRQ2cma2KSwrv",
  "key27": "CVQWY5o9J7rA6Q8bycrhnCdXCFoNdY79t2z8zn4H9ZdmsyZbmZpq8eebfxt1tgbgURRe3PCTZ5rvtPDv1AYWU7X",
  "key28": "24ffGR7SnDepC3vwrPnpDQEGHrhXtD5qtWHV3udyQB2LbC6NAvtfBxHYja27WcFVRDGuHjCP8AActxcnaszhhTtF",
  "key29": "9ot2tjMaLGFvTbpqey4yuHEYfYkH7LiafboAujZSwV6Rc4zEvHx8XJ69SDrWn4xPxLaLt7ULPGVfUjWuwsWH29B",
  "key30": "397zFfQBXWXtauDJq6omHGsuqYBtTfHRUxhiDjFdVDcJMtWWhSK7Tx8D1UG3pXMtJSBBt4UARwLRWX2MyKnMpiaq",
  "key31": "317ZYY44t8fdiZdsJnoMEAeXkvi8mRraX4d9jyZ8HQZhote8hSQvPyXBrm63qYkDBHE8eqqMrpA45wzJDGyn1SHX",
  "key32": "5uszztNsn2sMXPEa4caFVs3sYQPSeQRjewxcXvr5nKpgxJcXUFJW9Fi8dJXimN3byktZecqd5w515vPRwYYeWrjY",
  "key33": "5oWtdKyRJrdHoQhQk3xoUb53DDboZxJRJShCdVc3GcAd2R3Dihe3er1Wf3cdL6pXWLMsCP1XkXshiYMZAQJiJuC2",
  "key34": "4U6ZS2EmYosDUE5x3JNxTm8NDQso5fcNHmoPn76Tx4xo3pBgCumNM6yXjWwphXqQhxtKAwpSuaZHksS3PrgBjFE2",
  "key35": "36KJCkcuBEu7UKxkZob7nPuBP7HjytkosVsghXSEu2Jk53v3K2Et66tZK2f9mLmsYuE4DrWEfRxrgVKMwgmp8hre",
  "key36": "2L6PiJmKXhT4pybUCf4jjqJQXgLiGon4zaZ7LGrSLPMA616fMcFJzGzY3L22xNA4fCEQtHkfn4y2eVcfDy6FYXah",
  "key37": "2bX8RbEFnmqjVwkvsYAy9wo5gC9W97xJG7QEPfyqbRRmu8gxSCcVxJ8u9mCcPJfgrC4SG2g66PWnpgzfEQp26kD",
  "key38": "3AjPkVTdFMCNr6nbwzGpLocAFSCsVjzmqzxvVMHa5DqqDjMTpUzDKGHkUEPo1ybpVTCk5HkbMXmDHrxpfR5LFBfL",
  "key39": "39QttcsWkCfpTsfaRUtdL3UW6w1AkFbi6qYubpS3veQSWXvNXZgyv7JamziXXoTQLaLyXXmUaQCgGHiKPeG2tzno",
  "key40": "3ytQXPQKw5nf6bjL9jaKdW4zUkrTf9q5Agv6GGGJbfDgaSFVgnkKvgRsu6VSUUupaZz6bTvfLTamG7UxjdSuPhnA",
  "key41": "4cc9KpAaNeVoUip7LLZbgrmiUV3feX9cFGD8AWpEaHb9H6gFwnNX1VaUrxWvKpSpbjMw9rkSFVPkepP7TyF9wruu",
  "key42": "2tXZScWrJdiANDcftk1AnmbpgE1FaGJ7ZG2xYHqCZ4uk8iUxbcWEhVopUxQq79uvfbXqy6pGwZXv9jADvRZoLzhS",
  "key43": "3CP4kVWYkuHkRM6UDYyrhmFS6KeGU6ngv2WY5ntkLfK8TZ3Jv8zDHS4jDv2yrTaB2RZGgSCR53dKtwQ1MQKAgU9j",
  "key44": "HQL42Ne7eh9WMxjCaPNvwDb3DkEv71zcQzXg6E367Pv7UHiLeUi4LJfCe1bTBBurhfDaPCrPKWQ4QRPpPBrVnai",
  "key45": "2Eed87Y3EZT6ZQPgpc3JTYf2LcThJr6XGkmyCcKWQAA6hUmdr5HTsb8B7qGdtPg4iZC8Z6wZ9qrTnkeBonj2QgM5",
  "key46": "4QQXQX3bp7hcgu5bRNxdQyQ7Axt5kK5G5xzWZYscsWovPQRi5GD6BDLGEmGeTmPn1Wr5CANbykFSD172gxqFcQhX"
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
