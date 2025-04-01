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
    "2qRGEhXMq32mA2cP9st2hWtFArkfwRsBmxopZx27jEL1ARr7SJy6QQJLd4sgwyqSR3atpDdje4DtUJRzgu5eLkB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mn6vfqkQaB5c5rusMFJySBHDdSmYE8XBX6eX77W6XsAZE5XbCx7qxx3GXzdM39YCNVcCtSx8mPt24f5kQ6RW7jw",
  "key1": "3RSPZmP5btd7XZGtbAKt1BHTFDhLW4v9vXHPZZeXz9csj7C1cmjDPGcHi2dmppqm58DyUwFeGQWqBVHSGtBQJm6f",
  "key2": "5rwtwmoJ36wTpNisFt46zEr8EpSko2raorcURLdsp6jbRDbVmMSCaPDYk5JuegPbqbWh4AaeUVWwyvDYJQx49vKU",
  "key3": "3nUDzZ7N2jyEtFS1uwRCMbHkPGCpskfgSpP4qETLKz2a48pTex2bJHPjcY495euy4rmh1pWtPCjrH7AA9fCkhM7U",
  "key4": "3c74eiahdnmnXz3vALWJJs8CjpkCUghHARf74g3q8TjZH6hFa7zSBdXixRuDxQBEtSGjaRbvWTjSREVRkrMk7jf1",
  "key5": "5yuf8EHxwo8jopfjz3Ln1RZzsKEXWf8FjV7zn87LQPWPfo2V3gf8xBvwHHMV14KyDYVa2hLZggeAfL2mtkqdqLQE",
  "key6": "3TciDBfRSiLffUjKu9qtEk6jJAJQT58Lum9cXq31fK2oyVTWUSeAN8uBPa9ZHHRBQ1oJTULCzTZGwckfcC3DP2bw",
  "key7": "2cAQ48U1nXEvmMYL6Ft9D2hZTFxWUhUh3aozWcNTjP4GLQwgKknsrHSSAMtsN9dudZcjwS6UQa8rHAnFn7H3nqL2",
  "key8": "ym3BHketG8axZFexHS977kya2KbRtUmE25ggfK4VZ5pSzxumbbbjMrii42SzPwPd7xpmUGyE9VFbDUuEmSbPaaV",
  "key9": "y9tYvAgafFb5RDdBi5S2SQ6Bdt1EiXPa6yo5Q18VRz7xLNvRPY76e68WvygDPLp1nn1XxmeVvF3583yMtVgk6Gy",
  "key10": "ubAR3Dvwsot5vjnjjeVuz4Sn5yXUL5RN9KTA7CFn2pYto93ba4PJHzUrrjWxca7XAFtPKfwW3VQtHTA8MxK23DD",
  "key11": "n5KP6AiY4FvxEL7SPXQYWJv4iL6V4qfNuoh5qNuKqi1GCocdYeP6vFcsUqvDPJt6A5bTFRRtgq7T6RqGYVxoP5K",
  "key12": "Hc4SuA7s8L8PiTmkksFS8iGeu4BopxHtGZwJLxQJoMvEEbfsaTHngvWwACUyG4EacbkKcL1jeJTNQo2EAHwVu4Z",
  "key13": "4bwpXVbyJWN2JUjmsePTf4CjYd2ox5id1mR535NMW46Ld7iPkcVhWo2NzdzQv7df7FCBYs7p9gs9GMK1Du73KYxF",
  "key14": "5o5Q8fbb1HVkdcc6Ygt5S3EhU3q8uHiREQeVQjHJmVHUoEMwTc4ErB6Q2fS3BDjDdduFmfS1RY8xYnntWVSgLNkY",
  "key15": "65jrDHeAKRWaMrYt1HAXaSikCUGnR31uBoS2Nta2AucMg7FfxErfqGUdnrTE9rDWLvLKizVkNLvJmsQtL8B3WxaB",
  "key16": "3TesUGGki4ph7UtB3jho9uVipA8wpVvabPsBt49FjoECZEytV6wFajJMuENTk9Q7zZJvo8L35ChUov5iiTbfUgVK",
  "key17": "4n1Jqwf8fYi7y5sZLkSCPjvDsdMH1TMBD91tn4jagUPMu79RKX6zaGLJtjxr6nE5e7ahWicPp8tTXUJx3aGqYmS9",
  "key18": "G7LRgTgqfpeCdQrgoQ7rn1UDT4ADFmnN31ti8xNPvyQEXMe8LP1ANTebAj4MeEMiUbqhnoZpijUrcST6rc9YBrH",
  "key19": "8faVjsKJG8ksaxmEcAUhzZuvi3ik8FwXcveKC9BACQocgptPuYzmKvLzY962FEts4yK7WWFd8Ny9ndN1VDXATL1",
  "key20": "27uL7qKxmWayEEof2Cb7GhKdohkXNhEvMvmPcM4kCLfHu8hx3N8gyEe4mUHAX9uHLe26fEJqHnV6UpKfM9eJFVXh",
  "key21": "31gdXAgEQKmvF1PWLVN4Kjc8JWLf1QggqPXBnFicAdu6XgNPFZu6gSAPurrQFLxTD5pzMMhU9gfrEVU1XMdLNLn8",
  "key22": "35R1o3zAU9KaBcienV8QxvaukhexiZuT7XcMeqXZKAZyWiHKy3SsZafRpowT76Ru5kDGo6rLrmoGj9vJygvc9xFr",
  "key23": "2sHqaWbQPxdHQzwz1suJEZ2PEWKi6HCj1pxsicG7LSxrJXqWfcQRPcGRa38FaVrCp1dpcX5WcDDTpnC1KfWd6Kc",
  "key24": "8CdFwZHm8xRTmdD3zpVujT7Z6GLSFUyzACEpnVEvaCcBqb42QZZRgcDoxm2aVsjQh3kseY8rZXQ9a2iRscVya69",
  "key25": "3VeMxjvN8eig4cdWhnmHCz4159Ra1gopuDQuijeCBVDMonRNaMZcKwzuLZKQMYzfvEYUimWxU5bbjxFQUTRb2iFG",
  "key26": "2MN3w52h56ac12wGh6hqophv2m9wSZMLEErz14Bm5RET4UbhyL1Mn2SB6JHNRXNE7Ppqtg76aGJv1vqwf7ULzXJh",
  "key27": "37QaiMgqmWn4UZf1jRpoBTC98hnDf1XFZ7m4qemkGvRzTGNkvGVnFRaHvkc3d5v9K616ydRS4P2m7zVRgoBgJPx7",
  "key28": "3UqkJ8N3AcbJMDwWzFiAQdkBUZ28gkd1eVb5yiHRMPoukniVaGL7n3FNAhMp628ATaqYeuEthRau4rkmbTwRUs8o",
  "key29": "5EqC8tuKBXeUUCpyhafn53D4Bfr5hzHsZRr3RrxzkpDtf4vhJraFsMLQR4NjGLe7muPVrSDqiVaPPtNrbmFTUvm5",
  "key30": "3PJ3shiSGvgcmdrx9VGqHo2v62gQWvZz8MDtCbTwAFywEGm4pG4ygNoyPqPuJQapDFaFVLTyMYWWtb9K8hf1EYRG",
  "key31": "5CZ4iJC68eds6ArU6baPZJSumga8w2uTZSBg48VKfFSFJ2qgUtKGBV7XHjcRq3D1CHTHM6kikXxJobJVTHPTaACS",
  "key32": "5hiRScik3HGo1Xpz9ovYhPGyFN9obxe3M5tLHVcuQD274yJdaJT2WdsLfkZgYXPMeWYUzFJnZQMRX8fbQ78gsKea",
  "key33": "3hBsAXyV1Vn9LTejSMHFY9k7bY36g55nhsJ6K8tWfnU8wjQdNSMkNbXXv6zWhmCstXECetroszcGGMrTwdhwVb3",
  "key34": "3MRcE6GrARSiFLvRfatRUmTWcnheM371iDjudhcMPf8wSF4YJtz6yhvaJkEwsQWyBWCdM13ZL6yCPtXS1zzEx2F6"
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
