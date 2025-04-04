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
    "3wpGgTfWvJDFxd2efYcH9Jx7ME63tE1jpanFHaEoDYUmrEAZmAj8g3SGr1kAmVaE6RLReimrJbWmVAidKRG74ikY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onor7ZhjCYimG1Ng4TTsZizBDPLoGjtXfYNySaU563jqWQsRBV9qBWJAPzCsYpBkb36SKSV17MgPB2SJRvzTgzY",
  "key1": "5xAYxAY9YoWWjC4si744aL6dYCDafE5zRbf2BB474aUnDDwT8FxkfTSNbvDkmJaPRhhsQg3RA7Mp83iWamHVyLDF",
  "key2": "4RGUuBtFML1HwwS92mmY3pNEcTSDeVnHkH5KuZqFCTvApS6DgBuzbSg3S3b7hX9RWnTuReg6soBJXexg8qLDw12N",
  "key3": "4mnPjCNen8d5pKuw6LTVPDNnd86KfyZsNRe31eDpjbDtFcYRf2hYjoNDd6QgxioL7mwv6LWWVExiVNmvcJphfp2U",
  "key4": "3n8vnznxaQ7sjeMYgueftsEkZhnSqHznbWNu2itt3BGa1d331KDK1U1sEJ9VNPSeJzKH1MHHDnUkbPBy3T3Wrced",
  "key5": "56y9JycwGawcAbuF2e28BUdd7YBgLLrNeJ82n7Wf7Gba3rVvxZFVdm4NXrR914KLwroYbGdvYN45pBUCecfhrFux",
  "key6": "3tJfGzp9nFritpEa8RnVdott5oy8Lakvq8Z23L2PDHj4B7GE6WPekLe3VXvrRxkwPJcTC6QJkGmUjZm8hfyLD2Zw",
  "key7": "6V6fA4juDZtzX3VRaq6MR8qX2UsEdsxjCX2dTNJL6EJrHENjuQEzQ83cZKMvdggdnxvRwDZJpdniCrZc3TGGqFD",
  "key8": "59soR8DS9LLrHAgEB4LBXKJHstM5JvoERJrZvcQBuLwaPQMR5Ebo9o2WanZpRugmX3Whw9sDCQxHyQQMGoBAXhjf",
  "key9": "2H4q6VZHCEt1ghHEoiTX2YvAJGjnrpcuNSDKjZw5f3dKPX5iWA1UVXhveJtW2h9wNsBpFddJvcbpGgqgC91XtzS7",
  "key10": "K4HsswcWSpkhZcNnkbfoTDkWjN47Gyjfd2SjLYyASLShGzxCuv3iV96zJp6NFPY4BegynbqMfCigQEuGU8KFWEH",
  "key11": "4GGmRZWCvbG1xFVSqiNcLG4HXgTUoVHJMoaN2TZ8yPvDKiQD8Ub5zddrbmxiyvuaEbxfma1Py1DLW4XiBMzPmBCG",
  "key12": "5b6XKEH2vRn2f576XPMz5FgKpQds5DCUzu1Yxv9qnGjPu1PKH46xSh88aDp6KKuN42j29rjTPFyJeQXtzizzvdKS",
  "key13": "2cpNrNXAfY9wCQZTi2k9noXt4AYW43GTzRNMDk1PouV1rzpT9WEavMdqA9ncrRCdEFzZrheJ4r3sW3E94hVUfVq6",
  "key14": "3sexJ9XdoggkqLSsDedTPo8ScxCyhsQdjJbTbaPjqNrjumV8zB8gbe5722LmkmRHhbLFYTh7wxp83ycX7q23vCCB",
  "key15": "2MqaRJT1DqGn7TMQcESJhLH3hwMogmpbRDww3XHhdJAfGKCo2xtG8NnP7u9147Qao79f2JNajnmNVaVLgYAkhcjJ",
  "key16": "1XKyC5aUgxzF8N9y1BLtzjREDSTawzhWcYis8PtWdSfMoGB6fcv7un3cToSfTKFEyzwpot11pwFBP3rU4TyoiQo",
  "key17": "7EyaXGUrYpWyT5Q5gZbmZYHy6iV2tDa6L7p3b8512Xxd2K2dKhvN6GtYPUJmHYyjwbcsQGHxh6515goRra9xrqA",
  "key18": "27Fx7bQKA5M1j1Eeskx3Hhe3svmjwXT8b4xvbvAcgRB3xYrAEZnmEugSxoyib5GFURFrWqA59AyU56fiR2v9zgJV",
  "key19": "49G6RhCU6htRUncbTEpQc86hLfqFzAsk8WhdqcJqm96Fu944ZpitJphbMKcvfBqUUSBsRscGym4FL8oLxnE4Rccy",
  "key20": "3z7Hmkj2RteNTSuZSSa8a6DMdntRjA5PidehYdf2vAFZSPqZorz4iwsre67eysDYb3dHuum9C9ixwpicErNaMUW6",
  "key21": "4S6tdhnr5Yk4GCeEqzv16d7sTJ9k7JgMWmWasqt7bK9cZeGz5LLDyUvgqU2SbGsh353pd96zDqCeKKkjpiH3QkzE",
  "key22": "3pHGwn9R6hCCvLTMof6AygSdNfWKZBLGCGUeJKNwNtPCNhniiYYog1sP4HUKbJ3D2ekdHYtsZyFzMXVnpaL6XQ8Q",
  "key23": "4qMF2fM29JUEeVqDwjLtP6Hbfpx6F8BwiAUwifofftje2CbUrTCeGrpc6q9MPDEchbgiatjWRCjoP2yEUEpmDjns",
  "key24": "W8DhXyNxFKvXfku7NQmZvS9wLwDTFjo7f5eAsJdMCcxjeoukhDnorzYLFYUKdgnk8vhSZrsRC3bUAuEX2ukA566",
  "key25": "2h3SjgwbGP4GzpCeimFiCBUaCAviWX3Khn3h7d79FhrbTq17VHMwPar7bQspumTzZZsEnB5zWEkPpSgrr3FHsETz",
  "key26": "3TMcx5TxMY6F3Ez61EB6CMwpvKikU2iawvNX4pjN7opGPdAMZC34pMzCq3eHokCgiqfgDuAh3fN3J4MtuEV5g2YV",
  "key27": "4TdqKUdsx65zYP1KK4Dg5VPzZev71Z2UNGubhiYiYcVkynDbN7TWETa8Adk5rUCW1bGpJuZ4k1AMzesn1T2CYa44",
  "key28": "4CCxC7m4owVzSrsar6Up1fQnhdCrGFWrdKmDTWkDcKQGPewJ2wCborGtZsPuJBpC69xv4BZ48SZN6TiJsb3AorRZ",
  "key29": "LHd6r6gqbzjBemwrAaGEq32Gj2HxhvgdDTviJktgv9nnbfr9ZkBzwiaPxiQ3DkhhqKWLczM9hJwD4HoLrHwpqBb",
  "key30": "2rEF1TpYsnJpfE8nDptR9oZimBicKkYrEpwRGh14xm14ETZd9v6RvXtDHXmtMkQZgB9tvY5wv7sZn17fQ4xxQr9f",
  "key31": "2N7SLXvs3fVQ2Jq1oWrGbfqqVpzA2DQMLF9GEdCQGZd3PyUyUWPeU39XN8FShtn8N8Q5kKLyB8QngeNsyQgpTnCF",
  "key32": "4qXq1GFrnmoswFVq7b2DKvHfXc6gr2mevt8Fo61q13BB88JHXdHoFNv76qiS43nkKNNLH6mDSRrCabe7Uu1e9AA8",
  "key33": "3NZ6qmWWFTyRkXvcP9TrKm2jEinxHn8wbNEbnu1qvaAki3K4kqfA1FjHv32MsHvajXNx1hY2qfwvJbVvxDYKc9ZR",
  "key34": "3KCjXYD3e5yKNgAasmuHRXd38BsrmbDPWeAQfYGDc1vwp7W1xhm8zhNGRRe5CGJbvftMrx9RZ8r5yui39pWsNWzj",
  "key35": "56og8TekjfuEa3h2x5jPFAgJyudeLSBV5RUnyew39dXphVEhZgkwxbwTorVN57oACv73nFrw8i2GdfzwH9mShRhH",
  "key36": "g9UaMLo9nDWC7sWM69pPQPnEZry8VdGWywtoN2M4CWGow1YSwkuYD1fHFkHtpLQzM3AFxr7fQBS7AjN8DxqYwLB",
  "key37": "4ozDmioVsvZM4sKmSTuCEpUrPgBLPGMKygjMcHsRvL5m35oZDD1G9LYJzoTDTFJVqaA6uHtb5DjVM3zDkncDpcjb",
  "key38": "2RhEKVmMqocG5eZnvRPTDJr7mkhbdK66mBmwZj7cBwm91MXQjCfBGhLDMa7QhTWiaLgkactqv9Yz2mEHP31HRacR",
  "key39": "2Bj2hvku4219BwGXBcUDVz9waiuk8PdAPQDjgsnv6jqjm7C3YkZ1i6cLUKoFsAQNoS13ajcuxNXMDRRTgZEKYfum",
  "key40": "85ymcVzXNwQsKnsjCjxBXvAeVWKf8FjNedemR1HSL2ZK86Tb11YnCYuT7dcALCPj6eqkFxNowCuBv5A6dzyaGZx",
  "key41": "uF2MN1tLDNJCQED6Jx9j3qaBaDRGTqCyBJiSs4RcLQXPuiQsC9cBJhcwx8mAcuxvFfyoudf9E4Wz3hHmW6PgxHP",
  "key42": "5y3TAbHKYyZvWmZYFBCEQrUFWSLuoptz4zG7RCfF3b3sm15Vqc1otJ19iuoMrkEnuohVfnF1gJxJ2AvF6p75aPNj",
  "key43": "5QMfXanG278oq52wo6bWUGgJKUdsWAfPv3pu7WRizu9FyfLYJjJ2mS6K2c1Aw6aHepwsX7XorVR1kpK7Gb8DhJZU",
  "key44": "5AhreRqMNLA4ijPACkpRTmi8Nm52RqVAWcK6v7praHN1v7bNKhQH585YHoodDKjXGohFiQxLHdBrBQEs6xR3xmCe"
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
