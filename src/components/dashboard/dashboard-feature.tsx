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
    "2GMCEiLPYtXwwbzhY5XwKAcPscZzjarx1vHTf1j2NuVagB6Qmyt7GZsF7LFrpqsV65KtWu6woX78ChKsfiaCrcKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LyahVeVWvXGGEFpedByZUhw6kMMHmPTJtFHM3fFJfAY69K6cHe2Eyjx3b1dGniiVmDtGzosV9Z4WVTK1NUXf3fy",
  "key1": "2PigrLkqj5gVgPqi4H3tL4JcVZN7uiurtSqPYon5GTK4GT8xKCEXT5vE3LAoqHSWXfBdk31tya7KwyXREuDamkWM",
  "key2": "4tk7pddek4MvHm8n9sZvxVGukUg7xJKC2xFEbopdGVk8SxWsBJW47Utkn4vg4TFUM7UCZJV7ofBvT8u6UhxwkXzf",
  "key3": "3JR7Rw536p16HG6YZiBSwZAEUNrA1jZyDGfj1BtsSQY6XJDx4cuNHbqb2BE72WcsyfP112HY7ik7rgeFKEsLfwAs",
  "key4": "29APoQDHc9adUrfRUXRVDHiFwpRepoysBZnWBrLLGyeng6V3AqGtLRmunkZLZA4deUap2sQok4zTWnToFRBYGqti",
  "key5": "4THGUY14P6PzgjPrcDnFAvn4yifMWYbS2tAFsBvaejaJz3uUeFgiSSDBC3vxxaQu1y5bFdzYcHZmGYacog4Hji5q",
  "key6": "2HaCyiEGsbnb4HfoyYQXre7QdYS62yUsxJpum4zLWdwaR6MrYKfKBC3gikREDhj6fYnwKBix4fV9v5bkvWQg5eJZ",
  "key7": "2NAbPZsFqsj21WcGD9M8kzFtM6TfD14aKQh3HcFASqHshqJsCSDXejZTtPSAM9XFaN62jRFHscratDeT43L5DHLC",
  "key8": "3Uf1duGyPKQD4Emi9GS7Yo5BoPAwPdWEK8szvF7wYAvZ3gWvgA4kZpPPeCEVDbQrH9m1qnhJvSEtNXhAHwdnDm9h",
  "key9": "29wZjoXoWyCVQzjZC2M5GtxvxwZqN48tfqc2ddVRccM6LKS4SLvyz78Wvk6n2uGBQNAoW6JbCz5TcMPXs1SbBDzs",
  "key10": "44ZMPpc2mwNYX9cL9KNAv8aiG6Cju2C1F5G6tHBj64gD4vG4w87RPDUBDg2aVSmj4tQUewrvGgd3SPJkhVTT612q",
  "key11": "E6p9oMK1aMEF4KpEDYK2MzaxQ6gHkpzkzH3wg8oC45ceN9bGcUkkGWYHN5EN2MePmCLpuq8ko48mjKKpu7ekKGr",
  "key12": "VKjNL5dxEvnQo4PDar5iWU1NnrvdQ2YcB8SP4LE4cQc7nv2RKEKxohbTjaHYBgw9xPWtd41SnGHgZLRzwSLqed9",
  "key13": "4qmDHggHoboTd3ywXihNQcuAWymBFA9AP8adnqybvpfoZgZtYQzJu24CpuuUnwSnzn5C9wHwBSAiwiZkikWXg1i7",
  "key14": "3sQ6QYpPGNF6fPDv4BKQz7Rz8aUW4tM2RbBAeRFjKNYauM52siaq3Q4fwA4vMp3WWXkcgFGEFeXvBVtRpDr3DiDD",
  "key15": "34FURGa7Sf8ZkXE6S3btenKNvFhuDowrDMV4AQZwNEpHGvfG7BqNEFV1PahQs1rEshPKVmdnwNQk7sHX6nk5GYwi",
  "key16": "3X9mNdfbedmW3w9BkEu4UNhhjECTWx9wbRVZYpfS3m8issTFZUGRQyRwc2FPiWKGcq9Srewq3xRdYSXdRuyKs9va",
  "key17": "5fdzkNpmgQbdvZ6UJUb72addm81zNqCXKSjJzEWwzqGGmbJnCbj9GTnsGMta59iPdk1RfRnyAbij2oNDyhy2k8a4",
  "key18": "hjd1Va1kQDDF5mtQmb48xxgsUXjCG7CWa3sqm71Rbcz9bqosRntUMob6uijZYi8q6TZmhcQP2cLA3cpZ3fu7Ud5",
  "key19": "2eMiFqxWvrGtJiw5x7zTsMkxWAoq9gMoeCshGFgPMB3nfxWc4w3Liy5XyoqfayRQa5s1S3cfBhog4RJ7ByhMgP4L",
  "key20": "5PMLy3iFWZL3DfD1exgywypvaSjH2q22pfoVNgvfRHG3c7T4HGXaK4AePukFbK73FQdejqUsT8ifvZnidvngVTf",
  "key21": "VyhdHjj8nmDkJ58psUxCSzaX3GoDXRfKyctHrkm6HuCyjSt4zuTHxxmEsaLkGhCvyv6zRkmYnCCUxjCsJ4gntcw",
  "key22": "3L6JoP1godTkHgNEKL248ytykfeurN2VPyBKsdajVhRq7qLf5qazswUYXieTVG8VqmWWpnJT3rVygZqFhn22yB45",
  "key23": "3jb1Ve2BEXqi7pLRVFvmiBBSCGzeXthPDBPFDcs8LsFsPnF8DMuzgLpTaLWhVr7KEbWrf5MdHh5GTHXXE6e9tti9",
  "key24": "2wns5Fiq2uzzCbvogt5VVvvqqpLcHBvamhXTowUJASRkicNVsxdmSjm2kEgML4smLeEnKoN1qthAvMwmM39Y5tfJ",
  "key25": "4CKxgydQoSKpFAm8wLskjsAP2bysx94R8TkLUtz4izUWuaazmBYcZziCoiKH5UBJh7deponLqCEtJat1wzKYB91Y",
  "key26": "5qVLptew4ZAwVMUhNR1aa7wu7669hDucb6QiS9M74f7QeZwNPP6tpgzbmEJuKS2JgUV68QonSgHCBJnL3zL6Y2F8",
  "key27": "cReRo6jPfVj4GG71uDKgzKgUVwvUadtg3eZwFPrn6uxAJVqHvRqCfydAH7kgMUZQaJYYXvKHd3eevJ9PKgJWx2z"
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
