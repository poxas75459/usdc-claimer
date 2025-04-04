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
    "3XiqkMaUYSr33DThCtCBY69TopmmTrbmbyAap7VPN1fgLYy6UhGUZiLrdwAeVxGRh5N1roCAAniTFp1nRZL8V4V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VhmgmHu1zH5Apnk8peFwGw8mWRzEFiBYNUmA1gmxTqMUpDQnCXBBJy3hsAKuU3zCsqPWG7f7zbagDTp5doKtSfJ",
  "key1": "2UGVG21wqTA2PsGAWA6AKzxi11NT6PQVVUuZYLAVragjchHaDXPqu3iUMAXbp1EGQVcJshiCEqFTemDDGgjg4gSs",
  "key2": "5hrWdemHdXcyoCCDXESgcFAF1yZyghap94HxVfDeapaoKbLiBUUQgXbzb9D63vV5H6H93e7ssRXCSHf9QuKrTXGL",
  "key3": "52SkQJZ6MWrYhnUmFwmmCGjbwqucYscgPo2XwMqsjNJe1J67c7CMXhdvA18VeFZgBiLumejynNWQAxXizy1BWeup",
  "key4": "4TBczHMkw2uhJQY5w6uEvhWkYLqjVsDnzwDi97ADy6VXyiPkiDPvqZ99L7cWL9wFZmM2NL7zQKaUagM8DXkM6mLu",
  "key5": "i38NAC8cG5Zcfqe9S1cNq3SapSLC5MJRSt643rKh3YgKFMnfhURKE3ipCcVnKH7cJwdH8jkH9oXkg5oT7hmZcg6",
  "key6": "53hWgmRCkvepqtPAkGov7ttJTXcF6cepXbZkZh4QRowKie35AGSHW68BR2yuR4rpkYkTQNizpxsgfZAPCCsMgpnE",
  "key7": "61Wwuognj4Y5PXFFjPo2VqkiVN7CBxgSAjDxCwbPj2bVUUETmages64vzowJbSUk2dR39k7V4jKkp7yhz9JNmmpP",
  "key8": "3qecxQVW87CpMtQNFnxEYZhV9T9Lr8gnuwsXJVCnGoYSMSVRra2snMfKwdsrsdGBEohVJhAJPKKWNgwMXtmPuB6d",
  "key9": "bxRTiThLuTcWUMgrtPoAU56GAPWGEZpK2c2HrJiDPPz7y69RHatTtWSUKR67QLDoMz5Xx9ZTMNcHfG1nk1JeSpB",
  "key10": "31DySGRe9gu8jq6RztnMeQJtbtQ6R5U5t3gLR6EaQc5uyiuXgo8t3Bzf67nYEaDBWkBVd4ZEDMwRXkRyKqojZpFH",
  "key11": "49FMUE6xkKwJyGzfWSCGhF5ugaro9BBVYwvHkgxTQ5NTHqSoaamvDGXpqrwEtcBko5FNmMTDe11FayuxAYfBJeLJ",
  "key12": "5iWH5bj6JgU8vVP6XeBeWHrp1c14zENwPkgFy3cAj3W4iqudQUdLyrB8hSDZXXZ2osdE6TXK9vBnEzWJX7FjGy4U",
  "key13": "4oLSV4wifYU2SMwzT8JUizhgKtVQpzpU8GSM7fTgLPeLQ2rpVe77SsyiiF86vW1dZZykro16PJF5BmTm9txme1xz",
  "key14": "3dzbmJdpNY4gDM7mJXcirKovJg667NtrrFYUGzWprvjPG9pZ8V4shN7TUsk7rHncjPmiU4hPAVa9pNDhMGVeuEbo",
  "key15": "5qvYqadJ3aP27UohZVDMaTfjNkFPF4aKjKVeM8Xa8kYQEt9UUatZDWpzNeiDXdQ83VYTS44rGA8a1HLaHZYYhH1M",
  "key16": "5KAh6JaFAcUFQaUdcAAVRKhiAnW4UzkVj5VcqvBgWRsaCvdMaZyiaDnF6oDUqydZqFGF75t6mhM4KyTiYghgHo1C",
  "key17": "2LRqM1QLGSFQQR137g1XoLH5zgC2R6p28mq6h4uT4mowJQxjSDmivYfraduBESvx66j1xKtU3ZYs1zSsG5uaLv5q",
  "key18": "4niZ6kvaxfMNUgZW4TNYHXPepzrvcwmH8mdaDWTDFiWu3GvdCCnkSotnub5AfBARdGWwoGTpRtvoufCdLLfvjypC",
  "key19": "3QGuaqdhKBFMeY1jtNMgoLfEsN89EBzNh1odytUu9yzEJ9mkoGBpd2ZjfdVezxUdtyh6HmDxArsHGcGWZSsLTGFG",
  "key20": "5qXz27xnW4QAWzukgqHpEncd81S68Lr7TyWsccfkD9VkHNMEPeG5FE9KMvxGr4MnyVLA9i1UJqzvnLH3vW691sF6",
  "key21": "2ezXTNECcTuniHGoFT8dPAHDzZQNZEF6Vp8R92hnqV6JK81XKiCdcNCBkUngxTSitRc4bZursBfyQQ329d6Thw5d",
  "key22": "64wSiACwkRnMyL6fD9EnZWj6z5nSufCYUztPYmoJjWwwFosuZJ5zQ61YHwQdi3joAwr7VK47wwgQGHiDJYrr6kp3",
  "key23": "2QbnV2vqpyJRHmXPzNeUAGGmccZPX7zRWeZXvZeyJhP3fnyToB7fEQfHekVZLLHofDa15GeN6VPdzufAYHAutrPK",
  "key24": "uppn7BhMnBiAtm8MEBzqMoAwf48WPUzvAXPZz3G6oPGLNrtK9dJKwiXLk9UGWnvMsv1hUvf9ssgTM3PbohsWzaU",
  "key25": "5xEmZ8tP8ZZAvL2AnJfBzfhdA3EM1sSbTpiMSbstCr6F4V8MreWrLLtd3oeQEtiJiYRTieqCe2NVPeg2WAhe7i2H",
  "key26": "5DG7gFDS4jxmJizLuXba9NUhnLhfG1onv8JNjnfAYB2fSBwDxgbitJNjw6ErQkGndARTK13YepqUCyqL7B9D8MEa",
  "key27": "5Amv64ibCb2mUieQHFBYPFTGTbBJ5v17DChmP5mkKeC5A6Zk8KFRwLt9mSQPcfpKhGmhzxYt9qMfcTvhnXeo5H22",
  "key28": "2dWNbxnRoY48d4Ux5JoutPwd2N8vWKTiv8w9Pj7nPGUrqWCDsSFovRvA2kVh6Yf7quggZMeKRwoaD8rS9JYQa9oj",
  "key29": "4gU5DiTLCKD6g84KXnSW5of8KMRN5n6EMip8ZDGZyBzYGTaQ65MQMUQG5rygq9wBsNStt5RbxdaQNJqUog4ysza",
  "key30": "Ryk5XGwweeksR382J2yAL52nytqng99sdT1Ujf4hYxHE6dbBdZ2oR4iAp8QLhUZdaZ4zhZRR7s4kGQs95HnU78J"
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
