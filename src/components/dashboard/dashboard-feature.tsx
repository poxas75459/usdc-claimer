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
    "FZrfYzK6k6tM9gu3WuuVk5hTd2fL9cg8KX5AYNZkVUmXY71SsDUFxkqbPu4J8gqiQ4W5oDtQsUtezMLh919zJEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54e4gevx6NgGSuDj5Dtz4E3FsVET2HHS9xudTA32QtweGbdrCMzD8NRxHkDqHWc2zjKXWCMRdnPMfsSPTK9NUDzu",
  "key1": "hJFMsg5TYjFrX1MY9QPam9UEg1SRrQTV1nnJXZRh14tSsHUapBVGTiqapsAegubUGKvnnnKT2iDNyj1ANr9x3Tx",
  "key2": "5nMcRe23NMkozKW5Qq7hQRbJ9DepE9uQVE5ZuvN12ZZeVFDbr3kwpVQf5Dv4qyjuxR84utZZdQyEgFnysMUfyXP5",
  "key3": "4csAGJ5XXotpMjkkCcGoBMWojDr4v8BhWpaw4B8pjCyXaiCaao8mFPvn7xR6XZk1ScxsTtuD4NicpCVu7uXmubos",
  "key4": "2mV72R4BeEzga5mxwSCCcKtZnvxrzAgPw8LUTQCJQCCM7iBw1nRzXZo4UZtkXvksfZYhMGn1qHqJT6jZZRQ3uSFe",
  "key5": "3bK39UXKgdnF9NRKGRskURg8WRQkpMf9USqoCh84GuuXM4hxmWdgFLGEBmPcjCCT5b8dKNE2HxWbKhNHVUjEkSim",
  "key6": "YDi5EsQyLRKG81Na47xkKvZqZJbj7Q2EJx5Ko3FiYyCZW9A7RYaFXuQg1tNd5VUKX7Xhqhx7o9mSJc4yfNok6eZ",
  "key7": "35bQHndeocfSiCk59LapQUi1WjPCVNs7j9XuRad8BtqBTQj4azdc2GsPdRNoWG5pA7p2Vk3SGCdp3VQQ7A9mDnge",
  "key8": "43A9YRpXTk4qbPi9TWpyZu2qt5FaYYTTjk7PmSzYeV9kTSr1U3bAW4FEaZVFPXBo2oTE5p9TBJwugJcNuV6JrLwZ",
  "key9": "2FS7M2MAskHB3vZNxcJLuSQ9Lo3VvVb19FXXzVRWmXXeDHDULojuqCen58srgm1jsgdY6x31rNYwvaeArzUPFUDV",
  "key10": "5QtEsLXWAWVXFosg4dPa1MUQDqwd1aqwBdfkiquyfFuRRRtN38yKUBW5wULi3yovCxZGzV4zMafYSkZGCedTTRmt",
  "key11": "2SCbzpVeAx7S5HXvJSH1iANnMhv3xhZC8ZRRc6EuutBYFBRkExDTZtGQ9tPwA9ZRGjXpLdm6FBRNbbxmaneTr8uP",
  "key12": "2GB6Gq2oA5ApNZQk5piCDZEYD96E6rXPez7rzKkH977K6bHAb4wHgscQLwcN19cxU9egZ3sCTN2XCjwMXhum7F7i",
  "key13": "2Yc2i9dMB5pMqAvQ2GJCHm5FAxxy4j6MjCcePBjSGpFC1Nu4LSGpGGbgT7EjDXWVW8DU9iqgMdNtk7xrusVPs5RP",
  "key14": "5Xf64eEs6Y34eifQVHgRCvf1ZmbTyALaymAvubyEHjxHTutfLmM33gpde7yXZLSk66V1UCLf25QzXYDgZJLoEPhz",
  "key15": "3k954EBDvWRSiXSzvzvap8Aj3hfx5b4wA1cWdiV8f6HcaWBdnSfp1q2ww6Af9Vt9RRXNMRbi7kx5Z6v7tyyCU4zD",
  "key16": "AYb9VnCPmWfwmaiDZswKGB9bSZqFmPvijcs3bu6MvGL7xmzAXkiBk8zhu8VpCMDuV6pvBLefqcA9WrB64Q6WiW9",
  "key17": "36PhfJHBtBdhLyeRE13QFEXi28zH53nUFjxJSZFXvDSoUPZ4HymHx7MRzQmUyGNohvW6LAr5xDGQVSZsVZjeDwe1",
  "key18": "4fx1ta2P6epvjSrY1TEonta5V3eMQWtnkptcYLdQkTgHpXtSkEFT4uFPHkGiQ26WPrUrUR7PZC91seWJ2RMya2bh",
  "key19": "3PygAKA4ctuuEyi6CojLcvktff1NzSMVBpWzMZrLQ1zA3a4MRytzXLVULB4XDToGFDGj3UxjLC9kukJrFqnVdjwU",
  "key20": "4NsMg83vpvvHufjDdeXR5AbFxAHJ9NPc6AKnVKKnFMdKU1LDwE8CPX8qEarZYwsgcSqWUAWDjrDDxqJDxY5F4gpS",
  "key21": "4DUxCVN935RPT8Gp7kC6vm6hDSYZAFmMN1vminhRbUwUvWguoeMb37JUH54mhcCbxvxHozpDXdS19ywXxAGaH5vg",
  "key22": "4mxnw3YFn3oMJ9L3k63iWHk5LRi9K7uz2U6JdoH4X6XYW9PT92TdH2V4jzzPQq117oj8axXitxJzSAS5ygbCuKET",
  "key23": "cd1nM18fevfCgKLfoVNzVB5aRjv9D9tQdhKCcd61rCzMMQ4zgHvFNBZycGhQXQuVuoekNyeumuTdNLp95SooAfK",
  "key24": "3fHtFemUfQvNE7S3UaAUe8x2PNbZkCJCs9NGFvEXJqrAoFcopWz6AjwCK7gLwuZ9RSRxJs43yd81dfSqfbT8cq6W",
  "key25": "2VQMufzMxwkqdBEUpFp1QibjLqyc9V2yWL3Ay6rNuCGoEcu5CaoHCNGWsQWZx2Svu1gWy1aAZTjFSmuBtsWp3ouv",
  "key26": "5K1DzmZmvRACEht7EoeJHB3k5wMTkbsvDcceXmmk5KpcipoWEQ9C6YYZKJNsBJM4CP32bWBi6r5HiBYunvnRmpUm",
  "key27": "4MZ9gtktduHbGoBRF4KNz2ZQKLFyPTEFzSjzWSoApgk77bhUxthYXtLxvne1t3rYq5JLYdbQtT8aKwDg82PcDeBV",
  "key28": "4PHjizwJm75ktanw9bgKv9dxD9KXrdLvAnpAqbgXzaYaKGuYgYSDhHkazekw4n8iMP5t3NivLykH65k76XNADffq",
  "key29": "neAUkCnbzasQhhWiUGg7LQkRrJ53rr9fDiLKs1yCU9gYJUZ7RqC1PHthXd4WMkn9ZtTx6QBKRgqVU2eyvhUfoBF",
  "key30": "5xdLzHUYSTPudY4o1gCfLJKWtt1NDhNbs5o8YLKKLHEkM4i37xteTgvR394vnRW3of64QpMb1MTLdDuUQ6dRuUia",
  "key31": "5xGMZVwUAsmMrPfmWGZsG8vQzsxcTwjHW2idCxXni7e2uWzfdxTTb2iaqLFesnrouTrxNuFmhXZf1B19CyoNJicJ",
  "key32": "2fpcsAMDHXTU7Px7TkhJsmJNrR44fSUsbmutUFerpXSqXQ9etSN8TskhDg98taktEvJVk5Fy3dtujNhTMJAi8q7N",
  "key33": "4KchmQPs3nYMXjq4HG5ZVR4XfdEDsfcjqrsduCCuMVppkL2i3fjQTerTmCTz149L7dCaraumj6muETWjE9gEEvD1",
  "key34": "3ct1vZPnyZp7G4TE1UStNiWj7GjKmDx3J3GXZqwycNitEVXzXgy2SPKFUB2SYnEx3R87GUwA4HpxbFQ9gZTfnxqR",
  "key35": "3hzri5ZXvjRsykQHDzrvXWzjsjpMBFewQpXLJ5ahTb6QnULme4SvqrR5A2ynC4GCSWrMsaSCuN4xD4gsRRrkuMxF",
  "key36": "hFBwqkmTctEhkE18Vo93W2xRnB8XPTPRrYRyU1mtVATm5SttJciKFNrM9DBZMqF76w34Uc9g9PECwNUBZRFirmk",
  "key37": "45c2zDVmjGjD5e4tCH9QvYfyvrbfooyZ4dSMwNURd1kJxK8cfDn5UJDB62278oodjCFp72cqvvkpy2Edhn1jeNvE",
  "key38": "AQ4ecvtkkyCWjTNYky4v7jHmp4VWgeWw16x565mamfx3gxJKxnHFNqfCH4d1hX45pdbZsJRpybjrUgeToNRaKGZ",
  "key39": "3oC5sDjT9NpdSmmYeNo9hZ5nzLhZ8EPgS88dK9hTRATXQZgkscxcq8XStNvX8MRh8cCnoDSPbCPWsR6T4b5xxeUf",
  "key40": "2Xi6oUQYiBdTxuMVdaGBVAbBoPTtEhtcmWuKU6iiaaErsLKgqnJnbjZRdrkRgke2vUAXTYDAzM9UDy8aJVafCTDf",
  "key41": "rTVqERXhXd2wTYeVp9FtePqZkvZeuG3XdX4CMhLTnLhp4NVKk9PkDEfV9mns9byrdgKrUNYvZF7cmgTBAiyu2oH",
  "key42": "3Yoy2tE829taJY7AWH3guZsqRAviSYYPRxW7mTt73tSWx9qMcsrSXCed3Ebxr3e4cVewADUWzN3yV69psAGWySKL",
  "key43": "2WKHYUJ4eaERQvUFHfMtbR18PJj1qwFgifWE9Un17JZW73HHth9Z2J8yvW1EPLL9DWZRqbtvuMsP451s4LHfs8wd",
  "key44": "3jNxGYz83VyUPZ82bqD9QhZRsARg1eNqw24suu93vU9UZ1U6DotHDJh4pVdVBM3LL2uwpuXovY5SPYpTF6pmYupj",
  "key45": "5pRkXLN3jfWwtxnQpTEN1gcxCrn2akhkg8Kp6WAwBED829da5wL85DnYupjQH8huoJzaS8BJ5V9tpKzzcjuSAtzT",
  "key46": "YsmjrKG5FxEhvmXRnX79638vUWUW1wGv7n32En6qVrrvm4DWViHYhHSPEhBc1nCJ6EMgu2m38hghs4orvaYnSMy",
  "key47": "31smowTK71PTqjZwBK16UoQ9TkKmSDvWQUUn9dNxDXk1unUzPgkoNiYvTeDi9wEEnYnrHnKP4LLRsrvH5SGh8T97"
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
