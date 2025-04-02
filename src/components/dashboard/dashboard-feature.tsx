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
    "4xjjF9be42bnwQ6opAx8AFe1TnhACn6vTCspcaHZZ9DFA1bK2itEftgesXNmXoEHdV875REUxR5DRJMkExdFzgYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPawgP9yDpP3CsEcjAXbnFUFaWsvpWWZ7rsrgX6qz1D2ndTtyAZF9JfBNsroUSzmjoVSTCcDrwqquHCdz7NdL1e",
  "key1": "2RyFpMbnpK1EDJ5ukgUy7j4yA7cf1YTDxnJP9jNz2rxnh3YD4pZdbg6AW9bnXK5DLsMRHFuuJynkn2Xhpiub3A7G",
  "key2": "5BjnpuEbMAVoTZf7iwTqauTe6GRZKdQUpayGiWg96HH9FPGKTtAuV1j8DUXRKR5VZHUueSEkWZjTPPAfaoqDGeHW",
  "key3": "5JG9WQvYX6kFwfntECAfcweMABGX5Q65wHiJ5aH4MLswW9v4eJfKXwVFS3DNV9qhA1qCd5qLahegYXKdipMJGbik",
  "key4": "59FzWohvv6WFnXLDCK8SvcptAPSRCZHHuuiiamck2fTeMnktBkKsNH4TRDzF2LgTd3Zf8pKA73HL3QvLCDezBqUg",
  "key5": "jJZqcEbYD4qLESNQVhTGBRF3MFG63NHoEUTkSduit8FykZ6rEdiyFjpcxBg3iWHZoPSfMFQrt9tn5uMZ9syeTWj",
  "key6": "2ykDsJkASTSZX1kM4NZdwSBHGSBKu7832iMsBPHsGTWPufCsSk62PACaAjSWTz8wWNvq5wqbrRrRs4hcCnhFz7s",
  "key7": "34tpP37XYPjHgzvZ5Cmgufr7JXQMjkqPTJfcrt71WmL8eRB6mDDRk9aHBApudvk4s4X7rd8qiVKLcjcJAvCJhJDu",
  "key8": "587591G436GVbzoNbPP66WJieeqozdg2jqdzTYg6ueyrUWqYPbeuLXmprwsgV1He4XoNhHmZfBXYn4y5PKTr7ZHw",
  "key9": "3hEQEUV2JwXqEoeeWnrZsjUsVx2PpwfnHfC5T6DnSySCNgr7Y9jmrrWsmWrwzKwPSNzSigXApPKN6msVN3iczxbc",
  "key10": "2yefPGYFzQJru3AaFHBBKe2HsckY2ZmccXWqmQb5jNBcUJmfMPf52bYpVUuHgVqDXfc4ewaQYd7TU78dC3sJvEA8",
  "key11": "2CRXpWGdL8PR5icpfJR7tvYHpSRuGSrzwZtKSTwgMuWiBfPjHDttpGwNbXcxFLMMNFqmQKvwwtG4nuzPvJAhGN3s",
  "key12": "4LCgLgFmKbYCqfh818p5qUYHjZK4KJ91L8ueSpnaQtvXZjDRgcAWDs87mKArGBWYwwCPGjjkGddw1sS78BiTncuF",
  "key13": "3nCsWVUpqih5tGrgxbkVkCc4PKAuLpwum9x37JvsKt5TbmKtAzn84nyFYvjSEWBZm5r33US1AU4QKMG5gjEUHkY6",
  "key14": "3u2owMTGWPwgYfyfPvW89ULCAq6DCxSWi9zPQwxa757mzy9Hn2JmCMQcjhAxQ6Cja2tBPTkE1D7WSzU8baQm9Qgm",
  "key15": "36X4Q1isnwvzup16WhrsgRxFwmhCc7t68Ac7APS5rjL23NUuueDbMtQQVXeTRzZUVrHpcEyGMB3qWtdWNMoTnKZr",
  "key16": "3CdzhtSqL8N1Ua4avNc5kYHzf4yxJr7C5GvKpzMNVskvuue4hg83LuZdnENFwR8QPgeJDKP3N1foCfuy3VgbmRgw",
  "key17": "2iAvzUDYvCDLf3xmFrvuxxNqzJ99SfMvUv5TWi48L2HAzCk97WUecYzrERiVBc5oxoz1yHxpp9h2UTj3nF5axqmb",
  "key18": "3yC1YykJRAcLpcHvuwNYonAKoDTzPJ9xFdu4fqDHnSDkfzsaiPpAJbYbC4Ksrhsvw3bbGimLUGArB1QPskBLGLup",
  "key19": "PpSk2LwsA9M2LZH4FwiGjZPnK7z5rGgZQcZn8HXK3uyXDGQxWHrLFsm5BT6YAdtQn2mEgBnuDT6ccvjsQEC2wti",
  "key20": "2qYiq1UgW5SXoRxCeNpeYEReycc1qRLHzBfqi2GwoxxWgaqdiAkooXw2YNTvrmrTfxzGx5MQFUrw5MafwXyTV8ky",
  "key21": "4kgGpCUAG8GFhqqhR9sYvKeS8Qd4kbnwHL69BPP4w2nBnrmEBLfDCvPQxxT2ejNN9hUF2HqfWgPLfTWWaajbP7yu",
  "key22": "2d9qLDdaaPEoRR2q8rUR6CvhW5m5qDBaMTCtj5bVFthDVAFLwM4tbLFZQBiAZNJf3mNUb2tbJXsdeiJXcRELuj9U",
  "key23": "5j9ATE89e56MAXxypQJuQxePtnP1SYZ6N4PwuQccpcYwMawuaVTGKdrZf9UnU15agY6rEGwfbqTwLu7oois71qW7",
  "key24": "4EKXMTgxDYg9B85Sw2FPxcA5CRMFneuXx9WxSPB2oYpFi3atnXUDAqkJ8PYmFFtDC3V22JZu2eMtjmPqhKWt7ber",
  "key25": "5Af95C9Pom54zHartS3NwhxAPec43hMqYy7fvszcZANiG8Hk7KCn1Wzv1D88QuNXwt7ArEfwA5QVNFUmBiqQh1CX",
  "key26": "4QyiiyMuqwk5uC3ASVc1qJ99Kp4sK59hDHkSnrQ4BixGrU3MFosF2XMtGEUi7zgwiznGxr1odBwake7yAkhYDice",
  "key27": "up2nZ3N2ehUnV7jNSxxCks2ZSAQmSiBgAQFgkFPfqUCXodnUwiEr3haKhbfA8csia1bjiRZzmzimvsmmC8AQBo7",
  "key28": "5GpSAniiZPgRx6GHn3MQCh1FjX6PT8JBFErv9NQjgynGfSMFYwTgLBx5DmoQYeTEWomTHoqbjttscJSZYne7rWEL",
  "key29": "4msd1vNqAwWb36UJgokL8Ha3FEmKV2ZXCSkQetMev2TaiHV8jpCCyVf4nsr35rK1yaP8xXuBcCWqQBWJTonxJsWP",
  "key30": "3euhruFEPw4trfMEycbyZsQiDWxCu1mCiW9jR4i5bxVf9ktmv2vuXHzY2v9wxVwNM6zT6nxBfvYKWpRRETkfoUmU",
  "key31": "3KygnT14xwfWmXcXniCJJYMAcQmihH9FtRRWYzf4ermp9dxvX665Pzps3n78yEk9ddmPPtdxAmfeVpZLVfFjp64U",
  "key32": "4eRgPE5DSP2xoxjGkpCQyosXudwT6bxP47An8amVG1XTbqQzgp9rFQgRPRtC7TMZ6XHD9wKyJXDJpa9kmXrjy7SS",
  "key33": "YxCuHoWWZ6aiLY6E5ew54bUzP3a4vtgpagP8BJs16WZVikomjPvV3ZUoLrPJPYdCnGgPVw538WgD7hMo7gFWHW7"
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
