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
    "aTYebiH5c4pQg4KUSoqjGC6dnBXNYaqvP6C1STETv5ULocjiYjR8XwJV7UnAQWAfJaWDBAF8younahnKEdr7146"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3o5JEqX7XCYdTga5ndtigXu5x2opmDBE1fJwGEWh81qvYc2CCYq2ekzWgc6skNVqUxVMNtMU7hXDXYntKkypRB",
  "key1": "3q37NPH6St9kU3ivFUR93nYbJvqUA1rWvH5zaZ4CjFtPpmYAMFtUnkncDPkoNs4f9KcfD9TqzUAjDkFJu5oS9Vzo",
  "key2": "2etuJJcKLogUaGHDBj2PfaUUDBrLwh5hrTppYfar68BeGNwFCbfu5kwU12D77EK7JuSxK6PcVQwNMVFA2qLqasBW",
  "key3": "Eu85mcB2Vn17T4gmZDDMbr9KNFfibfEV5TGN8FBcjD5kUkWcAPEfBML2wXdLeMaaR8424bxJQsiwbMGT4X67NPf",
  "key4": "32WBsWpTnpDRHEtcPEWE5kGKAZ2ni6UbksNJ7hi9t9gmPXGrLGk9t9TBjt4BovKjJVJc1rg5s8L9813HsfTPujsp",
  "key5": "4bVnMFAcM69nRw12XDpFCtgEwacJRyRGNovmiDUCj2zKbrLgQNACPvuWUBDszUSPiaB3NVSKfnU7hSpmYrfiGdrG",
  "key6": "41D24D7QQg5tjEqCKNKT9JedG7wfjbZJi15YnonXxupeJaLvGLsKPXCR5Fmm9QU5BaUseejnVBnGkATaXK5cNrb3",
  "key7": "54Vkgj5fA2eSEThrmHFYrUNXoo89tpU9G2ELWASMDVfLJhFLTd2VozUw9MA9hkbcnPV6LwkMWomCjsEstPTebYnF",
  "key8": "ephbJWKjpVGqxhfB1ug2Nxr56BFAkpECWRQzyHWpZ2qkdhK9hAECFGnjZBx1sm2V45LKBw816KrgKxNt473SNjy",
  "key9": "AKP6JZAsTdSnGTSrDc4z1nZn7kqaWrJDk5uxH5gr23ndQHurt5eP2P6BjDL3gmukVtD84df1ZduXR7KA4GTtmBP",
  "key10": "rnVvJJrJfgmTtFzMp8U1S5vCQvJZSht87BPvsz1Eq1kjEikN2Ua4EFXp4YH2K1uK5j6xRdTvCisdzP6d4hX7Puf",
  "key11": "5tJp7s7iFYGS4AUCQnBYqih1nGE1af13qAgXiBt9eGkg35Kmbnoq1FGmj7veMRoShhw93BDckNMY2Y2cosqi6j9J",
  "key12": "2Fo9mcipRqBYoM36YFUD1Q1HtFXcEv3RXoJNBHtPHrsJiBEfzeudVAZimPdfwQYRQVJBWYM3H3QgDFnRzFbjqBhy",
  "key13": "42LaDyfv6x8FhPZTD42FjA5VTrJ5AJLBJNeoBPtrdmtVBREJ7BFvngpUcqRmcBD4eZUdNSfAdG3SDUFJA12eXJ5Z",
  "key14": "5AMELd2GYchFV1NG6XDFJhdxgyz8J71iYtNCGGut968R8DuUTwUHaNj5sgVH9uysoZWMmLUwkVtEUZYY9Nj31xLv",
  "key15": "2GX3ZyZcoQVrTuZZSCdVW77zM6LWJDRTeJaW5rtvSxF4quQn7NA4hep1XANUV3HmmfTeCMRrpM6BYXGXecKinNam",
  "key16": "59AdttFMzpyYPauvxNh6c6VrxSF1ji9CrSgsJMVWN1uTiuo5n2eb2D8y5ynD53e7DFqx2rjW6DaoSgy14jFj1dw6",
  "key17": "5sgRedSjT7dMusXpzH5xdxzaYs7r1ZuQBem1n13RayW5XduoyVdXXy8cc1wbRbAcjo6kToaNPx4ATuH4FEytVPZs",
  "key18": "3PVDcWx8mq3pJ1EVwe6fTZe6q4ohNbvN8mCLdMzrCXQEAaXhJDKzLgc9jfdW888rig3sfUFwh8DzQPAn46mLjWXU",
  "key19": "1regX4KVxbCxKdvWsuPaxkA7iU5DEgtSj2PGEJe56LznQxDci7KpojiZks5rjqRcPt4DJ3DjDxtsZUNkeFbzUX2",
  "key20": "SmtjTFKpHQVeF2gpFnJFHjxMMfYzNvzPeMV3HEgCajybMaVU2Vng8gtKhJJT7D4k8BmT4NbacVwWcxwaBs9j1Bf",
  "key21": "2n8zGqK29mCfXLELNowaeCnuqtGQjJnvgxXxUH4i2Suk5P5nY5KnvSkTjtzdioeRG6t9NPjHPRg8cydYBsjbH8Uq",
  "key22": "4WNDw56RFDcCQYPQdatgbc36JmtCuVzMBWQ4J8v8Gc9DXtokSbsq2AreMbB8dY7v427DuQobF3boWpnqr5WHSayf",
  "key23": "4GxLW7qcBud2UdTwNLkXBMeKfKAFAXnSgLnxXT1oUaHF5rfENRVVcoJMHbfQAU7FxMGcQwNo3N6cpjnCSXcRxpa1",
  "key24": "61VAoXBhgkXux4vhhA6jg3kr6tFqAYXEtKaUYZ8YHm4kSQHtFQ5Pvqdh8aPrCDxnkfAVk24Dwpxp4JStafDM9zdS",
  "key25": "3qXQenhWPhN4c4LnwUwAeENurGmQfPQ8ERcgGqZRvrfy8zzn5xkpZ533aZjgn3VLifohwfsckvV7BEBq8gV23FyZ",
  "key26": "apAvt8vpeKn9F1kudnE2D25PCssGE2aFzfQGsBT7u1GMVc8g5CMYifV4KW6ZwFAnvh6cyAyY29wWEVdSTwmASj4",
  "key27": "2We4FV3SNSEY1sSX1mnXK5gzyXq17TA1V5sFTPN56zZtK6v2SDUM6UAwHqbXRBnWCY6zgyirj6W5AbN5DMuEGhAU",
  "key28": "3jv8gto3yr5hXuCmMfWc3fcPEEHV4ELWoYkCptcfjLKBEXqd8xFCjn7kQPpcwLwaHY222veGAvVS9XZmhjbQzBcF",
  "key29": "P6hDaZA8gDA2QRE3teUiDgvWDC3TQ9mMLaLDc6SKxSd6ko3RmFSYDMaPAAwwQzRjTfNmpwJQikaecbnnHiuDYZu",
  "key30": "3Rj9W76Jhk55KHksCbTUFs85jTwfMkMvZTP3xU7jjcsRDkAUvu7ZPo8PRKAMjdNyYfEDx8TaR3aSCvi5BbNMjkXc",
  "key31": "4yCH9NYQDvzqACA3VpRi9x7rCAS5w86wQMuneCAtvSXbkgS9K5Fkgvm9in39RiH7G71UWRQB4hJdJ1nHqBMny4fE",
  "key32": "5p4BzD3KuBmBsjA1ku11mCsSPHqAkQpjvjLr3qhsmX1C3tdUVivF6x1hHcjoxYaiTB4DLjMfHy5z5vdLTHB6aUru",
  "key33": "5Ekz9Wip2MWeMP4CAW4xTqZUFg1tP1aW1upRQmQgmPi3qjEjqocEasw18ccCWrMst8hGUpv9MtZYhtNQSuV3cr52",
  "key34": "5osdUVFjDt9En3Ed6qjUporeMLeoeR2N5u1N8cg1QytFCdReuw4KMnjF5MSNc4S9xkPUuTDn7E4YASW5qJ76ZJ9R",
  "key35": "XeVq4VDSZvZXK62GQsmoHqGuxQN77sL7oEhN8hUW7DNGwfadJFE1jsbPiXB3J2BEJ6nSRHXLJJvnk9t6nCbFvA6",
  "key36": "hDFnVnmccp9HTrRfm3dMoEiTTcZZYcwfcMgtvE5dmFS5pMDSeGuSj6KYgcJDgJvQBX6RfiBKJi66vPEbFrA3W7k",
  "key37": "wzzKcKSoBfePa1NZRKZZVULZERHPdJuKhktRUEUER8qa4H83tHR75csn84aJmAzYJXuE1vQ2qZ9uswQWApB9oXp",
  "key38": "55mF15td56FxLkHU3ro2TU2NqqYewY7J7hAQSahbL6oqkmimCW937AvnPsADPMx83HemJE5Dstjth98zoHr6tYnD",
  "key39": "D8QGhFGWez814ZXiwJVZTwpLycP6A1TYXpmUNN7Xyj76qWEjFwYEdUDPDt6uPBxGVe3goBbBBmYrDb17uqfUdrs",
  "key40": "4cSwgqqEG8EEwQda9PUDgyuRPpo7rE9AVf2Qp7ez1WgNkauvxGBpgNYksgFYfzZPJPDLtNraCdg22RdAVjX5NXd7",
  "key41": "35PV38nfttjBSjoBtdcTuXnv4ELxoxT5FcTsHRAfcMpULC65UKDPVVgQkPq8NeknPh4NC6d75yYqrApepm5dwGfX",
  "key42": "6hCB3d8LXcCtYp39sG1nHsy838BtAZ7GddTAHKTCChRa7wE4wpMvRF9u7AHpreFfqosVG6wSTvG5x3ferADtsjL",
  "key43": "4EFXSQF2d6kqbqjAgmoawQAhgjV9asB8z5HfBjrDwVhotYRW7iJjdkLZPMYJ2RFFf5SSnNVghkoUtB2iye1vrEer",
  "key44": "2V9joPXCaYgqje39MrHPijPX2ozkyDVHZRB6J3FS99iMo4xoednu6joijZcmUdFXKkj9RcRc61NMht1cK86jkDtk",
  "key45": "4zHztLe9X6iXMRiLbvko9U778VW9JFh4keXo6CsjjUQcNFbij3qZSN1mtMGLWs74u6BHGTWDkTFrTz8SU3SqoVXW",
  "key46": "4zUrDKZmnf7F5KFGScGTD4Hjd9QbnoorJhVXTTRAzQmTrbgASgTg7UMVoEVPjgy6M3p6EnT6wFjgbtrGoBgJCX8J",
  "key47": "7ZJjPP7Ayy5vEVJmXu9eXHKyzHJM1DmDFUS4oRuZyofj6yoZ6g1CcXoSpaC7gS4H3e7ZWVHkwaPbSQTBXkuhDgK",
  "key48": "3hybhD4RrNHenKqgW4Fug3W6tuE2gNoTY3Jpzdg2nhjH1tvCqX19cGGNSg439gKcUwoXGMP8iH9LkWagwzmbiJZK",
  "key49": "46ER1xAzGnbCZPkqwzBAKrH3Ed4EF4mKwYPppEhygyZHJZV9NeUnVhEYNL3FccNisLEXbpmKD35WmRoJYAWrC6DE"
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
