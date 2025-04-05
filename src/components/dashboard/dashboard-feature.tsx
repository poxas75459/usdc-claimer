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
    "2t3gWVyhNuZxtfPa9W3eAeg9gNdaoSBTeEGFcdxD2idcPmK1WcoTCHxEsSUocxwNKii3fpNX4YQyYVo7RVRV43BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fr7vBFRViewxrqTNwoQP3v7eQqHyjGACkDzgiUSTd4Rgz5PNahjck6STND5ZvgG94e3VxngvjCtYjyi4KokB2oY",
  "key1": "276wQwD2pYWp7ASGBVnRUNWyvaT3SYbtyU5XJ1a6unFmSrfQfNQhY4cH6GgWtFN27W8bY6S3bMY772GA9DZbgixg",
  "key2": "4Em9VYDc3kmSYXdsnN9TWYg9kbRrM3Wk4Jd6zyXujmJdB547fMYDAKyfJ6FRAza1D69Z3pTajiabgPF7CTFPVbJ4",
  "key3": "vbPzkxfwjffUTBXX2AhE5sGJXE166sshebuX5UV2gszSAqYX7KZxjxmZfENkzewUrGHbusS56FRMRcupCdqjth7",
  "key4": "3x63vY2x6syuaKPDJCmK9NaypdY2Z8sarTg8dpfixn3KtRkM3KsJgczM6Y1RJHardbsNGX6MjiexuWk1RJGFiv6D",
  "key5": "49tBSodJSpCBnD1j9pDqZ85f2XBZSKHKxPxhMXKaM1TSTQMC3MfvjACceA2mXdPbM9ZCwrd4uukoTMhvTEKviXRC",
  "key6": "5bTrAEzzsTPHr2M5YHr485MUtN3u9ZRqhSfCxsjfMpXpD5287QHtG4qs61N65an71cs3Su4dDpCMuyhmf7ntLVSa",
  "key7": "5pWXLMcRQWvjycwAL4hxYHCidRAQ7wZvBsTpg1ReY6CY9LqSDyYF39yPr7Yo9iCR2sVbY4jgWwrmz5wx1hbaqHHj",
  "key8": "5EiUiHeEJQnmB3bMfgwTdc29KqvE9CXWkDWNW6g6VJ6FRhqGVg49Xdn7K8CaXzWbFr4QL7sTojsGVngzexURkrPm",
  "key9": "2JqgQWreZw5rAX4kKLNKSyLP8T799mvK5ioYhvLAD66gDydSPATAB1Z1GkShDxJzaFwaFQURE4b2cKdhiSnWQY9n",
  "key10": "2d5LPE6q1uWS3TbmHiVFEBNNj6YA1Jy3bAFyFDq53L3kLqjcwyAncZipvKivkzVhHrFB8jAuzekfSaATatjaw4Pj",
  "key11": "YJpiZ7hbc4qgkcT5kN51ttwg26NS4XK2mfN2pGW2wgos6FixwJvpZgSY9RwNkxifZV2m3vVKbLHa7zHo9QNSyRr",
  "key12": "62PYkdtiwNVT5PNiayEtRCwfKVqEHo1rX6GFqFJg4cgS9Nsb9biPcasbx7t4cSXitz2sH2AR6wBhayFahYsrwmHb",
  "key13": "5LVQAx64bHHdAt4C8ce2ymvJ6W2Gficcvc9CGauDeN1xLXv1132aX7RXVUnEkzQTBiYeve6azR13ZHByFNiFshdm",
  "key14": "28irAzW4kEkx6WeXaPaa1LXwHbPmQ1xsWfJdZjmhKfqQUodVw5rXNEhVwJxGwPNoCN1fbNLV4kaSrbPS4vFBngNs",
  "key15": "4ZeqXiMpRXhi88a983qQHYyYxJVXdWfJxzTSoaZcJJMKPbcHvYnAk4T5Vz6qZ3TpJZPB2AwkoLDGo8txkZoceFft",
  "key16": "ySYh7Qnr3D2wTQ67mEDbLxHvGZ6LFgRqDiGUeXjxo9VwKJ4BwaJxRunDAZWCTnig1tpZMKkNsi5qVrMKk56HcgJ",
  "key17": "2fyWXbZmaSVNgZSQcQejCyCaobs3ytLTpk4EWLinz2HzJMY8MNeZLfPqqJLfnNAeiAyDEofdE4azpNwHNkJsw8Jz",
  "key18": "5uDug6MTmJsv7AW5id82TM7ya8vdSnNjwF86MLwWVCVM7wGkNa5kyPKDtK7uNdNqFYPawNd9TpnJyCLB8o9K4UMw",
  "key19": "3eeVfByFdRck9X6Znrbv2k7DHZ9TvWeYdzuArdb9QDbheryyxb9uRLviZAQFn9g6s6gQDiwDFkvpfZT3Kh5nzW1U",
  "key20": "51yKZfYenLe2eW9FDT8qmyqQMv7kK6PPZmfxkabh8nTZ1V1Xqzjc6J31aazC9akpK2hJqezmWvy9sszwWW86oTV1",
  "key21": "66PkX55bWfWJkkAEZn8p7pFSBMvpHPk7TauX7AkJV1jR6Jqx1d8Zte83NzBXjJ2ran9tq4BDNQYc6jj1iS6UkTzy",
  "key22": "57RYDF4dQXGmwh4dCdR9VnvFqchw9N82tuAX3iAVodt3E56yiDUfyyDTEZt69RfJkZJ4U1nvePYX4Lz4VvxXM6LQ",
  "key23": "2WZg3r4v6E1tCM8C49nwTY8bD7WKxn7FZZJyt7ZN8eBZSDcWqRvVP148Z3MCbXYemaWkj8AcDe3HXWSJ8GRkFtNr",
  "key24": "4Cy9QVfjBRVyM99bJWkjBFrUPKcfYMGvnmoy1qtNcMYqgiKXr4GAWcV1T9MXCZJ899H95W931H2Cs6QufcW9bTh2",
  "key25": "4hRzNdrwA1SoiuLL21Vug1Vpkjzk2w5jW7mouMxjP9jMRraJcAu3Q8JWbZLXdMdbdT15McPkJgqDxeZeBaBCWWct",
  "key26": "48j7aDJ9HLbH6KnPHGCe8gcUQaesWfZBGc83mzfRZNPeMTVYRwmc5xe1d26jZPAubrfsMx622AqXvfQjusBcvuSa",
  "key27": "XXphr7eyaysd2sRBRGDPBzE2L7LzAcoZZQxX5NQ4hutKCAqCFpqMPzgD97H9oHMGWTynwu4TXVG8u7mDWLvrEnS",
  "key28": "5EehhqELAzzF2n3vVy2kW1Qg6DVA6DEdehHDEwQRfkap6rGB3PZWDBVu7SP7UUtLwNHDomCBuo6AcMEAv6x2qCdS",
  "key29": "33aM37Ev7Y29JRqu42jWWPHpWDqE6z1mwj484XaimounotU87ZP5Bm7yqt5Pk6nZfrLVkv61RBFH7RnBfUPbJwmB",
  "key30": "3yZyAJYag5UWMY6BFcqWvVFPqkYWct7rAat8fx9VsVRt4MY9AwksqP4tGpTmT3cRGrDxXCC7Cdrs6q8Rf9jrpdt2",
  "key31": "3bEpGjkUE97jLA8FDEGjqV23YKnfi1KCVdjtbYkPcn792T3X2KqduMQm6ohxhyiZ3pX7cXSJx8e5hrSpCjDPx7TU",
  "key32": "5Zo7D8bvoUR9mWHgvcQNp73hJTkJDuGdywwNfhbAomcAoJkYwQH9YABs3KRff5NCeAsC6whbbtj6yTFFCHorrB3t",
  "key33": "2BGLbbFspKX66MdDbTSevH9XZvqhocaMSZ8sFkJ9eUrNcLrSEUr1q2wisGn4GXTbHqjUgwtWw4mGEP8JfjBfU8Dv",
  "key34": "5UMo5HyMANsr5t3AmcUnvSYVfAKZBYg5BGAD7DdT59pv5wJCoRuFiYG6JD7mXr8bJxH72XENgxFxCVxHi98g8UEx",
  "key35": "2U77QvMSUwUTZREWujyXxcE6NQHrEbrHaXZmMuekhD6w9dCibq9saq9Mny4fPa1mTLqEouvNnYjhPhL19nRit3Kf",
  "key36": "2qFn8B7jiT5gugDbgezJhBjeWGoNgjn8hXTw7274tqjVU1UGNKmCWj9nnMnk6LHogkZDNxt8ZUdK7N4NC5ZyCjNx",
  "key37": "3ef8f1qq91NDMB3qZm16tFmTgQzYRCkhFhpkpt25EMihvPw9YsJPgdKjZKwGBMZ3W13o2gpns3Wthp91GmojMyET",
  "key38": "3NTmQBoEF9FJaXeD9q4nobHRo1YYjkBWF4QAijoMxtSabeiLCCedNxQBZS7q2FPk1DHKU5UTq8wZr4KUERgfJoZq",
  "key39": "4bfhQtVAcAnjAnLok6Nc1KXT51TvPvTBaBYk5NR4b9pq5oUCZm63jm998iwSWiohW1kDxwFKfCqkcA28LeM4tJSw",
  "key40": "5HhnZZUkXAgn5nddxhtt7inSKVFeaHz7JtkfmzMN41SpiqMnfksuiyF4uze8ctRwQ5Vh3yDxyr5Xp8xFGkK4MVZH",
  "key41": "5abwoF1wMmx1AzHNpvym9EV2hym4fqeuApowwoQ8kb5ten759i3Qpoz3ut2TXeq4fjSr1EVFGP5AcprpJFV6Ffau",
  "key42": "3ghu6WQo1sgMQbZpjcvgRwij6FwS5CmjbGBAFZJAPiBUgLYVhgQWD2nu7H5ghPszw8hwwFv2pjAuDLzZ3YmGh1gi",
  "key43": "3hRdP3SrC54H1grPGMnUdvx9ETz2hBNLvBiwuUPxE4uiPQZgiExAWT5LANfVWvdr6XqFNvkGwDRrxxLwW55EPjAd",
  "key44": "4MCcKEGMUfCRguEtnHbuosqK77aszEN5sQwJ4EdpE6Y5uURkn4vcE4fsMCqEbUfM9cG7AWsyttWxSbpm5yQT7LPv",
  "key45": "4VaiiKDaa4gorsjFRQBt8ybPveYfNCfPEUisJUKdtuaGodv1vYxVL4asuxQe2nquSLzHxrC2b9ruuKq4FePWe2Mw",
  "key46": "5gDu8WseShywpL5sWYPpysQmPKCi434JAxacDFnpbv6kpKmA3wSShcaCBE2QpE4wfbQSouz17gpKVEUPVsWy8cPK"
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
