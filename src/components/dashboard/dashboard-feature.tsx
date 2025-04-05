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
    "2zUnzxuMjsnQYJYEKNkUNvxYhP3xbPK7RtXtTQ7euTxWAtAE3NsWYg8EpSwddJ4sMhcVgkqQkFY6yJUym5g3t6Cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEBeZ7HrnFxZfMAT8QfhggvvacMUF86qiCAsGauDYhBEE15XgdKPczAww5vFQdRV67JrDoQjfJ37hfuJG15Wtw7",
  "key1": "5RxPdkKg4Wgy4qtPut3i3aDEHevQWXQBzhqQDpiBr2nasKbxSRok2xSrA6aocC6RFyEMDjxWexdbxcWTbyLHeHEo",
  "key2": "53wDik1B2ivy46TkZosLQHnRKy1DYqxG8Rc6gPbYMuJS8pzi6cdguDouUcYvm24jirbj3a6tntVVzEuswH5vNBqs",
  "key3": "22SA5izuewyWkE5n2dQsozd7n5Z47U7TxzxuVejtnpwN4PkFwDJPFANPG5yBsvw91ZSsi1Pn7ywnNs7CQZ4KGMcU",
  "key4": "CH3F4jD2vS7njZgY3oxr3yQh1kgyMt6PRNw9XrxfmuvqNW3EHB6ZTxBoK9LzV6y25wLnj1p7dKBLVbcsjH8CzSv",
  "key5": "5Pi1cTbkfeFAxsuRXg4zLEXUjWKSYzgJkghtivwaJLNmmmDnrrHHLrDH1hQhNdBqGwNHBeqMHJuaKdc6QB4RSJcJ",
  "key6": "2tk8GsHvhkLV354ykHQDN8qHDgFcoskTBVrFmHAW2qzhDHK1uLq61zzuNaxR2BTSXvg4AgDWUTDHxUu1eHnyATGr",
  "key7": "31RyASpkHwbSTapgnoDMBNXxUT189tj3EA3qpE19MKiWihDusFNjdwKog6xeZnnxowpJTKN1GnkuP3MNed8wnJDK",
  "key8": "5Ag88NqyuQouo95T9t4Snc33vwCxGXZY5gXzdxiQG9STdKtgdMcWtiXW652cVuZK2YWKvivBfTF136GW9aUU7VxN",
  "key9": "2HVqVvki6jx7xRwum5vEsj3oUjNfQhZLdWpD9CD1g57LRbV6V2uEsx1PNkaiDtSZ6ZGM97M1f2BnQ5A8N313QusD",
  "key10": "3xtGhmS51xMiua8h3agQfEarYhSEgEAM5mko2C9udThy1dKwoCPpqCGEZy2kxieBJV9hH4KmcUsLEtxvbjGhYfnu",
  "key11": "pUBairo9ket5JZym7XB1QwiAxGwqRa5NKm4xqkk11fAVP8zueUE5kVew6nfzRLeCQyVeTbSDSjffC1SgL96buSe",
  "key12": "tvLwG9qd4tT1qoLXwRZyCaiUZQ6NAXXN91oyvV7zzk7ZBWAG9ds76C9QE1ndYVTTTcXgaL6RnmLtCfmTgA28EyZ",
  "key13": "2b8rfa3avBjTFRLnXuCnnnbWrD7EqBqRxsc3cuxufw5k3ewLkHbbWdjwTMEGZYdXmBcnULQ6N63MXeJpUzvsRpmu",
  "key14": "3zVBZNdJez76hyAj7AqfFVJtDvw1Qfmn8dLmmHbLFtprLeEwVLoahDtuSv9e4qTo1NqC461ERok4AUSZurmQxT97",
  "key15": "5cuCUo7FMiJpQM1rz5Hg737FUYcKTovye7yyxVyg7D13dM5EzeR7NxSHg4fMkVyfLQQnDQRtDRo9oGh9zUzjaCwi",
  "key16": "2AZCSypnKoBbeJeEV9f1rdsw39GSHDnFm3TusAVvwwSJVXjqvEZLikscZWQWBmQZH88byHuF2FYQxUfdqb8AV2sA",
  "key17": "3Jus9Q17nCz8WbwEf68otKP1B49SA3ua7qyMWsqLbh6aMu2hFPZb3KbcvXJ9iyujVEKtjNnsTEkcuC4PWFwcXpfv",
  "key18": "ZK84teKRYNCfewbR94sQ2F5zm9G6zmWWu75Fqxk5S2rY5VWteJvHc6skpquSS9tcEtpGM9KArxuWWCRDruvTjbi",
  "key19": "4MpynU5Z89qodhvFX7gDkUzdksp4rJVZSUaak6EnrdMXd8623BoNsxN7ujB82JTXPWzu1FgUnzMPtZNhxuU6AZre",
  "key20": "5eSp9EegU5j4atyNjPC25VccynrAJbdWdX8hfXLEjsKNDaZic5r2weX7Hc4Hpwztt7dzCTg8h2J9r2ZZM2CSSq1X",
  "key21": "4gJWndb2pxCo1eZgAvq6EviF2NZUu4fmMupqmqgsaKvyMqy5oKKjiD5qsAPBQb2uZzMYrg1JwoLWpRLZvPkUgXQU",
  "key22": "5gowep6tAKd8eQZgeSwQEJhWcSann5cxpAkUYe8AW1DrBv9CE6cRJf6zVbQR3sS4img8KbuBjmQVBiKd7rLkepAP",
  "key23": "17tbLrFJH7vaKaL51W84YJutXRH3MsMUySxMXpcVRXgTsCpNEHGBPKphgTTQWD6xNNH5jf1BkX9MFc7TUK76Bpv",
  "key24": "EMUTKCM4rRYbW2u38FHg8dfeBJD8Z5j1E2J9HP7TnBDZjxkBmGaGcNzLo4riiPGuFieRKJMLyoMD5unJKcDwhRy",
  "key25": "2spKQ5dgmHxenRTdHv4Y7sSaTN1DgbhTHwxL1R59b5N8pB28aU3hch7qP5C6aX6oSpJMZ9DjPf419F5NsC1GrjUz",
  "key26": "4RxdYzLaKyZrxSE6eTELE66ztA6qFLu3zP6CKrDvNQPnShhzxeQQkmXHo3ZwChFefWgv1aEr4jKVWeDARpjExpUk",
  "key27": "5YEHu31XZC3tJRqXnvwY6EkRhr5HyRoM7ApnhUMDCBygPcDUx4Zqe2xPdMBdK4SMabtHDUoXAJbkir2fhbXV7WSb",
  "key28": "2NgQsDrSYH4asdzDsCovVB5NRsMuvNr7zKbp61aF8EtqA82KTiUbodWULs9aMoJwq3ZzkucmAWMRaJ2HEain6FQ",
  "key29": "2Gao95LQy7QEMfXUE4xRVFtVDQBsYp4zd5bi3aW6miBXWgVuqGzPmLfDAwTyMvK1T4dt9VHSrqQAwCFrKbhaSj7x",
  "key30": "5pefJJ5FEL9zuB5gnd82SyepsY1ykvya3bzfMcEyu9cPYM8k9hWki91bSyC65ck6do7xJ793pv6BoVn4kxz2wtwG",
  "key31": "xA1V1Nt6uRRb9CmSeZ5fyhkedPfSDC1ekbSjUSPXnDkm7j9sta57pHXceYV3VNCjeitwTuFvWSEh3q1bmnFWAv7",
  "key32": "5SgU7MXNf2NvQJrgkYMsf4HDJ8httWdRF7ApD9pQ112w8mjyFfFGYeexhhFGWGoXei1Rhu9vcL9pCoix1voLJKt4",
  "key33": "3PV2283GjscTMPRagKhqhDPZ73vsiashaDNY3kqjjCBUqNjDn9pr4TJ1uoJCkWwQ6zPE88D87YjMrfJpuMUzSvYo",
  "key34": "zzyRbZXwHaxEuauS8QarVVisY4FsQXTLb35PSHoSyNGQf8SRgNULdHjGxhr6gbz7npMDczPUwaq7U3dgVtgFRpz",
  "key35": "5c2zoar5Qngz7oBuanfUrfdGtMJzctjUWKYVzFaVmBB6TXTpj8SK1MAEH6w4EaZS8kxZAa76w4VHSjreiqNiqs9U",
  "key36": "47mwYHfmaAU9PSPncDdaBM4aMRLbgQRw2sbK7mmFQbZY4zphL1wsLg6k2ea1mtuoemSUeiYzRkFBUgK39BcEgz4B",
  "key37": "5ea8qjJ42miUA5nWuae2Ur119FK1kjJQzZacdCJv8SxSEaXjghQJAo9e3W3GumNCHxweTHUrUtntQMaDzH3PoNFb",
  "key38": "PU7oerWTqwjuHNv5ApHp114yFw1nHPckYMnTH11uoNt4sn7AZ6A9kffG8V8nx9ntVhNjCvZk8DZGiSXqpcivcwB",
  "key39": "3EXjSgP85627NReDibAZMu1eN5V4rB5SAfxdy3wB1X4UwFvKGWjzTgCADZg5XTed8MEnSw7XtM8g8gUyFPQ46a6g",
  "key40": "3kppJfAS8YQHnj171QMGjPvM5i41zNnY8Ycmr6qLZo1WLp4RSCHvuDn3duUeV8JRfwBkH2eQ8oYvYoCgrDAF3K2t",
  "key41": "44fQvm92F4Jivd2ovUSwkFNHDwqtYP1UBHmSds2b6VRzuSJqCsjEZ3DH8qhPi79nZM9jMWYzq52kFV3F71bnozjD",
  "key42": "R3HvQPM5AR2WCvsLykYT1tiLKXcSM7TYKZ6RCtBAXyCGs48SrPXoQP9QoEx8stVgakNywbrY7rVRjRAQZ1KAihe",
  "key43": "23NMiVAvtUdMcHA4a5yvDttUB5nRrQcC1FbdykwfXkRNtE5LMjq8C4dSr5mTyhURuEXsZbq31HwfhtxJ3KUzN3Mp",
  "key44": "f8vfLrWUftmxK9XDj4i157mAm6zSUQoMwRh11MdRJUATMtnuubwfuHh1mk88bFGDG1RCTcNB3kaFit5WudciaNP",
  "key45": "3r6VaXnz7EKpzC5U5EkRsvCgQP5WMwFvvJo2BbxXLgUxXzm6xUkbgZRZ18yZNPt2BGDtH5jwHA4Xyu6g1wrb41Ef",
  "key46": "LkFK9HFH4L8yVhgo3NqfbFQDrCftiBVBjscGuheu9tvTMqMkiYiZBEBgUHePYu7SEf4Dj14E6EajpM58fSrPC9n",
  "key47": "4YT8ny3iK1Gc2DdQGQhmpfh6nH1BixAPVLWP4k241pLS2Due1kE3HTGXZMv3Az8BAkr5PbZjwm77DJC4Bq46d9yz",
  "key48": "28LLJ92vSmEpdNt4VgmKVcMXGWhp4q6CXHpeU9iP8onPdnvULBCEcuoEd225Xya53g83m7tt8pJ3sHiX7sLH2AR6",
  "key49": "PhJFhdjRyLy89aBcCxWym3zaATWph1CMjfMtJJ5QoppC4fsRFwHP1v6dDQG8PPszaBbu3NKoYjA9w49CSQSs2CN"
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
