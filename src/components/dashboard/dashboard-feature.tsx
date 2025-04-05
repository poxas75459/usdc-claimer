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
    "43kzFJPLNHsRFettqtmJbCHMHUBeUiMQ6ZxZLe8dc3TByEbpGjUzu5m7fiFpv4TGY2HmtT8nXDKKDaP3J1VWpR8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMo3hkNGi7xKTmZ7gGQ8xKwsMxKu8csG1t6rnHcLYStUkrAUTrupSXpiFNCp13gWXNp5FDBnTQqswcXVYdVxJoq",
  "key1": "449kT8VNbm62es5X7vLCLrpVQF2iJzcmPhjd82N9s24se3dQrpS1BnjArgndLxijfS2RAkoP8x5NYwGbGJFJZKA7",
  "key2": "51xYVmknXa9eY14pvPX7ZaKG17Mt5vMwcXXmyVW7baUYJ41UHKb1ghXnmVGD81niMuAm2mUuJumjSYMAemVBth8h",
  "key3": "5PyPKihVFgYMqz32BDbpL8af3QxnuVBgb3C1oDsE2i2Rk7bM9STRMUFxLyx6uvtxiJozto2kTVRqyhBJzjT8xxaE",
  "key4": "3yCbCNqZ6buG9enCmq4S199ESmQwNKZEBQUUhxWiFM4nWW5Pcvt7toPZXpjerKDVb7o3faZzmgMpLEJEzipF32Ks",
  "key5": "5kwMzgQvaowEY56mTPyGTgcTRGJ3oyTBSYq6fuda6Ra8LmLDjEuzDbt779PYMsVH8DavunFVrMU9JGCF2RrGPGrN",
  "key6": "4sgmbpA2fD7fF3CZ5gZnxhxei47zW7rSCRgZs9Te7JkdH6HDg7JsY4KELJNkAc7bstTYinZdwkBTd4ATKfAi9W1M",
  "key7": "634gtdkxX7DBrZwntCCkqcvGrqZXkMsgimSJ55LSzLtETqW1Vh5zPGJ9eKU3JYoc2ZdhuST4cd8r3JqMLrbxef5b",
  "key8": "5QrgWg4pam6XyJ2yK1xnrybvH2yfpXobQ22eiSaTCVvw9BRBNrDEuVeBBQi8JSUzNdq2BfkWVjF9818x1ncxo8G8",
  "key9": "2ryPZLzHtmagZT2htv4t7kaCRpyZspEbQDUEBQHmbDdzN4ATtXWMPM3z6gtm1hWJUBe68gypHvjovUsAzJ3pEsJE",
  "key10": "2jeRA1rgLLNfHL9237W5FRV5r5GC3aP9YRbK1CCAMzrBHTfoAeECNkYAywjKvfUECSRmGQ2dnxQZYjTQXTjvDChz",
  "key11": "3XQQS8gJ4ThDpFk9kDVtp4EmKcT5Q87ojgsEZE1MNSXQ7wEGkJNoonGdSGxqaWRcsN8FwKBuSA11TsZupp3V5SH5",
  "key12": "3Lecf5iyHG6wjKF4m2ymUx5EjB6F6DYDeMdsqVVGDWTxgUtsHpEyPPJ2oNRP8Vopuu6rQ9JqB3ELhk4Ahpp6PrSr",
  "key13": "5gUqkN11oYSByX6AZr7dbReYBNkb6HS7FuNZJrQ1JzFNmdnFtratJ8CSDpaAXoCGu8euJdJ9tbZ9iCSQArMovB4R",
  "key14": "5dSJgE3qjyASRP6WHi3ZfSuHSzxSk1SiqzFg3Dp98XBCr5VzaQgobxLXA2LsRNXsXnjTAguJcaXmLKc8CQo8w1hn",
  "key15": "2RpHozoDf4jdvHzfHtWLsDe4qnMFgiSSSoaqHAviwkvPNFEgdNJh1LsisVGYSR3Mem95dscuwqEi7js8wvLnJJLK",
  "key16": "5MVAEtZKr615G1oNrVPAkJdF1x85mYngTi3bmNmrAX6PD7wJy5f34zeUCtnWN6g8CyucdWPDqf1yeHZDWhfxibQL",
  "key17": "2vbYMg3vw2U8hLJELGYfG4NgB3KoEARTNYNmPR6LE5KYuABc6mr4S5X3WWzs5CayMUALh4DUUstSUfyXjjXQ3WhM",
  "key18": "4qWzS9j2pDn1Bq2VWNq4ZnZywBzhPTGbeCEFuVbox4gYjBoApHLs6MuhFtFC3PUYkbbXg1YJcCo7MMaHAkUTTsk5",
  "key19": "2Cz8hVqofexzrCjBC7tDD1aKezkKpZUHRHEHdfuM55oXUJwKKzRyLzeqkAEWRfDdHVHxoGqHp7uKbCabows3b85Q",
  "key20": "5HQ9eBiQuuAh9Q78DTBJXut4dUHxsidzE7UeN4ABMyyHbBQCLJhx7tK1BiRf4ArcmYSKhxikmTtnUoryWCuY68iN",
  "key21": "3A9QDpd55KGmpvoeb76jf64GpeWyJytJWcGjeouPuNU9LK91eqS3TLpkYiypNpC6vwQEHPexRcVRo8WJRWTsK8iW",
  "key22": "47wPBemWxqAEZQq8B7rzashDG8yRn9kS2Pb1zN2xRN6wSazfWvWDZP7K8eK25HA7n99r6wKaYuAhceAzkojDHTjN",
  "key23": "FJ6NcRsn935HC1NsKpnE27koLoN5Sw1Tfunn3p57ptog7HWk3RnPtRekLH1YHZjCzNxNkeQH2411qNSqLiASQbf",
  "key24": "XpbKeDYEQxfssRFaUM3P4mpawgHgERG71UCt8gyT2rH4HhGrBCCKZSnEXvJGhxrAceG1G2bEDdspeYE5cPGm4AW",
  "key25": "5QfXK4xmHHbpoJskCS4z2nZKtxSaLZ8nkxL1uSEpD6LfYvpV3gMHGyJNJSRRc7kHtxsi86cHQhvmncujnxSBzTAz",
  "key26": "2CtNtEAceLXjkXzyLxSNYjyVU72MNvBJy9LnFgKa9mcQHtmjnTXTiwT3ap67uQS6pDDzp5fCSkCxso8zaYWwDdAd",
  "key27": "5kMiDsupDG9uxLvWrzZQ9Gh32qoDCV9WgEnBdUbyQnhh4wYgc63qAG4pCbaEiBPfsSWZ92dr7ykCVMG7XitgGaLK",
  "key28": "5WWYS9RKnLE9XwATpkJSMniBLc59B2JsJqFcmSsK9jafpX6poBACyEmYHS5ztyZLopLYHv64Kmqob4MpvRcbgPLK"
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
