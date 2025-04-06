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
    "63bQBDwvHY5moCMDDnz5ZqrW7TKZ2d5Us35MipP6urdwL1d8cbzyQx4xcxLhRvqum3VwGQ5fgaoVHv3sca6wrMWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JomJ2xHTf9KTawdM1qUneHqqWa6FsVkEeicqov5zGb5vcTcpCq94QYG8wJ6uZpPRX1DtopX5whno2Tz5B1iKjqW",
  "key1": "ws17D3b5xMwSQb6dc3414nPurN36u3dtx9p77ozFKGvX75UGu3HHDngvm2H12MYvoHgNzGaL4t2G8tZXqfNtMgL",
  "key2": "47ATE4MAxL5HUd41otPyS882fEUdbLykRUg91QDTwJJHgVjv4hw6YXbTYRDFkJvTYfFh5ijeQnUBYdUGuhjNAq3u",
  "key3": "3agsAVmcke4QGoRjvftzrXU7G6g6MApm3xFKhxgfVaLC6UMT7nmbaefvmwJPVBbZkJ8QU9ZdM82cFPFoXpogsPiJ",
  "key4": "3xeosztAqLUf9oDfdiAS4GwRzAMbxBN58gaNnLr38uZtCdCMVaAKFqvk9cktoNnk8SMBjGrZHPvAcACRQsU1a6x5",
  "key5": "StJ7JE4LmhnE5iQvLRXNEBD8L3zsEVB73CPuAXKRsJEXeJ8aGZch4n2HZBnp1U6HtVpbdTknVgU6wWE2LDPwSnk",
  "key6": "3amEfrFvbL4pcJEM7HJhtouRmUax8Dafk2tJzRxtEJnroXcfG3o7s2VFVfXyV3R1vxpYpqWYJMfrwoB2bDZSY1op",
  "key7": "3dotACcdBR2PW72rKBm7M1WQKZoYirk2TftWL1fB4gBoRCjKw67utkoBUuFS57V9UA1Y12DUqDzZfR6hrSuMX9Vt",
  "key8": "51efEx9RASvLMXtkWn2NtYAz3Ln4DFqW9aJPJ43wWU4re1YbEbUH6F7XDZgBf4cmNS5T5xt5Gi65g4sXHaqJPLRE",
  "key9": "4m7L97C6TG8WCAdoo6Y1fDPhksMxRvdySyrHrsYEJo68Py43f6x9G1zViN2TUpR4HYDACfbFciPUAB6XVw9MXSjf",
  "key10": "3DFFwqPphmpDTvQ9FcqFj9VbuzEs5MfxgfHMt2SJVyuXSsRLngrXwbvjH7ycHw4h9DU4t7aPTJLmc6u46yAJhqZT",
  "key11": "5w7SKexv8m3dkm4g8aRceXK5PpnbgzjmFaSz8E497vEhmqzJmg7enHHQCQMnGfZoH1tMwG9DJTDx8SHJZLv8xAv8",
  "key12": "3GMWHmXzHMMcwFyt43ngkF9EWBZ4yxhcM1ubhhEeKke8aSh2Eprmr36H8AxdxntVYCTWeLvUjWftaJsugNiEUNFj",
  "key13": "355JQsDecwG26q5cP3ypYvYsEyMEVnnuNjyn8KKyZLSQ15U9BiCgG71NuUS3eWbCJ3MfmytFEgQ5kGkeXeihgKqT",
  "key14": "4htZXsnvMVrTLGqwHKEQyGEzkP8Re3Njj8eLXqHhXnwoB6FTwhGFJMbDpx8XjJ5T8egV9qT6xNWPsHQVHb9snLeR",
  "key15": "4WojrxqQkRAK6ryAdKC32WwCfys5gPC6rK6ZTA7e3i3c3zAdbZxM7oUK1LGV5zhU3M6FtV9ViqannNS3nFNXUrt8",
  "key16": "3M7afQGsH8DpTwC5SZuzWRWqFQWHVHHDhBne37LkU7do3JUTwGqWoLt6tyTV4JHbdnNhFcBQjM6ZoKGZUSCchV7W",
  "key17": "338PWtaChjzr39x5HKys3J8CCm611zwLX56YQJ2RyrbNniM7WJ6n9xwXccVZrsh3Hh9JL8y9ywaHUfjsrTU7TYRE",
  "key18": "3GxL9A6x2hRmvXALkaxjMzUqt7FTWNGVeywcnfAZYXbWxNLy4r1s3HCRC4765ydspepansPjGtaSavL8Gx8AcBeG",
  "key19": "3gvp3inS8GxTEgjRHjJCX1zcRAmYzYNpEpvfqNm7NR64UdGMfNYhz7GJCXbwdwdYzSsmZc9HXGCZcJXUhLHEc17m",
  "key20": "4dBNPNfhNXe1A4p1eSQ5CRD1qU5ADd76Dra68Y4CWsRUZoMSt7xhLfofTkzRyYYwZKDU44kbg2CmKzFBuNnz9WfN",
  "key21": "2hsvNw5zkGcCST5ewiNfRZKbEee6hv4Kq7WgGzAQHhCEXV8PMyusdCxv5qKy9LZpH3fvV7GSHk9keQ36GrL1LUMd",
  "key22": "5wdXNF8QZSxvkzEVJ9DRTbkhN328Ltmc45p9w1j7PsnbH1dY3MQ3EefSnqpabkV39mP3zzFGAnmmYoZqW6U9mB4V",
  "key23": "WAq3vwb9NrHo52Xh6KKbvxoWrZy2Rsinj6cHvAnHCgT52VK2RW2txgLLGh14sfERfR5ZUPe72vwuW3AY94odFps",
  "key24": "4nYMFtuE3rDTYCcECyfFHsVwj67yhWKf5CqN2UTnBAT6evYgWU7eGtw4bVYLREsvNhnaFCoihJF7EdpKNiLf4HNK",
  "key25": "4aZtr9bD8q2tkMzJ9ENExAz4fkAi72tUK8LLBiV691D86ZNZEy6HNLAEr2ceBbcmXbKceVfcBMywRXCLCZTr6dBh",
  "key26": "5aGQyc4KaGUcvoxafeit6VtfiKTuoCGxxRBkvTghstSpg7wQUJuow4cbKumYRVmQUyUQbnXzo6xBzHsdZq5zMadD",
  "key27": "veiXBnUVnr5tL2EDrndVShNx3reULDybqjxt6ZckZw1xrVdjuqVKmceUgAery22ryRvDsA1UMMLUC3p5SLzmhyx",
  "key28": "hB5Xhe1s8n9eaEX7D4cs2xQ4fip2JVJq2T42Z5BiE7z6hyB2jyuhWxFgXS8ycTj4NYU2HKiEAjBhvBaJhkeukWx",
  "key29": "puZEpBAya1pYugK9trhvS4rAgqohN64k8ycQyKZ9PeBkqtGB2fGiaZKedcAffoSLwEizg8RX5exeKPUMeopwDSj"
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
