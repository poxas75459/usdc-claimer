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
    "2BgwCEnKkumVG1fNpYobivDKKqseHbins1Et1kw5CqzfrFTrWkrDQnhnBcV3hjcSrjogdBqn8VKi8QCBeBKguWVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3YTjdWFuqEseuqGpcrZy41D5AipXJAUjDsg1tesz6qyBnfv9o6Y6XCM81vcmFBfQjTnn4UZ3Wc9RJ1UGHRpohx",
  "key1": "56eFJ2mLVjybum9FSbxNNGgrgDJD4p679LGtncwDKyM4Ne3dKmisWi2gosGJUdX7EzqoLpV5Ma5hxv12Fh9c6giB",
  "key2": "3EJpP2aUUSzqFSY88w6v91JBnWEippH3kRiEwoaCB2LcQJqsRDSniMM7GfN1HfYjCPWqANF3gKEdbwYaDCoBdVEa",
  "key3": "t6yzYqMJe6NyPNoDJDtTkSMgtp49E84U9cgoWNckjHkAe7ZEUgCeEJyzDQiYq7VoDiEb1VbwpSzhva7g8jsp7oL",
  "key4": "27cUM4dyqA4Wdr9QycoUgdVRz4UmSfU797MCXUeKhXzcyyuuWRVFoWvfQW8a197MwCpn6r4gUgiTa1wXBSZVSDq1",
  "key5": "4jyPKGuhA3VBHxaJBsqvgWcZFnSRmZum596vPSXrVh9C8UnpXiFiDoR8UeZY6DoipbVBfZyhAXVaV5sGQ1SVrFB1",
  "key6": "3vGyAXUGV4o6VEsmxNawpSU4GNo8miDoqsVdx9osjNssmydkxdcgGY5Wo5qCnFCCLQZ5mkp1MFa2HrnJcL5wbR2i",
  "key7": "5ToPSB71CUzcpUKT4BkZjZfmnKhPqbYVFy1ipnQkRwpH1wU2XZz2dD49tnL1SVRTSbXWYSTGBEjommNsT2GwJBTg",
  "key8": "3fkb1GkoCsyJyd245bnT2zGb4AaWhUoBUEgGLsu7SLnnZqd9zDAU5azeyQpzQExnm6EAayMKacRH45NFrcPgApno",
  "key9": "2ZYrfjePWyM6woLEeT52fccRKYTxTMT2hFxk64o3eoPooVDpHz24y8midhM1RX1UkUCKU1DojNnLxogaHXxK1Tgd",
  "key10": "3jywHAvN1DMMCRR53zidcu9GnfMUPmM5s7zXFK3uDpGzsjbbJc8cF7XxN4Nabu5Cgf5ZofmQmeErmWicFr8vQawt",
  "key11": "2wNLwGmsMuQdiFNkx3FGdDzLBMcQjfCTq9ukPKQXCQJXzugHmDiWJzZLEeTJzni5X5bsJtyevT2YLSM8AXUit2ZQ",
  "key12": "HGgoDx3hgQ7W8ebXqvpdYzfKECFdEPaTq9Ee9JsbdKEWc3rGs7m2QLEBCmhNtJcsLer14XZXUfTsVN5jTY336i8",
  "key13": "4dVsm9JoANwsRqHFTEUUYFdx1yRttukZySVwTqNXaFPb5VPGVULsheeprQbzqHJD3ZyJFw8XtQny5R7vCuPGsKsq",
  "key14": "4KK4SCeL26YK5pAFsE5Pvf6DrY4DdRip9FvSAaQ4RSpyEyvBZ9PhnR4Qkd8M2iRtwuiAajH1EA8FvLaYfKsuN2Dz",
  "key15": "5kKWdBB84qDNMtUFfn1oTj97jb7kvaCJujVqxuapRZxFfbgQtPhMYmztkW5vGuUL4vZ97WQoU1Cr9Z6LGpdeE97Z",
  "key16": "3ZrGA5KhznpW2UfxcprUxquVtJeDbjxq2EMuDv4sPyoTyz3sH4FpBDHqUVJxJEg8Pkp1R5Qh6UTQqPBBRknKz6RH",
  "key17": "4zprMArFbYJM69ZRbwaLRvbLjKDXemps5vj21rBZdQuejWSPAPmavL9gmnM6UhFG1LmtfQudhc3zGUDJhuN7JRHz",
  "key18": "4Jnsx2NxsnNRPGzV4ZsU2rrzW11n79b7yBt515YvKcsgb3tWFtGQAcxYiaAHDFpvJ7MQhvKFHMGM98aBa1jenKLY",
  "key19": "Mvo33Z22W3hk5v1GRNwRrzLWospH64zehj6SFqKX49PMV2wUPFmU58SsqToFtaq2ca6ongwUXrJFkxyAwTBmzM1",
  "key20": "2RGmNPxtMikhMWwMP7D7sAYb8CsxrfqgKhkoWwLeoFC1y5N6scdojY2ce3UMweeDGjqxSDbusRFLxDHCP4hTQGb1",
  "key21": "4GfCbeWwiM9UXvxAssHcizWy2DUdynxZdmkUrRZZ3wp38SA1oJxxurwCqzg9CM9BKiwnbFsrELmTqoYnbH8pP3va",
  "key22": "3U14X9jWT3RuYAFfoqrCjSvuNwHVW9t6uvE9iaKeNnD6HDfKu2gTPsjHDmPYafzH6k9dpkgjD2PDauPZufFivzC4",
  "key23": "v7iWHSmFxjhXVg9BiATPsnavfHV9ocSWGLGf9i6WcCDA6pPjJegEttFrcZyYaDfEJWi98dvFpo7Va9zbwfWNBQ1",
  "key24": "4gKaSLa8dnbkm4RzEsspUiPhn8YmDEG3bJXBB8cnhTLAoyWdqrNyvvCFjWuV45NURfyYw6iEA8iDWJfvd6S7Pbmx",
  "key25": "7mEmnjEYxpWm9mnWHmJAmKH6CYfsY6oyu5bWHX418uz1S9SRp512Ka7YcmAzh6pc8jGrw4n6hFkgVe77y9WiqbD",
  "key26": "3q5rruk4DDhRfmU2YF8hb92pNhndFu9v4uwieLQYTUjgaZ8xMhvgvoLVw2jyXrYKbZBoJFPPDLGXDABjybJpc2xw",
  "key27": "5npKamko9j9tVS6YEJ4yLZios8Jyt3hzLPwaA6zHELrFPsU8xmrVYjchJnHJdfB6ChLQ3o48K9vzZJrMmGbGGwFM",
  "key28": "3C9aAdx1eTStM4Awt6iMaG5HhdR3Vgs4LzV51KMUghB8f8UVLwee7xgPaGg2ACyXqEkujyKNpJXDosAnrUu6S8TU",
  "key29": "4GBDWXZwyxw8j3mS1rpkqw6NHz8tzY3KZBdJ5hPUFSFhNaGaTtNCYF9ooEA5ETMXaXidzKbtpzmwbqVCFgKoEffF",
  "key30": "QPNbm3JADJCqpyaXz59UZpkDCH7zHScyD1UcWAXnHK6DK67cr4RGwMKYZ5AyLhxFjCsjcbRX2q8FUaeNg67gwwP",
  "key31": "2j3TMi836TrAUWkw2zw1gjdjxDdNxR8zLhPsRMSoqYteHTF983FQ7CaffLfjpTtG2knyAFSe6moANhFE3ue5DYM2",
  "key32": "644YYj4h53WFRQeio74PNVKaM1DyVun9637SuWuVVUVkk15VYpr8vLzwWQ4QwqfYxUyrVUdmtra8VapBy7NfQMeW",
  "key33": "4z65UyYbZR9dQwP4exQwiuTgrFi5gkhTuCcYBV5DAUrfigRT4eEbJM7PRughKCNhJqxcczqvy2jjQEffKDHnFWYJ",
  "key34": "4iUNCXQv9hzsaMVXrFEQag5AcH2JsqrVMWdXEw168y3D4yxwuGtxDCPnLjG5TMMyYEGLhJJpDb3tsndumm8BWQHh",
  "key35": "2P6yyiu75noQNmwh8r9ZD5XhNMye5hAMxU5tHRpxQ3P5MipniBDmxUpib8iRAedEoT5fJf5b4wAvH1kznMZDhGy3",
  "key36": "2FUto8WpkZ8qLkp9iFMtX7dPcEbNGfebVkMoCzzgBeWYaNJeSbNn23SbVL5nxrPjGcQh2ALLuzporLmruhMEzVF6",
  "key37": "3c6Bai1P3zczQecb9PJofbcHy5cXTqw61uJqGuDfv9VN5w17A9FSms7Z7i2i8Gy9waRZbYQip8LagQW96WpPmT2s",
  "key38": "25uKmXm1VLiVQbMVVfVkKJFTHBAnNn7cidZ3MxBTCaP8LpRQdTKuU1AkLoD3wAQ248cPzhVna3ZgDzgj5rHsem29",
  "key39": "2fqzZ6nhygpqoDwnwKcKdisyTfpm8UbpmQsxyy7FDvSXsdFnk2qfH7ttV1aCzbLBrTKHkHMvFYUtfaHsAKvQD4Rw",
  "key40": "2gfPrZ93TMCpY52sCwHSXFfhdvhMzLjVx3Qc89FC5oSJRZCPPLT45xDm2mte2xzieaay9h5sipAqUDTUaUV94jPF"
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
