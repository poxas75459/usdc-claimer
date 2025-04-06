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
    "5AdoWecXiHrskLJssASbs92xMoCZ3vNihxFgsZq9bcAwP3h17W965a1CvU1Niv71X6JyHtmZiXmRTwua7zQ1vYDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25oZnaQP2vqdz8HVQTq1VqBHFDXGwoQBGzsd75mYuFkeJnjTaUMAYxYyXNVJChB2miRmVp3vFhGe9oCmZ7SkqyVg",
  "key1": "4buydP91gkn8Fr6qC6nkFdUrDX6F7MrZM55Y9wP37jZhqbLPeb7FxvMmn9yazHgGDv3sQMHoaNNSU7barHKjTYkx",
  "key2": "4PgeFTDyb6rKp1hupm4tkERibCPvUKohW2M56k4iSCBTfmcPiwRMEyAsZazbUbQFNXqpecC3G8QP8SDeGvvQMAFv",
  "key3": "43mwAj7vf56TtcgsfbscXrcyzPmBLfvJXWm33EMqmtXzB41BNJgEddtiTFPgHbdMW2s5bqySo1TjHyJnHKoJVtxU",
  "key4": "2JMwguSXjTqTHn5fDsAkE9tA6KsJaiz8QuxMswMi6kC9bncf4YyT11yjcWi3evKmHsSrr4T7iKP4w5mzoQDYbqiK",
  "key5": "3oUcyXPJdHMixQXX1Kyft3xHaGZqwi6necrgrM5a7mvN2P6BZeYGxJSYVyWKDFNDmwtGSKVn5r4ijZacoZAjgzaq",
  "key6": "9cTajfwxfmUgTWxpnvhiSN3baN8u65YdRM3FXYewCwnbchYZUH75XXehvPSx1EMTy2b6LQEpjdZyEh88vWAzQpi",
  "key7": "3toZTZ8LvQm81dokR8mATnxdaf8FEhswqFYqd6ybehEUoy2HhnEDcku8VDNm597cuaM1i3vqqguUWayFNZhmUZRY",
  "key8": "31eqmNQeD89vzcogm8gq6TZPASkf8zuLGeHcEtA7QzoMAgNXJfwjmANcD6qi8HrM82kF5zud1srGNzQAhuimJ2zp",
  "key9": "TkEBBXWxzbMdX8ByoYXtLjhUCa1URNpjSUSqACrjgHt6VSgCpxr5NQfJFMthb2aLXfR4gTmtDTyoygu2RcbGcMc",
  "key10": "5tzeypH3VkqQRgcTfnL8EmaUoKDTL3Jfn23EdbVCqbGPThz6y96vPsEuEK7B9Lv4CrNsLR47yYMJBE9D82Y3to9G",
  "key11": "25AD27aj2Q5FaVsDmxRpqi3e2x8K5xsb9kToB57pf24YdUynCvepDys8zYEaf4GAMLwpQuTp8wFnxiSgdsFnjpGg",
  "key12": "2wYuPpz9zFYyWSgvzbtx4KJxQzaSTokzWArVTXPsCzZS67rHyvL8d3yiyot43RajUR2ebEm7a45SBisXh12z8gY4",
  "key13": "84stJrAHCauPgQs6eq52KGktgZA4ydbfRnwJXSSBpZrGVZF2oFVHWb7Gkzw71cWNPExybnKHrRrsD5SejW6tTiD",
  "key14": "5jxdbnBFdZuqUDcc4Qg5LBKs323Cz6nmnA4xZFCxTAiTDozu8qbUU1QfiSegwwTtfBU37JYbArhU4uyM7XYWJ4pF",
  "key15": "3XsY4YqgeMb3nY5ebrzpBPHkr99kNLmt9mQ7Ys9Ls8KXHuA6dVE6ff4bp63PidDzav8o1XJ9iMq4ow98YCNXNspR",
  "key16": "4jPMHhPGRasX9qEZsVCsuT5oQCj6vpWmQJB8PtpS95veuyHr5y6EuoRXioFKVodFehopfKr9yvtWvmSNv4znWtUH",
  "key17": "izujy48C1sgRCfd9hrBsYwdvnUJsYydokRJ2v5771VmRT8zUEkziuEpTUZcULh7hC9jhmQM9cDNh8Ymr2QZhGQt",
  "key18": "595AjaGsDkLSskw5gTyMP9WUjWUeZqyXcpAGm4Buo9i45XSoyHkZwfhtfKg4W6Ls937Fo7j1Fh5Hdnw5y5rz853o",
  "key19": "2YkHpHzd94a9kfk17CpFjBMLMhALFyJz8ven6aVqbofaQ1MF7bPgCkokt3VVichPTZ9dbDNEbmSYsr2MmwrxccNX",
  "key20": "3wSZFWQzzokhztGhfP9uzdrmBmftrn91GPvxRU7nLb3fegPijwFRKVg6EoZGuR3BTvJysdYKGxkDLpHVUetGq8nF",
  "key21": "3YUc2fSVzU4pvPN9bHDg2iGoMVxJ72UAhNFpATDydVuxY96bd4cdA9gmnmy5GykjJsawd2G6HrUHUk7RaA1gpUSa",
  "key22": "3yV5bUJTCKLWGQz6XHRZiudB51eh4aW3C5HuM29FfodZ7HN4fD63CWB5997dhtAHzXTQ28eS9C6LJQcph5LCDryn",
  "key23": "2bUp3wQTkUeP1Th1Chk1S2wG9BXGoTZNjQgUJBLam3T5mfW3arNJUWVACoyqNFKVL1JMoK9izJRcMBugdGMSNBMJ",
  "key24": "4C3bw3vr5fLw4AnWT61MSJwaLzSVPKufhw21gEEwzYjDyGKr1g5oZB92oAQwDu9PSMhxXNr5FLhrcPZ4S4atLeWa"
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
