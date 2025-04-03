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
    "4QT8mfXVYb46VEqTRrYaSceLcsaineJVVABQuyouzNoQ6v2cCoCMebgm6oQYZhAaY7qLaA9kCZyCgNG4oiwtRLsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8KtArBcSEyyidk6KrwoxeUFhH5woyJobC6mHcEeGpdEiRPVKq9wzBamLNGmmpaD8wXA1XTgNiWyiXmiRmZAVBu",
  "key1": "2fHJaBMM1hXJBvQKA1CmyHNSkicmj4CdoCEgJ6t13u4NqoqShyw4sG3JxbfLHZFJHuq9xXD9gyzCPHA6o4goqHi",
  "key2": "4FnNjhZisxfreS1tpsA9hDsLCt3vJFF948zEfxuuNQNkJ7XGcuSw4oonehQYhTEwt3XiCHnWZaCZA5fv2jonZ9Ji",
  "key3": "4ds7ubwHh22niYEjgYCT5fkDpBtHpcK5wTwE1FgHt2t4qRqjFZ8RRzXG7Gwpq6jgnH4p7a9vFu23Yvqeia4g3pjX",
  "key4": "58tuJgL8rP1prpzxospuGtQVodXzD5XMUTjyYJF3eoy1QxSHLZWGX6JQjMgfnXHo4xRoAKvEnqdsmJVfUmQwV6qB",
  "key5": "5S1UjUGLMwj8o66CAywU1TPSgsmxyWTHzEUz5RbLRh4MEruBxgYDguB7DWXwETzQ8Py9UHswvxKHtJUvy1uoSbxX",
  "key6": "4tyoq2bdUbtoY6gLP9xjoUbu9bdSQza1CuhGJ3Z8wpZgmM8mHovGkZDxQYRWySN7tbQnFhAb2M8NFC5DMJ9czJkA",
  "key7": "dBDhRR46J9iWfxwd6hfG8Ssez1Lfw6WEqJJFg7h7dnMY36vgdpA66tXNKTq2w3riaisynHXc2H74YdnYu91BHJA",
  "key8": "3dcfznEjFbqxKdCaMzghgxKHfkRGKHaUY3dL9WXqZUW4ZQfhn8d1wbaqm3Kb8UWb2MmEvp23Bapyv4Wizqo1RfS3",
  "key9": "2UJchmgNvTkAeTDU1HTEUzkuJX7QshhbWJ8Ve3xjH4Qs2qYHjAgRCwf11grGo2pWDXk7uGgvWcPESvx8arX6xkph",
  "key10": "XMXTXF1184h5Mis21yc1qrrpUCY8uth9WAvYkA4TdyTzjfSjobUQSNEdSdG6xfbkLbDg4RNr1SgJFHLRSEyCQTU",
  "key11": "3KAfqTsXZLiZL2BtLL7NG7z63qvcjAA771fXGttWN5X6eBteyGSLZA4yCJe8dkqYETHK6acsP3vAQUaegUZ5Q4pT",
  "key12": "2LiZmZrBhQMz4cetXtfhrF2Lfijq7hNtrsHnK46jjU16CvWsjMF718WYPi5CbZjVFcweQXnN53vpDoQUSfMuBWW3",
  "key13": "5FmciCSPVtxUkSVJe4zxUfQb2MiKzaPsgXsV3ezWibbtohsSRts5UQ9p9stFevwRT7wgiWkhVVB81PrXFzkL2DDS",
  "key14": "3V3zCUZ7iPY7yqFwsvT8Rno98jeh3eNqPbBwtKw1Tn1dP1eGXXTxiGpcUPjDDjLzy7ncs4DhSr7juV4eopog6AN1",
  "key15": "2zhUbqbE3SYyAXdcHs5HT1wG6QiFyT87qXUcytugCyZTJQnV9EJcfKVNLmKiczNBamRWpFTtQiCiEQLYvsJW1FuN",
  "key16": "3ug1i3iL3kdPFV6igcQ8U1dfYPTDJdaWoHyCqa4z9DndUYwa4XHpKEiWAbDA9C5CG6yyq5KTg2KFuxd6YM69ED8i",
  "key17": "5GmKpACPkvK5JXnsau4xphA1Sjob7QJZWyhH9zfe2EezKFYx6iS73AJVT11bWNg9XDoxyRQZK9PvH7G3yKTjPwHF",
  "key18": "vBHy3qVfGxCTonXaAF2nFNYZR3TJb7egY2dPfTHGVprZP6kh5ooDq5qABHiQFWNNbtYJLUzbKVRNcdaYcy18ts6",
  "key19": "efUrbkYYmoeBWD4e6NManriYK9qvUBuz24EQFFGjBkhNCLUJwcBdV6tnYABH7Ye4LBd3Tq6YZMAxTUYzdBncbZY",
  "key20": "2zoUsFyetdfyxygjZTENSVpfRRhgDtm95ySL18R8DBNazdUkzHpGZNf8HCsnFgzf9eBSZyfBK14Zv1Fw6LTwi4Wf",
  "key21": "qMCwuPGTGfHgAcmpanWu2VumeU3UJUhRTLbqP6s8GvTrYWN2Ehgk2eUk9pkSB1rix1g2XYKpEMHFCK9MpUTN9o9",
  "key22": "2hXUp5jaQ2vRyzvj6Xmvg76FyuYq8zAbRc5KFWjaByrA2UWexi3EwGUSn8JzMUWJNCn3tBTwhJZ5KcbbAnCn2Prp",
  "key23": "2mdE7ockHfkA3Vih76gzMo1EKjcwgAQjHsU3Q1PaDLKanSTonK6fcm46YigYtFCcConFQBJ9RuVoHbh9Vbwmisc",
  "key24": "4po5DpkX7qXR3XMVCuAY6MApKH24J9xbpuxK1UPAHgVSUYCwiKsudAXhZCMoKg7QRgbU71vtuVH4QZaq61iK1M3T",
  "key25": "VcdzQWRfLqxRQXVpuoPXTNFWjcDPEvZjFhUB3cKthorr6VxKJDVwc1pUT1ykouMaLQ4nXpnv2sH4hfH6ZxRHgPi",
  "key26": "2bU75DkazbsnC6pqe87t8g6GECE4PXNd9TN7heM9ot9xFSq7gZqmRefxuzoTLKazWtegJiZcGr1BHPSPMsuVytqJ",
  "key27": "5juvMNrmD5suY6kPkhagENXuspmt9rx9iugN5Rwogqp4EAdwNXt54LMfpV4dpQrLPnRKYPKMN1bXrrP6Afqw8uF4",
  "key28": "3Sex2AdXUQNoQvCjJtNdeDntNSiGdMP4hv9fgVvbEY9K13FU5XQQNuSmNens7AeGRMMbL7t4AXJM8SjXdULJzcUc",
  "key29": "wgUT1fxVjdWaa98pkYSHgLgt49zauhmyt7bbgHSGie2ZyhWwLAW8N8CxQnA6wi7ZgxcB5r8SQrZgcYEvFwKoxja",
  "key30": "2dV7Fheb1uvovCcX2WEeekn8dsD6ruduc8mEXXTK19zZpeA2Jdwn1tsy3DsXGpNipaLvtc9d5DE83UvRoPSMV7mD",
  "key31": "5uioKPguPTYaaSzNm2UTPmZSyzrybL4nNh1pzNowLZH7EU3FhyZPWm5n3KmUQ4TUv9eUyvVxJKD22EWo6rXAzPKF"
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
