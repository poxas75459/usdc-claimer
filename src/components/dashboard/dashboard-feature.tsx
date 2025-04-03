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
    "3B8TUsuHMjYEjiKWyVFx8P9wvFaEK5LRkXv18fArhkjBEjEtPbZChSrS3GTBPgmy2tECW79VWJuRcwg35UrNFukV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQ6oon7ubpdiBvWvV9MRqo6ntYz4pNXa8fEDynfGAxKopyLpw78AkxBU7nJsk5pDaxZcQwbaDjBYP4vK7E7oyGb",
  "key1": "2heceg7zuGbRZDgQmXkNuzx93v81hw5NCxdo75kvqLkxCZMdHSqvAdzvayTRe6fUgjmAa7VVBbMKcphwqYnGcELc",
  "key2": "2YSQpaZAxu1DtcR9wmhnc2xf3suNfpevKHMQrteStBbtSnFo1G36nKXTpnQAUfoBQGay4mbUwDZZrnfpssZvWF2Z",
  "key3": "39nUbaSsEQhDbcpYi25ovtTVyNYs71AFVFDFD4BbnWpwvMnJY4fpw2AQjUkMQVhN2y7iNPjRLpxjciMZeWpWLHEp",
  "key4": "5n2HEshQ9h71SNAbruasqwdWepufiB5xmCG1BAbpMnXMQfJB9ZGTRq8iNNgpSwxjEJkZJSwvhNu4LtS8k1ghXgNs",
  "key5": "27Cx4YUx4HDC8hcRiyWwkodrY3FBsmYyPRp1SCoa1v2CRm3Lh5YkHYLxEUhpZGCuGnuP6YiT7XW9FsuS1RepnxJU",
  "key6": "5etaex3KT1rFj4ZcX5zAZzY9gfLcxvnNibSZAcnd9RsQybnrX4F9DtCsBJAGrTfHPJkuzPZJR3W6Qx4R6u2KJdo2",
  "key7": "5DWDvxmKgz2JZC5kc91U5wCQhrW7FZQYZCBokd9SDJ9MtdPowCnbDJ29rCAGLL7wQpYLkBb7HfeyUGfhduWUrYkG",
  "key8": "CmmxZcrjX6pWg1pCZ5ojG4XA62g4ChxV41wZtN6Kxe91ae2RhHEwYWo3dkC6L81Wq2JatPf8b85ooyoa9xCSUmy",
  "key9": "9ZkgsRbjQHAyrsBbePwghLmyLJfHNkw84ZrtT85zwTadsa7h5a4DPwk6A3WXDSXejFYjKJ2mqycEm9Dgn3skFga",
  "key10": "3AcK1U2RUmruGcob9Kkvs4dUw5pywSz2KPhyHqK4eofqJ9VR1XhWWs9ypJboLQEsNDmZvSREmsuXwQbPrHHfxCx5",
  "key11": "3jUjbcQp7KgRM9PPFYyR9k4E19oyZuYhKSh1Zn9BwbjzfKPPKZrVFxeb2NsTzYvBBPCG31kFjvsbgssXKbJXMc6H",
  "key12": "5zwMzFDofa3XK33gDyyZpNDckGdbKXCUB2ETaqQW8JmaEHSQjGmJqrWZ9nwpWh19rjRcvVQMyKPLCdRDdgvit4yT",
  "key13": "3fcZhP2tsrxCYzFn9rs4xP7ezCSm6PC8qBhPDwoNEZKHmBTUnkeVLeF1P7cNaLtmMmQMNf3NE4kixs6q4Qkg6Wab",
  "key14": "4BFCzXb5Mt2EswSLhniQMMN1Z42GbKEzfXVbdy6KPZ4LSskm7fG8Prjhfwss4xcKV6Jz3fqMKVSx7ATJH9RZu6DY",
  "key15": "32fUDhiXNwtNSZdkoyMt3J7SCHsDXY5RHDVhDo3BUZM1LjZWbfwTbuVDp596DXRt3fihzNVMXMDkPxCHUHDGqy9z",
  "key16": "2TeHAhRhqaQ8UTQtUqX8urxyEKipXU4HCmGLcE7cQyyEirMM6Fe1QHVLe739mVWPW4C6eJVX7cMuBTzJKDY63YMr",
  "key17": "64faaLf9zZwAYmYwcBoKZQM5Ksqdn9Yv8SUZfyZ9u6kQXq1bgjrybbaM6kctT9u2be3DNSvxL92iPua8SLw6fM4G",
  "key18": "2bFumfgFCioQWsWwDWxDU19uvqpKQqyBVVPaRwjMj6Ge7W9wbspESMh5faKvvT3kyzXvax1s3adX5H4wVvYzQkvY",
  "key19": "36Yw1ppXZb2PvdPUzBPN1ECyRZSRCgX2aYcUJx37fgkm6zw9KdpUqznhZzkjwSc5uF3RbagBciPjF8qYzuVZ2kX3",
  "key20": "5VcRRzDYEwJr3F8p7LxsxehDDGiPq3VGAx7ZUMVB6dmvhDNpaj9Ch2qxzET4JVRG2SFzPs2nQPzxyN4Nq2N6nyen",
  "key21": "AUW6Cj7EHZ4KnQ5EK4vNLmHsnTzXw685Qqrm4nb4aLAtTWpP7ibLUSeBvpXYrPFtdrv8TWUDF7i2CMNtmFzZGGQ",
  "key22": "2a7ViorpZks1yZMEnx2kvs1aseV5bve5wfGpuqA1GqSZdnuxfzJyDf3dYz2MBHFatb7wz4pr6PfdWkXCnBHvhx6L",
  "key23": "5asmTfqR1XxHY4vTCN7esi2FyaNC1buWXcKvnw1CmZytHxyQnGuRdsHMssUKmYntC551vbgPiLV4de4imj5VnPfJ",
  "key24": "2U7r4kwbqoidW8UNuFuS9U74YyETz3FqaP3qYqRSvHxthV7PZyqBmbMiQrj4qb2T49iP6j9UwFfWQrhrY1o5Sj5C",
  "key25": "4rbZYUmxwaRjGDE5NetQ2fy7w42x6YmrSnyYUECZNCfM5pTygFZWbDidtpJTDJFtnvTP9BS4YkruNXwKv1wRDJTy",
  "key26": "32J6jFdfP3jNCrVGsbS653q7uFBK5LA8fMWy1VLdn63twqwbSKDRrM6S4kwMyRCHWopGsq361MzxyhpXtu3vzmSR",
  "key27": "5VgbKoKwLtz7P8UJmbRDE8ddddB7Vy1u8KVaQwXUCQJDJYLfLfbMRdyMQyWSbXPgLyZtY6wWicD1REzjAiPtbYKL",
  "key28": "24JX4DsQhtUeRFhjzRx7L6n2w7TyDXB63vqWSrUSd3BfqQsfVo4yZVoxGWzB3FR7Uvqmem8rG7SuipZHjq4849Nz",
  "key29": "2gSQKaGQiL2gswMyWBSeoEPmN3bithZVgXEQqW1JrpudDgGNndXX7n9tmsBJkeYdYKttQshBQUScwimVAzYphTZW",
  "key30": "5kxjg1QQUz23gGuxaX48PLXoAXQxKMv6FHxidFCoU9Q8qKCZUk72nTsaPz4dSJAKsNdqnVy1VKYaZdffucf2tANP",
  "key31": "5Ls4jVkTVQD9qNsnLfzAamVEJTGS9py8i1akwjmdYgCST78S4G21QJ2URvRnTFztcjT6bgMC3fhmxsT1veSgQJPC",
  "key32": "2TikkBm5xGxxzjGGqErWhUTJcttjbPs9G7UU2rYtQxEwv9UDfEoyuBUt4aHjcQb9a4GLuja8faH94yUkmatDDJa7",
  "key33": "2mYJ4vSUnKRKqj6jdziX98V8Ede4HgCYd6z3FsrT6xngKS9Z9AssCegbRrHXZsxG2vN2mGirPsaKEkqUD4m6kupz",
  "key34": "5GqnDdYCejkm1NeeySuymVAUkzXxRBv7kdpVvncjiGzVPGznnndTinZ34DmB37hWkAYVts4Z195HU2uw5Wv1i1YH",
  "key35": "EYKbyPp2NTMEeWdGRzJJLGpt8JS5Hmk3cE3VgK2SnDauDxNEChgcbFAqHXYN16Tv28CqU9XqEMbjXPRF1f3R9pV",
  "key36": "3PCjqGabDA9tRrGLbVxQKgWAnj4FEjAeCTCUaKwkohH3o6gyiJNqwQDA76YHUqXfkhMDFNgMWBKRzvLbhQbPsXzC"
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
