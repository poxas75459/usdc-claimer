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
    "4scMj42vNknTSnkajsXRPN5Ee3fW79vxrtUsUjXBtfTeEuQEM3E9vdpdVrEfs9kPZHFcPufrnBPL3gMZJuhUF1wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VD7xcWjiJFH3WcwWqDvQN5XcMFquCsRxxzuUit1cWtPq9tZEPxQQRHsVBT8GxihcfPhPQnFNP2FFT5YdX5uWoF",
  "key1": "eghT7DVR6GD2LLq6pRa9YiBx5ZnVQgZxqTnpvQbkD31KtX5gsjDhTAjRSq3YExZnjGRwLELxfZwjcE8n4i3gtuN",
  "key2": "2crL8PyUApDWqkFrKhaZNQLDeajFNBYYjjCEQcheXcerd3Eqw1ANpMQjuQSBLFSn6qg73KhqAuGkgEv8HVxqw9N4",
  "key3": "3RPqnzyeRQb2rLVsngF3tq46oPmTFTbrt98RQKYRVva17tH6RwnExVhuia61C49wZWmoFfMpp6BTRX81By9XwCkL",
  "key4": "2Wa4sXwSP83nVcRFgBbAQN6RwaDa8TcZh7Zgw7R6BYFqWfDLm6bTt5MA7v3KtQ9JkqC3LTx7A4Q2dV7xMXUrF3df",
  "key5": "5Vx3gDG9HKirjAqb3KGDuWxJ6wX7fjXwAawoPsBBvMjGyKCAXGx8UVCMbgHAeMT2cP89KMEktehfHqEyPygztqKW",
  "key6": "3byaaayhjnd7N9xAx6vQyYffX4f4PhTtVjS675on616xQMoRvym2rUZSKYjGbWXhHAGJYyQa8eex65oRvfoY9Bk",
  "key7": "5susp8GRWQUTJt12yA5ot53ZtfeKsgpUKmQ446vjBtk1AvHgqHMWAkm5UAuQfUwkEWdk9WaKRYPmSa1jYFt4Bew7",
  "key8": "3cVoMy3y1yrEVZp8x2jfhHxHemtkAhB7t2cG9Ez4yzb5FkXwo1aFSuc5JqgLwif8Ak3LQECGgEPaxmYAdDajF5Rx",
  "key9": "cmfyB2PngiDfEptvomqdPtRbkzvqxv87AazzH2AxWE1k4GSc7K2aa4C3SGaMve9AEngcCrPvWbqYD5SRUP8tE4f",
  "key10": "5fYhtREwwPLiqXdz1zHYAYCTmk45s6cRDMk9T4i6BiWb5EGi3RH8vYch9hRabXL5aXxGUFwQRCD9KAifpPEsXCWZ",
  "key11": "4drRkdKG3tPXAHo1VHFHWGdi8Y1mwRqVi1HKXKSKRBzaHaJXcnByRatfM7Q7TrRdkj6oiiG8NHYVdNMxfvjmHTq7",
  "key12": "5sAzf1xBT44KShTFqvNWtMpRCmyXWYKmFCRWRdwPt2S6Xk6NNPwycpsvhncehrNFx3QMMKe8fRdSAryUHrHVNHLx",
  "key13": "5pSESG37RLfsKHsMq1X36US8WmbzXsW9fs2omoj4KQQccXiaEA5jeiLF4S1yd4SS9ywCPoKaBwJqEq2hoN4YPHGH",
  "key14": "5GNRsuJM4dXEcjy7CYJ8GjrAvwxtPcoqNAe1cTYMUZj324edSAShbP88QLAPyeYB4VZba6dtipywwBV7ReBV6FBY",
  "key15": "2TDEFm4vHsJUadPr6ACu9Cj13FgT42BhXemZev8Cu7uPvUjKbNmk5oTu9sWVnEboZdLh7NA823TqsA1iVkiEBJzv",
  "key16": "ViKo2ex8WVQ13EGEiRzwpVGkNW8GtYFvPuaXLmiUgw4PmYVmAEN648XVWdt8oYmTog3u68mj9XUdTe1HQ1rRafx",
  "key17": "fPYjFEE654ad6NoVttyTWZ88EtjaE5VmKXr9PQycW9dUM38YKKp1omF6xRrNtABC6VaL8GsGLbjDECXohAacrXj",
  "key18": "45pXYp9E25HSxATswaSXKecyjmmN7FwisiGZG3ndwLKx1mCJvDtkFAgnYkZWQVjdJz1ztnHCPUxLZQf5xQSNhmqK",
  "key19": "JYXYPeKMkx5YCEVMH2vUgy8vUX6FweqfGtLV3zr6ba1TqqayeG99NZhXCP8qU3NaT8pFrSk57Lx2MP15Z2SVBXQ",
  "key20": "4HrjJKh4XiDeYs2PyCduy55pFcWPFYsxMtbF1Kr6cD9sirC83gufQzBZ9qVmtUHp7EgHbjFZuRfjp5YgiMGNdfMs",
  "key21": "2asgeGzQzAxCLWChBt5Nxy3zeteDHKP8KeFPr1GrNwe2t8zvrxo99gBapm8kYstd72dEydtLVrcepgTsF4bUdEHT",
  "key22": "5F8EJS4oLEs8ue4SGPBC4ceUTnq3U38p7J8SE5WAKP4Cd1iYx9kwuBa1pQzNF7Soo4s6XzgWag2QLNjhtYPVw37G",
  "key23": "3eMjnbajQL6CkteYmaXdKGUJzv82PRyWMkakUMWEBiUts4NTvq9Se6EzwwPGyLzpeTa2XEoQGUGCt8AFCYKbGvkE",
  "key24": "2qi3ZbsgMCECTR3Qq7gEy7muJ71odadbDnSbiiJgkJnbdhgPSJX7rJVMfgyDKMjuCHTg6TNvzbfZXCP7GScAdb4N",
  "key25": "2rd8KqVbLL1UHqdAtgnFSp1NDkFeJsmZK3K9ERv5gaY5akQs5LqvFs16cMycWT2NsMAEYFMzj4YRoPokuuXKpgkP",
  "key26": "5Qdj3nWZd1LCvkvhAKGRhAMSuJuENZVYn6X8cagk28ZL7ZxrMy723HWG6pF4domBUtw4jyB1sqZo4hc5LeGqgPPC"
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
