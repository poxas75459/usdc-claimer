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
    "ML3UNXVzAV9w5yJRMrXzbBEjPUdwDkiocAYPXt2EbobkanFcaEQCZsvtmXtxNVgDjsTYQSWtK9L1fepgNnktM9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dP4CAVSyniUBGZ3695uf2VifCTRjAENy293xGmbmpnyktQRQrCSFiYkLFGvwZb7MADxskyw5jJyVBnYj4bY1aCD",
  "key1": "EyQmXjCMP34uhDeiaYhvhxaprXi7b989dRUf97GdfuBGPMkA6jTf4bdihv3bP6xqaVnUA38oGzjYGqtTngSeDrC",
  "key2": "vnkoTpUvEqiw7GcaEwBsv1JpbtkLv95gNX9AzDhnFSoVoEnVaSLkwdvzaJXWNDKp8UGTp69w9GEkKiF7A86uUg3",
  "key3": "dsVSEL14UKhsqZ3exvLL33XPUqp5LzyXs4ufhJcPE3253nv67MLuNFVY8V64FdykGweajS5X6XQkHcTNcxsSxjN",
  "key4": "5P3azECqsNRN5HFDHbyA4VkEY12LeiWXNzzwgi6Q8AftDBL3AxUFPyLGwXEgqXiQBbmAdy5QM1kqHpSMsoZ4u5U",
  "key5": "4Sfc8LAGGD175KgTSAmPs1jPvnJsTzKmwyXBi5JXvxXShJzqgTe3V7H222iAsvEuxGufhdUpb3Pd5aaPdFF67KhS",
  "key6": "4rc2X5dvoDA9SDz7LrCoeEDA23L6HyA4VFMEkoWeJbQJpvHaMGcZ7qpUnbpTwMbFH5xSrb69mUBQubQ4gR4Uj4Bj",
  "key7": "3WcLgpGm1BCa2rPqyGHZvK8tBkhh4kDEpKPkMRqADMCrAr9DHhU2kU3mL9vFGGEvq7SyXCohxd2qdJcNMimcdhxA",
  "key8": "5z3gunsf6LoTdheAYV8eCamDJyjebbWYMXnnpz7hWXDjvmkA8NTmS88wvFV5ombCT4Sm88XU4GQkbocn2L2uX9bP",
  "key9": "2SECihqKTpxjMtiVng21FZ6keWig6EaMW9wMZctm9VTLAhtb8FjGCJgFTwkYcQHKuFcgbuknShNkBhutmWgnxeyj",
  "key10": "mGzDGbMvUqLpAQNSzPtHaRci5gHLEzC9ZPDDRzLWUr4m8H2AhbQscwAxsV4wHPbtHgP5Mqp9fBbFtKY5mHJjj46",
  "key11": "4qzquHVQ6Y46UhvVBT7BCtBP1Vm4kG5iNxFFHgeVw1CJCWPpWS4kdoLVTHB3uAurogL9W7KE7fnKgc3AdKDf9MtP",
  "key12": "3CTUCfRrZpRyLNtxBjGJGgJzP8BQTzHEqmiwrvnP4iqtbQ76LHPdPHSgZqsMjERib1yN24TyQHSbfuq6QS46mweS",
  "key13": "i7dxKiJB9CHdGrqiCH7tkQh78bd6hGgZaSexyFvyPMVQSKRkLCUt6VivHUr2ewSFqtg5gD1irWgtHYwSUXZC2rh",
  "key14": "22FtcuZirfQe6SkNq3m8BfyqxtoQCUHTSjt6zL5P7M8cCVJmtg5R1RXipjtCYtxUnLBWMeWumCBT63XYb7VfDMfh",
  "key15": "iejiB9SWe4bpAZt2Xpb9dZLoDDyhYH92wUzbT1WjdsWV9YH7Ueh81sB3f49gckk7BRhzawxK9zAA2YiMTZW5zTv",
  "key16": "7DUBDspFUoraLEaz3FBF9P2fniDQfAQzrPajvqLXBmjya2eyqpNxA6KpruXfGT8AJNdYMSsF9RtvYMjDwrCQhEb",
  "key17": "2VzkriiteUeZDyLVBThPyVqF5v4XEyy1afu2cwwVsfrtpfAvtePZcED4GfEjQdts9dwg4CtuymusDU8VdiDBirLi",
  "key18": "5J9v7fS73dd7MB6XWacdNiZPYXz95kBWNwYnVoRtXath9TTVEUkPdjbW589FwHrye5yhyBXAjYXZsU6pC7T9hts1",
  "key19": "qcrdfmXGvcZw2qtmwBQeuaqvozT69VAPpVzmgcnETvnqTsKHcjfegVQZSS2PTvSo7wuSR1J2n5eLtnhsyTiCYPy",
  "key20": "3N1w7buU6XuWSnRRNL9WxUZ5kaDgJDwz1fky3LDhm5yrpvBzDP1Mp1YiN5yrYMRPUj2tq8MWgiqesaYNXLaabd2B",
  "key21": "5EFAiFDH4JDQjXLvQKP822kRjXddScE4PnkhGuzGXqAzUdpjQaA37CY7d9uwThgC2RjRUcP2MZ331ym2tndw8541",
  "key22": "5BmrrU7w5bgSjMo6o6v66Ha6pBUp6YzqRoYfQJFhzUoh2aX2RY4fSwubs3x1KJCY1mcZC5Gi2hkz2wtYzkTTCdTg",
  "key23": "3yPbG34uEhKznnuxq4bHNhWS3nvGVTMB1kvno5iiiQRWCka3gz1npaUTQbtT7BJc8z7TAweiot4q7wL8WvohBdWw",
  "key24": "2XpaLLoi4jTbsAz6MCDpQ89dQL5p4k8jdsgYfXgFzirvCxVxDHaA8px9JuozdzbAbU87E9dDsz3HJUDmdcSBTfpZ",
  "key25": "2oGZbGxD6bZdUcim9bkCCZ9azJpABsgXdL21h73owuL57R27EEdGVc432LfvNHvjkq6LrsrjY3RVWAttEdrbknQD",
  "key26": "VyqmTv6zECFdWd7PgAW6xPWGLG9hJ1L5si4HQKMcKbH2o1eNo8Jc7ARZwfs52EiJBApgYnof5NUfWQ6zLmxPrnf",
  "key27": "kwifYR1ZdVVd4qmFzaqaSqeC8mGf7VUH247CSFi4ucKScqBZGAuWiUMfb2qBSnQHvT7PSh47cRxsZfxTY8zQG6Y",
  "key28": "YktEUfu7YEyY3uVteUtxUwnnMa5dpknDx5aLFUkcguujyZreMEZeA6hyPJZDyMaCLSvQPhpj7LRDYbL3toJ6zYu",
  "key29": "5FNAsHdNuy1o8Vx19x1TicjC2FNZWtjUkh7KiCXeqDSgfwunxLaJLmk312qe4ue9GwdbFV5YjejZsM1xv2tmMWd8",
  "key30": "25xUH385aiyiaX2vjSyW7rz9saDF9QHxqmfQWrBkLNHGgTRX4c2usmAmBZ5Un7QDENaFQrp7GeqG9h3A18BD88H4",
  "key31": "3ttJAP8wjud5yF9ZEfNuJXQpzYxwpRh8UPRKDgLGau1cG2JtgfrfKqmDK7ouppoDKTykJuP9BWrYCaEQwXGFY9SD",
  "key32": "21VrmBnK69nGW8nkvepnm4gXpCtEfbAhmLvETRz5YHpJHYa2ejDpjWJ8u9zS4eQi91rVFWwNatBqws6qbMNp6he3",
  "key33": "4t5T1yiQqYHZr22A7snAn8Ba4NvE9HwcRPMgJbegttmoyYeeGvSuWwFQN3Fn3CCCFFjQt6aRjsMxe6KWG86eCVmG"
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
