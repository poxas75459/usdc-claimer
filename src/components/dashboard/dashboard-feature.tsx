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
    "4ZvpH2zZYh1NrzxCdCoh8CSjpDAQ4ZXaNtp7YPrQQgyf1FnZUzpEKxCz4sNeMfibECzkqYfoHJUU1ofxNv95NDbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XS1QW91AnUoE1DvVB9c6QGjiUeuirWJ1c5uTpBrjngcE9qyrRsBkL5CRgZ5nCVbegPiDUX6P1Yx8X7gwddkoD3",
  "key1": "2umVXH5UsPpq9jB5n6c7xWzJRVJfbM4DGAePSyxw5Cm7RZrG6hJkvQNRrkK6J5oxuLNWFqNwyC4pdLVXF7AFRRR2",
  "key2": "41hu9VocKsfkQMmMeJXdoHKxRtv4rxua2o8NcGybzgevWvVPRZfutdsmwH86SBYiYn5XAxo9NTc5xF8ezyVyPACA",
  "key3": "22wWshHivPbCHbvmh1gPDok9VXpgzR4QCvytjKo5BSoFRL5L4YyQHeL6MCn982mag9aPeNUErz1ZTTw14edKm5d9",
  "key4": "61FHUdngptXPgxRqNo5nvSfSNuNAniqUaZ2aMWUfVP2AjpweoAXkYcU1a8nr3qmmXfQTLyGTVt9BYehFqYZbTg5x",
  "key5": "5635vFE8449B3Qz7kn8m8sK9vNTvNVaLds8cGFkcg7JY4U9cXSqk6ASrzScE3xvWHgmyo3ZVAG1UMnHgdi8WPAA7",
  "key6": "5KVgp7UGfJx7jgqAN95PNst84rrMSUooDGHZZJiSq5pauKBKju85e6Fo83tzEem19wFMcZHKtH96v2Eo8oV9Syfb",
  "key7": "4Qcgpr9YwmiaFsdLEnrj9pnqrjzMF3e7a5NWE7CqajqH2jDXrHU4By8oJbh3eqa14PopRDKvXMMWmMBjUzGppy8X",
  "key8": "5oYJyLp36AjP97mLGW93AYuue87VE8Kj3VZn8JPzV2vZJac11NTnrQ4spGez9vNQMnCTBPPGiBFNBXy58gUfwwNq",
  "key9": "4g5fjftbnq6QxW6XkqYiECnuqdrH5nZ4hbr45Na99ghHBt6hsLuKxeXSrTWzu3urc4UH5CWQrp15HAyzPFNuEBDw",
  "key10": "4wiNgxf4nkyaoSCHbitt5698A2PNPuQ3sdhLP7atR33wjj3BfMxx9QBMpBEGCNNgXg2ZLjXWRZuRiV3quppWGgig",
  "key11": "5ATy3sYLdtzYorE2Gpsx1XL3HAiG3c6sNLyxAGet1VW5zSJvv7CMM3WYqpdWHE4BjnFkVYVo5HHs787oL6ghDuxQ",
  "key12": "5V941xxb9EdmHtBh7fx2BLKKjZ8f4H1CVSkMEwZJedf9QcqxKa5bqj3PknA9zaNro8uA3Lec7YbbFMSyhaxMYPNf",
  "key13": "3Bke8jADZeXBaiEtQeqa6hPZRe7W4PBMLYpdU5yzxLgsw9iizPLyELFb2asXJmt7oMBtrqUee4MKsRiqutKciqKy",
  "key14": "3qpQMA4ZS5dLhJYJzZQUWtYt6nuuTKztwwpqW9V3sNXt6pKVZ5r8mrren19AHM7yvzjBprrdDQQLHy6m9pXAnpE7",
  "key15": "2YLvXxDeZPeCNsk5VfEf8YozMQFNL1H7UxJcEUoTAV4MAFCsNZ4J27oHT1fjhkNM42GVVuk6w2EfXinjRfNJD3xj",
  "key16": "AnTZYZwmvTZFmpWZGRpYwWhhoyNHrhZhNf7Y872ZTWDj9wsBbvEAZ89BP6gymbA5cFh7T5yXMCjpVdUqTngzUqK",
  "key17": "5JYEDyNmWS7sxPfeGnXGuWbXJ7UkqXoMyVE8WxMNTTGTdpkBBqs5CkPmEBA7tUsG2rJjJrxp7m3bE5wxacHU24hf",
  "key18": "W7EqfUofBjpYNUqWUCZyNLn7NTnUE2SrJfFgFPJy7whmDcxujsDZtrGHj9hJppywnU5T4JjyWfudRUpAxBMQeWw",
  "key19": "2F4PDn8oTq4amJeEKKmCL5ct85ddDHGNXieLsjK7cR9kvqadbF9Q8vkVkW9ePCcDjaW1hH4nweNLnRRvUjawxv6K",
  "key20": "3HkUiqnrLzL1P29D9vhSUV5bfyKVEVMoAeVtyG5zFdsN7sMoKrWESyzov2mihaDMBVryTKSrqXJS3YH3qjPFJpH1",
  "key21": "4efYmBPGHJbHNMAadM8zLY9GtQrBGepAdi6CP68iB3ZqBSKZRM9Bw2mQBBYkaBKkMpov6abEfYfZTARmsu7eWGLN",
  "key22": "31WfxeVvbefTcHeW9yqV65dUwYFEZm2GSYsRGtH1JeGjam8wjdUccUstV96FLnVVP63wShYGPvsAxVgkNUqRymBC",
  "key23": "2n2trqe6b8e6DCBQn9sR3u2RJqYATt1DAbCQwuyn1ChGFcPySd3JvQu5jArNZx37pCN7F9JJWeYCVZCsPAMJt4Q4",
  "key24": "28VBUHYoU9uqAFSYxwjWMSR7QLZYbGAgWqzJQZh3bhjjHy8GXHBaef1VX24Pydhi88aht5hWzTBGAdwV1ATNkhRD",
  "key25": "4LSRrEBjDzyYiFjDdz7ahmVpKRKAU6eNCXY58x5pVPTATfnufcQXZD4Y1CsTHubNQbN5RChAhazC5K3Vyb5Wx2BX",
  "key26": "4w6jZnheeqWXJCQjdmTt4VEwRQrH7NHZw2yx4CSwZ3X3mo7XrexLfZrLfBhhZu68GyK5KGhwexSREADCjr6ztMjM",
  "key27": "3RoPWM4H5SMu6UhdF5osrt2dhrV8V5fu3pYhP4VmKX4zqfukPF4LWp51MN6EAJvZLzzwLk7gmmuKSz3EoZEBersw",
  "key28": "3qAiqLVj1p4axXh2E9v2Gs96AVkrsNsrEfyBJXk46jKh5xamTLZjW1qQbbJ8g4dBgbjDtkdd8QtCh2rXfhGF13ib",
  "key29": "5QtDQgUfAptuzr7wHYzRWFyKrE4vNmBs9hEaShiXgV3M9JejPJuis7KTfEJZv5Rg9RcXX8qaEd4Y8ynxqgpkHM8M"
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
