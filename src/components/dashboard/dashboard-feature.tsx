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
    "5wu2bqoqLBUMbrjwng8fXQsUwuUmbytHw34yMQrFCS5momLDGUtDx4wEJZcqpTDRr2PsAagV1tmkLXfezF6hu22s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDtpvWbDMXFZqwwx4EjDXTZWAjM8CVRtT9G1aJXRhBCjBTdaVyTxVW1rbvBLYRX3PmoVYELDJ9orVv4pW5tSbBo",
  "key1": "5axjy36JAMy1pj5rxYcqkhR5Z551iau7Tof8QZhCtJtfs49MzW2DWiEcZUVqoPRudpLQBctxapgxpUuL14VTET9y",
  "key2": "4E559iEEJVanNS3cqySZdywEwKCscawPEUMUcPK51PsCyE5jER4jSxuLiPVsLtefyv35rEY4J6jJfQPN2s9j1Xog",
  "key3": "29PbxX9PQzDZxfPSgoLXWZdHNjVfMRtyb5bivmS3qGFpjwZXQaJsJpFfRBwZCWxgAMnSNfrN3Uj7kyTWpPFqyfjY",
  "key4": "3BJikWYi4uFeMD94cDgVDwuPo2NRRPeqih5LQkvLaJ7MuEqCRq1XPVYxSJfVadnXjowi4Szv1HHkxgLnnjWU1Gp7",
  "key5": "3FCaf5KjmAgJoYuuNZZAGxZPnGVGMgYWpEAXdHBGGYTv7CHqxwE53dgYL1xqmKJYkFfFmroopgep139Asn9f3RQm",
  "key6": "3JRjuJH3qWnmLD4YmkeWc86SfPrLM7yMtujJY9qb5b9ery8jrwTHDB9VHmVN686whLmnpG9cPsw79qmHyyXAaSTe",
  "key7": "5LZFXVVheo6f7YDcnXnBV6v2Ldg9yZuFrvEEWn217QfXRJbErGetJ7V4soNcdo3vVLTAJShQuGy1kSQMtsmXc9Qq",
  "key8": "49BpwLhPCkG2LKruo6Pd43qZshoQjVCPVwpUwVz9frmtxS9Qce4pmrHkhCnZSTMfEcGEPweYQfT8XFvE8iWNTmYy",
  "key9": "XNz6CLLeFiSgzMooUgzjRFsHQVxi8WyVw3fd1z3hQ5oNeWLjbcfTF5xE1huNDZgkpvcxpMntAWCdSt2KZ2BVv8D",
  "key10": "5AN5bZAHsjABDprKQ8VUQZm8G3XdiagokiVgNmWVaTi2nN48yBncDo521dSzXq5DjKb87FtgodpbNrHwbP1eV75M",
  "key11": "34twqvdz9Wm6tty4pFii4XDgrhHoEEPx2x5Ayv5ELUb93W1iuFFYwFh2vPmRdqJ6M458yQ46gxSHUBNS2113inZE",
  "key12": "2Ep2KCs2Cekbo3XM5uzQifExHLewNMvMc3NU5opf14Nq11Sx7hkpPydCTbFZ4H5Y3rvoWJuZUh7RkCT7mro3FKp7",
  "key13": "3XG3sKN8jw8nNrUacFSeRXYCjawSTpzCTtHxQnRFU7s294Qz985hewYjtnLG8i7Cft4TVS9yvQkzZRPNoEe7q8sp",
  "key14": "3VAKBY5brwwNbVsS7c7tKqDsMQPNzzqB2ZkWGsqYKYZ8KPwiZXWbUYYg6eXLpu6iwZxZ89x9m7U5cgHPoz925VLJ",
  "key15": "4XuAPDiCFmVhwS5kkQ7BiPUwRrtuMMNsC7PADc85JXM3xqbjjgV3bJLnw1sfwexoVQRxH5NCqciZ2v9uJNTrweUE",
  "key16": "4VeBRKr4n6Dd9NGdsqJSq39Re8TwuGTi7uQ6BgyyGW9CzS7TJkQ2tr5xPDuo1wYZdTbC9B93ziCNdJRqMgvnL8Lf",
  "key17": "4d8gHcv9ZZ2rTwjZdDWVMHfiGJbG61aEbbaaqcRaRLCG7bQj8cbmxik2Pgi2haRSJW46GWS4my6wdD6iN3PUXjhh",
  "key18": "XjECmmciRjrzjcAdGz4NhrMdnpGiXZ9f1jR766zRMteWUnM21fSndByTxHnmx5RaNkE9rgqTPD9iKHHgNiUmsTp",
  "key19": "4McnWe2VJg96dCH8vWLn72v4ZTRn9ya1NRiBcJXApEctP4Xwy9v9vSyvAket62b2xh5bb5aNV24nphRqdC7xsSBP",
  "key20": "5jAfRZDnjad9jZMbwDLV9Qun3TqiAs4gWR19GesFCNcLVqyirpfPU4n8RHBwgL3jaRoMZyYmoYgdt52seQat1cgA",
  "key21": "4of2oNL8fyijQphGZSeBfxxtmC2PTrCHjvoFLU9KTU6wNUzUCKk6HXtuyQqEmm1yj4ge4A4uFXwPRiqTsX3F5oRM",
  "key22": "55EWVegEfuCTX67V685E2wSh82EMoDyiFBhzN5vTqDr4CNbGvhkSfQSXUpQYXcVNKGQeUcKA7QhDBdxjLsEXdD2c",
  "key23": "wfG2tmahfSa9tEVDfVK3oBFfzcWrD8ey8zctjKqX1hH1rESuF9jTS3Padar15ww8v7nc5MWPNbRqUZsT3fG6Qix",
  "key24": "25qk7PrxLzThVno3rC6Lw9FseAYmHSveGZNY7oJK9fZsJxSDcBYmUPzFhLnHvjW5NMCfhWFqYEpd7v4SzPrYPeF6",
  "key25": "22vespVsb6wM1oLPyWtsjoFkvNbngvBBaevY9KaBDxuxc7TEJKoV6gn1GPwpDG4H8nsnXVMzuoKQZjo1texLiv3L",
  "key26": "5hmyFd7seh59qnXz97EZP1uw8BC9XoRBEHd16NradArjrJ6MV4ALTcCpNFpRU6E4HmfBWVnUgmb6osme2j68qCUG",
  "key27": "3vyz6BPnRGnC8FgqaXBFXxqvTBfgpYRs4Qf7Y575d7SHETbqCxC3Y7MY6j3hhkzcqN3JLx1yMkvGqWi6Z2j1a3Zg",
  "key28": "63rdzW63VXs1YtBvhZhRH8RTc6vESCZTq383pRAzaVauDVcagH3he8ikfH8hoePe22qgP7WafVuhqXXVEh3XDCCv",
  "key29": "2G64xbSckjk571Wh4poWsFCmjUVZyBEKvFXSbp3k2URtkHoujvCVfBwuqmkfLWdFTKePeUJaPkBHz1eD2gWboDaB",
  "key30": "6WxYpnF6ALGFm3fNJ1pzhSoSsAC9VYmGJs9naq1rTrYT6o8tX5btCucRc9zdyd6jnSFt1hAr8aXuiBRbeAJ3mRm",
  "key31": "2euqEFH12faWpkZ961GFWPe7vZMPhKW75EQEUmzt1cXqghAfMGnhQRTuTAnKehma5ZnCTMUwne7zmGsrtYhaGCLF",
  "key32": "4zRrsEJnikWWgXLLWrbpLHKzgxuTgL3ectzNsWjWRYhfmsmePNzVsRBYsNp9jE2gyuVPcV27n6GjgeWubjsLbeuq",
  "key33": "rwhBsk6oKV3pqkAaDNUgUozru8NHg6cybPz7dabQirD2ts2LDepV7erGZAoDuLgVdyXB8VdMV4p7K9dbh58kHwa",
  "key34": "4GvP5aMWsb5Y9DD32anE5xGTuCNGwztAJRcbmyuyRmfvRRaD26sGSpTDdBTe62dCcSunFAjpiQzetewpWTCezzEh",
  "key35": "2dBTJcdrfEiSjvAf8W9P8EH1i2vGTjtE4sSG6ood8TEQjiNad7xF3KU19Gu7749JXcthYsgvkTW8SazErogxEUYw",
  "key36": "3gJYtTtqYpniVygBYzoWd6NKKed9WunFwfogsKc6hir94wXdKVYnSMWGpyC8BxcGsSvvFkppAM4p1Vmzh4BxSnEx",
  "key37": "2QiHatLfWdXJA7rTGBkyiGgUmHrK8F497RLZF7Vt4bjCfB1Hhm39DY3AhuggeVyNZXtaTEJccEthAdPjBMsK1xmW",
  "key38": "2Ao7SfrrC6bGHVAsEyQFoFASbUszJZFmoFAbgiFd4PwJdk8TSiLDvQnTFSQF1Bfn3ktFghyWdducxdu9rqa2Ygfd",
  "key39": "26rqfDrocNNdHbSp7ck95HYimYN15AeTSvfUexEKkZpJFat94NvmnjfX2L7MUw64jnpRhoyzym9SsLeuP6wa1kGk",
  "key40": "5GzZvEWksWTmD2NDn8bD2y12vgY7drAzLrHYViAiPbbCSN9v8nfzepWpDz8ZraJmoZ1Df1Vvxrzcvx9mKF5iTe3d",
  "key41": "43d2Fv3pza6M9S8QNa6YE8pSdFKESkRgVQQHRVmw8HYj7yhntDTWErNyZfKfZa1tG1eVDWkGhT4gVzxHphfHAZKr",
  "key42": "2mAniSZbUQHBMtF1gAg2rdjGNPMBwy7RCj3Ha5FUby455f58FHLWhsciB7MZyegkjwkZRPKuKe71X4T64B4RNB4J",
  "key43": "W8Xc7m7Lf7eh6gYKnV1jYmqXbm6bBQuk9hCrQREQakJ3oiCkL7or7gE1gFZenykfyXGhostadzbM7JzzUVaw2rj",
  "key44": "46StGvQ9Y1RjAPoSg1U21xJMTHnh7vzue57vvJ9v9D6oh6UH5D7jwkdwjLkLSDMKwNvkdPpJLucHkCWiGMKAmoyf",
  "key45": "B9Ag6JE2FL7FGkATz5Rt56zhfTy55qkDZkEXEwdBWibfzdsqcq1iGEyAh5ampsY6TfCFKfoKF9fxiHeYfxrgk79",
  "key46": "mFZMu4PpQwTTDVFUmkGaAijRm3azTXN8boctdoJhhHjUzRxN2fVD5AeBQmKVLm4XSm8756YTQ7kSTf6ottRJJAd",
  "key47": "2CK4L2zsUKhDLi5mnojFJNbCPtE9pPkygEeP7hDrommoae2NiHKFxtwYDCdJD6gXM2ExwtsM6ne7o4eXKxH8TmRR",
  "key48": "3cdCJyMVp54dNgz3L2EbXZgeLfv85tLwtUjFDf6L8iG9MMG6YF1eqdZodx99anPQW9kZCRw79pog1raSuzXAgPQo"
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
