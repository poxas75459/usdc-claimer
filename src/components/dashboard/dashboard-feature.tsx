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
    "4xgednfJs1FaqrcDYDvvnKoypuarWaPMQURSRrebpL6w8hWzWvACJyJcCYbu6Z4tApttZZZ8gWvjYFJ55YDDbgZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YRMmrW2UJYDUitYVKURdECnqjJFYE6kfb7K4pq4QhFPqPhupxBPkfhhawSz3RDwHSPeB2icgimR88dcaAUZ3hv",
  "key1": "2gJeUXtLsnS3rW8bK91mkm55njs2Us8ecWYpFVcUQUKieRv3dabf9gaTRGFji4UnPZbNT1n6QDaKSsTggHNgohu4",
  "key2": "5CNuRReSYXt4wd7iYKWWAsHqkD1NcSCsnZfphKsBZmGknDHsp9aMA8wBBMYbudczqrg4bg9SEJqpZJ2rFXEu6cYa",
  "key3": "4jMYwWwvS8bZwznRwjexSfyN8UAd88BBP1BwprLKuimgyTErSYeR2ihxkQMJXez2Qf5WtD37NRN1erfLgXz1PZRB",
  "key4": "3FqWZKSYhfiWniPt37tyyc9iUEXMjsqbpcPGWSvfx4E1gCfKkVmouS9eftwfoUSSdKLmfHe44giSzNbuVLafeyPQ",
  "key5": "3cMSPodjPeCdJm7mD8dESshea5pXXSrDC1J6c3fUf4WL73WSfSpRhsyDuDmdkQ7bjfZ5XNnGJKVKZ7fkHZDEEa9G",
  "key6": "9nu7GSrQFCwgocV2Y2oP5P9CYfSKPPd4F7BEDPwcWNRJowKe3rMxZRUuqLsnEda6zxyFbW1XE9DmEHig44pYMSF",
  "key7": "5DzKYFyCnVp4D9mcwrSi2tw314JsVqqNPHC21GgHi4eaerUKU1Hx3eEK4j9BrJ8PBS7FtN73cSiZ43u71swATTuX",
  "key8": "2nsBTqyoHdfcufeSAsoYFosC9Xjx9WQEjYUCUuhL67rUSxEey5strPPjLqTNANPDYjTgLocZGJXGjuo2yFn1AjTr",
  "key9": "5Mi3SgAqFMNzNnBq5QXTFXB4zjcLicinPtZCKATR1NxoWWz3Tw7Ky7Z9XzjpjT7HPSejdaJRvdC3ZUVF67ddErCB",
  "key10": "2cZeNEuKx6EaJzd8shTQdHWAR9LFh4g8fH2K9zwGW6X136EzjCfVnqPQut2PAq2YWf1LX4RtTwEYViWzC2Gxf1Pr",
  "key11": "23NakitxssrjNRhnXLhCxJP47eNfXz5g2dzouLJ6vz2NX7dgmWWd1yQCv9RS54xFCzCHSjrffCz2LJaEfhDrTmpn",
  "key12": "5ZwrxmomHwD37NpFaytHzrpexEaoEEd1dL7dzZbWsWa1JkwNmrJcLjsNWTQb39A5Ef1gW94T6UcYfgg2xaKvJDNu",
  "key13": "4vBRgkjpgDzLsdWpDzicqJjPNxodVQLcpc4i6FJPMU87gFcsmMcDfDekCgEgs3vM5z8kyevtF3qY18GfYLXGaByZ",
  "key14": "upox12WvgucJ5yoc5UqQbP7qrbr194amuKTZH2Ava9WeYXfMQYFsNuE5X5fD9PANQhd8FvEqmGPSPwLhddPbow8",
  "key15": "3uc7mWjk88DkwGDu6C46KtyG2dpRiqmyro54zkKbHsGEqy4hdTZt2Zf4AQPHrNYeycpfDq4gkBMSQSze4172vw63",
  "key16": "3qvJUbjQF9ZWa1RJ4MDRZaXhVHPrqAEr254FcxLw22kNy1parfrqS7AVC99pco7m9AUToLCtsMrSyjgVDPPsuBPi",
  "key17": "4nGRMxupG1LWaAfv7wZAL11ULCwFZAVmJWrBXVarYFvMLeVSoJ3RGjndzWs4JdzcMz8Qxn9CEQEqub73dAAZserg",
  "key18": "xdRvQGCGsZuF57RyxSmgfjSEURAQZrgCo59wb9BHc58fBAoeziJPujSwJTjrt3ymjoBLhcrgypQSAKoXgvVkWe5",
  "key19": "2cbKyuNgAgiAxaYGcfcG525XXef62dMD71K5doX5Z4okVP5y355qAuc8epWbZKZHhp1Y2vPeuNJvS4RXjpikYgh7",
  "key20": "58eRPLNi5XTPSwj3NrnEwoQp4uAJ5vrK5762UjyNj7yAitEbZ4KoQDME47NctwJHRobePnF6im3d9fjZCDg7XRDt",
  "key21": "iV8tkre7T9J8dmsz5ywiGU9z8hg4ALciBaE11zNbL4x1Hm5miFDYioBV3HvSXKcgkxD1qr39UVo2pg63JdpDuzS",
  "key22": "57wTkRzk1C98aJom2JJSMEkRLkLyJdF59C1u3PZporD4Lb1ntnYMMZB2FudCz7vxtTkTB2PEPWkqkVKpKDnDMAKo",
  "key23": "2EqNpynHgdgkSqaXdHRYDSmRtTriFNDYTLoNWfbzZiBkrrn6cQ5EioES1MmhUukSv3bSLMghLN9iyzQptohi3Zqx",
  "key24": "4EYesUiVs2g1DmWgbw7PMQELTESuowkuff8tF23rbqg7ChXj2Ldequhddmd6ydt1MHbJjSrzxYJqjHDZhKYSyLGq",
  "key25": "3ECTZJr1bw7UHHNC6Eaxn2uNTMZ6HbeDJFpWeZSRVJKYuphr41hAdYaVVfb8jM25dnhoS6uFuRRFWFVZmUBct8Hp",
  "key26": "5vaMytN9AHhLHh7Wy9n543sxa4qBZEn3Rit5UpAheAy3uQ4k4YnBVWvtSVXpz1GMZG27qnJNoUkZ6yxi9Urkaa9Y",
  "key27": "67hVMFs2FM8TX23BevwniWKaHz297szyqNwKV5bM7nieqGhaAZH1D7b12sm2qN7RoFuB6vtks6jXnKmZjakuFnLg",
  "key28": "zqcGeQQrrK3vXiiw2hRAYBznte29gGkBrDP8n4YV16m4xHojEa6tfsF2coXdst9kb1aEaa6xMDBBWJ4mFiM92By",
  "key29": "33XaHkfC453hQh12gaXaGgUxSHaoibRpcs11pev5AYxkcaCLQnY5EeWmEd4HsZNcBY35tvyQeh24rdJwGd6uC37R",
  "key30": "2faDsCLsXSH5CDKJBjjovXPzWViyfcxBPfKD1QJJnnXepQtX3PDtgXaka3kDoiZXHGRMXkr4iQxGBDfCo5xGApbG",
  "key31": "Zqh4ZV3s9GqgTVzWvF4XQfKPdNHLF4acD6nq15FgWqP3LwEisB8XuqWPHvA7cVeSqUXtH7LNXL742xyMmM5cbiM",
  "key32": "2zBf4CJkPK4moDiy5MbYkwQqRxYA5DsAAEZf6MPE8VdLC1cgYEyMvc9CmShqiZfX6Hc4NzKXGsu7ZyGL7nWERsM1",
  "key33": "4AGJT5pNs1kDQGe7aEGYXsoCLMeJikS8TDx54KzMiY9Q7Qe7nj4Vx1eaY7J5Ee6w6M41meHU1jF5D2kzvexpKZjG",
  "key34": "2Nc2aWSQUP7t9fRprCVhhNPAnbYA6gtx8nTg6KoxHJ3bkzwkjH74fJaZ6kV6bBNgaKd2pgqCj6LR6tp5avknzRSD"
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
