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
    "efsVycbGAUmaT164mBJYwoRn1J6U9xP9NaAbvbfanC8Qk15VBDjn3ow6Uzg74WwtyxttVdZb5Gi3ub3mFPhSm7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFDUFCPEBFPP4x8xFyd1NY5A2wdoHEgEJ7AEkkrwZJgDN9gfJrr9XhgVkQzQ1dSgZGgoikhAoGt73DWWaUChgdj",
  "key1": "2UbrYUMMFuN9DcNhPPaRPmtmD1c59AV8mWS3UtYFNoggqFGw26son9dKxxA2Gohfza62mQAzxX1SCMmFJmeM8afQ",
  "key2": "5ZyS9mqB2Bddz8idhECn3jKAoU2GBATvHCYkYXetBMzUsjjQtgY5G1pW18V5wDg2yXBqNVB5M9pQTZWp3ziV4KHg",
  "key3": "XG3JZfk1r3FNySKcJxkbPxg4oXH97vmGWxd7FpUgBEZ5Zqov4sSgfj89MT5q4gRirbXXoBAfxiBddU5xYp5fVB8",
  "key4": "5QFchpR96kJgFaASDSFzmEGbjYP7dxBfuhKRuucsuwciyGCL5BK69afUj5u4M5Cj37tHk2ZABxWp57ueHnbLh24S",
  "key5": "3booVLWGzSF3M9K9mM6e3yvdoFsRh3hjgWWC1UeYcFkHPAsuW71iey7QhsbxPzD5rgyQKKssudeZBzmjoYrHmjdB",
  "key6": "64k7dq6JAqTd97xL9TnD4YtCQojC2u5wUiuokuBrQhBotTchm7evJc71XUz6qXhyHB4Rv5y9Qfe5w5EXsaN7PsoQ",
  "key7": "4hrVvanow2EbWXTYf7rH4ZJeDoMvAZMkbJQHenmkRighXvpUAE1trLDbZR3iPFzhiS8HBkdR6XYLRpDZThfcDLG5",
  "key8": "29hJ2x4MtTtN3XtNg1y1MrC5ecTyCmX2p51Hfhde9oJaaNswbGRZVVuX8qJ9BVw75KeBZC5QbTW5UGBp5yXiMHpo",
  "key9": "46jkXi3VGc9KJJSoB9gh6XHpWHkARKEsFWTebdjcZsAQp8S93uyLHvdDhbyRbfuZXXiDnjBvKygpWNxB6z8iESoe",
  "key10": "2kCLEzvTQANCb5FfzqPLK8yJGf5gUyCghhVjdopHC6svR5mTfNaMtYRq5cSyxtYPMz1dCGcruCZJhaGphWtmXh3k",
  "key11": "4TWnw1EYC3kTnLxXwcvR9SeKW6BakAVTqbpZx3i859iTTptnbuUF6htGGW4FW6FXmp949nKHGkNXvkx8GWzi5ALh",
  "key12": "2K7qC7vz4kRWPsnrteXQpfKiiUqAc47qzUDyEb27hVTibrCy3LFturY4xyL54hGeVbbqrSZMKBwZNGyRywU7EQuF",
  "key13": "4uG5cJB7mjMcXDCUMhaz2WWtRUpPncop1V5zuomfjPEfH3ue4jXcR7RAjQ1zw9bdp9QA9oHgWH2fN646Bkcsb58R",
  "key14": "56KAxLpDgtwXMeHUTzqwmJn6SL9JkBLJntvzrTN22Rzoyhqrb5HzPmF4qqpSmCR5GG33Eny5KE2tuuwunQemyhXq",
  "key15": "5fr7zd8iKobMFyBuqfHhVYEcbBKncWbH4pwajHCKi49D27ehgSjCx1JnCsGoX8y5sokWk796Gnh2beLaN1M6UtJV",
  "key16": "3vFEi4hPrRzPrpAm9Zm5tCtaJbVvYmqeCF1pYD8TxDDdDy4QFQX1cWJn2jG9ZoCSVPntLGWc6RhXzE7HchszKNhN",
  "key17": "5n3Du92BHLF4PGVrDV6tiEx1rmgqwNJQtRmeTCzN77aE5arUSoAVnFrUqL9Ngaf63G2Xe8cwtK9HcM3kukZp5aRJ",
  "key18": "3yDNeJaaNLh6nSUJseoATxan5kNwQRXKgr1NiAppzfBiLbbRz9toJ1scBJnXm1RNL2vQWxNRgRiKvi113MaNt9YJ",
  "key19": "2fjokKskSxyN3Kwx7vujtkspJb2KT2iW9pGEE2m9GNRtpAHtRKiFaXYFSJ2rZSc2s4A2hAZdMpz3Vr9pMYRjJji",
  "key20": "4Q87eHkLbumY7DnkfoGmuN1SJzQoKdPZCxrhc2qsfmknqD9hhUnYEBnPoPiv9FxNTJnnumc4gCoPYUtzMMyQRKbv",
  "key21": "4XjD3Jwf7gGW7CumzBAn3k58iWu25g8quSR6Pb229XALPydbj9uJtFpvQUFdJ9MUwv9vTYh71nscTQCYTBms1dyU",
  "key22": "TdTCGFD1XsZMX9TxNYHKQv3NQssNk4R2Fd6ZuT61DVtcc8wgvG85QX1c3t5UgTYDtygpPcrz5znFmUCAxHtwwND",
  "key23": "31u8kK3EfaLQ2tbfrb7hWAVd16PAVLqTyYD2y26nN2UdUhMSsqN1g9zW8WQTbxpVCXci27pJG3pzYZc1C9AaFfhL",
  "key24": "3QmGjD1zxfp3bB1E5tJq91UmBpjrbBAztYDDECAeVHSbTQGcuXFwozdbZ32JRsJQnXSFVaGHhUULwmSNEkLJqJhx",
  "key25": "QsJnNgDotjdXiUkTXmLVTv8eXhmr8jUsEp8kehD9fprBDdCHHD4hcrsmeLrFUfbRMeepqFaxnU38WnFTmxkHmSm",
  "key26": "5V5NXxK2PJLUTGzLWyFBo5ud26wRgeoinXeHJxyozCd8yssi1Vm7A4YhPt9HQKXBk2YJBNi5DCbYCFWqGXqmQ3SF",
  "key27": "2LSaKEQnz1cDfwb1gzmP6EP9fmA9FixxCwkesAvXebJ3j2VHfMmRU8kvJVPveCFdz98kuxzvWvnywCdJAuyaw2f4",
  "key28": "38on5sa4Vy8zQbFpF2rNyeons17H1efkFMLzhu5oi6kXH6skaeqbe9b3AKhViDptgoiV6wyNQiNjJRK1zhgZcyiP",
  "key29": "5obZ73iR4gbhRKa39CrDhynPr3j7UaYLf5gy52spd6APxFH7hqszUazLEhZ5Wo2VTf9yS7WnPTBDYSnouHULJCEi",
  "key30": "5AWxvcZbGuxU2scUPMZNMWirxyNTzxJcrdomw44J3vocd3seyo9uFjf6LZZNtB1c2a79EVHMrpZ5mYwkq9ejauGp",
  "key31": "5yDQWuhsrg8QTvLV6qcSDYv2Cvu5xCYv3EDJA8yDMVM3ZFurQLafnFXogYBTyA4JHWupnX5vPLFsAFvYL8AREsfo",
  "key32": "4oDKfpk5z9W1WKmaQLbpoY9AXQhmhU16mosbaUn6st7JwHsDiFB9m4dDgYCPoFTB4H5cbmFZX1hef9X6CVr4H7ae",
  "key33": "3EVHJSavX6b3j6TviNJwDSxUL8FNfHRsK6xfaKrbuC4iG3AAwyeQGhnVFGdgVtNsUaDGhyLPwyQUsNyJZpHm3vHD",
  "key34": "dDT3qQHApHxyaDN4pZyXJnV75XsAdXo9CUWSsW8rh9BNv9i6uxoGPHhy69DAvQAWBoq4Cq9efHHcxVU1hmyQwU3"
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
