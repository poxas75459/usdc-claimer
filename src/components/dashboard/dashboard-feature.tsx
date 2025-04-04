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
    "4vLMgLrPMbSSNQiMbnBHYcpDfHCLQNLzYwbzX7nZ8YtQyV2qXmirTHFaCdwoBLzD8ZRDvhg4XhfkK8rAwqkPxhyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHo3wh8i44X7a799X5Law1VRnoK1qPEJt148yAPmEph3wDKJ2Xy2cu7USF2cPn9DP2y1ezCdaeeeaFaUnMgy2hF",
  "key1": "oGHwWMeaqLrtGTnr3f6FDDkbCPdnTrDsJTq4CUHoRYh7iGfkDQR7DcpXDHQ1sPnXJeQZ9Whs1knn8DSMztaZGXj",
  "key2": "4pemM1KxiAsQNsAetBtqQyvrjmetDoHjCsSmzFZBW3SEgm2g82ekFkabYD8UJyktR4SC7Hs9Cr5RNAja1RXv9Mtw",
  "key3": "22z1Lgvf3BRpNwFYZAK8BJ2HW9tWYjk1o7usnFD9fwt3bG7taUYv8thvcpanbZ3uCaSJqzFJbpkSGWNNacmH3QLc",
  "key4": "jdrQA7n5TTY7KZw8X7G45SWjjNR4ySQKrX6G64DWc3ZtYEQHJSnjrqJ7a6NeqLyfPnpqYWY9cZSAXDwd8DrQ1J5",
  "key5": "4HB9v3vgSe71RMHAmnh6QNrigKpt9dnVqr2cLBTJYVeggBUmDy4CyVyNApV8xVs56oF7LXqnqeuQvWhtzEt44z1p",
  "key6": "JtjEyrssuXw6eQtRRMQqZCgoy4W8gof9V6SpRXbVR6VwUgEwt2vfADYcqpckcBi515hgKYQ1jQe6U87rc49aq5a",
  "key7": "211mAgwiVPfuhmoyCWuFMokPHSrJPi6zWaryQmjFnT1wZzRz2mdwNDea7AsjW2JxZmbzs7qLpom5wnQBd4WngP48",
  "key8": "9SrAtsoeVPkBxv7KCB7uhzk5QyQgWhLqitDZ4Qgev4xBp3FWtDrZ8Q1BkSzrh3687sBpDGwC1rVwSRMPn22RSRv",
  "key9": "3Xp2ShXrubELnwsLdmSWxPLTT5fGfXWLTFtoSzgoHMJzZ1RqnUg1rfoRXz7NTwKiJ6J3Mdirz6DLMK5odMs1mAHx",
  "key10": "Nv2TDWSNqiMnN2wMM9aqzLg2cR5voY3iRgxHSp72jpr9RrsEARJVMuDBKdDK1he5E47RN58s6upDVjrYa68jYcE",
  "key11": "3V2KrFw4XbHueGCpj6Sfq83mboRoTXhjqF7jgHmH4CMv6Q5Xi4Ad4QUqueX7eu8oPjkDsYSsUd8V6wsCW6xRSL36",
  "key12": "4etCdG9xDAqQ6FdSYhv1Vzv7ua8WiJGrPeGZ5rMha5N9fYSWgFuunuPLM5LegfM6THxd2DpgX29pu9Q3RHZf672J",
  "key13": "2iHzFzvzpZim4PRG5VtbW4NjM9TsN1vzFDUazUGrakFcV74YAQEzuQ7Ao4SUZubNSjTxsXvrH6zLUbQAyhZYdMPZ",
  "key14": "2NacDmQ88Z6GDzJDttEGPUeKpCmhQ6eNxS3tYCT5PQYyfGnaBAKids6ZKeU4MfgxATi18VTnzG47uJvvbvG6Vwrm",
  "key15": "3HUQ3gtEKFBMzU3xAdbC8YUdLKkqbUMzxHibw4jY97iAjcqTz1qYjLKCVsiN2okx4VHLdNXSMhWVa64exjrMooD4",
  "key16": "Q8Gsp5QgB1sb9U1gzwY2QdX39upCdEuw6HCJujyXqtggzuKkYqpvh2piSSDBfHYX63xb3neqrowecnh3gzNq4fN",
  "key17": "5JMqEZFv9ZkDJaG7PfgbR2y6YjyYrrdvzu83nsTyBiYGtkLPavNBbGWw2oUKYjNG366PFgiyoBRNxCukfBrozgJj",
  "key18": "2PTw33omjv7TtgrS1a2WmaJuMRJqu5Pt4v4jKDB4R7DZpbzWAcB2ND4wwGufVKAfv67vjYANGaiYrMC5t81ceRJv",
  "key19": "5zSfg1fMMQp7mEhrQWAJq3UYcu44H6pvvcTmkGvub8zZ71FyqBAVMHxNMyedaTKteJ8XsEzYxoqm5JLz8krA6kAS",
  "key20": "56kbSr3gmosEiuA9Qo3BFrQTPDLbpfUsrerGVq9SZExQuCxdhHtrUEhkwfkwH1QJGJEiFzEe2kNbjcU5wLiML76W",
  "key21": "2wDsgkFzLwk4Sv377it3PwxXsJqpskenr4VTAw461t4jDPMoKWt3nJDkokwsqGWxj23Mop8wMaoZYxxRy6xk2EyW",
  "key22": "657QhzzphBLrxDosZ87h3GVV3Xdf2jnuaCXkCz4rMHfgSDAtf3w4KAYwJo55JXcNniRkWqTZhZu33ZJkhxsGT27E",
  "key23": "4J5ZQTXfJx9DX5NGYitzD9Wgvjqh5DPY991BpebMKKWtFJgm2w6KMRJ4vnmbjnth22q5ftTdz2gykS7a6dQHkpKP",
  "key24": "2YDZWmiLZ9N43SKsaAhQ1ch6Rumdkp4weU7WYtW1jv3kBwG5FP54K6u1bsPKj7p2DD5ndFMn3vJDxttNJDAdRnbR",
  "key25": "TShGikQaPnQrZnpmfxaTkhWeahWMySDHK81dJrBzjb36opvivBwLV267rTUstbwht3QmMXgyw3NL8JyFd6FEb4S",
  "key26": "4LCzpFPTA5SwRdv4sc9s1Bw8NKeqC3x54UDhnw1KxoEA8sWDFvAM1hXHgaG1BGnuFpuhsTYCjbTTFf25y7ySP6Qo",
  "key27": "6FCZe9fYyAvygySE9KqDbSrUN2oqM2xAhTnM1FhJr7DHqfkzpfAhtQdY9sr9nkBFVKQChEbAq2DPWLM4agAXEb4",
  "key28": "2gbNn3JAs8vy6pxFEinWq4cRMggBGcpRW7Q2kA3ZpCH2fHmmGGzPKjudbWYNNpgqSPbWsZCWcyuFy58cxrsMyrtG",
  "key29": "2oy1EpDZKswQSD2hRJDTY5Mi5UgxDQBqfBXTojpDvi7oKbJ1jorfMfXvnkkU8xZMTo1q6RDrFHhyovirVubPCgg4",
  "key30": "2nh6cAEwJLSpRygyW77smD8LowTQTY35iCoWjuGf2qksDtmmkGMXMJjyMkei87c8iH4YmeoHi5pTpV8vJxgn38S2",
  "key31": "4TVv7rKqiAp3uviabXNxihkafPFboxXxLHve69TWUsQyphh3wUqPG3fe3eAZzkuPgHCeznUQjgn15HXLc1cxcbXu",
  "key32": "vCAQGX6yuu2gBjoedFeoExJCdXcFeTSqULALmtbQMViTCnoqF6JQf85E7AS8CMoggstTTnoiMw8g7N87nhJCnqj",
  "key33": "2bz182FezYHYr3iCmvY7exPJ5qKXWLQnourU6rt9n1q4dAcamgehNEvhtmyFxukYBM1jEbLh3bbwfZEKoVGvYiAT",
  "key34": "Lekhwaf8YSLXkqNvgckx3AAGyuCCWGaRVE6YkBKizms3hLGKyuSWfSuaAmjroQzAm8DYnRPV1ziQ3vTsPYDmEBe",
  "key35": "2n6y6YsqESaR7R9E8gDH1ojfzUuTN3NXpdFCYrSre5cACcJS4xAjutGA1L2BukmDjtoShwP8o5yK8mrumoPdYh3M",
  "key36": "2s3kfN9q4nZCLvJhQWCrmKAybCvTbE7D6ZRHPxB1zMrWCognGd52bpPC8H1kyJoR97FGGM82tUSbPNHCCF223x9D",
  "key37": "5bCGTrTD2uu8D1aibDNV15m9VinuGYTbFevuv21f6APy2GbJ7tGuhKGm9HCUpPEXqxxmsfHMLDX6QDXtWfgD944f",
  "key38": "3zZxHBbqBqWyrShkwejHGKh3bBtokEVYiz2fysGKoC51Z5QcyChcxnfsUiA3BsfmVdy8jS32ytGL24rnvapmr2j5"
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
