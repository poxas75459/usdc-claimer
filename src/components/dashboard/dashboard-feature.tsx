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
    "4DcwTEv57u4M8m6AJdLAV9iwWaAMXm8HjrVF3bsUMj7kbpKmo6aCQgRqRcV1d1TMgb9RkZ3cXp3pF2PodYKwyc7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61voj3zyU9wyrraFspNH5SU9ocEBgWwWtvrY2kSocB5jo187LANoEXcQxq4oovro27hhSRtYEdPfykChBbQWxiVb",
  "key1": "2nvPv6uKdro5jyxdKgFtQsFZssVax3ejv6k9G68j8x7mzzNzDyz2SC7w8odEZAEEU7C3KsnmQCgBcCRWaP5dS4mC",
  "key2": "3JiKhPAJV7Uwy9DDFR1SRbbH9QZDsioeVSkN61WBSDD4FLasgHgvCcYAyzyNd7f5Ssrtw6MsrG5BRGaJjNXbnN4L",
  "key3": "2ArDznMY77WxFFDffDeHsov6cFQiw4AxbpV49KQ8Q6j1HUhM6oN73iF4AKvy1wxWLYuDuKVrLCXS3MWye21gnZ6Q",
  "key4": "32RWLxMnfzZPfuWeVLhNkEtwBhHyVgV2cuYHMrGjYDYySj1HBQgJLpiSz9DtuCA2jzrc87F7azerhKBBYHb8o4nH",
  "key5": "4DWhi9aNVRhrJi2rhxs1qNu55eJ5p1qGLrVAmgWgJvv5avUKAR7R1ULNE1hxVViFpMSUj6pn3qGZKRpmQGspvgL5",
  "key6": "2yZ8FrM3m3qnBnKSEf6C4cpSyGb1RQAbyQCisiY78EVzuaiFQMpikfj43Ce9hCogh1GMgvBr391v4m7Ednwziyxp",
  "key7": "2faH6dzyiXGLSRJyc9zRMunztDVJZh7hX4Ze89w9qY9K7rWaBzSm9fkwkDRQoL1Nh3Vf6Hwmq7yrP58GhFfdokAn",
  "key8": "4qVYqNegFwQVJJotMDhsAuQH8Emktrf7usev69i2Fsi3NUczfcwx9fHWEibnZn99eLKTi9GHzhW1ZM2XajHEmgyn",
  "key9": "vdZNJWzBKoMYkkXEuT2gjG6KNePunrXDX7EHK1mtrptkps1tJxQWX2QBFvB2EpiDzHqTWK68oULqs5QeGvawzw2",
  "key10": "oRtmxdUq5PHqVfawmPDoBgfUjVvcMrkU2poGnbcMJiRHdYt8hrkJR5MADpEErS5HLWrzG9E6hfK8fUkCpYCCKM9",
  "key11": "2awFatkSVzDShmJJw5oS6Wr2hJxUJChdgh9QjZLgpWvy6bWXtcywX3Hk3e9kvs4EceAohdm614ZuMFBG2vrVkqMV",
  "key12": "3n1QNpE4iuRrCrAUJ4W5prS4Loukk2BEM5peqhRYpZcWpCoTPHyAifnovhkhXsWYnpcaM42sUTXJS6waVGrSoVpp",
  "key13": "3bf4gDJBRuChLzNd4YippoTBWh1CZ5ZxGRcLYpDuGbU1JRjkDuRgmCeUL4Y9CQZiiVUxzjHh5ceKzbBmazxBzW93",
  "key14": "3sV1f9Fc1W1F415TkKd9SnKxZcFwGCoYF2hKTABtDhQYmYhjAsh4egocdx2MKnFwUA4d7wEJA92Hs5DfajzYQAuA",
  "key15": "qqLrQWkxZ6F3cTrutYxfZpgqvRwnVk1XptTcjyLhE1Tex1xSFng4TGoUo5hbKqhTpMjKJ7h38BvKhEtfFxBmwpW",
  "key16": "Goe4xyj9jKSkZSiM2gqwZh5on4xcaQHyyHHv89JAn4tuL3vcqJ7nK8NvxBn3ngTewjMpdTpyX7fyhZSJuxKpyLS",
  "key17": "2jgpJkGCTA7zutDJTxQPjMJg5QRXRACyfD46cTHYuk24WskP4gLviBP59P347xbMNsZEwH1Nzc5ZFK8brssGEP5Q",
  "key18": "4TZ7nqEmJY8hFKEm5AEWSy5HyE1ENrGjzku1nxPCMNw2JuPN9Yxf1kp9ubEGQ9YqwXPquPou2mHFujfHZ5K25Yew",
  "key19": "5SJeSS3kcbGFBTyqhyaipGS49TBnbM646fomFpM1vm1MffiEU83tPy8GVfGRMFsh6YbS4ej3zcg8PgrXHWXRMoAG",
  "key20": "2vedTuQQoLNN2a43yf9iFar9xn9UgmYXxEGXEVcdRuJBChZk8QjhquBZ6NvGyTMJDv1kTsQ9wYCR385afhKHupTc",
  "key21": "3q6nEhSLpQmvEaKvbKdpuDspxdBonNvoCiNcXTbj9cRMGGrZr9v2AbUSnuSxyMSgr2BEBmdmBWXm5AWGVCtiL1Er",
  "key22": "2tur6bnCQkj3zfiCtQdC1faGBBwy7EPTTno6xe72pHCtw3hCe4F3w9pSx4yMaZqLGND8JR3Aq3Zip88nY26nVtVZ",
  "key23": "3u4aujfVqXwanLoS8RcyvKNKrCaXqwFMnRsDkKgykwjyRj9xTTUVp4pDw65XCWVg7yNPEAmPcsUcT2j3HqbkqPqh",
  "key24": "27fJP9H7DMu2xjZkxvHoSQ1yZs46pZano25gX8rX6fFMcm2ojy1ry5oEsdLetAkcLFkd1XTKdgVrc1DMCfXDTjzV",
  "key25": "UC8BnXVtpaH2FkA7dTqFqTHtdSMgRAKjCpFhpZ3jM1DEU4WvS8fJwrA1G2X1xpRmRAGz4au7SP2P6GhpmwtLp6Y",
  "key26": "314iUoxxPU7nja4vii2ozmsgvihBpEPkWWjL2q4KbeBF5Eka8ziKivhaN3ToP5W6xnrAno9UYpXtEyWf1GUYnXRd",
  "key27": "4f3d8VxLZSV95CK52DQYJDw4TNcY8TaqRUzzswA7rUkDZDxK6TSmVMNC9eRop8Cx11CF2Gguw5QPZGMooi9zjtiM",
  "key28": "4nzwjtFEETyuX6mvZvuqHSodEHexWerAugCbZ1e3ra5RBfLTq7tDZhk8yGEQG5JNoiz3QQY2X8gftAQzLoQMhs16"
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
