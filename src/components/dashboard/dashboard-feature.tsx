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
    "4HGAGdZLjNSwnFQWvJrMnmk9Yuh5sN2fkjp8EN1rpSRa5L4b1kXmq5TVbJkpwKqPV1fonPxYBzYAWtnaiKZWrkuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obYYJZ5zkoxZNbDpE9jWWd5cWkhhzjNYkPvwDdJXvt7BvLtECCp4op3nVhdk761e7WbjdisAGYBDzXMxvdQD7K9",
  "key1": "5cPySzqHTAb6XaeciHnEUwX6qL3KJjmPjw6JKTcwJnSr5ALKDafaHgSGkfoXESMZ8y6neQQT5CiaHW21txPaqzBn",
  "key2": "5mCvUiQokiCyMRu9uBeNEYgwrcJWRujBS9vEjJ22bQ5w9K6BgxNBowsu6ZNKm1WARKRgLF93PhWUG6dDZtFS8FPA",
  "key3": "BktY7RtRoKb3jZqH321ahpiwUS2VTdodqytCSfdbtK6QBxnEBML6T8N2d6rDNoxXJ32GBEMyyKx8cR9SBzsyvyW",
  "key4": "3V6n1VZN2toqLXYX2cF5PdxqC1rbLtoPd3SES2wmEoGMzcYBXLuRtSP64o2nuNSmSJbYDtCqT8zmcxMarWSPKNjJ",
  "key5": "4n9D2B7U63pe6zkGS4o8f51Jdqzq9vPE28uoLpksQMJ9kod9t6ARPoHA26UC7XsYTorGf9WpqXMSt8yRXtCz3ovB",
  "key6": "63QGEokpCh5CidupJrgmJZR8xmqQFwwq3ASqg41nfua4u9wtaiN3aTPoFd33g8YJH454deJvUJDoQNFhXfe8FRjn",
  "key7": "3CTpYpvEpyWVmhFAZqvLnNiMDXWjhrUZ4J4i3srCMKAWZb34uJuLUtNnStzgRdNvAMHWmt5RS1FaFuc435SyBhim",
  "key8": "56jhcsV5KcpuvApW6zp6p82S99bytm67sq4pnWjXJqhEG6YALZ1vLPQghLgtaaYazXqTkg27vf6dsnphVcxxFZHH",
  "key9": "661MeAp6XaT1qBPrZkAhxN1FKLZHbhmYWrcBT92jfgdBLfC1yoDJ82tz7b61jthujcAbhghkagV1pU18uksScsbR",
  "key10": "2tdreDCXQyXTQr6jrEb6a61azXQGZXZ73gU7P2appFR367uDbo8YYE7ZsTtyKmwC5Dgdk8DScX6DYgdk7c1xHMGH",
  "key11": "LYScAfMZ1y1Xt5eEwfLzdjPGGU7BqWQZNjFEzQjE6foCgCKunQJ8HKWXenRtdzhNocioNYtRu3w3MEh9gC6ZTBF",
  "key12": "5quph3gdQUgUQnM4Q1KS6oUHrYdq789yjTSUX5vRBfH8D6Wev1TMKModrPwQ35mFrC1pNhcECCpgYBvEoZbdWqaA",
  "key13": "3khDnPpM8bK5UCouB4asWpaPphXHUSpY44LWATXhvwrPF9RRwB8XZ4SAGs2nZPzJLUeqp1ETdye99eML9G1p2Wo1",
  "key14": "4EQmCc35g9mP9TxGuGB7nxFM5ZFwqM6vuB4CXdcCyFe4DJ5nXxmCmdBRYBP5vM6PDcprvdXnad8smvFUkkhRP8B9",
  "key15": "4BtY3MY2YNWPrzePkGRnb9TpxoWJtSbiAwv8FEFKaTbyjUm4mWgseNXtagHN2Z7Ta6LyPLdMjGbUh824DdcXb69L",
  "key16": "2n35GrfBH4xoNCHyg8irH4djxwUX6H7g8J1zXLMTWX5pdWiXRdRBhVWDLcYaWdTXoC3fDjgnQUaHyJgSAWZtjHSZ",
  "key17": "UfauKzLhceJvzDN2eiC3kEK7vLpYbgnVV3wGTxCt5WxwqSQxYhFrhj3A8xqGKXFjUv4Hn23tp4TynJDz1Vqv44Z",
  "key18": "5k2RoJbh92hqGZD3e91rDUxwAZy33ignH5y5qoffDkpeuDDVF441jBuiFxCftRwgLCnT4kSzEkoNL5wzXaGQtUMs",
  "key19": "4e4LmRvzfUPp96VLbxe593aLezwpJ9eUedMbhdJPi9BmWfKcQjq5hD9SSn8GK4GxsEFyNbTaoUcjSUhGuFn7udT5",
  "key20": "3rcb5jPpNGLwuMuS9kuePRjJeHbBbXtUbZJomsjRzqCmJ5cKz3uegEJSZxvAWaqSArssPxztCdzQeXQ9Cj3PP1sT",
  "key21": "5cSsFA4QPag9GNFLAQKUKQUK3DBRax5aH5yEm8AmkhzZKVxZLFCr83MjhoRqBRyrVcpnN5R7hkc4ZEKo5Zx7Me2v",
  "key22": "3S523DFdke9fFaa28GHvLvsYduJNEN65hiV8WMZda2nmSKxmc86RcvQL8Jqs1TPWjrpR6PajxnaKDPwNboXg5Bup",
  "key23": "3mk4XZbJaNKxnPTVGdgMgc7Pthyhnjn9ssRKreyGk557H1YmBoH4KDkkTMUw7knN9CtDhLzw2tNgpLKPXHPhMLbW",
  "key24": "5q9d2mkyz46hePmj1TavaGvujzUZpD4os5cDFtBbKn8N5nNkALtnpPfd6QHDLzedUv7ScEHB3Y1QXv3aMuLnoEfy",
  "key25": "3yjXeX99sD5tEr5HikXUDx2VFvpxejwxbSK9RunTsdErvV1YYhQLK8DHoberBDh42RUXzBzKX2Z76cVfVFGKqAU3",
  "key26": "5pFaJ2eeURp8iDvLAiVaSRXS4BsAk6aum7RKCUCXXR2MnSGqCqgFqQjt4SDp7fnProPckfijBHd9GcBy7YTZop1y",
  "key27": "KRP13wikBd3LdFDeNhdproDkp8hgq98HKZvaQsbsYkBrp1YAsxRyH6dwbqjNwzYVok3rS9DsX4oQaLPsUtDV129",
  "key28": "5bus25C5AtYh5eZeWBCv8K1f9ZVKHXuwhqAL8kwGbwLQhFBAHwpGdv2sMBhbvvf5uKQJofbDhinPnhwrKwyqU2yj",
  "key29": "5THsuhJxot3xvi7QHWgTFqGjFdat7t64DQ5GwA4BmvVDJYtnqD5V61MtaoaNnrzPYrU7Rw297HJSns89KEAAe2V2",
  "key30": "4i8oWVpFNqYqpxqSXcg5baNRZrXdcrPtXoSFrSDWSxvkYB7mLSVr3cXzozuuF3mcZtcYgKbgX65EZcoPaNyhEvEd",
  "key31": "56j4nFS1c4GBDcnt2r79cNrNcBdSLDnAiRqNPheLB8qeADvdTWs2xLt4M9skLkAcEYyX9zqk4GsarJhHUisNTK75",
  "key32": "4S93LLsE4didDSMUT2LpqE5xoUNrpf3HNTPyH2bMw9ywfJTmFrMkLjnpf3HdJ2jh2CtS3JJcL7HXiDE3AUW74bwZ",
  "key33": "336ov5JrvAy54AZFYgUyvgC2Tw7WxuFMvjd7KUVpJVUuP3FNpcq2ZSFesC1TipneXoKnWPD5yYB412VEx5CySvEm",
  "key34": "dGnuCoiiunoaVToHyAC9wFum6yWjAb7gggk77LTChMJqrahftsvxjUihbt6SrizN8SEBsnWTJC6LR19hyrGEs2q",
  "key35": "ucPqAGM1gpsKZWYTVDi1kcbjP7Txj5HGRWE5r8QRm5B24e8tJM4fKjzVwcPU1fxYZ2i9s4JNMPpY7nR4yAN8hBW",
  "key36": "3NUxeSPEeSqFT6NSy1zjMAjszcL1pi6CMmPM7hdvi4adnWyR4oZDbMDZL9AvFsaLouCXV19yz15aAiqrX1EEAUPx",
  "key37": "5ubNdB5LVLH6AuxqGuDosWrRYEyVXhKAseST2M6ud7fghcULjMcAGR1Q6pzwnKe9Cqut97gwtFN17fbPcnvjjHdp",
  "key38": "3D1RVFdVEnb1ojydpsF24iseeETJKafpeMUXjL6d8f451MFEQTupHUMhZqURVt1Se6WhbqQ1tue4gEmTbvLri7Km",
  "key39": "YmxwB7o1XFjF1mpu9FNmFn6sBTSgBe1KDhy5gZ5eWsfSeT3crt3vbKmdy5r5v6MH2nKnhhexd7aGWCjwhhNFwRb",
  "key40": "5zNWNySHNk9cMY5D6uFa2jNEhwzw59gdD8RdmeezVwLDJnXsqkSdpvvpHsGRfQsJkPT7pUm6jWtNcmCKX3WjEFZJ",
  "key41": "4HQ1F95kM7WW6uGv7h1H7jCzQkhWsZPUbQ7FardEHERw9Cnijdrw7z9gKzKoA3YweWzgwEGBzy32yDfsezQMGaku",
  "key42": "W5mgbbP7sMsmhEh2NgHsBcbsAzRuE4gBJUmwFHDnR1tVWkEExxzjE9pae79yuAZEhHpyqF1c4pwSkaLv9C6ECcF",
  "key43": "559jTcAj5CfA8QGRfpSQwkmrva91eYyMekEWXn75vxtfVPVoVoRgXNrJ7UYoTE7YXfZ4dKKNLGGQNrm5LB7yDy8V",
  "key44": "3AbdSN7Unrabrs7zGp4o9QvgT5MRWAnXnpxtFe7TRkmZw5fKfhmCpox2NuU45GpjKcmqGtsGrQP9vcM5bvBBT8gB",
  "key45": "5PiUwAkTTjvSv5T5zfQicjYdqf3uyfyKBCMuKwvjgEQjtwXettZoEuWexYBS6Hbym4389sLDHd9jAD7WE98in2MU",
  "key46": "4RMLKEqL7oKioDFnGj1fFAKzDFFadBSNEBu9WEXSnnEF3yD6kWM3Q9YBW4Y8bU1J3NSBGjj2n7rMoSzrBcDAgEm2",
  "key47": "4TaQHbxDwbqMLFBKDg9QJCLQwgj6C5dczkjCu287p9zHnRV36oULEWk2XEvXgjUN8jzCGYNsw9fUtxueWYLhBUDP",
  "key48": "KU3TsKsamrZ7J9WK5wqvuCbTGdUiikw25R7cJ1AC6EMWQ4nd1hrStHXJoVAKRTM3ddnGnqTCsbAmWimL6dk2rTj"
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
