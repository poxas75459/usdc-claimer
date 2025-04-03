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
    "CH8T2Xib2Qujx7YdmTkvjVAMoWcBmuioQuntVYrzoFgF2WzynBD9WBVp5UXyzMfArWyKfh1LakYvnn4KRZtbnrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8C7wSzGEE7Yzu5wT2oDazDPgD5odan4Uh6E13cxRUpRFcgDkX1MetX9f9zLg5UgLrqJKupdVGGXXJjRakYwxcF",
  "key1": "3gz7PbVXzXs7pgzFrkjyZGUJgcP3zzgySW8drpCBTM9kToPN1GcdmBCkkyj9tARjGX2MSBuMyrjSmHA7mL7RpqBG",
  "key2": "2sDM7MN1kCc2eGxjekCozDL3yZ2iWhKRuCzbDL2daBYuoCxqYD5FEFvL3bPnZvzS1ucJ4bhqEeKANXYNF1Zm7oXs",
  "key3": "2tGeKyW4FiCYdCYw75YzZDqQEXE9sA6Nq5FeqPhAVnb2UCi3vvGyZtofNfHLcZ1vF8Q6xFP4byLSGASdSkYV7tnN",
  "key4": "38jhQ48BY4GHz1Ytc6qi8PCXve5V6RvJimhsJ946YtpsFGUge3xw5QtRp3ZTgLd91ASWtFeoiE8Lt7SHFVk3nHnT",
  "key5": "4kZHDhAq76UDn6JJKrjScDqBPLLLWfLxRVG3tJV9icG2fxkSitXkiDSixrcYvGEq3ojMGkdTCK4DuMVWJYJdpdtQ",
  "key6": "5QPMKUsNRdNTpDDGAq6t88ocaG74w384ceGkNy6M34DhHWEbBPThkZt5zH3pfDFoH9hPnyBP9tbiaYDpV2QuDnkP",
  "key7": "JdqfUARhtscv7iTW6pS76gs5Sd2bScYBDu9SNFcFiKza7tvTTCVf9PmvM3xjbvNCsJB6GV3VVM5hrrDxCkjLWtL",
  "key8": "5W8YtBG19Ad9KFkCweG9HaJb8fSkMGVZPd1bC2ssSLrMzuawfT2wqDUbCE3zxtjb8WtWNTBM9XkHWJ7pyafRrbKF",
  "key9": "2AVLDeEKmJgQiNj1Vyg9abv8LpmQd8KS1N89rUSeNivM6BH1Y1Cu6dYt3vCPkAX2Qpq3UAFTVwDKYodGDAHQoWRX",
  "key10": "jj34D4DBrSHxrmYUXkRTuBcLDgnk6HJF1RQRcF2X6DPUphYToNMSQAiishDS1h2pjivP4AYwWuufgY1FZQf9RiJ",
  "key11": "3Ti3FR1FLe8AWfXhr6XWHNvttbhW5YffVjeWemRb8Vg8cXdtoBXooUxt8hFCZf87BgbvchqRxJHa9MBRDhBomEyL",
  "key12": "GMLfzxcVjYVidYs7yxm2QKWHnt2EsXCZcgH6KyCRtBTKb86FmzHpDS3uB2kG162TpatPFXKymD6V9WZLjBc5r9v",
  "key13": "4zETZVRDfbQuB6Wf6RPLsGCkvmkvgQpTHUpgt7iJ5KA2u3mAFtx3qw2Fmhem749bEPxZMwmjbYt47nf6TYb9Ykdh",
  "key14": "2dEi7uLhijpDSWeCYD2FDrXGH5SV71kB2vfPckHqKxtX4asNnAwr86vwR1Kazx69BHqDbz8XqnXvyQ9j2mpQfHW7",
  "key15": "5krw4aVCMFENT2EMTLGwS4eWXiCACoBswuaqdqGUKeryDgw8jJTbUTBLo6eHo1WYq8Mg2MHsyWxVDtpKJtGdcua3",
  "key16": "2Lo8FcVCNDDnP7VwYhJeQA5D7fZLGzCi7BVnJNt5pjGo7Hz8VNH3SBRrrfXbbNh9GzrAj2ezkdC8kBtsgr3SDJ3F",
  "key17": "492yVGQR4VfwEk2U9L41ggPUKNr3Ah1tkkZXcDVWPb29CDqc4G2adY12Xv9qJJfQZhS9dzH6yzXAqni6A9bybjS",
  "key18": "41enRwJHWJ6BcSv8jb9GRukjif45JEPp8rJnLfgTLyj9A14aQyCoqo1Jae8oTV2fsjE2JbfATA1z6Qsm5nxLNfj7",
  "key19": "iiPvxNU7tLMcwJgVNRJZ58mHA4hQVGNtXyrVF7bJEAuVupeyQtxksc2AhYxELsALYBiX8ftgSQjZCzEqzJ2YjBE",
  "key20": "4F8uAzEMLHFRBn9Pqqvm8EgENggjC1cFWs1CCBLgYskviAu5EUFhRCYbLV4TNjeoRTszfcNSzXHwkwuXM1dzi8RF",
  "key21": "65MkYsi8U1TR8AsDmfRkQJcjcrhMqc5bEFQzwrUPrSpHraMjfv8vaBqxcDhcNzJhgAyBSZC4QXCxTgAeqJNpWPip",
  "key22": "ePjyzyYMYs2EQ62idQPVtm82NfuZM7UNJq4tnZdkSKre5VAgLGgUC4sUrA3uBce86LyNkJqzhASZNouy2HnshsD",
  "key23": "3SBF6VLvudNxQnfmNcQSaY38NBedAc7TYanvnWxo5PeuXoNXnTxpZt4gpNYq3fDyFjNUEtPMiyZPiunUnzMVM6kU",
  "key24": "45k48obQ2LtTEvte7JaotqwvU744ypH1TsDgLED9GvUizTaVRFUmgidwGRAbEz6PdAGGMj21RDFTtK1ydY5JZtNd",
  "key25": "4avZyHZmucPdtLEhN7Bhc4B1Aw8TAHLet9zqEVBwwvUZk8RPtCe6LG6VPRWW2kBkoqa291wfDeB9CEHaWUqf2AMw",
  "key26": "56eGRbxfKh8k67uymr4oEfpmgJAFgDdjjktnLhRjtPwkzoMd5gTfLPF8PF8uF2etuKywq9m31U5rtXbqiqFuE2Re",
  "key27": "ca275odCn3TqKrgDJYzs8PFaAfFKiyKQVkNS7KCA3AnpZhuYmy8qMSnD3obZBdAHkkzdFc4mkqJsPALmQiVenzF",
  "key28": "kGky6gtGuaCcDxiK21gfhvg19NHZudAAdunbxUZ6rbB6ejXRxSBvR5Bgfrv8J7wTDVEUiSHYksj8Bz1XJXcrvhF",
  "key29": "4XwoY8w3xjAVh9AXh39FhRqvFydpjYJmYYs8kjucVc2eMh7ZE6xXPLf7LjH9LBXCFQMe5kKowNnuTkUp2vDRFfNC",
  "key30": "427RBffBSMxgZZE9c39hkRZZqf1So1gEnnxDBB8FtjDr7vsEG3SDGgLDmtB6JBEca3KZiXz2aztdP66TrQKEnfPG",
  "key31": "4bephBmv6UYqBMkRVqbiBC1x1iS2byXPjgxPX7gW8HgQVhNMHVb4576FxZLKgYxaYSRjYV2fjmx4EQgiXqVZgVaC",
  "key32": "4xMANq33sxiJtxNLFyai4B1vpQLSVwqyumBujWnycrVWj1JbHyGUELgEBpCHzDAj3Cx3DMFdqX3SvH6pmu8gJWPK",
  "key33": "4xKUnJ6L92kj8oErV5pmEBpBBxSU3Kq2kHDYyTzzwJNsnUVeV4s8oMmpw9fev7KW12HSZpbkoRG75dnMWWi3j4TZ",
  "key34": "p5XuU19VRgeELk6zXcyCDpPr3YceaPyAC9cmY7t8hob6trjQiu5Y1CgvncHvzWdBUX42dBE1MvbXfQZz9xW3cKu",
  "key35": "1YsSQvq4pjACiqraAbPd3o2ZrJpyKmQeHnBsaA1e7GbN5JJEUdZUiu2dxHkmJrNNFLoD7TZ4VuRpKxGrWPvyy6X",
  "key36": "3LgPK11LyB5tFFQYZ5BuCiLajc1D7K7E5TBurEABLDAa2nWD1LwsSQC9mWBGWQSLeu9nz8xu6LzDPMK5LFMBAuYt",
  "key37": "qcY1C7YX7tXGVhkoazSgktdDUWcPnPePTXDF4ntBU8ry8yNRG4YvNew9m4x5kPi4aJ3gr1c3fN1eo9aYdHNsjoY",
  "key38": "2RSYKKC8FZn4xPFMSvJVn9jUrqmm91Ezbyhp96oW3bsQzuwDCS5jeYfsJzPztjzQE6RsbiGjmuZpSPGu5S83G73o",
  "key39": "5dPq81Fdpbx153KShxmY4FYxF7odUo2khoY6oXmnhcJPSWuswsBabruUUWMnCMHYBxGnDi2h2eH12dFgGPN1zN1H",
  "key40": "2WhfhPH2wRp5u4fFqBffB2F8xjvtStcCJTER6ay2X4iQtxbLwpXKZgHrCRCZKBLfFo1jjXBwLPScGCTmJqFyTfmg",
  "key41": "55iTN9NA96RVx4aK5BhSxjvUyEYQG1nVnNKgW9YdrJRcV6WDvLd86YDFD6EDvAea312idQ99ui4YM9ewgQhhNKU",
  "key42": "5RUwLDe9awHD8ZTBoseyEpdWPoSGSfHTFNDexv88TVjeAPXSPLiSv5PtKptw2DZgBsfysvKxu6KcJoESJFvM5RRj",
  "key43": "4W1JLe8ri6d9TyhHBUJ7rMa7a8KZZGbnxpsRJf9e9frB24PVfzYAaRtTYwKCfyUi91pepPjJMvNCrL9abh6ecXaU",
  "key44": "4CsfzSH7bXyLWUyiJcjtcBNFQ2sZ1PmbX9wLDoGEADaqeJHXGFUhjTnAp7zHqaCAFFCV3CcTBnZGGnQZZmkB4tgt",
  "key45": "6hA3jGrFiLqvFz9uLnxqZPr99wgDjSwPBe9JqiYBeRthC3D6Sjde3iApgPCQFzMK6z8zEkdfTYumzPpzvyfrKvU"
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
