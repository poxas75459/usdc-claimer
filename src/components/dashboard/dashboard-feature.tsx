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
    "4RFCJPaX93pdMT2CcZyGHsaEYVkGdm7ohUkL7qUCaNxhWV4UyYygART2sNCTu9pcWo6QLnH2reictFCsZJC3GtNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QoXfnKVV3KYthwUeu4tRVRrkzrg8tKJnXBwhMDEVqQF4U7gE1tXMoTmTrzvAYKTVuvFgmVJC7wYu9E4KYtmHTQK",
  "key1": "4YetTAkYqCBHG9Yh84qYNCi1rwA47xSebm4Eb9hFATTYauYgGfn4jhLMH6hiDzbXLh2w8EhXvPyKNUYM8pzMWbtD",
  "key2": "bSb4A331DoUDLB9GRNJdkxw4CwZ9Cp42U6EBtqkZFnTFs9aWFuTyw2xreqokGaZ8CjVfUg2oKxA8vfkW7AFtWvb",
  "key3": "V77caxdbUxR3oZ2MaAhG51gXAc68ZsHGGXMGbV5q6tJoEkiuovoZ9NV2TkPiW5bwDReRcCVbGMsbAF1vWyX5qds",
  "key4": "dc4CQDaRU8WqsFYLn9EAme15QdwYrQrzWHxAkPEVctiNErvixdEWjJ8SxLpsL17FZ3mUQvZjD9gcdeLWN1SxVfZ",
  "key5": "5QzzkdyUc4akc1aoJ3vn5QdsYA17b6gmQQj7nAtgs5pSojDaY5gqxW4YhzkDfzYNkfUHzhcUN2qfnhkqTEiH9T7h",
  "key6": "3wUUR8bFbvgvPAqkF4tte6gcFsacSnpbxra7CSZGUiQG5GeBs99Mt7Ei8Gup1GzxAkJ6rzYE42zdLNyThyK5hk6w",
  "key7": "3J9BuFkxugoXFBFjy5HC7RLEj3Cg78tee1mhuHvMVLiCXba2BKg9PQ5UR8USBC9vLsP7hua5aXvkqrKoPBCuYo5u",
  "key8": "3YpAThFJTcUzLv3N9vhGnncqMRhBbQiGnw616L8qCyMTBp89MEkjHqiZK9YdHTcHRnw53gTi4HDnRM7a9JMrVtN6",
  "key9": "42XVfNoxd5bPB24mCuxHhdViX6ySSxSuHNhX7YUoZkTBudFC1t3yW2K4H6hn7S2JDqNbY6RLuvoJ2Sxxmiqm3Js8",
  "key10": "4KPj7dEqY1UHsTb8MKyh2h8nNscVN17i52UeetaZUy5dhveSf6Z6ihzKNLTDBwMgnnH8DQpE72FDD4a3NvXCH2SU",
  "key11": "2UBp6xSYBUz3s1npbkkAEYQRDB8V3tMuf2cTN3NC8bje8MtG4GG9XMZzmtyxBqu3rSQGxGdy7vRJH76GXEhVoVyG",
  "key12": "4pXSompWkLkVkkxJQZQzwzKQcyZk75cUPJekG4x8tvNcAYGYLdS1o1ccwcYGjgVc5LVSskFpVM2QGeavvJnL6jpf",
  "key13": "5dKmn3Z2XiQM462UHaMWPfbdsxVbqVDRkJhTeVRY3kRJCDV9hngPKKpuJX3RGSr3RQ9WfEzQrEF7ybbb7Abp1WVk",
  "key14": "2UP5aYKAHbPrRajK3DTpFL6vj9G8eBSYti2R7j8keBh51bWkod5XmKop69hYYMEgUuHQ2Vmj8WWSA6E5tua3sTuK",
  "key15": "3hpJAaojNiWpkX2FWdP2Hs1q5GfDJxVaV2n5TUbndfg8LsUyszHWinrMJEZozwZGw4x3nwkrLW6o2vB9iiASbmbT",
  "key16": "5skpzQQJvNgupJkq3upSvxAyaQAYdjWLJ1tBj2K46A8m2rvSikvXghPu94hihTdvMLn79mVyyVqjesaPCPTuWerY",
  "key17": "53Jdcv9u3wkj5DC8duUQhEhA26CULbAsNkhCce9iaaP2LeSjfdSRQxpR9xFXEzY82T4vYXqHzLsSGWjQAxBFXprK",
  "key18": "3pmKz7trea9Kjh2wyCw9GyB5rDA9v4JLLh7pYEm65YK1Wob4U4bKVDhAmoG12TU52bkMS62soz9P5vLrtLEqGs5A",
  "key19": "3hMsG1fQXypBnseSVY2KFBUCAdzzVo65HnJQ3H5594m3cn42pYT1tjJMkDdTNcdGcKD3a1uYXATqjxVE8KnvW8tV",
  "key20": "49gpxAVHXvNFWzxqsvTh6FZJJy7oNkewFrwU7aRkiPWdJVxExTNQwMrCt5taSQeDMT1q5tEtUrSky5DoHy42E87g",
  "key21": "ArJoKVLwNPAhDM6jnKycqsZSpRSxhzt7kF8ZcGos7c6w6CdzmrkoNbStL5W1MgG3bS7nqGsJt8gJ7bzaZBb17xR",
  "key22": "26iT5yWiqyx1uX8BnPck9NfjmiL2gyBjgo5zYnq4FPgxKiGXAZfg4Vdopr9RPs17WhH5RSCumYkq527w4f8XQYXm",
  "key23": "8eqCkcpN2vmN1vQzA6dPseLCHwFQfgfxG9ka5PoVtto6jE1LFrDKR9bXetMMtZ11nFKkWA8mMygzUYSMqnDPcFG",
  "key24": "2GuedpXNvej3MiouPBxWFcDtj7oWpqXtzh7bc7PQ4nB6kVnEELSD7hYTaChH8fMeYPxeynJELyt4zeyVwzkxockn",
  "key25": "2696dwG7c5G76AH7UF8a1WkjJa76kceJPFs3QK9TRuYuXbD3Wsc2YGKWZKmn2gsDt1zitfs47yXGGHtakemQJt26",
  "key26": "Goh3gPobwhUeH1DRCbmmbhBPcidp66nvJrxbtnX9a4D4Uctjjdu7S47L6FhT4jDC4J4QNfDjxHCsRxT43U6AJu9",
  "key27": "4HzpMvTXyTKYFMwKUtja9XVE25a9MikAy2q6Z4tTDpW7Qh2y7a6bJqyBZt2kvz6rCEChko4LRfsACmvRXTNi6gD1",
  "key28": "52d8NP4PvY5LU6HzkbqDy3yaY9HQqUtU3YNFoFdANpkirb7PktU6TD6PBFWoKPMaoedcF249g9TVpNt5bn1rBwGE",
  "key29": "5esxNKPGeGNpDLzfJX5AbhT5rUALKszpyWJSD8oGKyUWMtZS4JmpxTNxn12rZWbdibax4aPKRTHynNrpbNJLsdiN",
  "key30": "3RKabkkvdotVEKPE2MLtkG714bUQpXk7pSMTytqBaA9mZh2zCHBF7wwaqRR2niawVdqjSeAFTYrEg1bSwKW7sa8z",
  "key31": "2SPex8Qqeh1XvqEJJ7wjr5uHxnCQqWs4xyaYuprjgor59RUnPpZFHbDw5ox2Y3bh6qdcmB4Qe3xdhq4a2fo5qcx",
  "key32": "5Ka296Wu7GgmYCNSERnjzjF69t5JXK2wrS5zfPWoJ5S81koy44U3HP6QYpYedvDJ66zn4Dd3FGen6Po9szptwXJa",
  "key33": "2eVhzqBRe69o7c8qPfcYnpMkmfgBX5eL1gFHnsN77UEhJjnMVryW4RBHXevuCtpxo4JdGRiPa72WJR1dD8o5g9iq",
  "key34": "54pe2qr2nk5nxpYyCa5c3U4Xk4kvvBaXPtr5UmyzgtZsVKxL2GWGGp5URDCYhVAfVf7GSouC4w9UjaHr5t1ZfuuM",
  "key35": "2dZpVMCveeUnyFtnGHsjV9EQYVZ6Zm5PwG6CizxgbVEwwBvNocGLpT4MsjBH4c4u7FGKVKQhLKegs6oEp5pFsv91",
  "key36": "5aBAkDGAYSRr1fYgWcppQ4o7zowt1oYMqehxes6oMe5GFhLmihjfeGzC4E9qXnpKdEmE2BpnYbrNee9jBYeuK5wd",
  "key37": "4D3Wd7mJHF8d3TMUseXnrJi7NidB34ehqepvGFfqZqjBG7CuCC2xA67zD5z1kgiaUeKwFrWbE1oKdGf5pwHeZxVz",
  "key38": "5tgoAL39DT72ZWHftQyTS4UCJnD8xTCZWMBMhYLkdhnFLWtcy65Xnaj7tPEeg9cGLn1t6Nd3fP75GBpo6kk6Yv93",
  "key39": "3U3C9rZGUMp3BgRQThEcB9HudhnPPR18MYJgd5paSLajkoQtQqhUG6ZvcKKQQWKSK1dp9kjAdr5d3ajLm2fiuf6q",
  "key40": "66eiHJxKdv61NGZBK7Fyt6x2ttNDBLJZSgFdTw5MNvDC5HLQXtt2znEryyikiQjNpJbsAPs1DvhrEPTFCBmTJUSU",
  "key41": "4EyKG1qtcL3QZQc9spAx3iTBo2LKLnRuGk394JuViSLHh9CWngb8Jh95YMKhCn79GDVet3YxmkiXAxTP7Sf1hLQn",
  "key42": "2RenYbjENBAc6LLGUARAiMLr53nkA1beARyB7pQMGLjXUKoN5eSpEwKBiMhyRjjRwLXqxKQFgFJurq5TLN4fVVz9",
  "key43": "59LS2hgpAzzmf5t4hKnVTyLBYG7NjWE5yuVqk1aWCQ24BruRr12am4S3CVfw2vuHAdhuaYTob67MHtMB7yzJTMHz",
  "key44": "4fFp5hWowbwGZmbXdn4c2YNPKnrttVte818JSNSy17JgqAXtSw1tE9oge3vfm3CKmhQCVQ3Wep7r9H8hiq6RFHPc",
  "key45": "2KSLjXHBSM12nVjYBurYK9iCtFc8or5FwAiRg4yZVc1ZS4vMMTDKyD5Th55r25q5L757iZMX68cjxw6JTxJcBN5K",
  "key46": "HkSuWn6xkUYy6b817smk3wB3gM6CbXK3DdyAzLUxB2QFsGMmbqfUJdQvcsJGmWLue9BpbLgwdieBc1wKHnmmX5F",
  "key47": "41GxiZUGiSMgeYjBHc9r1vQm9Gh1NaBCyedsyytNvdsg4Y5gBRGeQ9f8MSJQkVewD1VMQzh3nc3uHiVpEWp9MXnR",
  "key48": "2p3s7UVa2akD5dCeouDxqmqyDWn8xyZigW4S5ykiWc7fNhZa35t4aY6sLirAoK3rWt7wXg15WdCH1CBiiAXtrXab",
  "key49": "5AGcfGC4dBmUtHJFPQ3d3LJ1cj4fvQ1VX16PdVGqARfQSTm6N9pdBHujofxfNEhSgKr4myTAFf5NP6rCUypdGsS5"
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
