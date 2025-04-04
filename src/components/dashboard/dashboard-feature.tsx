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
    "53FH8mmEioaB5wCn12WKU2zjKZYHX1bTJ3Yy3qSBNUxfyxN3xzkSyJc8cMugmwzJVEBRJTbX9KQdpRPhZj1BzezD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQAYqDAF26bmzPGxitnXcgLUZoQUUDf7tnQti6NafbuVC847sLscSDDaevtmhVzhwKELDGtoRkpVHhMPispW63J",
  "key1": "2XQdoX3vV8n5nzYoBEy9gsygKXBNcEnaaNhMNabdnU2erz6XRFFHhBtsj5m1MxxkzWPqJmzpCNc6kp1LuM9X5caY",
  "key2": "Fk28bWH5CxyH1MeY8cfszHg9uF3HWHg6sRXEv5bXgiNpTp7dFw9anwGCE7x2e1J5EcEWMgbAuq5WcPXQWkq4CR3",
  "key3": "3q49ZfmLxKKUvjHW98wXnaWry13y23EJiceLY9JaBLAZaqvsnXVnRqwXvcgLP3irjdhmqPthG2UJVfx9xX8BJ5Ld",
  "key4": "4qkBgyMvfDT8U3WVRJfU6UWh3qqeXZs3LUEmTJGSFrNGabkfEKAiwFTZ6VVtc7JoHspdt9zfdNQHGgYuzyKV6deD",
  "key5": "hgk6jefyTWx1E6k6s6LRnnzMMaYnzoFEYqpSti3Wj93UYE2h5a43FAoETbW7NRscXLhj5qpcPcFyUyBuzwsqfa2",
  "key6": "3CKCFocN4J2VUVhTY6M15sbMFX8JBd5339ZsKMtdmMgnDvivFz44FpMecGvEPuYbhQhsQ9YLMqdyfsfhfVF1JxLf",
  "key7": "2iRx9pqmpXJaAaieHnSxmYM4sicLtE7qVELNFff5KPiCus7XuUhemrnVqmx6VacewN6v4EqD7a3EXsNKyAyncdo5",
  "key8": "4esdKzbzc9WRvSRTovZUhAVBPzG9Ym4AV7XNuB5Je1F6YKAm2uHMUWnYeAhGxAYFFSfYBsbLUS4daq38vg9sS8xP",
  "key9": "4GFmEqF3tXhJsSfUijU4zuwk5FVE9amUCYj1vNM2W7BsNdUtNdg9hvjVrgVyfMcjomAixB5hQjaAH9K6syL5ey4A",
  "key10": "2X3vvmp96DmkYtDa2HsnDZN64WUiWQWJW5qPcG6J3pTaH6sYoiwNKXFJeaY27pzfLShNmUAtdfx733QjzuZ9cz45",
  "key11": "SdFnQpFHJk8PqwnC5Zq9LESLqnraHwthdrKFqhQrkjXXfgtHxPvAsnZshpgVdeeWcvryDugxx4aDrQY9stU2x1P",
  "key12": "5HxxsKUhmGj8rtaw1RrZwD63KMLtFNvdS4389c1c7oC7vhidtZdygxtC8kN4hfSSmS5rPR3USSNrA9gZHz6c8fWd",
  "key13": "4kwo5KrXDxYzJgBTCHkHLvK288NbCuYqyJnZQGag66Md2WtcwoUiRpvEaRYngytTxLRw6VzPkH18k1rzzNgn3EVw",
  "key14": "2nxWfg3aKegm2yHfeCR59rZSVdKoRA9sBcsjTTkwUgMbD7eQdQpkRpUnUvEGr3eHgQHa7nKvQ8RptLoKvwKP34Mb",
  "key15": "3jXuihsQV9Kdnr5whCxBkTiM93MSbqSgsaF7bJ4SagmhWDDCsLLiPwfD5jHvo2xfq4HXjL2FRWmED6Tp538wwEKy",
  "key16": "2oHay4AQZ9MVXmsgn7iixvLY88R9emSSipCZ6XQmT1gf8zagr2nJbk98iFqFkFbzDqTTqvuaSEerSqC4uwUEukKL",
  "key17": "53uMLC7JGwvRj57eRBHvK6c18Mm2c9aPrkZcRuYM23NCYLtedr5L4VfdPggHiwfNffvpxFVZZ4cZkqC9dRw7To3r",
  "key18": "4YRJewKUJ4x9SwxzN2jgGoGURz64ucmw72iue3KRBog54ExRBRtEbWY3FFDAmW5iXxTMBnA5fF8AfEnLPh4oQVmV",
  "key19": "Sj2aKwDNb6r2eQwHeYXWQ4oquzsB2QrMvynHTYdV4DASvUDReCxV4ebPpMZRLsVXAjtnYL6tvuoKV9MoatD8A9J",
  "key20": "ZXGkwREbS7nMPR8kgxLeyFPuHsttT2i8UMbv2xhR73nJnf5gQD73gMgW6cZUeF1RXnEtHh8ZiXkgAsM53GGL4ho",
  "key21": "5FL6n4XU8EvWxFZfeJoPzktMcB22eC9cafXt5tUQXWzZrdiSjoLo4E7WNs95m4xxZM2mQqxUebRSwDNLc3ktQWoC",
  "key22": "44ey9Lz71xjzwKS142xsd2sX7buczNKGNyiLXeRgFD7JpDh6EM6y1Ze6rDCxJgGRHFoxJvNQWtX3MF2D8ihkeANw",
  "key23": "3G1cPgT4BSHCE2YVheRoGE7J8svpZFsWSs6yAsACD6hjA56rUNzuxSRiHGTmG8EkJyMAj2ukHM1MUAwzkeigd3rv",
  "key24": "2QVc8inR9b98A8NrcbvLXcpPHyWUB44Kmn9iwm9Mde1ZTLGus39B5wrxtUN5asfTSqxhLzuisZhMFaFmzV7NT3B9",
  "key25": "5ngwHKzB9gfBiNxH1Tom5ibxhDA3Pxwm9v45e27J98oD5PjQQxfrqgnFEcER98gTM1uiMXMCuasCHrAGMeZdsMwu",
  "key26": "443V7sQBZjKMkTYd9Z51PLWRPNUqVtUpb9QRUkYcEMbrxrpd2vKP3AseQeyg5xN1rPuuCaALXbMtqoJimSvKNbiK",
  "key27": "3xs5vZC7vkgY6rc1JCbjm12Kt9UAkkeuj8sXAVTP3bfBgrBLjLYVPZjvqg1eRrKDx3NhgawvpkzAhMcjeQGagn9T",
  "key28": "5tQWpryHfLH8qDEcjnmXJEy3vHfZ1P8WutBLdbMErPwbDBAQ5XjkU6MnNd7iy1CUaZnTRMex9nUeTMbAP5a8nACv",
  "key29": "3wW456HamYZUejqJJxnjJeTJJKAQ5Zgk3HFPsbayuUv1o32cM2eGTHEVq634di9jPEQAYuWqxgnCwqHqcKoZQHXQ",
  "key30": "YdiMZteC2jMW2bWRebVaXC9SbwUKN3W8rt3xMCArVo9h85gKRKHYM8vN8pQurp2crjHYADk84VSQphqCbuwXNbJ",
  "key31": "2WN6giquDDs67dj365Kn3N7qL3a4rdvfgRiQBbMz6c7F1HSCE38DQwm1AQUmQSKHfotcfV8n4cmRXkG973cKah1N",
  "key32": "41QqVyKdRUejiuDHQLEDV2SKhLXRf9CWHX37RfiHvqgsyghtZcf1uxaqVyQRqLcPEJWpNcn9fCGeZ3qTVdwFDGn6",
  "key33": "3GDg8WQk2V4sUVnW23QT8QBC1Vgd2mtDKTd7nzvN9QSzuk2F1hpXLFX2fRJQdSq32wAAptCaTyK9mLnczUwH15f2",
  "key34": "2iVEGtRwgV9u9tPqgkCRnTvS4dpLZcNSDYVEymKuNK7cEzJzyNinMdjMBdSD2rcNunAShsZ5nUap1qKqYhc51SGQ",
  "key35": "35bQToXahrhRfNAErN9FVBXh2LL1UHpReQS8RA2BAKUpDoYGRYv9mkxg9crHrERrXaVqpVSF6BSxvWRDPoZUxBCy",
  "key36": "4omygfbjVw9YUZTpLtdmmGgXPS76441ax8GJuZD5ZhBYiHRscu1svpj67S4LDEq4yB3LNJ144T54yikvy51GKtMQ",
  "key37": "2ju8HciwkGfWWyLN6fB6vaWKRBKxpVsNaxnvsxTvv9myi3S5cVaEhw57yMbHBMNo2fBKjDoh4sniC3RadKfjS2be",
  "key38": "3j2abYHoJ693VQEDAtHtmEWQYbMzq4iwXmQGSCyXwMGPxsFPcPeasSxwJJsDenBQtErrBazg6pvhNuEARDGV8RLC",
  "key39": "2GN6TjYSKC6to7z2KycaD2xdTGtXCmvuXoJgU8AnJpRm2uURJZgumfKrM4YBfp2fS6nTW5nK476ULrQTy2Bjyuox",
  "key40": "4kPzhuHyLvQWnyYFoveqaQgGhSxkc68ocJeqsUGBD9HrrEKAcNqhfffaxQgSRW3u3jpCcebvMvZQLMkvkSqQP1rB",
  "key41": "5vvrZCYdx911xrXokaRC9BLgmSK3SaPCgffcAuZjhShwzQvwqJRixVVd2BFriRfRix9TiCUZtNDdKsxfkH3ZVVzQ",
  "key42": "FWdtSz9W3bQD3RLCiwyBt4ELsdksSBgQNPAH58YpNgcSAyqRAUeWzehmrDZj4acoz1BHqFqmpSnxgfW1aczJ8UT",
  "key43": "27Se3nTEvuTc2MDcqCCFEGtt8pknwS8Jx9bMiWz3MxS9ieUodX9U383jooncB5a41EjfWNjRYhf1dLAUgSGad7zH",
  "key44": "43uy3PTmGKupscFAGhgGNj6JNAS4SezyBKReCL3tbKvAVCSYZFGJMwPpE9pxF4QvrT2zH9ZMPjffVsJBeRexNgpF",
  "key45": "3vMRr1xDDRBCS5TeNQddjEa5iJcW9QKa33WX1bNJ5o1pMiVsm2So2hSY1Gevuvyc2v3NsuE2sdeEFJ1adhD8eGky",
  "key46": "3uiGNSacCBZneD9YwEsNZDJ7kpBvNqPBz7Lzn5Pzx9rTzVDc6zegGEWjF9F4Ca2DvLJMNw4NqdPDeMmzZ6zmPvcp",
  "key47": "4ZaFEzTuVY6HDKzrA5JV1YdmnvtKZubfEBqv23ADaj9ggyAvUXiktfd7tpEZCmhtbAPPnqcveAW1QdyuJuUh1SbA",
  "key48": "5CwoBTDyMLpmC83yxQFH53DwwrDvVzFEnqdHT4gyy5f2MDXgSRCZcxGUjMGSJEFa8KxRGZnwnTK6JuwiojunfUxQ",
  "key49": "3ftGWkFvdqZEj9NPggpBL2NiSWhxUVDs6HkXwY1gzeESg7ioVQg2zUUX2q5nQ5HV3E1Sm5HXs1E9m3xCMEioNvhA"
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
