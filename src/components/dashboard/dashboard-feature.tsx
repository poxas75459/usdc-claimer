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
    "2oeef32bg2yVqgL3e7WgnbxfiYaMJ3aY7VWNmUtLuajaeZrG9qjPX4WnQCMHMikvjoSD63iZKRLvedUE42AijJiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49U5vunsfJxD3eKMxskewFV2NU4HPRxjmkcZxzxjbG4BGsy9hgte93PsZLPza9qpRVVLLbfkgZyDi4So5HGiuAxx",
  "key1": "3sFqG5HuGh4umQeXnHCFLF1jETa6Mwd3zfRHCpTBRvch7P2y2CMtLbhYYFpA43Pa7ooawuGpwmSeg9HkoxMUGsc6",
  "key2": "2pMKrDwV32yQZxuZ2s6a66BH8xaSZfEN2pgsXhE191JGGRd8zmNABSXobbJoy4xs4cg15cVXXm4U7hY4SN6pnaQP",
  "key3": "5tjM8bKES29FH1P47kow1Uiiy1ZvHW6y4StBwGH4Q7mQcbuuC9HuoLzXLMGFAMS8CqtYrvZg52Ry8cEiFmUVWnRC",
  "key4": "635Z9iZ4ZZGebcpjCfZtdtYGeFTNgz9zHeMqRaAf1rMD2iwYh5PFVHA2uwz3zqjqr8MwURndGaTYuf9dgYB3dicr",
  "key5": "jnP8iNnR8gmHvmQWsmv4nAXXfD1e2SuCX1h782amX1TTcd6Z1V3quGYBBHpndMtd3XqPaqhJem4ZpfPL8dFhrbT",
  "key6": "21Hm31xAatsY32idAXTh8LJTVjxNy1UzYKkqdcBtKXEbEH3bwuAc8nopGbrMtXaiCFKHPfB6kUa7hzXbozA2jTzs",
  "key7": "5FayuCkbtvNtDhTa7sbc3aUrJUfW8SkwAQTizJn5yCEcaKThAHpkbtz62ohwsD9v2gthLzAvLUcMTs2pS3gxM4MN",
  "key8": "7Hknw2TkaXKrKYpuapCPXRYfy9tmELAQYSEMCjF2f2W6xLwbgeo3SffAE33gLvebPwjugvkKUntTQMkknhECMDh",
  "key9": "4VAVB2KUMfihWg2yxi91tp66T9nWSWf3FAw9sDyuDvPmjVQYYuQkVr88WqWk1yeDUDYCv1H2gGpJumjoRvq2TrAv",
  "key10": "4NBGoHHZ4Zokk7Gxna2mqavnP2CLhgfxbuwAjQQdoY7W9sDnE9CV4kjm8KYab5ai2jtsS2sKCn2eEFwW1rEFdRzK",
  "key11": "2hvY9xcKYDW6f49dTWXRL7XkaeTc1qPEBZZCw7tKikWKQz14xgGPbZgsNdhC7fk798n8hgHNFkDcxEZUYsCLNxAS",
  "key12": "CXv8BhPttTeZDgGVrWbHwpvCyfDqSo2VEPykVMjxFHJgPAQCm3jA8Ys89uS8dXsMDDKicawro31AwxjoWuC1zLh",
  "key13": "2dJTSJGwgM2oF2wg3qeK6ZZ6zFhftVtkYtEs1xGKFuzV5gamwSYKJDBPkNxhT16sAgd7pJkz6v6wXoxSjMrJe6BR",
  "key14": "5KpGQ1VBQdXZMgfBj5Jj6cRSLDhcTGAhZZuCmEKuy82rtTmbojhF9JYZWBKJhZig93tDm2pCm5N9bhk37TYSFeeV",
  "key15": "3HKXTyd6a3yiaCaNTxSqiSBihwDGLeXmesaQHqK7B7jbedqUxfD91Pq5BjjTrXY2AVafw7pWZvXcXKwA2DsYpVJT",
  "key16": "4M3WkogkgauHMFNGQdN4uGF4Ezy6jjHXKWAqeKzbj9NjqNU4FKD4XAZGEJBoNKoLqNV8YTa2SvRbXMKzypdPHMPR",
  "key17": "3QcutchUqX3VTGz8YVaKtQgqENNGWxKKFoTebEvBprUdguxMXvHd71RJA3yYdmJJK8LRysemHcc5gAgjt9kNsu2",
  "key18": "5AAiiA9hdgPzoQ3iRBL1hfxZwpnDrigy25MJwqbDNbgfQcvjTSResLLqo8xoTWg8k68nh5kfL7EEgM4zwKEVvKoq",
  "key19": "4pprCkkQKyR9zdCjCHVLK3oBi6cfHP2d4MDHEDtKoyetcq9TZo6LjWyGC5fkq2xYvqgLFWbvBie7YuMVccgQvyYx",
  "key20": "5rs9TtBEov5KGEjkHhJZfWXWn8B3v5HizyCNwLMhubokA8Ji5qdrB2HDoyDaVGhcA65b4c8zNNN19veGo9vD8jvk",
  "key21": "2iRpterc1vfp2CPQ9WiAayEeDPe5cRVoFbnPWf1BUgEgmayK7m1NCg2JJokDwgLWVJ1ZCc4xqmv5HRZ6c9gU6dsh",
  "key22": "3vn6sJcggmgkUk9cKhsu4SSoQ2Ad8hDQYPexChC6ctCBR2rJbdwg8r3Ee5t4gjJdDPcZq8ywueQN55ZbDJoAyXR2",
  "key23": "618kKrEXKctvaEwfcnjJvenkBUMfwNtsWEkd74rNi5rZx3QG1UvSE7rLu6zMxyUv83ZrWkmRUFjtzorcc84WwNdE",
  "key24": "2vc5s91W8bbGowRiMAiMREva5cLX4K54WyDAkcMiMmfPprfr4wdVPben89Rpgs3vMUyQNwPkwpAwSkhug7Cqr1sM",
  "key25": "2zwKoqKyzyApKCCmN9c6dJi2eJK6voAfHrgYhnGz2XVBzaXpu4Y1zThcHAWecaow6NBYrwvktyTqfFtAuAbXZv2U",
  "key26": "2kZuY94ixKpk61mN6rxiTwp5tDNVUPGohok6UeZnLkDgg8zBao9JHHsp47P3sbwCvxKZtEY2KZ6ZXtdaX4NYJwuo",
  "key27": "3q2nYfTsu8pfcVCBX6afMx7ZSeiNpYo7ancUreYoqJZBfMpTx586W8Swj8pTsDhpjmAKXuDsRoSErRRLbFun8pvQ",
  "key28": "3UHchLAx6q6jX2ngNmYi3iwx2yVXBFVBGDWixqmud8JRfvAjpYFnECfRTYRAqoKFWw2G2NTFix4rPRWSbA1uYygC",
  "key29": "3LAfARKJZMKyRDVLh4GL3nXQEJJwr5tUqjUq9K7L8i1jSihpn2AMdjViaiA8UNfWewwxZ7dJpxs3GLpYNBaDQHUJ",
  "key30": "3cUSVrU7TdLmtYHtCd4QxWKNJq6YVkAb6v9e7BLyCGTXs9EmRbmdQ48qu5mXR3RPdYffqm5SCNtS4gqN2rrgg83s",
  "key31": "5C1iULd6PWxroDi41Wn7KriH6UXC6Lfr3S4J1wSu1SxNuqDwUuYXmgzewnS5XDyj4s58G6WM7r9K7hoLkx5BAGdn",
  "key32": "5h2F5yY5R3yDmbxdkg8Js2qeyr9pahYqQWbD4TvGaXV7NyXx6br157mPjpBRoCkm3Q4yWV94SGCCJoRUemsXFE8A"
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
