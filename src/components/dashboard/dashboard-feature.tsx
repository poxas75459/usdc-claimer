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
    "3CkhWR5VoeuoTJHJggrDWBXuN8Rkpqucvd7syriHZSuoz3DkiJwLK7vxwPheVCHZnz9H6Rq8ZjEcrg8Jqg3y3txg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ado6dsnDvapz4HuqmK21ULmDXSrMg5g6SYE1ndpqXgLkZCCVzSAucyk6N9WpxPs8WKh2iSEWVt6fQjdfPT4WXtN",
  "key1": "3UTGi37HNah92kAADDdckmrYULypaqHyvZcViSFJTYj8G6s4e3GqAQBjx53PZZiRGrwDTA8d269FGpKDuxpGb3AE",
  "key2": "25fEVSKi6nyP2p4EQ7RdaF3M95DQ8Njt3wMjCjueC2WK8WdMbKPe3AutM3RfmGF8T7MJV8n6wi9HDo3cW6A8PKaw",
  "key3": "56Ea2qemvzK51uBA7LhG2LkQDzLjDVQTcpRjoftPEEciH761gCjTquPyfT7656H6dUw8YoitZRvaJXffLc4vBFTC",
  "key4": "5R5PX5K3zEL9TVkcRGTwJ8t4g2tpBdBJoXyCx4q5STwKbFFR7sW3kyjAcbgecCpPpCkiuaBFHzqZMNbTy9EKt6UT",
  "key5": "4rHDUyTdS95CjEpSLFkvB18WuPcLPCuYY6RvUpr8VJTmtRvm3FctDvaSM33vTqDXDkBJ8HVANxBqTCkFpVQok5Zo",
  "key6": "A8QMuhvMQTDNaEG4YG4K5Eaa16y3psX79nSUEoC8qDku6jcbJkQgmVZ22GMtyKZFdzunkVhgtXJN9xg42v8ERvH",
  "key7": "ecpfXiiCzAU2QtSvbAkC99vPPohSRerAConEmefzoevCF5khdvaER7NYhhQ6DstdeWdumQmrLxDGmfHNN3kUhsF",
  "key8": "3vGxg4upykdhst6xs9HuVxe8ThHiTWXb4XF2q1pDS2RsKnLFwgYYo5o4rG2xwa59E6vCnsAvaWyQP1XhpVxu7xJM",
  "key9": "sYdDtjFAwyiPbpwbpsvTYXNKHTXM4HtqombMTDpJsfc351Ju9pmvYLAvK5vwz1Dxdp3YSGJTktuhHbmMtHUNVXa",
  "key10": "5BLAurvxXCFP4YyQ1pEL1jJvZ3XzZ4P9AExRvT777NszfrVo9fF5M1axeK5a7NMjkkGnak6baJiYdocRgDcFfMiA",
  "key11": "3bFE38m5xfXi9dQ9eGpV8ePHjmwgtPgHqD5fZ5SDRiqAEiS5DrdUoRieLrDLT5GXGS6QMYy9TJtKq3DoATZ7pHFd",
  "key12": "4wkYax4GEbFsCUgmzsxcDtHXmtWoM9buoddiuLkjQuuDantqHWcKp3fZBXJUiMqCHayEeX5E51FmJSGwkSZBBL9v",
  "key13": "3HQJCmjibP9b2nV6VXfSybXMAvXFpWb32R8LaraR8LTjGvA23cEwMFVvyvicSpdFLoB5wcjiymoMmLjPuskhR1DM",
  "key14": "4wXjN3rfh57M9kssK437DyTTRWcP98PZnLFXzmC7wekZC51xNUsFuZWo3qD6njP9uUxoWfyaL9XCqW2ajcd1cofR",
  "key15": "3dP1U2wHqPoKNGeeLMDuexqyY5chHb9KLGedJCC2xdvouhxYyvsWpMmmUJNdiRTurmgohQcnu59sQVrSCBDXT1uF",
  "key16": "3VyyMdzitMwFrd1TKR5e42nkYZyBRszmVLNQ1rnwfaKDa6KVwKNcWypMd7Bm5tzLLCnEs4gtBh5Rto5Sh46S12Ba",
  "key17": "4EqLQbgKwQawzYpCRssDAmMX3NAMZgiG2SyY9UDzzMQiboCH4pVX2AiTnMvQQVUpAPR7mmggTEWiwhXnA61NTAR1",
  "key18": "4aXjTzK11m7uZDVHanLAXkc48s1g9Jg6mvG6N88j7Th6SJwx7kTsm9GQusQJ1LxN8sQTXnoXWsN9RzVS6g42zyHA",
  "key19": "3ajVSGmYjQTvVqinvmfhtyWH9FQ4gt4hpQ9oUGV2muDe63b9fqmbWdaB3aDKrjivjFtM8jvSFqXfwHrjDbiCG67i",
  "key20": "5qWLU2c8eeXuH7X2Gzq5kSKKpLwu7A7h3HV6m6VbS16fse6mCyojiggbVHAApEe3F1nh1Ue2g9F2pNXoVFgoKUwv",
  "key21": "53o191g3maroJ56WdPJT4UNjaTFZ3wUrWjpbETRgniotqFYG5pymZVBGiCvV7ZeDTZVeueB5RkfjEKtmUAM7nReT",
  "key22": "3Bo2S8ULKvJKHw8eTQxJoqAVEyhWkjp5dimMiDKwM2wz6DscPLNvXoyXBQ598vJkEyN2CXgTdRj6WzWjB9KtANU9",
  "key23": "Xe6kraWXRH63AfKB7WaBYkBxprqJqjaN5kvauPyvfKcRcMqA7eUihn811raChVPuZjxo3xc4dMQBChC2bWcLBo1",
  "key24": "2KdnnDWBEd6gyHpjafrBXev8D5bDNQXseaQL4TrNTYTymFzP6Zwgwkq5QLWPrZ3tN9n7aMgiMaxUav1HFAAphxZW"
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
