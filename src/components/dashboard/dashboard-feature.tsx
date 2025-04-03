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
    "54zxrKZkEnJVR44BiVWb6GQyzq24hgPPG6SCaJKR7RHpVYrJ7dRVrvihBncfxjj4Xb92dR6FJqX7XWk716A4sgAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkXFa2djzd2DAGQHKNqh4HbqYpAgazVvnFM59Zo5JWgdA2VYE92RAjzUse4Rf6uCpErQihhbgMZn94S6hAuSEZb",
  "key1": "3Avn751rwcDNPvZpPn4LsLc7ykFYuBUGLUyccS2AVpuN7kPvi5HQoURLhVAgw1pqBii6CR57c72bFkrYvH1tsvvX",
  "key2": "GgQLGvb2KPomu6RVPrmXReqMGSwRb4vqPpJxXrSY6t6imkLdeoSE6A4hHCaKhSrCgYNFprHXeFk1A118VauJMnD",
  "key3": "538Pm9EQHxidrR1kqy8pKgV7YVwNqbg5PMZGRLex2hzqiUwR2NNH9UPqmzJh4QCtVc1KQyaBE8nq79CoxLSMraXX",
  "key4": "23FxDXBRSdcQpwMm2N81hyRUGFivB3RyUbheTbdthkNsUqyFuE7PGBC2hTfyp4ucsJ1gwoBG3q4DPtu2kqqb8SFs",
  "key5": "4irhLQnnKWHKpE2xjPrRRUpMmNec2KKYrVuzDZ9QJrY8yAfucGSsMtp5sGEWemTHvpTTTViED5h9TPMzhB3HBQuC",
  "key6": "3H4iTsxUC5E9mqR7PW8bgRF4fykY2HFNUxjgqG7dmnWJ84LYJazyBrsQBhvzezkav9ZmzoS7eVMfotBJu1pfTrWc",
  "key7": "3B66znAEvfA2jKxU25BKzEbo2k6up3Ku2KdRVq39jYgnwv3Jj2YUMTtXdfvkD13nPVuu1kiMrjirNkUARrkZeqr2",
  "key8": "44r8hAvnhZtUu9DbjRJxx5GssX6q93jcVJGNrXS7VByUGe4PKDc5WXNouTStWvanNFW44iJUA16e5p9Zf5FGD96K",
  "key9": "gU1ZEkNqubRV5r1ufruyVtzB2w94xMz8j4dpT3LBEbid9DshetEWePS6uuMHS3pWwTwumpxbYzSMmdGE3fgcjcL",
  "key10": "P2jCorazgWPb4ECBvyaqGH4h1yqgkmJHs5TnG2rhHXfcV4rAJD1X2tgcBcoF2KTrhAAbLH3yHHvDq139ytSk7Ag",
  "key11": "mqY7tgKqfKWKjx7v279k72L26z8FHXKcA329DhZUdXYP2Rrg2EpVbqp1vgVsnLLTNXHB51za1GALcoVMjTv4j9t",
  "key12": "3AbdnuWPvt4egxMDXk3hBV4GrkK3YEVKMUAL8Fyvaz6F3CP6q3Mf2MEmztC3Y4NFbgZjCyemJ6F5rVgDTksKWVeQ",
  "key13": "2zpqSMDrg3zrMqjyfJ6Z9Lv2yNqarhNthbYoB6sGd7wVa2ZmfaGYhcF48h3KKwA5t5u7Sb9Xad1v3Rf22jHHXGL2",
  "key14": "2WEi4Djfk4Nd8VRkZGJvLhCk9o1CApDVXJTeKbwXT5xsGyKnHXkctND2ngWzvsWysVJdxRroDyHyQCWmDhzveYCd",
  "key15": "o9XtL4N5nToziF32GUHAvZvevFK3y4G2dH6ZL662VdHWHAJskTRM3dSzk59UiRHg5hxsHnmd9XtgzrN9vVPG6qG",
  "key16": "4ZtifF1htfbzqdanz7Mr6AF3Tt1q7CbAiEgxfnV5NBuD2xDr5r3Py3GrPi7DzGfjDqTBzNeZwwNVAS3pSJa7nisx",
  "key17": "5dsaDVgg5B58QS5Xp9BhvfywiDh79y3YtBJCYPhGc865jyds2zBceV4A5yEvadjnU3SAYsW4ZBmyenRxKVktuJ76",
  "key18": "3J63m979HyK3Vem12491bT3GeyALK1MBSZqiLUxS1UNo5fK69F4AVS8SKkiZs7KzC1taFtQ64MNxSPzTmccUc6as",
  "key19": "KmQgtS2YzqA9Y7qFncjdQokL2Kh5f3UDTwpJXuJvcFTSE8VvDTfCWKLmEiYihHxWHfzBPJGhFFZEPPZo3VvJWPd",
  "key20": "nzpH35NQtv9QywpyiFHzWCaHD1UjSgSXR26ZApkZpqKQ5FCr2HJWiuMqEAA85HXmifa1UYFgQsWBPpSeSfx4rGW",
  "key21": "khWH9BdRj7KYutDw43HFdRFgDg85bGSHdmv76w2TkJhgaTA6GFReJJWyNgJfnQpLtPdwohTWvaDtswodonu6J8N",
  "key22": "ACzRW8x1KXiYRAGCZ5S5EcB4U47wGmhp3Lovd33DZzgSjmTCYQuwaUGJFH3H1JBUCKXK7svtExAMi3krgrdSdPY",
  "key23": "5HwREGYF1rjrYMyQ77roz3TmacTxProk2QszFLjpmGxZRTQRiiirmoSARhFpwbPzVGrgMJyfRotUp7NvRifMjmG3",
  "key24": "t3mAiJTgbUUZfeGrNmTtUCf1oQ9NDUN4zg5kRTDxvkx2fejnXCtqVJEHettyarPYgYNjpbU2AbwowcJRNmySLZ5",
  "key25": "4zTQMRhmoufqS4dC1AcDbxDKMATZeinDgGrtbjRhY8V4ovSdh4p3xDJD9LYJmmPztDbyed9xYXvm6YFr6TJW1582",
  "key26": "51riiRNTcg9xpo2Euqn2pdJ8JYSe47rG3VK8AGpM7K1N6Abh7VHSRUW7xCiWZm64VVvFJrVfFzXT9VWaKqYyb4n8",
  "key27": "4CQJbPAZi9Epu9JBFvF3vT9gEXsZ6dcoCKEJzGuABXfphJ9T7YXaEEQ13mQtqgQzPnYEDrEFbZxXj6R2gdWN97tg",
  "key28": "QCrF788MXdf4HGBCqmzUdBdStz61MDby19RavoTDN1jYh8RDxJr4zRyDhKDaGEz8fmSFHGyEJg6GqEqW8ZyQVEY",
  "key29": "2d7hvL9k9ofsVpcBbbmP3iMqP8ce638nGTYdHUu57YVps15tzCN9pFE1nhPc2f2U2Jo3vnDC8xNgL1KrNMmP5N5f",
  "key30": "39Tvv22To9X9JinzYd2ekm5axNkKveCyb7JKcM1DX3JxKLcRQkLTUe6LeHyS3YNEe6hBqTzca7jzAmjoHiJUqSsg",
  "key31": "45LfPTqUzyhyK1uY3YQUgtsgrkuVGBigbdCnJsteuPcpxfA13z3gfWh4zEV2kE3bfE4fhxPZG9zTADJ9iQVm8QK4",
  "key32": "3ZZfhgmgruiJANS3LsiDqMqNApQLhJmTtQ9UDm3ivGDm5ePpCm8JqqQuuzZFuaAyfgdqQf35eUmoby8jHM1hAwKC",
  "key33": "2HnYcEG61278VsyC2irHyyLhQ32d8GGJvwKzyFiz1hAmPEjCaeT1pa95BmhpKXs1BA1QouCcFJWJXbXoUm2RaqNg",
  "key34": "4xuz8a7j2qmw3QYJUPqrV5e5TWhN1NbxesTDeJKf5hdmeenESuJR2Rn9Cir3jfTAQLhYj8AJWbuBsXyFi1R7tXXJ",
  "key35": "3Q1PMPMLdJg71XX1yLT4ozzkgPbCHTfWxjGmCnepuEkkeXTErthU9nHVJJsdscFbguBegxXJWGyc3ktsu1kR1T54",
  "key36": "5vvov7j6U6rPrf3icCchh2onF2Ee6EHQu4QaEzjVovVLU4Y2mnixKQzafEjzfxEJtHAqUYUuwLYYLRXF4gx4DTXU",
  "key37": "3djst7oWqah7hjiaRbqjZNjubXHPEJsU7J68hrbnUaJf89MJC5uy1gdqgXKgDX3zSd9nQb8kuiQJeegoRby8BYXL",
  "key38": "5FNhLNg1oUMRokCR1vikft3XuEMy5huL4vhzvvucHtHaWnov72N12Xr4EmbZEbwCXPYjfUtCVNpmBUxiq3PQ3wZe",
  "key39": "4p9xVRoaopNmoczzjkqHoYBPHZtLMq7fpEpx93BhKVUZnzvcpah3wK3SxQcnv44p446ZMaoZcjypiqK6KV7oH8kM",
  "key40": "4Vr5vwgPYagwxFfaqKYS9VEnupSEiUUiwvDiH7hFh5KfRtgvJfPmDuoo7iXprj9BAx6sYy6sXXNwcxPtZ7LKL83T",
  "key41": "2WibkviHBfkEKL3RndaGTc4vn6R1tUMmo2SEGDVeidNShdMFSUvX9ZTc7whpMGD5QmX1SuCcxQpu8gXYTPQmYQ88"
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
