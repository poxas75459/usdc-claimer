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
    "CayBwjLcsJGL319msDrAEKZCvVQmnUryo9s9LssjL6L8HSkQpb2fyeKFgbM26p2cjw4sUfLNhHSY88Pqr6VBuLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYhFXco84pdA1w6cEmKihrYuXCffPMxC3T92nsr9KYQxwii14M2RqvEk6uuUrFQ4zyhtDnn13sJHfMKrrz1t18",
  "key1": "4cjEUB9zQx5j7uW8idzocqBfjgVGskXauZ6wa37rFkMy9v5KCxV4UF5swFF5aSLd2JZaJgdjnyvKUK1vywiJBpuf",
  "key2": "2azoKjfDj4edhT9jvKDymSno6kSCdPsmLBqZRxLtWP8PNS6ge4wFgzWP9L6GEeeDXzWLWE9WmaK4rGZQpZZabAev",
  "key3": "2MgW2CBQe7r8gwW6TKw7shXyUaKQWkPYXhQ6FUqVX2Wu8QQco2dEee2simtVdSTK81M122xHoDcGuPU5DUTZAFS7",
  "key4": "4X6JdHjhDP8c3bcjCCVBiScQJAcWRQf3MMLrfT3nWDHvCM6YUKnNRnmCJvG8NrMEFxYqFXBs3bMr75f9j7E88MC9",
  "key5": "5E8rdC3D7SNBr8ARccwMQtzkfMmvLPKD1JBjGBSBwpZfgAEPP3VJLGLNDf3fKfeyzRNjMLBzi71sPcqiurUw96bh",
  "key6": "5tG1PFmKX9ysN8g3v7RXh3cxn1Tz4x3VnaxFLeHkHnGcRRRMPkBkhw9yPNdDym9Pmu4UoFmsMEeB1zBbKa8YV3j",
  "key7": "4E8bbUPVVijtQB32FVJGvadSJ7UQmzQDqpVr1SeekdypLDuqM9cUMSLLoSzSakoPTPJPDnd7Xz8jhVSTqNHsjHvk",
  "key8": "gfcVgTKdY81Kc9bGpfutVi16kkKncaQVgS1gdzcBDyLonSZKjBsrYf1vaR1riEZkB8YBajJuWgbiH64x1AtCoFS",
  "key9": "2Uq8ePY3KNJXhuNwA82DTUk4924KnmT2ukoHEABd1TzHMxuHKJwpcuiDfAG75ZDzXcbgjwQJhLu4EatrXcejV884",
  "key10": "3ZLDwcRWLGvo4LvoUrXoCx5ACDuVMHPzxr5ypPX3CCpCDNGPa8NT23iTzcP2Hcp9ArLftEJc15eofR3VsH7GLTRC",
  "key11": "4GzMj4QMHmAdhw8JK7xDiRmzJdVeXVVmfTNtsK6ax1Y9m2iBhjvVE8NZqArGqcWgbsWy4vsufgZDci2QsfomRZpj",
  "key12": "3oR9KtVQ9GzTpbXyre3vVjuZBDoRkLBqmnAFRSu734X9AcrSSiUtVbmUs6ZS8nTVWDL59esdcVWomTkBrsFKEMQ5",
  "key13": "5PzyUoMdiDgHRuHW29xtPaBuzuDwc9pSyorA51PC6uThsyAQ5N9x9Fgns2rRmeGvhxbcHQ1deRdF7eaMGhE7gDwx",
  "key14": "3r9rSKsq5K4bZ768Yg6n9pJtBzVxRGxgpsWYKYrLFdezUmuzFZA4rAC6zMS7GxC4Psfr2CMj86pjvC37cLHR2va",
  "key15": "XUrCLZ4exYgHRXddhVEiqmteW3hdCZTH4b2WjdYMFGFcXeLUm1kS5JJmuKQQiCR11uvF9gE7SSRySDzsnnST4wq",
  "key16": "5Vcp7wtGz9LVj853E6FzRRBaxyu7V6c9Vk4kwax7EJH28RTyjq6TGoc2tYeiHqVcET2kqiGVzmSP1KuosSyHWj5W",
  "key17": "4q7qwFdB1yH4KVzNtnvn6ds49xLrwo6GXSVJb4LiF93yxM6eV3eCGkT7EXogZmCitqGn866j9ipamCzvy6LVXvZA",
  "key18": "2a3sAD5EDJkEwDXR5vqNYd2kWjPuKurqeEu8QrSyFNzUHfvLno1BB2jy3SAr1mXrjpwk3FMug4ofqQKSyeLwatPn",
  "key19": "3a3Y6HmJ43cYLbR8yJvk9dYXuPZPa1fGkZdBhGpUgXTA1XWMtmq1ZtModwy8Z1MPRq4VEL35sZznQ8qGqbQ3wXNL",
  "key20": "W8KhV9D6Kv3mf8DELsmMabvRGLu8odRPterdSA4Tokhrv4V5HiNtXG7NQ61A6qYC4YmPkMfiU2ZPmxxFxvkLtCN",
  "key21": "4wMNbYdeUpFwpCDhmj6vpjyEmR8eYA6VqecudEnDGXvAkyx9u7LGjvMjfqk6fEJJdJfUe4vC1qzAspJfx8JK68WY",
  "key22": "2zLyF3c4egu2X1j8h5E5BpKRVAajF49oa4B9k1EgJhJ3u2PRDh1MWxS9SqF6tRPxSso8WDXfHbgUpbtWWjsM82r",
  "key23": "2Vj5bNaPrKfEZws4qGb9nWMuiz34LQVLJ7RsBf5EYoModdSSMS6MXaZs6LAXHLGn29FqWqu1f5De3YgFuGsZg5Vb",
  "key24": "4Vaaa66y9JwLmv83vLhbJ5FsiZmFqTiG3Yd8jnsEAB6vwKcXjWmiHk8LVEYM54w1nVeiPKPZM7BRs7Y654kaj3gj",
  "key25": "5QgmXyh6RohLwvo7g4CsKLwQBRW8pfxS8AskRGvMYuk5qokTA8u5bYmGjGzihZXNdp8S2QAhXZQwmUCBhmtpbzfh",
  "key26": "4Muq77QAHbke4pUc6r6JS98hG8Arm9HdVoBns2ZrKP3KTDNZ8xsmDNa8c8eZYPis2Sdp273VpV4b5J4aQus6jxWz",
  "key27": "4UCtCM1mHi7LgSk95oU84tkC37n8hUT2DMGeHn718nZ9wstrmYCf8G3tTBnJPadyi8E11CGsbyU493KAM5279CHZ",
  "key28": "5cpp3rGZm7QQn3xcaHoQr2gpCT9ctmfXLQQJskTPrZxM5au5UB9GDdQd3p7hrfUu791MRocVxQhEpmt9QVkN2Yay",
  "key29": "43x2FgVsLRp1hG6D9d5JDqrjwziSCt38s1AvYiWbw6f9AYJSUw2EPAzwBqN4SeMEcZUcaZLN5Qxp9qxdnGeQUW78",
  "key30": "2NA821WH1gDAv9VqgxQgXkgzu5cxA2d1cVA7kFTxpKtNCxgTPveFK5LXDbrhzRQkZLaiSsYq4UCNT4y2FaMqN7p7",
  "key31": "Dwv227NUgmuYZyJemfjdg1kcPQzwLyBuZ3NKiZnG9qH7aaQMDP1X6ZgS3Tdw2VT2HZtqLYfT3AV1X1TR88Pudz2",
  "key32": "5baAofasVdnmTk4NRRNapyX6Fkxx1rFkN9tDBDG22hxXmod1JrZi4qmfLnkaY6hZPLk2HjGZD8ua3ebakNRiUp3K",
  "key33": "4StLDmqmjP3UBGxAYPWPrqntCjXcq6W84y2Wi72grvDHs9VjHxmyLG217Nikmz7VGJz2wp6f8TJXWEyfV81MMWNk",
  "key34": "5ciWEo25hVg7zP5jiJCzwtKHP1GTeMFJuhNkcY6vZaos2TFdhBohSS2oMMLDYg56JB4rFYMz7xcJSSDgjsMnXE96",
  "key35": "3xWvXR1886NMCvAfqTBZVPtV2rd6BSLBM3JbcAzE2Zd8oEVK5sLaWLW8bCawhvTZpL8y4LmthecvPXFuigi4vBFA",
  "key36": "2vurMcWYDhx1m4LC5rVyRk7uui3KaLjcUX1jNqVJWTGBhyjpQMM7ckRkegRXp5ST3givpEwdr3MCbBAY1GaDKRpZ",
  "key37": "5cSHHuV2tiYi1vi3L8LGgwsdzUatfFhZzVqcof13D2gScCFRZ74dYybBHAgHovE2Ti4NV54B2xjXTSvgssDATJHs",
  "key38": "5YhuJFUf4o4ZwEDpsH3jHvCgta7ZXfQsE7u2H1hGDuvCgA8wqoJuiqXesXL25QbjLRYsLNyYQg3yY1iyxtxAZWU3",
  "key39": "3MCokDqg5wKB4EnjFkdNfgCqWvzU4f93hgq1j3imA7irD2NvD7zT59FzF4vwiErbMhePB6iyANgJxW9jb86eMMJs",
  "key40": "2cQiRHzLem5c6pMuirpKUQ59QTqrzoZxc697qLqdXJc9QH2Lt2QrgMCcHLFNeqEgxjxH9EcbfRt48qRCpbQt9Na3"
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
