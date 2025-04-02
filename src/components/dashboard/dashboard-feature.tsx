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
    "5wCvFW12BKkNXSZ4dgcCfv3LEQpGTurGS6WuP8gYMLEx2V3tvFm41iQ6aqhYG4VgvcqDfHCdxkDtYmbLCaobg8gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UhevFSPeD1WejCQr6BX1Er9ebQ9MKybDjKBGJWWgDArNjbFvqUtPwcPmCpCibcgyXsmabYcbJuj9PrRepqZ66pV",
  "key1": "59sYsfx7KvVLBB34eNFEjbZC2pX4Vr6fXJk7s9n3uAphPpC8wts3yLaWWJwThiYU4wmXiuy5Ka7wddTxczabEQbP",
  "key2": "2gYoheNioW5L7XE3vXd4ytF8ibkYbmem5gB3cMVDGxiTgHPcZP2iwWv3dVWaPpe3dnY97B7KLRaaLYdE9ncJicsC",
  "key3": "5DxLTRhz9B9juzeHwDyR7RUjyQq4ESs3s1NmmXQxMYA4HMZAsWnyMRyxBMNod1H5wQ7WR429Cd9G1FWgKx2ySpuc",
  "key4": "24RGP2S7RZ5ZDqDCgtjrAuXsUGxCFyitcT1QnV8jMuAJ65Zm5yEkgv44BtR5uUS9UwQ5USxnVoaJyVPbAKTb8tpx",
  "key5": "5P1JKuxgH3zAXpTX1SizmWue6BygRWR3ViscuqE6DyoMnkqvGrBYwqPHUBGxRFK11aMcaYwc1G6j5aHvdJYSDPKk",
  "key6": "3UJ4dnxJvFMYrREvJ31EZEUtxt2q1ay27en3wg23c4PeDyBUV3eiDPgit2xUM67d1pVZfxWvRbp5YWUxqSGuqq1s",
  "key7": "iC9a1csxoN7f1j6EPUBTPpcegao4udK8nP8gkKnrcqCFDdEg5BB1J1WsdZn3KgqW6vZvdRZiB22KwMruoxjFCzo",
  "key8": "3UB5toqbiZYUgg6Jgk2NhXA1iX9AwF2rtc957igcKXzGrZxpnc48Ub5iWWrQNyR15q3R5e1ph49u2KMU3N1Lqamw",
  "key9": "51waMAmxwC3SeARF2B2VR7azvY6XarBDNiNWyfEHycxg22BseDSiFcQCyhFVSSqxZcrydcEts7DhaqujpUU3sZeL",
  "key10": "3wmCgnT7etP585HD7MD4HSkNQA5tLUx925RakG4u47ZPLgMyFi72UJoCeYQ5vdiReCv7wPgS6Q9Uo3ckqKrnugR",
  "key11": "38yAJSKDYqUMpZgD9u1xsHsbDZFtQtH89pVZnz2quP5raqaFPSqJhu5TPauLQhehAUVeyqqr7ZmcHX79SCvHW57j",
  "key12": "2H9zco7LpatHyUgwGkFhdAeJKpEPSAVbiHkD9symME5szw8Ydhn3dp3HKp9KokbncrhXCTzfuW2T3hFHGUMFkauK",
  "key13": "2DW74RuSUtjhTTNu7hPPPKfurQ9cuXTPRLBnd2f8a9oWzyHfQ6kZKJ7i4mwEKZczJc3WN7HCDU6YqxrLJMm8GpLp",
  "key14": "2xXFd2gL1fzSZchHuQCN3j14zwGgm7bwzf2jSz3jYEunSHokXJ8m6hNqsgTEoZCxa33g4r6eW1tWciJAgEBSXU2C",
  "key15": "3tyYRZbRmFDZKKR3zK3VgeBRNsygBzEiD33jyRNB2Xxp1GGeZNB8e7TagD5GiU9gTrgZHj4iGK3awYxof46TTP4x",
  "key16": "2PVAbbQtZ2FrZLC4MxEJJBYtX43JMeiXv4BJhnJ7Prv3ERL74Ue4GZ2RT9PtT6jWj7keqk15PJuARr4U54osybzv",
  "key17": "VaLc6AFnA23xsZgaHqHq3CezayDD5PCh4SV9NkKxCYmEQ6XqSEsxzNEGoNRcpiSwVmNR3z1sDBMpykKovtUW5nr",
  "key18": "58wi4wtBVB2jTqdHRRs6KzXsqHXLxPJLVE2DKB8Udqxhokkztc2QgP8hPnFT5ZKcZXChcShCHfc3ZuQmpp5V3AAU",
  "key19": "4jR1usfuxdvBE7HYL3HetUfpp17g81yXQdmiRpRjpSULu81qDrBQ6KDAchXUpDsVJ4Gw7dx8sM2nfjPr7DDndxY5",
  "key20": "9giZQDZUUh4xuFPqRyYWDGd9ujNVuYpBBm8wuUAm5ed6DKABbf1J4ufsbVU5WnD4EyndWTifaKhSQixMHhcZJXX",
  "key21": "3XpvjHE3u67Mevo2TRfeWMCjKbd85CXptbD8jbk4FVPWTsQjpgW4oR3upvqU5ZXdKAioidS9NSg2YwS1ep1mfcjK",
  "key22": "4q9jLtssKt1Sz2mYqZ8e4Ah19iN7YdsjS6cHBGvf8stPFiGNiksZptEjyvpiAaviojChiNRXPYDBZdST6PxiJ73J",
  "key23": "33bmt7ZyotPDafepRnQpEtsPctgn5sH963VyHEu1WyMXt5Fow672sgpJvatYjcEhFb1cynumaN84W8Deq7y1aXjc",
  "key24": "5pQ6APoNvYGcUH7uWn3bJEtnGc7NzG25Kh1vnohGDxUyW6VqcSnvwA6Fi61v4yxtHo3XC5cj3bMinYv1uxxQYQNU",
  "key25": "35sCRjxwQeSBEbJUhrUv9RXTgftwQoLB4rqEkfvkCosq7ChZpMxK1eM6uiFD16gc32r9tEjBkhvsxdGqKCiMwNwV",
  "key26": "2gQGUGwvaLNB3YQAgzcCsCx1ZpPNhExbDRyJpjbmD7R91GWdKZLAKS2RAsApPYAGJZPeopG3dNG7aTVkhSBAeJtw",
  "key27": "2RA7Su3h17tfhFVC2fYsJuhvDqsM3iErNLdzYeTtc9Krh6dhf5ShkxdWT95EqtE4rsTtm1w2Netz81CVCKkRaw2r",
  "key28": "1mfwmoqexqGVik3CgANCirPxTJwkzHtteA1iFiqRStMmnyBzMR7HpULfSXja2qgKqMJs1EyjBrMdWvFLyJ7pYPU",
  "key29": "4amuutXkFCC1a97kJJgwEZcNvW4V2HeRskBnuishk81a9GipHrSZTUDw2PzFBYov6MFCQMWW4N4hRo8zNEPuRSVV",
  "key30": "hzLCAZVVZRgUJdq3o158pcBabLEUdkaD4n9na8F8qLypbJ67gui3ouQWetyWgfaAULecjipMzre5j74MGTzB18W",
  "key31": "s2ptqifFPshDkLqJS9C4QQJk19piKvzfsCk7GBQPetJTwbvHMAQyhRQ4pFM8xaaSc4H8BG6Gmo5PYrHjH76wWHW",
  "key32": "5wPwRnPwQ4yKX5vjyW8wZWyDhFuYooLRbFavmdjgi9uXK3nnGUEZNFb385beLjKnaVrNLpMtU6i3KGnPHP6fxZiB",
  "key33": "HRG3BNZPopsRTGP8re9FCopw4jPHudiHsH8xap8kZce1voAF1LQMWvreXZmey2eMY12UCuu6y8ZXSKXuNyLe8cL",
  "key34": "3NCySV3nB1A3CnXxZCm6cv87RG6HobHd46J59DugrjoPtui4aTbEYkgyxbcW4WVpf7MmJz2mTYVRqgBEarHm9Xz9",
  "key35": "AgoyLhJm1zyHMbQRYxVp7moUnif8KM9xsEa9HrmqLvw5h8M4MddrWfu7XhyFzhhYQNyeBDyKfhV5EB2Mdx6RHNv",
  "key36": "2cA9rtDsPGGEWnrGithSBSytMnHvDZkEdpUjunDWrXwQk3ytfQkTNHCq7cVqFghBKQKJgarN8nMGRGJxKyg34qnA",
  "key37": "4BKDuwc8WNRX5XBPgoMG1FgnL8xoMHZMGC7CueJtr4EVqGVXuHPd3Gs9sPcN9QUUmjd63PJSsHYgqGeHY5PwSfdj",
  "key38": "3FCM7tkH4Vhv3QtK7RuCDHqYizMEkfmdt1HCyAVsXvbSjhHgnYSatexupKeFUp5Emi6cdcrStipb1ybD15VXBYp5",
  "key39": "Ke1B62WxUfL8gr7cJ7TLRqjgkvTa33DVkkuw4ymeDzspZBA1C9w2fwTuxvYzsfVXGmmX4VJgBbfApr99oagogSh",
  "key40": "5mpggHv5ZJAD1xSTofEb48L8uph5ztJybkMWXGTNhAGLf7xNiRc4BnELFffTeEzrDSjyWrzB7yyUFuwu21WN25sv"
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
