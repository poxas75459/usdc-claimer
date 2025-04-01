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
    "1xG8znWmuLiFccrcaUf6ZmLhSmsupJ7YVoksUaRMcDqGWpok3TK8KV3oibML58czoFDrgMPfcvtysu4d4hLg2sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sr6yLe4u7Px74oSQwZznyPqF6kAfffviwG2RWFTAah53h5g8eaZQhAoeoQDz3FpMvHnPNTZ8wAyk4PC95Sg4ZCX",
  "key1": "62SXWfMiNWWnekH2SAJmE8zv8v8zcXuJtULQhAz5T9pjbZCy7nFdpwimQbsk6Sbs8DHBWqHCjQKs8uoLYAMpL66f",
  "key2": "2suk9TFxgC6L1rdhGhW5WVPc9KbPU7ofHuhCTbShKvVF9UxswteKUDfHaBiWsPktKHySHQz4eBcqJ1rt7AvrR2bg",
  "key3": "5RmjDictYaG2rrJnKWeA1uxZxnxnCno4KYUBTvnbPjqVfsvQHEpbks8jXHxMmNQ3z17mDHJrYS1TknaUA5ZSD6QF",
  "key4": "5hzek13HqNzaANrPbK1fW6SuFYeJGyFqvSnz66ghjPFfMD3pB6BLKCNBM5hDxuWWXRBdHbRDsP3m469ew3Z9PrbB",
  "key5": "4Z8QCZtEu1D58Nm5WUgXGT2WNnCMVaZe28HFH9H4cdHg6Mc7cuiNpJK1SkrCnKg6woKdzvzvimvmqokkJZ9s9L7n",
  "key6": "2gSLCCjT3iaTrojmG8aZFtFpSvfmLw3PiCFgaCkBTvAs9Fgzesn8kxQRmqCg7i2s2N8UR6QwrtjGwpD7TrbTiAWa",
  "key7": "neFRWC6SFcanJcV8zQPnDjk4MhGYZqxagBvKfhmNxPRg7AiiLWRg7CcsoUWsgZdWF5e2AbYKX8svAJgv35RJSV6",
  "key8": "59RL95FJmoSNaC3p7svKem1FFG9pa4RYcy1Rc8FhnqMUfwSUamaG8Pa5vEM5tmtKW7YV4BmydPap7oGtbLg5Rgpt",
  "key9": "42rNFX6vsDPS6pu3rVemPvUCbCb7vRjxodawqFTRRGujaTpHH9qnCrVPdmjwR8bsH64Uo7kkkhH8h4qATXE9Emhn",
  "key10": "49DPzmipcJvB2hJwYq2ZrUKrBfXbK4fGbd5zevZFkAJA3dBfnmQNnin2emfFbdZh3TNmCE8myzQypamqnMuqKFo1",
  "key11": "4eCwktK8XoMcsjza4Xix5HGfPkC9DT5s9oxgiLdboS8Rq4K5NeVYdjdtbGFHi175mR712Emfj68erxm1dXhvWCwF",
  "key12": "2BD6KqiN3kz7C9vmFXbmm9VPo4t6kQwyfxyRozzHhaTovV9z57s91SHupBYd1nJC5NYGSePdYNs3PMHtyvYS883K",
  "key13": "432QACY97eyhcZPwAgd6d14d2zmgW3ASTpLbGKzxZYauJcqW4skagnGy6ahE5cgYVNCohD9NA3oT2jkmdFKekWxP",
  "key14": "4QyBAMFijJ3Wkt9sKdAHCTBYMZFLsfKcqUvmN8q1eyzjT65Q7RXRXx4mSu4pWUDKvzjsvLTUArMUuooyUCzTqfU7",
  "key15": "5XhiYTxBB3p1JJaqvfdYsxbh8s8LzV36UaGSoVQcdeHNhhM9pXphDWJs8j7o5931yqe7FCBwbQDHooSUfNDVqJ8M",
  "key16": "4fnv1PEyqDV9kysgrntVBPRBHQALWfASoJ5u3Wv29t88JRkwaVHnuYbxRNkNZnGW6EzUkxyDkGWgGBj7mV2La7ch",
  "key17": "2SekfMfjmYoCMV4C8csV8RDnZsLN722yVK1RTRwaHceyv8sgVcd1rnPYX8Yo3GKW8SVAdLgfX84Dpy66QxerSzxP",
  "key18": "4dBLjDHeB7mhWgVnswcBPB8Xoe22QcGeqLLTXT4Gb1KbSzoqGTu1vVwLwvNKvfksm2JygzQM4GXNfrzumtbVfSov",
  "key19": "5jKqxHyzSaDKw7hMvF1mcmphedbudYd9822SRAMPJgvpR4zQYXWc6SHxfdyn2hApCMAA4He1jpPwqkMJrCdzfKeZ",
  "key20": "JAm3gGWb2Bkzos9Ncs2orkXS3PCP9EqTyjacMragYybNiKrLSjoUBKpCxJqmmoGipZUfriK7JcAwoBpEtgFD4SF",
  "key21": "2ZmNSTkFfokeZcPFHM1tD24BdxGDHUfQwFgREaAXeYihobRER9qreUMHX7HZBBSYbfJBQvrYSghWiEiJiWYeyPEq",
  "key22": "2KTSpeDMS1Fy8vuT5xrCm2eKf6j7WiaBjH7SJH2hKHKYszKwQUNgfX47GoZHysMP5zgbQkb6jwNScUQx35NBwHHF",
  "key23": "3cbd92oxewvq7HMAbKsKAfHqRS3BYwYDA5VqanF7LH2oayBxnm2MeEWfVQw1Wak9in7WTHHu2Pyx1yRbQR8rnyRH",
  "key24": "2tvn3SfFTmMQdC12pBWQkvcG2yujUdYzTdT5iDGFGMqHeXyvMfPsJ98t1Zp81cCmQp3RBF2u88XkMeveiz3Ps4r7",
  "key25": "3U1xzjKWUXo9mXkupAjd7Y1wxC4kq527ds6zWCTkvZWhPc9KXnd4d9avjroXYn4GXgs3DJRx7pBQi6LQZBijVYgf",
  "key26": "4CyDhdsJVqrp19CB24g6bGaqY3evfXtCrmXUQaThtwmJZuaraxTa7c1cWuQCUNtk7YpQXGsjfUySRFMRwZ4R4Tf7",
  "key27": "4iZFJZsTKQxrzeYmtLb7giDTv3a57rDFtw4z5kxHDvj8aKV1PfMKYSzdsqshPcvDoXQHXLKjB85PnSR9AcgjNKJJ",
  "key28": "2Gskyusgb9T5sRRtAkLkZ5iCpR9M1W1bGW2B3Ay23iUqeLx7CQHMtT2aqxaNeTXL8SRRjRSNMXTPKq7JhGfr7ss7",
  "key29": "tHaU3wetq1G35sAkPbyiNETwj6yd9yPrp14ARprRcxxc8SuyYL1on2GwQiY2xx2Uz5QosGjchgUBCd8Bn1cJHm8",
  "key30": "XKeKGmsNUxJXkA1L16NmnCRftrzRwhWbzgHaR8iEH6LYE4PvhQWcrPaQw22GmDWQwTU83EBAAtoNKEKTCENphXa",
  "key31": "zYvQfmqDs4umCmYiyowTQoUToNxku3fTBc7t8H85CXZPZ6ZWNM8rqDXDo82j6Ex9RmSwpG3WtNSe7gSyL32G3fb",
  "key32": "jc6X9uNHxFrkL7Dq5kpqo7UtC8A8wf9hmvpAs3LvEMzz3ijt37qmzMfUg4CowqvzGhBwvwJk3LBSsKZuGnDQcjw",
  "key33": "7H5tL9tjefse7rVs9cv3MuxM6oae6774TX9ve8uXfHtmJ6cNocCXJ9zYMKrp1SaffUJxhapq1egKcbTCWhQzJKb",
  "key34": "zvboYq7ANamrYNNRAP7ctZRigqPeg4vQbM2kamVZedUMvyJkRihKvsFWSNMqYJYzRQSncqbsgSJwnu8MrPBDSk8",
  "key35": "5L55NzvcDQQYpd1eFZAuAYYATWVQziZaASSv1mSaeRNVvZmkVZCaRkE1mRFYLYRKn6mFNyhvSF58kotTxAj48hU7"
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
