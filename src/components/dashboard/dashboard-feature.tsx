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
    "5g2aVUE7gkS4cq2Xo5b4T1bYDTmwaWagQZhew3rmJ2q33SnP7kYX8eemy4fGki9hR77yK68Q9xJa4Bxv6zZvpDC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gvidmTd2wBB4uSUwcZrGYo3dbw7ahCu8PSK8AbhdzjbAfXBPDmsJQTGrR4BDaWR5tbNUttXrJbKLzxMDLbfBmi",
  "key1": "3ZXwnRtNTnn74MZBNanQPJ77ZswzkF3zYN6dzo2kg2VH1BHoJQkoCB4GaTUnQvn7P2KZeTEczUMqzDLbExtWnw2A",
  "key2": "26rZEWUjvwq2MKh6arCgbPh5VhNVkkKs6aCoaCH7iwrh9VKicV4Rn2YSyUHXnmAttfF6tAdcGENAGb9dKFqn7VrF",
  "key3": "2wXTcMXbrhT2YMemxjHFbrtXjxi2ZNaxxBKz4RmHRVMEK6ji69dy5comvqcobhmguhkLHmLsRGAx8pQXk4oaR9ij",
  "key4": "59tpi5yEfT7Fc22yFg9QJdDxEYMR5XDYZAadB9bUKwpKzeSNPBbZF5WwxDDgfxjAcs6EeAdbgB3Ru76mfJ35as86",
  "key5": "2BLtfUfa2HpfEvd5Us3wDb3p239c9qKZSvmPZGzh1cUoWDU5CmzfrYs911CxkU8EGmv4n6ap4qAfqp7jaCT6wNoK",
  "key6": "4W8TBd8NrBppQ9o1JCDCQGtXY3gMZCkhnzpVnG4r2yaSfAM5GjfJAN9SLf5LxV3qEeuHi1zYAuV1mJboYg8Bmq99",
  "key7": "3esJ4WLjSgaHWyCzvVFCUK8dvTTyaHLkh3qWPagZH7ykNZDCg2GdYsGxcSXsngV4WUV7UnG9Vu6Hvtze8vN2dmuv",
  "key8": "4pUniWWEwUPSAnZVH8qzecc6fyt2krqfVUGLJmPmoFPWNNvV5XDbcvp99CpUXB3yr6QXqqNuSNgrwBoNZFvvi6jj",
  "key9": "3Pp7HbFRWofKkCKKBTThGGPeSvxQGHafPJ6bXsaHq7Kvmn4nanAh6mmz64r2f2VkRBFdXgDnwhU5LvAqmgcpHhZp",
  "key10": "2tHaH2dELN9ruLxYUCqeweMiAw3MGSNv9QE3WXmnWAeZTHSaQa28mcU3VXRr7pW6tjBmbDViuQuErpXTHkNpjq2X",
  "key11": "4nENVaakH3mZSZnucxXHYVqxPmCczbMxoPSXWQngQqsBYgNDVLBKAux4SJtgcbRrqKVK2xhAGgCoptVHv6qN4dUE",
  "key12": "Rk15vs9qVUVkRcMrFf6rkjfTrNaV7vyruBzxw1u4HYmkPdr4XcAoTW8nqEYT1eYT1avkgT87jdVd5921oTeCxyN",
  "key13": "2riwbtVd7FhrQB1R3WSQzhjdRjeuSqA5yQduWJSquKgnvDMttRM4pq5dLDV1vDCnt7EDgvjG3pd2EMEPc7NXtoik",
  "key14": "4kdYudzwkW4SrKqzYXqqLjzvsyQZ4HEGkb63jZHX8CS1PQUAmwAWrSjmUSGhdRUws8LZeFnLHhCa5TvjvzzjqDva",
  "key15": "3eXp5yaNbGN6u52tV8a65jYyMnrDftR9nuXCdyBK3WZ9BfZcg7VjoDr5eh4ZKPyEdvoSWzRaxxbuhTcZeYxQLCY8",
  "key16": "31WzDbC6PNkMhX4eZhJuZ2YeLQMizgvLcU47GDzXtRzUkjixXdzcLJPW247LfYNh3huQRYPiPv2imqAvfTkxGfS",
  "key17": "4TMUjRphuRdcmkmMZSNHq8w2DN6McyADg9tA67B3JkdbNknPeAZJwswpgxGeUoX3unHJvWJ6kyN67DzKffAWef1W",
  "key18": "5deWmrV2Dxnrpe7nBp7UYmBcp9ouXuAY8KKAMi7AVE3sxWtPZcBK2mDHSKSBY4ziBVQroNx6p9Pn9iMztExzjMrm",
  "key19": "2yUbzrokBpRxtMvpDfeGicQjqxTHtpKFNo52RQMFSQG5SmDDkATcym5mueoH5PzawcbWsveHCCfT8j8s9L9zpL3S",
  "key20": "5XGb8LjW4Gr8ZShpWeK8r8LKx6jkt4ZGqr4LP2NB93C3mMF6oxNJw2MorRSguJzsd3hd7HQaDniJDtT4rBSoD2Na",
  "key21": "2xQJdKV5eBQTrwH1ajM5Az1KFhrMR8yjdBfCesG9pyApSGcrU23vdmEMK9HFNFX4zLeSXMPCdiFjcB6MEyDxeqWY",
  "key22": "3yc7YFcVYV5rPuK3p8FrkVtkhs8hZC64srAyo6pgn6y3qtxanFxbCCVDyFCRuLVa5j1pMjHvctCm7mcNVEKHQzTd",
  "key23": "2csThjH1Asxj8gAzyr6QqaDmt9WG7TmfATrfJLJMNT69B1nx5EfHLSvksjkN2xac7ogdgcVKeWruDLC6H7ii8tDJ",
  "key24": "3gQVdcPfvaxXFdRVdyKNe3ABDTGEJbbdoGJEAvBHW6sTkJJBn7SdkEgAKsiUqfFKQbHaY5XEKJdwsYFRMes66mKU",
  "key25": "3Av6nj3wxLsnLhY9XcicgJ4A7DCgRMnyawf7WH5QtgaxX7kAX8vPitCAgCssGTUZjwVi4NPJGyuhhtgXe2XJ8kp8",
  "key26": "3ba9U4LtADn2eC7p1WZHwy1UXXV2SnjY9J2JU7xcNTKCYf8fLTRu8wnqxYVKT58yLTobQcU1dnwNUoPHEcignfms",
  "key27": "4o91cS2jcre2ViJyKVd81g48492cRDa35Tkd3sza7GSUuekgH4Cu3VMPWWWcGskN5kvAHtroiXGA3rPSzxfQePhN",
  "key28": "5VxHfMz1WnPzusBDLGvwt4AuLBTnpV9EjGd3dd3TZDFA2rz9wi6avyhQR3NsPn3vtdomDskq89vdGiyZex9duQxf",
  "key29": "rd54ubAyThThSQFbYm4W6G7g59F7kyGKerbCDGWUPVggASeF1YzbGEMgeMdXBiwxtG1CsWKq22YHtsjUkGmiw4h",
  "key30": "5L2v9jABd1eKDyCrKPPgkHPc4ffmB8Kqu5d7ao938veYUqeKvGiGJmqcfhvjnK5Db2hZtWiQMq9iCLMcpizCNxu9",
  "key31": "2KKUZWzWo6FjkAmd22VYU2vJSQt1uMbUuMZ8xXdSwgWwzGacXEQspC5hVQnjAK4MJdTTb4AgNfi57hGzj1xwm4Rx",
  "key32": "5jVkQKbALXpv94u17YLzbQJtmtGYAbZP33bWEtBo7gvY6nfzV6CeaFwNvCrYU9F6UwqPgdAXGxpukqvRpiYZrhh9",
  "key33": "4jpyThpDMVYyGoJc4SamnMmk7g8SibzztcoSSpbC5f8Z6ewUwkngAu2RWaaEeQJRuGyc2ZtQbWej46tWd5ovBA3s",
  "key34": "5jbVskGcpabZn46qcf14MgLBRcbvDEPt24nAxwXPWQ4i7eLFYZhdXrgeZdQT4JZu1MeHPqcnAGjaLAu5iGrT23jc",
  "key35": "5RcHA4DbYuDh1Crg4TwdDNTEnmFYLUdQmKxaD555H3wwWjiffaYyMn8UVT74A8y9bXsKc1zcBfpRpA4fnrRaS8qd",
  "key36": "3KPd3vHLyPNppKpuTQ5X8LuqC7r9JmXTorUyeHfDDcJPjUmEL7RPBSDvAesehunpLxqimpavKKKuDnsqRVfGeEkw",
  "key37": "22SrYvPJYgxVsctbDa57zkBrMeHT396R6Dx4hq2EzfCk5Qgsf1UErgwUo9uyM666r4NRunDjujBxoJHn9XMXQ1eR"
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
