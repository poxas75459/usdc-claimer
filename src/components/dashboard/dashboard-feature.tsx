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
    "3KEt4n9t5JV1GPV1giyDrLuWgaAKUx53JmAFYC2SWoTtq7QddXLfUYqkXsNWh1HwBak6NwLneQ9vg5Cg2DTVbGCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxeUZYag2w6DhxNVhzpDrpXANTH9PVGri6EidzjjDbpH7xcQ3nktVB3wo8CUPp5BDVmUt5Ji7utDTGjf1tLzYMd",
  "key1": "3EhdQgs3MdaSHyekgYt768mSJLKAT7QmxL3mVwyuahSCGNPBFNsGmrtTHN9TdC9PzBxnts3ApWaszNpGiGwLsmaf",
  "key2": "2VE1sg4HPUXv4fSjf9qa1gRsXHJRquijwAUhTQ1tex8pAAyWe7iA3u6yhzNkJxyfE7ixgdqaDTLFTh8NxA7vpesh",
  "key3": "55LVrbwk7Y85iKvbj9uLBqfqbrur8KFJve9oHKTLH75t1LcFPuiKj7WYzpT5JQ3P6ioe39AsdG7oG6VUMYZqYstA",
  "key4": "4RQjc3MYcSAR3kQRwwYcQHsoPxJnXQq8tQvcy35FPQNfZxGeexHGi2uJzd976Gy3uU8rehYvQtsP8JANs43niEYr",
  "key5": "5Kn4o525uGSeH2J91jXTrWe45gLuiyUPg6WnyzbLgxw6MokuSkYhsgP9qupupow2fmffq67DcPw38FMcTtPwaD9t",
  "key6": "54BTgUi7gQhogZBuGvPPiTcV5DYek3SvH7Ucamvkct3i8Pmdt5LhDkTDo4PkDCViJFgyss8QQ1ad3vZ5BEGB16Ap",
  "key7": "xjzKEP9QqRzmnRSkyZQHhQhx7rdh2T3UySeLXWL7oCBtm5KeM3QNC23nSVq9v3ERk6ikq9Q1qLg5JGFwdErwhXt",
  "key8": "qvfGrB64XbubBW8V7TLPShTu5H7DKXqPkawPB3pG1c2zLK3nfu3rY45sQAZ6p5FjwzEBjodgVFkudZxduWFtTCd",
  "key9": "4J3vzA26tqw44ga34kEZQ3FodE1zRhqSRApBsTY4poCLvNbxhY3asYfD6xDw17RCSJWrRmQDobrsnvjU6DK5ZGjw",
  "key10": "4UX8KeqXXXzC3FwWqK3gGBqNK92AHY7a53RzREwTJBZphyc5pzfexfctr1xC2u5gxqjfA5qWXbxmRXTgDELH13Y2",
  "key11": "4jBHeHydPuQY7vpFgmeSZZaUPuj2NGEM7nnsEaLE4S3szCFeSm9CEQHGSvtCa9tWph9hNJuYzqdH68xWcGkgFV55",
  "key12": "2Lm5S7N1WPfnZPAEVunwB7Q7f29XfbTkhyAVjte5gBZys6zs9VG5V2LyBHcY4LAwS7aFiHfcT9BAwkU1ENPJGXJt",
  "key13": "5r3JTq4LpZRsWHmeb4TSgPuvjqLRjuYTpXJy9cDadbHeSxjffkLQSLQqPBLZpMPw3Ed9fjki4C9PLUoYcuYMZTmd",
  "key14": "4DNewLKp8SFcvsQJFDxxECkRzwrBhTpPPuk41XdjFbKEzrr5w49yVT9jdvfGsoFS9StbmHxYjRtBQvaiUsCLCqia",
  "key15": "2sS6Zrk4zLwK1Y9CLaYRuYSm26dvJTaRs6PxNDny3vzhxKnHzHQUDqpeLaGkRZ37A4Kc6SyUJeWekWyCDkLDbXnA",
  "key16": "BSRXgAmHevRRZPNLC9NZ7so7JKPWYfeYGSqbUzTgzp5pGXX6ZdxhxKoa5DuTFoM4JdsDgDzrL4smzhRwn47ogDC",
  "key17": "CPQBeG6vMp9UHfak55cyuWTDmJn9Y8kHuKQH5K8vKhjnvoeSGcoy1DgVGrDkZgfY2SmBrhmFSRgtzws4GZGcH7P",
  "key18": "26Sfeeca8AvXvDmNah5ceyPjFBEZQTisv1TJ1JHLyuAVZZ2hkhNrYahiRfC1zqqDhazjnzP3E7YCNHF2U6cRHzCT",
  "key19": "XYtsEXrhVpjSsCnWLRqwng7HrmrfePv7VeaCg5LD8C65u4NkVMV44q6LspjixboFNyojctL2Aaepn6ED79R5eN1",
  "key20": "5keWc6XKdNjRAzZLYs6tskrbmBD6Kgy461dap1x9UaufqWGjku1hXNzhoqPSuzhchC6z9YxPEmND4GQuKyskUdPa",
  "key21": "2s6gfD57doSpW1BxUQ4rLti3K6k4FnhBF2MUQGydS8w6YBfz5PLfmR6cpwenrjbwbrp4TiUfsfkYNHzVvpcDEfWR",
  "key22": "5dfpDnpfNbiHoyzLsjAT939gD7uP6uN46thm9iHByZnvbyiv4A6Xba6rhaFQJ3QrrKYdpAUq1ymrTkC5cgNfEzZr",
  "key23": "vAFQAAFPgcZUAqt1c7jtjtnhdwr3rYrDi3ZWKTsGAcwiZycYtHRHKuRoiNaJaNXNBj8R7jQ7nFE2DrF4uPNy3Y8",
  "key24": "4qeefUL2p3EotwwqxYgFkdhDGy3FXCaroKuPVL8D2bsidG6gi7Qj2uQzZDg2wQW3NBnvytsJr6AndQqjRkrkaLQg",
  "key25": "2K55XtrpTr43mN7QgyvPSLqX3TnWjRLkuKFHtTgcZvRbw6R36neq1vTNPm29WArrfwQTmafLp92cc9csoq8Tezpw",
  "key26": "63f7sfi7SPzvw1gVB7rfHXF2oq9tBCLNLjJrF2rdfa6Lm1JyYkM4zmpFiYZYpzVXULCUFGsRohZk4dwNnZ3Hzsbx",
  "key27": "5CFK96vVBF8JfCJzjXMhxzWE174JNNPdYNvTP9eBc1gc5tSWdrgasYA77hwmKUdZKV4bm8H3DTAc2xCUzTXeuHLd",
  "key28": "qPk869NMpWFcF9VoSfKqD4UpxwmDw1vFZKCWx3ZTRaJrRuKkLFQ6VjU9LDZJA4o2msGZA4TQymBh5kYJT6oiDVC"
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
