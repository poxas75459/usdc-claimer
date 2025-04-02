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
    "5Zn94hniujLpCmEihVFb2hegpjGejb2rnnsTuRrPKtvgyTv9ZfHqAEVniypPUZRLVRwvTymNQU5rTCaMmTw2mdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uv8VyR7t9w7YMTi3Ciawa2AqcMgVNK97rHBuGhuuTDSqLu1D6ehBeMd7PG4TWjrpRXXNsevTrH57S5r83wqEegj",
  "key1": "5QUsnJo6CHrQusxuEi3FL2gUwHUMf4FrXhU6NU2RxpUmVYAzNwLt6TSsxCUwkgYyGQREJdztAosXDHjNXozoYyYf",
  "key2": "3R2ZAdbfUEPTvD7but7AWmeWqTNFgzUcVkWGYhRsNv5MvpjSKZWgaK41TdzwGTkFAVU645rCsubzTztY4pKGzGVm",
  "key3": "UpKxEBDxGk84rHtCNoGscTU9T5Liuj85SC3tcw7iXR1BdcEsJcLYCGD8J1MxJMBQg4Wfu35PhLLrxbNYnC5pDs7",
  "key4": "62AtPhLetb5W1cDVdbYV2aqELpKD1FWWUt4pCjYCkPhT4gqUZgnHa2suQL4Bif35f9n6rHEbQbTMnwwf6iviboTP",
  "key5": "4XhCQviwtScoo6Mw4ciWKDB3V27WJjvRbae2vek2Arcag9q9TRVod1pg7ZpN3vMgxsi6cY36uBP9iKzcKCDWgHa3",
  "key6": "33Bo5ZKCnZ9DoZyJ1fop74CHzWQo1X71sApA5uk37XfhoEi4Xi1shMN4XQicHQptaGSoQHNfAMN8Lwb3eSF2NuNU",
  "key7": "tUikFTmkZbra8DoZ79T33YoQnZN4yNJcTruDgBWedVpK8WXtLwnZyVKkb7r81YkTBPqG3wXcCb5DPAPqzbfbDTo",
  "key8": "3SmUiJqATC7EJ5D16emaiNPHLLmiE3DXSMQ8fE4LkPGDSib9doZ2w6fMhr5mkog332btFnEawnyWd3wivPJHW9i3",
  "key9": "XPf38XeRqGVkk5WQbiARnbaHXbiU5kkUuH3eSezrimJs5vpj8LvuaJWxQW1y82ph5FaSXVfisfGhu74qQDmnJnf",
  "key10": "5do69H1mED7kGqoCcgP6nX1LpDNrHLxYGDNyq5BYi6MMPFyFAAhRkMZmxVN2PgqX6ZVqsJWJ23b15CjRFg47mfhd",
  "key11": "5nmasp9up4z5bR11DRazRNVUmqKBmgfLeQA7cqSPgFL2fMyvPXnU1hKrwqgghp4KqGgqpuVdV6xT8YCTbPY425SP",
  "key12": "4WZbysjZynzKC9gpusWho4EP4WK9nsiKFmZKPLoFRKpiZ3AiBoMo865XrHyjTRdppTs5A966SqJdFBwtyWUW2xHU",
  "key13": "2QvK7RXXLFW9QSUYq7cXzD9cu7raH7AxcbuR4CxW47aqXP7gqTVQUp99z7CWxdbfZSXTbTjKk78h8DkESMwPSfiR",
  "key14": "3epYUAeMcfcbPpxHYHjvRGR4namPVAvjmxqTQ1myN4njNiguwWrSw8LXnnCm98D2WcbTGixCNVS7g9mpRhTq2pCZ",
  "key15": "2mYgzDigvGKGWUKHL4srjPyDETjk8gMHZGU3rYvR3Xdbguf9Q1XD4JvdQYipmttiihnn4betxpRd3yFFyyzDjShK",
  "key16": "4Ujv9J5Fz7ZpnR8PGCLfszTVCPeUMj5MoAsFqdHvxp8AdgxfrVs9xnbfjoFqq6wjy3sHXYhSTrkPLyREDNjkb5eo",
  "key17": "2F5SLv81jfuZf2iWDgsdjLMhPE9RauEwPctUENGNJ8gp9ULt7gj2dCthxNYFEQMFCx5S4oJm7tufsxQvyedbxBix",
  "key18": "4oLDx652teMkZwjXi851AUd3qU9a9K47z6VEVk4AJkXnmAsdv2g1ybSqE9XQwLZmJ4nz2hPe1PXXCTBJAjAiD6KL",
  "key19": "yGdrtPZtQReT2sViVa2PFwg7hdhtZ96zuSWn4d7XS2gkbBM7c91VLQ4HQiPA1v2vHxA8Sh9ZY7SsKE4qYNM7xQQ",
  "key20": "34UDBqezmfm4epmwRwkSUQpi33sp5Md8T7zEHY9hhVWYQ8b6ZXhvxY9TcXVhiJfeZzcgKDa9cPT3RjN7p4ED4h8j",
  "key21": "592vkU9WgVuUReAuXX8cdzZikjqtUwTGfgmDbhXxZAVU376uS6qBLTDfJbGGFm9qGLofeTM43o4yupLRRDwRaKQg",
  "key22": "2XWwgcHcumeYyNkdXK4ymwLXrLHkhb1UhahAnCdTyrSr3ie4BizfMNg6n4GHJJAfVX12GJgLrrxdt5r4wUR6vvQ1",
  "key23": "5G4r2PRjQhW7Y73Ti5T4tr52eqHxDjqFjN3gDGWNXHSMfKnWwcJtEEiHADeSamtBPRMbyPAJ5rqELYG2h6N1xYDq",
  "key24": "2gveFjJqAbirkDy2CfQEJEW6HE3YEG1paM5t3o7rXsY91S9MooNLLwV8tNecm8JRi4jcz8uTEJ9kyJRH66Kw9FXn",
  "key25": "m7dTshKmdvgPvS4iqDkBzQmzUQ8vhQC6QCAnsordEq9LCuTzZaBGmEZ24MffjGUihM3ma7h1i1zeDm6ZyYmpLRd",
  "key26": "4kTKb9kkM57KWsdNKAV2FDCTNSUX3comqJp54udNakYgQu4hPXuwB1U8uqu7tqivaNfxx7ncR7SBWs83AjiJQTo5",
  "key27": "ReHzDfcFwms4yKxSKuXjKiBqykFcqkycXLrYmmqB7hrZQGDmunrroLyFvx4cgQB8r6dVpP91xcEKQ9Yg9C383H8",
  "key28": "4sxVLwZiDUyLwxvVcfWnvwUDsczvXJhqy9WiYU4fsnN7Gfv2pBmf2DaNHKzMYnxpmV9eXZbRs4bsBti9AR9hirpj",
  "key29": "4s1jgg5HUzhy9VuN4YwiL3mHBEZbdaxxUYDDdHAiM6jXu5R4xi2xEjFHMcubY1RvfREUrE9NXnFZeaGFNqCubFjC",
  "key30": "5TXhsVbYGhozAQrDEUNDT2tHv8hrBje2SPTMvpbBzp8gare4nykJu1NwGcwjZuD1bzzFCF1gJ38dRZyYo9VS2GCt",
  "key31": "vQR2MDezL3p3nEpoMztMASsWrcptV91jRfE3HAGEZ4S1mN1yyhqLA7oRbk4hYnMFpL21trdzcbyizCZGsSb4qyu",
  "key32": "2YJrJ7pB2GzwjHJDbdF9HuwZRSmj5mHwFrU5srgHXQTGLAw5dKET6VKRjGq2TCVKiHERm3Pp1LSkSG5hM11CSKTo",
  "key33": "4LL7B4cTfcvMBwthUP4VWm8FYPzMwAV1QUuVjFBdBcyuN6NKDVfBsT1VvEV2kTEJkWTvqEzhBMrfnHewzmrDU5t6",
  "key34": "XynoGLqt1ETYikpxtkC9QnbGdfpZZqvaWi9uq5H636Au66pDE1nvhGfpFdnBmsV9WnDHnLwHqjw4Qx4D7EuDn1f",
  "key35": "5eUTYAZvM7rZM6ThQ6sbJBiLja5p6MYdbpbPou19GFE1NknM7aXztUm2FBxkBm8dr92sTVVhrFoqQt6f7yptxH2E",
  "key36": "4CmfqZRDt1v5U4gppZZXUh3H6So5pvCdgxJcq2aep2R6EXv1i2CTozP2HQ9x6WpMEqsBth1aiJ8ngUCCVeEErjBE",
  "key37": "4i5RGLWvYTHQminYT6G9RdEp9dTLxYq4J6ipvJxuaVcbdSNWfKZxya71fDz7ag4owQT2kW3upbiZC1X4W5QX6Fsx",
  "key38": "5coy5eTkx1mhq7okYEx6XmuyLtfeSrWRKzMPPQReWEeUK7SRAMixP497WnQrZ3Br2hqEnqRbtbqtMfEcYUUxY2YK",
  "key39": "Sd97br3zQTCCmguHzDACH6HWwmFST2MFj53HpRmua4eKd2UUEj5XRYw3WJrRG654CS4rZcr9piRoyqMf2VnTnzu",
  "key40": "4jozrUUZFYoeZkSvjSe8DLH6yfgvxPpjuiHji4niLaTdLCdB3VQ62RhrFGz6oVg6kmKnz6YfnFuD8KvaZfb1RRBZ",
  "key41": "2RVVtnCt2aSiXsF2AbnZ5vBManoLanfFiPb8HSWPXZEfkfA6A7e8gH674QixZy8qYjg2AncDzs5HmdaZzdY91RMw",
  "key42": "47QjwMHhfkDTny9CVSov7VHqoshdeGuoFxBnbhrCLtHaEGszWd3c7jmgX22SyMehv65sXmLaXg4XZ4NZhDF6bs5s",
  "key43": "3jcgXdvfZjnuHvT9m2nUR7QiYrcf1o9jWUCxEw8gdWjKnLrJk1hbVWqYKimxQhm4JRZmLYAgU3QxAbKo3QPw2ouv",
  "key44": "UzVA79PvoVXEnCyW2T9AmMWuUyuHB4ViNW1gfW3FJi26ZSyoDcDLkfWtxgwJ3cBoq85XLfthmcCejhH78yY1cg4",
  "key45": "jEH77RHvfcYZunpjEx5uFXGJ4q8YPhqrZ76UuWtWdRsmouMEsCZN4MTrABC1zaVRhfS5U5gRWkBxqoq5HmL8ZDc",
  "key46": "4jQ9ctThSxhedzbWZzwrhBuC4hx8dKpvVusKryQQKa1Dmu6oHLms2oW4HqE9GVFTjy8zKjcVU9Ns2YbFtii1CCzo"
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
