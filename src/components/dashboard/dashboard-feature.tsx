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
    "3vRcYSc6U1fG9boM58yjcsP7sny73UB4GoiNz6DBpuuh2ZmnMvUtYu1MUTRUvLcgxNhNwMyBZiEfsFfbxHQBJmdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvdawbizCf9AFLMwKjW6tMYAYAjoFmEij3Bu4HaAdnENZRtCtMa2qb1uB82AuvNaBAWWZUPrydZkzmXztu92dMw",
  "key1": "4rFMq4ye8KFDyNxSxMy7JvuspivWcqtYUbZhoFoUzuUtzkVHfS7aj7F5UHfVgmnWbEdXT3ozjrWaaXUFjqdxXXku",
  "key2": "HqW1n4oLTs6SKgCkVWMYP3W928CpgFqDcQBSoWq9kgHZr8CdfNV6uRmaMh6X1wZXUkxiQ4kewASVBFjNt1XrEeG",
  "key3": "3Kkaknzi3LSnBLC6WeGYFN48cUE6cVV6A8Jsa7JuM7cvvagJhtdHej3Pk7g6h3Et8ERZ4mYae2yokYWKJ3EgBU9S",
  "key4": "5mRwFHJAHdmdDFwSGpgKpXBzXUzkPgxKHuEhFvB77fAaUaTbfyn3RVwAJsy3Fo3sTgk9nJZTDJFXwsjgbbFs2sER",
  "key5": "5ChftE1qgbrxbDNgVpL3nPUvqGKp3nAPwG84zmfwi9tLzppFmwbKCsViwS5S8No8umT66oN5ek3Yw1nfPL5ZwpMe",
  "key6": "5FGEh2sgD2GMfY57sv91F3Vh2jxEdMCUuioE6ZTAU6KAvGaNZ8gGArgznAFsEDMaQLzbVyj7UghGY1D4nuqn34dE",
  "key7": "3NRh4GGKuWeC7xfhD5rT7eMsTGj7vQpYjbuzyKFRComBB5jmMbNSVagyPTPHB5tCPGCQ8yyrqquUvMa5Jg4wJkYj",
  "key8": "2smLYPkVbf2WbKfMH81CYUEsQzM5CY3iEcU15hTQkhf3xo5cpok2JLxD1xTu4mpEHHK6TYEnjC8BcVNpTeADmVZa",
  "key9": "QLadnBLc7LR2FxFD4GX4jaWe2RF71hL26Pcqs9PY1kNnuAdHioHNUAG5Jsxr2zChymVMFcKQKMQq32D8aZZ3eoS",
  "key10": "3LrKHHYHBmFrnVZByeQfakpK5QenrzwqMDmwgScSTNiKMm7moSp7mYbxCgZk5kCKaGFXqcvCA58mnmnAsJRc4Ayk",
  "key11": "3LQGpg99TPADcb1u8EqX1y6wXzwouE5MnqXeZSsnhZRQzSBMhzA4XEYLr9Lg5kVReAb7WxcwPBbz9DJdHm6wWqdB",
  "key12": "3pfrc6daq4AYW5J7npaqLb6DxuXvcgiFuKEggaPFUCBjob5T8i7VYBR4QRnvNPyuYM3okAE2e9xmQtDWixrNGVTy",
  "key13": "42cmUssECxfJ44KTu52ESJoXivdXd6EmAGYrLH8h6kmT6twy9iJ6FYcBbjpk13tnxhHaEYb2MMdNU5z7aV7RC6cm",
  "key14": "3Y13kp9nKqkFkpRpLCExksrasZLJ51UdyWXDTC5g17ZgWMG7hx9qSe2hoiT79t7JyfNb2pWFqNCz49XQaoZ8NDwD",
  "key15": "5mnZ8bxnJMR6Gv6BGGopEpJ9DCjxexuwa1p8ff9QfSTcSrRe7uHSUsNWmcmXq9yVhvMxKJECXA7LHeU4EV4D9mua",
  "key16": "2LSkgJ2wnbevHaR3DPYAPxzN4HDyfuFK32FduJvm1pSM8t6GQrVDfwDNW8m8BWFziZTM9yMbnDDfP4Zdxgk1svtj",
  "key17": "3UFB9Etb3Yh7yKj5rXHwyifgsCGk9HiVH6geqHjqwyQgMy7m3xpVhbw8oD9KSJUeCqwkN1bQnHwy48hgjNdiW6SZ",
  "key18": "2DiJY1j4W6DCW4kQ5zsXNnW6k8kpbmDCV9Mv91zZzvbtXTLWGHmiYzpzKmWcLcMPnt4A4D9FYzorEN8ayMwG2swW",
  "key19": "53Fd9T8hb64fangLotJmfpChqguDCU6MdvbAbkQtBHJRh9tc87U9aQszMyngpXDgNPJUqj4GtFjesTcQW6oS63rg",
  "key20": "3iCvJ4ynReCiMiphZUxHmq1y96Vm9aH2Y153sGe6muXNATXHBhGy6GY1mU23rfsni1CZuDij2TKWLgd8gwRyPUWA",
  "key21": "4zAhFGCE97FVJS88fyQ6wzrSL5uDwbMMogx9aqNeM6TXY6tKKoJFKawzANDHmqbyRjTg58bdYFZ31tcNV9F5mHHq",
  "key22": "4Dhnbj2RdmRJN2jh6UECPgpH2Shgk7tzmgeEKkVqGoDoXSgntgvJba8AiyVVTH5k39Q4jUKiuRcUCWXaG9m6aWk2",
  "key23": "4UyGKthTpCsPixtjqnW5U918yqgpykKgyeAABKBk7RGy1B1DUEpjSbwhKdYUvBd3Nt5Kg6zdKmXHtuHNQav9sudC",
  "key24": "5LipxPZDEi3K8dbon7mCmkT6TCkNcQyf7gmy2PNq6pPZS1ZtJds7rezRKo1JAqhsY4EDEomgaMiscrmynuUseLj2",
  "key25": "62Cs6NGMy2vL32SYFPCePWJpdVk4DPjRC4FMpjj3k1BPBb9eZVg8Xw7Pdj6uok1U7rx5VCH2JM5Apx65wKcBDhsj",
  "key26": "5KAXe6etpaTf7zhJ9oNRRxbsst8rXpCh4YaP8dK9DBj3bU9gwQXTTEHViiQXzZarUt7wbgZbKMgcpoCMYkMqdqgC",
  "key27": "3qMfLJBKvem8LerHbjDGFLhRbbZarXiQ669WrYt4DnGAy9W8jPjfRQ3VfeuN86BGENw3rU8QJsaQyZKXZhnY4xFN",
  "key28": "Wvrxrtzv6pWsvCjKtajJLsc63b16nVwAXNf5hV31zK3qGW6yhyCRVFG5TRyqFEeimwZ99TPqUgjnoSV37xdwLNf",
  "key29": "4YBr5y3nyc2trXjgUjVVEcjqcFEwWV2EH7RtV8z1Xh2iS6dVE84CD9b7G8oJy8wctACLw6gHtmkUD7YrfQRPFybb",
  "key30": "4FnRimNUGd8pUCA1T8He7224LwHeW6TSwh888vMqHL3fptcnbGAArJ5NjgPsMBKZcfxEJAuwnUKL6jhpQZgA54XX",
  "key31": "1iE2V7QzZDh68js3LrZuyrzDg5T11QYU6TQhFcBrWyXkEVihBtEma6wFHPvGmmEkYfvCCAMrbSwHr45XHud8NN8",
  "key32": "2RWtEb12cb2odisUhkis89E8aPNfwW5foCLvuhKeuhfDgxgoTmXNaRWE2BuDgLUUZBEkhH8YZrQVsNbTEsS58aLj",
  "key33": "3nkfDosQotmnWv1oKMSg2yJHmvjCfwBnFvzqtPnpCYoVnr3kRaFXHbFyucgUA8sXkVSoL1C5urB8x6RsShjaxxCH",
  "key34": "424YNsUcAhXuy6LePwLstPHX5Z5dF5umCHP16TCTgH6nuT19W32QbuofFfoba9Y8iSXFDRZffBxYotxgE7o6SmWo",
  "key35": "2f7wzcxvYmtw5pJ5K95N5sQfeKJxt4boGq14dNUm9ZKj5NjPtiMzWbkrbcEv7cpVc4xj8NBrY4Li7nFYnA3rq22m",
  "key36": "2DMR4tJbC7D94XyzGnDrhgbqRQTkk2k7FAPFLs7diYGA3FD5iH6ephEGkqmY7NbQ5gLDiszRLxnoa75C5b4gXRwS",
  "key37": "67SKWKscm1GiW4zLXv25oerLJrP6dA9qc8p6FHt5dwBDdjNozhKZZQ9r4QX6fE14UkVH49qicD9vXazmycmCXTEC",
  "key38": "23fA3Xkcaae5k3nmhvTi58LWQsSLAUJjM7CarukXmjQCceY6H5GhQVDDJbzePhUYTg8Z5sbJnDuHha1AgGdrQvnP",
  "key39": "MiWdP9yXTdVWcxj8mgBvVpPAdu7cnBYsE7GFSFpLnprUfVuQfz1bqT9JnvFpPLiQsvJ1yhCaXbn8HdTBNUUYasZ",
  "key40": "2paWu2S7t5DMaSXkBSJjD74VTDXHtj6fGEQ8vQESaZe2vwMR92pxBk9zwX67df3dY6Q8GT4rG6fsen9Tp8xB4o6X",
  "key41": "2rc8EieT1wMrTM7ctyfbCjNz5txNSUKTWPWLkyxXPfNPD8fSQTLMFWxArQ5qDyPZVbTUhYz1nRnLazrZGYyDPchC",
  "key42": "2iz3wVgjSEvm93p88XLDMXMr6vjzkBzG9AmENonc8fqwatnC8LHH5rK8ygvG1oPRbuHkoa5NPvgfqJcfVGr5HUje",
  "key43": "YmwzQay8YYXDk9c6N1a1aCjgyb1bbw4qjYCAvq8YzBWWiCdKnqC6SebiAdqsxrx88A6WXXf16S79b6tgUN8Svew",
  "key44": "4SxgBeaD1SBK3JCXhcMAfhVzzmrJGfAERC858mGJ2RigJX3FGAEWwqwWG5TXC7ztgSeHVLhTf5ZHKotNZ9smRPMs",
  "key45": "2zqx97jGDk6ZX8kCcUXfgyzPezwphEsDxEe5Z2XcJRKGHzD8ijp4KdiLv6rpUDuu7EjvoCSZRRxbTmesWKn5Ao2t",
  "key46": "4RJbhDc3wgoB2FW8r7KxGBhgesDdNVTZ218Kv9E66kLd9eTiK94C3A9DHS77VpJDaEQ6jW2UjNkddx6tjjKCd3s7",
  "key47": "5kG1QzwiEnh6Vm2Ex7fkhjPCXnSKcvrwuRghRcKvf3698FKEVPtgvT9JFwNJQRRD47j1bRB1r6CRXejLmnnYzM4t",
  "key48": "3wHP8EDdTnxAejpTKmXtBuYhNXx9gKKVvBouFbpJVDyJmQ69R27ZqW2TWan6NdrXTrvtjLDEGP8fyL2BypTurkBA"
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
