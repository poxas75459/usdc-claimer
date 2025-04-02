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
    "8MzoVvAKP34ezwfyAx5AAYvGhgkV1m9QUNNtFb67RnLHbEDuF4SQdFVGimCKF8BS8QoZqWAHfocasEzk425UgeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVtEBmAQmjU8KwC7sCR5hgTZ8nMdaEMx6JFhpbURDenfQMTfBCDhNek6y5RXsvNPXbJZ7RGU3Q6HVRsN5HkTHe4",
  "key1": "2Uo69q4eNvse3KnFe6ZoNZC8t19DnHHybG57Ro25nXp4epN65sSTLMMyABQEEYh6gyiHaJYNGntbwmTbMM9a6dau",
  "key2": "5wu9DT5EZ4ZRAHk2D7d9k9grfDXEsw1rF7Wzdep8LHSWvA4o9uwxRoqaGQPPMU1JYGaF951npX17cM7G8fA1d17s",
  "key3": "2NGdB7Ry1byxQMfyQES85wGNvFWopdGg4zarTz2jZUxF4VqJRinpeN9m9AdzeucY8qLGR5yJqVWu2NXzuPD8Sgsn",
  "key4": "2b8yYu9uXJ1yuo7N47RQawxuMWyKGXsjrMJt2HPVE9PunfjeShdEmyA1JHbsFnQTrHD24HJ16eECoLSFkkcVg6pu",
  "key5": "2WX9y1PHGbEzZqnhZdJGfnbYPLdJeKymGophZsQZgfnG2nZiACSKH8bAcH7aHqi4DwDcSDzGV98nNS7ekn5VVZZ8",
  "key6": "2GqUETKYEvCRw4zTc8JK5R94PfxWMh2B59sQu3gCQhuzvhqFWvo3E8wEZfJs1jwxmeypuRTwUQzJprXMGWgKTNQG",
  "key7": "3SCAXkXgtALT6oW8dErHuzczC3qMTsh2Awuwzknp5Xu8gsuBJ5yr71351NwHfD3kFLPJSzizyrEeqwNwGApxy7Tr",
  "key8": "VcibDYJfgjQepeCRdDiD5uGirvUauPCP7dkkYdTYJVbeQQ5H3wQtjpQHb48xeJBFACcEVagZfZNwjmbb1cAbNv4",
  "key9": "KzRVgDAocjceUpCQkXPiNybyqLQ5XgA6Zp8txnjZfR6C3xV446KuPhXr2GxjVV6cx8UupiKyq5Nugw76yhpLWiZ",
  "key10": "2Q33hiHBJDR9QnJto6z1VdDDBYprrjXnuWFEfF9o5mGs6xdd3LtSNhQag3xJHLL8Vxy9PVNU26rup9hF2tp6TNiN",
  "key11": "41GGsVCbjj6ybQgm5Bbk16YSWofoKfob9BEtRudftZfnzPdVQW8sCaigzqr2FbzJnTbz5pLtRNmYLGm4NmMwATto",
  "key12": "5398HMoZGGbTF66eQmKJihMCMQM58VWhzppSnMVyzgmihhcW2cg7xRVMq12a1VrVcC5XrGPVXUkduB5UzpGnagPp",
  "key13": "246adgcej4aqjiE2zYRUhCcHLMDpPnViBVADNGa7foLhzvSWMu2znxwB64yrJpz2RzrpdpRJgKmzyGv9HZSxhMvF",
  "key14": "3QXC74ZiAyPJgxLeEQdewPdBzqT3FU9W2jAxV4GQ8qRsCuTjZor4CFHFT6crvAbWKyqUVbAoNPKdbt73jcoNULnB",
  "key15": "36FwKoqBKjtzp1KRUavSRwCoWVtNqoPRd8LLh3C69QAbq3ykJiMq3UzvNMqmcQHyA8ssjQd637FAonRkU2Xy516L",
  "key16": "4j8rxzZJNcReHTRc518TQMHTe4sQGCUcKXyNXNVSN9FDYqGL11ierp6gnWJsfPmK5mj3W24fZ9TDUsZZQf2v2vbv",
  "key17": "3VMoKue7Bs97YZYWkZ18MbDeVmUg1VAza6Wj5xeCBB4dEwYyzDBaALCiA3YthjQoXJUknjpjzAU7qw1h89aPneNg",
  "key18": "2hdz5S4ehGSy2WQ9JdxECM466j4MgHrJvyDRh76goV6BdUEtokCiL1vXk1o6xVwcNNPhwuxnFEiAUQ8fQhzGASso",
  "key19": "2oyijMhdCL1btYNfCpQptidTQhYeXNZySmiyPoXZeZnJJPooYRohPufDjhua8dVpKtcPbDUaanrr2ZeC2zUzy3XP",
  "key20": "4qQ7HMm5NXksFSYR9RE7JAZhRSQuFx9SMHzscQHnMLHbgKZg46yTSJ4XeA3SNRXS3v12xw7qvMZ1WFBApwbNsNRz",
  "key21": "5M8kjzKaEhqRJmybFo6fWg8PXU9ndZR8FSrMaHPCW47FRrVh5xVq4hPJEE4ztGuGN1h2YkEtRFqn6hMsbWJbRgGu",
  "key22": "5ycvyc8kKYJAXoBRKNTdf5NHDt2PfKUtHWoTzHWUPTdRkQTwm1S2aSBzyn92zPHr2HfTAyb6jbGu4bnMrot4wCd6",
  "key23": "p79DXDsLQqJMvJEhLdqVFes2ZNs67mLXmeimvFQchrYtiuZodxMFGS3QaYbnzUxrusR9Ez5bqmHYJWzAAm9TEoj",
  "key24": "3FsbCJe6z6MDxscqqwfr2fn8gACRd8QanFDMJduxym9ZPvkeQPh5XQQKSSBS7en6YsF18DhSagXLgqQgakxEkURK",
  "key25": "46A93qPZa5UNBgeqx3qFbnCBme6hfVuFqdtZoJAyrrjM9mEw8dopNkqYPrNNffXJhbk1PRkMVzYiDfTDrNJ6D4FU",
  "key26": "Zh3P2fuxnsBUufxs4Ev2RsbMvmkdzzenGNCNnvEs9GZMc9ux6RwFJjkdHGqwkd8zNr9iGX65FwTrXQQrC3ZQoB1",
  "key27": "4dzAg4SLDuMJAgjFLufxTWU7qyRUu1sVcG6zrYqn8FCCwYyJsH4YsTub9jXTmGam9P5XReRVXpt6WNqb2Pj27cTB",
  "key28": "CYVucByqr5fEx8gDMArAPvJhdhPJQP8pGiTSjHBJA9vW67xTzqN7DJnaYnFXd9TiZURbYHhN5yNecGJHieSkhtw",
  "key29": "5gBXm8L7daSrTqKuouhk965PY2fqQn1KRCP2RwrY3EjYcGeP4MwGx4sBB3XpeXpqfUWYMJXhnKXbLKgkNrPBrdKm",
  "key30": "3cB3FEzVqHFJ9qGFHmPbX5cDRxGf4pDnVC1vecHkuQuLJWoQrVuyMuF7i55a4CbrY1YFmVfnrXVXmGQ5UFQjN7uQ",
  "key31": "4QyE11dqsEbCBoewrBrp5uehve4n5tYRfdpp8PR7ypGfff6DzWJJup36q75QLH8P9eWnR7gUwubvu2GNHKtWA2dw",
  "key32": "4wVHYjVarQXMai1MyddaKG3kYJV9s6ocL9YryXBrEPf2BoBof6NShY8z2BTf6sBt2RVJ2HLQguw1QyKHKnE7eLNZ",
  "key33": "5AmCKALAk8B59HotA21SEySyMKReyWW9zh2cDkgnXsNPmUYUsUGzV1RJ7DC9en4ASSkSi1rxQHWdxXN7ztNByBz3",
  "key34": "3dYeAXSkEaAjrVRrufSPC84kz7Ga4c3nXqLxxpY3jedTJgpWLe6ueQusHY9JuvN2s9UAuNsu11snibDDKHBEAn8y",
  "key35": "65bEvo9AeV9GhTh5FUTYMCnXvn7VhkZJH419j4yFFZzMNvFFTkbA9peGB8kGrZKKyHXHdWQgtBUPVakxEpuv5uGZ",
  "key36": "2D9XBJN3fm1zqZgnpYo2ABEGxT1t8trKfVTy5Ja5fGzt3CK2DG6oDnBJ9vjDpyJnUuK78tgHZyLCibHmfLdgZj76",
  "key37": "34wmWyWWLLFjr7AqwDMg6NAapefFodNXfEMSg6asH9AFwtgoPwvxM8XgGJ7SsCWE1FWa3vnDM5L2e8nhHBDoi7sS",
  "key38": "41narx3QWenfnxVhSYoTZLQxYntDtUzeSEefeaFguCwpkLztA8w4VyCSShsfkT68ZGvZ3DdaJtCfPcUxnQ2sdKtt"
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
