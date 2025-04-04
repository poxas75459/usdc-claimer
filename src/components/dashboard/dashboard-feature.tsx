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
    "5KUp4aBjHw95zy7E4AGzfDvUxu7KgUghijUpVuugx6PUMzCTb5Kp5NwmpSNh1yRVwLJVUNrNkzCh8cZHS7uYBrGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cW4sgNr9hGYcn2vLdH95C56WRAXvVLSeMMs39MUdXWTHSdgEqUBKQA5ucMDtngxcsJvPcczTWybHhMtKP1rEwRL",
  "key1": "2q45nqhD66LPjzxnPSG379AzHgSkoUfHVUoki84jmKgeV64wCwy9r6EeB5u86vXjjteZPZWGK71jZ1kxwtv7jzDN",
  "key2": "3923okDGmeryKRZbuJXEdaxUtkE1iWEmTwCLJkEw1fvXmRJHmstP2f6SMwm1WEfpZXVuxwDaFfSiNvGuSTSidfx6",
  "key3": "oafnrexSvUmDo4XcQX1cMsgkk6bDDm6WNSQ99EsKvfEgCv33rdvUt4ppzxQGfYkppXXijwFJNdcgjykqH8FzHjt",
  "key4": "3v8WLQrgJA3h5EybFVDS4ueCJQFWo99qjXLiidTSi29dEyokxvPNjNgcshT682Hkg1upTKCwsvZ6MzWQEUPkoifT",
  "key5": "RUwb7WDYHmpoQoXXJbQtjzXaKBamQ2r3Y7HCJ4x3mHNs2bCPKBZaVNs6xFsqFaNsCZVYyLQHVJdyZRHkedJkM6D",
  "key6": "5UqotXp3FNZzjwaEkTtLX7c7hxBVFwTb85fW7w91J7Ah4rkCj96YwSP2d7WoHkGTSk14NfC5uX4DRdDngTwaai5Z",
  "key7": "5qrofEiEwboH7bEva8jRSYAJyQboDqanU4tFcDRnYn1pquZFCYz6KpM9nLTv5H4bVGiBAovqRZqwUFeDTBvdkpP4",
  "key8": "5Z24wo7tybcUi2TJNvqVsyuPzoBKnvKirL1tj61Y4swxfEJtVGqZdKpGnDn2cQBos2Qc94CNLYQh9MSSmHFnQyMn",
  "key9": "62H2MgpJj6fZUoSnSENx5NbddQe8C8wv1dL5j6dxFfpjmwbNavfUCgm7tzYPLCUfFykwwFf7vf82DY8shXkvw2D2",
  "key10": "49oSDzZYS4Xy6T5Fw1qVmsTC9UeSScuBX9C5T9TM1XgTvDsLncsBzx4WotSuhRDRvLv2da8rvo3u7zxfWJq55DjF",
  "key11": "65tKVK9AEPFDxKAiCn37tTAkV71AnMEjUZYjFdDtkKBpdnt1FHdR8mXAhbArTTVGaJvs3uqL8stydsuSF5ba56bD",
  "key12": "5jYhjaLfFe1vGkSqhGGr9EX1Pc8SX4nhxGMGGKe4rQToNmXyKiwgHWLoeMAoajYEfGGJcupjYWoPgWgQmpqnCPB6",
  "key13": "4LvDuw6wcCTwJ4dYeZuh9sXrNDeZ5brUwcKhs5E62dMV3WGzuL2HLWh5GoE1iJEyqTuXC98hRCasHE1iikzG11GE",
  "key14": "4DJWeKy19GP4KrhHJxdsvqcXekMdGg13ccWQyybnbXDy8yP8Zv59fno8CLt63uEopwksok7TLHvKrymBdTuH6dQz",
  "key15": "2Y4VvHjoCFub7PsGjbFYQdHgMpLbWBUWR2ePu3R9Rb32i8xPbjEp1TRR7aHP3xStWeJETQRC5nd5ndqVncoJNNsu",
  "key16": "67h833wUYDcppXg2hz57SHb5MVYx3r1QTdtixYwEHif2DcL41BCqm2WKak47mHQbyMfcsyYU3xCF1MpWKDy4ZWV9",
  "key17": "3BYmpkY8tB97WWvY3infTX6q2FNYe2KVLn6R6DLoV48GVdy93U8MqDRrx7Mph1Nm6H1oy2UtirLkbkc6CmEojYVe",
  "key18": "5ar21vqJGQe7PMh7F3ke9tPytREF4chG92pZxwrCS1bHSuGgMjy7g2niWnE4d7fFYdGFGRqfY1Jq6gxp4tAoSXES",
  "key19": "5KNSBRTGHdczwydLiGenJxDwKNfKG8XGmSHAP131smYdx9B2pXHpdDE2mDXUF8PRRabFxvn6cgqinJntLtSGAYif",
  "key20": "64869k7CYi7rA5yzGMxay5DdkWLm7mUcNYHM3tHu6pLtiDzWSzjZCpVV1unvv3FGTnuU2yiYEC5qAzS754AHzF1q",
  "key21": "23mGggsJRXLtt8gR9joRNfgGbQvvkzZgLXYzCXWZ95YDVwh214vfxmQChYLfn16nVPHk7GhArA1do4xzgGqSDQ87",
  "key22": "FTZusiekGFv9bVQ7jkRkhLkxPvsyEbD1zfLGKBSHdnAQmRAdE1bp1nfHpKjBYHyqW5hZk9WHFFFt4yXGE3qxupm",
  "key23": "3awwSgDXdYdMCorhWWT2NKA1XdN2gJFJU1uGvP3dANgfv7W2ywG1eSTqYxQGWxYhFYE3t8mUBNDMmVXhW9Udbmb5",
  "key24": "LmLMnsaY1YcBcvbEj9txSrCxz16gNDNtJgFXUYPzNNuJEXjitdMuEWMijLxxtJKPxh7SJrazoGFBQQKwsmDpPYV"
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
