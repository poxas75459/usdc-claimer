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
    "2V72REHywLYFcrzxdHrNe62GysaCYvyFmQi6iiqvft2xZVq5UQKfn8AyzHrEwUh1eWa6LrX8Pp5M3Mjxc9iTKrZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3u5uJN5rQXmbFx3Xw7GD8aS2cXBA1mvpvAhqXE4CkwnMhCRHUR75NACYUQ83NYC4rmDcGq1zLvk651XBvc334R",
  "key1": "ueTQGXefp9KL1mSifpUG6E5on6g9p4QKfXaPz7Spmz4WqG3i95Kb8KyybQnXVFvsTBZfuEBjoLaAGfTWf2Akrgg",
  "key2": "2vcbqtZ2DyDxZBSpuxtVR5YdLe7wi4t3ssJHAWNCSE4uZdLpUHZT5yLvYJFz7EqbsySaK4svtFQ5T5JypoEWMBUN",
  "key3": "3CCrcvPNqavTVNSciwBN4MbPzNkqzEwjrjhb13UFUr29YgmeAmLnZeJwpCGLqavSUWfGr52KrR1ahbkD4MQtQV4h",
  "key4": "45inD7jZ7vAgLhL5HYWkciZPSkRtygFbPBwsiB3ubcrjxRZogYWRGCdfZL59H7NKxHK62ZJFQDJ93sHbbDVtRq3p",
  "key5": "2b2phtkDF2hdp7nZCKvVUUEcZXUJpr156LkbPgnWbjsZX7F1iKoRLbMEQ6c7MdhRyWQgDrPZQq9Phi7UEHdZ1hsR",
  "key6": "25ud7HQf1VBguDJ965SV89k6sXcAaTghwyUG7eTn2HRYa7t2A6VPjR4LLbukqqTg7VdjbC6tcrNiwMezvfLAtJH4",
  "key7": "5LXs9Qi3zAEA19Z2sJxot5QgvmkAFTZCmSDLeoNnEoGSpuUPyxCCG7x7eFesFBDzWHDnfjDeuA6M4BpyN1Hwyo4P",
  "key8": "3M2PL8R6yor6Pg9Lanh3XxnHkdLJEtDzFpbc2DRkiTnA6YU3v8mPJUSPrkhpcQv9KwZGR1WUJx9t4RhnPBp3Q9bG",
  "key9": "5tKTkUtqrJpvs4cYNqLvQs3QrTZUefBMDyMXofxDxW4D8o2PSMZCk273N2cMFaHQynsb38TPS5UitoBnPTXqzvZd",
  "key10": "5w8Sjs8vzaor543epd7cXrxcxBMzKfexHyRgVyXJZzjMTGt1PN9y9H6YuCwFq4bGeS6Taa7y8QgNo2AhAaDHbx1F",
  "key11": "5KVuF7iXwLG9CctGFrFDfHDAxn3yc4Erzp28yWBCw9aCHWH7arY9KnbxAJzi7AvfehSvbKdo3A356bXxovtcDmJe",
  "key12": "5sqQKSrHBQXi9WRTxYW3cpK5BPHCizWFeWEnh8c4WJ88yBPkHuSufxDJTTHxP5MpJ3ALYYGwhbs4P8pYQQ91Zun7",
  "key13": "51hrtr4LKyHieZFDLbGGPxyQFMKX43PEkGLoFLxTsA2z6ZGE62fK9LVGrUvbtjrhHQrhGZHbACd3UhpPo2yUkG3R",
  "key14": "5yDfuv3tebbKBbqr4k1WDqM98nPZRwCia35ZZ3ghVR67cobYZJPiRLK1vzjGgytwA1pwKr9dR9k6jgPi4X74MNGZ",
  "key15": "4h96GCUjf741Cz82wb6Lr6cB3bgvW8t9Nh9ZnMWmVig4BUscE9dvS7fkKJ5QPYpVpV9v5sCmxm68LxhAq23b1rCE",
  "key16": "dQcTKrbk1r5LH2EQWgorT6H2oAbuPjF28B5c6E3bve2KNhibYoW6ve4RNewHKEasncWaQw8yJvcAMPyq2WXCbsv",
  "key17": "3K3iTGKBWkip8CbBNmt3YHPPJxoBRxr6K57V7EUaF61sXwxmVfhACUz3kPhDBWMSjQzjA4MSerUFR3kRC6nCpGY4",
  "key18": "5eDWHKmChgBJoBxATUmeDP4dsrzSWQHX8audSdiDc4a7GMx8mBSJ6EzbpGT5vZGUqvhzVNzPqUyaHdXezVQzqKgf",
  "key19": "5cKZ5NDFaMEs4eApj7skK1WsxEzLJjde3a3WXEbvkAGEsgyJLuM9HUKYY4ZXFdaP1aE4NmhAiod8eCE4YiYGgd38",
  "key20": "2iHzW6Hrj4HkpFiog3hQxJy3c9BbUKbw6Zy3YSDoWuNiAza8c6rJrLoA7z66WqBcqTQH17ZWj3CcttYBpHDomoby",
  "key21": "2rNYhpNy2Fc7u8gFWvnK52EGiQVrbJxiUMr8QMsViMVdZWvXdeemtXPbhgX3qsHPHL9qFHBozoXzeyeSic24uFsx",
  "key22": "2zkbabY5eF6diFHXriWNLWFtoBeN1dDgEPfBeyeBWRCRYxqyt85yEa5RMEbEDsazqPNo5xksScDAxtqWoUirNidK",
  "key23": "5kftYDDjUc3TXxgsrZbCEwYji1Pt7mcT3X49UY9xTB4wBkiuVYcTQ2sESZkfiwPuVEUaqLgznZqSYaevgkErpo4d",
  "key24": "2XbccY1ZkDYzNzaJarUgSKUXponAxXsjTqq2UqFCszACBB4SSp9AYJ1CG4ezGGJDTp6RwLHuwTmD8PbRACStND3b",
  "key25": "2PSmadnX88zWxHizGMAHAXHvRYhSdFp8BGUMdUpzPHY14ez6J7VdShAVGewygWRBhWcZMWPyAfRgkVLDwzAt1hX3",
  "key26": "5FNXiN8mNvtQCzYr3gEykJcgGiERzZ9iEi6qMMdD2PTDnC8UVZH8hYfmsUMVp3nr73K73hb9GbBCRFD1k1XTt47w",
  "key27": "R2jCiDMWabguv5idguusCApWLBZyYP6cFewPxTzPsfZh2kBD3M1LXD7j8hr2BXwWPre64D71Jz1BdU6Gpu3hhJB",
  "key28": "4xXdzTsaDqZn2HAJhWXV9Q4FunaCz7D3ZSaE4Cu1j9nybzfJ1HvWfjVHMmEuMT5PHqQyFL1qFZ6AcQRh6jp5AZ1R",
  "key29": "4SW1p5MU44GVitPgtEbHfqQL1EU6PewbxQRdEvWSZgsA85LKW5QDnREVnRnLMib7Ma5D7NUJEdyGk5GnYUPauhAV",
  "key30": "2vszAEtvFCZVhAouy1xcEZRAUToUCMyJpKj44t5w6BDNu55UPJHJK9nWpuWGRjcfBjLcRC8ECkpgjDeRvm41UCTe"
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
