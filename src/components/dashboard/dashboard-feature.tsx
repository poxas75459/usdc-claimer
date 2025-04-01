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
    "5bnA2bCF1M1KGizGvYzMyvpoCWJvx7oazkJVH53ad1RuERF4PAgU54ZM8XsAK1SxiGVhxQEUDaunTQ2Ugxg6QdJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b64BppAASVuThoxsiQLWEUbdLH59eUab5PdXbdH9pofioAkVy1EKew56uKq599KQ2JaixxeFmRU4YfP38WEqmJn",
  "key1": "3NhSiuj3HbeKXTKr3FaHDfJsjrEBbAVjpz8EcRVKGZchbcvmQhHtc8RR1DATStPDy4Cyc7STsByRNYomtmQxMGMT",
  "key2": "4SSfAzFo6Ziyp9ouhTqW1pzNipvWkz8eg6q654HxxCvCgQnS8CkKPL2sixZtie2FSBDcPppaRa937qggouHueQot",
  "key3": "5aJ1cdHW7iPu1rss2tQEvGTXHm99ymbjbJf57AG6F9Z4LGm6tWyagUC4y1VBiiMg7ijxtzADEKRgimXWq9ZnhJYD",
  "key4": "3ttXNKAVw4KDmSRoksrUWtnZYHqL6N33G19WB1F4TzhK1oJW3gaFuDAt3ineGcHUWdq86EhjWYwgFy9qYNWVn6bk",
  "key5": "2vJC9vW2xLdy8GEXNc4yGms9eCVGTEytUWTz2i7U2ACv7ApY7E51km7RQHdt69jxeFYxuM7Z692R2gomrjwai2rB",
  "key6": "h5g2V14SNz7SnQgnp5bt5UcKRGT21fcCF5Zc4K1NRty9C3WWW8QD3WQFa5XnXFSF2En1jBL2RKGg9F6VtmMrCAM",
  "key7": "26q2vRLDH5tpa3A6i7C6kRuz5PncDm8we7Vjz5cTwKpRceTad5M4u93yH6Q9PtnstTwEWbJY9esRhD1pKptWq2EY",
  "key8": "45kZkYoB7Tre22YENt946apnRa3xiit79X45VRDwH6eYzy9eockES32Sw7q1LQrgi4jzWPykiL8BUn5C52n9JcLt",
  "key9": "5GLSEjMuegSRPzxx3dfueF9oxyqkenm72wpbyUexwrLgya9o8Bw54yiyRSLsaLACtLwVjRZ1fGKyfE7kwK9Gp5KU",
  "key10": "4FBfDgAbLDUtbRXw65BviKjsZSUKndj3jwXuuGEdsvsTKViRu7apABBzSFpvarmxPfyHLgFvrffVzD3EqvjTFZMt",
  "key11": "64ow1KViwAxPcqRvNtAkMddkJekFWx3YaZxgstYkF5cJyHZ3KrekkczVYrfVNsskx47QcRZVvNPeyzymjSFhHsWD",
  "key12": "UFoZHHKuKQ533idGdy2dgZnsSSrzemN8ca9GQT1kedCit37Pi4ChVp51BVA7iDyTfuNdtfpzACeNKiWqGQfjRNU",
  "key13": "iztNYCAyhTeKx6KgsTcGTpDVUHTryADbm5fihQMuEw89A7pty93krRPufaN4vxSprMbgi4crnDKvtg6CdPBJ4XU",
  "key14": "2oWG5kaDiapeavDCnsXUMXQ54R57GgwXZJhA7HixbMysGcAofqUef1v1Ka8cvwrdV73zdyYPoN2tfWqvSn1Xi8FB",
  "key15": "47hvNtfSZrotAwVbdwhPDcn3PaJzoQhZEkPXF61whaHT97vDBriejDdhe2VqPm4jsMxipZ18dLiRvbKqgdCcrvDe",
  "key16": "4KzRYVPmaHZPsbvez8EVttH6yUWv7dXgBtbgebg2cgBJkEtKDWmp14HprmR6vY5YQ6x7qFcxzyT8DAPCNuX79JwA",
  "key17": "48uE8BEFBn14z1Y6RR6RF68dQTAzddZEyjLi6QcWCzS3cqt8q8jAiqr9zU3R1XRTUdPxsHKLsrQAVWKYDxxBCi8r",
  "key18": "5faDBtyAqumvUD6VKD7NRsu71kaa7pvz4rXoT8sCz8QRQxxheimgy5V41nXQcikJex44pdBjpSKF71UMmDKV3hbZ",
  "key19": "oReM7sLGgHHu6QwHS9NDebAhU1AzY86yjd7Wg8b6bFoukafeLSrTTPJKUxgoXDGUMqt8SYJnQDN8gyt2sRFwNXr",
  "key20": "5pMX12MDbmpGeezEvAeszj9zWWMoAjFejJP7SwnZ9fbHHvs4rCUzkix8UNCaKxuXbC2rn4noLoDwaVYzcDnWm7A4",
  "key21": "3juL8tTFySjj598xb4o9GyXcziFyzNZWoQXeumVER27GjGNxDy28RJHNzBw4DRapEvV8TR9WcKNiDUaKAQQx8FS3",
  "key22": "2w5fN3QDDqRU4hEbmiL3spB79wyaLbWZ4Cb6qc9mRvGewrrr34GxPXHqBh1CwCno1r6NqKbUxddL1G3cq4kg16ax",
  "key23": "wJ27z5fM6c35oYoNVezrtBU2y51aNpLpwQyx4qCEQU7JfnaU1S9FYs48ktNhXzXqUATLfho6p7f5DRPCChzfCTq",
  "key24": "VFTaYvPdbjzsQK2eMgfyMwqccD3gdLsAFtNzE6Nz5dPxsxKUkfBiqBGUmdgKJfLSy8C1Nv7A71gbXQPD1X8RHSk",
  "key25": "2vbLNNjEpZp1VuYfa1FuVFoefG7CHYKTy6UTFCueAv1nNQDDZUMddUeghyx7vBWE69wByFWGoCvQr3zUw5Zanhdq",
  "key26": "2vEvNoDKjHLnKC4JTzWifv7bVzSFhBL5DHH9JiC8YH5F7XcdftYzhxPVxj5ZyQfMMnYvNMDcbtKWcN6RnTrw1SQx",
  "key27": "4RJDyji1LEspBbSY15xD4f3NtFRVxDoRZsCFawE4HjLh2g5Ucw49zqpkbntKAmZSLiTRYZ7yTUtT9B7TGeunkp11",
  "key28": "2JojKfNUx9AcAuxkKo9S8KS3Kr29WETWVsxVa8xXCPvuHrL75PPNsXASdTnZiRLMNoC1aNG9JTC6pf1huxPvkmoi",
  "key29": "4LnQbiiesUBsnPELzGkgnbdMVwpB1PjjZfFnwHtG8omBnHPFyT1S5KgeRBvs2hHq66qgRh7ff3KCmqoGjyV2awis",
  "key30": "5JS2KaHUJmK46zoVFybRgMDNadD6asKtdHUGAc9y4GgFfB4GqsXxJbR8WELFUxUKGp9pMAxDUG3KgKjhmVX5EcnH",
  "key31": "5kZHcjnDMm6935jrGMfHAqJE7QnPwGHMecRukiLeYNUxLhsGznC94bPKYuxSjuNPfnQLdCVozPmWrhcv4SVLL5SC",
  "key32": "3y8ZS9jhyRagttq9UaySMjWnL7iTaKF366VHPB9jVzBYPPE6S94G1tQyzFQazJCsR6ML2Sd6NuCkzV4BGLAbHjVM",
  "key33": "NxtvDXCqfDNH82bbN6WnSLrsYYcSKiYfZWB5gRzVtk8kbUWT9GBErNrWc9kajpDd26aAQpNCnqTUwGxpFwUjLZd",
  "key34": "2KdP5ELw6GAVCt6UuWwL2TQp4xK7UsL21Uxz2etYyHhjZzmkbUKPW9tTbWfGDYmeuuj5Npf3VuZerm4iyybhxxAM",
  "key35": "3RbQ7rMvD9DeU8K8ds3dwDD8C64BBKpjTGM8egiLF63Z9xSGxqexB6mCFXLLQZwW3AcYzSKeBZsNmXMsFi1tKwDw",
  "key36": "sEbxeavzDkTaNwiVMMrXH4RGiuBPigYU5ewTawwbHywCGF1cxGdZsEJjALRJ9xdXMHwcEPaeT9nZrYDwht8Z2CW",
  "key37": "VWYXUvzox1McWpfrNFAxpgdf9kWYb8ssuf1Fnw7mzDQE8EeWy15ygjarek9kctnEoQxSdKXMMT1Dc9H4VJ71RkP",
  "key38": "587M3a1Hr5bqk9NDSuiTnBg4SU4Af2C8kbsYM68xC1dfRwQQVFdLuvYC6sWVeC8XQ3vJ8JBGufWtGY4gXdiCzZMq",
  "key39": "2xebUwjxJ2Mp8GArdDyvzn8qHCwh8WW1Z7jooBGGkJ3hvm9pG8aJa7iidU9GggKbTQvaXWNHrSddtcXrNgTsvTwE",
  "key40": "2wz9WLXFSNPvtzaNHAiY73ekfBWurJaV7KHNLbyuw1RShx7kMTZGhfrpqtT1GzVuN7i9JKFvS5N5rFu4fmRq32Ln"
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
