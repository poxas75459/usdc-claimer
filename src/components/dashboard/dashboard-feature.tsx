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
    "3JXyhNcwL4rEAkg7MAMvyGMctFhNkDapKbL8EisBPeD4QgQVJ9FfJRbvAJt9p2oz9g8cAx2EnuGfdo9N1aMFjeju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyuqNNrdkqTxnq2NfbipTerRFd8G8L7NvWTc2e1ogbETNgcVogVYLn7kPxkFBntidu7KVZBu1HRsaKLquTo7Jde",
  "key1": "5yHS6zGFYMQXEtp3FkNw4V8mNB2q9yZXzfaKcM3ZdZezA9psDbwTXZZbHwDq3KyG1g5DuejeKE6CwAfdUPRUTSZ3",
  "key2": "yzsZud4HRPrDZsiNVAgRFXrZZXp5a6iCQY6ub463g6CQS3imENLqUfDhk1tQhTuf5XoNDokPm7wPc87dTmb7XPV",
  "key3": "56wuEVfoL478ZwdovSUaSivRo66qdrbbrBBfA1L2u5aTU6DzuevDjje9Yu8DzT2mfkszWzPJ2ZaHa1AKXGKQKqKd",
  "key4": "2fojggZuuLezr12BdB7QM93ZG1nWX1py4x6m5HsfiKpGJ61s6V47Jaz2JbAuAacLT7w8UsCWMGsNXBL1WFmCEzaY",
  "key5": "zPF5PX8AtvpwQMBPPs9TdZkoNX4XQk6HcCw95WfqtVQVSAh8y4DCZP6amNC1TUztgRVtjp7KGWdm5hshTLRzqnY",
  "key6": "5ABSCTcx89DVpHi1MnLX6XRcMNKBfN8xguZsRkBWCgj2PGuzheJUuxYHozCene2AJiCx8WM6PkNRwc6uofn5sRkQ",
  "key7": "5yJWpDEQTMjAYpxNbcZbfzTxCGnDHDShNDW5aL2gLbrGEXECBa2cMgAdoM5tUDWow5r5NiqYf4X3TzjEAM9aTooY",
  "key8": "5EfasBjy3YcivxzMLofiQy8FcZP4eEsEVkBBbN7a7A6K7P3TavZvsbiaJoCugvSr36BS3aU5H3rWE6LSeXajBH12",
  "key9": "ePtzSu6NecAbkCaVB9bT8bjNtQHm8LknA2Hh49Ykh7kFUrEprjTddt37mh3dLms4jZdX6adN4quPcK6zipbqr9j",
  "key10": "2d1jnrodePTr6deRoMgd3F4RtS5ArTXwVTRQzSFdSpmxvk7dQ7QpWsekyDw8exAxXEHVETU7TDDrwVj8sCcnWjVG",
  "key11": "4Yf1KEL41vnHRLUrBK7nUB6NEcE9CeYEGrhRbkezd3kTEMwMR3Tg4JAsh8JtvTAfpwex6Tr6BnN4Lt8Jvz3ifuDS",
  "key12": "4o6tyD5QrYsjKBdixgiJJcxnN2JoTAopjYdauk8dpt8XWmii6dPA83V7gb5rhhac18jcwsB64MMsrv1fBKPwgw1M",
  "key13": "v1a6R94FCupRHbz7bjjFgYmvc7BAh3zeuc3V1YAG5A4jQrT7Wng8rXwibhP3MgUmv8AXrDmvNegAiqpraYzof7i",
  "key14": "2bsHF7n576UBDkT4eN9G8WNeGf7Mf4JN2qpYd1bCxV8KtY9gmitNeffd9cVb8E78MwbMKRF7s7JBxvdQJPLppiDJ",
  "key15": "wbu651sgzz1Vo7NwJ5Zc7tv2A3L79BwSxDmfTYfRv81a48mTmUBg5UmYZbyBJerpX64cqx6yxCQAVaTeSnExnzV",
  "key16": "32VWvSYLhKE4ra97H3s38YFYhP9vAdLQuREmfCaEdJmzDTbcpnXbcMLgia64rUvGpBHMsuTZkiHAvBZ8VtzvfQBe",
  "key17": "23yaKAzjDueKcYEKvk842xGqPxzmgkTVKQYgZfE5Fcp1qnhkVCX1Jcf5quNeT8DxrTdnUJgSnuZgVRvT8WZyVbpN",
  "key18": "28SiV3moJreUqMr5yvK47Tn4cCY4vbYQ1KQxwpwSu724zYg6bybhZycAVaMC7bH2gNsfTJsvpzR2fZKteGRr9GSG",
  "key19": "2b6LhrLuafKZ6A1v7DcrqzCzzKCerdq7rGR4mDkFyJeG5ECzyhHUcBBSywph6s2Vdp4KoHfMRuZh4945aj3XhR1U",
  "key20": "5wuWkvz3rDc4BaSgiyujy2c8vrLXAUDt7RvBUAXebxdYei5QDkQa89Xwj8YHDB1xSvzQrZ51RpvxiE9GCSjoUgUE",
  "key21": "5p1biTumqHdc4n5SpDiRvrREwHLsgbSrnaPYdtKSZF6wjcqgNdxFXpYKSBe1WtRNPvYhU2gPP84NsuSXyhrQ8RJa",
  "key22": "4hXvbr878zatNy7Qmjeqcy6hZ9oCvQNri1c8owYuwxjkGnS2gPrNjbppfvpPZBx7MHEe9W7gAxTFh2oXdTafr1Qw",
  "key23": "Z2BxvH7gkcJaJh7YCiLdEBCHEooPo5Wgmy8RtBGeHnLPbYmzANFipJL3PdZvXpCk9E1XDbuFjDmNG6FNrJZti7K",
  "key24": "XZQZpGjneZnrrTsJ4fWAzXiS6hcrrDNnmnzitu87XQC4PMxeQ4ksmW8ST5vnRvknwD7jGgVGDX5eVWesbLrjCU2",
  "key25": "4rAYJFnC5D19twQgT7DBDsVnwN8yduzvpwwTKzH9YKRD2vDBznELRQ94XLssqYioHGb6JtVbKKtJJt9GEtLm8yY2",
  "key26": "5doU3Vyp2XACniHhQ1XCyw3rz1pVur9Ku5TNg2NERW2oQLAPcuygFoVd7eJUP78X8cK3UwNUxFo31xfetaqcVYEg",
  "key27": "3bYYJC6624A7jQ8zs5rKZWQ36Pcnz9Rhxsx8idj42fx54r9bRY2HHKt5nKpCUfkrWuWE2ixpPx1W6GKLWm9CdsZJ",
  "key28": "49YGHFor5JA7y9UHxmqChaDw9YTf668mduiE8n257uCZqKcGjqxoz3Z59fzstGC5SATncBBRsv6Wr8G6hQzeiRNj"
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
