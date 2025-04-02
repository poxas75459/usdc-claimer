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
    "3R61FEXQwwN7Ps4eKbp859XGADVDLTwpDChCp9gsM9abhv8cxP9Cy5gYoKJqQzmReveVyL11bAaFeVWuy4rDbnW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4ng1ogZzsv5m5anwYqgrfkR25JPwNQN7e7bqoU9MrFXjhz88zqSrEuaPvCDTFDY4Brv7MVkopop5KvNAXScaXv",
  "key1": "2Fosgp9YAFa4jGnpVcTJ9mCudRUSjJvFHkKhVLjV3QZAbYyPCJTX9Us9iBacAUPeoy4yK8ccQVhCuVrYMSSmvqQG",
  "key2": "66adAcESMp3wUuv6HKL86Lu7NAXGScBc1jQkPAvY22F1sBPGguhsYXRdQEvCLSckJMbGoqmuoBkc8vJ6WuFg9Frk",
  "key3": "5FvKXi1RPsyajAT9rgQKmT7b5BmUfAHNfqswVbkc4HiVemcpMz2VmUvi2XgHUvhUBRSfGSFUjP6MGGWDyVUXU9v1",
  "key4": "4v1Xhe5L5vz53Cm1yCC7N1xw43F34BEBdca6vAWskj6vshNkMnXExcJw727PL2NajFWBfKtdC9ku1PiXk2Uzt7jB",
  "key5": "N3ZnGac7wcPz2s3Yaeqk44zzh7cZ2hFtXsVYPCBtZ7Qwm7yBzJYCuZtx3monVLUSVqUrujuTdrjhr6kmBdbjrEd",
  "key6": "5HFcBKPQ3LdeC16sWXyrzgFxStdCxJPv3aaerQZgPBHavDUmm6UQiCpd6yij6sf3rdGeMcgfcTL7pjJMWKJsvAPS",
  "key7": "22LCeKk9SmZMT7Gv6KGtrefeKsmpwAwesgkbKu2G6ovRJzVWgMAxcARaRP5gkiUamESPKi6H1cSeXHuRgdLzd7YW",
  "key8": "52QEFMtvsPpnkAgmL6hmpBogaqbbE1iKCvWk9FdbxzdSdHj8u2L7Rq32c7zjBVZ7QEMRN4VkkXJPKx2CjPbWjc5s",
  "key9": "57qhL9orhCvJpmmVLgBNCXwnRem9ZJYKftYd8Y1kKQwtdhkLXRLzmgdntqt88PetqBx9XoNDCEh2q6t9jrMjWT8e",
  "key10": "jL6XfE6LjJAyJUmNXoKQGB7DiACokyWRPfe7JiHDuoS7qUigFWdinZkuNL7sFnai6muDG6KouiNApW8qQ8FJ6rx",
  "key11": "35vuuLK9KDpuHhvhEptNZQcEAH9QRpiZy63vcr8bXFfFqD86bVxqu91hf7hUQdzyxEjDtGxV8R8AjKfQZcKJ8Hqt",
  "key12": "4LXo4ga8gTQo2TBRutrnkaxQBzYU5Bs2d6bbd5tPtucYBGu6PzbzyGhVXHqMdEZY68iu2JCHsJeoFKEoesJz25Ec",
  "key13": "3rtG83oPZ1LVv6ehH5GhaUoeTQGSSjcNu1JCdw5NBXVvDTnc5pYLHqd54CSpJwMRpNamxdFWNtHGMhbtE5jEcFuq",
  "key14": "5KA7HSJK9S2mCooRzd2PGA3iU8PQRMDV1VC2JEUeKZHxQdcvcrJqH2uEQ2w6NFLhpSHDbit9UFhbk6WwFTozLZzs",
  "key15": "2Ypvs1PAo7Ykv3KBovynzkCbrHPPdfuPeT4sFztWbzqt8QjwdGuJRoeNXJLDfCv83cwN1LYPeg44sbMTa18R46K9",
  "key16": "3tnp5t358e62tuKfWnmxXFtFiszxPuTETVEEPTVd8s6MCPaLUv66RjcyofRUMRFwFEhzB5hJYc9grEX6z1fUAwa3",
  "key17": "3hAchmsdWLa2uohsim1X6XaFp7yRCwq8x91wsdkhBBooQZrpSAoDZWhQacySdUeJtYpCsASwsGu9yFfHZd4BEvMm",
  "key18": "5pff4oo9dee81Ffha4s6h8wQu75745ptrMwRdYsuySdo9ep7ZFfJhKgJwjh7yMfc4x3xqTMtryTd87oeyjscqESE",
  "key19": "2GBDcKBE8g9REvDSJ8k8g3dMyqVuUzqZ6vnz3SGtyfMpb8ongTLzXixkfq3A86J4pSFa7Ckaq167zTnzvHvRfiFL",
  "key20": "21W8oH6xjfYRdKsF3d7Dyr4S4TLXy65A8mAp4TVXAe2pYEqjpGcmz4FSjyThKVJ1Dy1WzXC6LmhMYGjrcBP6gAk8",
  "key21": "3o6p3SZcHTjHGa594H6ASiN8D6s1A6igo1mDdJHmtVwrPzMkmrNUTSSCYMJVvtc966RaJKibBCijKy5wZ11D5MC2",
  "key22": "5czrrARx2duKqs4dEwuxEANfRsHo7U6mtcvhbPqB49m7RoG4nDAeForLaNpvkSzFAymWuYhTMvhLH2ScnCMjmN1W",
  "key23": "38dfWKbLXn4WESMKvR6gQF1UvbNj4YXez1wF9nxEbea2b1VW7WNiC6bKRB5kfXjfXuJLuFAUcXqE6RDq6BiXwnXb",
  "key24": "4CcFzXjaJN7mPVRXBBsso7HdQu1vShAPzt6s5HRU3HBxQ9pqEpYHBQRn8JS9ZSvjWockba16C31d9mmGdn1aJbs9",
  "key25": "57CtHAubPLL3b1HsBwQw5LZLkN1Fx5zCYmD2JS4i35o1annrrCLycKwbic1BvAbeHNcHiFWgSEAoLn38auNfuLFR",
  "key26": "3zLB7MjQjaZTTg3ZcY2BG63XJbmokshir6GmMgLZ61X7NhD4FeZGsoEW7GQjwAFTyhgyYmLULA6EwXRs6bxrbNqd",
  "key27": "K2eAXyVsByydQoMHpcgRnCZFTvH5fK8gPWehwvn5zQcHfavV4PrkypMBYPC1i9Gg68jn6vLnRVLHvG8tj4XhmYc",
  "key28": "2MTqQo6QfBZojriffaMYrEPJj96KW45tvJJeCHdxwjRpMKGx6vw5ATRvD4yDZp5JfxtdZS8Ra7MqNnLmqSMu2vs5",
  "key29": "3udLeQQ3EjL9qN1YrdGsNRnMpCQEq8gwfto3whyfTEWH7jFFxdfc7LVm3QPeKggfD2efE2ss9aQ1gpXMfUinyB7x",
  "key30": "kRGLrKEuy8ngV6nP3FKF5Yt4QcXEWbGuUTiNfbsoVgDETZGqLCGA7A5AAt7vhvGweK938HJqXJquDCbsVFcpQ93",
  "key31": "5p4sgWAYxisfLxsiNVXTqMWHSG7rNddp6YiM5YvEcZ6LRA7yFLwai2zpiMD8dPApGrsAQndJSGAhp67pcJV3Qr2m",
  "key32": "129DNaYQrnTsZFzjHs6rZ6R5KK4WrCYX2fdatChB76rDW18M9JCo5r5L6vSRjLFromD7bHsNkPiNvLr8keN7Y1mf",
  "key33": "2ybsUWpisKFwHccSnABzm9yc1p3FG8YSQ1BTGzr7Ba7nU233aXNAzXvEjKJbnGQNBNU7h6jL2pnwCmMqdZoBhyCc",
  "key34": "49pYPo4PBfrDfJGxFh1nVPztwz7uNvwwfyPF3zkcq2uxReahAFfqN6Xi2VBGZB84dobZm6BEdGzNdvaxanuehJpB",
  "key35": "tcN2sRzsbaSS1Z9qssjsPVdU85QtXCvacPQJzmCfkBMGSrGyhxz6BCp2YKXWwFiCg3owDaJQ5qDUqZLyuEcPNKe",
  "key36": "j1ENDuJGVwSrAQh5ueFkxuXCdzFU4ihSVzBEPeorZGNgMJsfk5wUGERkEWSRNzNptGmiMX9v41uBdfqzBPg71JY",
  "key37": "eZDyMwxbZN4dbEEzUSGjYt11XPH1BCLZtu2pKr5Mf2UgLEbaBhh5bAocuStUNSzN8SiN2fpFkr4UUT7ffLLwVjN",
  "key38": "66T3wjDMQeB8JJLrr1AjL65Fs447Ns1U8Unv9xeyum32B2o7A1BZCiza2LRoYRNhMLhH2Xi1CdRtCxu6Gvr6zAjN",
  "key39": "ge2weeJWcLayBWf685jFsj34do71jt3aKdeKhk2ypSh36Y7xJDSUteny1gkfT4YQYYnk54s5ZFh8HWMfG2foooQ",
  "key40": "4eepGUdPLsUL1FXSpZ6rKaJrrwdACGUUWUGcrcUhCwsFfFrTtAU8hdq3hrZe3fMLwXg6fgn5x5EhuNZgvy8vdjKi",
  "key41": "2EMtQfWHhSrJ1Fp5cweZsuSqscNsLEa32xaSRREb97zaPSLA4gaNohkKmLiS81q8TLoMC47WYZJ5an6FPCzCpYgW",
  "key42": "21wn95zyfXmWtANk2UDFktcJrkH5ZLhKy6bB5StLV2Jijda5fbtU2psKRTH7AqPyH5YzpzhLai11teAW7GGbZf2y",
  "key43": "3QwM3V4JvgcPPMBxoePAW7oy9FPSZXKxfNxswaNbjDLPKrWeeW2XVC5qCTJsdLTUYvSR4dFP2HJqhceUzNFSS6BS",
  "key44": "3aUzBNiLLnX2sxAfWobz3idDsCW5YqXfdujr9kcqN7FAyP8wc2UjTMuuteau8bbNVujUhRVEe4uhyRwW3P9BMGZo"
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
