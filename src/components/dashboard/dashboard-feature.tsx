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
    "3ay7uBos57SjWgfhJcGFqHHn7rYXRF6yLjWEFQVbLHuh3dU2t9SkT9qKaGM5Kzj4Xqik9KbZhow3DMEcce5BDqKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SomLRaESMs2QCtmXq6aTFVz6ot11p5KKagKrW9abVbpdectGY91mJubG6bgdjMayx815fs9KQ45EK25oBBJDGqj",
  "key1": "55RbXyrv5giJ7ZW15NzVLdPj5iowrSTsu3DbTFcSD8ryQ3SUwVxVTJ3xrcBkU3MX37tqFgpAQa8cbS8MD5yBNb9c",
  "key2": "2BrtwZDP96T1MzLEwskUeAx3XVFdV1iNTBS2zsrp8c1B2sXv2gPFrTYzWGFaBpB2G8ZTPoBmiCNqnZ7BiwEnGo25",
  "key3": "37Yx9NnDqthkUeVsT4n9rRkeaJoK9L55CmFcz5fGGsv7cbekvC7cst14g86zDQ1Jh9Zw6G3DHTJos9V2AqcynAd6",
  "key4": "54hbrhbpavWaFjGGnLds55gyMVsiN6rSWYuQnspHKkvVEJKyhABNvPDRrM5WesuSR3AsPTou4yK4KS9s1eAW63zw",
  "key5": "4cG9nwJtcvQ76ndU6C5xDV61Uw3cJ5YgbQGNKmXERVjuA1xVBe12f66fgShGRDKphZtqHqmToAZ1RdSQGJCaxByP",
  "key6": "4SSrDgLgvgx2Eh84of26AKfywsYuFgawqsj2DmKWopjfeJPSwTuGp1ygangA4Q69BzVQBxqHAcKAy2rAwtMkHJgH",
  "key7": "3A6EtuexeNnfnVmGJMnTLwrQRa9uuK6uUJxVbtVH7vcDf59hJdWPfKCFhbNeJcMwfedx4mLQ79G4nxB1Y4gTC6gz",
  "key8": "gbRRU7rJJm34xqgvy7Xkas9C8bSLsVg2KQirAKWMrRhrzva8Pg3eC9Jnevs3Ta8B6THW1TAc47xJ47xMKkL4mcX",
  "key9": "2asXzLXR74xMMSPvw4Jbd8rLvLr65AtNfLztSoYtHyH2kpSuGiphijorpKoJBrEz8XpA6ydYyNxCKhoJHozESuD6",
  "key10": "5MeSxi5DtV7YUEB8VVEVsKAokzpizgWP4Z6QBLygiDRiDBC8bxgxmdGTQy47rYsBWFab5yxvRJ3nhfhC6TTZw2us",
  "key11": "4TsJYMu1tFYgv9uD7Gsn33MvnjEKBqotLT5XRFUuvKeErAPaf6864K7N9vrxeeKwFtDRwDC9DgnuBAFQEZLhzsE7",
  "key12": "5f8u4bZwzy2fRo7Hp3FMurgjLV8L1K58AtXSFvnVmBBR9cfMajvpb8FPmRuD5hidrWXXHDAsSFKRG8ZCjQFf2nTF",
  "key13": "5vtK8MT6qhQVHLRrzWvqa2zkVgyor6UQmzo24TqCAqL7A6abYRgwBHVtAJ18DJsb498EccTrLadXPTi5vDcrfJmH",
  "key14": "2jQFDhorSATWmZV4hWqu6kyVbKWcet2z3KREgyKBSHgkBaBaRcZTU8de8wx6Xnrn7JXS1DcuwqrRaFGmy6gXg4Jn",
  "key15": "Cq8Urf9yscrbufAq3xBkH7srKmmyBihKPNGK4uo1MfdPy2bBttNHGQLcXFhRdtYnQ3p9Myw4fjN2dvqcYC1PFYN",
  "key16": "5Kn6AEiVkeLkWX9TveswCkMvHsfEhLAaN1H9gqeLfTrHcKVtJpwveH7v4w6BUJQ8RGGNDi3sYzk5jGBK6wh561cv",
  "key17": "3HfDDtQJQ4gDFH4xYU7aHCWPGqnTGnNACWBRvwVPkyGhiBiMhnJdxWcXcr7zjxi6WnuWHt5t2eVjKEYCugCn1GQ4",
  "key18": "5isgepyM2om4xLhPE2TPpBfPs6AM9YKG7hLHfTYftmLW6sUrngT1NL53CphT9EyXGjQKRkArZEeHKU8fbrhtLBJA",
  "key19": "1mXfSereGeSUntEVNhfUFUB83bs8neKnDhijbDAAx3vdB1oipqgQnUXh9ZLcDQDgUSA2DKynB6Zn6N4vw3V5T96",
  "key20": "3BG533nu3KXQGYEgCkxSgUcr81TKFEok8VySSyg7g1vRUKAJWYgXAWMvneV8oPFA6oaDa7HrZuKRM4PCkMp8Zzc6",
  "key21": "2yzyzMxkca8YPR18CZN48G7jtNQHj6wFRTDeSoHfK8exxim73feHRwrwiuUsyKdrTUusf8hfzKQwAsDDZB89H9db",
  "key22": "284KkyXjBV3Y84fLpzXCXCGSPM2Fj3MvyjHxsbhewnFmHmXmmCM582gni6QkXXPWjxBuRzK7hmrw3jqD6ejc84gJ",
  "key23": "3yyt6AacNpQ7Em74X8ZahHr3hstYkZrFYefedUeAmGdvFYYd4fC29APCfYj8Pu9V2MKfuzMSBU8Lb5oqYT64igBc",
  "key24": "3nrKGgBmbitpzDKsdCktTkpd38q5WkrDim4CbjnnVCfx9nG7sX4XRYJGembuSFGW4AKdSCRyghBefiWFiQnSnQfd",
  "key25": "4kSpDjdCGcPunhEKBR2wMSiLgxFQZobkzAMTR1cXUTY1eXDqHmeo9gkFuDLPESMDC4tjR7MgPUuv4GN1HoVFRW47",
  "key26": "3SULaTGhLLdXDekdUUaRSDfHoPhQBXiaDaf2wCot54iAJ8efbsKUTtMzASWoDtk21D4TcWqZorfB5ZAiGzF854mT",
  "key27": "3LfhstwtXTdZjXuRY9HPSHcjYrqF4qUbrLMvx6aS3JMapxUngRyTcTfRLjDrTQKqnYrzgmN7MZz3NWwEDEsRKyx1",
  "key28": "4MWACQg5uMBWYTxMK7zZDL1B5gaENF6LjVE7juN1vYT6Aw92tLkxqb7ww7P7LPQG1f5j6UV4FiMRyQFAfj2nwezM",
  "key29": "2c3n8Yerp3C8n5dxaX4tng5Nbo3SQgAsqJ6xMWMycjvTGH5Jihx9nHcVVDDYQ1oscwrrqRW7meQ7uXwDNB2nA1th",
  "key30": "5gvKDhXsz1vXN4p9MjGtgCEoC7PEp3rQ4qNmF6CdnzdE2saUGbyoHSQGhHgQzsjz3jtReUhz6uZgqBGnC3EZdgbF",
  "key31": "5BdG9pRi67v1dNVsso4mve7XUEzS4a6skw5xSiKa5GwmgayVQftzRKNptJBkzdTCgv8tSuvRT6TnTRB6rXDPDhjg",
  "key32": "5c2eSmk9923codLFbP8SUMJnED79nKdfjyue6TCTjGeJx9o1cEiCNcz4d4XgKqRe6ghTFJCRue3rdChfefqcuACF",
  "key33": "5PedFBLU8f3pztpTDsB4UERQWgpXFCa5pz8rtJMdXoddU64frGyCaktq3HnfA2FshpSb55kj7N51DVxBBwcxY2bt",
  "key34": "fxKsQPiRDNqRoT1uZ9gdumizdy7YT3f8Ds48737giDRCAsQxYYuV76vEXiitBvLDYQpxm56B3tDmu67exvmkavP",
  "key35": "5UvZ9ztDSZaLbUZz16ba8skUG1QR89hyZt4bdG1k9n1nR9uekwMHByTF3iERFKs1jarDvXKoZr9Nghs73PtcXmvw",
  "key36": "19TqkZaB1v3aHj5xdcm5ZDJqnwN8m7Hs1Hv5vYsCWYCRYno8WrdBpM2sH7MrAkUwabBPCBKgu7h53hfQCajh5kS",
  "key37": "2oAcNL46y9j15YHCpiBrqE5rbzc3W2WFBLCFiu81TBtYTfmNUbUMvm6Wq61uaFTHdpQ5XbNeF4Fd1tWZkoMmFx2T",
  "key38": "2hB3cS21jfuhYMXzHZA7vKqMUohEs3Z1GJZdKV4g3cnLDSyC9uk8R6YXjWY6TZMT9cpf3ourZxGdLtxsFv7LuUVh",
  "key39": "3hgFrEtKhbkHDEbx2x6TMYp3gpBhnau1qifWPLdke9gubZRN7PnD3XTMqVVRnyXDTeVPRijmNdrBaCfv1pwdBzep",
  "key40": "3L4DyZsFMQeiTT7mCS8uWeRCuTWgkGZPKCZUwnQNiXwkYUHbr4yZqtp6Uwm7ckEMtSVbMdS7vq8YA535owejhUJL"
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
