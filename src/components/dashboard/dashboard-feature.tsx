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
    "26jJtCG3fMGVRD3fpFVmVySpMEFKoRjFAtCaej2YN11JCqTGHXc3zQe6p1YtaLc3VakT7h2kp34zVG8mSEqhLbjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWUkjRULoCRs2XZVGKKD2SpCUF3RaFe1gYVEUu5KfLLyjQquiRgkUjGB7BPmGYAGVU656EaP6Bh7pYyFvz6aJeH",
  "key1": "5tfH4DEd6Cm8CoK5mjS9nSEN5LNA2vwGrCL8E71fcsVVjDwZToNWuBAPN4x2fPnVtzH94SnKRLYWgQD35CgACLT",
  "key2": "2Fv1BZKedPGD8EV7KCityXLieQKfQwN25Rk9EwaT16HZaPKRL9Y49TVshgSJTXEQSBEoeHZzCpDoody54ETsZ8bK",
  "key3": "2XbMoeg4pEprASc8D7wTKZVhiwkkMkhi1rTpcdMbLXjcBQ4xLdJrUwGY14kANjt9RMBn5DC1db3d23g1nGPaj9qK",
  "key4": "383f9dHzSr9zaTMaQa9yhVimzXXkDRqxorUCzrDezda9nA1dZfL6prQEZu92fNbWDXGsJjJSfpujaF3eTcUbsCun",
  "key5": "oYwwqYMCHVfbUANsU7F4RtytKaUvg5XK1N3gNqFwsBdCA9QUuTkPChUMP5WfjcwY2fx12pPGWFX6ppyURg4CDz1",
  "key6": "CcDvaNo24o9HHwSmNyttvannfF3jPjHcygXX4CxEtxgS23vm1jsUtuZHnM5fXywweMivxwkspfpaLh7V9huMSmf",
  "key7": "4nEwHvuodMMLXUfFWvMNqGJD9ca1RZQQNdqDradc6CYmhXh44F4VeoUa3bkCRdNStkxFybMSsKYibW7WFSo8LL82",
  "key8": "2DwD4TuYjDWYU67awFNzK7AknUGGS21dhubPFtf2iwZreu312TARjh84rCve2uCLEpMUgKSRmHzZhR7f9bGrTSZL",
  "key9": "2aByo2HrkBqcBJV4QurZApAKWhAgPzVJ8MQcyjh8eBvktuDQVoEY6UWirCm9jnhVXUVMGpqV84zDSjjyx2sEc6Zs",
  "key10": "5VymGRYK7EqwDvLgaieL4MfAWB2nXzJRoRCvpinLvgTcddm5w5BxpauETfFC37M6TUDMrTwtQ5S5Sh1inStZ2P8r",
  "key11": "3kYaBK4SdzvA8yrQFnmuznjnzEG4junm1qyDrKgL7RDZWwBu8hYEmu8YaWWRqeNpuiYyyRR8ZiWzquprWST7LXrK",
  "key12": "5JyrB3LGGzwvY62HamGsR416W3iPtbfuWpL7Y2RQy2KpjGdi7SSHwngsNHDz5MexctLNmW894fWfn2VnUnqZmdcz",
  "key13": "63NY5amXyKkjiK73CRpAtyVFHBDkkTnsAN7eDsX9YJvF67vP3xZQTAYp7The4sFtXWHKrQ48DFqHoe7bdZnSbrVY",
  "key14": "5ftUsyLowzSVAjGXbbv6SXZzgPn9TDkwzT5KN3oENkUfYN14eH6AiBd6gXyz8ZoysJRBhEqrdmsTUrrXK6ehd6jC",
  "key15": "44YKeaveqp2Ed7PQ2BrRo2xjfHr2pVoCM6by4y6tvmx2uoaKoomREqj2wUzdX1GHudFpXkTs2WodtCZ66QdCy3DN",
  "key16": "2BhgPimyRAskwH3EXF4Vb6kq42Ztpbry22UwakYLttpnPyMXusnBTZ2y7QkruZdGJecN27Jk918c1ypQmQecdqjL",
  "key17": "4ujDwC42HTMBLzELV16SS6ekxzU9sWfXk71wtDy4kN9mVSo3PNN425HjEtUVs9JM7G7cDVWYohwxiEKo56vfbRnd",
  "key18": "54nvW3xgnUCFxgQ3JcA4ZDLXC7UtQm7vNiXuQj1y8RAtduVijKTEcxMFdFWacg12AkqNZQB2D4QrDuGmKzHkfixz",
  "key19": "4QxcUQRmZcPDLfGfDcbnq43gqZnUMZYQQG6vKomTCxvZAkwzAUTpahZph5WTr8c3WxKmyxp6ybbRg9cPesiNtrqy",
  "key20": "5EUM5csVMr643YiPU72BVgKf3fVe7QsaTarCpYhiDFtaGWxQvHW64N3PguJ866uNfqH4XuUm62u6LkaLSNYawFRT",
  "key21": "2wd1FFmpdJhVvQpifVw7drJsPKawdxXamTM4KNh93Z1q28Ezzqe2Vpwqp1wA3FBnev3gf9kCqZLK8o6MD3CJDnXc",
  "key22": "3fb5dwxB3GSHrgTZC18NFy7SL48AfrdpYoN1XBLbyYrABugsJZ4m36otFEch54HierooWXaS3JY4oCXXy1FyR6in",
  "key23": "65pk9QRHgAqSG22ddYzkwRbHAx1fMF3pJFW46TbFidPaYNJzifx68hux4N932HBsVu9XhrDF63jZhDHnuTS6Bh1S",
  "key24": "4wCkMcXWhrq6Adsmg6c4MM37xhntCmjdebZyqVcskpsFcnBTqrhGGbnVpgvUrBGyyfpkB7W3A2mAqZhc6xvvh6dt",
  "key25": "59PtGJEVz1twFjwrvi1DGzN3QF2HKwY5JoQ6QWsHrPdd7M7Qqu6sMuGZs1XP35PSFHKxDoDcJYxxxAwXo2kdFMgE",
  "key26": "2Hgpdv2TJss8Vq3LRpJyQLN95qdgkvez1XHpaxQizgoHfdbbQhgQ5XU3jBtcLd18sS8kWcXukrrYcRPmZ8TQHAcx",
  "key27": "4mP3y61TpW8EfQkFPAm8VQLrLrrke4AJhQqBXy29e8hf1AqgyYeUXgcgTLWZSix4xGXdEBDNJ8Ke9ra6dUQz1ft8",
  "key28": "2cP1rP1EvEsM1UwygZPCjN7f4Sc5iBAqiLEBQzo9fs7mEXC9iYhFuCVHDcVqN9JYk5snWHD4niYaTskBqctwDVBs"
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
