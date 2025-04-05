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
    "4FRC7foHFJMjEga3fAQ7Z95zVvStYLAHCX84XkFZQ4enyaNUsQdewBX2PmUxo4rjbRXwuSgNjq3GAEENsFBSXXJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qux6dXV86om4hfaEp4amvfhHJw73XEngCVBeAwtu1qWDVxzigtfXj8wJMh4BMMPTnFkMyxamZhWidHTvcWS3HZy",
  "key1": "4rZXCDNACN7xGq1cMu24mDcNcMbqKmBjNsdeLGmMKTwNCNJ5te7TxRqELDoMkAM8KNDE89rfFXW1Vi63WRHfHJBV",
  "key2": "5ZdbRHKnTnuryuGGfjB72rWdFQLwmzdCeqRi49PbGzHE4RpxwGPEsesAz7xH8fkMuZroZysXiUy6TVS3u9wJjTWV",
  "key3": "5rEQBNSBAgg4qmTmi5CETPC3Y6D2PjPDPjdtCCvRn7X87G6JM5PGCzKytVjHowZzs964oEgo9TWLjhbna4w8CKz1",
  "key4": "3TUipfNUmS4Mbrxf9GDWtQfxiaFZrSfBtJCB8h7kS5F9eD5xKmioYtaEybq4Lfi2GgjGoWdwWc9HezmnRfzuHhHE",
  "key5": "5194TxfizjE48nxicPvTGs8SwEwajZAXoQog5m7iEqvuWYvJf8PqXRr9KS9BprbAs6rhsJn6zsEw4iY1WLpaP9xc",
  "key6": "5qPXt7RrwbbqHQQ5WtyqD3rEWYWCyaCorq71kJ3tAzXsCvHMW2mVb4K6Yd3RNp55QnSf2tB4ojVnw1d3Kk7biigL",
  "key7": "kPmQhm7ujLfr3adUd4HgZnWxTFr2aS5VJwHb7JvwFV69LQBN9XpyKm2Lure5iPSrG2kBYRLcponfNRy4NSrcNqM",
  "key8": "mfuKq15zWVMJMFZsAx1KkD2nYv5sJRLT27JNKHzjPZZAmiVm4sTCyqp9F1jXoWDTTYZSmyU3h3i4h4QxyJmxuvF",
  "key9": "3uK4ekunV68HUcDDytrvWQNPzKHiGcNzrwuCGzYbXS8UnPReg7xK2QRoEpLzDfvsEreW4Emnpv6tbF3BQ3RZR3em",
  "key10": "CSy5Q1scupBgpsSALHU9ZgLbiniSeAYH2vbjpDHu3hNnfGZgeijydAV2bx7DG3FnL3ChDC119x4xxSLyP4Ba9nF",
  "key11": "39XsdHMRiejwTWBfYorqiJdXFpSXbk6jTY9Zt87Mwjgj3cvTCmkLWit2t2hVV5nPN6io168tDCpbYWM1S9UW6sSg",
  "key12": "5rMn7pk4rHww3MC7P8hVM8XxbhtZaAsCJGKCv2bzN5wFiNx911jh5SuTPkt7ckSJpqVCCryg3wVy1Ly3hXHFLLwF",
  "key13": "2fGdeWoxBdbpZ7xBhZVHGQZsSr5yhK46RTvaFgLyxJhkGR1wg7WjKJaiTc3tJWg8AfXrR7AEQFEofafFPAtSMzQo",
  "key14": "oSQ833qyWLgzKNGtpV3V3CaXVjFJcmU3pJuXUMy7GwX8VCxf2q4kh51khDBA8vks2324q4w6yqsd5JGyrAVgD55",
  "key15": "VprFtKV4oWo4exBf39xB1HrdRVeYpuBH1MRZZb8YmKHmconBGAkF92Yf93WENeUswSMLvPizwDyJvM9MmoLW5i6",
  "key16": "3pWSuroRNPwsxoNxoqvbiPx9dFqGZxntrSZmrp68X3eazNqdUs6DMFVCqXFxRrH8MdK94a8J2EP1cDBDjr9cDHBH",
  "key17": "2psJHjuq853V1FyRoWSMK5atw54mon2GgQhwwKsUBH3t6mGM69oGgpuZ1gzQYdR8hQnb1HYMHAVFdymYiqdLWNxs",
  "key18": "5a5viyNKaaGgha2i5Rzzv3xpTaxVY8Jj64MWhHkb77Ew8kxEhFn2MUcpzAa98Zg9XqbchDeSdbcRfimGbz79sevj",
  "key19": "3qA88jDBTwNWKcfv3xyetuSWwVASegPPnAVK74m9NWwHCdHkJPXhdE1KKi8xsbcTorvpQRFDmp4qXzhjR4mzD5u9",
  "key20": "8MERy2Z9ZyaViV9KcxHazYKtwLVY9yeYp4mY7gVYyCPYCLNTR4tSxVWvBns91CVV41CAHWhDCrVSKYiGFASkLV6",
  "key21": "FLgqEgipNshDUQALvHB3Vy7zGkhu12Tnx1HwcmAPQWVNw1uroRhPU2gNQAA3KFVnYyfQE337TT1XqBAfzemBbxC",
  "key22": "2NBwpmUd9URo3W2X3b7hSDhBCvLon5osmDEpAS1YX21gVwMQNyr4Ny4MPzuDT8WiVDn2puBjmkDhieBcjbcFdYnA",
  "key23": "5KqyVCphPcrie8xd2XFsFq3jEVcPrDhnPpz3SuEsuRKY5KMimqGeGqC3EY1MurR6eyEXY6MCaJDe7CtbsvLHBPCg",
  "key24": "39XHUZ6A5E3UQLt5t2dwPoLq11MRsAK1J4n5u8zq2g87xDGaQrF3NToyxSWxqsctaV1WwCkcY7AFB5rv8MAhxybn",
  "key25": "2jFTcf13BsPvVkzJRABhtBym97SXwvZsRbKaXMEbhmQTL4MWdYpY8CJdDaUrpUtcfPvKEWaihpSjf8A6tSe8acXr",
  "key26": "5dh5zVabCCApq9KZ6msFgBKd64XTrJE2pza5QX1j6yhanik6doVTEv4jGkaFbRnHBgB4ZPTCSyAdNeb9wBKbSPnX",
  "key27": "4N8u2Dqb7RiRkpU32sPdap1KYLCeK4FznAzw3dpmZfG5cJSNyTerKnnRH3WW3kYFRtxR7zBGQS4TvhCUbPh3jbYC",
  "key28": "nxZAwxDdxnDE2pCuKmrFYwvqL1QdC7AABeVbSkcE2KGqm5Mj1UqbtZDraE7GF93qB4jJUNcHPP5D6ugJ1EbkqEY",
  "key29": "4ow64zNZ6J1BEVeS6u7aB3eBVQ9Q8mfLFUy1XoKxkTnJ8kWovz9nXbZVacpqB8qhB4QqXjjgVDZyqPhjE6FdT5kk",
  "key30": "5vH4XoewWrynFfvzWYupn6LvwKrTqnp8v7WxqyZrM7zur2YA9CW6tE4pUwMCQrK6vjFQou487fM4yhwJ2cMbB72j",
  "key31": "67E7rfMXncyzcYS51qtGbCuCE1UeVnsFv9SSxPoZmeHtQyijA8dBdDLZYkfVwBaaWZpwHW7U7y31mbVhB91Wsfmr",
  "key32": "5Hyi6eN8Y7HJ9Pkvr8x4hzGwtSRKdtbTkdrx1BufrM24iBih3B3MiBXhXBQFMe7BGNiqDW1jC557Yie7FtkHQMgT",
  "key33": "eRVPLihG3UsVmWfauZTrZboGkeNWEHCNuFf9F6ang3h9H6Genk7wJdwJPQwp44oZhzCj3sjpkJNsgkRiy83ArdC",
  "key34": "2h8i19ZmW2M9v8kPXyQz4336MBBWFuzTqzkvihJaoZuLB9WwsYNKm3L617o8xaDvBo9jb6GpPMcfiGtbn73Exn7x",
  "key35": "2433zmvJbpbowgYNwSvdUxZPA4A2buQMAothFNqXGvLihMr24Vwy5CsCW84sqsGH4HvxqarvWxmgVSmf3iL2vNvJ",
  "key36": "3WTEAHvMBrJiHw5LfN1JxajvGZnBy4ywBC1efVnFoFVHcrnNMRtRBu8prz5y87vRPseCX4pS8bu25k8HECkuWz5H",
  "key37": "3UrQMgX7PX3mv7gC25RMhgWFwK7SThLB4EVyN6VyDwiehr2VCWS6DemyBAPBfhEddDaPYDyoiMqbCjMu26ZzbHSF",
  "key38": "eFYKignLnfiCNGSXSuRbxGFCEJBkGDepDKvabALr6keQ6rAUiNcm37SXuzCkDJUhScGuJp9zB4LEHF49aKnvtd5",
  "key39": "2aW3pdSVKKheT9ECYM3QbGsUxtgh2XVaqht9qbRUz6cjLQkwdLuk4NpsFYSdjbo2x2Yb2MVsySpaT4u24k9W15fN",
  "key40": "2po2CvAqvaUBVNtCMTr6GT6mpjmyJ7A59oBjyx6BjnYtqdgJA7PziWoGt7qqwPcE7qBLdAkkXhCThwMhPJrmpoxK",
  "key41": "4EERuJPMWYujJAKgPQEBEtSHkYT7B5E2Uy4ePdv1PKR9fFb77ZHicVYhxtXQCbEDN3b4PGEwMKrxoEP7dk6cgQJ5"
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
