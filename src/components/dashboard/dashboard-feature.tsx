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
    "2JBzYFWkn4dTH9NUW8hyho3pbxrN4xuTaTTnjfsGyA5tCFG6qveKRoLZWtkdZibNmSaThDHGyVtdC1cvkAnwSp5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxGmz4MPaaSVVsj2JgZc5FAyhDXJPYyv3KDKYCxuojaTJh9JkZcbx9rDyYbo8yPXnfSdkxfZ73YiP9o8SxEaHM2",
  "key1": "25MjmGKEGNyciibbrneefSRDZSt6S66VPAYRJGEmdYmeWaLrfyuAWwNybe5CfFiidrrgWxV3gK4f2ebgQbDbPepG",
  "key2": "te5pASpURE6WNmNCNzsCwFnuQt9UHbB6B8Pv2PMHYVMAbuUdUsiBE7degC52NpYnjBU43ahWH3HYGMn5hxT9XMz",
  "key3": "3CYynipwkEVdV6LdudmewXaQy2qxP5UFjfjFCrTVVQL2P8f5cM8AnuBCpiATP26jADDHVhPiVoUyRrnjTvsFwHtq",
  "key4": "3x6iNFkNLpcaEkSy2cugfe6LAbbe6rUk9eqqxmfYa7Gm35SSvikV3LhGNeYo5TnZDYkWScQvgYfF8ZpcCmHwkmwv",
  "key5": "5yPWghM4PhQ7TDMp7LszQdHM3L3Cmz4C6VZ1ViA9LTmrPbSi3YuoddRNMEhEaNQQBP348CFVFo2JNdY62A1aeDjn",
  "key6": "2zLvgjk5KvRMmkfNT3EGTQwecV8BuC6f5hoQ19FjhoC5faViPd1mM4wD6HHbgJe85ca8spUPHAnwh1Lh2mjR78rt",
  "key7": "49fmsKpjU239EYPRPu5JbSSPx9VfX6NybmCinfEY8fV6NSZtF2AUgHbXM9wEaYgN1UCBt6y4uCQocfhFGkk3dPNy",
  "key8": "5JzGXxBriAsUsdMiD2QH8cjHBUHpc4MtByJTZtk4sofJM42PbX83mUznYecDBMWtqBWhvEhKgESJSoZS8Xv52BNb",
  "key9": "4CKXVkqg5TvNyYjhQex5o1kfz32ZY72tiXcRp3hHacJeFj1YsGi1KdoWtLvhYWWzPqLgeVrnWVTAk6w6DE3Vo3Y1",
  "key10": "MwCUwX6Q1qeeXd9uiKJ8wG9orX4FT9ejf2gkjrzwygctDfEE9UP1bVBSNRTs47ET2HwtxrN3bGVKFJjN4A8KQuX",
  "key11": "4wvaiLEvjkwkrYHkGzkqC8YDZhrLM7BSkV18yELgvkUBs6ka4Y185CPKebtL2Uj7JEx6jRUhmh8znWC9kFfB7y9b",
  "key12": "5amo7spt7dK8mpDB8S6ShkMT17mYdMHbaoGRmX1EwhDZczTpC7NCd4Xa2NSowEPF34t4tzUCQb8MaWYa3hYGP7t1",
  "key13": "3ETCSXNqaoPTxD4ksZb2wGEiAizEc1rfjfpHjLrbfHjvKut41EmrudYEATi11zopRiFY3A4MPycerxn9sqpCf47T",
  "key14": "ganFdEWxq95W73cobYia9dCJ7sBWWcppKyhVdGn4DLseuzwfgUvr5EshJRETwKF9AFhJbMqyj8erRbzWdfW2q2Q",
  "key15": "3hXo2eS7L95gsj6epki7k4i6pJpcD6Dafhsyoso8o5xNtny161N7iLDoxz3D3E7h154ungeDhYKKaECKd985V2Hz",
  "key16": "4kha6Gthbjtq9FoLuHoCBgSQVu72vyjtsamK2PMHt5E55weSnZKyYZXpQVzhogqdUjEnV5YG4NxVkmBH4EUdz182",
  "key17": "zVCDdivTBv6MBfJewum3cUYnsvoWyEYr7CQ4CgLq8M3QPFEtrPLzjRzUv582wnfUCjURwoiyyUurUbL2H4bpY8R",
  "key18": "46ogAKbVYPGdm1dXfzJVVwoAyHYKwNhwCEdoBYjjBZanbzxUUpfxMvuDrUsu9FSjsTgrGvLjhMjEP6vcC1oM6MSo",
  "key19": "nERPdnifWmrpA4N4uhsGtUBdU1iPmhVm4uPnPjkPgGhdcmx1dGYfHFsmDXsrSZRndrwMqu8swmTjpA1zyRnDMMd",
  "key20": "3X1dL4SPqQr6jNST5gEdC1E2PHSDbgzrngxVQrqn92KG1tgCEK3uL743xy9XTQnH4o8pdG1AkGBhfFC4wX7uBXGS",
  "key21": "5M6hTDs3Qy2fbPD5MzwsCdq6BiXePrKAyQPYZYFnJD9brrCoqoE1u9q5WGo6xGoeubdKR1PY8bSWv2PL9RnrHCSX",
  "key22": "57BwUky7jGWqr6QNwSFqU4vKD39dUMwokHJzf958EEWfQPhLV54nN1sGe1y786vrVeEG1TpLiwSWXaU9XEqSkLGw",
  "key23": "5fg7eBtRxNPkzAdhA2LPdvbSH1Cz5vFoPFt4sYQGehssg1zjRP7oXbsBHkJowD8Mnu6QD6u2wG7CDjq75EYP9JRm",
  "key24": "3BsJ9fB4Gyy2JDb5EfyQQetqAaN2GbTgCVt77oTheTYWHyLBHYypm4gwRsKnPhShzMPbeEG1e1fR1TVN84a8rBPg",
  "key25": "5fHPbvXAkjsDQyoy1eKCGSNRGEZBJFQXsXA5ZRUzGixUNbuRBnGDAtoK9iNC97eFMPrDjxBXUQRosUVmWtFWp9ik",
  "key26": "3WUHkKufwvBwx5VB2DkVkvsAyARQj8ohxRuWVuSeVXvZptH8iLhq1Z1tFdteLqPp2jTT81Nq7SaUoRmpmkYkbVRS",
  "key27": "2iXg9usAF1JiRqJYUZc3wVPQKx88g79RdBsZDvjek5hRyd3D1TTMp981kmyDHaztepHo1Y48umNp2M69UKrRuESJ",
  "key28": "A2PYAy6uDM5oqpPym4Ho5YtyXRjhJWvZVCWXa8zukh4Z26JTvwxQJhibmUDXNse1LivzzQNLkkSRGdwCmVsoULZ",
  "key29": "2UtgxsmskQLrrzZ3sdSFvYT47PfGjNQUSY6TmraNv9AHJw6KwonEF6u84YirJRry38uyEcnH9BcAmFNSBz5B8KCG",
  "key30": "5iSB77fzRb5SBd475ufZZSYwpdXu5dTFK2kNVRUKkLSMUjUaL1vD1zkWREvQjTUSxtouBqw2WDNVtQBdxoTiKX6f",
  "key31": "5Ei12TNTG26kDtn57x5khnnvLskX3WiCR2TQZvp6iFZPTjpKJvXgNE4fS6mmSvrfpL4bssyjeHdAE5KqtQeTV9Mo",
  "key32": "ZybstKaHadyJR3DPZqMFkRd7jk4hJzsaVRhgqe6HH8WBV3JmbihDDD2cUEZkj7pfP4jeX6TwdNkQz7dqJcBWoMq",
  "key33": "44xt2HA11VLGy5Q5JKrp1jC42Jcgga6WBdqFBvsXiQEBfVEQd2957zpXqafhRWdd8tK6k96CuF7oWsg7LNGVqK64",
  "key34": "3Uzz6uHZPpnWjxdXVD3TYnBofyjMUFeARAEaatj2KJS78gv6tzt1iu41dgnoc3VZcJh4VGRc8y6dFwpBH1sPmcdq",
  "key35": "5DPg4Ut22dsUAazQkfEtzdhJmqkuJWwSVCqsSb93zxAHwkncxzoP8cF3t4uQKJ8sLB5PiMmsRUETaBRbE5UGevhD"
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
