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
    "4iK7yQFrVvNioB58qpBxctQVZSYjSFXNfn1Agz41sZnktmPz8H23xeZTVnTwMnkVyFqbRfEsNkxua6znr5wJQVnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o81oGCEqMf94UGmUnbkAh8oVGMpwrE5WVfFYxk6qw8YVo2ZjmJXa6UdZX2Um8QCwc62RpqXgPEcHUexRhbVWWTB",
  "key1": "54YNNCe5LUvjukZiKPf6ehZGQ23G1yRZqfjVEL7NR69MRxrv9J1SL3K9KCtTUCRBhVKDbSbiCGT5tD8dRiXovH3U",
  "key2": "51F7XyeokAvYHRzSmQuzNZHu6btgnSwZA3MAnb6srmFAUJDPw2WT46Xd3QbeJx9P8tZ3y9DbkzTusRAPkiea8eF5",
  "key3": "635pBQq8F8qtm9zQqjS5a1LAsG5ZSNk7evXaLGSTDmtzaSvVdBWdpud6wipNtU5J2oA8LYCcxeoYSnxwaeMefBQE",
  "key4": "5PjFCk9Ccp3mqwjKUATsg9T5xqQBwAEmcAdPp8ZD2PJ2NkNwQ4RpC5dEreEBDpcrBEzqrsubrTwUydNSn31GW8ec",
  "key5": "4P8bkPT67ZvtgbvaJWf41rsKJRuEMJENt1eLM4hrs3djDrzUXeNSYr6Pkjz78pDCTP9bmE3QmzpBmD3X2aUbX3aF",
  "key6": "ACugr3enWjXGufVndKUh976iMRp5Yf1YqEPoR9nHrrgxgExtQrHw3vAsbBwboyKLbx9WR559mSWFW9Hka7XscTZ",
  "key7": "4iNjNLQ5aiXs8HTM9FGyihGn42ULekzf4cdvG2UPL5Mo1TLY1R1cvRwFPy8PGUetBq4XptNT1261ft4JV8N86AAX",
  "key8": "TVnUednhDZ2D262QB7dRfMzk4CU7GfUEW3LKUSpkZ4WGEXbjjo8ePSPVwykGbzapWAzfjWHJesbZvfyEmDMgyyQ",
  "key9": "3GUfhUqBM8LuTKxPEk8dCVpnM1AMvCLXxU55Yg7DjookAbrLtFLTiM7WT8T9rc4FzEmgcdnnEhzm97T1kHzViFvY",
  "key10": "4zrJ6YwJtEepsvQCxkwwTHX45vE3qAhqS83KDDpEG7spkDZsxEdSoVbHwJEkMyWjxExy1uqbHUJSywBLwTYNMkn9",
  "key11": "3yretBd8Dwqy36xQqAdhvX6UqxGFL2i7qTe39k9mJBNUDbc4pjx6PGb7Wyf6oVBfVA6nbsFdjc983a2HeNSdCG6J",
  "key12": "39jwyiSXZfUbfpptspVeahxV59ukCF1v4bndfqu6Fkmm559bGuCxaZFCE7AxDuXcoKWf3FhV7Pxs31913FgAh3V7",
  "key13": "3WhsshNiUCJhaKL3nzh8UfadAZpvii2cJLxpjfG1yLKVK3kX6GHwTNBhcZF22ybXdV27cVvPTnXQfLhyaugnTzUC",
  "key14": "2pLambLHr5ZMKggn3bmseYwL3F9JQQfYBKLDkEEieGXbtWYNxGy6N6xxqS6MHQ8mkz15tyxPfRTQq4sLq8JrfG31",
  "key15": "JA8eWTKWkE2DSKqYnAqdmT2ikqeKhooZeYvbvL7XK9A2gPXPQxe9e2SAhkqGxFJB5ymTXSFipLZDZgaiP3yGFiA",
  "key16": "3P95z5efaHjWUaCKKGd6ChvNaCbGM8NYgaDUESdvjfXyXnaw8r7drq4nQyPFZ9nHi8kY8jDHRtBVmjzWztG3gMnt",
  "key17": "2jquKx9WaF4ai7bC45BjxS87GMMTcSTfJwH9iPQpLnnAHfcef4X5JUMEcpHp1SXKbUBLv3xLR1q4BrnHkv3U35LD",
  "key18": "5fL4RokEE4XD5fwLQDrc7vxNqWp4FHbasYS7kP2hLpcwMZayRwjLnN93q6uTSELuXyQtpKmJep3uh36SVmBZEPHX",
  "key19": "5Z5n8fy5hpXUJZTsp55Jsk4FPBhggA3gP7fWfRBLm6wYR8ZuTZjTejitQaA4WeG8PwU1mjjFcnVy98RtyFkHVsbF",
  "key20": "4SgX9hoWcFr3RnFtj2DgqfHS3iWWh2owKospYn6tkGbkT6kbUyWxnJd3jH91zQ3x1XCCUYqKhPbgNvJFk6DSgBQi",
  "key21": "4DC1iFk2P5QkZpQmEekkvnLvghz8E3vNUhjRTUdU9u26nJKkok9mVdYcAeL2ytu3JPSJdGPbwYCftAbDnzTV3xpu",
  "key22": "2r34hEBFPeCaQs8vbQLhAnyz7Vk8iGTrmuEZvqq7pCBsWFSzqA7MbctAzNrtDwkAifZMqbtiV4wrgSztwFiajPJo",
  "key23": "43Ma4pgcQRkZ9SjLz99RqBQsW92haRi6orhFo558R35pBnDNoftwdD8tVa1AoMhgoAzFrQnPJQ8hbvGXQCBZxJtu",
  "key24": "2g4nPDvtuayvoE93XHs9vqUXe6iPfKtuicjfbTHVoU1X15x9NFbiW8bNwom6rZka1rEZmAieUR7xLcDbt19qwZu9",
  "key25": "32RhLGQZPrbtiuMjZKm2aPsrN26gT7LvfmtcWKqNDDzT2zLRaGkbDHeG9pD7wd2HnnUn6F9XmebTPpas58jT8ndK",
  "key26": "5zmiJQhYq8DsjyM4UxdxXFAVr7ULDPKqkgBiLFvwqVxvDaDxbghE58foTmwU5kkUeuRFnAbP7y4t3ced4NpRFpJq",
  "key27": "5pjhCqPAGb7BtmDYtmyuNvsxpmUWkbnRA6cVnRePZTDhQaWiQe79tuVyQg9JPsMaj6aasLcDwV9mv9dcVngPnDPY",
  "key28": "5GSuQP9UG1s3gCo7DPpkfRqHhCzF292fmgi1YuDXrfb67d2MorhHpzbS48iyaGoXDqHADT3TuuzrBVvcWCbLFSif",
  "key29": "5Z8bSdTNNcyEy9VEhHDqoZJMdNQRB7zM2TfYskf7uKs219mF3MVyYtPffABEze2CRn9FYbXynEmzAZkbuzAj72jp",
  "key30": "2oVG6ojUrmjrkRqJHYTE2RmJaYne3LwgJmD7ADk1htoD9AVhM2kKoQ4Fm6nhZvC4toMRj5Cf4dsNS6aPhrLJGzYJ",
  "key31": "66VNQfQLKce2h9dE8Q7Vvat1j86x7xkw3Rq7LPtHq8HhbDdGWwPPojiYWwXx3b7DR8GuTquM58RfnMULKeBjvY96",
  "key32": "2NF2b9KSuUFZVP7qL2XmgYQnpi2zbhbMuk4GjaR816bDd2rF4FycUYjQBX44PhNYpTQMyh9CfEA5HmTJEiDHuRyg",
  "key33": "5h5PkkK6hVD6pqb6xxrE3p628PnHK2a4r25KF7Gk6Hq4RBX1WfQReu6AbTT43VxfCmob9LTWr6KzRtsQhrvdJ7U1",
  "key34": "3qy2XnxugL4KZYwjysnihXG9B9ThakaZBAAP5C33NEw4pFfbA43f9Ak5JECzTmviGb3mh2w9jkukHVzHyafai9yt",
  "key35": "3VXZzH9iHV6eH99dsvjf8yY3Y5ZC1ZHV1JTWDowTGFupxx3kXoKEpikYWYLZQSsrfYP4tH9v2vFGXdR8723oxqBS",
  "key36": "2qWr1TaQMdvV8abhJ3y5uoFwBUMaW6bjHpsxHtZGT9PjmSm3P6f7hCJ1zuaxN8WvwZf9U49RueaDa1F4DmdJ65Ad",
  "key37": "4hGaKpY8bF1LTq6dkVAsLZFHHTbZFmHiiLwcFf4ijmeq5NmuG9UqrkGpsritfcrSFVJ1x5twomyi25a2MyPr3GpP",
  "key38": "4XVUCipmbpXYbBFvBfjzTr3MXH7BjEX5D46g41HrTCCp4VcMaQu5yBrGmD6QUPeSJHXdckJVoSSoTT2CGkLScuyD",
  "key39": "64yh2iDSW9MLzYHvREQBcHvtWkhZvC6qDCQoUXxguhboK8pGWXyz2o6fpdFmAzb4bDGQvqD2FNwXqmKzQdHniUGJ",
  "key40": "2FCUoU5PERRYnEcruWVfM2XxwzriKHJxQ8x2MXPKnasfWd36BHk7vfUqkMDrdcGScubgwh4iEjxCGiUyfLdWKFQt",
  "key41": "2h8jaM3h6aKggTEk14uAsQSpFn2pJz7EKaHAAsnfnS1nTZC2GZ5bYKGTTKuXDM9mjJU1fXLeA7ht8ksBWZhatoPk",
  "key42": "2a7URdxSUGfTHbSka1r9evcpFxMXfcFocRk32iqJW14NNCdLCTYodXFg71znLLp9nmgQCR7uLz4uTcMNXpVEx4cH",
  "key43": "2QzRVVpBTLdSEWscpH7kbJy1CunZ5abwbuwbaZiZhSLQmA9dtCMjKgsq76EAtLNWFVd7BnSL8THVR5vdcSsq4mdA",
  "key44": "3RsCSuM9B65kNLkoWdsTmEza2LkDVgA4Z8C6s3MKdQVAjYqCS8QQsYGBsfAYmHY9pGLvNgJcU1CskjRp3q8345RX",
  "key45": "3iiwtumjZucLWrsrGs14eaC3DmGLMMLqwYLmjNbUkwK9Jrk58EGmPF1RMoDucnFUF2oK8DuddVzactZs9VcNbRE5",
  "key46": "5azd9Z1jrnDTRu7TtgxXmEJuEEqsEG9L6cgEf2pJLPf1q5T9oeQ4sGx7RiJd7r4kqKCcCBYAsFYTCR4aDFm4F2os",
  "key47": "27B4my1Cnht6eKXW1gDUUTSpYGQaMyavRV5i2tUeiHNqq6uyii1zwtqT1zWsuHRuVpZsYjhU4W6DeGC9apsYCkaF",
  "key48": "5eCzt1PkG2PcVRjkxeMSyUqcB2HE4AfiqhY4AJAFk4jxfxYjpXcT8fk255XAKirStDNihWQcVEzEh5RifcF175s9",
  "key49": "4TnAEtscqdV2a3ixEuDeEQwWeFwnYCk1W9NBVeHvAqf4XndeEM5AScnuGxmTX98jEP8x4r877EXcHaz7Y59PWwiz"
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
