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
    "5o472dgp8AUCGJVKXXyRrL7sn32NyezoYWKQRJdyVNcBF7QG8AB7yfujXr2q4HnTFvnmodiVVjCdLoZ7vBWubFXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuhhTEDrXwM9QKrPGMmzxN1EyUXwmp2jaqcfDDmRdcqZQm22K3heRPyC2ECrk3VTAgVRXu2dTnPvpcLx4JnSRHs",
  "key1": "5GqSm2FxUJ7ZMC7McP9VMvr3RdYxi3AHpD6cwaZz7LibawSumwnmDt5YwB1BtFBrLG5i16UYizbJAEGH9jwWckni",
  "key2": "3x3xHoQrRqDjFozcJmZ8V2o7gzdosjXWLrxDvkAkGCASrQKcwpfLC2mekhcSjVhEuuNHmM9sUSCKgECo2SLZc2bU",
  "key3": "SZoHecZKR1cczNbt1uVKtQ3dPWkRt6cMPgd4at427AzzWzCcpRk28qaATE3Xhd2p878RYii7feyJTXroSsVfKFF",
  "key4": "2adLLX3jE42Y6ERYBgMgsgsspx8LJGAub1oGe5nRwA6LqGMSt2DejgHdXfyyy1PfLXX8Sr2HPLQBDKRFj9dYbVwm",
  "key5": "452GRZE914nX5pfEmaJSF8CFHLU3yGQQD5qdgmNjsqDbavr45PEW49ixBRVhe2YJtAdD24khtYNttYWp2RJrLGKQ",
  "key6": "5f2Wv62p6ZrvGW2XtULYZVnvrczHBWGEEBdCTQYdptT8dyDPSvFnhiiLC5wmuR9NjqjKgRCTR3wYT1xux5C2EX6F",
  "key7": "uEXNWgqibvFyL2UYFs6ZUndbjZJPxAJcUDJ2RTmFPNjL4oPcM5E8ZVUEmr5ECPSUYejgNLYy3UX6nMnUctRL9N3",
  "key8": "UMotGU3nTZCSFrFegP7v1mV3n4R3qjuzAhcpraLkXXVs8r5sxESU2HcAZe4eTHh2G47CeSa2U7pbFDkSCmeu1u5",
  "key9": "2V5Xvoz3vVsJKdPs8tzPCvASXuGSyuas5KXnP61vfedfvaafNBKgGkA9eNk9wQr8dbJEtkNnowg1YkYW2P38kM1W",
  "key10": "5R9cJWjWWhzesTE5Xga24cWQfSAQ41F5zNM9szkaip2qqTE88m8fF2X1iM6XpYxiPfQifhMTtu1BeAVv5tmAVzHo",
  "key11": "5tVzszQcNBtsB8NkLHzamnwitz4TMCQ4AesFfo9KHSnGoV2MMy7cGGkp27Fyz6uXEA6FyA8fd9U6KALc5mh92NCm",
  "key12": "33Eq2EypZm1LMwx9Vnw68xb5oADi8nL4oo2SvF8EVYnFyS7QzXPTadNqW5WNYfofvfU7bDbigX6xk4HotShSXW7S",
  "key13": "UxowAVbU3wx7KEtGUcUPYAqPsquDTJL8JkTRaMrDKBM86iUP4YXSA7rWw83fPh4EkyMAZUfk9zWCaSgrcNoZhpe",
  "key14": "3azvtezw15EMS8DbwgoWqVVnZUsiCcY9fhw9vGjXNSnXKbThCd2E7fjnbqAEPFptyEf9DhxjNPRv7BFhqvXbNpnq",
  "key15": "Q3UVtkssfGP1jJZbJQFeU7yTeikZ8nrU4YCzucXeLYxgrfVGk79QeVHJBmDtW53coczhVYidqKVo34K6pDoSuSM",
  "key16": "4odxutntJjf6gCJce12jFdgGQr1N1m5rHugmXoasULjmtTjpAPvEwFvnhM1WYRYEKvekbxdsJTXkhGVWprWXxQVB",
  "key17": "4pwQ4fCnAcankRiLttVhVv577WibS5x3Hj8p2aunR4zctWf4ALrbiJvruGPPS8AXeJWXK9MUojfCZCgkgNoHcydp",
  "key18": "wdVXWKWk8EdpS1sVMHd7ZskmVY2SmfHa6pJd2jgc766FR1ubkQo1xPrZaEroXk39A2aXjQqizf6wYCp35mT3GpH",
  "key19": "4AF1kTyxKQSy1qibresaRhz67baedNpzzcNPi3g8r2emaAerd7cTx8zP2kqzaF3AqSFSD2wJteqvvaXqkqWqkpK1",
  "key20": "5ovzbnJYDmWGM2kw4NkMRsvzTDhNwUUu5vAd4jt9X7j6XMkJs6HWQV1eFMpPGTY5yvYtY64KdLmSvPVjpvoZVBuh",
  "key21": "jxNTwZLxn8hKEajMSjRMbzQMnJ2D8fspCtKrQGUbvtdC42Wk2X29WmwCDWWryFp376BjZVhkFFRWqBokh8szZrM",
  "key22": "tGYe4g2xcMsq8uyS7jTfTdruwvuQqRiEGQauTNBJda6SYQtzAfCSmPGVcD7FEbZSao6Ns3Gtz5yvtjHUyuT6Roe",
  "key23": "ruyYzA9DnbZ9SwxZEJBtmbwfRc6QbjsinJPDkD6JnjMzEGcYJvkebrcA69HbZuVWhbPNdeZXNUFSibEpVzomkVF",
  "key24": "3DQQJoVJJTprFcnHTLPw4G8xcAhtqZZhsmAysvJ8qPNsCG32gczRTUztpY33jBZkKHnHXa2bBhyPq9jRm89ixuB4",
  "key25": "syfr8TmWvAdz2ALgGEcFmiB4PJhnXL3jzN8mnY16Yk5VMDzNpMxtBWtQ79qSQ75BsBNkcsXfC2ECuSxoKUgYSo8",
  "key26": "4QNgRt77bszEoCRqw1i8zz4nkLTVXxuKRiBCLkxbyEVyi1kcLaSeKW9ZZqc6ALhSMdkKJyYd17aBWLKJPmwpCyXy",
  "key27": "2bMnfnrmhZX3xsLn8DU9p61pZeXShm9QhUSFFcSXP2tS5ZqjgS8EYX1vjD2MVJbEdMXHv4fSQtxMFFgvLZ8fKr6q",
  "key28": "2iZSMxA7jFjRwApkp3dGDfHAndU1NE5ycc4Fie2XnekeA9CS9AGDuZmr62X8pNgde6smmL2eDAy1qA6rKtBCWSDX",
  "key29": "2yfAo4Ly8tPDerRTCh1Hf3RtTTAEvCUnSqqBK94QGLxRwVxfpqVPx9mEDktArYb62MzEDRUFGX5k7Pc8M4NTPBD2",
  "key30": "54kBYrCCWmjmqxXbhBtxxWDyqjE2gecCx9ei8Bx72ttPCsKystpbYTYyUJ5p2XJwyfRgSrtnwuZhUKgaJF2rQEzy",
  "key31": "4MynMTmPf4Yy5Z4qr3mx9mpGevwZAZiPxzC85Pbv1od14Z229bQshXcpQPoKgbREdeCSr7ZZuaRHiFhbtW7FbzpG",
  "key32": "noENyLXVzyCiLWcTAQHvdyHKQTo9GX6tvz455nLKBRHoxvtn6NnbJHxYi1mw5CaD99VJ2FfhSoeZww5dE1fEjSv",
  "key33": "4LJWfD8vXsCXvW7f2HWkJ3EHhiMbmBB8RqkMdkxVTYNXfhQBjSj3NvxgytGRnJgPrNM4pty9x1Ex9wTGTi4xWPEi",
  "key34": "52wMAUPaNNs6or8tns4pbpGAPn3r2cf82fLVGbc2aLMGyJNodJpT6kFM6GHknF15bXzn17fUYS5JtgR87cwgNWD5",
  "key35": "4GNPGNq1SRnsPEv5qACLj8B7jo2BrdaMiRUosWs8wQqA4LesH2XcQWqfkVdBDdGEWXn2UG7fCG5ChRuYLz4o8zBk",
  "key36": "Ex8fPKumf611mGhqHZoUeQoCtV3ztkNQNvQ74gNxZAgMX4QbZENspiYvo2ACYNusJto56GSbwNGxJno8fRVyLRJ",
  "key37": "315r73xqVS9ts7uUXm2sagGZRzD68axidosuCcuwo4NCz1LTVqNwmKHWAyaBzJmwp6Re9kQ27PyqJKXfNZdcutbV",
  "key38": "5Zpssxtc7phtbekUW5XNfWC44hNm9C2ySKXmGN71gdVAX7B5zxDrbZdUYEpCM3UwsGui5i3VhsGQQvnZwDJTecUj",
  "key39": "5Y2h61DUenpQRmaEwDiPiW58XqsABqPwXBjDMErdSw3e91xbNeVn91HAx5XiRq3TYR669n36L633razRfFdoek5U",
  "key40": "4rBQn4gX6iGUZUaCvBpPBPgevZkzuv1whgv5hYAFTqhCTYNKRMBSWp8Ejec82LkE5xbRNMaqXpDWxZBwRwuscbJf",
  "key41": "4TyxaTiVUa4qmvqNZGCgLBaQh38M8WPqVj9zTZpVTnSshvYekQgmXng3c58bGESwyqdXNHSg9bV7iRvz5Bc8bN2c",
  "key42": "2E3SeHiTLCKbJU2pduMniKsKD4ifdokYYkNwA1ofhKWTvLGYv1p5QP8bqJbQyMHyVakSTEZoC1FfSY5w8sX3QvmZ",
  "key43": "6DPKjh8vgyHHxLH6q8HpfSqpT3BnYHFLszs5fjijpdaaYuVMtntGXmHokYbiwht2bS3jNLJSNxuTNH9Nh8GkbMd",
  "key44": "5y73j86iXgBTp4TkLyHyENFTtg87LsU6U5Z7wDkTYNKweuwLtndWuBL2syEc35ihyU42HpTE39WYksMxiFe6CgKR"
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
