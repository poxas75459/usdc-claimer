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
    "127AGHAriSs7fiNy3HQyF3dSKemvTDrZhBd51FVrAoLzzWF94N6g6zSqpM3kVnm6gQrMZ2rbHP6dpVHVQyRAWxM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZ6tHFKTtnZrMqBMvaqxAwgGwBJMu3kKSmLoGcLbNrzD9pBybQZoMtJhzqEufMeGTvT2QJMCu3pWPYjeZrGXS9F",
  "key1": "2WGTJZoW4xWCCuD9EMGbcoqcpqRNVj7ZVS9o9CaJRDSjNHrsYK2QuFH7bcWFEGSdSaXYhkbzS4Lx6EPn9rpCMwym",
  "key2": "3qoZsP3whZmRWFEgPnMeANcRbAuHBYrrSiVL4JJyE77TMT6SA5ZpJ8UDovUTHdfPdXxWGU7AqUh5YaVtfNG37WGu",
  "key3": "4SyfRenYXPV6ys8SQ5QZTVZTS77xiHjF8FB8sAMFb2h7baHWQBNd8SQKeh1nPbKUNjdxtojAGHTfd1ZSPBY4LrH1",
  "key4": "2pDZb7AKSSA4UokEz2en7MfZt2bvwML5UVJ4sqJSc6C6dUT7WHG5prFuogsp8BJKYrdB9ZwW83KCGMt75xVmzPV",
  "key5": "2pUevDgtVM8MAcRxk8GkcAJtQ8yRq2wxWQEMw1fmRAFwNG1wYmmGTJ79kAaxz3kGb1XK7iJCtfj4XpkYAGBKW4PH",
  "key6": "3xZ5cXBKyp6j1RB2FEKqwuZUJkGdMak3fo66izxkTVPyuW9BNsSgJqwngYv5AXp3HZv8WFq7roHi4hRmu1KrzQmu",
  "key7": "66WapAYvEhzKNnrB6xNHWMAj7ecC5gTo5LzKvxpak6ESt1i7P7UYgw5yGTEpYURxfYo9z3h9YQ2vo3izsZy7LV3r",
  "key8": "3CMxfatEj5hf5F2hyPFyfzF2hFLa7vrFXKi8Yr1BpCi5rdru3Lh29e8w7E3UqfUUbusa6trpe158GDtpDoDqoZRa",
  "key9": "4FMfnAcrm2uKX6KX1KfA3tPdtLssuShbrW4yggjMXkK1pPiEKzQgQVZpgUGHoYpFniSzutpshxLiVwptNsZQpttj",
  "key10": "3YJjpdfCNcPh3ABEtzFZX1oGDRf93pAesVVYJjbvzJU4tBoxxbZ8nwSdq1oC4Tz79BPevxsUijaLjvgDtDGTYbtq",
  "key11": "2kMF55P5yJYX3DVX9grrvNYX6hoYzbMDvxxg93DBs4FwrcLzFywZ9RPzK3Mp8ehtJWRx3cMWqGcCcyfUKigQiNB9",
  "key12": "3sAbLPHM2Zkzpfuid2Sx8UkmTQaDF154aF7JRsQBtNDYUtx8LFs6bRAsoxbEx6VWfHJWDMXadg9E5V4xXPRQf6Wq",
  "key13": "2ZBWf3xbTwMj8eiUyrgpJZaWhZKhLVX3mwRAK5ttSJ9UPh7oZa1QbqH48jQd5NVGZFGaaSgHBo6NKkXVPzdQKniV",
  "key14": "pNA2FSV3sz9Ujvewz8DLPDrp62DSEurWDLsQWmADE5rqdLLobAkhLZAKuz2ZYg9EHcZKjVVMDsZwouWgDJwdmKF",
  "key15": "4DhwmGzGoLJXaN2wosgrL29ySb6qG2agSr4VahDqbSo3rCmKncmbmBcXxeiHNNnmwSHqhpo314xPkFY6Ci6QkFdB",
  "key16": "3FNNL59uDjPiEWDUDVr9vzULV7FNuCxhLmc7CpWP7SqJpRJw61ff9ggAjC4KoKwRb57TazdGfprHjFN2PCb4brzA",
  "key17": "2TxuZ54Cqjwt1sVwpXvRfZvtFynVD96Z2Nmm2pDrbt7VxBLezDU49vnNsyaAstrj133ohxAJPd6NZjHrVH1aBf9y",
  "key18": "2tfTXGTa4DzUpaHJre8AevNMhYwovx2xEgEAcaVfsutKLKwdFWAA48ffFzDWV8QgDWktnRPdDdgKnDdRqmJuQKCf",
  "key19": "3r9cmJc31Dq8DGptFC3VeVP2hppGdH2mC1XvYBZdzWz9b867BWnkyCZRrNRJScnt8PMqpD3vgx1ArFpspPMqim4r",
  "key20": "2s3ikXjvFZxtLbK8wGuAGeYhP7xJka2cg7virP7VRZoooe9jLzQWf8uAxaL2Ly4gEMwiAaqnUTrbSEQGQrS4taju",
  "key21": "aPYuZ6gPvrMKdmsijVGTftmG5ri8nwtLvBKhFPtkLNPtevznMJ6RAt5szDdWJGJz8dnV7o8f5ALF5vRXEyHCHjK",
  "key22": "28fZPEMG3Unq52EE89WgqKWMWz5EML2P8eNbcQMJ14pWZfG8LCxQBQet424kSoTeBf6ErRdX7WXUdwysQSjophHk",
  "key23": "Gci61NPaZBkr3KSdCci4X2W8Qsn6Nv9FXepLqWqWCz7ErwsBwMof6CWbpbi3BTRypxSUadR6TvBYAk9aFsQnzv6",
  "key24": "3VpFBnhpUqELaPsazZinsMfJ2vdjs26RyuAJUVv98p7tGHZNiJogmSD3AaZHXyPbM9s6kVUQ2xAct7tRNWypyc4j",
  "key25": "4ZdWYcyPbuvc6qdEF2hvZCaLiCDemrXfFJ7m5d599tJfZ1mKuohCCWZtdREVzv5zUjpzH6HjcDK2xePNnfxcLEe6",
  "key26": "4XZkwDw8HnpygKMmSfiYMtoReS1gYHkt9YRFcRmnxfvReitHaLJ5qMy8pm1nRsZePC6RrczW4vHrUbGXZ6om4c41",
  "key27": "66fyNXPV3HFH8FqBBHNEBouhXoE9t3Q6BH1Q1RkH4vtyXrDGUQ6ESgJJi5yj9mDFnPzosS4uHXPkhoJGJ8hA415e",
  "key28": "4nTfuvU7jW89UmU6B2CPysAA4Wv5NkH9Pc1UjNMhp9bBiaTmAPQjpEzxX3bS28DCTH7D45eE8yN76XKDcCvH1Lq6",
  "key29": "3JSGDXEJxbH4zpfgqnCqX4XMfM9KseZubDKV7PXqi6qmsV7thqN24MzMmPNVrxH17mVcn7BavLDPobPw2hfdAzQe",
  "key30": "3CMyTKJfKuTToF5FjyU54ryHKTR9hVuEBumWZazy4kRbpaJz9s4d3rdrWEMyFSysaza2fdfjTjs9KJhymG9h4yog",
  "key31": "5aLWEw3uB9AFLtE4hsEHkJ2az5mhuKUHndzRUPGMpFW728ahGi1Y8AyWGPVz9AnqZCGr3EssaDkNT2Wz2Jni6h7E",
  "key32": "4wtASutqB96zyw7nMYpwd3Qcbaq1aSHb5Z23ohz412MaZtCPsb86XcfjuYBkztUGexm9uxUL4cRemo3EzJhn2Cdr",
  "key33": "EiatmtCSqecrGM8mU9d1hiPPYtsdkWx3MeJGtErkKQa87nG99aMSNpqDD5fF62Q46wYREmaPRVJ6wj5Y7W3QYj9",
  "key34": "4bZxZ4Foz2wy1ptop8gh6Q8HBFsXJgumciAEN6CUpS8L4BGXxHNNy9qv8vHD2DYLYtzyh3eKkR1MBF8Bhhk9CzKC",
  "key35": "ZwhcLN7N7vjTp9zAAeGTbJ8hNVB7x9M5r6FppKA7U2eL2XsDWg3qPhYt476eHezfztLvvbLrixDjoyT7ao2MneJ",
  "key36": "LjinkYPVFFS38LLnHh7RgEkifiNEu68kZ9nbBjttHPXS5MAuEncat4G6hrEb3FyU45gxudr4AsqzGrtJ94hyJq8",
  "key37": "K9gSHYwzr5EXfKxi91Vr9i7G5UfWKqGZ8iNrJ33BYomRjUbHMaBvffEcCyscyGNrGJn6BVycA3DhmAkKH7To7zA",
  "key38": "511aM8mPyXRL11reQEjof3eT4nAZUKrvTyLxYhHTHQrfgZsy3wKUkhKodVbuEJGbvXPLG1nB22hTrHmpt2gB9ShZ",
  "key39": "4TLvYq2sWhA4C3iyQV8aUiC1f2Gp7QC2LL772MgNjZ4DJ1ZrnEeuqEqStadtMmDFD3mNsuMnYHRs5L7LPUQaoZTj"
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
