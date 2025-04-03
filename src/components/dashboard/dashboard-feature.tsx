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
    "QDaVvBvv49KQyWAFshu95oXctNwapW35BW2P6MqXwdTt1ATtWQaLKuqJQqyGsvvmZWfvcugfQpWNamEosAT8iw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFqu6NfXxdjKDquoRv11KaJQAAUnAcBNkqhKvUgQN7gCrwca3vz1u6oCc62WAuKfZjzaVyeCriVQMRuhF3zCgae",
  "key1": "55Vf4kSmBnDHJYg9cWb3azvaEwxVXdrX7XBtKPujSz5DNzHGxST8eQYb2knWMtnUDWrWwPBYdJ7ft8ocwnu8PEFX",
  "key2": "1ZigbiTZ8xs3PB1aWSPUaAthqWUPL11pL6SvqCF3Mt4B8GznNX8aTJ83GGCiyqAkPgSu8BsnKkUDxB3DL3hmxhE",
  "key3": "NiQW6H1KT3o8AazHCD54XDTjEH4CBGEG1g1eab8xxU7n39HCJzikVBLzBByxGN4uxwHs2eZQ12YqjEiKthGasPJ",
  "key4": "JBNJzfxCoSj9UbZ4uJEwwEjRAv7dVgPqseGJcUmM9VdeH9UTjBR9ZKZhpVweBCo4GAZbqmXSn4CaTShXUoUBSPu",
  "key5": "5pdXc8hxggjoeDJehd35fHEH3WvkeYgMdhWLXC3ddM7wTm4pgAZWywrmwPoz71y2fUXKmt69SEVyGbJCPUyJS8tn",
  "key6": "2a2a4gLsv4wo6qwQkDngSkbU21cFhUnxS93shAVDFejdrmBV7yJJA7cMp92eHkRSNDXztSgrqmYjV6FKtQvV6UuT",
  "key7": "2cSCvwnFV8kf6N2nWhZgfVZRcNKCTu7RWnzn5UWb9JPmtvYYeRGSgyTAN15sT7DZUwyVvpQ9DPrJzWa2jF3kdEpb",
  "key8": "2hYwGfpryR3xFpJyeg3iaw4AvLa9nmsixe3mU1Fk7FTmYYejQJ1YJprsnzVHYkuEqVEwL8WCBy2GATpEkykXes7d",
  "key9": "5x4UhMftXzmxShx6WSVSGhqqvhbg8aPiohBDV4BDJixkhEhoZeTc1LGag2R4nEAccgiwxNmeQwRRmY7779qEskQW",
  "key10": "BQtfe1YgescjhkiKvod7AVFxU39vrnMWeXpA7KXfNvmVSvCkicP8HEyYReYHrYt7qae5C79U45BihugomdJMmM4",
  "key11": "48qRRT2s6NL9WCXcdnTqUCP4hWApUnwQY8gU2hoQwB1Yyb2XcjU6e5PDzPemLmoMnUdycrtT8w8NLansEZj8Giq9",
  "key12": "3b1rWmRmmfoHB56LhcWLwm3MNc99xvpirE6dxGuRaFkb17bjKSZKWyUA8ztJddd3uUZYv9yxX5nVRe98hCzrJnke",
  "key13": "5acTgZGketqfEvVGPMRJM6XvtGfLMB4Sg8CfHwUyGSxSMor5cnpVwqbm8HokVLRgcQVNHp5EtCENdhsWvXgoMqHj",
  "key14": "5KAZv5FvyQcboXDfjhKHLmQimGyuYVgVP59NRycP2Romnpr8qmPd862iR4Tj1FK5G4LGyoXKSTtrSM3kvjPjJ9Qu",
  "key15": "4KEmC9HHDnFZM3BdJRY36dxmtZaKkjHiw3Bv4kRceScGYyegbSoPejp6VQvpohqBDTxVUpUdMjXqwAwMJAbU9HF9",
  "key16": "2gvyYoqx9GxjnSm2fQSRYLvUA6pEYMJHGiawbheqcjPgGoSfDpTP6vZdg71xc8FkpQnPv5bgWjnkT7YL2dVJteYM",
  "key17": "3pv8j7vpz3ejXxab6azv2wRsC9uHnoB3aWvvaw3Sj7WTRSSR5KJkbA3H3PEioJYBbcbhWjEBm3cTsMEzb3UnJRjd",
  "key18": "3mWtUwETAtxawuQv1NZb7GcJoi39mYyTsxN8jYN72U7jtUAydvvPws5oAzgBuh17iEw5tBqUiGL2Pg9XzTTLz4UJ",
  "key19": "5A1oR4M2YxUZBckBWkfMGs1n6GndYXxuwtRD55w3xykqKJxXhaPkwZVLjTM7DarMw5RvKf9dN6JQztySeQeCsgU",
  "key20": "VVewEs5yg2idHJ3PA37WCJSW1kLajKAMuZseX3WcV65qTZvTPCByNEg6zYyGTvUCC7f27pVnxDcpAZ2DwJxDVUL",
  "key21": "2vNKmqzxit5XM1ButejzdHYZh1rXy9sTVa7ThFiKgCCEZM7MXJNMao3cPJXJSwRq7QoTRcvaKtMnBJnZKC8zMPTE",
  "key22": "3mMhuqLZ4j9uVWaeUPrsaWyix8pGf4NmejQjRzyyEoNHhPBJ1z3HGtCPftnR7nWpTL6rMmWrG3qGG7YDpu2fXr5r",
  "key23": "2Pp7kHdVfYvvzRwASVzeoZHcSjSzMVTi3o2UweCtNizPp5XixQqhC1ArvpeTho53yQUHuirowC2ALSm8j7n9Nirz",
  "key24": "YCuPX3deXQWENoK4mNUVtZ9yNCFFmQgodGRnfdkbZbWq8M2wAZwnGEj9bQ2U4JD13V4f61KbqgR39sofo26PQvZ",
  "key25": "55x2k3xiZEANdbiRkZQEypd3t9VMV5saZoTAs3WaVHAcdoctq1Mce5ZZiCgNNSFpMjDUKD1kgddumrXKTtmydWiD",
  "key26": "2kdYht9AQUUVQTHpikz1L32vdLg5bWsPnQAf2qxe9wNALEHCFMQJqwWbv12AhdEMJR2Loadns26C9ARo94qJ8d6Q",
  "key27": "4ucvd6fsvxxLiv5NV2ezXoBgq8kTQZVzxzxwQ8r1s3trud17UsdiccdduyajpZy6z9Xs7VMYT2eioAmmvWkA1CpT",
  "key28": "4QbzwADfFZZJSD2varEJjaq2mLWh2KmMzDUxvCZWY3L4VAKZDZWUeWvtMxcKavAw4sbFtggeTuhNysBVnUwUY7pu",
  "key29": "58XGu95QSuXhYy5LApwUPCR1EQpQUXu8PeimCxscP9sH2psz2hH5uGWx7cFSEsJDj67HysKD5TVy8qMVH1DSmGhu",
  "key30": "4LQtfs35FskeY7KxwEM3rwV5wYpdZxCoR5gzGRRNCFxU3wCEoDg1XnqXqYoANfsBUHRq9dhTQ4QHNpA2WVdDnwow",
  "key31": "4wyfMadsUe2pCFqp989Zgkif4MG51NfuMuwTAVYSDTgzdPBn5g6oYjgj3bRokomr487x9UnfxJEbRxNtZ43cpjNU",
  "key32": "4DSHP1teesS8R7PfCdP74UaDvjgAAdyebj9DkMT6MvpQ4D9api7tASv31V3ihmLwpdgxwKhCfgvXVW2foStaNKhn",
  "key33": "4gEvzUojxMqJf7K45JCXwx7HiQFuk525nNU1tSAohGqXqHJeDALeUPMJxNc3sfk2CAUvuCK1KvPkWAeNBB7NC32s",
  "key34": "tb3Yhv18HDCYpVBeFzAL7Di4cdt2rPFXgayKf2HuqvHYotnd8Eh53WHPsdxU6XaKTWSmHfr1WnCzM4BGC1PDRu8",
  "key35": "5vPrep7W1r7T9Py84oMiRxepqb3TVkLbxiLGLgRVgf6y8gfEDQ9AivvfT2rr7GSBcf4AmsVzDGL1e1vG9Gh3FXvR",
  "key36": "qNx2LoX9HLU4HRetS2bPfPCcJcRYXeCa8gtbbUXjgSYKP8xwQbpA8eF1uVnWNprQHqvEQ3trMkQxU3Evn6V19Lz",
  "key37": "61HJsNp7Jm1jPJNxkQd9NbabvnVUxGHUrYrnv3eBndFjoZjkv8VtMTpauafUQ4J6w9gJqYvzYsM5kvdt1nvqq15t",
  "key38": "HbxmEjPMoQE4oBu6GYBhvwNZLGfAY5UBhLUykxrcVNkwTQDH81Wx6CuRWnRbYbw7vSxNzTHmjxqgrj1qpcfxSif",
  "key39": "4cpVbkoX2sFfTZwAUYKZq5ZDrg1YSHQH4UFXguRnWEJU6CoTpUFB8woVph9xY43is5urrf5uYTtvCYZmm9QjEe8",
  "key40": "5Wun8bYa7XBmzpL6R7anBrcLpY2niN2rTpHT1tHpvecfc6VVSZPjDABSen8fg3LVqu4FthuE688Lze9LQVKjeVHh",
  "key41": "h7NasgMcUGRAz1M7q24857B7qsBvQUhguJkwYBsY2g4Tdah8GWG4PkERFq7kzUvmY6dQ8X8FThs7rXD68DYmLu7",
  "key42": "53uacaCZXFVYJLhbc5GRdfmXpxjHY8JT1zZdYmWQosPi8ZVrCeax5jvwaTh8jcM1d6FnZz7TKVtWX3NLcNcFG19j",
  "key43": "5WB1FYWKfXPBm4puthxvXCYEAV8A7R9xEVSykFdKVAL9CQU9cZ1XoVYiHF4JWc8aqDay7NYSgacg7f3H3mNdTA24",
  "key44": "24558Tmy8LE26SXCqgsJtuJwyHViP8ejAJjMT2BpXwUwhErxC827TeJJ2t1VwftwFh2CV1KXGL1iGiNsHoQPuurm",
  "key45": "18zosV4ftgyVJBPx4KnU361v5CcEmu6KucBqA7NbaHDDVfHgJQ3VRSAvYcgp66LnyTKLPJDTsSq3ovyxsWgihZH",
  "key46": "4cD2uKffSSrFSJ5TByeeqSDtkGQ5B3wXjnPAKifvKLTZ4uSuLigDdkha7ARbqEQd31xifBBrmpQruokfDFQMLyeD"
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
