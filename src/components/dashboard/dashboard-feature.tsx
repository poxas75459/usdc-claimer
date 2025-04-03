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
    "4xy4Ft3kiT97Yi8uPXPtdaRr4T2FnChRrqhB1tWmhSMwTWEXKRwaJ3fVA1ZEmHDG9xAkk7PabDXEhqcnyDCNEHiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xYQLf4GqW4df5gUcLbrsQKQzKJXEtPgpxwNvubbSNPmBrNPrXif7pZ329zABSEyFP8u7dhsDCKasLt9AfG7kfnB",
  "key1": "3tjJg41iQ4k5meihqn5qC8TMqbQdBMdvAr4haAuBrPaVLazTqn4EFZjirWnX17iDj2esV7QKfXQFYiidHynS5FKc",
  "key2": "4UBkAq9vds8fcpNDZ7euT7iTrxVPUKrNRo244UjR4vBgpaka3Emhss81TmWfZpaKfQ2hL2sV4fMcuzycNBAiGJCn",
  "key3": "2RkCFy4KaCLsvEMcCaGmYXpTBgRubTkFej5jMDdSK62FHSApXstk3zdd6urxFTgMa7ybCfTJw5JxQ4r4QXEHbmZG",
  "key4": "3nuM8Gji7NYPfDMJxvVwo8kkfTbNVLR4A5z8Rx3B6JgC76mxw6Nexy2whBpETsRHejfVFq9hZbiofkoXzRCE6G42",
  "key5": "GNu1BMuXTnKBS9k7JsqDJkNenXkx1vxC7B5ocTms594vaP5dRVoMZ3owdaDXyjWqZMNhNf4YCJCNR3wcyfsr12C",
  "key6": "AacorkWWt3ZJhiN7swTLo1TQeaMcWf6qkBJRcf31q9D5xbzRRSq1SDSHRGQZ2K1VZjqrje6g5D1zizPmmqaBbHb",
  "key7": "2ut2qFhitC4UaKVUQPCrP4bmWpumiE6h41zpVa9iYQGX4Sz1ptGAhrTTohqG7XR8uiy3SSK6f5XePJxdu2ZepyB7",
  "key8": "3krxr31HsbVT79TNopkK6iFscc9b5g82fs31aA2Y5CASFUAByHCSTAxj3HmcNPrnRjyQ8pFrfxAyTNNP7sx9TJXw",
  "key9": "5W3yiXgARVqdCz4vCXdiLkS7evrTReBeEH6poWaBBrpS4BHj8o9RAbEm2yxxCGT1j573ZkJXaYUGshNwf9JfBgkJ",
  "key10": "3kjoe7Dnttprm865V8iumDunaFzY1jbaGsRcLBZnZHnw8oZK5R7aJ94LRN1BNVJGUT6zQpgCuQcY58VCtgJTjdBC",
  "key11": "3PWXPoHKeb6YVQCbQFxioaktqUMrYUzwqnz8fepaw89bd53AV4wZYdZUfw4ACfxQDWTGCUssALahjPVXHviMk5Ka",
  "key12": "3DN7CVia8dZScp7aUhcNpt3fwxwqNAKQip9AFSavqReHkiAEbBs6WQmJwkyjHNjNfBbMyU98EoE4WJu5srnjbVvc",
  "key13": "4ss8Lfdnxax9NJ6XBSmMXha7BLxiJY8PEEngnqgihSLD48TnQPxPavtdLL1rVqCBk3S7wxaJ7ZoZD3S6FYbwPPeT",
  "key14": "2d4pryw3HqH5DzYEH7B6Hiq9zwWs3LbztXyD8Kntv79Cz85uZmrMqs7sv3v8rCkJEHYLNRyouMgH1JsRMsNsZ8uj",
  "key15": "4rXfqfqBks2d5WiSUhD47uTWpzeQiXVSkCHRM7eAKzXAZJsx3xxKEKLhH4VUQPM3sJgAtcUgBzKdeYCUraQ5gA97",
  "key16": "4zSBtkv5SPkbyDNwDZGiJPvDnBzsK2B3GqX6L419AyPjA2je4f7YreLrBiFiihbB5uur9Ho5uEZXWc8sXsSf5uv2",
  "key17": "PSnENg2ZRVNnNZxWX97GVzuoGML8uGeG937Z55eqLCWbv4poGbezJpghQsgYQZk4muPeYpbXSHEpcnPkTr6wZeS",
  "key18": "RspNocq2JUMhLhNY1HQT3XjfD1dPpqQ833B517jycSRmaLC7hRn1LpFa4jVQ63A7TPTW7L2N3ckog5ksKfH3hQ4",
  "key19": "MaN8QCahYn6p4z2rHtYJ1H6TEVVKNqFuJpsi6iSRLdjxdXNgzD5JUxmYa8hrTyMhjx9G3MSB2MhPGS5TuPCJDfW",
  "key20": "2YtY2ySA2bf6MfaFAS3NQvSrXLgmTfHCa5Xfcpjy3e8C3WJAEy9VX5QK8FDbXhRny2ocQyuRb6zohaGxmHJnocwg",
  "key21": "2f3u8n4HW77RbmS2q3E7138SHFq3pbxnYB7JnfByMN55vVu4ojZiZZn4Lieq9GyTs7uaVYoYpgXpbzWkZyUm166",
  "key22": "4LqbmPeb2YKkdRJSXR8SNs3qdjCRCzVKGbJsmhs1WQTWUhJNEchE5MuSU6Qq6A2zC6F6rzxNPjELwUuGvfMRgQuy",
  "key23": "5aWL8yrmzBhL3y4xA75CXVWT24MLU2xfqeHTJfEDZXfkf5YjJfiyScKwgPxC9L9WJUA57T85e41fQKXtEm7MJRJP",
  "key24": "5HHDEVtubkuutarg8XtHxGRSAXq8FXCkeWB3pPvdkWmX668evCD3xD1pkLAszK6v3Y3DKeHDnQgigHRrGmPMsVPp",
  "key25": "4QyQ3pNgpeJtzDJqHutn7suLaGbZjPc5NRsNihPdRTPdu7ZVW32tHovye4NvQgWnmHVNApLpnieXP8qvhGQycz71",
  "key26": "ECFKha2eZ6BvkQgGqjgRKaxQDhdh6z9FXnVs6zXKiWCAe7DbzoN3WfV6T85x93MySEqGRRmxGmQFeqqTfQAHwKD",
  "key27": "3rL5PRXyxgv7h6jgNvePuEawowJpVW3vrLdYcCTcPs4XUUGsCbt4zCAZzEMVHWPVWmzhP4kUK6xLqc7it3a6hAUF",
  "key28": "4WM8CBMe4KNMVwWnRgBavX7fQcfwxPzPxf49Rn8fZtBKLXqMACnLWjdcnnDn7BDNqWWUeQCdwT2hWra3CVenYj6s",
  "key29": "5f4qPDMoZsug9mB2ZEkzKfX5TxyefyyHnqcuxk2JUkz1GUcoqJUw3uHikKALeyHNa1vkVXTne2LB9nbNpnMiXLHd",
  "key30": "2wakwabtGzy1uKn9uQhDMUQAfJGizjYwTu84VaaSxBbRCkpGQnkhSav9VU16vj9Cd7JptccM2T9S3GoTzyaCUfvt",
  "key31": "3juVnmkmT6d2Q5NstUUj1nueMdYt7ByU5VmKDcZ9VtfW1MUx1JLFDamE8UvN4eYdFeRg8TKqcnKfq7emMHjCPfBB",
  "key32": "5Lj5KKRx9Z6WVv29RfoEFxArZ6mjLeQyaaudWXKzLYwChnkQRFKuEnw1xcBND4pQ2bcaD6Ayj3Bfc3Y17ubhLeXN",
  "key33": "4VRi6fvGg65hP1LB7aoGDk8TUu3XASCTThB8Wx43NKhDeq9dBfZoj9gFDiCnRzFcWpEYsvgCvGGYPFyRofCkJS4M",
  "key34": "Bj9zuvqjDtpj1KyttjVSedwHmqRqYZEieoAdQRZGiWhUpp2Jz43Ar3j37v9CzGL2jEucKh7EcpNLXt5Kq33nU63",
  "key35": "5ZxTjMLHVEaUJ7ceA5dx5La3RrTBRfVkMs2jwGodNvuqizqJ1fqEC3sxVnCRmGkei99KcjghaG5edjb7gvCN6L4D",
  "key36": "4Vu7yen2jrkJG1qRBW7dwioZqvXHRQmQc2G37Cb9mA5t2Y7GFqTstVGnVq9y7bZDQZq4gWUxAmR9HgxLo85qGjm3",
  "key37": "3LYSFWPaNu81BfL46uQ9vPUsvyJBTTrQgMQ5b93i32CYePjBL3pC3QC1UGYASHyq2mSt8u2bgEvMncN4vbFbWjE2",
  "key38": "3mvX4hXTn8RUHP7mBfjPRJzRDEUKAe21Hdp1TWv9Lf2mTMmfXmBBbXfpF8y83i6LnRv7T6Wb4tDZRnkTFVFZwDAP",
  "key39": "tugx95VQdk5MX847dMwDrmJRbEaRVTHWTx2HdMcGLfKJDo1hYVvazzUfKrJKEFGSPCVA1WkxuzJupaQopdWAaTp",
  "key40": "3mZAQQzzyAKpkT1CK2452fVSLmziiD6Q9kE1p8RroBTvjWw8Wa9D6U9KvjGcoJrfTpuTvUPUJsSw7bZ4srMYuHGS",
  "key41": "31L1W6687pkf2aNe4MtijUvuMSzPKabrUNNHkM8ckbqaU9Jba5qc5Do84JFtgmLTqvkQMGoSzTg7KUQVpG85kYNi"
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
