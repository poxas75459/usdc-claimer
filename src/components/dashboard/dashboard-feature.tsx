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
    "3VSQVC8qP45vetE2PjMcv5gcaxYzyFZXY8wpp2SczLTD82azWDJYyB2icJnfzgvzZdR12AXHTnVE5QNDd9xdh1a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vswpi9VPvRqM2ghnVaYyK9sFeCWoA7Hoh6yzpJrcBVCsEnfNtLTqQhbLanuj7sm3t3RZwbzbYVH1yz1gks8zTTt",
  "key1": "3BD2xfyxUC7kTDKpKGjrWGCv3zF4y7qXfJnhhNKYZm3sJWhC3tPF5mGrD5o3KVzSWrvBLxZRpkZ7G9A7tW4UsFaL",
  "key2": "2X2jPBz6a5HFFvePpcRSYdMbAXtBGh8u4Qq5AL6XvRtovp52w8AUu4CwZfHnWrgDjpMqjMKjMaKxHTSfxyf9PBSf",
  "key3": "2AztZomR6yE3DqGNZjkNqBZGZvCwKdakyFox3pbKvT4L7psUBdGxmFhQCPPYR5E4YCN6FRBENSRcZRAn4p6DmQye",
  "key4": "4WR3F4Z8tPFEpVKmGa9fkhBh7G1tkDCVN93YFx7fYkpRGoMg54AEQs89suaYMXkXu8bhsXbSvFxq34KX8tXTP8dw",
  "key5": "2ro3WPFMb4ss2quFBQXYDWGbL2QK4BspcCLzmzQLZLJP4bCNmg1UZX46tPBjhoBvSyTn5ByQWRpyjELnWCEdLcM7",
  "key6": "5jgNXkWsNg5v3zcqRqtx37PMTQJznvHgKoxVr6jJJ3VQK3DKNVYyZoXoHohWwByeVR2F7JWyfpHx6eXwE5ZAPgBu",
  "key7": "4mCvRNE9zMjxjUZmoRPVDdPXhYDjKt5DiALBy9DN98LnAbU3Pk6RHBtMbivQxFAZ1in3m7fFWAgJLVWjePp55T3o",
  "key8": "xrtHCuG3UAX1SaTpqsXts3uQkg2bbWko1gM1kug11ZEyHmAuuTQEyTSdX8bSu4jHTyQ4P7NwxQf9oh9pjeLZawC",
  "key9": "58S22dBfgxAVh8Lb61WHGPTZgvq23XdzcTFJ9cWFbf2mwJ5gdzaiTKr3xytJsm8bvQje2f8SWNzX85oqJB442oHh",
  "key10": "YMdnxi67J84HuYXvmqpqA1Bqw1kB3pt1i6zQbDmQUBLT1uvtFBDpnEhpqd9hwReUh86vSWieZJapH7Kmi4ELC5N",
  "key11": "32CMgM61B6pKMtdVYR1KGkWjCSMxbPwyhdAZzr6icSFLxyBGCjovRV91PFJkrMgyA6dA945oD1N2Misbo7KQQWq6",
  "key12": "2kBejkSNeUuATwgEjoTan2o4Dg3fZu6QuFYa9ssDLfyTgfYbGZ38yVH2NJkTnbH7X6DMwMmNpDYaC4XKmKUPq82X",
  "key13": "5UvcDpAXMPnNTFWrTsK9CoPRdpnowAn42zJVCTCfncc1LtosnXJQ5gV9BHLgY4gRbamuu7gUMRiJzv27mhfPXewo",
  "key14": "myZmTXBKziN4qs1o1NGFoL3W8wUBSp2HFLSeWZFaW2wJpe8bje3JR92MicrB2VhrQaPuuLHYfrvxrYP4FLR8Dut",
  "key15": "4i2xUXMmE72MPQU9rPKnczSN6SGUMf2XXndCYYX2CbYu2FXsktKrmXZDySdD9CEFBgHjnQSLaGcY2mnd8RFEHabi",
  "key16": "253RoCM3BZJHjL8qdLKJuthsK6MdgiWY8EK6uNRcUKXqFNoJy3zCW97tZo2nJw7rcKKss395mWTTQsXNptD4BNkt",
  "key17": "3B5oyc9BRNYLsfu5syFDqHo9u137gKeavSoeRB6d6rP6burE4p7r3nFwafhvMPTUkco9P1BQdmC7oLFZR3BviS4F",
  "key18": "3jWnPbcgEsMpNzxPmVQEgfQM12ayMEZ4nsAiPqhVTBYSUQJB2cPd9vQdxzSv3L8AWCmi53TPuN2R4SUPwT2ApzLq",
  "key19": "4G9fwHUUJkTZxvYN1escfA1Emuty9EFnnbXAwgDQuKHXV8Yi8EophMWd4BMuUapvsvqfZsTCrTTXwuAL3WofgphG",
  "key20": "56LDMcetCuBbME6BCpn4huRYHXgCgpXDyi2DGzY1XZJq5A2JpBvXw7X48JAQpDtn8DJLb35LxzJVqXygnEmdNd1R",
  "key21": "5LHcseRmHE68rJgtwG44pt98GzHhaERqWvLjc4SPKhKqFMuGUKCtDQCEeSPhSh17NTTciWZRkC6Jmyt6FmhUNPWJ",
  "key22": "3cFF5vpEGwTyU74R3t1S1gJ2HhxXypgyEgiHwWA6K7bk6egwUuEdFn1V1gD9WCpCR4RUY2V7ykMrn1RQfDTNKCfL",
  "key23": "2fJ9orwPybHPHcR6Vqw8ZAHNQmc7puJ5gzntdtQKstMmrA88tqgov5j59NmvZeyuzDgY3Qm9XdtRRZZW8ps2JhsH",
  "key24": "Vjjte1fNgHrqgwHvShHrVyEJuQ51rkDievcxDnbhjQRyxFT4uBqjB6W8gYpKGz4ssSZ7naQU8QVdCSiKgt2sD89",
  "key25": "2ia9P4wbKxjKJhohmrVCx8jUVYXVY9jmfy4YMWuLbkgU8rE1A3FTDHf2Bpchhfk2RKoFe2Fy3bv8aWPSLPzhfwry",
  "key26": "47Z5h1Ubs1fN7DEfZHFiMivYPTink1mVzjetnHQjKbtepqQUvaLFJRKe7AsPTgijMz4T1grxR9kZ44uEVQseam6h",
  "key27": "2CCbRVAuMNLV5FzGC4XaZVgCtJS3riZsRAdtdZmsXySxMkkv3hqhB4YNaRLNBQkjppiQhi91mST8KtjonyxGgThN"
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
