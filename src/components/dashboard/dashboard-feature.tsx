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
    "3u1zEpMBTZNDk3543o8GvEnuiJnnREmjPkjTj1Vm6bj1nnFX8Rx3hNDNHZXRtMPFFn8aFzXwNLXNpEGyFwRheVug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ugMmxvRnk581MVXwX2x4iNQjD7j9DL8GDXfGtvgBiBNaUg3v76ojhv2omaQqHef1TavujedjxuGVyXGGXKkMET",
  "key1": "2gmjdUE6V3deN3niohfJbQd16juKZwzmofygGHXT1zknhSP76tjBFwH4QCJQM8Dv22JKG1n5f8H7z1va2UrGZp1Z",
  "key2": "4vgfwVCrNhxeaUGjFoaXaUXp31zFdispoqySvnLJ8KAfac2BC84EXJGP2DmqWMXsxui93mNPU2NGyS7cuaJRqGY1",
  "key3": "5vuqACHQpdJqMGmJyH8Y7kZsdnpdSqi1ZX97YsgEh6Z96qFTSkwEqK7qSv3Emxrv5qPotkQkNFzHJHhTQTfMRhP5",
  "key4": "3xjon2JTwh4FvnVxRAV7GBXjXAskysTERoLERZnWH7R6XXotNDyEewAyGxmBeZrb666NtwVUdVeuqqianP5SRuUp",
  "key5": "RYqtpTnvE4VKpeUa3AUuFopLQX4Yjtf6wJNqmyrC1FjCV3vDPcepVPjKJDPEo3TvzbSVkdHLpG4WeTtMVTGbdBM",
  "key6": "YBuTpzsUH2fCFRSLjXBTva3C5Ba1EDZcauoxrDyqveJWLPkHgdTVs2SdEne9r5ev2oHWs5ZttRnQKePbrJJ8qNn",
  "key7": "2Xpwn1bK5BbJT9Cv5ndEGQ5WR4G3kUCcxtqP4skwURaJ1UtemWKS6aF4kNYYPa6Rd47X4jvtjJ2rhZTkts4gCULm",
  "key8": "obXSnBgfmKiA9cT6xEhwtb3rL5SDC8cXf4VingnobHc8F8zCBS6c57u7PD68Q2hdAHyzGbLsaE7QgTv224uFVu8",
  "key9": "5XkViTJ9JFgnGhac63v6yNzoSvydGVUcSAvPP5YwNjB9eRCzrR4JNAWAeRecDvnRsm1KGV1xY4fQERLqu91aDUZb",
  "key10": "2vmx1v3t3k6PLUJYmJt9WSDpPU7XgUEHdWavRpU3QrMYJiy1qKZGvg8kkD2gFEo6tXz6MMahJFUGN4qqxsLjXWTo",
  "key11": "2uyUrcyS2vGRmbXnTLB4XisDcYtpUVsr6CxQp6W5JFAjCRnQ8PEKaHpgpmnNPoMJGbk831PaZB8RfkxxPfQujzaa",
  "key12": "4vUZX6WKDExHwQMLL9UJ5Mrag31bZHCwUv4E5dfXYGjgiUPxqr5kwp637pxgFRksuuof1TMiwwyZ2vjgkWY4RZdF",
  "key13": "54kwq2LnhinQEMQ9shCnnCKhHe8vH9Jz1HsSLyuqpKhQWipvwSYx4Bmx68LaVAHDpbSZwq3ECGiMahGhEYjbkBqn",
  "key14": "bhshrUSGjDhL9sGx8wCYGimvWPRSEo6TWLyzC1eBaaD5zUpuVdCmuu5o9CVFw9nmuDMgXRCQHd9MAbVKTBnPXaK",
  "key15": "4tSJMdY2guy68p6HqcbhbvWMaACu8CtzHYZehFBmsn4qNMuBSexLaWGVaVPErXRXdMphRdXuMbXDqz1MvrKds5tP",
  "key16": "5iRbGnKQZsUjhqnKxxMPckgueJpbVjSL48ZhfRNhkrshNZG8yXLUV4NioZVDdPSfD1TpRZwLN5BAYbDDyogfuANh",
  "key17": "5HKac8UxrLmEpe1hEnWr5AHaweenTtqfvxAEo8wiFGAvFkioZwUN8KHyewPbzU7GAA5snx6TjgjnWiScuPJLNJTZ",
  "key18": "322s9gjUgRNzASC4Md9Cw5f95ZdwW1vWSLYDq92131khxtXLkChfUvzdKLNcBW4WuFufKAd2z2qggCyCPV2cp7BZ",
  "key19": "MrnTxZe5ZeBC5ryuTnREuNU9LsFhZBYcCJqWwQUYtfQLT4CMcmSidDrRdE9XSjiw7VHndBLd2hbPZ9tKMj9QRYS",
  "key20": "2DtzMMUa8xo9Aan4vBu1WuVRauaeK4QFX9gQ6FPdjWkaqKC31L7oUMUZkJb9c9wAL1ij3knMaVUwcEV8v6Bq1HM2",
  "key21": "5ymWwprREFJk4FbBkHvXN9D9TdHxyBFowZ7LKYuLVpEgU8yjHom19uppqmBEg1JVvvPv12EzoQNy6r1xQ3GZxr1v",
  "key22": "21NLjEZqW9PKuN5vqskHEqgFE6weQgNFWtm3PjnsfLGTwdBE8gabxijzUyfwRXRWXfFVyp3i36LbvXitQEBivjDK",
  "key23": "2DhPxHBNu58X2Dk1KN44bevs8EurQjC4FQZhysUj6bvPZMoQ3jtDuj8VsQZ1yKQ7w2km2ee4krVTHLEtnvWsmQqr",
  "key24": "4EYEzpxD8ZMRsePB1dyqcN9q5Vvkb7U4KRCSsF2cuupiFp2e8uy6yMrzPNBnRTW6cMGXqmxirK6KdhBFTyWcTpwi",
  "key25": "35dWJPWpRPNq9kc1zHpkvh1UQki1tA4h9iQvDJFdhvVULyUu5XA8b23j9rJLqji1np2tphMrpPzdsUnKzvNnfh3h",
  "key26": "2Kmtq5uoD9hZ8ooVCQ4noNhFkaGnfRCUYWXPqFSQqd8GXnRgK7C59xm3cU5P7Ri7XmSzphnETsJxgMRPhkGPheec",
  "key27": "QtHYmnZc7ePWFmik6CPkJdatPE2AMenj6WixxduUcCGYLYktXTg1ZqcY3jhhXuTxvBdcV9gejeziJdb4oreNFhu",
  "key28": "2fk8huQ4omKjhK8TDMz3WMLqbApYjJKfd5zYcr9xkB8UwKL7BvSTCGG6djFpDhN8ip44PvX9vauGhcos8Sgnwq8m",
  "key29": "5fEMjLLHEnmx8fxxbNEFibpF28AEKCuaZ4sEYTismWafKvLydSmLY3pQxsaHDnGxyTJ4CkwTC4BTS2PJtioZLYib"
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
