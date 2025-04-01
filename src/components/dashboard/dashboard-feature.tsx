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
    "52eWyZ3xz6sGEF7g89pXhqB5pMWFFJ9gfC7xsv4PSX1Y19d2JB7tkApmE2kNZ1SkSrXPKgqNrKHqS8SLJSm2NpKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1fjWhQLaVMDvFyCcL8LnEPJ2t9pULsL2haGta71SwN4o2hJbrto6dpSQiZgDJpCy9PeEDeARMApjV2Fn8XaNaC",
  "key1": "5G5kAhdjGQG1UkD6rsspvhfUeXjHvbdFBvAq8b18cxqiwzserssgTSFGsKvC8CAqG7EFbsV86Bfu759rNVTd5sQK",
  "key2": "tRQRMQW7XcZaviv1QxUyUFm38eAwFdcnzdcdxbkbgdb6uuVjC7d8E5bKgpUnRW81PWe8dydan2uWwqyc4aup2Nq",
  "key3": "2am9vMrqy414G22dHQpicuLmASgd9JsJ13jLxPbXEKgWdQ4vFHvWSebzMAJopDPCXDGUafnM8J8E81ksSHUpoFtm",
  "key4": "612iRwi6QRRESiZnW8mDXF5foy1b18GJjTx833czC8E3Pkai2LbhTh2W5hWDFYxk1sjyhhMrAj1sJtDhuNG2ikBq",
  "key5": "26xB39qXjmWVVr4TYy4HEeGbEiEE4t6nRLWCVCSGuHN63JbbrfY1762kZWjXYGN47zwVTMtYEtVkcggjAyQSpFK1",
  "key6": "2m66NZj8cHWx3NuSeAPB53sVmbAqJ3Uw9iczodRv6AuhbqkvPaLXPfe3Y84jEGfgYvYCk3wokfz8tb78JAL5L5gb",
  "key7": "NVH6JDYZyo1HM7KCmM9RjkNnGLWZuDTKiMhyNnRMjeVxMg6aPZcwiH8gsuX79FQ3mxvA2jPSi2JPQRnYtMS3C6e",
  "key8": "2qfPT7PyQPTWY1sEr8MeYoLobifJxqeTqk3KBH8JXAP7NyLnghvCXZsCiqxtctkqzzGJpf6j2bFDaPK8118gxqXL",
  "key9": "5rkdTqZrcZ1GyHPcxWsn8e8bQq3XnmXMpnW5tC58evjkw1VXzzF1JC8dkGBoUjCnB5R8iYG3J7yVbUuq2nkJsj2P",
  "key10": "4mc82G5XQjrWWL3mzDsEGVsGQEEZcrJJq1x233jXpu9N3k187a38mGYos8CtS42qWjDwW7DU6SXHTfWrVQyACRqE",
  "key11": "4wL2P9VXVuL5tRZGmVBKsaqpFRVrKo6oCo3sg4gdwxsxEDqT6YywedFxQSrmDqYiSsCusovxoxdxcyNBtHUr96QY",
  "key12": "3M5neKbqmH1Kah4RXQgEFr6Poo97tnqGSHnX2vDzsCjUn3tXHqbXa1XUqAKwJYE39ydADrpXE6L6oEQa3izmQaES",
  "key13": "2qMztwx4jvWfnb5KgZYsy3udZAdQ4VcriMorpi3SFhf5McoNmTbh6SBva4Bbrd7sUfzBSmS4Bksz2dYEGumKZpT7",
  "key14": "5Yhe2NcjAgfCKBweUkVqzgis1bJmT4vNd1fd5PMxevTCEL4JaZbyXQSFzuMS9Nyan5uCi9TXvCf6B4LCn2LR6fm1",
  "key15": "5czkkiPGcP5nNDLupYwP2w1m7jRFdQk9sMG2gp9m1E9wsTtaS1psK6ZGfTDqUZ23PZFLdfhKysSGUBNBkd9pe814",
  "key16": "5GFyVGFk14B2Sz18DyAed8YGUFgLfLpwoetkijJdk8byEyrSP1uCGvq4GV78wCFsjBqVuLeEJrQxCVNsMubFUz8i",
  "key17": "5VDPmy3t8ibf8ivqQr4tFBpy1H3XG5gJBHn7WB4RxPTrWcG86d1imaVrxRkzqrP5rVe8CVkaQtDTf1SpZeu2m7XV",
  "key18": "5MYviSKPSxS8kWipV2d2DQWYuwZWHcfawQYuHD4GMhrk88NXvpkSpvtoq9zqXXNJVcEM4CzuzK1ZdY2feXGNMveK",
  "key19": "31jMmtkhJmt3aTr6TSQM8kttVn8NvWEY7HxAJLDZdBnFxKCzHSjtchKvemMRkb4x5u8T2QBW3ZJqcJUx7aZJwB1N",
  "key20": "5a4PpMq5om7fHgFtKZAy8srg5XMy26MAYPDBkJXrBr2kQhviHV2KkozFTdxDhoSkTKkLC7vcjgtM3TtdW8NgQBdf",
  "key21": "4eLzorathsUhQdk6m9e3kBBRwPcJbxXFgXvNJSfWgjfdLQruFzuwKh44KGuHQsaJuT43FzuXRaVMKSjrpQBnZ5sV",
  "key22": "5HRgKgciJPaTLL1qbAdRWiL9nxwJgm16hvoZjt8ZwifHLvWfk9ZEP1mCju4ofa5Vyx69Q56SQ7jMu8U2GPQZgH3N",
  "key23": "3gns2qHSsLfEGEKgH5QxDXx7d5hxBnSFScHvsEcYAAJCq75SCg7vRmFC3eKy5pyCnp4VHtn54rSHWYYp6mJuEC8C",
  "key24": "1HHypyF2TasLe9tkbQfs5kRBcukXGKteZvZBVynWHAP7s5Ea6W4a2NCLeYfYqqFJWkKp3yoNqjfQ6LaZP9NKaW9",
  "key25": "cdJ3apbFa41T68DuPgkHMU3G1A2Zn5r4793eqdSTi8iZ3eihQDhadnfWQJVrKGDTQfuNzUEyFrzWcgyo7vDvQ6M",
  "key26": "T3g2icsmq5oCNNpbTwGp9miL1ddjS9ctm37owi14uJMdnXG8JqjQhPeF5BdYRHH5uYicDTH6ZYbi9MnHqhHbksi",
  "key27": "3JNuxfspA1YrRsEE4VAquB6CFzRciAsWydp2VQ2Pfz4JyBp65PnCpkTgTQZhq7X56A8jpbeE4FAUrFrhXgu1bBUz",
  "key28": "5J42qFzru5VaiPuHdsaG13PWPK5TSskJLFpKFsHTJXZQA5RFyPDuknF5XAEdTRzX7SsUxz1iR2KDo75Tz8ick7Gj",
  "key29": "5NVP3ZYEgWc1RG5LduvSS3uMhuhFJAtBFKbgi19ecwQWS51Fzse2UxgtRucpbAgHLdYzL3kW4EmoXnrM5jwbgvRC",
  "key30": "5WAb4Uh6dqcUixX6iiECaHiMeugaP5vJw9mvQBErUpeeoa2iJ5Gw4Zxreu3U4oJpj17Hay7JhMymB67fYVH59CXM",
  "key31": "29MXrnrXahwk93kPPkj3BWyBQpxFzDzEquDqAu2Jt5Qrk4QDTFPnWurM4RxNtPnXbAWzALUYZQGnxM3tD4wmFyJv",
  "key32": "cd3oJA7rPPYDwSHvTUpqnKr3DcY5fsXLHgg7yJnvu94j1XATrL9Z3Vrd82MQ133UpyRKcin27duxtJXh84SdZpU",
  "key33": "k4a7LERxamHraJUGCoNupxxs3mWwSfxiq69rukRfJx4xJzz6iC67yEtfcGuxrdMs8nt3EvMcNV78jr55aULdojW",
  "key34": "aMz1R4kHbmKLnz3fuK4Vyihkjqj2gMaVmu4hZZBaS6u2y6riFrqz2pyDqCYa91v4kcjpc46z6BCc8vMh6peoFB8",
  "key35": "5714S7PbZWd4gKt96cwgYSLBHCXviMGmwBDd3ejE8Fk8htABY2mjaiR8uZMFeCdA1a7na9uMEReoPdMRh5QJVkke",
  "key36": "2eFFt7jPersFQyryuc8MGZxG1jMX94a3nRAaGfiNQUi1zguY64N1h1mVxHL2XypH9dTuiyRGCcwfeUkWXpKjC4a6",
  "key37": "3aAUbTufGGryV5DQSxURymfsJ9JixexpMmPKD1MsE2zceYYcTbpUSSQe7VtQ6StTwhypzk1h7DRR4KNfepPPDNwF",
  "key38": "2nDmxHLuet5Vt4ub5HJr5KoUt4MrzL3fgBjkhJVsHsHjRwYjbtdNihWZRKUgTGMj375ytwYnDqU2roJhZWeDA1eB"
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
