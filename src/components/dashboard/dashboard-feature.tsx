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
    "3bKZBenVW98Cj9KhsZiFbYZT3L7RghjdNBkJ8MX1oUfKf6gCYcDdZ7enXkBhwBXxuE5MmGERVuKMvjq8JPjg6i25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5XAJG8C6DA9bBGeRdapSaxe66xeZKYXss7V7e3J8QTp2qsqDBzSz44cUpvmxtPGCNCYz2AYe6rXL2W12McFY1k",
  "key1": "JM6AtMML8Ph1ZHZ7No3uXamEBhJhJHoiSpuYcbLsddUVaWoXQHxbSJvjMToRqtDdp9vCGF5BRZ3TrHLPCYsNU1u",
  "key2": "4cH9cijmg6AZm3VEeTSLYtTTyKX5CzPZXXajX4zmqm61ZRPzw7xN5a1bLsKaERrn5hjjeTwJLuq6GpMrJdWpHSYk",
  "key3": "kSivdbi6AcdxLxrfUi7RwStiHqUaBx9FaDAmXnkXGHrFURZNtarh8jTQuj2r1hxVpxuW8vgmtAEyTbdVWYmwpXu",
  "key4": "4z4F14pEQr3MNTExXLbkMwjwpXumtYtjudQn88hZwXEU4wNGnLod4iGJJtgADB4qicQVviEyH9rg3gpJLyAQXccb",
  "key5": "TGqvKikxB5RB6mYrFbspRTRZqjfy8GBmfPRK4fk7vdgp1NTpMeSBXE2ECLbT7txjuafHC2nNCgCbctKpGppNARW",
  "key6": "4ogWxQM84RfpoV1EFNYKWVZBdviiKFgPdFaAAVjUmaSET9av1y4xU5Mk1A39ECkBcJ3aEvUGmjkBGeE71NZ1XxKs",
  "key7": "24oQ3jz2BmAXWMnWV5qSXvphcGQ59UP6FRq1kp6BQSJU6oTYFep8HYJ2WQWWqezo792o1fP9XxzqHFdvUpnuD54A",
  "key8": "SD6yVt21zogNVd73pKokBqsJCzQuX3TnJfS8373rDvM1uUARZkpR5JTPfFYyfoYHweNvcgFsRvPVMhHE2mFHb7F",
  "key9": "p5E6iCC3tMFJoijQuWFMHxgVnENZDwammwv7z8tfnZag99vGbv4HwgD5PLiTUtVovHazzdd172CGrNKxJqfWq7R",
  "key10": "544AFyzACz9BdNjU5zhdi73C2b87wvU5jJRPyeF6NqrJtFuFh7tH7rx5JHyjy6hgo5C9YLEEH2iMJhPqmfpUfA7M",
  "key11": "3DrwP12AeAGUaunLUxDUMUKHqGzswtd6nut2p882ufxZYP8s7ncaBshM13fzXnbSJP4xj2rC4gSFF3h58RoKAqk1",
  "key12": "4QxV4iV3QVt3Lhmkqm82EtkAGw5W87YruTp9AgvxFjyeuxYCoXGFuAQFEN72G35tiNYbRbH17eAD4o3M63hyx4ot",
  "key13": "3i4bEMfRHH7by8DsczbvouasWC62UwdHfNoZqe4Piyjza8tEezbYeRhrS65KvjB1SVPbmJ8Sqmcpx6wW8bvzoxMM",
  "key14": "3KyQJRr7fPXL2bwZVv1QMBkVdSZB1tAHNmR1jkuthNFdCkdBU8bXDYbYjZeo5CoEnQRrgAnQ2BAUFP76fdmS7MMQ",
  "key15": "5BmGedMa1xCGKLUnPfvjGUvRjAkN8wYc9j9PHFUxCm4HFc1fzUygpYrKvLYyCyhLit7eSUpst2gshD62fFKvNieZ",
  "key16": "3gV8u71U6rwRe8UqtYWhbLHzCZhg88ZQEZQvzwKTgxBMBqa48c5ybRSJQtcLFx8dfjJgwiLC2SnbSAvbGSFZNjrX",
  "key17": "3kf9AuxnNjYHaDKB1vexKBR3RgoyZp7PjBGggbeJ5Rt2pKvN619ykffPTDhFX79oT5gxLaJNWgwtjs2amQmToZXu",
  "key18": "FgPew5dU4JzE77VLHWgBeprWVJEsFxDAHmzSQMHKrCWjYBfbmn46MVAyefQwmSuafXVLQjmDCBqoDbD1S5Z2BCA",
  "key19": "s386uFfT1PDUaAn6KF79YyRX7LTm4JpeWF5dVpNYrmjyZfk7cm3hMWqDgf1QxwKP38CXRbAXchqxKRJtGx5oQGF",
  "key20": "3R5XHuRVk5WPA3xy4yzLChekz79GCJCbQCFkuUFt6souNqBTyTiZeyPQQzJpW5z8AieyMnanYpagbHA73RPMYv72",
  "key21": "646vzbr7T9Ft4M7hKGGM5GvtkvRxGbNRNSQgEsyEXY1aHP6AYQ2NXnChT8DjKgwXim2sXPPCC9Jdq1znhVjYTWjo",
  "key22": "2krFrXJt6kEVD6Y1zsCJ1RXsxWUC4oGApb7oSRh9KybujD5DsLJzjM6ebkcZFz8kbQXGTYfcPP6y53TWKfANZ2xb",
  "key23": "4QBwucD1x9zATSDGybEMahUacUef3BSCLGuJWDC6igieUxAcR1XDMSEcyAAXibr1pveeum5GRA9JdZnEcyY9pEei",
  "key24": "3o4kG23Eur4KaNPfLFQ3sXRGtDoWTiG8WFSrLqkKaSVHanBvQE3XYBk82KBLGRXzfEV8gbGW261XxveGUZubswuA",
  "key25": "3sRi6DzuN7tofm2xBL9F2d3t5ACyDr5RAMbJPZvPADZqTfezFCCs9YB7c38jko4TeDd6UwNtjhhDpxqF49fCgCz2",
  "key26": "3rfCAkMMcLfLimDbddhGE6uaB21pnkAypnT1SB36Q8AycSjo2xYcqe4bNRudeahsEEdtBCvhz7EDvVa3CHAhJZZg",
  "key27": "3jQkzmn4JQ3jHyY3jBQKvTjrKFMkWU3ZoaHW1EG5A2S6VxAjBgv972Y2Qk7RibFGn69p5FjyhiHNpzRsibez9WMi",
  "key28": "4cyXa7VEXcXJSxwHNyCxiUjymCS7yAjouS5wGHL6pGbhXithhdFetX3283VtsYHbcdiwYB3N94pNHcBJun4AG1Fu",
  "key29": "4nWWNfhwcFP9FNzwTrSMS27sFtc5m6NVy7KvwC712ZEjE1AXQKzomPpjuVJMgA5ASnZrCyWZnQWaXNXnUNbdEMgs",
  "key30": "56NdrkR5pC1w7hoQRDhzNmV8UTKN6RobFLDXigao43jvrX7AavyrSPwHq3vtB9DMqiqfG5sA1WtRw93XXwXvTwZb",
  "key31": "mZbaG3LuNGqRTGa2JnkqWrfPecTifTHH2sQyH7H15VkMVkijYiFuQZcThj2AfEU1t4iPVesMougjS6jzQ6HJnrH",
  "key32": "38edtBhXYEAs5WeQH8eeZisELrcVQgFnpipFLkMcm4WKo9iHCLUmhJ9A88nhvuRv7ruGDWuFQEUmVG5FB3oV4ksT",
  "key33": "2JEQozPfxF6pQiJzqNQGYP2R6CfnGVKMLPHAks5GTufMYDebqXnoNdVAUsXy4Wfpf9zCoKdmjX6Cn6oJxZ6uit9k",
  "key34": "Zys44CCHnRvxvHW5gMDEi93dhJavbfUoaEVsbCg1P9uneLVfLDzLj4ZwV16qYx9NgcU3E54pHdm8TP6XU2mc3AT",
  "key35": "FdeZKKuAzbtXyPjaSpi4BmagzTVvEsBQt64K8og8vrFGPhNktianh8Py9EqJ8ZAc9UEyzniADomSbxY5bz59xcL",
  "key36": "2WNtuB2jiRKDrmtiFq3eA8tfL65U17Y6A76kQCd9i3JRY3iEzNt5Fa92naiD7wppcEH4PiKM4Ltz7zM8ajgAJUkH",
  "key37": "2N6rD8mDUH4JxDiveQEjpFcPY1PdMowrmYqHCrCff3MhavyiTqRxGV1FQTbvd2zW1A4kCUJCK3WxCHzWqwtTRmif",
  "key38": "4mRbTgMn2UkqXLz4oGsu466xAsuXwzSMPLGwtvq3ncUU8rd6CFE6nziiJLENnA4tukgomzriLximfSoEFHS7HsyT",
  "key39": "3HnCn6qDe3VF5PfgBo5jk5N3dmYpc9LAoR7GVR8PCZt2qwSMfYF5hf1Y8qpHidvP3vGKbfzUqYt2e9yD5UG47VCF",
  "key40": "3JNhAGdvBsEXnHUKVcLBCPkQ2FCyUPDw9AYx6oKkY2CzuVG4wKizJ5ahsKhAuAhy4nWFsXzp1rQhNBwAoT6NHBLe"
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
