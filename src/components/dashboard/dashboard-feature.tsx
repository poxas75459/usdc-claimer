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
    "pS5UecukMx8n82LvfC2mjSBETkg8DR7rfJC6ZGktsMbbFxozyPBVt5x7xgkENc5gqV55SqdKYoR9Hn7HUmdhygQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLnbTHXgWv2T6RtpxhukQigctaKzZCJNrj7gaCCKwtjMaHR3WfxmBcZB6X9Ehfwbgsp4eLzaSzE7RG3LcZpScK8",
  "key1": "3W3LnBr5B95aArMUnyHgiHAczsCGmK4TUkhGTbd8UfujDHpBqJW7A277gZmBZG6qqdJvxHPqFKZjE3ajQdKW7zk8",
  "key2": "2X92UsvTbW55iTN6G47sR1cPJrPKzjiURK1XbzByqK8UgpQvxNk989LdrDHiVM3fnJYwJvUFDyK8uMX2RBBKdaRx",
  "key3": "5UyXgNVbdvQupEWU79ypY92XVnfTwo3DXFiQe9nBEXJFfuwrbQCsAMG6e2H12vzCUPHNGB2Ek6zuPjvx4BDjaph6",
  "key4": "4Dsz3yoDSeyDk41i6nPuTLtPMJy7xpht3iXtJQLq1HUKC97Xzo4XMMNcpfKUzckoRtJT5e9K4CpbtUc5oi6nEWf8",
  "key5": "3p5EWs5Jq7ENMio5P9kWqhUDPqWk9ab1XqevZjrmVAWXCpu1t5tZZomBDjRh5aPTFjmssHCa5xNtPNm6ouGEmUmz",
  "key6": "2qRXb2P1of7tLP75wsNJuTKjUMei84uzhzEy8yDqz1AdSXRwM8kdyiEBW7fL22LPUAr7vUzRkCJzhWTB9NxjSEVw",
  "key7": "35ZUNe2djw9R7Srr84krpoqCXUTSfi54akchm661ttC4chqcmZNCV7RiVvArbJb3v3Pw1LCpGSdxPHVyCavqgnFh",
  "key8": "yGo9jvrfmQnf4jNVwG28HYLSJAddopbptAGPxPn67Fjn7ChEjLn3JESbvGydrKxQMotrbax3nCFw1KZgcB79KAU",
  "key9": "4V2duoHKg7rn9G5ZkjntZxLfxTTiCEXacPs1NHkPDqd5y2a4eHjsMX4anMwrap4fMRPS4CMKBRFxFq6ZvkG4Hd3C",
  "key10": "5Ti7q3NG782KezdjxgiQqPnniPgrzZZjPiH3ARxeLW1aUpFnd19P4KyJHu1PKyoxH6ZojVoBCGg2gZWnr8x4GakQ",
  "key11": "614xoCMqfSNcVur34FCPLgCAyztvEk669UykCG6ixXgLThDWD4U1wdjYsrD3evGgxYkGc9dC9piATyFrQiMNewZe",
  "key12": "5uQfALTJVom56YV41YLi3qvBuM9exWknHstfXDsjAHFoYGmUCHRbPGp2hx6US8byUfqA7k1RjXmFj1wNY7ocZimW",
  "key13": "5h8aJQ5aah1rTXMcEW4g1svTea1sVsbmPcbpfWB6v3VogxcBvv5rLoSgVAJQ5mupd262EbpgSNEgTEHLEfLrKBfw",
  "key14": "3x39gFNteXNpzW4hyfp5SMc1h5xm9gUMa4JonzM9aGhhpD4SNFerLA79cPs1bNFgixDatjRaxhj4TVfs8ATAJnRH",
  "key15": "5oBSqYtRQicfzcgefymDUTqqJxoQW394KctB7GM7pM12nw4ZYEWRP28toh7ERkFUf4PUiUb4w5zn8XZhy38YuGSs",
  "key16": "3pUoAPpn7M7eHdLYePRSwifKBRre38UJibPAEDJiYgq3tFgMpostWvrsjUXCY1eq93HJXEULq9Fhqkd2so7RCeik",
  "key17": "3nC9b6n5DkzkwAY7G1nUKbBPiQJCN4FKtQmXNaFsmzYTchVZrv9uPXxDGesjsWMWWMMrcLBQL1zYNuewQfUyc7y1",
  "key18": "5DiwZDsmh7UdAeiNuR6Qy9my7sDkwJtfU4CHMFKix2SyT2AfJQuUgcuhGbekQrHFnDho2VU5v1nmUDeRB3ssgS3P",
  "key19": "2EAFg2zd3XYSyCVyeEArRpLAFNRZpfeXy91H7sTcYwHpTMVN7Sa7QdfwkuarPJoUPnNkzBGsQvoLYWg4YVkw8Vds",
  "key20": "fmgo6Bk59L96wFjX13MjHXbFigg4RKdXqZ77Ff547CPgFHdey4nADuJieVGqsHuRufiDbKgFJ546aWmVQPmqz8B",
  "key21": "3mzR7GmuZBF1h64puCUnU5JwYap5CxUXnwCu4rm1sK8NWojNKvzFhib8eJhNCE67tArXJNSMfTuqUERm9TFbzAg3",
  "key22": "PDcuL9apMt48KcyHwLnPEy7kCKBReCh9CEaq4qveRdPJo8NVZovcqa5oLANxjbX1sZH5xHJPTzLj94oj6zK4CsQ",
  "key23": "2djMR6grfBvURw4j9Fgs3iDRKyqPaR8bniDpSD4GVCYUJSzyHVgzgBrmikWQcWyLgi2uGENCyrPBMVEN75EPUzrE",
  "key24": "5u99uG5mQ2jEPRJNvXko7p9vx7zMtj1pXuNBwCpUtosZz1aJ4i7Wx1XjT12SggEAErkfrDvv6y4Exq4qLRH8GaiX",
  "key25": "hoKt5MUk3wFekCZnEiCtdRXh2Ubcamy9oxX44SGfhnCcjWSqQxxwHV5ohDQfDi97pr6oGa9vxEt9zteyySXwJhr",
  "key26": "652CxdiMd3PZeS28BudmJanQLHdrDHNLEsRmrfkenz2VdKHeMxhvt7vzWc4JFhTjEyg71kFnK3BMhwURhe2ZGQBx",
  "key27": "1kKZBxNMr4Tdj3GXx9cj8K3xhkCM8AT2SaS7WNsmKAcEAqxc1nznY1Kraos6XPC2nvjBie7D2D7KbArHgvtgTjP",
  "key28": "5e1E8qEBebvNAhyBtXhpbgsXsL7UAPpqben1cgD2My3NstxzCrEUtT4SnH2xNirf4zFwGKnaMYLbLU2yVkWCZRxn",
  "key29": "2h8BRaGoN7bWrqNZpFPECxErwh4BVuwnUhq9BbXBaarYXguuCu6Fc1XTHj5Qh2nFCuRXidbSu88dEAfifmAcWh31",
  "key30": "4mL42C2htzsyGpHvjtWxSYPF34zPMoCMSUN8dT2hYnXxYpJy7cyrNkn3S2BuR2X1VFyByA9oNxJKT11MYvj2Y6qy",
  "key31": "43wr8NadTpGp6sHFhNTw4VTeCUFQRS9uiTf6hSD62nvLZLe7k6PwhYDMEvJy5gJ3AcJfMQbYBgE2JSGHuw4CgcEV",
  "key32": "59J9NaZ84xMAjdMVEUCPjxFzhj3ZBLUozBZWZQG1HL7NigtMcgmuXrUtZgvMbjuDPKvKsm3qSwN9prS5hidAgeCr",
  "key33": "3Vd6YtPtHZkVg9VdqnqsgNFwZcSym64sJeNNC57e394QWmbNHQo6Ho3b3ZNEJyN24X8AFLE9JsjLSuaRv23ZsATB",
  "key34": "3X95P7c3RPfLbFfYLHuJC3gYLiqAKTQ64aQzsKi98FsENdYpGXVQmqRTBkmVpaRq52ER5u9CqiUjGuPdvwHGZNvg",
  "key35": "5PVgCFCD9veHHZY3S7o7grFGDp1Un6wzf6EQy5rjZ8szivLqDFxM7eGRLRNfApZSf96pouwJwYWA9cXCoUXMtjgF",
  "key36": "YuWMRUeDPScMSP1q19KWqnxUSgT7UekN5VxjMDFx9HgaLHWhLrFJzyT75bEm2Ndb3g54ZdBaWBqPooKjEEjLkJ3"
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
