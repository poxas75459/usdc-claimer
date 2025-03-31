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
    "2Y4vy5F4tqtyz2677CzakPm8UDoYodhEUuWox2maRprhb9NLbGLJm4gyjiyvHTsuYsvapdbzviHDc6EBcTK9gUDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ar5vxzxc43AiymJuePKmiDPHPnEXtYKXDMbTQwMr1eC4amaFZcpEsFXU6TMt9ACDSLmZdBnDaHoMSTuptpHMpno",
  "key1": "2eJ31qNSbzh8HB5ydYfRLCfscc4UG1H6JvFF8KsCYYkJPJCBjGGTyhojysNqVfeA6WGS7QnSdYzyHkbfL8VWvGgo",
  "key2": "3SJ1dUeRayawn2rEEjX37bSgq4jQuda2xwCEinvagHVFv3y6AvrvhggVEsbtBsayJopKsUtHFJkVMbEKctFbMwyc",
  "key3": "3nBfQLjoxBM1eSrTGQMFPuKGfHxKGwsAve8mFEVAQktw3nXPiR3mEGKS4E45LkoWdbjz6GyY8j8WGQmGZubQTpdo",
  "key4": "4XKt48sdBYxRzXf7xzL1MuZ948wU2BBxfsmXGmuQ3S4Bsnxwx1UbDCeq6HUZH9p35uPsL8kFqAVnm3cgPFhVuW1e",
  "key5": "5KWd1CwStwpGsxFcCbqhzm2WyAzws3wFoKrsnKTUy1D9wSeBWU5s7Cdsy8F45ma5cqwiaLHrzCjfyEaLpk4xLP3n",
  "key6": "52ifup2YVhU3bKNA5U6YmASct7bJxJuSHX8tdajGm7PtdKvUJYE8zqGEh76KkThYC9UHUwK5W2hnfLGChMsjxUdz",
  "key7": "59TkoYyALAKAzo4vujq7wMED3JFny5wf2Dwn6J1HF8FgatzS5dPX8PuWF8XG6YacxvkHiDdBFqKAntmG62buZZ48",
  "key8": "5mHHZysBWZG7D1XXAPomzjaQ98Y1CHf37jfw5YiPSC8yHqs1an5AM3cVPtqHQbiJvDWETS1VMNoZ6wDUpDbsT5Hw",
  "key9": "5v1PHvgQuSS8CDnKoigiMr44qCMNst4WP5mXXPtc3ww1qCzNYrMDLXfGsdRYpVgjDGY1asZoj7eTkSDRzoJHT8Bc",
  "key10": "KD9ckqy6CVDTfU2uB3CUanRi6S4F19RB7j5CJ8KFZva5CVYEE77Lp5zxMZmPGXgdiPPpNSpxwNs4qu1AXgc6HZB",
  "key11": "b9cnurHbefovAcvvuHEzP3ysGXxC9ZaeoydejMuYWFGLgiViK1RqAPu4dxDt7iLDgPf6bQ8DcBiphWZagJAApY4",
  "key12": "4umDWHQeYDucwPaUwj6HhiSeFGBJM8R9uSwmC3rFGxe4JTTNpsUZaxbWxPDWVQv31aALqWi9DLk4o8P9EsN7sw5i",
  "key13": "YPs4mRv8WtSorxCnQZaDeUug4sPDy8uYvBdhzpdiyT5hfLXuM7z4UynH24NTxQYDueHos64UPyGer5P4bwWjZxH",
  "key14": "5wnnMNyNgx9sq3NNQ3Eh3MBtDniDoatMBMrF13y66Bbo6YKH3DxuN4KnfyhkhX7VF7ehSs4dZW9NV7MbdmcdiYNU",
  "key15": "38yCf7ixTeFdhXUJrDWN8Bitud5m67PfmVmScefnS53pfPsYrKBSYNvC28HCui7NQt1YrPh4FdRYGG1cYfRCy1NS",
  "key16": "gFmttBB9sbrKEop6uKnzGYcKsEztc9Cowxq8RDERrhbuejsLVB7bAATKydW3eSkQKLQwqBnM3b6xHK1oHWbrcCp",
  "key17": "2rUztxMuhSEpzLQH8QL8knKn6ZHvHWAzvt4wmRinXqCxgVL7kGjm3EzKKrdczucQ8qkvYnBL3iUqdvXgEGcgPptw",
  "key18": "2AerujTSpaLjaUixfGt6SUBGah9xXAPCh4cquDca7f2mMWk1uRGfrXnzrrEN2H3Q6oZEC7twUBAE8tu7gr9qA7Zb",
  "key19": "377CZgur9ixNwLBqcc5uQs1MNtjbgrxPWVQDRmpTF3vStRwiP2RZg96ooufVcAL1zA5VRNRegohpVBY7hiWNRjXq",
  "key20": "5c6qS6pF1SQtbHVxvGSGns18ZF1J162cA4PeMQxzjkbvoGuTzM7Cqp8qeyaEajipVkUaWK8jJoian9w6ak41zztX",
  "key21": "5LShx5VwRYxwUxjBjEYNBiGHMM3ixUMUwfhgZegnxyfH2Lauui1qpcVCkAjDcvLRR5G1MoCg9S7geoQzJCuvGhLj",
  "key22": "5a7Ktf3DLafBh8BFvT87H4eMFzA1XxdnFF7euN9RGiChSsM431jmfoJDS5KPMMWWV1QJ8mM432L99HxafPQzAGrc",
  "key23": "4rf2BBM9Xm43dmHrzCwnZNS7q2ZQkE92bZnQFCDkSp4ox5Y5cwHwzd9ztGSL8tzSP4kGSn8mS3To3BW9CwBBdcns",
  "key24": "2RD3PLmG4K1LJucTG5Bjk4RwXmiLD6pum76kW2XUbxdHFcD3ZrEGMips4ovgLxztLPpVk9VkhXKbpFXd3bQebpp7",
  "key25": "2dbPw597ZCBCBURWSkMgaqPEw8HsMy5JmBp1nZy9easwnXLPm7449ne4fXF3p7NZHj9iPa8FYC8t2CaozDrv3qVo",
  "key26": "3zmZ4Qh5gFVpYiKTedsvFq7ccrh1TupXA1hi32XX3ehzb3uTWEzhMAcZkqhZnpbAM3mBQerLCyszE61FN3DEfsxQ",
  "key27": "5RdksHpuaNwk7seWkHfgH1hNJbbtEaAEmBLx1yiDGG8eK2P1a2722i59woDgwF39sxkFYZUnZB5Jpxp3pFKQT1ES",
  "key28": "2ATj7FwLSoWEdjuAGX4FvrrCz5KzWB1ir7VhxsJ2y6CLg4h6rFkrRzbHXFCq3NWof6mN1rFq5UEs7JXPBPFxZPcP",
  "key29": "EQA77Lm4ELyuuAtWP9wNZKexjNZJTddmo5KyTjVzgxZbHw6umuGiuftTw6Se4J2YErWpCtrNcFvJh2Se4Wk9M5p"
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
