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
    "2vwmD2WVAaMphnypBTc17jqF4ZT8FnUZmKZNHSGFYAwdttSTjDafE6frEh7YKJuSmtMYVMLjjMAzceiMyB8Ywpj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieE65buZdmK8si3beB4ZqLzGcrnsrLhzKBvzAEkukUq57cQwDQ5cXLPBzRGpjm1ie6VUeVXHqvFsSDjrjTHktSR",
  "key1": "eBUonsagxMG98JkzbrxEuSYiaFPKFpKXNRiDLFay9nThZK8LQ5c7c2jx9kuTzXi6LMTGMBg6kpodaeLiY7TX1fA",
  "key2": "iPrcbw3cKvV51fNHLEgAuaZyvGq3YmsSAVKk5VGZzHXkDe5nvHuCJF4tuQw76NxzUULVLMEnvgZQa4wR1ApMZKX",
  "key3": "2jNPrGK94Qi4HpBCgS2pkN56VepZgeBtbxgnQTceVhn26JdArSY5mSmU3iVzbm1c9pVsQxx6W3S5nJktfYyeey4A",
  "key4": "YfXMsiVrCRoSBHrXcZTmCQ2jz9KeTt6nB88eismVwAeNv917bU3z3CRLVhguvivPNmqMUeJo4Eb6VpQbjPEfhnD",
  "key5": "9Y7Gp3tt996PKiFxSKjkMepvtkyqtbAFTZddsqZiuy7SCdwtTsU9WWqexvkNkSixR2sGwMLLYBxCoQTe4cN2ydi",
  "key6": "Z81z3GQXXJzQUZ5iKyHdUkvR53JCSXQs5hxc2rXgyz6L3mvZuWZcXtQj2dzzN5CygKA3jkLUngVrnHihBPYcRJP",
  "key7": "5TSq2feBugjp4Fpc1CmiqcRA1CQWtknT7ZyBhMR34DqnVFv9vLABqhTBeWT8LCeKixVWM4Hx1aRDZNAydW6rYhF5",
  "key8": "4Cj54AZLjZFL4uwchWyHHmJXqm1zwWERui6k86brLSizLXPy8bCQ1A5fUMmd1FuBYn49QCijs5ymNk8knKSUXS2f",
  "key9": "4Jn283NwcKKQmiv4cw9XtZ1mtJWfJaiWWvchKWvqhMvksZkTvp3KiC2hLSTrkBKXPwhAeC1nAYYrscVJJ2zjRhTT",
  "key10": "3VfqZy222ZDYD25Ng7ucuN65bqG9y8AhHUU9nxhsXL272BWwXdxVWVjT4jF3iJBBu7c5NhpuWDb4op6gBknAr33X",
  "key11": "d3M3ncg74isiRXH6WsvZd1gJQa7WdgM7ETYd57RHxtf3E8a8N5h6VS6nzTKKQfU33bJj2xJNZ3x7Vf7EpQpWFv7",
  "key12": "njg9mhbRstTRQPiQvVQ78jhSiu5JKwxXtFA5S5dUutLCDNHD4f5f2Svjw4c6RgA1L5kHhBpMYzye4dXoa1Pfetf",
  "key13": "5YNcmhDWuHPLRxcaMZebXp1T8Gq4onZWT1vC599eWyKzg6frsChpvmrP7UPwEoVaBSP6yHBcxcRULyNpTod7notr",
  "key14": "55FwJruezaoeuwmYuk2J5StSoo8AsWHFTXCMQJA2P7ShhD2N3niVSTbaWoiuNPW8VdnpiQRPa7LQmDhTdQP9o1Ji",
  "key15": "4u8ekYMSAneJrTPKYGgU9H6FyNdfBJyoRtmXCh7Gw3E72McFQV2Dxj5uWQhLjbmNiGgubVdWp7GCHPvWV6ffjh9A",
  "key16": "3ZmESu7BLjV6pPaPQC1ueLCRKu2zobcndUe7SnsD8FqT2rHvv9j65WK9xXF2cDEZCE89TV66J9VJ4sNKdDQXeNvq",
  "key17": "2TMXjtZkx1kpij5TM3PZnS7cGJC9GrDgEP3KNaccRAj9KBofs6Xs7sPcq1gMPVSGa6puBMJxPVqXDN6nmV4AzYpT",
  "key18": "5PjagCDwa49rB4UzQYFo2Auh46uZQt5ie6Vgt4pHx1eoBPjqv8SSqXMC3FRQR2S7wpH9NZFwP99GqojnWExS5irh",
  "key19": "3hYQTvDomJAePUdhvw6ALEsCZovAA6mX6AQCL7KXth2ZYojpZ1DqtTVKz3QqpGY5mHGiKNjoTySYAdHze2QqSoth",
  "key20": "8huANQNWBPBDMdXnHxULejftq6sogW3KuE7QcZWQomjeQUn7ueTWMHW3Yj1PD62dZSwcQ7dvjVLDjEHGDAmuwUd",
  "key21": "785nmMyrQm9YJmiF9sk6RjXUGMjXX4J2YXmc1jGaSCF1m5v27bVx46WvK9q9s7z7AmiSKLCgzP4tGVXQ2pqJVr8",
  "key22": "2vySkFQB9qL6z4ctm2pskmqyTQjVLyTwinGbyPXSXJ72BmM3zELFBGQJJ6x2YMuhLDWgmYpLFyZ81wyAAvyiqDYU",
  "key23": "5hXdgdLkosefgpoFWthCsutMkakVXz6yduGNUZqEFBHw4KdF7K3L9LdZrM5fzhkDauf7UxYLU1z3nVZqXEubaGfh",
  "key24": "4zuRHW2b1qqK8BtoYkisnrYVYETmjjQ1rsSxBUuqM2sME3yqnpdUt3LedrEvD36aHCoosoc5uCNmRYvuRg6pXZF6",
  "key25": "5pS6bvQVoZzYkoft7kf3ygXphoG6Uc3aMUhFAy4srVe2iM4Mn1xvgM7cWKu94k3RSqGF41TJvWwCpc9aWJBZbRfw",
  "key26": "3e1GyMduyKY5Wv8PK4LpmwdPHKyDs569ESZWCCHKt8G6NpwvSP3yDV1opPCZPgD7KqxTHiApesRP89eLokk5TKMi",
  "key27": "4duqwP8RcQmP442D7DHwj1NdF4Y8iNoNSFzFYiE7xbQuU2ct9bQfVXDFokb2htxjsAzsQpx1c18Bu4BrZQtoAtgc",
  "key28": "4ier2VAGE7kGD1BwknoQLB7197NiPZx6443um6cBA8sRKCDWot243YnD3eHMp1GDXzaiPSUgDZasZTFuQMazJnNz",
  "key29": "5CEkHUUKatiHuC2xtAbRSTaTUSEtX7WvbfwDtYLP3zmqQBYsMCGB7EFtNUS8SQFEwX1aEV15v7618DN3NRkzxaWd",
  "key30": "NEAcPpFz7utwsHkAyqdJfBLaTJxwneYRMP48CLCkvMrvrdmfBcUUapqE4HWNK21PxkLNfNR2Vg568xwsVhyJvVq",
  "key31": "4YLpwHsqM9B26DPAwdnAS7uDGsuVSr28czfqmjKPw1fCRjSQjMtnvoYVnroR4tZAF5wquNgKGuhcX23TAAWcopeY",
  "key32": "4jm7ExoKe9ZAw2WaSnUrBhiro7EivimTGY1r622Li8sgyZLdatN93vMjvQTzjkf75pvNYuq95W5wcSErcnp7MVu6",
  "key33": "2qzqYtAVvhRzfXxr983njwcYqVCGaCNMYp7ZquWX9GGt8UKaKxZ7HYF8HZZdCumNxVDJbk2QZc525v8HApfD9uYb",
  "key34": "wCVDj54LRU5YegpwcZMScP9qjDSuhwqFtvQvxASgeki77GTXtVtDBRj7ah1WvFLtV1QfiDEsowcc7uNuRPQTSvm",
  "key35": "rcu7x6sjfxeut33QmpnbNc6cuRxGC5SJ76AJFgqGdaQaPMzPgL19SVeEGS9Lm3uhhiRvroa4mvJVtTyp3eXEm1L",
  "key36": "64UTTgCwrqkWwEAv15iJLN7KXTv7GMamVtjME47EdyQVUeh7kzqRbpc7aGiqXHBTcaut4hZrcKNn5sMCq7qhzthx",
  "key37": "pMjr2wNiDshpJ4jubvJwAL3GuizvgiE69VYpkhP4EU5oFtmENrA2QFUmyh5tR28LDyV4RUdqhjBEKwJ3vTuH1EC",
  "key38": "2QrFk8GpUz2DqFAdCvGn2eiZX6dh6yEdJQ3ZXFvd8mr8FtRgPT8zohb5YiEagVfXErAHc6yuMmbt2x1eiCECqReC",
  "key39": "gF41y4iKobYVybfZUnwDgKctiTHaSGCREoUnbUh3yAztXwWxy3mC1QZUf66S5QToKcEn7NEVDaxaAzV1AL7GyVS",
  "key40": "42fe6p8nRVmEH5uMMLWxeZeXzEPx8i9MUv59TbadsJYWN9d7GZTM41Y4LvA7PZHrtuKgMY12S8turpoKkrVXsZmy",
  "key41": "4QpbnB8f4U4GERB3HDJs9MmhzrKNbXndxEdjQyoApvj4RtrqN19i3CHL1CRgzaavabmdk7c7gfSrTeDJBJDADyaZ",
  "key42": "3Ex1kJVwiKqD8WoGMPXrMuExX7RdbZotqVxJTcfaNv1RjGzA1Vn2s1BJqYEqnFGMAeiEWDa1HrU4h6wfsvxicGWz",
  "key43": "4xTBhJ17GRS8t2pAB9ZnJmGGi73BhnU2rPtk7iKMbNyLCrD7d1xoBXTiJboscg6NLsJKj3co7CTxuH7aW7yYceLG",
  "key44": "GLUfUkbktSGm8Pd3DP2XCKGsnvKnGn41PNMuR64zkstuMfrjnYQG76cX6mLX8tL3Mjj2YRPWanT4THwcgHshdFv"
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
