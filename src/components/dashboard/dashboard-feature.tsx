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
    "Wbku4V3wE4A3aP14dpgKZXzMQc1qP7eotNWSaP4ca4cQFWZTBLvWAEpHoeY7K193mP2e1LZuGQXTgVptCoKcteg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zY1uYiHCqkLzftpH9Keb2sxmbuxGEzB7hz5t8wii2NTeLz55bM4pm2YL1CPuHZBbMsaGvN4ZPNpvXG69VUXoMH",
  "key1": "218HxgTX44ZfKJQuShtUkLtpifscHXK1efQ97HERWYHZ8hbmU7MrpEr6GkWRZWXyEMsaMbph3VCf2VxviGthALM7",
  "key2": "55hojw1b6Dp64razHqGDEG6kXNAqM3oSH8AUGwTyYQm3XRP5RCupbtxe87hoyBvQWv2uCDPCzrHT16cBkFoNbVkh",
  "key3": "3fMaPk7263bkSbpPVJWmt24TDUHy8f5cVJPnHLzA13UdPWPAcJ4PfER2NVWDkc496kUqEG6WH2DHfqqdT8ZakNJt",
  "key4": "66GegMdCYjJrB4TRXjqXPkYbcjeuwHxgYoVijPnKGA7rjCXtY9dHCWiua2W62HwzcngBsiLm82LBEqzX36PMEhih",
  "key5": "4q8ve6HmRiaBYHj66smnZArezqZw8xoNtiDgSCAeNHmi5t9Q3k8F9bTrt7ommp7JTw5yD9exUf4LFWoohm26CthW",
  "key6": "5rvdMkxFFwxuZDfxsNh7TCjnwkut6VdQmf66ozBprFsRjVYvC4Z1DRjA9vUZj7TSinnExJh5uW97gdJJK6SKX3jY",
  "key7": "5A4rqTfyFvmpyr1QLBoLmCwkQchaCEWoyZgDPwweJFAFzpLEHrNhgymcqVQbJgXXbNCZ4YumrR67uuLqHPN2TWgx",
  "key8": "5zjL9YucuNVbkbW68NAEGVcqYCi59BkAtqDjwyJuKjhx2wHtbnpdkrA8LMSM7kEcaFFdWLxrQ8KgZxX6GWhZ3SE2",
  "key9": "3sySiHtnCarYM8pwPsrXLACqrWD9ePAWBa3YwVu3QjqUVTrfeVjCnEsMHZsc4tufLKiJniJ97q2PVGz47NZM3jQt",
  "key10": "sdKNBLpPxj87ybhpUZFfTrJjHersSAVgMgVdyrtuqBzJJr3QbBAiNwMGDc4ThywKfCnNPHw32LqvpeZShfVJDtB",
  "key11": "Si3T5gNvLApnx3BHohg788HQUDwkcRpU2BFprWtAtWw6BivjbW3aCDFfdZcsdoVV6DkVFcH7nXEbc477aCnh6t4",
  "key12": "3PBMzHj63M4LuHqYzF2w2XP1c3FevcmYAWN3wRLs8Qee2Aft7YsHncw7efBSH73mELgfnTjRJo75KBezhie7MTyW",
  "key13": "2Z9r2PidHg4Az1CcdGYHzALRYFZhGvjJtVH4zt39BEoErvmBuUPHqPEmV5LAHxWorvodoRfwmergN8HUdnaDt8H9",
  "key14": "3JRSLdAXVX1ms6qb2XywKYWJ8prYan5RbWSg6SMJTqCjqQHy3okDBBSxDJ4RWJBfQ7XzfiQCFEj3wSbt2wC19UwU",
  "key15": "3WvocodjKRM3hnAoUWcbgcGDZMFtGFBbwBq757xHSsxizKzhQS2yvDKmWckX28tPKzvg8De6a4ZTQsVrvjheYSFU",
  "key16": "6KxYeuAF6VJs1pVj8En7DPU811dfzt38zuECvwTAdXJLorpwvTRGF4jn5DvRrKJNL6VPTVXvx4uUTg4TzCwR2HL",
  "key17": "5eWGZgHsw96gnwzqXcUR85dJZ8GgMnpj7c7xZrNDEXU7NiuUqNQw89anJ29qWzhiJCzB3zQCVSFYPqtz86YfqpEH",
  "key18": "6VkdhVY2iMSLLNcSgeQw4jVVnrKUnhiid6hc8vxRRLsuLxcgVKsQz4MgErMmKVaRWvpcZKhiRDAUGqyPnvrDC5S",
  "key19": "2aHYhS7qHbYwA5npQx59Q5L3eSwX63TXE774qg4tL8ENzTdDCkxikney4YYJieATfPvpvA5VVonJW136b6aYS2sy",
  "key20": "vCJPK52XY8h5nUdHQggNQ64Mo48e3TJrxUZWLPiMtoAvVSrtWhEa4SpJ5Y8uy6PDKiRjsHCVSUBJhCnA62YbAS1",
  "key21": "3gxW3YrRF7LQ5E5BwfGL8WqDNTedjdNjuWcW4Toz6BcNALXkoNYR8aYwRaAEFy3NzRHR1tvtFpZo1jw9sXYkrXJW",
  "key22": "3a6KPfNRYVUmibcdj8eMgdgXXrJYGRb9oB6czfYrgLxKc9ajviLrLBBSC5kgd1zpmHj8PfLZ4Ct19ifXx7a7dQuB",
  "key23": "5ajGVfpJMU3xZL7ZcdxXhSGWvQpdb38t7uMcVpnXLEnNBHTA9yN7jLrjqHyfjhyuS6jAEbRX3472Ctk9LsV22Shm",
  "key24": "33s26WZWuuW2qPHNYd5TC5mXiLWKZLHjMz5QG6QeKrRYxgCLRTzvkFPob7uHhhb2V6xZAwG12u2pcXhvxECqQiDB",
  "key25": "25DkG7ZJuHrpbupksgQ8fjwP1yNmKYTFeaqpLxpKBLNuSbuKLsf43uMTWNyU2p474b6ptKgca2stQdAxC58MKM7z",
  "key26": "9YzgncogAr9B4A9e1Cq7KEEHHJrFYCFBhJg839taXYgmn46BNZnq5LaScsEMjYs5ZXGwQTQzH9aJ3LM11zNAddK",
  "key27": "XuYuAJmZVxReZBUSqrnUJuWVRkbGSA1dUqzD1oozhb5Mk7N3HajG7WzpM3qQDdsYgAiadVd7GsfCrJXcuHrQR6C",
  "key28": "43GEE5nmjcSLx9SXrXDfkr18GDVGakhJy6cGsnA9u2ojzoMvzD23kDUsATF4PPc4nVtUKHmWMNy4M3WMtX4L3qFf",
  "key29": "3UhZ9Y2pFMAXqZKtcgASbqVpg4FwtUDN527r8LaV7uL9ZLwjzWqQp5P7ZLmvWXhJEZwqXN4BaMRdWTUcBkYpUahn",
  "key30": "3oDMC5icfFqqtXF6uwd6exXFSXM89pj1qyaDuEFPw5tDTnvx2AJxGwfWH2RmVKjm8su6Z5ehkLU12swFV4VRANpW",
  "key31": "5Z5V6zTJNdx1SPCjrSLdaBpLZNX4P2PLujk1rkR65izrSQP4V4greDbhByB5gLLo6vRXLkzmrqKZGTSCPbyaw8LJ",
  "key32": "5pyx4uLohvLnhQb6mL6NjRvzTBpAxhQCxMgH4VPqCz7vSXkiWPRe8uEF3qxpNEbF5XNTwcFHtRZZfca2tLzEq5kg",
  "key33": "2XFPgb7Uz4jxzHss1af8z6NMdtw4a2PdTXzfJ5vPCryNciZ8ZE4q3nAmqHU69uqehiVoZQkBWFpSWZ3x2epnS3pd",
  "key34": "5k8tFt6juUtyFd4vRTex25Z5GBmhZNLqDSkNDdCRbNc78k9swZqGEBLuZUVXaDhPpCW1CD2mepJfA7Aw4wS7p6L3",
  "key35": "3npgVTrmRwW5q63qJAS4PTbTr9TV8gHbcEiidWMWFWMsoUPBXfinJeCJ3NzbJv47fnuwpHTbetaMzRctw8uSF941",
  "key36": "hGfNqUUpbe3BZK2CPZfFUz9VW1i7gAsEc8KcmAd8KMRNFhQBwPmmD9QtWy4M3qRRZaRE1wJ6CToJUeWPvrH8Q9C",
  "key37": "2FuG8nq1yabb5seRqga5b8Qiq3ooHgVaDYx4CfyqvKd7jE5R9SvrFPWHKXYDTHFkN4AEUBZEjFYuUznV1DvZFpyR",
  "key38": "33p6MY2zDgKoTHFGBtgtxrVmiXQPvNe6UMrUbUufRd7o3U8cUaxn2jWnUn95xbxDWGNBZgK5zib213uJTzVDRBif",
  "key39": "R1k58DP7p4txHM9G8L9KLegJxfpMpfGtqQpMRLvfATPt2cg6Vhpir1bA2Az8MpaJPwate2U7ajsGwSwL6KcsDjy",
  "key40": "XeuAng8qCiCA3sPdeFw2e5NtWs6YwhLYAxXn5HMiG8cSLxezCSKjzT6jcUNHGoEpxShJSQygnBo8i5uZt3vgsYX",
  "key41": "21iWLy8vSSkXLqF5GNsLLSuQzmZx8BrEgMqE1Md4qtezyRJdqgHhy2Jf4RkAW6mjSnmZTgidwnWm7ERk15C3jnQo",
  "key42": "CnCG1dRPXQyHZvpMMSDuLwj8YqMgDmttnivmoAgtE12Bznx4aej3PLwV3kxiQG2VaGNkEtfa6vumKrFVt84Fwiu",
  "key43": "3mogbQ24NBzQwresBizikhVcXgJSwTUkzCvyic9SP8V7yE2zFFM4ASatVT2xkQ8F6Wp34V8ddBpgHFcJd9dCGgK9",
  "key44": "5uodprRETtvYjsCCxUzsJJHzfW2MWrX3s8qcZsu9u1jdEemYHrbkoUBUEDPiNzzCj13SxJxWGED2ZNgz2Are2tPw",
  "key45": "5vwBxnCnrW5D3oN43jmy9JDyJUAgsJiZD9qyaDQWyUTCRKbFAgcmZoVysS7mLnvJQSckem24GZtkCkbby8CAtZS3",
  "key46": "4DABKZjKdXpVoBfFSy4FFruqCyLofVCJbqrkbbzmQD351D3xRYUTrQ9mjopegkHvFVEMDyH2rCLeKiprghA6Bjh1",
  "key47": "32DR2RGt9ZQoK6wa77iyAjeGMCJUHFhRBhmWhrmV6S3VB2SvuC6wjXjpeUxDQcCTeFtsDaMEFazviVzo8CMv7BP9",
  "key48": "3QeV4jRjqCmnsj4WEu4WbSaaPsKYyq3TtJjQuVxSRTQAFsSWVSfAGc9cP84AqEQxRcKETQHN5UaBLxrwu6HLRJEN"
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
