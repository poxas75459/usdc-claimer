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
    "61cFPb9aKMJegsVxzNWLkennPunbqDCZKBvZEB5vdi7W7DyYybkDq4dqKBGShQ86JEFA9haQEtBC4a91gDam6ecs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215i2eJZQYwb51YxMsMTBzJjx1suwpNaPkWwcns6CmkX19PDbJSKHb9g1cX5j4CJabepovotpG217ZJ8sm5swZ7b",
  "key1": "33NEpRZhdPv6GCRj3Xu75eRMjNLSwNvMKg8DDLNQD2nzzJADDeu8TKqw1fZPhSVx8xsKVBzPoJ5nCj9Dhb6MuCcD",
  "key2": "3SWJXiRVZccaMZR3sbjVe2RjuqQzyVjWdVj6GZfdzYLcq29tdjkeu4ywpPR3sjprnLYhGUyHcMW6HgsegzmNyJa4",
  "key3": "525J9DguKeBhP3AfBqUCRpxio1ftND3VDSnenu3p7t92i54qniYmQf3pQd1umAd1DMD4eXUPF67GX5jKcxwENaU9",
  "key4": "2d2nxZLnvry2fKm6gTEcaYtJjoA9AWq7atJrCMGbQwyTbx1z2UvatL9TVJmehttwRNwo6sPshQR7hMMP8f7EfbyF",
  "key5": "64PSh1Wrc6ujamAawrAn3KVRveZToXFdrY5vaRa3BktPUPTA2TLtQa27CQRzk5wJgBq5AxmUD9ZPNL6SmTXffG4u",
  "key6": "4Vzh3tX1SdprVLmkWYCjvTtFTyiQscWjeN9bsZwSzMSNQwDhh6XK5u3HEpxxSDJcpjQVJsZTMWnYvMuajevaiPW7",
  "key7": "2Pq34QCQeADKmTwniQayjtDS7u13tMNZywdGC5EAWE7rFyzW3cew2aAjHwuksFAVFJ6MQMeZYhHUGPhH8cmCEnNR",
  "key8": "J7C6twtU9aP6qNn1YNSVhrcNvkkkNEMmFnx7sQ7kH4X9N9DtoDSdLn2RjPA9NFvdKpm33dWCLqDo2Ggi2i6t18Y",
  "key9": "43sYezGVnS8tRmnqzzE5DridcwBJLNqvAoj5p4GSjEnSiiCRwAzYEb7TYWEJbHwFjPFwF4iMPH7LaYk3q6jWaHEw",
  "key10": "5QancF4hwxFStAbmrn1vDW9KDmHEah5i6V3BZ1egJSFS15DY6yY6jMVagU7RAwftov7JvKwj6bnKPjzTiytD2mJQ",
  "key11": "2GGR2v4FUVDLniUiM45Hh2QbDtFWqeJVJpQh6qh129de9qtujf3WUrj3WSZBqvHYBpr3y7y8xSzJwYvrY7UU1QJs",
  "key12": "dEFNcgRaiprQ1B14vRnfdi97po6Xsu6hmWvaoaavWNCBKb5V1RzfyZs3peWqz3DnnaVzKeQti2P9HQ43evxpxhJ",
  "key13": "34qTMHGhGSy1uHCxFZ16vJRySthLGoC4g7wN18CdudT3AK9xtrA9dxMDHjhLgBaacZcdFCNPFzEFhame4qiJVcaj",
  "key14": "3MWvjNELJs8Zc9W5eD7iPFCMVxtXTkoyF17CmSQXocp5Ti7NhYEZjFrKDyJecU2uvXDmMPPueJZUX2fbrV2C8Emf",
  "key15": "2SVE8dJnNoVNoWCdXLW8gEfM7g4Ux2TmyYpqcVznH54nvbErfN5ZPmsaMEDcE1sNFg8vLyLhd43CxmcsJqh9wFLy",
  "key16": "3XgW2SniVtDKnvjrVmtmrYrXv9XVVcQz4sWbXQsp4iSpkppgEyaoGLNdzkeZk2zbxYpvdC1C3f2xP4eEUfBdKuJH",
  "key17": "3tSfuAeQSo5uHDuBgcQE5QyEQqtABqoKLQVeVh57Cvb65bDAjqmq5jVUe2hS1fgx71GQkUermqMj8pHt2w6EnRiG",
  "key18": "4bi1HGsNYkyAabS9mBjSbDQmBEvQ1Vuprn3cTXmUuewqGjcR1rHXD1W8GxWekGPLiKs4NWL6wzQoxhLwRm7AmhLN",
  "key19": "2oiirZuqsyGFa68b9aiEoqwFbW5nCeV6PBZ5yGHi6YUpN4AXDDp32SG9MJiq62HkfnxMN8gk5N9RacdhZmt4e5yR",
  "key20": "r5PZ24WfRodd1rBBgSodHZYSGCZHsq8JDu4geYCZmrq18G5m9L2uQFuhd3AtDoYCtDGctSmuVJxRgvuwivu9uhj",
  "key21": "49pxPoyS5rkYjhwJzgYrsPU2BKvrgLZji5L6esKaMKQkL29NjcXeobbvQCSFpwjCijas6yYfS9o2ufR37ULEphbi",
  "key22": "58u3cZFhcpvZffAn1uZPk5Hxhi87276Y7KzxhzZrz9JYANbBpcF16NCrS7mi1hNaL3JjFeogvkJeT77XEhjr7g1g",
  "key23": "4w7kBHNLRZa8AuniXeY7VupWAi8JJM9CMQ4aUDdeR1ZpCixsAT8nya75XGeoXxYvRzZWpB9mwTtf6YNVkvo2vwLP",
  "key24": "3dmSxzVuJao6GzERh1YUyrN2h6PXDoxevrnRqtH7jyREZqYmZJMxcRRQWXiQ5tUpZAAbVzr4C8YRLGjaUzLd9kqF",
  "key25": "4uAAw4w77HfkdFRJghLcZxMSBis8s4QkNumagqh5gv1kHmQ6XzbKVjjf8RYKk4YzPBQUgZcMSS84XqmxSruPyig6",
  "key26": "5n6cs29dWeC18aRavADBfMmqYEWhYwFgckaiXs2JDe4QtAdNEZRUZyMNQtRP6PQXKgQJnz4yj3VvnxZhF6GL5fKs",
  "key27": "2WcdnepdaGuPk4wEUDNRFbAD1EK9avoiHDg6RZU5Wh7EsiQVFxnnXBvfot6aj8Drzs6wbMWTZiG5DTFknsEzFpNo",
  "key28": "2TrpTPzZHiHM7R3K8sx4GJfRXdrV9nXmMDuBro6hFSVdxveXkRnNHeL3VhoQSsoAZnsDMojiQ5SRNZrAjdYjmr36",
  "key29": "3UTAdtdQTX3586NABBYm1pnNriqfTxfuFw1fgGxb9fhCYfH6LAgug59SiBqGZ2jCeFziJ623nrfe3B5f8KhkuBS2",
  "key30": "uLxbhSX944QUuriNnk8E6xiBFTVeeWTzZvYmrrZb3wY9Cc6xZNRSCn4gtQmaeewzV2NGZXUTVFbeAwZw3BG8DW6",
  "key31": "3T635xkS37q9LidH5pLmWSH2sXTupHagUbtBbd5rAW75sxHHBkN4WqedoaiuvyL1PyfmNCy7xN7AZFXF5cbqnF9r",
  "key32": "24rBteziTVyG9judi5LtNaVbRvxWVzw5YzF5ceDRkdsfXYoTkNu7dKHtR1sBSngKFaoDs7HUmSmwt5UQaXovm1Yz",
  "key33": "2zjMXVL6M6xGDYaahVhzxW6MAgPMhRJgzedaPeertaRvjD11MLCGZqcB8i6mk2Y4yGTa1SwDFSLaiJfd6cspAkCx",
  "key34": "4AfSTFbuNhfN8yGYJeXUd6WPxaow6MJGBYQ6spZ5vGxGw2XkBjJo3raogDV7PVWjK1BnbfLdC7AVviUSgzFYER8p",
  "key35": "3voWpnoJxEgGSWcyPwyLkCjjbs8Xo3CZhvDr6XWiCG5GgFRD8HZPisrVYjFT4gaq2DpzGd1vsiDZWqJWtHCd3YPN",
  "key36": "3uscbmw2Z6HvETbgkZzdFATeFJb2bStGU8weFRc1zZHLtno3cLiTCPbSK9YQagWjm6fDQHj4FajLuTUH1pHNd61h",
  "key37": "38epFri8LYDLnv6qE54ownat2RpxyaJna7WpLcMhLtJMAHdjhaWJRRGtBT5VL8aLUXpot9fbaK7s91dXoKjqsUie",
  "key38": "b7Vow2b5BbdwXkrJLwchaVuy2F7Jhz4C4mzm9QkTmLK2H8UgcWckhRe5XU4y9XcZqDKpMVWiyUob7eofhpEyYNF",
  "key39": "3des73cMSbiXLSGVPz8J6k4uru8LmaQ5LiMSbZSRAMWzW6sV6PtR5Es1F4viP4n4bbu76Qms9gN7G8Fqw1DVPFVm",
  "key40": "4McjLkKgSG49xySpZeJrGR2uhhZsLH9jFqYKJwzi2211svmhR7gjCea477WEpxoKDGFZT213Y26P3cpxUarDPBGg",
  "key41": "3jGjFeYmEvACL4vLSpZ4mPTM429ikXvRSwrsnHVEavzW6bHas5dQuteLwZ7VsibhUAJ1h5ks2F39SqUb6HyyJBc3",
  "key42": "88JKrZZV8ADgA5XPRUwvJHPVdMQSWaNy82x5ZcN1nAEG2pzK2ruL1mmC7M6mwoDAT8DwAYpvHXZYef5iESZEjFz",
  "key43": "567EB2P5mEASFeyxgsiGDTxAAhKXN8NVKrC8VA3atv2yKpymeXxgjnSbxYFX37UU3sCADvr1zThfVQ8QREhwQyTj",
  "key44": "4NnH6LbKnZwsAsgAt5VxVfv7LkjtyVahj6TZZijR3KMYckzj9mWhCbj5bQ8zZX2kbbJUYyjBZBtdvSAVBDad8AJ1",
  "key45": "4bGXmf4pziKDa6t4ieAEka3oGj6JpV2oE3sqPjQRxybU3CeV68emjiMemLkGpoPVrNoYkWnpSKNeF6TBquqSGnAj",
  "key46": "3dWkDSn4mpAztbQ5VSPiHX5iB1F55HoKpsqTRAfLF1UTRxY48Pt5p6SjY8SMxs8N6K6i7zawH2s1HBMnGquMT7wv",
  "key47": "4KG2JQ9s8woqRigKk24rnuibKNzguPMkwuWKiudAmspG7QHQE8YSgjzSAHnZfH578Vbq9ByqDrfgbiponHahoaKx"
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
