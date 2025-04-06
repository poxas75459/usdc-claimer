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
    "4aNJAk9MfRAyYPrVZ61h2xrfpZYPcNZaRxwtcE2bR9P9yazn2VDFe5seRpLKrzB63RyQiBFFEJcLzL435Lafumgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xcEY3fWig4EbQbT3Pe5LUvgioEqRzEoCSjiS5Wui8Z54xe11ytHj1CzfCoXLwKz9Lf2H4kGTqW4DFqfGYYaCWzY",
  "key1": "4SZTekmxeMtZ86kzy7JNeS6wsfj8SRENvJoM8V5JGykbtvLJiFA78i254nX1CBvTV6PNd6pvvSzSARPNszvQDyat",
  "key2": "3cim15VbdA4QyzQK6t8qybQghRW5vmYL8A7kJxmxvvpKxzAfkofWDczbSMw5CbRZhxmEuKeKCJUSFXYuAoBJGLCu",
  "key3": "5RYdf4F4sUHV5kh35dx9BUKd2kosiZSjEU1hjtPUntEq3yxMoNECNK8RVAbNUsprueWhQm6Goh2uj8PKJNg43ceU",
  "key4": "1GVkQXUegZB9HxpHWvGyeghRtkwVnNeEPDx6S3eW65fCgPPmL7MVVrifWUN4mSNwDyXeJ4AjwCZ6hfd5XQCRy2t",
  "key5": "24dL4fmtQUZEzMyWXyZZUDJw4TVTNub6hs8zFPsJkMiC7myQF74ebXiPHHuhVL5qE5nVjtCRyct9amietURpDgZ9",
  "key6": "GF3SHx6ii79SkcV48m7zSoGSN23wUcB8LFFaizaBEqjrKerETnP2ipdgNcsxGaEKFzLYH5w5fxsT6jZtFf7kHTZ",
  "key7": "3T7VhYrJ2F7FKWhM64K9ijEadi4tePv5quSeYkWC1GGH7frEPnwMGEDqpr9kaHzhA6RQ4UaG1HNsx39PcorsdQ5L",
  "key8": "43c91EpqxyS5XS7wpctQJgMbdTN81Q4j9az3QJ8jyrJu8o64oPND3AZ96Lv54YhdN3T7FPGGiPMky5XyMDZrLHVg",
  "key9": "5FiqxNSxn64694cuSmkGE3puFMotKqRBjecy51dHd765zthFNJmpfJWNX1seQcoXGRTwsRaJnsVnG12kh8r8cZCr",
  "key10": "65RvMRSgRPDyWds1hvSQKyR63FW1FDadefMHQYxtXxGEjso3paTKgB6X2tCahNTghW2vDDUFB9TGccFP9GKVDSTX",
  "key11": "2qU4sY2S9Kjta4nAncHWDometwbHEHeLimS25C4sU2crNctGfe6YrwjETZBqDcV8bDsquTMEen9BH5ADjEq9LekQ",
  "key12": "so9YXWi8QFVDHJB1iZJ8wVJh7pdPjLwq7iJq3uHcpgyztWXBX1sbsu62we6ygNXiV7R2WdedtJwTs2kwA9Thyft",
  "key13": "2HjU4WJfKEQF3bPg8yTeuCXRCP4iZsTHmr6GGonbN2yambZBBYJa8TmBuKRwny4NJwC6AWcVRQYLe72pggkwLea",
  "key14": "4dmo5nX9KB1RGD9ZFjMKD9jqyCrcTFWMiq5uAd415WjsRHXsW3m3aH1K3x6C5RK3Dt2HHn8kC8DWZKN8Z66UtHcn",
  "key15": "EMioA2m2SHKj25hRxjSNu3LJ7tgMmYm7ouJw4PM37iNH4hyLqsZYg8SeKiPeKVH1iztdHsqNLP4HrdCJVKAueib",
  "key16": "5pZ9zyavKWW3wBYFvwjFrtnRiCjoF7nfPCdXrpvQFaH7VWgACMDSoGgdUEo8GdGTxSWfiDmWGHW4XrrtVrxqLaoK",
  "key17": "65YagwPfxhy6KjVwcj9AMGKcopqDUKckAQms7hEoKnop81Mp277tBgSqXuCn8229NatR8EBKeWcKfPvVTM5zWHW7",
  "key18": "2qJxbi4S21G2MExYc6kmNrQnRVwTeKgynZqLaD3BKXsPzvY7HngXdV5F5XXRYfat2ggprYNVZJ2PQsPPk5pr9DGK",
  "key19": "44wHg7JFstd6gTWQiz8ZjNLFqe45X1LSaCgx32HSG4XHufhW7u7Dd9YWZVNJDSecA1erFBno7EbBeaS5RViQD1v7",
  "key20": "4pKerwRSHVb8Wmee95ut4dA6mf1VhLYZziKm6ywdCMSkPnCqKuigUoJyefUwZHvnhqBB4rDFVpgYD6MEKug8Rre5",
  "key21": "4XBNpcnPRmE1mQoCQLMfi2YqoW4wqwgehc5Nhm6FJw3SqeTE9tYVmCspdvr4LfK3kk1Wxs8AcCG6aSkZjtVuMvhG",
  "key22": "2x6DgSRmEMsnRNVm3zfVBx7HNqWXff4Bc5h6TQruQXjF7p9kNh48BwykWWdoK25vQvnNhQvi2K4xKATNBbyFcfsT",
  "key23": "21CnEzNo6kHyhZgNr9AdXoAZWyuyvBaorkp9S7aCrnFWyh9RZ79Vr6dLpDnr6qUSDfvjj9thy9eAfUihgV6kYUHu",
  "key24": "4bstsEMEyjZHtx6Nmo24KwyQPg8a6RsxmtniV5CkqgWb6qptfXMhTQUuuMeetURA17YuF5BGQW2ib4DpmsCjpbuc",
  "key25": "1k9Cm1dWK4LRZnPb4Wey5NSH6Ftt7eeYm8ivACFMr37b4ooxaFoccCrgFsQ6ad2fXBPbsQAX5Mg3k3GbeqT9ebo",
  "key26": "4imeYB9XpeM8mpBX8LuXC1pBA6bMPrRr1bcuAuuUQacsfKT9wcZcheG4rLQVQgK2W41HrxCDug1MyuJHz7krhg9b",
  "key27": "5QsperjWcsijTXidRi8eyLar39GYDB5UFie7RKnndPyskRaiLaLVxyUWPkheYDZXsDRzFBTJz2AngxxTUe24TPPF",
  "key28": "5ei3To16tCbZhjD3rWhv1yQ5j98Wy3PtTUNd2jLyqLUTZ6JSHQcbAiW9mf7uShdyVmC4w88ukM5vLE8WdswAQH8F",
  "key29": "2bH9F3CGqtRiAD9mZKbAYQ1SgKXtdJRHVTzuJDiU1BRSG3f7zqRY4ASTSmTYr4Z4TiDGmsEus46FzxDSvxZWZzyT",
  "key30": "29MvSEbjYP8bFiaSHacBdpydf4VZ8gFhFzTmi7Q84QVzQAiia6QYm6WzpiSaLrRo7ULEzg7boMrqame4srsg5DhD",
  "key31": "5fzvxTK3eB1VGc4X62ESZkb3eicj3mZmLpkYip5Wf7Rt731woH6cTWxgz7ME214V6nN8zJn3dGTkiXk9gqaqFybx",
  "key32": "62een4j83aoXxQMjJb2AHtjiCo8DP4UBKEqLohJZPkYkxzJqvhWZ1UrhEunJ4tYh3JBTsuo6WP6hxkuw6busR1Rh",
  "key33": "5ddk6onWNDZjpQE5to32DHmb58ZBf6nY9nhEZEdGPqu8nBhkqwPT58B7Eg3vJF2UgqXtt3WgQnYsFRhz6dXDw49F",
  "key34": "5DgZtzK9ixVkmFVAAeskePY8b99N6wrzGKTc6EXvGAUpQhQVtQCSiJHNWdjShFN7iy6vnG163E5BuoLAgfir5nXm",
  "key35": "56u2T2ZRtfe8RM1pdZJKooAecz3aFi1tjxoN7DnZs9B1Uzs6w9mZLwMM9FpTjWaTjsa2oYZG2CJ2Admg63NEqya4"
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
