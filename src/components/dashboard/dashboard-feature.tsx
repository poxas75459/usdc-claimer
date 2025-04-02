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
    "G8To5Kg56QZykYTHoQ2PU5jsTEHsFWojNBS1QnwaVC1j49Sq1EBDCcizSQZeWdHDScym9PxPoFPdg9UqP1zCwWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTFSfYRByZRCBxRgKCTBTzXpYcakq6kjACS5Nd84De8vaWwz26ZeX4QVdHBUGbqkgUqjZhNcdFxrq16rqwCDQeJ",
  "key1": "5Ue6dcDrJLZX2915QpGHgwWayoCSb25gHDUhaBQ9yWspwyED65te5usnjetRc6e1ituXR2AZE5KWWxSC6WUyazsv",
  "key2": "2Wwn1esN6Bjyyn8V2rJadjr9kcCgwyVvgMeoSkqhFAfKz2HeCm9ZFaymJcmc4pDSkJJby1sUFGJEc2foi3GafoT",
  "key3": "25SanJ9nLQdRuXy12U7GSoG1Wis5QbnbY1JBxDS4iEcTc4XeirsAdaKNtzk4P7Y4CBmjDyu9oMJzGi4ta8hL9i6C",
  "key4": "3EPevW63G8Fz98NbmcGo7eGh1TdXwuHeJBHfxyetSksLnC2J5d7BpCvhMX5nDwovKwuYdfTifVWsrRYhBQBdteSL",
  "key5": "3bubh8Mnic7akCUJztmRPh6foDUwajjeCYFKbEMSZ8SV9KsJmrWZFwqFGtiSyQZw3pEGTYPHoGKhAQrsH1UbLZvd",
  "key6": "3MAHvfExwJYyHhz78EhbEptUVodVLCtLKWzxwCfHixZcKLW6857zBop5gD4A7GCamW1qUvNAasFx8KhyyY4P3g1o",
  "key7": "39ELZyKD4j4j7U2PWGMsN2U8sjshsf3pWPyRZaNwbkD6H98HywFbM77DkBuqBFZ9wLFsqXn4AdzMm6AEXPfXHbpb",
  "key8": "3Pw44Ejm2zBg3jMwAyxpM4y4EEQX1PejUnUK2Pr2MnGY9oKWuiX2qn7uBDUkQ1vr5uztWjWViMTneXGjnKFuzsDs",
  "key9": "5jgdLghrXxsvM5ZpGdiCPTFcFy7ZD351ggeVkb9rbN2xsKuoQ2NjBw56RshcbU7nqhLGFD7BETLBEwMcfaa8uBUA",
  "key10": "4iktod1iAeEEZvCLFZgymmD9DwrqP8UjmaYrPu8Xf1yWGaSdPXuzF2nvcLpzcWktghTFqzjb8exHAGshV2NxU3AP",
  "key11": "127eCxqzGEx36gwoXijE4xcSmw8Sw2g5rkmZncQZm5biLuVAhaPsoecuzUXRyKYGFuZTs7a6xLrPfxupePonuiXC",
  "key12": "pSNJGq5kExhDacgcENHAnqXCZKkJrFd1rCiYDbk1Xo887166EM4LULHSux5d1nRV4JNBPnf4QvgLfrVb6PUopjf",
  "key13": "2Wu6DeZQ5XH5Pp5e3AVRonnecCHYpyGM4stNBjxSke1mNG9giUD1zNxJ3A2y79stiaaMJVQdXu8KW1mkWYPFdX9T",
  "key14": "48Vjx4C53hfb4MQstuwUnb76JjkRJ6fAcRHX9zFpN8WHkAMy3BJthKhb3azHRF7GdoeQUJ5UWBmD9HkxmAjKnqG7",
  "key15": "37deyjLsDJfsvJXBN6zzgG8gb62DB69rhfEAmC7opXThcCcw74QntKhDWrH7mBgMhR1VN2P5XGfm7AUnRB4kwMZY",
  "key16": "4nWYDMwDiPyfkD5mFWBZf7J1uHKcwRDKJ9A62A4y7KRGvoYMTqogqUW3nAKY6KdC2RSwSBT1XudqCKGfXjrwXLPD",
  "key17": "4gUvnzsu9Gtkc5qVwFYZiRn7voNdaYJYJKTcFsvkx7V85AWjjQUMGE1NoMys5632nGPe6jNATZatJuTjJ4veSKdQ",
  "key18": "UnQ9kUUy3zkoyfwRovgpQqeU8FRU93PEcKB62KY1AtSL1hzABCtzYeHoqnVN4sHAp4Gvt2jDpAzjiyvCyGjxAoc",
  "key19": "2uTKSCh9vznK5aRFFejLaC6Nw5eGF9z1xmnYrror8ERbavbhchqVVfzhHdzJDRuzWqAjEaYzfgoP5g87aLoeb2Ho",
  "key20": "3sSkEN1SqjuAzYRckMF1E7b6aXpCqjoQrK9t78Gbi74pt7sp9HxhGQpNXySzMaDS67qh9L6NHYAuwiCEeRChCi8e",
  "key21": "z26midy963xYoe5fcjTrqBsgzSraxrz7Ta1DTvoZz6fsCBrxEcW9uVvtYVLEGojb5TXi6JNpKsHeha42QfjS5Fd",
  "key22": "2WhhGgPAFmfkJhSczSYtVNxpeeuVDrkMHjK97MTMDtUasCCCrLdhc62xA2U2po3FKSVLTqXj8NZEqd1kH65zcN4W",
  "key23": "5DNnyo6UUVo7r8nbSEtRkqhCA2pY619kZ1amDX7sn9YyCa691Ls9oSGkbZdx2ocJE6ATtCcmTKybt8rv623yz6cK",
  "key24": "5vPH9ErGhVoNP94HAwFVygaa62xHqn6bKsgv57hMswon529NHwqbincsfzkW8nHmQgQUh5xEvrDKPVCCQDybQFtp",
  "key25": "2n7AXgoaPJs2sAz1CUgYiJhzS2FREbfvssQAj5dsP2i3xqbkW3cDzfA2etFibs2er2huNWuCRyhbHsZCc7vYodsW",
  "key26": "65gy8zYActKXXmrfa7sbtCDaq8qjYsKonui8bnMLM9Njr9n5P3iwHFaJj72hR1MGYY1P2WRyooQ2QvrRbdu5qW1h",
  "key27": "4mkxmxgfqYtzBTxB1bmUt34chg6Vif1DKaAVTWZ8CdNq2rfaraFd9g1dGmAGKRcb4HKFmBZW8N3sTeT3uYy5ZeWW",
  "key28": "4S52iCNkw13P5CuRBeQU4oLFdMDXa49G7mVNXHo2P2J1nh1xZERK2gazAfLGy6DqtbHAEMue4H8Wk81itwhjVaVg",
  "key29": "5rxD7AsAuWGCuyW7KDsQjFLm2YkMr6vrPNo9LFAoSR4vzqJ7NZsA1P5E6CyG2H3LSvngPH55rqNCATxdvNGmqHq",
  "key30": "2Ndmwny1EaN6kLVvsA83fqforSeXZP3oY2AHa9LVRGGH9SUg5KGjKFq5Mg1ypcF8dYXNVpKB3mNFYE93UNyYoHJc",
  "key31": "4xRnCeXHXDuDdDZ6FTaRcDiZG4qKZvxmd9Yz7R2iEzYmxXBveXhqLMnibaf85ZRhS387UsmXh9PzCL1fDKtkeGof",
  "key32": "2jMLV22x7nbvqrUJsdYtMRqkDaQAWC37jqWEXBa9hoXA7iphgFghQKk3NeAy3Nz9fNCwytT7FFDq1wvC4DCE1CZx",
  "key33": "2iz7DEsUkJP7jkTrh6d2DqpEfri1AWZVpszAuRtf557pHDUEqRq61ytjedW5k9CnQSfCUsqVpfmg1sCNxx34e7Xp"
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
