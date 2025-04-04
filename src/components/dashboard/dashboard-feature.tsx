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
    "3CYQZKvRF1Dg6U4uNJovuJyKoTq3yxYPZmnChDHqY59eD2t6xbtRyu6nzuBePb3uDJUt5dCNAjzre4YbbHJfnK8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aG4t7AB6Fpu11Ajno94rsvcNVAHLxuBC77A1Sa9ziGiUZsEPjnZdkBSwd2LWjmgpR182JKdFDEhCpFxWxXGRgJu",
  "key1": "3TPsBaRvG3wRsdXtFnhwgEvwxAtfLjJPUoemdDgHwGBtd6BNX3Dij7Wjpkn2ZT34nLtUChUQYfYkke5i6adv1AXX",
  "key2": "3knMY4tc5kbVwdP7nsk9tA2inPbKrmU49oo5AWQRjhco4caUWsJNCDLbbAdFMQ5RSU5gd8EFwbYTNRs3fByZ61Ej",
  "key3": "2LLQZqCA24AoMaEbUXv72tWX27SvsNfUaJ2r4rZBTQM3TBgXfHtEruvrmyrp3ydRtArUFzxiNuCz3so1bYiU2Qds",
  "key4": "4zCZsSRJH78LpxTjZAu5dRjmto5e88bi71M998tmwA3pa7DPBZXCcm7KVmDYZXQdgbjRKqb28xpy1PGCPjVm1zfP",
  "key5": "4xWyWAAPEis76Zzy8et1A4bmdTpVXquRK3q78EBcjCzeUG8MzEDeenNDyLRYChDjNQu1Mo9at2AnMUxb6q2gaXJ9",
  "key6": "3DqnBz9cYq7UGYaX6kgkHpZsDFtzirVggc9L7e27Cpgb2k6enbM7HZ3TKsjnCMT1FA9fMdJycR2VAzRktG6uvDWr",
  "key7": "2DgcxdxEJCg6nYPQ9reHjTNL8Ck2sjc4cAQVNzb1uunxTkpXnEtuMHJPinMgw5Y6LGjVkbfyeJHMgJsvgEzpKdi7",
  "key8": "KhybhrUz7XRHGAn7kG6wwfn1Y8Y56GMityDdDBqAyzJjyxGsi2AEtzsWcv9er97qTVToPe5n3iEaB8gZThLNhGH",
  "key9": "4raGCd8i3oErCMAinv7HVAj2ie1beTaGgzujubhXPjENztcT5b8mrMXtm67tw33kt78urPoujhWGS3w9QMfa7R1X",
  "key10": "3ftmkbxb2WHoVEFUXRLUwgPRvdad5dasRdgQwNdSsJTyjkt825JXhZbo89Sf5ZEaJQ1pbPB47XdpFZsfvr9657Ex",
  "key11": "5vqbAjXBmjbA1cN3UUfKYqvnzxSUxBhHWnTUNE6gvb7HhknPEioCKyf2HiBvtVSaJn6JuQExy5idL7w5d8gfavT",
  "key12": "4yQjSJ7J2o7yG4DgHde91AW59yRVS8UjoNbRMS6LgVbuypyYssczZ6ApAEqMye8SDFE5UPcCgCbDNhXuN7QUy32D",
  "key13": "5QKZAdu7uPeAJipc4WHm356AzScvxLZ7c6aMdYxKwgPyhov4DbrTt8sMq5G8W6Etujchdgi3LFdki8SRQ3WGKXBd",
  "key14": "45eaYLfZNmpYAUcWYzGVaVUrLPGoi9u1qP3Smz3r5tX9dNSAfiLXk83qTYVFpfqdMLQumfZ6MPBjRSa2o7U21n8c",
  "key15": "4VJWx9KF8x7CMYDCVqxbwrPDsSK4suWPUfUo9JwdY841LZwSY2A1pnaK1wPLAk3XcKpmjfSpFUaMoJVzaSt6DTfQ",
  "key16": "2ipZwXMQztz7xn8nuSKVeasJYcQQVQX36iHdgWRoED6pr9nMpHPbMZv19kWy6TsFEWarEgzqKvuvYjtBr233arJ9",
  "key17": "2h5TEYMgNCbT99HSzHPrDNcpoJQgSyqrQqHLXhGZgKzX1iESreX67hmh6BVa4hRYWoTCv7tmENnVbrNzsSDYscAu",
  "key18": "4fA9KiavELnZpXpt8oXdePdumMoJP81mMB38R8fbpJmGezJagGu8RdhkaakAH8d2Ks9eLa2SAnqsKQYVSTbL8hRQ",
  "key19": "3ukZXVibPX9JAZUHDzn271sTRtYp4ZNBR3rx1xnhkRmLtQujkPcVzSWoSvyNVRZT3adjihzWsTod6oD4NgVkVf93",
  "key20": "5UD9PFJ2stmd1ojGMx29VSEb5VLKb2E4mxui51NtYkbZf25fLAAGXbrHwpujHLXGB6uSn2SkMj2LYAd5NPdxjeW7",
  "key21": "EEaQWFWEojg6BkQMecV2GCnU1a53Jqe38WHQwRWiJjoVgX6Zyti8C6F8iz5UedDTUgSnVhX12G1gvSqogx7ETpA",
  "key22": "4NxAvQjoymNmc4373S7UfaeNiENBe7kahTPdnZdzQMLAqZdqSb5QMhzvHWMRdetKrmDr4HWSLyHs4SCMKYxQLQ93",
  "key23": "2jXpJAqKPAyBTsAXPe7yZonkS96brmiaTyGXmPyARJgA997VAUpii6jBMA75P63mwvzbDxoezEPyXjpHd1oA6WH5",
  "key24": "266mdebgiYyF3n6f4pHGueccCuwfcr8npkmb2RMgYEzWWqCyy33gGJTzYfZQcSHLW3uTBTuqY9sbdWt9jAYKp3Dt",
  "key25": "4QSzmbaiyjiE6KQrKHVHhQeTBwNAtXVUcnJkDkgE1VmmmyMSwxkpJJC1cmqWyNnGFBCQrBH8LvuNRsyjHvuNr6rN",
  "key26": "EUUmPHR9Edqpj9PWViHWj1ybbfbCjoNJyw8Yzvq8edZuR3zsZXHu8wzEFYqJ76EEHrqHie61rJ9AvXvZcTKYAc6",
  "key27": "4EHTevHv1CHQ4LQgnadtweixN9dq8oGTQFHPy6Nw7yv1uqaWptT24HgtdDRhQeViR6KaCXSwq2tZXDKDZ714X7Pz",
  "key28": "32LZKTfB2oDsjc9ePJwYS5QZW9N7AmCfejMkZoKhwyKtZJQwdPCPy32C7i5tPcP77ZrLBinpyvAg5hKQ6qqGPpQa",
  "key29": "3whGHmyJ48ULcwQzuEykddizMtBHLvPD9wE1cYYNPTaiszCJdiGYrxhucsPckv1tKRxNdVFKNSrAA411qSrs5vCU",
  "key30": "3jtnESNhYVAP1oB5ZSRU4Df77uLB4SJFKNsjVjnpir46Kg2NighHJc8yE9Ejdw64mTCE2WPkrkSDfqiev7kWNS76",
  "key31": "48BLZYjkXc84VUoYr6mu1VRJYRHaBsA65ZELwjA2vdtwMNeWEqpWpQCQZWHxeWX8mHfAefYVd5bMLXAhACffxcm7",
  "key32": "4TuYgMcEqh7HG5nep5GgxK6QQDKmNMdG9fuU8u8KQ8i8NepVaw2FbRxV1JMZ2hh3pyL8dnUU3ou1Ycy9ZCocytT8",
  "key33": "3rrUa3jptyu58A92wTLYvbhqqTuyNm5PpjkVZTjKqsTssrheneXcyYhzfvfUeALNtTLhFF2wMWnEcFXrQK36Ach8",
  "key34": "36sxVnZrnEzKDuLtAJz43Ldwa2xUoPbhGWE5yux75c2A4EDfZutbzfotK5PqfxjmWmRGWW76oVEk15eoXyE3gzor",
  "key35": "4hijVXGjunbQ8uNxo5aji5vJTv4io9oR98K6TwAPEJBztnskFtGKDCzyxp3LRR6jXhCD4XV4eWKwQL67FDJFcL1q",
  "key36": "2e4iqb55o6EjucbwnZXXYpzMB9EjjwGTmVwnPuCVg2BS5ci5Gd4eYtaLme2VtAPoiqgnzS4SBd8oy63CoCfM4igV",
  "key37": "4Z5wyRQzwcfYv4cfwgdrboUGBSHD9LxhBFDKLgaD5kaWCXhsxExnSAfiAd5Eu9fRyF4o8eUWr2weDmm6uhtzewrx",
  "key38": "3YRfZLCM2kQ4HRLtkSzdE6XvwgTusWst8jYjwJ8e3LqtixthXyoifwNvw3JhvxYwtpeVqUkCru8xDAruFYJnusXS",
  "key39": "4fPs2ffeeushHJdAQgHi7ZQQEBRy3eXFzeETs7gn9kcY5rF8ReeXdgJam4d2ThCsNJUYsZaNc5q6qaXsAd8FTVsF",
  "key40": "5trXLzfY5YkXQaWkBGxPHw7kf8i6iS77kFcKiAnDe3bxUYSnXvEueS3n92mjPKLgZtCUvQ4TRB5iXVqyC2LUATYi",
  "key41": "4U7a78KWRoUJ1z9ESSceLE3AgVnrNqPwnvkkywgEBFFhJBA3W1vBW5xjoM7iL7LFZiJ4bH2cUTwW4NxZ2CK3pNFK",
  "key42": "Tndg8RFmTXrd61bstX8XW2bY3FFQoFvrmWDjALJXLNqVfzweTb7sdEz5P6UmpvmdP2z5sKMkbyjRV8xygpQJ4gM",
  "key43": "4CkAtE7ndaVFsZVroZqEiJ8T1Vuew3n8LHPZhGrCPDzWrHzfDsrLy7M8RNS9ZDbS1yFcFfYf2obpCA7uvVpRBGoK",
  "key44": "s7RLib8ZqGu8LeMTnwqJ6uQaf1NLxVkXH5e8eTPHifDEmnC2BeeF1EYb16UUZgEjvYqDhocZw3TQL2HiRoYo9N4",
  "key45": "5oWhR14x1F7PQYN234CCzyBKBsfGtze8Rb5nco9MT7yXwwDVnKLQscNL1ECpxJDWbVTCaqZ8nRnfa5Vu57Mx3yvQ",
  "key46": "27zmDS3d1C2CpX5YEKBmJWezHvwaUie7h87ibUooP9S8DkHfSZhuiNuWowyLcj2YqywZmer5tmFEvJeeTp2gXgXK",
  "key47": "4PRs4Tsq8eytoTQrVA5CYrZ6Dbx8sfCN8HxN8JgKgyMw4oJgfcxiTMZ3FG8tRqo9nRjFaWViUHJGo61sgvv1aVMe"
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
