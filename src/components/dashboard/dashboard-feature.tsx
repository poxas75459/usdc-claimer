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
    "4qyu7FpQHd43W42YeP56gkkV2D111Ptb96sp6WptMQ24rETrnxkR2e83zWEY7bLnNp4oETkqSYBxvxrpfPiJxLSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNB4FFYNtSbd6UXGdk8bgQ36eoxN7bNWaAePXC3NCyktAYrWt7JKCbgFR8YJ9jh9BsLQTWm9kimDJsuyQNGiYW9",
  "key1": "2xAYoYbE6mVBDfR2e5tHr35jfUtc3Lif7GDTHRCiNfXjrLn3iGDwhVz5dYHzs8JzhPD6bp5SRANHvZLAbErpccsz",
  "key2": "5Yc2MaG6Y1ZaCdRKWphT2LrFiVtJYwPPGbZ6rtBhY42iA8oRk1TEtgThMCTCnSanS185DCvAFxvxkngjVnqSK7GQ",
  "key3": "3JZABKras9ZriHx2jmVNbqiRQPxTaFJfVZrgV2mXanQNNctaH2VauZkSaoahH66nZfSCU63DsBVBA2vbKJzpQaKw",
  "key4": "3qCLeohSyuhFW4AW5PaTYBUF82hSHnsjoeReyDjWd6YFtTJ59RmXZTKaCEHZGFDftxkvB6gZj7r8envgNazxv6g1",
  "key5": "2cr6BJkpUh4scg4WQYxyL3mPz6qUWYPFiNCu6zYb383tpdBg3FBem2dnQ2j9DSDrcN9cE29QxsgBtyYkrVF3qynE",
  "key6": "HSVb1v1nn47hhV6yZA1tQ6eaGGEtP9d2A4YxiGEj3AEwnkyz8seuDZjcNP1QZjrWzmiH95YAajrxq9r1NubMAC5",
  "key7": "sp9LyssjpHkMGkRLjjXKKhw5tXY1DRaRAEQ1fpjxwa4mTmGRwsGre1yykL8z46BZjsiPGT2X2nf8JXiLKLTjCuN",
  "key8": "2Y9Dn7EFFKMNqPt7n6ehKJvzdfqSJMLtJnkoiJ9GAm6GBixUFszamSGSmtux3tynVJuTDj8cqfpWVFmTwrhxJRb",
  "key9": "2pWbhu5NoTTwNMKrQr8L837Z7nJ59ZZv3YaosP3YMWMirLB6auJZLQD7ZqByhejfEsBhAgctqv256bDHQi5XXk1o",
  "key10": "3BW5eF36ZWRB4atYfFpGjAaLHp12vMAfckDbUVvfciT3Yt6DvyHACyio5Z6ZpFZifjkJ4MsUGAdjmps5mbnezHsU",
  "key11": "jSb7zopVvncLXubCBangzXygVN7Kf4YJeASCLbjk7Jmqv8aa7fvFM5eXTHjpoVbVniJqNRprbdqmvn8CE4FaFLC",
  "key12": "3i1LUeXUNbRSLQqfYCWuEVyaCcH3wDpDYkGVZrNUqoejuudrfANx4KxxuLm8nYhi4VHrhXCodhS6Ew7BvXGiSJq9",
  "key13": "21ZTHQdDsqkZ9wQ61HRq9bUKs3bioP5WeM2cKbMyN9sCE3DWDCxdFnD88zq7sfcQKWmyHhzrSAtkE2mdPhE2EtJ4",
  "key14": "5f7n45t6fByHJ4V15fH129hp6PfSmjaTpMrEwjCtdA2gzZt4E33DxSzE7APBV6JizZUoBEdmHDBkFrBjc5WutbS8",
  "key15": "9YU5okHQeax6CJiJiZZoGYt8GWt8G2YUFQPHJtHV43jR1gH38d4pxNFmLR1HNSfxjyWeW1XePjv1DeXZtv7wKJJ",
  "key16": "3yNUujtcGuXTa7XKN5R3UhytuipBJ1Rfc8BdRWuoYfkcoBZ49DUPXF68ASFBCPERBoqtMiUTiiCoDF7weJ6EBVC2",
  "key17": "5Tu1wumgaazkTmEPUDznVTE1f2T9En4Us8Zc5U8ADLPHSajP2pti4DXzKtfdJhrX1eAFt772RpLiCrFTkpvpztFN",
  "key18": "2hG6y77TUKptRaXuqKCJhac3yHKfQrPLJj3gqMWCxJv6mYZCCNbG3nZyatJ3gXM9mCjV2xkpB5nPmPwGwHuAsWLs",
  "key19": "3xPLW4psF27p2KxqnbskjmMHnKiYoTq9GVUpwUfeiCU1JSzA2WzfECeeuNXSXqQBe5wXDc6XAo3Li5gBPH91ezdr",
  "key20": "4FeQ96pE4rBT65ZwnkvXtJJyz2WDqLMriPZaJ8eyYCAohbkoPqc4JWHPkg8qb8im7QrX4miNjknD1wv3geQx5o5o",
  "key21": "3d6T6iNfe3BmAS59UdCXdSND1NcQxgHQcKR7HsoVYWQvPhHFhFP3rKyEUcbUSBSKvA164XGtUrwXsrpy4NYptR9i",
  "key22": "4w7rN3fXGM1sZou3zdqfWERY44MzmztiFhc3GU8CxTbtHDTUgULVZJGMBFJmmS5wjpSR9RWi7ffk8drk8GmHnm6o",
  "key23": "4nY61r2qatKe2oLDKqKx5jL9Tme4ATtj3PTht95usjpbZahuZA5weJ5y7P7mPTVhcnz4DiA9e7T78ydw7p5Lx7oU",
  "key24": "4hSDkSjBGwGXWDYaVnnhm6BcRkQmi1d7WB31XxpMSt3UpKC9PozZjJ3iEP9j54UoJyqZt37qs7N7p4FR7nuiekd3",
  "key25": "5QwEj9Z4ysJguwHw5ksXpkwurxZZmmMvhaFPWjqqKzXuYMqiFzJcijWZDfujRDbpBcC3hTPyTtiarBrjkRcPez65",
  "key26": "5DH5BMWMv8sWRezYQfQinZcDBjR5k13SGTH4gsh1R2cYiuJ3RLxe7XxDz8naPVqeotKAy6gi9XG6FGEd1KBTqeZD",
  "key27": "2Nx2um6oCx5EaFsJFQDzhyTQHYFAr8rM5SbpWbdLBaFZdDs9n2MQqRqTg6jfKNFbVKfUyA1RNGnYTm7TDzXBHKXh",
  "key28": "31M7PpCM4je5vaJ113SmLQiJ5YygEtEGW1Huzkad6wyiKBWPXEm4Pn2Kev54bNct6Um7GMpR8TQp6fXURKq4qF8U",
  "key29": "JJFudeuV3kwStZK6GgturN8zxmDywZfgnyvndLgEQ2JsVhG2aiNiY6eTdHuDt1HXuYEUK4Hu72EWtCRx7wgFWpx",
  "key30": "2xCtGFu8AGok3qBcjEme62xPMRygVg5T5CT6RH2up8nyL6w7m6dj6jyPpq5anRBQJXN47kbkuRA4gM6AEW7imGcp",
  "key31": "4Tqds5evq3XPpWmd2o9jPtWjRTX99rBAwveCHvkhW4Vv4qKuHXhsb4stKQB7ozFm6nJKbBLRFkqMt5i3AZh33Z1E",
  "key32": "3NAUEagcuK6Jxsn9kKGvCjzhtr345XtssguHYqu43zsC3aB2FKDdx8vrEEp1NyPaitDfPkhhwELj7WmTPMjK1HoN",
  "key33": "4PrYe4KQW5d2MRRhkCzHd8df9gjMH77b4EbitDuJn5oGxfe3V36t2wiwjLZmNdQvvzWi3hkB6FL4crVdxm2eVh2a"
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
