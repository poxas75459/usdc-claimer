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
    "3PLBJc2AZdiozG5cVybt2efnqtCnZm3LY1oJqLFz5QQPjBkYT6HZcLxxppx8advqrg4i7KfR5QMAnupvdimnaPZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HejbPG33YpJWBiHqP6RPna2cDdgpaQ7iHKXyjpPeJgzGSYeLkU4SW84r1edHb33z4g9kCUuYdVw2NzEqNDbxnR1",
  "key1": "25PTUPdrtdR1PeBzFfERLfstPZ1VCdCmwLhSRBiX896ej1QKyjKsRs7WVS3SYrWg6pJNhPhJaeNoLJkvfwi6DUm2",
  "key2": "2JxDiMdmZ7qKqWpw9CgDLmAxWjjv8HgL8PkRByEUxfv3mkeaFgGAcNCeTAMb6QRv6TiGjpKvQhnzZQARgXTFXH33",
  "key3": "ZPc7jjH3WuiSaLbS3W3q6pUthaJXZ3hYwRABGt2oZoy5jhrbVr28xNsoYnGkxYHn4Y4r9n9bUWZASG3xbKj69SN",
  "key4": "51tbA9MZYY4VBuEGEExr7UkKN6dHTVtpN639oWmH86hcugpVD6f1oxbyJt6vRAthxkErJ57sW71u8fVUPWp6sSDc",
  "key5": "uwgHwbtrtmqg8efHNiFq2cn1GqXsTQs3DLRWd92JYGNB9TtA6czW5UtMcedFbsqJ4dy6xwkjT7Ekwu6MSCj2Wtd",
  "key6": "4nvhmfqtkQWJdS5UxkffyfshMQUoWMR7dGN8rhwCNaTaz8oDQQJTSnNt8QSqkmiBicKFEjFkEToL3LVZdURYSmxY",
  "key7": "3QDjcY5hRY8N9x2rwbkZpySfH9dDd7CNtMBwqKK2NoBV2dxTTgExPs1DSK8EPNompv4idGUnUHrma3rNwXfP3TR4",
  "key8": "iw4VKSaVjfcHbdy5ESap2RYbWTFtCcCoNk4ZQcwTS2UkvJdnGx1c4DKeZ4sf62NMXG4aARRNguVx5FgFbs6TWAF",
  "key9": "3WAguwLFqxPUpdEMKFZHn7SRtxC3HXESXJShRMhJYMR3Zi4hjbAxZp18omqdcB3yQQcxzHGvogo3KuJ698gJjrcg",
  "key10": "3J65ahk9U1ZiogWnM9wwaMfQzz3JhsRs23TYC76ySb4P3D77gAjjcSTkZYHJn9Vb2XPXSuZkaYUQTDZYcCxxCYsA",
  "key11": "5oAYxgco5fF2qAGQ4KXE5TtQagMi1qioAmuqL2hw8Sga4ndjna3qqZfJyRdgZdCe3QTVWW6ciYRbxVChpYoahSrq",
  "key12": "3HBNHgAAWyUSg5Vs1qKzaAVBMM9rowVwG5fCmsfjLAHxk9s9rENt17Ljhw8M6ccMwRqsvzwo528ggpAJ4fEZHwV7",
  "key13": "5e8xjeanT281QHTUtEvgrjbzLVBx4JFmUFeY1siCKxRpyJRgNkLwbZ2s52RBdnoyrBZUZnk59rsuAscHEMDdWQ3o",
  "key14": "5r9yyn2HvMdbbDZiuzFtE6RXERx4Sq5QrC1vy2a2DWmYPVnxN8CwcHWUvr4AWk4t5JtZiebTA8gKEdptK2Q35MN3",
  "key15": "4KXdHuocZEe9mssU1qNfDo92cmXEkkKXvZsGsaoXtSzrYdgvg2Xr6AHCDLLP747uqhadyPTDTDzqE69awG9gJWpj",
  "key16": "6395giK4KXjxbD1iHnudqG65ZaybF8mdgHXztZN8NiDqU22cYez9mGT5u2c9MJ6HHULCP12LceFsfxk2fYwP1EFD",
  "key17": "2DAFh97JFyRMVeXdvPvPDHhtP38hAHBCxiFPMojoibJSU8oDUHueQHCGAhPYFuBKhNdxM7yfdUxEf4ZwRYkqAqZv",
  "key18": "2YnEESuEXWsCPbt5ZtgcZMHDJVwiuv8PiP1a8eUZQz29m1bpiLUKxRqeRb8iCEvpNmAL3CDZ2pjhgvQMYHK8nZPn",
  "key19": "TgyvDqVQVL3vLnCq7idFtPRSjfkXnTULoTLpH7uzMPC7ksunVnWQx3bZtLHzQ7Qq9E6aW95nZDsmZqzCuwQkqQH",
  "key20": "5rLbmzJggSKo46VapNBU6zb8TBkyK3VpZ8Li14u8vwuc2nj2htaEZkWyn96MYZh2CSk2g2HrLZEp6H4AvYD3iprF",
  "key21": "4RSKiQRjxTVQ2UeF5gKDvkL4GZSHYQ5bu81FZKcLa1ndo5PJZnxEhEhr7AhJbYEWGufchc6JGj9DVUuMByxvgG5",
  "key22": "3Rhivpacq3UzarpWUBXzPGVfgASLFs5RBrVAjm7xxCJ9nWNjNvXSYuVKQAyqi2UAK9NZucat25y7oKhBskgaurKc",
  "key23": "5XPtcFjwNWmCvotveNEXbjXESEcNt9homNBNJi2pxe8PRH6czHd1hhrdRWe6ERJv6yitAoDEmpij52TsGJ8AhoNa",
  "key24": "5gP6VfTTY2PhtBnzaBSND7YkYKqbMU9DMxodtnBroE7tfGcL1gPpMXRsG37gDm48ZjUbWLPpoUpXyr72Hqse8EZJ",
  "key25": "5u57PrRbbbrz6fc2Rfqu3c2qM3viGA3KyhMEQDtRpUWoAV4zttxMQdgPzRnr1J4RHUHcPkXdGKqMm4WC9uqPTs6n",
  "key26": "584vR66yzLzbymrKtpYYfM3k1srV2smkJCne6sTm2HJftGYgGGsGeQX2VaoNZzTnd9ijpcJZktEYq7onN9A8rNnM",
  "key27": "2VmboavpbFtzF1M3dKJTGV7f1CmxagVCZJ3U7bhg28gDVyMBMNG58GeZZoAJsYyXUiHgMP1q7ekc3s1gnbMV786q",
  "key28": "3o1WrbQvWgexp5fvCQEjMBeNQV16aisTUwdqxcReDBoeycLdsJNexpTqtQMiNrqSjzXVAg9Yzw1LHd3njjheTWSP",
  "key29": "4gyhxV2YCqGA2mnrbyGThwhAqqGSMhv5EK5Wd5F9nVTqFvZbBFh95BNip2phxqy6895DSZVKdwnQWeBkrcYwaXhw",
  "key30": "5o7FCNWMyBZyELBtjH5pKGiQcSwEyADWuxUs2GhMr6TLXX35XSdVq3FGhqsWPrCDYLphmwEgN4ARvunNfdBgCtAb",
  "key31": "4NnVe3Twd8uNTHL2kor4ocMW3SebTHibf6f8rAy983JXeycjarc77TXLpkJHJLVeWeAP3QKAtYcHJVtaTWEdvMnY",
  "key32": "coFAzXRwvhePZK2nkHwEMXvUTcDpyGN6ZdyoLJW1dJa7qbYiwZ5b8seioRK6ikm4cA5htrqZ1MwaY38u8DqhUco",
  "key33": "5mUUnuWH2VaD3rzcXH2CYafnkFLwcoGUnxnFzsGBzkSd7r7q4dcCnXcN9wbV6MoYVTiDg1ZkFPh4sSm2fZUqemGh",
  "key34": "hZGWTRKZBMq8Qt4G9KKBFettx4fPN63YwCTJVzrZRNutRKgWr9vgRPMjSB3ihdmqQb3AhSNgzSEa3p8Mw8LEYi8",
  "key35": "21vvFRjWUC3gLht83cmgwDJBa4Cr9U5fGddw8NRbDhTJzh7uw3fqk6mC1fvCCWLW6LgY8C44dPF8dc9pMrNj5qh7",
  "key36": "2SV2iQvAbJTtvoVwUdPurT7BDCLqsQLku1xJJjBdifQMMGWW7R6NSnVwyL6rBjsjhwLRvGBaFGzQANJsB7SxA8Eh",
  "key37": "3ZKPUznnGsFyoGmjPATdBtwncgJ7ZxXch7s37QZEpjwYry6jsywFdyEXLJbEE7JfjsvoHxzMQt5hX9K1ePSSXLqH",
  "key38": "5AydVDaB2XDVA1DpNW4NKXkDbsBaEhKp3Rc1MLKrewWoHH9ZXSZrJM6Go38JGA6i13fPoifwbpwyVDqpkHfucz5w",
  "key39": "2ixmPGGdGTdQoCWBRa2Am8GnaWgEbMmyU9Msi61qYqFYxWZbrf6xCDASf8N9JSBr4ckEDX9yXKpcsVF3oLDnERBn"
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
