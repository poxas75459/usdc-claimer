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
    "UiK7MJAanv8Sz9SnF395YvbsBktm2B8Vp1ZTNKQy57iBzoCNDBLpsH4fpeMHdauyji8NWFg4ayMccGCPzkmMWmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkajRkNazobgnveKJurCXzbJtqFm4DkHtC21yPC1NVvYFPwHY1XZPXnmPKwBjvbAFum4SwtTxzF1p48kHf2vdSi",
  "key1": "6kFQ15aPE66frnU6QnNwTqS4mMeKsErymLS4ea1zcji9E7UCSb4cCubUghkDSgbpVDut2m7LnJvE575TVAgn6eC",
  "key2": "5pkVGPk8iLVgkpwaJrM1o19Xvx5AbyxPxyDHNguntMS9fVe1fbUzJwCkMuEr7m47B3d65xnJUct3t656RJamnwF4",
  "key3": "eyVXQ6xtUUMU1SFbZQfHRHfSisG9d277edQFR5iUa38tjuEfcBphMxrNgHnzVwjCt2xoXyuFBq8cJaR55za7fW8",
  "key4": "3zWTa6EthwCkh5Bf7FxqbQiw49KKzx7W2225t8VVdqKwWmWvmpPmGhhfyvYiJK5CjvgtekBRNkgAHKFR5Zpp48V4",
  "key5": "4xt9PvbFmh1KNGFM7ek5tpz3sDs3VSYRvoNMTu84NmYGETmBvRxgp76cQ7yTALUTxncXKVL1r6djKpAiTqdnzM4U",
  "key6": "2xCeuLA8KEiFjBnaNLBgcgbVd4JiwmYNM6X625btuXKr2WvTJof7fXqJQcaMqH2i7RiSRwoAnb12q5N5suW1S1SM",
  "key7": "3GnvBeE7jBynhPRan8a5D8ak5F91bysZSBjLj5Mp6wGb2qYFxZLbm8s7Px2T2oUjm8HFUVZSpkEvqknkQQCuvqFY",
  "key8": "45Vz9ifJ6hE6yD57Q7PVB2MPVPkrqMFwuKUoGr7BBmwzhsNKi9XePcR1rgNgBzzAhZL2kBQ9hY63AMSxihPSBaXi",
  "key9": "rZci3T7PfFwpua2a3umuattZfjrBVacTv7GoXL7KDAYt7Eyw36UKDbNyLE9nw1c6kSQkSMbJmqEteRDpwpoBf3w",
  "key10": "4g5Gw3MB4nEtQdtFJY6sfSJcEZiS1szpvF3UF9hqt7ibnTv3DbaU7ugQ16xutjYeT4piyGkd1epG2v1pq9fcMY4k",
  "key11": "GNwue88uzfkNhCF5LvMmTqnuuVPbum1JDkM719bRgEmuydGWZvbjQESSYbajuM9639XWhD3DSX72rGoNesRQnDE",
  "key12": "5qaixMCW54F5YouxaPR8oHVnEoWbFM5YzAR7L2ooSCuaLiiJjnQ9vyBMfdeWbG5m2rvJFdcJ2q2Z9uxQR9qtDLyr",
  "key13": "4aGvqPV8xBgAfrVJZ3VqdAZ6smQS9q1ziHnSvVw5UR7z42xDHi1BTgsfPg8cbgJ1uZPLMfcfiBXyuhQyka4sTbu9",
  "key14": "3yn59p87pbvXDSPXwF1Y8EVoQ8MffJvpXAqvuw9sZ52ZVYkLJgeiyACPk3ikauG71WHKKA5xPpz5w3fgV7hRxDhA",
  "key15": "2GzENwnd8XopN6YnAwPYdxS7szsKcUm2Nef4CQAfibpvR7JsgYMXWPtLYGqqYS1mdk2NRPtMD5WjMcQxYqxy33nn",
  "key16": "2JNPAedhNELHtHKDsFJPVesZ7Q5GjYYpiAujm9CaxANHbd1Ym9Mf8wfdKxri65X3cogTSB4pZdCz7s6QNNYymJ1f",
  "key17": "5AXuNGBmCetsAJLaQ4n6qt7hyqhcSp31drtVu6Y4XH6wPrSj8vmM2oLAYUT9DBsLn2PY8345xcPsPqkApRgLnBGo",
  "key18": "baju9hunRDxy9rVMXXJhzTaukkPgiJeCztgumAHSZ7V3BvCeey8NQi1uCyLk3Xhfr6aN4BchJkZP962KiVHE7hS",
  "key19": "3Dyr5AsZyUjvrjwCcjcSLTANHuyp1aXqrB1y9XsZSqrMiKCFPKPy9jQfimgAP2jMsznU26ZZigyYvtfc9SKFuACA",
  "key20": "5ZiNSYihdfrrNw9vrzsHmXBS5bQBoJ8Z7xELCuF1KrEfvtanYzLhrvMsAnrqA5MGzcWnnhQbuWvEyry6jNNzYXXU",
  "key21": "2UHy7RBeoPiwNMnyG47JyNmSde75AEMzPgDXPYHpPz2jHhe3zTtzJHC4cWYwu71nZgpHfXfYAF34mL4GbrUMXoAy",
  "key22": "4BvnFtMmPT8XncSCEgHftoShyrDvVsAhWJnJ8VPeYbTnFEZBs9DzzGBTCvJeuFKGNyQAJ95ihEZDwcqGytvQ4h3Q",
  "key23": "SJq8gdFo89PKSN24Q6fe6EckTGZermUKfnGzbdHm3a4jgr7kVQfxs7x3kxdUMt2XSvBj6rYtViq9q2iEtYY5Hxu",
  "key24": "2XB9F5qcaFd2gpJdTcx4TKCEwXS9bKHf2bHVsF823PpnPo6ksTf89j7MLFT5RrQ8z9zjcswajiF1QNCkyaiSHMkb",
  "key25": "Bosc8YAYoc4A9tyHviRQJuMJ3a1CqWv65qsRwf5ZJ3VNRCfe2vCDPzixEq3fzoZVqoB15QA1QCQY2vBEEPrvmsC",
  "key26": "4Cz54mdoAHSQFC4JQxdWBqQ1YWDjKApV6hTMJWM7Jczk5C9wbabAvHcqtmKBEoa5yRHJ7uNCJr5QFNGWvvhzSKr6",
  "key27": "nHMFGcmBXsF6pC9rmNFYqxJGmDWz1PTotHyPX4w8QKBv44jGqCLN4fYRvBQpMDpxUu6UkG6a6dPZDvcqYhYRSJ4",
  "key28": "5n3LcfqRcyPsCMD6sf7oJ6W4AXS3fzRf8Yq8mgJNsyVeZsec6V9LL9snGe4wZrnbtR5y6T2GrRpg6eDUMUhHCc6C",
  "key29": "U5bLg64oXDkqCZL2rkhWCRJJXuB34HtK3Q94fq1FcwTKQPQeuhPGNEw4KuCrDSAPkHPUU3Sc8qgypiVRX3pqguw",
  "key30": "4ZV2a8ztHVNR8zz9qSKaRvtgNty3K3HtgueT566w2giTnEMFDRzWSWr3imnTeK5v1EohJWjB87Xi9pwcpSuBEEFT",
  "key31": "21eziW6wG6Z3rX5F53KNFoH2pe2D4h6Cc88BCZzjhM2AAZNkC887GHXm7WD3SSogUNTYzFRm9zk8fGFyt6xGwu6z",
  "key32": "E1mJckjErUVsJuDpSXVMjom6gKABWfhxLSKJ6YJeRN6TR4qx3hTdaK2U9jz3zNxUQKydmveHTDMyXWMeWcEbK21",
  "key33": "3Asknr1YsLCQW3xmxhf2czX2ze5JywxKjaPxL3wqiV7xaVfWzfCvggQh5Y6cLYuFFXQ4Xg8CbgVNsUXC3bFnkqpc",
  "key34": "6247gojPEd5wm53d5BCEaGAf6QaFUXr8NB17AHtmz5rrsMcffT4MzfQNVtDeLfRA7eCtHhNouK53Y3EKF6xKQKzs",
  "key35": "3CtmTJCyus8aaHcNezCdiN8j1uSuP9yYFApfSA3ZtqAQWg5ou6Gqtd9bTAYAksd5QNuUsEjQdJbs8JRcfm4sn83V",
  "key36": "3bX9mCZ6M7FzACZ3uzT5SBafgWo8ueH3he8mcT7K6n5GdgsLv8UKrcFPUfKhrGpCs2xbMjhCZD1z52LKdUEMhERC",
  "key37": "2LrTYuaTvYQbtDhermu5Q9sDaBgzkYE8SLBhUykYV7xgy5M1vaE25TKPnaG4imk3vnHU1KpJpbJU5bQWv8bbPe2B"
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
