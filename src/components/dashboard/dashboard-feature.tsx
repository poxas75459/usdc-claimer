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
    "YPbdGT5aHA7yP3WaykxMaZhjYhX4uvas1Mod5bLsMriAjKdMNxAZBHanLKTc1EgpVLn4ZY69EqxqcnWAJpbuN36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1eKWkvCJH1gvRCBc5og6hPAAwyNvdzmyWWrbzE6qpcU6uMQtPrvQYWMiVTpGuATwy9xv5hFfY8jdPTV5upBTw4",
  "key1": "2yNbxSsne32LyMhio9WrGTwjd8AQ1P4z8u45SyktFnNEh3HmzxdcEV7yJ8TBdH432F2athGDo92uYBVTxLRE9ArT",
  "key2": "3EGpPCg2tFx3G5bnMj5A9sxBB2t955WdhzYxsa98fBuJcJecVsccwizWaEkxJjHSpCAjzHq3CnYjiMuNX51bZmDB",
  "key3": "3XRwyQdoACKTuz7Q4oXBicmKW6cNnztv5rFSzfPaD3qEQFEUFPvXuWPL6D9yvbneyvAcXJBBMxmgjroUYwoX81Wj",
  "key4": "zPTpZ3Lo29DBNGHLSm6oiJG2C9sLCGdz55dnETya4tZTAq4n2JjP1JXgoPjm54UbxdixvtWjfyjD3cuwLnWQcKM",
  "key5": "3W743MyfBKA3Nahj5QWpiLnu9jdrsrbq19G7rmhprS9s54ibEc2E7cfykPf5uLyxAMAb6xZ4NVENN1kFbw6mW3Gy",
  "key6": "4hL7qzosZq1zp5Ub2s4PWKJttt3pfvJxrfE5HU5GJkTUJ1D2i6hbH4xeXqZ1ZPcozfqe7o3tEn7kWswQtGc8onoQ",
  "key7": "65cQCBZcE7zMq78p9ipGNh3iStY8myr4DcQuvjypbyy7h1PBuU44KFvqXthxtmkP3ovH2MWPn2xf937S75o7Fybj",
  "key8": "3Sh1qbahZ5iaVGv65ksT47qW9s3WoSyaufcKe2qQxFtum4igzo9ZSSnKgzmxDvaC9mgbPukK3mKRiYJGgRrFg5Kq",
  "key9": "2d61BUSwwT7iEqBvcV7E382kvCgDqGLHJgYd1EQTLmAmZU8rPna9NJ2Tojciwd7QgaLYeB1t3nQth3GPmeor1YGh",
  "key10": "2T3PyJV3scQhbbeGz1ix66bEHUcc2Xt4gQNS7rAh45odcPcATbg9irdrJ9aNHv3moNEmdxBhmCWvjMVLrnGG4XdF",
  "key11": "2GBkNuv1uYS7SZK91ePs5WqcR8i414WyqG4qDsDGZhg98YcvV8gqavLFCjBeBVsB47PT7DdJLPjbv8uiBubni3Jz",
  "key12": "5o3jCZwSzqQavNKUMYjq6bi2MU9XFACas3KUCcPhp8T8gBtc8uV5SCrdobUeCY8TQLFFd4H4g2U9bkpjYiQ6n8hN",
  "key13": "zJYBMrZGFxVjZpTTkjCgLYYvzunMwW3mqkc6rWgPymGnLtT6mKHFpmkAu7PGsNKoZ7EziP6FhRTUd7AZDYNPSvt",
  "key14": "3tyYgG142rwEbGdb5CUtC27wb8tuDdyuGsUAmvUBRrLRq1yTnFLZpuyMPV8LB3L6uM37BRNjnjeVgEy6tDKqvJw",
  "key15": "5mvN5rYWCAME5C1LDwYNUrQ4ixXFKc71L5jWnUaPfBFzLcYpZhoKx12YK63GABBZj7cw7W3hD1QBmMcNbFh3wfx3",
  "key16": "4eurpyRNLns7BbM7mokk5xNeYsNBkvS6uiv9DGSGhXTPMxTnDmo3oJAmTR9ymH5bREwevR19HtUx5b94hgobEm6k",
  "key17": "2CWKP5q8b1s7qPWj4g1TakMFRfWFPKkWeZZuud5DC4u9jX8dQJ36K59D9coXwCnZTrhEsRAqn7SbXHuWf9mTAG47",
  "key18": "5kSYiQXfEm67ztfE8Wc3AMnvoeHPsZPkwKft4g9xRfHHNwYBCFyZ5nkw9fLXyoYY6n6JxndVqaaRAg1xCHxajHKZ",
  "key19": "4hNrV247bsGy5RMv1ET6s2ai3ST6uE31Y1kKYsk57BD7tGouT6se9p1XU87XWuEztcSQ3RkzFQkBynbEXRWQeNX6",
  "key20": "4geCCgQmPKUPDVQB8Sq3PBc1mgj8chPHH3PeDKob5UtLar5u94zNmn8yUeyondhudGfF8JadpFHsJBV2bQ2GUG8V",
  "key21": "3gdmyTujNQJ8bwSPPtMv9bHRhcHZyzhTa29i2dJCnQX7E5y4j2bJaz9eNm7P6d1BYKrVp7GeePddjnQcNaGmVUqq",
  "key22": "enwgvYAkRtRt2X9M1A4qT8skLpNMtxhRyJGPjBvTisi9cr1SfTgqCg4KnJAQEdgdrvTCVkoehyUDKSQxUW2Pmvr",
  "key23": "2Ts9MoDupwbyWWRmgaWJr1YZKcUEGw5cxYRaCQMFeBkk3d8Pt9UntFnnhNHX5esYaaLuGfEGK9rV9RC2X7Qy1XjZ",
  "key24": "5eGmXXGceYYGp37uPDZ1NJQHY1Eg7kGX8UYCWAopGZ3cf5kV7Np3dTukgVLtbBKUACHr4H7fMkSiVr8saFM9Td7u",
  "key25": "5jqN75mxmfJWWaLL7PaeHmAJqVCLovF2jg3yUJfAjSG348UnkPGBYHR3AY2KfPtxgMuQcVzWTxBsY4bTXFTN1nTW",
  "key26": "4kEpeQshyUJWMHQ6j2J4sCAuXRgUJEQqsjRDVB1NLk7pkW8Y1uddQKHBHckAL6dSu3tWp5yXHfqdiY56kvV7mt2e",
  "key27": "2qcZasXSpgeWPiQpYGKFHUPqtDZxC5a83BwcbJqFYuAcTJEozqbJA2oqd9NgHZMWVpD7FrnFMBMqsVtTeC8GQWib",
  "key28": "NzosmubaKhdi6DkRZZUH4Kvhpo2MQCEF8vpK1VYySHEJQKAH7A7r23tH9PvaJkU64SJJAkERyNKpWfadWw4xDdn",
  "key29": "4SZbbCD1VXQ8zCC7vDFD9nGFGsS7F64MuaXq1wArTiuY1ZApSHm23iFRMaV2t2mv9s14oMZTXmPe3ZuSaN5PHNni",
  "key30": "hNx7Mvg2vuJnTHWm6pkBCGCizHz7V5KMKCB1yGDqAiJvNrSNDdxNU3xskxqxabQ7bbBWts9YuSvHmBtLoa68Nxf",
  "key31": "4Bogfo1i78mE7Jeb3vMJ4psmadS4GPD3P1ea1Nd1U2zhqV5dgXup5SPDoJLDKVBrkwjb3T47zo9srwjRHfk8LLdt",
  "key32": "37hJbnqgALCJXWgpgtRHTCYmB6dL1S5jf1wJch99bAzSrhftanj1KxoF81Z1cSaaapWtd5rrGZcJKzhbA9q3TAaL",
  "key33": "Ne34q9B5iZQwbJZhkM3MSQ8TN712beeQiiJCEuzTs8x9RzvptGM3hSXM7y1jreCy8AM8rTL6uSE4R7f9NPd8LUz",
  "key34": "2acr6K5t5KxRfdpXq6Bnaj2M6gdaS9f3Ew3i3i1HTqwrpnYkY9RuKn1cUgeeeQnhPY7B7uZRsr4cobrG2BkkwYDj",
  "key35": "5S4xGo5UsnQS7sD8W7VyhikgmnCG2ZKHr2RN7iQvUerkD6JMqbFXFQw2jiMCSG2RqgpJyrf8qigeYyexxvrqbn7e",
  "key36": "3DDF7U8H1taVGvEcfP1sZ1DWzgRFx3ipghXXvXMFc3coQXffsKW9Fvgg42A938HESTssVzrRa7rr1w7hW3PEFb9C",
  "key37": "4X1DNWu3qd5LWYxfpKLad7gXXM58XbzEDC6Ah2BGwh1tVA91xr67KxUT4KSdYGikfmMs2MVFJEpdnYVbdUDrcC2c",
  "key38": "4VxdDpBPomXsXuFfXHdqDvEEpiQJ1g16beHY39VjeJC5cMAaxyFNQsJj3Be9WsAwz2KSTWrAApeDaCC2MNL29jRB",
  "key39": "5f257jLtNxTV63EdUjwRbRos4XjppZNrhXVMvv6oopXvC59UQnDPVDqzUpXnFxx3XMQFR81xyTzqfJ1zM5gR1PuX",
  "key40": "5pqU3cD2Z7tJ3LTUwyNndU7q7MmG6xuv4cpUaDYTSmxx3ACwHbUmTV4ZQLXz91qeKiSwSC87gso88e5n9HYBF8p5",
  "key41": "5aQFUnGKmNAcbYgb1CBwcpDx6AEAheUo1MESW3S1z4Le3mcK9rHa8WHKjCd3dgynYv1jRJZYFfsGsD7CFmdhFSxM",
  "key42": "7qdh8zYryVMNQSpzZ2d1iqzHA6wM3AusgpqvwQuKuN3V9vS5BxHCRXKrTraTHsNKTQypY99sdjWNAgdSaRZxsK2",
  "key43": "3Y1mMFGFQ4PZP7hrhnnr5KrLrnEoYDM843RXaBAVzYcgbfHuaJaJsY4Xk1zdccN1ye3jQa2438dxoGsGFD543E7g",
  "key44": "455FbHQFdSscFRPwqi7sMeNBXFwxFaSEfBGpSzPoFbc49Pgy28hxiSZoe1g6N4hRdDVd7ULBqEjUkQSNw24WaTK6",
  "key45": "4uiGhgqQtEiw3aAG55cJZUctSiPGu2eGUbVgCn7Amp955cmU7crNVZHBCvrPSo3j9jzpEGJVGWX2ZLGctLHAr4MC",
  "key46": "4vhzkSuA4pA2X3t4HCHvJEUq65bZph65864NkD1UcJbLjaBHZ558vgGZx5bm1yJ89YVVb1zNgisHwXPskBBPFg3m"
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
