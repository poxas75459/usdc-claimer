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
    "rSEKADsDMjew2JzHotBTGrGdfWF7eQiziYqhkTLdsgKA2pYF6Ta9qqPzTS6ntM5fysTAJQMu81aPSGJzAAZr35v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQKGADsFHX8t6H7AYmkw7W6ibSPXF5PYK7QwWk9zn2nbFWsjaReArmRth1amU6gSuCxorYXJjjTNyJBDRxvGkiV",
  "key1": "637VgeTzYArb6jrrxumrxuWdGtX5RNEgn4uwotc31HS1VUSUha7C7DXQy6tY6dY5yFY2AMz3FBJSC3wgfPHBpTwc",
  "key2": "44V9y96jnKoNBxJVbaw97MEvGG9sjdG1CLFdiutkvyzztBEEAhGpgMcmiNrhqtTy9N3rJyeWVnNLP9WvQLwToCrV",
  "key3": "2dpty37egyBF7x18srbRfRGhqxV2S6g1Cat3pWdTFoFScMWFoCPQZnV2h4bfSa8ZQ74V2mrmPk4cwEdxr8ufW9fN",
  "key4": "25vMRurqFs7jzPvYa6L3f31Tr1NT3eKLKdrAPwkvnvu4AQb16H5edYiFDM2sDPj4bosBUvdZw4ru6zaZ7rkdv1EG",
  "key5": "vNgMZFFvwa28ahxa1TfMAAkQ6oNydJLudegqGvHsowGMaFjejBrFxmnUN1EJVm6GxjQxT9ffxFaq46cWZp8CoFF",
  "key6": "Nk1Bq3Cqz8VyFrpbqv9fxqcsnNmX8imwPMk2eQhQyj2xQ243PS3QcGHJDBvi6EY6BoCoLdxomZse1z4gdFD1wh8",
  "key7": "5BB8Q42n9QmmRaR9Qg9NChASMTBSkwoNWziJVg8qwXDWHkRRnnxfXNYnxzJb8dTdkhkjZonCkhFfHjsfycUeTiDZ",
  "key8": "38znHK9ruzGUdT1CREBF5KzH41ZBGDiixZoArTN6eY7yqbd2nqt8X8MxrrTmTHTGxGeupJZASgggHYYCvykMA5AA",
  "key9": "xn51mtcJcddg3zqC5Z9ThZLraZCVNKWTXoFG7jkTWx6fHiBhaDYcgSG1bTJYrRHudnF4N1r3JsSWY26WKA26Jxc",
  "key10": "3KeQCMiKhi9GfgTCd5HprEtXLhAAMRqgzVzQZv4vAj4923z3Kh3vAXdrA5rVGYqnahKzFuhL4HnNbAzcgXBaewTz",
  "key11": "4uY7aGKfe5TzxbgxD2xYDKhcTxS6KexpzUfqNwpJiPdZgsYnUmNmkRXMNeQVzMMb5egATcLxYUBdQNw2Z8Cp85oq",
  "key12": "4sJs1PGm3wVw9neM1GduCX8BkmLe5sozfp42N9vQPBEnAQrXkpHRVuZ1cA6c14GSJZePcQC3ucZWUb5QZwLC8AxM",
  "key13": "3w8BN8qqzxYkJZ5FeK3LB5FTdcLuDSeeigKnnXRVFud3i2exzbzssBw96PUGNiLm9w6oJqPSG7rtDZsdoQpeD8P5",
  "key14": "3oWUQUean4pTTMCRJPBRYg1aEiQP68tGLp1fzrqKVS5E2h9hEdHCYbSDmmp7aLDiLJaKRJea4p43NhzTJ8JP7h2s",
  "key15": "2hco2mAN2WEjWLURTCuimamjMTeKszC7s1SJw6PiWKQe3Ag3oemh4jpZG2h2bM5EV8ZprnWLhzoEUnwWVWNJdWgA",
  "key16": "2t9nM1Ra4wKAS8aKLSwGtY5UAppazeXmkT16Y2oGKhUY9YBPqi2MrkSNjzqCJZqhaDM4Gnc3zner8PUFmQLZWaM3",
  "key17": "3CKeTuYEGxs5LfrzP5Fr7rT9RTS9AjKMw6MqjdrsCKcueT4NTdoHuwk5mgchwnCBg3ESDMDK8XnzscZm7DoME29S",
  "key18": "3NbxbR8hsE1JL2kKvcTtjS9MzxH6FRrcThqT6kHw29kLMwpHfckfCw1ZLvhpssCsFpvyyqBPPhWuPKUAhxk4xGhU",
  "key19": "36CEPfHb8iu6nugwQWYKy4yh395Zd9gxkPEPk1NCPbH2EJYR9Wu19aMHW3HthAHtVptRDnq9LvFfTUrsKYq72u89",
  "key20": "5jSwvXupo2pxHzsSKeKT1uiscBKYbRj27uhVNXgMxBYXUcRNbFvpYae2SBK4syBzpsUEUtKLnp1WHZYPGu88R7tc",
  "key21": "3Mp2G5sXi6ATZLf4NpBWExEZseLno1yS9dPUwNq3HTdG18fNCREXCgVQM8SZsHNq46U39q12X9woq2euZfihg8rD",
  "key22": "DaarUpxC4tXN4VUQU4LFRc3tzrgmiNfFXhxfpVtMECaiK98LQVE7s5jQijGdREZ1jbkKoER5wivHT9BM7USR5TM",
  "key23": "YNjQrFHMg9zecwAog3gvaUQUALGUMQivVQb6XjXShfCMG4kikXVXC5zyCTdv83MHCHBSrZRTVeSYETGqXhq5ide",
  "key24": "2hAW9XdXip4tRFQrbfe15vvkDFFGvJeMV3nKH89YfjYV1WdytFR6usScycLg74mKX2cVFiCb18fybgWiV4CQZZsA",
  "key25": "1opg2znmidH5HinGi6PR6FEk8WWhtZwVaixXmiLRGb61eouuyeiQiNbYnxLrqLsggmXXpXjEdHLSYMxn1YdKeq4",
  "key26": "4LtShdEqQLUTPiZKi14zr5X2uXV4cuJ2jnrS72Qgt9fFAREtu2xaKCkgx21QZGqqANHtz9CgSerjeC3EvB1AHkNS",
  "key27": "65v4prMdmHZYa6SsSBsFty9e1JZ8EaCYq9cD2BNAsMAd11LN33SzFmzuX2PZ6XcGAyXaqMH3B3U3NNejUhwoThNC"
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
