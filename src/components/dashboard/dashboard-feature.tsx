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
    "5tU94JxGUUBgrdKFLgTSSfVuGfDhiuBV1ZcFF9qxSDM4heWRxhdRkuZaWTctnTbepNU7SLVWJNAoo4KVT8KkwmWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTa2ewaRKioU9zRaUuk81q2jcjLF4n3tqkXupZ5rnFT4i4p9DoMEQLxsHBcMGjDUbrRsoRjFRuh8fCjqR1RTSB5",
  "key1": "UWcVj6biePzkagD4eoUk5brrN7P2cKc6nFSd4uKDZNqD6RQ13QxDMM1pcKjaMJ33xDZgxe9zRQtPqHjqdZ15Jc2",
  "key2": "592M7XM4W1FJrjDUL2NoNWQhbqaQQFo6wpWSVCoawMvyhCLZ6LxXaGQk43yuyzzrEkJY5bcKhTAexcN2zGBwmZJ4",
  "key3": "4hhVgEVLPHwPbD6DbiaTAoh3V8sTDGbjq144NWzpok2HYFmMipMBxzd5bUdPCXSDwQXpAeJAcgURVp41kCabNUrT",
  "key4": "2bGVGZv4K6EzHDDkeeo29taJiYt4MD3XJCbrgYZRyJWhGkfKy3wHw1TpEVhyhCtB2cXC7XKKdhe5wVh9SzPx5ssM",
  "key5": "ixVu4QhTwSzQTW7tk67av89oMnSAk7R1uEEWrFkLjXEQEznexSjSnuj9MyP4YvXM9xavWUcyG375V8CNMPCiN5q",
  "key6": "2DpNunTpoyk71YPBfnoMnr9GptRYCjWu7hk32ibprBXVLc8jP5QBU8YTb9m7QF5jFgkwmdTZNVbcCdesLB1uYuhc",
  "key7": "4hZi4wyzZCYHXGKqZUXXSsqF94jv3rU4kGjWkJAdTxtnU9G9NGDD5ugF998UpVx8UeDVRLNYy8rJWuWSQYer1wuR",
  "key8": "qCvLV9BAM3qUnf6ZHP8FFFMAdSR7hfRXcByS4hg5wFjbgY1jRNgXa7iy2WBJNQgUkAEE3TgzUTYeu4pNNdWJhE3",
  "key9": "51Mgz8BvzK9Bkh3UtKX15KN6FTAq1EwMzV3XReoXvUxndq2yLsyum3KLeiwi4KpBw2kVLzaZheFeeehRn5XzJstQ",
  "key10": "5Xb2FmK3bArpZGoAsiopfFfsaESt9DznF86iowcmMWtMRwYEe8PESBB4Y4PeB22cDj952B3shQo2FiGv4NhMEnLB",
  "key11": "zbHyAfry3SJn7h6jcw85HQa1sVYrGmHWELzUyz4qJWaUtSWM5R7EUjtC23a619wrUo8UXu5XnZx9hJnGpciectk",
  "key12": "21Q9U3xUmazooitmG9qi7Q4tAAbUY9LN9VxyhCP4M4CrJQtdYaN4sGBdA8yfp8Q6ZUdd1SKy68Z72ax6GV2MKraT",
  "key13": "36BAc4hRhDwuaYk2vvgnsfoCV3ehjF9csziiXYedCHTU7tttdos3zMuH5BqmWgN2rxXSp4YNRHL9JBR8HHh9io6r",
  "key14": "4K9NHLgXkFLADDCyUU3R8meJ6Ua1gF3jfeFYLTnruxK6KpzsvVTGtk5gCcqSCuehCUyWX3T259kWJ4wxKJ95ivzZ",
  "key15": "5Rrp22kbCRruo92qvP4uFy1vGpm2dKciiGYRoQPfoUP4XoeTMtyLk891qsQBC7aG61sMvnGYxBjEmi2vLJosBnpx",
  "key16": "5io5des435XBqpxnowUHk8WPp7SzGX94xfP2sV2EcZPcod46QKiPkUzyqTHkgg7Bb5enwHykKtVYaXwsRv93AYFJ",
  "key17": "ixPEWsY4aGScDwb7sDtt4r4Qs8UtXk4w2rVwAtQyT6HKKJzRnjWhd5H939vQUPV2fspDKokPxswFmCEUKztPD7C",
  "key18": "SxBLsrLG2SbFV3BdnQiEr34heNqBbFmfnWpkYhfJ6rFrioCcYoWkkfk5kSF6WeTZPAZ4h4XHkACsgdQ4hHTodr2",
  "key19": "4oQM4pSep6M9SPFh9evwrJ3ruSfaqUjN7ForKbbhqouCHtcDyAsK56ynPUdwYmU5UeoHHeqRLNZ7RGNDkfJqVWzz",
  "key20": "4tgv5VWxH9WRDdBGT8XfPT38NdZC9KJL7Vj5ReMehr6xaUUtxEBtS5xmH8psB2vME85PqqrpZDLPUae8YTZEEcAf",
  "key21": "5kyM96Cu5bZrteJygVPAAMZuTt8Y2R7BLCupRfCaB8HxEFz6xujQgFy4DePBg8KF5G4RPb5Mmh6FMP27ZeZRtX2z",
  "key22": "3sqw4M5f2yi34WcX3V1MRHmDzAeKzySsH64Gacz2Mzyx4YKwPHZQcmfwNu2DtofZ1PkwFTnYEo5rQRGDGdmKRB5U",
  "key23": "yB6ztSQYTtR3a98XwSamQkXghB7AN6n6umiZyZoY7eM3THmkq1zjNXuroHAFsTKsAywnqXPPMw12eDT9HRY1HZY",
  "key24": "67misxtZqh6zcieLbT8gdGKhFbTi8BiUf5x7KYMbAtNJpFSZRbKu2uzRy2c8CtKY6dJwFqWRVSEAbNdiyPanKzqn",
  "key25": "3sppdTXsvyA72VER9n1jzGU55qLeBkWtfCrnd5g9XN3LVTY9eGy9b3ywbt7thNh3q2x8rqsfaUsGhtCADxZPuUUt",
  "key26": "4fKSBdy1MorPySudnH3eCGxtkpp5UaUP1Um5mCNeprqZPqC3F9HpAtMzprnDCVa7qSdqPc2oqXQkC1upJEdWjXiv",
  "key27": "348EWTiA7zdc6ctkZsPavFecvdLTg6851u76PAmS8SYJHS7kG7rimvuGsZjVp36NUYn41jyEC66MHkPvWYnYA742",
  "key28": "2ktnEKov8JQ5VFNbdNzaS2snJUw6XG5sTTRsKkiyzR2etyARLwpkJuWJuVit9mrFJhCnyP6GynBwwAPYuGWWErYF",
  "key29": "5KmJFNSYqTAdDbvUjEQXiVa4ieLRvqKxPBD6T9ZUCGmZa7Gkn3tqnap51h4MKctL9oRsSjy6rE424gRhVcULvKeZ",
  "key30": "35tQBhyBwQeWrMBP8csdfbf4FmVNbL7EKYFLe2kRHLjcfWpp8JVNq98sPE4p7pYd9rkV7TdXkTqccx8r3ty2qrEx",
  "key31": "5KzzTGX3hhn6XzJXzSu6EsN9WFewmsZxT2KNcFBphpu4pjwTdpSYFfU4K6FrSNn8QCyxYLAigJ32WZYcvvLUS2Qc",
  "key32": "39Fr6XweVAYSiM1g9XKjNHqo8BLs5tJdcAr7YofLBtLiZXuUw5eyc9SA17RPmYMdKnwfoioZABV4UTZAnYSRm9UG",
  "key33": "27Ycoc3MPg6yNUuiYB4A62McEWwATWssCeTf4XBxsRy2Ds8vfBnWbUwwq5Edy6peqLRWr1TiKqpgu3rFTS14TZLf",
  "key34": "47WCMvPBTXSNKH3ujEjB88KVvnJBxJ4cXZn8b2u2oXtxoV9b1ND7nQ12B5DfwW4BhicrvXndmugb5kMtjzB63psb",
  "key35": "2xzuHHMSySEthh2xjzrfw8ta1vBojfE6GhAtnBFF6jKGNzSSSgLNxyZbFQeBZ8PmTKpVq6D9p9jZNp93csc9WygJ",
  "key36": "3PEx4R3UDtMgfLAvKwmmcJZzwirgbgwoT6Xt4mBxhrEHYDZCP7VpGssdBkUZPbFFqMySQB24YKYqinUtjPtBMTxz",
  "key37": "3t4xwqP2xXrrRUsZnc8LvrddLGU5x9vC34mdCqAf9gkxtjUNPo2DaMkGrLHU5JzD21LgegrBExNVaCbBn3LBjbLb",
  "key38": "5zU8h8xx1gQDXVtLQDTHx2jehwbNSiKX5br4jeXVw1pq8iZYZjzSaujeW9NsAigyhyxRvFtxS9yiiERcnrpmTKui",
  "key39": "4msNPbEz66qRGwenjiRPstJJ8UjYZFkSPPR9GbFErhx4szrhvP65zwqk8DedGj4LAExVpgy9N3Cy4iwjRQsjPX8q",
  "key40": "e6RbWPUzjwhTMmLV4qRLh8NQswNCEv7MqmpkSryDxBRmTMz9Rh8GnzN4wdVzDdD9iWJgoatVeJqEkTEhBw54f8r",
  "key41": "Pohbf3xFmWYg3NVA2Bd2EuWgxZQEGqLRcFFYZa7E9eHDbFVybqqChMZkttqs4vRKfKnDBwWpka8RW8KGFg4U4xt",
  "key42": "4TVvuUFttrUPqMDwoUpQX6Ddgdc3qvyoVDC5ubhAXBNDfszMUHXTuCLGfaev3y75YgV948S84XGsLYE15gaFPy6A",
  "key43": "4xdTvvcxx6jS8xLqWztMDBjiRWN2PbcTjNqqYqjuhQPSXdAJXwWG8LJwALTrXqQMWWfZybBn5B3okN6iKCfKwYfD",
  "key44": "4CLFnFgLfnW3CYH8YPyfRf9a7X2xAfSScDcePCMKdcAtvNLauJaRHNiWtrzfZPyfvjaYGnwCFNyEEfchrTyZxEhn",
  "key45": "SPf6AyJa6zwXcmAtcUkuitJwXi2yXgYvotQZMiLQpUALTpSHyWYVRC1WdtVa5L25AJGNNz3XRiP5gyXEqMcLP2x"
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
