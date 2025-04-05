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
    "49DbLz16BoYsTuuQr2Lim9LyWSrdWgMeU3MWo17c17hxjqgKEWFon4m3vMq9fu9qyGAFK24kyj8vTZBqqtNT7ght"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsaTfnfC4NuZFwkLSXDhMqagbSAWpkUCk39w1vSfPRXMf9jNAGEbiwMHNW8FZcsBHgDgDRYQAG5gvNswGFWSokS",
  "key1": "3cK875f5B8TNZ2DXwBuzfgSPwvZ3v5gNBx6svrYZCBwtcytATBPXzXV2SJc9ANcAuEDEwMkjx3gnVNx8NywZnfjd",
  "key2": "58AUkjuU3tG1rhTZ5dy4Zz93jaXW9FcixWxs4cgm64LhPgngQWFdZCwkdiqpt4BiTYGoXZRsLffCCbdGDGLAr8aN",
  "key3": "65oduamL8PvRmhF4GYida8ZVy52YP9JG3NjW6oYTmQGukqoF8x4fkbLDKY4jWnwF9181gxU8h9HKBxyeWMZSG6CL",
  "key4": "49iKExGhkSjiySvEzzYNN73RwZ68ZRbnuoGz5NcPo73r2UEJEAdY3th9suP1nPb4binCjKyKeTYj9h72vTc4Vrja",
  "key5": "2CsFpM8Tzk9V19UpACkfaPYu45YAmJ8dMe32Cw2L4hBTeyZLcr3KAWTXBS3LT9eEvbA8qkJQjCUMS7KSQLFPUWD5",
  "key6": "4KkF3LuiSL2icfforkcGgn8kmHnmUk3K6G2KEAhaVoCNtFGTUJXoPivomAc58tm4FL16PyXM8PwhfF8CPcRe9pqa",
  "key7": "5Yz35b9f1ymVrPGpJ33pCxiMohn17Fm1VntatAhgQMpw4Jz9TNQV6F7eLt81ormDZF8Ub11rWwrDM8hhQdPpNAe5",
  "key8": "4iB1LuMwiYACw7iuJVv8JEssp73exHPWdxXMYUrG1117DmTzvJFJdicRN5PJvehyzRSiFEvS5ZcdNPwHjfbxtUCk",
  "key9": "P98iRUvNp3QDbvmR67ZktTuBV5WXWTav5iWebufDqa4NaT5utULnk8gPWM7MSaptwfCqoyBqJTWN1dXQHTj1Usw",
  "key10": "CfccmPwFaNKGdef43LByedq6td6gBfTuVa8NMuLN46PM9SHAog6jhz9AB7hd7gCjoZ4WCzTowzCVfWN1gkRnJZ3",
  "key11": "4TW1U2bjZz8aTNseYDt19QhEb2W8ARA8c7NbGphCSGu5wxAQ1j4MhZLXCxQeSLTz4WuGGnVLtABGWW7bQRYZAhUT",
  "key12": "4vp8at1aAFdkBEeb2p2g4WpfaxNmtv9pVexESpf42WvNRcK3QHpaFJb7yrb1TUJCLHQyTGvSPGqJ9ZVQDDjisXE6",
  "key13": "5jGtrbe1pYvp1RrQWW9uni5vL7vRyLiPXojmTEhnXABLaGj4YKx1CKFn1rD1m8n9WB2Smwm3aMNi3gwtThY5Q64W",
  "key14": "534BZYzXxQYXCzq38Lh34gfVSKN7jKQbJ7zwhdmXrKyF7JEvUL79cSnEnn95n1r2xCqFYVFc6YrFsJv5WZGcqCm2",
  "key15": "2pK24JF3VsT68xC5R6QUxT2jm92zsoRwyS2PwdjzskUY4b4wtbjNK7CiSzJ7H2PUYPbqXYps5YUcGohwJ3hTWi7P",
  "key16": "3UpRpceB4GpSiB21WMgedJ6wd7C1id7hMSUoB4fCCyJ5uUXRcAQGPoj6wpyRig6HysUJZhKYemtSFamwUHdP6M3J",
  "key17": "ecTUrw3aWTVz1Z3Wm7FkxCUd2D4Vn7yPLaXfiaA7JhitPz51tWKKrR8oMzE8vdCsYCJznNNmAU4hnQqEaLVJtaY",
  "key18": "43WXyxdJURdoJbi9nrPcbwT5ZWKK9EwWmWtMjNHkqzoGwoaUDt6W1aE5qosX8sbeKaC7BxxfjW8xLLkYPamtEoDC",
  "key19": "66SYaGm32Z7JgwZKBvUkxWdKSTufxAyuyK6a1AA5bkhabvrK2r7k5JSyK3uavr6VFzgwnzs7SsoYL5xsPDPtnmy5",
  "key20": "2jYmmwRU7m3TmGQeUUxArrr8CNW7KQpVZ1aMM67a6x4nkBBczNuYHibTMb1jRyLCiDA8EMwPGL8ho57dtJ1xkhhd",
  "key21": "4QgRgoD9wqJS42xVQtydZd2Y9ukYPi96K7ykWfYF88ftEDsuW663MwGffW4AyrL6gjDeZkN8NYxdjfAmc2JJVKZC",
  "key22": "c2fh1L9EABcf5TyJpMr4si9vmZXRezHKt1mB1reUbTYvxgY9tNA81y2KN727QEURs95vdsUpmNac759jHUjFMpQ",
  "key23": "3trno2yGrmwWBgwUirSkTN76w5wDucLUB6z97KzVFDudBaESKCA3D61tSyLTg5W3XzM7bNanAdY8PGJkRVXwU1Ru",
  "key24": "MqXT8CbAS98Um2tZvxqzZUKFv9sqjhKxdfb1t926LrJ76P1jxpBV1p7s6jL4cRP9kD3Qx9GWUqq3kxE589eruLY",
  "key25": "6V7xpRsR1GYyzruvXnDbtZjScPMNbmD8BRvb14598yam5AYqKGXwSDgbTwJSZcgH5qANA7ZfYxxhTqrsq419gqM",
  "key26": "3BCS678ppThmmDHRjYgXDcAVesaMo288dTVCGtd2ZgbWoPzFE7GvXS4z2j73mnHpuvWfU9HSVjiy5akfUCkKb3ko",
  "key27": "3MgfNXeXrKxKuJZv5RXaJb1yMSUEBi3Yfa9zRuz3ViRSMT154ZAXnDLeKVfgU9ne1gw934LMfC8VFL8MLgK2oMJH",
  "key28": "2dqrX3nx9w1Kp3jZdWFKXx1JedgLwvzTV3CxfFry37K2r5AbMhLM8hJeUtqtgRq7zcVvq5jJqzwubcTKozihpXPo",
  "key29": "3HZdE92acKgJMQBRonWFNGLrs9SaG3n9h3tG6AWZYmLnDpFyhJJqJCdsJmvonkt1DcKwEaSbM49GQdyJ9M4B7Yzk",
  "key30": "25URWFxwwXLj14t8hVHyqLhyzJZ2sZSHUoLpSrDnRVy4PeGd8Z7k9xjohM54519QRsQyWZyca1Q6iV9TXzPh29Gn",
  "key31": "4o5HHDgA8ssiCUV7rXDoahFccXpgzxj4QUzKW7NnPY6KLWa9x5Vx6hi3Jzsh9frmwL634hzzqFJDYQgAt8YnHm5H",
  "key32": "qWUcVr2L46LX7uebeytcbNuVfyP3ogyJZQCp4ZaNph1URFgKqWVnfoZd5Lmbfm55vRvahwGaGHQmPTbVG3oEZr4",
  "key33": "45VnABpPTYnwuYmhvsffBnPSnVNE2CkoXRtrbGffpGbnSkpeCcaYhYjVxgkqcFFqC5HJdiVHNeny5Jkctj3itMvG",
  "key34": "587UBS2cyosRpKW2XraVc4z5ggEcnohEH9N6MYi1D2Q6tDdU1rmBvgMWYMvLaM4iJRyG69WjiTPqrN4CKXm8NCWk",
  "key35": "23GrArhskLXretKaa5VLaUcEWDPNEdnyBwsJiyAcZDotcdkPw3bqW9hZxQsAwXsGRGF1YvDfpjwMtsRTn1MVrXyS",
  "key36": "2wb855yNo1ep6Gi2vXCZ3oVLrF94gybM8RAcprPZTbbWrdpZ8FE9QthrznLV4iTR1kpPiZUzgEpuNvrNEj7jdSCm",
  "key37": "WppZ1cP7iu8PfnkAFnm8h9H5P1MY59vq4rzmvMdpQidHwXNjmytz8B3w9HCrCDokVdNRvfgsgkhJNCWuKZ6uNh9",
  "key38": "P7Mzyyo1QKpTSsAwP8qN6feCTWzbDNdVNDVhkA2dP1pQqZ3JEGELuYWQni8Z8ckJCe1cvWWGhyEotJXXXpFGn9Z",
  "key39": "5ncwXoGdogWCWV32vuo23fNT1Bt88QeNx6M7gStJe2Kec7PaPSYP7XNRqFX4xVY3X9itip5PZaNeoeSsuyBmmENZ",
  "key40": "59NfMhgzir3msMfwBdV6NhRwr7rWFL1AHXJqZ1NwLK9gUos4HwZbjnrrM2QxnHyHZ1tAM4JJpqZCoJESLYbboTj6",
  "key41": "zTP1MQffAhbSnWtWBTEqzJqKJaFnyjthyWc6uUDricK6cGc7xqxxwSjgtMyusuLcaGhJ7gQXQZoGnFUd5jEUjNM",
  "key42": "4MKkmtm2c9CoBRzsPXntYcfcsG2fVjTQXKhLWJh2naVWE9X6NNNN3KXpzCkWNDa8ta5LEeaHKkxCoXin81k2tLhV",
  "key43": "65uGWHRQReieX8MhMDiN3fmsm2dDVfid5La5G6VFPVL6LTsEi9EdyNjT9duYeyhhcYTWR8VavqjcBUbEBtqyqyCe",
  "key44": "4q5HmJoazKAEXpB3jn8ehfJfPtSdcV1HDqyMJapMUvt7aNR8nqUkXcWZvbeqGJrXUyJZEHFGHhfhtcg9S2g9AYK2",
  "key45": "3kskWuxvTSAWMgwrbS9u8YLULcJDUPjnDSK2P6wbe7unCNAcHEuu2WFrgYXpQqXzi9waySHHtR2RYJfkCaVH2cyo"
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
