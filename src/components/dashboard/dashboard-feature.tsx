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
    "2Zt3EVufHmpQm8JjRY3EvaWYVKZQbcE3n51G9mCZxpgS3Kvs9WKX8bqS4bnGZB8m6YQVGPrpwMjP4KAiUaK3GzJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NiGeHSUbDyJmbXAf6GKdqC8qUc5KJjHso2qn4ZG66YN7H5LjSUUHXmcSJDa42SjqNgy9f42kBs9tqqVYsFXMvJH",
  "key1": "4wr89yLLimyivUV77JXZxCjmvixZxXc5GN4bLD9EVagiSzSAjxPf6q3VLRQFw652co7hF1T1zk7DqUbSCRpCSEj5",
  "key2": "4639QhKz5ta4thD77CDtT8NUaEVZXC8VWbEkdzWcEWSccPzZWsmW64mQkQCXznP4VycxVgcRLHsZbmgH223wUYVn",
  "key3": "4HtQqJvLK7MsVfcv2qdBjpXMrhub4dbYoL9Hx2ykyz6kj3h6T5W3EkLMxzsfr2zeKWwU8wFrqXpTp7RBWT1QRnTd",
  "key4": "5eW8xLkMgwMa58F36eVApA9QA5RRR7ajEKPG2g7VNxmh64NVKCQhKUZbmRCun9AdsrVpuGLrz4dviPRa3o95CEr1",
  "key5": "3hbTVi4wj3eaHdtDRYHgzwtjsgU4mqMkCjLC8u7Todok6hcGvzMbPqFuU96gVaCzqCAspqPYTLaFNHCN1HBWTYXP",
  "key6": "cKovbJhNVzBe491h7aiiK3FcvtibMrp5sLsUrVzMu79TVfmmsh6p5cPCcodqW7digPqzTE4fsUBgcJ8fpdZtzvH",
  "key7": "5rqYSBg2FwoM5uncBubbbxmjMu6ERvDLYRgubXWhkiv52PmupsCgeUZZ5uuxLNgzn38Mrw41pBGSqGTsuzwYhWzK",
  "key8": "35ouMWSBhGSXXbLiDNu3a7RCxxzsB44V4kTdSkK4ssHkTYXPdDKyMFwPuuEst26NAGfCBSH5ELgb4JyxnxLcKRfa",
  "key9": "4hocHDbAJfMkj99BT7zxDR7uqUezpqxtR1BqMivRJ8RVoimxeK4MLrod4cXQosCpSeFvbofqNGtQD2WugJvz7pX7",
  "key10": "TJZbegQUmxpRjUz4wFCzYUbDwZyUDnhy8uTnXSMbf9RJLhXxnambSrtGk3FfreCrxqiTJqqKB4bj8xJd5MUtCbJ",
  "key11": "4ASEKJiajKiCCg1pEA5YmEgNTBY8jrEHGKidt64szcb8XAmzRb6QbyxayXuCwrMitoEKY7R2HBnsbHanyYs6aoXJ",
  "key12": "1RqpFZqJNGJwMuSDAPDKDCveHjG5mTje57KUNNcSbYG7KMrqdMWSPrDhDPTsrx13BmaRnBss4DJjrgXoNMr5VKG",
  "key13": "4QMAu9WKpsuo36AcQBsbLeh1zuMnFqBopM7UBiBfT58FG7UcJVPbreFSq189izVBNX9eun5Z1W5HsU4abfBtjN8u",
  "key14": "4cci2u7Vv7CDFP24cRzYrBPjqDEpaXS7q3v9UePHAoYL9Y7buG2LwGQ4ahgUBf1jvvJ1DGGpx6USoAngZsQNFNDB",
  "key15": "Vxcr3CwSG5JKeR3vhoURaaE5Njbz3zzW3FeUGCaYhCKbTN2FRpZs69amRvYX6SGcaCcRT1StSEYmGU6h3uoPUZS",
  "key16": "5ajZyPsQCNR6SvSn7KucVFhCCq9CgA8k2JmBgiuECF5D8ktNDyvj46sx8SmgQhMRVgLTQqKGH5aDXWvcXLC11xk1",
  "key17": "3rvBubYb8kLUGesbRFHpqp1Q1QQaR1E7rsW1FJ9iiTjmdVzWeXKm5hupHNDxPLhKFx7Fas2VoWe14an2ATodCZGV",
  "key18": "2eHU7Ejp17LWrtMvz1oJep9b4cRyqoJQjvtPfSq2ixYx7WDMA2YMX2em5d5ZUZ9deqEpNU7yZRnfTHDgHd4htf2E",
  "key19": "5E5YTWqc9v9Pxyk7jTdAtPP2cQp66Tzxwo4jeebxn42NBfiNsC1qta1JP9AFt9VwXpn2A7XCU5KXRMX6DNwN3kGT",
  "key20": "5ajDdQPq2HY2i44tyhXRA8LjaSWAgdAPHdMw49NyZfsBZFH1HD5u6rCcvZaLajJ1kPWB5RgGxdG1pYj1h2ZeKRKg",
  "key21": "5LddptQgQ9WrBmhEqvd6sJp5sHH1M4tPdJkhwH5SQ6CWdfzeLQGoNmLGo5wHByNtmTVHttbaGPTXXMK2XQ2QE8CF",
  "key22": "3M2j9xB9pWKGzch225nKqUXjZyHjUjPBisxtD7vz5EZbAxZbEx6Ab6DgufqjjNXLsvGjWc1B4xrhukJkXh35JgwU",
  "key23": "3MDmBww5XxaZYoQRWkQGwauBis15RS9s9Cq8vCfFjrBTXeEbg7vtT7H52wr8jp2LFtHp5936X5GiNj5B52Yp1FE4",
  "key24": "3q2Wbsz4Mm4PJkZeD7LqoSr68J1oMXxHmyvxnK6KSZGKmMJcT3LNvvts5ZWub8Z4iDLL7icErwLcpkSBYMegejog",
  "key25": "2dTa13FFPyLpb8NpxE83vcxABdYgR15F71reWd4S1XvvaVcdiYgAP9uCmrCErj6h8LCTn9xEmK9Awb4QQ3X4ZVDv",
  "key26": "4X6urLiBSEvZwPZvS3LSc9SxpG6RHbR32fMLQNVuosiVRLfd4FaUR7Kdmk5FiRMQuRRfTLzypsJNBHAF6YkAXVoC",
  "key27": "nUTrsH3G1QZVB1BjpsDYobdH5Sxst7DoXoXHbwfo2uPe2dJRzyb4mVxPSC18ACDGYppuy2ar46TYtikoRoZahNg",
  "key28": "4NbmYgQvXmjJRDABd9BD7EirTsbeHGEHq2CdnSHeRPMCQZX4Kf5G7yFd5x8iZwiuFstDguH57AtAoHTr1m94vaVc",
  "key29": "5nbyNpiP59ymCgfbaSsYPN5Z2ErB9bcL6f6r3WZXpCEh7pygXrr3o6J1MW6EcoPqoKKSgm2HTneLNbec9FuYTNfh",
  "key30": "41KCdpf3QtxGR61H3HUNNF9RH3VkMHGUZkFE5DqSmteHgoboZ3ruX9UPazAfVz23nJ3cN7utfiB2uzSghcGKE33h",
  "key31": "2fV27Rr2e85ptwkaUsBdQMV2EHcKMVgn3gLKQs9MftUWqcNMgvFnnGRu8oAWDsSrjwB1SxALXGk6wfjNzejoWuQu",
  "key32": "4hmgTTpQB9Ek2zWT9ZwoiLpPXcvJNgxfzXvH6r3weYTxWNKm67S3RMNhjYTp8Q4icKpW19NPo5TvtcVk7s6HNxKE",
  "key33": "3yABzXo65dT8w4RuPuvzigqE1jXQeQcMabnJPHqQHnoVTQgvETy2iHZxxDdtLS5S7TaxKHD2XSikTQFBFXckgLt7",
  "key34": "4y3B6XXEAWCodqX8duUaM5XVKmdSqMVdvjPDXyhdRv4q5cnJwWr6uo755SsjZwdoC9GmorprzVrcKvrk1rcFPQv3",
  "key35": "3BcTZoEa6LuMR4SW7EQerosfeMDFxTKUNLPaHja2Jk1WGYvkhKA3mG6wvAePF72CXNVa6epsvBN6HMoZ9koySvGg",
  "key36": "2RdUpFbvmtLq8SENSqGsHLxFKSrLVUcfitABLT5RdPhj9FSTdWyTNZWCnirdHXicjBem4i4gq4SWz6yhBRTjKXpc",
  "key37": "2szC9RbpQK4pNhjGELuTpTn6Ut1FEax4s1RLA75QXuBbSgbgkvKHDZtVcP6peKwWysUvvFYPnnwRYGXR9gWKLeDf",
  "key38": "zuKJvx7AVpqBnoZYBc5gHsnA3j4HdpnaTb3esEbHk1gecoak2EUyJTRGAL9E1tqQW7B7LNgt9CkWpokC8UsKX5q",
  "key39": "2GgBD5fUcqtUcVHw38Txms6iAVWBxpygAhev1jwJJX9gVfuNbC9csmusfvS2Zjj133jFYC5rpiSLBtCVLVRdFsVt",
  "key40": "U3WFA5R8je7SCMhW39ho5wPRmUgLjiarrCZTFdDm3ZH79J4Ym1Ei5bEPvPsxe2aZowv86upEkMtdw8auW2qrh5p",
  "key41": "KB99BM1XMgZMZokRkRVJbKV7fmNCzPnm1p9kBGrHrbSH5iMAyLqDVHLzEcSpgNNiLRN7GUqSK8zFsRyEcwCt7AB",
  "key42": "hgKAzcSCh5pjciX1krtnz3bMZMbFT3p25WyTT7PLSm3HZeekRRBJJLb9wZzkDfTSag8U9i4wFYccDJBJRBJyKmt"
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
