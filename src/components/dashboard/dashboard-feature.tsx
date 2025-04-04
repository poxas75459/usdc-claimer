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
    "29aKTpsT3mCrQ38G7X4xD6ywNiSaPV8EtSxkEvEmDAZKkALRu8uKvRuJyj2xRY2H94p2SSrwT8d3rMjVzMafGL96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65n53UzpGeDxV76ZCS44ZFbe4jod3JuNym6npSvfBRc9LXbk1JSpppJkHRAkTTSo7g2MkDsNEe1pXbooY7k9J2x4",
  "key1": "5mPee23jjsSmgAfDkhPhMtPsPh5agsFAFGRcvm3gcrU3e4xw9L5LkFe2oePYhhp4AjuZu5Bg8CP2khoAwCtZ1LPG",
  "key2": "3b6oS6hhXdxdXN7ah9dkYvVED9mQgTKftemXXF6nMGgV3XDfpsddMRnufAongggzziBVNd552vjiDfHwubAPTkNb",
  "key3": "4CajSXqcw8iadnz88o8Te6JcXWysUPC36DeeEKWAZYPVpxZmfTQSe2SCwogkqi6Spqm5JPmUURspXRpEWHCvfNvP",
  "key4": "3kxyYrhVppp2rVQFnwALrpg9u8ueqGaRsE3dzVvcQJRdxaS3UrreJutWjRAAMtCrytPm2pYyjrALSHTjuZ1mky36",
  "key5": "4XakqWjRMhJt3HrUzVVXBK7gPYCqDmsiQa4dUptWJUhPX3xQeAKZWKo99P9LEnCjJZd1whgk41MMcE8yVT14FNqL",
  "key6": "4GfnS7hGth4BAPuDGjSJMRLthtYB7cBfimKbT9kEstmTGNHZrXyJp4TKaavMMJvK1zRUU7hA9g9s8kcMhKeemNs6",
  "key7": "4dTyBoYps3Xdm2LArBM5ACBRd7WVKifRicJFYHDe5qaodXPRe3XFNf9BqwHHj4vdp3pTJVkh8qQ3w3arSSXcrssi",
  "key8": "4JUPAfkidd3MaNhQsS1qYeaZ4nxA6Xw4iEp8j3HZ94krHoZ7ks5mBNRRKNs1xuaGW6MAuH9EDffP7RxGFC3QcrJx",
  "key9": "3Cx64e3Dajo7PSPTmoaByWdoMhwdj1eNX3njhNjAK1phdgJ92KaK7yfToAFQbdkXDxxcfttepr1QTwRvjKisTRkK",
  "key10": "5N2Syu8YuNr4iHtoMKeVyXCxpWdMeF8Ps9BX5kFZW1SEnmmfw8z457ER4XFQLjgc63QoubDoTCPwebb5aNA8T2BU",
  "key11": "2S1sG8WyMVJz5MVoiFHcT5xknBW5NxvQtEAeaFRPJLjhf6x1xensmz91FftD1QVGdfvv4uMAkkWUyw3ojjHKd8r9",
  "key12": "RD64RbaeiMzcWHAXmsEUpUNJR4wXaMQgkcnEuLkUeGt92AfUD7YWCHSveNJxTjJdRG4xzaHXYsxZZoM2oNABaS8",
  "key13": "2AiA1LJ8S3kkhKXTKB6P3FddLJ2KoFmh7sN9rTDaCxKEkahhy6fG3H8gPN7UU4o7pbiV6qMtRaVsNZqNPq1Ywb36",
  "key14": "pkHdTdYh27t2Zn8ir9CMPGwSnEykGYyrH8H8aWFQu3JtD8S1c36uTjgkDFNcqkFPn3BrxhP5akaAzAt4L3YU5tb",
  "key15": "3hBiGX8JmWnCERn3jJyEwUJqnbgCJvyUDoopSbGd1TvW58fdb4hUcEXamT4R2ea4gEADbV9wcrWfh4wxRPwhxWLG",
  "key16": "27tboCxxaKGN1aBvx4A3gpYwdd19UboUQnmmFjF7gL4z9Ui4KKdCgzv86pjuujynGv9HCedvgKc74PJVfyZLdnmm",
  "key17": "21cFT94Q8h4jcfz6F9R7m5tSLWTbWGTaZVsB11kzvHwS4KUMokEMhiAxwirhSNDa63b61aDhbv8xa8W2Xjt76dzs",
  "key18": "677bU32c9i19NYH7eAdFePmCYzV6ua83FggrccQPbu9ePEknTWNaAmJPrucottoHqPAYiytcGzQwW7j6f1uxCdJY",
  "key19": "AyqjYqC6GYkTZkUUUmGgd6GxGCNnUV7AwsinzA7oVoJcFh9Vh8CAduau3SDusy4PnS3C9zfmA8yc2JNaLTj8LQX",
  "key20": "4P6onayxs4Xv3opcMjJKbZN4X48S54kcM1NtMFvkKhFqGrseYQsGF39xHSg4kUCzzwVSxwP1v56avQCN5AACgKNu",
  "key21": "4DoameDg84qossA3QYM6HH7GN7v3BfnL3GFLrxXeLESzMnzKXaxxPes3YBeMmniGKKYfPFJnmbLRGqSDP7zKTkBN",
  "key22": "53dKmzENpvYz5kqHamBTHkbiyfvJXUan24Z9VnyhiBtwbqeBXxDP1Xk3u5ebneKQsvw222ca8eSa41gon1o2oqad",
  "key23": "2zg1hGy6AMdzguAuAJLU4AnNPTT94XQ4fXahuxPe7dTQo3Z2AU7gufC7krB6DCZ7TE85t9etLjFChFPHQT7aWdk5",
  "key24": "26axEKeHrwBwsqtzQRXxyFgcnC6VtHVASVmLSbYU2xPQTKrwbYtURU53bygv9man9WcSwZDNHnMaJnuFpsdhLR45",
  "key25": "4FRTQUsqU3qBjvqQziS3re6KtH21yEXfmDxSoTYKK7UaWbJH32D9FjciupE2t3qACVTyac53Fqpk4dHAVcJF4f9m",
  "key26": "2hJc4CGHxQ84B8jAk4mGgjCJCJdiH49yttg69aGQxPkRGEiXB9NxEhJRVQDZ5JuwCFbArHdShusUYwipWkSK6zAQ",
  "key27": "5pFpyB8c9HzYMxjXwRPfqKhAwv8ZpRS5AR9tfyApVF5kcxiaYEPZjNrSqvgBgbnD7KQVaQnk9YLSXENPe62Wi9dj",
  "key28": "54JAaBMNRaBbZh6J9jVQt7FjKHHci56cdX4NAi7KiNbh3atmHWCZhCJ8xdoPbwCtSstXjH7qrUjccqToNBQUQtfN",
  "key29": "5Rsc6wa7K4HQ6XNazDgf4ddwk9NNeYmGuqKTbSZZ3ShnFh6YFi2cdCCFGucpapMMQ6tN5hmH6WDBArYY8xhUnEf9",
  "key30": "46YQJMNsxaWH1eZdvGyAYzMnYHJBNqAkoMANEWixTEWN4xXspLnB5vtardq7efr3nmN3bCJV34j1E2pWoruNxM4a",
  "key31": "2bBDyUjdF7qKWMFPEAE1hf1iJUGgnjTWfGfHCjsxBTAbhU5tUJAixr7oWTeA9BqrKrT3TM92jbmyAdVTAEhV8qrr",
  "key32": "46qNaKWo4teeK9hA5yBVEci86Ac4YTj6LEYgFbdaf5eW7dFvBZet8aoGUppkB4Szm5gPDQT2NNeGh72N1tt2DLsc",
  "key33": "C33WmiXGqsaMtangAdUPcWfTo7o73xbpo1afWnw74B33qenVSnZ3CyKPw3CmSLZ2MHJaR93YHT2FSx1hJd5KHA3",
  "key34": "35XDwEDf2v9jbNa1kssrvqZX5zEKY1bYRfNRyft54e9VAgED5mUUssmLpBJduQDqpzoDVXcAsMYFFdufmRhA3ckB",
  "key35": "MH5wyrKyEK5F88k9aUWgF1PA24hrBegkh6wB6uubCHG7vzp31xeDY1rZJSu4QonNrerMaQnUCG6mHQ6yGXbj8H5",
  "key36": "3DjQmHHUw8UhmNmGFbbTD4Up6GWetpNsaQapoJ8vasNfJAgqCx5ZSDMFoF1hMdoQk9de6Jxyqd9qG8KJd6W7Aexi",
  "key37": "KoXQT2WDi78qCjZ76tbnVe5bdWWyFBB52Km3AZWGPomEfUAYtwucztHakvDTt32Co94w5FYyzwJGEBXtoHk9MVz",
  "key38": "4j9LK11MvCHPKAUd7oQoTAN7WsHWXMr88ZskSNKmtWqaqXuTHa2gJPf5sqAWHZmZ8hnvGa86Sh4jgLNCV8BWhi9z",
  "key39": "5W6E6ANP8RazawTmEjaVPpYJHigtyVMKN6mEHpBEw6YDtGBB8TSH5DyXZ6PP1fuNGunr3HjxkJ74CXRoYdNbcjjJ",
  "key40": "2w4dbMXEEKWL5DH3nVZGkbVNTi2xAfQvggsQtsirLUaFHJLytyj7pwKKQFkGppD6hptsJs3z6tTRCYZkPPUfaovt",
  "key41": "3mPiAsR3mV2mxwMS46rqXNz9nRCKS3mMtnDfGNEmz5w7dyh8g75bMwffjuHiMExTNBF88JMVTL3MeXdQyDw8WrMQ",
  "key42": "5TxUxdWg6US7dg3QwWdDT8eGyZzkoqbFL9xXq3LYc3z1Emy1tj3njqpTNhDKBBeP57BTZH93LoNLp6j8rjL6phWZ",
  "key43": "3Nzoms7T55pscbSyHstRWuwrpwpFaLpbKncFv6S9TuVF4n6xaAFTNUZ63WW2FcYa3Cmzov3JG8xRutKnNmrUmVbT",
  "key44": "FoekqFcBsmD8WGDL4psWtmKNxftb6KZ6HDzDwqa9yzeu1F5HN4RdPqG53gRJFHPLKtXTJVjHQkErRQL8jxgFA7v",
  "key45": "5GykZtFKCK1tFKmk92C3cpRKztQv8qheFrjDAGbjZAVfk2EkXCAAu15cnucvZTsrEYjGNkevJcUruLdxPhcr4SPK",
  "key46": "4zzFKSCEK7offTtEQg13XVLMj22VhLLgWrci2jt8mE6UKuJp7LYFaLLBtEyKBRMF7s44TBxZnQV34NsVZG6bQxrp"
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
