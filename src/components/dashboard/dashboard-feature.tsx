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
    "pyUWzyQb9LJtmfA1tuheTonQYfjKNDRpcNPz12ruoisUi8PWADEbfecCYanPq4jiYyxaSHyGPfti7ZmorHdQcYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQ9P5SDBZvtzxauS7LpibtU5b9GWM9tMKj2A9xpioLeNdStKqPV4XehH46vo6CQ6o6om93vp6rkLucMJHNdL5Hm",
  "key1": "3ZsrjuzAN2Do8yGuVcHUUvSD1A5wMFPrLu83uF97HiZ796cg7h5teTDrCMvyC6n4XHEaJeoGj6XJ1ev3vtWRwyfz",
  "key2": "GLH9Dws9mzTMS1pJg76kpRcD7cfpFShduWsaB9jwCRgc7EUKw9JJJfGCXTdGFo2km16u2ZZW4Upnr7VjdP1sQsW",
  "key3": "LnSpEVAhTWjDirLwD59aiN615WNYVapZtWhebyuCx5ZJGcJFHSNMN6yU2Usmr5R4tpWCrkMkBiDzaAH6sDp4v14",
  "key4": "AT1rYigppHfkPqH8bRAWKojUQ1B68J7CLEqQq5fXn25Q5am3i2E7ECom9cCuPi6CQ4yP7nywLnz96iNuAkERX5S",
  "key5": "zCF17R6jpxXPyvyzfQ9rGpuMhAUkxDEcmLfoB3YA7yEvXLSNLaVBzETt9DB6cnFTfpVFxpsXy9Rf8JLbXxP7qBR",
  "key6": "ysq7CMNhRi767FWycFNikZgp1j9kVPiqXaGKGWAQgBeScLkmck5gCzkXPYKHosuh6u3twYS7bJtLBY7GxbiPtjU",
  "key7": "5kuPxBENBSbTh6PFgejRrN4CthNXgvGHwq9RHVqFo95y35uuAQrvnyLYmqyX9LiRF2YUnhGwn3dbXmxSx2YZDwFJ",
  "key8": "2XKMaNVkD833KmJftYg37qg9wCzPXTaL765gfeVSXM8Aqd3EK2mxXJXiDh7H1XpJeAaMUR5h25BNzHoR861gSrA3",
  "key9": "4Wyx2Qn7LH1ryux2zpNEiqc2ffpJkk78dskiR4JKGLBH1wjadm7vg1JzJ8VnuWiQB1yt7VUp7WwPGiwBKBxWovmH",
  "key10": "2DssVZEQM9iDxCSsMhj7fRK2fkibWPgds5P93xcFqNxu3LLHSMWLhvzhnZyYY7tdRYk5hiWFjE7q5StdNZVBXXCk",
  "key11": "5yJKHT8ye2W6U9tt5TeKf2nfRoUobeVvC6CWV4K4BWAQVwFcSoK8h2HNnnr7iM6asCCxeBBSL6SsummzNB8zTce",
  "key12": "2WyTZkjbcZDJ3jGmoKQq6N5im8kvimanxpcmET6rQZsxJPBLARkBWkGm2PjCXJGmzYNymeaodLz2tJaeqrK5u6pa",
  "key13": "3ayoJESs4UkJnnMTdg8FCaU6dC9hGwLQRTMuAuu2XmGeVgNRKhcAYhcXLJPRejFAPka6aoe2ub2eXH26NGxp7PrS",
  "key14": "44owy1DJ2xmWwdd8L2iGAvqnvHQwY4LSEDQczMsTHjubh4kf6xuym2J6JhXXcJsbPBYex8xAy9LNUzdTbeVKXEAt",
  "key15": "42Xpaxv4ZCxQNvJTATmNinQ3tqwszwcSXEtHTd6Fi3pFiMo15skEPu1c1ZgM3AMSvfCSsq58NF28qj9aRic6Gi29",
  "key16": "5GKf2zFL3XafRxCBFrWzazqwyUysEdPgu9VrJSAPA8Y8pJq1ecVoGa9SnN1fJHYxQte3oio8QHaKmQFC6xEEw6Pi",
  "key17": "4mtpVxFHbUHrGXkTx8i7PZjSoyPG2pDpUWqwKRw4wx1M9tUf9TPbCFjb4oTJatD9cykq39s71kYGw1yQDwcoHjFP",
  "key18": "3WB9JURj2LXLDGU9TB3phhkvbSPLPSjqynyj6hvmDnYUbAsnezQyATJeNFDsxdkwguLq218wax6YM1gjB5J5gd4b",
  "key19": "26u3AceHRZwCmmGFSKm7y9HsT3D1fxRKzKKGcvhsDkd7dgpSHnYkm6nT4DPfLvBKBSEiE6Ps4JS7nsub9uY4E88o",
  "key20": "4asVnSQ8ecyGLb8etHPL5pZoh4t8NKN7wG2o3tB3hsURnKzFafdWdKSrNuzVR8ew57oydVZX64YLEQXcFVv3FWG3",
  "key21": "2hNpZoQ3DHQCDVq68a2MYhp4RiEiYQ8zTZyTDqdbTp6eZyZMEcphEAnRG4WMaNpt47Vkc31kDSxMLyB9Ahy54ZqS",
  "key22": "2AeCbzAbZcYobWptk1fhxLD3kt98KQ5Zf16W1BJ41iJD89GvoKKMdMUokeAP4MSzJpsx84NqUpCFh38Bi7QPGgyE",
  "key23": "dEVintb8td9vE9VXWfznPjNF7NqrFVH6jAk3WGMrqo4egUGG81SR3tws7VxjbRCzha7uGxbH28JjrtxMy1MsEte",
  "key24": "2xEuyCnKBWNYTZKZ7jRwnNTiPgvsbQBoHHCBE42TFkaGteQ6ovQxA7zKDWMfA3M7aTM8NJ6im6oevRybKnjAtVQn",
  "key25": "5cpWeoPH4aGYC3sz7bZoMMSawaG8kMKKfrfWj89d5HJMGYzVejhPQhVHicDjpJHdetZ2TK33NV67d2Mw1k81peWM",
  "key26": "64GM7pqsmsiPhaNJwgKFKdNMs1eyEJNvigmwsQetruKbe1wQ7mCeTDBrHk1GoDjnswXZWMvTfRys7EoAi5UhQWoS",
  "key27": "2E3CBWfc1xuRXrgTk5KwzgcDYZcwnaDXK16GaS96D3gtemdhqQd1MhEevVPQouxygaZzGh8cbnFrKaVhnARv4Fqj",
  "key28": "65W6J6AkRRjoMzChSPUW6m8JQseUpNVJda6ui6e64yDAQJuGiafsTN1FeZBiCYyRbhvnJMPfase8JJkEu1GQLUkQ",
  "key29": "2yDn6z7ogjpkSUdkoAnoCaLMm9GZ4Mda49hTY64mjxotyPVA12U91k8FsXiHjEXDcTGu2ZvzQ4i5UMbToYaGsbSf",
  "key30": "v8dZPHaY8uqMaDB5yQuwCHHtrV5UzWnMTZQDfndc5zbrD2XRzePFEgEdnqkRKgM1SJMyiMmK9yF7ZjtD9sLXV7c",
  "key31": "5XW1ta3zHfYEaZM5jnptb6pRQJCG15MWoYxqrJbixYWKP2B6hqNoatraX825bfE1To1w4kQa8SgwBjNSPbxqtjgm",
  "key32": "2oeHr3HkyEQdJzkZtPKJYHU3ybh2ipaXpMyuksp22SaWZ67iDA3VLGHZeVajL9i3xToiXLphhHzCacgr2nMjtLyf",
  "key33": "2gUTJEd25psAn1ZLWekc5x3kXQYSQkccx2dC48BRzePeHf2HWvGeT3X7u4Z9UFmpjJHxxjNMR8uAqZZs4Az1DckY",
  "key34": "5xRwMG5kgDAq5vewZe56Kzv8YnyPh1i7DyiWyiYRn6FWqjwnX3J94LsHsYV5J2brcaU958feoj6DM5sDszopXA7A",
  "key35": "bDfypaXLhfKp1wbFpxrmZiR5kXXjzgEcHV5bkZwKUYF8B74JjUcq93NCNz53FC3HwedLBVjgPdczFEoepevLWXA",
  "key36": "5uV3Q6ZBwncwuWc5vtwTtvhbfCGB1KAMti3i511Y3YpEbFz31LdsSRyeFhzrAkhcadwhHrRLX2nMEvFzzY7K18CB",
  "key37": "2gX41aLEbT8NLKJeRtY94XC4f3hXdT5F9rUMviSPEmmrpm4a4dgHe96rGMsATT5ZacTvimzA9oWUVFDrRLSqXwDE",
  "key38": "3ykocBdYePrrZpqdf5eRCSnXrwLXwcPmKztRWXWduZhYvdp1fr2zi1er6aHoGvL2thMg9zudZm84f1K4itqdtiR6",
  "key39": "2TmRfoXvTxh9zoaNNQSqTtQYYdAADnSbcf5WQCX8tqx2CdyLnSV5PRM5VrN1muycDtbdq9uXGQgyy2atnLByAJoH",
  "key40": "67iasAzUzyrzAxJvCSNrbNxpNLzcwNc5fefPywgMMUhCEjPeGEyQYFoNyatPSSQY42jcTMxd247wZzG6y93mPr4C",
  "key41": "2Rp16xmFKDMP6eZtP3L23P12YnEwv2b5wnZ7evb68cTJn9egRfYiYRKQULaAKfvssB4QWDTifPCyhkQxzzaCy8Gp"
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
