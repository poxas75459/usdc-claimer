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
    "RqZS9PEJm8KCXrSEQT58bPiCTAHSEn2e52scixh29Pz8YERrcFPV3hjPoRhrsjpVJwwf5Khk6bn8rohtyxTtP4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c3z6AT22NokomCdL6f2h9bUSqRMJXCuQsB55itx4smW4gWGMPU3j6mMNqJ1DLiWAEfq35xM1gSVAWUGuKicYLnS",
  "key1": "4soP95LLZUTeGF8EBcDLZMiKcBKNFeZSA7UM7YytSiCcZsLtSyUJ3rpXHbn9LRcemJFfENE7rAMkz6LSJFURFB6Q",
  "key2": "yz7G2Uxz6aSK8xbhZBAjFxnf5CZt6YwyjJ6wBfcUt46fxvhcMPTGWFVpPDQ1wgL3hpW3PSVXaiAxHqJpAdP1KYT",
  "key3": "3MXRBXy3KCFu1MjA2ETUMAVs6D6fV1ivsxrtiejVKVMP4vEW1PFMu6Yn8atDeRa8Pq8dekEKJ6uY92Vre2gWwuxP",
  "key4": "3bHY8417ikkELgWErsW5hVoUpg7wET8r8QMmhsyQ9xzx2ELZtxmunXbyVF9kvn2KayZz6x5xQVNAHyhV7NEHiycy",
  "key5": "56pmgrYHD6RZGAbhAWmucq7L3ssjVBME6qJtEPAryTG5svBaer6YDvDPYDnfDqD1DjZokS1RhxdmNbLbMaaXzxUN",
  "key6": "3aQ3kZfr2cCyeKobi82hB5byUn6Tzp6BLsYnsXTvhh67cCdr3Y5T98D7ryxKsiwfxrd8uT9qUx6XPNeHibs5zChL",
  "key7": "3FtrNtNYtNkNSwkq3fWJkFhDFMy5m8cKVXr6A14po19qPUTPFPK6phpyaggg5czZFnCnBko4U5EKMEnihWrv4vzW",
  "key8": "4cZ7uZP7gCPYigfAdXQu6AGfTpxQLpJJeYfUkTvpvNigcf9PvvEJB3ab64reneNEdjQ17xoSTD1szbqaCwCMNEbV",
  "key9": "5KjbTfz7dtCpAMGUu9YSFwkEjbz5iuCpynZo5kCCuaiJS7YxEwHpKc3Mrn2tRjhoaVRoBXjt1e65JzgkWzM7W8eE",
  "key10": "2Z3kb4R5jojGwTcQaDKPeCiCdwvNSJAbYe96cb6NueF1kNksuc5wBMqymBPa3SYsVcE4Fqw3RW2coxnk4tGkgddY",
  "key11": "3eBc97ra8PUgcTaV5PvfGaUrFGT9CysijaHbRzhTKAoSVLvFKRV8FFUeR32XTb7YGjFs3C6AqiYQfvmaCCJQ95Fk",
  "key12": "5hmYjfUdzvC8tXNe14iPkDbAxYWusEThaWBnsWRXSc2CaMqAHBystw7yZBrWw32keRSov1zPLrT4Qj6YPXxAZvNc",
  "key13": "5yQiVv1icgXXVEfNzTiJxegThf6yh1PZVc7BUjFmsxH6pkUSk6yy6wZ8FqrcCc1mKQB5Tyu6jRxsDUTThAEfDV4q",
  "key14": "4pqxTJbufZGfJoPeK2irRtJroq8xUGiQVceitqoH6Ez66FK7BLLtzPxRUwfrF3dnpNRvJVHVD87Ex2MKSqHvB5DB",
  "key15": "f7zxAsY4H42849CzCUNrdA6CcXdZM3RiB3aA5sZnQPy66WUFan8ruhqm8Wt9GXCVyGRtqZ9YDfjL2UYgUWxdcup",
  "key16": "51MzBXf2AqC16D1w8hUWDyntYbd7NpuDVzkWYQjivRyxEZbQepDboGkpFRM6Azs7UWg1qoBszGv3pg6JR6Dcr52P",
  "key17": "4t3jVfKbzzV6LurwX1GRJpmh3NWUeLvkm3vzaZZnpwxrwdhzgJYbmXH433gbtZKqbefpw6KzTNfXa3mjsMt5EMHp",
  "key18": "3oioBqLEkVAidQW7WwBcnJwg1txwQUR3qoFQ7zoBmvHgPG7rRMXFtvVG857AaQSdbZ987ykjkwAtd5Ed51MNBSPM",
  "key19": "L8bR55qodmXeLS27xp4twW58cH4Gow6ViKhJS5pmNZTe3wbNgLF1nbY5Xe9DsJxo7C5QBmPJnsJrJ8j8psjqooC",
  "key20": "2zNC1YyJH1NH3M2mBcEx7mUigjB6T1HdSALtgq3L1v1eBV8sgFPeowK3YWNR2YwNpy6NPFMxEpGXb66RZFDaW5EL",
  "key21": "3N2pCPCAP1HjdpCuhdH4TAqXWQ4buyfKRFURmz3S9T36hAQ3A5F9FbjozVnWZfcwYt3JWKP42Kq5gP3DHa5yHiRa",
  "key22": "4TfY8hhmPQKrxjxPkDgErBBhSHzCH4zJe6yDMk2K26pEBSfyxcwFKPEqwzz9bL8r9D34MueY3phaPFAmUVGE5s37",
  "key23": "2tr3FaU2hrV1KMmXvnyS6VF1dAN8UG9uft3egCJjmPApgyi14uA3rXsg5mtvGj3ZnwPFkoXKuDWAsAUEzcQf1mmV",
  "key24": "4edoMpPdNz9S8LLc9VNauk53spoDheyf81TUHnX4gKDYdxz2f57SUcEuvTXgq27XsaqYirU1cnCYbRqsF8pX3Uev",
  "key25": "ZkqUhFyiJkW8tqKirTbEwEpM8aqMDVVJ8Y2kj7AYy2BCYzFvxmM12g2dJPiSjhjEtLRZtPB3L6goJCZhSRs8bpY",
  "key26": "4FCnQhMHn8aaBURTkS9E1sJ2zugpNm5wfr28Qs3hYFtK2ugQBeKRyxoqUSeGDBj3vpW4xvZNAY5ZK2Yxs7Dr1F9x",
  "key27": "4F36Kn7sWcvazKyz8gkRBC2vB43nimMzhgR7jzrwi1CD7FRnuxQzMG8qjEjosEykJGPyatjM3PWatUqUBqTSESEG",
  "key28": "ftTuvJ92j7TaXXeRmWwNzgwtv67Ta7aNeUkeipaasW4gAcs9Z6ivnKCcZUGB85SxbkkYLrLhdP84hGMcSHJtzo7",
  "key29": "3sKPDVsUcNcH2jTsy7kqkCReqDnXKDJVCbvGU5ZGmZ5NNBCXLMhfytUzNxffgVRWnaXcw2NsjR5HR4LRDXJrxKHi",
  "key30": "2c93DjB1iKJXDeo6Gq8hNVtj9JnhvndrD5pNNfEdFVJ9aA51qLF12N25bgxGt43pDCKSR1mvUgPRpDBXvy66sbSg",
  "key31": "KieL8wFhq9EcUPK1AZh7817wf1h8Ays4gLLT1nknMACFoYqCSa4a9N6o399ogMDf94R26dVpZoN2DQrjo7B7tTe",
  "key32": "42WNoSHAeNn5kaUtFWzPDfdTLyYBPFtPjCor1cjRL1H3i3F7iwafDHhDJiBwgBQaPTgs66zM6JrpcFR8t8p2ChxF",
  "key33": "3vutJb6EGaiPp5UbGhaN4WxtavcEP6SSYVXXNAJA5Spw94kS4Ex91uud4iLpm4akbxMDyFCm9YgKrEEZwtu3DmVZ",
  "key34": "gYiZXLwke7qSsJptqS2eBh3s5FrB5bp7XQCjjzfqKyWNpvNGHFjwfLjuZQgRGTjTueNEv1nYxP7VHLSFPr3Y5i1"
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
