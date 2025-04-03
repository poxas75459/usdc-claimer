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
    "5rSoXw8owPkFtm8CXaWFLaGMtimyCYt4LhLzVkWCQLeCQaKtpAbL2dxyXYFPxNaZ8ZA9Bp6a2xEsTi2jaNoohUhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1cV3mDVquJRFTjdSkvttEt5V7qmCjThR4ZjL9i4C1AU72zG8vgqZuyM5E4ExEzGA9uzjZGw5tGeyvCpryJBKtc",
  "key1": "2Rybk7PPMVRUjaMcxKaBwCGYoLHnZskDpTGx1BKPoLH43hDrnUtHX4ax2sBVYgKdzPp8PxN9rnYBsP7dRX9jZ4Et",
  "key2": "4zknvxXjRn7r6Ye6A4iLr5p6SmXqKvrmqRDcrvc6zaUVrQNF3bYootQ5SUhE55hyoHxuvnsB5JUiRfAzcNupbS1U",
  "key3": "6cZ5VXMkX5TA7Yz9C5LCbbzStCj49R9Wck48L4292TzQZ5Mf8d2VxK7A9Qb53mL6i1sAoW6in7AwQSGcJcbVdeq",
  "key4": "3eKagfywzZV2PbqfYWMQAc3MRpFcucS8rNjTE5voWuDq77bSKYVnJWXRWEvMDDZbGHjGnE95RjfBsL1QRnfF1JTx",
  "key5": "48xf5fo8wcn67sAFZoGERJrso4MtFYJoAHHhzkqvr9gCGC5QDYVsDHnqs4fDwGsptFCBaSHc4SEoswZ7Dd8Mvi2V",
  "key6": "3ui242Vn2yrfRqjk6GaxeZXrSEFzB81ffiouzgUUyC5TVGLTMhzMfmSfXDdovh4Z5sKxT1QWUGmsrdcqKqrNyNpz",
  "key7": "BnYTMhKrnxBHDCPB8E4k9ckjyWLY3YxiqCcP9HvsqYDKiJrxhHshyk35JTWddyEvthGschyCXrtqK3uAHGsotYB",
  "key8": "4aHU89yXkc6HoxRH9ihchrRJcpdRgsULTVJ6AB3bvtd3dGBuCjn4sghUhnRBbR4y4L7VECxQeXka8dUykQuUqQUo",
  "key9": "5PubYbRiFdEmyo7pB3xUNPP54AwQUxh8ic7L8R4JUb2LqhVuEYg3mxmtCs9HL3qGY8DG9sAuprqKKxrWiP7A3YQM",
  "key10": "2RpbLKkqV6UnLGuTX7Wn5iNeiL2B3uLm79P59x1K4KFEy6KmZ7e5dQSrdtCW1mjwGA5ToNbuckRstTY5sdTgzEN5",
  "key11": "4aVkoBBosxwdhHeP8EJtV5kAb6mnxdesVTBunovayfQtcqnkEcwzKKnknfjxuM2p2MhiBm9feD1p5386DMcopS4p",
  "key12": "2Aak56iTcJwo2Tw7R9TT2Awxe9oM5hs7PTictpdxKD1iknBLajpBbrbRUqCYqKbrAtPjYaVS5aRk7BkFRYZ3aUBu",
  "key13": "RzxbfbV3SRwzP312oMFqfBy46uTYNiUgKNJ7zKPfNCmMHPQZcWDDhs1Qq1kjutGRkfz39Rvxm6KoKkvymxsFik2",
  "key14": "4S2S9JEEV8DZEJ7jhsDJbZnXWD5QBfyBoswFkfEAbZtb8MrcDbWWrYgzseuPLf5uyKQDhwZG8EHiNkHLVfX2pfHs",
  "key15": "4ccwYbp4VKGvQJAyy8Ywzbd3vAgHw9UTSSjpjJ19KhtaZUUH8Fg8TataHaSpDYGwSaXi1A3uV7y1gY2fh1a5Va9Y",
  "key16": "avb5UVFhmAeFmMHbvRKbqJfvTyzhgFV5cccCUp6WFvihXyf2qo6DeWAuqjAmBx9xhxUzudzUijST5TERHhWC5F9",
  "key17": "J66Seo9yFH8MwEqV5pmZz5xUFkKZE3L6d5vTsGbEFGixP9NEx9NK6yjsKVCt9x25R8mT6TaLme7PMBuVeDwBftJ",
  "key18": "5ANRF52X4V2peKY4xLw21Xpf8eh9gtgYEGkfkYcfcppRcUVtS4Xaz17hUy5FkBhXP22MukXvYnnraAsNgJvBFWJp",
  "key19": "5kvFCQNdMQ7euGEdd9EgpuSw8wxkNitH34FNdqoYrUduhoqP8occLjzzacYc37NksLKcKw8fE6L2jUK4DiaF1oBD",
  "key20": "2G29Q8jd8RpSrw8EF3aBqqCfkM6poLjudp67ARFWiB8cuonPAXrDhFyEMfDn2Ax6oeThfBWSmyofVRwUZd8a1zY",
  "key21": "4uFcPDx8C4urJXeQDAWHJdeKF8u6F3mQKu1kJiXfTstEG8bRXAWZtxcSK4GntdziKArssqwLXUtiCHpe6vH2ecxp",
  "key22": "5uZ87FsS8Z62HE48T3oxyddsaDCWZ5uPdMRjHvckiH8LxXGeUFbTftwZEvyd2vF5WNAmytgAJo2PeVKqDnrmqKVy",
  "key23": "4TCMhtKNbPK11gGBiSCSFuroxVXSNhpGi33Nq5oBs9cngu2u2GQaNxd3HvHTMqNdPY2ipsBv8uNQjtXPsNNrS3aM",
  "key24": "25apAJzHrzwZ4h2vDQJy9x2geeuKhYvvJHjSmdRXo44LnJr8Lzop4wgpiuoemQHcEQv6DHmLRQTZPYnxSqjnmeXD",
  "key25": "5iorNVoMdA6qGUr4wXKg9ebvybHd2Uot8LCQ8dXU7dtuBQiqUtwzgazF7vb76Wtyzyaa8GGttwEeZEMGKdJXLXdJ",
  "key26": "38tfpUVrMoXGDbbQzKGK1kTrqNFCXnXdi1qukU5JspzDPPHoYFRGC9Q2xao1BffddXwur6JGNKNSJAn37iw7ErEL",
  "key27": "3zdgVbev93ZTiYYTJpH9NVRBZS2rgJj1P17T3844tKgNcZbZ4EQinZZhUQWFnQG9izwjPFgYcgXxq1NtCF6N8Vrp",
  "key28": "4feWjhVgAQYMdNN2viEdVzc4keQsBMEZpvJ1rmhgcJeB3Sii48uomgDo8J8DqCxqhj9cUSFnt43MtewMPnUSKp1u",
  "key29": "3c4r2Q2L8WGW4JDuZVtsh7UXe7Nze2QL5SKT3r4fsv2cfkuqxUnQKhxYua2nAmA3jrUzG3MT4LHLibmeB5fStqs5",
  "key30": "nq6Yris5R7PGBBQbgiNwm1yonGRHpZcMYiU3oGUkWSRt1ZoEfsZ8RDW3ziYaGgPhVGmV5FExPdoT4LZBcRGQaXK",
  "key31": "6ATEf1BNyXPxEXeP5dXN48gTUXMpiXheCecnd9dnoQdMGjZ7SeeK9mzHFXUstaZQdqucK8c3NvHQJbBQbAxguAQ",
  "key32": "5MTBC55uDK9nhxoShNj7FjCvScMxFf2gvvtKoxVjMemk4UcAn9N1yNCWWxsq4u6u5En2BXqKrMUKcbMj12YQizye",
  "key33": "3gEcLDdGrd9xsYQiAzpSPFZxKXsXjDgY54xKsqo8X9i6DF2HvzpiGT69BLYMUEs9nobu3XCKNbhhZz4dGddr1cAH",
  "key34": "3gFiHvpfv5Tc3vvfnkv5DYnmaXNCpNzvoy1fu1GJTCpxrqT9xNMfnA7Ex2T84Xgwb4P5zhYECwFbR3Zj4rjLAojK",
  "key35": "4zAvCfyKzL3fCC8LTghZmH1ZWicaXSDnfB9Sb4gFzckAqZaNw8BnvHHcDMuL9NiJQQpFYLWVCUsiG581Xu4aFxXg",
  "key36": "5kj7bLXtaNnC3NSFV3xxDDFvThxjM6iHFreheG6GDYC7oenCVf4oBZitV9YSUSuqMFKZAJqKnKp8DwQFJHiijGMi",
  "key37": "2sgRGsCC6ctPsJmjtSdtc76j5UYGn2cyLSEgoJtamwq1NWtAFDpMseTXJxB87jPi2WiAPSjniarsYxKJZE1QRZ1P",
  "key38": "38G581n594zvVdXrNi3jCUP4p5DLp1uFtLkuC2W4HsEK5uBTFht4tdBkewnYE44wVmoErKgrPJKpCZJD3gmbRbUv",
  "key39": "5JUS4ac483B8A3DGk5CvVh7KWp4NwuFYhi4HrEddq54aAASWbKPHwarV9gAQPfBvMtsdJpXibvAKLRNZpFTJRswL",
  "key40": "5tp8oijrrtXLVLuimrmJpCGjbYRqGVkoZpbFQhZysYsjw8yguo98wUgKFxhuKkEUtVpZH5KZ6SHxiEHroLmhvpzk"
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
