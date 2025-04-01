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
    "2VzXCyKfqVgXoVtNA7Ui8wuXYxc1Bd1V41rw9Z5hdHc7q7L5WdsHLpETVKq4iijgMKLAsH9pkk8J53D88WQCEsmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPszUtFZ5ofBVzrEtkvJvhsoxcLLDbW5k1ANmt2RdC7CFAuzX5ykbajRicWyxW7zjy9nAZhayk5iFTaA85YpysS",
  "key1": "5YecEgHzm4kZ1upg8PWygfxL2RPhQDxtVQCdErf9A2wCRqN68yptpTDqCBWGCuckHhvNw3o5zWjKCfkRff1jdqdc",
  "key2": "2ucwuqYXaYWZJanAcVZt5idJLaLNDzzxneFWA1Ec13X8tEWKa36HA6LrQVneWbNEFxiii6kVnZSFAZEwV4fx9o7J",
  "key3": "45VgzoB3CtCBUw2AaY68fwbZVbSFzyCeQpz6BCAdSCzokXGRHCFr1Kq2WCu2dsBEkEKzAuRX2T6RozW7f8SSay8r",
  "key4": "4A3p6JbzK6BE1SFaxwt32jeDqhTveQUJUvHQofMETvJqStDeWeFNR5zbG7CbXgKCc5Snknc2z1rsCH29Ko8nX9oy",
  "key5": "47vPwdpXJ9gP5jpF5PZTYtmHBAYnihqrQ13hVoAUtmCxTWA2rbpUVPpbBLtBw6av9gZ7nWmtxDqgUYkCed4WcvhR",
  "key6": "4kPj8VNuRG1bkqCZB4F9gCbtrujNswpgee5pc5ojXS4x9bhiNgWZTNiVqoEFPA8JMLTqnLu4UBqgyVC3F4eMWyMm",
  "key7": "57xgkaQgmaT6hE79iZjdtzDHTDVqNNZF5cyxgHM7deUF1pkTQCb6bruwmZv7wcYVrJ4nkihMykwVcx5LGwHHujkq",
  "key8": "5WL3HJ5dH9RQXh69CifWQwLhvz9b2dq7qVLMxqiuKGFjK6an8G9Z3oZxJxPi5bDJmo3di1V7pqo6XEPw6C8XHwWz",
  "key9": "3K8H3pRqYhwtE6ZoyVVddFNzdiDEasWv3tBF9ye4unvbDNpBc6Hr3jLBptirPrKBZXAsDHKEyVk7DJB3cYbHU5pa",
  "key10": "42HnyNJi1hQ7fbSXMoywDhPFHV1f1teectAHesmLjFWbJXSuX4a8gpHNEr3uqiXztWLkM4oBin3PiR7BN29CCFLh",
  "key11": "U4W6MGRbFXMy7QqLy9VMo8FFT7ABpFzFuGpQdhD8gB619UvogivYKBxJE6PG4r6pKHc8hENWwbcckvPKkN8LEB5",
  "key12": "3XuD2ie6hf7DGUqEFuZGCwSyDvsxQUaEgeCS9oy8aGbPN8Ez9rZpL2NYeD7xhtQLJsUpEnM2nmcpVuQoW9b5kh3o",
  "key13": "5Zpjj1PZ4wcDN2hx5TLZ1eixmk7jUuR597Ex3tbmAeJaw61o7sejNVKeQhCPVQ2wU6VPvoG8m91ZCv42UnR8x6Nf",
  "key14": "3dDAKQRJeDwsMXGaVQUm7zuKDsUeYXrQoVdmTwxGbcUGQZ9tidfAWY3FsB236QGMoESejHKzk22ibkkd9b6kvjuz",
  "key15": "34nL1WBatry4uwctEccq7oLt53d5VGMqmmcDj8yX2DtH7Qe9sa5E2JjczkZMvJCxqESAzxMFWSmEX3Pwz4Zer4Rt",
  "key16": "3tT8CVtePG5raD9kfuNgx8dCCWS7r5eFB23WsrRResF6h2mqrGMFLBqzrYC5BAN9nxTBLr8jT652cFawFcFVGHnd",
  "key17": "NszbfcbJF81fSfXSUS76tdfH9vK8urwoVGNX4VpHhgHVFvXrMQncXZ41n8yt8aKDnDgxc5NuPgLV6NviStQ4CUs",
  "key18": "5MgeDWvo7egLWHFJAG1AAPuBPcMDu1pafxSd1PFJCp39iVje3P3ETY3FRGxZL5C3hFaDLUbgPwrvkqyuUn4JLAcS",
  "key19": "3s6QybxbwXh5Ygyi23yX48ajTrDbxDfN4ZnqDLCuezmBniwrfMVwGQuBojpg5NeDRNT6EWS8C19ohWU5U5ro8pQi",
  "key20": "64CRpN6aiHRWnzXGFcGZxUSFiKvnPHVyGzX1163YkkfcvBFyWjc42JPu9KT5oNQeRXmuo3m1pG7WWqr5czgmxMRF",
  "key21": "3XhpjgqNqvTt9hcwBAcHuz7hLH9SRrEBkgbUypFzc4z1xDXWZT18vnKsGZXtpH6CB4u87kPxuRkFtBxkJYnHZSnC",
  "key22": "4g6JzQufRr67kMpiPWQa3U1QGqwbx6xecdFrTYs7ucyoaXeYBu5TYWjr7EZmzmWbyd66CXVDGPzeDLt9FFw94Fi3",
  "key23": "4UF7uYrWYEB38i3GCKWm7yrgyrA1yZgSRVxUPLJg2JeyhUhtSLFefchRLdzXmoiyqPMtsJPYmsi4PST9ok2nxUug",
  "key24": "3ysTnDAVpSGqkkGjPJ6iBPsqJuY7njejRSgXLJkL2d7M7FaGYEWWYWigQEKcgaKjKGCaz3xLsGbqWBG3cqYMDYpA",
  "key25": "5roD7krWmMAM75Na8esuwHRjoMnmR8FdPSm2Tn3NXp9UzgWgxrpaoCwT6uVM7zwbRomGij3GihCHn2HbhHDKyiKF",
  "key26": "3MmhGxKDCgztgyj5q79c7W5o42FCcKSzxikRo13kU7xj3eSEhNA9NuLhEdcJvkE6ArvQGJd1E6VDrb6wxv36Xkht",
  "key27": "3644bxVZEQwoUz3tadKAfewTk7qL69en4ZMbZR2x3EKoVnTdJAPVMoXdhqsSRw7YB1HhTjAcXScrtU4R5LSaoPiZ",
  "key28": "33FkQwBxNMTjBvY7Es999RWmRzZ6BAyYJ9Zgq6LEfWMXSjN7N99vMKWHPUXVcrxoz9GZXiBFn94DcQzYZJTu2hre",
  "key29": "WFSE3pKv2f3WxH3A2SmbpHgcyvTUBHQ1QMLRrkLL6Xn17xQbt5q9JcFwAE62jgSSg2YSJYytGDC2Bf9MA5DtVE1",
  "key30": "SoFNrVtyhRHcDkEGDVTFQCc3ieReZ3qHEDV9BV3mtQaZANmN2DyNJAcEnkhYGyFQPdfkAPdcmjj5WDRUjsMfQxr",
  "key31": "59vXusUcdZPYKGhw65S2118kEFneBM8Vy7WEwrj93TtUgz9qxqppFT5NR66TCfCdCyoGcwjBU9oNqBw6S5a3SmDU",
  "key32": "4UDTj4ikXwDCs651RZzfAmDEW1FERutxtWeFq2X22cRmQ3esH6MuyPURdbDwikBDuw3SNzmzFoV7sK3FABhqMhL1",
  "key33": "2DYMmRo5F6vMiVaUK631SQBxW2fwWVwuzqD9m1v8keLbSWHpXPuZXTYwkfaEP93dDKaawcRbd4j8BCXchWU1TqWx",
  "key34": "4ieGGjqtg5zwQCrrZWqP8kJXxWmiNbLc4w475fYpyBRBHpV1vZ5Ncx2KipezxKD1D8eMwFTuXmwqKBBomubZ4Wum",
  "key35": "125gphcsAMX2GqX3ecgc4SKDW3L82tw2XCWbq6RoDwA9dkF846p3e7TTULR43zXB1gXqYm573wBcULAnEcKSSE7P",
  "key36": "4m98WCK9dWF8NLLESKuyVTczpH5mGnoQpKzXdwjwenpbDzb5i42xv6QkCfKrXuH3m3xTKtBMpz1MwHdkRDJRdAdh",
  "key37": "2V8FFiSmserTLUSTzXSCqALkwZnUEjNW5GvMbn73kwanQvrU8GQRvozTJGtcjVy8YcUn2G245jbKF1CJqJ5KcGqw",
  "key38": "58b5WmuQFqG2Se4DnYs133vxBnZztj8mj6XksPjenB9Zm8b13CNN9yVm6bpBnTYiHds4idyrzAAvw6JHxJ88Xn9G",
  "key39": "57nYGzqMe3ojED6mRSjJcufpWTBzu7zLyQ3y4YNg9gsEeMd75wA92naqFbrRp1uo77LtUinzbVqEdZrR6doYcfpr",
  "key40": "5b6avceFY95jG2F9gD53epa6fnBrwXbwZA6ns1dq51RTttJynNyqdRer519P9tmfreAkYDEH1CXvbrkGLD12cFCp",
  "key41": "5vUgtcnuo3pxbd5ytMqGbjVRfFvJtesgJcamvNufUN3zz1c3WMj74QMofCrZKgBZRsiFFzkjuVZQCcsdwwwhNtyx",
  "key42": "4giVSAqJJiGuT4QW2d4VEuTcp69qVZVFQ1L5yCQu3J5hAPXqW9KrPmzDZNkgQJRkapKWZFNbuMtJHJ7xDrSfM3ap",
  "key43": "5CtrngHfKyC6EtmxbTx8zBcAAsiRb6VuV6QpZEjxXhj2UKRgrF8uGU9DqguhFXWBAHKd552eJxgDwqN3WZSbN7Dk",
  "key44": "4rd28j4GDKTbNaZCuTv3f1gz1S72DSys5QM9WvzADszryawfhy4p4mPwPBKcCGgtQ6J6oZLdMFHHTWJr8XPh1ZzP",
  "key45": "2Mc4uqcikCTeMiQKqQbKW4bccNAyp2Ys8tcfGkH7jXqcPMrogTyNKrYjKUw3aCkbTZt5QJWhamqFatnZcbq38xVf",
  "key46": "4g633ZRkSM5uzmgxsn2o1wonk4hPX9eXecnaa3LxfEZJ8k38sti5Wa2scek9bS7eNd7EfkZoRdAzePRoVwif3ohh",
  "key47": "CryvfQf92SxszTzrzQn4DKK3RUEgWaMUW2ghEcMXKSuzq7VrZRKShmo1vvtw6U9WwiZd2RBTcYwjExpjkr2Ww3J",
  "key48": "4nKK4EPELbgDPLprrF2pv1b4rTAESo144ATYJXDe5cA7CVzHuzTyCMuULph6pccz9yS35KZceJfTYUCPv9HCW2wU",
  "key49": "5HwQXTdX5qAbxeDCMNrZ3pEafT9UJKBMRN9MmJQWRYE97CtABcrqLMxpukwtQ2GC8iSH3hudzUjGS4LmBAmsxKXD"
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
