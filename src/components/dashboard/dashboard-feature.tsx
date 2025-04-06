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
    "3dnw5FYDPUczpfaXXDU6aNUHUtzJmbKJrwMPgT5bQLFzrbzJEiFVVPNsmyxdpq4q6c9AzSJmkdGnCARUUzEU77Yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hW9FfBxFhj5nqNLw1KwMvw8TyUD3LXWoQj19Jio2RpUt46dAma8efuNGNyaHs9hMi7Kwv3fqHSCd52piqUX2VBd",
  "key1": "3vBpkzAsSuf6XQ5bDmH57uYd63McdZmZJmJBf3stDhgbS42SJ1vq3CReYJVjT1HtWit81TsZYLeCHJu3Kwg5QH2G",
  "key2": "2eECnKyk8Lasp3CbXZKct5izYZ39EGwg9fm12AtyT1RPH7L5rA6MRFHin7zNWXaLhRzsvctavE1ewMMpnHqsyG5h",
  "key3": "3gqiB87EGJ3csFDqYNX43yrN4pFfZKDs4zgJ74ST3iBT8maJyQZoR5o2x2QmPF1h77B2DuWhh9DsiEnzReXTDk6y",
  "key4": "2BKwr81xLEjAHdEJ4gdZ5fU37LBJ13BDS1sFr51tGrNQoMtmXWFErazSeyi7jHzMqGS9odXLKivyz8z1ehASsTM5",
  "key5": "5dMmEvxdvAfhUuzZ4gRRrdEQ5ML4DQRPwWL3N8mPAbMYC3bzpjoLaPY7TiksT1x6SBfzMy3qBgjMwhyiGZw9Uyua",
  "key6": "5poTGaNBiYetBPNaKEijzVq57uNyBYoNfGkuw4QRxke8JyCVNmB2RDEaRfvx6zsvzLkGQpcB472KQM5U3bvnR4R",
  "key7": "3hR8Q1xx2xbeKsFcoc8DYH625mWzMeLFbqPWM5uFA1jgme2CpRYxjPe6Q3J9x6gbUixrjGS46Rd95Ht11y4n89te",
  "key8": "34CjxhMASupbLoYof7yjGiMWBHcDabs2zUrNL5q7PKXHcoVrW3Lwm9fChDry25YhrSYDg3agJjEYcwxyJoezFG7x",
  "key9": "5XPsd2HX9V85nGaMrCBVpS3LGDaWmH9ZMjcomzjLqZ3n83jZ1uLxUPW6csc8htQ4pCpjCDNjss2GgDYZSe6HWcGd",
  "key10": "4Vpcs13n3jdSkGG3fLhPS6dRioUQMpizNqLu63j7CLmmcgT4ucUxHon329SM5HQibLSb4p6tBFZVEZ9ssnrw7qr9",
  "key11": "5uXSdVQTawZfz3UyBw6tYK6NFX4yt8znMgLETcwEPxEKt3G3QSxeXdufkizDJXxKE3ykUvMc6i8z7jXuLL5CxKXA",
  "key12": "2xJvWzWoyJcx7ffHZ1dFtfUW5WPbexyNbpkYxia6eWU5jQaMFsQWdKUJR7gP4iz4UBJgYTYtVjWBhwRuAaAqithN",
  "key13": "52MEsBgYBgf8MqnHSdXQFfyG7g1Tq98q5pDPdpEa9mSPNjQW7U41ApxbYCh577pyxTri6YJetdyUHw7Ym4JzPc3q",
  "key14": "4XCfkbDCXohwomPYBqTnZG9JrQUfSuQHcXru1VCQijaf4WzEbAW4YirNKxxED2uhnw8LePfBnUuU3phBY48XwCwu",
  "key15": "5nhFyMntJ1Dwh9EYT4Lwu7c4shQpwDNS1noT8qSSdTSjiTLeCDvsydZPX3c4gJcWEri7CfyjvtSpbdJNsSxCfS8g",
  "key16": "33G8uZKDL1G1xys5kSxxpLzGuZZ92nGE8SFAF7JSTmduq1ekohkQfTemgdVjwM2iKMqRnSP7M6HeHGiE2XjVyXEr",
  "key17": "4jp3Y4Vx6CCnowPQH9spMMUdekxLHCaWLQ4W66R9jLfuj3jHkBQkNDCVT8nHCNjk9NBieMjvmuYvRN59yiLHyQpz",
  "key18": "TtvoGBxpEM3P7jDxPLuAqCLtfUj4RxESMyE29fLEQtVuNzMbVr5GQZ6rNJycz8pReFmBkyeybrnfFZ2a3rgC7LC",
  "key19": "4gHgM5qV3knt1eYJhgsBNAeK1domUattFT48SYK7bLrh9mSauU6zwGPsKLD34WskMjx7sTM5cfq3xxGmH6KSrdt3",
  "key20": "3f1QbLyp4ETWUrfDJ4eCu47y5err1vg3REww3t9bkBM47NHWBE8q4FKXEBF3XQU1RQqBLUtwqAubRDGjjQXe8Jgi",
  "key21": "45mhz87DKMoPk2VoymDknh9vwtWvjajShfxA9HsZZ1QozwCG32EzniP7mcXHDdWA9zSh48MKbEZSht5nUpgJmZbr",
  "key22": "5ciN7AsBZCi7vechbN94sThvkQLxPLULDv9yacMQ6aqAGxA7dorXftopnsaN8RpYDWybmkEC99haovkvVSY4m39A",
  "key23": "5GAdxJfRZm7WkWwg1sa8Pn6VVCj2imqxC4SouzBtVZFNPnJYP6VV6zpJfgXUMmqFo9xRbmimo84yhUzwFaUxTgaz",
  "key24": "5qWxuPWFzj2JLQPo6KRkUGrn68yqV9YdvgZkCtLUvKW46m6a7KFxzjzEBN5Po5B3meHeMzFRGTXbEX8aW7nGCCaK",
  "key25": "3PNpZJnqxved5apUVVjsyRKsRLT4YPBAjJxMMAEBP5cgWSLztqw71YtZEF9kNFdhUxsKNUPDUMz4L17R6zKpvXpb",
  "key26": "2uQy49TJfEm5LL39i3SjUc9vEj8EtrdmBfijq27aiKuxSezJ8yvoW6CP9g7CiH9igkgEvngeHPYFXXCjV2uiyfSF",
  "key27": "5poYJinhy49s7scGjbmsW8g1L4bdvdFzS1b3z4sX6Q9V4eVMBjwpqmwr5w2bj4VZGEYvh1FjV2TMJjWjL9cdRvHy",
  "key28": "3Z8KnytBcnJrjeMHA7EFgn8u3tXHM7wKjFCKucT5e6GW6YWZFpcZy69Ukjt9QkAghqbqaA5rXyPdhgi5uDozWoH5",
  "key29": "4UVHTSoLCUP6MFh2K4JKt4U8AXoZfthN64i123KYVuS7Ee6QkAiSEy2FEXJkuQcMtJguWvveRhoqUNE8FkuUGP3G",
  "key30": "4Fk44nykfr14anQz6FkVfozm6UeV6yJxKBf25Quyjj6T7YBRGWmzTkS4UzQew6JFn8cur1DgdrtLyqd69fQGG2uj",
  "key31": "3uPvSAgnuyVnLzk3zjLWWtoSXL8xF5Q9JqRZ1xaq2xfBeoUDdvW4EMsbvukPLKwVqeiJa6Sc3t7jqM6VbrrAwEJR",
  "key32": "2LHxCSviuNXBGAZjqutf3pPXQycCK3RukrzWJqp1vPK7XS7HK67icbEJkPvXY6S28iQjzPd8t1AgkZSkUXZBe4wJ",
  "key33": "4csoqWxxMiq66Hxn2VmNvrq7WedfszRpotmynPwyUaXpzUFZBhBpcPrCciWgmtWaiJyVQEfBV1r58D6cDr1236Dm",
  "key34": "3dAWcqm4s62xvcWccqHaL2pPYTmc4xkw8Xgzyv9cnqu1zkdwJ1GVDoEJonLEccU81UFDAMu7trmQaz1DjDwqzFnW",
  "key35": "3KbbXw2WFYwsGFKMNirY3T6mxgGtkP5KDAqXseWTZFMPuTcGkb9Adfn2ZNHsfdnVHvAJH4NFYLm8D5zpfrow7oEs",
  "key36": "5M4qPE4KG1vyvJSstKLmVZ2mAgPHei4eaQ1Ue22BmioZStiuViTv4G3Xr9WjVr4DGfmobaU6xcPDGwsAKhiVFSr8",
  "key37": "2mg5AF3fRjUbN5afezQpDQ9KBuUQhmSfGQ1fYRCaLmbeimWmw98FCWb8ZJC7FJyZq3KBo5n23baCAmuppt6JfpKK"
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
