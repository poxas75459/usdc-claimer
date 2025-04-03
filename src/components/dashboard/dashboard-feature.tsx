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
    "4RT3z9Bz5jcm4UE7hQmbbj79xDgmoWaQDpaEPtE7WNSetYNv4tmoD6Ei5npkX8RYbkek2XtXn92KVks3vnVWjnQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dgndHSVFgxwPauMGSndUbqhbBRG4EQQpXFoa34QpFTdm7XaVEU87qcnyTTHETdvmHg25AchW7742rDs6C4aVyV6",
  "key1": "2Las4MHUNevQsuNB5ieK3UhexGEoSuEDhPHX6o5C8qMNkvVwFTBNAfRy2m57phEmSZyfZuUfw4zhNzpXmsaYHqpA",
  "key2": "2bsNWKpd3ncVLTSyZxiktaF2CbE9NQDm34NwPgDQnY6TQTq28o8RvDV6m4eyW6qWvm8kVewhZiMUS7o93wk8VnzA",
  "key3": "3MF1wkj6pZJcLSHGJ82NMdF1uoY313L983e3YtWyPga8v35hL4w1iUq48MtRGwBEQdUvsqbtn5kmd6RBMfpF1KmG",
  "key4": "52bjrorhqxJw3cz3rRa1oRS37GdbEwmH1ECAG2E7HAjJtJfsrKr6ZDWosyAzAEjcss1Ct4DrGDeG4Fwi2cNX5VHf",
  "key5": "3CTtNka8vMpMqxvxjpTCsK1risRgeWnwPMoWQjVsMDyEd5ECb6ar5hLwxTpwyBPo9rZRV4uuwrLx6NiXcaureD98",
  "key6": "3QMpUdjzar1fSS2j9v5sqXUmFgWZXPw3hBqPXFGiEpJpXQKdgb9F8pwoKdE8q62itaxNs5yiK4nojepjpxXdj7x2",
  "key7": "36PHARGadhKCT9VG6nP9vvm3K6Y4FPVAfUZx3EanuHg2K8ipPNKYZ1wGK9TyWrcWaG7E4qfoA4Ez4JQpFjKAPWgQ",
  "key8": "hENmoVd4yE2wQFbaiNivyyoPi7iZPgvgE41mTprx6FJH6w3gBAvTbqWVDsd9QoEevpcRqYH9FBCXuwH1qwqupLb",
  "key9": "WqDUEHKHsGUwnUpFoPh3D3tDsn1yZZpdm9Chtu1UWz4agH2EqgUWAhNYmZLSThHVqiCL2rE7BMfrNCYVSmUVYTN",
  "key10": "4mxPGGHT51F9s3MhC7RdhLydd6LQ2FtNHcSxUtfb66PgTSHAcHrQhri8D18hq8s3Z4iC3CE3xoudgdpaSneCB8V1",
  "key11": "2TMWeXnn3AKvpb6H4D5TGwZmfZGF5sSxvqrcM4kBWq9hSksEtqjDZks15B8htpn1r2NC5caHNdX3tuzvBJb5GJcW",
  "key12": "2YRdXGjVbpUoL6uD5SYzorTo62B1R2RZP7rbLRcogsgrSw2dzHuBLoL1HwoWfHFXXDPSLtUVFi1tUNfYUbBbSQfw",
  "key13": "LvY25y46Z8tFX1gxoFv3m9yvHNip3ApZf3nmE5GQWXbqKtRQXwG84L2xn6tgXmXTHGNDmr57yrUrEd3PFA8TQnZ",
  "key14": "5RcEDEyyhqoxj5Ph7NXQ3KbmVmmncymdzEinTdBtvJYhhHxVf4Wvz86c8WSPvLUPfRWFEE7huRjEt6yd79Ht5TVB",
  "key15": "26tX6uzrj2BoqgubZQ177rBuNisDY4JQCc36kHSGBLcFW2NT3cyCCrHasdRgidHGPandqFQtwjWKx4qtjEnwEGKs",
  "key16": "2U1Ghu77XtwkYHnaL2LPcFKiwV7APYgGXmPxfZeUmN48nfxT3Yjj4jZhbJhyej8VGHTM9ZXmTNpSzzM7MASqMo11",
  "key17": "4xVqChRdWEa9r4DwRS9GwwXW7VuxjSsgaNT7DDicu1oUzrSnYpeD69eagLf2JhhavWhCoZAbwtpM4uungmHLvGZu",
  "key18": "3WJ7f8uVQAVvbyAtYJLWC5xCwJQQzUhnT2bSeeg84gB1rRk9keiPsMk7aAt6ruHhqmPqtgdNEpNehWStqxLAksSk",
  "key19": "5ozZ3cwcAnahKNUeGQyAQk1trJDwqRkHPppb6kPb6FBHcuR1WfjgdMcJNYHJZZMXAEVttdRfFBEc21ajjnqiHdeX",
  "key20": "5ovoaUdDip1HWumbAgwAjVQDtWJhbJPMXp3fTkBFQsGWDhhCztxcGwQLnFWHJSqpfFzKcDYhF3DJim28jKLuvnAM",
  "key21": "5zfjXySVAxrA2V8xKJkFq77Qj8BiA4LUt9wztYrT6azNWVEAbkYAB6YdHpb55nAdyv9aevZCxZ19p6Qi62ikZpvS",
  "key22": "4LuXnuBNgqkkistuX8K93jXAzzve94myJTrGuxoc4i3Eub4xZDhG7Pw6RA7zQiWC1i5JYGjq3JKRP9dJLZbHt9p1",
  "key23": "oYAjv6mC6d7GjEhzLaFLS17eg4QvXAH6npGGicXSHdCqLNMZgLu8psyL2uYZpRY4Gazys3HpPKk8vA6saedbVqk",
  "key24": "frPxo5fk3jw4t85Bxeof3tHnVFNywAsaqHYA2KJDzcPneCKkwd4dzE8ADMUbm3A671BqumHasDMniCwcmveRQiW",
  "key25": "5svjxttACoSHAgVVchh8MquoWjurdwq52uDGC8H1ZZPkUtJw7KvRoapPYVWKytzQhNTGx7r9ZNxjXHjcBvHfT2VB",
  "key26": "5KbeSYmeAnT8yC2MdQxHANCxhHYa2bDXxXJw9gdqpUtXC5av96cGsuuQuoCdSGN9MHVCvG67KdjzxNs9BAEFBAAC",
  "key27": "5uCZGEXXt7yVoSB8KUfKtU6oDBN9JwZLvtHjHf47HsW7nr3DY5FSz6cjsYQkRyhmbr8e99St1JZWnkspfNGQJSwK",
  "key28": "29X67orSjFcLPz879itsnRCfHKYKS4HgyR7JSZBbGs2prrUQePs4mRCFvXffLXxXLWtCeEoVgkFdnd4GFQ7Y8YqV",
  "key29": "3QsUWjkYvnTMmGeqHofiZyibfnPRMmgzjt19aBryoj87abrLT15GqBQBQRr8KZNuh6Nn71ywkGyVSFdHF7k9oX1Q",
  "key30": "3MUJg8k11Zj9L9auTQHsnsWjMBaJ8m8x2cWHhnZ6fSAttn9kNS9KyUMgNATi9q43EMvCTSktKewwjMgZzLQ9fgd6",
  "key31": "65ZUG9haSVAjeTp99ZViNidRxGiHr6cvNoasJSsSW3ZBQVY9rYQkfY6568AxUwdnYqpGYY2DVnZwYKzFaNCxUUgk",
  "key32": "2bbNsLckH25owQf9ej9Zhf1Kiyq4xHB5ursNRQQ42X5MRXBHexZxmcBRPLEvUHY9CucMv583MbzDJfAkV1Dkh8WJ",
  "key33": "3m6B4oGGwmWt55WdXwRv63AidjecNehFBHBckB94jXvGLoANDAvsXzaQmzPnvp6aYGJczUq4eVndmoHJdCMz72sF",
  "key34": "CT1m3cX4UNaQxYDa5gLq41mT8oSKT7sexnGbn1BSCkcUfRDeoiNMbHvtZ2ViML3fDfCtHMVNKkdGUXRh2ZSA9rK",
  "key35": "3wTzSagS9Au23aBKFRxbemftj9JGjtcTV1LzoQi2qGwRSBjy8Tr8URhhjPNgG4vNsVt2ZzzHLkPmoD67YN3NZvdT",
  "key36": "5xuSfPrSt6mJYA4VF1rprHJr75R6DE4RiBECBpEQaZ8om8jD4aBEt8B7ZRuDKt7CGtj38uucBXyMLBLL7YZPgnx5",
  "key37": "3cKG4phnEpxjwJXyKCBAZSFyhYLF6kECrD2LpBTwiX76WWCdc9VBFJpzyCqLUzBHg5Y21XcsnFW76tDaNpbLfkTN",
  "key38": "4afbv6ZCyBHYn1cCHgTCEs1Kvgn4zUbCPczmULLKAmeoyh5bfirF9cajBnhF1QQugVdo1Jo1iHbJY4yGLDWUk2FT",
  "key39": "2FTGqis6hp5Tg4ZLMJrQDLViWJwsPJDQPjq2kRU2Z8zRBER7CCR7T8pFSy2bLkPK7jhDqvhM9Q6KZZyqbW48Efx6",
  "key40": "71E6aoGKNwsM5mHfkfCbAhRxjmiKykFa8NipPThqJ5LYgN6Jm12khNBtq5Cmtz4gVtM1Jo7VAYcGNgGKLH1uW28",
  "key41": "5FPzJwUUrEczQa2ENnnha8WokTErDGZovZnxh1gEYrV5dyBjTNUothNbL2QbRpEPDhyHtWsWZtcosWkG2cWbu9df",
  "key42": "5dwctD1nmV3CtKENbc18AMtBfZCSD6mztiB6WQu6AuMgtGNi889kLyDrb58MzM4kLEt9KSyBzR1SHaxHvfegW8LK",
  "key43": "3QnUBaHxNXqF8JZWjfvqft1NaRTZKEppwgj2f7H1nxX38GxpptPjYEMsEBuqfHNnTowrDo3sbFKpBRdEUcE65oLX",
  "key44": "3xRwNV8cCmnHFTVvwfmMbwVkJRyZ2RfMijbkaYF2wMgbTJce34KATBTc7xdJ2DtfX9doiXUQUE2qyWS3uCQ3sLSR",
  "key45": "3ouXBcV27CfzZibKkHwemiE2vRyJoZcaa1mhvqpw3iAht8Pap1Kv6xUvxSY1wRhFdJfhsyEvZcUavAuYnMeMuWu5",
  "key46": "32k7NMUaPp6DXJbGUBwpKyubu176suyFFRgGCmWrAwgm255ywP3ZVwf4TKT2ptPsCcbpf3zTBgWGenLWZKBpkuqd",
  "key47": "2cqZeKNKfLx7UJrgxsZHsPTSJcgzXh8rzoyjQYJnrU4KTp47WMxSP33JKgNgEtavBJnycBfax8oBr7ib3BjqF15h"
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
