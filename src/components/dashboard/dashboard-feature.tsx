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
    "29x2cKWsgcsaC28qEEm9XeNXFx4J6ff8U2U7aDgaAJFYYU9w6xvBxaGbbisLhH1TfqW52xLzEJCcsGqwyCBjmFe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htZ95B83JcKoFTFaQc5zBvyRVGH5s8Bv36hinTjmgsjfA1L1hyiXc9J8bWuXamszZFTyQ5HMkWdSKhF75b5uzgV",
  "key1": "3bNwv4rj5NuFZmhV1d3aK2Yeaoh8JYDtkm3McqdV93wFDDNCWbz8vFTQ92MbH8gJR9zW15HWWzuqcUnHorcq3LAu",
  "key2": "3Gw9h8Mp8xGtznLu9MyaB5rkmZskV6adTQ3zZCToS58h9nNt9J74RZDozXN9eJ1LMgCq6mjdBrRFRQsxEak2HwmE",
  "key3": "5fVg1g4cEBLzhoBnpky2jmDSeKBnuKBzzZw23ZTPrTTg2sHPXHKqLkesfZqhSyaL4WqTiPSGhkGgfkBW1gZo9rks",
  "key4": "3RctSWTu6icGkLaWd1RVkea76dUJnvpmGdrCymRudHgCaxoF6Fmi55pakJDEJfHd7V4sfqgJ198gCfocVjsksZB3",
  "key5": "TS25iteisydN8XP9Y2qcVHdiXPhg1DBCsVePvUoxnTNvzAeHRSaCACfTSDwtHWCm6tmvGLhkPhN7YSSMrocrtpS",
  "key6": "3GRqtgfvJ7Nazb9WPaDGZD61Qu4QTKsrTHoPtUupbfA3QciSYjrNuk6MAiNJmRKJEW8LP8aEphktgdyhp2VX9UsK",
  "key7": "29hepZEckcr66R7oCrUgZo7J43P2eM5j3QbFz1buNwj4j7iusmyox6MRdybRFqCwGQwBVNEEoyeMg4r5pQQeAjDc",
  "key8": "47njWXk5MUSg1DcLDEsmQSWtZvUK3mDvHtnEQxEcfZ2US91xc43rdhWbtyzDt1CLYVts8ESCPvYw9tavNXfv9PM6",
  "key9": "4kUY8YuVuwZtdwQP4yU5uQhRXEubhgSXwYkhkYrwAo4NfuhmK5VD8TiTisHDHAMxxDTReQBTDM4BnaSLHF4efJgi",
  "key10": "VQ6spic8dTmwJgKeZcrEau6emvHczMsy8bsLQRewE5kekNiXL2prKbtx7LsLC8LdANgjk6yyQH83NkDBhtWfSGf",
  "key11": "4shXhve8J4QLyJyCS1c7HSNX36asqXs1Fd9dS5z6bmwXBFRyykmtqKK52gCJzoyLFAjW7ePG9SD5UXK4AfWJEcrA",
  "key12": "4znKLywSzxuoNVT7KbTsfxaQtw27v24gsyFkcany3rycEGfAy86Q3bDPeXV7vMbkhfXzQm7Q7K8t8jFraaidwb95",
  "key13": "2HKB3S5tuzdtFYcp3vqjquABRUmnJ61FfsAsynfyXaxqqeSD2eUTjwBJE6BAneqDxx6Z67Yc797As34FGScXtFhE",
  "key14": "4bQCK9JdQnpGiaKxooqtP9U3KpZX6thukP17Y1cRnLwVRydH4ijeNCormDb76UXHR95o32b4xyPHaNXPWgM6hfCq",
  "key15": "3CKDPBFd6GEiXekuupCvQM8YzYVQjHqQ1z4XPQmjSc7m2PbtsxT9z1EfCgWyYAbcTpQpbAagt1bfqMmkAAJtSF6y",
  "key16": "3oxYRBbVwojMe9Wc53HzM66R54oBJnUAwjV9WLAfhdTUSRBxBjgrjicMZZFwr7g9Z4faipwcMNohCKnHkuYp2tET",
  "key17": "5SZ18x2wHumSCzX3sbnkZXyhYb6U8wn7XtP28ZjMo1WMW1oFBMnq2LPjqDDcbVm6nsCAtXRK8gpHU6WiL7ddoP7c",
  "key18": "63UaT33GwRLEuZHvDsDd5BdYQazp4suH2L8UGMgb6pWvh7b8KCWF9imHm3EDVHbYuyVQhRM6gGRqBxcrqoPvk9iu",
  "key19": "3uyurSxTkLh3zBokPFyPEgymL4KSv3FcZtoAPMioSzMxrtqRUUESzEFjtNPDvtwGsPxBPGfThKnnpaLRmiNyTmgE",
  "key20": "45BLTCaRjc4avx77oKrncC3xYqxSfKnY55hB2QZAkT5CRBhTQadfSEjVRYWsTcCKV1FxSxv37wDfXTczXgwmzUak",
  "key21": "2BzabAxWfDW4F7EkHQydcDHkjDCoQ2QHdm6JsR26CVNFpFjuPeK24jLxJSWwirrSZbwm4Grm7LBYypYrvKS2CmDf",
  "key22": "YLFGcE6Wme8Ep8cXwyFTwKn8gak3xPESpjTyTeVjE37egFETe8dPqcVWEEUPXWMJTYZ7h3ucENGG8wiG694DB3o",
  "key23": "F8VYdyjh5kUPerX91wYH3cYLWa2A2QJtn7trZYV5TCfkbVubTERgEDMmGmucmTNASVM71gEvs2bjvCxXBR7nUKB",
  "key24": "2bVKHaNuj72YmCQ4t52Phz17LKJXdTpALtPBfyNwizRVt8ZBVs1NWWx4nN3bVnZbzV2wxA59HqN98zzpqisadFGS",
  "key25": "Gjq6fXSFdUhh1U1xZCVeQfMBE59g3Uw1SuQnNR9yMm3HjNaUKW8B4y1cm2N99ompaanA84HRSRHaCqia7RUxs8t",
  "key26": "2QAbD58bo8WhgjoWpCabe5urVkDKHtmPpw6zBB2K2PTtmY97oxByGq9fwFphAJE51JuBfZYwd6xpEq2WdYTe7oHj",
  "key27": "5gGZjtXEVMhvW5RthBmThNeL2WRVB4ufSJ1PAj4UrSfx2daKJYN72xiMBKhP1XzKWPcyrxiYNUGBZGfweNajS74t",
  "key28": "5fiS7N71Yp5HqEJWftZqgM4Wiqu7JyE71m2cSvyq3BFn4Lssik3gkTmGoLbEnF5urkb5wvjz7y7jq7NGadGQi6fn",
  "key29": "3Ke6oJyb9M4W5B7t2NwZPPF9pk655wJacykSx7T9Ztn2CGRN88L9XGJFw6U5QDXEeF9bWpRoUBVVgWNgpdr11fak",
  "key30": "2gJiTA5xMrbw4xnXyrtRBuc6qhj66pr1Yv7xxs7ZyeHrTcfxdHEtUzB6zws4ZuVxycYNyjAV5GcifodypcFPxzP2",
  "key31": "3bEZNzmqB8UWARzdm7QjNp577eMf57WTc7aci9ZgWrC8DVx7PHtShm2TWQraLF5JpJKjSUg5PpeRBM6aBPVbJK6R",
  "key32": "47BRtkSCFAM8nVZUjwFUEWgTKMQnQtU4pdqBTWkuwmAW5vDwrTqHexiSFyV2RyJWk1oLtuUUmh7AFyXsZkQbmqAa",
  "key33": "4jDvX6xbqnGA46vG7QcgRaAZvrB9FbG25TnNfrJBtHLNnJh9XCjzE5U5PUxub21E1xXhAd2UcGqFR2FhVr56myD",
  "key34": "5u7oW3sopk7mit7hySJqR2Wx9nrpb9VK2mBRnB5V6HkSBEKofD2tvNXTuSryYwMWgneigxsdzTFeYyMTtWcDVfCh",
  "key35": "HzcMcBfupCM6gbfxPWWnkgobBUKgUwQ1oMTFZ9ey3TAijWfikA8U67k2D5tsdhm8QN5KfyPD4nFWh4tAABEZQKQ",
  "key36": "TqQULACT5ipdAeC4TBPcVcbJEamRx55WPCweLDSZbeWPM4zhCgwCJWDCcLeJBSy9a7sg6jxLyYLMbhvwrr4UvLW",
  "key37": "57w7D1ApvRaMw8XvugiAdYrvhNF52T4xEuXmKdsDNEoFyckxuwsenxF2jPJ6iv2PCUcwCN9LpvzrD4esMCPhtgkE",
  "key38": "3n4DcfoLwZPMQ2Z3tLeLdocdvXrAqn1gWAWtKNSteMpyWzwjbSPWoLf62yGiTrsJRghYCLkY8fZsxgEsiA8Wm2o8",
  "key39": "4LHbWVWgLWsoMPK3fJeLUpQpkE7hoL5RAmaQUYhiykXHpxU9LEkyooqXsi3HokUZbuB69yFT6hNk7uPaueLNPZ6a"
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
