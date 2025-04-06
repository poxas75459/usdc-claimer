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
    "4JiQAsyMLhcXWz4Vw7YPdSQaLjUiBxJYTME7AWmL3XuVPiwPsghnmGYz3cAeASQ4JmLXkx66oVYHUAqh2tUkB7df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVRnv29FehF5TUo7ot4iy8Qj8whkQnccMaeJFiSM5RMF33fxMG4NVtRoTkiMDaCYqYMtGvgFa9Wyhb5f3gwBjEY",
  "key1": "r6oP25rShVuxqxEecAPvZo5R9FgSJrWxnEZHAF7hPCGLnmcvp5qU91qDS7NWU3mbNHdMwBPeiPNYyp5LEQijpYb",
  "key2": "54E6k4CxzDeQJsYNej3Hp16Be5BTca57Zv9zGi7znEr2wyDHaDakf4puEzQ6RRxkThfUbzJC22DZGe4uiurAdG2v",
  "key3": "2qA7SUnjUmZDyTkgYZXVTJU2iDHTjTujiEAx3A2pFEdmfgcQEVNAzJbHvjsbn6B19nFno1RxqeoxhjX8xEDo8Pcf",
  "key4": "8B3EHGJbW8aH65vna75UUQ1VaeLbdCbiomSJ27EUGtxrvVhfP6KpBFUiMCBKba15KrifYrhbZmiGCGe5cysDsrh",
  "key5": "uzitJdY6qPEqLML6kkM6atuDi4kXmF5dxpAMgoj7Hn67HTjLTMrEimngepc6zXmAbrvp5AizfuDtU4zXZEWAFky",
  "key6": "2x7KP9kwzrUcydYUJ1etMz2dxWk6sUyAm5HXS5Z9HPsp86vaYCe4L8oPWdrqQUP3AvuZRK5iabc8u1eV1mYxqmyz",
  "key7": "2bgS4VuRtJWPrfhirJsdBDnth1nm4kwX78E1G8z1FEpC4QL8RrrgNacKQ5sWGVjBTBy9fKjmuRomZfyZUEpJMnmu",
  "key8": "4xNEd71QCjtNe8kVkvxroFh94BXVc99eMmGBHSiAyGofsRqcXCDWsiih55ubV5mUN7TFKbSggTpWfnKiTNb3LPAV",
  "key9": "3Quug14UxPynk9CmPR62oUy7NMshMkRM6GncAZCncX5ARrq39HsVYiC1SBqqHzFWFtt4kf8oaXguSL38uTXyzr4L",
  "key10": "53ELRrGnqdCjkLQNnmLsf1ucRXFZcRQ3RzUhNFHozUeRJVTSBwZu4Hnsq9dh8oDLWYATp9MpWMwbH2twGjwAcZby",
  "key11": "3pEm3hVjix4EVugTXUmWEmu9CfH7r5wPvVVG3qfbHdpPMshbLoVNen5YHjiBhuZideGXuQS66U7YfDukjtzBN7HT",
  "key12": "241ULKUc4sha3rL4vWq7ufnTSfF8Cgt1snNtE5YFpbQ8ePY4gyigouJVwbQJUWuq53pv1FctPFBWbBoaq3Udx2hs",
  "key13": "6177HUNUeymkRubNzowgJEazkKBh7Afq125qtkwsnEYGhx8pkC5L1kzaJ5VMP1RHaCgszQ3oKuSxiRCaYSfyNzFR",
  "key14": "vCjqXTrsMarSKshUzERJ6m9UUCTFFBTbt2UfkvQuvW3mbgf18zbKupNjP8LfxYnK2keKcYW7KyUrKR4pgLGGPaq",
  "key15": "5ZH5d254tsn4DHeHpdfrv6oQ7fZNGyMGZaBjodXuVVaYgqPoVZduLuX5fkRRBb4HXbEVX4bzJbWjjGVy4GF8p4zX",
  "key16": "3Vi9QYSU4JVcSjD8m39kEwZSDeJWSPaFAvvcDLkwqS9FLFNmjeNb1vU7cADnXjFmTKmFtUHBJcGxaewq3fiwM4XB",
  "key17": "3vW9VNwVgFrBycTXBqLCNE5Z6fgipwjYdaW6mF2WYD7NWc63bj2v9SDrYNTDfZUYauHmDgZmkcfrtkFVyW5xWbZ2",
  "key18": "4yZdUqcZQbbRwKRHSmLDhrfCMBgo3jPyZfLrqGVp4c1juzrJFPx4AudDQMXXBpB2WinywxUYnQquNcdD83Gzhqte",
  "key19": "3U8dPGmuxaMajbEHaR3Ezq2UkwyDwnkmtX7V4jef6KyKqsWB9X5C4k1rsFHCjACRzuBrjGRAn7stwGvfckMwCFe9",
  "key20": "4zSdsBL8wHKY8fXJzKh5MCMiD83EuBCWPbdTEwNrMf7PP9YHsoit1VpRE4L9tXBFZ5Xx6XKfrP6TSxKvsPU8CPWv",
  "key21": "2gh2LjCqwYhtdxNnsuV6bNqn6hNGL3CBQwd39sEVf4H4Um2NRoUhBMkFLAQMEjJn9ARChkrxsSiKx8piCUTc75gq",
  "key22": "25fmqCQG9KA7xmERu9B6C9PLVUvWwQbSCBpcH5LbSVVqDqK1RyVexotXd3Kj1XgP8BwHXVnyVTyA2WKdCUbwfWA1",
  "key23": "jwcNgia42ZwbJpipchoTPqmsc5tvg8AKoSg36djNh2HedTiK6uSEx2S22mF9LN8TDR9gxvMv6uwrDrFRVLn81HK",
  "key24": "4SwPv6qP7Y2yXhdaAhGxLKAmkKUNAYVkcEBAUp3SRbCW3B2sHrMtuHvS2QwrJkfxsUr95BiYfTqQ4WQSM1WvGYmg",
  "key25": "PHKSNccmTwYEeWZQCyHimgVTwVM3DUhdSyWfAgQN8CAYKfqWfzv6iyigpW2wzeCawNugB8A4PazL38Qp2EmVzET",
  "key26": "4AN3J37n5rqArKteWuqDY7Ytz2iE3zo4xCdJNAje1EoaZvX7w13KwbpLhqomXk7e4Ni1bGmVMWvaf7kK52RkSMgg",
  "key27": "57UfFaoidm7fBtXKboX8Wo7ftrQJrEeVf9urt23SaW5zFdvovfxMS4n9AG8obBS6VorjZbjqCZsjcnqtzAQyHEHL"
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
