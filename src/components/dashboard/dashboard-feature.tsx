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
    "4R8StRvYxm6Dg1aSf9hhJBzfUd5x64qnV3ysBiKvY6EkJZZJhjXdZrwS8mE9HvH3WyqcPusokCubCbP3QDiCQRGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oshhUMWe5Z5Yexf2DwtnJmLkNbx8XuiNzXvv1G1NYXUh7EBE98RvfRu2aAWKtem32KMMLQS6NuscGhTFdJT1sdk",
  "key1": "4vWzg4bkx3oJviCwpaxLVSc4nEkTG7t6LUyDzV6gTSCiT4t8ACGh3L2CkC6FXLDcTy5zEBqcKpqgz4eq6YTbrPBQ",
  "key2": "kYdBrPsbGjAtAPDbkk6eXCxuwCTwCatAnRWRgAajTRTfwrehzMHCyMFfsDWwUU3eq1degNYRSBYnLQmzZbYAo7z",
  "key3": "31Jy7QGHGyVtbosWJdr5EM6H51Mvwx32ceqNMF1diTxyS5mLERmT4E3sMeWhRDXYcxgj4GXb9ZptWiRqY8YjPBMC",
  "key4": "oZe6aoTZkxPfQzCmQvCC9T2DYwdFedrWkscK2rSevgPFSsX7PfoeZBeZfutY44N9VHdTEB8tQHdTaDWwKzXVKvF",
  "key5": "ojAX6EK2Hp4LS4v1pDHHKTaC3VQnxYN1wjFqKVKKoiDfbi96tdz5WGeZ5AhybWC6ReQPSzYV86AogdhyRWDeju2",
  "key6": "4TWEECpzkv2PuoXeTQk9jHdTp1Cvo3MVs3ErxPe1qP6TjM3CQUtEcPpgBY2JVVfMRhVJDAk9copzR16sX5FQgBJC",
  "key7": "twHTJPUpUpg7txGwyNmXo4JhwaZU4aDzBLKLVdcybXommjGnq2F42C7TY96hEhH1ZCU1pU2h4zYM9CV7ZpPPGyS",
  "key8": "grkuxapsU8yXSD5euRfRLS2R5469m67zNpmZZgsmi6N9mpu3x6WoX9f1rfXcEwK3z1jXQ35KYb7ZSMBSqJYEow5",
  "key9": "5Rm9Ww52YGFLkw4vB9cYFdzf9k6fPEAVeUNRjU2xdr35JuRuHwhCyg5mTaWGbfLMV1hJFtbSYvPJnSRhXY6Sm91Q",
  "key10": "2WaHn6FyzJVhL4ZMLXFc7FoPaV4jBrczBmFs72eS1S9nwqEP1e6xDg414e9NrtGeqfoRkgDPsvrEqqK9EQUvpK3F",
  "key11": "21GctiUGhJadSyW9FTdxBoVVP3R7RoHTrA83yM2stHcui736VLFZpr64tioW7dKYKDGM8dKf59RpDdkL73GJmsyM",
  "key12": "2ZNAhTirPSLuVqhFcCMWFkCPJzzQWwjHFe4dX1vJA4iX2SuqG4GnRHc6CoUhimeX3gah4fGafWZLc157FW8irE6x",
  "key13": "4p9mNQhqDgPbXizoFE3JwEccQWDLkku5Ln4w1h9VG9FLwMPPjyhGBUF1RLbB5YZiV83SD4A8XDCMo8jT4Vv8HaTz",
  "key14": "4LKckzpZg5Qtjs9JULbUvuyJsYGefSSu2Y4MgS6QuJ5bB5kotEux2SubNstBysk7gxcksn6bviB3BtMraGE5R2hv",
  "key15": "RyPXcm1ozmpi2UF3bXe6sztKanGBtt1xiH75a7EDpp62zn3mGjBKQLwT9zNVfhCsfM9ZXdi7M6SHCVra9RPq6Ud",
  "key16": "5YtfqncwaMkVd4KJychfffEwXXWDSkSQ8hfyGM52YDGv6efSBNet1KnU49KCZW1xSVe6ahPGgxw8mnpHUkwkbXhk",
  "key17": "2zDtwcDGUAcysPn4DkUkEtjKZzxZhFf1pizZxCgxRFoULuXmV9xujPTTbBUnQe5i6rgKc4R7Vxc41Veo1TCvyxcE",
  "key18": "48RNUednv23XDYSdV8XeEFN6PHitm9Gviqp2aLLXucdGNua7HVeoxJwX9L59CvTKDLCdQbsos69qi656ccf5Qqnc",
  "key19": "5V4o17faWE6XRDqJjb99ndUhryNGPUSz497mMbR7wfqXmwrg8tCUiK2zHsEeBngTKCJuggbAKbfFpcWqqdB1WYTd",
  "key20": "5PnjXQwkNKr8YeqaHKDBtvcfW6wgZsPTJaNtpWDFTh1vGPjD21qcW6vYqViYNswB7Bz2eAue3yf88BWcJBMLzNrM",
  "key21": "484FHxphPaE5UaVwxDgmNCmgq2p27yGqCVHESmU5L7MjzU3FFeJs8fofwZ8WSVLEZabaXBGPPtwXk1d34kFUx2nC",
  "key22": "2dZfxRwQoa4pGcK86XsS1TfYxp4JiBtbtnCLBA13U7gz5BqSmuwDy1vGcWUkV378CnNp8626hcXvyM9tddB7Kons",
  "key23": "2tqbZt73TZ1MVJh183RHyh5MdHpwLYbt3yRpZmozWKMXFX8feVVV6sWxmVyaBnQ1TJ5MmnwaAXJy7Xfvqr53ticM",
  "key24": "3ZBEK2V8No7QEEu3bxDqrvEvDJEiKYdKWFBnitmcg7e99rRKn3QMJE6cg2wf2SXqzWeQr4ZZj7xuKjQV2iyXw8ZU",
  "key25": "vqXgFHfKMnQbvmtZTXWjZ3AUCQ7PtnAc9pkqCnAzuYJLuNDWK3bcFy3xSgEu1AQ3Q3pXSgL7sFwCggSf23cnqu8",
  "key26": "55vRFqtRzb7JYtsafJC7xWd4LyGeCAUd7124HnNowX5gUjkP2xT9rBwjTCS5fnKp5Cokw8re6Pjs64jH2ymeuWHD",
  "key27": "4zMGqRXkC2q8HMiCkenjUQgFPy8D4b4aNjcyAQbGfn4hgU1cWfkeEDjxV2yiXsSSsChtNP4cwaTkVqFtJiEapH5q",
  "key28": "5LUUM5dNFLuY7GaMpZf2QKZCAgTKtiVgvEBNBXhcZCuSUASr2dfRTBi371e1nodN5ZG8783d3VnMRA4qWZtzJzKd",
  "key29": "2ZwyHsHjUKcvEdMjhcSzSNqjFDcHZcsst3zfmA5jXNNSh62vA55aEMtbimufxqeNNZQmTYiSjnUVeDV74EK2z3VJ",
  "key30": "4dsCUwWZMLhAwFtjLa1ugQKFwJT7ZaX9SiUJqJ4q4oC61JuYegC2KE2AuRbbbr6CGQpTwmhrqcECEiy1d3q1muRy",
  "key31": "3pFXARg38hfVBtXUfuqKGCE7crspwt9nvNbRMWekUcHAA8yuC4o3PsXuSqUH2m53hsVNjSZEUf1hHbhHhobSF5dF",
  "key32": "3WeL4itfzJ5AfYTfnXqzxAzza9Mc5zrbipWYAn4KPwXWPUB4TxEHevyAHZPH8jXcGhuU41CcmT6JUkyyyaXQSbNj",
  "key33": "5G98A9DHd6XfLpLfn3zX75rc8nQE3AoWVQWuRBdkbh6HT6cKdpTkbACogV56P6R5UAo1M5fY3JchafmsaT9F7beL",
  "key34": "dg3FZBTSXZR9eCgFtUJcHTi2sTC8Vc69YSWD4C66hB4BvCzyAZ4RJNKHaDJyZszD3WTNxLAaygoS9mwUVuz8ffn",
  "key35": "5yoSqPYn7Fr42HjPqjkHiZgtv81sU3XbeQdfZxPL2Wff7ARtAxe7jvjjDSN98apa4hji7DKcrcwcqR6c9oa2Emjo",
  "key36": "5PA1wAxYayKVGsC58BzY4bEMdfSuAjRjQhNErCr7ZtLksD656d1nzFEQLyT4z4a3KKn1iW5RrYCV2f5rFx95fJ4s"
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
