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
    "4uTfNVWo7bKQXBiFoLa3QYkducwf5jRjXT4nf32qZEnJHik9yVk7Ef6RgMt9J9xr6i9HDH3ECW2gU4WEfK3PH4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXwKpBNd4KocZBJdWWLZKU7RqY2nmDNu2b7zoGFffiPeGbQCAW1mNAsvgUmLv8iimayY3h5aY2EghpnxvcCHRTD",
  "key1": "5vTeYoAq5RJ8Wr3E2voKb43xjKodbQLVqm7HyqNbuvSrapRy1b2eHFB5K63BSGGqVK73xPq8uZkAkarjxiZD5YJ",
  "key2": "24WuBE8WbirVV3JUoKFWBdAb1SeAfhPkBJHBhWgeXXfeiuojkp9JnfrRou68cTRCj8V56ZvwnQzy6qHRt5sb9Qrn",
  "key3": "4vcU5VL6jw3qeYYYFcjz4jvDbs1i3zc3A1KGoHV8FT2E8VaLAaW6hjCeRvi1MzyeoMe57LqyeFoNAfqj44rc9vbc",
  "key4": "3Syi5A1xfuLnt89HAUPdneptPNH33KryxLt69yJmrQRZSYnJET5HCRc2cELdFrxDV7TxqEhaEXuvfBKAoPuV9hmx",
  "key5": "2mw73mRHP7u13iLvtkzxgYKZKqRMNsMq93jSszMABDPx8cbMQkQjEoHVCS83f9DeozwiMN8EEXt2sGER7axdku8p",
  "key6": "w5TwVq3akof1xcqu3egcywThgMKCAfze91LVQ4hej3eEjeQDWpuaPHVz3DGum9Fg4dqWpW8uP9Q63EdhcNMeZSd",
  "key7": "FDG1xW9HWNDD8pUzTGWGx2SsLEmX6NVZDHZmFTrPHa8Pey9GoaPbt6zvVUxmJkSSwPECxjnjLUSUXXFUN4zCGTL",
  "key8": "rgq7BruuQuVnUfJh6W9hrL1MWUFAsJVHisv441gwMxqsArYzNt3FCj2G4PsSMVDg1jBKGzcCpPZNJoyZq1bcyNx",
  "key9": "4iBxYPP2z8JuGAsKquU7LAmXiXDS1GUd14N7b6gP2qMCDKwzjhehyJ9PoJzQ5uj9NT7phyhJ2KDDPug2HUKm2RNR",
  "key10": "y54tLdeQELfWcnGuCXEFeCX2ksCT28rhbdhbmzQE42DKurB6Saqxz4ZC37gLoNnSUdnSgtnnJQ6eZmrKAE8PHAY",
  "key11": "9yByug14u8x3YwMqiTDfwrqxLMLeN9zi25xWU6THGAbg5kSDBrd6dFotCfm1hsKXohm6e2iqQkLz6dD4GBnQ1ZM",
  "key12": "S3JHzLLWQ9fKsS6cuSNVmfHzGa83XyQNHcmGotWJcp52eYAoa2gGeBJ3bzJzEbGRMhdm6CLbsiYy5CozMM9oqeq",
  "key13": "457MiU192NdHaBPGtxy2LBWrDs4WHU3QKFaeJgQQWNWcmoLGXbCo3wu9WKipYWhdrZsRcCn3FAcbCGr1zKNXfeCW",
  "key14": "2scT6hZSHWV6NJGdsVLL95osu46nTaYSU6cBRMjp1yWeSCecqsLMruQ7ed12t21cHYG6jNMBdbW1qqdnpGoReah8",
  "key15": "32Kt76kbZ1Rbu6r5XZ464KJ5MDmTaJgJVnHGzgdxTgEhNzURFvw61CVgX1LMocYW47zUgDq6YzUKEWr6ivLr5Z82",
  "key16": "5MhRhZcXZr1MoJimzchia4mWCFTVoBxGFPHWKAnoRbcd8ec1gQ7QMCvTARjrMeHxi7KTtyzfKaFckcJ1Q3Fe2mGZ",
  "key17": "zJaGectbtAXRWiLdJ1eh8XCabXmebZhYGaAoCmwoJm4XiiXuMrZWWA1dbqFnm1mxhmakava8hwTPpUYegRRc3jX",
  "key18": "3RBtNjtRx2qfRGEEGtFXRHiJp5kGUKmkDyTDjbF41TJwEbps6x4mTkskdhgVa16gGwLyG7AdxkSmUeYokSf97uMd",
  "key19": "5T3E6MYScnmRaesw8ze53Wq6iKx8gpnuSsFCQMXHXrrA6J8G8A12JkDpp4iNRWfKYC7uwUqFKFGmdvT9mhZuqupF",
  "key20": "4vqEcKq7DWCfrkNn3QT1vsnWp8BrStexkNZgqMqeFKPCVYr2VELToxCofvxjBTDsMXfGFV1CS2vJ7tuZMUZAzKac",
  "key21": "4w11drozr3WuU4WzzbUp9i7sHui46DDRsPmHjWhcTAjwA6LYCTxfTxRHG2Uou2sroxKAUN6CfPHUaJDuiKMsMoKx",
  "key22": "kMnmnXhTMy3pjBXSM9cz7Jqg3R88CV5Lxo7WbBTdn6XNT7GPkcq97yXwf2jUzj3pMUb29Dcdy3J2F2FBsmg47Tc",
  "key23": "FPyKThQgnb3hfTFgrDzFjy3kzjaQro9X8aqo7QRZH7zfP4kqqrq33QhiKfxtnGr76jKWqUr63HnVnNmZni4Jt2k",
  "key24": "5DN3KgbaFig6Rq7JGUpYbUGyBRagsztbrn8KqkzjQgXRp7PFPhnYaUizefJWP2VZumzkEMdwjMhs2fmH5zF3Shsd",
  "key25": "4MjVkTpYT3Cyxo6pQjnFU41iK6bokXF7pLsXUe3mZhwZvBy56Atv6pp5RHV8kpVdAY5tawLgfVfnM9QMRVWBp89X",
  "key26": "26rkL7dVjhFEcj9uiARzzio3yYmk5eDJC1NdYVyA3X6c56nDMd3oBx4vXLBTBTXk5tH6TGNKkJnqbFTKfKedb2xW",
  "key27": "2WH7jiznR1CNYGk2MYcn34EczWdd35sFL5aVMTZkpQiCjKLKGQRnfoBzPsGjDzXudzpsMEAqrxfsazmugVL2M2eC",
  "key28": "22rR8h1jGrMGwG3wbkCM8woJKGWTqv34fxGT2ipyNYSKGU7zB5TRyvjKEi46bQFK6jRxetYwbxpsUSvACDUQ5EUb",
  "key29": "2csptJsYDuxXjGgwBu19FXR7EMAYHWGcc7wdiwso1eRZKDFbSJ4jvGEbhyHHUUgEbcoDv3aHVg5h3DrLiw91y32T",
  "key30": "SnsTnQWSweUeVqVZRsf4oSVQmckZgwg8nwTbxqzDDffeA7emhudk4Vb2CNbUdJoKGJQoHHcRWpo8j2bYQr848YJ",
  "key31": "4hPJBTbWoxU1G9NLYp5nmtB3eJHq3LfGvFhPsmnuvDx4bSGdw8CDKb58YjE9py9h2ioS9JEdY6fHwXnMVt4VDNR1",
  "key32": "4Q1R8sPBuncdQ684pkNzS7jfi6tFqVvZ3RHrdK6v6FG8qyVRHnuKXYMaKgrsSqsqpPeQp213FgEQ75o83xvwrxCq",
  "key33": "vWb464Ef93TPZVwCGbd2qKef1WexnTFxmaQuMwmtMRYw28AYF3yN6KmfLDHVfvRSqnDsTdsBDJcL6LduMGEeg6E",
  "key34": "52ffYYCxwPWKdGUBvoz5VAxJcuXGY3tThoexvuHcg2w8YrGWerXTFAHzmxy1eBs4RGqy8bYCzcnW2vB4zUWThhhm",
  "key35": "JujyejHgm8UdZfyL9qBS1WcPV2Q1Nd9S55ceTg9B5QzRbmZztrHdbvagUH3AtxQ1sXeDFAV8gUvZEVMJ2nXdnM9",
  "key36": "2i9LLBE8r6BLXKybQmw7rgyzLfrCbuLi3eWJNaKvi4aMeGMDkz4arte35JXcCiiPrPN87GNct62civZWtp6sbDtT",
  "key37": "CzeHkKqfef9eVkR7qFdVqmJq1LTqdN45QYuUAwHj694RGNw5yy7upJzWpGSB7xpWoyCKZEmnZUnvhxZujT6UCho",
  "key38": "4XvmDtLxDE7wqA53EUFDCrn1tam9wsp1fmF2oe31Fx9LxLsk8JqvET6L5qEJb51CVuEQ4Fu8EMp5NVeLFX2XTAZ5",
  "key39": "3coXFBofFRG2jMM4cALFYYcGbE13K6Yom6joUwgmZ2261BVs9KoFCDPDzTFJwyW7wwo3oAVazH7fCYiNkjJT8u3S",
  "key40": "3KdYd3cKSiP1Ai6UhM4sYY8L2Z48rFQmFDwV8GgV2nBBwWPZQtmCTpBtowLwF6mJy1igbt7fSX2ujLrfQ4QqDswq",
  "key41": "5H9cHWt61JcJaGMp2XMERmWZgFohG7VU48oQUuY8LBmzMdVMKYfUMaGDvkQdbsDarZfbmDCCGHeP5eSrHw6rcpNX",
  "key42": "btbkBiXY7kcUCemSMfhg6ySgceiiCuxeKzSkRFurbWBhgX6WBvAwkFx6jd4dcLUBqLKfLUHQ5iCUC4hQS4MdFhv",
  "key43": "3Adij1vaPzWdLuvVmh3fzXXVXmL61NrDD41DFQvexCKrnuT5FBQwcqtkpAF3ZNfMCUb4Zrkz631z7KkRXnw6JFiy",
  "key44": "UgbhJoB3pa8krxU1EG7dnfuX5wexAED5eoFpf9Ux6zi7ezRUy7fNyDkJ56CK9mUQZodAUvwDxUC8nyiju67V4wp",
  "key45": "2dMNiKYy1RfePVwQiN9JSsenqC6nQPF4NgkMYCH7fmTd1kBRYvPBU3h8Cza8jHBSsqHkfH8eUmbwaEKeZ6HNCjQp"
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
