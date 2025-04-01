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
    "4TEC4oyoVdqu3Yy9gPdivZ6Nk4DxSPPDnRpFbEA8ozZ7LBrPzdPUE9eNqJ3w6p5vWAd1fGAcuxZtWr8BqenBmu11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ysngAVJa4kFX8GuWsCnCb21cyx4VFXtc7k6HhRvqpTfJ2WFxHqCaCPZVK3tJKc7tkGoZaDzSxQqKKqEh1wBnXe8",
  "key1": "3Lw87rnr5FN3uXYXfxtVkswkvCrhF1T1j56fMunsMjqCFBm3siFfJbL4P69HwEQ8GW7DH5swz3YsJWXb2fNg7N5H",
  "key2": "3GgDQgm1mJC2Te8YSaR1xmuKPsNEEfxWNMCTTM5fxHop8MBLXqRnzC8iE86tNh2uT3uhgg72dZZDUK2sikMU2Yqx",
  "key3": "Ph8BPyQbJB3T3pGjUp486GmyJNifggXhntSzXgEx4GWihLrMAzQKpxpXoL3rm1Vb3ygjkpvqKjtvMdmp6gmNFQ9",
  "key4": "3gvqc661Z2G3cYior3aPG1W18nTH4qMu7A5fyuPX5PSWqcFUFeWcbA2KKmL4Z3dpZyFDAWD96BJjAZjw1kAk2BhU",
  "key5": "4z9XHjZPDLsCgpsPUyVJFJ2QhE81YnUZnvguC5NVnNivAVg4WzFBxKtg4PRL8gvnAh5JTsvp2ZX6oBhSc9EQuQcL",
  "key6": "398uJWjXRJTV7vyPRr3Xq5Zy7Ut8kfAeMRYup9CMQ3esu7GKhD6BZfR98jH5tLxBLYVf1qsViExDmpACfYGpQNCr",
  "key7": "2GzxZkU1Vs8z5o4nUDw5iEUqnwiF5NtS98M5ussRq1U5FoSEdEZiLoEBkiNPecReRFrDwgXEdhPbFuYq5fuN83xm",
  "key8": "oQnpEZAaSctFWYtadogsiuBDEbhEVD9TuXgn5Ey2umQh9717Zfw4WC18PUPim2c6kZFGh4Gx1pdVArqNponhLtR",
  "key9": "c6GGskTdpDa7yUMrSZCfS5CrLzpbwiGML7kLwPRjXKYKZgriHroFe7m7aUwZwtFwGH77GmcR5vD5gatCHTp1W7R",
  "key10": "4Djz9d5hJZkaknczvMbnJbh6gB7nLXGpb1MTzeFB2bWnwvk5Z3ufzqMMmEAwmpFk9uUbwBDrQkPmRyEENXY77uMR",
  "key11": "5P52RKqW1guzBLTobnVoaZNQCbhpwvnr2sCh8r7knTE342D2DDdpZifYpg2TWWDLkVkeyKDNNz7nsnKphnd1PxL6",
  "key12": "4T2RqkGZzeXSZo9npPwcTDGytvUVTVmM4Vb1GGeCHwCy1BxGWF8L73CVJTcsUKGqYR9yCNfx89vvE3NgmTrGWCNB",
  "key13": "4TkNC8ZjmxqE9G7V2PQfEnrhF4MuJdbQzvS88KaYpr1fBU7tXCKegY7kxmEREpMf67NWgxx9TtUrXstHbAj5jUMD",
  "key14": "5AsnBgjSnpDBkFA1KVPsR7gen5xm4vBcJtcgGzYVguYFe35bGkfH7YGLrLL6X8htKmgoycRaneD1oixMvZvEjt1i",
  "key15": "5vnQUdVuaBakm3gFzoj2o6VSjjtoDtDhgN2vf7neMnvkooTPCp2X5GGzPjQhBDWBk1Nq8T9bsqmvjpNpLsQC9t2R",
  "key16": "5mDTJUHXMbiNAzECgLwDjc31cc4tNyHBzud27LjW47f8XFvQEvQ1KCzPWerp7tCZdorA99ZyWEJwZ6LpYZjETKUE",
  "key17": "61ZqumEhQUQ61tP9gww7tNcCSebF6WBJWHAZJfNB97XtRAuyUef9DwunP6Ai4fRZSzujij6uaVPHvg5D2Xg6tLQ7",
  "key18": "5nyjbhVCPM8S32TPRXqTyiAR5Qvb3sqtFs9sc9Yot94GCuSKGmMuKDMdG84zDzkC1z9gMS3QXVeYbQNCHuQvfcEy",
  "key19": "51KLYBsCrMVChR8aXuvJ7t9DoEQ8dVLRG2PFAe8tmJUv1GQGvjixR9t33m7aAXWKmhhernZNJPaeDKU95YQEM2km",
  "key20": "5fcAUNUgioGQgu3QxBURTNkdDmPmAfaeB1obx9ajue9v8FW33Go52W5qvqdJT3kqpcAGkBDaqGjffenjnJhmwWn6",
  "key21": "4kfVoLdvU7v2PH4KGf1Df6UDEgMdsPqumqfTCtGDMhTpE1ZHgE7ig3E9n5RqTGS5KrSMp2T9ta6cWMruxpuUEnNy",
  "key22": "3LEjz61tetTnP7wUfekrRCtLPYXWs3FqDcN7p8qcWwgcFGHmJ9GmVcf8HmrKrhkCw1SrZD8Lww1iKS4UDsZDM28i",
  "key23": "6162M5WwGDBAupgCmwZ8dPgR5fAnhqq26aKF4m5ZnR26TKoWoRNmSNzzP2EbEaJAGjpthjLQqSE25DtpVir1HnGa",
  "key24": "3rdowBtyYzzCaibUQncqXjwrhbVL492gtqcJpvvaukrD6sHZ282zfad6uzjNyAZARxMrwcEZDnasNkaYs6rP7D2D",
  "key25": "3QqxfiYMQkP92fdEpsfxZKEUfQBjcWLtrD3QM33PEJTPDS7hhuDzoNm9SBun5S4cN7ReZNusdFbfWXtUomYBzBRb",
  "key26": "4DfPMooYPCkjVWXGPhi1MwAsWJSsRwFQfWioozLTSDsgBW86eoRgXZvfcui4baD2DuaYE84MCZ4TdCx5uqfhFsxa",
  "key27": "5Y7Dfjnfr2gtiDfjm29njKt1PUUfYc5kSzbY5Pb3cd6nLdZbRtRfWCP6SH81rAGpDRhx9TTzPfjiULXJ2hd3zxe",
  "key28": "24r657tgNJte3SZzaqc2JK72sjFxsNhKZW2VoPhC4n3Ar7idECY68ppzARuBY9VNqzjXyuc9Br39tWPz5TJVmKt5",
  "key29": "MyT5yAh9G79fJWjJTaSSEB8boaYjDh1mN3vajds7oq45mmAEQoByLae8H1tUFpiAW4ZJ1dWK2Pbc84buRYhpP3A",
  "key30": "5hRCVsk8fpybyeCUJswLY774mjJgcXtbniNrw4EMkFv7pG5N3FV8cFsqWRfGkmYCijVkWoQ56cgAdi4DVCT1aaBV",
  "key31": "5chHkCPL3FkYnqQJQrQLEgTVmhJEbdYGBoXxK3JhuQBEQVYQyVtyDxrkxbbyBar8gWGLiJuuLRNygfPypAjmk1QV",
  "key32": "cgMFkfa3xJdVjmPeaDvNkWRzJZRycksToiH7GnqTRbKnXxitLabgC7LfWyEJD1CbotCDmjAAkA4mrDLM394XDT5",
  "key33": "smSiut18t2hPUCAQuHDAAb7XgVN8X3wnK9apYyX6Bi9CuCfkCD7QEXxEg6NXhEbFtQucbKQeYrePUFgzabFjfnQ",
  "key34": "3AKwovTBAhdm4naFGohxXkAxcWT6H8JmaRMoVd4tkGbwV64QiQ2qbRDWNN5RR3vHYRz41XNnx9Fk7SPoK7ABVSoo",
  "key35": "b1XAsFS6Cb4dQM9ssTzdD5eqc1c6vYYcVq8wCompgUDVPcX3UpsVX1zGoTevUi3Kde4K8Cs8LW6U5m9djDodp6H"
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
