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
    "4LpS3Q7kgFdjE7EmZVSNKtx9wNotoSNoKtZBKUVaTgwRrwmzXr2JFDf4uY1u4PeisQWL9xdriP2JrssqKaD1uEYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqoisqEZtjoX4xVrw14CXPwFjDTsPorptDF5mN9FBPf4cPe1jRKbwcTqTgS7GWP5sTc2eGRBykXGBj1i5AUDsfx",
  "key1": "2dXNrpBQrC1efeXzfGTaWJWqM1Nphe4gbZfhg1RJm1QDWM3nfNi97wkbPwe12FquTmFhCHjLDjw18DJW23VddXYT",
  "key2": "5CAFk9xUAGu4dsTfAz8gNuVVmSiL7eLMXtztv8mJ7TAruthb4Qo3SijXA3iSycEznmRKC2zt92QfJ8iXnt3or5V1",
  "key3": "2ZdYSXzmZ7JUvXZHTHV7jww3ECo44LXqR3znmpYwMRkpDwo9BKaKZsWxGMb6C81MayJkDK2jL98WnBfSediiMpNq",
  "key4": "48AnwUmoojXZJayBc57ZdXGEWEgDYZNsipvvuW5Ycaznf2GCMqLMhzLLfnCijr7WyuKCLAyk9TY9WkqihAK6Ck5p",
  "key5": "xAdk54qmEPnvZzaSpGreaeEs7vSAwWJdoxT9vvRYrN6fDwAYbox9FMhUgiFKA99JJSiGGLN1v6DGnXzbhjedWwd",
  "key6": "51oPnk1vJwo38cFtDeTCDrPyF1gnv3ZyLw1J8eFZdot7yBTbNA85764BkCz4rNxkWSXCDsfRmxjSxGRsZNtaqk6o",
  "key7": "4McTAzGhLnEbjWtUiiLthhUWvmx9kfzhHi9C2frq1H7hVcQufYGJgFxPYtqqqSzxPT9wyhAYvxySzKV1P55Pm6V9",
  "key8": "34UTykFr7ZazdA1fPRmyRFJYAGE4Hbv2TkWtWJVGLNNGxzttrxhrwr2GA4G9aCDvXjHL4EQspci6kDkW1i7J5ZpP",
  "key9": "2tMwnjTUzJDot8ze5n4ZSTdFgL2fDCbDb3JeWeCtMs7RLPdXcQLrW4uYbbGNJMQqE5Pg6xzDV2wDnrteLNY9RF2L",
  "key10": "Ti4PxTr5NJWvRzKr74C73HqBSyyngGxMzAnyZ2H5PnFPkd8gSYnZYVquUTyxZVFHUPvFFpk4aHkgruP7uGhVrq8",
  "key11": "43FxpxR6pQoZWsWpPi44wwissthZ9LPWK8eToycEAdoBmrpmFTX9ZXoZHxNEiEyiZyz2fkeHKTMtEYPE9xesXHEw",
  "key12": "4nSAHhJbkSCKSKtXSFTH3VSc7QFcp6UHC6nTeXWqUsaqVrFwxN9UtVppjsmW9TZ9obhvB6dcmjJmnXzsXc1jdM6m",
  "key13": "sjwQy5JkzmdGdEBeVKPF4uSx9iN7vJtzAHAEro9VURxQ2r2y1scWBpxQsGF2CHv6a5DSUMXuvHmi1TgXUVoziuk",
  "key14": "2uEu6773SizpCssXraJkbFU5vwmeX91datxjhbka5sXiQcpQoyrJhNbhxq4EEqeRXeLoQksLhUEiUSunwgur2mUF",
  "key15": "2cDULm127JVBJbCM7HZxrufN7X9XY3F3khc4CAPpWBq3rMFNJgRhoWbidsSCG8CHEEzyZrCZCsCiZoRaoc3qc6y",
  "key16": "4FRNpe5dfsFdTBmQHmi8FKGbtGi7fDRRh6jzhLEzXvoLUHVPZ5vHTsXRhvHfKUDSZLBkSzBbAfyZnRMi75JNZxW7",
  "key17": "22R1kxRVfspUMUCif8H2z7uTmA93wirVp3H1wBizAyTmUwbvinBvY4JyveqZyyST81ysjHXJqTaecHVwwsQJb8Y7",
  "key18": "5kRXFwWGq7LSZY4CsK6oGAyf3KQoJS9V2WnN58PQMq2AFahH6zzZXjMGMb9FtFkGkMqVrxkDZWm1bzT6iXFqKaRf",
  "key19": "5b56FNy1FRXisW5kk6JhUN12pjYeWAMS4fpt3DnPeGPSxD8YCZRG5nkRbict5CDD8NntUuCH7yZHSsPK9JBt1QYL",
  "key20": "4YEFLwXc4qefZN5Up5nLCseiuHaFVRFqriuBziw7Lxvog4tDLad3GjiwfXCdZUsi2cMgs3A5u3sZSMhyTsKxZ2XC",
  "key21": "4diDS5z8B9N3vxA2Ny88Q9jqX8ADuh4oAQDA1BGmAdA54JJgHAVWzEd1JcY4d21SGF2xSNdEDQXKndRXDbBV73Xe",
  "key22": "4TRBC6bh9DLjXafdKPvM5KJK4NyUuvyQjcRPjA7e8PWzLWuCiTPbv35WpVLRqk2DBXMEqWaKWBXPvPR4jR5BvrST",
  "key23": "4b88RNss2fQFyXoS7BASACLcyhvjNuF9AQRq5AV3gPiPPwQp882Vy77PXkg6i4hhCvSHa2e8QRgG4TyyeZXVBQ9S",
  "key24": "31HCNd7xpkMDizFYAmppPfKnXEBx4fcspz864uXQw7toMs6GQC8fY8pQdZQZJUx9rsE76iSdqXUDuw3nMYjqkRcr",
  "key25": "2sC3S3jed14eCYvkaCxVNBSZjxvtZ5KFnbEX1uvKCEMvZtZ9MLanpYty5F1ai9aFm3cpBkU6hYcucDugZBtGig35",
  "key26": "vJt5E2Usm6bSG17ZdCHqCS9fcAU5PP5Rd3ACXJEYSLJ6AncAM7NiYm17eP8fdiZtpZG3vsRbCVdnAiqUnsYTwbw",
  "key27": "2fDFT6UKtQq9z4aQC6nvNt42qaD4EU2R93nQa8JrywAi4LBhT7weqDS9rNLHR7SGVoytnVxkWxKXJad2F56oSJWH",
  "key28": "3jdHtWnKpar4J7ZbR3114DhGc3nu8dZnCvUp91nAE6zHdKY5RM1ZxohWBMuBCUvqKZeLidjyUGWJQ9aR5sneXEX",
  "key29": "2JcXj6Hd41MbBnSTGD2NX3kKH6m2YftfSWKFp9gb4K3pjZ3VYXFnmJ5XLUwy6HaaXUBh1cySmKSDDxh4VfFM7BVd",
  "key30": "46gsoWgJuDMk3WNNzqJUB6wGHGpLNYE5MmeZAT7FXj4oM5XAgjd4wAoxEPMqqKrgqSWpBaCyyXoEyu1PZrj94PL",
  "key31": "36H25N5FqM4zjhGtW8HmwzDWRXMMa7vmSXVaw3AjgwksoW4GFL3MVKaUo3LCoAK2ZQrkHWUtbz1VjnSaRztpaL73",
  "key32": "3jLMA3f7AqA66HMceBByYqbSK4Q8DxbxeLUDCimYrXiR9zcrSbPbTNEDXktibdnzKdFoJBvJmvRuLBowXa6vbTtG",
  "key33": "eZV28sM1icJdJ2PMAjxfPuSUaTzknqDN7JrpuExNs5VnQyTF26RMQ9CFUeyPZGDGrL4ieH1c6HRdhwtaLQEnGN5",
  "key34": "4eGjKNw6vPjKSNDHQZ17a1mmjxMdiQEYQnSxcnRZtHNhGCfcHgBc3rudiYg4MbRprmhVvVffUTYeD8D4eGSG3RhZ",
  "key35": "4v8vkhUGKwn6CWhSn71Q6VZ8aY3zFpGXpsiEZMob3NGB8NotBuEthEwDftcMGqy1dgAodbbHMm4UgF5HHrhJSs2y",
  "key36": "3absTTmiAW79FC57LTeeiHNH2pVbH6ELUzDW1BRdQu6fbWSAzzGSNcJ9284Mm2BhUQAv3XjHc9pTXgK8obJR8FcC"
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
