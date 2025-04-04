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
    "4ZuuRFv5a6Qi3si5mMzKLRGSrwuQYdycrdXkPcNP491rUf4VsRm2HaUd5QnYVFA8ZWwmGEXU7H2nBUXcbDTXDS6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGTKtsRK746oiHZEy8WMrRwNbHd2sijFoo1V6m7W3ytGsKzTRkWEsSGLpR9Hju9pbyuNN6tRJWoPDmihXerjJdy",
  "key1": "61EsH1Y5GrWchHrjbZ2niqiFJidLy9ccxmm39ikERTtL1Ea6L7YC2jgKi7yhBbEGbnYy23xfJTUQWXy8aKQML5zq",
  "key2": "2zNJ874NZB61UMcwyKFhRGhZz88aJr2EQeZkdvQNg6moBY2tTriuNaG2pC1sP6KRCFZJe1Sikq2QhWPDbSaZQqtn",
  "key3": "UzvJB7GMzDkDNkqmvXCszdRTS1CiAzvVrhi3YuyCKgzUGSad8P4ScrZ8UiVF4XSfN2yoNjipWMAX8Lu8xapoAkr",
  "key4": "bsPoFzZCK2dthUsyRQQh9ut6kaxaVCFWVYJzGYm22wixdjcyr6RtWkF3CpC99rEJTvfBYrZLas2B8gjNhUhwM1D",
  "key5": "42YquznVP71USQCGpBF9TaPhDzggiuUi3kyZ6gdLfzi6d9NGVXCdF7aeXFmNud93uGq8vVw13VjZDTJnAJ3NnuAa",
  "key6": "isxuq2tL9CiYWnhMaTvUomMD2y6ZQmUpXLo89HkHtubvGvda9K4awVPQDGDkCrYnBYXrxNpnCZ7XW1wG7VHiTrM",
  "key7": "62VW2hKTUL7zPK7KKijmJXDJVuhApLL9roGvNP8UjBDciiTKbErfDbjy66wuc68jqfH3Evojxs5VzBN2GME6jBmY",
  "key8": "2jSh2L7c3S4LB6W3hh33TsrmpK4RawMdvX4T2DU7ZxmZkfUTxyXvaLnKEhESwD7BqknaXBTAZUTNpPr2VdaGfJ9q",
  "key9": "3E4p5kx1dBtVPgkWgvYeSLUsjRX1pkxgzPJYUPhpDx8aiKjsVwrQTvcKQ8sMdHdrbfQShQubG6diUniBmq4rMmUp",
  "key10": "2gxCCULBHA7qQg5bnTCC26VQ3AuxwzKKRSmoSCJK6GxpuaJXyYwZpS9URXF8Md2e3tAHyADVaJnqHHB61gWEV81b",
  "key11": "42XFex5bt2bn2HJPLKEX9ZWsQdN8hs71jVg41sZyQq6zGoj5k2Th9FiNmA8BPRk1R5XTYqNH1LkxeJ3QGAsQjquQ",
  "key12": "3i6YzLZjHUic9hnxPv8SHA7Pn83tUSXf7ZafSHVrRrKMbx3nsRVeKpegr5qzhzHuJdfBqB2i4WKhLCXTzGssdud5",
  "key13": "51TaiN24VGdk2ssMzNKnUNdzY51UKjcwdRKdHJxvRSCAUVsncBf9U7qbBN1aXgoaJqJ1ZTvezJkmYsV4ct523DSq",
  "key14": "3EcFjqM6PMdU7VX8wjZCqUs2vYPwXsyynJoF12nRgPJ7HkqjShQmiZdKZHmzGmo5BEdi2F79KJepHnH3b1wPYidw",
  "key15": "43WmiMY76XVo8ugQgJKbXoggjHBiYVZAPXZ3E6kxaM8HzTLWqStYqFrJ157MLpZnUhVwae1se7oBrJqaiKuqoMwu",
  "key16": "hU8J4KY1jzFXkuuQ5g75PCM3df4sarfBFmEYBkzkGMz25DP3qdtrqCjPT1pGVyJk29JAv9i4fdYhz5sToveNfN2",
  "key17": "27jDf3yJUQapDcFaWgSNXDMSfCvtz1KepQQcg79Vu13CEsBxc5zwwRSs8Sv7Xdht6zqQbJ461gb3WdfZUNX47sCo",
  "key18": "64WaZVNstQkVTVq39Xpj1qobW9wfaHjHyFeVZ7YFcmzUJ47ufk4YQbuq59fhrRpJfVrC1MHK7kJgEJZhZg3hL25f",
  "key19": "353db3b34BVu82s8oa1htDZdvzKkLPR6xbmsyz9pH73mZqvvuDdviiCMoBQKVmJNXgq7kNL3Zd1SkfmQuQcgo2JZ",
  "key20": "5FGEqVxm1CL8fW5ztZGJXN1Z8CmTt23WScg1RZDkDChTu5m79vnbEtg3VPQiRKedt4wRcvD1FFPqQLZbCaxgVwUB",
  "key21": "5oSK9EChDtTFqZQXVRd1wAv8F1hkY71gq5JRvaghk1FM1b3cu56bPwZvyd3Nqx85hkVsssjw9YqkSno177hJgg4g",
  "key22": "43cBsiqnREm2mcJmkh3nKoo8DMnEmraExk5VFg7N3ZHbJDUXy5F2wTemhfXEfWKENwLNj8irkug5nhW2w4ycJgXq",
  "key23": "2Mu4nCWhAq5efgeVHbXc63SbPA3zgihHXpZpwZ2XccPX9S73aeG4Ru7Xu3VFFKav3eajc3Hm5Jscm4AnZfWsoWxE",
  "key24": "67ctDdbD265bXsUyxoWTduq8dLB8MJVcNENH2iZHA93kPjCzZNE2Xv8F6GeJi7FiAcvu58gZhJexgaeMR6tLMa2G",
  "key25": "4gbBb9hAPGoeKHZtdzRTGZvL7DSCc2VbbPijAQy6RaPs28oFYHLemkXaZ7LL4yaZUETF326ruikcEKSKgDaXMPkG",
  "key26": "22BzBkcwiNJiD1Kh1y1qnXsqizxCCiarrQkqJ933EwgWzLTh4B4a4tyAo1PP9rt5CCVVcsDdzgiAeFWkUSxyhCCu",
  "key27": "4aBMhnQCAJjKFKevVnid7jcVMa8W5nh8t6egrgprpSAytm9vtkeELzQa9nGQYPzZEasywhS3YGTmjWR174YjvLva",
  "key28": "2uPv9d3gbXGAnmfnMciMaMccubXTn8uTcRqGTwo9KcMfuGR6qq5TSwP9jn7WzqyR6ug2hA2sK5vdk5Ue8BvqGg53",
  "key29": "mNzWifTnbkP2dwp2GhehTtvizMF3Dp5e2BNgq7TCKhJNf7sbNYdoNAbR1hSvCLqPNnVUT2yB1n4pp5n1dPyqFan",
  "key30": "tDpHGg9XTpMk1u1b4NFyyoZAkLvFc9gZKwJ8y7wFGbTpNtrPrQQUhzGaW7SGeBX1ZjQ3jvwnks5KuSKsvM48HR7",
  "key31": "F6X8arMtunhHbWcshXdBCsXvBaUtzCbaFCynrmuCmmajFB4gzCdANnAR9BAA84r638Y9zDki3nJ7jPmoofkncsD",
  "key32": "59xPMpvywUcNfEZHAdt4EyM3uDrJVmvJ38Gb6YnoDVUq7HSkLoFmUkFeprTvEF5xeuXyifmCFkUaKD1sUGnsWgh7",
  "key33": "2bUJe6WKsNj52TRUr2xUg5PuBNEWkqZAbaoVN7f3o1G9aPHGN3PH1CgQEv2Lr9bjmTY78XqNNnJvKDmpRaygAEvR",
  "key34": "5NE27br9pvo2fYvJisVGeFFUgcoAu4qjHyMJNZmYt5VGRKj2rcSybJRnZhsCgUixRuvLFmcDFHueeTdDB7VuPS26"
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
