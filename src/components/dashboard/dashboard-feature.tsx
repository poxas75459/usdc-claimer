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
    "3tpJXUF8H9k7oRNRvkHu6zoqyY2PaBJWx4tpEy4L1UxR6znbX2kcYiCvMe4e1K5GL5pUcgviAQCwK5xgz2k3KMR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qfQYj2P7SRdb2w6E684Ss93AFH8XFC8sxhN4BAXfZNuUmUmcdNnfDdfyepeKQovKU59qsKSXaMPnV9AASgxivk",
  "key1": "2MSAKqCE8oMoMWyQ27oKwWSyznHH4YxyVSPpBVwwnnxigtgVaDhzJjFZoLH6tfQLTM9b6MNvjfe8KTSPKZiN49yL",
  "key2": "5ThZUsZxbaeRucKgjk9PFeobzAe7pDEavuNALKTUUD5BkBzN974jWNiQaouFTs7SwAXMwbJykobT3VbwxfdqnXBr",
  "key3": "67eHHeWvvquqbqQbxJLwXyYmZvCiZW4PhT2wbGMTjx2ZNxHHbRLQRhRYjfV8njqRxJtVyWAw5egwaRBsdeTafGjs",
  "key4": "53uF1NDcGyozwTWW8RQQvmvBxKskVwXaowqiDmaPH62E1TajTVdUafbNCKo7pmfhhwcSy8Q7y1aChJibDnrDamdL",
  "key5": "492xdNAg4KxMb1F3R78A4fo5mmoVuG1h8ghF2WxMpKCUfr6aPmuzuPCMmEQDTPzobKoT17xEEFdoTVs2HtLiWPWN",
  "key6": "2EJTuged7PLgongSvPwv8x1qFwoqcWprvuniTWU8QDwjprwMZLpDcbt5RiQa5wbNK8Tqw4XSKpMkMLTZbNUuFd9Q",
  "key7": "5LgZvP36w4vjxhvtQ8a9TS4aJserMFwqVa8RqzpuXJmtoZZn1UTS2LhafE2wP5DXzMxwSdJ4EDXmCuhRsUUU1BLc",
  "key8": "39FNq6wDay8Yqs1AXHDPtmaMFqPfpdQb3WoJ6sX1oom3o49coNaESbTMxZ1fF2iTbAVaEphZuR7Fw2n3QFo7dFq6",
  "key9": "3NyVY2YMcTvbA9j8QDuHp2fmCtWvDEF7YvKJNwBPgMtBvr1vQyzbApNaM99sW5uuZth1AhPzB6SgUpF7LM5SS9Cp",
  "key10": "3eSNTpRqMUAjhK8ZPDNGdNwL2dSeGUEmMkN9mjjJxDqR4scjJvs1f1d1UKsjR4JyTbxFiSZNeMtxZXo1oU3wZLCh",
  "key11": "34nuM5YE3G8W5C29N4XUrRgimFiEHTcevrYfWKUXUrnbehrz1ank8b1DyNTyUC8c3BwaFvkXPu3prtdnWwvpFgmD",
  "key12": "41UcEgYoei8uLUoTSbg4HzAtNoEgywg9Mn318eC65YP77TGSV9UPJSnnQ68HQnp6EYzwcPt8D3ztQaT2fRMJFFrc",
  "key13": "4ER3jsspmCWh7NKvFvYHsUynB3EmKTwMFKGoguGyDkRGu4MAvoPDETkowZmMTZLy8xsi2gd1miDbc9kf8gUp7f6S",
  "key14": "4ZoytJQ2JNgGZWsxbBQT8rT9bkiD4j7MdRKHuDweSAuP4xZcB4yQvg3VYYLC5aHcYPWHDmoMJx4ev1BRVFcTYPT6",
  "key15": "2rrjJoEAKg377xZq1eDEtZfbdhtaKpdLiRkzxstqzkAm3NyR5SBK1n8XKRZ6pcR3z8A2REKUCUzuwzNQ4bHjxKLE",
  "key16": "27xFXZvpDsNNfpSBofwTnYNAoymgze1FWw87545X55WBLeYyddo8ZjFfojxLAffiPXQ5hPSXJPNbw7ngiF623LNa",
  "key17": "5USTdY6N2iM3djGD1JJ7xP2DFg2oG6Pb8yp6JiANWD1GfedeHhSLuWxUxDN8TL5ytgpsbyzL55TwXtbc1H3cNrvM",
  "key18": "4sHBJe71wN7u2rtwAH5H5oqoBEJArhGkHihJtRnShDDftNgaauJsYTbayx1GPNJDVYv1hkUATetPVniwWV9TRnLd",
  "key19": "3nn8Eq8KTTySQKK9fKUbCL6bLJmjMdEaaH1CuhFEMXsndLAH22Zy3J2NUeMRYYGdxwXsM1RbJuxHz14DSGpafnL8",
  "key20": "46dYeJ4KEZAYrMdu6JVSqADms3RBcPKabNPVAC1pyGcZiD5zPeYMHxRwrFeEe2SjrWjxJ7qmDLZEFqMbVzrTjujc",
  "key21": "3ZPfQoxrE9Q9bmAmT6bepYZmJCyXnJzAypdYoxy9aGKKNhdGeedRG2sXNzesJCDrPcawPZb6moJ9Zng4XG74673Z",
  "key22": "VvU3SWk9uGEmf63hfWJVXmXf5zS1CUaF6p584ssNkn7Ns2NAPtZ728NV8msQstH5BksQw3H3cbA66ReAHBB8C8b",
  "key23": "4341CfTYtuEsPRsW95r9rRUk4LQ2usnueiaWSUbC7AzMLcwi4Qq2EyQ3GGDA3D19AGDFQ3G9yATuYgmuc7Hwo5Jb",
  "key24": "4YWeRTfbsUbUSh7JCsj5h1iVzx1bVPVrU4MCVGX7neXQ8RC28qYm6P2Jth6F4C4KnBfQhfuvvUbFrCZa83ehdQkA",
  "key25": "3hoamDtuXwoL9yVJxARdZuACQFj3jhRY3Az3U7vxsELzbmZ5uDK6sG9zBNgMcBDDU4j4cEJjm2aN63opJC9k1osp",
  "key26": "517yFWAmKNxbiwCC5Cv1DyxnbLgAvSJMSFp568pabrbsVWHzRRgyB6GUGicxv1c76MapbfoinkUMmvTU44ryEg4e",
  "key27": "3kZGhrX8hvaqXe4AX14Jg6s7coiU5XnxFs6y66bWMnvKqfF8QDSEJVXqRkkpLrqLBMWHMP22hbjtR9XAkvXyMaNZ"
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
