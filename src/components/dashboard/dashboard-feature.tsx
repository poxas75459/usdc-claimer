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
    "5F2S9qSqvcpAhMqiJBfs2QH32DusNu9PJV5GiPnuvReGZtMVCASge5CNnRD7PRatb5wCrNRPiMnVZV7mjQDQXpiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383ySu1K2rTsAinXxbPPvQSkziUgox8Rcj7zNHJFK57yrE46PuMXAES9KqTcZsdYmkE5wDxAm2KBud1w5CSZKoni",
  "key1": "3XEyRENtr9Wqir2KxVq7SnmYvRswGWfSfTy4Vh6YvCE14sdY6uLgRzN9TYFuk8n9uxH2SpiDBZhcMc4eqSQdc55v",
  "key2": "466szvpi3bDNoowCwD1gKXhqbA8YSkauRgirpfBeUU69fNQWiG6tZZ2xCgGgCQKSimxPyuaEozKZ5EhjYPf33gCE",
  "key3": "3feF7xStLdcJ7ocKgGgfjJsdG1n4XW9YRtsUPzu7WAPbUrQjcHuRK7pEZPvZW2LwQ96r3e2sLCiizT2okTM29rKA",
  "key4": "2aVwcJZUfu5rtQn348j5ixCL33jXC3HoJzSGjK57AH6oFnaUoPkUjKrJkQJWTRC1kyo74dgWcEhNsyDyjxukhkAp",
  "key5": "3MArWYWaGMjbekYEwijk2Pi8AnScaNE3tLimV8BaAYsiqFNr8b4SPTmzhtCGjjichJwUZY6VRRgQWGAJtn7QmETu",
  "key6": "GAbMgfV9mHprTHaMRWLQdMkzNFE1Yca6C7wGgAiBMkXDhgB2brmmpXTLPGvvmFBYp76Du8i5NKwpyKuSj2CHhdQ",
  "key7": "4pTWAoZ8MBMEHk4dWzYWqihD36KhyLt3jMrbeXaJ4MqJ1SppVNrxvbAgAbseM8WvtFVwtD7vkmmTpApyiFUw7rkG",
  "key8": "2JCj1iXQjacABta4mRB2L4pn1HXmPt2phCVZtrVyViS4duASFT9QajtfJfkFeRVAzJXv6CTDLcVysrSKq2SaDSGK",
  "key9": "79AnKPHaSsWxWuesBrpmsd1VZZHT27h24D5xWNDiESLueU3jV1k5Br85apd3eX4Zc2cw337iLmjBXvSkCNmkNJC",
  "key10": "2kYjZ6o9oKSjuiizdq7NxSL6PwWSQTYNcsuELBYbEMRY759pxScFm2vatLSLjm6bKTpVC4srwbPSLY2vUuKVsqkB",
  "key11": "tcQEtWWcCR8iFQzKaMd42BE39Kjbxz9beNMYWwyDimiCjB52Ap4kRjtUxXjzdN8fPLeGGGLptXygFoTUBnoS1V7",
  "key12": "3BLQBA5FQDadb4uTowBGDMtQ9LfKkhVZ8GnytjRc6K9MP429DrY6ncCPNXBbCGZv214x75vt2iaMkpjx8GPLTngS",
  "key13": "4VJBou26e4BKFaBNsAMw4gnkts3wyykj9nwe87iURA5Du1WmZUCnMj2SWQPmPJ2vL6suYmCuLa3YJEVkBowv1t1",
  "key14": "4X8uk329g3Mewb28f8UkgeASyAFKARugbRWB4Veb4CyHU3to8NxoqiSiEC1sDGFmqMVT1AimC6vk4cxb6SocLx96",
  "key15": "ysc37pbxCJDWzgpXGcGtuVzz9bwmnhHJEyJxLjVDnWQAH9qxYrjBg3ydGrMi4CxBvhQzMSWyqBppoHXxrXHukVo",
  "key16": "5FSnTFSeb2kHYnZ5DZq4GzWUQ9hcc8bkuJqddXrNu5M1gX8SZXGCCKRY4QGPP3XopiqzFoQmDvk6Vp9hTF6vGyo9",
  "key17": "q5pQvapeMH6gFgCpTQf5bNC3ppsAGkAaNyrebTxGncDRBpaCYfHjfmaL2vMdFj5dhzcD3ssUttJ6GbdZ3JP7vv5",
  "key18": "2vCbs3wZHVDhgZn86xPFFz5nstQc2VDuVobQc1q8wAicNVJkYCzo344Vsjx8w6xR3jKVAzKhStRgZqG9rqfrGjti",
  "key19": "4bu1wbnuu5YVd157SEZsiogE8dDnnxBPtsaz1E3NZe179ve5zV8wNV4XmopdcPTjd5TLibkh7WcqiNswNJa1Djyb",
  "key20": "YUziPUXmnQTUt9L2Hi1rK1faCJaenz4DR7Tg9L6Ndd9zD8hypSECELzf2TBtApZN92bmKXodmsPFFWkzKjX3vAq",
  "key21": "3oVnputA9eAHd5FqDCNFvZkwnejtYNhH9CmErjzhaGbF6DPkq8PmK9dnssxEv6Q69hmBJ6hrmmxE9Sp8B6k88ydk",
  "key22": "2sqwKLGhCn1pz5MpJJuJZwFjVnQ7kWSFHhZN5uqRkrjiZn2JB8buJ9QkobVnkaEvoJVJhPq6zRQ2FpZUCfmb2VpE",
  "key23": "2f1ZdZXnem2zFpTWXb1Ar9HzfkgHkvP4FnC5x3eTRPy6hW2Pj93TzKYNo6Z6jSbuoMnB7wEytcuxJXjPtQa8cfhd",
  "key24": "tPuhBTZt1nKrUaRdVV1oLcfUumUxpjfaNkjdR17T48B3hhxKSNrnVwrJ5hvHvahNzesUVRdXGD4msH18eTwTqAA",
  "key25": "3B64vKZVtauG6maXH2xDPrjbEpN4PZMcSDG7d8LtSrcdzX1F8x35fNonjfT2B6fBW72BoUJ6kyQJqaJbL7d9RQ5g",
  "key26": "3hRSqq3a1DZ2cUt54jXDWjbFAVq9JJuNgNETckutVXPGoG8Vd4f1wZMyoVkuVkaZ7G6kuUrQRqxvRJyCdCJ9Sp2h",
  "key27": "2gwrFTwUEXYWCu9JYbocaEDBB84KkjQutTLEZ2cuPy4yKLsPUJFZMsSG7WiFy2shud43Lc8oVJhVp6utA5ND4pUN",
  "key28": "44YrRph2uD6hdGkMq1YQeFi9A4xM3C6Cimh85pFLMUqxDgpBGT5hrghWimsB63AP3oMGgjMA11hthX5zMc7DdR3W",
  "key29": "2T7MWnvArDwfrB6U1YwZzrpYqF2TYsn7jroSBMdhYiMM4GrnLxABhCeeyUAcXk3cz8qPsZ7WG71jT3s8trDQhiBe",
  "key30": "3ffEab14MHqXKSWBt9L93ex2TEPK35GjPgdKkXmwNpgFgifYMagMB2c4KktJGn3sxcUMUTGgBmnQMSkXhwvB4rRa",
  "key31": "56NS3JUYFHnRtKJZmkKvGWhkBHY7VLjF81nvmZfULPqMrc5y9UrACDvhjGtG7bca84HVMK6CpHRAWG27nbYtUQ9u",
  "key32": "3umWhrPGanBfuDxbmbzkg4Fzm719meYemVc9kABAhqgmyyBQjBWm9M1amtGUtJwHom4ZXRLPRvW613pSbacRMk7b",
  "key33": "3myjwV3Pf1oi3Y8f5qqEUFAw58XBmLj1TYXSB95yNygZqqiKumQtoNbCrBgANkQDVHzo57NHDGHRWydtXJmwQtUT",
  "key34": "38ZoNLDyytcfwpoakyuYUTyEvs6zp47iv5Q9514pZbzacNGXHYdiUCz5AAMHfXkGo3YcLQKiZWBo4j8Ag54GSGpv",
  "key35": "2EfMJ2NXGwYsmwdPXNLarDrzseJUDGsPJynVbpoDAY6zCnECGQx3sGzadJv8Dhj7KLo3KfdaPfmpmyoiAzMhsPAE",
  "key36": "38deauNyaqNyFhdesqeQatRortLE7dUPUmVJLZGHw9n7rELqHnp2FeprCyetuvh6MwtX9somUKoUuVER14oUUXdk",
  "key37": "5cvtsZuoaMukDEhAhLR6c3mYtEDJe4aEQ5igBEx9b8743dYwS6SrTkqW4AVaLT2FdDmVYK55aoheWYLQa6zqFYWw",
  "key38": "5rm9dn365TMays2AEebGZL4vHg4vuWmBaf6qrocZ9mQSz3HArBjfuQuPP8CsWh8KqJqnRsc6wofQDCEQ8WLV1bwd",
  "key39": "4xcHd9K39jXYymsRWyb52KQb9KBhWCTA6Wddyx6Jg2nV2PsoVm57nth1vTXGaDiwg34tXkUSs9NmCMbxHJm8Dsch",
  "key40": "4VfwPp9EzohtVR56pz59gmU7JKfyswsP4oEyW1UUh8TwmCzuq3Lb8hhgroAhHM2sKGwfMtCCq1naStkymUojwo4s",
  "key41": "4TTZ1Ahh12AwHN3hcyZd4w27z1ro4EUyUdo5Ab8CDVFVjBdgVBozPJ2vGxRyPg32Zj9z7jbATZc35epWSMu3ViHW",
  "key42": "2EZCetBywn6JAak8DtVM872J1uAwu3uDKfZDQLWy2pw8WqwGrYcK3ezjP5uoRf3DfShzWAAYnBF3xGXYTAewik1T",
  "key43": "7Ux1NBjDtT69jYBvUVXxuMmqTFnkyAQGKJxY6iUksHA2A9GMb6jAZYqacEVMkU6Zj766i5e6hQKB7SCEimcpzm8"
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
