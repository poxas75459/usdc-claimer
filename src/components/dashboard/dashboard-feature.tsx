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
    "3C9ThDbSm8EaJ3zzri8MfD2o5wLC6oMRw13PF53uEcPyfTK2WiKjBPgJx6fgbH1Fim47Jt5Rzoc6bEBFYar2gveF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CgLUqCDAADX9VZPhTSmXDkMD8z1GQCgY9yPn4Pn6rPcoadng2uZ45uSXSntgxWLi1USFFnuApLFqyTcoHEYfppE",
  "key1": "iJ9TYoaWuWe2iv5TLSmZiAgKTKrkCTgnbhk3zC8YbxMSazCeL724oSZj3WmMVSekj2p8bdeWu9C9wGUUYP6A9ZW",
  "key2": "3DEsynU8hAFvKVQj6GLQdm9ncArBmXCq5wUWdB6kGp62fUgrQzMi43QFhmJ4udkopJ1WuRabQSeWVi69oh7H2qzF",
  "key3": "5yqdXJuxZ2gMbMmeHdZ5wzpN4xFPYYyQGoo2918muCwk6wfqcn9QmWZmR1US4uNM6B9bfABC4MipTZxBAyNTpL6Z",
  "key4": "2KbQa98aZdRbdkt5n9TCQTZuw4XmeteZg1iEefaMhzS9wiXbzAd1TxgY3cb9x8ubEhY86UvELdt4UJec9hDmo7wU",
  "key5": "29e1UV1aokBBJNtUnAMcJM57TypS7JmYALjNYjWvSoBfuvsECwkhgf71Akvt2ZcJXn4QSVrSvFWDadrEFBCbwhUk",
  "key6": "hyNmFHQ19TejWyqpRYxruqo7gTJbNpF9X57c7n5FpSqJeZnZXv2213bS4H5iGLgNPYgvHfZM3cm2jJkFrd6AbxR",
  "key7": "2YDQpbhekKZgqiF6YdyKLDWDcfUcXnuHfFW8wbQEck6sjLX9wF7PAosKhfd8LxXoZntPXpBTy2HsetXbTq3ZZmgT",
  "key8": "2EvUsQNXyeviM5kk6H3u2DPVCVhgyVrKirkzZvoVxBJSSJbDyErmKAUd2F2Y1mZfpZn5sGKh5xphdAVDE4aMiT3J",
  "key9": "3GMfusj98KEvKJpTMzrtnK7FtJx2P5WpMnGHUis2djPVnXJCr8J7xf6bDAon95bVxmFMcbQSy4eSvqgnWhVoAqdX",
  "key10": "2FXGAyQg5TRnKTFkuR6cUfzXVrPYgMjvWY65BS759kuHkFgnxvv83T58NfYEqT1hCazJAhNxzooWZ5WFfn9YwHse",
  "key11": "4VcLhdcazndfFmfnKCdogZyaN95YVPLri6Z8k2fT7MA8ACEGrG7YFLrBWNUDZt92VcTvdWZBxqjc95DWjyeWCQnz",
  "key12": "2LvJcV1oRFnPJQWKrze3Ydysp7tE4tKMaMU3oVf24DMP2eG4Pj86inUX5RFQqyv8HcJUuR1AogEzXTsgGuqqsUx8",
  "key13": "kko8qufhNDn6vKhrsU7tnnFEg1az7RKqtb2v1F8pPVFfQXUqov7a6WfifpBVhp4Tgzae7rCuoSrnXMGDNNf3kH9",
  "key14": "2HMVqfE6ojnqCT6ooXq3mpqPgU8951my5mMTtc7Phd6km49NVh5sGwjwVFieQye7eu1SLLYez7k1iihtN2y3F7d4",
  "key15": "4w5bMeFFECDgpXX9y1h3cKija8DeccAGimVpdHSAieStM3o6DN45Gt3Q8cN3zggKRn7Y1Bw1h6akDWwXTn9TUbSt",
  "key16": "4Fx8TYKAGi83kTW57pCNsni1d56DDY8sMkcmP7hr8RPYaNLVQXPxXkjmPzapcyD2fU99x81KDZ8rj8GRKBR7uxd5",
  "key17": "3NkEHWWX6F5QacpQTam2UxvUkyvwoWeyNCJiXyJyCc9j5edoMKXmdKnWHcgrFWKFfMHx32h1Xy1tnrn4KUDGAYss",
  "key18": "4A653W8q3fcnJrRbhENMV9ARSn6LsEM3YbD1F4sXXerBn93Y75e4fXGB1RPryXDmJZ7RSv9SqRdf6pzWoNtEgB21",
  "key19": "497TKPdeSyMQWZG4jcMWR9vvN6ekDAHq6YdZyMxVzCbuTC2hcUaHaDDPgu6gqxtK6NuneHkN4Ra9b5xueneKcFE3",
  "key20": "4jMPsG9YnPorLBuPejUPerULKxSDw9f6LPdiYLJjCmq6idj32YRYp2e3u3pVJqzfep9hRn8cmqiNMuHKWJhAnsKo",
  "key21": "Nqe2rJJAB9Wd2FhEKUMrT69x6GHiWqF2fNeFrswqLVU3NPo8iQUpDYoVaj4noiJ7cGert6s4MycWzjaDapoFgsc",
  "key22": "243U2pSXAzBXxJFJPEJGYQypC4WUGiCS74wbMHcmWtF5S1d4kh62jYcBC2Xc6DFc3nLxFm4kfRPuwQE2oRXcHBEX",
  "key23": "PxE18vZHWKin1evkYimA7YmxdD5PCqXfa51okJpWw5TawadmqVvGQuh1LXCxcankyLf1JcUH6MYrEw6EFr4KwfB",
  "key24": "k2mAm435mymBbcsS1mPAiQaqYov9zv24bQquyuVjmFiSoqbPpBRmTXhwueD98hrrCipepS1eBejMmcr3BAqyFZH",
  "key25": "2xSYfp5spGG3g2dJPurP6arV8xLenSVmweG9nKsxR6pV5vBRSn4jQFUmuFrRnia7DrwwC4sia7XLoBhpwDEmG1Xj",
  "key26": "397TmGAkGDuGE3YUTU9PSrHE4RC5dUGKdoYaFVYFm5MmrELZ7Z51A7TxjtkoHCVyuGo4g9oy5w6Ut6u38dAJWmYz",
  "key27": "5wC8iJeBVotpvkHsUKap314cDXt4NbJTkZPWpBnPrSdWM1dYfuApYK5H6jYJp5HxKCT1XzP3avb4jm5B87FzhCzK",
  "key28": "3GBhuxinbi3ACTMbYWC9z6jPUy9BCW2xCErJ7R4ph6RcRgJgZseyqRshT4J1AxuKD5c5nZk56dS23TiDVeT59ayW",
  "key29": "5K2F7c88CuDPnUD1H12ePeDftJfDD8SezJ1VbuTBTVhT2HVAtCU3gof3GiR5PSKS1ypabzbJd6RR1LYuVzdANjew",
  "key30": "GWkGEziGAUUca69t2ea3tPqCQdHbJaxWZTE5DZmsZ6emdhjvYLX6EuQgGREbiZJsti3xheeUicqGGV6dHUGbEtS",
  "key31": "3hML3m2qsfpsZFXUoBJGDGBi8ZczoD45ihCcA9HVXzU8VJKVJfvaDQ4JGwVXVJAyU6MLA33kSy8WzmYPCR6ZdFJV",
  "key32": "5dURTaNg3hVyjbtEZNoL2a3jG53MiBwXhb9UGeQ1yMqwFrPuxNjmBXS3aFqBrKuDuQZNg8dY8wwyhgHo4nGNYvoG",
  "key33": "TEFMGGuwrCHidzCi8NikyP1YY8xcuqSYPj9pqa63Ee58z5r4zcADfisiv9RdVBQ8ppXJR3kLfkt6RDAz3CVSRYk",
  "key34": "3enuAMtjhfg5UcCcW4NeZEHyZDB1oXBkXHfiSe6kwBLxNjwDNc6WA27vhY1zr42vu2JrebH2PP5byrvQhBCcyjoh",
  "key35": "xzEAAx7v3CeffbmmJnbxxevRAwqL1xLXRnEQsGZdb6A1KDQ3S5eaXJmrP8z3n3ojfnV1Bapc2XhyLk5nP8Q2Jtk",
  "key36": "4r1QJgKgewBtDz5XC4m4rvLJhuhHYLr9exMhUqDhWWGQnu13h8bXQiEgbxWg5NkaCD8VajbqfiB4kUDks8MyPirU",
  "key37": "3Tx5AqqqvCPPaQ5L2pGkEwCP3wsMmMUWCRykZ6Dmg6hduVj2XN1aj2k2dF8eKnqfBqj4a68tjzBbuWJjRqE81CAQ",
  "key38": "4J7XqP2WZwzFDZCRTqndzkd6o2mQfN2bLARRj4d3rqHNvtUjdaBxToUf4vdq8RwPWxBpaM2Xb5XbL1NLaEFLhzi1",
  "key39": "42UTVsRDHVdmVuuKxkbE9T2tGtguyDZNaSHXN43WNxCYtYJVf8CJ727HkUpAjcDaJYeeTSRQ4z9SqHksozKvwGdb",
  "key40": "2ARePWEoUutSk2etn3rjErxg85BfecatxKrfdfwqy31AHkHJ6Z8iCwZbdmRQVPxVN351VNQLUGPnnYGQ5iSs7zTb",
  "key41": "59LoXHBiAhxhojVne4k2NKNkHCryzF2rsSvx35Ky7KcBdA679LdLsTY52kWbBR97EXK221m5NMDP9peFAPuoiFKV",
  "key42": "4kwH9tukDb65yG2tmJNaiwiV42m8SAjKWXLumpiKsQSC3ggPpJmmpnHmdVyC9U397vuEAS6eCBkBc9brAynEnZf8",
  "key43": "5jz2t3rPur1efEszPr6Jrh5ddroF6aaby9zxPQ2tM5msCCi4U4mAWMrtzH7bYSTb9Pvy3vYggteDj9zHkkkxNKbb",
  "key44": "51x3wptWuCzogntnb8Lt8AhrCw5oKLn8ZVAWM5UpuRwwGsoNnbaCiigoMLL8gJ8gtFaJDs3LZK3ckbxqXarSE9kR",
  "key45": "2J76KeugHAZ1imX69ipgMeJ2XxtBtNthrbBQxE9tubMuPZdyQmL6nrt9AnUDJQPXXrCnPksJ3DvYq1gdk5EjMTmZ",
  "key46": "64fkeguTfrjm6icL7AvfvUF4QZg9m1oUTnUTHoE7Ygi7oXo2M9MSrRig1aZ9uTCXNp9Pafkf7cL52kuY83cMRUBQ",
  "key47": "5k4waLzfkgeiZMe9LVMBjj4cRG7e26vPsRTnKY8FKA9PnmGzEdA4EMZmAwHQqWwq9TNPgckoRCmVkDYWZ9LcZUDm"
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
