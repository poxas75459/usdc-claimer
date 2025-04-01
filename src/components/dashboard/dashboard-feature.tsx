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
    "J72kfCtGVd5dANnha3a8haXaDaNz5dsrxtTppRz1nXGQrv2XJyKpzoRb9SWNFA5WyvwxoUJuebfjRZFpZvJHnvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjgYWscdzA1Bp3LAXcsSb1z6uG8rSRcoBowCg69bs5PTo1iPgLJtGGf2g9W3PDhqLcARpHsxFWRXxK8eLe38ktk",
  "key1": "5RrD9kkzJHWttBdm1YFp4QxX6kgqo46JTSN4hLRwEry8JzLPeBYMPvXpY3Hfr3dg7izs2C6uxARgv1JNCJdhEK1",
  "key2": "65g4G9HY3bUkJ76BTgKDNu7GT61RTaQdFqHMSXJQS767K7cyn8598ZirtDs4FbW9tKcxdiioTt6Xd879eFZqwEoN",
  "key3": "5ooD4bVDHpzmGdJV5u2ySEPZxMkqUgYNPYUzEANMLXufrmR79CXywycvna1hzLh7LFHHP89imJmnEgsXUXkk3RoM",
  "key4": "4TQzmw9upstpTeGAnG7YxerG7AYDdpV4RH9wxULxkNKoKFterUjTXdWsZU6BWh47GXM2eJprZRFWhpUJNpYqvW4t",
  "key5": "MwGEMEVaPGBPodKhAYwvPfjvW6ir92azv8b4WiQELYvutAKGSB2WcdVBNUf8DYFjDZEhtF7acV51PfBuQUX1Eo8",
  "key6": "42j4irHubiaDA5ctL3vLBuAQ8ipb82yBsmHZptrEH619eGFFxJ3Xcb8FYHiu6FNYewFVFLqYXDhH5pSrkHLp9kd9",
  "key7": "3EV746PNfgSu5pNuXuemuHdZRCkDRjBKzsSV43eqDM4HufFVTzUs1mtE3BiLVEGj8kdD1jXLjiuyT4qTqBb3K6dJ",
  "key8": "3yUcAEb25ikdyswzLVjZSYjH5pqw29g3mrCxKvffsr2BsuKcmD5ojYDiDZYHMqSkCQsqwanTGBr2ZgLarHcbi6qq",
  "key9": "5FMw6bi9Vn7CZYhw5L2aznDCwzHrfD4HQpwypvNKGDMxA6uEWSDdUmdcjfGeETJ6DnhE6hUtd7VTRTtYvSf5PkiD",
  "key10": "5yYH2aomGZyZ2LjvGCXgFdSTKxkjvB8GW7z6AXkfppXyN7xcrbLsWXg1XoKQNBDVTJdVgp1TvLxSBUv6ELTMppaB",
  "key11": "5Ef6d6JyEJXWcqCQEwYoGoWgPMVitoxxSNFgH8fc1anGH1bTnnvo4SLQuQ491GFHeWg1xw3JtCqBDXZWMFbWM3bv",
  "key12": "2CcUuxziGEbXg8ghRTANKzYJ2smqjkcxRMoHSRzjGaYSx2GakXa2MzeyxN46dszBK8vR11on7zEFHLzX9evcL7NC",
  "key13": "5ofTdDy7RSQvpvipJZnaUq2WA1qqBMc79dxc4jUp2pkgS4Xk9aYVDmFYKw4KrvBMuyP1rUbhqKCpfFihAfBHofGm",
  "key14": "26RAbMfDxbP1P4hAhJ4bsW3UmuUCdFUpiRxkiUTfDumxNdyBwQpiSKhg6NUr2up8mRaT2UDt24Md3dFcJJiaPmdS",
  "key15": "5evKpx1KfKyYs3fbH1crkh36o8RPwdqsewmA2V6WmH1v94uYLXwzuwAqAbFMUV7uuBYTS2Vp2ib1wn5SXcZN7G3m",
  "key16": "5itsjHy7EXKG39f8s2n8pXCdRfrUpVfJZMP2YDwB2dTPTMPHbnZTaafp4zKuNTbwQerVkbYx6JVymPJF49mtNv7p",
  "key17": "VTvH2tnJYtoMxhfFeEoSUK5AZjALZHYZXVHaAZNgT25tKPNqGpNzDLezn6Hb41KbtNnJRgSmKt1grnDVDpyWJ4f",
  "key18": "4WMNomL42nx3EhCvDiBjcKBk3iJ8mNr39NnSnbmWqfktJMge7rDC1ajNgVFGpcmucstVXvYe8sy2pVjiAPnwNhrE",
  "key19": "3bqP3uRmBygkEBQSCgNSUGxQn48vwnvskbkg62k8m1GbuKqSDFhk8FmrL6dFYs9NBJtSYgpXXEjjCfLahJjnyZW9",
  "key20": "dc3gJWu5kQgdBfuLsjHHmuQMQy1iA7VYMZXtP7yziFwBxJTsoZBnWiPMe7dgQcxcM7qNu9VEW7mtvZinvRwFvof",
  "key21": "2XHtCH9cC4QWAU15BNAiZkmk3tAPB4fNTPeQyPgMLCaxDfNe86uAZssr375uehLe2aWcEd8Y8txRiSdexPWaDr5c",
  "key22": "5xJApJxCV35iqp7Uu4erhjSwFV9sdmWKhGmSh2vVwTWmW7BHk25LGsWaLnw2WBTmesCBPDoQFYSfWbaTgHrG6LRA",
  "key23": "4Nt3vPrp5ZCYmMiPnkc2EAK6nKJXT9zWy6tJXU4ausfegYV5KtxMU2bBH9ar4fm1XVxresSNBYZ8q4arfmH2ooni",
  "key24": "D8Gfznu4XLmS16MJQM54MkJgTGUEqE8nt2VQNRcNqXSdqcAWtjR1eQi76zqh1Jq41HK1PSb4mca3kwuhBFoUf8r",
  "key25": "5PRppSycxr7woZn1qVpe1dHEjkTseToLat38MWaPHAjJmWWNWFm4MUJSFLajxrbAsowvHZGP45pQpqjz5L1TPHSj"
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
