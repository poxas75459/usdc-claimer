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
    "ppX1fwEH8judY9nxgZz4tkg8gpW363HzmiH1EfGukjGbqynPLxyETupce4aKnPdafNHDXZAMdgPxsiVRsUsNU6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "euHiA9itaJ1A2CtgEtBJA2716E4b3Eskq5igtRDiU7d4gasLyLn5QMGFjV7x1chfZeqF7gERUVsjcTfhxN4RkKz",
  "key1": "3HusdjihE3HLwsghHBFZ3H48a7XC7cE2VdPiB4xceFwe2P9unDNrMHBomwich2zRD5LZU2eXDzAoDQ9sXmVh2aBy",
  "key2": "2cYej9F5fmVka9ZMUMQ4zFwifZAMa6dZ8TuSMW4CUUYuStohVPeMrdyA4yuFRJ3CnaXXDVf6Pj2PH8Ue9Wevr5Tt",
  "key3": "4hVmhJcGYZsRy59ByjvrzUdap8fiq3FjaGsHrxQoQZqtCPLLRXTDv99NCJoHYx7B97QzDVg4CLpev5nvhcAxLFr9",
  "key4": "29tootuTS4UfNmePxpEo7qJipdTprjrdCGyT5P9aumvMQ4GDg8qjS6FV12H7RaPbwziXBuz2t8AqjbxGJ9KwXpnP",
  "key5": "42TCQSjcrNqdaqWybqq4zsdXLwHahHuHwe3hFbxdzHzpwrt92fWaomBSyMfyVVr7MKJ2yPJGpjoSd9522yVpH1Ca",
  "key6": "31XT82AuDmYmDGA9UaHEhUC7qSDnazquFt2mcZYHP1rp4inas7kyTPoZxjQc777bnKetmQMSFUWq7KMk9JfN92SC",
  "key7": "5KiegAqp1q6N3s6g5X6DBqTuWxToXU8mB7sYCa4DRGxE6MJsNpSCNRxAKPKgno5twijCFjwxtLg8H3gCG2QVazeq",
  "key8": "4Euj6jQ79WYENekEVwnMo2MLWg3eyuSnEApYR1Nbn9JmqD9nA9d7TwmCGANYUKiQyWYxyBmPFYcVrMMVzsvDjdws",
  "key9": "mV9uyYeqZmS1ccDUj17BtCgdX7tuvRX2GmPWNd1JMabzutTpgxRCMrc1pLLWZoLJ21em256vzpmC881cArMzPUw",
  "key10": "4HbFDp4BzMZKhLn8qurREusuZa7VuPjV1ZFs5K7qmxDZ6iAZ762xZf3y3SxMjCfP26ETczpphMHGbMFUpvotpQeu",
  "key11": "5vZ5z6AEUkEdcxKct2iPdDrqfiMQjSefyFN4firUmWQgKrfce6vuQH8WtdDPdyDihqurxebpQZBGnW8ofFTGE1Wx",
  "key12": "xziU7mfQtCbWTcUHoThKgckq9GvJ9kEDq8yYk7jSoE8jzjYbqJCmeWsGt1yy75GG5kY5bbnjf6YxiSrnJ9M4AjH",
  "key13": "5DsZgEGkiwbrpgFZPFvyrpw7PhLoCfhxdt4MBrcGdXTW89iRoLazCoHWhuKdZN9KESqxYMezUQ6Trz29Lb7PpiV1",
  "key14": "MR6TkiETcZneQenkKVYUwbuqy5XrXVysmfaTyDw6MBzEEeGHuvRvv1NP5qGvPbnZJtQetgaHfgqqLHsmf1f27jk",
  "key15": "4gSZtKdV7CnCsY3BPsr9PLU4o869K61puR7S27x6qSPRhk19fck5U9PuggYkdRDTi1DGVJ4hzRp6YE525oXdWVcZ",
  "key16": "4PUy19J9XUjVr7prB4ph6rCXewRp2PhtYFSVLAXi6G8eGMND5QdtCNHfPEPyMepZKbjLZQc2B6noFgzy6aegSwPV",
  "key17": "4r1oMe772H54cGxPweYmTzmTV99Yit59CvRTdJHqqHzyNYrhD5XpPBNKMLmn9mujGV3AjE23ANubmsmVp7GVXmjF",
  "key18": "51Ue27xbjjVzjXPR8cvMVQPPFwAuoXiqG7KnXcLe4sMHPNxQQCnMK4GEZuPJqtCiYSSx4YcJ7X7BWqVq7Ft4k9Bp",
  "key19": "5wa5Y4Qpk7e2tjzob3vashVdDtQHZSotxaL48daeBXScDzk7kpF51FaLkq7TtL3WRzYWWj1oG8e9a79bseHMpKYB",
  "key20": "4ubs3u5dTaadXcSnNvKHsnbn9nksug9hHZgf3ozQF9iD6UgdekytxArX3Kg4ukEAFpkzeyCzBeNBHjk3LEq4auFB",
  "key21": "4P35cDKxK75YDhwD5gJQ8oTo5fQEA9JHGofhAWLarLr5LNks3HMEqouCMDssbQz9oBNb9AcKvcDDhSeZHF5HCs9H",
  "key22": "2qKmCv6tVhN1oz9RoTZ9x8rhYRUjVm9u6WP71cctGBn6f6QXafrke3vzsuhqoXgCPVkPNjE1qLTCoWNWF135xqU",
  "key23": "4Uk2rJuDiU2E6TtpntWieSa8zweMYkoFnp7Uk2KsuJA8jc22JvFhwJaqKsHm8o4KJZZJfsyYPv2Xyr3v3Rvp7CKJ",
  "key24": "W6QovbyD4Avo7QJnjCYcSo4uit2gUD5YPPYMwAq87GhbduBnnpZbox8z2UECTQXTCkKDH3Td8zf2FhEKEVBjFpm"
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
