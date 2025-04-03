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
    "3EEevFtcY49Bn5UGx6gEJToPAfh2r2akeg3YCS1VyRE9RyaoWVfkyQVCpSNh4ic3LVBVwcFExkw5fbH23LRmZqHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6MyXgG2VsRG4etw7ubXoEhAjq3vV8g1xkmp5ubjHsdHRjDNHav7uF5DyguQrQHt1ywqV5YEg39FdH8MnC2AWmT",
  "key1": "3ra9vxb8d5nDVkS3my4H2qThXgA43woR6B3fkVALxWcqdCG9M9gsQUaSXRVoWbfnEF3cMiKnf3xGfY3MNFmncXMw",
  "key2": "3JdE9frEUkCdXfEXveXXenddkWS3Hms2Jox5py7SJaiPapjyKB773MMfCXy9gTadSSaWV7cEBjGnakYThEsJgeaB",
  "key3": "KSgNuhhKbbZP319TgwZ3dng8vXiGBjBPiRRtgWFHUbJCTBfHKguqmUL19eqGxmNd3icktNRqmbigmJ8eAbUTa3o",
  "key4": "4Y46G6AhNnkPVoXJivyg3b2uvrpv35Mb32K9o9q4GrmQWYfEThJZHPj4GbVdg3wX34Z4zM4Qzrveo67ZtjeqAtMr",
  "key5": "3zqqZjdoLTzsqLKLWgKLph9ikiqbeUSKuih9z9UQsRBz5UkSnJMZTSYboycYA7oe1r7f2ZsgC6iFUSpggiUN8mqj",
  "key6": "65st8yYipk6kEj9SfcMvJDSFxDkiMfCtbGKvgKLmYZcbvRdyVd4UuKZrr89XmkoQycvoUeoc4PNLrdjsk48F7i8M",
  "key7": "345X6UM2JQ6cfYBsfDQoVQ2yvi1o9sPajEDqnJfjziynoXpx1KPKvmMWQhYSdaLD9pCz63qKqrKj2HM43jpoTLR5",
  "key8": "2xBkCWYH6tFBwvDiX9LuzNzLTmcj1ZmFAUmUfdg8iiw1tg7MxNS8P7DHVcZsS61yNgkKbRNnPbkxDh14GByihEZr",
  "key9": "3mBJsEc1v95ce1DyjFEHYKgD37yWXnPH7RBZZrHnaD4NUZUW6SFtEGiEZGeZzVfvHcha4rYc4ggqJ95HpBX9FgcE",
  "key10": "28S545FNQkqF4EK3waJPiYwrEZQbJB4amnjWi9gJoKqsJvJtQxN76K8Wp7WnbZPKYWUDsyUjvKZwrD9682A4Zuat",
  "key11": "5T9DoPdWXypSt1e9QpUfjr3G3jhJRTMmB5yWe98ShdhGtzskWeKYEbKy7puFd2srF2TmqsKD2zzThL7X3yBaJfy9",
  "key12": "2QDADDptDtQxSNbvRN5njaoU38R8braTNa5scQ5NYdcwBZhBZyUrRVTQaPF7aA4yErrc7JzZwD5Qk2jw4nVPXbQU",
  "key13": "2djkTb1XrGMezpXCZrrfTEHQXUTnuhXUAmhMVcQ8zmTVjQ3pP1nsETMgNxaLFBW8CvXDcbR7SapHdctKYwPy8Ab7",
  "key14": "63Di4wYZ1MxrrHibDTF2ms5t9No79Q1sKhpY9jucH9wKuMddNjg3pMps46tJ6nemwcCP2apfyHnMeuBd8Danwx1m",
  "key15": "3p6CxofhcHFRnvCW4yHTT9XnrVX2UyGK2uaEk9JvsyqXcXdVz9ThGZG1QwtoTL72rh6AeHbgwd6btpk5phQoewMs",
  "key16": "unBLUWU3QvnqfD7wdkyyFBfnvTPigx2Ng77gGowanseHcg2SJtfwzAvu8pBMhR8pReL1MXwQ24mupSojFdT7W4g",
  "key17": "AW3ZBBGq4NqQ3y65b4qy2A4riXVMsByv4cRMrRoMeT9hMd3sSLLCdQtwUahK5dW1MqJy34qB1gwLbDVn8PbDNwT",
  "key18": "7NNbFLv2qkYNHk7U7Qzk6s1vf5gkK9MWJmY9WG1BTRzCdNngxTocC1w2CGR1HVrzxGzNxn9WWq5rGXWb4xTbhft",
  "key19": "5uuU5Dmw1xUSvPv7zhsbYw5FYjtDHGm8ZejyJVBZyYrztSBUmaNFZ8ontvcadpz8g3JNqy2Vozh16oE4JzfJQHYh",
  "key20": "5Fevtc65U3fAdPoHVQLmTfHnasqnx8NdASLGcfdzbx24EAuuXccKJ5VTv78gJ9r1LhuzSddmG3xxbruep7fACZXP",
  "key21": "2DzSxZcQKha7PJZH6bHf2gVcKC7x86nThkRCA6KygdQEmysTi5EH4zFd9c1Df6ygnKq4SgeLiAvX5MRy8FTjXA9y",
  "key22": "44G9jQY9bVLwXAJJJkHMY5AiWga99SEsbVxmKBzCZjzwJTZyvYfEPBVJfxvHjxfaStdQsqKNmuRZ2b2TM8yBhFdP",
  "key23": "4Gzfcvn68u3H92SzAe9iwJToQsZPXGjpMyvsfAABxLRQe5CsPomKK914p79BkAFtsVmmPhc6SQGUVmkEWxfi5Tus",
  "key24": "DbK6vuX7CE8vZEcprweYFNtvmk9EfgJ9R5frPLyF6xin1BHtUMHuC56x3hXegnG5AXLuM96vzeHgw1CqZsqvGZg",
  "key25": "56sFmyLbeR72VMKMrpg5nHnjrCVSNZwz5kyvEjdvKMRuYaPBuXPazkhszhqwXozEduSME2sa4r2aPgaFthVLbG25",
  "key26": "YZcVJWwiTKfvHKq8eapDmTTLX9j6pSd6qeGiooDkGu8rDDQAsatLGQvY5DzPYZgENEB9WZMXxN5FAvFNjE8TGYH",
  "key27": "zfBQS89k2je9th9Ghgpz5f7Gu2QPjDSarzdPqU9F29hXKjCNhXp6hY9SiMD7TF1Mar9a2znzU6aSybVZqBTUbeZ"
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
