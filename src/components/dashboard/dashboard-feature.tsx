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
    "gMgCByKBW55dsusp536LiiSbxeJhVwr9MfmxR8izj5WCAxtRecuoRrZMjmpFQ1HYLgmss8LrCHggcPjfewo3XPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bs1ZqkEgaScAJHLvy97QRYoXWHGGsG4ETgK2BjzBVuR4dDTCYVgEx92K2NqVW5s3YZiaGzwJVPEWBcyM7uYQemn",
  "key1": "4UK7vLzZjP3jdG3kWVYXFEPa3WWirbzDSdnZoJ2MYzsMP5kfZ9z7jW2wtWpfFgAdXgHeHj8x5H7TQbGKkcurvR4Y",
  "key2": "5rmb996dpUcc9CBD9F9zg95PMWX51Y5n46ZeE2X53ny3uAnuKq8MtavSVEqHjThKDhC6KABjjouCFSwDDZ3z9k6j",
  "key3": "xjSLHFcQM3HxcNDLTU2vgGCbd6YyraDNw3pgKHJTyBuRRPWnrmLAz7nirRzrMUnLzR6SL5cqKX2bu8gYwv6pw2h",
  "key4": "3tp1UEw26NaTdzCdZd9m7XMageV8QhorshmWqhURoLG2JTgFPQ4qg1HsZ3nWimZTyy2m5CFfVY2LSwxmGR4j6k2P",
  "key5": "4u8GvDZXR7432NohJsbfoBZgGvpX1nvL8bYDBgqYq1gN568TzL8yuqaRomH819xwzgyC9hYpgt9bvj228tichdRk",
  "key6": "2jAmueAKTQ5pqUhuvaapd9ofQ3YgqiYVkqkueqXCxf6NEm7PUTu3Gc6YW33xheTSSs1vdnJdaW9qC1wXZ5LFXCMH",
  "key7": "LkbMf9aErpWB8KynAHZ2ZHDwyJ9HAovSoo5ALkyjoUS5UbqpEeyxJCP4koqqNovxwySny98aZZBH8UXtgfS5SLG",
  "key8": "472odxd8GGS11ya2UHs4M1GYezgp5aoWF4JJVvLL6Ur52AAuynnhNyXzSkZafrwpJPW7PKNQVPjLZHfP23U2VeHk",
  "key9": "2uxBsnDmP5PsM2MEWY6eP56SSQWMTPTVpTe2XrxfWpTWZtEYiSe99HZM28aEAH4WYhA4uQVaHAD4V1cYcjzCTkMj",
  "key10": "5zhc9uYxojrMXERNSyUVnViHJ626bL1qwV3FMXJSWQT6bScLwJwfeAmCVywHAzZE4hKaiov6nnQmqGhJxSigVBML",
  "key11": "5a9T446u8i1sdPt2uo6dJGqxBqggjA9FdiUkg6pmTZTtiqh6ur1TaSznSurApFCdmohhSbACJwhTZWLveyH4MeuW",
  "key12": "3snL7FzNLK3DndDy5XNRRhHaFXUKBgCYgDQMd8zPPo1RBEqsR4jXtqD2yGYpW1PcLojnNiLiJf41PzK7xYRGj43H",
  "key13": "4L14A1Vsr7eGRxxYvJspcNyronjSEz5jCrMFszovusxnV5m9BSzZxseVhNKAyG8CtPCxnuSkX7i8CeY7cwDmnFxc",
  "key14": "gKcEEifben9QWgghzhv2jcxhDETT5gXaj7ozutJiLZbuMX8XwkEY2tdTCBSik27G6dnxjV6Dm1cbBKWrVY9qiY5",
  "key15": "5qbgSgGWJh1Y2LCisfEGF43vaeCpQVJk6j5fp5iQFwoYEL6CsSJ6rJmevZK8x9YfAc2jfdZdcBdBV3DY99fNj5SS",
  "key16": "49ZFah1Syh8RKaJ2LSLXLbLX1HYoJhcQRXr9MMER4wNsoUh4SMBK7RPcLm8QftWb3bGaR6ypEtv14C63UTuzNTrP",
  "key17": "2JKyxSoTbV5Jqzq8mH4UCkSSgDyVYzHuAxZr9nZehab4K6LjF1H7N2CFpzSrxriRYfSQJuSfTt3yJQjCMsbmTbcU",
  "key18": "5GabrcGEuNt15euCK1gVhpnpPyLFKgfdtRaT8rvrrM8gyZqZKAxa3uwBA6427mAwywV162JJcvh157Lf9ZtUPHSQ",
  "key19": "3K2JJnrnpQFA8ZPWSmyGWP8BXRYeuPEjmxETGYZnFqhtHe3pmCVpSnJsbugR12T4o9Uo7W5A8Z6nMoA34cbNdtuh",
  "key20": "26VuuXY1xRUpYBVPiZzE3GTHBF35jRWTa4bpwZ3gQwiEQwyoFK5NVvMDP6SYsSUMpXBvg9TzFdXQ9de3BQzMSxWD",
  "key21": "4qD59sMWvx93jTZywYf4CVHXhvQDWbaXkaGqK4GqVH5XanFVv6SnpywLi6ZsRuVHrZ5RspjXtr4tkEf4UuFBWoRD",
  "key22": "2whfkX3tFRmGxKEtQVSC2K81gmZ2gk1MqmgNAJM3g1oSR4uWpjrLAToQQktZq1KCD6PxACQmHfoa4W2aCK7BozYr",
  "key23": "2RWRoMPcZ1iA6q4v858b2t5MPY8o8qgboGtLCE9To3Pio8N925HCxtiNwnT5Av97A342ZG9i8okxktxGZNiVv5Fm",
  "key24": "3puXCTyZJ8wv2pJeJsLSyJCADfTgy2V66zmquLJ8nsquGW2my8Am1RuiAq7gEuPL3jPmhJayu6JiU25aycFDiPSX",
  "key25": "7mmB5k9pF21YDsDnoYCdn1YduvUiaUzv9ZFiMWafvSXKwt49wYBK3rwXDwB1vm3uCSgtBDMjgErWdHhTCnmcdjx",
  "key26": "2v4YuziKh7VubepYuB9or7tCk7TZ4L2YRxRNrc64ucSB52Rxyhe6rHjCo89RXxDkSzHAY6yELmLSr3QKNbwZFvU3",
  "key27": "3sVR7sxvc2BKQeqhFju3vdGoUW6KtEvE2mQNhPV9AdbvjiEUC8Hz2a9FQi4913JUZJb7eNKsszsgfWJbrYcasoaL",
  "key28": "5aU7naqstrJ2bB3Rp34tbDcRRD2AtSoz3N2FzLwCqyb1UHbcCjKWPcFiKsWmSAEPt4B1E7L1MzUcf1LW39w9ZhA4",
  "key29": "65hJSzXR3BdrUH5ehg3qncyQwN8a7yPuDL9mb7YbVpVpvkXwzbNuVYtpnta8HSiuPfxhdggTwygB8vBuSxLPXYKr",
  "key30": "4QcBnfm7vsu3GrTTNMi6hsKjijDvGqdpBM6whjYDvystdZydHjvWZkggJkxBKQegfLae5PodJXZgJTLC5AQ6EEjD",
  "key31": "5QnqDds7Zqg7m1qK9owJsemLcBBs1dLkdiyhFXP96dG3w1Hufwt11sAkY5exFkXWvKh9rdbbxz3JrY6ToriUqR99",
  "key32": "5bXeWp6yNhcfqfh4qkMtESzW7BFUFhckgVTAk5hKhJotBrFYRbBT3tB7KRssLBW4Ze5f4UoijgRnz25T2dS23Fnu",
  "key33": "5VJkeEXu6DGEbTwaNZaLqv87PbZdp57vCgvJfGF2rEpyxq5G8uTrDZjdJQ3GMgeQipGbhUFbXe92i8PySQ7dt7z2",
  "key34": "YJK6WosS9beqmxPtga8yr94eGTBPwBBPwqctT8wrubnddgToF9TZj2JFGB85wNJgf6jHrrZxYN7aFsBVeqmW58C",
  "key35": "4ofmFe8fz56mP16JW1roiCEnbvjPZngaBsmJBKaKmr6nundnrBTqXHNEAjRqqt8szTsDBb6MpHaDPKw7d1DwypRR",
  "key36": "3m9MaoCnK9uM9BEZ6vBGNpzWuZVYQ84uoV8c9nWMQZpy4g1SK5U5XYC27RF7Dxa2EHYJroChF7zvj98W66hgTepM",
  "key37": "c8ckg3u4A3wmQBmhmNqW4kDrAyAQiHR2iWqxvijYUh3iCydgCPLWtdc6AxoDMTPpnTiYQJUeGPS1cKMzDGNwv81"
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
