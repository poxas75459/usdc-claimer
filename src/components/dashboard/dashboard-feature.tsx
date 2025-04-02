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
    "qDTe3daZJVVEiq9h6gLnkEE4rMerNKkA2PFQhXaGnZkiscumw7k1cie7Wu5RwygYxD1X2nahCMdoyCRmpGibSig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUE5RicipHm9XKwdTkwq7hDAgv345vQAJcNNcqDPkpcBhvoE8V7SBmbokPzjYNWWBFGNFYDBWWNsbf1bjReyguW",
  "key1": "4MvK93Cf2Y9td8qaJtEeFDn2DEafvbd9Jbebn9EWgAZyCPB1LqjW4AVsSiFu7fhknQzLQjkSjQrLuWMwX2f9KAUz",
  "key2": "2byy9cspXfzxNDqA5EthbiWjK7FPp7VP7c78Zg2XnFUAGT7VpMyrhS43w9pUHQLYgfLRB9ff9HGEiZougbM6M4tq",
  "key3": "3LdM9iDJQU8e2iGA7ARysGTSf11cVHwD6vNXUXEaiM474Pm1Q6S3qeVxJJ5hbkkPucjUcEVQASbKCW1nzZtVAPHp",
  "key4": "4Lrs9g8D1p52z1rz5edSgqypQouyb4xErMDVnGWk6mEvcRA1UhZo7RLfYP85Lr6LVRD9VYvJ6VTKhkoiYBSpRqGX",
  "key5": "471tSNQChspnRCXraxC6sPpjoUNitoShsGMnEpTv7KL4JFm2rQHx4WW7EJrFKubc6XxhFTU6pUcjKymewGgTGNnZ",
  "key6": "37zg8bUPFnauoHzNA2Q7m1MVmi79TtPuWjspQrfV5ENpNnKEu5TcBGazTEdZdH5mNfr5vjZgxAb9AL7S22xScWrA",
  "key7": "3nRbc5VJPg8zTdGCWXcMtT9o8sF2GBc8N4U3hozbrTZr6vNjWrFodSpPxqb4VjsA7PA64bZNybgLKh6GRHfSYwKV",
  "key8": "59R25GihKge9sxaM4Jp1FDxFnfgFXwAeysFoxFdSJXLFcYmfqC1mzeNNQQpHDJbPbVdFbHnBT7nXG541NEMr5tXn",
  "key9": "2D8S5ZNDU6ceeeUajv6sjJY9nyEd6xHkv7BQQwXd33DPVWTjqcSgo1ZSLhE8gkKEERRQEkDYrvYuRETmm3pFvfKB",
  "key10": "5qRjJty9AzK37UR9iZyEZrN4DjYSdFq3xvLwx9S5FujR6mMLTsFfmaHg6ZhrqGhimEUEGo6s2bBLe7rY7rnfLuvT",
  "key11": "3tNbzVuEhqF3dBMbFwNhU58UboGSoMYgb3Ht6korV16EHHTHdRuaNkJ1VA3S7DxmXVHYK4w9YQ9N36ujbHTvqeNx",
  "key12": "3DPQRApgcAaVd6MxLDZ55B3XhLkM2rUNVhxNsi1kGmmL8bycKGitDT7rVCtUJKTtcniJzXgtcBHpfbmXqxrPtyJA",
  "key13": "2nCuSVtjPsNTQ4ziHeVgHPpmPs9H42d8JMMdVSDDakVvLLEMnSc9HnpUYb6eauv5kDfjimMyV8daPW9VBSydj7Ve",
  "key14": "3SpRF5bBxR4ThtwG9GbVXsAg5NMhBpr5XGd4VqUjnrEmyufDiRNaXnuCPZEJd9Rbs3csHSWWzG6JoEo2abextkv7",
  "key15": "4uExtssVRSkRFA8sYrknT4Fk99duNEXDe2V8PjoG2inwbdNaKFXH2Pjh47ia7mXXTNs63fBD4yPqth4aQgZP69UB",
  "key16": "VqpJGWBDTdec83YegiPyunGye2XJnoAnzYYbhNJ1KqzP1WMnugVjAm7U4EDnR8978R8GC1nTpsE6B3gw4NAdNLo",
  "key17": "3uQn19qWLZacEnTw86ERpaPchYSBCd3JpioWTaZJQERQngSFSUTxikRCPbcRkAjNV6bpq2TvQ2SSEMMWXqAGna5Z",
  "key18": "5kDMmZDrEtdvCDTDQqBYWXe2kSXBRC147xHYJ5ffd1Jt5DXDZSPresQZkTvU7RwL6YvtGGXaxu6tb4oTZHt2gMyJ",
  "key19": "35trC4zJEuYmVRibAqH41AJCXVdWbwnLhAEo1pjJQnWaNDGvs9RH5vXpkLJKhk7B83ZcfAyypqmSHu5XqiLPt9a9",
  "key20": "5vvQTNfkRd4zA4foRRbuArJcF8rtRWaeCVj29rBtJYfhmseVxvXE6J9iSrHxhTPQa6uLQuJsRDSaw72gccbuXBxU",
  "key21": "2cZ61GJTHtPNxhLuCmdk6AGZMTvpyUgVaTg9u6NMxhziFxQTr6vMDfrKLDsjkkmwwS9V5diT7J5maEP8cbwJjriS",
  "key22": "2VXFyrcKPU8nMktnSCrFRUuUh499BS7XpE2B37s9mG4gHXk1jyzsRSSHfT3suNKjLgAHVAZhcv3ThzF9dZDYECoS",
  "key23": "5Yv73svj2aaQFo9W17d9nVHRqXBvpURopVheKVDPT8pS6QiyPjtH3vUUCLocSTfb7ABWqdPNoUPhcnkxbBarrTZW",
  "key24": "TLUGQ13rQn3uXdFTGUdHDXeN3MiTDyqLyBmEw29mhWTKbNEu6H44RgThLgAHYKsiBGFW1iNBDyLdg8GaqZipQZM",
  "key25": "5RCUxgfWTY6UASHV6MG63fQEb3E4pVZGiGhY3JCvXX7YDRk8qB5Ys4U3jUxdBGmFdSkX7MUPBnrjdouDcrwXpsgG",
  "key26": "5HRjTBis5phuHaSZ1Fc3qtpAnAzao7yb1KXyBVyZd3dK9VyuuqrzgZSPavezyzvQfNruhWGz6Sqn3M3LdDiqZLaj",
  "key27": "2qWfqZfL5xPquwAm1F7s3rxjSzeTh2Eg7bQo7MKgXVq4MPWm3P5R8AKDzgGDYfiJEBBYcpjBmHp6GzbLt73VERb3",
  "key28": "tZ3ZsjSMLx7s633a29ChnmZQ7p6XGt1HsKxxzSHzzwyaBECijYGoJ2V7ttCzr2odFQcEsktKT4iUo3XfWP7w95E",
  "key29": "oWJ1fWTqFEsiatcRBg8QrpZARMVhHRqB7YCnoKNiArp3iavDXDLnyX6KymjGniaq2tYntwZ5tQRuxrYg2g7S4V2",
  "key30": "27uSP5DKqEesp1rPRzMLG6HBbzSeYyaL6FR6zUKnbiuwheBLbStDGMxMS4ePBRVYmMfM5o1x66TgNbYjiTLvW5oP",
  "key31": "2m4TwV5r8jQX6kictEJB8Y6A7QrsUuwThgjSnV5kEiUUEZH8PtPitT5SrYXgtMvXY6EJrqnFePbxbWsYB9DKr3NR",
  "key32": "59qubWFGTXtMKJt1ykU6eNVj8Uvaz2AHawwoZ2Vt3vduTbvfJwYghTUY1GFUhHAAp5hvQEDj4bmiWuUjkhK1EABi",
  "key33": "26FCNQtJViz5htmEkaCPDDHH1Y3WZnaGMQzHyv5176BpBLstwURjS6HmU1BiPvnhZ6kqYwGYvk59JyGumhUFs6uV",
  "key34": "YFwA3xyDG2qHzjg4MuwZEULisecMdyccatk9ZAEcqomXV2aX8fEEQGTr2XdWUJANFA4T15qmzCXMHkBpEJDD2FR",
  "key35": "656zWzkett9BntBjzpgyLnAsafcZWsA59PZMjjudEyhTR6JhKVoG8fpUU8egvWLGJS3ywJVXbKcQvC85mFENW15m",
  "key36": "3mE6pMj3QSyrH6rz8pymnAsBGpgJsC4aPZVscq2ExkXwXuVvzYA8kS294iXWYTrp3e33VeLTfNBcbeMVGQtURTVh",
  "key37": "5WmD8jZLAbhKDon7cdfAHQaAnC4fZYHLimu97YDTaEvyWDZhmuzVP8QZiXw7B7tXh44fPYnH27mhxQs7R9DrWuLQ",
  "key38": "5ZDH148rSieh2C4wVFN2Xo2bRSJAFgTTnG9xh493TWVDU7zcXtcUEqovZWBoQLf1nLpTaiCsT4UZxxxcwvxVrejt",
  "key39": "5uYky3YvUDeBNfqAQWGD4qimEk5wJPuN5DgUV25aCG2cZDTtBzKwP1s4xBSKKU8eHGhqG31CqDZMFCjWHKsQLBFk",
  "key40": "5UKwFN8dBSGB45vVvedb8YhbtapXfqfoFwa9W9WS9FV4kpwpwYrKJVz8wev4Zv9uqfmhgNeBSYgTYh3sK2NVsghH",
  "key41": "1DDcdEu2nQyiaNwEVotErPQi2suA46HHX6qreu8mGP2j8EY9ws7u4mrcvdYFgJcqmuM8Ms7Q67Vtg6GBXXWQVtD",
  "key42": "4VxQ1AE1GwcLoPkfCrVS1oYDWwUJ4nVbrCdTaARPksi5sMHA5A1V1MyqBLTozh55enQizqPf5txch8LTNBtrjnGr",
  "key43": "66YnPamRHXqHTuuPXer3pe7HPijjV2EmyBd8ryfqPmgGmZh78FkC4ScUYiBgdWrTs6ZW91e3B4hWv2uEznMu3D1s",
  "key44": "4fv1xqYRjYuajaAMKzXwWfsMaVXAu4F6LytPwcKuq3GYVoVGimgHxpyvnrJ28jv7FaEQECtquwxteRz6MKFDhTwZ"
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
