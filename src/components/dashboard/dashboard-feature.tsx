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
    "3hgLJpLHiHHUDgFXZFzMLDkCStdbqHTR32MJSJgaug1LFVZmezDZAvwmcpxCoMjpekepxQdhMBL9NcMSzKBvpwWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhK5y5AfGkdwEGQvhPUQKbvfujVrQzX8LZ4W1DcyXiZLNCNWQvBMj5Hgc1SD2N24EN7gPYs9E9s1NsyPR5vL7dS",
  "key1": "5BW6WWicms1kQtjZ2zohcKVL1QUw6nfeSJGkBh8oPMzUohdo46tufy3HpW3cdQQFHECMFrXs4c5TQDQr6sw83qY6",
  "key2": "wZ1ZcAMULKexXR8ap9icmjjNht9jLeQWyw7RFNHUbrnfnNdYvCqfS6ecytL9daQL4eEDALkRPYm7vYFQFAhj65b",
  "key3": "4LvmBUtpFELqsgVLUc8Fx1n5dZG3Jd8HuevbpamzEKVpKCkcnCtLsQVPCE6b8RXcTM6U5uhc8xNYCznM5q5QuRqz",
  "key4": "2pVnrhACgKi8i2At84JxsLXSatY7HybyBgbpomNA73gWDLy4Xa5b4sSQSATf9AHwVv46KigGoKbBTZB3NCB4Xrct",
  "key5": "HQrYtmdNV6tJeuH1xM3RfBEu5sSRkoLHGQj3bmfQm2MvKUyHy9ks4M6H6fbFeL9f7j69kLbSTAELRsBDxwYr7Np",
  "key6": "rA5pWLkox4xHRnqpnCxxRswvAcEARufuHX7CKUP4jK4LrcjHxGvWpjjKGEiFRoQwx6YeEAdH6X1WzoD5CdMCDsR",
  "key7": "5NyGaJWAf5nPpeXqCpaLkzF7HYjfgN1FhQnknYyJN77oBKtJ2cdrjGGVTP7GwacU93ArRutbPRGGZFHpPae3NZZr",
  "key8": "3zxJdxq3cixfv6pw8MoJbjNpdoxUyMtFUXL2MqvTDBXKraDkSyg8taF6kBALrhMDRPUhgurkBWDP49YAK6RDQRe8",
  "key9": "2P7KV1w4TxmDtdDsFDaynPeVn5RSFVMPUkQ1jcLN5DK56zNyAqniVun8433rUHPyvLseQLeiX732mHn4bJMjHMCb",
  "key10": "2ykEhAKzuQragGVqw6DEB7zsaVgrTiragENZYTbGV98VGz3busyLwgGGyh58SkZhDqQomYdk83uMrP7KZqLXLmzX",
  "key11": "6JSv3NrAabkamvmwjjzQsJXpj5VitEe6Y2MCi5xdnitnT6i8eeYkPbAX3GzxVtjGcchRGYCi6ExH4zRxAjLfipE",
  "key12": "3jPTyLRrRTKdYjjXdJUxodgAKEew3xaum5YChZk4TKiKNKZFC8QV2RFNRq1QrTaGwtwtEuXj5JhYZTG3JqnxVquC",
  "key13": "2btBVx6vKf5GswYVAiitZ3BHwUARatARa6v27argNpJ23fcsgbW4AGMu4enRcEUY1gehcthhzyKaSKHFRqcrjByX",
  "key14": "5c1143v17XXeVjuQWRckCj4KCSMux92UScUJZ7YdkbvG9sErVkTKAyok5s7EJT6ZrDcYGn7s565E4r111N5LChgY",
  "key15": "NHUs35aacCWk7UM95WL7C9dUvoxBDrByvZJNgKxGW3kJSZSRh8KLYvUFSGDBRZT2nv9pBbseyHcGkykf2Jjekif",
  "key16": "5HiRL4AHviCdX9dj86t8k2hwCj7QA3Damxfe9F53HimAHbfEW8cjNw5CXFt5j9G7AJ2PeH92GNKxnkRL7Z6YmNuH",
  "key17": "d8BbfyWFuf7gzFjDdAwFWkiAJVMidfQHTzJrvFb7mkDJCfYpfTKDmFAjXKHa2aUacJHEvPK9DbdY3nguJeTAMn8",
  "key18": "5cN2tZL5JBFxCN4zmRdbBxGgLWAnUTz8cTmWoviykSGAGfYKgjm1bcZxG5HPrn2dAsAN3EwyE4aJU9zgXjC2a9A5",
  "key19": "oGqanGRmePGdoHDyQTgreEbkooGf9GtdTUyg3NQkgXtEzxffc2pEp1SP3exqjRS2L7YkZdHW6CCNxqWF7QGS64Q",
  "key20": "3RytZ71sdHwrxA1p8YcxfC15dTeT4xKQEFuCD6czeyMTtXCnPgGupP4HDtjza4t5SvtM9De3n41eeEHmJ6CDjAeP",
  "key21": "2r6ivEdHVEUFUFkTtyYht3KXPgug2QTmm9vMwYmDr1DQNL3FXTDWUr8hgF467BLWQ8WKMi88uW1wbua8qiUftz4b",
  "key22": "2ggCM5XDecPocx5sfSzzc4PExH6AVCxfELmxgqBydPRkZzYAihRriC7Td3fywVGwXaYvjoxiKYiGSXc5afvCnuPX",
  "key23": "eC9JE8XZBL8DcRp8QLxebZuUMP93JybegV1iQviroftyT1eAa2nW74uz4QSeRTXq7bYHZfugoz1wEgBk4LgockF",
  "key24": "3BxqHWwvqKCr9e568YVubUWXCGX4KMWuPKTjdgCJ1XJmBv67tcr1MBzEMrY9BHq3nh34hWebLQu2zpHzD4WgYsEb",
  "key25": "5aCbQH4F6B6HQXyX1NmdXERaSqw5XyPtw2xZnK2ozwc6P98JDEycvwmWGXSFATRza5X6AnKRc5GBP1cGNBqpsEJp",
  "key26": "4vgwEfTVrB5WUQoZebmEFUeH7mUTiHKVg6wjiWi73r7Y3QSLbKSmhfcA3Tn5xLkyZjGsPNB8CFzq13LR5L8VCn4U",
  "key27": "8yDoSvM3nMTKcyvxQR5AGS7UPYygMiKBwG1hSm6ahCfZ9JmPMhaRGX8PNFR1i9Ao8zTudVmrwBe53frjpvbMTAq",
  "key28": "5C3cTC1uEGu15BxB2NhCPAwZZqRqsSovBbe6iqri5HzztazowEXq5zqDnKWigid4Mx3FdDG8nzVEGx5pQtEDZs5q",
  "key29": "r3j56DPfbrFp9UGRf5botHBe96U3eJmcHcLyq9iutkWxenoXGrMTwvB2n2N8RoxPbXi17Q6Myrt21PBfoY4XxZp",
  "key30": "4svE2hZPHNvTKFWGfNu4mo9CKBRqW7r5eYcLn7mzmVzM83U1N5VmH94M6zdPZRepGSZWw9SKvKiJZEdKF3r4d5up",
  "key31": "Z9UNb4JPsfJ1b9XPGeSA17QyAxycVwGYnt6fHQ74FZgxKGcmJNNte9Ze2XJwqTC4zHZr4xQDGxyC6eY5eyzNTZT",
  "key32": "5ckutNUES6XwpLaqj58GBitYn5S5qiZtjfTiUbi7G1QKrRqNmH9Mu2YK2gLbRv4qojL4BXdXB5x2aXJPGPvi7qsp",
  "key33": "5PtShuWp4VAxY4rvsKouvaUqHQdqoQjanhiiwdf7xr7z94hEGAHJmupnc7F7ph9GnrKL5FUVDiJgqLvKFy1g54b",
  "key34": "3Xq6eU7JhZdtYVmfzejTu4XNkyi4xd3Qbrq8RL33b7E3K4Ny57meZY72sSDFVPZu1sCqhwTsb9TGK5oZySp2MXEv",
  "key35": "5jdDaa1unvgt6dmpUTk3e8Te9MfRczDWb1xPRczhFpiATUPXDhVtUgGkxPYCKqgH9oSzrFhDPaRhNyND4Apb5xmv",
  "key36": "48EL5QYvG8zwJbEb1G5BEZ8jyqVHmN2X2mWGbKATMo1YgCVZzPC1EVnwZAuSMuBWq4ga9my2bxGycisC7KDPSCD2",
  "key37": "2iTPDX9AsjWaEWF7CRR2vo4MF7iheNjgdt7ctnujs5ELK7ekGpXmfc8j1G348g37nZKTLovk3DSZ1jWquaZmSgVT",
  "key38": "5i5dFnbqkQiVWVBKJDfa84gvamNFCV3G7pbXstrKgTB75yUjmaHNHAoAfm2q7w7Y4EhXw3Gn1uAAehrDxzLwFQmQ",
  "key39": "4UzqRbDYCjHFZpX2PDRCyXHNk5JEmMo8CTFQzWY9p27noK1LF6J3jjykc2V1qvbxY2xyUxuxxNKzoEmYRFRTFnp2",
  "key40": "2vhmQqzdodCjt6DGPvxKX2PuHiHAht36UivkDwhNsdvfwWrgARbPj7dNQVdGxZXJgTC4zeRiPvaouf3Y2TK4Vaas",
  "key41": "53rSocE2vZQQKHi37KqaS6AW7Za8NSzWcSrRExUUqTub1KoZPH888m2cGrAeh7oPpwxSVTZK248Tdcrqot4ypkXv",
  "key42": "3BPLQM2FNdkwZSMb6P43coYkJMWnxK7Jy3wsoigmbwsqHhpnwgicUP1RxoYN2b4kujpahjdKbpsDtjVdW1jWhSsB",
  "key43": "qDBKAX2uFHnryyPXGPxNC8e8bE3j77qXRihJEKzqyHLdHUmxTBCCd3zEAbgFQ3eorpTu3wDMo5TYqWrs6YAeVnc",
  "key44": "3B31Se8ynHzmtwr4xUsb3pTYNveGLk7WzhL9raNhgDwxYXnDFXn7H4trsyCrjDx7pTiBKPXnUb1N8Z7Ltbfydado",
  "key45": "63hiEMN4GZsCvLgmtFB9fBjKHzzDunuzDK5Avn78smfEaY44ZzaFtF6mLZ49pUYBiXK9qUmzKsQbJgWdKp5gR96U",
  "key46": "5gdPyFrytTRmSjz8mcQF7pbsXGy8TZ8F8AJcLC38GrBQhmyNjGgri9snAozSr8LpGprexZoZnXiwjfV5ZyGrTj7Q",
  "key47": "3wEYxREGLSTVCjWkRT9H6M3rY6x7Dd6bByVjcZuML8jsjBCVc2d3UJEFTE7RDx8HfqEUSS3226fJVenVRf8EravY",
  "key48": "3g8EfLTTGm3U5zmaJNUdn6Ms92qFEMpB92UF1TPcKZtYV91T1x6xtG7BBdAtxdZA636uXycpEBTqNRaqGBwA8iLe",
  "key49": "2xfynXKLegSxkGCxbYJNopgGxXgXuvduVxxRqFuVWLbXsuiehKWRYtVPKDLu8LcKpad6U9WcNP6jfBVG6DMfcMcy"
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
