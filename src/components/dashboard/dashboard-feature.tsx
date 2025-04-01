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
    "4kv9xRoc1ZUxecHXCHj9zxU5nXYBtmnCD2xSx8EVi3SvZouCRDk6f6kzafJT4QQmWYb6c3tHN2qKYv7R3Y7nfNhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFxUpz1uQe24o2vKh5vXwkugBgGHjP6iFkLvcNcXmANVPz8fvhswzt5jzUNaZv8T3v9HLfVjD9XYHhm4tbkriRp",
  "key1": "3a9uimpb1oQssssWnnvFD8QAe1sYejo1nzU8RBmtPsMmoRLnwEo9yAXNvSA5g12gnJZpCWrMuLz9copEnAKcJPVf",
  "key2": "2cHgaEQTgM4FLf7y4p44kXTAT5DvDeNwLqya68xZum4NGrcPMcTaBRyAajYfePxsH8W2eaVZiMW8qDXg1vWm3hNA",
  "key3": "SPbvGpmZRoUW9o66CrW5GkB6CfCzpzDgmQR8WokJs7cQTEJcYn1JtiGUzYfB87pP8qwB7V6ivHfhCp56dwE2Nf2",
  "key4": "3wMENxsEMBkcNPXWc4ffGQR8BY5mc2FaZSynAasEmGCSp5JsopUsamwFksqN19TAdTHGhQD1AwKBUN7Uj4hwL7HW",
  "key5": "3UFTPJwvjTw3VKmSzFdJkuYAPceCTcQvTKJ3HpPXmRzP8tc7nXuwcgYoZZvAfRrzm91TPBaPKXe5frt567tzJb13",
  "key6": "52AaatPsABKJzQdpBjL84WdbX9KUsoT516qKeS6ye3FNCELT34Nm8ocaAMzJ3HjXcDnGVz2NRPFANcNdSN8wQxAX",
  "key7": "MTp7P1NA1RdLiqn8bofFfP658qcJhZ9XyPV5c4CzFBUs7aMDnQUiYzKFNq7rEfAcauKTYL4Wf2h5bTmdG2gd16K",
  "key8": "4pxPhRg4cH7Y5gkH3M8u9E2aZYbwTniEKQCLxQrA3BqnpktvEPoZfBqLgyAEpSL1rNULXRMhqFeUHTr9bsVB2hfF",
  "key9": "DTmUHwhmZWDusApxJpE6istYJqkoRMGyyRWQxwY5Tw3Fugqt1MuTVf2sb3gmcd51KoHiu8BFnKPDr1ZgT75H9jc",
  "key10": "2PJpeqRDM1Fp8h32hdpZNphiuqkHhofwbj5faUrU11iceg44m9DsVmEnwHNnvzskseRosPA1t2Zyo2MyGgwWaMYo",
  "key11": "2zDCb8KVrjeaNSa9x7gywhSkaHRJDWJXiStGLXEYt2xhSsEgGuTCdvL33qbxnqLbTgCV6EsMDh5QRVtoJi6Rda4A",
  "key12": "3sagVceeGAseg7cLrSAjbxTriGLEhGJrfYMYjVtwXceeWXeCL9pKEk1g7z5RjGmH7rRf1xy43JzByc3inuK4QH3Z",
  "key13": "3PfzH9HpDbMKPHkt8iQvRCK6p18Y8G3kgGcVd174Gg7p3rsjwSb1xdCcmYhGCzQZTq7E4mugdpj9qpcJCub5BemV",
  "key14": "5FBp94sCD3vjhanYAr5eDDj5bzJN3txghJCGsgZ76xBNRc28GCFReSNSzqjYPagjx2zukVkbDCfHRKpvQYBvNz9x",
  "key15": "31SHP12y3BSR4m1TxfpVgiibYh2snfe71VwhBviMvDF418BEBaSm2GhhVNoxuE9yKNvzx47tRPYNY7N2sPhqD4ZH",
  "key16": "62SrKW1R57i6Sr7cjKgCkPnUchQgEdEX1aLtEmjJMjY17xwiU8YRjEA9UXvf35ykcjwc4mPaB3vDheaE4dBCmEPg",
  "key17": "2HExFwV7eyJ7pD6DEEjPcfvjMeSqJQpAW9J8QAFWdjFHLawymVADNktdmEwNz2B9LZDaDNmZzQwd7d9uVKJpdjBY",
  "key18": "42V5AbFZoB8ARokDgfGC4ig15s6atUv8wAMr22undrbkGtcqCEaVcprqp111s9vQWoe5KQmrfBCqQWisakwn9wDw",
  "key19": "2M4wxAhwQG7tubAhegNzzgZa96wWTJy5RRukaUdBGGvs7azXpdopT5HFVozx7XG4XbhvkjNGD7S67PAsdFuuhjfF",
  "key20": "5rgXipXNVn3HZK5cLhUfaNqJfLtdF7YMX1RXdPhJWoV9SwnMFUCV4WJWsEjSRXRr854FnGSTUBFwyZteKv4G2nFt",
  "key21": "4VUcRmPJcr6ihi8pJQacRx7hhE1RCE97VCjFj3iD4zDD1puAXh7HWe4sdX4DGQcezoP3Pj5AzqzeBki74goTDuXe",
  "key22": "5qTCsS4ZUcbDWh9iBHcgHuhKbT5a8X1m8RZNPw79iaQnsNWSdfnbQic1sZyNQxJEXsg2yhTBBf6k2CDdhJtWSPot",
  "key23": "4xjZdg4XFx9bSzdNU7h3SHfpq25wLRybQXvWgHRmruuedsEquFSMHKZqZtaSr4kVocVHxkkxuVCHmXPGJKJVCWsH",
  "key24": "4375A6ocGFLrpvxCFgDzCTgCnhipGKmFFtMjHK37vvPAu6vmi9EEfsDQ2jjTVusreWb5H76SR8AiTynahy825Sxk",
  "key25": "4C5TBsEQXMADtnDrsGnBSPnaDS3hcjnmndrNPpdo77gjtSQPTC9SLQEKraxhhteRteifH3XGdUTckhm2hWMPTzdm",
  "key26": "2ja3W91uiRBB8WzgHYGH6GRY9RwAQBeicUocFSHkpJ274VyWbNXLwraWsntSp34DHdnCukN51CfPJwLf2ig8aWQa",
  "key27": "2uGanUxQ3bzsfAemvYb8fCDj7uGWRgmeM8wviTswRx5FXChwQXPEJF4YMjejcxdfh1ggDXqGoEU47MdBnxHkA1A5",
  "key28": "22mA6h8pdBGYCjW6PRgZ7pX7Y6wNF4JXuZYTNyAZ38B8BzVQUzrCcqJTr9QALxffPW3cfVfUTrrxp3Hp1r7UsUid",
  "key29": "3y3x5RKDN6sF1QHeDm8RdKSN1DdZudS75KHYe5Qmhot3v6QXWGXjSpydcmx7eT98H7iGZ22oDjoQGmzPWJbYZkir",
  "key30": "5UqWcDuxSiYZpGZJwsiGsyzFbs9PT8UP3GuBzSAyupfnvDt8mjJuHcZEfYX4zXUv8j1J5RR64YmndKE8H2GShs4W",
  "key31": "2M3qAQ9WtWA8Vmac223K8pNgs5eEZc8E3WVCDo8SNx6AEUdkuxrQZ2Jf8wnssZwGmFSF4AAaeN7xbj4NU5AsjoKE",
  "key32": "bcVvnbRnsUEn8JPvvnSscrXgs7QdNM8hrzqz3t4yso4u8vgyD2YJ6MKM2JmfCCM5S9K4t1GR1PqqAA4TswYiKCC",
  "key33": "59XYsUi6QyYBnbNmaXtvkwG2R3q3BpjdY1PMyNCptRQ9jL2JDJ24UXMPzrVux7CpXWW2S9w5z4W4sks55T3ozHqq",
  "key34": "4swJnXJPWj4sMm8JL5q7fXARVnfAjDjHzaXrVQ23c4jxKqiFRiztrF3jrLNkmpy6aCaTNcmBNd8rhc2gfs3SPwzy",
  "key35": "5VCPt6wLXzZUKmf1xvM1Ps6UR61KGqWGXsWyVvgVcpkFYJSe2F4LpSwaXoL8BkX7gm8RPGumAes2QKJbc2DML9MV",
  "key36": "2CMppNwzg67J3jEkxi1hHd2h51NnB3FkMb3vErxakNjGiG1PDaWiAXrMCyD5avpZcXsDqYkcLtUBzKHf9BQf4BA4",
  "key37": "3RQPJ7iWsj5CrXT3zNahJHbxxmkagFsuf5zNzWNXtaCh6NC5A1gzUzBDDe52UaqDFeZwNipqGqUjrJLh1ZESJA8X",
  "key38": "3rJsSajVneAes4i1PKgrKx1eLZTi1LNfzVMTLWFurTasmBSRLAiez61U9MvRRtWr2e64TALDmK2Y4nRbMB869mP9",
  "key39": "64jt1TAEa7FrzMBjaLs1uDkepa6y21AU4kfpUuhuwEvVvTjcWuGH5tpfGRJ3vVWFPDvbhRonKijoeJyPNTNGK3WH"
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
