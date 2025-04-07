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
    "3Jmu8bxjfuyprjjz5Cs4csmpMYi9jkCYvDVWj2ZEfEzGA8YWZxFfBYvkAQF5Qw5bsrBD5FBRFqRDTbjks7XjNLT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdU1QyrnDU8NALLPL2AvgwGSSvAhZN6wJGozadK6GHKXqKwnu4dwK2qzAXwj1FWfNhY3wMZjutY3BVqEBrgNiv9",
  "key1": "27rLirdSW6Kp9HfHt6W3jrgiFrvqvuBFZWhK87y9nYY8tQmxVZaeX8JhNNiFF4W5CTrq9MTN2MiWyW1cMoDB47sS",
  "key2": "5CgEFockxYEdAx7M8p93fYGNsvEWwoD2FWRPxpg1BnGhdPjQN1V3mx7aifotGGp3XDAg3cbfph1EbdzDHYE2m4tx",
  "key3": "4nk88j3ESVVLDRpqKZKzvZxsvmyA4ajMcxr2CXMq3hXKzA12M8fZVZsm5NWRoMbGCxyfLQRikqb2KeG9pY6p5StD",
  "key4": "5S5XyzUPAaHMoVGDbaG8HPMSaV1khSHwxorysv6iuvzWvBs9oHNyVTUuK8gDJMu9XDx8GS3uHrMR1LscHS6bLei6",
  "key5": "5gtL4CRaHyqcaPE7utuH7PoprmiobscPpEw8X1WHKB3nAmMVVSohj3J7wm8NvpG8TmwCVBmW7gpNnyAdCUoUVze7",
  "key6": "3KsZpeioqMV4QVC9ZpqwtKfYbpZQvDsKTvcRnQEdaV32HycPs6mZ5Q6Mj2zS9mpWKKBgHga1s7XG9F7DRWCzjrh9",
  "key7": "45otwWincrxPsETkNVsfoLGH4inAHhTC7UYXfeE6RFEjyp4Joj27cwikwM1gHUpBnyhmymTus6EE5PVghfURw3pQ",
  "key8": "5F6E3b9sRo3Qx31j8P5Hz1SApEjjqJj1pEx7Ucdb5P9Ub82or6ePB3PSewjRjLKeYoqD2j4RHXLszhtVnEbHhMwB",
  "key9": "3bZ5B2NFXeXZZNvrZMn4F749pMYW37H4Vxicrq6jr4CYEKWPqHPH5tCAgVUusmbGJGGucQRkFb1MgKdNMruw5xjN",
  "key10": "31WHGHhikgBEi31RQBeYpxA3TfzzLreTnD6Sgu7ZifD2iqvwUdkyavWqJ8j9GBvmumW1mR3TfbAkogCi8KdkAExN",
  "key11": "5qGTNdUgrATXdebYaaXzE74jLZVRj1Toj5ozcZ3g5iJBifUY6WDFJouQ7N7DKbsymHy8K7VK5oCkWr3FooNiiPDa",
  "key12": "3wqtQ4mFjxdsv665mptwZVaqWXSENDNTsF6zwJXt3Zj4FNbX9SK8gTbcLM4gv5e9AjGHT5GrgZAyh2TtijMFzB4M",
  "key13": "4YyYUAzchZg1WRZdWGdrcCVuMgJ8FauJs8YDwtXMbo7SV11fywTa1mmmZEMfhHBz3H6RW3oLw8Mr8FJHzu5zdTjS",
  "key14": "3nGD4z66httxNywECTq3zM5EMxchvRnQ2xdDC879xfLqUmqC62ZLuAhdqEwC78PdnS2NFhsAtEXrHekZvPYcrwwy",
  "key15": "MybEgBS8kbTor4jyDu7v9vokLYa78Bro6vitbjYgnRQyfN3bFeoEYsRbx7hcQpU5VxGuRTvUitcR7sKvXup1aGv",
  "key16": "128sfeWdxRSJzPFJf2CS9VCcFhKPgzPQHuoMJvSQ71Fd96R3RTT9roPvn9JjEfM3GnvjGfPzv1svZETH2G3C19Wx",
  "key17": "3QoHxvyX9x1VNSuMt5r3Js6FZUA9qvV62WqaF1JF8EVR4eHZCsEQYV5UrhBxVko1KRJdRvvWpJD4QB5DVrKhdJ1",
  "key18": "1BkstjGK1XTepJQ6KbfAw9UNHEsQfiPUTJjeLuvTVSdoHUuGUqmDbrwED8Bdtfyi4G7R1dM5uLNZsC81Hn7sqXy",
  "key19": "5wCtVw6zo8nVc8q13ECx4cY8EXejAur5jcxN52A2exumExFYh7Z8EzrRdam3SCfkST1JkQzqrJZ9vNLxPsEKUbW5",
  "key20": "3g2Qawbd4V6vjXU1dZpSuinyUodX4jT2xqNCaakoPGwY4tfFSXNnWSP8v5g6Pdq8WD5QVgP4AnfVJu8tRYz1qVqk",
  "key21": "5UHp6CzeJk411PLPr8q3noytziMt23nm6K2kq9JemqvFSh4jSnUo5AQCwpW5dGT8kVUKVDqLYFB7NE83f2UPykcV",
  "key22": "3XMERaaK2KUKfLEiLuK8kxSJBSK6xUSLW6JvKH7Dsravpp5H9aHRZf8tqdByxPAvoN9zoFTy3S6Egxp9Ag6584oW",
  "key23": "4CWAJEwZXiikGQ1pVtECS7yAhqqogVSwHBYaxVGaK1qubmwngBpNDEg1QgdQWCT7QAxUFKTUtfTujTxe2BpjnYP2",
  "key24": "2wqTtFxPk1gbNanC9USnGsDCe2bkQCQ95E6Z8ogwKKALbK3DttGWoiJw1ZhF99CXZcN5nkuEPj64qEj5oVPHEt2f",
  "key25": "5qdYVF7EzoAhoRjJTUietvHcK5P55LGyp3S6BoPxjh3M5gGAwi97N5uWF7FzUFCnzktVvfYRH372xYthMBHWTShp",
  "key26": "3myFGAyWDeziQrSrsa37f95r1ZPa7mnoyjGTWpCPEkGxFRK1YtR5EnTVM8GuFBpY1eveUQdqWoyxDTnGGa6iViY5",
  "key27": "2EqVqbKVv5fFHig1JU1JnBs7gdh5meXxKJYwXqbLKhQ5xviT6oNrg7NfkA4bzgiR8Gkh6TQP5oVuYCyds6voh1QC",
  "key28": "3VXDQL1pxc2F2ooyc8ZPX154x4cdRsioddDVp9JnJsqeJzj6YMckCS429xtTfEy5WZbxupYSJnLdZr1GRjReR53L",
  "key29": "5yAE7zNwbZDqarC5kyN8oeTAuKVKBw4XTMyKks7hmBmMTZ3VbpWN2PAetpar1DMK7tutAfPX4SbEDhDZyG55Bwey",
  "key30": "4tjAkwwPXeU839WVPavPE7w1uZyd1sARGDTNr3JVAjgiMrzqREuNBpnVLo4sSahiKYUAZ8bdjjz5UK5z93veQg9a",
  "key31": "49XKbbGS4nXEGKU8cpHVA5j6KjE1TdtwAQziHftBUJeLCxJdjFXFbws7iRHN41UwUUr4dsEi78hUch4Y4f6qNBd4",
  "key32": "5TjRw4s83NxjEywi7MXXVAv3jVBkK3w99d2XD9JZkxLEeWM9x6Pgc2wQ8dbatCC265BEnHQpfNc7rBznWek8MFTz",
  "key33": "2t3KUfcjMUy6kdJw8zkYZL4T7n6CkZaMqwTexvWb7WwqVuYmFwtn6ATkAMG5vNtTkDxy4sLUPE6Z95MsBrQygJyX",
  "key34": "4MXrWvRMurQc7McL3164mD9xy7YLnAvfUte1SJzfkoLgQtuNPxZPjo1aHHfMPdT6ub3kqLvju824MqKtDm3ZoKY4",
  "key35": "64ps74eidFXuAazzhwQs31uBBJfMoUHpdsxfXLGkwB6VqFPp1VmX8qEPy2VUmBuvV44b2mTVH3z4nHs2CEM2q13z",
  "key36": "5sWWhNX4Vzvm48fdkeuSx8ccBy5wGtRJPhc9fpJGDUjujZPWZfTCd8QwJiEozDf8ey6QV18zSrf2uFaPGU1xBMt4",
  "key37": "4Xs2HwdEnTHpcLfiFZqdR21ELbPnKJa6ozm7dGGja8N3wbog5LytwU1Ri6j5Q51QmXfR9gGPEgmis6yYLeNVjGze"
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
