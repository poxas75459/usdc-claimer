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
    "mbfud7EYH7RAEsu6jCXusqHXPsvZYQzvZWcPr6jEnXrr5j6YDuCBsj77fJGpakSsjZeYeyEEQgcf1hqdSouQk2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nY8nMZioWaZZBMobF5LzNepPkzCuVdGtoUs596hvicWowbB26gHAHoGpaFYfqRe5sdesMrK9FsNdwHwYxsHpfte",
  "key1": "4RVMAMh1xkMtSC68X8GNLUjGSRiei7URrdxTcVt5sitd9QVFvWZNq12LvU8Kyy3rLLXA9bugfuXE1sujG36AR8Kz",
  "key2": "5yZxmhWMUWoMstom8mvKaEAJpeS3dmmfrbfjuRZbEsGWrhbfGYubh5n1DBDYGoBNBSWfgBhVQhzwzis7jvpqDDq6",
  "key3": "458nBZzYo6xUgMwDPMXBkBDdaa1NS1YnbDn3aN3dBDd4Tp8Go9rnQaQFZgqRdCsUJ37NBFK9mbPmxPbjMmF3tL3M",
  "key4": "3ti9LD9Rsr7g7gpRCq3HFAb5AbxhHbAVrP5yVDBRjJZWaMAvaaaBgagGGnmW5NEqbWNBhnc5SPc1c4XYJTubAeqR",
  "key5": "2JKHHDC7wm7PdB8rVhGLTNPYBF2M8pHXbZ3epKbXvHHigcBi58PcUUvC9BJW27FATAikBZWcsp7KrtbzrGamzFte",
  "key6": "3qBoSza3GGWxh3qo9RL9R2EsMT8aqsRYbjZoLcpi6brQDzJDAbvVViyLhWpjN6wwJNZegwpEcTTgM3SiS2Hi9CZm",
  "key7": "3xwLabzCegkwqfxZ4YHDC57AgHXV75Y7T72rvY7PCKyySg5hdea77yZUMNVS964Vo1yn2EyXxAbLkwrMiHEyPbqq",
  "key8": "z66vAqB1sY25caLpXAo25LMGJwudFRXCz9ZMdsgCLnAgVdo3rcMGZC4xbd66JYdWQFghzAM1oa1q1dmfNzG6R8A",
  "key9": "3JJD21wC1WsyXBWmbMQEN3FMXva8DSVUXKWebLDeMKqTy81AmzEVSTbiXTH7qRQq7VuC6tQp59K2iFNVyj9tJkTb",
  "key10": "4fWE8y5ZdpXdwv84Fn7r1ritGEbGiyViUarJGJWWxpJyv3Xy9L3oqD2Erua843jqnY3AeaUCfXA7NGAFpaiV9z6J",
  "key11": "5RGUcJLNstbB2n3gvqpG8A6MhK5cqnSgqq31EBCSJJ9NUC276t8b1hjKfHs1Ph6pTWGcpFvZwQN27XoJXTbs4koe",
  "key12": "3YmuNrbfJT4VkrS42sQJsg2fPWMSopZFkaRKhqYq5rNvKvGw4rXoxQdJsFb8br39UCWMfTbMY7VCLYBJZrXW1rHL",
  "key13": "5Jd4wkPLRpYL1o8xwWTk9ZR3wPAGUbnU9i5Rnhsvq4Ywbb8sSti6k9A6cK396F7yaV3RnZPuJwMVMjR3YoJxTyeu",
  "key14": "4xM3hQ5ZzCDAKmxi7ikrkUeFz49aWicqUSh42wG5G1n6Q3ytxNgidPdfHnrEErFnbapaWdPA7UYKdqzaY2JX2Ref",
  "key15": "3NVwiCANGwzuxCFyFBna73XzAn1c6MQYCK4UpCddLatqzNitxn4eTrzrKYLoB7LJNfpTeLuz3ye7rgk7C18CnzNe",
  "key16": "ByQ49ycZUE35dmmej2SxBVAunuLozFWnvmbr6SMo4E8yt9kYue6bWPmu9dyndpQgZLsW7pkqGMwJ7MBzj2QYfyt",
  "key17": "3wv3H2mTyzrDyQnG6Uqwc4p84wa1Uh1tcTAY1fvHqkcCoNHyXyd1WRgqFUQMPqKY4rwVvckxrPVuWJueCdza1yP",
  "key18": "5m2hCEE8WxeRFmHsjXRibdHZyunCigCSBiyB8xpJ1CQRh547krv1BG6ktiaJV2mWionjTMfy4YqteUqyBbf6Njm8",
  "key19": "4NfpcVb7bAc4h8gSMjTKMfhA9WSLrYm17rdMfji7yoFS13CQQkmwhDA79geTbKp49orx5ZxwC4zq4WeumDkr2yCd",
  "key20": "2ShkbYej2aVyh7yX6dvDNrVA7UVfY9K87eZ1gEsgdiWGTSdATZzSehVtfTcrbbEKiqAbcRZ8Xbq6wP5JweR6oe6z",
  "key21": "37hCAQr7tw34BwtpPutYW5woWSGVYovMZEfWK7rE2DkZKWcwwt7mgdw52d859TW3iyRuN5ZyNEdfDg6Xuuuw1nTP",
  "key22": "TkGviD77RxHWYXMGryUneGNyy1zksqND7bifAUvcrsEfFt7XExzTJMBxYQMGS5NYrBSgpVvqJ1RhLRLsTJJSSRs",
  "key23": "5QGKZvz7BfH5x2xxWsCuwXitD8Tf2okEHEJRAZtBqHr7GN85kb2kE9Lm1hiq8zfTnDYoyfEoerqPitkhEdNWzFUH",
  "key24": "39oAos4bSi76oKxpFgWWSUCR91xwGwSrgF4aYbBWqBJJZzszmgxDE3UuWJ75qnpEw4X4LkBDX29foiB6P6XduHdV",
  "key25": "2BUB4woGqd9Yxm4F6yXJeVQtXgwbApaDgxvH9eXb3E2TbacEAsKscPXUhqyCWSf2mikinzAdqx7jW4wqxKBzmLzW",
  "key26": "3uB45WKTcUM3Hzww2MvqxV4NjdHgwtvwzCbU4Z3jfWS4UwRYkUCrrnaZCEnoQ2PBTGRkQWKLDtrczVWkNb4bcM1A",
  "key27": "A71DS1JYoSKDPFrkeMGQM33gXrCbGtZC6H8Ph734rT6FoL2pezJnWMtMWQUVMPQd8RFf22FMWaas1Z84TFDcW1s",
  "key28": "3xZomEfDegRgZ3Wtr18aPcCDSbYhXZTBgtmEVRPJLE8RmqzBNPKXYY6ZGVXdfLaBD1TdBQEiwS3dGmswRPiHr3N5",
  "key29": "4xrqWEqYc8QSeKiXhQc3iE4Z7CvKxxrMMbZb6seo8Giuq8qE6o9cZGd3GB98CXPPzkyFrRUwTonb5REPv7167s5p",
  "key30": "36DChs4MrNWE2k7XHPKkZKdgV2s7ZUvYFmVVek2HmT5SGy5Frw1YLR2LuRiMy5p3NSGTZtL56sA1jXXajjDQAQVQ",
  "key31": "4YeR9oQZKMfXHVhiUZVoknfcmoVbbUkw7ck5tbzVP63dQ1hWZr8UiAvLrKSL7xt17E5VmX5DBhrqpmzyWzPWrHCR",
  "key32": "2Bc4PBjnx9qef42XoofGiFAqnRfzn1joqhU6FFM83bStKasofb2KSRqk5gsgVtcsYDzMKxs1Yusqs8EvQdvgUAa4",
  "key33": "5fjTtHoYYWoTCBVMAokBYHpufY6aGBBd2TjzsXYXcbtwTxRJgSe4GBc6HzisvYt3J1ggZnp8E7YEPzz6qooT9N97",
  "key34": "2gXKS7Yht8Dkc1DpZVZhvxTvs5mSGjX5LHoaoa6eqPsr9DnE13Ek2CZsHQAYczdipugnfCsnjVmVj86gw1QxFpdf",
  "key35": "SaXMm7k5XZAjHS6mTb6UsmkP451yoLxhNEsX89XpDNZ4d6nSDsjr8hA5DpcPRUNcmKkkzX2rHYFyQ5neZXK4Z61",
  "key36": "28obpeDWtuDTHtbQyXcCd2JzDT4b7UowbSkRGmWQ9y8rvwpLmNaMmmRPPpScnpfooWRSNfipSQHnxAjxwHM2eBpd"
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
