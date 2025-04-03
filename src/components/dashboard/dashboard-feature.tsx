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
    "2ATiTVrqmutxDM1tsJ5bYMiMgPpRRkvy3ziQqhRmX4MDBrJhH5SPo7KfrrqcLmtTyVLMzHYgMZ7e5qv4SDTRyaD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MNatCfgJZqoVQPAs1nARExovnkHuv2Di8R37eaMZDjSvW6gH4KomxCBh3o2arVtdJnYpFSUvhhqcRSJ8ihUsJzo",
  "key1": "2XwnkV9EjqJsvkV7TYivTiKSNFXEiWhiHwpU7GmNxPKmR7oZ7t728qwGYywPZesBaNpMvg8n9Z28Cc5JrefJApjX",
  "key2": "U1Zxmszh7FAiE9REVoFotzmKRNKnVgXMw3yihNZ74anwdzRoDAhzAyKTtiJUtU1w43FHE4HcVq4AQQw9j9WevDh",
  "key3": "7vvjcUosdtHmhhmVfA3HwzkCJnZCqnMsMSYR8dp1u7k45Q1644wDcmLoKKZ9JsJJ2Xgbo97ZcqBGBtJ2FBUrCZR",
  "key4": "2FswkqxwdoiLKTNvabuYdGufP7gBybxPWz2WgLZVjg9DpJfNdzCrCLbWXxEWMrPpX2riaZGoaAnDcPqpWiRGq8iS",
  "key5": "5iXV5TSonrYbGFq9p4QZ3HV3uEnMaWsAsDRnF1pJoSaDhoMJ66J8T8jgeTvdLNbdqxopJ3h1YHBFFsptiTeBqoLp",
  "key6": "3uzN3yPRbBtjZ8Zq9MqzYCpfLLjGcHLYSoWxkNCwBAnKB25ZRt3jw9MkVZCprRj27KkTXXpxC94RfFMnSVgzsfFi",
  "key7": "5SfhXLMuq5N8YJTtH35eKvrUskFvm6dkmY1SGrkxuQhE7wdR3wASS3LRBeFcLfonKJR4FswWU4BKmF8uYKHrKSwF",
  "key8": "22Hm6fvAyAY4wLNYyXZAcGgiw8Ya6X3Yty1xzgDmJC3CR83eDLgZLmsXfSgNwfL8ZoC9ejgETxwySfdhYcJv2Y6X",
  "key9": "3qNgEa6797DATkEpmYJdXs9ocMih31P5VK7CvcNFrpQjXRwzCkcj93wsmxL2qVfL82QYSDpAo86rSZiGpMKJGX2p",
  "key10": "2TiP8BMPaisuD6uWjozc43wTrMU8ywPPPaBH1FKmUnMa1YSdizZwLuiQ7veCNFFdgxv4PYgJ1p1QGuN3kXp2vgSk",
  "key11": "2mBzZKBTbgNST5YKxdSXiAYbk7tZsoFxjThuP2Epvg4kNXwWwP79Xa3wHEFnnHy345f8rVkFJiWyABePk2nhxtbg",
  "key12": "TYT8xyu5phEr6SdeETrr1ur6CP9rHYzuawWAVKQrQLz7xKBCLuc6GhJLXRDXbZSzh183snfRybnCkcUXjwGjRUh",
  "key13": "22sKBEip2HaD5Sk78FU4fewEo1YVwNACPHGhwxsTJVVczXyr4cGPBwnc6LroZ4zoao5bctAJeQ1aJc2eoB93qdo3",
  "key14": "61yzMPrX9rxTHU6B4ZgfMcRuCHQxZsejqjAoHwWXZ87nYzETe2DCezNJgHGYqs2PvytsijmDFXLmCJW3Kn6JPeMF",
  "key15": "63uPrCgEUPyfwCwkUAqGBgmXfdKA79puGSSe3ihs4PZp4GpPWVfdfgDX1mZeYfmbSVPVwT5MTJLfFbmjXVvYeSFQ",
  "key16": "3VSRfGtYQ43XUq2vARdrRHZE3ctDwffXn2RhTKBZuGDnVzNq93VYuwBtzrBJLMSPASZAYaivwk5fi6r2VRTpZXhq",
  "key17": "3CAq3dKpR46Ei9Nbf8CVFsuXUrq9KD7WJqASganaRiQFmLXfr72wWpgicAzJkZefAGJAk4AGwWUNaoMv2oX8tAXK",
  "key18": "3wChun1wod7okEydHoGHikKEZeCfyNNQ2FmTTwoa45tgmUXuFYuVsXoTsb7MxCZttSSp9jaVU55MuHPT9mHBGRsb",
  "key19": "24zMQT6hHuYxZJELXezMf7Rw7Wvbe7Kv2JoUXJF9QCQm83wroB2g4oNBQgarCuho87Rh1ZbvB7z3cc3nd2DWeg5U",
  "key20": "2e4C3AGoeJgsVy1BYc3ZrKTQ5CS7LBDzSzifM2kvXJWoCNR5Q4MFokc68rN3jdzah4Fn5ghzCqLmh1QW6uLLCVKy",
  "key21": "2Tx54iKcCCzsJb48BhdpoJ1jTU38KTfcN3X4dZ5E1voWzJAD9su3G2MQfPTKXccuyRngxT8ZMfZMQXKvZTMz25eD",
  "key22": "2PBuWNWwqp4mJ5osgvVdJdt3tjgNB5FnhVTb96Pk9K2PJo1AE7i6tEtd8quJvxfF97gP9mVHNQHQ8ceQABPrWeB6",
  "key23": "sbQVJ17PkmwFZXsifEBiagaDorC3JqALMfWbui2pBHEKDjd8fEAbkQkbPxg2cetK11Xq8upVN62ZirNyR2ViKgu",
  "key24": "4ATbbVj3Cbjhn8zQXXp75Emc5gLfc3xPCVjj3UPtqwEPDYwJnUCiFHGeBAWHfpsMxM1BsFmcZ7VeGkYNZGqGtKfx",
  "key25": "3S5Sp3RAcFLJk7xzJNWVjZqZQygkdHe2cFoYfVj3hWWGCwvGrAdsqfzJv11J5BGgohgmGqWARBtnNvfVs2ACb2Mz",
  "key26": "4vCzJ2jfPSeGn91FC4PgXbhHgKXVxCNARfWTzKjinghnHnmaNYL7Sk14RD4EmdFt6WRduvW1eaXFQhRaYUsC4TJh",
  "key27": "GtVNAkmxLsRHK1xo1Ur74EagytyYgu6RgHDccGy2vNjba54zRSDuzzk61H759KUWMnsjoFfuNwAqfZJSEwmz5bJ",
  "key28": "2KXFfaFijo9YCehEKBEZ3T5V5PXFoPvPkVHpct9pmGjpRRMN67UMHJ4xHqCcajbnmuzAk8ATdVo27zAo1aYVohXQ",
  "key29": "2ao8RjNj5NjXsuheKe3ccWVYSgtBp3S6iFFqkRP3shdyZZxuSvTd1WtHtkkDnhWRuCAg7VzUZHpZjhKCjeLS2pop",
  "key30": "67jAu8mrz3HtfAe1aAoM3RZqGr33nbYhsnTbykGWwhzCZved1Y5WgEVJr8A35xQENCuhTksvH5kbeY2EPbCPjuso",
  "key31": "2t3cqx456eSxVsoiDGwH4Fg8Lp1t55xEJXG4uUJDfnGaGSXhmCumzhe39Pu8LSwbhbi2z4qEN7KDvvvTRUkL6bU3",
  "key32": "3sPspRCS8CBscXgiBwJXsXUyhXSGcgUN3uRQTcP25CrsbNfpQkqVqZcMTZdc65qmoRWe7RbcapAcor2cTUHo2aXm",
  "key33": "3R2Yk4w4TEiPpFuXSfAcqxbMKogY7kqFBTj8dszobGRzhifS3XzShCoTgnVZ44QLBDwAmbDiCt3vLHJhkwws66Sm",
  "key34": "4cUwr6aZZ9BkWYMSz8XH6ZgsRdQUkM5WnyhP4286GHuXJ8FvRiPEjBuJpLUutXNHwLwA8gSEGhHv7hpSRugetMHL",
  "key35": "5q88fJ3H2qaJxcs6jUMiTaYDr3G2e51aBmsHgBByeoANADnP3Kb4u6yEJBkSZGmstk9qTmutFETPEC46ook6QZJj",
  "key36": "58e2KzoVcwME4aP6JTj9zKDGSwt3NJVK4jzTBzSMwEchFKE7PN76HDbiY3ea8pSpNxTkE3HwHZ3xb8yUDHv8ntDT",
  "key37": "2SS9PTzC8WPqWqPEfQ2a3bhVJF7L8v7mFZ75HDzW17zcyxDukCbi2zqJYmxtggAa3xEf2EtrHdvbGHuNa1WAnnpg",
  "key38": "2fC7TjBXu2opoiciWBjR5EUta2f3J9EfxWuk9s3YniBLxyiu2bqVzJmpLWVFsfHCM61K8Z2JKDfSGTQE7jAG4G26",
  "key39": "3psuNM2FbodBkh7owicWHzWg8MT3LFtg5at7TWn7GUT3Qgk3YRwEJ8CnDZjA7FNaib9GHwpE4Z1nw7FagpR5FqVX",
  "key40": "5KFSoPKeSEJweFPfx4HbhRu7N6hNLs1fgMvmFpSiiTkGANXfR1vt4xx1kMQWyQtRtWRv9LJdrACkFDnDTCDNZWQv",
  "key41": "4RTDby8qqRkGCdbLTtB89M5pF4RJgGpFBt9PtcgqPENHaDuq6RyH4WuXYx1LSfoYbd5S7r5GCwnXWhQQyyDGBeS9",
  "key42": "JxE3EM63Dm4Rsa1cnPjQQmd1yF7ZGq3ETZZpgy4gQv2K55VDyfSoK336Z2oaJsuDxxUhi2g6viMWRpfPNzb6Lz7",
  "key43": "2xUZRcyFgzFe7ZSH91wAck2jiPumtBBWyGMzvP2kBs8zngkmBNs1EyNWbs6UEf8W6SayCqQmtH119d4JdaEsP7Ah",
  "key44": "4rk5iiRRoy4yasmLSnngTYZoqv8JZMsoehXroXAVPY6BDGLL8dkopKXBCKZSjXuQ2T2SLMv2ACWyfwJ5JbDv1wwf",
  "key45": "3Zcxi75wNViUB9y16HUs6UhEfXFVm6m7uQZRmuwABbPRs6YbxiLZiYDHghPsA6txCwxjLFwydB1oqRFAUJKvt2Zw",
  "key46": "2wXPiW6KX8VoUtntFbsaTGaumHB7sTYocdnPPhGkwokQYPDz7fRe7AGBccfrW9EfqpzQLJa8v2FpAqwcvCjDJxjS",
  "key47": "5iSSqjCbKNA2XW1w4LJM6RgvaBRYphwFABBanXNCUn6yXh3m2d72BQvRDtzAehJE8nP19xfULYKibu5jzju1t4fc",
  "key48": "3QaSCwTdeLvMKJ6SD7Xkcqmy5vUa4ZsA81QcwxmQ1NtaFF6wzSoRXcMbvKgtzuJo8LEPyNT2wN5t72uC521JseFC",
  "key49": "2UAVb1q2uwxrHMo9FVGy1KTMxEPjwjP4BS4MKJMrL2h78dCf2pxwXogcKDP9zUZoudkTogAf5p4Z1VpkgqdJEWee"
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
