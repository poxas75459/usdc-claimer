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
    "4omdJvz4D7TJy14GsbCX94hbwXWRQnSPtmFGBcXR1pnwgEs4zbiAgzwU5o89jx5SCBSAA42CmS35dnnNkHS5VN42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TeUtzNfWSKvZivZBawnPUJmmYbSTCTKo6Y7Y7BDMewHgpjNgT7e6AfL1krq3y7j2r2vyEtAnT91ik2rCGJ9RRb",
  "key1": "4rbcEYyWKtk59v35fjXs8SZG2UT6nU9xVuxYmjfvZMCjdJhDKxhHuZwfpnFxLWth6ADzJ1MhmqLEvo8ga3vnzHKG",
  "key2": "3vr9faDHLK9pUW6rPcws1tSGSPJHwqrhRuY6ZfqyxYaL2CSPdadyxeKLhhxZa1Su3CZ1xf8WmUdC9L295hUEmAN1",
  "key3": "3NyzKor5C9skJ9sZxAYr3kojvgS8tundTHttjEBpZs7AfsgEXPNgdaSeTYXJ3ej4dS94yMSfjbe6jAeWoAqeVKhY",
  "key4": "2MHbNsyBR69anv4QAGzzwfmvGyiGmcB3CCRCJhnQVXMkezDViSwFKxCdGJnPhKGKvjXm529J2mPszhKVnPKnHj2B",
  "key5": "5fAXWLHcvoxxJ6WwJ4hxq5yBmXMtpSK3EHaExUAk8QKSgFZuMMuc7PTRGsAEDDRVzfXQzzQ1rA4wgoAHnFkk5LKB",
  "key6": "3UgzJSQ7JFNn9XAzqj8YWsEiu6MWzG2kjK6tBudBU4eDRixZcvnstPW4mtHF39M93XXDrAS2wydBdBLuaA6mPE7J",
  "key7": "55xEGYbPQpZxuiQSYoBAsqGU6UBjui2NaqVSEVFdRDUZmXg4QxruwWGgNY8C1aNhytux8Vd6y69or4N3HTFUjf1A",
  "key8": "WK6fBadMG5E1NmrYKH5Dj4qKHCM7bjRmeFQES5qMougGyByU1mmgCRX6kbfoqUgaNCL9L1KNHAxJpKbcFyeuwMK",
  "key9": "3MAZSjSSyeuMtwTzZXf85PTYP9qqEEvWrrZeRv9RQSyJZeQtJLaUcVfZfbo9BD4RrAwzZ9stNjwYTxiuishqmTyz",
  "key10": "5n2XDUVSg7QQHtzDPDtrBMo7XMLDwFmkSwSSTHWizwbMHKrWhE9coeQiX5MrmH46kAUciPQMC4S5R27YMaRgoqZg",
  "key11": "5EXqvBiQvXZWVz4BH34aNSuDxAGWYFRT2nLZuHot3FNazy4sCn84Cx3znuwEVMSpJNVKSFKhisHk5mQeHKjLQmfz",
  "key12": "buGf3ezbNejMQETpBfm42iwqjgAayrP37ajdrPVyAhQnGTUBNYPe3hW9kCbsc7o7e7zjPR4EknJAjjBGB5KEKoi",
  "key13": "4K85GEaUU3aR7sL4Jno25gptC16U8WVCtWgRftPEw2BP6SKcabXTQ5UrqWH26jcsXV5evtuEsLXsKo1DCaSrquGz",
  "key14": "2XmRzBxYNqCHf9T6uYhPwZs8Yg2CThCfXR9ytQR6YVhJCV3iW1PZdRU8a72Pt9a5wGGZh2gMXqMAJbeD6dKMaurs",
  "key15": "5k6t7Zr8UbE827sAd335KMUvEscEgke1NS8wPMmiR3FkJvxp7qgvt4FhyB2bLsBX8bHzu8wfW6AcbHaLHYjivErc",
  "key16": "5uGYvkW2ikhqW49mDtZTm2msBt8W9dXepsuFFrgCuLE92vptvSecgaKkkCKg8iBM1Mf48ZeyAhqwgSN47qyPTpQw",
  "key17": "3XAWesd2SDoit4YFGJnfNmE7MoRBe8F1FiosPfS4Ag5T18rY8XpzL9W1LfurRWbSsKCPNeqXFUPekzavK3ZaYJEc",
  "key18": "63D8koTaN8wZooLcqzxArN8upvatKzwB3ZDdUnnnZPQEVJUWkQdnDmaQkUERJaFyv8KSne8bupqPrhJAZG13SHCj",
  "key19": "2N3o4QopQL13nSiN7TwgKfEt5BZCvjLacft4LaVLECy3CaXvQjCdgFZd1NQ3cMkSyBhqHZc3AA6kuK9dWzVG3a6y",
  "key20": "Fr8LTRn7RpiTyy1gEmiR8akYaHmr8Qhc3WQeoPH2S2yScze6hTAp59aJRRJZePgcPzHWpddpjE6BYJq381t4BL9",
  "key21": "32S82Rx2kcSuPqjhbr379nZNMVx5r4M8Pwww1txKfam4vrx44fpED7qCJCbt7wXxssKterZjSWHE3sDDcXfSFGRY",
  "key22": "LkmbY3u5c6mxjSSsRq7yGgJ5AKFq4Kx3u1UKdv3RsfFFjWiwQL3vuB9SadAL9FPxyZUe1RURigLkYgsxFJBdai7",
  "key23": "2WKLrkQhvPahwmQURFJZ7FyDLmSkUaz9TvUcBKYHQQup9waVMMHTm6Ec8mka7XA24feq79uhF9ZVa81eKhXtVjr6",
  "key24": "5yDvx7ke2jNwrE1YR5CzyEqYS5wdyQxJtKaesspZ3ekKVh5E56ybMd397yb7br4jZzpki89nGF8qHjQtHu9RA53N",
  "key25": "3gPw9WYoKLG736dySfMVvLZyPzh3ddktxmB4WGKCHGhxLUtfWh6Gz2mXCRMFneEg8MNanb4WdQFSpfrKy4FenP26",
  "key26": "2pgAqRwbZ3HyFunxJS69p7fw3xyiaprjnAjsM5e1XVB53CURKDzHTssU89dTGZPiJndJLMYPDwE8CBbfGWVdPp92",
  "key27": "3vhJBu6BS5QAgE6Nsjo4MD3wf3sBt7ACmLKXj3bVQPLv9FqHX9f2rUeAZyXwryru9aosDD2wJThb6Cr8j9voMLxr",
  "key28": "3VGN3a3bez7Ggr2rdmhWqHEsZewDM2KxFCe4U16GeMB3vWE76CPXBxwDvo7UjVyqWHRZwUmaubrZDDQizB8omDVL",
  "key29": "Yhm636z4k4JKN2oqoKJDcQ9Th9G1DqnUM7FDCugpduBzdKD1bvRzVx8NbBokwA9BZXQc1EuaMEQRJK3vkHTrfaf",
  "key30": "3yPP69dBwLA4vDdF7TtQZfGkpmC1t37AizHNNSA3ngHAo9KdVY1cA25pxgFdMDLDtHZ5PomxRcEsNQYCriNuYicV",
  "key31": "5tXp9y1hTCNuc5sQKfNzp5UNabkvo7TV5egzMa8tPPc9bykxb4pTKCVATGJZiZ3cK5vLKMeHPPzvrHoLXDx1Y7Jr"
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
