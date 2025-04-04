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
    "2j46XReevGfxqHzrbXs5TvrdffRZATUwjEtAFqWHaYbBUxFXoX7rxjdnpw4tvXdSga7UAW28bmXiBpsD9puUwgPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sfPqXj56zyLo7bhXeyvYDTyqVgVKbkR1V9Vae94G12bwKdB9RzYgSh5kgWAvntYtLFMC7rTg5pohfX7oQ6aCMxV",
  "key1": "3FkVXm9o2gW4vgmWM6VWYZdjjoosTf4Rt3kyhDTSEzSzcwoMS5nCY2mT2VHPm8r4vBNAHh7Y7vF8jMLjWK9Y8Rsv",
  "key2": "4yXNDh8j5bHKEVAWMqWEa93eEyv7sYuUo7gDd4C3Thz3xB69kZstsXMSe8SGqz8w4cKLBpBxBaX6gCaHyPstVK7V",
  "key3": "YzNx77v8K3nr6uCnkS7bP6J2WVr6tZgqCKjYk4HoGRfDy2ygVof8VxTwbhwXPRnHZ9zPVpGxzF73R5q8NKRNNNA",
  "key4": "2MVEsufzfXLPXdYvvkQVf5F3RY2PTfrC2nNtbNvPUtwPCgjRWBAiPPkqyeH43XtjAqMU9LGBoELkjbVzRwLKcVbZ",
  "key5": "4oZce2SzZ344qft6kSdbWrm5W9xXGSqMqMbMP1ECga2UKA8qe1eqCw8119N6J3QLj6nv8a9qpQXbNPDe23kVqMZA",
  "key6": "2S51CU9VyB9b8tXwMa5cpSeSfRttSfqwxKrNy4vFFX7WKtnyddn5PpYT8FpV8Nfq2YUTTC719Z7MkpefEYBE2xEd",
  "key7": "2NwrryPQ31xdkKVSX4hpNbGbSwYSPT7UKB4pFm964oT78VhSRBSqNxSZfhFHvLk2a6H1amjtdD9sgA6zmb7yS2H9",
  "key8": "3QE628RZSa7Lh35AVXkq8bNWU8Zd843smjAH8eRNuRQhVtfwNDJByvjWtTZQgNWuetDhyKr5uzieHoxqPqGWtsTt",
  "key9": "4GtNcBpQmQsEF5bhvQpsvPd6t6s7XxUYSuiG5ybTYywsCsBaEBEPw8BpsoHACkL5UmUBUxuR61r5NxxU7EZpLt2H",
  "key10": "4z2c1dZy7vfvGwHw7f1K2BUcawiuQqEzCRqnZ2cFF1Dxx52n9BVAvcpjQz9uhhShkyuVDDKtPoykPUFm9FMvU1QL",
  "key11": "2iVndCsWhFqSuHiWgCMwus7ZtoGJf4ySoAZw4PBFfTTYmypCUjm4aVhffpvmJv5dzgm36w3s7DyDqNdHH1xtDTFU",
  "key12": "5aogGmkJkyipmcdr5mxBb3qauHD38ycvBuzgs3DCcuqXv7graysduN6FGLXzEYKyJCFttKYe4F6jZasBVqd3uxGD",
  "key13": "5h9mEi47SXWYPhCo7MLmjnKyEc7DKZBFw9psAMH3yEWrreZHVCr1fDaEP5WxNZ7v5xTTPtDgc7BSr3cD4UzyvVzQ",
  "key14": "665VMGcd8BDUhFG1khsWpsZTyNG7nUXb8eEhvMy19xvSB68g6isU2GsnNrM8JNn3F1Wq9s2DzbRfuUgNyiTrPEYn",
  "key15": "31XeobQaYzZyitS1y6UBBPeFUatSJeLyd9Pbn49vBhCYUvQMfSTKtRo8DoZ7vonnobiHD3kYyq5WebLu1FeYxCbu",
  "key16": "2cCu14uwZ4aKxSg3NoGjnUC5aHVSDWy8wC4Eeeok5xSSBZ9A6JbkPNzKEwYZQihGqCvaSkBDQW9f4FH26JF6YEgL",
  "key17": "39RDUdbaTPWVwpEJS3SfcWu1h27eD9mCVaeRQXX4iecQMn4X6uu7KK5SpaA58zvDKtxomP4EiDxpNKUz9uwxwYge",
  "key18": "3cf6spKZFXjWCuxiqfPhb1gmKecLTaRQSZsMTta1MugN5DRySbNQzNBUttgt4SUXnE7PEuJY9MVwvsX1V3KiHjm3",
  "key19": "4T4CyNcMffyj3kTnKZpyXw9DFvvCmJ9tdUcQqspZ3R5U7qNVddYBq97akYVYEq53XaxjWeWtAVpHCmoerVPWr6ZL",
  "key20": "XzyLARJ8c4EECTQ7jHZyCXdiwypRmZCRhgxp6MHjcBu72F4amyC2qjA68hzjngSdiYknookp9KKfgy4d11awW7Q",
  "key21": "4Z8uvToQx8bkHaUF31boY47jcoDDgaeBnmQ4wVoNZS5iqR7YDNu7i52xrf7SSQTBUgubiWQB7b6o45gSkFz4nERL",
  "key22": "34tEJDP9Gon4W8PSQ22DB11HLUEboSnC2HWGqSCFMzuxwPVja4iRgSoDnf385Mhjdq1kuy8Vd3AorNtL5fDazbK9",
  "key23": "3L3jNGwq2N6PMQH97665iKbPZJwgbWCTwEk5F2RgcudfB6G7kau6WpoMvR4eBuxJUCxSaUWNzZPTGFQnd9gmFjbP",
  "key24": "3Vcro1RhqWgK9izYWGrgP7VkisYR4NWMvm9Htj7ATyB1oP1HsmzqKpgKiPUcV6T1hUHQfd1fTXRHrfkZLgqeqdFD",
  "key25": "3A4k3dZezq77We417MGcJ66yTy6f9sWUcYeXY9e4GqF37Q9LzKGw8aHcA1t9JcXcGGkoU1HoYxPHnxFbbBHbqv4x",
  "key26": "2CJBjWdxmfSzNyKKpW8ve234Thv5dXZ3GDcLQLVzcQSb3RxXVVBTkgKKKoynDqJstxenYLeC2ckVJcmEfZ6gm5Uy"
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
