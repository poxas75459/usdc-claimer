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
    "4KAKLfroatKT46QweLpWCqWoHqi6fedJ1fXMk6fh6fRhWGiDdf2kRBH9ep9Vtyge143JLygHRR4mMJe6ktgUDcTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dq8DCrKGS3Xz475kAEmC3o6wQqt648JSo5DWnv91Dmo5L48F3CBC3mpiqka2ziYrwizzPscfgt7aezXkL4xSXFX",
  "key1": "2yKNcnP5QnrpbQBnSwajiL52FwPV99nCXkiJiETJCq7GgH851YhiiLRfdNG9DjH4RhqMZhoSsfsVjxAKcv2DEuFd",
  "key2": "3jrKbqgHDGa2bZ7GWGMLc8hxJUpmQcrANYGaisfjcoBLCu8ZAeiftniRegMBjSdmjAqJcePifAvzvyc3AuwCNh76",
  "key3": "5FdRzSdeXwGPQB1UG7sxcdpnhzeDyQGjzZsNqokikcdEex8SUiZrMCxNQH8MBU65rzjXQgFMLLNy9f9b6W6e1uZ4",
  "key4": "41dVcgHgG3Fjfj2cas6RVGom78cdvSUAkWVByACqyDRTkfNEZn8Ne6fHkQmXJduZhceNVx67dh7FqH16nXcpsCYA",
  "key5": "4PF7QqQDsXGHSAxxJsqtAXD6wfuRh7nuox9xqFRgHDYWezqDBTXtzAn2khFaRdMLfEWydZ59JzFjNMxLYiuhsew6",
  "key6": "57hcHKvxeCANqYmzUUUGTu2hY84tgt6j2RrR6BLMuxkNnPYbitJ8SKXpSSxxX64sFURt5UEiSDxiksD97Ab1MPc4",
  "key7": "5in3AUos2RsP1wjrBj7TW16AdpqkpdYUgceaMz3Z68CSjRM9vTVvC5JfF3ymHZDdDXjA3w5dpTRUm9nafDkm62GB",
  "key8": "5MDESXEBLeqw8dBCJCZrU9Ywv7oRHryj9Gm5M9EzSYhbkKY5Fef8xzgiiNbJbTgQ8q9P7rssfnT9x64RjyruiZa2",
  "key9": "37fCNxg8D1ohJNzt6cEELdvimANANXDDGpcRF1axqVRevufJnL19zZNythd9A9YcAxzeJo4NV2Zz6G3hoxoPZH57",
  "key10": "48pjpKkRrMTwKvANLTWKt8VKQAnH9Qti7gjV6D5NrdxJeGufSf6xYXAfcD129AjTU9ZGUuUYzfkLEYRQkAjo1kiR",
  "key11": "278iPkr5aonvLzL7NTKmsucqLSAijDwaFAzP6wkDTHVVqfdvZPkJpiYhMAhypT6cpoPV2ko6aoznz5YzdWN3Q2mV",
  "key12": "4asQdfyh3c1SPRMDuJKgnCDjifpzqFYjzN9TiReFRuNK7CsQKCeZTwcnvUB38eHPMVBAEaVkDRGBWgcuTXifFj3R",
  "key13": "4H9gtb81tquyzMLUGVR2oq6mZzJf18GkoL4fytQ4xULdEPPYTwef1V2ru9h929KnCHrHBXKsy31Qb3Sc6ikKFUdu",
  "key14": "v3RZc5hJiLQwVLJhV97s7RYMZadNr2MoBvboWrQemVJ8gYeHRCegJmpezr4VafBqzbwTDtWVAjPpvREkaHC1kvk",
  "key15": "4rJ27eP59J2HDQmubbh6S2pZND8VvsV7hnZsFB946zdNx9aXfs6T26uqGbF4tmmnYuxPemTC9KckbcprziDWq4Bf",
  "key16": "5dvhPPW1kyFZ6dZxoasdK6s8RgboV3AXgLmqdz7BkDZXL7aVu2bkp5UACVpnc7iuftvwqRsqWoqLUFvL6fgj8EYa",
  "key17": "ypVJupMkBLs8G5XcDtFRbtWXqHzJ3nJJcRLqFv71jg9NZThwoaDkHnzsRFB6Qi3Ak2NHAS22oF962CW8WozXmLn",
  "key18": "4Vy9fgqhURRKAQUUvTsGJN3zN32zqnBdUYXzFfByuE9nSuYACqyznuNXZP24QDLPLpTu61wHTVuGxVj1wEcehPrF",
  "key19": "5Aee27LEhx4ukmCPHj2UqqPPEzfvzLiM7mJJ9DG9esTgWSqQAJnMgcSNZdzdae9McquAzJ9h751Nb3ogH3jWbRNd",
  "key20": "VzniPQwmDRAYapPbxfyFJj3nTKDwBZpXiivCPG6y85xNTeshiwzbag9HrDNzu59nPpmkWjw6KQkeSLBPohsXCW1",
  "key21": "xQpnu3QzsFqqDu49ar2frnekXUQVLutj352YwN2ghBb9sEf2ENKsUAFMfcwTBahde8nnzbyqrNy2kcv7h7Ser4b",
  "key22": "5EnU4xHM2mP2BQmrzmFUEcaVNoCD5aStiKjTqtvtKZfhCLMQsBFfwXhavPukcx8V12Uf3HXbn4La5vn9ceJXY2VP",
  "key23": "2JX3TutwkddPB3SifXgJFzDrvxRjFyN8nN6nAcBTMJ6wetESw2czV8UaEWyF8YSiVjbQz9mAozAMQVNJXvqkj9n1",
  "key24": "4FEksP2zCE12SrRuLBFZtLEVW2CqocX3VsaWQnCnfKu2Ex9vezuDeDN9bUkToC4F7YeHy7HKKk66uLzKUu2rFCRe",
  "key25": "3RJJZTU2Si6UnFjYNKdJ5ZV9wi2CtpgPsHwSs1NdwWqrf25AU6DNxCNFnh9nx7ZPk3eeWtrmEWFjv9rJbFBk8Rw2",
  "key26": "58rRwaJgECJ5CnMSUdw55ao67ERe1EA7qQUVcSYKJKDLYiQ7xhTxmhVzR4N6gAviLXep2XTaJHkD25HtZxrMT796",
  "key27": "4gDabLtQUBVAmvLpxy9hQeJrBuG8BAsuwFvaXb6WoJZBQngqqL1tNfAWp2UuVwahfoiSsxW7oBczd5w85JDX18mV",
  "key28": "5JNKGcbNXDWBRgM4vb7Y8Vq7VnR897mwRRMT5iy9sDGnxZhpm1cdSyEDMGpyDc69MVkZ9GjxEoDWSTh1bcfcuftD",
  "key29": "2UaHuurYLaF7KbpnYFGbkR44JiPD8Brjzy35sYhTaPk76F11JaFG8vgBpCV37jb2EaXUtsSmZ7sioLzpyruxzYaq",
  "key30": "2v4RwznefjEK9EUpM4q6XLVviF3RHpFYEoFGC8ZhkCcE4Z1N7LoyzKMceDb5nE4sGF7LT5u4yFiU4MBeK1sL6LCK",
  "key31": "5FhorPBegVCggf6kw2JJvdhU4QB4VBnoPRrgM6G8PQfu7Yn4mMAdu9aPRGUSvHRGDqU6Fcj11k6BPC3nTLuCLyww",
  "key32": "Cfm6f7LkiNXkSFQhesJ1n8bXSuXSayCF3XvAZEZ8hWC2JqxfLcdQgGTLXmHjubkNKJNFiV3xvPJz8Q4noNjeUdi",
  "key33": "4PYZ3kF2rNFWEJSmHYKJWdC6oPpJjx17nTdXSExwhDSQDBfnsx77PWmV1AUrqNehtgydpPWMXme1qjcG4GGea9do",
  "key34": "4KMcWARzfS4AUN164wU7uwpwWVqHCN6w4asHCw5q8Jjmk4MGRbQPLnBGLjSVc2MTvqJao2HmVeqENFo5ogmmRie3",
  "key35": "21LZa1a8JrYPc9BUsx6oeD1J3qMDRrrpxksdDyKwerWHZcnHMmXQaDg6B7ENJZCwzCBHkdXmeaXojx2X6TFsDgiK",
  "key36": "4sfKKJXtytPijFtq2CdCKYrdEuSEucW32rob3ixMfqtBuDF2LRHxT7G34tbwJeAsaPx6Ees1VbLSdfAyQjaWQeJF",
  "key37": "57Y73V3BcT9anGh1ha1VCtVc84DvpUmGC7KFKdoJWxn85JFCLbiCUyxZmbD4mqpsNCdJKAcnG1B3F7rbc5KWcKks",
  "key38": "2K5YDt8nE2yYf8BMHyMvbLMLU6T3KjVGYpYtHoa54XTRPQjEJ7zxSk23E5xL8ypHmic8gyE8NkoBk1SPgxcNhwc6",
  "key39": "3bgJqAgodnxjTyhttSm6z4muBh3JuKuoFzTRh77xQaB7iqZGo2XwHgJqnwqFYMWqp883gFLqj8ATqaQj5rBQNQM2",
  "key40": "4sydgV1iaQ9SRAikwFvm366nFNy2XQS9CqYxepisE9FTWk2uQoSnXttxw24UuNRP4hAK4vE5g9swpw8hFKW3SjTe",
  "key41": "3ABJ5uFa3G4RnYbqSREtx5Df7UMV5TKBntYUT6TiXLzp1vz9vhKdHmfJst1LVa1iYFh1aZmZJkj14rVKY7T871Mt",
  "key42": "3KAf3jybgqVDd59G8PniULwBJxj9ouQAreFZjYdSdUQUiMZLesE453XWN3Jf2i3MfYwWZvLR3ebyjBkH48Afk2U1",
  "key43": "JecP7c9zikdTWgKJmZhTRfsnhhFLekhiCPLaVEJrTVZe6DQDvBt3Yiztb5sSbaFEkgXynfJmjrxVXWzCzSW33xQ",
  "key44": "5hHHsCMGTZdJ1UzZPVCosEsDvPdVxAZShu4Pyu839c5dGzZgWmx1HzUAk8dbMZjHxGUgX5z8edt7VA8U9Xcw9qZL",
  "key45": "2ZuSBKgjRzJ4kQ6L8yKDsGpgC24jP7NC8emJWr35mhja2rr7jkJKAczCDBV7TGvjSSzzcozEaS8L7UY5Tv9vC1AD",
  "key46": "ZJenuXuZ2cfm87Du5c2gjG4mkSduDWnXqYqP3MmByAyAiFAcarB3WWJfkP2DXtHcWrjHaiPjJEvo57ZhiSkKZV3"
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
