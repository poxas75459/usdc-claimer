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
    "3wumP3Y2vjJPT4T3pthfkq9BgoM9udDHownh1kQmWyyLE5fRMPScoakLojJnHboWT48ezMp94uHWYksvUWeCtgbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KZbiimKgWqi6tjzB4isZN8KkEurbd6Yvuf1U3PTm5pAqtzaX1P8KHo1yRYbCsih9J6aSouNUFGwmgDW3DXokB5",
  "key1": "4SuCoRnZtYUHWQ3vAqn7S4SbKB81DbMxrFdjMgWcAWCuQNE4UoQ9nwtrofUWSBBxN83TSFffEfWWBnenzUuwqEXK",
  "key2": "5iNrEqbApFtSCALNZ4cMmRKpbzBGe18uKYCFUryQ3G1EkHRQP3xCuJW1NsKwT8hAKCejkA3o3auj4w5BmGAeTZ6s",
  "key3": "5omkenJgTgomxGp2Yxd8NDNYzawoUT8c5FT36WErn67i31diMb3cBXXtr9YW8o6vcVuSrQikmCceKxuc2bdkxtPn",
  "key4": "2PrDLwMbVSQZQjsBKjghknzQN9xLBc25RP3qT5Z4c8j5ZQnNyVusmS2a45dWgrtzLRWtb5my5xUXAk2eKRCJRq88",
  "key5": "6263g5rc7YN4gVF558QZCsDhcqJQBMfZ7A9wGoXWapdstPofrmCCgrZy2Y8jxWC1qKXuua4LWLnc37gZTqTxCB9D",
  "key6": "2vs7XGr1Mw2jJrbsLVi3nsRbAeQqrYTskHs551cNpTHFiZfugWnT1Yc75ZyWwUJRhZQ2khizporR7MsosqEz6hev",
  "key7": "2pZ8oVYV4HZu55CE973uMNNZPwznFDNrpTdJD5BjjAqywin1nPDL7gkgbe6FmeTDCKsR4ESoZLuKtdCVvgbSBaa7",
  "key8": "18F6QgMEtgLPwQJNbig47rCVH9gdiertvPwVGXhsG3DbW2VZX7sE5hLC9bayrxuL4NBRRGjd7wqWo76XRRvihjS",
  "key9": "4UGZZU913uqDtB8yjYt5QYbXToUt8oYMuDJj7RaQtTKHXTEjQoRU446ygK3YZPfvxg8vzaoC1jHCJKYa5vj2Ay6h",
  "key10": "3NgfZFdZeQKUdbnf7uD3XesdJED6Mv3Lb9h1UxjJHoukPMxnSoyonVQEiVyBFWs9SK3N5Hqx93V7XUr7KfL9Cv3s",
  "key11": "2MTxcozGt5jyFnzhqpoxgbUdbffqAKRHMjpPjhBohSRxATpp2HjC3xqaKmKxGtowvqkUSnbxzVFSJ6miNNTNPdWz",
  "key12": "4ptQGUFQffJBuiUJJJVXpNMoCQdk9aJHgSGqxkaUAcwgDBq52a4nLBDZdEhhDUxGczRpri9mDrc77xoUK477D39T",
  "key13": "2pDczFhuax7LX4v5Wef8G4JDmot4ccR6YEPLtGigkQW6a5V3fTqMh3h4QpNEt76uLaebPziKu2DSncGiMfiSiXux",
  "key14": "492KP82LoBSPGBF1UHCcmoVo5AUykiVGa485LWZhtU7EtfgbYAdTwKd92yuDx2Hiq6pWFBacX6zFmdXPKNCA4KXv",
  "key15": "YDCy4H92Apkd1hGCrcCPYFZdh7rRkx1bQpEkd8jN7UKVg8X8hRX1G2bvTkmVK9MzMkNVkdmQ5iqg2XbW6R69Gfi",
  "key16": "CaDXKFH3mUymFgHinNf7zUXLX2oJ2E9N1dqzknfhW51WYL77LLyPGf1ehTHDNjfBABRn7mtFda3HRvoqkCf2iPH",
  "key17": "obmdHDk6XiBezgmis4ZzQcR8z5w9np7FQMjpCv2KLesx1XcZu8FXrqo864YMmeyNodGTcHqo2cK8ChG7putWtv7",
  "key18": "21Zbb3pC4gf1hz3SheSr1LZh4aoeaC5z7zNCBKGG1Vaq3TM3ZQa3XYhPPWAKHoLxsrhPWhQqy1UAiy8tNkgWXnyw",
  "key19": "3HaDj1cdifdLya57VVxtbN9xaAwSsoqvcr1DgX7zRmcX4EsQ9j8As2JTVtrNPWQZionkawAJd985Mq2ujCsYAmfv",
  "key20": "fguCG1nRdtMACX4EzbqJrKkxeaHzB1rTFP7gZuAT9YmL6Ehjc1pUVChUJRQrL8e87pGVSRT4Ar2eFyq64o9zHu3",
  "key21": "5bboCfa4KKytkw9phXS3GgHpzEPjAe37f98Fo8DZURoxkmuDxxfK5W511tnci4ATLe9XfNBgbYx4Vp3CpT3yUP5n",
  "key22": "Q1MQmCBsJ9FBWhvX3VMd7abSDSsCSFtp2k2YGhgfdpgVJH3XcPz5LFhyajJFbaYKhFFrNxtPkkAkm821j7qVne5",
  "key23": "4bEcrbb6aQ3dqDEhfAMj6Wt9u27w4HMenukpQaGgauCLfv9HXVXhnhYna2y8ziK8QoQRMMxhbKn76UD7JAUNwwrj",
  "key24": "e6qayiiwWwcgh8CBXN3kuc8pBi9PKPcwuBXfneEzQFkqLJea51qu6e8p8b8YTJa16ig41nYkQa7M5H4Rrjy96w8",
  "key25": "u9Buig3VXySsGuYauycMFmSW4Hzsz1wXctP5D4F9J7Z3ZUT5myrKTwz5u6Lh9wXnR5YN7CYQAWbMchyhm4oGnJF",
  "key26": "2PbBMbt9dXg48aYYgoLybngXd7qF6fBMCg7kV5AMyrNfRjpoADmN8g37kzSEoXstnrRdLQDNE2FMykuPtsbFThHF",
  "key27": "3KLxBoffCtHyRnkBAtrk9mZrqQXzpYyU19aauXxLGfq6Qg4ietCRQFDke81CFMGvArpkmUbR4wxgBX5SwSZKaCKK",
  "key28": "49TEWjDn87AKUsMEZDsFx5femuqHq9o3oji9wi3J4t4sMnm6Ei7mJMyuhH3XvGis1h53hsndJr4f1RkRkcJNSZQr",
  "key29": "2NQcX8cnU8yr7x3zdDTh6PF5oQsk9zABxxwMz6kNaHpJNNni7rRcqBAoXGaa8959NNUpQMAMEw4NDKPFzQqruaSv",
  "key30": "4zsRZSKNdRSXDDGK2q2piDYZHKwUE4ggTRcjdocvqF5taWQXWvaiRwdPQVnnD8NitNdr6wXH1dg1VS1xdYoNjMRh",
  "key31": "66LhosSXw3Uhh7PQbR6bZVpMq4QmrqXZsaz2QtTwGGQbb6cn6xDEmCeyU26bMBwS6dTq748Rdhsg6hAjyVcp39Rp",
  "key32": "41rFHuTmxZxMM8cmTxSTbzbJbRvuTBKhKVm1JYAm5bLgoooTS46cDTaUA4U9RCmKGDRko4s99LnQxGi5frb5iV9p",
  "key33": "5ZwnBmZzNrR2uwjpuQLFJPBxTRmLcDZEs3FrGfBWWGRTHNyBpU1zeZEhBoiKxubjXQD2MAraWHCgeaEZDmYfEVb5",
  "key34": "4q7bzc6buyRSjCwEGeG52tEHLExsSKrzcrTHtXWt1EUMZfK5gPDXYH75wVLkPEyu5QXgu52MMZkkN131s4N64nxj",
  "key35": "3w36DpPFqySsLTrFk42AFLCk1Pw4tjFgvPvbLbLoCBqS89YW1hWKf3ib7Zg1VS2vJC4WCo87rDWUKuzWJeNp8Ss2",
  "key36": "wR4CgsekPDahzmbdHyeeAzsfpvzjmcqFphE3qcSwbtk7pC3MFCvm9bRLkk9ZiJTuNULbqd5ZWa7d24pmUMMUxbb",
  "key37": "2SN97uCrHegYRZLwdFW61s5UieC9NM2THvAU16ocyJuzWaapQGxjANX4zZ862FU63qqcFcqhgyxpMiHs17ZrpvEL",
  "key38": "kyyHM6uiHSzVRjXgfSNUQgfEuiYQ9Se1XZrEQZQDkumn6wRTec9NvzK5b1EEyvpPspE782oeQafueJmQuEz8ybn",
  "key39": "42N42TLDGyKGrdF92VLsmoUBVL9oeSKut1btHqLdRU3itS35QpchzWtm2gwtFskmaKaqeHcySXfYTyMiUpaP65tM",
  "key40": "4bU2jyDtvp6YBEsJMfgQtcQd3iZYmwD7ftYmqYDWEf1ZrxLWDU4Ne29BF5btzSLWfGSGrZNwWVa1qqBSKiuE3KBZ",
  "key41": "669WdYS7B2GwfU1NdFyRAjTPHvTTMQkEsraLoZx4yq9MeXqUoCMq5HXMNU2vLgCMnp1nGb7xaLAtCai3EnaKrRDB",
  "key42": "4EePCDD6cL314uz3mvoNJB6hLJcXQqGv8j3Pve4YoGYdR7oKkD1p9NMdRFRj6M1Ltk5Vru3Vwo21u4oPZEqdzqaL",
  "key43": "46Wcc3ia56TJF3qBYdrLzKZPe3YoJBjNWYaeHcBFuUe9qyMpUwXSiwK4LEhfZqQbV5SSvQn8sRERwgTh58ZUHKv7",
  "key44": "2eku9bmLdVcMsUqk2JwUHyLRAmRLGfz7gXL3L6QqukJupWpa8PBNePPrbRtqHoGk79ZWmZTU3iZW3LSEKj9BaqPF",
  "key45": "5YnHjeq1JdYcAso44J7vc1yvewyi6nhcUPVNqzERakNAAaKir29PAvbv7MfegfhFFxeU9CtsVxTQupDFCbChMzZm",
  "key46": "5Jc2Ey3HEwe12EABoj9w57C6xxW4G1CV4rEDAmyDtsa9yJwFEFcLkQgW8hveLLHjoPZKfqPhZGWkM6Npjxhx5nX2"
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
