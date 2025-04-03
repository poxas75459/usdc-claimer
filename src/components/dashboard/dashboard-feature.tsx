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
    "4KPHtwSMWHCo7UCqogL7fzFVSCaYqjE81Rq2LSUsbvHyD8wuntYF1drbsQGJYKFmysDvZ4CfhoNaqUgP4F7nhk3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCAVfuMQ8R3cKaQr8xwYeETbyNTZQquRUepbGVJMcM5TUxraaWpbMcYaa3SjkSwBJjhMBDhjNuAHAEgjdtca3Bd",
  "key1": "2yy4mBq6ozvspT2L2ow8CbqoZUWHbFy5KnwhyiUEWFsXbqHag78vvTxy7N8ffnrfgDcRbQFNQdovgkg8iHkjxCQy",
  "key2": "ceRtmCZQAqefX5N5SL2SSCEX2jMNUg7YU7MPmZbttfeN4gvodjYQzzUscox31gPUPddDJtKhrJihnFfoDfT8Jqd",
  "key3": "4ZzebsgjN1x4gtSoNamFpJ4AXTnxJJb1oLWKwy28q6nPSC1NobfhSxG7YET7TLXFC5LbekRfvFtDSovN2prmo9aH",
  "key4": "36P2hJLtTD2AkhdhSKhKt138jZ74YzvX3kY3iAREHH45o6fconGunvDuJWDFHDD3WLTU6VnoBqRiApHRohpEuFT3",
  "key5": "4yPf16LrsgoLmfZXGVb2zBhH9SDwTZz3rxbcu4mc8Hf8da4rMfvirHQNDyAzMx4cR6q5EP6cYddUNjHb8rH7q4ZK",
  "key6": "5gJvLELtSd6BqRTt5NWym9fnQQkb5FZtoyACkMzJ1fuJ7cwmt3LDKrrp5GUsDGqYCTj3h6SM9bTTBBvYTNDV3yQw",
  "key7": "3RDwcnVoSYvGMBaJ9eEYDDZF9oZNrqvdX35V4hYNaEL1oaxFnu1ubb8QE11a8aBQXG4h5z16kMfS7mTTTUoxibVJ",
  "key8": "3AYD4uszLkRkwU1pQMW3oFi26Zd3ZNiBWiS7dcLt7DwqfnWnfgcqWn72dPxUoth5EksP6Jgqenpz6QhoqQ6kV9zD",
  "key9": "3bFpEcp5uhfp1XZJq8DgVdUn6JTdtzW742VXqmbLxnMRenp82CGW2hdmsYjCnuMgWysHXyvi1TtT7aJGDu4PNRgj",
  "key10": "5qk9a5V7UXD5axrKErawWKALWib9sG2N6jjUTuWK2SKUziykz5PpvtSkzAjcHCGyxkit88NBivgDRLaTP9yqe2u3",
  "key11": "4AN4MVPh3cBUaABGUzUf8cRV9o8QZ8Gt8Yx7Vox7y1cFWTMR4gcgatneba5ukAMYaRMaFr3h7bujLAnPV83NnQXz",
  "key12": "5ygkwZZP4trx3gkZUW4GBSm6i1B7BaQUrsAhaShYurcLNmjy4WRx3o8K1Ueabyius1f5vZ5tWVF8FJkLZ4hwZHdc",
  "key13": "5ovyuMCCTbqcJsxguhGM5ShVgwDvz43xpcwKucJpNKoh91gC6g731n5WfLJLWqQHufPHa5dDKJdxAg6UEvsvYHi6",
  "key14": "4TazxbhQJsQyq2PVnyGN1RNdf8tmkRkQXL6uBTdyAiGnzC72VS7Y5EehXUpsH7FtNA3vCe3w3TwQfHeZMj1CNvuT",
  "key15": "fNXS5MJSe3s4vbxU9H6ZzZmmHv8q973uYXLi9b4ffWEyks92V3SoAS4e9yZdyzAWnDh4TkCdcNLBMGztFpHA5KB",
  "key16": "3qY4w2U3N33xY3TjStvTivFnfaBtx6gnyzwpBrvwfqpqGyQu2fqxjNvKyWLKe8eA4B6Bdw5PZC122rTjX8tC5i9b",
  "key17": "5ans1qsHgcyDNJhWRexZyah7FCiVZQJNfbpDJLuzWgoTHrb8419KsT8VKxzsZG4con9VsTnXxFxEfyGuq5ubfswG",
  "key18": "eiyTQPu9FVZ8B1RWd7CpXBNSV6yTtrJvm2QRnzfwHwyVWMpbMKfF9SosT92rwu7Nr8iL6FKC9tB9xN932iZwktx",
  "key19": "5DVK1CRW9HfLs77Z7ScgYfgdWwT9jQ7DcV8oMMubkQ7TqiPvuzYj3nVrymp9spJBRXmiaq8vhqY3vur3t5mheuUZ",
  "key20": "2yQtTULAVDxcx5uckuDfELs6pUVtY9L9qXYDGGdf9qjyVTfW16YAyKoNP9ZEZ8cjYbk7t4JgLVrXQmCsixfc2NcD",
  "key21": "3BZm1C6V7NaQXYjsxwsjRSSbC7Bzv1PJDUbGeQhQGg4HmvQrEmZcjRZRDPTWYCeqNdSPURZdBLwAehMEbgJehFKh",
  "key22": "54BrWcwMYC5Jp4az15G6K6DNSqM2YJ7UJQjxMpSwQMpXJE5FGV3wmgAxWYPvWdSQ5x2EYJTwfDQ6YCxYyqEfPAc8",
  "key23": "26P527MiXr7qMYPqSndvEDnebRavMi31AEGWJpDHjVFkkyKqxrDqHsG1CR4SNRwttjyFgMPvj6gQTxifcovpS6Nv",
  "key24": "5iCfyXJc62ApepdUaTC42nHzLcYPDecjypu8w1n2egTfUKyQPG88hRk7qjwVtnNcR3JjeswcHo4VgPvXDrfjunu2",
  "key25": "4eNNkcvRGjXEUPv5p5gFFe2aWUMtP7Aki3FaneisF9QQngSM89TCRp1bc68X1DRXXAiAzj5bG4yyaNJA7EkBPnfZ",
  "key26": "HykSUZvTDgtqLqZzd26cZ8oCNR2cb7KcWYhim77BaFTPvsCspSSpYy3GDgcqFTZCKHC8p8XuW7kMrsWDJvCmHoV",
  "key27": "qXHQhSBFn6pPBDhxLKwDJJb444BRnTwKqCKJ7WUU8rCgtdqWWNDVWHpu3TPuqvqi72dunL3ZdLC9sUUBDByBJ3t",
  "key28": "5p9nAFm6nd5idT8admAZjpfKnTmFUsNkxqid6RBMDSwWNrAvhUaHz2AkH2hW2jKjwHtcG7CzS8dbZyQgehJTZaTh",
  "key29": "5ERGAQupjBRa1TrDjPDUJcsjsh8dU7vyb1CHakxfnxYprPXfCq9eUzu1HnURvo2fvsUtosYQ7Gyzmidyi9jwSSm6",
  "key30": "Eyd1HDRkxg5Ah2dUJC7aETtURwscmBJ5E73MhpwsRuMWcfTs1Emyjw4xsFACT7yWV5Yt65qsJ9UeMkFUdUfdZDa",
  "key31": "5KLHz4v7AbHZE8fbBGNtfKiL9AvgoTQQTGK4SfG93GioSL7a6fg7nUM1foZJU59kHFYewmmhjBJryukQaxrbkQm5",
  "key32": "2593yPwaR5XCKxW6isva2i71Cwnfq5y7wtSMX3jYYy3P81Fj535FaN9jPrgqiNip8MCBFrBZ4u2FTR9XhNicaQJn",
  "key33": "2wdNFtd62AXY4o6RQcSTx54wpXws39Vfo8w9MpJK3EU7V8nXdzEkEN6WNLnyjRiU8p1HrpXTG8fyXMhW59GtUeE9",
  "key34": "5a35UURDnbPgpKf6yjYNm1m6diB3JaB85n2L21Dbs5LpkB5RyGthrPBimixLfdEVBWw6f24HZ3FgrzgoNeJyj8UF",
  "key35": "37jeqXNDLSrDsNJbGVVNFJDN43Tdmcit8p9HZdeVWEFye8CT5B8i3zr7bgVAWSccjptwFMpN3EJsT7LqfpY37UP6",
  "key36": "zzvAVcsRiEUgkjduo9Fid2EPQpuCV7HgWeotE95mz3MUbdLerSEWZcfgkFthpVHh8g1e7XzGK13Q7uUiuuzzBCi",
  "key37": "2vRgc1z8Tt2n2t7DvWwUujoMnUKmnqdZBTqrdeL6kAUbrZnoZ5HFckjN41xBkQmmafFqwvCoNQBSSNZcrLhfgM2P",
  "key38": "AMNWmU55Eqd44peJDpvgVQ8psLXWVG5oS7nnbAGPYDKvtpcgeAcGvRabZUfKbkVsLqqTPgf7YHjEUuyVLHSZZA4",
  "key39": "5RVeYDb4SLeJKmP588RKEcETQkawoi76ADoWqAdNnEqR7iUzMR82zAJ2bASgcrwmxm2rjinqJNrq9Y3YkLaTzHyP",
  "key40": "2BzeeKphNAnfKLFFBgaXMTptiueVTmSc3h8oTBhUAZcL3B1Zjo8SXvybmU1vFWcNeE9XM2pZaNmdrPxbLNar7FpF",
  "key41": "4TL5c9T8JB1KHufJwNowxCLaMXaQjTSGJiMLNLfbjsbULLSioEvQZQo5bUgtYPgkfVwNBqucdC6hdXofe9PaZGSK",
  "key42": "4hrepzcaJ9VBVA21zZ4iuTLqBrMFfdnLG7CBEUkpdmHiFxWFrEtZ6orPPgVbeCbZREytQj44PVK9s4U4q4iu5Zp9",
  "key43": "23JooYS4PZ3W35JvWwY3ddpCGGRe3EzGbjPxwZ5LPB9Z9272L9Az1GPU6A8ivMjaSuEHHsWLgR8gdZQXFAemcp7W",
  "key44": "Ud982XKoBNNstCJD6q2tC6eznhDF1arfu7wnNqXP52zLcsQ8zXbGiqtXAZX6HLAg3cjrUJmBnbTPdd8vqU65beq"
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
