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
    "5nxYfeQHiZd3r1GABrvtKFGzTucreFeNwtFV6Ynxfdq1VtFHFX6hw4WLSdYNiJa1s3eYv9kvixnJ2kjD87Gj1CUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnF97bhvxe4mrppYrjdfZogQew3vpTKxbq5ag1oNxwTVvbACfQTZ1pTTL2aPXG31zR8StHwtrAk8dVY31aTk4Td",
  "key1": "5hDUYj3iWwK65sJqRkXrNmUPPeaL77WFrg3sv8awAEhx5HJkm22YsoCrt9yoCdmwZJJ8XWEUMmfr63cnFqczSW2d",
  "key2": "2NKgQjd7aDw7uFFDYBdZamuHtEPw8TsXQthuzuWAKQHRYYYM4GhVq3CDGGtqtLMp9qHotsRABiwPoe6m2jY5tGyK",
  "key3": "5Bri6qCtMkDFfAnjAwCx2qZFMaZgDj6S1BVx4dwF1iLaWhX3e8mSweku5rkMXbFd35qdPwsN3sBEqTDyxjHZvUg3",
  "key4": "3cjoW3pymXYocjpcZBjoC8CgVXMXXzjUQvkcsVoe7cP7ye25iy6HaVtdE1EnhR88tQixVzeineHAhU3Yp2oRMTJ7",
  "key5": "h1zCmxiRv3jPZeYfHgi75xTMrCwhE8nX6ZPn1dsMHVFrfSn2r36Jrq4uH99Vg8cmHc4fF7Bs1qzJv63zBKyQy5p",
  "key6": "YSNCLSSx3XL284ZHEz8DnQjnYtkK6LVeVG86ffpYSmuSze8qAbzZVZq88ohPPcza36sQYbXKhD7VE1E4DknXovA",
  "key7": "3e46JXE2NYKD4AFsRn9je1ydzytJPWbndSux9Ud9WDePsxhMwxKKKnsmUcS58ZcV9YGigeW6Mysgs9yYVjy7co36",
  "key8": "3H4ciatZP6eBiPR3qVFpGxGKQQnJLGAbtj5x4rPhYmBz5v4PCMtvuubduAxRKeA7kgUSjAibV3AM9AopGgzisLBA",
  "key9": "yyStYPa5H8CLMX3DVpDKB1puBwJNHsXfz8ppzchcegEZWJQXgEieXcDRyXhYScTF1qw8BykwD6uw4rxxJyD69tk",
  "key10": "66KaeNQamzzUDRZXgeHX2wjVKtv3enUUFSoGCjssQ7kXgyPGVSsiRHRHyM5xeqyGRLHYDErxyKwzPDtXnPkUxK9q",
  "key11": "3MsSoTiTJPcnLrp5SWL9xx6Mqc17ZbVTFkL6CntmeqnVGYB5ZvDL47C5LE9h7GXunFDZgwsnmHCErUaF2f1AZkfN",
  "key12": "ZD8PAooGNBszgUBZWh1qnrzA5A6FWG8fw1uPxJbiQxgTA9crGLwN25EFrZUkjUFicv4FEuyLByhDhmzVFb1rCsB",
  "key13": "5rBHRuA4XZb6gm98awRzSGcASCbYSc1D3e5wMnHpJDJAAAHJxA4KxDnWKoSF379p15w3eYyofaXTczG6wDHMf3Zb",
  "key14": "4msbdzZRz3aHdy9UqiGRappHvbpexFPdYJESUi17K7wziXz8bjvrUsL6LPJuosZh2pya4MiXKmYS1R6Ekd2QCYKz",
  "key15": "5LicdqgGrsgf7KXWYs9qNnLpwvcLKtuWE5rYtHhd6jyPGrDcaPg7gwTdPLxnDS1vbBZJav6otkRsvqy6Kc4fUYTN",
  "key16": "WNf9MHPeeBvofeQ1ERSJrPfCxbNoJoVaTh3wGJqMexWKyuVCC7os2AUMMFaWXRLo7XDf8M6tpfreR2rQ45o5bkU",
  "key17": "2Frp9JFN4eJGqRimAURMG3te9Vjq5vWDRgLcmp8KwsMueTvSW2P9fBASQy2XmHNSHLSqr6bmueCcdQBxE3EaNLDF",
  "key18": "5yKXg2EQSJqZhGWrHL139cznBDiS5TVkrZYdaZdQFmKLoxQdiHsgBRWopzLsvcBrtiVyFM33LGdYXbvSkeatujZV",
  "key19": "jNS1ZkJRAHbEz1DiJEfmJPYkMxRmqX7DFEnqAvphDEjwL2uD6WF5QaMcRjg45WBYuTiWzKLKY1JZrF5p1Ut3ATq",
  "key20": "4NMHKDUQh68asHpxGWZinG2UcSpmDrUgHAgufVSxS53JDddXzTsZrSRrKRGQb7bqTqQfMAGNwF1EYi4J7d8pryte",
  "key21": "2saBfjzysNtR7QkAoP4aaCtTji2RkWBa1UxgKG7tEGRrP7R7Lb5c8hq88JHgwwy5ZEYTLEn4p31exsUzr28fHsRw",
  "key22": "3KtUK3JzLykfPByoKzbhYAzuqM4o34KJyTMfLXS8aqevsUhw1XsMRUNzhwGYn3F8Ggtkn3Pc4Aqj9w1sMKbYeGkv",
  "key23": "dFQNvMHY3YrcuzGsd1beNPg7ZgqnBAdiGi4Kuh8N3GQs5SEJSdgRzZ181JQXaZmbG5NYAiLschYCGuUJVMqdqmu",
  "key24": "3CPf9DLsaaJdEc99Gn8nS1rzZC5UgW3NVmEFoF2daPRvRAxDot5johaYBKD6NJ5Y6RmKj6hRSBtjpPyzANCQ293h",
  "key25": "4CZNyzB5iV2pzqq4k4wwNLZXoiQyDfvYjK3BzvcQTeWqDM5A8myrovQLHqjpnJuRGpnun7ogAojKcyN7t5TkmyjC",
  "key26": "w88m33izsYzSHk52oLwLL8XCNNC1hFKRrRbsVtAGabnWP9ZLSSiqSnBnVtUmASuXtH5Lhf1ajdZpAZKa7RR78ND",
  "key27": "6pEJnt6sKNK8r1khg8Gn6FL3bKJz2HTTiSrPVz4pingmhJ9mkmkUKon3m7TUe2awLRbwCdd4MsouVTwdJC3b68J",
  "key28": "4MDYjeeS7pAcJ3MfTdisiZaFe8TLTDsyWb5UaaRsj7NwDeu72WngqWt8tV6sRknZX3va5c4CuJMXymPx3EsmRUbL",
  "key29": "45SccEJKzhXTWNBrYAjQU35xewsTCdsA5p4MzqxEq7phCfgHZ7RV1baKM1Ped4G9Y4WJYF6Y7MFsexAJXCWVPnw8",
  "key30": "4V7oiKWcWz6RBpD4pxAEzp85eXoVkxkMCoN1GSkSoNznpa3zJqVFscs3iHpZTyvMyuuzceFyqRa77hsTPKE1KEZn",
  "key31": "ejXSmXotVzUXMuaxoKG96c76jfdkSYbfrMkgAnMKizfZky1p6y9Co92uNMNYGfMc3f8UJP4AUkNuEmmFkSBT5yk",
  "key32": "35vjFXf2isbGukg1wgMbZR78GoTE5VVL8eSrJLX3PnYQ3GdveFtta5q3t6YgCwX9VW277DEb4YeWVjJM1teVgfFL",
  "key33": "3wxYYtcVjYEjkWLpQdTbxNX4n5H4gqvjSEvECh19uvRxTVmwSFtBY2As8K5x8YHPEPjQ4TU7jZStZzduZcVygYqn",
  "key34": "5ax6YL8vVFnqtQiigFSxgHAvhMQ75YVBdhdcqDAE16tQoLbyXjqyfUJFJWV7j4Dm5XxNtsWdvy8Po6XNYDGgyc89",
  "key35": "LFUPy8QsK1g9hmrvgLQVF9Dch7J9NxCJAakCCDednabjxouBjg55M2vVaSDTwA7YQYMe9hY7mgeboc96p8WTCti",
  "key36": "4yMY12d7zhZAZWwKmQJandQtmyLhxFXFC6SaFHLWoXjdZ6GUKUjxMETiHafGvaCrdadHCAmpzThvZDNFXZ92YeQn",
  "key37": "4asPedFHTLeYggm578LS5SoQsv2Ltq2RG6EZkKdZwnUswmdJmDSe5zdtaRUrS2PH78cVKNaDhUCCtZeiG4cvxE84",
  "key38": "3aL6q6jbcqwgh7trLY1Nh9PjYUiB8fi4nbr2gMNHWHpKt1Xr5hBcPcSrzarUufjG8Xjf92P6XGeQzdFgeFFT6oVr",
  "key39": "51vgHNp4BgrtbVjSuQ7eKerB3JPx4LFfEVULJgRLZC2hH1N6oKQDgpfXDWCNB3WQRmktfQPb1ehjBxXqzFyfZHfc",
  "key40": "UoaNavL8vpr5UfKgTH4W5Kfvi4eXtwPtmjBoN9DwYYxXLZfttjqnao3wY12bdgYBigodE2MhvD6xQnfMx13sgPm",
  "key41": "3z94Gv2Qj5r5ZR16ps8AzQnxNj93q4SrNYfz9yQz6D48rjwcJ8o7BvGDPGKvP7Q5ZAj49EGtiwbo3RPVXjzYESFw",
  "key42": "4T22nRE1hPhBDJfgebcns6tmuwboBo6vrWdWnWnYGT3tCx9dw6fudjEUTc1xrtXfUSm8XZ5umSvk8w2nDpztnPTX",
  "key43": "2GEEwX9rKCpfXmBopnbqgj4ms59fyf3R8Gsf7A4pSJTEAxcQVaCeyHvqUP46mf6V6yBRgRq8P4Wcc6uNYLbd8iuA",
  "key44": "vLJScm1GGvcLTuKjTnvsLEjgN7W1htiCxsB4JzwEw5iPTtaQk1DSDj7HiJSThxHdtC5n74k3DjtqGVxWS8suhYi"
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
