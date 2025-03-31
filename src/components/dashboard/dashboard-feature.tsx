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
    "4YFHDKNTVsuSZVShXDqmRCDoQ8AwjW1piLGmgXXtPTJe9S4fKnsHv4zQKZ4jUbuKUQFH4FYKXBKsfgoENhZwd3r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1WD8gPiaHWn3hnfXCdoJTHhZgEez1H6Gzvefii4o9oHtRKjXVAA1tXdKqmd8nQg75ebmQy8wq67FpodhLN3LGL",
  "key1": "3H2wLKTMxVNTp6sD9rJXU7SGvaFET52DYMmPKQZL78As1Q5jDMkH1zMwP5Wfg43Y6szXkSNSenFR1uBrR9JwBk9T",
  "key2": "5ubypmkXWuzCD2VJvJrDpaY4231MbMkNT2hGbvxNTeriDzbuvjXrXBya5Az64Vnm1HM3ToFi9M9j8fgPoZtq9uzu",
  "key3": "4kNMZiY3jUjWEj5KHWKdXA4r5Lb21cPADiM2WJCB8tto1vMxFm3wET8WsTWKG369byNMZtirTzK96xwKVkQiaYdx",
  "key4": "5MCdHVvcR7C31uEon78Uj2hHfvoWc3Ph2U2a79u8awr2twW7TcrCWf4hncTanLG16BAq3FUT914trns18FgD9KVU",
  "key5": "3bX79vYTKoKVmTxVwPKLpdbtp4vePgNb6NNNzPh6yfP5k8K9MkcfkA978ANeqRq3NXwWhuxpvHrs9HYuCxEGevuL",
  "key6": "2nGXjEGmXfGDcYU8y3cHWP1yJNje8N1hprr877tuD59hAyuxPcLUZzJPkrSmzjvnUjNUAepafJTzgrb3ZW8vz1wd",
  "key7": "4gWGP4iQ5xK8BsxChvqt3uQMQvAYaBRUYejuTQiEEVQ99WKk26uER3urZYDWniwQBizVHSCxs7hNSiQ6BwJsz3Mw",
  "key8": "22zv4Rh7nALCu18HFT1QyF9pcjXohS3jkTQHzhxtNPUP5mu9Y6YQBPedKmjdzfsPpMnWrERzGKpWDwtQgMyPi45N",
  "key9": "5BhmTavDAXPaGpEtajCz9t6zhYcaoyfW4xiBHUq8hMQuYFd7JpMq6nKVwSvEqhQqRgxsn3w9ck8Cpndnt8Bw5T5i",
  "key10": "JF56FcGAvHgPd24yEmRaubBeWPbGbLPw3F2zY8r78ZSd2MsXEtrDsGJm7YrBgKzPRxUnTLboTPMLLrMvTQF1PZT",
  "key11": "3Jypw2ksNx23ayysKbwx8Re3Cq3wWqXYsfF3xeaPXaQmAjE3jtf55yPX5Q22HwG9517S9Gmw7jYthDPyoAkBDAx",
  "key12": "4qYUUmcZncdztbS8YwPy9SMdKZhAVuq24XRdtpVf9nLFC9khB5trHpUpnAXubapBV42AxViGNKq4AnB8nSkfd5R6",
  "key13": "29hjZM9jsuZNnpvgE2bF7Z1SRM8DAur8LWzPQQ37NzaKHHwQobMpAPq2jxWmtXFgoPp2FjTJB51ekrFrpTgDxoG9",
  "key14": "2ospPgSWeNDNjJk3DaFL95FexpC5Xi9Hc7HpoW8VaCsj8HxTmEiJzSAHeepceWQNRr4jNeJV3SSuJe79FdYmagXf",
  "key15": "4ujVPgVXhBwoVTLd76FLMDzXVDvH8hYaRLKzqTmxB5B8MYqAFUzNnCWmQywtSsTBWFQRzbaBJwx8VCWzkbz9Cn9X",
  "key16": "28dHewUsWrmCe22sCRCHptDWjoiXmkdQJCejmNQpm2LYJjr9QHFvyBmHRtXxGrbjGUf567E95SijEDu2wWdiNPDB",
  "key17": "2Aj46f1ygkuPVrNPMduJV2XQBEwo2jt3v7zRVYfFejNS9AAFJnf6dRb7N9Yrif7Nvh8VFYbCyuxkZ7BhR13Unh5k",
  "key18": "39V8YevnERAgGsiCi1iZMqms1PHW4iCWis4So9QdHASGWGYw2WPBDFMvUyGRfPHuPrjZjWKqLcDc8Tt9u4EeM2Lx",
  "key19": "2Jq4RybnoX5GLX6jijZbHMq6TkhFemcpURDMAMCyStpd2gykNE69iRikTcxFR1PQAqzfBgj6SwZnz6vH8j4fgjNK",
  "key20": "52iRonAM1TUk75uxeFjtoT4dxrMRRDFcQpqFzGRoiG6CE2sExBmH1fRAW1LP2ryRkvoCWLr68YLr9uck8a3fGrX1",
  "key21": "37Nov9DyMGGNfvC3RAPjzR6LETKkgL41GUxYAUwtCaQfjdVz9eegbgMGBSfYjhXmhRoFQVTFZqAqin4NpUR7JC14",
  "key22": "D4gbYU29MLE2wu8AqnDKV6VWRn5SuGjVUjaSCWun8x5Ncwrz9CYVyDDTaUqtia6kfsUhRSrWXBHJUwVgPHVnFgg",
  "key23": "4VNW9f64ifEdnCXKDm7wm162a5oZxqfTKjaqgMhabXxrwwjw7Yowugek1ARbuHRyBbaF2ygfhN5risRT2bGBJ7Cf",
  "key24": "4XSTVkyMF3XK7ikikkwW9hV5Uu7NAwrfR8L2Xwpzr18iXkqWEvcgtz72hPK3QxkAhU8tWuJypQnnNBmv98Qf5p1a",
  "key25": "23k8kkwF4x25qW5YLBPY3T5sEBm2XWqJHM1HRrkN6m6FcFVoBPw2C1KhxT254MLvLY7ZFZRXyy9PHCA1h9f9ypFb",
  "key26": "PHUqJ335gaCNRpk8DqfEGf1R95HUqEReFWVLn23Zy7xft8AtP9iBcnMZVtGbStjDY8HZarWDEduWGtVhAKkAfzt",
  "key27": "5NBU8WbsnHNaFyycbVhR5m8bpnrvh7hQjb2Eq5BhotS3pbvfHzjV5rrNE6fgaU1ZBrQ3JB4dUjT53BJtpydTziMC",
  "key28": "3c4BqAQuFxMBkQVGE18YdJsJiTvtBAN625ax9wQqKZDT1BpTg3DyhurNc1ikmLUz29ZkAuvHFVEUa8Uk6dN8pzFD",
  "key29": "3gNzcyUuWspzgYdCfGVtDDeNP5Xge1mpjo3DAdwehCbtkteVsVic5aCJWEciCLq8FJpEqszTEmLNEidypa2oqbv2",
  "key30": "4qe1mDJXfLLcTXJvjqparC5WYBLWSkztpYHPCzzDcLpKcVpHBwpn9T1Fyyqoa1gJWtzSLn3HEyUP2RPsLWzqP1QY",
  "key31": "4E8MNjfSmEhtn3Btye88tZnbwTJUWWwedPbVCN2JxqWd5KkU4WtfVDMa3G74QHx7cQXE4ozmDE3tSgfihUpog7ZJ",
  "key32": "4qdobC5sw6f64rcvDRFTEMq728ZQyedkYC7SkvBqcT2tWWDuihy9sUJgakZ3gEp3nN2rxuWn3xiR5evEPggcQZ8s",
  "key33": "3qq345oEr2aKkcSfmu9i5qp7npe76sWpf6LDcUKMdMw1Ljx2wjoErhtzVJ5jHxRoFbm9aJpyFWgYN3RU3CPnH3gj",
  "key34": "2sTkJ6FDyqoSyzuVncxfDuBfe545Ukk3Kd1Mxko269ZcmnSM3PE4NZuMsiku9yFQRoUBmGtzT5TTBStuvy15BEfD",
  "key35": "4bcooYWWY6VoqZJA7ffzt24E7QY9sJVA8THXJzDnvoNWAxs8prS7m4ZLwiemoxNMgPKjaUD4aLEzD1nVhHLk1NXe",
  "key36": "2MzpyzdXfthngkxJmBUmVLTi1qWN6xunYVkD6YMXTYLccDrnrmKDpQwX5RRFVD6QjGxiLLJ7G4adrAse2wtEcTwG",
  "key37": "43wjTh6xF7bzdzSaQpN2gtCbq1RgtTVdCJi7JYm5hVgpsTC7kBUFaeR9xN98cdVGiCB3EVt1G4mhnM2WgpGV8gGN",
  "key38": "3jL5mb41oHtyL4Uk8HK8wexXyZEKN6htBWqP52tA7xhva7SnEpvCSihb89ZWx5Pbp9xAPd4yRmiwDjNzKsCTQTMw",
  "key39": "2CM7B8NzBeec75phL8uAPp7bL9US9bMQDP5JGpU5d5UbEFXrZjwoAfw7fwgpFxkJ8Lq5mqtv8LzipGNCaUHHbxPi",
  "key40": "4oayFbUdzTy12AsjvYFKtPBHKXAkAcS4TPB2FPEHjjfgzAdXvVaC81r9nAQNzAACDsAinZJNKvJBYZyjA1MmgSg4",
  "key41": "2FZvdteS3iEKcFBpUGsypZZBRLSXN2Xg4yWxxvyV1wYMaAE8Rxk3Q7h2eY6qPVCGFwZc5QeSp4eRByusNdBAUJSg",
  "key42": "fbT3C3mowJCPhYZBjnupwKXYRy8PpabNMqcYU7Rsp6L7cvT2uWiJ8pF7gsmKjC19KLvEXQQC1mrgR9KAHFZ9vec",
  "key43": "5bWfiiXFDM1QabNWBe884NKBFoNcDH6zMLZ8XJC5VeQDWyJnAC9wsDandbe7agr4WAaumd6JJPvem97Y3WqjZEkF"
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
