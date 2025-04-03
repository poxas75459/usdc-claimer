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
    "5g1jrBpYWX2xUk2BHRcAu9VCnwRuzsM3EKS3dT2oAbGcLSFuvaFKXkNnNVfef3VQjKhifdoAHT3CeyxfZqsSKpDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiVyavtBNc4tMDZqo6QoNMPhgrvg3WGbkxPD7EPMZHPpoU6dL3nx6myPHYd55N9fsQds6chpvFi1M2NwcAUq7Se",
  "key1": "45EwnnShbCrY7ZBpYJoPqHP9D1mWCtza8AaVRGnzvZ83fXrr8pFfNHndF1FGREyPcGoGXzVs3gwwJ7hN6Hjg1vF6",
  "key2": "3ab9geUQqjFBogZJBqEz5qE4hf3RK4725RumMPhC8M4p7tTRrzzp5qYPkfMSf82jjv1KptRMvp4P1dVrp6HPDo9W",
  "key3": "2dYH2SUWSmV4isz8SrdNFYoM6S6D6Binv71JaAAwguhp8g6SoyUfKW8ybCk5u25FKAZP96mEByMFPzKuZDiZTYx8",
  "key4": "5WCHZdiVMSt18z99WMBY2WLR7ow9K9xih4oZXTsHnjAXuXvjDvJNFYe7Q5DSLYGPSNCVXweshPEHN4Xt1PEaMzQi",
  "key5": "38T5KcXr2GiYUiM7yRweggrUz5ucqVmzEnq92RvwAmGWFk5UWcMNcasuE86XcUzKzZEF3d7WsfZFYhxX1K3DEScD",
  "key6": "3EyxfnkCw1MdBB3gTexR5UJLSmeeyA7Uht6mVauuyWgmXS7B5diBGpmr8Un4vw4oqEGXT7tDWy12HAUEXsCsuRmW",
  "key7": "5yWqCdbGEwx2wFaK6DMRaGNULW9c78mPgRRLAamsfG7iVWiY6SREfECFVmZhYt2LJ1eTBWzP1E7KeH4bYLiM3DR4",
  "key8": "2hJrNTLUiGz9ihjW8ghxbe3DfwMdiPrN72ggimLdjf86SC7SSbpBLkgsZmgNuaycEwZ6MGUvJDnSxTynuhvPP3ei",
  "key9": "2Dm41oyzrvukLRvsQHPU5ECSUNRA9UaZFpqsqXvJ8Lxs91jk1epW3pHY51ft2UV4UDDb83hZgfqTwfCQ17gmzdsg",
  "key10": "4BdAt626xD11Rr86kABZh4g7yqAFsG3UU76552mcumauEGaegpDN6eYkVLX484WjrHuZN9MZmvepxQvH5cxV4pi9",
  "key11": "5QH8PZg5L37KrzPsCuF8g2AiK9Y7yGzWQo5s9NW45VNPUWY3NbDLq3TRPzBuo8ybpQqj7dzXcPpTkcBDPDbHP197",
  "key12": "dbAPPw8mgucdTmSeKA25Fp1HzMKus7SARWAHUsBZSj2gevG2GAEEfKdnYbsWHK7F3URf49XZ8pPJP73KpX3qmkd",
  "key13": "2u7twtmgDu6V8PhuX1s68v1AnJDRADKnP2y8S6zdBPYeKSPPefyPh1bfY1hZu8uifU6pEwbjLiDw9oP7FNBsd6Hn",
  "key14": "3MgQPiin3VHVDpxFAummH5Ma6NewMzYvLnEQERgh2ssQD44dps2RqK7GEjjvcofCcvVYBdPdHsw8TGvVuki4bkpa",
  "key15": "2LRcZnuPpCjj8NnJMhm8YH6QmGMvEjKKsyJscvZe83d8zAtauJyoUNofF2VDxCmr4WfkNaLRZDi4MpgwFDjuZhLj",
  "key16": "53x5wRz6hHPPfoBeVrjR6fKaKBTbV3NwoREfZ12JMbd34mSu27GZp6gArSzY1bZH2BfJybt3wyJXL2x82Jo7tvoR",
  "key17": "GSp8hzRLrDCTh98BtnzBi2A83dTGyFvZwccC7heErRdYQYiLwA5t7yUb5qdgsgKACEdxHy7W4YPUQ8AqPiab9gS",
  "key18": "r2E7oFVKaiAjCSbn15PAXzVPBqvZyxE5CKyCdfmEsiHCm32BgjLdboUbHRT8wzo15mEh9zr5N8qnQXZ6iDR85qJ",
  "key19": "9fKQwbpzyBj2CGfecYDDnsyeJMQR9v8DEn8z1yo96Nk69nmhXmYnJ6jVxhve4yFhATtQBopuxBPj5wW9sKzZAbQ",
  "key20": "avNTHsubzRbGeNAN1kSNMrfAvFBtwZ29FbWXD4E2MBSDYFktpcHpGANeGtLqWBVsaLesdGkWCWuzgTEbQ1M7DfP",
  "key21": "2qGQHG3YUHFbgUZsq2afEKtsyj9HKhvwoysm8sveX7qVMsXiiMFSRA7TgAdk72uzFKvRz2P5iFuS8qBpidNGKkvD",
  "key22": "3SkjNnC5CTbupGfmETp5bwMu6t9tv3FuijdxyZRvovYTtNohydfVAwzRE62HSa4FySeg6Q96E2RRx1dJdaoJ88GK",
  "key23": "NCmCAMnZqa4A1Ybv3TDuYBpXhm7hvj1ztezrGTGwkHVnC61NyAckPXzXmTpubaiQUHhjuiEKRqzNJzKQBVTAte5",
  "key24": "2FP2KbvZ9uGPCeKhkTRHgXY9NWCikcF9BHfZke4d1cMtqicR5sghiwnqZzhh31echrv5toEdUEbxR7dHwpHqBC3C",
  "key25": "64PXUuFy1kTr8PoCBvzhj9gebU3kVyZKDnxkDQhfcvLVS4GpWzeGbGCBanSfr4RZniArmacTMZzfVh64biUfwoQH",
  "key26": "3WX9S1rxstZXrowjPV8dGjYArVgK88e9W1JZMDr9awQM2aGcEqaLR5zRmDcvoVMNMhs68jwmnRm9ZFx5Sjd23qHz",
  "key27": "4CRcSWUMesACQgFqQeeBmagAmHGZURL8YmhSwFxQFRoTXTU8vsADUn1dBwsovDyLWKBRqpV3W8kLdMVbw4PLCz2J",
  "key28": "4pVQzqW7iiSqzcpzxutqKmJY6xj2b7RNo4SusvmgtmX2fuQb3xoGn1fpAtiyZrUaKCBLo9x7VCtiRZXzFpW8SDmD",
  "key29": "3iJk3XWshBXxcq5By9qaBAJ18X5hESzEQkQmDacy34AP9zPpVrz1N1gRonWcVQwDVE7n6x8qBh62x5SqCX6jkE9E",
  "key30": "5fkU3tWAyDLV53eG2vz2FMUAdkqx5DWsdFUjDsVNccu6kUBox6CuPALy4tySpGvkbr9M848gtENvLpPvDpRTYB73",
  "key31": "3GoK4rR2Y5PUNKzvHWoGuPRb3h8mQpGniqgXyf92tmc3yngHu2aZ5b1r23oCGoonUuFkSb22S7qXkePbgduP6bVc",
  "key32": "41SCH34knUA2jx4nTiFJpsG86UMC2y1yqMM3CtCZpvLDeEZ7MfHo5T6vnnjd5JuEEeBCMebpkiJfinQdUzWT3b5B",
  "key33": "28SBeXjDhomzEVHqxjhwuXwMtwrnUTDVq2Zaa9uDcwmuqcAz1KcaojD19eKLUj6t5tnTEeHNW9hbf85kwaeUhFLV",
  "key34": "5pj34i4LbYsRSGWvoHcqUkjbmzS8DncZropcrX2UJKMryBapdKuNiGVWD9teRtLNweyczM9RFjQJCc7GWc3fgt39",
  "key35": "5wjggNxAgLSjRkABDM55VrdzM19nPWTMcg46jvLCQNvAdS6hPMUtP4yaF51Eza7iHgrHVw9QJAP5d6S373SzDHmS",
  "key36": "3GL7sicCBvsbM7yk1jwHuJ8mgWSnBLPqtj274FrgKjARW8Q4KmLvghNYV9pX39wWRu1hGzUuRENaXKXjS9shunNk",
  "key37": "5PcEoeSd55yV4PSVmVEwyr5z4BbhFSLqZoE5b7zLjRouB68QiMDeCiMidYvCubCk6NymmKRZ9HomLaHqP3kjsHYJ",
  "key38": "4p8vvTdHt7ihtyajDRPhWiks93vYJfcBavyuYYW2KY9UUz5MvAKkSbhGvdZ29mnJEitij7pUeUonAD11DirxFLh",
  "key39": "jHzD1AyLCTEWZxBHB8XQ4hFNwZvMXWk6NgUne7dTUNExsSNSqXvCx1u3Q7e5LQYARia3jGNCRLyfKov8BmVBgsV"
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
