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
    "5dvPnxKDCCondxfXGmSBBhJKfBRug1Ea8stYP9ibZuPqDWF6kxoqsPWxTS967htioGaBvxBZNFARiG8zTirCQbUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsbgzKVcksWavdaZhQ53VZTVM9mz37HJVzszwzqL5zB72uG9K557YZqpwXjB6wkzh6yyPt6NzZzYev2fc5wzuZ7",
  "key1": "5eYAbcDsn2RtU6Fja4wTQbCUgGY5gfhBwf3SHYDFJzUCXmnQXcAwJyHAG9BaLEREZiBYZjYLF2VHH4ZhErkU5MRG",
  "key2": "5W326ZHLj5VWVbePzPkR35BNhJ5rkdxphF2EZNVdfTYWNkzRFGHzqm9eBbEaupDtPqVFJjKpcAqpBf8yYqmpZ1io",
  "key3": "2A8tGNvHZbyKTfxKBSMzwfoVumNgSBvKKfKLWC572AYdLgrvAZSLTP5FiRSmqwSXDoSziupbjUHqn8yXVxq6N5U7",
  "key4": "2V4bE4FfqyFnRJMPrvL3rytwWYnYnDEXCfc45hqpn3PoDpULRzT82xAd6TKX9waeDggvicNcvbGkWEc8s1p6FjxY",
  "key5": "62s5j7KJBKHo9fWjK13PWsXecXEQkMHo5hdbaoaeqG4DcStVNf1t3of15uzmiqQX2YAeKn44VwUvKymxmYPypeho",
  "key6": "3vEgjiR3n9qMnYmnED1iQa6wWyV5uV19VENBXfDGhMXj2Qq2YiDWruFNyryoDX8WktuaRm1Eu3joAUa4Gtg6TgvD",
  "key7": "PzqpbAM2buX2Y3D4AcrStkvKtzJHd1ezS3QApsz3KS4bEa5eRUR1HQ8zmdEhEKsLTTTmMQedZjktdv1iWBHHUug",
  "key8": "3vQg7domjdTdBwSNFQ5ou34Bj9bDr78VFPLp5nSuwAms3R73AJWGb9mjiTEKwu8e6MV1Sm16WTGZvU1c4AZHZtQ1",
  "key9": "67kUXBdrFuDiXS1btAYrk4NCUcB3vavqk4qRMmyqRWoeabq6qJrE8ozmwqTkMSYkUU7ktqXq6tiM8agv94wQpVa3",
  "key10": "hwsmersxeCMa17q2M9KF77AJRMPjCuDTEMmLydfApFwjJv6Q71TMWgX9nAqas1D56tf15RVA5d7oeLopCgc6XNe",
  "key11": "3ETWFmaAS9nu8Ms8Yao9mw7TWfny7BHmz99kokCdk8Cr3ak1jjv69KxTvSokNRf55durpEpmUNmp1E6EU3keWKdf",
  "key12": "sXZD4TgBAs8RR9bHoXi1LYapvnumdCpeh2nvPH7sKeBxthxBdFco6n2vVEt5DdTv7rb8qNGZRWCP8c4fid8eBgi",
  "key13": "2NRKsqV2U3GDAVBgmpfBuU7AbAEAF6njGEgENa7nWhfCaWr6zZmAukB2FBV7CrVsDd4ezK7hvh63yFCCXoWFxyyR",
  "key14": "5zMAwr1Bsu9LfcL12QJFJ5fmnKfZ5S4hYHsANQG6n5i44iTFvX3LvWEn71SXpT2KsHcC6hCQg4bvqDrTWWqWCcuK",
  "key15": "3PXWTtau4KYF7WaqeTxaGiowx49B9HFL9EmwH84iyzR3riQRrPqcrES5ebauMKb7KsYquViA5usF5YqAkLrRVMJN",
  "key16": "2kP46CsABSVVdZGk5Hv4NJb3SQCGrk74PeEsSwjyXK2vgnu2U12Va3DBjgVazzG9SWkbqRBunW4STH1PD25prHqA",
  "key17": "5EnoV1DA3Ej2HTgreeZDYCWxVNmQ2EtjezAmD3G7AVB34QdTyU7icpSXqXar739V8Q8m32Pqh9M9gfBmGRp3MjLy",
  "key18": "3rMZYsyXBga3ioj6mmcvDb3935Ax7KYfgPp1ftaxJcHwQFgAwwmEotcJpJoQUgSEbVziYcoPC5uactnhnJrKMjX8",
  "key19": "4YFRk8qvSsyzZtBMtWqFsbL4R2hjxAzH54GyYzp7wLA5u524JX8f53kaM1QDKbWLmYJ287soZsDi6aPmTf8urgjc",
  "key20": "4wbEa4KQSTUA2Cseuzm9knM8tevaTfQpkyTeaYgfBHQo6jJ83fL2xacKFjfgkWxkCKdPdkvACqhBsGjBJEfh5icV",
  "key21": "WwsrPfZr2cJUjxWrDFgzWn1GVAUKZgE7h6jq82J216rzqGzznhya9a2y7RrM8pYAjDvvfUzYAkGPBCe7mpxTawT",
  "key22": "Szu71KDZUN5qJzo1dqQ4FZwpbHMWMiF2HjWFFa4zks7Sva2ccYKJooUZ5ENF44T5YkkG4PzE8Y2vXTt5LqQHHNy",
  "key23": "PhGpWDZFKes14hRkFBxCSP2pu12jxvAJNpsn3BVix3SyPwfxFY87Lt8k24txxqYA2r44BYuZ26bqFNHidnC4HRN",
  "key24": "i7ipaUAkGLH4pCzT3k5sEQPifZhHGstfqopWKGCPrKK9oFkj9tTQvcYNJ4tvXGrhhoAi7oxP2wfQGKEvD1ymste",
  "key25": "cjWnGBtxQVuYtyb12JpADu4w982imwHngyDbiysjCD8Q1Hz2uh8KHT5yADJtTZGd4kiguqECPQdT716GrVU691S",
  "key26": "3eUhabCWXUPiZLq1E32aWdizP6Aig8eHAMJYB1bYXZutxN4kZm6ffzF9sDRtc4EqWJvgAHAioVcm6FPWh211bZ4p",
  "key27": "5Ev4V3xhYbCzBJSrbcNNs5vitQBWGBfZvMcRMCEwg54uQ4HWNbrGcWDJcEdGzBJ9MeJQrwykThspoiRG6q7g6AqR",
  "key28": "3cKbNHV1Lh2pRqyF7FYfdNrDUkosca1tErV2nRTFZnmbgDBPBBdUucYcxheJJz7CopGKdGJ39coGqpsjCujG6qFf",
  "key29": "3oNvMkiNP8dFBo7bsMmGSLrXSW8Wp7DejbAe5BX3jgMqgGtefF1rwHpT1pfvDx2gGpHTLJJC8uK3NKfEf7q6H5F3",
  "key30": "5isQoYomrQ5YRRaFWzaBQapAoRVHYwTpd1jsUSF5aFf2nhEor7sHcA64yeAcKSNy4DSfY3jAdEsV5ALuM9VDWWQZ",
  "key31": "3nyycrW27Re3TtFg8QgTJuNWC2kWf14QD6u97Eb6VysJTAJQDrpLbAoa5hswDzMkPCHmdNdnGALbdRbzhGY9vFjC",
  "key32": "5ywxdD5h4SLpzEVximt8Uj1KvrFUquz16GRKqPZRe7k6PiykDnysmkSvcWmjx4c95frpahs28C9h7WHBsa6z1kEU",
  "key33": "hSYVKibfZvpt3GVChJv69GVto7TqDq7kFS7FKpNoc54ow6DZTdYUMzCYDFTrMmFAu5ojbR1aWA6ZMhNKyfaT3Th",
  "key34": "5Fjufy7Esdfu1D5ErPMfWU6Egwnio3xHSaCN142UpMEv7QLxyEEpkSf27oq5Hngh4hobmqZjGQNeQAFfVLg2CSfx",
  "key35": "259x3Peu3EsYBFQb28Ycy9sTJesje5zAbNiRhddUGrGcFKZBd5pp6C9D4a32T59LRLmGdKYMewqF5i28uNd5Co6J",
  "key36": "47PhKznEw1qdjqdckUFk9FqMNivX9uTdxAWmGTGHGp23XTNh5tJZNpadyqhoyM7XGtg3fm1dDnY3EcecFQkE5CGS"
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
