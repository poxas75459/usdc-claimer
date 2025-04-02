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
    "5LpqkY2fwNcwKwj1KsZ5LhJ6zpcsVxyMWnMMVGSfSNSgX9Rjwtad586MUzzHYw2VNDbsGCtkaAukXqQh7MLQEfbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHWkEbJQc2PqQSb8q1sfCbL25LK5sRascCAE5ZMyRsYr8UpP8X2pH4CJzNJUA6uHimMqwhDBim3DfifLBrhBjoy",
  "key1": "247EES3nZKyf2bYCAcEGeJLTZcrL1mbUJSTXuH5RxU49JH1sCxjWHfZvTyYwiC1wwQWZgvb2Hbcqt4gBiNT8ncpd",
  "key2": "WBbdYLed4cptvnxBp9aC7RYuDmuCPvErF3dwEzqQzrxn7DjmWanKCtE1vCrXMGC31wMfqopShsJY6MvLaXhba63",
  "key3": "31bmfJ9LSZeervJfXeNgbRmuXFCUwVkGJ3qUKEneFddm5Z6Qmv5NRn6Gw5bCC17q1az8SyfaW3KUrAz2XuBH29pp",
  "key4": "zgLQjcfkYY8figCNcwKXqeQEdAMZ3t56rG4mkSwd21krJ8sM6AAkNdmHdFi7UNfd3x4B2qVGZNbgeqMU787Tdwk",
  "key5": "2UgExsWHJHfKR9nMDvMgaipgh8QshDnvhen36Y6MdM5aB8GpmbMuM5i6EgppKQkZtk7mbY8BFYV5Md1ZijmRr7RV",
  "key6": "hmryodQoM2cBUKo3DDiNsgwUwBMu1eifQWGkvRso58jkcFfSBTJSziWWwUyYtgNwJSdw7NBT6gVuc4LzWEJrSuv",
  "key7": "2woThSHG54BUWmaFYT9T6rgigMc1PnZX4UtqjMPd2dj7tgfLKR3dJF1DNhRB32i6RRAcxjC75JwyKiYbXX7Ba6Y6",
  "key8": "2FrBv8nfFb5LigwfZRdhuFCJKmitdZfQNpHScerm2yt1sAvAetRu71UbYqF9LJXC9EV3XK6jVxnjQdLitAH4hEG9",
  "key9": "44vjBYzcV1GUeLmUYC9tkKWQNCQdyrZk8ub2iaSFCuM69k3vyd8GSfv8gtnjyNxQCm5xE3VfmC4voBpMGHfQ878c",
  "key10": "3aZAjAfBt6Td5bBSir4pmE8yfVZhEb7ourzqiabKGX4NYnpYZ4hASJfRTcJmAPYm7suh8vSB67Vq4nqNvWHXh7gQ",
  "key11": "1c6xNKDxBHd4dsUQcq1dArk5aphCMij68wA17D33Znn84gbK9utyFBT63KKfFtzeqkhuchKUCdKm5pnFr3XC34v",
  "key12": "sqzmnMsJ8gD9hyCfGVsJbjuTuYaGRsPKeybf49yAWfHqwZGmLJzSwgwqGZ3Hd43qFuBNh1uc2nPr53WgcbZdtJt",
  "key13": "5YixTk8HA1KCPbSAt5g63FP5CwjZWbxZAScmrWfgf3JNECsGHrHBvAJS8Gs9wWppuqQ69X4JkC8TMHfyRNcKvXNf",
  "key14": "2q38QqRPcDGCeKLAooUxUXvR9VXKrVCBpwcCpsN8eje3mLqnhzqnAGNFcPGKsdstQV63pXiMupgP86ovYrkN1a9Y",
  "key15": "3MW52JGGVuGjp8CUQYDwA3YNXfJNzX4zXNDLvVFvDy9GZ61kbuKxDTobQ5BvRZ4vFTmUbpKbAAtvTZm93JHotB1k",
  "key16": "Jzo2b53ndN8aWmwt1QRUfnBBhSvd87KUSLjr1kcv6TELBrz4VHCdCcV1E5zNWRxgGrByx3Ba6SH58jPmqdC5iHQ",
  "key17": "4UmJ4FoudsGYWRJ7B4WeSTKagUTi3rg6viCZazCt9hf4S5dmESFQPpPnr5WKLLJPnvqRj67AnFAWd7HqT7srNGAu",
  "key18": "3KrgymR5wgh2R7NGZprEvrEg8k58QRSB7eXmVJpnFjWuSMuhosYtSjYvt4HDri3tfSS6pBVo4mwKeSvjvz7RVqKx",
  "key19": "2AoGGE2XKCMM8kPDsM91RybsJSV2K2nvz1F5GeAXPo6WC3qhaa63p952THi23bPg2KGdZiwkF4Uf1wgeGWJpa5hK",
  "key20": "Rva9CkPyn1VCv3URmDdqM1jCoQNnFJXGeRsmWFbvP8VLmkmsSDPKdeGMdWCbvzrX8Q4Bbz8akBusspVPxke8t6T",
  "key21": "3uRxsN8LxDaoXCfjenEshkSF96bk8QaW6gwK1dsXiFLtqUQGLvFeVewRhGDGMKUwWHkiaFq77dtYSHqHn5hqp5aH",
  "key22": "479znEBGccoVF7bjFfAT4EudTZ1Vju2rMXAhWcEQpmxKCY6TzfDVm71rweCMSu4pNQgiMZgkVHmZfr2DhJoVcgje",
  "key23": "8G29zmBqLawnT2Yad4KsB4vkkRwj5YU83kcDALHDMrC6stYrc4Wb9XeSxMn53sciE1XSvJRHV8bZARKYgQEbVKR",
  "key24": "3HX4YCV1gDY61mokDEhaNNskvAT1rdy6rBQwZC5cs2K5KiKvdG7m6nmjF7KnZ5S7bPsCMcPBuiqkQfpw7bFaX1hT",
  "key25": "3CE4EZyFvxg4ytxJTFu3immSebsg8cqdCbNXWzdFn2hBkHYT3FjjjJy8Piu5LiZrowY5uFwXZdAtD49U8vgLXZ6P",
  "key26": "67VdqiDdoQMnT7XabppUwaXUWtREk5GuYTx2enCwBj666Ue1wxRkrruLGhxbfCKTU9SCMxFtUhR6NCwjrEuknPgC",
  "key27": "4ynmoFupBeiqa1tGcKtuYXAS7mdTNakg9hrvbH53JcwxgesDSe84yxRm5NBeJ5aY5jf1MoS9CUQfqroVMdWgNJmv"
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
