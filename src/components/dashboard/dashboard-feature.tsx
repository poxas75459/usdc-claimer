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
    "4ZRU3TSp9xNGp2zu729BBFKbWWzURJErGqJqKdqtvaT8a5BMxvkrstm5E4gFooCmk2Nmr7F2ossScddXXhx4Fooh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8jsagVFnaXESe1Y2Cjkc3b5XCG53PancUNLkvPb5NS4iDaZoH2pifjaGBAxP4ExRXJKDP3D6Yvs1oQFeyiBnKd",
  "key1": "2bCzG1krZrPejxQp8wUXQYXgEnBVebBtjWDbzs5PgxnX4ZsGbMBKGe65SiGGmbbamEPpBV6HowtPj2MsZpqtzf85",
  "key2": "63JKtHihWqSA9cUSnaU34R6iXw43K1gy2cRTm12wqHjCH8ZYdLiAHQiGmpkiyd2Y7kt7HkG5EPxvBiCtQGFZ1DQB",
  "key3": "3E2zeioV22n74xA2EG3w8dVSYpjKsRRA7jNrAdGxnBAzW7fJEGjpUumUTLCB6cBeDuumvaTY2sVQ4QYUeqUDR5rK",
  "key4": "2BVcwGbCeGePBGpHKcFtun5oiwqMXBGcKQWmCkNUtSVH5upWPAdb3K3rHCeij31gQ7jibppVLDEcxqFix9B9CtVe",
  "key5": "4az8uSmVFc7Bv2rTNKBD4BNn3RPa6DhQkJoJ1m4isnS4ndK7mJ3CKrw66SAPg2B1T2MvDPviAFApA4Dxv1T7rHoU",
  "key6": "44PiDDvw5Sh9fvLM8mbn7UYr3fiM7k82xDiVw9ivapUEUz64CVHzouUx8i5JgnDjAWqgox74fpatBwpSJnqspXkp",
  "key7": "3YfxbgEcKnX9Nav6soNiVnQbwBhPiqgnzDLxfRzUtusprkHp6evkwb3roXSKenm5DHqEeYoNQEUW1KkfkwvgyWKD",
  "key8": "4CBdguiNXkZQZcx4QQg3HYeMmgy98rxJ11yGeXogF3pFKRsaornSP5QFhtGW3fuTg6Wmoohiu1wonwYLDr2LC5ZS",
  "key9": "LmGCJe9LN1tD12v3H7MMQGnU6aJYQiuUaaojghMFQoKFNwwzj84Va76zcKGe6Ds1xxkq5sSxJJcJbFd2J8AiH6U",
  "key10": "TzgnF3zYxbTa7VRg8RN5HdSvNACQf6CMwqSVBBYmTFz6KAQAMWUTmDEYuCFYYuWs3BN6bgjJpE7MfeA16Foqd33",
  "key11": "3Cvq9hyREE5DYAz2QSSQ3tMnAffqzDunjhierdwmjAWiC6CCGa3DPFG1AbFH8WMjg8sjpKqH7aYx1JGqjLgTCtM2",
  "key12": "4oaNC4uY6ZA3x1QqETza7UGrLWej1WNT9chYgiRXeV2u3Tb5ccVsk9k1eaGP2Lim8bxq1Ku8qAgTyMBdPpSDU2P3",
  "key13": "2V3UYqtqKXSpN56SM5wzASYmHq7NQHpmergeYLatvkWY4F7QrQFwKg6HJ561R6AuFQVHbLviGjp9sM7eUCHvHoeP",
  "key14": "3tWihMHSd5Cx2zNKx2EuHR7KtYhBGN7oYthRL9jwfTqf4uPwMhuY8Nj4KSSSsexrMS5vPEbXoRvYPoFDk2Ks1imx",
  "key15": "4sL5VPmjWC6ScFqGXV2uPAMD44LX5wxQnceZQNgWNHiijfAyMKEy3GHrey7udaHzeBgZr2GaCLyCtRiQkiLCa8mC",
  "key16": "3J6jrB81tUF2iNp5zihneXGyWTFqbfzbz3GPaDzTVLA1XZ76ERvCiyFsYrRyd4AdpvdjPP6pSYQC3rTL8Bz6jzDR",
  "key17": "51HJCbwBmdybxxujDqnMvf4oDX97iMBEmZWEiNCXqsQ6nydCK9sviTEnwg7HstVAr9mRmi2sEvgkV5zM6HiGQzCo",
  "key18": "63ApKJvUNd5mR3WD7encjuB8aPugwjk3J1G8aQWw3Y4oJ7jgkbSTG3dszdqpToVZaBe5NpGRh8Mf6W5BHxYX1juU",
  "key19": "2W7hTPMiWgeQFgwoXQo9s4xujip3YkCQiQEc4us14AGLqPUpaSR6Vj7LsfjzVmdPawmnTKp5aKpFQmibVVgrUhzj",
  "key20": "5YzR9CV7NaMBPTDeNvhWMEh4jZkEaEQHWi6HdeuZzBitVXKdDRrz64cBrYTTjaAZXsU8DLXzWBJkWzXp4wLA6CCw",
  "key21": "r83Tk1ZZk4w2D2xBmYWyK8DJvY2PaaYaxDvNMBhnyjYzWYENvkfhvQsnoJbhhhAFVtLof7gcgZLChvH79HDU6kH",
  "key22": "3g49FHHzmMuN7R7ShMLQPVrSRDTYqk2JfZhBJ6cMN2VU6wJVgYRQErfP2fAJcPkBC6QYEREA1m6r9Ai15hkYQ8od",
  "key23": "32mH4sw8N1gvGhfUnjQmY4P5iiYV7cquUCrQieoqtmGUS2fCktdGKQ6ZCuQvEN8jGSdPkgcWJAQ8yVNXM3YfTyca",
  "key24": "5cuuoM1E2xg8QEy3RM5XFykFrMFKwfmUeGhUwWturTZ8iVKjZ1TPpRSUGZYhDnV81X3R4vM72gJuRKU355LYgBLm",
  "key25": "3eeNa4ueYbboAyz953ag2UpGY4sU5h7HSSG6dW1iychmdaDDxgDtmHjEtL3TDxM19cN4dWHGJde3J2T55SRcwcWV",
  "key26": "5MMQRwEf2Pw5m9NDD6JVhd6aQi5F87uxeN8FqxuGjRY2pC7KxXNcSnxMw91Aqm1qiKGcnM7z92ufSXYfgpAEoiFT",
  "key27": "27SbdgpvKhEzkAn1xRbsu6VzXFx11Zm65hVHcWFMEeRHQyQHQ9zMwTDg3UPDkEZqtrve9eTn9yx3ZVRKPcMtC2xF",
  "key28": "4nuELm7xHR61jAS44zwkDj4T8KQcHnQXCt4BZpqhLEXR1sfQRSceWsqxRKGDNykYDEFqpe3FVYpgHMCCQMEdCZHv",
  "key29": "4bHxpv7JDNMcMjn2tWZXSa5T45peZrML89EXnCDkrYqhtPejvUPx4XK4pCjAfo9KB7xofLS1v1pLDaSz74CpiXA7",
  "key30": "5qoBv5cYPp5chW1x2iVfg7s4tqzGaZbaA793DiVteCnFuJmU9GZva9bfde8n8GmPie5FnNg6kFQuZHfLxegvzH9d",
  "key31": "5F4qwAU1XjKf7nwKw1fdiskkuPFWPYaWsNgYwoL1wfRsp1UCwdZX9xgQdARTL9DCfREzeLWeT4NYPPAWzuJYhdT9",
  "key32": "2yT48p4e7o64bQYbqwDNMBVRJCKgf58vgR95NkeHVAK8xrj51FFSQCpgqadWkqPkjhjm5L7oJQm5RAagozVkJnxw",
  "key33": "4bpVMKpgq5ujwkS5R3E1uwj8uf7jBR4oRAvrTorEKHx21BJRnnuyyJGQH1RgNib8i54enZkQdmE1Erprx5vLQVzG",
  "key34": "5a17ExiSmuLQ1dJvV89pn7LHHvc74NY6oMNV1D5HApQC6X8CydB6WS3cuqiQKUVikKvptLCgm9hqyZzz2JRszv4j",
  "key35": "4iBfd9y9FbuUEaTt3g1RQAKy8TpKmwHhhx38vEbkeEt8TxnVmSHhRQpDrvUqcn2x3ANZR6zY3oVXHgQm22W8uAZ2",
  "key36": "3VujQxCWiunfA7LDDuqWQmbsLbcpnR6aXVndTsk5jn8aGmya1qZNdHqy5mgYpWUvvqEYJzvK1Yo18DYWM33CSoDn",
  "key37": "TMBXryJgMxxnnSNum1cFM9LrCH4iAQDTr1FFG56Ajx3jouHrrZrSWnpaJbH8K5oAAsvKM8PVL9oE3XfiXgkmhSS"
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
