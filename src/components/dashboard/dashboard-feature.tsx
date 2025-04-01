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
    "5a2VyBEvt2JDwPz3q8HNXF1g3tCGWoQP6qpEQkC1d6FXh3afRrNxYsHrMWmw3q3r8MpizARXTbPHHw18Zp3wA6fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmVkha87XgwAr9EY25YK3QLPWvEfEDZ2ns5F8ftPWUB6J4ARfwfGqLUjgxaAwbySMQomu1sQnmrbdsryXTYfFzp",
  "key1": "2kBtZeEFeTBJ1sgi1xyKCZtpMKrGYFB1oBZTprtzy9UuJCGjDRnEKhgrr9MQRiNp3eq62xru1VnRvvHXYqD2k1FF",
  "key2": "4FaJwmfJ3kPs1etv1G7ApndvBJComwDJG9gt17XZTYSGvFhfwyy9uyQm2VqyjQMNfh68EN3nDQbBNT5mSsvn7y54",
  "key3": "FP5dXuF8DMM58ogXLgLiSahxPfY4pTvma8oZWmcVv66vNe5aAvamRLMcKBN3EJm81238B88pMynGNUQ35QVigVL",
  "key4": "58AVvctevMEqkNN7viqMyTTdw8VH5UY7tNQiqsKFDV13PKDc84TAsYXAEeh25CaAQhpHWECxdNzmops6RrxYuHMU",
  "key5": "2UFrS91WiLmmdxbeZhRoMEZCQNjRph6aoVqAw99WrNcjMp7838k3YSKHRSpoGgcKcQ5i9RQzB6zTnPjEcGezS5jz",
  "key6": "4NmZMGLuZf6UcarBxRd9CDCUYGBacjxdUsqWjdEE5huA7CvNKfuk6QgyQbvEmnBapjuTXGAKLY7UGKhToPnAuzu2",
  "key7": "26EpSLDkVCDQYcjKoQXG9hX668HJfMTaigoEgw6fKuYUeujAhMZEiKpFjHZ3C6Lak9irx1FeGS2ZcCyizaocZ7n2",
  "key8": "2h5TBKKNPBpwn13yLX5ttst5Gnkjp5xEkRwLWsrPZEtxR7yPFRkGNxHgZDGhgunpK3w2dx8YBVFnBfgDidoCAA9z",
  "key9": "3Z8XbpTaMyHRPrdM18FK19ZZZV3Epa6L5ocBWSFfGgrXUNzwFpMzfGjqcyvkk2NPvXCM2JXjy52Mg48jWtUY4e8n",
  "key10": "5tPKkjndXbuDVmVGhG5bUZMr3XN757XGF472RWG7wS3PhtfZTDEWGirB8V5hVDk1rXpj5NYTeNH7X7vuobMKyZu9",
  "key11": "31MmZy1pw2atnBrukAqsojbehgjnG2Cz5MizZBCMy66EGNzGosrhgPbisb73xcntCZVLUUJ3oBCsyeV2L4uojXGG",
  "key12": "3NsCeuvpM6rLA8Fsf8afJhZ2NTn1tisYfRjYwwdGtk3dSajHhSH6n2gjjksNCniKNWhgWuE8qdnWLTLGVuxjKHyN",
  "key13": "4eJ9xwPva7BUagTu9cKHdpUp9JaLjQqvj9ZFckqXD4y2YyFrL9vC32g6HvPSkTDU3yUj4fNQgqpABZDSPZXKjiKj",
  "key14": "5kcrcrZEmBsiBxf84jUGpgbwqQjEkZ5NaBygu2Fb31VvoRNL1RhmSuxATBnnt3BuQSL6Ro27xanCsyWC68z3o85x",
  "key15": "2G5frUEX1JEq7u7ucSx57Q6mC8ZduGEMeE3qpGECiMUXr1bGJLGZVXUwZ3rYMiFAKJ729W1ovu7VTzC3K84p7XEU",
  "key16": "Kh5Nyb93JPXFpeuZzzKaxuLdmUCa9rGa7UXfroPKQW6XFbCD2YU8dKTNckL7scZV6bA2bbNuNPFb4feudoBKAGv",
  "key17": "5mNCNVBcfn5Zb73kKBn6AgxgfXyYrApCGmKTaMtsH263CbmD1APBPXn49igdYWCjZtTVkraCRCFk5wwqhZjyB8fq",
  "key18": "vDMV4XUDAB1Do6Q4ySokqmktjyB1aS1cCe6aVz52fzcVy5FxaKK3cnd1wK2EHSbTepagoUhQzThPNywT1RfpRcG",
  "key19": "wiY3JPneW8kL3RcgRNiGoHcaqXeLCDkYrWaPQjZgT91sTJX83c83QikqZnrNSuXgT71rmG7XfPHn3dWugrFVYC8",
  "key20": "3QmuDDUSr7xyG9GKXxWZ9awEYxjuG7MZzX8owygvDWET2yfmbyMXKXL1E7zJ8PDYkzRG22V2Ceft9qpwwT4b5woR",
  "key21": "5S2C9P2PubwgJG8yWFja9emKNUP2LiNDpa4xg5WfPCA2kftJAYxy6nSSbAPbhYLAU8HEF5TXsMF1SQv9awm4T1fZ",
  "key22": "2zVxF47DdXuZaED5JEya1drHXQpGmVS3WKPEEHDPKafJBEWbyoNCDLvTSdKeDqsAvKrrps8g65EZW5VQ24AcSsVW",
  "key23": "56aavmbhcC2NDMBHjU5PbuU5pK1XE1TdQitJTvep7cmviSRDDEJbREZUKk7YD2RrYsVbCXBWeNTbgXszfChFkrXo",
  "key24": "44tqdwmhM4e5vzP2YYWUXPk3fSWqCto7YyCWRd7c2e7MhhYMfdcDBMNteMJL1KvPfx1SZzdpHrdzUVPpN78jkQW8",
  "key25": "ofJVD1snPqqfsNzeyjSqgUXTrjicXdq4KJEsnYGJp3GUz9C17nq6nv7Q55zokCgkZ2NofppWUBAV3agycE5maYS",
  "key26": "5jpGFCyVf7ZESs1bSaRS1rCvUpsAKJXCrJvoLd3HQytrsbuHoBDuSnxFDQDkhZcwz5mCFEfukDRw3qk3mEQ8giuk"
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
