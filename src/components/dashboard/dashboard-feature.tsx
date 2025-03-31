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
    "3CAP5EErErdP4ydiTwZDe5ax86rK32s28qABj53MmjkWSXUQWi4564cRjqkmJCLHVQkHrMxYHcQhLyQLEVyFemm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFKyGA4uiPEfRsJobuhvfAFGzcM2Hp5R7JBXRr2KDq3QWtNajcHaKFgR1R6Nh6PbTgPd439h3bPtdcDvUzZnWy1",
  "key1": "EexCsG6MT7eZuWanUAob9CPDSArWdzGN72Bw1dmzeKMjpBcTNUDhNkZvcCsAvhy4EqPJb88HaJxbUxefrQ7KBhj",
  "key2": "47X4VfSAB3knAXEHnCNouNM41pBof2uFgaBETuhppCFxZRKRdjeWQD4PCM7ohrL3SatQCh92AW6p9V8Cy4x9ijFa",
  "key3": "2tmMBCVe6RPJenfbSRpfiNy68zzzpFJbxZ9VxjGM1qg68n3NsYZJzrhXZShX1rFMre3TfsNFzR8oXbruYVFaWc2K",
  "key4": "2Hm6epvEEJ5dyCVZFiV2epmy9NNiHnXZhURQyKaUkJUPQtU8kWoQ4kmM3CjyKpWZzg8v8aYmUoWbd8gAisdeknTz",
  "key5": "5en3s63xdtNkfjyoiEbwj7o4iYJ5jGQmvHrpn8TyiJT74HXo4nyab9QP2KLe4o5GvHEPLZiWxvph6QntkYAxYnUH",
  "key6": "gNKWPDedCCr9d1Nn61GxLdS2nZgqp2wjLFDvssaKrhPKERHr9oW3bxi6pkVTEXNaBAfjoktqMex9HGhQ2DyA3jC",
  "key7": "4q2G7u3V6uiDcFcxvd8NSasFsQ9vsYtASWuHunaG5k8wahYUeDrWD98yH9JgvhVk964dMWX7TEQTGXNqDDm6Bypg",
  "key8": "9aajKodziHMZd6WkCEB1BYASGoJbH7FmbRL1iCPWgKFQGS4rLTy9PKDdCd4dLydiEvVsj88nwsNtoauNKWprSrE",
  "key9": "3Dj3dUP82z6QyXpm12NDGVKkanAX8rLCVa81K5WVj5vxrTM8pX37hbx8hrvQ54dAWRjtDBeBw9pu3W8mHDe6aGAi",
  "key10": "2HxvcVcVgoFLVQ4AQspUhUC5qfW5g5NJPSfGfRvoWtXuC9PeZuQsqUu5WAyA91zW5ZcZPJrJWodAdhzfGG2ZXz2H",
  "key11": "3LqAx91mLQBGDhBT4DkfZojfD2FVRVqH9mrmJe8Jfs2DwdUmJPE4CLK2uTrupWPmMDe2Hr5XeBPd95EjDaPwehQq",
  "key12": "33J6eq86azYuisNLk1exZnkbwQ5ePAqxX2KRRp4oqSVZ3K5TXTFzbJ23DWahJka8PzfWvBnbey9qsT84gVcp7TNA",
  "key13": "HmJ9GRHrmb8SWg9tYnQCjofesdyRL5bvXPaghCW3DQkgfx1vKpQWo1vfhNnWKTgAuqiT4KVGjAHtqpDh2jQjBrb",
  "key14": "2fUL94TyZDPLsjbEzRA2cov2PHEFN85cY5dX1dzqz4VK2rJHjzfqXcK26bPtY8XNK3GizWPDgmFZvnhQ8zkMxtkV",
  "key15": "3jzZjS8PR1xvwaNb7yNox2jfFUmd1hfRrzYFnDN7H37r8vmESuSVrYwXEpYbA8U8aQTKFbzy9EC3z3fMjandtk1m",
  "key16": "32F5prXNN3He5zHBGRB76zqfsiC28YNEucFhr3MCi33CSgjt1WvkqzhYMbWRuZ2goruohb5sWeq37MPVUx1obRth",
  "key17": "QqJzsuUTGvDM2fuwsHYwnFqgpyCP5S2VCoTQgvnAuLXL8d27kDvX9rbaZZC2xGkX5DXPg8bBgdoMGY3ExUY2sb2",
  "key18": "3VXojoEk1wurwUkVyeD5HaveQVB1pFzBK7zz3cwwBEFbW9gkKf7jLeBcFqrdyz76FaixAXGFtsKk7H2CWJMMSG7N",
  "key19": "1CEEqD5CyfmqRuEvhp3JS72hcbRZX2c22NM6wDjPutZAXimPBZS3GVeM5bonVuE3Kcaxw8N1khedLr3CXzRHrVf",
  "key20": "27mydnEFCqCi1UkKxjbeZoktEJYK1bpu7s59uGKNZgrbZYazgBsCxRtNWugPWzLxyYzCzg7EDtpjDMwW5ckJDCtq",
  "key21": "3Xgu2WF4QuULibjTJxyzTk1ZXoBwzgkEoBN92Yxt1LVA9vPEwsL6ixQNT8bk9T5eq2DU5B2PXfnz93CAfuuZf3av",
  "key22": "4gSGPYL5PWog6qbRRakTgJPnRBHXMCZeDDkeQyeVAdySjsXJWVpRKxrEgiBbXtp2hesoWEhtyAm9VgpbhrbesvCY",
  "key23": "5Fjzekbvn4g82y23vCC7Xv9CxfBp1Xiq9ok9tuKpu1ngRqrubenhzBy9KbaSXWtXbQiainGQaf66cKgnUHcFB5z3",
  "key24": "4ZA6EZ1sJ3YqNjvnLQ7HmBarDTRix3MGKcp3c6449Abmt9AwGZjsy4p5BZ4ASdV54Q8RFg6VSmJSzBnMzsBc7f7D",
  "key25": "5uZWmyxkBzPqfVMV7BAFLQtNzDnLsMW46g52ma57zTV7ZQhUF89Vqmieus1sCAE56c5z6XojNyWVz4krUn8deD5d",
  "key26": "678mXdnSuHgn6LvXjK3M95cFVaEo1eSUFdSpsB1iCGg9Nb6vkNdi5N8GiHb8VqBEXgJrbiQ4mUkUFWSzcqpKRTgE",
  "key27": "eEwbKzreAdwdjTkEvbaeWGufBaGd97aSZkiC7Ehfze7axLVSmVMju799hpCGEeBaFki82aWMKtq5TxbFHpY3mtN",
  "key28": "TNR8hUkwSH2m6xemejT9qHE5Yx1W9bCfYqtS2o6gK6WnTkdoxYq2dRWXWFSnvU6h9QigHVvEi1RuLoTh2xcAcAy",
  "key29": "38zavWsDzLHmhQ5Qd4YQ1CHVHG5iipTeRj1xsMpDQm1aRxmRSnLs1WDNK72KF3SeoMPXBhXAz68WjYnUrgMwFYh5",
  "key30": "3z8XH2Q3UwoFzN7onJBoGnDkCQCymTW1ArHiGVHVYWTHpsuZD8cxgTgZbfcJocFiEk4QZ2NMrMVYgwurGC5q18ru",
  "key31": "3P8oprC56EiBV7a9mdRgwbs1CvqRVqgTKB9F3UgWrtAP3NYUFcsp2VewSxwwSbeNqURYM1UzDx7kmVtwFiSxx8cJ",
  "key32": "2VRtypxCesFY9qtY3zmpGRz67d3n1esiqJiKz5hyua7C81Dyv8XXSXMmprKHoShHTNGrkDy5miHFgoiPCL9114nt",
  "key33": "4nK8NAHKPWegJB6XCid5q15TmdB4r7MC1Z9UiRhCDsXNNSya4kePqsg9rFPFjfWzZjntAKede4oAEcqAh7Y4FqGq",
  "key34": "3PRYw7PQqTAnVnSSyTVUCW2eVeMd7NAPmbZ2Fy3h19hyvzgRBSRmLjzGGQjgskGGedqZjttRGY1pnYyTKWEp6Q2P",
  "key35": "2XCMbTGquDRN92gcFt4Ssq9Ne7yTnhRbws3hCZTh4cd8tN5zFHaM9mitWMHULJTa1mmLGtqLFYzEFPpLdZcBypac",
  "key36": "65BZFDJ5ZZC6rdgreKPYGCwjNyVYGfw2bJLmhTGiyGDkPvwDMAFcBfNV2CoMK55nA5n7UUL3L9SyjHWnRmBExYFA"
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
