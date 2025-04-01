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
    "KMn8zQRLRNo6gM8HJEYiQw7T4mZ3SvcXyQTfywVNACYc6KD51jT7BEE4JAweZPpBYqfqJgSXzenuH5VZwwMmZAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipMZ8nPMLSBb8k7E36wncgiLvvK6abzTZRqr5XqRwjFSuD7oaHsRLx2ghWxjz6uH41zHKV2nUFetjKzge9VnWCF",
  "key1": "3pQ575Z45wBqBzDiV3QoDqLXGrow93t3abyGhRAR5KaRxJ2Zsa6NTpZ3fNrYeBEZHFAinxWmCbGKTqZ5MCyZMTWf",
  "key2": "Z7h9WEDL8yB1t9pUsQf5QXvsrozFQEPi2mcmGFGnTN4stBqWSbpZjBrD1VthADWsVBmTGyfNMYuY54CznLeBRXu",
  "key3": "2jtHMcqoqPVxrokSwdQzye3w9wuKh7Pzpkvzu5JX1D1FnQX4xUGQpMyLVFd85L5uGBBPqP6GXLJzYvnEAVripZ9V",
  "key4": "43k1evut44JYr6jNjB7rydGDz7bZAaKCry4tJacpyyRnVg7bKGksogKDMKeo5vq7C6DUFQ5TNZJCSgwYzowNzmrD",
  "key5": "21XRmG7Az7fhJCKSAfDTbHB6oqLAoUEkQrAbTbRdQ6rTtLzZ3QZNxGvDBy7JvDSgDqSRU6X8o25jp3corN3F7qjr",
  "key6": "2yiBp5ovJ4V5hRLPWkW5rJuqnscEyNSJ289rGn7FQpnSQjofs7zPHoudF62vF9Zc4cdaPHNcNmD98NpLSHQrqsjw",
  "key7": "vr4bPfZXxLjof6agDDWEUNmqyXFsUtqgsdsFNTsdWQ7nn21FCcTcsaLqBa8Zts7gZiJ7aJ1DvbB8Xm6NeRPdiuw",
  "key8": "2EDh6nhoERspYc12CFQELzGC6vjyQivBo8xg2NT4g3d1g64akMkrcD1DbVpCcmbDTLDBeMHzJa3oXdknGZHTBp9x",
  "key9": "3YEEPLPJDcCbv9LRYeM2oBJaoSXR8VaqawgynnHbthR6QRgLKehupxebWeFfUB1nHNjWLqWeWzTBbNNn7aAF1oa6",
  "key10": "5FHpAuMcxgNhBCzpincaKUL2NdH8Ng9SAxDYtN42n2pLa7mFNCVM7dSsRAZgEuKFfpgckFbgDNnQH9rdML8gygzR",
  "key11": "56wdHYTZMcL1LRWwrMa1gr7ASBYVxCQ51HyZ7gTeJR2oDoqhffmy6ij2LZZkPf6yvbko1E1YU9t51mXHbfW8VGB5",
  "key12": "4jjYv69t1wHM3DMbbLxPVPpbkH8kBRdED1cbZo9FiyZq9BRNWogG3B36y47zVD9tZyGw7Vu4CdymWHHNg4Z4LiAi",
  "key13": "VhU5MER9C8XH3go7RurjxFSVSrFmbMsmW82U4cr2QNdbhb37iYDGzm5GGGVsVp4GtQfpuUFxKau459sEeLKC1VZ",
  "key14": "AJpyRzSifuoztGpFCKN9afjWmCY5FRtouh4bpRYQ93RcJBsBpaC6cNdjmfi316s6N2iUbLUByYVZw6R9xY4eBy8",
  "key15": "2NiKbx8dfbS2v13kFBoF8jzExm9GMFatxxoCHvd5NjoQzUnecu8jWdEEyu38qaAq9MURg3ktZ3MyDYLDqFoTJTqg",
  "key16": "cGQy3zE1pDLU6NGuYhm2i4Rkf2ZbiV5X9FhpNfvN31gswd5mW7FFibvZD7wLSkkVknHh2PGZymUBFpLALHH16hq",
  "key17": "4vdCo4Ga3eDaLVmKvJx8SzL5nWbn7fhAHZ7GsrdeMB34J7PkmZv9xRprEFGRKN8hchBcToYWnJQLVUZDkWKEvt35",
  "key18": "5DZyakdfeCpMXXeLG7QdKqbMVKQ6qxLEJWaEXafDNgDWsGQ5DuosMvuYP5boAsfmadhQMSP691fhH2bdqhePnBxJ",
  "key19": "2GbkRnyeYsKJgucuj21RxvB4hGQzu5d6ZxidkqVsEuvaBNuZFvCePEF2Chnnzokdd6Vrvfi7ibYZ6xcgNnJFBEtH",
  "key20": "uXYi4Fx4jV54EnsFi15rMHyhPaHF5HaNPdanNiE3rQKZ8TWPjBUX2vEzDzeoP29mgDDGDphxmCfnRv58KDEJzm6",
  "key21": "2QeUKZygsSKwKEEtzFx3MDn9dooTcWWYQZPrJPokZakNk1nFu1gzvA4KZbYUWDviA64xpwDY1ngzoWXAEjBGr3PM",
  "key22": "2BNysQoH9zEYd78dNaytpQRJVZacTy9P8d7digbJbVYnpz2ST11Q3kT6tSysxsREUPy9uzPwPJsxRaww1162Cfez",
  "key23": "szgJu9kR6EjEtKfJ3RdymVsRcGa6sGFd51fvFriuDCHZfykJkPx1oziBZc7tiknjMfBTjhW1zmSL66Xr12L6y9R",
  "key24": "4HvemAWWHpb5Wy8iaRQXgYo3H7cGKDLprVyoxDc6vce4vA9wyMnkDNu2UTYZ1i4f1oNxM9WE8ni2c6Mak87YXECe"
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
