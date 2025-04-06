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
    "5NZZaSTMPwEGJApyts2wkYbEWYGNYZecorwKKwbMWtBzJLEx4xAZxCV5Y3QZA437RHNe9MwgHYv94NbQKEptUsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWoAkDTW7NzYZ8P3hokKSZ44SngysY5XY5qgj1FnsigfQWPaZRbkPdaeVyPT3Nk3TdoTLr7icREh8SjyjFyaSyU",
  "key1": "5hL2XhqVJUYjdSEZrKXhBsShxid7HgXcJVhmiqTesLf2H1VjBzpyM8ACtMG3q54w7ngLFQutgsQWeyiKPGFHPo1T",
  "key2": "2ZpX31U9z9Wy1p65kUQMvxUW4Dvug28Tj9JDcfeWmF9HTTzceHZ48QSp3CkLt3XQYW6esTQbUPRez4ZCncnB22zS",
  "key3": "4iRRYmDy3ouTx9qgvdc7gWF8Syp4Sb9P4qjviNUh7LggXvEEpF3moc9KLvVemXBr3dZF9ds3dSWwbXeV3JZB93jn",
  "key4": "5sphsxBaCF3gt7G1eHYieTZUA7MJiacocfTvUga4Zu98DBTgzqwGfXDwyerKUTqLk8Lm3NxXr9GQ4ym26PL4Goox",
  "key5": "3At9dnDD2QSxNg7zN6TH1pcR77BgBoE5B2p2gLt8VJfdmW6cb9F73LsYcozTLMAJhuDpRzRAApiuvDShPnnqVTaK",
  "key6": "2mu5ANhpJRx1ie3xZn1psdVQvXRzyHFxFQQv8WcDjhYQ5YZNQUfYWMxBVxxgdTtFpzwTGaqarb2tGdwzHCokDP5u",
  "key7": "4523od5wXU6Lv2p35XgsCmPchrNVm4S3g1bDhi5KjWTCy4SrkZzu2F3HwJstEwup6CLzfrt7ZiBnfJxPGWDkFrvV",
  "key8": "2zo7BdjwTfVQBA337Eg1jAyDGQuempR2ZBfYdVVhCHCtqhT9KGqTsPjP6rrA1FcVNSEQXboHzha2noRdoSuA7rU9",
  "key9": "3yyk7bMBNx14Hx64UKfewdRfiLALsqR7HdYAfwcpZWJZfAJaakrZazhiXm5T1cFEGsjn1vywfpduNcAgNEfzdNy7",
  "key10": "675m4XLwFJDPcuu6dosbAhmTtYpCDTdQL94F6sjmwbpTNeSWfEjjVZsuhA7xR2LRgfaGV3XU3b5GVA5Utg73ve71",
  "key11": "3xD15uTGPu4PGujDS5i98onGEPyT1aPDbLSyJUKWJNo37xsnuqTR86aKd7kSh9P6N1Csed5xwTAJ5n95826LJMUA",
  "key12": "593FVgjwTiTcFvRw3dvoSEcn8P49kRvKFHNFRjTGWKmxotswKMnSjSU6GeueWrpCfRrNHPtXHPurQrBEmoKo4Toy",
  "key13": "2BDyxGiezrM49ebwsophcH5SZtMQYw2ZEsHotES9b5cJJXg8Fypf3aJtEfrYK19Aqhk3ncSSqhdXJ4FQBcf8AP6T",
  "key14": "2NwjWR3td6ajCW8JjS7aw81aqxF7Qsc2jiUucuDshaxR4y9zeAPpcy76Vdj7cBN2Xh317xAevwnytxn9PkNGMuWf",
  "key15": "YFDPdmdeZUfeTnQrjWavKjURYbaZwhTMKtXwmTtMjjdvy9BnFVzw8VLwCjvkWiLMGFxvvqh4BcxeYcnmHfYE6b1",
  "key16": "4gnECj8PoZbGdg4m43N88Pk3z9x7JDxwPfiz2o8vERKM7Tvgqn9V2bhqqYTB7SatfwaXDhtbjvuMHpQ2ifQxQvy6",
  "key17": "3HXbQsP5aRRLSZAjBjSpdRuxzRgoXA9ywFD5BUMzHAhKfyz21bWTDHaxtn1mFDWFiVcAMKMhuGVg4ajtnstMr3P2",
  "key18": "qzzEmAAewqKFhjfCsAk8cLgqcm3nnVBYZ31e2cT6v783eeGaVM4QBnhBvmJKUD3BDGrNYksRZ96HrsUfw4xtYsg",
  "key19": "52Y8hRbJwKr69EcAGELrkCPE2KMuUuAZmVxqjLPSzN3jptmcK83M7khZonLjRNEsY8oFZXDbE1NPT7LnvuskmZfn",
  "key20": "3Bs1xonunv3RpeQdfCPy6E67MxinpMbQtMZqpDv41nggXY1myiRmnrRy1EEPA2rDM4esSTVziaqQq6snKLzGEVm5",
  "key21": "1225paiWdP3W8yhzSuKRQFweauhRpaT4zUdfnwfskQXvTp4WEA8CozFmGQBsS1PRXhfuJfQJ1jQht9Jb56YCnwyb",
  "key22": "4BUbqQcRWFr7h8xMpHPT7RhCDVVbVKt799nYRJDJ2hPjkhu1KfGkq1iLebrmTKdEW7MT7ckkRpwQJq37uVFffjYL",
  "key23": "3cPTRU1vfpzwc8BDAhi8AYYuLHcZhGwrttGR9SP4tqQBLwwYsm3LD3Y1QP6qkVoeYkNJV3ShNmMwc5dT8pjM2j5K",
  "key24": "E6sEdTXKfnP2M2yuTNZow5Hv8jdiFqZag4YSTGsmpGVpqN1VXu8eHoBeo9bWdTRpPD8ut6kr8aQBU3geb4qK5rG",
  "key25": "2rXyEaAZ1XvfrbC5a1jC2Q9nJ2dUArC3eR1hoBMhjjbZSowZS6voG3y3Lqpsej48EUUcwK2Qq9i5oUVj5GqPqe4F",
  "key26": "p7yjyPieAPryb3AypchPoffFYi4aMkboiVGR14tikU1BA4jvjVLY3kynj8wefaBYQukwj35sa86dtsoYsMW7Y4T",
  "key27": "5CjS6QtLjSfqhfbB41LdukZ8PRVNHEDAXg34QcmWqomXrePkBmm6k7dR7JbowZVkqUdb3vcFbjJKEH3ZmduLLsPi",
  "key28": "rh7nZsQQLJMyrGxqDfvy53sotPWU7GbDExFzSKh7tN1krKVV3KhdzwqFg4Liqw9rgdFYhX8eAQAGHmGEXJDnG2W",
  "key29": "42wKmUL1WUUGfQtUfxQbUvtUYg1M6ESTsNqaSoXNkCQo2Pbp4kHgHnyhyyHjRWAZSpHv1LhNNknB7Err1d5nhKMK",
  "key30": "r9qos8x6VQjp2Cn1o8R6HpL4PgbGsBx3baa4ewdPDyG1h1dwYGngoBgQBxTMiHAbHdvJvhHD7idPVtwdPBJZzWW",
  "key31": "2DPBM682pz3PbPUkv2VnUK8MLLdaWHRJGrLD1kDmV8zt6mug25BqB111fWdUPCUA6rApsT6feyrwLUfmsgH9d1b6",
  "key32": "45irAPjzwcHuCnvuUCi79bzcNAFn9LVniqWd85AYVtSvPaHhFudXrzsb5QrfeHfh29iAuYka6tHFVDnUnNdHpusu",
  "key33": "2zXv5pwUrScvYTAJq7F6yPWNCqpc6zBaTJMDufQs8rshEgYinrUHjrd71VbJnxXdzPhZJaNkgm2J8jPTmCYyuSZK",
  "key34": "3rhoWjdqQz34McNwrDaedaLon3k1W5Ues4CzQyQRJECMKmbeGG1KHEJUMX2mCDPUfZAkqy9tHcbNzRLyS9eS2BvB",
  "key35": "4Ko9bhVcSFHNzhNNokRd54RE2cyjePF29xuXNopEYgnteUjUEMqznXzYwsHE4LV22awLiroZ6Lbh1AKWnkaajWAh",
  "key36": "4mnMaDEGaHHoBcHSzWwn2Jip3uApb8vNwV4TW4K7qTGGfHpMXRchMYb9Dj1N7vdSezWu4ygwuNpPdF4fWzZDNXb8",
  "key37": "2xD3vn5nKCj2tC4YoeruhPvzjXEfcavXHEmr9pbVUzeU9CjrFBkv96inhLZ4rUVFkVxFyKTkVa4TFhxnCoharMe",
  "key38": "48UAHvqgwCTSFMCVoqgnEnv9f3Vfd8NGCsY9v8ZmCPjt8JVs2HCX1293CFk48kSmbqmoTcJqeVGBtTxt4i1KYiFJ",
  "key39": "3tnTRgsrPLkK171w9U738ZP4UQFfXkuPvmsCTNpKdcRt7y3473DM2gALd4YK2LGFq9SAPrpPeojGqzEaz4UUDz3Y",
  "key40": "58SE7rrLUb127RPsHU19GdwpHuUKRJhVSQtn4fyBGPnsVWwrBMEnruvbWk5ohDruoce5mQcnmfqQBPwT9GYre963",
  "key41": "2Rfkaf93Aje7yrKjG25EhtuS2RyMKGo47m6qUqRcYE84ES6MPXMozkyDo8RLFqNhag6Bu3zNDWRbuNvb8fFvHUHo"
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
