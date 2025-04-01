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
    "nFeD3yQqwZ1Lcb6KTV9DvzKG1oTgcakH1W2CmFWeKsS7ieXPgNSUDYepR8doN1RT4vNwETkb7A8aJW6CvZzmccz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArR22Bv95vzGoz3XaJ4aKmmWhXE4zYfFjd7DXerBjvE3ybMuvNwxUAtd3tRhSy9Aqc3qiiFyTJWunKBT3CxFe4E",
  "key1": "4TVBpr4tuj3LusgGqrYYSBaSsNKFGnzJjT3Ate1B2K3XQDk8D3DGGerR87ZgEaWKbT65kZfHb7stUdWmDLP4Xf22",
  "key2": "2s2tZMSSWmqgP9PZJcJ55varZWgR7hi2Up6SrtFLWojuaPvX4Sv67YNJBWmBhQFjaRjZGUKJCqDuZyFQios5BNgf",
  "key3": "ZRFdyHJcdBUtrXrH6vRwXdikgspHNRmojACmPaiQjuG5oZgv55ZrbwUmQRiqQEsqWnchH9XKA1hotZJUk3h3Fib",
  "key4": "3wfHoa1xJJTKvyhod1j2jc4BBYvrXMWvebmfBir4aNhfaqdV2Ft8913y8wDrWQyQ2btD2FxZtGPrwC3zF1oENhUJ",
  "key5": "2icSV7KGz7bjgYmGswp5HaFkt6CNFskmapyGaZhADS8zPz9vDaDzSscADN1Y2hgJeFUQXiC4sqhHF8vvw7MGakNH",
  "key6": "7gmSCK9qkjz6UbHo3gVCQ2onQDFNPkDCqk4Snj7Qig1bpBF7x1Qga4aFxayMcPrQbJpM3v25AN4zin9tHyMCxF1",
  "key7": "428WjsUtRvht41n5zM6vCjNnRBFPXSi7Qv3nqGca3SR1VVBbqm9pjWHmkRXnH8pFaYRbkkX54bBWthA74scQ8eC",
  "key8": "3h38WJ2XB71RXujbF5VDfSvybi7XPpqQQdKyA8sCKLp1tUUVAfPBwDcs6xprDG5sXwQtX1gmcB6JzDgQw2b3FEDH",
  "key9": "55FQVayPqURWPbUWNPxYUtvH8WCx4eZVDMKBXypC7nTkNrWLKvdKjKZpytXn77nQssCpYEVt91LhcCQcZ4qmsYEG",
  "key10": "4ggBNq1DxRu5ZhHkCS3csp9vGyueeJEoG7ChkMiZT7MsqDPAjoC84VAAAruf79CXa8By4DZ4jT5GrVvqtWEHr5b5",
  "key11": "53n2tMGngtNadiH2p6q9QcFd4JWuzucZGUnptfNGDAPEjfnCKBiu4zqovTuNgkmL8tXH12TzZxcQEEfrzqBrdRoY",
  "key12": "29cYS9536Ra4MZ4bomPDMEM19hYoP85EuSPKrNsuYdDfeVgH5Pfxe5xb8xrLbBQxX23ZznckNAJ1TfGTUS2hGJWv",
  "key13": "52hrKLwDPGNRXfyVQsJ4UYqaaYMsekbtqFpu8KEjortQcZZUX93onsXRnCd7aExjee4XTSXKR5MvQzdh6RQmHqDF",
  "key14": "62nLBSmfpsC3jJr37zRKC9qPkVjvd7rNEgDvrmsdJU2YapjPbcPTBQPvUcwzfFVNxfXrQkTgjcMrr9wi4uUv8EzV",
  "key15": "NT7f33AEcem9h2HRvZJ27fk4ScCATjMGegqzmuqaM8MUfGHmgGdJdaTMPoxJLf5C6EDPdcAqxhJQJ7Cswr8yjPU",
  "key16": "5J6okjhb74KykxWHc6uKfMfhVM2X5wWZp7NeBbrQsFnXtoU6SsUeKbpHxxn1uELm3jx5Y3WShf1hprywJQnMaXvn",
  "key17": "3VLTCud5FGCxM32e4gG7jXATyQ8ATCTLyqWpSMTTAV16YGis7kwLEqyZmTtH7CfygZprn6QTGByXDk8akJ85wCSw",
  "key18": "guzavrUrur6RvXhbdrmJLNrMadEEpxMHBW7YHiUFMErbvVWfbYf4gFjTfjen8TWQm9vcbKsTvWiMgwQ9CcruGfN",
  "key19": "4vPLgEQo8gF85C9wHiueqyj9ivqw2cRqDsvnwZquQ6BQuX2xRTkWk3SL73vBYLDXd1eEqL8R5UrW14eQNvdsEG4r",
  "key20": "3dJvc6rVtVvGEdSLVquAfbfAR8AZhz8QB1hHwokRi7v5nDx4fU1kTp2oYM2KaSnNY3srsHL27nW3g4w9bs6LKDXo",
  "key21": "aVeQ8Bfm4wDLMZcmt9FYDP2iV5nPMfdhC74E9AvDUpyTj9qrsa7dP4tynSPvb5ZFTvi7FinXAWYWe1Uxb2MeXJx",
  "key22": "2bjaoQASaf9EzfHvzNZAmEJGLGsousazpTAT52LnxxZv9Rjwm8ywmL3Dorrmrh5Jb3hQzQ3TkKZW1jFFWpCSbHhe",
  "key23": "2c22eajvnvMibg5NRkusYjnJAuqdNB9xMtMNU4zY7r8QKeYXvQwyJCYXDMEYf6jrkmsPSMcJG7XVeVuN5Wj2vk7F",
  "key24": "NyTGZgBcjS5Sdx2CJRninBqAK7mm8SYynvNsVvCcY4xgQ9t2SyQRP2fVYde4a7fjgU65Qq9Y4T5BQzt9ampSXwi",
  "key25": "2LAbPds4y4UzMDR4vBFKkhEz3UJVJfzRQyTtaQ7rvuL4LHkAwo6sA3yfK6XJ6SvN1XnCw5tWN2krJEfyADDUuUs1",
  "key26": "3bbHzt9B6WoYBVXzqvJZHMLHBarm1zKC1jM4ix9AVHXwYrNUGM12SAPzVxTzcyRhXmVzd3aJRGN6tSnWMVWkXhPB",
  "key27": "5B42RgiLqcFrBnfqoNeHPMEqZMnFH4qc1kzzkWwhFV55xi35JHELRRfEYcaXJEPqsDkw5NumXjRfcnQBZLQPxG8D",
  "key28": "5kwiYWdNP2Ea3CXsYARj2sCqw9kKwsMFnb9HsTFwFvLgZ9ivxEQ7R7J4EWzTaksTBip5x4geew5vMZ3cEWKj797e",
  "key29": "2SNVVoPgGZjfiQ6iBy8j883Va4TCdMoTi3Uz7DKfF9SM7NEBRakzjzSLPF1zVv35F9py52VVtkfcJPzseJdEdHoN",
  "key30": "3GBJapS3XoyPdVXJYtd2DXaJByFsoYjfJKksjevUxDvY96bjR9uww7PqPHJmaF5dSNRNUzspF19upq1oK3EnBYgm",
  "key31": "4VuPtNCrcSwQo6aRseERwHXGjWWtmcAspH9L5pvdZhAHXE5jYyy4FCin6Tddor7QdX4L2Z3qpiQemrzyYYTVUza5",
  "key32": "58mp1E5a12DnPTee2YTgpieYbtFobGGXoJhvibwJG9aVaUwEWZo34kqHdyRya9hewswjgnNYnqD8LWqzwM6FLdoE",
  "key33": "3Gbq8LdufYQPqzWcKpnhQ1mkYvAFRAVhyHreUUJx9fUpvdF8BY2Nkp94mcCSigLfngATWC6rJw3kNLvwaQt4rnsn",
  "key34": "2rvQuQgaohmrhc49gfYKiup1WX2ThCRsuvKjkgpdc8Nueyrg1k5wesKPCwyRPJnN1wCHiz2TpXzfnH7vr2J2gamv",
  "key35": "5tZcVhHkuzW7uL4TZ1VYEkMPK1rzPf37dgPESw3FxPQKS8aZVF5ncXPSkcrGgKMuevfpBFkd6KzZdDba3DBUfHmW",
  "key36": "kGUZNZACUJbibiXa5bmpQZCgUFDsjZYbjEztjZHzzqb6uyF299Yxw29ZXjoQmshA1Fv9gyu82xbC5tbc5PuTM3f",
  "key37": "2JeSU9PnECKY3WGUEASFq9WzDEttxu3a8rZftNmMET43cXpVPdtn7LTtfgUBLiebQsqLhVnFS7BuBNadrw9wQHyK",
  "key38": "5mu8fTvUp2SZh7HFLTUF8DUahKM8u52hiCiBHHucEPxWnys2QMwVWmacoyyzbXV8qBB6nUaGiGR85hKC8jB2hxBB",
  "key39": "7rv6AHQzGfMR6JkCSq52oNkXxrFBTMV4gHJx1k6LK5FbDZWukgyCNsp3dHpLFC2xQHVzCZbuf6DUTVeZxgAU3KW",
  "key40": "XziodFJjWo6JyrhVKdQTSsgEpEGxQR1mUh86xR8s3g3XFqUvprUEGG8P2DkzSkKS7GZEh6F4vxUay3y8Wv41iZZ",
  "key41": "46dwySexdgTHbFSNNrMKCARv7ctydcKu3rUwptR3DtvThm41vqP99tm8G4CkhWMuraFeSNiXN8DQfKV42CU2ReTR",
  "key42": "5QBEX6AEP1kds8zmf8YdHGCA2AN9eF6245X1eVfY433RJB14nHCXkmDg8PyK9e6HgRRB4pz8pNfv4tiPaxqWPD4J",
  "key43": "4jhDMhuhPfE9PCRgH3ogkyEAgpdjCGDX3e12THxdZHoZqVfogY7UkJGbSXBYuWPSMEN581RWsGN2A5ppwheHnigu",
  "key44": "2ndien1A3g2a9RJTLpxZJS3GR8VvXMFj9pThPzEo2hnCk171uWwtTTefXkvk6MhSidxTefgWhudAsDMdv1LDcTC2",
  "key45": "X9AhKWWQKxw8WzZ8Pz7Y1ZwcDeeJCh8nfuSfPGeEmP7L8BH3KstP5DNr6cWV6Dgfc1rFMFTM2p5AHt17CDfhD6j",
  "key46": "2emCY44TKALYw4GU3VgPv9Que86jdAGv1rJ5kG2rZj5amjBnW1Nbb9vUu3vj29Lh7XHCSWo7sUL2LtGtaDY1j7W4",
  "key47": "21hatDHrp1KJwmWaZ8TwqrrMPeWzJSmobtif8wN69YyzTArR1D4PzeYDzGAjpGtwQCnBpZ2rSmPSjDhdDn1gtMU5",
  "key48": "3godgJC8w3ZeRhRF796ycD7Xp6cZ6iChgSJk9H19sXuC7DLAVq7u2rp5Gj1xdZrRvnCLS6eAcgPykqgXRQw9osjJ",
  "key49": "3etnxYvZEjA5tMmHK3B8u1w7vgofS2uQCJwFFAcUF539XWsepFy2xqWSdN7EQisUnhEaWsTkHET7YSerCDoDwqEn"
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
