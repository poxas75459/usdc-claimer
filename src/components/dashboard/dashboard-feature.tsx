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
    "5A8PFF8ThekczxXUkB3yLBGPY8G828GGHnUZkbrM5wkAzV1TG3dxtc1GY4r7K85Eos1z7t2CaRszENkq7hAyyqv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmWgLXSCUCsQS7Rn156hRKduj1eTBAMztgc6QkKsVLbnvbR4J2Sc8J7kBLQFuwEMSL7KZecK1GKx7sH6KNAzPVa",
  "key1": "5oEcCqrCeWfmw71hfy9ALsFMocC3tNmkmu56HAe5aZjog2iPb3VMQwrY7wTZWHqQSqEUH2PhpmqpRUsXTekcdZBY",
  "key2": "557gcdLjXrACnh9tHo5mZk7cGAnuYZDUM5xmq3fvFSGF1X8oZMKGfd6BUqXXPvmU4VYUPSX71KnCQSxJVQ6bp1Yh",
  "key3": "4zuBwDB5kbREAL75FDHTmEJkfFH9yoj6XZmFjWwKmhhWNHgqoWJmtbARHdD4zEyq8UGAtAZgwZwwSW33q1FEZgTQ",
  "key4": "5vhCR1yP9fGjbmc3FENTu3HQjeUgQfYHnLXqLWFAX2LKAYHY5cMNK5xwFY4oU3gHooTu8WTDsgiApoMNViPks6FF",
  "key5": "pAQUsuvoLF1ynzxJ3upUpetNcG8AzHdM8Cc9PhK3wbZrMGdyGfNXs9LuRFDZASajgPz7HpuKKjgaSqARwPnBAN2",
  "key6": "5mtdFWrRdUHiJFhkrnd1SKXiZztxJYyhFPkS28wAdijeLr1jhpkRhdFPVyfUs4k99Uefe4F8s1L6dhkd4hu1qyH9",
  "key7": "qXNi5DXVfiJCaUaEeFY431wdBYBc99ZX4Pp1Tr5FJ5jAqsipvzBhQaxjoZzZUyDJUuPcG7YiwVx5Sp4n6VMSA47",
  "key8": "337uBDfksLqzQixMWfiWLKu18D1xqihY4tYiTLFCUopBinxLFk8ryCCGXaw8MCj6hnaBsppob2Fkk1hZUhCLAzUs",
  "key9": "4rLsWFASKmYoGrdNK4FfjkQ1zznrmRxNFfoQ6gRVvUEh4LdRCxfjXwLRppYMmPc3hkF8AGc4Ty5QS3DXBaCjLGpy",
  "key10": "2fYcgcucVC4BV1XETVLQHmAg9mT77sc6gbx8BjYBb9D93hjipQbmAXjfpZB9jffwoQE3aLssamzaGBad6FrnsQyF",
  "key11": "5F4VVAdNoZw19RM71UrdRU83W9EwyBLM4VPGwbYMgFvqchP8ZMMKEFXgjk6Hp8gvjAzKFAzasT1Cchd3wbYJNgvu",
  "key12": "4VNRMVKjqz4FeGBdtG7Lh5o6EAhtNymSUeUoiQ6no2Haii5JXzzrzWVzipTyw7yRDNDHcdDHdEuojwS5dPYRrE4E",
  "key13": "5ri6uYaDpbeGvB5DDJk8p7sL4hkfNozHyimRqXUTSVNZBc16tWrBA6kidg5PRP6TUNkf5FahFX1CjdUaXk9bXxLx",
  "key14": "4NZoU5idCSxujchYVo7CUNddNhotWEFwQFte2xwug9XfDozPpBKpykHvHKsm5rrnVQhCmtTWnDQk9YRg9gzX5ED8",
  "key15": "3cAWxfRAKqHT9qrRJ1ZvHHE8ZpXfNZypcegFEV2FWeb5rr3udH8sd9c7rgNwBJsaV26RtGhQ9Zz5ktVhqjbpH4qX",
  "key16": "wWUFRzzsk5HEh8NDcgzfi66EqvBw3j3G4QjdZH1pmGKed5YqFTvfJA5oWYZXRgoQarzTH8ZuDPUdcKtb9qEV6k7",
  "key17": "5ayzQUgNYgeLo7f4HC9vXk94NK7ypXUmuDAnWHonvcTB6V9UM5jcEmQi3YFstmHaDEu8NuDRcrLKeUhoTozxBfHy",
  "key18": "3BdmWeroqvmSo4Dj8NWkobzucM5iSXs6VwG1VuZ9Y8WuxXiV2bhKdPKBJMC5aivQZUS9yMvd6rugR9RX7rBdPoZg",
  "key19": "d9eZHBRGCcR1dHia5kAas4qfgTzFjhjYtHYhcswj3qsyew8Ed91RtYfuReozYURJCzeCzhNp8pdUfUkwqoqtcbn",
  "key20": "5q7wx8eo6XvzLpAUAf1afcwVDpdxU3hhPTieHJdqVsWaWAXGYyYMvg6BUUZ5f4ULQWVTWdzeNLYkBH1vZEffE3sh",
  "key21": "2EMSve6TMHnsBHVbDHxEQ3NPydgReKCyFhd976S98SiiuTCUhd81ZqvmvTb9eSkTxKFfk84BXFsMBwJv1NJyxiDX",
  "key22": "BgxxjqcW8HCuudR3PiKTS1QcyfTVGwWYsx9tCNcvhYekUh2C3pQGjvSujA6nuYkZGVMexZRhm4x4aNrp2PvQyd9",
  "key23": "3rsUK6BjYcW4exjja336pCfPuRYGrn8ESVzeUeX6uEsbDgTQ3nNC1sVDEcFMvtYF8GX3Um47HK9nEHPzFTvcyTXe",
  "key24": "4uMAx3i6Q4YNyyxxi2rnjHHVrXbLAVD1oCdjL9RWcbn8r1hcuKX43e9mq5FFy4h2u673nGrAeacqQmGZaDGy7FuA",
  "key25": "kAuinEWbs6YEwxFFtz15sQi6xYp9bt8B8WyXYysE2y9Gvw8S1Ks2aoAG12sgfdgaXDKvXxXEuPWUVfEHrvHdysS",
  "key26": "98TUEKfc5XtULP8RCRuRuvg6jWgVGBJwKHvkAvdVB9e6K1bBsUPqZfQwtYunfVJ5GdCYMdA5zHKLRNCt99R9Zeh",
  "key27": "qYVZ2Gr6N6Ay8H5Jk4NJHEv5N4oS6zRfoYjf3ZzQVStBhvSeyvkeQjiQCMpwmHXtJXiLWdGyKKZNoxHHSLRi9A6",
  "key28": "SPNPFYqqh1XU2fEPWJHhKcvXaKCq93eP29EyosZgZTza3PF5mXzXSTkt9pvQrbLcezrPVRV8taCZigw1icWHkFi",
  "key29": "5RdtPoDjtmDK2AFaSof6g3h1syMtRSqVmiAw33daeGs3ZcQzLJiFWfj2LqVoowJhUuTSx89VZeAXFSHkGR2uRako",
  "key30": "5uz4svES8FFbXqEvqWED3ugMgdTCy7gTVgorkpcxhWeLcTLFni8mV1354Ju2hgPLDQojcxWodLb4QjPSmHj7oent",
  "key31": "2kGQsJXXnCDiaSvr9KKKvymxtKis8LzggPjVYoH2dxc5GQ7RcDr5RYi6LZ7D4xuwU5KyEdAAU29htr8WD9uBMFck",
  "key32": "2y35dj7bfcxSeeLHN32jwwgKLjXpTXkAYbAicVrYYRuKLTM7dU4wUi859SbQoRv4YUmf1T45LDMjT11uoS32Hd1d"
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
