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
    "3TRqozGEpgicNRzAMSYW9rYDThDZ4dNgTno1yFQscjuF28J5UA3JgPPzo7PDNgqNizBrumsGyABeUHSiTi1bfAbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMU6Abnv1reWbnmtHjXXo4iRLGBGcmTdwMFdy3GQv8EW7fc1BnXGXxRgk5PGYMHzuGsW5jFaZSFnYXLzzTWTAvf",
  "key1": "2esfnbHXexjYeYhZymAskWma7pEav3msGbLKfKtCiSTN5ZJfTDFEdJLrquxGbjNgSESP5QngoZXrwWGgtEPsvaNP",
  "key2": "2xtya2cSs45HBrk6696JoFhUVubW4bdsj9uksPRBxYpraicpFYhhYYS8dWi1nGm2bzVKEQ1SiCMiZxFsXNhQ1jMD",
  "key3": "26qcYfsUxgxASDy5AvUvSXniXWbi7akb6QzFVBcqLgrSN2mZroNMrQJJSpzNjc4MoKauiwzQ5zGwAfftMwwNayfX",
  "key4": "2Qc2KrVSmPLR8v2ZLLPnbkzNqpvx1UqDoxyWhWVcx2gQwVuLe7D2Vka22hQ5hvS81hLVrtRiRieq9daZCdKFYCar",
  "key5": "dZKuJXfxAJa5M51aW5ZWPmZVPuNYVEKhYVpNBBCQcdGVS3pp7fAGDRJPJDDkPqXFBXxHM1Q1AjPZqmH5iC7839Z",
  "key6": "48n1VqRh2yKCPFSqaSnHGSY7FDkcUkry3rCCSr5hGmZPBCHrERzC6duxGcdB67zfzVgAH6wu5Hyy9G8w2WuHg3Xc",
  "key7": "3vKXJEwXoDLLbPQ9pdv8S4fr8AYntUGXxuAvbHyAuuSUzgreVwTH8NLVfyiC9jLcMsphQCWMp3Gatr29MJX18TV8",
  "key8": "5baKhQXvuKG8i2zzL1WepS1Dwu6o2Zaka5wAAcHNGbbm6J2SPvtggQeUB7t3LNnPUN53SujSaLNBPqj4R8H4ZF5N",
  "key9": "4KrZTPjkzQhTqK4T55Qcm8ikn8iEiyzXP4LMRM6ScnpcDQEbyT7AqtwCGnxVvnuSd3od1KXE7QoQb2cjJGeyGoP",
  "key10": "2GHw2cHNLme6c6ba86QKhf1oWgHoTNqbXkr7WWn4rguKb9Hjt8WucW4aAxQyECNWThNGm5mcEPEvvnMUNBxXSWYA",
  "key11": "3mxctrrsveRJ9GTFJ2uAUdj79U2gWAMLJpKbM4QfLYYNSzCwEKkzgp7zxyhSZbkvZsxSJ2gKkTS3G3LytKTvpAwY",
  "key12": "2Q3uZSsTCBVRQEJXBz5k9Y3L488JpL2RNSCBsBSScfG3t2ubjVRi3pc7KFDSF9uiSykdTXfwGkTVPKN9ZVcqAFX5",
  "key13": "4psecdy8HexnkCU9UVVRSrMGBEdu4M98hu4VRgKYcLGL2XgiC9JS7VYEQRLc5HqQVodeAztTKRw7a41auzkQ6AUu",
  "key14": "EJz8MduYHaysxBdxk5djpg4dCn7ZCzHY5BRw6Y1s5SJwZbHRkazwLrjNMrkMck2U22N7RESa9gYzKvBhP1bPpc2",
  "key15": "5X1Qdc3iAhaco4kSiW4aVr4oTFcVnfNB6LKN5Y5VyxX9ybByuPK5MhfXMfnURDDsyPGmLafzdhMnSVQjdK7b7aFP",
  "key16": "36ErLa2DWLwYxBZ1YPMie9fL8bZVgpwrx6C7pjCf1UxNQyyGtPFiMpPwnD7CrqXXdGLeHETcP5J6db4uSqzaemiU",
  "key17": "3eYhA1VkHCLHzpmHjcyDqMHW1tDCNoLxiu5gSyv1RgrVEXpTC5icfeGKPYBvpSw5jBtHMgQnGCmDozwj4EfKzqpm",
  "key18": "2gceNLVaRd4LBWuopDk6g8yHqWjiQoR3t4GgqAgZDZzp4kpd7D6X4fABBjcz6YUDvKuR2qYjqMjQVW8qjvGQVG3i",
  "key19": "4EU36dfczLkLY8VvNk9AdUsUyKm5pfSfhExsCAmfyRVYxFqRZqj6YFUVMN89v5g59yD2FWCAZLbur33t9XKpD72H",
  "key20": "5wK1pw5hPjkF7XNyFc9j3Eygm8tei9tGnrwBiPSXEMudQCCbF97CaJBas2HhASiD53X2uUnUAqFMF8RSr54xVgaE",
  "key21": "4PhifJuMETBL4SUftu9bRNYWbnTpF93wz8T3EHwxEZG3RqFyzxkSVoqbGt23rrLe9oLJHj2QBDpyg9CjFGccmKeE",
  "key22": "2ws5FfRs578Ja8unsPVoUwaPweYCY8bdLEcKw4Rx5a9LPzERbfKTdxCnQsjSzMWtUohLfAWMwaNWp6aE7g3cj7nA",
  "key23": "66wH6SS8nTPVfZCsYj9b7V6nm8F1UQX9EQ4xCwbswB1FRPtrNaeZ81243AWbgKWDQaRgMWp8PDGLYfcQy5ycXR4N",
  "key24": "5ht7XnyJPPf49TT9kA2VNaMMPGoAv3K3cgdZPfN5ERLyEViFSg5LWQuoATPDQ3ZEoYY29UWm9Tboh7mfQtENzpnZ",
  "key25": "51TWMRLAiBrDGm81e68sTtR4QjtucJ2Z9STqpz4i3ojzcxs1eaN6oTot1tR4rqrp9RM78WFyLbjxnpxZHD6eafsE"
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
