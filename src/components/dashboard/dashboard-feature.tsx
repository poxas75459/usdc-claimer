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
    "4cexAwDy3FC6J2YuYfD49oBh85Gk7CQQkDrfEG57VUfge7FdMtAYJZX5cLqrX3zWVdpGwEeWFBvyqKTBwms8YkG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJk46YsyJWWsuG3QJr7PAH7b7gUrz12fx1gv5ZHek5yfzuoumffAr9oUg9WyL2DVHc7RbjRtvnJHdT4NfoyTWYA",
  "key1": "3yQayzt2JERXBaLwXYHuVNquY5y55GQRto4z8RrHjtkTcnY2giNGCGusVjVPUVcJq5hqirTSUhEfK4gk8fuZGEYh",
  "key2": "3pY3fDXCkA46ZDFo1q7YhM1cMtMmvHBfZ3TJV97Sn7Rfumz9X9hN8Um53Kevth1V328wmRJAJmFba7TH1RimWFbY",
  "key3": "33kdZnd5fmPxrymwHLmCQSDDNW2a8Evtz61vquYDED4m8rEbVaQEjaSJ5x2PzmSt2s8DP7h3411k5itYgusKRn7Y",
  "key4": "2ohXqXqgchB5QwwNi6sFFJi6KggPmbB9NvVMPE39yzo1QmeuhyRekV8EHnGnjeHqk2Ge9w4dMeFdYeBGbYN6Nnnv",
  "key5": "gutZa3HFSfHjddYNCXKAdbDyJ5mn9dCHKdMR9mKv7dc4P1DoosAzqyop5rcGFvoCbdGS9T8Ya52J3WjJjL99DWi",
  "key6": "54pivd9BwnWHZaiFqs9Lcxr3HKeyNWzYLNRRjS1WqVNiTCk8BAggxSPNJoxsFmvABrjxamPZUt7FcodbXetx5tQj",
  "key7": "3cXaPYGz1z19Vz58cWthQsNaBhRY5EAUPscEEZVcmRaUar6wF1Tzd6WWKLUTASCieQvEyb5Bb1nLCa9Ytxx3MC9U",
  "key8": "5swnzy1pZ5fvJfoYybbafCmk8qgNNpdWTYQE9p5ABahEftCWyPh1UecJqYoschfqB8RWccvgGEJX2TUs9yaRxXMe",
  "key9": "2sMvfowpdvuVnqbts3DE4Af5iANoNaeGEmsHEzZ97znXUD4e2NFyZDLvrgKbAmU4V9v1Qyfq56yEEGVtVTH48rkY",
  "key10": "2fQsSBPdsuWJ4pBJ5JYYw75NVeo1v6igwtSUKW5vMQn7x9GNsFt5SX4JDjMWF1F4rR9j8Se556mGgezzXBej2RtN",
  "key11": "3KNfHasogFKaMeL9U6a11MrXtNa4VwDA2ZpyJPAoE8JDhFM97jwaSQCCgFAos87rUqjW7G2jLqs8zFSyG2Q8Tv9G",
  "key12": "4xWs83HdAe5wi1zSf5upFHLhcz8PWshmWFxCr5ZS8whdWnsPaRcjcNe26j7QUPbSdv75MPaSqXr7F5n4JgDGeiop",
  "key13": "3KCwLSi9zq5f9KuVENdjs4ZsLGaxBCbJxRc3fCrF1k5hdiwsG3Ya3y7RMrdzZTeZePL4aBHbhZA4J9cQg8f9xWhS",
  "key14": "3NnW6D8H5B3qp6yPuPU7czga3oT88hBrpgmgKJiDESLpJMFZgybdcrdcCNMGt1iMYcUjyj6xdtGyiNbJPUixzLcd",
  "key15": "5qj2DazazGKKYuCC8pMbD23Gdpce1ipUuHy5t5oLoNzDibu9wwe1KmBXJB7B8ipow2BCNAY4fXfbLZw6VsHcyjBb",
  "key16": "rFiwpm1gHTcEYyTiREnZtezR45u7iqM8m1jsrBXMLKbz19E8THDh9dKmSwpU8Hgi8cJi3hSoZ4NvDZHc8CiwA9V",
  "key17": "3R9rZysdTUqYhatKK2nkjzU633ut51QtHVWg959HT1jvf61nRpYar1Ey4hBmjifNyVYHbarM8gVP7eQCNbjhMD18",
  "key18": "5cjcGDCwV3TACdS8fNUG51g28rH9qoCZCTo3cBj3G9wVNytif1BAjSCwjSk66dEd9gVsBv29VC8j1x2fmjwZTUzP",
  "key19": "2E22KVvyRL8AHfe9bDZJrc5D72qwvxb9qSnKY5nnog3EuFuBQvD4r748fwwmND9TYC6Y4ZvJyAnhv9rtX4EmTaHL",
  "key20": "2ySuLvQaaVQphfNDHDgrobutCXYTh3gNZrwKpx7TUe2BSM8KfNCpfyoqub59YPeEHrjueLzXAbYzMNg98HPF5NYq",
  "key21": "5NYTY6WYq9zcHuvnvrBt5i4TJFDiHrUe5sjwig5WMaBqFcuRguS8QZz3aG7gsJNEVXiJeCd3LkQNYdWTpbbQrDfo",
  "key22": "2X2rmn8oZFFXEBRGLRBvWaSkjMp7yoNDxe3so5gFMNAYdNcAxwsRJDBCcpVN9tkUMkkbB4JZr5LYPJ3sa7UKYVca",
  "key23": "3xJ7okfEgeM3Bu7iGy5xGoSgkob47pPn3BfVmuYRBUiHux86K4iAHLJhUqJwhDgYuVQqtFL55mnNacsn1tRMbRkf",
  "key24": "2Sy4uN9FofFETLNTpAcDpbdNYPHpkwQ92ww6xTDwVLiSRiQDbjK9YLkKZS3JWT65smMCvi6dKr8GAPqT5EiKLpca",
  "key25": "jY4tzExQ7dqhMouC2dGaGhuf8xLN4cebFN2Ly5CHsFma65EhKmaE5aNSiWPyxgUbooy3bh3HoB5nBRK6tenQKwW",
  "key26": "3ryYG87MJxEnBTrdg8Uhycip6xfnt85zCwaFwSnFt8pu5go2shLYhfHzm3xjg1LbrjXc1kzVknwCQUnCMwds1PWJ",
  "key27": "WpLgczaff33w6sYUknScyfX3CVqjqCRPiYwaxTNjae3JsZMghEu2g9XEGJfViFQ3KBxCsaFgegVPMHW4rte54Sh",
  "key28": "5mtSA25ixjtpASeVgy1nJXPofq7GJ7XmXxUes9R4o7vEN8u5xM2vtAHURMDs8X9FsxTQGVc42Ncemky3Pct2ZmBP"
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
