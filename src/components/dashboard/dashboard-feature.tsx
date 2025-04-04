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
    "38bPnGaLnA6hKgmpmsjx77oupUcEtpmxjsbqCaGNo7StXpkeVTuKhHg5KaiZCNVgqbsz379SMujfJVsgZQgXWfbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZredmoR9eGgyVnXAYi9KUdcqCF4oJMm3i55ydMoKUC64oRRR72KVkLYjEcLkYYzJdRjK1Cp9j2sZV1nUNzHGiz9",
  "key1": "2RashHk3kAzMynThGwZS8qi3eRoG1BdhW3ZfQD9TdG3DGJpLyQZqkp78fe7W3k5bpTgu4UfFCXiHJDcfX8vn11gq",
  "key2": "2bwi7bchgz3WbB6oaNuBsX3mFL9fnFVVWUgZzNd8MHyK84Z3x7wAuSm6BuanooN4VcjZAfspHv3XtFr1C36ZySPW",
  "key3": "4jxfCMAA59X4iseCTMoxp1Q1MohYK3YiokJEiM5mqHgWpdY1qLar3Xih3aDgbPMFa4SSrE4nKv9NSNkihV1BCFvw",
  "key4": "4kPxNRT6AjZxg6zYTN3BWPc7xdPP3ELLuo9JswfFAbMZZ5waDGCpP6o2ykqhAvNySEzvxC3kNxiTAdQBkzuvLSHy",
  "key5": "4RuLcaDxTBtRnVNN8cCdLY6aZZ5hSqaVC2fsEayJxm8yn2pq6tNEc9MG3EMZWC6V9WfRuPBqk3aiStqYVr2vzSM6",
  "key6": "51Z6R4AcdCV4AMDKP3rEB8EDjCkCATTuCYPqAvYYAQDr8ZPBtQVer5mg5rztT9jbebpFvqv5A81hhH4v6sFTCnMZ",
  "key7": "48q5eH2HkEpFJaePSvhoiG9iMX5YyX3sdMjkyJsbBW8MZgVy2jgcYfqCzyr26VXfZXo9NEADPkeaLeGFgdCB6ho1",
  "key8": "AVHQ8MYfdM3hgtLoeEB8Ge8Ew9roBiFW7T7aWUtRN85PEskQtvw2z1HoFnoNy6AfJ3XTD1u91R5QUx8Wcqy1Y9F",
  "key9": "3YFST8g4kpkbo7fH3cYM3oyaUcfpWXzdfDpALuXUxUvT5w3Mp2DkriRfLeSiDsxhzKkFGdEvVk8fsNXu9zBi18NZ",
  "key10": "2RzJGidm2VHSsjRQNgFLfJY5B7fuiMcqnvGzhWTpfcZzMhetWapHwc9snzZqFnjjQsYDHLjgZ1obHNmS5Nyks5Tw",
  "key11": "5oxiiRP99ZiTgic8vxDKh1Nj4uhZmChGBrihmFvz5X2i5EV9STXKTYxw6iW3ppZPWtsRbPQXouVaSaNQGj7FKysw",
  "key12": "5tFxcgmoSDZck6Hi25anFEcfXr8W4Zi1HE2FB4SBrdRzcGTTiF8RRGqmboC28Cy6fTHvDJKuQ3vf8tcthLQyFxBy",
  "key13": "5QjN9ztL2xHTHZnQBaXt3ReSBfvQi8tqSFRaVTqroVp7w37r5E6tT66Rx2v6dMxhfFPkD9VuRZHto4MzzfGSsuqm",
  "key14": "47FtVwWkqD219fW5VWP4vrgBwWq6XqHPHCKQArCGFZ9coXkRw4W2nTLebUM1X4zWuXCby76Ck6XN2f9e4ULGiJcX",
  "key15": "2CfzxNxJ8K4zX7vvGhQu2XXA76KshnZtNYDLGbRR72tH6ucCFhhJoDSjirVyCWop2bKk8DLpMK1NRc7Y4FHPP79j",
  "key16": "KqYxN2ZEhHmunNtUzPznqwLPnsdM3RgYCTiHYh3E4en3utwUSJrHVaBXa2h2JaaXX3kDG6rRBNYM4yKJ4iYuDkF",
  "key17": "GkGC466wuYDbHDWRQ4V2qzgcJYEdang99HWgTmHqfcVqVkHyXbmGrJJ5GFbvmDB9U6Uao5knyLAkNpLX14k9rtY",
  "key18": "5nXuyuKmKwBZ319554SdbAUZpLwwwWDtufyuAT75RohDXR39mAgiVvcwMCub2yiVFSUv2d8EDk2xMuBmg4TPRpKd",
  "key19": "5JgpxziMXYResnjFyGSiHNu1RbhZdZ1ZG7hZxPSbNtZ3gBgqk5aKcEf5KVetYrPpjgWfCqvgJbz9Kioqfr6W6U3g",
  "key20": "3sytT7MkzYziRLBeQA6QPe3Myu8ZGnu8dfQQ6wpKUeFDwHpYHeVbkuaoShxs7mQNLnzuipYGM3rLL6Hems38ziEo",
  "key21": "2p3b5KAG2FFd3G7t9txHLo9qWEyWjhs5TwMx5MYrGPiV6uPjf8Eb8eg5YHWuA7RMoFvoHuyvnRJjX1EhBc6zDR6Z",
  "key22": "5dYr7qysCb4DwdPc6NCFFPyQyXY9rSomwTdeijr4Q8p2vwUS6cA4MwiBBe8ky5Njmwx68viHxPHyYU6Ak7wdJyJY",
  "key23": "WXXK1eFBxqUh3eXYL5GHQinuoGu9S8vHGc5wZW8gYSLXwBB9oDycKGrbY7hjRmFLeCwoRtdPMJzos8stkgRuwZQ",
  "key24": "kbDYpxnSFsMzTJZjWbDEmaJfSsVL74bXb2e2HqrSkktMEBJLMWrK5DqDtnLKYqCNsDbCPgRgmivNjkc6V61z5cm",
  "key25": "2f3KAF14ZJr1Y2evqCie7FoFAXVgaFpEJN5dDwzkkkpzNy89v2sTXoSCMkVFdZWqkpRgvVnocwFf1kokwK3yLyMW",
  "key26": "32E3eRjnYLYDVLHm8ALzCJRwq3rw769KDfiX32mDHnrmvQfGdMzQzKPwCbMivJEck4kxS1HeLoB1YRJXQhyoJ4dK",
  "key27": "66ZW6YJagLtgUjdWZK62HcTs8R6sg9DHw1Gnmiq8rxyNQG7NaS6KJpx4GCLimvgYnCBn7ST5viSSFiG1AeQerTpg",
  "key28": "4Qcnxax9Vs94spfcNP1eRHoZdgcwfmxUiAkCxSg8SReEEa1BzqS82hagJRbJk3kMRR6L1aQYH8jEQW7qTgzdG3b9",
  "key29": "57feXfkgR1VoV4QSNQLaHC4seWpomJd5PLULTqEwxpBV93ht8R1UjDZyoDBMcMEDrWa8KRQefPtXc9GfPsfSqsSM",
  "key30": "42HfUtg3DmPLTqvCFVBbP6EUt2MvGSdPG2uDhPatZR6ozs9Qb4QDrn21oKQaEEkBcbr3rUVWjQjacGuK9Jaa4Tgo",
  "key31": "4BBmuErXmHFcgDS5PBet4tut6eoHtHEPACQhcyeAdUDYSouxvJQVo9utjam4dk4DGg1K38HRmzhf7zJh8Qk9Z6sf",
  "key32": "5RMZE7FN4PiPPuewCCXrYSC5QSQZMZNJkMbXPUtmprGRa8d6iPCBfZRkLxZFBgGzmKYaY28NDMowfajdzj7sRZXT",
  "key33": "eNrx3Y3KnvCzfaTqmkvRoCghQRZKQ3qX4JyJV8AbTzqi86U7kNvAKsLExshSwJd36Z3iKFsx7ZGgJHAo2QE2CwZ"
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
