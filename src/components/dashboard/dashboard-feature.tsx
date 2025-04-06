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
    "5x6dKjQuhEqhErbDE6mZtzprBeA9G5bnueDiBzNU1KYxZkueVAd5veTyLaJQ4aAUApfvUsuyTL18kvdYeEuEbxHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oX632epPHxjERTsSMNm6gPHVnEaR4rNpPFqQf5o5Zy9GW6mHgXNt5ooUg1HKCt7sXFKSSFro7McQujJtVc2MpHo",
  "key1": "4mysYBop6Ks5aJRJj6csmKsJJAvg47wCgt7uAsoF8pU3gUQ8d3odWcaPfupMy9CEUn383N2SBbWaoET7FLWiSsy1",
  "key2": "i9K93MaWXZPzeYVBTBVatUKGCsSo3m5VknDuaUE3EUP1TRGN1FG5ryde6CUgWpKudb9ounub1hUkATQQd7QCGd1",
  "key3": "2mv5BfgNycGrD2oSrWycV9akNgUTQZDdiY8Rb6wcqcygNCjKc2xFDuXsfMaBejcCzJc34zmwrnux5J8UcoyLeQGc",
  "key4": "4YpAMRhUzo2PC18C7gnv62QuTXHNX1NKyxYsnf7HwbRCjXSV91WdTg4EzxZWpXa4wShWWpJLz5e5vzmWqBjS4rj2",
  "key5": "2hTxND2UMyVPWbUTNyR9bM3dfAFqJX2u32nQaYU6LAcVo2n8u2imdosNJo3wZPvaz6HiF5GQ2Nh7cMZyLYsgUyda",
  "key6": "3PY3AzYaQqZqnh9EjEeh26j2ajE7psE11V4r8D8CuCvzV86TwMM5pxjQHMCNPcmUmUudrpjamNcTbfxjGYfA3YwE",
  "key7": "31BwzwVTUTGwRR8AoRVEyPbRikA6FnituoBhjnGw9JQGZYSzH6DekGEsvCzoZCxpxRCmQXk94JW7Lm12auFS7uv8",
  "key8": "cbKm2xie51AFNEAzyMzvdi9u1KFHYCmBAVz93ET57oUg14urWmuYLUfE65ajfJ1Q1Bn7pxdQAzRqvyKzdqiob93",
  "key9": "5vqjYGfKnvNNCyPRHuwA5EHfLKsXWS2LaQAeX1D32J6CsEzeCooBc6HMDS26ZSd9qFnnqerRrfcKitFQVqGDsF5P",
  "key10": "2SeTzvPfwXB3h9fPm4gSXSZMWBYTR7q9egaDz3ycm43NVRFQDkMsYotAtGwEvn8Nkeq3tHspXaj6KB4E5tNd2Www",
  "key11": "4fYQ7jcU2UVi8tqvt9Q7u3veRK7g6BBw7egDYyHqHJWDpogxutjZPhpnmZQaF1vQmGykM4RA7HJXWErhedMXggv",
  "key12": "59mE7LLjqQ2QsBaXhrVJmgW3wXbYxLS9xA3efw1Zati6VqZxGzZLLeMhnALVg3FD1uhq8KYihFXPP37p1VQM6Ei8",
  "key13": "QKUbhyTJfX8PgFQ6UBV1xarJjo5k5SqsJSLv8TTBoYjNnAHv2EQMw4KqEV4BJmDaqWyVfKSZxfUqW8KuekufeFv",
  "key14": "56M8CLi6Huk832XPZYXyCb7cgUswM4LHBcBfjuyQ3zgKnTdRujjrJmdw5TJuWQKvNZZ8eSBk25L37Z1LC3pnMWdm",
  "key15": "3XjRfTwuJucZ4jDmChbuQbd2key2Rub3vwDtm85vgwrycpHqneVTzgFWZ2Wp6qre6bhvZK6zTYzkLfwG43nAqqCX",
  "key16": "47wFVChiYW1WFxHgc3gWBMnHkDT3H9kNPyXgqXT7xWZvcWxzvvdcvuhGBoLHMG12QizJfHt2bCs8qAGqfLhx1RAB",
  "key17": "4VDbfZ4AUubvho8ZJ89tm6TDHnzFQCbHLK8Qpas1eqNnyxopLFKDYsjcnoxU1M7JASmcSrj6n3zaTS1uDFxTFb7Z",
  "key18": "2gGurjTtyhFnhqBkzsesz8zDsDtMQXep2ooMjwBhK1qqb7AYCwuoSY8N4Ew1NNveBMoVySJ7mRm6r3N2xnHUUFU2",
  "key19": "2V8n69a1CPQY59HqknrL95gCSEtXHa9i4htAn4LBUPojX8QYzwxaCzG4Kp2Caerfug3n7NW5stWTa7Sk2fn8GPwJ",
  "key20": "3ajSbY7BhJytXTHY7WxH1v5xN2vbiXL5BVhBubjimgPtB7hgA6jUg1qeeg5hJabRv3eyQS6rfLXhVYXnaXUfKR4i",
  "key21": "33pEhAGY1FeKypz4UwkxafzronJzdUej6Nh3WQJJgWnJUk4MT6jwjdsqrZPjMyDFacfF1VZusYGxctuoJEVUvfWj",
  "key22": "5Sy1PkqKbggr3RETnupUoNp3fcy7Pe1Cj5P2ATV3SwFZ4ENQonDgdYMKXcudqYLtCXDLUPk7NmyKx6ywpCCBYriP",
  "key23": "2m5DiX91kn4TBkcsxEEg5897vK23LKK5mtZUKBQwZdtLgR18RvwmNq531wfsdPQpwos9q5oh6YLyx47Z4LHffMKW",
  "key24": "8jwYtRiQ9oFP7woPxhuADhg8XPzv3FTVQgA8DHgLLB28aXPH2pPdDFKwHdqhZayyoLuuQCvp614R8qzGrw6PaRH",
  "key25": "5SmprUWDv6RRTL2Q3mTZeqmP4ni38mTPgrgbrFS4671bHY7SwGgem4eAXGkiY3ZVyv7QYRJmFsdmUrqy6BHNU3Do",
  "key26": "4rKjyLPLNDEQKb54YaFPTB8NBbi8EJ7JsGnA9WgtgU9ybNFEwpu5KvfYApMKfWcvV3uRtXVKvgHkk8UsbxQT8nic",
  "key27": "4EtKWMhru7fMMziVq8npV7KTny8FahXrrCP4GBvXRh4npSL478dzcj2r7NBVj6CcXER7j8QCVjgCUtWvWi1aNnh7",
  "key28": "47jnmWQLoPjuxmPLdByhkqMMDkmsZZAEf4cUEXuG5VkisJi1KGLoeDZ28D2pjyyBuQ62RkH5LtWjJ2svu17nZoXW",
  "key29": "3MCUF1HdwwU4ZSn7svZxtDBAd7rzTQStCJi8QZMuF1B7WMHBgzsph9TL1PgPEzDQYLsnLeyk88HFga2274CrNQG9",
  "key30": "Gjv8583TFFviNdaGwPS52TfdBL9NnRDpgCsWLpUFytNV2xFhcvcz1crvLjRUS3ERHJ7zZo5J9zwFvSbnQu5xUQA",
  "key31": "2hhE2q5vACKxvzxDxkGd6wU9B3MwELX5jHCmwDaH4Swfr3sipPmx7aZ8dFiY2ZHemiXx2iNog2Yx36daXyM9asTy",
  "key32": "5zW61XYn3EE69oJh443J4g4o1Kv9aDqUGSTgn31KwKZ2hPjF957aFvRzE5Zr91g6fWgDVT2K1quef6xKBiSLk2TA",
  "key33": "4MhJzNvHUCqvbcQBssnFpwY8mTmSnnoufP97xAGzBQnx5swE7zoknpEDRty11Dx5TAenxsahtUfcheVe1Ghiw3ni"
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
