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
    "2iM96AvQ59XSKB1dVQozkHgw28q6pHXLBDf6ETjjDPouqXnfGEH84fdfnkiTTb99uAg492jWs7ce2aVRwV6bcxhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfTaSbfb5txLoWWrVUQgyh1mApbn8w4V38xXMfAYkzBVD1LNh3BvFJgxEmCWhN69WEE9gaPXSbE8CM9DTiqVBqr",
  "key1": "KJUt54pNsCNygPrr9zxfWWNJGqVT27k6hRYePn38GatuN1pbRk6U6VkTupGxhf16GLUyDAWN84pqwP2gaEUV7nc",
  "key2": "37UAJkPXoS1w3cXhaYXSKLVcKtuvnWTGQxrVzZsLt8kiTsBgvdicAbwzziHuCzeuqgyW8keFnYpkvdp3eGa33zT3",
  "key3": "4Q31F59YjvqSir9PAjXCVa6fNvQyHdwgNkzVwcS8UXxuMqbwjACSJRwrhJWTZWth79LppHfLVAByA7bGfVeApUzy",
  "key4": "yXVMQRSoxRtPFLZMyQ1jF5JkDPPmGzymbmD61afmAejGFbgULc8XkMhAkdWKfgfQC6YKF2cmx1k6HMTWVtGyN9k",
  "key5": "gFPDoWCYXKwqujZo86fgyZkLMJhSrFVyUFwEmoRyk6KutkjyPHy1fb8YrqhbrXyx2yBng42XierPHRR3PaCDg2S",
  "key6": "2LjGApwCpPWqhUMyZL529UPfWhAPoA4c1t2dbbDfYuBxTDXX7e76RoVHpaxd5Bm5oYrgFnmxutDq5crRBVaBhhzT",
  "key7": "G6jV2xQ7cZMXRqMWYcZsNNV39aqppE2CDuf51PkZ66wHubCycCXLLiNwcgLQN7tm51W1xpnvdBrUNpYBAdX8ttd",
  "key8": "2v7S6bKyBrcLmMt6XYcCz1iVn9CmJF2WVqiHn2f58CKAte3v7cx8XRRnkbAM9U5HTut5UHP76kPscmnFnDGVYREa",
  "key9": "akAUt5F2gxZ2TvzaetaFnF2FnH7HDvy8YYJmAafryRfmmveSXW2wnFWR7fkG1QbZu3Xc3dM5k7ytViWq9rtMxTU",
  "key10": "3mtVeXLbziUs8tspKez69MyHeVN5epeMCdQ8rj9C7SDi3VBVX38iqapwhxaJxWNRSkLf11jV19GdzVZKxNa6KLJg",
  "key11": "3jx8ssyEAtKuLMtAJhCbWVijQpk4sJSad8boF3duRCCzgLzhWo9EVZvwNaCVB3pVGoVeAxBJafuNDQdTdS5T2Eyt",
  "key12": "5zQBg4oTd8n6cTLGZ5kGyJ4SoANdC2UpQEg4C9G1YUjJEFJ2M22yKLghkkFwJBHyBi2KzpwFLDqLnHMtWEJr2Kx2",
  "key13": "2gVEgFFkNbuHWdGvidD4yBAUixUyi1Z9bG38rNzM5HsLaWHy6BGgTftNifEZf3bGZ1jW48nXKjaY4EUNm8NX8zS9",
  "key14": "5uAdhNqTd74AJ3C3wSgKib18steoTPZXjDo2ZhDUUD1yTz1GRqhFPU38a2aBDbtb1TEPsR88UvEBJfTG9A3TAyNP",
  "key15": "4bEhyCZJh857SRi2fZx1a8fde6hNKGEwDBcamcsD6YLUPxhi1xsCi3FvPDjtqenCkGkFtbYgtfFMqTQBTF96WG2a",
  "key16": "4gDMKTsPMwwkvWsSD5pry7eN2eUFKpBmnfW8wPQpaQc6SRiTnkHdsm1nzDPKQCn8uRNbM19Eb5Ga2G8BGaEcHhQD",
  "key17": "q79w7QbmQKEJDCFvYkJn6UJ7TejEas1EJUbKxrrGUo2Tt4cFWNTgV59zkB3vHbozd6fkH2m9kyVhQq7MTrZMZQX",
  "key18": "35T234kSn5j25rnnB3knaRX3F1fv29hGDZeHs1aBMUbFnHqw8y5o7jx2HMZtHyg6j3nuJYShb6oEjwD8j25hw9DV",
  "key19": "5nw6zUWgXKkoGnh36YRbJpJeDHcTJ5ptEAfMy2MXwyiuZAGvCiXmTBLJU9a95Lqeup3o63PSaqCKvxdSizBeBdWe",
  "key20": "2JDXpr3GQbGiAyvcNeY7BmK4iPhHuW4xCcryE9cLi97kYAF1HidRwq8fTUKB6hksiWo4dAmpuiUqoYbZPBUKSddD",
  "key21": "4YBqWmhSfQU8J2HuqfHa3VbnCuktXXucqV8mzwuq9o1wCPTuA15rYvZdRwApoEbg4XSGds6THTb7QwAY9ydPsjhs",
  "key22": "2d61hS5iPLLCt2qA4Mf8GfzcYrQgT4yqLwVTJih8t9GfVJwnmoM3mGuCgbTUVm5QPBkfSqE3a1gt8Hb1wuJZ1isY",
  "key23": "dQSsqp1M1V14AVS7Bvs3Us63k7Gu9d27zo5tRU82NkDxuwZnCzLHqTHKyA2XQ6zVPw7EJDmKb3MbvzqvfyNbe4L",
  "key24": "4YndvWuVMgimyjrXTJUKdXqABC9WwysiAarN82Mkp3VvTwMLPQNkDMpV69umtF8sC3v7Suui9gQJ1JEQrRJXzp3D",
  "key25": "2JESTiPhadL8LogtCUQg7S1eG6zrbEJBVhdfVvWDbTxPQdzw4nR78h39Nyv4ERk5hxAEwtz7wU5q9KzunYDbz7CQ",
  "key26": "2EoiDfMRfuc7pUyvzW5WBeGrBbVPCtVCnfJurWtWxAdsfrtqQ8Pa7yNANWzLiw2DxzKQKmPNajfBA17EMZD2jawW",
  "key27": "2jtvMxPgdei5DSBHqnCQjL9yBZN6KfgNpxjHabAah72uB8661KMujqzvFwzrB86Kzzko9jmPfSrZHXoKrufSqR31"
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
