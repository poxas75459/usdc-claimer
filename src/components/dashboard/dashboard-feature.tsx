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
    "3smpuWLyjk5NZWE89VwqBWNZvRYSyDWwN5ADzn8u6799T2SiEFM92voFReF7hEGBRWvvjLDXugsST3FKQ9Mrjo1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ToGM3aANj5SjthVNwyfAjfh1bfjNcYKzwKgbHpfPNAYSXaxvBYqVHhLpL68PvKKKnXhVUWD6VTeku4EaU96itmC",
  "key1": "2jWe1coL5YRMepaq1Tip8Fhy8us7WbdqikKMCh9Fbhq15wUgLCEW8d7YaLu8NYWk5sCZn3wo9iv4LiGrZnxsTJv",
  "key2": "kMVymA6JDh7uffQ7gNwjq3br2X7PLj7zw8BA6zTn2Wo4fDKhfiw8qSeSvrvMKGF6ezKsasWfdSzFCdiorGnzbpw",
  "key3": "4vuoYp2Dg77GbPry1VDJu4FjnPhnSeF6zDbYk3bWbgzchTmmd83CwXefcZcn3maHT2PgZny2gxx7UazYgUWwwwHj",
  "key4": "oWgeRsgoGE4qoLcc7EprdXQvCh4AoeNkCUcarBnfp2w3zJgdx5APkYTF5e4Lc9PBgaCxG5gEMC7zyYkqHuGu1Je",
  "key5": "5nMfrymAXayWFyEctYFbpGCjLLxZgbEWuG7VQCttDSUPYNSRLiF4AUooaGYLLdgfnWmD4RbQAtnpjDu9PSi6wQX5",
  "key6": "3khkmc68dDWvpZTmmpCYQxwjh79wDsyF5DV9ysNd6afQoANAuekSLHTEqWbJJ7UpTR6QuLCYCBz47rtCzTaBaAPf",
  "key7": "YTDzApr21zmT5o6tMR1kcZPHLvdFaURBEvPbdJgGdS4qroMcTpUkxprUQVbPLzp2LixyRe9hvyZ7u2P1vDdw3jy",
  "key8": "kf4SWW27RCn468cQfU6zaFT8wjE6SqLZeM66CXb7iFTsbcWedhFcAqBuKUsbpatcdARDeDXG34oK1M6ML9BmNJb",
  "key9": "563b4kXYSBTmV8DZ1myWSS2yAjk5r9s2p7LLnX4YyXxdimBAg1EJDFPDDw1apdvQgLJEybkR4ReTSKFGJzqzTci3",
  "key10": "5vC1AxfXBKcQnqb9yZPqSiwwibcum7v4qJkQ8Em3ZKMJewfcTHymUFBWP2vw924C2y9hwEBNnbJyDs7juvL53LHr",
  "key11": "2VYHBGwa4dviXmsQwRkdRALE4iTttX5ksLb5nLBm3wBBRpidipqMCRTBxCsDgzeRYtF3fZDJWQHRGArXRtzKRG9f",
  "key12": "5An6oPGNXfnYdUoEJHo8yvBt8aCi4ecqe1KxGZsrpwhBig4VDUp6rpAnCKFcPFTxscsDKsBJHRYB3sjmAkp8a9Mt",
  "key13": "SiFw4haA971m29VosTi3tNcyXtwpmdcYsRaumdMRV2dFF5tSm6SHpTEp3vihQFr5EJwK7WkL7uUULbUBSmpNo42",
  "key14": "2wXtwDyj3ZgRgD7mMK8bJsvVgv35MZdhRi5Uu6ndFuLUdR6213uC9cAnaGSjdCCUwY77gwXDYWtaqUL9mhV73RX8",
  "key15": "DcWB3YxpinjRoVFAxieqKbs4ksppdu9eLZnUbARj1n2xnCW3QmnEC6WhfARJHQNghqYhcad6v8vSKcKXrKifFJS",
  "key16": "MmBi1dZz7PsUbn8Lx6ZRitN6WQVC2nBhP6kgXf18bQNvrHc5UztyiGx3exZiGRJzEEoi2AivkWRBsPt3gEGkVsL",
  "key17": "2BC1QxdsyaXGRLjVvbB9HsmURYNM7rJdSk6Yt8FcaGsAJaV16xLKLNyetZMbzsQx7738xYCVbdqLrfwa8PM3Jp9t",
  "key18": "3jRBnyxZXdgXGUteoLcRh2dHibFcdUiW26GcGLtFn6o36usSrmK4KSBx5xxjjXzeytwkDazk9UeWneLmHkpVWcuo",
  "key19": "2MtZkcseXKthuQpCfR1v4iDXzNy8WcBekEJUsfBkHKF2txZpmVW4KqH5qS196wHFkfbiiovZaGFjHZMGPcVNEWJG",
  "key20": "2MU1k3nGz9iYhh5tExi8Y5d8D2gTZE9VYqwg1k7WHu4TAUJzAfMPTzNnoxyJFzmk4ZcHaQwEWAxo76vhDgQYzSRQ",
  "key21": "7nt3pfTypq4GM8mxaYhoRBLM1N4yhnyXrr18Rjsbq3FhQ9bMwQZpka1B3TPNPFJFHzJadSePWehP41rzpmAa31j",
  "key22": "5MDA6K9gqUPStERhZvHDYJ1waf7aThxAEzCXysygfGTi9hczTmQiBUq1SdyR1i8ork9NXBG8SraAdg3157NmY4NT",
  "key23": "p7Pcm8Kp2px2sPzgtYx9qU8hVqMCDW5St4xyx9vpQv1g2MHXZ5ht4jkKLxB7X3FfiXkfntM6TXmWsmjdicFc18W",
  "key24": "2WFhK1pBU2Ebj9uJHkxNRyUxrn2f7Y74hcx11K26NiAms6ZUX5Z9KKzF16oFBZFSaCSixHiLnHDDyUu7cgx6CzGw",
  "key25": "5x6G56TH8W5LSQ1H4fL7MFdsTWaifWyMi7bX1iz41q38d3aSJPy2RMek8u8tNrPxeoqpdkJLjpnmr6tstAebb3b1",
  "key26": "57aQkm1nHNXci5kc4XMJb4yQtMZy2f7y2iHUAbiaaVbRV1Hq3zK2zs5E6oxLMBpZ4jC9oBnU46ueiqpPaT7GrDKS",
  "key27": "T9qgCH2Muu2SwMoR4XZNxyTRZ97xFWiMMj1kzxbjQSaevdAL5Xj2pbUy1KAGoQtH7yfa9cbtiGDLqn1UmV6ynoH",
  "key28": "bFwZ8DPrvWL9U6Fx1doURV72hdSgfieqPM1YGaZn4U4RuFbSp8o8hqMLz13i5NDSAyF6z1MEk94EvVYaxxcKaoM",
  "key29": "5SFQkG1YHi8x4c3XaKDyGZF5w3aATA6k6VexJu7RZo1htPtiv8EiNTdkUQLRihQWCNfezmdpkKbvzMiEvpEFCLYW",
  "key30": "q4XfgBjNqMBa5oT88C4QVkwe4gBbGenvBBxcu8QwvqoA4FTyFcLHxYVoSGEG4kYaVeZHKwMhc27VUy9Fy37BBYf",
  "key31": "CdQhGuumXWHEm6upbZcSjL2d3J2S6U3GcFDkq1PyWWgQ9i2dYUWHttSdy1azEitDBnu9stPARhq3EVR6k1cjqGJ",
  "key32": "3B6SPoUQQeH1WaK6171SmDE12dVMKLKuzcsWp2mm3bASLkAvCyf9iKU9zwFjM6Wc9UxZhx5XU8WjYnfygzUqKYPx",
  "key33": "3dm9aM6Lso4JoRPgqcTNhmUAFowkupias5saZfCAxvVz7mxB6roev5wPMPmQzs9FHGxgsWQHn9yiPKXePqZbxMap",
  "key34": "3s1Q493aUssXyaoXSbi7K84JGuU1buHRJ5RAhw9XpnEDbD2GpCw94R2fwGmQNG8nfUJscs6AGAvgCZcpxC1U7FfW",
  "key35": "4SYpnRkvDdrdtgtMSwbNovRGVmYempc84C1amAUW43jwkjBvSUXorUdv521ak6owNqj9ULFcu8tzenQ1Qw7ytWAF",
  "key36": "2yhe2Esmb47h66mMWfP1Zdzz2VHnNrm28EeNFAXxaMYEQKfqiz7F8rL7H9PygKiTqk2zr3y7mrhcjPwCbbkxRfWM",
  "key37": "57X2WC7ZSpaZ2VRj2vSd2inQ3LsKvxYp2Wu4HMDGZbnnYraHfLQ1kbBDPC4jjPFN3SyzancFL8jbg9Pp646NuSxq",
  "key38": "4kRK4UZq5SrQJhT5Rqx7jwKxN7LsD7z6RHSbGcwhbA8H2yAAKZushsFrey7PbjxP7LR7ykSozW9cBrsBHmHZ3Kmt",
  "key39": "2nnCjssZ1QujcuNL846mFBFNA5gbpgLhokVDZP53rRNkXS8aAP5sDYipjf6a4uBCgExWkRM1puPngYT827j9o7to",
  "key40": "64DssYdkQjpfFsVn7euUDpaRNn5Fbt8oNBnJBanWBHwEeXEC3kwK7QW6NiDSdFJZvasN9o4pKfMmRUQ6qNjU7gE9"
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
