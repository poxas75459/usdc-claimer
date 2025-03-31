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
    "49iusgswLjtS34ydxrDKzn7Ti2Xu7NJi3fFhK8MqEYD6usFbCukS44K59kbE3uoDGhHnFhZm2e77NwKCuDQg8koR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3nPdB2BdmpzXLwyAY5sJHkGzornnQzgNvXw3wgpjBjUmEZtnbiyoz53w2F1FkaG6JKZUWCmKb1FSBPcVEUdm48",
  "key1": "2Zh4B9ePsowk7nPFFsLWVwxFiwja2m7ZFdA98jx1HxbGpciGQQWCM6cvjpMTnGuQXEhGCa25GgqyfQ7M2AQwg6Vm",
  "key2": "24NGhgnvrkZKcz5NswCQMF4WQ6QwuzyfEYq4w1gAevdr3NSynWCEuT3tMkN2zbJrEqrR8pCdaBDJutqQNGH7XDse",
  "key3": "3qWHg5jWVpCsU6g8XHEhu2h4b5ACavEeTeHChZZ4P9Tj9J3xi2ptsxs6jRJdJYLmPUd9hPLSdeo78osmT5iKJeaw",
  "key4": "mfR5kKQ2Uh1XhqcbtsxVjjp2VfhCSc3hzK7nZhuybCUQUy3sbSppz7kF3YEsrxmHKeYSN5447k9SM5t2TQwnFhi",
  "key5": "oJY7w3URn87woxjGt1sgs7ozjtX7hvCMZExpi1ZgYF9xNsM1fYEwbum6J8YMia5t2Fn1MAYB1XYSPJrF8sAPyhx",
  "key6": "2wLbi6fPSzNq83koVUWEUGQ941bpXEsSf7MGZaHMHZ18HiE64iHFgYUQpLsM1JQdZ3B1M5Zius3BnToyBGhaikSt",
  "key7": "2m8y8vy5PrMCgV9mbD3KtJz6mEdLPnKtn21c526uyw94mYn1BrHLSoMvNgsxJgQsvVTzt4mQzVSFjCPpajecXXLX",
  "key8": "3QPMvi9ho5jZJTMv4x9fSFx9eNp7QdaAGx2GowCEH7hC3jJPadF1P1rwHFgBHabh7zMe2QQyT7vyW5PbD7kuFqxS",
  "key9": "f25EJQuEFkzT6kE2LP2q9yJys5FRQyPVwgVS4xMCMWM5jwPZVJE99k2JCQKu9CVG3xS1UM61uaa88wj3UYunfPa",
  "key10": "3t9NR7fdANZiKM6o7FdGPx6wkA8h7jo5xA8SzQyYGfxagGFrPby8Q4UjG74UtSFbVgnmwR7VNsrwJs49i36iDeuY",
  "key11": "2oAioK6r6kDj9DQtvvk6dyd4CCckVps1znmD58m5fgzHVeFjPzsAonWJZmHmW1GRhCy9joYaR9gPdSrHL6HjxaNy",
  "key12": "3a8wCCn5zhUMUowdmfRqcznoRfccmasqdXo1GQya3XfvBngX94NoMwaAiHJeWMrNFzbGMC8YzVpEQPF1JG65sq7y",
  "key13": "3yN4tbA1A6nuH6eQ4c9uX15NUPhSrxYPoumiY7Qt8oqNmzy2DeEXbYVuxYJJndPmyBDSZfnMQZcVWYWRtmCxqXcb",
  "key14": "41ZaRJjt9MV594wsJjNGUcUT1hzezAPeYkvEqgbcsULatxD1Ek5DpC1fEqxPxeFCPRYpmqMVFhyyPxZM5kRFBMsa",
  "key15": "3nMNXjj6qBPzwqpWMoNefeR2asU9pfSug8E67PF2i4GEruwRNMnhNMvGbT1wzDKjKnAvtsuDUEF2UfQKsF2zYaa6",
  "key16": "4aqoNKgBCuXG7agQPDxyQ4WksRGzEV6xiFSXPVC8idr4QEwHwfiSvJiwoG8bkxGjKe6zPMc4mCbnrirR6pPyJd7p",
  "key17": "4LnHGDrLtS7hZMsqcq6cFgMEdXyfdbVXh1PbTGcDa6XijDGo9v1yqn7pQTNrxpNaFyLGRFCbmXgG31FN27yYFPDv",
  "key18": "5mMcxJ8NmrKsdyHN2XAzutMmyEpgUAVWFN2pH2Bk92uxCHSacSQrbXGotqaiisG8M9mFWZmi34dXU6bFpM4PQisR",
  "key19": "3XHdQZqfaZ1gnFJeHTjc2yKyhPfN3Ey75wuoK7svdHJWRr6EtZQdQTHRy78pqupdhjJRywfXwh5T5sxRHCJhkujv",
  "key20": "3mFgQNPDjCa19i5RqggUs7tFK441VKfVRP3uKKo8n8DQeaQeSVwgo9P7qBGxjAZzLfWicVdGHWQCbDZF6zddzEwo",
  "key21": "5HhcCyzEWmzSuznLUburavybrHzZsiVW6hDMupWv26T5UtzeXPzBBFd1nW7qEKsrV6yAcfCZBinGwmiTThaujvmq",
  "key22": "4V6ZpEyiYhrqw2kUmyTtN26f1CW5Z9r9kYpCezfSgTubYDi8hko9AaLpSStfdVdvRYsX9GZ1QtC1MZavGDrpVX8U",
  "key23": "3n3hTMhV9wgoX7Kx4fWgjVYei2e8ZMBd2UhwfpgZtFEvYmfe2nrahRw3Pi4HYQygdbWmyxqUrKKtZCLbWV8JYicD",
  "key24": "Dczp5R9RpupFkcstZF8vGKv3Jqm1d1KtzC61YFwxMLRWn9HfNCTzjc3sD3t2zjKm97bXPCYiNpJe7V5FCRh5aK3",
  "key25": "LSgT7P5k5FqTRtAWJdR8rmMxfHEyY3WCFQVEpURcZ52iP2KgKLuwRNqTnWE7s4zPNjvuJVapFTUK2so6tbbuBjw",
  "key26": "4zdQ2mN13G4Y9skYasqGGvZD9gScxKBkCQGxSG5tRq78e9RixXQqMSkgaxP6fzdN4aTnoey9fGcKneKN5dHcVHjU",
  "key27": "2UR3uP9QNZYA83AcJwNphbBEmqJ5tNW16dXprukiPnY7eJeFru4uYpwT6kf9HeXeGS8spSqrz5gSW8Jh9NLSmajd",
  "key28": "5YZsEQBbSYR4k4uZZ43TxRhJzdTfzfnrRoBXXs7RLxmShAmkTRPHwJdYwNjTVRcdM4d9SPCaiJJ5qY2HkS6UZ297",
  "key29": "aA2Q6J141Nn2CWgmgrhGazxnsm21k4Pgk9QDdPr6xGdzT3mEfQJmxiP3mxDPGFPi8Jwr3kzUkNAiEvdMpXdRmcF",
  "key30": "3fwF8hrhf1EJWx2BgAUrENfV4tdwJyeZ8hNqBXh9SQ3mvLBBSmDFzEiXwNwRQbajAvpxwnvcp6P1JWdcVKUUFCto",
  "key31": "5o1t1UzqAEhocaU2DGrSu6NoPRfQ1E7nwh4aeUQCeN66QLEds9PHLWhkmcaQ4ZyBjK6B6svcT7wVEzBHex44Pw1j",
  "key32": "2euRQ64Rrda6fam5dXjpW9jaCcrqNpwcPr6cetECAUim6Kk67U9jYV4BR5VtYaNWV8C8fTCsMTJMNXMykzVx1mJX",
  "key33": "3wnpkH7eEW1Vd6Wm6FgpLaCynKRcB1BbDmtVpd7tWWRr4f1RUoiM2fDG2eHUnvbBAY7QseAfwPdW7dg9VVjvtxgL",
  "key34": "3jiHdrf8oaKZxKbdf4r68Ui1YmrQCyVW96vZP3QKf1HRJXCxmKgxd16UjoBEuTdTQYJY1hy6n42LrzC85y5T9y5U",
  "key35": "37BJKXnSwVd9yn9Jw387rm7MJ4p5sD8ecwj4GcUcdVXq8Gsvp7KVoUbAyYzXaPoaxp8mKHrRGwLpLxMP1y1mf66C",
  "key36": "5EiQCxsUkL9WrrJVT9aCwfdbV9bJKkjChXG2ra8zJvYaQ5G89q13UL1zfeG4CixyAbNkzBTB7BvrjswcgzNxsdNt",
  "key37": "7ptxRB7GfBPuCcy1y9aqMBu4tDFJRpHqa8bzn7GhCimnk5pBuEMUF1UmqTNeCdVNd73ds46LYsxCTAzZY2qzVaw",
  "key38": "5UXcGVAm8STb4idqQo1e7bUWcvTf7vhaQmUhGRwq7Zqq78mtHcdneJ9cDEtbtaKU4LTLH7uDuTFNvciv1BvmaUTC",
  "key39": "263hH38BYWRJK2B7enTfbYAgpVWnL2ZCdNfGQ8BRx2pgitgDJTBToZfvrt1xSUrnxNxRZMZmAHfvw9F8kmXeGZvW",
  "key40": "jmSozuUmQ4b2bu2dZHjf3wQUr43xCs5jhVhKr9RrCvDusL7Afo6Nf9xancz9vrky8zUM3ctXoqiGVFzSCGXjEUN",
  "key41": "776BymfvbFXNWGz9fxbj7nfo3ZGBhNxVPzUQdiCnURu9LsETToygaDNp4Pbk4C3Geuvy7ueDyUwbd8YRwEkyAg3",
  "key42": "4GgH6nM5QMYguu732RmjavVLdvpBNAMaBTo7vjfsWUuRw7v5bcMx6HxD2EsYQ7aHUuFLDKJsn9qhgRkcRHPdXitW",
  "key43": "33MdWAct5aDNSEv66UDMzk6xXSizPjXJY9u9mWcmnqJXQHmcreRJjnPYYiYBEZzXLvb8wdRfPp7D41weufFvYdGj",
  "key44": "fky5QdMbiV9NapXYdEtH4a1GSLUqJmRLF6CsHKdhGiTaXesKqxjgT1abECCJxqbfpgHxMSaLU56j5LxYWUxWAL7",
  "key45": "4UrtyWiYDzhMALrzTcuDc8gMqMxfcTGppKTmbFynLiHFeK5YjBxi9aJ6tfYNgzpsbyEXWTnn31b8fVoxu5nUEmkL"
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
