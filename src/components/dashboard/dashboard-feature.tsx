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
    "4zuVb9E7By3bwBKbG8qWXCKpkHW6RLKJw1CnKC4u4FqbToJraYCycYhH3Gaj2843LBo1FVZeVi6u8GSLUoNYJtF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JoVYBkk7qBT3NotwrpMbhS231jvD17QveKJpe1qUT5TJLqGwPShDWAbZzj77aXNtvNoPwkdpWAHpkBtasGBc1cW",
  "key1": "4xAMoMdzSHfgJmYrt5hnFbcuT5Lv4fw8uesB7r6xWNCnjtB9wjyd6Es2bLRzav67ijTq9ru9ZYsvV9fQRtweisUj",
  "key2": "3ryBU7QiHsqK9KitzwbmfSzA5brg45TfRKrjq1Pp1tTakXFKNVpErT7snJ8uAFdugRiESYTbVQKVPjuBm2T6x4rg",
  "key3": "54MC1QMLwgmAzZ3CfFgxFFTphZQm6XJgLTTwczuLBe65Pmuj24s7Rsw9H2JBAERSzMtL7nti8Zmv7TCTHwvBovnu",
  "key4": "5gRr9iovQmjXBSc43erXWpDEZCqTXQUpmWEQma1tWF8mzo4iDoDx9CPNfmfRc4CTby4MK9FaHNhcSUjuXPgFBHJS",
  "key5": "5sU1SCFi1bwJHcGk1FAnJrQmUZ2Vh8kcPyNygvNXyU7VScmgQFUwek5niiXya4GV9i2swyCGYEgeDeYTK6zBkSjP",
  "key6": "kHWDysNwsxsBkPQmpDWZtnfgS9cdcRMX2hSxMk7wKSbk1B6zQspjtXp5tYWupF9DiqeGFcgpPcPpCsa6iyuXitN",
  "key7": "3FQa1r8LSEu49GouMPbUaHJmqaogTpwVKPmTaQsN8QjhuBiJm92HcW9QDukrfuRc6Fw3ZtFkpNxY19jPoA31kX8A",
  "key8": "5aG3cHJMKihCa5DPVSrBB1yt4wMQz9vPNEx8TzNwro2oFHAvGoy9LWhMKhLa1TSUkAi3eSH639YoERGYSWwBNnGt",
  "key9": "5mgbeEC9VqiEAHFsNmWNTtzxaoxN6nw7tg6zR8CuH7Dp41tXJvEiwL3SkSWQSGvGmM4LUT9tmtvpt5Dh1ysAwP1r",
  "key10": "4E9fn5SPE5SUqDGq9V2PjCPaM5hPSGBsUEFc2hjr7jT2XN85Szrc8SU7agGYvbC4CVWADcuf86o5GcM8m6GHWhR6",
  "key11": "2PtqFaRLy2iGvuMYW2UNNEUfV97c5zwrg99StE6T8XGCL3Vv5EG5NCsWGkPFERttEenNgCtMP9AWQVzTRDf6C8Vo",
  "key12": "3NMzWegzQrofqthQVnGjB3sG2wMphJTF1LiP7Z2tJvk8C7n6NpwApSoC4oNkGDj9keVaw8AbKYAYi3nBDgzq3eYc",
  "key13": "3yFRh7WvQM9r817x4cUCcTLpTKxfkeZgN9tNW4Mx8SFcxqUDT7LPKjW9JPXRx5wJ5y6kK5FA4cdRsHAV8ZALPZf4",
  "key14": "3R72uAtiXp4hx7B8JkRo7aParBJn3GHpBoWxKTK9cCVskf5e6kE9uNh8Xv7QrLkp9H3VhyWizBoJ9G5CwyiaPA2J",
  "key15": "DkntZa5iH73wc4eUmcrQV1S29DP5Kjuo15gG8wAoA39z2iAvzxNW1QDXo61CnFAHvkJj52bLjwXiXsLCP9uzKe9",
  "key16": "31Hs1UHYepbsLywUzgTSMTfpSuZm4jyAT6pSkXEa77boRzt8EgRuaDS3jdqzoJMPDTjY6awiVPXFaR4hWjNDTsV1",
  "key17": "2GCk31hj6Roo8QKAgcEx8rE5ZrgRWzhSRALrWp6B4xhnBETiFebB7H181Y6Krs3DXrZcjJ5i1KHGEtnJcPBfjyBg",
  "key18": "327e488DHtrfr9kdRenjgzbuL3E7vQF3UxRSVnz43kwsWf8ojaZFuNsPmVigYGnFW2HghhvQn58BWdnHSDKi1qjR",
  "key19": "4ZRhoSxiAUyFSXwDnGZ4VHw6KddvqpNb3bimd5gzSCBPGJMyza7BpxXDedzdq6dgD9cGsks7DdgjAy26dh4PTi4a",
  "key20": "2EfEZEkJLSNVTbnf9bbi3nDRW5DNQDrkiL1ZfqaAdt7Swe3tgioQYVPicHcYf9dGZbZaeD5avY7ihmjZMisRM6XM",
  "key21": "4tpmLtysDyERP3fGR2aJs92QedmrSJmj9wmjuhYNPq9tw8QShSvG2wpF5UxaKhRzYmaugJu9LGAaxnPxMC7Z2L8S",
  "key22": "2jUKjUCJzVSbM6592JSKaLfG6jEsYUErCwGpZwz3gdpGx6X2kNzzo8GUNpSu1s9kt1rcsxwYegijvqyDSB9LMsGs",
  "key23": "4oDt2NBAEMwsLSPPG4WvCZyoL9WnQbxYQefh6E4qrkHPuALGudGKwLyAChpxiYAiPVri4naZqTuqs22VGTBgoyJJ",
  "key24": "3dyWu1f2dvSJ2ifoaYNTb9SFZ7PPuRjX8p5jF7HLMTwhGTXSfMYebTw5bQsQEtNs9rFMGMzP8jCWJrtn7bJ6uVfR",
  "key25": "3z5Dyp1tzG62wysdXURmTouyYZntG4ErJmsHFHo37N4zmbdt3Y5TGTpacsPyykB4xpmF9cfss75YRQ7mwP9uXfiY",
  "key26": "Sqgb3k2A4At39hh3EkcEQdkkutq72VZ6MwfJKnWa8KTFgc7NzDsKsjajucV878RAz1hqS3m4fuHx7gvzkj9SxCH",
  "key27": "76qPasyR38NS6qGgnH3Q3HgYhtzy6JTcDZe13GmDCBffUUtrXBHmBH6b3zrCLPpA2NoGZRb5DhemsqR7jB5YNjB",
  "key28": "53SGKjmJ3sCCxAtjPcZh4DhuBbRuC4h1buR7FwrZobK2CKbiJX3fs8fa6B2dHiCuz6X8ccJAiLWn6xZTa9jvW6Zo",
  "key29": "4juRGNSVhXYzvGEauUurZyjPwhJFW8bjERUsSK24EqJqcvxKQS9eK8KSzoY1sWMU6SVoMFQ33CeWa229C3WjZ72v",
  "key30": "5FdzooYDbn97mgERqsDmY8PbtARu3sAgtSV94NeZwtJ5xN1UdLJsJWMFDEvxRfJaupnpmMkL5x9iwZZzCL5uWidn",
  "key31": "4332xmHY2nnGYNKc4R1fjU8QLXh2MAWhFc5p4fDLK4Fhi5LEsu7UsN9usSVvoweS4U9YezRnsRhxUwrWyU9NTxXp",
  "key32": "5URLYNpdxUYm2MmgwTZuHbZGhuK3esGMeSELURKU1khN9MpEtjLr9odnHB26JfU7dKRAduEGfDahCSWevSN2N8WR",
  "key33": "3nc9EPnyYGDS28w2ygMA19B4iuEaN4muaDa8VkttyYNbij2zt3ySmvwehZcEtf37vQ8wyiYwjuZc1ZuWdiM9wbLW",
  "key34": "4ZCAFCCAGnnhFCF6ydqqMSPBsCBL48WgKbdYBLtpYzy9PFGQPLqdSJdhHeDgGG9XSYrkPx5mdRo3JNgTgVmnMoFG",
  "key35": "2R8S5X2zXgjWsDQeUWfLz79pVtuQ8w2kxQGdPy8kMRVcwv4bFkxqXjzuPH1xSD2FDpXDVukP1f8GyZDcttECy9yf",
  "key36": "2frdLdXhWuf3LuLRjCKatSrMc63AT83cNaThU7NetmPAKBuiiqvmKjtqS4sosaguXkPx7Cao45jafntngGrLZoXD",
  "key37": "3LYSUtVuJ75i88cQCg1Tj127e334p8ujVLmMA4mWM9ehpbLttKgpjMQd64pJJgtbAG7PWEc8aKfSbTQTLNvH1bi2",
  "key38": "3niH3Nozt99ZUk8EEiTGqU5nJgZAfCbN8fA6AzA9g7oq3Jifx1xd7VAGUTekDKLcJ7hMrJ6q7J8Wzff8QBZ6TVSb",
  "key39": "5LkjYzYgxdVnXwLDKdnAJQYhiAxqQBqJEPtnaXVExTK7SJpvttod6g2pppKVycJLv4Mu7ZMGgpvTKxkUM6SnT8iG",
  "key40": "4WHwTw2hh38HBQ5u4RwZiyBu5g4ey41aibmBPxesYPzwqcEoNnfiZjjV9JMe4gGVWud9fEZtfmYeKkcUnFM6czwi",
  "key41": "23Qjw1xcYywNd4jT2K2tZELCKeaGWusTgY3mdKMURTHTsnkhPthwhBArK9rChTcTMiGhB5ckiShmkt3svsPrhhMv",
  "key42": "5YT4tn4jsw8pDci89Xa2i2BzKUHwf1eWBD3s8VMAiMyYctBaha4gzHs1cAsa1sQ2SHRSDHx157vkqqxC1xAZHXDp",
  "key43": "8CrekGHGjhoTvPWwFTUp76mLqukxJ5RGKgYm4kdTQ6M4Ra8CtNK46yES73U9YyUmW3GdM3LWRJBySD1MKn3E5sw",
  "key44": "4nK2ZB6f6UQj89FYzoaVQ2XMcSJnS8YHsH1FM2A7updhAcLV1yaqYrBuWLjTs7baKphppQcG94DpUk2Dw98xuuBz"
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
