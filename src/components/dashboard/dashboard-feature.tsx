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
    "5DGoaMMfisnMBKdZ4sHMRo1DdAJUyBEPMhPEscEcDvDt3VJsxV6RbrLZuU9hhkjY9vagxrxHW4AogTHkjBbxw9Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8yxsrfMAoiNUWoNdkbKutWkis6nwe7P5UW9BEGQj5jdQ85nUUB7KDbHywV8mtrfha5UtAwzA4AxKS7jZREXxwk",
  "key1": "5immANQGT4PtYH7PERMUxdAni4LXPi5ntvgWx2qUHdSPhodZQzFsicNnws3p5KrAwXn15sp6EgsUdCuq2b54PGDD",
  "key2": "51jvY42h39wD2uknymHdNibJQeGzq4v7UZUwzSFcMuQpbVNUJ8yozmq2dJex2SG8iDots3AtS91fM5miVzEepVwF",
  "key3": "MgzCbHGk7svGRMmaaisi7x6XXg5RpbCPABVGGjAttoE9h37FKjzu68XvJBxJrh71dvPgypeihVmgobeQkeRtu6L",
  "key4": "4DuzfhtLf8JpLUVeoLbyPTJSn4itzag5wgdSvy8HS2GGu2J8zVrmgVBcTMQ7uLrHccYwPE2ifyYTWt4wtBxc3jnP",
  "key5": "3YHvfcAriGnnYMxcCaqfP7qxYsQKG9KLeCvJ2kt1BBqhiopRSmYeRewpBh52xRHUftqo373VRF6VxF1eNcb4f3cB",
  "key6": "2VHpXQqZcyeSdjBQ5aGrxGJaALpwS5GFoyFknSpLSPy4aJcEpuzz8RYAXUCd9iD3aFmtZBANenwmaQFtJ7865dND",
  "key7": "2PwYaaSD3pUPsGNGm7PRPjnKvTxbckuuCciK5thAPTPsTZsWrXUziJLXoWnuSLF1k9aaazmk6Vr55XJmCkV6zmJT",
  "key8": "5mBX4Lv5dJQCuGY6YWnZHe5JRLByMbeoD6K2oJsJYGQVUR4FDSo5AGM2v6X7fuX8ghPDzkrMZRhJrNDFDww5vskq",
  "key9": "5MABU34BYZKGPvv6TLoFhFwW3jHr4btixEZxdRSCZZybPq1WrE1MrrdEpvw3y3EnoZSLHySMKV4ZMmtnDJfBs2Ph",
  "key10": "3vJvXSmZGQ86CMrwgrZtHEgAbnPaYBdzb2pEdFqSMBR1GdKy2789FdJt8yrb5KL16e1WBVUUpAiWnt5aeVu8nU9j",
  "key11": "3eRbQr9h4YdZnTxpAbFbEEvDf3YDNZuDPihwArsspNCuqMGqM1BjAeqUtEacfeuXwH8WrXojvLRE3cVxoJofihv",
  "key12": "38y3iRWoGYsYLYLBdteyEZa8JMaFWboHmyLKa6BBB7B9Urwii8EjhqtaChygouzzkQ7Cd3WnbF2WsM9Et2w7HTZf",
  "key13": "3KFRCn3xhCcSHvtnZtuCWwpSPkrY3Rq5iaXDbWRBuRoBqu3HvpMdjYuPebfeLHEPExg6Dt2SZPhuqaaaTYPxGRC9",
  "key14": "XS3Bw8BtLjmVepGNfSXb6eqkWudprEpLhzbfHGVAjRkLVrhk31RcepPDtoHbJpxtEZQ9DPs9YcfNbE8id4vjzVD",
  "key15": "KznhEkjJYrKgiQf2AW7sf3ysjhEuAWFqgekDn5pGTBdn4parrt8wb6xziL6PTkyztvFKaaAkYiVuq2i9LuunTge",
  "key16": "3uaxdf1AJ77UrSiAHvePLqhu14MhzQN3yorN19bycuu4Q8fdT9gwHskm6Yo8tDjvrsKkSfAv5Rs6gV1iUFb8dL3w",
  "key17": "xoRKoEgLegHLAM5szaYGpMp5PzhFZCQpQjHMsc6oksFdkDhzGMM8R2L6dYmtBha68rvQk96tr6nRMYn4tNUbU2M",
  "key18": "nCRxKDVVDDiuYNAQLpY1Wd5aLH38Y2gYtL2v3TuF9mmjLTkqXBm72myNAFpGKJ2gX1GitNSgvhMYp1NwWRqtmJd",
  "key19": "WxRWWp8WiqNgF9xqu8Wz9t5bm1mC8twJYeihwXngf5ZSnWinHsJCivaf6YCJp2c2QQu3CqDD1ynsd7Axg7af8H3",
  "key20": "gnZxG5fN7dVDgCiqF878ELrUpeW6HcaQTbMiFGkAGWv5Qz4Nb4vz1RJoZJWqmVq45Kxs8beyYRB81XnomfvYK8i",
  "key21": "52qPym2mazGYpio68FrBv6dr3t6cuDhQDxsmUnep36knN2wGaAAfxWwJdQZJ5B7X2e2RAs6T6KximHbW2YwAEJWz",
  "key22": "3gCp4sUruWn6WBkAVFj3PfWoq7XmZxagdK9JKng3BJSbUAgKdWazs44fdoomdwqSnzFyEMB6WAdEtMLk6Syx33PS",
  "key23": "3ZabFcuWrxbLavxTHSKGxoij2HiZF5aa2AqSVTayiBEKm4Mpn6m6BNsyeNKmFa95sZ7hhW8vkrESunEtSZmodPD8",
  "key24": "4khUGz7BYyerry2s3B6fG3X8HzfKt4a3e8RjWkMn2TqMByEtP8Lkx3jqArvRrqsdRyvvmyAPasiRrssWtmTFN6oi",
  "key25": "4mVrLZQQ4jiS9aE6ZRvADUJz9KgnYnQeZFX9g4MzrogM8yPx6BoDjwh8foG6b97np7w4rYTcBFBTTs2TccprWeqG",
  "key26": "2KbArJqpaa1HCqDxGxnvAUnGv2khf1UahV3E5NM17hVeVRHf8FeS2yr6psyCRqKC9ygUSJzhDYeH2jiWnVbs4FEd",
  "key27": "hMQ9qY4CFtcbFxf9cacHhnFQjqZQaGUWe65BknLgVHu2roR1yWftYFysyAmA9K7U2BZtFCPSa9G1kBUCWqv6kZF",
  "key28": "4U4KhjY3KeSVmDw9m7GrPcsqZURTaLCyZjLc9wG5onxFkWfZcAvyyvJkjXvSD6tZ5gzYMyrcd2cNmsjCT5vfRy5W",
  "key29": "652N7rwj68e4qnkALTBNufdWSxTbi4irbv6k1Lzt3yuPZrFiFMMdqRFLxoiCLjaZGqZGC5xzcGM5mH2aidQ1gSh4",
  "key30": "Rd7keZe4KSWTURhKUZe1jswSFfRAcK54VQte79gB4VxMB9s4WCSu5qdkTrHp9j6xBY783ZPuoYNzzAPM15E3xzz",
  "key31": "5gMzsFxv5y9SBkpBm3wveZiWYPm2g9UGNDrpNS43yjkoCPwtVcrV6r3bMBUcvGTTWBxK9AoL8LrT4gzJFhGweSu2",
  "key32": "9Ui3MxAWtgANDggPjTSUCX8Jhqa2aERFmd3crcV3vfqiFczt29CYhGBgsbKQ9ad2TstWhdVpgaz6MwHbq4mwXSZ",
  "key33": "2mNmjQeBGryUKB3J1CwsQ7zAdbCeYp5dSmSAVcrg618w7HXxZswmGg3AWYmsUvuiA21icJmAyv2SjjBNK2QkXGHV",
  "key34": "2WbNvGTTD9k88KaQytip38Ms6o36SMvizF1gVHUmi2CZXqJ7sr9ZDBF1HWpmxR1ZB39GaNAQGb2vTCzSyLtyWcyZ",
  "key35": "4h3b4yUrb4Ju6HHaa7kCAvVhmMkm7LjGzwipsazvP2zjYLGQPWMViE4b8x9yCM9jpdAkFamEUnckKXkZKrmeGdsE",
  "key36": "2K9QpAGsHP1w6o1tqCK8NBR22B6wMwLdhsdDLupTvjhLjr7m4sjutin1A1f1QK3GaxDKY4LqsHs1re2r2gbVVHbZ",
  "key37": "4m2gCWHo4EHpzwSZgFG35PFPiPxXUsFKRtT5bdgJs6WGw5SA9DgZePHZjEE8NcVjg2XeQ95q6E38LF6dMQGi8bf2"
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
