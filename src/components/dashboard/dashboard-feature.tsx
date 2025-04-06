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
    "4VCrPwGvhS5RDivaMxb9EkUuLCBAjvsPMSyyXWWexh4HfZ16YjY8NMXhTNJu5HgmsRcc5M27JU43sttgnEumx83Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qz59iWn6PyZVKJBZZhW6yPZnucFqGeraJcXVtwEn2oR4VpqfaKP8Jz1ZDSzwf5HfAPzE4GMpB9nWzQ5HwkH8vDD",
  "key1": "4sdHU8SiW2DecsTRRHv6Sb286tYiJddBbm6BTAaYb3tCqpBT1XbHjpwVPfv2SbRachJLVNpcq1wYR9Wxb6UsrjTd",
  "key2": "2jHJ5mnrJSako9FsUzxe62KsrvfrWNMgLPp6DJdAm1F4qutdzTq99hNAZhU99bTmoMFz7BnZd1YXaLQcwjsUgyMi",
  "key3": "36BdU5MUJ299P5cyg8FwTs8hVkR2j1yo9tVYtLggNcMEDwtRCwW62Dpxi3gZV49tEQ89BKnqx8F75NdBtEh49bgA",
  "key4": "3LWXpprMYn49gWEChC8Pi4sRwBK2mcakedjFoMsDETewSEed6Ed4o2pQ7LjFbRBTwtHi72EgvuzKqew6ZBVDYgy8",
  "key5": "2dttLeGRbomApKZsMo6z44yX2Q993wMyyxZcmhjkZjbm5r1ccPSiiqfTfvtGwRjNNwnXuMcCQzuZBdFJumUni4WU",
  "key6": "kZWgbK8t62P6KgAhtaJLJpSiaPxGj9MpMZxgGNb3MLm7ju4gjHn2rLu9bPDSdTt1Ug3m79NBtS3WyDTpSdTa7bS",
  "key7": "43N8me4PmC5mA8tmX4FbzRVsaf2MvADszoBtB8XN3beMn3ALfCny9sNsvvDUkZRcooHNUwivb5iyvnGtA32eHZec",
  "key8": "v2pRN2UkHKxgz9k7BpQoTXZKmQR9qa6afdCdnYoQQdV7ZE7ThBcyPTR2h92orsQLN7bY5b7kh77pECRFXZW6fLV",
  "key9": "KAkUSPsV1CnQMfjuontc6cv7EgapWXySf1QUybMYAxk1oZNv3d3C764ZzXJYMeRB125kcv8TQVQzxJE1XubaLqi",
  "key10": "h2ozt9TSYkJTcCrkxSBiAyFpsnyNBphSrqRbn2mVrR5WmJEMCotzEmA12Ba7BUm2sEya9guY1NTXEfLWbbBofTF",
  "key11": "297jUbB9Cp257UX6yGEoG44UtXSxbYJLivwj43MXczUYWZ8vp8R5fjnU6rL3EQotVDFESfJAnHkAj8ARxKte27ot",
  "key12": "YankMS7dQEBJWha7toMuTG89cAKbN4Tkz62V2sNqQY4a27BCi4LE4Nbm8YqvDcRNnxQ4VdujVyn4JcY6U34Qr8V",
  "key13": "X9gNPr7nMdttXt5RcCsG51UFL144oMXDBG8qq6ceaopvsFJgoNoknpNXxc6c3fESr9ghSwRH9rhaFaagRCMDD22",
  "key14": "67pqqsNLo4ZqSLECGaewCsTGhnHR3JLGdcNwY35yDf4QDMEMAXeDwy8gMAsKXzNckySaAjP91QrPgjx7BE7s8Fop",
  "key15": "2WKubF1HXKBDxEUiBFMADy9ncgfZeaQxVnvb1ZKPD6CoN6VwtZ7SWnqCZc3frBJFVML6gG7wpr1nThV2nT9nMpND",
  "key16": "4qaey46Ndq3L41VPeGuKiMCCDciYVGi4bjGadSektLkcgVuZQLWLVE2JJEUmoCGpoYKSazmserkFTxKxNxRbunFQ",
  "key17": "4tinbMfTdL6Rq8YZFQdGML55jmZJBJ91XrW7N5zfndd8u4xcHrgM1a3MyxgUGDYPmmP93Wx2m173DFq4pgFYRpuR",
  "key18": "3KroxXnPZiSgN87vwnBAjEzFMWCE5Qc4robp4Z6TpPyicd6wSDTBBrdCNbVw8udSr5z9zfhBdHBuX9wUEKDZo7mc",
  "key19": "3XGDLL3ggYSFDYJNxQyqVhhQBBryJxvjQEbdE76kJTGMko69PJ1mirLVXWT3aEgzkkrXLHJDh4kNULftBJt16Jny",
  "key20": "57ApXREDzKHpUyUrqkeRsthcc4XXEFARjiqivHqntgfNckCNCyEPZ9vM45mW4piSKCdbzHJervwLVZdwy3th1Qma",
  "key21": "31hia3VkYM5SVaGFH4BhSZW8GziGNBG1EMJMtXYVyLdhr5juwFJa5aH3xtwTducNr37ekJErVnbpoo3kd9X4DtX",
  "key22": "5Jbq4SchSFAc5PNLWtKTZbjuzSqKCZVyNNTFXt6Kiwz8GVn7DHwRsGLQGKxFRc92GJbhRAqwpzaUXzQ2TRnCigvs",
  "key23": "2Lg3Ngz8HggNTEHyRRQYFomjwcZwcFEQ3eoPdxN2pBFt6an3bnt7JnSwprCz8W6qB2iPXNWCSsAvz8VMais97PZr",
  "key24": "5Njq7R4zxJEswdXEhKHCi6V3MGpZti7Jp9g4rtrd8wLHH2QqN3nbNPeCkUF1m4uwYRfpuetoZzUgLC14moyJwQbr",
  "key25": "t5aNgMTvJYkShRBKPMS7mTvHnyooT9q8xyLB9yfU4cBfA2A3bVP3g2sjudsR3ap8WDWqnyMprA6hU3wzTQBiyfV",
  "key26": "3rnHAybaCW28BWcM2SKV3rgRdLXmzUhwx8o5YGHhojBw53aKBuKm6JhZJm7RsLCQmCYHubwexY9NUX2qcESRJhzy",
  "key27": "4w7jHgXsJaPqzRxwJkcEKdcjABTK6jgxb1HKqtvuXxyu4NCoTdpZNcybzc8BtM6BGQfsba8itP5KBkHs4a2kF2Xb",
  "key28": "5g7bfY9QUBabtAoD7i2x3v5j3mw85usKPZTxhkFDMsiDT8g51j3uxz6G5eLb4drEb8AhLkqeDhLSssJXFeaX3wbv"
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
