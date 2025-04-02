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
    "3Q8yt29Zv1ZFKMvky9YsbWPdY5yvxkPfefYJx1iRwCcPzoX2NA2W8rrs6nLRKSRMZpXWj7vefrr9Vqy8Ljb31ryD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KG4bsKMeqdR7ifcLG6hyZaJK5RztACpurVj5nqbwcwztGgUW3eVabTM5PjNiv6u4YMYCh9GCP59rKf2DWAb8wz",
  "key1": "2fAsMFEBNRv1vi9eUDfStmPYhomj4jzcWC7VkwF99YZzLFaNuRQ9NmrQCRcbDreTZSwvyVmN9t7rK3Afs4W88MDG",
  "key2": "ABX7mCRcmUmuPhddZPXfPuwPGBbjSiau6tysyifvHKHk7cdMdWW2UqrLRhMaZq6gMwcCiubv9u41mo4SqwJTMVN",
  "key3": "4DnEzrQ3ANcBc4EPM6owKTU21MdU13mrpjKgP4KNG1At4oy6NYup86PnVqcYwam44nSBTMub8WPzMqAagqSUvEoV",
  "key4": "NnH6ywfAbsTBmjjX7V9MvHQoSJFsT7r9NonkFbXq4Y5dkLAnoPTPgcC4bXahocYeesdmAoSySmqyg8d1EzHc37R",
  "key5": "2AVrxWpfGYHgKAuLt8TfLDHPyrTV92gkj2iefELkp5otoGoe7FheEXgV9S1yA2npndSVvzDKCQkxywW8ULCQVCsi",
  "key6": "5mDycjuXw8pMM6TCC69PsZUoXq1QE5JfTtxRtCiQWNxNZSgSrVKuh6Hc6SNDBDYJMBYDBDN1yArAymLbSXPcwMn1",
  "key7": "3TgFc9odKLuo1L7jDMv6i5yWt9JVVh2DLi1wd5gCUVES4qaoHRVuKypyS63Pd1ZQrBWp48jne7XoX5Qjzj3vLYmd",
  "key8": "TKQSmpGNoKwa439JsBvzEiwjdLGKWpp9FNJufY6SUvXoiJ1kuWe7pFL1oo2E3xbdPLUaswZf3PQqab5i3pZSbq6",
  "key9": "oBdVYtoJD393HJHMqUsuw7SuSdKT8fW1FsK8FgCGArkWLtGK13NZkw3GX8uYhpycjc6LrYgaT7gRFBBx2zW8rqo",
  "key10": "5hRujMvcnLur9bTfBwQGFVH2Pcg55fWwKt7fR7pV2b8hBH4L6QaL64GR3VgeXMASoaEdYaTYFePWDdWyo3de3qjh",
  "key11": "33xkaMLtKBPyqo54DzrxcVJ7T56KgQen8CPTTYRG46V8zdG6jcL71BHa3pv51xgqjZSH6VK3sVyCMuGtsBWu8eeJ",
  "key12": "4YeouzY2d6hQeWP3nA1PBhsbrruCX7WxbCbHLKh1FeWkzU5gzmKZgohDnzWoVZeixeARy6r2syRoyFedxPh9Dxvq",
  "key13": "ghDJS8CuC5Jvq5t8TQg47FMgRm2FBuUqJiP7oisgKM9fZimaN5TXiTKBNhpQZtBrqJ8KRwrcnZkSNU14c7wQRDU",
  "key14": "44Wq9pWLsPquePbow1Caa91pR3D58HJCV5esYaw7LTb6mwdxdoqna4vSeawfjsCBcVE4Wfnj3eaovbErvjPtd9vo",
  "key15": "2mJ3XhkihNgxFLHGnwrM4m7yJhyAKozq2BgGRorGsxbSvVxYtzcpb2Yg5BXwCxcjiNDMGKs2SqyVLKimdYPhzfzi",
  "key16": "5zDwdBvmJrYA1HAcd8k7jmmBY7WrpsfBtN2Zxf7b9XJRw2Qd21SuduSfS3q3r2DwQ6qY4bePVKJtDeEe7VTuX3j2",
  "key17": "4ELMKbsvmpimx3diJK1vsY6K6pxGABJLSxpxycAuQPRdPVfXBaBPpgwgBpPvQ9CtynhJgGRLNNjm1CaYddpfsPY8",
  "key18": "3jY4TsYPJ7Ba24TQgrVrCgCAT7WzesGgZcbsmN4N2cVcVxjtRXscu88kukSh6XiKMVyeVRw9bhG4EfvKpxJTrnMq",
  "key19": "Eaw4yZLn3ecYb7wf6VAX8KmaabvidUrCHwH2nYHx3rEJcGp59qNwbc9gk9NPjZ1Xyj7U1BBhYgVWvM6NBM1JUqZ",
  "key20": "5N9qoNo8FwAmoYSJyARjZJa5xr1jBUs9j43otPgoZZCPzQ7vKYgjjmPdf8p87cwRCbo5oWusEPBjgP3UE4dXsSgU",
  "key21": "2PEfWiARk3xmtRw4vCZpgtvvwjWJ9UjeThBYEPSQD5zKGUx17ECfF9A2brZ2EP3wDT21w6P4xBaetSt8iSdgLfnv",
  "key22": "2RhJQMCNVQx3YFtNXW8ho8bRJBLS1pSARqUyjPLDRCX3rganDpYkjYo44cFVaL5my7FXNLiLzuWdxz6zwM756YRy",
  "key23": "9Ah8mKXbS6aMBhZ1dEfgzWiTwssR7XUSAivChC93Ycy7FQ2LDC2Dr8ddVSp9ToVN4rQfYeeg98euWEYNzF8FAfo",
  "key24": "6gBis5pL5ceF9myoG86WMSaCdgKL7sFoz2PYsHQJ6yyQrKe4nBKXGP4GzD4erQovRkyj3MuA4Tg6WT75ULDVpWj",
  "key25": "2HcLbzyi8B22gmiQMEcAaxqUmP1aJKuaeEd9Cp1SQ4aH7KbTpjg3pNMMNNcKrKssrUdh5GXMbeDZgZDGwnbaV3dR",
  "key26": "2u6cwR2BZHiW2i84SWHbdsxJ8tv3ZrDahPNymquUpRFvTaFTF66GrpxQmcPGVbgZZfNPejy7oJMaAponKMw4z4TM",
  "key27": "3hHZvQdxA7en7K2r5fkUJYTLxwPLLYFpWGHPbYmEvPmeVGwSyQPJXR4YW9hKMEYBPSafVEKPxaiPKajYeKfBrWXL",
  "key28": "p7er2kFRC2jshBBJKn6UbE1rhysoCfPFpRr92DXxCrM9jGYAyXmixKKRkq1HcGQ9M1S6QGQRjJu6uASvoKFTBGF",
  "key29": "4QXkqzVVcFmYhxCr9KpBemuEoggPJ9NUYhePop7RXJbwzkMjCcF6jk9oQSv6FfwzGRFcZBVrEYRKWzJePNtaKpcd",
  "key30": "3zUbUJFUrcyuCTd2eTXTbzNwLFa6Vbum4RTi1HxE7AAzv8dPtCrgXujo6xpEK28oPzfnJBcxsLcgv817uxvqdzWh",
  "key31": "42WzkgnsyngBVTDmpHT4hsxkAafxJaJHoxgaBsJrQ1d7PnEx7LtVfPAdfVcusk1tp5eAGJC6a7GyNXY3H6fKXrY1"
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
