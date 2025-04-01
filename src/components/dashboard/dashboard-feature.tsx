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
    "4LfDZ1rDmhmGNnLkRFYgc6tFCTBK3zJUDEhDmn5zQeMq3uqLf2ThDVehPBdEXZ8qw2xigxVW9DEPvju6BPGq7zf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5ySdxG5r7PiJW32mhVXFP9rsxtxsQ3UrHL4ZPvQV2kZ3qscyXAnc71s3nMLXfuyKj6sqNxfs89j9iezEdsRWZH",
  "key1": "4SPVu7QakRZXCweD6J4fmyRV76SoCyTpzRWK38oyBo1ukAiDr62fpSZv3fR4UQavjTxyksp9qUf6F4ZSzxduCKT6",
  "key2": "2NKFtDh65PpXg1ruFzKN6Q85QArMcpTPD7aDgG6hKXLuFhYRt9BMKGa8t6jXBtmsFVKSdQn9GEb5fTsZPXsqBGkR",
  "key3": "pPMQwXFHJT8Kpmfd6HUP9goNzSDXHVzg3DoeWxbcwcDjr9tjv8RE6Hw6f6UeYKLR7SsEpJSQAstKH9LbZwFt8aK",
  "key4": "24kxRXQtMLUsQxhgWhSPvHS4e5wgESaV3wvA5vshNQqVxsHjYFaB2Y8EXwfh1xH1VFhWyLEUYdTTR6TUdjBo9xh1",
  "key5": "61UqAdEbnZWDEAefgjhJELRgMYsMhKWKMgMZGDWa5gvf3d2mH97vYyZuKW3jQXyk3uDfX4ubGTgc1rCsNDMwLSxQ",
  "key6": "3ZYhiikV8EBMiKA1eLH8Bq7wrQvozw1dJePqMxC7d73KtQ5sWDCXkgST8HpZmPeMT38uWhwUwTGKL6uJhEZBd2YG",
  "key7": "3HaQXfNKeNYYWZLB4aRxHVgtmkaLwHsrwxyaxWXp1UJiHj6bodLB8CrsjFVEghdjtnN5Uhx1T67krJfkmT8D6oZs",
  "key8": "5QbEWiGwB7oUbgzk9YQFDMEeBVwQMnXzLwHh9rAKh1J62CEi21a58vMDCdq6u8cC6TU8TFbuyGLauN3z8YCQ4hR8",
  "key9": "otJnSefLN6XZxKFcsE4mme2fdtLH8UwfvBKvderhTW2AG9e2g1NYFKTsigW7ohHb5aD2pMoR5KTkGpxUtPYruhF",
  "key10": "482aZSSRCq7GE4SMw4RR75Vn1GyTiNEPp8QC86bJWMNVEZK1pdZV5bpxWozyVkaGScyBBS1EJedBrxeBSn68aC3h",
  "key11": "4pqMJki7VCn6nFheiCb8z94JojsfPXfePPEEcb8VHov9c5sPtCS3DV5a13pY5BcMEvaqB6XcTHw6By6N99yZZc9S",
  "key12": "3erKaJ4qogHvWHM9YdHZAHkJPVdHBtGePhqSytsi49oV9fucE4vU52eDD8GRtLBFxhZVQjA7zhGMU9k43PTYvrFF",
  "key13": "3JJJMMYuRsNWNuexSpT2y49Jgia9LYZ1uNcW6WAkgdvwxKeFae6hbPqcGVQmwzCgyZi4UjpPLziWHL784C4yrHGh",
  "key14": "4e4DwnhRYJfs6cMa68rPthHDehd91hyPzqLTJjBXBzTcfYPRAPJG6DyT3SP7i6y2zvNLFK232viy9XWASF7N8Mip",
  "key15": "3XKmwQmSJ4cuy1szew3LygfEvRzEterGkjUr7oCGDpCRCk5DE3RLX8oairW9WADkuDc5zRHNRVH5Nqt3RfX6tMiD",
  "key16": "yv29KQEE6ajWcCK6G64KHtnatuPyyT4MU6L6PLsXSnounxnkFdRK5EYZSK9r2xXPHdB9YvdRp8GJiVMjgjo5CxZ",
  "key17": "5xjjCKdcYRBJErRX28sCQRWhf9VDogpf3NfPMhLjHTQSprRe3cdzRekKPkKNLoq8WBFxnX5uxJpCqEQbbu6vnwu6",
  "key18": "4WMi7YSuCwxKK8zhexkA94o26LBsBD88S9cwZjP3m5dyKjDLLo5uEoc6AcqWhPv56YnLvnisLiScDUrxf2W4fspC",
  "key19": "2jtPFRCfSotfTNTm4NrgYwdPM5mcxSTCkPgjGFszVPKBSZLhQQSy2Lhuq9zi8Zz35uKFJcUYMU7fxWSxQmxcKeZ",
  "key20": "3kJyGjrss68D5WM1ai9QbQxswdXHSuJQBs9uR6pNDVdCbtrDYWGtkpVPRVxGBta7SDqTK6fcbeQMHWj9ABcVbDtN",
  "key21": "4pZaSbGSNu2reneV7wc6a4qeu9CiUQqpmGbRvyDQf285Gkt2dmEgwfT1dstaCDrpCLKqhV7JK6sZpjkEaR3X8MYV",
  "key22": "3a5KYL1zCrFFJ4xxZ5tZbyBMLaNYgVoSMjU2FJ78TSmLKvSGZ73eUjm561N8WjGjywBhfLVR7biVUR8BaUv2xnq1",
  "key23": "2HkQx7p7Sou7VQq3jdTi8e6aszzJtdnS1sCgTsn15TxTAKsxmApmZ7qDgfqS8bLDDBBKonCcTd96jPeheJoqgPuT",
  "key24": "4firBuySJqsD9pEgjV5VsqYRpcHtFi7cyKdBbdbdnPUBcYRuLBNuxdgVbjGcGUktwLimp7P1xgmeCpcawoZokRa6",
  "key25": "CeDxBizmW5KqJHurhkkkLv6DXS4pEtQadp7th9kDVHNzfejtq2RKVGo4jjQTp9oYATT9pHMGkRJpFpa4hcGXeRS",
  "key26": "47ApcKK4qXkrtHD34XztxoSAnJycvqdPbLFHQwgJX9B6VutFXhPQWJ1neBTGu3uWkuLssXUGP9ZUX1J5YNwjoop4",
  "key27": "sV1TJHXUY6AkmLqccmXTFjXpmLgRoGvpUs3xb7Z6q1g1DbBevcPmXvRQES9ZzdqURPaDCXk3yyEDT2briPLCe1F"
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
