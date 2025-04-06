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
    "p1LeQXR4oDwGgKBSWJrVdpD7JrP6KteyCvw1VBZXjUjQoR5gnkL8LC35obgdBEhshThfREkhxGQ9NAAK9Vhs1Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nieGhPeyitNaRW6U5syoyESk8wYTEBcjXpZWpB6N8UHkfyLNcp5JD36o2gULzeMiyBBS9e4HEu54Hw6WNbLqhBQ",
  "key1": "3UQTgiv4rqi2M7T4jvPuJ6Z99nst22zsTP71YxArrnkunWFxXwnXSDWP25R2Tfd85CZX6ywp3pbRmYb5UpqMbdLk",
  "key2": "55AcTha78txHD86RY3vZ6V4h9coCVJpgph8PkbLcwXzhKLACfNdceYG4iERZL4BGM1YDdxUd3gUYXP44q3BANdTR",
  "key3": "3PYMFFFfTnhq1M3SXJWvphaLLWb6vCkV8s2wUPU7HQC4W7JGoyFqyr3cZyuBgarJfX6CmMxrzgQ4DUGJ7MSuWY5z",
  "key4": "37hyGTT3cvtF5otAVVRiBbeyMMssudNyC3goa6c7Dpes6awcFexcLxMHaxrty4FkT4jXPEwdyWK8LkrY7VBTyPbF",
  "key5": "hsqKBmHS7p7LdSsrowGLNZWg6FYnxv6FEjtG5Yq18ihbwtbimhs5osihsRRiaKgc7jVTDrgCw6fgvYy3e9wcmQ6",
  "key6": "1oYN7N6bfnNvAxDVZto336FRz3T2mHi7jujNo35mBmhJ4KEFmRWWmKP6NWwxJvJfkv4KWzk4ogfkcRBRh6xyWfr",
  "key7": "2HthSeiPRW1Q3kQmf5NtokfhLsRvCY2SCFbdADNVUR5YzrwgrhEVqaux2uxggfhuAi8ZpA8gLEhYKDWH5sYFbCnS",
  "key8": "4i5uNtJhiP1RmERjxjCrq9DP7x8DNh3UCMjZEUvjRmH8hFzyZUuYQSCRzPWKpEtnpLp2uuZEUabvSPf3qdPCAyfz",
  "key9": "2iQFJdaRiA7wMhFtiadqCva9wXEgbqVXQPkoHuUDhWdvZjD1gvPufEozu4BXwBPXB5Za8iNbnp8PH2iD41re3GrB",
  "key10": "31tFr4gy7nNBvSTZxKqfCdnp5KcSUHXy1fTBq2cmqZaR6MABpogv6SNoytBX6DsjXJgnLXazeKXaQLHt2EApoASr",
  "key11": "3DzDDWrAtGCaPNivU646GKu3fNZt5s2o3Yic9o3mrZpZxhseCN5NQhPeyC6Q4MXRdA28VNjGD9HRcqnduZAtYgKR",
  "key12": "2bBAYdAfSbTnbnXd2qphtPxXvQtE13smWjLug1oQShamEKaqERMkrrcuvufbJtWmRxnhtvQDkfp8pwHX1UsaYsd6",
  "key13": "27V5GDeUXkqckLztvdEPiMt9FMtvX5vjWpgSFN81ydQL2atJPExPYAJHaCNFvZf4uS1TkN9z98atwck3yRYhadTg",
  "key14": "5Ga3gHSxe99SqM5ta1ggcFZKKYqBB7DfEKQKkjuXGBusSzqLpQSTSyVesgzaC5TFU3F4WCP4X11F7Viw8xjyTGDz",
  "key15": "5xym88qSZzYPgR4ZseFuvKCebEXLDoGZ1huCtg9wwiGdMkudjfbrsyoesnkFo8Kf2jdXoAY2Mks7TC2ybuWbTDKw",
  "key16": "2uxqvipHFzJTAyNyqZC49cwX2wvrfnZWXx7EQn4Wb1rF1XDpoGZXvM8i4LD7M7LoFhgdoeMJL8pexZbU34mcnGE1",
  "key17": "XioaGKBNsuXVyJtB4qD6WhtBKuVedbzofwJSKctia992492aQSsUTEt5k3bNyHTtpAzhDKzzcznUvSxcANrPkXR",
  "key18": "mEtzgxtPeYxgN1tZUCxi9tZmz3PtXdKFE3HvD8f1e9rPQaXRwBK6ppyghJ2VgJ9Uftxat9L3fdnCckz6EWgt1fe",
  "key19": "Jq4mxLzXzezdkYRZyG8HidjKQ6sbwpTbGoTPwTjVcJ5bpVQLG155S2fSdWGdQiJdLg6oH9UeTmMbvr5txSKL5ts",
  "key20": "3pWtRodWmZiyUpYjrgRiEhJu9LJygRaPK6m65G4NGZLiY4wpqykFQRQNp3n5pGxPSHnGJ6z99hVN9zHCena4Wtac",
  "key21": "5GtuVtd3wW8z3JRBpnAJ41a9xw6tiYriTQEiCxc4Q5QKUH99hBm3e93eoRjXCfLf2CHuLSEygcPZMcHjzg8YhA4A",
  "key22": "32zk8WFEojKfPeYj7vrEUTnPCViqzgoRdzLFJSnrZq9qjp41UFaoXWZik661McAjPMfWxcJXfnAxQwyWnFrXDbm3",
  "key23": "4uWk5X6n7FNVrS9vbLBXp45Lq4sP95tPNwCG9v7A7eRhgrR3jPFhbsNjnVQ8sLeMCQ2Z6b6xbPj4cMLJw1cyXQc7",
  "key24": "33bCv6P7gWxjZg4UhydgYSBx8mjf4j9R2fLQTQyN8C59xCD5M1SkBHRbNdpmyTxi8Msy1yUjfnWWFvYsypXQeTca",
  "key25": "4Qbs3K83QU2TuynXSrX9qy3DtXWH9tMKq6dvMKriTpEuqaKUYcZfHFZPjcw1eQs1AFGVc3tjvD2WjnGutav27wzu",
  "key26": "4JnHqhEE9EfmsY9hVfnRh5TYd1VMobtn2DeyiZ2rmzLLSpiqgyNNiJHrdeLsG4cRYzKAaTUkSUZaNAnpHKtLC7BK",
  "key27": "4itPoid6gShyY5aNC6huwyzSvPyw63kRW5avuKjMCb2BMJPAFpd3Wh5dAF1hLzoMNEuLpJM4YeTBo5YjyDRNk1MS",
  "key28": "22CCHPaK6DtCnJ6HaBk5QbAbjZG6Pu6epH3nRbAFFbcddn3376BgapBsHR1KyAsU1wnjVzRFoRTNU1bYFX28aemk",
  "key29": "453JPYyxEypKcmdESwaRmxcNdbfSBLfafJQ2AHYmqXepyujoKAJrghLE9oB1BGFbVU78nBmutRkrZmUNfhm7pc57",
  "key30": "4rDmiymB8NnKnto1pQFQjZntxqtNCzQMyKHo8qEC4gCRLr9yGpJf1q4eraTUWBse3Hvqf2fGWmA2p7VwWHSQxCtj",
  "key31": "4SVmL7AJuFxvZo7xoDaEwk43eVHNTBdy6So4hwC6PqhvSSHQHRS7PPgYU5MbskHcX1bKctyuWzHHNdkLqtbN3c95",
  "key32": "449ADaDwJ4gAEZStkNje7WHLHSxyfBK2M1V2gAv9rxuc82YJmCZtvEzRGi6fGrhrBGBEkKRCFHrZgPnKqqDfEbmX",
  "key33": "3BQE8sT12fkS1YaVa9SDzZhB3GG4jXzn9QEEvM3p1D2mfg931oru6hLL6d1Uuzofqm9JGj9XYgEWBwLEAHDD6qUX",
  "key34": "jFCPwMpJgXovswRrUL8RiNFPV3irnzoPD2t6PvvWQ7o9uAWb3z9RhhKbkV4Cn9kSUB44judVtDiv32UhBJbZhcJ",
  "key35": "bvcWcSBRGGEJJwgm1sptfaZ947eUvCnUqpjczs2hrUBwjQ3oCkgmbgMhGsWnwkVc42wZtjqtAWASTbMahKbUFrz",
  "key36": "4MvWLDoUkphuuJM4E8BsgEFQMxL6uL1N2oxKLj61djmEGDjDsq1JVHifrAbMZ2SPNFHHxSSqWVbHuUKK3hH5pVgr",
  "key37": "Tt1yASBPP8rLYhrtvLUhApDHuHN9wqNPFHC1ckSFphTkABS4b9RjRKyuRXojKXoPZ6qVmYEivKmWu3yBeYTrdcq",
  "key38": "2sYpbiGq24NwuR3jC2obz79CruFBM1G9eNnNfVK14xXTeh9EtMxAXaUiqrYEgV8H6otc7MoTcCRSbFEDJqJr9DzP",
  "key39": "3fX4AbMKdYdb3mfVgBKGvSzxyhF3MhfWJt1nDGCBAYgfhAsqrRj7vqe5fzC8YudyDgbsLBzPRUWsB58w3kbFqens",
  "key40": "1HaAVvM5zmVM7M9yYqKFXAQinY2QLMPuG3rsd8eG4UkAJVovpEz2qTdeYqNpDPZ8tygJceMQ7q3ttu45eh1PDhS",
  "key41": "RsfyBqZHoioNF3cKdCPmVZVwzsruz9g34RVvJsttP9tkw8XNfhXKGV9LpPJepPnX8eKnx86YuHEgS9YHFSzrw5X",
  "key42": "3DbKpASV16R7d7vXvDu3kT5Zzw6GLum3ZxS5waun2Bwq6HcpvsKDZVmn41epZb2yunrwR7XqDP1M4jmZTGbh5owb",
  "key43": "2hQ75mjXckM4TvvBHuvbjWyi22ZUFnAC6m3tucamN59NNFTNSVwhUsoevGbVFAHPUxqMSy8PhraUCCQvqs7iNY2g",
  "key44": "3G8aBeLLj54jQ5qPBV9nWsJcifXu8Z2fo7cQRoBN2E7GeWdSC2SvZvmMdZoCwPBFtXEhMrkqW5g86s9gGGTeRVEU",
  "key45": "2gyJvZutRNMWn39ZSaNaSkJE5xCFivbzzoLhKQLAWXkfAKNU2yk56mx9jCqU6WNoGGiJ6jNutCYH7MnVdSntzxYx",
  "key46": "43pMoYTeQFKoPcAebNkReZrmj5GjXqdkhdhHoyBJYnRwugemN6irUueLdPfFMiZM3oRJWwupxZqD6NPmUUijCjrq"
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
