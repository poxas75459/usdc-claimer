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
    "GS4mRMikoyJZPH6AjTfWeqXHDBKSc5cpFH3hMb7DMAC6kRHqksmpy5VqQDaDaS26gXSg7c16k7ZFLZUp16itpGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r63DqFoAacyJ8PxkTsai29mhZa3vLrBFQLjSymcEq14AgUHcXx2cVPNSthMx9HZLYiMRgiyCQpDPGzkA2Pjr4hq",
  "key1": "4YgkqCo6d2ezSRhRhctbX4uUbWUYjk3t6kkY4nBhDCZDL1muWPZtnthUJjoQ8HdEpcFDzCoqyKKq6HywyfAHdskw",
  "key2": "Qw3e5yHgeqSUrSNKomHTuWDXA3cxrGF9AMmYQbpSURzaK5gNCe7EnhzFViFP2jW6tdFvhFiUPKdyga9A7x9AeTH",
  "key3": "2pPxjotRaCSFSSqnVsNmyYWZZyk1aYroCwT7H3y79QgQBBtCFhRmqeHkadQtpTKzUosJGV4sCtTZjZGXBkJaMkbm",
  "key4": "341PrjiXt2syucA451yyDJrkWMSpNxKoHC1Hbz1qG4KVde3TL1TGBcjae5VuSy6GGzKWXUEfew6DX5QxGsay6isF",
  "key5": "3TEMe5hvVkP9KQ5sQX713B5JWR12GqEZKtVT7yKUoQkQw1GFMg67FqaXMJ4FVVMGG9cvBUWy5ho6Xh24gg57nE28",
  "key6": "5UstCEWU4mZLxamkwGgJHwEmGht5hJaJVT79Lgw9g8omFaGgea774ds3SSVMoXthGXiAWZWma6AbpRZGUDX4AkVP",
  "key7": "4QAQaPJzQ1t1exrm2iikELA45GzfMtbvovmiWipRvFD83qymiE3Akaev8sTjzbsnrffaDo6bEaLVqaNVBnuKBKzV",
  "key8": "XqNyu719pHUBfYj6qJ15ajzx4zij4ETnEoSDeg1ruLxUzSbKbQ6st5MJ8wupYrLVTGMiEAcx8KQ3ExsUMnS5q8v",
  "key9": "knGGy2bQdYw9k97nc5cUJbt2MJMRqvqRTVNquRLESFofTXmz7kfpkS9Rpd84EdueeMKYQ3vV6UyphQVpkd4TviB",
  "key10": "pqZ3p2qkCdD1ahi4Dvg6hqkCi3tGAhc2cZZWw1eDiN5wDz2ZgqmzuL52xUDDAnRTTZP1eyjZAV3f8s9ZGF7RzNn",
  "key11": "4hrkTTDJYJFPDDxSCGbQeUb9AGGjgYRNEQv6TGstaM7ECSLMr8fQbQDTpzpytedWKHPL12crF7TUP1cNCVo2i8WY",
  "key12": "5S1M1hnqZentJJ8aB3DCrsDTpkyFoFx7s6b2nKxnuJqou4yy8ZAXzi9iyPgkbBaLNGoBch2ZDp8KUBtQBDoRppAG",
  "key13": "56ZSDyvPNGLFYPcvVW2ThQEubY8Mj84wdeuH1imyrGub2gwqC7FxAKbaCw52RpdP9N66oKqwMziScs2eviZ2fRhN",
  "key14": "5ZS6gyctvftNwLyZJemKdp6aaZawENS77v3rKc1XC5o8kdAtLA6erZYRLVjsqt71DukF5EWMtacWmZzVKrG9tfX6",
  "key15": "5nGmh8cMNbFoiEFsVwjcTQo7YqrT2zzx8G79tQhRf6VQ3xHM7hoFVFmue1HfY81g3zZzgDaGhDCYoter439QuQKU",
  "key16": "t8i7TjyzjvrxZiGpoPSKpmGPnLbSuipyuJbPWgU83YWgGCoijP7GKjwASqxBXcVVxru3gkS5KoG7nzmrGd3HqJA",
  "key17": "XGEH7sHUj5yzwbZRXkbk43APPNPS6MTGk6pDjBLxmTRSWGRbUtBKyqnt8wQjfgAVx1tHpuhoemBjvWBXrTrjL35",
  "key18": "2HevZaUNhHqcWJdFSdG8JhQn7aZVHkqsKMGZmUFRoMWpBww7UhgV5MQFV6PH2a7LahAwBsTABhQ4HG1Z87P5Yjjt",
  "key19": "vWEKQ2JhK73kbXU5QHHu3HtHGmxUtkA9CFEc7DucPANaYLifXmJY7FbbGqKbX1H2NaHNDSJxHCNNVouLHwMomH4",
  "key20": "3Ziyfx7UnGDfxRMXC8cECtgYHUCXiNqxehKjeuvCXrvhY8wSKXEwazBMzfyjCfuR3iVtWn2swpr2mA2Kn4xvrd13",
  "key21": "4KtMrMRfGi8GbHHdd26R73BKhrs5PLo8x5sDNvKncLGU4h83iGo5vKEctF94TzHn3L13uRFNoxfG7CjzxfxYfVMY",
  "key22": "3WRvmPeQ3hMveDiH6RiH5S1rQ8cjH9fdmAYyMsBaCKBvorzs8f7ojycffrxofR9RK7Mn2dVTH2SsgGJegwsrE5My",
  "key23": "42n92hNRc5ZN2ohAp7aT3TA3epiQc8oydLrrgCsQFkYGuE5GtEaSL6WebaGUWLFsHFSfYNPWT6jUaiTAEXroK2SP",
  "key24": "2gPtbaWRFEf8Vyb4nETm3iuTUvZD4XKEvfbfJ7gG59kBt92ZeaQWLyHoDhHMrveqrWKHm2SaapphwGrrPLZm2hdV",
  "key25": "5V9BzzjiCsM6pWRqv7XLJexL5hBcpEDoKiJFagTCkmSUCUz7wceJFufBjVSmdcP2C641bDUTy2v5fA5TRM3sY2fb",
  "key26": "4dKRwsfjxYdRG6E5ZndLzkXnDCf2fDABLBpR5bJqRi2WLbx3kGRPmwa25jL45YUueNkAFDYb4bJBjGBWGJhMTMUD",
  "key27": "4fb1Vyydo3oCZ8xnoG4AFBvMLvoTMkzyrBSBcySzr3ZoZZm6nrNFDKVFCvySCUXtefDaUsZD6MRTBpPNrW1muP3Y",
  "key28": "4soadsQ9LKN42FMm8g1yq1MdmHPeTskmk9u4iZNQCvZcKjvRvJj4daqdFLzP5mVANNte1Kuq5Uz675iHMvm4rjox",
  "key29": "27oheEad93Jj5Mqpz2E52mtbHkGdKobZ1zJUh16ATXExT7xcueVUZqZGdhC5VDKQWUksuZBzxJ2eTfzQ6BawXBxw"
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
