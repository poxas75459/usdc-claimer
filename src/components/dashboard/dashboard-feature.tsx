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
    "3FiiXifXh2onvb8KttoYK3RvVXj693qGfRQ2Yu4gzfUq6ciAs8ynqvZMepCdHCCiESFeoStbE1kKLUdJjQQ718NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQVT2ZhFM6ssdxPF6bJAJ4pek99bSjZnwjPtX9zHQeHhKo8W4KBVWGvNAZxnAhHT6F9NEKEAZQBi3nf8g46PrGe",
  "key1": "NWkUxa8zj6Dn69Wea3v8AYshLFcN9cYYya3SZ6zqkfY7TRLBeUobDj95etgYTPaoCHrpjkMxp8V7SSeKtJ4PZfq",
  "key2": "4nqyQ5d1uAibREYBiZhQA2b95DscfL9XHkH1FWFDvbWoRemfpQmkgebdXqgoGNtHC5woiAoUFQHBoFCD6pv4D65Y",
  "key3": "2uQh5zvn1t51PXMhDKEofDnUhgPWAeJfvYGNVktUii3712VY7tvPu2xkxCvqzap2pvatBLwyZRateGboXgJ1zQrU",
  "key4": "qbL5XXNPrRjZXuhYeMtr9b7PnZbHWsv8xarXek1qaATuUpnewZuSPRYtFqzTvZeh2p5tRh4tm2G214DG2aLdnvW",
  "key5": "3Gp98sjuvJc1tooMi9W7fSHehZSkuB73TnFyEJyWALVt29KjA9o3Qtr5PHEJCCWdSvmqKuMphyAZ1XGS2FSJ13Fp",
  "key6": "ipp8JRDz5s4UQk8HM7h4acL69FdFq1973hnqNTvb5VB1F7Mr58NucYzmscq9dkSh69PwwMCK2Qjq8m3pUSGKXnN",
  "key7": "3aGS7ckcSs5ML8M3zDkqVR4FATBhUvvotCVa97vaw259yS7Wt3sgQFrv6jvQYjnXX4fKzaNJknNiNHZAkpGo64xc",
  "key8": "4NDMAg6Wa2QsX3kELJkC2FwogSfKUyzPExK5PqxbvxXvksS1oXzymYh1BdsvWPZxqq21N8bFu5vGYtGpMnKXpKTL",
  "key9": "2ef51CifGTwdsM86Hkh97wAhrUHZM1PiYihQkfoHt5bz712dBwR5bVmyk2n4uP6Zvn7a4tuiFvwiJEbGpYJqjyNR",
  "key10": "59mC9hDRJAdSQgPkVA82jUCuSG5G3P9q1TyZ4iRcZ3dW9bxV3PzRQLAAYuu4tPNGwmPBr6ub67z4ATsDc4Pkz5wM",
  "key11": "4ZkNdN86kVZk2neczxX39q5XpWEM23K3FKd92ZxdpEy4RS3UtrC1WC7VkuCpmfBrdrLYsuHY56ior8hnMRt4ZVs1",
  "key12": "rK6L5Kmq53VFt3zzyVsjTPcSx8zNospy1mFBtNU2DXB63NS2vmeBQBK8ue1GqWkJP86vrfCBeqvtrMd3Lk2GMn8",
  "key13": "2xHddVt7yMmzFWaeeaUNbVN2CcNRz2vNX2fGqueuHCET9DGyk6qGiN27vubwuprcitPob8jkcDocPLMWVNou2GPg",
  "key14": "5thEbgGU1V11DwnmDxh9aRQwdnyMj3KLhewyH9bKyghPTggq8Qc8RYXtuNyQ553Nvx3s9hk3CKhHGRErVHN8Edmo",
  "key15": "4wS8ztCvcxdJQpzsTMvfpeBSWVmdxpcLuTKMotWtH6biw6NLL7kTjUGTAiKQz86qdAwwK36FzX2dPrtefhH1b3Ao",
  "key16": "4a7DApxWacDMQYLfsV2ivqxQtBpCrYbNHj3n6MXXPnzoE5o2iZSBRLNiMFeF23oyH4VeaX5AMyovvfqEiPgzAhsr",
  "key17": "26JLbvxfj8t7CpCb2iyr6EyhLpJMGXZ3qoEXRsuPAJx247pKBh2mGgjm4kbeYn5XrQ9GzySdMtnJSLuAp8tf526g",
  "key18": "2q3R6uiMkcqH2z6n9qWSaNJajZFYjCzAzANzFNZpGXuY4ry1NDNfuWPcHttMWwXiiMLxjKWCCRXGcBdtrBBoUpTj",
  "key19": "2T9re9GDZS6LMXAXKUELvbqmQHaCLS9Y5G5Dj9KjuZ4UXX6GhFkWgUcjAe4RTNMqE13tAENwnKzBT574NkuJXQMQ",
  "key20": "jEo1m2FHFncPDiJy1fMTPoM2LDgcsoxeB3ui8w8cGpxzDLWaYyetsuWTp6vA3v3AYp88uxxVyabhKHpk2YegBLX",
  "key21": "5NKphC866ucm1LakzxVKy6SSMujwhFdpJMyjmZJ5swepNjLdi1bpb4aqVqAq6xiWexV3cm2bw9RXyA1au49HBnNr",
  "key22": "62dbE6K9Ye6oYcsGFBZXbgpPLrZEpxaX8NvQU5PBUmqsdT3EuxgW6ufV3Hz9nwBvr78R7cLkPtrcfkn7b3idY7D3",
  "key23": "3gMhe2ySTy5F9aCzzxgdsNQww2MvsL4gGZSrULHZVDhxbSxALHtGSLVb2gjnc8WUj1ck6ckNdB3EfpfuF635wVX9",
  "key24": "3GXYKLVVt7fQ5Uc2zeVAo6ETrKbN5xAyHQ72TnysekJbumbpko6soXpeNjwwgQSfgugVCrFZVMBYghf17NUnoQSb",
  "key25": "4c85CQWmGptm9qA9gvJQdY5baaFDfPCTo4B8B5HeNHTbMEaVm6jiVWuykQE9rTkHtNSU4ykzHLpbd7ivVmczMSbA",
  "key26": "34MoAcHgm76RC7zXcLxi6u4BGKvHuBZ57v8Qn22C4NjipGAB1EUknTedpFaoa46mM6VKqKspUiSYEzKKm6YmG8EC",
  "key27": "2J4vEnpiS86kQtioZyJqLuimsdTXeybgLRacsPCTrvWR4Lj3ue5woRGkT97wwZc3vWECUQHJWumjCbVCgtpPTCMb"
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
