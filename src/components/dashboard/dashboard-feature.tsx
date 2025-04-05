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
    "yfguVUuVFRKHFzhA38DfU5JQkX5LGPnxT5nfqRxqwc1dFdMbns4TJMRXqZFBqQXvivwHocXjkZGEKEcZZfANC4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUgPYivwMrtrZyeaVvhcuKAwJE8FGncsh3s9fFLxsZUEMfrrizf4AS9gcjczj9jgrc9UVHm1B2zQiMtXb4nTf7M",
  "key1": "4tyEBBx1TBi8wFT7cbJfGVski4NPM5JxTFFToaEErPQCDXZmpLEfcJfN3HkUchvboiJ1Lc1JLSL3Lw4yPLeHpw6a",
  "key2": "RnFRWwy8UPHTxLDPxjJrWUTwYG86SrrbeY3ZmXVsP1sH42zyZzzyysZviGKFCKmxZ4JJKCYj6PepzBkxEA1oji2",
  "key3": "3dZzEtxHYan1yMbxMHpAsLuCpvKq3jNNMroGBY947ACPX2nNbmYPEDTCA6umTcm8SAo6xC5KJB8gcxTRnpFaJ1xm",
  "key4": "5XM8rQQZ8ggpHB2zFCPr2pKiNEiYSu9LkHnKHCZ8eUzjY6CppbxPiBCuw7Qj41gkxbSnFE8PX8JMi4tbFYYQBkQj",
  "key5": "2iBofXSn8mGcRPKxNw5qzTGWRxAWHDRjhgHJgFqAgDuCTKDRmo38n7hMsVx76GXBEuaBRQZHxLDzfUphNyWLSYHZ",
  "key6": "3TMjFrMuiwHE5ZVyNv4MpoKqbRd45ET5phezFpgF8F5GdFa7LhXQ8LfWL4ofZVCyNMRXdRkWVw7F7uQnAs6pyAzh",
  "key7": "516rAj4iQXFdYtfYbjoaxEKgsqCArL1M8xSWN6zZhTaDhgPc9jkaX7kH3fSmNeHCjuPYdFeRHf5tcDrdicuBiCdx",
  "key8": "4UMrA36nEYtPphNVQY8WLJXnjJkteLpcrnYJvyZocixzCa7AJ5Cg3WMAdiChP8xEM7CdGoJTQR113wnh374MyD2Q",
  "key9": "5Mvp7MwTzg2hzGqroGCFwY8PPnxhUWgkShYixDMjVDdfZaCL4gRe1mdcV4RZ9HPWk5A6mfvjumTqpjDkdWtZ8Tj9",
  "key10": "5q1dhmd4QRa37yzrosgLDoi7XWoLwEjMrXFqSLLozX6k8cJ5rutcDK5DejFEtDTH6qaahPtiS269zg2kuLojm8Uc",
  "key11": "2WjziMpSn6TDKhn2J9QbFwBd1a5ACy8Jo2isqcpK58hEQH7LFfyyEdniE9RFWegR7zLgu2nefz7LRBB2xSrvhTBF",
  "key12": "4TLNw7V4cytzHHZ1NZXV6PFi8Cmy4e95yirZzqrJ7Yb3afu6Fj4HkB8Q4KcjECEyVJnxiWCpVwuUgNi8GFQc2hGv",
  "key13": "234C3RwL4A3T5NFcRc4BSz4X8KMkDZWzZ98TJJpjS4WgU4Df39MaMGacE5qE74uqVhqptoNYqTKktREXuPK6PqR2",
  "key14": "2cHNSFaXPFc9vTDyS9ciassW6Z4sHmx1dtFAY25i34UvMaCjA6ePaqUzwnq6DeiH7ZJrgvxrEvQo99FifMBPoVWF",
  "key15": "37kZfLrGfZ9F8xvjehWkPE57s6jRepcaVwn4vuMQzqfie8cFitLHx6u8Sk2pmLawXV1zAXuG4xjw7uhJhqsYjxWp",
  "key16": "2Ho3vJ3ctw8zQHBRVBX93qKkZTgviYAfL96xCEcNMaAmVwJnNnz5yPDzjvBHhxj4YVtBWzAb3JHSFxjHq8Xmm8WU",
  "key17": "4XHg63F7E7voyZqWCoSXU4LvU9uGsbsoDkWHDMF4v2quSYnnyBFbN3otSPX9UyM8Ymzibe2E2N64sdbEncnC5o5E",
  "key18": "3m4WnFeQzWCoe8b8EpzWFS7gw3c12MzcpLEFqLRXiA4yp7RpGND2XnyuZm3LAgWBqnmjQAXvaPFdMcWdCqtaDvZB",
  "key19": "4F2SpxSMuLdT5iiCgK8pL3hCr24T1TzoQiGDA1YMoFpMFiFLGKnjjsHm4fSenJpbzPE34PeYyCwkqc9cYTouBswA",
  "key20": "5pdkQUx5dhzFQdD9hqqaeRw8AMB5mEJTKiBBrSjoWfdUFZRpgrY1PCv8yNpADD2DK5nhMKHnLsfVz6ARhaomtVqZ",
  "key21": "5btWovVe8QWz8ZsMY1f7F9ywxhpo23gCpYqcHos4WgWvgW81XLU7LDDiyfYEqmywhFfTitw19oZ2r9Vm4EJWHLjo",
  "key22": "26LcCV2E9MyemZCfC7ZJQcD3c5kr7KvKmT7QbgBgYZzQVqrQumAijwKR7WjE4MfqaimKNSe3h1Q34N1VSyFaQgYA",
  "key23": "4QMPNxfsGooS1x8Q5zpesx4xoWEP2ivSpHoFSn4VsYqhgT1wB7ZQvuYi4dMpcrGVzN2uj8yxkH4kr4zPVfxJAipw",
  "key24": "o66KnP13zNkYainog4Jo85qJLbD4ZQuxp2GMjtXEdNBDUtTKNULf8bqqVn9TKjt7FHdCaPdFKsscW6HoNHvj2oy",
  "key25": "37rnW4jRq6EeuijhqxGGoiDD9UknkVS3NQQKA2DW8inp4cEthWsa6oU1vcU2bdJiCpLEHyMGctsJ6ga7ZyWhGXE5",
  "key26": "5DgKe9LZ1gGaQpWxbFgqEGX8VWRsGZr8pmt9so3iisnhSar1B5NXEYq3diqeBt9JQ9FoixHBHhqedhKFLXLrQigH",
  "key27": "5gnPdDtCJMkPFBKhpkYo6bMJBJA3M1Tmkf9W4yzY7pU62TfDim5prG57t243m1dvkwzStZvzJ8feEsfDd5TwTYu5",
  "key28": "3C5FQvefKXZE9BJ1xhQS85nynwpqqaxVifSZrf2xJseKoomgg8yzjJx8mX8SxviZwBxemnKnTtV8ZeTkpUS6o3Hk",
  "key29": "3b5W5n4RLvXBZPCDAUitsL3mjS2SkcDEKYNn9tL5sTaA5yZqZd3yMsnnn4dyPgnMnAV1ad42QCpJR1gnbn1V6XbB",
  "key30": "38VQcwVK6Lnc1duZqWwej9LZyFvTszUiUEzLCb6qrt78rvYqqEbjPUaxQnfwcPi8jGJceUjxJK8YgcSnnzLmdsCh",
  "key31": "48q5GwuPn2HeoWV1GhX1GYKcj1XmzkhiW71axrtobePt9VYGszaMivyBikpxK9pmVQzpSDKB2gyoyKm9vuo6zTT",
  "key32": "yoGA2X6CBKzxeULzEA51xmvxchqHyJwa8sC9ZVHnmAt5QbbvUFFJDCLzbNfoEWvCVzkPQMSKJownXsiy24Szu6c",
  "key33": "2ydejJYPF1tsMZfBsLQF4bAeQ8Dn5NGbDRs3bQ8Tb6P4KiVtnJNETZUNcq6nSNL3iJMiXYhUUy8zGYc8SUdbEC6k",
  "key34": "4bFgNYHDPwSZiFNBW8SnXsf5Mm6JTqZukPqw6nxzr41D76WoWkb73xDgwsRx3Tp4THdkF8xoZFUKEogqs6YMGTvs",
  "key35": "mjzqtmqKHXFzwRzE6dZLgCfm3xHqWrEoHfGQe6N36QEhBZhBsFRu7de8MWjR91kAWLF9Wp8QSbq8FP272TdQcmT",
  "key36": "3VzKqzmDYXNrMUnEKcFctQgwfCeyyfnovKaA1eA1eW1NqGzBNBkouBZ4U2dMJRvNbfAydTcwmAejcxyN8afHmTft",
  "key37": "5wt92PwfeDgDUSanHqs9rPgG5PbN4JUzj4xNsGmVxwe8nRiyPBDVkukJsoG8xdD1S1MLjXY953WBAWAnYXjByQdd",
  "key38": "2xQnKYYN3ityjJiDSsSUPzui3RYAhrE2vcdGjvJuHNTLqeAamcgnRouac8uWQZVeGgzCAGsx31ghCtsBH56WNdUx",
  "key39": "2peCqNpsPCq17cCpkU3ne9PbQh3SgmGn4tDBQETQE1eW8DTjDVy3B4p8s1yVceeN8SEcfoNuAyAJqm9NY1czzFE3",
  "key40": "4jRQtSKgtUj31SZ48oPQsbwnyzUMHjAaSso7so3ffmVafAgBqFajkXWEZWuAop5h24tbwPXxnQxtxbi3cBU7AdU3"
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
