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
    "eseZ6E2QaueDmSU2sBjVC31ojWb7XG9Ew7bvSyKr1aodpNR419zPVBr9pjE1NPSQpYMWTZJ7YMR1iFooJCrGBj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPYjrN4rhMv5g82BB4g7r2dRMh1FdRHRcc5pjh6NoUUQWdJyZHyXC3UYhcVyj4xohzkBjR3P1EYdve3dMF5EkBd",
  "key1": "4d5fxpgxU3n8VFNg49Ljg7q2vZJkSC527Jwxw7Xmvm5JTXwGgCh9zgAY8KMug4HrM4FmQ78nbqPqPqbVZVLNawir",
  "key2": "5k9KUQMpqtVrdgJJqUQLSb3RjgFGePft26RwkNsqdcF5a7NwnKkHAYttWpPcatyq6bWcsfUfYs9WUzcPoso72UCa",
  "key3": "4DFPsxwnjjB2z6iLE5xkrndFox3Tp9pXVdVn7FtgRQjeESmXFWZgZxAHwhmhNP75D9rfqLsgfFUjE6Kf1u3y9NHg",
  "key4": "5adLRM3xMK8ubxp1qfgSuty9kvbgJJo68XsXfhXZMVdzMDRo9TswMypc2mmCh2xiymRFP6MPTXgaGNCkV6EF4yne",
  "key5": "4UiXFZy8XFfMPa9VUkwuRx7yJJZ4o7ehDrDTtYvanshjb7zppvbw28D5pNfaDPn2K1BJakgf2nmSRHofBgFsnNCW",
  "key6": "4kmrc4uax3Y7VDUgdSpcNLrZ5tNVd1dHgyuWxDJHVoyVD6dGpEFmbP8ygGB9K1J2PKHxrNYKoGGYs5MkW4LekMEc",
  "key7": "2mwYpGA4yZzWTH3GyS57dU2RfoGD8JJCk7Jphkxjd5u5eCN1PQDfJknwwnfPq2fQpGdNGaCssuzuhtXpvG6V3vfz",
  "key8": "5CuNgSh7e24rnz7VV399jszUcftUhXRcwqkwUzpWXuSCMPm9hA4UmfgefTjyKRph5oDfUCEdiAMuWyfsLSPYkT3j",
  "key9": "5mfwCwmH43EGKUyXTQJu49cFA9Bd9ESeqB766yLmTdX5EaKB1qiKaSukX6RTLNzyD2vTR4XvTME1ywHx2NXsgFey",
  "key10": "49DuW1Ehte9eUV7BMuBwNsM1vB6ie4hj1DadD2NMBBMYP4pb41psfEZwBXfuR3sLtM3C871V8JrrSVX8A87934gS",
  "key11": "PURJrGxCmcpLfmLtoPC75uJ1Z2gC4qUiftyY9aWYvYxp3QXPTsLbJua5Nj26GoZf39VDdKd6yyg5RR7UyFb4e21",
  "key12": "3LBf89DhJhZJqawSoofhXzAggCcUWYm5NFAEfKZ41gUktvJ6jwSyq2PedaVjqtaCiuSfjXuJ1j8x3XhL5Wt3b5my",
  "key13": "3tL8M7ToZLYrrhZz4aHfqP4z962bLjErLkiGGQ7ShHiUYftQeUdX5fiDrFSJEYDrMjpqBEfuGqjBCHwWszNzBmjg",
  "key14": "2cHCUKF9GFUg5NC9VNXasjGVKeA4fEqHvuZZHDFgfSY5eG2grvciAN82bizNir7QwJHYtEnGRAS6Qx43QdBKdeam",
  "key15": "4hin2NekHTu6N7mruGSjaFJY1V7n71gofYVJiPiFC7DSwSjmNumYjaR1uRAdPZYguKNyheMZHmQd2jAUaD9z2sbo",
  "key16": "5SHck2VrZvibmLXzHLNZBzbixH1b53sF72GK7UDRZqJNNMXUSH5F1CRX7Ec6jNTABFabmdWM15f3dg4S1Ha1uYNh",
  "key17": "2gWk7Gpjk2U3bywRR9zkHgYm8RXn6u4qxjfyz31tfRgnaGvoGmnAUW3NMg9PwmwmKw1yYNdtgkhpE6eFG14kSHhS",
  "key18": "3E3F2rp2AVsvwvqKZzRLYU8E8Cy5VwxJmBsUnzeCkhUmAdkibjhxZFxWXWyzEckysyEEuDANU4MawPHZ4iw2msAA",
  "key19": "4ZffT7M3R8My1keCmKjBMcphp9kgncMENY56aVxemTqE5tgYU75jHr4rv592rq2vTodzKi4nFNqymT8rZQNqDVK4",
  "key20": "3dwtSG9tHcnqZDHeyaRoq3DLj56TLZo1UmsEhv2pg3Nta5XEVzhgHGapiNTpcZRTRKr9tvmKoQMRiv7MHpoPSoLx",
  "key21": "4rRji6rgpWRePXENaCybQbzD363yBMvnQQGFTit6su3xCCv46cunBWE621dQp4SqAjHbUvrE1bKyifuhog3Ro85C",
  "key22": "evhia7ZDAgUN8xDYjEFqegTeNzZqAZeFxzyRixCkiL5Y7q4pBHbtgybK6YjBCKHcyRsnqCugnm3wumnX9BwrqyT",
  "key23": "5kN4tAsymfvCSu5u7KwsqntTMjPMLw9Cy8K37Lc6pTAHHoECJMyCrgKQJBjpq3vv2V55uTJYJRxbG9xXgJuw7TzA",
  "key24": "xrgdew1WWyRDCWC9Ew718R3fBv9a5GCByi2CMLGV9Y3ruzS19FSdExXFPxpFHTAT9ny1vjC2jd4Y54fZJ7DYX13",
  "key25": "5oCHs1EZXrkYoHotrwn1bBuZt52rD66cyyKC9VgpZhKkFGN1wyiqxw2JVzmkW7WCYWHttXGXwFc8HkLTJwBqkgBv",
  "key26": "q4tcMkJfkMi9MBKRrsMbqkeHv8KRQk4TaJ8wTynJYraS8zmDDsExTMRSkFTra3z7xVQwskJSwnEHJLfoSiMX5xp",
  "key27": "4vQuAxPraHvxUFV86FzsLfXqAXz97byeY7RSfynQ2bhpYmMXEro8oe1rkb8QbwcKLzSnRWRxrRo8mhexgkfEDDfE",
  "key28": "33gkKkrQN8uugHbaSN8aruKU5EpVWAJmgwmNBVT2xxz4bLNeEYh3GwvGrzgBvVXdnQPPedA5omGtG49LEnzemjkC",
  "key29": "3rUVyp5XAR8m5Yh3b7XG8Gyf9vpmM3GPonxczgRiWBPDZjkEzFRvvHwRens8WxmMmBeArt6xfkNo89M9AwfMqF9p",
  "key30": "NkTgDqZ7dJ5AXismsDVujioF9sqTc91VuznfXZY7n4FBJUgkJ7HTPQ79bcvfc2jdY83nxcWpCifetpy8FkJ86dC",
  "key31": "3nQuVTeUkaykLjVGRU8TZxF8ub6NXPv4Jk2NHstG4tfewVWXeCdxeMLm8y6du6i8sTLpw28qY6RdvSpZfEr4BN97",
  "key32": "2cNZAa4TviWisBX7NHK8LTSgvycrA4fLWwy6qjaKub9QjN31cTqDgkyCMAAwTYgbNzWKGundaZihR52NktMAtYAY",
  "key33": "3vehfXycA9XGxeP3N1K92xtHYwMfS2qfsNgaUBoE7J8kHV1XwSTWTzfmsRozzHukFhDN4TW13k9LyxGDVjzwxEng",
  "key34": "2QfEXp3tLSmtKP2HiA6ghie6hMkgRRVkuY7rQLwCCagLdxsnduwDSKVK2VxZG6BRVdSjn325MKBtRtZ5rvuPyua1",
  "key35": "oViHDyxXUHFBiUEfKq743QbmFshRGPAPsEZD7aFgEBaaZmVqBGDDotcRV4wSz7VmUkxonv9kzRdU6QEm3dWGJS2",
  "key36": "5vw3ArtgSenTLCyB1WsGGoxUubRNhwARhMRfaSuhyovZRmnwkACeC1hsjxNVfEvXjCEUEcth7Bca3xwCbdQ2dPrp",
  "key37": "4FpHUijHEjEt3vvseWatTBNetx3ZjjYKCBra8AgHewWH2G7WLjTbaE8aqQkA3dfewHbgMtzfcaVCFNiYH3rXNqcD",
  "key38": "MsKxhFCX41JLeiZ4TxBQtzFWZF4xF3oLuGNxbvkkyZbpxoEwS7VMFxZsd64S5v1NvQBCxciVE4R5P5fTUYgPPRv",
  "key39": "3aCVWmEVmT3M3RFcLgk7D5jTs5isVbzdiVssZupJarWcaNVj4tCLQ3zrz6guwdHW9D13qSBJqymx536PdeSCRkhd",
  "key40": "veuucamGRcrhp1KFcSAuo7YoP3eeNmrHTUVcF8ZzkrKXmgeX6tJ8hbXtECYMwLBxa2uFJ3Z6JyK1nFWGxPGy4JE"
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
