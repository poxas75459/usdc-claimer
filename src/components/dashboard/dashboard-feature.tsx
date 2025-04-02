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
    "iubzn2WYmDZJjCiWVGVsNo6LUwZSWLSL13HGacV6j9gaANhbGt8a6nQrxgLWcHnkZSSoz5Z37E6eoEGX3x6pYVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43stm6pMpMoDBUmHt6UGwZhQzvwLSbYxRTbshck7gtxR3RW3ukM6o72dXnCFxEEUHGDXM1cCVCNdf84Tr4VuxnAw",
  "key1": "2C5wKrHfctStQt4s2X64ymo4kJf81CNA3JVfxVn7MA8uPeaaaZexMHJASkXjn5KJ9qKhunxGia7cczZnF3X6LdeE",
  "key2": "4nYYrn3Fm5mccThTDgrVz281tkLpLTSXrqmPg9fTTrGSB19yxRjf5tbUfaApN4JqDGWskPdmQr52aaJhwsh3YyQF",
  "key3": "39Mxx1gtoLdxmEcc2xRybpZkQPQg35MhUY87NyxczUmi2gPQPvkTUTvfDmcyE76EAH33ozGqDwd1d2nmeZFJMq9q",
  "key4": "2i65FJHAL1YtMLHMKXe3KkkL9CeF8WBuDeLsxPpyft5aqAtqYtQYDnsRh2xn6WvmQw5xWdRgjjfn1qD5wVfaNYGZ",
  "key5": "AaoCdGWvKaJQyHWPofHdPneyj9zhsueuZeQckS4y6MMUApgQs6E4BZoVfonk2SNbHNdasGCpuPEGQGhQegeudZ9",
  "key6": "uJaMYNgW2trFx8upeEQtCi66RWUC6w8CDX7F3Ph1ePEfFgmDXABpJktXzbgc2VTW5nM6ebQ9o9VcvSHCggGwcZW",
  "key7": "53GbVUMrjpoUYMT1jwFkz8ye6EecyaRXmoYpPruBetHxF2pzdX5DHoHqZ2JxeucjuT7CMEC1E29Ga1Jepti3HdHS",
  "key8": "4iEVokfmSZMJejxTfhcALxbXsEHJ7ZK9e87Prr5FLr4WUqJqQES7w3fdtidLwth82SkKvpnDg7ipnvreKwEEQtQZ",
  "key9": "5ediVzXUsdrFJvWpSz6vaAquewJqa9oCLeFfiLNBLx9wLNt6CmZNXbuumLyyfph3EEhprosKgwVcV5BnqPuty6wS",
  "key10": "4umD9RT1SdQ3zcCbGDFRkCpwNrSYjynzzGPrYEu1MCWRaH9UeBr7pSf6aC33NRaQUTYqBuo8yfYAw7zPyRs8HeW4",
  "key11": "wjnHtMrGR3oFNY4psMmDd4J1qXyhZS149BZLVgs4bqy7wxbDbjUoCwpYZ2gX7mLdVjKwctRmVhh9krHx59C5zrj",
  "key12": "wJb79EjQZiLNhbkyn75QBQ2WLopxDmJuPcUNhFeAtAseG3R9NLG7UGceVFUa7j2y4GL96ZjMnbbrSqCEb7VPwDd",
  "key13": "56nCvvudacGUAu4EGkHXMB9FjiUPHnMJq7KTtKjDFzkYqjpRTFK8KybKfhqMagc3WApu6Z63mzBzQ2GoirguwkH6",
  "key14": "2CctATg34iid7ndAz1b4CiH7ZUgpQsr8SktSaUnWQxZ3p75iZwgCmz6KVbb1RUEQuNookxysmCfwMH64xPQdWc3u",
  "key15": "2yJaGmmTZYN3Q7bgjkA45cFH4WNYyqLsgiZZFsLpaAB8HdsWmCJuqwLoB2G2JZKt9i6cCJJU3RCAcWJQiGYR59Wg",
  "key16": "4QSHSpiLiZRFsn5WEHH2rDtVKFX1XZD3Mb3S1tSGkiP3Y2JtZKh1vgg3QwvnpvpDTbjNqn8TFv9H13uHdmFf8moY",
  "key17": "55sKpsGv6P3zbGsD2MWz3BUMqoSuvXpUJSNo7hYbX6vs6TPcDGqSx69VnaEfyzCNwzhxXWAsJeKUS3huj2gBWjPv",
  "key18": "2eGgPFhYY8iHQA8vZg3YUy9HbDpLZsScK7YkaPdnPFD2iFxGnJn7hLKTwz3qRXY3bdt4gbp9aWVeRynYnp9bTVBt",
  "key19": "4b7gVCxjsohJECRTD9RVV7AQdbhfuXo5fmvjwEXy886WhbT6rU8EVXiPJKJAGyZPYtdc72wbRUcEZQvGbbLXAkLM",
  "key20": "4r2bxcRQrurq2bkyE9977DQjKUepQTYJJyeCAfu6w8fE8Jtp8YxyEUQvuRefdvfH8EZLP67qqkX3RY4ocwSZKMN4",
  "key21": "2apRUqHyDG5yUT5kUtZtA3qYpnR3RCjCGK2iMWZxyC4LJwRmPpZdP2Uyc9tDTSWDxLF2Kutfvd1uS4HaE6SZK2CQ",
  "key22": "4Mdmv1LxvWkVttMWKTJETEsQQa4SQjp91jttzbgk9Qwb8pkUPGggvQ56kRgdK4APxATJvK8eAAqKCAxpz2KTWdi4",
  "key23": "VhbfPc8WAKQCpHmf6vc8c3KR5TEDZp2WJJoAdLyzc1vJWpxT6LwBzvWrnva4hauRDAAYqanmEkkhZknmGJU162u",
  "key24": "59TX6puX35mcTAYu335vkXxXQAtrtxtWrTdyXPgGESAu4XkbZzC7Hs5rq2tbzN2vnYooyDGdnd6cVYRXAd8KarwP",
  "key25": "3mfeneFYhkfZDkzGu5h3mgJbwumdKeE6RhZEmWiEwVgPYyZ5TREXSKowdnnZZG1uYKWsKmVW2fpfejvpCVVPsqWA",
  "key26": "4PJh5HJM8P2KWj5DUtjc1LWjxEp3CkDQAj3Wo6N5NXV14LSsnrE2r4Wc1zUgtaUZgzjSLFTcgdG9simQqkP5G9TT",
  "key27": "2evJdutc8SF3siGf9wNEaNVA7GB1FvBxYoxnHVvMgYYEC2XRu3xSYPCTRDiNmC66eGQMD5sXwWfZD6MCtkLvPBSF",
  "key28": "e7DnXQJ7Zom1BsoyRbnaX3DuyL2YbfxHeJCJ4QQixi85NvG8ppPdmr4jFDoX7j4pP2wEMaMbHnd2e2xkS32Biaz",
  "key29": "4VPo1WHDm3gsujLnHRcgrqe8Cen5NjcPAWYBEonyy9K7fAryxaBtFrgzG5Un1J446KHzd3sPaMUzBmBugZ6HtyaE",
  "key30": "3qcWznLDfg2fowaSkqAgPsHGj2Wz2Te44bm6L6VfnFnTQjtj2Uga74yWEtNb639ttmN7wm8HNodo2r2Ckw8hB8bb",
  "key31": "4YTbbk7ncKyZWk8Y9xsdkxRRG8rgf9hN1LtESgJxcQVFiGHjT731t2iawM98RYA7Y2jR9oyLEsnJNzs2feby2Kpx",
  "key32": "3iX3HjknstABZbqJJzU5vQrJiTT9QCWYMGjKoETVsJn7wcwoRK1QuU7o7MHDcC6bopAn3nzYFQLWHicograWnCAt",
  "key33": "64hqL176QFVTJwsfSyj7QMyVTRYr5N2mbAxEM5EzpLW2bCtJc1bpmLCHdcfkkJEWLkkhud76EoXGJR97Rf6EWqdn",
  "key34": "4NZyw4eMu3BTdRoNG3zQFroJzWCxY161KLkcGBikA44iRCrywQ7PUeiGmne3NvcoxSxzuRVq2tz86GDygDDyqvPs",
  "key35": "2JFZdzqGd1e2m4nEPRUm9rKswNPUY6TuZKBYDhwU4P93QtHjuDSxNmkRbDZoxHgs3jDsbVBHdb1shgrnL9m5KSjw",
  "key36": "5mmfSabZPgSEptFyddw8JZ61XxUNPqqGWUXCsMRhQMbQFzQ8C5mBuLijSV1MxCwNNKyc2oc8Sa7YTc2BTsAwock",
  "key37": "3yiuEpu3skHXQyHDFMkJQZePrBuHzHSWZ3wymfzmt6Ly7Xk5Lt547wu7cUx2XLWyoURok2mMeza9k1NyAqmsBzz9",
  "key38": "oskyAv4QLfiSjtAygyCes9RoqcXfBxEPorMH1ekYEizweQa2XTFvTMuNeVCphG3MEDQXBrmFzDYffxzptWVvkJu",
  "key39": "4zWa9wSSotabPUeaNZBtw6wsM6z6T81gZdPnWBgMMGRPHQHb6rjNg9WEL8VGR5DYUAv3RorBazhVkaK2ewMVrUWh"
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
