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
    "34P7dKXkSyGNNtxHMZMu42GVgM29cGS9TeEe62vc91517xFGJay24nV6QzB5C7sD6h3pmyqbhKSTxHDmDJPKGPpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gPQUKhkMcCFwxGMTbNCFdUEbeitKp3ghivzje9ugMk8qfWJNprUSuwwiymoK5Z8fbd2TNoNfnjDxE9Sj6zp19N",
  "key1": "4cVxmBpZfNiHmPP3NbyMkfEmcuNx9QB3JEX6TH9MBtq5j7wzsuX8ekEbiaiVCTLsW3WJ6onGEFEYt1Xft23nQAHY",
  "key2": "d4o66baFksMM7Vcej9Ep3L5K3uN5YBojSDW14EKiSB2kqp6iAk92cwUK3TmUc4ZthFWA3D485cpuDHpDjLyhzNg",
  "key3": "2CgZJAFejdbFfbXURx98CHkzQkKEbfu8sAPHxhyF3nb1Enp8Kuq2nP6z3VT2kM1F1zZniBY78f2eHhzwu3uddjTX",
  "key4": "57j45wN17Jxudxx3BKSyJZwGdSVU3qKtQcrz3n7cC9ErLee4wkaFnW1JoeSM358n8pHgrTQYZSHSXxfSvLzgfKAP",
  "key5": "4kk7Wf4SnSRr6xXD433Z6eE5C7CjZrMvTMCpxAkLmzTLKAv7hRjwnk5cbhQkBkUtRg5s6ktpY6VZo4H6vdYyuovk",
  "key6": "5q9mBqM9Mgah2nr5sFvdGaz91h1aLcx16Pu5BrWpNwMU8EAq8RfZC5e5AWzg5y6kFoEHbCFY1Eg7cpxskYkkccWS",
  "key7": "4PgCKdhFbuz6p6yWzBR1yUnFVJSMtjDZfRSsJztdwrtrDAZW7HrZPcjduPfUPksDaUS6VwGfBaAC9mYPJFT1Cdub",
  "key8": "66qJNWnFwJCE72QFGssmcZyJreCzF6nujETxsngVVQSHCsHixohMKaPiikXigBAGs1sfRHTbu9cGGoSS5oWXMLxR",
  "key9": "2kejPoF13XNBYzAGt51bMDCG4zsfR5c8GRPKNmiAFwNaWddjDNBwryqxhWt3hUVhWAV61taNSQt5PVRqBR1vTvEe",
  "key10": "4yPCTiNkCd8RMHDchpQZqaodDMJTfohtRUHqMGQ6uSNQpJCbExBdVWr1BAEuNFGcSkuoAz64vfsQy3LNGAm3BtGo",
  "key11": "2Ljh7QTs56cLYGg8L7iqKKqurUkk57bGUXKBmp9P5WnmE2sXGgsMbjoJiij5yLe6y59XB3V3pvzHdG2HZHstd8Dy",
  "key12": "i4aTm9WRmzMwVwqeQ6EKJ34j7xCcpYYh4mJAMuRZ5Gjna5CGnevdwisKKjXuRyKakWwy3JR6MefKFUvbETfNu2Q",
  "key13": "2NtuzH5ZDg83zVr9ayU1U8xRRr1zpN8c43fDjfpaGxcogv69veQuxmTULTjBKx2YLvbknR7EmBwsWxgyU7bZAicf",
  "key14": "4egkL3CXkywaoHxRvQq9SrM1LfqqrideBbL9bbQf5Q91MLvFBvViKg6PUVAGQd8smQFZzbmrqgjJnhbH4pnrMcqV",
  "key15": "61Beb4Mxmu5ZvcQwhqdusw25TRVExiggE1NPwxADAcPGPzTAPpJGvSvu1Fc5aJhKjZgYkLptyf8CeQV2toAZjRFv",
  "key16": "3wx6Bakx34qyGeTdusbuasVGTrubxMaaix9S1vLe6LkW3JA5gy6oXuU9bcb22BM4vBYeUzoYfwapzPPw73CmeYf3",
  "key17": "L28hBKsTFFRtbNCBtiDfBya7ebyU1iauajkxZqbpfDb92F1xobSEZFgEHRPJz3JZ6wq9Ui5o3gAoJ8UCAje6xmb",
  "key18": "4DZtp1FFB93vDfG4rKt8ixQBjpiP9SHcjNic8vkEmJJHvNTTxotmQTs6rkN8C6F2iinqCKmMfbLMEdfvKqtWh9Qp",
  "key19": "52rC1hLch4pn3d4Rg9ETu7SpPK8Ghjf299yMK3bKBKKpNfThxWVLJZrqwuK3BKysHXCWntDQSsX1x8azbBvHnz5X",
  "key20": "2yJhRQRmFjQTEkKYgdHp9wdJuAUXUnDp1Xtq5w4eHuqDeSeoGnAjVrdkwmTFGvSvPJsX8yn3ncbyX3yVU2M2Thne",
  "key21": "5cdHQkXANcub8Sqx3JaWheDedqcbJfkcAfSSFubEjBkkc3BeQimGBxA9bHeiYuFnVn6u6vRFYeuQPT1ieBBehCZA",
  "key22": "2uhLMcY9mkiRpDdVviwGEjZBGeQP9Gsd5PXiYSE91appvnoUzhYddfNfCc1XQBdz5K4PczaYmL5htHMTCMgdeE2e",
  "key23": "wPLSR5uepJGc77gHeEmnuUQtXAKXtJS75t2CamGyypP8gQj8uhRDJZtkj87NFntJ1UL1WT9wwgp2mxccxKcKMRc",
  "key24": "2AdF5HohJMjuj8jfWD5vfck1VG3ea5qHhF8HrRFuEstDpjDPdg4NMjjeRWTLKnpN7gjFQ5pjYaAFPJSe3b54SiDb",
  "key25": "3NpprSn3zvHHg4KZM9rjN16LYxPt55kXgXzRjvE4NT6PbebZqgPjgnX6ka6rG3NQQYMkXqbDfwFrFVEcroUkQKoH",
  "key26": "4SgcDU7W4XJWj4WB5kLUdnnXJCxAgoqE7JigQXdU4WuFMkEXTSvDDp7VtmcCbyvDy4n5MtfJHwHpvhBbP1Ucv3qj",
  "key27": "Vu3atrUcpAQqsJqaEJcbCmJMtpJiN5WzEeKEsNsHt9GX44K2Ppb6ujW2vVg2Aaj2xkAgBJ3Hy6Wcw2SUW5om52p",
  "key28": "5gk8rJkKH2etMMgd6KfqvQxbB45EbUvHHW9yNARG8QSph9pLVBkQJ1Dvw8dS3xXds46HFn496BcqjNXqepXkpKgT",
  "key29": "2AnPy1ESwiqMXp275hn3ERM5dQPGUafVgSiQ8a1exXRjxDZ5F77LDNuEKFSgPLVGF2Rt5BaP2t1sFLL3UyCAtVhH",
  "key30": "2GBiDP27SggtTKa6YsdoNasvP4oT6HKNByCVM7tTeBzP1oeRmwY1JhoxjdacrRAQu4rn29U8FBfBeekL7YzctK9e",
  "key31": "3FjwGGSuZkoig8xq8pWGg6RcqVZ7Stmi4teLbbpiFRg4gWy2j1qwPfzW7zjTeFUjmhT2ZSZotz9Yg2BrY7bQymWY",
  "key32": "54xwbrLP1vhoUBaCXa71Ct2Ed4CdXxvHPQHT1De2pHnPrB6qgMwEgEaa6JoF7auyFNwwmzBTSBBR7WTnDdPnu5M5"
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
