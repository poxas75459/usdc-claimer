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
    "2wJffYgxUftNegK2xv2Rw2c627pwc3dgMgBrWzwyxbroPyAccAq68ZkKbMjDNpUjWtmJdmU49tk62RxkgdcF9avd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4d3wnR2L7tgq3a7Hud9K3kDP2ojrPEswKCKmrtyofLrbi784j7i6jAQiorjgmKkdWeMNBxHK9Nx3UMQ1jsAMiA",
  "key1": "2BphjLerPT3pFGBTyBHNF6G57rBW349TrLAroToWeBbRmpADjUMky7E6xyY6LuLRYGmBezGAgt1vcHAw4v2cShob",
  "key2": "5tEqz2orW9QpsqkofUVPWVKRwAe4i4L2QDCzEmxCpyME6hT8LE8AC9Bmzq66pjwgT3oiepJa2cx5faQSDC4VC1N3",
  "key3": "2fsvUth91UiWKkCigjiTQAKjLTCWM6BXeJVtZiip3oZSRuyXQpt5dygGPrFvFbCwDFo4kxz88iWnJppCiWCr23eF",
  "key4": "2tWDv1JzDr9d3S9LxeYML1nnoPH8UpJK7WL96UMBgrRx62ioRV7DzDPsMb3ngkkyXUZkb39rP4mFHSyAv5azThDL",
  "key5": "5SVLJzvisDpEC57mfogJ8vdoEgUKy5f6ToYLU5RnDtNwegQcJQ3eWfzEFETEcDhVpPeJ2GnPgs4pDyfPJT7Zpobu",
  "key6": "43vCbju8jhiaqjp7H2pZHoDUJVRtxv6vvg3VgeSSiiXY6LJnfPFKfNzDWtXA5mqHpVZUEearqJ8JcFZa1BeEa3BV",
  "key7": "3CnEnFwB6UdDudBHjXeufriuXCe8QGceeUmFXCHfuaA5WMXLRJp2o9a85NAx3yftycsqQHaMxyU6AoSc5PqWQBnM",
  "key8": "4TcAxHAL8F4fNsVHKS7V2tiyw9hB6V8NzDrZrieek1kPFhnr1PncbzHECXSfxN7r75wdC3DLy5fUci8jioWT7phC",
  "key9": "5VGs4nFUGhs3noM63t8hJqZLF64MRhZJjedSercyDiJVCF2jq2TvomC64Q4oCr5dzuao1oCepAgzuzKd4G9Wdqnq",
  "key10": "4NyUdBTGs4niMPWqHThcyjeVpGTC5Sa4dSziM3ZS8nXUsbwMfF9kL4a9in2uhCdTD3LmriScfXFxLy9xHMFvGBVY",
  "key11": "49Se3kHDT12ZEa5zdacvAkmeTrQkKUGZciS2xmk6n5kvBpVvk9qQC9r2A8Fgo6His1ZUqfd4C9vBtij7HrQ8Rg9i",
  "key12": "4WN2dYVXo62UWBuyC1WtfAzWciqdL2aEjvzmu8MXKv2rag3WJGMhd5oRaAXQsxfKY2w6bB4fSPxVbmiTQQKDYv6T",
  "key13": "3rDY8XCZmzF26s7MSRJhdNAxbwqsU5SuPjSxYAJNEdWFzEZTq8RAZH28KLjE6KWL6NQEpuFMrMsLPgLRP2a4eW2V",
  "key14": "5yKieTbUcXyTJsfUbKHWqchpnnzroFXPbzcD7hto86uZ4EZLdcDhBn7frbtzAEdMHSoiwsZZdnvHGeuHwXGbVwq7",
  "key15": "4vdXMgCjzPHunpcPVFdjz7dDqfLV2uT4yLmKGGNdytRRMDExiaC2LKUhdpQ8JsKJFgfwjo6fx9AXfY4dpKPWpdfq",
  "key16": "5KipXUrki79jCPGzjaEGVk3WKYEgFGWUXhUjqNserfsnyynXRAVHsSMenaPd7bP5webpNiLU5Bm8tYwBXE3FeERz",
  "key17": "2THdrpBBz9exsvJRF4L7dQ2SF5daJxvAjDsk9rF6a7cAbF9ZqsAUJZFT559ymxyZtetMsR1QDtWDyED2fUCYP4Bx",
  "key18": "2ERzkBqdavSx9AUkKVguGnkUKLEGyEKnYDg8hvs6XDsCirnmYk6g9c4KuYhDEgfFLM586RiJu25qpKhSyPDCo4sM",
  "key19": "tNQizeJJmBUsnhgD4HD6PsEDQyuvLGtCUuxmJdxMrj7YHJvSd516HP5QD7MoLxxQe1rJfNkmerowTvFcLXEzNkr",
  "key20": "57cAKY5aw2kbSu9hZA2JkdErxQAhL2Jw1R4hXcDfLAVjPVYJKVe2Q87Uux9yzDGBwRgcradEWSmf3bSN2VbSv2QK",
  "key21": "2AamM7cxgnPdSxVei5TDvuvWNKPe16foy6Lcfj72jZeWzCEqysxupCbyfK2UmgeHxx82dFoNK1rtQRUzoDjLXKLn",
  "key22": "5grfKMVcf4vWTdWgCBtgLi5LMv9w1doCXMuMJttaSxghs91RCZUYo6Ls8Hx5XRQCVJDodjTqzmVfGRyN4PUiZYqU",
  "key23": "rN8qHVdCz78SDUyQUR4V4yWJ41CfmF4TK9SW1et6o6zfuQzQdf3ywBE95JTCeWprpZhENXioBv3E4DNagKCyo4H",
  "key24": "3bF4GkUKGkPsgJKWBsPRGV94KhnP4RmhDqZbYQnvY1c8PTBBqjp2z31sMHA8hrjh7DKmbKAAe9TwMcUm1NeA9nMW",
  "key25": "4Ad8LJ4hwEPBAQn6vixJbMUuQS6x7w1Z3xDaiMiFBBaAA4iK9u2JZRooWCjkNPMKVn9ypCoJaBfGLzNg6e6dFPst",
  "key26": "43oztikJwC5t1Toz4LLfYbxe3q8gx1gbYB3v3FaSnD5gzACyjuMpwZ1HfVArwgVbKi6vku86Pcoy3gWTb23PnkpP"
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
