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
    "kjj4KQ9xATYVGVdwuGzSPTzzoXATzmbTNajBnPKyrc27jDhygp3froVrVD9vxxh7USQyDuv8aLQ69MFnxtKsxmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJpgH3CZ1rU3XwjddaJoUH8aKFqDKt8JueFtqt8UEoxWT3UWgTJi8tEgzsdzowZMSL6yvYW7SkXwr7W5R2mK4jD",
  "key1": "2t3o61iCMyCrREwrUjnERtopaurnArydE91vrGz8eXdFCe5NMFR6PUwr7t7iY1ZyJXEkG3FyS1LmMDe13WwCjAg9",
  "key2": "crSrHkpz4HZQcroKJZNynhbmrx9djq8qzp634BpuxkjK7NwQZSTydwwSQhVePUp1C3wV47LvYmbXR88XXiMreVo",
  "key3": "dgVRgPku4pitVDbnDdfs3cr2JfjV7SpHu8QWgVBVX48NMRHyHCTq1v8Rr3QhjyPxMojALMeU7AsrgVnSmkMudg3",
  "key4": "2KDhETSDq1t3d6F4PwA6KuFdD57fmG3AnW8xnk91agjhaKN48K6K2fj327EEGQqioLStn7BveoDR4EUifPxS9xt",
  "key5": "33AfRGbfgFpN1pmMMTrvYdpCxjT9LTdmtGMvL8nVCsDNiFUXTP85i5KP5LZp3JnP9xRFF6uQU8zLvZbiZK5r86iD",
  "key6": "5a52xfhgd6rg9JgiDuEZvxVeMXEGkiYRyDmhGKa42eLnVK4iggUyN3FqBrUR6DMYAz8wSASyZbTAd861d21oNzCH",
  "key7": "48UqjgfQjCinWtonhDqNW9LXyZpz4fjxzKCrrTXAV4a8bysz4egeND2SSMb8SLiAv2FKBKwL3rESf8u4ygj8uRHS",
  "key8": "4FF46Y8yVZgK1SnWwrTCXizHUvddHnuGiTdVjgV45hCHx6uQ7n23RLCBb2CFbPygSTaBZaehekqjz5iUgW4YFvEs",
  "key9": "2PzLp22Lroppj3AjuNkBH4y4uzoWW6n4fQYVhNXrvZVsKbd12rUc8RN7PTe2Fns6razCmsgEQXEELquyFa2xC6D4",
  "key10": "LA69Vm8oH2nK8fo7U6uEzTZoP5YXS4QkWd9arJaBT3kVZzwDpoErTa49kgyWByxsifDyLQXMoxDDsDjv9eG75Lk",
  "key11": "3pUxvsuNkBXs2A5i2CPVQqcWZjdPPXBymtaC6HcYbWC6QxChBhVL9QYUbotBMYaaKfoaczefFQzxd3nNF1KnVxyq",
  "key12": "4bMyiiyxf2TFDcPdZwCSiewWFhW9ht1pqUZA7GVcakqAoYp84ZctKwjNfwZxmWvUHg6RrxfVZ72gw59drSrqczGp",
  "key13": "5FpNGAC9ZrLr4VkkgpBYMLTPcb1A8LXsMyPkWLHmczvkWM11BoYekbrpbCNeqXfy1XvaefY2dqiCnga2jEBjDCaC",
  "key14": "57CHYfg7KrVMYZKwBNUpNkFZ1du3E2GuRR6PQaPaoJiu3Tdj2r3xxVgxP97kJBbWQegjLvHHg2NmQR8Xo4tfdZKJ",
  "key15": "5MAUFJii97kXM6apdcJnPCs4PYiA2WJ1HzboAXSx4Gz8V2BcU2AXEi6G8JujARikjxRvojaViJG4MDjUWwXfZeZU",
  "key16": "4sSYhdoCfBFHr3SymTUpFgkcWLnyX5vikLbarpzYvgApqaF9WckyBBCv52W8xit5x2dxqPY5hHjpRbGjjt5QsXru",
  "key17": "4T9Tf2FSABFr1VKtC9NRXJKxSuJuaq5mrF8Lj8fNN47bz67r1Em8icRANzxPXcr4JkcjNxqrJ5J5P9xJDjVCYvqt",
  "key18": "5tveM4oGkiKCSrYbCLPhDf63UQqDKChtJF3iTmndcJ7PvxcA3Ea9YAVY9tR5PdD5aZXeXUSKmVjb7jedt7EeCCkY",
  "key19": "3s4WLcWoHP9ieAZA4XKXQxSMeGiejAtf7daJoMKnD8ZqVnNwR797Sc5siJCwmm5vy41iHSxKopQuabxcd8TdpJLm",
  "key20": "3U63uPqKrtT1ffFecMzP2MvqyRbqVug5phRKS5SjKZNww5JTEoMiS7yHUexSodsYVSEHmiFjfkwQa9UFFnndJZFc",
  "key21": "4wkWKGygU7hLNQDK4T8MUsDAjkDNzU9PpRmAcnRWTBrfvc7cmkzrpmAf7idQszpNvNxyYnbz8Z5FuJdxRmqm1JyU",
  "key22": "539WkUdFcgLA26cAFLc2g9U3LcTeptauywyRQtxsD2n9jdwvYMyrmQktsDcxMC6C3pSnNfBeJTj6cKH94wPhdYhv",
  "key23": "4rjfS7xCcLhqgjwnH8bp6Cvwfk5ae2XcTMKruD71GrfLAFJvgxmiP3XAAMrky1oLxriWzKDSiqTqKPFh9T3kiuLb",
  "key24": "2MZfFKsxBtXWRoaSfr7eupWNeNdyd5fWWoqKDycuLFuF25Jeg2SPRqmKbQUiSX48oEcAdWZ7LUaD7cbUyEgCfLh2",
  "key25": "4VACnjRw1MkCr5Wz6jj91KYicb4c2UFudJBStUQFsiQYJveS63ZaXeU5DV1vF5Jg2gztsyoNEVmuHAcDbw4Nmdh9",
  "key26": "2mmb6SPdoSXzUFnYYMqJTWekMUMNX6PrEE12SreYDCwDUQZC2airm2bkaokjL9EkguDezTfQZ2HPi2sfMunLgiBZ",
  "key27": "2DWdUuRiwEFfUwqsNXJ6U1V334s8xUAsmreRPF6EgXtvF8fbxXnHMpib6vBaaQZuK4DjBFpeWnE8a8yEuAKhSpL1",
  "key28": "v6x7fagiZXHx2YuYap6hRLWaS4p2JgQYND7W1Mfi2f4TLSA3VpBK9yRdjJeqoBeanFXforo5CpeF5bGF9FmXgGf",
  "key29": "4fsYKMrPThBn5CHaucxr2XUEnoirZejWM28LzZTFB8HaL4J2BYuiHkeNUchCVa7FC3EETCiMdsbc88ZTaxFD4BUz",
  "key30": "2vcz7Ves8Md2TXqBsAjyQ79WHhenMDQVX6Qc6X8KqV19xkVrYG9wec8mTMV3PZqa1UkB9hzfUBaMCLLpx5L894UY",
  "key31": "5Lc9B6ewLETb88L2gZMDBz3d2iFgSGP13xnrtSa27itzjAWWAX5Q5XMc1nrTmd5ZsidoCqZt9Z67cqtcKCHA8ReQ",
  "key32": "5gGMqxswVy18ttQmzHKPUsRmRJktpjcMH5aBit7Th8xtwHnbdxSY6cgNGooBfHUHjfA1Sz9amdEF5Xz3U7ddE5S9",
  "key33": "qq7p6MSDLfGJgpMXfHgFBQjNN3UefhVvbR7WTPgYDB2QZNd1tSQas1s1YwywRRahbrhkPoiYKnywdf2Aame7Xnj",
  "key34": "5TrnCx9wnupvFpNNbyYXoQvYDb2K3GbYZrAjp3j4EBqey9ZtvJVqrUFxbZ4KNkLHs1Bjwyi5QWH8DHqQ1WChHVZM",
  "key35": "5qjVRaA8qUb6JTKJsUGDTJKHf6aCJgcDNKHVQHFNPvNYrex9UPTzUYrS8jTH9zsEVkDsBHjXEKgozNkt766UxHNL",
  "key36": "3g9nJcZ9x2BEaZDb2wQobprBiaG8m2LuvUQWW5DKtq4GWBnTy611wPpcpDnk8988FQgRyitYHvosJnmQu6g4LUwT",
  "key37": "27xj3HjngXFMykhFGdyNDffQMR7zay2f91H9SqJLdUnoAmrwxXeqA1NoLepPbD92fLHMeLcJ4AKMj13Bi7qqX9bW",
  "key38": "zEcuMdKFLtnSJe4dHRqoX5DHb3xqWJiZtbJ3pCea46pMXUhSt2H7NQHwq2KxRHb9pZYQVQaHZYLfb7M13CP6E1X",
  "key39": "RVkfzTqFjxnALxbnkn3ss3Ur6WL4hT1qCv4vKfb5j9UYftFWU8jWsYS9QkDUwDqQKiEV17bXo8EWWb7KUVZ2V7x",
  "key40": "aXPNMiiqqpqsDucNoUcVcoVurRZH1i8ju75K17KMKUqwpSk64Di3jnTMTZwcepY5YnXKyRUw7TML5nRGtCqbdqs",
  "key41": "61VXhyorG8RUESncf8bE5vYE7f3eWUhLC9mq4YWePhLMoj4Pz25dQwuBgEy6zdvpMJsjKtgMKQJ6Jv6QFRQvc9kJ",
  "key42": "5Z3YpJiWVJA8J2zjCZNH9urTbE91cxXtnKSS8i5uUYYoRtnLHV3rZaB6SLN1WZAzuMXEiGZehifjaC1m4TnRUxC4",
  "key43": "NGKQ4j4XhxUTyyHk64CP7mAM7v21Xuf1N4kPbAsnGnKNtSEc1vJVcNADVbB7tjZomuXv46hzdZZYYA82fFD7358",
  "key44": "5dYNkPVsDHZBVAAi4EVBi4tT11ZRB14kBTTmfC5xr9fjcmcNdZAx2yfdWLpiprZCQYJemYVxmvRkryxFgacZEEWH",
  "key45": "2wjsLXBbSj2Y9wR2GN9Bt1eJHFZjp9Notzpw9BQgLseyshVrCZPMjVsuuzXq6vciXRrVJUNTx3Cx1zj8HzhYJs7M",
  "key46": "4isUt5pc2cPjMs67MA2uUiDCVFyHyyejSk9k7DkrZpRcCudePNC93L82RsA2uFjVPa4bkMf2yMpNforFUxwVCFQg",
  "key47": "8rCtFU1npTaxJJ7Gox9LRiLuWZTiLWyZYYppU12r2z9wGGR94gBWFQcREVcgt31ASRxpyDNHvQ2WKbozvbLkVb1",
  "key48": "3wemnf8Z57FuqxVM7V5vnzK5n7QafAMyctsHZgYGYDsLP47FWi5bGtefkyQuNHscVB5BBB7BwKxdRH1PBddNvEfr",
  "key49": "5Cy1ZbfdrFy2HR9xUaJ2eWhDZEPFYTBngtbPhWfxxEe8XDRFX7gKfXDVUc9SUwaKmUDTdQKHktaMbKCXJkQ7LXpB"
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
