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
    "5Y6yxnbAXVCscmnsr4KnJNTxZe3bkRWkkxFik9ZZJvEyFgssdzvDEc32imA6EY9iRGwNVtc4pwzxrLcHUmjBHyeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WK3krT7c1z7DCDjxzEjhb2KDtBUzZ7Zyc4qJNzPK76C14Zz8WdT32G6adhkXJMwK4LZN9SeDuZGuayBZNHq6npb",
  "key1": "5KzehXMaapPPHmFPhBEAagiSUHU6m2ezkoZ6grsgqXYpGJwC3gHJQvCGTz5KPhhWoLACneQbYZPmWMKn5ve857pJ",
  "key2": "3AinHuNtpARkGDLPVJom1yuN4R3PpVrTHDNdHJC8ogGiHnMHE4bpLGxMbe9JrKvbSE38DTaJRq7KC19SmpKdYTZn",
  "key3": "29j7BWQWzk8vUFaSvThdHisC3piUYRnakR7PrGzCkh2mvQHGmrraGB7SPxnNWc7s1YP5Dy7vKAau2q9AUkUryPua",
  "key4": "FcVVoHPG6kKoYwdTyM3ZkMAqu8f2ZyATyb1LtREA7NN2qUWmo472UhNpDvipBDjuGUW2shM2uJX63A9usmoV7Jw",
  "key5": "2WETrnoyTTjtEgfgd3VR9cPwvgdbLDCz1Mk7AGGNtYHNPMtBC3DeP4sso8tDetZ6iBDcMihBhzWPmYR8RncaJd6t",
  "key6": "36ztKY1TWQdf6KDGWtN16hXAhHVbeN3TaBtMmEWaffqevF6MyTCw2iEqboUmS5ZUJ7mbfH4nfxvHai1xdpL3Z549",
  "key7": "X7cuedWc1ZWQKQX8BZFrvCopvaN2BwHpYx87GcoZSUvv437YMNch2EACRaQJ15B2EgM4H9Q19VvupfhWi7XSG1q",
  "key8": "2ZmQV3LE65fY9t48eKxamc2pQKoQiruvkpikVmiW8SHHkAWhXqLtw1LG92xn8cfqH5hY4E6n8rgoTH72Deogdttb",
  "key9": "3rPwQEessydmm6XgpFpLLbHHiEuZnDZeoQu1ScQNKNUMwWrKMmAQMezJKfXh7Mg1d1DCkkefSMWyK6MRwsM18tDc",
  "key10": "4SoDwYxrTZeFfgZYrPC53aUiY26jnBJUZehczofduzvPehizmw2vqzj3FkBNvnLRXyup8YFT83QGJ1pqBCcweAaA",
  "key11": "2sC8hVsXeQBTCAhuyJQqdUJwhVwPydW1QbcUVtY48tV1PRdfLcVw9UoPM9XctgT68cEsaY39uXp6hwuLJGuUVUpY",
  "key12": "257wvZ6kRFPRujTZwRCZNpebpkn7SEuqwdZaXE5z2D2aXzoGZU9P4n6tCnfdsvedTsn45CfQcrrMiXmyBxicvViR",
  "key13": "2hbn3QxeS9PWZVVdmDcZmxYfUDLmKXzzHkhdjePzn37juzmiBFR4HYxLwDQoRSCSZ8a4MMKFfYHZiQXvW3jQzirr",
  "key14": "2DNkrc6YjoeLA3HLt37wqjd9CrWaYqRdjGdiimxFjn1cA7iBcrEmEzi3HD2K57jDaLzdVdSeJwkr7rrnjpDUKYZ3",
  "key15": "5k8eQ82wjtwNMkj33HcymdUdc1yMPZTFn28w9EnjDzpcRtbdoc99uYpxNod4DPo9ZbR3CorP9V3mkbhojesi1C1i",
  "key16": "5nRAtxa5FiyG5ZYSXQSvZBdpZfzk3SQEZ9SeCF7UJThgLcHTzv1VzvjUuPoo8M3uqEUuMPtDooMgYDbijGe6jx2h",
  "key17": "2TGSNmZXbrxVeMh1LEZyFnfAGLR57qjeuymSQmSRJmDTeALnmzNLDGi5xGzfoUiuSjX2KjdXntcfHuxnvMdHuUvm",
  "key18": "38NW45bj6Cgob5DG8B2GaeGmLSbPtmz9xUwaFhGBQQ6eQogQr1pEgLPmKvXLWxJHWk6vUrjWT3qyjGpQ4mVg9rMv",
  "key19": "4Jo9qNqTHVMN3wead4eRcu3WUkvUz5MLusgQiXY7SZGqJkvzDJqvYYbY4ZMPEtETwJBToLBLXNiPEJ2JbbxUc2mg",
  "key20": "5iDMB7MF22298uvJ4xff63q43pkN5Z8J8HpScUvpZwY9Rgiz5xDPXmsQYuujNBrwoGhzzcCgwnki7kwrerJQfyLV",
  "key21": "55MKyqEgeG21MFayMZRAxU1Ku1HomRmvpbse54wSjaNSxd18rxRJjXGr34QQQu23yduTotvLdtGM5EwWw8Qa5g64",
  "key22": "2gTogd7vZ6gNkSzfVPk5Ga2cwyToJ7KwZ5My8a28taZqVNfnxAZ9994jzis3iVcpKNbMc8foh7vQi2zNNr3zdDKb",
  "key23": "5DAwU5cxwfkYTMgRYcMk5qvZHYqcoom9fPkvRkeRnhReKHRnAMSnZ8mZgxeRsg8MBuqhg42qsF3xdWmCbPwTBorC",
  "key24": "36V4WPr9LJbvkHX1EwobwEvTXWXRREBJbvkidBH42XYfBGfyqDKBFnfnc8yg6pW9bffiRJM36cq2pcLdEnAV78hm",
  "key25": "2w1jNGDFTqSx9Z6QfubsyYXJaQ25idYfHnVWnjPka243N6WVEkUB6suMLyWozwABHMqvKbUgE6Q6CWh1coGFkxDw",
  "key26": "itSUCTesonTdZ7FvpQ7NuwcU7nxeJhoH5fSBKtHDfLsm4sSHZCjaZ7ebho7uWnBYZ1ZcBTWbf3Djp7GKLvVUkP8",
  "key27": "2BQQtmQg8ByZJPtcpXi1fd1vDEuEkEymxz1Nzc2hSo8NbyikRVhUeYRnMNzrkpCDXAkPcFZbgtoy9ptvMZG99oZr",
  "key28": "5HXAnkuxa7CkYgddiPxhyaZUZzodNj7ZW39j4L4p46ZyTS74bSoKKfVqBc2tTQehF9KhP3cXqtgZ6vZkPJpsbBGb",
  "key29": "5y2MWRzKaPR2od37AWHeoLnrAvf48xVmE6eZd8QQsa3kHvSQVf7omsa32tQo3qXkAFG1oh62YdXqTCdqJBc8vT54",
  "key30": "2Wr5pQSCEsqkgbL6anMCSWBAJTtJ1w8PK2dY6e1ZuLjJ6YcgVaqRL2McZiSb7BPtjsE341Xjj1rtD6FCNfe161dQ",
  "key31": "3mWZu8VpxaGJ7WAq1SGLTrgZ7U8Xa6b1Hohz2vM1WDNjUpYAecKLn3CwFmskxnUwsohWnqQk1sgCbP2LUhgmQ8dG",
  "key32": "62LDh1j2f4J4PxjU3GT1AjUN6yRW1Uwo4c1Vp7mJADKCQJrxCG553WeUytJCwTfqUPftuLKoroiYgprB3LqUrhqq",
  "key33": "3oT3LpMm2NvnbNphMwMuYzb86WSuFrprXn6nuaRSTXaN4SVH2FLRXrSVcoBcMFkK6zpZppewXFZYFV2gFna9xJRu",
  "key34": "4j61S23rBwvRXxrdn4pEwbj3Mdq5HLDzT68SM1a4kifyzwSPaNJRE241WjPnkbmcAdfcpN7fLDHKqHXRrXyYxeBA",
  "key35": "5akDqcKBKqwrXQQLbYNzNgvPmypY2BPfhQztW6B4wsyHgDBwnzWfGsWuF61w2Vg1jYU8eavp46K7pr6HMQzWBj5F",
  "key36": "2kP2SCf41wwLMKTnxyTwDronBnVkjrQvokzVbp3np7TzGSNn724imjbdCyJWMUc8n4SDpVvVU3pb1U58PRD4PfNr",
  "key37": "5tMxsot7AWvwErPEbhAdaAWjNkzKidheMrx5NwiTdSdyCNr4RuPmZTGDpgioCvL5wkbCir5nt8oSGxoFM5Fb1mLc",
  "key38": "2MoW16Epa6Sq8W19JuGeavVpENEkUdh3SJx39A72z8CdrSFbzN6ee21y67i75uvU3TZrchr6R8fSsrweJhMKvz1e",
  "key39": "3rXQx6DQTipUQVmSXgHL6VH3ZQHmauptNkffzJq5rFWNSMxKvK8ReBMu3vr5bCAExtwJCNzHwY4aYxnfWdDgKKGq",
  "key40": "9JW39tpSverLgf9A92LqzUsrbVcmPqoMzYbcw4MUoF1gWCif5s7XMhJqBWT53BWscESMZ99obbuPnbSbqmCH2Nt",
  "key41": "4R2yXyeGdjYQsUHo2ZrPaVFgG4YJm5cwJLrLq3qqVmuGBzwXRYenDvq5faA6hooC2VKoaAiUfuDQWpKxymRdpDcA",
  "key42": "4Eoy8YPc7mmD56tgmLd8dfDSmsQ8DHHoVc7rLRSgSB1e92EYZJCJVTKfJtpQPNMGWavmQB5DTfKBtGYAuTbSu6Wb",
  "key43": "meYvnNUKpXBoipViqVxhTbCUTTtzV6NtDGJZdmpcDhZL3VnCBNPo1Rq2MWZ9UP14GFm8Ge2DYC99Z2fN4JBiTAR"
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
