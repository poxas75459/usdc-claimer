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
    "4gK9wjuXMgm46ebneFPesNHQsHqPjDbaCJ1UY2YD7SxCm1qi9dVABNctHasvJ1pdidehRXszmmqed8jPNH6nPKhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JC2iav674VnSwrEmbA7PDg9oFoVUeQLV8nvH871QjipjE4JqAe3zUaVWPjoRQYZhWsmSw5EbNmTpcuaVGkatM88",
  "key1": "4AsAwWwo73C56iWK4aN1trNk3L4uew3NiVcciuPRXFEyJSZ2xhTfVamy8ErNMuwiCCh75o94b4qHuEdi1YxKjR4L",
  "key2": "3qqgxYSJpjKMbmi78xM7sVzSm5CF7YTAFF6UiGwJ4wWxJJWcEhme8r9x9pHXTBdceMpxUQEFFgvBoY9fTXqNhbxp",
  "key3": "KYUJtTUCe5V6qQNTy4mLEGQJgBzoVMnX4nNSNdkzo8PwtWNn9roJqRaDuGRbzQeTwzfVT7CeGuEHyHDudLGJwjd",
  "key4": "nqQYyfuxAxMkNxvT4sov4EqabpFy3TmK3kABrKcRtKMG7royAmdvoqExz5Uoah2kVXqZxFWf8eG41iwoLZSu3Cp",
  "key5": "211YvzFUXpyDfVBTNbqkqSFcz5G9GSg3jECDeoabo51cE41EhfCLgns3UR3mffH6EVydnCYphUxSnDSDbnqCDXz1",
  "key6": "5LqaHov9Sp9osdGKgqNoY8JATLiv22PguU4zTVEqDhmZ3fx2hpKNHMqRiSCpYzcWr9pGsU48crY1Gx3WKeHGiQ74",
  "key7": "5kNjjSpzmJBwGrpVkkrqCpTVZUcJq56hdL2KQineq73KrZyqc3jbvUKQNkJBoZSDLJeQixeK71L45pYdHm2GkSsi",
  "key8": "5aGsc9D77MyoDoJWaK9aUAmS1q3G3b1o6fABurubeptE7yaYZap8acskRsibdc3np4AzAh958q12QD8S6Drseepf",
  "key9": "LmPqA6RMmJUstEchtsofLr7xAXshTCFrZSJfRgzEkwfggDyqt84Q5NFsYEWdYatQpsrfurXdPUb9fhDmurv87EA",
  "key10": "jSQEs7AuwruHuN2J3Zq2XdQSJpzRUnpAu5gHEwAkQkdhbKhn7nxauufq4hegRFuTYiRRUgRgyqfEFuywpcsa78Z",
  "key11": "YrXjZgZyYD33owfZY6j3iLDkAzSrBrG88EgEnjPp4nsCu7zHm9hp4NccDjxo1dFcVpGUusLMzJxLyEAyEVznx3q",
  "key12": "2e3wedcEnkSYdoXuEfzSCs8CjjjbLLuVDgEZDQgL4aETfc89j8ETQEebDxD9V58BQSf6q5YRUdnZwtmm4ZXzYKDv",
  "key13": "3ZXD7v82bC6Rv3d9zVxxhzYu2SmUBemRueug1HxLEBKMcNCMa1xXgxscbft1jzEeukDjFWBSsLqmtNB92Vm73xqe",
  "key14": "2XnjgfZL3xCfKMmUhVpbcHq31TDahkRmYnJVg9x3JfvpN2YsWQzoKKHjThi4CgYuVpKPCoUao9SQhBFLXnMLoT8Q",
  "key15": "2oXXTHA4knkjWEGtv5YoAxz9t8EYqqig2x5RecVHFav2PaDkBEAiAiQeZUFSAH5AyndTVdownGkW4TYVwVNU4eG1",
  "key16": "5tFpoLdrN6876BkEpEs6DkFEk9ivB9M232HxkGez4U3wNjCXXZ5TsDeUAgdo7jWwJukaKF14xmLdtaF1UjWbzn2D",
  "key17": "5iJhhS1mT9YusCKx42Zq9FVkudvhh1UYV1J9rFkCerMuzbBTqWskmdgddHHWRmaoVrxvsAgqAyRR1aQ2qYAzcXEb",
  "key18": "5r33G1u2CiaxUsxYHjKuLGuCjME4cZQPHGgYNsYhnEvuKecMKbhRt221tfG4Sh9J4jSFu41SDpkrFtKjmU8Ww5dc",
  "key19": "52YroCFY42ZFXDqjns2JXwsKNkMRZGLBp9RfvRv4N9mUUoB6MVNbbRvvUzGLy9eM9peWVH5wmTqTaDF343kb83hA",
  "key20": "2ePkiGWcjfEeo7tifai7uVJSrsqC26mq7VYC8x4uprG87noAknkNzo4P7CW4AWT2KUVfMEggvm39emEnMEHSRGTL",
  "key21": "4hPj3i6DvVmDv7o74GBAdsB4BRGLpWd8pcdFwzYNgQaNifrBy6JiS5AanY74LhfXQtcTyYtDEu8gUTo1EeyUZmWp",
  "key22": "2hKhEDE5ihAx57Kz5YSUHZS42rKUBgDR3LyBCwugXMoYo2NK6LEJtNDUfdpoiqeQoQ25yujoWEjoDiN1sSkBFSfJ",
  "key23": "3kx1TkmDqGMQBAQc27pTbyWbVJwBhbYDvJCRWhVYV8ciLg2nGP46WRt4gztsrkiPjrnUwsWtycyjLEmp74bJjAQC",
  "key24": "2pGoxgp876xzi7sbLzhwWb674FKpocrPTBuFKQJpPEQVXjBA4kZuQoWLKAo4QwUXpD6QfzDH3F4xS9CLV9LSe6SR",
  "key25": "4f72GHUpgsadNBPdecA7ot7VN4tDcfzJWBppxgVc2JNXUt2MQPa2RjffSTypdFfs1NDwMUuVDuwxJheuSW7nQcUp",
  "key26": "22gSQGnjQHq6YvZPs1WMKtk4DiK8PFwhMioufy3K88peL5pRwwqGHZL8pvgguvEZyEjQtJ1BpDb1uwiGzyKCkTPX",
  "key27": "3zMqjLCkvmADbyntCXnCrbcP2d9fqAw56Rqo8N8mAbj6FS2Mtp8xUPQju1V1EQFi4EFSGvVM3864QNpYpCjfmE7K",
  "key28": "4H3qeEyNfokXYsjb2H9A6NubgRxHpt29BdNbXwZL7WDUvqCPZCdTucdPMk9Md9nhuxE7jPAv3m76gFKRP6a1DNSj",
  "key29": "3HqSRWeHE68WwMvCZAzpNXeJnziDnKVwY6J6nF9NDDrLhAzvWF8mVrPAEFApJitHomhJWew3zkRbHR97iPaES7Gb"
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
