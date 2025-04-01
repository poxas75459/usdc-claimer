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
    "5Wwh5BxCiuZMX3MVv69TtMfY9BZaCMfV1dk51AapPkB5xKUjePfPd8xy83kLA5SAPNhB6XSVmgJGks5w6WdkbAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHCY7k8euU9wsrGBr4LAreA8mYzWiCLDJAjAYtTiM6QbjaxQWM7qtM4DsgKN3jcwh5WoAhWYLbRUJ8q1tqhXre1",
  "key1": "2jkpvgKfR8pwijL2R7zhoddjbmnArDMmBiX4YDNajUyosrsMPvskER2zqQJTS2f2mtZAD8jrr2U9oXKEsFn4u7zx",
  "key2": "1B64ZRuRgESn8BGseNGG7xggb5G6AhBFpGC6AuzQUvnLyYWqPxwXZrhSwTawwrA5vQZ39voo1jaiLPPQi1YFGKn",
  "key3": "53dcgobKvByLBoWGBXH1LFnQXKgxupxGDsySwdaNddjCFreReJYWDSTzLZXVV5F8ZkjET9aBvQwTYwjtqUkwuGVi",
  "key4": "62cFoAyQH8AcwZvzN7nXLzSveavU3ZHNZvirL51yVVqJYvuJVV9YtJwvBQcwWfNC9R6NYKQueQTB4FFvDyoE7MxM",
  "key5": "vdNmhrj5Mw3CWS7JNbmruNzaqjKPcCfn83gP4TWjn2WwmzfYMpvizvz2Lr4iqWMRWL6aBd2pK21YiGKh3r9oE3R",
  "key6": "y1NBBYjiepaZ5Y49wMJpUJcXBZHFXS1uqDKHMbU8RVLKzQYGZDLWa1APiM1J7CjYnEiaJSELZgtr5oQCuxErTYh",
  "key7": "4i17HtVno9bXirGrnMxs56UMgdTYhctWRr2wPzPRtL9UWA8qZMMwVThZwJDFLPHbK5C495KVUFSVLs46rDQTYjKy",
  "key8": "smJTKpzJpto3Lfq2mXq15S4oisRWqbWXfxfma3ib4Mi9Wu1a7h7rk93Uqm8Av6Z3yEFxsi3hDoK7s2gnw1XJ6U4",
  "key9": "4L7YHenJafmGtUpsSboj6rXtjTBDs3xyyMURTiU6373eBUJwBDpkghxYbTNbGKZrGUuuRoCb6YJwdJc7BdeW4KHT",
  "key10": "3YxMVLxRtWy1hNKMXNFpfYxqPrq8dcGt76jUWwyRnaWkdS4Cx5qj9axF1jU459L7BavvtPeeEFjPsgFCh9dTCQKm",
  "key11": "4uYVeaxY11ALSF1c8HWTCC8nX4KxKenP5FwHdgxNoopaVWq6FSeYbk643kyNAsnwrrLCVVuWZkp9RisVCi8bJLP1",
  "key12": "2FpLA2HpVHRQox8UGNGvxdV4ZaRJ6FcnZHV4QGnyNH818YFS2zhsnsKmnWA547cMAa4qoGA6Dh3MXb2kFip4XsMV",
  "key13": "3WJBt5GZPqN4YscJ7Lc2zkUfdaMaSTzg1BEuSFM4C287JuGSHcv4ZAdJbThGNnWPAPK1PWkqocmT5ce1gJNquaCr",
  "key14": "4C7i6dnDxCruipDhqJyEsT52ECjfDf59JQGMU3NA1pZQ3RBKeNrqt7gLaSeqpM6r8hXCPeQLkhpbJAWKDEYokA9A",
  "key15": "3AMyQsRtkdh6euqgGGZ2iAy6aD82BJu3hVbyarcPQH7CdJe2FZJ1JMt536FixWH4P7LU6EF4cHWtGr7aY3EpBC6r",
  "key16": "7GNCxXuNN6XSB34ibNdcvR9TP8AaFVMGjx8BSgAZdiX3xyWS5HaSyKqwngP6uVm1kBkTB9abkDSHQipsqttj6E4",
  "key17": "67ecS4UM6VRNvxFBDXgzQLGyfN7sXK4ShmsgCi3tghNsmHWmZcRGkdxfgQbXbnXbXtVhTD2eqVDTEiAfs3k1ryxg",
  "key18": "3SNWfS9BdhmckH5YzR2mL8P1Cb8yuKtHZopbqVHRXcRzBL9vvmSa28s96AGtw3zzFGUDuWRSpxRgWLumejptVtoS",
  "key19": "2DG5TqcT5Am7ahhyDVuw2LKsmsxRCCnMoTytqWS6b52n1nHFevcfG3hSQAVkjPEjxzeEYbXj8ViwmXAXapWmjwgy",
  "key20": "2obKEa3jqLC5EWJi4smyLkcPu9g2sRtWR7d537z6gEsQx76RD199QwPKaYah9Ujo1FYtSBfiifDRaXUhUES4AxRJ",
  "key21": "2th139YaMYxM8aUdkwb74RnpoWT8HYxY86ZyAkKtJumZ1c4bH6WtKgxN5723JjsxCwCj6ZUEAZzyA3d9EQWCGpXD",
  "key22": "5YdzYiBeMXdNmjHb1PSJjiRB7jzPe9TLENpxRFvuVWb5dHRJRDddiRtNnH7K4CQdcLhPGVuEVuEkQQ52GNrd65cb",
  "key23": "rXuRTZ23uNTMw4iALrVLgRMCZtTzj9drn38qyY79uUxfp9hEq7m4hpvNi9bsTG9p9pyCuJgV9Xq3NahKLtsu7Zi",
  "key24": "4wLiVbUB8sin2oYRK1Xdu9LCP4S346uV181MThw6juMKHFUXW9Nib3fEzEeMPvFFzWKd6NaHvGDtuzEhvEkiDXXc",
  "key25": "3MCCJnpa1dFLVFDtgZwLQhfDXTDh9WpqBFiYv5e18HTKd1mVgN96d7ATQiaMJjpNCux87MpwrARKfWP5LtGUJMND",
  "key26": "53gNbcWgrtmFDJw6tYbexCLW4dffpL9CCthriZhQ5qqu3axhgXTAedWGQS4hmTNdkLjaDUWNMcBq49dQe5FFciTk",
  "key27": "41Vd2CjvxGHn2qdV9s9LwFeVE6FnDWoewUQX5ZdS1hiyULp5oyDogAktQmgt1gHo7g2QoDxZqEJRTnUUbc7mUAu6",
  "key28": "4SPeLzJhSbwYgTRBLhFEsuVPsVQdkn1UQSrpMhbkeyexkstjV7scvjazTsRc7AicCQbsugvB9cPtDdUSMBppHRUn",
  "key29": "5P5vW49sQGJ9TyHLZ5e7DfgzR8PeFo93iUB8PmQcAWw535cmi4hxBGcW9gJffKj6yvKxAUFwZGWqrNnm3oaoj76y",
  "key30": "3ni4yYrgRegVJaW1An1ZEQSdiy759ZJ1WSKR9YtemcaTVpJPwvFjgVjYDhN9nN9j9odk8CUAzgcLv7aMykTVh8oA"
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
