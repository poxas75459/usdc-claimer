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
    "52E1j4HxSLvfKPTuVeQpctU2wdeQXe5zVobowYx3VkiXeJoLjHRLTjHyfibRgPSa9HbaDJFDZw9YBDr89zLgGiKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c29TKjJqkVf6FXBdet5UkaQxbeQwiQzW9uPQM3kZFSN2iUtaVRAMVVYRhcFaiur4G8VopXWEF2D86P1uStb4Uio",
  "key1": "4UYXiHHA87BwiLpLDSAA52fRJQdSmZRm9iwGk25K2MZea1PWVLpvi13uNvWAfb2NMZEZzEDh8cZBX889nxPq4QGg",
  "key2": "zssTMZ979eFhga6UGYQtzX9yyUparwXZrgMTshS5wCegV8RsUbbaJVvy8iKsSumkfzuoSFmj9hsgzrdsdgw6eR7",
  "key3": "2BMDbRvsHgC77N3aFSqtdzAG19pJg1j4WJY2JTfk8vhXuDWjet4xr9D5V9t84qYgXr2wDWEz35YmZkLsJrNhpAKd",
  "key4": "3TPP2YGVo79MKjYyXR9CH2GHMwSwSNosn4rm5gnN6pzaQ38cGFbGBmEcScGicKUtUuvbtjK8dY2Cvru2k1tu2wwX",
  "key5": "7j2p9QrP6VpAvb9cMByzqsKmQkCNaFo4x9Z7mFwAY5ceWDbeyojumNNDEZDWHW8n2qc1aAQWYFybE83vhPpKbyc",
  "key6": "2Z71LtaVfYCWcgfVicNwT9sj7NkVmFqTeHLmsFvXQd2NFJPznhFozCK41ACQVvRku5w8rasay9PJ5EzjKMEAQozU",
  "key7": "44vQJcR1BxUieT4nap2ZAyJw1k3yAhjJoWiDoJF7cPEturtbt3CnsfNXFrXBydDvSTGweTjwQSTofANMcWhAiByj",
  "key8": "233Rjhiz3JyxLhs1hPQYZQMSCuBvqdp2p753Kv4322Vpin4ymtyou6F4DPo8BrZf7BHUK8Gn9M3aHMMBNsGW9fPA",
  "key9": "63TkiijEbCckabD59rA9y6SQQhTB1Gk8L96ANCDc4gcz1gyxUJXHbPVdELUmkUYxDvozz1bYvsxwH1rew9R985AL",
  "key10": "cPxitAd2RnTwyKbeHhoSJehpKE3tE33h6m3kQnxLVMBwKBzrb1HFFFteg7S2tveKDrBr9joS1rniH1te3Z5GF4k",
  "key11": "2RXSK6LaoT4ZZtrCtoF3d1V2DnGKxQ3q7qWvip5JouW561cbXBKvZRoV9rteb8JncSPohSs4sEJJy7UQLNW1C8o9",
  "key12": "2gTcty4tayRz5g9FGoxjifkayLN4dMCReLusUyJwfsfuB42QLutingrY6u5XG23D6w8BQaBM7mgFLqeSKWMCihwa",
  "key13": "372MXS6vMZqn52J5KXM6tAxR3LkLaW3neQ7CLvZrUuVmmCuokhjvBJM2vkfXixQGuBTKskUNpCEjn8eiEB2zsZqn",
  "key14": "3etbHmuj14Tn3R3aQrydUt4UPGEyEsGef6PdyVdUMkTEZTGNewCM8AXBeP3o19eTjpZ3rZB9hGeTiXv7Lzc2xpWE",
  "key15": "T8FBJzCoLbynQUGWQaUpZeVJfEYa1YNE7GjP7MxwGsUREtDG9fRbjykC5DyZc777dK8PRnPxmeHrWcUN9ALgHGD",
  "key16": "4VbcQvqoQmta2RLdbHPPJvyJetNFo6SfSLnfuhB83tdEf4rQCq6WUw2YS6SwChA1pyadvVkqir1k2ivpEnojzdnF",
  "key17": "5cGyfPGx1fvSiaXzTd99kpmwdfazeypFBXJNNuADEkRF28vtuEyNH7cfXRUUDJVvdXb7i9FKPP6G5wrgXvZHjDoE",
  "key18": "55CbGSwgWVr3Yj51yCsC9C2ngx7v9BonsXEFasrJ3GAdscKzYeKK6ENBZ2eCEFwo4FAhyy2wT3XeF76Z2bzuRfo7",
  "key19": "4W1d5rKdBgDmp3MDFUaWjoJEeG9fRcNHBTVCGYSmnNdCgB3dSddzPYp9y11kygR2wR57ZoDtZAzXHbmPtuPfMJ4h",
  "key20": "ZevbfJutQQ8XEKQYwfcMDTewTtRb5ieL4XURtfryvvKJeeshnQejkm919vmbrYtKBMjdbXn1RtV8vYv5ssFo9y1",
  "key21": "2chBpdEfPFzvNZGnoa4ExAkyFvgKa8Zqu8r8ApZPDcVUVRj9wBQxUC1t2kRRNnUErUsJqjrnjE9oWe8nFjhtifgw",
  "key22": "31EjXKMqp3T4GB7RJ82FyVwBeLVDzwrfjtSk6gMVu6YJY7wDR2VefSBuhBZNwh6CzHMwLC54tVJQfsse5zsgjc4L",
  "key23": "2zs4RFJ27JF4TY51zNTo7xWp8vxj53rmKeuPqCKHDNgWFyzFBGkfA4bckwNBPGLseZjowJTWCJaTxfmhUEioF5Dt",
  "key24": "zzt3rx7aReJY6yevMHMqpPUVbwq79VMaQvFwF7Bhscyod6uQ1EwiX7ZCRV2kiZA9L9xdVe5D9Qcfd7CY2THRKRv",
  "key25": "39qtvpd9th6TjupKLfF9pG9unyZnURkboYf6wWb8tt22Y7HsTTtrpgmyZV2kYwaiGMK7ApHuPgYAnssFUFjt9TjR",
  "key26": "2TiU7gvte8hwMZUB539MG72TakfbQUnwyhhjYyjyumqaRH4ZEorVj2f2S3eX7HDQvY4wJi4KAaunx4ffVUREf17z",
  "key27": "2NuqTqtJxeenqqX54PftESsvCphG2Su8u2EZkpTwZLXP2dQur8nXdur8f8q9vFaVoxpjf2aqU5eYHtqNEzuNyEfY",
  "key28": "5AYur4bDQmUCcXYdqxPmh7N8g98eB2t8PCffVRmTe5aimeAcfMbydjdze2W88T4HEJz3bvonUi3r6cpsizdn6Mmd",
  "key29": "5iE4J9GRZPuPXtEX8bL5aEnNCobi4tpCBxgxNqaTEJQNjCjjNssN7zLACFQn5cXM8drxsRxGj8mThBhzhd44nNCs",
  "key30": "5EPib3JjNRpYQ9MesKPjXwz8fVbAPWxedTKSh5PvuEEbsk9mRiDfmDhbmR8hFeXXRqfVrizckGQZZX1Zkaz9PfYV",
  "key31": "5T6rSM1NjyJsDqHgcsmFNNsZxFg1bg5rSzWJy3EA2it5h4mQpkponAc5msw5AMSfwGaEmC56CzTks8v3PtTRyrii",
  "key32": "5si2hxTJ2eLnNMUDPE2yZJwTgYgu52qw6eX9Nb5vAbJq66qFLMQh1PV2e6LmDDEVV5F1XduujPT8Wfnmu6kXQ6hn",
  "key33": "byJDGERypXVMAMoHkiGRYH2ssWXsHMNfVyi3js4Dpxa52vCYhGPT1DfU5gFXSNwrQZTsdmBYzu1BY9YqoNLwH58",
  "key34": "3ptDBDohyMuxoTfNLAQiknCCYarsieShyjMDXk5Ep8C2VyqybbVMm9dfmMjK82Y3AK8Ps499VZZ5abZ8idCsPbh3",
  "key35": "4n4U1nWYeHxsQrfAkmZsBo7jzBG5Q1jLtUevLQ3H7wJDP3xFKqqm2BWazzAZGTSGqA1X7fvrVVf8teW8RDzcBA1q",
  "key36": "2SiSyiNVUetfKp6sjPPnSWFbFYQLdxcWBGMQxqbX6MXvVorirg3WiUZF6csgLfbNEKpL3RNhTSL5aNQvQ3Mze3N4",
  "key37": "59JEACF4cnFAa2GqdSCSM3D8Y1pX78JEdNtfQ2HFLKg9WrhXJ3dYSP81YsEAJHG9YFDjyYhUzG9CiFPkMfZYR8o8",
  "key38": "27frubUTbt19ukriPVMCmkWJQZivRy1TwzAGxJi4gBqedDZN4A263PhoHS4anRdBwavR7yEDnArBVQasmBsJmoiS",
  "key39": "3JutXz3NHm96AiWy1D6XEQSKZp4LHXNSjRY3QiTxzL3TcUYTSLHqR2VARBDStW7MVWU3iFgqx4mssCQuKoo2e4M8",
  "key40": "GKGe6VrpifDQmTEZBp7CshLDGs9RtTyYrJNQAdZopRSDWLbBUncAF4zH8jMza8aTqsN9ehre4MBbdMZpfbQMRHt",
  "key41": "5EXHDLtfKkYKoFpafsR4dy4e8Y42WNgrYDHDtnPitSEkLvd2SxpCLTGaBdqgCWKnPytupeeVF38q6NXbfN6dHCPC"
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
