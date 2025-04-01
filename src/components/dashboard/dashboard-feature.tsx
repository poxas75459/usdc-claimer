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
    "4Yy5qb9rRCGpDFwqRGrkp58TMzZvs3QojWrcVTWgjwBAKxzysLGqXQWNQuLJkjoiAdQUpEfW6YxX3uVDoq28whzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEaZ9PNcaLqgURnrecEdsnzrHBCbdVbQLZNhb5FP3481ftek2a6nWWpGwQSeNEGiSH75WcEzmEMkEWJeucNsFKu",
  "key1": "5CCTuJ9faiD6AW9M9UwbmzYENbde38iRiBHvsYT4VmQ157izKvBEj4co1vXzdHEgyBDzQ5912pTeT5u4joN95WYm",
  "key2": "nxb6bUt88fQJYpytiXkqWhEexSghPFvYu7LmDrzurEvgNM5dPdZa3wbPRz6TREC8wPNSPEmU7FQiZoyv9jhoCms",
  "key3": "2GwBCMnrmN3DAYNsSfCRP6iPEb5YfuEY6VBLTBqcQvmgBAxvddguNE7wj1LrbQ9S97QZg69vRuKNMTmRKKxXL1Kd",
  "key4": "4k1X71ZqhB4edSDw4iViLqPi2gq2HkVJtsYPdzYNz1Cef1jfPgTvjrRfde5GpU2PwY1W7FvZcFDY5UFQfFcadi3Z",
  "key5": "2K4bgfQtcKSsyLFvyTCexJY2TzHFnprt877AHYCiaMUXZJWmupWyMX3BGyRUZ9DG2KHaDZeNbRHbQQ9ph8aHaiFB",
  "key6": "rSX7BbeieL1PZrUqa6gcu3cLfquZrfm4DQPtPGcyqhwLNve5Ftggy1HLRTZHEcKhBGWYD4wwFn73QvndAteucpv",
  "key7": "3n7b85Wawy8Y5jVtHrVjbmYHaZihghtJextK7Pb87TFDCqer4SMB2SyR4LkPWRBr3eYePYKw8NhNcuynGThiMPNS",
  "key8": "58HNMs3pdUHhLk1HAGJppp5BZCSrmqqSEYtGabmd2F3TZHQ9tBmKrkgpG91wdDwV8HoCTrmgLJDAxckp7EVXet9k",
  "key9": "4GU5xKqBMNe7RaiUKSjv3A67VUzyRMHbEoWXfStDovB3VMy7UBJSQzqL8naf8bRJ5d9eRVBzYAzf3e6kErLfRv4r",
  "key10": "4iMSwhK1Y51fRyRHprj7Jsq29ENKT4ynaowLCsp2a7qqRLZW8zXLxWyZcFYnE8ZDHvUcRbodKCjAoXa1pkEubzV7",
  "key11": "2VpuFgqXPFfVdx4TNgbx9tY7nrxJW1Aj5s2vC5YB598A6J4XZenLZUa4oAbU3ESBzmHdkMGWUDMR3rigTu1mu8cs",
  "key12": "45XDnyA2uz2Q1RbruGw6YAV5yJAaeS8enJ6mTcNRiPuZu1LNVvvroAawsnMo9HaQxzL3dXaGPdVUqZ6EbRFQr9Hr",
  "key13": "w8b8nDydSqDwzBNa2sxpcP3uozKTRNFdmfLuCg6DhaUE2KPXEWvJFihsvLKJ7ohXzxckHUBS1dwatyRXguhtk2y",
  "key14": "2B5rNHcdjbMHevrmkmWFSTeCsvDxg8tBnFr3JoMu9iAgwfUjZjXTTYzBSeGMkMh8NZgbaLms39Za4L8XzciNevxR",
  "key15": "kFvqaUZAd94JVSg6DzQnwZT59SPVc58X9iKEgEu1wE83zVspsbXnnrD7YwUyyYoRcuwzJJJeZb4HrTP7crDqDo1",
  "key16": "54DnyWJLV1EdttpdmEmTpxKd5Vnp1af4ZVm7GXigJgSsNDqd1DqMnLvW6KU4zReYYyP7FGEXTNUYAidQdRoNxCEL",
  "key17": "2q29D2DuyyzXigRC6arPvAWjS7xWEJt8b3MbbfKQxW1SpVgTg9JYRuicrPyFxFeHax9oN5uinPbvdBTDsxzPW6Lp",
  "key18": "2i5qRda5qMBJUiS7FFvvEcNh6BQoYeeMLvdcjmX4KPsi7LVZmmBCxFJA5tZHf7ZFm7MKzJjM2reecRKAYyxnJeBs",
  "key19": "2PVqVdgNhZmZBeqtmALbgNTLFpWfx6adG6zEyoV4j8r97WZwvbRdJY9bF8hrRGMecYycesLT6KAKm6FszM4y7byz",
  "key20": "5K7DYbkTdGqJZ58cKvPd3SyHtZQQCViRKWv1ebxxfdYhrmKJPEbuYaWFvZWHPw8HiUgRp2myN1UtW9bGpZAgS7Mp",
  "key21": "3DhDA7pSS8mHFs1frjpECwxkuT5FTir72NTmHzHyYsJxVPc4wLkdsM6dCgKs6rMtTF46U6amKT51JeaoGEk51Tp1",
  "key22": "5biSiASR8HWjh2yMnNm6ES8afmyTDAFsx2nKzJNVrUQRrscYHsYHX1D5ffeHY2Pzigp7brQrQwZDVYaWYDKe2BX9",
  "key23": "2r8vMzQbgR4CcmeBLr2p8PcVtbxWjb7My6CDXqaqn4un6256bKcHLh7X5iLdgCTKDQ9Qoyv3QJbecUkSbr5ktFKJ",
  "key24": "5xX1sWKCrsUJrzBtakcL9rJdUTfidcHf7ycTtCmCywjHV7iZkK7nt9p1mjMkbTuiY7XeswEyGdGwxUJ9TXQsY8vu",
  "key25": "5YjSRPPxfdCWm6doR7SRYtJeqNCwAHKJ2hjw4Zxsn8QquVTiu9KtG9ttWWnGnj8qkTjJvrkoFN2MRG61M4iWu1JT",
  "key26": "4DhDkEdENKBcVUPod1KgVBpuTc9fX6VEBK1uabAWCzHYu2ejupaVh7kcBYGAUY38gdpMzeXHmvLCtwFJ3SE6ggNL",
  "key27": "5Shart11dHH3F7oPfS8Mvz4zXq1HoEASY74NUTJZAdVsQZmZ8BNHHTU8SxotG4EZ4m56RUHeehTWrEVJ5VbY8s2d",
  "key28": "4iNNxT2GEH1PHnEpNn3PQ1zbRh3WMFmvcwJJxhA8gHiMDyJnpy9qz8hQQ3iBLFfMYEXgk94NxXvLbcCF3ZuHbgzd",
  "key29": "5Px6f73qfFH9UPf6EaJWEZ7Sp4xHCcXkLWS4bx3iJVdyuGWjqKDZWrvJDeAzEvhJRQEnTew3PoqK3j7CBm9RvpoD",
  "key30": "5GbYhgK1BsTxWr15MHYwSCsjyon8iBnN4jTVyz22GVGNkAZtya3WLffpJRWZKxqACCmRuxo58php2Qj1AortShfF",
  "key31": "HC4FCnKv7hcAFjKbHmw3iNZkF5x5MsSt6JAQmV6buto6HmV7oNQHUJDApTY25Cdc7KhqD1EqizD1js3TA3yYHJo",
  "key32": "5zXXMZhrDgerJV99x86qVbe61cBtQDSTKfaMaWvTX9CMo3XHkvzVxdcRhVyrvv3y2A6WA2Jdfqo9SpmjZKx55xbg",
  "key33": "zE5oH1XzNe7ZDLq9SXUh5wzA6Nye4zvi8rpxsLaLwE8muX3Ghr8n9wsDmzQZ1QDMskpLdp6wkamof85kHPX9P2C",
  "key34": "m8AqA1zFrQwVHC5HrEsJhn17WV59Kwozgk3H5gXTpFrKt2at4nh7CH3TviHp5MssinyExZFPzpofUWLBhifLiQh",
  "key35": "33rXUqnm8WAx4mBEzwzcuffF8o77KyKXEvyssHQrMbaAyYMva4VFDKBQNf7dWEFgHeuSuL2auD4K4fZjwQFyG13D"
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
