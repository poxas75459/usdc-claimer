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
    "5MLSguzNNatP5mJ67nABnvjyroR6gLLALjw7piKk9nxi4yxgXDcVhGQjp7hMZHi2fEbxZke4uXuAr6WMxQo3oDfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLt7D1CUAh4FAsx6ZJ9xy6y7A8qMFWomvH7q3xYBbxhBwZY67R7ektJcQcj6XRZuSfgX3ucvoKWDgyWV3XH63q4",
  "key1": "E2kM6EzPPJ6mZxiz1PNTjVgTRCjc6RSGujNZkemAf6SswMrqEPntnRqAx9C8xoXwFHwDkpUaBcg3tRNKnoBPzBV",
  "key2": "27qr2JkcGsgxpN8gJS4brZUBzCgiWXw57zh1nzXZZ4Enja7xk2rPePvVehSDzCyu3qmrQW6S74vQZ8hCkSQ9dbsM",
  "key3": "4NjkSTjy7kHQv8PTyBdzXoQQ4BCvimgQZE7nkzhnF3FJDVkCkCa8pQVupvVxpdJn77rFvKin3F2a2H7z1JAZDPnM",
  "key4": "rVoNtKFDkvRMArqENuk91THFje1Ugd4SEW7E5A4dqny4zKBTTDbD7eGZPMhgMM7ksMEyeviDychmdkToNRnCdfb",
  "key5": "TZy8bmnq7qzJwQc6npCcftoh6NKfQ88VUfkb7KL3rSJdhqz9zfNuZSavZqmZUYKK19MizCgw9v57LAe2d9dLrPC",
  "key6": "3Z4xnTW1MXdK6bgMBe3ZcfDx7UjtQJKV58uNL5RNJdHBMve2bxUuBaQ6LCryWedA3mz5bsWPsRCfx2S8nVZxwMcW",
  "key7": "26TBBfQrQ3bKQ8UUsZ8ppTjCYB8cBcP8AFPXnxF3aquUnDVu8RN9kuKJ3BBce8Bus9Dugyi6rZMz2comrBvgfhQf",
  "key8": "4zc8jhNggUQtwpu2YEBrtFH6CABiYNbizWKtJgeevVLwko7zrJwStDkNPLddxcuhVx8YPayTup139ryP4MkXyy4r",
  "key9": "5eLjgY84DCGnyeEkxQVxk6jwGsxnr4zZQPKKShzLJeae72cdA8wS6zTBQyXaTmdQQavWWVgAE2qC1VvfMAGSh5TJ",
  "key10": "4eLTwBZ9T4vvbby96dxRLxUQj8QQ926QAEX5VkrUsLwxhDhPYPCEg9iNwZJcWRicMo5YuzqKrhdxGGS6f4gk4g2a",
  "key11": "2C8hguSDFAM3UWwziDAcH7qAPBa74VWbAV5MrSVELiJJRBCvpCmUpifHx5ULSyBAVTybykiQV92YjNX4KjKqbwAT",
  "key12": "ov8WdKg7J9ctfcWx5s69MuNQDxL2eG3hMSoN6NqJeoU6CvAMYueAdweS16mpA7SbPekVHXH58yS6YyeUmcBNisy",
  "key13": "FoPpzLiHuPn212vJggJZoUpyys2fbDLk43hk4KNgZzuNtN6yNUfeQwLc54gzQyua7sbuN3chEksHGaznoJaBkXH",
  "key14": "6ciHZzWdJXxH7jNpAMvD4NMBrhePzqYa9DgRVjnPkvU5yxzw9HNYQswNFYLLc4oNXztc3RLUKVJZut3yriapmGp",
  "key15": "3SWYtSgBo3yCCQxmLGh34W8NzGxU5Eft1EF889XZgHQ2FBe7LxfYjYDQpjLA2YuEsdsAXEC2qWSrCwGzm2QzWUMm",
  "key16": "4ZLdUGKaxLSHV65XCEkbFoKrfDizFLdQiEY3WrgXNKdwhMNTNFZYWypcvnFvcj8KB2QxehCn91vsegewWg7KjGRk",
  "key17": "qjGj5DUYfRBUeiC9tpHaKAwLVe9UoMTZynUraGUR2V14BMPuNnEBDAF5J2oEpLmZYv6fuuWtHrdZTURxQ4mDRsk",
  "key18": "46JrMRjc3dVywgcQfKF3a4o1nXRBtEWrGc4nFFEaQqypJ912GRS1r3FGmhSUZX2MdWBq5awfz7SVUF9HptDAh5J8",
  "key19": "46sDAeHttGcuaadLEJeGnwPqnQZmX3b9pMAd3QCW3nBjCMcExcDmwM4wa5EMfsP1qP1Di9P4XY3iwvpyUR9mtyA5",
  "key20": "77X5VmAvyxYJbQkFG7EWsmawmrrkgtvmAPeFDFenikxNdw49aq94RUrMRnNwPo35NBHXab3udwEhniEdoMT7iW1",
  "key21": "4cpopr8Hm8ZErv8XxiaddWv4Sdnb6XcSU13ap7ujqLgh4SkyvVDGCp1xB1n3SScYyhcWTMWrESQ2u31Jb3pG29Fh",
  "key22": "3Yh3aZKc4VNMeVv6RN29qV3aNPgcD2J6LXnBx4aq4QuYdLyBrSMvD2KxmaPGzpFPdUDiPXjoFrCJHiH1PwhWyFxr",
  "key23": "cvNSHYvESXx58uhDKMK75QkEVtUqwif8tTwn4suZ5nTbkpn2wCRkjP29izCZ3vfq4dzjF5ciL5hP8ZTt7Qf7KUL",
  "key24": "51bFNwjLsQzs1X5JfdSaXjd5te1DJdqrbuaZBXSKGT2WyfhvxpaLWgt3wHx5XzFjNxQHEECcA9JNBpu1GK2xA1Li",
  "key25": "4JanyjhoUHNRCJ6Ns9zQASFi3riia54iJXQz9xa3oP3Wi4rZaS9LXjMADSfoTGGhV62n46wGRdaKYGRBT6cKUgYE",
  "key26": "5ksSH9br2q85haC3Yh7qsTZcA7YFxjofyDXxdJ7mon8pdd2kGG1ePkuVd5HZL2q7CjT3ApDwWyz22PEkGEDrNDtD",
  "key27": "65K5RonQbLRXzB91FsNrv63d5dnFo5Uw72AYyHPBTbzcvCsAwtAHkD76YGdAufEff4rb9kv7t4MAt9syphFTgcQG",
  "key28": "59eNTwsCYJHADi5LzPkHytVJt87DFbJv9mPsbpYVFYwqqLXPNqY2nGZRTRQZcafTtCu2oNWqZjwVmWVcK7FLM6U5",
  "key29": "4YwZTEeorzP3SaN4i8wvJcH3DYy4ARap2yDbkWJuCVkDNUNxonZK5aqpKvBNAeYzDF56rEP4ZgWNvhzKg8NGMijc",
  "key30": "3mT8zKNSAs4DHvDxuUzP5542ffjo3Xuf7NWtpZwFuhi58AZEKCZYDfSXXC29sY9UrGr89BDFnATDqHpDfBowRJLw",
  "key31": "4X34FfM9PYwmsHDyPkKSgiDpbYCMg9TPw9HqR71Nnq1cyLLjVE6ATfpi9uwpzka4BzgapWowkbxWP9DFvcT18UEE",
  "key32": "pcUgHt8iFdyy1Gf6aaPS4SrPcHYiCyj2VsWJ7gEXdwQg4GoDZ7oGhiuUeD5boXc9HXNwCWrb5Wk9mi12fgdqbSC",
  "key33": "4GFitfqMZr6pM7NVVoMb7KRNtyW3uENCBX7uUXV1ZnwSbWn3eeUCghkRv4hXGdiCEBdtiGf34ncPsGcYETrgkX1R",
  "key34": "5ykVqZxUUW5itP2fv7QvE8Gce2reK9y1odAjW8vfHQL7tX1ebpRCZ4K4VYDJvA58aTiBRfPzs8wx2ggzWU32xShJ",
  "key35": "35NvC6qpM4DQeSiFhhUNJyivPYMBX2YRF5btsLMD2bBapRjGbk6pkH8TzaKp3AeEHKAENQADNoMgBb6669VhkeDJ",
  "key36": "Bt5uNH1W5pTeMJeZpNWaVH1r6729tr6HgexveQYESRBACPiAt1hnrQVuJxkSS3oQQqMaDetfdoMjEfMCG4ri7Qh",
  "key37": "9Wy1PgcwDVkGMxbHhpXsfmDVvhpDE2LTEuN5KYJoQaQo1rn9kzsCfpd9msC9nyBnQDxPbx6Va88n98oew6iRJBB",
  "key38": "5itrfXb321XSKP7kD7FwNP7gqq9cXUdZDsTAaDdEcx1stU2WrZujMZSkM4LDuaMFUUdm48TjrQcjt2f5KdPRmFAQ",
  "key39": "6hcEnHzPYsy7i78uEdwZjFpCWh47XW1TgQ4yxzZaaCt3YLpAiG9wvjfovTEFbLwX4pkiicUmvJ7mo6WDMKDjydj"
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
