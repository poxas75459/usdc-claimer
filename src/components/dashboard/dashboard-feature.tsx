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
    "5TaPUvQJWsfwKUpLc5hCZzEAsupVCavpURz6njwJ93q3ntSDRmHtomwrjGX9M5uFRMajSZc2ouPrdq7bBTnrHuJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VuV2pzoy3qPs5goMrEJW5RLdKdq91Kj2W5wt41rTYh6CU6ZEJCo8gL76kZx8m5wdvND3sjynxEfLFvmjX7RSuct",
  "key1": "44nrdeEUnHipBRBFWhJz6GvfWWnRwQBg6nRPd752sZX5oCq6FQMLmE5K1mT9ZdczKwMzr8B4HLvkov6dLJhRtSBh",
  "key2": "4Tm3FPsUv3Q9j8inZYr3A7jCxuDLoQYt4hesQpbiz3DfLA7E8Z8o84y1QyHXdk3LBTLdQdVQft4sK75AmbppdKWS",
  "key3": "5xFAErrHABR2kXiiP1j7RvB7PSPntnWyK4jjonN332SWefxk7qiCVA8NCK5NFBR2Hv6umciSnwq2RHLBPeRMRR5P",
  "key4": "3HSLPTroHk81CMwB2ar38yhCpttvxkr8kbsDdAhjWDS8D54RrV6T27HicWzYRQhXkT6DXzsCHuz3Np3Y3cXUMHaL",
  "key5": "MhGpWV73eQhorYNwCViuCuYSaHXFhvSsBdoGnTu93hPccpa9TtQGj3oJCcNQ6ESA4BLjR8SzoAiaq1SKMi82yuY",
  "key6": "2BSn5FYu5CVgLoAewjJEkoxfXRpScpoXYxvcHe63SBQsUTWyDzHi9MPmbhhQjJFTNxktzWh2KkNVQX5NGn8JTV4Q",
  "key7": "KJjnWLM9SiRJ7pydKEpRvKaArGfC2vMTnHTXWrnZnisDa53UKE2uBgdcR1xu36BxRqTT6KEEBkE7cd9VUUMHThL",
  "key8": "Hi6Yo2FpdNUNj2qaQTs737NAJGY9foBUdtU9zpiCDG3sXZqqXZq44TCJDYx2yrCFi89ZA17Cidav8qgpnP4Eczw",
  "key9": "2aGt4veMiYhxFLXqjUW3ybGU3pXmarj1i9dUofB3KppAbxjuxcLjfcQVSEVfbKReEgeSPunAdhKKs9hSwK24m8mx",
  "key10": "RzrcWRtXZaUSAwL8QYDVCLc5HWUE3VkJoUSD7P5QWKKK18BShDyB8shtTApGTfjNg3TZPZvb6K62MdSysjDC23s",
  "key11": "2BfLNixy1E8vyZAdQ8ffd2ynE2te5spDXq9xavSBgkcHBjsSDDrfyxgjRJCqDRuLsiqv5n1LHPkUM9k4P5zjKZpK",
  "key12": "3AKZqG5bF2ou3HD55LmFJEcj3encoQnuRbS4B8Ad5qdM29u8b3jTtPWzNtgUcUAJJCz4PUnehHtw6ucZmoPuZUNu",
  "key13": "5hkcZTQEjjfTyP7Nt5iANkWa4hiZ5GD7FxsJ6Ad2EGtgrDgNDucdRMZ8XT5nTaF6cfzL1FcTkUkB8idUnMPfsfqm",
  "key14": "gXNDuDEvhbbuQyxwfSpbb1WuyfJQyRSXexKBLJrEfM2PHQXG2zeQ8DjGmk75HLYXL2DGBj14d6KduAVnPTXtJ87",
  "key15": "3Ra9hVycWEfQeVV42T7AmFUiQsYFvgAjhbTDEEZ16yzoWSeRshsg96Tmru5fU5im3emtWvEcw4SxsHovEg5HnyLp",
  "key16": "5sbTPthEi1kzzSsGEk9szzYu2g6bLfy2tNZk2UbXbVmeMgr2RVTE3BHZpDYfrh8Y8F6axuSXUd9MnzutBtdx9Ao1",
  "key17": "4jsygahQTkf7Th8xG9Evf4p6fDkqMThyS9fuCYjSCJsWAGBBDujQPFCPtbU7ztuLes4YB6Z8zKRPfXsU8Jy1Rp99",
  "key18": "5QSgwHGvWR3JtFVkhZha8AW5ChoBHXB7Yt2J5UKNdZKg3ozzQB5HCdY8URPz6bRKB69e7uabUS5f6zLmamC33god",
  "key19": "WPms7FFA7BshFiDbWw4fAkAyro561MArEx8aSi11Gzvh9XMgGaugeGmk31Bo8jVevLJxnGWE96CQrQ5A8hLugk5",
  "key20": "2Adz1D5HE11bYrhgJEhU9nuMhzkm3WX6VHcxkzH2ZG3hJE9paN2kYrQ11hacmJScRQQeTrKwZkBvvJGyJtCVRo23",
  "key21": "3LtdLTSzzbN9iUqt3ccMmFABAx3a1M6fMHDJfuKHburAsbpW5i4Ldo3tpTN9kWKSPU7ga5LSecRse5Y7UBnTbXzS",
  "key22": "2MfPWfQgxnH8Lu2MogfTXgkFzyyvp6MsTmokHenP5rmF2HkDwMuRPMeEzgwtqhSNG4YPiUmUz6vdSBvBR4NKvZCR",
  "key23": "5n9MQ4dGfobbKjXKcL1AVNrAjk1mQWw5XEPNgJXFZtLm8EueKwvHdEQN7xk8irJrjGbeDmK7htxNhtPKpWe7AuvL",
  "key24": "56K2BmSLgGn15ramWbGpfMC7sPdtwFfb6YWJckak9FrW35xRQ5bdsmoKCSBMivHL8KtVaA4XAEJ6Ff5kFwo3X471",
  "key25": "d1BhH33MwkQx3CTpXcPLiPQp8eh3h5EY1927LaJFwjNYeir2vqPXpFuSadi7sBftc8S4SRfvt7AbRP5KRJB73rJ",
  "key26": "YhSyuVucoLjK2zHBY3DjDZHSnKmD8brZx37S1rZojMmB17EcmebQnU66dDdpPVY8uowD7vPwkbff8Hb4WmBZkDF",
  "key27": "3avXTXHGQyQfYjuY96nhwzffkpDPTmBPUpacukUYF8rUpg2P6MHJrjnH3ZXLNrsL4vp2GypjdVuQnwgkbRQVrUGB",
  "key28": "5cS3x4TKsXVQWwkpY34tr3YnXJv71Uj75SVtv4nnkReroBh83DK4kKSdov3UhFMr5W7NtrNVSje6Q2ZQoV4gB4kU",
  "key29": "5zj1nevYFF4xSBzmcdcbUMeZpXYzUaPv6a9wsF99AzKeic8RNr3LEyuVvyFXRPebrUKViUiN1r14dXWcSBZMBHy",
  "key30": "4FUDCPWRVp8UuwuzDLHG9Xn428Q6ZdVhco5CMr2v4KUnLz94fMR9aUAD84s232Gf5hgwTpzj1hssmR4UEAvuC9uz",
  "key31": "4QXZUPYroW3R4uQk6vSRnt9Nf6JmJEpeH195Vxw5F6aZ795FoShMSKW64bWVDZEY2XnYT4nHNL5ebHBvEU6jFB4D",
  "key32": "4R4gVEm3dxQpwZGtHf3wf41oyy7AhDZpZZPxQWdGKmRBy9dE8Di2H3Se9nEEEtN8umqgBQBgpfUk52sx3pjKRq7M",
  "key33": "23rdKAyZrUqkcLoiWgEmnx7Byy9w9z6YoD2v9ik5LZXXkJtt4UmodwgFkj8Vf6EmFcgJueWGUhC91MkvbCHCCaq8",
  "key34": "2mfUbC9YLz9cs1VyCoDgNBsLRzW1WBh5zPWVyJ7814bWHXxgLMrTegbDZ4PwQiim12Z7dHpGnWikPTbM1pLJxBT6",
  "key35": "4fJD9vBNqEmxgrtRsMWLvyJUPEFo4J2dJgPqkpiMFX7pHpcgdvkGB3ye2RMPzqE4w3XmwAjCKyv7zWF7ggVYEzH3",
  "key36": "rdTUuuqYyhpVonR5Ectf3ncfVsCJSjLnnAhshD2qQAg2azzV74VaFY2iNxyhvPE8LfeSr3T2krQwFMtFx7jzCd2",
  "key37": "48tct9F6feDiJarfWj1vQ5o7rUR5tEX8qVtwXcjrYPKp5XAaHVUrVHBzPREBFUN28ASQD17jL5PtVHiGYmkaMNBM",
  "key38": "4d56CTP91zNbQaPoqKtp8xSpX6PB3WWnz7UUdUkRJ7XbVUJ95tb2E6M4LURptrmDtRWcH45Euv8oSKU8fvB8sMAk",
  "key39": "5fWueqQkVRgq5LLk57MJsdc7Rx3SfAxxf7QmkYcpajP7om7aBv7riLkc9hsHgUDnCSSLhKPUzWtfrAPuRmb7nczF",
  "key40": "2okZkaQYDmE5wJGeiTBXLshgBbENwM8DBUmPTcfzgK2r7foLSrC751uzERvHeXH7AuZRYaiKHiGJMcSHFd27DDLK",
  "key41": "3eV4Sy6J1vimnXHhXBL1dP7MqtNxK2vS9gUfiv7ShMdcHzhemwiVPjM4hfcNiEMDVuhbqLhKGx2Ko85o1FRb8TEa",
  "key42": "4cfTubLUYr71y5zgMAZVg4qgARGX36AXKoxj1UnLpFhr9kK966HXADc6jaByPQkvg8Qi5WujMRaTtr71LpGKaHxr",
  "key43": "3GAZd7o1jqiJSaT618qRDZRBx8rZ9SZ3aWwDGJaXJPbjQ9qJBvFj6uk8eF5yPmCMgcf3zhuAXrXuUsTm1TaodHHN",
  "key44": "h9qvJ894VsSqKQRxnr8yH55FPm5et9nX1LthduQpz3tj5c9hs6EjBgGJFcQveNU3NuuWHTukat6vFsCbaLnfnyb"
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
