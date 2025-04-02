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
    "63TdPyPmMDap9J7VrS286ySgaMrsPAxQUG2kajPKWPXWGo3pp4oZXRCL4pcvxnoxfG3xmwqXVUCWuvppYjJKGBfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRhEmYZRdG4HW5Zf8uv9cgkPoYFY6nXzK3Jr1LdHVpXB7zxpWkU1Bv1TkjocWKeHh7K9TASUZF8V3hChUbR15K1",
  "key1": "Wa8As4hMxccFTFpVVZA3qmGp8h6yw1b7bAmKoGevjxJ6KK3LhX45q4zvodJTQJRr1QzCbi6tGofviMbLYCQjpmV",
  "key2": "5KQEwjR6ac86bYDD4zATbTbogSnTjA5ELDoUNf9V56hngyFKMSvK7zf7WFagaieT1i3UBpUMRWdafbNmAdsRykNj",
  "key3": "JK3gbWC3uz2YQAxXJhtkKKpEC3uqAfPmmRUCAKCj6fmzcaYKgEkeaXarCSkLFngnpWNVtZtUqCwyXmHqrDXhGio",
  "key4": "Py2c3cszmQ4n4wb3APKm5kJibgnMHqQt6o7noJEbH62zC3XKHdm8hm3YtYCagnKZAPQyHrkHRG7zznSAy9T9VEA",
  "key5": "3LJJ3R1MiGVV6Nwd8m9MaeSWE5iuf3RsEmEiHExE4ZfisHfntdYoMWtvgjA9SsS7PmmScFoZoCEd35sPXUMyfExm",
  "key6": "2jDJ8fDW7MpJvCh23EK71HbYTnHANKcjMbQsTAUUUhjXyY6M1GgVa3sLdYspmEjFpJQfiySAiAiVQq5dCY6wXwbR",
  "key7": "4yMUuwZjUN6Jv2fgSJBMgwe8w82XHDG179q3Wt7EnG6W2bPyr3WrkVQZU34Sr7BZFadDV6gyjq6nda6dB9MCd5XD",
  "key8": "35BDxxXGiCeNQrtx7GWPH24cUPxJk5Vb3SPoqQcvYoYsZp3DczDbptnaMi8Ym6M53BEooLxxDY95V21u6v3MiLDQ",
  "key9": "3BtkPHScDeNoEoBffbQqMaLU3dLDFTiZspGSLz964ZCLjtqrBSrKe5kKTQrtLcP8oH5m2L3hUwQZBbYXdD3Ajw5f",
  "key10": "3PRLVy54VUMWDrn8NYgGzzDPtsBe5KazZ7Q8FDxdaZNTqiCHu7uMWDinGPrdaBw2NG5SyAsaeDHQgZcKyafAzkbJ",
  "key11": "2Lq3urr4yCRB7W2XeLNQxxp8siXX2FSSuL8nXUgZHBL3VZfgfsy6Z6ouqRGFzp5SsuKc98JW2rdqfWy9QJA6oMvm",
  "key12": "2oHa4GNC12bvJ9ykCsmeMo3yHwtPAV4TYc9Fr24wHfoTVMrZwVUUGP8hsxE4CDRGK8LEe9benYdLKAjitDGRBHtY",
  "key13": "5GVYpz2PyKhXU6swCuZ4iRsYb7tKqxGkeqW8sNmYDxHvQ7XmcnDr7pPRdq64T8fSn6Fgup5vDcMoqResaerixaHo",
  "key14": "5r14RKzdX19gNitXLduDLTQcGWjNTDXUfsAifcLEqg7xZXJZXqcoVMU91b2ryEnGrKYKEwK8s2oUSuTwSdN8XHhW",
  "key15": "4iCecUXPikiPrczRg8GJexbFRzT1VhGFHGUTedYZzjXP9FPyABrK1vcKko31xNH3vKn7M6q2CEigFnkPZhAHQNPf",
  "key16": "2meDdZFLtT6JHwVfSv5b8r44CPGAzBvasreX8jm7K4CuwjpuiMvFqFzDeA3ypx3AvAS9R2p8W8vVszQszuCYTXXE",
  "key17": "3E82LbTaHsiMWxRSbkejdf9JDUACVrwPr8on8myJ6kWBT48EojFq9EzpJazH3VZZUSKWyuwwRZozzptoobd1FGfu",
  "key18": "2RJB2YLkLg2NUD31c3jzpkZeKLsT4558xnU6uQMooWYbBPM6gqcobnt5Dkdt9a5sAFsd78YryX1DaA5nWx4XK9Q9",
  "key19": "4oagVduXV5N1DM4bGdeswhiKNV4F17Tw22gdUP6Vfxv6BkPyZNVVXnXobFrw4zfHjpTJNKDG8fBgnLFaHXgBp62F",
  "key20": "4iHz9WxpoYVxkZ5NQE7SmNKs2ttP9NwZToAqgLhCqrz3oy7Em44RzcCJM4pGjh7GU7ShfzpRMUw7gdYSBMuM1hzn",
  "key21": "UwGTJ8ktgLRGbmUMNR21sUJ3mYhCYo4Z6R2eaLKdsAHoAN43VY3Z8iwaeBL9n1R2MvkkQ1atAgLJPSWkMrudmxL",
  "key22": "2DphLmPdHCTWaK71k2gskwtTRXGZ22thjLsLrCK8CQzTgLY2Fc4JoTUXbAQ9kirE4ht9wtYJV7XiewfAoidHZwpq",
  "key23": "37Fh5HRe3QbwEZqsjkSPY63cAVFgXBWDYb3YYJaiaWHjuwQA4pxKk4JCrgwWaaMnD8giyKLV6TUUVwvyFNgcbT9X",
  "key24": "xfTJi7EhaHyxx7y8iKfjwwAAyeKB2guFs3qWDVt9bhC15U5GydGqz3AatgxFHaiEi4nPi6Y1dZ3RwXeVGNAZgak",
  "key25": "31JptxZqp4GLzMeQwfUkjkcho3jg5WgMQZZEp6wyJnE6EYuvjjwrUQ4WLFELdgLzunpCVASfPnTwNx26qKFHgUyF",
  "key26": "5MtXdkBeBuaaC5CHRwRfdaxgwBXZvJCbocoDCVQ5D7ZhaRpca3YYjS93jcWhWftFTBGhhckz18f3CQEJzinX5yJ1",
  "key27": "5BhyJYB7dT2DGhVtvY1Nzmqg2tc5ck2FxKy2w1DcbjvcvEqXtvt8NK8DqaQPJpdu2kfrwsDJpm7Gpzpd7y6WDtE8",
  "key28": "3R4wWiPZhuWCTveGoF5xHZfexSVQPRxj95fU6eSmDix8ppRVqe3BRWCoTmdNMEcEgrsBnCXaxB6G9HggE4CLtaQv",
  "key29": "3UMCLLsC1HXd7zB53iNAnaG9LQgduyXdFNm4CYeh87hn1FvcVPnzLaMy7oJ1xwF3RoyY4d8zjsJNUGVFwqaxARZ9",
  "key30": "KafhvKUh9AKnL8d7Mv3AhAKwJjrrxqFiP8i4YMCnDbWSkUdVYRnmkLd23JUkptoCRKMEyGPopb2cbxuhmmNFiXf",
  "key31": "5jvFvGDw7yLELnLwfvkzrCWGMVd2sfUxikinAVtxjFnh9EirdVYWxhvH4L6p4Q1SWubm83SnAdbCvwmuHTSc5GK",
  "key32": "4qVp2Zgdyj71HbMBTGpxc1c37TqiRNETdsBEugRnkxwRUMqbAokeCcdPXdYTPxtQKKQo1CeHGzgVzMcTgBApsHoD",
  "key33": "4UNcVZmxnF8kG35cL5ZtmY7HuA2TbLbBotWoUxMQNYWVs9nF5wmY3NvnXk9DBWU4HmehTtiLWFmTwGtzKbarLfJv",
  "key34": "64wevV8k49tvL3sL9jNh2mJtGvBu5gxc7JQSnTDpWtxE6hw7phHSZSZ9c2QuXoptn4PeTrAr7VjkfWyxD8MYkzyS",
  "key35": "3Z8AkW1uqeVuuVBHFFBTM98jRkwKgevyhmJmxGRKZz3p1goL8rbQuun7ArRRu2iNxiYGoUPX7fGfP7CFV8Hg2xtQ",
  "key36": "5HkuGwfMnCvzVrZbevLxpCu6nc3L76BhbFp2oV8SHwJeciwhLmanreBDsgVerpiK5Ym1cwKoaEP1jdQSAg3bDpDD"
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
