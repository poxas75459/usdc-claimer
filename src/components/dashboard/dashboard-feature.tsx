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
    "3ZsRQieGG8YxxJrhr8F9T8Ao5BM8g4Zg2TAVZoEPfaqP44N7d4hnfFHE2zoWBzhdURSrwQCPyyTYN593V3nkUP1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgDgsoqmY9kzaw5WQJc9pD5r9D6ZiibyYomC62e1fc473FtHSczsvYPw6uX8NFx233MXUVDbkidPoR7ZzpArgq3",
  "key1": "4b9zciyiF7NWcuqTxCCA3sf7Z9EiTYHSga6dkjwpEM4RH2boVagE6cUVEQ1d2ed3bCbHLycYqpV6q2JRenkYtsfT",
  "key2": "5iKVxaykdq6X7Fqi9aQayeT56LY5iYqWV5iiMwvkTBSehfUPqunEBe4XtNfqTNrvsss1f82eARpeR6juJBZmtKnk",
  "key3": "5UkDoC3i2UL2hnxqjyGiAZYk9sjCQBxiWVAuJee9ZEgYDaLQRQDxtNeSkChwFumdxPpRnrmAKkJYYYWTH82xYhHo",
  "key4": "3U2azPP5MKUm3c5LrenFKnrXZD4yNhUx1f1ChQR18UEiYdBXYdTD1htDB7PP5hYLyQs55v4oV3q5qjeXUSfgYsZP",
  "key5": "hsMu3heMKpuLJS2pjuxs8VvzgamSgSfkrH91dpqbzGKoZBVmn24Sz8jnMh5ccdhxJeUZ64JauZmwqv4FYBT4DJc",
  "key6": "3XzZPzW96fkzVAy7fdmqb1CLGAwWRtk3RE6Nz7hUTbMr72wNo7tCzjWUjMfRDeu1bdKVs48HZGhZ7VFcNFNLffZQ",
  "key7": "5jEqASr7NjBFSW4tRX2kDEwh47jLvE141dXpPdzQaQYMirmRbWuR9EDcpe55AQgZDzXYgicy11oh5XR2PKxxGvE6",
  "key8": "4FpatE54AaQsFJDykpUq8FmCioV2H7e8nKRdydrdKrqxg9BgkuzatuFVF6E9gjNm77FcqhNKbH16acjRQ4Mevtx8",
  "key9": "32qRyiPPqr5AtkXs3dyE7p2idgUNJMnzJii1cWsR8wkKDkZSzrjN8t4pdoZP8Dc58ovWnQf9hYDNDJSAZvNnnrGx",
  "key10": "4vhRTkqNTJkxQ8SX5LSw6ArWpgUcZbhc5CGCt7LALZ1hFDLzoSPdWHFWeNTBEGjhrCYa4TA8VGaKvVBs2q7eLM37",
  "key11": "3HUAoykn1U7uJmXCjCDRJBozcMoQqwsFEvUjFWuZ3HfxkArLbPpz41GcEHj3sBgwYDKEKRLKeWTk4bUHQXdQPY6f",
  "key12": "gLSHUGJRtdCHoPmheWqauBEuZtokLvsD2K12jb3BrsN441AH8WXxCKVEdJPUcyfwnxhqXd5JPC59xXGo4dLymzk",
  "key13": "2EuoSsg3c2VryBz5AsQKZyBodDyvgzwkPfGxNWeRDrTWHvroug1x6ZZi8AZd9L34fgJPjTm7fF7GQpWUMfDwSZ5q",
  "key14": "2dC8aev6YNMuMVBJghiGLjUmcP2yhN2gavdU1ri2UE4KCTVeDaGaRX5DNdxm7SUVkiaYQ4wBbeLsf2yqFg5LB52Z",
  "key15": "xS4EL2HBzd16uJLQaCRAcLiyMBTYiXSQ936NubTiqC8TnkSxYr1Su4SPoJRVBbbdtehx6Bsv5BYVneZ8eyakynZ",
  "key16": "AsLez9rfCaDto8tCpkBbR7yKwznjdFgNygz4iRf9R1cp9wsVV6Rvwm5BtiCRWdmgN3V7oqsYJZJNchVtLth8FaW",
  "key17": "5z4xCmi6mTo66Ewvo22dEY7xofRW9DGWmcrPcNjoXqVZL97oB3rg5MiHfTMPdgnhyqzufVxdYLqGQLWXPswsmPbU",
  "key18": "4v3LUUJJZcC4QJNXsdcRA99vqjmm7TtCVDyoUZwkbw1QfMxz5yRsHDBf6ZdYacAWryofJZSLUVDA5Q4DcivoRddR",
  "key19": "61Qe67Z6t9gnW9HtscrVCh4nrBhCUtDsBLkBpuoQHGdtaJNKWo6ewzbtBBLA2MfwTkSZ9ENLTVKMuZzwqauJKHUX",
  "key20": "2YLKfscgMryhnAcuGLrfDjMwLqwCeCvkzR9YPCGLvKbXPpF3hKBxyvwdgSgXjCQxR9SFY9wHMVMsU5YWJeSUTH23",
  "key21": "5KnLLFaERKJMyD5UPxfwkKcuS36dte1LjTPd2pVwKzNAYxWGxp52Nmh7oQvu4vHhB4MSG1VmwbiwrGzD8kAPMUSF",
  "key22": "2V8fHSQH8qMpZiHq8X9Nfm2bkjqMBftuWPqpPxEYWS9XQDptGyW5KfAkdKsJakdnkRtw1HHLBmBzjzJ3gJPhEUdt",
  "key23": "4sihKD8YycgX1ZQx3xSP8s9aEijE8agDWV7f9FrACpFNJei7pdjuWZfrbxXQQTzSC9JfLtg2Z6WrYBonzD8gWkK1",
  "key24": "4woLbqcyUToCzs5czzCHgVWrSU7WxGyaWR8sGYBigtgDcoDTSLfqxi73ub3J7vmrtp84pJ9hPqLZvBjhJpQthph6",
  "key25": "5Q9JskG5xBU7MXvHd8FBRv5xpW2pNNfFbS9UUTdS41XDjwWX8audWS9h3reruTpLBFQKvXcQJV4NiCH1XPJxbs34",
  "key26": "566kQmKuhduUkS8k5GHRvAyaBLqAD3dbrnfGymxRaMmZm1JoKif7s63cEuwLbPsZ6nuK3Gi7feefB3Kvo8VGxfW3",
  "key27": "2Gip673FvBaa6H4K8utUa15MNt2yh1ipHRcnT3svJHmuprZK91EPSwWrdvWBACRKbRX8AhoaP8sFLgjB7aqoyyFb",
  "key28": "4hscpupGhygW4agnXBXse18CME4bNPU6FLJEUFyFKRSEiRdiZ4SiNNBUZpz5JNJAT6N7wvCAd9o9s4TLbU8SLRTw"
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
