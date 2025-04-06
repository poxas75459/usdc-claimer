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
    "4BTwMZv47EEdnp3HuLeHoNiPTH5PjmQi5Rc9JTu8W676f1hWhrcg1dF8fBdtVq3DviB8PiH3oaYAcuMLRKfgnF3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbhoQJ3eeSqTArij8uZT8KpX5t7FKrvTPX9NyN5NfgnrF2sJBQJJMFAvypDYaNpJ2mbrAHM1Qf8rGKwgAcJgGRN",
  "key1": "3NbpNSH62xha3hzP61qLeCxFaHBvasgPkWvWrKoizopVHHXKqc4atbAAdytnZAkQkJZpsfRPCf8LZzw21QzBhofq",
  "key2": "b3QCEZFmw85yJ4pn4YBX7VFJqhJhQmy8Nua1bvpUqFGj5CCpoWsDAhL2MshDzFKz5ibez9rxzufkz3nwPHm4y2K",
  "key3": "3XT2YSfo8TKGJcfdo1jxAPzPe4DSMXuvFj8F1sRh84wVMyZqHWocWm8n2NWrBNQkGBfSwcX5gChCH7qFWpGG6SmV",
  "key4": "WZa9VqJHz6kavpTo6ALcpMP4FaQCAPbghdKSYt2zgCRkWa1EgmgUahyEbyDefuQFrgY9Zbz5kZKTvzBHBfNBaVS",
  "key5": "49zxMe6BYCwyhCxWjffRtYVpWSEcpvSjVhM7USiixBrkgzm3HA2WtPEvmyqJZiEyADa7AA1MWECndJaog7KmeY3G",
  "key6": "5RoUqboZDCUrfYzv9uyrAVaLCe3TyCG15F5sqqXGagzYPANCHsyUYiWe4opyi1UVH5XRZZ2gaW5BNsHUsW7avjTp",
  "key7": "3Py357BYE15gVS4onygyQaK12G5aBX1K4xtasxZevbcRFoPfFRjR3AZriynS4Ztreo6zbJZXC5Xhq5AxwFc9qiuQ",
  "key8": "5MyokfSBvZtNxZyZRwcxjt9Xg9THB2szAV8jxe4bx4XjmEjthvseUNqYXfNvhPuC3ZwC4PScKPF1seEpwxsw4Fne",
  "key9": "c1gxvjvraBDwppX1VatbnAzJAmhEnR7dtw2UxCD8yEWHurq5bG4tBGZVpLNhF6YjJDrvKjsjZCB1qf3iobAywzb",
  "key10": "3oxjkW4Davh3ZgskPgFh822hDkaDegNK6jo9h6DmL5rRt6SiRFQMDE5yJCqta7rM1xFaweagqN4R5PUS4pMZw2y5",
  "key11": "4tbdExPqixiFhGqe73SyG5uNpXkLsjjuvuDYSu9fJdhc5jEKJyGndw6M9TyGVxsoJoLDXs4ETiFMt6yFzJ3KTNNT",
  "key12": "wmkaTTHQDd3ggwdGe2iPge2NkTzaGNLVaidkobmu1CbHCq4NCjjhUwiT7vkjQFjcpofpiM1Nkbfedew4dSgDNGa",
  "key13": "24g5jzVY27Pg4jZgowfkarqTVHRf2NejLqHmbwKMSuASuyHahXU6dJB6PW5FvGgGB7N5S8KbVUrAj6EaD5g54eX7",
  "key14": "3tStMXUyMYuFA8scaRT6KQbRm9rKWeyWPsRPZVXLAgmxAecbyz4VnwkTZrVRuiCQDZmNX9B2kUin2E4pkwRPkhST",
  "key15": "3bvAE2oLXPE9J3CqxVttee4HGZGBXRW3LpnDTRz4qWYPanwhHzSRhGHG4amjdfajeZYv9HEz4ZbZ9AGPn8PiRjoe",
  "key16": "5NkocznLvnNVvpN6smUhWH5gtQvCtKFuefgSzF9SBv7jvsLGsSNsd6kPepZkiV6LVBTSJfX1nQyq789czozLfB1S",
  "key17": "3irnQpWm71YdsXSUScPtgvZ5YFFKWoFYTnEjh5oAxk9HTG7mzsvsNGUYnvTM2swdXPv9aB7k2SeqDEV6kWimZzB",
  "key18": "27aVSeBoMF9TnJzGjuYXhaC5TyT5s4Zd7KLSGxgx12FtK3N2XKHA1snfkj6oVXaJviA4eQBVEd5ygdAtwWLBHRDf",
  "key19": "5pkyjwJJUDZVSG2ioQov58yZaGFFSbN5UDZikPKj5o6hqbRHrFcvWxSNGHQjyjGD53zq7fpQxccSEEfsthpfKjJv",
  "key20": "4QRCnJZyXHZkvQUdGbanGJ6WLKM9C9CJdmRqtj8bvvHQAsHkqk9Hh8nUHmMpGrnmDiJgyFYnKxKxLC7smD6irik1",
  "key21": "3H3uej4xoigBM5fbUTY9aQD5axS73gxFKXLFWgNT6TqMx8W5UHmomBEVtugBvnZSAVsicxrGB1NzPsy9pbaR9EL1",
  "key22": "3iL7zGrptFXhp5hgdFkpq7975sTrFbTCGgdMWpiW7EXaoRD2DQKdGfLdpAymanvj3WTXmsv7fLFyzKXqC1vSTkpN",
  "key23": "5XFVJPoo452MPx5NMvuMGBDvc5dxKUYLZWsDDiQ9EQ14faJPrrYu6UhCoWExAWFrrzEXjFxbUFaCD2R4RYLeuHfL",
  "key24": "2Lbk6mXHGU6s7tPwzfnxoAc9idVxNkMdK5jjmxjiBrQkyDBSE6GkaQYXRQUPbK2TapC6jLfKdfrFV68uofzK26wi",
  "key25": "4Y7Z2b1JwTganSAJXzXoPZVz38pJUnZhxawsg3KC7PBB8XqPCewSFbBji919Nrd2LZpVJ4K4jwFaKfwZNVwt7Y6p",
  "key26": "BGuqEzCFwS584upB2B2uCZKYa4Juhu7oJR5irMQE4qDy377yW9ZoVFjPTJo4DmxmSN7hbPchEaJoKWX5HwjF9jN",
  "key27": "3Dsp5ubMGmYFUGqNNFucVcJK5nbCysn5sv9aDWaPLLi8QiLEpksqCzHNFKh7T8n2prMaFM4Q5J3q8p4niGGietMP",
  "key28": "4ZHhCwKagkyX32bRHSQHRcNCKskmYrzZYT37uEZW8zvx2QN6Q2f31DXrwCQWnRJJuCqTsLbWMESiNt4YVT6C9zuP",
  "key29": "4oJV4KvhgdqU4BJX8FabDhXCQkPk9tic783b42b99c84wwVjSdYotP2sbtAnGzoG7RzvDW3ULb9fsrzEivHfA8X8",
  "key30": "53R2mPaLSJHj62T4n2KN11L8sys3d5vNbRuSBiCSyr7P7qYSTet6By1V7SqMc84Pf6GFa7HTvZMERLAjaqJjm3G9",
  "key31": "2hceQVo8FpoJCRg9d9UsPy1F7DSxYxNDFhxGWFE7fEREi1vVX2XBHymjN4WnmRq1PKMdq1ok9fUtqAxSvNcpoAWf",
  "key32": "46mPRei5mGjrCWeiSseWHTYsjDZZy9heLc7Uz5wK7pGnJaDdws6AdGCbPNrydWx7SLyCtAgUaQQ3kM9MtNaj6Bhv",
  "key33": "nRDeo4wjSijhKQiZKd4KUo3ML4WYYsPni3Xbh8xnEJy4rzw4MMiHcno6PpPKY6rWPhH9f97ZQJ6LboDyDv68e5C",
  "key34": "5dr4SKFn2qGC389g4QF1Rhy9CJ85uN3Yyb5m2QYHNM1FCxagRswkfoccPb2fVnYUW7Gm1XXNPmmMSKCgnrfaRuAm",
  "key35": "doff8eTUE5cmaVdMavbvtT8JLP1RPuwopcAgVApNJK2nhZmk5YTjcLpRnzMmiz6UMVjMjdA412MZqF7eipSQsUL",
  "key36": "3buU9kUMnSPaHKPWLboLADtDtiYySG2martDtideHTRyCX79rivsLPQTzs95zFBvvBQ6ajY2MhJsvz2twr5eKHQs",
  "key37": "5BTYdnMPty4F4DRePKfaXLj69kec9Vy5RrR1hJwkWWWrcqNwqSUjjcUFtaBTcs2RtQ7vpAnWAgKP1WxHnwkSVu9P",
  "key38": "4bpVcxyaNhYNeKP7CvVduUy7uo61yBhSfXjV1hF9k8Q1d8wiFBhd1XdGn3AEoHEunuV9VBs23hMNhMKvP95yERVS",
  "key39": "679nxiERpHvLqf67eepkKh8ZaAdSb3HDK2CxpmXC8fvcNmsNgujyyXReZtPvEtEB4Jz1jsV3VQ5Dpf7Z85wK8WXH",
  "key40": "5SkUvWTfqCvzLmM5TnngkPHJRqfLn4m6zo4HYu7YP4QemTyKZyAzrg3SzZFAN44NSBQ4GLwMo6fM9S4kuPovrNcJ",
  "key41": "4efhNeaYJRPHWKWm6aoDKNHGnW9UTUwGDDz3Zoex9Mpf374BkLc6UycutMiENBwHzULAvgjZbk2Uz85bXAkKU8KL"
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
