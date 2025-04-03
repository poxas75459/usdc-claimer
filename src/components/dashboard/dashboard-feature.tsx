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
    "3eLeAf1swTe26nb4q9PQkpvV5dy4McpZPsQkKawwc4aU46YU9mhEgSoimHSWqmDZmXJe3FuDg33Y77m6UJpoTfKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TLEuTgnaEVwrYeVSXH8PrqkaJXWpinsvMF1NK5b16j9KSfQjob1kQYdMTySSWhsbS4gxZjGE68cjFxcxMUxZtm",
  "key1": "2hnrZFAxUS2gc5ti4V56xx3RhmRp3kBt3tSLx5zEFNRoUUCdtjgGwmoeRd8EH6M5wzGhja7rZSDGp95K1eF699WP",
  "key2": "2MBQdvGFp1EYDHrcpXYwcDPSykivbwQujcKBr7iFTe1X9YGkhQVbxssE3aPj9XwGqJnu5diYs17tBQ6xykf1sgJz",
  "key3": "Qyzis7tEPFr81BmotHgpA1YerGCuxpbEyHwp3pnVHLQpb6f4Ph14ygj8xqP12vVMZkSXhHTCtfs4Urf8d5QUdSR",
  "key4": "3xFDK4L3J65rsNAvzyg9zKwGhEP9fbw8UXx51Yt7Ao43jndywexuPnAxC1dz4uPXhEnkEicZdkhDTkvpSRadWkQb",
  "key5": "3AeyFxH2pysjJKRatey96gR8CeKARCKAS23d7vSYcqLM2idNogM7n1irF8yYNWwUycZHs5iinTZfZWfBwK9cJNUd",
  "key6": "3cKyBeMvcQMicYgy5cosNDGtdnJfGtBaT43p9AZ6iZVuduGiKsBgXcNTVJwkvExftChZrGXqadmNZKWgDafWEXuH",
  "key7": "4o8DnumG6QHt15RKTdcegHm9kADKyzph92RgWz1T46jgz1n9jQeWtgLz5HqibYpFGkGSZ7p9iM3Ceyph4LFUoJ4B",
  "key8": "4r23T7tzAxoAo8Tv1toBEWQvm8eZnK6yRWtzigtoLBMLgNBhfMXctcr4kqosk21jrnZb5AXtzCH9AcniuZBDm7Qw",
  "key9": "639mKbUgRqtjvNsHvL9xJkiXZTpiBHx5u3SV9kotwawvcWFBqY8SGRMkBvoHmrS5a6HSG3U7AdUK6tuh8amTJ3Un",
  "key10": "4Appb4Vj7cRpmnyT95wYDBu2M4roa8sSiWVr3M3AkcgoxwRJ44TfFiT5dfxd3JiQQW9kaxcTtSnX9Vh8Yxmyj9F5",
  "key11": "2h9LCT9FEAn5ax6zC3Q8kANuz8kD1dtXyfeCt33WGiyW3jQhBd5nqp7VyXEgQTPEdePWRuixMZU6p1PrPT19VmMD",
  "key12": "35RtwDupspUasfUvZRE9aKNLnSe3SogWH9ZPbpquNmrSncJPQPPqxf1rvk5wGPHXQvELQ4JYyEw5bnrh1FktDQBo",
  "key13": "QWqFavRdDgo3EuTr88LsoZCrCGPkAD89Vi5baFu26Az3xXHuyzKmoMgg3Q8jFF9FGNMbwDhzPJicWRjTcNkebhA",
  "key14": "5h6xgdWgr2EZAo4FzFVjjnMVmU9jCYFRrSjuerqYX4tWccAkWTmM2uGwy3Mv5A8VaS21eyfqhtwSBgo6JHjjUJTo",
  "key15": "2fkpmSAyRvehgPH5qyaHEtGyr7zsAcHbJmY3DjCXgoh96ywKGuGvPcxPdCE72Rk1T9bD5DvstG4YyUCr1ys7XyKk",
  "key16": "fCKQuGk7CMS8m1NXr1Q6FNTrKyByuXWN6UzP4rt1NXJpxkiAbmWJryHvVAjKaffkpxTLH72CJzFA63fchmEh9vb",
  "key17": "55ZtPScEs3zWDnCT2R1sQCEQboEyccMxmtgMoWEbMsswAFVSZqVTh4dRc5YZcEXchiis6A6jddGtJoQiuzU8rxJq",
  "key18": "ZmoppuzXrKK1LS9KxV4f3uY54kBFXUo4un1dLBHJ8AmnLGSfH11J2baZfxi5BtcEfgQivKUTz89HitXbbd9HPV1",
  "key19": "4Vni5VgLymBxoMDmzxD1NsuALFmxQJuZWTmeCHU1K86xbNPEKHiJkmmgtb3sQ4D9kfFSqhP33jGhQBoiupzLGjiU",
  "key20": "zT2FUnWAhuoDUhEHkVjJbC84rHSsyKjRgviy659W3tVmasyZXgB3SWvE57r4tVWKMZYwgrUAprUr4G6uKQFXEXE",
  "key21": "26KJVUpfGgp17w9MgDkX9F8fPf8mdHqKhB1i4QVHn56sAa4CfccjaR4TRche8StMUULmpbAXKn8nHynqtHDQ9fsq",
  "key22": "257Nj2wq8mPiCnHEmLS9xnMYm4VirY2ViL28uyNg5nRzv72BFgD9CAfJ5cAwZ6Z2N85Fu89SAVqa5whnpBDvLjbP",
  "key23": "2DnfJM2fm9tJTCNvobvZ44yAsBtG1QRMAxY5WjB9ueXHxGUNAGA5h1rViBgWGFVQyCj6SJhPLm5jFRwm3R9boDFr",
  "key24": "22MbiXhCBRVtTATkeprfCgWfSXd4Uh6Ee5u6xgVRtWm8kU7feeuHQsC664BVaea9mH4uV48LQEwmrzHortMb65SG",
  "key25": "3ZdhrEbzzL6qyrVLZF1ffWmDKfjPNWiahEFbZPuiz5zWvHo42C6UGDdUgro4F4fo1YXzoRPrLEkDWjpVg7xkMiAN",
  "key26": "2RwrbaHUEf2SpUX47xrhANPrLp1Q1wsTGwt6mjoP9z2eL9xVqrmD8xM68fqBeMAyEf44YPZNKSBCEYV47JWbHQ7c",
  "key27": "4PsX47uHSCbK9UJvuuagwQ3s78r9L9o4dS1uXZvK7MUVGaamLdRDLABy21Rz9A934QQL6cdE4Kz8yf7nAysDC7ot",
  "key28": "E274WjXPiqsjFU968TApMDhhmwqnrTzEsSoZYtgSUaCeP7JcruE4DZwQYVyEDK8BM4sJXU3TADDkSwfReD4DvC6",
  "key29": "3XBCym33GS5hTnDkQjtsYB6jYC9r1jUyUWEuPQdXC4o47Ue9dBC15Rc8BAATt1SRW24e3c9LVb2VWQwYG8Lj8Zt7",
  "key30": "59CUiNmhR38vkxMmNaUrjJmfziyHinWm4kGSnUbKCmqFxV3UU165yLLqvdWoex9NessL6EavE8dbP4dw3Wb4GaQo",
  "key31": "23tjyVnNfm5ncTT8jcMCCCxuUozLXNVbsfAwLtSyisKcQ4VEQGCSpwAjLkQuNE89yF8jHMsnvBvc1gc8TBd1BEfL",
  "key32": "p52odggDfvM4HWgCiDEYgDstbTu34fFKXaPn7bhV2mzBFQY7mZaJXL57ibccAK8UvUpD62ycDzATsajjGBvPLdP",
  "key33": "2ZWFc9g4XGmoV1KJ5sTTb6uDC1F4kk1iqRJuHt2J7rRMSbXvyZnceQaCa4fRkEZwTDSuiQJVwxLMgBXWiG6bazDu",
  "key34": "37RJFZeM2qftkaomRf8EaGZGYKwZrQg1ctKHC1brqKaNV1yJBHmNcTrHEs2vk9bYiv2utx5n8UnSgku1gqC94uN3",
  "key35": "4dt5BnG3S7fLwho9o7V3UEVndhd9WXSDRatEbe9fdWaiLx88mV2wCd5JPbsitHFg6ANFw21QiZjVVqBrvgzZWMMs",
  "key36": "5EB5mmz8MLiVVDYNfcM53vHurMjS7W47nS9Xg1FGt25iTwGz67r4gEdjyhRZFJjiyyn9ZMFJvkSGiGVJL82RFM8N"
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
