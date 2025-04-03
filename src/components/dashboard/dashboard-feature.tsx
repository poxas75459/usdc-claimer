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
    "5yvhtNYWeb9aXQWMxrKCKuDu6ArnkoKHtGRX3d3faUxn8f5FeZXrbTWMdMgxscbozPUQrXAPLrmdWSrQ3J2KCenf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9Rg5GryZqj9QzVNsXHvQLTYvveAN4U2y3bMn6VVLaSbxVmxNpnN1bajbvr5Mg8bJBuK9CSFWjAohDsnc54gKSX",
  "key1": "5Sucffvgx9yZRKAYJC1ebRCQpaumsC4QVoLwhs7xM4gENFG2ZEV5Ke2r3N9Xne4LK1ZsrBjo6QdF8HmedtkqTha8",
  "key2": "sucrvQFTUxJgV1cQq3baKGQyJjS3M5bX1u5Zp5dx6U3hKMzyqEt6nUExiEePNsMppe88hX53Y4b4pLZB146xyPL",
  "key3": "5Qeq5her9Sut4gnJss3pxWZaNFKxGx92CeL5r9MG6zb6HkcsY1dwdeGN8o7U3Waa4Andp7WKCQsdbcphkyvDaXCW",
  "key4": "3XxrRJHQ46yKERTX8qM1F7jTEYv4pGVFdP6MyEEVffrbKCYDt68u8UMdCRwZheRBcXzHAZeexJAsV3BfmWpgQU9z",
  "key5": "3qWZczYXnvxGexTz85dBxP6gvnDRf8ZZvSDf8CC9gS7nai4dvR3xswFxpBBYMxxxZrrNj4KsfgrdTG7o5VobqUVg",
  "key6": "Tq51KoxAEY8XARbT1wKFeohs3jY5Y8VfCcwJsmbEeFLiWPbDEpbDvtnX29ueUU5B3EzzTQcio7DziGKjaEszFg2",
  "key7": "pDKkRWBpcAZRGY1nTgdDKPKZECNiqnbF1sUE5GC1mBC6XTVbcVAMfGHSLrL5uwpD6J6pSGjp1H4iw4Kp6RpSBsg",
  "key8": "5yo2ffFsfbDD7fDSgWiFs2eJVj6aKx2CoQk5YZgtg26idZy59AcxRdza831RJFPkfGaYWL7biortmAJPKANVfDB4",
  "key9": "az1b2PF9VRbVor7ANRBhbwKCKvsfxGqsAr8vHWpt8eF5oAUGYPYByroRXhci9WtHPXBrr2ev2etFVKQtLeNmhJr",
  "key10": "5YuiB8phQVARF1Nd7ySScRY1p6osTs39Y6TvUZUoBKg8i36vthishoEt4cLSaW3aKGMvuntCbZAxPSaEPcmd4L4A",
  "key11": "5FtfpZMo1c97Awjnu5Rt1oczXaPBoUByZ29FB7qBDUT8vdK6yw2q39vAs18ESQ1Dc9xHa2cwLFRRz3VmKJiK43L7",
  "key12": "5MQsfVpTa9NYuAySWz9K1r1ox4JMoRRN7R4tWTNwm13Bvh8qHbcCZWZyJ8D2FkyA6TrUxAgS4KBEAS1QtDqYdjMo",
  "key13": "5o5KThmvyoyWvaqbRvyUT3U8gMKxTX4eNCXZxwrt22Ccr2QF3V4hbWiYsjGvrJU5bdnRZYWZFt1PyVV6RhWSf9b1",
  "key14": "3FPpRChnEhTYv33JjRw2cF3Uvjyx4X9zFEZ1DnzjJDBCCcwdc637g7GfHndejcmYVbhQwBC58qWK67eyAWHVCAbM",
  "key15": "4SB58hGmd7TJhgF14vHyKxLJoiT4mjKuxGc176DKZGBDXuMvi855EXjxxtGSZKAqwp8DxEkfoZXAhn7AGf6WZeAx",
  "key16": "328N5ddxqTkSEGAiDBhTuwEEQjyMs5hK5Fh8xAQZQMADRAk9UpmS18hCRdizS1PrAvrukAEhvKAEcZ8XJDeBjybS",
  "key17": "3xHJ4eJK1oYhyPqThFNZny3QND579t4dAcrVZSxaS9j5zKpmx7cf5nbR5LP6R86Qq3xVX2xsAo2NZuuBnGUSJDSZ",
  "key18": "5hrpKYeQRFKitFdVtA6df94YYNCs7N6yJo3eWd34gLgax6w47RNUQXXX5qU8G2j9DionXV5VQFemmeoSJNWqGthG",
  "key19": "5eRQaqH9DqC8t6YwX5G163rsCZFyXC88qh3V4Q5B5ygAfQia6heHmJWeLokRaGCHADAT1nLRS6uw1AR7x6TzoArU",
  "key20": "124XaDcvkoioALbioCVog4hvtm2vMDLXyZRqsDmRh2B4Ssr1JcPRbFYowY1PUFU6twXoQUbUqeRoFonLbrkEiqpT",
  "key21": "49yD1noZtRUqBzCdt42mGLjJhosAVvQYKZfDT4fddEa5MTVkM5neasyMQ24VWUxBrV5gUhdk6HfgawERS4wX21X3",
  "key22": "2VK3G8ydVADy8GerijPndGDfng1uTQpzdCdM915YUh346WKPvABGohPUhJQ6HxcxAY2xcFiVScWHF6bBHRNpihQX",
  "key23": "3h88G5kyQKegNwGadK7avPQnmQPYND66PC7vCufYHaPFEjtwP8AB81z6AczdKm9h3fv1Lpdn1FJwD11uGM8dUerv",
  "key24": "5FtXNkzj9tHP2qm2U7kDBNNYaC48ECYxWB8GwedHc2BvNrfHS3Hxt76bQ34ehsHixywiiPStqUxUEsF5todbx2bE",
  "key25": "5RCQoKVAZBZ9aHYuqZDsfEMxspisbC5AqXVykDJDpiHRGvHPkDsNy6iHEUX722eoKmGBTgNsyaPXgr1go5om6XWK",
  "key26": "5P8UkJGLdRT44WhN242jGvrRtuJSrhoWCKYKmuUyUjAjNjq4y9rZ9yLU7Eko6K1cX4mcmga22MqBEKbbY9Xi2JRc",
  "key27": "57voPp2J29CEAMAg1UnzXWmRpFnnixpx92NMbont7ATVk9GZNGQHxQDmnX2ke42fwDoaKTCvg3pD3QVGs1XuQVPW",
  "key28": "1284N5nF78jxcuXdj29seFia1itwZLtdC47GpMruzJB7LnxGmWwNGdMkaHFzF73eHSryqg77YNYAoLNhf3gQhejW",
  "key29": "5EdymEzyUdvZb5yZwEBvu6B3kwZAj8rJkksoo54ZHFTf9Lc9bxtkEn7XSno6ijmuiG82UUdKSpsNQK7yVUFLaNbb",
  "key30": "2gitvqfmnrLgMSyadkZxcXc9548soh8KWw1oXTH4dMQiSMe9bYMaP11xxojKcThf74mR36LMQm9N6Y794WPA9vxQ",
  "key31": "4ZMVD9WxhYy52vD9tnYdDwYkLw9zvFbDLWNRbrrp1V1ruBddJeAp2Ezx7fHLo6tvhVfkLrnqaB5XWaZi6Kk9FCBh",
  "key32": "5YeQx5LWnymAWCXeRLW6NDXdpS77aMoHg4Vfv8t6E7ME4zjEKaMbjvnUW9ntR3P98hRa5xpQmKGDBec83tmhkKfa",
  "key33": "4Pb9TftTyhoSh1poPrPQNEzsfn95PiPc5qBa1tUt77wYfdporiC38RRwPhCZve1RyE8LUXceWG3uyWQCnHy92EBr",
  "key34": "3DT6wmrd7JRGRC3CWFgU5hdRidmM3Stt3MHUpLHAuffnQBCvgJ5Ng5tFnkHXfuTZ9GwSHP8D5TXzAyaNT5FxW4e7",
  "key35": "XFfGzsHEbkULVwwhbdotTu8nPGMLsdiyuXYqkyiR39aS2JYgnukPxo99pS8DJeXb3UcKpbYadV6weaDanyqyTia",
  "key36": "5a4Yco2ESLUGbAYC4diLwxSKbqPgB5iWHNTLtmvmLSqUfMpCm7Wf3GTUnoYmbo6Dxr2S9Rj8wxdVPKc86LhYT9Mt",
  "key37": "Hz34KFNdGGd3gKey5aYkf5P2rryt8fTTYm1WBPho9zr3LpHtfguA75d2Acn3nAmS2NnxP42DDdw4emcjnajcnpa",
  "key38": "5C3or9TkzDifcpomhgZbr5mpARo3uPFbztx4CjQhKSxddW98LSNbSZYKowcFb8fYGccyCGajuhwcZSgcZQuHPDwp",
  "key39": "3ihJpwmRvFaac32BX5ReKkRr2msFZcdDk8Jh8SFzjQ74MGSwr2aoB1VhFgWRtBFxXtJg5nTRFM7Ds4xA4bfVW1fV",
  "key40": "x5mvhdUMLG7j7LNRUDUZ7BgrMTtVoQz4pZ7QHau26odr4o1Qbv9qhfNuXSyUVETFiyCkUqLgfc8jxzW87ACHQd6",
  "key41": "35aahXymS78qY1GpMtwgAfRk331aQgnc5ErdtutXo7hCgndsWuKhjcjjdctcWRVnzEPkci5TB6JbYd2A9K7aJqFS",
  "key42": "2uM49vCGFnAwPC8x3FRPa5HYRYwzmvk4Taj59WZ6RALKsmWFAWizuiS7cGdxmKMQe8pLo89nZzQnR8hGdntK1pjC",
  "key43": "3fKEvS1g9UJds2JUUKRz2j1ewKRB8kpTobF8DyVKKesUzbPmG6ZbgU5gJwE8omKMk7FmuMd7pRxzPEKRJK5GhXUb",
  "key44": "3NmJpwKt8ikHVEKWaxSpbXbYU4geRhnpZAj2vtewQjNNKjUKj4QCRLrWJicgfRPuJzVdH7UeGBhsNetEzzGwujiE",
  "key45": "42BKd6uhkMJhb21zpL9qzfaEpjWzhiTAdmeMiSzyMYXjCPsh55d3NSiB3owWy9gy8pSaUAxQjzTL2b5fGXHBZjg8",
  "key46": "5pgawp4tPSGzLn7pzuxukL8c3pnuPBj8EDayV1hhJsAjhnDEYe9anggpQvdhRY37X76fqr1TiUd2ViBeQ5CeQ3AT",
  "key47": "4UtCLa4vtHSbtchwpzHpiGyxTLJysZkkYQUy1TUYt2nU6hdAjKw3Tb3BwFrYKHXXiZkStgEesNCUREaRrcas9CAu"
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
