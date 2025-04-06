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
    "3nRDpNV2TnENGk5puwUmxgaySpuYCPASpeSjPySLjm4iwvgRzRKEdhs9YAKP7SijbiVfy5L5vfq6ADGbHPBJDhG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kaQpTdT1DC3H7d2pReqpyNSMYXUQiyoMSD65SRdiDQVgucShEA5RNvUsJxV9hXnTtZJKvUjb4oynMCfG9yKgkqX",
  "key1": "2HXdMFSLSSzbBNzg61izUuZGdLvpSBwPtxzRRuepuz9fC1ZGJ8A3Z1yfYwbhXJwsgedV5ZLEzdBSd4p71MF5tK81",
  "key2": "5ntEwfdCGCD78AFwr48BQC4KCwWpJEZnJSfJkbF6ioXNBdqzvnhjQgT56HnmYoGUtKkciDoMHtN4gGEQ3JGTNbiF",
  "key3": "Aat6JKM4tZd8BnTa6RPLdX7R1xRjNadHvC6r8xedRo3P53t89ubqRFZRLmYXXKXv7g81nTMyM8qfRZUN9k6TRHX",
  "key4": "3MgnfNUUvgkQZ1xf2N67UmWXME6SDkr6wNL7AzF4JWBJev18icKq1VTBKVL3JrFQkbMNavTLmXQZUk1vrHM6vZYD",
  "key5": "3hejvRjcPvVC7p7Uc8GEqq9ow1HrFPaYxLTLSyLkZ9UD77phZRSVz6chLb61Ggx6HFF8YChEPDtqCefUuysnBMZR",
  "key6": "2LarbxsauR3vyZd85kwPfd3Nx1hzZuttatrb6ajCF9VanApMkWni7tA5erCefWqRgVPTqXGogJuFDfEWAa71nZD",
  "key7": "34grZ6FLDK17iiGZG3EYq1H2qxxyJVf7agMFkbfoqXWoAt5fdJ7cAjo6BtfYtaVbmLgzfaTN48jK6Rur1hUNokSg",
  "key8": "4FsRuoG22a2N8digQ9SugVLwkVRB1ETCYuqqtAs7hZfHwCc1M51PHyd8DYe4jQfT8XmpJzzgd6vdr2RqXALcmiac",
  "key9": "q8nKEEf2mFyCevwhjBLsyxo6sjCvBXbt1Dx6jPowcey6NgJFJd9ssEWLot1pMeyodtpJEVU8QAF5WvxPX5PQSMU",
  "key10": "4c6BJMqV1X9vKBTm9Dn7F8z2xQYy8ouKLhjpRTggqXkJu1BC6FFtmsa5m9qSykS9Lv4F6NhbpjUxK1a8NTrdCwV",
  "key11": "BrugMmNpSjfwLiaCk356qwy9B88u1nUwKWgeiN22aX7kfgmzG7AG96CAy7kf5uEaEGXQ7TZ389JXkENv1CfHHrz",
  "key12": "5viDMdGp5XxAXShj2ZnTr8Wyeb4TY3sGAJa2igQHKwwRUdfLnhASU4jGsmJDqQnMWiz3ZYCmAfgfdAAgwMhSHsqB",
  "key13": "afejuapj63WyLeDB64VCV2AkQJVHbUW63R6uivMy3E9TqMUALNLTSXiNJWNpL6Z7PdEAcDTELDBVSLLEXws393Q",
  "key14": "3Y8zgCie3NauWtpNY1qRu3dP8LKj1hdkULqmw85MucMurCvtnpbaKZHj1QqPJtLhHBU8XTgUcutA3YxSTqKyNeWD",
  "key15": "4p6Gcx8rfq7HwaW4N7nNX3PUZ5d7YcwbBp6Gw8bXFFupVHExEnjRJzvkodhLyCjcpnwyhRryKK9ZhJJnq7cHRYip",
  "key16": "4VUKCSpkmtMFwAzVLdVq6DH4E22MfrWNGWpkzo8eFgnDKVDGwJ3xSnhuWyX8Yq4wzXhqR9DEuCo8hjiSqshcvvxd",
  "key17": "2FbunVgpkDG2DKghKAcZBCotbSA3Di7nPL4HaXZXYEhs4iCP4PXTY4ADuGu9zkT86b5x4PFDMqRGx2fUztziLokW",
  "key18": "pbSrDGxP71zyHY65XLtfVgd3EB2Qt3ATZ9GdNueYs6239TUPKMEZ9RaLbrkbfXW6p5EBKXXGhEA6YpRRvVH9dmE",
  "key19": "4VWhFNFXuH8DsM3yAqczPqiXRCjRjLXhv4RLepjBNT7LcRK4kDXD3k7qBHmbXijuoeWg2XcUD47SHRmysMWSG6JY",
  "key20": "3dnkbk9ivvfmqSiacJp29a9t5QLt8ruVuZqg56qEFX9PRuvnvg1Utbh1TdFpQtXpbbHAvjBDif17UhgJusGMY2ht",
  "key21": "2FnkfQ5rwgRFBe4AE4bRJjvJZVvu8UdafzYJiCJRYpDTH4VKPpEH3i4Exx9wS2dDa74xKyfTcrH6qaDvnCU473US",
  "key22": "5SAKJYR4aqynRMJF8vJ8aZqA5JsvP2fhFwmLQoMfajJMZf1qtVHPTRHMzDYYXJPt1eMHiQQ5GRoofUDAY9kPYutN",
  "key23": "5pmUCWhZQwYJ6AYDqeUzY8LZZPPMYusaBmNeDvwwVmT5tLWxoZqBDyy4td3QBN5VcDCj1gJH2ehw7EQcNtYdLJqo",
  "key24": "3qhnxDX91g7TmgATpPffdHGkCXVMUzHf4j4A7zHMFZoUZTvRPzS5xJxBaq2NuJHn9VR76ifMKPPdyUUDzaBhC3yJ",
  "key25": "4Cr7xLF5mpaZtqEmdk8ipnHJdobG4WvP8puLCU1y1kEsAfxSzZfWuqzejb6v2kSDZHpF8eVKg5tVt9YYSnSJAgBY",
  "key26": "2i1G99aGs2tHKmeKBHG4MvcXneNmBr2bWX1j2f6LJmbc9sWHTDYrgMJ4fmKStqv1K5bt21XnsYNXkyLue7D4MtSP",
  "key27": "5vSNrK9GmkGt2MMeam7LiYd5B8ECHJU81dFdskz3EsMSDZEu9fqWoU9D7NB8uVmsjxz3A9FTPpr9Ve1ya5Fyki1i",
  "key28": "2ApSa3jtsi6eDR9dDXR5UwbCQPmmWNtmDe25v1vsNFn8wXHPcn7JB5NzCQekbKsLWcYskHu6dFvvb54LjPUhSNiK",
  "key29": "44wM3xUQgnggViCnbZpe2nRiNZ5H3Y5HkkRfYUzwcwncdEr1XA7WzviJqkSRdRNmWBcqHv6soDpxnQLVRTgHGayK",
  "key30": "fScsJsPEy8zCvpFCGk86e1AZobM3aDgZ5xr81CkPu4kSz4DWkbunXZG1QmyanmUHj2CLVvvedr8btK1JyqVsQS1",
  "key31": "5XTbem7YS5sNEcy3wW8QpcWo9mmgRSnRQxUEMayg8EYEiJym9LnnZf4jMygy6R8SrgNC8AFpXpp8tf786fECH23P"
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
