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
    "CQ4DJjTRJVXbqFySY98YHnbwv4AByHoqPW2bY7EB7Fctb3MykaW3Ysu4ATMS65pkwfxmBijjtoT1miXqa9LTzY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PeBABRom9ha2PvK7H7sZT96a1Qej3rVQp9k1fJtBjbAY2xwzqFDNeu6QFB6EckdeBufdD24BtQtJmvsqqMPnRv5",
  "key1": "2eAGvfUFJk9koEYnx8yhdhWW5LbtMtkRSXECcq4geK352ynrPuwoDe2eRtcrJnAqR535Ra3uDDJt9NtG7BfqCxWK",
  "key2": "4jgDJL66kkiKoYTPdY9g5zspToS1rHL2cXDV6V9GBCwMZtjycKT18F8W4ZBdGwa9GQ5bhFKxFthtfcXvZNPt77XD",
  "key3": "3mkpatJKeT9KL9nEPfpe4ZbaPnygrABopArwZgxtiktnQ8bQiDP732wm4LMnh5Uee8onkSu91DHmrrWkCLJv7xsg",
  "key4": "5CQn28e5XpidqA7DnnPquKGU8wvmtULJyd38f8FTY5rmR2cW9PQf7BkN5RXdMjJLxtUw9nnDQvw78Pkznosh9vm4",
  "key5": "4H7UeypCwsArrnfEuD1VPFGSqwAsReM1onxp5VzfXzgtmvUSyYryW8Z5WUhLjLRTHVY6jBeQv5HJRCEj4kTMPeba",
  "key6": "LYmLzXNZEqWWdZf527W2TnAhkEqSYk8LcaxqkUBiEZTDG2qAJmRs73bmun9YxFkKkHcQze5afMhBNCivKcLufyn",
  "key7": "4mDDc1EuxCosv2ppJxhR4DhZR2QD94aLPhpEDgnFzVQNzYjnLiLqidXkWwkwpAxWNzNF9eb4Pfcx3PRA77vVv5zZ",
  "key8": "4nrktyVbG1YZnVKg3GogdF43gS3xkcs8fpSUUwKK8xunQhy8L5uQyqUo5Sh636Lvuspyht222YkukfiqD7ZZ8S4e",
  "key9": "7Lfsoam1gbeWaec6MnGNb5bY4567Zobfd2iB4hseirdvHXCHMC6Apw8bWDzgvvF7PRKaArpVkeejpWQj9KZMHWQ",
  "key10": "3JevGVCNrHYxXBRB3bMhJvYALyUMDgfB4Ra3vL4WeRmr8s7J1kHSu9158M8ivGNYRusgQcv14xwT7WSJPUAC6NMB",
  "key11": "5vxGXqqDi8PQLJhEVCF8vmvK5uue8CwW9VDjXPxezncf7aNmKJwkere16TTGd2u8QWDmmpc8PwesgEBuhd1jtmKo",
  "key12": "3tisD3BbMDtdmGwxtJTwZnongiYshavsht3fmwSUj1ccGqNWtKSwaqg3Vo7Y4VcX4SJPxshQK3ynmQ2DL1YZahxK",
  "key13": "4qFPeaWtNXof78MvxVaY7kTEwyqtWJszFyUqsXqdsErjbQb6BJ8jFtyymQHTps4rghmcSts5txGmB29Bgspuym5c",
  "key14": "5FyretNC6hPM4XwxYr28J6gzapb3meWTrSuF2CqL1w2tGy4oEu3576toSxnD2R7daRYhxurAgpDQHMoLzL4dZzBN",
  "key15": "3kA3oNceV5htiRh63ikfASx7ZYAYdhRs8ZuMdMRj5cqEkYRJs5xXeuvV8Cqdrpy2RQmxbiEfrsb55u82SSyVzrd7",
  "key16": "2HTmzRTSb6XmXWDrj9MVALS8FHpBoZwPUYuRMQTKZTdgpjYtSLgryzZfoakS9xS5UdM8ABHa6m4QzkjPMKr8aodf",
  "key17": "2n75dPdfczurdu7iB9qEHMN4EjFStXAifBzyHBoL2LtN6wm1F2CCZXXLkR6VPkmQnamQX8fiLLWtBNsdrSNdYFSH",
  "key18": "2Ks9pSQGTLjbhLC12gCEGiL1Jf84VhG1hT7hQk2s9en31TU2fP7xwtuyM42T9QbsQsQGiGeoC9dTAuX4tvTJNXCc",
  "key19": "4vLVh4SieYYt7xDNWGFy7kidcPu22senLrs8b98RDacGL6T3MsjpcwxYjZx7HLgLai7DC43F7SPV1WfB7epSDzB3",
  "key20": "43AxDMSrc9xZPkdQHqN8UrK7R23unGxiUarzJHGVJmCMNDTkcWtRXZywS7XhiuJ3g15vcSzQ3dmw19dD9Sdtrw5y",
  "key21": "57CgkYNKL1taWC5LS27H8gRhqWs22X3BU1d54ZkPvdqUmytDa4eo1i4Dz2QWEef3GUPcYoDEY5av1A5G6eB8UWNG",
  "key22": "25q7hJBW7N5p33aQinQMT2Hf4dTNCnmfLUw9g59iWdnrHqjwVRaXnFAFkoFTFxzdMdEGDjQq7NnDREjeCWCoVCQY",
  "key23": "3DG8XpDnvQbGCTPdtQKxJfmcnM6R8WQGXSjYnGS53kkMo51usj4QJwZXvzgrtxJdkcCqfnhndEkTy1gGHzCSKs2n",
  "key24": "2KT2Xjersn4tKtX26yPtPcUrqXbqCgvscHExsFYYFZ5ZKtfu9vdinGmE42vQoPXMbEqLqm3AD4LU37PVUwTEbCEU",
  "key25": "26BQwSrd9cUibis6D38GuiwkAkMHRWqwexnmEahvs8kXymWNH7nj81tKy3MRfTFCprwYGyR5kjxe9Rhbv5ARN2fB",
  "key26": "2xWifdvoEtoy2MhFUG84hHRgGe5RwqHHQsYapazCENr34cCQzRV3dELHzYihzPEHYaEfi8EZV6Uhr916V82sZ2NG",
  "key27": "2n4YJmrzuxqW2FaashVPjQTswMs5gdK6UgrDJ5LdPuCgbGVGgodqUSznbvzy9Y9L72XtZZymq5MJMUrMhNeXNjgv",
  "key28": "QVhjC6fjdbBRnX64tBpq5wmu4NQL64t5n6jaYQRviC1egHHi2VCdnTkqTV4ZJN8ojiEHAeQJqAEkU8TKfkyYuvN",
  "key29": "2qe1Ah7wF5BuZ4pHwPTPSZjjyAfPmC2H8hFMF3JcXyxpFZVnhaBY7YbTPpU7ewmQd1Mr6VaQ9sFk328vrB3PnFsv",
  "key30": "C68mX5p96ksJpzKP3yjf4Ngo7cHZbjFF5Nbn1KQxoMa2uTBUsiAthUW15ToJNmKchvyZyBPg4iTADNvdAnsKbsy",
  "key31": "3VAjdqTCFZapN75yZNkcNCVNYXjdtFq8YNuk73tbHDMUxeFHSJBcP6c4t5bnS1i2X2aVHQgpUZHcQcSaDN1sjyCq",
  "key32": "4NVQ8oU1XfBhWHvAWHWCnAxFdxLJqgXZfDZ6o9hPg6RaNiNdcMJparikaTJaPkV2Q4PhHHSR5FtgD5YVaXy1czSr",
  "key33": "3qeGRkpco7oPZNh2opm53YReZucSj3X2HSKdnCL83GnivHv531JvDZde7cMipQg3oWQXvoeWNUdAYoemj9PKff23",
  "key34": "3DLvwoeEQvxvHzX9YcTjMsBkbQnT6mXkhQeBB6hb7epRKVg8axy9h7ubNDk2AHoDXc6VngL5e8UZA5AoBvt248dN",
  "key35": "3izqj3KnXhgrNVCJZGK6K1eCQ7a8RMmpzZy31eFtFMZpoVJFJd6RPC3Di8f7tkJoiw2GeifLtJ9ePaQJrDMmRjA3"
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
