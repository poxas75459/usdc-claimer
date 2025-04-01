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
    "2FHenzCoMd6DUtPYSrJpKZM3c4ZCF1Cyz2uh6rCcajUsB77GSkEA77cgbJYTg3nEDCQjjmVCPcPM9z48PtKXshGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghXXLrRxxus9cxoBQTA1aMNdLykoMPbcLYMsUUkbJLvNmvJRPfMf7aVjZPHY1G8GYqXdQRbsiRMTDBSBwgUqvXD",
  "key1": "mpwEsmFhNCdkGZ8fdwCRedRos1dGdt4Gx4SrJE1bbZfcWWTawRSsir8daRq8mFUxWEWehsywLDuVhrgpPJ2Pqdt",
  "key2": "4urP4h24h9vPDtnuy6ncZxccmE9GqFmaN6NUMeLzaKxTQz5tJ5km74tyvTfq7NQs7KMWfVtzNzf7KzJL6H5EgQxT",
  "key3": "4JecCTGb8ZBGWUG5FtqQDoZfzY9o4UuhhdAunexKBNG9Vem2WrgGnfGFfvdNSvR6A4MAdmpyikpMyx4VdzGY786B",
  "key4": "45jk756o76UH4abDNSy7CJoFQkpNLMf8Dtn8EcNcKiSsdyqjgBzLYzNvB8NMjXxedkvHhDaPLpeibuYGoMkqu14V",
  "key5": "5y8MUaQ6DaS7SDKAVRenodTgBMahaCv5tKhPNrBtmGncTrMBEMZFppGRCEryx4ZhDnARbU6MN4wovf2uF7nEEtaG",
  "key6": "3jRA4oA95uhGPAe35uLt6biYCeeQX4aaAspYEZUAieiVnvYRQoW5EHJ1DsbQpdnu9QiLuBez7K9RUWYaL1Abp7kq",
  "key7": "2JyRQK9K9kqpkai53MQhKG6QfFqtGFpfo3t4RSBFTQWLM6bmEYYwF6VQH8g9EXydRLbMEpBeYhc3E8GqE1YUHraH",
  "key8": "64UCq6VJ37KTFFvnTnezLJo3TNdCsVZJJwB2LePu7idZME5ee2f6rx6Dqv6oebji5wteqBs7iJSZT4EFuVWevWsD",
  "key9": "3BsjyUHsSsbK9iDLEFWLNeoSbZFhy3Tb25BsvKoQqfAhB8HBBvFT1xXZEtvrzYGoLWx4uoUx4ebSBMgZJDtaFjb8",
  "key10": "VDQGovdzghuFPZNPcdXdfrq9HsuumobSNfkc6YvvCuanwajrm7D5LQSZgwhYJdnH8LujhffrNPiYzrc4qdxs8Re",
  "key11": "2ZaDLqGh8E8hK1BMrshz35tDV4FHdLNr7TD5SRBdXiMStL7ksRr6QmpyN1UDoVLWPFJq9jLvxmk3TB91kDaVQ6mD",
  "key12": "554xUt2sAn26eV3wFa4UJjywLz1EvVCDZL2cdWxybttcZCvWf3iB4GgxZ824c5upxDwhbyWZbh1kCtPCnGo1txZP",
  "key13": "3Nq9Xvq4xvFbmG94MCBrXhEGRtmwVYorWxtwsG9g5hHVvjBxUodf9qE9QdRywCX7DybZrwPRMkCpS8sLxeqQ9AKj",
  "key14": "gm4S5dXx5i9nLWueCKwGpiCAS3iu1FtmRuWRxM3eUoTc1WQvjLMeq1PMwV9RCvSyHaTTjpuBezHqzWma2jkRGhe",
  "key15": "4cWhBAkojgr67Sw6bKBpSEbrvMcbPG5LX62s8Y7boL1dinRZLk8As6LY8wk8nuAbLVQgNkhFfobRgoGShqYNUYdn",
  "key16": "2FPrqo52fhdtZUS8LiZ5Drf5kad56nMb5RweUWXrLwSTwNwcsCMQC9kUDMX33WGgrjm9vk192YCTcqCko2diDPR7",
  "key17": "55P2ZsFZGChToZM6ZzBFzXTsosfyLpVugMnyzaVzzuvqLydoMQBeivWitBWqLWq6MUmQa4Ey2iy68u7vZMHVhm28",
  "key18": "4zCwAUtraT83TqcbU2R5nv41Sk5vp1omaYNPRWtXcdhHqCT8paQNpGWJb8D2GMUMeLG5g5aJynXKSZ6a5fuTj5Pg",
  "key19": "4Tj272EawCM4XpvM665Z7JmBXtRJ389beCNgFWh2WpPT3KHZxkFkY76TNRwpDJ4cbfLK8fbYygGJNimE2HT1rAaN",
  "key20": "2EXLECmdLMDqWVb7FRUwgJtGRRyx1XC1crK1w6m9zRhgf1217FseKY91fW8UffrMtbu86E57qh9VJLQvzGocfJAX",
  "key21": "4Ark4r3HN1DkB3rxREBMNHqHVi7eixB3gc3FPxBtzYgW88TeH1Uh8xqSqXL4HZkXBWYhhJ7WWFajnpeZuEZS2ijL",
  "key22": "51pcAeRsUHLDbWopyKMFbExpGqHZBmGiCY6n6NkAsBz71R7Md399kEPfHcxCxKZRVMt74djT4HMNVNAcARPAqByQ",
  "key23": "2QgNuhLVMsLKrKuFq2uDCvGQkaJxYS6CYKsZjqxbJn2vre4tQcUH3pzMUT5zGfvji341eMZrDYYoadtDUWZbnxS6",
  "key24": "4wb7Gq3JpuTz6Exga7ZfKW1bBm6XZEPfpQKkB7nZHNkdp2defaUZ2T7cNEWEKFWCsLDQn3U1h9PoFgWCjCQhcf4i",
  "key25": "3AkebMiB61WkXLpjjmcLXiw3dNyDD4EoLZss61uG9UQPCyaoC7sfuFC2A6WGpPvhMLjJTHsNeH1Umn4TXSmeP2nq",
  "key26": "5nYwM3vvSNq59kNQyCz1bD2DWM9ux1dEGqvjFSdjxntGYKo9LAbXQMnwmMFxfuBNiRceh15Wi7EjgVTZmNf5YbPA",
  "key27": "4RoncgZoJunCnNx5sRLHQPFZE841ToSPShp3Ynm3ktdE8cgfEdqBJc7c1X6YWrNj48HXCcZc6Yuq59S1QvJpY3U"
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
