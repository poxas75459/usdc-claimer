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
    "dsiiVejfgd4GaPhRDiwLvGtBBwby7WWN6qdn1i1St4bVcYD6bEaRDGbAktWnHmva7QzFMngZ9Q5eWvChwQT9KMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgf3oLtrZfekja8AgQpSNzdyNEBdYMNt8ibsSk2nrsWt7BWgqxZTheS7Qn8JwDMRE5huRPNkzkv5WG76RqEqnaL",
  "key1": "1GabPGbXWTen2kfrv3LaUbobZrbdh63JGcLr6ycsfWZBaTPrfKa8BGJgBf3sH73kxNLcD7PwtBg12SYZgvT8iSb",
  "key2": "5ejVkzdKucNUubcfPWUCAvMSNHEN1cGyswYKw6DygvDP4irPw2mUtu9C5tiRaGfkpsRffxkt5kLhD79cj4wyHxhK",
  "key3": "edgPqr2wkGHPe2FWfDibcHeSGTDsyS4fsQq796qY1Cux1FSbpjNuPUAza8gCo5u72wwFZXeQoLL43EkjzWkj82B",
  "key4": "4o2ZNoU5wnpKmvgmjL7mNYzAa5LNWtwXKaepYUwMB36nnF7pu7rHXgMntcfxqsxPBT7JnBhMzXkGpiQxN2S9fHeS",
  "key5": "5TSabJSEMCRReESRxu5mjk7A1SZRn4Rh4U1crGrLNndGkARHSx3Ta21S5gUhEtADjSr19dEFHePPX8jLQGfgrGZD",
  "key6": "xcLEGac4Sw6Na8Mr54CnLVNU2WP87MmvDbHA1aFDjzjXYi8muVcRxx5GydYRWhu43teRzpvZEikpch8dcvVEXQX",
  "key7": "dGD8NmYkF6VUnD7PXsRqb73KM5AA7ntfJnuuNB2ZdkjTiUVADiqsyhrGvE3oHpbmMB2rzuJREK9Kg132GQaiYpE",
  "key8": "4wq3wtDCe8pSymm4XyfonKbX9g4QvhjALa8PHjDGEfytDZ3uMbxuf67uYf8zAMJpGsHXt8Q3fR911gmdBdyZNbH5",
  "key9": "49GyQdz5jbWdo2dAAdSffuasfwYQRZzs9ZgqrHww5vLKrw7koNdYW6EY7x8iJgMVTKFd3wFSJPc3EA2DoJpMEQDi",
  "key10": "5HjGTeu5vm8L7wY7y97gASskaU4muja3seadznZGZwPpx7GLABn9n2YmahQ8UoGywuVwwVwvhgixyDBXLiU3wvcm",
  "key11": "473EzSrSHqwVU2rMMpFSFjcrk4rU8KeYPvee5HG3CKT5KgJSXzMfJ4DRF91uuuoAsBAEJ32R4bDq4VKFnpmAKDAa",
  "key12": "3fYkGiHpL3PzBkaqCgBMG9ScXUaCvGEdnVEXNq2XSvapm52tE5WwYjHKvuVTLGTDXg2xKLssVAfKQwY7RMvonDrc",
  "key13": "2LehG7qoFCtMbd4YE4v2VjuDgcphcmvsaBXmwB8tDVSh6iihqCuXjyKujNDE46z5hfnsUVXAVVUKAVY6ikqcaPGZ",
  "key14": "4vCc5CEXht7Fr1C6VgJaVgUj1GnX7CBp1L8W8NsXr6kytinoVFPH5foTqn6ow9K8TsDzjrppebYnyCJJgdcYscsA",
  "key15": "Ju7P4knaB63aDxAGJx3Jf1zeeaZ6UTTLHUfsCVFPoet5bb1q5asvj8H2a6zi4ehimbwh3yvp3HTeCdtccifyVgG",
  "key16": "2Q9dCd1Qu1o5dBjM9bGHtKc8qjFGg4fp2og79k8mfeUomdZYjYiNrGnnWBroGVa74G37oSSf4jSD5Yknw4ZyZwYP",
  "key17": "5DyyJn5BuSxHWyHNptpHFoHd8eDoHNH1J7uC3zSczNobw2xBDrULWWVRC1ndfTwCPShc8qXo1D7MFntT3fwedFCg",
  "key18": "5n9BAhpZjpteDniS3RhHW2Cz8g8pPHMqdafGL6STtdiNqE5GRuG8Ly53a4et8Z7ohzBczXdx73KUnDN77a5unTrz",
  "key19": "4b8wLGPT5pqSWstqYHjyG9ksgZRW6uXupL4qvZX5VVEabKv4xMQZkqXxLUpfPjiKn4TD8s4aNRv7V92AwNAtZBKx",
  "key20": "63p46iK88atbE9shJd381wqNg7opf8JFxwG8PZQ1PCZMogAqCGcpQaWPo81Uupp59GusDAJwiQypoUo5itXYWva1",
  "key21": "47YxhWSBQ2sNVkM55HNBMU1bRS1ftGJcWSokfpcU28oDDVkSxedngTZYogq1cYZtQVvwv4i111oV4LGTxSqjn9Lb",
  "key22": "2Xtzhpkb6nVrFHV5hLhKHb1MfGaxZptnKDPJ4tUYX6DBpXkkSFpigRdgCU8PWbRic8k2cShz3snJjJ945NrAehD1",
  "key23": "w1MTd8vSQ5eaorfxRxD7bNPgabnQF6Ph61BBYM1RJ4SXKiCPwSLSMdpfnYRCu1uNStTgPkRt7fuTyJD6WJvbQ8P",
  "key24": "4zfj7wTyXXQDmXA32Gi2tpnMggC4A96iYPfsx2z1ToWTWq9Q5Z4fi2jGd512QeuQTq5tfDBX2fVo82JzvyZckRgK",
  "key25": "63sSCZRFqBk2FSBJbv3pNHeHNtBmcRNyA9MLJ3S7REhsNRz3jWWVdzRwdiMJZiBbewwuJMTzZLFBwwR6xyATTZUL",
  "key26": "3ioyF3Au6rWT3D2DVaArqqRTpmfTah2nxbc6ZXvXHLEwLuJxg16jBFX4HuvFHu6hZwqoqKL9kDxipdwmSMCYSXMr",
  "key27": "5yZDbkNwGRkhpo3QQUVZV4G8QRmj8jBN8c6nxTxej2JjNQXcvVKqXa3LujrU1nwZKT99Z4ryQieKHcBhGqTX5rFa",
  "key28": "5dqH3XyG5xbNaVqY27fEsY4tK7LXxDpsE3nZzCWd35aQp5asuLLBrZu2m3R2qFxAzkomTfWTkwfzVcqBA6NHiPsm",
  "key29": "ppYzv19NxprSMp19GZaqmhRR18aRTNv79rngPbXJuZbp6R8p5Z9SuqTcy3VmwhUMwyMveKZ9tdBfCWZiTs17vio",
  "key30": "5GDGr2VsDMF9TCHKN9WDZYSpmx15aWDsU3uygadXiosLq2JbBM2ZoCAfLCyr1HQRpEZa8QAhce3K2ZuhWWBeveto",
  "key31": "4qMjAWR9GP1RiHkZz6hfKHPDffNR5kxBr89ejaBmmqvhFPUPivakWGwX71iLxvwNrTvhxF4pvBaaDVYwJsDs2h3V",
  "key32": "5PiNMiK5Zq3ZL1GKWtaJ1mGt5A7Ny2t55PQr9QpedtxNcqkQXnvenHJ2ipXs9HtJ3dubAbpw4S5MZAWRQ53Q3K9M",
  "key33": "24jQzNbECmWhCQS7eotdUkzwFcXMKN8W1QHdVgCJAZQQpdpnE5bRHqqYm5wztMyqqYRYPgNhdgR8uo5qca5CjfLH",
  "key34": "2T2iWyybzbj82hPLQe8G4a5JrYbiDhsNDmmVNdL9iZdW8XwiBsNab5kU5TwbNhSZkpxsWLq95XJVZQVK3oMtgLhf",
  "key35": "3BgnayuvNrd1JiKzyXyreu92BwiAzu69JGamJhqj3SRKNyPVELEzFGJEv9FcrTQepTu6Feu2yLD37oLRnCv1vsKn",
  "key36": "23eTyhihWTEZvEFpsqTKWmPYm1SUVfE7mreLF8CuPjDXEfhwhTpxzKwPCe5ChdrybMC2d7kLGjyc56w17JQXSxqH",
  "key37": "3GHU1Y4jaEYq5iKfnYnPp2V7xcCrbzX7Pmy6TGoxanX3cU3FaM4mfwHM76Y8ybpmJS6YokuJUGXHJiYC4hFrGKj",
  "key38": "2EtjFtHMvrG3KjaYQrzwSUTm184N6Mieug4GmS2ZkAkGFq7S6dAAe2i1G8Bn17ZX6D9UkAEKV1QYKnFmuDTFQ5N7",
  "key39": "4ZGq4jTZYjCZMFZDwcFdBTeGPBm1zEybGzT1teJgMpf4NqSkA6zYEWYP9Vo7r349GEzCwqC1tRKCMaVNeTLkzMea",
  "key40": "5mJVrLzZvZuSPJ5keJTwPrbnfEBArBXzXx642mSs22sPihnfpgS1AbJKvBFTjGGmqeZAyfhqRv3ic2hu9VhjkVCZ",
  "key41": "2kzBfjZCgRLUdK7ec6D7kQxJrgJn9fFoZAKyZoXiePNbVM1EZShP9HJZvVzHYpkWMdiHEuUchEx46wsp2iTZwA9S",
  "key42": "7BWEa7Hx2DUPb3eWd7XYfoy41hqt7vft4jJKnbzxKQp693bszU4LsgRxNwpP8fKMPjkRDJwktUAUdywJrVxMx4X",
  "key43": "2L58z6MiMuCc3GVResQu2otmcW2Yz4s6yPuMrfd2eBhKiiovagFdXwoWLch2TZabmN1S2vyB1svHxwL9svi2TKzN",
  "key44": "97AJaj2FSGh5y1pUuvAu3QV59kRRn8KRqxh1LHMSF3ch5FT4uHcNFhMWwfCfrn2XTU2Qo2vhu5wXmsodaSDcEs4",
  "key45": "32GLH7ixW4YeBDzaGP2aVeRLNsQguC93WWEA7ZziiFQGL6RGTi9bXqsjK5WQbifQdfsk4v3JLzpAtjzCVfG5M5SV",
  "key46": "3ZRwTZgNatbUtB71mQQwdiLBGmrFhLtZ2EgnGsts5G19s6h5DEGVLpSER6ejaQZoAVza5iz58LNP5WqJQYAkY8iq"
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
