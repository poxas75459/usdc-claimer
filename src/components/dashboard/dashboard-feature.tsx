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
    "5BtaED2Esaf4NjWNVxRoEAGuXhT7AGLr4JayejiKAwa5c6vo5VdSrcEHsKxF697L6UtMMaPk8XNr3CcWov8nnqUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9uRwxM6a4vHSCorhSgHkMAceWrgTcEiQy24xKvxq6Q2JvNAPHSLhdV9Yks6nC8HsQV3ucdphRUVtwDmMKfBzVX",
  "key1": "4r2cswux6jaHvDa15AiVh6DFZHpaqT1bzo9g36PsWJwVD4NDZaasiY2obpYmamPRbHxcCd6F3EVTv6tDnzDoS2to",
  "key2": "5PguTGynGVWgoJNnLf2YQSMDtMkg2gmL7TLJyDpniMV4pcgzV7TtDWMFqyoKa6cG8TysvbTCGAUXsdD4L6vSGefU",
  "key3": "4BLk92d1fUcdhV3wE5z4KhCUBGn9V99VLi1DzXjaU4rGyFuHmArap3P37L1YR4eVVocXN5QWDzwB1FKur6GNRPwd",
  "key4": "4jTvwu9ovrqJrQ3casG5KyXWv4DvC763EmKXSdUen96qmvqRVmPKz3rFL6wPGie1YTKrfh7ZXeUsC6SELt2LM5nK",
  "key5": "23cRTYKV5h8iugZMaLgQcVNWhzC2C5f3rNvRQcX7vnLYw79jxdY6q4pnJxydcuqieUZuMnAu8d5EUcj4Vatht6EB",
  "key6": "39zwvoVogS7rxo5ZrcBDbYryLPz4SGjLsv6vADM9swgrCiqVA4jAfkbbudxasB3Yd1F2ywEfwnnDW73B5ZkGDh3J",
  "key7": "6vLKMDoTnRUDgxZW11E9nuYcQSaBzMLqQAnRoxo8p4pA6x12HR8Ak7gycgfwQ4ohMKPNrM88zCBJL3z55LmMgis",
  "key8": "cUpyXpqGm7LFdPDh1U9U9eW7WxnqBoKGysa4a2VjQHxcXxCGAR2HW3xrHGReitY4uBjX5DnpTp1wqMCt72APAdJ",
  "key9": "2PBPBPheKaEsxfi11TBbQ42LfKKvcJhr97Q6fEwmsm2cM2HhVmxZoxqALXAo8bnoHuV87b5kiXtb48pZWjFt2Cix",
  "key10": "5VQVmxe2UzZKf5iqKWyE5SnF1xUQZcdbVEHaR8qxiSN897k3YAcBVNF8BQnHpz6jdfKvDcv6xKaXcR5jYA6tozoZ",
  "key11": "rxiwbKgoCHaMSoPZwGHqAqesZpZYwPN9WApBFk7syz5jQaWoTVK6WeGdJ1QHHdDNoTRiCc7uN8KvoEWCvuEcPGf",
  "key12": "STp8y2rLnn33kMaquTAuggdjRuBog2zxqCLeJ1C69DmNeKCxZUDNbEUy3pmtbKAHxS51Hp68zMavNLwRxidEHMa",
  "key13": "E1dY1xSdnc8N9zTPdxZU37i7FDiivcqTphBbMML3wpPLaT4YNjhczSQmyVkwQh2grwQpacbNXbTUFhWP3sUeyDM",
  "key14": "5panQSVNb8is3raM3p27iFSxKF5jieEdx9HWp9H4C1gsFAaGqQZNejZGSVL56uFuAHBridTKoQFpn5biXHHGohii",
  "key15": "5k2nX1qyt49mCukQ5xoNbCK2GszD5RJdihz2Y4sBJKc7J7MzZNoH2PsAGktfymwpqwrsCRDJGtVFXSLYPbats2Kr",
  "key16": "5WjGwMfD3q9YdLwofUxx5s1CWhucGHEhDNdTaEerqeLZrA5Y5ZhvRkfYjWGYy2DuQRe1aaXyeTj6qmCFnASB67fh",
  "key17": "gntNVJAP1CXGaB1vFdmLNHRPXgs6giMoL9vuGEySq1YDxQfPAqcow6M2iWDG2CdKsuk1z7bCfnnbmx8Nditybgt",
  "key18": "frryyfzMYXJKS4Fpa5QHxqe4BkMXyWp9d4Bpz4yiCA1na84GjPXXf7eHpnTnM31u5i6yHpL59Q6ixQ5ug86gznn",
  "key19": "YYWze2TAKDC64rfutpzVUFeDZQVq3XchvH9u2Xd5beCv6u4bhy14NhJ9ruERqVw3bm9z91PnX4y5Xy1t2mcfHdw",
  "key20": "53GuXe3JhdsseAevToGaKZxriotRkJqLL7bdjyV6JxxkYCuwDXEvW2TCDgK5ED1rH2UgwHyNWzsTmHjhPft2us2S",
  "key21": "3ACsbyVoQh7D3ZYp4CiGREsu8svRtXhsY4t4p1gzEPMYM3sigd3Lfr4EyyUWZPqeMVnUKNF3C6pjuFFzxy2KqCi8",
  "key22": "396cakVLhELrkKMpC7Ap1nigbXNfxq3wJPVjQUWqHXM4sBq7vS28PuHtZNm2coiUxBKvmrjkFKCRqETya4b5Fbtp",
  "key23": "5uQ2RUyTk23ScU9adSnQiY7ET1nCFrkEVDb5M6V1dsdx53ZstBGNwLBz8eMDwdH6YnPut7Rdh4xcEqkga3ATkhc7",
  "key24": "4kwCk5mGEKdwEjrnzGKVyewzuuEppB8UqAEpbTDk6jX7N8honYu7zaosTbL4nNNMaZv7mgYQKJGMsHJB18gjnWY3",
  "key25": "3pzAmiHSaTgFjDDye8aAV6UxehuXTpL8646g9oWt8mfpmJ2Mq1eoWsdNBV829LLJSEL9Dz2StrxXNxzsUgVXfaPG",
  "key26": "yzRS8wdmbHC2jUvZUNjJ5TRSxMCgDEku2VjbrXt7zwCeQFB97c2F4MXAg8ypfr3pFdfnpjCSwuvfmSeEJNnYHtX",
  "key27": "VG5ELLeH4bHvWRiTHS3k7MkQht1bKnRg3hP7NKUQjL71Amz2gXFeYwxGJtGS6orjch5wR8MceKY5MQzTYEYNnqn",
  "key28": "3mLdzYKh6bFa8R2FrzheQkykVcQWSC5FHnyQ7pYubRR7HVxPGKFzogpt7brmuTdKPFK2igEeAm6Apw74h4a8xyq2",
  "key29": "tAy5dutmU9KgPhYvonFCfpi31kmZ1DPfFx5YLu9sX1T6NDyJZw9tvGDG53ux7nyKYhATg7h27vgqXEA2B6HzM8W",
  "key30": "4JCMNKdT6Uf6iboHp9AkC1Vv5MTDEJoKsBvaQ3vBPRuzt1aFVo8uvVDgBe1XFuQDWHh3XWmkzj5Zdca5JLVWM6uu",
  "key31": "3i94Ch7KqKAQHYsuWtLehyaknKhBkhFF8Pzj1oSvQjTBLUpvgH3ZRky4kii7dL8WGxkuufGX2zbvHLZK4zkCAuna"
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
