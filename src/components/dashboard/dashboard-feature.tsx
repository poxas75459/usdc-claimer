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
    "qYNRyqaio1iYzpFVosQKMRiCfbrte6t1czteUZpttF3ViRCoGfJdGutAY68grt1KYYAMhSmL8zuhPiVimLRLSmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMdPa4oVEugg7B862KQbjArTrjC3uDxSN9B93QJRmhz57n2murTnvJBB9qD4zuw22seMGneEhY2Uic9xwEvUjPJ",
  "key1": "4Dw6pBs6LhFje6o1u96wZUQ1HDVEVmatzMC4He5u83xQeHqL6Mzv68JHswPf8ngYJF6bdSJqba2hSQa4R9sXufqe",
  "key2": "62s5i6dGSiHPLim6TtbAqwki7HFWjXRWcY2A9JcPdAt6wyL34ypxyzM753Yvd6Q96RF8eYvdihgdZyDZU7gttdVb",
  "key3": "TaJdjxRuTMs7aZz6KHyTGd4ETfYuX82VUfh1VM3DQzgLAA9Wh8ri5w9ftmXeG24ReVQdBQo5eoXSZfy2S5qEj2s",
  "key4": "5sh4tj46Q1CrVD7thTPbe83SjP8ocfNEa6rVG7cBdMg1u8NpSiLfjnUpSabYATEipMjJNYovMS5gb6sNgA7afYy9",
  "key5": "3aTBsMC5w3Pj3SqU17jqitZD6MSkBSmcu9RHwnkyXQPFpQbLhrQoqKVRzZPPgsnSyb5A87sYSmt7nmgYmtU4X5ae",
  "key6": "4zKatCYZCG1eBXaE6JnZxgnJLsDKz4zfLtBefHcEcqe88c3T9NrXn9YyTH9DvQRvyEDbHktvTgaihCHTR3uzMLvy",
  "key7": "5c1DKKjzTjeD3Z9zNNK1AkgFhUR5rww9M6kZKEpUWUAvvXCpodMLnRs42KX7gnMytZCY9ECT7kpgNfjb4MNw8xYQ",
  "key8": "GP5tTyxZZgTHJthaMCwSUkZqEyaqYEYfeBoknMEWU9wsYtnVkW4kVio5URa8sH381BrSveoQ3gGbRLXG9qsAXDk",
  "key9": "UDCyWeHmnbzqVxa7EWxLUFest35fxHQtzFEEWiAdfJAkkF6GPXjsxYTj1iiWbx8TpgVFpwp69NA4dgBjYfAqXYU",
  "key10": "4CFLyEtfhZqG2MtwdWY2kZzE28rmZVNLoen93yohEvAGitcKHiAhvudEodnFV7nj2d3jeRVVxMtzbYr1gZzjZtjr",
  "key11": "fTHGGBo4RrYMqaKv9Mb3t9UwcvZNLZ4eNPd6im1sd3R3QehaktMrg456vgNwXJNAHHsahbuxKN7Qve5ifsQ4Ymp",
  "key12": "36dtui3jaz4dtJaWDeift4UUt6x84FYod79fPaAsNT97J4JR3MTXbG23Q9BQPUNtwpxu6SbSLKxvBS19c3ApcxCt",
  "key13": "3wMTQQwoRTNn1xZf3tAjYiPyZXFsTZpLtR3CyAXeuvKaMhe3Zbdqog2CSp4bfjmoDPTi4SoJCsRbTi1ATmHbqbq3",
  "key14": "5zc9pwgX7zLXuqR4edFTVbzdbc2xEwkFgGTUA1UbZhdcoxMz9osNZ29igcpK9QtwCjonUAa9YNKvMVqc1q4cj76",
  "key15": "5NH9css8fnjS2r97PpwBgzTWia3LYv21T7vwgJrfLrQCGNNSegNgkVA8AL1aQW2Z6v4cid91PjT3qn6nzNxS3nXT",
  "key16": "4Qe1kXtMwRMdcsHoCi5q34x95NZmS4YtYWXCKfxcnpxWiAdveAY5Q18v7ai6qy3FP5SZtXoticLGMLn2qy1mLA4H",
  "key17": "5RSt6XYeknwJQBaEVjthjzEvjxzCUxWxpE8v4iyPf7BpnB13NNAL2aAMkD7JR9RjLFZch24EZPZozsGufqKWEcTB",
  "key18": "Gf13LsNvKUqpfYtEigrQ9CGCy9gv9uZQYmYzUwAWMSAz9WvLjHnbhCD5XHwHSQeQhE4BB7WkU8ZL97MwVfWwn9y",
  "key19": "3wiK3roPNFpYEDYAkwVw1jmyMPMEQpgVUdmvfUGzMjidMXDkLteZUTQeqomzj66ncYtqoSHTYQuC9zKXu7RPFWHX",
  "key20": "4EyoBF4RkA9h6gnXH1sqe8uwq93KDfMaQsUjTXthRTF7K6wLNDyFF6jVtxHCsiw4HaTKNGbPiT7ZwSenDsM2bUQp",
  "key21": "2yhbgYDYs8MyEMm9BfzaNJ7VcPgPnViKnkC1JjXMLSCLk9KMvsLYgZ7joiBoia72o9gzW4ADx4gyf5dhpjEPzRc",
  "key22": "4SuKDuVzDTYffWepBEf5mWRLeiEcgnYagbuoUCX7VatjaZRg3h5HVzGm6DcHmpm2narZN2xwYuisuAcRwPsvFwTx",
  "key23": "2hUp5L8eh9t3wgQSujzBNi8DyFvDiUeare5GjLoLDE6261dnEoVbraesZKFZJ6xZehpRF8VsgnuTSo45hXLbWHmd",
  "key24": "bvyqmmox6wtu4aq7mgCwyaZWYvzQxK16fUGrtBddGMAtdmdRBhHf4QA8VSGV36eY16Kr598nTdTdfvDtbJyRoHx",
  "key25": "3QD5dGs35zurXbjMeYbUV8oH2X92RAk8bLcXLX7cAi4MFFce2Tb8DwdgcXmSvYvR6NaZNQcFsfEhegyrb3chPLks",
  "key26": "Y6JHf3AM2VAJx4a5spSD8raNuoNNYcZHS66oXEWM3YmjnRc7RidG5W3nAhFKE8KUDcKcg8oGRBjf6yFBhDaVE6n",
  "key27": "3BNZTj8p4juKUKbCJ18v8QZ4ZwPAZZsr5wN37BkK8rPNeHfWQNM1RthRu26ZXmGcZQ1yxkMS141DSTCzYWibuT4T"
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
