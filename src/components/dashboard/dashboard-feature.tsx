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
    "5HGqiEFEr8G5uvbiJa2h6YPpwNkx2qjNFEiGM8mkXY19Jbxkav4hqqKq6fdMADzrq3R5CEyA1bzz2BFKykj5t4kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnWNhj2mkr8QDexZ1SS6Wh1qER9Dj7ApEZnda6PuBWNg1piDQgji3dp8CsDiWi5tZNndS8zcaCwd6gHS35Yfvsb",
  "key1": "4v1QQRNnBnNXqyi9kSXab3evfKgwUfy8zgr4VQU1gRbBw8fhVqbRPj3f2LpRoYq7wpT6iEGEvsrmt2SVCKmGvBYQ",
  "key2": "4WUKz3bxSSHfGX3bAsa1Tm4GVD6uhJDAsYuyrFK4L8DUhiYGSCwin4kd3ACk42GJZJuDcFS9n8jr84Ztntunc56F",
  "key3": "5da2WzV4ZFuHc1cw5zDucYGgXCeAydJEugiyE16XFGgvZ2N1CYLoPgP9BpT9jmzJfEUFcZZNRkGDZg2N8sn58BEd",
  "key4": "4cB1JpaifXgaKR1vs2EjtiWeSZ4ZDYwMmk2GBBCu9DPLyj1DeiED9V3qokwfgS5YwNYJQyUENgQ2WJfKiMcmDkEE",
  "key5": "3k7ZFEnoxSjChKqNX7a4JmdtEDZ4hiiunUPyvzdaWxr4ZA5eFrYhJLRJbq2Nhbs8ZELtDpnvpUeqZABib8vrXrsV",
  "key6": "3D5xfK8Rm5LSRH36EcLr4R8EpemPgUr4AHqANVy1nNaKHubG53t7TZkB85EebfQEJhKdnoFsrsNyeSn5B4cCBUS8",
  "key7": "46k5eKT2GMiBAyr9CY3e3oFHz5vefvHJhSPS2tgP23MSExMe91Jud2hjdKL3mgSocBMb6s6svDbLu7PJG6mMnDt4",
  "key8": "3T6uSdiNTL7xoNfbPGa7kqWrj4VH8Xakab84N49Fzq2mQHz72XYJiJXsDreGpBRvECDynLjATz8wmLnFapHoRwj6",
  "key9": "BSgLrs8fij8qBRQRdHpmGXAxtuVScVSUf5HNs92uFKGFsvqo4KrVEfns5ZUY56QatXjKha91h63g6dPgKuvvdcB",
  "key10": "2ewLEfNs8mpAN416fBcjLcg2Uznsj4aDoUk5qBTYdDdH9RiX6ak81Ci33AWqwXv9GzXbYzKhaBHNuKygL1usch5G",
  "key11": "CsGLYkAGNJp7BFiCMfVtPeC5WhhrUFzhQuA8ABvmrQcv4uBu2omWN6CHNEafaGmi8cKZpA5urMmek5XQz1H3qFp",
  "key12": "4cGZX14RrSigF6W16W7rjTSoeiiiNugL74KhZDDgWiW53jDidmutoDK4EVdnuBPvZ7DeQrtVPCPCCRbAdTYDsLtG",
  "key13": "Cs63E2W2Cr4rqHc55jjapz9xi7wwfQmnCC5GKwaik8enchZcxHRDaaExptjHbYahXWRq4bK7EYcPsGYUEpw6Qnc",
  "key14": "4Jx2u3NLY3K6tUmc91ENGQ5HKdfSfQHp1jJKYrSHNUd54g3gsCySLNyR1vnfcDFUfzYDAG1cm2espYVuAJLfeM96",
  "key15": "5GGyWBFUAcTCHv7XfD4c3G5U4zRhmhX8hnUqaohoDRTswPGiscgqZrTJhBfjic2ikSbuVUH9F5Er158f6TNbi6hK",
  "key16": "3XCq4XGEJssctq3JAy8EmyHU73vS9x7tLj1mSac8eYztzQXEmas1Rbif4w9GmoPcfAZyTAkFtgCwJEn3f6a4H6q8",
  "key17": "3tJ424hXLiVxyuEwm3c8KxAPRcUrXp2HcV4xh3vvM3eakx3Txd33is2GmZB95pxJSP4FAYLaNKbJ87GQ5HP4Wapd",
  "key18": "2vSwTjWarqv82FaLdbuiezzVFNSv8zbnnJDNzdpF4wrzgqMuF1s5x3wHzjXwDDkzGDC2oWQpMEdaGhuGPHRcd5di",
  "key19": "1yVsk7brY7yVoX57Z6M5XgJVgWuFfrjk8bGiVepUF6nPdctzmeriLUWTuKcb8agfG64A5TZu5tfZsz4YaFeopqp",
  "key20": "41HDeab1Srq5gMGjNugtvR4eBVgpv322sPCMEJyAWeRtSty251qzRodYZT7yqf8qh6CsmVF6q6Bq82hxuNPCroBU",
  "key21": "33vR1HiQemfWYkg9HM2mzVAxtf2kbhBFicVt5poz5XoRppuLjBgNQaxMc2E7cpsvP1LWzdvbb4STMZYC7daKSAND",
  "key22": "5SmEhmnkTbyi13L87MRFAo3AaVB9KuXW5J6FWUyh8PrF8rK7pp5XxZZPSK76VaeUzFEP9YKh928KBmabKNiZ4wGo",
  "key23": "2DUjyZA4gvaqLd11CWEoDD3kparDFKEvDXVDpzvjbKsZMf7DMhSCtwYWm3z1tZf13Ad33fES77o8UQjondm1HVGk",
  "key24": "2723daybpQvrv4oQbcmpZyPTCLbCTCof2CUcjgCcWFqVFuVNpoHoanVTSZ9yBxmSUQTbYQD8FSPJ9X8k1WeAmZTt",
  "key25": "4TsA9aVfrKMngnLYmSXDiGc5E4w93hfrRSC7XwjUrgpkAnmfHp4PCuYfx8r7LHoNXaSA96iV4cfD5au6XBDHSVcY",
  "key26": "5zEzjWfhkPfW7c4eisEBkcjY5zrY5KzzN7CYGtutFoFfKhoetpLxoGXqHTG2x7zqzpHgmLXKoQakiXdbqdotrkME",
  "key27": "566inmJbFCxQLaqnGtVCZv5V9cQnxXKLt5BSqPQKPL9R9dxUABqP5N15W2xdbWoXRbV7b9VhVDWeuwVBUcDt1aKa",
  "key28": "4VkhwL11aiUk2gDg4E4tZqqajAmoeVKcGyxJ5DbkjRsT711KrvU1eDKWX6j97yci79vDQVEkx5kCiZPKmD5mfqTv",
  "key29": "5miBodNqkzXSW4khciuVWcAwQJZMJyAN5YvNBkDGZzfnmzduFKNDnZymXqZ3DZbDqboapjqMCSe6FEzyMdBTuqQv",
  "key30": "3s4PeZvoNpnYUGZu9g29qciKDmp1iG2Uc5AWkNTgdUFxPfxiJkTos1XpNY7q5W9spsGh54YbM27MQQDnFWjJtJcx",
  "key31": "5hrr8RvdsqMcqjTSApzaGJnG85BWhCyTUgYSMAKYDpaP8v1HWTvQmoDNrKVkSSCtmyLvTePC9ZP1yy9froYkbvV3",
  "key32": "29pHmidpAEENNovJn2qX8tqRJ7X2XngatVuhzJcF9e2cLJuVVmXskhWTa1AXfiw27knRPnvKcZ9sEWf6zsbzBSaZ",
  "key33": "4GfRx89Mb9Bg3gGmjCGgaWwBgMMXeU1mDQb5raG7zMPjHYowLHmPYVYkJJYG5Z76F4kT1r97epG69WkSwLiu1U6n",
  "key34": "AgXDeuZx6qNm75tz3nhapzhHBGKNVsDB4wqRwk8Yz5XQqss7sKvaiBLD8om45r9CMcp81Sdo42kBosUkbT72jq3",
  "key35": "4E1QemZeEhY87EauWPVYwfrBVhhA7qWsWxkJowwaFyRaRiE4AGqMPtyN3evES3jwEg3kogbo35RQDucMkQ14qfEz",
  "key36": "3DPAKHxDxmmMa2V9jgMLB875aCJD8tgGVhGjsmSsgsuHs8X9xc4eBpLrNomBHDeSvfpXP5qg3LoUtnQ4WMZBrFvE",
  "key37": "2k1xDM7oHvHEFx4cbKo5cRz8GBm3NiD7czdTW5FkfuFKwZ4TSTVmUWwMo5AiCnWpeX3cxpXACtSHLVgGfH8ktpYK",
  "key38": "GMvv7hEQNffKT7GDFAJkUApiNo2G9Sk5kVLRuh9oUq6jTxAwMQ5BbY44egw2MNEpHnLHGck8h6Adz4ZaqALnEV1",
  "key39": "4gPq5b2mzrUR93cCQzWYbnh3TbCrRzJyb7W2a3oNrtPU6SsHenaaRSRVUfMY9EEGdQdW9Yd5eS1Wk5HWKsYsxXjw",
  "key40": "5Qv58Z9GqwZ1pYWSFYHjgjEDLC6PywzBderFMH3UbfB4K2pKRnGBy1ZAYD1UYUvtFgq5qcsXLbD7gUMap3GLdPUY",
  "key41": "5U9RLdn9DPQWb7uJ4eiU6fXnZoz2Ed9pGGi8NZnd22gX3eoLxcpFNAAujuEsnEoBkWHTosNHfAmJjSEqqsgVweCr",
  "key42": "63U2vEMXeRtYfy2bVJxfpm3Meb3bW3NVqmMdQJTMaBYZW3wiSAoitVjx7Wc2EbTnaLikzAGyivWYmcJXd4oQBwTE",
  "key43": "22m8yAMVNUVJraFVUMaw1HvkyGC4VD3Su5T2QvwGi5gANMzMPj7grjPJdbKivNusULKBDFNqxmqwLR6xzYm71u2q",
  "key44": "48wis56Rji9rBDYBY8qpb5exssUixVJ4nuCkMUTWjMg8y7PBtaR9Wk1wGU3Hx2zFqtRpbyg1ywaopdDd97vZ2xjm"
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
