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
    "56CxaZd7QhfnK1UP21pdMpiL6M8GEPHQFEpnFF4ueVMLUKKXBAfzn8oJW5tuar58FvrTkv5rzmNgvMJTWwURXT49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1ndfm1rHYz1oRq1DMuY8951Hbfq2GDbiJBhbbCZWxvHWXhgVjSHTASGrr48kW8dK2JYksLigcrdhFd9XPvW4EA",
  "key1": "28tj1b1DQo5uJyYHk24tAfDDrGXe69xrEQDtcA9Xy7XvzcDCG4kBF6sAopEiX4EGpUktt154GHkzyqcGV5aBEZj8",
  "key2": "5AZPF3nGuJfLgpkP8H5jVinwEea4JVRht9nDtpaXCbJACiAhgQbRi9x7fArK1JBHNZKMTs3rXMaXMZmLBVYoUfbD",
  "key3": "3uS1CDB82Lb4cKTqSgW6gpsX3J248vQTfUiBzdfFQoYu4DvyeBww62kJTuVPQDPM6Dq2Q19uffE2AsdqNy37iDRK",
  "key4": "h3ggJs2f7hfpd8NF3ZHY1ki2VYho5Vw6Xv6J3pgdQZWAVzpvEyomDXj3UdtP5pRqrYXF5iDwM4GUzpkBLh3TDBo",
  "key5": "23g2Y3G9GpGfzMg9FiHKRmcQELtJx7L51DiVCgtVKSvv6VtoAfoSetbqpMTh28HvBD3KNpaZHmG6xwRCRy5BHt5N",
  "key6": "62sFnhZ5TbSt4ydi2e56F7A7RiQm7bFS9HzJUGPnCWzkx3Xcmtu4La1As973Rs2Tju6q2vKCd2XcvnXw39Pw5MCv",
  "key7": "Wu4MeZb15c5Bb6Gi12u19D9ZzMAfZypdGxmPvo8HLYCexNZ7YmYiq8UdZW2fFysb9s4pXECkmTc54BPGmhWGBSu",
  "key8": "23vgpvwNRkQ41ErmjHovFXfjV93e9ZvhnjmET1MLUAk8GHGgxD8N2uDZofGz4kN1h5ZM3rq6ApjWjzwbRg1RVNL2",
  "key9": "23w7FLKUXu9nYXYgsWZZHPpUSEXzSJAuRy3hWusURVtPXUTtza9prvpuaqVviHvDQ9ZPWfpWnRkk4QsMmWfGDvhg",
  "key10": "66Ufkx6b4CUMKMQA8ATDJYTEBg3WsPsXk813jc56wTEadv4tJzgszs2M4dsvnG3sHmwft3RPdwFDWj2PuFsuYaFV",
  "key11": "58bADwgoZ3ArKc2sKgQ4vhdvRiBLo47HQGt7Bai8ByaHhLXwhNRQieoqAvPenxXc9itWiEWpRkM7Akj6v6s5Rg7K",
  "key12": "56cd8qxzbeVLte4hXtUVKA9xt8nY6bgZgySnMQSRHjG9XRW6hR2X4bx2RN57JcJwnxHBzynnKZzk48TAcia7vq5e",
  "key13": "wGkyacJ6su3vpmEvxgsRKpRgwkeLxmhcLPuFnam7CDZPyU3jb2iCDFN8D14Zv16BJkkBKJAtANYjHvGatojugLr",
  "key14": "3JAq77goVhpA6qsRVFkEMCaAAwy36aepAsfjQAmsZrpfvU32vYHFkXW1LVHdW89jakfnz6aXNcv3QHJgtGtbnMnD",
  "key15": "59vd3s6JyTqseE2BMtX1LCEdKxgDvYMCHKpP2Aa1Wgmy5ssYcfMvKCYryx16ofoGzCJ4cejDV4Cr4HirtgKUiEvy",
  "key16": "TAwU2W7EcFqcJ9BNQkPFvH3n93RuN4HNk7huX3CYqPpxpDtywNeEYyXkYC9NTgyFBiMyxQRG9piWGPnNZEk78LX",
  "key17": "uJJKhbTAz3VXNqNtXpoUpXk2X65Ew8Z3UhP8kWQYPegJqq3jQfEaCLoZLtkA3ST1e1Lqe8hCUZ6RKg5NZiVSL1p",
  "key18": "5EFYvKdqtBKLj28dQUngTGFNmzrBinkHTipwWSpzgV3yY22b9LJGDNDsBvBKWrdGWi721Au4DYKNB47rqVRcL71j",
  "key19": "2jiHWX7EBRdQYBsYhoXJyutyuHBhs1vbYKSxSuHMCEZpDcjKfW3JXGEuhp4Y6xvjb8rk1DnnGvHTfR3dTtFRug69",
  "key20": "2jchf875oYuHDtg9CmYbybVpjZBi1j14kHeQaVCG5G5nYvMcpHz1tUuVtGZgABz1crQDY2hNZPCsUDZo4Y6v6N3E",
  "key21": "tmLNvNiJqXRJrXR7PWhWZAB2Ja7sK2GMddWHpgPdiSdLFZgPHFABm1Ucya2GFUiD71xZvFnykGzvo4q46vw1x77",
  "key22": "5mgU5Dz5JQarcKHbkZeVqZS6KhLzTZDi8ija5QwdwkkfZbKEPzYozm9UKkMBHa1cYGpeyEfV8AnDbQF68LfyjBWh",
  "key23": "5QKGM9Z4E63kJfNq4Ut26h88TjnpXg9RqfwV81k5xg7HFpntVyxMXicdnCWshW8T8kQi6pVkNte8tdsYXFXgH3hV",
  "key24": "fBAx3Wk9F8ZN2U5C61Jq7xAyXqW2FzYmoRXw3cpCdJmHLkU1JNqsb71gRHUY4W4CpvpKy7hZVWWnYKUD81ArjuH",
  "key25": "5hWPNXJeitvm3BY8Du4nuPvTnfgGDyXVi8FLtSZ2DytyYn7pHP2dEpWcL3BNFCaHD5cwzKKk7BL9iZ83MXSuomWB",
  "key26": "4EFSPxH7929zkio1RMzUL9yjNxpX5Todg1pXQGZzMjtaRPHHqnbNqgS8xWHGHHtFMRKJPBiHDSaqe5vYnWUVWYYe",
  "key27": "4kFMBd5Vwz4Cdmih3GYAwgYuNsQfSrGEzPFRAAGQRcqVxxPGsbDbGjoJPmYbnmv1w5o98RNUzkiSbVuZaXSSpQjQ",
  "key28": "4dPmYnf8gjMxLQwZhbavtyvfsHirUGz6KJQQmFLgzr1gPvXR9AWkuFEsDYKv3TTWJY2iX7BkB1ABb6pvCC6wHe8h",
  "key29": "3XMcV9UBgFyRKbJNbHFtdnBsmFc1T8PtGk5uP35Z16Xmif51Jqshf7BaNeqV5f9DsmACJM7MoVCEonLoYod2mjW6",
  "key30": "2VjY4G6DER5hbyE2d4mt5gWNhHsWaCvrFtXtVJGRP2KB3kiLFuantLQGK2rKeuLhTmi3b2S4Uer3tcS3EUBzf1bP",
  "key31": "MbToKfGBBA6FDztBPNr78SSqtQFZKcc7bsrT1YgGQoJM5ejoDrpmvgpeMqmpkN9G6YDLAF8XXcKsCyBz2bdgwUg",
  "key32": "2DDhBVTKwEVUR17MpCPzfgDrkPXZ6wRgStcK3beQJRFdYNrzisqn5zfgWZPTVWJA3qt6PEcvKYXGeRKQ24PkQQzp",
  "key33": "3Bi4Gg52NApKrdcoitnK9sDDThkq1JpYAWufgsMBkAc3njArPvQYFJbRgHoUywM62AgCK8np4UN6EfTgJxfyB2US",
  "key34": "5CDXbWreDvPmuGqwradgCAseS23VHy8hDbjVHR8qgdH9RL5HJnf6bb7PVQzFbaH7dvLy4nWCVXcGzwTnXVAvS1Fq"
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
