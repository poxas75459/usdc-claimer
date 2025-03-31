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
    "2Psv8oFH35kCiDS2nG5c2LPLwHz8AFQaW2qc1M9e55yCq8qxy982yu78TGTjjmvqn8cGJU4XkhQrAeEWygmHKfi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55R1qgof81mxPTJ3FEN6upQETUMoLwFQwpPV8DHvQQptXC8M2pWGtv3i4CvG2mdRhk3vdCUSnkSMQha6NH6JCW2v",
  "key1": "2xGRnR3xFc47U31LexkNTicSLfHzXN3uASKP5UVXCanxJ65F6siVhGsk69xmzNAggvtVXDYHibEwbjd35VWKNMXj",
  "key2": "5RkTrgEaSUeXvY9BzaJNyjrYXTgPataBYPVxbUTBgcNGj5ioQRGWGUHzjh29843NMhcPFE4RyNTUK466nWQve7Wa",
  "key3": "hgSwi6DoWZRsLsjxaToqysheQ1FEZr7mLuyr7PuxnE9rG4Ezj4jCUiXmQQMbDB7NGmHSWfQNMtRasekHrQtN7zn",
  "key4": "53Cd7VL5gwEQNyWxsPhvLEdf3pv7zoVBXLNW1i5Gnhrb322xAvBgUm91CfJWN1P1toMQBjqzn95yy17sKn7g3keN",
  "key5": "q6tEuodrgfRt7eUa6aGqo9Pc3mmVo6pbsCnpeQsQwZBY7ZGat6GLZmdBa3knb2WhZtSKVeZH4wjoFA9eaeYEURJ",
  "key6": "2SYMGM6Lym4ddbjK5Qx57By582bTavqSFTsJ6hcxgF9v6azxYf79w7YiyKzccD974niaHNpRS8fUiqz4KxHmAdha",
  "key7": "2iypxtTZzjDs72woK3nWaPxnq4CAGuhqyaGNF41tWeVBVQT6TedKABkK9XHZqChptHUXmhAQVFHdM6HL5JSBJjRi",
  "key8": "PyB6oKt2xBaZ6y99oPg12dgmLQkJZwmp4np4DFenNYvfHrSXXTwAPDUHv2hRca55wgYDhvwMHu4ttR46encvjmj",
  "key9": "4a1GvmR8PuEfuZUbCJvPi7BzMmGj17X5BknUqo36neeLH4Rf9ZTZvK96UZMAAu1TssHxBAEkpPu4mbSuJENesFA6",
  "key10": "2xAhJEzRciSp5bco1C9KWQZFtLqFksYiHYoC4rLd6TDQSZJGPrfG8TrgTZY4s7TAFCzLEg2Z4q2P8WyThq8thmF4",
  "key11": "29Roh8D78yx7WcM4PgHwNW2onxAU3hsrWYLgo2kVcSarSKSdQytHJf9pFGRWkoxoEBaVyVxBSAK2qRPHKhCwHb1V",
  "key12": "278jhU1kxQiCakvjZupGyyFGzGEvvaxdc5ZpZbsVVzSLHbwD5GwV7BABdWyVgQJEJ39mmqgSTw6rzBw7gMwpZXiC",
  "key13": "5YhVD2MsBi7qxdXuPL2TGgcdqjEimdV9hzuGvRz1aFB6oofiYM8BaTN4dgJefv961mvx6pqoMzyx3ZWX9K7yM7TP",
  "key14": "5Zojq7s2XyQTCKTKYMdjQjY7gpPdepUiLS9emj9DWqah8weFQS354GfnVUxtN2nbQYzakqUNU23v4EvVzQsUBpjR",
  "key15": "3g9Bq5wgiY47cKvbogenNCTUKbzqYD85TgidnqL9fXtqj9PNGiKvLbdjDB1DypVqJWk4zp1kfF2TXVPXGgnLjNDx",
  "key16": "4AfWMTACqq7nuKxNwLpVJQ9ngKkDUCyn6Sduvtsj2JHNRTcrdzMjuoiARYBbr6ratK5sEAbeTy39pAEXx33qVftB",
  "key17": "5wx2oDpkGfhr6EJtfoSCrJGBZfneV2YXEthTQTEt24ZPc6qvwLqnX7BVEGeXTQvCowjsJQWbNwEBeNvmFDDJ4XDa",
  "key18": "2Mhm3xh1rvDgNJkP8kK6jaifzETLPUDKKoUu5frmK7w1t6g4iabTUKdjpjQ6FL9A6Ug2gBBUTJv4YWf3P27AZvAh",
  "key19": "4u34Z3xqZHgmxgVxiAu5kzzZkZ72TX7Dyq5WftGfet2e2ESnz4XEZPo47F5wPm8Gv4p6h3Gi7T4EPckBB8hE5NJh",
  "key20": "3oHvi83SqMTiBgUSfjnNUJ7xzASrAPtp7FYddLCUALSaKVrs8N8YfWRGLdgB1mciEYR6GDM8U1MZmuWowZ4CkTRv",
  "key21": "5NUHuSBRQahzuvQK8bg5QBQQFHSisPtf44zdkpLJ2YpQEL9WhcdfTZhbuyPTp53mU8XbmwAg78NywbLDChDsGmR",
  "key22": "3PPtU8aJuvwXTxAG4mU5s1yDojt8esDwVEPMPybwdxP3oM6XzyyuxauvckBBNxf7sG1mimPw7kYvgeK27Ckf1qqm",
  "key23": "2UX1KnCS1EvJx6dMEbLfBMo5f5LZjwb377P5UZxMWSRrXqz3oVnELC1j6gEaSuqeXoFCavpDsp1SSHHWtuQHVcs9",
  "key24": "5F1rj2qThvRhNSCiTb1aJHL6BWwjvqSMLtAVV7W74TGSdTXXCc1CPJ2kf4H95h694cyn6deYP552xw96H7X9rfYp",
  "key25": "5QEgcpY7t12fium3ByisJLvm7LypQ6PUENMPXA41UBbNwK96VVigLuZrVghxxEMXChZvgJNYybNumCRyWRdxCYP",
  "key26": "3MrR7RPBZDozZ5seP41WMxq1U7LBEo2MEXHtqf7k8gZtqM6C3HjYXxRjaiWpEjtzYciptLpGm9tBJqCQiBnDbTrh",
  "key27": "3eomKVKxq3KNSLTQz4ff17RFCrPEzec96TPin5mGeugksao69t6EV2uxzq398JDqGUUwXqLR3CFMnz3zzYBCuKe1",
  "key28": "2seiUu4K3yBr5K4MHxS59UFeQafqRLgzrcWAowG7CMios6eUy76S2NxLKqNijHAmw5BnUKjePp5Ng9NyqszFQo1Y",
  "key29": "23WGPxFuTAPDSQXKjJLhnRnRwXptYzyYELRJtjSa6S532aGSjB2dGPFWifz8TC61jRGAsoZHPmkoZn9uHHEiEQBq",
  "key30": "2ibdRZT4qBiG61KwBkjDBrV7whdPcABJZm7uj4QQ4wbGSQfMWSFzMMq2PCBzprPU81VK5rS5mAv3ov4qNFQ5ziTv",
  "key31": "3PgGiS3Zf3KUdRYbfd3oyTHVk1wRRbWR5D9NMySuNzgNAfa36RXGGbjPAfqKpmjgNaSMh4PuLzcZAetimoN9YUJX",
  "key32": "48Vquq32qWpdB4WjpcDhdPMWoG5Njak1qAkhTjWCAEgVjpaKTQsriaHk13rod9sBT5Q8qfNgmgSGEB1Tu6d9YteN",
  "key33": "4zKEdSYRUybAPhzh8MiedQ2iEk5nGD3TeBpxFHkamp8toUAUzYC58bipYywzfa8KCtLF4uPxkw8K2hs1FqEgxMgw",
  "key34": "54bqp9qiPMtEfW7asNCmV59Wx4V6UmwrBK2QSrtNWa7mknctJrZh8ThrPynW32eQR5qsemTnWjXMYittBzWaMW7J"
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
