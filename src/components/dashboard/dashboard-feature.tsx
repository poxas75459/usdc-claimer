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
    "3DHHv8K68iRorkK9ULkqqmi7wZi9fb2CUsGCx5ba2VxSsiuADwU8CHqEmgZZF6w1PhbY2jcHKQJZa33AnDu4p4Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dj2U5o2WRwFje4Uo7ygc8rnQAiuWhPSBqcQceQaC56NEZh1v8YfK6MDVKvNbQbmry3jexw2qZHhRKhJ3B2rjfto",
  "key1": "2AMxViMwaMoWVzVnsFvnB3R5Z4tzavFPYa5tYADHp1x92zs4GgWBbaj6esUPmKHPtS3xeoTYqbiD2bvRZKcqF4sJ",
  "key2": "4nuPnibF268sZ24HicjKUKMTkqppk5FqeQm4wcR5LxMAoPf4q8Yn4rktbKhQQQmkpB8aoupZjpYbTZmefvXT57n9",
  "key3": "5wLeSFaoKFLq3Wy1MtVa7vcs6ew6X2AGfWpjwfHXHAB7BFzVtfyxAe5WGHAnZbT4cP3hxaJhuukDytasPqzPmWGP",
  "key4": "4Ms9AvgMhq2oCNMpJwAG2ktBLrEYxPKGZmMC43f72i8XHDeyLU3tYuGhLL2bBbVXQcWLBoEYzCCZsCnoavX5PZEJ",
  "key5": "227eiu1MxR4ekqCECmdA4zcXhvaLXXNAC9G61u363Xvs5nJ2htfpW6WCiqkhmMykFB1RWPWruE9zkDPyZYKBo4tz",
  "key6": "48UzEAwbUhikVPhsgwbZeJq8dHYMJoV9Sa14smQyT3L5UZEsxjhzMANomy3ofFogR368XvN5uj9S9C7iTgJwQYzQ",
  "key7": "SwuoQWTevrpLg4GRfvFhdyJdMjPeWjPAC4pzcG8Xu5E9tRnmQLQ6SMkc6pdNdxnRqJsekUXaavSV6d9vq7nAp62",
  "key8": "2tp8f8BoztNShEyTZti5mVTKRLCQnqoRTD73bSdDry63ks44a99NYx4u7Uvw8hmD24fbycMQGnfoEMBfo8pKAuRM",
  "key9": "5iS3V2sZT7zDG35k8VVS8Cf1bu6g1xd59tpCbNJ75x76PMBTEertk571L3hh6JN11GSZoHC78uNMiGBLVvAcMrws",
  "key10": "5aZFT7EX4pSod5exJcohXfp8UawNca4Ks2oJMgNm6zfKAyKiCPDR5EqZjjqT75RRBYGGixXdu1S9vsHJ67PV4322",
  "key11": "3CN9Ey2iDEDECEGuzC5XecHYwMaoffgqGoCqkCStgbZaq53gNMT7kW4bqY8twZHtVEWNwdoo9k9yB9Da96kXswXv",
  "key12": "4f3ysm35cV368Y7VXRLt7iy3EeR6AfiJeDEBtbSxwnPdimY3nfyyB6YLFNYEZqJLidhybKy4Qt2Ly4Z2nqbN3ck7",
  "key13": "2CJa9mfi8kwPjsDxNSBRR3x9NMDT1AqTsW5YLsUQc468M35hFzMjfmHnrw7xzQJWL1iK1NX7GArgBbggLFgHG8DL",
  "key14": "uAjkb1AgYyXDkAvmoeLbXnQ9WmiVonkBkboMvLtfY2KGKAfk6WvjFSttn3zGFQERV3rB9YrZHa1HvpYFkrCTPJ6",
  "key15": "4HGe3THdTf9PnKsSRqMwCX5yRNThkpcWzRy82hgAyFng8wZS2cyjLuTTyJXsb78cejSewcBiaGR3zFWh15xABULZ",
  "key16": "5jCW7gE28jZxKhuQXaqXDQ85TdoQm8D8d6RjWJTQBVcroqAbRzk3XbQdK4jVtBdgu5R3gP5ccFDCEddhPb9kHwMN",
  "key17": "JJMZ7MedmKuCbWjyTvE1AD4EGfiVRRPNEGbHjz8yYWZCQ2ZZFp6hg638P9mdAvrWzeVmyELGbZQF1bizo2vSNB2",
  "key18": "2wh3zGu38GvVpgbUJ2csceGJNhtpYswHr6bigXLvg8SCvcazFmkKsy1DaWw9v38sWucRkK3QxLcsFkkaFTZJZRo8",
  "key19": "WEnWn8HsmgwLp2TEN3wmGh6XWUMtVJnp91YfwJPtJtMSGFVPKbDi8cUamKC5G9i8dzYsnrKUfu2qTRRsieC9gZH",
  "key20": "4mxdf2c2DmN3trNedZFCE1QinF5zzfcZWhkGyzWFo6VbCD6UC51RTYESc9SQdT1ETsh4hP68mreTS4t3SaLEkkx",
  "key21": "ufLGW1MCBcuV2GABRtHukSQ7fLsYQx57GLYMZPUz7c2ryF1V2WBaWb5BNidN4JSwcuEdDK7Godp5HU7CUm4TxGV",
  "key22": "5GfL3eTHFChiXUkA4Q98oNJWZ8MSVN2kL3fDm98bSue8XvWvVVJMAw2dYCPEvK4kQ3gWsNmURrwh8Rrh7CsTcS3K",
  "key23": "5bkKvL4nQwn8bEgTzptz9q7BvYik1mWPgpJvpsCUqxghQ5AeaP1SvKBSRUKVvUJFiQCEkscc65ESMLY2khBEvsbc",
  "key24": "2DfTfghvtPmBiVcMSfYMb67fUSH93b3G41afAvs7NsuTfw2UTHecz6gcEHRzemv88gGBXjnk9cNkftwUXM4whLYK"
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
