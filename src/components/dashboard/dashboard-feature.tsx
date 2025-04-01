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
    "2fJLMCxbBnwiRDmphVrwqLKCfEUT6SiSobDppqX1tPjN9hxwsrTw15V8e3WkVGBc6MJEu5KpWjLyVPuBhAZ2nTpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwkexSVdKdBXnMUpREABTdVNUNkwyeJ5k4NyiBcUYuzWAtPTXEjpYh7AjXMvUNBQPqavUZK5H1yAa2CVhWVNnys",
  "key1": "4QRNFKx32rLTNzShTnjy4maSN6UyHURGCmFnHPnm8PWL8SbX3s4P566zt72dM2C1Y67aEzoLG79gAXtW7KmcZYbX",
  "key2": "3w98317yscTzzcAuBuUbVj3h3zTB2izeGaunEVcTJgqi5LxKSSLQXewzoGoJ1HREHaUEqSA6Ccng4FZAXgiHFGt1",
  "key3": "EqMtKqUuT8nDERJKiQPvs2DGqbM6cmCPA9qL5LSzqN8xvpxAeRSdSMYd2RtWtcFMs26YysBr2UNqGXZkviXywSe",
  "key4": "4hLJ8tJuYBfUpqBe6cFNZ9JTFmAS4Cne9uK8vXbrqngXRs4hphnL1xyXtkgNLAR5MCPCeoCCLvUfibgzBkq843Q",
  "key5": "2hsE6kcLehbqBvEu2GYgHMAbstt9XNY8qNqqSgsiwRws4JZgpjMDhqTbm6u9vPWeir4mte8b8t4p7ULHzL2eZyGp",
  "key6": "4i5TqHDBQQCiLvprSoWLUEvkLFpp1YgaEsoqAagjuELooB5a5DTjvJz7Xkc9M5r1HeqbEfhzQUVXD6Lt29tqjVW3",
  "key7": "5uRmpyFY5KSELFVrP6LmRsjciexbVApYuaYUKkqWEf4ajjRTjwwF2DgYtAi7BNML7Qh8KUaoBPeiSoZ8qRYUSWME",
  "key8": "3dx2h4ojpKtsN9crZb7aqSzdXrQhZRtqp7mAj9vjRWUVRuYUKgiZgTxutX23VGwF8rVN5dChHc2mddYFoXamtDKc",
  "key9": "2zqfH969rC3EVFvSMS9ZyX1qsWrxxwFdUV3WsqaqLVZdYmBfDpknBHCXKGJtAFbXneV7qRJF3hDhEtSqD5HbBoyE",
  "key10": "YjhPo1xNyBJv4Um1DWPQRoDigHJhkhFEWFi79auZV714HSux38rbgUUggx9o4V6vWKjZXbDf1NJa93X7e1utum6",
  "key11": "3EvU4LQ8FfY15G14Nh9A6aDtoms7ZEx6qYJc5DMMSd5dYc2QrT97wDC6GBNPc5dE6kV6DBUi8mgufTcdG84tuVQ4",
  "key12": "3H4ZGJfiZV98pTfvh5EwLnLCG1YLZKK5AweGSPhPFxpQDYtfRgLaricu14RHpgWnJ75J2LD2FTFdBYxZEanaaYRE",
  "key13": "2jrLjQgJYS614o1eHmpBwte8tq78dAYNswD6PaUV8nc2KQphdbVqVD9S3FVadYwqF8KoL1mpKQBk5v7hW4khSFyj",
  "key14": "4jGQkqJfZTccto731FBik9ZJdtqoExNGFkg8yv2tWBesuQPpb1eFp8t3EjTUJunVKwhJSj5sCNjuXZU5m3WQPdtU",
  "key15": "37rg5F9etUWDczris3ge6g6RF71zbR49mwxjs2jK3awyJttNeYzWzrxUCE6JGodEoqn5XSk3kU8uVCzVVNm5hHZM",
  "key16": "3mrCGSA3oFFz7Yfyn9KoiFtfrdmoeD8u1VswNZB42GaNs6wUtFXKYmHoYuAdpDfqUEMMoRBhr2qh6oysHSeKpm4M",
  "key17": "2gk6SCRTkqc88VLYHTsgSBusGvo5YEL3hwcBK9pXyUf2BrnhJq8r6rU8XxeVPu1SPCXZadDFrQtyqErmVTx6ueEq",
  "key18": "5TN43TKrWceKbk19Aff8LjNd6Fv8Urc75Eyua826MAtVykQvjGbT3vRiLvFW45Muc8BtyXZvQNr6dgEBtSX3JTfs",
  "key19": "2S1dVJMEYUcxmFg4SyAnRrvX6Fbrdikw86ny9M13mGhfZpYPRq33a8WZN1ThxGTKoTdYh4MJUnwFgkBpaMmM8ewA",
  "key20": "34eocj7yzoRSyQUU1osMaFqnN7bRm3egM3rK9nTsumKHUeg6Nr9EEAoHmnEof2i8KwKPcpd93viUMR4p8aFeRdDq",
  "key21": "WgrnYUyYueHriEvyRac9TPzJcw7WDWBpRqayMLYtXJ6aNq6x7e4XViDvh5tBUbLtHM5bdpguozBqEg5b9sWHQ3z",
  "key22": "2w6HRmf6Uc5sGau5hFRXFmiKRT8z5BYwEEhVNm2BvooRV2MzeL5GFMbphRjeH4HFxwTyR1CSJUdYNRt3Wc276vir",
  "key23": "5TbgvFXxDcx5ALu1ZZntoMTie7ccJvRy5s6ApMHvyBkQDfDbKVv66vCQ59c85sRk5zy8gCjwrauZSEb37bNAnQM7",
  "key24": "46vcpotaPhQmXn42UFdR7vhcDjyBsgtwsNd1sAQxL4JCs6RAFcTQMe7EM1QiQ3rkVVP5xtaj95RdLKtGp4h59gUy",
  "key25": "4cZxhBQ42n7VvsMuoo7czcyVUpzxt1ffKgKfP1AZK9whRv6saFzq1gonMjmVCF4sUoLX631VQ5kaEn2HD6L3bNbp"
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
