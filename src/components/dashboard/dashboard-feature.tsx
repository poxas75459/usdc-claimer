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
    "4Ha8wC5HyTYMRPgJskVzBG8xXy2EgpAa6DNbwDxDLQZFuZUvX7RBpE7aDbBQQV2fPpJhzKTYdn9dX1YcQmMynufH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4Shau3hv23ymKT435F7rxBsBj5egbtFoSSK9D795r5CCJTXsgA3bFRJbEXATMNJf8tN54gaQSvm3vkY5fHaYcF",
  "key1": "2wNxmB4TNAt2oXyMJu4RhYUGdtrfKDWABrng3Qnf9ebQRB2zdt6QHEQvv5Ve8t3oNjtHhP3Pny1u7eK4SbzpVNAT",
  "key2": "4m8qsjCN9r5uBGGunbGiQEwCavE57M7VT1XPzZtJ2UbgBmUvGt1JqSDDwHP7RX5oRHEz2vMBuioBXBagYq6xUHdh",
  "key3": "5Jv1VhTSQx1jRxeSHEq61V5j2ajQzofyt7qVqemsU5bPcR4YpatiUn6gU36w6NKpzkm4d3uyKWmAdePwngUtowjL",
  "key4": "45QnhmiSMNkxA8yDFqQRJKRhjwBoWt7UgFyKhWPCLSSyer1k83hsSQFQU2UuP5JwBwvkwV3Ks4xsCc47znkSwSW5",
  "key5": "3LCdjuYqrZnBf44q3hXnJXo9NRoWML5RYQqSVhakYWiQx3CVcjyYf9UKR7VMknnGgz4r4RguacsXgbb9eg2qWrPR",
  "key6": "2yu31PKEFgcKCvxEWbUm4tonY8Xi15a1tf19r6vd3JQCeJYksBN76rSb7JXBzZse8HfxLSgaVJKSAc82FSCQ2qnP",
  "key7": "2NC8cqriRJhVGPw8rqsdSkcGNWBJW7MS5VWDgET65oaJYd4dZNL6ycTS6P2mqBnKs691kJ1pA9jbFvhefHCPjLA3",
  "key8": "4SYCQm7AJAD5gk9S8kEzf96bSqpfuBNp5Fvz9WDZNw2B4XXKWWpTbhS6JVgbdowgu7oHCb9RmQQpuaFVZXVvCrsC",
  "key9": "2mbwatjhdYL5oTsHSYJB6iM4tXjiHfvoZxVmU198VUoCgtxMbx7yeMRacpvsSoB3HS2md7zyrT6Py7cbuy9MDp4Y",
  "key10": "2asueQjohVRSe2Jk34pqq6TZ3sQhA4FiQWbFwhRRWuLva82isL3cHhimeaJ5CjFkeUvPxii4SGwYh8MdxG9HwPXg",
  "key11": "3PmQ6DLJi7Cqy6KWAN88etFfgBZj7HamvxFtEqCZki3rWbbZE7cdPRnQaKxbsskPaJNNhEr4gCjMEPXawXiTGUsv",
  "key12": "4dMYGsmFjLyY447viP6zY8LET9p7WuvrLXSW951chh7gW4yaFjucZnstXFEqotyY3zshp4Mv7wyhy1ZV96MAEuFV",
  "key13": "41b6GsMFPiZnRYo953Hqq8GoSH2kLE2jiqKsdeHG5XstK6DaEH1bDV7t7vEGKSeu5BJETwFWUbK8w2JxEa2z63pg",
  "key14": "5d4B6Y2V4ozVCtoTJxSicaAXoHoRvPmT9NAQWzcRHJa3H952Ysx8cTSqXR3pTFD1nhS7PAC6tzNDjpQb6NL1kgkQ",
  "key15": "3PsKunh1chQZqshKiLNPD4fehvjHPmB8n6eeUGEuPXcJeRyZYABax59s3FPhY15tctmEFvM8hhQEWxX9Q2o8b1U8",
  "key16": "4JoYa3oYRNXVRGmgWUs6HWge5vLfLiY5CKtoYuFWbJmxsfQauXge1QvTjqMheetUmSGEmTVseRcvKCgxhWhiV7Xf",
  "key17": "2U8P795xdNvk7AHaXGEVv8Hp5SwY55TttKHJ8zmrTC3bCCpdoR7iBLdjLXU9keLcGb8GoWfYGB3AJf3aiTvix5bU",
  "key18": "4u1qewRNuRiAmCZXxuEL2Wnq424tr9HmwDpGUknvDTE7N9iQJVp5GSYkh2pwN6hx53cCarVfWWpm5h3vzmMUTh6F",
  "key19": "5tFqhdjYSa2zcAv56G6jizEXMWc5WTPRAwBvgttr3Dx65tjCdZxdsfnYb5Q291rQs38Hp7asXMXhX2yFGtJDWjdF",
  "key20": "66WTRXHc7SvNJutH6RUjWz9BXv5ARt2sK52mx1MwSBoyy3nFSz4uqA5nxUNECefE4eTSezSZW3enm6AWoaLJso4N",
  "key21": "3xiSqegHYqJGUoT1bysSfBuB4f3Nc5UR347zN97dT9u89EX7QxUanYDcX6LtcCMFGNCip8ctATj35rQ7WYCat3Gw",
  "key22": "4k8UAfKJfwQdhgbttoxPJHUbjFnncvfUqXry58gdnRaxLFZ3aEnP9URK1wyyzS4DLKzvMaNQwvwdXNhhRxAk9Xv7",
  "key23": "4svMKps6qjBkFLbm2DdHMzsQwje8eR9h7zZLmkTcdj4eKMKfYNXUGnjwiH7zzWom9KLJztG6CzzqvJ5RLRVuQ71t",
  "key24": "2PmUwmhVxWdaThMVsodBhMUs5XXPHhnsAf5CiG9dehCmF4xRJjotRQ6i5iaFHgSZwBQsFjJaV7NfCpPxatidYR3t",
  "key25": "4cRaokX3jT2JqSzqjF5LAyBLVamHXeDzpwXXB9iseHrDf2dUrHRcEC97uag8N4VPkqhmSdRDCtg8KaoM65NfwzPV",
  "key26": "5KNq4AsJq5KpattpFABiKafRh8A1Z8tBYjv5n9RUxMDdbDKZu742y8gpTU44pkfWWVDqoPq9FGAgpXwSZG7rsPA8",
  "key27": "t1o6ZKJD6YgmUA3hJML1JJhWTU4rC8GUGcPEZcXRtXwuRJz8CVGp1LbWAAeJ6noPX2RWxbsUNKK1iboxgBk9V8z",
  "key28": "4KVu6go2VhFPK9NNU81cZj7twBeymLyv1ueA9RPQ3sNGpavy2KHsDgmcdoi4GV573BkaD1hVodTB5TJUSrNqNvAA",
  "key29": "3XVy3xBnqsME6McLjJ6CgyNFR4gnLGDjyFm4F215LrDFkw8aEbxWAquHBCpra524ESTAsqZTtf2jEacKoHyy47XU",
  "key30": "319FxuXnkUFJ9QMN8BtaoG5pCNYj5wr1w5PA5qEiTisy3Htg69dphwafKWZ6szcFMjpqBAZmErr7R52DPZXp2TCc",
  "key31": "5iV69xSXHViAEzp849V8TiEK7GzAMgUbbxZTfBEuMy4ETfbQMHqby9aRi9mA4TUJMQcGMFtXFppzYixsjmiRJjHz",
  "key32": "5yKnwuxWAT5aHMLs8RwuDAUPF1NFfHvngJKar6ehGrhQ3yyFxP6J2uuMT839o5F2YvG7iHUG66KwrVmmMphkBi5A",
  "key33": "HHz1dX83Bi6mdyz8hMRgcFnmP3buBBxLTwXYgLLrerPjJw92XSZtGmDUiJxUYaDzGac8rotipKRFMxqk9KXpuDQ",
  "key34": "4U7uZcmJ6nn1TH3qtYNPgKkPgYS6RvniqR7bXcFgZ3LXfFMpNNfwTqvyqQ6tkqhfFHhLayA3TZp1QrV8u1g27QRq",
  "key35": "29uSWUGQKNq5LpHVRohStG9kMVx5uJpif5BXHoE1PSJAVZcrTjcyZ2ERzAJs5VMBsrquYEMMAWDPR8cPbzsiB4ME",
  "key36": "66YrS3xKgp3aWoSFcsGZs59Ddxy6QpPdu7Fg8nJ1JfDg7wAPxoTKfXQTKqqvvpV1ACuQoW82ztHe2FVdqeB5M6d4",
  "key37": "2qGtegeA19xx7TTHLPeExcww1LNwpkqgkUkpiw434yZ7EcfHoeR9RAqS286KZcyW75ECcMGrW2CJwAJRgd3VRKfq",
  "key38": "49iot9KNBaPXSvyFf99gQws745bXGYgRd2Hpn3vCncDmWBu9ASmemzscZRtWpCuFBwk7DfR2Xwb7ZFa1od8c8eik",
  "key39": "3DhMjWqfx724AsYXAobC1Yv4Lmya7z6Qmfebay78EHxEHFV2Xn9BvRKEhZhvAra1hGi1atCQp8xviuoAFETBLzgm",
  "key40": "44qBpCCsUhp5r3pq9kG9rFTS7CMfe5g32VvynLU8BKK3feCzN9Y355bxCzUMTmwbhxTtngQDJWLZzxGk9eqLKfHt",
  "key41": "2n7PoLHmoYFjD3C1R4S9MKccbv7sU5g9sVGnCPuaZNwot5HovWc139L2296Kk4SqUHPPXSsN8STGoeE1NxVBsARV",
  "key42": "4BUTgoceuFFmNPcaM68Ako1BJUQtquFdJhctdCKdcbJozyFsRcziK7yuXXbarHXFEujjYZCJAVvypfkFBJDYTFZP",
  "key43": "2EXGyJ8qoxf6xN2sop2QhZgmRWxTFdFhZUheqCW2wZZGwz5fTWUSVWffse2Go75iGHyaS4AzoYL6v794eAjnYtsc",
  "key44": "3Awy58nd34L3DvW2WwtBAMfjd7Zbzi8og4nbS91fTyvLREqGDuWDa9nyFnCxSMW29YqBmugB5z7PCrVHE1vrPgzg",
  "key45": "4Vg3WfNijzfpTJzDYVandSbBBinekSF9fT2ZsuTojvukbBz1XbHk18AG4ptK82MpmRaYLGBLhpawib5ngQgrHqzr",
  "key46": "AXuKkFjFFsXigG8MENQCiFghZVm9pUsFFuCcLrCK78ftg722wFQNgiJnsTR7Y5kwYYYbxCCkGGQbbcQxVZva6vD",
  "key47": "2FGzac8UVQMmWWJRNfEXFrhgS63bzcet2bgrcvpNMUn82n9BaD1wwiAMQvUmrQWCAhaKR4zqeH5zzCJ4X9LCxdVG",
  "key48": "2LHCP2zEhqNkwMMU3fiSJfURQxQgrfnqGpV8u9rXMym4E8jEDnNGiQbVfr9j3JyzV4DXVBCqZQUTH1L3Vn4hpN9N"
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
