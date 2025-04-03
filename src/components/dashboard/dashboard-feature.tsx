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
    "5vQBfYvXxmBSG3c4Ps4RR5ndDAmRk4H2TpvMESW38Mqt6MqcxdfdFWbUS5zztpwjLJAkEfEeMaEk94dQ4w2SRZqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjqLkaVikQxorAg8RABwitiow3iAfRuMXykzmTy3GUpp1Bi38yG4UKyUpVmQ173wtbMBiKzWJi85itJ2QTusjDV",
  "key1": "LrDTwE7zZKRjqjhBNNyG9rvu3PfPVDnwHUX3eySKdR7HoTMpoDc5jTAagG53E8CAVXg4h9iKNhr2GdhRvjd6YyU",
  "key2": "48mVxg6yzLdyjo8bGuSqhW7ydZFpxLXtQHk17yTfvPVXE55tKC9MtYj8vpeBazNw9ZrK8xfwNBPX2SBuptaCiNdb",
  "key3": "62eyzbJAXvmdc53XyBsy7SWMTwBcJoyJH5GkYGMg1asDS7qzAYCdsfA1JJdenMHegYMJKyWocEn9HvJsArBcY4P9",
  "key4": "WWNGJsn7FFCmYyKpu9SMUpHEG7DVqPBQfxtwJiyc1TzUKBykKHDqzE71oHjxmKfAnXRTURWex6Fh3r5k3ptYeZX",
  "key5": "5ta9pJq7ooy4qN1RwgDd7Gtcdy9zfHCuV2RVAfJa3ajdfdKRm9Cv4PdeHVrTiNMeCJmdtdUAKKXqiBQFEP8Y8X9s",
  "key6": "3tbTiPFeCfxKny5jvM6sXiDyMQxz9fHz1GyrDVSKtmyf2HTvArFqJYzNFTPvMWYLqHpodsA57vTNg7KtcG6EzE4q",
  "key7": "2hwSyRcuwUjwzQ7hQkYW1pnBeyPtSwNwocG6aU9JtcgvzEigS1gUHVNoGrgyxfC8L4DcWWzB96ieys9cRta3Escs",
  "key8": "5tFMmmD6oRDvkhTDy9ThYawsbg1HQRTiYhQQxgaQonYSjC9CfeYP68gjwtVnRkMZVbsQi5fkHyuW1mx3eEqzAp6o",
  "key9": "SWLKsX6i8nZLYMTdUcumMA2NzPhuMDJaQvzvpUzuXXp5FKBqYrxvUvREQQxxczb34uCDBkTUipo8SUzT5apbpXU",
  "key10": "2qysMQEM4qBNHA5LCNG4vFQaBgiQnXDEAr2wPL5ZC57PUeJzFtBk24cdie3BeEV3hpXVumqxB6a8oFzgnNaFQbCa",
  "key11": "4AHfzCmchfhLvBFfNoaVDiKCLJhg6yUSKhxthK1cuc7vM5eAtDHVp2R95wUbFNtoBdMhuoapCZ5JbcoLLveaVVT1",
  "key12": "BDSYmgADYr5yz8Lr1uJXSyJZMxTUHvbkX7R7eDj6DA3FBRF8XCMTDaUnhUux74VAPKLsVGCU3ATfU9KKjkEmybS",
  "key13": "SCk27MRfWGg9L3QGrAB8wEq4wPcSn6fYiinMzWeR4o6eCXf1cGiST3yarh1fCnoyjQTQi1n5R7RkN3xYasGM956",
  "key14": "nhcDGzBAzpxZ9dtQLQN3aukkfgKTamzPW9hjmQTSLAX5fmwav5UuCKJsUe3sRfzV2FzLMoYXGXbbwczVcVjEcss",
  "key15": "33iivQgb2yXdjpi2Q845hm3UJghopDU2j2ZuFz7fg2qGfC7irxwPtWL9ANh4D8Kgp4kJ1XZtbcrqrMqxb2KiERio",
  "key16": "3oUHyyyZjGCKZTeCn28RT1YrbV7KsBej6okWRVzcRRvGKxEDawULb9jhqoBpD6UNWhE6zrFu6LZgCx1AcfZfLpRM",
  "key17": "4hiR5mNHBzmLDUzmF8U6XXyN4MFR4AC2nrZK732bnwr5kmHFsi57JiChAMrHoJrCedQTuysL8bZe5vLXDbcszKg7",
  "key18": "4qWukGXMAAdSvJAJE3V2mwny8yBMgdqWZyacjp6nV7yMVbzwru1ejC5mXMbcGNs4koxwK9A7QDiHe7uQfvJ34FM4",
  "key19": "3S7C18QLvcD4maoejcnfFyVWLUp5aWfvftgnUb7YY4TG9bkDci7mc8npWswESHTaahot3gpU5M2erjEPbt6t6DCP",
  "key20": "3kYFhDVpkb3VA6XbUTLxoaw4uYUYUzJ3VDuWU3XT4EW2FevQkP48KHBrNuXh84fXmwnhV2nA6wSieraD5DzRjypg",
  "key21": "2PKTSeH5quCqyumt4jHUDN8ExYqCSxJaAKYZeL7JjTJzYRx69c9BK4ZRrJS2vDGhT5Tjout6eJizDeRASpUnijaN",
  "key22": "63NQwbGTcznzDvQb5qczKNGT6EjTqZDvjbNfvAQKMJYx6LzcyrQgx4Ci6R7egUawGQJVrf1xSihDpAtbmzWwhoY5",
  "key23": "2VhG13Xu87UqiBCBTA2H3zh2KuoJwiA2kDb22grdha1gqUnp6Wqfo2JtMLnNafAsab1agRdZdH2Jwopvmkhtdmu7",
  "key24": "5ToCmBx5HwCC6odPMatbWnUSqrGdWx4fzvnHg9ZDu5vuQswezk4j3MkjJunhwmPqd8txmPgLtu1gSbJ8sGiSKiYf",
  "key25": "2AXFKmevU4pScpqzZAPGW9DYhCLXLKx7B9999hB5JEALJBESnXF226pF8WtiJhHu1uAWyD6RJMHKj9jJe8U3oBQA",
  "key26": "3cRm527urKwL8zUUiQ8VWLmFPB6c83mtpB2M7fdUz1nceaBaUQjCN6cdmZP5cTHyv9QxGnpNUchSSHdAM4eMPceS",
  "key27": "3ztMRZHApUNgLTETXwNLPhHhxowyHnETyii3ido4VC8wvuucexh5x76yN8t6xN1rxNq42toKZh5sHb6LEE9JBtze",
  "key28": "2SurLFviNj9aEf8kEtuncVcm6L9zSJ36zPfwTxpXYaKDmzZgaUFnFG32gEv4LqUafaGCL1ac9C4mf7GMKoo457gx",
  "key29": "1oazcVVNR7tXnG7YGCwV5G9p6UkjeUb7fQZ7ydd5TAyULRSXh72SagwhhD7yQAWpJsoo6BC3WJFqeJaymBmNR4d",
  "key30": "5KAtqkApvtu88zqd4Z4zTk8z64CJpumRkRimaFkSHXXk9zfRkzv7dkf5kDXsy39bir51ZectPRHY9y2nH4iogPja",
  "key31": "5XEbM4LGJQM2YSodmRSuTi43uNPsPtAU1fkjAQ5Gf6nJ6cVFGuBVKzY5b4hM3mtTxjVM7MX1MZozb1ruRSRpBUex",
  "key32": "2TUV7VHGBtBcZnuXsqpjzpgVvdEmM3hyBrSy2PDbCmGjkPaterSSxQFEE52qw17dfEcLc4nohophjq5WPSxgrDkA",
  "key33": "4KFspSsVCWg5f4YeivsvsYtDfHTTAcfYr2o7JVCRvLyRpo1kq2GxERUxAtRZnBvr82WiPBFs4nxUDmZGFQFWWXqB",
  "key34": "Um47aZsagkcHwcS2WsaaaqSDo7pGw7n9TpiabauUMAHwGCb2MWopJeNsTqX5hxwWFjN2P2DiXsBiU931xpQsvGD",
  "key35": "knv1X2niuGxompsokVHNSMDSoriTjsJmdvnNK1EZuH2kATmUMzGpGnTKX7VK6TvSm4hAeAeZ5R2AKq9KYGAK1kU"
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
