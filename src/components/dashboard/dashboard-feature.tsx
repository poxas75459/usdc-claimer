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
    "27KRrZ5bL2wkp2APrPCjgvk6Hkag1rnoUFiJT46PjwgAPwbWy9GKKMSQP8mjHVSzFPnRAwTDLzZi4iBaiEDNJUc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEozy8fiCqWrXrCMiF3cKqVeP1ryNVjDUcSnYG427CgdiY2neFndWKCsDMsWcwcEaKUJAd6wMY3a7QWXdsfrDLp",
  "key1": "3KQA1X3WdDYS4ucExQLk7x4qfbonkLr7MdjkpCuFfSt8RcrhWVXAciG5Le9TN2gZM3yeCW4od9DmighKyhVgge4f",
  "key2": "3mhG62TUNox2mCvTCrTtju6Q8YLQVUPiDTWFSCyipnjnk8BtU2AY1siNiduFbdaN8HLaxNgj4YrcdJDbAKt1CzKw",
  "key3": "3r3eZkKUkW7tF88gHkMmUy694gc1sNepqKYPsjMBBHTMcc9BudmRvbuhjXgHgZT4nB66VyeAp74wbubgSBmsPz3T",
  "key4": "UWrNGfShRQudeEK3iTAJvTtE3s2CEoUnVPc8dp5ZuquL7ooXHzKrNZHY2QFj9pRpomosR9zhh5sMA3kBtgEiDqb",
  "key5": "4rKHFAcpGXD4Bgmnh9DTWGkbvHEzyjou99YCPqyaHT4eEifmhubtifLqnXKGSpiu5GBShGcBgBXfcuPaqLMBLRmE",
  "key6": "5CHo6Buxe2YDDd6Gt4vcPnTX2BVLrkQAUDSbXpizdMoDTJU5MENp7aqZM9tphb9xbK445ujeQpuUMfy5Q4iGeGHY",
  "key7": "oRQ413H7un1xVHndGpyBGvW6RAUkggks1Fy5PWJnfRyMKmSruxtFB5UhoLW31ivWZpUfdLDc39MboEZ1147LSfE",
  "key8": "251LESdVjKpiMJ9cMjUS9MnNoz5mZv6X7AUqzKqUZR9ZcRpvCRfFqpV7CVxpFxA2J4nDSFMyKA2ubUruHckopUh4",
  "key9": "cuovX8GmGjGDHfQTNMmz3jY2S52ByNpgTVhM7SfhjSMn7nNUpJLgojLQjeZiDojYHVJ5xhid9gNjAZsAZfdewik",
  "key10": "veJAJTg2TGnMFqWXno3pXtwTX1pyCAd7qarQgnLrGymEG4Bq7ee7MbLpzYtJgVyDJ1GWEKAmHsHhuDkEGc57dLs",
  "key11": "5X9m4kSrgRTYKavS6Tikm6cXWNEhMuwBfnzCQeCmRWsYjEYDJX5GVzgx2UQTHsnp6EFPhBsDzTC1wKYJjdafi91c",
  "key12": "wgs5hePxE7W2VEKzCpX95XuGnvrPW9c4ZnPPFRyo7ubhTSQEuUWfgiEvcNqqBHEj8MY9vf7NxDmxyUu5iRcfzXQ",
  "key13": "y1EGw3a9d7hH3FM7RGWjB6254BupC9BNwJjossmarXid1hXvVmE51oyjgtQa9bwUDecxRpTEyc5K1dSBzbZuDiC",
  "key14": "2dq9g7nJPwwCgjP9P5koxnykBkPu6Woix2R12tiyTSdU4mvutjDPp25MEBzqQNegdpJScF96csDGreGFPrMEVNuo",
  "key15": "uh3xLYgCzoMzVnu3D4oCpTDH1wbaHy8TJfSNAXFHVYk9GHmn2655kpH8VVMWPK9vznwocz2g9ZRCwiqPeWAQA3T",
  "key16": "3vfiof4HfDiGUP7U6w9UwFcPGe3DZA1mq4wUB6yV2fivhrPrtcCjBUp3nHqZV8tmYp2e2uaWyjTUnvzZAHzsPQZU",
  "key17": "bN1LXqjAb9VwGFWxrYXzdUm7yPEwG5re4hi83SeRqMFGfLNqyjVpkAQUm1EDcqXr2SjLaixfB9Kwac7oNLMMUwW",
  "key18": "54TxzesbkFB51G75UhVFNqkwgjq7z52rZKgZjXNAaFCxVH3fsrwywEtE6jjwZFZRtwqRrpqMXdznDhYtoLgeZ77D",
  "key19": "2uPg5bHW1wevvzF8ZU4B51LmcbEGJcruryYneaCZwrJTHnNVM23wfADo4qi7amsy7Kwz2eVXwkr8Nvs935FUcDR1",
  "key20": "52tgTMcgvJuo3a8G1FfoznMrPqioBCs4iEpkGj3BAGGySNtuPBJieqfz5FPkhvzM6nxUcWEiQTpXGP7Ww6mKHEbW",
  "key21": "5emrfVcqP31YtjDdc7VJrKAGwErbfeaxePqgHCWRarSxQEd973fbz326RT2kjaMchDgD7NFLkzQFJt3qpL4JfyxG",
  "key22": "2DyPFXNcfBH58YeYxGjDoEf8XtHS2MPXvvYYziw9FT3JAc6UQhxejyqmNyLfNtfe4g2P2oUXH4kcJ8rqCrKeY7WK",
  "key23": "2WmGDum2qH14M6RR2WG46oAvR17o7rbRQPpwZY4WiK4A4xyQof6jhZwUiYGYTeoqScQaPV8nQTt6JnVACU2Ftiah",
  "key24": "2JEQy5kKpCgzEi64KuwRbrN9tNharig7nd6VJacKFEcGtJaL4QgYxWeG8NqBuJggk3j5JhoD4DG6pTj43R5SuKAx",
  "key25": "EbgNkHXprBaSAbWqXcMGmFMLWvxBgCYM1AfSWn1pJe8RbioEE56hXea6St7SmqGnVCVEsRNmqhq6HGcSWFLeCub",
  "key26": "558VTGXVa6SbhLwfXQKh37hUrAybG3cMy2at6ZibdTLPcfK3U8S2zcBr4YFantn3mKurpN54cBiTR4EN6xwp7bqb",
  "key27": "tPhxcNA4vYYUbLDwU4F8Pyar3Rwy1CPNjgDLHmEM4Z24MmaXCHEx8j2Q9RDYVL7fwWRC7jxqryairzZACmtE57X",
  "key28": "4gTAgTLMoLPbSnRUL1RaFt9eN6CvL9XfQDi4wGeSSb3HMjFGqYAamp57FAJEsQyo54mgc2onA8Bo7etU8iHJHa9u",
  "key29": "2oMopqTFSrEfyyc7zKmuKaqmN7BYUpyqzAwWZUNDx9bNgrdxHpWcjrSY6w7C1FwNd8wRzJ8PxCWxC1LEgM3MrJjF",
  "key30": "JKGQGbA5YSyPQatRKLiCZdKo3cMgrPzYcKo3WChNR2EQqyrH5bNwH9Xk4WpHQrumBhbAn831nNQzdyYTyB6Knop",
  "key31": "66McLLswuYULAvxnBAex9c4yi14nrYRSRYBXzyF1Y3nRmZpA3roHvGgnysxHuC3UBYVcuFyD2S2paznLCjFPXmSc",
  "key32": "5fXDS6Kw3iZj4sasQuQ4vwtTAKTrPWCAwbYQ7h87zEExNAev21EhU5vL3qxLbhtUnXQzwwioAQZBPuMpvTGCJ7FG",
  "key33": "325X8LWA6tSv247p4pQKKNbmPqM2Lb9T7jTuE8RM36D5qzp9VNkvPr1wwsVhkQqtpZBDNVMZMCF4W4KjZ3CbTb2V",
  "key34": "u7oKGPsNKXSZXZjyWPBEhGxNzh2tCVqL16Gjr9Fn4TWoPGBtDBj8t45Zck8z4XXcvp1d2SbXp3LzHP1LndzijPL",
  "key35": "5BtGA6qaGsjLy931DbXmLyA5AfbFnUBTmY5Rp5FR3TTfyEDmb6UL9vFt5pJXs1tXveMogj7EHBA82Bb45cRBvwxG",
  "key36": "4bAiAq9PVoDMs1Jup9Hywc7uf3JDgHpvK9SZ1EfgTurh5qyq74WowTacuiWmgozpHQsRfPY354zkPwK3vMqGUCGF",
  "key37": "5qgTmgDPRnq3ze6KcXquEhpn3d7zRsy3SGqDFj4ptHaBJjYgkFaEuFXYKC5XQG6xPbe47sMNYw2L3UVXjQubowie",
  "key38": "4AK19iwufpLg74wBfCAX1btZTXSbZ8MbANrUXuVfe4QdDV6Eyup9yoRcuoKssbwMvmxPEfVVtR4CWzqtYQkVS7sD"
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
