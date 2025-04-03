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
    "eagdVHJAZTiQmnW2Nk9TVDmYyoZSUAh83PLNAVENhuszBaepabcrcmYo34iTPLa2T2FKUK9mZcARYv5cd4UMW1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjMgDHdMNdTcGhzcAYj1MxRzKmH7owwm7g9DXLuNY83fuZLmzU8jNmjq6NFgk3rdFaK2kzA8V1HdMC9AuviVukH",
  "key1": "4ehodQ6F9MmJCmSacWC9vS1nA7eLBCcm5qBDhLJywPxFgLBFHqzAPw68mURHXTK2XDVaXuFbm6TmvfgXBhwVhRES",
  "key2": "55wDn47jE4tSPZpGLLVCUWXuiLULonLy27H3gHLPu1qv8Ejcj6L9wg6iURPxRKzK5sBkvgfxLr61inRYyxnsfLcc",
  "key3": "31cUWzeTacacF59QyK7cWMkvdoFoaGb5YD6WzX24WTNTRt31BoQmeRLT7ekKX12jznLpPkzLqJfAvXNtX6d84214",
  "key4": "34K2LGcUn9g8Jw8sjXRqh81wvobyQqeSHvgfiWy1C95Vu5DYtZDtpX1WCWzMw79aV9MzjJxDs82pY97Rea87t2Aa",
  "key5": "3evvwVxosFCSKNaDvtEUem7REMNRX95oDJxNAn6iY9V3C7U8ig2E3hhukQ6mGW5doYgNZotFDNgHV1RFuqv4XUaJ",
  "key6": "3eUPwu8iBSrtaPTmXG7Vaw8Dq1mzjVASoD29vijN8qTL9onjiKPRJ4soWujJ1ujJfxb4uoj4LnaYrjwJmzZqSB4S",
  "key7": "3rY3YBbfT2Gv4ojvf1aGmnyhcZpgF2g7nheDL44v7siE8qgD67HT5GuNLqiJ3sVhEsmTXewDz6dpaT2xpUr5c9Yt",
  "key8": "41CCGfJ4mUi7r8ndUoC7TpuyPhr6KMNf6v4mvzPGBxqLXAMTwnf2pzDZCW6HHd8598iqJEqPtEymKcLKMjo33F6U",
  "key9": "2MJFzn8N3SNcdNtNd3dfZWySgR5xiwaLP2f9wnc74pRRpYLNMnBMXRNRMxoNrXvJch2TCXHM4z5hwFokHcWXKF3f",
  "key10": "3ydtT3cASHBq9d6LC1LRTha6FuCMT6fLMN4aLAHh7cqeiWQL6RuNqjZe4w8aHqvXobtz5o32dudhujG9wfQTPPPC",
  "key11": "47DG1iRqgLyCxpWYJn3x6gteer7akDRsMWZnfgBw5JjNw4Hj9kG5zxzH9vZpZvgoVPaE1rAsmgT64fqSR92TyFfh",
  "key12": "4Z7a8tq9iagCBa78GijyWffDmLzTEGNPGLF6kz7DTEAsjMfy2Urj3Lt4XpVw6RbcJsvCCR7qiVpjLcmt6G1ScGtt",
  "key13": "26vHKoknNf4QTDjbC91MzTLYfzdqkBKaVY5aPwyoKZiAUGAWSaPP8EBtPjuur2derC1jrZPioDwjTPZdSk11YwsH",
  "key14": "4HUN8n3ySJD3Jk1KoEKcipxULexFHsCbgYykvhveTVFBdk5suQr692tNScrKmWPre9BsBg6rhQrboswrmcjAyvFH",
  "key15": "5PghxhUb1zrqNCEsVZRtDFzKuts8CcfiYwqQcgeQr6txEvbtpt15WTiTBb57qEFc5TCviu23Lpcv9eMsW4E3Jnbw",
  "key16": "3xADPk5CiGTPQ4wxiDSNmHEmZQP1QvUjpVp37NN5Kddnvxoo8jKYVDC8jbdgfBbZCcdiQ79aE4pU2pyMHnowbPVk",
  "key17": "ZWDH2E3XUA1TnVrmo8sRkXQTS9NZ2hVKejQ1XUVhmf22nc5DXgkbwvm5wbmHGysTQsjuNgWCBPqUsFMpMXSUH9Q",
  "key18": "66KT83yxNJVjfZfLTp2Uf7CkjdUSojedoEPyR5jWuZ5tU8e7FsLtVyHpdUo1zZCvKm9tznnLMd2rEDTihGAE5Ngm",
  "key19": "4ZiFXrPKbKFTKV1h4FMmtw4pNoiAKthnmGUfUybggJbVocdgAPWZoRTWgvSwcoNinUwCakMU7XqjUEWqxLxSwu6z",
  "key20": "2P1rPsDpXYjNgbPCAuf7pBS3n8RXabLJfQU4cNfaidN1t2EgEu5cmYTYaUYRPBe7krtY4j8sMZ2nurCBsNJ5YbA2",
  "key21": "2KJRTiCBEH5WzH6mL3WyAxUKAnL4YEx9psUkwxAL3j4dZbo1ZZRGwgecmbxMZLyuWgmQKYhbXG1kNRKcJKMLCxZ",
  "key22": "hZ1tjphGXWTgUPC8LrdbUqFSw3sasnr9FhpHQ3JPJ5baCq7WpB4vtWmHGakyo6hXb1WvbC9jKkAKV2NE1kMahuR",
  "key23": "2gi4i2WNKp5L5oJULnZHMzpPkAnaNnEGG6wxeuLnudMYh2HKtxXVbM8vg6eFUzRVVMppQ2qjNrgaNmLCK3qD1V1t",
  "key24": "45eXo1tKDvbYiTGF3bJhi2rcoB8jn47VLsKNiP1oDuFbPRRJwhhvnckoChiSrW6XcSNye4kDosB7hyGyWtnMv8nr",
  "key25": "3KEEo9Xzhx7xCNNBk8DywU6V44fZNrxMa6bQfnpr198nz4VFiibvdWTSbMw3Tb3hqCg6XbDArhDAmv7121Gv9Rgw",
  "key26": "4Xx4WmVf2SXeBs1ZyC4vWshqh3cDQALwmvNHvjp7VBxSnhfJLan3rkYrAe2hW2bP5jKyTa5VYihgHRzzrUJVVUs",
  "key27": "4JdkzvN74bjERU94q1Debf6xSeR94wYdeW9L7i6HrUaQsScGQ1Yhiiiu9aBmbAxh747X1s4ZxRB8GDRC5Dcvt7rm",
  "key28": "27wyaPPRiRuhCNVkt5xrWuDpCK9Turddb3LdF1iKHQMkywG3EjoTbvuZJR6MYxGL1hsoMfgjP92K8z2ZLsT1doyn",
  "key29": "3TWAgm1BjdrGRto9JdwpEfKFVHoAc7mf4LUzAxVs28y6pLMPDyrPzVLZ5TjVhcPY5t425Lu9EcYp7qjPb7AuVWUm",
  "key30": "2ujB271NKFd1AJQbyVajNRxEF7XMG7w2euVaJtLQ7DBtz6annD3tgfvV1nWSkHHyCBaQg5VytCbeJ3Uj1jxo9A45",
  "key31": "4RJcRjNFuC1yd81yvprSxnaBYt8oKS9FEavAGifY5tX2zNwKjFdT4HWmsbTi64Sdbg6BRbDwWvjvSEpySd9wh95h",
  "key32": "5tqqMvdzcCNni4G2UEwQ8SMyEgByynmvufVja6nhCvm8yQxsyD5vdnd5kGkvtJbZ4aV55364apFjRw1Xttig6ca5",
  "key33": "YzHuPiCWVYGVDWaesDnQpKUotZ4EuWpqsxi9oRNzuACsiSAFcGt5cSWBJjCC1UVBoFTWAqHD8KjmAsPB226hKgf",
  "key34": "4ZquMX6uSGbGXcmedMAF3dkNJTAHJGtTknfMPfeHcynJxAe7d9sZJDCRwDa5U2ygjUu61zCYcfuLu9Bf7PWvD169",
  "key35": "4adQWzDR7goepNGVoNuegB7T32zcJN5bqZC4L4wg1gwBsN55rZg2f4yUMqyrEKPvXvt7qFkemrQJx2exSMdoN7gn"
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
