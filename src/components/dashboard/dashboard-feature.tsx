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
    "3z4g3aNsmncLhLG8gQ3cnbtvQzyDh6hyd4xRUfKog5FwaBED86cLpcJruYjmwjoH4YQV7QFRDs1yjmRX7cZGLDCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfE2ct9ju2Q8Mxd5xXMSSiwwWqcBYwVYY9SMHcnB9AQq37f5uMeqKD4A95utMS9iBXUYzDLoWiqQbvp8aMBNBVm",
  "key1": "4GfCvBJ2aWrsm6pv3m3CMTfFdBZZdrHQBRMyej24jy1SLVjFXXCucT1eFgXq2YgNemor15LU6RvMUrH5Vkg49xae",
  "key2": "RDDfXtvqoFdoW3WmRo72tiRpctomKzgHCVNBmmAt68GBhZHNt3yjVCikj4ovuZuhFH5WbU2wsBPymJhugtob9nj",
  "key3": "2D9UGggQddysuHStnP7FG2Uy3yd9V5VD8Fqe3rFUDsmxdhNBLG7ZpCsrtvrTqw27ZCVKz65DQYBVHxgJA66xXTRb",
  "key4": "CbwUYuPhmeSezZL2YaocuVrjA5pyi1GHLRwrstC9ex4ksw8FPVWD6Tpe4GEu4CPrqGgKw4EqtSAimDA5fTU3nJG",
  "key5": "5HLCKs9GvC21SsuV1j9Xo7LG3NV1ogMu7q5TiTaSroSYCYrbYTNf3ptupWmtJ7MfSCt8p2sNVptuoQzVKCchu2F",
  "key6": "43ij97z9FiuzJNzBtjuVeVjbWntM7n4tYzrCPJeN5CGJYfxHfhJLSbEmhToPzKXRpQsei9Y8oiRNUUPECzK31htq",
  "key7": "39BVoAiXq25sojgkZLuYG3fHZmWmDwriw8AmTVsKJPiRpA5LcQxvbxfXTAuLoTYE7wtH3VC1JocttbkFdhwgqepZ",
  "key8": "5pCxD1wxH9hbn2T4R1BmXP2vNCRbYfuoJYp7daaYbJ3m55yC5uzKCULn1yZEB8N8uQe1ct96gcQ3LPs6srnPCJEb",
  "key9": "63JkcXPLx1ESEzXbx65eBruDsjfqcxUtbfuvuGinCQT6U6rwE1n7v1jGe9dtodoSWhsneZ7ZujUmqTJtPhqYzKfx",
  "key10": "2kMvEoQJve2eSffG5oi9JSJFK27wUDJEKgMS5w5r5d2C39Xky8r81eJMpBPais1CNMce1jsqb84Qyvp6wQTmqDQH",
  "key11": "hkDVcwGb1njMWvmxNXw23s33h1FHjbtdfbHuuk1ecS1wHYVPZ4kPxm49UeZ7uKBRjYLMRuM3gVWF7RePZmH1g32",
  "key12": "2sUVCAeE6LgNwVL97noBZVzAowFRAdaiQBvuouk91Ydm5qQ5Kr6MmdwnZQ9hFyuko5qPQo2VD2Zs5oi8wuxzmGgG",
  "key13": "5i8GEzACjhYQQvjZqCz97LpLauZihR8ejpFWVXiqCmSPKXSShWwVc5FisMrTFTjvmB9N6AaQfxzB2ZdvZFmSqb8y",
  "key14": "4vsjMzdVwdDf6XGJLoMgNzpSopzDq4gFYQCCMHJaYBsf27r359jCNJzg2rn3SDK6ARbLiN1yrWTfLPF4jidmoyE2",
  "key15": "5wtikMQp5XcdqaXWBTEb53YyGGsb3Wmw4muwTSRgnRGD9vqTgUcRfaB4S2nZWAfSjCubhJAKhwxGaotboqLquSoG",
  "key16": "2pfpFXjnX7WJK7qpp4FRi96uejgLhbVmZnPNevjiunvHLQu6z97qKxfuEJYeC4WXq5Qj5qYCP8X6cJCuLgnhBoNq",
  "key17": "63pBJNnvBZHT3uqsfJuqpDfQi8ZZNeQsYqyJdEFDLwpcWG3fpbjTMTTjtCUXVM47JU4QstRaoePhMKUJUjSBdDPG",
  "key18": "2meX4ku639Qtj3XYsKKsxDvH7Ur5Q4Zb9bDeZPN7Hvp4WdsvCAfKxGC7qt863fHjoG8LRuWrzX53Mjkm7BSxow4d",
  "key19": "jYFppzJVHb7Z8spRznVU8QvMnvrpwHPNGpFjpXrDWmannY3UQfLkK4yvmU7rszNF49yJRCCUHWqu3qQsycysthq",
  "key20": "3fhLqJATPG4oaBAXLqsA2r4gPFfqVq6v28qqr7HuLTBfzpmd2aJ93pxJrkmP2vcA1phWuLQ2PACw6DW2hv1nZCHm",
  "key21": "5Ae193aE55t21Gur7L4ao75sxvEMBPyB6RhoZJPrCPfKJM8QUejChbrKqVDKxGtDjbtEYkWwrP57tqV8BCRRtSRR",
  "key22": "4wPpc2QU6xSixUTrSPAEvqihukcSr2Zj4gtaEpdRMuVJPHddwtofguv6PssS5op7UekW7zzWevxwpFdHUB9ZGdUA",
  "key23": "3eWCtYEDAm7drjEvztcwkHWssgPcctL2eJiNMNcpprAfDTESSAamnxYckVWBKh4tQNp4UeHzf4jASXwihLjFWq5r",
  "key24": "3CJEK9EgiKuFV6hxBCR6KPM8fAWY7eYoGJTqWPFgtqVFHUAoD4zmJx9UzyXVznNXqxAW9cBFhxDkeVoWN4WzN1VP",
  "key25": "fDcYVn77DBqNEyGnH7LFfTUVMiYQWH7h5g54sArTw1eMiMXm8jsam2iCaBxbRU3NAhAbcEa6MjVCoA8pLJS4MVV",
  "key26": "SwxVy9Ki9TACGx4JunSXcrFrBWxfcXNg2EGApjpBybV88a4ZNumpuhHEtAsZkSpp98HG4w9TJ7zAAY7HxEiuRGd",
  "key27": "FaifcCdTmBUX5Pz8sKDCdYehNUgUmbZLzUv345QddzVLe6FQqHaBojF8dCYRdefsNYDXMVFKYCZguHe9TMC3vdD",
  "key28": "2BMgLzjppntSDMXA8ZtHwYNoHKdW591LHomsD8F9ukhTqvarm5cdWRaL1q8rGCSyxGyZ3LbmfYmUGDuyj1AgvNqX",
  "key29": "8nBrD7Wg89xnKHoSnpQFDa37G2i8Je5peEgkrqbqzb418judzhmuJdr87oVQAwkSWPz12jA5PmsUuKwQ29pi3Jj",
  "key30": "3RGXSEDBWfSyoSsFPM4eBjVRHuuTpp8u4U9sbErxUTf4DNX9CL2E6dBbTQu5VbbfCc11tKCxdQGJzbsDjDTPohWu",
  "key31": "3KGCuVB7XJVy8rNSGPeX7KzRcCMmhLUV4KsNZjEygbwKSfkeavjUWdn3n2T7nWchk1RCfEqXLqC5UqgXsZNFC8Zb",
  "key32": "5yfFnL4iqB5LF5kKmsWLTepW8RpbjTUYbYvzaeWwn6S2w4HXtxMHb488tgJ2x75t8vcDAP53z2zcL26fi54FtBB4",
  "key33": "2ETKCV4U2pGa73zRgvb43wxZkfPNZzU8RYmC4R2ETc6cGo2nXduMLgYUsyCeMNyB3pf98mhcS2vPczaEpHXE1GgU"
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
