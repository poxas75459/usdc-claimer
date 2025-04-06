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
    "5SK8KJusuVDqdBTpKR3VJmYvpT4CNzCTFseJ4KRmVGEYyfgNHVCwgr8bxAMmuvKkwh1XduSCAStWqALoxWTYciiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NC8qicbRJ4zfFopNUxKmi2SeYPEV1dAWfDaXqNyPBefeFtMKXa5dR76RudG53SfxLu4KNzf26qJovw4Hieb4Hb1",
  "key1": "fDd3sF3egfQjeDDeLCAzeuCpmd5TqxPTSkgM4mW19B87rc8ji5Sen5whP5yYoUiBTj97VWhcQ1EXDvw4ei1ADa3",
  "key2": "5HsGrt1En6sxgW141JDVgjMtvWLbJ1CJ1r4DxAz9H5tELCDdmgT6u7ZUeiiggVxPC2k8JPwdz2Gf14qmFKzZgrKq",
  "key3": "4SKeJGuHPpYpinGgnWxuAfLN1RHg6YkHzbs3RC14TxBMnD3oSaVzPZyibrwdZcpaENMq4Jrbf1PjnXfDB22oPUjQ",
  "key4": "2fs6Gzb6MSDQpLp7ek7DLWRv7m9HYzhH4k5zZzbdLjAbib8uAreiWer7jfn74n96iPhj9Ma7uVdV39Juk3SMyn3e",
  "key5": "3NGpWX7dSbAmCRFr7SoJj95rgyTESnrTKZUnMbaHMv2g2Q4i2iNueoD9N2yhQKiRhZtRRsTKmuyJYc6Jp3L44Q7c",
  "key6": "3tNyQ3ARoe8iLbVCTy6ofggtYDBk1TpXZBqZFoAnbiYCjLpkXkdouJCCMXuGyz5RUFPWymXV6Z732t5azovcR9iR",
  "key7": "c8JYjixc2dnykvaPas39yghNFsFzFuwt7xEBVmocY3STRYBxW6mDMRhyRjB5xbawQbiAG9JrqCpLhSLr86kHCW2",
  "key8": "2f32VQoiwUCzsZMHUoFRG9QrUBxkoWH4NJR4swiNn23zTg5T5ihTS8JRQ2Nz8Fj5eGVnSgrt4i1wZfvCexNhznGH",
  "key9": "2VQWdaBaFddm7FVwD3jHhTvop2JPoZ8o4m5kgm4AXX4w2xG9K4CRymM4BZGGWUhFVhwriKrkVnheCFdNggJNLjkq",
  "key10": "3XQQZVtj6xzSCCuYus4uv2JCuHkZvbWUT9Wri3cYbHnuskjPePYBjNK8bcew2Uh9A4AxFA5Vxqaa7JkJi7ema8qK",
  "key11": "5zm2vpLcgScBu2HJpK8vtMaJ8bK7Mxk8QXaVJmUjkrdNZQPtkXuQuCLd4BLrWv8wsNCqmGBbBNkaAcPFm5AwTtH5",
  "key12": "1NbK9qVnVFDVYVSXTKo7osfyzP5qRRnyRMLbmqhKSKoruSP2UWbcqRbg6zp659a1dK6mTWrYEUZKGkWBKWSHCai",
  "key13": "4xDqwKkvcoUYDkZn1NQisuzpgK92pBP6tA7QG6cmK4ggUufbsx4RDLjCfcHCq2ytdjEAqysKqjJPEPTSXjWxziwb",
  "key14": "cFsRBSmQbjD8eiQZAoYZ3TNFupgAH7wiYyH2TVRLSnRgDAfiaSwyPDCZyFiorBa45CLhsF2khZXBGHGa9CQa4U3",
  "key15": "D5D5fa3mGx41fWhv5ywuaEphYPcc69wVpv1nQkAVkDZ873ngjBVLWevGpQGYXhnsf9pSpBQAkWBfSUWvGc6mr4p",
  "key16": "3wnw9w6PV6WwuYyhh2SrJMrJLUJEmBqQ9hfcECarkHjtDbLnRNNmuu1fbmgu81Pm7pxncwcJUDf3GtMaFjdaySmZ",
  "key17": "5i5w8TBpwq7kS6azgeJiH9t1qdqV1d394ifm9QiNQGsiUq1B8aKQmHcwdZkKmG54gkhjd7WHFZ6FWnTXrFFvBmrw",
  "key18": "4F9CfzCGh69p1datg2hJw5scBkJm1kwK92BqqnEKqARxnzt4g8auQm9U1X9HwSAqG1SYxLioZqr31KWqT9i42PXd",
  "key19": "3fJQeuKX2srBEWZ1RMyWvGSG7XxeoAJdEXhMDab7S2ZRjxR7SkCryKsSgjDsCSJqqtug7rMw7wnJRJuPxR2q98fT",
  "key20": "5yyTaJrMxPVTNMTz9y5oziTX5oinfKn2EMYjGoSRVQiUomV7JT1VYYgkhESKvsnSmffQG5EZ9t14mbqnyJViPfVN",
  "key21": "5jACuTnN6i2shS1m6rfcP8eYNB8FGjZLwip1zcBQpFzEgFpYWXFFssWFZGkMqETWjpeP8jF7wJXB4fBZgJGjJy5P",
  "key22": "4X92w2fkdWPKhjGyuGm4dYsTgEQ2ueev7MdjSN5zQLDLRMYa8Xgbwo4dUmcE8mky9xMh9Ezt4A3V6J74Rmo6BXzX",
  "key23": "C9frCXjeLoJKfJC1sv7bYcjSVAtyZy5mX3pfjccqAfjwVB3D9zY4igWQ4t3hAa6RC9k8XVkH6km339dXWPHvvPa",
  "key24": "j1cbGpBuctyo8o1ZXBjUGEmSoWTXTzwGS3Fp35dyBFAhfG1NJeRmGUtjT65e5sjZCKzthBpwVgnWHpAmTtUeygC",
  "key25": "2dAVGLU5jU2AT9Z2cJ1qM2rZbAoiexTgyc9jjGLEMQMqFPbDqfWhXygaW3xac4tCDMoUr3KRrP11JoqysvrNCTFH"
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
