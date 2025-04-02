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
    "5ydNmwC2VMffGjn2wm7BhX2NJuQErKnVCX1cg92dV3QwMruY5QPPWJ8M7Qtc2JdtGKiMCGgwMSTQVHejv91TdEKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiESxFB1zihvwDoHNDL72Gi73rdRDRyL3e2AbnSpdoR7BM99vSnrZmTXCaRF6GuTBpeDpZ5dQWB3SfWW98CCypR",
  "key1": "36tUKKyoDXfxAbViVD5HF3GLUa216uvm4DFHnqZE7CUxLDVxaCwUthmH4kETftCeVuy48VsiDJEEXbr11vcY1pfs",
  "key2": "3N6GhFETmAz6Y814B9nSbja7FwSHwEo8u9YwAsYoDMAf1gTUdKoNwaeBp496otREhGMAEMVbsU8nQSEd7H7QV3iL",
  "key3": "5koQMmBhBX5pGSxGP4RRAp9gHrkbf9d7d7n3JCDfhG4LHMgMsuVYXEuqyzvPmG65K5HNd3kA1bEKQffpMmuajzZE",
  "key4": "31WzkB7MUFEtn7tGmeAc3cMPTSom43gh9YBhe9tHXmZWnXA3ZCeayzchUkviNssnJSpKa2y1sSBVkqBDR9nPMzDk",
  "key5": "2bg1MaStTaPg2H8EXnMH88vSS7yZATVqd2SRPxGoZLEtcGFuRvaV4wj438cVExnvp99gBoekavy9pahnZxbbt5aB",
  "key6": "JzZKhBq1dwDzWGUFqZdmnySVJ1f8F7f1JLHkzqJDbtwHWfyqhm4EvJhxjEYTQJWov6nbCGX2fAxeSwULY9NzjV3",
  "key7": "T9fC8RPBSgKQ9popuiVeAhW8A5nWjcC5E2wifTBinGUdBnyhWZBJKYue7NkPYnXMzup6HeQmfhJrnqdPSeF1HJy",
  "key8": "3hQDRZBy9fmAKYnUuUpwCL2uE1at3RQBY2zQR3x4pvkk3Q5HnKE7iNvfFNSBV2tqTKnMLPQSJrp9AkG9GqT8VCNk",
  "key9": "4xnKWshtYtG417hhSTMk1A8Y9E1mGi6MPi2bVDn2Pue8ZnKxGi5NRmbNCcu1hfZvjW7xjeXmBM8es8q3oVxbGVQe",
  "key10": "3NArnFPU9PEwrvTttcWGxh6FEsasjgJ9u5nVq3rgifQdfZaWLNMg8sQAxU8bDrVCax4PKa3HuG7jYfY6uwCizYU4",
  "key11": "3VBohxMnHwxP1E8K2qiDaV2Dpp3LD1PzHyFWL6y1zGoNE9nRkPosCtDUuyuJpqSEVh5pCPfVkw3quvybNXzDKXng",
  "key12": "5uWazdRrXdJf4bCTB5uCdm5rLoVVu1WA8DYDsuYZ3JpR8nvgJKEubpx2yHHmDGtXpHjddaGykfgK8UxHzXAhxjTV",
  "key13": "5Ak8QJv2KsBUo5iRQmsNvSy3jGDG9M3w2ARQNDvUvBzbGW5zup4UkBfyDLZYp4V1XnCr6cNUxgZB1Bxx7HaaCwLJ",
  "key14": "7Fi3vb1ip7SKRAFnykNUS7MEQ56dncv9BTFcFodQJi7Zz2uMcejHE3qR5UQLybLbwd1y7TFXXpUsPoQ9hvA5BmN",
  "key15": "5zhwkNMeffmsM4RcCgSukASrqcJH7Mdtb7dUFMfogejxvU2K4S15YM6Sod4u5HUBiuNUTjMDQih7d2ui1DASeYV4",
  "key16": "3d9djttMMZEeiEMPSbv1jYuwQT7A8sAKtfLS5rQc2WLTmfxskxWtpbNiwsn8R2Kw5tJdnvK3hD78QJwk2ZbqoFLM",
  "key17": "3fzSwJRtBmtLk18kNqriPK4XeKGCZSYUWEisVFTVXBqEbQ9TxKCPj8kdKsYUbiqF5NZxxvrNH4EiyHX1CPzYYqoa",
  "key18": "JfxVLXK7vHaMNwHMuXCrtwDUQn5jtKDwRCp7fGDcjXwFjac5LmkxDwqaxG7zPCoJnopHLaqWG3VQAupCMG4KcTH",
  "key19": "2u6RDkBAYjEr1gzEt2m5C6yu9zsiyMQ85Sd341xitGVcvjuKcCbjj5XkDTSfhTwRZ4qRJiJNsw3fPz1f54hi4SFe",
  "key20": "3GQDuPN9U6wy6zNaKgweDxG4V6QG2uNUtHZgYDmz6aSPFd6aGJFVXmtPPwFziSkH4GCcMSpYCiHVaqQJjupNpfnS",
  "key21": "5zFSwTx55RTCjWCghA3Mb4TSnk3eozwBndiwxN45xiffTYur3u6qLEMmwKtNjATAABoAhxFZkBvemiYe42PMF7P3",
  "key22": "5jgzCRZfQ5A4kk5KDSGnmpv9cFaa9MVWbNZK1fEDLfLZtZBVB6EP1fvCtY85ccTwekdwiCfUMPf43mL8qiBu6HFx",
  "key23": "3aBbtkMriZacnHN2pTTAswA2TbKco1Y1YogKP65Q59EL86Ni4aGmboxHb1Bte6hwi46rND25ujPBHqb3kQUDQY9T",
  "key24": "xeYVDfhVAtVtpunNVCjEmQteMFdgwAatdh6AXLiXj5QxMDQ1pSQp67EmrYM953zFY2dTkdpDZCZ6LpUKpk8fPyv",
  "key25": "4cGvb4XuP8AqYDrkw2LqNthzeso41EMaY32ZgkBjGt13JhqEAKesUWykM7SBYBsb7jyCjwzUM5ZuyXA1LnTHG2CT",
  "key26": "2FZLzySwpVhb28qt7Pffa9wigE4QfBoGxP8hpSXZsDCHMehU8UhaG5i8SSRWNTDGvHW9LufnUg3EmTP8ad9Nxp44",
  "key27": "qYxdqjAvxDQWAE71aGyt67T52Bqtj4qgyNjh5LNKEdgfBuJJFUMT4jk4DbAamVbtw6Q89PGs2HF4bVeKkiz1SSa",
  "key28": "64aQkpR4S1WbeEA8ZLDUJwaVaxZasQbzAm3F9rLZHNYn3M4r4MWX1NXgpegCNBFd7rhnMyGPg4sCqM2xW3eKbdTy",
  "key29": "4b6Yqs9FGsf68kQqj3ZCQkKjcnH4ZYpkhnSzJG7RKBQTXYTStQUEL55itynfXwompr8gpVcVwas5xsFa6Fqxn2CG",
  "key30": "4HJachWPnjWeLeLxV4b187pxsNYX7qFpmECziX4uA71HHzqmkpKF3imwnRTJwQ68E9vjaKTugyXU9Di3Zz9mjWNE"
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
