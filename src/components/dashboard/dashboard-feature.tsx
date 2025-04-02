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
    "qaRgYxdHPRADjSusjLbs7xvSujb8XMBxVtNKudtafw5bkUR8VHKyy3uUjx5t2ohiG5nF1UmekSFWUZK1znMyZzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sa2gzX2vLPXepHeTBRVzwNK1g9Jkjj5Wu81fuNA9tgLvtYQAFFxYWWhajxDpRebhm8igbukdN37VTGb35aPSt1c",
  "key1": "2Hzpf3bFA8ZxP17exiYRix4SBNxBucG8p69oQKbURvqVHVrTMuqMdBNDGpFbRps8rHEx4cjEkbFRoEtgMXt2PsGh",
  "key2": "3e8VJuTeT11y48RE7ehwLHUtwSdkJ2YrUSjWiQXjn4H1zvEHgqkfn5Tsmpc2qH9RMgdwjtDdq4qdTzCxR1qDFJq2",
  "key3": "2kkxDWCdmnyVpd5Wu8384wxwx3d3NZ5PQyMsxpfgAXo42GmMhoKgWAfWsAuoewDr64ew7h3E3H6oNVtotQ24aDeZ",
  "key4": "2XrQWvMWAoYecio7zP1WuYTXmBL35hcToSaj5N1aYhzG2biXsDsWHdo9UjFN1H6aedvsZP7fNmikxLDujuiMpJ9E",
  "key5": "3Jr6jkcUAsy99oYeQgBNrpwAxrhqhuSfUNj2mA3spfxCPnWNH2nNhyNLbfqg4XN7cx18PgGm6WcRXGcH3AGjdSqc",
  "key6": "2zDTcYJVQjG1Wmu7hPNCqNVe2TjgZ4kXfQCJxtGEyM86ayAAjPgTWGprkN2VcMsU9kMPYR1pSBVjgjYbboHjXLit",
  "key7": "5mPfUgw8z6WidtRNBrEk4vPykCppH1bXJQw1Bae5jYXTDCSDmzsnLLXcy3S6quLnsatovrt2FefBLckBhAzZAhky",
  "key8": "3Bt9GnotJGstPXPsQDHUx83BEDEAABYPmMUB89wkDfArM1ahYHhWkU6U3KjyQttJYcXHRryGhgyA1X8hoAyMG8n4",
  "key9": "3BUPCePfQCqdp86HVcPMSHC2vcnthawnnPGyaNpB5bHBbkgb1iQ8QSWJTdoSVF3uNSqpVhHLK1k2wNtK4NXNbVEq",
  "key10": "2iREtXx8yn8ZWXDgmP1926fBEYCJAv1TgUES1UNkf1YpnuGPzmTNpcuCDHrCWjse9P3AyhCuf292wrb5mLpvz5qP",
  "key11": "393fKMa8w9jwEFNmCnYP1JPBvQHLznYSJeisfx3V1m6AfLDZpnhPgb479xpsDFN9vN9SAexeXUXYX9MCub8V5GeR",
  "key12": "4SJyrj32dTf9fBSMqbNGsHeaaujnkih9f2jQES7DZU12RKmN9NdaX1DoDy1eaJVhvutZPt3SRENGdz1FbmVrYYTp",
  "key13": "5fo7KgXL6C1SgmaysJe3vGpY4ZquxWBfeFY1wc2EMqWLdaTmKdiL5AubPBQGn4Ci9zKVT4RcV3sxiYzcFKSzrcP3",
  "key14": "3NqwhuEdjVrrMeYrhAkeg6TBxVjhmaWohwRxXmQqxbE7WjnJqYRNgBRoj4WWy1jykR1ijevxYfSjiHuRtfPVVb3j",
  "key15": "43RT8ds5WjdtEQMSUGu36UcDSfkDdLHWh4rsF3nVUAo8DTAHcpCkpbJ8sDEm2kwLxvYVeUFuPpcFDu1AcLwTFUJx",
  "key16": "3wVEQ7UWK1121PNGuvdHQaNaTquf5VAMztwKYN5N31CQTruCNfDp3aWhhvfoeWrpLves7u7jMgDQ2LJx3entiy8E",
  "key17": "3TXRMjtcStDo7dRbAnHQsYTjT8iMFv6h7Da2DsoLMSxmuEH2XiXgkSoouw17QxFRcx9mDMqAALGyQS1DyYTiB8TZ",
  "key18": "28inr3uFyikHbTbooTott2UN6Gg9kxC8bPRJTbJz3jtDvh7Qoowx3NPRpiPvAkmW5f2szVedZFnhFKwUkC3rKi2Q",
  "key19": "3WNS2NA1VAesi6M1HgKwN5mSd2dg3CVTgukzocYURk5dunpGXpeCEzwqDPiAdqrUCNnZzghq9khKnMTd3MX3cpVj",
  "key20": "5T8XnMaCaWnKBDs3EAoZp2K2uMCmChZoFLkaDYtfzuveBXxZm6BSHTTqGs2AgMUgYauRbfLrjR3kNRkxQPhaFZrv",
  "key21": "4aJJMLZxMUqdCLG93NKxjNdtFA8yEPKAk2oZotgX3R3AXzYgQrytmjYyWqRHktW8gcqTx7VsdMHkvveyAt99WBK5",
  "key22": "28anqioYHXSVx7gVoDHE23TUh3HgEXWY5zWp9CshcteX7ZyShXoQ5NTgwrRRx4icx21mZF8jwJ9mDbguMHJ9FjKh",
  "key23": "246fZdSXfGshG7jzCrteudkx4QkSKE4KXTnqh1DBczqYj8K5t1Agr1p1MsVDdh7MHjKMNGm5JftonZfvQFaqQqts",
  "key24": "5Kgvr9NxAAajJKo3DPNQitmtX968rYSDMcLvV3TEtZJaWrkGhmpiU9jBoitFVKq6q76jcKEckrE1gvjfLwWZqxh1",
  "key25": "bVycW3WidsYhrmdGorWqby3Q3QrcHpuVuY3QKhGe8A1zNHmdWuoxNZuko4a4JnhKBqQWrhuKHugaRzRGR3AScz8",
  "key26": "38DRPZ1yNJENF2QkxJau6VJCJPDxqGdDYxn7cp6DfEYrRo4rwtHnaEJK6wnvyPL3N9DZEhxi8URx1jKGEjVUAFMF",
  "key27": "3dPhhVbRq6k67m3zDJAFjQJH6P9vY3R1R523XMA6a9q8ufgwRKh6rsUNPWBcqWbTqR7mqHV3PXApKs1D8qFpy5Aq",
  "key28": "5PXXSXPHvRVkMpuqvGLF6vB9igLszWi8pSYNDZdLs3o5xGDaUDYapTEnqjwMd1YEoJGGp4YWLGivFa73MQjAe8Qv",
  "key29": "64kjcGe4zfix51YTHixd2VeJgyxXPriiLVY4DjrKPNxWKmeRmbczFaAr2AoUprKjrWJsihm9S791hXsHWquJtT3x",
  "key30": "5RQBQDADwam3B5itEyT91fHGRijbMw3hA67Bw4u3qZxLzsb7rJbUfd4hhUZ6qr4PCZCisMK65drE99owyu22pH6",
  "key31": "hRnFkG3Z3dZ6QMPACAetNRmGEGLrFGr1p3P9a7KDtwtce9q4zMyt1BUGBd8Lrz6uQYAuvY1TFq8De21Y8MBjWKa",
  "key32": "y5FV3pbn1dxoSps5Y93136BQbEgezC2jwjUvzpBzVfucuA1Twfpgfi9gqZrbxMmbCM8uT9x1CsxXgbSoTpMvffu",
  "key33": "3w5dmcfBZkeCCFFBB6McJHuioRTLQqtaiimo1udDRP6G1SYJXUgvC6bkTPFzWKvBHapuW7aTbbd5fftFTHWEUCVT",
  "key34": "2t4xjhJLid84bU84kdn2egyQBGB5uQTdJ3LqBu2BHeF26WDhmvz8hqVwp5aP1tUrm81wvcAh5dEc7ccEMyNH6Nj5",
  "key35": "3WGwcm2iJswz2AmwU5SZPPYTZ2tkFy49pJ4hoxJFkD5FkjZYh8bDaWeiEwReT9cCqc7cBKfiGgU79AJYte9H1tad",
  "key36": "269DozJW9mXy78wiz8nJCJB6ep5zEYEsJVkvkaeZv6nUYZSa7UCA1NDkuJAWfQ2SsxQWVg6Qkn2RJWqPcbDiAdWN",
  "key37": "3v5kxGxP8mCqhvsRVH8dg2hB6tyb8cepZLvUL1sgjbW7cjNSgddUXvPyWQJTzHgWBn9nrKfzfbiAMwN6qqjxqnmc",
  "key38": "5yiZLrwweWXZ1XbMU4fw3KHC1AkbNT8DGfGHrB74JsvQTESdZ3aTZm5CnMR7jMBNtxWRoxXCAqaKdcnzNEvJNcQW",
  "key39": "5wUqiF3wePwR2CejLKHxuXhhrDBcG5uuVbxovj47tfxosw37sQavUrfHQXXLRvgU8uLGet8MDsS7dMGnsRvNawim",
  "key40": "5VVvEpodw87w5GHVFnpthU2pURGjrsY1pBYQcRxSe8ubWgvCUScCLZWVqfavHWkLGvijdvgdYPNu3Nb3ttvbMBXp",
  "key41": "4FTPxRSetsMzfUTntbuv5efXTMV5x7vbVbhqPYMYTogR9t824kvnq7jravT3fGUUC9RzPsiKoEtJJbhiP279f5fC",
  "key42": "5pwh4kSNr7cZnZhLouuP69y855EMwoqhrpqqZumGrTCxxbLYgeXcmYdGSXzk5wPgnRJSg1DqPKDZUtKQDgpvWxa5",
  "key43": "5v6dW2bkLRKnpJQesq8NmxcFbaFCtEncNXrDHJKXYCa1kJP7pCjpD8sZrHCCKMiVwEb1rZEVk1Jc4RAxe8TayAJH",
  "key44": "3BP7jAUP9XufQrcBSYLTiUJFF4mtgWi4RvYMieKR6UUfK24Kk1psqU3BE5m1GvkkWFmumM7RqcqS7CjhFaVFgKfK",
  "key45": "4MJj6foYuUkr29R9hYUmH2aJbKFCh8fHTvFCFYDd72V9x9cRW6TSdnFbzmJexPQDbXZJGYihCDC8XkKw8o2mg1aK",
  "key46": "pu9rSNda9tGuio1fKdE32YaJf54nLQkE8AFgFHs7apFijDmi4TXWJk7zbkR3rWauhqKTSM9XGED4yiiP4dFwFrj",
  "key47": "36h5KnQvvjd9HahQUiut6euNXGmu3uZz8NArKyb8QM2kAzh8PLgfFTnyqZFvasFB2CDnKa7WXpZuL79z4nkRdz3d"
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
