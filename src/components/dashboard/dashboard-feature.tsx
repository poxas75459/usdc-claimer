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
    "2GwC3yGkkXCGr396Dz9siJH8kT7TdaShWWB6hz8DHhTBwzoEHz2T8z9BHYfGGUJ9tjS1Nr6ND2wTZZMUSK2gBFDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ataK2mtDu7fiFLTad1QWCtK7MoNfZaPpXDEU1bcajU3CGzx3Gu2Zp3uwYshC5xnUj5zrh1gMWATrTSHSb5pc9B5",
  "key1": "3u5935CdnBhqJZT9BQZYUdT8s7YPMrKT4z7ETHaburmpSnLuXb2kQo3q8tiT6ebDHF2McWFxSWRR52MaxnQMpUr",
  "key2": "3MJDFdAQzQWiWDEbPrKJgwmv9VuCrPmRgAysw7vTqomQ2fVTvQpZ9joMgzKJc7ebYk8mwC3iSXKFWHU9F7TZreqY",
  "key3": "5fFWvUCawhSoPdNQp6SJLqZ9mghVyThbEuLXcE96AfgAY4JupXNH8uNw6kFcKPSyFUiqXYwTXijS783962gixGhb",
  "key4": "4vPRr3Et3BLggnS4wkHFbtQWd9xDFkgq4ZCEFL95cunZoXfpW1unyafhDRx1fKdr5cnCH7CdgmAYamAagBWDK5fE",
  "key5": "5RHNKNVa6rxfFwyQKpjUmGcH4iMDPZJHvCn14K1NS1zccPBdxB1djPWGjnGqCK7V1W1GWfccjEGXTXXiRZd1pq4c",
  "key6": "36Ni9dsLHutxu4926F3BuCxPcN3RDCEyLyg62Aujj8u1sNut8PWD6SKNqwsTTJuyQn7FtXh1ALv2kffUjK9QNDTB",
  "key7": "2YJxTdZBEF1Bwpsvn5rqykRnTcH2sA3TafhYTfykE3tddXzcT62MCVPPYxNY8a5Bh471sGXBbmuZ17FwC9ziJ2JK",
  "key8": "2ZvdRcWz89wXo3gGubcFjPCQJ9nVSPQ3X4mWyJznJ5k2Ld14vwkBBfi6BNgQ4i4hrbt6nVtortaPq9C1vfq25z9V",
  "key9": "4GcdLHE5u6usV9DavrBCgsmnHFWXMJsXjPvA1biMjwgrMPpj8D56CR27FKsyUsRL8yYekuC4n7itEWMGoDNFeZta",
  "key10": "5AgmqrWKDikq8GTaahM3CbXGPN5Jr5RAvDPtNANiEauuE97GhWWp8zP7qdxgbuvqGuTexqHwhkRZFsYV6KC64YDM",
  "key11": "61QNSjoypVnw6XVq2Yc9uy3xezZWcH6ygRHPF9pv8THkSKEc7BxyJZQ7M8bKfKfez8MUhBzVML2zMqVt5yGmyHBp",
  "key12": "3xZMPx8J9UqmmieX6hD1CBpAYYFvnh5T8fcYDZ6FtFTKRAhW6qN6BZ9TfiNrs4TBwNgeKXi7dPmFo2h2dvZpXGWQ",
  "key13": "3WuKtH5MxZAYAdbAvFGh1nhg9SP8QE3oRWFAa394pdbPHLhRA4rCcK1TFVF5GvQH3XeLH5PNAZ1YtV3JBTP3KuNZ",
  "key14": "2MiSKCzufsV1pR65f1Mkfc4hpg2pd1vPQGRdmJbZdfSZxBkRD3NHHd8Cg4NdXTEJwDErp3ZZ2nxi8quZfBw2A1KG",
  "key15": "4EVm4qqjsYCJLc8UJ4YfGM7FY1tcUAhcJpE2HXPUm5cEzr288gwJmahRe56k7ymMyfyQF4Vo5NjTFxddKP43bW19",
  "key16": "4uzVa4kr796CqPEaTVGg4Cyzop7epJLM2mb8Zkhv1mjLneMWoDT8DBaf6uGyMNSiHLBjxRc7zVJ55QUJ1ZKAR9Wv",
  "key17": "4vT8PX6EFCprZjJnGscDgdmSfRmQJkQ2zNnuGtYLCyJYtjNajcA5npbwn1sdbdPx91Y6ShCKRQovWxL6fNQ6J1V4",
  "key18": "5B5oSqE6koc39jUsbpnSeCoNrRcP4aSKGkYayX4tEe2gMTKHk1pyDBx2VaPg57bcFh5sSbQRzWcezAjnggnwzA3F",
  "key19": "4KE9xQZ5cyewNfNCNt3hEXrbvzXr2PyuzbgzpbJeBRz1YgGBwwFNFZP7DZWNppgjyC32GnvuVbi5uj3dRXV8BG6u",
  "key20": "33qbDr26tQxqvFvgfXUGUT6G6eY4L2p7X3HAtQn6E7sFNRhXY2tdaxivuwpbVX11DcTD8WpmjCjWxH6wK39VYGnd",
  "key21": "2UmXYVyQQg5CZcowhZANofw9LnGpm3reZ9ir9FeiKLV4bYDJWCKGmynehPxKQzgEt5hEyXEkgzxTYLHQavFxyUvn",
  "key22": "4rYm7h8Texw5GkFUapVwyYP4AK1sZMvTgmpF5iVy5t9gRd2dWM7XDUrsdrpyRkEFeo5kZhFfotocuN9pnCYeqm4F",
  "key23": "3MuXFnrSuyLDR8Qj1aD6HNfGaHboaeRYtmhsa8FErsdz4bSf8KkzLHFcjmbCDRnwa6pwu4JKe7D7V8GTEMziJLaY",
  "key24": "2RbL3wGNcRvkGoMNPk8p1N2o5TFDDwaEwoqKecgS1FA1qMhDQSJwvHfu8JQz9MYLzDeMcN1JZPbWYGFWRX5ZuDCx",
  "key25": "2yGAHaKFT25yWBEumQeZkbcv1JUkwf4aL2MMWE58TCEvxqFZ7mh4FTDYYPrtp4LGduabPmMdK6a8sejQrs1GP6es",
  "key26": "xUatbyRkke9T4ek3YfZeukeHR92k9ba44fkB3nqPANaU1dYyqs61h3sWHkNg4cY6GJ7PD48dZwSAdyQ2eSdkeUg",
  "key27": "4kezJQ8PehkKftKhwzw8f2DeMGSFPXMjKGpayimWoGcwYT9a9MefwVQoGjHGiRJSNvKe7bpXBrpNJHG6dacYVRd6",
  "key28": "FCa1P84AHMt4S8hGf2FnFkwFzFnNneDtjWVz8b8JGme8SjsGCaJ6D4ac7Y1gmd77oWnZ79LYJotU2bdix1y6bLF",
  "key29": "28jYRHa1AM2jvsx4HCn3XPbTdHh1Ed4iNFvSu4SneHBeWdj4dug1akSUtc8BfGRoHTMtiVzYuHBtfXRguYgnSZC3",
  "key30": "3C1Tn6P8Hbdnj6co9LEmqMqs7DARTKTJ7gNxigj9rTJudGBbVz9gBeeLeg5jkGTRyLbPd2HBckF84TjUo1SuGN5t",
  "key31": "4u8fyQpipZ3HcgE8b9KfVv6RSfeJXMoCMFWGqfQpyFbh23WoBTQJJAwMAKEbXBbVWGEf9poFwom9zpiLM4TTtVs9",
  "key32": "5EcvJdZ3bmtUHD6XKfkFTTatvzknhXCZ9q6U3hBdbygQgjboTwsyizLoAuhUHpec8Cg6Wepxqp4FxvCQ947yBZTu",
  "key33": "3WzmtEChZUBAnyA5c31pqwpLxPkRMEj5G2FJwwL5y3yFQ8szp1HDQ2SjdniveCQA3DhY9zKU7peRKheDiUySDuxJ",
  "key34": "5NxMyx1AfQHrQEbdbVYNmT8qwhTro4L7rmcZhv1h77FeNNuN9aysVwaYxgoeEQs5ciHcWFvqwVmr1gDGHxZrepJw",
  "key35": "4Wh1Ynfu4Sw3Mth27qHZzNfRBc3jWAb7FftGP9m7i97gTEjTSzw6TnGakqHCTUS3pMj2bTmNww36c1fBgxPpGLHi",
  "key36": "3aGp2RLSGwncdrcJnUJJ9ZqBE7ZJZkGnrmKjpSiSRPU6htahzEjUsSakvVsta1KpnWWBm3V9cQbHLRtQkVfYFXD5",
  "key37": "56scMAAJcY2H5Yq92WvY9abDx6n3xtAFLvmPNhGUoL4eFgppytQjdAxBjLkHNYqGZ5jT5bbPzUw2Q1T46pqbP6oH",
  "key38": "2DwkyFutAcjmRgCrHYz6DghcsPVWLqrrEeMwZQpgbd2LKi2C6JWzQkMArXcPzhCNt7uirgEqrM7H4MRA276W6zDa",
  "key39": "2sTs8P8MosASEoBLrb4WdeDJkKQnSFMPBHg49uS9oPpiv4jTWmck14D1a56Xo2MH66DroagstzFYbvQ4KkYZUq2Z",
  "key40": "2Q5foFSJZdr2P6povMdUMp9vSjXs5SJTJN9NXN4wViSH7aHsQ6uNX1KAxGS3wW4WZ54ge5Uk236t1KzrzaygNV3m",
  "key41": "4md5qKqWTWzK7YPFSDPf6nmZwPCzEcvwXrLgC1sEXskGF8ehHfQKMCKcSKjM1MBhcD4N8a69cNxc3VaMH7RPPSTd",
  "key42": "5QNMMD78bshBXi1JrFz7P9EiJny4a9VGHoL2iZvfVbWjAJsz1zyCk7PbBoBHQA8N6pM2vuPZebtjFEwrsCEVRd1L",
  "key43": "4GyHh1ecEWCSKfwzq8RBYDNTfZWqWKqqcC6p7rgoAx8ShycRfDHzGaYCrLohuDiv2SMtpRH5JKtj9VMCPaDHkZ8N",
  "key44": "4xxbDj5B9NZpcKjrmm6wkQ3r6ugyziPSCagQm8FqW1LLNNMuYnB9MTajE2ERcKvBQS4eMbViB2p6SdpqrzpUr4qK",
  "key45": "5zDc2L7xqRssMN89S6ASVCne5DgmhPWQi8yF3Lo3MFJSnTg3eAYtu6eNJCSNTmPdtZU71zaQ3bAFb4HCqTvp4jTj",
  "key46": "5W54ekAmUYMisekqfyPi6vi7NvXfpfjzYFjrxt7NMxMhVMLCfS462WcU3VaNK8hZ4CnaqyD8rNW6KjsXH9aywv44"
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
