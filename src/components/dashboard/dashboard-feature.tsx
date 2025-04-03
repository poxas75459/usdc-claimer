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
    "4NJrQMfeK6rdZ4NtduNEWktGbiMtjYLgRBBDPa6cXeiJm6a7ksd4uit1Z3aPp2XY5741DTJBpyhjuDHF7v94SJTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26MhK6vN3CfzrXgVDbm7PFL7UmbTDVLw9BNjQ3mi8faKTVk9dGBrGyrdH6d4ecxMytK6NU4ioPURCtaWCDxGqv4K",
  "key1": "51AT3HNqgmcrMZvJ5iLSBiGUbZ8reB8uALTt7SmbR5QuSZkULKyBNVpMeJhBh2qJueeUDhGzdnNW5nSpnw5FZBEa",
  "key2": "GXyyw2HRZbe5LUhR6uU2mBZo5MnbRKohHwwCnDfFWG1qUb6UNw2d2Js2z9vR5wFLh21sWAhhMWrxzAQWX8t1u62",
  "key3": "3kiQDx2RxcdBa53ZZrR4BNiHMAVUzEGMB485J67yMT6MdchddDzGdc6Z8f6sL68Es8fBN6RWc2G3UZ7iVB1uj4Gz",
  "key4": "2fbmB4XF2cycXNR5Hn9w1LK4bLrsYi2KZoJoYpnr6rncvNdtc4PJ5PKNmruiGimS6cyB8xWVEnBrMZUs7ac6mgHy",
  "key5": "VYhXP9Udde6wEnCPxtutMEjVJRjdMkG5yZLjqjiMHsibEzTdPWUGZG14ew5PfVyAZtNHoKNPBjQ6REaYqNYFPrj",
  "key6": "43rsgGV1SbFBZw7NCbSPbh5vD5Uv3ZdrqovLcKCBrwDf2yTQroEa4GHmqsM7KY9MysgSV3fKFDjfJwHsK18FeL96",
  "key7": "GycvBLGd71pkoZHZqbDdD4EadPJoEQedAPY96x9crRHCU6UDfm1K15DPTheQzENqzQvjczQPVGQfBEwNWAPTwqE",
  "key8": "5exiJ8bmWXUhuaoBXQXgVqHLimRsdi6Bk3T1LZ4hmzZ7gRFL68jbqgNGgWTpiru44C49hFZXDU6zHFsrd6oYvWBZ",
  "key9": "3aY1YxQ4zf6KWanuCk1S6B6vcoVQUx57vgCLtrMTXmt1vgvbSJzHUg5k3hUk6ErY9baMKuSpWcSDD2PEb6jksAbz",
  "key10": "3eG8g8jxXgQ1mxGBBLHRWnrqLraQ9TrNwpuiPMbqw7rmgnAyZUpEqDgkeFiepuYMiKiZyL9D1Yc4rFPqMhRd7xQx",
  "key11": "54wBaWbhZpY3vrqtQKiq1GDHcs4RaWsryGDWqjQ9vo3oZKv42su1FpaUjEa5rD913Lxi983ot2mrpGbicMknXcvC",
  "key12": "51Cg7EPtM3Kfcji4Y2wy8Khz3L76ZRxLELEmhpgRRTAeP2LP8TMv5EZ9sWCbsdzzxJ46JB8WVihF9grsPmD8cjrJ",
  "key13": "49yvcayFZnjCXtWyHhqnRsyrjQb8iVk5GPksKfuBWQ1MoTmya9z33PLhGjij9etYJHkiRse3coxWR8kCV4tVRaQ",
  "key14": "5n8kBgmPdcUQ2oEabha4z8MJvgtmmzuo3DTLdu7hiubWFjZb4BkpgnTXE5S8Th8uc2vpnBmuvocpbUE8QqKGSiTd",
  "key15": "EKL93kQRTvoTUweMWgFRM27UHNyDxr8eZ4Ve9ktqzKiHxRpheW1przyUvP2sGSNNgDSSnr5VV9zE2GeLjJDhZ2i",
  "key16": "LhDHbhhpQVrSVgenEv9ygRkq8KboDMTNZYyxBea8FHuqy3g2AUXDUAvXyFrwBfhkfb1HF7S4hVWYKaEZLV4pNzW",
  "key17": "5W2YnhWNN5M4tj3Qr6QEUXNWb5Ka1fkmcbxgaZsQfWcY3cPW2NqKCEFzotjJXBRnu48MhNFJhVnENyakMMR6tHzk",
  "key18": "232SVG5fNLsABtpmfxxHRrukARyGMEb2P5oUwbKFE8e96XVsxQGc8Qzfn8vWSKPLFN3ZkqAvmAPGVAynQ3NuQeEd",
  "key19": "2sDgcNoH39DPCHD3a1q31MyLSKqxZeHB89TNuF1EeGDz222g7wXdxD9CRg9o3RuXHw4KRSePGQen7hJpiuurYGbY",
  "key20": "2jrg55BJawACcD6vusB8xavaAQh8sfDvt9E6wM23yL9t7Ta6r3CKj5SSNctuetMybTwbwutr1bxw18KFdTbL1PCG",
  "key21": "5dChgoRUehRKHSTUwoR5KWHVpnHjDeCerW2pw5EUN4abpoLXHjAKa65gDodHox9yDk9Xc8Z6UvdqwTEALCeM7WnU",
  "key22": "9gyzdpHQG3dFE5kyWFXgktjWTUwErFUP1EsjwR5H42oMxrvAvNJbCWa7cPXMWYen4wD8f3kfZoUMpCmuy1F7ZQZ",
  "key23": "5xDxHnvkJUjebWj5jCDjRZBF1aFHJh4YRnxos9SfEmimKftNVjY2de9EohpevnANDcskKNb239ueRcgA1h2e2us9",
  "key24": "5uNC6osRVZJ3qtJir4siM7c5i3C1CazaGK6KYYwQhXQaahrGnZnKugWmuX33JmMBFUcZDJKiZNLZhtrz3XGS3YNh",
  "key25": "2x4KBMTp6FEqkAdVG2ywHJxPeWAErEyLwvmaXsUr7YY3gC671JG6MnD93K1twhvugdCaxfjcdVSq8t8A7dNRDL4D",
  "key26": "2W5wpNsJTzrWZJLGtRLhzqZZRSYQXP9KcjcnrMBtX917YFUN4jN4XswjDveMfD3aqmfursSoSB4oiFHZBNR2sqYw",
  "key27": "2Vt2X2wCCgRc2gFNXJkZD51sWBPq7SEXeYkPmim7X4TpNaKbAvk64jKvAUu5HX9QkSiSzbKvSnD7f181FrbA9Zbj",
  "key28": "3BNAVHzavAJ5BJBmuBBWxanPFq72xdcHbywVyaeiH3aDgMG8dCduYTYoWPvGBcUvrAGmkBwiTvMkEhv1FsrK6vKt",
  "key29": "2knL48dRyYR71sWY8eYayp1e1Dr71m6nUhctPdeykcFuCHX2qvNU7y5HGDFPCqTo2S7H8amAkTCtR36H7Tf511nc",
  "key30": "5xtT8dfzPbFjkhAwUH8MEo7Bx4tGpPUEkG8ZQNDnTcGpPbnJSfvmD5szyUbwh5sv8V9z6t6XpXdV8GQJis4d6NBX",
  "key31": "36Xy5LoRsBQ7jnzwhjrtUvTCdzxchFLyUxMyxG3Eru4B41acPzxaiqR9zStp4oiCJ7syymNWRA8cBaYwoK2uoYkx",
  "key32": "5wSXJYz6taJUVGntetrgqCnEZBmPLXJzd8oRETrQ7YFUVGgfV12gX5WBnXtyhRV4Bh4XzR5jn3CNh1Bj9U5LyJcH",
  "key33": "5iB9vfXhFkv8KkPwkvpCSbVDjbEqPiMJVT2CTHbgJAYEbmwh6R1CQkcsJ6jr3giE7mrJgPa1UNs8jcd8Az2HtpSX"
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
