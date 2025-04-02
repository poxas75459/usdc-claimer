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
    "4TZg9DthcMkBsJtfvse1QLSB6HJmyuEc9oroQTC56iMJZ2JunfwEnPipcQRtRRY9dq8JRsp8NSh9u1CatiXS9w58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qt8GYdm4J9WWbDoRAyP3BHCTjSFuLZFaYwsyvMtPJavZntaQZ4ayjEe8ttL2bsJL77ii8FfwEao9As62Z9nCXS",
  "key1": "5bJsRBpFNRudXbcoGmTfCmXPZrwRvDrrd833FDpeXN6BuDzFtFvKevnYS6hjdA5BPRk9cAivQXz92UuN9rNq9Xfv",
  "key2": "5K2932iYM2eXPFGXMSTHnFHyFgmFALE31UX9nr2QZJQxTLZiZEsHdJfDw2AfEVWhvNhmnQn4coZPcAGueAw6oWjx",
  "key3": "2HEmAWJ9uvrbboCkfnQmjbcm2KMXMw3AuhrGLxL6R9Zcj7tQe1GXezmifh3fUkmGTVD5y4SDavAwWpTjRNXZTiLx",
  "key4": "5V1BzukEGVAxF7UiYrXZ2RZ6WRnShPbaG9dv4F5gZnHixts6X2uuHXbxy2ZWfEXTFsMnFNaMcpBUDC7ZkQTnumMJ",
  "key5": "3KKUEPknXf3PRQwahe5fVNCtVvtXgBZyX1SujkVm6arRUQgJFcHGpRmWnA5hCFXpqMNpGLd3PwPDocQxhJeUm7Ck",
  "key6": "53XqoZZnbWVyzxFQAduSVY6WjWxsEk8HhM2Syu8XtFwPmUZZJvghUD5EawwM8Ee6H9rTvNHA86HSxVHSgBBCyD6W",
  "key7": "42DBNgTRkSVMkpwWwYj2B2xnvm1EZmH4Kexs7o8QeQCBwkKXd7GzNPsoQ9CUCx9yV3Fiz9q2c3cgfiMcMbz6ncxa",
  "key8": "3QJrHcXN5q8vHV2ZcdzXwhG345kT2FZhcRSq3Fi3LCPpYm3Q8B93QRDCGxwUdsQQRNcqbp9rpt3Kyr3NY5pPY7yH",
  "key9": "4fdB2LuY58tA8GLQ49vaysQorXtnYAwcopriwpCJqg38k6P2UYUuvEAFNNWPU2jmL2kf7dEXtcCNq7xcwN71bKPW",
  "key10": "TBkQ7FYuxzQzjbR6fyNqPL9NsdKyjMdCFJdmpfMpJVpqLtJg2wrLmzZ6nwcMYZ4qGmTb2N6gQpEJaxgGqA778ir",
  "key11": "4RBgKJrhWTyz1hhxz8dduNaSDkdF4598beumLyS8MsCx1E5oUwCwSpEcCpYTLCEioKhrjSyMBpYKgiVD6VkguFuP",
  "key12": "4SvKgjKtUbtuT7UhgExm1cNdz1LmGKUzyX2ReLbHp4kg8vNpDwF6ZTQxWbA7DAxZ5KmxgePUsgpghjAA6pD69v7U",
  "key13": "4q4DRXjYhvH25BRD58stGpPqQc4D876QmYFWCi5FNDv5xN7sRNM2it4Vf611grQN8b6nWf3xAD6iv1qvC5RsaBM4",
  "key14": "3Hqx1MgiW5QxTEaKUpxL78Bf9ocymVA4oYDXZ5BN6ruk59p3G7C7ByACA4wdidPpgHSTsFBUNdzPoQWuZYYrwYq2",
  "key15": "3MfgvyQ6AJA5uptoFkUCr392dREg2pjoeuZgqFJmvq6YyDcZdMQssnHSdnW5TAEwPLJf8ksB4kbsD291LvTZkFn8",
  "key16": "3MfJE6VbxEAvueJH8SV6jiQhHX87gYF3VuBGAJnVauz8FLgBEG6maeNaGffT1mCct9rF4yEa7fFB7UTkNzifr5QG",
  "key17": "NPXSVuisAunU5ZTe6NkNZ3dg2iLAm4hjtHYPp6RiCWZrFgkR9QXUxdag9C35jQrvzvWVEabp9Cp6vdpAtppP73q",
  "key18": "4ceYGGUjyVD39rnNRNK3fUdr3vjPyPyhk1YMjf1tt8dSRjhb4YFvSWPx9QAoRE8rj94JpGKWBLMKbXiNssi72Hua",
  "key19": "4V3og6QDi4RuT2ubHohs6KnWghK12rMzfjym78KyxV2PRw1fXdBn8FMf9XPm6gQ1Nr5WxsVZMLQ492TyS4Hs7Rnx",
  "key20": "2yCkJHTNNicABJctSJkYa9zHy13dSDATRYkoF1HKh713Nfr6SkFbRTJBNgpzxLPw5gvwhopsL1mRoy8VcVgVgQ1D",
  "key21": "43NU3y9K9Ccocpf3UcYdYd4myULKnE2duirHJcoEoDmjRxmsCXijYBmF3YfTN3yFXDPVpXDCzDCwaWfBkcEwPqky",
  "key22": "4kUXhCnkB4yVJXDBk5BfyPLuYFYfAthCkLCaK2pdvKZuwLHz4K832MRgzJKpSC6qr1F9EUq4Hu1t9me9MADh2Rne",
  "key23": "4nw1NgbfpvczXtFruCVWExzWMzLVz3jvfHZXKVL2Tb3vxq5TRLQe9sqiX2aEQLTQgzadWxxYC71pb6Qq7A5XmFfR",
  "key24": "3YA4DoRkUjeF9zS9JxstUh9Q5CpP7Qfm2nk7ejWWubbdCEbVhvtvmEXiy7qiWf9NphtRRRQRHyYDz5g4SG7Co5ez",
  "key25": "33QMJ63C83YYmEm2XjtmEHRAgArGD1CzP5abrMLeGjZrbFYvXN9TERcGqBBYPhrF5Jrujqi3Bgc5sFGqQk8g89zX",
  "key26": "66psJLbZB11RdST5PKJ12D7QK2DdyfZPGh2Wwfv9pz1jyF7y6qFez3SmS6FzARsow1bYhH5eXLYKWa5nWi8sQVXi",
  "key27": "5CnJiKcCgj4KxJiw2Czvv7XG3PtNSBppd5JgsiuSVFXHnRXm7jqStQhvctkVWMXK1P7GEA9tnZPm1stC1TguF4yN",
  "key28": "5na5J3mfAVN3ZJZarT1vLSXYXZjXKRhSmqDHN5NWrRbnhbsDgBLYqDQ2Wx5oPmJK3sKVJXWsFJznD8Sk1UGCCi4N",
  "key29": "2TeL3MxeCGGbfMhG5AQ58LS9WE83KuzXW9ixf8XzPrCh6zxRzZjKByG7TNa4GGLVv7KLhHThJiNtfJB7cUSa4vSc",
  "key30": "4NtTR2XuxzvwHi57Lk7NXE2gLL1rjCDT3wovhRXg3KVgLa34713Q2zpQaMN8cM3baoKWAvqn554id7uUk9hvfYjk",
  "key31": "2mZBLdbRk8LPyJftChLwhHnYW7wBXnzvSTAmjeuS4HdUkFZ3hDmNnaWevS9n1oHNZxWLQ2HX4q4yzGcaQirDHtab",
  "key32": "3vmauebrHw5VQ5pWNwhmi83hMmQ4LHeig7xqB8mLNyYcZtSZBcBsGJyHpt6JqeSWMKTcnYhuzLipwLPPBEjjZoRC",
  "key33": "BntCWV46awfeQHEEwhCqR2tMty2AX3p742UZKcexu4jrUV21Tq4LMi7ArqgbKfa7Fc62EkV3V2AmWCcYyYUzdYi",
  "key34": "4vpCxk96bKQaYGxFFWocGHTvaBM5WLG5LZbjdZjAf6Ce4gjqcX12PtbfqeXZfSQkYeebVFgcUhZPZKTPQ2bmL4ib",
  "key35": "3Vbfed8gXYrSXJcnNDKdvALz1NsbxWttwvXsdSgFmUrz99mimN2NRcJAbWfx3kKAsejR2dHmcruDhfjJMjJzLs1Y",
  "key36": "5HxDWt18HS7T9S4F3jHzUG61ZFA3YdJa5WFwBh35HhFPrEdD24WDwrsiXnsku3UQpy6NKZhdEVKPVWGNqcZnWoFz",
  "key37": "3qSynLFPaAPNDyGxjMXsXJJDQqZd2AR1ikjGt9QGrYoi4f6EhwNC73Zyo2B6J8xnYFv2xXdxdiVrKu3j6RT3JeVr",
  "key38": "4D7SsNRLCh6TKGB9YdmoVXmf1FVdar7H3BnXvGK87mCVf8cTrnemsxwFVyPd9vECmN8PnTsajo5andPFA8dpwQ1p"
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
