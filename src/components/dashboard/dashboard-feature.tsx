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
    "61x6xz4HVdPE7nTaZnngVp3ZC9EXtPa337TeMRgZpWMHnX6M5VDoa7RvRg6EYAw65UNoYo6qtsbzNK9GqrJAZXWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5jg8CcN3koxMHaRrZC4F4iYe1SwFAQoqQdfqTcoUTKc3v55rMwLUCw4cXsErGdkNY42Xh34QGmujazqu1MYES7",
  "key1": "2X1UKgQ2RPQ3CGgMQC827pxJnt4bjVJp8jyxSK2S395SCGc8pKo4tdzUMuvKhMABAi3L9vEV5zDuXa6ngx8obit6",
  "key2": "PA2GeNhoYE3rKWQ8kKFTRCL8Ck27c1e25D84fiPxLC5isz8kwZWr9GtmRDbfx3hv7RAPz6iCTwbRRb7N6AjqEGQ",
  "key3": "46ovjfSJJQgoEm4Nyzaw1uNjZuFrbWiTdBEvjZQy1JS9erFjJhg9jABbP5Wg9QryDTgparoPjK3BrvfhRdFWmXdp",
  "key4": "33XeyxEkLn16T5A1Kur6xFTCzyr1vh7zXgDnpNYV4fxf7zpcrydX3iDwitzpsfEFYByCp8bL9D2Jzbwe3eUEMrF4",
  "key5": "5S2EZVMu69LEvAUJJ87srJfHDCeRad3MKP1vLUbuiJ5Z8FGAdRDRDpsXXz8xzTgsTSUs3gsWNzvAFu8TPdDZWayP",
  "key6": "7RK8CPLcK7n2AjJQpF14hFs3d9SyufcR3qcYcXFDNcNuXakUFgshPbF5VmxdqXAnMZ6kPQYVhx8YenN11JC9Dbt",
  "key7": "3UssCxMFRq3eRhkPJrhsWk9N9FmP6ZN4P84Lh4GRb2kpvJfFNn1bUdgayQZ9cHeyb5Nhiz3gentjaKwFi6SzvyEz",
  "key8": "3dAw3j4wkyEfhV1gWgMsVHhYhf93gjiUProkpoGGvT2fJqnxWYYeefNQ8zA7X9pBVLi4kt9XRVA8rCk8nM2M9PDF",
  "key9": "5oKMtqqPGrUP8W7TbvMEuTSh91rQbqMZnQ37gcycq2b9WzA9hUzA719ui8SKjSjdh9R3ByTdgEHaUxwQoD8QWk8n",
  "key10": "A73SaqjKmygVcjb9MkmFCiDHGTS3Sk6hySvG8UM7hwXy1EbttdkXK5S7bogB22FxcLD8SHPGBQNmosFgFTABowW",
  "key11": "32tDr56NGyyVocWv38vTRmbDoAaoXD5p2hNtGuRQY5nUHf2BUkWSYMnmjN7MfmzSqr4EMU7jUsbWyTfz2gbG4gtg",
  "key12": "hcKG2JWj9Xk9ULTwvJ5Jsj9PFvxBzeU4SemTuQyDrKjacV3KcEcTsVZDuVuWWXu5jZ9c6PtPEwKukG1EZgPXKuH",
  "key13": "5FZBYNhADEJ2BdmWo6qZWxUjoRK49Hx3a5mg2cRBcXVorGZSobTVk37pTKr6K3prcWXnZBZPLmDWQwWoSiFBu3iZ",
  "key14": "3S39Wv44BxXwZ9h4nWDsRQtk9S8uPE2AthKuyaUU493UtSpWWaNMAF3cdDVGFxTv83NaT8DrLJHyaV9vVdTaVPbk",
  "key15": "62u1De7g6AokzBNtJNYmsbsmfvHvDbXNjVu6jKJjfoz4fKihvExc2su1bPgnBuGssovcqvSLZtSj2MZWcCaiYiMG",
  "key16": "3v39MyzpBYFvMN2npEcESEEFYW3WdzYXMA6MD765S37Xe6CgW8hT7CQ9dry6GRS6W13wxJ5BUpmyJd8B1XRgH3fb",
  "key17": "2FsXcnxJ6RfTtps7qTL7KSNwMi3F7yDDhqQLF15hg1a4JJjQHNCGVpLDDLdPDTpWqehc7gwNf2NXMFNLmo7z7wXz",
  "key18": "5d48jd2CZsKBVPL9ewsfumXxqvvKtUc1nzv1Q33kdXDrVomPQKYyYuDGKxqjsT8gwK7skVs2C3EjVcn5agoXjg6t",
  "key19": "Ydy3eUCo4YZdP9b8EwbD7iYKU7rAmHr3EghVaG3o5v5WcBU7tzzLEHFXWq6Agk36zyMm1KEHjWq5TWze14in6UU",
  "key20": "42U8VTNkbbgGb3kSXsuwPKKk8Wms6FKQspTfCSF9degd8WTmqaidfaH3E29C9QCCcjSqpyQ2Mr7W3wr65yVB2w6f",
  "key21": "24euLpAAZ37jCVLpotJpPKLwRArAJrTpXn8iZ5ejdxN8W6rLajtD7NZEXyxxDGt82TrCQKDW42Zo4s7ghAfRCTUJ",
  "key22": "54xo7idep3sCjiYqTToE8rAkgwzvnCjk9DWRP4EZxpZJtoCTUpr6MCwi5CE3pSV3k6xF51uSqdfRGsz6WiSQhpVR",
  "key23": "2SW3reBoQJgDGgsstNfNSPHv5KuxTEnEpJzc8ivZh28as1wziJTFw3WFnuVqyNt2P9zTg6q9VBNAE5mpPtGM5EW6",
  "key24": "2sK1rB5muj2Uub5vXkJmMtWR9g3iSBuw5EaJGHRy7mbiqx8YybqVLZ7KXwGfujKQnFFvsJYjHDpqfrjim2WyUhkC",
  "key25": "5DPDYffrUN4k5eoeWgR41TUCMTTMWVsqYqAd3W2QJKv4isou6PJSuXcAumoxzdJ6n8jDxwKosozjvr8D9qK9vR46",
  "key26": "3EN15PbjWYivSbBY7ZwfEgP7RKsosVtabTWjgRCrwWnvepS9vnUPgzxRkJ5YK5Vvx9krUyiVfQb9VhcB41TkiN6z"
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
