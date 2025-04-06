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
    "4JdHxwa96geH7s2nCDbUMginVdbyzkyBrafK41Qmzg7Hm3JME4bY61kCQ4aZhmqVzQGucKUieCAKjEn6mTqwa3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8oTPNjK18fSS5mYYzRS9nkAjh2RXCRswkyzyNq8ZDn2MyMnzKDPh4UuwruT1EAuZMdmX31AQdwqU5SXsDuMK7T",
  "key1": "2dhxJMAotzEmdCbmxj21nnYEVbS9s66yWodmMYDEAPeBKcUFaWh3RSQrkDDXaWu7t7AbLHLcZbsxbqiX31Mz72VK",
  "key2": "3MKHpJK7mALyMrwVhURzMegT6ENAsvKcUG4X22oM3kQiMYr84mpgFs7uws9Kr6vE3mD3Vf2NX8X5UKyAsCNqkhGM",
  "key3": "3YkefxkkUrtuKxnLfdwrLQTvC13x7NVsjsGo4hknvcvRsSChTnLFMVhFuY95xc16bjXYJAMXjRVPiW4iP9ZMmhZN",
  "key4": "64R8nQcCaw9dQWxicJFvzWc98MjQ7yox1b8Let7on25Rm29DeKUTg5uu3MUyh7uNJBo9W2CcX4mmLuDt4HhLuxxZ",
  "key5": "4Km4HJJF2uwbyrhxy9om5BdRmwpasXmF6gf1YZWspLYHsyvPAf8xJSvuHSuSHw5i95KCdgbSWe5TngUwXAdu3JnV",
  "key6": "3xCJDUjn9FeKncppwNRjXnHhxbwTSpPs4CJabNEjExgQ9WmArg6ib3ugrmmVbkGMMck59bMRaxkCuQm83fbGkhcX",
  "key7": "8dkuByY9HFn3HpqeAKT7Fqzz817c4JsFxN9qr7kPstrHQxXwBVdwmYvFPmLya7Gj9nBgmgU1kzNzawJVzc6JL3p",
  "key8": "4FGzAG4UUS122NbsCj62AojfueUNSD1VECf4kj5kJk78KwVLw336MrFKh2hrfihuCyBrkCngksZooM7tS4coQiK5",
  "key9": "2F8nmm4QL5cJqBZZvmNhG8St27syqGYBe66NH6W8E9smwTqw93YdzP1TLrT9VPfr9rLYb1qnwZA4Ptk8dZYaTMJN",
  "key10": "56r25QXVNX325vJh2Fc5jxaGG4dzGAtha7Xsp2rUfHeQBSVVRiw5wQcGnxjafozzSN7wuftKoUzn8XZjhZHKyGcv",
  "key11": "4RQ6PT9FVNmBzmhoversaJisUVRvSgh33P5dAKnWD7abqVqipeJEjTjeSaoW815pN2kmT4uqyvfziaZzMDoVdVqS",
  "key12": "3zX2vH2DFXsYM3aUca4EdovSyjB1g8HpLazEeMgmom6Zkz8s7gk6TezSJr7qhjkuRZDjFCthiKHKNZxpst2rzKfD",
  "key13": "3MJxKd8CGPdMGWaGaTz8njEttR9EdEyFJKatjum1SW7LbQMPioBJhdHHXjieLzZB18Db9A58ukSSyGJxxC8ef79h",
  "key14": "UcSGQaUvFaGac6w6Xznu1TP5qFTqMUN4du4nvhbmP1CiRnqWooDLk2r49SgHU2moAn6uQXB8yciD86eBR4xdTsR",
  "key15": "1AF1ESEVAayzcWQBjimzbWUbaXyWWEvKjJg4rwvrzpUSu6ocF5Meh2T37fz3B24rVD7LwEa4XYY4YfPFeoJhNth",
  "key16": "3pVzGcJmbZv1yc3Zuvb9eKn7iZVJhpyeKrZA4waoYCqATxVhLuG3UGKMqdu2t8bvxmThF1ANFLApLXfhR8U6GbJS",
  "key17": "656tbG123sEeT7EgsEsvaKvQxfpjk2M5sG3HdVs4sfACuXmE6ePPejSMVUPV8GJrnqXkXN5auEN7c8qDuQuMwa1G",
  "key18": "36GJCtoMb3QB7Mo3B8aBxxNs4QAKbe579Efh468wGjRmkSnNBHdjcLVactn8PWZSToj6XoqsoABVAaRkysUq1UqL",
  "key19": "jEMvcqdjL2xuywDkoFZAGxVK4KQMw8JvGbm2FiKL9w7LXxMCSDh3xD7zoD4upMKLrPxUjTBP96s4kP5j2STdvfk",
  "key20": "64UJ3EpzpYL91dzU2VwNQLcgNJ2925KvSWisSbdkHU5DpUK2nv4dteJjfDhSAGf43FBkaksUsTANtLE738EPXj94",
  "key21": "28bxkLsKDXWUCHtwxoubzNZe2mHah2E4xSrT8EGeCagV21yDYBuWuxcWx11j5KXEDo41oxbyTTvp7AyfusYkETxR",
  "key22": "2WEQRdHCa2t89LcU6wQLrKWRsYzM2r1zh3XjwBkVEBWr3UpWgxH8aogP7xWVMvg9xPJhCS3rWLc9bAceSgKUd3dM",
  "key23": "3oF4LDvzWmdhbSCMDiX1A937hyxduFwUZWbLyugiCW3StwUT5zyiBFQ8jpiYZMfhzvw9wgH7Vu34rqaAEp7tKodF",
  "key24": "43iAE9A2jGiX5FSZEydS9u3eF2xmDcnMM5iA2tptJnBV6cBjucMnVYSa9JfKVWBv5YUSuBVqU6499gm5ncQpRYeU"
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
