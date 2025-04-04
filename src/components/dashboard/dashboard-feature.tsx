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
    "kEbwJKUPqnHF2GWY6bbW6qvn6TtP8RBr391jKMsW1W8v9TihVvLyV7gNssFKvgvUWw32N5N4rW9TVQQ8osDeMdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EL46zgGHk5KU5GqxEESUjt5MrSZJGjpQexuqgbhy8K1Xvf3wCfrhGmtbpVFRqccPkViuv2yYRd43HoXrggAjB1G",
  "key1": "26po7RyBeFxdUb7v9JyfwVeJ94zBXVGSzRZi4cM8wGD6sMbfjiWX53iom3JxyyZNLMK3t48oBb7Lf5SUhmBrZCRk",
  "key2": "5VXA8maAmqQ2j23cJLawstMvzdrqBh6sCDdNzecYQAEP5AxLbEzAxZrMPzmXBuEK3gF6o2oap57DHMkjmUpDFJHd",
  "key3": "3DRjCGmhQGajihdXLzqMfgVyF2YEvZwMWiDwpiZckFJprhLqtj91wpjYoJ268xFTF56ZqCtFJDPMpwBJiQfJN6p5",
  "key4": "2kfErB4bwchjD25zF2Qquaper8ZvcDyFSYPsJdNT4jxJmuDYUWTHGoqP4Zg9GEgKHvsS12LM735mKQugi8QK8woR",
  "key5": "4wKGU55KqnAzgD1UkGoUALXg4o7cyohQW8Kax3gbbYSi3JZpXExPxdX6QRqC9amEXGx1V5EGngqqRrnb4v5F3Zfc",
  "key6": "heqrKKQdDhnnxVRKbKPZKtuNXWwcVByh9GcS19rdyPwhWLL8CvengjhE2a48Pvzm7z7NXRzK4uQa2HSscXyYATb",
  "key7": "446PtYxTihqGbffWqUCXitKAmbs9kGucbmAUu9igRw21EqUj6BP8GWQyfpAqCD4efTF9m33eE4m9itcx6Jgry7Vm",
  "key8": "53RAfnf9PYCmdpn25dwxvo1Xb7WcCzGWH3putqicSGFUu1QZB55bcFRECfiSpmj1PyU4dmtXpxS82tuNwfJsoFZH",
  "key9": "gEsgoyNBtVXfbLoyUm8cEpjhuj774YHXSBXWqqmq2cuhtKaSpPMFTx7NXyNgCwrYN2KxS45tfa3Xmjn7nkr8wdZ",
  "key10": "42qTkHGyTqaaWhSvUEd22AG3HW46gME71QDBA2rQk2FM7Up9rDHFnw7M1KS5T3kbUY8wCGwQQJiuayrYjC2zyRVG",
  "key11": "3if8FpsLAoxzih6f5aVVW2Zgd53r8UMRBCK2hyDKfKf3x3zF8oPZXyVoJLZv3HEFvRFQbbHNjMwkeJjtp4e2XaQC",
  "key12": "ynVa9wwaSvqaor9oHgnsiD2TCVvZirjpLo46unfizweSEmHzE3mJiAqU5QLnG4pYDasjmRmGHkYhkgRgWMnhWLB",
  "key13": "2EjVLoSQsccuSPhLBupgKEtMqYLsvovkWvBcTjK2QWfAcAXWNejDzFghrwgkwbnvKUTc3FwSs1DwajJEyKvtVw9z",
  "key14": "37RewnQfNYiQWUkkWR3ePBuEq6vLzepytMDfnwx1z8DC9m5PLBVVPdKjDZFF4W6nq6zjTkuTxMPnWmfrF7LgR4Me",
  "key15": "5xN6JGgsLQRDrRABCP3LKHFX3kJGRa6Ujdy3VTrrScV4qJP6xontWobphDygpWTNLuu4F5vrjf9KRHkTXAGogsVY",
  "key16": "2tCg9hJhB5tD18bTxm22XgUZpVhbrRCB5ucZdR8hB11jYPEdGuraY9faQtXeAySJgvvV3MKixrdGokoapKb6k7ot",
  "key17": "8afHTPSpepMXiCj4wujhiRMubkvxcrCRmaHRktFkmTp8tn59uw2yvs14iEReMwCKmGpRGKCK9uFyyZf8H8y4jvg",
  "key18": "47qNGa1L7xepQsrbvyziKAdgKQt3oNgxid6QykDUWjXMVbFyWW886u64DztQpTmfYkC5VvnE6DNZM4bBDLqAshn7",
  "key19": "oxj8x9UToWpM7bgjB3dt8e8iXUpqakSeXKMbvgyexasJ1k8B3Lf1wG9oE8fLyzUHyAV54986pChic7bNpB1wkaQ",
  "key20": "5kVP82rbU3Y6gCUpE91hQZEKZ2mAvfdgMrkRJxF22AJTkUNKG9EHSZfwi1vS34GQTzL4dmHjhP1hzZw3XuAs6Qns",
  "key21": "666df42dgBwvX8nN6tCymCuiQJ62WBJ87tD4bTiZLWkMNG4mrUk5BdQpVZ3YdwRos2xtaiJ8uHvyp7vjepVHvGST",
  "key22": "2q19w3VFvjYLZE5QhVeRdFftNyuZNKNKFxhZdTAC4TrMR4CkGYpYuFysQzyJ56Ud3WiFBbtCEkHo92owdefUyNVq",
  "key23": "64ThKupQPZ3iLLvp1sLG3j7KuFC26z5YSfWVbSxNcrszuVnYpgT1Ne2Ha7sY1esrh8gdimRKDLLAHFSoiMo8zCZL",
  "key24": "5vayEJ8RZAs5sC7VRGuqea7oiEdCDMhriM1gS8GCJzToU7TPHGF594bjWWR5ALz5Yqxy6ZCMEQ9LoTN7o6EremcS"
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
