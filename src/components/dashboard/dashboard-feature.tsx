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
    "43qGK4oJekLGYcZ13Y4hGey5mmCMp5VfU3gRoCUhQ89fEDFfF8Xj6C4ktpwLcPz77sL4eK6f5mHLcKWMSrTTnKwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHw2canMuCULu5saohqxfzvUQ99tbT5w3HAN4e8XXE8N6dAk23ycQr32tYyuFpVXKwhwjjtNHXGm93Zr8SGC5gV",
  "key1": "4DMxhD6dVfv6k9m7Sfwh2Lo1csgro7HLjFaJPwADLm44c43HJLHuh9DcdYaVXvfeM2HFZhsQZRtFaq8GDStx3oZM",
  "key2": "65wpgDAkqszGb81jTygV6jwErkK5cjrBsPrgSUyoXkfKZNn6wLhdvqrpd6Bddd67c3rKDKfeEY2DtV8jzpASYKUU",
  "key3": "2Vi2pH2XhfkRTb8sd9bw8RmUZK9xZStzkBTiBmkJ91C9ab4pg77TGmukE12gonmF8Fx6Q6Ym1QfSLJGvGfyt93KF",
  "key4": "5R2h12ZUJp65LzVfQog5Jso6Hf9qUCA6swCuokG25Qa65n3ZSokK1rzn3hhYuWAnhtDHtACHXRDJ9fSxgrXdtw6C",
  "key5": "5LPpTWhJNW1yBWTobkk54eBqDeQ1vB6VDijQPHDnDckL35HyE2vCksT6SM6PaTBinA7foTyFZHQjT78jvtLi2J6Y",
  "key6": "5N54s2uWUSPe1wABoHmh8mycUbF3cTvCAE3YDzyQa1sUHpWNkHjh7xL3Gy2CMQUtx47ghxXFXZT9mELqa3VgknFL",
  "key7": "2a88odHyFnAT9N4WJsJb4bnEtFM1Xrzj8596iENTNs6WPjz8u4JFhKydTrcHS1eEDdSyT6VmXjCrDkht1WSHtGbV",
  "key8": "LhKrUnQFRiq9PDUNvZAir2UMohNCbWtoUfkgM9TxMsLbaB6UgMtStNbn27XQTpUVka5HUvn4FjnxYBP1Hi9ccXj",
  "key9": "5FEdrYrFSCjDC7FmxjYBReYaDX6jMtQEB2sjXXqhVV1NQXrLJCDYymbJv9j62YiNfYKWdBeprfYR6gyKEPeRnozV",
  "key10": "2AR86JUtkgQ4tekDuBRVd2WGEvaubWmUfLgymF2aeqa6xSnUKeF3rEGMhvHt2guiRDon8dwBD2rqSCRymPRekRtZ",
  "key11": "2suk3PUo9gAD9qkA2wPCd2cF9gHgmCBvCVKfvcHiX2KQCMeNX1RXJpZ9Qp1EgP9fzJ2Z2FaBn7Ho8WGwo3RhjaU2",
  "key12": "2ek2UkWURVux1SeRji8iNyweJyj5Jg1xMTSYJPDmcdFAvoeNjV1NtojfjtCFGLDJg4eGLyRsFgBy5j9h2eEBymyJ",
  "key13": "4PNmziWqxrUwy7bahWom9MJQS8iuxBxJZuEVs7XNrfvaPXFY2nSNTbwG7pswv7yfRnPyRZXnm3wUBBuQjFsCmc5H",
  "key14": "4c5Lshdsa5zgC6MYYAyGaMk4Uuq1VCovzTuQKQvUpMXqrk8FJkSHJuLWdcNqNNfWMry7JxUskCZLRaQ4XZpHiHje",
  "key15": "3P9UGWFhv76KMfdiSt92YX7GS6sjHWoUtJnWTZQFrkUrwLbiP8TPYmJYJzhwfWBuDWJWgg4fkRjjgkYAFKpNEH4T",
  "key16": "3LTRZzwv9YLHxRQfFUkqbW9SL3Y4o6f4J38WbMh4vs2CBpm2SSHbodLKtwMFhZkAAAHmrByuwjJMc1CFgHmwY2Lk",
  "key17": "2RYTtugyZyyDDcBLzVFu6EqButVzmDg1bBBkEP9fwiKNtAi7hSMdVJiAHAQobxK6YkV67pXLubJ87dy6Lu3YYgoT",
  "key18": "3a9amS2GtFWRMNxFu8e22XUKYEiu3xEZJ7oFjwWWi6M4XBdwmVow8aW3tUiCxVr4YDkzo15dPmQzChJBtd6QYfCi",
  "key19": "2xRNhsYzHWsaeu3TS8L3HQBhWVazHTomisopEiQDWHKamZWb42uGVn7XBCKyey7dgbe2DAsMCwjm1C9HDfDYzbMp",
  "key20": "2AaHm74dqpTKAYExP4yuSdb87k5Pz7M8BjfrK3CetxZY72XAZJRBxhVt1G9oUGwacAGw4GEfvJNtKrgDBfFoMfTQ",
  "key21": "61xLdsW5zhLeFpQoSUTKXHh2in45Zu2WP4uVNEdXLYuQNUJfh3cv8cqZBSN8DZk2biW8KXdw3eSviGCgfUx7NX4K",
  "key22": "5PtdJb1UPD2TxANerBEqgTe7BWBpYaMYmYQyYok26i2fX8FCo43WDZKVuFg7dNbLwgmnd9WMZETjRUV6V4KGTLtD",
  "key23": "2Vnkt6MUbfhCpF2Su894553L6c2hSCgsThmKcdDpQZhSuQNLJ6FFUwRGimYVSR55GwN5CYEPRiem3eJN2mMpfUwu",
  "key24": "5TGZgpqA67nx3bBBGpPJCznF1mqU45gKaxsfTagXnQr2p9zEXnHxanczMHfhuEJk7iC8jkbs21ixwmoiTrLLtKU4",
  "key25": "22KPsxeMdWdySKPpcBx4U5BBzGGZVCpp8XT1PnfK7LESpkqkh2F2P3uv6s4LjKdV5Gz3SRSFHkGkkZzcdut79T8z",
  "key26": "6VptVydfYmfhuJv17ipKRV1bmLVZJUDYmAXRQmqvTbQ6bScUd34JnoPgzWLbVtoTzreSKE75wG1u2DSAt6kEJhE",
  "key27": "ASssPj6xMHKvqAF4bo7LRdSZjQ267ZByFaNvrMvYN5TwqPQmUJAyC66vKJc1RJpiGmUPB1vqkXTDHxswz15pgve",
  "key28": "3np4eoTErwMF44jZqLQwyjjkgGKk8LSSnLwvFwQuNKiXLVVrkcc3moUPDVMoxG1582Lx7QSyNkJLSttxMjdq4ePk",
  "key29": "3NForndc5wmAVHv5DK2HudkuaKvR87KXej9JitWcmLzUyXQAUVvdvH9V6qMQhyt54SCTChXV6N8iFBXH59qb3LUN",
  "key30": "4YuWiDtHC5jLtbjt9NEmr6QRu2eRnkxufH4ptzawcEmpwWDPUZNe8y3nNJzHzDuSTCx6gsHg4eHpGuPGdzX4a6hN",
  "key31": "56hiBotDHqJNDdBnSiTshFH6dHEwGwgdXpxCS2Ry5yWVHub7LPuQCCABEy8aNyRAJmh4QAptsCBRuqBFBR8TqW2b",
  "key32": "2REW2FiZiWrT1aGpXyEJdyq1rADU5ZrmQChtKTrKHWjFR5toNeY9cNkumENMm7vTwwQw8hX8Z5Qi3E9XPvBPEVzD",
  "key33": "3b5z1WcJg8nqJSUZU4qt5TqHc3icSrXMvDAvG7QdusfpSDGZ2dTgTCyUsmgwGPdosVx5hUJJtKHxQzTUtmNWYMwH",
  "key34": "ALzEcQWhEaVYWk31PUPE6v2hMVu6NG3Kbzwe4NwhFPDmdJ4ZgSzDk5srEwupbVGPEokjmk5NBaD2HJmzwLno9jB",
  "key35": "3xAdXvexMLpqdhykuVtUVrBY9JPXaoz8irHm3xNCMvALiq3JV7Mg6AikF8yh7n4sj5sQt7n5KGN7h5FxsLYSpKLq",
  "key36": "5K8ndv8kYXiTUxQtTzjn8YkBQgz6tg6efJgcXzKP41bRHKSg1khnL32dXhjFVvVyBA4Q1e7uD3ietbthRMUXaVoD",
  "key37": "63M5JwCb4WcT8P6fRKZyaXjaMmQgfsufMHnvhk63pXMqL4zaxSmLrctTtXpMqXxXdx7SrTc1m8XRVyirPfN9Wqay",
  "key38": "4D86gnZ4HSGk3KKbeQXq28qCBtghDFxeWcK8jodHoRU4Zr938d44QVveoT7mekn8gixX4HZYYqgfWvArgDFFwiRX",
  "key39": "yBgDeaQ6EktixeQcDuc9haykrJ7ACnjKgARDRPdpEyWnVLYCB5ET4hC6YAP8ngs3FxQx6aQTmHqCiAQ3ywxPgyF",
  "key40": "4puHnSiwNFhBQu6okQBeBgq77Sy8YrHsrTSsiSTZo9M22GtEjJVimaxnwPBYd9tBGmSfF7RmXi4H7uW7VUqaieHo"
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
