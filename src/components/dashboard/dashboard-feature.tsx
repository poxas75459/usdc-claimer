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
    "4mpzDduU53pPtbbQ9NbaBJJHrtfjGuTkUe1n4toqxbr2e31dWDd412VgkbWFhkkfVJwCEZYMPbUvxMeYwKdeMwnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYSgg74PN2ZPJtNDyyEnjHFDN1ARCKaLQjkzEmK5UXzEw1tsXR3tmw9hSTsECKxrkf4hcJSJ3TutT1MXgJGPGtq",
  "key1": "5zsf6bg34T4n9AXh6zNuSdF6SG91LZLxv1FZ7Pi2bJxhKrGcZhvXbsJNns1CDRAC5rvp6SDgNvmF8f8d1qUA4FeJ",
  "key2": "2FQwimHkZGVTXdcjVm9T8gxyW7XgWzUQhtrL3u4U3zNc38k1Wdoh7L1NGdrCz9UZJsJd1fsphigmCmxCxZ79bpAa",
  "key3": "dvb8n6ZAQKb7QdWH4ti75JYRA4ErZJe1N6YFmMNz9Empr9yXou4m2ZPUXjP8haL1X42FTmFXpkQAupUePx97iPh",
  "key4": "5xJWLsNu5hjvAuXjNVwbvPVQSW9GrgVrSGBFvGFWMtwRStu34pHEVh482hMT7c1qQcUBTjAVYM5tMo2JgT58LXYS",
  "key5": "3XgjcefjCVzGHLoGGSVNRZ5cPXbQsoMPLLP2Wo95ssmgg8i7KsrjV6EJVUwCLxugroC3m2H3NBeyD7oiH2aGk6fu",
  "key6": "2vsTFzLronmorfWyxEiLnDosuVrM2Mivkfu4UVTKM577389hBHSw3tcA1L3pyNPzjg8WAUYsDKJFpQ9ihHFphREH",
  "key7": "21hVzUmf7zpLcUdkcCKjs5sRMYcbgQeoee7zBFsCTaw3mEzVDkGeE5j4tgFMDWoTREuUPAB3bAwezdiSdrpJHuTm",
  "key8": "4b3wzo2bpSkbDJPHUW8LRjj2NrJ2Hy3pquFmLfMjuDHap5G6vntnTDCd99FnanmgymgMmeVzK5N3PSSob12ARi9u",
  "key9": "2maN3ceiYsJU2PqMYtP6SLGeHPT5ZtMMLi9JHw2ruwVhUeDssziGF6RirhwmyoAQbtvFxuds1EMJKr6U5EaRURoq",
  "key10": "9C28XJgx7bxWZMq1z3rWahFLvK2YsprctsYYbeBaUbUx2Jvggscv482ZDoCQPZUt9KUubPe1ubQxee3BYb1RLqE",
  "key11": "5vdJJzbf49XvFRvateGQeEBMUmtvyf2fwMRXxDHebWn5vRTY6nwYkYzCrVu1LnZ1y5osRYMcFAkgTcU3eBAGfipv",
  "key12": "4uc4vgm8V1P2iG9d6bpdyz3ZNMj56VQQeikPfoFveBM2B1WVoxKPWtGfcL1vVKkd6vGwbXWCaqrHfMu1Di4Yg8T6",
  "key13": "2B2jjKxwjCCHxnPrJcPyySSX3RbTWyNGJgjRtDbubnZ86p1fW76b7mS1pj2iGG6xf6XeUAFMZDgPMfSPJjpbiPcv",
  "key14": "4YNWdK1rowSrnjGJVcFocjJxHcaYwZ2PwtryN3WGuAbQzSX1VR9X9QpK43oG6Jwtd4o2JhKukyGi2U8knRNu6gEt",
  "key15": "5ydzHMJqKqdGmdKaiLQX5ewYwFasgWVhbkh2tkBve4oGZiTXG5pfQ8PyTYV7SAjpQNtZjDsXLPxuAcbrTckFkETu",
  "key16": "3G3CKEgVXWc74nnUV1AqqCnVnChYQkeiNZ7h2r7KWi7S1Uq8WR4ot9mkAMtjHvh4WQZ6BPrKWVnHcN6Qh6Pihaqm",
  "key17": "41dmeA1yoc76eDmmKwQmCbuMZpdwUcxzghvkwXZETPgsWQ5X7XgPP1bZmkKxJPA6eHtCqi3u2KnEPN948k54Tv9V",
  "key18": "5pbsNvhqPb7oQjgbJVMoVmSaHXiUjWtDXg1HA1uKGCV3uqwW7KncyUgEvshJv6KbAjQxZyvLHqktZkEbZpZNHzdE",
  "key19": "5FdURkfFZaBk6LnPtUZAfeEN4d1RXii7joXV2M3uEmqpM6KKw2dHPBCvWEVJxgqnWG8ZksKqLUTCEtPSgjs7V21v",
  "key20": "532LmXaJVEgEdTudnFEoimvc7U9JK22VxSKWYP2fWkE97ZfmBT1n4uDhEza1dmGNb35wiQazRLgkaFSVZvzgXFXR",
  "key21": "2GNvmvpWrTgmT5udhxqF1GAmLr6hyugQ32pHyKJZ9MAPzEqxjefLe3FkPCqrowhNomBhgLpE3235zJKHdoChNnGL",
  "key22": "JbB3BR55CdyHvETALkDWCmZXADfEum3bvt5fsEmgyboK5WEzxe3gcqy3H3YDkE96aA96XSYjJdBbCiv26s9imgS",
  "key23": "CLABTmSgnnKNz8WtHpPwMTWqJG1F18KWrbCmGHR8Y9iqxooZyQPkDU1jGBYoyCcRj5ofXyEq6AmRJnKpSdeTofb",
  "key24": "4jKmeLbEzqrEXiQx1QQsS7yk2hV5MUV1fo3UCByffWTrfv3sU5t6JAvmdRPSzMGB4XfYKLDR56dLeeJV8ohz1kow",
  "key25": "4Sof61K5gzDBKwnJd25dU4p3M98E8TmvxLyFijceA4nUxsPEMNdKPcGTHVvs3EZXsQY8NrhVYxCsKCPzKLFFWfv",
  "key26": "T8SovhAXrXs5MeX9h3jaTDrk1bJD9N4vNxR57wH7jrPrTvrJHjJFC5s9LKuATcex4aByu4aj8ziTH3xFFNEsEtV",
  "key27": "4HnGhJBPf7XqXpcSToK6EvMu8pAa92RiqMpLSUwswhjrTPa51okgmKNgKQyC6mhSB1RMpLNj8HYq8LU2Qd3DdcDh",
  "key28": "CRGku6ec7vNpsgb4zF8BLx48mmzngxGKmKJ59TDbv6FNX5zZAX4m46goP8fNu2CWfAS2XwKam7JPjxkdQtaFCsR",
  "key29": "2kJxiv51hUnytHRqQ3dmEqoVCEDwx1Awdv3Hn6bT7fVcngJuzyw1TF8ALYphP1SyDLUdhtgDfuaSrzALLfZa9XGy",
  "key30": "fGaBiL8cm3HcKyesbSFc74DjWViUwBZZFBfnoZvyhXRDNLaJLippxYHk7Z15MUejwu5ez94Hssq8WYSZyKrSMKc"
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
