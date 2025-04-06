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
    "GfEFnvGK1UM7mWbEYyGUL5CYc1yzAzQp48rZvwti4mkYkueqf1bc7WEk5DqP3sGUw6QduMt8E9hoZLtQvfZvQG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VTKTXyAYLDozUkKAmpLcYYnSnXshgjMyj7XjrFFoYZHPuh5v5kXFbyoMrXjFTdtc51aWqcWX7vJZmdu3nHbgof",
  "key1": "41wsBJFDBVQM8uypttjqKY1C5FGoAC1oQX5zG6s6nMcgAVXXet5rrcca6hsHLgLiGSjfqciUn8DqH4a5vwB5kL9Y",
  "key2": "4z7TjuahnDUbBjQrfyknenFeSP9HT97oUg2UuPNpTuXYejyS4k73FxJap9HrpCjsnYV6qHCFpBwiZWXbc8qT5btH",
  "key3": "3Kz7N15Nki51qyur4ebQhuMAH9VjByyD28UhvHqSBFQC9buJD1j9uTiTM2J3HtaYRTmTcyDEdr5e9QeQCpHa3wrA",
  "key4": "4muw5Ld8uDHtL7KeitAYEpgkKGqcd9W22tm4SdTfVjJcg3rRSxMsSuFVGmJk4MnLfBsgpAVSsT1j3uMvh7E7imCr",
  "key5": "mHharGeMJVAfrCxnHyNmj8ec2E6hDt7WHP4TLNYRJJCNQj9fkTtx33PE9MPQc5eaBhfNf34ajoDVtSRpy7BavZs",
  "key6": "2nYXH5Z8i8endCF3AsgSCC6CSa81PrFAKSgZWuVuMuVHT3VJZDi3idUUM1R4qz4aJ5pDzfnxMuhd1Kev5HJvkMoZ",
  "key7": "5vuEw9kfYw1RWfEjL66QfxfAyvKbypAdLtPViZgtxYJpUBvK1dt1c9tPX27sBfPFa1SNGhwqnk8U8ZTzWyPK6byp",
  "key8": "2yed645erBBTNh9ys5R6wCYobzgWD3YSL4ii1hZ7XwC1Px1Wz2qye7tewuS3ReLSqhCu96qVhYeyemCwZ4WfLcM",
  "key9": "67hPXFepFg1TynbyVZxFyFEG1rFKas9G4jry5mnxLndhMYGUMEfphJdad5zLKmksNBkEXDQXW2vP4JBUXmL9jDYs",
  "key10": "t7Br64WrjbBBdYaDymUDve7Y4RzSC8ayGAGFU545QAnhPjbM6dCB4UADqNpsDnFvqsSmhMHAE9iNg74WffjDNiK",
  "key11": "5cTDxGRBdzybwEB935wFxYVFoMtUsKSoNcPL6kLF1KDnU9u2NtcSUyRsDBCs32s4xpa3WJVr7qsXWhob6i8AaC6r",
  "key12": "5g2FvxtpidHX8i8kXbuMRsRMeueWCoqqEn6vr8zbNbLtA7MEkREScfaG9pk5KHKhd2mGeM4F2pBXNF7ZUgWTg8y9",
  "key13": "5SBWJc19DLAjznuhEY7ESF4CoqxkzGQykNFboq1MUrwbZTX4evVZp2zcBFmcrUD7AmFp15Y4DyFHd9ivH2h2YExN",
  "key14": "5bzBQBEGqrEWJKMtxGnJ3gYj8DcT1LbhGHFgDbHMi4QWN2houmTgQNcmKz1pFULT9F4GR5H5qXRAfF7c4dn8D1Eg",
  "key15": "4KpkN1pbDtWQ6xWpeuehhD52UaMgUiKuRasUeiPmAQ9UkPku18JrGnaAb9yjTDr4CYNve6giEHMdN2qF2QfUTeTL",
  "key16": "57o7Uh6S2siEt2d7bevKNTNK7XZTAVZK2eg1m8dModRAPNQCQxJh4UpoKsorzPWQGRqs8tPv7pKuEJx32hosmqS7",
  "key17": "3uAV94h2uexThZFhpSn68ZEJJrmmNdDS2vUQEqsEpKii314jbqSZHExNfWwKXWBdYvz2h5GUYcX92vp6DbHC3wEt",
  "key18": "3wGPcfbYnAnUJ8htdnZMgEZQmirZG1wYWwd3mG3KdKPoSb9VmcxuZuZDAENn6m4ZWFTzxWfkvptgSNv3xAyxm2TR",
  "key19": "2xLp7yDhUJYHj6SF6WpAoBUQ56fapqikJSitPySLLbRu4AvgdkifGvmWJqMUDUP2xDEvqAbLBVPSPA39kma2KiNT",
  "key20": "3ozxHfYKGFoqfAbpdPn4ixnh97UEosXeVn54tDXFfdccgQV8MFnnSJwBRU5SAK4juyfUw2shmEQnNQSa3SYG58fU",
  "key21": "3zyeSxgdHxXQjJS7dYfMMRFime9aKz9541RVyPZLiaZK5PkjjbRrCFxTX1icjVJtszfVoN4HQhWQU3LHeo7pTCD7",
  "key22": "2MyVDH9r1Vhy9aTkL3eAucBa3YcNv4PdL32H32FgjEVwxWCoCtk1JuwWdHb6ypph8VtqQLh2H81cngXLz6CwhfbB",
  "key23": "42fmrqZjTs4Pky1gePhHKhbtNczZAuk8b3ffPewNTXLCJK4vMNX7vABwxso8GsSyd2rs8nRVacgEuKZAYm7BN4a5",
  "key24": "5Xg4cWTq7e4PrJnhqXgsAdHb1x4C6foeHekngVauwsRovWo5K9GA4Bsaq4o688EzkCrzXGwQpvoA6pUtPL9sxRmQ",
  "key25": "griipqz4cW7XuykqHLqDQcdA7JKWwdrzgqNNccvPGweyX2AK1SEnhP8F5xNgXaHjx7bVWGiNSgccSVSm1FzunRn",
  "key26": "314ja81JxJYcPmDHEM1XGCQsJVthMLkvyYTBVco3euWJhCQ3kE6U1EEG3CreyprUho45z6aaun1XsNYWJ3F1VBmg",
  "key27": "4JTtqP4BmTbEEFM9c7oYVK41yv9xsBzBFuDuyxkxBysfeYAjXqFhKbiACoWqxzAHCHs84pXopAanCX4eV2JVVHZB",
  "key28": "28ydNZGEofSNFZFjXifbUDQGU3ttd1R37sKnqvnByc3ruRnLqpxrdSqQ2eAPDApK7aHsx9RMr85JvpXqm9DTz2Es",
  "key29": "aZsakxquhD8RW3vTYYrrxf5S5XmFUSMM9SUrqkLf1TL1H4KskJF4EzG5ofiWtaSx6oaF7zpPH4Q1ERjpZHgciyx",
  "key30": "3yokgoSZNrmvxHpMGdrZRQsMhEyeYw8S8enhKTZSjcQcmsv1sLn2Ryv8LRda3qkCLhmLxZ386dY6GmBo3NdFu64A",
  "key31": "5P9hPooz6ENa3NsaDUguDP9T1Te1uBNMcyTGN3Q26A6yAM58QsGsjHmrCRi6avfgSztDmHKc3dUWDhqkSqd7pLPb",
  "key32": "as7FDQxPYbb7c21btqWv6f8TCsFpzi3wx9rMWLpYJ6ad5bYdwm9rxAkZRuoCZHc2bstDHuKBZeUq7Gw1r11DMCM",
  "key33": "2n72vTSWJGP6ZLh7SCU2pK5wQ2nm2aZScA4W2BboL6efbXxAqqazEYBTdqMV6oNsYaW2kHRS3TuPT96MaZ97VHVc",
  "key34": "2CzNpnQr37pDPGvMc3UzA6foFEpZCNgmH7ZtnD6aqZPYHsYVVwwGtipDVKfy6uDgc93xsJkNBaMUiLhP2GPe5XHy",
  "key35": "5RFCbFL65ZCmSgtVKd1fpALvGkMEfJ2mKNDusGw6S5VkVnHwa3KPNMVSRYXwX6VRbLXCtLnmDraRZXEYa3Px17rF",
  "key36": "2rBKhTc5o8kwcrVbUDzBeeD9dojPPACm4s43U2hWbf9H8qaQg6PX1UeVxMSKfNxjfd2UkfHvMFcKNfzrUsnB3dZF",
  "key37": "2EH6Xq3iaxzQGS67jpVFX67ViHBUhmTszdhtmHxobQXaFHtVwFkDEPX2LuMS1dFD9AzQk9N1ccpQHvyrNJDGUytk",
  "key38": "5ebARwzqcetuYNGQH9b2V9zJhegxT5znYzmhh6EvxSdnPV9koexK277X9TymaRXCnPjmp3bSVJBWz3MNVaA6irPM",
  "key39": "3rwk9ejuAeZL25YECMSPkPKZGkj6HCwv7Za8985Bfy1J1c5sQG6rgM7eBzTBsmtoyB4hcxUZdXMB8XgCJLjiR14L",
  "key40": "vf9s7EHEi747oQjrch2iRKvckEAkZjcH9oCDF3Whaw551J55Eq62Nz4VFRgdvFgNHW5xoxWtViTkrB6F7ktHtn7",
  "key41": "31BirkKmY5QdKPBLenGT4GwAWMT7HkQ5jzF8CgsGWGfyjwNcGYz5gZKG8vhhPEZoBLkVu6HqYz3W4SKnn9tjWd8j",
  "key42": "4fpCpr6sXEoqr52RuMcZmjhjZWAVgawSVfvdcyrRLvTyBnWHioSJKq2zD2fdk9NzD6w8H4SzqRt5Eq59Lm5MPssL",
  "key43": "zTgMi17R6vFr772MrMAmUgsFi9F52BuoeBgSD7a4kjzEVxNMJKrxY7tDGcVJBps4xg8ugm91RoFL3BPnxNFW1ds",
  "key44": "3kVkCgLuX3YuahxC3WrBTqWDXRT1QyUrMj7q5Y8ufLM91YtVw7PmGqEDBxYULpZDwkNLEuwL4kFpAnLTCetsBK6d",
  "key45": "4qvCcnzvoARpuXuKgSHe3ekDn5s2hLHXDSuLLgLJsEJp1XbdpHxSgksvUdzfdH7pWXbp45zQSowrYMmGKpagMeuP",
  "key46": "1NXyqgCYhXipojQjrW34Mgmb1nkh3ZQBetMpodg3wPFaemc7dnJt15FmpodKAg41SBGgNMWDZD4nvEpRTTMD9xe",
  "key47": "m3GvaavJmCMeq28AhX6zboDKW9kJFSzdz2arRqwAH61DuoiU5cQaXXGqr73uLKpM9npHr2Y6cSA4u9EzenKH9LK",
  "key48": "TGA3WgMCrq8HkLZSyrVQr9pNM8z7W9vtCodvAedMPfvhzJJBdUygDENJnfpr36z3YB2vAzoXvp3t6DheovfnaVk",
  "key49": "2ywm1kbR5dcbNSKFK8c9uqNv2zgcZYjV2rKFjHJitpysCFcFNTLrkNDcM77VxYSk8s2twb3g1Sz9YiepfkkprZd8"
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
