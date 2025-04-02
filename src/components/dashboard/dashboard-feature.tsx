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
    "5sAHUMcbNjs97HwAoKQNHS9zZLVDGehMste7DDdtvjW7gVDNiuF3CD4hh79FvgbyH13uk9C57KwrxR5VUNmqMSk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjbLgD3yupjwWbrTzUANW6511qdXqnsBTN8zWZJDWvK77YLJZYFohB8gyznw2jiQ2xNAeAckdvpsoWnC4hQvcHa",
  "key1": "2K9YxHothjfFzS22kdL69xSjnrBzb5Bu7fzHU6GtsEcNAoPAJkKGaJ1aCRYqumwoNnLGqJbU1jckNdvqFnLzuLHY",
  "key2": "3bU4cok3pVGmxGdCbUs5nyvEJk65tHsQw8Xv1WYTQ2tAFbXPGfeVdm7CabiAMwbQBteuQoyyQPafQBT1LajJGmJL",
  "key3": "2FYWNQ5prszGqzdDfiMk3rSsbTNdY44WsYf13UExF8nJUbwLScc1ixph3KgCDrrBfcXzfmcAuuJsZnJX4sy9Ske3",
  "key4": "4FiHLec5BNpWKBj7jWeffYNvDCXcUK1hBvZa7g3yMNpZUBuBnF6aEypQNM59jcFX1g5UyYLTyUPddh3N4Uq8Jvew",
  "key5": "5BWV85aQmdjNizHWqxhhkNAfSNfQ8i9hAAFP5Z4vUxs6Hv5u51Bm3E8jpaD32X8kukhW21jr8uDPzTTAPSL4ZK5h",
  "key6": "Gw9Ji5YsqYjt9vFF66aWumB8iDjTsw7hEpjYnDgqmfmp4bWYTLd2DMGLdDabxqtmGDbf9TrGGbcNGL4g9zCKw1k",
  "key7": "48EST3XZ5fT97NeRxpmoG6wJMu5Rbr7YsuuikXMcUYj4P6LsR3mqDVB7eYNZjkrXJaU1vmJaHLrWeepCTPaykcXD",
  "key8": "3eU5de27rLUSpXFGugDTxnbJn8deRYZTYTfTFax2Saqwi5gXXcnMQ1PxAKcQm9Egpi859phiry8KLdbrkddcMYge",
  "key9": "619DAq5e2TKc26qkyh6axfGUxffZpLRQvBe8Bqsf6kLe3iNFHS43EqAvMa6n8zHmnLwqVJvvGsLk4CHLEkXaFoom",
  "key10": "3j29kdJ5H7hDKD6tV9VK6XbrGrzPFLSHD6HS6n2MMazgewSTSZoScKfMGUMRw2k7HJ7KjXAeKnfDRaMPgPACSfrK",
  "key11": "3oR3tofxPqx5LtcVeqQY1EaKWYHqqNakEGFvfhA8oafnqwjwBgz8P3wiWVF1VtH9jh8XyJZBsdqF6Q7NhSyZZ3sV",
  "key12": "aTnn12HqdGUmf63xV3DTuEpxiMS7QDwnXW9ggtDmuGf9Dqzjv4HefrK3pYku5hs7fLkL7ND8RnLqDRQ3UHvVuNy",
  "key13": "5mGaBXUpknAmVQEhdz3G7233SDwY2wco5CtYG8pjhtg2y9mm897i615v4b17QFGuv7sfWTF4LTjaKsqMzFqowJhG",
  "key14": "33QZPqnqbZ3DWaG1HNF823rEKXBh9CywtwTq4p9UNbVioXhZwac4NeJhbrC58Sruf8jPK1mkiQFHgeU7FFRzKzV8",
  "key15": "3qpLHV44k8ZQpWbokNuVrAyz6x72hBiZ9vjT7EXaHjb3s2ErvLaXArjGzdmqyxSb92pDRKrbu4F5ZdKTefAuAViK",
  "key16": "2SgNaAxsnxV2jS1eJFWG7CHGh3rajWdMJjHAVtKYsXZ1LVKAofKdJcYXAurReuokcAuZfqEaRHSFhiengP5571hb",
  "key17": "FzH2BDpJD1134uo7VYsAkK6HBUxvFyeN4eUskTpwAmgCPjH9FiFaBYmCMmYPhHs6pp32ZdDU7KexzeRUWufJK16",
  "key18": "3s5Vud5RSoPewB2GyVHeETWw9s9J3k3AhyZyf3wP7x753Dpi2Ag7BaRNT6XbLHuAqEAd9XktMa8C5DoUQrYmVDvu",
  "key19": "2oQBHbBUKdaAJEZ3fpZ5xCUddNgwsLtxx3WutVCopRoNmZDur6JazamjnbkD2X6Pz9umGPYeCmWfinWW1RzbK7y7",
  "key20": "9KoNhodm4kxEv3S1zT4iaCxR3sdqLmvBSsYijg299wtMRUxhMPzui8j5oXEB8GJhHCHb1LhU9LACXCJ1yvTz6FE",
  "key21": "YdMaxkDJGWRQs1CNjXEv1961Kks5YB1jdXQViHADxuDusFyFAqakU1vDDDbwX52MDcjw2hhar8PqVMeHRreASQo",
  "key22": "5fY1qkdPSpjsy53At3N26Nw6aRPybTqVjVdUzGEudY45HbUtYbTZ6uGjKxSWeJBxrG4mwJigybtouzgGDBBdQLH8",
  "key23": "qMujh5WqPvzKBjcFtoZdWGgpDLkR3xxwNiZZAteWKE42RktMM1MjmXWSQPYeuu7TwA2TLH1rDuFvjiNRVDSXDjf",
  "key24": "2eoidLNeLjLAYLnVkR2jsqG74FA4BeZ5h2nGMejRAC4uqYCkiRV5WJ4FGYib57iC6AWsAApJaFfvRwRwwSLhkkUq",
  "key25": "wZknWR2ujoyy8NjXnPu2AtcXvcHnWwcmTBQCwHVaFUFBmz1t4iS7RC4FvQmAfVj2E6xYEtgZxBRqw3cT5ZorPRb",
  "key26": "5stQHku1sGmcK8qZseiCNDUGPQ6GCDf3PenBeoyTLxnzdArXPTJUTfQnF7dm9xvjPwZEHHjQMBYrQXDShTkc2iAS",
  "key27": "2tUVJhjd8byWGjACdugypkoFwv6iFRZUgxrcBHs8BczdvEsgwm2K64bgYyS9CHjqEQ4zgZZc96byhLecv8jaFoTA",
  "key28": "3m7Ce9jszpwAtS4opJQMNY7BF4PPogaftRN3eXrHWFhicBhXhmew5q3FCciqB7cV1aZfoULLwyRfYZtrWczSEyVu",
  "key29": "2DRLHF6PTBhwyeZw39LzvHCTNY8zeW8N6YUWYoiimbLnqVamKnsPncQ6XULUcLKVLMP4vStYLuWGwDYLPhakNzGq",
  "key30": "3q1jLLT4onEy2Y6wo1cc3KjY7cjoP1jhzbbobgm7Vu3xmsb2vq77agPiZVEoDw8AM8sRssNHdcqPXNLfhCqFpV7f",
  "key31": "2Y5cyqSnetBFx2JuuS7vZjWGKtBU1VXUQRJt2sgheK2a9v7dRbYHofkGV68WeVkdEuPhie7PjZ3zP6ZsMS1XFj4Q",
  "key32": "2E9orAKt77y7kKyVp5o5SN7k9jcy4U52Whv1KYsBtgLac7ZmCKzoBYuZiE4SJ7ieWPDFHRQaHg4oCp14P1nTRjgD",
  "key33": "5zm22NdP5XoqRxqrReMThajhfw5K9dXe29nF76WgKB7cmxvBcXPDr2HuEdLk2YmjQjFefkCx7s1FPCpvLW3EefxN",
  "key34": "2HiJMcJ6DG5W2xiPsmj3gsbdbiANfkWNKs7WSpePP2xBoC9wLZCFAti9EQDcoBZHcFTQmddNrdMrXs61r79RVw1V",
  "key35": "2UicJYXpj2FvdgNHZiid3yvgdiyR9ZqLiffHhgaJTAtLcaCkgZfPKXGotnUQe3ZXXgw9zKaMzqaT55vmZcbgeeUa",
  "key36": "GFTpfZPet3MbcaQV9YntDw7geUmDoMpEfNTZe5KJwY5w9yXaXBALkjjheqQKc2wcbstSBFsPBTxFLa7XM9ZnwvD",
  "key37": "2SRhuuTtsqFWS9SzV1156mFoP3kXxEAbW1a2RaKRbme22rXHNB9CjQBiV9kP7YqHEDhegB8wrUKaLduKRvRxAnvP",
  "key38": "2ZWedPayKdiwVMo65gwuhwNpqkEXc8je8ZzkWGKPK91c7BtzjwhHudMxBNdUVbSp1CmxKKJUA3oarjNSdcMpdJdo",
  "key39": "3tKQsUuonvSXa2o5RrkyVWvy9uYGNQczLtAgfScf6rFSEMrRZmfxh8g4nb4pcdhr8qauesyX3cuaHVW23WiF8qe7",
  "key40": "3Awk6BAUYNTLqzAUxPv1oZMotKJJdFZhSzt3yVChjE9aYbN829SujAfPdQjq4QuvrSvPEtZ2wCtUnrQxZGEouttv",
  "key41": "NmDyAYPJWb6GFbMyzEX4ncyCpoEGNqCp9E5UeKLVAD3JEmZfrrVeU5grBwuebhJWW86R298mu8rydDsVRMCs4bt",
  "key42": "5yJc9fDiKEdLPjUE6xdANCTWepEunoX7LkUXUmDCwhQDg2CJPA5Hts3X8z6KMirmvjTFr7MsrqbmrV3KmgQf1itH",
  "key43": "8f3ebR6GgDQWojneM7mixfcnkaAv2hi4ma3Uw34xpXstbRtgT7h3uWrpF4jygaoKNXqTRWasWuaZCP5Q7hvDGcV",
  "key44": "bRvVVWwQsYVJNZrowpTb9RmFzGGfcXJq8eHaZi3K3RjUmXVvDTYYmxa4dUPnUZDZHjRGgGeh1SM2zzPCsobp2b3",
  "key45": "5QAt3JCzTnaYbUDkb9eKwCc6fspXm3bnRJRiqPwrTyD21mX9AC3ug9DPRuVxWRcPpwJkr322vKJ2BDoJSJmdSKBr",
  "key46": "3MbfBCwbUgV2gWq1BQ7JFFKzmJcdu32aE7uVvL2G2dwrLL5QBFMrPBYi4zuUnaRmV6gqWXdKZiS5hwa1giGbJ3Vh",
  "key47": "2UGekxTdbK9EcqeTsiarZ7Qj4vStgjSqJ5dwHxsjH7ZLkppY4qgv6rQ9i1S3L63HYyyJjzNgnasTgLfMj426MFW1"
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
