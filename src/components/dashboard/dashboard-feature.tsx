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
    "48hKawqkchMmCcTSFuWLjn7WXShxZPL1iEEXaTG7iVYGyPFebBYZmdfp1PPRWV7sfPmE2BmUsUYBLXf5uVPuKwZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAb1xXSd4a5t57z86UsfyHZmu3oMwr4XLs9TBdyi61UCckZc4xf9jofno7Gk8Un7Qo1WkpyUvGNEmP5jmdy41M4",
  "key1": "5wjH75KAd9QTN1xCrxayPqmDKBF6K8bogZqvfGFtM8QhnDLM7SGx4D2E7935diHW4pbqKHt1NEMUH6jjNGSzgUjy",
  "key2": "5dVqXcg9oo789D9Lc3Gbnu6s96ysfHJc4gWGG7F1NWvWTCEYGHyzCNsXyw4JQcPMMjdDCsseNY7eV9FMNbXfXFbp",
  "key3": "2WaDtCySsGGMMQVpdHiWZ3EWKZrBmDPyCuVGaq4LLznBiQgsFsdJaHs2YcrXRSRua19K427dovKgkpjfLFKeA6AA",
  "key4": "3mqBmASGtuzbfgK5DK4KtrUVMVzEBWqoazXS3RCkXJ38acZR6821v8df6TD9mdeC9b2PXQewo7WkC4NnqqGxWbR5",
  "key5": "6GX3wLsWiRyuWT6ALoFSYUvCnEgWbVtFhs2C4CHUm7gViyGQJ54exvGLnCwxD8NCyCUfiLXmrtJtCdLWnP48P7g",
  "key6": "3ANFm5pwLym22txHfrBLvSqfXSZ6D5Y6evTVsf18FR54ZXQRDptwS9qEHZySGi97WUesQc3Sq69XsYn5mCW6wQf8",
  "key7": "319mru7PhZM765L942NVVd6xmAuxG48hTaCNQrUmuota39SgsajBnjsYrUYvunUguNgdokUa6YNTkaSue2MfyJ2J",
  "key8": "3hyhZwdpRDxUeD51Cmya7h1s1G7qWhfLGeBfBwv6mV4yXRsNee6Pqq2LDEJhmBn3dt7WrkGAdS9o8W1LuMA2nUAE",
  "key9": "52EsmKXnB8isWLswBy6xE4wVxWjiQ2NLbWQmCdkYQw5JwdXGm984jDXGYkncgygAwuNVjvmoD5rchtiPnne4cT3U",
  "key10": "2W5uSa9WEHvZxMqzGXzqiuhE6ukZDSMLWR9c3rjXZSRMXLbg1j2hXXy9vNi5fuJjRFBWsDVqF7Bm4aL4PtzqonPa",
  "key11": "3HDGDXehAqvtJWzLdu6nb9g2eDLBgyN9AsQYwRNpNh6ysuVRBJLhNp8nqqNheZk4JZGUrtLDJ2s31NCu2bTjiTDP",
  "key12": "5rRvEu9TkMb4gTBKmhnX9qTQKgaBZpuFhFWk3TKvAFGT9vDypjMiq2TzhV54eghKtFjakqS34yVZyYbVJPHYFpuH",
  "key13": "43NpvHcCJKHk48m2nigpgK9Yz71XiCM16dgd5dYtytVeCKfJZQPjZUqQvaPKbsxB1Lr5zEWUrb2iqLeq8sGfeTbq",
  "key14": "3WZkd3H8RXL1iQ3LSumesW5tvzh8NCoVYMDSxHTisEar2phDcj8r2UBh1xt8UdtHKRn5iePE76yn4fvuK2dUTTJa",
  "key15": "2SKvHxR2Lbc8VPWCPU7cxowof2Gk5FHkZFRfihUQwNVmBt9Lhuu3u3jY2iduv3CcoY5KtCzeBBji9yYpbQLTkbZ",
  "key16": "4ynhw2k3D9KjezEtaEmHzgQRHt8GCS1i8eRkm5qiL6PS6Cc1kSATYsDjLGEULv1w7YKxvVRRkpnPEDKKy8JwrNfV",
  "key17": "2ZfffWMpye6HNLML54VQFK6y9gH4UqXc7z4iQPvN2LmR5LDNdTZMghS5Uvh9BnkkrWDcCuKFwF8mz3sTVmJQjBxY",
  "key18": "5Fd6Dsr3GH7FAKnh6fkhy2haPoAi4HzJfrJkYhjAofdw9ZpcXUTzP9PennB3RHAaaMV3YehzHRt8W6GeRPZ3p4bV",
  "key19": "2hVuXt2PoYEeNWsTvL6YLfU4W4Bqus5gH4idW1hB63CzM8Q6bPVfQmvVKhmFT9FxF8VkYJbbBnmFodGmq84q8gJL",
  "key20": "LHqqJy8N6fGeniZbjP8YMhz4vUfV6b4JK7TteHp3piMTFcPpzBwbKBNRaJ1HWF1tes7taUWePVeFiWCJfCCXyEB",
  "key21": "29vkHKDaEJxLYS5pAMtV2XbnFKyqTPaBKgZiuoP8N4AB7wbm1AgS9cnymDcfWcv7mkZMim6EL2SXrYZpJqKTsxov",
  "key22": "2vYPn7nYFp4LTW1TcaJt5i2zPxqZJxb4yqodxuTy1gN83Bo7YAwTFwpaPZu6xPepSpBV6orofYi8E8tb7r47Foi7",
  "key23": "5mwEYtRtmkXX2SFua4M13cMTrNWgueHA71E5KbbPAqXEjQSEVcseLthDwKd9ib6eKgbGyqcsymaKPTNX3rHfv5GG",
  "key24": "3LcFKPa5N8D8xpVhWPAik2y5HSCjnPQM48GynazVGEGuZcwQrdoDjyFjhjtDoQk2nQRSv4ZUKrfPxwCDrPNRYTA1",
  "key25": "4hT8tsy1qAJk77GyJ55UxWbQVLbkaSiNZwPZebfGxKH36K1d72f4i6pgzwihoEjReGsezq7gJajwr8Ea14EqXHAv",
  "key26": "55NvLyX4KgEgPJLYiECik3fZoaXdSqcDM948qVtmV36fPxEfi8ub17pawZqpRwSG8uLhxhJgHg1mnaVs2h2SNsb5",
  "key27": "oen2eye7BCviZquqdFybHrWCYZJbZCwrVFeLTqwMuWYy5EQdGV57MvimEboUek5FDb6wFU1uKXF4jWPckTWPmrv",
  "key28": "2uqEw3vvTF1GodD4K5dLxq9d67vXvPxkL4uzKWNTPcsftbACTBMRcFRgfB5jcXXh3EdbDCVtFdv9WiogGkXJHkR1",
  "key29": "1jGEcX44z8vn1wwnMCwKQsoyUUvBnLjUDrRR69k32djo1puih7BgoqP4C9Ymvk9xqVnfJF4D9LHeCYoQ7SbcNYR",
  "key30": "3tN13hFuUvWULRZ4WTW7DcNPjEXm9E7z6cjKrjUo1B9uAY6fJZJ4rLUKTxUqTXY1ZXzfQKEggE4TrUS6ZGrhfMxS",
  "key31": "2jJ4xyr4hB1KwFp4LKvgzFfgrdHigJ2gEN9JsQUBcVToqzS8usifyFiG4MdmLbpzsCwL31M53EnhydHvSMfjPcpX"
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
