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
    "2N9x3GAKdybN8W3HM1dfG4XHaQGWsixYdcSWMpDbYAbLXpBfkcRi739Cspb3WCrB1YShKDN4SBs84YMushrp9uro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WK5EizXKxaBoQ9KJTNx9dFAQhMQv8CgwDm22KhhJ5HX2yfPKWZQPSi73L841fa7LFt6QhMmEZS7aoZTPMfXHRBL",
  "key1": "5YE4DfwD888FSksaBujatk4Chybypv6pF28BtFVnZ23BBuW8rKzBHeReq6wwJvJ9oH2CJDXPAaKpnxu5A2qFa7YS",
  "key2": "3M2iou2NMjDV661NyS9nBouTP5i2jev8UF8dPBeC8A264aojCsvDkTYNghAS558GrGyAnTkQwGiqYxAt5PQ5Gu79",
  "key3": "5za5EBqqxQM5ymoWUoF4XiWc4KHkVrdNd84L8v6TBTUmvka6s8uKZ4Xw4Huf6FwaunNM78WMtgn75mCsCDiaEDgU",
  "key4": "3dqe5tPzo5Yza91UkqBqtfnqYXVfeaaHdD6twn26RfQefZG7FT1SABt77tFYeDQJ3tX4SWW4STpt898RdZyVnQs7",
  "key5": "2URyqz6MjDNSxrN3Xi8aiNn6Ywx5Sp2vG5FX43yiaqqNqdBSw2UwoAVbcmiAZM7GHc1wjXc6yzGkCUrmA73QMyBH",
  "key6": "5iCXaNtG3SsT3GnNGmdYrniqzHJdYwDqwM118rhd8mkPF11mQJrH3hpXtvCE9pav7dVdvUjZDK6HAN4HUp7zJFLD",
  "key7": "3YwMLwzv1F2jdXuWCipYkxQ6hpnohsr889otMxLwNeQBZBLXqpMwkutAfYRmf4MsbH9pQni2mPdCufAZZQb22gcH",
  "key8": "5QszXXoCmy916rtDU51Vqh2jrNkcwnB1FrxnY4Jig22mqfYUsekug8mqW9Ug3rWSH5YFPbVi8Tc1hzLMe163BL6F",
  "key9": "4WLLeoLBbUndAfQVi4upyqYBgN6TaRumnWrqCDoNidJXwhgvas6CXGDmezXi7acPqA8EGGWXmYWtseBjbncW9EbX",
  "key10": "2h4nSK3oHxKpJXKAq3dCbz5tN4ruJKL3iiW3SVCehm1kqZYj3nd536WMG4r9Mr1djizPX6vcM3h3Y7VhqT7VHxau",
  "key11": "5KWtwgXwryZGXfXuQGJyZw5r4Pm7SuVgmxHF8gySFZKXQtbczi7vxrUXh1Sn9yAP59RD6eCohi26ck34TQHAaXSq",
  "key12": "kR7aX6ybWd1kLGj9BLV8L5YPEVmyEQV8HKAUE1fJeH9Jf6XucVRTBe2PiyuhXU5hafXKsCJAZZ9g1RByXJuWTnF",
  "key13": "2QTWBfHpNq8r5JS9fEEjzFFWWxQR2W2Y9wvtwiaut2tALqZfzeebLo1DGVVcwoJb8g1YdZ3Eeh9reg1DsCVu4bdh",
  "key14": "3MqTCmvxQhDqPmzMk8tBRy9pSkbb1PEkPmVTMfSdXkj1yKkMjua3Ye7eZXPeek1XKUVw6KJhpgYT2uVvKedYVK46",
  "key15": "RjdkLLo5LhLk2CqxonvnZL1kXqoB855aovR2uocPXmvFr2YuVmQf9g3LPfERXfYzx97iBSeiXCnVaMPfiLg96vg",
  "key16": "3Qh8DHM8WQQWwjxbaBKM8rHtDUUn62Lp6jMdQUBeM13Pewa5rgokoreY4juNWf3KLoEotmEwLxx3Q7CsrezkXPYi",
  "key17": "YHQkexycQ9Tq7Q5H56iiMf922buEVQsCLANEMZZULKf9SNfYobffRwAuQDXgDXuXRRR4U5VtppjPsXyHgKG92mQ",
  "key18": "5V83kum3SqEdM9YjQahtFkUgh2CCzvBgsHCirzL3tSuXjcXpLg3QYFXc7NXo6E4zQ1CKdTFjSLMQJa3WXZLkkRAW",
  "key19": "3AiPSB4KdDLjkZxD8yjtsYvKyM5eo6wkH7ZZ1ydCXQQ81H2mxRvfDiSohd2HCJqotiSEPjtYHPp3fhG31p4gsP6D",
  "key20": "4k7FGZU5MGPXfHe9vaYb9qXqucFgTJgyj3qTwhwArjzMds8w4WtgZrzW1JRnueeBNHYmU1pbH3Qg2epgEYdpkJBp",
  "key21": "5cistsX2gK6vPKFF6Ghr2ryQPeT5yLAUdN2A3NgtVrvqNVSU32EsYCSbQbJNGpPquybbf9M8wzwxm8DEZ32bWsGZ",
  "key22": "4ybmx1LoCmaJLsbdHpjo9MUv9EseJCGVNAs4b135q5ugNRQc8C271xShhdKDmVHPxx1hqDNxMtMCuvgB8dETGkzY",
  "key23": "uU24L6x9CHP4XYznJfgZn2f63DFRNTk35TZ4NeqjYNoQ9rvYJm3BusfB77c3hLx4n36hsA6M6kmY9VEPQoECcBm",
  "key24": "3kKTi16J1GmUL58wx1cEU3thFubg7JkPN1cCBHLsoBK8MS1bjHZ9hX56NSiVeGG9yh7juPJALsnr3aHs7Zb5AMkc",
  "key25": "4btWYCvLUwGUKp3J5buEsjpr2Fxs3v982HXK6tGQgFjBs7Fjs7GawKxeaAvG2fVSn68rmcur26FzGF4sB9r19yKD",
  "key26": "5hrrQ1PGFBmhEcQ1ysxYhPnVG7WPbxdvPWMe8nxrXdfU2LCHCrUtaxFxUcVcEfjMWEJ2qx8FYnk96wKYAthTUdFu"
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
