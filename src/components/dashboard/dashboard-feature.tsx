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
    "Cr3KfifNJ26TG2rsFMXtZh46To4npBqnjA4X5vuv1erkM1dmVTKpZi6W74pXjvLhAJDNQXteAcPy5LgCUdPouDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fudr9yPNQU13tbRRoZ6vzXdDZ68JSroMQKpycaBh2qT7rABwChc86ha2wYTbp5iGpy5tTGvqQRofx43FtHT1JWT",
  "key1": "2AUMNQn7N3XFADmoRLcxL9wzr3VTCcyzARZfutjtbX2We2HyjRfEgCn7nqiygYPaVP8BfG8N8GnFhgaAPy1ygpZW",
  "key2": "3fp5jfX5hBUHTydVRf7tVZcy2JSELsjGBdSZdrfxWLpMPmSwZPTDWe4Lb52qiYudgSfie2nQffm74eYSurv9kRsj",
  "key3": "3evqPFRr3z6UyNadEKzQKDmyN3Wn7yLtWRUmdfSW4UwdUt7sU8LDHzgWBB6biuuMU1snaMTEbe5FwJCKpZw8XeC5",
  "key4": "4tzDGZuwdMqF8SLLj7MWUbMsnLKjpDofAvG2iL7miz6F8WNq7GRuSusVdHQQiVdaVeeya7cFW46PGM2NxftxVDHh",
  "key5": "5MtZWRwHcTeQkyJce2hvbT39zZZEejKvys4kFCiCq89JGxo9XySntjPT79o8Az5PXWZKmKVG9Cd1k4P8kdjKucH2",
  "key6": "W4eAb3isfHdXmbBo1d8RKsLsY13hJL3sEopvxgaGDkc8mYPg6pD7vfxeoQuMKbtj8WLJLEZMiU2xWzJiNNW9nnF",
  "key7": "2oy3fPN8FYyVVhRrvtVUvcWeWo3wEq7PFBNg3Dm77kAM5zx8kfZ3Fg4uTaMgY71uJ9QdBQbDLydiJmHNz6SpRmmk",
  "key8": "3hrVzazdme6FEm9mg9QtFwBzBVsTHCnhEE9VY5jfTRTt8wWruGoCGqTwtfjbJKfEjdNCLRP43Qe6VHuzkCQiniaY",
  "key9": "sWtzDqXoJH2RE4RWsFrfDZR4AaG1gfomtzzVFBPcf6VPeN5g3caXcFsfr2jVeu3EYgfhwdm2ETpE2z8fS6urVxZ",
  "key10": "z5TbFjTY6iwo6kDkWdgMtCfGqQpn8QZYgwhKF7vKcUPUrkgQWzohDcyttr4d9ZhqQdM9HhmQqarmewk3csDuTNu",
  "key11": "4DExjsiCVmUdki3XGi2CsqkTT5Qvn2hjsSq2oUbqArDtXgqLPESsdZRPfEiAmTVTU6zp7wdi3iATSvCp5VbqTQ8M",
  "key12": "5e6MDx6M7RGfPFebhpXSayLSxYTVvkbWhHhzV9SmBNgoayGFpPsnWJZka19DvAv5s2YCuVSees3bzCAZggNupGC",
  "key13": "3X1aRsEVAUZWUVwAJBa6pbDCiS7GCwChVcABbG3SHCBECnnaguVpZyyDLEkdDF3iCMzv9tyYev9AUQJTS6gfYUkF",
  "key14": "KKEpgfPeaL56NkAQ9kFkgNfgSmPxW6TscdHux1hjgzqgqCtmacwAc3uPeNFgBfGnUHMFZnu6XBb37kMAqXCMW8S",
  "key15": "2jZNaJeYcQcKmmidZgZZc3NpHwzCnvoGpY1sL3a7DBJDNMPexAf2bpwnwiwZSEyczFz51XNpKAPUMV1Fvohuo5R7",
  "key16": "yuxYcwpyC3Be2cTu9DrvAVheXPj13hFTKBX9BdrDHuK1bEejxVEJvTvA3QvGu2FtfdkJuL6as4WFwMKUXgEyy3o",
  "key17": "4yfA1ggrrDXc5ER7k7P5z7XqyzU8ezJn9ZQpVrhysAqmX7ra9ib67rQ6C5uhnvo3f6e5oxARMzWeNNweRUfsRVe7",
  "key18": "5pkRpyLu4WmRk84gKFVJMEBh6prUgvNRQimGm7QpKxNb2YdLb3run6LgxFtwW1uxVSCLctTcephRa4LgfeKpQKys",
  "key19": "37XNBcQBGrsdjrxk6p6SgLWNSNeLY2tPDPJ6t2ZQPyWzrnne9FM5GPJCeR6SgkbEnkH2S7CTebYkYzg94KQh9mVH",
  "key20": "VWm9AS6pK33dBtwCfL2iyYDuzs28EJqMJecE74UMin2Bj6qvY4jhgVC319rHrM7dwwLxFXALGvMrUu3Y8CxG7uR",
  "key21": "4xEqJZJiAUbEtgdZnsdQ4NkEhumAdacfqjHwZX9udN9PheJtU54tVH8NE1FxnUAwqv6FwvZhYShWDAXMAzXWDTSp",
  "key22": "5eFYem55c3DMTSYPBVKTtEtc1skZkCt2UCUxqgRvrH9fG3ibagqfHeQKj5HYwfNMVZmejgmUzAKjBwVNeyu3u8wS",
  "key23": "3LMKZnjASrFniaBiMdUS1XEGQYLt3ERUdKxVTtsYTgKb9egoEJU9KSQR4dDPPgVbNumCTiEG5kULwmt1kwhfGDt9",
  "key24": "mYRF3qCbizraEjUwGCfn9ykwFcM1iHQ2UDBqDkiMNMrdjkjafoBCozZBFKdzJb4MfKyggBTh36RBDQSSYytDm2L",
  "key25": "hcyckvxxgwhunthQL6mgWMiqgyVvg4JSyXz7eY3Zn7GKBogwv7tQAMHUD4Mjdr4PzDg5oD4HKRZFEnKbCGbfa46",
  "key26": "2M1psCde959euFXRSh3RYkBDeTeaS4oLQVQb1y2dDB611R4qH1kCxWhukVrMmSHgfzMNWKk91bbnXW6mgskY7i6N",
  "key27": "45DcgpgWZw53S6V2noSAFrzoeKHYNQWPhhJNt6HPwEGFRryrSkrWS2PrFQdC98iWbJGs1MEMtsEU3kBiAmbqpsgt",
  "key28": "72CcVk1JnnSHWjVn7LxYGmHEBi2y3p2VhJGC6jrxcHyZ5RctM7onxxWMnGScYpgAD21WWu9Xw3DCNJLeA29kLfv",
  "key29": "47zVhHMnjviXTvjrThfa5uwBu69G53y6DLLBckPFxpB4qZY42dVgYrm8mY4aDaMwNMwtS6ykGGxDfbMcQqCnGqjR",
  "key30": "54ABKN8RweAWrE6vb9rdDt5yV96D8e2mAVZKfEE6BSSjVrxZ3nNEyhyPRS2n41PJkAnSq7q4yhC4oeRj8ZDpDhjY",
  "key31": "4xSn2e9eppH45PQ2ktnn6TZkQ98CfT3p3AWY84a3r6u9z2ozHPTQZ474v68qV4dgQw9TK3wBfV7venXNJgBph3US"
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
