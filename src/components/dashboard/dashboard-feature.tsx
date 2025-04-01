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
    "4U3XRGAT8yC8cD9B6pKxPg1vX9Fn3jud9sCmMrtyx5CFZncmTB74HK5zjVGjbkT4RfPmHtL9oxUh3wif2zJiRwqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22G4TWX8nUwEhrSsCcmnE6tiNHDag1eEGzxWub6MrCnSmNcAATzDJW8CWUGrPjt6NumgHe52qPkSNx512B8GFt1E",
  "key1": "icYoNmMPNFa2gwMSEyrt2iNDqnFwNJ4jaVG7Mti1hbfwn2VMtDLYMiNovvmwtZkkQBJppweCRkGdASWbfoQiPZR",
  "key2": "58fYKQfZD3gcvXQCP9quLyeEz1gaa1BbBv6rFsQuMXq3n5kq5T48wTxQoc8wMWgNxrsqi7kuMBc349YoB9kZ6GdJ",
  "key3": "baimZDyME6rA1XgjgKmePFJVzt2SvBGTLpd372YFJvPjfYdccj9iq6DQD5zSSibyCR5fWXkcuKk1aPunNYynHvi",
  "key4": "65BTXapF1fe5Q1bJf9NugWjbddLqZ7XMrWNGR4RFjLpgtkXZiWP4LXU7TMeQawv9VeYpooUEnjmmeeHL9PPjxrpw",
  "key5": "2vt7F7k9SmHYp62dQx8Pm3NFRxdytsJZB6qLmVzEwmFR98nACg4jheuHBEYkCr2YZ4FF19eyVyms8oV8QDCCahJA",
  "key6": "2CHmGfwo5jPQuqLnN3PhNacrwULqeWQRhw7utqwtUkpKrAQg4UkGvKAU8LNTZSCswxVd6zmi1fmC9Ja791Tv8hsH",
  "key7": "BcD7cZHqgoHTP8EYBkTf1zvb1XyCEJdXDvxi1K6W4DUYBzoaX3PPuVqCKvuE5wjV4L5W6uxRCZJKKh9auceLhZe",
  "key8": "5g7pwj93FPbWMvU94JNvxTUb5TmJnrjhG4eKciZ4nucxJ2ic5wwQViy6ELeRXzHrxKGBNsfLFnAVHuNHHuLwBqKt",
  "key9": "2UXp37mDhBmkW3QzuhBVvEbBvo1mePt2uN7t1sGNeJwC67YZT6DAMFMe9TB5atpL3UQuEYp5b6XD3aTEmJRLsquK",
  "key10": "21ZpTnwf79XLzjaiNxUFP5EFCCSQDKZNvmgti7m8XZFZ3GTZjtKoiJA8uZF5F8gGDCnd2NuSHi9timNT1DenWg5E",
  "key11": "2Nr4fDzNjqmFP9JBee8StcZzDn7QLAwtH1aFDAPeD5QsyJou6y7SoE9RuLWoTftiBs1DQegK8Um8ENYs3xggiHU",
  "key12": "2QA2FYH2neB58Y81YYVAV5gWeKpXwKvFwPYgWnGBzYfpuH9btj9nVApSK7WygQTa2GX2mLhrfPfNsB3mKedxzfRn",
  "key13": "2xzHHgGj86TbHbAwvxH3rozvyrgDpmdVsu2QCFSu2ZLMpFYGxvmmBDzbMLjoyHCS1cDdgHJfN1FZt5GFRv8C9JzL",
  "key14": "3hTF9syfCfBjXEVPNxiwYMQYeR1735x2S9qVuhYX5SkzySuhyw3HtwhEo12HRY32xq9LLkpcmVDTnVqKWafrvHvi",
  "key15": "55oXps5mRENZ4v1tZWephLgMP8S2TYbkDqeUrdS6waSNouQooC2PDyNjMrDeGMCaoFW8xK1vqyUDfmN1HGkFzKka",
  "key16": "3XyG5vzn7XCMKRqJji2SWgVxzHy7GaWFoAiuagdKxNrvunPpZ5LpwHQSXhFh6DWhG7B1Hc4FQDMwRc6cbvZL2siS",
  "key17": "2tGLvj2bMXqzjPww1JEAM3NexFof68Tii7VBnjWEHJxUmyuNmyoWSDrfCo9EnL8CxivmPesULQsavb6YK4Py3AjM",
  "key18": "5dY3VaMa75z3dwA2BXyEg9PXubnNexuhyYaiPJqTTUdWTkbWpCJJgD7vUmoFET3ejDNkvbpwBqDkZsSfLM6gYDkY",
  "key19": "2yn8u5aTEDZPobXJo149SNwiGW7ZVfQfAw8ohuegmoLjkDteonnW7dJ65e6ZzPyzfVyoM75oZ5HH2yANvWmBogoe",
  "key20": "4TgJCoUFNZKXaQcgaP8M4Gwui2SYbfartrgbtbp3AjHDJcW23JdnXfmdhH2qVgL79D7esUfXmU5F1WVNCidNan4K",
  "key21": "3HFchVZ4VHoXaWwRck4iqRnLv7aYsDCFYN3MzQJgrdBUZfNAumRaiszVtjUHEMPRYuqVgprEA1HuYRm6ZTMjfnEV",
  "key22": "KPprT8S2c3KUNS2v75DfJwsdaZm9NkQfYzigiFx6CtHRZ86SXzisKktRj5CFinwU6qiaeGxrRPQgpcqxMDmhyyY",
  "key23": "57HcgGiH5UUC5c8py9VhBvVwLxQv6VZFRUfh5xLS5ZuN4cxmdgtw8FQwe2EzYoJP3EtKPQLLZY4r6qyKm4Dy3tdq",
  "key24": "iHVN6SxFijPJrgkZaP3X7mx6RbowhinDx1YYGkmYfQ4pZvNQxShPrwbRiZoonZUDYCTaaGj1DvgfPhtukJzHyWK",
  "key25": "2UQsmrdqfN2Fs2A3r6RzBjW9nYnhc7X61P1gWai387opGQTdBLr6XFiHcMbdh18hfyjgSvo445f7HGST7oczKn5Y",
  "key26": "3bNmSHbUmQNtFgZooVfGeLk9e2PMD7PzedmVEVJ1szEhxNX92YEuWofLYpEtqRvu3F35wBbtSweZf2QMwc6aiQ5C",
  "key27": "2Bc56hQJpUkfi25xzSaATjtmq3hSLMgBz5FNCjxFT3uTV7L7QtMgPkEcWxgfAXxNtCXepMF8G7rZEciifcnJyhAW",
  "key28": "2DFNyRq7XENxy3tPwmbpeSATBF2ArMPQ52Tgn5moxgv9hvkfpoM61AvPcUuTKr4d7t7vq98Wf8cgB5QRTQDQeL5g",
  "key29": "2JpyyTHwanWzQijJPTZtDDN8KFP322pkCLu4aCPpPixWhRtwrLRpWQ7TcEcZrw3oaokQ5PeKbf9coGsNPR4yBxFG",
  "key30": "48hkBSrsSPUKJtKwVuA3N9MA7w28EmPiVcZDsDQtoKCC5WGeGBFjJ7nxtxKL2EVFif8s1kQy3LZ7w1LrtZwikraj",
  "key31": "4kXDDfBeb8TwvmWukjjcayBDtmc8AftJ3YpwbKH9eRCJLRFUmUxLruD7WMvicDXVCyyHfXLbPqaPvj3aZo4WcFpk",
  "key32": "3NCjpLnTSzbX2efBrphSSnX3ML7UkuFzuXmgwu66MP8ePfutaJYWwF1DZHLFcTMf2o9J8fbfjWZd6LXzEPhsEa9t",
  "key33": "3Wx1ENzGfPmQSoKN1dx95hoHExm9Di61p2HE25XjCacU9J7Qwnutdmwek6CuaSksVHXPQiwA8Tffu53Gdw82SAha",
  "key34": "3kn8QcPdgVMM9zZiuU2FSdm11cMJoi38nDEPSBFxs9gHNTaffgav9KN7ios7D7R1twUsdxnurR2bS5fECQ2Ctocj"
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
