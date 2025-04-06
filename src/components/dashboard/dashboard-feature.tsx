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
    "z1zaesTA91yPsWdzMgujfLEYrY33Y1QXTbeMUKJtmiqSqAS2UQSiFoekV2TNzn8rTjjwGLW9nFHPoxoc9acaZQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vb9Ka6YKk2fV4kiR3URJLwkPBxfYzaG31dv9nkMQsfa1NCzsTWE6V9whPqA1FoqTSB7M74hjbV5KS6jK7NJpMGD",
  "key1": "MY5gZU4rTPantLd1FD2HyZGUiA3E6euJybfx8cFjizFD5F6tRN1J4QepzA2QFMmKPQSikNE3ku2Y2NUS1eNX3tt",
  "key2": "31QMSUz1V4dD3uidddUgVse3jm5jGCqcUsetC8ZV9SedjpWS2ju1UQSGQ9qhxes6kHhTWxE2W3W3GvJH9vfdG4Y4",
  "key3": "2CmzBdKYgXvAF41hvzyjjcYdUfoge3Eo8or723rLuf2eadg6tMrS3dzB3u39xFXAGUv1AcRfHHy28rMk5gsJbWQr",
  "key4": "5UxVhe3UHs9rbHwsqQiGZws2yc4jDGdqCBv4Z7ghKbLw4zRn68hbWXRS6agysvFVdowFvt4HnpR8D1Bm2kKibU2J",
  "key5": "59LiYMNTS4X9CXdcXip6K7tnQLhwgfup5UPa3UyJru2EkRWBCTNHKfifLxHj5RXt7wNZTPDPW6mS9LxCDyNsswCo",
  "key6": "2XF4Tq8hN5fXux6kXLnzXYKGi5iVY4WzHdf4u8LkRdmyfSgx8H6wtWRE87BPTkrt8G4PLuryvtTGhgbdvqu7zwx2",
  "key7": "cqMJa85c96pmt97K5A4WoP91D77Wc28s37JgYHrkU3i8VLLCfyNU9M61MD4jVsHTvC95ZvZVqyBmXLGR7yWXQQh",
  "key8": "3zJ6eFt6E4iY5bnyGQ7ye84xXc1U41tfsEdyysGqtKxmAtrYSqE1UNGJKXtPoqhsjLGsspcN564jSTmr9tFieCwg",
  "key9": "3t2C4mnQdcPHmZb6afPAjbDXderszooPTmZY2Fdvewr4PjWATgoHKWTgtGLyboeqyL8tyNPkoEKUeVjoPfPKyhjG",
  "key10": "5hAkUyMT2hX2bBsKufHYjLFeypkU9bw7LrgHCm8ggisBcVfeQGQVRnjYFhqecQGCy2xDghuKixwGtNFBkmnSStho",
  "key11": "5NvJeRD8ReK5ddSTd7fmPopG9auRJUF1tP3FoxRBbJRuEorctFaUBjtnpmkNoFWKRrJGds2DBdC4ueTRm1R4eS1q",
  "key12": "3z8sJo9khVrdNzPZLncfjRM7Saw923y1FUDEkL4GQL4NZQsiAAFMZA6rjqzGpGPk8ackqBAeK9n7ponwsqcV22oR",
  "key13": "3VRnf1B74aAdFgJFHLKG5Nnf2sRT5ayGNcEWsuPDmdFEfpzzJejkU9n2UpuwBjpKV7BUdRL6vvQHzkkkdZdP8h8o",
  "key14": "3dD4e95sUQ7nUyfg6e1LmApXj68xM8PKXNsfgqkj1y2HrDJgHYF98dYNBGVQyp86RAm831UMQgPvwWdj9WZyTFaW",
  "key15": "2m7Bh11ZtfF5yMHFVV6XeeEKLgNKnHd5G7r4mDLs5aGi6DJCuDm616xodUC4aJQWuanTwQFLTQoUvpPge8Ffhen9",
  "key16": "127ndq7cVPd6gecKYUXY26GseGs2e6qCYiyVtDEeNbAFPUoDwB1Jezv79csHLSqoJRzGhPnukKYTJwYHYauVf79x",
  "key17": "5C7ezDu64XbLcBVwWZ4DxiSnNfWaSa5NzRJVgsfDabx9gjBRiVAGLFTizLzWh3W3g47mHuBUAvJHfQ7SNB3Qgf7o",
  "key18": "2ovfmfDFYz4uWXgw8xbEGSMezYgrV8RBGVXpm9GY52ViLchcncwdLvJHyVWStrAUnUkExapsCNpG7UgMTN1L8Na9",
  "key19": "5UzFQpS5BT4aYAZg6xkaxLtmqBJY2PhZh7METu4yQJXeDcJDPWMvVboxHXmm9F69bmS8xBT4PmaPubzmkRVNxpm",
  "key20": "3tRmZLtYaHBkDQH1qKx5jotwazy2AcwfTv2GyEDtkxHjsJRjT99UfMQNmf9tWChHroKk4ybXnHDYjkmiRayAby6J",
  "key21": "u2eU2UoeVs2pxTPhe5tKQHTJnRhdZsXn9ga3eRRRzaEHhx9HrVYd22PZRGqqG8EhNz6WHsPsnFx1zhg3JwWQvgP",
  "key22": "xhfJd5Q9LxUPHXBWrTMwGfkHhTgyCV8ogLhL6VCgiPu2M9gy7cf1YqYmCjUjCEoC6ZqCbysZiN3bcxXBaA3ETwJ",
  "key23": "2rcjn9DYuXm18Vc8iKm8m3Gd3kJhpviAFp1p8gbKCHvV6PSsgUHqjkE5u9XwfxJt4DZKZhS1RqnSQZa4ibqgBfCA",
  "key24": "3FpA8WULgHr7zXodKT8p4GzjcUwVnUWCG12tWSWt9pkwbM2bo3TjUEUL6puyZxXJtg7LX2QpMQmosoj64KzWHA12",
  "key25": "667mo5VnGSFJ1j6x9UzDkTMSB7h5GcAYRo8eHnt9bz4yMrw3c3UzSk85aWEBJQHoYPheGDqL56Yp6kWk3hLmv89u",
  "key26": "4knFSZ8LBPVUDhZVL3d9up5MwY8EhPrVZuNUt7kix6KwQ1d37NYKviEDbNcB44FxVsBPgXFeeXu12wmJqDJcrdyA",
  "key27": "zVmyvB6GesEPYRzpzjoEpRchCiN3RrUf7HydEJaA1HRsAdUJgY4pEQKzRGqpa2tqoVV7Bg9Zjh4UUSEksLWFWMj",
  "key28": "bfSWStgp8e9NUmb6fnSykJZjBWYrHEWoiRsjXTL6pAFZXQgjL9Rs84Q8t3J7PJzZYbJu5nRWhqW4c1DWLY1JHzQ",
  "key29": "4DzjUMC3xPgDmpy7uejnjPZYLFNykZrF5koaNwtEumXNm9RwiiQC9cFmvUbnpVS9ojZq36PVgJrsr8YtaHoVtDCB",
  "key30": "47tVg5NWK7ShQ8aju5DvS4TjEnSYraCk3DcpqcN7duRuT8vsA9ZGLCeuxXzAhRcABUJS2yitKJg2754ZsFUHcwzF",
  "key31": "3qcWgrh84qQ5Z7mcU4gXuGQAZhBfNBuFa9wGWhpxm9k6kUjHWrrCpE55bjAAsnZhPVESQFGPKazRvJMbWmC355Wd",
  "key32": "5uYypunk2AkEN9wGQAP2Y9aDHjcM4J3DnhquPy6mi1VSgjv4R4tDGoamGoavJmMJG16Prw8FSayA6GcpoK71eRfw",
  "key33": "2WZ6RRoTx7v2TBGMaQhDyg2oQsqsvA9ucCxPmBjmEUnvxLvn4JMrbLmbcXCkVMox8P2AN5QheAetji6SxQJt9y1T",
  "key34": "61b84aYueH7A8i6EKzEnT7RYcpYx3Yr1MNWoFZFg68ZgNjAsoZBY56MCa4DVXU2k3uiuNriJcg6jbuLBdBGFBfss",
  "key35": "5u8WTatTSSuyC8VEtmqtn6WJaJs69CxXoKQ1sCVBQB7kXKPrD63eVaKZUT1qayQ9Tw83AGqXA23ETXjYFTGH9Sua",
  "key36": "4uypvE6x1NwGV6g6z8R2XgdU8pgZ87JW5Lpm7hsdT43gePdG3n5o2P7BHYPRobkoggd6PxvpebRxupRGF6ZLVSKH",
  "key37": "4oavu4uszbFhLEpHbJdXen2HBXSAJHUKzGub5ARLZFiGKX7dBPgAUPLpQUDi49X8tfBwF4uCGPf4nMRc668W6Xss",
  "key38": "5iMYQB6JMjsc5sE4VvDXLkuFrJ36vdZP3M454fiu43oMjLZ9yGffKyjNwDLxE7HN85MakJFEsd4Zfddmn2JBdaJw"
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
