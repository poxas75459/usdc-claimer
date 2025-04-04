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
    "SDeGPp7coGZYWE7FDuTkQvVCsL1UVr8CbUPgJA4PezBjrq73vbEEohGqnKEQpUzLusCQkjktbk433rEntwoiE5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhdYasRTkcuRTNSkkeryaGN5yj2uBdvMvd3TmuaJvNNAABoxfhfHSLudEm4hKALPrkysNP6cioG7b3mnVH2j7HL",
  "key1": "4c2mM2vaLg9vmWuXeHCrCuMLZDotU4bXxpN4yBdmffbmd11i4GrGXfUnPSApXt36BrtUeiaYN2Wia2Do76BKYWqY",
  "key2": "5UtMLzrTGbdZZTDWZaH5TxCyLUSE67cA25SmhZz5Uu7qesiCEAx111L2T76HW8SN8fLRPF1Zyh3qxE3kkXMUypy5",
  "key3": "3Wuo75JNTL8gJ3eAgXT7oWb3iniast97Ahg8QteTKjm5BTMuhLsPRESrJAJn9kyL7Nad57FTybcXXAhvFUjGWyM8",
  "key4": "2tHmzRnygbkTu3V8xvdmiCJeXVDs4zsL9iEikMm6e8N1HdeyRBXRjyexpkofTQzzdBVyoTcNF57jq7b2LHMSFeAc",
  "key5": "55vbUcMmoqWAH9bxoQB5NJAbYoiNJjNvfxE3VUsMYnkrWGazgEEKY7jY6pHZ8q9L3xSQFUVyn1bkWjyQndaZ5dyg",
  "key6": "4e7AKfZQNJmkPexXGS782KPg9wNfy5KSjwJZzPijKZA294Cs9JKW2MWCJpV5a4i2EDfogJyWqkG558JvAaDAGniZ",
  "key7": "URXnzobbeAwBm2KkdCZDcLitt6bgXxYu4NhZw1RY77PEXyEy8dC58btMAwJi9bgtvcvY5uVcoe5U9rk2xCoGNYi",
  "key8": "KdgfRbxsQ3wVkrcj7hkfqVKgcV47MvJJwpN6Ad4VYZWnwGbe9oN8ph4LkwtgxVFgwNDM3wfz5gRK9mgowreTL9p",
  "key9": "2AGnWfJMn6kZtVQhpKBZjqQUvDGtGeHKFDrnXMwe7adiniHLAzkZ1ghrSpCFCEgbVYASpqYD2VocRvJFR9Jv6HR",
  "key10": "5hD4hSmYiYVCHY24TirdJZuUe8jpo8tTm34KgPh3ia7RHwNsH2FCmE5P7QDvHSexCi4RYgaghmqw2hvbh6xAcTbF",
  "key11": "2xwuoHtTLrdNCE56SiuAz8TDnmAsmaGTokLiuUQHNQGk1cZ5k9RKcrgbpsR5ysAFdzGkYQiiUcZ5TyMtpGKrjXyk",
  "key12": "441UKyKARVkDTsQnSbjf24RgCeuaTrMgiSaX2QZGN18nrNGuwVAugcPemdk7M8z18idE2fq2cyYhiKBvfbhHjXPA",
  "key13": "5NWCrtDfiMX6ypvkgLUxAfNnNBEvWRebNcq1jimVfttQQJQ8ovjyCyHKHMJ3scDcM9JfReEF5S2aazGoRe84jg5X",
  "key14": "3DxBKTcis5BK8UBqgPuavQDkVrkDkdW9XrhAs5TE85ehgGT19fXezK4N7BHgUKFjxAWqv7PQBSPoWGLE7jjCTxSf",
  "key15": "2oosw2wkqHYHxMuqfEYaw2ijJc3yxPdoqhA7jWtUFHeveBu7QiaTsm1VqXiqR2BbU56pmJNaXm37hiXL6bijVXSH",
  "key16": "VAjMWixZirgNUEYnM9RaAJiS2KpmdiDj9FLXzLbTbr1HeUk9vVxTsPeLVZ5KvkL52wxFQqhXsn7fHccQA7v7VmW",
  "key17": "33VHcZbMv2oe59bAnRTcxBsvRbfEXMrtiPSMewrdmB8SEkbmaNX1iVYgFqBpcmXZBWa7r7mADA8TrxbagU3yxR8i",
  "key18": "31H4YeaBSy6K4WTG3mn9Pu4TSNZ1bsxHne6A6naBAdHcbaHCMqqhcXTNbjvr6CZK8ZE5VZd11n3Nb66qtqGqjSU",
  "key19": "8oP4ZnQZheuuxYrzfgHLi8hE2tEro1r69rb4Y5truKvyS4KyvYwXd39TqE7fX9yvFDAgxDbs7AKsjwki81idGUY",
  "key20": "2pSz38wigiyW1hvGsigDD7KAV8poCFEZYQtcY9XwCHq6yY9RVMwqcJB3pDBvSENWcssjmbuwVEyodJxKrqLjjEdE",
  "key21": "24uAMCaTw5JAczwCMDVEXRHXUJPK5Znp8yMT5WYwgrvCwUpfBX8gpXrpJcDJCrpcVaXjbVTmdoKt7hMWf9yERHW1",
  "key22": "4iwGEm2YX8zksxsokV343JGPU5fZnhLA1q13T5C52ekT94QtMYAAiuJ82b7srQuKQ22zwzmeS9JTfiCAh5zfbNBF",
  "key23": "3AVWNhmTKkXLUvzRyz7wTgC8ZXdPKL4fTrvVM5H6sWQ1yStHCmCXWiq1DYKCsQsBnx8R7P19s4rG7r4AhKSM2XZa",
  "key24": "5AfaGLMLSTj2nQw8kTrZDQ7ZeK8FMxQsD324jgBt6oYWKtZTpRAUtAEkkFfAd6i8Cx7KHbj8kJRETmVN4fJN6YyH",
  "key25": "3xk32c2j3sXHB6ZFiFqpaaq2UfG4aSSEzC3VFWrt5gBYcJ8AfseTmBNjTgyuENb5YuZwmYkMmpcKBJ58vE1xP5z5",
  "key26": "3dHAU32g16MxxYQ6xbr8jpnuWkFpPm7BT8syDugBYTH84Juv2pj8rUUysKxBHDqcYefK8ipLP49BcdDy72SVBPSQ",
  "key27": "3dKwrok3dSw4qd32w7Egu6vpNJG6FK8ikXAwLKpcFUNhY4GreKNHDKpDHohdmh9BY5cUodCtXRMxT4s3w2Z3nq5h",
  "key28": "46v3iahKc4rgue6tyMp6ZF8avcPc53Dac3sBVadwjCDUdyB1Mb2gQVFPrz1B2Zq3burxCwG2yxGs2PQn8BdMPv1q",
  "key29": "2J8xi6tu66eBuVJ1CUQmKXNahiDshtqRuiNKRdrDoYD5gZiedsgGvmNoFrBZfRHBhXc3ZGms7oSfMRn7JkzwfVYW",
  "key30": "2XMmHtAWAqtS4YFL672VvCS9vTVv4VPb6KVV14R7CaKV6hDqg1mSYYKbT2g9Vyzbqm8q9NYtQH9wTbN3P6LWypg4",
  "key31": "2ENduKXgNRBCJQ3X3sKK8rApdT7hm46ofVcM1AZwkECAxw7yAyjeXd7aS2F2bAXaFz6MxCbtFQ1PU2zZcnrSHBKi",
  "key32": "5GUc1P8N2XucBiFwCZs5gmKmdk32VLesfE8XmVXUka5b9MnRYQSZRh1ZAVDhY4bT73bjEmNfCdkQRru2RjhGpr4Y"
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
