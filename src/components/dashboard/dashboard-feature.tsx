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
    "32S2D62Ccos2jDigQC9ZNPMNq7NtpHheTSTchVWtkztQ3dWUMMsL6QWFbpoD227kGx2nbjkNUiu7SqtMdsg4qLXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbNG15oc8QLJ647QypLGnpPgwHveDXSGa42FyE2vSKQsSsXHWaXFV5bZJ9NB6tJqoYSDtf5SZZHXPsQYBT8r95J",
  "key1": "3Jk51JPY2gcx3t9A746LywTk5Q8KG9RotkNpt7fnWwCsHSVahXhwCkieXuzJitmzmDKh1UVoMgv23HJ274SPwPRi",
  "key2": "5npZNo34inRCigTbiT6M8cXxndLRnASd4V462BQZJNv9iWMUKpSb5fwPwTeEMgNSutf7Sy4hEvi3etcnYdtPpx7A",
  "key3": "i3znTV5ydUJtKrXpHhTgxuvQctt2GxoM4aNHCdJGa2PPTZTwxphrRRNEgNPZ6p4JDhQa4VKAm37fytgfn3iXWVn",
  "key4": "5UFDfLfVPbe3pvsiiygRG2wYxCS5DHpiueTMbX7wCWrLuMhnfVwqUCmxCmibsB4EYSQXPywYwVCtPNTyqAhW3VTy",
  "key5": "2w2Hr9i29e2uKJikox5jJ2xUJCsHUo9gQovQf33vB9ipRBKLLC6Yck3Dy1mEoxbEyppDTpm3NLuy3krF3pb3E5te",
  "key6": "CAizU2ZZzMWBVoxHeoS8n5es2LXqDCqetVopWqEKFqXMbS1e5WyUhnKrwWYtZ41FTXJbiNugVFMuXCubUtjeDfM",
  "key7": "5ViEoZ5ZZ4i1SqPd91wmzYKcd19ND3xzeYfWc5TSVvpvGATNPEkkGgtWycw6xgSW688U9KQGAoKgByfQTyDV2xDr",
  "key8": "4SSimUHZPsyLYoXsyKfZLj1j9GGcr5f6K2Yb5Rmy5Bx22EVixdzALWMPuo1yJdRmSDEnmnNgsDwRccTAwL1dM4Sm",
  "key9": "5F3GsCHHnEhgyHHUd6r9szYeq3ieoJiGEgMtfLc7uuT2sRKnHw6XqvBSvyUwnukRoToCnk6Y1EwXePcpoQPDf9uL",
  "key10": "48rMmqAYB7UZ2d4o5fhdhn4pPrMXgxbgy53s3PmAVTPGSWtxoqJEDNHmsfa5EYMcdWHAF5DKcVgVGpNNzXVunRAn",
  "key11": "4TNWPCaH5BynRF3HkZuPuZvj1QMW9jBkcnQr4xnFfRKEVMrj1BjFqLX2LFHRHz62Edz6MWoUjrgtHUWJTjskayR",
  "key12": "GGBCUxVAHBZxnmeqphsHpxVpFqMeKsqrb4tbSxQk9koxzjgtLF5w8pfWUkjvKrBDieXfLWSZHgmcXn9exSmwsbd",
  "key13": "4QDGQb7svkSufLwtDuQJ38haXX8ijgy8HvtJVEu6LvgBUiMdMHKh3yyLPzfdhvAVzJkVFDNLSjP9YYzMdgMBU6kv",
  "key14": "5LitjGjnDrLDfFPZQf3uDGKvzduaMz3XMpXWBG8vxiphQEFXgUKaaKYtH1aS3mxEfroKm4HSF6BSqBf1heMY88kv",
  "key15": "2VKGKKtymKQWwXk63Tb99EWSFbA6WRKZ37M34ybrHFt1PuFhNJ5ukYDEFbRzWACWCjSeyrhUWSv4UyHt7npzmzzq",
  "key16": "5CnFmkieb5QZJLFiETrmiXxogpuoqBCEcXoavW4tmPyA6TEwimUadHiYC33qsHW8x9ufNHwUXHJiPu4nHveNqVxM",
  "key17": "2qWgzZRdVt5w7mf9FyWeBrAPvZXTtkJE7KNYzzTZSGCMJk74gMAVGCVcwSgcd7vS87RGWrj6b7kXczj5WwsXE3zx",
  "key18": "5RcUY8pqqrfwpsPB73yhLgH6usTKDEu9VPwV1KaWEWfHwjgxCDK6MwaLhrKRcUFH4qAocs9f8RHZMReHSQCz2eB8",
  "key19": "4CPwkj3aGmKCcPVg8V4emyhAW4kqRKxfeft61vZEg7VDxNynp72AbPszq1E4Qsu2ovFPT9m4YSH8jqxXLLqCc2wS",
  "key20": "3X2bUkogD8VjC3UyyH7gah2EH4viFATUe2MoXBm6fDaB1mgRSaGhg1pLJyQh7fmbVgabLQS4aECgnJHVoWbr8YyA",
  "key21": "5mpQbS6RnKKnyYP8dtR34mgBDyywkMKbTW3TrsMiaW2pLaqp33W8pxodsXqixRK96GsvJkppubSP65tA6qBCaSwj",
  "key22": "5HwX6hi1jLW5KuKF8rWGWNz5SKexKN54vkLonAVk44K9y1ohd5Kxh1NE8cZ9BFvD6LkjtTyMZa5G8FwbTbBVqWFB",
  "key23": "2KMKvDwP3g46g2C9uhsN6rpbpz7sja7toV2YaewCdLLLmhsuqHnAYN4WJLKkgAWMb3pt1vDdrNJCfsJiHLJeYBmg",
  "key24": "5gqjGoDn2w7W1EiDcjdTefWRr9eugkQDBEcuD1aTVxSG8yB13TngoR93wDRD8655HgrpaGiHtmGft1rKZfArHXoy",
  "key25": "rAYNF8doeioscnqYC3u4czzVnERStpySAZWaD32tkB1yv8Vc1SnWvyrj4bw5MNnpYQfp28wZvwHBToE2xungH7n",
  "key26": "4SCdwZBHDqD641UWV3BvvXKkdbFCTq7fHxsoPyawpiMeKHAqnV8g4LEu5P3WLFdsFU57MnTrGr2AS78S11x8XRAN",
  "key27": "51eKoK8dKBTjkaFKybGaTzinmqpL6ZubUKZ94gSYrRvet4d29ZhQntVPPmRBn4PvbrHWNGNFBAmpcNXXGZ1AXTxK",
  "key28": "prirtxACwGCorXTLTtudBM6YTqA942KJNkAqRDLPwKRziCu23NYao639hBdc8cP2rbk7xJSjxqr5oeC1NBUzCc2",
  "key29": "63Gtdahi1zTMsWqaoDhdwakK5JBiudF6tks9XoMUGiVdc1dqWVed5XFJC8bBMHSU9RLw2VdKgxfM17CnrXZ7xYAo",
  "key30": "3HGk4ErZeyHC43Wft12ymYhe87j1VBREqCxzYtdJnw2QhkSqfakpmogm9UnsK3iwzZxShbcZdL7Gyk7obVTCDGRL",
  "key31": "5BDJmJB1TTVrrpZRUbgWexJZUp2KRVV56zm9dQtHXkfMr6Yd9u72t8YMj9KnDk6EEaJDxNS9TPbeePKiobU6vpXu",
  "key32": "4taxKarc4w4fkYdtJS385Px4qKHUVSoeibwh2uSuMrJ4jkEHFzwxBURwPJjy1GgJCPhbwwfWqqwFmBTLmNJ4Br1E",
  "key33": "5D8qrpGtMmKyCNQa8B6cT5rtQMhWDpeq8dxWbrF8Zz1YfEBF7vMH3ngsYNzWpKHpiU6d6TXP1yKNRQASqXVopdDs",
  "key34": "2NbSbi6J1EtaDmdMik6jjkfgS6JN4dCozhNUxwVzEe2q8mkHypRTv1tHjXwz6B2R7YSmFFPew4nqVUDnxgpiGHFR",
  "key35": "4GfN6M8hrPntnG2CHk5JGoQc9uzYy1sBMfB99dHZYQ5owEwtoCNhk7GgqyMcyoW1U9xsNHvTo54jqVizdL3yqWw7",
  "key36": "5r2HzfXPa379JdtWSkW4LAoBW5TcNJ6DcP9jsxGhdAe4Uzf4owRNtMkWkKFVxGsXRbEq4nS8aTMTUKehdzXSMfzb",
  "key37": "47vnW18YYd3spr3m1vZWVGG8aPJRj9cTf3yU2EwoUmkPsEDMzgRQHn7zgXgB9W7BhsfnDbS8PrSNyKUctmfo9dEb",
  "key38": "4T6zq1RinWzz3zGNY2SE6MroSud2XQWiKBjvdBuDHAEKo8wzBBTvow7ZsUjSkSWseyXLippLSgTMavpsMi8aKXJP",
  "key39": "3sTdAer4UbJeaCwdG1hQo7brnMzsDf9zsk7xnSK48i2cNpEa5LgoGEiAvdRARwKDzviF3RB9nDdAYwbaXjo8xvgV",
  "key40": "42Y4MwdRTiNDsD9qt86m2LUHV2kwg4UCiGBP5KG9SvYsCqGBXduNAnbQcRGpx3Mb1U35qhZww37vZNQkbAXR356e",
  "key41": "2a8xGsSWY9c4dF6x3yu5xPcM6Xwjeeh1da4mMHxhjRoC4g5HKoFuiwXYL2USJQwe3wYHA8dgk4CmyFoHFRUSMeN7",
  "key42": "gXXNFn19maG78igTPVpcTQViRT8z7tHfyUbCCwHoZGLMJA38Sd3bwpWTnBjCaXVjPjZMajY9LuSXCV8vH8NoCkS"
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
