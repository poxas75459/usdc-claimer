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
    "5hTYrTieEiG1wiUxQWm8gLu26pE446pmHGFvQuPJnAB3XPsRqJP6prmGatJHwhk7XQXX4EasQ1hEkKUeTmQQAjF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3fjzt7JMcwye6CBQNEaoSTm2jLpxtjARqik7EnGBucYxohhrwM2HKxKm13ZKRDVvkA16wzwPExSLA2yENpEbRT",
  "key1": "3aVK9HwAvzboRMRQxZiyG2YrwA2mHn4AykT8yziBdETW7TpXAtkJVvV4VGUZ2L1fV7uwWXinL6TwmmQLz2R7tezn",
  "key2": "23oAH5mcWmuFNh7dAopXZwJivPT3ypdVu5MDWgyhqsz5MschEMEYuRDiFkW9cUS2HvLhiU3npFcqT7X6J5YFRa7u",
  "key3": "5N65Nnh9akbnHsQaGtX1iSpP7YNr4UFGdQ1CamtKEWoxMNfoJ34UKFUQJrt1rfQJmqfHXSUYsj4pxbbBWbK1fFe8",
  "key4": "3tF3WfHjaiZ1oDHPkwsPYJwTMikjt5D4No7cCMRYYgug8ZEDQqyxC7Cr1DV9geQRgK7YVYKJnaMtD3nHKGUE93Hz",
  "key5": "4SxKPzcJEmcG91zUbBfEaERMnbfGct2zkyhQRN1dsDTWuJkuTsJvPMD4dvDzJejpHsG5ZdqyY87G8n2uPMstSDRW",
  "key6": "4a8zXCSxh6N6Q7AHsA1u1finjvrFBLjaEZREDa6gcpSCoWLn2VtTeFsAHAojQxXtH9K6dsFLsBRZME6QZmgtX4Ju",
  "key7": "4H5xCU1iCueCGEh3wtSriYtm6M3N27kQpBiNb5j8XGZFD4apkhfUXfBXktrANPi8Qj8e3Wpxc5zbumhaHtDMjhwG",
  "key8": "3mp15NHuQqpGAzjdSv5F6Khg2TJ4DSRYnxxGvoVcFdAsTkKgbZYZ8gP1T5tVYsEiVkv4opvn4DvEydDKvgKwcxJr",
  "key9": "2iQ5YLJ1TjTXfGLZHz6zARaZ3ULaoTrRnMynJpdcCUrf6dHb2ptPYNJCFBPNfYm4aRiGQEvUGq42WGrEYXaegCVU",
  "key10": "JUi9cT3rNw9rF652TKsJgeGo54uAkyUeJWW3f2azjt7Mkyg5bXF4pjXfDjiY1qGKvf8Ty1Q5A5Pz77fXvZZP9nd",
  "key11": "5hhrAVQCRcozgoJqWiHECQHAc2KHpDpjZ5wgNiaGMiwJo4p5qvofwygBWt13zgT3cDuYpQk4MUa7jkitTTZzFT9A",
  "key12": "LAMKF8DnrZQCEBEM4ELNPz6CYyK5uL5tNzQF3gJfQ671oZP8ur7KKTvhb4VtZejxnKtowUydPrN2k1GBMCHfJfm",
  "key13": "2D1xpDpW9xoJ5ATgQM4sMGiNChm4e8aFUo1BPHpdK4McPfDk3Y6W2t6V8jNvodM1sutV7rRXAnFmXK48qS6TV3Zd",
  "key14": "5rgBSCpFmbKry2cKTCQ1pVGcHaUqyEdrMGJCU4CaGyaHX1Cq4s5sBGh12JDftpQmTnjvqGwkY3gEtNe5BKTfnmuT",
  "key15": "5Gs2htSpncZoFewgQAJiGp5wAoLL22iW47U6PLVresFPHHKn5sTjfCbkfQfF4GxMWucvSkT13VKYWud3sPRZ2qBq",
  "key16": "548ZcL8hJtYMHuukSwfMCsqJiPESbwCWp4rD2meXAjjgeQ6S7mwB1PxqYLfSu9M4r8M3i5wLGiV2e9E6wj9gHhxB",
  "key17": "4JSTiJsANVgCu4gft4ACm2yJ58WFgdtsSWR5zVuM6Bi8AhMFGRTgfn5j6xi9Cq7jmdWHNjuQg6PHEmWnxajTZbye",
  "key18": "5Y1yoJ8HB9yhzGfdw1x2PquQxxq4ZBRvavGtUBowoemENLA5RP12ZfsUSmxiDFV6d3UCzge92zySuHeGsRkjKu5A",
  "key19": "3i513VKZrdB9fJNscNdgoXDAtfiLcusmQEUYZQmTDgnqkHig83BcK3USUJahRohCSsWJSvLN88u5wqeEwJSDkyJC",
  "key20": "k9heinsAsn39hM6ewsKKmhrJbxzJxtwHP4rmED8rJudiChrE7es3mUqymtDoSxFV8E1wgYYvynUodjh4SgVQciB",
  "key21": "4bR1QLxwMSvRa8d44scWCiuDCurZWxBxQaNQvLdX8tr6sRrZ5PLWemtGPCPyAoofzu4YUUg2oifT9itgVBnUv49o",
  "key22": "666JfbpaFVt4ami5pZkVostZVqn3MNXQBWrHz4tk1jVPvNnKWRU2nnSsACDZ4fEVJaPELNuPyZZXHto1Fvt9zF86",
  "key23": "4JZ2cTPRV94ECrTVXSzadxaPzyV5HwzGmamyAaypFqTqRVqkvaGSNVdJiwbsGvMeKmYEZVcehGNvAXx9fa2cqoV7",
  "key24": "34SbNqDsPqtARPfPBCBLn2Y6AZaCtN8NpPPuhM9Uo4pJcCaLFup3qATZU7XUzpJxSXSRNyuZoWNYJdDHmQm8WHPh",
  "key25": "3Z9K7HZKxRWMQJasv68QraNLU2ww7caRx4S13W5BtH9DuocggPCx2JJqfyNtmjaGsunLZ3huzpeZ6y6Hkpvuoxww",
  "key26": "5mf1jyoc1eSJg55pi4J9MpqYvn17RKmZa47hMLw2WS5Zn7Rxemyg9CBsy87qQxfidozZrKqK72keRJeKg3crixtP",
  "key27": "5Zt5aua9oZ47x4fvnZGiPFe3tXoHxGj8TrdXaoMtC5u95JrgnMrpV4AXjq8z2VoMzZiiYZvh2PSFCVD47yQxJpxc",
  "key28": "2mhAoVZaRzaWAeCSbJYHnUhtM8qwJPPKUBbQe3cSNrNUseieaEedLiL8Ahf5PF9wwD5VMjUNL34NTW9eMyy8Cwz3",
  "key29": "66f4h9i4aUhJMQNYCtndvg6AwKaPXcYZ2n4xzRhSzXXkXPx5G616GCoXybm3PEwVe944ifdPzQx1y3CsKtZkv8pR",
  "key30": "4RrVzChmb32BGNbD5HUz6C3PRKnSpQhEK6r8eZVA7M6xxv1AFiUyuRjrXEy3eyPt6ipCh4TA7me9vF5xdL6hJAcK",
  "key31": "4Ky2G1TtAsDeTDfd6jtrvawMceuFBnB9aBVmfPvtBrf5v5VRNCCWWg7dgw1HVCidH4inRAwAX6EsXCbaFJZADiZb",
  "key32": "4mXRw63ukEy1vcNNN99Eu6LZQi6jowEffNyMj8PMx5yNgSTdaSoc9UeKNdM4ZruAGiXacPp8Z7yydximgcjEyJNR",
  "key33": "3DqkorTJYGtTZwSqH6eEEQfatJwrXr4k1NEMvxsu99WirgisFbCQe5vyjd6a5fnAMgfNyXBqLxKAk1FH1LFksvSb",
  "key34": "2cafhd4efMQKi5QojKYtFF5r4i7MTDKZ3aKtTV6rbdDL628cHWEB81T7TDRT4FETqgJhvhQYHtKm17Ptm5pDLk93",
  "key35": "5L3PxbVn6QLtg1GcDdV7p2vDvRW8nDwCNcamEBcjsKv9cyNbR632vSCd5bNQeFqqaDohcRnmWqp7ro39brB3GtPR",
  "key36": "4g7BqLQ5vgK4JNKuRPkSwv2RudhaMbgsJEEF2Dp8LVGdVtRzz9518BKpDCJyX2n7dgbpFDHn3A5XRArjvY6z8K4M",
  "key37": "ix577dfxJL1iPfnTfiVnFsfWbAm93D1aaBLLDiBUSch15oc6eMuCAMgveh2bUeUT9N276TNyAwA9CW7SaLqZmBP",
  "key38": "63JRYcVKFXqhL1BvHYJdeKgbJkQ4kz8HkbvjBGpYLLNu2a1uN2Rqp3z5t1HAKcqwbH2jgXnUFCGAYfmc5FVK9yRu",
  "key39": "3QSESsUWzoYDuxZMX5RRoxvh7GjwFGRGodeRG3iVFnNqX7zypffdFsBBEDJLNXD8bTgCQEUD92DCSxsujDMoYeC5",
  "key40": "jJ69rHPyjNR3ZPzyEcFZQHfozLFfwCRV4fJ6QRMG3oBKNLVLrry7w4tC7sL3ZT7T8q8g7pqD3MDunSE48KfGzbM",
  "key41": "3nrfda6ft7qDbWVbUU7zTf8vQLx6gPCY9ULF1BnUcXZ5fJ8VXMcc53xH1MLc1983uUn1aGTVKgSvNYCWXT8CaSiB",
  "key42": "4T3rzfxnmzm3RU43mJjwHEcYcxsdWRvP4Bq5XoT4tsaPYFBsTFrRyZDpXcJmWr26xuSjwwkgZjrcxzdHktA4e19Q",
  "key43": "4yCgLas4tXK9toAJT6bMDYumUmYQzgiTBk7ZAbt8yXNUg9FStomDpBso5FFcWRweYVwDw5uZgXKM6D511wzskLH5",
  "key44": "XqQPcvfe2VN5FttW22w56v65RpacBRcLrcxdbdhTkguJQrZhJyEUDSabLYQELMSdYtDV55wXFfyKhWC7NqptvFM",
  "key45": "2P3qUgYJkXYgjFB1mvFyhwxmFuSCNLuAKLbUHNto7g3Sr9uHzEkJq6LdMXYhxA26nSw5GsohDy79w8w4HEnY5mjJ",
  "key46": "n62QxZCWSwXqWgZTYQkx3VvnWFa9szJZxp1xCAmQz1VmuADM3TCtYHTCVofbTJBJViVokx9QbXguNLmChq7zPXH"
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
