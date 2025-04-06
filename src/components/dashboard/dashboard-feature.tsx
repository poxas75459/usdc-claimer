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
    "NhfGYN7u3vppcvqT5cUBCPap3GMhU26yQmNcsUMADyjxhiMMNjcx2AyhjinNfZSb1TKBRm9V7im4TnMsxWdGDDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tYgPEBNGCLHAZnB5X89M9gMRM43yNbuzhAdbbJUjzezN4Sys1QAFz68a4dVsdfpRSCrHMBKNg4sFAyHxMu4NRh",
  "key1": "YJ2aqZ7KASGc5cXu67DTT6qEGJsvU8XJTMznvY6hfDazzuPrR5rtaM1mfVkYXr8UjuYcC2K7euHcoup7e4tCR2T",
  "key2": "wyCQN2yQYVgXRPun2gp6dHu5bAFSywMZYdnDey34gnsfUUntKQxSbxj1jpDSLC8AYEG5WsXX3L1GpjJb4xM6cp2",
  "key3": "4BXyoUFz444uQraurRRF9reLvVgz8WeAzgNx8Jvi8fHBVqGZ3mXBrL4vS6RSL4C48NBit7jLgfXee1Emc85P6Wc4",
  "key4": "4uD6TVGiJBhaKqUTwhGdgubmNamGy8oV1CpVkvXn9Dju76ZdZGM4BhrbFf5n3HDycNajdLsFadXQ1XaZ8q8fAA7",
  "key5": "4nz6etb9Ay4SCSpnGS5vQaE3tkjWvtf6KrqUhS1qRAiM3Tvny8JgfA7yRA9cgebRm9hBpx4P2R6DodMiJNBMxMxy",
  "key6": "5Fk7HhUssS5jWgn8nSLSg2m8jM1xjKrt9VQEszp11yP88GzeJCcLvmQXLDPMj3VaTwbeLAewXDL8HmE5YRwk9Hpr",
  "key7": "aZ8yat4FMXwrftgCkZFGbDvbZ7qxBRLDxyoiyLbsTmAwxJujSqhzau8DxDmSgWR1sjGLoV8n7ZZCY2agSjua3dY",
  "key8": "4x5GmJdqr7oqtw26QrBMkJaZnhpxYxtt1nHSZbSmbQDRQDWmUVcnC5Qp1BTDxLnYQ8JEusPSYdLRWyMEv558r3Nt",
  "key9": "4sVQMFhHKzGHEJKK7Kazxps9qfNBxzzM6qW2PieKTfdeXZTYYPoAEgQBU5oGSi39VrmW13Bz9kBbT9UwLsNPPXNv",
  "key10": "2GdFwTneexJKwRCeQjD2oFg4zX5KBPh8GjWstwkhiHwboofUeH7ZY4nxYJtgnokcskmXQpy7FibzDtVbe8yX6kqV",
  "key11": "63Xh7dwcLVJ9xRrx1WYbnKCmMNjb1frdyS713k9EPyEZvv8tDaL7H3xFVsrXUwEaciusvmijjqCBsxK6goYKSv4t",
  "key12": "3ZYw5FPvqCGHnk4J54iyLrcnLPf3nKkVaPt7UmzGZogRk4PkBu6EbDYZ4YiFrkv3835KYYcF2ad61T5ubbDZub2A",
  "key13": "4Axcas5AWchWMxiLRdwfWHZX6Vt56bb8YwACwCuiqrN82sbDepV8bgTviu2pLW7WYYvTCCPP2kHoTyxaLdszAG5U",
  "key14": "hvW48XzbW75NLCYMnEAzsoomSfd8taEjqmPqV7zWYEnKCCbxzbxhoSJiREuirqZgd1Honu8MqTpedFHJBWtuFa3",
  "key15": "5WHegECiVL96ThEK8cBPFou4FFzkvmiQcsvCvEz6HcxGZcuc82E5z1oQWMsUAWyhnfDF8vjxx8NqvL5JLGbn4p1e",
  "key16": "2ci4pBJn6Hx8ceoXrmWzeaG3P9uxZN9HRttM6njybGroJRpyDvaoKr1QMKPtxUWPvzKXhAHLYyhwPGBWrcDsycfE",
  "key17": "2fGTTUborWnsYYAA6B1rT1mba7KdAMRDVSJs645LmR2N2M24VBi2cgqqMJKQQUURmb2ffMFa4NCDVV8Dv8ZFLb6",
  "key18": "3Zx1F92sHDDwfYnE7TYm2vCQ85hzz5igtpmPdhFQzaUrPewegBHmMXtNG7WtHphYCsHJuFLXGGeNBuWZ2gRLVtQV",
  "key19": "2y4FcEgrH6gcF8PmSb5CFu15TcDogTyWn5fzrTBCpWMiSWmhx95YHyxC3PfPGM5RKhhYJrXi7AvZMiY3eEii8Xvr",
  "key20": "3nCGHSYrZvz8RkNzvGizw6Y2MFEPttqePSyd8mka584xHVyrDpqKBZWkZENWaLAwARNPnWd2iKdwFb2PGkKhfgro",
  "key21": "5zhpYc3AP267gSPzzp437fDthkunfWJtxdHh99qJ9RBD71c1mEFNqX4jgoMAa2K8wSY2SE8z5oJwzsfKSD6Boi7C",
  "key22": "3Xj7F1MAaE1Ux2FCByuK5VeprKf1hFJ5grSk25R19LPgAVB8jpq6qamTLoPaKtTDpXSDmb13KcnWQBLvc4j7mPCQ",
  "key23": "2ZKaNjG9TQ1Q57JyZdk1TDvn9u9VJc2PFMfLpnvSDyS2FEaTmti86aNqxDtWrCEXRZEY8aexdoMpztKU9na6boYQ",
  "key24": "5MUyTLHYkCR46ZA8Tz5BMZw46jMo5RjsqUavEk4BxCysHxubN1yGWGVd8UCQJDncuNSi8MpyNqWuCkwn3eqfNMum",
  "key25": "qYCKvJvpgyhG99X2gx9ENZuE1roPxjM6gAc5DWa5TGTVV823YiLs2iChtg11q2rveWfMnJbaZE66cxLyBjQn9zF",
  "key26": "3Zwy7GVkWceVn2BSH9HFmc2g4Gowt6oea3eQffGcUdYmv7zEhW5MKTLvTykTWU85tYkE3KGBk8Trhhkxk45NVp23",
  "key27": "3WwPnDVnViHRR8Gc4hBxh7DD8LSTATvNkcEFURNyoCenQubEgii3fdfNT3pgDkxj72q2nowEksZgDvZDAzPiYp1a",
  "key28": "5doXr8myFoTj8Eq4CFda5Z9tT4TYPvcHWvG6Vp6M2WQ59mY1P5iNfGUSpz3NqbAATV4KRbXRtaG7EyeKFEo6BK7K",
  "key29": "5vsCYBwHPpnFmznsnpPSrPKFtQPn5Bxo1AYuST687DSqyQJJ82YGQx9bN1uvzw6pN4DXj9fgV7ACtYYhgAV41nbj",
  "key30": "Dptn6BFmbdcb8J4zyLNhCh1i6zcwCSHEwzoiYH6Jk8FUM9ZG1qfmYd1otk6i3AnzzkUSLaB1GPasmJeeCUyRFp8",
  "key31": "5aXH3qCyyhb9zhRnCuRYk2gr3bBmhsydXwPQnhvcwj8zh4HL1RvEk1dnpToELjuh9AcY8DWuwkomN17Uc1UjJfJA",
  "key32": "2XVChRL6hJTCjsG3TR3PLNneWmuwhiyAxfWG17d5jbe6dwLJJT8TTnPghGBH1jsahrstKWDwys8KY6Zk8VdEsp6M",
  "key33": "KgxDaWzeDEBmdMU4mQJCWnNaJ2CfaRGr7CBUHvfNG9mnNQVTgFLuDHdXQmM8bND6rvV33hMA4HxQcpwoaisuvC7",
  "key34": "EKFiGRTN1os15vyWf8nMyLow5Vmc7aMy5AU8ikupBy1UfEEvfyVdZuyevNyCNoFnEuJdqnpsbcTtcz8JiYhtTxW",
  "key35": "64vQ44peqEpb7GGQfsMbmQuzKoVBMqv8GoAoKfaVNBaiPsMyGgwVorSKLE5P9ajvP7D3v93ScY6b6rx7Qh54D92v",
  "key36": "2X3LV577b1bAXn6daC49nhGdCS16p3uWLAFRwVARFuu27PUyoPC8MVtUxRU3uvyovyu9mYEw3YCqn73rDTMvTnyg",
  "key37": "2hVCN24y8dYk26hKbKcc7Rg364JBwgrQtW9pJ32eovzCkCLSDVLDMw8fG82DSAXJTvbpPw8ke3qbLoZFXMkN4d3c",
  "key38": "1etqi6sKsKac6cN1pQqz1xDF11xTu5cL81k97T2zoGxxdLPonQNwoChfwdy9VTEJkTepYBhkiahsL53ixgaR7z9"
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
