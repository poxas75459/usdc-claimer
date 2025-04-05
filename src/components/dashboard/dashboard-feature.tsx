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
    "3FhsPpRCR2sTUndjJhqV4VCd5VtNWDqiyhNhkswwuwKfq8PM9voHvQKHgTJFat6oU7P8SjmLY6vM7Y7YVihfJ9qD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63K7T4HvcCCLM8Jjm4PeMcSCFTuW5cnR4EYaMKBtZbtS1fhAxcVZcqsk2jfn8ZXTphgENALjbYZjjXN5Kw69bwA9",
  "key1": "tLPvcJV56gTcoMpg9FQe9U3FHGhqzD9VVbsYQKZv2eARyTC7DcBY3dW6DwH1eqQMgXdZrCkQhwHKa4WmmGVdFns",
  "key2": "iioG744yRs5J3PzzZh2tQKHQM33WiCPf9FCokQZHB1s2VHYJrtFicHB5MyoZANTLqiiLtEuGhZy1BhyAJqDXxD9",
  "key3": "43DAtW8aas5yPt2JFFpi1rioP1XAvf7vk17bp7NEDd3NG9aAAMpN4jPtGwAzSuNZ22cZ7q8fEBeT4NDmRGx7Tfk2",
  "key4": "jgyxrqVyDtgY7L4vrnmjU9tVPwRu4krp9XaL8guLpCSbWRydMSWAZ8bkyUbbmYFvfNNut7AmbXZNTgiDrLSjrmf",
  "key5": "tkUk9m1mpuRkUnpXucJoYhfGH34gLnEnJTiPLA2aK94fDmFVsSMvBLRyULGGppE8pCfqhdmYEaS14Y8e9LMdYJC",
  "key6": "3HeHzGZcnbMFiZXioR61ZXCqNdBu7XJkK5sULaWhAURQFP8i5UjmdN7QCvMPCvb9fLvXVEU5Xf3YbdkCBsE8WJM6",
  "key7": "5XooApE4m8fw3hVpSr2EPftbQ3LGZRgdjo3NCaSaX2b8j43aCZdXaJGgmKEKw62NBLuUH56V7JZm55UVYi2eWwuR",
  "key8": "21r6HG4e81XqcopMpawByf2AbEidutvbDAwiuQdbWDoLmsjpcjVm4FxW6YeuBLyX4r2iqy3LADjRKBkW2uiYHiws",
  "key9": "rgus7GX84oPqrRPKRmiDseVw2nP2jMNVEmKybBz1pDtaj3ZayfuTG2CXAsatfcGSeBCZpn6UjEWg2sNE2hqgXgQ",
  "key10": "4TV2FMbQMBBuoUB6DKtHiz2XFbncXvzDiyBF8N1vziXtcQcyvngmfW6Djh9E1J6J4VMQY7hi1eWnmFpr6N2Q4uvg",
  "key11": "3WqQxqU9RRnC6fGRMcU76Hjt3GuMS2gwJZVu5LmTbdEg3HvEG16asC26RN3WnZHanKuwbpfi8m5MqcoxbtBj6aW5",
  "key12": "3LqQnCA3FYD215Hxwmi2VHpzz2mqPfKwYkwDCKMzZLdMpfcGHvvvBCjUDxDqWe9Sx8aoQJa2czCRhJA5EbhDkBg1",
  "key13": "3SSygg45kQaCyRva6DTKiUHkcam1wBquogRCY91s9Kae5AQANnQUJGH1CJEq4nqJ4zwfjgvXFPCquBiQzJwkFyYr",
  "key14": "1ZDXRLq64EeUJPoHrodLy6n9mNmR8ttTFSinLzZCj2b3keJdKWUT32jJFPum8Uqp2T8GkEBesefzZezmnakrSut",
  "key15": "2XMXZDUeuLqAPL7rT51M22tx6AEmXFfBmtiuQaJE1ADZUHN2ek8Xoh2kqywXe8jt2Mi955fEh8TS4f7eLmvAtj7M",
  "key16": "5dkTMn5Mh5BJKFsfeAE1M18BQv9mSC88NQAwFpfKpe6aEdtx5WxeZkN6TgHkfxrHvdUaNuXz4dgqiYBpd8thXSEd",
  "key17": "2QbAf2iTmgdYBvSEzUNDKWtYw8NqbeWiF8kTkixZ7KiiPdJyt46ozWAbEpe28p88pSKKrfzRMefbzLBeMzz3TYKU",
  "key18": "utrBVgvrXMfobQtoEeV5PDwkiPDhnmk2DnwXgfywSSRnvKeaZfw2MnkFp7QgZTm8786XpvKxWaWr15GTPkXCUNJ",
  "key19": "48d4XKnrv465B5vyHA5rpUZq45BftfcJP7XLj4h1iHiFZqDU2Dx59xG2RMrnoYmxY2U8CFB5a4MXzAiqo7QPYkTK",
  "key20": "5Azs6wjPEJ1ajhQJGfxxavV1N7zdneLwGLjX23i8SVsEcbG3wLczdsGPwxqNshAjccVD6m6As38cwvg4t8p46Nrf",
  "key21": "CeShYy1SFU1aNFNFQk1ky4RNQkzLgcKofJRCdqPA3G8DFb4o31XapF15SKXQQo7zL6cHudL6AnD638GPWcnHatQ",
  "key22": "3bLMnwqYWMyq98iecGrR7i4arEEnGbSVdo5GE6hWmybT54CwDPY1PW2nXqvKPvjH3DxWShPDnhYuA6yDipfwXPz",
  "key23": "3MQChQbs3fttgs1HJ69WWaZmx86ZGvc8vMNVSFJkJDQxJ5yjhWMTQME8Lja4KLo4LBNZtr1BjaUqK54eCXYd6ios",
  "key24": "4uYLyYirhcHc3uLxh6U1cJNvjFcnyge3XLNrTP8K4a5pE8hh6Zeh8nTe38rexfDypssE9BjRwhLByD29EbVoimYa",
  "key25": "3B3VGzVNMw7XCUDgyFQXzBU2PCe5nQ2VHTE1TLTKefhD8453pBgBfByiKY5KheYuFdp6a5sX4akJ254gVgeGj4Dh",
  "key26": "3ir5dsFhSuxtaFf7MGSGnX1RuFMoRHcSCPxCZx7V8eQvt9LC7UZ83KXdhvziurct46fxqHnYkBPbnidXtEKZNBWG",
  "key27": "AwfQmvV1LVAWbJCxi5VPrpojxgUqDW5gpGK5mBTcirPTwAHvUVVpQnYnR2v455M5a6dhpW1TPWvFgSyptYvGkLd",
  "key28": "iFbr9Qh4Hmzf8S7oxepDyi9GE66Bhy6ZE665BknjEmH1kLZFi6AfS54orwJ9VZ84bhkj8cgT7AF9UGkSkhR2R1k",
  "key29": "5GmTAPMfvuYCux52yVkEPBb8qspRLbudiQbrf6RSGqxCddS33WZsTZpWivZipzM4ptoFhMhrDBGfheZHC5EuLEQr",
  "key30": "DL11PSFsETUuWhjyZuteVvNpeSE9CXSS9cyK29guNsZRbddYQfefD6VqwJwQycHjiMHtqx1gjKzU6BWmSydhoHV",
  "key31": "5fcmpEcm9C1yC9wbyBioDrj2BWYDUUCneng7KmAdj6cxieqdAvMeMrBXMGgkmsydZ5XJLP14QfkTJVCmeKNYxxk1",
  "key32": "3oampz7326vs5Y5QgNHjRUYv9EE14t8aAoKjeAzB4WnRVmJxieCCNB8hBuXpCexB5PQc155Bmwmfwj1R1PCT7sVe",
  "key33": "2D4c7HEPWa5HzfFBfrBaeBZUAeVMHR5aaumHDRp9QU9GXLG4TJoGGyqPwxDoSx1sdjiia4c5sEUyijdG4KysYWFs",
  "key34": "8guF5UZjDZUhZBmzo71waQji2aArgffH7AVyew2QNQoKP1vHjHeyT2bPmXDZVGSxPGiJkTh4GJYUNL5waMe7H9F",
  "key35": "5p7LX1tusxUtLQW7cCyHGeRdnVPzSdvYev5w52mXr72f9zLtuzqyoNrjUCmfzASbF9cMmvmmMsgwB3QtdPpWfxc6",
  "key36": "4GcsFm4L2UrgRBiMZwKkpbTVDKDfU5WB5hmwTi1qMGTwka6nu99XZzx7pQWmiyiYkuhSvFv6nGUarcr2RApC9iZG"
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
