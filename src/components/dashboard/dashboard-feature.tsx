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
    "5DedeArCTWJgwQAYsuTEXiNCbrpTjrpDJ7ACygY1tVbhvr52uL7k2mFf72SbdWkXjynD4N7vEuUui9BSiQApaV6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGMUTsSC4UR2LNaxinnDTmPh7BDmJzP55e3pGgtUps4Hx8uTP4vZCys1PnASTr15aBed1UD1y6E7Gf98Ds46t1j",
  "key1": "5w62DaPts12aKEyRs9Eyio9tpX36gs963REqvMXBvbr8eCuEi4TsQu94b5mqsjV3J3TFc7JAidvA5wofLxv8R4NZ",
  "key2": "2uEC3CcdawMSPZF9pNkdmsBWuRnuFRpG1AWzUyKbsxHycVC1wmBfHShk72LbFNvFvrEWwaw1g4wfPj21iK9hVBjQ",
  "key3": "4uGXqxZjLHfrn1o4HD6mo5okfhHmh6VHNRQnect1xSYXtqE5qnJrQNHZQ2UCF7yHJEArrhBt3JTMTZ5xWcuatKzv",
  "key4": "3UH5RKHuGPRoSKJmH8vWYuN77GWVmuVTc8fSxWCZoygtunA4EqtPp9SYSVZ7vDW8XE6tsUNyqwxUAjrMTTpdzHmd",
  "key5": "3sYFajkGjWub3JnFURdp7S5dmUsj3FxkfpprugPVMk1nWhRoBQQ1KRDEBA6fPXExpfna5S1ygiNDD88C5erdNf4c",
  "key6": "2JuFfRxzxEF1BFUcPiFxNUthJnfTjHAcRyr9KgN2T6PbNwA8VpSyRDHvknxHmA4SvPJLYEVwxkr7sZ1SSGYy1LXn",
  "key7": "3cCKEizK6BqxiYrMEesirXPyuynYuLFMMo4GacJ57h9hjBAdMUcqFELmEkUasxQkAn59yoevMJs8zgh1FXRCiEwp",
  "key8": "5RytsAjuKbDRU9aFkS2ZCUwiGQEPtzaP1RgRfDxQYNzYj1tnT6MULXpcYk3i56MjBQKjKEULTFirfxNG4dob9CVj",
  "key9": "6WMXUT1W7b5wWtKeWaesLn2pqFaLni6KYHvmcBbRXJMpGRH1eJq14uKdefbRr6qodWrbUgpMHRwSqHR4FotPkgf",
  "key10": "3ghLYSCqAu9eSwjJpd9c3VUX9353kshzAYVNXnEqfmfzDCq51cHA7Ng3Qe2xVYcEW2PP7tRLYdfiMpREV8h7bJEC",
  "key11": "59YxkZ2JZFVevf9zT7wupDPgmYVSq3MscMHsMUzXsDwsqW1ptvw3d1H2E2dsJULgr97atnrpFKCLsYRNN51cCF7o",
  "key12": "5xfiWYvXdtw6Us1tiZRQ2ePJeSbs93bJTq47dKSnSk5iXu6xXhTdUd24tNb6L7N9zdXatPNWrNRw44BAnEEZuC4U",
  "key13": "49NaBDA9PNxmLbqyTFCSzGeMG8i27VsqUdh1xmveg3a6Q4ZDoC51Bg2YXGk4U4xAoNGeU1ajZewZwpRwCNg83NUu",
  "key14": "3FLXpMR5ooZ3MRzm4oRFkRw6ce7uLWYpZusVMhukzimhAxwGwzYLnes9SMEgpZsrgaH5dQfdTRveCDDqdWVyW3xj",
  "key15": "4B8zvxc5Z4PnChU6oFkbyFvd6Mxp2Y4iCKwtHPNqU4rg1SmCys4gtSxkbgWVgtnurZqBVbS427GZRX7sE2CgthyH",
  "key16": "25YxYtKKEnUgfvaLjpqpr3jg1YQqTvrv3MH2wL7jzqgsNyWgGMjnczr12LCNdJA4mRmtPLwoyAJBS8E236MTJLEh",
  "key17": "5FUh8sM1q3KFvPRL1KuR1UhAgqRTp79LBmS7UmQYr71MoZqhKLZCKkFnUh8TxLrTDCLmcUuCeyH9eegMQksLMtk9",
  "key18": "5uL4xUYJQsQipmsL6SGnuWKpXJznVE2sBbwd7FVywgJe833639oHiKdUoL3nW2tv3LXatFjN2zFDT7fssKWMLumc",
  "key19": "4RJ9Qz8aRSC5UwZQCj5DBMBsi7URL72MsFGDpJTBehCLDkiWgk2oNYS9KYuw9RBru9bnSSiTvC51GmMV27yK8mGk",
  "key20": "58dHnZyMdP5U9Uz71SsGAsroLKK9CKqoVj6idS1QR5FAaj8jkU7iyiHgRue2YXKFh9YcS1T7qtMCRRyyhZFV42qM",
  "key21": "2CBw6TWLaEhu2bds4EE12nPiw7AZ8dU9kGsWb5JfNSqHwwXJ81hXnUMP8AfFbQrQms8fAGycYZzFyhfNpW7nk9Wu",
  "key22": "CXHa7GRMdxtGwsLFov4myN1gi4QjfdbTFHrseJiecMw42pRQQoQrM6TDAvPZNkvuoeTXYwPwL4CUmeDK9cJcHCz",
  "key23": "4LpiG6MfDKhWMio1syTvMPv8xegGAFUS19TmmbE8ygjUb3fzWMYU6yrRmhjnqjBqvm4L8VFYx6p4igjEkztYmrK6",
  "key24": "5qdNMcR6z6GLMGgvxc9jbHF7iuhyWoD9v8GhzmG22cb53gT8Pp9CauTQSFqvoKNCJLemsg973gS7dWNZwpUR8aqB",
  "key25": "5P78yc2p97aYZ9bULAoK8PPnKWL6P9SddeDQgzKLaNb8CbA8nx3HS97KpfPNXTJX8JNYmXdCjmrBsAinfhdd6oX9",
  "key26": "2o7pGyzqejjmedJcSkyh64WRx8Wqw43AF5zGmQgTD7KaFX3gi4QkFjM4sy5GPSSxth4iNYZvkeywK5sbE3j9dtdX",
  "key27": "7Rg3MUUy4H4jc7amsnLQsVcFGShHFoHT6KRERd67BAqYrVwKszYAPTHLrBniRKfeqx55jD944iUQU6FrhUwPu8j",
  "key28": "2N8havhG53mqaVJT9eNvuUMXvTfUbkYkF6E3hCAdXTZyH2sSy3TdRPhydpjBqoxWWVx3vc5GTPx9wB1dS5CteSsD",
  "key29": "4DqzfbavXXCuCg2t754SPDKJ81gHHPatvFiqAQTEqmN4y8ga6ur2RiUw1N8MTnjyuCHandyey7dHpv6JUCHayfCQ",
  "key30": "3dju2ZyuqtEyejyx8qLSdenSNR5eEhDFx2wC62jV94EmRecgDCnKtRGhQnWzyGwWF8nWGVZqAmHYNaCtPAHfwZ56",
  "key31": "5FwENW1h6CustMxJBV7rzBjeDRuJWfDXJzHLeDXfnViRV31NygSw3EYrjN4yrTd6jJVHg9cyarEpfULdVfi7nW1R",
  "key32": "3jSHnikGh3DyijPuTtAtNa9hzArLsG45YgeCrD4GQKHJZc1MyS9pKjnNiGWrV3iauy3UGskEwfWH37wU6R9oNQ9z",
  "key33": "2eCXKxVXJBBg2nXPBymnAFt3fiRwBXT9DUiDU2qAgCZx5UbAex2Qj3iuysCgeFUKAKRna3oVPMXR77jTH8ZMZyNX",
  "key34": "47rcrJnK7U3Z7QtmF6S5BQXk9aC222vqyKbJmXLofbyScXS7r1bqd7P2dacHpjpZPYCkdFWNVUd4VCr2NLh7otSo",
  "key35": "27znT5yGVAt4yjWhkKwvfCWM4WdRoqkSJUvki7vXiavMkMggNukGVj5fYgLNxhNNKNER6xrqiG5h3Yzz7FYt3Bux",
  "key36": "bLrjg3fNpKAMFFHcreG92T9Wjm89eke3qnMFrqW78Agt5vaU9Qr67b6XvCyRwjoN9iaA3Bea6cmNjGTohRAfoHk",
  "key37": "5Ly9vN8CQki3ypcsyvP4htzoUNKD4Moek8EpF6XczJUWPA5xb8xVYjw7ZTje2ufFtHkwDWZdRkZ2rftAnPBZYGg",
  "key38": "5MpaQnYrHY2KQSQNt8mBBz7TbLoUGzBtUSq4KnyCjrAookmHLd3dXKvvgntwmcbe6uDoLwhMg6hAWzZeCPvfBBBg",
  "key39": "5UfG3F2LtT9CJiRg1EeinRxWXLDAAhmnePPg6SEnuEqL7txeoSEbXJKruRZiQGLn11tuaDmxwvMiXiRmrcEuujiu"
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
