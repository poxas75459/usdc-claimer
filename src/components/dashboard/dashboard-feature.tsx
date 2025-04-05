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
    "GWvhLTQKUimem3DHSuWLtUahpJFBxt89jZF3JesGnqhPCUBE1dhTXGp4w1PaMtntCq3vhbJbSMveLRGeh1eZMT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQqzMyCfupouLamKVffWhqMfbfbNpArgZQopGFsBJSrQjrxL2S5WyrnDt1JdznMcLarQ76cchrbjHVcKNbahuer",
  "key1": "4Hw19pBVFqQTSqCsBkEu7HphQ76pLkFjidJ9r6XTy3bdQRVrkLGL8aMPY79wL7aecXgtAXZs7fBZHEKUHYVSRYxT",
  "key2": "3drGB4W7NesmasibLfcELa5dBR5DSG3iZscy6vT6hQzQS76vHcAyxM5FMY1wFXV6DRdKGsu6bDJsiKsvHeug45xB",
  "key3": "2JAg7WWmhQ1C6KABFHZyp5UQBwtJSLdPQ5kHkZUe2w8BGrq3wp18A9btKsVF6CxQVZd2Ap2yNLzKZu13FXxq9XUP",
  "key4": "Am9foeaAHBmJp86mE7vHYM27puYMrWjsq9uGwvpFvuiAd1ijYKPtkXwv1HiGCZ6CRDuUkdRVYQC8G7SMTDwfuS7",
  "key5": "5fnxz19gCkBzh78Z1K1NcMbqHMyCcHmRqJ4ofeeS1HTktjGatidDVsvatCP1uxTtze3DQEb8u6Zbpd6cBpqwCBZs",
  "key6": "5JGq1dup1eo2Ld2i5B4TWVXjTYPCGF8dTubRAVkzTDbZQ9hJ9dNV3jsoVw5dLNPWAx1a2XUjoQDyNCtfzTsYTtRk",
  "key7": "5sBmrPDbbdKtXk7mAdAnwidMPiMNtr1dYeMUimTA7BjVrJTAc9ai3EeeDy6PrcyxqKxJA33cHheLuECXJmE4X7cT",
  "key8": "3YyXqUvgsuEj6v6Bmgxyy4NBCPhiWrR21EinKzFv3Nw2hkPHedbuNZ89H1ipAZTbMXhxci7XJtstcnfXuravPtyf",
  "key9": "67Qn9FeaC9sBNYrHuVSD2vR9TdNRkQuLjf1LxTcUbbtLLdLDubo53JAvsWMCL5byMKEPkxmPJt34ArmeaHdomSXV",
  "key10": "DReu8wo4RV2mMTuKAWHsfyj2hbunUX8ktvXxRRb2dATJ3z7k1WdEpZcqzUa8QWtcATTjfX7wQNbSzotKbs3z7E4",
  "key11": "4PQuvSfjutqfqu9hm7i7DxantzFrDFUNFuGNhENpJWnPjTwwX76cnxR3haEx8nd2PUNry6TidoX29pfEm2MaB9ap",
  "key12": "EzJxHAv497ahhDaJkLgDgdtnjvzivgBNsVG1C8MMv9tzNL2Wkm4ej4GxgUod8KmMxSTdxU8RJ3oQYrXXSpUGuKV",
  "key13": "2PFsv187B4adxhCrPc9UDPjdD9BnbFHJUG5zGymMkJV4HaxmhEe5Z5y9QkLdnPzFFxVX26id4v9Skb2jxDR9ScDz",
  "key14": "5aRF1qFBDCKj9M44aHL3HQ5HDvtr7UNcyfgssgv4eUTnaJA3z6Dxan3icWvw5CxLu6JMUdVNDatmAs2Z5mwAgzFM",
  "key15": "xHcqURPnKs9GYb8Nasx29fYjQHiPPfE6vGQFGupp9WKazV27KcNQcgvwgxLZdRvfi6t653twUvbGdenvj9XbKWo",
  "key16": "fKX7HCKQJVkfiJESWzPUAPPyWjBdzzrP8fGvCRJ57RFQbqTtAqZkMBuPEh7rFxXvoN5LJ5uC1yX8vg5NjsEZQMH",
  "key17": "SFFa8kWqHLdiTwrY3YAokZrttdxfnEK8SfYJ8YFrnZPyUS9X2YZ7dV18ZLZz7ACh6oey45nEeYRyieTkF7tEvEZ",
  "key18": "4VxVANjhCyGZWwDeaMxHajUY88FyXTjmmkmCuLwCCc5RkMS4iU6gaqbZMEELRAv8suHfu4W3y9XPXsEN6vVGRxjN",
  "key19": "3LpdcnfK88fsfcWagMcRXHxHQ9N3CJ7dCGRAR4UthLDTiXN6TTBXJE78yQfKCz1F4kT7MAZLRBqD8CBvZacJReU3",
  "key20": "BG3zQ4qfg3zhMEiMmBYgonYDZbEhd82j3bFzJhQsiGZtVCN5Sd8zqJ7h6dwBfgC2BW9WVJ4xCJjxMs2qcVUnxcf",
  "key21": "2hJy29sU81aCyQdtffD2jNzFrGmtFrcKxcQoTbjbdpPZVrUvkmwWMnHCmaMT8sFLZ2jTq24T71XJ2gVZReZAqB4c",
  "key22": "2FWkhbugM6o8rNS3qKW6T3siL8yrttCJPZYE3f5XNoiFXtehK32RHVc1qY7tLVHRGYRgqsNE1LbZXxYHFfh2xQy4",
  "key23": "5PdYYDc5UurZ7GqSaF1q7V6bW2QsDrnDmM9uzNNYdVNZCkPu1mgtw3uvCXDZr1e158s87d4NTejwd9Lkj5kPYmYm",
  "key24": "3wixQK75C6S7rqLN9Z88ZJJciGj4VmjvJUHbmyHErJqX2tbvetVsLnPGFvqDD6Tu81MjGqeUpfvHfotPgXG24Mfh",
  "key25": "3yDeSdnXWL5kzjrdDdVnGHReJwjLQu1qDh3vBCS6P59nS5nRcKxadeg8BTLk5qwCGkn29MRS6H99ZoKTuLWSUhJB",
  "key26": "gJHYPhdxTbjVqz63nRL2RPj9B7u9gNmc2nFRTGTxUhwmvsHjQELfgPY7LUvv7jKHKYfTUafCsYWbhY8pkVrU2jv",
  "key27": "2ZiNckiMdbZMcrGsMmJ71io1zgetToiUNrMmocrkSrxEuU4uhu9hJxWtnvpyuKWtNcxH8dF6vYHUi85weiZhrf2i",
  "key28": "21gd15VqvtMLmAH6pwhfcNA1cHSLvx6fyo8sxyHgsPp3ZDiEVkUB1buaRPrP86cwT5LG5Dmc8JnG43URWZPiWRVN",
  "key29": "2eBJnq5tNq5BH3bNbfwwZtHEM1QVRTuZWLKfd6LAg5EGqJ8WfgQeEBjdFLmWAnzT8pFg1bbdFekdGpHiATrSnHgG",
  "key30": "6pW11ssfGcPwtvQHX6NFQvxVMFXSG6RWJCMHzecon5Msx9tKJjoYqx674a1b5HRMjRSRNQPXhKhB4LgZnvE8m7i",
  "key31": "3sXj6AkVnJD7d6nsGva2hVRxBWef2gAfNLxrTeKHaGdm2jGYCMeQvUeBBnuC15dYUrQMEPhUx2RqahozQYgZ9zcL",
  "key32": "2dWYaCREyWudJzg6swLJGHy33zvwnyxw2mmRNSYDsF82JbgtxRqfyKFsFkXyKL2TzX7czuF8TdhDBAexaxnx4XkJ",
  "key33": "3DDeERCoW59R7LKSw4d22Rb4FpqqtZxHojiH9hiy2V3jrfewHQkUw5KvscmJ4KofgZePF4wpPSa113Ts9ty3hKXS",
  "key34": "2H2PCJmjm4RAUwB5s2pnP39PnUnUXJrkXNM7TMdrfvHAbCAv17vGrKayMmZjHxB2ewyAjrp6DWEPQ7wQzuK6RZrE",
  "key35": "YUyjnL6gbcLrDUxKX3AXBN9Ubru8m2SrS4hNSM5pfEwWCFJhsgeAwQn1jkJLgcH6n6owqmiMYqXHmMQWL9B2hFt",
  "key36": "5EpGBYrdKVKtV6ZkzDLtf1iCqxfvPRUGq4J5dWotBjXkUwimP2BM7FuZ55zQeRXDhrupKAYfVy5MVa47X5MzieFZ",
  "key37": "4CcpS2tRbtzMLy4KfobCZjFy9p8e4meHbFwsu7KsST1mDRq19d8qpTUjS5YuNJZ2y3UQ6PsQ4iupXj8zipVaqXnj",
  "key38": "4asw1uNSymuXk3fm45p4i6sTXvXonerJRHwPm2knhLbRw7FRcZ3B7UdD271GXyxAzk4zTWxSecVLaPV9UudsZQi",
  "key39": "3TaL7vMGVPve992QqC24K5YtWd3DQpSZs9Dk2yqvLYEnUTqqfMJP8BjGF97iKkTpx7JR62CxiBjaf2UE3AmdkkUz",
  "key40": "3CRLN8VCYiuieDZEi5DaefcwDrtX7p3ndBwCYzFPZaSJNL3FE8rBoeLXTFDLZfLr8PJkhZfQAHoUhh3xfmvxPxau",
  "key41": "3EWV4Y6WBjuzEDLeVCCCxVo8jJQZBMaWDWKZeHztTACnrX51bvufHKiH1QxzgyLinAAQ5Bx8yXBz9zA22QtzuczE",
  "key42": "3dLVXXE5thspPk5zBwgPFCSdXdmtdSevkEZvoSsQRX6g7UVTiUiV3vsRensEdwPe4i1szRpw8symGcx8MtYyEi3b",
  "key43": "1R8UyHYxeaRVqt2g1GhGYevoafzwxTVTy5u6x1eBKMM9mFGQFDMc9stFe2mkizetvoNGmuqX1Cmaw4CwjocMw8e"
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
