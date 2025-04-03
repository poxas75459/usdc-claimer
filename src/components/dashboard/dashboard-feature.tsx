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
    "WuEVcXbdxUAriJHH73rhByJuxA29J4tibDkxhrQQwNmPZRx9Xx2VTjsvYHEotYw3umEyAVRU2XQXUgmTdHu431X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXGZ94jJo81NUCcmvCWWGkMV4JwF9VuSjWkXtaPcjENDFXdUxYJj6Vf3HmSSmtuki8bqERP27ix5ryeEWVjoYF5",
  "key1": "5xRnf4qvbHqorQFDBwpcys21menW1G9gqNWWzCViE1zoi3UD8QwS1U2yNA8m7vSD3rQ5U6p1XFGwWaaGUgV7Ccxe",
  "key2": "5hvwufGrEYcDhoxBaAfZbmtpD791igUhQTKfMMQDu98A5rDWi2Vk9RBNuFzkVGbWadspwRhcPGcJJWYKuq2UPcMd",
  "key3": "3qmuK851N1fp2xCXpBfQdjjm1heRGeVCQE7UtFJKApadyQBJUSvAvyFd8nK23JSCZTAKLP79kqQaWa2j3H4npUcJ",
  "key4": "3iEjxXmb7xkfu4CCGthtgZmNKEdgvgYbeJqUq9m8c3wFmwergjGhHeGeLe7p6YUL49XgVA7Z2aKDguayhKp2VoC3",
  "key5": "2AbHcmteg4qeMfpQCjAq6kKjLWDCzBK4qerGWwP5BUVatZz1JXMUWqijxvBwhtAkvLKMmCFnYw3v6iPrKXzEENt3",
  "key6": "5Piu1bkN37X5aEpQCAUtwW8yqxLYGCGU9tNEg4MUoyQrBazJwEr993hytjVC673QvxVSqsnQXKR2DKL2pc3fNf84",
  "key7": "5kuZMhtSQFDjjwFSkHgJ4XBAwyHvx7ZcWJcccwXa3wmY6GmNdN2rA59y9xAPDXR62KuyMVSEsLXq9B5CvYXFrHka",
  "key8": "26hbiv5sJEWK4SdwY1ditmf93jvkDjoMUyGsKbkBTrBmsmu6vUjTK8H5vbV7EgUmikJsTfxkApi7x8YwatQf8X3j",
  "key9": "2BmP6vAzcVEusurFGf3k2u6xfSxCEUTFLUebuxGSQbjGJ49JJXboTqoCSqoqV9dd3ZHsRSCvykU7zwmXQ6MUWEWT",
  "key10": "32HrMqdMyx84aPkKDhUwUWbc32ByMxie5CJt3qjGcqDELmXvkkshRPSiL993ysSHPETi3upKbw1si3M9T51sFgoZ",
  "key11": "26ff93tsZR6RYubLTUyDeij8W3qHqhP1WhWrqjrNE4irikMKrhYQ2jxpyRegBa4pYY3DtigiZPKWdovbiYqenqbp",
  "key12": "29eq18iJjEM5voQPhaCWE39WgY5TystsZioWk6fn1VoqLkrE8uVtRcsjAyu2GsvTDS55PE94vTromnnj3demQxBG",
  "key13": "2FSGacWa7JaznGYy28YfG42axG1svnxuAjK2CDoQ75f6R9fiTiM6KrBGGseNDYxAHJzps3drqNw8gJcgz3oWqcKr",
  "key14": "5VKeb6qZfbk2Cvg2jpvX7uj5EyZM4EMQmgqbMt15wza9w7ejwt5FfAYF1c2Rtn9tytF5fAZiDoAA3LLeVrfae9gE",
  "key15": "4mH2GeBSVZ8s1QXKS6ZSXk7L3A4QrDat9iAdJgSz9hgQRgroWNEHLM35gcoNgpwZdJGJPJw18u7T9MXgHGUJfjTY",
  "key16": "3Vr56iRHQ5zu97ZR1VDpHdac3CYW2Gjq4qZabux6SbW1qbyfocctNYdnuxCbVhU3q8mXWJu25u6eAhaEZbNSA7CU",
  "key17": "5LQUHb7BqMfjZRhgxC9LwfZVbVZXmNGd2tmtUQxfZjgYY6bUrrfjikVvzhL5gf2deLpHdKD7dNyAdYEAdrxaszjN",
  "key18": "hPBbrTfx43DRXUwb8pcSP4y2QDvPBQ84AkkxEwLJFFfQzN3MQropJviDuoypBEdLTfKCsokGvNu14qx2JeRYeEP",
  "key19": "2XYiRzh6cFagQJuUrA4RmEDND1wtP6ijHTmcFCvWFtPU8cArDh3AzLBWnWyUC7aZ5GuVUgPNE38jRuej3NKL3mBG",
  "key20": "4KEA7iPCit3Pn1gNLkBQS5BL9c8V1tnREHgJRRRvNnMc8aaUwbzCggzbr1WiCcqHtLqiYwHbHK21PAYsGct8fJg6",
  "key21": "WgoK4sk9bQNyY3gEHo3MkoDtEe6L3zGCCnzXRxn7MwY1WkPP4RXPCrgYEj65QHd34uYEtyyh4fP9Ud1szmKGa62",
  "key22": "avX7hkFVyppfcur4qRfC1nxDFW2aZyWKDDUAz86uqLTkJ77Ui5gxDsJXJEYnHsz6ZzNSqMzqUYU7zv9gns5hvJe",
  "key23": "3BSUaCxdw7bpD6RdKeYXndJyREtjscsgoh1Ecq4K62B9PuLgk4i9HkNfPFPjQrfyXSHAvBvZVpFkVttqHJWGvtAg",
  "key24": "23ndGsN1LJid1egEmaWv5rdC5dxGDENTrsXbeNrHKLXLGM6PhY7Dpqr3tjqhTCgshARCNeYv2C2YFBbDVHysxM77",
  "key25": "5mRenHY6n8bRWYcQBeyfSiEicFtWxmzZJuWES3LaVkJnLdCRYwu4GBPrGfWcxdXJQWeckFVKAz9QrVuC3iJc7Pks",
  "key26": "5Az2VvaxRUvU5E7CADQ75UYV8jmZ3D2NtM1ea5qkxDz5yRwjAHRyH2rBqPd5hQxDVNwe7oPN6QDHNq1CaiW2zSZo",
  "key27": "2SL3uLoPNdUJqwVVTfGzt5HPZkUFmK6a7SXHvhCd9fWHJB7MHcHrdzqu2Nq4cwhMKJ9Kj66XjA4MqNErgbLPdoM6",
  "key28": "2PAAzYjvKvn6hYmtC1nr1CNGAQE5XgB7rjNTMB8tUm9k4Z4Cgj4ykrugpv7TucytMotv9tJbFMmBC2MZhPy2doVL"
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
