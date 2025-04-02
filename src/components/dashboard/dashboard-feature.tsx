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
    "4HQuuBpJ9efH4sZPkuZ2W4NQLF94N3XSLvbjcoJZrRh2V7cyC6K2aroxHEc5ewJH6hShwmY2zh83dARw1VxwDJJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41922ePjaupLykFZYv1Ujv4XP3rGm6i33j98LpZz46QTcfmoZK6157q9qd4xSPcWM2b8xkjyorYqoGRgqe6d7v98",
  "key1": "7vz7njy7S1XPyam7SvG8mCXy6XyQdvfTiu6R9yL4mTecbiyvKWqeoRTkxUyrxxMok2QDkuP1Tv933rmfq4BXwe1",
  "key2": "5LpWufsVtEhg7A3fsSCZUfqPLMWa6QAGdf33Co2ZQQKqLZrnvt2FE1BsddrXHhRe8k8wPo8nsCbv3GMeiEJuBW9Q",
  "key3": "4iPYf99g4ossiyfDJDMCZG7vQpY2vBR1V455EtXgc5cHkSyuj48AZhw4iQpLXmnS9pD2tJHpdjM6StxfgemPKmfa",
  "key4": "ycA6WPh6qt91E6Joh4z17AMBrXosdz9UspuxTyJ8BYvvARAcrpPaofR8xQMhex4YiCgZF5WpwKS4kzEHhNdtSXe",
  "key5": "3hLvDtYXZEngSYmZMttUwCz3rQejvxYPXGPQbjc6gtWuAZafqyguacGtgFeFK1ZPLqfPC6hG62tgGNyBMkVTK8tJ",
  "key6": "3i9bUbbW6nzixajwTYtZCLbyv9iYASZeeAA1mMfqGZtWrjMQxgRurKu8Rcmn7JbavbPVoboboPGS5BgbsJJvNhvo",
  "key7": "3UE4ugwZ6cAmw3L9c2EyLQqWdJf32hsrYHL9tpkFFQKHo9ZzsPHFWvniDMgpCcVeNWQGbsijGbA2jLQTp1VLdJxR",
  "key8": "3byWNKvYxGzNZ3ZpbvZgkqcZD1fyXDDCuU2L9Ez8TejyHaJ4dJuYvaGsfD2MJqbyamsrGq4tVXP24GQW6b8MLW6d",
  "key9": "2bJHENKShWwG9ghi8fTpogW15YyH85fjogcJKdZK2CPcpNRcdeVTA53EKoam6iwhg2nxBkAZHRJ8FahBbUBveH8P",
  "key10": "3o8Vpt2u7hCxWHgCFHqhbHtWb9iDsJrkyrV376vat1BbkdcbmbCuUkdBF3QMBW5zMVGrdhQwr56fRLXcEKhZBRCi",
  "key11": "B2gWQdUs6UFnFAk2qd199ntHeWcaFpjr3XyNuFqyoh8ZBsWyXeFU3zzmCuRm3DmdUm1CMjgKMYDzvJqWEFgk3HS",
  "key12": "2JXa4yrHjdGcgtKCkwQvmtdJDn6Qb5E9k1JS5EnTixxcsXrmDmnDjNmgZv5LHmdP2PprFi6B5hrKdh2pcFSyc1Jj",
  "key13": "ZNLUcr8GpMVorNsXozcU3Vy2ax8SYAKoqoEyTa6qy8aAiK8tSL21pWCjcvW1phrmz4YptDKmTKyN7aZZ4xgfwcZ",
  "key14": "2oTbqL5uyuiWBhTJJ6WcRhEy4KFdikBHwCEi4bbrEpx3F2kBTBHhDamKp9fJpymmTtEduyyQRrTPaiRZsTqV7NmD",
  "key15": "4nu2G4EVBEtJCo94RL529sY9CtvozmiQZZ1wdck4gVygaapZu2aHx1mfz6zvJzvyiBeDnbUxK6usn1pQTcb8kX3S",
  "key16": "9TtZSeZzyRcJjwqREbJGF4BK5YZrvf8vhW7yABg8j9mXNheJz9dgt2szag9eEtDjB4PwHWYzLR1nqiiURjSzwg5",
  "key17": "SLLwVED2qiTAi2mrMGYTepBvZHH4R4qzd5CcQDjb1kmXdojQe4mR4anEXomG2PmPTv7oSsQ8iamaJFYVXaPMGkS",
  "key18": "33tyLGJfuzLMBV16sYbNFf5j8HF62xerajiZDYJJsVdUNAhpcDvKT8ChcwrMZPvDB57ACmoiRGZxsxD22mEpsKzW",
  "key19": "4V2jZXCESQYj3kPpxmHqKw2RibRaKLfavZxoYgJHSbehk8PBEdYNH7mYvwyNjyy6aSrkxfpbiG7b5nWMcdnDdif3",
  "key20": "5PjPjS1zkpschCjRjJUrn2xydUv9LtComKfJBWdfusLoALejcCLesNrmVZuqE7pMcJBoh8xNu5x9ZnBGYkCMBcTG",
  "key21": "4ZQvFrrEcNWzK3iMWukVNwn6rivNjBgtpj4Ws2bMDcJkN9KAzb6LR4Ga3nkQV7WHGTMah9e5cEDNeXXNWxWPK5X2",
  "key22": "3d9tGTGui6Lm1qay5mZorwaxePdTuEJkAHsGKrPtXZfh5F1sp9VzYUQ154U5PhxqCX4EAHjdjrG6YrsXzrry1Vz3",
  "key23": "5umGtdJxsP73ons4VDQvwykwxcLHjSDEewGEmgxyim42NQikSH2ygAcfLrenkVCGMhKDE5F8szMU5DRshGZp33uL",
  "key24": "5fVaoBp74Bw1Jefxok7up1QXApMzAuy2xfBTVDkNcmD1kYhvJFcvjWay6osrCUZhgDaQJPZA3PTNE4TvMK9MBWa2",
  "key25": "wx4G7h5rBjbvw9JeWtaeP7pYfmDBo1dc8KEEQGn4vfET4ycsU1Jo31NtN3NzMMVXT8SxQgn9EemtiHG7oB5ZoLh",
  "key26": "3ArrwLPvskF1SpHVyoj9PUDNWsc4XasZ6n6gAXAWKUxV8n9yRb33ZS8WDZon3NZdK1jHXc6p1kWZhT8FERMq6Kpc",
  "key27": "2Ct1PDrZ3dTUWSd4yDrtd8jVtPiYAM34TndbbVFVSxNSEzbSV2kGD98rzSVmFHp6UaPJRi84Fgs8TeiSGhgwmefo",
  "key28": "3U9P1U5MZs7TS9nXgqrweTZCnTuZTRMk49mSFS2amYWZ5JvyUw6vUDjEQa49iadkGWB6zcm7bVSsq6YpS6UmpQ3W",
  "key29": "3YRVDE26X6eGt4ti3k4a9SGa83Rf13WRRi7Yn21h3DqoAXyFFjrF8Dq88kgieQJATzwndMeU4LivtBhhSW4F5VPR",
  "key30": "3TFB5K4ySQfuFtSXbZpyrYpu34WxZG6LLdMJuTK17stpfnqnJ2xEB5xdYQVV7d2xWZGBRNPB1o8uL7y7jUDtkbQG",
  "key31": "3WrSPnvbfbte5nDx5MjHAp8RokbeZXBTxb6CyHYNFametboEaTHiYaFvhWoAxFu7FVkBDA7QFGxozRwVCTF5CVPf",
  "key32": "XnAPtiMver7gTzWRaSCtVWfL3hHdzBYfWP4eZvh2MFdMkYzaiJDgUwmbhN7z7ggtoQ7vDKMqhaabxC4STpns1cs",
  "key33": "4ziupyS8f8ebHJbtbZRavpg8n7Ngi5pWdNSWYkWfdmZQNDxVRTa7NGWLuBBnxZXW7yB6oiatnPNapkKBVVo2MAoP",
  "key34": "5C2Ddtwm5Ltfu73T5Bkfy5k4HfMhbR3pSMqjhkwgGDu8WJeJnSS4nNZuxG7h9qkhALkm4GfAfbHZiwT7R17zsV1i",
  "key35": "4Y7HTD9ZadnUuNywMSw1qQq49PevEZmAvBNLJu9rhMXjHr7RTU9AnNFVyoHQE2LSkvzfAYVjUN899nEUTjDdaXXm",
  "key36": "3rc4ZZspBCu86rWj7axr7Kta3YDktCfHyDRmtSgzVf8ok1P5LG8HTV2Aj4fzAiLuA2PAZEf1ojdBq7agkXAzhydv",
  "key37": "5zDycogaBAivdGrbg7SyWWrgwW2mFccnX5UieqjNbnAvDdvDut1EDVLejSmJUD8kr4SZuFPpB9RaL91fSFccUqNs"
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
