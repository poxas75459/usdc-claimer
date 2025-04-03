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
    "3P3KMKZ2J5nTVGUXvkduKjU3Zz5WtJirjrxnDais8E39kVzAGWJzvRx7ZnyzzEAxTRZB13NUjRCyghfMHXgoDgau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rXdQ4nt3VoEQHYqeyD5qJrtmecQzZm4FsmdZB7KZhbiG571oyk23J2QrkJ8DUrex47udAPQ6CS9jDaKCfVbC3L",
  "key1": "KDHtYFit4khjtxiRb4x5nP8yfzi7MHEjHRfSGSD3MgYgHa379YPP4V75zZNibLnbKJExnxXEYNmjMivonLYYG66",
  "key2": "2SJnA4fPmWck81iDY4gAVQwgg5AAie74Ugq7WxgRTkdeqtF7ZAN8Tg72HnsRApYSXsK34DadGBxDiUMd9mFDN3Ve",
  "key3": "5BmcAiKamVzc9Mzogvk4HhxUAew16vQVgmiemysSanJzF5yA2p3PFkw9pyYn1o6xCoLEeiVtPoha79LzYCjMtnwn",
  "key4": "45ZJ8BWGca6nQYSy7PxiE7dZMUWN4Reav6ZXz7qeXAx3eADUyr2uKjpahY3eq8jRq3yXnViFAXZgxij1nvmGUbfo",
  "key5": "586MGU8DVnLLxCAqSkjUr4MgGR7hfyKvnu5FNBXPfYVdnD8Wh6YPgv42my2LNCPEF5Z3LwpSBfu5kKunkGNn2Hd2",
  "key6": "5dDX7GWXJsMNLekcNrLwosBhjhsgPN2BFa1GyD8debnjfyYcaaY5UoFdC1t69gZt687hVpVef8szJD5vLg3PCELw",
  "key7": "2YUgoTKsXSHCHQPzFLcy9KnL9Qrbh544rr7eibeVddpZn6WAvQAk13MUpxYmdAQxSeZcBe7dJXwQXfHLX6F5FipC",
  "key8": "42wSgvKeEAzN4xGiCJMEu3egtHHbWiJXKAGfg4ZiBjvobDHuDcsCZxHSYYaYzXTezXhq4mdzjRPsW4pyK7kFLdRQ",
  "key9": "FhqNP14jhp2vPAPh5mnxeLY6xsJjuFErLi9bULKqs43pVxsWkc5b3FsweKLwWbnx7dV6JW5STfNLtRJvPxE3Nhz",
  "key10": "2tM2U1T9HetXKZHgyphTP1MnX34e9vMWMQovKc3M5KdU3CUNBpNYdx6FTYJc7KrLUP348tRCrhWUn7tkaDERnrYx",
  "key11": "2zHW27SDq652y7LnhBBRmP9ajTpyqsM4xGUcdXgQLkKtXSZLMWjnjhMJvtsLPZZczkCoVAUpxraah34cqfWFh8jM",
  "key12": "4tiWuvA2dGqYsF2Z6WjUQsiZauZkDmEjvR4ctSgby7cWR7uJJwEUkYUf25u1ZrFk7ndUG2n24xShuiiWAqj4iPyU",
  "key13": "26Zp4aQve7S2JTHkXZ1uDYpGdQ9LgVv7gVfCNpZ2L7pQ5pCqaGJMqZUPciJ7NfTBVGWYDptat7DzTL3PsaV8zebE",
  "key14": "643fzDaFqAerP7AbqdwcJAMxCq2wCUq5rebsLriP63dAUbURMQYCQtNuTTBvyx25t1VLS61erswVXXX2CT6EZAbY",
  "key15": "4J1hDaYS5XTDeWyDfiSk6mPMuqA6TCbMHzt8aqfmqhT2H5eGo1DuiQWYJ8JG98SZLBXHbEvKm97yabbw4CS4Ggrq",
  "key16": "4dJbRx1v58Ag1zvYnwGD9mdks9zYU1NUDhd733Hc1475PSSgJTy4VBAgCC5m4bkkWWtfgKePf7zEPdLVfxTAEvof",
  "key17": "3YSp6FcRtP2P6noykQQpRaibvhZ1KksZ2tfT1Sm6aHNQqxGUaqkip6fNsqTkfkA1X5SFEd2NXHksnZboehyFmUjW",
  "key18": "Ln6ut3GC9kBCwrrJbUyz9wtQzZbtD4Gjapg3Pw8ReFqkiKqgmBcFyko8e2N5dYxGCD9At7d7zdvCDQ9gNb4oKit",
  "key19": "4gsW3sSVSevk1wTUicD5eAKrczFmszTSJqWmkiaa1LsDAYSFpPH6vq3BLwCDrQHHw242TLAStHf2XDSpiSNDHijp",
  "key20": "5cD9fHkBqVHwHkvg13gZeFRGrDCAjM2PdzBEpy1SiCdguf8YkaVpfjFdw5YsdANG7hK55Pc9FEbSsuMQbEiJxQo5",
  "key21": "5caeMUrjhtHULEyAK3yzx9gsfQHo8vxfqhLTt5HvybPhRK5EAfqEcN1K2n3qnJ6DABCvBeeyjnb5MRvXLScqYvpF",
  "key22": "ibCUWfNbvcyTshxsohzevSpbGu3GMaoujWKbPAWLYwCvM2nxynf47haE8y3syN2qj64KYV6YMy4L2G1X8G72fZ8",
  "key23": "5w1f9e7EGrrAbUMPXm7YojeN9pddzKwut95D3USMvsF4D6ugg2zK8DRKZxbWRjm44D4H6EJyJrpscThikF8uFgXH",
  "key24": "D1okSXdA89ey2XtuvDue8ShmZiwuCi39C12pAnqV4jcWm1xdGTrXAPyY9tQGzoJvh5NJ3i14Xgj2ybXQj9sCpbo"
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
