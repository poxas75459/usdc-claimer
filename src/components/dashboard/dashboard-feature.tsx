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
    "4HiQHXuv9jBqCY1Nu5WxSGJ64w5FK7A3Q7czcREV2Z9wzDxqXc38wnfoFFvSZaELdA8zhHHiKdDP9mkqTbh2FQQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkN48Mm4HArTJDnkywfynBt3F7D8D1x3EW6KNbbJgmBQMjNajeEmXNyuNTEJrKm6BL7RajLZHGvQdCUatYcZBTR",
  "key1": "4RCpBD2ZreaU6GZK6LEbpXevy4fasUp53jBMuiAW2YMhysNqxC7m9TkG2hRUrKEXURboNan42uK94KWvRbGWkHD7",
  "key2": "2XKGshTtYQgMQvqpTK6EkuFi1gQaUAHiNgu2fisZqPPvUxH6U71v5jWQae3MnQZZivDBvzwPQ5LRqdRgeKsNaEJ8",
  "key3": "2G46FNShREbZqFEPafdBFSHHoz3RTkLZhfBkVSQrLKepUV5GjS9EwyphaLgxGYbBgg2GKni3yFatcU5C2LtoRumR",
  "key4": "39ZpUV2v4QAs3goDg1QeYMUt8dH1PUnecmuVUbEmi9ZeE9Abzdnn4mNtoo4MvkCT6f2xNMmxm9MD5fvua3oihzdg",
  "key5": "3gGAgp36kCb5RvbtssxbwCEYzREdMC1kJ5XtKvQApZN6PYLN4wcJyKbu6HsJHUBbRBdJA7bp9FdB4QtjZrAfJrSv",
  "key6": "2KJWKNxdA7ZTuhEfRRmLgaDPJ1Swfw9x5cmcqr5Wnx9xNF5exqDugKN7PXvXrg2XQehLp8V6bQ7ymXHUnu58p26e",
  "key7": "2KpCUhTj92276JkrKR6oC4fWirJdwbHnJDijwUjBe5j8e1Qd2r6gYbNnfr7pU81ZxfzK8uBMG52uqjkHuJ44ia2r",
  "key8": "44UR6oZYpArSYCWwvKeDuTQ9mCBRJpAx9p9UL8DpS7zVnS97ucjHbsLNHxhxyvT45FPsgT3HMEDYXptaBMMkt5En",
  "key9": "3TTBE7mFsPj4y6kgWa91GvzzPBF7dxZCZDChPJbNb7ChBabdtbWCsLL2APdBWdjvMCHU7QCpJ3WQbm9HxAyAZp64",
  "key10": "5HNPcDDNe8skwmc8pKJMm5KX9QQsqdFsDY5t6v89Qy7YLcLcr4QFDjKxxDfvaRb6rXdVF8mwzYabNvcq3XqwzY1u",
  "key11": "5GkMkyFgpEyYrn6cTeAhbN1hccfYDbT3mb133CYBmnkMUbUAJiLjEow6Vhp211ZmHuMDM7rEGWkuG25GaSXv4Y6o",
  "key12": "58i7pAoxaRvQ342pJqAB5xxmQhPZAX2VMst5JeCcr5nvtZjaeRiRPduE4MgQW15Rx1LjJELPPVEdLTnUbhU6x8SP",
  "key13": "4oqMWcyBLjsaxcnSB81KZPDzLBUfKe5rQJVaf3imXsrG4T4FmtkxqvKGPR9tt8X5axbw4uui9BuV2QouAU1CDVHQ",
  "key14": "Eme7U7J7D2UxM4kakTfr1ef6jw5Bsz1dQo2M7SoiVJYDimoqhXoKjvZULWHAuZn9vtfd6WHZiYqWtDxtiXUGiEx",
  "key15": "2pcxCGunNjc8q2GiJzP291rnPx8wdb53FUbWXqfAiTyTvYb4dbHhsoisSRVhKpSgeUXGryUtMawqARkWtQtR8HVj",
  "key16": "28RRsKPkoiauTh8ABhW5zAejD94Qif24x3c2LFkRfhN61znXjEnizLjAQPKqqEbmmWt2fPCnuAFstP5eJksGSrP8",
  "key17": "5crA6ZzmxkcTGLHSVzG4z6VmJXPnwd8Q46vajF59eDrPrFTTyCnMBqre9WGnUAnouKKXTpzhdNmpRwWZhhauan6b",
  "key18": "3acZrBbmVDFMEbLwK7bYLygdnVikYFokGaAwtgY52QrugBAR6xFmXnj9hpkoXEJgthCewkwpzfqx7Swf1MB54i7j",
  "key19": "3FvhMJLTzQNdYndzufScZgwLubB7K9x8vh7Lu6x1nXrfZ9GgBbExXwh87TsLHHqdeRJx5kWvbK3YsqGUTwx4g7DG",
  "key20": "57pHSWGDz9dBz2rV4pPuhcWuAC7hFLLu511LBL7xrCNNhMvT8urv9QJnTGNx7YVi5zbP4FX1WQHP8vKx5UyuueK6",
  "key21": "5bTwXeqgrPT4BHDW4ya1nMW573P9eggZyhpVoe8T81Rxqy4Y7ZkutXQE3VV9xRTyoR932QuoVV28gAeQEQSGjgMt",
  "key22": "F1N2RJrURcwGVZx5EDJ1USgprK9u4Z3oLFBBPASvFa7Guh64Xgqd4J1nKc32AD5Le3hRXn11NbB36szVaVeNReA",
  "key23": "2vvbceExN73eNKRNnaxxgKsRP1aJ74FY3mTaDsx7Bozc4NKTgc5JGffGshj7QP41Q6w67Qb3aZD367i16ygif3uW",
  "key24": "2X9ZTPciLnd4Vh2z2zaFLi71WW9QsgyySaDDb3DACYETCVJawymAnCdh6e1T7zSJg8XACowu1A5J7Ye3hUEHj7Cx",
  "key25": "4g29VYF5L1oX7kQKAnigkfkmoKZfbbnizvgZLKr4iHGKm9MtqMR2YNhqub5bWeA45hVy86fD8yByc6776wcSK56p",
  "key26": "4Y9wLFZkLFXTLurehVXsfy3BopKEFB83WnKT4avn3sHTWfQzRZ5TMWrKGsWh5oYDEubZLrYjwar683wa5J6RR3hV",
  "key27": "d8FrbCTuWBFyjwv86tQ58McoAhCwrFXH5joWHrwVH9kaZW4rbWBdGzvvPDwM5VoY1C2hX4rfRPDkcQNDmHXtxr3",
  "key28": "2wgesEARSpgrFy5KaGaNe4KiyLd87fDUktmLfboryGsug1WgAVauQptutPqQsPQqkGcB7GD2q64SXgwn8hh6nfQQ",
  "key29": "EX6eJ1dUrVHdZZ5sKBxGTiGLFZw1RFJjY84zH7t1n2ymcbTTDEQsvddidWjFztbTNd65KSU1YHaKKqRdbjRYPgB",
  "key30": "4C8SmCxxwyRxdLcyC654DXrUL8VNtsp3JUT5SzLnqUD4ED5BGGVam9BtP23qfzYXsvURPiu31T6aF6L9Kc7p29U",
  "key31": "42vQdEcnn1HXvwsximcJEUKfN7kxPvYo9mQh73fVxP2DPnD6VXaVK15vfPGtzLkqNFTaoSBwHprQdQ7vRdeoqmLo",
  "key32": "ftDykYCyxj9Z7v4Cmn5wVvXTj43CgrqNpGv3yDWkJwzienfPK2XPkT4AL32z3xdvS7wE8aTALjZHnSV1nCcP9k2",
  "key33": "3uBhxdURg7757tswn7dKZEp7Yks4CKepjim3P5smbkF9riXZ7Z42DecGc2U2RVFY9D6xGFqbJDJY4BsAASSuFfDv",
  "key34": "5T68bPz7M82baYQhiy1DtUcTzVfXaFuUxawvPwgjFzySHrudrvy67EFz62uZEuC3yhYYjv8LbnSpHJ2PVMrVy2Uk",
  "key35": "47U2YM1e3UWRQPFbM4YuELLKnQeV7VuBBDBSf7f1ybc9L7eozcgnVARMssQrxjbxFSgnpkEfrrNQg2gqhh1hyJ41",
  "key36": "f2LNB3ZyxzSN3LxdiZiS4UDWmGJAzgHDVE1hxNQtdARfLY4vFbs33FXqWpRis4HpocxnAKkRRSUyjSDGiczjhGN",
  "key37": "2dZVwqtLeMjYCw4ng8RRVeB9ZeMQQXMkDqM3b7Cf9idvmL4KoBBKnj1HBQACDM9PkDxdE6G5MVKctVANo5RQ4jCM",
  "key38": "2yF5MQ9XcrH6YhaEo95VVdGEedCXm2fwHzGfPfLVcUAhUW1Xe2Rtw488ZhVvEwzJr8pjRubD68HZ2kyt8dPrypjJ",
  "key39": "HPifSPcos8yHcxqrcD2ZbjYffj9LQW9yTWD3dS4GgxwkDCKRSfgzSXSytVaRH7iLfmfTYBmJXHPueBjwKM6aQaK",
  "key40": "4fzDB2CbgUMrkU7NBe7gCDbWCrp9XArgztHGB2eaTBJN5e2xZVa6gtQ1KP7BbfRVyNtxMYgtXiQfAZdjXfFxe4wA",
  "key41": "5u6YojFkLQfxBuePUWij19CY2fY298Peq21TtjRuRGorG6gS3fem3wFsbBXerZFwqSXkDpYfTCmh7bFzsU9McBKr",
  "key42": "2SLD5E84Dakg2n2QCExdN9z5qhyGjJnnJwyxZ96PtJiYLrZk5KP1eeFhXwQpyNddtrJ6VHDirw5YmYwz4kiTk1Qw"
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
