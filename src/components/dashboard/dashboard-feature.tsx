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
    "3uFzUmCJtyT8TrCZHPPJvNxLbxANgdh42SDnVoMvxMqBcMeSzZ5bY5Z7WGRgpnau3Bf3rGuHzd1YVaWPF8fLmp5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AiKVmQtAaH4FDv62dBC9jZN6ebab8K81GWvuZz7eLGXxSyP4dYwdPC2J3A3r41XEiwA6vV1QUQonTavgtFbL1f6",
  "key1": "5se9gwY8Ke95zU9yUa44wctd8e9CVAzu9gsFv9gjALgoMXbFrto5haUpwZfeQhcYpAUvXjUQ1XPBXNXCLeVtEsEL",
  "key2": "3kqtubEeKxgF2RphGcjHXpc2Y2MSMftgF8ubLTA56FbB4fw3LtNgEtgZGPJiTMt1Ai42t4c6SvHnyMztJH4iUWiP",
  "key3": "2KnTv7GC5targnQBqN7ned5vBbrgvekWfz9qhCCiTPKfiz4Aeb6wFtpv69FEhqk9XeyW8fWe8DqtoKkXG1RzYFNp",
  "key4": "Jj2KV3WffMcxLQiKrfiQ5Mb3sP1g6NR9TQdXPwmFiSnKQgbHu1DNoyfLZRu4Ub6SPpDmkxk9awRS4sgizFAv739",
  "key5": "1iSaGdpN9zsEKeMsGn22a6zh3YnmprzFN7LiRRU7eLnd5m9w3kEuy3hvMbqQLJBdQcyP3joAJNuZwE74mgVHVkg",
  "key6": "3nuureY5zy1Lc4X9N1kbqW2bJhccsSSDwrd4MeyU3Z5AXasPEz7SYA878hbVoH5aS2Aw5hFch1rbktY1qSxDCe7q",
  "key7": "39Q2XL1NZMUPah15zXxF2QctWx8AauRgBkvpnSEUvpdvQFtY4qvNQuyY9bHMSc5DnY94xfqfQ8xtzHmHeKEFrmY4",
  "key8": "4utT1qzxpkRJUWezCUry681xXeJtKRyzmL319cdFRG6vWK6FyCzENe86kZosGYgL63ywe86r5NSNYYjEQbLVqY6L",
  "key9": "JxH8efsgUAt5hjinW5H89PoWuFgrj3eoARiojY9DmjTRYYhhzTstmKaHJc1EtjT4aXJ6WxWdFmTetUQMPMWGXPH",
  "key10": "4jnzPB8rqpTFNaqGQuqe7Pt3NXtv2vsr8ZSMUPcfhnxCzXeA57tcukdcA8zNK1qDN3v1kDmi5eBLQ5jLUrq4TYkm",
  "key11": "YiTHeZ2pM8BYNU9fnjbwsqZCKmT7JaMTY32wUJgn16YkqmPcdr8PBBawSxtXFfnNy9TSxCBc8Nz2xpXwo1WGs3t",
  "key12": "3ehFUeuDuxjjzHepABM9fHJ1EP2GfmX3z8p9A2fPn7YATmwcf2j4Lx5CZMsoFpwfN4USDZzB562nYFn4BvMbWbvd",
  "key13": "Hpiijfc3DrQuXpbpwHZajMkgqQH7xKbDEs8xHR2awdnXLqXwSZA8B3M17Wq4u9VuVbBtuNSXVLVfauifvsc98r1",
  "key14": "3SH9v6yD6XLcuswzRQH5avjE7dRbdX1xAKF1cAv7AporJ7Sh1gGnsdttjF44HkjbqBQ35j6KNr9gaLDdx2Djg2tG",
  "key15": "kePDFDjzmMDxJ6qHnHA27NsC3FDeXzy67ftwaC6kxZwtcdv3yqHwVbC5kJNXdjjkPyngZ3oLXQ28GeUdLYV1bDf",
  "key16": "2hYxavoBJN1pXTirY76bATBiQw2dgn9uXUjsmyR8nQdSyzA5YeRoAaK5TQStSZuDPGAxxdB4Dm2LXJJQrkWG7YdG",
  "key17": "51C7t9QqdtSEdUxpA8zvMSEd9fWPhMYhCY6x8Mr3Tr5jtbNjXfw58az9zsoGirKLpdKDAWsMcv1JxLH6adfiUuRN",
  "key18": "2CFZhRQy7g8L6HEZqNrAnuRdacnm5NrAuHsZBxuNgzYkwCDSHNNXc9AcHYRWe9kLi4TNUWC8x9yzebQmorGaSobQ",
  "key19": "41Sy77YkKGwQdgd135UQnwfhtNW2cR8tJBeeCfW9FMneh794kBajN88NRU4ELi5NX9MumXRsqKKHM52kXDCZQmMW",
  "key20": "3g5X5PNmfp4scAiE95GzZ7ChP2YQAv6VSUrpfLwzQuUHSBAjmgWwwEyZAQ1h2Yik23yHUD2CFh5EPgcAL9KfnevM",
  "key21": "4DvXpA1voB55kV4B7mqJftrdFn8yuWNpAguvY32wKJwa5CEZbpQofL9YY173AgxLT4BLtG8KSUUYGQCkgnupjS9M",
  "key22": "5L3c1FecsaYzM2dbt26vVrWUzx4UaCVHxqY6XH4mmJcFGEi11D5vHsYr9oQQzsJPkWwfZa6zKTEYXL63NKPXAxS1",
  "key23": "42QaGMeZ2rS5W5JpBg4v8ZkQzxngGc9KMhkmihmeKLD52dyWzujPW9WpSPPtwoCjPwdVoo9X8kCH86Vzr3eqbWCB",
  "key24": "2rnXUsRUvarQgaAM4ToEXCMi7HeAPpcwRvEzDQtesYi6WxGBToPqxmeVn5BT2e9WCvE2oAogdMACf6oT2ujYM42j",
  "key25": "2WPoq1dnU88ezoimS2aT2kP3MfbVwMohxJbY8DgXtLHp7oQk88iqty4mPYdnu47uZr9YgVehsMocuC4w5r9hWwW6",
  "key26": "3DKop8LcBopNUcRXzErmTKEMSZScnSNqvcsbYygJvR2iPNWGxRCV85QETyRLKwEMDnhpAD6v2Xvw6eEY4HmkqWhn",
  "key27": "657gCaRmxsLx4KgLW7XWfFsdaad1qsmQxyGWe7ujzWVJE7Rot3wv868diEHW5kPbWVMsZud7aJBeQThMWb8TreKD",
  "key28": "ymPtsy5vr62RUdD2hSKCWJi8dEoZo3HH5p2ogR5Apdo2dWh6znu86dRNvGKmghyq6WKjThTLLg4FsBNtaMo8sGG"
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
