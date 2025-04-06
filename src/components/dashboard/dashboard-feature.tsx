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
    "24jMvARR8UwarrPrtGVGXaenNbfKPb4r2RuVGhfJV1oPHH9ZyaSfBnpNo8DJ6NSYXq5x2vN3gA4EDWgUH35mDJUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BofPacuZnbukyNH57rCZPe4Zm9zLDMCtAsLZcK55mCJfx1Fj3i73hpMgQCZ4ztR4JDzM8timRLqz2UXipzNgh7i",
  "key1": "omgCdZ6oqCgCJe4NZeCAe53J1W4h8VQVkmE6J9RzZoMnja3dQr5iHttDbkdBpMB2y9pCkR9mW2KBKC5eZGcxh6g",
  "key2": "T1Hyi35cQZNAU9hQ8A7oGXnJkyH29vFpepnPMYzgmyFEsASfWYVJ1DDenGz3yGmBJATMU6KtAuk363fShauK2YE",
  "key3": "2DXLoBANgTZ9hRdinRbKFTXjgwDmY1XNSxxaZ26npwdPyuBKUjAVFvg5aCjnjhpZCMMrefBU2ZU1CvX9vUdBPrYf",
  "key4": "4vSa9b3apzNv3cH7irAvrRJWZvfJH2g7RPLif95MmuXcid5qRaeL3226Z7ittqKYQngVWpaS3RcJ5LmNRivcGyBQ",
  "key5": "58vEB5Pqqq6uVAjavstuZeKcFbLcVGuCXik938a7MA5Ls273vVWD8KnfNF94QbCBqaj3QewR5EJq7TjR2a2mtX95",
  "key6": "saNtdKPHkUzfxBphLbbtiTvaqXoBLPk2KgDty84o8Tkn7HmpHjv7s8hThxkAZCnwqJKWf3qb2BQntqBoCQTrkTB",
  "key7": "4pzZHw8aX7gJfaJtiYgWGT5jk821qLW4FDK5QKQtSTagojkg191ZSbiyzhgxpM9uqQ8o5UNSv6qniCgpFZoYvXDt",
  "key8": "3DcghJWzor1m3ZEawJY6XQmwfKcTmHLUYMY9YZPX9V9h1VHBGD4FyRgtbgjyMCNcgEStsQB9PVc6ktXjKBUGAC2i",
  "key9": "4sTsYjmMGeFz9djD5HBjW9zUf1K64t3ixCZBKqxtY8FRKHq8iACRjAMdXePNuFhA8PizwyhrXTRffvZjrXqhCHjN",
  "key10": "sWh6TcG3ti6gSXdbfvhTqBuTKBKriyqNWh9YH8dLF7BWPgGqA9DF51jkxotQms5sZHgK5WvGvbqdiPdf9MkaEEd",
  "key11": "5PfdY4N1YPTzABNVz5vK45NV76K3wNfy6FiZbZarbpXPBHu3ULRXU4PPxMLKUKibcAAssjSeApx4mMheJ1Y3PgSk",
  "key12": "3LP6fCESYTueSPLcyq61VktMhHWWEUaWw3YpRB2hbJoXjt5b2Fdzn3APXoR2ES6FUELqrc7SnhqkiCb7Zizd8qsv",
  "key13": "3tSvAg9APZa5V24BY2iSQnLWAtRZTEpWqfXXtwFWrZrseUzaffYfW7jxdtDKz8bbC7HYLuUUf5qYY3DLVDY5Vnux",
  "key14": "5cEbF4igsrvkpLTuk7TAAdTHsGewKHSGznuDCBLu3F1QkPuip7Xf7TiS3cUWav26Kak1PADU4MGzvXhxTsn71nN8",
  "key15": "2YVEpSgosQifmnNngspBzdmNPPMsQ3PCxehtAgN8HG761KXc7MGsuqawmvZCEk9wXpBmuG5W8aWs8zg4kLacA2dv",
  "key16": "2BvnyGGQfxd9t2YcTsTXN2HBMNjBCeFGvPqVqvxMgSuzmQrGDaVvRMvxR37m35NuXfpxHnn1dbQC9CfV4yn9L6Nz",
  "key17": "2VefwdvxzwRyrBZ8gYE4meDBmynXVEdL9KmabdrZJKS6GN6soyMDXFQq7p7QZPeLD1To3HzpdPWkAaEsSuBGLnEV",
  "key18": "3nKXqnEzzQTSWCZfAhVi7Hq8FM2cbDszwkWRLd17H2n1A87oa9GY5bg7XKvwKtf2Z5WCHNDL3XpuUwx9U1kDfX7g",
  "key19": "2ZYDB1VkwnBHTuUgDNPHzw7HtDeyVCzVTKhBjRZjKrCwFXsLQLfhd4ZfHYAiehAZ4QLQaUwfXBUzv4BberMZtbQc",
  "key20": "3WkWvosjgcSQWkPS2Tq3CgJhBHZDEmAPe8orVncy54J4QnoQHMqaVyR4gXgpqfLTfwFroTUz3nXvUNiFqM3Bx5ts",
  "key21": "4bzNuG4wNEghvya23RqgiKUrtGz5witfFfYx2GZYtpzqEYCDsytWC1hGN7EzMqskGJeav3AMqFMpKVhAoX3yF23v",
  "key22": "3Fk65xZwv7CxqKgGJkhFXjQUv4kpJoBU8YtYyUgC4oswCjwwAuPeJ5TnH6DLTT5VJpfiHCxe9cp4FpxJuadn6HrW",
  "key23": "4ccMAFoZxCF75aZKPCcjufLtDxwqs9p7fVydH2iskQipDrsb11Ju8f94YttH53mBZfhvAP2uWwyVY9n91n9yu35H",
  "key24": "3JS18gQezVFJN3sccDBNDu6zc8FjkT6wDbjKRztmKxs5MsrmLHAgQx71YYwmFVS9u4YPQ5HywPmG42WzK73Gr41G",
  "key25": "5R7Cvfj2spdhFJbMecAc9a4v1YFr3g95rWw5LE9XMMmBgTBYZNP2jWrkno4V6PRDTCdsJXbwMFbqVGHr238WYD4m",
  "key26": "3dDQHNWSvPumwkwJi9Xp4BQt3WgubDjszYM4i5Nt9HN2WeFwkAuFjoA42obBW9TEMXGHtmW58y2WWjAN5LaJZxzT"
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
