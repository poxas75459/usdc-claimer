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
    "2EPxrYVzueE2ktT1uAoyYjnEVuCM1Lgb5WUgJKz5TiVx9RrV78Uo2N96iCQicc5AwyAmJHsdgJ6RouNJtJ9pbt3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37q9Xr4koPbTDksSBrtW2dfZfHiStF4RnccHEZPq7fgxNLq2iqeRegk7krqCnFZVKjr3cM6mEUmjBx1sQS4JRemo",
  "key1": "38K2SabpLbLg3SxZDXqgLXeAuKHrdLtKuVGq8ZtyvBGoJhA74HhGh172hbUZFJHK9wCZkVdmEW6MmZdcGCWGVfNC",
  "key2": "2dsVp6HA5b49fS1CfaefkWSqB7n22FqedzyXAsn5gQSSn7u7SWjFk8kUB5vCP34U3qZHkrTgT9K9coN9iRdPs6oN",
  "key3": "3MAdzVkbSXLGsMWRCfMiUaH4kwVRbq4vsKbcaJymkgMDiiNGXcvNdsUAhuebqbhr8f8eFNYZU8erQMJ1BxEL5nSP",
  "key4": "4wAh4VovV9i3m6BxteHFVL9AF5WwMH6tkL7krAtetYSycEJTK49v3FqU5SnRDf1abC23WpttpdVs6X2DxCQNcfSz",
  "key5": "4nqJ55GtVTXuKp6mzSwBiaHvwSV7kQb9ENW14HPAG7GbFv7f8wZbs9Dw1GJjHmbaPucyV4wPVVEQZmYZW9kpbX7A",
  "key6": "48TCfvm4R3Ss19mRnNQkcUxUvY68VDcaoGrPfeePUi89Zr4bwcSyFtHaNFZHFfwxANCFdR2sNTa4LxoCPwi3xXjL",
  "key7": "5zNaU3mbtTwmgfcXxKz2HRn9Wpy87k8RnjgdqwYEuDjqbmjkoUEVZ44vUtZxB2c8soAkcCuYLzZaFoJn7V1xB2dF",
  "key8": "3CoJDorooy2uuaSfzxNsT27vAFwSbgAtVw7NL8MiiqhAEzuug5pX4bDRcBbrTf2ttqwZ34ZYT2ohkXV6tcEsNkLP",
  "key9": "2JQ8YQSTd6f8weVJJerA13dJEXu8M36apzweqTyLmPREhNHsBW8pALAZxGvpNkvbHx5w9EPWVr4q6n5HiN74WzCD",
  "key10": "5UA8e4hEzGDMFkHCefwpJvvARx1c5M9h4zRsGxZjhBMwyoQP83cGzopP3qg8QvsH6VRSFpdVS1iVGyvPA5DRGbg8",
  "key11": "22VpeBSKMG1FHyWfZ7yTTtp59Jx16uMMkq5Y3TX4k5CM6mA6h4rJE51V1EAZLJn8c14zXUXYpw66StvAQ7HEbDoz",
  "key12": "2wmyE8LTQU9Y8Bp6ad4StvrytcDGt9dFYdnPzrgFT2J424KaK1ETTRNvQEyaxLr3Pi4mKgGDFG5SNLXXjqzjtJaf",
  "key13": "4zHvKrzkYMgH11Wv8VTGeU3md6JRaiwd3UAR4jEME5EXrLfU3QKu9sjQPtrouAW9wBiZ5wSBWGpzjwo9yVsTcpGx",
  "key14": "HMyj2bYqjtWAiaBN63kZP9UXwWtLG6PceiyebLasQvvBgPKGofeg62trkSb9dg7Gehfz9EMKCEhHVLfGFApYN7N",
  "key15": "3Y6CsjZgB16iDLCZr2zo4CwfBhbgBHeiRwf9RcmrUomm3uBLEmPucPZymt2bCj7zKFhCF2Ybu89RLATXwXsrrr5q",
  "key16": "49zqZ3sonUENkqXSPV4B28jA7gF27x8ddzGUwEdfX1x63gTPcufmKirF7mgsmRyC4vbXu7UHtPsqrQ5J9C3LznEf",
  "key17": "2ArPhnapN9zxeDmgJDh9RdNdRssRDkhiDjqcmEPgv62W9yh1o45UBXSvYJPR3u3mrmpUxbLbPbjyuYyGXHLsKcLc",
  "key18": "5A6mndi5Rs873EjdXJFpY2RNwAiLyPPRPxMiHCfMfw3CNc3s1bSzTTHh5CfTGgFv3rJ3JmqCBwenyz1TskDUE3Qt",
  "key19": "5wT5JKeB4LPz7rQbAy3eahSs2aW9wMdZsckCLdk11o3EUEdcib74vXUEGWYSxfZxvtaCMwie4ecEaZhAEYEs84WY",
  "key20": "2VF5Xhhd86odZTMyhsy1LMEyWFz92qmtv985BDiBqraraY4eDe14qMRnCGmZSJESmLSEM15E3KSbhezdp3ZzYxQy",
  "key21": "4VwFHXMHiCNw7xtNXQfKpxTyzzfRbToKTiSvUFrnwtRwLqNRHz1yyYiHS3hYdcm6Df675cPvQXbtcGdHCwH7qtmD",
  "key22": "2kJtmSZyv9717AwU44GXnvUVaPytyhpNktp5XdvZB9egPNH7ur7tu4UjckBccCDpL3VUrqxUGRxQwuQ1zpTiEHqN",
  "key23": "2r3dYpzbhv4d64RXthvV5f5mUkZuNX2qxmLstRQyKiHbZBKVJ2yYpLodDQombWQ78icMVCZcE7WpxrcLgMNkf3NC",
  "key24": "3XM5sVYVfmNy43a6XyJeaad5UqKNSaB3tiHR72gM6RgyWrwTs5LbHwwTWoW3rPQDkwd2ZgPMWKfFMGvVvWMrE5pP",
  "key25": "658dtc6QaPQZTmYToRfhD77JzriMZJbdkSp8w7tHHt9tAJLSDxkaHRiEnx8rVBWMT9iChCukL2bpLqp2nn4aBRhE",
  "key26": "3UUpmTKixwgHYgxFvhuawrxvVQJrKipyqocSS8xDjDxuiSvfCJJyYWdZeEj2JwXYkeTQNLWgPMvLmPhtmHNvYM21",
  "key27": "Ej4PuotbRCkZQbioMJLhLYymgr8bxePv8eg5vdZJPE77wucDi5ixoGs2zUsAr6eZdzQspETjMgX4z5TkNVjSrSq"
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
