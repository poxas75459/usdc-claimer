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
    "5yYgDVUFLcvVthVsWwHHRAo73o5nHizgAsWysjp8sgtfKvhZuo9x83zRSgrNyCG2rVquB84VzMBahJ3NYKw1RCD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSE9Qig64LMwqhBju67hyRxrcuCasNs9uRE1TiaqTN5ZeGhCouSsgb6quCG263dpKs3mp1ZZSfhEHjv5QfiF94c",
  "key1": "FB8zDA6q9HKDwbjmHivSnXZNMojqyjYQ7n29FYnw9TXDfUvXZGrkU3KXXnjhpFDeF6f3MaTAQMeXB8sPNkBnbcC",
  "key2": "5FJAyD1Y9gysL4DaxYCEEmhs8APks9q3FDoMoSCVZ13UvGoXmmjpq8cg1x6cjPUMtzvigCdprXGCD8xVLLUtCHDX",
  "key3": "MjyEFH5WxR3r5Pe3UBEGLBB4sY6sopmoseiiuUMgCXPFsPAgXxqdT5Kt2r1GDxu1ZwENZoA8fizoJtwBcpvxL97",
  "key4": "YagEN8JvrykDshZAefUNxMyGNPph1McJqL4Jm9PzZvk1AhhBuPhfZrSG8s6uRw9puV3fBqAsqtm3f4DTD2AXgYY",
  "key5": "3WqmTW9fxkVYP8cTUGLsHaWbB8fcMPC4f9BwxDowL3oWGg6ecu69mBRrCSS5YpvroerHugYng99Ekzx6hbhefxHn",
  "key6": "5DroDFw499ghQzJy58Wbkv447A5LjT9GUcZd7TDTiMAZwzJRwuStGXMsMazTE4mqUSZ4HMAgqn3ChHh66LXdR22M",
  "key7": "32jxMa7PdSZT9Me2af4YzKBhtwBvQBZjsMiThNDfAevCUSWnsxQyRChttas4Ux7QFPmK5grSRWsXtVnwk6gjx7tF",
  "key8": "4VHuTwYnEWZ4yAWyv3awCEhN6Ref1k2hY4Xtps3HvFcYkEb264xzSpoqVS3zb11KE3SfkmHJRczFRNEYG61w4Na3",
  "key9": "65Bunmm21kM6VBjvnm8MGRDBPr5xmkvWvL3N3VvavGT1UB97nQNpdeNGyNmtnM1Kn6tytJBnw6gJhdqjwH92yFVm",
  "key10": "4HyKDosWydHTDbA8Nf5Ng5nB8Uppt59vcbAurdgMTFoybYByLF6eFZwp3JBJRethVvgbzju2LnDCr8PunCzZKWn8",
  "key11": "2SW7CsSs1K9uhSeUrCevTN27eBEEnMR7qbRQP2LALf5sWYbPYzAZhuhRa6JgHUrd2bQLzF1YHYUFL8fHR5JtnRTv",
  "key12": "5GajknvpWkssvRe1MzSHRKg71ohZDHzEvykhBSNtpfpcG6St7rbwedNn2JewHfoRKGDm2y8FRcdZF5pXyfG4Xif2",
  "key13": "5cj9iAyjYY3Vk7rS4tgWXunLhvYR9qzG4ruxbZsk1soQH1byZqNWgcx6BjEWLupbpEppyTgUmHwzphSjCaU8RvVs",
  "key14": "45qFMo3NkrTVwnA5ExyAdo6gPYwEicky2oremgTgUs5RLFgdLsYM6tdSeETSdfMPeARmdxNB5sDQ2xs7PoJcJF5C",
  "key15": "2BekNeAHqMpCMRZcsPiVqZ7fjP1jCYiGtDyfiBr7mxWNcDJkPp3v1bgqq7Ja1dKXXfZdBi4cKnSU2Ge1cTCyPY8D",
  "key16": "28188GqYip4riiLTrtQgooV1nBhatUD9Gv3fJbFiLMMEBQvF7z7rryW6qRsdR642dZwWWh78ckkmStudZXGKBofE",
  "key17": "5k9kdb1q3ya8xQA7Eh29W5KMDMkLkskawB45XSDizPVBJDqHRrg6tex52ubhpqtmH93hcpousR52k3NqiDCU1Das",
  "key18": "2AJZ8CHwmprJng8Qvg4a4TKCqJ4aMuY95Urm7Eo9c6egaurmbwosBuEcFSfPzf8i6krwEsQiiae3ACNc8htsP79b",
  "key19": "4T7xakQ6PXzJXsh7wEK11TNDtKzGPAM5zgCGCW6K1rsv6Lzm4dU6Fe3eVTq5YwNPfuaSTeH2dRadfqTWLyPZmoRP",
  "key20": "2cZ8sjnU62AzkBGUJb6aMqdS1kqD4RMvyB2tDzshnXqEH5egn1Z9Mv6xjLXX1nyto8K7ffxWQcEtu1h3z2pMpePv",
  "key21": "127bV2RwdQULtfd5JvWxGvbGHTw5fX6eBYm8h8F4To5YSm17Hu2jQvwGAo3VXoQRypxXRSBjXKvCKekgQqM5GsYL",
  "key22": "4KSGAxnT88hpqN6upKWakR6CQw2J289PQpd4gE6NMZi66Xzv5Cc9xLUbikvpBc8CrxRVB3uRaeXQqdn1akLojTjf",
  "key23": "2hf1VBzUt3Ev4qtpDUcTuHAybJaxbGrDmbju6SQ3pLLaMeyD1P3g4kKUzt9cHunMqmyQEizrDwebuB2YEKDwc25a",
  "key24": "41E8CXxE3K1r2uRHmuUthpBixAk4WFrjQB53X7TRoopHEyba5P5QeERsusQEQ55vqg7zCPApiwvKg2AZo3oKo6bt",
  "key25": "3ADGb514bGBNYv41LfwaCNSnpGs2WMzVK3XpNqYEkTGHiGnnk81vS5krQxvoevbMLDxefMK3CLzHqT5PuB2LtP36",
  "key26": "3rswJhUQh1wGNffttado8xJD6iHGWiAWHBaWzh3EroWXHcSSGXP7o4SzKu2q36A7F6zY6qSj9bhjhfsg2ES2rXbZ",
  "key27": "4fQTyQ8EVyZnYxZUXMzemmmnqdQn2ga7RX9rwEdgihsaVweY4J6TrFHJiWxe4QV9qpgiJqQ4evfWUTcXsTzqpdGp",
  "key28": "2Nzc8tafmRJ75hGNRZEvxQuVvTrCzRp1Um6DpQoCwc26REA5FQQTtpWtTm5VSdcfvyzFNJ5LEe2AfykZ7NkT1XqV",
  "key29": "4YYuygxL1x9dbzTkpb8YjrDHDnEHHDoXXV9PXVoskveSQdq8AB3n3hDjB5w2rQav5fLsuZBGZvooP1Cy9KcvhPxq",
  "key30": "4ubgubghc6muc3SHZCDSA7bRXQD1mDGSu16wD6CUvpfDX3DejgwkgfABZh2S2LfUSXSm4iQXNLyaB2fc5U1rdc5Y"
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
