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
    "4EBShDGDELJ3XEs4H74CqDMg5NZMYkJ9Wapu4jmFybxNbyvnJArzYeE7Pf8FuDGrcz7xu9FMMwmWes1d7SmumM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCA97tWrQyDvbb5GSU9zeNm2ANpn9YA1Xyr1CvmJeG8iDeejfQPxWiSTd5FSv3cTGYgrMi3v84Jh418NJTWGYHt",
  "key1": "5uhRqM1dMnvFQh4zBRZiEa8ove8yFLgZmabr1krMTA6dfyAYajVx7BHonXC5ERtFdzEAZpgwLZtgEp8zdwAxCrEX",
  "key2": "5no9sVQmmYLLXqEDuMvuj6naFSaW52cyfJc5E4gesWQGBi27a3fDFcv1ETsaxCPj3sw2XgKQHTXeSvNCgtggf6k3",
  "key3": "eWjaDmR9QLXjLB1LCZ57SEGdwn4VgtqswH8PkZM86WmR9oMAmY9wS2GEYXX3UemShyi9h5XuDi8BrRREoSjE71K",
  "key4": "2DuUui1pWh9cV8LVHkNK2pE5NjkpdeHb9KLyiQWridBdq1E274fc6jJGZUrfMsC9F5UN3UxHEbXL1jUvMWfCzYQT",
  "key5": "4c42NbP5sjdvLunLEgThU1tpc2vrDdatd6Smkn3pjFPRgDicrcG6PRxhhfeFpQ6vTH1UrYLYRfJZyUQcNBNTHxTd",
  "key6": "3uRZ6cLELdofQSw5ULRqjP4F9tWx7C86NKNQBEt6jGRx6CzxYPKrMQn8A8hCZwmPJoh5AAFtQFHf45GZvzuTnqcV",
  "key7": "5NmcpCg1UVeF9csm32uFYBekB7EQvRRiF4uqbVhXU8wAjDBRRbfakvMqTbsk4hLZLyd2NyXwgimNgbfxM8shU6mh",
  "key8": "2ykEJyNnorJ7hXYnKXLfimoUibWU8nEp6dHkviCDPCkov4eV2PMt5F7gQKCSJ39PRReUCu1REJCqvbJdj6fn8wSF",
  "key9": "3V8KwnoqTWhVi9srSkcBUcJSEr89XhfMqrtsAooHueKphrn5kJQVmMQ48XNKy3R6vF9ZabjZp4uCcenkCkabyZRo",
  "key10": "5u5SD8h9e9eqhG3myo1Xkcpa5Bdug4ZTeuJcWTupsb3CRKzrAwfLrrMfJ3BwXnESkw3uCwzA849rnNJyeZ4Bqgcy",
  "key11": "4bJoLo8S7by3dr6JysHPpDPCiPeC5KAn6WskCPhmF3SR5dU1Xtv6pLpEZicSug3FjNqYwu1jWRMbd7a89uAaBRNM",
  "key12": "tpXQidXSf42se9Ria3V5dPJH7LrG44iQHjAwNeGZqNziEZoDqEEGAnna19VhKrUJ8Jh3GhNYUQfS2Ejg6u192SH",
  "key13": "2en5xPLjbeFn2okvToB6N4RrfffiddRp4vBQiSWzzXscujbSJRFddxUJ4cARHdxHRRQTfUQDFrSuPZb6zkn3sBP4",
  "key14": "3TvDN1MuomkiQoEfPhKpbTXpK5YvQCD8LLybYQim1peiCR7YXr6ZdjRTudh8G6oFX459Jqgt2bR47Fm4PXJogCCu",
  "key15": "243Nkyyd44kvd2gqd9aHRjTfKWTbzz2erNhnoTDSvuFAxADmNLaLAeMErpTdJ6en1iHyuRZ75BLdWEx5g4hgGewN",
  "key16": "TmnvkuXCmn4StYYuJHFTfWCAqejNC94RZ6L3QDbmUNAfduybNm3vfrqvPUnBEShErixM8LdUmkH2c1GppEnnukw",
  "key17": "3mAqoCad9VjXJZLawWZbHDKeMN4uw5eX2rcMVG67qUEPA9JEiK64hMeCjRpmShV96nD2NSdeNQSze81s3yn9YMke",
  "key18": "3aS923K8RhV31bAhiAzwV6jCDWaEhoMeCcpP44rhADJV4TBkD7sErv4xNY1suNUf1YTXZ5riHnR35voTXZHXBZB9",
  "key19": "4WHus5odPUdEeNUrPU4SrRQmpUyERzEPCFdU974wDj7eeSApcvw4nLchadBWVejGNjYM4RBe85ob4vBRa2VqcE5C",
  "key20": "3TGWwCJihovyecS8eMrqFMrBRXAqzdwb2gdNBSNGRL7oc2g3kXjw1SWuqvWowUcGzR2JF9vQpr6ccy4Jtmzigsmx",
  "key21": "3iZHWDPj9o7ah8YqX515fxgAkx9KQTyf2h7HPUjcW57AMyQMQMVHzStbFipqhRTjoh8ZmfnFAoxAsH7uKU22eqsp",
  "key22": "5JTwnsAANmz78mCxfk8zvsFcs9hjUQXQdRTBs19Xz8H2rXi69g1vDJW7ksic2UVZjcNJUV6PhKUCMvB3KaUnNAFf",
  "key23": "4NVCgWXNB94Xcm1RvEvJj4j9Q4hK1pgXAYZRiR3aBRJdeKn8JtsKExXy8i4WBk6fMZFPkoFUy9xq7QkbJC4fD2BJ",
  "key24": "3xUtdjAZTFKxGyUEbiPp6YtbpBP5WZsLJWfFnovkd1FGhE1UP8QWHaFrDpfmpA1G1terLpE7yQssHEYAeWc69QsM",
  "key25": "3otXHKq8skX1sW4zngWK8zDFoZbAUD83YFMSXSYfpeFgGzotYBvUdxukzWHaD6Jpv3PRe8JYczgnvm2YcGU9sqEh",
  "key26": "2ZQidq4DowCFCvNDU4YYyRwubQ9bzytLCSJdmUoNNvfTNiSxXnW7GW2EkArQvwAGSpbJPfgNzdUmD4hwtBrSHWvv",
  "key27": "VaHdoASeagghBdHt5zCT3qa6fhTJWBuihPXDwnUWyQL9r15Lz384E7cH1m47552KmFAACdEJ7yvrLNcSw99ULyX",
  "key28": "5yBigYa1P7fHeDyvybK3ykmHQyNEoZ3WXyATrXNQXt3BAB6e4fnR3Cqrhr3cxnKTSUPtoKJgM4q2rB7Q61MqhFbm",
  "key29": "2KFTTYtnup34cyTiwSAFZ49LY1dVNDD835RKUJGCRLGBA2V3dNo39fc5ngZuwtXbYFPPhMmJG2AuCNjgug2mHbyM",
  "key30": "KCZHE2Jj89j8far8CrUVPNevgh68HgdEXhaYFEryiSRuHTnnuWwWacNJF6yQDMnhbbe9CQesHWuU1T6DdKRAaA6",
  "key31": "3E3FxuYUQy4EhZ4UXoEvq7hnpU5AFtskM3zw4okoPhqhRBUpYtcqzDSkCpzjsjJNHApYrutRV1PQQXdE2RHwHBz",
  "key32": "46ipf8GaGaAWo5ifPSB4TDEvmeNFsb2jhpxYHNvZJTpY68yXEqxnf716voPCa3Xf1cSFN2LLDgDDdy9EagHo8R3P",
  "key33": "uwPcSGcoDwF3ktc2BqwfLxtg7tB1e5V3aCyVX9YjdYEPzW1mG1TRvQasCfTiEUM65Afgzt33xp1bssqWrzBeNcV",
  "key34": "5GJFrb9Vfr6sdWDtSrgfLKc3iXXq1QYe6NDZJ6oqojgfc13M1GbLEouqx4X8siqJWNUmxxBqGJv4egyhAt4ReTfJ",
  "key35": "42wtkkt6EQGCjRHgSssESp8aUaTaX5RJg3pU3oRTt5YrrxcyGBL97rcZnN1M763iNbDBNcCzeeiAdYL8jq4x7MCf",
  "key36": "4RmNENVL96YozAozuPaKLTojdLyjG1wLm8a2NKq1Gz2r3iEhdUW7kEzZEBwBYE98UFyndBvbFrprTWjUA8KbEvbM",
  "key37": "x2AuW16kZhn6RAr885dRskueamAiebefqHizstwXJ5vNWqeLjn4ut3qQrJs2wmzhoPymrL7vEdGn5ZFaHotc3UY",
  "key38": "2bv7kdxC56F5DkSMCLGEuJb6TTxKLBwwJrab5dEA9DQYDQbgS2jUawdkk6itTvVJW2hz3ivmtdzMBYN34sfizasx",
  "key39": "2HH6Q6wPUmDp3SDbnHmCMtiPdR5aYFcSUKzY8CWkjf8YQe2rig6YEtMSJBYUKZ6fqHYmMvnTuSLrdom63R1q3zDS",
  "key40": "62DRSE5U2yAUZpjv3KPnhJh1uXoZjvG64u72qZiBuQT2FxtvJwiyqnVD5ExaozEiQP8VJ7rveicpSJLecUi3NjtF",
  "key41": "4jbY8tDuYwHFPRd49Lgi1xS9WxaEcosdhxcm1irKPWzwBzXf1rgDZyAtdD2c8DuSmyzGhiv7jLvNH2oStKKUKGpm",
  "key42": "4sF4NifF3jWhWUF9KosxRBnPKepFSWZpHm2kbPjNJkqMCX42jcHvnwRXtNs9qgNoZEeBhAwfun36ULECDygf1s5e",
  "key43": "4dcD5qcjC16LKK3hqnuioCcd7hiMTzhBM6tZaRWTWhvqdpZd8wY2XWQ4sZ7tLHUXfg13YpAHr28F8wLyP9bxPdPK",
  "key44": "55LpBjH5XuZdA8a2iM3p5aizcwXuKSiqiAYYyBYFy56E1rQ7MpDEBK9cHL4q8ZgTNgfaQvK4NisPGeonD91ETpKC"
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
