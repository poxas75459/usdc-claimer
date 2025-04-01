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
    "S3t2VrKFewxtiEQoYomsoJLwV88SXokGHkFXidX2w2GNEgx17SXg9y1bNho6gBCb5djDLMLs7En5bEizU2jABki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VF8qxzjHFn8bqQZKtHVDtDXdfHCANKxMZQ48fog5GvNHVAqS7LaFSSs3SVjnBzeDBQ2jXS8PyUViTAPho7prFrS",
  "key1": "ZrLVHK68vx21fEyUMUzP5sets8VnvjEW365VY8ybLJjrDaXTy1FetZVh2NLEb7fW7sVdfPqnENkUELkTod2Dv8G",
  "key2": "518iXvTXDzkvpPWu7CH7JBKyKJwMgGBMg2k7jW2JupFWuQdnHTK4efkCsWRUrPaoBzUTGoPVC6zyeTEDQVPUGKPZ",
  "key3": "2ubPcoda7t1D9hWLPCLKNMM2HDcztNgW6b1txmXRPLdjP9g1TDhUB63TpiqfLHwGnHSvzfiogCCFcQgEuGgQVcv8",
  "key4": "56bzUCGXz5q7bETM8Zrf6RWErpEapKiM3TJQ8AYDGAgJCugYMrQ46RYmmmg9w4cmveVAWQZk5fuwn8kRNik7vXAc",
  "key5": "29cuPwtegGwyjYc6EiUhGR8GPDWzNNiZBiJAk78oUua1AiLVV5sgADu8UHcAUrpUqLdSKrwBxTGCxmUBnVfTmvFg",
  "key6": "2uXfCx7LiU4XFgC7C8F9rpPeGHHb2mYYabYzJ1NfmJmVnPHFiJDUs3EzVKCDp39gZCSsFVSW5o9rCWSb4Ab37k1R",
  "key7": "2xs4zoepV8Fv1sdTGGxSQxUARRAFafqvZDHT8tsy8tGCdmwmCfWfCJ2zHywp44UG325jxEzNHNBSvjSdjfbLy6c4",
  "key8": "2Wp8XLpyJm2kuonss5aP1pG5fyPKafpn6UQeUgs1jBXbXwwmT9SkP4W9X42E2qNGMf9nktHcXUbtg3s2iLepfDgX",
  "key9": "5THvgwUxa9gxuTzuYMjboCg61yKfpTGhofwK7bz1JbrPcGPUzr4Jr6WYSeH1aPjsTk6gBq4eMQh9q23vmfcz8moo",
  "key10": "4m3qgJij6XGrX1LUzAV8qUgaWnyK51fCmucT6x8xisvrUroPUXK1Wc2cD5bNyqffwV1BJMXPDskPFbYxzGu5vbmd",
  "key11": "2PcMWReazY5AgqFwcL5VByLzjdB5JAsdxefA5m2rzMst35GqQkP6p2n1AddB93cGs5PD25uvwhWmr6EEVsDTRrW1",
  "key12": "3G8yb8ViVfLJPPob8oQqDaZZNDhYH1CP7HLruUsmJBSomVaEr86GpzUAToE47cKkYGHYcxt8bzqJPFrqSx678Quq",
  "key13": "27TQvkmUDeRP22KYyLbSHGmkquDDdvGBnFV88YozLfyK2wQWiKzEcXc6EdNtmABLd5JWvNE6UAoBgtiLzYLwTuap",
  "key14": "2MjU3c3aCLCv7QkaL4Tfev9fdiUGVG5MGi7VgxQzRv8M8k8vuhRp1fFS1Zyu8JLZXhVJPL9mZLEu7L2vLJE55iNn",
  "key15": "2NUMPyug7X9ZNBwjxjTDvBHF4PGpNK61svsw2sGC9swN8sKAvERmBSGdQaZsQti8YK21M3F9yE4khFgcQsp4ep4k",
  "key16": "2e6J8qQRbgPTktApaxosjeVH9AZ9PJfrusKCQ7Ugx18sqnHaHtPJSBYdv6DL6EbGUvVEugxSVafQdTy2rtcabqaH",
  "key17": "3E9eMwCEWYCt18hh7uMKjd44hjZK5Xbg3dC493XZjWauL93F1hFWJBD7ht5ZtW7SHp29cAQmiiYqSXR1SstYphiA",
  "key18": "5QPgo6cGt57HGzQvH4Jm4y6H1EVxu4bCbwswhGBzCeQ6SRu7BUY4bQNUVxaRzk5sqXpyb9k56V9mCj2niJCD7eLW",
  "key19": "3ogokmDYER8Wf93yzfC1JmBLB1Q4vDBxC2QKn9qzgTU8esM7FLpZcQWXoaZt5Hbi6RkktrXS1rn2J2rZkSJ1BTHE",
  "key20": "5vfmWaoc8uFxHG8Jd3DVrNsJtFBDexUmB5qjAnJm9DUvgjyi28Stns2JN5jfCPBpf6BXQB7wu294n9HyGRqipJT4",
  "key21": "6itzC7z9yKyyqS3UwEwLMRhm4VHLzxdYC5KN16MXZFBm1vrmoJ48ToLpQ1Vj4h7axpSCL4kFnMLHS9p8Gg96WXP",
  "key22": "3sigEb9tvn8sVTgxC7Ld6368K4ErCqjvNFSMWoz6jhsyPok6D45uz63rCM5Axxq6mkH7x2sMbdubxhMPV3bHxJBC",
  "key23": "2umap5fcg5jLF5gTNHmk54i8Gtcr4h7AZaJuQ4ABwaipBJExHggp2D6HSB8kBgcB5YDV2Mxx4q3qqDPXPpU39uF6",
  "key24": "rTWtpW9kxCu6YyViEDLSqpBd8LJvTbe6UtEgtfFyhKWj92AiEn5XdawaritCx8UNP8MWTMdNV25aLGF7mEHdyGi",
  "key25": "GJK5BYNh5UGHfTzDKkRSatUYW1HjCVQAo2q5qx69Jj1xttfMoPLcaktmHQj9q7vjkrnZSFqNqzXKE2vcExzX2HE",
  "key26": "5tMU9xku9duZWjoqiuTLQd8DQd6oePjvYJ6F7X12Rd166ZdfaNcSVyVpBg25ZDhzGXcVavEHFus4fLmU7FXcGnJ4",
  "key27": "3swtB3nroa3PS2pJJBR35Y9Vrjbtaa7VPdubBwCK2BX6kqtEKkcFbhGVZa1Vf6KrVFBGRjVK9HY418dHzSs6iaLN",
  "key28": "3CJYfewFV2TSQ5sFMTVKJQBanXigD3KopJaiCpncLPUveAF4UHgmHGBA8SJwLkywcvJtRrjT7RsyiCayWcpQ6Jo7",
  "key29": "2VoTdLWXQZxc7ooKkUvJchPac9gP1D376uDibyAxAcnbc754w8ogLtk45EAwgeczW2LRcrDJivjid3774aVEiG2A",
  "key30": "2ro97EZyx7upPGsBfgivWDpRHPyKCDn1APcBaqH45L9Tra9pWp3sgEv1JFR5kgC3SypFLWj7T913x1bNSEWCWwWD",
  "key31": "22vtpcq9T6L8uQRB6nHWqqvY7A79T7aTPYrX64ZCHNk5pFK896kSQDcQAkMKULhRi8Gk3CemNWVv281958S1sevF",
  "key32": "5dx3znhbPwMWmpeGcnkt7t4XGyb59c5btVjqyaqQg5MGvtCprL4NNehcHPt3RyJqkn87wXWhSg4Qw4kT5XUGZ5R5",
  "key33": "3J7QxogotnW54KdV9z7Wtphn787oJx8UbtVWoyu3bYKMh2jEU5R7Dg5Y8zQg7MNw1Z3CjzvF5GwUN7Cng9c3WWUu"
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
