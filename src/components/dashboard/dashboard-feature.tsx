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
    "SSocNbvBvoY7DzjWKXBZemrgFzAg9sm1EMFntjvRK1YfGvqjmBHjjYTTfdQM9tvfMgMxgarb4WB7nirXrt11G1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9ZbfRSKjSiYDhkJeGQsc1egxV688Yjwzur2yu78bCVHgKkF28xJtcUZffD35B37ydLBKChqqHhM2zFjinsGf46",
  "key1": "51RpkK8DLjvsE1X2rJQ3bDfKuyhfv1qRjh9chzt9ccJozCrhohnnovGdX4SotQ3eL1HSsBMnaC7Jb3JFH1rFVmND",
  "key2": "4NHdoxytagqsyZPT5cMBrAiWEg7JyMixQ1vzxQCYq88ZtZqZ5824bVEGVAXE1GJT9KV5dwbkQdea9uWtb6HRkFYQ",
  "key3": "2gzp8EzbR82kVwoBxCqbPY72CRHUfEGyXp2eG6BjJe69AamVdosQ6MAUVmKqnkm2Ygpg2PVRJKKZLX5yPa2zQioz",
  "key4": "RK3B3TYkYgX4WQPzZdkhYoeRtGora5fnxLsu4iRuR7QFjinn7gsvzLFNmXAB4pm1W7unsHtTUGSc3huaq7BkjMN",
  "key5": "2yQJTwkLbUpLuMXyrdCVxik9UVCGGonSz4QQD3Y6VbGKRaCmqoW2z2eY67PgsifRAkMQ4dUuCN8ScRsp5bCfUHtH",
  "key6": "5dw3SGaLzg3BKGirygCLwTUQJgcQrFcWBH9LwMRsYWfPnbvfv5pinrCZrWEwao6XL2VjJyreAFB1PXoLSARsJtoE",
  "key7": "GBCPmyqpZ7BgEWFmsPTpeBYvKSzF24AXA57tM1xQcS8NQHo1xBpsrgo1XbvxsHnrtSwLGGhnNnqsbchmD2x3KrU",
  "key8": "3X8Pn9zwccjDVWK9KGKFsZx3TaCG3n6SPadU7tPDCH1gJZpfzHyXpnZGDPSK4M1jxEdKa9N7b3dkMUqXVTDVr6YG",
  "key9": "jHRcFC8AJ5B8jUiLpVvGR6YxtJzZQibox8ddRyHH7uMg38eiAK5s8HwEWzTbTXan2KtcnthkssXuBSZy1Pz8mN8",
  "key10": "2Q3yAJm1XXF9UiZiMpAKb5TJeyG28esRWwikTLFbopjFpV6fzDJyBQ5A6wAftAzgUaHJn32Hr5i4gh1S3g5aaJUN",
  "key11": "4S5aSeeWxZyA9rmRdYoqh77TKAwMPkJmMoVzsa5c96iNjWqRoRgFSTwyBsr4JA3ooD9K4t1NEj2gGGgwqLZoApp7",
  "key12": "4tHLmEae2JAzWk4GkJPvHRAfwWHVFz3kLiT1RMaxgqVZvrxMzBTK4fkJn846y2FgtSvoLfWXVWofRoFSAhgTUt9T",
  "key13": "2YbKdkiz4sSd9NZS4Eaj6L15Kv4e8xRJe4fvB4jHjSf4cm3YuskGJDZXpboDhBA5cSVAZHTYMykws5vREjM9YDDJ",
  "key14": "29JGECqyRBQPPS9SYTdbsKUrBKk3k1f7LiVdnnAhofX3orzufSmhp2yupgFF7mFDmhstprmpmpArp7PPVKJYBM48",
  "key15": "5Gmn7EUwQhtWT9Z15ZwcaBL2BQEQEBSq9xrj2sNUj6BiqxCg3dFbLwcbJNDuHvNKjsJkXW4ZwjQcvJWJfPvBJj4U",
  "key16": "3V8EjT6cE1VvT1Mevb2rTsDGnnWaNCNk2bXc8qx8hP4W1J5F3RymEhUawqDrH5mz4zfzbi8i7DFAqQ9W3oJTyXEM",
  "key17": "3gfZPNmZSz8JSs4xrpc6rCFhuhkxoRgZYGkCrFzff8KFWXz6gqed4PJ9BHDFJ7MLQ7jgnmy8G17NRidUQ5iBTFjd",
  "key18": "5pNJQFCbeByj8GXTvosAHLf4pcJaTLDZVQwdGRmeBj3i7WWKvP9UdvR9AsMvfNWDePvBgGsh9FEFGpWNom4U9Mev",
  "key19": "2hMVyM48ZYEq1bx7ZFZkb7esNGeomRRawArq559GWiMVaq1ugiYSNQ5SKhSNjFQngpW5hR4Z5UXTyjXowSgDQpkc",
  "key20": "49C5TrdBvCPnrsD68MQeywMddxuKDTBJnrfQEW4BMkm517k41wuPV6Z113GPJmLbD6p6cpf1ZibKggZYnGv9NYoc",
  "key21": "2GdG9rCjNwaaNHiuXKdJDQnq3DwKseyGM2UxfX3Vy9SLyt79abfu9zgAvUveKEBbsqduXtwiaVt4VwVjeMjsaRHS",
  "key22": "pQSSYvLGJs4GUCxEKhiWUWkPBHdiGQVtvX4MWJ16z8nBBTHLTTLSMCMdFBEkWRn2CaJDC4acrYgozbLZHNmGjjR",
  "key23": "HyxYtQQ77yNcNPUwYiKayb7TXPwg9NDbmweZq1WFccULukBCvQr5Md5pjAAdX9iVfgqHzwmohNAHG4AhcvkJT66",
  "key24": "5mF6tbd3RTgXicmDeiiP8UgiFjFGRhf3Jvt2rVDKiqZhG1qo3Dv8TLmyhR5ZpqcHAs4pxeREqLZr9W8okyMZBySv",
  "key25": "5VAhL22ohaPjebhMFDUWiatLd13FJJHQEaoHoZ1Lqc6hxCNxodJK8krCvWwosXWDxzagkv4ynAHYHo5SArCpNZGc",
  "key26": "4XwxWLYS6Y17SJMy48rLAnxByxa3a37j7xhc7ndWMJjS4RQ69z5zRvVH4ZbXfpFVhRVL4PXu7vYZX2m9rtc3EeAG",
  "key27": "vEZZPdNhzHL9miuSxQHm2mi84eyqH9FzETP5b7ifAormxYKhgo7t8jHKh4PAzkANkVZVNd79mCrahGemmXFi4GX",
  "key28": "bqWTG4UMrTiXCErtBJUKXu2JAG2szHtp6Ht98DgC5qzH5YEMctfkaazk5DazySsTXzc4Tu4hkjEDpgLDEB5DXGV",
  "key29": "4NWfZojfJuPUxJ6vB44sEv7EV1r5xrfxLAfJLHYQfFgFT1MB763BB7XMio4T79QBXkhNKmoR55tCppmUbMTDVDhR",
  "key30": "49fAr4arh9etxZxjgDWzSgWG3zpwm5PfC1vxDBwoqL61adSXB8yqzRu8ES3TGavA9PkptQHeCzDFauFmUcpPpJUp",
  "key31": "5844DnWSCQuBQhjng2v5qq7echWU6riSu21suvyhcP1B6dibkyVDJvv9fkbBWhz8YkyvupXPhhHeCZ9ffVVWH8xM",
  "key32": "5nj3kRzqUd4a9YFdZNWaKRvj9TJHoBL3L8HDH5ZrUZBqkEXdc35fEth1toVLKUiKNwpMZCpwYBwcJesQqWckB3wo",
  "key33": "323XoFwQ9CCWpUrugc1US2zYPcGnZAFYazub8SXC2SaDPYfY2gFbESK8eZB7G2rdoN6qdRfWRz9Vx9TarU5wEGbp",
  "key34": "4NPiboTKK87CnCDbHjsDQxTM4DWwbVsz7aiTseanUyMLu8T4Q7u7HKt9iNFnZxSddDpVHFRv7qJXjxjjnzrEEjPw",
  "key35": "4mat4zN6mFhgkewPzhwo2n711NufjwxQXAv7tPLW4ogUAzuPUvjoaG9SeJzNeHGuvmwUnjuNKGrsXVtj7z8BQuiy",
  "key36": "AqaTKrVehpt7tfdKJhXdDz3McV9qobEte4CgJ5kdPaPksfMBpWQyK4XPJDNunMvdaDNxnP1NCzLSqHqm7k2Z2u1",
  "key37": "4E7Ffs7XzhvoapBjE65rFcvVQiUrcwQuVtQ3buDvuZsVXxFWGVH3nWTyy3pXB3qmwNEpsmAvxEUXhV4dQXCnm6a9",
  "key38": "54Vv6p2CC2XUFJZsMr9TkTL8YCHUCQ623BRKkpm87hdLm2nqxuy2SXTJk13iecTtDB2bt9ZNJKTo72g7uAwSFzz8",
  "key39": "2Xub6DrV8Ud2iw9CstndiZiac2zh5dSozMae3Ew2NgrAZmgvH98uukcV1PFTnAQyD6jwVeTjL4hDpwyCnAbrfJuy",
  "key40": "qpkjRnoPWpiZXJWMkVdSxieBqaN6vraMvKU85vks29RKigXrPjVv7DK4ajDTiCuWSxRaiHnrr7NJTjW4oTVAKww",
  "key41": "bDQ2hLSi5e2Au5VDmjaJZwGW7WJUuAjsxR5wXPB5F4xqXVgty9XnboDnPZxvHbr99rzyyfBAZ4vYY4wHoQtPGUX",
  "key42": "tTDDgQm6h8h1j9W8p9azMEgeMapAfU5eLeiPkspjFSRybopcgRaz9urFNtBYqrrsP23E2pZp4HFCDeAG8yy9jws",
  "key43": "4XVcvh3MjfAgajV3H6xfbekupbUxsiVmmCD6Tkb4PDqksoaABAzVVYDhHVdwKt9rr65tNXr3fkPrZsRRVqbH67Xb",
  "key44": "29jH8USLThDnPsopHka3F7i8dxyd827QCfQ5PQ7nEZKwWBSskrkUYwv1dDYWcvFBC6tHY9sc7SpHTPkddroFU7M7",
  "key45": "kScuobVYucw5kxZnpm1ZfL76Ynp4LNwLcyySX4MVhu9Hnkkx5yx3rXfBRZ6gURngPTZrnJWcdUVbEkJxLG1u7a2",
  "key46": "2BAU8dizhmyFPVnC6YzVqo9je5LH1vMow7vZuMjEF9RU57FzpxckafcyS9iKDPjHmUdwKBQAtFkehpwHsTCanDPt",
  "key47": "2CpnUMmKS4RWsy43m9rhWgNFm6wbPCs9CtCsY2oNJnci7i5RpYqQSXZELwtiomcdRyJ7AcWtuHWTgz9PWiQFW9bN",
  "key48": "CApg9bibRp3LRz51wpRuZYz6tbWvnEWQVTR8By6xkNe3kuZ7ojgaZi1SwpAqRtLHoge4kYwcyCVJERArhaUGDnd",
  "key49": "5X2oH9wRZKC7iXCecdPBfGeZG3F1ZdmoCJek8oLpobq5Fr4ScYuPiwxWqJ59JYHm4JC7PygkPqcH5b3J8y5inESu"
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
