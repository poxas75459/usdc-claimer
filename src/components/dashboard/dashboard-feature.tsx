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
    "8Wrz8MZrErLAbvmtSW6Ri3i7FsRGsWuGiidn3W1fvPvZpzQox2fnAL7LAvpzAMdr5WXewbWpw8JVHeYMNJewgnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ez4vz7fbgWGZSy1MfYLfKF4fQJE56jysku4rswsqjZz7o9y2B8zJ5NybjyLbjPoSU8pwnZNwYPTXfsXcHYrziDi",
  "key1": "67gBPN9H3sgEtycfggmaSNM5asJysvsB4XSqgR3zuHuLjNgBujySQwc2XzU2SNuh7Cmx3KMhpCUGukvzFESjtozP",
  "key2": "5b6QGk72wok8boaDqJxkfCrxtLw6M3g1kRVmZh3RFh2Gyn8tKErmaAXFJKMynAT3NCRcKtAaM3MmH8EsGbPcybXP",
  "key3": "2QQJsfvnkp7XgbLnwx1AfXbbeymW6vetzapuXYnkahR82YkanfcYZXbidxnkHc6MAeZFMDSNEpopQdEUNNMTSDRw",
  "key4": "5bcJrkfzu5ybMg6akQPxxeqySWxAkzNpD98czpbA9P4Jxn8SG1CkSYTbwKWxYQg11JbQzHJTcB4WRyFu4SyjYMe5",
  "key5": "4BvCaCKMa4CavxYdiFDcB76MmAcJVJTvn2frRrQQDGZeu3ZkruXmo7iAXsTLtMis745EYj9M62M7ghpQpx9NYaLw",
  "key6": "53v1SNaPg2UM7Pk2vJHAHZFVBwahGx1QPe2ophzSKacK5S2uj9sBgypMnBaAyiLvkmTGiZ9EDC9YDX3Yinz8YL65",
  "key7": "3rmqy6S7wefWmNigWmvkUh9a5c2XCC65UnYkRydr2Yod1ExaZuS1s2JDtSWZwnMAzWC5DJFtm86eCxwujNooFRA",
  "key8": "336iT6tR1uFbecPciYwPTDFRoD2KVXQBLASneNMRgKte4cmSD4PeiCuWw92ZW5Fe2NX19JTPPTfQATM8kRsPi2Gs",
  "key9": "EAqTwnJMVhWPnE31rCqKUAYssSLVaMsFdYVxvrAJbr2kh8LSgZMpLupxPLg79p3ZGLKo5Gu7mz2veNLyYNNBC3M",
  "key10": "vv5FAHRcbb5Jz4QFkbLhkRjtRsYEqZHPB33rC3yEHFzUyJYxT2pTMDQZ4NFcYRajXMYCYRgqjfHzGKGnAJLo5KV",
  "key11": "3rw9PD2MoYyN4pVsx2FciTc6puw1oK4CQNBfBaLkmRqoLNrNpbuCDtaxGigzzHHe5M12xHdpGGGCDdo4RNzLB5e8",
  "key12": "3dEnUnCNSVaw397vAHdPCBFAukPizzX63Z9bj6bzvii2swGFBZAN4mTDTr2RxKf4cj62TzXScM8eohk7FrH3oegh",
  "key13": "4jd267ufLsx3w9VWPSeQntGvaB8doiFThvKWYQyk8Qg5PtrCARvDJGWYvwaDw7zdo9DFmaAAwcQyWTF3BvKsRCR6",
  "key14": "539ZFxRyHFBtZrpkGnAqwM2aMB7YP9TkJkxgSuxEdYs8fZcHe8uTX8Jxu4dDMCnGAVqEKRbxrj9UFhioqo1qGFyX",
  "key15": "38UxywrAJu3jrz9YusUqLyVbMUZgUcFtdRwt4tVtKoNXvMzxsDkRryugdQgYiRGNfqaAeeWRqAAZYSaUfdo5xnSY",
  "key16": "UJnkEPerqK3tFwnVp3WYWknohE2hMkvLZA8hcT2wqTgggwxUc2CWac4sGFTWmEhHJFJgyHp6N1LWkVbUbuLpfzs",
  "key17": "55o3YZFK6itSMcy546djnFHjQHU2J9VfKNfqBq5LntZwKfPnrwPndSs1UKhh6fx76oSd1b5674KZFNsTkuB3xvam",
  "key18": "hMxD7HoKSNCXdX4rdTHtWPWfqfnXeDNX422CrBhpjdUSB8f48ZVxQtHSwNr5VDuAGf4HSGbQkM1yqJuNg8wJyq5",
  "key19": "3MRaQ65RnX5tssnaVXuQFw6E6B1tSQ7kdXxQ5BqJYFQtQJiBFG4aspZu4DwmBeMf9XE7TNQFFBQmbJ5UvTbPDEx2",
  "key20": "2JUvKnmGGzKdSFRKiXM5aYoTSbWPrXdRZJNhzHTstSUxnwmzDuUfAbfFH6JWD1F6mSzhsb97vNQ7ziVhrm5xWiPB",
  "key21": "4zoGNg5Fku81JCqV8kfgziUmpr9Cm4tSGEu3xJDK6p6k5NnGq9nPDDb3Bk1Gc2hbE7qAgFPGYqnQyq9JQhveS9yV",
  "key22": "4iGkNjtntquo7pkfZEeJDKvqcXnCyj5sp6g8AbTEdEdYrBzFD8sNuMvHD5w8bZZGaC7ovyx11GoCdrRaEvFuwfyE",
  "key23": "5ZRnE3jjwpTtRTye8PeBnER8DevG4K5dqwrsKnYFmK3AC8pR62vKxzBrLx1RmiiZAQHBmdss8M4cEWvCWMe2GMwY",
  "key24": "3KCw2aLh2inZS5sm3KbmTaNkBfqYGg5syq6jnoKfAZWHueVUZj2KRDfxK9kcRXFtEaVRTDDU5A11dA6ZVVHVWxFd",
  "key25": "4uy5yJtM8kTsmSPTTkJFx3ZswYw1ouxpDSUSwRNQHQbfv5zj7F1nCkNJy1N7GdD5zazWLqZmgH7uDhVEYMvjzKPJ",
  "key26": "4gwrSaNCepGDi3pPtbfdp6ngtxmTPvLtDi4AtBJTKQ1zdQipCurhmb4ibGEoExZM93vetQMHxi16Fsd6eWwGBhzJ",
  "key27": "5EiyuESkg8rxUW5C3BEmW4TXoLscwnZ5xCEp9seJKmA3Q9hvTk2JxdCTk3UZ2fBZ7Bvm12pwqtcqLEKtUmvpJjyc",
  "key28": "3snsQs79uEYyGJw8a1GxYBe3QyAXi5FzHn5aMGUGsKwTtnPjsDh2H5jwLS9espfMuadBp8gTjEkASAUXa26fEEYu",
  "key29": "4FvotibGyciS5AMTkeK98smZ9pGQx8tLABKC1Uouy9H9PWzLh8UKsWQGsiJoVKUj7A3SrQCCN7Fo4jXatt6aAd47",
  "key30": "2rwARiAUwMjBVwwtCifSNNy2T5imW7Lw6E5UTcCpw3nyq6MLDCEh1QiokuQqDXsKpQjrCXCMZ1vSnGo7dLHx33CL",
  "key31": "46jWLFFUAKNx27HWnM4CPt2JMP6rKetCp7FkTeRq1r4qoUUpuopEm13aPc73pZaDaLVxaRj1mAZoMweqv4b4wSf7",
  "key32": "3EtkJPrHaQahonmdHjrE3wqccTpVBkeLwq8ZLho9ZWqJiiHrE1fL47Wtsji9Pk3corfK6ZaW2FDZPgPfTbVJAwL9",
  "key33": "5Wtk5LKvQ7GM1vJsiqbjk2jVE4AHXyBSKaifdRgntpAYPbmKGx75ktF3m7eMcfquRRvktHZEj1hZe3jHWLJeEP1n"
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
