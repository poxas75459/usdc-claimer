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
    "4grcnnyUimYqojcubHkgSJXW86qwWUCBN6viYPFky2WD2B3KYNR4TXK2EqbDzc2ogvrKerWUFoSbzH4mSxhL6FUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kb7SoM3WDQWVWhMZTqir967PP2yu7HvEsitPVpKjs5epodUbaysshQarkpGD1VzwH9h7nK1nJPpiyr4BVivbNCN",
  "key1": "3NYdzCfAEu24F8hUuVLF5TBh67PMgyJ1twYXJTVVW41GZZyhTXd2oEugesy3nNV3edk4t4xz9NGcvoKsLAmmRP8n",
  "key2": "3Chbbm8LTDqdhkPxWxTAJj5TPQJHgLpYZTTNc9cyYuKDJdrg5dGdasd3UnvwTvPCL1wB1RCKsQyReWyhmfcYBMCv",
  "key3": "3ud5aqUchfYuKi8AjLSMKqnBMiT9qXbLY74926h1KoMiwfsL2LH1bWVuDaz2PMDtCFXcMPmWSzoi1ewHATdt76zP",
  "key4": "5UvHdLYnvRYJ1fG3LoirBGhFYXfngcUkPrEzWvCZaeQdAHd3foyZVAmrLQTnH283KECLkScRX1E6A2pfoxUuuoR4",
  "key5": "2165hmLCjLvYKxu22f4Q1jJez5Z1U3jzEKfrUGpZJ9QNwSYVFDp8QCs69wDbmQ2gWZ6rC1MucM82h7NHYcoHi6vb",
  "key6": "5Ss7tvSmEUFWyScBrM1CUsAm8qbX7aXUgjETJyq1ZeDPfqjQJ7iPchoNGH8sgDhFhsM52MiCNtAkoVHq8pJfnMjy",
  "key7": "3G1wrfW2nf2ZAkn31jKYTYqUWUr271YAKVzm3XAw8Jbnu3DcLdFpnHEdeCPGcsUkwFT9K9Mbj8PCKYWNcMEich4e",
  "key8": "2DZ73hj6oyNsQWs2W2tpEs6JWvFonpz5Gq9QBEYH3QW7KnMwbtMVHfDrqXnDjVViggpfPsgQQWH5ZeLr3KSoTBvj",
  "key9": "3G98Wcz7oR46ed1p3SVw6TUVnUURDFPfVHACZygUN6ct2yHxrds4Vo46CVYrYWtAuEo27jPfpz6szb6cUPyxPR4o",
  "key10": "F2k2vfoSEM3eXEgAyZJRLRJqQPAhnkEh4hGAaagACnkdtEtgqhD7b3BezzHsJjbdDGj3doGyn2ffZpNqnwrww1N",
  "key11": "54QQ1xoVAouyBeLQow6V6xB1XT7zrNy3XdrmxJh8qB14n1JQwXpA8TayFJ6FYFrgtBboTfaDwEq5kCMDzTwmkmgu",
  "key12": "3CiZ7QVrUWeugmpXaT3GwRGhfgVuEjJLBzPjYB7WL4FiFAd5Z9xhcHsjsqrswhKBYkxfj5eRAhWFXmDBxTHt4Nxq",
  "key13": "3Wo3K4WG9q95XisEf8j771PYGLwip8j66GSSo7pbTgs2MKCzyVB1fKdamgKoHEbh2N4UGAhpBKHD7J3urxjyS2sn",
  "key14": "58D2i8xPzTg1KciPm7o16Go8tMyb4g3Y98J55MmWHSHMHhuQs1aBre3sVMfJGcRao6ShYqLdVn3SyH35An6hrC99",
  "key15": "3ukQpxRLib72thp3W8t6DM7aULiSBZPhcfaYDGLUGrd74upacnGABAvFWFkvNdS75Te5yHM4kWAbbz5ry39XkJ9Z",
  "key16": "3wCzfaWdowP9mEcVquUFFKMmXRHTD2s3RuLP53kskeJxa1GnXZaaJaoM1Pw95bdmvKBCofrxjfdBau3xWkRTxhRs",
  "key17": "5V3nJoDZCiimfDrGSh82nCdy7x1sazoi6gvF5T9jcwXQ7Ck1txCyqTsJQzErmGyJkXZLxMzizSzwLPvPv93GFcEo",
  "key18": "3pL5MNLgVuizXEJii4xswrckZqLKPHvXYbVAYgha4sdFztW71gmVWgVFue6ghkU6xvPCDYfwvLxLazL2tjBtYPjB",
  "key19": "434t3T6xZGVqEsNDtXtmpAXvHihkwc4bEQM7Kf1jNuq11AyHRRBDRmdfmRF2tu5bfzR7wXzZpKaJZeH7FshFjGpH",
  "key20": "3hLaehuhfRWDHaQGSnVyu9oVJf9T1dgJD5wWrbyRd7X5f7vCDPbuEEWmvDZPxW2GVkSoJwpzYjnvTBo3JPeVNf6V",
  "key21": "jtL1VVDyjAqmeGmmNaDxwPPUWQCHeZThsh5GyBVK3DWSNNAadFybsnUw6tYiTRp4fLTNmWHpEMCSoiPYm9D9Zu6",
  "key22": "36oU2bvWNJCSDXQWVUxDNdLwFUGUEih2ATQR79XxNKHSRgXe9AY5mAbKDP78KGD5qLjHQ9dCmV59vrs5m1Du6BTo",
  "key23": "2MCAoF8sRWiRoZ2xMo2D3vnGScU88gjkmnGetsbp9wydj5sgLavz6wbH5iuDC56G5ezyH4XBC4SAiQgUc7pJgRCW",
  "key24": "37TLmf8boVyeoe1gtsYtTuGZ7vRMuvp7WqTbCtfC5cHWePnXghq8WA1gUKUKCrd1Wsz6n3aTZiAjMJPvQ1aiPgy8",
  "key25": "4GEnq1rHXZKmjtovTX8a66Dr6XqTdBqHGqaCyxrrrJDCtBHcXfR4Mb9kmBaC4FLdanJcNvRZHLw1EtoxNzDVYFQR",
  "key26": "4YE4NYJZWj1NT67WfjAoKof9oGiqQG7RRFDUwTLVsNwRhcv5ahreRKuoNJpmpBhpHgsf4Ffnyb7zZ3na2SiDA1hg",
  "key27": "3mtnBSQLgtFNQco7tajbixmCUDoHQBwCWKaoU1Dj2dV9rqXszR4Jia5QbPs1V6w7SxeGRbYpcqJEJTkuYVzDojC5",
  "key28": "3gr6ZE3mGE2gLqGgMN2TaJoxjz55AgLocAgKDgzT1m4ihWxDh9v8K8vaMgwRY3e8QS9c27T4efStzPbXXQC54y8Q",
  "key29": "4uCBZQAAL8fE6PSzM2sRnqB8vQbrcPzzPeSN5ZC5PvHgdA8p7vQKBTdtZY3eVmzjGN3N9fzQxPBhorVAhv5UkipB",
  "key30": "3CSbZiehdWUMN8ZA5D32LCAA8QmENk1iM621G8qocWewjNZ11KdZcqS2mjjAWFLounQZqvV2B1njN3a9DhmbzTYF",
  "key31": "58HDwRV1Zdvx1QdFfFsqDYbFYxeSamtFKvP37wgxAAtEihwdPHomaNXBwZtTkiS42hpqFb1uSb3yf52n4Dxyvn6g",
  "key32": "3jE2qUjWGMamMcxfrnuCLMP8gnDVBBzzEhVgHukGmbfET3YvWqD3jdP76Qzudx3RDCFkv7rDtw9uv5FQuAyVBHRL",
  "key33": "62w835nwFLfpRHpGNiczRQyWs4HfwpD5gmHBzhG5k9jGcsHSXGhRy9ohx7zjZNCGefAmHrcDvNRxgkx4jpPu47We",
  "key34": "64NSZkaqhQhpEx9MRhRBweFRK8iLQizikLRoenQGjxqxxRN8cYprydf7RsJvLM4Et9EefBTXa3AzbxK73C5v3PFU",
  "key35": "9ojR4wkFxmHRdj5ezqcGz4kWTesuCdeVu6HuAcvPXek1TcC4T2qTvDD3KvuMB3AyJCpAnDg3mTCWpowK8BFsaau",
  "key36": "4rrcCCJ9apDY5pGXGwKAAww3xoRStSp7bq6huafHAyXGvavDpk2hoE39fYRDJeVEtSQ6NNfT8e5UDsu8guQDzc8c",
  "key37": "2KRwdQH61kxFzLTKd7Mymo3a9gYhBtU7nuVFX9d2CPyJkuyGP7HXugEfroBSoRj3Vc1YwUAb4CNxGg2WUFyZW3Zm",
  "key38": "5xdEjMShYkKGFtKiAgWFnmZ3YvxbFzXstejbe9YNufMubytCRBC6DLADVhX8HWvcQkHfD9dvoVcy7QXiuNavacV8",
  "key39": "5FNoPyC6sLmuCyeQJgRgxNUriyfuDwW7KaKE3orybR6tajKoBQRWi5jjP4o1vg297gCjSSpSPu4HR2Fuzp6E2rub",
  "key40": "39ZPNrKunQZSmpk7prpyxVMUnqVa5mVERcYYn7czBL1iwff1LLYCPdAg26PztT71EDVPev1vYj5sJii5dRQiaqhG",
  "key41": "5To78a4qW7qxo3tWDuXdF72z6H79TL4UL1hoWnbwNU93PtRWNtTuDhaXi2Gvti9oXpkGCdQaCT4cgRy2KK5vXHTZ",
  "key42": "2fuuZcxLMxokgrHeMqCZHvXVbj7b6C6h3tVHmLUhTw8jmZqkdb18LGJAX4kRbNC6UK8bv45ss4jThZMrixRrhwht",
  "key43": "4rKKpa58gbCEfFeq4s2E55W7ZMgfxskL4qxTGmTWVmwQyA8eq7S4a82wrvPZFF668xfjcBT99sgisJug9cP9GGWS",
  "key44": "21aRo9kZgWXcUTuFxXBjsRvRiRr1EYPUk6DYmW4gfRAkjFdUj1RJ9DktpbVoqLLjn8mWCpri9BK9kHnvbZrKWsVo",
  "key45": "4E2qUzKRu4UgSFDTZVnzB66om9qipMGseTWVYKByyhXugh9VLaCyHxHkrWffBBbgdnprjoWar3oEHf9dz8cT5KKd",
  "key46": "5nugsXy1a2qXFwv8cPpBgid61hsZHbRXBPZLtUf3QBX7qFJQ8ttTNCgnPaCdHxmPsp7qReprKEKVQGkesmheA7cq"
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
