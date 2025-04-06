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
    "7BPvi1HTsu5fx4afFYpewbvRJ39vZqfzNJsY62WnnK1PD4toW7kxUfZthTYWVuYQ97cyDwCUcyn8woQMVcTDDjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4of5UsbK6rnnd3p3dNyoyFjRAdT4DsFTuQjsLvjseBJChYUnSCYNREYGK95bbrPwdafhMFm8ypot9TNL3LUnXTmy",
  "key1": "2vVtq9ZGicu3wyEQsMpyLpX89TR7WEk8qeJm5QFULWAg9ZUe77jGvWYTGm1xUEem3jcThKaHRwnbcMxKmobwYrQF",
  "key2": "34T7YPBwuhtV7vsCymVkLBA2AUhTMi1C3oKewgcHd9GaHHG1AhUMweuwrNYLP1cGPUJ9e5Qr1Z5TLTbanyjX34SW",
  "key3": "5WjSVFnGSaBAGUjZwmQsvjp2rg5RA5oYV8zVKzDrDHc5z1uKE2qsj55xrTzGrso89gpZiTVAM4q6Kf1WDvcokTCq",
  "key4": "5Dc2eaay4nqcGH9rdQsN3Gsa9iyRiN5TyDjryeADceFuLM2nzgnfYzMDXiYDMf5DMGV68TddKNaEUerz3kNZVMTT",
  "key5": "3kXECbMLdkin8zsPe3aeAqvPGVf257u3EFxxtF2CmcWHPWFBrLUrzctFbQxcgyo18nGqorTiocYZgTAzymgfKGMv",
  "key6": "3f9NFrUhpgxsibrBJAYztG165j7vb4dLbPBwZTMnFsXNn7Lx69LW7mKWBvCAKbFxgR8LERAAcxveWmMnL8QyYFsQ",
  "key7": "AjNdyLRdfK4mTqFy5YEggb71J9JJqbwqwyNcAtnFcpBpAb6XjSY8VTVPAD9m19FJqd4GJptp7JKKhfxakdLXJ6t",
  "key8": "2RWfjjk7YaHJpzVNtX6AUmpWfFmHJf6CJfmpjt5Uh4AWSVQpmVKxorCNnEPpJcVmgGnnucAxZ9M6p4LRWzk9gAo",
  "key9": "3YXrGZyaiUDbVTT8XYTXDm1haxGj2vNL6iBkc3XaUgnSKCPK9YVLsNg1R8dBh38aqaBrveVWucVorFHnReVK8kxX",
  "key10": "62L1QLpzctdwNMy6bjLv954RWdcL3cKjamfVF9DeYEk29dK2yyhoAdQib5cRxckHnmmszgQ96W72q3eSuSGiBV5e",
  "key11": "62ebtb2FQxU8wQnWdA7uDYhnZ32KnCSGbKsPCyGUPRsujKsRF81byg9tzdGmjJHkrX5WSwZvhte9WCbgxMGVRtYf",
  "key12": "36NQKASX8hxjfSfxbVTQKEdv8dP7kSkKMyMTS6y3R3fXeZRVvzSX92BCMKmAM3CHZzyr9ufZ99vHknAKiUYaEvbL",
  "key13": "5WhrBB7joFJ7zN3SCT3EzAK3Por8p7LNm6fZ6R1YGjZso2LKQiYZtB2TPCGVqbMXNRBVd9B3RKGEAowfFdDhScg9",
  "key14": "35KL4Bg1je2nZgDajy19Vu3Tw6xwBwKj1jQqHnE5J1badXLZ1U6WL141yEHYr2KhwSptGRBZL31tRfb8mL7dtE53",
  "key15": "kggisXaaSHhb6FD7bLdHDU2eHsPZnKWUEP1jkgQmxq4FtG7HZHSpb5EB2xvTzr55DjQWCqaE8EASdPqv3nQSuuw",
  "key16": "42BBrzTqHgb3N6oagwvKMuzLJhjAfCb55tyfYukgarj9j8oifLyw4XYhAusUu7shu35TSLzuythjiAAsi4wth8iA",
  "key17": "2JJfqnbtmDCqjSUrwHKbGU1unXuotBarne8HQsPdQQFfkanvt9SvG1L6FXFfQXxjDXQapj4UZAQaoVRUPr9icRPF",
  "key18": "5XCeEqr36D5kBt2VAocqP1RNuQ6NXNhwwT9XCJSAnYcYs574d2cCmu79fXiB8Vq5E6YDk4JESeFu9GQ2z7X6kziw",
  "key19": "j2pHEmiwQJQWwRSaqgquh5VjNKW5MUqNt3rgLa6eBfqW5nMMzcjYUaN6mUetboCzYUjRjesBrLzXQHMhahAf6Bx",
  "key20": "5ULNWd7gHB5KP67L9oLUeLhUXgcUQRUdc75VXAH1ZFdBQ848XdiDaCsLKji2pp8kAGddeng4KyuuctbcWDQbLN21",
  "key21": "362yLDhsmVDr8xqitWswpDy4TDRDFT4nDydXtoYeDWGT9ZEgkCi886x6aMViB6gM7gZ3dCHoEn8zHAdEA9xpv8kZ",
  "key22": "5CxEiAdAXPaotvP7tNBCub2gEujngZtXgDLXTd4mPBB4tFwZ4HNermdFo81CTJjr66SDD8r5FDopMZtN48rKHS7T",
  "key23": "62Rghh6RDWwLKoubZvtsuX1r9jixw6u4kvGtk8FemkjmahUYvjUtQCgmpwMFwUdyin6oaRpEW3yD74zdqstoQSsE",
  "key24": "wZoMDJAZgMU1o3JPyATvCo5GYvkA2sCcS7YoxSxpCPDbLpeHNnZWVRp2z8wmciuNzHjyTtgiYZnuYKY14QZ9Z6v",
  "key25": "3MPt1vCXG1EfVumR5bFLic3i5cdQwtVG6w4E4GNZE3q1GmbP6Safyso6YS24W8nX3zNdw19WNaXyJG8Rdue2cfub",
  "key26": "4LkCcZ5am4JrosR47TUZ9vYRNsJijj8ktfikrCbpG2P3aViCdH24STPiVHYniMsZmp6PWLs6d1EZ6zbrVhu6CCSa",
  "key27": "x4gqvddxKwMSqQRMNrvehggnV4158zsPqgjVZD7fWxeSibr9ATossDscu6ja3L1soNTzWpxE6skPWTpakMv4wFe",
  "key28": "mYi5guMvn5QLYeoC5b2n7igyAe8bpBChCQ6jqNMzAu4kL9DTUSzE5Y7qEyPwCR8J38ujmkCYxbUm9brHaCU4PiW",
  "key29": "5KaowWbjpsKjrsRPXrLAh98SEQFyXNvBUYk1eQCDgXmZ4UfyESPqmeBh8kBzp5wZwznfj4MoTG4LdA3DAiC89xTs",
  "key30": "y6h33YxFy31ARNnP5TVob3XQA2R7RyeSRu7y2ao54yeaudB2Lb2jGumspBqJwGnzZGnvrXp3UcYWme85HzCiXZT",
  "key31": "5u5QyaQxCg3DmSDC2cwzizfSTBRYMzA4gFhPwGGnrGHFimJUzHq2VfKuKidEsbwUzNZTV82uzKHESejqbK3obsUi",
  "key32": "3R16rCw91uBb5sWHif73nq8t3poHDyWpXK1BxMJ99Dgd83yCV25sar2B2gHRQG4RpJB2ofLtLtR9jDe3sKehGC51",
  "key33": "3Yumfs5MWYLVW8N8cy4VMBj2Vg2P4wbf8rRMjwjJxbBdPS5vW8oijqo9fS7xwjunamN2EUqE2x1RfBRwjsLr9W7N"
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
