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
    "632JPDYHvMqLjEumzx8zGaivDZnACZG8ExPN4KdwZ5PcZA3zBELQTPcVfvuMa3WaXfPwsHoivWWhkuZK999eNZEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dERk8TCM1jJ1vpbKhq8b3v1rsFnf5y8kSr4Q3tKdhbtV7YpvogCFjfiXw8HHA3SzVJGXjcdbZz4YDMpBg9e3doh",
  "key1": "jTfVoUEixTkSiaFJEm51CoH4UDtopKNxWSSj5CaDhjJzVhcbtrzvWJZ6RDjzrQV1RwqG1h6MmRFsMk6kV79gpNJ",
  "key2": "5j6VyVC4qDFh2fyzzgy4qSz7jtnj4Es1dbHcFp8iw3Y4p1T6MFbf6r1WuqAGAP9tdNVhhha9tS16fqR7HwpwrTji",
  "key3": "3xK4PbciNrR16k7eAEFFx7k4McDxiv7fUnLN59GXRkEDgTZx5MAKQb21xvFaTYTtEPkC8WpuvXxd6hF3rjW9pMRn",
  "key4": "AiCNtrHFg3fH67urYzF6mDRWMchwRgUP7s9ehUewJY3Ge8ERAX77THrJ62ibraryVf8wNgyNKjJWiKis6ftYLWT",
  "key5": "3SaYNpdN55bHG7Wi6PKn2u3tXDqLiEm3iKt8MBmNFrYwMGMK7tUmvD87WinP9PYwSmLAvvvzEYkkNrd7KL4KQXCE",
  "key6": "5YT5hDF75K84zRf91jBujAnoPs9T7jzTDMbmxRFLR8p1Ab9PhyDLsK6CHscyWcDV8nCnGJEDmh17Zws2XztUU2GR",
  "key7": "3X5VJMu7Nn5rbLTYo89h1T3xKb8wbZ33ifHQ2ntycDftBJDBNan3u5Ma3hpayPQvJup8vfzaCfM5DkEhF1yzkoZ",
  "key8": "4cRfujMWQ7kWPRUJWopqqwWbw5tMvvoKRhbMBAhRvHbA4Nf6Ezndfky8fmGaiYvYWNp3ikoQ7fdWeykKRePKtBfJ",
  "key9": "2fYZg8xZFniwz44xvQUMKbv4Gts67WCUD49LisUiH5uKAmtkwWMtaMN6Rs1jzxoj4ouyahdZBkPxBrvqFwrNSqWb",
  "key10": "ZksJWJxyQ5VSCXBrBjRVdwyEF76FxiJqXRexFppAR4Uvb6ff9kVEAXPm2E9H2i162ZtT79Hw8RYn3a2YA4PMJh9",
  "key11": "mGPEAEV3TNEZAvz1dso6rz3WWHA42YESwvknruGEe72jdYT6drjnBZG5a45hCY2DnV3pYkaK4nGkAjnFxVaSJpi",
  "key12": "34eT5pt9iYfNQtuFgPneStE5EnXtLFvRrnz9vHJAx82GyHVa5wPRHz7is8hqxn8KCNZvRcpUAAYNhk4gT4z5rywX",
  "key13": "3YxyiWsvHaGvvzdXWrsaUFiiCYNP3jWNNdRsvuSGMwAGoPC3K5NKkwHdFcj7J8Vjrqn4KHnxaV6SRTQmBTYiQmDz",
  "key14": "a7xUchrTUsWEfR3pK6bdputsYg9ZoTcFUoXNgm2XsFPkPEtychYhuaaV32aELS7ecKGfLbmBPFESWNW18dZG59P",
  "key15": "2vfbJcHWqnK1d1W6SucaoVf2eebCm5iw4qj3Gc2ceNyNXa7r5P38e33FPmhj8uit5REANYG2heswjwN33Ee82XjH",
  "key16": "3BQSb16bR9U5fSt2JeHGgyt9HLrs1oMZ4ejDyS51DtsqkcGpott4dE5NqxUNznwtAjppirHSfvT4cZvLpxD2sPJK",
  "key17": "4VtwxDaWcoBU6qYvhQoLhYtZ2yoWEgVu6J2xdG4k5msYrTg5VchKbYVJdaHFLvceKwkxC3R5YdU4v2cjtvciREpR",
  "key18": "ndipxNqAZtNgXUWYmoYMAhsUpn8sQYqZrvnRSjxf5RHyMy2epqA1zrwPkwm9JH5Px8wVnAsx6wJubiqCzhgZpEB",
  "key19": "48xhpDUc3mr9Y6LAPUttcBEQZRzBpfiZnNmLiba2iXa27Ts3NaDjTFxKuLFkuPCi8GfKJR2LafkB8xpAmKDcHH3K",
  "key20": "5NE1owjUYsCBu5dp6J5UsbaCQbNBSNkgtRy43pBx4nRRgEwGtA5DcTmRXaVqa2uFXftH2D9xYqdyRvhhMXyPgf2Z",
  "key21": "3Tyda9c9EaDH3WFsG2xN3en8ijqEAhPpVBJFxbUuhKUyTdchUXwPmf4C9qgmdX51WmaVCz2VUnGmEX1hebKhosVM",
  "key22": "2eyfPh9EubupPRyUvH6Fa9KWjEgQmZ4RXM6YCFTpCSSpHNgGGrUKBeVHDzNhwe8if7VqAMm79ZW2RCzNoPkUcorV",
  "key23": "4g7mkcSgQXq9b9eRtrN14mxD4DWXrVg7nHQzGoHH8jJsLAiMgdQqZ2p8ereSDbrRpuErXanwSBXGhm28tGyjnncL",
  "key24": "vWDYVKeFbRwSu2iBXgjJuapGoNyTpxqe9KvQDceE5oFban2a3SsrGuzxjcwyJ6F66dNhnAqMGoVMW8gRHTMj2TZ",
  "key25": "3dkqbY4jXRM4vDF8AtwW54LA42V4GyVFyUxbtUxYahAEEBcF37fmcj9toR4AvNBxPz8Rpi3jWZPggc8ytEekoe4Y",
  "key26": "42KQ72ZX14d3TAesyzViAQpU6ZYv2d5EDfYzjfLUcy6PmGpBatPLP3sMbYurPtwJYhTYsNAB9ndDdmbfnyJEuPbq",
  "key27": "5uJnZ8ojJA5xiQ7xWTWZ54iPBqFc4SHuVMPJGVrH21xYL6hH5skRpXUBAWesaGAE7gquNRDxqGSVyqFU7p5MkLkH",
  "key28": "66KnFuofe6pzhvu2Jo9813WpELDUjWegLvyr9aDXHj7yRqL7YHAbXAjw9UkXcMSJHjfy9AAWRqCeeuFsnYquKfNX",
  "key29": "27hQdiNC7rt923t1yGGZQjrt2E2JUE1CaFToCEMbfbmBeqoGqrdUNoUHV5Vsi8H11FwNJNMZHR4T8oyYnpkc8wsy",
  "key30": "S7uq4wANn36dvdTQ3uLy9W2sH66CcVtXhwYE2X8xYfxM6gsiRekQfJQa8D18z62gCkZVHUYXYNH8XVpPvuQKjmT",
  "key31": "4AGnjA4NaGazU1Gf2SBS8DfUpCPoJY6BFxwmAzwX6Re84i1Ysngy8AqRPZLs3c7qjCFAaG1Amc4zcTSDd2HtrC19",
  "key32": "2h6CzvTfDeHqys9CxSzbw7Ewn7bBnJWL4PBZcDxnzYHNkFioNLFTmugMDpaqJcC4TGj3NVXAJ1GQjsqZ66KJppLt",
  "key33": "4bcMyaN7ZmoH7TXJfa7PGEbbvUuGYEVJjft45qYKfrVcGCF5h6V6GrVEvoc7b9YisKsoYqvq7wZNARLLkoAKhZji",
  "key34": "4WYKA3EcM6jTEQUsLTBsdoBu3WSupq2Wvurxg3ek9QArzGTTH2R56QwmSUQhBTiDokcFsh1Fiosfoe7HYpJyq71N",
  "key35": "67UN3aCijN9Z3cpGX646DzwCcPLkvBUPaZoh2Q5V4LBQQUarC4STKDkGqBXbsWCMyXEKBySmeM9LNGfg77AWV3tg"
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
