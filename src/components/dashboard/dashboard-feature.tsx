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
    "5xS6A8SKVwh2XhvZprtpSPTzinKBuvZeHSwvovBtjfsyLDQSkpZKFmGwAm6u5AcZ837BJgCbEdCqQsc3v6Na6u4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1UhabQ7Ts3nPTjrtg2GAKhXYxTjt5zNaaHozWEG8ytYjjL7oiY2oc1968LNAVajMC169uTEMVyGuwJCQnGS2BW",
  "key1": "43S837QR4HHjAPyugcNtLCvvmUTkPNimngeWVigDsEXUDExNRX3QQY1JyQPe1yuy3bxukc9G6BdDKuAdTnFCDGBo",
  "key2": "iiA3FWzacFprxgHxK81YTQ2RH8iMLJFtH1kewAeqaMm7RRtZ5DJ751ntsv4nktSXqVvjvjsZLcRLWyeVJkQSJow",
  "key3": "2p4hpxAiHfkfZ9k37fEAQtrpSmP188fbaFwyzrVzr9XazFgh6xRDkEZhid8WPXZpDG33TUuxvWdS8D4MHTmNSJvP",
  "key4": "32AfEmXS5aiLZQc4cVaerqtpMdD4ijYW6U6LKrPmYD1HDBbxGPFQdrcPQa6XTBwrSQff3akrmymAqQVj9Cx7kmVo",
  "key5": "4rn9yU5GiazULmiBAVTq5jX5tcJH97UrLvgykAmXBSPYnEfUnhWXXDnsHqqs8AMpBS2g7KJZgvxapZh8Lm1qNhNv",
  "key6": "3sx8epF5g8Jgb35YQFuXUo26fmtEwwdpJwWncem2eBrJDpvnc3TASsGhJajrNnDzmwEB1mqFNQh3DFSwpuPATyon",
  "key7": "5tRJJckbK52t9Q3Y9LYU1FtpTZFGEswFooG9j6V4fMQ6soq9fHu7Gzp29vW1xCK3ufPjeNXkNKemSwGshN3D91tu",
  "key8": "4JGeShZ9nngARCNahAa2GzG252yGRtZFZATE3cdTKiRS7YEz6YAYjhAeLGKZ9MmpSBbGwTTngRWpg6dwJQN1sdeB",
  "key9": "55scpjvWj15W44yZCVw3pzgVSPJkvU11jnqE1qG8PZeNUsAZNR2QCTqr3wYTp4DbXGUCDcJkifUYY4Av1ojgqdi3",
  "key10": "5kszrKu9QFYRYH2nZNmNankVUXYmy39naQVFeYcezUQ9X5FNNuyTVj7zEngezJ3aS9LiSSHycYRguYrUGHSkKXpo",
  "key11": "5KijiWRaXtyxfXwQ6s4jKPDsYtaoH7bwNYfPJX5LAinQ2Pb1CRVrctbFWegkapU6gJAQemAdJ5iZf174ck8YhJCE",
  "key12": "4FY2N25KFWN5qbxzyuEs46SCp6KDLEeSq16N64vSbZ1AqnYgPPhB9RGfLoTaLKEbpJvsE5dhSzWddtdgdW2L7AcL",
  "key13": "37qFgUtdiafHL85rapMG1adiscULTHztxbH8i8nP9e9DyVwZ3JxisRWmfhXARS1mVBWRpGcvkeJrYXxG7PnQ6Mvc",
  "key14": "3RyXCwmLWoXurTnKQBbQRD2ZDcsG68rhfHjJgb9hgaNxbk27wEq1BZ31q77sinXuE6EbHA4ta5N8ucgNDezP9nxj",
  "key15": "3xb9hwkZKF1APYzxTd6MEkPstCRthA2GDrPc7DKAFm7kC1cPSFzrEHC9qV1qUDcuaCKk9My4RnD7gBtM5TUTTB1d",
  "key16": "ddTecZrriJRYvNmkUZ6nh22RDAFStDNycztYkeaYJkBMhra4ZcNtvPDeswfLWnVaKCkEKNfiHzJq4Pia1Q4ucSB",
  "key17": "3TEWM4RwqEQyXpNvKuiwrRTYfp8G3ZtyaZcbGf7YUaar438PEahkBHLRVh8MctAHr1T3Ev3uDFWNfJsA9PDS446j",
  "key18": "Zm1Pkrt3nDuVJzdXEH1HUzDi9GgMoCjb16MpNXzNpSwaUumK7GBEpvo4CsNe4icbVWjzqAD9U3xfCna9nQsisVp",
  "key19": "2FEcSKSjuMGEs8VuH8N9kdh56aiUe5HQjfWHsFZUtiREqGPC5LaoWtMp9pjtY1VEWNFX71AVT1wsEhT2pht6VU6s",
  "key20": "MbnCJ7aNyUfgjfyaP2LcU8bvt9nCJrkSJ1n4KQ9twStjZ7Vijsrntw8hSXqfZH94DXhxDZHtDaigKcoubujEUCY",
  "key21": "4puydAA67UTWdowVh1PRx9X2576GGx1iKHx8w9zhBSr3L1KoCSAPnNTG11ybVZYVL8yTXBnB3Wyy93nvoFS4cKrG",
  "key22": "2zMS8K7bK19YymmoVU2n6makPQci9BdaTUZCQLkwadsesukLPqPGwyu5R8JigJ7Qy3dwhZMCng8nTDBmxcrqDYMz",
  "key23": "phLD4c5HNHVWkpgHtpXxzE3XoV4kmfedykPFCURgs3VHj5LL1KW9TGJC5K1c5Wa5cHQCG7SkqWVwKCxhWgZ971J",
  "key24": "4zwVexfdDnb1k13QP5VXVjWxKTZYJBDYDGy4xSPVdnfdW75kYGfoeHkShzrDCxVHXFKtw3xKxmASrU95zPooQEcE",
  "key25": "5Tfb1mjSDEVnsrpmA3Mef98oYyTbWFrwpHLcLJe938JG13CGtS2Z7Qqtd7r9PAbPCTGjRaZoRTagAi1mnUaMad3t",
  "key26": "3a2m3ckQusCE1NmxKJwPWPaHrHyAK6KEgRBgWyjy7yPQPrr5VE9Kvk2bEhwpWbV2aSCSqHymEhd6NqktfqJYqrdJ",
  "key27": "XKVEiiFjDxiAEuncRZvtRPkXSmtvcQBTitxwQPhFjbwrjU1ELCh8JsYJoC9Cgeyo1tDYB16KQ2Q34xUiZuoasDw",
  "key28": "2V9AvfV8QRmXC4KRAyWFWbEdMEXdDZ6rPqBJF9J4ZhMYpkK9jRrJbwJQEkuwYXMkVjwzMbKKWubz2so1aGoLTc9r",
  "key29": "2s9BoAYF4cemK3hNGPZhhiY5frhNrDE9NtEmbTrY47jPANG75vG3gCJRHJ1pJvfxHoNAP13qDJkXjQchqjUJQH8R",
  "key30": "5HMCve6kXSwwNEX8VZnG7kXwYMfonAaCbMe1MbT5tyLe8mPFokMqaLJ7HhKBJ18FBSJkei1BjJMo6xLfa9SQfQw4",
  "key31": "2GqJKE2wvxGb2883r1VWY8t6tfcnHyVsB72qmHN8CXATU6aUWxhAyvMs9fLXfedG1z4YeRoZiwZzH5ieka1c99ko",
  "key32": "26eB9CSL7irz7KnUzdnaEXxhFUVRrFsCaPk8q2eAZHBVFQ1gbv2a7tCDqrrkXGrkpADnEJ4YCKFE6akzrQYow1mL",
  "key33": "4jkJg86B9H5dgk3GGPWxDF2Y57GWbkW4s8AjvU86DQwRL6SYnDbuStjrDq31gGU8UMUQLZBHf18wPjBn2ZjQnHmc",
  "key34": "23KVxp5JRpT2eu7YwhN2qugxWzEZiLQaAW3WSk7Gc7S7Y39QhmXM2R1wig6FzYh4eYo7tZhHf6Zgi2RiK6T78RX1",
  "key35": "kjxDZAWUUcQP2fQ6q8WafrV1Ey2jwrVRr6njkuw16wTSJoTZvHqZpHE1i3RXKME1DKcqZhEtufgyLWEmBt1cLTY",
  "key36": "45VHcnDrnMpEjBpfpKTxgHzuaWgrkGvbLLUgqKygAiTapy5GhTSkidm8aCsWQqBTYPgBb9yrN6qbQR29YsXD8jpQ",
  "key37": "98dxrzxS7Lt7QSM89X87he6XuoEu4LETHVVdNaonZc4pwNz8iHzAoc53BHdjBjUn7G2RNDUN6h3h2ojB1HiuMTP",
  "key38": "5KgEhHJcKQa5QWKCbDqh6rMJ2cttwkS2poT3Bk5dxL4WQW1GFodfgK2G6CoNFoRDi5Gv8drnVJYWVDMEYnzBz7bD",
  "key39": "2tuJYngAH3YTwXUrwCdMWDXJfVEiB5CxsBpSp33LickM81rxeSYaW1erS2dS5Vew9BTG3ixbFMZhgkMnjDM6sCRq",
  "key40": "3uPyfJKVe3JERuKPhR4TnVMr7YhVKLUa5i81hjCS9yQso9CWm4AKcaDrQCdziF2KVxczp88jjtBG47JJqFzsWtmo",
  "key41": "3dTy8sS9MyT5rGusAnSAJ6KJN83S6H5RkQujWNSxcapRxWmrQYeDBDfyJH5BpG3Wndz3B4GJS665YRGVipCzAzjp"
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
