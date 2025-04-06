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
    "223JKNxew1NveVeBDWnifYNaY6ooYKuMMUK8F2pb6VE8GkgPQYe9ZgXERLcNt2P5xbAJV5qA8N5UWvgfv2R4nMZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ye4jSpFUpXquvRubxTLZqjo5eVpxxMXFULV9Ros6TFb7thHr8EespKnSu7kvQixmdxoHE5RE6w5Ndb6JNcFHQ56",
  "key1": "5yuQ8q5iTBeU9KyzCEbh8TdVcSxc55xFXoRYQhxFv7V9xj3QY9mxEHgm2DQYfpX8FP52UWnVnQ5eazMokfGtp5fA",
  "key2": "Cmr7WVo9xMtUCbsbburcgfZKc4BhCFi9bjRuwcVTaWvxN9YGMG1Wb1N8j2teXpTATRqpyvTKoQujJ4hZcnE8F9Y",
  "key3": "2FC7YULfVZUSuKsACcViZcz6NfzUMRGv6AGpE5mJhmKqmWATPB7ndKRPniWWaMsgd3oArrkyXKEa3e7igu4gucqX",
  "key4": "2Ed4eC1qtmWM7xTVSEi1ZyZ28Pj8aQQSMMt7xh7CDP2ckk8t1KiTnm3ZSzoL8YEMUTERzkafYrEFP8jEAZUcBdRU",
  "key5": "2CsJR2F3bZgDNj1BoLSbPrqn6NMdbrgHyNicPFbcevEhYgu3DQgKruURVXDK3Q4pcqjLVqHxCPoJ1MzMNDLHxDdB",
  "key6": "4BLtkc1YSwJThBSwTdhXCKqKM1Fi3BNf4mdbiAj7LqUHjavxYYggqb9JxvogpvsgexzQXHw88eJt4TefsaF1s3Bt",
  "key7": "2GajnGzxg26zUVmV4YQS3QpFpZajR4fE8yMFk7PZ6B48g7p2KDgtXfriFzG8DAF2MxUsaCfmdb4bdApJKTug54Go",
  "key8": "2koGxxc4MQwzTKVeNZJ8cmmv45drjQKPrTPVJgMiQ8hmATKne1GLXWLYmPBWHzzTVDgGQaTGfcxR7AY2QYTJ9kYQ",
  "key9": "vDJFANRg88AP5uKym2Tcp1g8aTWFCEmSfduo2zSmwrirutiVY9CsqEMN3cihBRuX5AhUFgHfpsfBx3hu5Rc5YHA",
  "key10": "2Xpo1kRzyd2j4Y4LZTzLv3SGZxRX2BLmfCtSU23haBY7AhSd8xxiSkqGZkkWS2aKv4jcAnZtm55msY4DuSwwevgg",
  "key11": "4bCqu2Jf7KLiSJ2H4ScJMoEcmwc4GKzreDirH226PQAZhNaEcZRv49Tm97iaW1oQAdPeJXVp7EHRY99GnGKYQNWN",
  "key12": "5UwGesknYBQsR6KEgD4SKfKY2uVhJswSWdoruofMo2gJ5q6NVuAKtAUxa7QGe1y28SN6Rt2mCcB9dy7Y5jEFRR8E",
  "key13": "vTVjd3YPi8HLqYKXeVjeAzRTuQBVXtpNTb8FzMfYVV4vBr2a461cvNdi9GXTMr4jmLdJqi5n5Z1mpZMEYiqWCGf",
  "key14": "4vR2qf1WxXUaPynBTL4ZXVXEmmeaRBAaWoAouW7sgt8jfizU4ZfcvDNCL19LPwcwM39z1in4fY93yAmLBmuxC3wc",
  "key15": "2ojeVdfZZiRagePmkfAd5yZPYH37TjE5ig8R5KNtG3gY5p3JFWo7WD3mozkTHyFGG4efzLjhmPFYcYtQ4sYZPMBN",
  "key16": "5HFuFzT6YsAwrVrE1E1QXjGCRov2hnaQch7MBNPVDL1FCrveb8HMNwx6RzUvg2tDGGJPbFEynxi3cKbKLfapZKxe",
  "key17": "49qRvbXcw9oK3YQqZqHDnXRwbeV3smD2myUoDy13SGjSyduqYQ3xavwbVoyzG9rj4ddwC8aAZaXeMzrpDkU43NYp",
  "key18": "3zFYSbEEvJhYHG2Fk49YBR1cKqBv8XyxsSBFjkguMmVJQP1goZyNxNH1dQt3NQHaTraA8RJVK9Vd1J1qrsD6cnGw",
  "key19": "3mryzgy1vRAUT2v7vNG5VfEqnWxoAEHEMTM2cVupXZfMd9TVXR3ZXnVHyaUx5ntu1XxbuWJHJdrKw27TjD5yeimy",
  "key20": "5M1SPvcj6YgEwZ1MaLm9nv3b9nf242G14Mout3X3fE8RePudEDFNegrChonPYwKSAhGUMucy9T6phZBWVzeKo4wY",
  "key21": "2BFH1A5DHswRJ2EGprV3eaHbs2rQavqC1vUFr4cDT2aLdpbfN3ytsbCiPFoJcyTrWEDFwN14oA75DjxmpvuPr7mN",
  "key22": "3RGvmvPScKxUVaiaUmNjZHLSnChx7RuV9BL2Qv9CRuH5EFkyCcprQVX6AwU1suheuDEKGos8pYvJRgDwH61HwRT8",
  "key23": "4mEZ3ssEcnjNGkwkJ58ZnDmgUfnMe4NcpitaZTL7tV8vWGCFpbZFWjxEuHsAt144q8JGW8rLnftmFbedTQh6FZZH",
  "key24": "38d2a2hp2wBiUwQ51bYcyqhdg2kyPHkwNfW8P1cVdqAApZjenzBnviraAhXXZnSmZVaYnBgUmBLJmQXXGTqXE2Be",
  "key25": "5FPfn3QyXr4wez7kfrRcFsbT5qnyLi1w4M4LcmkJsFgtw5suXnwABMwSVxGyVi4TACbihTYB228vUzKDxMmfmu1Q",
  "key26": "aXTcyHgziD11mrS2d4NXgWnH9MiugYizK9xxSKYiKWEwwXaBDB6hs4Phtfo44Mq9G7UXj2ymQ6xD2JxbXd27ZJA",
  "key27": "5eN4Nf2KnUCjr3PSzLMN6BdfLi6VTJAj4ZWG3KeWoDBTjPWWdeBCAkSJ9iQnr9e3vigjcVMfL3S4UzUBNrH5nsSR",
  "key28": "5M36CWQQdWJ1qGRs5aSwKCuoe3swdCJto9yQKKfYm4jTrDcttFgYwFJzQTDw4fu3vhXdrmjSfoGbuQSWHewHHkLz",
  "key29": "XnmQ5PxRMcDQ9kZgG34H3DchjgNoyUMsGgcvXmCUmCebQoV3VtnuBQhakeDoM2Usq6RFb4ttY8izHjYg39EnCki",
  "key30": "62KZo1SzwB3yWPXifigr323do19xXMoZC7zD2Lu1CeB4XwW6ZBUzdRF73a5m5TVnrkfUggK8keDqcSDPeQgtwq4K",
  "key31": "arjh8BQ6zPymZQdKHvVhN9wEVWCMBY7iPWW61bBUcY3ZXyNJxUVKwiLJeoJu7nDJikPLz26VcmFC4tppZKXDLVd",
  "key32": "3BeCg1ULu1ykfD4Cm467RUcpx9UdpvjGXnoYpfgmxgJdSYfCzYVoqF4HsvGKkTKopfsVox6r9xQv3ZXbiDThyBA7",
  "key33": "5MLh6svT3ByCp5uPSF3A8YX7YXBM4orbbE1Wrgu8fWfnhN1kbab7gQjymAz6GsHBd5aPDUsQewK8GhnMrxQBK2wL",
  "key34": "zaSZ3M3PuXmp5FYiHwvszVwaqM9jkTi9fUm28B8Gxy23BN95G1LRypNb1BuHpo5KSpTCQLYjADqtSWG6ojvJKLk"
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
