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
    "4a8aSJkiRKj1BHR26W1252iMCyfiQbxxVLyJxEQmEf2DqepMu5nJeCGCA4ntwcXan3ua9AY8oRgJhktgGrkpeLFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgvsamCVbNjpJDokJYLVtCDTPyrxpuGAuwuPJHFTtmu1iLojx7tK9aRcTG7eJBtwpbSxYRT4Uf5RCZKkmmB18w3",
  "key1": "336LMRFHBx1iX9AjqVSwzgqKQCuefXzpF1eGUNMafsiKhjWoEgWS1BodghvEBNRPwXfzSYmuTiVyYUanCqpgUq4k",
  "key2": "2qRtotDbF1KHfhy4h4nLBbU6L3c3S4BVVeP5jiKWgHuEfPyQHEx5WpJeEzfSGE4KK88z6wyk1p2osD9yvDTrBZ8u",
  "key3": "3uKKLdKwPnkiCFx7r5bhSVy1FVk6XQXdiQbaCzVAx5QpRzwboFcSUBbxJ6s5FmbPy6s5du975z5jWa4JnzCfpwy1",
  "key4": "5yKRGWdKriPhi29WwMRbWNwoH8s6uSRf7ZY9naqqNxgSgLeSiC2rz2pp6Uckbdafbk3SfCi8ADw3bj65hgDgPuxa",
  "key5": "3CmkGzVNJ4rDRBEP9LbkqVUncom9p8NHixGPu27v6ffVbb4hKgcfVDnyYmSSViLyuh7XPaSamV6rej4jttasjJL",
  "key6": "4zggPQzs5kjiqV8mDRrq2erestmM2ro3RTgAU1ahQP4JE1dBocEb96PMg3gXvEECJLA4rbEXM18EsKsPKYt9WH4Z",
  "key7": "2wjNP5EYPA4x6Yedd48JyjaSMaFG8VEjCQiBgenu3D3XMo3Taz8XuC2xABWuML4fqeHyaUbAMWSmKVLYxbxxMVSH",
  "key8": "TbxfdcnL3nUvTTrKwo9VH8GXqmvBp4sLPrT8uh2Uj5A3ZkxPThzFvSUunkguJxvDLzPUkjkSddZGvzzTHjhjon7",
  "key9": "4Jc7nY3GQwiCfscpL4egWnXY2QcfmqRKodcsmqunGx6mQApEDeuVWJjaARSdcXYBsXXvC2vaLyjBs7Zus9mSy6Sh",
  "key10": "439Y29AR4NGgHm8RafH5SiT5BZXhVzxLbhnPdNF1ez9Kk832ssx1h4JZ1VbNu1GBm4xwbXgwKnHP95wqu4fA3ys2",
  "key11": "38hfV2Hs95hKoKEPofhJd23cxgwRYMnmnfMPzbGEWaXgDVkW2B2oPbS9d8WTJVMAPjujGeCexsJKpEUS2SXnnmK1",
  "key12": "5Tn5owWHwtzi6Ee76zHsVTPsE22ksWgmRiPUaGQM7uEadZcUErSzi1LAWyZi8MJvrtBuyMMQadZzSeiSMZZfkSpE",
  "key13": "2YDTv8z9wRzikaKVNaaZaeNwVyd2cK2Z2xk1jrukQJAdvn18Va7WgY5D46GJEHuD1voJWY2uE3rxCUgGHYJdozju",
  "key14": "2v5XzGco29RX2JL9khCKvnzWdHrpzVbuqDYxddGLeM1KMz4ftdjfxPn8W5n1CBmKgqrNf1eqy8tQck32KRc9ggsd",
  "key15": "2rApnTKSnW9RFYr1beAvpAnXLmtUjYn5ttmRPhp7WbHhYo2ZDbjqPQnNp1WTQee6oPUL8S6grozwb2FKSMQ4Jpt6",
  "key16": "5qH9An98vTtZ8o3TXu7uFz53a1b2FuCykXL7x5MKvzGBoFpA3c6g3TZdFaUyGhYWKpALkRCW21q1NNHpL4mPsvCv",
  "key17": "29W2NYmDkmH75wdmqEk6TH9GiZcAminntPmdAP8CnLfoBh8sDnqMiRrwiubgG38t7iDiV4i5eiuWhmjXtLoh9xYo",
  "key18": "6565YyHPs75gwPmCvgmVznQKeAmTTS4V7HEG2rcBxdMgtYM9n8EAidsMcE1uNcLu86TuvVhoo9fkpc9Y2qeQAmih",
  "key19": "3i7s4FWZiVdsQ3rC8gaKv1DjaPfrCNtNGnoB8eRGZuYi8RuL3kTMcDxELSKuWQV23sUjQDWSaux2v31ZnzNvdPMp",
  "key20": "6Jfa2rMMhqZvSuMb3uvw6yG491EnDkbbc6Y73cLHqzoLePMBYXTyWvQNSZVaX8Es1mWhNipkvBfYxN4BqQU2tYy",
  "key21": "5gq6v1ufmKkqpmnS2J8To6bet2ZJfHs95S6LLEZSjN4p3VkXfGQ8g7hAVnQ3cJ52M24oiixx7SwcmFNpqJnPEEoN",
  "key22": "29bVUKtD3T5Lfr8vX4a4hanEsgRSckgaaCUwrXZJqjQpd7GqhB2vqR8kik7QjgGtNAgvHj4FsWSBsfcSj6LvFqTL",
  "key23": "bD7T9heBBc8tuNK63kBEFEGdkWW3FdqobYdPrN3GN2er8xPE4UWEQDV1rPTMmHrujwVQAs7F43UMmRLos9pkXSB",
  "key24": "56yiacTPoMjhnjcAQLoL3HvF1A4JRKp4iPtYp5KbS4wecJSymXHXzSA1gr8vxWm1xxUUGnhjUBw8gWkptBFMqx54",
  "key25": "2wnndQajNYfGqkqHpCjVv7Zq3bQSpbkUD4DgcnNRdeqvWP5ngFfP1PT1eXmBCFn5SjnzVHEwxEmk9LQi9qP33oTy",
  "key26": "J829TUfUbXa48ZJfjbUaL1mNoAh3HtqWKXavvpf1C5wqKsSia5Sbaq8DTnYfS6Zj3y75mcNqST5nquBeXYFDu4L",
  "key27": "3z8ZaW5nYztFMWB4RQ5BLVnGEKTwvTvcmkjcNTCcWkv8mtuDjuDfX4Wh2JZ97cfKcTx15Zig3oAVETygmiW3LQDz",
  "key28": "jYzQ2N4riKTbepeFWhWi1G67cwb9tStAmSTmv81vQiBsH6fK5hDjPwjUEqXq4FCJMudMzwTeREjivJSVjgMkatm",
  "key29": "22zcCp9ohc6vUSqAasM8ypbj9yjwLosUi6goQfUTvVtiVpAnhKgXkLwttuSsa6kEhpq9VjTPn48L9oJiPQwhGjXS",
  "key30": "5Pvni8uXJWv1HjUxePLBkq9E25CLk7HgURbdxJtxYsLYry9wxdj131K5w2gNhQkSH2aUFEQYjeTizx86thsqnqjt",
  "key31": "5oHnp2i2CrURgo8emBh59H2YiRYbgAetmGrvEC86v9Rbc1MDBGNu1YtHYYjRNDmR163XCw8Yk8An496vWkBwBEpK"
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
