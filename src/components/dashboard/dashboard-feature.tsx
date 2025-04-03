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
    "qGUwcXtJ5LaZfXPdxThY1WvxWMBcKvJ5v4dWEAW4UJVdqvGBnWDq1MPvDBfagbC2fBXmb735axCB88wcq2C4mjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWnc6pi1PyQcuSYYSxGApyCe7vMjzLGMHcFukqiXWT1pEU4fu6nn6PBuEi54HWjJfYSbf5NSN1QtbawCUAtuoEh",
  "key1": "6EXsBF1j4snerLFvFfE26XikQchAA5iseAPEFL7pYCBeytLCpPrur61wmJDpXVFo3LrKrnQYXfFDwHotUvqJsES",
  "key2": "ojjnWh26Dr9o9RZ6bnYQvuXQCN2mLbquWnFLc3rT167WeWYJrZa2EQh1u9HmfezuEuJBuxgTw1n6C3vexZsq8rD",
  "key3": "5qmpDcEjfmtRUkydaCBzotxwPxm38peDmYGYrp3SSndKPCwbhafa1ZhqtWgNhHmUHKuuKkQyXH5xuwbkKz6A1t4s",
  "key4": "3ENYTsZ3GMcHc3u3uDdksjb6GSCDxuBUkEHA7TgAywhkZVzGkGq5ErtGdwYfj8d592KEg8UxHz1cBATpjUXxTAY6",
  "key5": "53xgoM6LcKtxbRWE2KA8fcVp49VYwoCj396iFZEDr8r4YhspXcDR4w1CC4RZnjZqpYEAH8WiLmcGug9abfA9Ys2",
  "key6": "5U5j5AttWCxvCWpEtfKZnTZST1q7wirpyQvjXhHm3BsFeFEazqTBvXPRCKxmKuTSS3dp56QUJqwgZ3c2Woggi6Ew",
  "key7": "5EKpgggL6Gi2QK989V8AuP6Zaj9ghnkUhJSNykXxRbwLVHkhUyQofprNhx46Nqwz2sw6YiLsQrWBG1E6iPzqcqgh",
  "key8": "XPU1HQwudkdYCKAugwgAAVGckyp6U7Z2LgrMXHvuaHXi7F1qpes2rVBKqR1o8Ldm4araE6epaXoPzhuVDfykxuo",
  "key9": "YZfrCSbeqiWAntU1RGexHiggMWAhd6ZAdyksjSFH689jAX3DP4mhEeeXM9UmHVzVZ9rhjTGbH4knhfqr5iH9YpW",
  "key10": "5tpqfUYdGFnsBEGpjF9cdvTf1AuHKXwXY5UzwZ27VwJwVEqY82JMgaxnPjVT9aSiq5DZQHeE7jLcYM5R6JrqzSZk",
  "key11": "4GeqTcyPjV2nhHQ9hrh1FLgJaTaMJvJu6Z8GBstsnTVSyXe546WDrfr6Wyi3qTPodGcC8rCeaUbYQ7GRd1QKfg72",
  "key12": "4i1EpT6YPMBmqBy3dEMxtF1VQ8da3DHqPTtNoiE4gqL9trQJZJbHzifPn2SAPoomdmVjLRMR2NrwSXz1Ec7R2eo3",
  "key13": "MsKZT5NZcAzFrMB1JSKVB5MD9MswQT3WT8jh6ChaXmNBTpVHxtxpT29cTLTMCGLEaoE8meVoUHogq5A5uoZKYLR",
  "key14": "2t4FSLBYK64XgAyNp6PsKP13C2ZtKqzrJUgGp1sc6JfNw3PhRsjjHR4byB1rjm8uoKJg1ax4o4SCm39KeefK4L4f",
  "key15": "ps7sUXKAHPWYyozwvkntwZLSmGoTo98gLG5LkAJAJzRpuxjUPcS7PqAWpuTq7rHJQbhe9qgJpdvGPpHBZfDBimf",
  "key16": "x25Cavrrb8E2XM3eLG1ybZD5JZxj2MCT8tLK89Qd4GTeeBtznStdbPQabGrcrtMeYJXyodALSu4tSR2P7AYpwr3",
  "key17": "4m4awHqMHg5CHepk4AtT3dAcky3CENNx2h6QRL5nYEmkNsNXySi7Uqhueh8kX6La37pt1WJsT5mNonk9YK6WT7ey",
  "key18": "5ny11oAkvh6gaLynUSJNVqDX9wvrt5NAWYtdU6qV2P5biGpjTu2aiU4kutuRisv7gKTPenNGxY2cjS3KQL7gdi1c",
  "key19": "4n3SqxWTCYjaQNgm7JwHcyeCMXP7tFx3zdGeqNctnViAJzih2BQuGbN61dkY1vimNHgjDQwJjkEAEnKqLtBFngHV",
  "key20": "51o2ypHjuVEnhvi5HmWMbSbGTQ7RTUeKKdX4GTvDeviYW835XXkNyBKkKCeGHAqUzocR5KFQzENAmSemMaRyWtaG",
  "key21": "qpKakM7HaaiScf8qUbmESKZKccs6pukUd9F86GqdTe377nPSmh1SKsEMpyrCpU7vdRsw5RqsFwof5RVBEprub4f",
  "key22": "5C1U2Z73nYAMGAycetBni2yN558RNdnyyxRF26bjpuYSgN6dsdgmMk1mKstQrukiK7fy2ke25meNa4hf619KkDCL",
  "key23": "34DMFXEvmP7x4yWh5hGdzTyTG51Rrou5opr86af3wE2QTiKNBHLTfPNTgbMThT5foxvZ53Gax3VHQ48hKSYkDyxU",
  "key24": "5XQjCwnnPrauJRfjEBEezwS2866n3DuKB4RNYrZ9G32yHuGFQUioiBPpfh6MTxdoTar5Fe4ZG4zVCJzwJPNrZJFb"
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
