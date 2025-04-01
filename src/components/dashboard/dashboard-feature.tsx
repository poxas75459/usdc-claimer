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
    "UrzD6Z8ZBMRFVmsoxYt2tNmHmip5VL1CyeyBZw4sS42f1zadXQKxCwVP7jP576NeCziQA9wQvPcWduHtgS3rQgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHZ9mspUTpQMvogNfjzZNFHQwXE6ThG411zy2ZyoM2vRJybuHAdWXG2nMQzAyz4K9spF5wYHpN1qd7BUugnxzZC",
  "key1": "NHi4vTM2P5M9gm7YR47XXRTFKWPxX7j96YR68eeTZUXzi36AVuMbmeW5zCNH9ZLXumjeYWY8efSHNViLRqvDWfE",
  "key2": "5bh4uPmCJKZkJePEYDaVa4qMrY7zobgijLk6zzBQgS9ygjmGJ6ZLPTH5ghFFj9hPwWhCU96dC1fxWPFW7ALpjyCp",
  "key3": "2VrdrhF133uXAEjY2uzFmretT5DzPXy4s6BRofJyuQoDT8wLbFLsHrKU7GmN225xVqj7CDiqirk4ygFAewTeY2cE",
  "key4": "5m1Wm8j1LEU8d1cPbW4JNu8T4PGDt2BNRcgSX7FvtVf4GbUmjktnRitsTcvQgqaYQfHw4ZsngeSuDbNtPnLpgtep",
  "key5": "3n4UiFAHTK716zQ2ysaeGcMDA83d1WR8jH4BPsNzxWsw9ZY8Pps1NRAE4qimyGvFWYcmCCsfNVD19wBXTC76evLX",
  "key6": "xXXgzqkfEqed8KsvUk2TsvWqmKw2jAM18Q33sx3RFmkJsysoAcKAiknM4D56S2V7DapNabf8QvoxFXtdos3EVSe",
  "key7": "3mwF6uF5DzHBpgQKtzERFCxmcYxVbiFHqMCmRNUXoG3zLGRi5G9RAyB9iihr4dBGop1nxaU4nw15TruidZSa19jr",
  "key8": "4FoGti2o6z6fs88kxw2fZB1rqUN7MYM94U1F1hjgYgPLmarSad4GTF7wFXwcsuMB2rEhaUUFsYWFbENUz2jvTQC7",
  "key9": "58m9xGHu5sE3C4fY1GAnA86RsTfyzj6CgKLokNMCMQAQ9igpxU1vhFh1wETRdzGBhEEgCPmHGfbCNWsCJ9yVUwDo",
  "key10": "53RpwckW7M2wHro7epQsyCzQ8aB1uLkYG3ARHNomLZf95QM2CWRzip6qSQJ3YLH8pU8EBWk436q51XEGoQurtTfB",
  "key11": "3h5hvJThudaCuKSzK7iaGSx4XwMEGwr7B9T5Zn5rd6vCELRWNkaV1JTQBaDCSj5emvW5c25BpMrHisddgUitGTM3",
  "key12": "4iyAecAaor1wCeQoxW2QfEYwzaK6pnhEe8kQ9eupi9e3DYojS72aUBCXPGKCtXR8JFsUx7PqjkyokxtrFAj6gDqj",
  "key13": "4YsWjPSf5S4bWUayHRgiVhQhNtzPyo6eXj5iQM6EJGAK2uXRgXG2YTcBsT8Tpe7qfRuiu7RjNHUPfn8ngjLurDGD",
  "key14": "3XgeMMWk4CDhbFCwy6dwK5ygbPngVum5Lu4VpijbBC8feXSg4AgeWFFZaXte6V87hhvVXbpZCt8YB9YbQT7UtVDh",
  "key15": "XP6m2s69yTVTFvnbivH2bip2DXpB9DhWcTkGigDoJiNJ1wRe4zQnbvqeRoG165e2EpWGQbpPNBJY2SmX8eam3aV",
  "key16": "WsQphHshfecHDBNutVxmmfQ48LtuezGrxTNvqnypWvViGEEnQhCC2VEt9cbFMArx7n7vGSkKbmLPpLbFKhM9Cgw",
  "key17": "5aKNJtDbdzP2xLRr3YbE74hmsg6JjsB7EQNbY2cbUppramx2qUNKYsWecB4CqNyvbc83SA8DYgj9KjSvGgVqtQrm",
  "key18": "3CPbooC2YAU2cwwXfR76nqPWtrXTBSBodBmGBBUKLxCGMxVvenRuuZQbeS2mU5j9ffGnK5RyttCcek5Rc8PAmhVj",
  "key19": "4uyCF6HtpoxKHzh6HFHNkwUxNfMa3EcU2gkYokRHdfagTii5zgsdzoN3SFeJeiXXauVCnuPavjFnray69sDUR7Zn",
  "key20": "47uca3SGToWE69ZYJY1uDNAXJEmVomcvAaTqmfYJembkRaJHFdsdJR7PvdcTnjtvrro7hNmuxFPGEAV3qF4KWG9i",
  "key21": "4hqLE9Uoc9cCEW3jrS55vV4uewgqFbf5ba4S7whnUSBc46B5Ak5o4CQGixFhiwDSbftZ3g5m9Rszi2eM582FWoER",
  "key22": "4N1JphyZbH6xWGsiQ4L4UmSMrcZkDzrVaLA72hK4CheoxM7GgcUXJcjaKkvU9sbkrSEGjDkeSJprQKvxdYWDgCi3",
  "key23": "5LZgfRa8RT1evKiZo4AHrbhguDGfr6y1JVG9kgZ9BvxfbFT6ousTx2SJu9r4QKW3yPL4Lqygqvd73zX8i7zm35t4",
  "key24": "nNN6xMTpzASd1nitUnyDbhxFtKSsJb93TTigdeeDhHyXmPhLX4AwZ58XKshg4ykypQf9F2r1btNwobokuHcJNKf",
  "key25": "2dtXcLDuz7QZKveHGoUPF5qgmXno2MDNX68rh8q8Zo5Y5pUcXfAdfGDA8JxKeRHyAjH3ZppvoV79NgC2Q6QWUKww",
  "key26": "3VLWre9bM6SFBTsiWZM9eQGUn8aEVijn4KgALzSuwj5QXP9cxEU52cJzgZrxReEwzngWWjih5fjGWxTtA63TAbPQ",
  "key27": "2SLrtWxVYGdXKQkUedqxsHd5nc2qxBFZFZ3isEW2dqHvqGbish34TrASwf3tGjk4bgFB6a63gEABdMjYwVuKheJx",
  "key28": "5BRZN5MBq41hVxTDtG1gW6nATkt3X4DTjTrTAiZoPWrKjCnBi4wHhmHWGTKse587s6wb91VutViVqK11ehoStcD8",
  "key29": "3fDb9WghjTJMJUEgubHoc15Tppr4xVMgfpob7RPFSMEZVm8BSETcc3Wzqr9K8Ti9rnMFKDj3gzE2iCVNEmNQPuWB",
  "key30": "5i3gCY9oGrM9VA1kuZDYcbCP4Gxq4zTDtr1hpdumG5QM2L1VNjrkeEbQgTge7N2Wpk2k1ETD3dxNSmJ2QbuhSami",
  "key31": "yZHRQJRn328kF1Gh5uWbGRSutKKLpJJjSuzKKoZ9zn7QKrWohrJruu5HsBMQxwqxJDmicEPqrmBFS9Gm7aSMde8",
  "key32": "5fvw6x6f813WJd8oHWefYyD61wj1rZQmVpjZDEQidvunYVcFanVPEuhhfJEYPFX1JcKhFMEKTDsNRBef5XYtLtjQ",
  "key33": "2kUnx4bpgd6w6NAMG6ND5YKNfNDArxynYPgBcEVwvxdhqgh7T889ddcgckuEJi23CGQu3ZHajxFCQvgprqAtKQAR",
  "key34": "5DVHoGX3RqmYHnqqbnH3Dh9oPLL9qfGeDzQCWxSaPQwcnGV99YESe5dpExMzzm1RoRTUTYwy4eYtNNdy7c5T3rrR",
  "key35": "4zMjM5KoeNWk3id91TPf2thL4LWiKFzr3ndkNSG7ePcHRBFA9cf7mwT4WBJKspZbojSvkK6N4jJqctoYDyy5z6y8",
  "key36": "3TbkE1Vjjjk9khQthkvfGq9pE5nQmaBT4fgLTKg5cWiPnLZWgG3M8u2YzX1Ux36yEbRSSkNPKBn9zB69TNZ5pxwk",
  "key37": "4mQEqWaDtukqJGDDpQKuy2uQzyrD55kvtZRpX2A9VRZNi1WvUaH1SgUWmu5h5z9e4tR1qhJyRf1JQKsgerxdzjyv",
  "key38": "4nhKM58JDewKW71TgFmZD6TT4En1dPwQLbH7TRso3t2VAVLKwLWy9EYcGwLge9bAXHr5sL9c9pCqzQtUH8Pmy957",
  "key39": "5nrirkqYw1f3XrpQdQeqayYd6S4tkEpUZiBefiDwri1DaqstyKbYoPNAmMtfLYWvEW8S8t19GoaRwak8hHHohhsb"
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
