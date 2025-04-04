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
    "4SUDbEZgeJPcE1n8TxiNuykEBw3WXccVvpWuh3AU4pcNyA5PNGZebD4FYFVoYuytCAzsVrZMuJ9sgm228sAAz5iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaVWJqpApxG728LBEWzezad6U1mCEqgRLUq2fCVk5g5kxpJwwyHH3JsxqDEv7RSAecmTVdiATXA9uwT5QFNdzRi",
  "key1": "4eQ58uLkeacnzLGTjo8nhs2eAqcEVQ5mxjNAd319sifQiTYZzAgJWiop6A3x5RUJhvcbU9MDtPBPvHWepSdTvYc",
  "key2": "4Gb5EAGwcJ5sZCo47REL4fC5jmif5LGaHhPZrBTmCVY1uCa77ZUY8K69Kvm9ZqxCm9QT3iKwFuRrHStu1sCZqQ3b",
  "key3": "FY6i69z5mtNPC8HJWUEXWZXbQ2LMLfgVhYyc7WNRuCcPcmUbfbedM4ARwUnqa5BQcsYiwMrs5wUfb7JjttfEkFF",
  "key4": "48vE3tLeAXEKt1fnBANoqbA54XHHcqu4BLCWEWhX9WDjCS3zzMKNypqLvxDWZ4DCmMP4GyjFtQPz3PQydixEaWeH",
  "key5": "3Ck9CAzmReJET1FS3nwvheF8co7bDyqA1wqS9HGg4sfzkpsyma32scFytroW2XcYq9xU4GwWCUemPKSzGccoGRyh",
  "key6": "5Z8crw22UExWki2ZXVodEMKBvzwJ3KVmHrDuww2xd7MTiiaw1PAMHczMUyVNf3SFn3HMJRgjjpnM5TReHC21WQx2",
  "key7": "4D8Jdagkm8sopvZSUCsG6N3PWjC8VbEnbhY2oKRbA1KR5qF5jDUuSwnQryzdNqKsq95Yt9QkKpAA8V2bTzNjAhLQ",
  "key8": "64y8s49eA5FYfTVeMqFQxqXRVvBj3M5RnQwgkbr85GYnVqeUPUmJm6Ro3vhCtPgmtLEUn2dzBmjjHycKp88jDgho",
  "key9": "5pebVUHiQM68fYC34AreXtjn8dQLmeQeUsT1aUY9GWGPqLCyS3CQLqfH5Mh1kTfM4YMAwjPG7DLW2mRS1o5x44WL",
  "key10": "4RaQ7MK4wiodmBUPf5qxuJeRSUdiM9QrM6L4wg4RsXE8vqAfA5ZGqqKUBMoENYTG4NQHVmLgvKvn7RBpWB9qutH3",
  "key11": "2R3a1qREhzpbLrfZb1XxBp8b7oqxjnxnqv71xHk7kzacbLcohM1Vg2Yw6tXMVofypX22rroNFtsRwuzjRffGxdCr",
  "key12": "23DxUUs5qJfy6KkiR6J36Hv6r9SyGi4EXZvwxVtANkYvqeD1TeCf9A71XgnWGnoLUBSqHNtJckMnP1EAkr6v6H8c",
  "key13": "HHdUQEUYKWnNAvJPrmCozbB5cdsR72cn4jqADr63iDNQTrAdVMAeD9VQuCBPhjVz2Rp5f4iJHaZEjpEyXpXfJJQ",
  "key14": "vtHDHgwvTdzzLd6RWKVxPNYYzFP6SRRm2k1Aohr9M2Z82QHXDxGJN9hKD9M95Dfkjbb5uvwaxbkRupu9KKKT9yJ",
  "key15": "5niDKhigt2GSseueBwsZNADbQ44XmyFKBYpHd5XJXducecw4JcdUn9iC2Fpvro5nYif428xNvHd4yvctXP3rkn5g",
  "key16": "3ExrKDCxBmVad3vUZBGEPw1u6Pmn3xpyVMZzRkMyC9neLZcqGWA9wjWU8YNYScFyC4Pt55CNFkNUaHtPtqKvNU5A",
  "key17": "48fPHafYn3TjwzoWohSQkpffDPb679doSPuVHhb6nSGcBtpMCUjU4MX5a7NXgHWUTjLQvGHSP5Dy2WNFypXnSh7j",
  "key18": "4L3XQD9wBXbjjPf9J4J39kcWPXNaXh5BpcgBqGkUEKzseTq1SrMa5goWB31hexAAgiKtH944L1V9sKCHhaBmoFQi",
  "key19": "3vjECqFES5DJmPYewDxrEyLVmGS5uQif4x9pbsyckUZoAL3tPY6AR8a4KXZzf3apGXfZian81SN5bF1LLkBvhWxK",
  "key20": "4zYP8GaxxSeUGT1KYY7AvG4Esj9ww4tobpwVhCisPvGjeoKzmjUrPtdDi12AAAoX2DWTe11Ak13rSGDfbGBARp65",
  "key21": "2SMnAJRZyrCCwRPNXntUW9gdgVBmxdaAugV2Ak4UJJ8XZgbxRZ278NXUquKnc9sRQZZsYqHnU1CpM6j3f3ALk21t",
  "key22": "4LW7AafzhrFpDtaaVuEz1gW34V9s8uBP7dpMQcDAJFKsSP5SMmhWgdWH1FtD2jEmPAT9kQMQpA5N3hDjdK5NuraR",
  "key23": "3v49GCYPpAoYNRnKwZoDbEs1FYfunR2LEQk7FKdKuQMr7hxymV9t4wtTCVtiXfE7QQQqbo2C3oXYuUNtbjqcaYZU",
  "key24": "52XSiKydReBHAReqv4QWV7NbNTp3KtFkbdtNgqTKd8rASWH3ggsV2cNYNkwPzUEdMwezeST6DkEzfk4JDogKGigT",
  "key25": "4umgVpoSaaX1kaogKhUTmm8Y12sSqwedvv4ms9JbNkUEuchRS6NkdYweuWXgZ6jZmSk8C4eD8ckSWuSbQLHXYDLJ",
  "key26": "FBP97FHUHyWJGvEKWACCwBufCGmyCo3tCVzjPATXdTEpYLZv2tQKK9h2GuoqeSP3vQqnsKwnJM9nS3aknkH2DPy",
  "key27": "52VaESdU53sqrVty7pXFg3f9WYPaUqMjcDLkdYdvPwVoas7MsM5N58ejConPKwfGixRSsgGA21WAxnK9RdX1JaiZ",
  "key28": "5Sgfs7yMExB4GtEVhQS3z5FsYyQ7nvUkMgRkHyVGBXbVD6KSWqyEPFAs7CRaGp4yNi1UqewNMT8fF99kyRQSscBz",
  "key29": "3bJ7RwmgpNFfK2LsLCsuV67NrvSP8RSWxtb5YdQvHDSCrGMK94eHmhw5VmExX4SwoTGtFZykM34oW16425qRUazo",
  "key30": "T9dRco8pJcq7WQMncbiq8C6bEfx84YWEZ5cAoNzDoiRRoN5HKLSbwGpHEQCu4XLj62n7hg3n1iCPvpUfLaXcUL8",
  "key31": "vK7j8cPiNDRBk4E14MLNFWQV4nTcA2AKD2oz5fFwwmcLbUKtQqUEskp35jyrMnDPSrb7XRgiWFwNwGh6GrKxapx",
  "key32": "5w5SUy93Jqe46hkU19kz5TTRK3UiCgo15WdwZPWBH6o4zKjCBjjUqgr4e6W2D6EaSc2JibswfMRnebCk9t2SVBN3",
  "key33": "2M8jbwt2EE2TDZCXQ7iGfAREVYMUhWRyGMkHU1rnwNkL4JDXi3J3rRvFqJSXBqYAuNXYvMFMQqvZdvZJz6fKSQZ4",
  "key34": "3HL9TdGzih9ijaLni8eXDPyuroKVbDjZawLhjJesV1MVpdtkFkmjpm1Pm1wHWgmsLXbrXcP3qo1V3Yzf88RzPSzX",
  "key35": "4Qpi2KTZ4VGN7suMBB4Mchj6BCgtSE2yiJ3tpouu4oSfv1KF57ftSEXVNqDksxNEoRXYauUnC8wgtnqM2dBkriHv",
  "key36": "2KhXY61bbwXseR3c48tpRcjZWeaQEbUqZqpjpR9FN9juBnuj4bo7zYp1UdPPcbrYzt8K6q4E3BD7H9snxtTNFa92",
  "key37": "5LrR1AEo1eDS26UbGVjvnGiL3Mtt8ZSZADZgRoa9zxmLWjzZUM72z9JUarpmTdciY26JhWVzQDc4PJSGioovjweV",
  "key38": "At32QiG5LMis1m3LDdvpkQMUXGD5NrwFXhWDvzR5nKNLU9Mk4nnt7V1gN9yqP9NUbShiMbT6pzvwYf2371TqaVF",
  "key39": "2vi4XkYLP1hbtgpgNjApXHrbarNySu5dwnKRReQiKSMTFRiE6Xg3HhXrB3dCtMQr5BTJQfkvKP4z5LDv45YdWKLg",
  "key40": "yK5zKbBrMQ4MQVY5QrF3PLidyz4wH2RBusMGsmxn1PF1kVr3EPK44z1Wg2qrFNqwkufx7GQLpbAYy5yAWa9nRKD",
  "key41": "3vjC7YaAKSvmdvMvW37K8FSMniMErc35e3uDVo4MZZXe43xZjQabTz4LKG5qR2FPEAKu1YXDdDeKTvz1kqafHvUg",
  "key42": "CTdRwyjmuiriPeasCDGVWTHQx4JA4UCmUfAvGBe8d9XzTbSWk6uAe4G286uKMevD3PUszeWYVVzq81wFRJZPh2H",
  "key43": "AtU7D1TxykdoCs8GrCSrpqfpoJDtk7DZs52K4LjgC9f1NxTDPycRjmaJC5oCZKTUbFDe5knJHznYiYieu5xVgCS",
  "key44": "356RmSJ4iTuiYStkt4BJhyvRiy7W4T6GGhoZ2dv9nWpyeqoJYy52y7eNMzWfDhRwaG9bXZPUku8nCWoq8cdAf6ha",
  "key45": "37h39P8NWNU1aUB5eXxVamgKp7m61NXZUXe9djVcUczjd49S83AGVGWdEHZbm2AAQK1obg9gwamw1LjSbwztj5ng"
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
