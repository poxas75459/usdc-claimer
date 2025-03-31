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
    "2Eo1HHBys6KK2ne9Jg1tHHKa36jE5xw447fu4ZyCkFiP88AvBhuksTcUqCQYKhp3heAmiaG7AJ5brQy9YgpqE7Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H4ct5KUKEYYDjmHHY9WfcjbMUPCKjUrs3FhCcd2dKkC5TzgP3MPvYKK5wN8gwqb4GUkPsE7c3DxmSaHNqFZhqTJ",
  "key1": "5w81e1XpxGrQeKqAEmr1XTWDk2YnrEwVf8pcPTVWYgBpzRpEuB1ShudhUP5Avsq5f34kER7hwfL3x8gjYoUyxHWx",
  "key2": "5v9DTzobYNRkdYLakPqxUTBQpocLtgRtLtN8D1M1szfJV5RGj21dXeU59qa79yVBV25uDVyG14MgGL4MBZS2R9rf",
  "key3": "2jtnQCzhWyotkrQ6bWQq5LmcSoxn82pkkV3nWThjbB7o1Er9iCt6xS1dUKh66uSXthKKmpvE1YGPqTXSDBPnjwXT",
  "key4": "445wY3TtoWzBwhDJ1PNbvKxfMzKPLrS9oHjSMnSGjDCprEj2NZ5euXdg1pWQEr5TzywWfZm65AZzhXUHtMfKtmRm",
  "key5": "3WzF34zbp9wPcD2agDT8v9SwgH3Us7n8naQqGGitjrcSD9yNMuqUrxB8Uo8vT3w1YMTVRNbuy26RBjMEemTDyX5K",
  "key6": "3h1Bn7JcgPAjXy5mDNM5wRHeTDNyYwqeUVEzdGDtbji7K9aUGdp5BdH5cemALbjEQQEgpTR3dB2tZjUu7fQnV8KD",
  "key7": "mag6tVBeVVTsBj5L8W573ga66hyKLpt1poptu7EzHLhA8JZSDnsbm7dGNahEpfjiGnHNzM3saSDQG25FhbMvUyC",
  "key8": "Y6D1T4WJZKbxxmWcT2nZc1J8gapZArwNWxf7rZg7Gt6TREGD1wZVhYbNWuRgMyGgYoTDae437yWcw3UvFfJxbyc",
  "key9": "4i4RH1HVpJhxUERaZ9t8jKZzyduR6ZxPc3hBFovSJWMHVq1kgWSrUygJvJgBqLUG1NBew8QpP3RRzyC6XSB1hRrU",
  "key10": "45yyRSFyGh88RxWTFCtnK5JQAwRweRvuerB3ZBYPMUf7o2uYhcYah3VqcG9aqF1rG3jtSnKejdfWa64pLfJzdFK5",
  "key11": "2NP5HgyaH39uPatw9w9XJyZh22BdNSRW8MszwgWozyUgMkYcZqKn3z83WcTUbhv71sN6shkkntLxvMSCqYmB5JSB",
  "key12": "5hG8c4RmsU36LrV17BcC6hsHnQE8eFogiD6VD3btfAu3bWsbVbAGuodbGybajXkCsBWyyfeCGKhqNAztJX4XVqAD",
  "key13": "HuFJ6AxzVknG2tBwnKj3XJEpRv95cWcosC1H4Rkm1Xs8ZyCpwUcEf1WP68FV1Ba9iyZzzjqTBEMtViF4bP6y1LA",
  "key14": "46zgUe3cBR5usmUkc4BpP83P1JX33gDczT6hnS3YuaF2J3Aiwg6dawUZLzMNU71NG1aoeLmgyG72VKTALX9TfZBE",
  "key15": "4tCxDLnrw6vLFGmSNNQnQZNV8pDaMw887eQf6BMp7PtAATpJxc587s9ZN6bRVMxo6t33mLVbpr5eKoin12eHwZv7",
  "key16": "wgYerAHHAQoRgMArJJCRVc1N3STF1A4qokgEKv6GwLqByu7cp3hZQedp2r6fer3kuvta9rCyUJFzbzRCJdhfgai",
  "key17": "3yopMyiEMqqBjdn6Bzi9yR5BPQBciNcyxLDvBcRMFwwYVh8coegDNSvuS5ZWYnSnfbR2mQCtt6TN9w7Y7LJSqvBx",
  "key18": "5w9jCWkskjLBhKZwZncW6MJnXjtjUFbM7JNzzdBHB1WCgaoHqbnDvm5dEgkVL769wXJaoEJNFshfCBeAHAz1npPV",
  "key19": "2GxKPhq5EHuMTBuHDUaYpcCaq1jNjE3PnCpiykX36TrGMzcWeu7wbZi1ZUAEoWTbbXC2w8TrWDATLEXfZsP6j2sN",
  "key20": "3BpoHbtPKYr4cNjp5ZXnqrHLRqn7Bfsv2ssrjxjEp3Wx4DQrVG6VgfoFWehyoZh19NGfYXebBRhmz3cizLaAuAQk",
  "key21": "4gbFTUdMTVawZF7yZeiGkACmMtAMDDoDKRNifVVKTQz9tZM87g6fosvGujJcXLGoQZQRjpw8dMsQBRmKgGs1ggT2",
  "key22": "4sp2QNheuVdspY7XhhaZD2q2s7kRr1B8uujsDKPgMxLBeCMAMF5iLjTMv32oJcdGg1P3EKGRrUw6d8KQuRi2kx1p",
  "key23": "3XPrTVuM9tKvaxuXQC7ywW7SZjFXpSJ83ZCJs28mpk88NruY7aTZoNpqXhfjrYS5Gfh1rG9Cpf8Jf46etDuQqku2",
  "key24": "5pg1ADDrM6VNM6riif5H9Rn3h15TbEsT1huBmChkJ83RxJj2Hq9puRDKGZmsgoJUSpLMpGDwj93CznPyZYzdRDsa",
  "key25": "5MScVinNozFghsG9X9n1ZGm2k4MQdfAzFttP9Drrs2TF2UgvPasjvNkxpwwmRXwqcytqCq9hi1mEw94sJFsosXBW",
  "key26": "3tyRTLUaubXCrT8U6BMC8xc5HMhf6MCEz4CYqMHtUN4brC9VtBv9ThS1cVGE9Mb9pUm9NfDCSMoRXo2weqQLuXE8",
  "key27": "JiVcgNN3fHNHU27ziZUPPU1DXL2WXb9gWdLg95WS7mdWFXY1SqkrGnJWgHYDc4NDCDKBNPFahAshJuBXBwBVqzL",
  "key28": "3uYyUhqiMz3BNvuK8yBtjykvPunJuax5TkiNm2bqa53cWGxMk6pKefvFheZVQy5w8NESyZsXicVy6N4beoZAewsG",
  "key29": "5c2HhgKEixxrJmzPPn1JgZE1ffKAPKkx6H4nTab6BctG6PqCTurtDc7SCYuvR1A4o152Xeog2CKwDe3wpCKwXYwg",
  "key30": "3EpwF4RZA9yyQXWy9gYukTfWKZwmhdg4CmdRzJgKA8QsVL44dVLbKxXFLDSXHei48jPciBhHpxJYsATF775dm4LF",
  "key31": "5v6WoSLuVDwUoynxL9LiETPnEgpbKDchygU2WqMDEmcRXbmWsHCxijRmntwHN36J8DEKxvaUdoxvM9vx861Cdem9",
  "key32": "5afwz5MqmHfknw2qX2T2bMvTko97eAAoLWeSAtCBjzHnuoJszhJ9VEE64UUt4t3SENixiFFHWHszuD5XMGXjLJW2",
  "key33": "22J7mdgFp7kKZe2RjqquhJctGpZQxbbahpCgLQq5bJ7d8CuLP1vskPtQzqHjiRoaSRUE4Vekj7q4632QNfymtSaq",
  "key34": "29qd1ALDTPJ5GaL7iF6qiketJcBtvgnpXBzHwWtBmUj6XiYJnPJd6QCppPvpdfYBFr6poBraFbHA3tPL5nCG8QQ2"
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
