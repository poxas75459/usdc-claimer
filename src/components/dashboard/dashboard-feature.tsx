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
    "3YtfFGYU81xRpGDt31UG6A7dsqTdis5uEJ5nxzTWYaxZLLqSRYQtxReqjV45CEGdvcSqPtGHgYFYd4nxNQGFUpTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enUUqWMNbbykKEm3hP4UVEkuZ37zadXPuMW47yLs1K6P8jFFa4it9bqBX2knSBiA1a2qxob5piYq1bndvxKYqqy",
  "key1": "56oY6Tk1DhdqwcuzyGXMSy3tfGsGnT37grivj2GJQuxZcnvEhTdzcfzrxvvXb6EQwBaMPVS4jaLpA1SYcnsXrBkA",
  "key2": "5QteQp1iUT9NtSdXAmTdxZhH2bBFVdSgfj8spArRnVAvTZDM6KmvsdDoCqdDibCURgTaxSxeYmL26wAx1rSJTqwQ",
  "key3": "54qBtuHgrUD8qGaMSH9j8JXEdUCgGnwXTK59LPnC7zbRxWXsoKBXCyYpRJ95CzAh594rvoESgsuZifhfTR4ovPHD",
  "key4": "23Ysz8VMCNs3Aq9Uh1mJuMgZEpuCxaTZsVn27VAwPd1CzzRgPsU1PtZSt1dj11QepGMwcvBYofLZLUTis8fKz8CX",
  "key5": "YmqzLTrfmupnbHqVDVvKpAA8S4s1Q5ceCjPSt5WnqZSBskKtkmauZHSuo6pigqZ6g3Ewwpyd72M5aeeb8ZJCp2F",
  "key6": "4icxZ1DCbCrzWJBm5x2dcgChBnxGszHee1VYowhyBZzcTSUad8EEGuQFR84qVgQ6FVZtbWchQN4sYebKvxxSTWRu",
  "key7": "ne2wzySQzfxVt6mukwtHFTuD7feqgBoTy9fLtavcvkTAEtkSHdZx4XdjR7GezE8WqRyMfuUAfD6aqV6qDjVePXA",
  "key8": "2YyVh9JbF8UotJ6zaggtg57uZzVKvNcfS5i9CEX4BTZHcLvwRutZ33k6NxQnQanxtWNus88YQesEvsFgE619FsZq",
  "key9": "5mNw58GvyNXreNrA9NYppLkAJg7Xs1rFzTMrtdZPMRL43Z2Sz6Khi95UYvbRQ5w99UYVLTVh2GsL3NUSMAcXJCyC",
  "key10": "5AkZLQohwGwjpH6Pcc4n1d49XgeXiiULcdfad2gJAJVWPKmPHi8SsZqVzRy9J2nzbxEVHZLL8vdtyCpKQMBmwpT1",
  "key11": "CmMhkvNirDrFKHMrnE65vzey7mfZ125e9JtDseVsaykmxtQvJUanUS4LrR3hiBnqZJM2Ci4geaJJvXiqn5BHC91",
  "key12": "44xiwztGB3W6UwJr68vWdDti8rQZVaWdfu5UgC83DCF7qtsBPjMrQfCuGonqnCDZv1nnWvyeGtCannH1QnNHUov4",
  "key13": "5iUxTzyJbcMFzZ2DXS9H2oXfNSkvXs11UKQHgNxKn3bnEVcBrgduhDjpiH2T7oc829RuUt2YboNPr682gN7A3fB5",
  "key14": "3zMEGXGW2Ck2X9iYtKVyasZtmDmZxTBPFZJgaMTo2rUgr9JPgiaoNa2SZGahCJQbQBgPWmJ8xhDgSPpbHmwYm2VZ",
  "key15": "4TiFYeJzH2caVw4FX3tTVPXc8UTvvsaiKNbgmL8xBa2uaeZLi1yePb8mxfwBcEt7vdrnuEfwxsYzzieFYjJ8maGx",
  "key16": "4UXqnJcBpvWzaoJtpVGSm666xUKrvNSgUriqdFjj979VpMUzWQma5cpxq2MhXp6X8xs2t4iuXDuUuYNV4XjpXyXG",
  "key17": "3vqGL3X26hNBQ5Edhshp1MURw2NFWTv2kBhbvRA8N44d3Xx2JTPQmEemekjpoGS5RLRKXPce1Rtca9rDVwyZz1LZ",
  "key18": "2EUDdGQnDoSkikBZD4rXR3M2nPi9HxACRh6KsP1AtJoaJyJPq8V551excbTNp7AhMqwerusvUryzcn7Ht52mpqEq",
  "key19": "4VMvFrC12s9WfRoZbwoRq91m7qsLwwxik9wDRPrqfB69yW6HcW9DdWbbtzECVp4VsKGyQkPLTsPt3AhjQTTC6PrV",
  "key20": "4pybQzpj2LWKZoUTHrBv4XB1etcRJGucYEFSMaaszt6HA6yKRzVKxbFfrZhZk2J8ibH8QQ9mhCeTHUFt5R1vvQfb",
  "key21": "4LFqc7hiBKhnVmLduZyfwUNRRj59HuN7dpctxyrHvR6S9aQr2kWeFPLenNWGnPiAv9aNorWCqYUV3raRfDe3CTVh",
  "key22": "2cYo5fqXMpVPo3pzqWND1aPXnATNDsjC2To8xs6a8AcqeCMqRj6wmfHWJ4rYba6T4PwE7sd9eNwKU1E6NYxh8BEX",
  "key23": "5MPk1wnCLNcJ7Nyj2mrJZCoFRX2q2eevNXeUFjvLSjpBg49Ek3poHw1ubi6nzDFHQCKFWrf4jT7rCMLaxGyMwMTf",
  "key24": "3xQHcRZvmKQhkV68LDX82t7MV3KA6HCA4MaSvLcRz77wx9jMyUmhPyvarcteJc6rpkTVEYM6hdBeWuUPuQBHnC24",
  "key25": "27x6RF7qGGe4nyzeCCXbR1pRUkR51zJHcb8H7PS3ct8CG2VRr1cW8YMYo6QaDEb6PjDLhE8ZAU1QEke1bxyFHjen",
  "key26": "eZ1b27gF8dUovcCjtGTMJKBij3pz9FGvfYNkDe1Gvre6ddZCFpakQCi7t4PX8FsvoDxZ4zEABJjewKMunYVrUbe",
  "key27": "2oeGxy26QNDGC2PKH3QgLGP6MER2ZURRmvyYkzoN6Fciv4ifRWEfiEyDgzHbf47k35jhQdXSgRjWDqZW9K1xjkcf",
  "key28": "63tmurnuzBNbRDxiyFd4su9YwkC9o8Suyn5kz6ZZFvQLEGHZchFiNMNhc5VjCwzK3ZSsT1EioYNDxE8CZUxMPUgh",
  "key29": "FGGB1MjCrn5yRnw9HdPhqDwpUQXiQ13nrUCSWraDHogE1c3KJ7msUsLUdH6GyE6Stkyr3ZgvjnqEs9gWQCBSmEM",
  "key30": "4JfRA1iNuFSuTpLnFWg9ZMraHdNZ47bahLJHMUGwYhP5UJGxTDw98Gxps3gozMXjhykPpR4YGGHe7VmZ6RgwppsW",
  "key31": "5gmYSWTs45zi8no54P8r6kxGaPVoqucwFgLGbMw8VPW9gcyHQrtqYfytknqAhNFuJEt9YJHGeDrAbcjLB7FUPXN2",
  "key32": "3B5VfA8sCPase7raUeZAFeVXAJXXp7y6CkMu6Zpg8Kn2JmM3iq49D2CYVxgEtDdW18bQgNZj37qczSRnPvEf6ghD",
  "key33": "WqjMJ6KcyGPhw1RLNGkr38UxVwwpVuY5uM8i3H9XyqXGxJ7qWjj6RxDLX4UtVtpbJm1WpkMxf3zLhNnhqtioWiX"
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
