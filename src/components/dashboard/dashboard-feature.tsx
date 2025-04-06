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
    "3dn6pyRRm3KR7CeV8NvpXqKYN7WL6wxaTe5DY1Na7YncqzuomYRZ8BU3chasuZqfF1JPW6v8C72HfWUc1Xk9DhXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kvDKq2dDuBHCKrD3PxzJCNMqXQnTtgjp43rxhcPkNVJwZUeWD6yws3JBBwuRtjE5hLgbC7z1LjP9JAq9KkaYMJk",
  "key1": "3VP5GGMsJGuEpQWJ9vzD19eyDnjyDVgksDiHR2nFXenw56EKgmr23Nj2diGnK4h8fsApiW82uLjeSaPpWA6P8zs2",
  "key2": "BpaZu6zxuVwquu1GSnW6nXP7UKWT6XJfpzsnbmhnL3Qd6cNqMmYBEtyxq8PADbqhZUotsd52wcAj2vUM5gEa4R7",
  "key3": "3nbxdWmEPU1ESHH57mgwqm8Bgvgzfx8p6WAPTmJHRGAB2vZonX3Te67FobXDrrovfik7zv64XLd5pRGcVE3PPvKJ",
  "key4": "2iECqvYC7hDqhPnf9qUw4fuabq1tLYE7NbuCyXUNXx73M98XoYPk77sqg8JDtepQ6WuYpgwqqSA8CBQGfDGf5dMu",
  "key5": "5rEP1kBKCx3ehWSKjCHxb8K4LMXBXmudvNfRYYPobDX8gfRot8PKhHEBfdkaVeJ9k9NZEBo34FQU1VrxV267qcos",
  "key6": "4cDwzwfNk7uiq6BM2i3bwZQsxRmHoFvDDwWeUMThJic61ZxPMi2gMeQ6BowpYRureDDh1gknusT2cLiAYVgPYzyo",
  "key7": "3beVaFM9JWXtwszqZaoaeNL1f7hWX92zSLyHXLQaxPXq3Jfew2pEAarWZBhiEVRfqmcg9nXRr8S2YUuYyLySGPdz",
  "key8": "56rZ5hfE52d3D34VpBbqaXpb7b2J7pTCLK2RKAguBdfjaNCcqScfVc4v5j7Sg4kCVWSm7G4QcvpGBigZLs6Ho5tM",
  "key9": "2YQtagrs6DVHdwsWk86LWHCBy1HZ838ZKM4Tm2yqf7bdb441iDb1bcRwTBJE3N6LwgkCJurqEyuhgUCY3ePkXkhG",
  "key10": "2SbYyt99DeCWov2FboBZTkqTKtzQ93T4djwRgh8p17433hEXfMFvrhAquNKtaFvVnaWyjesMhX2U31YS5vr7GnQZ",
  "key11": "5TGGJE7fbvmE2rN8XV3QvPC3abTfiGKSKSwHzbW5VQqhHTSMErnz2Ntv7d7BUrUk9dkdqt6ocpKc4igtFV97cmtx",
  "key12": "5MjQCiXeAb33oDsQcbBnNCQ22A5rNxk6iq8cGDFQpEbxW1WjV5zWTv5mPDw9EzfeoV8iAe3c7v8e6wQ5R3L5fShV",
  "key13": "mCkPPcnbz6St1c3YHJ7egHwNEbt4hp9SqaTXwTnW39cqMgRFy4icyoTUSQQ6LsHWY5pQW3W2fkNRFPnoynVtMFw",
  "key14": "2iRPR55jsrrDtaEv6vGTXK5RjdoegenWaryUPtYUYHTUy8Ue6iuk8PkkgqYRPkVvRXHriBBsJJVK6oMzTR1X4Pq6",
  "key15": "4QDuHUqv5CaA8Fjmn3xUdmNqg3B1tjA7ansLmZJ8vtggQc1F4HbGd6v6cBniy6pEffMFU1aVgL7Wp6YFVv7bCH1k",
  "key16": "4CgFqStv8prcRaewDk2Qv1HNu4bt2HgYfxbrbfKqYu6oPPrq2isn45CoeeMMqMDNHdGNY4NthSEpXzYnt6oQc12P",
  "key17": "4Fxkbz3Uwjzk2DA4P7tvgPKy2u86m18WZCrqvfs3UUWSguQSE8ju7PF9NRk2ZtEhjsBnWHBzepcSbNZoy5KB8rpb",
  "key18": "5YYazebxYy1KGsdiv5hcvh3UdaMagWZFrrsY4t6MHQureLXAdZCyeBXosRHk6EfWSx1pAcUXEh5Zxjcm9WR9JBh6",
  "key19": "48jcKacALC9TQykbtUJ64VKJ9j4Z211Myvdy8Jo58gYpS51ber8K4ZSLQcxZ9SAEap7XA874it3fpcsXqUay1iRu",
  "key20": "2Fuap1b5AvjXFnBV84ZUYE7SjtEtL5WZ563sVsnu4cS5o5Yy9gVG3vV4LiDxewWemms5TGFtMxE8uAKjQHVkZpRj",
  "key21": "3SQpvxEs6iLFLZwzX19JgSWZgL9EsEeArpraZL9peievEzpNM3JP3YXDbeRFujde17dghKYWk1g2gWhkxz3A36RB",
  "key22": "2jBezDXE6C5h84Q6hdU1XFuVkgEhh55xcsZPYzbrLSDujSD1QtfvNkNSbsYoMbVtisR7iJcNQ3ibjj2rr6uS5Tjx",
  "key23": "2YUdBonnB26moVZacmoSWUWcvjd5KaP1wzyghhL8AGBwmR8XmWs2HPw2cLmByamSHpnryCNwUG6eQXKHW3NAwnYR",
  "key24": "3jaZwbuYZSBWdiEXeFZBJwQzJ32ji7K5hJoRWzJqXjXRLD1akxvPuVRfun6rRvRJLLQy6UiHP7xXE2surgoXj4g2",
  "key25": "55bSN9zCvHxX4DFtnPHyKpVnWSK8h3y6sXDWwxZEfogerLcMATefZKLgbuTnDbBAM7FTJGUyFFhLEeNLB4vYNJ8t",
  "key26": "3Ei7uUaSBujwuneGzha8SMrEcmGhdPx4ZJWLAezgmBwATBKd5rJjSXNCsE3V1TXnQdsDFe7qb1sgx4uzscSc4srX",
  "key27": "2ZHWKsrq2np6V1mK7XBsXot1P1jLNpbnr1TpfPUsrbFkMpjY7m9qU7U9XysPmxKf1jxHmg8jWuzfHw7XJqw88WCe",
  "key28": "4soXoF1qW1qQsEFDae4e3LGtCcK3nXHfRjuyDg2xHJJgJnkZJMTJNT4cFy8JqcCDmYBF68UfFHy9ozCa8uaH8fV9",
  "key29": "4mni6vfUWamWktw41ivqHndQGqVcqu67D1phBd91k2tV3U9QPxTXAM8UCrNdhzE3u7yXTbysjpzDDeqq7cbVuSbz",
  "key30": "4z9dw73x1t6ATL4cePmvvnhHRCkykzWbhfcR39CbZ4JuxsUkLaCajZm5B9LXM1ZXuX6LHjGHmcZQJ91X3E93zCUg",
  "key31": "5bMZozBbafGzGf2cZatdec1JMfcgwSpfBrcdnr9wFRLYXJWQ6rHGitfzSDZveWHf75TEFM5m8zZTvUYLwswuLNsM",
  "key32": "49LuS8CkCDkuV3fWYrBBgfdb2qf5Yxar38cqenpdYiDkBNH1J86KGo1PcEaAQ89D9Zaj8WFGnTmKTqKiLt9E6fME",
  "key33": "2VTBZvGw9BAuZzx1bHuDH5eBrFzD9D62jWGNwQtQPxSDYnAEkVpkcdNTtxKSTHjHWksvYnD4kdBzoLTB9CoRuxMH",
  "key34": "2nDDpw4ao37rjTtnM3BycCnwx6ehdVuuPGtNQCkL7FHyPAaY3xtGcyyTLzsgTA5ykHwfcjWovZtGTD4yuycwZP8b",
  "key35": "492LcnCwbaYwLsSpgichuemPwe6dyk87uSnQ7rEQ9vzVTz7uoruS2Xi1hBzG7Wpwd8NUathM8KijQbv8cDALHeXS",
  "key36": "5FGSkA7e83qELja7xDHRJZEqMHvxokwbVax6vptDqZzDfqJoAgHBshnvyDyEs29oEEmYqDrHFfJ3XVKeVZCHxbGT",
  "key37": "32pof5UjfsStpQcMz2pEvE54WJfLPdzvjmRxU4o1qMNZ1Y1eoubeJHjqRHuAgdBYrBMbMxCy5vUCGRLWCUgGmf2B",
  "key38": "4cb7PzpYRqMzo2Yqqc6t6iG6PzuyzqWrsvV2EdsJT4HiZhCJWDffY1YpvW2Hebd2v111zkA6hiJicXdntJ4KydMR",
  "key39": "4R7sa8MVoz7bPzYZWEkS7X3rvpe2fokC1ZYfhW59nHTpVip7TSopueeQC6GApEDywVtUmMwudiuPycvXVp1dL7KW",
  "key40": "qXQppktkAK6Cdh61sqHG3CAqe9a54QLp6sQSuPAfaXotgEwp5zCPnTAVNQjGFbkwt32Jcufg5MGoZxND3QVP9sb",
  "key41": "5kgBHegrAMaygRaAuVhapeMq6nKh8edckGF26J7k4w6Mqd2WD8YEVu6GoTGJ4MkfVJnhx2iXxyMT77b1otSGbpYd",
  "key42": "3ejTx4BnNBNQVRFxXXHMFbFqWjyDQTEitMhhxFNwpkVYdnzuiyGwHf9CECavdtFq6YrXJF3GBNLACE2W7NhCquv4",
  "key43": "4gHb4AiRj8eDxTzsPRnhVgT4N1rHs8b6ScKutq8VrnpMJQ7zrhzBsfThFo1xt4MekJ9zdnsVaPhqu24GxDMJYiZW",
  "key44": "3qCRZnx2Z1NoH5fvL44Vcinp6bEahq4Zg4Xf85vHAyyGxHns9Ejijy6YMytcN5agUP4KSs3uSKXTsWK3i2sbT4V6",
  "key45": "ajSoSjdHoUtqPU9qd5ZETAFqtCLdyovPP4jWmxkRpnvHgNvhAHxWddDoaxiufYsYGCAJ8ePrvpGDSotJuM9ndnq",
  "key46": "EWPb93LjDiGroi8GJizz89EdB4QHQnY9oRBvWGLx9iGZQu2ee4GkKd2SjLV6vRZv9g6qCW9mjKAPwMkijXwjrER",
  "key47": "3YJtVxwMjX7MrNWgk8NrwYkM5p7t29MbAaSqhLkfAKacXnZtdWmCdm4MULdUzLYAuvSnCGoVdZdKM2wD8uxpjZoq"
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
