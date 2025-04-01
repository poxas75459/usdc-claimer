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
    "ZtegKaNsgsEFiDQpVYz4PbcUjAB69EasFjUfJKe5kaxqEhp8D9QCFPsZqY7BN9Cjmik12VqLBwMbDR3GQNFnF6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWuSRDLUVU4R6AK95WkTD3XRr92w1bwuC6Cw1VK7ANnFngrKua1Pug5nQjYf2P68DmZ1TjYFwEYsxbig29FMsJ9",
  "key1": "5aDgN64fLvvoy8Eb8MmMX9SW8aFAK36yCDw9LpQxZr99o51ahNLyuo8EJcDz89nHyPFg9g58NP7QPQfKTqxKzyFv",
  "key2": "5V75kkwa2VTbBtFATC5Dp6Z7b4vXGga6b21uBNpa6kMJhffJFQFx8HCGCFLwrdu7X5qevZvvzr4G7A6tcZwkgVvi",
  "key3": "3jAwXJGDbL32kqYWPWet4WGVuukXc5Mn9r1aeteGa27YnZiaFynryXcaqiXHBii2WwxY561nXNSePRkrb9FjwMUs",
  "key4": "42bVnbFHSUWwN13BE5VUChJt5BA892YDuKwWmzLxdv5Lo5bFCAZ6f8H7xLHDQowkHfC3Y8S8BEkjb9GgiFHn9985",
  "key5": "4UejBw1kExi8cyJn4DnfTzsD2yQDVbTpBeeUVjPf56NHqA6en9pm6chFpmdAWBKU1tavyV8wkw8EE9p8kHu7ZAu6",
  "key6": "5UViGGzhg8JXGRL47KtkRgzLLMhC9vSTg6eXCiErfbjL7So53KvwJEJudVFaUYq5tg9QtvHryyebbfBZiJ6SDn7f",
  "key7": "43KnxWDXPjLXW1PFAEB5r9GsC7yYWAA45aY43oC1piZeN3pkmMiiGcBik3nAYKCXijZTRWvSYvbSCP6m8QgYQwzB",
  "key8": "4CEt8EHurcA43fntdu8Zth1mJD4EzCaL2wqsEWpFijytEaVFPSzF5jXYuVoyNcDWp3ABuRPiEBD48MSdF9dUWjKC",
  "key9": "3NCZxbGqEHBHAbiuDkoE5usryd3SnCFUBQkVybQw6UzkjnhD9ZANYWKedKzGYSDYX9cPrkfQs3t226wMceeZYw7J",
  "key10": "37AhcJ4acrj3DZNcHqunQYnR3QtrH1pLxRuPYwyNLk85RxkzRxupTz8yWoxsjsz8g785VNFb7DFqJf3Z1ve85qFv",
  "key11": "YrXZK922jByzApEb1zA8vmhXTuzdGyEcUgse8m2JCPWyVQPcVkEskSYanPURsVMp4StMHopBZLxsh5zkWpckS5t",
  "key12": "3JF6NqGZ1X2cLvFgxYoAx2QrvbPSb38RK8LMFXhwCbbVZKDoNy3EXw2mPvs3P2ybNAKPWtYsWPv1BxAR7LC3ZKmJ",
  "key13": "26NkRJarmaRDsZunNbmegyC5vH6PrUnMVeL2GBnKKjsaC62UiVkNEKhGoar89DqJtFWqC3LtG3qByrZ2osH9q314",
  "key14": "2ckNNHthiXYbfppmRhFqFrQFShpeJPqqniXG9f7K8npP5Y3rXjEjcet24kiQgVr31MMHL5WpHKa3evHKzPkw4gKE",
  "key15": "4LtTYoZsWexNvzEmtQANzBwakAuz7gDW1mJFi1FZJHsYacoLg3QyZVzR5XayQbMgsCVhLUvanSx2sik4caiGgpb7",
  "key16": "2PkiovHkDW2EMjbBvMRtMWDLsfFBZq5zm3PZuU1ykxHLR6gnidaWv19Xt8ZQp7j9mCTquNWLRxuF6CcgWukP71vY",
  "key17": "5tPNwCsVDtkLPVjUkqnGSgXqxPy91aACjCb2yXp96aEFKP7zmoyieq6oCnkSoHW3cXZ8xyGpCznB4YPgNwG8Zshb",
  "key18": "42EagkZXcSAKm4ay6CYxnaoSPcMPrNXc1vcHE7dfyYK2K4CL8ywP5179XqLWf9mEZmUcba15enviyKwQSm9yWnVf",
  "key19": "2yu8jcYBdSTAWbGdMpgbvtBvzULeS2eeVmgC7wVQGskLhWf5pYK81dD2VefPvHXCjLgLz3hE7pN4FDzBPwTVBHvV",
  "key20": "jAoW7C1jdu8jyvkFxJiPK67ToH2Y9aaKeYVYe4u4DT6ftXp2zWrX6fxp2DQ7D1tuHM1i8MwDQYT9m6DcQnR1DWo",
  "key21": "3sjaNMKCesqZzYxmTnSbwq25e6J5YPN4w2fGhrxVSPyCVV1mW8uQhzWRkAbcBTWzpf1thEuz4QjEXavjTb3RCNmi",
  "key22": "hkEn9ZGNtCJ6LVyp4G4Z9ghmWxfpN9P92RMBJVQFCNWbuDBWGLZMqLphwmkaYtoRvKmN2phLWQPDW4brGmemhZb",
  "key23": "51DqHCcTbd3giwYKcJxaLZcLz52uTn12ZozGBuqsQVfZFKHaM35RbCWSEY74268Eotm75WkztQ46K55iz5diqBdd",
  "key24": "2bwE9TkZnZMojnNnx45NAiNdwaPXgtF3xazVJVrpL4kHU4ShBzmonznNFDTmWVbA2PwpmgcNXTMmT9HyQmrhBSsY",
  "key25": "4EAA4ADzUvDMc9pCUvWKRhhHwbMmRB6r3uSbSxAwkdKeuxytnub5b38tRWeh8K9oqtoEKcisnKsqoiiNuancRfEM",
  "key26": "4ss5p2yrXbggYVqq7yW5u3pd4CvHwoLEUd6Qhsf6R89hmevy3CSbccYpT8x8wKNAsgVthridV7cqSG7Wgr1zDqGD"
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
