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
    "3pfRJ1AtzrpBig2rwzQRxDJDMmHxrYJCT8psSAayMffuLR9oZ654oesaedjor8UjyC9BUsvfxHRzAVsHc8g8dBGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZvPRXY7MKMXAown9RzmUfJ2LEFQSCCYfXqptU58vwy6wmLXAPgHM5jbAa9eeiZAPnFhHPX267FT15iwSwY6y1h",
  "key1": "5xNkidZamBE8XrSwddAb6KNupgqL52gguhXucKcQimwV5UF1r98Ck75KqkFQBF19XiW5ag1ANimcD5hPgVaKprkZ",
  "key2": "3cWim7rBH5BsphVRHsFhXzCf2Jd4T2UnpH91TRizTNaCj61aAcpnmbDQ6BPFvjmjAEntHtgypKUuM2XzKnvF5ahi",
  "key3": "3YGzQ6yDVBauBkiPbwahkbew1bmdSYRnPWq4ajWThKthyNdgVUDCxT56xnzmx8onFSjTNuBBeDuJjVYUjxMpWSzD",
  "key4": "dNCxVFLsT3nA621RbDAxfnF3SdBd2j6G9VagspPDSuaCSpqPyRxTANrKWzWAEsGDWfR9LjCB27AiLKSAdaPAqhd",
  "key5": "18JenYWE3ZQke5Dy64VYRfEWUADQfB7odAjGrvbpt1jaM4vKHhVqtAfRiuLTcJFgV7bQT4LmH8cofSmCgMWkgHu",
  "key6": "2nfdkHDht2dFtZtziFx2uBbGoWig4GK8ECh9UpLipi7fF5A4y6x7GPEeomDkPVMmoUSxif8KpkS7FEGGCPjwm3mJ",
  "key7": "Ex5TKy5txR79h7VLaEL3oQduCY79WWsHXUomTzq7g7roNf8SYVZZ2eMS35Zoc7zj6dMHYE2dZRyq6M6bJxeMHQv",
  "key8": "23hap4svKAf4cs1xGH2nXyucqPRtJPWFyG4XZG1cKeNUqNk7DwB6MLJ2RCPcFXVt4Rs8ibTWFfWFMVhmAigT52mK",
  "key9": "qDnCfweBBGx3dNpgAD2cQZEEPYQGtmupt9avnV3b7ay14srYDwjJDXwsBotUpt3xjQsG8Q69Ki1DukQCGvPtUXK",
  "key10": "56VmFYfoi6wpci8f9rrcueoMFp29pYPybHX8p5fwHNXwWYRqBjUu7bE391VuYgeXTY3b7Z8c6BPqmnqBgPc9x3E1",
  "key11": "wqr95fFB1gNEp3GU2wVG1QL44TUEokaBNXRUPARKQyHSWP6trKoLrA9ZLw1N5yCBZWWBUJpNM8xFWykcXAZQaiZ",
  "key12": "29NJjXCnNR9NqNBGaYGAfoNEGmaiajpUTi51Sbw1FufZT666WkpSUPF8gDQbbCd4ebhNYdG8aHkf9eCiGiaBkA5T",
  "key13": "4VgvurZjkUtYCR7Vq6Eqr2jfK1qSA9Qoc2Uam9VQHJx13N957ZtE7uTziFXwLooMn81KbaNsdCQaT71PymWf6TAw",
  "key14": "4Tsq6FQ1g1SDZTdHCo64cznnp5VgCaw8b9R41rS3CLuBXBVQZwPnjVFiLa8hh2RhjV5nF4Kt3YnNws4NPctd9QSk",
  "key15": "26k11hHnaNdmYF7WD8pnDxYLqcZthbCvm4HX798TDx8GzMqqLdyV3Q8Gj57jAfntpwPGC4Mw4h15bHJtzdXy2Vw4",
  "key16": "fsUFRu5FdyP4vUpScooEFyegncFjkeKzfJ64ehaGtQoGPieUR1F29BS1CEXJmf2gjPUk8stbPZtJerJFaAXu5z7",
  "key17": "5xMzsTSgt6qy1fHexG6LMSF4HqApH75K6kNkhQ8ed99uqGG2eoMmteT9v3RTTCrNuwdtWAgnZgQgukrsx357EF4X",
  "key18": "5CTfjCWs1vdz4H26EmXwSMeEPGjkLB1Xptq2Eqk96yN1p41ZguSUSDWobwXgDUU1ZUZ56We2UUsruJNXSuuV9osc",
  "key19": "MtoyEF2BoDfVMLbSF2NABdRAssMn6we9Q8UbDT9SPUUuVArCuqdGCRZKgyAeYf2QzByqTXvnx48T7QS26Dvc2sy",
  "key20": "2c4pdeBXpxf4TUwXXoT6ZHGyhmdWwmWv8wHLyxcngXfh1in2iwDfvUf6g2FDZMHUdMWgqLLR6i1qXjMkeT5nApga",
  "key21": "2qvQXNd5pZhrLkXHivzGiEDJUarXaxu3hko9qS46kPjKZXuEQkqTEKK9pBRScpitQgT2NxYuzAuWAmG5c4hH1Wc9",
  "key22": "3d2WyST4rdfBBczxCh6jWUna57BNP6Vxzy7MnnxEhMUWbXoqc37L1ViD7UQ6TiaGALnsgD8FX6socEHYRMwYUCQL",
  "key23": "23WEjVSdDMXk2zCLg8N6DkwtqtpHXw97NkgNRd948QLJTQpU1FgFQNrvZRgMwzrgPDimyECb9oPkzZ8NATMSn3ZJ",
  "key24": "2vWDbprZH5BxzGGpQkFE5WjLTEbs45LFUCsekFt9eLy2m37MnK3ZbvLAXEsy5ZCPRetDG5MdJa5NLHpihW1JUA1t",
  "key25": "3bEMAVBYnaw7oe873GGQEefvhaomdabHNZQcRzxUmhiyUojGus9HupEr2uFVCxmSnVCc9PyAEjxGxED4RvoV39V",
  "key26": "4EfrDX7zKGYgqywCgQcT3Pqp9UNs7fDE5gc5mXZKokjq5iTHyuNm6AGYWuhKwv41ecHNRABF9uF6PTa54fD1E2qr",
  "key27": "4xkt51BjT7BTZL8ENqK2jH4zCcFVVwgB4sA6MJZ7dNH6cMPPtAsTF3qSS3jCJTDR2WMsn3CgEN4pT6w6ySxMm3VU",
  "key28": "5hhaeZBKG5thxqFxQbzNGwJZv3XBr3nZ25fqdTPJPH7ZkNxE6HgWwwXez9zSsL8rajqZA4jyybAiT2gFNupBhjcJ",
  "key29": "2pMNrr8H6Tnh56wajX4akt1B3wcNLyzA94Y3HgKdw6eokFHVL45sLZrT7bh2EcC9cdXLY7Hxbtbf2rz9UpcZ7Fr",
  "key30": "3MiMrMT2139BNepKBURd139j8giwKbJTgbqCinxKqQhwcJiSo2Vt4UUyffEQPL97dTXAujzwxCFFfbJmvp7gfhgW",
  "key31": "2UCvM4TWzT8jWRmb1wuwRyFdKUpTu5Gy2xRTyUqcYTdaBfRNWaJ8jc6itrbrH1F2czNW1wF1cA7BLkH6HL3kVZpN"
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
