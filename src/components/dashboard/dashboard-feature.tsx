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
    "XLgxS714uPApQVPg1Di6df6zDnoH6ru1gipucHhSzonizVcZA2x9oYu3VbqweAzXtQYCf1VVp8AqBWKYkFbqECB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKPu3U9xkF8qDgPppkyhv2t5uTEt8f7W861HSiyPgSr1XqNjyYiQSzjfpwurXtcqzpJGHXyf5TRP9WChL9GhGks",
  "key1": "32ChkiKLbiwyy7DXmi4tyg2zbiFTEaqYAJZLcmiPBA67jG2D6dpCoTRoHbrUcyter85dHa3yF3riWtVsBM9wqhcA",
  "key2": "q4XAar2X2Spb2GqAQWnMwQ12jkXeDq5miNhFqd2MmbSr6hq1gpAD7Aj9uZhgPHtkbo6EpYGRPwAVY9CR12Vj1N2",
  "key3": "RoevwFJmuxDFfDD5qvFv26a5MhzJ2LAgvs7wtxwATy5QXJwEZrL7vxkFEFoG11WLyssy1FbtPcnSVXC7kWpcsKb",
  "key4": "4Y7ny4QQdbgY18ZxmApWnTbVcjpRt4GQz5MXThPL6P5eJun2A2c2oqKAgDqCozVs53FxWruNwRQ8Em3nq8FvRqCx",
  "key5": "S2emjtRPESivT3MhEmCXbqAKF4DwKGTrdnWr2nNL4tgz9wefkfUEYDgUqdkPrzNk7o2PUbN72542KqGnNdVBCjU",
  "key6": "4BgzsHurL7C3cuqKrA35rFhHVRMJr8so1BY1gthWVwakUhM88tNvkUA65B6dqZYqmnnr1n9eKA4Lx9gpPhLrmWVW",
  "key7": "41A9Zti29CerqmV3rcEgui8gQY5uNYsa7Yb1Sx3PYu4X58vmt1PVG3bewB1aEaPFmLhhMwMc8t9gL4ktaow1VwVi",
  "key8": "5NaDQq7cziPmpL7f24qQoX2zqXJTJZNyeqjvBkstj3BG4D8opzdfp7nrAUV7LxiK8ZomaDRjS5y2NxsydMYgDY7o",
  "key9": "5ivhYaZdwqywjvbMZqYnBYkxySF7BtiqATo52ZQpHwgo37EDdhwTH5fninqUehK5wNsWuqt1uVYXauDyhhkWifPK",
  "key10": "5zP9txQFSSGaqufBATSmWMoxNKhYoT8j7bHTXsxPiPSen5GHR5ZTyj6YBACLn8NU4NZjGrYiJS4eJoQsyXfQhXN8",
  "key11": "v6Lb6mkazzJppVvXb9fQ3qCEdRgpsumX3x6ygTNTTBG75PK4HJU7Ei3s2wHexJXPY97u2voG6bv6rvxoFHZrm8N",
  "key12": "5hzfbY7fcNqR8Zsmf6qif31TUDdNiH1s9XmwfkB71kJ3hUsufvLgqv3DaMXFrXXYNZdVmiHp1aYaoirrfeBxzvr",
  "key13": "22ZJUkUHmaJ5iide7W8GxaWLsDZ58QUxpFxVr5BJaNzZmoNDicwufi4mR7ecTfJcRSEpUu37osrpmrrGq6L1oVvk",
  "key14": "5gVhFYRctEKED5BcTCgxQa1maeTsPKPqr1enFMjKihUhcW3VL3yNU3N2yTbUnx49GyCsJY5JvU4VcNCLSeZhXmBa",
  "key15": "5VPXmnu9qmk7YPXSjqijYnh1NWzuG4cvACfT22TXvMtXVLWA94Yy43LKdo4P72pJzWUs1n492e7LttHHWn9YYnDi",
  "key16": "2dPQeGRPdEjW2LVgh1pAqzgk9Bqe79WiD7jh86MAVu7VhKmPiPJWsvSXVaFVrvrbg4AqKeK6jnXPxAeGcwz9L8jz",
  "key17": "5ktuZKj2A7mANLiXrW3WVs9cepi1Pqn4oHstvggZyfnfdB55neXP8LE7NdzhLtC2YQfAuicMAp3uQpZ7wa1Lk7VB",
  "key18": "39rZDDHY5gkFBHKkQ1EFDmxEr1wr4xXXitmiJ5y2RVtoXxnNFFzJoKG7YBAJrVgUEDHrhHcn5DUJ6eimQWJ7UF1N",
  "key19": "4NDVzVxRa9FgCUX3hSXWWio8C23CR142yhLxW43E8YpskNrwqxEbrcKnb4kGFT92fNkjujkPdhYw6ysGMSsrTQWd",
  "key20": "4m3BEz3Zpt9fqSfWYGfzSrVA67nw3QuvFm1MB5ERd5mGzfeQ8r56bZuG8d5fCCUq4VZUXBpU7E5kCSuoUFEVWay",
  "key21": "Ez948spFfE1PXsanqMj2fa7esXQTPGEjE2Zq1GUB2cndxDy2nL78tMLPnLgghydJUqCJFZpGb8SvU8nzMD9pTmM",
  "key22": "3Ta5fEwgWXnaz8B5ip41wkByxPRZx7Q478jzAdZnChmszEBBFUp2WKpmHR5KRSdPNZVeEz8GJ3w5xatvFGtpMLDe",
  "key23": "44mfYAzJq1zEvr5oPuHWpdPs7B4EPY52B8rN61oPcAnuqrVFfK2dgCBBR6dFMU4yCrXZAkJhnQnx6kkqiz5sXhBm",
  "key24": "5sveA2mjg87HrmJcpUXeDUM51CPxLuxMYWsDoht56LcZ2XtAUkmnGyaPi2zbKX2QTiPaYuokASvgsvhYDVvFoHyy",
  "key25": "2dCVrpXU3TQASnSByDxyEDNbbxkisn7rssheXknLNV7mygmgpHE4vFdGghgUfCYxK4e7ejHrF8K7wGaU8Pfq3CZ2",
  "key26": "4bqWWZtFHuduwhsb3eDsViHa54GUWiZE8DoAC2CaqJ2TjwqRbK5Jb2msVqH8LW6ttZMyMoQ55XmpmnjbjfhNSQVu",
  "key27": "4EbNewXwyznV8NdDSurA4FHTDgv94XKjxmez1wCmtqmeVYoEsUDYgddXpCQ7FU4o8TTGVbJVzXkBfPUcpNqTVYcC",
  "key28": "2tfg9rrAF6pR4ZnCytatqbszKETnUMpuGMetAFnq1jzLHvq38MzWv1ERjPpqAWV5DzUoSSiN1jW2KehcXDgUjtWr",
  "key29": "3Qf7wQf141PwPCGmEeozAgthFaqpfm6x7Bv9NANktnZvNsDkqqkgroULdWJhp4mQhwmEiwnrnv9G1iNEMZKL8wJG",
  "key30": "2fntUbcUqUKookuQn8XczgPSscQqzFeNHk14mYxEbtUi2RnPtL8UK9m9Q51CZf2keaHfqp7yuuZD4XoxZCFFuyLa",
  "key31": "2ikqmR78MCz1gDtMfNN218iJzsKjtHw7uSqfMobWY6xiK3pxjPFcw5dH4BXJk2P9E6CDDdb9sHBwNemizh2UGMSC",
  "key32": "5v75NoxcQXRojajaEwSgTfRe1FebxNnKFVMEracYgKq575rFPkAq1KThUJrt4fBwKkEkX9g6Hyf89dijV3NUHvB",
  "key33": "582XFXX9PqNM6eSGm6a3UULBPWKdBeh576mWZWww6nrnwKHZiUMaK2ZRCrQ6TwZyzRnrKkFkQC3e1k7KW6Egt23L",
  "key34": "25MSraXfVz1gBB3B91UYnLECgMGdh6Uv8TzMH8WJgWtjbLq2EHVmxqLadVAfwQC8oEGdM363Vr9YfQBpLH4xqvQL",
  "key35": "3c977q1d94JcT5xRtLHCTktajKTfTEaKrU69jCnzYDQS1PpmqvDCxGG2Gdb2LkvPzqsDHBQapSL8N31ehuQW4EsA",
  "key36": "3PFYwLzAMMCrMjH6S8wCHiPidebWMKRdU7XU6Z8Q4rR5riQ6BBv2p8gKDgAYf4qqigTn3aZg5jkAhd4FjPyRdwG1",
  "key37": "31YkkyB3s5bvNikAQFBA2aSjUDUoJUQxzcdw5GQrpwaKonxFQvZTaSycMHYa2MEaUaSBoBuL4R1PRQKG2VX4VSw",
  "key38": "24bnsuzrbAwfWkPVKW2Bab1TtKQ6B598MLpSrVZVbS7BFJ7spKRzUprq38ogBYYVBniQcpnTMpAWfFQXRaD9hSf6",
  "key39": "3NXZkpAa5CtPSpP71gywC7FfoT4WK3anK7qMUL8qaSVvNX4ikYewLfGKqupHFXN3XamqY2i1BbjHVcnEq36SAHFv",
  "key40": "5VJhTDWeVJZcq7gVBvxEUh4TEgM7Gnmq2GtPBCNTfYGucWim66Kd3DKVvfcqM2b4jmtAhQi8eFrULgqwnKZsxTMB",
  "key41": "5smH2Z7867fnfjTZ1LbKZfLgLnBDnNmggHgpVf3p4EPerfg2m7W3wprVr3ocRBG747ebeDZoFCY3nyMEqaCGCKor",
  "key42": "4XaaLB4HELcmEknpw5x7JW2D41HawVwqBxEu2zDTUp7MoqjfmfGaG2HSx1sVhirszb4HUMfNm1GZAqDx5VCBXnaH",
  "key43": "3HrARXbc2qp2LqEAhyk1iopTzGkHWnfzpDrBo1757vGsNWFysA4adxtRAVqkihBgubMMW8Ag64RvgaT4EnVpsNe4",
  "key44": "2rQgQwNZWxZuXgguLuiNUa6TPUsLk5rERpcnvcWmQZ47MU9i3JYfPz6jmtGqJ8KxfwAPFmKmypv8wtT7LPvRMcYj",
  "key45": "5Vs8KodNRXSnUtQSLNL9DMnXA9QKcdzjn8SvwecaTM99Q83PSaMokET6PDiD5vd1AUrSHodnWq7iUTdbo2QdUtYR",
  "key46": "56Cx8E34BTSk9rtRCe9t5XZRm6dtmXMe3be6CiF2vJhw9i8AxBc1CwsKAhqNMrmRJzK9TwFGuaGPrnGjMcLZV3rY"
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
