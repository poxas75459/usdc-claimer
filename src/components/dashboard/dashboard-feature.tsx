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
    "5qUznRhUdXDbqXGxy7yf2KijVEvzr7MeyWhcnC8pxWms2A7m7Qv82gVbF8LRbVqnTrQgpde5kyq82viTAqa2uwgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1FeWNF2sVN7uB5RwUWTxj3vAwEyNLkSajuW7CPVT5Ze7xGBnUsbLWndgj1fqns9VvFWogSRBy3KoFGVVSd5JwP",
  "key1": "4VLkLYSLM694seAz1BzszycbEHsxvGn2KWvWkwrPTK7DghjNxv6usXDTKsF75EtpFbVkiABTnt4o1UEpgqpQWJuH",
  "key2": "2gyusmHvEMVY6ETMMquG1vDJ8cr7pNHL4UH8Rsg4GL7hEmYKGrKGqRLxWfetKioXs862hNHmQn7ChcuYUTWzghwf",
  "key3": "5fEhZKf8PC5HHsVQVNwn3zzcrTXQVGXVG9mtNZHrkSNCL5umSoMErvCBf4Lifj4XFmJEs9bdLvBUcuwPBQyr5uj",
  "key4": "4UmYCESSbB8BT7aVRZetvyCGWUmpf6SyxyZxeqE1hNuipkxXciZsCwxbVmi9tGsU3Bp6uXBX65Nmj8vYeLfrADqh",
  "key5": "3ynDBCBYxNQe38THQX6ikLxWkTGStAfx5VuxiiTmYs4ZVF6KW7zDT8wgVqK4yzo3Wrpj7RKGt2RQR8qzABTafZG9",
  "key6": "4khJFtNhkNa8Xp2fyCfd2849TfBDg1tgJ3SMJdCJns23vYGk9X3dkgEYKKmTG2SvScLrHxur7U68W1S9ekhFWGjh",
  "key7": "5p2mPHrSQ75P1zAAVEFv5wvUVWPUL4FvbVP9oSPhwLrYBVpGZnbARjDCwrTWp4V3qTaPMPAtYmpExe18ANG3C4s5",
  "key8": "3xFtWDBm5R1QKdoWEmwNcJqZjDGdhKRzyyz74yfKzYKbnD1n8HHgkLBNHMgPiAtWZEY6x66yU2bzjYwABacQWBYE",
  "key9": "5Ej3vXNi9znC4zv1tAsb3Ecv6NruejFPL8k2RhmBJCaqqr96K88KavnFUHGEGMLVdxFRyRTC8F1rTyfE4b4ur1B5",
  "key10": "5JiH7Zk235iZzDLY8Pia5k4Lks8hUVnVYfs6CnkGzbpvVD9vfSfWERDxJx6DXaFfENyEGvG2JdivddvrL9dLuUez",
  "key11": "4KLwUuykLx8RgYQEGSXi4e3n8gT4NTchXFYteFwNr6Q3vMAxJ8v2ywMdreyLCjAeVREQgDSri9cmibZ1U8xQVyn3",
  "key12": "4n5NEDkCLN2GmX4NxL1R7csbxMgkbzFr1PiXpc342jA1qvUqsAdFMFbh7FuizsDSWMJYBHVAyeyysSPndcUr9Y64",
  "key13": "FP2ey8rcdDWStVCYwG8UfLzDWRUVhFE3M1KDyqbaXrjnyEjKTYkYxqhnZdKadjdJqMEPKZsjXspwHTTkyfFDHK1",
  "key14": "64E6GHzbgZvtVTp4DHjpThTt6YHooXYoh1piMcpqmuzMfuX1adqoYDh9RrAvpdRTscni9jMXcj2HqFy6csbm9i4z",
  "key15": "34EbfwBEVbLJADoposnhBURLmkxCDQY9cNcZVM6CNzX5NVAe438pm4gAkB2dxz3uZJ2ajTKmMoqRSSknKjPncpr2",
  "key16": "3ZSHLcCPQ4qXeZtEk9FKppk52ovFfDwC6BGgBT6tonYSvnjQkoFxcWWP6QQyzDxKTtFHF6jkcqpG2zKBVgDbKLtJ",
  "key17": "2BAoCkqVmkrY7fiJDBzsZVafkZTrD1WP3mfFDCrhZLovb7amB2wLjnDBd2q9dedVtewRBbVjJticGoQUXtRYpNXr",
  "key18": "3rpntPniozNUZdF3a8xfs2N4zFH5ojPdQemYB5Eq84ThPp6NsMkMAqVhTEmykqwRw2crobZLDcA9nbiALfE9Cep1",
  "key19": "D5NeC8QQryMNxDtYaPryTuVoFF3CVQFMzvMNbJhE7YwRxsdiW4KU2NXrNVj13V9abACcB6yrxmxEUf24kvzFfFD",
  "key20": "2NCrwqbYhfR56R1wygdkbWH1QYfTbevx9EWp2gKLcmS6Nrg66qLPprQ4BGeUnaKqXxhXA1GTEjiBnJD1TdeYvi93",
  "key21": "2aLG7v9rAALLAaoF4xgV5q5wfh2md9K1Qv48APsr5Xkv2S3A1aMGwuGSH2pu7JXJgUyvgRG3LpPBnk4w39uSknYU",
  "key22": "4Hu3WtLDqyK6Mw8cF8BLAVvprzyuKCSb59WrZfk5q1mD8R1ZuG3yMGMBY8sCmMPZgvWdTs5StKvoxRUadSTMtp7R",
  "key23": "5znGbBPgiLoqbNvvwRJnqYmhtTx9dJd364A4jRQPQ4S8Nw6buCq3cJNdd4yQ4U72fqVemDsFemvD7rX8B13g7BBp",
  "key24": "4BUW4dRB8stMLRcZq4AFzPkyMSawZA9K7T6txSySmWksTH8cLg6Y7DvCCLJnmd1S6PZEexgJEmFvjmDYQtMGnW42",
  "key25": "uXs5GUy5j4JxjFaEmtL75HKYPQdSuoGUUPAvRdR1NipD1fmjsD21VSBbGEmZzTJqUjRb6zLSCvHzn9Eyojg53dv",
  "key26": "3uexHDDyD5e59XFQVScJmTCLSRZ1btV8xe47rHoossZyhesS8XwQb189Us7vSNSzQmfGoHJy9AkadLuQvj3jFwV1",
  "key27": "4gCAw1tQSA3p2wgsHKZ9qoUuTcEFiUWVBao1PU9PFKfhj4G884tzLoUmTBxgGUNALWwYYbohxwVdJPf542TN6W33",
  "key28": "128DCixFUJRpB6vYJ4SbNqTWAUy2VFwagnjVx8b8VMtY5VsMmTG4AmaumTuB6GAypNBXaySHCb4vguphkWFLVVV3",
  "key29": "42iBWpRx163wjG5knb1ZZB8gtPiHmCPXjxzHNbf2iUWnZHtXS7QkC4yFt7zSXZ5f4Wnb921i3akciNY4sdnKgywh",
  "key30": "4t79HFM8VQmv8cnuqcYCADJsQg9kP8eYHk3pbvW9W2U4JXBCeYYp2a4RCijxKzfqKc8E4t3FfyMxTWQYL8YA5Y23",
  "key31": "5qDuZDpjK53wdHcso4my8waz72zXZ4ZYGiox5qjoiMQbhX2Q6wMpz9ghNA6iAbsJy2eyacf7FG3vhVGtbxsGqffU",
  "key32": "CAXAAaztyhN4h8hQjJR8nuoAdkQwKyTFKSERHCCUK1ywpLqU8rAnAfQLuvZ3vYE1xJgosMh37uUcG4W62BXEK8o",
  "key33": "2TD4yxrKjcRiy2Hripitii81fZwGEVoKcrMSU8kcbArBoTRRi18Zy2XoFgPJfpTnVpX7YiryHTyzhXAmbuRFpQED",
  "key34": "5EJiczaypC6ryGECB1xTHuXauBccowGDphhQXr9zjqdiBbStMJfjPM6R6hCPeogDSEGnWy9iArJ2qgHjrBG9hbLe",
  "key35": "5B7HUdUWbj7nKqU7GdjmwHY9pfMjuC72WCU1eBVCAFCG9FUjXLtiXCHSWTaoRSMjr7ZANgghw3kUU1QyTRo3qfU8",
  "key36": "5WpdyXT4a5L4baPXSwMZGkYPrhFDzroLv9yiRsGWqaxXrosgKHn9gNeERKawE22HRPEfv7YcGhbJYYZE7EUSgCvD",
  "key37": "H2EWTpExML5bgju7z7voAzSQPaDkVDZ4kcdMhK1woHKGNYbfcm9vLgbrCy17UmJ8tDmctTHn8FBJMAzir2xdags"
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
