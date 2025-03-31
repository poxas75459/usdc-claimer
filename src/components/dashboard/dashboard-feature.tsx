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
    "3qRS9naTXt4ofMyUQjtwsUn5X3rrqH5f4rbUWCqsXVXnSM8iuke8EAXEYmcVWWRkQFfX5xrRMZUMt9fv2iqk1N5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNEMc5gzExhrVH1FiUcnKv4nRNSmRdb4iPLaFGtUfCpty94z8U59fLU6uPwkiYycw4FpAGf655FEr8Evzva98mS",
  "key1": "tJ4QMijrKPCsaNympheWmz5DK3EbLJSG72Mydo7hYWY6HeRjvq6LD7FwUuFobVZYYd6PGZghWyuAayNGBjbuXV7",
  "key2": "2PbjfJYHtntQ7PvzzHkfncwjG8QDfWq6ddJRbCUMm5iab4rGeCCnzW8YY6yXKHW5SFhnDByKnScVVeJ3K98RpLGK",
  "key3": "2ibcdFatyaCDSedBh5AssEhCvVpzAppU1kZQ2ghpcfwgz1frueCbXYfmFiSZbAJAJYV7H2wgjk4wj21QLzmyk5fK",
  "key4": "2eatTpMjm8QKmYMB3zbJNUF3RZ6BY1UwJAKGGc4JgzK5ZNA7edDFJZTG1eoXsVvcdHRQBeJCL36QBXbc85kFTGEJ",
  "key5": "26H62aCLgBRNoMaGVzgYkhvJ8FskwhB8wbEN7KKb2iKcDakj8CiB86ym69kp4V3uGiMXREARd4AhB6JkNg5CGTQq",
  "key6": "4zGNqw9mnmimkNxeK9YtdJuQeoUnXMeqvEd64dNsMCn9mxnEfdNDzsu6EX1eDinkUiKFDQyRTdXss2frEKzWMJtj",
  "key7": "3NtBrDwRvh5DSwoBQb77piip8bnzQBkwdRQviK4enLQfiV9NRg79RRoKbnf4hj57DJVwTrh5pPsoWKRVKCSmkjfD",
  "key8": "4rGUtv7fNQgCWXkusf1xN9dzoDy1dKT9dpuSWPXhocsSqBrfU6WC9cyxdXrUEssXEMnE9z65mbmDoiYPfYkri4L9",
  "key9": "5NhLYyXPFujWeLu7Z7h1V2XtgjJZsC3wXwB396Rk9p8gxV4vxjPQnEyhCTyFfZ7W9bUZPtpEbnjSxuYH4c56fFZs",
  "key10": "4VZGPadH2qR7ETQyhrXvZ4AzbxMW1DMWvymCjedNjgjEwf9TGaiRCW5i83Qe8avMkJwJnvVd67gY2h13sLey16dE",
  "key11": "3YV8nv2mN9GaQzrxmhfsAxCwhCNpw9ZxLxZFMrzyzUNc3i9Bh3p5pbMtRrpLcus1HPrYaJ6Y78buGX4x8jNfpTAk",
  "key12": "4mkPACaYukn6Lnyuj8ryv6AaNax6uJbSTzwYVn4TpPhBs2PttC3zA5vzBEmWZJ134SLaCNgdLkRQmtxAkZkeR6Ay",
  "key13": "4emxhTHjWaw3YJKTgET3tccfC6GEBbmKHhmxm2JghxrceiN6pv368hWrKopZG4uNLb1DyTibDMvFHTtiLk8j1yTG",
  "key14": "3QJN52Jw6nKrPthiuP9rWtqUtBZb52FpkSGpzPaaXfXphrxhLaEd9aVgy3am2Fs9zN8JNNeUDRphirnwPSGmf4Qm",
  "key15": "4w8X3fmSRGQDwRYAB34KPbYVB4GMn55sxTQNGwsFDvfs73gq3ATHa75TpTBNQPLuacMAvdonjNMs7dLY77rJ4qVY",
  "key16": "394yUE2R2MDJiNThBnRyoDNjReFUobPwsdK1xqYEhfuCxvV7qPwTztSKqRHB2Um119ZhsazNRUeinoTH7mfZfqfo",
  "key17": "3coSqbedBAsYhBzXFGgMHkrErmB5EzokXRmd2Kqm3RPqsqu9K9gZo3BbhaVvSsoyuGC89uDyFwJJ1d7cd2crmvjk",
  "key18": "3p5V59N63t5YPsKveQykMvJutS3RNcqMhg6ACaVuiirEkHvrhdiSyjFPYFBqRBpiBdBVkXyeHnkfVn7SDc7dQWzk",
  "key19": "2yqXxYZrbY62qpacjYpnbbccd7XKxQivtvD9edr6T9XaQyqspQP2rD3WmBBiZqC6h1cABQHNQ8MX1HfckbdsNLRV",
  "key20": "23PmNgz1Q87gVDajx5GGdS7fwMGbP1FeKE76wgMB4CmKZFvh9x9yEnwCetQcJKqiWtzA13xZwPF79N6873qmb4Sa",
  "key21": "3AJfPwf6gpjjcYQ7gSy7PLpj1S7Jjoyn5ATia3rkda8eLuQVMY4MNS2VynQtMwzPE9jzMfsM9PF46BrgmT42MNgX",
  "key22": "4nEztznLq322c3k8KEzuqmx4BZ7MhzN4quyKwbdwkvBzdyscFmcMCwQangztfpaiZTobhkCqZh72kpfWxVpvxiPD",
  "key23": "65M6fZKyvc8TCaSxTLE4cQEWcakjQkuwfQkpvzxNN7Uij4FTVmzMHA3zPWzJaegGt7XxMsZ9QvTb3SSqUZAkHr4N",
  "key24": "g7pELaENJRUXUHRfepZfdMqSCU8nB1Gu76RPaexmVq7uztNpbNmABrYsu9PYwudVpG32ofJtZFD23nxnLRFYLKZ",
  "key25": "4hK8dnJKKs3v1ot3VQLEGGUsBchQCPNoyZ7EMJRS8UvCgDLeA4Z62sbt5Btsqgzjsj4nXSV4pLzWoib6K9fZcUDE",
  "key26": "21eBhk5WBLkd3JtqVtccHSzJ45k3NgMLRyeG9SbnWkPBpVegRjsVAb7o1jdAQwkAt9vKJDgxR51JQCtnichuw3i2",
  "key27": "spSVCThm5S9k8XPY1hSx3qJbGwbXzRX9CQR3BgCs3nWDy7PsUKqKP4KibWyeLaqN7yFt396h2mABRQJTAFmZoof",
  "key28": "4zkKfLHVX8Nup5ZJAqeR88mSDcqqSYxQH2xrBETvJMW83mbFXyDPezyLUL5mthBn1osDJ8tLsycyeYb2hB7EKc6a"
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
