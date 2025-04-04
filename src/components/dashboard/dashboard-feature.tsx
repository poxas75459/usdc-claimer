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
    "5hXia1Z6LW3DEXpshuh3ZNNyWZKdMsdaDPzcAqfDVgXzhAMzjQ9ysESuaX8Fh15svBCbPCHpUq1P7PKmrJhkXFYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skGVomUXWkHJxPpwWHmG4k8oJn1z71z69nxYoM1so3tQ29UAn7SVUrC6jUfTCDk4YHdiaGZSM4bn7Aht65Jikj6",
  "key1": "5vvVqS2tMWYacsGJTkqqjWFFarwk2Y2doLmxG9Q1BZ5qUjwUoFYQkKgALZdxSA6m78XaEbSRjCFukT7dUfsKosqG",
  "key2": "45cGpNTHMHm9pDGtfN55eGjWWgDi4qEyo6xLjJKcqrvrXpms17pUL2cZ88HyehAoBnwg5eQmh3BihSqaK94cNXqt",
  "key3": "21ACXQfgizVTgMrNisRcwyprsyXKBGU9NpT3ZMcDv1JgqcjVrLxtGwtFnCzP714RbNJTMAg3tv2e6tkqNooM6QRK",
  "key4": "3SZVUkEpeF4SEUKCyRdjWGC8SGEbxGeGz71yd2LDjYzFagaXngohqcn76fncKQSrk97wKm9dCqWpvedkP5bF3kEk",
  "key5": "4pvAySWokikKRGh4zL5bRRQfrdKgeKw4VHW2RRKSaVL64D4ucJQXxXNh8Tn7NDnbfSJZDwckC5878qomA9C89n2S",
  "key6": "5ynBe8jwygEjqPYaCWHzfkg2BN2X2KN4DH3mjM2Q7mzb61gJrXESTjMd8u3cTLPdENoRr4ajCPDDW78b2b6WeNQA",
  "key7": "YavbE3Yb7Vet738A8cepy8mo7AMBWGYjmRDrAc8yqrPvgwJTtnkVUWj6P3KvNNHCF2XxxWUd4dujREy91s1VoCm",
  "key8": "5astLQiRtBkSdvxdURhrFuv1X7cSRajYENi8gSGkuAZrxBuiAk11rCWYwQytZrKb3uggvvTResKdSRbRhoD1gFX7",
  "key9": "5nBeVRSBLkfLQFZoX37iZsBMPM689UHiLGrieEfUVVsGdz4wiaHCTXnuZPNyFB1ScqhNJdoK5cNGqF8cRMgFX4CR",
  "key10": "5urXMLiTvPMFYcSZ8qz43ua5FTGFkSd7pgvBW1PWbFdMXBoJ9jsXT88wAYpjCwzYG5cQBCqNAPHTtoSVCfxkQxv2",
  "key11": "4qBeXhPpzNjRGaBpFNKwSJWoFFF7c7nnAkzPgVGacNt8eG4bDxTz8NR9uKN3CZsh71JNYagJacx1jiWoBpzrSfkG",
  "key12": "5CjUoL5qbSjZgmDwUGidKiyRQbzUjcnG2HFA5sGrSfdv5m5XydV7SremxtvfWGJzP7jGTXmEUyj2xfU8dvFFxvWM",
  "key13": "wDVxxYPqNteN3krTK9W5cTSf2FvxbM7dx5wrDCCX7qKDFeHSB7yYxEGviWYg61wtvYTHf4Rb7ZdGLWTiqEpGn96",
  "key14": "MzKmepp5TbVaVHHj4YBrKVYPLWrUCfnaHKSPgcvfQZWWeYAD5cuyETAi52sSKCt6x34dmmo38FJUGcxK2X7xamb",
  "key15": "367LjVyDf3F1NHJBfkzZMUMQUeGeHTsxnwEEq54rqdminzuwzfi8dYbj4XGgB4AaJps5kM5JTop1fTq24dDUkrin",
  "key16": "5cwKeavjEJ2hwusTcSqQpQHsbiAjsBWUcy2icLFsi9R2S9Zwf4ZzX47yVQjPB9C9GHyzvbxhJtpStfBZWgzELhCK",
  "key17": "q261ptLrA2t7pbPbEAWyxUZqhJ8mvdwLR4or796bYE397BkkgJY7X7BtWG6yeiYDU7EfWT7DHTRdzahRaGmySy9",
  "key18": "F6tu3iai6oM3DzGkt19NCzJY4T6TdiYRMeGDX4jmhZY7qKFxkLLP3EHZdZgiQyyNcAQzNyufsccqfPUL43jQqYT",
  "key19": "3NBWiTMM5LY9gfVf3ba784eMDQDcAGsx1VnSXCxyvzdyfSTE1eq9ZWCp6JgaePsjsB4DQcqqEboMkEPL3duw6Fro",
  "key20": "5gYfAFHdsiWMVnv7pKPVAWTRVLQEGyrN77MhDimhvJGdSSYFAPoVAXu9Zk1bHFP38Qb6DJc2RfUgN58WCgZjo8hh",
  "key21": "63UiV9WviB7YqfJ16wVDMGAxarqurTgsHExQZuZYsserS54JJmSuQf1KCEtfhgcZ7ob4YT7cLUGxqkuyEfrjNdNS",
  "key22": "3sAYghcqS9SwvqzKGgkT9zZb4j8fSxqgWTGQdXhKbkYZfwwC1fNXpt6xUfjERAmE4UZvxu5vrRsdKpBAFD1WTxmz",
  "key23": "2joQ8M4tf8q8eJYggCDUBn4hp86VLFb7fjGEYt4BYGKCkFybuLKpJMKQJYgax6tgGiB9RRZwSz1d6fAyK7WUeCbh",
  "key24": "4pVPHSTokjJa7GH4wbPCn1jkWKriowJZcmZtYAje5PDY99wZfhWgGnK85ny2qkgTnypdR5MFwTFvdNXU91qnQHx",
  "key25": "WFfMC72YQkiDqFPQFjpnbM7ziGCX465GPmUWcUWMNrKc5rDABFufmAwTkREXV7dWST5HWr27sA7AdVpBupvbx9H",
  "key26": "3uGHfRjobmbxaYvkKecz1sbYwZ3fEpZgMnWLSjJFXn4TfXXkZvwrecxtxjLs754cBXRayMdsNAMjKnbG2SMKWSub",
  "key27": "pW9wibuXxdN4iY6pULqxDJQVF7f1p7sx1AtsPPBeDz9t2VshgBLXNUDRrhMDL7pyxq24dKNcH8ca9FcB3EwmCjN",
  "key28": "2mqf9Zr2uJPmmk4rxAoXHL89F249Aw7hkE8GF4ATnjCwjfsEFEDvUbTFaibDZmdKCxhoJKnnoFQWxxY7uvVkUJWZ",
  "key29": "3iJXHFon4j5XCkWuBJDUGt6FieUdVKB3HVZ894T4PuephPwJmAQyYkrMfWhXNce423QpyBo3TuCQ4K4VhP1E6mwF",
  "key30": "5rFKJUx6yQf6vM1Tebi1SATdT1qPY9ayM6NyiRnFY37QoB82bzy9J2wZ6cNjCVYwRCTEBTwNLk774iUR8mPDcYes",
  "key31": "4HdRQrRxRKM3ecS9rCTpRMKFX5pkk3UyP3JyHbidHPc7F3w1Wq3wvAMx8AZerRLaTWT5Mnoa69fE9BR3ddCy29Ly",
  "key32": "2ohc573Lz2x5ynrQvDbh5LK76hTYiZ89iSYDdTPSgu5ErmJ9AR9B5qaHpbyGcPsR6ryo52gg1m1X4VrGaPPEv7VA",
  "key33": "RpPue4bnEWgSFq5EpwPr9qJnVjb6BfdWL16nToDQQV7NvWi463naPnuaSr7JsP6XtePhHtFZSmA7haxokLghP3e",
  "key34": "5t6gsoNH3GFPSNw9CFNrC2euy5YebD9xF3yLK7QpjHSHt7eSMzoAxvFMLLAX735cvWjff3Ck2efeYSvJHAjMbmnX",
  "key35": "2DWoyr27GxrtrefVVNESWPsA1V3TxzJ3ygZAmnrKFNSz2qAgCRzooMhxxaUjD52zb31m2zBKZe8CJLE6kJQNppiu",
  "key36": "2iur6vKsZtLPFfJuRpbBCLWbXXJv7rx1NkurJ9RTUbDgrsuACVW1tgy9D7jebpNAQCPFz3pqVSXtQHHLnfnxoLU4",
  "key37": "RbWY5WzYkRuYeKFr3NFoa7BSqZzi4z7vRgEZVwqVX5FQGiTaAVMNR7d9cwkzbS2HEdzrVBssromZiqvHzEbeBng",
  "key38": "5n6AdKarUQXnXzZXAjif3TEoQyjAfrHVWsGg4R5QdtYV3j4ZUjQHGG9Ym4LDg5Hg1stoxGc3vE9tmgBwS7kV9QN",
  "key39": "4KfiBNZQnMtiBxHhxHhS8KnG2o1oWrE8zFdEzPWBx5Tb4viUSC3Knditz11rzRxN2j2La2PHh2GeZ89mmhPQbZ7t",
  "key40": "2ND74yxtqrLpJ9fdqoEBYGsNvrGRTmevLLeiX6bkeYjGoLDHJUAixD2f5PmvLwb2AoHeE4ca4z6AMGdfymkJfD9N",
  "key41": "29xiWCdbtszNU9zvxD1y2BbdU963S7dsRy1hJ1kYaoEKvsJ6xeKeM498YenAqjC9oLPmfxVjqNKj4kDeAPgPZxNi",
  "key42": "4txgToFBNWgRVezvHZEmncem8AXfrqnNBAH3aoz6iaB5N7kFKemfgfZzhru8Lmm5Faw9RxZiZDcuMN9h2ymDAYu1",
  "key43": "2ncfM1edUMebn4HwPLX8WUhR5rRncicWR3jsEpACKXBwfujEfR6BQX4PAn46ZkusdXWhCeP1DmSTYqxWk4J1dbVX",
  "key44": "2mSC3io3Pi7Z6rTJYwp5NaXYBq9a8Kwif7L7GPmyFJAWzHDRAwLWAidGjfg5eihx6oWxg5y2NkgT82aehTLkZRFj",
  "key45": "5Ek1moLdFmyyW6bzYqYJSwNtPQk83vHbhjnVzP6xK38J9dDJ3wzhkGATgCwmipieuSUK5nFja5KCY9w8SFrWwZPD",
  "key46": "4L3EyVhb8jUiKA5QJEDNQ2SArtUZhNCCwJoDfUdBz1c6Euvwnk3VAP3c1H6uFE4ZLqpbA86DMqGcMuZgNfFUpnnD"
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
