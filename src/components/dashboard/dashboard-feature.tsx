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
    "4Gjoz6DxKvQshkpbR7cutNX1Si3Ln6jnJdpfZ3SAu5u9Zusz1XdtpP2JCa3J69E9H43Si4MVWnggoKvRp3m812SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmCTUwhnGiWR5owGMxuiVDpmEm4HNFncCcv3i7ftpMLHbSe3V9HAdQmbZStDKwezJKh2cGg4VHiVWdgGg6eNP8D",
  "key1": "2nacCPZ2L8rWAgjdHSd4S5cx6WfdQz3bEH1d8nHctPnp4F8dkyK3A4DhiejyjaJPTx7tVCZb6wF9XWf37ezSMx8L",
  "key2": "4Gz3oJsL2KMxus23rkLsMKxPA62txsH5J7qm5mgpADcMsgqopq2VL8AXA4xt1ESnMZ394FGfXjGvP7esbWjjYFAw",
  "key3": "3dks9hBH2w9QebtDL5gFpD8meNzkUN6RjzhnTEFXo6VKpJ6cusaRVKbkkA3XYtfqQyfe7TaEKzGNWQf6HPuYgMq7",
  "key4": "2pRxts4kRKdqeLfufBZjSrLkF5vUXDriedez3guBDJBPxmRgQnirVjrQxLk3mZ4jefxD9HfKPVyvV7AZZLnqYcci",
  "key5": "4fKcSEiU5nVZBncC8mUZPdjo9wEoaD2UPGnFpJrpqJGsGquXt6nZrWSWhxJsPURApLgPoEYjT88XM1yVLWqFkEPK",
  "key6": "3euAscsHMAnFS7dic1p3wEnpwo49TpDDkaiX81SqH8WZkw4LpSY1FnY5YSYen2jLSAN5jxsbZFAr3iTSYyymrqFv",
  "key7": "hoa5SEaGP2bVP47QikHENNuQDmFdAtrLqDcCAqVt4YE5q34GWRht25HLmno6nce5p8MjhgnqjoCGQMSGboN3su1",
  "key8": "5k59HniXPczE9XbHDrMaY3SaYCE5j9K6NX7pVYrTNmTCF5LV4dF9PGABBTPzgJcNzRyhvM9Ut8DMqY1gkH8vA7Qv",
  "key9": "5aLRp16VFGGrgnhBSP4HUenLY2VQC5iN4aCQjejaeJXA3PhEb2UaTaDHXcX5i4FMPJbdkrdnCAgKnktiV37fo3e4",
  "key10": "4162774PsqrDckaHUQa1kHszfvSapSQ68ZXaqryx1GqukAz47HMtWeiXGeKsEUjMP3H6GoY3bpDYdka31EVprLg7",
  "key11": "5nNtdTVxU8KjkUM6iCnMZbqGhs2G7cMN11ZTVnkVymrez79NhsoPSQiW5ajZy4jqDpuZuETctxhx9bycGNFcfbuN",
  "key12": "4b1AznMDdfJSPTH9FBjw2b37rMKpNmXtko6Hk9tNgjmDC2pdov15TXmQ6vgnLiKyqRwX3ocSzioDTzxpCsKiFrNX",
  "key13": "5ZfKSbsQPMmgJLdW4CCqyXk5VLUMEMJnscDWhGSDByb4iRkTkirjfZZUruNKc6JvKGfyv9BJa7BKKmLnwwrAEjRS",
  "key14": "4dg1f2q1JJdbSRAp86EegbeTiBJDtooS8F5NxaVDTJ69mvNCwbAE8Tvd2EAF459tHoWsGwZfuzPmTH9pyCsuLWvd",
  "key15": "5FS8QD6XEBPtdxoBX1pndoStXPp2fEQwzmJUEuAs3NqdPqCBWL4vH8Wfvy19uZAMbSwWPxV25JXWpuV73gwqSFUC",
  "key16": "pDP3wHdT1DTSgaf2QpdruwLnqDAcnKJBGYcgcLAsSWcuXz8p1rf9AgvHNFfcESAqMqKx1iNhPHjEK9Ph7SRB9jc",
  "key17": "2V5FdNLn8xeNvz4Qgo8XtAPjjtaBW8nmMGAEvfKS31RUe4Bm3nYCjBDrUmmJ6V6PVRQP2kacEz38cPE3K1dYRH1N",
  "key18": "5wKh9j8MQdTjy6Yt4E4somzkFD8aEzHVhn8EfG2QbexxYLfKrVkU64DGJiFkZGjok3FAb2tdfBe81q43cqau9Km5",
  "key19": "mdN2bSpkN29swMzwEfUPV4HQgZA9H5JWrCpMpZvpJ2B4GNroMqHHCkzXCiesAp59RMpafnc1ixWLhvqiQHWrvD9",
  "key20": "BkvvquzNrq8GvcFWPQUNhrJnStZLrH6mW8e5C7yJvUzUawwJ1AQ8Q7ExvBHWJJrEk5nMAJ5roqzy4rpUKeE8kGb",
  "key21": "4Zqf6XTy2GPD9FRoutjJHf3Y52APV6YoeSjCukRp84HcetCBYD6BDBJMbqkLkuUtoTwWrq1QN9NbMTH5UYEAJw8U",
  "key22": "5sAwxSkCpcK86NMrM6SRaoS5RfvCwBcCxgGDiAHp2Q9A6VxwbjybJ62ypvUX7kUFvqu2ePJcuLUKrPS6F3snSHd1",
  "key23": "4FaC83Z7fsXsprKAkAs2P53oe3WqmYMxagJ5yCkFQSCdRASx8FvxsJTgbqPXwgCZeQ2DyggC1FTKuDphinKkehYg",
  "key24": "2jLYYC383Bsx1pJGvJckCNzdyvopvwAzra1J1twm4BsmrDPAwSC1bSwikN3NUUaedMo27MAS9FhjNEwX4d5jSAiZ",
  "key25": "HtauQmY9gWtkoHpnR648veZXZXUnfJ4v3BLE8eaUFGTUWpuVXnhJXCPdV24dxTqNs178ofWPHkkAVcWvG6vWdUg",
  "key26": "67C4599hvGyqCbuiS2md5Lz9PNV1D7ZyFugEbP6RirwXiZqoJSbBGQDnHd465RjqYRmKAKgBCfkN9ZgftShtDJCP"
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
