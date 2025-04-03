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
    "59XK9EuJkqtcU44X7X2CzP5UZ7hoJnAb1V5ujHQzBc2V8oL1NorhtLRzTsrDaB3FEu6ih71HfKNvzrRqCtNMdUp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qX9SNwjqaPrEtaRGgA9XPSKTKo8wkV67g99b2FDp5mv2BxabhB8A9q8LgU1ozZnrLfhGwx4ypjNdciirS31zkui",
  "key1": "5jqMDXAX3sMdLT717FrxtEkqCNfL6Cb3gjk5Q9JVxh52kVcFgwabye3Bug6PyMak7QjzapTKMXmSRHNaKLPf5NVJ",
  "key2": "5faDXCt5Z8pMFgm9xxcVZY8AmqLmS8RBPh7Tpj39a6z579dUk75a4AmF1tgWmGSSqXnbeSfxBdVXcDkeVXvGKMVq",
  "key3": "2BfVkFUfc4J8TVWy8mECQ1osWQF4ZnKHDxYGHFimDek63isXX4XUjqSkfXuHia6bQN3XtVhp8VN8xLsRoPunjZWb",
  "key4": "3vF4hbDPwJhH4ydjRUDuaxMHjA1GYh1di6gLfoRifACppczEZ4emZe3oC4qCGgk8EKqxepyUnC72LS22ygYX5bab",
  "key5": "jQf9QDHBN5pGPgJLT4da1csDG6gjZStV6XCWahtMm4FhXeDHHrLhScAV2N4b9LjEBK4VZjAtVjasdn1kusGGvo9",
  "key6": "4vLtJSwVNruZMWUabKEjsJte9G2hHDmBQtRsTNqvEX3ByfTgisCupBFUQrWKDkrh3DjUgQEdiqyvmBQ1DFnnWhqS",
  "key7": "33ysuyZn4axxsZHZTHaeXZ9Ga1s5Qnq2ckLY1GkENQvG9YPDtquDNMgki43MjdrsRwqeW57T1jjaFgvHR9yiAWht",
  "key8": "3J4izWT1uc6hQbmT91XY3UikVxu7VjXBC9Jdkj6LYPfmwGSd5An2jb35ao6W3UJgmB7y9Tz2dtonfa9GaRcxtqLM",
  "key9": "2shcZwpevpSBKPLAPiwsLjbTHdmrEgi1Vi8H3A8jcnHMxx1u2SrcSU3BzkJxacbqMJwLFrmUMQQ8RcHxDNBPoVUJ",
  "key10": "5GpBE3RqpKifA3e5XkWdjQVLDgBdptxhTVWhGaWNn8B91dPSRL8MUWZAnXotS1Su9SDfaSGncpeuZCYghTXXPxpj",
  "key11": "5kGYHn3qA63pvv1R1JzipZidVo2Q5UNxxRbrebkg3dcigLtebksxeV1PudGD6Dm8bLvPWU82CAez28nSG9QJDuZ2",
  "key12": "3mrrNBg91kMCEYaSQk2kDzyFHPofVaToQUfWAdQnVKLyWUBWxwpZWEfUrfXidgLNfEqdnzSg6YDC3puDSysepFFy",
  "key13": "3by3dT6vUfLQZFqRHa4GQCQ1865pSWMHfgK2NdWDxspxBi2RmnY9WfiNqNPntoQWrJwQypgQW2bkb1e6PsuGd3jD",
  "key14": "3AMpkQhSS7jeZ1kj8Xfh7kAvEA3txL4h6rNwnwT2Fuu4g1QfbJoqKzj7upvrG4RW8LmgUbZ7v3PMFFVTMEhpQEAt",
  "key15": "2KPejSMybrGgJfeQ5Y5iAAvk8SwWYVpQHffZxX4mSLCFVjhR33fZgGCSREhZ3mJAeyYdGQcCb7kgRHbJnKXH84Yx",
  "key16": "XyUHRNSg3h5GjgZUikySEMxtfiztZW6NvbmLRCvcK67mPKoybMNqk9ZMqvEUqoWZuiA288W2GJ2VaZZt9KxGH7E",
  "key17": "3ir6TsTM15pBHSTqyMvsxBjKFwTpUfeYfaNGVVzDqiw3B2wXom5DiLs4zgJh4v9wXMCbbXTyhEPbyAVN4oKVeCUj",
  "key18": "21oqLXX2BxHpPheGcbbxtZjh96kCwcCaPZ4sfdhzBdAenoGwdrH6MNDsWLZmaimdtMLoQmSDeHDbZ8gyUZeGgc6K",
  "key19": "5uVMi24exqDons24jCRgaqdMxMomqXu5JGW9kYEkHXEDKx37ixQppSs97miJHxY5hjiEK8ZVscxXgh8T6qpGyqV9",
  "key20": "kRkzhEhS9AdhePehrEXLGv4B7JeqEArE4SPncERWQDL2mr1zvKjb7NZtm3sQtJ1qnUfxquboHazaU7KF9AMHdyY",
  "key21": "4HXn2oLjSpoG7vsJNfLVcQH718nZ1LEKKY6ACeicwL9XhFp1VJPw78LDsSf8bUxfqyijmikMa49yafUDEG8Lpufy",
  "key22": "2g58zsFtAVcbPaqeteiexbv2YX4YM8XCAh8wM9DHz3qj37SATzswER7oUgSD5GC1hTCMGFWcTdVKwkQwYqCChUTH",
  "key23": "3t4S9YX8pHQ62Lm85dfCchkgj5NTXuWy8ML9dvAgpbsp9KEEDJdmyLtJVbAJ3TtjmF7DT1YppDYcCZrXR7agj4zg",
  "key24": "Z7RzQkVxjDiKJ3Duc7XoTFXpcF3UFjjCdkzTF2SoMifJ1Ntzkq5q5r9eWzw7bgkbKASKCsPaNqYZuSZCiyy4N1c",
  "key25": "4MvCMdeSviiHfosZUMywRQhyKBmFhptjh7HsZ6pWP6smGhjh6fA8vNKrDLDuakSJLTFgQPPisYyVyRfCtC5n1Mcj",
  "key26": "26WeRgD33KLp835Vy5EtMnVFgbvCGsRbzCv7FzLYAJDCUZPiLxQqbdLtEQB8ZjRwqUEmt65Pq8iZfbjUyPHhmP3S",
  "key27": "2oy514e4btRatWbE3M2r1uvVpiGEWLcoekbhmKEjgECNDsGCofdPXHigcw7u3MStePFF9tjc3hK5y5Rdtakyx666",
  "key28": "d2m24bFB1sJBT9k14EwR2PUTSFkjss7V1wuYUpgeacTYAxeniFuVtDgvakkEfnMHPD1jQ22Nfaswet44rXaBRbf",
  "key29": "3P6AJngKSDgD8YzsLkXU4M2UGaUxUHEyRBa5V4qhJo3N3eCfbSqeg634BAbtNaFEgreYzUErgc4o2pGdVPVPfujS",
  "key30": "28U5aDTg9TSXxsVgsEdkCyxio7T1iATB5SZGrXxpxTuxbTptWNdagQ5iURtFXv68MBzV3br1xp6SV1kJNECefof9",
  "key31": "2gmfpA1JsZXGKxuocAyYfRnEc5VomsT1S9izhnKpmUs7QkuRBjtnQxFvYvLjqgiADuGCFHz4UZSPQJ73EnJPy6cc",
  "key32": "2tBus6L8CWAsz8AX4KDuGAgfsG9qGr7w5ezZsu58HGY2pZMkyDVbg9EuX2LRgxqgQ61iKkegv95opLJsaYbe3Vtq",
  "key33": "3mSB7C74g2mnhJX3RdUKn73GjLWYQkmKfUdwnN8TPXEFSbR3QzVKjYK2aQ2WEVjwG4rv591q6UxB9wzNGayPwPZv",
  "key34": "5EPWnGZDVV15h832kzvvTRLj85XV72wFdePNxf3Xqw2XHt6cvzHW2ZTfb47ztBRdWWMmBhohghiw3h2ZJmN9mXhT",
  "key35": "49uH7nRtDhaaeyVGRr5De52CK7m5YQHX41FT55iMFutE1Ta7isHknbsTVKSfsKUaB6z6J1jZ3nE7Xxw8tRQfss72",
  "key36": "3MEiSvWZtaBzH4MyMABenPi8aiQs3HLziLUyCGW1ggRA2RS7ziGpRKp4JWjJbLKK55bFWgwen3JhYBFKdGUVs5EX",
  "key37": "3tg8ULokbjmkNh4k4QVivrkh3WHn35KSfreKtSpTDzFTD5CL7ggt5dtXCzsTB5zSLwgrUxo8Vxko1x6t2KtAVLFQ",
  "key38": "4M6ff8rAVy4NQbFT9L2WBvhSKJNzqPESAVuqoTuocaG5mTsszTnpS98bBJRMHM6M2hyUkfuW5cFVJqYz4mNXdGrX",
  "key39": "2YjYEFLg8aBJm7L6oe6P5MQWAgoxSScWrFwCNtLiacW4jBEQwqVV85EW39AuGRF7urbwTkbqAtT5dCdoRJoASHos",
  "key40": "5MDHDy1iF4Aaq2EjM56KtCNQ1LNMwaq7V8FNLrWfKBbFLL9KW2w6mDsBxzGt75WCkud8b7YdpywdaP1mxLEbkiNj",
  "key41": "3qvRMHvwN5pZh357aByKNnLsvvtTbKoTgjLTTo2w2Ghqe95JC2hdL6UK1hmKvQpnaRALkXFC519p318KLC4tqcpD"
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
