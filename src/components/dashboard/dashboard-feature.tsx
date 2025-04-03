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
    "4oRSN4VbM3GGvMedMXxjuK7tuFwkd9yZT4ydckWmTVvtdgSXAL99Hhhst8vdT5aFb9KDuX6vqayv5Ra87ot6MqTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKbYQnLLkwBugiVGKWZBC1cvHkur41RbWwy27DKvhqi5aUpicTXN5YURm36QQxG2GaW4wjGqeTDYw9Cki9e7Xuk",
  "key1": "2Dcd1iS15USdkQFVQP5BaPv2kDeZEPxKZSdFxLGpTZHEjdJnwBPiPraqaae6EfLHbQc3KT4KBwH4LYAs16D8HjRD",
  "key2": "2iMu8oxBsiyf7hCUcRgHKtwbKmDohx6DAWX9Zffnv8CApyYLQf96oiVcmWi6WGfqqSvmcLffKHZyzdU7zkahA3dT",
  "key3": "5zmMVADV3auimxmJa3HJZRuNLCL91DjfLCyQDUaYPDwhRXPrThhwugzqdEmc5oCztAX5XSSiY7UTnmzDPxFUiuEA",
  "key4": "5gSWqCuraamvC8j8EoFEsbBt39e2n7MRiiHu8TZH2Lg4NcywSNXvHXer2PXymEWykjZm9UmV5dEmJVTce4thvKcu",
  "key5": "3rqeLFu3141QrD3bJ3Pn1PrqCWE9WrrEKgPqjDujE4oU4Xx7fLAgycix1AZJSpTTi23exi8eG1T2q7C1i6sjWayu",
  "key6": "2aD4FdQq3pVkXDE9Pa7MSjmX51siYCySp6oegPKMZcMzKKRoitovJMRcW281oxCVZ3VLJEvtSmuVkLzDiHy8Gqie",
  "key7": "4yTPstcMKBzX287SBDBXCQR7xo46P55q5DmrwptH9X3pF4nUrVUhXWUDQ4XyhWnTewVjdBhdYy5swwThLA9gH6Vc",
  "key8": "2pzJqMGrt8ZJgZau4zJ1E9abXi7qkMszBQxt9dHHzyygv5mioLpksMsSpzPrUk2RiZDR6k7MHitrKkaNJvH4GLxF",
  "key9": "63kGGW54avPx5GbhrHbjDnthCTk4VWnLF6QPWoiHyqLWnF1JTPaDyFMipFjHJn1Y58kmfvufP4M9H1YPRSbTuTDW",
  "key10": "5YyjUzdQe2aows3SrnfjZVsuHsDsu4os6fh3BHDhSK7fBEuEo51x9FtnBr85KHNrjRrQNG8ibic4M7JcvZAPUZ8D",
  "key11": "DN2hVU6T3v9fayhkHHT8xqnMupSkG9BirWSk5pv7SFzEenZcP4up6AWSeGZ7MNzYu5yRNbNPeAa2s9C5fqSX7fS",
  "key12": "3uF8HpGNQdkggcMHzC4vP6gJyUPE95RCqpfT2FwBozPxgDUwm9ie2koCo7ecXmDcqrP15ZXZWDmSRLkVN5thsvLC",
  "key13": "33iomyuHqfnE9vgUHSy5L1ap1T8SYvhmvYi1RAe8RGj8DBNERKjp33tHfFFnDJBMHCPkZWZCf8LjFx5kCtCSQ7Qi",
  "key14": "AvFHFze4QJTDMUiEGApP6P7nDBueuF2j4FGVZhhfJcVNzog3xTFSQkePqcXzvpMungCyGU2e3cKX8dUY6a2oJGm",
  "key15": "Uz4mKj14cuEhkTk17pyzNBaDY1nMspQjJ4aiXRTQ8ahBRVEjZRsK7hhkYaiDAQuH56EJh3EJzpJiEoTrYBuE9SK",
  "key16": "1hwnMhPow9udWNFDgnEAsF9Sad2bGQd5gwVeC8TtpfBFMVXNveDBSS76L74q2zEpBWyab7WiT4CNnekt5TvhNCs",
  "key17": "4jqBjzJ23XwUsdRXLUrAQ1K7vsX4bB3GQfMkMhbAwyuNyNR3p9TTrdxNaLm8dEN8JBt1fRQ6wUGgrWov96PhY37o",
  "key18": "5YFqAMtmBzjM9jawdEtajT67cjch13BHkefs9UfTavEm8X2BZmEGDgNcVZCWyE8HqzBAaRJb7t8aj1PWsh2WVMok",
  "key19": "5w32tB3HD3DvMQvy6GdQjioN9Pv3YTFubXn6Yecc4tDVu11ZL8Kq9peoeSqgLe18fwsbHghuMfxftg76qRZbHUDP",
  "key20": "4JH9dH662kGA9mxNCThgszeLo3ehrxusUWh1qqgur9yJrowe7TXEQSvBSx2xEi9Jrg65mvmGdPuJPcCtYq4xarQH",
  "key21": "366Hx7xPt92kGbbXLqp8ExsLp6LPjcshvQPtdhoXbmftHLp6CC46Rw7mHFxCjsUVJMNo2k34ZrMF2UwDEg3v7Cdu",
  "key22": "2jcVjCR6RBE9vqK3bZNrDdhb6SRMNq1aBRKdELAYeznS6fdeLeZ3gfDv22aPcU72JVpBo1DjtjMigdPviiU1GVrV",
  "key23": "43vZoLNfrW2v6EupuxPjsucPv7YBW6uDtiuBo1mhSGZDtFRoML749w8AazqG4VYt4U4qaxeUgC21nGZNLvLsLv3h",
  "key24": "2z2UPnMFLhjPFXm7FYaTUv4TUvjutPkiDD8KJLuKrSM9NbMQ6EVoTnoSFLRHgotuPchoLmkU1n5WFZE9w7ypkJ8Q",
  "key25": "ukTnabH56vcFfZYZJsANtuY9UBwhkvcJsiyFSLB5gsi2KArbcoA2AXJQsGEWLrDxfKbnjssBYVB4x9JDkmDKEnQ",
  "key26": "4yTWxmqTGRM2ixEFQF9JFZ34wy2GAaPVpHC6rUF1kQaoADhcP9jjbxcN7DLSdJBThUtLsmHJFF4oSC3BsFutV6bb",
  "key27": "2Uh4Yk7cdFzqmaoRG5m1MR9wX13hmnqc2DQmRuQ5m96uX9aXdmzz16HHRqvBwhZ9uuhhQAhun817DcPdSyrN2H1V",
  "key28": "uV72ArSFAxSQbURLrwezQMqLBYVGhpHPfQBzSX6NcE9hefh7V6v6YAs8Zx4rndwrNVAxobNc83yTUqfQ69YyqxP",
  "key29": "3QeLYF6MFpAL7SbSCoUru7kVsPMadqmPNiTeJv9YxcDzX1RxQFA4tAKwK5XvMWDfPWQWYFFF2ynG3tuZHnsSVxm1",
  "key30": "4i8YwDc1GHCC6CaxT66CuguocJd8BuR1Zrtrswevw85LXA1wGEX6pdVSuing5o5cxkj21hgZunz6BBDcZdRXmLvP",
  "key31": "5eEN1a9avYBbULWvaXQefNLUb8Z6DbYgwhmviNkKG9U3En8usQJGcCQyhjywtks7s95PMphGmxMgbAXHDNEb781o",
  "key32": "5QBTD7BZZ54U1nCRW2k1XxZSEBMi6sLJcDVHTHYnCJWJHVvMMFcq4UfUFNChu9c7bt6sKog6CozjfiC17QA7VY1J",
  "key33": "541R1WzueUJynVY2G1Z4LggHndv4F55SHbYdjgjdzX8bhZs5Pf4wy68dvwchvguJM6g4X6bCDaU58qZQnfmMRYkQ",
  "key34": "fxXdRHbEPPSafDnr9PBxo7NFemktsuU6MJHuD4aTQv4JR8ptw6ouetWpJrjfX6FVms7sSbQ15TJ71gNqf1GFSTF",
  "key35": "5fX5vbQhrHvce82RMDKyjXZ5eXqJAyYKCqY5occT6paq5z4uMyUvizwKMEemNnpgf1bkB6cHb2XD4JozdB17MCKe",
  "key36": "2VFkySiuvB7sEHwPhFzTymbNWjVk6YuwjiB4sBHcHNX3P5P5U8g9cBLX2UE49Em5zUieDBhSvynwGSy9ZXr9Mveb",
  "key37": "3vtqbKjcUAyxNMg2wh1bj1KniG9zBEMe9GHyBKt5xjMhu5eUpnWhDbzz9nohvecXcaozpKvJWyAN9ip6MVZYXmXn"
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
