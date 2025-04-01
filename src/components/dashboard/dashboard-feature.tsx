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
    "3Q1HmFHmzmAkSTTGPjmQMYhyXCNkJLJMfcqEitvukKtpdYAgzf6Ji596avvV8RxArHRar7wjeJ4jk5YsP5a5DMRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WREkNnjKyDvCfYYCYDSFtJy2FQsQ9iurp467kQfBZ1rWDnoysbQDhmN9niAb2uaygTaCo57sgaEhzZCnUAnZBcZ",
  "key1": "5DtM1UF3k4r9CNUKvdrmCMMKop4sEAakXszjKni1EF7MtEXFEKiQBZRAWQRhbaKsFebfLUP3SDywX7ouW5oLvAXU",
  "key2": "3kbZYQqg2B4cPoSH3antwpCwRw2ZqLcgPJ9oHXBP71Z7DWbgTC6y5n6hSkcPXuQmvzrFy48q9J4EWqDE3f7tMJcX",
  "key3": "3t5jJ1GGVs7juFataEyQVSUEbGrH36pcZMuA4jh7NtZ59bf7QFxALQAUNvUG4Qe6PYbMkFkSuC6wMACZiJeeufgV",
  "key4": "4tmUJXovnUFqdjWGLTb9kj9nEZUqYD5GggdUxR1RAtQGenpJmzKCDjzFkwXqGNrea17TRK3veQ1TosLzrJRphuQ5",
  "key5": "95kk7YXrjywSKa7QugiE7BdK6yTnLVjrfToqhHL3RQf7psMUWcb26JzvB9aKWRSswnoSpHQz5w8Smgp8uwTZeUg",
  "key6": "3pqwo2UMbNAMRkGLxHEkaffsw241m38JQgBVxkRAzHQHeVXTsVVNgJ5hms3vXxYGEX9PVQb3SGMQLU3nJFo3AXu8",
  "key7": "4KgCV5VrTkLnc6SnVEXEB6J8mMXz39X814PU42v8oVW7qCN7qeHmswCSGA12XWZSkU3jkrCg9LkXvWveyypN3Kkx",
  "key8": "YbVegkiWTYVD5JDMGuK45N5fpEFC4UXNSu5tW5EJXxPJsLqFTvgMjzZ8hPzw7H653i7ck7opBhM9apHKfmTHrks",
  "key9": "xGYST3WYZa8QHoRQptuJiiZmTWKzFhmFVMMfTeswVzkZ3QkePfcuurE2oQmW9qrk5GShHK2bpYNnu1867GaAnV6",
  "key10": "4a2ahkZ4NcwtyFr9afgrQ9D7oVcNfoi7EKaJKU1W9eHFSCr3PEG5o43pQC6diNxZzMkRUQZ7p8sXd72jUVLXNdLk",
  "key11": "4ArQc2GQJEituPqXSUePobK24WpALFQPLgVa7aTagWyP3dUGJRG6zbfMV2PwwwkZJSniXQr7CbYBMyfEsztH1QLv",
  "key12": "2bzunCmejN1JQPaewpSeekd976jPDVoFWr2MeFckJtuH11hUjweJnv4YpjDH4PjrEKwzAuaxxh4dC3Jvbkp1dBrc",
  "key13": "3cAEhrErKwETHxxJD7L7UAMsoAM3DjN6ZoNFuAEWjkcuUnGr5AoEqgwtdZPCJyL6JuJ6QRiMrhuv7CM1pnRGi16G",
  "key14": "42GwumLd8PTwtTRh1gciTJDsfZyGd3R4x43Z8RyHTRx46SLogTcD1AKFjayJWwwnP7FLk8e4C3sHZJrGifDJQ17u",
  "key15": "3VtFa4Qw2vRwMsCkd9tQJ3f2zjJSb2CoN7psbtE8fDJwzcdMeseaQbZbtFknp768g6YaX9SuG6MVSZr9rsTYM87q",
  "key16": "3SQABZEaQ8MvB5CTHWK53YFAcrMZ3rZjPc2pMfGdv4tzqeweztJys5djkJSA1GwnBsFdFzu6rX2hSqu3Y2jHhD1",
  "key17": "3XaK9iKPXSpPxbzx1izm5pshsJYtDjrMHtnLbPqn7VqzYJDqLxazYiDatjbb5KQsV6rLw1KJXW2Dv2wDzYDXD9VB",
  "key18": "36bq7kcUBdgxfnazu8Q6U5djwWjkMgf6bvjRUQu5ofdQQCPo7ZRJNEYLr1qapbPQTGd1hEfo8b1iwn6vug71L8AE",
  "key19": "4o574gPNBEdmC5eg1iRm8LAdBf2qZ4vEAjFGFRmKezoqHw255bZQaG3GtdjGoy16B6xykhidxoQpc6zwxhGPEPyQ",
  "key20": "4xwDhaAy4VmYATTAUxxyV6828TsxuegeXymYCH1MhskRQoDj85PHt9E4NndkzFQMzC77zwD2TuYcTs4kBwUR6ETQ",
  "key21": "3kA45QPynQpXCJZkF9aLLvLdx8w6KYKAt4CT95BkGmWVV1r1DEja8E8DpdzHRbAGQhey5TiAaHeUXeAj65XCe7ZV",
  "key22": "3j2CHD4Fr2CKcB2RVX8bbfBiDCcGc6hhacVmRwSnP898yRbijkS4VzinxzCokbvapvdTeuWyFK5LqDxGv8KCu3F7",
  "key23": "PRkE7XKRufW2hXxpGyZquhaQ1XdekPywHmhxFdz5x9YFcusYdUQmC4bzfv5WtkpwGbsfjcmNzZLxKqviFHYJjRn",
  "key24": "4daCEqvmnacubYjrBuUamKVdMiWkazxKt31LRkNC7tx1xkCc5cxMVcZCrSxBCMx9b6MUSZ3XPY9YpbC7mT8DtEgc",
  "key25": "CnXe5rjdkpuJSEjyJDNDcmWwchzHPWCeQV1gizYtqVFqY3K78diPrtDt12bDhtQgBUmjiDDb7qozf2Dh3ofNkt1",
  "key26": "3FrFeT4h17KZu55LZLgPEihesZydBJfJ724h6fDZSFWuqVayMFCBJdUC5T2io8KWZP8c2nDrgAeafhqSGFURqzaZ",
  "key27": "2LBk2iYFoJHh4t8nGv5ZnPievYEiTkFZ7QxwA8TVHivkiQap7LJ4YtZEcw6o2TWnPva4xWzoiz825CcJkVfaS3aG",
  "key28": "547FZdjQT33MtcfJKDm37v51Wn75Tg52f7W6Q3nrQT95tBGK11GZbMJXZwhnhnqYdZQktyD5sj9EqEcCGVF8SmN9",
  "key29": "E2XrTbiKVPqttHqgJrEV5ShCeK1VC62tCCVGPFsFYx9BX6xkA1XCW6QVHyFLaxdjRZWryQ25BsNKGkV6Bt6JZZ7",
  "key30": "4zBiGLtSdTMVF9apkeS4UMsYxomfxQ9WtwFBhiAy4eiGqWKYKT9VUaHvvuHdHbYb9c41kcSTvVRGN84AMRb7WNUQ",
  "key31": "1tAA9jpPvss2zT23fefzFzGpX4jKA3QADqiirMKH47foPJE1tKR4YkUksbjZXPBXP8LEMxcsAC894owws27tE2P",
  "key32": "bTkncRpA7ieWftWszodE5LyzhGfiLiF6vX1im1rKZXhZznFUGnwXKNKez9rjtjjD236UJ2vro6WXXAFrLxFvPRk",
  "key33": "2QvrFzuQhgChGaqDGM2A4V6NuvkxKeia4HydPhAcNSnYCtYXpsyh2jLtN5v6nkBQr6Vpq5KE2M6Xr9X6kAUkWXfM",
  "key34": "3AwqgCPoxAAePZhH2LTszuzgMyspU8sdbCTZWYPTD7ESNqF1Czc6Wbg21HrcVQSYZYofYaS2McSVAquH2hDE9m86",
  "key35": "541oMsEwp6ChpFKjktVvkTbChKvMPY4DGFrnJZFHgzDHAwbFT3sJWf3xrQf8kMqZmQcQ2jm4vgTid1HpzqzGebmc",
  "key36": "EigWU7ZhpeFMs6fE7xJgL34VJbpuiMNCr9LxBHBg54zzY7qr2cuxWCdvBjCJRTazxK6PckfXfY3zY7Th9dvSMqR"
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
