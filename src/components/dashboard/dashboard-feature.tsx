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
    "3CZPZtH5QWnZkpVzjtPQuCDx9D7HZ18VrZ48Z3NSDsWtow9TQHwBtPDNc9LNYTm7jd3Rp1xLKkNDYK2kE6RN4pDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sogtRovYRGk6P1xvRP3JtxYPtmrFfkDkFP9t8HhYTF43cZanwhbbysyf1i6pzKdJCspP6T7HeWk228NYMT3ioYx",
  "key1": "2bxTScf5WB6ADM6UndPZm7Rf6edQcr3w9imjxoixU4cXJufuQKZEehFyJm7uRVVAj6wYRardWQDNFHv6ozhfksCT",
  "key2": "3GANag1PFWwsg7GjhPvezmtW2U1Ni2zpoDsyEkHHrXZiAUtYfdFzhwrnbpM9JwK6QibX3macdweXDJASiR7w2rZp",
  "key3": "4WuEQPfQ3EDJF9Jx1bt33NrnMWJyY3etvFCW7Z5UgTDwe9XJCknPf7SrEKnKs1MEKTNzJvKJNtGRfj96TGUYQrWH",
  "key4": "5eMgjeFPQY6yKRTBHWMJnYQzTKAZ2qkicpHzF9qhE4fkNGC2hcyJwGTsHKHhLgALfnqmgL5bDrXcL3mUUH7vp7he",
  "key5": "2JmC3UQ9y1zF6oT8AiHVWtFpirFnpm1arS1jer6sqmRdibcE3ic3qd5TLuGiwxQBCyL79RGDkHaYXV94WhJ9YDoY",
  "key6": "3dRCq5LSjcJRyTnCDZocBd2hubxpEkJth7FKzxKam1aRwLJMfUdFrfkCR8d7WRYBYND42D8WraF82TPcGaqfsGtp",
  "key7": "udsdF9pgc2QbNSmtL7inM92rjMH9CWSMxbvnbaSmKQZ7FQqcKme8pUFsyrRjtJpH2UKzdoUaPDsiZxLWoCF8Qj3",
  "key8": "8c38wdNKU8a2JXXuZxFSvZPasbxMmSQWuJnC38HCoh6DaMPUMQWzMox5jXT55wf7DeeEfVU4GoC638hdKABV6yg",
  "key9": "2pJWQZCf7jsUNFwjjqk2wHZoGjtmpmzqM5xoyXcFL2tFpTGSyRpJq25ietPuZTBvUDidy9jjUc8hi4q4GacQX9bt",
  "key10": "2Ksvtb39p5QC2ND7VAg3eC7LBHEubWD88w6fDjr8u9294iEinFdDfXJioUuqnrvxugd4JAQnDBBpwtPXzUvzUmYm",
  "key11": "2toqj9YAAt4GhxNRLPviL7boBAfNm3EEH3ULzNYkL5TvYvySsRCSDdgXvuxvqijNQzTwUHfEnuBF2CY4h6Jr2cfh",
  "key12": "2CZ2xyHocSNkYYEPP1SiZGTUVtPhm5GHpAAp6Wh6vVBpUfdCmf5btLbTD5SiMcsR5n8VwMyyh5jUnzJGE3yHhws7",
  "key13": "5P3SPabXEphBGFqoak3q8q5vqsSctz4GEmYncMyzgCCd95iZL8doz5pNkvnEzUt1Fq6HQo3ysFJhw3voSBKabe1E",
  "key14": "4XWGYqhxGhJEtx5xvRwmxerVRyQae23j5nDcgZovyeJBYZKAiEJJYN5Ldh3rMzKFpGVhsN7whhKoeYXYn6A8wfn3",
  "key15": "etveXPG9XUKwiLKyVD44M8hJmJkN26Xbrcy5TTGkqETZr6NCBihiaqWW5nowtn3BTdZCayREkLeWSCBnfmjRJeZ",
  "key16": "3MSH7EJTnQsFV4gnfURZ7d31Sm85wEcKHYSKp7aN9kExk9fkJHfvrrnFeomEJii64bJn7oXCFvKCe3LrttbvyDFx",
  "key17": "2GbuGQaKCcyiSQA5Zi3RkiBwGASJAJYWRSD2K16udiBCF8QBm9SNxjKaWs4ijiiKV6QLJ3PRJuUEDma2F2ZPji6p",
  "key18": "35d77XVT6deaW1Gg9YsanTLm7SFaJpzZ4eeADQstoGdDYX1brBXxhnKWRsvBdNwitzYifapSjaxnWSV7HV2Fr7g5",
  "key19": "5bTaxF2gA8b5ZVhX3kYRU6GvUCESjT69ptq9bXMtvoJHhkyLcxFCMaCMnBn9ui8z78MNgeSxCMwGa2xffN7w97cK",
  "key20": "WQCf9jvW91wVtyFL7DfhvxQ2s7HPUCYa7eRhZkSsTnn3w6pnRPhkVMjbxtV8vj1AGhAoPjf3hdWtQ3xdqaQvppr",
  "key21": "5Y6U8sJnFNLJAu1eseXmLyhaj7XTy5Xtv4VxXN4DYSkYBQpBmoWAWBKX38ZxBFvkr3faPBSYMzJgsA8LYSz3vM9",
  "key22": "2hWyf3fpbY67r9iNvcpUeAQhvacm75HKNjmYcu8u8nJzUZBhTkFkj3BeuZs166epqa77mw8bC3udd1v94ELmfaxU",
  "key23": "4D2b2KMMBdEXHLE4eGcssptFaraKtFW15X4VvSeYKtCtm28mgibPgFANBxjwM6FJ6fSFLFEiXEMT3iYo2D1ymJQT",
  "key24": "2crbCK6tk5BTXHHFqf9wkkfPxZoaxWVrkUn9CsdGpGEFrZCdxNsciapnnp6uC9wUnViQbPNnRAmUdtZyRanHxAcB",
  "key25": "53GvmK67n3eL5tCstZ6BUoutEgno5N94sqA2BEZvtiBb4ULy47sHpvSnkcBE3LmSGNXMrUVNYzgAugSknFgb9AFG",
  "key26": "4C1vGVr1v8JhA4QYbV7nLVq7QLZg1S9a7cSgM2hqfLqJLgj83kmDAU4uzYxnVBdMVHVtYtgZvqcjDosstgR4SafY",
  "key27": "52ysrm8QSmDnvP5igxbDpoPxPaoyiKd6VYXL5eLd2p2LJnTBRcHB3CtjcBucq5DfSseBN6H8N4Kkg9XP8LVbmeAM",
  "key28": "5SjvhMLHQpFXZ61BH8pprLi7NrRkd1dtCS55hFJpjVLpQX4tD9LdMmh2Dia9BjDAz8vLHKMpGAn5VTpXEdHuas2h",
  "key29": "19EuG4XsPeHSDLYpQ3iXAw9yUQf8hnFPwuPpatZNW24Tvy8cNrGpQq2d6XRHHm62NcdBB9dTRQUsnmsiXBbJ5Go",
  "key30": "5S7f51EW5hRiaY9sjNVXmG3cseDqWSpGHLi4LtoEjdgJYZesvx7icd89j8A8PeGtQgECKDr3AZknR4xvsBqXYMDE"
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
