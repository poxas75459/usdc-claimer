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
    "5avkJqCdqu9a3eTazx2W7uPgJYrwJa3ipotKLeRYWa9wMKoWZop16Cy5sfGAHSX7LjveaQ9X5ThE9Nck75GWHu6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k41BJWESDtjtxBubFrRAghEsJJ248wSuTCavMyFhURuDgM9JoUHSc8Bff2hP6wCJE381CeD8enjBLV38KPDThUd",
  "key1": "DDVe4Dm9t7wWzGAL89GM1HeBuENvavV3DwDXhME8cSWpCtqyb4gDYkwdRJsEvona55VrGsv9qz9yHGWHZorC2MS",
  "key2": "34pUKYGqEZCtThRuArbAp4EBbAk6zDQWvYKKGPv4C7qtXF1UJNfieQoeMVLu91xjbE5hXZRaF2XDDhUKyaVJx9V2",
  "key3": "ayKuWytkWTkBDtmNrZ3mWvm7ziL3p68peR3ohaJHEkQKTtSB3yZCciEei2peBongTUNpwLkTBKDLf4qtB2Qic5c",
  "key4": "45YCqM3TH9qjfySTLhpk2Cti94nsK1WhmnB9JbMELbwf1b3CXS3EyJcRFGDQsyvWZtEipLn3oZinDB9LdJREAjDH",
  "key5": "UQrbKq4hV6ixFAy4LPq3Wd17npCvC9GAWruySsUfRGkXEQJ4eBqGE7nMyEcSvADB9r6udsUorTyf3EZ5vXfqyja",
  "key6": "5r9h77msmiyGp7qGbSLxRyrkown7nXX1HCbRHpjQzZuU47cPZMapehGRv7vcgHUKCwHpFnaS2Qff1DReiwLsdAX2",
  "key7": "2nMtAyTsHpfe7nrbmyE9VD3hjfWVz9ahFuxVTYjAzXj7T8Eit1fr8wwbnWE68UN8XiHhwCvHiDWL3Jw3Adkgb1ot",
  "key8": "2RFtPvtXykhAFgHCqbriF7whNsRAD3itRhTZrQMocix7NvkjDyJB5Jsv5rpEN2hARisHB78hfmrRnfLcVD3JAYTW",
  "key9": "LXr4Jp5ckdhNTRqJtCdJZL2PZ9mFUfp4Q8op9E9pGYTNSUsmEGpqSBhbE3VhgLCCqtiNmJ6NsMUC7A8XZW2JsiN",
  "key10": "5dmfBjtQYZ5kP2wqJfFjgbcmJmSVaKqxWZSJPkyxvM9Xg5wdvB7WUrdNxbt6jDmPgSCgGo8sC7LcKm6fEj4x992k",
  "key11": "5eKF5RQSvh1ogpDquKyyim1JZgwuJVY3aZUYsXJdreRAKhfszbjcBEmmhCB5meoadDQf8Y9pJTRpRWjVYPDrEb9m",
  "key12": "323DSMH7CD49DRDrEwvvPqVVWEupNHPhjGMeZvFtXsjZRKJ1V3r3Ef46gDH73WDyfSyUymubKfe68zJ757LTDsLM",
  "key13": "4Qy2bhJSdLexzAaeRA9QwCo5ULUMHMGZ3P4Rvy58WdbgNpYPWQihP8rYf9eKEiUWsz8bxeht9qPmNve4sGA8NQqD",
  "key14": "2XfhS1YUrGvyUtBjWL2tGQeKJeEfaSyJzJedeDkDxkgrDcuzM3jtnx91vzKcKDKhf8rfoqJseP2GrPhtzc3UxGkA",
  "key15": "3pMbF2mLLir1ftPNkgcnrADDLrjxtDrYL9GEPYW58tGXqucDEwLDS8KP6Wxyu1vdqZbYeAeXbpEncNzXAc63i9a9",
  "key16": "RdX5wGVBDuwtFJXv3tb3oud8juw2c3LVR1Zyjm1n321KfGFAKJct5wmAFxWn7prVPovEEuCnnBGVVYYMfJF4aVB",
  "key17": "CxnJiFYt4vUtiE26AZVHMW4dFWy7hQrfN4Xe8JNSxAJ2CpisSBrmSAbA2PZeZ7k8gxQpwDBv2NyzUPft9HqDGXu",
  "key18": "3FqS7pQFX8gazZsQBLHni1ApC1tqvgmAtheUvYUpzD34YjFjW2XouccmPs4yshZuGxXzdvtkt1MVPbgRAPRCNaa7",
  "key19": "3W4uiQn6mBtnDdGyVoruzg2F9KcAMkhaquRBGAnZzQj85U28dKvKhzzM2Eq3thgpdPv2Yz6DC2cshNBUgoQeZuWM",
  "key20": "3dT2WUwqPkxwerohHq7SWZvheoQ598oHqtdxaApZFkwKHeajTkhc7SVgAsPBhzqdvHbfUnymmQWVNBTn6vbMsmVG",
  "key21": "3FuzVHTGi9hgJueJUtZG9czDPn6qPBcFPNDYgDHiwTdoQvUoppETYvhuRC3vZRYh29GgXNNTbYZcaFVDZpk1sVmr",
  "key22": "3wb36y3mMJCrU8M5WWLwGgWFTfJGsfyuiofo6mHLV3dvXnXKu7bmdYSEgXJ2RZfHKFgn5f3cmwUHWwjNsZgMhVxo",
  "key23": "2uGLVxzDnW753P1wpiEMYKMzqFjggsWtcUF4bkdmXoYS35iDLLujbMux37idCP21F2FHdGAws1XEMQuFxTFXhZHA",
  "key24": "4Z97MxqrXxhfroj1udpivrsKgx89cc4eFWYDcK9y4ycPY8Af7dMKjprZKQLcCQ6iDNWwaRFmfS7bvzNBGx2s7xvy",
  "key25": "3nEuzsM6eHxA6GtTfEXBDNXYKMhoVcrNxLPTLV6swFpnYqK2zKgQg4P22xJXGLX767gMHTbr8ncbjbzQw1oPd8uN",
  "key26": "4qiGNLkEGcFhJ4sySFoxXpj8pFJ88hHe9LhW6JS2ouS7RufSYH8g3dmfmkun4J4cZg9nQWoWB4d4ca2E4yMxdSEf"
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
