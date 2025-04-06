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
    "CKNmqvV6Vg5cc4SGy1sdx8Yv61Urrfhx2pG6Q8sGdapNek1H9CBJpTnKmPyzcUTSxoXuDAaPxfkjg8fweQz6nnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbavT5ZkYmPpV6Hm68Tpcafn7kC8AFudeKzvYdrestnueoPXurVV2PPUGB2jKQiwYuQexko84mzBRjsXtT78oqM",
  "key1": "w7GKb2QvivtzYwk9RioCrhxx8AKVMHtpG3hYbds1tiGtXkP8KtsPKRYBudVxpoQVjowg2oHU5SMsESUed86GLqT",
  "key2": "2ZFi4SD4Dnk7aBa13xgXgr2bAv3FUBtXCh4nCucoXKUf6wPaTh7bb6rVmDyT7p9Br6rA9k8gnt55kJMGiXSU1a32",
  "key3": "2bDvPhEkqQmb7xF1ZkvMG7r5yCN15QnvtRtWpEWRBofe1aecj11oix3a8SMYMQbuSA6KsXKVHGs2UE6T92UBa2DC",
  "key4": "5GZGrFwnm4qGJwX99tjnshy76VVHrtXVZZ94js6U2coHcLim13UtyEMWmXcJUNTjiZW2TXedUSteeTZF39Zqz9kG",
  "key5": "2zMCUyWsTp8hdstoapMJ4q9sCkzrGyEA2aFcCL2MMNwskab5CTd28u86871t7bMz3UjVarDAhEn1FQwbRQb9r7mf",
  "key6": "4uMWjN7wJ1uKtyoRjFPmp8HXE8dc15Y5jakiYoqZdZxR99S11LH1GuA9H9riTnSEUGUSuCztd562xHusw9GRxdEo",
  "key7": "2XVCjb9YdBEcQ6htgGmdfbtnfeeiGjcwxw4qvxx7FgDrhGrx4z7nxDhAba2A418vSdcPBp8J7nh5z6Mf8J6x6bMC",
  "key8": "3e6k5wZqrVTpZbi4PLphZV7X1dSzwAGGdVjXUww4Hzo99fuS5VGnzizdgNnasoZJkYcCekAek2MkvcUNgNyMtETK",
  "key9": "m7ups2Vp3eiyyyHKbBGHXosqE53MM6Pods32w5HodRjCU6JM1RttsUiRfAHPbKdzAo9R86C43s2CKHhsjPW2JyX",
  "key10": "5VCD3muFyooQzMNg5kn5KLPNhz2ZsajkRbzL3UEQEuiMRwoKD8943BmTHsd4mNHgZr8bQbeKX4bQVqPvXs7xgPbw",
  "key11": "4eHbAxPNnqYoQE95KybeEdmfmCTkaKZr3WtFFHn6WjQzPf3z2Ad95gE7rRaorQKdbNhWwKwc1LyUphQKva8qBNko",
  "key12": "3N5DXCqcGebTaHLnekGztgzha8bETxCYRuisb4Ba5Uki1w5jcqu3MTmZ7d888SHp6WTxVLeVigdamEi8VThXfboh",
  "key13": "56GvsJDJFeskEiiB8iKyxas1if7hsxqnSB6N4DHLoPWdXDQm1iFdbQxwXJN7jwVbgMR5EvYhJe73M4AATztbmGhp",
  "key14": "5FyxCkcjWRAxtkhRoGspzKREAgynD6hBibHWyToZZGgrJh7aZTPArp41uCTSXJoCiN8jTSaokVtNwqy3qQwrHZrx",
  "key15": "2LbQkWq9yta5EYgucBAs4h3smgR4J3Wt6ZjTjgWTWu44Ljt4RZaM4P49yUntNgqj1coZgbhu5wLGi7bpjK1DSNF6",
  "key16": "8f8mUYGSkQViDXtwdjqJm65yBmacg5jd6h4cBwWKTwzWqHLfN9mvcuZrwnDvYRNMU8uAaL7ghCQXP2E3M52LByT",
  "key17": "ABpzhj1Cq4R3wPdKuiAHBpVNhhRdkg92QF3E2GTC8W6yPfMsjwyY68Gwtmc5A1fyUun57LwPbEZUoHkHnfaowZf",
  "key18": "2sMTbGdZK5J11SdnM7pe23p2RLFZYC5QEiozKFXQTrpWTzUYjBudmJor7W3B1UxC9hAhue1jFdWNUaDvLpuriQns",
  "key19": "pYGPwJgJCBeaK28apiZsgTxsHR2xi6epGXgJB312SmdAvGJ2uxyuGbSLSRuuMkJmRFh4Cm85GwW9bzWMiLA6AwE",
  "key20": "4bZ2g4dCq75v5oi7xPbC2dceicDAenjFG9s1SZrbLv1FyGGRWn15WWSknVmVApDXNxaeVGw7ZmeAeGEzCDpFtkqe",
  "key21": "2LxcNgJ15ipLS42TBJjFhTi7NMY5vETsMdpeWC4HUKTGpapoUjnXmMgs47aQcu1Xc8bPtGy1qcvpL5W4fVwQtEiV",
  "key22": "5DNNkEKPR3JQEAT8iG91LRwMvwPzLBzTWF84aEeEU9gUVzhozm8EuTC8CQbsenLTC7S99ZqQj9LRoToPy1ryLsLt",
  "key23": "4UxWP4YQbEUG55pYJpYj1DtYKtTTjQMKqfFtLxcN4bdBRYu5CoKLKgkRS9MpLb86BEQXCaqxJdrb7ZFkuCmYHaut",
  "key24": "dRtkLRn2TaQbTKaUwpWHB4YsrKsHtNKsRrtm3cN4YhEXqaZtS8WXcUa18udJSx8EAhQktxT6pxSk4ucHqCtJ3uZ",
  "key25": "2urTruLDKM2pkdr6WE9AbvLK2F2WrRmNFvuWR847jnSBf72ocdS2aSzBrvnGcVjTPqmbh1rk7qjdGSNWib3GDFUc",
  "key26": "3uchUAfHY3FMBbaA2N7BDJvpazCjEJCfaToYUhHtS6kjfrRhutn52169bxBSLF8VEfDpW7xCuC4HcE9sqeHYBFZk",
  "key27": "5THPjwF3aGgA6GiwnWAhvC3rUip7w8Pe6H3u9BHtT2JgKFXdypxtNYTBPmMBow1ta5AumjYaZfC6C93VEUBA7Guw",
  "key28": "3KBEmHiPUwPj3EETHuqP5buLBAp7kZUSNRfs7oMJr2WFt7ReALUa8YJJzDH5bc56BmchXn7U46ubdoapHGkruzqs",
  "key29": "3h1yWSDLEVor1FqMVD8Upde4mPJWnNEgNZBYh1gf7iH99YVQaEXSqJrfDhXJZz388vUURwzmGPx3hFvJ8nke6shN",
  "key30": "62WDrtzdSboiiqDhxfQ5E9Cw2EZaYHncGtD6FdAKy4n5rgADPoqjmiYEWAU8dbErCDdTeLsaZiqE5dAUF3noT7rF",
  "key31": "3WxMwaq6k5VfCS5qNYyRr6Zp8L3jA5MJ2g7rqNpis4nesKVmDCUSwgB8a24Sjk3BX9aj7qmHAd9GitJysF1meyqa",
  "key32": "3yWbHQ7ZdjT43ZGMcPFVfZ4nJDiNf2EhCZiRzBRwXErzBxRoJs4tfVYwboz5nC1HQ56sXML6SoRK9AJLwLnq4CtJ",
  "key33": "5ujDYFkdMNm44JjhxoaLw3AXCHrFdqcghf9PMNyh6TRcJR7N6wnmmPjg1xQcJfXC3Frm7y3EfMQjqfThDYnvVGni",
  "key34": "EysSHYZVAt23KKisYSKCYc35XEUP8NPRXNqb71GSJaL3WS23FK46F8aFNzSnpLuRBBTc1QjWDDowQTewN7BCEzM"
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
