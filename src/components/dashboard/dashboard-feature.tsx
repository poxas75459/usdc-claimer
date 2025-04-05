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
    "4Lj3CByMTLNYzymRP2sG81SuDab4kacM6eLhXG72trZEmkEqZCaGpi786m9LLiRxqq2capRNHVA59Z2iRyF3SAQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pJk2ZLjExM6igtPctSpraxkVPbmZdctZm2mLRDqBToZSZH2CUYRVuS3Ti9xCBfX6NBExut33a8V6BxMf7kWQx2",
  "key1": "2xMUyuCfoa5UV3937nvYiDaK4duQvYs6vrDrgbbNGj73Kys6N2wQTvuCydQJ7F9qXtYbVPTxvGUkUJeaF5rhxV6Q",
  "key2": "3ke1UNFqJf9Xy3MxWRRXHpJ8byzetC498SpHNg81myAsExFtU394tFnLNZtywmMrc29RzKAgisxUmmtUythwxCu4",
  "key3": "7dSuEWdbYGTmCfvCFy4EfLn9DHsscUjA44nfhZDcxfKatV9hQJNTeyk84TGzGGtsbNhdvXJzMvciPPXJM3vvKVG",
  "key4": "3BPKK7fgjhScjKQHZMtb5h3xmT7BfnrymrD2PHkrft1dPiGJ9u4H2pgGaE2gkAjuggFNSWDLamUrK2az1TgtLiWk",
  "key5": "BCE4Y91w7MmRRffDavQ5XgHfXKDudNZ3GX74hZPDY7wJTWkrhNsw69xiJdXVw8wvDd3CQ7MfY7E4DY2DEznPUi7",
  "key6": "2C2uMaMeiQLApnzX8DtZop3YGteTV51aty64Fp5dBfZrBTZQAcyvkonc3KBFu6MTD5w8yeWXwACsLkVQmdKoko9d",
  "key7": "mfzXvmR536CRjHznC3LgxkZJPKhw7C6pDkRd1V5EusZhuziqk2jEr2dPSYJWHeBsJswYHVUDCnku7TEmMhdFQw7",
  "key8": "QhUjRe2P5K8M7G7WgtwgvXYfLF83QQ9LJqc7CT9oK3eaF8e5ssyHVTCo1ysxoABk11dWrhA5qe7Js7zmn9VvEeK",
  "key9": "47QEN9XYRRcdJTUuBh15wGcbPormDy2kTeahFyn4wR4owMnTiUff8KCjgf5694ikgSK3uHsn8VVY5xa8RbCXSWsJ",
  "key10": "67QjoWZP4T4sUeis1mVGAnDwxLBtQBxzXZjMFaQrNHivigJSRJYSTL86QsQzUrDarLqAqCELQUD6G6Uwp6d3NqPF",
  "key11": "46B9KmttjXH2JF2Hf7vnrmBCUoSXznwyvvSmTiLex2ZUgv5ve1d5RX8MCkvsKWFsNsGqpffweUFcbEmpWV3tBDRY",
  "key12": "4qeMf2749h7He5uB68WjVusSkYisYdQuCpBEReyhHt3SgQTNdPeFsfkn4DLdT7zLYQcBuP632No5fPxyFkmAo16W",
  "key13": "4tbKG5FBczMFzQDvc9tRacDQkGBJi2egfzmemnvrkBhq3CuS7gkQjYmGEbsTKHxFwC2nkCZHRaAjXGg9guZUCp15",
  "key14": "5DTrqUGBMrBTA1auj1GNS2QK5EHoeu8PMtpybzomVkYP83g2ELEFynbqdv4gahE13r9bogWEmv2WFCkkhX8mtJ7A",
  "key15": "4f9wXcT1VgQLhCCQ3gXiwQncNnjsWk8Q9KgehefrQ31WYm36qYmpHSAxhpVTjVmvfDYnu3L4MznWDY3NQ2zMWm6D",
  "key16": "2vkYnk8U6sjKNanFgpdvaWSPc9sGVvmVGKQcLi66xpaQJYcZSQxDKJorBWC8CAiXtzEWHC6VFP3GLY76xLb1MT7u",
  "key17": "2TbeNz8g3AUnedp2CqZQzbLTf6EGLZLV9wKWiJWv5CNUdSg4DHNTxY2ranSY5V2SKCD3QdiFoLGsH7eqFRMGnfm2",
  "key18": "4rZgKbWpfhJwD79BEmD2dLs1PDmcC2j9yGCGeCr8ygkD7ZmQ3c6aVNBProfQdFAxGkSWFxJya6exp7Qt8PdipHQ7",
  "key19": "5DoVm8bqHgis5yjSkz6kei13Y2wX1W9KGi8i7iwUdvLWh2AFH13xZxiZQBpm43CjCSvwd6UCqFDUcLaLLWbxd5sA",
  "key20": "3qjtiM4jkysGNKiC8M8Eo9UjGUqwPMzPpv7acAPMdt9TgxQBGTW1vZvkDRQSR4eS7pMiCcLvGTomKkcZx3MmQSag",
  "key21": "4sgBbY2Dyo8Q5G6JrnAbpyb5JXh6Y3ybtPAWjoWrLneZBTfniAQnuCYwnpchLj1PYG9zAKKJB2seQeRYzWtxo7Ky",
  "key22": "3Xke3hKhjAn645BEqPfQwLmroDyeNP35WYRbjhjSPCPw4gQeMsS31ZEq7bpNinoLp7CSDRA4FrhZUzFevKToJqDd",
  "key23": "Ubcr2VkUbwjNeZk7cB3yexZAvtKxCUuqm88CVoept7K2HH7WzQtuChoHLZ6EQpAc1UDWrx5S4QsZzS5BHDKyAYk",
  "key24": "2tw87oS6wY5yZGxMUAvD1ZXXwVJsKqA7VLUKxCGFdPFTc2V87AEJshB9KPMqQJSRHTK72XLBhXvsU7VP5PMwmdNe",
  "key25": "47oY3nd3G85FesRt3Ms5awtBZCzRkVWzaLYsvd7vMKDK3JRGLj7ZyXbLuepYFvYJHdBLL7KtN8GWsfnSFZ8FKPLb",
  "key26": "2iE1bdmU2CPUjJM29Tr4atQFb5Hp5zc94cHgw6PcM55Q33jsur1i8sq6YS1NF4qqPYvH1Y1BX7M9WzF21qvxT7VM",
  "key27": "rqEo1fxGe39CePL6Am4ebqtacPQhwQWFHgk7DPoFMiodRfJb9Y93FZBt3H2Xja9ppfEgt79qVorJwAbiJ3RMwd4",
  "key28": "23WvAmLv3JNM6mZvT2fm6Sp6ihZ6SQSxcN72DSyTqtuYwsBudrGvLyqKZxxAtL74EubZ2EbSYUyDrnjqAw4MTF75"
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
