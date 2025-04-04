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
    "Lwqd4i751f98b7eqxpsWNRJPrsZ3bKD8VPxhMepUB7VLKEYqCLeUbDZf8uLJWqbkrsGzeUcw4TVkwPySRpALi6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XC3YneAjoLLSaDxa4FDtnNJBUQn2qpzyqoATUp4K5HeVJ3EiN8vo4TsDLH8KYBDBwDzMhtzfpaMvV18pibEv1Td",
  "key1": "2UopsiJCipFcpdQqfXPGs9RwubRQfkqyVCoreMrDUfp1degxK1q9VKEkpPP7XtYNCNsQyyu1CwyFExmWAR8gehfu",
  "key2": "cRE6wNLf7fFWAGmdaHFQHExhF5bcDCKk4SwRqtpvxzdsxdxjA4mEh1wXDMs2MKyRtSzXQzeSnhAfBTaWPYtWyzR",
  "key3": "p14YY9ArgwRShVrqeVQHE6RRy3pDJzq7gA6E2HJrwaPpM6tx1avbf33X7tfCMhbTEJzy7ZwLsvMbgLKe2dBxwZL",
  "key4": "421NPoLconJMDRvKjhYYGHc9rEbY1uwrXi5Cp9hB6gEtibyAENeo31vByGJQsaaV4FFr6EpHNnyR179neDqduU3Y",
  "key5": "4oMNTzmcjMH2wwdTkXkvp9xnEfJYEiVcdLypK7HA2Jhih97nb9C3wurBpHgx1Z3mFzz9NFAdPjvJ9i69mthAfaGP",
  "key6": "KhWTwXqz6v5ubVsJ5Nb9GPBybadbA6ho3cybLvPTGZi2t9CjXC5f2imQrv1ikpsvgBausox7vJKoHgMquDBEWJJ",
  "key7": "2fnokxPU7uLLuVXu5ihuerN9Uuv61mAGZ2Gyasbz6aCki4QLNKFMFaw6gA2otkrHQcQeTGBYvv9jJgRYZXqDgv9B",
  "key8": "wjVoAVij9EfvsyqF1sGJqCbMy5unboUpMohrkkmBxWvUEg4JB5NVzy7e3FvSbHGbAREY8NMFVdz2LjY68PG27y6",
  "key9": "44jfhz34sBDTB5LZp3jDAW2vfeJguNv1uUoExqAtsfLCTHT7wbDeE4yvUgSyf4uidYwdnVhqGf9x3gWc1P1n65sW",
  "key10": "L4z3syRfaWut7J7wLChuhbvhjPpjERCusP1Q7MusCkBGmEN1SeCgGWGRvsabFxFHM72A3QRzvMLZ6SFu7bFcGH4",
  "key11": "2MuE5ftRpQ1Rznkj5vsVkvVoRdR4fK8sy9PTy36aYz8WxsVa64MkLVamCJvfnVigkmPMHeoxkj4TojKpsE57pqvn",
  "key12": "oQZWtDD6F6juSvRouU5TQCG9nqtFkusBktsPpJGjfS7UhKF2bN8YFZo35rTpvabg22A64kjUtSgzyyeC3zbSK9g",
  "key13": "2dNs7vdutgdgfczbjikJp9B39bhosjQ75uc7mBPrQNaaSVLRgLYQFybnfajJQhh3thWCMBimLDZQEDUaCEWMnqkL",
  "key14": "4ShGALZCkp18gFTCrnef4C8bPCfkLBz9uCBb3dCX9Q9uByJjPuGjT6saC4kUKuFkohEgeBfnGrho5979dGcRZz2N",
  "key15": "5THrgSY8QgSjvkJBrgMguihRfEPHpLn3UqtCU4GgaaUGgMxuKbHxDEv3e6TVjRk9vWnbn3hc96qKkRXYYGhVCryW",
  "key16": "5NDjDRNAAzJqPBJ3yTJCnjVySBc9W9DToghJf3FkBZ7DBy5KAB7Z9MrXh8n6BgLmEJzHHFS1GkB6W9GstkfLqPBh",
  "key17": "C8SeJgjiF9RhNVtQwGH9wejBpyqFTymjacjQjEjzY4gJKj5x96kKQ7TfvxnnBqinhuhwcy9mdGrXr9dFLUZBKih",
  "key18": "48fRR67DicC3pWqBYDX7mUsnYDy7KujePrqY2xL8DcDJsBU4hNeDrnmARahCi5uivuzz7eN9rKPa6EgXskLYVZem",
  "key19": "2VMJM72f42DxUn1sWUdGCSFtdfV6933kQAmMTWvRFk6EAXEpgJ7CbnuniH8oC1V67Q9cw3JfECBWqasS5GAcfrTh",
  "key20": "2fsNGmxMdd37wS6A1hPHJ7jsGXXfdB5Kt9FToEJST4Ms2iVPRxBTWmMLsynDd9fEgYAcCuZyJz4Tqa7ahuyY7Jm5",
  "key21": "3uG21AT3mozuRM7wjWFRLRazeDwYoQ8khh5vxqY2MB5bqczknzEjsRABvLeUh3VJsa9YsxbajcNx35LAbVWk8i1",
  "key22": "24kXxYAhfqRDKzsSvKvk9WUe1nkAELULjrxS8XQxjwFAzxcvPPCU94AtXJDACtwenChU5eCNJrP3fFWCo6mbKq3F",
  "key23": "63TTK4e1E8JCFGi2TVqw394PYrFtbkUZFHBqune6pz8LuHTHph9r7z9X6NUZCwWh1qNt5Ksztg4281zeFZjPUGdA",
  "key24": "2YH3ZTBtUAVfEPnR46GXEaE1SGF7PLRTJP6dSQTRfk1TqzphUGJSjVD4WqMpmJAkHLfMLiKFVYunRvnMQWNB1YR6",
  "key25": "5Egnjpxx7K2qEqBne8n799hh6BNJQfbHWj8mfEiqX1Mkx7VeJvd9gmuVJH35Lk2vFxwtVMhE2jqA8DB2yHUUoUfC",
  "key26": "51c921qWNii3QFNpxMzWHe5giBzRTkqkzX8Wx6qRWDUKRjKKBYSsDF6NVEVCR1q5pryt3JFGGx9FCYQWv8Eb8v9Z",
  "key27": "3MU3wS48QoPA2PiVJbrsVELU5Dwtg8xrhVRR8nCHGa8dUJ5yPsc8fVuNn9XYgQuYQPTKYUkUWq4xu4oH74JU6R2j",
  "key28": "4wpKpwprbsLA6zbZrxcYWe9Nyy15dDYSayfQMjxWQAnbsXou3cJCCAheb4ddreMxfN7THD9NdzstzmsLZg3U5hHJ",
  "key29": "5S1m1aDFhE6fogx45BmB2Z2MVJAkNPQQmEojwwgHshVmmaSycLF2Bs5E6YoLJFGeBGAkPfZfaLngAVq66Mgtc2vv",
  "key30": "jAz7gU4nFVoSZJTU1JfqPQzxFgzNM6BQfqERyknFJJEXMDQkxt4zGMN78y69p6UHFgeLBmtsdcmwzYPiLFyYMZp",
  "key31": "3xF1VQakt8HgeM42Q6L1WMjawygSZktVahjqCrA5tjXqGfpYoKVd4LaxS3BxCuQ3MfeDX1WJeQFFY6c5XkVQ9mEy",
  "key32": "2hCnkwB2Q6xQ2xmGJXAgUcLNdAZETVJRDWdX7vpbFT5NrbKpbH1m1vQEqdQ1ZTy4s11huBqiEn5vTvE28pMJKcPb"
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
