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
    "4NXCBCXbVQDP3vcE4goxeyZ939ER3sM7nNxzW71nNsFRJzez5JByqaRVuAcrEfNmpNWGJBpCa91MYUpBpxHrxTkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jYVNyWxZXbSUtWWktbToyFnEaZfNnPXF1ah6pSo2NncvYqLLvNM3aBHyqdC7vxX1WGFaw1pCyZcC9BhHFWucrX",
  "key1": "C3yuiwgFZvLcajsfqfmEi9RtWAwyG9Vk495KfGTDQBZfAMSXc53uYPHzr3FcFrL471wp3M91vRygNZy5cCycyYH",
  "key2": "5rD3FwU1Y5rLffe1MBMEe2b9RUTj5TV22UoF6gPX7p9gU4Dt9LxWdQWhtHGEhGnvAVN5VjiY39iravyE9MqpTMSm",
  "key3": "2qZ9q2adoNxoGX6iLsZiVkifySJSJqcGxWeqdydB4nhuxgjHvzGaCXKsa3Lz8z9mJJfxKVuB2EtAEcTRFwL5EHst",
  "key4": "xG9fdvKnfuW1fTdt3Y59WHcr1jQ5rJWUNbNcZCk8rqPYpGmxZuLpbGDsWLgPKtEMQPSW75kDs8e4j5FsDhMNG3Z",
  "key5": "58XLmUYRPxCqavpFaE5uedpremjj2q1aZMxaRAvZo4hb7aiERkxF6wucqpimNU8fsdM1UtZ9MLjwu3Y2Zq4cr3ii",
  "key6": "c1vUAPDfHv1DuCL8mYiCvnffDFqgehZFMfkqWf9axLH4jtjko5yA3dQ5S4btnjtcBJhfd1Hx6S26camue2JWLxF",
  "key7": "2SarPXbnS4n1cJBAR3s3vsUdj7mVbjY31btfToTpJeQJNWpVy8BC1ordyRgrDop41CHLhXoe6U3ZrB6bnEviiVG8",
  "key8": "hqUuLytemK51syREHaoAAoVQafnPimgmyJCE2H8Z8uHz7FNvzgR5tHW98iWBNFsGcdmgaB4N6W9JRbkcfoWsrtV",
  "key9": "5CrtBNzK8cUzwgFaTbL21aMjeMfACsYhU9qy5Dcij1QqnihELTrsqKbumPYkvH115TwTLBQRkNSynfoeWHBvUNrQ",
  "key10": "5pZye8FM4MojLPQV14LbnHnAQfQ8oPySKLmcRTADdwZPN4pPysqxe1sNtXFXEGqfG8WCxYrhoxhqjJDmFNz2xyqk",
  "key11": "26hdwQQaZkdpF3LX6Vk4yb3dTdTZwHHXbX4JNngKyWhAF85b9dtiXRwbmoma8oiPSU35DeAauQaCdXqw3FMuhKhN",
  "key12": "7rwBbjsFtQupQy9CGNByhbddHrKgyvdG1umUYErUoTgeMGRyskf5JZu9vFwnEqw81DUePaYJe9YcAtP9EHQUQtb",
  "key13": "4ztrqSMhrGmUsHZNPsMw6TPsF2AfBe5bdPWrjiQGbXTbDnYNr7wYCUhWTXZ3ieFsUr1eM4wbuECiXPypE9NvGS4F",
  "key14": "3EewjLsAZasBMwm8a2juETVq1Dh4FUv5d4LRaTLvSkcdey19tDyMHuDS7LWdPiDD69GaKVzWz1QKCxFde2ubLYk4",
  "key15": "2H6XBM7fCEY7gXwhyUZbfKF4cincNYKhkWWW22cu3GyCihkvSHVLE3pbamiEq23VZDFa7QiDFksFAPFkSEZkX6bq",
  "key16": "61UBFv5CwrrdZUfPNgSbboeQG1XE5dF4G8d82WbYPPz4Qt6qLuQFRqTd6wgLCixZhtJNpGJavniLsBV7ttivCvTj",
  "key17": "3KLbGmwHnpuuna8hzzHJYC3GbSnjv1yPKcYE6CdWJj4CA6F6WF6dGLFMech6BEyoeSDQ4SnPWmiNF3V3i9Px75sx",
  "key18": "2q2rRj1xyDEyC4dXwKZ19GJYrrZbgrN8X7huaCxiqygMbRFYAL8LkYZwQNmjBuTThYHfMf4Ny9chj8dPGoz24X4h",
  "key19": "4qikrYoBXJvBXkxEdYD8nrw5TbFUEsu3kzBhszD3kjRyX6qfbv6oiKbYArKnATCTD4dN3vh9DbFsVjK1Bjbbh19P",
  "key20": "2hPZoSSxRLo8Vwr9nmXYNBd3AvXaaNGmgRQ4U4Q5cc5fBFZ5Q3KteuTVcVoyueKqW15pFJs3DpN6PbXogJoaNRAV",
  "key21": "2J1rDgkGD5rBktvQmRYkSQRXKAn5g19QN8b81TyCRvaq48jeDirD5fsGmf7fZGREGNcPgz9Ye7TXMARis2AJ2Xf7",
  "key22": "3Btt1fPjtt39GKaXaHkT72DYpxyCqcPhJFmtPgMYybk8infHdewMuFqFX2cGBjNUqjJW34ZiBKVJ2xKqrWnVs4wQ",
  "key23": "5LrnU8nbWnAKGk4ncRYdEgBzt33uXoMYqRy6Y7UEEV6nzT5v7ueyYqck4dXrYUs4MXR9BJ17aHZ1NpdNHtqQ1xCm",
  "key24": "3egXnEFCRgCepUCKpFqepctKkEEGwvYfrLPLfSYmUrT8gDiJBHZZcW1sHzkacZ3jhfwbjtHmJ5GftsQ6bRHxYCVV",
  "key25": "3FGc1bDximfqFQH1219cEv8Pm8SjB3EDXPVP51GpxEEukdMfV8dBGHquC4HSHykuCYx15HtpPuEsgFHoLFv2dm49",
  "key26": "2WpfNcVe8U8pJURYzpkyyoh1vjApBuoYiWxmh3QksBwnKYsrP7mh9HG5s8BTezr2atLnC8VMYD9zSgp3cVrt8Xdh",
  "key27": "38vW3wPzuKrQR1fmnbVbHBdhwJcAvpuLW6kGxSRpbezTXVXgrEWaTxASk2tynwtaLeQ7GuLPPwnXSmCuDzfdocsh",
  "key28": "4YBtWeCR9dePCyeNom33bi169DYuu8PnCxQPvLQgBqy2S9KwAJXkQhNs3qXdekbEyad7SAs2HthQyny9d62GK4FL",
  "key29": "64AYTNXey7G1eU6keLtzJpvse2LcW4qA6TP2Nx4AXkiqU3K6mY4JuSHa4EpVfL7gc9D18uGASaXGahtp66kEQFPm",
  "key30": "4DzTXXgwXdA7W8knTRr4Ymbss2YpgjCKia5WdcFH5M9Q3FRe5r4XTvaffkXQGmVKQ8TM4AFyugWXdV7BnZ4a2itX",
  "key31": "5vgesmSziAkbfszwYpQghrRQYAPVSdF5vztogmnfAHZDhjG4zqQCTTAFNrQm37MhJzjERYYZ7Zbs6UWdS6tS5jCm",
  "key32": "3wy3fcxxBWt5z8TPxnGbmXMg1RWJDac3WFkpv76f1ptyjiXxsGWFQEr1pmi8CuLDX3caZ7uvgCdtvcn98MiimK1P",
  "key33": "5oTDTT7d8WasaqqS2NeLKhiM6XysKyDoftUTiBk88vQeanUmyfz5ziDbiMM8knsRWPWJHxae1Jd9yqJaPZLs73bq",
  "key34": "2r1eEoAok5K4aAYxzwC7F4yRZP1WnjQiwFh4fjfF2YHxDBxjq1dXje5MTU66oqaiqZ567eNGkC8CCR4GwvPyCiaD",
  "key35": "64geNChXx2caZ3P1GZGprT6K1CzcbvW6TrwTF7LYRNcNcmjZ9zSUVNXq1w2z1dspx2HE2i64JCiDfeT5s5up6fsd",
  "key36": "2anJAX5rUQ6VNNomdGRfuaw8K7YikgnPN54tU6mUFbY7227qsTdFxzm5v9ko2S1RMcS2oZpiUXVhBW18ApPAgRbX",
  "key37": "2A6RVB96t4TzC1Ph65AR6MQWXKZXR8bXsZ1a3ZMbeiiF2bGtCZXz1MteNQ5bPimWd5ixPGFe6ihhN7xdrUiPc3M3",
  "key38": "2nCuTVfbmRDoPbnAq8QtXcp5gb836Ly8ezuFaTFXoPGuAuXQGPZfn4FAJ6u2J9ausjfxQg46fgGTqJC3YvpAZVuj",
  "key39": "25oH3hzRPoy73WwGSztEN5msFRZqZF7HAHFoGWx8yEc9NQDpiU1nf3YJRrpntLopP3jBXugufxeJxD7M3bwwBfqc"
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
