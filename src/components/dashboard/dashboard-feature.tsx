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
    "4ZRmP1u88j4YQg1FyQ6GZn4yQeBaiuo7VSGeyqVbe3sCVAk3fZDKUrs9yLoruUceGGxTGwzkC3sZYicYAX66FELt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rou3mLDh6E3jNgFKAD35CDTTwwCuJdLEmzetuUe3idXhDeBCiKRVVjgeE8TRppLzo19wA6zMq9JkYn9JfbrHBCb",
  "key1": "228fhtjyZkxSzHWGiphAx7tKULRBhyStkoMStD1HSuuDpxLQdhXfw8xmXymC8tkWJKpARk9t1BeaQuDiADJpPrHT",
  "key2": "5c98BuB2DJ6bYKdHFeX3gQ7uFDyH86dztX7HTGpatN2nV3MceD9d2FX7ZR1KtR3JN42BzCsbFyFXvLV9661DTVh4",
  "key3": "44uyZBWQqZ5pF3YDPc6UQ4uynichWfQKW3mtvJ7NwegLYsX6kxv4PdXKZtpfnXQKn4JxZuhpZjSmBRMCCjSNYNwU",
  "key4": "2pnfP7tr3noDqGJH2js2d5RcKtZ3qDwLsNw2QHwKc3PjBLuuRKEKHy5ojCnyGa8Vc8kDPAzfTX4BGbHb56YFALy",
  "key5": "XDuoiZJjcNj163J3c2NXJx3zwXTvSjoVXub8JkVm3Z5gJVF4EAQ98GTwGWHoWW7ZFT3WPV9e5sVWNPY5RJwL2Br",
  "key6": "2YdTsdYyYxubMPKtZkF5Hn4xSe3GnBnPu8BbVhZmNsNbUZi8akuXX3LVDAe8AGQJmbhpjcZSDwvFvENY9rqW77F3",
  "key7": "2sWy56nHhgaDCicEz8AFLe7ddTEDkgGMTt28WEgFAztwQHKJE6wckA9GcC8tSTT7KnMAQUrB4Woh3kAVB5NQffXs",
  "key8": "4wnwpYZ7jwhS6aYLhUnZEyn4XcsvjwXH61YRw4wYVK2MsWmDZitwi1A34SQeZXNgfdpehveBmzTG3BKmaAm1CNN5",
  "key9": "4sBJdN5PcLpag5rmfGJNCQBWVHZUeWm2dyYPskQrBMbMLuoG235gEHdyqHgqF94tb4gjN536KBJnPHsowNvSxuaZ",
  "key10": "4FFoM8cm86Vwo9FUwDzPdXnWwEmtMrNyN3JkLfdU99gdof1FXkmWeoWovVKQRSeHn8QmcPpK4LvmbmvL8hpybdTq",
  "key11": "2biVemivNErJ4DQabxgWNFg7eqDqNMZE4AP7fTzX3oqQbWbedtyN9XXun88Bd2jRvQ7Wetsmxxn27NNx2S2mutPk",
  "key12": "56vVj2gZJsEBP5z7DizKNE76zhVUNGzrEDYxJnSKQjYGmhZhBoWLAPm3weEeSrX4yrzeTzkzEhpkeNES6SxBjzDx",
  "key13": "47AejaYTcW9SXRr5XuGiDRVKfpoD8s5zBqVsJNBHyNhKnyhrKQq1wSTXFFbdsCWh19BSvkRo2nLNBKdmnzMyXjpH",
  "key14": "Dw996K2jUs6JLgoJ3iugMYpBRdkpKfdceWVJ6vsx5ARv3bCBzNtVXFXXyiGqW2EvozStLyhcFQ9JbpkrWK983S2",
  "key15": "26ATjEMNKWVgzq1DVtkqveyQK1tF4SM1bGusifkvToTPhQrAZac5w9upPuV1kNczpx4iXUKPiuBhsvVgNjNjLNxE",
  "key16": "2ojXxfRYCioFAyz33tBQb4oTGnRdFp7P9fZKQ27DD9uZWEvGAtiK6mBvyxytextsBNVwS8syjxkq3XeGLTr7PGSb",
  "key17": "2YKL1vbcmxdxEbekMYUrcqs8yY3oi7KUG2RE5Ae8r9qGTVHSqGzTeSonirhS2oFBp9GbzPGtFfTFM2HMavwhHveB",
  "key18": "48yufa9GydwTWKc25CFXie8HnSh85E5z3jWW1gakFvdcDSssoB2zxaexdSMNYm8SHpLWCSzhsYyPtP2pzi9fHsjc",
  "key19": "5x3JLwaWvHdbcnTKJT3S41D4KZupbkhdk8EVDFGCC9BPtzhZ8Cv9kCeD4iZHekgXH3xEHU6gCtfN5xPZfwqrzBSW",
  "key20": "2Qih2gkxQs8emKekxxDCKoJx4ceKSkWSeSbFTGQFFStdq6DRYa8wJeHuZcahbzxbRLD7rQLFfB3fN5U9SToHoUi2",
  "key21": "2wYMfU9jZTgd3bTe9wHY7eRa7rgk2KRJRQwtNwxxJSRqKKwTmnHZ5SWKvVcVthFMYAx45P2gnGxk7Bb9fNp3QwTP",
  "key22": "65RHRtFgvBmhaa4wNRLLj5K6bdsfPBgMp3qxBgd2mEEaYhPp4w31mCyfNwheE9swizZKxGunkvzBGkp2LLAb2PpA",
  "key23": "4jWEBjvD2dQShXgZoUAqz7t2C45M43eucNZKbuSMxhuXbYTnn1UpZ4WyPsadmtZSEEwyAiftVmPjvcAzF41gYQWi",
  "key24": "eKWHMZ8Rq4DmNGi1cf6ed8YPWovSEuX9juzzTjY6qdzVRaPiv1oxy2ApaEESq4nh4Qt4vpLXSm2CnehLhSgDkuR",
  "key25": "41Ma9NBVoiEpLiNQXv1homWt3BMf3b2uJzkgUtPMMXT9PQ6gp5Lqmg8YtKynCxFXooKPtsEb3LGfFFBasyfxLFdt",
  "key26": "3xGM5ewkFuXyYmQkezUohzhWyeWE2TbwL7SkuYz3Mys8BZ8C82zzSUqv4vwGdesWYMMGs4mU4K4KgWvtnCuMRAZx",
  "key27": "2XFc1ANGKdaNHBzUsBFhN798eZ57mkLv29dBVcoR9xhbmFjESYDjGR4TcypJbuVerdL5xTrunnhqiibXqsxaBJs6",
  "key28": "48MmBK9bMEcGNVU9mZvcHbTMBT7kmT7MxdYMLett4bpynVPe35b8m1ty9ea1zQarPBRn8vdC2GBeUGxZaY5KKuzJ",
  "key29": "fRMT5QKPe4mreGRK3WG7Cu9vXhLahY1h5Hm7pXPiS979na745fb5rhmoup3E7woT4RZdpuxuZS9kzEs9DcAZsda",
  "key30": "HDwbhtVsKAYu7ELG9jTGrmv1Vh3gVLZRno7hdqHZZHkvQJAXVvNXmPNCGBUDnCqytHxvBQi56seE1M8i9WTJByJ",
  "key31": "5DVJ1iVrDPoQfP2RUkswAbLFMiF8ir7uDdJdyo2DF3b2QHnfMjUXiL8PJFeTkoKayUVpHUmd7uoqSy3muni66z7f",
  "key32": "5HCnA3vcPxTaA31S68aLEULVsKtCLcmLVERFmhFyikSgeUFsA3TXYfbxqm6bGXLsPReqp5ucjQE8VyJGeCikofC6",
  "key33": "34joTYzCDsb5ktRtrW3njHW27ryiseoHmkSywVTfZBXqBrCoB6SQtw7WziGyxAYqmQ4ThbNptVZTcMmSY1RGpVM6",
  "key34": "3LMNudYhCg8YjEm9uJ87GkBUoVcwHXXd2eHtfe3WwnFKTpGmU6qmQfWhonTycLd3H527sSgreFfs2Uh32TWFPWQj",
  "key35": "4LVbx6oqamkNBba9KoXLrdwtWdFqXLtZBFNGPQeEdSX89WC2KFhJzgnH3EUe2UPyvhBr2z4A3NKX39jHi74Uh1dE",
  "key36": "4Cpuh6bRsdtV5RpJkWTZ4CarwGWchdY2Yi8egvUykSG5GtN35oEs7WpJGXFFi9dr2TW9Qm5kHLkTDYWLGbbzmnqq",
  "key37": "4rezrTUeLk3YyNuXkfQyScPb3sWLbH9nfbXQZtpSYSUPpFWeTwLA85pkmcusjxWUg1urhh9GXmJoaPoeZLRCuNo4",
  "key38": "3nvL7Dn5W4CabYT5aUtLmstpC5EYnPQumezEX7zTwvKJF3mrNezEXQabH8SeA77X7tMbYHx3L6qCFiArmMQR2n1K",
  "key39": "53FdQ9dsPd2EJRwN1pPB1AG3Sny7HHBNMwy1RtwWVRZYVwH1vPt1Ph6nyWBccVTkiddR7gLfpsVksKPDYW4Fmat",
  "key40": "5itGw68hh6gwX2XFfpwZrU4k6mijHs9jQDLTVKvRZEy8kXtohgzXo3Xs2QzYisKGnFMo9U3R7jKZnLzjABdH1jWs",
  "key41": "3BHVC52CSVnUkXhquHV3LPaswnWvgmv31reTB9tmAR521dW3MSJ9m9bWXLaTudqN7cRs2ymtmw22Ca8QamK739vu",
  "key42": "wcE8cWHd28fFvvdtPfp8wFj3xVBLenZysJs4KozVGeGNKH72yF7Xdd4mZYuFKMyEiUYXwHgwWekUm9d7NKhaTDK",
  "key43": "3RB8taDe5EbHkTcfjp963DPgsU2zMmQQ5UyK9X8fbagMVP5w9Y9RBKXz6tQvW7QJthrzCECtTXxXcW9KkFbqCGMM",
  "key44": "2iEqaX8kCtpevQYnCpEAhCzzfwpwbmbZhngXkooQgQudXEcKbH9rRkiPrfAzdeqvsE3FXhgkMi2LmsVAerHhzazB",
  "key45": "21L7ow9A12EAxP8U1PbbzQxc3gdFbxnMqLvUPGE4MYuSMfvedmepdehrdPxSKfqG43K7GhkPofsoE68mRWDHQH5h"
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
