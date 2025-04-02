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
    "2jF8NJAtwFLLej8j7jN1sVfWXL64fGDtjmW9Me9z52yeazAaREewisLo1DGoKiRVHAJj7wC3nESggniNHPhxiKtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j47Xej7Wpt9XAVKhJQoeGx9szWURUWQTZEbJgT63FoMmFVhpY9MPxk5ivSsB7Q8Xa1GEW4kgMNtGBN9dLULBHpL",
  "key1": "58cuBThoLFZzQyVSHd1UFQz6yXfiKTmNDaV5fgwsk2VnecX4ho3yUv3sT9b41VLrAvcJb6RnVEbXGk34NecmLUDD",
  "key2": "5HY1msunFaFUfwagdZyXQo4spuSNgmqPu1zY2KqMZprpD1QbK5bmcbSdAdRyPDXeasQFV9jEsiaAevogGASafsnv",
  "key3": "2MacBD38PQdg2eHmubEgxjwpAUMbMeSGHsvGJVWX8xNJd34KSuycTqhCL6qvZV6BG4R9Fvi1jf3up72ZSbXBmwVt",
  "key4": "4jmvygJ4owzKzqNpjfAmm1Tyx3Pi6ZqXj1yPs6v2QvpMpLSa6LwTj57abcjCin57LpGhhUAC6bP5fNUf9TZtoApC",
  "key5": "z3PJP2ixsBzER7vw5uVfwGkpL8UNeqCSZSFpMAfx1MEF6xVmmMCW2i9Ck2bqx7TdXnUnAbr8fyRMAXwCgkRZ3az",
  "key6": "33f8tgrBSuKMeGAyG7rjebPbS1q6wGvfvjQmYJgeQggM8XHkUy6pjQGuf3Z94nrSsyqL8UNpcsGCiBCSEpAeF9V8",
  "key7": "2jFeATYsPV44GFJ3sVfjmwbY5CK5Uyaj9dtehLswn3orQSNC7opkS6Ji9bRRD5nJ6MHYLFk57GdZCx9jgpHAC2Ng",
  "key8": "4458g9k7mCV8VeD55aaHdvPRuKCSPjRoWJxFpCzW78dBPGYSdh87bW5oTwGQBBtpNGdFqmeVuSXVM2ZyncPGfRj4",
  "key9": "eAmnnWGYwQWM3haxRsDc14tnUoAQivGQWc8fSyYs3fbmiynpW2oJJgAQHakT1BZ6TyYmcXjBRWfzErF1cAPfsCY",
  "key10": "5Ydhef5jX8UC1HBqmZ8mP5e9SiSLHwwSg1qNyvmpzEYPtrVFen8LeijBNdQUx9PBK7d6qzpQpgBasX9PthhLkoty",
  "key11": "4LohQADymkPKFwJHxJHgrEVUKsHEyKsEuBXYvB4uH6JqmESwwE9QgaqzmWiKLT1rEeHGEzq3QGsydnSZvM12d4gg",
  "key12": "suaueh6LyFH3GQgEGkVYkeuDZWvrkgTR2dUkYZcsqwUGTXjpvEN2XKUvTUXMBzpr6r6NeVoiD5RStQzDDr1DHr4",
  "key13": "24zRXRYp23ckY3qwre7Lyq2A7JVPqbELafvc2dEmxjyF4PTpzpvD9i7vNRM8fYpFf1kbaoYV34sanCF7j3rAbWJc",
  "key14": "279j1TD5Sr7uoZvKtVj1f4W3aAdz1jdNa4GaJsLhy7JPydezUAmQ9oeFkr7BCjdmbx4iLXo8ZrsAn1in2es74qJ3",
  "key15": "5fbERsBPKqr5q4R4fJVeV6BpfQWS3DXw6CExgBaJYxrGTwJoaKPwkb7NB6vT2nhfM7kba2D2NqEpWzXuHCKrrtZR",
  "key16": "4wq8HM7JTMCg832HYeBYckZfZfaiLrwaHT2gW2jNSW2cuy21GYdqMUqQEmXiwEPL9BBYSvB84qc6YhE9Pm44CsdE",
  "key17": "KRP4cGNZoRaYjoXG5MukuU8MGMeJU3xUPWPgmGjGGGnvbn6LXYma9kwZWkMvQBuqggQ8TjMQ4vF6Zc4Vxv4hPrN",
  "key18": "3sdNXumNb8doCpaxjwVbogvaBgAp4ZQedwfMVdB1dGXW887pU7ZThHHnvxj6h6ikWHdATM6WFtXUVNr23zq8is7R",
  "key19": "JbwxNFT1tUFWMhDiX7sNNquwMNzTNZRkShF7z5ehKrrHQuJyuXJpSXSrhrVeuwiFXMRKXDcREp1xuYxiBzmcA8W",
  "key20": "2vJvHstCYNP5AX5Wc6CuJHvsf93r7MyVgFwULDcpAjVyTERsd86DsdTjKRgC4JSih26dSzMUGWHV1xhd8DAtrWQc",
  "key21": "3qVWmitxfsZkxmdiKECmpLGDhVEy3FLTgpCgKy2rhAE8HiT2gVppXqpH9vE1Pc8rsVj6NA5dRETdSfecTbxmCT43",
  "key22": "64dDLXUg1qreXTWBp1cay6BwCeFnWz5462KdWCDieBbB6qnU6gVyqkmcF5exuxUawG1URNq8FTCmqcVy7pxaBnwb",
  "key23": "JsQqU6SyoknSTpQP8CM4Mk5pkCkTjqQxo5GZhJDe2RPNLrwPhtb3m6RPZUeteNSU8Fs5XGh4NiP5bTmakpnNUVt",
  "key24": "5Ausq2Xh5bkwhHNELZAdroEaqqy5FUvZBPBgRk8V2n1kgSQWw3mLMYxgeXcsh9zsyCRV75SvAqhYVjtC1RmZdCob",
  "key25": "54t8ZSrLzZafJ7Q67qBJKmCZzMLHudZmDBAZqyNeCDnJiQL6se1vmuvXTCDjoFLjK13FoeRjBKJvV6RFV9mWDDXs",
  "key26": "5MvhFbCj7Pf2ktd2sGC6k23eLLcbyfFC3kPd3EUfvhWGKehXKaZxifban7iD1sk3TpysvfwKEzyK8rSsnhC3mfwF",
  "key27": "2zMeMy7uD9UG7z9dJCs6q7JFYYevZL8gygAA7vaLSfVMMdh2Vd42TWqPr9Ji5Q16qDi5XAp83nJkkLJrpxqHVNoW",
  "key28": "McCurMnbqmTTwAjs1FZugzVKfni1ibA1KnXEq1kmjMGEX46vBLQJWJz1Tpmd8yJmEK4U3h8cWCWkKMjAQCm1pkN",
  "key29": "39zDdamMi4Dr9MRD2wXG6zqbakFGKbphfysbXQbYq1ceaJqseujEz9vLXp25XHGQqBjCR83GzUsy2FcH8W3DtVvC",
  "key30": "5UT6fbDxJyy5WGrHu2zdCf7WjTvBRQBQwRoxWsGzg4yJeR7pbvYrMhN38wDi3u1EcdDkmvxRW95DGoQquV4Zwobr",
  "key31": "2UkYH28TcA98AC59T7AVXWYUgLbKohcB2SR3iH39Wb3X7G1Km7cDT7hjvkmbsxawtRWrZwWUiZj2NSAXJ3qGjrSi",
  "key32": "6t2iJ1FuxyjwyQMX1oJuZsYGk1zf1yRHajEVLsbTrcRpbX6WrQjUWgm1y2xbe2iDcWtGK6qB4cNmEZXmLazcSsq",
  "key33": "39gJZMmtRMXLJ4jwaHZC7y52ijyS2rHeKMVuRnuGqNXoxVjTPrNFHfB5f2qEFrud6s1w1E342XoL6m69FmGvYYTP",
  "key34": "2Fq7KkBQXNGzGbdYMFGj13bLnaMqxucysBcwvEc43frcadnv7cWbHHmzrkWXfeWJTGZBsakGdS7sgik2VxkrQkV4",
  "key35": "3TECpe8facH2cZxqYW6ToeYrLx4TJi8V6D4bgEK1ZUUMNNidoqeWPxdUtUqKqEWtofpyv6qtdneCXWW7N7NfniUN",
  "key36": "VHQKNxLib3c5LytFuPBAsB4J3ZREiAnreLfYrF5iwjLwCcB6JAzWbU5f5ZbnuTsUTmVL9gq1saSwUL9aw6J1S5V",
  "key37": "XxCkHQ8pdFPQsqru9qXKAHshv6h8mAQyFJYFYy9FxmeWDTATsSPkRD1GAeymXFmfZfJhAMPf2qAWCe1kNbvmG6W",
  "key38": "5FKXrroyBqrQUpmS7nfmxWPMvNxy7GKQboDVzS2skH9qdFsqoGcNwvLSPif5NViVfiRfb6NYDmw5zvrhCHWr9CNC",
  "key39": "47c3Jej7LrEmcSpF9GrokZniSbNgN1NLq6hEnkhcAacv9oXb8W1T9CwNbEkbS2KazS57cyGsUB9JucxRU4aNBcNd",
  "key40": "3p9FryHoM8QrPSBtNcEXcpNyx2rSxMptnkU3kWX1CN2dZrB8NPdT3Q3LnAdVeL8GHpYxMoUjrX8kHvnzTwn6dte2",
  "key41": "wY6Hvftc3pmjmUQAwL21WK4vWGFecCukSnLAPM761AQbPRs5NGhGM3H15oVDWe9AYgvrepTTsccc7AvuGqJDkKS",
  "key42": "2kXQPt5VrRaJJJG9R5jY4Nu4oZq74nD9fLbvZiVJCVPfDWAKA7tBDmv1GRdwnXT9jts1rno2xoiRAbhbDsJuZ7AV"
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
