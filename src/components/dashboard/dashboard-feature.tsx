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
    "5JrkFjHnRdaJBdWd1UysxNPHqUHNyCVFUsssP2KyX9w3sfxRC3g45PbNArEu3txbCjuL7hodwJGPkRu7oF9ucE3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDEncuWhSqGrLHujQrSS9AYYuY1knKRgyjBdhNgNEGU84fYYd7aNh79kLwQ2uyZQHrZKNMCSY7rouEuQKCYpDxt",
  "key1": "385H7UwNaPKetDFLchSXvUgt1kYejLV6tWk88DkVdHs1kdP6Sr2FxUvF1rsbWKzpKe83cGnqusUZuytAHj9oUtwM",
  "key2": "h1AoZN3ht4KRgceAvf1ZADeC1PJ4SYd2HyDvLML8JsmGPLrmyVrxrNDhQu7Pq2ppSLqKcoK8eSWAmEYhJp21rFs",
  "key3": "4sjSkN7FKm6QrU7HB6RAa5WX2pUrXxxbChZAsdke9N1pijcMpRpReAzDPBbCWpeEhoTxttGYnVZWHFJpdK8q2mRi",
  "key4": "4QX7P9qGHzs4fYW1cjxYNkXkznB9wZcRBSBN87NViJFHMMiW9akWY8VHVxx36Sq9Rm8fXvout9Guc3MVkAkT8asu",
  "key5": "VJN2fNVE7EqJudrkRokLhvfAF6h8MPkZidZN5GjfbN15NYgaHxZxgChchUieZpqZAFC6tfKSahmkVyG7C361FWj",
  "key6": "2tvSJSHmLtun6GSrQipExe1WNY5sKfmum3DDT87CJ23C9jHZGNYVYQSZK9rjDqG6F7bcCPbhsy1AB2eyAkWbENQx",
  "key7": "5sD1nUpcrYTZ8BcaUg8pDqwsbeYnyLHW1QZLavasaUZYiz9P25Sgez2C8nfUqjSDKvwEZuE18XWBcYuZ7x6XHADs",
  "key8": "zz3TqeBX7cC52YZmiNeUzXxavyDLu8nMJ3wmHWCQkoBTZsz89eVDjFXAVyvWL2yrQyUJSy8XwNjQP4Ja3Y3sePx",
  "key9": "5fTAEgktTJ2z11ubzUJuVZhn3ZXMiPfKWek8WFJtTcNAigTEiWWMhqWizbVjp99udGGii2YjBeCJuiCkT4hZgHyb",
  "key10": "4zfvQWtGVD6qCsYMDay5MLEfn9x6z4ZjjvL8v9Lbq2Z6HgnLGZaFW215ygVwLPZ6GBoe9JRtLnsbv2uhd482beBZ",
  "key11": "3rqsjX6UgzgeK32wK9L1RnMVBqzV4jUC7R7BaTxmZnRY1Xi3r72sVXw9ep6rnqUhbg4n9rXb64F2bebbgaVc8RHc",
  "key12": "5bxCu8yo4a9HjZEfqFy1XD13JEEihQQXoW93QPFs54QnKgkUUuZpCgjPK5AakaKJwMeShZpL56VtJVQCSmjMS6Su",
  "key13": "29bt6JfshJxNDoemK6ha1S9LGaPpT24URYRLbLPE9pDWpGBKXTAk94nF6QmVqrJQRMBygrXqX8o1YWVQP54xBtpr",
  "key14": "4UvSeWesFmQshzF5ySocGEaPmbr8KyuetUrpjNMJMvFn9nqyMxKSoJwGjXPX27qkSBdKA7HkzWr7KhAUUiqNCMe3",
  "key15": "4eKe1pT31fMQjQr7cpRKfzxGSzf4nv33sVTKYmWV723Nkxk9gQw2P5ZKBFETMY9MBuSSoCBwQA8CH9XJwwcpQpZY",
  "key16": "7Gt1etZ3Aj2Cw2J8Dfzs3NrZXbkoW49YNeKum8SwivmDuhxMnLgWqtFmaTP2BG3sczNxcUC38jG6DrUGjnkAZR9",
  "key17": "GNhUqgh9PqzuALvNiCgVen4mko1dBP8mfxoM3G5ATHNRJgFSXEumqxZhGFguSHD7THffwfX4vqeZAkEzf6G7BXh",
  "key18": "5avotptkV8291nVWZRgg3sLm5YMc9hJGbfxox73biLZzsNzkaHhdPP7QihjDAqi23STwdWFptiVujr4VXodV5T5P",
  "key19": "3a9vzgHHHWq2EMUsGyDczQzS2GqKJ1SRhykvd56sAS3k3oSf9HDCvKWWX74LQiFjPkeyPhXyrUVZpiLUh8Rmi8De",
  "key20": "ZHgYS9so36oz969Cn4owh76qx4jCWhWsCXBujZtLj9uyVD3NbmH42tSPAaLBtBsuJs4xqiddaAPCgcMwFKToxvN",
  "key21": "4k9AbPoSDg7Thnbt2y47sA8kSi2hHvFUVFy7RnNFoGEBCahXuSFGtpSvHpqjQeCx2wNo2yEg8v4YHSznewpQssb5",
  "key22": "4BCJooSbVYXg7k4rivPP6f82nRmWfxmBpHBihKiKFF8JBxnCxXfHNywWC4p5LaSUHgiKFue9VDLgfe6vRMACFL1K",
  "key23": "2sjRaNTX83BzBUtGSCfVc72RSqS8QxRdY4tgJyb29rvKETu1zoAZgJGjjky9J9u8oxYXnZMUtHUzP8X5pBuBASsf",
  "key24": "3ALxW4gfceiUdXuEHLAPETwMaWyUfgn7QaKbmnXKKS1FJ1ESoziGSTYYMgBSLMSin6uGarCgjiLGDKCrfQtmR8PA",
  "key25": "5ruiUPoj5ykD34bW55AvKjadsrQneiG11JT4HtozqBmWR6jNNvW7YaffuK8fHcRqAXbbYGvhVg5iV6RZj9e7VJ9E",
  "key26": "aBotp4eXi5HmWP4YeCfNmF4rrG4KWSVYih9597rCb9Mjr5seVdpCKc2DHj9q7BQJKFvd13CKBdEeVuNTQ157xDG",
  "key27": "5rBbq2v4oXv25yyLXMcfs9K93yxW1YwBrRNfyzYnCj5GDLGCNT7gREXogFyr3gKvrRZqt7fJzhhbk4VcKpuYi12C",
  "key28": "51djLvW89jmbkcBEywyCpLKy7PrpifVQRCfbFunxGSEqz5CspE8K8Dvh8tPQc6W9My8kY9Aa61oYEfyB4LSZ6Edq",
  "key29": "2tC2RkTeydiPokyEEcFoTW7Saw71XYKeCSMw1yWQsmf95gawBsqK95FQuqwtohW1tD8cryGwEWkTpbR8eFjUgmtG",
  "key30": "2NYThvEJv9XcaCvjpKkkFgLeu27xpBVpayrqFHGGdT4SNCZwZ7FQpDKkgVxB25Sn616RTGJm3vPS5vYqdbFdAyyK",
  "key31": "4mz5Si3kuRXMtus2usejxFo5UQitvWLxzThacRvrfLnuz77nM9TARWDLXRdKCZqZSr4V1T9bzwYdAMfEkHdwKtB2",
  "key32": "4DwrNG7gHFQFyhURzYgGVfJrDuHUyGc6DYygJmaLoCGj3eJ28YnPccuCSagodcDqKaX8TZqbPJDqhf5qaUkfEyib",
  "key33": "5ZscBmZS1Xb7ePeMfrkb5wPDJdKcwVZNJ8yJba9WGpB4iM2mnKgSt2EzgbJXejinKZhsRwpiQAKoES9HaJCihdeQ",
  "key34": "5tsfagnZiowFK6TLwusZHV6SjRWkEjW6wZ1XQeexGU27igrLVMRJYVPHUNi8W23e6xK5JSQR3RS18DiH9cfFwiPq",
  "key35": "6cF3yavuSkMWbjT3X7UfiALv3M8wYfi9XPe5HaKo12VAJAMknEvJ9Kzrdow8mDheSEiQybhskstCXVbsf6HzY3V",
  "key36": "4qTiD5bRdHnqjVwviZyQXwnozX9HnRCPTcH2J8rDe8nm6JfZdMi4rF2VH3qQiXp7cN72QoEyjrk2K4w77Sp53URx",
  "key37": "2EP7uPrXWFBxUhyJ6wvxmJZdUi8SH8miquRM2uzN5hje7G2oGjm9ynfKTXLrSR7Zwr5AWD47phU5LpPS962nsP7F",
  "key38": "4EnY4vjCAHAfpETXwSC75NeV69yhV4qZcJGqKwAZr3NXdrkcapE1DpyQ4HQ17NcLKL3JVurYFfW3e7YtyzAMDHWe",
  "key39": "3J1eB8DboRK9XpuFSg3HvmNWPwo23EwA1Po51Tena5BFnZpP7vNjKarn1y59g8r6UDT9J6ZWziqB1Pyb3uMY8CCK",
  "key40": "63yyEdkaQea9gTveWezepME1siEwnftsYQ3ZWDftBWQT6c69SMFGsw4HBLVoc6Pv9FUkcHaN3ERzxY7o76gRKR1X",
  "key41": "5wFtV9nqLiFWWWUbhpZ1B9g856x3MPqGysiMtMb9Nh2qKdcC9k8mXNBv3nhB4Mh4VQxptgCQpjJ9xNFELxYMYwV3",
  "key42": "5Ct4SFr7VZ9TMkVcgdtKV45qEkYYDtJGyGba9Q1ptUAtzqU8Hn7BQg9yyDmL6Uc2pa4JXzmM8sur8kpeALMVZRuq",
  "key43": "5pnRhgL2r4iYTx5UXZypHScRBJt12ghd9S9Exs6mYkgZfxRrV44WSEDAVj725w2g1dmoxNo5YBKGhJS42Vxu4dd",
  "key44": "57hDf2h1xFoyKkRxP3pYKhDTqTBsaoT9a9ph411X3SqeTiD1Us5bpCzcV5X5dBX4p6ovQBeievgPxZPBH2sFPNmo"
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
