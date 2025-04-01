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
    "4qPNi9zzuu84567svYR5UduDqnG2S81JKxB34oVqpEatQugBhD8qo48hJ53XoCTvwoBXrDVcUTeo5TNUKnmTGHQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Akj5ycyWn21cFN3xw72k3NtvzLtU45RMYYXFCGNWFD8qgh6pKNgPCpmmsjVtRVDJ4898qmEpxXpztgVXoFnKJLK",
  "key1": "2kWnfApJVByc7iwaHWLXvufjg2ctobCfAy4RaGUWLvsRAWVfGGAzu1jSAsSPXiRThfrtKfSPJgG9z9Qwwr2X3K4",
  "key2": "3mFv2zQYr9FZrnboKBQ4Y2zVYWf26VCxToTvruy3sgcKTy4CWph3SqukqEjh3acEcRM5DGpPjnGyAiU6ppziMsBQ",
  "key3": "2JBDiDwXsJyjGSm8isquyWDLGTWVU1T82TiW8QsGMnByCR8WXFD6dMYgqRaXz7jZvsLS3mpz9vk3CZsgSi9dDnAC",
  "key4": "EtUJRSkYM8hdq8LS3W6aoE25hGFCAkHwXA6PT5EeAFumz23fMp1m3GrVxDZ2miutB3TKtdcyd1hHQgdTa6hXKi1",
  "key5": "67Co9yLzCWA2JpyqWms8y6gKGyjUrt1LMCAKM2GGC6nFfEo9tRJvCPfbjsJaziD5UgJmiPLhfjHXyhXjK9whhiK2",
  "key6": "4dudJMVCuBS3cTQLwfB6UDHL9MwohdmSWFdUrw69Y1C4TXCSmeqPLUpyzhdbBGSPCtoWQrUfrNbyuCCESfU1iM7h",
  "key7": "5LzSWMfRNwT1z6Bzk34BZxQQNYeV1e3pbpiXr3KjjRdtc1sXNTAPgoeU46dfmgBctEB95MqyNTfepP2152eGw85B",
  "key8": "2otoi5mApvP2hEvpCC8kEc1KWENpb3Qsf8mUSrc5vKWkHoAtZkxQiZcRshZ69LWnfmTD4739KfARu9xj2FFbyHJu",
  "key9": "4AkiLUYwxFXH7kY5rA61EaQk3HiiCUt6CNirSfPZsGGNp1N8Xb3G3fcPDBEKkqvsgcHwo4orn4YubGbdyp2ZD2Gi",
  "key10": "43KYfbxkhaQaKR1RUYoeQqueATfE59hTS8B6bD7Qq2f73P1ZuWS7SfhpyLayzSpUz2fub9ZWV3niSB5moPPFrMeb",
  "key11": "3bweMfhtrBC2vCfXnr5QAj9DtEBZaPqnYYaeyPHMT9Z9nNEkPUfe35ZxCNLVH8A752xKt1Ds7qAZo3dQnam4yCBx",
  "key12": "4PCPc7KCnCzyXWFDgVkXGRtotyk4Hx3e5HYJjrgUt6p22fTWmHTER5U8voYM1mNQyp8tbiTxd8hq5kcEngqbTk36",
  "key13": "5E5dkW974f4zK7xVzjrReZXS69Weq7ejn3z623SfKgJbGgBWe71aQYfdKN3Z13C9EqwTey2EEeZbJzJevkj5oyuh",
  "key14": "a1qKooVDU9N7KPfCfQR48UpnKbLrs4NZQv1iUZaHxd3zLyG8ojKjdiMcmHb3t3bMsN5JPnMNtn2GnvyYDaJNRnv",
  "key15": "4MfupsEwMngraAGE6nSoef87ZDoBu8HabWGNur3qcrT6hRvuaJUdYm4AUvmAeH7pSPMsicRGacQWeUgZAw4GhNQv",
  "key16": "34y31gkpat5BQFuZTuZg6esZWHKdwPcwYTW5czoHfoNjKCHnd7azRFrXcY52yauTzqzTXcWE88MWYSB6cDZKco2j",
  "key17": "3iAHpp9hUMWitRcWBEF59sEtcxoDVV4ZD1Cmq1LJ2cwo4eGhAdvPSpnr7DnvAM7n6LAuSs1pQcoi3EhpQDmhTSjN",
  "key18": "Mej9dtf1nBmAnrK6QQvTAET4ZG2QFAuRYRGLV1tXPtg2QANkh64F7yBPEKSmerohTYvyeyhD3hP6iN7zzgofZ8f",
  "key19": "3pns9Ftj8tgeaN3o5bkeahR7d5z21S7L81MbfE8vQXCQZNngeygDEYeRacC5QneDaAYWTYth9AXRWGX9Ao39S6NH",
  "key20": "2CmwbccAKxHppDkLYYLR14DnkZZfuzdgTnBNNqhtGwikrUY88Y5bpH86DLeCkfZNqPVuts7QauxiuLZ1u4vyApdp",
  "key21": "sfVTQ9LLQnatyvZzXxDiW6PaUQ4imJyb6PnWm8zF7vUoprv2P9m4oJCdFtejQjafwmahwzyHwnu35pNv4AXPhdc",
  "key22": "4oy9rwy14LaYcksVxv54ydtG8TiYLQ2tDUE4UU31fvTNvk7pyH7zmzMLoh3tYGTaM5a9KNZjXQwxaXXDEuWHuw7n",
  "key23": "4hnjkfFzRF4ZpVrVnCCWg96yb8J3EZUg6hh6iojCMePx8nB1kGs8DpSYeR5Uo4nzMtTEDcfnK6Yo1tBhkBh6SRac",
  "key24": "2Mx36zEsruaJseTscJw58seWZnFR59y32YqtBkSQW95jiF6HQ9N9ZZD5t1R4QAXBXsErhB4oB5XSmqAonzySYtPw",
  "key25": "61d7guFwhcjTg2nLMHotyDgeZCwcjuj77tUbTsmkRzBCVUnZw6tkngKHWvvnK73chFYk1hWMJ6n37BLyWQi2KY4F"
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
