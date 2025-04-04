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
    "3myqsKaB3DE9twzzeLjAhEk3UfBudHNyKKRQmJhLSA38iVDCKos3owNkPunh6NTqY9LthPUwoeS7MWuqzVAhUvW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xq232d9xe5tKvdHvWyqeHx7DpvM72m7D4WBTCjwhUiHnzTfDY3tpMfhujJTELkwpPhH7AF3o9ojA8bbif8msZoG",
  "key1": "3fBSyNv8pjb9G48RphHSqDbfofgc9eqTeeJSE9CBc3KiN7t7juZtbH9A3Uje23fdUZdacE8wkjyAvP9QK8DhMvz",
  "key2": "3c5wAnFsGyZgS6QUnNPn23QDaCSsAJN3hbFhe1ab8D8HCz9rqX76keqC9MTwNFyYZ5e4KM1nwxs4AyQxxZPsoXj9",
  "key3": "3CDsgV5dyQXYW5bQmgD5XMHvcXSwLxAcsarabpdE5eunKhicNVDThmqpTkJbuJ8mzk2Zt5eJ6Fhy8k7r26udmpnn",
  "key4": "xJVYQCsm8iftXgTrMXVRNoBHuGTc2weTfrMLSepjriUEw4q85BKTTV327Wny8FS4Fj7RfaNc3i117r9JgJKPYSn",
  "key5": "5AVj5GHV8X4P7hgRXYNXS3oZqKsihV5c1GJedg66f2h31TT2J4VowqVqBNjooyXxjAV3rH5SXDAZxKsFqtZa5TyC",
  "key6": "5VthxHwh4XbkiphUfT8pXwnh96rKfcrw2CXxmY3fNKDj8BmRbRz83oYAouf8SvFp8zbQeUkjbHm2Y6JPtyDjs8RB",
  "key7": "5PMZ8aKcLgFarCeSotTu79BuQRJuRqXFpTQ8R6HevaKg1KtP3EyLkYhR2sTFToRhkyJu6QraK3zqpJUr2qCuUwYv",
  "key8": "5nWQLBd19dzhwustc6gs6ro7FsgyGddMBChFZBuFc1Mj4A23sUMLT9gTV3nsvNGDnuemULpsMDY9eVcaqUHG8Gvy",
  "key9": "57HWcd4Bsx73duN2uWAx9VxvFiKjpj2cze6kzhd3otZnk9w9f4j6hwZNzhQ3iEZ7mho2js2KJjtrDnB4LFtGYhcq",
  "key10": "2s2FiYJt7pZwKTos22SHakFumpbUjk22PmdGHdjWJi34LR2pYrT5h992cGz21ZHtuKbadW5s9qqWAmDyAvtpuwBW",
  "key11": "MNp8svzKTa82WKbBHouNTJpfEEcPaHWP1WHf1X9cjGzREJQGce5WgiHni3XGpSv3jdCxnTKUMomx5DspBzMKyJq",
  "key12": "5hqCZ8Yr8eoNYNad9Q8R5HL1uyFnacsJJ2yTnpvk8DNnGdwyNVzziKfwGcoMzKJC32Syn9ytmXaw2yvE82hF3Ch2",
  "key13": "5seTx9LtGEQHgR63sL4zpmApn9zfJDHFVRpGuNUE8F2cYpMSNPLMVPariAtfZGdGZMwMJdLF5bK6VkWWq8MFutsE",
  "key14": "2HC1g3V1kztJgtZTk9hSvnvqdEcxZDBpori6L8uJvJvAoVmDJshXcQgowQZkRAvZrTVLRZVunRyNTWcS19JNvY3",
  "key15": "4eNVBrbKwf9YnMFBNxQKkvShwBQ83iwSMwV1oJDmV9H3HuYT51U779AZ9QZZXnn4U35zAGZjEw5Xb2uztzkXTCDU",
  "key16": "4wgSdhVEDUCFYo7Lagf8Mu58ddt7FgygE6sRCGACFktJNKQV8UVQXPJQjRAxbvoE7Va2cSrHrWdtkXU2NN5V6YJt",
  "key17": "dKTmTFNZLaLB7uvbj79BHV8GGcQqcpCXukfPoL1WhZK5B2U5TcP8zuPZgf5bU2Zc1zLcHq1LdewKjwdzgnrxHDc",
  "key18": "LmDdG4Y8ZFDXsshozZN8bf9ZCP7VbJT2wbRCDhv1mHB9E1egB9rEePVHkihbRFXtiy6g3hnWwt28vmEqfNEdHGV",
  "key19": "5KnZpRcByux6t22KPPYuE5rc8RVF92rPU5hKuCDRuErMpNufnP857RUKx7eq1X1MKo33yBs3S2eUCNNoR6iHb4ts",
  "key20": "51h861bTMapAZLbRstQxCEcWi9gNN3bZrKN1YodQ3qWZFcnUbQi5oJKkqrTx7v4VnDtrh9Z3bhyHv3P82njGGT2b",
  "key21": "3KiLZX8DebJW4SNHMoCxvTxJeJTgrcsQucZVuQopXX7pwD3D6Lha2owxWHGDGQNfMWygBpHapcqfb2nLcNf7FoYn",
  "key22": "QK4poe19Ajnp2B2uFWprVSDN8fAAof6qRFMEzHQGsHEucGphFR58bEahVVxaTobz9XVNbS7G457yHGJCtMrJotU",
  "key23": "DC6w4gbcjd4Dhr9jojjL5RqSoFBL5N8PB4JPtS25Nk1b71LDPgRZrVLbFe1kgyj9pbiyfdcnesmbBVLubqd3bmS",
  "key24": "45ohbZtGQcQqG6dnnK1upATaK2obTJ86NKjVTqGrt1GjPKruD9DKDBpiSY97HnRgRm2sY8UeZinTEuxsGaCwScd7",
  "key25": "3eSaoayBPkiYGasu4c8TJYiQkvLAygcPrBaMGMFcnwdhLgYv7wGnEvvBAG9DNPA5KUX2cFhu6oyb68qaMwhjVdo7",
  "key26": "2dXsi6WWYrmKtLyrhbSaaSHDyrUVWEJbv8gTzWW428Q2hhCw1vQB8gUJLgxkHJVsj6SSw9uxffV28WEfgbf8Hd2V",
  "key27": "59cNWYX1rGbKzwAXFzrxjwio9PejwQ1mjzWWyPANJwGvT5EVjDn5LQcEFhEuUbUaXzo6VgN6QnCjN8DBSA5x1rDu",
  "key28": "2QMoy2UWU9G3918HnsURozHZo1pWTpQhgPAgDaCmsXJ44H1Jg17R7dtcmykCs4n5CPVBAbYs36Bp9EXbdJsRYd3d",
  "key29": "285cGq6gfRMMnBxToqVrG5E5XTnzvhums1aPYXf4JyRjWDcBsxKCm92DzCQvgoWuG79h6FuYv11RcrtBrU3ZGpje",
  "key30": "sH9bBhgbzk6nsYS2yhEkGC3CGNSZrMHCS8uHhN6c3pLVKREbEjXDVCGdbLHE2dnpBqHyRAct7YWX68vgfDUzJQc",
  "key31": "mbGJnPqtcB564Php3b53aZxTtJVLdvBAPFCfW8ht9DZX1jNf2JxJHoLPX3swuYzrdU4vMswSs6ZRpWyBovTvmY9",
  "key32": "3Mu8NwurpFdQePSpbrGe5WkNheqwGmGnFmNHSEGExqKoQ44qKUW3LMrTJsEYGrvA7Hm5tG9ncNhaAKwxbKAgYiW2",
  "key33": "mU5VD9UBz25gotSonTNrQ96BCdWuT4UkVwxg4RiAXsJuoTjTUsHba67npmidhhXzsPTxQHE7dFQBTYyqfkNNM8o",
  "key34": "4VQchcoSGEbnu54uov2Nqxx9Tq2qCaq8b13EJUesurChmrwzMCxNhzRTbDmtuiiSiH8ENZaWSv5sQWYmwuu5BAEt",
  "key35": "43au5MJZfc5kjgbabXQbjBjwkQ3ypzxrYhQcrkWKLo4ivY2hC6skgMDaqA4te925RKzuH4frV1AZMXZuVebiD4FJ",
  "key36": "pNTkT44zvMo75H6193fqBo4brDbQ3ouJhziSg63Bij8VScwXTmWtifhTBuihUrffNWisXBYRUkZ5MJVaxwfnPXJ",
  "key37": "31Shscz3y9FSZpJD3cE6SViwAeN9jReSKM8NsS5NquGepnMZAYVLVmJ2MtFjoChg1J9RLF2NW8p5NfADmdG78CNL",
  "key38": "5WFyrh3Mua74sPJzt8JC75kgxDNwnBDYDCordFH7hFJzDHuF437Et6AkQrCBDdYQmg1vyer8UmKZw21EM8GTc5er",
  "key39": "34gZHr4QniRpHEs6sGLE58tLt3Y27UUJPh8XqTNsB7iWjY7kexhHcnfW9DCyDVi6h9YZ8fFHqdX5r4KEyBogbqw5",
  "key40": "4a9jtRVTQgrFnGPpBcUUE3iwa3mfdSTJmjiZttQumN2BUvgToT3aJqN4mrLaLJVhUBp7Tb5LEGfEXSzGujfMyeqK",
  "key41": "5um3Ph3AYyqCDsufTCQpW2LZkiL1e1Ct41zhc5DdZEXjt4aUSJLHyHX1kqdDxggxFbbMEEed2GQpSyAHuzv9NyS5",
  "key42": "58642Xg1Wo3tLvEpHVriADAQU7HkzxuhG1v4sS93tfWniv8fsiQ25LSveuK9bA8c1nh4HBqeWEdhi3CUFUtGDSTT",
  "key43": "4oW7BCevJn1Nd8tGGyvMANeFqs7jEQzEdRvd1hh6Mpxn91tJd3AQQBmfYzrEAgCcCLYHHNgaeEpabPsxFkhreCBw",
  "key44": "3UerzXxWWBjY4zutz144h2mR7FHtYEDNNinQbWYmxJoBCBFetPKepk1ugpCkSt4BDL2Fz76FJw2Q5FwAX7DW6ZR7",
  "key45": "3r3LtfAKovJfDemYQ4T8o1tXZui7zKZzWF6CaEQNnZrqurqf1ed1h6cf7sXAq34Hrc77zvHekjBQX278gHJtKz8m",
  "key46": "4pnjnRtTBH7uambBm9e2Da47nc9rbL18gHQTeDucyknXWx7mLfvZ4MieR3Ven5mXVkvnpfhmeSXXTZw7sMoVLS2Q",
  "key47": "hLTg41YCGS3iNNE6u5m5S7RLtoLuBi9uu9eBE1X5642LZD7gJLFNmTteeKd6j8hYJ6K3YT6xf6jEWo4ne7NfYJW",
  "key48": "572xYQ72VQDCHu67tRWCwbprAJuetwpanqzU8wbiTA5fi4Q4tbYeMZ8mo3DN1Ynznc9Yht7wib4Z9BUNY4gCMMr1"
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
