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
    "4fisH9zubpfScrz5Q67D8tBA6gwDxuCSCt3bmQecoRAi4oCwpiD94dHm5b2NRcHzrjmzQAG3uvLDj5VhRYvCnvPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ak3VciDVNbaqmaYph1jHE4myBoK8LS7ZLEfouu5MYmXr1wbsUVMZ9WewJrCHzxpDT7g3tknFWjHRSp29e4hAvt",
  "key1": "3g3LsRQACfA1bcgLag14hN81fqaesygay4apvyvdxUdyrgBPCsHVzAES3KTDBam6vN73M9tXAYoumZeQKwXqRhUF",
  "key2": "53N8Cti6E76q6ahXQg79MYe8sUDxUjZZn3m4pqJCLEuweUubCxsSSWhk241tsqkLZUB5ommiNDjXPKjHW8yntc2y",
  "key3": "2FGJ6mdEnt275cnrDR3ZDzdze7FTck6QQtwVBzeTECvQzSrP7hb3qh8e2LQo2G5E7h3HmGQEc4eMi5Y8dxio5X6N",
  "key4": "fcvxEzUj3jXFWSvz7Lr5jsbhx3CsDJXDsHAEgRmQQRw8hLUMC7fP3fHTtRoxfU6FmBigkMzxnQ1JJ3PoEnMBKNC",
  "key5": "5xjX5dASp5dVrpWviUPUkC77rnrohfAFSfgCR3oZ2GpG81Rs7Ed3md83MNVcmajCYGKhBLo3Wbw8i5DrzQg8jnAw",
  "key6": "4u4xgxbhtQtNkAmUDa8WcF22TRueQhqgx85KfL7d178KEjANRYZUJAWXwuJjVYvCpBaZraGppi3iyYcrTN8YspL3",
  "key7": "CWEwrJKdhi7XZ1V8CS6MRzGg52KoGiR1ZHgiaZbZc8B6YUgmxXgeRN2b5VGCyvPBsafwufscXRBtHEQHUW9iZHX",
  "key8": "5uoGoPMmKTmMJZY568aTXg9yvffB67MC5AxzNxCtaZUKXFN1Tf4y8aizXHjmjeqdYB9QDqTs7q4LqZuD3rjgpZtn",
  "key9": "mTKqpk7MU1jXiDGETncaEEnUoBokgJ7WXRJY6NEU8rX3atvjqaZtc3d43y7W7TECrhVMcQKsw1YLkJAw2dSdpFy",
  "key10": "2T77neCidgzUcUJJgZ38Mk8uTfoJHjKP9Ea51e6gownjdnzcKyPVFYW6PEH2hYAH14VbrmsDCekYmMpEMjMavPS1",
  "key11": "22iftjGioVGKTnDNiP3PPu77dUQAZ3frhPLB7v1CaqjQpjAd4uYrYV867NPnaMvc3zrp9EoufSRs2DenJSszwzWV",
  "key12": "2JNbGszpwRkmaBtDom6Gu7TdWj2NwP9Kn8icJ5E5aBpXweLuLi3Htms7ieWJ4K7sPEDgZTYqrAVkX5dYdcUAQHGE",
  "key13": "yk3aTJM2jdMJenpV2VENoqC2Hhr3ZP1GgYpXKxCqpv2nV4HuttSypugNjGqj5hALsCLDGyoMU3ntJixarx8LsY6",
  "key14": "3LjXwVD35RVZKxnemSmMgJGVj8DErnGCbqnDSbxvZYXsPRSCXkTju6QYSqn61CwJA2vem3QMcwLBEXBuDhxNeWz3",
  "key15": "4JimSKBoaRazaaJSD7j2hgvVpBUHh5Xs6mh21RDNvtPaeHuR4idZPs4Uekxsor1fvbPPnuxu8FZPUii9WM3Dewc5",
  "key16": "2EnHSckYLYFYP1h5hCwWThpgW8qrVDSccERp8JeGoW3mhn9KPiDbTuhvHy3HcCcJqG2joGFihhJddQQbyZ7NgEvc",
  "key17": "4ZWLBBk7PEMM94TjEmQ91hZkTupgJswYPz5gsMBSbYLwUZxLYJFk1Sq3FaRLJjpFXLyQAix8aGFmP1BnVKoD7MNn",
  "key18": "5uULrBHHaZXvqaLioknyhqn5NaEGwv5ir2FrxFV2kwoFYQy6pfmhc2L2d1zk2G8iYTTRrT1R9rLjMq8m5C88YWnc",
  "key19": "3agiySdGJoMSWgjSWGgTixVQsUR2RnNfdSvgiVwpEZhhd2ssb5rxeaP52JQf7dtyYsiKSFZCZyRp5HdZKTsFnz5y",
  "key20": "5u2nK47reepKVL1Dk16tLdCaShFUFgFPtbhbw8aQYBMNSbnZSQMSfAnDjfFoRbEej4u7dZ6gbPmyr99GwbVnsggJ",
  "key21": "3Fe1mdxadqFZ7hvum4777Erf6c6EH26SqDtyMCHs8KaEbXiPRVMc3iWY9YdDrTkZ3XQHhWsWQGANycb85CoNZqoz",
  "key22": "66RJKZ554YS5VczG5Nnix81xscUtKBN6Jf3n83nuAkznoGF92A6H3RZRLZDbA1ErTS3pcEB8Atypo8kCvekQ62WR",
  "key23": "46D9ptsU7aEHXXQZW9NvEwdC9fRpuGn9hSxpVB6MJLES2dFU3FhKuRD8U61FRPYb7LhhkwADVpJG1ZRRQJCaDiGy",
  "key24": "31VkVsGXoqdYDtCM5ZGgyTfd3oPhfDYMGGyvR9RHeaqZSHRNpgCTgtgrdYkiCe6jyYa8iJ4kKBASo5kLo66jhkZj",
  "key25": "364pq2ZBDZMY2BR4kvGLgGD7NVuQsLKJDuJVfa1kiHqtyvA2a6bqGswZSgm54zNbyoKdf5F4ZrBHkuap6CVsWGZS",
  "key26": "4iiPfWmCfMTaeiv8xfUoZZNkUcMSgARfGFhF2Q2qhaxndAaRXhWxAfNiX6FomJ63NX3vNdASLBDhE7wnyaet4PAZ",
  "key27": "3jMnLTNCi7bs4AtKZnJXK64FCSsdkBnWdSHycAQozDZhj1WNfBFMnidLqmDm45UUgKtjaLiUYrkDMcAaEBHYovvd",
  "key28": "5uis3ZCtua8pFSUxb6xBFdB7CusrxvgN5boHMEdpWaKBvxpVCgTCrmHjMraHaPBVCtWvmdgfagPpJrPntzwJngMX",
  "key29": "5iDNUaD42USeEkp1Vhox3dTUMKheV3GCvqkyoj1iLjkecLJ6avZ48i7BumLYtfd5f1TKaN6WrjbpnHfpcJYrojXm",
  "key30": "4uBTBfPxCsyUesaKAwquomFirUYFJxtfVTco34LZWqiWKXFGS4x6qtJdo7DxDmvd5AgsNYSot8TpTYofTEtTfJwi",
  "key31": "3AT7wXVsqZhQ3TEZpDvQsjaYFuL36faJiBLXYvfu6dEgYn7ZK3Uk6QzrwYGVte7B8evYDWvULHN5XaPyywn8TJ53",
  "key32": "5taDm2v9b2sUDbwYi8iWBMPtVzXnEa1dnW1iDxC4SNWgFhUpgnfDxDW8a9j17pPwvc5syaXCe75zSijtJgJqVwMT",
  "key33": "t5sQ2RKugUpNVBpou8pdt7VLSET92zSwBuZDg4EZRpxYwejatdHTWF1iVLgX6j1pbtvr4MCuUdL7vRPKxYePfkw"
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
