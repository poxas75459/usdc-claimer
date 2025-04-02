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
    "CbBkypqPmnZ37z5UwRfXptdCdeqUwv4DVZpDtFmRp656Hx2Tbjjsx5HNWiXaHFzJZgsW3GPa3BBVFwmbWKGwQT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LXYXKePqJvM57v8gPcGELAQdPPDkfGgewGVUkV9rVATYQkLDQ6i97DuGaRBoWznooyGmDfQpr5LoFXQ3xkSQHc",
  "key1": "44c4hxX6xhbQL1DTFXpujJGAtLp1KXCZvY5Y65VuS7o4UuE3Ps5JNYeU7G1eKKPxxRYLH8ToQJTBrUe3QbptS4c1",
  "key2": "4zVtFWdGBqjUivGbcXeDZTr6MbyHGZGfyuKKWQ4zynMZdQincD4rci2CMdSQZ8jgEhU5Zh5Nauyg1NZWnisgZJA5",
  "key3": "3JEH8VzmpNcSHwHFCqmuyoV8WnzHzhYtCgjYoS1uuTjjPo88VoqvHP6poPQrd1juAdMaRRAfBQ6ZzcCCJb94CNBn",
  "key4": "3zX5F4iFQWEKu3RmmMdTHnwy9kn7Hfp6qzP8ojjk3aX22A79VWbKLtEzhLMqPbe9g1UQkV1Xz9Sc94qKN8mWEfBh",
  "key5": "u3cAz3HTyfFtTovNLdYS2fVMJxsSx2n1mt3fGqNGfyt7TZ4tAYyij3FCoXGBxie9KjyXmyrUh8jxyfKxuu2xFyh",
  "key6": "vqLVkeyUd3VRWU3m8pftuyfiCVHEvdmsjqe6DuRuYzr3QGUYBcECvsK2BxqPbZaqD2dB63T3bmDrxFP8XL919zd",
  "key7": "5n5Cw6Et6ENsLGZ113sh67ydbouEJQsGXVzKXMGSEtX4nq49rvLLNZG6PJaDK6bHQxfEie6nEa7sUowMgebsGFrS",
  "key8": "5rhicyVfhnaQUShLg3xMFtU9d7sXSkKw7i82haeXzd6MtNw16iHo9H7KQRYULcDCytq2wHEwFkHkRWRpLvVhQEtC",
  "key9": "2gjS1n3uBbiJngJwWan6CfKXzCrC9tg4hLe3mpjPVuNYWuuiV3CRX7QceQmzyhVLskWrsQ1eJkLgxkB6oYfmpWCk",
  "key10": "GRuCr8APuPZDpyPZDs2TEBXwAseHn4NTzZWYqoSd8Kqk1jojj35QVYXYYcQvn9a4do9ESNiPY85dj4ECRBnprLM",
  "key11": "2jhYsDinQCpYRtGxvosPGqTMGpdvrfeW7fNePKo8qwGUdpeQwS7yhhwaehhTmix9jMYPK3P5y8PtwtrnTymy1qyd",
  "key12": "4sx8AYbqPCUMMZaCh7ATyzGCuv7DsR5TABUEqsP1nhSyTsDDvpRFNkuu2PC8FoadYEjkTUUvjZ1qYEhqajd9YL5m",
  "key13": "4Cu2jtSFvZMwNtnYiHFas1ZhYD2Kpg4A9AvAGnu7eZzjFNRB4zpbR2xT4iBNc6X4zH3qADa4AaKfEYaMLvsqy925",
  "key14": "J36ahXKWvGNDy819mPHywi6b1PSH6azq9CrmkYMtLef8CzbGQ3tFgfRjXXMSJaGXdGvA5skoqBn6RQoAfPFc2bp",
  "key15": "4hfHCeq5bvuM7nZn9B44E3MHjrmQD6o1UGokybTsAsi2H2CWBD9YgFs4DfjamULbr9T1ev4M89wYcLRQUhBa2cuV",
  "key16": "3bcscFUNWJnrjFCThzj6zAndDAMQECzUCpbQ3rhmiWLC57GaVnnHK6Px3asRzHq8frhad4MT2aDw9jRmfpsuo1oN",
  "key17": "gFfLw7a44kdZZBysYGdH648pU2KS3C67hKYHy5xNVKwWbWdT5gVPdZfYZvMaScyTV5S47H7c5QbxeMmRmXppXad",
  "key18": "2gPSBkPKkpogd6Fir51wJzmgF8YKoanW5Ggk68uhdojeZVviyKr1ZDPcrTFWvhfSMcxVaoprkyo19rtAEyf2azUc",
  "key19": "4hbjnvGCD2Fp9zRPTZ1qL4axUyxf2mxVx9Amoo8KJ5CcYmvtU5Sjhgwm1dfV4YE3HpjGpmjKN5AtuyZj31Qxf3pH",
  "key20": "43vcX7FmD7inHyQ8nqWDgR5DMXo9RpGze3uiVdpXB5ewqiPn1mD3giihBpixxFmwX9oQx7mCwf2rCE9WTCxSzUAF",
  "key21": "4ohNnieu5qtcYUHW6hEr3yE71GhcZVs5HHW7ueV4ZF7M2v3cEu7v3Eu5NNmisFJ4sR1eN25kd5sXThVf3sEneeu9",
  "key22": "4NR3gcVAm67TshQchT6VsAdjXe9woyvrYLBz9dbTQdy7wiYqQy9mwxjkMXQtHSLreG7s7nwnyMQynMuURR5Ds4ML",
  "key23": "2tqe14sFJc9FyuRbgB92wb7DCvmzATAtXqPQSh7fNs9MisxY9q7YZ1zqoazcPxxZS5TmpzC2Qii85GRrK6HXeGkL",
  "key24": "4HuTjfwXyxi9jfjPVfyQGiVUeGQCrGLu28WoWE5tGu1uomvuxhSVK2vySkKmu2QZULmGtftTRn1MmpX8Q7mioEiM",
  "key25": "2J3xm6RC7ZhWYrF33C2Hf3kVj27NWxLBX159DqFTgoXdX33wZcMiVJjpZPT7W1nGb4pWoL3NoFHi74zwZ6BZzYpb",
  "key26": "4kS4Xcy4XiaPJhBXmJ2P3dCfSC81jUf4F37jfyTECMCD9QZws74P8pjDVr17dhdnXZV9UsgCpxBezVXEk7QqmHeC",
  "key27": "43xLvG3CJd6PDD2xevxJfaTnEcfxEptxDLsNzAtV12nfrpFC2B1f8CMgBjBrtG13eNEw17HfLqmUPjMA1ezJ4Ea7",
  "key28": "sfPmnMTWK3HhkibB2o3CQMPSyfwpYC3f3g1sCy1KGZJe6HM38gm37g6m3nNdAhcfpQdSB2QFnnM5nZhSgq9Xanc",
  "key29": "8zDjcm5mPThNPuQtdxwqiVFZpDKdtiR8taYRSmszkA7R8DyJmt6znogQyyFDpcrBrb8vXDDbJwAgb6V36EMtN11",
  "key30": "3CdF9qGLvawgkqQByXCecDeKX7iDUeEdTUwnVAPYBMDbRtoTHbnoxWwBCuEGZUu5pAoAUk7Hmtqo67ZtHapoe493"
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
