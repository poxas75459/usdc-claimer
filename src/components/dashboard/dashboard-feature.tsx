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
    "2A2d1Ae5b6ANEhrUKPWzrT8fovijWx3VPXCtnHCUc1LjkP52c4k41A4qAcU2FWVcB3WGSxedJVKchEJ3rGDbAGmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnByckuiiktELEPj4oKYdCtkvLWaPaCmwqnWnQRMDyB1jYseLAw2pKhk1TovHg3wNp3iP16buS26NQPPbyMWGbv",
  "key1": "Qyxu5Kja7w16akvmbe9th4M9M6jok4QMkb8k7YaVd2JuYdRxBhKmUfTaM5didSFwwcB4V8RUQEyzSg6GS2cZ88h",
  "key2": "5kYiftR69fnSHp7hK1wn2kfsx42WmA5A5WK3CSsrvcFKvHjta3xQ9SSEoYuVxP2uFt1LVnNJEC5zLqG7g6xKY958",
  "key3": "p3ZcQzvK6C4cruKQYYkpjB2U8jNTMjmDuFf8idRYUpjTKNNKcTQXtQADNpd3U6DFTt9cLnD1xe4TCbusi3cmWSw",
  "key4": "bJRruJi2tK5PY7y5qwQjfoya6kPWUdF7eAXRMyRptkJQ5McrQuNzHY5uQu9tSDKhic2fngLG48Av9gLzCAX3MBz",
  "key5": "4bW9RxLvEF6zuKE6suE5uo1rpa4RAcZZj7NZnZm2NkWGZ8cEzr7yhUXpr9eGNmAY1NsPPfZ47pBEKJcrxun3YUhY",
  "key6": "7fpg4Pv1TgjW9rmJtBnngdmo26kreBiHMYxa7dHvN8tC4oBHhugfjLKnifVZ16aSowqzru5bByzBWfhEpbGWyy6",
  "key7": "4AnaYkhzsukV4fBMGTidhQosrEvVfybBpATBbtBETEUGcqUxmNivQfqsECu4ewDxmnsKvTmYVgpQvjPeCVGSzAtg",
  "key8": "57ZJq1D6VCuewKxJGUVQUnesyscXWBpC9QFH3RLjFewWx6qVE9CAYctu3XRRFpY5Yn5Mp6FmJAy5JzuDkS366GMw",
  "key9": "WkFWFK6AcA6TSGTNYw8TvBMgDF1vSJiifkZfvbrzuyoicawGNbLWMQ8RL8xKTKtAGh8ZMCzL8q8itZXpyx8EMcR",
  "key10": "a3zyxLnkLKMTgcvUUU8EPJNvkUF4vX1jkcKoN8egi5J3Re2nnqoa9xinPz1GUKQvFXaWgNzxE5PN4XRRM1PnZaS",
  "key11": "AQCgdngtH1LucS2wZjQZNetvk36RhAkHiuPZDUxc742wnHCDDJ5qYHHcSbGdX5aqvmrfo3wPghAdNBTPJ3rzp4M",
  "key12": "4EVcmTRfLHWg9sDt8yqgC3xQcEVWBKn7C4XG9wc6V8sPSGxtRKg1NADQ966jYqdsiGwaD53prKW8gYiLRU5sqFYw",
  "key13": "3zvB3RBHHiT9tczepWfzF9vo4i66c2vhnWLdy5KfChrNzFsVGiHNcjEiymzbbQTCQPoYPmEmA9cx9xVjC7xGykML",
  "key14": "26khAzi2pEj3pYfHhqZokmizUviAFFJMaQomt1Co3bmo19vrWJQSBvWxRswNVSjRvUCiLZkkeXcYtczTC5AbG6cD",
  "key15": "xBVh3yAbzndHJV7qqgHQJteub6iWqZrx5wpBxftih9szotT9BdrHE9vi9p5JqgkDXmHzG75peS3eWDyiFwNzJST",
  "key16": "1GmgA2Fn2AzXsdRGUgXJneBPTuRTqcxMMJMzVhH33M5pUd7LQwp7ho5SKzu85m5yhVpfmoiuRCEEZrLwxXEJPs2",
  "key17": "ZYRGUrKkaUbfpBuCdwPjtMt7CqzZ5KPUntfNsqHsTksnZwvPCH7Wkiq8H7Tqy6aJk4a6idNQhzG6irxasDFdR17",
  "key18": "5h2qtoWtmmGjA31fYnmrzRgA1wVYgnrRMksdX2MuMXzW62Lo5QQJ69yrEBrVBfZHqM9JpeiX1HqhPienzRhK9fpv",
  "key19": "4nc9PShunUKQPLMx4CBXztjfJKpgFFCDNCZ83U5nymBbeDJ8wxBLqh53Db6k8Tu6HtJm9P3cUfWvkPoHp9B2YuR5",
  "key20": "3khZYPH3MTZ4gTLKnJh3HvoBW4y2u5ruUTWS1fxFLBAcVQVW17FAvdd4T7gTNEGcUivPAgwYLx6ffTcE5y1ZUgz4",
  "key21": "2xJTUCM2Fr7sDMHNHWiFckhER89HktmD55Jk2bScB1QmveS5wCssKtk3Ko15oRhJitdXmVmDammESWssW5S5f1Tx",
  "key22": "4zaAWZhLzQC6YVewS2tCdhhTnJeo9z7jBGqUbGxMWnxNBR28m7QaZAPNbDbBWdRqgEMbsBin9J2DPhfhGis8NvjV",
  "key23": "46x1TPnVYxoPVgjw8cAD1bJUxQFwQJkMKx3WhLzeY781qsA3rcUpThupF3NzHdtVuEWoiPKjBLawpQKL3YRfjfTS",
  "key24": "Q22LQmxdKza7uum8by6QkApdhRto1FzfxgWW2ZWK731YPJ629J7FV6655LpouNN6444JCDiXt9nNskz5cc5ZSAs",
  "key25": "5s2TefMppBtyKCnCZsmbFa9ghPPzq1ZapwsgB2ssQvYhEZhmvAmM8HKF3mjZ2FVWh6qwc5m2JKkdPEaRhxFdqH9L",
  "key26": "5Rc4Bwnegch6UmshLDp73m5YMrjfFpLUD2vMzuhZsQwcpDoB2EK2j5d6ZKhQXLjgnFifBGoe8aJQ1A9oMrfDc8WS",
  "key27": "w4hkJzQJontbfA7LiBHyD3gAZ9mFmBDmGYv6FpRDuxgy8mGDTwDL5HKRwkC5QNfBR5pv1vxaasdYRpMECH5wHMv",
  "key28": "23arzyUHxiKx4KJA4n5nksH5rePmVKm1fCm5pwKSirFtYir6Ag58VdmuoJhfpse42fr88CDg1dExNbyfU1KEhrcs",
  "key29": "2RLaY2eCdrBxq4dxGq1LYaHgL5VhTxLKLU9gvmj1nEYTixvVQqBffSzUNybMbCQJbG4CgkaJ8n7JCHKXHw2sysVT",
  "key30": "8DoRDDxJCPGQkvRaC98aSdexKh76MxUB2xiUiHq8dPwrnasM9pu1Ag643cA8dd7eVDXhF5yP961eu8VuKVWnDdp",
  "key31": "1mBYeGnQPfADKoNdc6cA97S8zDGxqPCBLoSFrM1JHpkND2hdkuj7KrApxnhpZRJhUF8gbi3iXPCBZih4KKXqvET",
  "key32": "3TBy79MT9MjzW7voUhWJa3doBbwdAHJ4GUeSnYVGKyC7ovMXePfYpbheC1Vr3PgPJe1tB5f2z1hLML77xKAsnT1X",
  "key33": "5ZczYYc1tdroxDsUVSrAWij6FQN7voyTBogC1u51ndtsRTH5degPNHvV9PbUAVjBhrpSHKLE9ixDfZXG4EbFCBsj"
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
