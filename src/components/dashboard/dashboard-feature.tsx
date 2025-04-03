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
    "5pKeCeZQGMzxDDc5j7AswpEf4vFzGFpGGkLGABPiK8PwYceVYeECffGAEBXpqmo1yDnkHRPZ5uy54i4YZ3QGD7Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9PSfR2YfQnukHm3HaTqR4eEdjBr3u9rSXBPZdizz655LEi2eQw6Fnr2T24Fk1mLNybW34DumuUWD8VyWaohkPE",
  "key1": "2vfoXZLLa3px5wwgFaKVyGGApvTCrPRYGvhupmfKqdpwmzq3pNyhcLFcRkGL8ZErEcEHJJC4ZKpqFQjnRERPg6De",
  "key2": "7HePHMcFvFeq14oJ9CYy5GEdmvBnG3FhCgRKKZtH8KgoTyuEwb8VAfedsbeUzb7PuwM3midfLxCxdYdZxQYuitJ",
  "key3": "3DUmit52TXU525nhbcxjfwW51mV59pKAMDpYSoSTJyywRi1CFFXeDCTZCufTj2tfzk38mgoGujdJVGDybWMtAWch",
  "key4": "vVD4iRv4Ds6QKvGYiowKE5qKExMsnF1WsvAYub7QkfS2RuQpvVLDQYxMxdzSYwqCkoF3haQii8VoSSa22bXCUiW",
  "key5": "4WuVYLyWJigTQQYhL5jK38Ket9VQP5jU62CaYXdyE6y3qnWN5bXxvsMDJTVA3YppnxTT8RK3A9XJNxieoD9NTiSW",
  "key6": "51nTSdg76knmav7a65To8UfhokcuqmS95oG5deyBF2SxPmRh5ctLsWLiFyqf4twnYHrKJ53dFQcaynfCrPB22esD",
  "key7": "3Q3RVnFewyG678SNWCjQ9Xa29Eim6yWHjthqW8dXsYnp3JzaYkchFazi1qT69ds68ji9yMaiP8GLvt7cZSAQQTpT",
  "key8": "58M93fyVWGSiorFskXPxyHM8hSkkpR66zN13Zd7zuLCUnonWUnUQqvJ9maHDSedpepjvehXh4S5ZKpcyJFXQM6qX",
  "key9": "Zbry4k4xPsS53as8zcQNLrDGbfS2hXUN2NjaXyUWHU2RZXCUmMnEoUzq9hNJn2KPVrhbrRi4WoKYKZ7BnYVJ7kS",
  "key10": "22kzzQq7xyktdsjrZSxsb4J451uwsrYh4iECy3rZ3yeDQCe8LpB2xQ2dGDiRsb3LLFC7x6HFMDqv8DR3Q6cSHb2y",
  "key11": "HKma6rCtSjBbYQDf8dffrDNiGiSvjkrhm4GXrcbLpvkSZZgNNarHWoNn9QNrv6X9mEaTu4Gf8iUzNL5Z81LXquH",
  "key12": "21Za5MNs29PwCnJkwtgcsNsBFcNzkubjseyD2x2zrTj3LX4iLvJR5qfqa15X5Ue2DSc7y3yFcJbKpkuwm6QobrJQ",
  "key13": "4iEPQ1epg8edYZvdgBTKrZrkjzSKiHZBY3ZMJEtu4fFPRtrVuRnfPPcFsdqwHH955YmjyNSUPteM8PrsWP8K3Xw9",
  "key14": "5fd4x2GqZhaBmM367Qr74jz7Fgebp1VsZSJLd6H1KFYDHy8ZmzWaADg2kvE19dgwuC7EYaQCJ1CPSTkF8Rr6jRrz",
  "key15": "eMa5fwCm35QJhPCm4prQkJCkm2hpLPT3vpVxxmuSo7zdDLi5yZMHLPpA3kF2tBUHCHGCNU2zZCsse5TbA4b9qWv",
  "key16": "62VTtZ8nUcvsMoMzmFNZc2B7ihvFFzVTLJKSq7XLJDEwC7dzW8SU7U8w6r7ookGtNM4J2rtyioYY39NpS7PKvJCd",
  "key17": "3EyRn28w2EJLiS43JdfwEGDfPcNLqn4EjyRR2jTtYy5UhZe9VD6K8mw7vdFVWbnz1n9k291xw5wXPBPFZEfWfeY2",
  "key18": "4XnCRAaxpdwRqbeh6y3JUUzj2RMjTEsFp8XALvBomU67jrKjCTwdAsPYsSJD57pTHB2GrbQ9e6EEWKxk5GFgZHDF",
  "key19": "2usVont2iH7vcGNo7i6FXkqXPFGcRJwZwbNdfoZzFTR8nrjwQcMtfJDdjRx1NWfsfV48mqf5zeWoMEaNExrSTt4D",
  "key20": "2YCUb7Fh122hk2k4oHbU3AdmQL7vRmBnxgbJoSKFER5Z7yhhJaaa9GaPANmv5r54BowZ9PCLeoUwMDqhs5xj3atW",
  "key21": "44tLnrcvZcHfE11AcSMSnq87PQBj3o3qhRXJPoeVv9jwDgYXxcPThEcowhyBodv23F3Efwjx8pzjMDBwvWckCYuv",
  "key22": "ZTdyzV98oy74q85k1x5MPXyDLjajS3Uw3XjnDiYEQxLySwrQH949Tsm2QKLi5DXTENUmCQGRedvzyhaeZZWXKRc",
  "key23": "37iJYPSrFzMp4KuiLaCCmA2k7y38eZkDcmH3FQnTziYio9PR4BvXBGW5t1W4jC5hviCTw4WNtarnsKcr9pq7Ke7E",
  "key24": "5veEA1aSokoMV6y6yGTV6t5LhHNTRtYnoys3HFHeTHF4UXLBoQdMRfCgT3WdDaDnrP7MUyiLjeoEHmacXGS5BXKn",
  "key25": "w69kLX2GXUcL43Sx8DPWDELV2eJ3x5PcjC88dDRseGQRnqP5dibvNSNLm5Kc5RXQ7tNGSKYP6Eq2rcazuyPHtbC",
  "key26": "ic32FJcDWHTwHZEBtTRJSoBMTUUikbdRwjaP7DeSmtPePg68TWKWP6G4sLMWaDFmwHbNkLRekfUp3yR4bcpGUGZ",
  "key27": "5RrjsWTe2Ap2qZ34dF2323kTmKLAuBr5zYJYLZHHg85262bNuR2tfSVmKtDWFXstpQXTX5ZDJsFymXpBtinr7YV7",
  "key28": "3u7Mh76rYm4JQeWicKncHMvx1g2gijazkfxD3gh1afj9q29gM95MyHUtUWQFitYSxQFbPZuCeKh7s7A9nTicyuav",
  "key29": "2xtEYQKCspCUkg1JRGe7bz5qUa7eNomXxnwnQb7fwiWEUw4CPU6BuYHKRR9eLTiT8ufmGypNacXzTwSYgKDYkdZP",
  "key30": "wpu1YwGMTwVD36HruEVenSMDR6zizZyGn2DfY8VigKevjcxd5MRCr7JJQ9YvQHJWT6hRGq32YfpUGiLtmRCAYCw",
  "key31": "3myuaoSxU1aC6xRHDtuhRYvpzbAMu4dKMWQ7cJ7Hrq73Nby2fsSruJsPHN5eogb5jYyxQnpiSomgYJjTVNge78Qj",
  "key32": "5kUzcaJTQUcgYGT6DjxXRBDKoBKNucdJbXy3rT4Q9pv86xPtPp4nqALy3RioqEfkrTa6w2B9JddmjMwwfes8GP5",
  "key33": "5tUdW2bpmLhsLfKiJ2Xoibt57EkdN5QjP9t2rLa5PkeNmVQHcrPT1uhWxCZKZRAxELsy2YZ57buH7PWHczbyufmg",
  "key34": "2XcnJWGaYKG9k3Fb457xpJKc78xgLCScdTHnMV8uesLDSnJi8stsSq5z162b4Lv4T6FsJXa58tZ2suwWKeU5fNdF",
  "key35": "5nVWp9kYR8Am4YYGgCx6pMuPSo76De4oxW5xe3KNvVybaug2faw586qaxbg4xG4aogy2976MghGZAd9gtBfcYWGL",
  "key36": "51oCqfZm9P1HA3AEXjxzxd8zHq7raY13iMw74oufrrHMPTDHdR97WUKRKkun6NeqnGZSKHT69dC52gvwrSpwrvwH",
  "key37": "5EFXMADv8RgrJgkcJqjYNHM4bDLePwkrznr6es8xzJBqtC4KWMdj5Kky4To59HAE11w8K7oRE18wZz8dWp26EHcL",
  "key38": "5cNknB1XjjfwEMPsCYTnYJPah8AUz9P8GGXRWGUKx2BjzT7ikGmC7N9zYkPuYVeBnHTCE8bFCNNh7j9omhwtALJX",
  "key39": "4s9gmQ3cybkG6pZFomueR8f8x8NDEAgufLoiy3DrrtwPt3rejg17KJ1QYyHfAgnfBpW84zdwAJNYWUZeYRpjTHRJ",
  "key40": "LecFJ3bSdxQGA2Z3Uhej2uvMCKph9H8Z81rYoqnLqZ7iL4JW5tsNn2rySmzKWa6L22kqF58zA4Ra5Y6V1zwAcCM",
  "key41": "REBBJb4a4fdzNTxpNn6MZxfdyD5LdWbQmXzUobukvLDvgPpqEU9ckZt4cJYDz7Lv9bSoxhZR3gDK4HM13NqjL3K",
  "key42": "HncEDZ7mjLL9nF5NWmaa68hgp5ijGkkYPd4i5osEoAD11kg8Gk3zeKWNAaBS5L1LT3Dj4j5c96z6zaZdk79dcHw",
  "key43": "2uKCAKMRxXG67sgYzeUf4Fh4RGVKHBzDTnPsz8DGFtsG4wwscmQ95LApUzwKgeRzDPLR2V5Li9cPeha5qzkuiJxF"
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
