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
    "k3xHqBb3hV7F9gcaBfHnE4uk9jYAsyWPXxKWwbt11ASDJHiywNFTDejPMuEqZY1c2Qm65C96Vd9Cp1pcFQZC6wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRkpEJaqvNTujQrLFFtbpSER64bkuMWJGBscaFgzhoypWHvmToeCBNvSmFpz6a7TCbTCet3CSH8wRNs9LCcLtn1",
  "key1": "5fR61FZ9ywPFvxrA88UpoS6q82oMgjEiht9Qrepwm2s6zcSKg5wE7o3zcAtpfv2xRYaYP3aipqFQavbd6YWnS2sh",
  "key2": "2mv51HAoQX2WxeWeSEwHdoK7XDjw1Wjbhw6DKHdWy144tWn2S2DnCZiSNLhz3LBDGopbqyHXQ6fpURRssgD5itaS",
  "key3": "3rHEEvUikM7UpuTKvGyVmcgjXKop2eM171sw1dqdtXmNNX7y4Z86X4soeRfwj2Lky1xZzmxwTcJJoukqX5n2GpDp",
  "key4": "2MT4SFRE9unyxiSfSeDTmuGLsh1j4wPvFGk9VUNyiL7pbZdTtqejUTcytAgpLbegqtL5QQ3Qj2NJyUqaG2Ytq2kS",
  "key5": "5ATv23bHC2WBtL1g1gXZa1Y5FofiZSWF63d9Vcjo4fk2essCW1JKjrRSkbMgYZEKka5KaeVGCp2B3SuPMGWJarUk",
  "key6": "DaboqDUvxiGd3E28rU6NvX5a49pgjG9wiAEg4g4AouB6ynTjZCBNsDKoHwE2MmQBHUfF8yFSEMLBpVC1zT3DY71",
  "key7": "3E2QbFz9WYmkyxYLnoEbaooLMqGEduuFMFtFfv1KnuTisRyZc13t2SQWf9ZjJq4Ywx8ZGMac1Xb2TKtvzfwyefrf",
  "key8": "aa8z9HhWp6bGTHbawxbaKYmFwjrqkBasxTXa2bFzynA24NpKZYcZBMpM8iib1Cw2x9gbq4aL68RWR8TjnkaFWKn",
  "key9": "2XaQduDzCUv85mBWFYvp4g1KaY45LoXaN1adUKp3xF1tqp6uCUkvHUHdhMbzvwHBiR8xLaXLd9TGVBDFMjnfyg4s",
  "key10": "4vjUCwdbK9LsbqJABBGDSzYqwFWE3NgdtuQYhySZabLF8biCjxfDqBKNp94FxnoGb45EFF73PBADLoddJSti7BvK",
  "key11": "4zWbSG8mr9311ohWhdnkKFXLNY5nsFhyzLNqNfG2d2Kts8bMi2MHhcYfnk6RsoTP3dY3Z2HbNrZrMvgaJfnZgkuK",
  "key12": "UcjPFNadhjy3YiutsBdAjNZu1ac9K9qWUdK4RGWBH4iyMoZYoDSSN1bCzrvJ9v2JxS2bGEeQu6X5vVFuTuwy2S5",
  "key13": "5YCEw98jtW9vExxb6MJ9sE9DpwjBg26HrPoAqBthhpE5K76nt5F5vDSC4aEBRnozUMqyfJ8iwz7xF1DmscGy4Y2m",
  "key14": "3K5wWbaq1Z4YxMM69ZgwBd71oTJcPqGWaaLwMrybuoPv8ckdGtSa4fxvmfVFtL3DrV2LEaQQB8JjHEMxD9kdFGxj",
  "key15": "rc83BUFiQn32rULX1A1FYpKxv1NADht79CDzmgV6LjYEKXYVcicZw3jtNqPi8ckyuuht2urkPzw2wvR3Z4JxNrP",
  "key16": "5WaALGn37C5F7ihRWArZuEBy2GwNoQXnsrKWYCecC8vSaodUJxpvr8VMhgbYA9Li5HVF1XgoL8uL93zB6U4bteQe",
  "key17": "fDqScgeB2gPobsYac8YwEGuaiMTthqVm9oqrn2ALcU4m3s8Gi4Kwy4fCSk3y8kMsUf5uyBukytGwqaKWgUtUoaU",
  "key18": "3AccfW51yyo4KXZvisig43Aoy6VmE69Czns2dDmFEZijQGVX1x7k15XBJNfsS5YTbwXc5hokyzjzFy6VQFs5AipM",
  "key19": "36YPiECw8iz6JvJhj8hWVQDNkoj2wBGKeia4tx4WobKYavo44ZMCJ9E6g5chEFbWV4x1MNoM7DjKh1nRSEnrDHJ2",
  "key20": "27pCaoTUMrEXmmYpKjFEUcsugUQps5FkdCBZwhtopwDPdbpa8vmBJY6HUyiKbmbJXQoerFfJJtsaTeofA3KrkX1Q",
  "key21": "3ZxGLsTCfuMMqmRx3dLtMeWAp2UytHZMkPGB5dVpiycNAoup8mfFDxyBxcCyRQsfeD6GJdnjkuGz5C8kq8Fz28Sv",
  "key22": "4bNWRw5XS5ekKPvTWFzoxboRQT4aufyBKi1rWxVsREBzmi8KenRpGhnkPsHyasrqsgRxLfZg1F1usn4diVWKsYcz",
  "key23": "2B2E9NTou8EgQiCHDstT4KgrW62G4iStmhnAJcanTCeyqvFPp2FDjLEgAZ5d4cBzbKgmeC5BvjbBGisq524jEFi7",
  "key24": "2eMcj4986kxTqqqXDWZ33tbbGvffSJJ5vXXh6P4jxoqPcKsbaHWTHBwvuxe1wdFxnWP9qXwYfFTR46Cs3MQJgoaj",
  "key25": "q4SrAyiLNWa3NRd6Nnvp2iTyw9gGYb75zDibF7DujaGfBSKBDuggtydo2wUqDq9iz5jH5jLJMWA5S1or3eY3Ktu",
  "key26": "3jbgKZS1BvixQYxsQFUV6XWdpqf2BWxpBohuCDMEWwz81hHrzdLjrm51RfLpPZ9PJtjzTyRjmWcPcqstX5rtK8U8",
  "key27": "5brRJoefGrCrPJrWRXutt4sNpVihk9yxHsmteTuDMED2u3Xj7D58UXqEoND4v4HZx5rKsMWzD9cembLhhQAUJHga",
  "key28": "FfmP8EtYbATaUohaxM8G4dELH8ajyZNAgJdvGn6QGkgHed5ivJLoWDrtYtEDG8Zp7BphF4TmjBr1nkkmXvKWncN",
  "key29": "8qgegmqbFFr6znAmPWoypkMQ5GnU3s2vDdr44vHveGzRhRTaDJQU9jHmWgfEk5iZWAsg2Yx1bxWC9WJkmuvW9PG",
  "key30": "2qs7AowDSRVvBN8PK8suCsrzw2UnjRjsaD2oHSKXLLysTPsR35Pqjp11RL1BFcW5RbVpHzrCxXWDhPUqSuBsxnYo",
  "key31": "4VwdVeZkZyHSpqCo4gQCwsSJuYv5pHc5D8NL2nLYnknQYaYwzw6bDuNZyZM2QA4AVJJ2edGxAfTFDusn8wq7o4a",
  "key32": "4mCWHN1cdDzfMSvLYSoche2R75KFTHUPCqkgKqrr5Mrdz77wMnaMHJEDKNxvSirgtWiNoP6Fw4pKiXUknPBJxjvD",
  "key33": "4LbdCET6z9dDZK5c7KcmRiVPCHysSxRe3iuSWSDcnEHUUhKDxTcK8w7RLSUNRDNoJ3dzk6wDDZMYUVW2Bx6ZMoW2",
  "key34": "39eBm4HTjwhad7cSfXvMKnQvsrFpqLBsEekN8FaPS5ynZQGsLwsKPLWzVQbHiYezUuUso8FkdskYpHTdB9X22j6R",
  "key35": "664rGJz7J1Z35kNjzJJpxdntwXT7NRsytuCxp76H3oGvtQR4YH3gW3hjPe5UYzi84ed3Jap427SdQn8XXFxwmVRk",
  "key36": "NN5MvWn5neYZmCZNDHwkp2fTD8YGFwBJngT4XKyiNPv73HB5fgrfAhnN6Txu1Dv7GRkXHaBFRvCaNQ7GmryVWLT",
  "key37": "vsLXX9X3CJZtAczw1AnFLdXk3s8jmTUmxwy4z6sbEGVsrfD869UTG4A3cecRa75WXAWuvokPTKFJ7hxJ8YLQ2L6",
  "key38": "3pgKreLfNhrS1XyjGFxF6GWdKmWKhEpPCQTbADj4q2ynywj4oygqgEAG2Cfwy2q1foWzm1TVK9UX52owNxVKx84i",
  "key39": "5gesNbHCntnPsG3CDs5TjFHsP6rh6N1yro5UynFaDQKhVxXmHMv9p3BMgETcbnzRJeDKGgxr7eMxHy2seEdzbo3L",
  "key40": "2CkcANb4nB319MCZUcLcoa2ueLALegdZWwYVLZDMYwk3g8ePAJMGw3mw3C7GzMHZR4aPD9zs1iJQQF7ECDgcH3t6",
  "key41": "nELt9dbQ246nEQTStpd7dMpBmauPBWDRqj6RBqqsBRBEzrnUFtjvP8jV5aUN4YFyi71VMyLCMTb567bKryNEBuR",
  "key42": "2ydb5Fc9QcTp8RLnPZC2x15a82hgn5uYfnJTiDn7fkFq25snQRANNSZmbnuU4FDJXtodK3p7cASzpvzj9fZcha9M",
  "key43": "3ox9bSQqsysDKtT8ed4L2dwyMaCAms4YGbnJLj9LpjLbNUXQrEgg8CDcLxjLDNipyPB6H2SSr7zmqjKsvaQoGXkY",
  "key44": "3XjP3bHekA3bccotaAW3ipg9iQEDyftrC5j3Ra7S2P7shTJtXtBNbYLH9Ha9iLA4ndxfFpjgcZmoL2NL61UE74tA",
  "key45": "5A77AKnCCtHUhk9mLJMqYN6axLkSDwxAk14yX9zRANLrWE9pQ8yrBFtMSaDMEiSeXPLdx6dN4MUksT1g1WUtvHCm"
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
