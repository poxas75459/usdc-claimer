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
    "2hqTb9MtDsi1V2MEYN4Kq4BxjXJ6iPrDhLjrT3TmaZZNjDf8mZpNndK8XerTV4GRxdVjAHuqm8LtQ61jvnHk1fke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBrfHTiUJtyutb9QGaTHeBymAFWp2oqYjtiYoMBmAQWEnyY3QEQCMoSXuHZWFYpPtSQr6vRmx5GKnvHU6NbwjQq",
  "key1": "2oCSPLo9t7aFv7SysLB81RYc8wu8bVvSiyRjMMKkPR9tV8yALKrh916JoUyHp8tD8GrmoLZK327VBotrw9hTM1Uh",
  "key2": "UbG7AT4VL38NtqmwnfFSLVzJqgrtSYCLjkNn68DoUMFuoaBtjhUgX8xU8EPVSUVdzZkEWURTm2BQKUKjCrbw3UB",
  "key3": "4zdHCbCBxdkC8s6LPgyRBDp1cmRk3RWvUWePP9JkeNRBA3ZNFTh2zKM6Zu46qKdN2q6MjGCBHrcjL66FpGyqGGUB",
  "key4": "4c7B1AbUZGBBy6JYGaXPtUBcUbr2Z2Vi462KKU79qKUYxGqTLkgJ8MxGM5nD4MNKSovBcUYQAeVMw5JqqemHDaMT",
  "key5": "32zX2Zx9yQUaH6JfErwZ9NLYFoZrTV9w2eJtxeo9EPeSZDxmAQEhpAvBvbw8oQ5tjKTTT5Xt67DDDfGm9ncAagkR",
  "key6": "5YmwM1x1sKXhw96RhGiyGooMR46Q5dj4NLsxTKx9tpX29rXHXZcumjU9S9FEs47WtaVUNxSHNGnZgmH7YY4c6mKz",
  "key7": "2yrC2skiepWAsyTb9Dk9yzPXW8FXcBsnU79F86UmgNzsgsAukCm3v8nfoMESA7JksQphXqQMpPa13W2DL1CMfggR",
  "key8": "2DJbBKZkHg7QonWZJN5RGC4xG4WAJDjjLcQv1KvPPttm6PHGpAvtNzk92C5ToZzuVA1PJSfkkgmhJVTdXxNeZdBr",
  "key9": "5qYroTgy89wZbtAg4HqRUo7gTAQZRNwxemQ93YzrdZ7QZmMBRzAcpwzSHTTFNCMk5GUGb9GgjcXy7Atc9sTnWXXp",
  "key10": "5iKvvm1bAGy98YAs8cPpjK2RkwUgssDm1DXWYDuDLSVnXsjGd1eQ7AGALssEmXd1wkmijxP9Ku59mQErJgkSnZcd",
  "key11": "4T1iBHpo2Wg5etcFijgMpcEhbbkuy8S7J3icsrMDnNGBptBNuGRNTDFcuvyQHS3MVNp8FS92XLirnCiBicHHpqfP",
  "key12": "4AwvfNvFhyQJrSipYufMBmzQh7V8w1Phi2Uv3k1yy8NPtQbSgaTWHfhvuxPAJXCi4wKAJGS5ZaD7sXKQh7mTniab",
  "key13": "eYpD64jtzf1HWHUWcu1JrMvL5VVXS9pzoGP49dDjoUqXiJL4bwBpu9VKiRWvmNf2iS2e7MnZKbMbvPuE2zQ419p",
  "key14": "2VCHQsAKgBpu6FeryXVB81MrtaCYiPFTBys6jMkbsqAo4rVVQaSv3DL9vFefseKAfHvCUmWmRcYaPJhv2A9pHYGn",
  "key15": "58RevzwqNtpGH6TMaMF9ysxsKQZ28NyUyhJwzLPA9Da9qG82HXe2tQL7qop63bdncYP5eyRRnfBB1tYWU2BuEdY5",
  "key16": "2f1FVFoaPFNnLCfbwc2bd6JpqLNhgM8gG9NVyTkiVyXTZxHZDnFREYYjKCpy5abJaCGr5iTf9rkgcmFbZkHUr3dp",
  "key17": "5x5NPqc2Qw8s1gGcXxap4Rx9j1onimkCDebFDsb8k2NYJSzRxLnxU43v9BBaKhzj5wiD9iWPEASNXR2o2m8SQ2nx",
  "key18": "AL9qMJwocwpVKYe5gmMFWGVUFb526mPDNBp6ZuKJSvfUPzLUyTQyJk3oPq4tgbzBQ3LuScNwTEMyfhE5KxPQJGS",
  "key19": "4dEwMwBQUMbD2Dh6yuWabjyhAnKKfaKABT2pZ5CLjw5YTGKSKKDwpBDgFHLGXrgN4TYGWF8VAmTygYATziLAt6Hk",
  "key20": "49F9ftuCwLPKh6BXGwuegMjxjSx6NEVPDsZEnxhi7TDofgpBe2Aw63m1UcGUd6uUQ56wVEd4ctZcBBEvtBt5z7cd",
  "key21": "2ghiKryewX3sNtxgNMGBZKktUQbxH2165WK21PcF7NCj6KAABW71tewfFoFTWAcdbkyi78JCQmo7Jv4XwDzUKhwo",
  "key22": "5kDRn4iDs3Qi8Jx9MsBh6uS5vhKhihxM7teraT25AUdhAo7TGxLe4ErqAeXVqVwb9126TiPdiLKtyBeZDvtrNPec",
  "key23": "364u2sd1V3VszH2hCnPvjDA5LBSeuoiCADf9RPAcJiWW3wkMDYRxHWJsiX5qFu9b4Ns6ESjbqXmPyDKfAQQzNpvp",
  "key24": "3nkc7uTijqXFKBjTtAKgjYXs2z4sKPzFQvru3TndbPPiyHBbL8nF3VzrWFdPk2zmu4QMP3tQ1jeo3rQgEsDRnC3F",
  "key25": "4T5NV6RriqWdHVNbJWEbW4jXyGJxw12B5r86LVTKbrVgo7YbFX3Sdd7y3J1DRuSckkTn4oYVqpKYToHQg7Zvn2dw",
  "key26": "4rJf6YGRkquFvHbL89sFd9hUcdMj1caEVWMDiCStbcma31AZncm1xLFX9gT8gcPt2Si7dpU1rHJoBThLj58NgPyZ",
  "key27": "4STDggQ6eAfgaJUTfaYZizKdnJGquJuaNhm3vZonkFvxRwchHZA4w4Q23yEztRV6sEnJUBEihj7Q1sfwXP9f3YBa",
  "key28": "5bHyRn26NtTqzpYbjRfy8ZVnXjZ8cEu68tbHrvVeX4aoYWUrYsjQRdqxoPmr1cDwEHgs33gpodUETXZpp57aekGH",
  "key29": "5Pb574Uixf1CGe3vEhDmygCtwh7fx3NQACWNzsjDmyiJBTzsKb4L6WG3qRYzt2aWhPKcrscYsVpBS7bcDuRXTZn4",
  "key30": "zZeUXhMmMQ7ufnuYtFsZDyFwHJVurpVM92Wq5oEQeq6zPpo54qKWEQG4TdKX2Pph75zykh7oBZJvou9cQBNSYMt",
  "key31": "4wCZx5TAXAjSYs4vcUetmmixWs2C1cP5sHLLgQmRSk4uk2VK46tn8wzoabRRFiv5DYLr5Y7mLHqC7sfq44ePksUB",
  "key32": "2PXHHEBui3HNTEWesjCJnGidsdv94DVa26txjV62CGq4YikSJwF28jBmZcQTWQJZybxHxCw2BcEU8rruNWzC2QKD",
  "key33": "3WaxxUkgnWfxoSi4d7V3zVSEsrH892ofjxKBEM8rWGeBnnYwHJB84Tti7S32JyvqXc1aqcMt6Tc1vGDPsjz8uPYK",
  "key34": "51UgWVwCPytRpqbmYG2SSJiZhTeKxwscpHCBJ3nZfJjYVQbx2cgUGFKqFRRLnqmm92RMjV5Np2VwVGeTxLDHuNGT",
  "key35": "7Hw6Vc7eb7fBevBFr5rStMzEhAXoX1J6pFugzeXrf5TE6f9b6jksxusSh8dPeSikgCHDNYSXbXzTif5vJpnzxyz",
  "key36": "37ShBTRsuWuELySeKfvzqcCs3GfQteVrTehTpyprKnRjjr8X1aZVTdqqxGv6Rcoa2zu2V9SdTMoSMmBCNyZX2UEk",
  "key37": "4sjtB2H8cK1QvePwfoX99DHBVvpnG4oWMLjWbEUcvFhyJq3wibniWvzEDVNoqW35tCfGDiQHf77hoN7FQ6L9HHqa",
  "key38": "58mLJYxp5qEKqh3Mc4fHUnJNB5DXZsHT6jFUtfHAqJ6pgPpP18HDxMxR6SNXXFj7FgTXEqSJkBVwvCLVTgcg3Sv2",
  "key39": "evJgtHyZ17yD2b6xpo2ceq8z3Hs7JjpanfWC47DvjHjoCEhVEWLhicjQKoafGjs8EJzqzMhTRSkqYy7tEXtfBQM",
  "key40": "2b2ERKjSXe62z5dXJUbhmzXugEgBnqUNuiG4GE3DJn1a2zKQT7swwpsAPZmC1AoMFuDD4T2Y7hNJVt71bLdvdpnf"
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
