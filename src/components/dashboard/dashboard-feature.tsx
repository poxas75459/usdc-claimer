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
    "3YrCc9zUJ9oAt7JUXc4zkmWnBG1KT5a1VDvPC3i5AsWooH212gMYu6BQQipFm3Hwhm9w1EriFAaMVUWvf9QDuV2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kF4X2sJirJucLADPmPMD3UCW7tQpKZSPKciyM5huXfgL18QnCaHFzRXoCsueM5pd3J3wdQvDQtwnWcRQJjZ4w4a",
  "key1": "mUDPFsqv5f8HDpyk9r3wTQ5wxKZ2CTedciCYFnScDu1MjATfH9M5xQRJZN6TYqFi21SQbzDqp25Tr6EvuichbiK",
  "key2": "5KSHpWoLe4jEyMNvqMuimzWyKA81v4qeWUxMAYffJ68q9wk8HY5GnSC81AVFk2epithfRV18Vs8LwitMVN5bMmnW",
  "key3": "nMp3nb5xwNYdBxkWAKVM1VAnUPyakFe22GsuaofLGRCWGkXJdDYuF5QKXQo2Wn8uaXm9abz8GbpFwJbqGzyCZvv",
  "key4": "vJWSQZbHP2yWiKTk6k2wkx7h2wSKE1UgkLKsqsHmBTkaaS8cjPrXJY927saPHNiYZ7kKGAKRjhdMWFouH2LGAuo",
  "key5": "33bngYvByHvw4rK1aL4uuFV8UQgn4FMaFGQUC7HrqBRE26ATMmVrG7LigeBcccRVkQFAaMvQsL3x9zL9D6sMyEq7",
  "key6": "3LQ12MXMA84ECTeBLugkuiCApVrMGHRQbfQgT8YVsnmNzUVHATH9qqyTjXLjyCdwmJVAEXsa4aZvEfswuh56d5ap",
  "key7": "3axjHPNW7PVMszhtruGjCQJSHNxTt3P4pzFutY92y2S6JkkKrmAj4Cv2wcrGk3hT9QetUrHz7h7SpmM2gQ5ZJz7a",
  "key8": "3CEGNdbSaa4oeX4UZyp77aNhso5Bk4UsbijEKwq1xcAgLMXcvZFFu4FRhsTz4y6PCQ49VHMFZGG1ecWzivrAQmbD",
  "key9": "3bR5tfryUq7kSGxNurfXABnyoHfho6BP3p3eqFgQb84LvEE5jGiDtftuvVoJyf15Zm1F4BQAFkmSe3pSQh6mn83Z",
  "key10": "3sz6KUhGs5USnJbWkHTbp8pzPUurocXvMaRMGcKR9RjauvaLRVgJ6wSqfY92R5kngaFqxJNmvfyWMCJT7zun93od",
  "key11": "ed7BbA1nrig8R552MSVYGh1rwLs6UQLRRvD4Zk4GQa5fX36ceuC9f456g1Z4bUiw2cJF4y8jQcHevYBgYkyFAnE",
  "key12": "4c395AWYiCeV9eAMnboVPNVeescb6swo2vxQXdi3YSj5ZkJHUpwTDfcF8iLKXd7d4w1FmdaxpT9B8irnNV5Nzs8q",
  "key13": "2FniS3gdReCeLmkHX8ojFb6xAWAupiENxwxxkfTFakFRZVjm7KeZJ5wpWcCH1RbnYFLziSe9fVv3Gg3FAFztfzBG",
  "key14": "2jSjxro3VuSb8iHtx4eb8pNF9ch2c6nyVAHVHktmyZ27pZckAoedE7amiSieJkJyG9ZuYv6Zqyh2FYsLEfun3cPd",
  "key15": "5VRPPLBokMUNyNM69b29FnLh213q4ta2iC5T3bedZ6QFBMzGcEE9aMiUVWC6RN2oX8xUEXu4hby6cD6F4Hp8BprJ",
  "key16": "4PMKDYj8SkW1idVUAWZE8GaLjDGgmhajjwCUhhpX6wrrXpVubFJ3FAEaMQNFQTdYNu6xmQJ6cyNDkwR2HQWELULm",
  "key17": "EUTfJVevD3BuKtzALGig8SkGZSY6zs2fBbfw29dwrZGhq3pUpc3uqBP3Wjp1BWwHwfTEcnYQGedAbG6DcwG7uCt",
  "key18": "3oZwEpfNY5QuQQ73YDVx2GydGvd3PLLQ2PnFS2EACdgb4tnDEHTLw6dCSkj5i11JpLxshZ35JWhWKYepBYVk5Xtq",
  "key19": "39WxPUsZuYDqGVSbSkoE1t9oZc3vcxP54Fk7WvSyMa3puRUqNfy73sHUw9687wrDup34ZoJo9BXjRpeoS87eeytS",
  "key20": "5y4DjcVWeeCu9th1eBhhFGptW4FemMzi2RThE6Nuc7e3H2SAToELhW9TchL1PqZz93BAX22mmerGehKEznYGCU8a",
  "key21": "3spdb3GKXE6Uy7sevuNdCJvct65c7Zx7qUu1Z4ps72W3DvMRjiiyYmpfJkxpJevzq87n6y8RsgbGtS6zzqBTcGC9",
  "key22": "2kGga7oYy7n7o6Sd7VmxKssPxpgVQ5VwDJeSHcqY9ocZFm75Zct4ZFVLtACRUv79yUWZtf82TivMspMpFZ6XbG4F",
  "key23": "2eyrSfQK7eXnuYqaohF8g8qqRXLPukkbvL8F48ASS27s2cG57mBJdQ17uoT3dVUMU8TN4SSxySwzvKDrFZhRNLqA",
  "key24": "5iYqg4HkQR2NoHTTatXU9wCzKFrZP8oZYdV63CKwN6LD24yQo8KbNCFNp2oeqkks1yriBBrcHcZXXFFPJZUZffyT",
  "key25": "31oG2ETqdSgzYktk2SaAUbrV9JGpcT6PL382WYbqDtopW8X7E9ogiDrkvCW4ucXixtDayzmZUhfMWLGR3rUp4CAa",
  "key26": "2rvY4i3LXczA8TknNGwcg39Uo1WHUHxNyhM4SGELP3YiTSMLnu4MrkJ7631za7rR79BAPWfPjNCpYCNDFYYgKbb4",
  "key27": "4AH8wEz9dJwgQYhBGTAB2TXjctKCD8pgBB6toFvdGV3ACK5qvqEGbqnUPUV7RFQvLcbEexykQHmRE6bijZZfpRti",
  "key28": "4wU7FydotdYUaCT5qVSc3jKaCa5qmXsrhZpkvg3FNSZJ3UG8jvMX4dFjDPNb9Z7dMgx6uAkJjEMnxyX6q3NyHwee",
  "key29": "4eLYhunwqHSF6xFik8tXRaNL2qFGxacEMewzJAy89D43hnq5pZwW7kxWKeHSs4wovBpeCmS6MwEysoZSBTzAYHUx",
  "key30": "J4eL5rPZmQ3gCUNtTYvS84AAyVEWCMPjq37hSkmECNmHFQUAGZpav3u1mKT8N27ukWGJRMPNHPqJvQ8HB9Q8mJM",
  "key31": "4Ko6kWGT46vqeermahcKES5oj56zZPgB4xskzC36Rx3gVXGUqYDeKEKHBK4gKd6i4vGnEFm6tfQ1sLDHFz4s7vty",
  "key32": "4JLCCMkgwQaiBb9145nGsdmBUcmaP8UigcXAZsRKSXeKW8gcfGowxLrReGpoq2f9VdSfbtHuTSp1aCUnUWVFNzJz",
  "key33": "5WvQ5pmdoX4ZdWWiqtc9vPjgB1vxBs1MtXXPKnQCAHd9XqWbKHXg9bbFLamXkh8XgkpXoCLbMXM3g7UYmroxiP8B",
  "key34": "ffsWVo3bawwNdN5NfV6h7Ru7sHTowcVEZnFuCHdtWLQuu6RGimsAh3j6HQWvUpE9DnCYLY6nqtaD7ZdTNaEErkf",
  "key35": "4pzY2LNu8wXrZCRKZyajqLcSM3nkDA9DxiFjzhbzB7oPu3rS5GhCadv59TRZyMeU74EDE9fRN9KgJcMgn1tKm3GR",
  "key36": "5NEWffvmTpYADzcTKqBaeiWHLpomdyoj9JdHQ1Y95c6dWWmYoicFCxksoccrsDm9QeekKjzkFdVRbKEmuTBbUVm6",
  "key37": "5PhgWeGWWWnD9xSNyZ5tLrYzdq5CqHVrigqdMZvFsx6LmPETy9q6LHTc5azGcPfKo9vYCBJGW5ksJFkNGWnLjrNC",
  "key38": "3WHHtsXPcW7PZ55GXmLm3CzRFK5U2zkaKJHD1SEB7mMkPgoFFJ4fZSDoH1UrjSXGWHTWfNonYrYW28hPUNzDi2AD",
  "key39": "pYKw2d8QU3MeY6RtYuxM9q2sJbukDgb42fjaPtNnNanHwasJsErj4hRQnT3tNnNHSVJSPQLicWeg5pLFfAUJXUD",
  "key40": "vS2iNCKCeiW4JReRUqExn5bbwBjFkxWvduYwV3Dk3s2hKbMbEtZZ4sBQutjxcJVRNfbA4SvJSSnMqDHSyN9oXst",
  "key41": "3noNoXoW6XqC7i7k8a7u24s38cifTwiwjB3scHKzprWqEosXqY6yB9LbZyiSqiqEVnSVYR5cgeEMQpNxA6rWitVn"
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
