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
    "TsHtKxKgDuHKyZrMf2sfyFprRnwQNhxJqouJbhwS3CHGJfGXhuYhFxJjqddrSmTiBa4YuquMzyqyEZ2MgsK3sh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vnMP2nQwsESXyVqjRorsH2XAGmbrWtrsT8WSzNrfYZbyi4HcmWqx4StQPUshUojwrt2gDBGhUkKskUh5vkb5zt5",
  "key1": "5Q3Z1GBUGBbnJ7hWTMuoxhNtjmTjA4MuWXy8sCncv4SLwm1DfjxbVci71aQ2Pd2KpQZyHhdJj2WvzygkeppXphug",
  "key2": "5588c9Tesqw3ThL9evtqLeT2UwjDatuZN3gpjUpsLGeryNomVPY2QuG2riJjv27qifweuwejHRotLRV4rK6KxH6T",
  "key3": "2eYnrYNeDfD3K5gZQuzFktNtpnFXebAC3MfxUwbYD7JMwMSwJY6QR7JE3hkGrrZB6trw7H7BBSBVGCGoMBCKXg8y",
  "key4": "4xYRG2KE4TK2AgbkkstqE37gU2AsW8PZihRdrShGZ2nvrqef5JakDGJcYRFhKRGbLT4QM6htTxBccJtV9kBPMQsD",
  "key5": "5Gj16BtRekRhsaJTyydyTCZbtreLf1E7QZewSsFjnhyMfEvm2Fvwxhjm1v9CN9rP1EZ3ZagMjk3ziZiCMEFXcBoT",
  "key6": "29JdR2paYKUWfnZaV4Pj7m5mNLVuDYPdxpbwK7j9c2qq2NTPxnrCdruanTiiz3vkEnHhGZnQuoT6RizD7Exq53h7",
  "key7": "hBQxWWLLrKTRkBwtrwuJKca3y6GrCYCEpGEsYUiSnw2H7W62c1WLEinjZ4oDva66ZfAvKguu2p14gZyGLgpnpMi",
  "key8": "3Yn7PLBLYJpsVZzqnUKmk6E2oh3Q6tYaYuYdb7LaF9dGv3DiBfQrtnatTbfWc1JK1xb1DJMtsGB15xS5NPw1oWrm",
  "key9": "4FN9daeWFcPoUsWTvPG49MTZAdA2WqGaUXqD5BYxMf2pEcHPKsCX3uxS8VWefzpXRpYPox2pe5T58ZGTCeBqHqKa",
  "key10": "61MJQGVNg9ZxJerFM9iRa7VrKtz63ToVfpPTB19m2e7nbXPgWaFJaCo4ynauugXMn8SLPJZ7rn4EbXxHvshmXvB1",
  "key11": "6qjGh5gQiGtP76waCNUEz7dEReSNbwqd3PKa8CVSYuLEB5vozQpiAY6MaAm7BMmwFDWNZLJbiDhHm28NXF7u6Nj",
  "key12": "5ecViz3WC48ouZYvDF9ULLJaxmhAgHSbjwzWJvJVQE4g7gtNdwxErGc2zS14N1ebLuDrz3ksvrzSR1bjFJSQSS3M",
  "key13": "XshY6truWJzVg83LiarSYuSstyWTfBTmnVYomkbrgQp2rZnXGipBNTP68uaXjjqMe4bUAo6sL7jr3Ucr5Ateubu",
  "key14": "2Cd3VAiYYqVqTwx3Jx2deTuC9H8GoMeSZNb7d8tjEukbHyNcrPAwBNbRfr1ujrh2d6zC1V44LYgPRtHkrwXZLzht",
  "key15": "4heS4hGFhhCX4WsihUfNp8Z5YnPfgrsnaYBt8dJroVfqGD11yaYzy24Q6kz1245bQcs3UZ5ZRgrtoqaDWGGqfFMm",
  "key16": "25dMKf7GYiF2LLa6sp7AYUns6yHwU7sYWL6wBTY2Y6U9musjLyysHnVxhueVbssKW5MGVQUgCPGTsjLhasjaMeAe",
  "key17": "3cubGnX63UAdggtGFphcKsw8jAoZJNb4hD6eWBqKYUBQbMo4jVGF6KSFdx4fZT1ayvFdZNfEpKU8bNuseSUsEQEe",
  "key18": "aSaxmSf2n68zetHHBMAsbkDnap9d6Mn3gJvukHK2ijsrVh8Cet352q9PcwrPpjWAyTvquCsstaREo8VKwKWtbDJ",
  "key19": "5wuptjJMS2XbkESkRvjZRMzZrwDa8U6yrqcabopuEtx4mKDCwapfN9VjSD8foEMoCNpTinYiuLcVFxmJCsJHTZ4Q",
  "key20": "25nQNvwfazJVER759PGQ9DdxRf1pcKXfmKEQWbaq88cfGJ61GeGsaQjdVw4HWj84JNGUmrKavRKb2saZ785xV8Mi",
  "key21": "3QKs7zz2LEVXL3ocdXGuusGKU49VDku2j9GqUKu7TfboRStn996vpd4wqJxC3QgFvC7cLpi43FNc7dx7yDtwdVw6",
  "key22": "4Lu8bhoJMyNHwQef7tDrY8ZNuL9u3vvrmnbFn6oqy8cBJpwjWFgprj8m5F4vvz8Lhj96rPAFDike2RWZzNo26cv4",
  "key23": "31gi1M27jtghYJxvFiwnqYMKyzinLLdKzU5bFHn8mF2SsT39PZDiZiiy8kEVGkQXT3pybPM5PYjAdvgytKinfnZK",
  "key24": "5qRsZMeWVDbg9Q8xtWi4hpzx73NuaYgCXyEQjC9C7JNXG5gHNsrBe3WivsULezJVigs1ZPfsoqTNBbjmupSSSGLP",
  "key25": "5LyKddB8YLNYFkS9FHaXjRyQdoBktWhmeDM1d1FrzQ8S7mGjGz2fPYyDLJo8qGYUjGrarocVrAx1aztpr3SewR5g",
  "key26": "5ugAopW87Z68WvzzVg3hRkbzbCpiFXicAA9o6wqDLMDnHY9eCouMFtrEXgTcHc2GnoZWksepcEj3jzkjDsxMuWsj",
  "key27": "35kzpR7T9nLyno8v6JqmycbrRa7Btwf3vAJPYnAcm6cuz2qfYP7dHZNC9CdS6yLrD7ut42C6qRgtJXhXFLVtCpc",
  "key28": "N7wtKW1ej2goEkSiH7StMw69zxgwgTMABqF3bytD5Bv8hYDYF8pgF9TYxUWs18h5LktQSbwKQ63xYAYwjQ1325U",
  "key29": "2HZo71Jh1iJ6syH9Wbw7XsUC2Bf1ZsuGT7A83rp8gTrJE2jxxUn7B15J3DqPnvt1vWSsa1XKvim1m9YrSHjEHHhU",
  "key30": "2NQD3X7EmP8yASe9Sm7LWDwAaQiuxVg7PAuX6SUhn9SxS2naLJ3NQagVsKWx2GQ8ZEDZcMF1fdk1kQhzjrxxsryJ",
  "key31": "NwTNAaxPG5FLohpLcfNTkKo2tJJj53MDnMrdGVTMDetpDfSE6vdh4GR1vEt5eyJtN7tBLwuybHyXWWbG2fssn8G",
  "key32": "4oUqFeBwDPNiNvq3ugDB4RFDuJ1UAqk8TAbHpRQz8j9tqHMJC2NfaTsjP2dEgaTZRhcFEfp7tELFhwvV1A7PMzog",
  "key33": "5od4LGBP5gUBjMmJDMYwqnwXG3oQufcF25mLCqoWCrqhm2fUQVjUvLUDWnHB4PFqBZRyEEtfATM6oq3Rx4TZiSTw",
  "key34": "3qEj4BkStzvaa14JJF7uAu8mi9Fdn2DKwbwyEYnmkdnqfcSsCBMjNBDkLpyAfZgnsjKq6Ub5Qk6ZxV9EFezahAt3",
  "key35": "RZzfYYxe85zoECAESaCkv88XNttPi5BpLT3t36orMLhhAB8ECfDHYZTvrHV1v5nfFq1cBzF3HpoJ2m7X9XzYyD4",
  "key36": "3acnBUC2tWyYPHrxDSatBT45N4Aum3Qrxgar831qTVjp1eyta2WacmRM5LJsh5aiNeMFGL8aKPTdkxY9PHgErxt3",
  "key37": "2iRNEz4cN3vn8FsbNMjFpsCQH2FBerGyUFy6o1rSCS7N6tJe3xafdLK9L5N5iHTkmVsJbVhbiseFQEcr255s4tUw",
  "key38": "2gEn5SUjzJthGxCoKACirpMgtKdejvWi9EdP2WCqqUHpz7Sv4JmZL2xziWeM4cHJS6LxctMt5oJNH8LtuNwt7ADm",
  "key39": "66r5ofZzJxumvpz5MX2KVXw5XVM54ihRakRx8tJZMch5WunCjV9CHUXJVfA3DYULYwmenV5eXA4JEm8ufWqqXNyw",
  "key40": "3zeMrCqaL9ypA3xQcYiAGXZKNU5JBKuM8whu8m1fYJ2yd8B28qf5iZ8C3p1aoftQGUBES9iQqJaZnTDjy2YQiJ5z",
  "key41": "33Mm8quFWLN6tDgWpjhS6h75RiYhMe34wBszPdycANZ78FiRSD6eSbisPJsmHLTp9qhahbxTRuH7hJ1hxSMGrpiC",
  "key42": "59HAZfXChyHFgpSrVQXYTMJBf8eKpMAb56saLyyxMRNFNz3nqzT5Z8Gn7FN26Ro2zNZhcD3SjbKRdZUfnUTRWZkn",
  "key43": "5TNNfEZT9rAaQBt2q9ix8VgCe9yeYRR8bwkzG6Zkj3YaQ5hbZEVHCDct8FozqPWxpyxrFsAFefc29rdY1UTuLf1t",
  "key44": "SVGj8DpgZpZkdJ8npTLokNj1NsMXvSrsEGnMg4n4KqHU6MCfboGHkTvk2x5qwJ4DweyNZoXxLKoCPhYeromyZGg",
  "key45": "5W9n1KwErDiRcnjR9b51vhUtoThxXsUYnfm2xYQaLgNJvfeS9XXn993wU5MLDJRNiNefSJoHRonPszULNzGKSnh3"
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
