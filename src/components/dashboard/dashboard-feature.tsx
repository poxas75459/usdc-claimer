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
    "5biHefpPg2Y84hNEMyYVYFT9WQE8qjxME77A4bkhkciTQvBQzWhLMP3hgzdUBoFvFwGjNVG7c4EiycQWM58WGurk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqjFnYq1wk6jspetQ7wj4arQUjoYMLR56cgrJE6XZWTFH8Kkm1iXPUPQtNq6cvkRWzMNoNWP9utHS3uWv29j227",
  "key1": "3NXjPLnaKJVorPj66ZHn2e59kjqG8MiStUnpWargKCdnHwmUpSrZwapy8NCBBTbvTGWzgEBnLdq2p7XGk8CteBpw",
  "key2": "4f7V5TsXqNFETJnMC4oqqPB1MErGKDTG8LMVGBQV9RQE19L8E5ZDHosDkPGuz1reRnCJ5pNgweRBSvhje4DyPE6x",
  "key3": "5QdsDspHJamYEqrDGjXtB2j5LRfAdpAE6rkYg4imw7j2VFK3YxJwtHkqKqmdQS4LVwTBk6HC6KMJK2H1L74PtWhD",
  "key4": "3EFL3soWxaECYo2WEHAWReQYp3UiseRxUDw7Grr7WmaKpkCzVviUtJKGa9ppPiD4GBk2cL4M9gjFzdYWihw8iNgz",
  "key5": "4KfvAZTohsK7wgMFJ4LZmfaTQNmEpkLB5nfdMnz8VwbZgeJc58yKTEeshCgWGHPDUcsmzU4yibrM86yk6zsWjvxs",
  "key6": "4sCCA27kzuihjcmPmXVLKSb8hNZV9hnzuxZNPmGSz9NniBafLiKZKWytxNDPHx4x2aUYAoZqpYBmYswTicWq5HGN",
  "key7": "5cLpkvMejjscY5c7p3xf1cagBDWgRY66G3KbTgX1fG7kpDcVHJK9c7Cffs4NGcHMvKwYpcx6WFoenXQSqv7fsg27",
  "key8": "3rP1DtFyd1ox5dFqmDec1f9u9qCZSxzHuvaBzk8pKz6eSaZcRemMwm3tDepwnu8jbHbqjN2ayNizFkqPUEjk4F5J",
  "key9": "kzsmpembf9GaEVWuG4N3UgTpb4ifMUi1De3AJCAq7R4AWQCF98wYzjU6h7XG5mD6uddfiodZ6zXsj4JFDAB6Tt9",
  "key10": "2wzorAw3G4FkATRkax86HXTBMNCv8pgfyWKDaimcXZp5AGdxAPp1jVrphpQN4uGFqEa4DNrz9QbWbaetecAXJrwp",
  "key11": "AZiGAJjiGT5X5URZp5TpeqZK1aUtF8agtye8ymjL6DqUAXhuQtiAYvHTMxzpXoj2ZwHFzDHEpomndKAFkd77Gpb",
  "key12": "3DiVcncv4hUPNPe5VANq4pgnZyp1hxwHVWZ1ebwPkU6FJ7DMdbUZY16xctcoVrTWn7X9qXCfMvnn4JfiL7sScm4",
  "key13": "5FjA9wF773GkgTHVZh9zuv1BJVhmLp5ycjjzniXZ4maG7fUrn641QESBDK9Af417cjcBshHE5yHokQz9CnRp9aA5",
  "key14": "49aVSmHek4CcZbUbLfDT6XTzvDVbdc1pZYu6awYYW6x7Xyb6twrVeSc2Gutyq4hrm7SyAXEoY3kLkGJFQThwicfQ",
  "key15": "2SfqLxex5gbpWg979U9fzphHbxspQypQjz2cKkuvRuijLnvpg1VLnKofKNiayxCc7bnnC8UuXFSnThP1gFxAeVBm",
  "key16": "3uafiemKqFy5iYDgms5MNMwhMtLsTqPWM2etKFHggMopM6cuN3JaNbizqASmFQR7uJp2db3gWeTSximVCpu3HThy",
  "key17": "4ycXySpPmCKHqK1wmTWrh9nAik6VtvXTEt3zqbskBPc698ES6HwdE95DgXoWjnmGdPbR71xAeoA6STxQZQ9AkFiS",
  "key18": "2GvWksMQXwkGzgaGm2DVMqeRWMTwBuwfpgxLHuV4FX5JY9FR4nDqTYc37ZenYaqTNQnQEBGcgQxC9tF29zxrK1ad",
  "key19": "4cwbMBBhaAh27qN2bahRMHzYz9miyEHGZMmbBsa3YKmGrXsCggnJZeYPApGUJpLzUbECS74y1LFevnR8NDW19bAC",
  "key20": "39Eg9NtUoEZqWxiLQ61FV6qJszBasNweSPokkMgfJfEhSJhVnCba6G1dTtYdnQMzmMzWRdM8LFf9W7WaD1HYR1vs",
  "key21": "4Hdc8ZQKyB8jfeCJeGiiH51baatTYfzraQ1RGMsHoZ2PXiAqEwnKRgxPiGmmDhejVAo5zoLsQpRtDcAuUf8gkJ55",
  "key22": "62aE6yMVmntFqy9oZV1tfi3vmbhnWbi2x5FJRAoQbHht4wyukvHcBZJT6sustjSC8ZNCTSSQ95DpWo1bb6NZv3Ho",
  "key23": "PjWFMQpihgbzZ5KQnmA2hrTHvsUf7StESEfig2NwvtDapE3Vm2c97eZBHRZdzxvAveEjm8Ze9e8Ec4uLjuod4bw",
  "key24": "2q7CzVfgfoZ12bMo9nGc5nMtDgqhabm6CRMrjoKWvZBRj61sjW4XaPhY4AjcxNJytZ3BXuZNtRqg9vQ95Dnagdks",
  "key25": "3godw3V4LUyX9cHpEpNhKZt2MS2D3ZDCBCCo5p3nKYUdj6TDPq66zmf4MJoJqrwz3jZFvsKRKScsGtneT2TaZNdf",
  "key26": "3bqVG6ZR7VNYB141xTjqSy4RWUeJeMtCq7NcHoHWDbT3WYB6AdQLRA4bWx9PoLqTGh6kH7DhhiY5mmiNp7WRRqf1",
  "key27": "2EF8gwoHT2bTHWCL1PFbH9BNauPygjBo6WZdgrcMe4FqFQnuFETddrtB75KsoFjiQDE6MLKzwmPBaB5JwdsMXpPQ",
  "key28": "2m5t52x2BRrai1HmNHpcf5DFRJ8xnphwBKKvSCunBem7GGjAeqLCrdf7YT6Uv9dM6SZGM66eFxpoateg5QqHELJi",
  "key29": "2EMSj1hTgZ6njN1r66xnU1PMdZWAzX9UfAVrQ88c2cTRfMuW4DixuAELSueZzi9KcTgAdtj9bRHg9XA6rj9ytM5T",
  "key30": "mwBAHVNnK5Ddjq8VcfWsLr7S2vy9J2oTEGxg4pdvDpBMk8WRtGsKLCmmFPXFJ4B3isFpiVZh4GyHxDjqjCcd6wk",
  "key31": "5E5U1tYtD6wqK6Fuh27UseFAmcaQxfB29HKCdJEqHZgJXgdTz4YZsBPzduTcG4hK5FjGmGqbNQ8iWMDc8AWtkGqp",
  "key32": "2ujhMD2T33QovDEKxSg3DJwY7DN7BpxUvtRAz9CztYPBwDi773nYsZ37bFUX2qQsVzxv6EZubaHt3n6RLWewSuCb",
  "key33": "5Q7YhKpQmSdckcpFchSBbAxTocvPZtt5sxTamnJBAuXShh8cjthNNJcQXDsbzUN3i6EWzZDmFGgKuW2ckvFMLrjs",
  "key34": "3au5fXA5CfLkMWoqhV131EywZgZvTcoqkTKYCdkWFZdrWhzY4FzRqovoaxHk3JTAPKTz8eSn94Y9vdUbCEJ6uPZf",
  "key35": "35vXiu3EDWf46CZsSMqyWx4QucMMsD959aZZ1mSwCz813eX75dRYmTz453dafzm5HCCaH2PUKy3PQYjQCq64YA8z",
  "key36": "5y7xgppwAhH2YfYsVNnQpqA5L4tj4hDHTjfP8uJo5GQjBPhQ8JnGKctK7ypfk5P14rg8GB9Y2q7z15s7KcosACzP",
  "key37": "3j6R4o4vwr3PgmNPgTXFk1f6gc3zbdMriy8epUPrqokx8s8qqnBHUKafofCjkY2CjQ8C6u6YaBULw9o8DY3sL9d6",
  "key38": "24CQKx1JYySqRGwWBYAWRMPCiyn4oVfcHPLM5oBJzASwbFe23R4j3ZPLbm4TmqsRnYPEVUw2iPHQ8c44kqE6NSAH",
  "key39": "3eB9uz923d1o4yGvMeJgTj3L9qoLXv8iUDFE3YTEf8cqJgnDoishVkZxasY8C2Rz9iq9tVrbCE4RQUsLDtNz4fNd",
  "key40": "4PyojKpJvoLJX6dg8P6nLnNGfBevy7KsA6tXinMv3oBi4nMvmaPcWZTywWS78tHiTjAWxMt8gFLaKpufeCZLwtp9",
  "key41": "31AknuSYMjav6WHgaHaurY7kfkuASX6eoBkFvP8AVuP3hAbno3aoiEoyps86X9CuB7huM7BcjokgGS7ATUScdTgE",
  "key42": "3ntxABywVjTwsPfmU3ATrvRYP7nC2tgiy8h5h6jwyd46ZsUtj71NhMSFFMdPs6sWxq8qEL9YJRFAaiyGj4xr2zpi",
  "key43": "zXWxxwPsPHm4ZQ6ohfsoi7DqKsEpHtZxz9sMpWkxo23WkQfwkHFsnp5xiWKAfP1g2ipTVDmPFDXLMgCuiqtrwjb",
  "key44": "4F5ugR1rZu81Rr4QzWGLCrGgNQMEV9QyNYJdLyuuP4ncPN6eJcpJsQKYkeGtdeEXeZvYq8mS362ztWTRQoZT8SDw",
  "key45": "3vUmyyGVCEtAUoTjGNmSZgDrENEkzfcmV6pKaRbYGtXSYMJpXDcoY7zTLiQyKbrqLnNggDHTaDAG6CVfbxrHfph5",
  "key46": "DPiz7KeuF2vugvNbLwzdmzEJC43qAABppUiyazDP52RjqcbgphkALpdSRQTF6rRQcwnRFQNcVuaRiy3W1cbK4wj",
  "key47": "51dDFg4iiFkydGnLUp97RpjNVkr2oNpAyXdPhSu2NQBk8K4HMrDyHQMp4FAxbGNV2qyomEThN1oUUH9pTm5vrsYS",
  "key48": "4mXMrhAHftds6fFdy2Ai2dYegB8FsAwXYChxpCoqArVsZgQpSjequAii8bWRfvuCHRbjvhTyiSCYMPezW3maxWQk"
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
