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
    "295q2z9rgngk5SBCiT1u7ktKqHN9VV45uxQ4JjeXNuPxP8FF6WzdPb1RGM8Jk6GRKuscAkgy7UrdzYAVZyc2sJ9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrMmZyyTYuHqKmU2KdHHkdMTzBDKwpme1o4CMVAoSYtjL3zAArnsj4FxfGGZgrcqocRCoGumK2DGVBX7PFS3huk",
  "key1": "2PymvXpNzJyFt3tUgNb2R1uMAzVr3efgajaKJCxZ4JFzc2BShnJL89K1Aw9Za6aRisvEBEYD99jaGdJfjM8SHtdJ",
  "key2": "35QPw1wej62CQSrVswrGLW1LEnVpT6ekgKS56EqXJKiKdUDWoLQA2WP2y2XVp61nnhMbBNWcJVhEq3wdZxjvnQoi",
  "key3": "4ZDuPXzeRt4XgYcqm4vbiHHbE5vHxxw4s441GaggKWXLFyt2a5bhQTXgyfEVnTe6UmvF9x3twy8jbFqB7aEXv611",
  "key4": "3zDHV8szpFHwxZGfsYxp8Yc6DsdQMGu4pxn84kmHrbZoyXb92mvyvx5hP6EXY1wBstJ6UvWhvdT4bZTna1VYnN8J",
  "key5": "2QJ3f7S3fycFkurNJXeDxCRSL2rqtSTfQwfuf97exMnmxXhu6VJdVWN5pUqKqSV1nZmbKMfTCFayaqQFS8st1Mrb",
  "key6": "VUvv2T1WnvrxL8izsXqWsSLKY5rM3UkfSXLpoUwHSqtuAHJ6SyFzxWnz3URoT2qrsxkyEGHUoXsydLigzdidHof",
  "key7": "2CQMorH6u5VrNombmt9BqHNHuY1RKFLpYq96jER8W3KPBDyyiht67FoEW6WffKVpFGKzGVay3427AxE49T1fcMVT",
  "key8": "3zDhuV39BSjGqBXJznXABagENuEEdQxoyv9apREP9TAXadqtaKuiSLqzEkX4Ae3d2kZEAoDJ9YebDkZB54nfVnq7",
  "key9": "3mtqpQK771YuqTAZKiuTWwY8p79Nfyxn7QF71MqMShLxaBETcrRX4EjKKvk9vSgWskGxu1E1Qm5FXPdZnnN7i49a",
  "key10": "3dtS7BgACBA6e1Sz2MhtoJj9vgPyG6FAAi6Ws5exttwoQo23RSUmbXBLSXV9Wd39rb3uiiJDXMfJw5AFT3cRQsfg",
  "key11": "5vFvuM48GsdKYGk766iQbYiSehxquhQFHYqsHn2eoBjpjuEVVoUc2La97Cub2cP7neA7dWQ2CGH1rMrPyuLGFpGU",
  "key12": "3FfjVFBVcafeMGR8NGnEEfBR58qpYfn5o1MFjvhRnMGn5v2rUGVejbZFHamesynTUVxokq55RPJmWeT3phCsjjb5",
  "key13": "dKcaHTxxjA7bq9JKYf8kz41aqUcsitmfRHGrw2kCmEQSfzz8LQyJVmDyF6AdzcZMdMzm2P6TrMdoM6anEGwkTqA",
  "key14": "JxiY9f38viMTjRi1kgnNrUQS5V1q4tKmPiGb1NSadFA2429KnuWq8FH5AKxQoo4g9tU698hVTCkYnkfKYZQYWgp",
  "key15": "2aTd3XTTdBLHYE1v3vXPWGsCzp1xuHLJrfVfxk9jjy47M8RwnrCkGVuWmEY79zjFwHLXx4EA3s6LfvBgoUTk6VnQ",
  "key16": "3J2tvjKZ6JwrukWHKUXVVHT33ecLEPXp7x1PvvDeCAwqLNfPDp1jDUhuNJSiE77V5B6K955uQdLehdL6NPWziCZw",
  "key17": "62Me4kDVA95yWEjLuUDdonqrTnAsa3whX2TAp28YeoFGruiPGX2oPYmLBQp19GXSHs8yBPDMijKAx3hjTD1TmRV",
  "key18": "5FGyw8WTMijkyRaESSxPNt5cYg3JqyTp4NbjXPHF4E4LW6xdRh7mwNZjVmyAYyyY1bRpDQ8eDp4Pp6mdTiNK42zM",
  "key19": "NFGDCFXhG8SmGYZbXV41ZLSgVKUKStEtM8yf46FiUXvbTQWmhj2KAvayi1LCLtfhUczPSSK5aJZs2ojtEMcXxnA",
  "key20": "3hBu52EugouEzVhPpNo952ujByJsQWocg6n7rtf9girkzHrgbf4k6zzAmy7qA5b8nLJpcUb5hpGzBkRTtYDkrFrv",
  "key21": "2iwJiSJHHDDhHuWYkcXDWbjZCHqe8tQ13udV8PjgWy2HZK91SyKJfRd3FYpt7qa8MBzKWixPPQpBdbX6cwjHyFV9",
  "key22": "5AiZpsZ8AAX6nrwKj6vbT1eeMdrH9jVdvsRYV98iBwKBteYn8W7iMqZSQxfooTjz6QGqbfSnEE1fXuppiiwV43MV",
  "key23": "dqnKxE867RpE8Z7i29EJyZYM1qr6LFWQf1sUCHP9N36DPPaNVTi5YbNJeNgXbaPGd6TFdhr9FqtwUK6btLq6YoX",
  "key24": "5izEKLBwERoP3thAHuWTrBoEZms32Cn5Jjq6xpZMfN35dAdJMK9q4sZWjpQeopkwVL4s2mgrt4c9XK9wbzhsCTwT",
  "key25": "5SAUePH2C3948tNy5yLeAmnaqnBgzy3cFwKoNwZxnbmZFWaifhSymz6oRo1aAva5Rrxvf9zrJaniXWMkMZTsbM4G",
  "key26": "4tiYSJXPTUdJ8UYzheEqBYge28GGZusHfw3AosBtoaEPPGwo3giK8g3K6DiU1i68NFzehoFUZTdraajBqwbepDGo",
  "key27": "3dBXY95jVEzbEPLMoqMrjvDtyqfK3otvn4jLEPCsqYDhEkWvK8wNfPDuBLEZxM3NyNeCQjkxtDTDBiEBdvdqFYBs",
  "key28": "4jyLEhTfjw99JfcKpVTZZnuxCshU31Rkdcn9aAfKPDKqJbQwgxyYAj5qdCy2BmeUnijymXvaJxWfQqsMAExPibvt",
  "key29": "3kFnE3TuvbDizytLw8MPgS5iu2pLCqP23y4qJTHVMWnp8nLxQdAzBJJdzsE1u94XSBsFwZjzixfSNmUByFyonW7W",
  "key30": "22XhTpbZ1U1fy9NFpxjLpt8YrhiAburuQrGLuXPdeFVH9xQWJQZuiccYeCPf76bSokbyWduF1M3NfRcmLqxzMP5N",
  "key31": "5gzNEQECbSJFJFsAmhY59HT2VZPjyLaZyCvQW6T7gLy8DL5Cx93cYL4Wget5h1CGVyrsFN7zfjQMAc68GoEYXoDa",
  "key32": "2qW1aEv577dTuDoJEB5Lw2d4JwovrTgysbgNTrHkhAxLfqE6ubzoauZzrfbEt7p5MaKiJyLViqaM7BwGBVyCBvHf",
  "key33": "STLcmgJR5ozbjeBgKexi2MR7B22Uw9pvCNHNLKNynjYbUcYxtaf4wMS6rGLDSCeZPGidH6PkZuL58FWtCZxvgkH",
  "key34": "DW4KdsmYMTMZDxuKJEM6yh7LCf65FH9NiCx9U6CbLJG2t8PSVzdSUy9yQ6CinDG9k45i5rUvvFiSykP9BWVEKj9",
  "key35": "36AzTSkQedT4Eb1wc3hNfLWtLJY3ECwYoLjNDKbGboAfLvLSeMgnK4gze5KUoVpcqhkDpR7oXzRR8x77jbiY8UH",
  "key36": "4KYCNQXAY1Za8Mt5cTJvdWoxbr1mChYhwaRbRTsgMz4HvRTMiRqfzE1et1NPCuvvXVGVg8jUq7Q5M2QomK4oLJ65",
  "key37": "36qsDSv2LwkM5DU5jwgEsgUN4FkhdBEFBE1V7SuN7BWg9KUBN99fJppFRJstswYHke5ckQGMevKKW3XWJqdmqpuW",
  "key38": "Ub4JQTbDahmpusfJggC9iiW39L3piKw8TnyALgFucvqfHpggRStf1DX51ypSwHhUwGvpjUHbiYtBPvEatV6f5bm",
  "key39": "3xpR5bgxPNin2tnsaddaeSTo4EjLvDrZHzyXoWnaQhJBeT4pmPQJaPKuG4vDFVKq4RL4yKBD2bN7AhmpdEZg599b",
  "key40": "5sbJRtshrCCGiVEzCSJVPd1oLZT2CKkWKzentBeWNFQxvEvRGT1Lguo8F7yQF8FpwarXReyjnRp9vn1awS5HBYoi",
  "key41": "5mhRKzx88hvMz62jyXErr4fZSZTvH32vFHHHK2V5TwcUmptk9eej1QfcrEU34av4Rbogg2B7LvLfuWCtpz81LaSn",
  "key42": "5eY3aVUfvnDv3hai7XotUESKG3GadC39xPRuWjsN2TAE17VhKMSFuPgNyaCdUpYLyidARrjG52GX5mMRWg6zDDp6",
  "key43": "YN6ywKfuL73MgDvBME6K2BXtTnfhaopKS8JMqJz4KQrhH7bDNgBdtqkxGcX2Kod3fpCPuVc4SaZUsWcqX2Qjr5i",
  "key44": "42rLUaPrYWMVVECTuBBt5Ly7jZhtWBtkQ3gLXnfmQAZtv72pSriEMmcwMGHKeUFXdckMe8h4umDyDC1FfNiSWE5",
  "key45": "3yoHfwYDX6mG13gVTEJpciuR4iJ8zmGbRnSa6Dw3Wj1EooQZZm711kmWj5iFyYaiUCayQAjuWzPbSPEKdVLoMrMV"
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
