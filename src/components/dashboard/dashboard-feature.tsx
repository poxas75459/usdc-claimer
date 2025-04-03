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
    "pz2xkmDPZ9hXDUwceXhUeNDofxwaC2pZHZ8wem14GLA1HZ4yxwBU1rvsMtnXxMCLvm31cunnL6K8qLpsySA9fCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rN463B6BVK4zCExoPShfNyYiixVggbBff1kFsYto7iMfx98FUgc85VYv4hPKUQWUA4QZe1HrQ9RxRj4PEj1vqYT",
  "key1": "3wCm4pFSAs8eUecs9HNEK73mudnMMBBcSCkCKP4yMa6cBBY9xnvLHSkc1LhZi3unaeAiVbkrvACuTY3gCGAosLz4",
  "key2": "HKr5QFtVWUAVeFjqwqVvwjc6rzvqT5hcMvFEkMSEzvK4WEhf3bXU1QTE8FbbVwFhhG7oTHizaX7K94Eb1sNAgzg",
  "key3": "2k5Pi7nNJHWDWJ14X7KpN11AVE4XP1gya2e2ebPHieZiKE1pVjLKu2F2pY2qJRdE7wWfkvunKF8ymQgsHCwYdewd",
  "key4": "3mYWGU6DmDAbusQYZqRAMvnGwJPV48JanyTP2zXuFfkE9pynyVbsh2c3ev4ScLaJCmjmRfjeckzLy1ha3MxH8v9k",
  "key5": "2bnHQockNmj8Rz8CZoRgZQQbLYATgBgP38DQsatGh8b3dpHTKfYPZh9Y2293G2KD5oU5wKT6tiDxgbAicznKwhmW",
  "key6": "42MkaPTrGDC3ZAbpR6J2AVR8HmSe4nsPVsCFSq5oBUJcYGfApmtSsyhr89LBiB14DF2BZVehfC63yEDtwfMyoEw4",
  "key7": "2hvwMduzdsCYM5SviJtmEPcAHoV8zaFsbirMhvv1WgdxzYhQrpuaGEechgGgSDJ4FrJ1dYZz4S3z3DvHYPj667bH",
  "key8": "5UAdb7SkvgMVY63qPuSGSXw3PtkCpEazyiXyiBPcqPv5jwYa8jAM7R5GGGqCxKfX2XpF8C7ejdugyDRAokUjTiV2",
  "key9": "wAJbEQrXv2rZT5B1sFq7ogBtGxy2KBv3fdAJLzKGtZ4ouuhmspMUYvzH7JoiSiEf1fBnJT2Rr3CFJX1tcNHNPs3",
  "key10": "5zQ4GvKbjg638UKY3aostUwJ91xFTiNTBxTddsS6XvHvfE9BAJxZ9yVemt9ZdZMx2axkLn2Hyxt7s7f2JRgQedXE",
  "key11": "3foU8bDrtEyNExM6MzCwRQwog88N8MsuCtxdLDRkFBrTpMrSevdeEbd96xE6Vzo6egbNrTiJVNy2qcR3qdWJVB3o",
  "key12": "RupXxXwLtDr3ZSfoYqCNAyipJmJHfmQPAMAU8jbBKGBSi43YD9Tt9Gmc9BK2zioevBwv4Mn57HCde2hezkBQWX9",
  "key13": "3ZMg2QPTzkXCzXEqwQfMTYB1x6HB3XKUk1ord1i47gincJtUZsneWQFmVT8Bnjv6eWgvZfpfj1frEdJuxDpipgZ9",
  "key14": "426zNs1dSafCRvcXQUZHPvXJdQRnj665hoTboYr7URMfigEKpVFZa6nvdVpgH9uTQG4w6oN8eLx8kq3ewjNoG3NM",
  "key15": "FVGMpDinER74D8FoXjubzKzcp5ewXDtXzcPiTgjzaiUJAXvtzY6cqxLERkxbD7yj2AmbE9jsvXfwUriT1Yts3p1",
  "key16": "4VsKzFCJ9AVLX3TdkJgA1u9TxDPgk5m3SDron9o8HK1sRqnGNq4NMcrWX9sDjZY6dG1fxeW1rA2uDJwSVF8gMvmm",
  "key17": "UNv1gb1mew4YCXM3EZh75ZvwoYd9BrGiLU5x49ZhzTTqdWokmmLr6UHfFcy86vphCeQvsouXFJKSS2HpRei5acX",
  "key18": "5cpKdaVRegLA2tGAb3eg9nDsV3erRFi2JUytJG9Nu8RioxmmmjWPugRc1Gsiei8vJwU65835SSfcSc7jmgkHeuJG",
  "key19": "3DUcyVmyRnLaj64Fwk1BJ9nr7bpb49zEvGYwtKt3CnBmzKy2xQkNh1Zu3RwtQZTxVtu4AbNrw2N1p2NjpGvBWzpq",
  "key20": "2jEzdTvrsjbzCpJSEHqUjy1YCkemKFVHuWDnZ3phq5W4HjERYwCWFrpj6m2MT6RNwk4Aoy2cYp5wodsEAJ9Z1yid",
  "key21": "2aEQpwWEQj2NedrKAQjpcv36f6FqjQVhBygNk8hJaPhBQo6reBYmL5cL5Vz3rQfikNENiy979mDPeCt8BkWPLd8n",
  "key22": "8yVA7fXTmVYWePbEqaG4ryJeogxE2jWUiEDVXWpWPToH49jMvouqqmArB8ya69HQ6LcGKhdQrtyKMSrGiJEyEFf",
  "key23": "3MHqgqMVLfD7P1h9hWXSQDtVozXa8vsZMDrGqi4r7HejGTfVimcD9hRMMfqZyXtHj1TAXnUPtPJ8PMRfckmkp2bG",
  "key24": "2CqERLmrjEKhw1FNwTNiujb2KjbZ94j2eFytetqnJo1xqnqqTcNTdeivS7aLGn4v88wW8LdZwXYvUgPN8vf36Aqo",
  "key25": "4NezNvUC66pVWEUq5HfZgnQRq6vxcotnTazNjTcyRkbtcDRHUv2UphDAHxHLx9tFLJ6D1PscKMwz1w7KaJPaDHqs",
  "key26": "3StqZcMctk2NcXXbokPA5BRZhrcVrbsGHmYLXizeMUyrMviwpqDhnpgoZDZvhgu1Ztqe1TVU9ZCQF3CEb7kf49vW",
  "key27": "3HjTcfbUMtvVPhohwDf1Ld6xtZaSzSTQBXTXoqnHmtqjTNrnrpr2Bc24jZBetM1xZpfMESmzqHc3jVN31o6ezNAN",
  "key28": "4k2sccLFabq2DSF3j9iErSdQh795WMwBK5R78MHrzM4XfK7dT2CeryL1g6GDWXhi4fbNpz5CSCouYxGtniWX7wWj",
  "key29": "5rRZpKin7BCZw6sn4VVgAtp9xxri8cvmhB3u14fy7UqFeVQHZAFhNrhBDQGGZa9fCShVWWu6Lg4A1PM5ZLqyH153",
  "key30": "5MR7WN2L51GWAeowPHn1ccWTxc5umVkey94toYmfiLVvpVLDDnYJLf9nn8JGXszWoCXmVmHpUP1e2LPNtokt6Zdw",
  "key31": "3M7sv7RLUG2TPNYk5RymZfzzdpv3aeSWyByRq4cqoMWB7CvWDzMeJPiGDXqe2yiXCT5aCZTvwFeGSRScgKX6Rmw9",
  "key32": "4aRtrJ4VUBtnyYGTg7AA56VGi1Yu1ip7kuuiFq4pAbwrrNrxXDCy1UXM29vpdi98h4YtVW4XFqD7KogtpJdsF9vW",
  "key33": "rRJkjzfZHVycJAo8ByP8eg9kLoc1iMsqrJp7CVyE4i2VH8vahUmoi9ysWCiRhVkS1ipN7AfakP2DLeJZVjPJSuM",
  "key34": "2eUsECvB6PtsjXsgEUrgc2hQAicq4pUoDVG99Haob4YPTWjYekxCXpsKfw5BYmUgoKzYwARhpjWJyGMSWomk8ies",
  "key35": "2sRkM4vcDG3dB2rYvrUHCpVbzA6KYA5sPaFtBM7GDA79AjikMNrt1C9dUdb6Zog7Dn3ScevZJmAdwoUkCEVyBJcE"
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
