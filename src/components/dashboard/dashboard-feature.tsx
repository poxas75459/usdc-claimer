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
    "3dBEQXBFirMUC5p6Ck8bzhKUD1ynhNbBGYMkYdSTjXnkMtCKCyLvi5DBk8PF9KQjoi2rR7NgzRUEfjvNkaFoQt9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXLdDaZdNcUmFYfT3dcWvMd22skAvzHVnrLCXfGVjRCyLw4LgvJPRLpURNVhsZUxeWU6hSaUSjRpQE7NvvgpwCo",
  "key1": "3QR2iXmB3mNgnZmWpaaXA7UtQYcJYxTqXus25ucVEyjaEK1qp5sDPNEoj7wczMgrgUTSFV13JFtqJGmdVNqb7WGS",
  "key2": "28ry3co8JktxzaZjaczHGqhUF5hYvv8ywDpqaVBuGCDeFXCjfMtPZxYFQG7VsRzWx9MJQtYjgM9xa38Xg6zXZ7GE",
  "key3": "9vD76MTaem6gJbxyuZpLnSqPdj1ZLzn4AVSy2z8CUzP9E4b6knN9J1GA5VEMuSqzQsXu4mQF3RSRqzNdocanNGR",
  "key4": "4uLrBoycQWo4w1Wm8A9JNFdjDBarzTqYDn6PiSkCD3LPH4cxKnC4d95erxv7GJDNJV5nhiAWaMNSbYCJ9fqkE6cx",
  "key5": "3sM84WVW3ujJvRU5N4aeHY6dR1KTdQ7mEZfea9FFpdTqSNr8i5VtHnN2bxaRR3TJgSVQvHt6F4x64JJnZwZBe8kd",
  "key6": "3ZuAaNk6QGFpcqSM6R2Dovvawt1CMjyKfYCTd8j8b72CgbhpNx7JQ1tZVAsZZvTcfarpb3DpC7bNjGRDNfrWAGsM",
  "key7": "2uct1ygtaudmWcui6SsgPg2xacx7UnKzwK9936NPPzBiPbSJe5tfBtHP5Vo6mQzW1PofTCndZiiJZMSr1AcgWEo2",
  "key8": "38UmYQgYCyztstx5KNsgdjd7huEwdLoRivc9uJc6d7LWVLUeigmQe8t6XYhHxjsGWzrciR2xEWMFnbqaZdQikkH1",
  "key9": "2CREqrACtHKqhG4V6DDCHyCvfT23SrnLB52F2iG93HR2Fy45HTdzJrPdoWtcpnKGo4ZN3kZMu2qtw6Q81NW1UGNG",
  "key10": "4Y7aVwMsRsy3VfbuX4XWHLX4oKyBT3Y2SE6z59kHkPf2Bsv3BNBpda3KwNC542x4cqktK9E2jJJeXkUnBaRgAMUK",
  "key11": "5CzG24tPBkJHsR8RuJTMzkA6ufYLssjbkac8EcTf5VWQU8P7jgAzdgG6GNaNCeyrmEkD2VFcPm9TEqGqAFeTBmo6",
  "key12": "4yag6AV7aES5sXW5jEr33JEGJfiTjNA5e2ZYzW2jtfKBvo6JZ3XiG42TxnTQtXKzoZsh631Xhwcv8fAhezwXaSUQ",
  "key13": "3uFawA1FccFFdqynkaK3GyeP7Cz7c12GfZE7Mjj5rSfQoEQFPBgFPoA8WcacSE32PwrcAvwDc5451jWrg2EFXrDA",
  "key14": "2b56XeYGpf2nnPgB8zjnTef4XbvGPRUGHEekkaKXCTtvHP6sVGgNMVbSknkTY5eTcPUQ4ZnvDQb4rPLoVJFB29nj",
  "key15": "3eXwNEDhgwj83XkaRJpqa5j2FFasFV1t3jGyzkGdXjcANYvoqGjpzRXUdiTDftsV1APUqVASe1sdRaHt4awMXt9v",
  "key16": "ZZCq8MPq2f5gq6PH29iwwvVJPiBE4pBALLSYAqrnRmCvE7Gne4x5JSv7EtLQGbWqREX48uXG1Yraprx9LQ9t6Qa",
  "key17": "FF5BLbyjZf3U3dtoGSMvE14rUEkC97NLjsbpTTz1mSFdGcPKJmA4FiKkadETaS3NSYgwsu9DSKbNJJ65kiV729V",
  "key18": "3inRpLnEYCggPYGiCXBw6EUgjv6EZDGpeyNhScqMXubQEsFEdEhgrzrHLhNUgJCneHhef9AiBF4RnouB5FgJssXD",
  "key19": "2e56pXyceMQrFFFMmaWdA1cBKbkVGBLaNRuwgP6xmpEuD3JnKUDseuZcLWA4aqmmvKipXpPqBRG3wpWtBsDfcbof",
  "key20": "4gg11S1RqNUCGeYM8oXxswTWXe9RaCwX7wxtgN68o7PyvYURqxgPd4MnXAax8yybAiijt986MJMcUswSFVzxyn5N",
  "key21": "3AXrfXprGx7SW3jCcDokBgoV1twA2UpUTvdw7sMy8UQsa91heLPbrZa5mR4fAPHR2bGKFEQytFNDPb4RctkspkQm",
  "key22": "2q16JsANVZY9jb1fwNhJunsss8hrN69vd59j9ahiZZf3iBdQkmiPeL2Ubu3qizoiXVszHdzQDhk9DfpoYLhtSYLc",
  "key23": "bSrXK6myHgPnrGCgxXipRMsyHrCmrmS2iak76G4815tJrNUWNwBA7psUB1Rgd9ZAyydDHCgfRbU6qsLHBtzEmss",
  "key24": "XfxcqrRQ6CgU1yUCDiB2soC1aV6hNnqZBF1qdVUwqwUW2rTfKXodtRYLnvg4LsJeFJuj1EzBX1rD3mTCP9DhqnK",
  "key25": "2WCeTnrCZGrnzorkdd8qJWKv6oCX9xaUfFna2ZYTLUPKhAyomuYFZrFywLhDg8oDM5ErjaCxj6RzYpZhqyYg7QUi",
  "key26": "oPAGCHT4i66jiiLKjZDsXnkRnk7fENs9KN2z4MLY9GvSVKHi1epwzw3hWfYsFjeuTHbEwNRYmEaJmZVCNgmNdsA",
  "key27": "2bQGn9BvHqcJdHUtYr57twyKRWv2wHyG91PFYxwLFESA4E6zFqzZXsATBwmB353E4T2HwyrKww7yjn4nWPsQRivH",
  "key28": "48AxH53X3KJomoqcySU1WBz1zJffmmQaSzBv66ftKSy47oZ1h8QPkaAraQ8MyxDKvmmmhGy9ChrxxBcncnqCNo63",
  "key29": "5r5vxvNGChkidSaLw9yVSPS1Q72LEASPmJuCw54tCEX9Mn3owYDFQarvDRJcxQeMhNfBqLUTSTSHx9ng57nZfSpK",
  "key30": "69CSjuxUQnVEF3j2NXS8yeHQuruw977R9TqDvz2SoehoGfq2DiaKWGKzqK6cDvVJKdMpF1Pi8xcYxjNpKvuP5Pb",
  "key31": "52B82JgwnGeUYeCh7tUruZm8kHQtBd2Q3t765mWVZKv7dZ6NetfNrg2PHoir84M9cGPpwe65NT8R8WSJbikCMHy5",
  "key32": "4KUozJvq7yffumq2uUQq8FZAoeLBH5XTNhh8ihw5bFvMVLGGavAnguBvDwSGotUy1EHHJGP8Bb45VgaDH5TUBke2",
  "key33": "w23PxZQaRhJ4Zv7JTRwkJooopHjNwHDcVnxqDQzaf9M8Z3YeXgHuCpMwt1TXfHCVraVRccSxQ4cPWrDqrBhTfrF",
  "key34": "2E2DMQfFazSGSfW3om1S8FWZDCkjALHbUirnfkGipLj7Xx7SeWKFjj4HyTAqKdu73vX8mYa36ore8CC8JfP1rVG",
  "key35": "3te5d5ZoD7ybeXkBUTGS8BXWGA75RCqunSXCuqq7S2YCnSk8SmtbZSahW3wKVz5Ej35Gmt5wHbQDRSZ2JAZb2zh8",
  "key36": "3srdzGWk76nu3uJkLCZ7pQpXacYz3GUen1QZAKW6Wzpa4mJBexDLEikTDoDP4MAtsa25GFm3YTZhkuFRC1jfXC9w",
  "key37": "2zcWbKPySHDcK2k65uhpBqU1jUu5d1mHE76M3Sm5P8FL1HngJSau78WFWAptQyVgqWLjBgqMFofxs8EGZu5Rtu4B",
  "key38": "4M6MWw8UuTyjL2or14yHgqE8TyUzXD4XmGb6S2ybNVLs8Ji3mWiTtKFKFaAZyosxMJrqRaZkVyyK172uGa4yAS47",
  "key39": "5VLq86VCue8ZpPCCQVTpWg7Vu3dVt6xdPjUJFRzv5jVNxNrrMiTAGCMDx5DDDTgaz7SsrbPf279EYAcMfV1gKKpC",
  "key40": "4xYqmtyYwfaKpFoHz22LX5gb835jdut8R4hGsVNNxqwfGpahgnPZmavfKeNSy3sndeN7AVCqJrtdcwHo1rmsGk3x",
  "key41": "5GFFHeABRx9FcDY5PSxsAmajsDkdnkDrgDcAyjC5wVYN8nyyXcRF3NWo1UmDcztVqLs8fgkNTiWyeGYyxvGPGMgU",
  "key42": "2SnYi5zQzi9EukLz8chCEgNrgqHs7v1Egk7tguuwdX9vSGYxaC1Dw6uA9Namx1YCZvqUcNWewaRqQ9nwY1yT73gE",
  "key43": "47yoNu3VerTa6eLWTQrhV4R9vFtuPEdv4p7KZydDvx9aTz22Y3NoZBJf8C6gkvG9eVGW9JYtYVuEr4VFEX4CZvLq",
  "key44": "51YKfihK3sindeH7GvVhyFAtV5gyG6NqKjjfLZkKHG6W4dveeypnq1K6S2LsdVYKUVKamJgHF7RKZ1iYdxBwys82",
  "key45": "4UCv3XfNN9m1tMsKJLA2k3AM8Y24t8fzbPZLEkGSesbipib81A5XVe7WLBwXm287CVbaUQYZXuocEA6Zmbwq32oK",
  "key46": "2cmrUzKFVgaGytb9AqMrSvRuzwH1tijiQzqcLWU2NFaW4Ao1euHGVnDDKxxs9k5puZXP7E8mdPeQQjhVQfV512VK",
  "key47": "2t7KUXH5h1jvhgLqHQABBT8S6qeLHAhEcJtH2GQ23KYWUsMSdsqStTbD7R16zkqex6NaagL9PYVo9gGkDqvSLvcX",
  "key48": "2Amzm7BoVBLiaF4d5wYvcgWvLpf1eqhsjrCxTAfdSygQAgzd896F5NoDcDZJcovCpachHgQFbv5pGB1m4AMJKH4f"
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
