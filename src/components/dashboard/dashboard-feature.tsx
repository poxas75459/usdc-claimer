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
    "2WAKZFKqvSDZC5DS1yEzXGtfiqGQUJSsDJzjCjrfnfpswb4hBkZ5bTr6eRiAZrqm32jMqU2AiK7TZxS5hcD8YG4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igH1mC6Bhvx6as4AJ5h7oUxCcj5iqKYmMMGvkGCcRbUqodgFh8WxeudPXxdrYEmqgSx8akCTxwzGA19ZUFsnHns",
  "key1": "5wH2os1TQQXxTYyouec7uwZ4QJBuY7Z56mmeqf3kDAa8tnLfu7F3Ujh1h5oHH8PZkBRmGerkW8Di15SJogX6nZYu",
  "key2": "Pbirz1StSfSvSLxsg1GkiP5QVfsLgr2zp4BqRFws34srWEWoHkALgmZjeU3Q5CpDs3bU7zPFRREbT6LREmqkX5V",
  "key3": "4sZRygGiTJoZzZBXLBvULgMViwJH87ZaDxuYxDPVHpEhcMePYHoCgnwK7mQGDowEQ975BkSYjsmZd2bq7o3nQCdM",
  "key4": "2QctqDtcDATsSamfzSJp3zgKprZqDJWdNBUXf78PWTbDXbbbYRv1CwEtkjQ2nJCsQgiHvCPJRimPWnUbSeBeA5Pf",
  "key5": "3jYXHWY7X4CJKEHDu2GTm3MWnUJih1jAezwmvc58JaL7izcjCAHkcCD23mxUccpDG7MmiYSe8BB3Wz7P2yKJT6bB",
  "key6": "64avqgRCnhFR94Fo8YoEUg5mEja4NLLWSv7yTLc3E2d2ByDaA3ovxZiNz53qxYaN8WF54jYhFDnf8uXLYKSs6HUB",
  "key7": "2YRYtiswv5SUYvG2ejcVhhbb5BfWobzBVqZPYj8xa1z9BAzxEKVenAtpmpu928phR4sZCsg5wWzfBpzZMqtitrms",
  "key8": "36kwbcmaWMcT7uWmfVAfpHRqgNrc1DDw6wuXzhkMD2KEPNLk2tgkfTo7gmJj3QvBvYDBS4fbdc74yoEAB7BsSZ2t",
  "key9": "4AgePn2iFm7FPFFmTEzBDxM7mj3mjhhidCuH3r9UDEdtrSkaaTv39Y19Tr4fcomXGZe2NtxkkLNFNCy1EFeq2nzH",
  "key10": "5bFzuqUzqwZKmYbGT4AxRbYSg8KkD8ga9DHp62h2Qtca1AsDGDAtwr2hYaCJxtT9W1PK7agRf3TzBcGYgLMjqnRc",
  "key11": "4DxKM25dhkAuVq3YDBq5KyFC6hiiPq8azLapf313ERdteaSvFcDgdieMto5u1wTAhkAunkSzDBSUdKk3XHDdYMN2",
  "key12": "9u9kuK9pJv7aAiwAGX7dKySHgGZaFdAE2cNyuFexhLQUq2hHSAHTkTW9pciZtE24inzcR2uNUsMryhHUcHrjdtw",
  "key13": "5Qs1Q3s4JtKJzoiyE9rQvyqRFz9PMUDGE97g2gm5XNR3QytEXEPzNtko1NRB2CYzGrELyfJ9NkaX4zfbJbDrFsBE",
  "key14": "5NthrTcfrUUFzk7HdTL3h32422qV7tk5nkdd8Lt3YBHMGrKjtFeMCXZbYNU1wa8cwbkkZb9aidWQzfNAqwgaNBWd",
  "key15": "2HK2fBvJyseycXLvyiwXC316v9GyxHrT8y3LGEwPnPBbvxs2mDgqy7kPABCKSEv8RUkPzJYyNaG1Fp8dnhNCunWs",
  "key16": "2QSLq4EL8eQLZGFVorEUaGNUg72Tg9rhfKNFLZJzniF4BuHP4TKvJBR8wd3yDVnJMZ5roDp49fg66gJVtFVGLHnp",
  "key17": "35Mk6dRxA3LVpCBiz96yGA6WqWh5vm25CJVrX9bv1Gg3DAjmF4CPkJ9pAEq6FXGDxKBop2ATkz122gPYTQd9WX5b",
  "key18": "55MGQjMbKV6LHXBcPTefhLQLoZK1SCuu843AtjP3kXHop2Lu7kxG1YBHZY7xMqVyJS8qnQGnkZq6x47hNuy8dygu",
  "key19": "2KhkNFbswVAHgsykgj5UVTQX8TuycFBqWDXs7sLHNcrj6qvNWC4JtiWiseFoNLdhFMeHZwtbLmbar2sy3AZRsFRE",
  "key20": "4yLhDt9RxyN46mNeE5u54jkUfD23iRgSpnLtUKVoukvbcAroHQnxB5duuyvdW5nfgEbbqTGqJFERXZVDjywSJ4CL",
  "key21": "4G1VSdbrRuJABqQanvRmhuthbjwFbJXWn8uEtdhsPHr6USddQmYBj7E1mwvPufRPCN2iCa2DPhMuP3LKAgcjpUpi",
  "key22": "4syTPnzoe6hTaohoWSWjmiom7ruBettQcMv4Bt9aPyoCvdcN99o1ji3aVKwK5b1c1rUc4H6LZDGg9ANgaNwdf7rU",
  "key23": "2ToUMzaXvEdghWkMx7aAga4AZvREV4gdeobtrwuJ4XWxjCW6ihaw2hrt2xjQthcDT1AcCMgwixHRgDpHu5vQT8L4",
  "key24": "4PHYApdc1BxBG3wwAgKk2MkXkxFNBCxmNcWmQ6NnQpNtoWVbgHXzpShgrRSeZgkarT3C68gyZhtPU9KpfyEnZWKc",
  "key25": "42UGBQCD57skHeo3kRxp7T7K4zazNw3JZDb7AuBja239fr8JWRcFkR5bTD26n6hiZ5Pg5nmaM1PTSisxaAaDEEuS",
  "key26": "2LGWaPJ11Nmuwt9DVhEVs18Cncfg43YKXxpwGxUb6xMF476R6iN3G9wMHksWQM5ARQfdm1zSHuu4FYMfxntanaxj",
  "key27": "3NHEG62oenCgrPWPL5UwiQDjbuMZDZ3AfMQ4HoNfNedPiCFfXA4rbjyceLmq8bDNV9LoTP3vDSnhs6hBu7DfNmpm",
  "key28": "2gToguDWbFBQMRS6wE6jcUJgZTKsAqZZysYHbUPG3DjqiqRJNecRzXAMVjvxoWwXjPVkj8bx9munYTdtY2Ncu6wR",
  "key29": "24zYqF7gJKYDHA139QMVvMo3C27ZQ8cEqRBxuz5jKrxHvvEwLYCB3zu2t2G43MzsP5ZL2apaHJxod7qswZucK58b"
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
