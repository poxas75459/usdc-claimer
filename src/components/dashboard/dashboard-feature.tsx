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
    "4VnQRnfDEVg5vj6DasJDBG3YnGYfDpTqaCcdx9oLf8ztVVQE5ZESMuSkVCQLjzU8Ek5vEYpdt9cE5gCjTkNyxKj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyD4Jsp5jxu6XhzzGTZURpaE5hi8cdXr2h5aAsBEGbmt5F181z5zfrPn2GYPfJ94xC41dK5amSZFbDoMpz2kyGY",
  "key1": "4pwpWKdggED6AJtarC9Z9ZxmzjyTf4U7sUypKxp7CuBk7u3ZyY5bWRg4vAi1ZmNSgKgZGX1xxNfDyPgVSrZZYuLS",
  "key2": "34zDj4zVGtngHrRHyHV56yvoxi8qx8p3PqxLYHRoBEJnDPAwNCGR7NCPi8j24jQa1kmF9MnYbaoc8QwU4QifR6Dj",
  "key3": "vt9G3mngVqsGXyocVe2jQfnFEmnvNDmqfH9ghdxzMB3AJdy79rMXq3235eV7zd3f4womyTs2uU5H3hYqAbzc5wp",
  "key4": "hyZcVYZ4kaXa7r1FRVP6rAuSJgCxBtnazp15U4Le17sNxfvZXDQARjHJdPZbiFFdGUXGoBH6XzV2qQorHfrteCn",
  "key5": "3ZYNLcDhBAFR9VZ3hxTzH9wA1YhWp2P7UEF686sjnPEFsgspqGaG9wv4iTXutPyMXf2jREhy4xc6cys54wD3A69r",
  "key6": "3j3zw3hSuLqKm8yHKHYnidB14Gfk7gN9eswgsce4UUTjT4mce1CvgErvgyCrMqDHELCfBaeYhG3aEmpVUMYorD1V",
  "key7": "65nkf9DH33j96iTnRhcPUK7stDZxKUmRhyAZGqtTsm6vLZYmSNAJR18hNwqXyGibTrbrPY4APias53rC13PjUBR5",
  "key8": "2HpeDN3gkGqjd8dhrb7fZrqtxg1aPEWgqq92DXopWDCd98tXMhM3jGECZjptb4ZDkCoDn4hHRNs1FcJGuqQu1yB8",
  "key9": "2SAqQMVkq2hXaWAKWk9Dnz1S4N6F9ZamgEk5bsDZzmGiRW4NbUBmiwMQrEEbjwsQPDjs7A4n4ZDfF7oZY6Nb6FA8",
  "key10": "gmy4X7E8msbtTYt2CMXFjqnKsVFApV9wC3hm98EJLnkYqHwLYqwy48uvKzWBvY3Cbaf6Jsxt7CiT91iLehU2hak",
  "key11": "42CmzzPcTrhWMocXTbnrWicS9Q6TRCDZwyqZppi1HwySqHb38wg7toJpHGoikNWvnwhQVaJZdvXn6DnpBjWkbrUd",
  "key12": "4LuPqRPFyXwm71StdgPNdcb41uQxKfBadsBjVf3FebGx8XZ5e5qxjfeTiDRRwnAGTvkm9JJbyPwvExVa2jXjCtni",
  "key13": "57yH2hHJz6pxTwMUoq43ZxbHF5baAnTykfKPWj1ekeEfC9iMUgLipnPtoXbrGE1GY6A7RY1CujPqJtnmPTLGti7L",
  "key14": "4QLHfvRYEQvbrFDnZz7DcpCHjjxfpsFhehDB7pBzVGUx3zdMaTWfatAUbcKBhVCUVx3o3i7NpVhUybS6uMgnkdW4",
  "key15": "5N2EtVvvEWkQ4V3BumBV9qYieeKiP7ivSssJA5KRp3f5h5fpRaTT3fPi4ZT1G8PiQiojTqAtZ6YkRFHKopEDa5mK",
  "key16": "3Ha4G6VKoQ3jahr3Qbr2rJWAQ7FUPExRca8aRheKyEzFZDWCSYkkhei5FVq2QgZTeAecBS9X1yXdP6xfjZwR9txu",
  "key17": "57B5uxAXGU65fpc4Xb7Ez3SB85KyAHTZZvB1CTctJQJ8R8bbft1rdRJee8gjD99JKfsvUxWjExFnjaPVZS2VzMLc",
  "key18": "4wrWjiq9KrwTFov7BbAofcrdYGfHzYaZLxzaecEUbjkT3m2GXUCZMTpUyZ6YonS3ptU6iHMuCSwz9UqwMSFXekrc",
  "key19": "5mVtzqEm9HB3i8gjaqwZ6T27NqJz7pwAcfUXHpbeBQPg6g5ZbyCKn6Waiv9gU4Nytq422kU3pFs6ACSovXtDFsTn",
  "key20": "5d4Fp1QP5GZ7fCjkNLous5hkqCUA4D1iqazMUpkUQG5TSsw7xYmPQF9e9XeB29hXPddkKAUDVpmvBSDBCgiECYiW",
  "key21": "4L8erfzwTM5fgkKUbg9jNF9TTV2ciF7yt4r3p2jnaEcHKSephntpbSN5Cnm7Kzhhqe1PvP9t9kD64sYx7Dq28i2b",
  "key22": "4b7vmCij1GiMJoQp7SEQKbdqTh6hWDgoVsYLTM8ogJ3DcZr9EyQynzgGdA3h1yEaT59zdiiPWLDnwADF7EEZvDMv",
  "key23": "5jrWzeqD6BrUpVU24vWy9Pj2Wr4QPwEuFjE5gzGju7TRKsWRbY1rQgVTtMAXcBHnP7mvbUGHBiUWim7Csko89sJe",
  "key24": "3iCiCfgwi5mrFZr5hxqsKCQpNDbFVsNCkRAV8AiJLLeLHXUc7wUKE9DFQRz4GvHgNU7dY2JqmKfQ8W8zKABJAWwc",
  "key25": "5sVMaFZ4tdKPDVdAN8PbBGqgWc8dUnKFU69iYEYBGgqf9JX8E3C2nmgHCodVCvx1H4mhQfjoMjhZiegSko7UmFQR",
  "key26": "4RuaxVqaDexcuMwkf5yGSSyTk8QhsftfBkc8Dj6Ww74bcq678owTFepAqmeCJL6QWENUHh2bTDhBvrZkQL6AQkTX",
  "key27": "5aC1Bf2KryaeuC87hq4BJLf29KTaZ5nLe4Zi298DPA6cnoBuDw5G7HbMVwXkEbG7aXu1bMdNDKomiJwFy2m7AV8d",
  "key28": "nt1AzBxz4MDed3axx3JC1oyhNUoPevmmXNBFhoGGJi1Rg4F7DUW8gXFYDmDMFB19ghPjGc7J3QDm7yMoTg9KVBm",
  "key29": "dTHesKyKHH5H3MxjA8tMAT4SnT3D2JJ3qHRChXNFZP9Q78bj9CtJRB2csgTREt7QbTXqQh9us3QWAN2J8GCyN1A",
  "key30": "4kMuaAW6tk3yH56wsWNct8CMDGrM7bAb5q2Zxcxec6fsxWVGB8zQ9o7ikoXY3rWkis1MXM7ErCtsUg1Yfo1oDsKq",
  "key31": "4FX5M1BuUzDiGATKunYtAxuaMdZ5Vz8g99SVy82tU56eiogrgUycvTZsdDS8W93WX8EktopC9oRaFkG7VGZXr1Da",
  "key32": "VqXfEjxjHCw7hVszgvzqBUNHVh9RZmingDsEhhZzp2h32C4Qj4diHPMQWZ5E3yYFyidaLeypSRZsACL94qdF5H9",
  "key33": "3yrhJfec3FZTknrgAHhvNDUwHXqsrnzCnnvpZTo9W354R9CsvPhraGf7AqYS2YdriFKaTdiPPgCqWgJQJss4k9qF",
  "key34": "4EPZ2HQC49c3PJqMa3pmGsNytLqW3TVCrxRqykbN2r2NhLP38bRotsBEdSd2U3Tonyj9JhRiZ3A38wKKGosS5Nof",
  "key35": "KsDj66SY8wqZ3FDqNYSH4cznYzK9T6NiENVGeVZYy4gQxRG9s6jSa3CuEVb7urjagxHdpBCQ6k9V5b9LzBkcgCU",
  "key36": "4YbNGq3MxuZnyw24S7Dxmfj2h2ySbDhW5aVEn57jXgHPCU7Y466F4d5XuijQyWNMAvU1nq4hCpKDCV7RbwEpiMX2",
  "key37": "5RGqwCSX13USiEgy8QeZzFEJUFpyeBu81XFE7mVBEmtNgYofncuf3jpppJ3gF54jx37ragT9jaVWhrMyDkiPTJHN",
  "key38": "5hY2hEDnYUAAVyoicojpzNLSZHbNRqsTm2Lu959trpzFbaMLZqjPoKQ1ENtQpBSkAwByffiAmXQHMfgjfzLNZGgB"
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
