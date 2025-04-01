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
    "heCXJMf3FNVnv7MgWDPsjW1b6qXEHDRnB9MquhrUT3S6uDtvEbim1ToTP2hXpJ74KdCpgoRuueWi11UzvnuNiJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REasqygVfQBgbd5YcgieoUhL17JopqtUaZCsmj1vNtgPoeTxpvthdu6mys9Act6w7R85FvF3wxxmRxLXohXpTGq",
  "key1": "eigKPpUyBtpvFfHVccjjDry3xQSMJrQfmDJN56dJN95j1f5dmJLRaPboGtaiTsocfaYqHP5Q3isFp8QS3dyyvpm",
  "key2": "2XQRsPuax9YQJSbmb22AFUNmR3xwkehJS9rqLKfULp4trqwrepDiFSb7bePhyhytrBm2ByfERdmBtM3XGHZ8WPuc",
  "key3": "3nhVAYKiTyGyMptquWUBGFLDKU6yHy7Fe9j2hGBPnAXD5aFxg4z7ovYTQrJpNgDHYyDQLq3XTAfvmgt4TLFZ6j7E",
  "key4": "2cfwb4V15Fb5HqfVvtwZSrPnw4VfqzYk3aVwQbZwbxE8BCRd2S3GVbDQ2vG27tNK6jirwA5F6rnANzpc6FDXSfrH",
  "key5": "pWhrSNsYMxKfotZSVW78Nk85Q1YGTjmnf3jnEYQentBMNSBW5SHYgidDhzcxS8H26Gp9FjLRDmn5JAfQZiaYzkW",
  "key6": "5RAmompWXUFQevZ6uUGSFpfexNNZJ9MnaJbsoHzKXPKpD4NHsv4NSzRzVj9rfdUAt2SwwBUw6x6dnarKhwGREWwN",
  "key7": "2eF5SHWibNWDCtiT38CUiiMEJ4Vuk3NyfqAZsdaFM5Tfk5ypnUZnGSPefW7964osSkVG7DNKayQK7C9p4qzmsCJy",
  "key8": "5kHxd3FdLxkPpDd3TSiPtnffzpg3nia9UM7hUVKTniiQYBWbL1z5V38TtLaYqGYjGwYYRMNGYVgn7M68qHeWWy6N",
  "key9": "27hjA1hiNSspuw9LrT3T9s2kh9j4NtGFj5YyAEZ4ZSNQdF3bQ7LyqYdz8eMFgMhtv6NVrUDTejft7TgM7sq3zbti",
  "key10": "5YqkxheQ6pedN3PPvzJ4XeJfMnR2zA2HQoc671e38D6qahDacZV9KA42SQExzF5TNbfFVAa8AnMGTTbsmL8MX1ZL",
  "key11": "3Ebvns1ud1u8ywntKmNZCa6kwRjLUXgAHp1SxUg9JHyNoCZbNXQ5LcHg5HbkEzuZg9te2caw4DJA69sVxfSUmxkR",
  "key12": "2RJbEfpbdDjZ63GneLPooXkwyRZt8fqpSPhc8a2TfAEupTC4qPCLUt5utH5KGppLEZxGboyyyP7QsmrxPMk11NPU",
  "key13": "3Q6LbeJ3qBYd8BDh6KVBG1guUWXYenGLUysL2swATfZWst1RyMMBP4FJ7Lr3Tjj7LvTnMeHwiaRfdXeDbkzhgm6X",
  "key14": "57DvqEsLXpopLJLqNGdy57Jej4DBYbUJHVnYC6FXWT4tBcFKxWqjYRUsVPBNEwVkmL3rNfUCfLxKa4NK4ERTUQ7L",
  "key15": "5aU2gcficYawSsWEMM9Q5tMHAhoGExkkGVZuY9eELFPhQZVuusDy19rG7H6aaMQUmBL8XTgrpXiUYYT4NfYLw2wW",
  "key16": "4Gkyf78xNs1yNdjRWhSuBxagHZ32CFp9jC3JS63UMoBeEpng2ZSg7zeci3fn6VLb6bYbZwTmHDXaA25DNTq4i7fZ",
  "key17": "sQZpvoqN4SUg4iHXo8M5yZK93qZeUES6EGZt6QXvcVSGo3MPWNMWJVUBJUakTSPVji6zoviYYN7XQG41WZHf92S",
  "key18": "4Ex6VuSF649vCVY2YjGeBX4TVS3fha2Ft4LKxwGMctKawjA7Zh7V8SPn99k8PD7ejcydPkmNLjHM4v9QG7Q1xveZ",
  "key19": "FWHCLp2X2xRBPygMjRs8gjgfgVq6DhcEqNTd2uRcS28zQbi2fLSqoXJYyqehaF19g5xW53pXUtYriq8YTiHk1rQ",
  "key20": "2vviyqEPktLxfmZ5vRCnQseHa6DY9AxCfpZeTazZ1HpEUrQ6fAmzCKvN2BEYZKsAtrryrMvjHf8NrepV5K11oMb7",
  "key21": "4ghSCQazkhPVTKtXqoUgmFeXtiGDUE5tfGt74uLhYXTnVFa4vuJTT6ApWGeEgbWFyNS4YZG5JvDZHb3cRFYZTckq",
  "key22": "54bWfGgxP9wbCLXWm5fajECuGBo4xqptj9PKAe1mVJMn4omR4rs66fX4MgodKedQLyR1HXA7BU68jj45zRsxqwJe",
  "key23": "2RNPwwMTgH4nptk6kZCziFWnYtSADTfs6EW5BWxNhyiZ6SPxctmn1cC2ykrK9Lsuday5c4T67kPHpzy8B2A1AdtD",
  "key24": "2B8oGBbGSzscyf1mGhYWUfYSqzyVnr2Zo6CYh2yU6wttdJ7gj6tXX8RdtXk1hFp7D18dBv7xbVTgEzJGA1MYufPP",
  "key25": "k6XRsyehgHAvqnimEbXHzjVX7Pb8ZHPnnzmjH9A5ttWKRd1sythd6aK5zry5FJRYuM4WVhFSaKt5jooUGnhBePY",
  "key26": "4qfmv3ea8N6EoyBKd6spht9LxKCw6ievbuW93Vmko8fK2eegGkwQrnsmLcFj3r6p859sgGQyzSt9z2RK4iVUh6Xz",
  "key27": "5zgcqE4j7B5m7khUEZuXwAW5so4mf4zcYQpZN53gRhWDKtA6uWQ91nqDDJuKjQypCrtUnnkX8X48aPKdoKRi9BCf",
  "key28": "2QdMjmBtJEErggmBs9zLSPoN7JpXtytpAB3nCjMZSqsdQewqtuKLTvcJaVgsPXbk8vYFv9MxRVtkewwBQMa6Qg5t",
  "key29": "4oEPCFa6UBnt7LBf1XFfMtH9r1cReWmovGgATmsR2bmjrcSKosnuxBcYBPJ9tXh8ZvxePYVgM5HP7bpKKoQ756h3",
  "key30": "4c5QxRTfzZvg1x77bTbwCTY86A5tuqgQFywohYXoFps9q6Ff4GhDFxMLdMD1JrqUfx56jpQv75DUjdjKktAVPaiG",
  "key31": "2uqfBXQedasoctf783KKATrZvNypsNLVd435hS9es5ZNhTcuYdz9Mg8R9Bbon3U9z9kRQfBPiydZNdN2N3ATAj5",
  "key32": "2eZxkJDUAA57d2YqmhVkSw74nQ5qX7XkSHdDNxG6Gd4kmuDvXza5SsHzQF9fPukpPzpt8KC2Mmk7PgcoDahzk2MQ",
  "key33": "24S29mA3fetKX3rcfWh1dKCVce83sWmfcgFWjYU184ytvYp5UZoUvXpsJw7pieWhyJTNhaqaqVoHYiBo2NnZcBvq",
  "key34": "4844egPp1SmQm3jQjcXS3TUmJdozXRXUGa4vj6cT2jUiFBFuJXTfJzU7wviNjgkZwjrnAgNuT3nJqvoLCNbtQppT",
  "key35": "4SLbtojpnRqxVSxbzL2fyfCXnv6gowfKtQGiPuPPu3pANjS6zTFhJbpR7yjgPNCLE3sbrCkanprC2iR2QQAoqUik",
  "key36": "A2S8d9HNkaz34xetcVjtmRHkbk2KrEodHCPHCWswXyeuCJ35yw5aa81yDJayVSGVuCQaTrDPN5BG6CASsYD31Qc",
  "key37": "66FJs5gt7865k9DDtGgPH74Uj57PCpBLa4tA6tA7gmT6wjbpFzh9eZTA67DEsLHPLcgpAwareYubD8ejGeyUYyyw",
  "key38": "QXG7AydaiuSpndYmniaxjGPCvDRmdCJMstcX5jvsE5ut7QiAU3rVB4CBNriUeXysKUvcPcHkYDVTR1E595j2Jqp"
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
