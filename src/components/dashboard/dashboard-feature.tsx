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
    "3WzX17eiPSaDPYh6fRzj725ahiifovmuDadWqj7P8QUyd5eRn2QK8nDtLpCp97JtnbuWWV8PqUninkZgBUNgoMQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAgQMG7QKGdjwAzFB9RUHYthT1j4mFGuzgJUUHe9fq9NoQvxhsexniU92RyCQHWhTfwsDX3TnjT1SJwNyacLA5m",
  "key1": "2CPQwWztr94miTvZGPMLSSgsbyS1Uo7jp9FodqmvURL5pMaLY25wKXvnjf16VsThmvpiXn74kUttiSHccAQKD94f",
  "key2": "5bR8VdFfxZbrsXDQWECoULK3s9hGt4qdcQRnFsh4qbtky4jEMEQ5zTbMHa5b3UntArDb3g5KufWqiwXuHHES1c7p",
  "key3": "TVeZvCXheSR33EH9pg2HkTSyU5tzH3dxEwX9UQuatjpTC2Zdk2WAC9phwwn1StJusuVmZYjR39fUwhGRNgR1ki8",
  "key4": "4yu2BWzAGoaV16ZDJD9GWDV7UuPv6phiwKBk1iVRaX5cZx7y7NLUpkKhUo6a8LddsQqx5NztNgpEFGhPjUhAeHHq",
  "key5": "CNA8NapHiGxLbxyfQYvbkRdofb2FQop4qwKYYRMWnfj4inoXHDWN1avyUfXd1iX4sxV8vq68RmL7wTputKA5Cw3",
  "key6": "2cV2me8iikeb83n6DiMDa7CnmWGv2TBP2ir7Aq58hJbrGMGu1rvKRZVcK4oY1sP6g4einT4viqE76xAmQGK721y2",
  "key7": "64biqEysWnkmqYmkySktTsTGNFcfzf57XhvuukAr9UcqrX24YUgQPtKjrvRuibknsGEFSLC3rWMkVzVmfCksm2hf",
  "key8": "5UMNYrvG9uNqc8318FQjD66op6L3GV21tdZR8W8gsjNR8rTco5SdECLnkJhbJLdc1RFRuDD6d5MQvmxxJvigryZY",
  "key9": "ThvxLtWnubFSXCkMvoBmnKYczh3tnbwBMgXVaqh5RFuRuHfmdFxomMxbHLNhqT1XpMgkKEAqJESfNuHTScLZJPo",
  "key10": "4a28uxvo4eizKyMoLTPebVNKupHWUUmbpVXxuMcZtMh4chtBwHNa95VCiQ9szEQiVH3G7D7kSzMK79AafCWbdy8b",
  "key11": "5z4uDLneRXQ7VJya6rjg39V5fPJjWYzfaPU7xqndSZj6XdD7JeXaHbMvg3Fmzzexu6DxySEFgeMhS6F2S7bLHDrC",
  "key12": "4QRGEnb22btfpdpKkjmBputh9v271S59JyjtJkfgXpv5ogmLtQa8mY692v6iMbxjeoZReEzkBsqhUQPmyLzikbmm",
  "key13": "4YCqibb9hjSnuzF4hrBKCQPyvowP3g1uM6LTU6h2RnfuWnUz6Nbs55tjtgWbe6p9GX8KWsEnWJXin95cj8RMXgij",
  "key14": "4v5GzyK5CDHhV1ekW74J5EqJoRmVbzELzKATbNiCA9sFDea5SGfn8ctH4W9sonXbRY5wenia1W5oGE63GML2Pjry",
  "key15": "5VQsPa9iwYEJ6e5qer7Wx1KKuo5tN6TSpMTaJkzWAhYUvnXbkN1VNnmTfhTTjA1FwrVrLypGVvKrgx2caztcSCpN",
  "key16": "59PsKzchjw9owRwH6x66cQcPtjuPUQJhEYqfjwUkCj9XuqD6Exvujn1kdy2fDvSTZTf7cEQf9A3u6RfgK5M9XDeR",
  "key17": "2FVBz7yskL8vNGbm4Lmq9JKhU1zcJAXAB1MEYVwPyYUBDa7sbL2MdzHfMSGedt9KVJ4icjsbH5av1eXCSvDBCrw6",
  "key18": "3ftahLPUEBZQKXe6CzfUaQvSgUK7MpVk2yznRtG6SW4zgffGaBqPgtPLW228Vw8vKgvHHPfVvXc6rbzkiCRj7mnH",
  "key19": "5WgWDF9pRyAipbcpfaXTVgCfVPRcJZfrmi5GgPWxVKUjVDzUK4oeGueiTfXsFBNNtKJTL5zxv48vefUN7xEha8Vh",
  "key20": "2bEwWka1ZmFeW8hyo61LTwmQtPCsvuUYwCmiP152h5jJW2MVoPikjaC7jDRjKpNH349DUkCXBq1yfyB28KVjuFCw",
  "key21": "6SQ7SQp38uPf7KH94YNhscS6wvuQqu1QZxwwary6JdW7NVb4c6cyjYm2LPaNwootMo6UHPtdN1Qd7D4DyTZSS2M",
  "key22": "35puLbM9duN8pkPLtBDHz4YSAUc6cLZaa51u3nXRHfohBReBXVXJt3PhpoTMxLn9bDaNkpXBzsCzb9DUdgqZ3ia3",
  "key23": "2P7bbE1PkD4T1Dgw6wMDGdGLnpRjDnW4L2x82QwTdHjYycmCrAofmsLAdKg615na1PUKvcYHmTnGKN4VSkgUSYom",
  "key24": "3jP2dcGAJPrYGbjrmc6ZhnYPihsJdwfZjyht6rz3XSVZMUw9H7ek5JXCGfhE1TARKMhgvWH3PdniGnJRAwDqtCwa",
  "key25": "5HZQgySBpTnj7hSZpcMYqmhaRbgSRFeYZJFCxQ83BsrEFhiG5pAKrtDgm2HgaA1NFV7vet82ihA3yxNR1g2CQxUm",
  "key26": "3g3hDNQQEmxofgzRW1uJvAkx9bPcoWW8do6qZ7CdqAsPmuybbKvcNuQMZRE7ic1G2QGGVQUgVX4cEfKRK32CejvM",
  "key27": "3AimQWg3cgtAydJYn28pAHmp2RaQGb9fCEeqZyMCmaauh31fAfmW3hbHLgzgj2zZPVGavPVmekNMxDQjRAbLHNZU",
  "key28": "5hTLkQRNH8mrsoxBSXs4hLYSpBUV4X825nJcBsrkfDr95we94uhJA1PNVuJDH7nurfmfELs5vve6uZDxWkRugNBW",
  "key29": "3YYSKZwGgiXCYQyUm9HN1kHaUsJQMm1u8SFQfnDxTfKbfT9x5qZfDRYBFoKJecWbCdBD7PVkFP2Yd2zHUivHCz3m",
  "key30": "3unVgRj35MbkmjJMk7LeWEZDh7AD9C8WC1CAhPyw7U2yJhMJbq2SHNq6uRyEsUopRgfsQDkdbkSH8iN6dMazJas3",
  "key31": "5ZTM3cf5jXq7Kfb1ZXkyXn59kor68Yu5yDe81QCZRkZRqYKeHig1TsbFnuR7qUhKM96byox7FEc4T8MEx7ABm8tQ",
  "key32": "65c2mZ5EWKMJgfuYxcZgry2MpaQDhtGRavHkACKUSUxXrXr3JS51nGbRi1cz87iQMXwbtZKB3rRohWAsmBCk3VGW",
  "key33": "5PtKEHsmbSLK3mcUX7iZP2eMravZovSUMtjAD1MnYcxPbrsdHvKjokGV6zCciUv1AFd5v9nT29C6mXnEaN9FNXPX",
  "key34": "AJuVgefJqFfGDqEEnNnLdguim79SWxsyhD3CKCpCFFsBPg9UuNPRC4VRvdtZ5rkUMcsTezxa8aj2UugXc4hQtrm"
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
