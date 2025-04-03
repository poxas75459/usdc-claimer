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
    "4oZEpQpDnLaSN6JKtUfjb93aphyK94Brow7CFsd1Hnhwd9uHr3dC7uw8kw63iD6Mh4WdB2nN3eCALy5aSpFD7rTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyuVSHs3HABf5aWKjCJ5TgUCHSMcNBZQ2H5uztw2qiE1CFwRQoeydyq35UxKw4EkQB7pm9hJjUYa9TyHEbAi8HC",
  "key1": "5H9jAdH2WGdocx3Z8fHVj42uYMdxbf1XnwEGbU5zFSLDgQiMd8CTKDyK7nHD8D96nmFa5ETRbXZ6fxQcddk3ze8m",
  "key2": "4vTetzVM4grD78mqwzsiMho26mRV1AhPgh3QKEbnwxkwGEgqTaxphe38dBCPeASjjfCmSTetQoKUrergKFF4Da7f",
  "key3": "4JTQ6ZuEByTgkn3CAYEaAEQZQLPTVs4JcdgFwQSVud1S6HdL24Rr93nYJaRgBAT2U2BZa2QfeQBkYMtm5qib27TV",
  "key4": "5aETphduZcsgmcQM8HurK9WSxshbGtq11CyDXqB5fUxPunZppMcHSc6YJshJcVJBaWnSKb88ejqty3d4JvoBL5HM",
  "key5": "5EV5MwuTAgi9KXWsYKE3DTnKjxSH4un8csNFELbEJ7QFLhLTpZBS5ojbosipFbkGPVZfeAfvLF5iShUqvDEZx8tK",
  "key6": "5aVWdJvbGoZHqZheBPfSdQyX9Kvro2v1VtsBBVaka4FyntoYXzUFcyLUn71VbfFv3H7yoCy7utUvx5HMDCRL4JcB",
  "key7": "25LZgCFj9HrKV4mjMGkFMzAJhE35UyKh4mVBh9E8dyBHN4tBYq3YrcjypYi45PUZ6aYtFVZppkvYKevoVCNcQQbm",
  "key8": "nKg9TS6tPV1faf3uobVniLXRtM61dvsyneWvYC6xEz6j9BQbekAx5ykAhH1ZGAnSyyHPDKXZoH3Bgb2RTVW5MZU",
  "key9": "5qHn1BQhsQigyjH4SHxdXqbb43WdhS18KumtNz4esswiUrzRBMPhMy4DCsksdovBTJbUxxoUtVs3icFwmU1NohS4",
  "key10": "3oLZ8PeM8b9vyhwbE3kWhhxBBH9zmmz856DFsFQnjidFiQZKFxpsiAt8BTG6XQxKYTtbB8YcXFLE7P82b5MiisLP",
  "key11": "3fzrkoL61rcDvRe2d917ScqctmZrHHQ9dfDrLcut2UUt7T7XMjLoFhQei2P2nLJRCbFuS8gGjK4dHELYsEYFFzg9",
  "key12": "24frpjQtbt7mjy4snU2cbPv1eH5n4wd2zhGEn7ExFX3ccXYw5hDFdLmqgymYaFWJeoNLFTvfzHmj3M3bDiUpqPfJ",
  "key13": "3fKumfnds7GibyZwe9cVuqD9qaDkmuHG6Ez1ByVVbwTWL7AyhcRnCzduetqNHBw3vf676aDMMx3xj72XA5nRjcrs",
  "key14": "2ha9eKyTq7NN99NaxDVhFV2triR4zcJhc7fsjrkqe3BztcmUZLaoPNbh6oCpYc5DEP3avBXhdn29R6kwyHxascYP",
  "key15": "mKRhhGyaPi4zskVd1aAWgxUM4VVo83Nm7E9t7F4dGEDEUosCRthqHAqvCbykRGzq526HBkyMEb5VNNMKvJchrf3",
  "key16": "3YHYtTHAf2B6AhuA8Be61eobi8QeEAzP6ihkQ91SoNSBDzrjLLrS6arXoviLZVBLDaM6rhcNZZ27CZyeV4VLopjf",
  "key17": "65TiKRP6TyYZcW7KYio3JRXdneH2dVSnvoipGTGZfoGhKSwVSiprvuxyFKQub4Rrxsnmc1xo4zxwRbLmbdkSE4Lo",
  "key18": "32DdMrAcmW39hxXdPYrQ9qtsLtgrLU3JWBQxaViUKhiysssG3Cdh1B5yAyAxnggryCzybF51XZbhYUiuK5xgfNBN",
  "key19": "52pyMAF91c6QYAj6bopNmQtPfrdGfH1adViTTDBofZQQLueYuJv8iEZPHs2TrNVxtaTEkhrNRgJNMD1VxA2ZpqTv",
  "key20": "2To4NFdYyxKxHns2hcvfqmDzpWJp3hPKqesmsZhEedXcrfoaBe1k8Ax9Meb8p2JRpzSBFrKrxyN6jQBXYXmRGBxM",
  "key21": "4XtSd9Woezyp4AwF92SL16x2Z8ozwe7SRcAY5MeA3Wv9Ft7ZbFTQqbULaprMKApsvsj9Lg8VovA8EpoD9PAr41Vk",
  "key22": "3bm3tNjCNHmescUXd5KA2BdU13W6YymFEqVEh3fs1oxSw8kpww713m4FoPaHdMhU7Vb9XXF1iuvfJAk9SR3aEYVR",
  "key23": "3Sh9bE2fjHreKwMfdDEg5Conqp57EBBvRq3wexbsZYmpUV8sV1KAkKhhESAbdrjBAiXeM6WCxt1wBhRVR9zH661",
  "key24": "ysyoDZruDui4UD5sf5J7P3jd75D5YnWP8i2vwuc7c2urf2Un9KxjJwKy6qbYC1VdYrYDLz4LmyE5yCs6wyf7ANh",
  "key25": "2Kq4oXHxCw3hbB5h645YCzLVLFJuBW8xqxPH89EbczC7KcE8VahHodu9rHEE6qHxMRvKR5wfoWxnPCQpApstg9aa"
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
