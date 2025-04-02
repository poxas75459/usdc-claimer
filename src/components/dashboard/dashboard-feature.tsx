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
    "2gyHVGJK54w1znuUD9bZhZaQMf6aRXGMSSVzj9EndmTWGDwowmszZYxDYyQm91JyqZTu4nN7487pgCsN9ComzTzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuoFxmENriUvHftvKEqHC9K85UPs8NuwqnpjnVx31kf8obLe2w4kVFkWgrFEeWoXggXtjcEN1vAUu58wfg5ddXc",
  "key1": "2Ngg3n2GBmovdF2V7SbZKVaurjTv6DnLwht87qujVmNwJtm4hyfYGQik6YL2uNDamQE8sTMrBTQrtQ5dz8HjS4c6",
  "key2": "diVLcVuxd7dfFwG3wME7wGW5ZQdrXHmw3ns9CVyxXqad85Cb8vfdrStVZUgWx9DZcF9DXSn9Pg1rMeZ8QAp86rz",
  "key3": "4VxQS7LsRSsMU13kxrxKCRRW1uSpPCUdCDYUwRZFxcRem1o1W5QnyoAjtawBRGfN953mxvUm8uGPKJ77KkWXshKF",
  "key4": "2GRmHtAk6VCnB4fLPiqJJrQJhKT5sXtMQyKB2tKGHxnoFGNDjdKsTebKWpTKNc7Jky3fY9ux2DFghGpE4AbkVg7V",
  "key5": "3ZwKETruQErmMdqKnihacTnttfESFwphrQ6QhjZNVFLKYvaHuSEyHdTJP5ytrP759UwroTZLZ9NmGdyMcQtUbCNy",
  "key6": "2sNann5BNkeMbuVcoNt1xr4h3n4zFDgqfTsB6BoxWAvsktweThWdgV9CNqbCM5EsYHVNgwajspzPDJsvUPQ4BNXc",
  "key7": "2xSaNwss4AsZdpMDwsahmXMrLqHof7wc6gCyFAja1UukJwtRLorfjsZEwgQoSpbZDU4WsVJdnx5KQwdLRCpuYDs2",
  "key8": "3T4BCbq9UP5KPjq9Qptp1KHDfVZbZsqwbJ9tGFxcgJdegoEZcEukpHWJmocGnzeY16PpHtqHAHSa3sNBZjzCo7Gn",
  "key9": "3ptjZFUrR3e6KRumY7VthDiG2K8xgwrxvsesdaygVFG4MD8vGt3gqSwr7pa7QdVU6tcdSZD4ba8XaV4kbJ2e3cmy",
  "key10": "3YfRyAccCwFWjxrTdNmRcWt356e3sUWu1uE5rCJfTSL61BX3fKztxNi9BxzBthZ356nFKLf4SLC5CFxZH5PgttAk",
  "key11": "4NNsHuASr8G9SR5Bkqbz64JXXTsthFhRQaL6FQxBa2DWm7ru3V8TYPKepuZJ4ACnnDSQg5UoQyL7JqJydyVTQwWQ",
  "key12": "5Qxd2KHQBv3ewS1USrBjQshqmTnYxSRGQGei2JDToFhJoK6nAr3evUhYcS9NeJjUoyxG8v4RnbbQ1RP2DwuUDQ6Z",
  "key13": "2sUgc6m29gnBMChJCG1PHgQfBiN59oHgsic6P2mLgfAxHueJhk4VyamqG8TDKjkqcYgAFRsy92GRSbTFCi2QCGFZ",
  "key14": "37EyAWerRU5HUsXF5nizbHwXodfTpqcNG8qcBE5tNEBEFurbGAUoozjMEg5TpKbtuPzbR61N96YEyoMeYG1ASbYg",
  "key15": "C1pJn9tM8BFpVVs2Uz9utMtnZCLQUnA8Afita2Eb4MeB5VZYhcyxByJgeNdfkT8etGKySrwQzRcNfW1n7NkR17L",
  "key16": "5dq9qqBW521dTjWutixBeasKtG8DGkqTDhTr1ZaSUtCvVHYFy8oMHGYu9kwhFC5LZuXmwFzKmToPoTPnoxZjtq6Q",
  "key17": "4CMCG4fCrQ9Z7zTVFyND913PfHvWahoFz5CbdyjEw61969CAUb122FPfPbCP1VvHuVpj41WzZVypGs5kbUUu2wHH",
  "key18": "smdAaSk5bBh6nPmogRWm4tFpdRhXaR8dwuJuak9jqimTaCR24MGmLtDnmq1rHiVuGB6Va9cysFghU7kPJ1dtV2G",
  "key19": "2YSH6NmH3WqWcBMLLe7udtYY7tnFJxpufCbp5EufLUShFahBBdB4TXdGY6eQgV7vWJZu255e96Bbfw66KoY8GqhY",
  "key20": "2fB5CdY2xiz44vZBvof88vqdwDrVys7h3GpXv42PZQMUcXtPCyZUErW3ihVVQgs2c7h3kUAcMeMwmQSLGf38nvLP",
  "key21": "2cAVnny9KHJUSAzh5uJyKwU6MaoMt8Lkj8pWVdU2Z1Gr2ppMvJRambbro59Hb3hZAyRpHb8Vo2gKJ72P6xCYB3Lj",
  "key22": "s2mxmPcHiuNc8BZKuWgZf1pYDmk26czffRCA4p6EJLWUfELP3GvSMdGAMm4M6AjiA1QJbPsiG6EHVBzNMQz7tHK",
  "key23": "cnEFhZGQnXh71u6wp5k4BeLjZd28w9yU8kuXo9uFUzWLq5CfXLTrtaNvrz94euqRmvBBoMWPawYx8uQu9jKqcNx",
  "key24": "2MZdszt4KZpm8bgHNRJ5fNwf26Tj2hbtndAroAiFTcmANz3LbmW2b7TVuGyR5N3QqBSsEXod76jrjDv4tkeKCvSi",
  "key25": "4FXpKsrMaruiGHwnkLqtyETt1W3FcGqnFd6M4F5DiwBxrxD3b87m6DGqQnFh3BNCR7VTrsDYJ64mW3zkDeE5xtsw",
  "key26": "5aFxA7CD5GHvfmJ1x61JaLd5bkodscu7X6i4pd9YuPDj8ggjA6kSzvFxWmapzsZo7MqsyRFpZ9EQwg21cPp3dz9t",
  "key27": "itdBCizkfsHZw8HtKKW1yi4VzkaJyBz4si9mCguDWiVSzdvqj5dG5xNanGujn93cxFF3tZuPwgX9MVqo66oax7r",
  "key28": "3NGQwJaTqEVmihodXDhgoKvT7Ph7PPFqJ8tKnxzLND4FXp9hmHCQQ28HRhRVPW8mu6z7AcqhZAEw29nweabtR5rA",
  "key29": "2AcJTSqsmJVQA124zyVcm9h3A5wwMk45FDnwPDWeZ8pBtFKZg6LEHFkHbFa3uRCpSJQJTBmmERmxL2wYNNcrDVnN",
  "key30": "5npREvym127B7AyvZqjXuZZP7Dnc1vjHuJmaF8oZ5WikL25BG3T9MyejbcYHjsfGPcpkDaLrQJhVKQBpouRFKrce",
  "key31": "TZBAN6EC47azhfdKcQ5x1nV28VuoWmPZNEcZUfTBRotboZEPiD6TwZMvtWFzdnFaNuQGmTDu9pQ9YH3vsXmz2ma",
  "key32": "3wTsDvWW1bg685edSxTMggug2151HQcNZKkWBwoA2M6Yvppt3BrFPmxzYkYan1vYRNmN7TfYaLa5ZfrgVnzMD2fc",
  "key33": "VkZ9MdfkfJZpxgwUgfRgVibJs1FXSE4YJoibJdcpDs4s9wwEz8T9jYWyjF1WXG8d2fTAbtnGHrd75CM1oaAK6M6",
  "key34": "CLoqng7Zv5gVmTbJ4nfK5skG6UNyCWtHMRgQaZkVTBTEWETf5heYarTUV4vYNNuX2bMPX2ZAufc7131nX9i6zbk",
  "key35": "bugtpAAGTh55h4YWSoPZgVKcAzNgeGqT98XECiicgZyaGb6DsjKymaDpvDMdPdxRrpZjCNefkmVuJwpnd9dGhxi",
  "key36": "5q8oh64iNs55EBoNMShMtbzndCMdJf9GW33cHFUSuYCNxV55RCLLVdSXKQj2yGDsp91sHUorJZMKXQCAipDZxuAE"
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
