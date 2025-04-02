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
    "4t2RRAogoFb99T8iN3Fis4swo2ykvoXDQLc9KHx9iv2BHZy3v5mNou2ByaMpzW5fyU9J4djfZJGLHchQi6P1g5r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WydiTDZTsdDLY943W66Xher7X1Nr787KfrV6uoXErjCkhwGzmj24dKtDDAyP3x7AvkgMins4AYXjA9Wa9NDAK43",
  "key1": "Ni5CXAjtTTew5Q81FcN2XKgpQNih6TRYBHRnfhtqhF8SHZTZJF35riDbNxL3MjBUcK3didQ5wXnHDAnKeExGXL5",
  "key2": "2AojTTTg1dyT4woqKWGHNyWJVixeEtPow3zXMR5zpRaDuyDAAGWwqkqRYV3iAPjE2kJdSejPrnUZPoT9D7SjCeyi",
  "key3": "3Hpp7cMDMVHD8FnUT13ZVXtNVxhyxA897DM8aD3S98uKU9xBbCW4VATGU4DQAeDRyz6ncmRc4RL1XSzScbpTj22e",
  "key4": "4yppsh8bPJV6E1eZzd1Wq5HYKDzZRPKUpRrns4Y3wSHs4mU32vHc2D8JdS56jf3GttWgCXQPM6FoQh2HfG8hd8mK",
  "key5": "5YK1VUGxur8qPx4xwxmRYpCWQpeEQFqWiQ8Aky9tRzhDd97SSWvvLiPiLRoiDmjcC5Rk8WLDVD1KFnVF8qJJWZq7",
  "key6": "4d1XDq8mo6QhfdekVCusiHFBn7EduJW2Zc1q9RytsgsbxiLuoswLWgoyi33BxyFzAjAfMFNT8oEMNzGqxLCSKVuo",
  "key7": "3Cpgv722ULLcnvZqv7v1V6DVwqom9BxboEa76HqxfQFxhSRBfs8Nyft3SgtpEh72BN2X7RM4LocxuXKuU3j94LgR",
  "key8": "3NDV5Fi82nuRtWHAsbxbUBFyotaWJSE2jqJrJNTsiSEzYngEPWkn9fLAU673cWbPoAbgMPJQoADfTGUuLgAcJFcW",
  "key9": "3vGDhkP3H5nYpp5EN8sJFKdCwRvYVDXWTRfGv5FAtpnAgHthHKJLAKw3LSePdCNzq4gz9h8HFZuLF2RpcUqrN9GN",
  "key10": "5h9T57E7X3wGsEdcoNgEpRSZt9w8rr5X7hVvtPo34kSwta9BKZYKtwAKxDwAC9ToCUkopT6uqtnh4SXUXbwozPnM",
  "key11": "3bsJE5X6216ixMNFPLhacW9wUyoGb1WxTi3e61tZ5qHTBB39cqEaxZgQTrZLS11w1mWTnV51bN3eKLVf8ezx8okJ",
  "key12": "tszPj7Hai7ZEawRTpzdHJzJGaaEoP6HpAkBmQMGsMMtPiUjevFbgQm9p3c8T6ADNkuJtfaBmvAAFBXVKHTARmcy",
  "key13": "4UBz5ELRkZrRjdTngsBGGSdE7KP12VJq4sa5QnT2TQehpWEkvjcFbNxr5AYDJyEDgGFNkjrPC9F9WEpmtXKQ7w2R",
  "key14": "Eo2sNao7DBwPHggLy74X4SmfdkdiTBbU8xkbLJgnvhtrPfYQAdc8TGwLEcGrr2WuLcGhipc7DvpJQNbZoPdQQiY",
  "key15": "4aZmxrUBxMBDw2CKrD57umSU6rY9Rg8xVpkWiqkRkX2NKGAjd34cUUmbhqbN5vTstdH28MyWE3WpydA21NZGz54S",
  "key16": "2Zqe4trwyzvUQCdodV6KjdEAzG9Jtq1yvLngP8mHxtazzLAmSkqpJy6YeL9MN5gdDDZZnJ51sPcrVyCHbJW5gNT4",
  "key17": "2cijzrLa8a81qcbTqfc62qUYN2273hi3bFHWdoy45s9b8Asn6qRA7hPaVzMZsbNntQZw7c622i8L28EtvirVFDrw",
  "key18": "9je1p3Dyxcmn8tFMrxoaXR7BjpjixXcRVqw4D2Cp8jHpuwSCnsv7DzeoWZCaR4ZNoMN8SuhiugAZVoXhfFCrfcS",
  "key19": "38rohFBMwwxSmDQkxuPUwjqsgdGi6EbFjnyz4BgEU2WszSKy3TeUphaXCxAw4Az2KHu9yNGGRnXfnstbxEpE1Zwv",
  "key20": "5iFcw6D5ru1KH59uzgc4V1Q73jB55aGxhm396zWFjQgWx36jJ6bgJLPy25vdTMYCiHRw13Ra6D1QRVKZ3nxRTGfE",
  "key21": "5e4a8qJDeHdrNhzL4ZJH7RDHXCzVr9CidqjxEHweLHH53eEYf5NYvTRAFEq1w4MPMXUrS79j47f8iqvW1S3S8fZu",
  "key22": "5wgGevX4xhaGnv3rDuFLrdRwb5cC5UQ8GtDhz12G2FGnXytormZSJJno4cUJekRDq3M7UnvbVRZ6Lk3jgiTadmw",
  "key23": "63Jq3T8krivnZPiegkkteumbKmHp9xR4kR4WBrupRTCDP48epcA1kYRw6Pmst85EmFbA6MJdHwnUYUT6gA5qB2Ea",
  "key24": "29MdYphVnZ6dk63s1uWWA4JN6wp8G3QboNeF2nD7Sn4woS6Qcz4RNYuVgccB3Eb3eHvZN23uY4ZLsFUKbLMPuEQP",
  "key25": "3iUNXapgXSAexWkDEESoSPV3inLdTRa5GoQXq9wSWytrYN4cjYmZjUNPbCW2PxZcMzGV3beDXfkVjTY3niWre8Cg",
  "key26": "2wwsBCWcdeCgnSdDzywwZxA13iU1JeQJTPUqw8r8nLhr7ntHbvG7AC2abExqiBXbZ6X1D2vJuABSEZktuKqMy25X",
  "key27": "22xSho6FFcJXe1KvS1VrxzEmWnDgyrUFzDnLS6BTVKVnTFcn796kNMqHBmkMBexWwaFLL7jcMgVti7EUSmh9PpgB"
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
