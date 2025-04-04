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
    "2WScRbS8WQ5KxnH8jjwdxe9vG9UezkYwhEYkDK1ruwAFETDuKnFChJSRyjQu5xgd8rEVE9iuWSxKqKVg19tfWajD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCzQcVVTezfZmhw9Xn33KUW6B2tcMwvzv2DykWuNEfxoGAPtsswZUfARC5GpjFYs1UUiVteEpuHkrepNH9aUR7q",
  "key1": "5whaTK5r1bnH7angazGVXMQKx59D7RweLgBrjJXvoN38pLk3cEJos9GBWh5MT17NgJijkmPexrf5oHpsLyKXiDGw",
  "key2": "3UbFw7Qy3csfPhh2cpJc7NGC9EjB21ZsP6x82JPKgRRoPqV3sFVfpgqvknmiSvjhjLUqiuhUvDxoAxTYTnyNEGQs",
  "key3": "3ykrgHiiUTcGAtxvmSca45viJchPFF9jANGb5ZELPWhqhBLC9yphG4RHLCgkNWnDDjF58bUShv88mRAzvBTMz5op",
  "key4": "2FHsgQKs6tk4RDDDotKrXSTQrcNHZHfckDtEjAKNS6SBW3wMA3paPdySHWNimaYb15eLGS9hiZDGej9arym79pDC",
  "key5": "fdJCv835CufqXFkEZs3z7orzzXaWGiu3MARMNF8uVMgFy2dwm6z5Px6jLABsvDqJzKXJ3voVZQsmwr5zNaQ3Fcp",
  "key6": "4tSEvXo6rtrs7RKXN9qP7LBnZcT9P9Td1zFBGbXSKXSZf1TuYKTHzS59MruBxqaiVhtjjT83BpJR9QpJfQfxvbeQ",
  "key7": "5RofVqqBS1MaqUpTYZZGMQjik9r1wZTDseX1d2fB6ozqMoE9YVqbNYFCapNzo8QFWRjGRBrm18mnVYvZ6un8a6t9",
  "key8": "3fQnL6bFZxySVpXBJ82TNuhNbfzR5nkeTUuhzFiQTesdAnpoT4WfTbXk45UAf3Pn64Uxj2P6CAYpinmW2VVM7Ur6",
  "key9": "54xYYWdnr8YDqyVPJ3XWo6d2h253wnVB54NtQVKBk87T5S2HXY4K998yArNmiUATd6xCyhhVXAP7w3RwJeoYSp4M",
  "key10": "5cW5sZn9FEYVgpYy4JxHRSWKUk5vaPAVE6Saa9WZ2uFw4omTs6fksfFXRaWGcNrETyEb9EuVpkedcarG6tTeYxqg",
  "key11": "zd63yaZQq5MGd23fpahL7GVuy71dw4MenJPm2cd3AuWsFbdWCzxq3FSh3go6dAYhjeu5Tdwsrm8abPLm6BnSPFH",
  "key12": "32gsLi2bDyZ86VYj51S5cGRhqipoCGNRsnjQ9Yf71s4qN9yPn2cPf1zXeg6kc2fN9A7f7rCG4e5uGNoRLXhuVDG1",
  "key13": "48RELKJiXFpnm9Ytc4g6cs6ZC3rmykyz7iLQ28yhYPZvfKEVad4UkwbvPRq82VSh7GnwoAyN3RHD1DHhYo46cKDJ",
  "key14": "3aVSfcyki9mTNouiHHbwHjU6cyTbpbEharpAwjiUZpfm7UygefYsNciUToyjAQdV9wjjgTezzFsXvhEZGJ7pAwde",
  "key15": "3XH9xqojWKDiz3xQ45oduL723AmigmwA97aqo2NkRwjXSRJDipewwFou3wVXKDE2JRLZu3zSR3Sz1NJLQqNw3tKm",
  "key16": "64mDmNLD4GmawHx1ZoxNKQ5Ncxd5Hpx8YMKZv9g3HbCZ18fQrJNGEEowxQKWBd3eyAuzUz3RDxNJEcNFciyyGKsa",
  "key17": "2M7BJZ1XgEJqWcu2rzALCX6U2PtuncneHrQEVkee24R8vB9pfby6Du1kH73qVXAwxuziKiBpwuzQr2di5FHDvTes",
  "key18": "3PtJ5if9LvKPtKqs9DdqrTwWvx9zgyMjPzoZxLVv4aqU3epJwNLtHEY6YGJ1FtpSRkCjmns2Z6qvCbo2ZwkBnGee",
  "key19": "4Tcy3Vnff3eoMydf5QS4xC6B3yRF23cz1tgKfSRwawJ84ryYw2YwunuwSzzEBSDT1B47XLVNb5Fyxkj5fRdtezhE",
  "key20": "1hLVjfgWDc8KD5yghAPU1zTcQLBcKE6NrrMTQmpT4tKfoGS1u5Lzf1LYmbYi6p4CCtQfBC3cvrs38Nz7A4Q5LXw",
  "key21": "3iYsou4DNpvSi1MvTjFntpcnEA5ucJQ2DbVTUyQ6G9LsVSNgjMiZWrqjWYn6zVcigY2Trk8GFSazcArP2zMn8a7r",
  "key22": "5nw46fdmr65BgTyqn2tSEGGXgsUSXf7SzGNmxDz8ttqU7LgT9A2QrURZyTh4SuTJVwLv4rBCZ6s5P6MMMehSe7Nu",
  "key23": "oLqeAVGRiPcuXduTKG1sZmZqzQxGuaxFAFqetEyffxtb6MARMgf13cwqngVPqCUkcJZMTFWZEVkWjkJ3o8KT4C3",
  "key24": "4Uu9VNr3CmEWL6j9zJsaaLo2GtqyfgTTzRmtyfpCGkYid3FC19EsnsFixRzfrXX656dmRSXCq2M71gJMBVZc4Vop",
  "key25": "4YfDRRxVmRRtW9TvnVHkYN1QkUScx7TgfuB8NkQseS8RJRpG6M7h79cpfhxaJipPGMKiLZiYfNs6TDZYk7UKQBYL",
  "key26": "3MjbNo9YrVbD66E6rdPE89MY3dKCsWvrCFtCrop9eXNSZFP3r4dBADgBFkUk5paFCb9FMajJkxasiUWafEY9PxRY"
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
