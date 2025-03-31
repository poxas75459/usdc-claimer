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
    "21S8dnx2RU5gkyhNuB84dRFePAUTW6TF1dxP8BMjdjF1qyau8MSxQiCK7BU89XT9Gve14NFni8ZpggH7cPfYMmUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCkmeW7FJvsKiVghNXZKTG5Ze8QDWkyF5bT5C1ZFZbnRsUZd58QEovfKkUHoUEX7h2mP5cHHbdJTWKNPjgVHros",
  "key1": "5XMWqK5PUTFsMgaxZC2yZhWUHDhxPL5vPkhUadxeWn574bDdMYsa6B4Y1Ttdut3b2bmuZ1EQY6nLsLvBRTY2Tkbb",
  "key2": "7vRiRhDuv9zbP166cQH7jjcmvUnPyHvTpqJ35AnbSxPPjbm4eaqKZneow4G1BQktzxkbHVywJQdF9UNb6kUuc8o",
  "key3": "231eFrfVnmgj3pK9qaVWf7BfjWf9wCrGk4NqGr12KPaLvYSmuuKADuLcQX2Xh1ZfMJ8fGGjtJp7bUi96QGWdHEsy",
  "key4": "2n3VSh1o4tddFZdtQxnmMaTGWih7vEHu6BZoQeB5YSeZWZ5LY43r54dcuqEyG2JdELN3FJkyyv2jj42jiKYxoBbY",
  "key5": "2yvymiu9BysroT8DuNGQoRkXmLsfjq8SHujkH9Vw573waf9nUdycmh2sVcgjTMqDxCCMhe7cpdBxCK9rTNp6pch9",
  "key6": "4U6uDjwDkYBkTrywQPxucpGGCtp318Ui8KNAKdzC7ab6zk1bRW3CfunE6jwj9J6MS97ucZrhNvUerkk9Ci7ecKTE",
  "key7": "4CjJ927Hp4ZDbBFABEjKgD3f5EgzV5dJgcqaEYBx76FVzBSRLPStkRuCx5rUzHJfPJWBcFRtCFwAGQQdNo2L4SnM",
  "key8": "3ecYmFGzp1vi9pDpwLoiXuoF1ozJ82WYHcv2ioUhg4sFnV1bga4vjwUAbaXit9B8Xot1t1zpDa4xsomM9dW9wvgK",
  "key9": "4MjYp5NfnU5Ke7YNX2WF7SEXzPFPvV2Pu52gQw5ejMuhTF2y4zYRbUnoPvhC7dfGF81mFxjcgHJnMPCgbwrgKKzL",
  "key10": "4D8YKpVkjqxb6KF4XLaJx55iWs9rXK5Fu6Kdn6Sq1RBrPG66Q7QEyXQZi22ztYPQVaqL3zyHhDmQXKEcHu4dXP4P",
  "key11": "SAHpGbenFVWzn9YaWNMRp9JjcfhLZpZ6aKgNQowhpcbGTUHBDP2jmG7gkCduRviBejV6H4MfF17Y3os7TAqozSi",
  "key12": "3pctUnZKHRaghDLtYQNFnGYK6Pqh2ht2tCgkKRwY1FtE7MFRx8rejEXsRbzHiXVfaN95xhe7vmc4Xzrt5Ld4rajM",
  "key13": "2Mq4pQv5aUNzZXmkQCHaPfXZ573qv26YHrmyFPfnWH8hV58eSVDp5LVcA1hSLW8qVZcRy8RA8rCNK5PTCyCrQYii",
  "key14": "EW9HJRrubKm2e5dTGZznDag1q78HjB28u7BwW3vM7PFrcWiaT8iUwjmUP8n2QVaeHqmAYJ9rSv6Te9aB6jBDpJ4",
  "key15": "4fByn56K69eNZs89uh3q7Vy35RToog5Egz4kyCuSt1My2GRzusCk8hzPaWXr81F4VRbWPX5ott8Bd5cvxc9CejX7",
  "key16": "ftDGzrETW1iewrQtvQumQum9jB2AQFC5y6wz9Cu1h1Ys7iuneCTaTZresQXdZi4xSHoaWnFQxP7P8BpudeHGmu3",
  "key17": "66151QnjptNfZXk4W22xbjxKhkxtVfd4yEDmZWr8md1sVEr5hPbdJT6jRizhsHmQnnBG6qLPTPqudyxaGdukJqLn",
  "key18": "FA9dM4czPWygXkuNuNahF2N3KJJNtoUkFmqd4HFZR2nYU2E8gwjG6naKyVrrKR7HpiXvGHCiDLxFhQKkgC3qVoF",
  "key19": "38fqnv3pYQjVCcZo9zBsnDWcgBxFMHLidfgSeBHxh463Z8TzHgZ34h8UDn3uRNg8rYox1Hr34B1wD6keuwXbcwfp",
  "key20": "qoW26MMXMEYvTGyWP38uTrsbXGfxHEC1NPAHWtPCcG6Et7hBBjfZ6gKHerYHw83jrkMmxbj5NQMdm2CPATU2Gpg",
  "key21": "67ZvLiSrg8RrW8Y7podP1ttDVSmyJMrBJXAZTx1GDMVNjTkSdTUKLGHMCUnqQmEJJbrRzFm5z6QZf1UkdQiEXJjh",
  "key22": "44k39GHtgwaKkByPJ2mTC6xyZV7UJcb6A6ivdy9YqneqeGsZCAswk7bZLJCjE5jtfBAbp9xMymRrquj7VFHPmcar",
  "key23": "3JKxyH7KtpE1zM1yf1GVoHadJ4kpWPHFjBikajEYXvredNBx2nfpHcJFzf8KxsEnG8BoWGtsuwU5htmvvLKDuLTs",
  "key24": "4tEo8nDKf7dyoJZB3EvMPgPKDAiJthyd6HcgzHYDKSWHgTNDkUUaiCTApxaC2DkLR8aq8T3vaAdX7SaVjaTKqw3y",
  "key25": "46FgVeSE8zHAbEVKMgdsfW8jpp7FR84sFFK9APJrVWw8Mhh5y8kXH5GCpeU5CLYMGzMbR7ptDBH44TSsy6MR5hAN",
  "key26": "4iWXT9CJQFZkvEpeHQGneig7g23pd3FLSz3sFBocCTD4RkWdW3hkYXb1wfL1csiesqxS9fZ2NQgZM8Sd8wPgXAmo",
  "key27": "3kfxh6vgqfw36CPh2sDZYiMXxuY8kZgJfgsvjYtJoZAggiRhTNecqTsiWCtviEMAmDZDFeeb4G4qsQFYs6DecL8u",
  "key28": "LdhtjoGY5qZN4ECFxh5ZyQbLtueskgchxdcQXfMnkZZJHy1rpxaYGmt3FqxPBqmvYkfyVMic6yVD1E4yodt4B8h",
  "key29": "4eLzJBsjcPoRtuweu3GyiuATbtyaZRc8CQYxUfyULxMvuugeBngse2Yhzwk9K6k4gAouE25vGBtEwgG8rwn2yUMZ"
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
