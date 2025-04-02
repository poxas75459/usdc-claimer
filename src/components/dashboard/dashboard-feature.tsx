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
    "MEzPz11bgVw5VDPxQGS6iu73dQ7JaBnXwCd2SMQb8soLA4CtLkSZ4KUSd8kc4EZRffuzczpZYNF9XBQNwNFE8yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDSLADh8xEtKWM4BWn9KrRwznvaLn426Hs6vEhRTE9ceSbnRdQauvS8mtehKYwBJ6xZGMZLxB33p54JZQbTzMDU",
  "key1": "47Ygq9xPbXRGn7nKjufoL59djcT2pk22YRqKL3WDZJFoEwq7dzphSLjDb17GW9v8VfVZKe4FuZ7pzpUqP35qU3NZ",
  "key2": "4N1q8PViAXWg2efu1wba72iwSvkXxLFNgU7SJCE3Wvu6iWQgNWEC4HsmZL3amLA9hkYWx8tv2eMfeJsTnW698ix6",
  "key3": "2nJ3pqye1GFwxfJmrAev5Nqn9X1rbH3jvmFeT37JzGFYgGksqcns7jhnwD4WXqRBGHDeLMJmSY9GPF8Yew5M3ht2",
  "key4": "t52eqnvcxjRLsnHM3g8yKFLNmhuoaah48MNphrtAcCAvuC5zqMLQVQ8epZ9MCovtM8DkCiW9bmzLFPhDFjajSFF",
  "key5": "555b3w1nSUgGCjVpq5E7TUqhcQNsAJZw3cvsGDspnJ1o7H3hdsxVbDtRdyjXdgJZLf37E1wdipcL12SkdaGXNovC",
  "key6": "5d8sSioJv6cPMA2DtTrPCiQgqM8LF3ap46qvTcgePm6EAsUs8tHLsZukN9RZ1WQXkCSsQ7ei19D6ZkmgeiNFPrAZ",
  "key7": "49w8U5JPFcA1de875jmgfTRAF91XGKNVn3UkYoiExbFUov4KgEYYQ4iLatmsoNaHnZ2zQne8T8k4Uj76oUnNGV4y",
  "key8": "3FJNqiT2r5p7XVqnhFiqptKgYPHTz96AiWyTS2xfGzQSZBKKKGQP7GPQJaTdVNmEvXpmYFXPm9df7EXdU7Pu4USr",
  "key9": "4PCtLABR5P9U1dUDedisGR24boyNnrGNoLCojAkEJictJ49gxEY2b5VoFWYfyR9WxfWKA2MoYh5P2Y5n6uvbQARC",
  "key10": "4N1rkdcj4NYPf7q7baxzqEBnSe49UCdFSBwx1LwutWwvZ6QUpqkqpzDhRTGLcBya99dbPqc13zcaSPrkz16oSxFK",
  "key11": "36ozyZUFFFUkypZLNPGBRyMgNZVenGTaQg6GhZJ2z8v594y5JHorF87m5b1H1hoayU2pLaRPPh3ie1JPg2atZoXE",
  "key12": "3qCG2qzfVKDtqcbXZ6kxNQHfs1SqRtseS2txZYQyAFuvQwya4UYheVAAGm64fTVJ9NBrF5h1v9XoJyHsyEW533nW",
  "key13": "F6EjVvY5ixc8nyXpmtzQoREYfCqKqkpn6kHa3ye84esnSaJvSsEtrhjsq6koGSmbr8AQMAuvpCE7TuV1uZdUsqH",
  "key14": "4f7YDtbwtc4N6nsj6v8YAMCefYcadeAr7K3BStsnR4ECU4DVk2ryZ8do8dtLF1ow81PN7Q8K6LCujAn4pKafWpiE",
  "key15": "4HbjManjigvtv1QN4TM5vjm2nPMXFVLpBRAWKLcSBAw3neAk6KqnnPu4sSqBxt5T7o5dXhGgGgqFo9vzruHGEjGA",
  "key16": "37dRbyJNCJTpuBAPhGoYS5Hj9vsgqmWcJEfk3tVwS13T7L1sS2VmtH5p2Jr5Vy436YYPJEvDLQ8REu5Wo9RPVqRy",
  "key17": "3EspriKtTjdfDGmCyxyQgZ4RNKr2ryLBFuQqzubQ3aVNjtVyrXWuR2ZyEp1YHBUmCe29N4fVaadNhXjRqnjvjB1A",
  "key18": "4xGzggR4x1KjmYBkTFJkVHLBSLobeAbkENknrxWBhEkZxdyk48aqFYNSXp2Y1LpGMszTgRkmkYCBqsYA8ng4MGu9",
  "key19": "3AnyuinqDR5J5YpHPtMrS4UkL7FWzfrFNEevvRwgkfUMGGuxijjyKNsy1GFeEp4YanVDfu5uEPAtheh6coghwimg",
  "key20": "46SAas2qWNn5nJweUeY2SqNyGNxMENNr8J3m9hY2e5ei2wZGi4h7Yi89MQtThzEGvwRuvrafmoy2LiMPkBpU81LM",
  "key21": "2y7SL485tZXxGCp4pZAqnmoDFwd2SygyBiufSt3pG6dXDj4hofA3WxKDV717Srbv2KisVeiB4f97nAvBJUSQ41uJ",
  "key22": "52p7fpDShwJqPC5DyuorbFWYDNrhC9nfPPVtjPS5BfGpBiLiTLYa6LSqLQLYXDUWa5kejNaEkn2pUVzzBr27f1jJ",
  "key23": "3ifPLxPNox3QtmYNgAWVjr8yEfnF43u1zgW8JakTQUizpyKarEXtPDD2DGNjo4jJJCHxFsq9uKp3cqM3iyVaR8vW",
  "key24": "51Z4fvnCVx7eFqDdHV1JoGpPTEZXbTV5GVaTdYQ8Xx4PG8Yr51Nxeer4BxCm4RV1YVEvFTKo8k3YkBAhEMnfcJZw",
  "key25": "5xmNvF6UpmcthksHCTV2Fyv7mmEsmwGK7SjyoANZb9vCsAqtktDd99RDiTDP5nYXTvapDSqzdgFarvVJEQCAFKLs",
  "key26": "s9pqJA81GKrYRP7bmZgTP2JaUCUPoZbz48ugqA1M259u1ERZ6DiDQY6qK63EKmGE5z5kpN63avAb1CsVF8fqKs9",
  "key27": "4bWPJkmnz9TmgqjbWtgUPcuCksJurdpsgbt6m74BwwFBdWV2ZZKQoSSu4SkDJAvhnWitijd6ndCvAM8Q853LLKMN",
  "key28": "4BapPtGT8MaPGEEqZebmUzsmCZHh4sQmspwQbqRv7uyJdq1VF6P9hanQDHYh5vnNNPnkq9BiRSyFnPgmKGJLHDRx",
  "key29": "4UQwXQCemxdpMh6rgz8qxQVt9YEDceWJFReXzTuQTgD1t38u41FFyzpcb7p8sXE3kASYdV1MjmkYTHhLDPg6eev8",
  "key30": "2mr968NEpWpGyw1SiQbvnHbPX2kc9irpeWEJULmnkZiozyHqKbWKx5kkYQo9YXBBbKEeF8dEDsxAzBC4eqXRMJtD",
  "key31": "5VLvrWKbQxxKJApMapkwzeShtcoDdT7cXLbgp1Hm4vyLGv7FKWePiBK5qRVaTArycg9SvdVw2gNz1fEmZYgVxWuN"
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
