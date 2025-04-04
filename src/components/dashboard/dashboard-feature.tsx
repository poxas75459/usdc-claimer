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
    "58fPupHZk3SZdrZ39kiyY2jzg5sByMgycYDJhGxtoMYemqva4na6s7dgb8DmXhi97fV5zyHQ9eLSkNmksoVgUFef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwPUcVK4AmAHRNexmZxRbwkiycKEn4NwQK57agRfUgFE2U43fC5TTuaMym1h4aAqubkHFubeMTehAkiqxptH9Yu",
  "key1": "4A7H7yZGKJjRghVjvdWRg1zXnLSquTHLUoyMDk5z7i1CdDMHG3P2RbEwFZupmEQnroFCxHW252AgxqT9h4KHyemv",
  "key2": "57XYRRxbnbjYL7pAijcApszwXug8vQNf9V3iTetDt9kyHFUBfgeQxW6UW3ujB5rxKwXBZhCB28LFUUknbvY2p1je",
  "key3": "67ePXyuy74hogSdQte9t7yAtRtAC2y8qnHNTpLAkycR4f7bVERq88xgPvgDVgwMGhYCdijzz4FAbPKCgprng8k8L",
  "key4": "4hCLczvt2QLw3tDipC4FTSo5MHbDyim7BzKPhTwifjEp22JTfgoLPWwoiY9ozoM2iS6fL73BdxueFXaKbERfsGpC",
  "key5": "2fdFKt8UB3Dp8YaoRJjL1gAvgXB6mh1iG3uy4syiooA1duDYhk83Z5qUddXxNFLUMtnkCWQy1brB8FhE6Mvs5yRQ",
  "key6": "22nTtMuU2W6g6bkRXjEi2MVULPTDnYB8fJ5F8Q3ftmdxFvjTeCbdyRv9Gh4vqca91JyqoZR9oVQZ6PLeDo6oR4A1",
  "key7": "4RrkSSmChLiMxDdzmRbi3AKKALVd9BsNjaQ6sad5N3LKNSZi8STA9EAGL9dL92eD9aHWgsBYi6sJKqJP21NNSUnc",
  "key8": "4K4wfetqgUEhLakqTbZpC9S1BXTn1GyDsi69vJ79hJBbKcNZbLqWrFmPvY7w5mHGE7KhVjE4JcGJdehAK2LLkbsi",
  "key9": "5514KXBMQ5QChgoTwP3iptrGZcdEvhDd8udZMuRpHSjPUZzQ8xiRBNfbt8dHYib5PQwuoFwHHvGeWyXP6vszuqoz",
  "key10": "zagKhnJVTDkmPVsvsc3z61EUgLbpZoMaAMeX44n34AQAT2Jg1fusay5f7ks2JK3YarvPVq6HbTTnmmt1sDMoZYG",
  "key11": "5uRrqkVX7BTcNPK6LRjzToUguqmMTksceaKVUfgS2arqZQb1enJ5mkbmWg3WxhDjwHxF7HmrW6JU288iMNxKs6m8",
  "key12": "2t2jZzt4PrpH5Vs3NNAjECLNN5eEagkzroaxgpy8MMM2YnSGjxvA85wgkwWDNgpWWpXMZxXqCyhPk3vCigRVYo8e",
  "key13": "4zPJFwqqZFonQJfqeUNZwctZoeZLpKzgSKh7YiNMmRSZ9wGJXYmhgZAaesZToP9TuDPuXURLYCDp88FgKEJekmH2",
  "key14": "2GWBKPtx639geUARHGCUTrNTDv4Qx4UXiqj92VdWcTecuUkqiEQSkyzUEdUWGvkxPAdMZm6mocEJrF5mBF2KyGsE",
  "key15": "2ANjhwqKfX5LbRjjXrGPJY218Qd53NwFhieoMvsL2ytRnPpwAk2Pw2BRDUxNmHrnPvRmGjfWY3UMJTidSsQcM5oU",
  "key16": "7YB6r1wqXmAYSB9xnnmdj877DuTkKL4jnYUMZ2BM9zLV8quymYB61zFWKgt2hfTM7o5LcuHFbKQTYENXG3pnCcm",
  "key17": "iJRxA7ztpNJTpBvModqR2USnwCHcZhfpnzBnbkuakCPSVjhhaW4aEHv6yRXbe6gGbFjsArxRxPNucWAkv91Wtfd",
  "key18": "oopjpXj6dFZTvvzJY4azkmjai9a6XsYNYWhx7cmm6TwT38V7qYa6woAF7dPqkcuzzerJdsYeZWEicncZ9GXHwjv",
  "key19": "5C2rSaeS3n2hkNEbtsxvNpPJsrZoijadUTPLFRvoaxeoJbsgjnkHJgBs83KhiRhuFSCeDkdSHTwG919Htmb2ng1D",
  "key20": "3z1zJESzi1Psx5d6MfpDx6x1k7Y4R1oUa6CsGrmANVzhFNP63niv6YEed8yN3sJHM4VSUH9kvrifwnBDCzqPKPyo",
  "key21": "5zPq6RF4baSX93it8r6wy3KzDTuWMth1HQaN1Srzxe2cckTyKgc4VQH1gJtCHke24soXamyd3CgigwW5aTgUpmo8",
  "key22": "a4KryJvbYjCLjB3QX2pMQLhPciRGAwBdRv5mCNqmNRAr95CsKJXDUfD4Ctz8XjxBtWhtKQgHMiXoEvg9hvy1b9h",
  "key23": "Cp9iQ59rCdwQKQAW9w5YJiSpjk5VtfsAfPoEKLFrTaZzfWvJrYMYJmCgESwi8y5SS8vAWutK7fvc9AJy98DXtA9",
  "key24": "3vKRqcBCaZoDc61M5dcsH2XK56Xh2CwEqr6vKzkociigX8pJt7EMPnhsMxMpUwWLWK6RfU76bjvqTJg6z4dk3dd3",
  "key25": "36mjUH9CvQPfD6cKCePU2SUTBr5XihkdfoDaaTKcQDLxReo1CyBAgeDFZyyaxb7cfDqNq3eZ9Yt9Zk9uwLQTaxnh",
  "key26": "foGSQA5LhUqN5QyYuwYQRD63qBVntXGd4jHKSqNhM4iKgv28xLCJKqaxp6B2LK3PpmEK2tiwtuK1RKHDtJB7Ckq"
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
