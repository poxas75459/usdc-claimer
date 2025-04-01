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
    "2xLnW5CHfgrJGyjFZ9D3uRWyHpwL3Xp3WQdgECRmUxttxGGjVq9GpCk8FbFzV2WbffHCLTeoyyn8MNgbEjoYy1mL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31W5P3QbKz8sVksQz3oaogK35pC7fVpnVKcMDRF4MLgfbQPHWjmdwapK2BrZp4oLRSaT39CCR9zDY4NxM8LLZbyV",
  "key1": "4eEpZJ2sRdQdU49PYnp9kYzxxi6PP9SfFybeAGrpqs6jSTMcEyYQ4LExXr2Lf9p8B5qpdrXmzgWrQymfAAxkSXey",
  "key2": "2cgv8RpQrK3UBom6wMaT9DeKBtGTaq7zdWPXpw2tdA91iYNx8SWfyoeVi7RyBTfNaDXQkU1YzJWVrW18k8b4DtxH",
  "key3": "2xoNxJx6FDA7GYKU1GSTR7MY2UwqqHU4iCTVK3jCuXYBh3BN9bRDb5dsELDYxHXJLoXUHtbwUAc2zN6oqKHJsAbZ",
  "key4": "3eF76j4WQQujF7G9yAbvyEmwacLYzVE8nLEMaDoY2zqmffUyEWavUtDeH9fXtsNzxeDSyE51kNZFxKLFpraBPH47",
  "key5": "31YK9g5RxAaWcZXPD9V1RnEK5ZfH1d7nCV2BmpEydxAVwdyZb3CNWjroBjQH665zQBjXWT8N2YuuNrRFnfx2SDot",
  "key6": "2pAbCVSDGpze3d1Yv7Gu58qGTekCHkojDWAPGUYMJP4cQPfNUwfLs8Qf2yc3SGfQiaWeJthoY8jzM15yutAR3qdn",
  "key7": "2NyCV13Qs1oAaG6SMH31uVJ6V7oaHwT7gAkWNrWxwCCaZTJRNa88watyL8y9Skfx2XBKPTxfHStDJrWYWPruV1nT",
  "key8": "4JfUBviMjiwKUYi2TmMHUwxgMtKVGKbDe8XC46UUQ2Aubf8gz4stY1EwVHP1dooExGWknAQ9ioTm7YDwVLJzmX5P",
  "key9": "53u4g8xWkeniNStczwup3ZYTKxzzfDuLRiywCbGoAkwA1eRVaRQQiHUXBhr4gARNTmxrC8nmj6KGih9duS3E2CVD",
  "key10": "DxuWxDe1fZRcAnY6XcXxEEuNex4aPqDee9tHdE6pvEUfjazd83LKwgzGjMK5yhVcgHhdRg8ntuoQzvuEuACSFtS",
  "key11": "5tdQ86kihDfhw3ot5rVKmJErk6XprkpoJs2q222d2UuHptVpTbGX95sWjPMm9LnYYK7fEfY6zjBoKcDxzJu2a385",
  "key12": "2qbXBQ9k8B7gv3gcKj9xFsXddRGpz2ZL1vesMUQfaV59Xie2WCATmjtYRNC6D3xerdN8Bvs835QvxeTZqmjMLsst",
  "key13": "2P4V89CvkoVPjkposkUvbubeMWJJ2aXh7bZ8YyHHG7Edhpetjm5EUFedmK8MtAE1nBVToC28W6RVzcBnrqA2WKyg",
  "key14": "PnayXNx6vbDKS1CNrif7ZRaKxuLiiZM9cJ9dFw8gwJPz5B6yobMfMBbdKJPXzjZ24HyHq7LRQMf3CqyKiyofrv6",
  "key15": "5zRR1pow4VeHF8xPzdtXrZVskDcdx8zdTGH83Zr7XutoCGoriPVNob3ZJPzhR6suHG9noUSXDJJX6Dc8WPi2Y8vF",
  "key16": "2Y2ypF3h2DDKo5ASHyet1RXNbUBR8KGDGSQFmRPU9dtqN6UjgcLFKSNGnpyQvovncFoLAH1QwnfZWjs2eeHpjhrs",
  "key17": "5CdbMBnNm1Rfbo9v9fayU6jViKpRggGfWy2p5rwLaP2fTSxSVwosZqArpkb1ytT4AFUrypwnFr1iefhUSXie2BnH",
  "key18": "4UexNpDwTsLkvh2Je3UwbVjhTrvMtifDdQ4iwK9uUzsfxCDmKHNuZuRDuULjZid5VhLLt2Cte7muXbE6Z8bCdaDm",
  "key19": "2z5Zs5GoS6vfBjAcempaa1uukKczV2FSNH6JH1VUc3VYs2VHU3xPQmKw55jDmpJWZNHnPGtvfTUY68QqgejoPMDk",
  "key20": "5BtNNiRaGpfWU9hi2o3ntsaK9UntRKFceFz8bdiie4azpehdf7ofP3dr8oU16sbxVRARPxNP5agp9ao4QcKoNAUk",
  "key21": "3g2BsYMG7nmiQfVkiMz2Sk787Z2Vw4HkuNwB1RNR7QWoCw6BguLmTsy4JMEYurfZNg6YQomvf7r7uaokv3tezSTS",
  "key22": "2yf5X6CxxGCVxthHx9tLHJX52LCCeLqJi8mZeawtuxtnipARZQdd5ntNYndH2gsSSs1gPZfwQGvSvVwREDA2pwPF",
  "key23": "Dsod4MmeLzMqNnmTvCkQvK87b7JYUXuso8mQ1fD3owonNXUdfxL2YWPSGDiwJPGDNZbKVrbYVEDGUg8vTRABL6i",
  "key24": "4b9bW6Gj8x6sghVeMmgvawyiif6W841BH2P5Ey12iNe1VvPDRqiikkcLR8oTZ61kb6ak4SAayDUtBT9v4WWzwtri",
  "key25": "aaq8kn6ANscjnqz7sMaeDXG9tpJ9yFEa2dcz5N1T5D5DPqEhuF5wYGGh83qNgNaPfHvwH9Hrjn1SYihkvFz2b3U",
  "key26": "41jjiWEmWiJxrznBNScf6CYypGx25GR6ZcFjWJsqy2SBkqSCWYSB16HqcLabCXaNjz9CLG1c67xRf7pMMEpJdqWZ"
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
