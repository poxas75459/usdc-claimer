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
    "625ZdYxzUHPHKsNvueQmy2ek2RGS9NXMCLmtvhuSKWUEMBdMkJ3Cnd5mwEFAuREA5wVHFmaGU5aWeSubY8Sh2ken"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJzEH8Av4uqZhWsVrzz75FAmWT3HxhbWVaJn2KdUYiy5QebqQqBJ37hAWfiCK5Aa8yjDFA2aRocxvEpsULjN4HN",
  "key1": "4RzNpgnFnaBUVr9CaRDKxrVJpRZSqZ2a6uc2VW92xU6mVjEzwNE5dG6YxEm1DcVDfwF682YPaoQrnmAQE3PA3q1U",
  "key2": "4usH658Zhbt3N8HcafMCrhM4CXvZXWUDSPCYjW7GELv2MSuSeRXZ89XKES4ZLdfyDP7M7jkTgRn7yTyFqATDtUn4",
  "key3": "3GFvxo6M1nFva3WakzdUn84eKDNCqMnc6cievcNESPdkiVXtve9oxZU8i1dr9Udqz6yKGZQfJXUQLLp1YUJHsSxg",
  "key4": "4VFmD1z8nRqQwJdMzLdoTF8Y47F62ZoPXqrQerwczaDdZoLqjSwqXJeMGsiWFnbYnXQgyHGUeDwCX2tuMe6Hk5uW",
  "key5": "3ynbG5PdCjcnB6vn2JAoNaCMWehU4KmEQFcyc8bTwwUiedB3ZscJbp846uq9AXEjuxgzZ8oV7hwnvxmsvEWPvMjn",
  "key6": "3NdBm6EbN9HNugg736cisDE8B4byL3NjJAvASZZgFcFa1faQRRijVy7Z9T6ybD9GpeeYDCZ71sEiiXLse42E48ae",
  "key7": "9U2ohoJYHiEAFGdbq6Gss7C1LbsUjbZHurwUAi5oDQ1yMTW1TZsKT9JAGMDnDn2mRJpJyaqU451KJu6tTgd7dUo",
  "key8": "4yn6zkh4Hskvm3DF1fv4T4gNWoXgaFt7Jv1UyhaestMd316UwHbQdGjFUrhJU5n7KSQFPzCwTqPEAwKtWwFT8rAz",
  "key9": "3MU8fheFnqDk9zGHxqLCmkHVBdsDxKTQXFCbzkZGDaqaSkKi243u86EG1pZ8tdMkiDSnUKaL4kaB8Y6XTxNdhDh1",
  "key10": "2iByc1YsL78jAm69ThT67DErpBYXLSbdPVWJjMktrYEE9L5QgCFEwiCVsyyXcu2uxxMHhRZbaKhTamSkyUM1QPsK",
  "key11": "4cNy7uu62QGzP7jvLwicbFTXMCT27JNDmTYgPkPDZc2GHiXUmNGPeYE3VZnRUkidJmwxCyh5t41M7kKGL9jB4zJk",
  "key12": "3gd4qB5xW7CNjfSAJY7KBiJzEEoW7hjPGCtczFHCb6N9AuhzP8YyJoozemLSAPRRHXcCa7RzfsH86uKBqCLCMHYn",
  "key13": "22JJk4VdhTh9y7AZZEe73UuaZSBJBEmKDr9mnqqjGN6G8RDdyKgKNoHbkZX2dDkgZV49adXyNuPBaFzHBug3tX56",
  "key14": "3jdQxMukaASFkeFuwodKnaS8EoSs4HwcwS94JeFdRcKRWQhXUmXD7oKA88FB7wKWz7RoiHKJCGKoCsrzJBzrF3zu",
  "key15": "33P3XpVbgryvKtR8otbcDsKVj1eeX8BFCbHPhXk3tVjXaiuu3uaiFeBDR7B9tsro6U84qWWCMpgiJ3VAmuFGYbNZ",
  "key16": "3QNfMqvyjoJgpKZwNLeYoAxKFfKkyqdxwimMbjMmM1otnysvbVbKrpgvjdrTEgkqvaV6gYNY7TkJ6qMHVutAnnKz",
  "key17": "2SK2H2tFT9xcAHQmZSBmdfDovmQqzpoFFkTx7B8YxNTu7MmnxWZWwUVVxKyvaYxznHuRAshwcEYpjKupav3BMSa",
  "key18": "5aLYwPLbQJs2Sdhamac7t89LWB5kHLs7GRGRwXzBBKVU8mJzMk9EAncYkQt1aDrAQ1tTwoWcjGZsaXQV2i7TEgJb",
  "key19": "4AXxk8197tC4zo7GJvGpieunsqVrcigSDZr3uRhZk8ZFYozxhTRub9Frrn2u1rvCSgJN9LQknR5yHrgrmo7ppuWh",
  "key20": "3pBQwG8feMsX9TCUWKZ3RMJvpvDwMytDfsqoQ4R7n7EAFqcm6umW1venQnz1vKBi82WkBWnTvnCe7Q9jGvzaKSbo",
  "key21": "2HztibyF57g6NEHpyUeHzsme11bAWbQmKkpM2BdA6tWvEoJ2qqgGD8MRPmZBFcGLaA8xWiUF6rWwWWpWboUcttj7",
  "key22": "5hTCvbHh72qTw3RAUALta6mEeEWYUB1h2BeF3m52ASCQ9F3YLXogZeR97pLmUkk2LxMMBdGy8XLGxHxCgeqwSVp8",
  "key23": "4MMBvLh2ZMfrVpmbnvy7JxGBst5fBZuYZbz6b33yByKRVbHW2i1sdVfRkBZzc3u32iVnZsQakfsHojrWEHyxqis8",
  "key24": "2L3Hir6a7G7oQcXC59wD5TEq9ZzGUdLX7vpGWccWaTqofFFpSDtLa7BDdpuu1g4LFrWjoXMXjq3rk2DvuX5HKYED",
  "key25": "WBCsuYHkrowzpEZbqSLnA8RGB64yMikiYPUe1wQ1EXe6v3wwRTNkmicqiGS3gKeboKBneHfTfav3VZeHCvdDDmN",
  "key26": "3YrtCWrdAarnwXYH8ezdM5BnYeDoyEdYoo3PgVd9vTSWt6cD8YgunqvL9Ks98FtTa2fhESSCu7hVQbNUUpjvL68P",
  "key27": "5rxxqoqpLWJjKNZu7AVLMgoq2qtV5yXLaipMNmGCzFByPuCGMKym1NX3z17Q9jrFfk1CHUMnbqzSaJsWpXLvFecf",
  "key28": "5QCtXTZ7BSSCwsTTMyMCZHEKnvNWqjNj3uQCF3qEvZbkQkheTdxM9EYMna82FEcUDiqvbrDt5cNjnn1bmSx4r3b2",
  "key29": "2UBoS9xHcpWhkQFB5VSxhtMkEhsr2Qnd6NNLbRsQoZVhSP7J1yFvpHefAU9x6g9B7evUmUKnhDYZ8yfbPETvdWPj",
  "key30": "5QKeuNB6bc2HFoQgmdHyG4BvB71n5ApVTNTGfqQbpi9BTtJhKJLcFx2nsEg6sdBL4gCB7c4LAG4kDXLwLxGSR1YV",
  "key31": "3fh3KfjWcaX11Rr3y8PqirpnCof7by98nLEj161KeRajbXXNRUFAMMYf6kgsxvzHJHDCb9SbgjL81TAiiusFx8xv"
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
