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
    "Rhz1WqJ7Y1cBXimz2aVRKRdDSH192aZ9nUHMsz4bQuXEH7Xw6N5wTL6JHUAXqPeGNNJ5rusMgjcpBxe5XpMiEvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsdSfuSPVbDM5ngxvWeNCRfKuNbyLWZKHiWQmD3XGLSistVHYwSnP6W9MgW2jmk9Rotw992t3nZnEGRaQs3zSva",
  "key1": "4QU4NVUCy5Ua5bdYNWbZMnpMj9YLMUr7aebGHZMh6sGeE8djUeFccmGSzifsW5W6BhuTiUNL6X2x2gKgSxMTNxXy",
  "key2": "ggptALTchtkQn3v9W5roAhd9oHSK1cvTHupA6rrT56dYNgEgiGTdb19iVZ7Jhe4m5mhic3p4UEw2EhxrDP1JvF3",
  "key3": "45LjHYDnBAXF5KvpDW6vYgPRt6J5774swFSXWZuZnGqC13vqDwZdhg4CTSExPYwdDYDRhAaUbL1bmWWbGoyh8P8",
  "key4": "5sg7tCauyVzLQykRjMc1QsdV1yJcPu31fss2EdAPapfpE9hAiscfiE8aUfSnZMRHBkVaCw193QSTgmZnfLoLYh8T",
  "key5": "3NfNTkvyPah7E5WgH914wHaDWRx3nwrknDpKCS2J1YF6ESgrNkxycp9tyMNs4nHXNcss7HH3Mf7MQUhQSaFtvBvo",
  "key6": "5uDHCz3bZy2JeFHNf4ri9KGfc6hU3xw7e7dqXpD6WynJwF2bsmA7X49fYRWhrUtZDruvLcYebBVvM7zduN2rQQiy",
  "key7": "dwZE1L2GRs7G3A7dZmjqJV2hBjtpzp3carVXgiebB7r39sLsAWhwHATXmd8vGLDb4ghUCnhf3EQWZHzd8Gg79tC",
  "key8": "5gwWRqJgGXs7Vns1pxjkFkLDGPT58nLerNLWbjdxbQQmVouRXXejmRXpi4gkA2BTKbtdphvjefiYi83gmHKfyGP5",
  "key9": "3HV7gGR7VCC5cF9zLEMwcCTrev4NU2QWAabUq4N1CM3WwWY3qXFTUDAAHMFThAAX2K54LhHjsbmnGxhzH5qzAvCp",
  "key10": "5ygnxmGKAfPFvoQNQWshiMcfUHSN8BtVQHhxP8tYereLtnaN9sWwwFepPJhjpBCrH5nuPdnbtuafNBEngERXUg7q",
  "key11": "67k8r4cqvV83QZh21AHWVDETA7P6snfdKJqdDyFrdJrs1MjrTnsn5PWABhaGZ7zV7fJzJbR39s3NT1MVpNsMVft2",
  "key12": "bi5mhz3n1Ye1KBJg8czV9PZzNEVzc7HNvsJmBxVBB5vyvQgyyZvdnPBm3bEEhUEpg4PP9DrGX8AsNyZHnPz99yP",
  "key13": "3axBk2seDftQvWjzgdum47WBp2ZSQuwk293rcypA5aZ1wGkLCzNXT1jK9q38fUSS5ryHsZLv2GhE7YbepABCM3HU",
  "key14": "5Whg5HRum3YTy6m71yBBaM3w1oRT3pNM6mymTqNfNnZe5TLgB9KsYxc9daMVgKFfWFJbPkvigHsc6DP3NBv8i4JR",
  "key15": "3CW6tR6puxU3sjv2mNrp7iVdzPfJkcJZaaFiaZtFZmkfzrRLz3f4SUYWccyXLSXzpuDkSVJohimqvah5AEFq3ZhX",
  "key16": "4zMKiuBhQaPz5bE9HV4VsZKW7hgxXdRPCW2cLGYpQ1ciNDzXUPwdy5YoMcxUShXi3U7kgk6U4RKMyYFBVZcALQL1",
  "key17": "2fNmxo39ywmsefLg5X9mbRrUjH7k8uVeF8BmZwbLfMojBgH8QGVsyUboHC6UtqR5W9Jm3rTVaX4tBj1S51ogP8oZ",
  "key18": "JMc1a6b7bVAVZKLdxR3efRaYMuuQYqXt1qhHc4DXY85aspvhN8D4QvCvTV38ZB5jXU2MUukoMhaDALthuMgAzqa",
  "key19": "5LBiUzUadMimQ6dY4kviBg3gHvVhJjcj21wcKe8uXJk7roEwE2zs3HKNUaTGECX5JQgAqGmdWATQtcGYaNuD25U3",
  "key20": "jjACm6JtKFdX7PNuduwDX44KaCFHr9LUZJzwoyTDo3KiHCLr4SLSR9hvWBV7zRPY48kawRu9zb4mM9sXHU5JhLA",
  "key21": "56o1zjVbyAE8gdCzHexTpvr5poELPUrfgL4vkxChkHY1zET9UFsDh2PCrLr3L2PLqjxTvbT7tUa4QMzK3mcqbJ5S",
  "key22": "3JRu5MusSzmSZkSTPuEVrYQRAkT98EsmgeK9dHv9qBSdPF1XxFPAFroLV6DNocN88xr1Gt8mETQA6V3VSh55uzkN",
  "key23": "3nAW1ihu9XLKMMuat1TF3jKRiDxWdk4VrKwWqKuv1NsEjoTMxRtCYWh7NA88uV26to4k96zHPQwZDvVgVTVqz74n",
  "key24": "EwVQW7FQQP4qksgYzwhgYiVhPwc1hgGG3op9bPfsX2cTJsYMPf85LpMKhzMbyVoAaoZStmFSY1QLGdj74WEaLE4",
  "key25": "3xocohRDR1Xkuf5t23oeJLMtFuga6b542T6zXsdPSoUJk8radojd3EbJm9QTpBuwnT25eTHbaX8RrRgCoDKCShG",
  "key26": "3sUCK5Ytbnjt15ykifNanhqWxrBEFsJLQEyWjQcfamn29RuAYVgySxNb2DDRp88JXSPDNyWQSfesSftftmz51mdw",
  "key27": "2bKCpn6zmJ6EENnynvoRbfumBjtBLjTCRdmb7hAZHNdMJdSaokwj6afRi56B73kQPLYuCfdmtJtFbJeyFkeBrLbs",
  "key28": "TvDVvvbLiFTDforKbdNHwy7GSt6u4DrWFC2M6gec1ZytrfdWq3cB6pFZB5vkyxSyuSxWQmqZQAogFgE4uUUPqMv",
  "key29": "XN1ptBt14s9wNhiGaAJvS9FrJ7678MLXF1jnqBvEGB1REqDbzoRHx6a4EoLPuSxkPNsDng5m4gXdcQPVuvYaJNk",
  "key30": "5YiK2y3CVd694L94V7vHdtgLybsmz98L1xo15FDeTDbaZ4pFC1EpV3CbnAgA1anitoYp7E1q4ZGy3rDKznJ1MSDN",
  "key31": "h6KUzNgaSjUAuM7BhZbL4ZTJ3TANFHtQcvkbGUVSL2doY9m4oFy5GakhwSc7QyMVXJFnoXq5YpmxMW9ya35t6Vo",
  "key32": "hxbv67mBCb3xpv2XEjHbQ3f6JT4WaESkrSJ5MV4qSZ6RgJGUCUc7p4izavZVuQFHtdo5QrQB2unfPH1RkmosNdm",
  "key33": "67Zt9591a5oAnhewXJSwA1uvJfyXrve8i6KE1aVFWHtCaXbb1WRYHWpf66u55g1PgyhAJC7ngoK7aJjuPRK35utj"
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
