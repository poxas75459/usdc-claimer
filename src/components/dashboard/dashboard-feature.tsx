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
    "2KSSMR9xfx4tejCVXuKvjxske9AXpHWHR4TCXBw1khKdBMRqQ9hCssqcCYbWuMeVZXMLpCqT6M7Biu3cuZ35gbKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCaBajVkE2P6c4k5NYG4CBPr9sJjVGHTE4v5kw3ikMWAUGWDquQX7qXCnKqMpXRD8RkbiTanqabE91vpTQSv8V7",
  "key1": "4EhTsQokE19a57hMboh1bbEo2ctaebou7rYBppWDY3rDrgHuv4nHeBEy3jNm1T7sQX2kUJxhcbQLpM39L7jHKRqw",
  "key2": "2Zz2XDYWkXcpKPBNkbiDsKMs2hJqh9VPuaTDNCsqEiLEjqn72vhpEyLmTPANefs6SiHapC9wtsncDedVDZY7vRdN",
  "key3": "3qBENYyC6RYAgvbZe6dqeVfadUFiDDhyipn7kfsfzPS2ZM7ZXAmEgMmWEic8HyDEJbcSiRmizwpEtgxELN2wcH92",
  "key4": "Q22PEGRhK8RQxc4edrCKReCF4XPQJwXhnxsxYZvTioB6g5Cz2QMVbs2WUU2sw6dYDB3BRu57HasefGjvYWvrJJj",
  "key5": "FArTLFd252ToxNMuwpGufk6ypMU6vaPizqXZZ4dzybs6i3iiz91rK7yQjNLG2QyEyFwm5eY9kznJMmHeUXLqoyT",
  "key6": "86sraHSTvLsFqpq9bTeZH3cVCJ4G3sUVDsXGhTt5kLsZ8kvzv85QQLp8eKiP6CKmeAUaJtVVPmqA5aDJhEmmoCG",
  "key7": "33NEVQmpxSc2n9WjBMDxZRd5RFUMzh85ncKskBmevyQP18UMZKMHieZBM61kWumVUfBjj4M22kJFdWCnLbiSFWFB",
  "key8": "5aeWxgSiBRZGvwxvQPs6yhMdQqitCDyNJiZnTsznJvDHecWZanWGWyFisnmzC3Nsgi93GMK5o7pgc6gVNvvhv1GD",
  "key9": "4GWQUu6Aqx6jvVGX5Z8HxJGB31eHidaEKv29kgkwsWuyyEuZ4JG9Dtd2GEyLEiBnxtqhKicXcEYxkT9UwEFLcvb5",
  "key10": "56kAxKnZ4AT7oa1aviFR1pjXBvKP8skwnG2Dt3wEbVDU2QTXz3r5BaQhA9N35RJYB4x2uwbyBDvCthrRSoWftZsF",
  "key11": "3zB1wyKqnNKj6pq4ry8Vs4MqVU4h14dgm5aaCaoNmyYh7z6AtX2xH7bFwgmhs4gmXFKpNLAJsAwH2Hpa8nm3QYep",
  "key12": "55PaxbtSjyGHp7sveu3mJbefJhHRJ9EWzWLbsphAGANJpFHXChb32yhXdxQUXn2qDrr12kiJGgnyjAvByec1BNqb",
  "key13": "4PqMPfRcVM9VBLQF6PQZqPKAFnH49WupZ72fmJZVr76sYAJLfLhbCaFQXHnvk3jwkjydPwyr7r94KbCQL83sEVJy",
  "key14": "CvmoUyqPfErsgbMB8QQuYQiTeRkFh3NPEMTXiBgKwrgZXDx9eTCWYkE4TBrSNjzmNw3FAKemzaKbBNipsynPkZ8",
  "key15": "25YrVENdZmwtAkuUK4YM7HguGtJzFTPLNxyiX9bYtkZVJ78o232kRcKBDGtZsKyUbob1am5eztg5ceYcmJQpamAP",
  "key16": "42VMJUt6ffdEaXZRhq57ZMZUM8KUYcWVR5HLBwGb5L3y3ExmXQpiG8ijeMxSonwR64HSqBfcTR7zjdFioHsAXZg6",
  "key17": "3MKXTsDEKq9ZCXy8TQvbTYHvsKEsCngwYW9aHQZXuqhBeCKY9Lx54TxQu1ANfKvvZNU1ytLzgK7D3r1SKQjgf8QC",
  "key18": "2ra9ME9w1RzpDeFfEVeSqLcy1nUBDmLV588BQLTw2UKA6atoszYAyYy4gzQu7jHgx8SY4G71tpKQVX7HcGnvfGRb",
  "key19": "3okdYUsTxA3Zh3ewP2QHdvCrSAEzus3NeuBWacFkVM1eBmNmyez2s3n8EUxFzN18V8HVmjY1vCJQrMTCJXFEDjg6",
  "key20": "pErpPk1MftinXEgR7poe8h4rmECHicauGY4FCGyBE5Ai9abND53RdfMfxqMdfYy6SWpuVLrNgSVRqvTKCFGXMkq",
  "key21": "4b1vXfDXWeikGJghZeGKEboCx4XhBmsKYv9NzbFUFnE38aCGhfk5HTtXbdoADZmUQkisZiZ29N5mkT4ayqPpP2gb",
  "key22": "2HLCsZqLXDZ5mdbWvdxV8d1gMGytcR18jk6W2Eo7VtbPeQk13r9PtrdkJxKtMZfGu4267mxrW4KjUEya4q25GtdP",
  "key23": "2oGo7NNbVNSPJaTMJ2q41254AJBkcxmPZo6Di7Bt7d2hYf35528ipW1B31U2GaczuwZWmro1W163VWVGJXRdWzuY",
  "key24": "2Bh5U616BuXHnHk3No16udKX3sMfeXyFHYAUr1QvN9rfPDArm819RvjQQQkhBgg7U4ZS7okPi8xMfE4UdZXgKyQ8",
  "key25": "nn1UBbg9SU83kGUMakgnUiQekfRcYdytzrqMt4zdjLJJnrxFMUV73fxNZi8KKhy7xzDnptHawrFrf4SbjxJbfQM",
  "key26": "4vsjdZB49GPUzKGuEiukmMBRcMzX1fPGKNvfBh7QEhWpKuK7Y7Sr5DxeK4gWerNzujgQSNojZ2r5QtwnwpMRH8iN",
  "key27": "2z23Q2MWxsLqNkFv1N2EyVigh9FHUu5JbXiiQaEAYisYjDWXwRUxJrQcCcpAmvFi3vts7YQJPHukmhUDqQRmiLFk",
  "key28": "5hx7obWMKaTiAPakHhAp51ej6VfQ3s1sMfymhwd3WpdPRsRQHn85ZQBmmAbXZ9KHsiS76vxuwA6XuDggXhiQcNXT",
  "key29": "5WACQ6Dv6w1UUa3LFwYQbmbPz8LEERo5krHaTr5xw2NQS9R1daLef6RZ59TbSkxawnhVoWSKzQt8u3LmBMRpFU1W",
  "key30": "5z3S25iyzbu6LPg7TqELJt9hoL4EDZKLSpsQWhAA5uGf5cnS4wnEf9sQe4pvqdXy9ATciSK6jaCSsTLE8LRerW8p",
  "key31": "2BQ652sfoUvjDSwLQmkgpUHPDYrkWDsGe4hCEXUrPubUgQqJjFfyVUkrbR25kyzSkZpiWedy2UeoMmX3JXmdtaSu",
  "key32": "3sEqJsGEHkx3ufoQhyvxDtFLJoHPH9ovwC6QZNz2omdjS42LzTtyR8Wrqcu5mSjGJjy8NdMV4559FpNg4SWdh8Rk",
  "key33": "3EZqzL3NjLBsGRdCQeeh1CBjPshZHsX9XLQ8PEJgcmjjgbRbAtqfojQG9R2oDd1e1goCUPPTUAaoxzZ6VTEHcTDq",
  "key34": "3vbjmG75rBd8xCobnh26VdRjHeNeWN73jx7e5GpLvVtJPk3KaQhLVKUpBWUkLD9ujzMub5XojHfMr5Dq62mYBeew",
  "key35": "5PHnDim725VHWQLCDJY8SPjKKt4UCssRFU6Q47rQscYBofzE1bJcpaTpS8QaTnURPdtXtLApBX2VcBcH92uPjW3s",
  "key36": "482zsFjqRGGZwno5oioqfguYhVXHZeS5ethtLCTv5GYEe6ewyoTdsscDoRfyURxvtTZqzh2pYLyNFNU4z9HtVr8g",
  "key37": "2jY5FMMJm21Scz2oUbwSGVpvnwt4ho2LeFvh8gqqFdSiAQgzcVv5LRJnY3qRhjcim9u6kffJW4Fsm5Kdy7wUzJuf",
  "key38": "46yLQQDcJk2NAgPNEEx7LH4bvXkey74iRXNPymFi7cymajQNSTdAU8EbyeCAEcfMt82nuSkSqT25wp1rbM5o9sqm",
  "key39": "2AaV9b6TiSymBXrbiYTFZgMF7KhvaXZyLduMX4EeRMQM4zG7v3XhZhGWR9e83bf84FcSVMPZRbaUojkavtEZqyXN",
  "key40": "5PojcFFSjetFZeFFzL7rnGrSpKK5VmFyrFvTcUMyG9sAS8JYeddkqzFoeVqzsMmX8itsX1ET51btgWGudtuk9kmm",
  "key41": "4cZpdf33GqAH65S7ux7KVnpzKoCcLEF4se91zGcyouEFknur7pZebGw29EpgiBVhuFMhN2gPStwzNLWbEg22SiMr",
  "key42": "5haAVBGr31dz2fBXb4YcvUma35gW6Wmy34nCPsnxpjbMZ7ZpbvDu3shhZKZ5HrBB8vbZhipzkneFbk88dhegzZBu",
  "key43": "4qeL6dLpZ36w9eHTEQqurN4bK4fEhxVjJT63ycq5vuen3EpbTW9Md3M6K81Zp5r6Ln66CqdMMHyUxQC6QTASBpvX",
  "key44": "2mJu35ehd8oZQBMnswdzL4pDGMp6WzE6GC82qHqfm5UJCeKA1LN5dUVuvyp42Cj9tHwS7sydPi6CxGiw3xYBrSdC",
  "key45": "3aCiakcG8xEFSHGX5pFU3RPqwektGmt4UaaEegxj5k1xVuXbr6GWE3uamujQj3pqdNX48kT9uzKjGkGv1LET2BVA",
  "key46": "MBrL9HjaSakabEtqKqaHzFgHSFeJaeTs7rQX5XedjwqmNi2FZQGXwWKk5j5uBsM1bPpjcZEGRjurecTchbdrzxa"
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
