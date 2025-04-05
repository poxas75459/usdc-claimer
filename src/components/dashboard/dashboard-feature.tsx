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
    "4hfdCsKBJsxBYejp4PbueoDUuWkg88VRHM74EpkbSibtv7w9uh7zjaS6KDc83cey5jFcuGcEnfFNgejMNmYptJdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAj24e1QuCK4GbQpfmJPNW9i1GrdrfbEGnjf62jCkkdcNe6bwsBr3jjyXZmvEDJZf321zHep8SwzRNcQR5Hq872",
  "key1": "37xm9LqrfuDJmyDJLUEJExrwcivGxfE6rXF8VN2JBg53YtHjMNJJu19dNja8p6QRR9qn2tjueycpU5QJ2b9N1kPJ",
  "key2": "3Ff19TWMfXKztQ7d93rbY76sFqtVxVumwSpocWhDVkxH5gYDZsWsuP4i6TiMjYqcyDD6nHAHug7tvQT2yoS5DH6q",
  "key3": "54JkJkoJizD8jK7KsCENUng78PjV62pMK9knLmRSL49cz46rNDADMFtvHWZnRPeTejkr3cX93mfVJAqRVLU9y6AB",
  "key4": "4xqupg3fuqaEnvvUL3b1uH3N1RmfdFX62MrK95oeygs9RLNdrA3kscgzwJ2Lih8BD21dyPaEBPBaXR5A3LiSXBg9",
  "key5": "4exkJ2MDTiFFT6kouv8ToyLwKrjWZfFw7aceSDdCw67KUNFhF7UpoRwUc7yHvM8Bnwef451HnreDNETpGCrLBwZw",
  "key6": "543Ag86ij8KNeEBhrX45jeKcN7qkCesKWymmXwytJTNA9FxRkzEwoGt2eFR8239pRqJgrYWDTJSuiJvvfnDkmKEd",
  "key7": "5N1bSVTWTzsBrGCkHfURcY2D3XCe5j5tJBVjj3SjQGcR91dS4G6u7Q98PVRDMEUTnP9b4uu2ebKNg8HfLN6REKNs",
  "key8": "ZKdQqJokh9q29y4H9hjE7HQA4rmXTSKWBo7rx2PdrSjF8W7Qdb3VG4SG6cE6TLdJbpe1kckEWX4T1pFrA9HgcAH",
  "key9": "2uhYVJqpr7kDQ3HFGbkC2gEHCVTYmXzVfmu5TY5WydQC9ZRdt9xYLr35EFmzwBh5DmJoj6JDyXw7AWrG5e1qdLy5",
  "key10": "2zKW94Gink6Wkjo2EtnPbdZhbwTeEXVSw3LG7vF7N7FZUDdjfRZCGGDqCH8fMSR6Urcoaf8aAJLR4X5jSPyhcqzf",
  "key11": "AbRmbqHPWcDVcMJGN9kZRnDgvtT9iv3W2rWjEEqNvttPmCGz9C3GiJ4D9ueLb3EnGxAcbmfETjN1PNQrX5RNVJh",
  "key12": "5d7kDfdSEbEvRgnADGv4oBV3hMo3fbo5tF7Uu3kr7NSz6yxVjvGaAwZPZ7UojP9VgeM8MDiQ6zDtAPcmMewqnqur",
  "key13": "5gv9tZi9WVhk4ySwfFRM95wgN58ndNd6SpTY8FaWQ1K94oeDxVqerjfi3uzicWPMrpA9EmaEfG5YskCMkJoCPEtq",
  "key14": "7Mid1Y2HRbeecr9rSDmcnD4yhyhCnv1o1W8v97dhFA9GiABr8QoYn1CjXNthVm7HLs8oFLU4xu7Joi99agYh714",
  "key15": "2TcVowqvsf3Lxp4Kq7k2eyAK6CcCSuY5Uo4wvcPU1kRefEKPy4WmK8CsjpggqcN6idm3tBZicGVSyZsNeK3Btn8n",
  "key16": "4znUYeRnWHDNkMrj4DvsnigNMXyqrDs4kdXHHpyCcYhLuwL8J3EPgqsCUpRoFV9rCrhjQnQc9SDKSxWZ85M2RXQc",
  "key17": "5qcMYZJSzb92EJUbHGCPNiXvxu3HUTimKV1bXxk27LfwmneuQyzCgQf32pnAGveM1Ne2bR3NSBXh6pKCXujWRjWH",
  "key18": "4WLaSG3PSFLvGDizjfFfpS1b4AqFppu5K1AT3JdgQ9DYy7HbeDVoKvHvqkUJg2zig76XY1eKPfVGoYEdjsXoG2Ye",
  "key19": "5Pnhkb6gATQFJeqcYgVH77UbyLo9xu6MHxto78rZojwhUEYpPKABW5HCjeHGKj4K8d7n91Q8FSyraaQASGQE2Hqp",
  "key20": "2N382YaiwrPzgTHYCQ3V9fDVegFGSebfzC1e8ZH1DXxoH8CheGRJN2LpwaAUEcyPpLbksAUM6ocrxfpjpGfHbQsU",
  "key21": "4BHRHCCp5AtN8KA8v3sRvMiEaZ3c2b5F5w4QeLFdEmLJg8oENY2e13EfcdGrrgWqgyEpN8hES8Re7fhcewqtcaXp",
  "key22": "4fkYPvPZ6tSFUNwwxbzPZhFtEU19pQ4dbFHZgZhDRaBMZkKsyLLasMFHr9ic5n8fzVxkDBp3AfUSpkFBjKNVoHUk",
  "key23": "3rYVcQU8efGDKXkqsAJPboMFiqHi5nkfZyc5vc6Hnb3zdeKmedCuAkyagVgDC9kDtNNavtavdnASMPmhiXS3AdYi",
  "key24": "3KdnC6wx1y7g4QV1tPbFB5PDgXwJ3cbuEX4TX5cpCMDRViEc3nRkq7s8w1t75cjqsuh4J1fDgKuqisqLhN2XqXAj",
  "key25": "5SAE7QZpZFC5VT9jDJQHGiuHNzyYfGhxsa9iAYv6dqJT6NAWKMCFRjYCUVshgEnuHzqZV83SoVUbVRqNrKJyaKcr",
  "key26": "4F2ghftCvYNYZ1nZNp5d4xeh7C4NHia1bY8cGxuU9muoxmnxx6VX5DRkBrzJdTfNhhAguu45RiBkrfUiy5tNoPRf"
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
