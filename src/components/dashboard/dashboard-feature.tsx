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
    "4JoxBdMs7UsKy36Fkr5DJCLy2ERm22sBrbzZ1dBHgZnJpbc7jELfBMqofNKYLxtaYbWvuxEtaQyhwhWuGr9GL6g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhk45gcR1SbB9zLiDv6k5o4HrJgQrkjUjgJDKEF7eZ7UkvnG29iATvDxW2kKixvJSGctJ8ZMFpjbVvKmvZeV2fz",
  "key1": "VV4ADBR3WTx5nj9iBaKmQ3rQkWS5APdcgBvbWQ48LkqayHaN3zJPmTCBDegQWNZ2HmEn1SyvUg6A6vMCaPX1JS1",
  "key2": "TxiDGqJwZsfP21rNNz8sXajVi7475a1jrMScpXKA4xkghCBemmixB8ZFUAc2dyRwXNmezzPSQ8cDCqBidSNHhBT",
  "key3": "2Y2EDNRkXAzoG4u7hZotk9AFxpPWkCcpijaQysmZQTcXaz2brsykm7jwpovomTADDZuQWmZ64JMwcGDjbTgLk8xb",
  "key4": "WybCkYMjSo45ooD8mE2HX2tTg2sRhPvnmpnFGE4oUoRhUk1xsLqzD6xYS5LoNjrQJuMpFadv9fHENy5GPoDCrm5",
  "key5": "2HjU9eYHTm782vuRiQwDajyeF6RdCKtoUPYoj6xqoQXRacAtDsSFRbyXQEvSHfpAPvMjXtKQ1BqbcvkbRTgkFqhJ",
  "key6": "3S2HG13BgzYtq8yR4nASXCHBx8K693sTyzGWr9pVbS2d51TvHxcotDS5FGLBeX2PcaxMwL9tPANRy1S1EjGEBTMx",
  "key7": "4NmNfa9naDKSjeEYJBpVVDBgk3MuZfJr43tsaXZpw8KjRz2LivZ6LokVphXRmr8i6j7KVSRjriBwAjyG9VTNBRPK",
  "key8": "55hUnzDsZ6uvSgMK5juZPEC98eN77g7QcJir7iFgHpoRajhHj4yKt6iWc69kRfEuaL9c5n1g3VPy5cDHopyZyRng",
  "key9": "4Y5rMxzKWadU4Z1azY3ZCnbG87rkENmB6cUzjmSAQhrQAL7AQg3xmaHVFmtiuinaG9ourMQatBuk5hv5P3FfU6H5",
  "key10": "57odiHkw49GYLCCBH1zUZ71hefvhWTyjNnSHPFddKyLh2v6CWojAQLFpsEpmrxY2gVNXMfTUyw7bU8MPVKUDMCzQ",
  "key11": "4khGUdxp3YUt2E9kQS4B9cmTnsZtCG3jUyt5ZpjPLqk9ebpKGNw2xvgUncB9TSjArC4xzjjMEGVyPoceZ7ASDGa2",
  "key12": "2cuPtk56NuGMeHrXpXuFhJdZ1iM3auZtsQQmi9RbnQyv6GhXwvRUFjM7tJTNg9Si5VBMw6iUwAbxvf1BGN9hrPvM",
  "key13": "2wL4m4Py1KnjSscioHdJ3QAC6Mj6ayNBYiTfr8XvZ1keHsancVCMemx3RYxUog2UkbFsXjz4hv1PsqjyxWbd5utH",
  "key14": "52zcbQDukR5rBZR3waf6TFpuDMY2yU9jF1GGMc5jhwj7rjuEwMzKuND8n6s9RgffWrxv3VayuWViFBGEGdDeXKT9",
  "key15": "2cJSaRnixMu9PSvPfTH5N6N9zYtzuZ4eb9EmP1HRTcwM84hPf3ssJnf7SzQ6idQq78kcKoJuMQscAHBVWdt1TufY",
  "key16": "4dpdnpnkw87Zd352NGwZPe6fmsi8Dg1fD9wbEWz94tR6gezLAQvnw6KM5K2j5SB5pnBQDHn69sq47sPsy1bjbsWg",
  "key17": "4Jcy1QsD8q8ti8Bd7LXkpas8Sq1m9aJgJjXr7E3vzXUzYyqXsmvut4LTcdKAPNeUUaPPY6tiFcSjosgA1tuk1mVF",
  "key18": "3DHbNAsA42eKiPkLsnp2c5cbn7tTRsPiZT5vty1AuBrewXx5LU2X2oeKwHwnKbksKDdCadjDPVoT4r3qyELDHivY",
  "key19": "5iYd3eAoddNGWqfZCAAi1R2zvRvCkjaoaSFFqDaKVb6QDWyukrcgueXTkbAg2er7Dt7QuZbqwLp7wy36cmP3KxSh",
  "key20": "4zzco2J6hgePEQTMW1RR8n1Eq9P4WaeUBmVgG3LETzzeKNinmsmAsDh1wHpTV7YaVqWMQDBpsBG7Ry5Vx5dxn4zq",
  "key21": "65o7KozPfvk5ueX6u8aZhW4MBXgQLho1VQjpgxAjcLcVn4aF1ohPbztjXdSPM5dtz9tPL5Qt4tTZqYNs1bFhzBYk",
  "key22": "2Es278Kgk8agQMr31e1ZC7KTxMXWwazTnmz6D643vbTD6nFVyzox7YqWgWkYjb7kpHVELLxaptaQg8bPQ9Y2JwZD",
  "key23": "4iCVyN6kSjMu9bL9nR8iNYH3M2bXUABFtLJeKSQXPEGTm2edFBjTzmuVfovXm6rMvfa8CzHDxE1Dqcr7NqkaVDr7",
  "key24": "3zY2eZMwxd1ZXFCHzjuJR8nuRyBzKxZgcekM8Ap5StuWcdbnMb6e14MnSM352sFfcNntk2L34b1jxkiZUi6BJfbs",
  "key25": "3jZ4cTa2kgqQuWKvkeVihW4wTj3mL82mC4BcLy8WgeYJxxd1nWhDFdo7RmNFCK3FtA1ouSjygTdNioaBvZXQimpp",
  "key26": "4hoa5jLMZtHxFaVj9xogjT57YZJHjP2rnKD4XCsbNrY5GHsWvEHUGnCAkoYG3ifsm4hbKGCvSrqtmFMh1JFaQNfC",
  "key27": "51ZeivzCUjNmbdJXY8ghTFuupPCxH8HwzR8iTg84Macyx992ZZnqcmoiK74tNJqUv9rwbsdSHjxZVxcxwvLky8Ln",
  "key28": "19h6aEEqHpa59cjsgSxkL3GcUJBcaLWJYHAKspKQVB6wmwfp3RqviSGabBFoAitEmcZMoxz5qjWBT13t7SuVegM",
  "key29": "2HjwabpyX4Yu7KTy9aY4FWAxUXBKnfwNbZ56TSU38DWYooKJSu4vRAV1cNF82bW5ma5FrxwCNihNMxSVhLdnaChq",
  "key30": "3zWo4FZfTUYVpJPbUKimM7U4k1BUDFKzNjZxovmMUh6b2nrwTp9AHPrjaVABDYNMMEf4iTUZXjsKfNqH6FHHQPjh",
  "key31": "5NnyCWKGqf8amkyjfc12VtPmo1tc3GgdbytnupxThcN8AAovkTKs2oNWJVs81yLHCFFqJ7PAcMkHLms3vwwRCoKm"
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
