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
    "34PJx8UB2bthpUgJo8sM6ZHvoP9h99AWrKMFGzvbb5bVEz4Bt5C8o9N5Ht4412fZ5peDTStmMq47Y1vQAEVkucDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFxJ2eyhvyR313LZTYGafENFPrAMqv5Mh3Xya11wBQ7kSMZ7DK3BV8wTHU619VXAkYWHMDmvGkTpi1cckuggb7L",
  "key1": "ez6W8mtXCeohCaGdreNKkzqD2sK3UWwWyRehPq9UB83AACPKj2XwRBRBpxQHDG6TGjcqSXaB3QMUVQAUDsF2e5L",
  "key2": "5jpdSRvqBr44UJ4RZgRxvAEBrLcBnPrNUD8t2m9vP9t5VQoDgrmsUaSmQHsYCCtYAHLqtziS7AX8CgS8oc5WVdeV",
  "key3": "4uBEbw9idsmmieyAiESuCHBxvYKyVYs4pU6ApDJS1kuL136qCvWQbziFjntFcEtbxnH519iCDerZrJDTaZ9yvLAA",
  "key4": "3SHtKiJ1oQLFVeXZPQnifLwhCgbTWp4Jsi7QY3NrTLZzfNFQsXVMzMAaiPimsBfEN7uqJkC3ihkZ8ZV3zECkgr62",
  "key5": "44ztFxSNoUAbgckH1z1vf4J5M8p9LA81mAZxyAh3hdKqmFAgcf5d8PBvM4QMSFns9Lqbwbx3EfXqvCNcoVvPhXKq",
  "key6": "2uTZBhepRPLhdX245xrirUxdXBqX8hM6fDfDsuqyvHMx77zVed54jFbhxEea6F7677BKbxvaUqZujftRpwztp9KL",
  "key7": "4Km569mwe2BJz9EE3bBo4ptFcmVh2XbrL3wD9iftUbm6gm5RwFWxSKs2iQD4nLVoVjSLaDyLgvN6vAvvxfWhwHWY",
  "key8": "pNVZB8MsTthJeecimbHeAPivbNTVuyXfRH2AxBT2yLT79RrWE3LRiNgsQdXDAdJiSTG1GsT4JsJ2BrpgUecNHZx",
  "key9": "2Dc7TRX8VvaB3e3oTmnn8g3MtHCSdTzzeT9SsMiAKMyBs6C296wvqE924QG344W1mNbRj6uJMvbj7aYZRFhu7G2p",
  "key10": "4pcg4WEZbAtJEoc5MvSFvTYLtVyA4keCPfJcw4ue5wLkZaUtZwne1d63Sy3uhhFFL9SqwjhSSaHZv6Esgn4wgq78",
  "key11": "34PJbF1evBaBRihoCJ6zr48Cbxoyz8hUfkVSxNsDhorULs3wQH8td4Dq5r173rd7dEj9sU4MHPKxGsyZ41H6hQiN",
  "key12": "4wMGzfAYC5vUqdgbwXjhcu7ATqW5b3X3XFBobnBdrbVxzpwtWj7dDQSGfQRu1imREgDmnq1nMTEoXKuXqaLAm4Z7",
  "key13": "4VZGmhr5W8xeY7eYZX2m1sFNpgJLBq5xv1prRcoWKA92eSu5NgNvUGgAZvmufWqcv8ivHvKAFguVAuRGNJHZ8NuJ",
  "key14": "4BJGvCJTYDcJDEdFCHwtHQRZ9t59qCDQx8qqVKBWyA2KQBzi8x6SN4MRRzDPLzrakgciMxDhDwUAPXDdct2L2uVD",
  "key15": "2MfU9W6gJXDyTBGNFvtgCFUFYF2aZqfg9AHvncjC8zaiuhNA4CHKcgTXHbXBheBwmy2EBcZ2HSDrxh66aCDQofcu",
  "key16": "3uhkTTT4Keh1gcpAoo7YrwbqEzpHsML5WrpQJgCvnvCEQnpgA4uraHZqJTESmA1ah6Nyos8wUAs6PM6s8tAPx5ER",
  "key17": "33eK4FqdX6WJvPQZeLVuvC2vnADGw3eJ9FQgMKUB5LxdBkpEPvzUqmh6nD7WYBrF45JmobSD76ee97Ugp4kYNzar",
  "key18": "5uswMSJ7dzJFnMpFFn61wY6bGjy71yUhGzSUJHn3XiAYBhj4PyBoYsm5Dkhtg8RGRvtWXpL9FAWxzZpM6JfoMoLs",
  "key19": "27tDmCTGSAFCXJWoU5SnqYQjvn1kerYkhoYb5usVQbsBFxZ5pidEH3ZimD3Fo34dvfz14cqyQW17PEh3dRKP7KDQ",
  "key20": "xd7d6yUERB4oLnztPXe8qAGiafL4xAa3sSEsyT9swa1g95dwiJ9ZLcDyZ97rCjTiEzRaggTgrye9TJknxCfHvY7",
  "key21": "4qYvaP3dH5jiQziwpQLqYd1LNFt5bb2nv49joLihP7yq8uj7Rkxsnj21M5ECE9eZN5dt6mqka8mqtDDUF7gTeA3x",
  "key22": "5Z5yjLYLub1K97CRwuzWpuN6dnS8wfVjVLcdWrP4BgVBobxfmXKGrhTAPKKYNTMovUWDMA4CCvsUfSVrLpTGcVqr",
  "key23": "1mbBSLeYnUdRYT54WF8D9KdJ1UuEithSvJ8edaWw8JPUjWuwNndYAPBJkiupz1wePAjUfC5SgGWbqHZ8fkCBLnF",
  "key24": "3QwLhoYiH4qizjdL2KwvbX68FTyZSTr359k3uL46QNyzzSXANwu7dwttCQLWMyo3chuKk9PBQ6rgsUngELAKbaqM",
  "key25": "4QZ5hkfXJodnFKU9c53X2ku9AwJY3abZjfxLpaLLMHja991Kc1VdzbjpkRa9PRjKYDFo6y7JqejmzhvdDvEDoUkA",
  "key26": "3KFWAtUWo7Kgh49T1YoRKmgrFDLXH3bE48mbsHoizM8ceiY6uGp8s3kynrfD3JRiCcCkcQiJbkgb5CBvvXeBZFaL",
  "key27": "2D3RwZREQqts87farswETkrns648pLqcf8esgwVh9c7PvxRrnzncn6HgdUQjf4JYBWW6pYBRw3LT57BqQAyPDkC1",
  "key28": "326Sr18vPfS2rS4YqpkPVDrbwdcRYrSFbMYsQEfUPFPaaxBX98VXtsaSiEU5KMYRxZcLfcL61nPmNpcERm3G3czU",
  "key29": "5dtUfjyaHN931u2mAV49PxCsBmQWBgToi9sjGBF8jVRMdnHm32tRMsSi9gPuijMJgDM1nav6n1AwKz5whE1mrf3K",
  "key30": "4xoGk8omRCjZz2gv8WRDeoZPMvdkkE6t5ZxXdEYLj4S3ksjYAMy86mE5fm8nDpd3mS232NmmYAL5TXYxgbNNozRd",
  "key31": "VANRKZiLHNsaH2KWFeApsjz7Pcspz7LKDjGCAptumFLaX2VvzsNQgn4bo478uauT6obRRfDZ1svRuxpzvjL3wLU",
  "key32": "5eCatRV5uQPNbwdSU7i5gbFzwWf5bKbZVKUtN8XKWkrT71Cbo4tvfZp1Kqz4crvgQsW8ktBJ1VB8aJNoJhztkN4e",
  "key33": "4Dwm1WKUSgmmWjSspYSPQabz5fJYByJC6AStUUmxpH735BfPj8BG4A5EHVeJU8NkQMrvRBoxZFGb2mdrj6V2ioee"
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
