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
    "GgFihMjBXCs6NrR867Z8LxNDgKEQmznjF3U53rbXefAxZMZbr1fqQcsTg6SEUKw8gk8X47bvmcw9VG2TCUgfhoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvyJLmUT4dRfZroTq7NM1Vautcry2yagJmfQBADMgvhWGzJrht7d4b44a8gh3y7X36YXBQZpCEfQLVH7hnC87mX",
  "key1": "2KRWwqTFVgpWnuRn4qQAd1THs3ZhAHMxGvPH2JsdA9vfHcM2rrMXcQZsrWNNLfCewmqgFD5yAhrBWbUGASUrJqFB",
  "key2": "53xU4RW84HiKHhnwAMBtG56n11H1h7n2HKZzKuuc6jAH33HaSYns8UW6zDPp9KNtugkYWajjqshtm55DKQwgsHPN",
  "key3": "4UXYciaiRkvsAYM4nFrJuybHRxg36uaqzonVENrnbbnUgLdGtUZkZDgDWhgG98p5EayJvhFi4iPTjDrcMRPTe3bj",
  "key4": "2157D7NHBi4cd8esD7fvHeLSpi5qZQL95wwXUzt26K4Sj2qfwgTG5c3NBLY1LYPoJiYfan6zfGv63svhQsrHG2cr",
  "key5": "2t8S3viDh5UQJJxBuxZJKzKMDUERKrRjQbdqv4PoFYm24Bc6VMRBw6AQBGm2mu7nsnmQrL7VMUXh939hWJ4LU6k7",
  "key6": "4CVviPmPTgJPo5Tymdpfh5sAdhndaWQtb9ZeneGXfnzfkFCjHP5twD8V76qwtgz9Wa76YVcDBv2NeHZpZ44PZTqY",
  "key7": "2H96QeAEiuxN2HCYPNwkdxCTwDiXvBcAyuhuywRxzX65NqzfxzyV2QsP1Lb6XwbW4UEEPiSmvMdHKwKvp9BdiFj5",
  "key8": "44q8CkyJXRrDxARYFbA3Uidx8jpamXSX1Yd1hdYVWh5R6NEjo9SNgZh3oQCx6w7mSxYUCvd3NM62XSaWyuzoQ4Lq",
  "key9": "5G6QsJsiHnpRU9yLPqJFPRzhS5vx5oqsRXt5wGh45ddG4eMEPNfPAsUPLFbMotRBrMYpQsVMHbS7kPSUCMiRcPHH",
  "key10": "UziRpJNWHukjVBQAhxfuMCLzchoshSHz1tE1ijuJyWNLwQeXdi4b8RCXgAmkW2ZHD4jDSQLDccdACh8EYJUxhUY",
  "key11": "4SmM4ZQbuT97tMc7f6Q8G2tepJKfh8DXVc3K8XHiiPrSZrkqBskrCMG7drbfcnh7YsqgXDpyqKPxRAKxLN3timWw",
  "key12": "3DA9x75zbjCsNDR1PmMxA8FdiZWjnpakmpToRVn2YpMME37VFp6iGatTdGLw3CPmE4JZf24qF9DCG7QxVht3g3hL",
  "key13": "5AJXiYYWEKvu9ehrzVYebGUboZUkcXYqNZMpjqa3rVrgParPA42zvBg8pbqvAFbzWTEXvP5P61yrvBBJwJWWCBmU",
  "key14": "bykqtDXJTXiwLeiJaq5NyciVwKqjVYSfHFAsMgz2N134Zdk7TS2fqMwqDTLcyaxWSFPmqGLgu83vyndC2hUi5hY",
  "key15": "4dtZqjSGY5CPNuqZyFGNyyPs81asndrG9znB1FGAQSKyozBQ5EmnKXui3AFJ4gE8n8gJv3bhqFJUeQzivvSsPjmx",
  "key16": "24hEnehScsnEyhBLoZJ7FksAGeXLRRYyzxprZGk4ZxRtuAa9taT3wroxgaP9ycMPQj65uEsephLaAawzLHJdKnjA",
  "key17": "4rVmmQX8T15TWCGsT9Df6DxVNLsPZKwPYEvovndcfp6hQBn8ibu2amUh8HWhP7QSgE1N734vHuj4yLdNYafz9wVt",
  "key18": "42D5uUCpHZdNhfcvKa7t4DVwpyNT18J7fNb6PY55SAsGBwsA4HY6SKPm4KauDnZUmmeWNk62JiGFK663dKcQ6WiT",
  "key19": "Wisk7St66RBSyfKqFwNKQKpbukisdpCz6Gx9RNwCXwpmyb9RdtSGHZ346qqLhwN9L8rGmqJfmhqbjnTtHK232tr",
  "key20": "MyfAuCCMJcX1Nw7TVgDeuD5pffEP3aVA2mxcyg1UDewsZnL3L3pY1f41KR4Xo1qCi9GyuU4D6zqQXChJ8qHiik7",
  "key21": "2TUgknCEcgbE1euEHj8CqLujLrQebqQMhJzjeVymHYghstbegGn9j6REKWwqwAZzPDNzAPEfH6csjtJxjDCMhaKH",
  "key22": "zew6p9m3JEDW8ck96gapCX7rf8sdTQvkNnJMVDzvkmTTNGG6RB56TScxiKiFpRf3QRbmhDC71jWoMTxxUUSQg5S",
  "key23": "3h7N8VryUQZn1eX4BnS8JH93RJWkgVCU6vYiSYkmFXbhTQBguSp1vCWtaRb1aVgyN9nvqBumBC1YHv86vDAnPawC",
  "key24": "32DXz1nC7ZuJsxVqG7aQQPbaTyvaQrd5rGHpLz6tPQXCEyutGBy2eMWP3JePkDd8kxe1pyUEQ4tDZmUqZSpEHobk",
  "key25": "678eDSFDLbGPtfRrhxtY5NVBrwUGaHnFfXYSqHhK1YTPSLrDss8v1wa93doNFUWBPTAWgyKTBD6Ac4vxwQmfspv",
  "key26": "5RKf2wjr3uxERoQtZ69xSHHEeCqGcsLY9JGvrT2SFXy826qJubje3o1tjMDG2zvNeq4aLYEZZaE1TQyRPesu8Jis",
  "key27": "dzVZzAzU27tjRHMzNkPfxEhHEqck4iBsE85UbMXQZGc74yhth9xBKn7BwwjdEtx55J8A5NLAiD7MLNu31ax8it9",
  "key28": "4G82nRNvnEuBYBFGhjUdVzKSBY4uiK95fPq5XVFNQE1zqVSXcEW8tewwCA2VHgdx6gxA2EirF5vd8m1EdymGwt3t",
  "key29": "22zV6FeFxLryTqzKHU297d5tfBy6nqihjEUv6GH47x7J9indb74DCEkc2P9Ldk4QuaTWJvA9YZ82bmQe8AoUBo5o",
  "key30": "vkbPJMPpxiVF7wb869AAtTCMukarcnFgGNhsfvL4EUqQUrHo8MTyWrUHYZznrbc8WeNoMJiVfqvWjxGaC4o88Zy",
  "key31": "3H6EF1U4RF6aF2a4x6qdLugnvcpWDVjmmYoZrEwoQxb2EqyzYjpVCsreAr5FMkh4Vk3QQdEZ4LpAx1kw2imgnFrv",
  "key32": "4WbDBmzUeceg6CSqGeWEheGkpn6Hy8PkbQZnnQ2DkqPVLKVikuRvvL2xm8UF9HS6BF7UpwWueoKpAWEnsa46yxyY",
  "key33": "2YL7PnTmkekcyFZB4rZ235bJv7dukxEZmjRMBiFXPfGNsrQNoowCcT89QuzKjF93haRk78Ho8HkaKr7EfAkX3dGh",
  "key34": "4YB3uRVP2H3jbydgefPEGpFKy2gzpB3BpdgiUasSD5Y5NqCvBbwUmX1aNsbsSXWcPovrb1TCgjXf38a1fqL5SncF",
  "key35": "2Aa7zGfd69MFaD8y3mCDsetPsGdgr7hYy3QXS4iTiThDvens5N85hgqFQZfiUxBUHFvZPEvvEvsCQUQECYuU3kYG",
  "key36": "2tEDAXm6sXZkZVeZmDd7YQrUBa9NN4fqwAP5Je2NbE33SpjAQ3bF7sKxBx8VnoKaRYj2k9s6efTj6kQzA1QTmaz",
  "key37": "4pV2RrPQw2BNLxw6DkESbitw2GApKQRyCqbAQy6xyPu3riKMfU7eiuMMoVmwRYXD9CfJY6vwmeDdoL6wzKwk4BBH",
  "key38": "2mqf1GBxpYW9Ccuw5t7B85pP5JFLUreR2HxtthVnPmUSJuBxqA22913vckxcEHnZ5QNheSn4CsGWiATbirTc7L8c",
  "key39": "3kwqEAQKWp3r4TUFZayL24VpMy64CG1izyGLZmEs9EFiqkmXC1Amey2VNjWyEicWS7Ep6WC8pBDZdVhBrNYP8Gfb"
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
