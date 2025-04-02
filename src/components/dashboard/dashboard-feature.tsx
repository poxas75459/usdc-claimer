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
    "2zwGdeYFQazWZBYaJ2yPzu2wBo8NduKFpG6NZ49nn9QK8kZuDq96UtgHXKiAqrKt1DiV6uhe3zWX8vwhhbaKMEPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5tk7D5k2Pna5NVZRq3jMwTQhBMkBKsau8833BafppcCKa42jYZhVhTY7CNoE4v6ByiCS7LHteNWPaTZkkQf6e7",
  "key1": "2FCJCyi3nBkSGyahdbg34c67oPjahhNK4YvnBEpLiLZKuX9fkYDwkpS7RCGsEGrTYMcQhUED7LWZZYQj3K13kcD2",
  "key2": "dLUyWZJJ43eYtyWRWzfmTWbyFWwsvLyUmPSitKr1miBMQ66a5s4DGAGJRp2AmpgMW1MXUe5Vxyy3X7gmfgmSEjf",
  "key3": "5SufiKGQpDtmTegnYHBTvLEPewvDA3d6jnPG5tMy31LHysuqEGzTcm9iY3QEKfF9zchzWTjr3YF5cQkFz9weGVj1",
  "key4": "2uGP9DcqF2FcC42pjKhBpU665zhAMwbPSgPLLDtuvtH4r58ooFT7qpA2fPmLDHGiU1QxC8vVLdQSE1fKHaHi6pR3",
  "key5": "4p7JmRbzz8ZxYPyptv7WyGwXVX8VmhHuTmintny79HitKsTvzXVdRcGmq65fGRUgnGLfDu3kQ8YWE5E7wpLiby39",
  "key6": "4rvRmF5bMHP6Xmz6jhBtjULY5gbPewUW4xXe6LfBTpPoJrds2XzzEomYa7LfbeD1bWk9QbowL2RyApFsJ2qv4oQy",
  "key7": "5WatobRdxJWYaBRqyFaMdfuiVopY8qtmaLCqFJN2gpDa8PPR6XvpGmmkrRGq7mh73f27Wk84fGxvKLsB9kcRiHWL",
  "key8": "4vi4yH5G8rE2aUCKc2wtQGbjvJasyF2kXggPNaftkyFCgfCAd16mA1aWrhqnPNDrKMjKboRroRsPxNzr52y9gZQF",
  "key9": "63gYrDYkgHCpDZrRFY2hGnyCm1H2FWjx5bL16WGKLjYubscVFF4jXYeN5NfyUWwc9Y2V5BtdtKHddCFcK5pweLhk",
  "key10": "2HETSoaUrB17TbcFmbmjU2ibKGn6WpNFoUsXdLEBRiR4swCSiHzbnPefjyHsUhFEATqawUkQBh87XYaEgWA7XXgM",
  "key11": "MrPHNstTDFnBUGqHs15Z8KBJENNG5PTWWiXa2mbbLyGYtiWJSo2D1dA1gPuAGg99v5Pk5MnAmtC61qrUMqPCVSu",
  "key12": "2hMEcEYDNjsQ7qJe9zh7pDBJ7HFJPHw5Vck5guB4PmdrJjtcyFo6vrvquwxZZE6AoAihMZDpCpZC1iUWVCMGi2a1",
  "key13": "6i3weuTCr4KLt6DjiYoV74YC1Qugaoujf749r72nWP9bhAb8zPKxBsqjf4GSvNP1iMMqod6kjjy1UyyLEQo1XBr",
  "key14": "Gr5P4U8hDyNA8eUnT4b5PQekzKXVottQAE9JN2t5n3R4UWnDs42WPhXfe3cEs4xxkj6emEBxjBRUYeZgLyvsgdk",
  "key15": "4JdCfsuntdWmZGSjWGFJqZmQhp5nJYbRtsJjGaP2teegn8reLoNHATs3yiji52w1vqos3cLBQaqXWMoKZiBUop8V",
  "key16": "35e7nsmVNG5nXUuTCniPvt6CUvR4UYG93HB3rW5X9LCQda2sddp7gmPkeqLXknQTSRre8jjfYgqANH2FHzWaijGX",
  "key17": "3dxXGr1adCMdZKeK6foh8jw9ctSNn9NcS1CH4i4TaKqmbRSnCF8RQwkJp38kSntsTUzH46N6aW32R4KZrpAibvSh",
  "key18": "4Bmk5nsmLMUFMZU6qKzHv6av7kJeTxHnGXtouMzRUXX2hdzkf28vuKHPfKJvQnUBVRqqhTdLtXBZJ6xP21ALVH1E",
  "key19": "3poRdpNwY84DJjq5wVQc6ba7mcd9ymRq5Uks5W6pbuc5FhNYUhNEUb9Svq4t9crQkd6wyLHmeCztBVNeXGvgs3zK",
  "key20": "4AFH7E8EWVxDC2LxgQZC3ZEN85nW1PeyE3hxM1V1PNMgaifvQt87oXkPhjnUm8ZCtusqGCtBZEux8516T7RMTtBg",
  "key21": "2ArTAxQGTrcf4QB5C1rQHX53w2aG2c7XSSm4yNBcCwo3smGhnTjBFt7hRZp3fL3n48Kz9LwkuiaEqnSY4eysC2E6",
  "key22": "3QVtzZchXv5PWZMUP1HyHyksPnLQMcR6LnoZ9QbQp8Xvbjb9TKQviEAyrFcNv7ZDevFCGCJCLnyvrhiEZBpezBmp",
  "key23": "4BXJGg6s2AP2SVoh8cAPP82PNc1kQq8BudZ88GGze3y8gp37RHXRkfvioEp77LU2szaFyVrU9vTiskNaYCpqingh",
  "key24": "kdNiFeCKFikSTvfU2NQKW9s5ZcoUqMBeGGpAjmJ76A8ejGUMYZjp2NGuV6UProTvqBrXj7QSWP8FvAfjbt87PJp",
  "key25": "3dgpSS4XUaAjhuADpr7rPZfHoEUqmg2RwepCVr63ACNidcdGAduZR3nVt1uNWLwCTfgKAaHjESU3mZsQckBj95QZ",
  "key26": "3y6giomjcuxkNs7dUXJ3sALARPtt6K8yQtHqJyoTWZhg3rvhzV7DX8QCrWfn9iq4V28PW9mb2neiZfgdjCoJM8VA",
  "key27": "3qyb75nYziDdXFn5N4CoRFQA6SPQhi4rg5vbz1LBwLyQ98VFTZC5nHjASHV4TUVEEB2EHEkPZG93m19yact51AAv",
  "key28": "G5cJUfFWBDX5yH84pGevtMXoe15avos5VpHjBP9ATiX1BHricwJZJFzv5qFpD5rtwSJgeZtu21KG9qt91FdEi4s",
  "key29": "4Gegq5NLYbDGP2N6C6koLfpHaCXoaGNR1J29hEc1g22EVw2HXpiQZq3D6pY9EuGPR6xRd1sib727ZtrNCZN79Qpk",
  "key30": "2VR2C9Z37bh1bn2VMst7yUU4LRwur7cCoMbjn4jGfgmDmy6GnCo8wKLZiJCxcs6mLGzyCWjrBUWWLgzaHjqkiqgW"
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
