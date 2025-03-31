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
    "5FQExjJJiKURQTxNPmUGazxuJZ7Dc7BLafp2vgCDiWsJqMBpjb1DAgXYBgR7XTFyonVg1XTToRUdk43xbbep2kti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQr7NNRTdVyquR6JZ3dDTWWCRdXGw1kL3ZBZfusPUnWViJnGKp1v3VEXs9qrPLsgAjcGyzRTkicH5YsUQyBChnt",
  "key1": "5PR5eAXJw7uRQgxUq7Cue7kUQFXQCTwpNacNfeQbwKstZjchafr6U2cz32TscP1k5nunpwEFnVKVNZd2X3nmMYDj",
  "key2": "24veSnPFQBAsmmVvmTDv4HfaMiLRADryNRmciCE2mFK5pNbAU5qQeGzat8C7C1wqRvvm6jFR2G47HfhFDKKfPPRD",
  "key3": "3HbwifSatEGTcGnxi3rtCizi7cRaNnm28qPyGW73ixzyAr2MK3MwxGBtfuJtE61KKthn8pwQ5uTpcp2rVsxqSxGy",
  "key4": "25E9vUk3XFegawUKydndpJS3sjxneUmaDxZuWiJKp8WhUGcNEDZt9JPPqNQNGwoPo2g1VDx55TfafRMtyMgzYddJ",
  "key5": "2L5wMs7hFEdh46ygKk62NUYdmBDpq7G26dLweY5JdhNEpbGNLGtwh5bsp9jYH9eaFNr21GzbfZyXkRnDYNLoGLyS",
  "key6": "4yAyNMJDCA7oX25194B7V76NFb1Yt5oN3Tek3EDScZtYfer5hxN9uUSEdirgVmYDvuRjUq4aEUkJ5bthrX9nsQwX",
  "key7": "5TcLX4a6akTKCntwUxCkydGaK1wfCtUwLCHzyHNuFbkPmz7fukNfNCgUj2RcADAJmy5vgzbzb4heETepda9UHUY8",
  "key8": "DN38ZDVyfVrhbupxYif1MhZyT9jFZ8JWGxurFpmX6cqATEkkgm6vzMRRVnXLQvQ53q65sY6YWBvk7bhDtyd25MH",
  "key9": "5bsU8sTmmAnagAEwEfqgtX9BVz8ZXkVJWVoBdv2ZBLMzARC18FWJMiDc7sMN3ozmNNjBF5pz7sfVp5Qz7kp3G81J",
  "key10": "zxCtpdukxMDuFNtj2uyvw6XsfWLSHZuAkaUyeJ8D2E96mFxSE7kCQghkSH9Q5M4LpN2y58Vd1pXU3ZM1Jqi2Ms6",
  "key11": "537pPNgrQ4pkyy3H2tc6hakq5PCuhSeyB5wjmBhyZZbM35hUtbBN8BycTNkAUHRTbCwmLs5E61dtS9U5ndn7qVhN",
  "key12": "36Es6ix3Wj9keSc4UZdwVPZMSXzXMdctqewnAdjZacCX18BoSsrQrFwCD7bsv9snrpQTkB757hdkfe8DLSQqrBZs",
  "key13": "4cDjZzp7oifZjXvcjZfDmJTuntKAQC74EaESjE6dv9fvHDvhiivUYQ2ggghbFT5pxhe7hzbCZU2hPaGzo5tb8TdG",
  "key14": "3r8RBEPjuUNgAdLNZTUNN1zpDsLXKvvqPhtWw6oALFR4dFV3meUQkzFcgAhhEkA1UMYS9auih22X6gnAHUPxKMzp",
  "key15": "4pLYTphY4pqahH6HVJHrH2f1z1KYc6GZUxv3hyH8sCUqom9Qk9D84xXbC4bX7KAXxXjJFd4SA15yJXH7ozg1NShw",
  "key16": "2hyKH6fr8r23wC9F49CJCvHgrtGS3SJSKgiW9LSkdqc8i9cqsEGbo2DQhP9X9sbed3oKXjbPtixBdoYMJVpJES8v",
  "key17": "3B7FEPAs44ugPe6daoduKazjJCWbQAwXMkALSCrEYLuYHELoZXrKDJqkrA54x9rktFhNXYcJRqT8xe6F44X5LeYb",
  "key18": "2NS6oL1EJktfRRdN3X3nMiWMnBLqhuLKS2FiJB4SuxrPM9sTGiqRgsSWoJxHfPh48ckGf5YQmFTp1SM3AR3jCer3",
  "key19": "2m5ZU6Y8hyrAmE5age1V8iHuKpqCLCfTNPbozaZQoTmsKQERJQD7pFPSx1bLEcwTptTSE4gUX2ZqAQdcaH1JiMZ4",
  "key20": "UgKfxboThnFuGG1wsb5RqbiweRgtmJC93zevHao82zHASkPe3WXGjJsq8PfsnAuKDaPUtUxBWtED3dGQdR49iht",
  "key21": "5PSJ3ppmhBCQSpqy973ZTiQ4E1Vb21ryeMK1MZu69JP4U1wJFMabWSiKA5sP718EHKvi4bqSFFvjmvY37PdEhAUk",
  "key22": "3dtRzS3FaX7qZbPHt6x2BmZKrbTPupYcSx8P8tqaeKTwpDm9YDPJJ6eKg4dW3XMfYqS1UcAi5fAALcmBuTp3y6HE",
  "key23": "uoZ2YVQ98GiNwK2cfL7sCEj2Fkya3nE7q6hjEvQWFjPFmo1XuusmzBHRqKqivCqfxopLYfPKMs2tn8r8rn35umw",
  "key24": "2YVx9KTNwpjtDBx5uMV6Hwney4BDoH3UQmpF9Ac9RB89WNyz9ZviDMm1PnL9Z3DRMXX6whxFEigpagJAVsf7RBvJ",
  "key25": "2Gx9FybMPwe1rUKxKooK9S9k8aNAxRCRiXky1hE2EABppMuHWci4erZtGcTznatf6AhkLa4WfBiTpZBMmX8cpGtg",
  "key26": "3Cp4TxQ5ybkXMTWFQYR2W8t8hAZw9QmwPWW6tgVeQ3e3E5hQnJ6gqae1C9rpP7fSdbbuhdQH3ewhAiYCsUJBVj1P",
  "key27": "5YE2PosTA3jKXweoNUYL3muY2QUzikLxfzh8f6GW5L6MHf1nvaZxveopXWjWpaXMyRLfisgi4NAdXhLztVWER3Nb",
  "key28": "4vZnv1DPXKUwqNR8DgZgcp6w666HYpMJEAB1HWAkbCZAAaNNf4NCdeUJNFeZexdHGMybmpyy9o88J3gAXJ2FaxuS",
  "key29": "2ao4buGnmnqik9i3oybwMsY9agkLadq8PwiB66LjqzhfBN9EfzAsZDDvn5HWiDyjYGJpBBfAYfS86PT9sqJPuF5T",
  "key30": "4ieJDeWppctDCJjRibSZjFQxKkgWqr9aJ2tPZ8fysNLyrinpBLHXdkqKb6w3PGfDynBM8eLbrMGQjbwejyLfYjwY",
  "key31": "5jxoyZhqzwdq7iB62X1QoRZQ8VcChzCMnPizeAg2qqzscRnoyjmUVDt8YBWoCXAXczytCfQbAwujU7THeaKKa2sr",
  "key32": "2SVMwMEeEpUnzybmTYiLxLiy9na4Aj2h6bwku1jQgYicaUomZrz5p1ggUvJoTq9Gmkjqu429VBURT5yDotuyp7M2",
  "key33": "3iiARx6uFub7Pmd2tqBTKRsGs3HB6s6iqSCFgqxjNUdxswzeYrCbJ5K5ZaGNcw593z8oTAeCvyumnetkaJp2GwFd",
  "key34": "pEaP2b8TkEZvPiDLFVfrcMxco2LAQngkmmgEcANP9HyvEQW3w9nYvvj3YgY9Wtenn4AjdxE3QaY7ibnJM1zfvZz",
  "key35": "3xrrqiYPnLMzJReGthi2JNNbkhQRThBv3h8yLr99QBHudSFmu4iPKyh9J4PnReeqKJHUopkvyAmtVchnqBnfNRvg",
  "key36": "sW8ZYsUUPXttVscd9Ma9uMTvDbWZQHqnfSymZ5hmYBNha6jxewpzVFtVTdd2emaSkvKta9RonmLwdnBjUQmyWeF",
  "key37": "5mTko5cyi2LE5J1DcUSoBg9utbkBu4hVNT6Mebgoog4q5j9J5c3bc3H5Rhu3TS8uAWMrrnjStwAkwkr46xRA1wmX",
  "key38": "5F1QvZWfkwxmb4M8QmAJ7r8ap8DtjcBiTX3w6G4BZM7RVw9n2hVsbHTBQBPQcZY9vMVRG6kecFxAwv2YoNKPYQJt",
  "key39": "5WFkGAaHqYdqvnNmetA8kWZ9aMJFSRBowYLCsrZwjSkcHcShxtsGQ2hUPpympTf3Vdh5u2skhhR22g62z2pinwhG",
  "key40": "4VAxpvotgUGG1NDYo8mYRKbvPpZtphzkyx8XFKpeYovh4iPAyDAirbCk6QumiLZny9SGu9JAy92aR9Z8RewStDAv",
  "key41": "3v3DXPp43Hf9WwZUnWpPNuPggWkSBFkddzi7NWQ5skMf7v11n9n1Ax9aXYp1HjkWVhVP1sQLsmXMpP3S4gv5x1mA",
  "key42": "5PoYEZyZ2fjrRBEH43dfM8EQtepkVXGGR5BQcCauHqcfnJMjEQJBjKxX9FKiZQf62SkAQM15F5XxZXtwdcDFVJ4y",
  "key43": "3PiZd7ioAa2SzXQBto1eFzERPy6wBuDxNQWSv9LCDekzDSryQqbckkMK6vXoUzQN5D9nGkYS3X6jF5rZdUyBfyWu",
  "key44": "43VogVPGvkz9CgQung2fmZ4W7XjJgh6Pt31QmAqjwVjWnuvy6M3PXar96GoqiLpCtBvd8GytY2e3JXXqCKTNwUj3",
  "key45": "LnkkR5p8nSkR1huxdo5aomoboWaUxjxvUTFv6UaV92gCWxEN66zZcmqWoLrRA7ytoUesacmJab8sjm99gsXEzqP",
  "key46": "3i8LcyiCAvjkPNjrMnUMSVND3QtHNNXP1X5LEXpij3VKckcRh7zTEBxycRVZTBubgUWwAbdS3wzxog3Avxidw3i1",
  "key47": "44FpMAjmCLoMJWp9NA2kcFvSMT67Y7QaNgvbPkweE9q7EqdGPgTXG8FK994weyHJVMabn3rUzRSyvUeVNKHzsVAa",
  "key48": "4HRQ4SyGDSwggsug1WqWnRHVZp9i8ExB5Eq1VSPHxQKeUnbLkPS1uTi968gfxS74Pp6Tujg7qqexBmAusf5G25T2",
  "key49": "4VxRFmx3G9ouQ5yVHMXFW6pZgjxC8TPzELn9JXnrCZeFUafz8YCokGSi2g5xFkxCzgghWWYPW5ctwSiZrvy2xsta"
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
