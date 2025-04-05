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
    "2zGEVTy4NpkULvsyvSJ9Zxww8HBConCAMVyjmtAe35oXvpHW1vVi73ECnm9xs18RNShBrDGHxJxfVZiY5prURyue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zcbTKRJRkTAWEHkcWDM2N1NDG8wWyTZDPMdTPuKu94aamEPqCoTQ9JhcuEoWxKPn5JK23qLL2pawzBRL7t1n8Ze",
  "key1": "3iKf5chL9frdU6eCswpYj2zCqXuadPYXesd34qb7uxRSdCUmTgPnumvonaaNK4u4iXzPJMDempeFZRxrVV8L7YyW",
  "key2": "4fRWzqqWEoMiGbe6A6ykypPzuCHgdp6rj5mNNfvJMN8CBmgaYvqmHi3wr7DGSRiG2LKHnsaXwBbL8FHgHRASLyD9",
  "key3": "59UfG19zwAGA6qV5WsRy6BVz7DdD8hRAyEvoX9aG9bY6VhkYTpE2ASNLGXdKx1TPbFAn5Rf3CLYJjtubp4S1i6pH",
  "key4": "5JUMVGb3BNP5oWUkULP1EW7ewThZN2rZeuELAvNbAgpw7MHpWsXy2Yw5dHKY4vjaw5fCmfkWEMXftTCqzwrw7Y9E",
  "key5": "2Hp4X5ApH48D5J1ixxXeVuxWHrX22P6hhrwRdBEPmgYWrPQHjrmdWqExbSXQo2asuLDGK8UVmCKYiFLb2wNhZABi",
  "key6": "4akQmwsKKVeYH9PGKjktHh1HMv246nGnmTx1HM8sskeoLitvmQzSzLfmHaY2ZcbUqSAbPKSuTiJqHwAVQHt9EvzN",
  "key7": "5uiSqEQALUghmRUkDZ6UQU7KCu4KUWQUYuimH4ARqsQSuNxLZpKpa6xNDRWz6fnm2nT1553oeQ2GZYSC8EaymAFS",
  "key8": "GD7589VLyvLNS13SviuX7aGoTVSJivdXrSJPDsacJ6NjHVPxh9isWaXqMkfPJDuti9ktVXVjkPCp9pseiJ9AHqG",
  "key9": "3ixFmUCAGa3dFFDTDMPsxxwQRkWZXBRTJVRWj7C8ymRZ1uffajezcGo2hQUyVo6bZ9dXxT9sXJf9FGAjKATZLoRS",
  "key10": "GLQ7tUyHceZJ5YDqqUAHMcPPUqCgxTrT7LPNv43tn5qVuPr1jpSXZQXQmCJzZ6iVHVePhdG1F9BCmL5Jm6yjS38",
  "key11": "5a66mM1iiTNpGTpLGXHoP3NQA9bDmuiKFRAduCjWtmNv9S2bbYrE3TQRoAh1jhcH4i4NykK6wEiJ4Z34ZRL9KKFF",
  "key12": "8TMiiKjRP5xQHqfxL2bJ6qgMcxUa1MYdLphT28dNyjrBDoVq3FVBRn5cdNPizd5MwXXcQcWL8XeH9hfErPpJJXs",
  "key13": "2kbdvbS2sD12K3D7eG1sGrs6ZRfFWGeJ6YR2HG3qwoXwcRFDLTHBtDZxsJ5fWFZk92CBup6oykHqmeVbXDVQ6M6j",
  "key14": "62habByPj2A3pW5YSepZfRdiAJD8juC5Xr9uLjELuQcA6ENko8ATPscM4QHH5M3ZNMtvXyyNqg9NumKWKV9tfnpV",
  "key15": "3udMUkiHg4hYJ9pDeNdFED7dzaZTjQCYC58tYfYTUZbP5c5BpwaK79DyhNrf8yehFdkb7NS83YGfMJgnTvbRoybo",
  "key16": "2MR1HkpN4Ae3a8z6ZbpifNQxnVPNhUYuXDKigfoFibzaJVNsv8YhF7Hj3BQZF2r7VTXPuFcQAvkxc9fCe7AX3m6q",
  "key17": "doLVBtGZyEo6qJPr1s6kciRodQKXBBP5ANLpiGYx3vNYNWXB61s4yaJk7FGQrnb1bdFMVWCTJZbk1Yp6JJ6cJb1",
  "key18": "36UtWcpetSfpRQVvaqoTtBHLggYN2WrDFXyWWDhtJEBaZYq9HJ8L2fFMtD9bRJw9r1jKkdikgBvituvBmwRbKMdi",
  "key19": "K2dSia9usMJA9dEzbtywMpHtQZn8nZpd1Th19CJ6XUtUk1F46xydoZ7mJhcWYjPM5xcrTCpfoJN7ZF1wvZdDipU",
  "key20": "zjwMfp7xUGuyBCp7q727e6DVCteXWqmxLn8ZWPx2GPA5eSd8NQ2hSWhBQT24mc533MnM1nbXdxKKGb4DiUEC5tR",
  "key21": "4Kcnu1jJKg71TT96TmJqdidoXkAbU1Cd3UjNpAxcG1717e9khgT1muAKeUFXbpxnb3kaB1hatM8xX2SRAJgd8hj7",
  "key22": "3tuKEEQEojX7kLsZCqeJugEDzzXKkPAE7ANvPRqgHGw5p2sDKdcHF4RZfL6mRU1EmmtzmELTgQmkJs559Jnuy63D",
  "key23": "5QYGpoQ2FaGkRZae2Dg1eaRJZZATtdL2QYsnFF6ZkNWwvgs26PWJXB1UgU8DZ9VhGVNpZpjuFNPuiPCFkM5qroRL",
  "key24": "35mmyJnknnAmG931FteR5A1jnfARKxCN64Zy9aM42GiigE9oacwDZBxBHjZagwXaSV8dGtSHPTvoCvQfiGAYiv9P",
  "key25": "4gueHiX6HkuiBziPM27oz6vcDjacwT1DhG2pXki3tZLEM623bWSjfNm6VTsR2AFfSaG7if1oNTVG679M1zdMHN3n"
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
