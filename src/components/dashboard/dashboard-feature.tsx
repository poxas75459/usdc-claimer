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
    "EJvtG9Ue28hVPSNPD6f2MG5ozYi4KVd33zB9xGCJE91bZ999xr7nQynQ7jjiEqtdcgfriieE6E1rk5yWQtEuUV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7R6JjWJV2yahrinJBHtH512hGVbSjfpDGwqWKtJvWHB8btyubtDjX7egVYwmsaNrxEEJegJFfqUDTMt6Cazci6R",
  "key1": "3EXir5D1VBKSCpf5jZANMBMUjvrWo28ZvrJN2tP3BaPD8m8d5X8bo3qsmrYbNyJVrNUaMaTUxisgpdtyBQLGYo9R",
  "key2": "3R3cZXt94zH9uDMv6Cpn5xfDXDYbGXCcYP3DTr7rF84isoigGFNiu2N1VbDfc9XLhxhwBAxUvQ2Hza3EFaHpTvEz",
  "key3": "M7WZxmSXtraBvPvmHX3bHsSgUH6iRUraUVSntvHQ5tH1TTH4E13VdXYgwSHMdHYGyfN9xrZyXWMA4UhkWsFrKyP",
  "key4": "43EhfsQ8txS9gDPd8MF6LCugfTFkDDRMQv5hcBYVhvkL7p7v2pZY1GqUusVAAMH4guaNBXWuKvKTnL5hkQ6zmPM1",
  "key5": "oTmJdfbfnZX3zDZnJieihAbjYKbMEt7aNkrjpXgB18AwtABZ2wZmikp4ntnUM2tseKNKLELzHLtEPba3pZrXXCz",
  "key6": "4tgAFfABAWJtc5D6JgBi83dU4gLm2QfMoqemu3ehriB6qCwPcQ7uw7aNTHkYntuG8JLGqn22G24PPEiYXka3cLpY",
  "key7": "FpT6fp2xULikUXZHPPJ39LsDWUcznKp3RLe9jVLSj1g3eWx2qzonqQNjJcaPCaYQyK9pDwcN7kvsSoMeYWVfPWw",
  "key8": "LWeXShXoCwjmW9HnLcW2P7xc6vDSnaGnsTpFrM1RJS4oqh3dKocsjdPAYgzhi9p9va9sPjMkzwUf1niPPXg6LX6",
  "key9": "5ZxzALPmLwY8G1McroDy9TUmGydpUZJC7PokzgCNpDZ38sS3TaVQj73kGvvovNhAZSMpCda3rXRUFfSSLAVK6yaE",
  "key10": "2u9wYGZ9GdfHXxGcFE5if6ysDi5H182SbzWScpmXNA7wSWHqDTV1g1jdE3dM4zWEpaX6fGbbwku7pzo8Yqjm3YdJ",
  "key11": "23aEuTSoESPxBA2ATaTf3L4yjTtNjMyVQL6pVsi82Ti2gCWLPTkd2crNXKF1MUBBztsnZ8kqPwUob7uvYP43zb8f",
  "key12": "53uxtxmkkVFUWqKN4jLYAXyRgyshC5ojmr6bMHYcd31E1Mgd7Vu7nLLhJMokHkewMWj4nn5VbpRMxqSS7K6WpTAm",
  "key13": "48oGxGBhCBmMPBEe6hvDT9SYAUHRfu6jA57rNe71nN368UVua7JMoEMgAvdJDnuDiGeHzdYHusLV7cnBu2dqtf8y",
  "key14": "2JPoL5gbKyQiMQ6JDxf57qqHqQNRWuC6fheCbMYnCuzEELjMCsTxRnHeqDqeUGv1tGrSzS9zkpLb1zzGL4EKXxvM",
  "key15": "5ZLy2YN6HARZap4da2nAgPsDPkSsDBApah1gCNykRMiuazWiwjyoph37v6fprN3Ltxaq2XBo4mnLn2paz5fuWyoX",
  "key16": "4nrzrwYmPvYJc6RJj38kyHYcXjGG8GxfAMiGzwx9brEyjB2i51NFdsjP9sZTWS6ke4RLsQuvsE21LvYvBe628hYY",
  "key17": "3L43W9ec2x3vJwBzXq5vZoEYQwdQ82ramV8bay5RRTHH3uWSKqDRHi2dUTjrWyj3o4ruFoTaHvdNmzfzqruGuWs7",
  "key18": "3jaWbAyy5KjtVbBmAEFrG217b3voGZfHGJZJBNsSyVugm5i6H8fRZPhK85Ds2kqZc4RjWCZf7d34w536FAqiWDiy",
  "key19": "dZKo5MX95S5ycPpgta5jVXXVST3bto8KJ3Vhjoz48EqaEhuKGjD73BVWzwPC8B7Bcv1Z3wN1m9j2aofWnnAHy9b",
  "key20": "41aTCSYK3cr57vfcu67ogVnELqCEWxNXMo2aMYntBVCFTj43aPDcSXgMzpgx65PwLdbh58Tk14DsrDoigQW1oa4p",
  "key21": "3sRp54quMKz4b9KaTtKYEKAsFDkVmm9PNusawj5JKAyFwLN8VKo9bN35Wmg1p6m6puCUJ3oDuZYob6xcCH2qwmHc",
  "key22": "22QiGBrX5EvXvSwrh9E9sC6PFZtFJm74GfVqQYneT1sZ1CicRjc5Qszgy9Km4xizfoj2oLbJJQr9fKrbpUiis5qJ",
  "key23": "3zfGjjJKqRqSJtPHrgb3GSDdBjHMcFirkqwbP8P8WmCzzRxQyXnhsQYwfDj17ZiJu9TJZrPgQi56GbJcRTAstP5V",
  "key24": "5LE61gG3j78AUvax76jRtP8yj92eQuszamWSZrSu8mLAeo8cDSseUW286Ca3T39qnPNAMefkjLRNZVpdEtHM7A38",
  "key25": "5bTDyyCCZsncNoekTKvm3JQxUUEA1SHueB1Hx6Yg39xnTbqJDHGrdgGvvvWmDXK59T9tERKEwFVoq4y1e4mCr5ki",
  "key26": "5VuWLoQX1MhFnZ9XbTeas1rnf4aErmQL851ys7vCSzKqdN2xS2wBC8jrdkofAZNPxjspWyR79qNvy8U7qJMvHSBj",
  "key27": "4qZjd3cAtcdCkEXmV6VtLvWW22Rsv7KfnSm3mowwb2RaH9xBtUeTHDgSWktGnP6karXvH7d1Ne9U1WqWegb5pLgg",
  "key28": "4HU9Tz1zGzgbk8BofQjJPD8Qeedb86FeWRv3NRyg5ufCXrBVbeuuFHUP5J9eoYAG6fa43quF86HDSdcCY9rHCBh",
  "key29": "4TF6ZerszCtoKFKC87Fqj4UWEi4B4tXqdv4h7VQMgcyNZahLZGruuxFwUq1siAB4MR1aFAX9x7uq2iadgB9bufYr",
  "key30": "5UfnUQk2hrVU6A9Rg8TCZLiy5bhnRmmXJXfqyEGpP94DdGSYta9hwdm7CayFJko6daapKBe4aHPdtmjzfeYbMsVG",
  "key31": "su7Ky2Ke8mp76yxBKcznxiRSCz8uyAVhTGEYJRLnyikMSqotu5HjbGpgkDAzmHRDYQTvF1QHYWhDFL6ext6jWPD"
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
