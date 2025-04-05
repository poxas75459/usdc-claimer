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
    "45H4iegshBAyMp3ALAjMtHtdqA5dnJ7ko5iuUGM5D7bZDnxivpkUi43Mvkkg6a5ZRdiJQ8ruZCn9PxyXpyFoACS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zybmBNqeqWQnebtjFNvGSGDK91SZxwQwdS72ihosaEYUFg7t7EcxRXMoQVwAfi1iE9reffKykcA49bEEquykEum",
  "key1": "372DLRfDLznrYcb5EansFWCkiyYxGuGKKe94d68eagya1NvWRyo7muJj5Zo78NmitS5rwqdWgcQprjJc7CfwFfff",
  "key2": "41a8qSRrKEYYwbgfnthxUBzM1zCMTJBT3FGYumNo6eVcPzgxoNJdEzmntGXFRxL6jtuNt8KRP7FkcZ41dThC9WAq",
  "key3": "5FwxVxmNNKeWPfc52yGEDWo5ro1kDrNfxsdn8R74q6nmDghG5cR52wxNj2pVNf4FpqvgFmiDEn6z1J1csrig76C",
  "key4": "23H6jiERtZ6zVy1WhLBt5rVRWZdx2EwRRhnSpzfhRxbTgjyz9HrUUBeo7S896YjmnuN2ZovmcxrdT97yXKq3fbpu",
  "key5": "3hckmRrvGF6Wgn1fhxeASks5JCSSYihPDcNpfwX2YD4TGTL3CC9ZZj6qq2VRFjTMow9n9Zbu2hBBPWwLNZ16NvpR",
  "key6": "XvoHdrsD9ud84k4JhwUaXY4n6ZjKE9fUHsve2RszgG3UMdh3jaMUEcHHxmuPXAYBbqzXnwmi9EKNjveGLwM5pW5",
  "key7": "4kcXoELHQsY47wAmQ2eRbBhsWTdN6uPa8zaVimrT5uozDCfKN8Rivr9vp4Q5dJvn6aLFd7KX9pDhpdcLPMGnenE5",
  "key8": "5kzSfajt5AsZ1fK9VHsw5DBvgcRSyXgtGVjL6QPVLK5gp9veNoG6DMX7eNacKwJ4X5G7xxZoagP7s5sjankTz4tP",
  "key9": "2Zkjo1ciPcHxQscpm6Xummeet7rHs7qBUkCfdnuo351NzbYKFbYRuPYbEfqoifuFMdrmWwHvjGURgJ83ipDc3FHt",
  "key10": "2KQsnG94PjXB7LQxGrk1bB68agzCLFkxez9HRx6dQdRT59EzbCBSMMUNUof6BNwJUNzNnQLWsK31TLFZRxnhJdK1",
  "key11": "EYPtVoXijVkBAGKZLMV1okhK3tRQFBmjqCRtfMHMLbRgUAnBEDmijtyvLPQbGqaPb4nXUrtyyaaATzg9sk1HDA8",
  "key12": "2gEtYZs5Sq8APAEanvDHRFW16ewy3xRj7xpofz9SFX2FV6pfycgvPeiAyEWXHcrLfALjnafAGC366sQBpd71duLH",
  "key13": "2WLdgLprQUgwoiud1xxQQf7aAUEuCHqtvacoDqiGv1VApbkHpHjkm4vk9og1ZrzSJEsKVLA4rjUdSzR86JLAuatX",
  "key14": "9AWZ2dA1H59hiftgH1tAgAeMrXo6pukSc4VkDCR2TBZ64eJYKwJ98z7XjYiqbRj14ZTU6ya7pxSR1UTMnTWbww8",
  "key15": "3BMh8QZypaBRFfnDseR3VwmLamagzQU9jnPznP8pbt8tzY6WFVMkE8ZffKbaZ9f9V1XctSABw9YzcrgRG4SRaE23",
  "key16": "4yKVQaXdcKBLPMuJdW7ux3jXuipRZrPmnMAVZyCsEpTqDwe9eZ5iKaZ4MPp1iV1Qp3iGnZs9MLjU2QR6mgqc7hHR",
  "key17": "2R29L8MuxVQ1uwpq9Xz2zY7V8NFrgd4j1xstz9YAjNqTtJPaCdPghq84kquUU9U4gvijjW5hXJ6mEEKL3V4Rywbx",
  "key18": "DNfRK5MQ4vA2uV7prnGHPK1MogDQEYUaJbAerQMDr86nrVwv8PtbnSt87k5W4TaNeQHz9hn7otG3LbyrsK3PRpC",
  "key19": "2takxDtD3ZktYzZNjXN1SC4d2KsfnBGrTH3pwEhA9w5FUxLMCxZCU2M25UwETmKhHzqkhZG1jXMiGjmpafctEF2L",
  "key20": "2Ziy8UexVKtiyPwmtk3D8a5pjcf5vnnCc4hVbUpdGiAF47QmpGqmwBVimEAshzTWEizJk3jcuyhcDcccRk2kHSvH",
  "key21": "5aZMFzDjpCRUn1tL7hgunTXCAAc13KK79dfJ38E4T82aZyn47nyAPqa1m94f3Ru9ri5rPrLRS6DfzEvZxdSoPnPa",
  "key22": "23DX4UT1ReCWL9mvXnCqCRHkLupFvVBTxCfZwh2txFK8W8S9dxwzBd68YZvPJ8UWekg3XaL3AKhkRbMMna7Vfu4v",
  "key23": "TiGT4d13FVMAc9mVYZnDsq9VSx1BzasaNeP4X9Z33tuNWDxCeXssuxW1TEGT5gnXyoawx8tHGUdeavLpaFs5f8g",
  "key24": "4pNinNmh794kkerTAmRybiGoCz7NZAXAisBfKyzKE355r3k14gG6cqUzqZTQgr636cxQtLfUCYgXoqM8Zh5mUYCC",
  "key25": "5jr3K1VweZTgrm3PvQVkcKLMthKi49b7kaQfveoki2FEo5w3zgjqb3W5FfERwS2g44aUDYN8f41BRjD7gHbQJKTD",
  "key26": "66iqUjsWJsMDtBmgppZ8YLLk5vCbHRFXbeaN2fF323xLQ3Mge4GbYdQzosh5ftitopFD3gRnwDe1gZ7y1vPU3mDc",
  "key27": "2WWRMhmXGA9BtM9tRDhGKZGex6fdd2JUKRSSZv8k2VmP3sqWNjBY5hUcWWqG6too7kdwNiGn1E1ZVdEmmgLZCqQa",
  "key28": "2FAP5DjTM6VKMh5mbe3BQ463wYdar12T9NsSoibbupumm5EVLv2qZLh6fWs4kQrbgCERiafSJy8tY9qD7XBLkDzV",
  "key29": "2JWG66ZiZEtNGPSdiy2EvuhXrW7Dfjq614ZWKpEmA9twu26gKzVPdU3XXp3j7vBavwwZVL472b9RrQC5dcnwUUqa",
  "key30": "3LPduBCRJGtiDY6M8MJExG2kbN8iVLM72j2H5NzjojSirYpDSqXoHYtVtgpPqvk8Za8gKgSc9BRaF4aHkpEEctz",
  "key31": "32SMpbHZssdwH4thsUp2Y5mAT9rGF1hKNSFhp5MaHdnTK9T423NiAcFxnXMMqbXP6enDYaFnoJ7Eub7BkDvTDZ3G",
  "key32": "H6v3PLxZLkYFWgaiZsGZS1f2VKP3gTFj4jHH21jSxQqxCyMRBPnUQ5HjqfLCwuGo6s4BDZecMtw2GMHFMripSoW",
  "key33": "4XdtuiRhWBMQfTSee457ZPfRACiiLnw2JHkQzoRAqBSoHHmGsgw5Uy7V7BdqiXXMoYDGgyBEuK1ZQgyvCfAZ8iNz",
  "key34": "3Us5pV573LP6u2sUeYrBPngg6QtcBpHLPQn5HhnegB6wpFjQduZCsfVxEBobhc8xdz6hKNJBGy19H6yvCndbLv6P",
  "key35": "33ecHxEG3XAG9dJDrT3pD3ug1VWfB75wHc3EWs5LXEV9LNVchN4hya1gNRi3nwLNXVqHnrQmHeqAnFbbe57CAFuZ",
  "key36": "5JtKjCXWeEeTo6Vsr3dhm7gu2aEva9nF4e8ko4icuCUsF5pkPEVC9y5jPiPZC4GwLEkzMW7vEvahCta3am7a8tzw",
  "key37": "2kw4jxmrV45s2c3vCp16o9kKAPf6u5Z6rJx9jpujj5NebK6KpvvyRcoSeHhiDvymnZ5XRMDR5imkmFFr6qNdVDLo",
  "key38": "3qgHuuDteK2gXa45ZWjtW4u2nt8hP7F3QUNWu6TVf8wJq3pfxPL5Vea9uBJkecSiu4gZV5CLfEU6jeidT9SDvazG",
  "key39": "5Uf72NBZfh3L7PSG1WfYv2fM2pDJv5eqEnNWmhNiBYnWphh8ULjt5uKTtu6TVuxfSBquwEwbcYEKJjed15HqrSNy",
  "key40": "2xr1PaLF4CRvm1ND1oxEqd9MDhijytHN7bYaS84etY2na45Da8J2KMPXMyLyFCCy6DRSdoGCoZQCwE1UgZvHxDEt",
  "key41": "4258f8EniSZwCyWCN8T2sPyTNRAe9LX8QWeje9WavpLdjd21RTCHUyVVoyUSY2gMPd946GQJV8f1jkXBEvRFo8VJ",
  "key42": "3ZxnDS3TVMvtnH5f2TBPjcND5HtZZjiEnP32UaeS4ybNpR99HjwZN89BhNXmNMzCSpHYKt4YDWZNJtN91VeBXSsP",
  "key43": "4tyPft4zAUcD2AL9iXRJanCzn3ULwcFkktaHdJdv4xJT6fSvR5HAKNteXh15GVAkESRfP44nRs639Q4x1TWzrT2T",
  "key44": "2DE8qicSMrqL5WPm6pFFYcPH2cvGVR2USAkR8VceQ5FrUzGvmtvbHKjQ33GHkt98bHqWKVkSeSH2RP7nXjXYGwD2",
  "key45": "E5ScJAt476XucGWkusbHnxXUAoCr6nbk6Bq71yK4krJdb7C346jEmhGsAgUM54WonwnfhkkGDtTQWQrs5nAXd2e",
  "key46": "36oZEu5daXiuE8omwUc9w7tvKTCN8Qpeuhz2ntXwzdMn35uekJf1SAqCZsnYEbQzPcwo4xzUPLmxBhTWVMxZHhZG",
  "key47": "3eHUiN6i8Vw92CPnDPv5espf6tiwx1gqhQMmPooE9B4kA8r3heC8LkXaMBG7HByytNQWuVhyD4E1EaowHd5wJ8tq"
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
