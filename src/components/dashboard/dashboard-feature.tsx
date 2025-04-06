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
    "3mKzb2Jmk63PCcGqTWYhmvyXqdC7xYF9gZAwBwkxipTb69fYuWxXjyDiqpSPngMtKo6UVMQ8DNqMVcqco9u28k3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZtWoJfQDQeHmjixWPFBYTHVxGeydWD32mjq8phfVMzh4pcUVwgStWSDzUeoqRWytijemtcCURowt57MnfcCYfBX",
  "key1": "4KsFESQJvE8UwP2KPZ9Kcv27xsiBmWnqtQu33hraJhfTvpJsuFDGwtw99165ai559MSur4W5cvdhp99d8zBRoiFM",
  "key2": "4oMtFEiyKSAx4S2cGxQ6vsbMN8ACps418equHZsnvMszQ7HTCX2a8JToD4w1mmfGm7nipBbRGy6FhkMq7YhQwZJ",
  "key3": "3GwPAwDsKsz3F5EC11iHsAR99RasDrkHE8qy6VJttkFc7cMAhn2WpX6FndZuGrENFU2RidnPfQoAaFPUrKCABbdf",
  "key4": "yCjV7kXvjvvqY6ngm2yjEQEtoskjo6QtH4aGLiFr4QoDBmx6fRGnCsT4ovYYzAAjtR4Fz3MWazqZGNtWBbNfwtN",
  "key5": "5HqrNkkdsj5n2xednDJQuNPg49M9tKTLTxjiWyYZEmGcMwEHrdk42KqYw2m5s2LcSZ7DyB4JnymMWPanFRBt5nFc",
  "key6": "2vJeF7GDGKRXmiLhM4PnMjJtpqq9X3NtqFZgH7VgLue7kjT2hrSRyawgPm4u87fSTToDtop2AW9X8brkUumAJP4m",
  "key7": "2UxwZPwWBA62UVcGpqjW45C3zQmCfYGEdnv2w3cb4WQzgTkcumFoMBRPuV2KEZCcc5aMBtLM9wEziEspgY1c1nKb",
  "key8": "36MVWWBtggjb4KfjBVVaRbWhF1UMpCTbQ6GkzgfbtfTuZaGAS2YwuycERZmScRACii63muSpdygddeHvxds5QQJc",
  "key9": "35dGsPByMaWju2VTMijnb8nZ3nGYzoLWuitjgwrKQzXHcYvjVYmV4u9kgfLaUJRNkV5VLZeH7rJQcbyigskWtH5U",
  "key10": "2f68kZke1J7HE3eF5RaM4DwFeuDjYR8BXS2yxfPJyJ7PnX2wHhCjH8Zr24K76Fugrtwe9kFjprZtC4moLhANFPBZ",
  "key11": "4evkAroccYsrrbE8GvyTvLy6ZwWXMRsWDwPQVjFHKCcUaDfUtxRKFtSNhwmTNiZ3PJQSG81KTiNZQCLteiTJGQ1v",
  "key12": "35qpUMQztW2xMzvot6jhikKdySjJiCfu8Fz2fa233bCeSy6Ugf3NzYupxoZDPX8QQut2xVVC5SNpLBJ5U2Vem4am",
  "key13": "pW5AQma4mqPnjQNWN2LVzU8wn9Czkgf8bn8CoKP8bUqgs3KXYZxRQzbbB1mcwMeKtN7ifK7nnnpNgKonSjtbDg7",
  "key14": "3wcoXReasnrb9kMUHpAxkU6hqxUe3Jpzez8mCwa2sy12EDLvaneYZS1cg4gMb9BCvMaHz7XrbKX9N5AgiTE99bWY",
  "key15": "29rcJGpzhJXJGMZUMfHtkipwqHdfL8q7M345evTRfhdgiPBP4u56LKVA8H5TbcToM3XdHKyfJq56igynekbfATWb",
  "key16": "43GLjz6Qo6Da7SyWZqNwd7h55U7d51BXSyUNAjxAYLuN3WDucRys69zsGh2mC4ZGQiBPeDnJw2BGwn4252rgE35p",
  "key17": "2gB3PbFgrCs3dzfZddVxUGo2yy5oQZdboM8TFb9R5C2yF77cb4t5KY4md5dyRugyg3VNFTiKJbsyTLLa41JA9uiZ",
  "key18": "JDdqvuHjAC13jJYm4dTVHrofc6eSixFod9mfN4eE2DqFgs5ZybLYVwW7Zz3VdfTzLjz59bbFF2GyUyep8Lg5DkX",
  "key19": "3XkdkTAiBt7LgWK9y8xsWHg7Cew7Fwmnj6kPjCzQTCHXHfqnv1zrVsFbp7nQm6RYnS2URyVAx5odeSSiAPm5MF2v",
  "key20": "aqT7wgm32TAs8H5zBLqMziBskmZSwdV2KdL6vYGhUBDiPcARtbRHZ2mXzZ1bjQuuYHfpuUC1kvX5hKbfjYoNoQp",
  "key21": "UfC7CeYm11NBk85crtd8eN4xPxpfSP2tT28P78T9eWaAa4nTyYQ4z1QSLSNNyN4wqy3shFuNK4fRXdRKNakWq5S",
  "key22": "4b5D4em7d7aJTTLdmfG8TYwjYGtUA4Z5Lhjwpcqjn3EwuReBARXc4qd6aMftr3VxpsP4Usruzf9vUVyCzhzkDsQX",
  "key23": "4pGHqMjmt4Wcid89JE98rQmJp6F2GMKw4P39eptSF1sGoWsYjE3uj7HtvZgBWVDFRW1PUqtsxy3X2Arj7vvS36rw",
  "key24": "4YBLs26R8gGitqefdkjHv9TvEpdakUkzgHs5UAs7q2EHF4tFmXdXM2yKsTJZ6sWs1hU2jSiy6J6MbrH1vUXHPcm5",
  "key25": "4jcxMBFWYfA9YTWyfo9U86xbQayS89J4LGotPtWueXdbqY5BdUycaLgkuW2LMGeMa9tR69v7sWBM5L4gdsBVtyUv",
  "key26": "283nvNBHBsnVSe3KNAJmD1JaM487yf4yNoZ7cQc6CGqY97rqspyDgAJg5yPRRDntQozdwo9jgxhaGgdAaYhuV1Ym",
  "key27": "3KZRQ76LLgUnKZGMoC2pUEqbZBKw43oYMjRKu6LTEKpiNuSMXnsDBNS7mYdzF9benZGh3de3FoDED5Ahi8srSX2p",
  "key28": "5QV3x7FoJsV5KpgggvwLS3u32VFjxz7MC1RkurRDMUnn3f1gQLk7Re168qDTLRLWX299RLJrxBX8J513cKiGTfTv",
  "key29": "3quWrQwV15xWYes27CudQDenbGGRa9WsztA61uMwoY8TUTaaaNNQUgpo1G5qmMr2vF3Vi4mtbW9BCTsywGsnpTM6"
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
