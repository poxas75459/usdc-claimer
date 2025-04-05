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
    "65R6iXdT7AFNyGxvdcjUNuhAp7wqy5E4m6SCXBN1p3JntdqcQW739o9yF6hjY5Tf8b3PX9zpTHt1JMS52ZarwjQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aeXjLdf65ZC4UvbmZ54HY8t5ntybK6pvyQFfmwf6Cx6ULh3cXADTXPMRYJAjyjanKdWTjG6LG7awHJ4WP7qz2Bs",
  "key1": "2bcwdtFoQeUXDzU5CiSPbk9EGQ7ChHjvqi6Ar7tvpKDk2k8r4KkF4TPBLgkT82KUZbQy6J7VxV9dNxaXmPVADXXr",
  "key2": "34QVmDsp6AzGT4tNfvAwQ9cBncyRnkZDwbRtgwDHPpku5W8Yp1wb1ptvsESoT28WFprNfaEVvTj5QUfDTnzGDVoR",
  "key3": "4bR8uzX4S2QLNR5Mn7FkuPbK4HTzBcbMLenj2Lmt5bPaTJLe4yeV1ZgR9jnWJF97Mr3Q2gW4AoDYzuwoDtCddpEL",
  "key4": "2yEQMbnZQYnYbfDqGS6FhHJesoR67BuPY4WpoQ6icGq2Wx54Jc7koN5giRK3gNzfRcxNgf3sTyUjw6C3D7pwmb2j",
  "key5": "629oaXEdCNGeTKt8dwByYeaPsB6WRJgfonPVosYNvyHqtQcDeKaC8MeGowHxLX1bi5wUCPdfT6xyckGhbtwoNXpF",
  "key6": "5qwycAUrPrWMmCD87pNasmEhNrJGdonK6VLkLmzNs49kYTfBniid1fwucmb2iHm1UvuJJQfQGdQXFvgZZ7cCWq8w",
  "key7": "35wVfeCVaEzDas8mQoJJ1cFWT5Y3YX9Da2KCDUAYngu98TiQQK6DB4xZJknf4KAgsqjjUEfARwr8uhGhNt2kjbAM",
  "key8": "j8HJ8PSrUTriQ5Wr1EoPhhnoDCRm6e2ioQNgGfQMkmyEV5eN8xKas7QazBdHy9Xbe32HNcYsvhYq1GPFyAgoTbT",
  "key9": "5TFrXyHMHKr7resUJTL3Wo2HGAF8EUL7LG7cxQM6MPGf4Du22EQ9iaCnQq9zCjVFNrdudA7Z6uqCn61xYaLKMUcd",
  "key10": "c3YtVPpkM3myAayYTJbbety1EE131d1fCubrYir9nz1KtpcHEP7PC6DpLtta43W6dCKoK5qx2TrBzeA3N6a6NT4",
  "key11": "67ATYPkgPMP8pwFzi9orwq3k2Z2ZNBScLyb4ARmbx5aLvgJiaGkTyjYSvUYqKansPanHYcuNuF3jUkJcYBojRZ1i",
  "key12": "5uonZm8M6aAb4yzVjPEyhXF5yMHMXDuqhkraY375DMoDXRbMiR46LSi4QY8mDVBoNWmUdSdqnQfX8vdK4AW5ScQa",
  "key13": "4JtwaecKwnrFzdZU7LBvN51wfoQiQkpTqvLRTQkSY8xEzerR4N6NnpMewpYpzWfZSBTprUnY2td5HxxfPvwePUdB",
  "key14": "2ywbzJDGB5WBkKzjHC1Gc5yMvusGmx4HfAkRXvrdf6HGzGwpWCCSZ3JGrAcAxHrn8vDeTcymQZSbX7mYD6cCYgJq",
  "key15": "37QdHxXNWfYzAuiTuVZASJptWbpja2Wtd2uLhRFC5pabs7HS9xzYyMV7ByEWbMJ3sz3g99vXhCL5xPs5qJxTUog7",
  "key16": "31BYpTUgewFCDuMrWdb7bHvbMaak1AyepcSxRJwLnmYm4cHHDgc3cBMCyoEzFezinYCiFhaSCtx8V461QKcQEv8B",
  "key17": "665tmVn8S7frLK3C2KGXmNV51oTTSYDkznXphgadYUj9DibGLbcJndHm94sJC4M5A1quACDQ61BezSnXJEXGvmPK",
  "key18": "5PTvX3nBpGds6o9LTwDqwtU8E6rm8nPVTrznooGP6NwtV1gbemXidzGufdJwDnX1pZj72jtDgZqnCoVs5rXLHkyJ",
  "key19": "23NZKq4jjqhpCoH2AxX4YQJbHQ7eUJxnC86V8LCrtbjsZdXBQoF9wZFCFdTgzDwJhTB17j6qi4fouxaxXpibSwzH",
  "key20": "66QsrCR8odfLtT8wyNg8w51ZwrUZWKHyVBUDFxYMeadmt3rbhTZo9sTaVBkHjmKeUGvXCCTeY1xaz7MhvJb6QYPZ",
  "key21": "2B3t7wbtA14CmBGkhaKJyLtV83SUMr3vweRuS4MdqkmgDVUyhraD6HbQzgxosyxRnDUaU3HnHZ3z7Ys1trz4JNRw",
  "key22": "2ettnL3fXwSzCd8sN5yNryMRvpzoQ7pFjbWj63wu7CfW8PNvgm7BDnDo3D8DJkNTmjJHfjxZmQ2kKoD6CJ4FLd9k",
  "key23": "4xpzAF5HV6CwBxZVTxn8eFQSGxjkmyyxd47t35opbiN9fquh73GYjuPuZ1PyyB4YC4Azfxf1MspZmYfJ2GcWmBdG",
  "key24": "39Vrqto1kzNuuzvtwAHTzaPbb1321wC9w38wdsWDLnh3qdRBvWDkGNAe4Px4TyaVMeAFMWveo9ofY5vJ8PASjxHN",
  "key25": "5FQkP4n2UUBVqFeFTvCbcRQMfzFpizN36EBxnxXepkym9SPmTjnZMVHnmoRsFXLhghSzCcNkhT6Q8RXdw46sDAqn",
  "key26": "63VwRDLM4tHqEiHJjXrdAZPHtWxjCE8BSENT14kWHaEDtAFWk4rgs6srpHiXdegfSmAQGAQKiyAgYMTdijY5tDmV",
  "key27": "3BRPYti8tMw1cZV78BmcfuiUmrK35NNGR9istrzgGpR7SfsShgFF6X2YBnW784EZLsFJfHSRPfFdGEMHjYbpcTj1",
  "key28": "6Fg2zbmnfLhLkTKMPmgrbM1zn7wumypmgpnoUribyeb9ejasWziLaEcmBQKZtCNc4qtftHshCNRFfTHnbscxXF6",
  "key29": "C2v8dmRCiQEppQKFRhzKJgLNFNUD8N5JYTawQztAM6bKhvHUyMMqvpKYZ8bo9d5YeJPRCX8ZG51Yizb2m2AyZS2",
  "key30": "3qTspgfY2PL7BuESgMvNvjtPxkNPaoHoxupL4svi7HXoS9x5e54b2SsDAhgWsiJiMXQ5Jno5gtgYvuzuWTEmYkt4",
  "key31": "2sNhSbHgLqMBd4g4vuEjscqWqJWz2Sr8UjX52zmpa2dZ5xw6AmRepbvsdwqWJRSJapBf5KMkDnHMPdiuNJPyLaeD"
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
