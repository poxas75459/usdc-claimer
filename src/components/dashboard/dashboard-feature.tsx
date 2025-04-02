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
    "5nSRLeVXQhcyCJbWmgpatd2JNW5RSFNbD7GNm775BmYYdQn7JdCYps3gkMdWrmjqGpvHPTzYX4Ar17YPaXw2LtVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnKNSc92VfxELNLqSdFepLsFztMzZs5Lz6HmdTFjv2ejJYD29o8pPkuEMDTJcwm3ju9RQF4ZCX441F174a12Dxr",
  "key1": "4JTC3ZKQe1ThbyaR3VqvrS87ikjK8s1HFYMngKpDkcHqgvZGtrhp373UFjnXU8xbB7DhgHHHv8pbgYVtZR7it7bT",
  "key2": "4Ks9akxVxcdPpSgSDa19H9hnShGBaPTqDjnUPn82nKBdn7aHwLEQwQB8y9bPZb5Zht7AhEGEvZ6WQticqVNW2pJn",
  "key3": "3eYrzvnXk17ajJiW4gBYHAYpZfkGbn5eahFxWaWYymy1ByYMGRrUmyLseEpQX9PgHinLsjY6hBdNuM6R8eMu9CrR",
  "key4": "27RpP3ZxK5uJyv6Zgi6DDvPQFYrV5trSP6aDwRtPf7QnVuittYgkheXKinYuCssECg9Nzt9garZnsBCixtxYYaPP",
  "key5": "5Ut7AQayVnBC29BF4tNUiNVxSc5tWorLT9ihVEXjKZArhTzVVKp9pfYcP15uS1BbFo3B4Sgmt13KGziUpbVm2bRQ",
  "key6": "2W1h8ik73XQd96v4u8hCS9QRBzBqM8PWRWo1Y1aMSvAr4yc24hMGwGMJL6wTo4RJDQN2PVcXjARXTzh4ss53hBmT",
  "key7": "4a5uJ1t97ykfmL88yEbwnD8V97LvMTvKwJsBq4AQVGkGFZaycQJ4UTQV5h7m4C51R912HWgjZWPZMCBT6E2hVRiS",
  "key8": "3YJpPekvrnzH3RSkuiDoQxUpm33QyZDa8bRnXVj4ZYwMsenmfkSxPbkEXYjx388bbfMyc6DGbeMSNV5gYV5GKeFc",
  "key9": "5RK2141MdDPFJ5Man7TjncJAfYLQdEJ2bKKrHA6U7UAky3VKNroJpowRLa8h3wq43Q1ferA8ZhaHX5KX4p9KK87y",
  "key10": "3XrCsbFoDaV8B3K1UgQ2WvqCr9DkkvawyDwz1xE22oPDxHihqvuF1maUmxLMfVc7LYsBeVZNN8upQspiQ8Snha6W",
  "key11": "CFmj5mawszj4FdMJE77v4SpACJvh5NLUossecgM44gvgjEThuTJyp3LfkX2eNNbuftUaRM9xPyozpQcBMeXdNU8",
  "key12": "3wCa3Ch9i9o4y2hPvz7s2SaKc6CZeDLV1eEdDnNgfGXtTTKSmJWnF8SzqgbMWQKobaDJSRKv8n6ZRvi4j7Fftcpz",
  "key13": "28mAEG45KPzFSJTpbcNwQ9z7eDZKgmTCHfRjqiemn9Fq5fwyj5qWRbkxjT9YSUHVgiGafLg8qwPE8L9MdvW8cWJq",
  "key14": "3sE61kP94FE4HSwuMc1wGpSnz8Q5iF56tuK96xUDEmYKdsaGQepsbKyAJPeQWpP23MzyQTBDigjDn6DcEg2GDLFd",
  "key15": "FgSne3fRQjR1r7QuQRi8w2iawEuJmpfAUU8gC5fRSvdS2XEqiQLCXxc3oSQy3gDwMckQmhb33fYLye5wxxan54j",
  "key16": "3A1fVy8eXYu8hYydePb6T6PyRpCxJPjR1AmEqGeHWiuNhenGdDdpXSL4trEmYxAyhXPP3867KfFyAADRrDKPzQGL",
  "key17": "4JRgdZR5xLc6KFFV7nZ3iu6Q28TLdfkCe3y6hrBZ1MraDtbkevAKnkHEKdKMf64SSmvCWzgsmsXzfSx3mq5MorXH",
  "key18": "3HRLvjc2tQnVJojP1KHR7nhtVdTYhKb8XpXiuUDGNJ7fTPnfVJUwXoFA82kdDWzbecBVC1EgNH3VojmcDNnvr1ah",
  "key19": "5QE2yKY9MxhGohidaPhH8EQR4372tL83AZiQEtXuvJG5DTH4nvaarKGaobEHToKGkLrQV4YcPacK3ZKcXhBMkpfY",
  "key20": "3in8mTcqwuGjaxsWSUvmL6HyDQz2xJ5yVR4WBDAvmB8dekhpE7xVfKPFZDSAVdKgaAkzxZWRBYjDMf8t7gckh51M",
  "key21": "2cMukHMhz4bw7atxxt93Lk5sfiZj7aLd52Hb32LZxttEQoxtFnZzUDXv2GdQprUW8Kf7ADDYotvSt6hxbyHbp3j9",
  "key22": "3gpyrB3Xe9KWzYAjtcjU6dZjEzovoDC3dwLz2XHHKZjwXwaP6s2dTz2LAgGTk83v7P8tJWenT1aiTrKXqqPZSD6G",
  "key23": "4Dd3dgHBH9tjJnMFSazEbgKvXA8bPxwFXn1CWBfdi5Vo2znEGhTFGX3zadf46VmdsWGnyVhHyPjeEaBvnd5ASpXj",
  "key24": "4ULjc2nHEXuApz1LyBg1qactXzJcY5TEVZHDUDanRTGwBmi8vfFZmKBcEkHjaYjsFdEm3MkbVmZM8m9YjaysiryE",
  "key25": "4GTHdFCrQzvq52aYn6aH7T9qy6VVTMjN6mqt6vo6xDcX8EQjFAFC4GyQT8j6mYGpgUoapZkbVm9HGwiYUx1hSPwy",
  "key26": "QQZNf6yziZzMfYMhFzeaneSG2aAooBjjwPvXu1Eet8yQdH2fBuen2Yk6uL2Y7F5vpEuomqZDkevme3RvUUuKdVB",
  "key27": "3KVhVnJTdsoMraMNbrG7KT8Fatj6FcG1AQ4VgtYEHRpNmKm253ULCgAWHU5pqztUEmstBy4FJszrp8aC6cM5NFuC",
  "key28": "3zk3xPghD4zvGXTGMRm56ay8h3Kd25SxFJsDbQaWCeRt5LBZgkKqP6kiLJMN1yhd1V8H8xYyLvt5SVQESsWPdVew",
  "key29": "2haPtg3uHUNn4BjeHQfjv5TQx2u9G8CrXLwCYtzrJjYBeGxrFkagVjTcJemRDDuscGmKHxC893depds12pjDpyfF",
  "key30": "5pHUSGZg7ouMrPR2kTgCze1SV2RR4CtuZBL1W17ZkvoVPpY2Ai6gdkpywdqyafpDccXuoHUCkYuBifSR465f92fn",
  "key31": "U6WT1V3YjPqmWFEJczZkLtsSypcNSZYPP45qLtmkMprVuXeph83ahg6C6Rr86PZqdBFYPiLc9nrPsLbysFF8XBd",
  "key32": "4TLrFabcqJs63GrJQJAGMkDmqdccZkh3Ch79sk73m43YfZu5khGHXRP5EasbRHunj1nAz2rcXQv6pChg8qDwmwFL"
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
