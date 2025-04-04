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
    "UsFgL13FgzwsXCatExScdovzzdzuYwVz9m22LV46ykv6ERicvfsGk3MatDXeRY6ece36VgVeauKMz2QoArXHMet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaBhtQ7gtq3QnFaVoA839xNe1TW5wS3Cfx6qsfH8dtnQsz7b6kvarmUGU6QkJpaS8iLzFLpXveCkt2Nddysxk8c",
  "key1": "4pAvNH7EdWbPydRtwuSDqk9d55HwLX9NT3q5gEoDmhRKvRdXSjL3KPFrqak2okZVSq3htsMXtbMpYRMshkwozvo4",
  "key2": "35CkZYQz1BFv82XHejDgoPVKRa15UXM8PcQsAfNRAXvRVMD1XMpjstWzmW4Vt4CLWvfyWCL8MRaHWxTrbSdqGgaq",
  "key3": "5rpr8zH8MWJkLQcjaBpKUPhBHfd8zWe5uuAsBBbDJ2dij6wtRPzrXZXbYVti8LXS2vw25ZQQLGWZEECzQvVqQt5H",
  "key4": "4sF1GN46U4xvPr1aHvxeurrmf893uM2MVWMYbd1eX2phKdS166DGpZQEf7EMvnXdDKqyFwqcJYnsL2mimuRwfzJ6",
  "key5": "4tgLGswM3Zm2dXWxkn1RSMPcS6bRz5rjEZhbdbLqua598utPoPZhjnAC7vx9craBLqrzMBoERvWgSp9oJNcQpEco",
  "key6": "4fGcrXc7RdtsWBJ2oxsz9x1qFcdhsqgKbZLonMVnAQGMpf9DjHBSdb733rbsZECU18bfAVZDjPsDCn1HS3SNLQB6",
  "key7": "2my3LyQ7r9hJqDojv8AuDiWFFrKHnG58HrXzabuXjp5o4uVyxERmjyB61BGN512sKS97fy4c1MKhDE8UqmiUAKpL",
  "key8": "4bDE9YN2AHMmACWMmrUBvz48qb24p2tjz7eaQDgbBHYAhsmgdkpoEWPJ5ThSXDf24Wbjhe6mPy5zzN8N7AXVsRZi",
  "key9": "5SJV2gNBXXYLe1Es3mr47d2sX3dC8fS9f27cBzLABeTcfpQ6u4TWvqPySDdzzsk8ZTwU33dECy7hzxCS6VLv82yR",
  "key10": "3KFQmiWoQJMBTWTo3dFf9zogwTpPRfrfu3GPWtUsXcrW7GXA3pv8jNg1BPH1CZDxpuUhWuzHHaYEhqYsuDSZZpkF",
  "key11": "5iHHWb2L9uB1tpV5R2DaUuMhkUkujLzx7bDY9mrzRfHCZ6Y7ziYexceYNfTYAZs6DLpriMtPALxrDjvp2yTVDDmG",
  "key12": "5irFodixbL13nX3XYijJBnNJk1juTVE7byzCyxBPABCFtaQyy9Hv3Diw8XJ76fgf4BCXK25sGEjPNML9fcF1pSgc",
  "key13": "5FmQGmX8WrF4xiVFC3DcNqQt1cgXwmc1PhDuJ4xndkeP5gTtFzb63XEttFxTn3B5VnVEGt1ssZZ9kNhwR8SQHwT5",
  "key14": "3BcasqMX9kEDWUssyr1a9xRG4PNWeKugYz2WLYUXPdD1Ew8imsFeNq6EUxwUwWDQyGoHbZbBPPZwJPsL9TvTXWaT",
  "key15": "3KfkmekMjtXwPjX2oXsadvdrcjmYgdNJMhz8ugEWbA7pcdbP4SXprtKVakYnQDSbASwqy1bM7MZBkVQvfxrfMAkk",
  "key16": "2PsQethLAEEbvQvGTNusCuEqH1A9FexjHbfgRNfERB25dti5oBxsL2rDZYFWuCvpwmBz35pNU6qcD21iorusXf2T",
  "key17": "gxqNeQmGPWSfrprmBPWW4fe63yN3y975e1aCUYdWhXccQ2q874tiPVFM1mBt9Ck846mqr4konCytAS7dXC6zv8c",
  "key18": "417QCisHBrMtWnfxqTGocHzN9E2mzRbgRUGA1hs6MWE5rXTwua2Fd5G9T5HTnHGHmddNwuBnxPTyxSPF1wSPCCbQ",
  "key19": "5fX8k3GxBejES4jKsmRAYvPXEhkmksRNkPVfBzbkHNvXSq8p55W9oJzucA7yhzRVatCCB6Wif7F7ZpQeqEATaqsp",
  "key20": "4YXzonRZSjvaqT6JggogsemkvBLjj8CsYpJgAz1eyHD4vGbETm2J5jWAytsQZ1nKLSmpBJcUtYD1ae9r2fao4GN9",
  "key21": "5XQ8yRUdYFnG1dV7XR7pFVuPugbX78oanG1t39d4hedr9Wp4YwUYkYsabk1gT3sZcLAMZCs115RBmR2EyaGvebhS",
  "key22": "3mgZ8fxB4DK6fMy2wJJiewT8HC9xWGP4gurtyBe2WL5VK7wgEfAmGYCqQUTXe3aamMcUqCX3frhiaCeJJ1WP2rgN",
  "key23": "EnHS6dumS4EL2L2ebVPrceMFKb7qNrMPSnridA67XA78FuEZVoS58hnfXfVmdihBdNXiMUpEVqgTZjpSB8BZy7X",
  "key24": "eyUHQQMR8L1SHTrL8h8iFHdvckCx3pjPXHDccgfgi3ULKaLB5MkW9wKJ9S5Nt3SLZiWNCXPmHme66B5rJPbvDWC",
  "key25": "4wU7nTmXbRao89t9WGifk41JC429LXuCrtmkgkgVw3FSKsarFuygwcqSjT9AKSGwF2Ru28VrJqRzRCpeVnXN5PJH",
  "key26": "5XHXY2VMKpAubcMfyf6fDNRThsBodNqkhfkSJYtUhqK9vJ94F4jhVx3dNE1G4HcWNTFF4y3HA1dSgkq1dfe2hGXZ",
  "key27": "4JkS82ThZDFuaxZXNox8N6oq4B5Ykg9mb7qQ285qyHdhmhGraGFHtZryGmDkjQdcpqjFy7df9iahyxJxCUMXGK9k",
  "key28": "ZoHaXcXBnUCM4jwfrzgwAA94eZLG9Pzn7APVczZhHohQs4uVcUZDEzKKk6Z5AHde5zhzY26px8d5S1pRJ1LV3iA",
  "key29": "4kYsLoPNqx8ST37HQmHwiVESF4UH6EQ1SnBXA5j2JQGAfudgFf9JEF7xcyGJojCtuLqK2SzGzXmRLRitPAnozjYo",
  "key30": "3Xe3BeLir7MV3EpB9B4miGs8BvaarA73h1e4fpxBmU7wJrceWTsji6C1ta2w6qHYNhxKvKG3LkKvYkvuPVyfFkaz",
  "key31": "W6iTifyisPtZYBBBJbbnG7Ng9s2xiEWQhnkHjJ26qJeaw9AJGMzWmeCqREHbhyR8jMGEan5EM2xT7QjTdmvQqUr",
  "key32": "2h1pMnBgA25vgWre9pspUYuewnZ988SM7LU5Rusg31LHxgqEAfiWbAhzrtEDhzm9kFwcuw9x7u6TRQHtWSyyjpfx",
  "key33": "5SPNFmtEU2axUWTE34X7prS7W5swLJ9PYW7ddVvxhSaMiKbeFHW7iG9nUHfQtxuwW5TBNFfJk59nRnfp8U9SRqYy",
  "key34": "2X5mSWpERu1WiYqA8XcAFHuC5zUHyuAT6S4ZFPtkVaJbsnH3ouNTNXmtyNojmfJA1TPZeAM1EGir968gYVDyetUs",
  "key35": "4BW6SuWgdnRstK5FgaoUcoRiZu2X9XsBirvP2kinDorcWMPz3mpbcQEwS1eP73CzgNZgwrEdDffzPMfYhhVWaYZr"
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
