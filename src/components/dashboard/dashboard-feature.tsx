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
    "3acdQRr2weGGJyZwNeAZDTvBiU3zBELGj5uh2AJRwVno7nWsw2hoKHEdMXWc6dCNmfbmaJhi1FMtTnoStUJeqmGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9Up8pMnBxTSRNV8tc5Q7P8Tk7jRzZok55a3EVVo4dzG7DCSrVkbzcfDr8HnC8kyhw6fF7ZGbYJNA1JHfLFsqLG",
  "key1": "3T6wvgGFqirXWS6NajpU8tDFMSVKA5cbvkwByPhVaHvKofoFJGtq9hdCSinLiHeaNPCsnBqqzdnpK38jWK8Xwmuc",
  "key2": "3T788xciAxvLNtb6zSJqZ6MKPijFaACCeZ5yNGV58wGJGUkNgBEXEpAUBmR8fgjCG2h2Pj84NRa2krD2KvnzuvrN",
  "key3": "51eSqq8Bg4KLWHnxp8kW3ybbK2usApDL7ptz3G8uUxiyZW8tLDwhtWR7m5rbrQW7CGu9bSxqPzsbSwRg4NqLMdxA",
  "key4": "5krXBUMbf9iCXbF7vw352Y7WxYq3HE6FjZD1Xwca9idTdKSdje2tb6U3ohZLhCUPHsKxqwvSmwe7dpEVGAzooTDg",
  "key5": "5B1PbsqhgTjQzicV3c46vXKnyKeV7A9HcDBkM1ieLUALGKffsohmb3kmkcmPCiPa6AQemcE5tqNajRAR8A2kTvKd",
  "key6": "45LrLuVt8GqxUqEZ1UDAkf6qjG77gSkdW4CujLJhL3v5qc2UYp6Xco2wPFm6kfeiHtXapNcwm5bg1xB4DqPfWEEj",
  "key7": "5BW4xioMfaaHnHuLkWDh3Lzx523hexaLrs5pcHXGeJFWkYaHQbkNSY5jiAm5S1Rb4nP7YBFjh8xMaTmDwUociH4",
  "key8": "3MgrBguSBZ5mfyDX7PxH6pgZDmFTXGrn8dVQ4NvKYzZ3yV3QbCJNnPjpZisra3NHw8hNBGvaTVrY5pjLfndtWEje",
  "key9": "5pQ3EZSmdxpMZEgcUAdXY6LCZrCLKyapmmqG67BVPBzMjKs74JpXGYW6cifa3fdWk19LGr5WP48hQDVg3tGkSfeD",
  "key10": "2zuiU1f1VEE43ShWqCVN2ttKvKFAxCnxhwN3KAMaE495k8xWwrsnc8NoidWK6Hg3Vs8pB4NZRpKtFrqrj5m5nA8H",
  "key11": "4rgH7Zod9eDUj4kR98QPay3HParY3zWzoP5xUoKYiA32Ru7KDjcogJ2Kancy9BeF81GWsLujwBMCHibzpuYqGhWi",
  "key12": "4CArbgdi5KwcwFuK4VGGFtf48i1x3dz3qMt9ka1tVzkpwTajuSXVuGbBfB2fUFMJpiyFWxFU6fQuHhUybMUEzyeF",
  "key13": "39rdxLyvUqhuaSXg79Qc7G3dNfe1ePD1upyxbEiEauCZKNpzXPD4KDgPJUpxkJLKTt8gvtDKiB8MaNwcw9qL2R9",
  "key14": "3KL9Ts8sbDavcW62KgmsbgkKWHtnhJr68NzKouYPyHp4MV2MGR4KSoWn45g9rHdtqSPXuoB4Bh1cynYvZbFmE5XF",
  "key15": "3t3tS5cWtf1Zp9jG8W9afbdzKHwoFLND1T1CajVEcDLHbt6YFwvZEcnT2xKMTuKgBTZPb7UDvg2ZX1ejNCyeMTD6",
  "key16": "2NYJPF8WGxNjabiseNaFB21AyX6pAb9rhYegXygxC293J7tGJF5PNeNmnaqBL9G5LLvYBPFp7jWQfoj94LCLqkAX",
  "key17": "4eSbQEbXxZshuSxks7K7vPEwn5y7BVr21H1DAN68qu5ywbqbt4rGgiJkgEdZ9Y5RRbgneojyC6HANXim4BFCKDc5",
  "key18": "AvKpAzHTNhA6n6aDq5MzC8jU37V2At6LVxv1LTrduVqNy7bqY8khaSum5oz9kR7YqJXw46d666cYgnFstVPjRk3",
  "key19": "3pjsue91U1ftDw25kL93s8LNuiefCt1DWjWjSCayX1PrJeJZoe8bpnFoc3xPWbVg5x35TZCJMYMLpJWTdCwicPUy",
  "key20": "RmRTFwkFx5UgWonDo3HinZToke5XBASqT4gt8ZCiXyED4hr4wRkR1NZJtxDXrfYwfsra5cHKYLerH1ZNx3kuioG",
  "key21": "4EswipSCVwZdorTB2B7Keif9js1YbAz5br9hrVskmNLQji5kM23RmWJpLcGjN8PXLGbREbodScGoGrRWdBge79b1",
  "key22": "2dGwUX2Bcd3pFtGtF6Qmy5xUi2Jp5XFko5nd771Myv1ZXAqbufk4XeA8WS77raCNHyCJYbnMWRwEbkwzCmTEhvPa",
  "key23": "3YuP1e7qJea8krxb6jjWjYBqKr5E9WY55EEDpwfnFP6Wie6f9w2ADVKNzsXxgjYckAuPBq3NsZG6SAG1Jr6HoUyE",
  "key24": "uszP6WzNU1KV8cWFyAQK82gzBxdeTWYuogKPiJgPMEmD1on5e1pB9JWdUtU7haedR2vimGnVtRNocV36B1JPuQg",
  "key25": "4RckSkcEasD2keUnK7fbraK9irmMcPJw3ynkWiSypgVHzsa2CT5ZYz2DradyBkzUGWJ3UsDWtNBMoEjkEVYzsEgN",
  "key26": "2WPQC54SpsMZhKLL7D3LXMN2RZVkNw1os5arE41hHecT5G6JB8ZWnzzPW8E98TYvzzq3UmCYFkCScwfGAPeRsFPH",
  "key27": "5jSiv2wpii6kZjHPg62FjkcHcZZMeeMsYE48WRmAS35h3eGC2C5iwp7XyB76n25LZEFLNJuyhDJ2dWWHJYRXXJnZ",
  "key28": "axXMSRzV5e6G4nJrAjfViqbLShWmzLTnS1kPXseLTB2wtrU8sJSgcT8KEEEeGAFU1eR2pwaTVHcc7g64nFyoL1u",
  "key29": "5ofQrVDoVKxsnDhAYwTCVKsfL5cGcnM4x69SBgbGwRueNmE4Svh7RCkJrAiN7NHorgx1GXpjyrUXafZgArybRH6G",
  "key30": "2i76LCLc7ZXz9BrWAp2wwrVyxFqBm3aaNAAqUE8Las9gK6FzKtSejk6N4TxJKwj4PSYQC57Gf15ghUbQx4kujxaP",
  "key31": "2XUX93Kc2ngVZssqeiN3ykUPjdGCcQUoYzYPd5X6S385Uo7QFtDytuRsGLcDrPZMamSnScU5gUHLZUGUeyv2SZRR",
  "key32": "2bJPhdNdKGCmbZ3jzh3yMNQAfcX5qE9x337EN6o7fXqadywZkg6tsU87jP4cdF4Xu8kJ4NTshTc4yracC78VgZVU",
  "key33": "2zAiMenNWJgC7ssyGNXZVDWLfAPPfipc1b9w4SbVrHWcznisMrhavpTnuKopdnLjStcAeNpVWtPAm5MpfHm94hpV",
  "key34": "5jdMukZNoyzPx6cJ48T3B4dEFrNX1eDuocAXPK2CoQmVB812Eh8t1hLir5ykrq5pDnnnDmNgCB5RXRS24sMjPEXz",
  "key35": "4Qgi1EQNxvqZ37SGdDY2NBVhxv6gavzJprrErzGbtHDm81E8HrRTEaxQkq2CJxzwDsiGRXqfLvjeDhKPVcY4ovqi",
  "key36": "iGDL8p9w6zpvS7QEQhoHJxnoTGK8tcAvN59znuhaCpk71QAKzdc8929rQq3emujByLoqRhEcyaW65hpCoEYuPDR",
  "key37": "3zLhKYdiYkWQpxUtrQMaAzEXEb2J1VYtVqm2v4bFWA7knCLfzcn8ZxtpeRJ3DAETfsW8dhXmi1RUGgzp71NJpYz1"
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
