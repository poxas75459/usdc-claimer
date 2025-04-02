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
    "5iikeHGvAwuNVwG2gLsFAgVF2RF91T9Go3jgdsG9zr3tN2QQvykxwsBrMe5y8JfKwez7w8c4zGuEYSw5dSEj7dmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9bxb9Td2yVDpqtayHUhqaiusJaSFYEYfss8KweZxtwFwRJEp1ZnkAPzE39GF5ZAZmxQL43tAfrpVbqv3RSne37",
  "key1": "3R6oYRG6YpQHzor5n1UuMnAgPG2vPVBk6zaiUthkj7tYbvoLsCpdp2UuXWRoaTu65QPcd7bPkC2gmMYKYQMeRXJg",
  "key2": "3ZNU5H6ketDeZgoTKkZzmBDTB4cj4SJwk25UNkizbxnF5ckSs9rhwan3T65zTsND8p48pnJBc2JzYGuXqZrxkmsj",
  "key3": "46x1G5R2YjsJdQLfY65Std4STocjr4pYxXQftpDWTbMzGbyyocCVVv8nnLfSaJziMrfnK4Sj6huDtCCSpXMg4ue7",
  "key4": "4ogn3JERXJBMs9kTwYmpzAzbqvigLYZoUBFVtu3VWtPDzxmw9JcmKH9JFn5ytSswMFgYpFUtGekPVn5UNck4xnk1",
  "key5": "5BbPUwwBtQyVTb8RaLyQEG2VFrmb3dU6JjpLuh5dKkc7B9fAQsFhWKSi6AeSLo6q7QJdNNTwgRJsForLr5YjCyMX",
  "key6": "5GWyahNkvPGX2qNgSatyjS8QdaEhQo8rPfcNzHyN2uaeXFWu5UY8TA85Zgy33BJSgo4XDVXPxj5qQ7oq5KYuYmaa",
  "key7": "4QGV6BsCX1UmpyTLP4VuCbiQhjii6btEpZcDQquYPVBggArXS87xWcDvVCw2ye5SoNAXC16YMZpap42oWTEWgxer",
  "key8": "5eyg7SVXi13oo4Sg1sHW373dgCUtJfCYqSdsQtVM6zNvufbAxuQC4QB3iH37qaPsPg7yJFbtWV7d5ALCyi2S6xCX",
  "key9": "R9EGba9iD7fwBRoGmif1QEkpNbzAuGz3k1RfFzwKvFM1cDciUeXgSBo96ZMd78WsAUjwk8edXppsMR6nqkuBMoL",
  "key10": "4LyxjQZR73FdpoKrLvzvqDsS4Cdvmg7LA3CnqaNKPVUvxTRK7r7C1HiEBrPeCUPHTWXX9QmCqoGcPpVmdWCqHhHd",
  "key11": "5RDxsxdTy3DNxvS3NmpmpvcvTtMrg47MPTwWbMKpnKGctmZjGgdwrzi8JAceZGHpHUD7UsSQ38SWUie95v3Tfrut",
  "key12": "3aBF7csABEuRne2sMg6En3UkN9bFds8rNwxNtQwE1BitYT13tD6gvzBRcGRVbhCbH2h4e6ofQoGQcnRQAKbGuRBV",
  "key13": "3kToHzTLCUrzNB2zFBvMFzzWqqJS9YFrq9UVJthyc18eW3p76JTxsk2oyq1rA2N72BpUibnMZMgPCrUDsM3VfDew",
  "key14": "2gq1Z5A8KPZPzwWr31nbkKFbju51cx88VSS1GbQBmZj4yoW14b7fcG4P7wzTpn2ahv4eBhvJCUWertzuidnvT47U",
  "key15": "2QYnKctgR4NKdnxSsdmhTMty87YmYNwxrv1yJgZkJdNomedQYYQAvz6rMBLoLXRqmnadHE321Zg8AHjo7fMN4rzZ",
  "key16": "2tux6nX2N3yZam5XVWN7mKtYgUgNFjEnq29ykcCxuiNhPpduFxd7MGPu34y8vUvZVao7MJxZJpysk7rf4ZVLcTYi",
  "key17": "5Hs1ojDdaf7riYRwBFsC1zFKR51NFicPBQqvEXZZy4wbMQXEMHktAVr3MXo6Fe2kYe8juWXb4m4Jarn9MVKnEZZy",
  "key18": "5MVprPVQigNuq3rCBtSBfwepmho2Uu3M7SxzmZ6Q17Co3EvivhaVRHnh4XDvB6royf6UmzSfjbFkTumDNoVHGyPK",
  "key19": "5NVXa3aQnLufssZ2Gw7i1pn1Wm2gH35WZibiEQ9dYtP55Zg6VS1sBYt8ekFa6mruYLGQTjeu2ks3cpjxXW4PckNv",
  "key20": "3aXVrbJD4ps4ZNuymDji4SdgqP2zTbyNLbH3zSiuBwaogch5QGeQngB6hqGNvCRbfFGS5nMyBFeiwDqUVJ118YL2",
  "key21": "5dWsvN4iWLT3t712jkNsrCBZiFvFbVBwtBCZbNVWqB2YLZws5fkKqrrGJsbC9GPKjSwjsGWpwZtgFrQafFZ7Dzbj",
  "key22": "4iRhuu1bFf3NmU1J163iwTxeZZT8xDcDWmQboCubaaCNjxiNixHd3SmWqxFFwJWWvFKhuctMZ71DhzVt7VJDd6ng",
  "key23": "4sfXbBeZd7WLZkefp8XCWVuYjK97iL1hAV9YUUHE8U4Rq9nazrX7myNhLQUrCLHapM3KauuRevZgomgJwE29zDFc",
  "key24": "2heUPh4g9TrShVgjRhQK2EhgM2gCZh5rYSdE9RmosSCkDsY7RHgx5EG3zPGZEpZF8AARFHk6tMdgfEmrodK9hRSx",
  "key25": "5GpvP139Kt1RsQ4puvQT28TB3yJuexcWh8aEpbcDrap467SWPRCmjnFW2gBpdVnpkVWEAny1zD6Q62RirgWmiuiV",
  "key26": "3eGhipEjPzxAup3ESwbvEwTv6Yy4WmMPnFtzJ9fFNoYrHnFViYF7AotVsACs9ysKPePqNsi8G6xXRLNBQwo2MA6x",
  "key27": "32BGd44v2yoVk9YDPo9bm1HBBxLu7GaS5ibaEtpjbqxjrvRcVGeC6hE2vHT9zZjNiRzY3gktBz9xsULvqR1fYCEp",
  "key28": "4zTwodxSmJdjWYHgwHbNn2tkEJre4UTWkBzbsJVhkQABJ3GatAZQHV5kFk9iSiHxbZLt8q3ctgBvWRjY4AsxXUbG",
  "key29": "5A1JALEL69LcaxSm71Nr9ZJnk6i6HS6jJegzHkgr3BesUSXWEcQFzLXHf8cBL2oX7btzYFCrk7ib84KGs1ektk6q",
  "key30": "66zWLauseX2zaczwmt61eJp734zaPiwZ2Ytd2APyuP6WoB8AqEkNQvBimBYSDGHHFMvze6VT47y59nM1nXKHYGf2",
  "key31": "i1diQbo3obzpbsrNbVNJKuetU1toNN9A953iHbeFfDeZ3L9UKnLcNek1q16sUVhW9vhpi2C3gbmCVE2mVLhpHEJ",
  "key32": "2WKTjuRzH6Uw965by7TWcyy5UdzVBjHgfA8vRDj3t23jNbFSe1hJssbvDAeRn5LcZT4UBSvL3x8uvkYV6QaQZLC6",
  "key33": "2NRwhxL6VaWujoqhnSB5pCsH7y4ospG4xkttzG12nvjs63t7sEDExuSCHvXr3Z8n18YLVnGJH2z249zJMNEtV1G6",
  "key34": "56Ft7FjBvabZyB8dRFpTBP6yNMVghEUrUb5hQVjZksKavRkbrGn78B3yQwnKcijRAbM2PZkpQNqrwkLQe1GUbTiV",
  "key35": "4MoJ655pKRFJamG2mCzMWSVKtzmvhfXjEU3vp7Kpv1iXcgf3bgQpunzNj1JanFVryQdzDmhNznxwB9wmqWVesjkC",
  "key36": "2E7qSN4w5MYQTWfVZg15CnhGbobu5eUpDcXePcTE7L7YUitZa3ezuFCmQZsjzJaJ8GogMp5uYJUfF8mckXq9oM4L",
  "key37": "4neVNdxPbsUwekhYoSQsKvpRmSrT5m5EiTBLeZwcoYs63hZADrKdfFdp9qF8TgAYMhxgJoLVt9ziAQMw6wP1KNS7",
  "key38": "2pVvmmkUVWGaLtjW1qdxviwQKKmkkHgGS7suHMSVEYKUSTNWib1rutWUZdCJLva8dvTyewucfAQu65nnj4GieJP4",
  "key39": "2hinNJ6mvHBvaF9YXjQzLkAu6zMfZrLNmh1f39LXrouBQV6rvbNErkNJUJC4mF1CLKT5KuQFp3RoXR3oVJNDX1bx",
  "key40": "4cjjqBEKrjVBLtw1dRZUCdgAQmGJm3r2RqSV42UUR8vDnFdJXf8eMXqtmjuZpQHSNmcGbVG67zXaoTZyU1bFNUVP",
  "key41": "3FKFp2z4JbQGszZNT4gmjZgHPA9DvC2ZzndkCh5DVgRB5fuTSzi17bgi9DwYcz1uJ9b5ovxL8beS6D1yhFEfbPTQ",
  "key42": "4qdGLSygdmXPiwpeCHQ4J47DK3nt4iqvxkncu3j5keHzr6k4Ahgt9PwCDBHXmyXRuAyRNb5dyo5NfKaUz5NyrJr6",
  "key43": "3GPj4qN8NhqmhHpVSz62o3GDx3CUT68hzayQT1Jy5kVxxqcMnBuJPtNLS1MBEWTrZtphdzBxhkgo6JsbBzDE6du",
  "key44": "5CJ6dQT9qiAw6FJho2E1qvE98H3St4KzZjJVu1uEa98vkQBwAhsbnYXH3sotuNrcJKYausRZv4AzAbzW2mCGuPQU",
  "key45": "6F4czNzeBJr4QdXCeFTLPk2GkLJqNHGqeex413LmqcWwJXZ4Awf818s34i2KaKiJ5ZjPDzetW8CEpgnVvjwQ2z5",
  "key46": "aLGHb4qmTgnkaVUamu5SSKkwv3FTp3qmoTTQZBNKxWdVDNHn21rFafH3xRQdWrkdfFLBQK3iDgNqbaxZXQPiAjg",
  "key47": "3uAr7Yxx3kQPis8EFXvgaAtpGKatr8czc6X5DXdQkgv7A2gTsm44uGniQ4ubChePaTLSe6miVnGVBcYaWUa7FeeD",
  "key48": "4uxyhz2ovBqJ4chtC7wXfgn8uDXTCYSgKH5VsAAcG2Vm3TR3Agfe2fV9rRVJWS3KN6nWZ6SJexf8RpJUwSo1LrBw"
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
