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
    "35k4wyoyqkcWFkgieG8Rkh3F1PBVpowMLrZAaPuUpgTui8Xr6gtpKR8p33BvD3VzvBepfCeuMx1m6DtZ5WTCNdyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egtDUaPWcMwiMshc9DK4KYoHKxY7sGxjt3kFagPRQgSKeueX1sbQC5U6qXaQ4GjeUCxwcR8GcdBhSZDZe6Wt3Jr",
  "key1": "2cvJ2NcdNoRGPvL6PcfRiKQWEUj7WBytvnuUahQER18uSjaouEMFTBsKxaRcnDDhXR5Tz3CdfBGuVUsuRZCCZuhU",
  "key2": "2w2wehhFwS8esgB96eA7NvMN5DNhp4BXHTVebH2tu4Dcg4mFzEyYizTE7DYCoG6gm4ffyszxSePLp9zRoerbcsun",
  "key3": "4ETVqjz5KFxZaN4jgmUgRcNoCrzeahTxw7kDLngMwmEpneVcFQHDzZsLDNjBQR1GeBeb17adk1mHiW4PXzQdgPxB",
  "key4": "2NjydkTnmMMhWBtxNw1BoWvvQfst6aBFowNV5ssS3sWAvTMNUYo5ESQALxToBFYQ6APnAxzQnKxPHHzaEtc6pR2A",
  "key5": "5u65bM3wio6eaRMDdaxHg9nZ74AAw9HMGunBdxnQyaBgy4XfEHnT5XouAZjPE1hmTuTomRXnFtUnCg4q3JXqyJ2h",
  "key6": "4myCcEXbydpmG9aPMWNAy5qjfxVD3EUVMSUmkH1dZoTzPDARJj3oL9nzx2VE1w47Ry2xKG7nDbPKAi33JLbkeTzb",
  "key7": "4aJbofk4vecrNqmYjZJ1RBEnnLvpAbAhLzKhV7YCS5tekuSPo4oEuEwwdxH4n229m6Vhdyee4mbMLeRao9r9tfdA",
  "key8": "5wEmg3uX2ubMDRe7GQEkoZEPpoCrvbtz6BhK16zPo6DpfotnA7A4T3NjaRhKvgmZyXCt74NpQ9W5WBmpspftkVA6",
  "key9": "2TRAWa2kvcYaALGJQ3UZGC3UP9qDYs5qVrCyJnybpresWyQPWn9JN4gx56THbgNuAhkNnZJQhBFPm6FJKB7EgsLW",
  "key10": "23E38afP5SYagga2dxFZnbvHHUQCHooUDHFiyZ9aYsyiNYwQtN5XiyMGHJDv4Hi4fBEhVbpbh9re6VYe5Bc4eryF",
  "key11": "4KFu8cZrspt8QGgjobCF9JeQPJU7KDMp3pFzexTDftGY61usPwkdWb2z9EwV3uDFFjxRaAjjX1q3t1TYW9JojNj8",
  "key12": "dpwVRRnSqsptQe44XYQVRvcyEaNZK77bswzjmqmuodbwNQvqqaWNdL25CyFMWLYx6ntnromr8pmVhJxjrHzj9e9",
  "key13": "4bREkp89Z1aA3VwC3XdzdyvWCfrKpx6NBVZKCU48RFV2dFddH96ZCu3J8pqQMYGsrpEdLpbzWGTYjCHaod2zQos4",
  "key14": "3Ru2ecTUYY77ChrmYGrc5q1hrYUrMwHUJ8aCo54Hic4dAhdidquTkMBvWSeLobdhzfP3uo43tkBNmcFoPQtHApkf",
  "key15": "kadeVmwSXxNexmMpDCBLdt35TecP5MRKWn4S2Qz1WfA1jptF816iQX5tvVNV2qhpySyjaH7Wkx39G2PKBXADDkb",
  "key16": "4t2Si6zrPgY85noBpRYeLeih8assCtXM82J58VypGJvUMU4TMocKygChWxUxzwZ3cr6CKCfnqPUcrsS6izBrartS",
  "key17": "3SdEF2QK8gDfamevDbZj8wgpU2HzuHZbzQ5xea3uZDPSDiwbHLH94bun4uMow2hApQyaxMzzVW5TzgYptXrFZ8Ze",
  "key18": "2tcHNHcjJWJNaNnaovHTUR4YUCFFFfgP893ueNWRUJaUzMyCwhdJGrxXMgyur7EQDThdGjp92wrcoxmgRB3VAxMC",
  "key19": "5nFixDr3cs4CKA7jBWea44eq1doq1AGzmwA9AFTw12Px8uYYnGX8VfAnNqvj1nvE33BEDqpaNACWWLpMA4uztbrf",
  "key20": "4EY4oBxfcaYzx96et5WpopEdFoiEJ2dvX8TsWWkgx7uVJYnmFoLBSpxHHRScXdU1xDhCRkQYtGhiJXwhn4RgPhHz",
  "key21": "2d1ALxoYjx2piKYqbBhDmkrsgWqhyrtmEP7S8Z3cexhtrdM31ydNUH41RiZ5ZduJ6V88LadfyPr2KnumGXhxMneg",
  "key22": "4c6JrVA8aMXuyAQNQEFsJ6NBKJJc96Quxd13FuxTwYkJyxnGZceNuQKrdXqrBFsnUzEXwR5ZgzH8sXhByAbiUHHJ",
  "key23": "SJ45CV4U9bz9GXSKMVBEAnjrcNdDnL64RdAz9Q9y1ryNiiqC4YrhCVu7n9Mw3iaJevuaHmZeSURwfyWTjAneKpi",
  "key24": "3eSm2nDP33NRCip7Eh4YR7hVQrXHcL3sG1yp9R3WLWRn5ModpML2qsBQiKsUQycBtgNZTPvrKvBMTqkAcuBkSJ1o",
  "key25": "t9qhFdAjR1shcceY96DYcjgngnubDSA3ed2SSKbxmBLN5qw3ETDGHv2b2GuGec8fqWTmjzw2LteHpxsTEmXgZum",
  "key26": "21H2stbPQVo7FwfQqF665Zp4tmRZX2g9HRBQddqSxqW9pv8PTYoF6kS6n34cnKfUpHbPqAnrPJ7aSKfzF5TZxtPe",
  "key27": "4aJV8VtVqdSG2Hn2newhLUkZh3o6TYBH5S3NmjXg3unNQsfBp6EPRGpHMpLPL4p843PrU1GTbiRcdLj6dtVdDmbN",
  "key28": "67RnkvBisQAnPT4LEs3EPpzhekdcxeZCzTRxvpWGbrXcEYgv4A1jejsvpU1LXVifEjrDzvAj31T2rv1U7Rnweo6S",
  "key29": "kQWScC38fFCpMcWvpWmefnJNfbe2EPKwH85tKjecfTyDXZQJNKH1EJHL3CvrSKi2SF6PcdfRA7JLLMenKtTKBYz",
  "key30": "5VcaViqrk2rghRwQ2TGJG9m1iGTfDyWPY6ZmKiuATSfbRK3vZCtCRXxiBvWheBsBcZtS6Nrkw8YatssUMDvW4VzZ",
  "key31": "dtbjHh4MppACw78ajFrrjKa1JLc6a3iG9vRubh5aDRsMBgGdEQkwWj9M3GRFLqiTx6X93obr73UFZNWdaJrJ2PY",
  "key32": "ALASSQZHR5dhzxpFJMwqkE1x352iBZo5fgNwnRJQzZmHaVLrr3ywPzEbjMEXk423kVF7qeng9vns6CvzMetvPR9",
  "key33": "26qEiMwRn6yfrhwig11dD6afxtfQ6wgMZb91CLD27SXK8386hkkmnsSvCtBZa2rz4NKUiYPWMgoYTsoYrTPn2N2i",
  "key34": "LVoAbq87XaDobZ1VcQsbsA8DNawcxCKbhinLB3hhjrrFh9Gxdy16Z8DTkWZTntRCrNpCTYYabD7HBV4NB7LY7bQ",
  "key35": "2RbbX4k1789nvedmjjd8EJ2sCj4zc82o2jPigR9it89GpLaeMQA8DjZkgfTEuRdgLjySnaEn7qPAT5p5nCLwKE4U"
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
