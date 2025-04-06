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
    "2SHsWZAAQhHtxF9eKDsS39MnNPYenxSqkoWX5VV8WXKPiEgwGCCuSjcjqd8FZxZcQgQUXoUnpnA1RjmKux7LKqMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAuJAdzsLc7RLAwGMXky6B2tGZJKzLJ7cm1eff6ammSQVvdZ4a4t8tcjmUYxMVLbeNRe5VMfdjSozeBi2cxEh6p",
  "key1": "2MiLk7UnjtG6tDE5B2DvgWkCwM7MDcJ7jxiwULx9StDsrFBbqfKPq4CSnk4LJLPkYEbyhjfEMjZWurEWi8XZjheU",
  "key2": "2uJoKKpp2k1sfvQt954DnbTa8ULsUFqeUF5NTPhCCENzGM1JRtDLNBjVyuE5TnGGxwcJmzjbq2VfjUWASHqKV7pf",
  "key3": "4nHqsPDdx3HQKFqa9eEYVu7iZnVxvEzengzVJBEpXRrrTBGz5PVhVpbBZcL4hwhnSsHGDzLpqnezA3zsQAmK6ENr",
  "key4": "3VCatYpcUhhmrA3EUUKYA28QCgiTs7xxhNm5yW2iqubadwfFZQUPatBsGFA1c4W7xKYTCrJ7yvtn95esYto18McS",
  "key5": "4dyPqv8TLK2mGRSqU3ixNBg63RpC8Mum9G1WUzoen7rAiqYVeotoPjX52vWFz3C8zZDv1j74UpjpezYcW9rULyBB",
  "key6": "536NFqP2m96pb9PiSfCkiLDDbgXmTu3MPAs24ebBppHVD4xq2whDk3MgdqF9bKSYpZy367VeReWquoD5WUW3U2ke",
  "key7": "5byEkrFwYTQ1treRyzEDpBP1t9cT86iYyzUv866Wcwa1hyCDbWGeDdaEvJkfJuzkvVesR8rTuBw4zxrzNkiQEkRN",
  "key8": "3idRpp6MeefQSL59BJTdQCKVNFLv6nKRzCbsQUiNG2TUQHZWaLD7WrB1vVaypaJkjQez1FYzgEb1s3qYBZ7B8szm",
  "key9": "5uebhh1bvB5sYAhyVrAFcmNHTmz9gr5LHESmmdKxqCGJkukLDZVoTYf4ktmr4MarYxDDaT7yNFCVzfPxuz21Xtw9",
  "key10": "3XdGWGNs2rZ5G1NSL1t78rkoKiumE8KS6F167P9d66QntSC2gPXjDT9sw4U1UHZQLgejh2jQ2JJVHCyBiDKEdHxX",
  "key11": "4J9iA2dvJA1m4BKTkzdJwzY1JVBx2M8oD2gUdEG86CR7ogHqc19ZQpSGk5Ztf9o3EyCsrp9uS6zhYzh6mE38K2aU",
  "key12": "5y5bJGAtu5deZJf5pWb2Q1X2WgGL5eitKkkFEkHrZDts4UaZN3h9yjUhNN9HqyhJSHraNx2DW5TE5K3frWgctTYR",
  "key13": "2xMiZJsV5nB92WcxZxsgTNp7HHkL6WWoJTMTXjUh2F8iUZDx5Sa5PKjVfWbaySEP7mihYaA9Q5XrMKDvxKhtXfZT",
  "key14": "5KsoKaZ3WpnAWMSfsv7TsAykxaFqnHKDqPEB3LJz4XVJfqtGWxDjC54Jg6UZKSvrnwZNSZZXDMA9TBpk6z5HcqaM",
  "key15": "47pabFzYPR7LKUyX5vBANh6KWixw5J6EUW84vh4FJb4JjFDcrYdjCrtkb3CavdGKgWkMkdbnoH4DmoxxjpMGRA3U",
  "key16": "2ZQaddg9trx8Ajh9SHVj5oXPSrWzXo7ytSqUG4TbuhkxPzyGwSvC5mrQ1afrXb8kaCNrhGRig5iSTjXy39dJxjBQ",
  "key17": "633ZCEe2ffuKYRnxQZvYjxE3h2cbAqp6QLhyEGPTvqAfxYwAwzMt5FXWHfwCPW5fdXcm5u2Pa2iSuVbZDhgMxBWE",
  "key18": "2NSUogdGmtiqzG9ZGTncMMUdVMkQf8KETmyR97S5Qidz9jSJvCCUwRgERB87yPDkbeh6YhgGf6ct2K5xxCkzC32U",
  "key19": "3URhQYQFKPfm3vh43vRjad4tA6c3RyoBZ411mMTQMTahuQ8HPjqeppHKnu1k6ezQJurjsuuUbWxfRhmPBTJyh5gg",
  "key20": "4ckqs1LBHaDRpLtga3a81cmE3g4mvHtURt6nuPSMNSD4p8wBCfyamb1RMPcF1JDvWmheHcEbbZAbVy2XZsEHFqE9",
  "key21": "3pEtP6S9pXN3RuYUAEGLmuyDzjd8LakoBdeLqLyvG7M8HoSJ4ytXjX3tgd9EAwtwWxjV6Z6XhWVKtwf7KxJMKTbd",
  "key22": "3vZ8WYoA7cXayAJJHG2m1jxEKSojhRHLPbmWYtL7mVb5coG4F2YF8kg5Lyvj1Eniuo5apA3ce2VBD5wv5H51bxb6",
  "key23": "21YFqcBG6JL3oaBPQUcvMAuT6iUM7ysnVXgugV6eBEhUEfZ8im1eVbtuN67GmyhjCQa6iiRBCjP3cm3FteyVTbzm",
  "key24": "4vgqsaTn1WFwoDVvnncAYZeft6539W2URCaSrVTwoF6UQD6zrBHWvGsyNBpKC4VuWGGmTcu6zba9MCeu9RTKFnne",
  "key25": "5sqjVMgxQo8h19jpxbnYhLDJUM2QdyYGPRr4NBPGitJzP2tq5p5DnsPJTtSyM2trckHzTnSWnV9WeibJ6ovt2Xb4",
  "key26": "535iY4wBGCB2fDz715ZjfT7tU665Abo51YsqPz7CXJh9xyPM5KNGU7wejKPidd8MwXXxmVEdagrQ7rReRfH2r5ki",
  "key27": "7yHo6US2x9moD9AXGczT8PTx5zqnK5qap1XZvzHR85hq4C5QebSMPZYMDCQwk3uFByjSBH18UwpzjmELvvfMgjH",
  "key28": "4WSKcfFNPfMtsLJUPwKoQG2AmNHJzprru8d6VUjornjqUV2CBN3RM6qSwdhfNiqKDoadhn5Doq31n1muwcHsFzoj",
  "key29": "2MkAhtpDuuZctVEJGWXDySZxSgMTpbxwTMrPYiHRf2Rp7c7v2YtJBPbriJHcEahaBeV4UuAWcN4yqYhUUCsyYhTc",
  "key30": "ogRTBtWYC7ynuybKd26sfLFZtnF6Yn9zN1UYqsaifkDMLDu9XrcpikZoD5HkWDz7ajFRHjVdgr9f6jN11GUaKBp",
  "key31": "3D4endoFbuLxg6W95LgqFwhaqmpzcfDum3zmvoU8BWjrdWBHnNzMLpZh9u54bFeeoc18Sd61HiTLPesPdFVfYReW",
  "key32": "5asJ7qGbGi8aedqB92J9HMgnSnyKos2Fbg7mz7iDyvdsWTQDyAu88qtjZxuVL8rCwva14y9TfM6ZqGoFBmDzXQbu",
  "key33": "3Xr5WLNaD8xwiyXVettf8kQeSi7rgNEq98pfzX5NyQv1kgrBGDSF7NNM287yRa68ArDXHmFpo7cAt4YNyAcoU19c",
  "key34": "5mXFF5xJZcUpvfDCnx8vEoPQtpzPHovKY8Kym1mLtpLeKsWnCoxCWPvroeYSNrekrGmQHTHtADFEdgWjdespyatM",
  "key35": "3wEP1t4ZCK1ydZKMqHKHz1NqS77QyWQ2sebvW2M4C1wJWFWNt1RMhC8GyhdoZ6WemzJxgNysi8bDgCEqGqvpiN5B",
  "key36": "3RomcQikpLiSW6dkf9x5yXmkj28nBdpQtvwFAu46gB7GnaRsr1ykcYih3hC1pwUo9Xjyom5276uqmw3RurFNUkw4",
  "key37": "i1dPoqjzwt3N2YmYjku4JToWkhvVmaMxLYZV8EhenE25trNYhrEdMcUctRNcykLAvSZNPtvKJ3vHu8Dpn1WazjS"
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
