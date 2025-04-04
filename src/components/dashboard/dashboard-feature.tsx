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
    "4HiV1RWTvHXoRsWH6auPF8HhVZ69gX9acdkFAYwgKahFQbrkqhF5yV1RscnPinudbQ25NQpMxzeZfsjb21ptAkip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1i99bJvmyBPYdn2HUV5fazHTMDxEK7PbbgV5BiUgxJjTzmc566wAiGnHtUQu8ZE1DmjZrNCq8C4G7xY3qGKdsJ",
  "key1": "5AgHHoeDCAhyPHnvTyRXWHQV4V7kt4KJRQPQn8GqdKtJhWgkyDvNHpQUFB9kjHD4Gh3mNo8mYVjDdcQSYsGvL8He",
  "key2": "2e55tKUAvasJchzon2RFaXpmPmfDmQAakUAbVjFpir9dsxkLBPqimvbJToSUdiReXKbkSf3of29s9nqbBzZDgzUj",
  "key3": "61aLzMFY5MuUWwxqFywayU92xGSmzjepQwvL7cQgD7n8CyE6wL6Gwpz1gr32WhMj1SYfbDHe5tJzVQTFYfFdy7yo",
  "key4": "2YW1nfXs8dmMpqrAtDagpbjL1AXzxHqUFF6vM9Xt2auqSJbJF3zRnPPHhgi1qQFbzHPzfHSKsVXixqnJrHgziEBr",
  "key5": "3MFZ93UfgEGxmqL4TeeVryDvfS1GjjmTZmGeVteNQM43HEBFXNFVsZVLNDvPDuAebrg52teQCiCiT2rU3x9RYXmJ",
  "key6": "5zr7Hh2yxjLrw5AgeyBrokUtiMNRajoAmKBL7PcFvpE7B8dBU76U2DrbEdbrNiG4FF8VMknCPaJiFVp7opXZu3FF",
  "key7": "PQ3jPBr5nHFvXSGqsVmwFD9o4kV7LE7cT1E2eVSP6Fw5cPxw81tchzYKVbM7P5VGgNWheE4mE4kqeiVhDKpFnCy",
  "key8": "5zbhSD5j2EWfhMHkPS6HtsCvsTyKi2BhfH9MGFC5Neah4SZv3zCqP9zfPTe48cukPdbRLZYgvrT56qNaYGf5ibes",
  "key9": "2dPaoxfepao7zKrHXo13kPZT8dXv5QKZ28wukxmXfmUyRYjA7JtPLVTork6z22LG33pxHnWXzFyvBM5aBceBBaZ9",
  "key10": "2VG7ytY6xCB7JzsRdakkV7w7rbjwvhPXbXST5ckR4UL2mcaMjEwW2FDPa1aBKKXu33dSQhYCbsTPgW6kPm9Lk2iH",
  "key11": "35QPncmzbf2kGxTxFCinAUB1CPvHJEHtF12U6oCdz1TpRdnp4nBqWe6Sr54srKn4xi2pwiywFNN8fc9BA179qLEP",
  "key12": "3M4EZu33HpFX4JJgcHMk8SasBWfkv3yESU9RVr263UuVohvxa4d7A71SCFjB3oXamu7rkpSwdmHxydwzfTjp7SDb",
  "key13": "5yV6FQGGSCrGBGeaRgxwMy7Q4kL6R5BoqfoZNyHGQvvHyQMnEzmBuqTRPvcNRE67vimwQfjaBpteew8HQvR82weV",
  "key14": "4R62zkdQwRVRKaYXztU9UqxoinmFKYeutSYbJoEs8uW5VEAW6Bo7NAVb8VN42C13gGJDn31ujS9gZ4Hk1QKpCxWj",
  "key15": "5JXMBryaXkKXsTCwTaWLTxpQSPHcWrkbR517eH9ZVqM9y4Ej5huFeRbPAYuTHqcQvUqm8NhC28jiXq9dmzcq3MpU",
  "key16": "65pTR8f6tsowrt3XZNFHVRQbywX7UG6jwGUNiFJQsn1RLrf1viMxMREAjaA2YRhiLyB9NvQmYoqxsotc17NuQEkT",
  "key17": "4jRqvTp4hUc7QT5R4JKrKa4Yf9Uh7nqKfKP6DuGdSLomuaDmx65RT8c4qkGMeTBqiFKqrzEeL2dH7cEe1cdsm6e5",
  "key18": "5hRh9HAGVSYkapprKF1HLWJXv2u87CRwSvqu1o4A99FwsiLKU33LyNNQksV9RPBFWcZBrTn3CgvUSavbUBeKkgS3",
  "key19": "3dkP5pD2Ysq6BocyNSbuE47GhfCuLNyEQRHRb8iRFrLMiYbszV1VvKj3z2UNdkBXrULyrcdkMG51sGDQwNgCcWzm",
  "key20": "2YMLckM8SUdszzBG2pt1HC69cV3vG7t52mWZDpex8aRUq3m8CvQkW1mTXTTVzMrUTSQQeJpwEhq4wD1MdVkHHnkG",
  "key21": "2LJ85Yo8VGmGxENxKTrGMsAJGehPHY6fis8MK91SfMGwxLfarq3UQwphpqjvyDabpa9vJ24No7HPDfy2nZXX9MjW",
  "key22": "62vwUkkDK2YYymtaEHFn1joNjL9SQnxLLdv1fQSK4VZX91goEeY61uHYwKq9jL4LGzKCmStrWQ1mQxnc65bobLbe",
  "key23": "uwE5ZsEehEGep5Ri1C7Yb3Sxdb4BjTuNuvzdSNxTL3gnAdGvdae9VToJNpZthNYEKS6w24Un8dmDBG6uJYGmdjo",
  "key24": "2uuuHYyu9NXKEVfoFvW7GHDd7fV9euWYm3a1qevtH6HXfkYiVmvfdiB3eQc7ynvB2wJWDbkaiYMwCHA9jGRYqnME",
  "key25": "5M4BJ7fSk5bGek3dZwUKQduJmwNDtJkRBwbZXdXhkzysn4HfWRQzqAesgCupqrzNQgvRR79bTL8YgFqpQGEWugfT",
  "key26": "2zzUCc5egzr7bCHpPyTr4UfLi5Pk2h17x1nbFcWoV5AvvQjU2TWER7LPZEpEV1MDupApGJfHCniCHYJRFdgMyDem",
  "key27": "3E5264cMMfPFGFmWR8zr29tP6Ew5uZCoABFww4Yi48LbNbMuwfr9dj4XAz3CPSuXHyYsEL6ysHRSztx2A2nwgjbY",
  "key28": "5A2vhCDYFSkniazihCCJiu88Tt4DvpVVMffxPrQh3HHN6bERWbveXa8cbsRgz8Degvf88NX2ZExQvfnXsM4Xwzyo",
  "key29": "wRDdt3GogP3vSNq3XrG2wf9YTHTTkfnMpXZmqPtFuqod6A16HdpztBqcHhSM5PhbaPUh3VQas2EssbyFSXAg5jY",
  "key30": "PpV4hbi2RhFV4F9MaxL4WdyafuX6xgYgDYky2gEYqyXjifdEFB1YF7oUUjViqsb149n4KAMyjJy1ge8JyrGAdMx",
  "key31": "3uNYabb8CJUXEfosSgxCKBXSrGs4iaZsLN4JYfuc3meXKDhFywRD52vnPwA8pbR7c7cqBfBfxJnJ4XU8meTjoENd",
  "key32": "WfTePUGbyrQnPFM2ANbgpuQYK8FaWVNgrJhCXKLLKPM9cAP62qqq9qCKkFcmFH4K4oP82vKdY9KwqffPCwnXwwv",
  "key33": "2j2i3PjufpCCbPDHUwjvGwCePi3fBLAJFzqNf57Xc4NzMHvakbk5tqgBRoPncDfFRE8GyNhboZfRFQavcVTDjhmG",
  "key34": "5gW8qG4oLfaNPnArFAJ7wyYixUhGZqyLpuuxRn2ieCsSfMNKaJ64gjdUqywYDPVE7W1HccUrDESwZqyz2iz8XXMT",
  "key35": "3wvX9PqKu2NcPsdjmHRU9KqCTBoqAb1bhFWbwo278snAuCgYiJUewwVjmMetjFjqRVkyj5J7d5bttH81xqUQVcT4",
  "key36": "36MiXRfZ3PydGEr9Bxw6JfwjbUP1mcLXVrNhFeU3U8gcrnZkZAuBj296MpZ6nzbdYdWuZF7WVf4hoosTVc9FtgzR",
  "key37": "3AHm2aWmDYjZPqkQqvdG6kqXX9WoBRg8z9SUBZEsL9vtdWSKYjxAhHCdXC7kHkPNfkmD7TJCr7JKBrpHDvZ2RF3i",
  "key38": "2pbihR3d6KXDP4NYFQAYaGFTpMsAPvc2KhaqEDyrKUi1LCmXpRwUR7dVyE78ASnuSXeXE1t8ETTuEPpXZ4D6WjaE",
  "key39": "36F4pDDJGAztTceYpXJDAV3gB9jxm8Sgw6D7Gtm5PDcdXwZobtfSb2SR3qxxddkoXwYmRYKy3VpRk1btvhu4tiQL"
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
