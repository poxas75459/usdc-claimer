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
    "3Zs2uMgvbSrWwXuoaUD6L1Ua7FGaiNibFpXVifTuT5UzHmCupC8UzN9owKkjK727NqeP7MTW8LsnA5YNK2e9eKzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPa255dcJkcBudrbj81X9m4h4fj48jh2h9r89sDMiQ8UQHYyCpjDcm9HeMh37JzAdNdTdRMgEU8RXGqc6fP8EkD",
  "key1": "3D24GqppK16vK1cGxfPuo7UNKVcpENaUKfqXH7aLNFfgtYmPBLnZEywj5bevaxr3NkqFabSoQaqx5SUydWVpx2NW",
  "key2": "3RV4rDLhHn7DEHXvSk8aXhjyaRXWHf5C1xBX5XofLpFsKTdR9yURMFw9xrtU9nn83TsWBod7XP3JDHVsPArD7gkh",
  "key3": "2JPR5AusfFqJhc1BQEMAK2oJd1MVD29GYbcrPdhAbryxMoyx1fxCeaEFmEdTq1u9omBDJSm7Smrg1wNVnxiwhcYS",
  "key4": "2b6xxnj9pKD5byBFy7g6qvaDarohE5LJDNZ15Y789gaex3vreRv9SiZDpgLxUgtyk4xvVW2TWPUeCNkEAXyrTMFX",
  "key5": "bWKLgrAm2RuSnsKfTS6jMyozZjjUVbN2PDNhBn7c5rq7HiyNx9YVna8yXUQCNcoiDAhPdsoYBy2b1Hr1qV3hxfj",
  "key6": "2itJNd8Dp5McNh4nBTqacf53iedYXsiCD1ru1rAQb65Qrh81Wb6PN3Q9Bxx55URc5aWuyoFn1bA6p67boWj4TVim",
  "key7": "64edsjf8fFzCuZXYaXKHi8BZWG94Rz9LK1CRHVt1wib4JpMs86Ujb6epHyoprGza5gfJJHhyjK9JwawRmgB34jGv",
  "key8": "zdSv6DBhP1Z3ahXKSVgGCSgq1bZz4yU2Gk1s2cQbTHXvrULP7PQVBx9LpXmDMTC3yPqeyivYc4EzjvNU68BNovb",
  "key9": "5roJK8ykvCqYFLyaAzMTLpxgDZPB6h6hKUooMN4D2c1hchiTpQkCKfpxSZ6LB4cFRBvZmo7UPySX8TQGfLsxx8G5",
  "key10": "dDDdBHm8FJ1HE53eqBnh23ba7euHJTYobRAt7qxM85wnbKtCjTAAZ1zyT3oZQycwcZ7nbGDwf5bVSGb7v22jUDg",
  "key11": "4PkZ2qzUAepQgpqy63ZXz4uP4PXa6htv5t111H2M1jL2Pb3Ddhiwpc5kJWgGQQjvzMYcZxb1nmWcPyzdWKGcWs5P",
  "key12": "4giw4D63kgmmUvrSbhVVPQbwKGDG6jWbJd13gaA6y8vpSMfGWGL6FcmmZFgvh2xKQcMBpA3zYhuNuDZLk2uRHav3",
  "key13": "2JKdVvctNaNznqFkr6mu23Hoo1ZUJTA2tvHM4CTQasftRzLAn3kNCoMWEXSq21mGu396sKdcQBUwkdXmjySaZbox",
  "key14": "HiuhA7FKMTSyswhTkBRs7Yj1buGqAvZPYyVrkCQkU5gTcuWKHHznHjiBB5B8hLQdVTDMwKXj2mYYY87KPS5xg3v",
  "key15": "5T4GEznLyYSTSNazYCTXoXreJZwLDUS4uiNteMY4StX4RZKi3bdstjs16u3dT5QhVus7ogDZWpoFkStjx7LW1nHq",
  "key16": "3EwUPYUaZP3bawoVay4qdBRFmGUW86CxvNurw5Wtur9rmjVEzdX88DGnnkMBLfdcDZKLeFqTR3U8iQ3HvjySV72a",
  "key17": "35iqGgzm43oQGyE2bysB1Hd4mp2WZbPukegMonDvXYchrBJYFetC87nd2PRrnddMK2JyCmJ6udXxV47zNi3KX26h",
  "key18": "2G1Hivtjx3DW9Zp2R68B8YBDHsYqMexW3Wft7itzKwnkffVeDFaqDSuS9gRLsjjkyhP8p25GRVdDA8gH3hqHroz7",
  "key19": "2rTDmoZUKTNHVkzDv7dEGX9JAsA3ikRcQStuco1Dn86v6rgocBmedF9j7ZfEyMKob3qSZBzutnEAK7JDBX2HM8yU",
  "key20": "34ChwYWNBxKWbzUJFCpj8Gg9CJZgVChwyPQJjW1dWSHTkJiNqMqG5eVicjnBehquJLRNiDUpMiqd9mP7DefrhDeD",
  "key21": "53ZUviCyKK18tkZZ8TzuJ8WzSak4dEuwKBDBfkZLN5rhJdcyuSqShqQjyk8q35BPcBsCpEedqyKWiH3WjvDk6SxY",
  "key22": "3DQgSZ89fMrgwYK9jE3zQUbhhEetyavhW3ygPVfjwg3p12Vx6jWhqUzGg67BBYB67rhtqsSGaFmNbN3K4bPpUFsT",
  "key23": "2TJzwXUaWuGbzoag4EXb2kBdoLZafXKF7bdx8iAtUV5Vbz2Amj5dGqHLifGFdBdb3nbbWqkRVo8KfNn87q5ozPqu",
  "key24": "LvUR3yFHTnPsyNaeWvSYwMKMkfuvJ2T6jA8mzcayswCZMiftVYek1khzZkENh9EuqQZeDh5CBsFYfzsG2Hswx5h",
  "key25": "2prEWTT1Tsx52aBPHNR8h7BwvtHw6qK7T8yXGGju4yuPcPd1yNv27PLizupx7oxs61ZFfZ1SMmunB5eyQR9bMq8T",
  "key26": "4DQe3M5Ga4328hzthKgEgKonNA57U9HvG8wyJUX3VeYFcKyZxxCkMZbYUCP5ZzbHF5zp5TP5j74gL8BSTihPHp5F",
  "key27": "5a3vj6NgVwgnX9HytKfyg1XmVKgk7H4v7jKhXv3y27MYAFkjKBDpS1LyymA7hx7X4ixz3bkceWtFgskYeWX6J1zf",
  "key28": "2xsqAF4xeEFwHB4u2XmHNDtLhEt7XLo5JZvxgK1DQ9BrcLkhw4rKR6KgiVFMzesRhxVhAfUBynn4G879ZbPBA1hX"
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
