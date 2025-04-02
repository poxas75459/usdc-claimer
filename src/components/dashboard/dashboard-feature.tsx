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
    "47M5goPjTP7ZQzvs6FexujqV5hB1TowYrdar5L69u19TsBhx1nYKbNFGhmp2inzwb5c1qTw6rth5RXHSYETGpMUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GuCdWuRtnkfhpr3bDPC1xxa6mxc41VXjvmMptMkV1GecVAv882Wrp8YBXmiXAF1ybAt6FR5QvZaRxqvXMX9twV",
  "key1": "5mXTCgrHczuTFsMXjvbaSXBGvR13RVRpBq9DSoU65CKLNyv4wbWR2aEbiEkmegwgMt3mLkAA69QaFSffQPYvE1Nc",
  "key2": "4YLa5LbuHa4UWPd7c26uDPexL4K7RNuQmcaV9YRvmo1VmMHeooQNFiA4V1CXxHSNkDs4SQX4Mqq7Gb8dx8EXXdiY",
  "key3": "3ZRHwLTyiRtXESHAvKs5VevekW3qjmqaMz5suukRKBwkzMUcgiiUgULY3CZ5VwLKoSBatx6cXoqc9jQ7e7oAv54C",
  "key4": "2S8zTKcjrX62hVRRbsw4cjoZejZ6Qs33DwK3pFsMdALskWkiyTjjXuVzqmQdTkkBuBLbdLnU13B9hxvJzL9MCVxC",
  "key5": "66n42tioDRHXFNVtZ6v7UdPKsDyJhsdgGPEkadCWGZMXSkz99T9QreVAYbA5pZqmPMhiRzniLciVumCu9b2V86fL",
  "key6": "4tVYu1xkT193zDRPuWnE6BUr9E8SYg4exUUBrCLFwNNKHsqMBtvPkAkNTJtpqgrZrDu1pZo71oPMLgB8me1MYmZq",
  "key7": "4WnVKK7STRn9NQ2WTwDijbr7FLEqntH5s8gpxo9gbMLnCa5evkMH72mpeeqpkNcfPyrReuuPKjwY4ngmaRTAjbCu",
  "key8": "WwbfpvBf2ZxvvvszNDJW527h6zPD3HL69JdchC3BipjpHmRNWM1XcifGDT7DwnMrW4tyVmYjXt5YkBvxEdJqnwL",
  "key9": "4FkRzVr5gs8dQfGzx3gnE5Az9JrLv5UGPVZ1dpyP2F9yCgow5Ao82CGoW8aVdZe7PCLFPsTwXWGGTMGd4f9LtFLs",
  "key10": "dLGhu7QqBxPREeYWQne6sr66ebgpsPW7WQjwnDPua1Wbu4KtRSpW8y9UCytaGUGvnSAhBZPQoikmnceQGAnrkgK",
  "key11": "4Q7BuheNLPY8pDtexj1EDbuQnaDJKhvyATiDQQiUHQHJ7iZe8edhnkRn5iQugzCqu8VuowociWdJJL9r14xdRPAF",
  "key12": "31LbMPFfr5zzXGm9kbRGTJcsW6EJ85WL5PNxsc9r9YVGGKcX1P2Xn59T41Ds4fmbiLnFpEB8fQoeBLajkwTNgWgK",
  "key13": "3DtmHGxvr8acgbCq1foEhp3PXSpoSRLLj2hXJcrQc7F2vcnTaHRxWEpYvvGUFFkPtgLFfmUUU5gMxmnD1o58VGAh",
  "key14": "2yMvp3yGNpf6L4azxP7reN8JBowe485mPrX1ft3Fj28wgACtBcHY3EfVXbNesqFBwVXVbFs6ECR25HU7d24zYeu9",
  "key15": "5NFjHBihmC5rww2HfzmkCuk7BoihTZXEDoEU4rSFifuELdUbsuDjMPUwDreoGntsH2rsxVPFZgbmr5j8TGcqvpGw",
  "key16": "3dqPaxA1AfWy7negPxTsJyGyGeHYA3Cr9Esxw1drZEVuPyHHJ2Z9tVuC1bQuGB6ZLcpf8f3QNB4kz2zU5FWNUSjp",
  "key17": "5fS2y37cxdHCrKssiQbkGmzbx2owCzF8jXrtXaDRsCa2WSFZFXcFAhi6JR2WCwuXspioZS8gWW35kLRtF4spipj4",
  "key18": "2J5WDrQf3buUPKM25kYZESs11BJJXcm5xZFnkY9VZnWatoJtfzaNx5SThFLj3xRsVZNTpPXWai3mY1VSYBqvtGQL",
  "key19": "kyJbndtd16j6hquYuzTLQQJMRNDSXDgvTvmrUqcdqHUMnRRX4fKVGVo5zu27WU4A1vVadKjhZd5NspNuj7WSShn",
  "key20": "3biTMNdbaoGGZ8RgBF2NmsvBEYiE8xQfE1XYpjeA3zvSvnYhVv4QkE9xzhtVjZwTmUKbx47ENPHrvsgBynLVE8Et",
  "key21": "ScojtzRrCrnE222ecDKWrC4pUcL5JSmFW3CigXVJmL55vmhFGuVJJBcZErBkJiBFuH7vKf1yLnGEq88mxzoErmv",
  "key22": "4u95iuf1hhVbKPXZiV2pLM1yCYe3W5nMyAFtJGSFuuEWrc4rkVGRP2yJa5czeDH78DNnTQoDJALCd8pMpgDQC8Zx",
  "key23": "3daQLvkWLPRg7Thoszn93jDJvkGi9foxbD6kKk1CpDceu4C3kDxMH6C52gJet7s1aXMFNKWmaFdBHGrym4L9mJCQ",
  "key24": "4SsmeW873zA4WyzkEMbEGZ3BTsbUnB6f18mZKgE4RQ29fEPrFCHU6MfYtCfjaht53pxpeKuuyyGvQ2NpFhQrLZyk",
  "key25": "3yypJwDhM5k4dYjLpeqDvNiE3v6sdeXtSfQ1Saz4YvRYYqrdnX3JnUWVzpxofaY3WYjQ6EbdPf3YGwwVtxBXjvG1",
  "key26": "3RiVeBEguN5fK4gGEHKDuvBmh5zJtPZ6N9MUQZaAjDkyRHke6EgB3rhYJemGSrwuVbtL8UTLpPGesMqH1xRJyh92",
  "key27": "59oXBXYdAXyXA7tctyK7rgZhuNMWBoMihghesgLW1BVQBZJ4kutsrdaoJnmWk3N8MiVWZi9VGFyhuKvPiBBvBJbT"
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
