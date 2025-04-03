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
    "37yhWw5RwHwnQAdktmHhaaLeSUkhXuvjxgFzcduZfgPi3zVnGPUHtSuwDp4sm4nq48qWYx6gCzpd1jHaaoMHZEuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eR1zQar9ryEreGmk6CtPyyQvKbzVeoJvJUX7AUfGpJoUL3UCUSfNExVNMDs4yAsTcyhkzk2rF4HBbJMtzS1oJnw",
  "key1": "4RTf55SQrJwvNWSC9vvwhAHVEWsGfgRE3FMWx1xToBR3nSwHrPBvLFvfo5eDwZNWuKPTcBZBmcTHYLnjd3pSJ5WF",
  "key2": "2xnah6AfPGFW6PAyqJmqRtdGXwrxCwhk6wV9LQUMjb1PUsnNHv4wUtjst7qH4LNXKv8KxPR3oesTQAcwKftsZVFX",
  "key3": "jVgZwEPLa3sRGDfPz5SeepLxaYvgwXaMVM4HKmFHMhcPLWDksbpdD6eG6mbaTxTzX6Nz7pB7cLG6fodo76AGt6n",
  "key4": "3uSppFXvSSKmx9TFPRPMdywG32aep2hKZP9WVNnU4bJg1p2ZYma5sQ5FyH4PsPypQLGfAWzSpESyeFbSGYdFLeBP",
  "key5": "UGoQaVS3M2SkWyozTgHs7kZ3jws9wrgKMXgz3PR1PXCJ1PiaFM8oPo5uMusv4ke7GkU6JyWgDtgQRWuEw3HzQ7a",
  "key6": "4TXY2xTdTLiZcA1VVJUqKfWykEJLaQxzaqnrVephkem1qHM88jo1KbjkepX83onWWLTnLvDkknNF1Un8fouaQ337",
  "key7": "2romnA8jhhc15ZESx4ksnLdCFuiyGRjSehSPdukq1DeTt4iyj6wbnmVW3ZqA9BwKeMPM3z4JBeSmLdRsc1oumM4E",
  "key8": "e9twa2tqVk74kU2qLwYguzsepC6KwStcWrQuN5bs1tQCcFXERcAHCmEtzwEimPymuMvqArwET3Uv5ZUe6xUgrEC",
  "key9": "31xKUu7Ju8nWdm2rcfYXuUCNksVcodWsoPEXGN578nap9T5BzZA46DtuU4vTcrkDLXt1ejrnQeJccMRhZyTPyy2x",
  "key10": "5ER2weRq6Wqe5yGit9ZNWuSRbzcdKPeRoEaRfCiFt3wmcUn6XBSH1eyTfD12KgYkvTKpLSKpfBCRNaiHpcf1sJso",
  "key11": "3PfrEMYqz6CPwgXw9xdapHaqb5zUnPXHZ2E1kD7z6WDVYoHps9pUwfjNqZp18ETr224EfPvbZ5mY4KEeCDAF8rnU",
  "key12": "4d5JkDB88VoTVJSrwxeN3RNwUSj6ih9sVbC6CMSjGHEBJQcxqbmkSttPDP7QsDYAsJ5X1NZqWE9odUXb1BhSr1tn",
  "key13": "4dHZZMTFb783BADVwjLzfjnHKJwU2tMzkYc6YFgGWk1Ppc6jP8eXhk47t9w4UsVj3r4gibu8Q4r5ydcKkb5ZAkX4",
  "key14": "25XSvx9wr9zUo8axcwzQkG93V4zKn7prXd2KWKY7Nhac64uG6N26hWg3BUfSzLTb6p2nfYkHWRSuqiAtcbJ4D579",
  "key15": "3SdpswiTJC2U1dWDjT3j5qp4LGnyKMiJVnbXX2Ts9AFtkt3ZApo2cvzBjttVSSTetwz6ugfVMz4U7E2JwxCvRycW",
  "key16": "tUsR5zmaKucWmk48tPNgxrVGuHqQ2VPkLx18tmme1dW23BgmuSnGmo4F3h98BMvNxHrHXgvKsroFKw5gV6mLzKa",
  "key17": "4ucBgafP5i9cDWJeVpsyTN9oTAub4UxP6m1e1eqcbXodeZrNNMuEJJUeUoeMiSv9EcnHsa5a1Sqe2CkhJhPq861Y",
  "key18": "2c7rPuXv7qpudyurkqkvaqoREhp3ZLbn5GKgEmPDueK5qwv8f3jP9a3798gBjRqQQAjhtqHxpEN9Tve8NB2NAogi",
  "key19": "5DjiBEENZ97DhfgtL9QPRZ5234BSsUQvUmcRAo3j8JbNy4uEJBWVjG6ZgHQMPtb62SwP1x6x7cHUnrzMxSLNP2Jf",
  "key20": "fjWttXWq76rBgY769jeUeavQ3LUSiRENbeSATkgt7dUfNxkmwednrCcLN5WQH8Z1CuuGT5NHTXfAysQD6dkWSLt",
  "key21": "4t2jiqj99akUjjxxQQ1kD2oDeJGwrEYnBeDAjf4PD1fR9m9rM2USaTPZuQiTHbhSfU9xBjWDaJQFzeHmDuXgkKCK",
  "key22": "496yuGtkkxXUKWrQ2SM9jSQtBLwtbYNbcx4PJGfv5a7BnbcaemAuhw1ep6TzJ4EPLbvUk3ZVn7CbwzCjpmatgpsr",
  "key23": "2J966nEUxzPcRkEa9XG4aKznPUHaYSL1o1QWfeZyN4RU6nRTyxDCCMaRB9fUbp7xYxjioS6qqrj1dwvy9bYWGCFy",
  "key24": "3C37AuZ3BgZa27xjxCzZjRCQYafuStD46eJSQCk3kShCkiVetjK46SxncAy3y3dwGbNHkXVk3JWzpqCnTmmZ7m5b",
  "key25": "3MCeNVYifUKVvGbSwn3YLbWFdvJsPUzviP13KxgcbVmY9bf3sbyRbYDE18ZTA11pap5U1oAuhSHzBZDMroRJLYnT",
  "key26": "Q2x6xxu2qPVufXWwETtxSofk6McDiATnaE6EWwnavxSEkD6onY97ym2677423Ws6MzAcwjHWi3fk53UzzQNHWiU",
  "key27": "5AbYWdD87Hu5Bv6717SDRZNsST1RNarrpAadQcVtt3SahM2fzRGnAACq1KuPBAXzsUJsczMeD79FdgSqYhsvxLwt",
  "key28": "5VMuUbzMzEUCqi8TqnjWrgibFRCz5UL6mm8t59K2Ek6Z8JVXxpzxf32MGZWoaFCQbkfz893nXhyTW6sUZUkQNyXB",
  "key29": "5uPvTM2nzFGY8awbjRSDmCWSU1QPcFTkCZXeVp1MrcrhTB482jgsve5utSH5u5p6XCkCPFYk5t9QxjjohbJg53HV",
  "key30": "3cqek8H38vrBdrYQB39HgnVRXXQpDt3dxmF7keDy4saogTje1SZFi2Ft9svBuQ54odiEWMcYqi9SJtSAPvPVE3nM",
  "key31": "5WSMVuDsGAG7aev5wUuidLZMUCiPs3yBmAynw2TGSoJLcoxmkYw5QSP56xJSeyBwmGhHEmhzMKPo317ATircPaSi",
  "key32": "cFGZLgEhgzn4WivuusrNjVfLp8PKS7opZENojJrRFPM2fECv5DNpR3dCKENomCJTzovctU3Ld3BwpWRT4C8LAoF",
  "key33": "3HZZ9g6kDhd5NtXxbhHieF65FiaXCcSWQZLTXn1zznXxq6z8dUfdPaY8YdQRHU7XgHRwygaqhqUa7v7H5e5TWkYW",
  "key34": "5TR98tBFRrFeVZMo9Rp5cRzuKDmRhEogPu9HZk5YqkgYffwdRW85ikFLycxrM6r8tTpW7Dx7SRbZ6M156tizBEjb",
  "key35": "3Hv6i3rP91yhNYCyHfq53LAFQgVnRj5PrauDgNfohKdjsE8QR6QUBFWJ8ZpyrcbySqTBQGBGtSSJvckajAHyrwxy",
  "key36": "P9s3FNWs6tHXCr8WG5oeJnoBnzKPC9kkTgzdriBCGPktseqDAftQ8XX4oatsUfoxowmeAUzEAYso5YMpjSKBipZ"
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
