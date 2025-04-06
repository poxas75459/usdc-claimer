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
    "3GvymkfCs2EZPC4tR6a7Ho5qmE7rTV8x8zC5kXpcKFrBh7Y7Zozs48JpWPGbgWuXV7vcQMXUsVxkRNJeoQzJLzKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEReLq8bpMK6W6oaPb2S7FTqMtbLLCp95PL8VidYMb8aBh6BHqh1AZ918RpmDut5gSKo28RCUX5YrGoVHCsHe7g",
  "key1": "2UpvTKDm7Zp3PSbefxiXDfAyrwApVT2RwD9f5EU7JHZb5xiQxikKfieFqLTKCEAPnaRx8UpKJH1pTgccc8Q2QoFT",
  "key2": "4d47uLrVkm3wqzQwJjedQd6726FjEyrbmtQ9u7YAHJ4JEQH2zZdZvG29PiWUiQXu96FfuyFKQZC1mQcRHG7Uk64U",
  "key3": "4ezQK53Y15HCzRQLTie2536FzdCYoyNxGjbhf55EaYnQZdUsxZz9r4TYda4rK9kHhpLY43vxhQiG5VYRVVD8Q7Dk",
  "key4": "5qRLthZzJJyYAF8cgJDMWxSsNw9FJA1RavxZkqi4b5C9WkFioSZz9DNjnBtLNDXnUdULdiwG8WJuh9TuG7tTNx2q",
  "key5": "638anBziz7TMoPAhBPq1sUs5yHNyqkTaknGteUc6UzpMz8gX1apdhj4T56CYiCeNMAX7cHG5LeQgXvpR6QaPzrzd",
  "key6": "rgPn6UWNV29AVLtHQhgcy62S88uA3rfoQtm2jw8mDe6d8cRWwxmTsEdnzWDBd6TPTc2KGx4eXGbyWrXotP95Wjt",
  "key7": "5NgmiKXeo4xnWXwRhDh4mtzwaX414YZzSatxFPf3iPL45w3efr9haqEJZNPPiYsh2SF6tQbjHqJZfJLKhFHo6Ff4",
  "key8": "3wtn2Awb1GePLbo4rWJBsjw8HWN3fWfkhjuzH6kdxUK6TnP45R2FsJ6vN5WPxVm2jBfS6csHqD9fE5Z5QDn6fFcw",
  "key9": "5PQncHWCULFi9nnHZr59ZZztDP6dTRdEhzL17jodhai2KbrroU1beufMLYSwPZs99MQrmxvne4SeMtFVDrPnRXCE",
  "key10": "38nBDxe4FZC8dpPLdRAG3XTV1wE2H8hzxsagaZdVuQuQU8xxHNEKc3VpHyFmbzAYUCYcbFdYNYojyR3kXQhKPXrh",
  "key11": "5jhXnG3bgmSoPs5PXU3hBs3NEHFGJit26jonfbY2xDDYipSvEunWCL3PWLKU6kcayGS63Dv7Huky9mNYbVLZUeLD",
  "key12": "1h6Lw81mfNRU6a7AJF2r2NdGcbPKWZUiowJ5qGUGBDw7f5Ed46c7LMVvwDiJkJqrWme1pdM7nXVMXFHdUbbqfoJ",
  "key13": "5w69WwfrQjRfz5yxUK1FXn4EoLKgyqf8EuBoSasmyeeXf9SAzh3dTaqWwC8duySXEvff6irzNZ9Xo1YVANUMzCCA",
  "key14": "3Tps5DfVruMVD5boSNFRLazq9uWpfQocA9SibdmK2uapnKE5wsn3wWWXKVVXBKooZ4coaXYC2K38kRwsqj9CvyQU",
  "key15": "2aGaFcaeBMRW446LLwdxRz6m4JQ1g9TQxc5wGBz38N6cJBhhXDgJpHk7Yo2AEkba7tcSEvsDRgmUVyTT18DyDf5a",
  "key16": "2va7KPgYWJvDWDDzMxGgJKfFvJgG8xU2d6WjciQZgTvZWE4ZASGxZohnJLHj9rrTYLnEgavqNWVL2WSGp79ogKcX",
  "key17": "TddTmR87qWL8F4EebTe5nvFQ9mJkSCEpstVBCbHCahWCz45h279NVtdcdTMTqsHUtJzzeuYoZYxf3TSFeCNQ2Hd",
  "key18": "VyxhDqJT927r5jHDPMVT7JHue1wY1RF4HvAjEhqmCYDHq6a4Hr1t4eWyD2Xi7V7tKy6DtLGzBS5LYaSRnL9VQC9",
  "key19": "2Bkn7as8uMN8vS7i8eyve2HYepjF6y7CNYn74LkZh2r5sfTXt9pB7GGZoZ6VosawrzffmMrqTquWZBZnFE4qqPfP",
  "key20": "4Zfdwsg6g4jMWR7T9FUCSPFh2Y2tL777XW1qQiWGpVuJd6X6cqeywfsafBpPayst5c6AtSTc2hYxXiDfCFHUefUK",
  "key21": "biudcTA6pfoKD5co65wXd9AaiKkaV47uDhX5ZLiNQ59jM7GyQHoTfBhsy9hBTzyj9DLx8xsg5vr4eg9ay75LCqi",
  "key22": "5LuCq7mkpc9MFt6f7AGzoqA8EZRRRaXUX9xfrnJXWyovc2StkhFdiy39DFg81i6qNyQDuuaZMCT7WgUW1Nb1tCYa",
  "key23": "DnqaYVawYmgAEBt8AaGNjoZXU51ZGZC88JEC7nrxupesPgnnityqsJKvLGEJ9gEg6pWTefZbemE2gf6oi6svH9p",
  "key24": "4cKpFebHezXbQYkviBLUkQ9miWLYvubroauRhgz3e7wYLHTjHrLHnRUahrdiDKGrzYVKa5n5rk32LwPGJwMTPuBU",
  "key25": "55hEKKkdxcioRLJbit4HVp552WkUK9YxsMy5X5PVGD1wqsVkLLZopXRAYjwk9EMY21Ch9ezgZmFJM4CoKWxahX2S",
  "key26": "kvg4mURTRmT2bXveAt6hGAw6Ck9M7VfdH4Ugj9MLh7vyHS8gPu1PHy2MeCY5bdx2QPXRpowQa1Yc24ZWWsSBZXM"
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
