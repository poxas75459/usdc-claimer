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
    "E6zLoFLYj68YRJFiEGXfceSWYDz8US8q3aQkCSaHVTQusVdbinbpukhKtWPktKdgYzi4vk5TuNkkKJCgAwYGgn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFRH4ot7ZE4Nip2Q39VkBZUNMab4ekDJQFCuNW7ZGgXDkQJ1LLSVBiUmRoWfjm5WkzUfJa54ChmkSZKBJXUBhra",
  "key1": "2qT7eRpTLH2QN2gfwZJy5S5U7DrW6vf4F63MxwGjRERpdxmNCRQhaeAmRdoYa2BRY9CugtnuwiCw2HuEk1uszdqg",
  "key2": "dKLR7r6r2YrpHxsGSJqe4cEscApwbdxxk2g6k1xbb1nqPgPPFJtic4UNuFS7EPynYvNPA3iVZU3gfq33JQMTA8z",
  "key3": "2UufcxDJzmLzkmsrB4ngzYEDgdJQxU7Hd7jP2KuJ6LzgXvuDL8Bfz5EzTSWmfkpRKaQcHY38ZZxFUT4qPwCn9rpK",
  "key4": "29Xsw9LorhWBKpbL7XMdk5iSfCV7fy1xhM47KPFbEm4VLGXN5Em8mXQHRNWx6nhRDtfe2FcKkjc9RigTX7fJBTwe",
  "key5": "5qRw9kmDqRW4D3rkNMXGD2zGprUYAwN7VxgqgLZRxgmvDqYkpVm1JnZRVnCZM59UyS1MZKgjPVmqGSqvknKKiSbE",
  "key6": "34AaKCkVcbcmfSEvLoVjb6xE79EdHWdTYfUWQUiZT2uLVfqpFCgM2tY1CjTGN8AhtpCr77sS3FNuoyKzcPuYnNot",
  "key7": "2XrpFAceBWhTLDV5jRz1YmNRqspqMhF5bHfjLrcpFPouEkBBTexyyjb6QXZ5JYQwcw6DDfZCWZMH8cpLg51FUeLu",
  "key8": "2BfqUpQTsCW27L7pPNcieYSCnAvpFBhnsRGcyBNjbkvMtcmxeEYYen6iGpmixZZPpdAvkjmtHNQA1Fu3gZiLwzNi",
  "key9": "5rrKtaFZVDkUjrMkoeSHguXpM1o9kpNSv5HAHnU19RGK7op4f2Z49hVTfhvzGu8hbH1Fz7NhnQkCkzrBQMT8avic",
  "key10": "4vbQ7Fkza9ugGmtS1qn27s2YMSMp7C8AMD1ehq9hF5cnCBqsfxToKNNJdSJZwced9g81c1vjrPJspJtpYawHWMG9",
  "key11": "4mzjUtojouduUX3xQ3hG8gmgfwocmKY244TFnYwB6H38eoEEkaV89bhGcXAY6fn64MyvYk2aB7sjhgcUYg3mCRxp",
  "key12": "5HuAhDWyKN2PQ5wbGZtEu8gK16rS1CR5mVHUmFD6VUDjKUddZ8iXgKKysmpUtp7HGoeQj8bHW1re2S5ss7dHr1d2",
  "key13": "2EH3gjWeST1t3dAfKSnnZ3fDLNPVZepUJ2B4vHspekUtXUaRyhUUoes4ACNExQQxR6NWJcwrJiYcZAsHGYvuXb4v",
  "key14": "2MLxaMJZvwVawTTPuQnGmBoRSBGqPMixWZxHqEhFGxCKgGU3S4hkGX7hmgQDLaWmSKNb5tXeUKFsKprZhvv8Jpeq",
  "key15": "2jUuTN46xi3e495ZCWm2y7cUJTqtWStMJRAK3jivECZjjpmURsMrsh5YrLRP7c6sgA3bBynY1nX8AYB5BpeMxySA",
  "key16": "jNYAQrX1eikCbHnWk47an53t5Mnn39pE8SSpDGEFBSnnuyCzaFDT2pAct9oaJVT91y88UMaEjuvc2b6zQy8VtRe",
  "key17": "4PZEGzSZn4okWr5AA8mixyTRdMQnDYEUysG1MzgcS4VVX5g6Cc9MXKkRLk94coHkHjtamhqrx9xwdUeBJMSUQEeo",
  "key18": "3kyx6bFQz6G5GXz29RfcvJT9n569qzRwgJyWXLx9qe5LUdk1Fb3tycV7Pe6gZWnBehBSnri2QBv9fzmYgxtUURJY",
  "key19": "3WMeT6dprFeLzmjir7Jsme9Xf81inHJQQyKZhkFALDH6rRrBCT9Xq6qazPFKi9SBaDzDWg3xjQqBpvR4Akticscz",
  "key20": "2nP7ttfc31rc1s4rregQwigHKFmaW2uJgtNLJYZfedtHnW1WpvCK7WZMsBbFfYxDJkRwg5d28mbLZg5iUj1d6Jsc",
  "key21": "4WgW1wQDkKzneymdLpTERANrVLkSCC7husfK8xFsooxc5ko5nS61pcAsYSNonL65C2y9BgthPYTTGbmPHj3mYm2M",
  "key22": "3SnT8AfP3aVMG5tqSLdi6Xmd11zFWQHPwdUR46wckHbcLstrpqsYrXYkktakYt4PXERfEmHzwMYArxi7pnY7sH49",
  "key23": "FfmcsNywuktKdZVdtZs9KaekhCyencLEfshEjXfqYNPBEYwoNdRRW2G83u7eTQ5xpmz5JEKvv4eFSZcPNjYetA8",
  "key24": "5pLoAstEKyjP3ejUoQV4v8GEUq2hQWcQJpbp7pZGc7QXZ2vm1DN98yjsz6Bj7DxLBWc9YqmbHnaV6csQWoo4yahY",
  "key25": "RU3WL7BQukJivgLUe5cjnejbyJ7RKvsDxFmAC4QC8hnKvTTLvz5GekNfNfCb8MS96wJRrtVXVduES7hJgbEXSxK",
  "key26": "5XJXe2DPXTemKvEJxh58jwNJFj9yYz2RRsDn7uhtp26fmb2pF9hoTQpok88PqRvyguoG1Ecq5w6Ufi6zHZNYE5Az",
  "key27": "3NRADtEGKq3rrASCU5U2cX846Z35fJaiujniSknzNMHmuhBME3y3M9GfTwqDeWc7vmmf5Yfq4y5FxgHQ2sorp7eq",
  "key28": "3kQ1QDSVdKph4rzKuepbvN797yEv9LqFSFbGfHF2Cyo2rFwfLgKGPrWPc4L2iQWnr6T9t5gYNcN4ykNnniyvP6pW",
  "key29": "2nySmJvcMFZLmZprxNngwzpwm7L18ezyn9TY7XQYrpmCPy17CpZU4gSDMX7Y6YsvEMxGMn3npj5pcdzvHuY9Ttn8",
  "key30": "efVbgK8RfUwzJEry7zg2u7NXbovJukCzR66ynDuz41RFfH2FwCm3K1N6LVSW56ZTumbXSjr6i5UTDFTxQgargxR",
  "key31": "2nh2Y9AeEkyyRt4pRCtocNj1YmdQgeMN49s5EKsfBe2SzrAfmAWXrfY8NLDvxzVWe92fHtXLTE4voEYhNYZor9SH"
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
