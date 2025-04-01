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
    "26E1b73kQrn2rUCDz9fzj7u95iPbSfy23XaZDBZe5JSRCnzawjx813dy6QhANFPSkZNhdA2EZ5kHfCLEuV6ZcVwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opyYzECbWiL2xb97zDJV7oHpUQ22aCnw6TF7ZmjRUS6y9hs7jehHCDRVyYn2SrXtDajQeZ59qE1xBa3Y3XvDuK3",
  "key1": "4NqstvX3wJXaGwgowHrH2E35FmapbMWeMTRcNvCNAQgFKy714xRcjiGJPvrYAMEjHWgHZoyWcwYDRFxnso2Yq8T6",
  "key2": "37CHrbVsmaJCyygj7AGTnaufM2YLE8H9jpHfRx6tGEiAWCeQQpP2NQaWAq32CArZzPqZXa6mAzLe7s7CNZ5WxTKr",
  "key3": "JQszHkLeT7ujvxkUjNsLNXX897HLmgHDiPGjdyCnsFceXm8XQoh3nGxjKHxxRa7WZMaUau4LtxJDS8t8tFRrzxV",
  "key4": "ZYv4qVrvx2yBfV91GNYFdBegnUPbaZazTRFcLdExocrVNLK5XpxFgaR9EjUw2H79Ros7hUnaaSJhcUNxBWFCSce",
  "key5": "roqw1m2hJc791bdPSPQLBvQUnHmTevxNcmk2BbE1epXKGJBo7TLbDoZ7M5pTowtqLtetJuMvQZDiWBtYUr76mzF",
  "key6": "34zuM6c76HsytyM4grSSf4m9b6LzKMQ8Y4FZ5XMQh8NS4yhtFFPKwCpbiFoqFAvca2verFAX2uwAdv3gQehFn2xh",
  "key7": "4cpUcZo5ffDDEpUEsZxcTis2rAiiaRmEJnn8R69dKs3F9vTroncBB2gPbM4kW2aNbqSTuBHxr9iiDpyPUvojGs3Y",
  "key8": "5Bm1xcoAXKqAw6ge4B5aHPFsD7PRbaLtd8RXTekk6qLXYJ2fS2QhvedXfcwz9LCyyykb1B6pUmNgycGEPPHQd9Lw",
  "key9": "5Rzau4SNQQ6KNTpBXnusWJQyafX4qtTPZWYBcpSnvrKajnC3NTsnZgBbhqf49a3VjoduEoyn79HCCMfCZkwqoGBV",
  "key10": "3TvskguNckTepXbtxRXo3ErcnK8ymoh2MFAR7gWuzTckzjv1XbhQ5g1a44tt8KgwffxS4aYuDPNk3TdyupiqQdyG",
  "key11": "5iQFr1ghUJxeBe8QdpMXvhGDGxo1tiDwyD4y9A7ja2k7ei4q6dFoG5d2AzyzCcTuJkS9TWUHsZaE5jjMLwBo6kWu",
  "key12": "R6MKH6WJRR6WRx1N3moVR7CEaFt3goRdeN4f2FaYy6yubkXmRjNbfLe3ah3dhKd1UTApuyGkH6qWJ4QhSTgrFqT",
  "key13": "2asjfP26BDiXXAH3oVF1n5Rp8WTtDo5jRDJNc5X6wpJAGMor8GhVriSrzCpcQ9RFEnQ23SpcJGRLCadY9FW3QGAk",
  "key14": "3gSrXgbHVDK2tLAAFa4YAShsB6iRgQbd6AK2TNoNTRHtjvLMPooYufokfKp4c7Dh785M7izZf6uNJAPLjcA5kfwn",
  "key15": "4dn9Xwrd5bAuKtLFiV5TnJU56qb1jzZbtxtbRSKVzjHQmqkf7p2tYvwKDmjT5ZuXEjkxUn4291fdAP7tsKTg8ZWk",
  "key16": "2h7EBgxZ1GoEXohPq1p2wmP9JEa774rEb9onBpofpbqHb8TVjqoT38Ni2E5GEZT1ix9xJPNPq2XRYcjSgxBxbtk",
  "key17": "3VGcwqak5bx2cDWRAfAEBdqvm2gE4EpuRZo1u3MJuo5i9WKzmSjSmEMU2fAVx8LHcN2bGckMeJP4JDVEtc1VJkTy",
  "key18": "3RkVanyDcf4edv8kQbysKKNnGuW4CLDHdaukDj2Su45nmPk9VxGq2hwdwD2tC63oKRFzqaGzcuxGdVYBdCuDVbMb",
  "key19": "3wRdyexgxRXVyERMcR5Lt72Xcm8epKe5Z6UEr5uPifL1jbvvRoHkgivnSCUWHaaxGjbKfTpJRsRET7xTkNHfBiup",
  "key20": "3vNjoJf3PM7ZcZEUXnCJr8mdntA8UeRoZJ1yQdLZSoNBRfQesGoYdTHpmcNehbjXxji4PxEqKLhWYkKFALXEmph4",
  "key21": "hHjGqN3X3HmKBrVBNWCjENXAYxvTouhi8voV981aUhyb2vyZHmhNesPLQQ3ZCbwSh6H5H6fruy3RgDdSd5CMeML",
  "key22": "GpdE2mneHEqt98PwXi9iu1iQQ8mVEw7WcGN53VXaXHwdRp321uttdkLfyDGWBf4dWqaiMF9CM8VpgQhbFbW9jhZ",
  "key23": "3UYWZu2r1TTXP1x7SCYmnH5tMfdRjrN7kSGtExq5QikYCtmATbD37mnaiz2Fjnik8gkV7UiwYFop4YuCtPSbEagY",
  "key24": "41naobTA4Jof6rvtzXnk2iqXMcJrwGNfCi82uTmrgjBCALkPyZwcDConELnSGgy1uDEZS1tp5oaQi7QksqAU8xRb",
  "key25": "64fNXAETpA2uy8soPu7UZwMDmzcrjC3LAgZFpLhEHQPBwH79WHWKTedjbhpaDsh4bVCKzh1zA3kr1SJ2ENoJ3k5S",
  "key26": "3xoKYdCnNFNokn2ghqxFwhNMMgt97ZHDUvbY5FR5scnme5d4BLXGVkqtUfMga1ptEHguyoyWkqiym2C1rW6C1vKk",
  "key27": "5DF55WD6hpSfumYNy8RT5ELqTEHcx2P7vhLKCPWV3SoksumYoUHoi75w4S4JQRGmpb9VTAcohQFydh6T36Em7MZN",
  "key28": "4MaCcnLgQnJLSKJr3jAwdVNnKYXN95R53zmvxGYeZqaJzHFuMdm9TSwDNHD6X2VneBzKdsm2pBK9bMqw9pVytu2h",
  "key29": "66eif91sLxyvmA9qH5praf5iAuV13WKAw8CsKmUFfQtveVpKFzJH15f3aVpZpyEqSQXN8xYYvtHqfst3UyzswnAm",
  "key30": "66iCqEEA8aCM4oXQcUSUKcov8uFq1GHPtQwfgguBrQ564imLKvfqNXjyBauSNtHYwRtiL82EU82YMiFMcozv3bye",
  "key31": "61taLtWRCiwdF4nziDu7pLu2pfH8VPLd4Ck6Uj5cChYwWpJo8wpDa77HQ8a1TFWuPaPBBJcMRuxoT6HAZE3UoCXt",
  "key32": "3gfRRkssWW7w6jVDHze2EzPHGergai7UCnYVEumfFLL8HhkPgsEr8LjT2Lj2aZWTHS8DzwEcjFAfZqNxPcNTT64c"
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
