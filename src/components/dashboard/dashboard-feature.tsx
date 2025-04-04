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
    "44fkguaCXkHgxzLa1xv9RoRkWNqSoMkKZCbhdkEekakvXjDANspkdgU6WZ5vmoUxdpfp5zTHCHjpbBXJhe9vQxnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnW3mAA8RVLAMMqJhUKk5zHYtiXiJPhPj6rXKP4knLfmCmuwBAzjPt35YygtEYopE9srHDMQjri3vdaqdrC3k7t",
  "key1": "3FPDnKg5vuTpDjHDsh6PZCB2GMTUQdjw3PNtH9yKsAkJpgUf4WiV7X1sopZAwHFmtFo61k1totRgAHcCTUCipqCd",
  "key2": "2EnTiedSKrWHY2UzkxqXfdTCtE5gcJGeu4RgM5VzUNshvkQNprwtFxUY2XoEXYYXKrr22ochLLCXiyGY9NZDhHpd",
  "key3": "5G8VYodWAedH6PhBkzShaZtXy9zvm1sG9MeLBT1c3ace9iTWyijkxUa1WgaMT18nW3KjBxNSM7CArqkbLiZ2z9h9",
  "key4": "63EvQ5esssj5wkpA5JWZMvGJdEpJPUwbXEgmhBqML2k7eHHJRp6ZmKKdezrNjhFuUvww9SdZJJ6rwx5NiN3Ab9YA",
  "key5": "29ikKEZq6oNGgdLzYV6rdXCawpoeN6gzgHRFdeuytEvAegtshUwce62AMoFcQ8DJRZg2dUSnm7fz1x1AnhT21Kk2",
  "key6": "4UBLaRzaeppbuXrtXWLKxAGdQpvyfTfY8VFNUp6qQxqopoF2c59vgQRJ9Mo9vAXGxBmPYG6LsXaiMzCUXRMGHuY5",
  "key7": "5VnCiN599n4xJNoEUdYnJwEeabNSsajcjptQaFDNrgynu7mK8tYby5NvckZ5aABfMJQi1dXdUaziMaKBR6UTbbCF",
  "key8": "3g1QwAm52efpamqLijeDnxpRfqNfbPn12LyBgLnr9Pk1VqJ2WDp5tc93Bswsww2wVJH3y7e8Fnr6d4nuEkNvfawZ",
  "key9": "2ULyG1anncbCGVzFiKndpkobhSj8tQvfBjN2QxxrC9zrJ4gjjgo1VjHbZPgJuWKxxPp9cvz9VtQUGmzSbjRv2m1e",
  "key10": "66XcC639y2mMuCwccNUDgfaCoxD8k9p7Ao54vfBQu7742kYA1mTTtBmYof8vUGYE1ModCDES3FaSgkq9PNtpp2LX",
  "key11": "2uP4mFYQRLMhxMPF7WGAVbeCJ9w48T7bfNqeRrdePZJmBTL3peEBtpapvsxfb2F4meH3D1fLoA6bj41jkBLNTRfn",
  "key12": "ghBB6Y1Mk1saxk4cYBSBZTPMgXnZUKEC2z9fyvzzu9RWJ28CWwswSgWxFX4bwBA9toGoccktxiDWgGmAPfp7K3s",
  "key13": "4yCoqEEaox5n4LUDkUUwQG1ft4uxosZ6S5CrCiXQeDahyCZBCAqGuNxc2DkGC8H8YJW4i2Q2TNv1DMFRyEC8ima5",
  "key14": "42CBoU44UiYf3mx7xzwZaizz8hbsTQoyQtsinJW81SxUT1NdsRxn6MFfkSYRxDuQv87UHDP4Ha9zQmmB3DNiFTJJ",
  "key15": "5PLwz5k8JzFmPg7UtpY4iVcQngE1wbqYJbanTfdknhk8xyVQAti6YAh8y2mG9nJdkfWQmctLNX4Y5fsRg1tLLCnF",
  "key16": "4HtazoQwyAtWNnJAGvJ6M7oEwkquwrnm9PTa3GxUMZJSuZkSnrULwDMz66FxHTUsLz41wYa1fESC7WcKuULgzGYR",
  "key17": "3M8JvoEcvdNWLcL2hLAoNwnq5dCuoWuvsmBoEZzZvyXEMhuhWvkaLeiX2ctKAKtyRR7ybAULqG6Trsx61TSoTnw9",
  "key18": "4WFdc6xRFKqCfcMBeq5odvGKTiazfywBAM5ETznNQ7gzCL7ZdQmTJtoYdoPfi4R8xmRFSXcaUk7pVCusqfgT6gGg",
  "key19": "3DGkj6pDqhHZNatEM2JoS42x1RytNp79Bn865wGok9DPZ37gcuSgkKVRbDwzsXtQjpWvvbFY1j2h2YQdfuf1WQLh",
  "key20": "WeAbjG1qUG6xpDCxZNfdiQMJbpKnnUrvaKunhj5X6ToX5CkotT4tcumvb6trjEwZGsz6X3CfzAGnPiLD5JBsN6a",
  "key21": "1spKJ1jye4b24dQUmuTN65r9JQgwhnJBBYwtryBPuo4GQv7nHdrrabj3qciQxm4TL3JeKgmztVVpfYfVLejx9Y9",
  "key22": "2oGg8LW5noRWoquTqNJgqoX4gcJtUY2DYgyrWwGyqmHbfs79F6XjjR87C1MiT2sKB8KacGYBwhuqzsnw1xfPieBR",
  "key23": "2ACVLWmDjUx357EviwbXiRTuiDmM1W3QdVmDngmGQQ3dYWeryBUv3MVUcXauqZ3SAMNrjwT2edeVfqSvfVif8XkW",
  "key24": "5cgTGvV9zfcGSPbPqdUfeiq6RQvEJJEB6aaYP8gNthUkyXTY1vnaiK8XeiFEgVVChDWozg9HjHMzLyadS5evJWrv",
  "key25": "2Ep9meAFyzUAB3M1RKHEMN8nZiQ2QAdafLkv5qRoPDtDm1NxcLxUwS5vnVY8ta9jrrRSpc9xdVhg957SWAaaXqU3",
  "key26": "jsh3ozRFfu9ATiuapuur4Y2aTCXnGyRAtvpJQyD8P2RnhtCvCnrya8QZtEFcF2Hayx4RWQcGxPD48fuTr3xrS9b",
  "key27": "2BhuUnjYR9nuUwxm9QXgVyTLTrQt7G6CdHzif3mGARGwQGPWa6bPhzLQfr3Lj5j4Bw5Xyyrfg1EpVVbVZ7VvBDQ6",
  "key28": "Hz8E1uUBzbgNSMPPy2JsFQBuN3hijUkfiAxYbfp8tn891hMPaoUvNtvvQZv64Ahkh6JwP3APkmU9kDajU9M14XM",
  "key29": "2LAZ4WuUKpmYYSVXBT2WSKYSrUnE3rWMoauZNchnLbR9Gre7UVDX6HNPDa7TKrn6cXnu6Uv5x6qafECj3G7fZygk",
  "key30": "3ohzAUbEKpZBUMjHCnJkSdyTMiauFVmZhUgN1MjnXaYjWmD9DVHiwhF19vNVMx2vzPWJPXs8B2cgb2aSRDg65SZo",
  "key31": "3TMSdZerLBmhZUXdG8AipPYpHrnanjKVm4TAZACqqtcYkyAsR6btF37oE761u2jMbjRG4njiVZ76dsG4GoJrsr3E",
  "key32": "63TszAnLfTABPHsVawNYQDcfyhYvuxCpuBd39feYFawnRAyfwMAK5i7R4uRDFKHg3fSwmzDWXLCcy6MXSQDdqkt4",
  "key33": "5BdHYV2M1q7w5ywDR1VtCqGYDpXWmnzCLQ14SKMbGokqFS55nhvEhswh4k3Dg6xEFqNNBMJd3d5mgxxGmt9MVkTB",
  "key34": "3bKNvNQQJKNvuaryUqcy3ivfa9hLLRn2ELnkWp2AY1DGG65SBLpW2TX1phyFLoowvVMyyfgPdLw6XNnvtn1hqbWT",
  "key35": "3AyxnXjYgpYQQTdCTxnrafhySPeU5ZjGgtiEE3FUgAKr8NSE7XFgRNpEWUPSp8UrPhgLUK9EQjC4gKpNV5sSzLBv",
  "key36": "51u3L859sUhJiweBtUymHMjLhXFYe1FdjRrBp3ZFJERYRSkyvsb99bKnSqREpfW7h4Z8ufe69YxRPFvweGzXAfvC",
  "key37": "gfDAcCGkxvAB68GrVQfAzCmHwE4y2xxL3xWtp4x8VGHfneZP4LAMtzj6XhUH5K1YZEsCNX2PtWDk3e4vuAVgEVD",
  "key38": "3rqD3m8HKUwVTAX8XbMuw8f7marDzCPsjpTBqnaybmKtrsoq6T17uxCkcNfdbCFSUhaiX63qxut5PuMH8J2UJPVc",
  "key39": "4cPK4cawVdtKsfurdHZNavwjJ34ZC7B1H4uKg21tVzBic6DuCgfJtJZxbuaUUUBA2vGQzTXbYKAF54qqQ8oAjgQN"
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
