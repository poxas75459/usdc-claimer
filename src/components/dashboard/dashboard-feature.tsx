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
    "2LvZ2vZqQrbtL7kQJA9L3sBBMWapDfW4iUjZz78Tr3PP2VfqZpSCkw3FeCNa2UL2EBViaST3gRb3rc2nHHgNzKMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEA98wdBSahNdibGiJFm92bg93R61VJ2E1fgNCg5yN6PC4DAjApLZU5NrJ5Mv7FLwfroHhw8axfVRm8ksK56aCf",
  "key1": "2BUwVDYGFWNaVsHwnUneAyThzTbw46FJE3sAjQVf8C6QRkFpyNmG9pYtfNNZAkiHguj784ZAEfasU26Wccak8A1T",
  "key2": "YPSEYQMSQCdLCjQsQ9Jgo1J6B3dpsfTGY77uo7yCYEdbRx3VCPYCfW6BHp6JdCiDU95HKSdYPpMdRcdkZQJRZjM",
  "key3": "4GsMuXwSGGTc514L3815eG13ZbQEoJ9BfEF59BRt3FTVdNaNY6nLyhPhEzR7krE9WvAXEyZy9aWpgkKHtNuQBxGG",
  "key4": "3ZMMbHUkfwGwR38zhyn5NkuB6fqvwaT9B1XggiPjCZGsBrmgmusqeWqDAVBRB6DG5ucWykSbLQVmZUnfVx3imr2N",
  "key5": "5YzjQtywqapnBNxtPb7K5JwzqDUfbGwSw1j93VvDcJqPNhVVQFP6cZHoAdQcqTnhCLUH6bAf8qiM78LB3TpHzPwD",
  "key6": "39dWB96jUy8o1U4M3z3dNWCM2P3x2D4pYLvoFdWeJtcttCRXXuLTEHrkEZ2QnqAeMp81JSGZv4DQySk6ajcG7HA9",
  "key7": "5FNLpnHqpUvudDjMigkEfddvViMJMGRd8DW5azXiGdgkHihM3rtTr6dtwk2iUTKvANyiQJ3AbujJh6PYyh1kgJXB",
  "key8": "2pPTFzuUDFaTvYL9FLS1kLKPAF6ryewK9MV6QvHQhYd6mcLQ22GJfdxmgW9xhekZPr1LQgFN3jg6uAxVFVHfNzbq",
  "key9": "2gPmuQZGZAybMc76uetCYu4nAjv7bVpRoKpHDVG2CjryQmz3UynkkneqmZCjoxP4iHxCzoH3eDACgQXGtZWjor77",
  "key10": "2JKKgSEkENZwpuG8SrhsZnkjSPs5yDfu1QdbrdeEjKMNV1oCUzizxkqgP9PCJKXCEQKtfGCiRSFLBfhzcsTkt4o1",
  "key11": "5HZA3ejGKMeZTcNge74YnxPiHZezBLESCFkurnCbsJQAuSBYLsK9gq7tdfzjhNLahmeUjrbt29BCsMGqzA1tdo2i",
  "key12": "64eapaHNHPYDS8N5xBaxdEozTcAoxKB4XGCSnrsZykW8EaTHYxfe7mqguwuNgQ3QoPKV1275ZFa7v3Zm5jYcSXk4",
  "key13": "V45QANgFHziAhCG4Z3BKx6wZzzEqx57GJaSLAKnVVjti4pPYhapDg4iC887dvEbaHw1JwJ5sciJd4spaDQZx9Ac",
  "key14": "bskrg8qXJzHSNN2QGz2LqEp1sHBra12Lw35PsqxBG9Y6xuQHMS8XugmkXvx2uXh5GnsuKL79ZcUhrXM8hu1usDA",
  "key15": "2vsVNgXrMcoVHziVFEBX8BUjvGihANhC7MokaceGQXMQgJpXh1TVXVPnVP8Cn6NndTTeVktEEa52ESmcyyXzRBoF",
  "key16": "dEJF5vqoo2LKXqgZETJJwRuCu5gn8uKAmSqPqxiTJk7LwK4V1MvpjGNGsPsdeRg5vPggabSrz6yKNrpq9aomn7M",
  "key17": "3vFppQztdizEGNZPrFhBeJaPAvgttvQ3E1Ekwd5MytDmecJsXnvRv6EYePiYNmFSN7DFXDRpAMBxAgtxNesS5eig",
  "key18": "zqcJBvNpaUWM8Rt8FJsnJ6NANQAzFb68MWDeysJ4FM5rJuX6oP2AnZQWW7ftfen6PpCecdTSrn8z13SzVuNdgrF",
  "key19": "32wE7tJH2Kk59LzLcHvyrZhEyeV2KHSh4mqef4tWswRCkXPUskzWMCH9fTtD1L1MkDrSU8oEf39QPDnYsNS3uvQK",
  "key20": "3jVrsjhACb2EsnPfRY8jodgg7EixDg3tbv5zxtVQtaTKdCz3QAjt7eUEuLwnQnQjcx2wqXMeRgpsVyuCpAsuq5W2",
  "key21": "3kXhaK2UeZxef37aLHU3PGRivNcDc8CoynHrE99JxLLe1um9AEKtHSXLSbnNrLtoCNgabjm3pZrRpG9JKpWy1ALo",
  "key22": "4N5GmxFCmy5uefsKAw7Fpwg4m2ovDcAU93FUw8Utyfda3CkLL5S3pFmUjdqcpyaBFEBWJZ3jbyM6XtN4cihPjgnW",
  "key23": "59RveVbzgbaC9BcghicFkHFHW7FxKVucZ8bhNpP8BuwVqbVDT6R29zUmyPbqFRBKj5dJ6nBLyCdEpRThR3dxvi7n",
  "key24": "tdbwoNFU1steMqyBJi3YSjbqtDUo7d2R3qqvQ8oA9UmFNKiPsWJN4cAy86YBiobMFeNLnufJ2gCRHiKpEvCL2Ts",
  "key25": "22etCB5PWa8gUEsB8TKtydBbaH9yeSmWPot6TP9MUETusm4yS1FqF77kPXRYz3nS2t8kCnj9mAx2NQrZ2AEHutjo",
  "key26": "5MvA4xepoDRYnHWCoHQcyBL9zHQoakSqTzQVNJEaYRaAdSU72pM1TvEgy4M6BJpNsM3eqDN3Bh4mnbQPv8beoa7s",
  "key27": "NdfUHJENKqzrYANL3Lr4BuaRzZ3XxUGr3BNbht6rRFvcJy5HCCAV4rZPrV9kRJhSNa7fTdsckX4ZVtvXgGQp7Mg",
  "key28": "4oEyZXXty6LXi8pPHCDtixJMujfqXzKsSHZk3C8xsovD9QhvsZ487TmuouKsn4eHrxnEn26EcAgAp8h3TiH2Xiep",
  "key29": "4aTSBUhmga33wW217MayaHraqWbff6Ccp1hiAuZumAq2zmE7Mg7d2gCmvECuszfbcnbjTseJRuEDgcaiscgMcJZ",
  "key30": "cppNebjKuDQUMDZTpwjvrSYCAZjdSYihRoyHvSngxitWmKt4KFkZgu1ihd1JXZHjU7fDdLf5HxvxDfe7Yc3CRaz",
  "key31": "L3XLL3LDp2e22HULtKcqAxkwcSpLcvk4aKKm8qQvdWFFpM8Y97EBjnYM5HFZvQed3uu2MRt7CPs8GxFVyfwhHur",
  "key32": "4cSw8born49W94v8wEKWz1X9qvmrh9nxK1nm8tc1z6Hj39b6Tpfpp11kQTyqicpenmRjvC5btxs6kFDXc52MuXtX",
  "key33": "4xiV3tmrALXSaNiLcLcYyLNMtpTMsECz7zvYG47xzHs32wT1y3QoyG4nfrQoPBjegUQPmyC19Uv8EWLmWtbfcz7m",
  "key34": "5u6TGxRrkGZtmeViRbUi7jmFxunfGCyQDbeNvvVRfq8Q357jyVsp9tqsunXwLvmYEZ7hpSb362vPKuspxEhQtxA",
  "key35": "J8Ani8emCpZfSKnJq1TiLU1e5oHu6yQ8ba59D3B1yDn6vJzeavjptZL1XmCNTAELzQo6wiHLjbJDdmotxGALToC",
  "key36": "5AN5y3mQTG2UBsgetowGDESiNiJNMCo8payadVuAReUpAeqCvJHEL7koT5rPoYKJytFi4nZxV4wHo8YYQJoDqzLf"
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
