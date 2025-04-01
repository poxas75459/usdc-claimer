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
    "4LdfvrFEwTS7viwGZptgBmjRDRzdH91pGRmJ5KBoJYrpo4gKBvoho76H1TYPrsYLzkenTts5hRdRBituGzNTMRZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Du1MWiAyt869fLYxkfYHNNYHTYZweAx4p1hotujsLX81NgSWzTD76JHFbLmTtuaJ7gq7acrkcGpdczda2Ly9xMG",
  "key1": "2cj6oRaQ37t31LTJgJshq7kNdQ6NgqcJG9zXiJBQZGFTxru9Q1JEASuGnJd1sryStBfaw9pooVipbY7ueMpJouK4",
  "key2": "ztKqZcmHyeMZ784irGoNmTYvEpcah7m4ck2djhv8xahgMTpN5vymmr6A1RjMkGqmTnJ9vhgHpPfSgDReDrScNQL",
  "key3": "2B6T4gJhSLsPg6KhXn2G9fcpN4dE1CuTx5eBgmgg3oF2BxKYC7GrCkqrWZFejq485B5LWhiYmCihzNFmBpYfAcCD",
  "key4": "3SN48UhsKPykcazXRgY2cY2pQDErzhjABU5mxQEDfqKuCnMzf5FLFiPAhf5efxjD721XRLQijHoZvDokNjrRMcSZ",
  "key5": "47uYowFCQWMmYYFroyzfzjuEG459T2PdUwoK8yUnvPT2XyxL9XoHvSrL6XVmj4XKQaMSQLKqArxhGE7DNVsduq5v",
  "key6": "3Cocv9cYoGZ1bH5AB12HeMn1n12LnRQjdAuP4HKUTKFD3s5kzoQRCiwhjWFkNazwC7svKtdokWdG4rFupJdYDWX9",
  "key7": "5rX6dfW9oVMKjHwYwpsixtLiahu9E75yTQrZaqULRep7duwUXUZwNtNLprzATSSt9Gc2D9DUEkdMvCEwVWzsCcsY",
  "key8": "4okaQyrjFdHqkJGTf7RueHvb2jyFdvYuR22JbPBUXce91ci7wLAVsYuZvuoHfz5nHSBAPvxmMRNAL2kWRc5HXfKC",
  "key9": "39xyeYMdUHefCPgvDK2QduDWFAep9VZMqtuHmsU35YTyLGb9CNnqVztbrUX1ZZGcS56Geei7JMU8kuuQC4nkTVt8",
  "key10": "5pj7uQ2jnkwTA6TxaZMygwJMjQ46yWfxwk3idYg5T4bdSuPtybXXKWp9UuFo3z86wFLodUuVn9X7SEoighrLApak",
  "key11": "56wW6TpL931dSPsKSdCxPdNrNyN3WQcNkbfJYZsm2RBentUmHrxEyc9ijc4oMbSb59aYx2E2h5jzBmB5wm9aJd7d",
  "key12": "2wtkFsqdoVpkq3sbScJUDWJnct79ugmbw2ZFivnw3KMpWZ2Mk1gmrYmvccsrTZkbQPRkTJZ8A9njjTCCKVoxf7Jz",
  "key13": "4FBTnqkXpUwRwrArbRncYsk2PkQwizfK9NoSHSs8GGkRgHEobnnjQGfsY9PB9L7kdr2E8yqxo1t1Vt9jDL8byC1N",
  "key14": "2ZJPLjS49YHCEaZQtDtTxSkBeMJXcEqAkZ1FEvxMJxEp4PaeNdKUgayMGyaqAeauUsghvFJf9ifRokmU5XUyf4GL",
  "key15": "21Xu9JuktfmZrrhYrXXq2rY9v1mCexM16i3yCUoqTnjwmJWWmFHpAAMPduZPXbhWv1BkZdqvYhFV23SPJ2yZNjDh",
  "key16": "454rXfBRw9x7YK8vATRK2ZvxjjwkzkLL8A5t7J1bGhjubTM4t2PbyAPHWHS5nmCmZK3fYbnwCsRXJjVj2p3XnfJj",
  "key17": "cq1Mw8Wq55TDQecpJte136pHZ9mzm5rpVLGb7DZv6kDtJTTGTPfK88ZUppu4uyrqVALkcuTdFnEoBFPQxhLR6Ur",
  "key18": "5L5TMH4oxuCePTr2puxDQAmCGv9N4tygqutujtAPWKzkmh1Tqdn26QJJFb8XK2Jt3ESKxrYzjRk4ZNbE1UUjPVNQ",
  "key19": "2FfMZrai8PM2oKdspPPvT8Wp6dXaPx1hcPdn3jqeuhBabGbtQD5yrgQh24BdUJKpuTm1GPpusGDGNp6PoeauXEgu",
  "key20": "zaLdtUCmCsS2Wh4q1yh71ZA9c4Z19S7Lv6otmfomxL3YmqPcEtRM5JvBMkWRh4z45PPpiACm9sK4ycGK4KZVxNd",
  "key21": "5jViX5cp45Y9UNVwfh9bqsV4c1DD239ikmQHfZatbMXkoxC8zRR913sEMkgQ77NpfXq4e2FoozXYSDrwNBgHAJ8a",
  "key22": "53cmdHy8ZkRimNHGKpH4LU6KAARRqfSucoyDCgRWfynDKMhcKe82hSKBL5mW8stXymUyXpDs2KNQtnaY26wDvXzZ",
  "key23": "4NTTTga4iruKxP1vxA4GKLuJirSkdf6gjNhDoAyHTQpJXi9ikjsEzVmTCjq43pb54pkwsHv2N1wTyZbYDDS638F",
  "key24": "3bge54T88SLZaznLPVYA7HrKfzSv1kWysAUF2fCcqdPS3EnnzQz32uyZXVJzjx2ZS7GrGihBroKxDFCoKnu7ufNd",
  "key25": "62Ymh92Lxzxh2igLEXEUea7GxJzipKikw1pcxPHFP2xUT5ZTrkfLCn4XYrnTkWstjKzY2BEXm5TSN6839WFrapjc",
  "key26": "4Qxh4F3mZySC45oT13MuNBU8urmE5BmtcGYjt7EeY4Ka6ReA58ULzPrxJLuNxPoHTEinoocFYkFmHZff2un9Ptdo",
  "key27": "5AfhAtihsDDGKdaipc7XEZQN7o9JwmNEVnayNRGvPiQ4evGLTFB2PLeutV6zivL7FqesDqBPfEVvJ7TrUJvxzuMz",
  "key28": "5pheDgojq6mUJZLwjcPqeEAxutSjRUUJsGZKoxCKdcDx73c4SdSGuuSsVrDCikTPKAXmkqjTTsH6fSzv6LQWzgPU",
  "key29": "5u4eaR1C72CTKwVycnxpvDc7y88nAmqyAw5hBPeUcxZ2vUxZ38gmivzzL8bTsPTpFv1PXC1df9JNoP7n8bSBc2tL",
  "key30": "2b2XnzhKHRLQ7bjfgqJ82KBdTMgF9D1xTU9CqGznJhvkDcT3ZwrLKcc7USN8TKfoV6TBpELBzfAfrGACXVdMURSG",
  "key31": "5tZLLhYkxyDU91E6CAxDr4uCtP1jvC8UtLYB2rBy695hsBHAxR1Wn47kUdLLgu9qwvxQW3J76iHFMqCze5xRVMsS",
  "key32": "5xYuuuQeiRcKeS11qJ4XnxdYKV1rxVGsoHSHgyjTH8ZzzUhjza99FR8mvstTfMfjcoSQLq42LtpvCuDcGT2BasPB",
  "key33": "5QfyypbUyQX4UdQJJint12rosLzjuaVX5aoA9Dx9JLtUCbcrCxM31LwnkBwHNFWi9BPvWQ9iTtnLLGboecRyNmxh",
  "key34": "4VQLu8FCmi37ktYAcS7Uwo3Vs6QUre8f5xB6A5tXGnPabg8Bqx5qr9CnbFpG5p1PdjXC5ktboJ2Pjkv9EbwmQXxS",
  "key35": "45TjnqiXyWVm7zr1FR1a8Wjpt59asjq5Dt6r51o4ES5kRHzQ5wnpUprBREWVLkXhc3Hs6J5e2NupcRN56mDC5dp",
  "key36": "2wPJPkEi8MGVu3F6JwA9tHf2fCzbCnuFp9vFXdoQP4xF8h95HyUPGgCEJLVVmQsJXv67yEyg3xXjXWrHFudpWo4Y",
  "key37": "pgqqLpATfhABKVUD42xJCVHgsHYJTQMG4QkZ5FN23WaUhmhWwaRFjwDMvpyqzkRgSnx5p2vmQKeike5Zx9M9D1u",
  "key38": "21KgQA11FytioXUgg3nDHZaTehVFXgpRdbkKQtCByoM2qyCP9SQqrWyiyjRgqcf6h6exsZXZnpb4KaGTuWxArxvq",
  "key39": "5e6RsswsXJAMCTko6kF7xmJBBmqGfz8Yfa3abY3paGiVPkogifpDTBNzPjTg1dNVNEdFroeqkRu7QVjVa8UVfKhP",
  "key40": "46mqPStzEpTC3Mw8JzT7yDt5YoFT6fVV7qf1amoAabFYbpUtXR8uS4uQG8jNRgwVQFHC4GAgea2FiNiRxvPr9zQn",
  "key41": "3KC45TmQYgn2U8hoJF8kK6UxmtJN8kpNTzmUskFMVnoD7V8CtM1NtGXKnABrZjdGWaNxmk128kRVUvjjAmJx4EDu",
  "key42": "4bNyqHfhEiGCpZeaQygyM2ohvEyozXnS3M5gzFFVPc7eLrHKtm1AkZ8RxCHaB776S4YviH4d6FWbvESxFf9oQXBL",
  "key43": "44ax645L2RUEqE4uNBF3FQasdubvJMRzeMNrphiXqUEWXxmYU56jXsbmiTnkQYgzr6xDbGmj3LH9pSPsrsBzwmU",
  "key44": "s6UuoUSuoh3ySjUn2exoPYinALe6pCN6CWixMJFtUvjzuev8KtB5yP7CUY55A8B3itmad8be8av1FWGhB7TkEGy",
  "key45": "5AHWi4HsEZLVjtVZjRpfw2FqpkfniWgVdEmZwv1ozRwjXPBv9HckqDnMxG1dzsnQ3CqLwRYDu1GQxnnztXgMZgeY",
  "key46": "66tnpt34ajbHBJMqsPWZxNTYESDA4L9uj5wZGkHAthrbXKLtBVTkWV5LywqCSufdph7rhmTsUkBWhChVKKkgyNj1",
  "key47": "666jgrLhxxnZcHAmqVwMRiTMZ99dZHKXySqoYXzFD1b1Q7unixqvHKjMUSmZByF6SexuQq2XKqqfD9sgh7w1XCpP"
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
