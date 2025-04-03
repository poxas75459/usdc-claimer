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
    "655osV6AHAMfqSdym2SS15gtQLaNSQh5pHu7xyruhZcgW2BG7eYdLJRosSVZgHaqziDCxGenUBJeFJ53aD3HNUgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahtjLN46jEcjDszAidtYzn8vcYbHh9aM4CSzi9XU5JjbvAKBQDwBZN1CV2hq1nGtZFVYhemseK5UA9aAa7vPMUN",
  "key1": "2mCwjwjxFVpSvqbc7iLey9pb5bfLjMVQrETd2g6Z4STLaCVcRfijbHHk52ZwMBto7ZMWMaSNSg8nFRzuzCf1HGYS",
  "key2": "uoUTFvMAKts89RjLsXwL1ayNRiBmGL7zebngFAMdyjf2DLBuwK2EiCp56fmSMJSB5Uo7zzaCDAqPXDDKNP2Sy7g",
  "key3": "4vEbBDdwQRm2WTPmiB1c776KzT4tnvsSMSbDYpwaqjgpFVRGN5zzP8S9eGfwKu6i4tLeVtbvu7hLJg8f3KZjX9TA",
  "key4": "2iSFVH4safys8Marfq3Wr6TZqXmqDsgQhXCh4Ny6wUTP4cLMJgDe7M2SQSffwhERF4W5qbp33wEc1zTL3EmCHt71",
  "key5": "NQSfYRoNyGm6VNSLGAK83dbZvHGYA5NUmH8HRQrAs7aRqRv5Fcbc2KTvoyFAEh766YpbMg79m3tBh4qx2fs5NKL",
  "key6": "246XERPtUT2xcezjniywKrUeTAo71CwVi6N41ZfASGm1a6MRC9P3XHBAS7QRQpiyfudAMnRo1AarmWiGoWPTkwR8",
  "key7": "28FWYLXnVvW3DxSLRYc9M4k98o4367AXJK6J23zKgEurJHZLTbnuGFudNCbARgDUA3XHtw4L7CdJrJR35h6dbNUi",
  "key8": "2UmErbJEaScuHVvzJVsw5k5NcJo8A5vRwMMwRaUHXepoky9AyZ3WpTs8wqGMSLuB6RGonRieSV8n2w34Vx2ppGoM",
  "key9": "4JvQ5znEtSsSLgZvS81LhQzf4DbwvbuixGrMYDyxBr4pJsz1Gn8Xw36pqnPwcfrsMr64zmEAGLpX1cNYmupwNaMA",
  "key10": "2diBd2T9D8U57dfGvUVRRP6B2Cib7ic87zLqRjbQeUxLpXzBuPcB2sVDj5V7s1xMKuSBsUiypZbBsGTRMsR1hKGU",
  "key11": "2hUXhtsJGaB1uJzmPJUnxDJfF761x6MuuHKAgsRDAke96RfnP7t7vrDSXWjKTttV9tnwTPDV1pnnSZNSeB3MAz3a",
  "key12": "VR2b3JrymMqPSaeXrueSTZwcuaVLF9KZBNBTREUa2fHzTVpGVM9ALUS8Wk9kLrJAgmhqvyfr8nMDCaUMbk3SAWu",
  "key13": "2TyqMFaKEZPaBTHT8JPCWCNeBSeFvx3UUaDWd7m8ASBop9vnHDJe7MiE9BxPWSvZRw3ckrqxu5dRvYZ6NcGKTeXW",
  "key14": "3gADek7jNAypVUpbNCBftnoVwwRhZkLAFjspvFWvtJu74NSqnqxerEcvfR7zJh5Hdq7MYvdFo6NpNdusSyF2gPnj",
  "key15": "4YkeC7JfHTpvSMAGhBEP89rnJZw5XLLujMTF6bmy5pvvGnzkTj9bf4arvcNomcAUu226v7wQhfAfLz9wJwk6dBE6",
  "key16": "65TJCUhLuY5RvBMV9H1EJURRQhen3vMioqYWbeWWHQMyAoELVpdRDMpuBMUoWujgQDFsU7iMhvzeQ3zCHXjufN4s",
  "key17": "SJCMegHetvNjcUDx15SUafe3G7ZgisMc41ucPczwNW5fW4SeRohZmro9n2HZyKeCAkgMs95CCRQoWN6QjthMF6F",
  "key18": "4MWTZ9KLFKYjox4rAqxdjisEyKsbXZAyPRcuLSpPX2GLrPxhAaD9mUnZRgGqwwvoiQg2c5DTaU7zLY2eYyQcemgQ",
  "key19": "2qJbVqZokYVYp9cQWLHhKK7yVYwSqE9ZQGXCMftWm2JpQBWxbcma9BPJxbiaeCRhJEAsZZ9Ue8ASJ1HCYTDmqeJJ",
  "key20": "4QfGSMNaKMyANgH6cJqpHhTnvc2zKCsKZscXhLf4HFroDTePvtyBhgLmyun1Qmx5YNRZkFyFar36zjUvzusLLbAr",
  "key21": "5AUvXMGE8AzEM8BW4oXfbYKtMfA9aTgGQULe8yZMbGABKKcxJf68sCNxrjua8EzdsCd9YJAxPfvzjSGvPQ1QoAWh",
  "key22": "4FugZ4j8bHDyAEySAcT8Eq8ghnRnwLT1CNxdLjxCAcSBZx6eCCWYR327V4bYdYVNwdcX4ZgSCXHVuEBm7vY6Mvim",
  "key23": "egAVaCpmRjuKdEW4ZJw7tsmYbrncbGJuzH7XqEEBBt7zcczmMuxdzaaptMySAHCW6pNypfXtt1ttc61yXGuFCAj",
  "key24": "2A9WqqSDXmyfWzmQhi1SGzLxeeaR14NSULhLH4r7bSH3LedzhDb3fYzU7HJNxYcj8zHcQr4hC38WNrdphajWgnC9",
  "key25": "5hvHuhUY6bWgcPCdnTkUDUrmxsn1e9nsHpTmEdJdYJxp8cHruJSSf5khkBxMNynrzvkYu9wAXQV2sKj6fdUALrE7"
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
