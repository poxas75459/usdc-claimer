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
    "63c8gm5ftBMopTMq2poahyHrxEF5UTrfsYQhK6km8LvfT8Uu8QeJyTNj6JX415rDGA6hdhZmDgeaGLaAw9git2Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iaFc92pp4D6GFFGVVE4jtaLKw5wWFPzLcovxaSKS7cJZCX3nZt4cTievbuVMCqb1TrJPC4P1JZGzqg4kizbbkvg",
  "key1": "DCFm9yQqi15AEYvag4puf2m9aFG6rGHsy6CijUe7UuuPZbqBVDmFP5aweKuBQoANkgjuxJ71ok7USYskcQTpjDd",
  "key2": "22hiUCuvgHPKiwTouDmiJ9Y2idv27KXdWvsDGCGn1akSvLZkJSJXK4h5YvbtEL1jWB2vkFFfU2bvQbUuJ7PB1WiP",
  "key3": "2jFMoxR2Py5cRdLKNTg6VnHYR5K5Rix8gFahmJzNf4HoT7w3BK1fj7KSSKtp8SM7UF4ovDsfw1mbkdDFZUTKEJYa",
  "key4": "25yWgWuaLdXfVUL26gZ2b53N7RfYPCPAhevcVW5v6LfHVbjDkjch6eByzWMY7xNrYC9TyNX6zYrXo1URUkAr9uVz",
  "key5": "3bzgKNEhseAjToZqQqpey4gZ3cuFpiFsdJwhMrexqJuNcz6RoLYin1MwQsHha8qFf3FsEiZUMd2qjrZxjCo5CMsZ",
  "key6": "47K115cYe24TL21Hpms2QbnhUe43PLQkUekPu1aGrHv9QiMNfHeG1hxxsHbdstPQf2QnLyQt18sEqTKHRuNzhguN",
  "key7": "wviSEosd79N1YJhSC4s9trxyDQU995r7hkF6rCqFaVMjHDndBRLysLdVXTSzYxJF42auxyFq4nbRRLcDyQYCjEh",
  "key8": "4YKd4RcaeHYV7N2DE6Pxb2jFeWEA4io9FVCsVgRanZr2YJu18QXiVdahHhhHaJgihsNo5WxDDX58WjwWsMF3QfKo",
  "key9": "ew5GVsVCuCj6dTX17GKGGUb2k6tmiJ3U8z8bHuMn1LaXhnKVKGDa1fLWkvne1hhp2AS8jcVHJiVcpSkVEZ6uovM",
  "key10": "5fxxVoBA2zz63QjACypKhZR9Dw8uKB3FjDnRShoztLTggF8VY3WhhKFcFQ6DdX4ttvzvBRcxAUDW7YuyUcE24ym7",
  "key11": "3m46ZTxE8sChV3FK1PZnZ5TWBaQdkrMFoxvyhLgWZeyuEcu47LFkSGsxqDJ2M366mF4j6sMmK5J6gUfSmYAvMGAN",
  "key12": "3gVCfpF4ipjWdg8Kph9EiTkyrfiqjJrHxr23XThBNzXTVMZrGxEHirCNvKfjzsfYirRwXsXzCGqZhwPhzd442oim",
  "key13": "5Ubm4YKF2k3iMTmX9BeosfNDN3btBoF83PtvM2wjQ6wZyaKGcA6USPmHdAyK4FX6tdDaKmuW9Nm9YkmLugke4aK9",
  "key14": "2Z737FJPGx19nmvF7utcaWUAfNPZPfwtnSzqa2WFYvqLeRzcVHAn4y4w6gJdpXZkeGZ2KhvpHXkEbtN2KryfR6ez",
  "key15": "4QAByB1wqgjpS5viNzotyxLiaTrQWsiPWJkkETp5YHUNqMZwfqNc46ENq2agAKehsYvS61vwcysLQFvyYonqttmd",
  "key16": "1PJgv7sDbj5CJvQdqUgoQgcYqk9U6WZ5dkjQw4XWiFrWqKwKn2MSAYHwZxsLB1jhj7jTn3dn4ymjrfzkhjtJ6Kv",
  "key17": "33pKu83LFwEN713yuNw8C3CntFN8xT6wkMWbzbB4hmRbJJrQFMXYGyfTVJpug5KFc7PBcL13uHe65L8fjW3QFCCB",
  "key18": "4BiuYAsBfYhTc5H4VNRp8hARkhwHuAMifvxZb7ELv3UQXi7iVq9per1uPF95mvPkY5mRYefceUhrLh2KhHYNNZ7p",
  "key19": "4ppr2iAGAu7cREttqcFc4tvYGKGfPW8qeHdBtFcWht7KfB7Eyxib5vampdz8MwvhNrt2kQDiXmJNJuztg5XrsRqv",
  "key20": "4sLUtHT9o8uMSkoeQNwQu533Qb5RhJRmjZx1L3nxDSZXgmHeAe4s4P6UJ2SaPs8DqJbjg4tuDPJtE8W33X7W6vct",
  "key21": "3rRn1hmPVRVudwYcqPT4rnFwvVWn3EzpdpHW7SfN5NptHy7hDNybLAbmyRZMgoDqwmXSFPoVJ168yK2guZF7EYdW",
  "key22": "eXP8rvKvK1A3FDF92Phzn6b5ezDnvd7jRenpg4WSyZdGqBH1CyjvYMZQzEFa4cVd6XKhJdYQotu5kYUph5u2seQ",
  "key23": "f3V1ixRui1KFFzAZqc97mPWcpWGzDHwDYurFGuJ74o77uD49vLNmfarZKr3GHcHRkHupqS4gW57aCG2iwJU3yfQ",
  "key24": "4mk3P84ehezEKiorMjq7R1WEuxSjtwqDZwhusn1fsij1MMinuPKsthJ4AujzaNrAzYhz3HXtcWLo1i8Wqq67eLKR",
  "key25": "AG8xpekU292wwBrEMueL4P3MufcDtCUMHPE4ZFdBVrqvAyNB3sM6eQTVsgwDt3qFn5R9JGudujxBUUsvAZQUKzb",
  "key26": "2fVMNFHxHHEkMGFihcA34E3pbmJkVnXLyotAfKyXCVYYgXmJBvq2EexhLWFmutuijMfCXJbhenFPv8SRubzA6sUP",
  "key27": "3s3afqR9WGDMkr75ABXcBypfuxh9aHF2um2ZDEeXjpWzmxHF2Suv1CbCvs3ZUm4bWgQYWwjzW8JMMwPbCZaQryW6",
  "key28": "3H1b3JDjWUXHKbnkv9k16XNv9PYZ4HQvyiugU9p9rhxikGag8Her3tGmcpKHuR3eic4hpuCDXrDMvM7oZHEpbVXC",
  "key29": "f5a5bDMGfEbMFpE26AcyXaf9EeBRKuCYPiMZYhVwSmhtRZDvpWe7xnEBBdSxZTRDyPWRt7qErYJiCFSipXZuqa5",
  "key30": "uqhVhq6hk9xkifHgfD6y8LmCLPWcixF9u1SYMnmicxTp1rRrkMBnZCXHkcRag9Q646Bgn97a5bcdsGWno29NTZ9",
  "key31": "4Amnoo4au7oGAV1txGQQJNfopvCnGvsqFudcsM5bc1ZQ2pX2gsMsT7PAQsGmxWqQ6DDMd1RRE1C2tb6NXzwdHndg",
  "key32": "51eEtz32sAjwCG1FwKuxGj3qccUH9JLP7rJ4JJ25gGUR86Z1iHq7EALNQtVxvTMxBUzvPkGn2TzhneakLkeLWCdR",
  "key33": "2sL3CKqste3JrQuNi6B8FEJYuJkhSVLy8tTKTSQpeV3pBMrBpRHTs7BRThjjWuZcqw26mi9pvHXyLpJTs7jC75Y7",
  "key34": "49a57DHdq2XX4ZpaMh8ELXRGEvoTzLiEij2fACthHFLCWaFFKvPs3rWHjuygNpQ5p4LfT3Tt1aTSXMV673S8nZF3",
  "key35": "29q6Mb39UUUbjfe8M4z8LD15xiDXHMRGbVXqtqCfXXyLd71qEPAUjVaBy7t5pnAfnBESkpT24HFkUmKSfxcquQP1",
  "key36": "2sgrxcAk41LkC99j5Mkkf22poT7DdJnZ2y1U7AqfKChEbictCS3F7tHsBuoKgVYr9Vg8mVeJu9A5M9Kgvyi5FGso",
  "key37": "4sXEiqz16FJL15ExLEZX8jAGM3craCy7mk7NWeyU9iVBTGJTt13BP5bKeDQ2GEvfNqdeFNSh6GmJB8keC5gMgmEe",
  "key38": "3ksUPuMrLGTYafTwzvDGbojCqkokpPbxoR34zoiEtdoRQwSpgdsHy7b4ZVWVhzczrz1yocybL2AndVc66Xd3aX1k"
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
