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
    "4ydctebtKM5juqHRjHjwqNpHVZUiZfzSaCjnZAmbgoG9oK7qcq3qfheXhisG4zufnJFHPb7iaMSk5gkVSZwduCUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1j4ierHnPpJJFZz8MZ36QwUYqdypVS5rwvLtdzjFM6UK4eH7nnjzEHsU5gVpWEVmoV5F6rhEqJZevhz8Z2z59",
  "key1": "W3WTBMkhZ6HyndH633qfCHQ4KckMUGhrm4yz4ViSTopuSaN7ZUwu7jmQVt7pLxzK6GrjakvZDSze6DYiCHs3W2E",
  "key2": "2ezEnWuoRUN193vVNRybyHxUMNi7QVZUVckxdootTM5vrbRtyRxR7yVFr6J3qRrENXHnXYfXLcBzdtoZvQouN4Xk",
  "key3": "54XEBuLbiem4jzohkM2frNJt6AptUd2K61XiUheCxHKHTFkUCgAv6r4iXvbY7hHubiFETyMuZbV4k7x4guekJC64",
  "key4": "2bnWBgkrXTnZX95a27vuXHB8kPRHDF8wHzXpk6XTD4zvuTGWkget6C1rj5GD6oPGEucwp8FpN1tg9gjSXzBpjo7X",
  "key5": "5FAYFoAWFiFKHjyMQ16RWHqdEaruAve3VMJrVxiu8m6FjMZnnNH1UqbNkBzQtKFsmJcQABEsQhJMpGCgz1FZFz6Q",
  "key6": "Jaqjr4vpfP2pjCPLyjFwJctMfywG5YbBwuwjoLKunhvZb33j2SfMzHBdx6KrVWWeT6BkKNgxvGkHQNunSRK8sWj",
  "key7": "2cm57kACHuKsBUN49mzWEk2wjvi5861r8GW2oy3wEsRk8HjAnRGCbcdwqBTBS7Af2DcfdnmSSdTCFqPBxTBBcvxx",
  "key8": "2ebDXCBM7K47pBei1EaKmoT3iACedLmaGhTfT1XspvN4sxg116GSW2AXeCKfAxED7nPgHhuCqmSAQg2Wxf4mnAv5",
  "key9": "3oVmzXF95mpQJCrAxzEiHMg9vf6tkkHzg3KA526irXQcVP7zy1gV9ifKCwTCxQxH6hJ9rcrwFfZC92DdCpX8yCwF",
  "key10": "26T7drkxXfnrLsT4KenyB7t18Jg8JrqKmDc7vRbr3Q1qqDuCeeM9KTFCwXXz8Gi11RDV3zmzh8eqQuFwGsZ1Cdwn",
  "key11": "4TQwdv1xwr29FAfWJBgpCiUoCdJ2A4xFExV6tthkt1B8NLb1a4SBcmNmQM9M5DpU6HhZy7BtG4LJ4W7QYH6F3imU",
  "key12": "35Rmg7jzes99R4y68y2WaSvuANETE6jVGhdtgz1gnTBQGA8sruNkXTa2g7RYMxaB7TkG263fJsW7vW5TgUYoydDq",
  "key13": "2WtJ6wypLbGZcj4vzNeKcPYDK7tpgqfxnggkiTZ3Y3iAnfs715fRBLZRFi8JTHhf1Nimstp63GHZk3aTUaduAmPA",
  "key14": "3VQTXf3vkLfsBkuASADuem5QNTiigdT6se5nwiGChh62uK3NCJNegRfHvVN16BkDXmQ5gezePQGHmA4RMFrbnknW",
  "key15": "fAyCSdByWj3ceLDYwwXXcpY9EQaWTQNXZLtWH3U3qQ4WnVH41XhMDQUGXxxpQxdKLwGfDqxQgKyPoHH2BCuGu7S",
  "key16": "268HcrqdRVtrRAKjaAp8csBMZcVYSGJqXnRXvyYW3YykD8CpdtrqGweuDajSJjQS1fycurFirFLVgSzRLRu42Jh3",
  "key17": "5YSfQnofzr367nyKcEVKajPCCFVB9Y9dSEbzYKDmZgwCAm3igRbNzbfAydgEcjoCYec4HRXzcA3nKrToaizn9kaD",
  "key18": "MVzPJ5d4Td89AN9noQe82xDP2d2FDgcisGfwh5doj9nRqZ3q5CC9X1npJxfD45MsZ221ruW3HycFKe4gASSNxmC",
  "key19": "4Nzq6YGgoAD4VttEi8vkkzYyy1y5AsQKGjmJSpkzcmhQ2HYffBJNoELBNwptEyMcUPfYHMXdZsfwsRoHm6zYT8Ww",
  "key20": "5tMDHwFbQXT8spu3uD9XySYtBJux1bN4WwcPBNkzs6qZ6hQezgjzmyQuevXQ6F2YngnVAxTccmxsTRayKQnfouzF",
  "key21": "65Dmk7cFhNY4RSp9uY4ZhGF25KGqzZj2ur5dCEZ9VRcfvXM3bEzc8ZTK3ppRJCKpLDuhdVEDigNm1i2AdLAC5CSH",
  "key22": "2sCaComEpBubicu9J7XpucaHQBtpaL3ifktPTLYrSMi34AEsZpzieUiAgzobcvUxYsCZVxoLF1ytTFQcSEGzw5db",
  "key23": "3FfRXFERVxcWNuUS8Ggi2iwizUxFY16UJrEzM88NfHozqxnP2BrsLBxbp6fKEF617zoqkUgpWZJ6sq4tfdJcrjNo",
  "key24": "32pZgzEC24rzZz2cGuHW88KzDheuTohWr15Mevw82eevYK1FQhpSuMwTjrW4EUW88QNGukz233unJ7r4zgQz8N67",
  "key25": "4vBHcZJoFBi3QxG4BMLakzSWQSq8ebA62hkdJCAtFWzFtAfzbaZmncBogynhgJiEBALcPrxuMopBEnuHr85ghQWp",
  "key26": "vyBC8kYBjho2fEjK2DPfHRMBEs5uoxLfWWFH7hsmULQr8eJA5EheQrmH44GKwuoBXbifDS7XwjDsiAbXw6mFCA2",
  "key27": "4djy8dfbwcZURB9NLiA9p3H5BYxPVLWySZmiohQtTeyBqq9jcJwgKwyS1gVCNnuASwMNLUDJSBgJhK8sc5q7Q3JT",
  "key28": "rUj4CMHg7kTowHTGqee7dPsVDmayXgztPumqDXSeWSBhZRPGBf26CaouAHc2KZuPJ9n5J7GhZPBzYs97A1aq5Jy",
  "key29": "KzrP2aNE9GYh9FhBK9tL6b377CB78BJbrHTrugy48uyDWN4wvSoWwoSZgkHVHiGJc44P7JdtqhNYV5Pt4ttF453",
  "key30": "42jEKPTxC2BbY6ebgZLkWJ2KEcMqwNoRo3Jr71UeWto8PXFiZjrNCTgu3DG9vtvf3KDo6QFoX7MtLDLHq721cZMz",
  "key31": "5WqDW6T6rK3QYVHnjpcWuXkRRzuMYR5178ufmgtJkiBpgZTyc8N4f9ZNPV6FQRCXuTsoL3AUUhmagvWVopFZYeLm",
  "key32": "3derfkof7k6k5sjvsvZsdP2XuvLGCjEqkjS4CRvQVxxkyGWgCEncQZ36fbi8Z9HUtPKsruAdt9QE5XuWH9wpBvPt",
  "key33": "2kRhr28xr1JaqFcWjaRTjMDFGHwZWb6BZmM7DWafhnTpwkRMxS1c5bbbaLfwUF4PvHnjWAwUc12pgdpYRCgB6REe",
  "key34": "5nmR5zAbc8szHJ8GEomwm6k77ZWYH93JR7v5iE8nE77uJyvJv8kzPwu4AcdXSi2fstNZnk25DPHeQ8nX7eUoiGCZ",
  "key35": "3QwE8XFQBfE9HJY5ZxU3GnY1EaCqpEWfg5WsfLVRUoxTB7ptVAe81GVkjZrdRN396crFAgSKnmakKo96wmm7JF9f",
  "key36": "2Z4z3uRFauzfjEGSeiKtCc3mvqASPp57FHTDTsiZYwM5MaHQeYxf2BgRXmf5v4RPnNeYP8mZdDZ8utGpUMqoX2B1",
  "key37": "5VPpe7ffaWH8GzoUij6gtGUuSTGuDWUdh3EVma7UKTbTHEEUGmYANnMWA1ucLRaDqYj9VKn21Ruizc2GrYANJCXX",
  "key38": "2xRRdGxfzNvamFEt1GjaqbihLmiYXeXmqMvR5VTrFtgAxq1DUm2NrhWp1ndnaoLmEbhNuHeAqx5VEptz2NaRCht8",
  "key39": "efpHryTaa9M62c3BjpoCpSkvWsXa5gYjeZ2YoJMuMURGhUCMCCzUqXFUnWqmwrbsd6ZvmqYuquh3jjZHejF5xqt",
  "key40": "4W19qKFN3BviqSedizPhsjjEoPyZJwpHr2XbNHTtbxyLzeHj5Vmo4p1H3NXT455zWwoPUEqQprNbnD5AmNcLSWEZ",
  "key41": "3kFqrnavzJAJPhW2zF4R2mucSLgSc3Cyjd1ZwKzwNGKAGs4k3VYwTm3dQmtL11zu2C8K7CPE6WX3VxRifCLuKaWY",
  "key42": "2Pa2KttUz9yH5o3VwkZrYSEDjJiQZQB3WptfRCP4gPHUy2i3sTpkVHNYB4sLaLdGHZbyzTXrRTsVyFT3tJGtTC5j",
  "key43": "3fFAmncKMyvHJhvQDSH9GMULVeSbBh8tJY9x3uuLYaLNc2nhgeYKVDhTXS8px4Z9YBN2R5EDQc7ZD6okzG9b6R2i",
  "key44": "24zvS5Ex5PPK9ubjVf7hesoXviXRbvxZAf1KwdTnsiQnfCKtGCQyws3wvEJcXWVBJ5nnq6wsXYVZYTfxcxuvVjaP",
  "key45": "4sCN7Q61dx37JsPe8v4eGc8sU2cP7DZcM3KXjnK6vcp6VLufhXZm7dRuuWmP5Sbos4NekpnY3cMCqGvBV1SJoqo2",
  "key46": "5tWyWLixHGW2Pv1XPqDirZL6KumSrH6hSihYfS221rtNo7xTzwaBwzs3AgdnbesFray7gzJyj9djBU7k8Qn2CNrA"
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
