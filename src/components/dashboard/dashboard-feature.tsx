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
    "XKoEVV96oocgkxyAwvsEC7LPUHWU1L4Uz3kuQhAjZwn3K5khBK6FeYibAVvbJgtTLZgyEjCGwetajux4qvzNLYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xhaFdsJSoFQZDwe1QrSbdkvyakkf2zoSBoAMYhwnJKv8MpapE6M1uPwHgdFTvDPDwfDrppqE8GV4Vv8bUkE553Z",
  "key1": "5VSz1YPuTet3cubWpdLi7gjz9bZ7fajZSktCKRd9wBBKUXxjkRkFUHPRh7csmShWPCz5tsPmd3EiuCAuydtbQqtk",
  "key2": "534SKc4sxbdiKPjPWYoAbrB3j6sDbMuF8YFqnB4c4txMy9ETtK3bxtF34mrQxrt9vAEkVjm2CPQ46YHv58YjiVb4",
  "key3": "577U8RD3QqJMBMFazW6uv44kEMCZQZNcjJG1u2D5TbnosWZTRcv6bZWP6BaEsk4Ndd8PEmvKhVL3ireihtYXLyQj",
  "key4": "3CVBj5eVKA7Rv6r8BkVPVyLZtGYZhwJkx1Y5MdSBTAKbktZg4dhvFQNkCdz4FgvYbsKTUm5VEa1YKA3SpjqVETab",
  "key5": "4s6AHJGhKJrdhcf2BeorcMeuEiWd6ufGu5SDqVoZRwXUR8tskbrywrBv3h65UFwH5HwBBozuGGMzoxWB2Niiykug",
  "key6": "47EGasoYPXKHLPkAWjmCvJgjZP78gx3WNMqcEc6eGb2qF44mKRLDKG511X9MFdQZrWYgN8sJHsZEhkwdYn2T42Ay",
  "key7": "5aaoCPmLpCsn4vxXavHHNnCC7H1nDMmbXjTArYeUGGY9kwZKTntgQJazwMPrq98u1HLJHeXivThx3qi7CfytvkDp",
  "key8": "2D5eFHjyGUDuLN7sBR5Q9kkDYV8PVcKbcv6nXdustzo8HPQdVPVjFkKcky3upFqPfFCjCqoPM6KoCKX1fhgSRano",
  "key9": "2wnjKUasyssP1pJpqEVwC71ozK52DGXgmZwr1UVyxjD7FDBE29g2keP8wt5JAhpPVhsqrYVY3gKYNAZ6bSpACPFS",
  "key10": "5PtBasrQ2Wdic9mnyou5JVeHdVTYxqKoksYfjGwhz9uCbJnTVJrTxuZd4dkS97tK2Ru9eTBxm4tBbHo4wxTAMAsA",
  "key11": "2xFq26gzrAscyXzQbk74z7oK3ibXWdvaXBFo5BKZzMKTrfiKfY3kFdpcs3vpvWzrZFtXZoKy64ugf3Q6HiynExS7",
  "key12": "3UmyAjSuez3f2pDDFWJGxakbQWB8dvFdr36i6qEHHM9wrsKr6F7KRDqjVCVaN1Q22KwWRDbYCWpqsrYFfF7jBu7p",
  "key13": "47UUees2LMj4F8BvW3iVeKwH6BNcVx3Vf92dgtEQf7QRzirTTMG5ZQJf8ZtFqMfXgrJwka5sD4xtGdmaoKnusMCq",
  "key14": "5zuoWe4A7UZF5dJzxZigBPRaBVBZaeVZgpWcaAKqbSsUDXBNheo9L6pcWYXiTaf1C6hW1CFsd7Nto36eNRQgkRVz",
  "key15": "4rBG6y4xgN7uDpXCZ9VaB4AZHunTUS8Yzck5y3gWn5joiACh8xpr8CsQzpwqr4KRasWdwPW3KKVNWFdMxBPEfHWZ",
  "key16": "5vnqjXKYgVHnqJy5TYdnPTdfmNsppJXHuKbsjo5rVPafd686zHzVJU9B8uyCQsce3yzuphFsPfbGtRiHWH6m72wq",
  "key17": "4PYur7zx9x4tqTw5TYzpT3vVzpn81T1QYtup6C7n4oNSaSvGLzomh1fu6rnw7PKbZyPUHEYXRZzwwGQEPa4tgos2",
  "key18": "4YPkEui5BaJ5m8EuC1uJCkCHDMbR6Z41QzPpaYJCzEWBzpzCvCyZ37quHR9yXQZRtdsXHAmvpxvsxCABWvfNECk5",
  "key19": "3AMr62bq4twdamadVe4QLkPQWeWZkhWZ57no1NY3PeV9B27DU7Ct8wPxbb43iiSBgTJGRV4MM1QbqRXMmLhFksMi",
  "key20": "27xEgPot6ec8DCxg9G8EwQn3XYYaEQ7Pd1FQkQ8E8ZoR4dDry9vzMbDUAkJQhpYzDEhg7UQUF2pKVBh9Eo9y5zfv",
  "key21": "5ynK216iPVf4Q832cvsTbEmZ83ig2Kn74rwjh1NQjETq2GJNDFGF7mZkzuqqtQ3wRxSr7zJYHRhfGtabN77uCLGK",
  "key22": "13Qykq5EVTfiAiTmZddoziU6F3aRWkUyYiNzjouBHHw14AQWUsM8DWPaaFhJPmRNLjJcvGC76ZQPWDav5NFzGQ5",
  "key23": "5RLLqQ5EJ6yXzThjbgzkPKmvB2q3G8M9CT7svFzrwcZff89MQPaUVKDA7hQixuxKP9z6Rw3EPzSTiyqmdcsUSeGK",
  "key24": "38YR3YyoC5XKjqBwuM9eYEpVxAVmhW36p7Uowi6aDze7Xqz3uZDpAsRFgi4z6i1M56zEjoD6zoyKjeTmPFHiTkQH",
  "key25": "57hS6KR6EhuJjxfTc2ZvQLohdo19raqrVEeP1bvxQNqhWRd1JqoR7FfyT3KSW9nfjcutW7ubWRy6jSQY2h4DGxUq",
  "key26": "4Kw3wz4r5EamyHLYvr8VxXs5Vz28WiNpqCcNRkHxhrar25vuh81R2MYSRBC7uuLk3gT9TdMfwoksRubJKdPvHXGx",
  "key27": "5UVvVfwggVDhj9uYdzhADvUvKnDT75MPu5quUp4wkNdDDyU6Nycbz2hS5Ekx8Eh7gqpRXp1fik37NGfRLudpnJqv",
  "key28": "3L68MtmGJmM88sNioqWFosr1suQcKtkLG6X3CTZt99rcsZx8d46TsKGJvHxfMrBzLQNvxEAdpKQkgWvt5PYM1dkS",
  "key29": "4rMnhTaa4AFxD8buJTJS7UuZjQfDNZDk8RfFXJQFf8zQbtWumuGcStzSjPyAfFgK8XQm925LcS92fNuPzwVrYNaC",
  "key30": "RkkAeoQS8NRERu77WbEtJ8cmtzcaXNC4to8t65wzrx9VedAbMtkKazbMZZcdu31LKmdF9AUE4DwnYNF3W6BweyX",
  "key31": "NQuX5Rb2CuZ7NCx5CVKwvAntaa72JZPwq9FhBcLUg2EtdPrwmzdTbWLcpiweUtdxdvks8paDNxjKXZJV1wENGxT",
  "key32": "ATHDSLNiQi2xnkkiajEkotBpbzNX2WByJbEHTh9uNZTnDTox8CB3gX7UbzqangpBFEKe8oKR1JkWaT1L55LVNPX",
  "key33": "3TptxBTRVxGmPWUUfabw7ZMnYhRA6kJLypMP8MNFESu3tp2k159j4h8xjwBE3Y2VzJcRfnpK89sr526PBmfj579f",
  "key34": "XPMudi3L4cYt4fpWwgeDNuuK4pYsZK4TuJ4BYiTo6rWENo8ych9CkYj83A5jkSGEnSLCzBR9sw4hbvLSbBj3w2V",
  "key35": "4dwXUPsoFnnvuyAGxhas29WAs7Y6NfzKCUhP9BPGPxFgraWEFjBt8fn9wc2JDKzbEUKgja8UTbt4isPKgwrvd2Xu",
  "key36": "59GLNbCsYjKV4NbhJiVVhpDP2TDW64FrRN8RcSSL8jz2aFCpRFkavANarzQ37q8pCESTBW2ZdiRmjfb88F1L3rLk",
  "key37": "4mYoEkaG4ctNvptJdnyYfQVSi2bQ1etZ447iefb9QecvdELUdrkFZc6p21c2pFt4zzHpyoG1oYxqcXmznzrj9H9p",
  "key38": "s4mHoPntYjS2trs8WxngGzEZGnas7CaT9hDtpiBUDhpGGcf3bze3UbJ4aE6cjMFw6TKTocA5A4SVB5Hev5Mz85z",
  "key39": "2Hzk1No1aFXtqB6Vw49rxvcUQ4MeHdfY19YfTHiSZpkGA47C6VpvBm6EUsa7rPQ3yM6784iEA4n3G7N3wixVUbAf"
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
