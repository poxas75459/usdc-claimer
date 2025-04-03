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
    "krVm5oYd7rePdeWfPTYaEsmFjAxwr1DcC4o1QCBGkbpsnfvTNZyGXNC9VpK1eUX5LV2xBkq4LYroTHsxadhZdpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nX3EaszxnzDJ1fFEKMFvvxZ4iXjxqSrb7iiNfeJpp6hyoxoNPehBN4XZKyV9rVQJBNBujEoxy1YBwTmFmDPVuxV",
  "key1": "2xQ3BHPvBgkSYs35f1wtAsTFyrhP281rrGgY58VUtJyY4sEk4656h7L4k1KDCniQ2eCTqmj2WdG9A7ZUa5K5ykir",
  "key2": "5oMPpbc1WyzpbRtxx9JhCmyqMhjwmsodGowzN86s1vJdyjVVz6Vjt1b88jrvwNxfK7pztizA4LaHcwx3SPbXZcZF",
  "key3": "3Lt2aFC7GrFt7Lcmj6tsEtg1iSganJ8q7M8Xk4LzrMra6LkgPE441u2rnufyS4qAhpjpjfK6WHdzSn4vnHikA1yZ",
  "key4": "Amci5zX7F4PEXuPHAeJ5tjzAqNcmrf1VLX9orSDz9z3LCDQK5PfMuAAiVbxUBDKJ83rh2vsPbo5jWzU4RyQc4T7",
  "key5": "32JJEAcZq3BG2q9BB7pd9QvwUNzoZm6FjJ3DEABUCzpsJMnt9siyVJpkvAeXHknXTtjVcgS6ouPF7zA11pY2K8Fs",
  "key6": "2JKemeea8xQCChREUyiQdkpo8qV1Mp49GiUszXrWWmN1bEHCHT76NLPoP5d5hwDgLrKsoZCLRNYwJGPjty85MCHM",
  "key7": "2vDcmZDM2aAdngW7jzC3Javy6oWH2Th7tX8kguuNegxe7TwaxBsjQdDxd4PtM6QptXegiXDn2mghm43sZm4ZHRiS",
  "key8": "4waKyHjXRRjDa5SD2so1iZ43M9kBjMqMHqDDSyqNuANZHkVQgeH9o4R1xKucDgXTqBBzN9J6uYRgQrenLmMoF4Ft",
  "key9": "3wV1sMFegn3MCvXJ7LhGffagcR82towd4PSTCG9aMBd2b85K8KpGyRs2KYnUxK6gQbBVi6xmrg6HZ2a8PPJ4QvGm",
  "key10": "34fge3NwznEE5bvfJhrNtrQKsUfUyCeskPvHJh9BHjauUNkkLq4MBEEKcnJz65uZSvUYvQEzQhNb1z7iDyHyTqoz",
  "key11": "5aLRdRWmBGSwTi6CvjkuMNnLLZyHLbxBJrX1GrRNQvtTzuw68FA6Kf37hriSGZfoSbHM2pZZ4V1ME4JLWsbQGvpq",
  "key12": "41pHrRAHxUX3PyuM8k1RTiMvpZP6HWYsZkRizBGSkr6aisBHDN5dZWuWSUiA8jkSsmfi9RFdmDLq1q8595UDqwRW",
  "key13": "GyDF9KJbwvajMZXKzJBe2K3zrZ7hLemk612UUQ4Yqz9UdEeJHKrMLkB13CwYsGBJaDWuJiEgZ3AfAdhDHG1QExS",
  "key14": "3NiBLHG89NqdaqsL3CgFesH8fxKDk5PraVERVWE9oekYmDBgifwkE5JBMEf151s7HP1fxvEXpCLTUqKhjybDXuVu",
  "key15": "42wuvAWyBJbEBhvWN884XfSJUpAMpBA4NLqCcXEf83q1w2kd5ZzcdqeE6fTUxv1ZJPaz3RBHfyqYC4XumKq3xAaR",
  "key16": "mLCUDoGfrCdkyFVwttmT74zNwV5yRmpeiQSZDYU4BeixYpAu8H7QTbNi5S5CMmtQgh81chs2yahs6QKzKrLbDyz",
  "key17": "4Gp2uRBBUH9xJFs2EACiqkzu7pDLHWcPDy1sod4bmGPK68FWa15ZUiLgHihWeySPR8PmWssQYGJzgY6nLiCNqfQz",
  "key18": "4UzxwrXE6oyHdD6FENGFkGhxTuueGQRwS8h5TTioFha46qhq2Vtb3A1YNVVgVm7HnjHbHVkKXGUe1v2vqKTkKgeS",
  "key19": "2S83qaVnyXipoKBEpQsLgoJweu7LHQoZNRyN7PPLjdYuQSTiXuxDYCdZkhvba2H1RZujVMmWKP62erv7FrRAFHz2",
  "key20": "3m2gmE1VJVpNzeV5T5Ep5i6YGL7E22jJtst2bV4bXrUAZvW9qejSuk7TyRjCw2b2qXQq9au7hdwtBSk47mkLb7aK",
  "key21": "43JMuoLYGaQLV6zYPehyVvwvWnYPZKNoC1CEDc1x5FuCkn4rDwzUHLuFPnSkX8s775Z4BXqesaUsmGqaMTgdVqAQ",
  "key22": "2XY2qZvK9wUSXCvebzKTGiiVDjN6k8BTJFRNRySXn4rHprcQcewLA82VQT9KBmShEMDDW3SXpBiXjiWgCbFrU2Ns",
  "key23": "7wwrMA9UStSWHdj9PsFrrryn2LxPDBQX1ga7WZCRzAiupeXBN5vTTANCeYAtbNFhdsXySdWAiv4Za2tGrr1gDEE",
  "key24": "3qpY2tUKjTRsdwbCDY4kkQVUe1gzJDsY3pkWBPiaDXGphpo4zP2PWdWkZfFZhotJwoC2Vdnex1XpUabk5jvWwnMz",
  "key25": "4Q692tuj5hKJNe42yVVdpjgfpwbmxyox4pND13JVNxnubPrkYzZHgUDibGEEaFkZHC3XCcYauK728wsyFXeZYmT",
  "key26": "2ttKsHxNHhSocNqKkJNmuKPBuXsYE6dZMeXwbswT1K7eWS3GcxJnJzLo3QFtTNZFUMXnJg1f6bczrDssDqnmXVMb",
  "key27": "5GDRdLJpSLRbmVTnYPn3FsrDTdNf82vFKUpD9Q8SVP3HzeA56mkJZD2quH9JAQDDjVRM2WyrR35pV4U7Z5SVyoGU",
  "key28": "nzd28pbYB3XtwGcvG4DqmFa5XQyevsFLBoRFpXEr8DkXYyuR1rwnpxWtne9hcBBhaoJLHT7XKAGhxwXYGqfH8XZ",
  "key29": "2H2Y6QVQc5nwxTWgh8SjXc4vaH3YYS5LBH2eFPZ9YaxsiFy29QWfp52GSHyhZzo2JsiMfS2nMcv6iyqQmymgLLxD",
  "key30": "41U9m7W2FC9k9jZNDGeXZP8E2CQ6aAvYCtjbmDfPxiYLUjL9miZGhWiD6BVqnZ24kp5Nyu6fXZNVg7CuTUphR1WY",
  "key31": "AEh5tuQ6RrvbmFeYXNTtWrBMyNcUJ7XThFvBLrUDU7KxSdpVujM4h3ZQe1um2bs4pWWH2yEWZSEs6fs939VLzVr",
  "key32": "31rYtPjbvuhpPmGzJWbnJuDqpGnti5YSTTVbbpcTmoBkFS5WFMEH9UCDxyWwPk5qmq1w34rKCrpPzgA89ifXDYzS",
  "key33": "32zEa2NDwKUjY12mHfX4iBwcTXaBu3YjpCA9ctqNTr5X3RgJ5FrNxYzHK9WV44s382c6Cz4rj19XB78FLTrPw9zu",
  "key34": "5stobNbxoJP5TjfxXXyjNPE6MxuWxZMxCko9z9U6bTpWVHcLSUvBPK6jLiPEPd7KfR3ogyqECjUx8G2e49FL55pT",
  "key35": "3ot9F71Mrx2t9gh8Zyu81fx782vhqBRDLTWjYEzjnHrpxZpUiz9jgEc5oBH75FeozGk74tx4QnrnNpRyKYSrSsC5",
  "key36": "4bwePxA49Azn8uimzhiemfgtawQis4MpKeSic4Wj2cF3ZJC6cVXvao1ep2UcWdRE8U8K1UYuwVBAVtiHMVtbQDvP",
  "key37": "521ummdKzXxf6yHMbxvX7g3APz1yZiV18LPLCqaWpzVXkjfzJnJG2Z2WoE4hKbtBbFuFhqML479EQ9F8bDsPa3p7",
  "key38": "82PX2rPDgdVRDEjCSk5b6CrZyqbG9SoZ9iiAzQjXTjBo7gp413gchkX62i4v7sA7DK6G3xxrKESYiCZh1goXD42",
  "key39": "529dYpmTQf4JkKmTRFqqkZvvKcyehmBd9Lz1DWLJ45S3Zt7MgwPzTc2LycjrSeTDw3DqGXJaJLgCLWgQsPQKRUqB",
  "key40": "2wyMmmo7EiwXbeZFPXwUSUyMdQBnDyrPZ2VZ2QRyNj6Nbw8qahzYDS2jhddJuGKbhZ1CEKLaRP9eSzkfyeCpP4j4",
  "key41": "3b5MnfpA881RYTaJhWbWg9SwpT8Ry38yEuGmCSUa9ePZYFfvV61nhBnRnAPLEa84oNDNZ4BgoCL1LpswvdgeC1Hc",
  "key42": "5KSdiyoq7adP3KQDCpzVts9in73ZQjjHEDZwvKzW79LiMyZfBFCKL6PAs4FLHLzPg7CiCps4ekvxj1ZbYpVzvnxd",
  "key43": "3jmfRbHqhiK1NYPktA6xvWJomKbsaidXc1RysDfGVMhxQP4jbvb22yjZas6CBJHvdHVEyoZxH9wFbwQuSLMEKZNJ",
  "key44": "4HkKANAuTc1kB4KQFQs4YNndwQWsZBzckTCpAPaCPYxbeVZp7Ly9jvqtBTtQ6TpfVyHxmiy2zdwnh3a34CdYBPYn",
  "key45": "4K7E5pn22inCeyTksbBbx62RVyeJu13oRjUWa1oQvTZyGeJjsVtwKqh2mCuP18XLk46kE3S5fvd4k5kwaqj2ZeMX",
  "key46": "24tApBq9RhUmXuV3Y6uHbqiZjLJZoFWKQGPosZNAnkqfLJeJmGiMi2ZrgSB9LLrdcewmLBQKHwSaGDbJs8B6RVpK",
  "key47": "5jjV2AhnANMJTnNMFpnpynUTs2w4HEGDpVwbMr1LjjEb4izefJ9Y495jEWZEEjDtoJMUKVfrM71umfWTJSvhUgWA",
  "key48": "5eTdqtY9GtFgBgd2H18sW6pounRrNPzL5Jx91FbQVbSP8Hh48Y4yT5Ms38gK2dpag1rRA9323UE11uMjA4aUAUiu"
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
