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
    "42PvxdJUP6hyvhfg2mP41fwkmnxrrm4mkWGw1Uhax6SuC3ML4CLaPHsjshsEZxtEE8zuH92d8VR4Enb4feNJs1Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juFqcZSZYHGXLams4jtm1SGkojSkgK5mLgM5M7kSHAqppriiLdK9zncont2oSD4eZ9FoAxHnVpvr121Lw3jWA42",
  "key1": "5uiUgqTUJbKJGA5EnEuQEvy7AsA1GDXztUrxdxR5smKmWhwYtq141GoEzxjbepMVufiWij8kPjYb2CtjJWGu8VvC",
  "key2": "2FSHMdvz3exKtUk44yb56bD9VRhqEBQrydwN9UvG5SeAKxf8jtVV7Z7cirhyJewm4DJHXuHjUsYxPHioLG5dYjjv",
  "key3": "2nb5nA1FWJYNw9otyzstDFR19btwW5rG81bjt2UWdp1xUZx7XPtJLsqG14y6iiDVhMg9fpLAzhazgHeLpttm8NE8",
  "key4": "2pY6ZBTyg4njfZZjmRTdNewepDcCDjWLRTwre96AtZNvWR4USCCwmkDn9cG1ZMkZqQ8M3ZGQuuBA7jhMyJAs1Xaj",
  "key5": "2mqgj5dtsvBTkNCN3zYq5AE5thpzEw2yKaJURMe8jzPJmypregYiHv5wULW53guCQ84vmrm8sHwi7ABbhVboYdTV",
  "key6": "5hUDG2bSJNuaqDT1qAk6YjCNJj3mFAsNGX5v8p9bKRhm7UviXa6BaZL15Qoobamkr1v1DRiJo8beHZnDijs1mwo1",
  "key7": "2tqGf2fhPDgWKTuiVBvzkMhHtce3U7QNWUdarFpkN7CfrF6UdnM3qnvhbSUv3PbMkF8HfPT41A2BBiNKBcvyKP35",
  "key8": "3g4KGM7Mu4c3sAmFziMLJVSWvE7uLkqi7cjrZyL2aENSvugchMeoZzt5vzyLNcvFeBh3VamSJrJUrYJ8LYBMFVDQ",
  "key9": "2gePDwZVZ5aE5ba29UtvfxccdSZxnDvz7eeymKsUk9NkUuTUr3TS6dny6YmcJpPFUhPdHtkLonZQjpwwjG944FqQ",
  "key10": "AAF7xT1rYuyPSU58oEpiUri6javfRqmCj9ytxgQhe55jw877yBCkG3mcxTHwntH2HjimPmPWHdzrHJGeiN5bxNB",
  "key11": "3M27XYbM5cmMozwyPFaLx2F9SzTeB7exiGZnVGNKPcB4ReXGcVX2AC9tH7Lxe3VrFE2Jp1haV3cunbvcxEEN8jRz",
  "key12": "4qbfDWmi1aCptuJSRXhpGVRCyikGgPUNGT1NZSQB2LZpk26HD2CKAwxGnuZJNGRSmSwcr9RTSZ2yE2GA86ouhhdJ",
  "key13": "3kmkgwY4gRFSkNfSCSjXyBVcW56sTd62nif88pNbD1g17sKuxBMMKs1UngypZGJPn6XZjTjMEEZfA8P1iTdBeao",
  "key14": "2R8XiXFdoXX1g85YZTB9MbqVXRWSco69fsnDAC6TQBt7zPDNmGsuSbcUNNzKyJ2ZfAJmxAbu7K6KEPsQtyscuvPg",
  "key15": "5vXRNsmNBVdNiiyMrrsGjHj2hfc4jMquyahaEMyiHfXPRatVcga62Zc7GQvL7Kj29dxRb8SHRsfY4g16fEdcwjGX",
  "key16": "8Zy9jmiS5Hh8dTUycneFGKQrQrfzDZ36AhLsHAbwrAVL75CMgT4Q7b3Cor1RBmhFpEiKBYopGB1ovtBQ2NcHKtM",
  "key17": "nSPpGRLafi6Skw6zQthNr4nXcjuuNbQRsa6TJi1cCTRRPuTq5cekVw5nmmiHiCJDAoHVNR8YQPRERctwTdoGFH4",
  "key18": "3qo4g2oeiQGEdQ7QNNqnaovkjsL8hNYJxoPe2REW7ftcYTC5PvUs4DnUCM4u9TbhS6zYAMf1gpTqLpBcXuWc37aP",
  "key19": "4DfhyeVeznUhEdz9Rr2jtugWsNtnCXDqAqRrq4crcR1S9Xum8zUBc65zyyzfMQkhk2Tebv6LFEXEugoKHwEpKcNA",
  "key20": "4ZxmgwR7NyS9R1wNJmeEGfUXpDiLzKnKR2zjdnwGqdbMeVf233C6dMtzm5Lcg19S1j8sBZ5rBap7vknf2QXDWAQH",
  "key21": "4m7SiXkNEZFM6PEx2NDgQM16esgGxvQzg5V3xbkeFYkwt7c2cusKSkPndEwqinwsksg3Q8mqymWEUQ9wn9EV8jqE",
  "key22": "2xtCRrry8BioXaJKibJDa8da4w77xMqxm56fmhgkoHdgANg4phPwUr3e7dzvawyTfV9AYJ5GWpfwEiLvpTyfrGmq",
  "key23": "2nU43jyB3CZ1VNb7pf2CBgtA7uXmjwS8JwkNWiA3oa9ZCYma6chj8im1JhsLpyyLVw3wVdrAvgQtwTDTpY79GH1N",
  "key24": "2rP2ZxHJsNZDPFwGfnz5gDQphsxGxfAeYEDZCXKSM4VwAxzz4thDNzCxf5nLcxQwaQHriTABr3R7r8gfEyoafx7i",
  "key25": "4iNZNqiadzmorHcxwYUdmMFEJGbtwbVFcQAydjcHMejvvYdsdKL4r41RJUmRoj4ZRsvC1SVwN9uMd761pJ1NzJAK",
  "key26": "5nq15riv3UpV6pPr3pxpu6ASVhUuc8o7zRDvH7F25bPzgFfHRnVUFjMQfCB5jV7RfAGXktRsjkuKeXj377WYfLDB",
  "key27": "3DKMD8dU9ytpQsy6oxiYfsEkbYn7dg7s9bR85vN5EkdHga2HoHxHpYBTYKzQeMqGEeHLipFqp889Z9Aqr9Sgr7j3",
  "key28": "FTRzuGJ8VZVcGqWXJ4EeEcDQmJPtbN2rauwLbA6k3KEZmTe7irettZbSBLYgceQW14Qr7ZkKxZysdTibXS2HGbo",
  "key29": "2PrE9j3ECRffhxNGL2Cg2w32WfXTxMXje5AJ2aWC2hj7gRqBBjCSBw95WoRiMLWFEiWqX4WC59f6YXhTEJLauyPw",
  "key30": "46hzA28Cq3H8kVMv7ngUGjuAN9q2ioycFxUqMT7NTRXz19FwUfwKehPb5aM1gyuNHK2sTeWL7m1k1Nws1Ngmw6Dh",
  "key31": "27LYVtM4Mkej9sDKe5yEQQDR6XvM8i4Pdresin9fG218BUovmNZCDheRbGDnuq8utgn6NNFGFeSggQGFRdhGpZSA",
  "key32": "4YQhbWrGfCXgpeZo2f7DG6Ah3hkieAbzeUwVbZ2J3rUHL4gBUCBYGuoHJVmhrXAopdL6174dgU7X3KoSLjiSjha8",
  "key33": "4bR7xRyTnfBHp6p9uhSEMfQtETPWwSNyRyUCdnKnqLBmjJvdqa9fjgLF3HfsmFoLiiJ3iPvWATaE2VpXFtZZ3eCt",
  "key34": "5WZFcrK2fJruzrDcg2eGHJ9U5FwkqvSGPptvZxL6ZrDgVTTxHDuWHFL2cDoLkBUHjTZMCaXYdEDUt28Pemfsmzzj",
  "key35": "hwD9Yrc5ozUyY8YeW6nrR6EkiRapLGj4ELdxdkVmztb3nBVRNRfUidV5jVYrkQGsAU7t79EqWh5ZqzUY3yrRq4C",
  "key36": "MCKvHQRpeXGSu4WDZvw6RwKHFCYqvFzGW2eqhtSu5kcJdN1VdgeETiNPHh2t5N6miwGCJUXyWag5Y2jyPxbEkET",
  "key37": "3b93VKP4ky3hcUBKdZgtKE4PHUSPYdw3xWtzc3jhEpeTrV5CK9MbkYuCZ3iz68DSk6pnarqKNV5avMCKUMxd6mWt",
  "key38": "DfPMKP9HV3hiv8Aisi6buDN687h3wLtztHCpLL2wXBzLwxTxtvEgQuf6ZLVYA2QNRjwaBVVitcx9N76jo68JvoA",
  "key39": "28tMaAsxALNbVxjDiwTcjFD8HhqwRpM8rmso6J4oEjVWzaF1ngLL4okZ5X5aAijeNv1fXanGW2X1oV6dfG2L81jC",
  "key40": "JgxUDN2b133eyGCjqhJANBuh43tNXkSnsGT8u5gYnqwBzuMZufQAMvFj95vv23DA5hmc4Bsp5wJtnY1xRFYWPt9",
  "key41": "3bqQczrFnMrMoM89y5neFqeCDjTkCtxXkuPjzTqtS6vLQ32s6T8qMBPWUYGjDbuwu9V5R4oQGckvagvDnh6kFjzW",
  "key42": "5G8YxrUv4bWe7g7UQrHUN3hiCsHr9Mf4unS7VE6xt12XnXAmUHETuaqhhjMasXHFKo9s2Jz7N7XtHaiwS13Ewzgi",
  "key43": "4k1qNXUFj6gAbGJSWkLiUdnqrSAoopy6n1wxRj3rDEZ21g7twtJaP4ZD6pVLPDP2GgJZiccmRnWerkfoJoz9G4E1",
  "key44": "5fpVqVZ5SxgcCYHb5fyESyoV1VkAncjtyGi35N1wwDBVc9XFy7aGq1eVG4yAnHxxqCoSnXzbTd8192mwDQgrVjRx",
  "key45": "3VS4YZFU8Ye55ygZWx9GsFjpWXCvPjt6DKuFWdKck91V4doiR58jYWm9PRZq2fihvFuLtQiZrCBWztF6FtfEVDMz"
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
