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
    "4g5SsBuKjBox19am8qgrHBoGUWSFcibggkQXxXLciU6sze1G2xvQJL3BA5UvVjSkQRMpHN8J3t8EEZvL1p4DaSp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Ket16HTMQY7a7PcLBKwcfA2gspu8RY2jrgNVeZFBZ43xCKJU7uVXRTSbrksrpZsWTPPCXQDNVDCefoegxwb2u6",
  "key1": "4BDCyCxDVZNss4t5UgPUD8L2HwjEgW2eNgsjUSLUsooZT7xCpRTKMTCwoDvRHeEbH8bFwrptC3htA49up6BZXTU9",
  "key2": "5Kgn8FWgmQwghQEHBtRnVidCyYYMt9theFNcQouZwRpuyccvvmEoLWK3RT71x32iAziVXiSNUv6KYyRkw6obA52Q",
  "key3": "2tKt6uFutMoHA1scNgvpvExBnzSQfJJNZ5smLJNEQDxdDEQeyXQWJyaxqqGTQCBNufPYMRngKeLdXLcQHSukzheL",
  "key4": "57WsjK9kKTPCLKqKm7hHkEVuoeBcU4J8EVmmxDCawFCYMYsna89fUphNyBbL6BSuaQASfkdKEMYBmoYntdK3DWsU",
  "key5": "sg1AQe2jgzUre4mDqvTnfJjqipJLrKJ6uLTZqX4ftEpDnPiNFDEHraPAYAn1RKnaVbDbdE4zNochYEHwPRYby7P",
  "key6": "5r9RExsaXqzoKhPHi9p2dLF9adg2ffRGPrZjf99DsHPxfvwU1pw4xD15ZjwnqUeEgJpN2EuYEFtJQGjhVhFYwMfw",
  "key7": "c14CgudjPUgf4bs5ayQuLcuHhmVL7uVhJ1822V6khGCEKC17wosorEEjjVKrxWmeZoBvQxfzvc3yYb8azy9pcYd",
  "key8": "3iv5sc4bKEES7hXM7xyMVFLGtGaySYYjVPBNsjo9vCCUobw5tPn1KkVCojfzEYub76z4wiXg6yusHHx4w4SN5e1w",
  "key9": "2d2BFgTqWV5nUVJKXQQsNwPygashcJ5eozZHXDiPVLz2h5RAu9Qr93KGd5GXrYfC3mtHLjcU37Gb4RotzohoT8GS",
  "key10": "2eB98FfRHidS5aiQCmvQNB4bcPQ8aVhXurn1SfgmP1oD1VnLngi5RCPwbQC35vUPnNZewb2mBGZKivqFG1VUpvKu",
  "key11": "4Uou2jjZWG1XSgocZmc9ySpUdernQ7BfR7z4PhxmSBWQybVFU5RpLeDkQUgmhZDQjELKuBL1afgU9wjLRG2niJyo",
  "key12": "3WfhutcW7GKWAe36yPKybMA6MuRgmucArr68koyy4Kc9Npi3dAvytgmqFUSYAkeTGme4b8iPLe5HZg3AvNkrB4z7",
  "key13": "4K931DjnstmsL3fSWwk48Y5FJ6LwumCxXw477nApB7FpoT7yeXxqivFPbDHoqCs7uGaeNiseHCrtjuZ51P2fAMSb",
  "key14": "31B2jZDfH9bT9F29YDCsnsVQYDfZhEcDBD4F32ikfnyD9FYDfh9zDQMUdgBzfoy92QVKbn2h8wm1RZeNK3gQALzk",
  "key15": "5DCzLVXpbVv7Xst1rtXhQ8KW3pjJHkZkBBvdZWrV4NhY5SN4d8D4fMarJ4Ktxsv8LUE2pym9MyHUgafAPE3Cb64H",
  "key16": "ZJTDfru9Ga7BzRxXaKC1qHzXx3G3c4nhBBgRXUqcLbfM32fvAfL9UoaGEAPgiqohEnjLbFKVEg9g1tJBYF2QzR6",
  "key17": "3esUGGzkBv8q4JcSaCcLD9Fs46o7GbRkQkddsSajqE2ABufYzQuvLaGGjjtF8s5B27Gj8VJxsPA8cWSqdZj1nfgv",
  "key18": "aWPALMivtpTH5VPgw4rQ19zpWKt8iauPS7aefXsi3efqQSg9oQLLyBjGfUuWAHrz6kBnFce3KxbeGZC55DMgMap",
  "key19": "2tJXQeg3Cs6fbZ7XPwSK9DjWMWNDktpModaWEh3orKDQP8veZokyTaRaqtY7kWEnuU97StUtaLFsPXjXhpg4Qs77",
  "key20": "2JN1FFCaajPs1RSRe4ou6FnVMiy6VSFUbp48gEzu1oruVEzN81FE4VRLqAxf7zXnPw8LxdZSSjNcE2eutnugCcG4",
  "key21": "25eAAJSaspDgikd5dG72DtVcFPk9ifwnKY4AhiKNvkNPm5otaZ9McbKorNoGswAgrRVbR9Nmziy5Sp7w9AvB1XNb",
  "key22": "355QhUzxf5hDJ63K336EQ4m7My7qZ9p1VsUSPWqVHJq8B3fK8jWbJmz8HjWLRqni9P19HkG7E8bxTi6dXNCdqMBL",
  "key23": "5yMFtFMm5SHXU1Wryjnpv1Fh15PXeiLM6eKYyX1tW8UV9YYhUeHns3m9mGRTaNqzEehdcuLxnRUkcjpVyAezjcGq",
  "key24": "eDccjsmKdkVSnEVMcn2yD68CTrbRV5E4a94uYjHjzUVy2pAH6cVYhpDnrrKqpuEmQpNMW9kBdJnXVoLHMNZh5KB",
  "key25": "5FKZ7gZwUpUjLtUfcydGdGQrWvHYWXp5cQHgc6naH8LpwFNpDkAaaMNQ6m13ZL7aNc4Vovsv3hH8Jy96wjM5b3LV",
  "key26": "2tPnBHEFqtAc1Ehe695ecmnXm7C5yGmevTBskSNAJsXHTsAxbTSyZTnDbggBw7hzN51XaQLLJhHUbVpcsaCwCxnM",
  "key27": "57TYMzG7E9XNvyDzP9QxgqkanxpT3swTXDWr53qacw23DVCKv51VuwB5BvwZd1bgVhs5Bhj4bVscs3w7qjn9jHw8",
  "key28": "4uCQJ8vpNY91s3UzSKp2nceR3oSWpvH9Pv4SUm9oz37HnWwwQMLJfh9SAYe53fwzmRyGQnUYw14YBL5uuHmZnyQj",
  "key29": "2KHmUoUafp35DS1iumhECd7FW4ry3kxx8AkemvobzuKXXTBQk9nmociCuTXT5rZMmZQEA4RHBah1FY4YgYVK1YVt",
  "key30": "2fHFg1boHfqLo1kSjVwgMqvcmPziU2TvsHy4BbzLF1uR3Qv7LGrBA2aUVyx8JANhfF3FdcUUc6cuSZNtPGBoTEye",
  "key31": "3WEXtCJYwcCYPJVURK2EJtsj5pLrbHpKXmyFi6hyvn3tQsFXoX9VqEnfmXVwWhJCnaLA7QC6gJL3sYRix9QzZfQv",
  "key32": "35inCBFAJRHPbcC2HeVcU32XYMHMVrCZwsR1ELaLMLCBp6Yz2BWmBm9VKUB2oJCtL2cNLEU1Wva345GNiKc2S3n"
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
