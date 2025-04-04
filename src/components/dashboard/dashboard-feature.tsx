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
    "BQYzb6iLdf2bQqFiwfeosWQG9eNuxMVnjyEXPaiwmiqeC67HYYfDScv5aCdK1znFGA8yNoAQjiGGrWdaLVo5Z9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDR77k3TuQybjVQzhjoDo8zQMbesUo4X6gnvZYLhtTasWz8x56XL57u7NveLepbZQWeggotc2mCohptdB2zJAT7",
  "key1": "5gm1eyfRCtrjKjhb77Gi7m3rrMrTzXnri3ExHDmMrqzKTFRwiSLKkyHm85jc1ESzQDQ3NqMTKyX1VHNQ9y71iLyi",
  "key2": "61enDe3CS8er11QqSB46dEdSjiuSCkzPvp3rjSZLEUSui29Pji9wHKXj7FRBSaq5vnRJTy56yHV4hpukg5ZYCQ3",
  "key3": "2zVmMTVBrPmzU3Xk5DQj6y1qkmv2eq2bBGf4GGDUHs1ESACRtYM4yXTAffZLJNivrfRZLanaTTwjuBt8dbVBuPJm",
  "key4": "3GhUr16VUeFWas7uioosRT1ztU7ykhTrEeRkYoh76Q5JswNQRitAKTK8CwK8k2JDYZW1MgR3dNaHAQ3nusDrL9LP",
  "key5": "2v7d7XCff6AFXkMGUjUt7JXt2TrtbwaXde48C3qzxrnkzy6LQjp1Xhvy7eqj9QQDm69ay5xd7mmCnDzBMzK4aHgU",
  "key6": "VePwXU2ojAM5voUyTU63fbXc43TVRCpr9cpYYzFxeup2WLk9GZDZLG7vVCtSdK5asvedwfLGpgREJ7iGR9sWW9V",
  "key7": "oexCGHMg5NsRZdajV1gXebr8GAsfSiQGjbmiw9FuHSHqxTeTdakUgVhunr6ZwBosukCnS5zwWivwEPSZgoTMygL",
  "key8": "33qhdSEbceyLCzztXZ5PtMMpF8nj7nMUEdoA1imqd63wHBPgnvfBvrCq7c3gTdjXQ7X5YS4qjmsA3cYzHZ122oy9",
  "key9": "5NKeKvNzsNn7NsveKzP1JwdYyfk9YfA6QmRJcZ4LjJatJw5ZxTJLbfLSb4teeyQvmiJofZVarLoJEE462WRbgHXU",
  "key10": "5XcCzypSzLMbuFf2ufd76Ry4FV5hYo69ux6qpsfK1n7gA5PGCw4HNFSf5tEFjLb38KKLSsTm7jdz17PpTCGoeb1M",
  "key11": "5VHKycsz3aYdZ7AFGvgCDUB14wTRKwYXrwqH5Nr1iHeDcynEevHfv5qycWZr1NPc4GSi7rxZHrRkeLC249oBfoHo",
  "key12": "4NUikRDP9z49QEbk5VqSG1vokWjaywHYu1j6Xsv2wST7B5ozfT9bw14j2BLkRLrPXbej73u5eD5ptW2yvEasH3DR",
  "key13": "3MunCLsC57wrT55JANsKF4d8162nTY6qe1FHKNePCNxdv22ECcytPhvuJYmWqQ9KeEXYtvrE27JA4isj9qpQDhjn",
  "key14": "2rCHgN54QsioF8uRNaHgxnbnwpKBco3LoRLD5fQkZMUi5EnGhPygwVXNpLDXcTU6VWfRPVdhv5CE6kxxWodYwjHz",
  "key15": "dARZXmgtroZbDZZ5FtAuKp4G4sGMi4tzx1pMmGYkbt9sWkXFNRktf1h8nLZuSDe7X95JHmRYfqSEh3rkZKeDCyE",
  "key16": "DcooPsmy6yQhyTs9bhtYLAXSFR7zFEM4wmUe1KrJZ3Yp9zjNt5PG5nUw8yZUovHdxvCukBrddzwQjnMp4uGiFt5",
  "key17": "36S5bAYo979zPjdZmQ2GWS2CTTpMZkCr4mrpr87rNVpUrLiPDdS5Jz8rJPBS8reoe5APYZ7KhvPsJTSnYQ2HsBUM",
  "key18": "S5fzhh9SVKXBwrZ5yi6LxA2PoAByJyvxhFiLkW5aqKa5vCZGLS4FSjFbVY65HqRm4bzYHJdTuDuLr8Vdkmt9pVb",
  "key19": "2cmSQ9VRnGacwqndu5b3ygZ9shUoNinXC7GsSYaFfaRip87zycsW7ESTZfVHckN6Z8cmg4YfK63XpND4WMeFqU75",
  "key20": "5MTRqxvtfKs6ufJn39kALEzCdt6zzApj7cwhfbWXj4vqf6wx2nEbw3uDRncFAYJooc3bY8iz8njcBwg7NvQRuZP1",
  "key21": "2G1nDHY2RDAdiroYhkx81RRPvCTpLJ6vwqPq85Wpnfex8rdeTMFn6XsRzDTQiMuvSzAGSKNyRi4oES7s5nq8L6am",
  "key22": "3WbE6qBD9Ki58aNi35LU5qdae4gYJHiq4P3xu9gXDu3Rqe67z9mNYBnApdB5mVswA6PsAnPpgfp2koVsyBvcaGvu",
  "key23": "541EAzzUChMAs6GywXD8FXbMMruHT7seZKDsqD3GEwaowbPS5MD9iwECBdL7xzb5sbV4TP8yPqRthhMFotj5jNEQ",
  "key24": "4kNgeyJmFaGCpGgEdBWojHDzcquSCzDtMLKSk8ZXnYVVTJhNJafmy8yxhjumT78y3s3RwUmRS3KybqD3YHJLSfq4",
  "key25": "632VDvPkTW3r5vjDqziqr3ZGMGbitEBet93gteYhXTKR5ZZQnVm96oLFhvycXrs4HhY48JtMSHSV38J1LqF4Xd9U",
  "key26": "5ytJUnXdMaAKy6hWV8vekqSkC78gGjjFqPHWoH3WytJ2Yy5a1GMFjRE4LyRxVjvYiTCoGT1uXmYcvdJ9xJX3xcBA",
  "key27": "4q35bbAzW8oWDHTFrV5hpYgsJfy9FmxCnAuAYzEJr53B3YqeUrJbGq8vx59YeEjiD3aoN78XHM1kQVuChJJvCneY",
  "key28": "4r2ARV1MWX1S31hSwCLYNPYQxXa1m9r27VEqAyiEjdjaH9UjCRHkAYMG7nn5sLLxnacn553fuB2eufUSjFizQbpt",
  "key29": "64y91xy1Ygyy5JNXg61n5Tj5PzuFo3LttCb8EQsFNVNtCe9QDeRqhPAyt2XYzwWASdkVtuYzSNNXXWC4csYZCb8D",
  "key30": "4Bpi5BvNJHu3z2euFUQjxNu1ZakJzogK9DwPTxmhq1SXZ7Pkd9nmoNBnkpgFSkPPRHNPXGBehYQDELNa43cwM2rw",
  "key31": "5p8NLutrKd3UGvguS6ZrEfTcphQ8BaoCZ2raJdFi4UGqEUbHytBNVEpFFkJj2E37TUBXtBoBVJZw3wZV7S8EwueQ",
  "key32": "4SwbbRF78BfWMDBFo2waVEbm4rhx9EoZdSNx2km7GwnhUDCurvaaCDD5kfLFze5WdTa65SR6vSEsUhTKKQKzDg6H",
  "key33": "5PmLQ1fM3fyVSH44d4s7aaTgiXHppPj5hzqKe9chwpEV2LNDH9JbNAVcPez1e4MK4cXdhcmj6kgycjtFi3GSF4qK"
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
