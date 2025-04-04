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
    "3gKF9mGpSuYbGk3iYWSPzc3UdTRYpaiFFetTo1DdKA5P4HPTtabEdg1Q7DP2Pbj1qymX6j1rJ1q2tm6HmdmcPuB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZeDGsVkP95BQxcCm6acEu5rW3at7RKU2xr9CeDMEJ1AWPB5NC5cA86ZN5E2GgAfX78Y4Va2hy2tEjt8RTYgw71",
  "key1": "4tF7F3FNzC1zHVKM2dbKcuM2rRyJjpNqwBMmBpxTGcjrcTG2Juobn154YXqQTDqif6VccLfANup1Nh6ECrqZjY9E",
  "key2": "VrwPCoeVyrefCwwj1jWVxjBQWdbCQ5PRhCXaibp1xUNKubsnzN6RREZuucz5gY4xkJ5oChKmMgBdi83Q1z7ESoA",
  "key3": "2WxEJzWp5d7kstoQK9SZ8NFwZmVpa7QWNwXEEJNm9TMJBqfqvnfGSTrZk1vhWfBnFC7RJxe7FmmvXTdeso8qz4ha",
  "key4": "5GdGkiMdqaJFiDzNWApwAwhUqbwNYkifUknHTH9aNswx9LGRMe677uqwc78B2ZimwhJPTA9LnjWb3cJYPHtUN2bZ",
  "key5": "51MugoxjzRZNRArV2pGDu5F2BUFk7YRFkRfzVATuVDpQeqQjn5APXQr2F4aGGTtjZgQPn65eFYcA977cwovsyA5B",
  "key6": "yVF8kiTJ3Km1FC6mvmuQfJ9ePe3qzoZMbsjcbZSHDSWYuo3XbaT9DWQZm64VdFZ6ZtvhiYkTnijaXaoX3AFK8SA",
  "key7": "25T8a6jU1MmGaM67zZAmFPPNxdqBFLqttkJsfFpfRe2pcNi9LgoLhHB1Sw6mafLVPdLjT7sjZA8gwA9cniU6FDFT",
  "key8": "5gaXgwJh7MscFTD6MTck1h9PEvQ24ssviqxiYZo5jGWiQ48tf9FjsC6jW3k2GR4aB2i75zwYheZ9E4zukE5W65hK",
  "key9": "rDA2FDzQPm15yMiaMdzy2JFHrb3oyqezb1MWZKLyDPj6b2dqfgEThrHqk4rQZqJfQVxcfhKgpNVrWTsHbw4ari4",
  "key10": "4yHvAqZ3G9peoG256Wqd3xQZUhmXJTcN3NqPZ8fewGsfevbszZ7TYRWgph3QVeHK5E7b5mPTY9eksU4ApDdcHxg9",
  "key11": "2UeZekd5F1ExSZY23gJfmQFhuttz8DUWBtG2Nv6VSn9TDNMumvYXZ9LdA2L4SAyJpwN3uoRE1Qs8e9AKyy7NH9WH",
  "key12": "KGDfUwxtnFe3sqA9XXwrcSBb7isCAbcJWUhRYzvFx5RBpNkox7mM3NbGtg9RCG7HSVyxoZxbqBPGWRZ6kZ6ou6J",
  "key13": "2G43hCVEc61z8dX2ptQudjqxjcRQs7Z8hpLuZLP5o1kAWTvgVK4r5hAiGQ8tFtcKj6vPw4sbq6576dQV7HsxZdrp",
  "key14": "5CKcCeVUFezb98Yf2NocdFmPhxysC6gxM67Qn5JdmBcLbeioQikkdMgckEDP8pCkSu71K53mCv5rb5DBjovpRanS",
  "key15": "4tuLg9k7UNdDMTUYw2zx2vZL13KV2yQWDPDpL5VdueBMxpFkWhHWhqnYqRjBpkNwrs55ZsKP1sVyoMbncv16xH34",
  "key16": "hhvJPw31dJsazoR9bxrogRhb43Fq1mRpeWfMyQPfmGSCZJwVgqz7hQngHFkE5zPyx7Wce85AwCjWje2uQ2wYa81",
  "key17": "w959GtrVYezx7bfG7G8MTBwmewncDAEj1vAM138YEfn1p7cHnobvc8FUrHPnPGUxo7kmLhzJRssP48ypNR3jsUE",
  "key18": "2Cdwx2X1by31NJdSSc4urtxie681cGyv8fuB8rh8jSsbKYs3ou8NZadeL6vKmeKN4aycMQZwC38uwQTCYRTfDUP5",
  "key19": "2mdo61Jgg7qLP7ZJaPVNgpWbcJmsQ2avy7NAmdg89BZyEk7Z4o24Q8quVYyZ4tyTf3eHhWSbeP6ddmZ3xt1jdy7Q",
  "key20": "48w2CmtR4Wu6zUef62VR2PDWZV8tNjqK3FJo9j5oGSE762T9KgCJ7BK69Eg21rs4c4KxnfKGfD9Mwwwn2hWDDVEc",
  "key21": "pFnKvJ9dPJD5XU5M1jrgzwLJnRWWRafW91i5tKM3CV9Eo5JLbcLY5aUQFFxv7EkNDCu4DVdXiq4yGuG7o4KtPwS",
  "key22": "3BAVpiSjas51TfMsySaC69uCsBYpqJe5hrh395fakkUbGz91nZ41PjhaZ4JCTiaCC4L3x42yjHzKGARLdqacPGzn",
  "key23": "4vzTYNVt6JqR8U12SunA3mWf1g3jjfoUpLVZxfwptPguZQnJCBqbwFiGxRC4DYjQg7UAALtxwc1gWaDJ1Ji52uC3",
  "key24": "WDywV8ZUDygz1JZ8Jf3ewPLL2Z4FQ2JEsFJP5X97M3uGmLAKzyuDtXEvm7HXTmtbWZJXt8eFcCEPA9f7ukhUWvo",
  "key25": "UHPWdDUSP1Hzp1YM43oCqyh3W6EFxRwodoTZcakLmmmpVm6vGyHGB4koB1nWR677aJQ1MqBGMAgyJrNhF13zGKs",
  "key26": "54Tpbw2kQ9WmCYoT99d4EpK99UvaqqV5ALwHbqnwRgdGJX82V76u32NLxjrM2ebLieYszGzBAUrfy5x6aDvkrtE4",
  "key27": "2qeL1u26x1foFLqpxcWmpYXTF2thf1ccTzkw46saRMj6W8C8QtBKDbF38JESUdU8upmDRxphDqwyhjFcUXd9pkq4",
  "key28": "3vBUWmKaMxwU6iKBhqZWxT1rBThhVaUGStmeGEiKgxCFB4khSsJ2tAURkXYYcih836TAPNowetLzXbr1KV8jeV5x",
  "key29": "4kp3iJnCEci58jKEDhzoJGwFzPHWv71Zdb8ZkHPiYxaD9jTJhvf1S2npPLHYGtRW4Qr6ngms4qQRfoqi47LE92WN",
  "key30": "4DuNGDRPjyvWeSe7VoBTk6P377HVi61Hurt6X9SxyBHd8MfLEMvH6FdJNyKpynwfjvLCvPXb945Jm2LDQ5uNGF7N",
  "key31": "21k5cCFgTsxqd1ezHyASTLPR7vg2dKaXN8Wf6DRiZimHturqdgxADaqoHCZU13fzg2xLadqdUzKyWk8WJN759p6x",
  "key32": "5nRwkthwnCcKWFaVHcyPnYWXMGf1xfW5VdZFSjCxprHoJ27Pu8DajJqcAHwqUwK1mxw3bBVBYaM1rvthC9HtLzrf",
  "key33": "4egtod22oGp8tAoKqwSvUje8c4xZWsHwb5Mpv3Qr6CVEHFs2Pmv2Eq8xdLSinZyDUBtw3oXG8HAyiLgsCRjr1a16",
  "key34": "4m2CEBAw4HeEQ8z42vQvBDgZoZwTNLLzZn4k31ceW2R8CeMW5dEkF2qqChoB4xmA65ThaPd5q4sxKS7K3tq7saob",
  "key35": "59mJNysbkhcegiKpd7S4PXiji8BsW2bRMF8fsTDigYFFuQQy6f1Us7q6GNJfA7Yht6XNSwo4Mik9Z1UAjfVCZWoJ",
  "key36": "3J5q9tyva8aHi2NK1KGwuPNxWhWn3dbrS8HrTTCpHKXZUWUVuyb68hJ8S8BGJ6qA93mZjuCwEsSs79QGodvP9DCH",
  "key37": "3abmfku5JrGAxhzU2NSBRBR4d6mnDWKerRfsm4csWY518uAroTkBss97HMGwApnWuatguCRqT5yNcNxskkV2xrrX"
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
