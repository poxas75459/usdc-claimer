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
    "Hs3DrSBxD1o8CQowaKbCSYKfbkgAYTzkGiH9UBRGEPpSqEFD6hQUhVd4EQfz9TAjEyk8Jzo3ytxna4nkMKJzgR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzGPTExh561mLAg91SToFjh4pdThbqHFRSLm5hxgXwfZEK92PgJkNk1UrPSA2bn7KThFdUj2NtdX2e1e3YbU3vd",
  "key1": "7wESebzLyrVcehaKh8bE1p1cKyFVx49PLaKqicbjgg6rZzKi48ierjsTddSV6MUkBrknYazEUKC8EhjzjQVY4SB",
  "key2": "9qT2FyqW6wLpKvfYkkXEWM59oirFTeogCzG4nJsnrY8pGafKRLoyEiiE1Ug6G94vu9an4k77efyqBEv97YZshYi",
  "key3": "4v2LKzfEyb8C6PYK5RDHYJCniuT7E5DfMpXThbKSN2eEt2cezDUX45KJTPxhkstgNwAZKCNvVVK6Zcyw2sjPgc1x",
  "key4": "5k7agWYPFycKFFFALjs6D6kPuAeVRX3GZ79GevXcoEvyM2FWiFHLmpcEn6529sN57rdvSZ5UgavmYYBrCrqfrCNC",
  "key5": "oac6ZyhD7krXofhXSU5cKtsAS2NefMw3eKfeUeBRyfG73tf1bJbBL31ZKXSi4254xU75qi6yeDqNk4xpMBncePB",
  "key6": "4aVX7JaVNZaEKpdL81wiTiKTT6kUYRc57EGWhiHLPfGrMoFSvDKjefLmFbrGQxotVAwPP6jKKWTboq4o6n2z1UBx",
  "key7": "2q4hmhYczKEusrWyip5C3Go3LEmErb13m7ho5tXguDFCvcqkt4KbPMsTcSxzL8ZGbpRqBwv3CGfEWoBhwDrWQdyf",
  "key8": "3Masjnit3Y5359oTei3MS9zvxtTZVrPRyPNp6tsCHonuxAkRm2cHCGTPsguFrto3sG4Qycm8Jtj3anzb9N8ghARj",
  "key9": "4siW3RDWjtiwgBSxfPjQL7dywc9miKkRNjq7uFma5Yp1aBsvzC8as5bqh7jwXMVw8UwX6bcj9MnMa11xn92eVmFW",
  "key10": "2t3A8ikDULxcTuP6tW9bd8kALWit5UsCCBq9o4Q4TQHArZF1YZLpWHL7r7P94EwRaEpY8gv6Ve3pcBUQFcjUSH6y",
  "key11": "5PMAKNWjPCYVCgcd7UTBqPKb1yFW8oA3aksz94Cpst3LPabkU2LKycP9uGQwPd59GDHU3ecXcHGyWFp6FyR3gMJq",
  "key12": "kssUyCxoczfjND9au1hENPhTSUvJUL6BohSL4eYrLKN3vwGJAsTJ2gUTar3FFb5hX6Lx1nphbKbkQfoaH1tz4f4",
  "key13": "zQdwTqetfJFJAGsg6vc4KshLSkqYSk8Spmpn3bp2BmCtVRuid5px7f9hybi5B6G2X6tPsJicQHB8xm3HDCSf8Yo",
  "key14": "375H8N5FpU8kt6qtMgYoChAqtRdbBU1A6LdZA9iGwnxKWuBwCT1SBoSuCWhRDVb9FMkXKYFdKodnyTgixwp3v1T3",
  "key15": "xy7wDSzKpcGJ9NaGpwwPFz9i6dCEijY5Wy89mWy8oDZPQbDVYQjxd1WwgSNE5oTbKHYZZAjKmgiHg2ev9GiVDkP",
  "key16": "4JiWQbS3ksCfvWG7dxzxnzToTMT5f8sfnyTfCdr1gvx14vbM8tVRRjneUTdtRtDkJCcbixSRdbT6rrp7H86oRBkP",
  "key17": "o5njwUNSY7J5dXsjb2n3xbdXewHfp1PZwf4aioYMMaZK3TEG7xKxgtDcJz7VMj19dRnBqAXUmJ5y8b1EPQxBupe",
  "key18": "5EbMCSCrZhhEkmeMwauurkZpGcKjh7HbmTGGyFjCXDNHSZvwv917v3R1oUEmApbrqCxVtF4vPT28fGXc13FWhyDd",
  "key19": "ftVC7Rarg3e3dkcs7RheEnRKiLB9sGe2SXGaFJreU3VRduReXCdyah67n165LT2N6WEJp5N7BF5sSTCtnTRWvme",
  "key20": "4R8YaUa7L6V8FdYb1cu3TY3h9XZhG3vDLcH3kHtdF4Du4SYNa5BeDqYtfmo79LBuXv4sHHB9ejY5DwJGqnXk1v2H",
  "key21": "2uzS6EYQsZhqnSJD8auhT1xWoQy8WK6DqDnEANtSce9JqjHKNuf4rMuas7zZcTQawde7MbK5e5Vih3ZxrBnxBbBc",
  "key22": "f1kwWsB6V79AK8SQQdkSLzXE12JdmcYb5h91CddAuJAyaZreG4UmFyg5vcKN5mqDc1EWDNHjdpGQ3P3Ud6FYAJJ",
  "key23": "4b9xBs8dLFhf7hL6k5VsyfSgiUdukgo8VRyHJqoUvA8LbvZfQNiaB2xXCffWTLnty6sMfH6giGwdvJhKHrsL4Vv5",
  "key24": "48CMNqjUB2br1SzgiojxLwDsgKbE3bFDNR2dbckEmx2JPZNBQqZLawgw6wQnbjdUBbckdtgagFvbdjbhJwNBoywU",
  "key25": "2hGU8R81cSNknAuM1QBc7GEuSvDesrs6oYCJq1Eoha3TUXimN2fTU1NnzGnpjv1KqXv68NiEi7vbJFgTP3sogjQW",
  "key26": "46Rp1AikhwVHuQ4saEdhHYnhVNHo1R65PPCcRVwSJzph27L9Hp4w16wrTSCchTL15NEzxBTmarr3JNE6ah4qCnNx",
  "key27": "2bDidiZcbPfMQbXQAGJuGVafrvCJLrfFAHEk8FV44BwFZVCXLKovUysvA1DaTSjB8VU8bM2YB4fMJecajp3mRnvE",
  "key28": "4XQWJoagTAdi6Xpvo1vgSEfSxgNmtL4FPC6y6mADZvCfoCdVLqoX7cww6twnntar2YTHnfsQXfYX3FS3nfRGCEG6",
  "key29": "3BbWMHyg9uF6zqcTfNRyAzDmd1VCWUqcNt6Wgzviavfh1v4X6c2zz5Zc5WSHsBbsMdJbpuAjyAxYBgVgHkCxKq5",
  "key30": "2cDnZQQgxav1y36wHmuispz2dYQR3VT1Cxg6A5fiViBwfUos3qD5V2Qra1DDWkvXSHR8j2ZucJNnij47RCFrwVbM",
  "key31": "5RVSF8JguMW17NMwB4q9Xv87LLriJ1xnM34Eabto8cP9g9SsBkSJ2s44CGbznn91aBvy1hcUZ7J8eqrGWE14sxGY",
  "key32": "36RJEdS6v6VZDhStNzz55zuiLkzbqcRDACufkeNjywbcMTcucwa9m8BoWkZb3N36i5XCMcQnge3GXubtLDnkxcPJ",
  "key33": "555kuoUaU3jiFA9FYDp81dhMAYY1xyoto9kAbhK93wb8KyzxLnHGrUCghpcUGHLwsQrnxBBxTxLEjnuFURgkEmHT",
  "key34": "5GLEbWMAv67fVLwsH6VjqfWfUdLvLUavdiVgbEZpCLK2HFqt69XhXr5ft9zzpQ7Pu2pyBdp28n4ShRRxd4teHywZ"
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
