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
    "29gMzZHEhMDTsgfh8Z79jCbpjBR8sD1uid1ciBhQmu7xZUPs5uXdamEs2iGvcPeCv9zguKxdHC2H3cSTZohk9rS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mz3rpAx6KKigDuXbnAWMVnWGMqU3Ya3Yj4qv9U6kkjcdp5k3aVqmhFecNgxx3VnGL63yFxKhgUh2PDD33AhJZZq",
  "key1": "3VF8w261oaxX9mwsa81bKkAJSK348GEXerbLZZCvscQ8J7hvsuyiBjFhGQ6d5c9pyurgCEk7hA6dydmPosy1ATNE",
  "key2": "2kvhCiigwWNRbGQnc8KMNt6mRM7mDXLZi9XhbfMnwLWcV1gNQUGqu76QdehFoFaedwcUjqnNNTNdEFsxdxA5aZXx",
  "key3": "aeiQqkU3v36fRPMvW7ErjCyWaaRWchXDTrDfNoBriJqQZpu2TqSgq2Zn52eKPhegL5U94GHHS6fskk4GjeXWA91",
  "key4": "3mZXd74XvSsTaVAg1Yw7hZzQwm3kfB74TfMdRLy8sEB611VSgu4YU1qChaxL3euVJYyNkE8HXP4ZcVWYrJzjyYFC",
  "key5": "ZSAjyVHZJvDcgaoMnjNExf7ea1V7ocgrvJmycRPpkvi7sJK8bAmy86rP7mE93XM3LZTfd1FYnstGn2pqfLYU6cF",
  "key6": "3hTjfZQKEqGEdvWcHry2hwZ54zzVDqFDqCn9pZ9bW76frWa13xVor1NrxxSdS8gpSAHYeYCfsPntgRrzd2sn2hMC",
  "key7": "2DQVceUQERc77qR1CU8WWrRqXUphMgjBHvdqAJEP7nY281oTf5rKRNgM6t2BF5m68zuQA3cJWCSGgGGb72prs1rd",
  "key8": "3CS7YkQxewTVX7LZCYj9y1wZt9t6bFoWUVy8YHGHmiWzszPHjpKAHNkEq8m6uBzeoFYEsw57uakpAmeUCfvvSCTV",
  "key9": "4BmfTBSMAaf9Y9JzCtvMtLx1JaoHFqiJ8qWu1bX2jboo3G5d3UZzZvfBhNCVEWM7TPt5ngsvwGjQcntsM1Eg2k53",
  "key10": "34AphmewRc15WiMXA756EPCGAfd69Rd41EBCcHcBpbznrBEwtPatRFXHKTsScaAnniELSTbNhpp5Mj6Ef3hBeN8m",
  "key11": "4ZzAz68giHdXtiETgi16ji8BdBeXCkWBLiSB2sSqdTcE4hU2gUS8EdCk6bnwnN8vLajWK3GQCy1t57Jf4nyLFQ7z",
  "key12": "5EGb4C9nEBoY3H2aeDH5QXsYJqYir3wzPhD8QVryU93PwCHezACwCFRZHNuF6YZHkxmxqv3dtT2mD1b79aqmbD8U",
  "key13": "5eZ7w5RGRoGk1Ebupf4GvxfULQRBe6VxCpWPnrq4cdJL7wMR3dWvwMq2ZFjfEnDC6ZBeERUjGmFKPWYvkDzBqgay",
  "key14": "2PeN3VbLHvBjk6D6iRw4wepQM85WHQymRwzedCoCQY2WkcH3xRRZgnKseJz7LoaL6EgMP1c1zbTi7h9Uw47nARu9",
  "key15": "59xj854BKj5i6373mr4QHwoL3jpFMeyDJViHPDSg7GdYw4s68LhELRjzJLRFKfPns6Fvg2DRG2JWbFUBmLfysRt4",
  "key16": "cGyGmPT3oNBjuHz6r8ZeZCmLXdkkVedT1zigJJgHDpfCeKpHaThCr3j5Y3F1bJkS4jmuVCeHEnC5wiwWaQVwBhp",
  "key17": "3FUYneCKMuUvD3oX8V6ASs1xUszxPh54wfHDkfRPUWNAtZG6K253fgKEHZm9BLoCof1cB8cvebnaN2C9Bho1cqDn",
  "key18": "4FGTZcK7AvzcqMGhXN5a4HzSZSDwWAyHkdxwirRBpxnNYWAwUBiZYfUj5WQAqzsmPHmRWJqRd2Tf5vVdmP4wY7VR",
  "key19": "37Xy7Z88Nmnu4tHeMbN2oUZ3J4nnhTFKAGcWo6nMFVjz3xK7QGU8wRY9yokB3j6XQiNja1k6VNZT3oqYK6UzUah1",
  "key20": "5gqzjqQ9urqt1ySrNsusToDn3DZuwqVGWVdwishPJgqk6VFNPTV3UFQRHitX7qFLwhDRaxvSqmbSe43gp7PGAKxX",
  "key21": "5Yoo7yqxnnTL5sgNwRm5cab4FZtB2tD6VzKrjJoVRcbUNYCV2NVxUP31Jbqs8sQDEAuaU2CPGBucju3ZeUJzfren",
  "key22": "5GrcnMhgU7xctheXnm4GtUtGWCYEDQuBmG4eZM7yc2KLWxbbxfQbkRPzNqxNv3Kh7Tm3aMM6ACoqbMgCFJooK7ZF",
  "key23": "3ZbR2CvXuu3Bbwwrra4RWfU1YaNanEGUYifC6C1px34asP8Zpb7XBV5SU7tiYf2815uSDeV8oKZx9wKK2bLrnPxd",
  "key24": "2Ntcvr4MfH4L4gfW23wjkpGz2Xu3k71oe7re6s7nTN8dTRqQwjch9fCfhVZWWhPHRa3dSNfxKudMAi7Ati8Y6Wan",
  "key25": "3ffizix3rqTFKgHsqSPsyDWawEvLekznhfP4rx1hwXUakLLo3uy2C1yPwWeFasqe1J8hFso4gtXg8FLcjj4Vevvj",
  "key26": "27PbxQFjdMhpeYqe5KeEqJGfQn8K2iVzKsdbpovEHp6t6UfQHaLE9X95iKNt8fgauTWky9z2oBEd5s4B4Dc9QEqM",
  "key27": "2i12dWTHtaVPpc9uCfbg7NLNCNUH5zjG7U5VS2LKHWf64UzRdqz3YV1tX5SxZSDBVsSTTCXjyHKPU9WogWSse3yv",
  "key28": "4sGZhc7s9n5VEaeYaAVerk8BunCGzk15ZG4AX6XPu4MYnh4gGcP8doke4nqVbyTsRwRYzcWoS5q2e2LJf5Rwj7Ho",
  "key29": "Zx5Yc52i6L6eJVN1nivrkyXuhmLWHrudfnNCndeet37hY6BaLfy4wdPnmgTTkg7WzajQ9D9y1PkuW3Dzw4GNCKr",
  "key30": "2C2KTmn6oo2gwERv8ZBtr7mgmcFkiqVngd79Up8oC59SVuvAsSJ4XfM5axFShNfi54zdMdYpiD58TdqBBZM1m7oW",
  "key31": "2mUB5FNYokkFwWM9LXxGAqKvu32Uv54LduuoSPMt4YeHKFnKiKXwjhGxN2kpy3TAoRFjhiAZqoAndHCYe2g8Qx8r"
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
