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
    "YXjfyhJKJJk5doW1ZKi9JvoJK8JiiQqbynnCRHLLK4KnrHfc116E4bv89vPbre9fprhfHXbE7GAZBQdrKUGp2j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMptDAwAH83a43pwgauqM7H43s72ntSt4c99FD9LR4AJACYpaP7dhFM98EfPZQLoukurxNtG6vrurxe1jXMWnog",
  "key1": "5HF64LdvTPQur6ssYAcD8zmWqtTt7XVkokoC8D8UQkNhTcVKBHsyXP8oVbEBEXnSok6vZzPC9Q6WhiRWTPr2NufJ",
  "key2": "5aYs7ceyjqEUCJ6yPAZopM11ir15bDqK6zWAKDi8YTCCVGFv8mY7seaGkyV9rhvQ4gBnVo3nVqqSRqsieKUu56zz",
  "key3": "2w865bo4vqQHwoAXPBzQtjcawaiBnv5PfsK6UidGV7W75H6TQPXoyTUqCmHBW9YtrkwVSN9z9FY1VvTjX8YU2L4z",
  "key4": "483TT8BD13aSnV2mktkvxupHiPdZGPVRDuxm8ahg8V3U6ypjXA5gz1cCh6CixfyvifnR8YeUzkdvCJA9Gw5ou3hp",
  "key5": "3QPCJt22hUfHPNDseGUYdsQSCRvJBbwa265pRTuMFUJj2tj5Q3ykQPFLEJSNzqyn5k9FfyBbjbPuRvm8oGUVydSG",
  "key6": "UCkuyBdnSNnqAAYUmFfBwKH6u45WMA3seQwJaVVzuMJCLZAxi6rVFBdqgq4eXHpSDsPMatmae8TAGoLzAiHUDE5",
  "key7": "4QKWR4KLa9gaPMgetcvmPWQPXTYubkpZBqWuMNtUzJwcQA5TUeHVbR9pEtRNMzLxNBtcP69mnPMDrFQCkPkRSGp",
  "key8": "4iJDE5AMc9Mca2YCY8XfeJ56US4mPwJ35Vuukmi28y9rp6EdVkeger4FyXDGAJGAdVgCiDjj2EXPryi38V1gThJM",
  "key9": "5MFAKyaMQTEcB8j3LLuSMtCBBh8PV68c2CZQfjbK42Z4mzMNKqtwLbbFZiZ1cfPXDTfefSmxkz9WXW96bK6DRxbm",
  "key10": "2sj3xdBMN6cqVgKWmk7US34kgM8WCzGDdLWeCyhNe7uv2AC9K9BJLoTheFe9z5TNRAs93GbTxLjevVBmtyooBpq3",
  "key11": "sTGtNPv3ppuhm2GpVW1KiT77yPjznjjkNNeSsziZxTEmo8FSJ3Eg3UByqJuhauDT6eWTR8GJQSP5fUA6xRkvYNb",
  "key12": "5zkSQMS8iPJAa9jCg9g1Ge4uPbeucKiuWaG4cMAYEVJzkJJAJF864QzusV4MFpGVGeWptumhSD9qpvAfM6pFiPE4",
  "key13": "4bRQfexdcb2Lg9p2uyCHQupJrtBQ99dK9jdhauh2SwvCGiUuEoBJrGcopZSULX3gCLMm83dDfWbLr7Qr8bdf91ea",
  "key14": "5aRGhamBatWUwTii5Ntj8R464po4A52ajF4oMyq1kVMfWufDFZCew1rKyKUdA7fjeg9E8bT32sYqhaH24sqhZbMF",
  "key15": "S33yZsycYEJ6rvy2Q3vsgT5z8YjibJ1iummcViGnKnS1FaAr75cR8EBu32s3sZVbdFv6Ek9R6uqpkidcgessrus",
  "key16": "5EcKcxcciB5HM4nUcq927NxE37C6S9iurw1JmyoMVcGV2gqLim8Nvbgt9uVDBK4Lc1GRExbXKaFqsky9oz8wTu1B",
  "key17": "2Th8D2EYMHrLDbJxBwhgMFu8kh6PGj14Jg2YNH3AeFBSW6vkUZfu3FmdDkr6cspeDVsL5ojMUU3VHB61oBT4WBhB",
  "key18": "5PYBu3n89GadmS4DDtuFNL7uTsQ5zU2WUTCPNYsv4YuHM8NwHatWE45XeupveXxXYoZRb5CFx8fEU2xp2X69u6cr",
  "key19": "5V1q8i84sJD9ajdg5W23RToSwAZMdGEFmFoMoLDZtTo7XA975AXEBatxkkYoKu8DqKosGuvX5kw6zfQAxaLpxh6s",
  "key20": "21c46Pdw7VB82BUcSZZbAkFf43iAhCaEA5T8GSYTATv66frceRFjhgJeorgPvzSLQRVWutWrvrMFaA4gMwMHpfte",
  "key21": "7WJTP7sqQmKWdNrFh4N9whAtVrcNicjxgqRpvHVANMv5C41d3cid9Rrh9k8jcyePr3M35im29okZjwGPAqhkyuA",
  "key22": "2ovkpevV4B2CFyS3ukWPg7SCpQLcsuEmgJzESaaUd1SGDZcWSVgP9G93oeD3FJ2GTpLNC1d34aBSYUdmDrYMPq4T",
  "key23": "5UZneYqai4yaZDo2JJgBVGTRLNTRGT7it9x6CBoj1TZ3Gf25E9nDv8CyiNBob15edxzgHzwQEgNxf2s9ytLMJYvw",
  "key24": "57byn2GmqixRtvz4wn3psLWrE2VhaABrEUfoDVsfg63bf5cmFTRPtgXPdyMokgUnrx9MF8ToSxteNqGTLCdCtFkT",
  "key25": "GTJyYAJ2tLsUphNmJT82YFoWGqB5am56iAL82HjCkGGPKpvmmp7GTzmV39izzLh4hfeNxSvbLzdeSrwZLtCz3W7"
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
