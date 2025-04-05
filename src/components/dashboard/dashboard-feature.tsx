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
    "2iZ3zdQ5k5oUNPWvfU5dtz4iCXUJAVj5d5NrfwsHqs45nZ2dEbWDLtbAteW7vjxpbTGzEmXcHDcFzPxyZsHcqEZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZS67zLVFDMLcziqyX236Hpjb2QXpvAVdbi5voTjJg7SAqg9hkhDePSrsQUy2SqkQCgES9ZtF9oXGVA6BrdK8AJA",
  "key1": "4nmvdzNckNkVzaJMXBBKErBMihJQCatLUnff3WiUnxFbCnLjtsqYVX4cgrVpe1KVU9Z11S32DSX386w3sTZzdsHN",
  "key2": "2YQDxdpCB1MJDd3F1vtT5Gd5PeTP6kN7UKJkSm5FxqLc9zgxtqKcCDQrUoytGHAENnWa9DEvcVE3zGePhTCuw6En",
  "key3": "3cgZuJMUK745YMSkJZDCBexdHiY7LuNrBat1T2u8YBLiKmaVFqf7bF79i2UCk25VCVUtJoUQZuduogZsXNsTP1sq",
  "key4": "5mYX1AVQsCmiNiu6DgGb8mBoHwGzJeLJR7A36Z9tU67PUwWLufmwJzqA2EbpfiD7XjwxXEFQMb1nTwzk9vF8FEEb",
  "key5": "2wSj7ei91GMdeEBGRJKgJLw1PXjx4vofti899oNed1tCZyy6WWMo8otxfsfNcugkK6BxQUHMqHULrqLaftYV7FBB",
  "key6": "4icZmCw4mw2XzPoS39s86Y6Bsxh4gSGXPxvMg3xC9HotCg9pbwVbvEMwjPd3SLnaH7iMxw84afK35dTczYJk8nHx",
  "key7": "38HREkJ5rSrzNkqLU6cJmwi3vazmEwtpBg5q9oKBR2YeG3r57WxdRmY1o35fvGe1y4kjHJHNuav9BYiYm3FdLsd3",
  "key8": "5ruyUxvpk3kGKecUf9FmUBGakCPxhVitm4LvsuGniYcpUbq7KaTcVtAE9F8Svib9MLZmGTnahyPgV9K78hRNiYwQ",
  "key9": "4fH9cY5FzrhwkY3RKcGvjqVBDWBUTy9R851zShL8x9b7WFz8RTSETCg2rYjGMB4aXcVz7v7cKxXQSEuzc74ssbAJ",
  "key10": "4bZpjRigdwr4vDmSteLTDTdquD37HDHGynynC9Zp9avDagC4rpZBaZFwiNUrffUMwYMzpxVsUmcar1h9edXBK5ZU",
  "key11": "5KEeZEpC8po6RPwJSzmiqWCeSvrkXsp2jBiyEYiJoTyz7q4cgVkosVYnMDiQ1noFCp7PotdkbXxgz3CrTdGcLf8u",
  "key12": "3BXXSziFpDPQL9KBKWwN3b7CN2RvKcoaLzWewfGNrzsXJjmSAnu68JxnnNTcKTUDqGPdarj3EpAqZmLBiBEsn9Dy",
  "key13": "4d5uYQ3Pdmu5VKoW56jUK2xbYrVaCxaid9NR63SabW4YxrEXSMLRgV46AShjYR2oHAqRW8i2vFnK2Jk8SwuhgFKA",
  "key14": "27A3gQTDJGbCtHUGzsBx2KNdwjWZ4t22iKNHTmymoozQspQ5q9Xc95fKrnMi6zbpFV2HD6G5LQJiTDcc4qtkFQaQ",
  "key15": "TRZbv9DbTQ1XNogzQyz5fF4wB6X45JB2ctfo4tb7SEEJH3vQ14qqpyYocq24kiXYTkZDw84Ftir2L4V1ruhD3Gr",
  "key16": "vHciV4JGgkN5dTffGXXBunp6edusVu9mfcUa8FNzQM81eW3FCGUBHz9jL8LicuUiYNBrXZqLrgJNvHujVCqZaUk",
  "key17": "4AoiDo9KpTJn8eDQoN34gtCc5zPnUW86MwerAkVpqiPjtiLx78ap6hPZUgFqHbWb8VTVBqWuTqDc2imf44yuAr46",
  "key18": "8ywSoiXuAif42zCjMY8sD1dRtDu2HmgCUGyz7EsZjGX2aGDsP3nbxTMneYUqThUvKsr6tnUTEqPr9tsTTZaQEYz",
  "key19": "2coqauPvsSSR9HcPKj6ZQt5q9UamcFZnkrD46jnhivLBCvjqwJw92Z6ByCUWVnNgEbV712S5rMDknunmkivcMsdj",
  "key20": "wHEE3LLLNNdRYiouaPKbFj2YzTFui1ZPbLXNpJbNiwVPdyHeD1DPZ9kSSMPWC8YkpQz3NhXfXLS8PrkRibunYCB",
  "key21": "Pe2StejUTwomNPy9BNWAsnEYchmszAnipLwAk1aVmi2Y2ef4uLhepneG56brAj5FAzmHGL8c4XCWmUyEQ87jfm5",
  "key22": "g3UB7WwQh5YAcHnYhBnsmQ1FZSPL52eKfdBVUhbwRopjTh9GsYeRGncaXsNLoUUdtUCao7KnSgC5qaCzyirnkP7",
  "key23": "4Hdb7J8QAJDg7pKcxferS9G9fCdFGRXMkuBX9JwsEHA37i9LHVf5LuNuogz7F5PnWzxy3aS9a3XjFQgi9uTHgCTT",
  "key24": "3A4a2qVU8ar8zbaqy8EMUcUwJZLq9HsbMCKNwRzyt5XxVuVeYbGCtyemrXXzYMFGCpNstsR1iDyB8NLt7R19Wfxf",
  "key25": "61fyQsRRFPwajdvgAR9ttVM4pBzdxQcjznRfpqkh6W4VV5JxEGuYfU95bKCkgtqsdhwiwELqDLTDrJbjGWEjCEy6",
  "key26": "4pWWWpXGsmfVHyVqo13eJffDXjhQSq83Bn5x5fBepXmx7TNcNuqhH3hu9gqedTh9gvM149EUJUUpphiJUvKfew36",
  "key27": "5gf7Eoc1nRczAN9PxYZf8K1eFZD8rU4hZAiJnQFVku6dBwKuynUQq5sGwuWVtUaHibcxybXSnbmYobmX5zn3zr3R",
  "key28": "3btFZzaFArsLcMuxpXYRonCEVDLCRy3qrFWrFVS4bv1F6ZVFSoXSQoqpckwErZG1YQfQE9S2T2WGa9ur2z6EevYZ",
  "key29": "4tqxZbCdt9NksTqpNZcv3sUaH5D5MsP3azpR2qK8ZXWyZ8kbLx371JZbDrWNJFvsziZxJLwTXmTFwLnTcMy8H9TD",
  "key30": "2dooKTvhF7vQ5YboWMPYz3onWRpgweKJ7vo3TTgxTw3XCZAyqubsS2L8oE9WQax7xYzc62FF1fuBP5xc6QUPfEgV",
  "key31": "59aApyTedoHp4Hp4mBty2u84EZLfU5wdDjgczWsUvABtyGoXLiy3HdFi9Bt8mTwB2UcRs32zPSv6CTLjruQFPPEu",
  "key32": "5fcJ3PieQ5zz3CNaFhD594wvWn5Ko4pevBXzSMpwgTygBkfgQ58H1pUwcGjcgo85z7heSXAXXg9GremHgozxXMsK",
  "key33": "5wrU9pQUnqYUu3GEcWkLWCp6RiHPiQErk4Y3sAPtU4TxRoJLLCBVpQTWd1YgsRiykd7SzTSPLCNtTHLnKucgyqKs",
  "key34": "3sVjisbR5NdWD1PYFmwwpsur8dwQVNp2Qq7vapzXqeepxDHraZwvXBpMLETGibqWWFEfWP71Xm357nCWLppvDusE",
  "key35": "2GBe3rT5DarZguw1LYtPX1A6zLp7B3RcQ21khDm1BYby26LYmdfT9Qogz89KQgRorN4AEqYmeDPf2NADtCKxmU7k",
  "key36": "3YdfXqjz2mEiddRjMdqWRs9bxmUDMRopRcX3MeWXVp8v3nAJu3X2ZheKMZGmmGiHqvuXcYQ3MGGZKgtw9tbheews",
  "key37": "4xhMtjSaio6sFQo74d1EqMiVuf8PFAfqG3jbKdRRCHdR1uNAreYsiqXrM9peukh1GenfXvwVpubZmAJsceFVfXvr",
  "key38": "125CZ3FMFaezANretJCt3TwyW5BVLqjnHMLo2r36kr7mXXsW2uSEmBqbYCAjbxDtRkacD1e1ch8KZ1fr7oKkAS6B"
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
