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
    "s5uGLXnwQWt6XHnrftiRyEcVJACtrHQ71aoFKsLx8fiBi1RLYP2gM2xvysWTTZrybJD4QNeY6yHqACohdydYWWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETHxMUXQ9CzU28g6UJaLtPJUhqup57y6Px8PPBVmaFmWodgYZMnRgbcYb6aBAQoCHUC5WUjCn6Cj3fJ2t1uiadt",
  "key1": "3RPZNBddwQY6HWME465BuoUBGv6ycBrby7BYrkqpMnGHgfujk7ECxMdNZZzmc3cbrh2YL5bMv7cJ6KGw7JjqYNKr",
  "key2": "eyE73W52GSmbK8C8ToQN1YB53viLJErSQPQ4e9rToj1g9EU5WRLVD7eccnKXm3W5YGy3PsH6UgtvFhxf2ZTcPHt",
  "key3": "51vqsvw7wM9bm8SkqZxaB6uZ15b5tnixrYZ6tsytsWFoEgQybZtiQd9q1TaP5YATCmNu5az56RimYJSizGauk3Vs",
  "key4": "23WDWEhb8F5GgY4R8oPVxCaBU44tZHYboXQKWRyZX8ViyQCCKRao1bVdPjXGEkakCNqJGDGjdUUbDC7ojqtVG8fb",
  "key5": "okYdL8KeMTD6cjPKFg1H83fqcgSTe3QogAbmgykRNjBRMJwKtgjeKDUHswrUosekSQqo4M4Lte45PsQrfsA61sn",
  "key6": "3xQpN2fLBe1Fv2K7ECoUwVTuH1r8ZtycLYJufcR8uTAbup4YVpCDrWzJTdoVzFPosjTXhmGjadzjEgHP5f5GTBNW",
  "key7": "4KF2nzotJSJvp1KZogz5jomD435c53ZdkmDUEQHgHdvSAXNmcYH2mh8aHvta2Wijtuacobhn8bM78ToZfFw8Yihn",
  "key8": "24bbT47kkeUbETtk5Pb2oX8qaJ32eMSiMJEcF79TuZ4CMQVRVcCQQWCxJHt8NrGMwHiyXzyLJKuA4Z7snncRUmoB",
  "key9": "4M2JETtg2LpWoD2iwce4n69H4CDUqhW1BHNDaYkyRMYLbh95J1THcs8Qhb3EWoKDayrnhy3TiGzDpw45Mx1s7rVX",
  "key10": "2kBVB1EEPpyhwj8GnLJr7phYbxQCZt9RtoBfwYCpwkd5SvLkBwLvSQJhe9sMBrkkQ1N93Zxi5M7gWaSvQqxCBioM",
  "key11": "2JEGBDveHCLZjmJtXVHLtZFVo9T16rUFX9MxFDBkgo82Eih1V6HFQsw1kZGFwLAo2PdHfg9iTQeWmwiSDdF9ox5x",
  "key12": "4C9mj9RyyS74RJVU3CZPE4hME47vuwxZ8sVhGVePm5qL72nieHHchN99G4fp2ziDZVKMGWZrT9jD1vbzX3QsT5BF",
  "key13": "2xpN1grDUFUECDQe5uCQhgcp88GkyzbYnveoC4HhnVHpKAbLhvCbSo2wrpzYTvDqiANevcBAZFed8dmnTeNHu8R6",
  "key14": "4LaXF6EfHxMaHSJq5oXFcxyGGuJsy81Ut7RHjYq2pFURc5G2JFxc25vrr3BCAVFJ1564nrfW65eRTk5Ngzvi5N3x",
  "key15": "2T3BzkpR7rxDhxW3buPqfu38W6QAQjikiPBnH5u5Q7tehXRgWQZMGjM69wiW1J42uBsd6NPvY3AamNa57yTPu19M",
  "key16": "55wdjWEE9QAmSACo9QWMJ3NBBzCw3RmnEt5NjHyT2TFmjWN68cq28mH1XdCu517q9Wgxt9tk24KrNRZsUDPPomSd",
  "key17": "Su9tmfkQcNjgJ2BFfyySETjUjNZTBNzcu7YsxX1zMxLCWc2z4bUQzoRM88myBrtmWbDiXahdxj7ua45QGP4bbE4",
  "key18": "hiyjtY1oaHv3sqT9MiH1JPk5CVRVEiBYr4aqd2eBHYjPuM3Zmu6eTx5HofXeyKPG8x7fjKyUWAnBhGNSVMWGuV4",
  "key19": "TckiYSw3hATMFV7FQkzEbpraoZwJyWPgxA9vy2KwEdmL4jGWjXntLRCwCatkXaj6Rb82hQFwHr5Xr9zwaoh66oi",
  "key20": "2WSpKG4YEGSJiY3W5vtPcPhb5M2jmTMkiAUE55Txe1vGHmA4mzV3EZNHGxCbmx4Qsu8mKTsV8BhLokkvXVU7cnmw",
  "key21": "5D64LCBpQvcXCaTWSqDuUnHty1T5mHPzA452gs712Vgu9HnLgCc9VuChecHTjA7qTvew8FQwZGkGUToXRLDY4HAG",
  "key22": "4hGVe3a81hqYvHHwSnvQ7ZrR9F5PCiNpFirrCUDhyEQai1gAoQd2vKrh4Ye8M5Zr5pLhbbeTNP5R9rTPs7QC7ASq",
  "key23": "4qneA6zQ1aNgjX9sXEYYpP1cyrD7BPiiYfj1Csx6zbj5qNcJZ5iA61JUfZZCHuyUFYqH32uB1EnF4FtNJ9VhRCsU",
  "key24": "4Ab6ZhgqiXUvngfb6J2MYtgNFxTrpAvNHmbeUhyPVZb8Pa7b9vKrvqoGtznTDUB6fvJ9xtszPHdqd7eJNzM47xMR",
  "key25": "5oY7SX2gYFS8JTnDhZ5ht9gjS1joJ2b2DSBx9AxCP5qeB23te4dBEo3qKLBEYnDbMJZqrZ2bpoDUJh23bnbtNbuh",
  "key26": "5roy79SZBa6uTVfoeHqCq2s73Hn4HPDP5bQzqpFW7pFyXU1umtCysMMohfTrVioRxyPCanP4upCP3J2xVkwrYkw7",
  "key27": "4oxHuPE9Y8BMfBwX2d2HdzW9nBTJKedYVQoZf5qKVftSKY7DupK8QxjnyuS1eomhpm4cgxEw8iXkspwL8sA245AG",
  "key28": "4MuhFfxEMXHqLAHjQAxC4TRr1sQYEJJ7M8ryGdu1Y5HZCP5TUTGvF9R7xGhfNQhS5YopM64hhFFS7Ux3XXBQBjsq",
  "key29": "3QaJZgUb1vG2CcWCRB5V9qTupfDFX6BAQhXbNJKhrKuMJCm6ZjY6qTxbzizPHqmRjWhmZr8JCg27BSLeBkXZUR68",
  "key30": "5UX4MzYtfsFkQcU4NHLjQvF3inoUtaEUgsBF2XsAD9y3s9NBMj3693daHs2s1myUoz2vb2yEtQjXZ5ji6AsSiKH6",
  "key31": "4r1wA97hCY7xDNpR5WVgy3qWcpxgxEMXfLtAjCBjAsa6zVBKuL1DsQpbH5k7ixxdmgbMCppTYayxWe2LxH97AT6E",
  "key32": "2kGxuxDy8EzcvtAs4qAFfSBWuAsR3qGEcqQrRaqnSLs41xLG18Pq7XdZycFAeJ65oitrUszN7Ht3kax9arQTc7dg",
  "key33": "3K2mHr1hmm8nE4KXJq6hCfZdBf4sdXiwXpfMbrgJw8zUquWQbEKaC4qryh3S2e8VrpACe7Jgc6vPk18wL6ToRn34",
  "key34": "5b6mZH7QaouR5b5WXsXa93JF5pboHK9xXyV8EDaxGt9wrstWUqJXeLE7RC83hxsfqZXB1wKPuWc6Y5jka1DhMUsH",
  "key35": "gjwmZFrGSbhReXidaGcXsMkYajhhZetkzvrBUaW2jq6SpuFwrVuzTCQxG93D6dZVuZXK41u5nkkmvCS3ttowVgJ",
  "key36": "2KXjvJYSdTyA3DyVtFrxy8k9aVzn6bGqGNHntguBGCkSDNR42cgbJYDPhWbdHocBZaYsH9ufDrNMBWKbqs3UaS9j",
  "key37": "2CF36W64TpxanqYdbGTP7VYnjtTMre7QkuUy8vyMNsWZMGAiwcTgJGbCiv6b91id87vEgUMoUw3hVABrpW6p72mp",
  "key38": "vfamXKXkvRBYK1H1AsNdh8PMdWjwgEfGvRrdKNqedF4e4voFViKUm6DNzAY86s63PSniaFYQLDuv5cW7YJrPAG4",
  "key39": "63uzEKW8R8wtsApEVsjfJ67ni9J18Wc3TQbYmWJpp9tcPiKTD7o4rFCD9sV5mAnyJciRp8WeGicYXEYocFWYboD3",
  "key40": "2p78HyALjeK3rZUpSYLMoDm6KA52LkRz4iN5ujtyJmnEh3FrfWU85jg5P9Dj6i2D1hVUoTvaR2GGJoDoMatdSEzL"
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
