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
    "5YdnmymWCNsgop6qBXpS7fkPCTK6mX7S7PzobiDJzmFQYbDX8q5uVewB31unBT3YAHnhjvLZz5y3SZ1hiYCnEv2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpZS8hNGJtfWN2J6fztoajQdt32BsUkyFW64kXg7gsUED9H8TF77kP1dTMYQMDg2L1JsWJYmAe2hhN4djkBeLab",
  "key1": "2yCRkWyWR1TXNcefRAVY4JEoq9vNJ7Vmc8RDFL2YUhJvmqc5NuwnpSkdL1RbRvedHWARf1qkTnKXSKJxeWd4XpxJ",
  "key2": "4MrPKi3d46W3jq2K8tNHCXreSkrBMK6Xbe4e3NQP3bSup4KgDNkG9W7vz5RTYmWKWgsVKCmge3ManRZJkHag5HcD",
  "key3": "2cHqY8sCvtboDjeqVgwXy1QWmgHBR8zxbo8aEMconkV1FL72LZJkfGim52dYEM8XvfeRjbUE2rKjS1Bi2UFyWVd3",
  "key4": "52cswBDJPTMBadSSxZbCw67ygPXdTVcaqN6JWnFDiHPKVM8PVuEVvPdhwAxhuUhhtvZyUBuy5Qh5kewHGYqAvCmR",
  "key5": "HRZ7KQu3kb4Lpct6afx2v6dLTDer62cM31P6V77B2F5s4gpnfSgAQriLbZ8axbt6zht8C27rEfpp4ggZzFwvacc",
  "key6": "4hRJ9vW3XvFr5drJL4moiogSjCYcYU8M87bDjExZCAKdYMxJxPaLAHPRoimWJfCgZDRreU96dsSTRjPtd65KcuPe",
  "key7": "3etuu4erTCjQDAF8vjUHTRFjneVtd4mBjfSsx7VP38Pt2ByTXTP8BK1aXWTKebKoMBUSJRvcktjShhE42zGYuuNA",
  "key8": "2CTjdux5Ua9UyohGFzZGpQqogPQ3hLFobFKHYhN5XqBxRUziQE1ooHTFBdCCcLyY9nMUbZWYTEePfEcJ7ibRNUeo",
  "key9": "3x18Kue6nE7G2KHXpiuVMGiUWDCvjHdRkj4XeJUUJWtD9YEZizFv6UwnfvZtMn4i6YNzYVi6wYjzdgRR1PVB2Cib",
  "key10": "3PMRS1oBQvu7gY6u5fzYuRL5icDk1JFCWD6Zy63UC3xZMXqCs2vgsA8uHSfeCgVTqPNufpY4A79FpDrT5mgzFGJN",
  "key11": "32rJHur6p527rpDUUQ812KoLkGTcR9pZGL2HuCovtsshXksAqcHHbzEPscctAE6oYTFcBLzZC1g7Ud2seePB1XbN",
  "key12": "3TGL7HerYx2yDJK9Js8mGRNdVJvvysY4QF3ZLrhpqijzHKtXi9n2FuhXHNZRSaERyXQH8HxorCtHPm7kpyXHDHqw",
  "key13": "4AXGVwtGN2xiFrLZr6Jo99mcHznhQ9kfJ5mnDAeBduVfwHeShHuN1BG8CGp1tkr3W3xuPRVRgd2UC6cctuS91F9H",
  "key14": "2oZ88FX1wPrvkG46MxbLBuLD6di6p7pCvd9aWKZmLDAVuzLDzyRocrywgRBjtF5zA3mgf77TQp3nq6dghTRurXPX",
  "key15": "2MmWv3j7jgSyGsGFXK9tFQgp4nXf4a6SeHD54DEpvsDSJ9C9jcNRyag8gNFy72oeh5n9h27YTQNyEsnTaWbGYsTh",
  "key16": "4DKwk1qji877Hy92woXs6cEAvnSJKFLqKyjdhasMFAaU6rWnsTHvXJMAHCABVvp5UMsns5UBf2EkEiiGnA4jtWWw",
  "key17": "4tJX11VVaPzQxNaJtaZRkmuEsTsW5wxZLpkgV35SQVtDSdTEbBnpyS1sFqmU1KFbx9qY5SXgwG17uNkqPYEXxr3n",
  "key18": "4TsUtAHrnP5p4TJC5aM75LaWGqYJnEBbFf6hps1JeWqtrF5oaPGSAqkYXrRGiqiDJz3o11igTkezKufJSC6nWRCB",
  "key19": "2xXY2i4xkh5sUL3yyw9opywkU3EZiQ1yyHp7d1vuHMoQn9igjA54XEu15AfSgD8EDUK2SUKKjdVqpQRErB9Uuuko",
  "key20": "3gYF2Qrfv72kGcF2dRTWrXc672BgwDEnsVsECziYunPTzajkMwQoCsJuyHTsdtscDmrL5TNjKxz8zwHniF5cdrgg",
  "key21": "3agR6yHoP9kBbyL2KVMhV5qE31pMRxMkpAF7cc2w7ZCcHKdxj6CSx3A15iSCfsFNth3JWP5ddTGXsY84zpsE87cd",
  "key22": "58FUcjAQezfNGKJLTqnNKevvXyfegjQpw5K1VraKsuZcmdBpg42ZBXEeSZcxU1SAKKacQBAXQwvizmzzdAwZ6ysr",
  "key23": "4iiUkPQLzpTHB9qZLXnCedHhzeguUTPhk3V1MRgRWBUAdAKz3QWehC8VeTMGRadU11kXxgx7FGUF7DKFEwrKQhVo",
  "key24": "655GoZBd8NbSSFARC7SGb9GcxN9W8r7az77MiyJ2vYYBQasnQB11fEjLoJ3ooXBLvnnLZGjoD7nZrzGtAmKqrfxJ",
  "key25": "HkstBU9zgA1ywVt9qEA4LkC38srhBMMzjdSaFb6jw1CNSz23YPwADDQNJsjSTw6G85kkjjLdj2AmLdDQdbXGMec"
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
