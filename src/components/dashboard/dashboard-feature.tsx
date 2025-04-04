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
    "4hnoWfTV75cwFFeAdj2FtMACKiqc9kLVS4iS9vj4DRL1mmuJDkQRd2JcXLsf1t3cVi8TC1XsSewRjjHkpYLjB4GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBFh3jS4a7BoZ9K3sy8eZkri4Sz4859h3GU8SsDmEFzyBAaqniV1V6AuUUmg7mD8i1LYJ9HLdRwLSWjZm2wpUoT",
  "key1": "vM7AXexKDp18JbYR1nZVZyYoFthFox84FQK4Q6XL4NvbREfxLUs1vCLG72n7XBKxoEaPR9nfusEnzqD8qyQpqoy",
  "key2": "4CzWCQPxWWKZcXWMZeoUKRhGmZD4PXc4Ai7Qkp5LrZJsAJ3nrr6Da74jBrAV1X5GkSFF5U5K8P4h3bUFxvzN1KYK",
  "key3": "Xk2AtNpwhJvNUVFbgTeCj1rR24o3nV3DzZ4kuQ6R1LkTQWEuQVc9YyBBmbLDsJk5C8jphXMXQ8U2CwT4ThMMbiq",
  "key4": "3BrNdJW2J12cJjSpiCkmqZ3yb3AjNbDA2HmUZhPGMUrqaXo4DkJpGrCxQRLs6XorZQ3hVBTLVrrhgubAuTnRj6bh",
  "key5": "4bz2rMm1P1CgRdGiphmJ1gMYYKZ837kRA5QafBPqY8PR7gLANAdRGM7tfHSu4feUhSGXGucXTCzmp1XVpghAp5Dw",
  "key6": "2imF1Ew5joxFVcMm8dwjRx2kcKEYDpzswa4FgtBs7R8B5DWfRAoeG6xpzr7nd8M3gPugtGrWXVZnFRAgeeQZMj3B",
  "key7": "5sqx4VEcWqV8LKbHUpRzTK3gsm55uSsKLXhWXeeXsxfbgEBfUhkTHtYVrAmTR5yDTyqMjt7eSRhGp17vj2vm3xUM",
  "key8": "4QUsUUL1YCescUvHJUKaJwfrLvtgBV4pxduaGTsL3J5Ks8iabzNYNyT3sc2dRex25nkiJUDNdPDxzf6FJTBRNQph",
  "key9": "qr5WgT8ykgTXp9kuZ1YXzeX9JWa27Pv1XwT4UrntbBNEgSK4R8i8eWNscKu3sgPxXDFNfSSeTb9JEZR4Guh3cKT",
  "key10": "5PNqx6FYTBLzKMaeAzKFHeSfDFywKmEbnrB3hkhGSMXRMqhumEPyRsGzLNdauYch36cwvvomQbT9DAZS9sARXs8q",
  "key11": "B3ecwvtvWhXLTJAXv2AKVqxmgsJNbA3v81CF7cabQg3UHmPFcuR5L4W9XiavrPbtud7x8j5iRhpB5XMpQ2KFkFu",
  "key12": "5ipf8vbAKBdQSzzcaNRndg7WQDg44ado3jabskezxt4817N9LAUGuJZzfmA37Kj2fddpQnqjMezyRxBKjFAxz2BZ",
  "key13": "37wxqkmJztWx2NAVw8jGXBzPiYqhb6JUdTk6JeobgZneTbcC4ucihDTnYA31uCJU6EDLppsY2U9emkwnZirANWRJ",
  "key14": "mjoPBYmkpBsmxZjAg8kLTWTARax5UuJRnzhePRZte6hUMve4PLyzyucb1ZWDSmJEfZoU9awQ7E9rw4iKufg15gC",
  "key15": "5s6BSwcxuxaPMzc7Horqq5w3ikwj4q2B3AZo2ETRQ84ErTSUM8j6H7AJkRnDbndLhH4gXcM94weSD3n9QMkqSrdP",
  "key16": "5qbmqHJ7HBTEHHk7RHdRMqkp53WaPhaQ3vEGojStGKNiwdjyAdHsYDbsgg42FXjZGF7bpktzs6jqWnJqno11unjH",
  "key17": "3r9siQKqwr6LYsDse5GfnGGD4z8LKdwEsEqCagqyvtu7B4JFUC8eeqZWw4aUi1cmQWL6tHkiX8XK6gNZMHRBCbB1",
  "key18": "4ZYMZ3AoPttkd2hDFT2aEmd1iQmQxDPFZhw2VgcahWT7YefZLY96gJfpxXyTPg54iwvTBaWDRPUQNQjNZ6m1Q11z",
  "key19": "W7vXVp9MA4S7CHUWtNRebAA6tVBRsPY542KzmBX7UxiSGBjLqHsyWsBG4PzVWcKtZptEWhDhFyGG3HVwicZQ5db",
  "key20": "ukKfmXVnP5tJ9HFzYn32i8ZYyiDLYS7zSTKw7TeHBP4mv3xtUzTLKvAxHbfcQqrwUT7uJTg9MsxtiW2umT1qEBm",
  "key21": "3ZASV5tadPSsAiMLcq875jdbqhgDHRDY1ZmoUu8oGTNSzQDanmbPbn5bNmwCMC4vNEJaSLcn49468Rf2mJtL7pD",
  "key22": "nnuEVYUgcxAQm8d4AZY2MUCpmKLBg1PUFC1Gjv95sCqu3iQzo3c2Kkvq7aZJ2mtvhaxnKXwVbyH262wbR9JDDZa",
  "key23": "4grzE5syuH1wimDqcYCGDrinYhWDp5TKZj6xFQtfRDGaGMhdfEVpvGVjCm6rjy5HTYjD2ysqwvEyM3R8Wcj55fJ",
  "key24": "4nFUsmgj5s48qwjf6nNDRZGjLqaAenqSqv53H3gVSdGGM9gyzBm89ewm2Q5VcjsX2rkX9GJTq4MpCPYdXeFXNg57",
  "key25": "3G5XLAxWAuQqE83YrCrRZH2jC6wnvCbeBsfCw2gXD7EaVGz8GUcrNSXy7pWVQoWUoMexwJhT5qqkKgPsrzwZZLfi",
  "key26": "673r1XgTqYkVN4bogGSqMaV1WaSF6KuxNk4LAJanU4wUTTfehsnj6UaqVroZ72Rme1Hf8NsSuj38PgX6WuE4HLXF",
  "key27": "2Rm123y8MPJXBLJv6XHtysNCNTnREVDwtrE3GkdP8NN7iTP3SokALEuTWjE1D8GHbo6M7UZrBXNe6z1RwkCMW7BL",
  "key28": "34d1CBdGshUfQfS9W2EKUTWfSfo8zJExAVyt2N51YrAY2UN2bSitbybDuxDD3ZCWjbD2zaUKddb2chqCHukE9ZH4",
  "key29": "5PrPVWgmee6R66VmnHqR6hMozC8guUXpeNEX6itSor84PyxjVTPiAKUEHMsAyVZCV9HBWTJcfsrBXy1rmtTpTzSD",
  "key30": "4MWDPCGeYfkJznGrHMgVxRjFedHSyP8c5odqk1ZhQDxoHhM8TGbFqnMAvJcBogwXhg37HyUmfHMpYzFdyvpfEsin",
  "key31": "3CnYHiEM3m7HkfYFtrqpsRxsVViLLNYfmJffdNT6CdWGCnTEqxWqPFJtFCVpJjMPLuNPKskUTStL7X9dzUqzzyD9",
  "key32": "2eZsksk4hr15hrbDGZuY9YRaZwMaJpJZ7LqyRdfcGYEGWFK6qFVUhNi65XspXyvdkCSfwTpA5NimqQuhBTU2ke6t",
  "key33": "5xUng4oiux94hfnLC5ktwDoqM3DFSz6SGu7z9SKfeTyBa4hHdRP5orWPKBY1Jr6yMgwReaCohwSJPt7frSNFiY2E",
  "key34": "2RTqUD17xVWpaVtAbxn5Mkahqrj2QHjNiMw3uUh2AgaKRKPkNevYwF3Jx1LeTGH2qpc1GfRQhYdxVtNPc5Yo2t1b",
  "key35": "54MzGUJAsjKDP7W2bxRxwCCXbgdaRnyVyUbJCPa6MRTXce628RWGyLAqtK2FyGQeYZPbQquucZxTDXAgUACwwk3f",
  "key36": "4Nh8wD9UxjZehuGqTzt1hJsd9PY64VuXyytPCyBcZSLUBCtNBeU9TvAxJt4a7NJ6x9tcnbHHqFPmw5wrEePqmcjd",
  "key37": "4PvDSt8Ym78KRLJW1sKUFBfFzqqHkxeTgru1cQDWfzeN4hPg3tWiaNCVKa74WZ2nDjLJu5U7ieNWcHFiEitz94nY",
  "key38": "L7UDUcFqADTyGfVXt6uTQNJq42CTpGaCN5fFarP3Z7doDsbXTmGSmHZFtYuFVa5vX9UesRDtFH42CAFXm9cH5uf",
  "key39": "9tmqvAjfGUq2VdMH9mi9dEFCMSfkZPmF8uqEmzBQz1bYt5u5cbfMB4251e84vGa87mVc5QAMMG4bCpFuymEXY46",
  "key40": "ivnDk8wTnBa2RfEMFQtHQHaXFptETNwkTXJiq2bA8p72kNYkxDEvitVCKvNnxp84kYafCUKsrb4vdcKKw5MwMHD",
  "key41": "3dPszStE5EMtnqZ7eht5ZUSdtoYwe7E1vsBGcE6vFYRQN1MhzLjxdi9oZWJEbQ6DLxogH1UfWELZaTV6aPYuaiBL",
  "key42": "hYBkNj2P8XqQVbhaEq3Q2D5FTTN3BeSfhvAf3KpNdhg17muXxSH2GNyZiSwL8AQbaZ3Ds1WSdnVT5tNKwPc2qzU",
  "key43": "5cA31FFhXL9b1aHtMKgC2jFGDonwz19VymiZmScBE8Fk7Zn8Fv3HBXATQD7By71LAY1yNzx5xtp7UF7pHPN6sC9Q",
  "key44": "4C993SUHEoFvHAVLzUTRAgHS92tHqJ5EWZWAurEi3Vy3rr8DJctNFycgmBUa1v6AFCEZ67BFuDEzBpuQNo5tbqes",
  "key45": "5YUuKoFAsbHhAyTErxPEDwbnxcemX7jmTcrTLiKnWu2gxDcKfWZZbMU9AfPjYRdA9cA3eHsr1SutQji8xKYaMs9w",
  "key46": "3ZSyFMUfBfS31tGgKUnp2gqAVfVhFPPE5zk9ejGGeQFNN52jc1f4WaxaVkpAL7kiiiKgwf3ev2abTyY6RewKpfBT",
  "key47": "5SDWRNfS89Vun5AHXnYamEEUuaNjj7W9RbzEKDXEkkQZAJuKmTbYftCkqgYhsLW5QoheVMYj8JjSoTQvMpvQA2eo"
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
