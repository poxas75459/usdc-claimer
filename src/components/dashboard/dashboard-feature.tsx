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
    "5MEM8cQN6Ny91euNdmA4eLySZgN4TuKnCWxmEdKgAjE4Ts7wCQKcrz8mhKn7JFLKXcPY5ynrdc7nKp9sCchqjyyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWwSUVNnFQV354JFJ88dZcadFTLcV31ARJV8qYKZYwj4Qgdq4VX2JGt9C6jrgQuhw3Lqsbd4shGpT9SzATHdai8",
  "key1": "eW9cNwEG1sVQkCt9U8bBdEanCoFQWLgNeazZdmJriMQpvJUqWnsBX7GQsMo1mCUrAFUCfwQxgtd647ijvzQLZkb",
  "key2": "p5x2pePzFWiHcWno5mpT9FnaNyZCxziSApT5oXSrdMciKPN7LN1XpLwLTcmNTRqQeYZa9PwCVX41WFWWzVwXqzh",
  "key3": "34qjUeWQdBUBrDnXdBoq99Sc8uWpc4e3cE7YVZethFjEeiXxFerKQGPifRpNjHWim1q4qyubiZvg43e7je8ob15e",
  "key4": "2ij5kMRe5Bbr8vbQVyAiyKhFsd5bFuw64Mdgxu1Go6U6nw81GiUHQTZMWWrVRrD3zbeRUdBztRvgDZPmzcXB23Mz",
  "key5": "2dzyKikHGyNBCyndnn2Z3ZkageQYSKZPSzc8sSpQrsnyw3nyxVXkaM6PGSH4c92x5HZkGSBWRYK4jrZG2V5sBDhE",
  "key6": "4yuEuJixa9BwyButPTckv4adgEyenCgYqFq727m5EnZCe9spy7LKk3ruGXCaGficruxZZ6Vbe9LW3zYvaLjPQBWP",
  "key7": "3eXsC11oV4vcq8YeR1g6Nc4RSc5RLCTwsCrez46xGEf9nNsesBoRaaiEiSqDvE8aERPATfjqmy4P7Q3dohrv1Hi3",
  "key8": "wYYNS886FQ1m9xAkZiwD62s7YeWKZv2dfdzsNp7dUH5HQ8s6jRXzoy5JTyBp32EnXY3LDXCo3CAzfv32xQhifv6",
  "key9": "5PkQWtZFKKuhw27SYr43wwMEF9jC3UtzXpYJCx54C5Dk7zsTKwEi5YxCNdZY8HifJosoiYRuYEoeUHCT6aGCd8mR",
  "key10": "53o7Ln595J3aQho6pCmxc7C8EvXqF6uyKxsR4R5ZjS7WKodHZPGvF754d4SoazL1YfQuPbYYQceGHr9u3HqWw5b5",
  "key11": "4Kkjh59ANguK9281szs3Tt6ir2EnZ6LpFDqDVm59dxzMnX2NrUv4KVPiNV66Jjfmp2oAdZpzQq6phKea48n4GaWi",
  "key12": "4rGnULym5H7pbKdsGVx3NFdYcr265VuaULkqhM1NmjWr3cxyddgjyZXRwqjKe11syFLNDpu2fFSqrRUwf8H6R8yp",
  "key13": "3GQxcqKNnJjZo3116Ltv21auTW2LQFajHPpcjTQ4NjLvx2pPBoZLHNRC9NAf6XdpNhXeuAXHDDT6fN3vJ8nmmoZK",
  "key14": "5Rm25ZEDa1y5yHCELBLJu4xTsjsv5mFGv28GAo1zU14C9pwRs9tJFFnTrK2AdYPg3hvJSP9wYFCp1zzC5HDFVGZb",
  "key15": "2ExM6RR7owTyFePjQKXG46Ak235K55EyX8rds2EiGib3dk7VhQtEM4qcq2krW6YHUvxswWHu2CewGy58bXmHE2d8",
  "key16": "2JPBfhj5g2gKeanfRZ8grQcLx6fPvmKkhTknZzuGwFNXZVRR28KaWvJrCRDCEroUmiv7hfComq24BgsEgBVswTDs",
  "key17": "2xayMCsckT47tHHYmQAAwBEmpWSWvCDGffSxa3PiN8tQh2z3nv3Et4h8F2wX4ZxE32Wz8sSQJM2HxkgRG3XaSvou",
  "key18": "29hKrdkMzudouf8sGAcuz9J4y7MptLdQ8oiLEBMc99X1a2JqEgnPX93hnsfcGVyTRR4nKkd2SmKp4Zq7zvgRmJhT",
  "key19": "55pnM7rJ5uX873CK3ueTbHJzzkPRp3EPrN7fn2cz4j8VMpRG38CwUnhhX7v1sE6CYnymPjMye659jPtpjuX9bjfX",
  "key20": "2aeVGEqbpTm4QS2KuZ4nRci2iMf2xnHaT3xiDX5nrzmV6nUXPNmG7Za4FSmHiEXBJWivgYBQPUUMv1gCVxzEh5Hu",
  "key21": "axJ5v1aM7kKAZAKR6PCjJu5mwmBt3LuetRmobR8SR9xWaBqUQzLcn9A3ENdVB5zQLfxpV4b27sF83WZsFAvg5ng",
  "key22": "5uDSjNsyEjGrnMCEmw27yXbDwAg5aaktZyL7qTFNEBkduZaWTyUq5jyvkJDr45HMmTePfpzrE6M5AsJnHNbT2ZRX",
  "key23": "5UB6MtySvfz2XmArNBdQAe5Kb9dTSkrAFgoPk8vn2vsgv2iZMBSTKBe3XYsWQJmmZgqFhYB5k8cucMXMBrmVzsmE",
  "key24": "5kT1YiX6XGi4VEVUCoyt5LfYnyfHdE7isn9UBzQmDwfYkZYC89RhXVB69TLwrDA1TGLzmGyzpBdseLCUkVL5ZiH8",
  "key25": "2zJZNKhHJ1JRy3zfsPyDDoUNU2i1CVCVzjTn4RWkD9n7awXX8zHvMcS6YbcorU7JrrbGn6y2ZHz2oTBvfySjLi3w",
  "key26": "2DpvUD44T8HqDiDCTS8mjd738fxuSt7LVh1D3jPVhbzrsE4TraZxFab94WEy5JG6Df4XPFu4Jx5euHWqJRervkpC",
  "key27": "2SNFzeGgaaaTQW3Y7ugJcWbiD3jEpBk6XrT83bRddR5KC75NPmRw3TADCreRFAf8PpeU87DDv3s6p1FFc8b9aTcT",
  "key28": "CCatQX7vJQEXAfrqTsKMRaFEG6kBw6GeXMSPfBVKegyQs65QMV2mpTK4x3XzVqLVffAAbucf9dVQJr8qiT4pmFD",
  "key29": "3JptiN5SgoQKtSVvoRnrJYLYxUQSXZjKywhJfcdvJjmR9fFVtQWFex6kh6m6ApJyjbFWuEH9u3oWPEXckoARyXP9",
  "key30": "K9H7bw9MAy1ZK1FecVDs7AYPjVoEu8qC2EicqNKNESsZt7sYcBxABWhE1bqRjheQGqu6R177EvV68hjZhKMTSvy",
  "key31": "dP13oRTafvrScpiLZVNPf2tHKP6T6XGFjNTB8YmzdjoJxfmoN3ELas7LEC1dr6mQCRowXtj5GQiDQte82GUcbTr",
  "key32": "3xntnAgK96DJhWzuP4WuSG2xExrZY2mA9g27Qnz79RJEDmmkdfdYoNMih8vWbwyuuDANEzUhcjnbP3eiCjyCjzBh",
  "key33": "3dBUGEDuBcPqPAomoKzxLmbXhV45sY4hpsYhRy8QyiQGXwjuiVDSmYuceSjxeB9NVbuXbxKpS2RJE4kYgRgqH8uq",
  "key34": "2M8S1gHPcYiJeJ4WvFkPQiWN8SGgp8jDfYBE42KmE9uJGimaATNKgKjTqoN4Kmd7zjvjR2gKW2MYB6EHCYgkKyf5",
  "key35": "5Zq5fJf6KhB2hmVJPZ53tbnmPi5RehU5fsgNpDoY9PJeV6j8ZmVJAcT7rjNoJwvJUFj9jmnJuYZDvgqtbDaq1JH9",
  "key36": "2NruuuZoTKQHnUPQiuTg9p88vqvUjTuxfTTW5wUggQbjjRLuVBQmuGyWie618aVYZETnoYc14ARa432cqSiHv3eJ",
  "key37": "2xhwQZpJTr5v4KfCPyuqGKgqdPpJLzDRgUCvguyRe7LeWR3ATW4Y3bgNhFGYpBYebvaDe5eoamaDjPxKRPMHLSJn",
  "key38": "4JC1XA9z1b89NqUivhPzXFy31tAhE5xzRFrTLgDeu4FmzgFH9LqrC6NmynUNxUwc5bARjQawqnvigCben7FDpkwb",
  "key39": "2wWsEfq2fW7paKh8MzTxyHWaiq5TMJ9L5GcBdp7Urm5mZ4NNRurpGp5KHoKJkktY3uk4dPgpvqQGRz1kuu6XsyNM",
  "key40": "4viA8KpCudVMdv2iuKkeE4RSWqvpL3G79f5iqKqZT5BYEPSDfiSBYNKEHjP2NHRQ6XE6b6cpVeAeLTPafvWrgVXn",
  "key41": "5mpnoQbyrK1kqwVsaXrc2qRNU94zgq1no5JufQWpCJ5Xg8RejvXnMuyBxZ7rCSNbgb3djykvtpanobAfx3ZMq4Xe",
  "key42": "3zsNnyDtpbhjCxj9MHnEC3cgJNZbkm4za15U2Dx99CSq5EAUGPsvg36skZBfQGYsFkuMhABqpwqsA7RNXhu1s3mG",
  "key43": "4gVndwWBJTCC1Dztr9XPdhidJ386ApQ8Vy3qGhTNxFk6GgXqHWXhpKksXRmdW2AW6npsdA8WtNjTPyZ6Rr8GuVef",
  "key44": "4qGHrqwW2Ea65N7MKLqQaizJetG1TRpkMz5MVyG475C1Jq3JsHbCVd8qExYBy2pgb5ddfDe3ifNQ5wo7BYgfPN7b",
  "key45": "46sPH8cN46TfrR2eJqaLuweKynFeL6FVCs4rWV6kwabpkFGzwywYU7Kz1b91iXR7tx4mUfwMGsbfVZWhX8kU986N"
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
