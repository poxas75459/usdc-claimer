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
    "ftCLAKfp3BtCrqxuAHjD9c2tXT1N3U969smLpysGmZm3gvWhBgZi2RVFJUekAahdGt52HnPTDHPM4GANpZYzzRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5DWSEVd7qMVD4rRhz1cuQDPuvnq3RxsB74GN9QvhSfuSU3CS4cSqWPkzEFFuUQH1H2grB7VJ5duPMZGXV2ZCeE",
  "key1": "5F8y57z9SoYCoNMWQrgdC2e8EfNF3nUr4tMQPXhkucfDQKkPDG9w9JLgwXGpBFwotR5HEs17pCjBtxDHM6dqxt77",
  "key2": "37ECA1A9DqZaAzhVhVN8KuX699ujVfLUiXUnnAeDLgvnYhWWWeMerAXgFeWmTcEWsq1JHkr2oYMVRJv9LEoSstpV",
  "key3": "39TFPnr3AZcHobsgSFPKL7vsL8G8iMmvF47BdLW1WscM4D5MiRsqVxQ3roT4fr5K1hfZ6yrvXogZM1ta2umm1HRw",
  "key4": "5feLVhi4z9YFemai7uiPxFgrGT5kE9y4wYbQGqyj7gY5khm7KjjVTWJDDWWn3iFjqx1TayG9aUu6CHgCuSdXDTMC",
  "key5": "kJirzMrhnzJApXBi9JdjVrVEuoQkwJTX8chmBGAyda9pbpgyLiVA9zrNnjfHiD77Gdx65e5eXqM4MmhunUXgzo3",
  "key6": "3F9BYKuNZGG9UrVnHUBKfsPY9TZxXbE4H3vjyUGngxo4cbpfndy1mJ34HgAFA9hTPLW69R9tecfCbCdB19pUC3zE",
  "key7": "4ouYPFQakAmwts3CKqgHb6KEGLE8E52rhqP6zc4ZUaSwD3LessgpezHmVRZG8M7xpJC8y567wpMTsrDzwcWp6fVV",
  "key8": "3kMY3Gf1ZDkisBPWFEncAsSwBcB4NSBPzoTSmBZtT5BMnL2vAnqX62gXYZ9veVn6zZfnxpNNMcsHJNsEDT2gxrE9",
  "key9": "3ZVWwmwKM2fR8abXLMouX2zKUih7D7eUkGRanqKNX1BR56vujcu1v7EFE4NfsdMRSomURaMD4jhvxP45scmT7PQX",
  "key10": "3GxxJUsoQLS19cCWTpyh2TUmBdf4MyGpjitjtcp23sdqKHBMzcPkhxVpw5WsoUBhf4zGHnsQb8aQpi9BXqoqcRxw",
  "key11": "3sj3NEbsc7ct4Qm6rcCHNjKGEMrdP6n8CYYpiMZDHgLsQgtigWaweqw5rXx6VzHDhHf4rYg6VjwF7cHEih67tJ7t",
  "key12": "3inuahf8Q2EFwcizZzdVocyGESGiN9eFdwLWUN4d5P7DoYWeB2RpRa2Evf8UiJRoqgaAi5rXBbhV6V61Ve5wmd1Y",
  "key13": "5nY6Y8M5JwPCfie6JQP99qPjeigVmrSX649AEoLMrtqUMKRRQ89xGvxjgKsAukNWbfK2MxtmpbwQfEfsQWdqDosV",
  "key14": "41ZgTcUwyVxxgPfVN2f9pFeVpEoXwdDmMzVjSXRkDK24tXYts1MUbCewr2NdUEp53tv7JbGvBGJyonsD29QWrxHg",
  "key15": "57aH1oSbHNQiTGL9wdygwKKjXrjQbs8BgVf7WBXR19kUESpeztLun8DR53LoaNd5Q7gt8DfQJL4xb2F3XEWfwTXn",
  "key16": "3W1GbjDwpv84chA6mbGeKZwNYXjBemNDFJVoPTpFBG72uEG6KJTBGxMvkAns4BWnnsTYreWaZBoszt2At21hU48x",
  "key17": "36zxd7BincQ1E17T524Vhh7Ra2BKWF1Qv1D1UUB96P83ffxCYLGCkWzBkm8wHiRAAinKVfJ7GuQ2D1WAd11AcpUp",
  "key18": "2WL9D7UXRakSWZ1xi5ez6yc7GKXtJF7UZ9tWXF899MvWeH4sRfwZw5QC89o4R6KMynYtsfkxqWZuF8tLoWWqxxwB",
  "key19": "XxoSGsSVowZBHzDcJoQjCGWYqFL36d5jaZLV8tUAun3jMwk5prm2ccpH3mf3tquRPB3XuocPr9ZPtHttWVh4hNk",
  "key20": "3vMMKsdt8AMRRi7hEC4LePbXZo3gD3CcXeceGKJRhE1NGmGEPcb7eA2NsBA12H1MTP3mN8tc7WPVJzZRbiKrTXNn",
  "key21": "1MMiR2JzVkpcTmwMfrH34aWvppgT4LZbQMJ4qvPG6qwdWaxu2tWqRkamchxmpepQN7yjEqk9s2ydMnTRbitZgWr",
  "key22": "3BZhD7HYsvVYcxnwrVWY4KaPmw3nPDEQL8zY6D3zVNbaRkXbyXSbpH3tLkyRqdG8KnPsB3rMMfkdqrdu3TetDnaX",
  "key23": "2bFdAwGuoLLAkDWbhJkiPgdnPReA6qSj7r6ycgKkSbh4obU6SvSyEwHh9ZRbTq7nb8uER4VbLrHp1fw7ZPUwsreB",
  "key24": "5GxTPJrjGTBuE3y2ufjZQ5Gz1eMUXr6FpgTTJx1g96Q2YtumTkHsLACGjHbKZ9opderJ8BdRg8YrAgq353MXAGnc",
  "key25": "Lf9EHubKwf2yU2WtuxfupduFq8fZbRzgtDrGNpLMmYeAvvknAQLWGTdfCPhEKYTGMwi2SfNQ394N9F3QLENhzM3",
  "key26": "5hAz9S4QLj2yznpgBjNNUNP3VhpX8yAqXPkNptnKiG9v7gEWRMfgee6CivySk61pq8Avq8UunUKMcmxQjSrUmZzD",
  "key27": "3CZJNzfGhezxnZkMVji6qZ6TYLqQWEqYEmqkqmoupuUwawFDiB5DRHwXqose3EX3D5HdXkgwQZfJo82HG92Wnpfc",
  "key28": "4rdbqYurV3KUvTrNMe9fKrLygia5mRSLdNKvTKFrWTBRRqnJNBQebydfE87mETK1BzcnwbVepPFJaFNmUQZta7Mi",
  "key29": "427shxNFyDY7crELEeqUd5fSN7C5RRvzFWBMPXpEXda2cmXBGEPdY56U13R2jpd8PfqpixEXakXMAL6DNjaTzZW2",
  "key30": "5gViLVAux2LTCWkjbsDMG5xTH22e2qvkSeznAiMPCF8QjMWCm6jFj9J1AWcANGaXg654DGqfidSiwaqv4HSP5V5i",
  "key31": "2Hn7cph2USUivZyREPxvwSaVDmsUEXbqCCzZqRjFVKgNp2rwetyCcaThqEUFR95catkU9yq7kmqHHQLs6o8RYvee",
  "key32": "5mncQegToAN9JNHVXgwddy9kJPapfWwjEPjq6nhPKJAZ56pHSKcTdhuwQHM92Xb475wWHz4BXfeCT3MHpYV1GnvL",
  "key33": "3FxNVfnyBPwf5EMJP5euDVUjX4KSW4MaYATSGM26nfx33ESCeh9C3dsjT8zXxK4sSAENQ5p8cVxUf3Qb3aXHAc47",
  "key34": "43hM6DeG7xwmsN74r3wG4mb3gAhxsATdBJBeZbFGptLACamENC9AXV8fi5ZfLy22AeDPN2b9ZXiKhGnP4RCwAqJq",
  "key35": "4PUbvAT1aFYunPK6fm3RbYoiVrv7cQWEdTbm2Qs16MX4qdWRsdLEHh7fwtMiQ8KstACPFPCtAhDigYxkLEFWDUcd",
  "key36": "3nuaFPMHfi862bUPteumKcFmDvgS6ERTJ8doKj2RZxpfqmxpBUdgs4i1q1Mg5SW95gWBLDNcCTpdaWKWTErD41QG",
  "key37": "3wDkdQ8QmTg1DiDLQL5pYaZ9ygU1NP5ugKk4eZdjgnRmFvMzaRW6qczBhoo5wpvXf42ApdEVzshbQ1nCURV6XY58",
  "key38": "2J3ogViqnwZCtNoEMQYrGQsrv3LRXZuf3NmwrjCTo5esQ8ZEP1v1B3JwsVrULMNhhmN3SvfC6hks3DJviPYjbJuq",
  "key39": "j2rPqfAJEjwUFYJT4hXZTUYo5Xoo7EWatTRwckFB4Jc5wGZXtP4TnwEMi88jopskt45pGftnRSYJyYqko7bLpoQ"
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
