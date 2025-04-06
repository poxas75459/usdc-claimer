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
    "5J1UCo9bWtdfCmfJns7c1XgzJTEQXESPDqJzTipdT6Cv98dPCEfLyG2LyNZ46S1DGrKGDAf5HXaN5j6zbagkunLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njKQHDXZGBrerTGihkfP2CoK9DvBbe8iKziMZzPVEu2oovEoUStoF2MSTPDjKwwNt2Zzca4B9U6Z3H4jLvhUn1b",
  "key1": "5CqpxNGCJjWoiRqfnmw8Gd459warV13m3tsminU8uY927dMbooR85nQhd5uYPwv2GwbbZphBaqZLPvbqUa4d6bFK",
  "key2": "5vL6brbigWsd2cLfFYHati16akVqiot7UD9uSc7Qg1FXqZMK2U7qnfBZSm2snYMrdLfrPGsmNx97f2yiXnjDLaKK",
  "key3": "2C5GgsGcB6A21wCLF4qHe88gYyrGLuh74ko8p8JVNm9cjnndt32NCR8Ui27QTAnbwrYvvkLjZqXMjjuL61iaRmXJ",
  "key4": "2HUasNbvXBeyKMJYfArhFrj5zwoSuBguenrMs9LMmjJSnqospEDf2XoPpGdguC6Bm1MBbdv9PduLeCJjWjekmprK",
  "key5": "4rzG1fpMXGM24gsunS3Rv7zdk6twDY3YogZhsppqyBNGjqXVD9DgfNHhhPh6MLjpwaJMzofjmkBJ6uEZHv46WGnr",
  "key6": "5nzaKDK2Wndn9QNpbXhFxxttAQWViNzGaRF9L7MxA5MpmXJ4ywB7fxHunYh3xMS2zNKYKyw38qgGFoK6RQfFwgcr",
  "key7": "2HPLEGGhHMz6jVwHstvm6i2P5MCSifK5k9mXrYW3NrgkZ1FQbc33dBM2GTZZV1o12BjUcrejfAxeVyuK1TWvZqrh",
  "key8": "3Voy3v4gYTLSYd3U4McuVXvrsxhmqYa6ciVAbRWVAF2XKQrnVfFc3R4jzwwuDEvQ8PnsimnA6WfVk7CzioBWMLSB",
  "key9": "HWmtVwiTEHs1865QtAjNPuqJR4hbTfQ93xDbgkM9KZbkktekZrWsVP86pgX5ntaPozvw38xRVRvjv3q76TkaxTp",
  "key10": "5WBj4Fj5qgaicLC8dqQg2SYHgtmpHrRKxM8MsUmtND5S5fEeYodkxe33grHMsw1KzSZam2o3Vsd4VPf9xQy8rq7d",
  "key11": "5MWzQoKh9zqC5XGMuxLoJLFHLtbYQJL2pKYLnjyfcUooekefQAjM1yyAotgyGWMyrF19xAXDV5y7sFpQWDCQKAEz",
  "key12": "2mUFghHA9bnmrWRjDGYs6QaALj6xwEpmrqAcDigkgkeJNF5mDBWevHaZonJ7k7VSJoqWGsm91ALobuUVFTyx8MJs",
  "key13": "5zUsEtMqNzMNyQMwmiL1vBvEitCV6M9sMFMpLhASNtBiH6MmTyQ6BJb3k8uje89PGJyZMNWRxFVKttJkRWFChS9B",
  "key14": "P3z9yKRpHFGKTK6u95vow14EbNAgPdHjppuMaCwSnitBAcNtGyPGB1r2q3KSBegKJkn1BPdxkGvFAhpK8BxNuvW",
  "key15": "3Mj3b3oeSqykJdu8tHkNjzJbqmWtkT7HfLv6KRFMtjHKCCma8aF3ukoUMDnMM8CadDHCrLTVtbk513eLhHTfZTAL",
  "key16": "3XVH7abuk2CwrKmtZJKQSDYvSetx3y4jsNfk3BPeL48b7iHWs5e3BppugEojSDE1nnj4jdGQxH9qpotjChuK2bWu",
  "key17": "3FJMkduA8fhwfTtvia8Rs2dW5tLD58U9fZqpfbGz5HZNV7YyL6zVmD6pvTipqkCs2LT6uNt1N6Tm5zQoMRamjwn3",
  "key18": "2JpGCUZsaBanPwjPGRdkwsUvuY5aGAsN6vczeEwRvjzwmyLWshyTdiDTEzQqQLpujEu4HXNCSfEmjk6ug96FhSUV",
  "key19": "617SHFUhhNYwzkSCWv27p1K5WL4H6eVwkEqVx5Sx2NoXcdQGoQcrUyafDHvF64wDtj6F2fqnBPSaerZby7t8FSxi",
  "key20": "UEbFVVgM6TfnZoDx5gTcNtZyDtbsbMKoUyKXBhjZ2BxVdhTTuTVBGoPPZcBwwfaHLv6FyVKKZ3Yopp5UeMfxiCA",
  "key21": "5so8VWU5YjsvuuJUp64YNpUatrB9LeViKHCJVKkBrotLNa9Rv7C2LfkdmDhvA63Fjh9pEbZbkkfa2PuPLz3gBsr6",
  "key22": "BY2kKSdZKQmA1uoK6kGaP3zv1FKGjdE5SWp7DgL3j6kq34GYPVhhjumEnexs87UEh7NiT3xGcC29cvPwW1dySwk",
  "key23": "4R3GCF3bYyxX1L19SHZA5wJSjxYz82kvdtebQ3h7AF7Fe1t44dYzb4jThGmCSiG3cAN788kCL6PeXwjngGxQ4Kj8",
  "key24": "yTm36qrqVxyGCnbBhUtf4s8R1abfEsd3uTwCZj8P2moaXkfa3o16bRxCaU18FFnZCp5gRgzyVo9q1gfMMwcuet5",
  "key25": "2kbFWLoX5dPD1SJwFPvw1LpsVMrmA9u2DVf78kVnvZwrMBciWjvJytpBy933tTwwN78GBqSM3vjTuJGfJ9tmmix6",
  "key26": "88XSyvnAzuvPL2BFaTcj7Y2Hoe46DZyg7ZJc2gLs31AV1yRzchTnNjEKZ4QHQ6CjADrhf22b429arnRKoubPy6D",
  "key27": "D2tycp2xgCtDGRejCxwk5fgtE91JnSzAMejqko5rR2ozFGLUrXZ9LCA7FGpfL5G4Wkhq9UzRTpYPBQtvf98jg4j"
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
