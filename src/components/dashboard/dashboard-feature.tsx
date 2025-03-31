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
    "edp9SaG4sN8kDMjzfH6tdy16n8MiK5toNyDmrwu5xGbfdqAbFBH6LefojfokMNdfYrbKVsHsQr7bvUBXAnVZJev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dCfudBmACWBLb4tjjkk8mfbyquvRwZSzMUsywk62uJPjH8TtSS3Nhv1qVU1mNoEx66egfo8k3qqPedq171XtAZ",
  "key1": "5k4TKdGP3Kb4tZHwbGfSXBz8wabJN5rXRWkhvVEnLAChMFkz374rHdDzV6txBrz6xyd9RT2T71U2Juhokj3Ed14x",
  "key2": "3aGGyUNR8nEMw5yS9kn1gvv2KbtGNtvxh2hckrSGeZR382QfkhwBPv91zUs9PimgZspU2YhFCXUentcGg2csUUrT",
  "key3": "2DUJhGxZWoMKD17AqsP3LVen1khpVbmRbDHUfMr3BC6nUvVKziavEz4TcUv3UXsYDhX9jG5PH2QqWHsVPEdkLcF",
  "key4": "VU1xJJU418ACSVsz8iYDUzsVgjaGJSdWNzJRxsUh9A9XCRF5ggoFv9zYuQkJK1rfsy5VMAsk6ayPgmZYiZYMtxB",
  "key5": "3g82honSXYnW7VkpmrurEjbTzBZyEXKmsTz8rgXbZWLykirnTipTRxTV9GbZwfPY3aVNikUN3L4TN8SAfjro98sx",
  "key6": "2szLqjeVHn7WCQCbhsRoToKTepwCz552bMoBQeucaZakfsTZ57SuKKZYxqP8Yy4hBi5GDxpZG7BMkjNmt5y17md9",
  "key7": "YANcLhhKG47yn5gTzu2BtNvuYRkWbBjjWQAv9CBjTDKHtvCsPY7hBjELzDyhpRGyrnN3anjYYE45YYjPy3NGj2c",
  "key8": "ZcsCSv3E75Tz63fh3zvMSbLYZr9AdMSVGyjaaw4pshcNDnh8nKBHHh1Jgwuv6DzsUHNP6BmTkCXn9jBHWcaauY7",
  "key9": "4CiUN5J6XkVcD6k4rtm6MZdMEW9PpthwF3xQk6toitkWvFojuD6KZAV3LXMK6Zx3zarip3kHJDrjiM2xEbYkPVa2",
  "key10": "5heTYGhhRJqVBApy2g3nLfQoe8qy3a65JB3FRZhGr1k3rUTZ2wH95vrmeneY5CTaU6xo4i8yLSFAMGuBNjkdoaLy",
  "key11": "XA46B2BsiKT5jWbh4diVFX8CFXQuX2NPszXGEbKS8rDZvQSJk8Mk2rF9bPxjwjGLY8iqTpfsAKiyhb5nzEYgb15",
  "key12": "25KCiGP5rT3jppnTXRHRM4eCRz9rzAqP73vkcUGBYp9SUg6sjczzRpaHUUmWkEbENkaW9kJ3EneMeqggUCK15mjq",
  "key13": "4QhQpam6JU1VmfveSCCDq5CstzHR3FdW7QmZL9H1jBpkZtKZy6girrSEcZYE2tSfhHLR22ycsXTyzXKWSRQ6qtxX",
  "key14": "4oaLczdEG1SHACz9rdmaoLfEfu7eUbMGgcAPhB4JPbcfAt1Ug1g9VVKgTqQcxNsDa5Pn4RuVTUAfjF2KqSAXWdiW",
  "key15": "5ZtzvJ46ePKp5LZbP8KBqorZ18MTnyDmwUe1Jqw1AyskMR5Bix7typFSchgPUxArSRbjhEgZUYiCWoiCLuo6VQWc",
  "key16": "38xLBDNw6umABX4tj2gBUH63tYqawiykSVW3zG9fbfND9J1TY6tkbruCu9fFhX312osdzvjoqaFAgQhrNgGhLyJe",
  "key17": "3yeAKD7UhPT5cax9fZwrCxnKfz8oV1CSJYgyWRQnS2rMihj5k9cppX2jxoEpnWtuqKbgxHzaJpCxsZdoiSq44Da6",
  "key18": "5JDfFuuLArJMMf7X5JNx2LqbqXxbdvuykpkzfp6qL23thuqxcm3zBmKJPbCcdNUXuCtF5bK1WxoCHwfCysdFKUAF",
  "key19": "2cFVLF9FPAAXAWsEZuREQmJbTtjjCAzY7MZdgXHUrvKq28HYXGSUnuHu8tLFUcbSq2y2ZTCGpRM5ps4uL2gwYwRF",
  "key20": "65N95XooREa59Am4cEo6GFGSocbpyoGT13FdVEvngwtoPkQT6FyCUPmC9HHbM3nYtHXNujEp3qccWtrphtgf8Ar5",
  "key21": "3V2QWPuYWyV8mbFN8ASzfHF4oTxRqFyUVnzG6QSgaNFckMRDg6V1zmqH4bTKrYYcCBVe5aDoQrmZxCy7nH7FTdAW",
  "key22": "2ByYYMaHzb2WZMuh64jZFj6kxvzqZMw4sVdazth8PvVs3JjZpDLD4fvD1LXpywAMzR83HuzDNqejR1JkZU2yXAWA",
  "key23": "3GvtGKTdDA2jHKeTXha9WtGTwcekpw5qgKmPepfrMZYzjYuvsrScRzp6GqW76CKZBj8ivLWSMgofSRCzV5JC8hjo",
  "key24": "5zaRt1TBbC1XSEn72uidYMqKJMBV2maZ3CtDFEkHRr6jbkG49zbBKiMLLfc8f5DNLLni9MDrNUiFPAo6Msma88ED",
  "key25": "4tMey6wmLCvZe8T4DJvyN4Yd7ndfvfLJieM3SvyNThybDu2tBd8bhNEYKHW234ZjCeFJTWSmP5YSKiF7ZqwKRfhH",
  "key26": "5aYzTVEF7gSWRSd7CE3H7phEYkroRusUoGeHK2F8EDT2xekJcY8ZjLbU9Go9yNwQ2NSTJErsFLRZFfoQhuYWposQ",
  "key27": "2Q6hT6u7jgxBGKgyDK4DVmrYzsm1fWc6nA5TWsUCSVaYJ5zkEKSfQxedXjc7qU474296Qo7xsGXU5ZmXLTEo2v6D",
  "key28": "4PBbdZRCv8ntgAHKPRzNE3K53XHrqNLpcvrnixuiBHyfBoFPtDdwXJsgcyXjQR9f4FMpmHoWT3yYj1oxaNwJYyAh",
  "key29": "EBvpsag1dua6bZ5eVGsayJySjsUPEPThenMCJajCr9Arr2vbG2uvkSm5HXmfH9GBwNv1dttAa64dnApsgqzyGyf",
  "key30": "NZFcZbhYWgDWQfwminVSsWY3J9TyNqY9CDQW2ugnvt6PurMGab84gRW64vufieLFtpznDcKmfwrTAkbkt6KHDG8",
  "key31": "4yb57fJyzJSiwiXnaiaKH33kQVoLRbdLnvPz6v2xoknP1V7Dj43RZU933E1CCaZ8Ggh71vPAU8CeKRyt6zAqjCgc",
  "key32": "bu89bXVMuq7YYN9Zg3f4J2Z9aijq7L8nsXTZ8skeHwa1xEfwo9VhaWc56noP1tVsg3pFVA7iDZVA3LEpQMJjk1S",
  "key33": "3VLWiDE5PadD8cf5XwghTfjf9QA7SCe7Z9tY2CHMffyokx6swsBbWYhNPzFZ8nw2EDBkgBSMnTLBC4KC5a61piAh",
  "key34": "5kteR8Sy4n8qsXFDoa6QkwGwtoD1qS25TJNBVgxTNNapoiAsy11Caf9qZiYj79Rap6t7KbPwzK3yG4EZJAQb1GS5",
  "key35": "VMU26itNiocrJcLp6Jw1qvUDsDBqMhJszfnWgWgRFucfQBB4gpmVTVJ8omLUGa7QxCgjbzQv4k3F2jpCGdTi66w",
  "key36": "3dGAnYtHYbEfX72XfJPEfnaT5n6MbAZrwQBCUCjKCwXpxh8MiCqQXBCRJ6H49QYM5APi1j5JtM3xnaCWL2QFVkrT",
  "key37": "25NCqdDhJLf2aPrny4oZNi4bneeZztbgUicJYUDoyZywJsDorjEXEFJ1PsFj7roj5UWaebxzEuq8To766npkaYyC",
  "key38": "2cXNdV6JmLeSQww3yeefUrGJ1mgoRshh7Jcd6GcUrR2uECxUN9gRPS7iHwS72qM459es3viL7UsuAHZzx5RGLVMV",
  "key39": "3wek6s3wnVaBeHvoKvFZ4aJXSAAsWQJcfRHxgrhRvatRdwyeqjvD3bY1kwm1VkbERWSYTjbyToqTpVHtGucm7r3C",
  "key40": "gD6PLjBZ9FtjvGLLEsNpTYTyGqAC1a4TPinnUSQuDEoGYFySxMVVk6xj9ER8s1zUtS8BuPEES9xzXvQkgsiqdGD"
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
