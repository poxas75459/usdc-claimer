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
    "2BxHLbAQV1jbYMU7kx1PwtFArJeUxmYq85cNaghhX8fy9Uya3fATuXZ94EaE1gofsZmM7BKremmmqMSpmPVi3ZM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4khiFioP2gnVLYpQrj8GE2gMt8SrjHb8CFXyxeTmzHpJu1jXDZiUFiE4WYBHzviwAxtfVyUovmrSMuBThg425gHH",
  "key1": "64wpXdCao8Q6uifDfTqoh7AyfCrXyPsk7aFh42DDUBD32NQcqjp4CMf5RSJ13ZDmU1FeuoVBCGYt6NcM23QPeFmq",
  "key2": "2mpAZiYZYRyigGB1vyyDTBBfzi2Cp5hVKE1xuX4gpju6tapm449TQ6v1EcWBBGT24uLymHd6ks83s6zMscuo7Fjg",
  "key3": "36wFnvwKM1xaP8XWje8RidZ913AiMJrHGDNpaFDHSzzmDuvZob3tuS7cZXFeydPUBnSPpZwTwqDN8ZGYzD3WqPoX",
  "key4": "tLkNm4cYV7r39QuL4PEYkVyPbFfZvm172Yx39byNxjekZKYviwubg5ahVT4Pxr8q5o3LfoJs4d6g8ZcSc4yA9VS",
  "key5": "1yZz64pkgKpd2Wz5gNyd3PmVUGgiHrwuuvbSBsBECvUwCQGDU6LSoLkh6JVkq81HvgdRuG6syeTRrVG8ohQ4uAW",
  "key6": "WitsUBquvsawfy61gF5HPcZDs9UQATJ5EVtPDo8AtYJnTDdPZV1UbQ5rEAKUv8B4WUeFAnpfxmimLHwHQKc1vPQ",
  "key7": "5CfkrjwxgpC2TDPCEmDP5nvEoYagRXmHucDdaoPEVADY1AAsjMmQaDt3yVptY6TEGcC6qPmqv7sVeBhCB5JsL7YG",
  "key8": "4nCFZG5NwWra9vgufUZNrj2aXKhDhcs7oRBJNmpWtpL6AG1fiBJiqdVLhqHV2xAt8cP85p71sZARawbaoj2PTDVQ",
  "key9": "4vzMv18MbJAWzwm12CyYriKCNSgKNJbRGeU28UWwWUVyL3u322p2BqZg8qvQa2Nwucaay8WJeYA83zHQMwGZcSiC",
  "key10": "2ir4spS3pF9sbKVSL1xwMjTCXHeRnhXTjBrjCp35pWW8n9HAVQQUfJJWmWWtfR6gqUv8H5ee4FRnar6DLhv8AzJ5",
  "key11": "3iQQDLY51GY1Lp5hetJFV6ZGCmu66reCjEr1bHYjaXy3ZG6X7Wapiw4mUdLmrmbaBNW5dukyqJ4BkToBtZVPjqDR",
  "key12": "3DHVNDXyVdekuh7nxhA3DmMLsBD3pUmWrVNA6bVLAw2jTWYvDkqxasaij2cK9ANMYyW2xKcSNMdGLNktzc57YS5m",
  "key13": "5YBZobjWjRXwBZMyEALtU6qcyTdnX9HXb8r7Q2BnGPMW16ALCdNCjvVUSEjEWYWjhvs3u8PQwbQ67CDHL6Qexp2v",
  "key14": "4FC454axKkqtmdtSyPVUt4ZegJE5n4At6i9BgZAqSvBcLZe9E4qXkd77c1vmR2Hnoa5QWTnVPUnJsgiZiDuSasW3",
  "key15": "rmTDbbUAvSHKBf4HfZPU7JCtrMsWWA5eny1vmajTRkFRX5bQgTFmZN8PUP1cunemYaeH4SDFSJ6km5Y8JCdKxuf",
  "key16": "2BLNymjLjXB8bDXt3LZTRYUgguP6ciQqaKpGFmNHQrVB45AyJPxB54WDxdadyBr4e9XRM4j3SLd8bUaosQ5bXPW5",
  "key17": "2NHXmqVniThbbiayHpgQkGBhyx7Gy5tvP9jVvqt5ifL6gXQaGBHwJLvZjUneJKXG9Vtj1g8uG79WhRVpJrJL58Hu",
  "key18": "39eKQBhLjnNvsFvjiwQ3DzL4YFkr5xfyzysWRKqm5yboCK1xcto4JosKBhmzvQTf2yyZZHg6UX7A368ofDNqYBPj",
  "key19": "3TE5DPZMHWau4Vt29FwLc1pagZKzW2HFoFtW32a2XoMdU6Dt25wHZbRNNtNtLxnSYNtWHYYXd5TpkJnnAdSbyTnC",
  "key20": "5nMwF6nSFE55vjpww8hF9KRjocatp3xXHPwmr4mjFgE9M1Gqe2QNaZgsJ3vNpDXQsZdLN3TatoCK5KNxUhT4ySN6",
  "key21": "5AYZqvgwRWC2Qo2Ha5jDpV7QtSzhNziVRPgUJeqp8QPvtbuRpee7jXSMZEePVFgWTPiGZfronPBPArpsmQtq33H8",
  "key22": "3Z4nfx2EsewaZh9RGJP2KFveNg3J5THTCoNhosSouwPYrvBm6e2GsWaGDYruVHVGJUjqwYYmt5UML12SCQ2mFefS",
  "key23": "4ZXbGoiGtfc2prDjPmXhY7wit4YP2NuWB2mqDi3b4S6AAt3taiXP1A3XtXmQjR8VQRjW5GGP23w7FfLSMrhYBXws",
  "key24": "5aJwn4qPD5geKwdUoDNxVaGFMSbQWeDVVSHWYj1j849DNLU94hNnmA8GN4XMcYo36e2zSHYX5zZC6hnGovByvj2M",
  "key25": "44hz5tehVzmJmcwtCwjZoyZLXSdLrQEXG6MZAPvNLH935763MkULbjxJUYD6idDgvZzsDYvfZKr3LEpxxbmRLJro",
  "key26": "3fYqgxbQktBekCtKxbmAWoc1SNwLw9yKoM4mBcdUEzBZTFnHtPGZeiDFuByCLumkJzFbNtBUK8qA5AJch7nqbJ6i",
  "key27": "2Fd1Z9crYm4X6k4iLbiorX2XXnFrLMCVWEb7zJ3bpnAkD2F7mLjn1a6n8sAQvucpLMsiyR4aZpVaw7gSQUoebCmT",
  "key28": "2HeoMB5TbXwvcJ1wTtBWF5TC9osRBVDBS7DXp5TaHUv3DqFRgafCq5AVKBmtAE8Qd246BXHwyow6drB55Tq68BDu",
  "key29": "2JHUcjnQZWnNChQ9ZVhqWHEWdNrHP9ua5NvE28XssMxLxHqdi4qyVSQg24Rn6UxmDQ1qnEfiheDjnmvXamsoqpDs",
  "key30": "5zsgjW4GbEiqTZT7ydUUuGE2uUeBA7Ss77nvSXLZrsGGDgMn4ngPFWHNCKFSr4Ykxcff6NYobobxhXEdqupSw3Q7",
  "key31": "3EK6MvjVC6VYvpoJcVnntLCaSKFQfAL15HY5zBSuiXFBXdXizs83Ds6AohGrDNcLQmQcPgfg6aq5tyecJjCCX6W7"
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
