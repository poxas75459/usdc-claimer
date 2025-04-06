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
    "WRMMYDP4PATPgA7NUu2ZeifM3CfcRm5em4py8KMAHbUT4wKMHv319pNkjnSC2yszKtCasgCMCKSX1tJ6dz3vcWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4Bd6J7p6YjSca87HEkYKuQn5tzxjjvRFBSHj26ZcXugusD3GnMEMo5HvmFBdHcaU3QznynNL3pV5n1oig8GVuR",
  "key1": "41BQGHj2reVkf1Vxuj3dQGHg3Hu6wcDEWMrNkWe62uBLriZ1Cq4X8KYfNeWym1NtvKkK56qgX9Vpe6mC4r3cKnBb",
  "key2": "3rieuqAxpDHHLDoVNJUMLQ4b8ezXQT7wQaN4CSBu9mgFde1NG5MkfxZcTHWYB3CdCCMSNLAgu4nUKEDVUERXJYCk",
  "key3": "4rBLn6ryH4MUpfv9mB1VTQL96j1NfxPtz1185yjEY8iHBfdEUAiFbLK9VjJyJzNqUnZYk6ahGf1KQo5sFeADQa5Y",
  "key4": "wDEJ8AYJEBA42i4FdvRY6aVDFAS2dX6ioH3H2PEoYs8fSmyV9DfD34uzyThTdYssCuw5i7irpAQQGTqrWmrqBp8",
  "key5": "2VTe9f7Y6GhsnJwDmhF1m1j18RmCk52iCYTJwHoZBRBDpMy7r1TYDCsYT3EsdWMnJyoNWQDFAkkyhxSfkuinrVfT",
  "key6": "66J4mLbQguoSNZG6MhL2MLHvbU8G29dvbHWae2q8dk8CjJLzCnohe2BpsU2scSE472sytsYcjA2VmHFPUdmi1vPG",
  "key7": "2GHe2sSXJhKimBoemHigac8Wb9S4PsFvYt3NpHez6rrHXenY8n7SdN4vtCPXgWcnry4FryBrNX7eVhXK9fm4MKTo",
  "key8": "5naHpfs94E6o5botQXjsoAatikTv6TwUXADYd5GA8aB7J9NijaYgdaQaG8V7xemRbnxmLj3wbrDaTfNSzsRN8tgt",
  "key9": "4nKcV3vNMJjYRqTVUTbwFW5wQqwqcNV1vhpWfLEuzrq2uJpbefwPi9AL8C8toUN38FJiYyR5QqPCgnT3m9kebzY8",
  "key10": "4p6eNxisGNKP29vXD4dLBGWEPNU7KoHubnxPy63wo44Ne2GbCs3iLaXZ4WBY1u5xHZHRhYdL5oRym3U2BXERsTYE",
  "key11": "3Cmy44JmrhmqNhYgi4CBcYio1rC79nDFB5xVoBHVT56JKRLrgAvHRA6Gm9RW4vvFxAhuw3DEaUfbXGdu8GAGyeQy",
  "key12": "5MG16RNB26h6fErmCjFiMDddWUuEqGA3tzfB7mgYGxPqu54tMHGr2qVfeZ9ikTLMNCrnD2gPwBzbE1NsHZh6q859",
  "key13": "4BxXcvbu2iVSaDfboxMLRG9KFehHbZhH935L63LPPxMkaTayanjUnyWbxy15XgFograkgsuyMPzXZfdRM6VV9M59",
  "key14": "GWikW1Ne6ynssiHYrbrmYEKJcFS52RR26vrg1K9Tnqy5wjpDaQxvPaN3DHowz9iBivwmaTfxrcBcqaGuHFUXBV6",
  "key15": "knRa6qs363utdZwoi5a8SjztMAdAwaxNZWQxNEtR46XCyS5GfscCwfDWaA9SgMFp4tRzPUoy4aNVn7jL6hde9zg",
  "key16": "3zuNnAm2V3TtErmp7wfrq2LnkQGtyuCukBeCbC3tENzUDQbDfsd14ZwcTmvptSZGWgHVXw68PzCEkmEtz4R2dpLo",
  "key17": "3ajh93aqjQ1RKjjQtcAKppWAiNH9ZqEbvGfthWxgbFGDMgSx2QT4d4gYiwBDbt9ese91gDrmcyNCY6MVynJfGBGT",
  "key18": "3gPsCHhDCNjEdTMcgV2YXi6AnQViqZi38UTpNXiR5CwfZ7geVCPKFq2QPJCk1upmZs3BPBpTfNdU2j116VmRQFEY",
  "key19": "2kP2gKEUw5xFBZeGaJjyJ6SRJ4T7DYFrEWtsFNGTkGHm2tpLsqtoXqBY7z1GjkeUZoYC9WzRWiQZuGBKwu6SYwjj",
  "key20": "3HVv568p6N5CsZrNCoEhyQSuKegJwZrUAW5Su8M5Bx75fBaXAaK6y6L7KwJrzjYWu7yDZ92SGwnXcyxoc6upihgk",
  "key21": "2yrGeLGk9UWuncr3yRjAJUZJoHguVVCzs8jMQF4NoGU29UyvTrYh7HZMcz3L3hD9sEyz2YCpaadQEm2h7ypvxqbY",
  "key22": "2S2EFHZMWtGvYCQkkfSSHeq82hkeNAmaqqARtXfrGxvo8zJqE7SKhL2xCQciVUCAgpy1NL8YRthLT9au5YKSSPFV",
  "key23": "KKs25nxiEEkTymo3SC4zKkDt4bCyfhWMf3epNWbASRzKV1XsHZjrkBByNymoS49qTxs5frirSpyVrkQYpKZVSLH",
  "key24": "3ManzfSh9kui7xJgFGPvTF97NZDiqKwVMThSpDYK1C9H5oiqY7ZQEmfUXHQg7YG2sgsVUEBtfoHjhAQkpMY2yjCz",
  "key25": "3zDE4u33SdJtzBA1LSD4X1TboSSvXp8JK882mjmuQP8kTHg6iREcoyLH5Q5HsGD5vEdBKycWQ53gQ1PUuFDC6QYK",
  "key26": "55gW5kJExoS5dfTaPQH8R1hssnN1c1umyCK9UJsDj1pQRuJHaWJxfKxMzNaww5oExYjgweeK63mgHdfZXaXTnQBk",
  "key27": "4T91zZ5ziYV4SSwjJtB3cjFYLXvjhgQxSPaGw3eJJssU3n1Ebm5FRPx7zrDbHvcVgafuXFYeWuhnzdcbpHKAZjAf",
  "key28": "4TYH9kCP5ohiJsXHDXsd8sP8MRGV6CmhCM9EC6sE5TEeurWVN5BAW9BC5kydCouuUKMmSpD8ScC2NV7ok3nHSZ5Z",
  "key29": "33vcaEA2MZmWpxEZ1tnAXqQ48KGjPKGoidsawdTD6KMqfzwrqGx7vS4AYYHa6xxecPNeGg3Hk3W4n6X4atxJQyQV",
  "key30": "5yZHPyXGoQek593y2PtW9S1cGt3Uebf9CXQtGeGCHwAexC2DmwSAVbh8LDQR7ptoHVnaWWCLPMdehwL5TQcTvTdY",
  "key31": "2Tc7vGuVvRVvx3oJoQcE5u1atAXZG86LL7joes1JWrrPX3PMT3DEtZM8nrEdtESxgnFoRz1ChXq2eWa8KRttLrDP",
  "key32": "2ZnHmGXbE3Cx24AGMmfrhcpY3LrZ9MPryuZa9tfZ38QRSEjijbcs9P89X1U9L1WRpe1X28bKGheraKNaYQvm3b3L",
  "key33": "4AWMJUoNKgvZRdjCWVHUTSAeQ3eRsKi3rt8L81h3euYmhectsmKjeq5zcKMpmG1YgNFe9qHHiU8zKuzNxLeTKUfb"
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
