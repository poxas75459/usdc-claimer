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
    "5Cwm7dsERaSFKiSVX1J3ASrZDisLGdfisL4kndriLnRuLHEXZjDcpPUQSQNCCGMsskBpiPXQYWyDY8MBQxQm94iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N22wwzJ2XnYQT6A7rLZXXKUNsfgnnukP9RWYWwS9MmcPw5iezcgjebVQd9HzpxuJDtre3ZaroCz9dyMsiX5fDUQ",
  "key1": "3QhkS5PFWGerWbrXRqUABU7Yj12TxRrvDXtUYYP9H69fisni1ThovXBxHh3jZVf6yeFqm6vV44jkapsAgb4umaGG",
  "key2": "4tJrux2H62BYcj32CZJSDnMZUuV8c4GsPeY9nGY166w3wBaWtdUxnDt18Fh4AEGXn9z4cDEyTp42pP1JagZRHi8e",
  "key3": "a7Sn3ssUCUUpVjLzYALwVRqdqA3iF6eS843dyqrhnz2NU8VAUJh4jg2rAgHqqiupMK1k2WeULCT7jxHL6QTKJ4J",
  "key4": "3B5bpwwY2RrmmfVzvkekiPTWakuFmoH1UeptHXCECaFhyo51zvEB4NbbhbNmMTwBSqxpjmKZPJwuqEuNHR9gsrUn",
  "key5": "6onBHVatX8SJ7BkX8BGTAMEtBxyXz29FNrCpfMiiPSMEQ97GRVPc55JVLFEiTt5Nuuo1V2rzibtuLCTqAogunvZ",
  "key6": "3VonNxWtXpi8yEmSqtCdHKX8Da4yNWUz95Yubtg7bzG8C2bz9VDZ3g3Mq2fZJKXXe8abaL2HCPA8vdtKLh7cpBhA",
  "key7": "25F3jYLi1pVG4zgTNKbgqs9UakasMd43DHbNHqkLifrdmrBfGaWEpamh896rcfbhuQcTBYx9gLcsJEKTvpPWquxm",
  "key8": "44UiWQRESjZ3r7ag2SY36WxCqi3jKo8uoBzeSeeC3cf6napG3grxmAeVejiKXvUtTZB5F5F7o1mtpPBEV9ATTBPU",
  "key9": "4qFgXbRortdf8h9JVHS3sriV5DZG687kFNNVR9XrBKMEQhRmJZTNKxRekkUBwSJinfMVSZKuxxUbdPcoiCcfPqe4",
  "key10": "4s5HPnaP4dM7jt1QLnEQ3uKanMZKuAoU9CEqVbKryqya3hBCntuQwZFG6nhSYjy7tv1q2kQcz96P5XzKBSUvx8ee",
  "key11": "5cRYximVMtUn9CZJG2xogk3ytADcTSPjJnkYApUUa1Q6dpYRNrJgftFoBLSx92tqePHHhuL89LDkQb9FXFT412Dk",
  "key12": "tfbsdZq2SyMWyDp2oNVhcgcjRxauKcqR2pujbvBFWqdFw5XQqMhx8WQNbqVg6g183ZXXcJVpVwzebXcyotTsbmu",
  "key13": "3jfE6FKUhPBebNJh3NMUT7bG3QQRkxn1vPGDbEAMkUUHhxK2bMKquvKt5srLJrxBMp7gSPcXyzi7BAK6KyPxHv9M",
  "key14": "2oCZ7H6jQ3ThPzhEZaMNNfKreHpNto1HDrarYHWg15apqywrQ1HXfu3k23hFGbDkDRgndjahe9cdiAYP7wdP5Dxs",
  "key15": "5bz7RHqxujePTUtTiRyALdDCvHDH4U6TpSyj3rqCZTBkmwyFwrJcWJeqoeW35iDEBQfQJgcLvKcQcJRCP5hVebAg",
  "key16": "47TNdHXrVp5ZZWZKch9vrEptaRWuNY8tp7PTKc3jRXAAvUhGNdsxbdFRuhKTcdXQy1hE3qzx7wT6XPhZFnye993M",
  "key17": "4U7AczqHV5hpKYxHGUofoqKZaUQQ7sUK6N4Hv2UJUi681UCUWRbS4tkYBhe4wakDH2AfWtfNUSJrhaEUMPrqgGn",
  "key18": "28hmAFDozXVd36N75MKGnKCqwpLEnSE2ujYVeMNQMCPufL3jFvRbupZooDyW3mcXYaCYFmDdxYeFp7iG82V4zmFE",
  "key19": "23DxVuc5vvLDCa9dPqf4kHwqqaNpX5Nn6W3oUi86Thy2JRYjfhE98VuECmqUMvtRHMogSxgy6knN3DMNkdqB9rje",
  "key20": "2WgMQA4821mYX4kzH2x6wKihYoSe6FLEK38jAd7UXK1EVP8FSPRDJnoE1xAF2dVG2qkxXNA6BKAcLQANCym92tzZ",
  "key21": "2VXYSZKXzYmfqVEBtZ6NyZJJi6do7djCrmrmn7hmR11zJB3PyqfzPDHayUuHG8zVsihY9x6feQ9TM9UqvsTtGJXX",
  "key22": "4dmC4tnJMP87ZZ1KpVTc5nm9yVrGKbMxv7CHTokigoJJRaJDA6pjUzFKmYoMvWeZGfd4Qrh6suMnhmkmkCSC9D7H",
  "key23": "3KtQK5RswgFNdpuuBt1UhJSqHxyqqoWou9bh7fKAxdjDDHjjak1WLwJ8Lr2iHY2jfXBWLBVggAfqJQ7yJWhFBrAA",
  "key24": "Jp3UEkXSWYVCSTVqdbGkcGjr55NmZpGcaJJbwgsJuCaHFQ921BfoS6w4pe9AM7gPyX3y7tm99Hqw67JVQY48gHY",
  "key25": "49yh4UnBmD9AMK22m3RDspQZc51KUBtha1qtaP7igJRmyHF3G14T2DKBGANE5TU6z9XewdwB9gwoQULaqQvuZRHF",
  "key26": "2Gx8q9FaQfoPbEojjBtKVNszKW2tyi2ftgMkpdNPB5ox2F7hR56ArS445fa7WANmoYGNtxNUHRvtorWj887fgoVG",
  "key27": "3JffQBr1c19ydVe7XppWinaLAuCq8mxqn1vLZtjRuD298CGuWe69v6CyDs92Lc3hjWywSjjh2mR8VvzQCFaySbQj",
  "key28": "38nXXo5bBRzx36SHNhhZNioJnpfpBptSN5tqdtFe3oxYX4TrTobJkdGCFguoTPbCtHbkEVxKVreL1Pe73hL8Km41",
  "key29": "5eKBvjaVfSb9BYctQkv8xYSZzfRTDLDTLU2tA9xNPXXGoSmJ9w8y67ryR6qvt1YuNj3PTn9Km2pZ9tCQEP7Yzjup",
  "key30": "3pPSbErAuKj4mqDLXWfBCJ5o545JDCuQqJGF4xVHyqefmsiDtmGYxajALd3iYxWzsRMT8gHP3rVvzZpsRFM8TRoY",
  "key31": "4Ag7deeDupk4g4ppxrgiN5b6ZSUvro1kJDddAC5HrDTwmXRhSaraFHMWUhzmjg4AVg8WutcSYRQRJsQBK3D6h4Pq",
  "key32": "4EN5MYL7MFg9fAeDDrAybm3LRM9TrGqL57j2oHGC8pfM9xHsd5GT3Kdsjfq2P27tRU5aDwKWreoHMeryKMNvc4Ze"
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
