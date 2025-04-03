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
    "3Sde9JwRkND1RmPWv5qg2aMMbxErqmf7fDd7u9XjGcwuLCRKcLmDq4yPADjRr3fBdVocARDKW2XkWfM4LwU3otTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSPfs8mgX1FarbHZi9eXDHJ1AkYLSRANniahuVqRLm3CXS3wtPQM2ZMWvhSpQRr1vmpWvvBPNbrPs1EJP7A8Wnu",
  "key1": "zX5LoEAPSnRL3Eje7hdMWMAhgYzqwj33PsPngtTyiTgaPiYahu7VoY2VsfED5emuNh2eA4y7AxfWqePNS8bMeh6",
  "key2": "3Dsk7mBbCVh7syxxFn5YZLVmanFV4DKQHX8x2DxCJyUxtVtL6dLEpqBfZSjD84hWGkApbEs52vQo6YveSwkdHonT",
  "key3": "rKcMq77BuXESDgLnZz2fJQLg8rwEkUVZDyQT1ZNsmLv5A9rZd4VCBZtf459t4ftnBtFNazKJWRbQReh4isFk6AD",
  "key4": "5kwmyVY7gNtDsxhx78mPv4B8FmJkrmPHQwG9uBbVfkqZdUXuJ5TsnNpDkhZHQnZuQZGFCWRJwqeqzUx8x36fhUod",
  "key5": "4zJj5nLSyeitCEgiN3SX3Gg7RgxzXmypizSh8UCncXg6Jy8HJoZhVAMPB9NSEen9hNWeTy27nxukysaDubVwAVUJ",
  "key6": "31pLYqdkxLJrsHm54e5kjKMxR68a7Syhwijco8o8uAArhsi3TRw6YKHgWBJeKWgk7EfdmjGvGqUCoG4uxjLh413A",
  "key7": "3SZ26mRz8w9gsyTdpuYZbd7XmKaBfwGnxyxrFpQppP3d4maDmQyx5bemJXw5bcUj3nJgzGZNPQsE7mwWPiPPcEns",
  "key8": "5H4K7DnuEeig4hTZLDVM8tStgLcv7RQqb6QKSBbP56tcNtSUbJKaovZUWH9LJd5ZLgntABM3AzGEQFKVTSZxxmJD",
  "key9": "4QzpGpwW9XkdsvFWJmiU8pSMoavmDXcKAPoqJJUG2bMjSj6epTijJKmJfCR7Gppcv47pUdm5Eb96A7vTMLMisCBF",
  "key10": "4NEPNxycFwVf9vm6zXyaWJ8ZNau3UMBYADtHitgRLnsiR3Db1zdtBKzNiffUxH273AwZKXikmcfa3rF49mwfNsYf",
  "key11": "5bLG5v8mTRFSEGpwy58CRVJwvmGoX5osD7X4y53DJJkk7rdkdko6bDprUaxTaFqjipesVyiUtA3sYAAZTp315df4",
  "key12": "tv6VJz5MRHMPTpHsk7ZCevbHDB6vJjJvUKgp9drrycJNFrFfiXno4tLmCJh4jpzFjwJwembv8eetVi8JyBiwRE5",
  "key13": "3MwUtaHMbuhgrSmhth2Tp97h9DytkMu1RsvrwxDcoU6jYb3FDU7B2C86fiFf9jYZzYSnGfjVHny4QrWUtQ4xjMiL",
  "key14": "5v9FQB5GRCNuszDxeoC3CbhivzFUqq2SQq8fyj1s1ogN4PrAGVk7TdsyqDkn9ZrC8wzFDPLqPFHkm61okiKoBRsg",
  "key15": "42zVi6WtpA7yUodBC1fm2G2YWS81XnigSuRzPaotn2sVuVLojCSVh8BAb4L8xBKnKwVPAEYv6qRo3aReWeipeBNU",
  "key16": "4SJa3bxdBwqa8sebv8bgBAakf5B3iyhjn7L57WpcUJbGsts4voMMVsFqFdFgeCuhZbY2z9PmZQsMLLg3vqdnd2x2",
  "key17": "5ErjffnLVtMs1gyeQzF9CGwJzGToTzgbZHZwB2TR9xNprFzrS8HLBVXSe2hBw7Cz1pab6Uc6YqHsedA6NdPb1BbJ",
  "key18": "2ftfKDGo3FdjRYxMZPo6PCuhbbrEBD1wjGVTKLmKmbhDkm9LEE5HwfyjGq2ox3yCE9dJTSB9kQ8BtQnmcGLvN5UC",
  "key19": "2Kb9sRKAoUWPCLQ7WNEmsBV9sRcnVmucj86CpBzNJ5pBPaTX8MZAuHFoFF4uznGYHJhUqTD7u3roXWHEPB7kFQj9",
  "key20": "5QSszHv751t6vSuV4iWL7A2rT2wvJJRQbP4iKfEfbcRniEW4seAJVW1VAaXHjnUSX9gpbQvHqJPnFFBu8tjcuLKB",
  "key21": "2xvNx3o49N9VGVKt55VQa2TNHUQ9FLJGkFGCqQDpfQVa5mmXgKCgscCpES92ddDMHFbfysg541BAFxJGuA62ghbK",
  "key22": "2acwfNqew3QxAeNx2MxZYLLyUtr6ds8hWNwJMh3ytdypPvJLrYvDdcQg5NCX6wn5eU5ka7UEzg5bWRkGKqqcBr9A",
  "key23": "4h86S6T59ugH8ku5iMH1uh5qXZfuen9CRaAxKwZWJH1Sc7oa6okzPJNx8xczpsWrxijaM8DsDehVPiLUwLHW21Vm",
  "key24": "vqp6CuBscciSbcB5yNcSqDX5QiEhJ3E5Hvw19mLXLLGX6jkfow9ABKQBZi9MZWbRitSxaNSMAcMoah4Lc8gikM5",
  "key25": "5T9bhGb2JGEHB6LHkeTe55bCMex2pEbsZR4cT5zKhbouVZQQGVoh4GVSoVwvreWakdWvGT4t7zBCBr3aAL3Dn7tP",
  "key26": "5EkMihrA5t2oU3xVmyfB5k1VVEv26L3W52bpPdbHMeg8sQFL6jN72CiaWC9MmncPpEFFX2mnon4b9upsHNYeWKnJ",
  "key27": "4XXEjGv7GLusitZmubSthug19xcn1Dt9rhSNJxXNkJTNRFCg5YGcPXKTsvV6Kur9yBEJJAdNwdB5zVF7ioBkYtQr",
  "key28": "3r25wYY1Arp2gk5bRgjUFuVV2RQ2x6sXKBHRe8TY2SLhayPqKYEvs94wJdwqGURWp6SgMtmUPLp1HPD7oLxK5gqE",
  "key29": "3asGmUx1bauW4cUanapHcbUzdakQzpRkvk5mrRXdf1q6ASmgHw9us6WMz4z9YFEWDyTLCQ3ruZZuMZzKDjcG5FTA",
  "key30": "2jg1J1PkGWtnwPKbJ3Bc9wG5GxL88Cazj8ZdTrvaS3SbATGZZbN5bCKojzuFRdyuRk8XZ3YLyNsT7dvkXFZNyd1s",
  "key31": "264MHYoEPinC1ekYnsb46QNDhcdGTU67fxhXApcS1Tex31QuNYrqXP5L4QSiu8XjyWnWLqHSYPaDHTk8yc3bou8R",
  "key32": "3yhWy9qQHwdCKkgnY2Pu6e1KY73JSSB2Rfm5uEFQBqnzUT1EnFADWx4h55uNZ5EjkzvYfAymxWhwnrps53nC3kqB",
  "key33": "YqeV6Eh9Qhug4y7RncjmVFb8UAKLgXhtA9gYi3TJn28FpppDvnh5G5GHJE6AJw7fdgH2wSHxJg27gELhJ9F9jps",
  "key34": "3o2CPa8dByZu1NxsAnh5iyenPjpLJJVG44Czauprg2VS39L7P43xzuFtNEWU3VencNwrzutRJkGU4EPzR1tmzz5E",
  "key35": "5JuYTwX7SG4wsCxfgpuW13gXSpmPEDoWwgZyzYSGjjQWy9jy9iPJi8ffeFvG4FcCprmnF69F83Be7VSFL6fCqZX5",
  "key36": "56QCf88gbGEXeVuai94kCVogcvGX7gkKHvqyx9ACoJowa3jJDqDYykTJ1KGjCXV1haXtkgxnQFQAjpEYUE1g6X62",
  "key37": "2saEGnos8cAyMruG7gnjpgudzf37YPpsPMeWvpnZt8JbjTVtiE8NVRxqSonxdpK7DDCxoPXsNtQgq2W3iNfvvq9v",
  "key38": "4o35ok6a97CfErRfWRL9w1FtSAMuWSKdLwKBA4E5VnfgWQfKZkVPTAHTy1UbshSkcp812XajDMEDqoa1azVfq8QX",
  "key39": "3orwqMwryLXth9aKYL8rpt5ZCTEjcQW2KwaAzAjTnTWMDfGJp6L7xujWVkN8YCbZ5nu2Tc9xDWNSkcUbx3qr84fM",
  "key40": "UFv6oFU7ksnCpeLFsHe282gwwqBvY2gmmP3ibQohZMdm4BpcPT9X5TkNaLH9LorWPt7CrawsiLpb7F1jN5FgaZT",
  "key41": "4EojnP8prENXwSgzUqMoSigz1ZVYaENwesdpenjFHbU6rquX7Y7VXYBf3SLCEj4Q1Fkpofg2tdt9Pu12hr4xayBS",
  "key42": "3fp2foPSQRFobFJUs7CgYoD2xXwKqMsW2sWMagUGnNjzgNtCGMuCAc4tzc1Nu9FWJA8QoHmQbvVUUB7LLJcjNA4Y",
  "key43": "2Jzb1G1oY2iPEMxfgX5wacwrxPaaBcUhpGohttMjcXX2e62H6SrNU1jUomzUeTWVmDcRiMHEtjEuGTcveVjLg7D9",
  "key44": "326xKVUZ8HjTSn9FYQ8HYQUB6RNPV5EtNh6jVRd8hyCd71EMfTRJvF9eW6urG6WpBEM5ZqMakDkhpQYcWFt6VEEP",
  "key45": "4MF4VPZMdv9VZaWMqs9H5UjV6pWpGBpNmCKvjXNRan6V29V14pgprT6RfT4ZUxBjTs5twp49wmEb4osn56h9arem",
  "key46": "5iaGGtQugyaShqAZh3x8TAFWLz7xn5mWgQKUyHnzA6gByxJjo5J7sKK8hinzKDhQPvpRoUY4XydEapNE8hzdGtUe",
  "key47": "5qbEncVfW2NVknaMQFJAL1XBQtnUwGrMvXwwpHQYuXBmH2YJhtJNGwBZSz6wwEwtVgTrs8CLRn2DAETTon2bWNAP",
  "key48": "rFCxdu8hpkPZUR3cPwC2iWuskHeMZgvtdfVmjJB8qtLX1Q2uEfpbUc8oQSecPkcd3Z7hwBtuRcbJe7fuEy5Fw9a",
  "key49": "56wjycHrxyqLNxkvW6x5bWcrfLWYGHe7D9JQiqT7TA5QHmoi1Xc7TV9dXc7xpxfk3PUxGphZmabyvoWXN9y64j71"
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
