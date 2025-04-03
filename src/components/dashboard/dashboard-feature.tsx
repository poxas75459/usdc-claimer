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
    "5v79aYxBp6LkAjM9wHQpKWiokPXhCdn5qjfs743earyvVqJWo8wMzcwGShexXcE8MWESV1Uv3Z4BGYiLhHqaKMa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZupxN6YT16ZWTLzbYtW3WCKSLeBhLGDYuU2pEfNfhrUmGHTi5e6CJFA9rChtGHJ8x7qrTn5kh14dAkmWSne8wG6",
  "key1": "pYQtnPhvkt5aSFy9x7zZNFsH6GnVbAiE1rSzGQJhQoBR24H6g89LNta2RJawLh9jUkhEwr2KAmytqpx1rcjxeha",
  "key2": "5JxVzqq2otwsTYJbtvxqWuWGEecwyz45TiVovGwydKyzvop2QitQjZtnA9GoQryAGm24sAabgz8MG6oLNWvFViDj",
  "key3": "2SCutqDirqGKAAPLKwNtNqafV8PxcU9JVktjUZpbjRd1ZLQ9Ys9Tkh2MQYhGSrM45y94PY3RjtsrURMji8FuDXyW",
  "key4": "DWMxtPLo4b8ZfN4Jndi3Rv4KnDAjJKDkSLhSj2K6x6ThU55rDGqccN8TS5FHzvyoSJ9pFvrJD6uqszsGrV7XQ2B",
  "key5": "42uRLWrEgtA2eTJ3fRHiCpVxcp9kr1QDxVqsDTdcE4pf8wU8hv1zp3t9dHZJ5PgYJxArZHhw1KKHgNQJf8x7PJ6w",
  "key6": "4DM8cR6oo36Lu5fjBCzJeesMFLx1R4XvcD9uaTggahMhE65zSop2o1o9GbxDhBJA3kdufbaj94LMgeff4XcwWDBs",
  "key7": "52YsVqj7JSwziHAXHjwUQ4PDGBGaKD91ErSK64FmvXFUmCfhtMiyqJDs5FN8AZHHyVFWsxtxT2MSeokq4UVS8E8r",
  "key8": "2F2YZfYq2S3wFQF3hPMcPVvqAfSFd3aVC4AgqqAcqeTWSPBbwpHwXCC6sVQr2Bje6sxsMWVFTmsxAA34V3CWfg6d",
  "key9": "55jt399zmVRMdj1YhRfA5hRYB1ZPyaqfXxK6VWUstCTisiyrWCMrY34vwEn7WWHH1W2mLHZXeZHiSEbKdr5dRhV",
  "key10": "7imwCu5HJTVF8xtgmrffEUxvbnV9H67Av3gYJvoh6Hz8wUPkJcbJFUu82Pnb9nvoQRhe9u8Agi13RsBjJK4HLqp",
  "key11": "4k8pZJhegaFLAG7gzK63HKxHPzfGfPSqA4AD2xqFwHQE1t1DL6mhEuLmTqDDUXdVfujoYiPxJfDkQy8k9rZ4rEsG",
  "key12": "4CQ22cx5D46nUiKZahk76JRhDxLzzDDpZ6ey4BA5LsP2GqwZkFSGy9jSUkDmJp7KbUup3GsEcFAUh8CgK9opzQ5c",
  "key13": "4vpLTsHS94PXbEfdfYvyiugWx97KRhGVc1zXPfR8CNtEE3jKJ2BL5vxYcu6BThBwPYeuX2deT8VeitkgF7ZuS3ww",
  "key14": "24sEF1UG7rgYNB1ssJVyrgkTy2UYTf99WLi15yJCHUjKsXS8rbu5S3Rsdo5wCUpau7xra7S6xwyuueNNNJ8X1XMc",
  "key15": "38Zred9xBcM5Z2yT9mU4mmdQggrMsKfYECFmUq3D9LjYiQSURDj2JXpgHVhiG3jdhdUxzcQREbAGZRdQBBM6QyoK",
  "key16": "4kPHV2B3eeMy8Xf6ei4CWhqsbDAjxhLCAuybwjstA6VetE4dkDS4f8598aSbPDP2Y1xqfFoLPeStE5jrnF7vmXKB",
  "key17": "2ZhwyckBaMvuUxqMAXUu2j6NtZ3mXXVywwW8AKStkRx3ZArJnNeBGkabTVhB6n2KbhWRYbbjKgoazP6BQniXSoPt",
  "key18": "x8zgX7BW6TSk1p6v21ucBTtfyLJXvaanPKXJFadg9E6CCuaixMftcYWgcPZJEy75bcto5YierGmkBJ66WMxeFTS",
  "key19": "2c7smEKnJFqqsATBqbAuV88bJH6FXCjmBn7i7jdsUpQ6ghaxiJotCGcNxW5nba7k6aQQDDxjhesP3EJycapFRGcf",
  "key20": "3NGhqQNAiYTEQsCNra445YVsfo8793wbMw2rDWeGg223Nu8QfPEVgCrb9ukpmd3esbaRH94gtFC6rXp3tKFficMQ",
  "key21": "2zAQ6oB8DjYLwkLHMvUKzt9k6RYZdRLn42ZhpzZAZ4L52TR15Vp7skTHzdHRpgxFJVrJZ5f1BPFWKogg1maBsdEs",
  "key22": "2zDNKBctGjV6CFQPXK6j4Cr6yDz7Pg2qpGfTm5PYbg4YQe6BQgvdA1XFizFL88E3rmHgW2u6s4Wt6PBAq6YVxewn",
  "key23": "36yxi7bUqBAcbNqpvsyJFDagNkhoHkzJywqud7jRrajhthqKXF7h3XvxGQJhb2FzGDaZmQYnzhcgK2zzBhp2BpC",
  "key24": "3MQ2b43hx1TwJih6NikrZGMqV2r9ndi6CkTb7bYLXmvuRHKpKHEt9YCgL47eNDdzwL6EZqMAB4UjDFuDq2x6nhwJ",
  "key25": "JpqToDN68WBEKDVLZcfwsUBbvfkXNk5cGFACkwTkJ9i972VUsL3Pp4wzgruL5qR4tcJZ1t9AVCkvUFtFdJsYaRt",
  "key26": "ZPWQZizSSRR6YoJWPSus1cYE1DYc7n1gVpnPeqkRCRS3WpddLR2R8njVaQN29qbLP6mVTdEwwQ9QyCUpzW7AH8g",
  "key27": "4pbfKMCxsJJpYoakq371UbLKUFTjtezdwdnKkq689UTaFG7vkyq96eo3Ga6cQ8GjZ3ohD9u9XRojFwqfjbq7SRaw",
  "key28": "3jr12RZ37RA7kYNhJmmrYHi9mdM9s5hcv9n5HXc7MXPBdpGfvFvnwfiMsKQ6R3BtTPUeBBQUhSbTKZtDW2PjRkTz",
  "key29": "2eToa5zExMeAuYczAsU4qQSPGTfCBrREooPXmLMW21uzgDRW2EvM3uc8pqArqivYd6bjaUycGAkgqy46tENdjNGx"
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
