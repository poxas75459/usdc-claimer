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
    "2THhy2ZV7n8HibiqaRvJQJZnDFbz3hSvDEAqhHyBgTvAAjgaDLogs1FwDwxKG1YUf1exS1bNuUMpd6i9Dq7KhMXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvXscHFiZGQDThiLW97Ff4hb2KiYb2W7qi92DHXPNHKHcmLyrQvPSvYL1m3M5MVLYvL5w1jMPAG7Sd4GFbFfn2t",
  "key1": "5Coo8fJ6VLUnuQPWLXEhfV5nXM95FyFAv6Jzj29EZ7yWx3erhbJfApLZqZF9XaHdRzBugdgvqSwUmpQj7iMiSeQJ",
  "key2": "52MVhc8TZX8Lg2aEmhLzBCq6XJnFwuZJ6gCEjEh7c7qvoWgT5MKuzu8G4FQqfeBPjPqugWnFKhnmVfq6LJbViBBb",
  "key3": "3xeK2eHus3NqNEJVqcjXG3ATs3Vm1n33i31M4jeYv8ACFhj5eEqdDKkqasU2nPkEui5tpshu5XRKmmitDxv1fk19",
  "key4": "3bDE2cnSvSt1wNazrwHBamXxMaejFg3SkeiSnDAiha1HNX1UoA9KAZBQqmNXYMuC87WvWhimdU29HACMJpJFzRC3",
  "key5": "2ucDgr5dcsDSpNLMerZv5QZ14YNCvx1mBZoqQxCmY22wyMrADBznXdAgHra82FWEFHHF1zbTScNquR2YxK2pFivF",
  "key6": "3PSPDWg6iVHwsfqSq5stfYuKSYXJ1MuLehqS7985wdwvCNhrUpBF6FV6BLHiLGrg4hKzoPVkPoPYDJwsfLWR8e3N",
  "key7": "AQ6ERMSDBFWSWHetMPjXXYpXL8ChYFLXqoMsxGDXcLvm5ZdVchVeBhcLPGmNeKYpyTy8CTourhXB64qkmeJLVip",
  "key8": "4hDk5eArrA1HaruN9ApVqCniuaTrbpzqcoZ2eUAwRkjJKzhxMNThhks3NFEhsP4furmmEFyhEgWiBU5AMoBuchZu",
  "key9": "3ZEcbNZZRxqQ3n1eToC67RNeJSNnTkqhNR2ZyEBkHB9e32t7y3NeUXTZrv7sNDdYUcTFZu5e5iGx2TWhHLXtwYxg",
  "key10": "5LhUxih5Hu9RqCRBD4fHzngXdMVBY8EMsjGQPpXYcVtPyWdDfybYZuQr82PReQNU9KnjkxRMKqMg3GQyQ7DEKueh",
  "key11": "s619wJ5dmhjbkoxUDmDP9HMsEnRiAGokWXzJ3Ch233jRyDz65v2c46JKRqLXevqqhP9evH8PiGED9pXsEU2cZVL",
  "key12": "25tYWnhT8ngXcvfmua4GBjUJEgFj6SzQUS1ZUvwb6oBhgyr8zk76UY4ffZnFXiaAJhvLpdBSg9Vx4yTWdQS2Bt9u",
  "key13": "4NimusUyYVCAMDKMCmyEfeiDybgocXwxSgMTmar7EfgRp4tktC5fiKVFNfCxmW8Y45J5DWZUyJNAcfhKpuMsDMzS",
  "key14": "2S2iRr3QiMc7YTuwZuVF96GPWWW8w9jYL3VkQSHP5RvrN5182PEQCyFXZF6bBD8Y1b58bwCTXin4Daj1t9mdcJrd",
  "key15": "5Gw6C6ZbLfZFQwPxuQoUnVJYrUGzjTbYjEfe6QYeajvVukaZKg9CDRUhgCP3mD6ho83HiPijFZrUbH42bVC4KcYQ",
  "key16": "5qB6bXm7fudqGdW9QQRn3K419nDG9PXKnzRPDTScfgzwMY61ZjNnH1arTjzq68hbx3vr9BDpVr9TFA7yjQqH2Wa4",
  "key17": "4wGUNdUU5jihaqawbWwVuCJWyZmhgYbRHh14DpatdMGGTU6qi6dnopG7CMCBx3Wtf2fEWPn8S8dhmDyk1bJw4EBc",
  "key18": "3wvCqzFgNgcqEJDiUgnnwBD82bo7i3hETZpwGukfBRV9oRp4ZXT2QdX2nzbKU6XHCxnwkEFksSoEv84WMjTk2kKx",
  "key19": "2ST79FUqvgcmhPykSS2tHjHLHJTFZmQYcqw7r5gsneQGM4u75yhDhMwPBS7gcwPNKZeZF1Nndq3U5HQX4cBNznGC",
  "key20": "4ydY2XEpWYjLBBAgxxNciLoRSrfftHqR9jrzngmD5EZTLKMfKLXjY5y8Moge9Wsvvpit5R77tMGwn3m6gATgCwRm",
  "key21": "8hgdZLCYDDh6T2C5en7TNmyeMzfmbLWHhfg94qm1LnRFVjP5ZMKnvT7fmaoxSSZiZfWnxkDKTmxQREuw9uvnFQT",
  "key22": "2WmCRwuFRZX2YpgxRufheqFEXRavDqXfWRVB1eezRVmkmKH9rPJNYqJFgwCWB5b1FkRcA4dDpWjFGQL5tcGW4GEk",
  "key23": "4c5jN9jjZkrQqXWbAC8BPXBLFc78xK7z7AmhR9ayxU2iQe4qFAbZa2jqvnv2zmpupYWRnWvr9GSaNnyLiLzzMwVy",
  "key24": "K594aXqS1zLuWEzgRFuXDmvBU5UxX8kxmLuR8ceBCRQQotgHtLShx6QPAaePVqEhcZAR2APRUu4YzdKeeyRX6Hi",
  "key25": "5PRXGKaLaRnrLHPnjjPEXSKKnHjTHJJbBnSKmVYu3i3DAYPjWExByQDvH97uZvPfw4Wyzjh7GxuFnEETaz8i1YmB",
  "key26": "3hsryrKyb6D7QWhHbsJdRmsS89okYXu2RqfxoegF5vBQNKG3coAQUHUe4zUPQC4dKyKCMz4GoocpjYTbpBfeCzLW",
  "key27": "3GDGjUyMP6vMUsYzykEWt2UKLjkUScmPdnDQFc1kVXqpZJhehksCfNe8KgpN9dUa8KaYX9P98JdTBqdTKTCEiPHj",
  "key28": "AVWR8s6npcrDrF8WPEfPng4ebeubLBngUj3oTTEbhmLKMUUJfiH5S2ULBMnfmqY45HtMdce11vmXxSDHLDaS7Cp",
  "key29": "5uch9uRUz6oJYeM6LjPfqsp1ewrdppzniMgtaKn1ZQQkEu45hqoERdwH5Q5k2Xo1JJRbdiYgNkB6RN9Vh9U4MvTC",
  "key30": "5TvStyvWzPQBvp43UGFs46yefnaHGwNjoDZCtfyhEVGAaxy9CALCKR7PmqrzRep7QByKd7myoNGMh6ETjmWKGpx5",
  "key31": "2v7Ufj9tSUSp8yVwAQPw1UQQUBG8uAEZFA86bM6ne7FBa5MgUzhAAfMKLMw8ddF1vyDF1JwNHAXMLXH33eK6ZcUh",
  "key32": "3APmJ9kooLvXoKTATisWVfSTcgjmskcMJQ3tcmDbzVDNfP7MwYby8XyhRKPya5x7s4oEkcoeKhJAgovRkSffJdzr",
  "key33": "t3VNdQf418yZgTCG4dFodGcZrBp28EH7XrobKXeR6U96owMH4WXRtPfFWrAgEJJdn2CeTzwVBoybuLuS9uLcNFf",
  "key34": "67kazyEfB9XWQy5NPMKyktxJzucnanwWuTTSSQcsjKnVmcfHYb95LFUfPfPQFQLx5rvnYWHjvCUBXTBqrzqemxj2",
  "key35": "33oJjYWoUV8uPDVntV3mdNSFJBhmJchGSL22vc14SM5zTBLajPp1nq1EvcHHYx7ih2qQ6Gb7JCJyNVDjLehd88Ci",
  "key36": "4uhu3dxr5mSVtL7h8DZyjpYyc2JjitmDmbLepeXzuZS8SQdy8DX2V8Aqps3r3sVVeZdcjRJu687kppKPYpqwa3HN",
  "key37": "ZN8BTaeprtQZcXniynbKM5YyF2t7Rio8GXzKjTD9BUVQY4ueqTDFUmj38iFmSuHUgmnoi5yUSGzWJSuzAvywRzG",
  "key38": "5HRUkChProdVosiqtdH6326JYHnAhcpan7V7QfGJXFxasW1Bq2G6Seh2W4spYBmiqKGUt61M1yAnYeGkzTLk7eyp",
  "key39": "5u9eURA7StS555uJR5oR5ojT6Qegmpv5b2UdGHLCcenCYSueAEd8zkQFKQKraC5dq36BJYMjVN57cRokhhVMyA8b",
  "key40": "2RvYoriAwSDc1diVA76QKTujjkvKxx75AiGqA2gB5UVUJ6vg8LmfsE6cXpMjtvGMfVNwV4DSu9aQhjoAWUxvRrCX",
  "key41": "F1KypNBNXJK5fmjuv55hxUDjPRdfPV8cQZZdn4MUNpXStywgZexnP48yS42sv7naVSCu2yebYdtismo61UauXm4",
  "key42": "2wDCUXa5xoQL3Qj6NnAAeENcYvuKX3xrDEN7vK6Xu9nhtiX8dNy23CLKW2NzmmULMHnYN2jEdKpwT6ddabwXBvQn",
  "key43": "2KAhjjMtmpvahTnQ47bdBkcMurwGojnvZcsfpVHRNvTcWc7msmhzEQwo4BUXzf6UtKn93bnHsuEmH5HRgfYbB6GP",
  "key44": "5qhDhnGAMmAuMdV1YQ6gQ62Xcy7ve1BZ6J3WJfsKg3a1Xsq29pC5M3dc2rM9WL83nwuneoZd3tGDjfgpQkUkk2Jv",
  "key45": "5cxidMesreENmpi3GcTimN9LB99MobjdgcporhGreVYCoXMzkkAC69szEFgzYEhsZoM36qA17Wd6qu28pnhrNi36",
  "key46": "2NimGsEZgFz6s4s52dyZ16LQhR9PV6uX3YNvHvWsjP5YKaUGoBG7uenRXq1kzQJwa3DECvmdmartnngvaE4wbCzp",
  "key47": "4xB8NFYQ74NhRerpUSKgv6pkkX8zfprYMjBzV8CfF9nWiFDXMi5GSJq6AUFEfgimTzzvJK7hdqXRzT9occ4U7Fb5",
  "key48": "2sBWj1B4Po7RAC7fWfhDa1af7EpXSjcEVYLZ7zL4s8Rk7uL34ssVyP8qFUmf7VtveSWoNtfdaSkYNiTtda2rvutc",
  "key49": "2JUtGvYS3mSQ6cQQ1X83rwa6Qvq5ZvdpREvpM8RtexEUgyhD5ahNLuMtnLZjiY6i6rpuXaoNJb9vTZEYeghfcMcX"
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
