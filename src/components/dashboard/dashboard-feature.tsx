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
    "4ipY7dJzrHKd6HNATbuKf92n7NSd7mupfTLz1ULqw8pm3vzPh3rGvzm2yhPVy6MrGQujGs5m38gGU1haMtgiqG2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4x7U1do6KnuTucPsAxDr81HuYSTo6bWA5ro1fWMxaDs9t6WxMtr4koCjXVrgzmrBqpDiaU6F7Gbuu5WrYknNTA",
  "key1": "4JjELFzLm3KJMYcoydzD6BU27ZyE7otRBJzKT755qKx11LrEYU11bFUHVoLzrerLpER4vBoR6TEKUx7815MNc7Ev",
  "key2": "3tAiFThHctBGiKgAqnBnY7vrEqmC64UKPDyPmgt8v66jHNYUuYfX5KQHbobPwiCANw47vngHYon7eeCMwk3FfgyE",
  "key3": "34rh7AiHHZ4yGXn89tCg6dEF7fod5ux79mdvtCPyzTN3E1Q4YJQL8TsE4FFFy6t3nQtCgZkiPFCYzTY5KXkTXPEG",
  "key4": "2pQiTfRwGg3YJRSyyodgRNKHckV5K1nrAi2w4pNJkFM63WZ8V9fqmC9nz2qsXmiQQgK1yDNfVhq1vaKZPz6dymZT",
  "key5": "5yKqKqa9ftm6WvB8B6qzbmhDQRF74JAHUjz7PasFyHfaWJpBM4HDJQKG9NGoW5X72xJTdPrRGzEArCgY1EibFjwB",
  "key6": "2pHBgmf8L994kX89hMHRyaMGU2wuwEa5E54C48eShN4phRXgsRAbcfGCHHun37TehhE7eppopLoo7yHJYKWNJfBt",
  "key7": "3FRsp9Hx4LJxgSsMuz3itBc8HYVWYvv5v7QH6XDs6Cg2YiuB86jjB1UoNB2WF5M5dupvk2fBGkaSsxesiKL7yFm9",
  "key8": "3b5K43s5i1aEjm7r6UuUqw9K2tCNdXQp81n7iGevdeH66woCFShroHwo2cD9b5JEvJwUPHVbbuABKE3bJfXijBY6",
  "key9": "5aM9uV8pT51uYNLGJ9t8k99AzvyxK8bntmcbyZ7ypDKS78PwCNrQLLaCi1RoxX5tPr5CLq2YenmUUaeRJ73o6iaV",
  "key10": "3H5A7niJ9ubRvsfQ3H4Yj4Knxpr7nTJC9cxrVAzDTWtsy5CE7tNkfXD71vjNSGTvgRg9ZsKdB9hmnuavSpsUL3ym",
  "key11": "3o4ny2Usouvo5HBNA8hL3ZZsMRVvtHohFDUoxm4dzjCb1Xbduif7Z82YJZH63B5aKx3DvGZvd5FnjXiGnC9rpCN9",
  "key12": "3T9mATawEX261v6of5LGXY5t8F5GP9A3uCZNkVKb77fHw75ayfc6zTaNpMcc4onSQnrbz4XHeUxME8BaRsSvoaW",
  "key13": "52PjYmfZHpF9hFVJhqJjerW9VKcosHYAfPsVmnj1MJq1fhrWavfVuUeVr2Bq3AQXCM32W3iWSQ3dbk3Qq5m4TQzx",
  "key14": "31bic9fAm13sLBDiYA2cbt3aDM6tpbHR9yagoktczUVNvhAZWGFncrqN4izbyLKii9AY8GPkN8RcPedrbEuHb8vt",
  "key15": "5AUNeAHC2Zi3Wzb97FxtyqHDu68TZaF91g9V4bfrA4QauRjcG83QG2VQgGUsDdHyPjZF7kozFDd8RDh2jtp3fw5n",
  "key16": "4TfTW7zCmhW3ssTUKg6XpUghLtAcf2wEtijmvKgBDLc9icqtroSkLRrZLpcFbk6otY1Mhhr3L8AExz7BGveBZLvA",
  "key17": "5Cj3PsyfSfjCjGr4qP9kiQupx9xiUQRfExZp8FASBLSczMmMsj3hn73QWRdgM9dWNv7p8nfv9JHrMaw1raNHXsDJ",
  "key18": "4sqq6hyq9kKyT3FFcGiTYrnUYZzcBgaA1Lehki3Sw6Cm99h48tmEvEbnrapRiSiSEJ3WuADnJJFUvB4uEXjkZZsP",
  "key19": "3khrksYZmy7sQp51FjgzWbvo53nyZZRFD4xH6D5jXgkFwyE5HmABHhtvuQpewxdEKSkJAwEsneznEEmDj3up4U2f",
  "key20": "2YxQYK9BtZ4nc8fYJxoABrmEPYGc4tCAhgkKgGiCjdVPynQNyQsbzxfdoB8SYpnWPHPAE97JV5GLumJUysGKvinf",
  "key21": "5gJ4q8rpukW9aDTxCoDcLFDtiZDEQU3jke81sNVzfAdz2Tr7xA3qDJa83SCvCq4nMqYdrBz3ESbTMQnnRsaCYpmG",
  "key22": "59kbqWfwSirvRYUL77EpjJGep19kAYCYKjpxwQdr7WdTBsxvHySy4MVZaJnfokRZesg2NgLHjmryM3AkqSWtEFdb",
  "key23": "3789NC43vZW4mqwjh2RExyTSN8MmUg7qFyCJHgQaDsnoefcP18XPnvKKcHmNA2RmPe6XDTqZLDVvyTCYfZnvDCcP",
  "key24": "ekzyFJAMjswVuy6BVQoQdonhugMhLaChxX92iBN4YVKCZXxhD92onVwY9mTHguyfwtRCXTm7oE1F4HbdYZh78px",
  "key25": "3zbFTUHjuyG6QZiofJQMt7ufJBoedWE2jpAT9VEmJjYeiwqBRG4byitHBMGw9WPnWgF3ZRSdfvR76haeQPhsFLRj",
  "key26": "jEuTGsqMtYWwrdNsXVSrG1ykEjR5mvLGikwLwtX3GhrBu38ayEtUABTZmfkcXTNFRuUHKREPmnRa3M5sNMhTa2u"
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
