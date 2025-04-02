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
    "3jDwHBzxtYjyVqh3BsTQitHPshQXseCjKnWauGD5dvrVZW2XmenkTFaUtMSbo47Ga5UEtzc82A6zhfMhbp3zXqD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kqgyWgkWxau1SU4hCZ3gMoKHdVn4iC474seZTsqfgKDk1oBUBHTpVa6ctiUsLcyHTby1QiyyeoQxMaFky8bdWnT",
  "key1": "4c5P4v481SzYFSd1Q3Lh6b5J79kkHcVCCJktpVhFqV1bZAWHkSUAp7xtqN9Pdy9eVi5m1shxr2qqvHdabCQRjZ5u",
  "key2": "5NEKDcchVbtTWNddEcCAvJ4MaWZtSHwezt5BzD79CLMPUuxMQ86WJa4y84oNUFMJFqRxDccQqJ3BBMZmcsxG1LuZ",
  "key3": "ZaLH8VfYZtQF2gMHrfH4mHhseiaHk3srjv1WS9GUbtqNjShxETRaa7TFkBpDfRcvZZ2r16GcHieVe6aUF8juYoo",
  "key4": "u1i8dCoJePAJHWfP6ce8koCH9LFy95EnGhKJKYKwMXKpX8AJa22WLzLyeKjzvRTFxpFuhEAweYP8DZJmTcpHQ5z",
  "key5": "4i2UmrRBwKCyLFxbKzNtjxeZkyEBQbsMMA7wuEG2G3pesg71GHgBEYaRHYJW7g7ssUNXMFMTvCKWpZpJ1CjXXiez",
  "key6": "2jqd83A7E8TFBrt6rmtwEXFQyaT67AGH3yBW5PfiFr7TeTAcXSTXPtgynBRv4MvSTcLj8LiEcCX4dkmMmHkXc3QE",
  "key7": "5WG3cTLtNzPqV5XDig4R49zTHdfu3ei96Rn4vVdhh4pD8kH5sao38rzRr4FYDgNCMta6cKnTfURaaY7Tkm793L6a",
  "key8": "4zvMrmDzgus5YEeUvzNRpK5xp85VLzG2o8B6SZh7zYxoSvoyBvfzjQaK45WWYR1QtAFNyYQXywVpVQ3DsCa4NEi4",
  "key9": "66NauFg9pDsKkVXMyxSQ2javX31XpEinztm7NRaKDvfZ6kfWsxAXjbfQVdyJ3KxydyQ3qSH6Yd2gd1fMu4TF557a",
  "key10": "2DrXrFiQX5oLcGWa5h91oE1KnbhfCFVTaTy9ZsVg4smJfDXQHAigdB5aqBpPQFLEcvtFJayNmuWzr9uLBuiSz6ZV",
  "key11": "3vzM9jcwDfrYW2QmrsaMxoWB4c4ZA6Zh1UXKGyzod5epCv1djDYaD6HfHiTgCo7Hx8U28FVSPVAJuiTs2erKR6c",
  "key12": "5oogzFzPdmaBbjtBjAebWFURCZFAH7r7TupqYiYPHX4AjSzKaL5TXhUjF8LhSb5yAYcTLqVQXLsaY7cod86JMpp9",
  "key13": "3QGw1WrUu2TqJSmzUReoe7PvfxU2up1QfGgkTqsYdXPoDQSfzXhTJFL9GhPCaXteGh4n8suZgmcLcyVosq8ZTsi",
  "key14": "PWdzkhdoNmDfPEmu6u8x7G1KRuyYxv56gUKZK2b5xoUmHZRMsZz71gzWykUAV9AiNzBhuP6xQJguoBtGUUqrPsE",
  "key15": "PnFYpbSsukFf5eHaby3cVaT7MZR39HoCSKiU76Sn4J5S3vPjmJpDZwkaq8LeA6oww8nwFBeT6GYf1vXRTgsmthc",
  "key16": "2bedrcenJwoTxaeChgkoAumJYcFbPupmGrFmvcPFPBu7WrXyANodKrLSq1ViyPi5b1i4g74RCR4nksXtUR6JbZqF",
  "key17": "2Jz6GJSRaPjH4PqYTwUndvF6ENovqUZy2gyunWZPCwm9Cw2VAT6fEdho3bqQYLuVxpjaWHhczQPGkZnGdnN6o7GN",
  "key18": "3Pc1wDtS5q7Pwj9hwvKbzRXnJsGJ2yu5mUKYcoXU6aYTeAd57jTBmW9LckSPANK1yFgDkCJQJLp8EFGDbToYXNTU",
  "key19": "44aaU9MkkyqwCb7QrLbdrN53ehktmwP8mSTEYDzRfye8PnGVWuWpRYfwxxQ4QqEHnaGnHQhAaPzVzGaBtgG9RcSL",
  "key20": "59GYCo3JjvHk4V3uXe6mg3MeYXLbcYRZ3hArfQSvAyLsxxzXHPNwaP97e4dtYyjmdWmpKxSK6FfxJJLUpMUzKQUA",
  "key21": "391LnaDY7rzr6uh23P2PcUKDgVggzaSq1XAXasi8dTGdmCrjzuBnJBw58JXx5cKBp3gQPP5vjzUJLhikaVP1fCVq",
  "key22": "4mTbFXpzcMsek9HgP6DMFNgD714k8yYMaA85b8KYcWUKrQA9Avp8wmkGzWXYgbtJMY6EF8y493ZD2anXgudH4ew1",
  "key23": "2UHA4Ar5vbFBwGj3PChZKkj1yPMPbNP3UNack6kt4CKYt9fej9zhWZyZF7AGnS5WrLXRq6tMK7vBitzmAQXSEqPp",
  "key24": "4MqHSGHQTwR1mYo4eXnGoPerjf9gWCQPot2UypFae8qR2vLyQFnRZet95cNW1xRPogGuDMEVugfwteLoaJwKG7D8",
  "key25": "koXN2Puys1WjoWjNnQxeEMVwooxe6Bj7X5zmthoUBeJBMgFHkrWaoXWzbk73rPCbSba5MuZv2icUnyXQasrZfv3",
  "key26": "3CpV7r1QmvWXk7X93sFQLuSf4yL1oB5aaiUUZGkJY91UcgsKWiMAQ2tCxeq81KFS3CpGQDZ4onME18CenjABvnNt",
  "key27": "X3Uz2Vd5Jf3gPBevEbpEVsgJuzyH2Aq8PRoUCp2FZZZtebwHhqg4qvLvSwZovHafr6WpngjVpgPnRK4mes3CD5X",
  "key28": "4Gb7WmCkdcfrZ3factCJFK87KMJSRHdYsfi6PwUiuuMLCmaN4YWiM2o7yyZwHVkRYJDUzws5ozNNC2rE4cJx1JHW",
  "key29": "2RonhcjpurPkBbeb3wvVkooX9Qmb38DcMJH1i8XWUMCaq1BQq6XBaqCwqzSCj5EcnvSZ5aEvKGCnftBGJM2BgJzh",
  "key30": "5zXCJwheRNZNHH7aGF6vmCsLaXQ5DiSH8qq8wi3eaN58fzGfWLFXLYPoEtY3G7prwEaVZi5ZCSQSLmMWsbJC1z7X",
  "key31": "51L2ozAC7Ag9R78NXTE1Fey5iEMN3d8AM2iN4ZPKrwMLV2FzerK73JJxDxfCNAqLqF2iyobH1wsqPZb1s1SS1ocr",
  "key32": "2q2RPgKn3bPNH9FeEfYEWE75HXHEdLWksiRL4o9kuqHw51WaxfVJavax32NxHA99NW7Xyc87iHZLHVdeDHWy3go4",
  "key33": "37wsKNncEs6yE4fn33kDJGxPHcP9tozkfdbKEaSzizPSwFVqkQd1WjaqvsswXUfoMk9uRZN95P1xY28Ue51Fqr1v",
  "key34": "8p9nj56o1NkvvhzoteqgQufiSyeC41ZD5ruiTR5uyaP1GhnEu8XUMcQaysiskiBaShoWBLWesoQU2QAnsV6ccre",
  "key35": "GZdu2GT5qwT8rA9QWo5uBgJ7qchxCDuEXcrwo31L5zJsYAj4SP2Z5M5gD4V9dhrZo3PPC6WAc2HogtUcmfTbq1u",
  "key36": "4Q4Age1UBt4AFALy3uGq61VJoiPZheyUh4iJwHEqTZnTqA3Ebxn5FegTpTPMtnsa4dMHG1VdAynw9XpkNjdcnTe5",
  "key37": "jBELGcpvENzEFAkGtx6z91k57oheBA6ma6rKPUdY7KxEPvMeuJWVEefAdW8GbPhZPJLQQ9Q5xcat1BKLb8VW4zW",
  "key38": "3L1S1aYFsVVHvW8GZdDbAM46s5WwUVYidw84ZkGd73mMpepfbZBTt1HtPDXoaXhDRUQt1oKqsC9CqDRyemXRwMiV",
  "key39": "4wDuVELekRKLdTC6xD5s4iYJ2tbLFDttN4Y15UYESEVufQVWSUUN9Qv7iYYQKQy1bPizKajvPV8vvoxmptsh8U4Y",
  "key40": "5H1PyYTbAKBvTrQ4BkZJzQWHctMcencNQ5iJQHxXYY7AXr6yrFfNtiohPJTtWJcu7XFpK5YexBF9H2DPqf4Np6pr",
  "key41": "2N5L8WF3QNPETEtLm1Rcp4va4mpRiKCM8DLRBYERjhv1UHEtwJFhpybmZan83CCE8hrNAEV3jHUZJEhXQgqp5KQt",
  "key42": "fT4EgvCLzevsxsZunp71Bnv9HW43VjnhaPxehryhKu7cqBqaNpw5i6EDQkZ7bxQkthRVdmVEw1MWPSu1LL42V31",
  "key43": "3tuqbJTL6RKaafp5WiLFuHn4wmy1npqu7enNGxuKKt7Mi5HDw5ChZPnk3qifDk9UMCKjjr1Fy6GeokuTvSRBtMRi",
  "key44": "Cn4uDU5EPsvyKTu4XYLwW7kjhJsXMz8rnzRk51fYzKAtZGAcrXVx8Fynpq8wjWDhee4jjKp3jH5U2tiy47KHzkx",
  "key45": "4pHfP9cZdUMd5YWDGaW2TZ3ZaFz7NNMnUHCCd7PyjoCaJi1XQoKVztJfKeqQPP59MsHPqbfgygdziaXS2C37F43R",
  "key46": "42qxVYicdhsd3vLpHNAxtsb4xSFx7Hpz9bgBfeD4PxKZQbZ9NxDzGzvRqh31vYiPzpKP1J4zzafUj8HwYJcdPC2F",
  "key47": "GJC35XSbACtfyqA5dESaihBL6aKR23j5KP7W3jYdeUC2fburU5Dwfk5WqXuVJgDT2KukGFi7aXEbqzDtyEaobJK",
  "key48": "36S6vQ1pL83LY39BAfJfHGHgwWGXF16oimMfiFbADyGmC86kNRCN72ra1jQboXqFdj9wjiQPmQSnrogveB1VGuFH"
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
