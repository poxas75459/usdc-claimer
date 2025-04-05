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
    "2L2tKwUMD6x4HB13Bn39BYuFchM2XNJboVPTHuWNan41XukAxf4HfkB29hzKSKXB98GVtqKCL3DZTf99pe4sPmhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duKoyijMiVxETZj9vjugXc8mwaPTrakr94xjLrdwgv2p5CkjarJjrwkF771gnYLzNDCp4RNXdH87uruTQ2aosxc",
  "key1": "3T7T8WWcMU4RPiex8j9354C2ceyeNFFc6eGmC76pCMqzLf3oRLGCJmiYRDJ5Y8mZ2DFcqEfpi2TjBcr6KCYPuZKM",
  "key2": "2w1e9CLhu1MWNcdeQmKgzhZDgAFLsBmvduDgVkXF16nQDg9HSGjWbfsLp2xapXhj2WEHpmqSzo51yM1zGTMF4GRd",
  "key3": "4nPv6w4pws1r4Rhb591ZkBYUiLkm9buPhKDwuGW3Td4yW2XxUQTzipZ1hwkSquKoc8Gzx8hZnJyKYo8EUkzv8A64",
  "key4": "6nERDri4UZjG3rWXZ4hYT4DDPTh4L4XPfndqERvsqRtHqJ3kuonsFxg3JtnsV1mEgLXWZMPUMAXgt7cB4aWUYNP",
  "key5": "3CXhMcjpMAMDksrUtPCKDAUarHhfVK62GSVPbnDqUp5VBY9cXgt1TmxzyMwtNTba5JCQCSvwVcWkg6ra2vSFQDMa",
  "key6": "2dAd1wWMkUY1yCNmhp9e3RMUGZZn762nPxJE1yVDcCKkqs6CwRhcM8kLqJ8wbitRifvtpzv23qMFyXLeLrbKbd3S",
  "key7": "2W4gvoWqXCTZK41bYfGS47dMa4KvjF59VxBKaKQjKyMQY7jDGRJJD37zyNb2EpxvWrHxZmB99LtCrkctgP4kuMio",
  "key8": "61AV2M1PWZtNe82megLMwzAhhLJLHFJqh48PTcgESMznyA1HXRRogmrqATVrTYvHeGj54paLypfE1Ew2wXQbe8Ei",
  "key9": "29AriBBjiU8upQD93F5TpuXWg1f9TXa68expwPY6Yd6kbh7V6nRNriDWWnzwoesuqP7zdqx95Xfbk9RDTNouyXPi",
  "key10": "3rBnsqjHCsLTTxbaM5nPyfzPbRUngHKNy2MjVCEAj8Y8Hpj2i7WRstTzMLyMMvoojJirjaJDjprgDKJKPr4ajqDh",
  "key11": "phrZewAhxLfQS4rGEzdK6JLL5NrcKv7nNyUAmpXShQmZL6vF4xnV12Tn7xArok9TLfk44zbKmcJBtbAi5TvgyJv",
  "key12": "335wYd45pSvWYziZsBmJw7zvVZm8XoNRSqsnPMt1ZJ4HkukpcPyNhGKcqvtQJpNxFw5zGYvoL1g4eaWUnWuFvftF",
  "key13": "bkCutRMd2u5FZ9sjy8wP4CjvPJe7HEP5eoYqXEcstqFw5hCCMNfdqfjMzaVojBMxRLx55PNSaLhJSYr8ZUQ467U",
  "key14": "4vZrJq3KHACRvqpv353vHMcANzhcsQfahJPdtSPgptjoe9ZdiQUuuy6DwrLKY6dsBdxLw8zjGnCsxFTp3GBQyeTC",
  "key15": "3gJzdNtjspNjSwDNbv9h5EvV7ypA6oRGnGsYHN5fm143Qac8bKG4bv5RFCKXnFQ1FXNfezLMe8bWCjy1hXY1f3b6",
  "key16": "2hKg79RH7XAARds3rPUvbYcKKV7GDjEDgjkJsu2ThAaK4jA6XyYpakL38khnD3EWp6KQaLzPbU75a2TwoEaC5pzq",
  "key17": "CxLeUruKMEYkSW99QtaCpxJWdKf12Ho7gzrz9fFa2K6R6bYGvzTiHWGDjSrYodvrRArKTLKxvzVkggpgaMTgpcB",
  "key18": "tfS3djnpKpK7NokcdSXrqwvyPGTdfq94aJ24TKUZYLB5JQbMXHS7JvpLCu6vkSEeMjsnHWPos694GLaVNaHPJd6",
  "key19": "4j2nbgEW7ZTxC386Fe4NSgjTA1iKioV3oBHTpb8po4k2PxvKvWk2HP8oNh7x2LqrD4oJn3SmBSHTsu5nPussFkqo",
  "key20": "LezXL4Z2g44XkLJLSvhY1iJtEFDgheq4Tpv9QpGkEBMfpBa9oEggDiRZWzbxJB8wNYcF668VkGoCbSNQwh2ZXjH",
  "key21": "44eS3xJ9cjfikmA5E2ey9mCDc45hgSnftKHBdjoyeM8yTx5nWTVFWim4VHpP22wY8Zfq8CrDQ3VDmf6iouAwHH28",
  "key22": "61Wo8csps4p7ydA7EuyPztAhoziNFDKzQLv1KAdhu8R5Di3u9xf7LYyRcas7dCD1M23tEeXSAra2ZieaN9quPMEk",
  "key23": "5qVRRK7oWCSCr75F9XyDnXnY7GpF8qmXTFnhAw8zprUVveZDAM1jWpdvxTCPEqtX8fGYNQLN2uMm2Y1SzxtyFP9Y",
  "key24": "5UU6tLXCGN71XEHf2mKJX5JYUWxoR7yUzEGt7Z7VEyfvCqaMwRLNSbMJj6D49a3jfUrAqsBKant5QFk5k1iJR8m4",
  "key25": "53RNqXcbt2KjvPHWfm5y6D9q1yeX81ukZJAwPnas3pidneAN5tKcPMLENW4SMtLykWYQoHkBSQVGAdASzpBCj2wp"
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
