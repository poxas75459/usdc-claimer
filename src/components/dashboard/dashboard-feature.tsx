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
    "3sXT7DHp6sPimso4WQecoqoKZJHHpuJwmAYak2jqk8Dys74MdS4qaET4pXXVyA77c4z3oFNd9tmXSMAGc77AhFX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmozjuezFwirmDJxWXihCACBGCVkg7PQkfhwFzj8kbThEoMk9htDNiLV4qCvHHssUokBVeootWnQYobcqUyVwkA",
  "key1": "48KvsFdkT679rG2Br3MtFe5zwGJKx88RkumzpC8UXpLx36wWY3UpfM8agV5jjKubzmpuGsfnF88tD8Gdw76pyvNf",
  "key2": "4KHUZs5siPYBuhrrDX8Dx2sGaoNCZUR6agVJ86mKUWwf7th1vLmKEAdoPS3dKZBmuVRiiysjSjcBf83gv2uXEJC6",
  "key3": "2XUb7bFEooncVcJG7Se2LaEbW2zma9w733NgQAsEqEdeReJZsG1i3pfaoityi4YVaq6GTC2H46Zg84chfB1m9vaJ",
  "key4": "5pU5CikvgFfTnbPv7uh1gCXbNR2iSsgfqtPCzBVhXunocmZCBrD6QN9HhF5vGBb9z6xw1ME4CpuKFx81v5YVRW8v",
  "key5": "2jkygPzyRUb5R8UzUdoNyBUrP38p9Q7bE9UjoT7zpZunvQsfjerQQLrL8K25Wkq7MnrsSfCSzaifbmvMyAzaDzgL",
  "key6": "yUhn9KCjr9pEFQDobZhSfAFmAyhbCSgfL9ZyYTg1AtRGmiqrxVLMCpbvCaciaXp9odD4eAQdstYTcZtbrRT6fB3",
  "key7": "5QXfy7RvkbxGMZhw7CzdCTdwYkEi3ZYfvd1hcwNT5HpZXbAHNXhdt7hjnu2KdG1DzSuaEdra2FytJo44xSejpVgt",
  "key8": "3ruoBF1kTMMdBwa8gTFSApqD9sr5MuJHcerV3KY8PZ2kmBg4QUxvrnZ5qAsFJzd4xVcbDX5pF8uhzHbtuPZFUz3D",
  "key9": "5fodeVqG3j4Ef7nKXwHcZJ3QvKSK3SUV4bmCAgrgK3Mbvkq2pi3nTjsKHXM7mbGsjYVH8rjRFJP5LkWhdCgCEmLn",
  "key10": "5U6mDwpiaWYzpd5EQrgeNnh3X9X8JmD5EGkQ14KY9YQerZbBwCTzhnhqYNHMmARBZiMtDbF1YwAU8G5jNDmxfLQk",
  "key11": "xjVXpK4nLxqXWYwPdD2S32ShfNLj1LQQBuRyMBfjJZNqXFCYpYZy12b3BNUkRLB4oKr5GGM6LFEkbPZjn3N3vqc",
  "key12": "4VDZ1LqvvfGWio99epew31q5i1UZ54JDHwAMRz8U4P7Ve18PTh5wRatTU9CBkPKbtmAqBpfoQYWjzVQxKAED2geW",
  "key13": "51Bg5F31HZe2A3kY1WzfRsRCUXQu4M5Ey9kbbiZtB9xbzdeHkdvPQPU6msutwjNgWG3QC3ua4zn4j8WagnZRkspr",
  "key14": "3MEMgo88DwaHFZ5xWZWVCfF2J6ifYifhgfVqgBoRzLSmFVeropgUAKgas3TRd9PcSx7KgJXQsnuj4cWQNPcnQQfs",
  "key15": "26QyhAgpyWZGJYqq2KzJbkcs2JzkMm2VQEUKEN5tpi3PtKgB4yfyvMm2BguPREjJqJKUrDJvzsPUps883xL9ewBc",
  "key16": "2RXGsUihhSAiTNURcQXS4zAwcFzDvce9B8fipRccFydqq93Wsg9YspBzyXza55Pk4Mv9CKobMUuwUQ2HY6F2QJXm",
  "key17": "3CTj3LkWd4SDyAvJQpJjwzx2ePxoj4wvQN8ifVDBCzpiKTR71riNq8ofnH8KhxmrAjKzmwvom2HEUrchXMmYXNDt",
  "key18": "3wHiFZhr8kBFK33AAx8BRwo7cLyVwUGnfHYEcTPCWhccuNgwpmeJgDmnivpWwSuBrxufiLQXCT9cWbVa3NVFzGmU",
  "key19": "2LGdUV73LXtvSqegJWaztdurTfr5FtFC4eaebVnwZLZrcs85NBaXi9kiHELRkYAEb86kEtpM8hGaFf11BZNhDpUx",
  "key20": "2Ee3edJpmKGYGvoFbx2iqRF6KVq9RHv2YRZhpEABDq2eBhau8WBSMcH1vjzZMvxJyAfmT2p7nDexDyubzaBnS5Yo",
  "key21": "2pRxvrReLTbAJyhqL3tHfftEQwtVvq2opiu8UmsZZCK3nm2DLLmZS4MDZ4Yj1GiaZ1k1HLibXKVkjBcpDVqEhYqs",
  "key22": "2ccr3oPiySs9y5dcMrdM37ZmGdqEcnL64BCbgLeYrhXL2XuQttkuB6gTB8E3XyLVAPE5a4Qso8LAGkgU78F8Gouz",
  "key23": "4PAUMeUqh2esyHrEpxsCyWrvcxUiLwkJDmj8XwgQRYWwA2WU69SFfZBWQnZhYdFmuRs32REP8thxShMujUu92Xct",
  "key24": "5asr9h8NybZbi7mgpfk3fK8MwoX9uaRXVbopn33Uu1KAsEv6Z7HUUtFCan4WftPU9hBuAtSV5Sds57qYr3xnXuQ5",
  "key25": "3wyvVkKiv318pU8W3D6FZqiLyFEQcoFojeTudmH1Vj3B9V5i1iPv5hHvjYqSyrTvfzCeAwrE5a73FRbApbiNxwgz",
  "key26": "2WowLmMWHG8WtV7Cwt5SnY7U1iV4YBtVM7BiUfLxBqaBciSqwnnCckLCVx6epmh9JM55MonzBwa6FHGWSpYMjSAv",
  "key27": "3UaECmfTZrqHWcdqa9DTj8oHLzD8SLVkJshH8og4Y8mKANz7JvPLKrZ314ibtnw6YoAPzkCe95b8hv2VAixXh3T8"
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
