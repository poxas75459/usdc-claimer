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
    "5hBaGUrCSSjh4rbcu6eS2YzGni3A6DYRD7jqWDcURNCUwZ8y8JxJDMFeSAfpNqdcGhqaQP7X95j3KFdZRhurL6Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3495fCngfPG7QfGsJfF9B43D8GvGbLhxrfHRVt39HCw6iqg2KWVXGeR2vtMQbAFiDDxbm2z4Gt5bpxiLcfmbU4EG",
  "key1": "4mjkndeMUKKThZmBCtTetTUe3raMQQQLcxgHFYrouoJXTiDC6ZZBHDreWFVTHhVMmPgyauX9D7mbxontQHvdSN1h",
  "key2": "3Tzd6corfRcpMEqGKgk5Th7BJuvqvQ4ctzb2EbqFQbZEfcnmtVtGDnviN6Q5opULbpcu31hcRU6ewxNgdepCXLNk",
  "key3": "3Ur8WSZR64QiYGnG7f8w4pDh3TQKgNJiqBpxzaKfhjdmgKtj6CB82hsVS4yVdZPkGU9KUpUM4BnLKrFfo3kQDgL1",
  "key4": "3qBNqVZJTtyFKActs1V4sZ8sHMzuGxgUDdPZX7D9z2iQdDe2rJWxMfs2bRJsdxDTmKsETXxNRbacrcpC2jvW7NJQ",
  "key5": "5ontpFdtPYbCoMNwCh564w8aKKZpFYPyFztGkfumNx9SHxkcPyDXnoSaFhoCkmWjVtocJHdV3G2o6FyXX2yL2uPr",
  "key6": "5x1H8djjDNTn1RWKNkeg19wN8bYgdJ141AHisXMW5ttkZ9KqxmwiySzgiSzoouPcFPCJYH3ZFsiEkNsRp8nPLpd7",
  "key7": "2vyJomTruGv1cbW7AXf2Q1qsPrr4XrdaQiZ9eDFS4rbtq5MRnKjJZnvTHpsfwbTUGkeu4nehnAn4amLBTiD9M3Rh",
  "key8": "2u92PHNNXwzXenrnRVHFytwKPCDXSzRaJKMLQQxR53iigZFWSdeGeMuE1cfN96f8nDH3MWE8qY72M58eCuSAgAhH",
  "key9": "2UfJke1tp3B2Ns8d6BsKcunPsbFtiao7zqhd1s165G6pXsqR4UGDFTvparTJWrvcifdfNnstEAURoaCo7pW39a9N",
  "key10": "tpmBkjZsj4riwigDddGj59yyDcfk5xgDEk2JsNeEX2NB76CazwPAdR7yUBfXU8B8HwtSmsei6iCqgmyQcGxf3vS",
  "key11": "3nK53Eqz59Zom6GAaETuFu6o5ospcrpAoLWn3F3hHVX2Bt1ZCGrheFthJo4h86X7gMKW6viyu7gzb3SQPm14HDeC",
  "key12": "5WG3a87KAnd7hbqh4ns3Nn5FZHWDrJbDKX77gKzHB7DnjZy2BDX5tnUV5QW3Pjuhz55bufV2eZ7xfQUwMpTXu9CV",
  "key13": "G1iJN7mCGLK4Gf2BBbe6BCbzXMTUxHAmBWu9Ry2VfVNarjsyCkmDFW15u4DT7pYDi5SRNwWrbntu6GA6WYzz7GF",
  "key14": "2YsvjE8vQwtbx1Wen2bzRNoUkTJnCcoM6nF1MbMAxUwHBJFUB5HiN98Ud5AgTaBw3Qbx6WNwfgvQNBawn625Y6iN",
  "key15": "Fov86eYV1QefARHFpzQE4uffXJWLsXwY3VTwLRTCav6rpkC7Qs32Lva1PP6YnRdiKkxRijnWryyqhdDRYjiCFQn",
  "key16": "ZxgbbeX279Kz3AWZv5tAcWzCfQmxi3E3F59STgyog4Ej3UwkjPejy7PrdekeB9dHLVHd6fuyBehxszfX6xW1f41",
  "key17": "4FvaZfDcRGHvuqSuijJNUUrkN8obVn9PZhSnqhp4zsL62WG4cGshvwFRtw8MKGaczWJ65rDw3e6maiZ1qffYGS2B",
  "key18": "3TMqf3hhb1kVJKTLGuBWLVGG1MeeJvhxfULSQSmT1Gcjgzf4ZrAir63E9Gt6Rzftix4J8DUJKHGWAnskQ71qRq75",
  "key19": "r31zGBZU5XdjwNu4MKM2doi1LuW5SsdWu9wSrhCNDXUMCeN8ZAc19T5PTjXn5qycM8SK2T79eR4Dka3fHSiXU91",
  "key20": "qMQ4DgDknZJT3faSrcWJ2PfeSLuswxZj61RrVFLD7fToXyfCKhC1hFDNVQ4vNToLbBputv8W4wkXR7A9uvqKn5s",
  "key21": "3du4bkauFbtKQYcc8HsV3aGFXYJhEnyigSztNQKpN7CKqgYWGyXQfFR1wyfHvgtzUVPg3B3AQF59R9cvrFr67NGu",
  "key22": "3RGLirwaPodbz7DrsZcjnFvTxB7HtWiHMddpMCnFYgH4n2m1jbx9dz6o2xoQTZJWkozmBov2czuu3bp1NAiw5qmu",
  "key23": "2kXgVop4o5Adaj9BbzmDiuZUogTRbPC1RkE14GWMYvcbQhCiidQ5DNakfqANHXhiyTBZsGmJS26zUQooY88awmbw",
  "key24": "28LFBkCC3gUDb6jVTtjycXqo4VTj1VucW5YeV1WnzmoCJ6BL4C6dTLNXmgeufkLHrN43mkMmbSP6LdiG27LNJuAP",
  "key25": "2GvcdYeqg6VKWZTNmzHfQJca6aGdy4DMxsNm7LM93JK9AGDUJyDBt54znhirBTxdWuEPFjMuRQxsy7taRnhn7c6f",
  "key26": "2nwAvqC5DaNUqCVdHF8Rc3RcAKcrNjCjkBeJmSsLFtBn1QzdZFSKDBgsHC3FdwucVKg2nMrTwTbSivvWh36qetHj",
  "key27": "24av5iJ8Wy5KrN8nrWximooYgfgmqNGeGiv7t24v9GWgDSvpMNDDS8A5zEz7asgfqBUQjRWn595H2cemvBxujFk9",
  "key28": "Apjpg2dpPTp1vLrS5zLRLBkHjbsGiJ2R2a1Wh6t7EC6CRzJoVTyL3FiQtKnruYbHx2DSVWpZEoDtZVspNK7wxqw",
  "key29": "5trHkzk92uT42joPVTByTbm5NJtB5yrSFCM711Apcy3QeurqVUw7QwAfR2HTjoY8Bqi2As9Q9EqDpgeE5TUdD5TJ",
  "key30": "5r1v65LcJxxuZ93CTevC1yKyS2aymKvEXaj5fpoQqaz352pZwxRqxjbi9HBBmGF23nLZJ6supembadQZ39N1WRrb",
  "key31": "231gPfZi6asuVz2bQh58Pnh5CP1jFQjrnnZXnrigFUgaGmWRHt2wD2WtpCQE8Gff2ZgnVUHWZnzDyn4rpj9xQ4L7",
  "key32": "2LhtmENF2CdhPYGsfQnxzRopC4GXXBo3R43U6NYAtS11cKdedqYSN6A7DWng2q2qTSXQzT9fcgEFmsmVzndnTqUZ",
  "key33": "2KMbg517MxEvWQWsF9hC19GMuz7L3SY8AaFcx5V5KGqYgqQFjez5wpubkDMweTsqaZwRdZMs3mhQYYpf2PgNR1JS",
  "key34": "548re1eUQRqE1ALdXDvKwKDaHyH7pwi7JZD76hT9ytg9XTrkueUHC4ZGZjM2ue3CZYH6kimRinidS3Qn9pdfG2iQ",
  "key35": "2HbftStpeoykifYB6nFT149xivoHoyM2egKQG4RzfFwsSCB1m96G3gsG2jSM1u52wVtZXhsRts8ZHQtveFNyC55K",
  "key36": "3WQMLaLGC5cd1R4JLddp3gpXvXCpgaFhd8PqTFuetrdt9ABxeaWbxhYyDLVYd4GXwSsdGqkHu6JiBnscvU3ptxeu",
  "key37": "5UrXBVzmAFmoc5Zh6HqFKo5jmQnzhxsmVQS48qugdQigZSHS7yjByoeSi8fkBcL6f3wQv2Ua4ArJNFuuFFYyG4Nk",
  "key38": "xDVATNiXF8bxxXpL2e1KyF38Wf4r4PQpF8NKuutBqmYAzezZBMQbXyAjoDtVvZ2QmyPu7GuPXubyW2rCvq2o8cj",
  "key39": "5TsaEqKx8wx4618YBJ32ToTtLSK9FR8xasAtFR5adhRxZyDHQsw3SnmxbhAYyEQjdzHiVZYreEHydu8xV17xHFzJ",
  "key40": "4adhrVvgJerey7ewmDnzTn1uWL59eTY8ELiDRUurUcu2cZbZw8ZcWqAebqFRzXFQVmU2fcqJXF3L5xc8v6whYH5u",
  "key41": "upPuXTvSF1xh1MpbSmuTvQFnrtzurAwSNeGRb8K1VVxSLQRG6peWgDKbKRhBGsEDep9oVCcJRx7mNTbSB7GW29W",
  "key42": "4mLGmZ4vJRoPZt98nubdbNEbZQajJ7pgKHfeZGp9gLcGyEEPjEDgFHcaxCpbn2F5GXpxKebwCUF6zsZJNSK7DDSc",
  "key43": "5oWbuLPQVcSNZ98jTzGXxoV6CWdEPfffzq3XcHgH38vHUv541ufRxitaJLYW4vYxtL7AvQd8jVgcijEosgo81TWu",
  "key44": "5Bvm8oWvfqCkMi1uZiwwqBQxgeGrbXF4z6cjjntQsUj3YogozUKQ8NxvMyhsoFVcnv4VDgTzAYx4CuTuC9XGDkv5",
  "key45": "62h4t2fmtnjTM6v7riNjDkZrwr2Z4wE42K9dSTASQxo1hbqh6aab6HwNiAG7SX6ukbbtcAJ7MHmsKyyGvJXFHuEW",
  "key46": "fruZcK9utVQT9tcM5vEJR9WxgFaBqHSHbZzCMTUdwHGAPJPfPD2zHzKJW7JQAm7HwvkT9exkufJLDRXiM7Lmq7D",
  "key47": "Tpf8Hf8TdGV4wKZSuU8UD4bnsD1YAovys2v2qQkVtLZrKVEJn4AV6W6gLtM2H5nm3qXmi2bfuKaHbNYKwMJfcM2"
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
