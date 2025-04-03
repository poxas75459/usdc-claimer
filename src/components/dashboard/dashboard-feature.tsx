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
    "5cTXRxFvxoEYLjSaE7v4mbtHyKCekgbd6vUzcNf18L53Qxmado5C6Q8D1awdar3P6GRvywXU5zc2d8QjZfBiFTcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HN19t67gSsZRTTWKgSBVnLoWtqKiidiRLNkm1zM1ebSdJGazUPyM4ijbiuiwnLd3HT6RqpDHpYU66xpEZW7m6ZC",
  "key1": "Hx8UpGa2dk9bAih5cXg7GRmrwSBhBmNhBYf7zVqXj2VABKFks3a539tpv6JvrJHQhsBQx7Q9bp5UWananN2Ef99",
  "key2": "3Di6ohhkUeKGUhY3KXQi3oU7DRmN4ajd7gZ1q1XpSycykB1zEDZNFQciMHbP5kSyp6RYpAT9VAt8XD3oPnb2hJEL",
  "key3": "greZCV7ijn9GxyrhBw5mjTCwbC4fFruRrbJPGoCuuL7PLLUHyig7S9td8pzsbnH77SzQu5zj1NfXuE4BSCKdiDF",
  "key4": "66aHvxjcozLgnwhHvEr4gvUAQtZymhpEvks7KfUCgd47HBo5bQin2LSaG4WbyKiKMtpyDyyrqbathBZg6bJNisR8",
  "key5": "5HtrQ37B2PSqnd3CpzVSyWZiRgvrHNLR8uG81x74nrjFyueuqmo6Gk8q5kt1ucSef3hz548NsZZPaQogRBwiyq4M",
  "key6": "5oB7yT4kscYCsXBmmi7v2ewJbbwXjp5zr79ecpumLVwNQ5PHYQidXYt6DG1sTktXKTaFcXwUzcDez6F5zY45gFcD",
  "key7": "4Y6h64THaXdrE3mE8PbfQPhP6yZbxbJvetVUq5KsWgMLq4uJ3p11f8febLswQvdC5eccBndW9gi1buSsdKroF7Xs",
  "key8": "3kdGBWft4CamDHzAM4uyCoA6m67hALhKPwjcRCTBxfzZWJG6u6Uv6mLySEQsYWZAvNWzhC594EgyF7op4jNifCYs",
  "key9": "556XzZngjkNC8vGsueLQvA1Q3cJfbd4RarZhW1bxT6ojCxgUB8pKYEjbaGwHvgxwBSLnHWLfqTUiLruq3SzQCQvJ",
  "key10": "3um7rpGmtaGrF9g8Q4NXpvyiJDfwVcPMpaf6W3VNrLeAj6nfAMoZgP7DnNXa744P6yrnoFXpQdWjiyfzrYwgdvu9",
  "key11": "2NrtMyg6vD3VbCnQxGkaY1b2suTiX2R4GvbN9M1FTfr2KvGSJF53seXJSXDFzPF3MLKuDTCxPnebx57AUo2p66BR",
  "key12": "3mXdbRxH4aFxVfJW4JRaTBeuJAnt8cSqC3WXrYLd1mFE6wjGhDBuTYZ6yoDckPyGrjwXP5VkVsnZeaxRA8D85UTp",
  "key13": "2Fwrwnx6c7WspfhEzbt3qjGZP2AaTQgq9CaJMzPHVYvkprijJVG1GSarY3bQduAZvJZNaTAE6MVrmH9rJFzKEhdv",
  "key14": "EUxdq9qCfHCwGXgCzrC3zw5c8pzLEXqXSVTjb4U6GXX4gTdTPtNRttxCwn7SfxXzSEK7cYma2SxFA3ukoKuDTvi",
  "key15": "2MmpTngpoNJiK2jNDZse9nnXS9EKVwCD23TcT1m1qpc8rXYwDZEdQzCsJ2NCg5CYhH1NhA7mLLnBTiawRbfVem55",
  "key16": "3f2vUGhxDKk3fzPGkvUyoLpkHvbH67qPWNSoqMU1biSkzGQSonnBbKTNu4yxXUSWHShVyS344drvYDvpGCpgxukL",
  "key17": "4CE1cQPukhf2sY8GDje8q7eH4Y52sP6fbyPBiGqGnddbhFG6HPg6Wu7feofjA7LxbhHYTNMD46inWcMmapHMEHMR",
  "key18": "4SCrQ79Bo6inFnw5xoPY7rinqtRShrWZzmcjxPP6d2wJaDkkkeESdmVRS25d5n6DoGX1xbu7ioURig86JvAM6xUh",
  "key19": "655HV9vF65PcVL5rg6VHRGkdF7LEx6pH4WEDPxLK1Q5dFXrdi6hRjwp3biMy8ahSAd1x2JceQJnW7DnbamUbkQHN",
  "key20": "5zcyYTip5PXMPWF3ziGwii8e66JpDQJG3LBqV44WdRjwinRwfjDMf5VJhx6M9vXcLgDRTvvuDRw51AT9Qfx1hqXU",
  "key21": "hKSoBgskRCVW7mqZH8JXHeJnKPq6fz9K5VeqfQQTfdzXF6GEBDQnsD1PkvYhLYtY8F66ommpR3uFK5hFMBy1QNQ",
  "key22": "2WhQJPCEd2UXJTmnoNDKoh9CdfxsYGDYYKXkRvTD6d7bnewZRxq4ETX8Q46jCFUyWC2Sa2KziJZMKmvfHcJXh8oS",
  "key23": "Uj19iq1cNm12ZgrtnkMqzZYDLeCibNGVoe1bZTwgZaGXMBS92nUkviUqHsaaZgZ86b3dq1Tbt7KhyLnpxW4Yrzg",
  "key24": "pyW4UwAheELrXZjgLDo4oL8CTtvggvBxqcbNXn4RZ2cN9myNdb984nLoF8E2CE1GGURKT7vyMgpi87Dr5NrkRnk",
  "key25": "3WBrqaAmQazmir9z27LXC3BKRWA2nhjULq5VJNxrNrHEKY6jhAtk8xoHKNvSUfDcPgj9rkVPX3mYmqjM9jKBQBqa",
  "key26": "2iegh9xfxsVfbFMh2NmLF3JpLDupv5rLj5drd2Ysq4wTiPzSAw9ZNnTH6dbf9W9dxp5xMfscQG9weB1fAk7efqdC",
  "key27": "2F8GVEeQGQm8yaMQxTMyuWHSJHLZKCAZzu6qhMHEMgVXf5HrATuj8n7DzY3RuVgENkvYXSxkzhsg9o2KxV7jMngt",
  "key28": "3AmkcSR1E8iAxfGYZcAnsWL1i2iCYaMJiG8u2WPrkmdLo78hSsaeHJZLx1uMVXTwWVVidtL3BUMZCgAoWYd7wQjJ",
  "key29": "RBNWG7mB8G9LCKsDhCzCYFeHD9UmDUMKkAfnGj1AyncUhLFW3CFycwnbA51MuWSLFPstZ3tEs3HjBbmVXUhHmFy",
  "key30": "5A355UugveXZEcYhkurV9PSF7WxSKMTqdgykrpMx2gcYEiLoXVk9jVFazyASUuofHHkeWpHzBkFqdgwtsLg7q2Tq",
  "key31": "xkyFpgoKJFoX4B9c4LsBH5DzbVv1e7z9rUkASFJwnhHMqmADjK5wUnJ8yTx9rPwKg5fWmwzPW6cosXmL49b6zLG",
  "key32": "WnTzzadboxFst7SuuBjWnKMQ6rxn2E6EAYNPLuv31FJEPoGw8dLjibpzHybiBqMtTXZziXuridK2Gr1Gzam1XCC",
  "key33": "DaWXuLUGR7WcHVj9sJqRHGmWJgmzwkr6S7FNyFf7Z7cDXNp1LWKcu6rL7h6R2nzmUrnDLXKz9YKMQcLXYZcf7eU",
  "key34": "4FWhdNPo6SENTZjQJRrFi63W8XmaZ8CWyKKXEEwjuVbxPr3zcfZ1jFpGcs5CMpUawg5jv7roRXFqLCvauEHc2HFv",
  "key35": "2gQRKEcngthTbh6juBSmk3fLs9pNAb8RjpAjHyhVfxQ77uQmBopevV8RiR5xbiTw4Ly1ntpgzfZiGS5z7gaCcyy4",
  "key36": "2tSuojbX3hvMpAgAAs4aj9gvLpbGMaPLwghTqqP233Uvj4x2Yrp5JTsiE5QCbJohoF2PbnmgpMUzRfsLasoT3Nsf",
  "key37": "drL3yNgWpAYz6DZ44ZdE2Avb7juBiwRi6wLJNDhDakia57c1WM3evmpXTLFpW43zXe2zAcmaqPasejwNmgvhAxx",
  "key38": "5WQSkEj5NvEvHiRKXMbqtzVcUMNGr2XwMxMum9jJFTRh9goKs6usKpzFnXDk4V5AQSRyC7j2LDkd1e19nA3KquFA",
  "key39": "3LVWs5dUUML1w7KBQ877PtUvZMuQnCUkSRc2tG8rnJTPfpjNBcqr6MB9A16Rxr2SLjoWuyt9xbMin1ndiwvg5p5k",
  "key40": "3Uq4SPQ6dWyyZpdoMspqkYMBF7Lu2ejvaTavbE3hjMiW5UuTN5zZskEygGUifnst36Ttj8xGkUd6ejXjUANcAMLn",
  "key41": "3yedH5BwBhMfot33WhnTCXxP4sN39rksduNbWmGijWimEy71XdH89FQpLkfWJB7B21sJwzEqjJmhFTXuLLxgEZBT",
  "key42": "2nLygRXzmvvHXYVsQKMsKwhDrUWVjeLGaPzxXW4PCocyyNPa2LCmL2t5Svt6uQEurJAnnDLwbt5VxH7wqA4663UA",
  "key43": "4KaGnw6r1Bt8Wb4EpVncUUrWugQjVm8PUaQ8EDdK8Tu5R9K4DGTMCd2pgfmSEmbuqEvMRP9GJijfFG9tT2H42aDb",
  "key44": "3gP8jazN5bu9AaukRAZ3PjRnMSQxZrigkyofr8sXGnYbSEqyQP3Euzyria2ZurhpSnqA5wyfu8Q9BXVtNpR6J3HF",
  "key45": "2V2XmjGdnPsimqFxNhM3cFAqWv1fKze1bXRTMUoWav2nrpCRhK6ABhb1pMkSS6yy1421DXqsTLqaKwLmLAxuDaWf",
  "key46": "4WBJ3qzkLTyBWuDEEg6r1cmYKSwgZDUKX2tJH2eCFpbkTSiJ2CeyPY3dKjeu8jyXmrhcQb552VwitbhhL1Pr34mP",
  "key47": "59aghC8bdViVc69grJuJDixUuSnuiChXCoVB1vFduZcTQ3ak49NJtMgP6rELSztL24bAVSfSmEwpLWhWEz74xgWc",
  "key48": "3foQyaEqojwjAfRTxjw96EqWumC8EegF2yiivrCkyMXZF3WJfZ2iDi6WSQWCbzPKywf4W2JZUBndLxuhRdkDvYpB"
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
