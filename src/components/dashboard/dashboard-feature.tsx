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
    "4PTo5Hx8FKnXXB8MR8ggQiS7C9k5UKu2zqQwx6DK4bMJHicVHMb2krKw27EkFqZoqL51eT3t8NAHHyXLuMAVi9cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H3iVvxeaVTeLpMrNmZR8L4jQGmrFSs25tvL9phqk856U2hEqXMGGqDDT49LT5zB87Cd7g5ddTGajWM8bTzenzbi",
  "key1": "33auvqudLcMjpuhVfBoBrkeWvQXBth3MHVhVxXmbRad5rMSShbuNfAvQgkA8BVsgYDLLFVEffqFn5hFvi4h6FQDY",
  "key2": "UQv1FaBz3dWSvqMsRWrzZQtoEuMy7nq3tUYHPHyR6zb56LJXVmDVLhWbixdJxcBVFbyWHpiGqtebt8bCS1BtKwp",
  "key3": "524Zg5ngv1RHkDYfMgbdwqdomgfHZuU7VztCydQFcG7tPynkdy878zMoSRnC2caxsDPqx7B5dHXY5h4ovBNwWG64",
  "key4": "4GFsBV1ZYcVgDzhpgrqqaV6epV8svsS7xKDrg3YdQByNhjGrem3pJTUrwNqEjVCGu1zdnwaqPtrhJKEWwZAhAwdL",
  "key5": "2cvfh5ofDzD2YbhjGF8wy3kWMNc3CF2HojbYgEyRXXvV9mpj6iJoNV4EB3ZeFUGRUNZN2nc1oNmbRS7woh8NdDXe",
  "key6": "2sCbttK4yz7RKhS5PUmru39Ei9PWXCWJMB55Kr1cvkRcBbALxyGpvySyJKNe49Nhf3APTAXzf7HqND28wHdUYVTL",
  "key7": "dwrMDjZ4BEuyrReU3ssGAktBrYyjtLi39dQrD3KMKsRD5DuCJMrzx1dQUwQZRW44o4fe9uMreenWVUbVf2Zh8gD",
  "key8": "4Mtvwe9qwXkWVwx56EnjjACnZ7oVVmJnnbHjTDA9j2v94cjT5DB1xgK2K3XbLurQkaYt6zMj1x29fZbaHMQoT4LX",
  "key9": "59tEtbJuyLBhkH84fAzs7b7WGwxXzihTLzcCBW3jzWPEwfSkhJvjpQCdBCoqBVRM4ZonkoRk8ngcE2igxET6odFo",
  "key10": "53F4YCcBkfXc2YMwgsL79PuguXTRkuq3VJ1Saw8w8Dzo37qioNtfJQ8B6ktZMXaLqs75tMKscLRdUFWWCVYdTXgV",
  "key11": "LeA41y4DEjVEJ5WmCorj9RnecQPHQNGHHcqnoP19wGnde1xYUi6b4vvehcb788WfTtpW3DsutMfLwMUjaNusmFq",
  "key12": "L3mKjN5MdHqWo5JA32odVTEA2NhMCTihQkjG539Sgq1dXYLTtqB7xGPBCQo5c5RcdjbLRoHmC6NsYEKN4NBTDdy",
  "key13": "4qWaPYPEJwaiGuvMLBLALuXoSeePkP61McB6oYKnw96Kg6mSrFKjuz4TDbUzaK4PGYbsHgS1kC5c7gBe2fLEWR8D",
  "key14": "3zBXXCWtGqsEgbcZPvif77TAtrWuUdNxbX6smKPVWD3M7VUCm41HpmHBCjktnLMyNeBg5wapKYmfYuBevCNwhPre",
  "key15": "2dxY4KcXUYLo3Ev8LKZcEjxEP2a3B8v1MvLX7nwxanmhvQwuPwvmb7ejYg8krzmbTBSe1SebukWG8AyspdPK5fMH",
  "key16": "MW5boYvyH66kV3qxJJKkstc1278s74oTjQsYx8sSq3qA46Qi3qToZtqtwtKabdEE7U2XukxjszybMJkusFw47BZ",
  "key17": "3QDKDQAncr1yyiHfDSsr9uHQNdKYVNK6NfQnN8QuSZXDusxntRX24L61DrvejgwvpToe6BrTtzNzS3VRLJiTB8cT",
  "key18": "HErq9tzLoVE9DDkjx7NZDoH8yypCDQrH3PaKv75HKxLEECdAQBWMWpnR8SPTmKsTsnUnJe6YniqrcNPGVo3Gjfp",
  "key19": "4dGJWdrJXgbfodGWN7UjxfCfH21nSgoqHAz6KwK3z4VFsGLZ7idh1zdfEsVxqmviKtezxXiMsPi9ZRPaUroCyRmC",
  "key20": "563yLY6qoNGBTrUG1A1zH56W5xaCESEdzR4RGBcftsMPNiy1suSNGctDK8RpEnvzVmgz3KWLP6rcGkWHrzdMMURa",
  "key21": "5UFooxDizHr1swiJvCTSdgL43Mna5s98469xZAKN9unU4YNSthzbDuQq59VkjJbz2KzPvhYetd48wUwTQRx7MptS",
  "key22": "2tXrppwjGhPgc4M2jT8x5SFRVrHFdN6p8j2FPP2Hk3EwLnXhUr4DvYSwMMULxLHyzW6d6opsgKGpGPVXA8Exr2F3",
  "key23": "2i8N6HNPHLTWoH8ik1Qefb6tBpc7dp21LU9L5Z2uMWbaWqnU5SqPGcSXeTfA8crDgCkGY96RFdD7Td9ibHKrmpvH",
  "key24": "3ieAmbXLT26VtARkTAtfJnyY4rNjaZvrMCDfRg1Y7JYFsW16kZcXtFau539bKBTS2L4EmCm6k3Tw2zCD2EKq64JH"
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
