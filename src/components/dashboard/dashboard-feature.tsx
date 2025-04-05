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
    "3BhJkQnTTiE9dhJ1AqGTnqrv6mvjkjqsRXiNfW78QxXpZrs6XWhvA3AB6zytkt5NsSYpMwjpCi5pXsZ5nZgVqg9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ck3Zk1fa38RTyfAit2WurGEc7v1GMiTq1btU4UL6dSYwBNjfmEMaoj1QUthKrDrRyt75wQftKT3ccJvhpr6D5yP",
  "key1": "nmiYfygw5pYPxJjVx1eLizdXPKxEHhZgSQu4kBGAPoAPfzSWtEM3RfDFjRbD5qb1Hc32BaUBx1Wd1UtGuaKvtAu",
  "key2": "3zuBpN7sPdATUoq6gBKW3rCU2o1UPj6imxry3ygrK62iKD8rjnoamt5WqyFAz43TNe5RtkA8EQBspZ29hn194ZFb",
  "key3": "4Xzjw8P8gu1PJynVWK2DMoVBnPcSyFzsCDRvSUtJciVhN3hhdNyZ5YqB79nmeMY3jSMmrvtc1Y8uG2ZVLnWT4qq9",
  "key4": "2kbKPTcyU5DwzYw3JCbLvQBLipdvRArCt5MTrRGjyTx6kLghXK5cyspuYp8nyFcRPok2s6cWeTKAK5dCkXq3Nh7y",
  "key5": "36Y2sSqdFQ1iZZhRb5817XTwvWY3JwBkg8LEgG94bykzQC2weBWpLNi1nk4bRy58KTJ2X9Z5tSR4A6eefQTLfLF9",
  "key6": "4GBGLPi9XiuFDxXHbou7GWS57NDvnK1krCXgzDSsoJR73L6nWHqhXVSowk8wTNRXkEPwSJqrD6C1dr24vXUtZsx6",
  "key7": "281YprYThDv71SQWqrG4FGmhTuK4WrzMCQPBiFwSsukj2VbXKdPiKdHL35jq9XHKv2GDdrRKUyZrn1JJUibV2jnp",
  "key8": "53ipRak9qxGBf73G1hyubprwWTH6R17FRRVdnZTM2KBvjd5Qbvq9hiPkQSC3vH6kvSTnd6Z4bVumJ5PTmkj2bkLv",
  "key9": "2uwjYAwkmiQ2onZMhZ4FitYHdeoSFWRaFPemHaVKA49MXJMuVm82gAAVhBp8Pq9c1hZ1YU7xcuYp3LzNjojKkTUe",
  "key10": "2owQHa5ufnQm1ye7L8hs8S7v367Z1NFdCxjJ4ty6PQsCu12KLxxTXA3of4U4eEkXGq7oStnkVHEg1K1Vnu6ZiiQb",
  "key11": "4HJ61TKikNkx8vgqY86wrXtG51JjFjos7ggeWFopGcpnNGEhC8WLQYBWTvWmw3BDgGqExMsqHbXEwwUkLYSn5fDw",
  "key12": "s4gegpXPS84V9oSVpPBFUF33PJSKw3XpkB5ohzi7sVrxjKRmwMDxEhCSnohsfezxbo9Kkg5uzKA59ZZn6jBK8rG",
  "key13": "3Qnh8RHYV9n7DLxZvuuHqPtJNTTwvYXRVyJtY8YuDuBdP373NQZsxZ6Ar9qfzXaBWiWhbwz1ABQdGwBxVkRAHAq3",
  "key14": "2XArkw3ND1eB17NFdb2BpPJjjAtcvvcaoqqEgo7eKmQo63J6x9f9K2vqvTFHa3dWGu5TEttUpngB5r1xQQ1qfquV",
  "key15": "wi9w5oPGRtgvppm8HLrVoo9xA37SU4qFcTLD1ixEyyWS531z2EXGovsFdWNGkDa8MHYS5hb2XmjaJbgmrRJV5gb",
  "key16": "2WfgmkgFt5YbLWzzQsAGhrUT3BgPqdUSLQbnzf4hjWLH85zEcrNkLYPoyUWAbGW4k1KG3vtxmS3254Kn396WKfdX",
  "key17": "33kURC9BgVdXdHa1mcSfQevikvVW39dovqpEjfAarLnF3VuPSiSMFrRkxC13N1QstDoswQXDn7tMQtut91EzuvHQ",
  "key18": "66QmeDtswxRgX4D3nRY9A4FGodq7bofXZ8nj6ecJ4HKJg8rup6wAQXyjSGrtykEbmHzi4TZKjSmpyyXBgLkHBPZk",
  "key19": "4hCiMU8FurnKMxtJgPs6yjMwWqrQ28NKnDuDrKgVRUa74iyxWdaoEnk71QPVxbCaa35kPmQ2DZVyGT3KPuH4mZ5B",
  "key20": "5rhVg5MfNtYUGT2HWoysLo4vEW6Z3c21E7CZsHcwqEbevCRejZpkfnwkGiFgjXfzmZcbiWgmYBLJKwdahSMDBkmG",
  "key21": "3GQJt7RCuEAYiijiRkiAUbs2NPXDdjfUnrN3DQBDLwVAWUJagJQt7C4kBQUa4wWmvFgyFTRh2t8aC2XrYDAVeKCL",
  "key22": "66b7Dr1LFSVB6cnNgwQtpkScMK644ehr2JCPoaWUbczDRJeEsvBw3xrzWL9EbD1yLDewsLHZrceLmqcpwagJJg1F",
  "key23": "66dT8H25hMpa2f9FVnRj3UDQAvbcwUduUcZVbKyUQFnYeUTGQiMgGXCVBFTezE6z7qFWkJgq53FVwQh4Rx2yX1w6",
  "key24": "2zHCgh2FBoTuSuqda5ckrnTvsuPuDKrw7VdKW9cz1kcnFCe8t9qqDR78bAaxZo3R6XMGhie3pjU5s57xVr2ooBBV",
  "key25": "5qhD45bBfByhFEToSi1B25yjPxU4ji7FDLErYQzv3Y9F8A4VhnCQNQb45rPxt1is7KSDZDrBSsWHw5h5BGetMhMw",
  "key26": "5W1GyzLadL6BQ7w824xHQyvv7ap3pM17Th2cH9NUwR7HHWrkUCN57jJocQyixAQjBqkCH17eT5zRKeqMSghKS2TJ",
  "key27": "3mqm7HqSm7EkW9NaTSoRGAeHEUowLTpJXx186yiyvyXzJgfVVQ3FaN8iL4avAm3tgaZXvhGiahkkanjHHZ6EaJdi",
  "key28": "4et5kKHdhwcWa8GjTmfUBDWWUqcPDcwzrFGzW4k7ZaRf3iD9vmygRVBWQGiwZvqe6aJuz4Cdd5y5PB3MoHEXBQgK",
  "key29": "3tMfzLtABt9kZQVufFoAfjhSYpwwdxJV98ZVKkbxCpvjJYueuKJQm7hni5sTi5bBqUhd1uWXZob8LnmU3uBtbjV3",
  "key30": "2cQqfRNRB5dPdxR5D3NcJqSjaV9WjyYqLTe7iGyPyADoxEXFtLxuKUX4sfS93sHy1CCWpeRKAWS6dThbX6JoqK9t",
  "key31": "5G8hPy2pv7fMnk47YDdCiciNZhN4NDdv4pCMkXJR6Wjj3kWifERZPESgibydhDoLqWwijBAhtY4zWSFP6ZgZHbCq",
  "key32": "4WKb8phgE14vHJ3eFwSFDhopwBFb23za3GNBpdrtg7Uvx29Ujdxw9g792j4GHSzjG3WQtfZnkdfhVK1XcwZuVhWM",
  "key33": "3Hqe7gDMkwh4hmASbtwXWjN9V9Dt177Vn2E6vTcuzuXeERjoJaabdjorTPoZf7W5DugZ9vv3kppiEZiNpZnatxCb",
  "key34": "GQ8dJRcpFCMnd21m8eLwMDz8YhnzCU8kdN1MMM9WBXKymq1guPXZeZ4NQ5Y67gXTpF7HLdN9fATrpAm6ufiqtYb",
  "key35": "4vpQZicofhz2y16YFEiq4bdA2wJVLQFbbYTCaaf4wxgAMGgAHD7X4XEMteveUWeq21V3W4EtbrrdjGsC6cbEifG8",
  "key36": "64venW8dbykXbcgkpBuiRPYGfNfHuv5piJ7NZ9sRtt3PWRe5GC7hXjEBDzsavWQXvJpebWyfYmZg1sm3KFZKtvoF",
  "key37": "4c4Tx56WKMbxPriR6PpJWedbyLQeidmZau2UruWgyCYXokomQjHxfnhB4rGNzqbbtzYRoUVtCAJ9xsJFcqVP6RbN",
  "key38": "21pvKFA9Mh5Cnyt2JEpso6arXYqk4HzstcjszboD16t9pahg22JeqWVhz7DmuwDNiS7g8xdrw31zM3Lkx5TpBqkt",
  "key39": "YVt3b66Ni27vrzM6z99Ccch3FREMxwAJDfiCQiJXgwbUoQY6oYiXGZVULUZyvACWKviY9ugE4kta4n18SMEwYGE",
  "key40": "Xw8tgLv4GH71HC45BMLKWdZGeSYKi4hzbvtxkRTMZvYov1fHQHee2c4RZ1c9JMdiNqCJR4KQb7b7GJUfWeWT5b5",
  "key41": "615Nw5LSTdq5thyy8QnZ3jf2DWcY6Auy4RutsNpkg62vRGnmoPCnU28McPBy4MyNTUHvA1tzvn49mEXJW8A7sYXQ",
  "key42": "BvWxZge4gsupenJqFwAeVz2Wa8Fav8FVyrfuzYs5pB85h4EjY7yzSsS1Z6dfnjMdTrCJxGsVx4AUhUKdQ7gcRRS",
  "key43": "5Qa4sga98KG4PDi89nN1buG2TvgNcSeQZnAhWeK73ZV3ELaUDNkj568y6RdfpZjQAyxc527MuvL6ZXvRuD7Xrvyh"
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
