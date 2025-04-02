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
    "XGRgNVPPPJct9A4Sag1iGVxuWjNstyGUt7MPkPLeqoZrcCdmsSii3r9WRRQfexkgwE3rYbsj6VZBycjH591NT5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XvF5BbYjqHNb88AAjourScUMCLTmXYfzT1RMLqe18Ktv3NaSPBrLCbBjh2nkUh4VNabvPdgR9oYC4egjxHj3Ka1",
  "key1": "2uQ6eCn5hb9kq6HSaRifooS3hUhiSJF886E1MdK4PhE8HKnXpP6tmh6Tnb7geXr5STe4SwjZ8NvgDzNQXT5SC7hi",
  "key2": "LjHTBoEq9AshbCFufqS597AA6uKC3Rg4XY45nPs1tHqgb6vLGZQ4pXwQFm7NkNaTE2Geqi3ay2QXf44YSLziLnX",
  "key3": "K7wfKiviGjf5jGsubAaWUpz3cQAT7H31mKFszkDhWxPeHDQxQzeFaKBtT27ipJ6BymUHvS9VBqrTDAWDBYrWPjm",
  "key4": "4wwXxozGieweoAkkRP7aLb2ySduvwzPHzmu8oUygTSKqo4VhQnNTpkgjvCFhDnNLqS1NAFjWwgaQMWmKdBjcapQf",
  "key5": "3Pii9W4Pb2oWeADHqsb6WnFUTLe97KvXUzP5F69M6cUB6Zikv4cUcJqjwcibwZWk2uLhymTgh8N3314Wx9aSCgsR",
  "key6": "3oCZDcJbghwQNjJchAw8QULU8KQ6JWwoAYcwXB2B8qdhXX47hTaA7iSrfh1S5QRo5LGZCCSPDQFz4rzBw7BC7bUM",
  "key7": "2JJ37a5QPgS8pgksvyuVWx6Zhnch5uybiKFctU9onF7MVEZqQoant2N5AoBTReD4HvDfsxZDamW1dbAZzjB5B2L3",
  "key8": "5hwkvvs8k1t1UqTMBiVqNxE2h8oHwdt7ndRjafTcAmDJwKoev8766uTFi6jK6erRYu8YcpYp3yuH11UeAYtBK5hf",
  "key9": "268DysyrhjmR7p4Ng7BNUKLwsPa2JjgVdHUje1W22fyunPmVgZLZadp4CL8XQr6WVjq63bpvWz2vysXn2h9D64pH",
  "key10": "2H9WphBWuitrpzJgExLvpXipzeggwWAo9TfhwKSDViTdBpvrjJ64pavXYrM2w3rPViMgW4C5hkXK8VbhaRWX5F2o",
  "key11": "3eYT5N8sQRR98HLZLvaGTnRtqF27qHkxkvftnp38TXM85odYQ9MDLPBcVet8nUSZ5zbL7wrWGox4kxKNfv4pumMo",
  "key12": "24CZzJc6YMkPAN7nBbxBoyW6zgJpiUHEiJAHP61X4LoE451UXm99nxGQYi4VrG8qozgPkcwXnuSts9iGHVmtDq4X",
  "key13": "2XSHHigm2tkFkySK4dhNAyzcTppGsqK8VZn7P3DRQJDFspATt4oKiPScHCQoCztVmGe62gGuq5qDCqatd9dnedSQ",
  "key14": "39hQBuZTfmSNzvR9jWNtbcShrftApkVCYv9ogpD8zXpt4wqYTeYRNucJNyAaQU5sJPic1nPUayetTjRTt7Y1rYDj",
  "key15": "3gjnQMbs1JkH6zHVeQuFP8jj5sQt4qeyy1EVWV4jRYuiByjHzJ5NqhpJghkFPW6YpV4jd9HrvczAMbdES736qMje",
  "key16": "5XGTriD9XS9d8EiAVkzQ1fKRRPQvb643MopqwibfimAPQYa951L6XPcReYaM39tFjYWS8Mo1Vqadf4mYZRN6YhwL",
  "key17": "3hzsmgoH9SN21nvEN1tmxqNfA3MzxdSw7q7cJ4ELPBnhVB5dPhupg5UXTQeAUXGZsaqfnAv1zpuzdx179M8YPvja",
  "key18": "4FAEw9gLMxwRaebWfbbPafJJsxJSZmBRn5ttiZXy7u5UKjcrko8jtoHo8PsgGjbMujbJRZ1SK2oAeHfBLJ2wSG2Z",
  "key19": "2aJCm7kcm2LmFWrdHRiN81KKTiMnSVGaS4D94PN4fef2UjvDUZU4iSyR6ArprdikhZepiPNceU96EckNpaZD5yjW",
  "key20": "5mD5hjyWnKjzbiFUjEHD5TE4TfpDJ5Vi8KNbqxc4JtiRdd9QRJtwc7CEyVxzHPJF8Ycw14E8UoTh8U1ubVFtbtkN",
  "key21": "4dKBhrPAf1R8gFA1gqWFnnS64Fd1nxLWMcXtFejA1Bxv4R9NevPf9xWEy1SdA9c2ebrwJ85nNX3NvTkLfPcDqe6j",
  "key22": "3KhvyZpLg2R7yDEEzd43GaaPtqSeZyNtY8qucctCGPNu6sWMG4utWUnF8aEHswKgzc3hL7T8pCgzqSDLN57S5U2Z",
  "key23": "4eCimBJRwS9KgVo87Sayizh2ptPwksWnAxWpDnMqJvkrunpgLgSQRnBH1fTUcZqK1vXDhz4pbpcQojpsAsuwNdAG",
  "key24": "5dZDFn2zbiWW6KLgiMS9e2xoHWg645pr7AVCG9jXaufvZueeEvXfGL7Gi5Bv2jBeND4JAaFfoVZQQ8fhqmqM2tQi",
  "key25": "5egzw6ZG2waMGzfHCGj8RUS3YBNaw25ryos2BZsSvgPWzKDf6mWEuBVNfJFbrt2PQ2HLrnaGCkBxmQSuc3Qb8QLk",
  "key26": "2kzRAKnzSUrvXCJpdzegaMFeCFtqLRPhqstGgNjFDtT48BUbEtuSgLLmSDvNogzqCw39MUgKj9U3g8HsACugzoTj",
  "key27": "2RztkiKBiJiPTF26NKEBkDdpmbf8JEbzuznPFceMKqUK2z9HsHteTTwwAgq8b5yniPsRuGb4PJ11Z6tZHUD8H7z7",
  "key28": "8MLCcYrQJTQ4nxThBrpEeh8NNf3xFfXMC2HZPVmJSMDWtUSUFPwYf2DoY6CeXSnhbgo9gFgdz7ki4rJDTzGtDxs",
  "key29": "DLc3z2cXNKdsd2u7nsfNkL3QkAwsPpMVbSomuBj856Kf2tE1mUG8yXevUww5j29JNaZC4SadnZWGQ98iK4i6H1Y",
  "key30": "5xLahQbBkizLg59DxjMXGV4dHtfcLWcncm7Yhp5zsAhm9VoNCu8KL36z877h773277jPetw9Dz8eKsHH1CLes2A6",
  "key31": "2WuTqsJ6YCBRqkURnB274Ku4st5KJgjJjY93NwGuwNx87hxsoXRuLzFEYCQd2NsNBDV7tCZLxw3agkiBtfArBwXH",
  "key32": "44ZCryqHZpgqqqbHCfskWGisQJqDbVF49PvfXENxfvtazAjTrdAa65T37pa3HqjKMYkVDgbfU5ALFNsvCV38MBY7",
  "key33": "4HgiJxTpeeZ6CdJv8dgpjsKEkygp1TxbafGnV5Pozae32DZaYQWYJRX2U2yA2KKMaoLS3ykBVWZhko7X6vqyfjXh",
  "key34": "5YezUzeYR5qPXLT74PwXYXwH1VLtPzT6ERX5YNC7EPyPBDz6mku5t64XiLhwhuajsSpGy74DLPx1QusUczBtatYo"
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
