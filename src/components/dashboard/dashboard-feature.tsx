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
    "4fAGfTSYRPFRBuxAmVaFFy48P66VdXGMrw1tkyMShS7ipoNzrKKfX4X9czWBZWnCD5JSrgB5s9sarSRbt57yhZTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBasat2suk9cdXzwtcoFYg7ngNyXqs2QabvECXaCN9EoMMn87X2es1evXrcuPGmgfyrk5JEttWdtTwagU1SAj85",
  "key1": "Hb4ysJk8zA81KeDUSgaWWWrgLKSPfT5x4DPUo6JuUydADe1LLFV2rJMq1Yj264WkJjVAZ5zK5hrJWnK4GHY6XxW",
  "key2": "4YtEJUXDd1Q6UzA55GMFhTZBhzgrbyURN67Cxd1H8NSgTPaqnELjFvK6A4K2odDp4ii6ZoEfjRbnpyQwtcQqnEEh",
  "key3": "5h3etz44eFFCwWPx4ccWEYRFqePMFW1qCWQtJRdTQacZLeFynSmdWFv2qTyKoxtUnNLimpc1ugufgfYhSwGrxkjJ",
  "key4": "Q1W4818zFTDR993RpVozFj5QXVLBmG6p21kWcfMfuJL6ba64LQ1gLsUeGGKk967PjMAUrXdKs76TqQq1A7rHqQz",
  "key5": "3oSz9V1Dzy1NPDG8DqrGDmkMniummXAuXMjKVhkLgDNZrGWvgox5Fjyeg7hU77KH2nyWgYJ2cm1YNiRV9zTJDTCv",
  "key6": "18X6dB2bkWASHkP4TbEU6sBLgJCg5xyw9RA7sYGM2a5UYTAW3BFsm84GExkxfjQADJVYpBM1kHR2KAAWHdC5AMy",
  "key7": "5bAqmpEmib5hgfGtNcJx83Uek36Bm9wTxG8rVCz5xRkRPTchrieYwaxjUUeRsuajay46z4ToPqGXNrKfuibnWepr",
  "key8": "39ts1WsKTYQXxaUP9ZfWc5orQJMKtStt5jUwbnrzdPwdk3e7gTadoEwghtX4Ze4GLCbJirsrWpVVCuRkZa3GfMom",
  "key9": "2FeRb4MeigNuUszDpjCbbLXZMJbysRCw7wJ74YGUNRQAo4RDvLFdEkmWTmx2FLGSGtaWtoRSccDjfBxZ8wN5iMZc",
  "key10": "3Sy62DRugjvjX5Vfo4jYmbaK7kZghb9BRYrcrmKxY9d8Ma3sriqBKTaWbtarMgM6Wu61WCBteEC9WezYE2mbAr4W",
  "key11": "4sXUNVWEGeUpvb4XVSKhYah5M8VJCjEHZ1cADidzu45NRPAsDu1zuM9GA78QkMiXcGvotajNmiegSjuwMpyptLYd",
  "key12": "xqK4f6483pztpDVkT68zGMefNhaHLVoDPEYckwGJL4iCKpaXmNAbfew8DnMfHZFnFJyRqtNviV7YMALqo9qP2Yp",
  "key13": "4RKXDSYYjD71K9VRtMV5dC6nPKQt935hhLtcgmbGQuiXDuSKsAMhaDR8zsfbESczwEkBV2isK93KjbcE7FryzP8H",
  "key14": "5E5ypYddrnNr2VCwge8F2iJ5LujucB56xXyKdiTCBroECKhz694bmUv6nN3FJfbXJ9nmxThLmjGD116teXizF5Kb",
  "key15": "3XtRNDw4tZBK7DRbRmVHZ68Z1h8uNifSUt6474pZH4ryqP4BTxkxcY76C2yAigWS52XSGKxY5jxoZyCGv3T48YZp",
  "key16": "32GzJfM6vRGQUxYfb2bXFZU5tvMuJyUc6u4bRpJ55qK2tQYs9TmumBpjPkuLuUSavEwgVmLGLuHsQRh88qdCeV6F",
  "key17": "4nShKRYQzUmtBeoNPRh4BJ7Cupk5uRZ6JKh6kcBhfQoc6XnT6ERVTgyaemA9B2sHYc1Z8GfKAaXs94E9ZpLVnfKf",
  "key18": "3cMD9gZPyKki9cqaRe8pwNcWnLXcDjysNAmr1AvDXJXZHNqQ7RRYeGbE75uUm34zVUBg6MjtKNdNu9bxVHUDTaq",
  "key19": "3oXX5qxJVkKVxNm1esHonRiEGTBa2vStb9w89V9FH4vPcs43s2p5W8y13mM3Vpc3aTCeukHfujyhfZFHhAq9ia9",
  "key20": "4qSKptPaDjE2ixxy5a17Js1pSJphneC81kmGEuPvhK1WCZVQ8uSX68Be1cikmRzGh2nRqLbTj7v7mLYLP3YQAzNz",
  "key21": "3Wh9zgPgXWJQ2cyKSVZ5da47XekyCv3nKdFTqdqYPDA5FoqTATBrV6JD7iakXjDLH3Cpt78qV3rK11gRRD8eGsSm",
  "key22": "31isiC1Ez91HdEoybg4Vvgt9w4rMKt6tebbk4mVA2iDvC7ZoT4ruKiYJWWXbAn6ksxqmMh5qe2rMaPveVCJmNbvi",
  "key23": "4t6VeDRWAN7fVQWt6KPAw4empuB75wTFaJB6obTUeP9XhTRPe8d1f9RzzPvwJy7q18BcrAi3auf9xi4g3CarmqVC",
  "key24": "3hBzZm5u8P4TDDHQK74WW8JnrTU71mbneBreoQVToixinBdSt668dGYSfuPZSBtqLDDn9JD8dFmHf21scPHjM9ET",
  "key25": "2VfxFWQGxh3NVZNufXvRsAd2JgDxTZyQZGKWVMXDNxafxjrnVp1sfDM14wtzMc5Pi99GfeRmdgUK26Sn5AinPoGY",
  "key26": "2ixVSjLyqwS3f6NuDy8ALavWjVmPQGVdyTtERijnV923LB1yorPb2RWfkMZ7k4kewTAbE1aQ7iRD25EvkizS7Nbb",
  "key27": "5v8nCkgqeDco8ZVnzg4WiGt4mBfMJ3f9jEjr1sZsBomasjJQw1JBa5sdDReFFCAXAWhXKKrTaRWo4ab2eeeywuVw",
  "key28": "3aZHrjVukLLkyF1mbEgxXEBPmbgBopVstUt5nTg3r8Po5BCRq3hz6cxvjCfjUqucrL8EF9CFMJAkJVU1P2iHRbKv",
  "key29": "5Dpo9Vxi1BqShYaYtr7XNa4GMqLvn2YPYq6nKyDt4BuPEWMHUYavpu3nE1srzqztNGCPQT5bL2Dkorfhfv5r872U",
  "key30": "kcFRQYDTpcVdvCpuHXVHJwm5KkhzvZXiL682JNi212ukhdp1eq5jbcu6m4sHbkRR8qQFbdsv8eRp5hiFdtdTg9P"
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
