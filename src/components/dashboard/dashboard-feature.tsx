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
    "2JUy6nmp3X2HEP1ddhPhTKhiS9kFSmFztqVZNyJvfJY8C7nWCr4rnSwAUAAmDbSquBuq6NuUWppaM93NiEcV5xrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLcpF7LVZ8mkHfBMpd5jrNQPJ8cN75hWsKLzY2iSaGEbxEehtRbMAYMyWy4Wg73w5r5LVJdTZrnwsJMf3AusySC",
  "key1": "5MCmmrsjmxswjKB85rpwZDLsoaYTohwbwjpAnMCep361q45yY7rN6zoTPktNfKwW7A53PGJMRj9C6Jw33LArsQph",
  "key2": "3XwawpBMN57n58WUwirf2M4ZfScJxNWAeEcyxAmsXBC4uKHrsNCJBexHM7niSrMrjjyX22iR9dRKoU9MottkRxrb",
  "key3": "3diAy2YSpY45XZq6E3Bj5hbcsafDQvw2cZhoGhiptcfPrj9hvS3wvLt5ZGd8WHDmuUbRrKeo9kTM9beXuA6VxE6j",
  "key4": "rjZKSBRRcYTJnsZ85mZxvm9vqMSUUkeTSYGQ8zFw2dn7gjhBumrrHw1k2vfpkPiBP8SCy2dDsDyvxM8oqay3ng4",
  "key5": "DGE5pfTyZSnb9VCXsEfqUCAk6LV85EnVaXhEdPF88NxuKgo7ngK6qiKLagubtcokV3yDDGGjZMAkLXB1NdQvnza",
  "key6": "51gz1UZGgivQ9Jbs9gFu9KKMZaumNAY4c7ZLF5mtdoNmhuypXPE29e2fpP7X3hYxV3b4kcXjYfXFFBkP8TvuYxtq",
  "key7": "4PaZFNpjqxf53Piqt4wc9jBPHimgw8nLYovhQSxmZGBHAtBcHgVYVb2JSS3MbmsNhcWi3tGWGiLGvipsHu695adK",
  "key8": "jP2to88ZxLLudutZFzN7RySrVNRXVmgWf2AfvYuL33S17ybZ4jng8fWY32Tv1MdV79R4dPysuQCrpgnzpzVfTYo",
  "key9": "c4KMgi2y9BRwX86kRiNLvQUQP8pf7L6sTrQwMCAdzEhye9Q5Q5Ew8cR8jXrGeY2DBYoduHh72FsbFfHynCNRLuk",
  "key10": "2xrpZpK4jL4JWhqo31K2xMJUrZMBzE66HcJqPQe3vAPS7BsVc7ZyDV85wFdx2hK6qDnRoJZ3e8QbKSkHvdb4me9f",
  "key11": "4uveMZWPKY21wMMCN5oRDJ33efhhnTaB1uPNxzkh3WZemNhQtfbJtFcVQLGELhUGzNgPxKMdYhwtAxQALrMoKhG5",
  "key12": "3xHZGm9C9BpSYqEoAbNv2QSqWoFYC4GihDAJNbm7QgQ4rPW12VNuK7ax8o5tnNzsHNSwHWVzVXJezAn5cos35MfR",
  "key13": "5bJHa1zM2aJk8X6eDvE8BxJ7aYz6rSvZbXtTNLaXBZH6x8eVqQaKX2Gk3GoGPm3Ap1kob4w7d1uVMbrdciJFg9Ki",
  "key14": "5qUzS8frTEpkptFSaEyR7n79F1ygU1ZteL6BKW92D1CoNNWnzYTSRsqs22Y1ZUcDhNRTTM52gdNBDAUNh6oLjRCH",
  "key15": "mYo7hsSaCy4PyuUbLL7YeNWw1tj4UzVQfj6tsUDxNwQBCs8vSk6KGTPmBnzZ6GwUShVunXGdRrSU4ibJJmJ6YYw",
  "key16": "2c1oF8CVY5boU4AEeYmLUWKseRuPn3H3eVofE7w6aVR8yp7nxKsrULe8Y79Eo5gkLE22zXxrXSmb7MxzMkstkH8F",
  "key17": "4KaznKKeyGxJt658ej9sciJWbcogXsxQR6Jr43ZcQtUY8DdHsEkQ6XZpvuK7jj7uwWZRb9dBnhvsnXvQU7et21DR",
  "key18": "VGY5pqPAJSXgkZ4Usn1ZZCG7fpq56KMHMw22NZzjgmg9CHrPGmjkPFxy2cKpbK3YQUQje9rTqKJkvKKs1zN6HsS",
  "key19": "38XXr17UME24jEtzzgNAqDM572AfeH8tsPcGbNuj27zQxnXtqmJDFmdQMYKKt9TRmiTvtsGEk2nXGJ2qWyxP36ML",
  "key20": "3DXJFZXkctwftN5TDgE6WsLbAzbqsH9zGb7oSMwwgxayd7c6LmTZZsTT3YqZPfcchjUC7ZL8w9G1haRrmqUCVnmE",
  "key21": "5XMVFqQppFT2LEeznWARgKRqrLtinxcgVEfjjC9PdhMppjWgtUr8FAxbKp4b1MxHMJmJnA2sdBDPprWXw2g1pGSJ",
  "key22": "4DvrocDbErsibiTb3CLTU7pLBCism8xJk2BanCBZiEHEWDsWm4QvFR7sQMHE95CYLY2nBMuameqdAyNPPe8HNQgR",
  "key23": "2uZ7N8fi2itP7Yn1fK8Hfp4FM6aiZWj6o4tB3vL2K4xVGzMVqU2Ndu5ARi4Y9MhhG8iNyPZxiicztkUrq8ki19hu",
  "key24": "2V1sxJL5xWoey5989k2uMExvoN7je9iTfkKN5aBqUYH9MyqjkeQGtSSrzYFwHyVEcthMyuo4YjXeH9dsjQo1R8Ns",
  "key25": "37pFPdi7iB7y6nXNCysWH73baAmTu6Ga6QzRuPu33cJd6xzEL7cRZV5UG2vQLb2bSGv39YJdDn1uuXeWa7cyqwCT",
  "key26": "2zERaWehtU5RBc2DttvkhYZ53ZdBP3tw8jUgMMxeSFVUxb6e83nk5P8mJ8Ty8HzKHZw8zrdjLrmjrSgnbubLjge1",
  "key27": "5pUeiFfUD6LPxxVmUihB4BCe2ZoWhuuLmthdjpefVzjMHLsPa5pjXKBLBAqGTmSkCuUNAAQpENomPqsk9Has1Jtd",
  "key28": "28tMk7DnoDbgUfsktd46QputFs4oQLfQnDmcA1yAp9GUq1jjZap8Z3cGB4WNsgg45fkkxPP72Z1H8zNBRNBuJHTo",
  "key29": "51HQsMbDfM9QHyfnyTVuj87HXAcFxyxo8kycvvzfxs3v6v4XpSAK3t8ZoVn1YdBCdiR5kMDWE3v7wvp81sjkDSeL",
  "key30": "YPwyPSrSrSrdUuRzv39qaR4kvma2xQWYSErNSAfBjXa7nHEmSo7WSZB6q2b1Hf7TQrJxGY1oDbJrCpNX2v4Mip5",
  "key31": "4qfJyWv3xmzn5ZQvcMPRPNqRkpCiwBDwP3z1fD5MM541fgRRk6xAjbqokLadx4SznmurVBqxYZqGDuVJHzcbYrCh",
  "key32": "j3bhAmfseG5F4WUAUp1pnEfCr2TcuDR7SeQ8wvU82oVdCV9dCpXXAxxfvSLRH2EGVKYffhgAaKS3iyrVvqxxAQX"
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
