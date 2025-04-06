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
    "5pVyvwyg7M4xzsCNdUyKrUFrdpe8cyJDwUJk9oFti7Yi9P5uLYHhHd8RnfZaySeqDfXorAwXrXZ8BKsiSgaztpyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ukMdordz7XHNpwNX5hB1VY9zwbHua884pMJaQf1RhLFJkcDks4SjvqVGiRPTvYxtsMX8FvKvS7WL1gqnJDn2dhK",
  "key1": "2yTViboKg2EPT4bkNAoiDUXCFvevnGxdtKUP4ptPWoqoqmy1ALy4yrsDAUVH5eRXtVDcmYEyWbaaraa13unmCenh",
  "key2": "2gbQZEq1b2EP37CaehhgTA7t7LuKB3DVKxUZ3NdsuAyFuHG7e7rJBaM94iGkwsT8UcFriT1fPaGZRrT8J7HT3jja",
  "key3": "5C2vgawgm1S3j9spS7ntKewKDzHbiopHz1rPA9bwMCeq97At2BXKBr5zv1QxYsGhrRexWsychYFhUiMU4AkbzAvu",
  "key4": "3z3ZjxnAL7CsQVEBZbTChVaym9fd1wuYvFeNrWU9nXZt3oe43zwsVPmRKHMzhFUz7ncNiZpN5azpkb1oksjNxZRJ",
  "key5": "3tatworeDpWLrnG43hZ31W83MLd16E6d1NoazJcUGscaffiM2iZG2KNEEqKWuAiodoNCLwxm66yBJnexvC13MUqP",
  "key6": "2iuWtfYD1VfzmDnAAeL6z9TWZ5CLvuRLVrTE1j52DaBUqhsZ6p2X43qUcxRHyLfUAs8cPLzsqnVyFUsPv5Et7WP9",
  "key7": "5DmPigYbG2qvsyS5M7L98jydiBHfBMPNFJezeYWJE88B4t6x3LtzPHvzdpSYK7Zbh28aRqC7r84B2zQhngqsJ9sK",
  "key8": "cFHUMvMW5YG7APZBtZoJYMiucLWWGpLWPCQR6k3ZemfvrbsYLMvhXoaWAT4TpM66nBdMf7WFWVjEagiW43XXCqc",
  "key9": "5kMqprZdXFUX7d24onuLR8WRnMM3TLzwaYLMH9R3DikTDg3BGVf1aApg9XppYYC4oCQPDtBDBY2rbwCWoswZsvLy",
  "key10": "5rgPwvMD5iUQjJW49fFUGdjrk48Dua8gPb56NZYfH6UWrCkkqABabWfwaaRAj2VVngWQdSmCzQXG3NdN6YTsWoqF",
  "key11": "5e3aTGgtZfGLVyvp7PU4f9wBG5BupFWWiVniWW5KYFex4kTJ719XSs5bDkuqMWY87fSCW2LjM7qoPo4iF31zh4XK",
  "key12": "2L1PMEtdpfGLZiWskhZWZhiy6RnsFcsK5AG8AY5noHXkMAJnJ7gJBVjZV1ahDaYWGX6JW94AYpRypQg737mJXtr1",
  "key13": "2yrkun9HP5LrDcxaZwCrxSrfzwPfJxUVXEnSeKmfKzKAjRH1F1fzV6V8413Ag4hb2RikqfjbHhhN5ANK5Qw6hMt6",
  "key14": "5ux8KzdscPJhBVMd744QeEdv2s6HuvaEcuu6GnPYM1Lf7Qtb1ctn8o9TCgSSyAyBA1p5v65scnP6K5RQjq3jvw2n",
  "key15": "3e2rZrLDzdqusWUQfJEf9uyW1RQZKeYyLnRwTuNPPbK36dXoro198yK3PUaRCFaZinzR81PGGmrC42iTZJsf2mit",
  "key16": "2Kxw3HFsbohdWgoncSNv7AMXW9YXYFpeXcr6eyHcQ9Cjw3wN97GZLTzjDKgyhFSmwjwmqf8tZiQrtgx3QTt71GpR",
  "key17": "5bpfmfwbyoAAqzugMuXcqUSQZkH15DPNrc4vBBRknGaYko2jGoq1cmDuJt7f8YC5pH4LqwQWLjWL54WJ1U3oDF3T",
  "key18": "4G4PznF9kNX7gxYSFWPTHXCKKQe45veVsju1spghHrAcYKmATiVUzc6MV8mUvmMdah2QTPk2pEE4pw2WdMrZ7qRk",
  "key19": "9NpfZXDyuR4b7Cbv6XY9fPgV9KvPgWN1Vbig9YJ8hdYECc5DGNW4DS9Feju64Ctan2TT2t21d5xpCqJWri5rghp",
  "key20": "3Ffat6teideYfcQMSfQDYzHFTiiqjH6itJyDdYV6oKxg2DdB8nuDVAVHZMavRKvre47Wa4hPEvBdKn5W9deZ971G",
  "key21": "4HupEHFdto1yha7jTDZnEhM1dDXvSA1ZU7bSkSdJhhuACAxBnkrqkgbHa1E4cavZjThmpNCvKVSC64vftTVx2qRA",
  "key22": "4QCo3iGj96fLCcHbWDW9uhLrDvbdbvC8rK9g5d4ixHQyLVSHqFkkwte8Gpo8YpzBfKwtp4Ey2qsfper9Zxm8JGHs",
  "key23": "26yvSAx8FVSiRu663oUkhVhi7tLrYWnba6G1APwkQYRtzQgM98yyv7nAS5bCfXGDWg7Hhxbm999vGvEVzaPYZJCX",
  "key24": "3d8Qc1hSUW56HY8eW9inCC3urswXpMCx5RvjKgoTBixneomS9pGmy5bq6LZ63G1XL8jfSy9NisCwr9YLeUSGYVmi",
  "key25": "3VcDRysx6yxNvQRb2oPgsQZL29MGdQFGAEHugydAxDWhGouPHgtEGynFTaPnC1ZkCNb3eyd3eAKhbgDY3kzYiTKw",
  "key26": "4jAribV9EzKuY2PJheQhrzR9VbRDEcLbSb1z2CKhFcr2qupLwok9sZPtEdfiUPxRrW5djgGYMrpGAgLG5n5j3Ezv",
  "key27": "5GhpCHNta6awpc2FNmZ5GjfJNnknGXfLaCvWp4bMgt4CwHnwTNE3LXcFw9qZH3KmDnNyzkTH16KcUAwB9SYjAC4b",
  "key28": "3KSxWKpKRVXxG3MiAq4Mvooj6cLVeWMWtKFqTGUwqyXDmnfEprXGH1Wjpdg9qFpWVHgy4ZerCvPjiBtGpbQ5aeyX",
  "key29": "4pwBkpQ5jADGfpxLxcpoQrEcZkwypmqePyQWKh4xD41dBNtBzM5ru3kDPiAAdN9JNJpAndMqWxyK7QTceHaMtUJt",
  "key30": "5HQr6ScASMZkaiTRdn7T7pnkNgPWZK11f4U7JtDysT3kN28AJQohBJ422ps9rjgLqcX9h47T3VNetHP3eNRJnXTi",
  "key31": "4uHzFRhaW2Fd3iySird3dJ8TN6quAN4Q8tD1CPPhYdYFv2x6d3AywGbrbUe4ECF3PbKDtjxoyTsHBhv9esZ4A7Uu",
  "key32": "XDXo25psn6FrTVpDv9QUfFpKTGzcyD22ahiR64S4BRmnGYRYjHEkerY66KTAT1TTmcv1PR34R6b3kTQ7Zj1Kmgs",
  "key33": "48Gy7SSby5CCHN4ot8KKnr1yBfUrnhiKfYUZdfgp1Vkr7bEqSukgZGjZyGgYK9Q7TcdC4vZGzRZDqP5HSDZk2kUe",
  "key34": "3ujjrUjLovTmNAM8Fs18Xgj6qhxTkrk8VUPCH5iEDsxfwd3uazpRAeKgP6eA3SdZcRovgPhJRwBuDdNgg7Qpw2D7",
  "key35": "3tN9GyrKkJr7NCUZs3T5pYmMpKzuVnaDptuWcDQUiniYHvPFgg1gM7N7P7y8NrGquSvyywoyv7QTtD7rsAEaHCPB",
  "key36": "5senk8f4FX9GeMo7Gp4v9U78WKngCWz4jstvV9xqwX4ryXBTFWFbUyU1LSpccSsBgcvQzqbTaRVWSR7WFX4z3AqH",
  "key37": "4hT9VdrPMuGLopRv2zgByQJBntAPmhy8Q8YC38UR6gXsNMbKxs1SZdvnS86NiDR5NXZvitwDAnaQnJw98YcdVQY6",
  "key38": "5E18CbQoy8DAfEz1t8HofGYTZSGQP8nq768TiLn4WkLUXE6pryNH247QZRA91BN1x2NQkeAoWSw6DxqVLGJiQVs4",
  "key39": "2GcCLtQqvpgPD9yCefNuRu7LHnMAkWcqMbpGVHq72iGAo9HFyuT6in89aJUYaf9NPazfkVFUvHV4pcjk4MD4AXce",
  "key40": "2ABZkpnF81chyiqLLCYzXJTpzTV4iHKXkxvFjDn5hsMhJm2R68zcu7WC9R49Dk75pDYEuxwx4ZD8dVu2e6eXydvX",
  "key41": "3DnAFzvj9jY3YqrRHdSGeeeXWnUqYcduTR6JP4CQcvbJj3G295Eoh5K1Pcbd4WvHNEXhXxfQoQ2xvBrYXZAGapvf",
  "key42": "2aHoBfFApZNy2ZnYiT8jPf4mmp6aYHgUmNSqti66db6M9B7NtSb94iZ7mVaqkcKHqbsrfpTwcpMgeB1kimk6Uvdj",
  "key43": "4YMRwH2cTG1iQCVfRHHNZGfNfx6A199d6ih2h2TzKDbWAQhgKFqm5eUj7WRuM7j6chPNGSqMqF82WQG6oY2vj52n",
  "key44": "rknuubsGZDzkYND1bAEnVVxpFmwuxXVBQaLnBw46xGKtFCPts8bzsjLsqEGAhAw7FKaDpQpsR6WmXuL6jo1pc6W",
  "key45": "4o63XdMfYTqsD2LV788idR1MfHWvFJaHhXvbWNVNJ4kiXEvoHxVpCXMEQy9KwUAuVQsQYyuBZqMLZjgoNtdTbK3y",
  "key46": "258Tfr2Z17HZUAjXwLRY4Ls3HDbddj5UCpBSqUzxkoPLWhPLBVStsfYtWystopb1Dfmnd9wwiMBWj8wnWa1EpnU4",
  "key47": "5S9wPAeM2bKxBjt8zh5pJ2CPryfjXn4dZmqUEBMnxwRWg41jZWTrQtaYmAqexc3L16n5cbWBVgwN7SY5LfthV8s"
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
