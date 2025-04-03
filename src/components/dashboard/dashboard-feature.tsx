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
    "3piTvFLB7LzyD833twRKy7svHjxfVVFqNe2DJjoDTwRHHFaFxaMg5UR1vx5nBRDKVzAYtyx42MEmwuLuSyin2rdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shmQCL5TZYob96gu82RhYbHMP9h5Xs86eXnChHtHb7KLwCQkt2QB1sJ76ifaV3xpqxfunYjoDdeztZYyewXUWaS",
  "key1": "2MLi5JYZoMNXPzg2aLe2RNnfmjDuqoKaBTs8NgiP9wPkxuHRDudyTxUM2Lzu1wcUmtnfaeVpitdKSgPwk7kHFAxH",
  "key2": "2gDWSegmHZPAHvXodJr65GYwWcsxhfoHPMLWNvKdAPqtigfhWJfnG8GuExub39m1t8r98t81vjQ8mQ5afG4BxYnA",
  "key3": "3Ra8dsr2F9gPNMBSF81eeskwC8cSPJi3G8U3NwQ3kbujWrZTQWUBkYCUCStt8n15zBE5EVQVPmxEoX3WTfBpfUXG",
  "key4": "3dLTG3jTQ8detw94m7qqYUaYpJGeiU7iFio6bcRtGPEbCdSk4D5m3embq8QXpDxuchiRfv6uYsMKZ93j6dhgS4vu",
  "key5": "535TTNHQjGsWRwtiRPV1vXmLqRqe9NSVomuKUsQBseuo2ztDsWG4w9AvjEXc5atKvxHZfLvAXmE9sz4iZ1EBTjNJ",
  "key6": "4trtEcQRsUGgBXe4VCN3uwAQqkfEKbfcPddpvdWczqoArutmZfzZvWKpVcEYpJ6GAbVxGnZQm969qb7CP6wDLV2L",
  "key7": "4tP48uMM7CKRg4aCLpqW2WAYRzVpYJEToRG4F3YZeFfcBy5xnAqvgBuhsWGv9ASenaduxjf97ipMmdFVSqznkrgE",
  "key8": "4Nb7Mk4AWYsH8pv619Mfwvt4L1AGNLWk7k3uh43TpwrwuepmXtT77hqcDa9saap3Z66uNgqXik96AtKL8MsooNHJ",
  "key9": "rufUaYzn6cKFQnbgWxQzSueTZLZd1AUtCuksmhDvRZHgCwLEJEiTpSUuGvXYJWTPhqJr3yheUKeqFQ17jD4MEx2",
  "key10": "3fWywTWqr88wzsnwqtqmefQkDzLjfQv6TiGk1tgM7eduXgdkWcgHvFJZwdxUfAKxXdHGx183Ua3PjFaam9GfLuuc",
  "key11": "kime7WkNVkQVtnwLruBigC43GuZCeXWfCBkAWyWUjaghVNidcMhhpEyGf6RyYanYyR8f3Kq6S3ETC26kQmUoABZ",
  "key12": "4vxKQ3i2t9KmPpABxdGDcAAHnNTxV21jCJGrTKrecah24axNuEH1SwantcQ4BihCNMNUMhpo5z6qz7c1k3WMVm4i",
  "key13": "4cyQ2CsGyfTJiDFuvt7szVQqNSGR1wXLDRVDviLUBH3GwtJfcjhb5q888PtxoiJEsYiweFSmHKnyzvZnzgHJc856",
  "key14": "2vARJJkfMiQDVqwi31iijcRoip46ortyNMNeJwcexF8nZqo6rv8NZFYNSzX3fwWeoAXPw3R3VGo3VNLDxTTZmLU1",
  "key15": "nqrEMFtiTaAKviTALFEsQAjWwAnFLnCFVXtMBsHPXnCsF6hNH7hZQd2bGn39NqBBJB2nBVEETPUc6rJm3rEUk3N",
  "key16": "5DYyBxM2hEqLbpAs5XR8AG2vs1jsvsMNZR5h3mZdKtxTrep6P1wfzGFAQL7JyffJE1zwGXEc23sRUJUyT8G8AsC4",
  "key17": "4YQceTGJicudWpGLSHJUrQ96dMJAg5m7rsYYEVSzr5vmZUNYiehzzEbW36PCu4Ywdg5RK1Hktwxr4YHKR9Lpf96S",
  "key18": "jyHtLbNgWm7YYsMpsrYqTeCJBnguraNndZTH8uraX18gGctRCbkWMLxPd5qdfvToahyKRPkmeGrTEdQiYo2K6K3",
  "key19": "pPJSTmK6FAp6XScYS4vsfwUrCQiNfCt3toX1Uowxd5aN39AsZK2N5fSA4dsPpoQdBrt4igrJHkxs8Y3jS4Ui6cd",
  "key20": "5DwQoCiXgCC6cFBM7XKs8LkKnTEuZswe6v4hmrTtz5rADxVti7tiNcW32qaSbWTkHPbXuaqPJzhv9RamsxqW8JLY",
  "key21": "2hVVzUbcV2eddgAUMYyhGXD92iG96GPBG3wpgTPQMFfyGNycDUBiZhjfXEAJuK4iRZukBh5CZ4pvTRdNvJYV6uLx",
  "key22": "4eZziWxJh7usPWzWYhzj4d8ncZRVv1tjC5MXHRxQmhi7HFT3JcRSG5Jmak2fZPCYazbwY3rvLQUrzqkadKvXdrDG",
  "key23": "39xH8PyraeZCkQwUjhCTTe121muzi5awwJv82M61Tn4x2cHwrxumkfYK21UyW5DTHu3YitqdDahRyaCfMHoqtbiQ",
  "key24": "4QthUUP67Gpxo6Lv3wJQtyvB9bn4iarbdZ5B7MdgiQjbj46e1cHT6qbLzuDpCNt3wH78Li56GREdJJYcyvzRCkw1",
  "key25": "3P6epVUi8fcUioHZhPMPwKjGUmwYPtZPgDN9xn8CeCPGpv1bfgF7goyKxvaXDDHt3cEoKQ8eMR61ffrEewVisfZ",
  "key26": "2bDRFFb6uX33Jgzbn3R31AL5cBQa4J163ZcMnQZZ2BKaWzWqS363Sig5R8cTsa8x4HfvuCfqTRxe3A3Xm8tsimKZ",
  "key27": "5QkHkM4PuAffHMKBaHcnXgTtwA5vQeHsykWLBkkGEg2epNsxoZEbMbmy53UtEthb41i9zrEgCPLJoUDTV2JcKQ2v",
  "key28": "65M6jLavxrPPxokkNLXsToxcVjW6dE7jNnPqtVw4kwn8i61vTCzLgPeBo9Cz7eyAshwzBnfMQ8mz6NGwVhicYRZk",
  "key29": "4iveTguZaV5888dxLzgfSf2YNKr9gNi7Jv1Dmgzx3ArWgUJnZ2RB4bpN7cNXj4rxkLH9wyDogRPLVZqhYVtYF6xM",
  "key30": "54bsLATZ6nqU7ifUhv2m21akGb43i9dGGFLMUott3vP5Lmo3ipF9qhTao5NkG76AE2AVwodsTZpFXJLHyLXfhy6v",
  "key31": "XkWgCE2FAhuH1nvg3ayCzJ1QksZWviMNApsURaHfH2bGSCRzXa5NGGayPnYuRKyLh6QBL5vsMVLZHwWMqAwVYnt",
  "key32": "3jpsAPta1gw6C3Bqbvg4DE8BBq5pgV3GkH3qpLLXXHjgVTuWUd6JxAFKxRLQyrbPNjTc9EJwTbuFnuTfn4vmUgGq",
  "key33": "he7G8haSvjwCUJk1zk7RGPM88NUqx6B1L2N7ojS4hxV7mK9Qgj6NvPMbUdEudeA9HktsNaCTg9H1x16Fy5a6izB",
  "key34": "sBiPxhwHfbzDCsYkc61arE8CodmvWEfJMHDERWTGfSFE5DM8CPP675QYA9rxuCdo1Nzx4P5D3UZAatezSSrgQE1",
  "key35": "5VdVksdAMqBTD529c8A27HfTotRqnpsjh3cEpWJqNCWRmJ238ckwaGJzTPYu15mxyvuLLYNeDrFbLMr7FQSei1qs",
  "key36": "5hxFvrjyr8surRHnD75hs575opdVtF6hRJwTZdS6KPbz3BHxRA2LTpev4ZHg5rBEsHrwnHCtadThravYbSnz1apj",
  "key37": "4NpGYJdmxwnQJhZaCX7X1mtFCGjmmbnVsswuMypyAvFTYRFzuQ9yH9FaqKNbtL5DpqXbpPHssrWXjbiTx7zUZiHA",
  "key38": "Yyyg46Jze2MXBeWrkn4oDV4J441eXrhdfGHehr4phsbmDAHXZUTCc18qRCq6EM8PpVN3qjiWDPHaixA8GCUgepq",
  "key39": "2EQFnhNTtoLFCBMFw2btQBBUpLYxPLUT3J7wKD4qs5nTf4PwmQQ5Q9KNkRiAdfepY5gp4Qw5UUN5zaWV2WkyYgeG",
  "key40": "2YSLoKNoT4LxVJTTGJQxnVLGMU8pmCUcjoByU351Z2LbDgGKDFYMsfBKKwQgiDRBrpyJkgStagDMuuTiCfcdEEhP",
  "key41": "3f33oq6SUxCPFK8zkqvuTNiGR2b4TiuNtqTbb3BfuvHLKctz9MRn3Ce6LpzCwjZprftpCzitRDNySu1ZrpVRS22Z",
  "key42": "37ejw1ThHmyTUafVMuEifTma5jJzuxumsHHaSbwZVonUpXg89cMCa3o3RPubR4GzZ9i5FtCHV4pmsbgm5kdB3a6m"
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
