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
    "4fFZWshYWcun5q15knc7aSYgbZv5dBxspJHkzXaguqBbbFbQ3G6dGbes4Dj2oDgYc9QcJ4LufKFeMYphxV7mnBLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DT59Rzbaa2tSGjCjspumsaVQHNFX4sjxTekM1G4XkC1UffPMLBNiPq7avu6bymrDeQE1vNndhzbTHiFMXDPjMfb",
  "key1": "3imhGtHiXi7wBnjLoy1wZeYq1ZvuyvwUtPoZYQn4Zai9FutCkfF7kS4q9RyegBHWPqvdisfvw183Tg6hb249iM3B",
  "key2": "5Xv41tSEWyXHpmP943RKksgjg1ahTwduMVdDbKm1SxNHse3zqc5juNQ8UpjqGYrPoAvJUmbeFyNKzkKUBn2uCDza",
  "key3": "2JLXPc11KwNQACAW8MaKV39mhCVUs1qZTFXzFFMDsRNdF1JaKmvZ6GBxb91o9xP2QBYsqGNhgtwMi32AKmPosPHd",
  "key4": "4defv7ABdAb7jyURcKmkbxwjXRXh1xMwQKpZYftG5PXs6ArxYQ5GYJAYrScWmW1wqSBwNk3tnQqtdyeDDBMUwMPa",
  "key5": "3TVVWKpsBwb8Cym2P2zPs5YUfNP11J4pfzjaVxZ4insumSffcRQfvCDNddm9R7RiFxfuSM2miZRncDKQgj7UmGDU",
  "key6": "2Ld7tqkdSW73FjwrAX1EB496JJ2zAQfSVcnwctS4sfUhcEtDDsyA94tuX66GWYbf5n2GptTEtR7RNs4A6Kpp4V96",
  "key7": "3ybB1zBJUVqgcXMDBQR8M4EDbf1pcarMrBd212eJQpqwRKM1oYcFTrxCGs7m1u9AqeKpbYeyLpQpMfaRSHpiKBN5",
  "key8": "5osThCYFpAjzB7pECsPrW5ymm7ce6ikLe57W8ykC4GZZWT1Wo9fzTP2Xiz56LdJaXZcLzy8AraNnoh8bVBxwaTbG",
  "key9": "4rG15tXWKTK8MNuRetZXX5bLgQr5uzkd4S8haukz1WE9tAWWttC2Bcm9k4QyQfJaovVSCB1DLbcdREw8pABuLQK8",
  "key10": "2QTJs4BtFrJa2YQ3UtCJbMGEFiCZFPLbxn47mCQggeJ3wTyb4U74LzKMM5qjBRMUc2N4N9az91DxWpWN82nLkrqz",
  "key11": "4S65d58S64XiACptWgvJHPsSyepodDRjSRZZSVemduoor5GKY7gLqpGZPSzE9HrpVJiE4a7RLtxbiEi5gVbLmkW4",
  "key12": "Te8Jh9DjH2xyZdM4sh92bmwYwPWRCkvVPJepyi5ZGmiPFUCmrsZCg8SkHSWsYxuWdwuGem7RdJkqpYdpD7Dua3R",
  "key13": "4TWdqZmdJoNVW9pUBeVVFqBtuzAQKVvvSQmfgqLNFFGxaoUaaYHSSF8VXiKqvuK3aBm1rzsudZQxfK6fBkYqmnQ2",
  "key14": "3yW5N2RocxX363EhcMCxAjjR9dTy3meNFLVTbuAejGv1ZRRW7dTPrisfiJLUx25BnW7yFYmUHCaJ2oST7CsiuVJZ",
  "key15": "3bTXtCbJsXwxtwFGpZQX6mA44mHUHFwjUgDP58VeQvWTTi2JYHjpigs13er7bwRsgsoJBbp6n667njQghopYsJtH",
  "key16": "5PjWSjJhijxuwT58QcGbzn87EUAtiPu3Y1nmCvrRUaBqrexhmkW8S74H6ywGLnfyJtzSB6k42Pwycmqg8Uc7NPs",
  "key17": "d2GXk6Abxiapahv26VsyxJGpKSMfDPJBbcxf1qdj9F57zg9zdUcfLDTyCKxUfase3VffDrjjCiaqkjMujvMFREp",
  "key18": "4GXQckufUSMV17kwTyh3pV6KBMY1wzhWSaJhtcLNaj652qSN2t5ijAn9JvgWhj4ThC7N92VNYngAJkiQZKussJFA",
  "key19": "3sc5ib6nUxifuwPf3od7yN9Dne4g5wpmoKYMyxmYZkywG2jVyGLW8sTajEmPRK2RREM8BxM4jcX9MpihzWP7tNEK",
  "key20": "E2RUTCFahSiX21kmSJSSrya1atZGQESFkBFwRyJ4e18bRqYTdo1na4aR4MuWLp9fj2y7eCy7z9adNfipf3UpZNK",
  "key21": "3971Bjnzngbw7UAev5xAGAenJrnxUMWENmqixydVEvLrwNJzFxQ2U9TDzDEtqgw31LkmEUprbdMxkM693TnfDARb",
  "key22": "PoBcqFytpbQLVy9498cf7koeXJ5yzfMfWJ5b7meprNgH4hukpuCSxncyQdscbMHJ6JF6hRQpG6tu2TbC39Evgvq",
  "key23": "4cQSP98nRhWzQSFUCEr6G8eoyN7LboVeHNqyEaNbM4q4dHa5HKzduMGv1ycUv7y4nuyqKTCLGYy3RwKQz772vwJd",
  "key24": "YEUSRZkzNukjAVLYFt7eBQYsFoJjFgrb32NfErUBKHjPpg1mfVyDLFsQBdbRsZRVz48kdF9YFTSb66c7YwbXDaM",
  "key25": "49qRvgJ6qZfJ4t3V8DP8iY71egsQVjBigS3p82NZBvKkotRrbxnvfFCKo5R6JnF1EwmQSW3mUrCfsqvRAZJCLede",
  "key26": "AyaJGFKkodCrpGksRNCBtjixV4j9BBJLyRxRKStLusxFavxdL1MfocS58hGmy6iukYR4dGjiPA1KRQuo4PoiRXV",
  "key27": "2uZ78rouPv6gNKFfp3ehqaC9B8ybm3hZsH1oHKYgNRqbDuuv5D8rRVCeteWmM9pUFG4bNqbu9G3r65dV6ckaaSd1",
  "key28": "4Pa3zENsNN8F7oN9NrSWup8XiSf1Pni6j4y6FX2Ye57FAhyDyd8aAmv25jq6G8GdGJ2bFHCURZz2sk8UJZrSMBat",
  "key29": "35D3NbbMx75jTgMjFnky7YY1pKJoaicG3MMBvinhxTLTS4AzGsQ249dTNo3FNuuVQ3oBoj5rRuYv9yQGz1Caaxnq",
  "key30": "3n5YdFWcaPYc2xfso3s2FZsaDWTHcGyVmb6Ghw4Si1xpXX57StGqnibs8WGN12C2qrwQ6xPPxvbodozHHXMgz38o",
  "key31": "5rYiGeAoyMMmCwDjFbBriAixehevu2nypjJPJtHw7wZFzqLceVVVd5XPyjw5Vf9se9o32btSQ9eTAPS3s1nA4JRa",
  "key32": "4tjB3M4HgZ98NqXzt5RzEuY9AjnQ8rL8xkTQxtKLuBSsDX1xCGBACYnBJe7CsM3wFh8sM2KDfgtag6Pn7Ca465Yb",
  "key33": "4inXdN8zkExiFpCMbh4wAys5S9iZQMpMqfb4bt8sZpHFdXRppGcBoAPV7KgNpN9MAGzpAAcjN8grdmeaLgf1Ha9U",
  "key34": "3mQezZG2JX4DjcKKaExtdpmen4UEgAvB7zmSYsEhduBDuard9RfTdudNoTxstG1gFxUDmccnnKFbrF5F62tdWEp9",
  "key35": "4ctQDNWL3xVTcgDdeEoBu15WDbeq7q6TjZkeGF9PdZFsFg7BEszbKcWQBrTC7SbaPFQetvCrQKr6kPMQ3MSQsvq3",
  "key36": "4LiCQ3sRC6CKFjKq67AufZ4aNTUQWrndsw8esWuLf22L74KAAtQ4sdDSg6nAVvRGWjW5o88uvgQxsBQoSpedQWcR",
  "key37": "4Mx5iXCD96j5b9bPFFewqVgtJBfxNMeehdK93nrCmmHEMNUhHauioYNJvRMd5QV6pm1FSoJKrdTnXCpyQmTxXWcN",
  "key38": "2x64APbzK2HKgUwkehrfNgDW8ez6Ai9MbHfFN8brEdGqcECoN3JjSLTLxMUwaarWPuXLAFnyLgcwwY8uDWih4cQu",
  "key39": "3VzFbjABqhMzRfzxYpeUDfMJZH8yDkzQuPhfqbZ2m8tP3kTg9xehwA8UXzjNH1S5LKVdNGRyxMqH7qZRuKtRkEvT",
  "key40": "2jPy766sVa71PgMASbRPyyxzdeQvFBffxrNNAQmcY4cimLZXo7Q4JVQqXBcvF2oWWcJnUs2FvndivLWcSuef4Cba",
  "key41": "21zv4jLXd4f5TNyH1GULQqhYW1MSDeAvWoQcCE1RZNraU4gEpL1ztUdx2Jadfxw8Z3hhZfyE2dqcCHmq1uUgJBd6",
  "key42": "5qmaEpSaPSc5Qu6vEdY6J5HXhgzgTvHFJ51PmL1ANjgui1SR15Zb7USQSjNtzN15kgozGADo8e3wM2nndfVaVX1D",
  "key43": "4PcjxocaZgr6e94U2sctqizfd6NdF7K5sFmoU8yL8yfTmSAGhsytm8og35SGYdGQAK3viiRjyexekRn9zg4RyXyr",
  "key44": "TQSzce7EVE3sGcCAujzymGtddTJcudTofuf53npZuiWM3ddCyPg6CxhXdA43N8opFK4gz1TST5aFK7uJ2XysepX",
  "key45": "5XdWkUbX2xpijkd6L1qpfv8HEkxoD7cxVi7zCq82iSQot1xUPsKiWafs4ziKbfr9sKB54BJ5Ve5KqzRoxAToCznq"
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
