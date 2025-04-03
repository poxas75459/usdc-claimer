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
    "67keZoXP39rjy93UWVkR9ERyNvYfgr39knBhw574rqnQLUvsboTJm615FQNL6JQM7AwmGAex6jisSZB4ovGTzQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UH6XLVBG6ZVWsFCLTnQJDpjkfayDiZQF9gxcQQWKBjouwontkca8F1uxw1rcZd8FBLWwcqXFRua9aczMkbTj5r",
  "key1": "37pWdQ5KQ5whfbVEA8NwEf5tvDydRkQCGE7nJnD89XJSAbs3fwQai9NrX8eRetsix8XAUGCj5wohDJ8L77T6pf3t",
  "key2": "646vmGcKi263ewzqaGy1HPtu2TzR9QJD4nuZiik6wGj85yKf82CVcbgieBtxXuHk21JvdabiRKEukoENxCBRwCJF",
  "key3": "9QmuuEkfb52BzbPUetCk4UeeJi7v8XXMPgUPSe9wwc882fkuFRj6LKtSvvLhFhMtUuCA9BjusT6oB2CUBNm4RJE",
  "key4": "cLNGw4gtpfdf2YZToFwDKPuj84MgS2xy8ETJGNX8WM5yH5rYH34kRuH1QnMdYNWGoJQhmR4VMtwNSFgbtzQRpxB",
  "key5": "NjXATyVpZVv7CzsvUv7fPtDZUFmXHuSX3i7ejofQgcupuVHmfoAvZHJMiJNzKjyfLttimBH2P7h9ZCX9PY8UNmX",
  "key6": "2BNYxK5ckgHwuxiZhdFywdbHcrRA4gKwvovZGby1AFw6bA2ttjMh3ez5o1vpPPwSWzwY4eH4ScbqKSLS8KJG3B1g",
  "key7": "26HNb76ig48bxtrpgHCnNjewhiGSPHtdghY32PfHhe3MupeDegcJUi28C6ecYAv8YqhDZ86y57tNtFZYfUPiAYRF",
  "key8": "4Qa5hewvqynth5nHChJMYtrYadhN7D1hqmKVYQWZzD5kqGBDrqb86uoNfbRRMuTQYRvLRMuJ3mj7AyYQ8gXDXWy7",
  "key9": "3nw9FWcMuXqcoM1p1HyMwryuuA2HLRUWLxuPNACdGXou5MkdS5izHHw7esv9Sce7ZCJ2K8BGGNhTmXwgLkQRt3RH",
  "key10": "3DbKE7Futxmcz1AY2dmyNK1xjinaGLTLbSzpEVvX66nmcmVjRAcBhka2nruS29LsSaWAY2GvccCjcLHQHuYrR57t",
  "key11": "5S3foNtsJxcVLp6L79cc27HEd1igfVQKSvXB7kMU8eGYgygz5kBzMvDp5LN5rYZGAU4TXqWb6zKqi9JzDhKqPnX8",
  "key12": "3Cu3yTiAMBH8QdQJSqWJD5Gf4aStrK1hLDvZEacxuAaf1H9fsmehnqFspTqsDaAL6xAUff6GmSP8FRap3ZespzPU",
  "key13": "5Cr22dDWWaXfX7uLSov2RnYPPDjatz6Hzd2kCtTNg1CSvUQ9EBUpgnsgiDPJFoR9Vcj6ZiXX2oeHe35d2De6zygB",
  "key14": "3xxaEnp97CxmE1NGnQPbzbWBA5PAV37K3dskJHoxnBMTAJ8ekfqtxKnYZViTsG7wtedFZ4Ps9RZLwhrJWfPJ5FQE",
  "key15": "4YE6J2ogu5so3t2TC5DXBPq6zHneK5294ScsF7hdhiQcoPNjLJMAMQorvowxE2qkxRTxSjGkyzwHwXpMVPdEW9EC",
  "key16": "2NEEM2Ufif1iLXYpYMk8HcZ9VSY5HU4cQbjLmrNDv6DWAMebs3zuqiLDy9Aq8jqLmPogoEqFXWUdeT5Yjsg15Mzk",
  "key17": "gSgyFNSkivDD9qV5bGo39AUWzzT62cMRuh1m7rDp6yzmhMb5Bt4es3xZ3Rfw79cNcGENYSa5nYr8E8FrBU2bHb5",
  "key18": "4JsSsGG4DvtVfJtJYFAPDH6NXGAgKUEnco13Ki5mE1VqPM3sjcWWFnCdovKXUoSB2pcDkaCEmVHWZVgTZsnAJQyw",
  "key19": "35SFfJM26movQ3eX1tUorzmCfdiJpKGJWeExvomosUdevmx8Zpr2saUTd9SRkhSNRpWcig69r4kM3xj64vupE6Jh",
  "key20": "kgygmCcvc2r3fu4zrttjZXQKvVgUZHaQZn4p34Er6vJDRgMPdBibbWZqjbPP6DhQgingEs2pi6jjyAjEYAVfrvA",
  "key21": "2zvsJT1zm6RQ5Vv3ESkrB3s2fWrqTTLhnjF3p4rPJUcNU1qq2AjQfjkLeGgJinEYNjkEcjefTgMRE6srGhHbvqoS",
  "key22": "4qJpApyzYrMMszvdYELDRMoM4coZ8Kn9oQckQcTMAD4E1pAzTjBRLbpS8BNtDhyw5aVAy8kg6eTPv6t35Qb42hZh",
  "key23": "4UzUkuqWpFhKF2X7HCw4xyUtbgBV4R3rNJi1wGyA8FCD7XGNU9ZBfmg1rTFB4DdiUQwYVmmQBMuZqPXCEP12zgfr",
  "key24": "4dhsu5jJP2p1EK24ToDxoGSdSNMc62gD42ppaaUidjcGmCDiroc9xfYEbqadHQbGorH4kWmYLh1xd3JW3umSS8Rb",
  "key25": "3W8sg3TZGUp7vDokgTNDeHyVpnWQnZBxEm9kjj3xe2Qk2et3ZAK9p8UckhgN7KzBzKzWTvr6zQ3yihsdFj2QJAqr"
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
