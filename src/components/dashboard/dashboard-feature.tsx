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
    "39eJGYWZSaz3GK2DeyCG4koVdiBM9iJYDiVL1q3Q126HLnPqkPi1iD2D5Q7jJTR74vQpvq4GKdbmrfFf2wWQvw5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q3ekquVGZT6sifbt7PDZ2fkwTEWh9NinDnS8a4drkcEzMfxjWR4YmaHPqPSg1ZnaTqUq1gjnGhYbUE27U64FDLS",
  "key1": "2PxpepdJo9wJkzDMxn64RpMniRuXurq6F4tnM8M5kbTN48NGmLbwg6CGddoRa9LemcGKkJuGAJjjC1sPWLAqtEd5",
  "key2": "5N1LaZ9diKLNzLC7bwFpQMmQEgo8n4dfqJpXLssoaykpChd5LMibbeAKBP6Uk8z9hhQfKWGQvdRLDZPWuEmZZbMv",
  "key3": "2q4kbahxEC9mAa3FZHrRXmsMKm4AAmTQt3XraTaY42kNBNLHtfaWSgeucbAFnFxKzpKckoULrb6B2aCrXsMCjoBn",
  "key4": "3rBuWStvzmcWXdDTyhfKm8FxVBtKXGWNGwBRSNXfrQqvUrmdjpde3v8rKmwdLCTvH8iNT6TMGG9zjdFqza5Up2Fq",
  "key5": "52Ko6hTnnMwzekHHrb2rHTYmAohyH9oKAbXgyLtXHri51yEZR9xHcBWuaGx4jtPABHLNMRXaPMhPdQCE5JrND4RS",
  "key6": "3zDLmQZ4BcWSvCdtjacgAw1rNPmVWni3K3E9P31eVdTcxVMBJRh8BnAibsQ9k82bLgu6JzZfTen8JyikJHshnpiE",
  "key7": "5BC1ezhyUfr8bGBaGgYPiLKxubEbU2dtpueAABb3G9sehHMnkv48EnSX4LuhKH4FfZeuQh384vP5F2otXdfMSY6X",
  "key8": "5RMSfjDAoBjufVKHnbXBSyYCQseVHegk7QpPwcGadTC2aYLgGdKkURyUHDLYieHC74i37js8r1PbKNGNpjSzDMyJ",
  "key9": "3MU7Wg1XPWWiXhrj1Xd9CPqmo91PUFAcV26WrvLLm9L7dBcyMvDWrjoZyV5JCnM88BXpc42qNNzsCov2Ppr4vu9C",
  "key10": "2QPToyVCbwRLgStxiGhorbcSFvugiCEwJ22H1Uh5Tvfqe53a6VoNpgdKS8hKeAdqbk2SqeZw5MaKbNZP5g9W8uJZ",
  "key11": "4FbXV7FeqWhja9yUsCacrY66Q3qCiMvhqYu12UQCF7Z81bYsJHpbSzq2HrvjzAPLrqVnigBwNZxb8Jtc16iMShVA",
  "key12": "54ZA9iehKw77F1iUGWwiWAaJUzwSWkfwtLbFv4Q8dU4woMBWc8DMhDNs1RpukRkN7s5R4peY72r5ZDwmZWLusDQ9",
  "key13": "pKWFesSxDcQPCA5UUkhFFGd9k4YuMcHso4sUXGEUrgQvcmCv16P47F7oZqj7TuLswmT9a6ws8NuMUiQan7dqkE3",
  "key14": "3E4G6ezLLyEs6TivjgoEbLS2pWqFZAiJru2WzRbTLvnMdYnsymx3aptWSnsujD5oib4ZQbdTujsGCPbcsDpJivrh",
  "key15": "488EcRdooMy3VD7cHZNUk91JHsBxngRq5Zjxkx9vASJ9pK3hJ1Tfpjj9A8spWvYYp7e4Pxx2BtgWcV4BQb6zCrmo",
  "key16": "4f9tvomcccSU6Yh8vpxZYGVXwWk34fdbaFYj6PejiBLBWHU5gF26Ptr8C6QjstVxNsT9Tud8YYTmwBLquiNN4DoH",
  "key17": "bpwumKRAdKU514f7uQ4rELyFE5tfRaAh6X6vEpNsdYaAJ8ppoSCS66FUYk8zzC3CT9etz9CsESgGkovdfWULoqy",
  "key18": "5XfXTF8fKEaTLCRLsryv5QSYgCA6dDmxhDobY2MLCsrww35EJDxwnBqUDe4jixf73Cmm3MZXnjYSHUezBPGeBojC",
  "key19": "51tRPabFJoQ9PWfxvnacG5uYRRBeiZxpQSApBXPJCJtDiBMiZASjJcKQH3ezTDyjcW4ZEk8SN3K6k7nhVuRrucEP",
  "key20": "4fBTWDuaoVipwyskqJPD968hbJ1U55kTUZGmQbpNkAVsTSY4WJFyeRWyFvseHXgczadRXqmwS6zxMgoHd1cqcHUs",
  "key21": "xZQPeAjVRHyzb5i3UEoLQMTimqdRdNtzs25Fq2hAJzNQL9MUdbA6RUofCKgeW5kEagG1h9Ezrz9uwiFU8CUcXcF",
  "key22": "3kGBpZFGFp7583oGUky5Dig9dmgSWadw7ZVGuKvqPCtb2q4hDXt5VgfBtAtdp56ZoyPpkJXgvuhHuP3a7gzC9x9s",
  "key23": "5znQjLsR9ka91QuUkQYe4kKuiieVnBBevYeq6kFYHWE2K8yyvs8ZjDizDnY6inBt2eZ3sNekctmCPxHVBoPPMtzZ",
  "key24": "31iq75bDHqCMdsUj6R1GtGDfZBA3BmCRADjbGHpL2XewMb6fd7u6gdF7Pm3ZJKCJ96r9hz4V7kgjo6QwihXscjgL",
  "key25": "5Bm87ZQnX2n4eVcA8uCXmUXEHjSLqfBuKDVrC7atwM4MTB6JJwNW7ksQUm1fbU75Da2mma7qcWL6RikjXqBTibiY",
  "key26": "5qFmbGk1gTv9FtdSwbh3X6WJTS2C9YS7fvqvFZRoeTwtjjMVa3wvgj2BtiT7JcCid43KYjS4EDYKMgeZTDywtCMX",
  "key27": "2iP8pHyfcaPfAXpd7FgvFqspBrgJqVX42uLu7jeoz29BWsR7qfPLb247c2ocMQyU5r6bC5bjc7Ef4AWXKUxkxbFK",
  "key28": "2nDNvm2ivBFQRwpRWuqTEDtikdkqcvBA1ST6cwX55RP3UVbHHFMhdAAim2JdDwVzAotG9Qrrnn54ZsMmodKtrA2s",
  "key29": "2gxEG3UvxQCYs5W24BAD9S2rifPCZndovB6PyvT1WnQyV53yPyXwXkANBoM1BQNBJaX2DxvSZSebkXfva9K9ZCv3",
  "key30": "K8acmjVMfcTRRPNhvzffPfy5iVEbpPh3rM3ArP4B96rZSG6JWfDQCqHC7sTaJhyK9JxB1sCFbA1mgePc86nFwTR",
  "key31": "4nyiW21ktBAUiA6WRsKyCaRyQFnWZTi9ZnEos8SxaF7vQB4vcqjfYN88hpdVbaUSkojkyTyy9RhJTLyxAmps8xSN",
  "key32": "26rL3xYcwucgFaKKuAmU61f1aJSj8HZqvaRbLNLs9fjawpJHdJ6173WWbNJaNqCsvCGTtcRMWzqDAHUHxerERKBm",
  "key33": "3jfBXjuVo5YgmTzoWaquK2KMh8oVQv6xzFS6V6mKXkhC2EvsBNvXG1wZa7rSPH9FYxgeQaNKbVQWjJQX443iKon2",
  "key34": "2wi899NwkX7RmfvifYRXZGtVMDfmWJp1cNm8UiagoNkJhqZackCSwn5pwQ6wA9mA26WD87fBqtUxgF1M7a5qc3E7",
  "key35": "4QRmZczetGveqw1v5U6rJRY6EKUjpfPMuQ9gvLUrBYouycytM9u7mhNhFXCCWSdj1RfVGwZZgCxs6k9EwsKwjgh1",
  "key36": "54Z4T6ji1SFDgVGomXYSuUaD7RMYky32gKP5Ao4mub434SrAAad8SHE7Doru5TtYHL2BrFAwBJSMhc9qHxJaBEhu",
  "key37": "5RiH7D5pbisY3m2v8HgWhtQvHNjHpEhSUvxKYZZPYVNsnjLRcXq3UZbvb2DoAw3Z3mCnGfQuiVzN2m8dUdL9Basu",
  "key38": "Mmxh49fuhXJvq3vAcp5KdLhR7gFrRyY9oa9UipzUCxsF63sogHuwXxRzJLMY6UucSRrE3LxEvJELg8g7GiCVFHQ",
  "key39": "4xtid2WwktuZ7QG2LG3i8nfqPz695rYQzJ8AsLxnAwGzabeAq9sGuNsU8yyf1AgLXb69EKtfXkY4DsqvKhsw8r6x",
  "key40": "3mNcC4uPPsjAaKw6qpnc9VVaqmcpnPQ1BiVyzW2fAmD4dYzNH8YVQg79qgnVtGELedWoBJvQLeBamamUxucs39ct",
  "key41": "wWVPddttiygibUybs5YNiWpdYiBgTUAQXxDy3SnN9w4vY5di92cjEJFt48fK4qMiQL2YTzSRasgEuWMthsrx19S",
  "key42": "5EPqTDE5wNoacjDxfDYXmDdByGg8g7te7BXjaD6ohBUXPs3Doi4hdBokamGSmAa6Vn4Uw1UA8azrrjai7khksW8f",
  "key43": "2HhYUSCPSGRmAiB1WmZL8YcaDkfHCPgLPpVDp4uT5DH6gX9UHEyMShm6DnwLWhaEiL4SCoHm7GZnSPbpGVovVmhU",
  "key44": "35zNi5pWkskEJn1KfagmDeQbtbGK6zSmhAH9g9W9tuiaPSDvvSytg8mzWpzt27qYH52Fckee2BLVFK7kMDf1ciZJ",
  "key45": "4pntjmqnTXHyAnJbj5dn9PU9CCgkEaUHMQhizCXy3cEsm2itrRL2vz4dQuznXF3ydr2kT5r47u9AbKitjbfqAR3U"
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
