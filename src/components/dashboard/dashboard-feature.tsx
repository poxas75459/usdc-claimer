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
    "9x7KybRCEvd5V2SsRQyFxj9GMnAvrbGCW7coyzXiukbhDqKipd84rMMxRibCmktWzDR7fanhHQwNfRopp4Lgmxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BktwarNNhcPsW6QLR9iY3QbezJdmCRMyXhNrTwNP7crV8FZFxpvFG7YGrDxqtS1dwfW2iaDd61dV4PfXFLJSBcj",
  "key1": "22nxQ7hV9ZWV6UJwThoUscdpcE4MgSY9XsWZNXTMFdPgVJ834Q6KSCWBor7PCBU9Fv3ctZ6NLxipQMJKGscu4TCi",
  "key2": "3u8VgcCjoM7pY7EeZSnZ9ZXXd5YaD8LLY8xMm6Ha3jthyjTxXbdkMWrCDLhPqXfNA4iGH4mfpTESnQgJjh8TYpjH",
  "key3": "2ZcH21b2VZmgK26fVax9k59YZc9s1aQo5BRqLPVPeQy15KrUnFYHRKxC9foBtbnHoUy9cenELNZtjVLcCVTrtPLN",
  "key4": "2X1tXVPvcbNb5xjupQ3azG9Vr8CwVs6zY7F8fr6nNzbjeeyC95pKuatzQFE9Jnho9qYdJMEb2XSfDByhsWnpshUj",
  "key5": "3ZWJ7euZESck76XzPBY65dEDtP2f6xzJdpZqkQaZf66amJtnstrXkwSeBZUBXfz2sNt74ufBfAkGz3sEGthyL2D6",
  "key6": "s1vcZa9ZgKro1ADjrAEL7kd3BKQxcyxfN7tdX8CmBuiq4168uGwJWS5zxBAMxU6MsmWzDuiPjp4YCgw8eUaeQeg",
  "key7": "4vw3FqgjpTr84kAXBAZtQAP8idDXqvrLMHmy7ZhpN4perEWU5QYmb9PnjK6ArPfUsamks4xWvBoKGjy2hkjNgRic",
  "key8": "7NZ2sK1emVQkfVnnxgoQ1FewELq1PqLhbSQLLrmd77f97a3WjNwqPb3LHvuAuNcawWPSrfNDVmNVV8JiVUBKg9n",
  "key9": "5ETUCPD3N2BVAqYQqJdq1TdHtHcbb9i7hYNw9cX1BEHTkseZFsj6bCJYpUMynoH8JF2MxP8yMLkN9rxSFnjFh9d8",
  "key10": "52gdXeYuJBecLQPVbQB9WLMyn9Z1EzgjyBeBd66bW5t22L2SPi3wSQHs6WBr3S9JbhfFdRgMN8ePpoxfp66to3p7",
  "key11": "2FNDpRPXLqqgM7kHunuNqtykrqqSWyTXtvr94kEwmV7Aof9aHw3tNsFZGyc1a4ZfmjPcANtpbqUTNQ5ggA8rajRZ",
  "key12": "3g9VuYMgjq1dk1PTh3dyXNuPMCd3eH4rAVdFWvfMNTyPx729otZQaPBfzDHV2vLrdK6e9PrEjRKfsXziArLH2RtA",
  "key13": "3F4To18VhbfuZ9PE4rGciykRM8EAABDDrp2h7FJ6rJ5BmHAhFEJLmf3FBy6iPWTnkURBSyEX8BzmiPVhFMVQA9HK",
  "key14": "5LKSeuTXbn27XigqiLTb38Cw2mU9twubeMpLHWQwcgF4fYLVcJAAAemzXLuzi3TqJt31pF3c19YT9wy2ssjTFyW1",
  "key15": "4xY4MDzcxsY4MTwJAjw6k9wuRmY3PZVKEdNpFvfAigds5E82SvgrKtjpA4WAmBCFBCEEkREbaM61D44XQHCAXQrq",
  "key16": "CENnGcuG1e6kHzRc2yqheofUBKZx7mbWVexSrwzuk15HA6zraXqRsLJtbbyoa3M87b2YNKvcNg6faWoagScmXZ1",
  "key17": "3nEXLNH5vgrXSwdQdExCYoQmURxrquvLLn44awznF3E15gpshCACdTLXwSKRD7hngi4nXJkFYveecT393WPagM8Z",
  "key18": "VRq8K8ytkuNbPseBMWUpnUjTRSEQe79vUau5vxDRDhZxNQ1pYGBtxwnixUrhyrYBPdwEEuukcgwWjQzi1i1tyUq",
  "key19": "5azN5NQb7SQiMWESVphFLr1PYMHYwhuZgkHSy9vHoHYcMw25eUKjyAcwJSa4d3ZDYD7U1BKBFVuxbFwoABtiMTf1",
  "key20": "2bDCabB1rjRaUk9TxTxhUYzDWfoPhEKuCg6bY3jH1a1A4L2o94Qi2BP9YtYKE2eBwcZe2tkWFNE7HvgE89U9sRct",
  "key21": "2968buP9xC49YWhbb76DaeZktuapu8NxgRWtZ5u1kYeDuFKr2jC8ENQjsxVA9zS2uGmAn1Mt1othx8FCX4d5GdhA",
  "key22": "3o2HiL9KJA7bMhRdFB6AasCBrYYm4LpxEYoQThSvuHgQofjqqAhAU8GfPvzzTKKGXh3AZejPEzAtWchJuAEcHtv3",
  "key23": "jLUD4fxEi7fJTqpkxjVeZn8qhzdHrjts3arCJLtJx2ZSdGi1rJAQbKoTRADmkdEuXGUb29tRcm92hVRds1Ta1a1",
  "key24": "S4qFsaGGGwakRbsKNLZBfziiTAvcRR7D5Zik4sPTPBBEPoc2MAEUvhpmQq1ve7ww8aFR1R91yGvJMQV9dMMfgwQ",
  "key25": "46BVR3RrbYJx3WAty2ymPm923QNUuzj2gU2CyCBMsMymtLAzQX5BnmrHePzVn3pcg9oCG87vqksSXC4ds9zY8gGt",
  "key26": "r5rAubDvtoDCn7moJhk7QHimZTGcnPUhDk74RJ8kuiTuiEQD21KE8M8PXWcv2QWVJTDMUbLQZXLMNDD3wGZ2jyk",
  "key27": "3Dhpqk4UutBZYpt42R6Z9HUpeLAGszdyzbiUU9L2sUpr7u9m9be3YCDwQeKmAjQcgeZZzpttjbAjE6yubRzK6P23",
  "key28": "3BoHeiuGMpruCEDz9nMa5gLS1RuqWgsKtmaDuBJ6ygjp3jf6YfxbMcLzdG2VWQmokzF9GcDy9J1ENa2vUPtbnYkS",
  "key29": "4bZ5yxSAJDyKTPpCQUBc6QTGbnmmrW2qv5Y8QAcipCNBeBjx5XoJKsRs7NbDTPv1nZ7jU45g3GqwFR8beCzdtG4Z",
  "key30": "4T9GFV5DKLJSneJfGnsRdf1kyv8t5q4dqs4dVByeXeBmDb9ZjrXA5Fm9vv4syegkzVbbLMGhEdZqesmN9Qqe34f2"
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
