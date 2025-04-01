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
    "6tesr28H8kzb9Xu64yoG9NxDhMRr9rTfxU87oVzx79E7sqqaJnfA6e2eb6SfdMMXC4Y1b3NRNY68Yg3robxfCYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGCKBmExYFHTYhTZUN159z8719Ks43Ptg7vbBQykVEUY4Ao7ucA2K1tmDvKQuH2PKyqg4WDJBndKv1JNzikHrNw",
  "key1": "4XUDDo8tYAdKjE3yWUDPuBmE2D3TqyagiSUmHAftZFsDig1SL4UejuicHUsvR9K9BrNZ6ijQDCYNDQeegTygqDZL",
  "key2": "3q2q6MQ59Xdyw5ZaXmFPFRCYf6CeECuKxxCa3Mms6HsJdjuF6UnUSCmjbPGqh24QdBr4c2zxUoBgXgUCAGEhMKL7",
  "key3": "38ch9bohfE6BUKuAmFXibVVFGUj7AYtwnhw85FMK4RLZSk3yHo5G7cQmyxpJ5mv7jLeGJxSi4S6eGSkpyt4vEDen",
  "key4": "2KkRqpqb4Je4fAxF6Tu9Npz9LmSdnF2kKf7PKJ5W3WodTXqgxNRMFuqZmp3Gvnwf6RVPrwuKPMaAseNd5zvNFfxW",
  "key5": "46wvJNKu9rajWoBToda4p2wGEmGgX1tSVvgTFPZAhGegkpFcwrRyUUCQQL9Jt4eTiLz4TgnTN96qHRRUfi5hMNix",
  "key6": "rDrkdE2jJNd96DjfGVg3DAfPYJrSTZQw2hDJTs4HdCkPr15NZXNtSvQzigEGsAwxqzTqPUR2Y6cKVZbeQKwMgBE",
  "key7": "2Nsf2qn7y9jXgyxf1M4LrU7jhpUgHgTTKs8gziwx5Quu9J74HYJkkDNWhpfdqvUmba5sjPcy86CCAQwsvZcbfooz",
  "key8": "5sP9PvcConAg1uaGFhZYrsnvHRWvRiJw9zGLEpowvCHPJ9ip666v8YaP1VCw7jaXowvx6XyLZ3o5s8t7y7ucLujV",
  "key9": "2DdsNcwSb4kZQMyLLhot9eqJaxeqKEpvY34e7F7uCWHUhAiNWEi7nfGXPzXa4PsptoxqvBvx6chWsMe16Yugez7",
  "key10": "fMTP9H1K2SVD3D8p7kAR66cbfavnT5peeDzyYKLDXsr3oECYbxhFiPPDAu1gXZAkTJPK6fisy93xv1yhKBgUdXB",
  "key11": "4R81czZarAKfLxntLwyKoJb9w6pH3ceLhTJtVx7Gt7oFk5fhpMUB65ZVifzEazeNzncJ4FuhtXF1E3iqovE6m9bu",
  "key12": "tprbSmht62V5B7C5jiUo6VEbLzFHMfsgcgq2xNmvRaYipLNAjrhG23HKqUhCzJ5mZkbGDTybrdxvkFAxp7XZKEF",
  "key13": "3EyUWWYm5DL4mPP6EoQyTPvUov3aZAm7GoCprqNNJvzDVJQ7GTb6gMHRCAJUVMpQ7B8gfg2v6Yyno55ydp242Gwk",
  "key14": "3DioQ5sDNfZSBBVBEnfqD3nsKH9WtZJTmsa1Q2JjAoQqXxwkwhNjLz7LaBAkT78nEzRmZp99TcrothFByEwZCGoP",
  "key15": "39AhS2EKnf1KHv1QJTmSxer2eJKCQeRLvtrJBfwTV3YZ2ydYpbsLvcq6jLt3TJ9QScmBaWPLdQGiMAsEkwTGophf",
  "key16": "64JLjsAB4ByZjHVHqmWvZxjULKcsmPXwkrgo2me13mmi8NLaCMw78ZaZHDA8MDW9PttNKem6eizDnrrP19yzpj79",
  "key17": "u5gBFY96mLbMHwMjac7Uj4X2YTFkuWfjMCDk1WDqXnkNLq7uFF1Yaf7vgp2pyUyneHX8ijcbBqvKyFQn7ntqPud",
  "key18": "yNurSEvLhKQPP84WswnBNMtoK7Jj6F3ZwgLroQcB7oS2Tc3K82k7pQkgsU3rAptBi9SS86xpP6ahWCpbK9pGsZj",
  "key19": "DtTt8EdWwtEy2xXbXufwnzzCe1SgyqAz4pJRW3EXwwBCyCmypCo8C6YVNWSE83ixvoLFzhsXjdPPDZ5PQdPavQ7",
  "key20": "449HkZYLKWpRLfYYLjFaqpk51R3UXqMDH8YtPYVCC7NPex1C7ehBzAKsmRn75QFZHPvqLsiDBAfSwmBkjX9D5m5Y",
  "key21": "2mwrfNeEQDQGiB5ry69ySjvPX1nMPyT11LjZnedB7FGfnCEP6xcQdoJdSqSnpFqEkr2mn27DpYWgG8N13f6G7gEJ",
  "key22": "3S5ercshxLywJRZ5zfwJMNgCs41YXnH8AS1wFd2cc1f7qwsPUbTWsiU6UAV6uRfZte2fbmvkWTb6WovC88JW4i8G",
  "key23": "2adizC87PvmdyiQf7vDe675qEP1tqtteDiw5XcTxhiDd7EauYmE53QmaPdvrWRELtFVsudVgY5g6cYPFTzgh9o73",
  "key24": "5QUg9HCsNyUCAKTLzBYEjbhZukuUWdtCckpEEHDVu3T8wQJy7QMEs7Zd6pT2wrAhUjB5x8ks49grFyvxrkgQRjMo",
  "key25": "27YjauEWUjxcyNCR2NeBg5m6avVXxtyJ3e3DfoDhFLMAtd2i8fY7iTCKaJArQzL5mrYVV8RsejWFtWXBBFVBdXgC",
  "key26": "ca4v23hMrDjdtDAQMatyzPn9LMLZZ1fjsxdhRNkussnXsGy9hPRrhFaD8ayzf1xu3ZNNder9pkhim13gABMBosA",
  "key27": "3UZEwEVk1ZnrCbtURhhqai4qpWYNxokyC4vB9LAPtqnoLGtbK3jNnpNd75kkagFLYDC8Da2u2MxtHneKHjWY23Pj",
  "key28": "36eMq8XHjYQnrvs9hbVJY5BWQY2oLiV4XaWsox1edgbNcK3cQhn8N5p4xrjGdqKqc4SsosJYE31GH9uuMj3PD2An",
  "key29": "53ki1FsPpVX4HRUEfKuu7LNayqy6CR8ryBYSzhWzV5SbNZ4uGZA29Xweyy63nzz9t9B5zGQ61ZtKyxkxTswocmwe",
  "key30": "2P6wfd7TwG8uNWSbavDZBaMMatHQFQBe2W3RyqYPduSTH8sDHfWiixfKgtBvkKjxVvsTo29YhqJ9wRaksk7siMYH",
  "key31": "gPfPTeyL8ajEx4cwMciNsbkJ46CWoK52Cj8CwyFLMNngd6qyC5M4gUYgrz5wUzP2jhALURcRF54yFdPjxQvF6Zr",
  "key32": "2Jt6RssTL6BkeK4oUPCmamq3vojVMu7GHcx5cq11x5ciaaUTCrMrXFToGBhWYKDgu4bv2JqecgjzxYfyoyZVebM7"
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
