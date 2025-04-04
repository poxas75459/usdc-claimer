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
    "MCnu3doNbfWLC55KeM338EbE4aTyRAE7XHCmAR9BnkzjpXBxtyfaB1rAT7wCEwd89U214uCMECHLTdTZPFWb83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzptYV7k5b5oFzYhDGzuPSyXgmxaCk2B2o3x8ujtCFz1VzavnokWQBxKQMPVZXSon8QQuJcdjCow4Zh4ntD3AmT",
  "key1": "3bnUTm2PA7HPfv2w9DNbz5Hsu9RRdQghLHYpaetezaE7QQaziPDdGW7JuqoNJdQndCisxZAvCyjh8CWYCNLtWvqG",
  "key2": "3yPiop36CdzJmPyuV4g11NbhPi5ujsrUDToW2C64gKD6xAhqgeJbJAnhsFCPHwBHEB66NpGo3a1pzwpZYUAvf5FS",
  "key3": "5PeipmpsW9S8iq46SjN5Fufa4pGzBPLQBqetXMqZDdHFX8JYPMUpGmf9LcVHy22dEiL2pGLWayVEoeJw7nomEntW",
  "key4": "2DngKgFKancWzJiFwujrpmg8miUvh7wZ8DWMSxStNopbF5GYFkvrM4ctmDCc8KgcbUgwTkzUvk74cbxWRZprgwog",
  "key5": "3AMG3vusuv9Z1zZiTnVUCbQcVxav21TF5rWNu4FPNCfhJ52U7TFxoktJcDFprFTiV6gh8TvHGhf2nm1YBJ4dzFez",
  "key6": "4v9htv5J9NUA6tN8hiVtYKXqJyqXLmauaekTRxkSueFkFcDbpJvtRVEzrcfutnFXRRdYWGMR1GLiDdrbgA9AFPcd",
  "key7": "3WcicxDyQvAiSZkeg3HngqNr5z79B4yB1YRv7yKG9ovyrg5j3ve6nxPBXSzFbvDSA3Lyw7DXxAaU1YHHQzvrtLuq",
  "key8": "2NqFXf7vZwu4MN4fdsxsjkG8qgVBLH4woAfMYhTzpvxHdCVe3kTqMTujgtY79D7ZGtak6kXRUsq8t2YdM3fdNtWy",
  "key9": "iCmBjLniNHm1hvx2n3Cnvj742HJxSdPTeJaiUXbDkVG99wVK5kUMyaPRihby4kkPSSAKSf5vPpgHTahN3VB1exw",
  "key10": "Bq5CMMHvSg2BnrWr97Sgbph8ubmFNrN6ixgrDdfGqztXxTFyCCpb73pQKUZ5ymVX2wYR8caRmLZUdc7utcrByeQ",
  "key11": "2fBzpP6Q9m25xKkBLdtVmFPCMWRhJsMyRbqiqSMLBYipHGTyqxcSRbeaaNgYxreYkYSvE96oDQg9nK5RnRtTUXTr",
  "key12": "4VMnDcj4V65LgiXJhNpaMjFzQ86Umjg9mJ94GcUJtczSHn1xDpHZkbmGzSuZUbnqX2QZxEXiYrvzvC1Nx6s51HKK",
  "key13": "5P6yni2yBwWVUjo4RffbvPwr6y4L2UsHNfJD1tpoS3Qyj8ALrdGZfJydXmj9z9M3ZUehvMCfPn9Y1yE4pjgjmnHi",
  "key14": "3FG4VKvBbCimZ4QxFztipATJgm8kggfGJdb4ntqQiiC7n4qTMfZi81qonkfTYFrgYvdT9B46Uoee31wKVsr7FLZQ",
  "key15": "49LwtDNzCr6MJYuHn1vSkp3T3rMyufGbChbtsZRA67U5sd1Lotej7RS78C21bqHhLKFtUBRcDjUard3M5QCoGvyR",
  "key16": "Xq3FVhzUeh9UeQHJStwEyv73FuhVdpa8jo31dVt6JYGoXtVzfZQrFqAhkf2t7JrFF59rZhdymQshqY8Z75uGHnx",
  "key17": "2if1PUn2HS4ANeSZ3jsMLXpLU3Hheji2VQ2Ws4j8wH1xTV5ozJSLNbPFExG285AVZSL94abPiFvZorzpSSwRHxcB",
  "key18": "3L49K4Jy8EgNcrn38JtvBqrWCfDsLcGC5AstTYdjjKgcZPws35kxuHP8eMVgGz3EzGZodXkmx1JBFfRc888fvzju",
  "key19": "3zZB47qu9YX4XChxFjWjUmChL1YG618xgYinV65aPZ825b2B9b7bNVd9ApRZeCC7oopU2g8AiJFzf4j3C9uGhDxe",
  "key20": "5GyRw6mvsJshBFYXN92mzmheiUmVePycYCzx3QbJcssdRWCt4Apbm4nETmdAzb7NGnzpp5r2n4SvmQzG1JwXMzt9",
  "key21": "3T8V2UJGxbwE6nhLdETMevQuzBk6jfiNN5r3xYTJhQ3ZGvJQjVRJAq4kxZY8gHCogaYekzZ4irFxoGQufrwfsqWG",
  "key22": "3Nk22vKiEvt7j3wqQ3eiRMBSAbTtSVLQr8MCuMmLrJXoYyQgHSCjPBTaP1ev9VhTeMmLoanqG87DHbdno1jouoRV",
  "key23": "2UApgpSaGZcLZKS6RqWucT2EDeMmycoaSrx1Dk3pAygrZWmiyF9RXasWRx4TGKmoDdZDyTdXttoURxKdLKy9K5x4",
  "key24": "4ocsbHD3ANXYvJiQ7u7MjP7zxwCgX1r1ub9qU3gEfEYXF5DEnVzzQB6D8N93z99psWd5HYKyiM9aq5iyTm7poCHj",
  "key25": "3QboxUNJEAqRickCNVvK588nkUuvgid2bn6iUaxg38tnBUAbNYy4FtNLkxkCvBL22JcyDYATT1QdjefiYNsQGjF2",
  "key26": "4Kj7uX7n25y36YZE8uC379DQBad2ULtyBh8enpjmamZeQSj8CXXmLyeC3H84ZMWoEsfGSQBXve4poY6ZMKnbQks6",
  "key27": "4G5HnfnvD5UZZQPHMaxQUDib6gsFsBF8qme5fymdhRMxKEq8U3sEceyXi47TQMvywy7U2UoyCuUjWpNWWWpSbx1e",
  "key28": "3sZgqgXwmGJ5Kbo99YJHvMJzu8bruwGhuaB6w2ULrMtC7Q6pHJdp61sw9UFPJmCmaJWZnv3fNLWAgsvBBa9qE4Ra",
  "key29": "5sQVbqnKhYDDVoW6SkHUfkzATNN8NafKQnL7DcNCgPsM9v1fkbVQhJ5N3GceCKzc5kUCbe4RaeWvsynp7Sd5nKR2",
  "key30": "5qZewoLHLcVFCaVmXDd7yEj75ziUBjbrpaHQNMBr8cYrgncSeoTm7v5wKYumkTr8ghsoNEW3uFv8GVtVVfPNbcta",
  "key31": "2RiH8KHvRAcAnhFLKiacJJTVpyWDjtQdRgsamcSGG8Pgfg1L9Ti9wneQU7VNpKdYiANMnZMZ6i867Hu3QTdoAaYv",
  "key32": "4f7JGF8Rk1eyKvXAXUL2YTypedwXnM7L6fqYA6NkKUrNHXSV14C2bTdbiHdRMUfJ42YQeauv3SBZ7a4pZq4M42Fc",
  "key33": "4V9EGa4b6qYwxSrZb3NHwSENQJhM9onoVYoa8wLRdMsSyETFntmvTBnY6pqbXt1XZRuwcCYEdjBeVj8SSAJtJeLP"
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
