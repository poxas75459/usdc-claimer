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
    "57orS63ndAMAu9rCxGmYKfC9uCyXV8TpK2pdTTKN9gBN791bT2BBuxyZS6ivu4UiqRnpnfbCPE5eFgsG1EsonXod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hZqz99kK6hmJQvCCAP3RE3XSctUqkki5PmJWqVmWyWvjrU5s5hnrPGRrGauu9hV6EWAgV13bnFd5F8o214z8ku",
  "key1": "5U5g6ipmfruLFEHyJCpiz29C4Yzfb2GcvfVsCTS4uwTNGjrGKAkGAmzdAS1rCPt19W3LAvMwsu5v79yRovYPVwYS",
  "key2": "3R4PZDRqRC9bu7rcVePYhYLumtxPLrZjoPrVKy4cJo1hjhZQ8YePchfNDYUwGvVViRfBKMfGKte6wziha5btpreR",
  "key3": "3dwAQ2z9JUpkDgJ7sMbrUMpaYFcmR35py725exdn5ZMUeHgoT1jqA9Bgeq1sKJwfRbzfQeGHjTRKGBTToHWVZAW6",
  "key4": "6zVQoZS3DTPnHeaZqjiajae9NyPfNzpFMxuH3ve1qHinxwdBP84Lm1PrCsSBxH9AnSSnYuZbeg2DdLUthrMtxLT",
  "key5": "55Z6z1afHERm312oJuy3ftxu1ThRDoQtPzVQzc7xW9cYGFezczKCYV3cpMD3CdWWdPe5cyHqaFyEyGhkCrpr1iSe",
  "key6": "43fZrXXjgWeLT7KN1XezSw6YtujYMj2NR6JP9ArrQ6MMR1eX7Xz7NuGgyzu7qAPdxU9kwrgRXVB42m9EjoY3PcCR",
  "key7": "3yP6d8hkTnX3K9byon16tcsa4KsoQhFvFYcb8yNsG1K5D5CNwua63KN1RJx2uzBxGTZKph4tvB7GNua7nes9yNEA",
  "key8": "4VXuEQEMZDmJ5FMPXXCm69xaLZ2u4n4wnqNTa3HhkVvJe14QBpvd6Tw9HSv2uARuzeUCzwDcm6dCpH9ckhLZnetA",
  "key9": "GEVMxzb5FHgnSmVK38P14tsPTG9Nvc7njW16RHhGiSSmP7aS44foA1N5AwF2arcdL8xdSvFdADqZCXcVtveygiV",
  "key10": "2Yubj11h1QwFHb5T4FgDFrWFhWgjiVnE7kJ3ZEHwTwXEn8EU36VRhtV6R6B3DtkT9C3jReYQLZhFp9J3Lr6QUkCq",
  "key11": "4nHUUTLWJqixKHQqNo7WxTpYhkobE1fgd5dCLVgw8oZiAqj1BDciFwChCHdBMsSFT6ChbonpaJDyCwXVwpkmhneV",
  "key12": "EFDRu8EjXeSWiEzHH3dURZuixC1aYV1LF7n5WH2f6aKpmd1i9rYbN7Jh4sAevtrF8LQUwjhVZiNABS8bNHD7Wxm",
  "key13": "47TGh4EoSjBH31FVYVfqeoPJncFfSELDeL4xuc1hXrJKUXdeoGi9pdirZABnvAXVWcbhkd7Y5KVmM3TTn2gFYRzS",
  "key14": "4v9E9fdbEJQ1D51nqoRCw1x8tFmTX6BMg2QBaJ17c9rp6ACiAbMN6Bfxg6w1hQxNJMwuuBnfajszNJym4pm3Amxh",
  "key15": "3ZQQ9Dygif3iHFpiKS1yjEchcsDd4dTWC5rp6PQEnwgbtQUuPWJWPtZZHisxymtAX7TjSw4UCaCHpH4iR6aHzvzk",
  "key16": "U518vQWvY8iDUgeQWkvTaNYssD5Tjhs28Ud38YvChYQ6U4pZggGXSPNgBjA27AnmExi8QkHYdhUKcLA3Y3kPces",
  "key17": "3uJedfZUa1PHF3hERwCVMvCEMXV8zxRpduVNUKhgNeHTi6mDMuekHeqNmRjXcNMD8kHTz9faph4nGoCnyKrpWica",
  "key18": "4YYCNGxp1rrF9iJxiT45wvnx7jLF7UXSFwjCpHNam2gU8pivJWCvKYaPPuXqFsat5X2pH6oVHKPer7Ztfhiu7AnR",
  "key19": "3umZMfFLyuuhHZ6cLnizMgzc3csHwACSLehTTDn2EjuLQ16keRThMgYJmCq13MWxEYKDtB8iZpYMCp8vdXds2yEB",
  "key20": "4HEg14v1ohruxm6tpYzu5B3Y4yTVZey75dS4CoA4EVJTLr2rFdtz4GNnAHorwHnUZQrvYQ7cwhiZqDLPN5Rrmxn1",
  "key21": "YqvZyAM9K1xuAQebMZDJRJvNzqPZi23o92FZcmBFyiMqmL475FvDonHod5H3Evp3nhTwJiZUznvDNsacLKt7CLy",
  "key22": "54Mgtt51RCbCM1ycXmAaciz56vSU7TSLW4VjuoUTXJ5SZwq1DkRkToxdvADCMp1makjSo8Kt7VK6q4PukaP7NMup",
  "key23": "3SvgSQnsDbbp9JNxm3CRjVYXoWPC2qcAy9jwXP8zKtWM1a2Mku6D8vS51mxt2erhQ2CL3by5gMR3rnb5p7i7pJsj",
  "key24": "3BTjWcmSoVKVHWeKpxnQeqKtFmkZ7xSjVVgBGvXA6CtedRwaqoePHeKCpbtAXevLneAkLf1dfgvPTmXehym9yYxy",
  "key25": "4zmYK6pJCc5vnh36xgnHBdbeEJksedUwj6yfY26SHPedZHcgfd99Zy9EnKNYH8HWFUoPcLcXxRv21c2MJoUzk7LY",
  "key26": "uR6tzEkW9QanLNMsQQGg61n31CCbJvakwNd929uRumaXUGQMU6TVMjESYptrCz837uUvUwjBcte5vKUnaddytKE",
  "key27": "5WBeL7EM9zACGdhQXRy5w18CY8y8DpTU81bRNcv8oFuPWzDrdTdPThsH3aZLZNPFuQ7qF8f49ESqZTdjAAjszWbp",
  "key28": "27gwf3HpdsviR8QSAYTdrnNzHgJpa5sZsrD3NZreZtZXAH4TaYjQQxB1Zg4kTyeutPpvyxYnf8SgJvGkm6dsdarq",
  "key29": "5cUHWQ8prfpynQBzJFMbYYUqoPHTbFK1FBchBpJgXj17uxNzj6ahqEd6Enu8tTPrRW4oDMGFfAzXzvQYWBeLJeL2",
  "key30": "4SxyeHoMJFSKPnRZEUJoEnfFtLJeakBWntV2TktUP5pxxNZLjR2gRX424sK63SKFPGzV1HqMd4Ud1A8s2miemGyq",
  "key31": "4jr7YPwcmjuQpQuoYzquoobLkicm3P6WRQCERrPY8tBzGGXN8QHHtKCYCZApRPRV5H1TXY98RTdpqznWi42eMnf",
  "key32": "QZ9S1oa1jG5bHLckYWDgdGypreghpQQ89Go3Ezif3RzHCiuygy5Lrdzgc1F7v63ftavnHvg8tXYSWWnR2CJp51k",
  "key33": "5qTgWLBfxWTXBiEmwjYibWFcccujZqwehxSW9duWFm6rwjzbbYqSWesya3WXUHBYZvDPKzR71NPtUVXgpJaB49VH",
  "key34": "5UPENJNM4PYvLoRuHJtQSMt3hTd1Nmp4vnRXW4Ja9ssmX63F3dgASJ2ecRcs78rWmQ1R392HkGbEYUkqUz44DBSt"
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
