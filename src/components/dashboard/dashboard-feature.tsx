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
    "AN8CyS545sqUfCMjXTTdRsKQuVhyr31QiE2JXEy2s3mQiSZy1xGayWwLfgi5r41nSycF8TxzUQWdR53LMBsaPJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfvahMsKjiJQrnrmGaXyeQwBA7fCYcP3oPHdvs7Jo1yubAfTPuWTjReGJUC3PW3VtjZXYvXEUqDwDqoc5Ye8XDC",
  "key1": "3VdWBQVtij5qzh9Y5njVjnrGMujypWqFWNDBgpuvf5JZrdY6Snzf2AgEFvytTTVMju3NJHzZPjTc3dWMB1AWAf5c",
  "key2": "3RhM6np8fwj4jsDHKT9hBNicrWHna8HkP6DR7x7ipcx18kP1migNa6f3nrPtfBeU2so4AN4jeaaJg7gQv1E2wPyZ",
  "key3": "2VkA5YuvcznihgkJKps1eP3XCd9sNamuiJR5UfxP5k4UFQzndrKbmMWLhHjT55bga93iQGUg8DegwKqNeGS6VPVF",
  "key4": "3qQWY5pbAspFVRU8JusrGU1behaXjCYskCrfkAfuTSL337xNMxN7iP6gqRF5FY2iy84WH5GddP4djqkfdbCQcnTR",
  "key5": "2JtWZNMP73yg1LFQyiMPDyjoeyxCMGJzut52aeg76rXsqzzCDpdRT2o7pnoUK5ygDjPBx8yBYwLMheG7s8xXuX7g",
  "key6": "4N67f9J69Ncn8DGc3XriFT1jADxJsbA4DysoeFmVkXcEEGJYaUbafhoyBzCgH4KPiGSt2NqxBJaHt7XkRUdDZSCx",
  "key7": "4ep2BXafMFa9E5JKuC413BGzhiK6mcSSa9NvitCpCkMHnxZkKfQNgqi7o6VNzdmteadhCCXgAXYiA7bKr75BF4N9",
  "key8": "2BVd5t7V4qoJPpBJEw2jBfPqkRezFXgAv2YQqzEPf8UpBPpBvSGFL8qbYN3GCsZuJPkcu26SKDV9PHBmHVx7UTDR",
  "key9": "3btCQR7A3aLfypeo5eeThyfp4uqvqjjPF77huDfdZq5UdgRdB5UD51ffmdZ4iNo7ecAnrd1VoqbtCj19v5UCXeJq",
  "key10": "453zJxAonR2fYKn6UCteMto1dJoDM6KVacUYTYmmJ69q87NJaeuvGSU3XzowJy19kGpgRdA2uzdkqXGa8ug91aeG",
  "key11": "4y8ZGkMLt6iHc6KEUyXRdxux3Sa61DVpKViqJtZ7TUHKVku2LgNjPTkq4B8PfZLkDyS2j4GrvVfiTJQ8fNB13a2i",
  "key12": "3KddjuheNUvFc2ZRHLbrJudngCFUvkk4cLFJEuuS62WCknqcSdARCo5Ms88sL5jUYtPnwBw1ZszEMJrbMEoYs4dK",
  "key13": "36tGzmkUZJrixdEJQUguAfJ5X6AaPuHm3ggESTp32RBAJq9eqrqpfRFVKmmMuNnVPSKzH9fAdndG7SfAUGiPFJ9y",
  "key14": "jngJW6b1DVXfxCEQvDivE63KbWEJmhTM1Kzbyvk5DhGbCpdoaKoEhPpJDt2ktUoMr6nm4Kdso4PTA4EE6jESuzN",
  "key15": "3amhcqxacbib5xdFYWLWTZaGiiWtjP1voCjcV5PjWmh813JVVrQBN2sVuoRjcGmkUHiPy78DsyCnSsp7aPuwKa8t",
  "key16": "3hkGQgk7xoxCJYZNpGWVw9bMVXM2SznYGKKhiyjwJSR2DHfmdRtefMgNb8mERe4sAEmZxXWVSF4uX3b1EZrxGq3D",
  "key17": "5fk6Xw94hChsA5oQhdhfqncjjV1U4YXRKkXGibbCVZnG9y9JaPscZSxkF41fWnPqPHkkEZhPGqs2hhdQuG5YAXM8",
  "key18": "iZMHk73aRBPi4jpHxcVaZDiFMC49yUg3fL27NNGTUeKFJAeLNF5AQCLGDxM1MmGu6Y4TEK4rm2Kp1j5dD14Epq9",
  "key19": "4iTBMnyZDGeiJTtHQV2VPXrs8QrcH2pecsS7TU7Hri85y9KBkVHDpqHYSSmPxmjvdQbuL6jeDDvh2Ys1Vzvn88nP",
  "key20": "5qREs9suunu43F71bPnMuzBvgY2huaYvw6X5vrNrEGygb8L8gZ5EGTJ275aeez22SKvMSpL2bdww817UY9jRxNUN",
  "key21": "4BqXZuxELbffzgjvsWmjRXUeznSySMSpHco5cdawRFpSNhgu6Y34q3QfpXGgqn4VTvow5GJEN6LRa3cKLus75TaH",
  "key22": "5nm5SG5Yy7TfeK65bj87CSGXR9HevDeLQQfMGAujZUpGEG1EVpbxtHypFNY9Rmc5F7p6LanStZu5SU9HQfhbNhMq",
  "key23": "4s9CckhCXhXzj6E2dxATs86v2ACQm2BohEad14XqivbbTP6NZYn1ERfHSBpnZcme3wqxKFHgQonFVeppbXctNNzU",
  "key24": "5Y8ZkoagWWtew6eFHee1GWWfcUB6gtaFaHhnidacdAZWjUr8T5HRrYqgAA9XBFppgtEdgc1uKzwZEEJqV2VpczQU"
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
