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
    "5bjngcJpq8nrobBZC3hVSku9mvqGYurk1PCehQs8qW9SoH93UaEJxqx23riSbWeFQ3ZvTxswrBk6r2VjY9szg1LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXF1fgUNdjrajGqRRAoqp59cjXCxonutMbmpJ1ZmBtJnvqqW2m3BJzmSf1QMFEFEGyjP5oLqRXbJZR1yUUBeTFP",
  "key1": "2aJW4SUFeSgBRqeqWp8hRu64CmgyzhYPk2CEDezmsFp8GAuUicAjwjjx9P25dttxUUFzbmZVGeqLe8YBB41MJ8k9",
  "key2": "5joCG42Kq14qjfAYnFVcPCdtciYrdUPFQhw3zvL3KQ7GPWdVHotmSPgXTnZuzWzGCRFWRnbuQdbtbNLZUUri8vAb",
  "key3": "SkZcUYRjy4Dx2ApgoBdrbL78Lx3ZkkSxuoeMZztd4aLj65yHYTaAnV1UyAT56YtN6AZyZfdpasoqcTeEV56BgXS",
  "key4": "5cxj4yZtnZm8cNWgEerM73hBfvDFAUWrCwr1h5esdsyVdoZfV5XU8GgkksCaJ9KrbeAFAzZvduyfHh5JAStxEKCj",
  "key5": "4m6By6nHe87mX2YQVktsFjKDckPK588XUsiFr6kYs7A96uQf9nvsbpsff9awRyYDciSxDebbzKEjyyutZMRJ3P3J",
  "key6": "62TwAHPSidwQLL9K8gN1YDhZbX2bxAgL3VqEbEDxxG2sPuGc9GAJbBxXibULLErUUbjt4mGtiUVuZ1afazrbymFb",
  "key7": "2KivDaaYsHUDWd2rJPsSmQe8fk9Eb6yiGmZyp2pMdRxU8HQZxhXezLNVXzXCcCfQ9nENPsBCvdamkKmJTbsSma3",
  "key8": "4L8keUc8xJcfrPGE2NJbeDk5ZPpgYKA6kEbXJWufwuDoN4aNZMKrXZLXYkXYxSTgB1ysKK9RemMc1AjmdgXQRBJ3",
  "key9": "27Tc9nVMDxXe7QHFCbdh5JPpaB85W5JSJJ8arwLL3fMhHdW92u9NxL4qBaPFZ8HpkYwZMB8qQUewoo3nKzP88vqM",
  "key10": "rKXbF1VwGRTQ36G7moSAC7CoiUWqbNaPwjf3ycFRtBmn88PX46eKyYAkspjPy81352ZzUouTDca5THH88icNN9c",
  "key11": "387t9tTX549v12cxG5cJHqrfiaZ5uVSaP8uCrAEThiYNtLxbC3Vw3XA6sLb7H9fL4BxWiJDdvawLVDUj9PAbaTrH",
  "key12": "31G8LpD6PZeUQ21SNLj5QT1yXZ2f3ZFjjrW5TBmFjtUb5eZon48Y39DkMb9kmz2N4J2W6TeuH5XrnAyGT13rcSZN",
  "key13": "45aTeFex85R2BX4aGZ8nVHPMx99DfCbTDKhmZjTmPuF8zKc24262EJvTUjMUHbd3aJ7stupJESE8AVd8WpE2ESdC",
  "key14": "5iwRGRStDqQeBtoK3AxbjfbL7fVrzFRtXdedo1wXhYHYgbbik4FuP7BzU4is6wk6q2bc5nCcVYdP8qZ5cbwK6LA",
  "key15": "kDTatxA3FvAT78cPV3xjEQTQZkPY2mdjWRvLm6NZj7fEbnMjNvEKA5bETQe5ytuevDYq8FEwfCzKqePSuY8FVgu",
  "key16": "4S2tuU7CxyupWRkkH4szyzT9tfzKCpDowbuTH98HXhQassVUX61itFAsXSM8wbkc4CDhpUvw857AXriWXCsuajxU",
  "key17": "5VPqJmvzfKBNZG6cNpv6AMKzzwBDQru8fBoF9uPwhawBHuk2UTFr7ERTYzJAHDd98WwWXzFLxxD6a75sySJtq8a7",
  "key18": "743H3rvNCKbSrApbGUa3hXToV3tktvPf1M3yXSTpkzChfhqMeMHCohNMRn3ynkDfjFsmksp6rmi7WTf12ZjKeUU",
  "key19": "5bPVCSbjWrHLpjHrGdQd6JbURopcnxWSuL7DbZNQ7L3MxveVyBx7cQgn5YkpUXHgviR7abLuzbQGyko4Hmb7MQJp",
  "key20": "3Ky9RxsCg8uAxZnvN6B2JJHXLbrAUsxrdrk88kkZmxgXv77qcvqKQipyDi3PViW56m9RCXmzWRBQS5BXGznfKJjN",
  "key21": "3RViex6UfDs1scBpxTj4tLvtnNwcQUvxAPKJypMq9zYeUDVd4gZr7UXPuoEMAdTTuhSLRTxBQcU2M8MrLumyNGbW",
  "key22": "5UycqfDvEqqr7SY8hP4TGMZrEXZt8Pz8eEuLeexdNCDmDiJabkarQn77cVrW2Z7ns6FxX6HWSRbaJzrSsdxNZRES",
  "key23": "5NLw2e8N56F7rFqWKz7SsdEdndfrvEXs57bJiYDGsXZizEEPdAMeszAbBdWirKrEzijj13dV3XSexB13yqhM6Nci",
  "key24": "3XvYv6vL3pcVsPGEzgoCCJjBK1ZmnAYCKRREXJRw8G9MaMVJjjx7W17KbdYe5X5mYh6z2DvVmCeti5YdasBbV7g7",
  "key25": "3QWe7FhUE7PraxyA4uidWVBzwXCmK6QKsvmUaswxME64GiNatT324eox2yG9B4TqKMqQ171VkirAt3rpDT6NZK8e",
  "key26": "uBWkwBMAJYjwuVnMEAkT2AJowZKf7gzrN2ygyemDhvfPcxkfqa7Ux4dkGSnApV6DS2NUDCn5ywYywqVCPMnwkbV",
  "key27": "4cMEoJNkuBTjXX8rqmd3wyhTCEEKXxD24kCFPvEeUzK8zSfRcf7V4UuL5BBbrkhpUGuu9dFuRXmhLZ385HSkPpem",
  "key28": "3KrKYD9w9EtsxwdfrdnGikXNPKcDQw4DQBTqutmmzHhE8EXNNPDxLKaq6dEG9wDjHDgmkCK7PazLKw4quXcyG2jB",
  "key29": "2znMzjva8C6PHNHkb8n1n2F1wK3t7pZTdqhjoFZ1SrHkvYHE8FQMa2VnVukbyrn4Wi6LCUcLWkQz7oVp1rdxgxXy",
  "key30": "2xix1nuDQ7cg125rszyU8LiofsZkjzkwN37peobjuoSYrKeUs9J9tJaFy81V4wXzvvWz2iuvSmfuXARQBtTqgUpu",
  "key31": "3ojbfXvrDSGpsWgqiW2B1KLZDiFsHvH38YgoJM555XqHvu6quDB66fEhH5vtd7DR4eh6x6VfqN43Tr78dajz4CSz",
  "key32": "2paBZTQJo1hxipdSFjWNUd2pmbPjfy2AiFNZHR6zDqabnAxYdWSdMwkRE7orrNywjeEjQ2q7As42nBq9NqMK2ET6",
  "key33": "2vbfr5uRPoQZRtqxSi1A6C7c9e4bmAqBDLq4RiQ5XiNukwxTPKBp4rpYmfqiJnXxWKH1znWuCYZ3eqtvyLRBFS7x",
  "key34": "qnuSfzbjBEFZP7rVX9QqiYxsXNqSXxP1DK14enprSyitie2q2dRhn6szjBPnCjePYSKSXjsHBQ6Bvv3fieBunq1",
  "key35": "4fLHN4veddLXQBqW64eE3hN5Y2zFodLJkweF4BzDzGMAbG4SmG72N16xeYVZ2KJWmZZYr5xySUFuV6uvVs6d1K8r",
  "key36": "4Gck4kg1NveCABVXbTZyNYu8Dfr64hF8tACFUPqxGXjswZbR6RYDGExYKTGKBGCarPX963pYBFVRjxgkJZGjtXfC",
  "key37": "3S5VG1FfNbMNipyZdtfkAj92Fjq1gNy1MXkBCXiWXWu3R7x6idj5vN3bizzJzf6CU9xHJoXSu9aoeZQwkVBqAQGw",
  "key38": "5FMYB3YSQJA5zxx6zc5ev8NhAusuh74Akse4hFTjZwJvQz7MBtgU3ow3TbkTGQVK3JCQBDzZX6r2YUi5NH2tvLVU",
  "key39": "3pnDoja2XRGMTCXzPxsA6CdfexKDY7CEL1EVZqqNUTxAZfBM1fzpmrtxTqExVsoytEVAsVX1bwY24yUam5pcmQ4F",
  "key40": "43vaBSJtTEAarFFKwvzWsdQvj294Gc2STBfJ2YeQkgaphwfJDuNthhqJ2Dum7QHJfi6kka12sZff8efrbQnfSqb",
  "key41": "tsQy3kQ758eLV8Dk6oda8cRT53waRy3LXUx8WWtwwN46cP1oHecryfYQVTCxUreQkmp9HJrvnJeg4YqFF6MUVwg",
  "key42": "2cCwuJ7QNaFMb2QvYf9B881DBZ2dMRStCbyLqWb5bkspac7VCgVrtkvpPJCdJmkWE6JGBTKdjAkUUSPtqYzi3A9J",
  "key43": "2yfEHK7D6dtnTzErb45ouTqVqDkgdCQdrbPifj5BH6aFAx5MWNBHH7VvsPaQnPcwTuqg2oyMFTpCN16zzbsQZuCz",
  "key44": "5KCDhcfBzr5FnqwppKeYoSerStFMh9zX1hKEoFpD3g6r98QknPhmmw24ZwsBJ9WbfrsJXHhYH2oeDJS6AkSfkQGM",
  "key45": "2JywGXLcTrsBj5TLFLK8Xa3ZatVFfSjiPXhCe7AjsQmgWpjhaWkG5oVrrwRVSVS4G6kg9t4qJpMZRKEEqTU9r5i3",
  "key46": "2sHBvs5rZ5G66qBdKWtDQWXDLLpJhRRswfFh1HgjpFMvn1c9nwAPYE5uLAZymeWCsxkBBcxAVEzuBdo6mctseezi",
  "key47": "5ypNdL5Mm9vT8EVERDDVEvQRPxdebsvsi3KXBUgMdr7VqQkDNWpmMtWLKW6hKtrYecokxFw8qHmkmcY8nhWFrjsH",
  "key48": "3AKLqmPC8Fb9c9ztgkiSkh8A5C9yuYne9EBsg6JR6A2P1CK4j6tYhjDxndgsANraSbQZQgyc3aGPQYbsRsHddac5"
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
