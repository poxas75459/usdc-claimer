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
    "2KsUrw72eWWyrHodCd292bQRWhgLsjWribCRKtJXErzWUFPXernrC5U2RC4rLD8fVUD3CnyWp77vvaxfXG4sMfP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V57MHJzbgcJtDDMzDXnSdQB97oQh9zDd5qXYzresAsyctoHur4nwCfgwDxKAw21wEzWhWWRjUsPnhLpCs56A7E",
  "key1": "2h7Pn7v6BmVtk6YtPusHxsvYu9CecMr2AkDNwnmLXsnXQGu62iQqe9XfDbj2BXssCQ6Axqt9A48TCQi4HzMY9Bkn",
  "key2": "2L5oLd4criMpGGh6eRcn1AkmsBGSEbuZyuQReabgfF13rHYtKq4NwJnimi8iuKzdRsttiNspYRbLTn5K9XBQ6vGw",
  "key3": "43q6C4KnJ8RsJj8GxTNPLcS6gqFGu6uZS94VGxiVu6d8WcHq5E2uRF7AA18rU4R9FrojtXoqFAzbVuJgGHZSQWqu",
  "key4": "4d14MvMrJjhe3GePAxd3TaCmxnWR3v8e2jgruDbScVQoxw8yFdXXejSZnE7mZGDXbVNNNUMJvSZdH34vPNp2Q5yy",
  "key5": "2nLuciFnuTgDy6KLcK2n8BL8yq9Vd6i9B8Vm1F3wZKkBNEWxbXaoQ1yTRF3DQEB7n35NiZyXAQzEufKMQUpH71jX",
  "key6": "3Nc1wN7PYtNhSVp7bbwbdKMijvuQqXJJs6NC9FN24dgWEFNTGbojcxdBWSPvJSYsdg4KunpHR6NdURGZTbhxdAqR",
  "key7": "31HQ9qKDcbVSNfhjuC4nt97pEgRYj353rRq2xQEiVkhZJ7FM4nyYe9VSv8FMxMfVbg8rzg6vgNuACttEqQTVe87U",
  "key8": "2ehRw3eY4nkbsXS79JH8pspyibmZY5pqFxj2MtexMk3rcWLQNueySenMAYGtC6kRpTLKHqDWqkY3fCqmRrPi56u2",
  "key9": "2g6UVx2iF8wRKFfVYb8TwCQExseULZWxduNyCdJLKJRipVrf94wKPTRnHn3nrW72FETinQjV1wDkVe2ebTmzpKRZ",
  "key10": "4SgEb1os46JzWRAYKkVGXGnu56CFY6ELBo85wQ3kjBpadotTfpKZQ76FcwbBm4HHxh7jomZJjAf1xw8oHGjVFWLL",
  "key11": "f9ba3yQ4wXjbQBzyZZfMpjMpsSjTiPVaWY6xpirsE3gzNPpjbc3u1yWD1Gs1GP2Cu1dXQESFKHfiw5ZT2WuxZRt",
  "key12": "2BW3vXfMoYyWttnbWjhXi8Tp9My3R1XNDLDS3sbegwwVZVK9F2hvYUMMcsFTwcRdystXFXgT9H5qCV5ViWXYABgE",
  "key13": "5aSChzts83LWTtaX2TJf6Me8qrYeRqXyC4eJJtr23Pph5HNcHtD8dYAPLCCyfNgQ8uETKNSF8dk2i62oBxS1FyLD",
  "key14": "3wuEVPy6W1xNAf5gg4ptLC8Xz2Yz53APwzG1Mx1F3GLLhcKK2BVYjutEnzZKver8UYjemz1YSdQPTS8MHE8Ym85n",
  "key15": "4P7bqF2jkSgmeB9rWtabX5WgiiyMxPo93UYLhASNBBqvgF89ouzJngAgVu14CiYr4p228yiMfGeMPQpnKwHbYgd5",
  "key16": "4d5PGgHEy5FZqA9EDPwCb9f9PjhRLXqHf6Z21tgMKMQBtG5qnJCCaZDP7GftR9sujRWdz953xMU9QkaHsPwxqojv",
  "key17": "mFHhhGPgVqwwLDC9SNqUU75bgN9rtw77uW45vpBTYJJqBuGDDziV7TzuFVv8wR6xqdFZAhUPqsPXLtaBGr5X2yX",
  "key18": "ijAWhTdHN5KMYh3QpDiEfbTnAfiM4WwtLDrAjrdN3UDeR86VW8RNJGnyEvauK3aHENVovvRFzoqYDyCPhHFLVBz",
  "key19": "4B2GTsJ7U4wnvPRXhhT2iP2NX32MBx9QTWtDq4Heo9NsB2si4YAt3cqBmkEyf3yP7GaHr8o8PzvXwVctbA1pcLsU",
  "key20": "37wPL9E1eXnwVKM8MqcjYQzCz6AV76YbeYwdrUBstjaUCGzf3tUj7mYaLABkka1cRSsDpTxbNuUVAa4n8L6J28Ty",
  "key21": "3HMo5N6dhyP3tWQGCGtyu4BHnkFAjYsCtvm6pxj4mzUyHnNUEWHArxtQHCmvSuiTY4rrS8GfQxv7zZK9Q4Z8MUp2",
  "key22": "54dXW8QCCaR711R26GAomhTQqWB65UYjgRohPmzbULEVWMKt5MmQRzDY5vRF5WR9uZ5z9rweHm8FKHeCaw4tkTnP",
  "key23": "3SNrWuag6qvpGwAsCYWbENugtdfBUqxuyiHoLcmzoTHih6xmtZd2nFdP1HRjD8LRrTBUCWmVRCF2XTBHPuskk23a",
  "key24": "22GHjgMETXNj9tdQjzTrbpwLYhHP1jByHQjGq5qxWAxDmoZWK9sbzmg75xj2LX4KyF2H3Fj8MsCkJUyo4JxZXNET",
  "key25": "2SSuoeabfuNrXbT49C5xRKeBHggndc15bGgy92M1qs5sK95asBzJiM6RTqJJAXUwkjDvpC8P5jKWLcutYuwsdrvJ",
  "key26": "5sqrrzAiwfYaS6iiXtrKWWMBZkERw3RucVwsTokSDDRz2eWUz1eFmYzw5CGpC82NR9qND7DeXWviKputizsbhxga",
  "key27": "4hVVYLqnxhosGXDvXuN4TD8qMJ2tgqmnd9vSwi7CuKEscfnVzsaNnmK8Wtm2wsqtEd3L5DbMUHJ7RBiF33SUkENh",
  "key28": "62k3GUqugXGasnS1fr4DvTm972Ltv69hBVqtBoiW1QrKP5zgvxaGh87gjwqCEiP8sPFaYmBzCvo165ZEdY6gsKwL",
  "key29": "5Jj9CnKaH9WtizuoBzSyDkJAPmWNyrTMqRzNwXs5Hk7dfZxNeBT7RJ4zadZ3nbk48tfMzY4ZLyJWdXUttox43AAE",
  "key30": "8B43Sz9Z3nWWuV11SuWh2EQpmrdjTLCqrBEo1FciqST5LciZtpcC8ceQoVL8bgtrcRrYCEumdU3H4wyFQ6gBkRW",
  "key31": "5tvkui6Czt6NoxSZa1At63sD9fLkWF5fyrPeTfWex1RDkthmt5gib996AdZCc9bSAD1u1Jpk6bDRXhShSHLaoX8H",
  "key32": "4TXTphsJZnfoDomWiPo7uCNYiPD9G2fvXgS4N9Z36BiUWADA4xkroUgiphXxSecqTGc89Sp6e2SsvekFSyZwhPJh",
  "key33": "3t3EzwQMUwwfLSjL2Vz62GJGkPffXpAtUn6TtZH3sSZHg5qbEy9FHrZUj8TUZFJKv7HTvBxUT5LfYgpW19tQMh7b",
  "key34": "V4Vdch1vjnhDCciU2r88j2jpkZPkyUc1NCBWYoCabqHiMXPmsmySrNQPfsEXxcjV56p8WBknPFpsgxg5cNXkmfm",
  "key35": "62u7adeSgaJQyGfRmkZ6QScyN6trkjDnPNkCT3GHqziSietJRcpsCvLz5EbAqofx6mCwEdEBkSRvSUHJb7GohE49"
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
