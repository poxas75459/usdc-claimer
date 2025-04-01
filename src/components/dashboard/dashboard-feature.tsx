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
    "EM33bzMcmhBgGmyDyKBJWwGs6YHjn2FrBySknuFAdzLX93iHzQSY2GBuSSvvSWEXdA2JDQeA2RmQox58SVHQv56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43pjgqwk3UoRAMutU1zCQRm9KfUe2CHFQm8A54seaWn1j6733u3TsijLREuioTDmejucNf1mR62FKZePqnQ53Srb",
  "key1": "3bHwqToeMBpFeQeVuHkTyGCgbjGtf1VMg3fr5JyXEhWX7JLEUMiur1C1GekFKhXJrFxnTbhaT5HrdBvneNEgJ5Aj",
  "key2": "3EXAY2Biw2pG3ZK8q9aoathTxMyWNyFZgDHdkVDtkfrzRLPadvtp6FhotGzkszdYfcCuT5GrdkumJRfnM2eMeabN",
  "key3": "4Fma4vgLDPGU44zCxWwiQ9o3trpqMAXY5s1DYV6m4FQgJegUqHtJns4Ws4WvxZ3hx4iZe7KfzQs6J5sTp3kP8cqF",
  "key4": "2Lty8o9nyMdbWpuQCwb48xgTccgCzfQseqfBgyoPLJhc82ewZTDEnriwYLYyLpqaXcaNfXhaBGCLWnB5Ph84XoNK",
  "key5": "4fYTKmgFcSvFMtZMatQQRmcynhRBPyzNh4HDKFpyDM8k9cdBKoFAw1VCbVCfG68dHcoknDgbzpvUC2oNnsCKibVs",
  "key6": "5b4NmpoyQNgEsaz9YAWzvXijSHBphYM2xUiC3NShqzXVJSq8wo3GYpH3D6ykW4FYEZ3f5u1KfMKEZiJsnHkiPgES",
  "key7": "3c75pHPHfQYBevEWrhm32qahWX84GG6snxQGi8n1pqLKGoHrn3dyLTNDtU1CPuZ4NcxcsNvAkYqppXugFCfj8i15",
  "key8": "281a12rmCPoxHDfaF82bG934gBwwP16VoEFDQBE1L49ZZKRDHufeUagxfGwkwCvaA4VtHtHRV7BKMqyA1vQnGA7c",
  "key9": "5K6q9NQM3okyn623npGmn3qkfrDVJqdxaJZXuErL2hnv9GFvDnJ5wUBngqUHtkrS64NVm23gixQReoPqowH2FMeZ",
  "key10": "2czrcJ2ymouE2dgTAxvwtVf1oz7v6ir3XgBcRqBev6TQCgrY5eAF4t1d3t2GY29TFuj6fYPr2hCFauBQZm6x9B3j",
  "key11": "Nw6bCq7deu4uQAHkG6iAvLYxFbw4cb31AzvFUr8hyt46u4NFY31j7vfUdGz2AjtHHYXqTrPP8FxAtvJfDATiLbv",
  "key12": "63MBLmqDyTJQRDTB58xVbYbtmkd8ehZDMWa7Xjwb9PBfrKikfg1rEVnFFdZ36waf1ZVcupH4NYCiMigfXpowXUJ1",
  "key13": "2reGztXH8r3Wo5mrWU1hsVYM2U3a6wkuJmJAi8QbtNanhmcdEzr7GWEhJ5GZgnLKSNXvtUkrpsj2ZDQRTtJs2AKN",
  "key14": "5ge8ugpzH6GKuXsk1cXEaqQ4zzqsm5KXheEKSgsinpaSAYF52s9zxREmdJLiEhrSr2kXaFHNCgqMhhyHwqxQuALD",
  "key15": "3bV4WsvHdSaZgWhcZAshMq5VZVPieC5N7DNk3o7epvXyRXWy4keSr8AzYG9x4vLFQ42bjdaXZCHKx6ttRN93BgHT",
  "key16": "5Ra6A8aVK6TYMRED58Zkn73bPVu3LUHHaMy9hmPjwJLRLpvNMj2KL1t2S1dKdXp9DGGbKPfLB1HEDqWXPuxZVn6B",
  "key17": "4JcD5fwWH3usS9s3fzMW3DjeSHirUbcsGTDatvTxQHtVzMF19XeUoPwrrN2iSoufha1vPUNpkhrP5r6WuSs3QSPq",
  "key18": "3R3rZ298iHziLLimDrziPKzGiNVCNLHzxUvx3TfP1brf52RCZE4uJF5apgYCwYmEZi9fwU61aQT7UUw6Lu6kLAuk",
  "key19": "4fE6WsfNwdp2PwtpxDCjwG7pMYFCbsQmnY4AegGmRzbnWokxoG8Q5kgHjqmMdjoAci5A8LEtsqSUYyB8KsucDjyU",
  "key20": "2N56d8ndhATQXL6bbbzB4H1BkTBNuxbysvbEy3qiZ9JTZAyyAeGtUruQiPSY1PtdMgygghe9GuMm2ZbdbxtEoVdf",
  "key21": "4AbMggsDhvvxa28fMrWJUs2ohQYDj5FhUh1z72NkDw5waCGcKssfA4Nv5xu4RgyAJYDxino3dT2Dv3RxX7u7FNf8",
  "key22": "5DyxrJdQqw9pbfxVW5ChBpDBWbrnM7RkhfTi3hM9e3eNVF1LeGnyuoantrEUAMRRZgAUkJEF5UpMbRkdihfSRqki",
  "key23": "46zUAJDj4QPagX5WQGkrPwki8KU6Gv4U6rRMULLp4k6PFSJuUh5YZkW3Gdm68bZ4HMVGoCzMVBw43TUL39bvcEDz",
  "key24": "5grvWUza8jbb51efBGNDQKkPPWkAm4VPrchs2t1DagNx7a1SEJ7y63knhShsN5vUSo6VAUTXr9Qn2MCpTxpqxXsh",
  "key25": "bsproNRieCQGKLXeJ7oydpxHse7RdcJJd8CcbLkLP6ubi1upjE4NYHjG3eugkTT9uxrQQbhnWRuzUD7zvUR7gKG",
  "key26": "47jBCN5zTPFvcLgqzg5UeaaLRQsAMXSSzMHqmfDxX7hP6M812JN2z3A4Nj36SwYXRmrUXhQP37b5qbSp53GsgZVq",
  "key27": "3uf65iekmyvQvn8MfjwaX8QVU2p4JCJZUSMk63mQVGLPY7M3i1cVra9Sfe6cvN1BXfLaqFmpsxvqUkychsy4oWvd",
  "key28": "42TmPh4hbZswzLKB68347xx5JsStpYxgfWYS2GpHZE71medeUqVDtocvVzWTigtPSg7JidTYz6zUjCfVEgZYxRQ1",
  "key29": "4uWCgWFHy4PoMkBhRAstRavzbQ1CnXEn4dURzHnZtA669z9PqedMP36LimRFdfMifYT9W84CNatPnNQVzu2i2e5E",
  "key30": "3XmNQsTc33CPsxeF9QUF2skhJZPFqLifAUg8B289Ubkf5umLWiCCzzFz6ae3jdDHCayLoMJ4XmiMFvnYonZhW7i4",
  "key31": "5tS5WsjERDNoYNqbZQFEWiGiLwv1z1R3z22FKE61GfJVLQTrqpcc4SHiVLgPbGSe2f86VzW5sadMVHy3cGopwSL9",
  "key32": "4PmZYvAhuazKTT3LRkCnR7gTqLE1FrVyWPQWzoT6EmyT3ka3P1shcZGBhocy16yV6LUUS6TyqsmdfipfJ1swW4fZ",
  "key33": "2Y9ZCpnaYmAKXTRdeexwAdZaUwY3HCvs3YfBFaBXi6XbDtjoLJhKLte7mDYE8HHUCiNZNxVoaHKgxn1wy2rkwCGi",
  "key34": "5hccPhzvii5ggtnqbRb3HTrCEimXAx8Xn53Y7p71fqE9a3q8buZoALw5gJ3NiyydrfZokxVngURFbo4JvBMdMyR1",
  "key35": "23LZHKppzzsS2TFghfhMaNwVsQy4vwEjtrmaaNt3Fp5r3KzHuDB6nxtHMybeFgZ3Cxn1ZrhUFd1QWU1YzFvJQqU6",
  "key36": "4x4qMNUYrQpyv1cH6YHyy83asD3zj58aJygjgBfcGcboH6RNopRjUa5XSbdT7d5Y3R7mnq7hpb7wxDmoSmL6rUEK",
  "key37": "2gNr1ZLoA9NR9FaayJMLQHiWezepS6KAJzwk1daKGjGb86zMsUW3B9gUUj74QxbTu2NsE3EMNMEaN4WwEtN3PRt",
  "key38": "4R83DzXw4vtHwFCZV97cXbxfVHMj7oNs4QM6GhPP9wtWH1Qc8NjyvyvU8LMgTxsZGWxLfjqg2MpKJgYpMPSztxEq",
  "key39": "3hxV4WXfX9CBimZQQsbjd62RYZVEU5W15LsX2WCcD268r1xX4YaBhRt1W6NniD5NeZh2NRHDVdmWq4a778JhyNSC",
  "key40": "3oys42fExmwJ6Tim9HNTRXRFSARHum2XPkieN2497YunUda89nhMxeBKDU6ivFZvKSmmNVG2aody1WWdojSwp8BQ",
  "key41": "3mdtSyWhpnVisjBaCkfECyJKGPzntzP1y7TRi3oG9oBakMdN9CU587tv26GFRFmjPMcyy7SMg4D99PF1sGTXjurP",
  "key42": "5AMCzDjYLZs8qn8nCKheKyrv3YcCgCGPTs99TFmAT2BSqBg1BYXwpdeFiwPmURnASVDsEr93d9TpbNxapZMKzs8j",
  "key43": "4ZXbUQfQ4Ee1ktpGwSCfT13jkSVjwBmJpUsU9T6ruZMbFBTQqfNekScKowccT5mXydbqnfnhVKrF2NewTjG9xD2a",
  "key44": "2eXnUwckKkQfAMsfFbU6BCqxdHFe9CQXVf8UvGVaav4Q5sAD4MZt6bvWxD6BEL9rEbaYh4BSPrZYJRQ88uH8UVA6",
  "key45": "2vyVhoaG1hijQmUzjPusLkzRsTcK18jtsMBNwaW5zjMytttxpZQZcJKi3PhGbdFW32ow5NFQZmp8eysLf2UaQdsx",
  "key46": "4pEy5MLF4eRHapJUX4K8zeaPhTGuyvVzNr3emr9ni4Gp58UWZ7xtLBU9pDMfQuEDSaLDxi19BocmQfHuqc8z68wC",
  "key47": "2sTddDS3Y65UcsXJ9hqyis63Sesdp4MNTL5BNeEh9hAtWeEAkfpF8tcF4ttg9bnCi4VoEx2VhKgnShyGBfDp4rrb"
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
