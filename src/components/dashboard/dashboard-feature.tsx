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
    "3eePZ1KH8nk4gSffC8XcfAPn9o4wxXmxvfqFbUwtu7QfJmormrGiyo7HAhLHUixkGb7vkNQGza3zGGrukB7xZDeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcK7dCFxTrqvfxQ1RoWjQeEhetAzDyVP3DiPVzKutappBjiUaq1unKyPtYQDi7vWnSJgaJgmUezzhoRmEoHeHb8",
  "key1": "35ZSUhrSgWwBsuai65WqNz6BVnkx9sBLUNAeJkHwrYg3ECUtWx43PvBR83Hw6ouxW8QSZQASb5cgBV15URM2LVA8",
  "key2": "8FkpMkG7wkCMwkf9GS3GeSn43ZugifFs6vQ1SbaDE4TJSzDJ5MPAmeNK6a7hTgq9hUNhs7XXDfjaW7sPJKx44qK",
  "key3": "3iJLwXH5kthgvmRKWH4Em4XSvEhHAkjyJ4M3Wa8utbaQNXvMFkkNnuFS8Hesi2QWK3KUzZcmvwaqfBqBgc59vKR1",
  "key4": "2ZcGX2aNpUinLuiZVv3Ge6815HtP1BJEngdmdUCbE36f82FvT9fEQao1UfD8z1nJWz2ihTppzihVDUYMWk3RffZ",
  "key5": "wyJgDUFsYWU2BmWLKHSm7jQQJx3TKuauMFZYmeZ8o2zpSxhNQc82TCL4PbiWTEMcn6HSJjMpuu83bWSTB7rfKR5",
  "key6": "4uSct8QiDEAjvuudjJ27qo9SWpYKsLoWxMJk8x4vfdh6agiSN4MoBAE889bBb5VgJJABekvhrsKmkjed1uirDnCF",
  "key7": "3CBpayPsLS6TKLY7oSZxgoPArDvPRSeJYQamiHen3dFrXNJQ8tDzAWGX8vCmrtiPMZN9LUV1fGGbhvvqw24M3w7h",
  "key8": "LJhzaA6Z4JQUHQaq73B6HHn3spdhQSEE4tG1RVF47Q6yWFpB6V8Fb4zVwQsFvZwpSiuU7xQns7xBKG3zswCViRj",
  "key9": "3VzZGPYuBwtMbczU3cq7VsEVXJes2SKk4wwLJ1yYxyhBxAVC1E1pRyEi4sRNhdC8cjVuPyFdXXjW4fri3em2duCj",
  "key10": "5WXu7DBQwFWeykFLZtoxmxWWk65Rd8hCqhtLSFUpR1sZU5pgfLkXRjhT5v1h5okfYYavfU8i36y9wkBpRu2wntK4",
  "key11": "3m62DwiNXNay9kzjwyQj1fDsuCTfHHC76zQAcXH64sr9wfgduWVnhNsKwpQmkt9PpzZVJiYvYf1kVsuGD7uXSbEJ",
  "key12": "2MRiYAJgy2CUauXdkcvebxLzBULJG4LoeynL2cJpZYK5Tr5yF4XNBAsndNzXUqnmw93sfwEfmXBJwF39BnedzAdK",
  "key13": "4vm87Kkfw1y6ozYeFXUJD87xoAyYneBE9WCXuxXmp4YqNwXQDe7B8wckDdeyXLz2dh68b5CHmP8e9AYEC9h2xymw",
  "key14": "4eAcFfZNbBNMA83pepdXZPJvGTrzUeduhYjB2f5F3e4635LMhHc2DYN4oNbEnAorkD5RWHz4YthCAqdRV2THCEua",
  "key15": "25nB78WCGQ2qpiC2g75qsW48frQGP6higy1fqh9Bg91wsbsDkYwUE12mm82Yc462rqoAu8qEtxxBCEAeXyDjoMUR",
  "key16": "3ihM7ANtC63pAw6KNPxgxhUNLMb6Kz5qELv33YZEZkJXdg5AL8CELr4XMbwVuuS4xMxJcNhtopWFKmhjGWZwKKPU",
  "key17": "4a5U3Ay4toX5hYi7DP3M6aYcvgKTyVTNqHLS2oJYCaUBt99JYQG4kbhKnikbqRfxWUG6EgmsXsJYpAGpm8PTKtNF",
  "key18": "5TRUo38oyj51HpQwfVFZgVHE5LYvqd1sHGb9fbyTGCNGD7iuQPMdpHLF91ppfG7HwgRSvPauEhA9mNvPoBN2xxbw",
  "key19": "5A9NJp6b1MT7QZDw6UCQcuqP59X9J1t2fEeMpguyWNLg7XMTSF8jcaSYwtRJQYYYA75A14z6hXPjqqv5qbitoKLB",
  "key20": "mAHEQzdS6bbfX3PUgbHfjE79M6MUkgPHTAErh19doHDPsz79ASztqfiUQSgrqdHjqH2Uu8tVcBUEFT1qDFjy8Av",
  "key21": "21koyzFCPL3NynkbvH5ZxJK4h6ukRRpyd6FQDB7qheHXhA4cnEEhKUt27ExtB5LQMwaZ1e83SFWw4eJxGGp4zhJg",
  "key22": "2t5j1uxJKEdke9tfTs78VcBFFyfNsJMye2qNRFQ1DPzayobvBJqcUHMZkCbNg3Dp31uc5kb4W44LAKn1sRgMsFED",
  "key23": "4TjsTLziQ9kX5iQ3WEzF45WKvpPVCtU7xbeo1CD2PpqAU2QbHxz6ETUqAeDAAcRYXRC6nXWtLZ4z3U9o93CPBDP5",
  "key24": "5WbRcnJHESsxXrkKQ3ntutVykq1nkdv7ZCNDSGsmVX1dSuRUwzzBunx9U2RvyVBzADiPJQzc7yNDwbgRYK5LqmUF",
  "key25": "233fABSJHoEu2g2LWm9HCvYjiDTggPDQUA4wDyZXELxYRp2VPtRpHUpwSEy6QXHNP5EAH1dK4XCpxHY4rdt6fq1U"
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
