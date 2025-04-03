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
    "3Kkc9hpPknRDLBa2CCCH1oorokHsA3Df5M8VSgrNrvpK2oUy1gQvETwxTUCMNqW2p9eVQVDVTspsvsDs1UTm4duo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCWjQofRJhALnyQ6kYJWGG7TTwSGkPEJ4zNDdy5VdxaEgSe5nL94kjoi8FhhiHJ1GWSwqPbao5ic15PZL7mN1ew",
  "key1": "5RJqPzLLuoU7oDeY9QvR796A4b8LNUyGZgJnuqUnfTsgpqo5CWeRVY6rMFSvGQUYRJdbiso3UyJcajnDymisfeiK",
  "key2": "jGUjBrmJPz32Hn6FW7PnDhxcA79CS4rEGFTZrzwAmTkCJQ1fhpPJFBVMeiPZ9VaFzNY8D8fA1gGsifVaWiH7zsi",
  "key3": "37zecbDJYp7e33EUtSgxXVchfcHDVYQgGiaYy34gRAi3D55zHhHTybVrhcTGrWAZRpkrybDwfYMZSJPS9AMHNJAR",
  "key4": "5SMBj8sjyrmKPCgyZ82ogJ3WGKrc16wXkfbbQBP6tVxHQNg4oAsBcUDqrfaWeJdymUrKoPcSGysYp9Q6gG1GV7Rk",
  "key5": "5Kss3sTKSNYHunzFAvEHTn225XL4sJNN4LTdQdtAvTT7x8TcfahDZdBMEhqPmDepV5F4yEYMRVDRApdSCagtFsQo",
  "key6": "4esZQsiAkba5x7EGwPpH8UoZr2ENsUPvXLZvGpWmqwnvhmr5QKc8x4sfQLMVe2GACLZ59Uy43p9rXJgJLRZBtV6w",
  "key7": "dJ3iEdozz8Q2Atit7kQW5A7Jwi8yakDkAd8yquEEsLPJF2WAz2J5B2fz5uXALskgb5Y3sHf8er6n5GkicakNPYL",
  "key8": "4u855aoCXWUt2Wu43cgKeb3je4AF14vG8cgJD4hd9pv7CzBWwj9oT6pVskUyh2A2QfHUboP9xijmVnLhXqvMvKVs",
  "key9": "2xFWp17NF9o7QnuoDrZJeEQrpto1mhJFeVXmyMmeJz7iLdv7FYtWf6hv8wv3JXBydctLZFsruNEvCmVzsWqegeHx",
  "key10": "4B2URxpRGA7Ye5AJebFCxxNDkAuj6JVWj135tm96fK9E66GrAMEJP5BNHYcdgF9pzZLCdEJjvLJcs63smxyMJYfD",
  "key11": "48ZXEyK4z2Xn8fh7Sh9vkwXzchNNMfgasyw27UrWr3HQX9A3huadzoNoNgdGQBSH2J7CNpZk7GYweyemTFdHRqtu",
  "key12": "2AG1cNA2H219y2uuybNmaYnhmDkbKMNjngznsrMHnfTKicp9jDzPTA8CRumz5V9whEsQNgrBFD2UgGWkS9pE5Fzg",
  "key13": "5CmNqztsxzmJPHLfvNw9PETdokhbJjfhg667SZ1mV9LRz7cwr4Jmg1yejcvv739KGhGWbwGCSi5jzJFfu2RpK8YC",
  "key14": "3Mfvdbgq1d9TZx1PCChYBJxSHL2TWM3obiuNyNJ7mATNrvopQznGHLA4DaPdh4nCqo293JfmUzc9HxbobagfGdY6",
  "key15": "sRbhiEuZXEdnnH3y9fm4t3u7y7NmtT4nM96qCgE6LWaEvdeQcn4o43v2BxcPHdruWoeDwoAmtRBSxTFVhHk9krV",
  "key16": "3CZ1dGEoYmxi3JNeGPjo3cx1rJ1KQzqYjL9pSTmjYaqb8GWQzGBbkad7B8aNECGoNTPLTrwKfK8bqUb3V8C7YJJ9",
  "key17": "46rFwgobXCfCKu5v7AHCrV2UhWEk37L6fGPgYF7uYCZ6JHz1MgXSUV3W7xrTc28Mk7GS9nu8z8d9vbEL98dVuPZW",
  "key18": "5FW9ojD6zE2mAhN1P74Thdhbsw6tebe46ZbpinAA2WLwuVb1PcVi2Vxd47X28wqYWYyAgvMrSbK6p1sMupjjfAQC",
  "key19": "2RYjSLxH5dHf7K97fZVBpCzgJfh31KfJBvj3yk5fFUcmJpqk3oWzgxabB2vS4QgyjprXXBX75vQTnsDEAJCxPiSw",
  "key20": "2s7bumyRZKYeRDHM7zf4bQJiJXvCTjrkurdBDZ4kCabx6tQMpJZd1UfTXymbhKdFujeubVuPqGhRxCscJauAUCX5",
  "key21": "37AjM6wknakpqQnebG6jvio7ZqVPB5o8mDB9E2JtGNkj32CL2Jh7EhU1peXhJujZ7eBbCQicfrjAbzh3sguupPa8",
  "key22": "127cfmsRdewGckftrPS8KXEaFb7tFRAc7ApGQyEJ1y5L1PXwL7HC9EXyhiDso9bbNBizymywNtbpi3dMu6mmeyxC",
  "key23": "46Nr9tRCTeLKohwLZSdgeoXC4jGgL5qygWESzzGuknDPzNzPiXWinMxRKSoMzeT19YBSrvkYsqQAkDqUSKraLCBt",
  "key24": "2gAxnVNmoCQRC7yKsvMM5XYmMhHySXgKZsec6rCw5Ep5bkvGLKpsSFjHYGtu1pnumEfTPmLqC2ecgThNAtehXtRZ",
  "key25": "5v7K4JN83YwLa5BsKVz2uZX69GJGEhfxeRSobAWm1pTFeAF6ZBrRXcWSXi31PPV8DB2b8t2K1FBX1eJD3GFutpbx",
  "key26": "4jP7RvDobaoZFvFF3mNchMArq1NKinrrEfNGWxqPXy9C7J1mVLy7Rd6HRhu45baxXRhyJxkHQEMQmcaoHzVyHrpH",
  "key27": "4V8HvbfLGoUoBJWe52TuiQ3eeAEXAouigBboe6mc4tAtgZ1hz3xmirtFTapVj32mrpH4LGz1GDNhMdrHx8GuRxsL",
  "key28": "26JqYpoGxBT3xs6qF6n2x1j9v1o1FBKeqoA4gzpw84Q6KLaiJCnUS4FscjrQwfrsh7nuMZ3G4q9cRDBA1ngPjPzJ",
  "key29": "2iDMy7s1hp3EGpmMNdY9ePHSMUTwn8ff9YXgDo9Zo1XshqTA4QYgJ9F6vL3B27K9AdrsafKknPPajFLecFFnE1JC",
  "key30": "5EEcBDRF5EgwBNjf4dwLVXY2mzCE2KaA8At7XkCji6uGSC3wtNye7nG3m8xpTu5teau5wM1F3ergm423c1zrD1r5",
  "key31": "5caSzmxvwsTRVL7aMEH7V1fgfzVNUpptBmHegc8Twzykv7EW9A6StBaGbFysKmYoFcroMMbJqv7EZaWxnBE4UFdE",
  "key32": "3TEptWy4dvB4k3Q7hskNNK8X8U477v2LYmrx6oV8UPEYtKcdFic52FRBwdvCiW6eySUfYqW9G9z9ypxa5yMdfQAZ",
  "key33": "2baR8wrdRhSEfrwq6Z6yeEwfVuyThNe9VanBit5PtdgZdC3jNieB9SEDhej57BcstKH5TYvJgHz1qp6viNHvUesf",
  "key34": "24PVoKvodwJ5DpGK2iJ7gxYZhGomSrB3Qd6ANXPGjUZgMAJExHKHXum1XTHuhB679hvzuj7mnMQ4QikFxBk8hDVY",
  "key35": "YAF9ykqhzBkzxvRAgrntUt9jFExR9fWGmZXKijprRcsXoH6CF6yz9Tq6aF9kGt4NdCqghHGmFAHpne7nVGTBA8u",
  "key36": "5mFXRf4raqenXvhpUnUHM9y2yfz4ukNkHk7RLHQdujVNNd1FT5GeeUBnawFxute84FZ5gt6p6rPHG6xsbJTcCtwt",
  "key37": "y1H2WRu3oarSJ8k9aq7Fd3SYv7Sioy7UUx3iMRd4EtFkeTWQjcbcJhEvW3XCm3m2PhSJcfGoAkXG5PGArCzap7D",
  "key38": "27UuiKpNTk2cJ1SRHebyuQ6ceT4uciXKSt34MM2W14q1VseFaFS8kSvasRgNxr7cSeW8dtGdK48L22vpLP7rL9JN",
  "key39": "4y9CTJhLRiEkyhZ2LnAwZmw8CFaBvz2LZpR7BEdLy31djDPXso3UkiL6nBzFM4yqGPeCHT61wp7BHKFZov3gLbxq",
  "key40": "2Rs1r5p3aVMf9EFB3yPFuF9toC1ViBb4h7nrHaMdw1VDrZjy21fjWe7S9he2P1GQttge6jEjLfxTfRQmgUcZSCyf",
  "key41": "2976oKETNTEUhF8mY2yct7SV2e8UBh2y1uJEwNJubrkN3GKQDRPrE4jnVcN7SGM6HQueyHNUTg6h9rYti5Z6eHqb",
  "key42": "3qBdK2kJxLQJd4nuoaMAkvjPoWZagryKuWTz5mj568gS1KFy1g9rceq13xKzbpBGGeK2sbLPusCV9XQvEMzJj8Sf",
  "key43": "McsZfaSh2B18PLj5KHdcrez2Jtat6LieAt4zqCPoBtyZaduFptaFXQ35DkdJMiroZbzap8RDiCBKWM1FJE4vu59",
  "key44": "gzavDbVDQKG6qDAxabT9Lo9HiWAzSGEZHsafYLJz4mnS5KuAHnhikPcr5mSQmzwTJ1DLbut66j5mvPByX4CsRT5",
  "key45": "63bNXKFuaupjncGjXKsWUsHK68RhTkfh7jYVVZntKC6uYkz8p5v447hkMVCB8QEczgL8ACLPuV5cv3dmKBg9gDpr",
  "key46": "2Q6nKBABRGNWAa5iji2zqtgQh3A27w43gj1nfydnWNkQic2gGsCddpKdLkJ11eJj61NAwzUucwDndywHiGhe8bh",
  "key47": "3YUQrqzD53TThwiYV995hVUv7LcmzeTQrzwmYXUnTtGvL1M9Ua1DxFeB4c3mc9mEUGhx1xzM6rBPicTCc4An9pP9"
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
