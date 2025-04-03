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
    "4CE8ZFrgTmT52Wu1ctCf6iWRs7oYuHHjXjNfjSFxC4jbiRmKVzZn2BR7GGTeQ4buKTzTGnu8grptEio6WLBQivER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWuqxUZRdEqGLErUU3vupkeCdJRHoAtsz4o54Yww6jVLp34ugi6afkpAsQGt2k8XUXyWyF3YZJQZP8Z2gpLnz5R",
  "key1": "2byMRUEhjnVt3ZwcCvxTVLRLjXDrZNXdTq39YFFTX7LMCVwheBSngXMmQE4oGTWeW3fRRkFAWyBESp2ydGAd2WAt",
  "key2": "3Cr3LQxadSkVGDUfUNUwsvBazbCM8BgAAXqXHow5NeFXjgQ1uvvgYdprCAvGePZcgjN2hErruUR46cMNZ3y5QX2w",
  "key3": "2w8f6ZwsMwhnT7Ngo7NfT4VsCCotHBAuLMrEAndkQ6vnyh8budR3P3So1S86yqdAAWZoCjiMCuhDWQ18PXS7AT4r",
  "key4": "5sYi9PNUnD83CCRnTdHeVzpMqhpLtT3CwY5Di2wtGBKNoZNPmf1CteEz3J2PefqCmLCP5p4saD3NZg751fewqAtN",
  "key5": "2B6cK9RH65zcWF4pNuz4CdQXc6aBAnhPgB58QFSoeLNw6CRqZyV1TDqWFi1j1dKsiz3sYrfYL1nbH8HFPPjZSW2z",
  "key6": "3GxWyo9XSjMTZvzFha8MV5xP7ZD9CHifeCjuCvyqsRQ2kYUpUJqzo2QDJHnRjLEj5vcmeLmtiq1ekfsw9FroYsdC",
  "key7": "3z11Rjk4Ln2YsBVvfUAD6cvcNmiMT4BKWgkCrnfqXgufG9jK67WaZbp6RPDy4J4T2BtgEwQeFnLtWtTALa1sayDb",
  "key8": "35JXD4Ah5sjhvStsWD5KxvXxJj8rmtJGgmLJA33n6JenR1uA4jjktp9vR3E3BCJdMPSRpziCDYSeb6uhHA5XJdr9",
  "key9": "34unLTqsa1pgZEne7cfabzP1xntve1niSVuKwLGgWSPvxPymrNpieVn3ycDk774G1YAgSTfJ4Qai1qvADUTiSvsG",
  "key10": "4BPfZKUWPvjnV6Yysgp3iRJUM53EPu1jy1tUhUE1mAfQMLCUEJDeRsS2N9vz1fLAqFSjGghU4ANbdp6BgjK12oRW",
  "key11": "jv1DXAMBjYehBsbooErqhbxcF4LmKQiUAt5LqREENNwa4rGLEoXw2vac3pXuEdKbgnkaKH1BBfsZ4ZJSp11451b",
  "key12": "5JhStrNcaNv5J8CUAvsoZSrqHHFHzKmoAyuVz9yt1WsqBUFVyJzCJvBSmYYcRN5giYyimPnaocFsHW8GKAGKApL5",
  "key13": "36BvZS6dYTnVDVWRgziv7ixcJAg7e6m4ttWAdnZUrqAN6tgVRwadtD1uUyoGb6m76cjF6at3bAM1uSAFZP5iHgKs",
  "key14": "4maqEBmQbLqukB37i6pXRYsSFAuB7Bx4d5htzHynBHpqP37CoGw7PFedQo5WQmyQwF9hqD4K6Vav1RbAPYjbTjW8",
  "key15": "3YpuVohQE8xLusT5TFUdSMGcKMjViPVZf1f5XYMcfSSmUCrY4L78oSHuSFUzxLNjzPHyzMwemrCtKoTQvfQBfxUp",
  "key16": "2Z2bzVdhsKZhPxbmQkELF24UFv2yrrJnyS3GG4TDhqxeRhU9cvCBtAtf5MdwkHzP3vKiLAvtbgkLjCNctsfwgoEt",
  "key17": "4RgWw9aq19cBZcReB6WjtXWXdq9rCAG7Zp49w27WqjaSGeVHEwhU1FjnHVBKZw7AVSWhaYFGEMtvo2pgqTijU8Lp",
  "key18": "RLgj3jwnmaKEAm5hautj91iGNYBokxFvu5W8Cu59c9pWcMyMaLr91rzXvmESB8LpsAPXvd7nAfyGfVfLvvKST4N",
  "key19": "2Pmcc3AEjjJjTAp7GPDmKRyc97UQTtBPMN6WYP7fE6u3psDs2PAc2wDFw2W78DNtJMjwpcvtjKVFgDBT9v3hshNt",
  "key20": "YGVqyeUtrQFRwq6tnZbLy54NET5XpNc5vZXFEEqCxMK8vnDA9LyrqdawrQKdFnDYVt9s98nD44WYeQiHsJwxhfd",
  "key21": "2HicgDh1YCJVaSUwNhYSikyBEZ5SE4eVUAU1JoREpCYSeXsy49Si9FAnZZoeqNYF2DrLyDcGL6Ucx6arWVCstESX",
  "key22": "5pCt4tPig4VcLjvDSkZh5kVqoGytBUEtpjfUzBNqUMGiLr4TRztSenz7EWYSXh6dvXaqGkWH6jpKhtCQ7d8hrMZL",
  "key23": "4Mhk79snoTMUovvDCdsfsh1rpZN4R8cd75xeTYCShgsqMLKwMf4dXrpndy5uHSzKSQWpoiQnA3DJ7mjxkRPK3XtA",
  "key24": "21t59VEpao5x5p9HKj3xyUN31P9p2XJ5hBHZhnd6ZDBozYSQL4RQvPzFQL7nrP3yV4aWededBqFj4SeqsaXFcu8v",
  "key25": "2q1f3swKyJpKr87nxgx5izYxrvUe7NNEAcKrCkA79cYc9xPqBCmxb3N2NRX6DHVztyAqwULtzmZ4aqEPJMCZHEBN",
  "key26": "4XKcb4yFoLiab1VNjKEyzRr91k1ryRgsmtaPvBReGAwDrSNAM2Ch5M5A6VhbtSmZZXvEdfBHbZBayxiTBZe63zJD",
  "key27": "4dMLzMBs5PyUwVVy95sszdjJZUu1dcu35ygYEHcEo8wF3iQCNMWpkoGQH6TS6Pdrvhcgjh34yhuJWuomVhu3cUDt",
  "key28": "88cctuadfyD7B7t9bYmPWb8SSTaFktrSNzAXTg9tfYLUHLLFk7ASgLhkNpA9D7a7hmkH6kVUdrxYpGbky3HQR1Q"
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
