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
    "3smLa4a9GHJwDiXUQXGsfFJ7qTxdjs8W1ub7CAdBV1MuyCyo8oK297jbVVkXLq4zDvja1Nmoqw8jKccFG8cQwuAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VSmtYNktkM1qtMYuHUenGNJJVkP8rhrCNRErq2wZCBVCbvFVud3pMSjdzW45sS1iiT3DNcRndbQfoqtACWsm7wf",
  "key1": "56fUsKj8iENGFDgxwMSWjvjkbZwJGG2ZjwzMu1rpbU8qCHcUwVP6sidLi41C4FDswaJwct7usUQLGT1DvZ3JghwQ",
  "key2": "45o7NQ6GKmgjsJkBWTBDW66cmwT8nqopffgay1QUHabKTnDJ35U9FkNNX562gxcZpMks623vrPXMbqaH7o7tEsBA",
  "key3": "4P5btEfCLPmzCecaa2z4zfKRQCwPivABF2V2h554ut29siJEGNJjsZrHrGUBpkUcmxoR5ybMsktfwatKKjQQp4LE",
  "key4": "4L7gFxuy4D2KVjYwmiGdcFYKztdk7sAD26owXyU7UBTra6VtXP5dobVFJrRXEkt2z18EAvRFiZdKpECjzyJQEkHb",
  "key5": "2PwqwTMZZMgH1P141MCm8qDUBjH5CLgNggTw4FBQWPUotc1NxshG5oZQYBcZWPwnc4sx4cLafnmQeTM5W9rADuWY",
  "key6": "SXy2JwM61QgVgJGGPJ4JycL27QKwzfAi5L7rEMUkK5HtLTscE4D5fx6Uw2CqT63vHTTMiyk22BKdDdcu9nTiRJp",
  "key7": "3oSS5gXDNm76m3VDRszYBUJ7FHvCnaq6fR6nDVmCopXFS1XyQUdnaKrstFjXzXveaftAsnS1xzYGz4m1jav4dBAp",
  "key8": "5ySMeFtDaANWP5BbNdSRbmRnA6AqWCLJGSVRgGhYZgV1DaYWA6LDVkDgTRRW4zCBpkGviDd89KZMRVQXWNL18xVa",
  "key9": "AVDcVGa9Tm4CtiYjBQ9nwRz2MjPVd8kesdJKkqzSeFZvCtPgTcrFAhuQiStpXLCFizy6jj4DQyro6GKMxy7CHnA",
  "key10": "4iqmd2eDp8dts1wBpVZxqCHMdBGui92s2gmKsSfj16f6ndibCn2CnM1mJE6b9NQmq7ZdT7nbFBoLfkPgwNbxvHYK",
  "key11": "2fgEWMLFgJrP2tJcsXfZVJsR3RXMwp1SsTN4aitHpxVV7YJAd7GaQxZjdLqEFAbtZRuUmqeVbTmC57N8Fh3EoYpg",
  "key12": "5Gr9sqfBoTge9vz1MwDdvYGNYWXLDdxRCuvn6UvRGwkTapjnxzQjQh5h9FnkJXpM31465gvSSA1edCzMkeEkDLjT",
  "key13": "F29edQahXwXapV1xAchxc8N1afJdLapztsqxfw5rKSvCTi5YwZmtN73EaPScatZhpLzbAnsnUaDH6CdgqhdSQqi",
  "key14": "3rMZpPx6MUXrL7Q14qQjczhx9Fh3eKryFdkgWqXWyBcqQDFeLFJ2VTWUN3X4y2jYuF2ssjPm1WQv77rqRTS8J8pn",
  "key15": "esmU22FvGQqYeyq2Eq2zoaLL8bEqu2uPJx1LHmsfMybfv9gdYQ5zmRERqvDrjmU4tHe1GAPVhcs4ZG2iGCtfp4h",
  "key16": "28edvt1KUYu3iycQkfNiejqtni7cMefKuoLsZDVdhwzzwRaaQPf1S9P84s2m1v88SRBqBQPJpVJ62bM4ee9y4oxD",
  "key17": "59zGdKHrD4M9mvjmxtEQgQavRYxjFmLQHt4Sf6uXb5p7dUprPvYoco929sqnzRaWuuhwyMXiSfLRvUp9PR4KqUv5",
  "key18": "zDoP4N2u2m5TB68VfBtE8SQJw2N1GaDUeRzpTnAn944rzWHJAWaBDsQYzoxMa9e2DUnA55wg3bxhXRVAgus1zsp",
  "key19": "56VhDJieXPwS6XTrXTqBxPFw6BS45bN8ZsSPptxi2XJsLH6NkByrbBupZ6RGx1tkxe98sznseBjUoiE3hjk8qeRg",
  "key20": "5HT58vZZYduZ5cbRjtiscYHPixa1BwdbVFssSCiwX3iNxLkRr8sYcja529NiCeqLPq8JRFprg92mg44xHogyhfmd",
  "key21": "46pBGc8kA4yPJ6K3ATHU719M4zED6gi3ZvHGUMtDnN97TtgEwMGKdvPCmdQWeDoV5CYjmk4sSLont5kw4i7qsYEx",
  "key22": "56PQsnxmAYeaiTy6mHGfCKAmT6iHAoSgnT66dCiaTNA4VgvKeTCTbBYrGt9RLLvyz33LEdpDhR86sfwxkCdoWt9k",
  "key23": "5LEuZs2mciLWKY2NegNEtSBPuSoCGtApANg5mfCoB43dmLkhgqvicn2GWWqrawSYWG4bH24a7cvtQEwKhbAcLcJW",
  "key24": "2wrxUxf9jzszNCowoxFDY2czeW7vVHKX3R3aJjdbWMiM2Vyk5cnxsFvcoJiPoU4x2atwtpwcDZpAmF4ZKSdurfC6",
  "key25": "6shvKhyq4UTDMckQKpneL6uS124ss9n7v6A7AbY48Sh8ZRR5d9jsTbryifvBJhUPeEaR6wd5hRpqNbT9MoDt73Z",
  "key26": "RzcmSxfaEtq51j78u9ozL7LRLxTw1zXhQJRcynt53ktLZkK1N9bnbjFF8ouzK5hs3R4vEWtqoGw8pzrazqsb2TG",
  "key27": "5ckwvVkYUgKCJ6rFKNBd9LV1TTzTbYyheoiYj89ZQo6Mh5S1YQNDKjb39Med9Fp61kUjajYcNEdaCp2aP4bWDSYH",
  "key28": "4sj4gdn4B8VVb68aTwp7Ynp8jyLDmmmuUecRizhdf1k29ZqpUMVHRh8KFKMmkhjFAgJ7yyDDwr8iQejqzrfXVpJ2",
  "key29": "2Phqe1ERu3yQLA4bKwauekAzo7CtNh96KNxesvK1mgDkZkxdxV24bo77pC8Yv4sEo3o93rnXUzjaiZYrByon1Y1t",
  "key30": "31n5YNTsw9e3PYjwUxZFhEWJPT5HUHzL3ogtHKomkUwyHACYUXqizhhykoDZsd1rWTbZLVmsaXhMvuFkw4fsWV3C",
  "key31": "gosrfJuREKUokrvrJAtxtsU3JHZXKU9LvT12ZRA2HoSdktqSx2hpjDAKLxSvQASpjbTTyv7Q1apAx4Sw4pzPnnc"
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
