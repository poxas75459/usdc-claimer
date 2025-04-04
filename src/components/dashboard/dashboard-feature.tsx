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
    "5WWsQL1aRqDG3m3cjVKJwjp1LTJxfXmf5PHFgezhMW465erXFwLVtttBQRS3YB77pCVFEcTTUNDhoEc9fG29UPnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPryctHhth1D59bTaHqQky821G5gbJfBHx9QGwvSaErhauQRuB4V9J1zQF9egjjZKxAuCekLMabhVkobYqwEPsP",
  "key1": "4ditweuV2CRHyLC8ssxdo5poXfag7aCnF7WwMWAVAfVUUfq86j6NLnkc3yEagCLebwMUotACudvw2vgPUFVapfTW",
  "key2": "4pJD8YQzBBixhCaGKNjgAY28VGqBdvdHRfoJCjt5xgQufCr2wPGCVABwTdPmxJ9iairoBniHS3yDyMi3y9YHWfNm",
  "key3": "4nAC1MEzUJU37HGpaHmFhKNsNL4wG5w5cdvqUJhjqWqrJgKD9CZXLYZx3y8q4oNMEXUTnUmCAmH7ahkTVmygy3HY",
  "key4": "552n4YuiwuttpydSbLGqSBFuxahUwmyZ1bAdEDk8E2KXUnc1FkJ9rKxs8bp4jG2pZWfKEYcU7uiECHY7pPbv642n",
  "key5": "3vudQtJ8hdndS2w7mhJuaURJnmr87n14TMXpH37tsUBy3nb9K3f7UWgY6TBarzQqrW8TDCHn13XRnccQjHGc4VFa",
  "key6": "43Got3jU9GduzzWvSzZRPFkhR6Gjip2fWwuRpMaeuXVSJcuBV8b8U8ycpXpstHcZmj1AEASbsaMhn8CgUkejk2R6",
  "key7": "5FhiAAvVNTkN4gNuNi2z9SLSh3iqGyazhFvTZTDiTWzG3uo3FYG2roRUfSKarWrAH4sFgqiLJ1fdkEr3cUWWnu3j",
  "key8": "3o5ci4kDa1QFa74ApUBGeGbYgWryg4Jc7mGKHEtxcKuMNZz4dFk58UEKzErEpdd3YuRkQ1FjGV4FWQGV8ybDLN8X",
  "key9": "UNvKLbgFQ6szePnG3u6WTWKuqEyxzn97DUSTt82MMxgSPYWXRYosQdv3VWpQ7QM8NqMkS5oVG2xuN8agcPZ3ev4",
  "key10": "5S2KEBkLERMxpFaeRdcrVU9YqnHZQJSdCLq7xkGChPpmyVKa1DPWCMbmmJbDxz7fvRrkT37UQEJkmHHbvYytkRTp",
  "key11": "3Q9WP44xVGfAutnjRpEprvK9kAUCLX2nL5vjjqacNxTdUaPbrvJP5AxrU5T11EuTmRmwMyZn37AWhMzpvzJFajfm",
  "key12": "41pNu8AGpsU6q15Sa6fs33V91HA8iuxpXt4jtKDKpHtyQ5XPg58DXgxebajsKJHYPsRWfssdwLJT7HcgrpwvkfsG",
  "key13": "5EsL12DHDARdiY2Vd67VKMR4nc75d87eWEeSh5LTcEu2LxDKCERgbggmPM8kNbGq84xfATRR3fyeTX5d4utPUpYg",
  "key14": "3jA1NfXbDcHRFhdwg5RCfmB7PpWCDdkzvCHgp6ehzFmRP4YUkFek4Uwoa5MZ88kNHuX6XrQ164kAigm2mWYvRYLo",
  "key15": "5qj2mHHQr7Y5psabUyybgBxV6MXdoXMbWf4e9v12Bkr2LRZS9knSu3RoF8Qk4dhnbnea3o2ciCShhdLRE9sHQeqb",
  "key16": "G5TftPhc9VYK9pJvj1Pg6tVauETeuA2TLko9nxRAXD7Wyj6zhrcBy5GiRYWAnRCWuXSPnHThn3udUy7FUnG2boi",
  "key17": "5daW1DQ2o7kBgQfBL86qKnPEQWL2kVVyrvaHH9xghfGovRM2sFjzddVUzHUbNC18CbZPYkb5LTSPU3pP9SdvFq7j",
  "key18": "2hAY9CNUpCpwsu7Hj2RuCNa8MA2nKVJxEKVpcw2K6DSTqXaLThtTtNba2hHd4gPRdZVvgMFBMQMHt1hiKCgr8Qgu",
  "key19": "4oWRpfiYbypcWM1RhJX6duqjMMhaRfLqJKYgBbjpF8tivKGBHeztuH11pmhuuLZqT4UWDdpoPVMr4ZBzifNrw9NE",
  "key20": "4AgnQryiNA1CSwxM64VRpQh69esFM1mCojTGDWwB8hN9ScNK4iWMi3K4JQyeugJw5271AvuSedarFStaeKY5FDsW",
  "key21": "5FM1zESMpqdwmgxpwoNqZJPGpYmtJD6hU5p821AUUA4nTCWPWtLVSP4aD1pazaa1p2mTf7foLKiiyMQ5EkUiJSeL",
  "key22": "54ToxzAFPaTVArF6GTzTz5GCJRpC3r2bEWDymJqETvorvwQMtK3qQiXJdKjdHqSrskrZZVpk6fUrEG4Qg5NxcQ2K",
  "key23": "3feZvKXftbyGpxFPZNwfMVKPXgtAua84nLPhkGkTraLFCdJQLqYmXwh87GT67qpZUWW4HQfTNwzEWroEvmfeWaLC",
  "key24": "57cgojvs3tj1vPBezM6eXdkJYX97PCEhYZSr18xZsK4NUp53i5EB5LgWMWGKuw2jSnGN91L92KLRAAhDm2k8iQph",
  "key25": "62YBgCqjtP8RWtVZQhrwWY1kVGkkwi8kbFZdkWHr6s77Y1you8yW7ZLMHp2TNLwcZ7Fw1cbvfQGCJBoY4oYoZxfV",
  "key26": "3WkPKnHUQepMpncbtyUDtUbbuNZFdWWbkA5wAyMRpHJ75PPZBKmQ6qSqtaSayAPcZGM625cXx7dEEfZuedRTB5QQ",
  "key27": "3EQwazruSoB2tYAz1rriTi7KrrPzJ9Zjubfv8XK3A22dLiR6hw2EvDQpkySYToGX9KxuBkgPUpaiHknEkHmTx1t6",
  "key28": "GhXNbJhvXVNJBursDqddG9R3kTvG4Z4mKiHxnrbYJSg3UzJD7ZC11hCFjRyYGysByjhe4Woi8PaUcdw5UpwYqqG",
  "key29": "4Gw7mJQAyoCGzTwntwmJdQPEQXy68tmALUS7Bq2Ucz6cUPvsjw1wNXXXQE38rukUTtGhKEtNJBw4Pk5GnK2Xr4dU",
  "key30": "bKwccswxadjBcs4umhwq5uCkEg3hKXaoMBoVtDRN7zKMLAt2FWK8dL3LtRM2esxDVybcTMyHvxUy4TUrQoTAYsr",
  "key31": "nnu7rDYCYJ1bKjSA7hisNypk6Xtch4rE4tdbATQTndcz8KsxT5fghZjYQe5rm3cJ4uGuvirftve7JyebJWbdeXF",
  "key32": "3mXEcxzneyGeX2cvwJSxQp8xLv5pV1W8NBzKK3MnK2tTaLrxZkMFESqRXRgELkTK8XHtzedB2HUftFgKRiD2k3p1",
  "key33": "2HUyyVFU5NqWTXbFTG3m4TaK514t8kAXmd24LVTSzSH8mp8xt2tzn7JNKiUK2PVCYCnYCFpBdZLqhMDeg8TN8Z5B"
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
