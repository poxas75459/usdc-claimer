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
    "3o5AbJsfWBYB8KpBVwKLMaBcTAQF2FFnS8eYxeA5NiBtsb53uoeK3GcwviK5fa6RCYY2rNoyqjEj4Ks2PadH6abs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rd9a2ZcTfi92gru4wJUpzvrWLDbeSvJL38V3mmrV3Nm6ZZkM5D6jvHmzpNXofkVZo5h8A8LzRRsgTEUNjNDgRvV",
  "key1": "3ueQeYSZC9NvVi17EzvTXdpuFpZXdJ5dj6fS7JFcwAr9HY9eTwWZ3yA6axzZurFsEJJjV5Zdu7JhvHgdYGceMZT5",
  "key2": "2Teaoajy18s9PcbEiGqjZHEEtSiyVePz2NRZysFiLw7PEToMivPx4jsLjZYMdjK5Me66hMjSNgPVCgN7iyfX9re7",
  "key3": "5QXGCTBRKVct6nrj7wWConJKxAqm4Vy3SwtRgYhdAeCYExN33RcQi6BFMA5wChpqsnKmJTwRnNXBo5AbF5VVBTmd",
  "key4": "3jHE82DHWMPhVJD4wR9UV5Vi1bPSVUkiukgnCsSrDNQEP4p4RTdQw2ohWCD6Ywf88C8dbYasWuZEhuR6mUbnNNbm",
  "key5": "3EvTFXFuhLcg6EBQYFcGJ772snjpAcCS3JHcvRyq9JMJq6CzNTB9cruMXea9MjJT4h7ADBhZzRDrjB2jzDE5f1XU",
  "key6": "5M8jwQxxqifCHoCNQZfkQcNJT9bv9WHq4WWUb6FbPywDt7cjnE2kbx8ZAJdM73gy1bNGsJYdxoJac7t6QD2AX9XT",
  "key7": "t7NjLns2gZ5YP5kajrKsb93Kqt9B3HqgikTBhox7ahYnjKEwaEJ9QGNfTMty1ayjagYkaDvvudVo8LL8Zqk4tNZ",
  "key8": "5HqK2BSNXLf6rxeTnFXZ2Ba7n9L3AkAtLQVybzYEywbaHRkhQvqX2Lffe5Qyopafpeecyt8AcqzcgFVBVCpYGN2f",
  "key9": "3didhmZq4X6vcscShc2JfpJ8ZCtWbG15W4QH7RKMymP64sCqsg2cgLemj2wPspmUncRJVWQhRPG6tmL1w7dAR5qW",
  "key10": "3VmCvi9YZyY4BkADdohegvZp5DHfeNLawtjLhrFiGBkLH2bmYvHzTPaLokteGuQmq3xyPQmDSdwsD1qmJfzXBifp",
  "key11": "4iA52dCkGRuURq5gcXt22r9E6i5hyJpSZn1NxmbnteVfcq5u1mXLUR681uDicVRJyQ4Tk7Wu2Um8XJSC1ZrBPjcb",
  "key12": "zNEhUDpECbAhNAW22vPQjDHW2ZZMrWUQhrNCwvUdeX4Ti6JfFFrmBN6YfQmaCrApJvaf2bcaJC2r2LPiFVvudLe",
  "key13": "2382RiRQweAePvEsTqCfQzfzjttm5NwqYwNGsQeBemnLgKorRzoz8PJRxRbg9eY5PvisqAtW8wFvTWZR214MnDJo",
  "key14": "3QfsoqoyBgrtouqyHDBpuspRbGfb6ES2JNKA135A8UqqMKSynPRXBk55kQSWyW5ZsMZineaaNoxcGtDpupMz8q3i",
  "key15": "4ygwgedC9zJLXLA2QDb61xHL21xVsUggZrtjQGxRLfusKsUS1PufCcFKBKoUK9rdBWgxybRMzH5TNcU8hkPV2zDj",
  "key16": "eXNC5eLBqt6SxLfvQHyaTTgXKNoKwp7fWXPsLJwBZPMxjqtZxmmmLpA4aJNe8gEMefhQz3ykWKX4bpENw436efU",
  "key17": "4xmSecy2SD7r9v7Yve8dL9hGxyYbwATcaYBVttDuFjrXMeG1bm2k3C9CoWUhg4hxrYRTqPHVYetbg4MNwnHir28c",
  "key18": "gZkCUF6gULLLGTnkAX98aD122NRZVEXP2jrWuE1hoE33TNV7ZUzGqrzeej8BuhwssF6KLe97sFWe4DDbWKRBtze",
  "key19": "5Dho3gwbjxzR8ezhakE1seSaGBTaK7QRGPpLC3YYeLzUJLb8cn3cJQRAjp6SpnMg59YADEBqeMAqDrrwWx7FW3g7",
  "key20": "HuZidPYQs4d1eLRUex42nDnGtSJk6XtXKkRNnzkktimHuWZhj9gK6MGGyVBJxD7pcaw2afHNXAXSNfX4zibXjf1",
  "key21": "dt7gjYLP5u2JDNnimPyb5cHDeQajFGwd1ZqzmVAwZ2q28WxDfXuWoWW3H4CQU5bbkJ7buSKqHMZjeQAH2iiQkF1",
  "key22": "4LS7n3RtKGPRhBYzg9rBGo5jPTKv9kegZ6RPPFCru9h6ipCiErFQH3aKXzVtCK2eBzkYuEg1TWe2VppxfH2kagK4",
  "key23": "g3LN7CD4GvSf6Peg2z7X9hfkUmwSGgudevHPb6uFhx1sHfP3ReEHEqUEsqFe4oyfH87JgtJj53YmBmS8ZCYMMWX",
  "key24": "gRzTotSSvNT5Bw15XmUPNosYU6vKY2FiK4VSNu2EBedqgzbEpw26hK914e4JwMGMbJ6UQQkZBuLuS5ABXiisEiS",
  "key25": "5ZReusiLzjc3BQSzpxXT21yw5MCYTdTGtxsQMee7RRGhCSU2RupfK3JDPoWSAb2P8D9NpYT4rwjF3wvxULLQcdUZ",
  "key26": "CTd6SR45BwRwVUBL7maymBcg5wDmkqz3TiaDDBFbdsTi3XgmdMD2mDCmjevXV8UAmAeART9q5Xu9jzkYYbdUbZg",
  "key27": "tYp1BoyXP7XVhY1B15NJoex1GGT9qgAYkhkqYHjnhmpuB7YAH89RNRvumzoX4b9Uoui3bhQTFGw6TVxqLM6LUEe",
  "key28": "3Bf2kLpkTPLpUpkYeCJtujUXUVP3bpQ4LmJ3VMnays5RQXTdGVua8osuooPSSfejXqQRqRxbkChLEUsAGc92rSV6",
  "key29": "qtpKdJdhQ35BCwG4FKMzRmFF4sANEdFP8M8eJVoL2RnNeJ2jq9wP5Kbw45SMU2KsKgndyC9A9y7MRnEYJHNenR5",
  "key30": "5VzhzfiWfK52s9YqaAGmCcLTVXmK116Z27Tip6GmXQ6LdTPvdfsPKtpP5mXWd6TzWtiLpnzsrEXou6ZiuyKKHxtT",
  "key31": "62jEeGGrP3ETRHDpxjJA9n5aLdvvjcukpVmBzLJyDwDTe8xtxs8o1s2LTpzoqENnEuwiCY8c7gQuYmaic5pgLBmp",
  "key32": "5ghcS1GGw9k77Gm4zSaFzyevP879o6gzHjAv8NeFq53nWThw1mT3Kaz5xfZaRUnVxfeEtDA8s4ii4jFCXUe2r9WE",
  "key33": "5pcFHEJEC9sSKh4QFJPbmb7dQGU6imiHep7ZFufwaAniERJMJdrTrmAsbhVK5hLnfUHyVLU7EnY5NgvySTcac2Rq",
  "key34": "3z8RyjLKhSuvz2AFoKaHu9nMAmEzomJKNFe5qzVGzDDtMnsqnKRLDMqN2QR4KJrTGpy2E73G6wB1xwhKBC5mDoqL",
  "key35": "5YactbjyJM36heUqTmVMoeo3deD3BXJYazsUGaq1axBRc7jHyvFir44rfhkLrN17mGwVuRiyWuibhRrcESycDev1",
  "key36": "4fBAko5JY9113ha6dB17YbPavmejr6MgDxuK5Qx7k5wfzQmmQrtBm16cfWBnvWLz6JqAriPnFN4tbngrWQtTxjTe"
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
