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
    "kfP5DGaE9GMxVgL95MG2Qa196dX9ZhFSA2qihAcmLX2iyteUubVTRtaner89Am7QL4VdeZeR1rRRKYFAB174ueF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VWQNApGHkRp2Sv5LN8MB4TTvGuf7AA5FavHBSoUWFB7PE67ARq34DXfFaSH7RJwu1CdSPxMee8n3CNkNA7F5E71",
  "key1": "44fFQDHw3WHTffGX7kuyvqEdRbqwwaJ6r69Qntno8694Ew2yzWosa43mKrizZjpNPUAdKvKxpFkDNF6m3x3DqfiZ",
  "key2": "5gtt9V4HnWPCHxqKn5hvdmvAryRHeHMJBMzkHsM5e6oxGmPU1pRDFoNXi6T7TXuyA1vwqvzGRxCZSexwuNAfgLaW",
  "key3": "3m7ji9PxhdxconqKmxm22WzEKwMc99Afj2Tw1qGX2UWvrez4srmzsEWXeYY4hfmzRYDUmCFyS7HJVMt9nedM3tuG",
  "key4": "2XtvwjkqSJiSAGWyGxRCKA48Htw3kpX7bwggsKosi43kbyTxfP55EH2PLHU8vVy9GHWonpB69WacV2stCLhKeGom",
  "key5": "2AU7Rd7KuguV2UUJXeYLutW5ovGz4FAeY5Zb68eMwoRoP1AcNHM13Tz7YartnBW74nUUFs4t13zJaJebdmrf4EZr",
  "key6": "WqrXQoKdo1pnxeHEbfDu7TfmvHzL3VtWyE89DepMPBd8Jt1Ybi7mK6ZcMbzwStnPSM5FwgKrx1inmoMLav46q2C",
  "key7": "2karc6y46bgWCm8tgotczoffixSb2HjtcjBka3v4UrowvH4JvAeYc5WKK9n7e23J5fxNRMfb7DvEG7qNPcD4ajx1",
  "key8": "sg7sMX5QfSUsbSmncxfW46sHEiGYnn6KAANEYTXkQwznhPXFdh6hwuCdvyop3j9MrSXN6HC7TsrTVgrEMCah8LW",
  "key9": "5njJ8aNfB8qATACZohah1yojiJxZ3kcDTskwdpbLoj7Ja3teTYayFEWk3qgUGCqcAKCtjiisPgNQCU4MCMaYqDbp",
  "key10": "2e1t8rkuUSQPpkqpkW2sUbZf5AfpWiZHYnVUDF4Zzv8XnXfePiJnoiPAiPbcCjZj6G14xvYSaHy164Q2YBSHeFRM",
  "key11": "3zafFDuy8ARYJx3kFjabqAHn1QJC82kAVqjFxwHqk242Dok2cv7FEedCbH8mDqyTunisdvKJJea5LZtBWLe4LQMA",
  "key12": "SmMYCbxhBoo1hhDR1HfJJnAq8bZ8LwXqb9CwHD4Mnh7Zv6GNCmzhN4WxBJQoGy37HBfsqbc4Qb5B3yRvhzxD7sH",
  "key13": "2n7qwHGBxQ4uYBkv9uMSx43r6ifU96pjkNi7a61DgQjDmTSSwJzoBYohjCcs9WhtRHJHj5jiLzBmi1nKcFeYKoGw",
  "key14": "3bjLjUYZV7NrJajtbbZi8gFQevxFXPcZC2B4B6mMuudN4SdKWQvXwt63yJC9dqsyXj59BUaakzcuVDavyCU3frUs",
  "key15": "2ypEhyi6X328TEV5snMaafiQ6msK7sdXZ7pNoijtSRvCJe1auRnDD4xYQZ7ghu5Fm11thxH8WV1qENKD3s4V7Pfp",
  "key16": "9mWnGjYtCtpGzK3635SQ1MZqDAj6Mphy8A7yX3zLwure4B1vVrS6bjwhMxXNwWVfTsc7vF3bDGLnTYZo5FUkttW",
  "key17": "26sXkZezVMrdurqcPRPHPqYAR8mdAcQuZ8d78acyXNNaZSgqCUdfqBYrvcBqvrTL3bfu3pcTsjcMYSR6v9dsvKhc",
  "key18": "5uu5AfWo1LnwMDEPqtbXGLKokWR72XoofAGRhh9q2wHZiqSxDFPgRtQ5ZPf9QyAz3j7oHWcCFKGBKnTEd4ei6nuW",
  "key19": "3YJrAvJe3VbdUB9kGqh1xkAVForNgcaYVgNMADv14S1M1CcknZv5yUjdP9UKtTWMw8SKycSJwfMBuNVr1MvxhwCD",
  "key20": "VpPcfLDdPBPxmHNoZofucw5XVhE73AZLURx2gDzN8Swgw5k8Ky8Bry1tWVAscipz1d6uvU79v6ZChw8FTFSK1eG",
  "key21": "4J2VT4kLq6DcXDdK4iYNjZzrQJ7LVYo4EntsBa91TfRaqJJrJc2NRoo3FdEU2BavR1EcYL7yWPFPyeSEFzLbVfgC",
  "key22": "7dZjbCdcx8YwMumyWp68T45iaVYJJu79oZceca45HA4BVVabPyGAaNr3D1fAiCdoK3cu46eszwH1247aFLY2a4m",
  "key23": "2jqMChcdBpg9DDnBEXc6FHfufHVGF9R9iNucZ5ErHr3dw8hDo7CiQLPjUT8SP8kDPDqRhecwDj5DAdWpeicB5DNp",
  "key24": "32RRL9S8K4pV54eRkagVVPcUvDUYLMtSeZ9jmAAwaFzMV9NyuPq6bL1VcbgBvXeWVmRbXfsS1REontAzgtUb8brY",
  "key25": "53E7yP3ZZweEhu9NyJK8UpgJS5QMPeT5RKNi8MXgXR8gk7j8nwEXnPUdUmGFXyGjp7HhiTPmW7tJPiEmjpebC357",
  "key26": "5bVALX44BTohXiFnGSnCPU4x9cFXeU7ccpCdbbP4iZno6eamhEREvCX3RNaMAW93vzudomAu4orqd2N2CsaRHXup",
  "key27": "2k56YVFj594BATubXehx9KFCQbgZpdHFEG18MKoTbnF25xFXyUbqENc2yLVcbY4o83DPfr8w6UKquyJvtzxdUArC",
  "key28": "PyifyZxYXvnJ3mK1qbgspG4VdEiYjmKjixxsbDkvUQg3wLM41ddGwh112iaLUc5ZJKWJJtBbZ2FsWXPjZq2PUYQ"
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
