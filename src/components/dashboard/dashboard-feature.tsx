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
    "3STewtrqCE6mjGMV9K57SfmgaNjwvRfU9eZZdD41x35sT2nVMR5PDEWcRvw8Bb8p8Ww4RfDyNirroZjxDAewHHNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r56LGAETja6xxrNfzWVn36vwNxftptYt2CnFGbA1fZY9SPsb596yjmNX5wwzzFW6VnQ9DAawLyjQvezeYbq3j3j",
  "key1": "5VWiQWAs4SaNM4AkYKuoZ3XivCwJx3k24SJmhZfFosfGcbP87K9XZidxhjYqbxYAp3imkbTwc9UvJaSuP6gE3ac7",
  "key2": "2zoHqWbTZ36FfCTfsitimG2URHrQLRq6vWN5BdzvB5cSK7Bh6ZQ9t9WmBrADLhnsYPmAUPxvKQwyYkppKy4DeK8b",
  "key3": "3Qr5Bb28MSuvjsy24WjGeXoT9pbMxXcCug4QcXxRp8Bw4eBUeknzvdNNb6q1SdTotxYWY7Ui8ucLBhWDa7Jk1HCY",
  "key4": "3rSyFe8zVkTNgLzeqxkXkav9XoYX6GpJdQDSkdY6Z2GumzU4gwwcZfq86PPf33o9E9ingVvpJAhjqeNEJfTMVvM4",
  "key5": "2jUGNd2PxtqZhFxmaLvwdkQSjtRrocZRsDsYvxZouykGC3v9bV9gSSbETUeXnvjAZdgTfR9hXvhGutFamvpK78po",
  "key6": "iewC737N7gQC1jGZoKMderrTsZ2c67pBhYtUXN7WnBDvg85zkckjjauNqMs5e4qejK3evJBbRWCqeVnktoFj5wK",
  "key7": "4mxwGAbvsAPK13Jd76vrrpkp7sDB1kRS38ksEn5Je7S48bsosR7q3m6sSQU37X97CUgN8PLPTtuiPDD74jiauJLy",
  "key8": "iDVE55wkT9etVKTeDjJJw1pWwCbDkkenEvPeLAoniAiDt19eYoounrj7KyNWhEXNmQJFGJVpQd6JcAjmqJNmccK",
  "key9": "B9To4YCAWK6Pebw4PzQSPuqNYaMjRXANu3oidYsdaphiN3ALV3HNzrtZHTV4XeaJcj4XXPnuqf6N4UQ1PQcQHLX",
  "key10": "4tRk7tQHDgb5aAHkaKQm9HoPktZ2qjsiDDpTSNUtqCcAXoHCdc5nFcQafsWRaZgnf5bb392kTSNsJ8rNCf4LfrZM",
  "key11": "2HRXGNWUztFNosauQzTTBkKWNouNCVgBZkpv54g12x97Mmn1w7jemM84cuMiuMBByXwbozBBRGqqXD8DGKAB2LYk",
  "key12": "3cYRDPMGjeJBS4YxFvtnFnJ76wRYQMJKbfbyeRn8J4WJjWeucR7QDMSGqqKUSszKUCRHdpi5ZVgPFujjTjtkTUhK",
  "key13": "63bk4oP5Lf8C89niaXovFz3seb3vyiJo1Pinh1sHfPUMb6xt7kSnFPfW45XXLU9c6RrjfTqKdVCXW7pDo3gBwCx6",
  "key14": "ntDqe2G49xx32yr4ZyQ4o6GuB4wMCpGQ2bptJFyQjUm6YCJAPKQStmg8j6wsqMrpL7VhiHK5ERFrPUuxaN6To54",
  "key15": "2tQ8QLCXt7o7jc2Bfm691iWuUi7432qrVP5h1RaoWuoBGFA7cq4pTUvvGSAtNZoXDSiaKqzyHn7UFsmpSNzcAGk3",
  "key16": "3QSxyyCdni6PYiGXJucX1UsiTVSR1zcbC8dcx6LPjgveGpKXmc3zi7hgJZj5N3ZUg9Exkwo2E9ZWh8MwEHkXipFE",
  "key17": "5Et8fBvepV8rJFdfz8djyku2tetqqiLJoGvLavc5PRLPaeUoN4iiGAqssL3vtwJwp5pPcmTDuYUNZmyoXXiE1EVA",
  "key18": "2auTvGVb9hrATz5ov3RywaCsJv4u9UCzFLqQvWtyKMkPusesgDfPJmGuEJZigswcseGuRHVUTC99mvxi7V7inZwh",
  "key19": "3pmhBADebagqUHeiT2E9gnK3QZeH3nnjQAbiTXuhU9UCdMb4qmZWTxWQQRmgWHyiU3W1jFjWLcEQJmeAU7NK7Uvj",
  "key20": "5vMvVs2qqvtEmcr7Lz95tEWDuoCHj6D6DRqf7trQ3q3oHHRywBGHqtofru2qjGqBhaDuGdgsyYo1LPLsKVCmUwsK",
  "key21": "3uuXjk5bJ43bT5nigNERxL2kZTNf4Zpeh4nxNrSLsCF8gmTpDUFPTRRSE8VHYs5dePWvixsbRTXCAJgQc84gXRwh",
  "key22": "VSkH6F6XwRSpFuwdrkiA4t7JKbSH2YfZofhcbTHctbR6sZfgTApo9e5wb84KTFW2N9EEhDwaWw5Yx4CyitWCg2L",
  "key23": "5XNpiVuwyn5QhrQjRMi1tZy2bEJJMZGjVaUZHbGEs5XhigbYsJhLBxhv9qcYcpZL7Gpvr1MyqxKVktqAxCz2q6qn",
  "key24": "2mn7TaVj7gpRMsAu5cQY2u2Cn4PfubZpKvaV8KBvyt8Zfbxx3nYGnVJLw8bgQBLPYVmphZa7rpBe91EzmDiy1nQS",
  "key25": "2ZQtdQLhoBFKRRpCCKuo5LjZeuGLRaikfmyCwFx2wizAuWEBPYzG5vGUqBohHyKhdFeGMM91Ht4emmPXnkRMhRtP",
  "key26": "6DUj6h2xaKeMbZXcHVfk9BW47CN4ziwTnZA7T6AdhJrTU4uErFJPqs87csW9NS5vG5PE4UKkyXWUSTJKTWLDrxw",
  "key27": "2VeaDtdYDQWtnG7xneMcSaBdJ6Vmbw3GVXFFAn14S8NKG5TjxAFHTnczCTi2YP3JPBP8BFxGrcZkniFCZJxisNdm",
  "key28": "3NFkuEJV9qDiL3igsPf2Rkbbupceg3PcyFSsAhZJkPwuWifdiZYWp5Fiv9s3XpYmfB1e9D3Feqrew7Fk435ioDXS",
  "key29": "4i1ZeSZi11RpAxTDm928YhLuRMW79kU36QedJDtCXbLDmgen5wzB56nd68AZwAeKJtYfnxGpnBGXzKeGToskbfxL",
  "key30": "FGHsNaEaq5e8kFE9EC9QSF6hLJhQuMfWTVVBBsoKfUDQpFi3oGjJRpJHP41wwXwoWw2PWCXhrhq8591KxGr4Txh",
  "key31": "2UqYUa8chXCVzDrKL34tD8r5D2vV5VBFcPYAwDTunC23m5MHEo9M1vqpeMQQAXgjA1p9KnfdLfrZhakF5hwX3yjX",
  "key32": "3HRTH6CDkvg4389vvGuYc4NfxUd5rzGjJh49mza1VKFTKQX7ax88PnvGyodZFyY6xTgYFhqfuAq64Au6LyVXhAv1",
  "key33": "65FDZwVH3bK9SgnkfcHudLD8UH9vetPL3NrJfsxYUcQwXXxHUyu7PvykjYzrkJfVqyviGvCP8Dzj3YPcuu2UYovb",
  "key34": "3G7G7P3APiG8dwJApbGwYoHXuuNeFCY1VvTZi49Pocvhdgs7s84r6fPpzgG7Y9qUSxuCNKgyFYTfr6EEc1sC2LBP",
  "key35": "5NUW27DUUkgQdgFrjBLSSjT2oKba5GbBNVhPuMqz8KjVjSzGLKVLswsymUqqBps1Jeth872ZbGV6y7za9ebLiKtj",
  "key36": "4RmC4wfk9d4eFL89PaqNGGKWQLhFG7Pi3BqMJLvksGoMTfZzLgiFpxLdNAPppR9phV4trbUao2yCDBQaVU4zPgCS"
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
