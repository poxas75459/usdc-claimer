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
    "5vXLM5u1b72H5BUqn9fuK3VnF6XAg1xQBcFvjZy9imomX1ywp6bXvszSuyUxPY4i6iVE5sJXkEoo8MMe4UXXnyQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kd68nxjruDC4DTWfQndfykNT7Qc43UE4skoQvRd48GznfSKZre4MDg9yUQzeM8DLzxBSxTvoqGJpTyiA1cBJTqy",
  "key1": "56xG6j39PmKecCuGJX3sMG8n6m37LMYBAMXDTJUF3pBDfZ3iJQBXBuB8qee5AmB6KVAJfknZipnAenE1Cjbs65Xp",
  "key2": "3bZGSqaCFhaedfNCSKK69dsv3TF2bu8aar7ZCxrTKwyUUJU1YTeoLsScjpK7EMtEjDAm7dXzGj9WB8CocJsr8bkm",
  "key3": "4Vfome1CGStsAFwvNvg4fUE6MoYKKwaxdd6sf2TRRqB5Kd8Z5MowMaHkAhL4kw5CSHMFPQQWsM3SmyW8VeZoD5SF",
  "key4": "9bwUN5cPhE3LtGyGv3CSHuVTrBD2mCTRB19P7yYcabQ5KAFHRyBhPykRxwtLb4HTPov43nBH8vftV1WRVN4ZqgT",
  "key5": "3NUc2dHRzwPiMZRBd3ZTSBxobLUTCbJvSWnVwW3ku3ojrjb9hU5nxu6D12j8ddVySrUpcKAeCjzj4eMiggQzhwv1",
  "key6": "PSqTYrrLQuMMaM3YvZS5tK6zzhVstkyaWhuPcL4dCmUNGw2Lpr8LB1e8gRLeeicoJBd3NGJTeftAbyQFh31BmD5",
  "key7": "4q1wJ3vYYhzxubRHGz1LorugzhF9v3EBTtaWYrMa5PNQASA25C6dRsMwQRqPV4g7fXSqegZS6gKAL8f1qr1VDz3m",
  "key8": "4oPYaKxERHq4FfqmgeXsajc1kPXyAbK8yxkhPBY7hRAAEQrXqqecZ9tH7LfQCWLY2osE8cq2dQb7Eeheu22FyFBz",
  "key9": "5nEcgtxsXkWTTyqprhhnjqXFxsVNJZm1KRneJbRypHizXNJh49xydHnfGvnyy7X8bzM5FCTxMTgTr3SG5RtUEJyq",
  "key10": "3t79Vb7QHbcnf2x11MHbf8qUEF1zvhKekQirAYjWwZN2Bx8mK5q6mpP5rP1u4tZgrZ1cURSAF3i2mK2J6EpQfxSu",
  "key11": "g9xyYZ86MMxfgAX5p4WTbEtZyDnBhderVf4wHDHnpHLmmVDjJh5kvcxQF8xQTaP2awdeHkM2G2JFDUGiaJEZ6bX",
  "key12": "3DZZsrpqjMZugCHEDQF6YUTvF2KRNiUGnhLV2ZEHUeYsjZJnakJdZTWpGhsvzyUQ2AUgqPnENmiqTXzvmwztU9u2",
  "key13": "23jdu83DTuWGdMPTNwaw6dkEwYbAwqDBJgYiNN2FXMEWukUULkKXbDyGZxt9WZD2pbnBExkaLy1rHWeqhxLW5MD1",
  "key14": "2XJj2G4xS3PyWShVWXpCQQfrudG5KEf4kjTxauyTURTBGhVgFDf3FV1uPF58ibEjPCKcWRcytuYGztf1yX949rfX",
  "key15": "5T6JGtJPNXFFkUNkqAVwXg436M9gipbFxnNfJoVEwbw3ANUhsYkFxvWaJgWwjtiLfVfGuGbZrkbwzmTCsEwWovUQ",
  "key16": "63yVzLiEEYSnvj7vRV6N1XSq3cx3PF6GZQHkuYhYeDFrB8sMh39mG9tAMGpqXiSSgQ7HY7KhPneDbFRyWBXYWaRu",
  "key17": "5WMzxa4Kw7S6wrtMLrihAxBmj237TCaveGLRHFHvqZxZ3kLdMrGEt3yTSGmWCT4suKaysU8DYRQ6cRLDerekcb82",
  "key18": "4f1iHHPa94wBRALcqBcNmgZUNfsmesvGAjnQ57FCKhifo1LPujsxbrkBqKskSXbYAHgej14ZJeSLnQ3LpsNWnPKY",
  "key19": "5eSKduk5XTy5v8ZXfNpBkij9HKZfpybBUj3kCUpNYWLsAnsSo6Av6bRSyNUA6pXapZGhEksBNrBG3wxc84AGAGGX",
  "key20": "2sbfcd8DiVFq3aobnjxLqK4iP898d9NgusuXsLZ3zhFcW5rHphLvk6uvRvABZ6nkaDrJ7nTffmxm6t1Seie2p5N6",
  "key21": "3g7DFeJJZBZDoNFmtq6NEGCmNoBijpSiGwaMaLiEDQiJvVGhgmj94o9VEWJQHA38hf65JvbnyoT8RkSLscSqFxm8",
  "key22": "4L7KZMRPgUiHq9KqE67H1Q5EZXn8xGgPV8r8BvPNUdEkHjgeLFzf5Rua5uiNFafYanEDidDBj4QieX43LtY5BeB2",
  "key23": "2rNRP8HbEo2eThppi5N4wkqtDbu5gNTXuMCnEwF7EhLH5qt8azspzhG59SvjiHg2oCoXBToFZFBpYDX6G2kTuGiv",
  "key24": "5GVkXAuPqnoT8rDbBtfzvEvcnsTkFrgeFw2wYCrqj463NYgVhfsB6Es2hAsXrrENav1ntvrw2A41nXwNWSfSN2Gj",
  "key25": "YESVAK8obz9MZ4gBuwQ5McQFafSYzHDxTrbisxqsdz3gaMW3pg286oZC6hm4jCppcKfoYYj63sbWjCDGgpEmmkb",
  "key26": "ZzTgC8vRMH1Z9PC8JVuRhaY37uBT3eemCUdy4ijJxLVk5fzPWd7ePEHUtn4325Czjt3Km5K7AFeCNFBE3exPDzc",
  "key27": "2wq3YajoGs4SeCM1fcv2xkjkCdsTWfQkbZsgQ3faPUzfkkqq4TTmCeraUmSzi3dBWx4U1MwbaH4M15SaB8vXoZ23",
  "key28": "27wYXqM4froDZzaFRovffSQ5mu8P5RwbbASbcjWnwRQTPTjxoxjKHnPqm1E11BZ2AFDytV7Vn6rt8pkqRMupRqjq",
  "key29": "3QyW1pht1FHQBqW7QwRJW439GXe6RrFr7xBcQN92EazrvnWisdyLFe1aXKPVudXaN3aVJYGwYKFGAnA6A41rvK4g",
  "key30": "xX1meASxiWNB81DQWJDFzAzxBdNw98z9M853LzmCtunCXBBBGzzZeCQVa8ho9Kdh6PrEv8yxJU6vGykN6oJ5jV7",
  "key31": "pTrWLhTpmRkJ7hKeDkNaZwtYr6XwTYJGTkuBzzWsq8fJj2WBfyyWFKiZkZFZBZLbygabwzpHjHwauKQ46qtq4hK",
  "key32": "2JVQcmEGvSosB6izVE48bQ5NUaAfbXfPTooGQ3M2ZLtPa5c5r6EZgvq2CTngysfg1df3STAk2NCkskPqV9nXuvjd"
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
