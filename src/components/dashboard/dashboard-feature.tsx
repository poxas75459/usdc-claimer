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
    "2GyPZ5spwUfWHfbgFLx789sroefTr2ZF3GVCddB5M3meyDheryUyiwasE6JPkxzwupLAhwfd6wRpAdgVuwVAdJay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DVUq4k5PHFgnhSTFMZ4ah9i5R9ZSeocfunUAy3w5WBDZNDW44xoBDZi7aUkzLXrBvn4eKFtyTXzX1DefQf28S",
  "key1": "5Dy1WUtWVvDkvmQpkL6nVzp3X73pH8EpYFT99md6dH877U8ck4bNK2bL2yj2n9PHNffTCe5mDPYVpQfDADhRSpDn",
  "key2": "27nrExhVGZYtQhUqG5KF9zwNMN4DAYkLtZ39XTuPtaazWmTA4yKmPvwKHrYy7xAdTK11QxxjRRYKiCkkyt1Ji5qR",
  "key3": "2cP9VXayUjH6XQTSzZ4bnCeQAi5bpZXN9Zg5vadrHkA94MUwwY9P2TvFugaYpWsD9nk9DfbNrt6N1eczQMYhdrus",
  "key4": "2LX5NNKExtanQchxgctyxG5iZh8AanzshJShSKPGGNQLBpGwagZL14mNGSXXt88XdYmkUJpPp9cac843sYSM3Y34",
  "key5": "2Pmb5hQ2v3bHmBV5TeJn2PJMykrvxKReaxpaQ4h3ALYqoULsRuRbJr5NgEEfLBYVcXq2NQnxJY9cxxAzCA9UkvZG",
  "key6": "5iLpqmUFWViQh91fSemH5WR7SduMYdFafoBiDDKvwMDZcfHadQiTnW4uoWBuhVuZ4jkVRUAnYUk6f3ifNDSeZ4rE",
  "key7": "4ro51KhKLL8UpdPA5otHgm85FrTppLdPkHAR4EZPsedEjSXEhUBRLq8UL61Zfyp7YZwLVDkMk7z5gFRZqps95ShE",
  "key8": "4tiuJD65Ju7iDT4wSeWJn2vjs1V2yX4DAEqG8CCFATuWViTpGPEdvyXJeYrExLXdnLwv5mgfom7GzQvJdS54skCV",
  "key9": "p4L3K2DR9Up56mzEVWx1FyAw3THHXKnWUtD9rrabPzj9KGM55ENerzd8Q6CmXTEfDy2aMwAiR2zDkiJp5BcnSxg",
  "key10": "4NX9b5C2Ai5VRoG2hc6cBVjM3bg5mzLCfXufcfUsQdqHH1oFDqfJdN16NSoqYd5EoxVCHqKxaJhdyyTtc7wXNeYv",
  "key11": "4cQ5y6cdR17Kk7TANrEn4nkSjDhTVBHxhQ3SYfnycbmmA94trg6HaJLfAF7XGyoKEinbGbusAEedRT1tGL42wrNh",
  "key12": "4DwkkyTv5wR5aUnFXgSS4qUndQxeK6BGpjT5Bo7KbihEC4nNuhKLbmyypefekeKGD84dZcn2zKyTZTYsEiJe75dN",
  "key13": "4Xf3BYEV2nhJXyqqzBf3canBL6y9RbjKgSjBPLJyxgMecjKQKFvJ3mhfNVgTY8XDN3g1iaDTiy74RiqMFfhTgraq",
  "key14": "dExYLYJP4oC55F5vqxR2g9vFMd6meqyLX5vH2tS7xesf5gn117NjMF6dA6Dqzs4nDeg9GLBwt3NL2mLUGHajyqd",
  "key15": "3BNn1tcKHMb2bJuLfdQ5EE1TGayEvbMvKq2w7tueCcF1Ct7YpqAMAiSmaVPohNt8YYndWnXumfwS2jjQb9qWMXL2",
  "key16": "3dqwvGD8b3y4zwqZUfbY2o1zHuRTwqv8e8BT8PzA7nnHEMRNMxwehMnmFi8D1YRnx583c2Ndajdijk8aeRpfVkJa",
  "key17": "4fHCg4MzSQV1xhQPAiPnvaMLqtLcMWvsyqZQ3rghPXGN78nsFTvfbDaJoNCKgFLmsWWwyvGknSAmpobnAVDyS4of",
  "key18": "5X9XrGRWAdqmkgNH8EZ4wmiLt5QkhosowoKCjYjVwCCckqy4hieWAHB49iKj9NbrBT7zv9H5qeDnCBqx81DzoYL1",
  "key19": "5zpZGWvehSJv7p1YK5YLPerVmzFvxEVKDNGJYbUFFcdi2i13AHUC8Zhs6x5E7UMQtmyzA1892PWbuoCnN1NTptfg",
  "key20": "4rB9E9dYzH5T7Fp93x37NDybBigErbTXsEFVxTFazPStJoCigJVRQkwtjFRZNMJ3CKhZNKvvWKNCf54J7nKEEjig",
  "key21": "3h3HxejobLJ3whHVwaEspQAFLCY8G8vbmgPmp1VKjUQt6LarrEg2X8k1byK4FsY1PqPhXDUBvsaD941VetXKGY6Z",
  "key22": "XVanafoujeh5DiJAf9gzGrxSj4inR2pmXUFape984X8r93sHFABcLAxgjNaud7mnQ5gfs31RH7hgVY4gXxXSh28",
  "key23": "5RSKGC7BxUmwihdtq461ob3r2kr9r9hGWvQpdMqpNGqjH886s3LkLXTpX5Yb33XpKJqQnrvAZtonuUehf1o5DCy1",
  "key24": "58HuorTcgFL643ffPCLFRLRoLJdPaPPV6u6KtVnxowdx15UiP9xu2WiMNUD43AswGomGBdGPuaxsWkUHTo65pcHp",
  "key25": "5uh6Puvs5kKspVq6HRFPKEdNwtHRKctwjiJbJ9c1d57YHrunrNxENwtCPBNFGJGmgfW7RAbLmqgrdMPYatmFdo9T",
  "key26": "N6qDAvkekVtiE7ncfNrKsfxGbkiDJnTFjiqeRtndADUQabdf6VV7cLKjFx3yaA5m9ymRHpFGZrvdTpHrSSsrdmD",
  "key27": "3CRuLeqHoDzNJpxzHJXC5jDZBTvFCmW3gd6d8P46CdRFczoNDBa1qGVcE927N8R1Zy7buBdeGyRpp5hxLd255vB6",
  "key28": "3P65LsB7JG7AkPeyWTdGvPEqo6GoL93pU1hZpJ7GwGJdKPy9Sxp5pP1Fe5XJa4hzqZr3f3K72773TvNTkCXt6gQZ",
  "key29": "2n4J1RFXMn8PPkbPVZv3c1SVhCQsL2nMdKCK5pMjy9biykdnsJhw1SaqK1JqUdWGBkKihoFZYrnJLxK5weUFvv6L",
  "key30": "2rfkUVzGMnj7jf1eB34pdnzDdyEzXyFszcFnmMWGoPPdvRQWRHTMwkp49SQJA18JtecSkS4q3TUVqHPEBaGPY7Jf",
  "key31": "5e4LH3H5Prb7Hb3bSaL1o4nHDCgtE5c3SPf9uAiDqK6KXqWakexawuriQwFvy2HuSLpL1mLJjCsrDcT3NRKvDSi7",
  "key32": "4Q9n25MaicTBgadSuaUM17JUK1gDfUPR9kkWcAk3wxHKEFXAYfbbHREgjExRjj4nokv96NQ57oLkY1x6wxwhP1Qp",
  "key33": "5ncrPXYmwKndB4Gw2pqZzVqy5NnrUfag18FHVRjiUtCwHQyQ6gCcNpWkrfzd3aeceJDefxWGqFDD7ZfJB3kHDNqN",
  "key34": "48ztDc7NENvDXRvixmiTz4rSCgHGTcYcH7zDJnm9s6jWTcjnAc6sbkUMrKSXT3oNoc6bzaC2iR1FZRcXgVaFuUnv",
  "key35": "3C3F4VvMjf7WQpQYcXCV7ckHypMKcoWHM8THAj7dHUwLjtyJqYA183Grhxb4kJP7jW8kQv8HDBT9naKcMuJTnrnK",
  "key36": "kWfUvu1ysmGaGrHe5Bo49TdfYpdC8RwDghvCrce6Pz31dbnyKycU7tgzwYYKnfYhWyexC3B1k8QvL8mQWHW5wuG",
  "key37": "5Wcot9zaUFJ3eGvViM7CTg9tjUfL44b6Fxj4zDG2X9hqUaJgC7cCMHH3cMjyg7PP23XJdWH2rGqMuMaC2B33zDvg",
  "key38": "2MB1vbnHLeUoy2TmSKAv5rHzf45Zbjo2zSJahCqxZ8cWX8dTFyVRmtCMiJYWxGd1Sc5gVajXE6u8yeby7oQfq5aZ",
  "key39": "537eundpTNeiDD4BWPGA5cVbe8X4tmwkiB4o3QMprL94cx5FDLiUQHbT5Nz75AZeCBLoZARWAt2dXi3JQ4tTnfVr",
  "key40": "5h5p4iyWy7MHY4LMHAHYCKVuuvQxAdZeCrgWjy4mZLB38AZPaiKvEBHNPdEj9ptM94ShqwJYJHS54euQ5sfKkb7H",
  "key41": "2dKZLykaZeP2uSrDtZgYJ2yekrWMfUMkBCaqwWzNii2u6Mo1hxghuZmnqHjQ6MN82ChLWbo3FiPYYhBA8t5WKP5Z",
  "key42": "2goYPBQpLo7m7E8ezQ6gZnhHMosfjhERAQhRTsH63Ur82QoyJPfq67GE8EGAtmUHkfmEZcoAUmQLANjz7y8ZiLQR",
  "key43": "4Ny2t7h1hgUBbN7WuuLYBLwWUyA71nrXxX1BQEvtBxz4tJDLVMWo2zXm5LpN39aYYrbtX9geaXV7ybPkatuNCDk7",
  "key44": "5dhWHqGzgZWqNwjt1svUE7YmCJkqV9jG38nZj7rS6eCveEBtiM99MqN4ikNNLYEJgJa38VFWeLsywqtq3bub8YKR",
  "key45": "3vpFLRCFjWSAFBgxhAkmhKg26RuWwPTQAyE3DT5CH4EtBGr5tqaZbi8wFZci3SnutptisGyg43CLfoABje3SBtrw",
  "key46": "2UAt8j7jg2fomDM3FSof4u9qoEWVC3y1tTvYsA7YSaXDo7swWq5MgdaVocPtxvCz2jC9LDe2UahQqVTzVkzDiuTQ",
  "key47": "2gpFFGrxco56NEvAkxGfm2xE6vECS43bFB1dQF8A4ZcvK92hFUSBgDathGiZtQakGAufjjsViUmm1XzXk5ARi7Ex"
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
