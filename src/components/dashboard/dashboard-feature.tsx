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
    "4hbHoutMkMfeB1FA596CzqrpnKQixKCbTfdjNnssc6bu8dMPcugBxB1MrjPkddkQEF1rRxj91CcHGX6qBW9q7fU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JQ7voUy5T4rGcoX6mrVXXFjQj5pjsvs1KMG6FoNBUmjLeHoBfpubaeTMatoAHB8fiiEV1XLaz1tRJJwVz5gmcV",
  "key1": "3Vzmkr7Kq9PnwDyTAXmvH7qCY3Y23HR3nE2E7352sumhMQwNnRBZrfMWW8EDdkginJR5QiNDMPToYffQ8gciZQ3q",
  "key2": "5FNnEfJJ79ukTFZGbsFsZ49SWEy5KeoC42J7pEAVaJ7ULCH9jN4UAbmuFLJYjEG3k1TKTDmSxZCGi16k4ts6cRVb",
  "key3": "UGMR3pZxf8fqcU2Boz4hKhgfxCfnpZHu9Yroj18s5Hbkq5SrbF2BGvbFBZ84TVMsGHsVJBwjithBEwZDKB8SDQU",
  "key4": "2iU9xJD6BFY2B8cvutVJX56YVyEsEdN6zg3qWhPdJ7Swc6qBR1iCNTAvxgYaGZNiQimxN1tPyGZGwoRrXKnqmzUd",
  "key5": "4sfZUGsRJfcE72PM6Jbus9RAbQLsiaSeX58ZrmhGWii9BQqk7rnUkK2PYn24hPAMrpnKso2orJsm71TPXEyosbZP",
  "key6": "2UkFZwC7iCFg47CgDRs7okTfYdd82caeqY6X2Kg58nTzjS87KGzU3LCNUcEJj9wP8N2d96EgVVNwYnqfy7VUb85i",
  "key7": "u9oTsFu6XZpAkaVddXrL6o1rUfVbcyqy23JEun4jUVLcNPsxHGcUgKYyECQcSaAY8NwGa5Gpbgd1uCNabiGDrax",
  "key8": "3j4B5LiLB1hjXSBUeURgoqxibqxx3Czpx7LrKEFEDRFjUH76voRereZGnBgbe22JDLFLxuSbiHP656cCdJrPcWXE",
  "key9": "5mWovYhrbqATJUNGrBzhjPQySusyL6r5zuNjgu3mUBUR8j5JX2qVPJH4vJ6KpndQn3o9nRrrZ4EUyVYDtWo8bqg1",
  "key10": "b4kWkxzrs9jYWn6w6j5pqU64Q17teM1HxszWVeyZSZRB45N4EagBe9Jdd3Jh1p7NfKtvghBFbXuLMNgorb3HWky",
  "key11": "2h2HiMyGFUSFGMwjxvNamY8j61aQatN8nNqwXpSMyW1ytKGefrBkxztgqyQ4vukNtCZnoRaDquExJYXaCKqtfgae",
  "key12": "5ratAecFEAdYZzQTXoAgUj1bEufnRQ3aa9EhtQ4iFxFwRP6wYVinwk4FraWQPDJ995cEJLgEDhfZiJVP5PsJeGYc",
  "key13": "3b8fLSNJ8NqxhehpBdVCt9yeZrqACwsyXrVQTpyD1nQnZCWex5vHFajg1UyeJki9f9DYNNQxuoHQ5koMQmfTW47j",
  "key14": "3DwwreS6EQAjitGq4uXoxffqrG9njUD87sGnfWNBH7odrwEiRhsqzwqKhzccAKHc242oma1yeBBzDymUbaKBqL3c",
  "key15": "49FvQAksJUS9jkYaeFS4hNvvRwzea6KfzgVJe4xd1wbD2VLDsar6dCaFQYT99wvJ2aDTybb7fiVoNfythYnnHGxg",
  "key16": "3rFcrs8zSKvdrZzb2cmC7bSinDzVDU3bTAsF38hyE41gnK1f3eRPBezBVXbWAGS4GGapXpriqApkWgZbM6vux9ne",
  "key17": "52JyWn5wcyQf9DWduHkFRVXKYFFp4PPpQ6qRPiYWX14wSfvLum9o2AZxMTXE4ga8BPuKMXbaDUoqjqVPCbaxqCBc",
  "key18": "2MC3yMsq24C9JRQBbniWwVtVS2T6tZot7Yn6MdWEznyvLuqrL2xottsmtfSN6VvsfksnWLqMc7m77y9hcJ1DgKPD",
  "key19": "4qg9PJETUkpbmbyUvjrZ1PVYYdUbTLVakG2K6zhppGXjPuuvUXD4zyxsgXCDiRYT56ipnp4DqwgiF8xDzzoTu3r8",
  "key20": "T12dzHmtD4h6thzmvkaiKmguFWwaWhLp9R1urAThZDvuqe8cFQFmJpt4pmTCL3NHTqNKhtFLfAzUm8CZvLKBqUh",
  "key21": "46FEaNbLDR949tz5RB7yRZRrn7E5Cx8uvNcLh4YVBa4XXdBy3PSxfj9jooMvzMW2CcsUftaWy7pgmyXM6eQNTisn",
  "key22": "2LGm4QGuM7PFJYxyW1T1pd7wujLDRi1WpVpc7ME1Uu4KWPpv6MEoFHYonKACCTfshubDHf8nJhR7YTgrpBnP1m5M",
  "key23": "3Jp9yFZNWaGfXY6brPXS64nvmekqngn2BukLXXugQy45arpqt82fgrRCRAqbKdx8KQ9YMWfVYP4J3ogm86t5SCjx",
  "key24": "5QmoqjRGFAengw6u6xd6X3mx5DVUbG7uXPiPySusdrbXsS89crzBmKZEnemBpRyS7JNPrjr2PubD5C5oedwxJhPv",
  "key25": "3RoBjSVBxUBuiciQ4Q9KeqvJjo8vKjGAS9PWxoJm3Xb6xAeARG226Leu3hrucm9TRxmWCCcwvXbDyAUDTeecpD54",
  "key26": "46FuaKVdGtiEb6HCznw1p5TUi94WZZvBhrJzKrQcwcdEUo2nLQ8YQijNtToYjLAW4CxzggEFuUfDWTGyA8P7TB9P",
  "key27": "47g9EYNsqRigJntTVcqRxVW49nwVw9sQUAtyoTZADHLGr8UX3YRRirWoMbBhrPko8cZ916qtuUHKSZYkmceCaTrj",
  "key28": "2DviwZwyBewK1foVW9dRFYMtYLK5nPRbYGieoTR2bVJqcS6znKKAEKGwg4B56JX3pg9iddAxFTDkwgXfsJkVdqcK",
  "key29": "5sDn1pCp5BoKcgy2y2jYme2sGnU194xF6UXGnhutMeb5cgVJCKKnG3bdHimcm7fVoLz6yYfsedCChVZmbguvyFS5",
  "key30": "uR3S6javEtXacJ8tuyjvyLFPann5LjxYA8Q2nUAZUxAeriSQPszRAQJVBaXn3xzST2qZHn4FfPYRDXoz1wZs32n",
  "key31": "4bKkp3Znj9Hrsefx7jxibJLEhMgxHumAeHCjjpdgmrGvLUhVK4NWb31k7tSZsTkbziFcEBrnk4rsWCUyvT73ziLS",
  "key32": "34horRm8e7pE5LrztiJrBvRBUqKYjqc7LMjYQaLvr8JVUJ1U79PjQV8HG8D37MUj5ZT7qAwpCHaQwr12XaqBMi3f",
  "key33": "5ef3FVtQzJSxSZTqzeQ8PEY8kGVBMxbqagu7dLfkDT2F6mcXQhyLkQXG5VZbDsyN72HiPtEhX5Lh6wuV9WQ8DsXf",
  "key34": "3JcwdmhGAaYfF37WjP6p3ophtARLqxGhT1rfYzRQzNF1oJPVoPZKyYqPep7mNzvtad8JgiWTNKP4SVAtvVUsY385",
  "key35": "56Gat8Ec7ddQufyfr9gZFhVPTqWKR82TP5FLPDBCVTUgKkaSk5KharZzwtArXNgiNcGJ3dCyS1hFPBYKUSXiF2qN",
  "key36": "3W6MSZGBXbWxuWvbwU8ArPwSVYfbVB4U5cK4HatR7jN2xD8oj3QtDbrqp8SyRng9qUApsX8JrEohe6CNZeW5tBrF",
  "key37": "jXP48YXDHbJrgbFid5XZy4zcYPwY973wFdzi3U7TBKnBoVKDCwLdQA17ewZodu3ywVn3hoknW9aGq9SarjMY1k6",
  "key38": "5whip7n7bDvFWdtJQKK8bw4fUBL8Dn5EdfDtpeA9JqSYvmzZPh9jF1nXJHiMrWXyMBu2HWEwMtecR9hCdHkgNf7d",
  "key39": "2Jnw4pwAxYWiMjUQopMRSQkpaMxoLgsHud84L6gEFMuwXi2Xz6reDsGsf2oZdnGQkwbR1PxAW26eL7M4XtRiZTBC",
  "key40": "3SpfEy5RmBjfBmAUEtYwdGW1DupeWuc5XbardP6CwS5PA7VNJXJJj8qs23B2aXyACtHoMBADZ6Dw3z148XaVnc14",
  "key41": "3R4xKo45YETUB4brWoEDFWdYyDNdXrubgDKSuENhCt7CQYQyNidsqCP2ZJiwniFcwsexDEKPA3VspBVLtPQt1Rfe",
  "key42": "Lrsm3CGZCXknWfonZo9HsLeQii287vrHKVFS7TiBCg1dsTB6HV7UTLycyJRgSP7Pba97788J9YnhogFPCzY5P8w",
  "key43": "4vsDA8Ao6S2QyjYmdsCcK3dWaNRFd2ryJWo43U94TChPTaRaajGbetG1tjv3HD4FjYpUaNb2TBAkiRAgw5BxA2qA"
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
