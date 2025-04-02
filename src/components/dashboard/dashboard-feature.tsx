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
    "3ZMqfayTcJj2ByrFhamSo9aWc5sWn1nL8Yy8jTw9VCKUcYZCjYF4p9cKCYWd698DAzLnSzdTStpiTVEuh7MHNPiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gu3YWaSwGn62bTohMXDoz3xDRVYv1RSsKz9LxsCJbrD9eaWrL4dQ7WFFVC1xxxVYt2uX19TN7rG6HWKg6P4pwhb",
  "key1": "4pJzwKG2D6KpngfMJ1yDJd9mKHYohStQBvUSYod5pMQ1hiKgfBYojYJDAQDxP2S3gGRS4BnNbbdDSuJV8XH644bs",
  "key2": "2M7PQd9HP7B6xUT4EBkmqwiq6kc3LXjybNbNBDYXjD2GnUxMDuAHu8w2kEU17MEBUWns7mg1YnewTUabXkaGbTLZ",
  "key3": "psT46XV6BwZkDHpkf3ngtfr2LTwaD5sTtb3QJu7QRRSWjq1uCrcN8gcqe2NfvqaGnXY1sv5JCSSct6H5YyydohA",
  "key4": "2YRkCh7rDm3JoRpNEuxRFgBpqe8UoWzxEZqeADTnMHYD68W7wvZjXk69Dcf4zGkd57seXdzfr5fgXaokj1DD2gSF",
  "key5": "3MWfEBpQYFcuVQZVpvpZ5ejVCcTeAq9MJx3T4ijX2chfCedVuAs56vTvpSi4QZe81QwvvCNc8eiczwgGoM8rs79Z",
  "key6": "z6QUT5QRTKycB4KBzig69j8Jz3sa4maVhQFTA22JeQC5UjgtCigw4LCX2tJtNht2jTgVGCPa4iiq5F37DH1rDQR",
  "key7": "23dKCLRPoePBWJYq4mNLn12AJQZKwxpFGULJg6accNhYeWrjzYFB1ExMweuzJa9UqkdTF2x47aHFZn9sZHq8sNty",
  "key8": "4za5UoohwBjspXctyVnjmctvK3bAMnx1WMoencTEYuAFTYrmfTVcazDANk8px4fkvEcCXSMs2HCwCn4ZBzQ8rHXs",
  "key9": "5S8ZUJ61Y6TCSDvMU6WdX2KbNATGiHk5Sm13ZwqFh3wb3ieomJyiXkiMNu2kDyoF2U8Zqg62b4dPE961q9QBtM2V",
  "key10": "3FfYWDohVcZcFtjya9QGxjZtBP2Mwg4F2JNwBcuUXxxLsGxsmqVHSqfW1TMojd1FT7gYmeG6wA75XpVdPethbkP2",
  "key11": "3n3xwaGZ7bXTNix5wiCrWLvf4JMemeaMDSpi3Cf2rLwcBJi5BSXm9B1eU9rSTvoigBPkJwZGSuDdYNASo2RhD7qM",
  "key12": "3B51BbotdxoHkAcs4tVnVDEQRuQCNmX9iHJY8v2Z1cF7qZb6agXebmAcnNG9aWUKrMoi6Zmt2YzSFACvQjD3TUmE",
  "key13": "PqwjibvmU7CFeKQtW3BgyeavRHyTMf1hQrJUDMtQ7dnP1FuftU1HXMBKxwj8swvbYuAMMCWKQ5kFun2h8TtxGZf",
  "key14": "43bWXcpUnM5i1PkUr7rbYwxo4oJRJsw54NS5qdaeZsYhe4EKwQSr8182AzSEzK2QoRMQK5SFayic3rFVkXigUZVC",
  "key15": "4FTX8DALc68aYqUEk4UeFevUzZZXzzFAdjNMtTHjGLbvBJexiBpEi8pk9HCWzWzGCLknp8s7phsF7qEKEUujj2hb",
  "key16": "2hC2z7KVx8WGbVUtCxe2YYcimVvdQYsN6X2FKWUxmLo5d549b9Lwd8E4KLNCn9GWC8tS9UYnMx1Fw3uELXF1tFN2",
  "key17": "53PrwKqjH9cowAmziGbjgEKYRxE1KUevPwQPBeNKNTsozs37gb2CWwq5L4dYzGWixxhF5qY87nX1nBrJQ8jyUshh",
  "key18": "2uH7Zjj6NRW8YMGUkZPcdq63LbzgFPgxsKWw8DquFTtSL9teYaUGciLWV24wvYKpJiqhvh1ADFXZsvqoNpSCgMhr",
  "key19": "gpbDkG8YPjxaqLMmwnehrFCQWX1iYBBNfgaBvf1DBYQq8Busz9Ni183Mo5r285bRKW5ya28stB2pHjmSrtmsAk5",
  "key20": "5aPFUfYVso1g7sjM4PAWX1XeToKovsU4mSgCPzaP2EB3ahV9Cqmkpd5dT7QGVe1W3fimwExEb4mcqicLjEEcwH1p",
  "key21": "4B9hD4FS8f5QZrzAKRqEzt2NHpT5hSskMSiLVj9P8zV8MQQXSiqWuGoJCw116dwm8SJn6CX2NfWLD6pJ9CQkumDC",
  "key22": "2vmXwNw8BFXEv6z5ZWRHuk3fL5y5de9nW1Rw3uh1JwemjRQHDXG9fRyRaezJznXuxf5mxgo8Q5BAWN2rkUxwT693",
  "key23": "2u2nDJeHc8vY8pERuyCoyq1sKQ4RebtmWWY6BPg2pz2k4g58THvDGvCe8QXBxQxJk1KigPiXtUTdqfkr4ZhnExAQ",
  "key24": "3uBzpgwGJMZegidBzCVK5vcQRFKxu13LfnLkk1Y5xzpFfjE9vMGcUCFfUQ3tx7wvMAHUQLdeTjFBDNwiuuK2KWxq",
  "key25": "4RbRphyLpLfcGGqwjq2yZZib4CbQAz25UiRmkeXNGW2Z7Eg3uB3WDVYSBLsKapiNfJYW6sRPK7ssoHcyPDE3HSDF",
  "key26": "2vyfeKS9nqesqaEbkxre1CxhSTKGF1FEvgXZfFySLuV9WKPv2ztFeqUpSKfyKFEFKWKdiK5m6QrBkUyJjmRSWb42",
  "key27": "2EX2EHtTcTXHLdpCs41dPZ7K3m1oPF8QRGdekU9ZcVeoqftB6X4h4h3G2vUKvFosxGoKMNxUrZGzoQBQ6aAxbvQ",
  "key28": "4EiNi7sbzhQDqaWBmZwbceSgpGAKwUEwRhX1gkGUxg8YH7jM4oSqJt75vGHSo3VJDwCRuoDB9HvGiBBFx8AnTw8U",
  "key29": "5sGjYMTZbkLCrJYj8eHfKS3TpAkeD5NwVwbp8psfyi3g3Wf1kZmbFXuxDXRrJnd2uXRa67cQtJK9xodYwuPrzN6E",
  "key30": "mVhuLTbprzY2cdhctgFonMt5jsdvu1nM76Q6JVHeGsGiXyaysna1kRH3b3QYUWeQLKngxjHnveYaofuPxyVwUk7",
  "key31": "ztfFbYCE9zczP5wuUYhN6EprZuthj7oqgLut6KwNFZuCUtnqJZbXS7hMPaM7gMbgCjWW4W76d6WuHo64t3vSDPr",
  "key32": "4bzuqqCCKYbwQYaBLwG4XsHvYJDBk4VL6Lkt6wTzpHjqqPh55sSKEWNGeeAaTTWChtw6vzkzwCev4B1KtGQNhQZn",
  "key33": "KCkZanYorqL8f5kUPnobvvmWz5x9ReH37Mfx7gpXMhNBca72YV31cUQiXTWJYvEc4XxJAVDbQS5YNiU1QkqmNv5",
  "key34": "2w21DaEevvz91WrF2wwS1KnaxKxRhxopvpV5Waujy1s4z28HtCwLjLV99SpuQASsoGBgT5xwEV2YPfL8QDHKb2ud",
  "key35": "drAVG2T6KUrQbZL7ZT2wtmNwnL8wqRw8gdbapxVCdSeHS2v6abW9hdfPMmwaGqJBHj4uzgNxchUuFq6Qe2NpqdN",
  "key36": "1UQUkoBz66HaYWwBDwrTLt3eCQCXAM4PGjZi7ZNLFsBaKj2HumGDsuq7epb8zTcgJzG73Hs7c4Nmt2ZFSDYp5ZJ",
  "key37": "2xDi6uxUr9zbJVUEFMrqFUxNGn2qYf1ext6TaHYXucaB8KMZv1t1PpDRih7zn1xVdmRftMDnQdthfJEcqx5XcU8E",
  "key38": "2EZGzF4Wc7AapFbVemKgCS8Dn2oXuoSqdkwaHGUXCEnKssSvVZK5o3deAw4tg46TDri4bmPvXGxQYMN6p4iLXPnW",
  "key39": "4WK8ZF87T7HzWTwHksaaEoUHdva39aSAp8CYnnRqSJizbMitARTSf7R9ozb8BxosKbStP2etFT2YCWVNNURjKqhj",
  "key40": "5AzRcBhAXNMBLZW1XW3t68BnmgLZdzkd8sfK7JPCL8Q5moikBdJrTgmphFDvxRohhwUFCXG7X4s9BBxD2DmfhvTL",
  "key41": "4vrp1STKcLuRQ9fJgP4sA6y1hKuLPkePCuM6KZg16hjHcudP5ZdudRfgUpEywXhfCgzYptoqMkw7M479SLi39Hro",
  "key42": "3jVzC9n22xQHPKNv9rNdAqpVerZTyFytThGU4cBr34cPGra6T32sz4wata2LEvmmtVQwSqH5ZZX689NgVEMKkCCH",
  "key43": "3bS6n34y48eKDGoNHfkVPXm6HUhriJRj9PRpyrFLzRdFKGQDoLi4v738wougUjwD3Famoayja6uhWWWk2FvcvbER",
  "key44": "2CWFcuAZ3oymeaFgypL5y8cYfB8NXzxbtU5ka4sstmNUmVT6qVhAjLbg7ajucLSBz5jAZVNSQ7tFPRbDb6FNodsP",
  "key45": "66gCVsNnVpLjwRPR2V2J7ZWXpsg4qC9V1czYMDLqD7pSqtoV7ASCr2ssiKSpX41EteawoftwYZVrmY4kxJwsRxTS",
  "key46": "42wQB6BP4kZrGVV8Y47pVRYbG9cgPregkdi9AbGYED4Nh5HgHJxXTXwqn6qvs7G5z6hE7mvdRAMXJk6BoFnHaSns",
  "key47": "5D6GxFHuSCuftShq3qTgxmAgFvyaybFx5M1wdxpNjHPn9jg8X679AMUJAkhidTMmxHBMmyWVB9URJGZtmGaNoKgq",
  "key48": "GUDbdZh6gYx4AbH4khFH3vSZxPr6UWbRns7w47UianAVstUPZTkUs1hgRjdifUbm6NTC9wA55aLxUgdXhfNxZsm",
  "key49": "63TLMkYyzgBmkNxxXwvpe81PE8nUfQwWuNepiVzCKKBzkridy9MdvoQQxZZVG3G4gYabCdXWZ8WGagkiHVFxhqXz"
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
