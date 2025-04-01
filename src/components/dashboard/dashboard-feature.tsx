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
    "4bGdGyqqASw3uFMomA5rvPQXjSWvsoBANLw9Uh4qGuiwJVfxWZfvDmDsyh61kQCPXkUE7taQJVNSgR9rwEH9iTU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s88mbCR3SWdTpRrZK35WPxhVZJq4ZcWRc6NwCsQC3ALtXejHhrekTancNxArp1Mz8o8S9k9ym7kiSHm47ajN4YC",
  "key1": "3bDgxos11j2QP7eqywX8QBMjcdrqkHsHy3ybfY6oyrM2TqwfAARuGKQc9ohnT6RLW5wvMU6Bdqt7WgpPNLuDEXHx",
  "key2": "2N4PQmM68a1W3fMQJEdviNXycbyg8SMwXbJ1djJjsgg1HoLCmEdDeV1Bu7AkhnnaMi31NkopVtP1Z2L6Kvhkmyc1",
  "key3": "3k6UNS78T7TY3GuyxwAMS2FFutPVpHBVV8wnPDNmN2oYdgyZ5iJdc5SB8QzCzoH5658eztDj1moNR5zu5SxYtaDL",
  "key4": "2rPownN9wddfve17aFVaYwHP8LGfwE1q8JCJMyD34NF63kiTTqw3jHnZicUF7ZKGS7hPnMp6bKLrscTPyGcRPkpu",
  "key5": "5ukvA92tCRuR9KNYLDTc44hyTt2PS9D2WLHLMctTyMJRE4BTT2U3XG6EqMZNRUTndLgPCC3t13jPKnp4vHeVrzyj",
  "key6": "3QBFZwb22uHhYCm5Zs9ZrB7RwbLAPXbGMw1gDTrqRxW5XSRnG6Vk4wih3GMF94xGkR58LRCgjTTsoeRpCZW1DZRj",
  "key7": "5Bzx7H6uYktF6JfRtuBqfBLrgqZsEJN3C3dcZo34eSDDLZ3RogLrb5K5mR8U1rQxLbsgpWtbkSB37eKu1B8ZQtve",
  "key8": "3VeJVN6nXpXYaVV3J1Q6rNCNvrPD8koaNRFKepnU3eM6PRvA4fchMGhbLkNeGge2WXieCmeFdXGXrckMs3p3MMoQ",
  "key9": "3R9nRA61XbzmzwoFSdmra8j2k7enWQ1iaG6A1xAvfpTeXa8AhGKW9SiPYMCaVnN6u6gSFvqFrXLnEWZYmusu34gY",
  "key10": "CXZMB8PXRy29uRnpfu9YXmUjyuQJLgHKJhGkvFhWhFwooSTWSa6TtgaorHxHME475TuLfC8D7MrghaEPSD8nRHW",
  "key11": "2ggyuRAMgFnqHGpqWZeTzpFpbkZGJnr1ozjqx5BpB6J8WDpgaQLsUATa1v1rF29LnqLnZ4DSStcKw93eipu9C9da",
  "key12": "6462Jqyn4hD1Fe4Cg33QSqF3y5hGoZfgVbnDEBzQcCUNZz3vecuSDADPeUNN4rQwWH3WUpouyMDZz8w8sEzpusFm",
  "key13": "3vRwZnghh48x2NGWakRFu9RcDA7uX2DXYreyT6PGNujBQzhhQDWhBgDpH34GnqUSgjaRsbMNEC5bZNnVCCtrzPzw",
  "key14": "5ZVFZYxwbcrRUnZvG1AujyjKx2MgdDVBz3DZY7JSb5nVfpVMPNTe7aD8GF3DPugaNqJdLJ8jr9i8GRcB2NvWvNWC",
  "key15": "45YUS9bw9XM5GLDVDt4L8Gzsuia95KXb5UtyfBWsU8HhwMDabY1STq7fMnfvZ2kCpnQ4d7N7JE9Uz8pdsMb2r2n",
  "key16": "3i6j4JybM9G6VTPXksNRX3WxoWjAS6pVEqhP8ggkSyEP1xjP4aP2iqnp9AUywwmESnDTp5SrAfVvrEsN1e66Dw9M",
  "key17": "4nNrmc2cwvrFqiQgJoz8HyDuosbaZeSYnUzr6hwzA1zURD75iZtq18HQKepDAX7WBY7ZigQftNsn6br5yzuzWP3F",
  "key18": "46Co6hocp5VStTscsTfpD8mt4SV27eegY7156Lrs9JUS3AgSffr129wEwz29AAfdbr2diHFSR8JGJYBjfaWzNsrz",
  "key19": "2bxTc7BtCc7pyrr8mBh9rzkdP9CGybhcRoREgQckWQuP8dmEAgxm3KfHrezS9guHb4RWPgkXTABXBKvX1qSvR86A",
  "key20": "3wPVxLBgNK8Am7bHndkegKWEnBtrFC8AhpV9ErZAXyk98stQMqA119qQoR4gNiEwgFKxscYeSjhR95BkbAzN5E9K",
  "key21": "5E57giS4Ks9UzaquiKiV3h3ydHdYXij1jk7dkzhDnhSjqHqg89t4gjygnG5KyxgPJGtFSNp9QBjphkW58UeBqm87",
  "key22": "3FFHWu1i8deonyG2uqL6kSZqJtsff3TWeq8x2RGyCZxGMooH1yJhBf4rtKahp88pw5Zxk3KCTRQ7mxaLgNJeK4B",
  "key23": "2beUh2G2Q9KU5dnJtqiAoXqEKFCiXzigiKFpcVeH91hPWzfJ4TjXUnKb7Za8bGe5N4wPyx7izdojiv4aAwV5thQB",
  "key24": "hPVy2REWQTk3nLDWdUu9rdtYp2px5euJZgfNsGAF8attLf5ScPrSbVHng7tQWPaM9LvUFxRv4FX1UNxdmWxrGvm",
  "key25": "5LCb1spF8529Lg53oehrDoG6iBmDvpwBsPUJGDnU5HZ2RfBUwPGDBX4RgYo5jLFiMbyDbMGit6uD5TnbnaTWy9jS",
  "key26": "ocAX212M46KwkL35JKAhr8BnEJie97fRH8A1Pxs4tDd47sxqkPqHXJmKFvNaLrdr7q5myxRJeRks3ZkW7E4TNTu",
  "key27": "49Jechbf7qGXdoFFnjj4SgoDzY3wL1VFXqZLX986E29UnYGhxyBNfVRbyznFtxcjz8mxTJgwW6omu1zdAJDyADuZ",
  "key28": "5TnkqR7717amSR4pMkMf9ceaRJAZjm4kochPaWBvbGFmdrkybi8kMhaWPLeHfS9nSCCUxQ9dKaYxfgsGPGDQ6S69",
  "key29": "2LHyTR5z2pJsFWgQuRj9GqJv2dVdYnL2RP2sLmtbkAj9M6wbqd4Z1jTdx6uitu6KAz6HuR71tRQ8QTtR6hiW4VGe",
  "key30": "4BtAo38Mf2ERALKd8Z8uzaaH1PticAaY8hzJiCpgD6ZjM45yj7cDDUZHCUdmPHGuY3EvDXcp1MpCynaURfvp6rwq",
  "key31": "5VMZGK1fhUdr27FUVhipMLR3okxZnTLEiUxExUFoKgtXmrRkKJoU6xiw1eyKEVJN8TEHT83NMBpxYkaZVZUp582Z",
  "key32": "5HhTxPVY1Xa1p7sicUSNparLu6YkPARM514959V4sPoTxokeP6cRfEQZRjnWKWaFrvWh9txQY1prMfnaiKia5ZGe",
  "key33": "wTpL2VaNve2RG7GBZ4SvajJtRVFZy5ArTVNjgP5q7tndgbNWrLAsUt3PgKqQXSbk8rVzFfgddyuyRkbbR12HP6K",
  "key34": "dSquYuKgSehoajjzJSA1uaBxWhuzwT6yKwCsdb1g5yf6iE3QbB1G8uoVibWaiht7z7UmNHySm2J8ckMf7HTdB8L",
  "key35": "2v41bZj4759dV1EoSEp3uFwNJxvJrCungbJBHq1855QGJK9zT7Laigi6uNjdtxNtaGSXqGo5jdZhBPfCG3L8KnoR",
  "key36": "4ZDSF93qKTzYp9Z8bQw2VvVpaaEqxXawuFpWN58XfMdCFeqVReQQZBXwSRViFro94J67faWDoUv6EaskGb8Fx9wc",
  "key37": "fMsbqAx8LZaVsbDbhTSkKFyfZXhhuoXWSne82RYGY7BEFztAai5oRu8PFpt4aDjw1W5Qpj8hz7q2VsSdakAJZb6",
  "key38": "5fv12LyqExqU6dkpyWobBbWUM3eAigu4JJD3Tx59Y6mn2rQZksgv36iSHu8vVDvhfQJaWQKWLwi4egQPnMWQPyxb",
  "key39": "51QiQbmuKCkHkK2HKHcanDTj9aJZKpg76C98c3JuD92Sx3VFMTuvE2GH4i25i4D9w1KuxUc3dF4vybFbGUm8WVzB",
  "key40": "58RBJ8Rd2okHaWn1QWhiCJAjbNEzBC2T9KcrT5rwBQ2JkFXYff9e9U4xaCGpbBBXcoeNQScpfNN8zJErHRYU6zdM",
  "key41": "5pAtUw2DZfnETtc3vWoA5ZaSJwSWiYZEaSETF5qj4B11CkiAV8gMUEKezQ1KetoX9H3JcpN2fxkb79bQwSnyPVXQ",
  "key42": "a7dtwysheGCzQbRgEn7DtDc7FQuks4w2SYkfgoFfn8QKeMibzD8sEfTedakgncdGhaUmF5ruySkDjW8iaAs8VPh",
  "key43": "RoNWnC6BneFQSq8V4HPw5eYoXvArpXhL8S6CkQc2t2sxvx6yWHgjR3VuNfp3XNX39trtR38RtTpq7fSPS8dGrWD",
  "key44": "2Ygvzk3LiM7QzyFNKRsAsMmNyxnRP4yhNLTx1vWNaLWYJghVxWMSAhiAN1C9cF6jmBbXo6Ypy5DePjDJev9UpTwo",
  "key45": "um6uMUwuBETQkWcxd1wuhRxrRfV2vsycGpmo7KCrk2Msdn87YXLCvkHAr6r9LQWodbBNL7ndRnZT4BdGC98bZCR",
  "key46": "4DK2E2CZwWUbsJUgQRBorHnZuXm6xjCJSrYyMbHN1Ls1FVPU9RiVZPNs8nU9Ms5rQfYQutvzVbgsqi2s8Kr41s2M",
  "key47": "4cBRD6wUYP7pMDDpJ3iJZwLWJvHVLTyYq9NQBEepNS9NiDhhnJJ9E6pr5x8eZ8bBoygDJyqrxEC2vcFpT4yHMSB4",
  "key48": "35U9afaCpgrfvh3tZXSe3GbEXRymMRhgBd4XB4FGBPzUuyRd251v64uHPrrqJJpRLRuKyZQSa4fuBYKW2XhQs8A8"
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
