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
    "LKHWYamdFPr2h5FdiWbix6wD1xLuuyQzMiVDmUGnx5ocmxcSnrBcsUkG1C6erhyR7iwen3KACWhzhJ5MMEuQkBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xordC4wK4UNWMysGTdBVa9AF1VU3nByU5skP4PG6cvVUJxj5uRbvNbrAwRREzxoeJSwWm7PrZx6LQpCZakXFQSk",
  "key1": "2C7eJBKTqiMvQ9wgVJZp13MuDLL3MkZdAEdV8FGRpRGnuFaGGhtzkqAPhgnggaLFeU3j28EQ2fjdKUHrGnXdDxee",
  "key2": "4pu1Band977g7u2TTctzYvZuzugu1SWnxW8tBpqfeAQz4HFLGJ47Tr7chHu1uvFG6QP99QAEeNGpcajTQS2kWwYn",
  "key3": "3bjWLyy3jdPzkJfgdxwCxby4khSPyooyhP3ksHmrZASP1wQj1nr9SusBqnRErntX23D1rWHrsEQiPFQvo4brGLui",
  "key4": "57bq2noiGpHAEeUdxL6RSv5L5WLTLBGijDif9EVHCFw9V4BY8msQniF6QmzKKLsSSs9LULWYA1CggqRRjXQUScHc",
  "key5": "4jRiikHzLWCjKVhm7gNwWnhERi9MWJ9tdPZDSRKjhdDGWMwfjZBrd1FV9RMJPZLuPUUzuRnjVh2Tah5XCHWr4JEC",
  "key6": "aRqyVP5289VQdbB4LnM4QLcgmWgyWyRSzmf79Wv8iUrHTPuDV6qrUGiETnqndt9nWBo4XVZJfQ9WyNX8jmsXhUf",
  "key7": "3FbJDPfFkMQgfPAaiXemJ31m7fH6843hUYxr86XJdWhRUyov5vXHzxFRDuCJQK7X6No44UmYtPnVag6eNactj5JQ",
  "key8": "4WQKpUSbGpdFRzHKe7aoiuDLVSmgqzryCEDQbdNj9bNQaSdica1CuhK1bbG1qRHy6XqL3E9aUFNuorqo59gqgp46",
  "key9": "4Pdx2EzGD48HuT7gkoo4ALUCZDwhyd4A7tQZcR48h9gq9e4tg8Ege47d4NZFdUPxEcCpQkL1h7d5jcW2W9UhX1Sn",
  "key10": "88jeN9f5VPmhYhYrmVbB5bTVZ95Qgr3qWNBHVyCiPkh34R1uQQifYQnWPGsJb7oW16GzoAC4deSQphPRCbGuwLr",
  "key11": "rYWmaTysM4PQWbdQD7bqJJme8V42TD3rBK8XHDnUTtNwFm3RgkYpTXz2cCt7f1f4szMsx7Q7i5TZx96ADB87rHo",
  "key12": "2xhQ7JGUSL3MHGJ6TnysX5r5qrZezch5K8bPVJhsv9LA4UvQnhGQMYDki7RWaAzDayTuPhKDUVUcEZS9apYQ8ABv",
  "key13": "L6RCBbRuezC2ZLQouogN1Wj67tQjqr8Cre4AKb8bEPbVaaA15AdN4yH8qFpULQp5toN6MhotjdZ1QcjDDYSrPVW",
  "key14": "FpLP2EQhrTHHaWWBM7hLz6YmFFPUJSfZ5J2vJwfD8yox1bPJcSkmikEC9yKVAFqHFkSww1tkDKpJ8KXjCjadgux",
  "key15": "vQdnnXSKgxRnbmmGGiDp3E7Wcb87Qio9SR7Z8GwQfYPCTG13DJVa4iX7nWNyu3BfAzjZkpSLbBkRnnMYnncVkm1",
  "key16": "4gnRbGmYWUpbeDHfr6iKAy9KM4B77EcyqpnACd5ayKaZA4eeewGrb91dnNz9Mn1p1zEmR8BfUm9hxNPXqTVpsvNJ",
  "key17": "38QiW5ZVfSRaHMGLmiajdjPxUSqL5Q2pFmMYk72JP6fwEsrbmPvoG63bH4AyJJg3FFnTRtUvaquDWmDovAtKXawQ",
  "key18": "3crhNc4M1vj65ETqLhhFprb4i3KwMp12LfHGLgfKvij4scUFrpnXAeN9X6qn9pKr7cwkbcHWEWvz9rYPQECJVnHs",
  "key19": "65hEL3EeZYwsZHccTCjEm5tT9JAnGbyGKERHU5vPRy4zh3b9iT5CAih7E3HNdLUhGniaVaYErY73GDEWuysSd62",
  "key20": "SocjEBkZh3GEsaiECiUdvgL4vF7NgeLVCaeFhjQGHsTdHxt17WstmGBJdyDgXCirAaSRJnztLBomSyRWskWyr6W",
  "key21": "5TMtdLjxFkXQk8BddQZY1Z6wSYsJ5mgLCX77yP16eAdxwVT9rmrF342LGUd3hk75xFy5ZVLgoL8KYJUUSFEsJnQ",
  "key22": "5GdDUWh8ckqRgCaPGrhGza5LHue9ct2qHnL25Y3EfvZ5rWWcYnXNhEoyjHgozLq5mtND2hMDBsRiMHAE3FSz8L6c",
  "key23": "5zBkeJW1KCuirh6yqP4pMWARRMxBSmdLAeeL5QT3VMgMPSFSDWVTQbk5Dt28SAnLWpzGkfJmMDpsUPAJAGBkbjRc",
  "key24": "5wX8cBur4GtAtr8ChgYBpPxajE6wxEpCjxNQLwosjiQHwLuC7GoWguZuXU8pyXRRPGFrcesS8otrP9Su597Wyphe",
  "key25": "AfxdEdGRrFsw9fT312QJnj2QjJMqSXpAxvYN7uLHWFmNpNN1Hxj1nxBcjXoQjTQ1PWX6JBV1RM2swYHuta1Qnyg",
  "key26": "3vAAebAwt3cB5HXYtzspjm63vYL1kidkXv8Ha6zntTqyCyHCEgqDESRF1LL42FiZ6o3rXv3L2fKtkFPGxshmDHG3",
  "key27": "3nSJuKFNtHLspSt1azYFDwE7vSbkPJYuDkZV6P4idfwaN2aDrZQ8mDTpGKxQbmXt1Zm27P295EcGnzGQXFvsaggh",
  "key28": "5hMBweFmheUNthnRgqs8PwsNBfyVxs2gvFXwzq6kSemchSL6jPijJJrNB2e9WvB26cRRfKEk7kDddG6P815vwcfW",
  "key29": "5AHz9Npr9fVnsTgQUVeAt6ApvfWv7SpZC2fxoYEg3mGMB3sp2cwopKUBeWDo33Sz9fTZ3G8jzz8HvwUgd22qorzT",
  "key30": "6s5QD8Jz57w8zg37T8Zm5UUf6Mhyg3wdWupnuBoSnVQpWkf4KDmPaSDreEhpb7RcMS1jwEvsQVjg3pM8pvGbaeX",
  "key31": "vLEUUBmtZMJbQ7SUHQ2RxrJdUKhJC2LdHkmXGDB2DR7HPM5yg22xqKSdtcQbDyuD6ypFxz3hSHHSRox9DNhiUk2",
  "key32": "4vvaMdXU4nna3TvfX4KxSTXr3vrVMYJ5u37yjnRsQtn5xmjQVTkDzUc6pyijnkCkVunN7ThQKY42pAKN2YreGAS7",
  "key33": "4qHbwMoNpLrewPpCgaf4CcBg53TQWRGCx1QztZxvZL5weYsoPQSJJ8AHN6kd8JwCa3wmkPAhUwL5C4XKBeWu3rVX",
  "key34": "3Q1cWmjDw6h5VfWamirXrF5Qj7CZVfAxz1XWtcjpkeGE6vXLmsCHoFKmATiJBpU4rkXNZ1SYMGDBFbwg4W6ckxzi",
  "key35": "3WdASR8iWXxY1sNw2NE8rgAasDgvGmfWb3vJvW2fgwGGYv6mWjf7bWQodKuDND51g5HAzZ4Qr44tbY5q38ZNMKeG",
  "key36": "61igJJrNx4qCBCqi5e6yfXRnFpQcvE7oMB4k8gJ1BYHRUg37EWYTHpqHZRDSzcd2SscTHPHyCGvpVz13jQkZWARh",
  "key37": "4Uwc7cYByFAYTJCTiDRmNbww3WKpN3Ht6SGbVUgfbA4sw6AYZS8uShXdMYw78FwWykjEobT4ziuEAGxmhW3HFyUr",
  "key38": "5CdZ11jpK4kVpXHgPhJQKAmvGmnisWyQizfsgqbhTYChnXNGVXGTSAvMS61DXQTjbzP4ymT61wpE97QhGuAnKMHW"
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
