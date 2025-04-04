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
    "5WySH767MuKYPqDoxRvBNsS4K36MkZ25VxTS8C8ANJgm7GN7YNgcZaeUMfFjabuLWvoKmoL38X8pYdvWdf1YtLwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3NwfkJMtNB4jovk69EFtFHX8K1ttJmYfssvqvNznEZ5bohyzUQVmnBHMQ9LFxdzf3hwgMtavGXCernhrRSbpE2",
  "key1": "47JRb1qF1F1awt8zjSjvdEeBzqLAJNoQwB3ntcQDVHUhtuPTGdNKLruG5aUm2y5UnJnaoQwR5aG2PPa4nwEfuB43",
  "key2": "4NQetLadGjgreoorMJN3iA5SdXzy4gVqkVvmowqoEoKvsJijwk7WvG3Po5JShzZ3cypmgFReQuHpX9mmx92fyUBn",
  "key3": "7a6wqnBFyFH4YD1ZL9atycTjXDTUNA3f7jEQMrQFQMGqYv5EE5zAnQm1vJB2Revyy8JAqoFubACrW33Mjf5jvo1",
  "key4": "2oVTdGXLuix11TvyegWMrVnc4RxpUP1bZZhtzadLapZ8u2kbVBMso6Fd6VVxX2Uk963Ew8awaSqd1FWEp9BLKVEf",
  "key5": "65LtHjArr86iQRWoSQjkozqbXsYzkUY3KgYRnr6Y6QZUJAdtH1DAZEeWN9fHBYd6EVpg6gNwiaYPPExvUrmNXc65",
  "key6": "5rDnZkj8Q443US1eDgF19MacMiVMCVrgsJa9ESgHqXigTD4HXKJDz1v1DQ3i5Sfcd2WomRFnRqznc6tFTrGJdAaD",
  "key7": "3cTwXrFh7eHEFm7QfDPANZDNK936RT81ixpB5zAicb98D8X2qQrAR45x2SHEYBZpFgqU8kjJa3aE2dkLjXDDd4jk",
  "key8": "2EYny8iwbk6LytjDxTyVdmoMUXxXP6E9gjBcpAhGEg9bRN9DhU2YNj2FrQuPbJEwRX7y5HkoHvGGeQxh762hB75d",
  "key9": "55TsnqyDLX2yeDCxbTNvUmnqNYxSQAm4B3skDk4X9SJ6eP3QHMQVTmYeyH9Mqqu3gmzqHMvHpSg9FeBqh1GFFZAS",
  "key10": "6GGZse9DEB1691igPk5fGhWJKngbBTN9kebTGiiGzxqKq75oyFU5K6LB3dLwiMuia96YuRzBFAFi4sjyKTz3eB5",
  "key11": "5wLsp91cqKHSAhgqGYTBrdBAvRTAv3MypH7kAH2iqcitWtLAiba34PAUwSaFXQnutibZrv2YjRjjiQdjzyFLU7iM",
  "key12": "4qF9F45HcqK49RdrvgfDVDpXjmQYUY86qMNfHeJSgkaSuwAKcgfVRRocWtnyzKH4q5e3rjKP2ziytAGHfZsEmBGt",
  "key13": "32dGgaH7uAF47Tcx2MAwn1B6jj7vUNLZqvXBdV3DYdiVS2SP1pPc3iyriuJqZTwZbkDNDfSd1TJpjWM7A5xMhwVG",
  "key14": "43WwwxaRHCkPnSCmRJ41u7nu7113DRa1xuMYjCyAQtBFjLK1dH6pzdwvKheAfRQFQLHpNhtJ5ygznMcJKpPp46XZ",
  "key15": "5VyTPxKHEaeHud8MtyHKwECwNyXcVLT3R3ywxSk2FKLD1fxjfh4AbrkwQ2PbsHD2sMqHZCZewsWRRMdaUYEzmYwx",
  "key16": "4NvrmQhBkj3T9C6WNHYjbvFFUMs1aPh6BJwBdjmLHYySWBmVRiwewz3qwxLJYTiomZWziBXzTKBW8DGetWNGni32",
  "key17": "2jcP1FvNREESj6fDDsj2Kcn9iR7VSuzVrEHnaFT5cJLjj8wkM3s9fJkBRChqutfMPZy3mkWR3ccU3qwDbHKHijLA",
  "key18": "aWr4p5JekHSEnaquoUA29VrKJGv81hVPbGp4VsVGQ2Ca3ZgRx4j5AWSq4tF1bFQDCe5T2W5kcYEE3Mn1b1b1ZbP",
  "key19": "L7RqkgyjaChkSwDrqhQX3MZHFPQkyVjPSNFFrhiGTYLxrMb45opr63vkcMfHxgkwN8CqttQgtsdQ8TSrhRXFzZu",
  "key20": "39VvUchev419yA1Y2ejB7ca2YwRKnsGgdEAxWkL7xxMRy9BDLUSKSVZU8FvsR3QC7VF7E8UMHKVWi8iVdPoT8xLD",
  "key21": "4SUDMZpey43rEAdxfFv2Ut6sFjSc49VKNjPsJ93pdfS1PbeFXTccFh364yK6VRiKTJuHC7rWqAZEijUS5kq1XAFu",
  "key22": "4qtDBRwespwzkiL5PvaPt1RFGh4xbdRisMDNvvAffV8YJB5SshFPRETccQ25EuqcSPEarvGofKYSFwRzfz8RvmXV",
  "key23": "t5Zz8H4VS93bLLuFS9Pm32kyWwVfYFkDCep6o4ARhpDsmERS3Kvt35AoqRoStKZp2h1eHemw875Ct8kRwvfWuGm",
  "key24": "T7NGrzrYSEWkKG7JeXH1G923FnLqWXD8qqPhhsjKTYngErz1UhYszBk1tS3uZAdYLhRZySeAGSbJdCMUrkq8eCu",
  "key25": "yLArdhF9YvN1vVmWjkujRGPAZBAybzQ1WgEyjX52kDStaXnUqaopsHVGRecggkHMcXD1UXvZNPRT1ZQhqWSmZH8",
  "key26": "62Xd4UK3ZRzNNZBvb3pEu4KcU2dcG6GA8CXbppWBCdmQxUGSHTp9hkx6CUem3FPuEDMCzhNBBeznjYJktUiK7rx6",
  "key27": "xVH5VWrjtJPvv6DF6N27MBACrWw88Yh942uyfPnib5EasYvbrwnheQ4s6JV4PyULZvaYfNaAWtTzYFkWqVE1mf5",
  "key28": "4GEeFvnW4yWdcKUD2VCaNXxNTVeLvL5PjhMfMwfQrx2nHj8Y5ahyAZWp4b6jLwRcUWQtsV8nx5DhWzwwN3oHVnKN",
  "key29": "4DHC3io74Wbk83ZHmemwFvn5arrTuYjj4JYoDSp1aBPUuRX4b6apo724pTkN1inbhVuCSD6QUWnxu8cpYa9b8beG"
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
